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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFPWFBF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQC55W9BkpjZ%2BlJ08heCi%2BpecF2WDSoiwLUcLV15yOTlMAIgBMl3sGIUX%2Fmi%2FWPSknAcgvXEddrs0yQI3%2BewlB0Un1AqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX4XxQSHvomTL7LOCrcA7DkUnV9axYNmJsbDzK5%2FDSYik0xQjaeny3eSoVPPXlavCbv2eKytsytodTkBwEMCaQB9Cgntw%2FWeoSWjx5AkqAekJaH7b4vp9MKBqKLaq1fYUr%2Fl7gLVSA1jGASzCvpc1bzHlKiSY9orOUZDZWh%2FKUwsH49GuAmuCY%2BfriHPUySOesFU9000UdEAG8sTrB0jFJYdrzNEP51qDdYyMA5Zl9aubYr%2FVV8QuCCnXi14T3ayYxeRLxzdCDRjr0W%2ByHOBpO9XoksQnG0t3voAffHfD3NcX8kIP7ruW5OWud6BOzqadiQa5yFg0zNFaBjVz5QRslck54N%2BwQQXDo5IABv3M%2B34LgQRSHdnKGsHDwwo8ZhRKyeWIkqxEMzwBs9DWCl1Ga6xBfgR8c4WvFimNvVCrScPAZ7o%2FFJeebY9RJTgUPfkw3uRsnygXEIbie1jXZQ%2FdJ3EV3IYyE72ctsqiM%2BpGhT2u7IzvN5I87JOJZj4Cb1F71MGUIwoLb62706ICrY4kutB962uYTqcxK0S1lXNwt6KgAMKpAovaGS%2BJmofsjYWbWqX%2B%2Br9Q%2BlDYA69STQhhms0CMes%2BaujJl9Eu4QZpwPWW%2FhAxTNpQRhfuqZXPA1A3kaiuuyYLr5zhFJML%2F56r8GOqUBwTCOTjMBNWssfKR%2BUSvJtuIz3NJJW7yknOOCqhLvZbRzISg6qu0SXJeQrfvUtP4Ben9bcqmIxmev3ecARgyqpHZZjUS76TbGgVqmk8K3BMjXmfFy1aVezULz8d%2BtDN9nrXdsue4SS2W5z%2BVxsjEdWkOMJxyR%2BmsC6P8kEsnnfsIwbxdIL%2FkfWUIaWxOwaqWuofIKFFsdDMpp43g4Qp2an2H9NTCx&X-Amz-Signature=00a343c0101852ba930eea9cc8bfb898eccee08f81fc6b6d03c7bc08e34cd7a1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLSI2OE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIA4a2DfBCZooKbTZAwTg%2FaXM36Rt7zLtcPTufsE7lID%2FAiByfAByfsnNf4wRyYQH90eZ3RTqF67vMEA1s989EjQ5JSqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJySKHstlKboaBEFLKtwDJgvb0Zkm20JaYnEsBo%2BhOLmFgigb8cUmG9kPysHK7cLi%2FRKpFwmPdjyeSZOXnskcgA9GEy4b%2Fav7lFbL30nu8Zdtu3gZQGlo3jLgZp9XK8qDibLGGcQM7fcjbknuGnSryCK7nfD1mkcraSy32m8POLVlvoNg%2BY7F5X6nKRufJzS3cy5l%2Bl6MRrNRLLgHJGXf9Dk50EY6w%2BxZ3lTw8w%2FxmeyAA1bJAvickoyuD2DSJeiFRC9q0DggApkrJ5iK7okYkfMQ4Qw8alxtmdje8sjqA4c6PuwU3bSxQT4bWpijEf26YdH0euxsg5bGsdqaJy1dzWis%2FyEgzncwy79wdvA%2FMg3DK6GxgL55hBnYpH5pJgE0NKQtC%2Bmew2D9JSabv6AhhUTPHsaAQgp9cqZdwAiJWSqxrs5gthhSRs6XzTFAbFrv4%2FSM1irVkN0pnB1jvdOcyfJ2TtkCAoPyE78W9uOPPA%2BIggP02PNBmuGasKtkVMfPHlhxx%2BO3ZtbyAffpMuRkGQQqQdH99Nw5T4HSCQ9dngnSVFWHTLKWMUHfPddGZhQqisWZoqqGAkCWh9HOxIZNP3UActTg%2FammgUlykgkyRRN88T2coVWSUwjbzIbH0s3PFLCmBPn%2FcGOu6vUw3vnqvwY6pgEZqBOJzQyoK1SO9H5LpKhbliGNkxA11qKedelQeoIc0PPCSiSgMSxt%2FXdzFWbD02aqM7LzHu4jmiMsuEnMuPviZcnKUMiOdAtrkoGyr3qYQE7aYCDkXLENAGrt5azCO%2FyfJR2ulCoRPC6Zuc4ZrBpNtNvktF46gZdbZAuucbNy%2FVU5%2Fds3NSgHXwETlZ0sdwQqrLi2%2FcZt1WdzyPNhhTg%2FyDQIflZQ&X-Amz-Signature=7baab198cd1264487905af550b8e924b5e67226b063a6d46355e5c8c82c92b75&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
