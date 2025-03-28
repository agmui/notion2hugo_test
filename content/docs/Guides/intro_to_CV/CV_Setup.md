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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BODBELE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhit662nMBh5FdNwebiBvk2lEzXzgoJ9sK1CBlZ7vfTAiEA74cjDWqXFuLpMyDOhvDHAztXx5Xjn1UF46OxcDLQpzMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPZYYN0S3vUq5kXOJSrcA%2FnMusAx4JaYdNUjjOq%2FHbhTQqgVPMhEC9fppjyGZbYiuHjfnzfZLj8f14boi03XBrSfTXDRpn%2BoGnxtaUgKnrRUtmkKaQkrrNveVjV3sb32aH5uPcrVgvOY6E7DDDzr1xTU%2FNyW%2BQ178YflCwnG3W6FErQLRpijgizExM5lAogrZq5EgWJFWYnLtBK3YenLyTHdVKWO4Ydp6H7Un1AuotToqmKHGKhMndYGfVTjbVNHcgqLexxRvUs1NSMNaXAYhN3qHZiftTlB3s1z04kC97s93JSEeeSZ%2BqcnlhQBvzu7grpiMXlP2hO70VQGhmi0N9OLuxVxH5tGpH7dF7Xc8YlzMbNzuFfzYCX66iGGAeurGA6bZzsv8%2BvhUzfc2RMG%2Bifc57m80jc3Wwqu5NRs7LlTixpdJFOZajfqO9L5UvA5cbv0DQDvpQBO%2FII4JwFQvsoHAst5ODnRduX5Ph3Ajkp%2FUPNcEJaeShNcWfrtGEY53cXD2H1hbHerzUs%2F%2FsZOlTjcQEt2PzaP1apwMwlzQofwyXgVu18pbrlQS4pu2SEfwhv6thGdwy1Q51z9c69ihNQ%2BbFf1y0nXl8NivZ1gl2Sd3A2Qs044I0qSTejY6jsfNvXLEFBf5PnnZUnzMLLqmL8GOqUBuPckMK1d4eu79GxeQ9ANH5UZwC0e0cV7L9onoMBkbsOH%2FecbU23tq8137Uc4dJu%2FIeB2xYCybGcs%2Bkt6KrCytSqnDK1AlPFQ3iywvwFE6cUcdZRMKDJfnWIPXam7skdMzR0Lw4XO%2BnX3VYyZKlQikDzZEE9mOpaLNszOx6%2BS%2BipXjQONwm%2BiM%2BDq5AwCue7dJCrv9Fx5Qbp%2BuMq4BdYGmFKcvyI5&X-Amz-Signature=61474ff409dc46138ed734c4ec495bbfb421cfce6edcb0ec5301b73a06b1e131&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRE5RWXN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCaFfZIhuGWZKqcPBPPHM9L5I%2B9B5q1U%2FE03PQG54geAiEAzAWa9qjKrKjfAWWIAhy0xgW8Sb1WiyrxWTqdkVoBT8kq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNQOGAN92gH2s67oWircAxzaq%2B5wXZofVCe%2BlAgg4Y%2BbYu3QrhEwgVGc2mY7U1PGOpC55pIGHC%2FBTKeyewAyvWdACvdDQk%2F%2FYKhSwakwaTaKZRdarAnD9FsaxMjMN3DtjAyAkLGerGsS%2BbSRwr7ahxeyqw9Uv7obCImYG9cbLI66NZcxpAlKnZcPQiLxntKoBKbtXMk3CZlxtQWO1e5w%2Fayd4iLEQQC0B5jl2UMlWKEEYMuZeCBjVFIL%2FXgyXZmMF0iMCwoTvemr57YYfhnpHPsLfJyYGTiyBrZ5KBLRz2O6mTweU9bq%2BrzP8D5XNock3vJR%2BM%2ByBdJfIcOIVpZ5UbFzI2h2oQHGJn9VoCMMh6GT5BT6nPQvERWdju8y0Z7f7CrkKsAMHoQ8cjfGB4uaqGUqogGR0Hagh8SDQWQzfqiKPuhTWbhM5TExDrHsgVgqHehuS4fkFwyuR66M4PwJMrYQK3PXSk8PMKz%2BeTFdVH7p0C9Ir2u8RpOrqyFSD1nHw8JxufixZJQt8tFOH1oVEiXVm0bG7iG7mEVPKt2vYGeRGPoKJtAk7bRsDL8XFiNe4kkLm4%2BQmkng2psU4dHFxGvu%2F%2F%2Bo0B7n5W8IOzl5UQBiIggCK89t1CkZh5tVFtetCufLHpkDp88EimcZMIDqmL8GOqUBYF8kbtpMzX2liHFyfYyLjIISau%2BUjym0TOFYtnLsZNMfJ863gc6PznMhegHD05KBycyKOEnwxDjHeGkM9EHraWfzOl7f6ehQDenQ%2F9wHelzxpjPZLMA%2BjvHADqjtdCPzJyie%2FQKampLU%2FnT20jKJfg1AjxL4GBgRv88t89lpiYfpeAFslLy6J45i0r5ngl37%2FTfplj9iglDdtUzs3K021jio0asC&X-Amz-Signature=2833f9c750070cf5a00b5328db5c41c624140c9398cadfedc00bb1fbf00f9611&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
