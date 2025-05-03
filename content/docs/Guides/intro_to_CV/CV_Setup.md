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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6L5CW4H%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIA%2FeJ0LgOa0RTrwdOZstoZL09Gr5%2BuOGMA6Wt5ka8J%2FmAiB%2F4xMapv%2FDTuE6gOaAoPZ1YIW0Z2F6vAQQLu1Sj149uyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUfg2w1sQq1KE74d4KtwD47%2FJKb%2F22%2FKEanJGUVWaKzKlNBFoD5nC6D357CrxERKO5l%2FHNP0am%2FRhpTWXkfjaWWWqlU5%2B8K9Hk7p0pKRG5lS%2B8HhRHiFMFZOyzlicNPYbzo%2FD5zK0wqIge39thu0QssY2DE9PoTeOy1WwbMWRGVZKp0crYlRrGaacwbepgZpbIILRuzOifWH%2B%2F0RxS3k5LWwM2YXWNoMJI9iDBjGbqh7CkN6c5JIWjq5RXQ52d2TmIT0KonquOQcS317LmdwTTuSOvQrVhI38cwYAR4Q%2FHcOpPwiTL7Z%2FRQB40O4hadBk%2Bk5XhF0kJ5jVz7Z7WTb0FA53ki7QjpHdV2mZrl3q003M636bZE763Z8Vt2VQcLFG7MS%2FWQx3lM%2B6dIamoNBBQGVQvO7cUs95%2FozrG5oPuUgrPjwIx0mr3AWWYfHuSS9coAckBCzpIcQUtP7ygVMb%2BXkefsOySwltCyprB7lJPA%2Buc0q469meSs9hI7NetR6I7RH8iGM72U7X0K8%2FPvsI%2FN5UQ0vUcX%2F3GSbYkT7rkf9HxGc3XXs2NAsI%2F74MLlJIAq%2FMEqYo%2FJ%2FiPyhq%2FpAIPrH5LGnL8JyF33xNgM1Fg2OIeUzBThk%2Bj%2BkmeyuvjRKcDoQZMYCqxQ3EGSwwxt7XwAY6pgF%2FvForW4PbC67V5rd0CWCMzVMp%2B1rPG7TpGG3eSi3l5YwFbQBMXYF02hL69tTVXcRmS6N%2BMzD4%2FC7uBWo6YXxdBAUqe8UtYQ3M3A4MJ99Memc5rFP2GMHdZxWPNNZFmgHxSZtb6zmsLXJhLEvJ2qmFnH2Q7rxKupkmmwpqUKqNEiGTZcfXzcuy1nMYmvggTwV4FnnQevX2Jv1hpaeTN7qUVsv4J11Z&X-Amz-Signature=9553d554b20673b37aa75b35e8ee5f0432a8ed07451c1c1b2d12ecec2bf63642&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV34E5II%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCVmnvb8P0kEY6w74rGbmuA1r0%2Bmr8eejzHzcJZFULcXQIgfHPq1PbcJajh6GHERa8oHhZevh3zmbc%2Fvm8A95907moqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPizAxRTfofwxlxj6ircA27lUeZT1dHyZqGHtNGT0AWdmsdkd8e%2F22BZxDRfvm8DwAEQsfHHARtzsApRCJMQ4abih6fxFJyvrUeG%2BWnZyhOtyjLV493Js1OE7yvnZphJrqLCh1LPcmRi%2FqF9UA16PkQwMnLUSmwfSrE0%2FI4EBMRCdAGnlkvynXZZjnEcI1bu2TcDc8%2BbRK14ANdSvbcDWh5lPdx3TexB7JmlzsgCxcyv83dBjOGokhrqbt7k%2Bq822l1t3sxtLAoppxR1xFQEMSpuqUSyVGUjYs5xmyiTsVLVAmG%2FvINfW49xOUqLX7m%2Bi670EEHN6KwHv2dAblw9C0yALqSAWXmvlEKI22ADCNFk6fCBxwvS%2FnrPX22wP6eYYOf5FfDJSdS7xpo1CelpeX51zYYN%2BJ%2BOfI4Ovcqeejhu4Pr6Us9xWH6GLKvBP9Hl6Is9WbcPdwy6UbX%2BojHVFj%2FVQwuqvdKiU%2FXkkVnHwRcyfrvcoI8LSGDw0kkma43J%2B9MgySVdix%2FOHNBPXW%2BWkhxUbR3%2FPZi6jBfBdg%2BOIW27HEW9tTAseAgKhKFXdxQNNHMZ%2BHEVmVtk6E4E%2FCMp4316LDvCYqqiSvoNIvkmFQL9TAw7M8RhCPy7Xvhy7AKdKZd48tWxK0Iz%2BbyRMLbe18AGOqUBr%2FLEsH094NKBbSCESq7dt3FeJ2pJIJ%2BiAmJ9qS5WYvPcqZ8DNHEGksd7%2FjlPYQC2tqA18lI1rvwpovtfMosLWiZWzyk9UMvNvOD2Zx%2Fm9UciPcT3QsTrgJBbvJd0%2FzwiC1ePSFZyVHkoLJZm%2BGCGRCVkdhJ2fJCpCc1ZmEvG5HGrsoucIXvSUQup3vGyRXZxIOYhRcaGdSJG%2Bd%2FE0u%2F69mq21sCl&X-Amz-Signature=0e2b9f2b7cfbaa563de124cc30298c9dee00776c86c47953043b94653913d546&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
