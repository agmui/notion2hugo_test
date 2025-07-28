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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAM2BUDL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQClmUy%2FYbzHhK1Y%2FrGL7bPIjISISwSyozyFT8G7kvbdJgIgDGY8PB1YJwxD6exFmb96pdFsKy43Z9ZNuX8l8ziRJVkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqpUX%2Fdp8%2BJPNa%2BoCrcA%2BCN6O8qIHkF4foqWXui4Iq1FAy0YzYSZwjq2C2Ei5B%2FjYuTdniwHA6ECK9HybR%2BK8OznOd2d94CDUXQWJeADHVh2TJD14AmaNBu82JDiSm1TM9jupDDSEe1JBFwR%2BIpyJibpn6ilQ%2BbbNnw%2BKJY6EP0P0XjrTOCcF45qEH7QLcUjMzfns%2FSMXlBrx3%2BAFGmT6li1XzydedFNCaLlFpTJAs3iNGM90sdJPfh4dJhIVXiAUTTtpSZ7VJvToBhtHoBA42To1Ad%2F8nMDYnYfh6Iz2MPpHNStQqyO%2Flgr%2BKKw%2Flngm%2Fcf6tiNzFOA%2FzfVBMgIWIKqKxoVZS45DoozPqZnB6aqb9csOT%2FQq9eRM8iuWy1oEnyd6ghkNfPbvbpoh0S4ol4PUbC8hNgKIcn83%2FR6qhxig0Pk4Mb7XAjxCiglGFX04AxcpolrLEalMqQfj2u7ml0owhmzJ%2BLSjE8QFDJViYUMjKGmoUgMJL%2Bcoc3wVby6Eb1met2Emewo5%2FHREDhJVExVvODJM8YoT48bUWGTI75NfTRahJHg%2BPB7SeSNLmMgNte3E66FFVHXkvIatZP1EhMBUdgIK3nU1YIlkP%2BpLnbHIgUh4WbMQrgQOE29x081okZt6JAfyD1v8BDMPGzncQGOqUBw1bU0ZAreT%2BDG7VISNrk07AtyP%2F6WK8s8zSBgrYpeFP5J9DJ1nzL5ItVzM89VTa%2Bt7ec6OHNCjlngvnisKQKIJgcB5xHlNwHJ5vus7Witi%2F5ArJSuXOC55%2B5cgxHjZF%2BGKqxJXlWk22WrhiSjTbi5oHDwmN9zVGC1lnwk11CyNskSeMe6l9RLb7BmIzXkmgD4r%2BOZIP%2Fs3e6p26N6SUbZC8CfoSj&X-Amz-Signature=c20b2a17165179bfe3910ffafb2c5953a9af8864e3301603274bd6d792289802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4CVV42%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCOZ95lewTMfkwtEIjiBNAFmYzJxCA2vTVCb7Z4QTBIfwIgUC8%2FVwISb%2FXToyWrVP2ddF4qxsNfGHZveO82rjYGwB8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLe5TdRzxLSzY4RbyrcA7nTBSofHm%2FJxRZjwQp%2F1a%2FVvCZnYBWsFJ0FGG5ZYOjWohfAmAOh8g%2BwcSfoRJIjbwvfDLSDPaGFs7UGl8BATbjsHZ%2FndEE43TT72UH0pA%2BnQF0K82ORDq67xQ4ecvlU8zYTyxnNBzwaVRuM56O4XOd%2FjQ%2BeDlcq3xO0C2K8q0JCU1zORGzfjups4iljI%2FnGLi3osBfx7QMzchGv1HtkO9oEMlHC58NKVz0op9eaBYYPHRl1HVcZoCl4Q8DzIiLpRFKD0MfZkUaiekqTGwSvz4Pva0mVMkZ%2Bs3Oy3K7f%2FAV2OpjRyKFiv3I6LjESvLSeYk848a25N3pKe%2BkUvLcXHOm7QSyzOR1XGqq4k3S%2B9KrxgHLvPJ0aPukq69jDhD937izi2wNsGyMOEWX6p7aP3RpQSPDAgpuHMyNOsvxgwmtoSpju2z2KCqrWK37BwOnqOwr3rqgL6q8%2Fc7a1FtNmWpSHtPx2WlNpuR9bF4WljZVOqHOf8bBGwSxW8F8J8D5LydqRqJLD4fcBsgTiM00i4xaLHqOadcRpAuqNMuLl20OT5PLI6qPwO8sgnS2wfHDlhGaUUoP6dKmglJ4h8SQEPuduGRu5dxa586c6BVPyyeUoPCQDn5z3ZbpR30azMK%2B0ncQGOqUB1E82ESuch0HNXuf2TOId6JuMgMK3JoZcSQBS4%2F4wvYISub0A0OadC6x%2B1%2BKgvBDLA8bJi2k5Nb0fxxkwQICU1uCeW61jc%2Bg%2Bf1tvVgBaTZ1PIt6jH0l5oA3954gbAiS7P5lgEOcJ6Vkf9HlpBY3Ho2Poz1M7WYuMiigg%2FOH0s8LDZB%2FFk9IGCNWZkFrTRu%2Fqz3R%2BVHKV7dzV8cLy9jgy37MmlJzt&X-Amz-Signature=470935a8794139f6717747e30aca02b36d877511746af8995411b8960da68762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
