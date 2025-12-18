"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { defaultDateRange, tableData } from "@/data/mockData";

interface Filters {
  search: string;
  category: string;
  status: string;
  dateFrom: string | null;
  dateTo: string | null;
}

interface DashboardContextType {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  resetFilters: () => void;
  filteredData: any[];
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

const defaultFilters: Filters = {
  search: "",
  category: "All",
  status: "All",
  dateTo: defaultDateRange.to,
  dateFrom: defaultDateRange.from,
};

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFiltersState] = useState<Filters>(defaultFilters);
  const [filteredData, setFilteredData] = useState(tableData);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFilters = localStorage.getItem("dashboardFilters");
      if (savedFilters) {
        setFiltersState(JSON.parse(savedFilters));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dashboardFilters", JSON.stringify(filters));
    }

    let data = [...tableData];

    if (filters.search) {
      data = data.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(filters.search.toLowerCase())
        )
      );
    }

    if (filters.category && filters.category !== "All") {
      data = data.filter((item) => item.category === filters.category);
    }

    if (filters.status && filters.status !== "All") {
      data = data.filter((item) => item.status === filters.status);
    }

    if (filters.dateFrom) {
      data = data.filter((item) => new Date(item.date) >= new Date(filters.dateFrom!));
    }

    if (filters.dateTo) {
      data = data.filter((item) => new Date(item.date) <= new Date(filters.dateTo!));
    }

    setFilteredData(data);
  }, [filters]);

  const setFilters = (newFilters: Filters) => {
    setFiltersState(newFilters);
  };

  const resetFilters = () => {
    setFiltersState(defaultFilters);
  };

  return (
    <DashboardContext.Provider value={{ filters, setFilters, resetFilters, filteredData }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within DashboardProvider");
  }
  return context;
};

