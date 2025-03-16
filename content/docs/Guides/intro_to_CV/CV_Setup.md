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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDPUCCWO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE38E6BEP9DsdcL%2BM6QhdQCZrApt3JLtT50%2FtZNxfbSzAiEA4TZrViI1eoXPjf%2F%2BJH%2FaPV4iJogCGnnwbMy3n6Omnwcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDD8gNQ6ZfxxeaPJpyyrcA1pZIo2NkDXuPDW9FeIzEAGeC8NJ0YUFuVwNsL%2FTN8rK2z6BdWteyS%2FxpJWSq2PdbhgemC%2FD6%2FD6BELkkr5D3HmCSV2x0SiSCG2tZ5dJn%2FEZDaqMAbKkFCyZIDH%2B8%2FDj0BTl9soyzodAJMeu%2FhbdaqNBdSe13RPVYhW%2Bzj4PFci8j5Uzvb8PFMjGIVuzo%2FVy145Jp0WLEGrzQNtm6hJFnFr8QWt3idVuBWlnNglM91Q4ur%2Fc%2BDsz2UGRqarvqPsN9EHqNipxF64XW8I0ykMeTs8HfHU3sifNZx5CMzQTMbsurX9lOnUXfOlkaEak7grz4hs4rgjqZmeKN9ZyF6Ds3OJ0T8xQzSJ5QmTgrOyP2My%2BaF%2BXQoHNM6SWHgDKTgJW2bdHzvUGXQ2dIfSHqY9s5DyLwqQT8hz6yLvd9JEuYAemEoZL5IVh7G900vY0gPCzNjuKga7l%2BI8ExrFaiNg2Un5t8sUYed6DoFlGODY18XXhcyz7Aa4kqB0MiTsg3MkT%2BpX7lRAS6arCA0iakfMf6FLEbQM8BxQiLTR8lOTMSRM%2FdhZIOQOAIIGPpoH57AoEcJ%2FhAMpipRAOQVAglYYs%2Bhmys1nHWsvysyQucuvNqtBDzFjxIe2aQ01c99hWMP2B2L4GOqUBmehshLmktFRLYbcSSsfP93WKCdOy3OHwMrPwpOeYAPQNDm%2F0GY5VyU%2BLhK4pJGe6%2Fmd0GICjSQiVcq4BzmCk94oIbDwr69h%2FSe45yVzscsIx4sW7PiYpirLRUreHvbJK57DtocwuBHfqZKT3QxQ2ft04q81i1q6gP1oVwUHVHvVoRvD8KZs9iwWho%2BEBGx4BTnGV5KQMGZr0cEGrr6pTI6iFidog&X-Amz-Signature=657ae19d57d4c0a7310a7ac5ee6797f2aa19e5f3bcd4c26fe0b70cb6e6b2bafc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5OYFDLN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyDXgD9RZEW%2BbKoaveiPfnA%2FRhizdHEO99f3F0v2X34AIhANQTuB%2FWCjnag5YgzoZoUoc0sAgP6%2FO91oUhqRYEnZgfKv8DCCAQABoMNjM3NDIzMTgzODA1IgxFQQrR1FefQ1Ir7GMq3AMb3kE0mnLvGOW2C%2FpczVJCtYeHEzfIKVdTWqQEl3rWoGBkEJyJVW5HQUwH9Xv%2FoX84hZ6stP5a8jZsl%2FRRoRNGb4t1Ff9BF61cr8wXlZoWiHVh8dOY71x%2BfG8mBiFBE9v3KGooH5JKOvXrvT8AprmyG2E1niRxl2zG8tiJaLG0BP8SCaaMmF2%2FyCqky3arrgF3zO4vuZl%2BUGwmBDbh%2FG1ZwCak%2BPwO5qQ6bmCR1Hu%2FAXKDg6FEMQazW8SQhSuLtiAYZlTIQxMEjhXuqwYxbUp3bXbHEk%2FWW4hYJ88St1Kf9aTWzzlQkV%2FtU5mXoWlUyQUd3T0X8tgvecibGvri3JhVNp8MA1IG8Hr%2FSjSAmoKUn4RP9%2BOfnQzN%2BD5ON0ZvKvt53Y%2BK2gwbDkv4JFLq9ITGa1XWi6biucfOtnVr%2Fln3daiHY2ztRDcl0lCek1G%2B9ccLU636q46FvwWx9HiOUKA7Kzgy5UGrD%2Bn2c1OQgNl46sxKfFx7C2E%2BrqlblzItBiqvN5COQipfjC2FbdgpT5txAr2smjXCmUlBqO9z1nVzcPPXJoTgzqY0PQV25amDxw89qcARuyxf%2BdsxVPOgMZgrV5dwctKNLgnCmSOVN7raM5yMIlIh4jVvgYVPKDDRgdi%2BBjqkAel2CAvMUI28QSGVRPsthYZcF8Om%2FQ08czPNqYbFfFlRAWY3%2BE0d3IVbA2Zelzszt53rlWaM2bj1ONgRyDSWOIU6bXmnsf5eZPGGh%2Fi%2Fi25O3LX1ovFkXKiU%2BvFKIIX2OOT5NxxYIBdQIjZmp7cJUO3V5iTalHLT8WlGbjHZH6X8QoWBqm3xVLg%2FaHuNT8zSU4lGtc6xlZm2pyoRVMBYz70czyKS&X-Amz-Signature=4fbdf1ba26e44191b03dc9ddd8a8331a9eb91f0381c74e08d5e1d6baf8d49111&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
