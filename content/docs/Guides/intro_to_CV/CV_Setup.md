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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLMAGGHC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIEcRimvYJ3xnmi9VZmWuY1RpHiWqNt6NFimza3DJrz%2FqAiAPMUW70ECxqUn%2F07ry8o9CBUiy9gRSJgl48js2S9rYEyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMiVvCJf2vuC%2B6JGFzKtwDECIGOAK2xbl03cI1JCuMe%2BtqMwReWBnkuBQFongofEOxvrnncTOyTVTJa5txUdoDk%2BwI0tJQBszNRpkklmKvUZDLuf%2Bjz7Mc0z9p%2BuKD23XD44RnRRCXnj%2BRcoGlbZ756WtURtCdgflvPdped273Cj1PsFl%2FEi9NOvI9RGEXFslv%2BWtioZaaDBBU3fRM5O6syAH8nYXrblg6H5yOMPkBuAbipkG1nxrgYQ9zFEOO9deoDS%2Bq5InZBY6pekLxLLUSzKxSmRlCCXFJZXj9KSdmPBiAqZxjDFpIriDlRnz7kX%2FuX1WiyjYpi2vWa%2FsISMilHfeEBQIzSuZzdU1Cjb6CXdfL6ul86QhmCv5tVZkdSCRlCfzco8Ap3QvCRYQWFyZLFC68raJ%2BdoZcs%2BGdJOjeRNLjGOaR4MzmHHS3jUOL1wg2uq7yPWMLqfjojVMNd8ZR1SNksgsgMOWwqJ7RhsAJwYEZuHwxLeaLkOvIJH5Ao6ZEgIyEvMV90a%2B%2BNYv8tqLvTR3WC0u4Dk55CKpA456r0dIi7gC0E91kvsQWgEYSZwCNMmDfZONLFNR%2FoEjsolcZheBIMGIoeITFz6m6xcTZsbOvTpxVvfBjXW4W3DlswIjV6VEJk3kxWcfavgownsykwwY6pgETYSEZJCQ26bIDDHuTbml5oLwtIaOTm8ZYXuvmx2wiKgGSKWqXNkBYWDzu3%2FlNfkqz60I6E4iJQ7YXghxC%2B8GHc9Tp8DT0XXQM%2FkWiFDs0LTXdMmDPY4jrjA3R6XSOpbNzT11XnRwo0eGsOIdTSMTaOK0%2FZku2NT9vJNVKkdC0h9i%2BBuq6oz9BWt1W1TqVLq2VGZOl9a7eFWL3ePT8w%2Fu0d%2BTvcDPl&X-Amz-Signature=7c921f46dcc828048964fddf83fa082f2e4741daabb60578b33d107505a8eaaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5NVTQY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCBByPZhSLSmo3OcWrqPRro5w4V3uqKYmxHFpIdlQluagIhAOSskSTyWGZIFZ11wO9SLmrYeGKp%2FE1obs%2BHLOuz2AccKv8DCEYQABoMNjM3NDIzMTgzODA1IgyOkLw%2FhmIcF56N1Ygq3AOuqWo%2Fr7Gi6py9dEg%2Fbvfr3VjscnKnhtDuz4rB6rf8%2BNEVI6XxDvVcyrjE8%2FL8yPgQHSQjV7J3%2BK%2BrFSpPUeS%2FefMU31ZKFddc6N2MeK0I6WpZ8Kw9qo%2FfCuyrW1Iim3%2FS%2BGNM0pWTAVdzN51NzLLhYPbJJkSaGUnX3ruKcHsyplZY5lSixZ0qNaqgop0L6BLS%2FI7K0hileOd9XE7S49MmrKSDSBtxT%2Bl7UIJA%2B5dh3zCqo3yuL66%2FGmHMT5E3C7EOXmcZMge1TyClw8%2FGZuAx%2B%2FeCOF%2BBlXvwmmCRYCDENt1vNcjt87Zf4FrJbLblBqbVI0siJgpfbLLQnklZ6AukIHYbL47YUdafZCdaNMu%2FUuXgM0EyzZJDShuKmDyxtLJSC86vjcyug8acYFKOfI94%2BWwMY03l4BIsCQurYlB390OSW7hSwYiX2ZoIQgL9JAV1QLXZrmbQg3RHVgKMs%2F97Oy0o2x3rGt3jRU81VWxJdhd%2B1oFUUgQhAcS2yrSKvngWKPaNNd8JxpVohmAi0kDsygcSKFBmprqFvf%2F5llIfnP4azcO6w03Fo0VnqbQl18f%2Fl1qZ1fawGtMbvOcP6wvmwyur%2Bisg7zwoW07VlH7kA5fblxy4zGTzpWPctTC5wqTDBjqkAcKHV%2Bh%2BQyrViLicda5SjTZl1%2BAD30R3dPKLAyNFpDb2chTI8v6SxzlUsvDrvofrc1uiOw3t4Ip48ffYdbtHrMELNTkh0oNu6uWK9Kid%2BGvQovgGuGA0ClKl8BoQokU%2BjQsn0XoIv6FP%2FgBcibz9WPADOXCvRo7XhN9zO%2FYCeX7BVkNei2AeqEGp1z4HZq6jUaSa84PikYVjCpIQFJ1jbuQAthnF&X-Amz-Signature=f886a934fa4ee2d9ac9d48f9a3d8379ca1afa6d6a440c238f573db8cd1558cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
