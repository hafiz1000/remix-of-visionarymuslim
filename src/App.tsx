import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MainNav } from "@/components/MainNav";
import HiddenMessagePopup from "@/components/HiddenMessagePopup";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Workshops from "./pages/Workshops";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ReadingProgressBar />
          <HiddenMessagePopup />
          <Toaster />
          <Sonner />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Index />} />
            <Route path="/workshops" element={<Workshops />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
