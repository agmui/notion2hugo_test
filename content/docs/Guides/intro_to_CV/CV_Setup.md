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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236KE6KZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9A9Oj%2BUEbrbb0Y08JXy5MGHfDcJMJ5ur2f8eHKgdwXAiEAi7rUnjpOFxT6YOskvfL8wL4lrGgtjW32V0usSlTfte8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDA1jTQJni62xAav9IircA1Ug8IzZ%2FONupdeeQLCxVJ7GmNRFfgIx0HFd4jg30GrjRvlJ6xW4tjCPLWyG9vOVhr%2BX2Vc59myP01kZUgXHHQNH1%2B0LTMRR%2Fluk%2F4s1xoTV5St07OFEUh2M0LIFxUkwe8XnJE38U2X491JAzFIDkVwOowAMeDsCswAbFyVoQqtgKVv%2F94PhWmDFW4bsuwo9kkt%2BDRGNhMG8bi62X%2FmoWsdE317WKzhj%2FyUVq67m7vI5ADVAZ8mIrSFvFyrt9UO5cHfBnc10QaH1h9jVq0PCEenvLqjDaODGHIFuk6bM4RjXAj%2FRkiDJbtq95QO4u%2BpqTKhZecnlnHvyxN46LuO4ZxipvU%2BzqX%2Fr2eKWIJ8CLcBkpC6pujWtnWR1dqUGS1B3o7cld3vr2z47P3RDJNF5nr25Hy2%2BlEZ1dzFNTg9QbX1YsNfhkvgA938VpgsrCoB8BqTJceh6b8j7Dr88isaG3LNmIodVeBJ32RoS1DhonFmlK2tOEgi5tks2nZLMNYczd7EAS6LydlKDsTEjYniVCe%2BuaRR2S8pIJK1JCV%2F3eatDAiKAozYzQIqS%2Fu4ByzwdnIxUfwt2lKetGuyw%2F9JHODMCxANxKJoZFufAcVAX%2FJP%2F9cWhdoO6%2BZexO2NVMIz%2F5MAGOqUBhVYdE%2B305DeX5peUuR2rxUS%2FQgPATzNydyvn%2BHFiUvbuvGciAg7XYRfsrbQfo%2FnRVf%2BJx6QiMymRUyVoOeOi8sxe%2BkcuO74c4mwRbcieoq7Vq2X0T%2BKdaxhVyG6UuaRFT75nX6pyIwXeFtoxDUtwQmskKomIfMKbJ1jyrMUQyCJJgyW2wP8Ook4YbTE5IMOE7HI55xy85JTzt08KeyuKnXe%2Fty47&X-Amz-Signature=dd5fc353d791f95c522cc40d085106758a2c9b4dd19ae23662129e3740f0c41f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ZCCBQZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfjWBmI0D2oGK0hxt9HFxiKrAEb2%2FSvqvxFlg73%2BzvPgIgARBU%2ByEapHZM4yxzR3XqlPyU6EO2KfWI7uuYg4OSxssq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJAAWXacX9QN%2BWQorCrcA7tSHfmHVVSnfOboB7QdDnJph13%2BLQNigSu6CPQTExMHmCcOyIJJ7SO%2BFiE%2Bi8%2BoierAloxheFKBDwUK5h2eMuByjldRv57CZDJpmPN7fVacgOqabzTysTrluAdGh5SmgGkOhD3jCfEPDeOfl2KrEajOlKn9ercnlXRlIYmymzXxXeAujr7k%2FePcTQ2rCocYYHFSZiZyTJJhjeTIKoaY7RBPRod8miB7IDU2d5aVYoNRrG2wMPqUk3vVfjOPFn77u2ahm4nnVvMJOOs2vuAU68oUhnOsaOm%2Bcbh%2BLbaSQeHwbH5WGiUHY1RwwpH7ADY39bjXEYA%2FP%2BwIe%2F7yLWl7tKU9N1THeoPzXfLsd8BE3514o5%2FBp3kbw657xI2Q7ey%2B%2BWGX%2BcUW%2BG%2FhG3syL55e4VqSYwFE9iXaQkBx3Epkqh9XS4HqbjxLhUQjNv0aAGV%2BP7HDycH4PNRp1uorpTbFSAPmUgD%2FpG7%2FOXbvh2Y288jMXyUM9mNeJPtEnL%2FcYOXZVLzq2JRG9OiFPNoL6hFJuxKnmT5sUNL4lXHz4OnpVqtT60WwDdPVfSb82uDal6zUdr%2FGSd6l2Y1s1aCyiU5e6pT2rX8eh3Kl02Lf2yB2BUk9aKrOelDoHohVobq9MOz%2B5MAGOqUBpA3aCKOceT2KbTl5TpusjNXLxvdDF%2BieA9mE%2B8FxnZVCTEC3RfdnKds48en22M0DiNHLk7G8tRDvRh7dHM21uARy1oLBZRPpqwDQglogTTA4WyXiY%2BOsPStigAPenzS7HgXjokzSPPa20Tcnrg%2F8MiLYl9JSIgdt%2BEPXuI2BdibstdTWNiZGEFgBTfgYjWLhdwm8jEkWRCLwvrm3rdgCwgQl6Do%2B&X-Amz-Signature=75b3229a1c63520c393fe423130a50666a902a39fb3aa6b418163e4325be298e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
