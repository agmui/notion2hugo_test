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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NXYJWJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIGc%2FdS%2FaZXzBxkDvrzo8Dv4LubUTE4cHH8NkLvQn4%2BMOAiEAplUSytvdnBw9m33jFkd%2FBZMYu93BosJi4AI1hewF2Pwq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHFE3VqGbD%2BfnQRqPircA90QVWIM2IL9Ez98LB6p61BCj8hXAU9OU1pvUree5z%2Fs8TM6lOd0%2BuZNHZENtauaoTNaJYgFCibEiK8ZiZ%2B%2B0xvnmMJswYEnuga9fB32lyD2M3bauMRlqF%2BKfCVrlBSbmyiK8yR%2BOtToP5szX4oIaP%2BMbjasjTdaARs10yoStwZLpwH1drrLWnWfs0oLftNO7TT11adW7L2uAYm8Axqfv%2Bw2CefyyMBIwZzUcN8K%2Bi9CAuCk3ZHMTlCxWkwb%2Fwhs8LOjlV9xG%2FVj3kZZHYavbV43p2dubBWlPpqqvRriCh38AdHws9hhoMj%2FK%2BtYtb09H2tOWUj9jdTNwYa343hKQETWMIyM%2B01hW16nLD6DFJtYYZ%2BtHLxPyO0nDMhYzrzSZqZz%2FAWtSBeZVGon%2BdJQoSA9QOxsPyh2%2Bx4CHkRrAoSmt839H4Qabeg8RCIgcbgoK9igAj4c23pvvSIX0lhLElgeCB3mvh5Q57dwIl%2Bh1oHpuN7Y%2Fdpxsoi9X8L5Ejf5bDgc%2BtE8LkVjhNV49tyYlc%2FlQiGJqECsW9hdMURI1FGG4ArXnXqz9I6DNa0IV9HT6UcI0UHLpJOSJA%2BgySP9%2FqyeMLkViba%2FU5%2BtLwV1ptas6yFbTrLiVE%2FHtG%2FMMLG68cIGOqUBsDBeIVgZWL40nkqVBzlX%2F9Moj5c7xHGzro2n5%2BntbyXG5bEicQonPusWG9qRF4R5ntVniCXD9KS62S06AJN%2B4Ix2YjhfiwxLdtiEXR5GyG1wmPnjeDkn5hStB67CRm9jBaIQp9OpiItdtEHwpRK1rBfHdueb7osgca%2Bk99cTSkB2MLTzjvDvrVBJtOffH30dKJv%2BUIBsRQwwjf4w1ehz%2BoKpNss6&X-Amz-Signature=42d5e98c0dabfb4845d146f102a9434b13b8092bb76adc86ed08f81a4479b853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44S62RG%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFSYOKov4jSpjMvsdIcWuEPRNsqXzbo8VuruyRyokzf4AiEA2pmRpg39WdbWQs01%2FE4j13rqLhdAD9IMOt6PwiVYbkEq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPcpntAZSYkrv%2B45vircA2BHgFAhN7I6IG%2BvkUhmutDoCgpHGAMeHjeCZRj%2BtOXaPO5oYQVSuAD5ywIk3Jxe9mQxU5azWkz0K1aLscL4kUu42w7mz24g0p2E3Qw0EQf2GM3nisbdOW%2Bn7gIXaxXs5rZ6DjnJwXftfwXxAGiamTURYNxqkFtziO2etpzd4CerM7birFELZPUuoCHFGMcxGBRSZ1IbGQCins9154Tpm5wOl6tlGlhc1WkqCSTJhjhcbtY1u3haqFxyuOM1iwRLcGWxBFmSqq2Oz03i%2FzeEe2x0SbcYo3IRnEwuDfkhys0XZNpnl%2BIRyeqEMMZJw%2FvoDqYwNQSLcj97mVFjvDj%2BzkpPMJJl4SAsWAXSd2gJVuUxgoTxtpYmQ78IiwoNmdksACoFy1PszpdKkJtrVzWIh2zvX0RR6nSwpywOUHmKwNc7CFgCeVb8Mb9RZ7YNwe4TVASl6U0yTvLdR1y%2F%2FsDAdDk3Ftn1KGbf4vfhxKHfKTe81J%2FTGvXM55zGskQNgIp0L%2FxQ9eTiz%2BAGIz2GP7UYGsUQEsRDCV%2B2a%2FDm6S360VI3lJc9MgRu68E6cs%2FAEtl8nv5MPsOY8%2BxmhR9aZzeN32Z8op8%2BDx26cj%2Bpy0TLrD385cuTvuRjuWmeFuJ7MPPB8cIGOqUB7ywXewoMoJ1Ub6%2BFw3T1Zfjz04QQ4egacMcLoPs5N0bBcWIYRHbQpaizwsFTWCTJpX3gSgL1Hmig2ibPO7ESjpG3pao9gHrmO1Oqcv36buD3olTdv4ADjl%2F32ruz7Tdi7opmfFRtNI%2Bspry2etaCMNET%2FBHXwuAjypKbtK2pLc8S54Rpce4HkExg47wPAh1%2FSnVJl49mDKC4vz%2B%2BEgmVChFisWAh&X-Amz-Signature=45fa95ce671176e37d108eb7aa329e0acb0a1fe1919b226f647862e6dd898bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
