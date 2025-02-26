---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBH6JLDF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCCQ5QtLS1DqAvZJ5z0kYUskR3P19NxoHBVoxTsG12E5wIgd024AFMcCbyqHLiGy0GOEa%2FAKjjkzeLVxdq9ZES2qc0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIEw3Qn1LQYlmvomfircA%2BGtTXokKU1PhKyr%2B8R7l12XWpacCmBkW%2BrXyLNCHquyK17CqCACrgzG4xtyKUoFtloRcKiBUfF9nsRV0hMl5w36T3QUJMhqq5XL1UoYD2CA5D2BB%2F0RII8BtukyWzKIQDQwtFNUwnHufKtCaWsFCpdxET2096K4hqHa0maigrju3FZhg5sI73F87FMlJQnIYkkGPvE81STI6oTxxiSVWeaURkMxrwJjIemrM2pU77Qa%2FKqI5pgBgNjqwcQgG07wIoTxMDMTRBk%2FRPI95gUOdFuNME4AclSpVloxE0db%2FwhM7Bdu6ORtUMIhexnpMmaH2ohHXpjUmboolhStg2aElciHMapfkWEQvGv2ukeBwirFQewT8JR9R6BAkqHQ6i0NrVvl6Qcl45Uvj0Eav3Ir2NXGK26Ly2dElE74WOYD6MPtPdo8SRT75wG8nqF3RYxS6ZVifZtwAgprly2vx0WIbX%2ByV%2FYFdCfiDYgFaxyhzsLgb5Dfv5UjqStphsVqH6DB3V9NkIL9sd8rvt8t7CpM%2FVkMeqiI1OurAmuOFShiocdxZZ3E1z1zCxuep%2FlUB8zRLB%2BOf%2FcNBhi%2FSScxnhEnuBBcpiinIm6oNqOL4H0Ee5edm%2BY%2FcoB1O7q2vhg9MI69%2Bb0GOqUBqH8CF3akKMnXA3x65W0nywtvV7QDJu0HcSvMqLE7eKqujRyX9ZzHtiLgSJ%2F8%2F%2F2tk0KOFdUQxo5XOWH%2FLUX9rbj7tkxfX6ggXMFLzwXSdKrbFYqQngaea48mJUOCMXRGhnIJraTwWBnXqMGRlg4YFE3FcF1rdJvNnSujA7AxuwI5xmXxjL7B2nT5olkEDtSTIeBx8l6MsmQ0dJxvVsEd7mGcWZ0y&X-Amz-Signature=93c13ce6745dfdb1de6e4c684b4cfb063c544c7ab29cae9a5cda094d876f689f&X-Amz-SignedHeaders=host&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLC2S6L%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIASxrUoWHD5VPUNrfUbFA8YD6zl7vU%2FqtKaIJGGlBNrJAiAJEK93LJM1ud9lChA2IBeDnuPAA5GZCN8z62wS5X0O5ir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMSNXviYbMmry%2Bxf4PKtwDnyzT0vaouIZ39%2B5az1FZ4jybFpuQjiNK8b7BA2dzj%2B2%2BfLgm8BIJaBKcfsZ050tA%2FlhVts1er9u7UT7HKApnigq4n7qSx%2BukPRP1q6D2F%2Fmdd1Sd8YQnCVFLj45gJ6b7PacUT9sC5NSxmFVMHK%2FtJvaImiGpoyWXk9DAdtrdPMAiLVXSfDlX9e05SmqV48oHidsCevBVsj%2BFw35tDtxBxNb%2Fad%2BOEhqn2cKRujPyivoOVUo9%2Bcxhmb3KLRs3xxf4kifSaJS2HdWs%2FamAy%2FzJcXJi6nG20FtkNZ0bajBa6lTmat3xdDgMlrFafIPPv53ycSClKG6b7pyQz7ksyKPdMaIzRGILz8aNMpO1Jt1x7emlymt65IFTvZLHRwVi7JtZE%2Bgx9tq1zPnhr1udXJF7W9L60t4Np2WR3pFImfR%2F1n4TPUUL4guUquLyXK3tMF%2FN7PcIhP5hGWfewQXoIznk6rLfR1FW6w6skqiAS4NQfkR7ktVK1KONboDZ2RA2kaIWsa%2Bi6iEuwn%2FYi9JQ6jBr70MOmXqRgcufJXxd%2F3P8Ohb8cAnmfeATkumD65f5C3fk66uoyjtJcp2YrTPyhynFY6ORlYFhbKrUh0EQ%2BZ0RznrHrCwEMXfU7r1%2BLg4wxrz5vQY6pgHQ7Wfz9CjYEKRGQa5qWT5RBBl5j0JPYw2zlQnY3YSRk9qZ2XENcmkD%2FWEeCOg3za1eBW5R62Tnbu%2FrMT9YtPyDEu02G2ZiSdQEHe7f%2Fkjgx38aXF%2BY18QsNSPnb9pjnlLw4Ii3iUSx0hvCKJNkA2MqAzMEytvlwVlJcitkGyFjybrA0BxcVhEGzB2%2BcYXvX%2B8IgX2g2U2aC2X0BKuZEzVj475FFadk&X-Amz-Signature=b9f750ebbf34d9c34e6be11174394a18814d0f51926b50c55aae6b6351c12d02&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
