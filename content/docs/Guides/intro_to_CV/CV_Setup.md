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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYYWVTZZ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF65A%2BJamPxvYo3Tfin7hztCTLlzoPLCsPB8XtUoQILbAiEAgruw%2FBsYZgAY7V3XwjzVIdnP81SCEYHaRQ7xfrZ63lIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG2RqUrAgmfEHt1h1ircA%2BakJhjLXpfLvZQqrQ0yRLL6g5I4YsGsPuOImyQDdOIWpxbJbhWJAHllG%2Fu40UzOAszxzeZ7WAJE2Pg3%2Fh2srZYj64Kb%2Fl6NFfIgK41e5dlh4ohR1K%2Fn4B3H9w%2BqZ4TVpXnhMt5RlXtAMAJe%2BtaY5LlonxbKv1xO4IkqMxS%2BoktIgnxaR2bf%2BYyzf%2BSh9zHlGh9t2Upu8GYWYUtjUkW3PAXOtLN7dK4UHzXHFBpl1d9R4IuLcy6%2B%2Bp3i2eOkNKIRTM3%2Bf0DNBojPvPi7kd%2FAg5DmO%2B4RhWJIQI9Nlipm2yCEZ891st%2BA5%2FxopoT%2Fo6uKIZ11kFeQgwtp52Ig12MuVfi9w6h8tvHm7fZmRDUStlx8YaCApzJVQ0dKsXCqe1xay%2F%2Fcptul1YULkFct8VuGECGohapIa%2Fluc86rfKPamJ5aYvNaQLzEOGImQnwTxdqq%2BA8PFMywuo7e1QgTTgbzb%2BMrVB8ePwUMKmlrm17D0imKqGw2QqKjSxGuMf0ZfO%2BzBtuybOx5DFY7GSOffBPCaeyiDDG9UawZzNBr3g280%2FnwlgN%2F%2ByOZIqPR2S7OdZmZF56HmwfIqcaWb6pwXuFGaFueCSEKPZVpJXjxVkUxBn7nWUHqS7788ISItcFIMKmSpr4GOqUBho%2B1hxGzow92ZfHIUhkNjRJ9sYf7vbKU9LmfiFV8FepEhkInVZxIw3SLclZ4MDTDf2qOiLEiXonzigi%2FtCApkohHI5w7mD6hUTM7SvdDQ0wi8cR7SG6ZCh%2Fj9JJAWtxV7o5gKFYsXS8afTSS1%2FABQp8KcVA9LDFiBLofXk0dB5xxcBB8tXhPFtF%2FWbuEObeIxjkOcqx5Z94IViuWihj1RW0pTiQS&X-Amz-Signature=92f79a37c2f227ef6b971b84b705a218d1b6857f7fd9ceb4483b651f0b89992f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCKFPTYK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqrK0I%2F5M0JdTP%2FqYchyI4Mh2PntIJGdw47PDY1vsZ1AiEAok93wZ7bf1plidUpnd8JZOiHj9Qd2x%2Fro0%2B2bdbeRpUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNQBpgaEKL2kflvRwSrcAxF1ANgAIF%2BDtWySdhzLCRIAKwsx7eh%2FreAOSfPLC4jUldgNAWoZAmC3gpuVx4GVpM7%2Bx8zpYbVoNP3qecelDuSWFygvKyqqCpoMF6S6gHupO%2BiQXnf2q2ix3TkFdA3bksmj0iEA%2BXjqBke0rajPW%2BdFpXcM%2FJI9UDt4ZNOGbxkrVlynRvT9DnWmdGdKBuWqxS9%2FQbIZtNPQUSUtqkj7dJAOMpmRbAr71Aai0KjrBNxXC%2FqnOy%2BxHl3QIuyKhARZ1FoLSZXjvujNoNncd0FUJoo1VJFeaZGV8pgwAao3InVfF1qZ%2FnMofHdFQtmEVOp9c51sf84Co8c%2B7CUU5ZOCog%2F5ROYDvrIeg6lwQVR%2B6HFmJyzSYirZL1gHdXCOgr%2BTwF2GNJpP17ZaSl6bkhDq4HekXSfPtIEnkTMtrK1Drz6djbc8ctZtXJw1mEZZLHBbIEW6FOBPapI9QE%2BFkDYZE3DVRRPkdshRzjGroaJmMSwiVEsNBXNROeckSrmu7sMzupsFkX3Xd82l371Jon3CeJKOwQRaYuzKMgf4NZVpkveRFAyijIiiNh6ZJXOy7TwMSZCqdQJbPelHFIBrrtX1ASzVj1tN84%2FoGFhijVvk9%2B9Z1BidReG3YiFJMlpIMJmRpr4GOqUBwxHVox6TSl7e8mtWcTnQrJ0g%2BFruuz6GfIozBhZ%2BUC5FML8%2BdpvnDQa7kAdPzFuUApDHwlPKsn8bKMA3hJmOSppFVZ10SbsLnq%2FwjXL1lz8uGVXRuwAoE6WZNwEzKp8uaDOYN0xVfyDftoOZi0vVWOAZjQHrO3q74I%2F41rWhLf9zrlEf7QPo9rUeYYoFydimlLRBgKOn7rYZ8bH5r%2FDboidYYFMz&X-Amz-Signature=079c7be8b964afc019022e01c8bbd5a01dbb3adb9811b2233446cf1b0bba8714&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
