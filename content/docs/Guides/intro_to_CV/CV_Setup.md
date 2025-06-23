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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSRSLSI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIB1K9k2pkhT5GzRiEJdmz%2FnCptcIeOJJVrmr7IdQN3AHAiBEUvabxie1jfQkJ8c3Q1lwWW1PZV%2B1og1%2FTGT7jQT4qir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMDYKxysuqEUqNxXndKtwDj6c6tqwYvUT0tf4NrBG6Il%2FYUbRZ7fBdoqZF0QaMkORqQow2qJ2u%2FLljdehFtZMxyUfG5UpNzmlFKzDk8uCHLukxLq2%2B5BJM4v6j32Om2qv2DUjySKOMGegUqvP3eL3JFKYTrEBAce6%2FK6GydUk0r8HCdEmRh1ngCSm6WLUjuZ%2FcblDahLe10vlm3DoBPsBHdpvhsw5VjS96cCRw8CSWa2UgLmPvHIyZsJb76G0WvZbavMidgll3MoeJLsDHaQuRzpk%2FOkxvRKVCZhDYQ3SyBrUxnSeru5Rgx4LrtrdpwrjNfw0LTBlobs9b%2Fo4901eeWx8MqbvnazJYJy5JgJ%2F%2Fog1pT6R%2F4QSxjssk%2B0bKZPXjOfHAT9QU%2BvvnUadHDh23xKLOei3wDofs4Mb3cFBBnBjDXWVD3ywdnPir%2BdZ3hAwzgiNSdNK5M9gFHEqtzG7AnI6vMAptReJk73pVOPhhTWmE4LZPMCw3cqHfPCQTd71BoO01B3tlTf6oFAqxL7CynTIHWw3if18G5OisiH%2BSsR6rl7JlFtkk8hDU7b1reOV2RvtDyVf5eEIfqOwZE7kTTL1xHeSG7XO%2FjfEd72bpRdD46R43wXPvHdEfemgkTDKRING7Z4iP1I4Oc18wnPPkwgY6pgF16h6l%2BJUTn%2FDTUnic4aLEtUOJqAGFsapASadQ6hZUqrqdLwEphOv2BnzubDuL67wRW14WjNZZ0ID2Dqvyk1aruf1r%2FJ0V1%2FAeUG5EuLnlyFKFlVtH51CAUxxZ6mXDT4hxh1Ahb%2Bm6iFUilIXZH5NnaJxQKm1uyvrXiJvJ9D0UHaIciyB99I7aOfnFtnmtBNgsfXTMM5rW66n5zHUgfmop9%2BXGNCtc&X-Amz-Signature=21cc8a066da5ec2d1cd97fd77c15f49d4a123679e4249584597e4cc206c8733f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN63GZLT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCzYSXez9SAwtq7PLXdU8WGqBv97Yl32npN%2BZMG2jpnBgIgQMJwNsPn14EG5CVW8%2F0ggfocXetCxGzTTYiCKpszSW4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDDod2pANhLwKLyRXbyrcAwmhfB6YKK6rwzZVRm5PWLCpEfLxKLikOQWi1M2%2FPc0i3RtRUTuSSGh830dTCYNSdAEQlDQl%2F%2BGMPxU9xTnoixzH4XeqhS%2BcJwq0zjL%2BV2EDYjMAVjoJTHaov7JwdqWJU0xLfWQ0M5bI%2F%2F8%2FLuCjKOOqUl%2FaAftoV8CRTfsaX7jaT1zLx%2FupBtzg5QnDsdgSKJ0Uxc0AYqt%2ByKYSyLFrWUy8CDFZdH2sqIRAbASquYfmnIfgwDcNeyE502SAM1sogq8MBKwUwT3iW5dm725Mc%2FeWveOX%2FpJrx0qey75Bs2QotUyFCqcjAt8CqmftAgz0BBwdawQ3cDFFszbJxl9FlULcA8J6L74WLCfvjRp7%2FJAN3OpaBUbCJQKJJEQ9%2B1%2BPGtYNlRR9Pei0OhgizFaukYxg7h11C%2Bb%2BjfWShZzUS4nrbaQI5gaMP%2FmXlBHUFWYmlgQMTPbRo9lZhme3JZQNDEb2up5o5EV3n2LOwg0Nv%2FwD1Llv9guGXREdX1KXBvgrP455kdGB9i2vHSBTbyujwen036k%2BAziNxXuYELJRsLYz%2Fbq6MIEd9c5%2F8gYUkwbb1WCgZpzENs2nfpa7FbdzGte2e%2Fvjui2Up5b%2B0NbDBH2Y4dW7Vrf2TvL9hHVbMJiI5cIGOqUB4bfaQJZ4tyrQOHerjv5KWo187WXMoRqit3UalED5YoOmN120%2B40Fe%2Fn8Lkd2FDsFMWzOia4e9hjEpgzrwLRqNxIGwGQoHwhXelvvMc%2BrwvIXJboDssNWkW%2B%2B44RujJPjWB5TDGGtYlCJSh06iyozLuMxQZF6HoYMkoRdwlgRKT6hfuMGdK%2BYS7XEwjWJpFf%2FjXjCvqMzjlyAwk86G%2BgP%2BgswxvF2&X-Amz-Signature=af00e94cabb9799d676ae7727743083a1e3fa4e926360df8edf56852351d61f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
