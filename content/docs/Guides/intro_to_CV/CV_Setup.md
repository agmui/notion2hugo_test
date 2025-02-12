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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOPCRLYP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiI4tNHwsINettauTi%2BMPnzKRgEGfw28nucm8VcabZkQIhAJGfkPFUN7W%2B247GuEkcGn7gTPMg7mqN95heqL%2F5cZBwKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw0k0oK2pyWVndMiYq3AN4CQs8kJsxBfew11uo%2Bm14lVHn7RrL42Z25eTR8x01ZbeJL2HP4HdLV5aIDWCvUN2YaP9o2GDRI8Xct2hP2ocm%2FzIiB19NsqdTKIfs2lW51n5sBVjtlS1E%2BMZUyC9Y%2F9ihu3kQ1oXJ0eSPyzUhTaKtNp774g1i%2B8rjXo14BKcLEBrT6S1zKz7s0fxovNYKD5HegBhZxBn3JNq%2BGVkMqkHoSejVDxKHVde0t39D7lAY2q%2Fz2KKSZPa5SIF9kS%2BidwOrS4TM%2BQ777poicvR7X7hBcXPjTfP8CP4Lt1BNIH2v6H6EzwkH5etGvUVYJ%2BVXZZslj9NTAsi%2FivDVnbS9y4Ab1tKd7fPmz4mKgzsRCHGaA76ShdAv81Auf%2FRbkT6LYP7qyn5zU27HQ95kcy13YsEBnBUFyHbh3beVdJAS3UR3sAfW9CLYGgQF7BOQzDRhKsRpZtcEPLSInEkd9qeD5io9BoSKryvx2UtdgYznagLSTYCRkjmXtnHMRLVa5XVUIvuDO2Ldt4Spb4Vhri2kttW2Ol5oRpE6Ol3CitRyUEuHAvHK1cd3sWIDS3%2B6v26s8VM3oODIIKCpKWg0cl7az1wlS2klhpvKiMVKxr9tZ2PJDjFiYe76V3xk%2Bd7jsDCpjrG9BjqkAQkTVOCWGacXeSRbWRZzIc%2BfoeEeNGvUcjU56idjKiW%2Fo6wCobT3BGy4rRapJMXK%2BTVYd%2BQVFkMv3UXkaxyZpUnZYJqG2mqvNRsjXvjgLGGco8Uf9olaGMgZ0cXdZxIJVJ%2BADPi6vbKK4BLaOAB5Ftv5RV9eUoWPYukj%2B73wRrSUV2TWUx6RCACnUKZu3941IjCkfOJcUHrcR0s5GsE8Zpgbu1ma&X-Amz-Signature=08c973ac2508f361c152db1434027f41d55870946ec8124a350f85c773e0b6d8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYAY2G6%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWZiwpzTHUaTe%2BhwzXWoWp%2BzIfpFfLU9aYuntROhAEWAiBDUsFIc5JuhID66xlR9KVQJrQcVKkanqBrfl37aAwlISqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpEexybW%2FJ7d77WWAKtwDCNtMQInpecWwrSr%2B6HxBi3HY3eEi7yHUJ90xEdatwqNOibtNq2XVD5tQ9nSXAH5l3y2YeAvexDJWOgIsDPKnO0b93Z9PDNkYbfbf85Z0ZLXbHRqUIUuqnz4B%2BKgsHRYPYCyyf6Wnd%2B6Fyz1gmYN7l0jvlMcYvO8f7RxlQkPgTTtAz%2FP%2FeHMxLZSp%2F%2BnQrCDNqz6ZzmUcNxnrWmaxsmfcVGDb2%2F%2FA%2BaKq4CvvMwW5R5ctKitzNSiUE6v0gSLDwHmzpL8KX5ZOpyQeRiK5jo7c7dxGrtB2x6ZNSCWuxsiz20PnPcgqP1Ccd3xhQEZidK14PLLNjkm9mJgRjBiamtfFj%2BGCpd5RvazekknFNjq5fbtlXdUa9OqtD3e1jmVJalVECZJTFxw%2BwaDPgjSbbSEPMWfosdykWuVohkVbwf552DD102uR5EpX4W1IUVWkXBejSEquFD%2FZf51uwC4icRs40Pw7ehJE%2BBbTZMOJCcvqzToU8gcpJsT95qdHaZoWdvQeI8%2BeocIWVW3xEhdpDWpLm2VXcI441i3YwUAb%2B3myi8Imwn3QndljA90GJMNDB4wRVvGP%2Bye8ptmqMiK7bXP5YkIYoHT8pa8uS5x4RPKDScM7TmHZIlAiPmbt88wwh5GxvQY6pgH327BchcloNlWORWCIV%2BJv7SYYH3cIL98u%2B6LdDwHkCceRPCLmR2Nx5EYtljPQYPX7NKgJnvA59OUCyHIoieTx9qEajwEFsmGbX17kSKowV7S4OKmMf4j1toBnw9k1sZZ92NXVFPnAXQsFnpR9XKLPi%2BLiYcYBfRqKkseUifePgVIG6Tmv2yOOE91svCCksronudN9ju7%2F8zULqS5VLoYZNDgVtaYq&X-Amz-Signature=680ce299fd18541bdf8444a637c583070fcd4ee8d0d232ccf265535d6c59c79b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
