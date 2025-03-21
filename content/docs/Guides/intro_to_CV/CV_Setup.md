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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB4TMANA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHFbfby679dijV1z3KcsnFnSkm65Hu71HnD%2BN4kalNBGAiBTvkR6d%2B53OXLt96X7z6k929VexU5tmHlj%2FNRKzzNIUCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3T0ZIKMQ6faZO2RFKtwDjBtTZcBZKyYrfzRgV87vopxbPLWxOGt0kWK6AuWIws1HUTGc4Ww60ikjPDVxWlsMFfDkYPPA1ZgjGF46%2BryGcGj9xFRJdQjXAFtOgY1aUXtjLgCM%2BSOoxdMK1StnBZwBm7SHW1zz7%2BPm5Cj4P5j3CC3afUyHOZqhDA9H3o2UBj%2Bm%2FP981g%2BmeTOoC6eWKJbcnir0H8ihcniSkwGSMqeJ3SE50Pl4ec9vbuFmKDbVbFKY8kAlMDvPP7pXCLt%2FxL8E%2BpK1%2BH10LXJdnPdFS%2BQrmLJJBTU6KKwjR0bgmziGlm7hIyTua%2BWdBIRQkGtPUvXtjhX3KXA9f%2BykWd4fpJejE%2F8axQpH8F0UURlidlSteVl4%2B0ukDkbN2ug6SexrPcRzrV2mwy2waXSdJMkfljOU1iV9TKynF6FWa4iRLeemzt3K11NC5CNDgDL7XqcpQ9QJJc%2BYV%2BEOFcQXDcLb9fPHmhA6pTYuwUmafLP5zvIYCpDkEtwePKEaAVtBWPGvK8hixBrJDMMFecqvPW7mqbzXfC2hY0Jn3Hunn9SvE%2BKaFtPA2rpmsL7uEmY9CRR4eEjUQlxg5KYs5aa%2BYWtUdEzlL4yZ0NbuGwF5IvTG6PN1%2BnuIFuhteiS9zzvgYiAw%2FpjzvgY6pgHLTsd6V%2FE30yhC9Y%2Bq3NFekyFePIddsDuUvA4sOOqlDCVyvHmUz50Y8cWQhFlV48AvLnlw2iUX9kRZb9JpxF0S6IOeB1%2BoKt%2FGJEkeOCQr%2BU%2Fc5PIYbDqVb%2B%2Fpu5HpuvZ3dHhXNmlIXlQHnJrZAEhZnXEIrU8cwRnuoRCU2uZWXeeoiSEL2FLgJg1JjNPMASooTFRiAH6vuwrMFDXY4I5Puv07K0I4&X-Amz-Signature=1df475ec1fd91d30589cc2575ea6bd9f0bdbef6c0ef112f75cba57a22db25094&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HC4ZDBW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDTS754DvDAXVEpFtSeNaEE%2BwFMu%2BvgPwqYfeT01O0BaAIgOJKNeJGqWVO534dlpTOuqDU6UdGMQRBXdDlpgn4%2Bn9MqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIU07GmgASPjsp%2FW%2FSrcA005O8Q9TDjwjT0U2WPkBjtNWw7uG2GP0nyY3qD39ydZRmrPKs%2Ft%2BzK8ESP9xc5xIuWiWkz56I6emQNMP54jtJS2nnjON3zxzlyHtB5z8ql6t%2FSafGIxUjQV%2B4x%2FPuGD3hz70e1WV%2Bm59PIKI4rWw1h4F8aM12FzD8ezujvp%2BP%2FIw2geLajYbfQm%2B0n8r2vfpQaKEWDddVu1oTjDNv%2Fw5%2Bp3wiKkBOCtj65loe1N4aAR1HJY%2FU5H3aBgpIVDF%2Fgj9UNcEMsK5m3rg2l3VZrjOsHLgucU9wldwRjC4wKUHZeL0a1p%2BsfAWPBQzUe32y4psh7ifh2ui73xHL0yuxlxRvQxRm2%2FsNN%2Fxy8QiA0iRs4budU8bOlgRbgrs1rZofkol5DVzUfZ5ZUzkPbWBOYCqLnACUqnbfuaM%2B4umU0coG3mPIxMyEPHFOZ920%2BVo4SIkHuhin%2FHM7%2Bz%2Fa2bfFdNXLgFmPqZnMdun2YZ7rLiEfsLZOr%2BJOp7au7jYGp1R25xuEznOalUcs4bsyZPBOojLLsa1zgPQlEhw1rXl2bdX152n7jwlVnN34GIsmtuKWCFiDZKKAroFFIUdTXhIMsHZL4Da6hB7N6omkJ4sDJXa8zuti4AxpJGjbTvFde8MISY874GOqUBdBbBu2mYFHUNZiCyH7j70HA8Q2Hj0JnYcwBCJzysbrf2VP2ii0w%2FuUbmviiy0PjNFZigfmBUn4Qz8CfM9WEKjWPPfwTusNzpNso8KB5UA9lh9z1LN%2Fujt%2B6MQ%2BA%2FvCpTB2tbciALyFQYZrFSdo4hTYbLgJ%2BuBQCPHohazh2%2Bb9CBF6eoBimxLbEZuZt%2BcuhO3KQAARvMQxmx%2B399NFXkmpwkLJ6i&X-Amz-Signature=1252feaa217c9ec6731cf3415786243ac5f9fef0a457a7485bcbf0f49a644199&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
