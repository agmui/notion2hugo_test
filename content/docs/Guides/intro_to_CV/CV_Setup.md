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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUOIEHPT%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB%2BImumwyq3Nu514Mo%2FdNgWo9cEAAgouiYkGts78ihWcAiEAxihyoW35TETagf9Tg0qiVDiF87cLL5OZwVGr66PP2C4qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDuTOTp5HXoXd8nvircA3eafq7y6oFwVbzJDMCHqrvoUoFMw9RlJfJBC7kIs66JSKlECNxgnSVQzESSIO7pCNgB0GZjbc08U%2Fs3%2B2cQAwZcFSQUWDcX0z6ijCgiAXvXqAEo9JU6MlfloQBYHEQV5PwTbmGJZER75PooseIQwcqlFKhik9TnID5svgwHVXMLxWviglsz8s69s45hUkBRydbnikQeo%2FRt3i8nY6sDp%2BnU0Kr%2FPEtk2ePM9KcV7p5eUvyaJs9QtFA796cmdOcr5IKW0HKAIRy5IehjRYAy4Ia18Gp0i8P8kP4saxcCaFnEYX4DY1hpEOQt7XXsZiecyyxJGSqs5Jm12GEZA1zG4cusXJ4YuFz147gB%2Fv7SeqmnvCW18KdCOUqQ5t25OmLhvlcXYNQwWzpp%2FqSpDSgyEQZm3yA4sBJBBP4Q3%2F1qge2B9Ea2WwkMkWYK3%2BcAAzmevSKsMDe0UMJocnvXJgn7BPkfT%2B%2F%2BWXm3ImdUEnyxFGe%2FKblM7SED5x6cZUqL1bXtp8t9kB9prgHGrDQh81bGuZ57L7DYSozm%2Bg06jijlW489B4yJgqrVlKjdFWGEaoDQLCIk7z2PuMv1u3VQLIYafjr5VdDb5bJDmCV%2FioK3OsryyuhcBpgDR3cWuxaeMMr5mr0GOqUBU6TDWUcuFxZEll34W7WABAqUIgD%2F%2B23GST0jEVLurxTImCC4lATW2%2Fk%2Fw9aE0AoCjHLcv7MD8EADu%2BtO%2FhWTSJTt%2BaQZKKcvwDtiBI9z5RW8zQtZokH98kA1KlDTOxm1w2dELmE7wASJFz%2BE3EsD4mqzfQfmUbRwG0z2yKKtWAeozjHiWgv5y89KXumGrRTr7X3tGod7abSLM4HBFHw%2Fqt2p83bF&X-Amz-Signature=e8f29fd7cc1afe1d124c19600c3be360f7760caa84d3d5282beae24d31da9342&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGDX2SUR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBQIpRLVCY4%2BnOQShOzBPo8UxKEn2miGy5ZwBKkaVkjTAiBOoSqLdordSkwJ%2BET5GHzLOV%2F5kG5OTX6tqVDH4QJ5QiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXGAHAtAJ4GSA5Ic2KtwDIpqzbYwmHILdpyAyT81l0ZBfszpGTNlZriGpgrSB0yn8yjW6feJnmjPZIvygl0ncIMe%2B27m1MXeFxcAWak0nRDA5YeMfvCfqIN78jHoJ9YPfFNs4s00E%2F6WdTRnTR6OpbAkiI2sTH0rwJABbd8d3TKBSJmzKcQMLB25Y%2FXAD6jHudTC7hSjGqo1kyGB79Iw%2B21Ot%2FHLGKQBET5RHPD3ToOKXfa0I5t8cfFDGK%2FDeZ2dlmSPfkziAMWnS9MV1N98khAtsBbXeX8ZyLDukKwFFCZeguFY0tqLqYDfqzgTVMnaTZbrBgscgTu4PehV0s%2Bhj6K0fdqxUxltaNddbhzvUZFk4YiQmdF2eavGhGCwR5O0mcBnxYgzmKne8icB6EOvrViZJy8LHwO0pax5ZnseATstshJoiyGrWPUtLY7iuTkRUqp0RtCv8UZ8sWg1g%2FW2TKtf1fnWi04299ARJ8H23mrU9G%2BMi9Lst%2BMegcQafMTRlIatFewauvfVk29HB2ueuYtAC38Sun0cx4ZRMR4M9b%2Fcgd%2F7xyXeP3h9ncL2JE0Ob7uOlWijxF4X8H6ned1ombD71T0Jcq2ulbK8SQ9DpJntHXUoAvPexq4goCniaFFsWIZmPHS2lP9Ipwq4w2%2FmavQY6pgHPON%2FaUPKDfOx2Qj025muFGgi%2FzlA4rJ6Y%2Fzd6uOptyZXhe64rPfpEuU0QWtbCU%2BYOo%2B7zublEcq5kJMbP7kpTXCNfsVspfj49i2fT28rWeOMT%2Bzq46ZeBr%2FJWTjJyBm876x49reTUeBPv7m1J%2BRVcyktY9JXYEz8j8mBXzunaWxVZPBiiHyWBv6Ryu6ZnIj%2FyIFeajpAndemszmHs%2FCIYVZ6CGhcn&X-Amz-Signature=af5635d1ca62ece4d0b9fc3b074966136899c97784cd50fdd5d971a2018769ed&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
