import React, { useEffect } from "react";
import { Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

/**
 * PdfViewer
 * - Renders a single PDF with a full toolbar (zoom, download, open-in-tab, search panel, etc.)
 * - Keep it dumb: just takes a fileUrl and renders it.
 * - Styling: we let the parent control the container height/width.
 */
export default function PdfViewer({ fileUrl }) {
  if (!fileUrl) return null;

  const zoomPluginInstance = zoomPlugin();

  useEffect(() => {
    zoomPluginInstance.zoomTo(SpecialZoomLevel.PageWidth);
  }, [fileUrl, zoomPluginInstance]);

  const defaultLayout = defaultLayoutPlugin({
    renderToolbar: (Toolbar) => (
      <Toolbar>
        {(slots) => {
          const { renderDefaultToolbar } = defaultLayout.toolbarPluginInstance;
          const transform = (slot) => ({
            ...slot,
            Open: () => <></>,          // hide topbar upload/open
            OpenMenuItem: () => <></>,  // hide in the "..." overflow menu
          });
          return renderDefaultToolbar(transform)(slots);
        }}
      </Toolbar>
    ),
    sidebarTabs: (defaultTabs) => [defaultTabs[0]], // only show the "Thumbnail" tab
  });

  return (
    <div className="w-full h-full">
      <Viewer fileUrl={fileUrl} plugins={[defaultLayout, zoomPluginInstance]} />
    </div>
  );
}
