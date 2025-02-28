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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z5IDDCM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC%2FcJxsNy3JMZSGc0sDS2gkr0vfxuQWACj1nymn9qI6CwIhAJ5M9135nxOLpFlI9xc1r42Tc%2FmHTZ3e4cCxTmDZEODoKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsukKStmpZdiqpIn8q3AOhGW3dgcEz9EVIFv%2FnAJgEGEplCNEORvPx%2BRuzb%2FEsxVF9TrRsfD1g43qkBMNcLYoV1YT1z8O5gwF8%2FGFg0wbHUszf0Yfe2he%2F8bEkpixfWDO46eATG3yrSALW5fNUWE00uDGwVmHeuIod7mO%2B4HwYm6BgNuaJxAejQESP78%2Fkh20NgIeRcuz705YkE78saNhThAgoYFGMDvzEzEPpO9B4yj8ykOWQ91jjGT5Wgw0tivGE0sBx4nVEnxC6ytOk%2F4cUtNxylJQDv7Xme9uLMUIoz2sd31s67FUrVBqOmSa3JhKmmfuG1kEYxJ5ij7pSLZ1z%2Frlqae7ihLzTW7ZC%2BLO%2B3M1%2FUCIy8n8NjvRD3ixegk5hrlVAAOC4N8COGtjS%2FfS1HhLfirXeaNusVdlU8fgiz9F80VZ3ntzYxVnfeSgx8xhhocRtAdblSKWc3F5XkYcIDxwtEp%2FcyzN4v8QK%2B304m%2Be68Q6SmiQyuEW8KaQUXlWt1B5B%2FDP%2BzGb61Rb6dKf3%2ByfxFPRGTDfqRUYyQ7hcJ8LI7d7tzkNJgO0r7dgv5zM8YvYVV376%2By36XETFgOqC0Q0NAZxUgA1yD7akB3%2BKhWOcmde%2FF0QjjejdRjkH1w%2FutASG26B36XGgszDN0YS%2BBjqkAZ415dublzpIXMbU525uDWEqpGiFgzPUB6TYSvJOKRZ%2B7vtsPECPGJozLIws1L4B3JGY18L1QwINbeLk5zy9N17IR6gNqwJD%2FjjGnOr3kaa4I4xKI8upm1O77JuKzaXPeqizph7S6nbwWZg0ikQfwGe5CWje8YoGV0EMPUbJJI3543ODE191617TCYRkL8en4jbWxOd6kaouhi4tMn0i1uKF7LN3&X-Amz-Signature=f8f26b2ebe7637cb907f53fc4c576ad86fd0b092f358d44564344601bb252015&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RPCULQE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDUVapYSnYT3IXGS7Ivx7dUgQdE23g98ampmwipmwZFgQIhAP4yw4a167O5b%2FRXa%2F9Uo1BdGuyy%2BW6NwLFD4E11M9NkKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1bQKzeN3oDhJL3%2Fsq3AMD1V6MvuBuU2aXy9f7GgUeU0bgsMrZ5QNucpavs5UFizBCdQ9X7OWa21rKVshuExmiTwPdhXezPkFxhz4W96vtHdVMir75CasvxyArANVbyEpbH8YT2Z98zMJbKlroiwDVojJNOZdER9gUMd6om4EXndZjqa3bXu5fWo5Aa0P0t2kE%2FJQjtPOGmXgbOZhNkbI83GXD1ZlrhyINxNvyz%2Bh5vOSBh4PEhe%2BdfIr2V5wfRUDN4SJjqDctLywUBgr2%2Bwy2oVOGaW6gUe8WNMpmBrjdQvW2UfFxra4zow1e%2FU2nGDQXe8ZTXHQA8Z9fN%2FaORyo74yUhOyzIeLQpgsRBQbEIbUP0P05Kb1EsvdgemOetirG%2BT%2FW6GZW%2BxCvUBAH5GPy%2BUceHwB%2B%2BcI8eAn8n0Borc%2BeL88H3%2FtNwxK4w9s4Wt7%2Fq%2B%2FFs3tle%2F6R%2B7lDcTO4n%2F3rYUZ8prDg1AEUxop8TwwqHgKeC%2F%2F7D72vc%2BxVz1f%2BQ24ZRP4TpYVd%2FV8YB7W3fyxpm1ooGUBsiRLLdK00YOd3DmyH4M1pQNQOA1%2Bwi%2FEM9aB%2FHjvjIViTVVMhB31jiFhGne4Dohb16nvVFCriWlJo%2B2lD6k7jatubYo6qVo91pAJD5caORFdlPRDCz0oS%2BBjqkATBiroVVlCpTx0lrHxbMuQ%2BKZxu8eUTZl9sEZbz%2F7j6AOp3GCHIiM1I8ZES%2B%2BDYo15VGenuOXWq8zLLvzkhAOyRVtvTss4EdRHuObNw%2B5G43oW%2BnyC31aAUSm5lP1RFMEvQxUD4hS4m5IT4iSOd16FE6IwU2wZd5%2FAryd%2BPQFUS4uHzFt0541cqbcI1Ev6QIbaaptJu9Jlhog%2F8tcMmleRFcMV%2F9&X-Amz-Signature=fc1ec88f291c1496cbfcc88e03524147886f7a1d57e4c5a4435add6f09f5ca82&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
