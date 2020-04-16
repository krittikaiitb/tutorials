# Tutorials
Set of Jupyter Notebooks, along with datafiles, to get started with Scientific Computing in Astronomy  

## Ways to setup Jupyter notebooks
While Jupyter runs code in many programming languages, Python is a requirement (Python 3.3 or greater, or Python 2.7) for installing the classic Jupyter Notebook.  

### Windows
Install Anaconda (it has most of the packages we need) from [here.](https://docs.anaconda.com/anaconda/install/windows/ "Installing Anaconda on Windows") (Read the instructions carefully)  
Open command prompt (Press Windows button and type ‘cmd’)  
Enter the following command to run  
```bash  
jupyter notebook  
```  
(or you can directly launch in Anaconda Navigator)  

### MacOS
Install Anaconda (it has most of the packages we need) from [here.](https://docs.anaconda.com/anaconda/install/mac-os/ "Installing Anaconda on MacOS") (Read the instructions carefully)  
Open terminal and enter the following command to run  
```bash  
jupyter notebook  
```  

### Linux distribution (includes Ubuntu)
#### Installing Jupyter - Using Conda or Miniconda
Install Anaconda (it has most of the packages we need) from [here.](https://docs.anaconda.com/anaconda/install/linux/ "Installing Anaconda on Linux") (Read the instructions carefully)  
Open terminal (Press CTRL + ALT + T)  
Enter the following command to run  
```bash  
jupyter notebook  
```  

#### Installing Jupyter - Using python-pip (Try this only if you are comfortable with terminal)
Python is usually pre-installed in Linux distribution.  
If you are using Ubuntu 16.04 then the pre-installed python versions are 2.7.12 and 3.5.2.  
To check your python version, type 'python3' in terminal. If it doesn't work, 'python'.  
1. Confirm that your python version is 3.6+.  
If not, install python from https://www.python.org/ftp/python/3.8.2/Python-3.8.2.tar.xz  
or use the following command in terminal  
```bash  
sudo apt install python3.8;  
```  
2. Install pip using  
```bash  
sudo apt install python3-pip;  
```  
3. Install jupyter and other important packages using  
```bash  
pip3 install --upgrade pip3;  
pip3 install bs4 requests jupyter scipy astropy matplotlib;  
```  
4. Enter the following command to run notebook  
```bash  
jupyter notebook;  
```  
