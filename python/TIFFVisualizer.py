import tkinter as tk
from tkinter import filedialog
import rasterio
from rasterio.plot import show

file_path = filedialog.askopenfilename(title="Select a TIFF file", filetypes=[("TIFF files", "*.tif;*.tiff")])
if file_path:
    img = rasterio.open(file_path)
    show(img)