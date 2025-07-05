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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPZ4MIN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDHPjB6bdYuKIpMBVYwpWeXp4lt5sQ4fx%2FgXm%2B6ZtqODwIgYw3mUcc%2F4G4nF%2BYILRj74h%2F2vz3l5Nxd8XhriQ3pH4Aq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLbjAllIZzav5jNNcSrcA7dEgKQ1XhGUtnVzExwvBuwqW0%2FeY6x6YrW0%2FJpBZp1vogz9XvGG8pAU%2FDf8Id%2BhmwSYPl2Cy%2FXH4GZNCoYv%2Blhs5Acz8nBDPWAAwI0JLtmiEhStb3240dMyOU1a4SroZ8DT60QeRIHo4HVSsRKoepLwzxMooID2zEjILhZxO44Q8sPhd72c%2FmnQkA0rebNiKFi%2BDlBGMXvczxTynjYwDYArsf8Z5oGWd6ZhCRG0tb6eed9Jc4HnUEc4eDrI2ogDvw1a%2F62BW6aKexKPzcX6XyoxjAq%2ByYqFPEdspJiBxrvcjNz7T5eBwoxpoTTocnP9NsdPeWOkxPs0s%2BwvfVT%2BaDcv5n9q2MRO7EgjsWgSFlxCK5kO2lp83PJXUVdtl6S7IUP%2FaGON1tNU8%2FONFEJ8I%2BMaOZxVNxWKwtd60ZSJEMyJgKt18OZkNIEMjG12poFUam0txvkbbCHW4oTv8Ed3N9U8WC02dHc4Stmz58k9rUYcMVz5oSnknYdU25K9oICgDNtIw4Smr5fNl9BPHLyy7UmPNPXfqjzZD7hCJz6IXMO%2BjEyaWRMnkmz9P8M0oFIwWK9ZFFfQ%2B5301h9fx4GbJ0gC2bpgX%2BljNX2XTMBcHbhvdIGPounYGAAiHpKGMPKqo8MGOqUBca%2Fl9xZgNc3ljQlXun3wEU3gQTFn%2B7NLLFd2L8lrUVNEFtMQxuOf9Z9BNw1vJZsM3uy9XElgCFoNjeVcAPr8sypd5Bk%2BrqfSkzaitObPGnZzJbnBM%2FnB%2BAt9mLr%2FtT7H8yYjEz4Vvl8ztW7F8iQQaeSKP3IaXYK6v%2FSvhPHqxYT5wuLq4yI5AiRVWdxzVWtYvR2ToU2Qw9nL3UOl4QHU4X3jfbBQ&X-Amz-Signature=8dc6f095966999ec796c39915724d7e03671323851cd8a4a9f06b73798076489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4LPRN7W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCkntx08uFYkUmOwp5JUeriTsZC9ZuDUuFeVcz%2FGkMWHQIgGqW5b9NKYGO6GPTtHaHHhNRLgY9YG0nC4IanVLOjMWcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP0XeGxkhBv0oQhXqircA1oCvgcLUWAiM3nd1dPDOubsW1qqLr9uJbfUpNjm6NJDDMwvOMsQ4TjV00Btoi6A1s19rzs%2F%2B0ae0EdY8SIGlQLROG0CzKmfCS7WMd8E3pGWfQX%2F4o7H8YNmR%2F2Go7rd1L0FL4nQ0xOgoykBxBGBD%2BP%2Bqh2qf1dbPegFODuxB1VHSoCAc0Iz96358C4WUGUfssFF4wKv58IezxUSU7Xgti%2Bw%2FyTHSxPjWRVT6LtVjbRfLfBlg64xOo820K1e9vvOQJYID182yjgDb9tBZN39eEzRPFQvmBIvr1wZWYatYnUl3kf2dhnfTSN2afLwGKGxqUZye4bOFxRBiIuqcNbStemP7A7uVYv%2FT%2FqQJNA6Om8TF5xvUu1NAffYTLDyYc8hL7T91YH8%2FVr0n5eozsQACMRrnfLSLsdNLm95WA671bLX5WyK1LljrFxGA8N%2BXIPuGr3jluXR2iso3NXSHYQ%2FTz88ishOcgru3BSmdLJpDAPJSYf37UwTnAkyj5kjZ%2BXNmGtT42THwwIXMtTkSDzBh9GF25EGVtk4ztWpyOH%2B3ykWQEqY3PaThVRxyNFZ5iqWvzOQN81ayKxgKlgbNwiMUVmJE10YmBGXILEjSV4Hz97uiSY0fOlcBAPTabubMPaqo8MGOqUBa5eAq5uKPrlyHTRR8FCeH2Fz%2F1v8YbaUrjRboYvREAZpIul4tJat10tehv50QqPimgazTz0hKuuKYLT7N2SxW%2FJzbtcq17UYM1VPEZxxXh6QOZDId9vJVY4fYzknocdxa910%2BsvUvFTh4OI3bDdlCzF8wZEKD7IgHrwsyDknNZsTLg0G9tLEitb5IjY5m0DRiOqJd%2B59VM5edFVf0PiBBPrkk71Y&X-Amz-Signature=71328b43931b2c88856513a24e17a2c7e6f27567fc618d022f9dcc18fcc78029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
