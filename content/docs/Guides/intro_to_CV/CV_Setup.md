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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW4JGSFF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIGYjAHzoedWOH0RBScNOr9VeZ6egCMVN7icbzV6%2FWRwEAiBsGMaPFkEVI78v1C0BWJ8KQmCkA7pY93y%2B7Xa2AKo5fyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM1C5Ie%2FU4VxUgjYgjKtwDerlQj2qKmjmOQfic2KBPb3GFSxpmZXl3IWS5rpep103642o31JP%2B9itlZkzsaKjcRvyC1q2xzg881MY2gVj5xaBxBG3WQjASJxG3Nig%2F5UWzrE5kRd7Cj9LIpUheNRU0eLvifcvu%2BAAMhtFHQvgZeuPy1l1MYw%2FB6higfoIQS25y4IAOw%2Bmc%2BQUrDFzaY%2Foa0BcGRhbydZOv5CRjUbcdQV2amyQuYVC4%2F7hNyviu%2FWhpa4dbAZj0x3L9JXVsZtzhA51BxEZdUZVYVZ1rSLvo6CoEmenaWnsAifhdbUF6YsLETDQ%2FmByQwk1%2FNlzP2oCvWLulRb4Rmaww99NL3wiWVzvk6YxskmImpauWm8%2FNe92qCc84tlp9JCVAZbQWnXlB5oC1FItD64zoMzQAKny%2BJ9HYLIAhrf9Pf0ua8FORjJYhDdZS%2BZoET265jbiMdUKsyKQtSTEEJ38Ihd%2Bo6R39GRsZlVa%2FDjzi24JdLhtyWW8Dcp6xmn%2B3gvB9rzo45QxCQHzziowN4vLJd%2FyW7fYD74MB8n0mKzU407z0HquxFeBnfwjAJztGB1UY6RKjDuruhFUZLrMPHVRRMYtMScjdJx02dt2E9Q7diwbAJIXidgDiJRoqabtGIukncUAwoMukwwY6pgF6mu6LG%2Fz5M0Lj2BwPGiqVLwhxIz9LFsnpmaBvEbf4Biih3zUyGLySyKwypwISfUG5VPKdfLrmdM6EMYZtiPnhTh5%2BY0%2FY184ikR5dwOz4AxTJedUSa1a1LwMO2s80mpaGsCGDw%2BHbeSE%2B1cqc1b7%2BOvvMhhxYPsZX3ijU%2FIGIN3nRPH2SzDXecZr2GILgzd9A4VCRXQla9pUdBhp4k6pevpY3cueq&X-Amz-Signature=cb3d95f1371b233e9aee08e53ba8e4848476bb19e86ef46cf57ac8713441115b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK3QWDN6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICLsBDKSZJ2%2BJ1Pc2%2BD0AjvN0AG8S45Z4NX%2Fq8Ss8IvKAiAXtdNSunarTpZWij28rOpSkQpfER60oq%2BUJkT%2F2ARQRCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMldL1Vu6eMsM9zakpKtwD07O%2F5BCs7zu9jr%2BIFYW8RvpJKHxzwjtHFitqsxJv7RD71mfxfKhc1EOVPaHyB1B2pLwJSkmtaWFkvUrZHUP3T9B7p9PgXufpgt5CenM4sqFJhVp0fSwYKni1p4kgv89%2BOwRYOLlQ4emnysWBOtaUjiKosZcur%2FMueZ%2FEYNlplvjuFJGHHxPQJW3L6aJi3L%2BuGr35IUe4k93u26hD3GXwkij1AAGt3L4sHiepLxeHdHCbV24McOBvXcGx1DvTyO5nEqh0T0LJyGuPUEsQnQ1z3ObIoRhgkjQTJ%2Fl02rcfVUMoibcfSXCD5DAbbkL3UdN5VF8lm5XOJqKTFqlBdByc6ER6RS3bDpkUsoVcjkJlj3OhllwXKT4tkJMWkiSYbQhW93tkfe6bzcbW4C3GZPsH8eXV9%2FLKWvEreUHEEZDA8F7mLyu5CMjx%2F9czMJIV%2BdL3XJYcFNc%2BsprQ%2FKMmgZ8NAuttZNnOTjolka00OWQ078Lc1VfFjWX7Lt2Tu5zTcYkrZtNkFpaWeNSsZOH%2Blq6rvWvTNPLhumsYoNAe4E0%2B6lLozXyST5rhc%2FfDWuEdSQC9mw3lOVjGs8uk82UE%2BfwXhvQuE04w%2Fl1k1WHL7Z3inAAh2QWbeEfzWR6rSXkw08%2BkwwY6pgFRqGdUBzxzJAtZ4U4qVQI0j4E3AlPFzFnuTkEqRcaDf58GgSngS%2FIj3wXAjnuT0ktyPmU1P98%2FttQwsKv9%2FQlhzrOo3IiqTrO7ZQGTPP3jek0zapOETXyu1ZxZ7a9c6pgnr%2FNh9KWEsDLXXsGSDndxTu3nXzxfUa%2BwlwcwONvrKJRQmj0%2Ffz8ViDL0iHZ%2BChBdp84pM2gL2Oh764upKVDphYUgqHav&X-Amz-Signature=94cd3eb5d41eb4001bcab1ae542606813f4760c7490516e39dbfdba9188ab374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
