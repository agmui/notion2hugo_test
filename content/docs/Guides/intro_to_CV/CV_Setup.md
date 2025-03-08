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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLUTN4AJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBWeG62TOS62083FW6nhpZeZ9XQQ76PSgPMMjKIR53%2BUAiEAzpT4ZQKxJcvLop%2BS3xaIKtDv7Sjwps1ClRmavZ4e1sUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEHlpVoGOEAeAMC8AircA0pSixkg1WboU30OYFL0Itu2fzehnVlqX3OEGRphsOrpxgrj0PkvAi0XF5D5IgUG4b59pjVUUbslKKZCdreAUIhc5ujw1DK3PIMVGPp6Bvfd9e%2F523iziFG1udqRvEW4QNr5AwWeyOTrQ428oMWHnSHsVgVQd8%2FjQOFmAWxqE%2B8BNSDoZTIRjyA6yJC%2FJBjsQEJeyyt8uPD8C7jlIfkR3rRBoVgwY6HhLe7Dsa0HqqLcMZtoEv89XYi53Kt5EF%2B63ZTQs7JhU1M39wyEahotI1uiE1YKiay5gUKIfknPU9ZWA0KXxbG68pIPw0oR4wBSca8L1wE4jAzCVowSpHgo4Apf3dsEuMnjoBsK4g%2BYonrk223AAC77hgTidnXaCat%2BXiWtitH8oQmiETKcgciz4rMEIg4HUjGnypNVXEbsQicy3sS23KhiK12Vo0WVVwYyYU1yf7tK7kbB4MQAll%2BeHvDMQVCYG0PAu6w6NaUI0lYPOGNQLJsaxFzqwSNb5ufrq0BntYIS8fFYKsYwKyCJrWhGNUflJFp0Yn9eLzVTSAulajj6LMfuxwAFWItvztetHOU1I%2BrlzvSyrBf6dpqsOvPW4hIODbnFqCpdvoKLbNyP0l8hEClo5qzfKhSKMPOCsr4GOqUBTq7T%2BncCCm156zVN88cK%2BSDT0q8K4rzaLUJ7LumuTkHCyAR9hUgS8sfBHBpQgi5cisZ0qTsXeXO00pA9YgApGzVtzA%2FO%2FTye3633sJnuyMCHsBNC0P1vHtrNJJ%2BgicgYj6W5aiScjdMhn70D88caet85W1sosY45Dhe37cofe0ozhA1E90NIwIWUOk0joCaoaMPRICILXOpNpeLBToVSb%2FR%2F1N69&X-Amz-Signature=48d0f2e39b94903b2ecdc394cbde33334e24e304445544120cb8ed32a949aca5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPUKXJDL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDk9RyFDUHBOvTo4XMHcf4NYdpjyqlSnH5TdYw1JyijMAIgdiZImO8dyT1llzmMhPPxzSl2mNAEtmxxycwyTNFHNXkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKbx2s%2BNpoFCF6%2BHIyrcA0AOEaY3gb51H4NvI2NMBEpdOaMxShaRa79vAs37xzflcalFXQYlMs9ugwGg%2BB84HJvjkgskcEkQ4%2Bo7IMVOdxA9YHHT7KM%2BsZpkPRuhEuHWJG2IuDLw9aXxRTSnXheFSz2QxGjxHsQIwlwg29fV8SqxwRQ7nfYwvkyCE1bSD6SKyxBYcdSO0JnpkOGUYCqg9Qm7AhaZyrQ03IhLniVKMSsCYLhKttLYRy6D7lS%2F95yOSKnvJJE5uM4WRSGt4FaVmCfZgHaP3GhyhGfI81%2B6zmXhkf7br%2F%2BY8W0FS7aR8kPMnDYTovKuKHIVDmyWBcQeoUw2TQkyPtafZB0anaBkDYc6UeifDgZ2ljCFt9R1TffaP0AcdaCtVFqGo2Un6tADRwnZMaaIvWZYiEF5vOOBf9SKWXnmTea%2F7OAPeYV7d8r4OpIqW0iJxc32trvlkQofQcbbrBgB%2BVZYy2UH3sIfPBxn1QFmw71PpeCBkFZ3HbOY59sI4UdFqkCljIMT9dNJNhdRxO952RiRlKaOyy8HHZMr9F38fVIVCXY26Iu58wMfwSx%2BxvFcP6J7TJYVlYZBtOi8OcW1A0h5pPBHNlqkZKWXFJy7mwc07tcDB6x8vkmKY%2BVVyXpZVf8InJE4MPqCsr4GOqUBwHY6NgHJH8hVM%2BIStB8JAsFO%2BSPfgtqzfl0E5J3OV2hh6eBJz9bNG6m5bZWkHfsazb8sUosYdN1eXzg1K0oYBOTyzefaXAZ64tfS7ycbAFWIS1aEeaZhKbkf7kb2QktmAi%2FcbAuTs6h4%2Btqjowv3uQMnrVyOGGuI7rV0dI%2BACtGcGVz9tmuURhMUE6DEor5Yy4rJh3PpvBg7Ls6%2BEn0vB8LxyhGF&X-Amz-Signature=d3dd49b90e872c609afbe35fb6c37cb5964464da830df029fbc2e30296a95d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
