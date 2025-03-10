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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W73RTUI4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDMBBFLVcRdYTZjJ1TCQouaeLyZ19QlRnqhrjHOPNQbdgIgPs0IeA58mYNi1Ax0qeecGTB08FD0KyAF6yi9cA61l1oqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHktrxTdUuN1DWCvUSrcA0jihNJirSCXrMmtj1PQBdu9z2jjiMCMGh8ZixKoBRTPot225yfISBifpNAh0y8RQNHW2mz%2BjjHXLxkI%2FSUZ%2B2B9VQc2FdN2lB2PzMUv0jP3ym1gqJUmaYEslM%2FhbEEoWPu8rBBicu0vHJzlyfByqmYDI%2FfTz9vrfq793giHzG8Dj17VK%2BgFKJOwXw9SvE3xX6oKGLuPCFZJxwl3SvzIHmJPrEKqZgoE7QH8X7KSRsFAsglefYmgv0KHiC3LOuORSnYE9%2FGadJJJXjk9Y7Gw%2FX0FM44P7coe785iqCUNOQnFkJq9uMecJ7CGx9cIQYs%2Bet4Fst2jpkoH2UWGf2qFBMMqI5XIr1vXvKKvob8gWYqOFajkaBHaVSwjuPAUFXECxhhkCUshPAZxFKxj%2Bgd1aioK%2BscubrsuzKFObstbNCCBvrgbli4Ni6dlE79AJZh81KHmMNdyNI3RDPUBMbdCcUBDSA7cqqvIZIzzqht1yzhwS8%2B%2F2jUGY8x7smta12wsRujGmwcaz74%2FvigCqpMjs8ZKo4ziRofuTtbQs6CjY%2B9FFGg4M2lMvJSIhBRmmGcYN2Gf09wJdg33g9rR8CKhcOGAcLhetpP8%2Be%2Bhv5apUSIJvBPEx8FU%2BS5QkwrUMPn5uL4GOqUBg1nn4G8%2B%2F5T6jRSfLofuwOuaGUY%2FVSGf62rOFM%2FJYHJCoPzNfjleazf5yiPTkwSn8jIopvFcY5pQk%2BeMn13pKhkHarHEhRucnUPqTptMe8%2F8nzGPpZtoGYNkQx1%2FP7AVu1AfUR%2FBqV6kI29YshsUOclB%2BR6mRwvtwuOj5HyS03%2FnwJEtsqtOQHwLEg8qmTxPcdTbr1WqXp4UqfsHzh4HfxVgdq46&X-Amz-Signature=7447eeabb0bc61e358c0a00e1baf31ca2067b7154fcd6bccac989285698d4a98&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINJIFYQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDnfpR2CbbnGlh5O4%2F6qsSfZz87HDgvvJG%2BU37tsbaqKwIgOM7usENvEB6hgHqkGp2V%2BRfR3guOvOHpdnOAYSLj40IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvweAraVRiuUpuM9SrcA8%2BAPHTiwVYQ9ZJ6OgXZxvCOshv3DbxspLwGkPIGsAUhZt8zAQ1HpO29xqnqICZI18Vloe1EEOPh5JuqZ0JaDHbT3Z%2Bg0icUv5UWIxPYRFLztvgQ84o%2FBflSVoQ2EdF0E3m%2B2M4VWulCKoFzho7FKxg0U%2Bu%2FpolpqPda6iYheV0WtgwJX8pOCiies2ZDkInkkT3GEqZ8U1Kk16vt7a8u5FLx%2B%2BnlkjM2cuaNLfmzaJlxHMMjqIWLdJGm38cjBO9%2Bz2Sg9atlOpTGB4M2nS0Nt8TWdwQRCMuI3VCLo%2Fk9gTu%2BuKbsICI%2F7%2B1%2FC119mh3YBUCAjQ%2Fq4iBA35CQXqHYmSlW784SldMCcXHhe%2FBzyXkVoiZq5qPbukz3xZRk2RM5XgluWpGauBhHX251CQnGSBnR4wDX%2FY3i%2BxpCM6VvB4UOSG%2Bx3xFnWQB%2FoHwyaA7qQsLO61FCkclErIwazonXU9ADVKGgixZbi5rWAyaHsD%2BS780WStqAhXh2JTdTaPRgKHaVxlShDOawCZNSpUg6mCXKlvI1fGOvhEQY1sAQKNz6kyKBZ9JN28SlfWmaF5u1Rut6uNcqlih6GfUGPdvCKkU%2F5oDEAQfLCh6VEy2rH2AfcuRuaubbQCfxbMOBMI76uL4GOqUBJW3pcXzR3mbX1y%2Fz6rcc%2FMN2V%2FTtR5h9SUMZZfIlG4AwxAXdC9wtE%2B0FjiKf%2Fn3wY%2FMqgWIPZAQV0Zf9pvLsOBlgOpdECDlhcDBh%2B8k5fKdfsjAJIERrGYfFTmNeGSLS40wuse4LcN8bSU3DvJsLmNhxmu9vgo%2FbxBwdoxMiOoqGe1rQkFojholg87CVOQg7aol0MILw%2FMcWyIisjVz%2BAAtZjTS4&X-Amz-Signature=5252b9083b4238ac8d17d64e4b0c3f6c45e48787c95cfde9d143cc1a7bda1c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
