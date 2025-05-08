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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSVFHIT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5E9zLVK32STbypgU6sHqRoQhFgiTKp9dzicL6MVfrqwIhAIyXU6luxJm7s5EH36L%2FSoVkDemNMJQhLicyaHb5tk9cKv8DCH8QABoMNjM3NDIzMTgzODA1IgzjrhB30G3hnuUqPHAq3ANeD2ZDOjMcCAFaGf9QSd%2BkeGTDYkWq5qgkaqRd74AIR21o9RFNhJG5x3IxXBNXf%2BfaRmQIVupsMq9X%2BLs9N1TtQNQQrR59BL9dYtXD8E%2BsJ6cZHdhz3gwS7u6ytb4yiTGaqn5rv7XoXakll6C22OEGCN%2BzyeLGnT%2FYqHz6UH0J0nVZFBUrEnPMWzRHHZuMuf7R2zQMzEp%2B4ZVNIF9%2BYv2ezBDjF7OmZXwSjhoFKbuznaU5bg8UTc45MOwpflfX0NE6O12Z%2FOu5t2DUv7EUuqYJByfIm%2FJl4ktHUE7v8mm6wq8Ipc5IF94GaX8lcSqCq85bWSay%2FRdx2OLhOJLqvfB6eQGd1jhBhIg24vkIftzf1kJAzFjTZniG3KHq9yoDJeGto8y69pygYkx%2Bz6n%2Ft86f%2BU%2F8G7vz55teCdnDVeJWlk3RsiYFwwpIVdp9j78HxJQ6BIufIyNsFwYDO9UGiMLM1YzoFaHVWc9qLRA%2B7StQaVmlux6KJhyvASgBSlmoSg1oQwtsvUBciLgBTsQ1Qp%2BlKBkkR30AZoJw0yIm0z8YYAjClkx0SJK02T2yUBzmnSjm7aqF6cJLyjS3GUlau4t4CxaAtFIrmUvzWW75WQilf7v1gt6hdMcv2Tnc%2BTD8yfTABjqkAZQOsH1WyvaKZrquGzw1SBmyx6JSLPpvUHaZPL3fYaTDjythtpPnQCiZxm64IT0kMAlxKRfnfPFZUdrF9dQQ8hfB2qx%2Fc2FeA3%2FY4fmvYiDp0OKQYm%2BIlXb5eUxn7UV67ZE17nZMNyUxDJdWHN%2BtGQsFK1OvAHuj0rw%2BZ4Zv7sTWUas0gCYhCXmntyaLcGTLkIjObzPpGmtTltPeYAEe0rUQ2TyV&X-Amz-Signature=ce3db6f18daa4761ceb1e042c6662762fb973368a0809fe8fea4dfc882cfb41c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6MBAE7%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICya%2B0ZGdbeqhRuPSObxPnsnMq811KGoR3YHfuajuG8uAiBOR%2BVVidYsn2w0debkRhgPyG8dStmvTZcnv2EQXhF2qSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMrvjS%2Bn3wqDY7OtrJKtwDCSML6kNT9%2BGt1VCDqlbUfXqL72wcqE3mn9g1nYBU361B8rSGUTVxurtkxXfI%2B6%2Fu8UUPvkGKOANgxqGT%2FXMjLKUJ4eGMedTZj%2FCpFW3sko6Dqh0yBEwaDEOtMjBfTvmukN8s%2Bg7vwOeDpX4F3lPx8ffmtBuI%2FR91VCjEqeEwAfdgOi6aHFswoowsDv%2Bk3V3y83fDxk5qoZwVbk6y%2FHfAeW4%2BKkieSs4DNbux5kT%2Fr6rErEc63HQBOrAcgcRyHNSltNBBAX2qmkPS6uDHLPzz1y4xoIgaGBPcICZZk98Slno%2BZq9fWvuFyf0nqtbPf12U6n6YIMCxWQPTX%2F3szn1WjqV0WQwhw%2FUb3L5KmdG%2BSX20yXdRpucbzB2jXSrq2F2s6ZFBKJJj1imm77xCuDET7RjjCaXdohu17v8HlWVcayYhGZOUQPYjZGTd4ok6mMvqaaUX6mqGH8xAXFyvRtCcrP3wwXsRVxPMHgiFNilRu633rGnTnARphIIySn7OTBSqSGHasUySCHahxJwTii9UBwDSzFKLHnBw%2BqcTLQdqatal3Q748Bp3uDwRwqcOEssjXIdv1Wv46JHOmUpN6DLC3e%2BnMdu0dNrz%2F%2BN1uInHnoQCuEV6ZbXYv0HB5RUwwcn0wAY6pgHGb7tcqzAtILrtkvt%2BAMleW78xBGPArqkdD%2BaopUg3PeF528NRneCAXV9IiYFGs45DhpBjQc8lkp6x05rkKwHhoeGsNVeaUwPK4KRGjwNzk%2BtcSeTcmvn%2FeECxLJfQOHObPHvKrVfNYyUzQvL2dSpd5eqlrSqpTPO7yz0O2TRGAI%2FhCgm%2BoeI6L4sYlYIpXeBqJ1UlrNfT0D73h4EbgC94BKiugjMx&X-Amz-Signature=1089da1d61e1189c69d6d0bdf51142f4c42ee3b01a82708f37d2138a74ba05f3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
