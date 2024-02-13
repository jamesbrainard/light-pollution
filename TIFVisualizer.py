import rasterio
from rasterio.plot import show
fp = r'Harmonized_DN_NTL_2008_calDMSP.tif'
img = rasterio.open(fp)
show(img)