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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JY6VYPC%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFI0%2FB6A1%2FNrQaJsLw56SXsnhstGqhPUWgmes2%2BngAIZAiEA48DpW7VTRQfLYyWJsnFn1tJ8nRL61Sp6%2FDai%2Fs41CKoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDI%2Fo6%2FPIVPpeJLecKSrcAy520indwKXq9UQZRqdGI2rd078oGvN19AuzLkY%2BiT8PERkbC62ifvbRj9VsJIJZlTia6%2FtfAn%2F%2FHM3LVQBGSt8DwldW4L2GboX6OlCs0H0KSpo8ezYZfLRTGC%2FeD0q2PTbBcg3jPrV7JXWuHuq78za6Ub0EbwhA7U1fz2B8IPTG5JTJHzxgiEsRtbj79ysQqgHB57q4oKIiGuBXZREvE5BudP5E1TgemPX6Y2WOEnRGQgQbFzbx2p7VDUXrbDJu7vJwiILC66UUrsFTfVtjXlOwdk%2BVJE4BaHLuDyXXR%2BY0FcJ29%2FsxKwQp4S0JCZA9SD8CH%2BuR%2FEV%2FtsqT0Us9ZkN6dN5vNDnyZmd9FZ89tUInXRKatny7qa3%2B9t1KK3OQ1IDQt46Grk3bFb6cVE0B1BnJfteT%2FHTq%2FqMVK9DQBXnLtyRCouQxUHP4E5NrMN9Yc4UWlIVNgOVR0%2FMzErtOdbMrYXMlX5Ml1Ut%2FrvRahOL%2B5CanRljsjSx05%2BuD2WivDNOGgAsCiqRs11dSsD5ze0xwwHwuE1BBLmQDztftoi1E8CIBt0X3UbEm1KNqRZvOEd%2Fk%2FgqMfL%2FxDC9et465C%2FhWPoPPHXiPcEt8RPbQ1jMcQve5NJ%2BVbcVzmMEHMKOBkcIGOqUBov6PxPoHbNLf3yGUTXR1aN4yagG7MKgYUBsjcbweofxIQyjESbs8sXXfWQsgoaV2WCqRX4PzR5vbz1ehNOUZXUXQIUzq4f2nXMeCeBX8BfTI8%2FWdt27lCICT81qq%2Bae%2FCg%2FD%2FsD0GBx8%2BElo3FYIFViqNcyx9gf2%2FFZHFWrvbOwdI6XHtcfqurRbVeGb8UNd6eu8cGLJyRTeYRh%2BrPWC%2Bp79nJkF&X-Amz-Signature=d45492cfc014c511fe0194667bb0a6a8ff1312e25e75564250e39470c37c97d4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXIRFF3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgCZyz%2Fb%2FlKw4YatNmmm1NNdgc2QUFu4O2FyZmMibdfgIgR07zrGMG1Mh5udo%2BUPDDB8hzxrg5xdkhDGcg74G3OEcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDF5zvjIwNTAmxtPvISrcAz8QjFvuPtIFAQnlsALT4TXmBdXiMlBsbqmW9n0lnWBPC%2BsStBhQkQfRDCg0VtMsbSL4XIcDglunk8AQUqYqUfnWi2dH4v6iPTD%2FTXx08V1f64gfkKraBl5dQYo9mm%2Fmy2Rjv0wXHKSz7BzSZnO4klXUzhQryFmRHvImu0zK6HR213rdse%2BUsIlTrI%2FH1Froh%2BHtNJLIgCRWCo6uvjGLtYRBvlSHO6AHn2RlYUtkjcXyhtFhvBDemhfsjURcaQR3i4CtYcbxEK4K7w1TWA3LgRmrdpGvd%2BExtiwEgtj5VteckeQl1Jn5o%2FCNI3QNdeUFjQ2tPq5onFHL%2BA%2BCQU1BB5ZvT87VNktsycdtr6G2Z4ph2vFBwyOHkHA4aIHWRdVk1Higosu7RAgfiSnmAUo9YXHoTduBGsc%2BF0lZwBGdimirM5Qli3a8KY6Q26ttx0xvedPPbuZUdGuJEd1AR92KUs8MTP3yYHl5yuBkn0BIaNVqahiwNyW6WbQosY39ODRQ29QS6DwhuyVq%2FgcT4kFu5nKryO%2BE%2F28B5e00YuIJab0HgqGmU0dITgeGbjRxTIVnMaoqow%2B3%2Bvts6j0lAOPPh0vv%2BviDV6NNxsDxXaG%2F4QCKTuzdq2YutIVR%2F9M3MKqBkcIGOqUBAB98itLrhkL0WFRLNDaH5Heg%2Fdspl2nIuK185dI6oJgwaQcWozsMdjpT8yI8Z9HHIt91sO%2FgQ2JDRVEBuomGX0m6tkeBaXMRTpCz5HldIl7yPozoIZtlAYjaFFpEri5GkXon%2FmxTJIf%2FG4mAub54U0AEaRMEePlsSeaqmb4XbcDjCRUAjWjGPyZpBY%2FQX%2FPu%2FMoaePUXNQt8TvnuLmP7WlyiGsFm&X-Amz-Signature=fba893c39947b78ba46f5b015371ef3af2437b10956b7d0a37c8269608321097&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
