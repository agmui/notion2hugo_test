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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632M5XA2B%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIB0zWv9ukem86W4rgE91SCWzpUyJhHiroXUtF1mmIOz3AiBbddlEivdNQe3Edn6mCc6yRDT6eo3T5V19NlcLJUGQHir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM2Tph8OUDvjPb7sJOKtwDK1tQ3PAz7nxu%2FVGSlcp48O9beZRCJvxJjZj2ybFjVwokeU1QNN8JC4PDisw277bFpcAZuvj%2BJeSmmnPcAl58bc1WuSUP7im%2BOBV66f0KHu3dhgsjpjxkcbBaMC51becYK51WU4W8RW6D2i1CopoCKhxPlqhQAMvOI9bxC7pOtJNa%2BWgJi%2BwTmWyLsAToqu89Ek%2BTnvxbiWqNyhzevcDxATkboQqtjTJ8CNWTH%2B4zz2vrLqynzNsL1G3KRluK0taa9QRw3zUZ7v%2FglN%2FHzqJ8ZZSVHKou7GQHBzVrZ0gNy2V2xJ8X402yizX8ajVuhcO%2BzyIchSkCpUoDsxBmpYR6ZwtKXVbyHGW8sPDrWnwGKv0%2BPMA934LXt0eVQIOWHLpza%2BOwdWzYwIDIRLRe0hdYJ0eNCBE5fmdGT1mzaoJeS4%2FAUEApsQsWPA%2BqKFqVJxpXSrJ%2FUQgQPjM3J%2BE3qpu%2FEgJV3FFl37tL1Vd%2BU%2BNAd4mXWlvcy7SW%2BhMg3ncMLSqsrH44ZrroUkST7kw6qooej6OcjoFAld0EPk55dTsjvthln0FGZwwEU8MXFSclJmhG5oph9osS9vMUDz3tLevzCjB13jAS79DcSfC8TQADSXA5dLCwQ8FRIc%2FDCyQw4%2BmwwwY6pgEFqsx3J8lPnkbjsgsNK7h5BnzSEDlEq8t%2BCLWr0XwwrDaJiP8Rf9VOi0mPoHI3Fi1LDgWK5VJagbRyNRQ4F%2FYgXAvc4H94H3xfHmGdMW8dcWp2aVfbWEABLrlkAtGUGdXFVSxPnFPC1PdRy9hMFQTfEi6J%2B%2BRl61Lt7dR6ujl6TM2fNpAc3tmlBWVDqsD8yNdMJJqLXGlfYpIrPnct2vGzitrDWAxl&X-Amz-Signature=3a46394ca5786a8bdc57df5fc6ea8dbf296ef87c11b2d5d261faeca0101fe421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWMSJ3A5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICgoOkT9fiGkPsLPbgPFqsA8LZ390THwSi7asXy1Xlz2AiEApgogY%2B2p6K7688N2Y6TF92yONFEcGIa9He1XcghlZIoq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBgWZT7wyVAktvkukSrcA22bNRKy2bjmsdy6aQLUYlliI4LxKvb7k%2FXCTsts9feFOS%2Bk8uPDyXIFFV93g6b28x9jeWOAK%2BY32QTODLFh5Vbt6Zd1L9WKGvLy2HHAA2rGgD0jnNFPsX37XuiQ%2FzY35YwSAhLFE4%2BUPxFEEEI6uRcyc6ytQFQXUb66uHgdlyXfHS108f4s2PWGTMFgQOii2rcEWFKmVhZEAjk9Gs0nGNbdjiQjNkzqUUg5KUedwi52eJ3rfdrAA4U6SZLiV4fQp4I5KW%2F1RlhqQWMVkc8aZVqzH1XMm7%2Fg3D3dv05wpNCc%2FfpZKUewAtAFfMZEKeXpmit6SkW2qfHGlqjmNq%2Fv%2Bp6raJ6zW607xmfttt8WOvqrN3ZFE8worqxiBLO81%2Fth5bpUEoGw1fGc5TqASgoxihmgMGHZ9yHHp3eqe3zBJKbSNth2SlbfXpmBugXStg8KTQJXhEM7BHjQXWxPYtCpw1%2FJcKHpKiZ3xeKK7rMPXo2AJ7s4loSUwoRA7HR3ebv5tdG5uLEI%2BUPVNkVPXntoOwfvU%2FzgOR%2Bws2XxRSkRw1lhLbuZJzDv3hzp2XVCN85BQ2ATeqd91tRdGE3tbzuooxk%2FeTJ2fVuHdA9fiRo08ML%2BQeaXG%2FTdoWVdpsSLMMjpsMMGOqUBnEA1AQs7AJ2rVQhFMV6ltdW6TSBBWnEBZJThumAlFfcjciAKfLCBspVhiyS1N%2BHMnHSSQLFieLr27ZQoYqdyIHgn7kS%2F1nergrnsF4OaYd2QdSgE0g%2Ffqvu477NHdMfWV4OlkqUSQGfJyrRopt6Y1I4pS5ViGNhi8DHdDohKjvXIt2XyB3Wd0F74ThNS5UIS5JT3aY56asCoL08R2l7N2JXbNK8O&X-Amz-Signature=38a71c42dbce3b2c563012b18d1418d32d9bec1b7b867e412a9f493a68be4786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
