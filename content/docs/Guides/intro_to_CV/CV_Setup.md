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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQB6LXFC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDz78zlBoexE65I7XW%2Fnxhw%2BuZfHv6gM6%2FSWXnlaSPcfgIhAPt%2F9NnW10EcZfyGetF5BglC6j31OWl6gkJD14RVQg6%2FKv8DCEQQABoMNjM3NDIzMTgzODA1Igx9ee%2BuirmsZqHFxx4q3AP6orLicsrCmYLsaReasOK2rus%2F8tNaPZUCaV97OS1os4wJGCn2MdfH9Cspoj%2BlatvE6G1F7CNUBqbyZ0fvQYRlZFvzIHikW3aItpUVQ2iXFZZQw9dwGEhFEEKcPC01JLYhQU3%2Fe%2Fo1W%2BNaOWM1Yoi2A02LAB3v0P8msPCCJGxwsW%2BJ6naMC2sM9aIRm0obvFxwlGwONGHVXgQAo1NaUbp4dCw%2BZDkgJq20G0%2BcHc5d%2FFiRpXwLrX6AIFEaqiZupr3ZtN1Ez8ugO7rq46qKX80BmOUCbS%2BWBMMH1wHDUzsBQvwSy8aKEUcS3N%2FtCbl8xPkAeTB7yk9IM2%2FEul8HKbDqQWYiOAh6QscXnWBmzOT1Sl3Xqu0i7i%2B1Hz77U0BtKKISFeDW8oRLPYXhRydsklt%2FxP5FbBU58Bms%2BgxTTMucs5l%2FmiMqJKpnO%2FyFcEdj9Ypi%2Faiq7GPs1IkmiUW3c9L9V7i4UVM7vY8Ekq4VHAIbhlto57PPx614%2Fz69vr2fFjkSncZrXrFIPeFjeU%2BCD25dQi9DUEERVwKHvi%2Bb5OxaKA3aLz69sIbpLys9MgnhzIjXrcwIA427GUUcBZKgjKIyYbraMNQVsHlwo%2B7TZkHfLKkH%2BK2WV3md4b6I%2FDCHjI29BjqkASTH0oYezXAVvMacWl3%2F2UJ1901fuNmKXTY4CbGuixD8gb%2B04TzhB%2F0pAGPqM29l8WL1LWFiPvs3HCJ%2BBWMrDDkVM%2FB64MRPd%2B%2FBWSnntTNlmrpHT4ESrDMzLv8nDw%2BPyCfs8R%2BWMimAcSlpsThSyc17vGOpD2H8Z3BmhJ4QPQ0BmvMbsafnnl6Ut478Vz3R%2Fc2BG2kMRjlKJGoO5PKh1BWE%2FKOw&X-Amz-Signature=6b9f1e18baf258be2ac90a18f1193064ace1a0dcdadd70f5ae2dcba9122c37bb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4VUFOM4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCICiomCzQmJspUJYYwvJJEcNjdSjD1ZVdH%2Fn%2BYaDdATOjAiAlEE3i3CRnRIbHV8XF6BCP94tkr0yejs5VTyI3Xejazir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMuoI9jaQBYcA92%2BxpKtwD1gEXk%2Bcbkbakk8N4XSwXJjiW6ln5dsWNVp0jrZt6eL%2BKgU72i9yp2iLSH5pjhgjtD3kiR6dMzHtUhurX1%2Fn6qcY6RkGFZopmcyK6MwGv6Mwn3fjuvPNL0rtLv22RdjHOLPenk5YiNEBDnjGVuNo5gtV2joFjCV7Q74wFaWeFok4DjTdbjA0v9buqHxUDsHRWWerdADWC6SjmOWuG71dnzosuLkv3bhpBpguWGcuLgWHnMGdSS%2F4UYv%2FhGu37fLcv0IX8jqZt9A4wGci9FF1OuQ7mAjeJZ0l8shCN5rLoWiCYjcD33HieIIc7Y2XWVXe7jLji65vg0oehDI5TACw%2BuujbGmVw9iP9X2%2FsI0WRSetMKIHl3vaNqsf2Vmf7kUz07KlwsGWzKCbprviA7cTEjBacGDRh2Ox%2FmAt7eFjMOifJpnoWvN5SOxxuuB1pt6PxvUyV0yuiPESgsvQiql%2Bdw6Z9hEjs97yrd5ILfSw8CA0hP%2BqJ4h7mnu3Bao9VCpT7B7BG080foWqL9rvf3tnPyX3bsnmgsjVuf2VrlvEnbk8eH6nESNB8aYIJkIMkMspRlR%2Bjy2GUu9JLpVb6T%2BVime%2FTmidfi97l8N%2FCUh5EBVAwT%2F7g0jxjP%2FHrjdcwho2NvQY6pgEDNJ%2BsP8irJryTHwuii3QOBBCFl7hy86kPFR348cORL81CSwmfYb%2BVbFX3tol9iVSpO3SXvrwlqj7OpVk2EG8n%2FaPXM3%2B4A2uVnBorlQ8gZ%2B3ujdxRwuhFnpyR7Gl0BwNO3xvDkfo8%2FHcSQgmGixTEwHEp%2B5WVp3bmGBPGrYbsivVLuQzIebooU1BwkwBc%2FIRfXiAXCXhvwMDHHHfr7h21QA%2BXEd4R&X-Amz-Signature=34d6d4ae9c677798943bfdec2f32454267510e59f539d8e5369aab4f95d8676a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
