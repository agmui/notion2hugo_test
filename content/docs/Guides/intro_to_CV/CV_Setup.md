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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPG4KAAH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDhP4HiXw1lr4%2BFKp0MONNtgrxlnihd4MZQX37LTl7FLAIgftQbgxnAFi4E2LYBtWvivJ%2FXdbBHBj55OWVElwFnQ%2F0qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGD1LgxKKJD5s5U4BSrcAzLoVG2FTgimfg6JovupSaivcC3WSGVNrBp3eY81OkjBa5TUGV%2FsfCTE2L2Xvi3FFUaC5x%2BMD8ZI9OriBVmb%2BBLa8hscgTT9CnKRb7xeybJFCNEoCfUDcvHbDcS6M7SJfL1aSvqugquFJvEoQqXvaI22W%2BVhs1xhGDNwC1t%2FLoXTa%2BA3J0Vmfmas8AH04CvTrKD91hM2RMa10UGbfcNZp25P6Nj3Hanspf8zp62WRmkGRgDX1HoI2QPrvy%2FFDLhA55S1xTE%2FWHlgfy1uBN4gItAMTABSYR8D1MqCQOE8x3xHU%2FqriE%2F2fL1FTY3fY9TtK7B6x2ltKsqCDAnzWUmNqa1M2abjp681KdWCJtQz4hLD9Tw29VM%2BkV7i6Czop0eiQNY2xh8j3sThmdgWJgobjYNPGnkOwf9tVa%2BY3S7m8gNlBcVu5PdRB5EEX7QLO8V2vMuaNOotGqrSZ86GrI0MzRslTKW1cAz%2FYU25d7PhGqRcaVjd0Ak5s69LRqWH%2F%2FH%2B1ug%2BOtNJ9gmP5rgUw9%2FCsfPjsRZq2qoMMZ%2FxYk64yOFbQkgUnoboBGJDoMleH9ssQpD%2Fb%2FjmsKvpccKVDH%2BdnN93RUbjWlJBckTaDsK5l%2FQuScha7d%2Be6xrtMLzNMPan4sIGOqUB4IOjIX8iIzEwhBv%2FqTjW%2BMf2YFDahIDGx%2FkOJMJndRif98%2B9jb2fL7ZSDEr44jcqyy6O14vqZXy5W8HmG3Wvp76anmXKRzwsSljcNEHDB2IrJQDQZwacs2BnMrdwNzhsuS%2FzOM5LqI6imaX5t8UicnPrBerdoi86Vdx%2Bhvf8jJVFMSpcoq1goDOnQGcP6RGALCG56%2FLIWz6Wv%2FQjyPPcM41vTTIc&X-Amz-Signature=ae729cd8cd6635384eb518b11058d784e04613eb41f72dd5e4c18bde22fceac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT6SIQLM%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICVLSy41vRzZBVVbHoq0ZOFhw6oyj%2BLiMTxn6HzLQNW4AiEA44nnXUtxnRYy1Do4WUAGMhmPL4wVpwM27NxV6KZlo20qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOoa1Sa9lK%2Bl9ck9yrcA%2Fxz5NJgsJMHRMLL6YsmB8feH7GB3R%2B7Zl1HyNR85NnOxVtiqQfNYzXUPZyDUlSJy0zw0xetDNA5Hu1jqE3jdLXapkEohfsDso21xYN7OTHWUSM7MVAuCirP%2Bes8%2FBhJ6Ae8Eh3jn1SsfEVgyt8wxgYju6KHtjOVS4vynQYs6HQjCW7ZWQQ5sAbWmc57qJdxHLP5%2BRGeREk1oE9vROBDvkRHtb9bkSd5r9YMgdAdx%2BIWmNNam8myJymUB3RqiLaFXzk9XzITFGi1a3jdJl6wjcqw%2Fb%2FUl6Wkq6pVxjjo7IYnMPw5gX1kD2LM8%2Bbppb40TepGLsZtDWNl92xa3xjH2ji0bTk6fWLk2Xit2d59HfgJCLFetSWZ2ZlWnvxylaWkEG%2Bb9A3J9kYDuuIt%2F%2Bgw1mg%2B9ZfQsvCznae59XWTiU2SWXR9uy5AJVhOcjlG%2FbnH9KygrtkaNpN4Ut2xZDA7fZ7fm%2BN5OSOfE3nn5OspjPmuf%2BdEeNytjjMU8AVDDDP2uLz%2FcQzDsE6gpz8nlQX6MTS5G52p0REyGhSk2Qub5EV65ncijHEghrxCCrXjLGzCLQraogb%2FNzV7u%2BiQTRWVyhxBs0HGm8J7vI1q14NTjHWeYT1gUOzlYVtXIwr1MJ2n4sIGOqUBXt%2BzjE45tNMhi7WCQ%2FlvDpb0qfIcV9bJTvlH6hPLrn77024hANwcofUguAAq6%2B5e7u0g9uP8qh8eCkp8tjLpBXeUByoILPwE88Nmh22pYxkxcMDaW%2FJOti2KAMKtR2shfao12jRN2daJRU1v8mSGaWR7ttx%2FRTiph70%2BIDPHoRkEClk%2FzmMqNNu9v11W7sg4J827r5FkMAKkZlAVvhBI3665k7tp&X-Amz-Signature=92a31ced2ab3f91bc9ecfafe8bd8c314cdee659cd73bb9f615d1c87796c8d4cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
