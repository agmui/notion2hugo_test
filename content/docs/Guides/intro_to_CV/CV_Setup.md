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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGXQNEM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7ZJToTaa5f17nrr8UtCmUXQleSjSPsqN0X0T2Tpe7eAiBD1Dg1IoyqptIKr9NNXWLib8ylt8uCksM31JSwDycTeyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM3Py3o3DSV6qVnoYhKtwDflQhNFAez5mCblF1N4iIqfpUiR9bt6hBVhgYaVYcz5lwH3EDn%2BG2b2Qij%2BsOXjDIaXLdOv8H5cr%2BhG%2B66uEQbbBSKLzStoonSgOuUkmNpXETtEzvQ1ggr1blqXqvOrSgTkdf3u3m1KgUXTZaHaDP4Ha4QMRj8IXFY5KKcf0B9O8ysKiFHpp6eX%2BL%2FSSbC%2FdGn7gslIiLT%2BZItorIQyJxsByca7UEp6eeXuJGGslHt3ZMGB21lMnaxYisnZZRLdObwC%2FaRKw%2Bw8oOQMUMoUYBeG7mHAG%2FEECHO2R5yzTvXTmZijPyQa2QsnALGFZB1yvzApBPOmr0QPZhMm0SBKvqJS%2F9vvppNdHsJMgbR%2BJbSuyPiM2chNDNuDDf%2BsaTETe7zlznfykXW7JrAyF1Y0GQdxRi3%2FMo0iRyB83lsviAxSSc6t4PgZz351It0Uu50gNGW2T2BjxTs2nsnqiFqnBOj17r%2FUsLpBCLBzECSQ3Q4MM5gS18CmDwDDXTwGmPrChpBHwtNTRWM7K6SQWT1pH5I6Uarg0hPmf73KAAG430TXqvJT9pjB8hPto%2BLJiRFW1DvIGt2z4KaSeS%2FwyJeO2iTuGuxG8ZzxtxzCkOEbHVITjl%2B8Nx0nxjG7KyEvcwhYz1xAY6pgG1E7mHE9CcmszXJOkIXhIz2eJv2olE819oPeFP1H3Ig1iI%2BMHTdKkpok5ChzqEou8%2BbWvOm%2FPwBjIKskLvgQ7A25qPvj0rEke2kL4Zn%2Bvw%2BlnIUyX8kLe%2Fj%2F4fjEizD7njf4Fx6MIVWo4YQ5Mzv8IaR%2Fll1t%2BRmnqvgFyIpugpmAKzXdMv%2FTYikp1FM9gOlWR9In6WrEdX2CPE2OzKaLO%2FxF9ajEWX&X-Amz-Signature=cc54c6728d1785730eea7a3244d7a5659062b63f8672512c38fa0b7bf5d94292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF7PTEM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKNIDz8uiR%2FA1fDFMPiyqBYi6bxz2R25obtvk5vwx4hAIhAMwWt5d1%2B6cOOt9NwXv2%2BAmLbJcsn2ivsQu0WwGIxIbjKv8DCDsQABoMNjM3NDIzMTgzODA1IgxNeawMjFpngMYYM64q3AO%2FP6CGCLx5O3XW4c7UVrYgMXALSMZxpB2SIIWp9OQVuUStJxXg%2Bfcc9N%2FHXFDRpo6oqC7IGVh%2FFF0c5gfTZiqD7upwax1X00yNSpfOt3zV2vZ6OJ%2BVccJXHl8EPumH12wz7%2FwCyzq5sdYOT%2FmSOURhKdSnprMxKT18nDtH%2BqWlMu1QmL%2BVfHas8c18fX20i5TEP7lY1w%2B2VO%2BnW%2FzzqvCOJjLUkjhHTq8AC%2B4QL66uHBPf59t2ZIEj5yjE7WRUQMHk6fqNbXj2tFoNTLZ0bQNw74%2F%2FuTf8t1fAMyNeSrawCrqUDbTq4QXksreiNpY0kU74khIxWS9ssCO%2Byo1jRMlt1USCab0USM7%2BsjUbiYHY72aspIHpdGQJP6AEKEc9USq4WIYzeyR2lLoD1kAILczueNEzFQ53Ak%2FvOn%2FwP7vPX20a%2BJMpBcya0HFkkQFW%2FBJLjduJJCBuQ9DelbD7dCIb5YagKQlu%2FHS0%2FkZvy5f5PvjWQjKATiAi96m71QCSgPBwt8x8Jv%2B%2FOTLFwb1aJ23KkbO5gK3dVFaZayuz%2BZdBHj5r9UMOLknqWB7dT%2Fbl3T9GcOQMS483n%2FOQnAly54PCXhjjbVeXuaCmUOg9vvExNABF5fA5jF9QwizmhzCPi%2FXEBjqkAcTpJ5O47ra0%2B1w%2BOO%2B819c0uvYNgt8%2BbMWkG32q%2FcuJArMN9ekRr9oWmSUx1i9s4nVWyVCAStpLc3O%2FdTov4ww49Ln4bny1hwY1To8k1QdjNm1zrjqu3CZboRIhcg9c3ps%2Fss3jRBuhIU4dPDAddYfEyKFBHrpbtMmMAcFLZ5xRamiIoakrStjk1dD91UUg74%2BieD2CXlNufvKfC6E%2FQFJtWjl5&X-Amz-Signature=a6c752925e81acb4c871f9b5484b327e5924746985240f5807439b1b58aa553c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
