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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCXUYV2E%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFLihX8zXO9D%2BMNsojnfv6%2BjKo35qrw4zQNxsXSvf2CUAiAdFof4Va%2Bm4jVLA9J7o5MsOT9rx7aF%2B1Oq7HpT9L7GkSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6SPJohTCosNxdUTvKtwDzxQMNueCOfqpPqDw15tcTkpa0W1WXaVYcyXXGxqsFz2cXUlX1PAfeiHqei0DlRfrZidTDhRLNy%2BMCCiaTkrlxzKAPqMX6aRmi%2FF6%2FU2dSxm8901tIm00V2cTrvSD%2FBFW1dwk6JFcDHdkyZSlbZvrY2N2tvhLQ3aCfsuecrbtd1FLE%2FBgbR72s7Qo8eLlfX4ncs0r7yo%2BdBfgGT9yFNQPqG7owTW5NNeJZh7moyE%2FcFPkVpXvaBW1B2JnWTrga2%2FR2Apa68a6C1vCcKDNFzOzbgSYBPwiAGAyS0J5WDlDIDsjRyo0ggoc21Ak17jWs0zieYDUt431Vw8v91q01z%2FsqhI15BnF5RxPEK79xgg2RoBNmbslgtUZrMItpcPSuH4lF%2FXQFKjz57V2b%2FUrG55ymD3xEYAi%2FCKcBjfh3y2tmr8ERE6%2Bs3S71e6ata3X%2FYygmxam2oytsP6VGCcbgvypJt9W4UZ0txoPZIKTLoAHulOAGP5xJ9ldHN%2BH1utOfwzUKmIbyzub5ipWh7CDV5M6hp%2FUHl6kLrrfsrxQxTzHChh87lTF%2B%2BherxwVa1BVg3mSwI7J1AxgY5g8Auhep7jXRrpsyefRy%2BxttDXA8FW6bFG3ZktQ6QatIDJ1Teowu%2FzYvwY6pgG1DWgnmIf2M4gYT8b8OWpZi6c%2B8PfGIJoIxR2ggv8y452i5sHcRQnhowRhMKiwfW4kZTU4Y150Zz6Gc9yh7tG71XmCSAU5Jx1PR0DchzHAB1k4gHOsvX6DR9yPBbTYNKv4uUTkdIN9%2Bi1Uq1tzU5tKHQTSlCOBJ2AY1ZezEW4aLH4LloxabstNICPUqEUfx7FwI4%2BfrrOjwJbqIftlEVp%2FTpk9zWm2&X-Amz-Signature=23bde9bc59b743166acceedc02aaa693b99da7b0794aeb978061a205e1bb4f56&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZRN4VLJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIHdFuI3y0E8frpRImGqvoRMADib02y3ypajX3%2B7XOWwsAiBN8gN%2Fl1%2FG9sizkTwS%2FbuLyoYSmU1o7ECRizZwsWmz8SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRqwqBs7z50uKxpN4KtwDiaQICvbwyW61BgWTJe0aWiTYWYF9ZRDFLrT%2FdIrPJGbmQ11DTknOmE2bUpyVkuY%2FkIAi9MSaknfxNrBYWdYvuMWN14kjB8Gqmq09gFdkkkTdIaRsk19S1hTqRB13YqyVYmmEb%2F1Q%2F%2Brv0xMoHcuHHV8%2FcA68IC%2FS%2BcLPe40Eyo21PiPfkEt7lv6%2BQkCh6lSuJA6lBeZOLaNnvbEJphKyXpr5MHUS5N4HPGKkeCdjZyMnJnY7%2FnMDZtczTRE9A5sziAxKGwXuwJjWSdjvYxrYd3m%2FyqvKVyV5enOXBbL10rbYfh1EEc28jl7W7OkOTaffFGj706jbOnQY4TNHW9y4R0LUwj4WPch%2B%2BigDlBqubUUqf6%2B0c4G5KPUN%2BjJc7J9rvbrFeJjOXfsDPTGtl6PrQ3yOb0yRfydyKardjlzl%2BI3di58GT1uVqG%2B7vehYabB5CDA%2Fah4exx6gGpNw0TJbUvoTLQaqwY9lxY4O%2BWIx7slyk0ODWKuVr8pl6SRdSjVeDScuKvLwz6jPrhhLn35PzimmdWzVz%2F5lrsNGuHD%2Bii4KRJ28gbCCqBSfFqakEzipGffymZN9bkkrtKmq%2FCXMCInPce4OFrFa2A5rzDB%2B0li18AJO%2FRUTaHlNZzownfzYvwY6pgH%2FW1QCyxWidrjABVMyNbhvFaU1YSGkSrO40qrnSi%2FUQgDuhVqAiXfJOk%2BVrwoXhErgKrSWYaZ0y3qZvK153YNZQmD9aBwlfQr9We%2FaTpKB%2BYVLOYYB1vbC215pN3XRgVfONxZ2FAvq2RalzCFq86FowW7%2Fp50hKWSvJfC66dWeIow8ZtJU28lYTJZRGkO4CDBmRczMpenbhzf2DrZ5c13RWKULnTw0&X-Amz-Signature=4c76db302898f9cb72bb5997f7c2426e6ce4c57d20d4acf36720c0cc7110d716&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
