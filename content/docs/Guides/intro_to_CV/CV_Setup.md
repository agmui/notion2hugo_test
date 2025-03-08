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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUXIPP5Z%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIAvQF%2BxfGPyXQ3%2Bgd7Dvp%2Bw4TjkbtJBxTXqsVfaqjpO0AiBOPKu6R64Epp04qd%2BC0Mm1ZSYuEAeEVOKmVwoDdu5d6Cr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM%2FtCz7oRWFqUe6ASrKtwD6sSxWkzDuqZSCo%2B0LM2jmyRqfbw2z%2Bi%2FhYDOj0Jo%2FdWw2nMuQ%2FCcAgIL65KvP9uTtYZ%2Bw00veQx4PxNn4El8LOHuPR0FnULKCeIC%2FQoYbgGBDr1415GVUonbbx3Ge1WDF%2FdhYnhvj5zJ03oPYaim6OhedrgwZEoARfUVJXMLtaxh9JW4bue7CotawENS7%2FETSteZRJh7WFqdzOdTihADtKvXTUV212M6s4gP%2FCuG%2BhmNf5XRzGDjtzlsWCgWYFHH6nUARyRWIs4VL1uZRBTs2dqYu1%2BpWo%2B%2Bi0pSOzT7DPV1wfGV7l%2BOdumxl9jl4M91EB1iJb8cNcwYoFjMz19svf9EpwyUu3VhYyetJUFqjHTQLptjMMKdM4%2BKsd4BapvHARK8rTX%2BzJoRnP8PAgr%2Bw4uA%2BlH8LB0xLd9Jxd1FuZqaPiEf8NPRbb1zVSeJcf%2Fz6v607U1Eu8%2BQWo%2BgE3Hmrqe3CK6Xafz%2FanxkxCR82yfU4OWumNK1y0eOG8mJjNiqLNRimULoVkYpekxZUzYtb%2FNnYuAxZ0lBsPHtSAqbKl8nWzLKu2e4yON0NpbAYDhVu4YyDwJc4CdPI6yIF2vNBKzMIptG8NhD6WBMC%2FqQ0p3td%2BpG9kTBG5iUDFAwuuCvvgY6pgGkqRPv45d3gdggevdO4f9YE1Q%2BCdK%2F84WvWIeYjZ8R4Ejp3O4g4RnMLCSYZdAiy7zql1zCyucdoWCAAVmcZws1b9uqRtgEhwc5g37RLHNiARr5si850H1SAbmdKkewHKzIar6C1RpVftVrIIEg90HeF5iYsm%2BRiyjFLYWvXnbuJL9vnydjx6rOCOa0qJn2g4TF7g0q4A3VQdtkYxfOPezDdZNwBBEr&X-Amz-Signature=763485a881c738f01329cf0bd1793c031d7f42e942b5b4de2cdcba6dc2843b02&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7R36R3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFirUWkl%2BM1IFDCsJfh64xqKbSwcwVgtmzc7C%2B0BV5D5AiEApseYMS8xkvMjasc8IRCPObdfEhe9v7rumosodNZ6c6kq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDEZ1Xv%2BTHv5JNxrJuCrcA0AQTEF3ELy%2FAPRtrWGB8ogd6A72iMt9WbSpqG4wPToeRSCrMtn7zfO1Z6VilfhGC%2Ft6REqv8Y2JPwZ3BOJBhE5d3TkBVcok1oKs4hRrrwtSzyoA486dvBGeqngzFsxdvfyT%2BJhEUGHrsd%2FouhGlruuvpIBtBRqkmZEE2qZ4tMSnYjMBKYCVVi7Iatc83tFGGMxcf2IkTCSCbBBFz3d6RwLcZ74vsL4KnOZZi%2Fp3xD2ascP7OSmyBZdK%2B0LM0FR3JStXuDmr6j3pi966mBbUd3fiwuguQbZ3k1L4x7hyeVfdr3Ph%2B966F6gbcC2GcpFmvdT4MIWQl8gzOVq7pjCZO7QLpF5IL5%2FOwej9O%2BT7l9UzEfW1cJjuGoWlDcT9Ii%2FVKgZhUo2H8pu3oSpyaPWvrajX6Cvhz%2BwMMn2GxrpssXa0Q7Mh7U3xqqHUPwsN9VMUYwoMjMO9GhUhJ2TXmgSh%2B0zETfIN406K5JMTLvNFI0tH3WF%2FwSKxj5Vv7nZr1dBSpgIoG1kpUtV%2BcaCdlyRrZIEnro1%2FS3ygPmv8MbybyB4E3HXukBpFg4ZT5KGIyyPzlFjEkhnkRVB%2FhzaXBkiglDCx8by1VBYg28YtNJDRQBaby%2BURIW39OPGE16%2FCMOXgr74GOqUBToLvWRtqdlbmpqEnAF8uv40an05Z6B1JU0ESiKU2dwxUcnAribqb9hqW5o%2B9%2Fznuxa20CI868c75dOsT1P%2FDCa3mfJZT7KxB4Ahf2lhcsjydNI6kS2deZq51NtKuDe1OLMhAaXSGbmT1qHOSWuny0ejfKBqiQA91ZLZlEjVdoK%2BrV0%2FKaBnG%2Fl9l9l7Q26%2Fo74ISs02PIO6engUC0eppYNweQc08&X-Amz-Signature=c11c7b1d078c10c1b5f6b52e89151a977ba0e063684267c4d77902173387ae33&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
