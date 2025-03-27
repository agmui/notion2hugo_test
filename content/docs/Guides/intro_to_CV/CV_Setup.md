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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOR2RSOJ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXhIb58pL44kuPLt46E8m5bhRiGjLhSOfv%2Fh5i7Fk3mAiEAw8tY%2FZPnGoBjLuqeZQTI4a9WqkSL5jvbkRDfI1pDDXgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEJqxWiGL6icAtq0ryrcA7NTE2MPnhHfm7UsMmlogiKED%2Fs4ujx8TSIWvYv93XefhSpKxVSpDKMUiWLUuyRZgNMO4eFxguNBd5lduEaXejX%2F4WwIAFkAA0qWkhENyY7ql2u77B5jh3PRzUIHaOHihzNnHCsujEyJCLTplf12wygEf6735j50FgA2jvJmrtZc90z7krZ%2BodIvIUFuIlamK10hIBKYosVnRED9D1zMlrYwgTUw3cFLMFz9QpQm9xoRGGCxawQ%2FXiaPXT1vgCWyfdfJxXMuvO4gvfkjxpMn8Qb2FDToc8Rm90Kyt3kYYZiiOGinmNJ%2B7HnBOpvdGM9lNF65%2F%2BlICju%2FnGXL7jTwq%2B41yHTmegbwkg0hntjIKZHyjXYM6RvW9Uq3mD9BdSHnRSKhv6Kcgb4o9bjtwjliqQWW4x8BaVBdniWIzcliwTpk9gzf9QY1ROzbATPPfDO96i00fTF0lKNeQ%2FEabQbMI1FA%2BeclZhMncnMDKiEXWy16xsQoAj1fguxb1xNF1Z5%2Fti5gM8ZGWV2BTXfUptlhL%2BfirvqCoGuZlP6Bd0PsuQDUOWWwzkdT90kM0d%2BdN04PTVLzaJOUE1Vr0oMRNh7IC1HqcJYlcVbxOPzKMqMWpQ7HXFYLZsLHQZxQZKMOMMXMk78GOqUBBAyJJyxZngIjQkoALqXo8%2BkjufOZizNdIxZ8IGP7M1F0EsNi%2FETCYQzidNtq7ClvT4XsXOuzMyhWjmaVXIxzFdu27KNmDC0KkdlEPjDdsxL9rR4fs1zFcUiyLdRxuYqS2IbOXreoZ%2BIKTjj5Gt2iumlOKAik43X5Jkw4uIhrOx0l%2BW23Y6eGjARUKwZTp%2B5V7h15hSGkn9khe08jYLGThpELpnWJ&X-Amz-Signature=07ec47b217492873cc967c0337078e5791604922ec583d80ff2f4e779ed20fe5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676LW3ETI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY%2BK3i3XEOmLuObT9dKBoqIB%2BqrTQZNFvWaFLZ%2F4yWVQIhAKfHSjZtG%2BTCe7%2BEmMhD%2BGsPDxDRhB5wdA%2FlZlRGLu9vKv8DCD8QABoMNjM3NDIzMTgzODA1IgzhvEwWW88ZQwwaWBEq3ANyFPkcWhR9CG1PQx0asHPX0rMgBboR%2FhZUTgzFAWh%2FA%2Fu9asRcVEIcmU67B4dEMK02%2Feu0F8iFa3A%2BuHY6kwqvA1kGPJqH2IfZp3QuYBJj6yd8Azz70qsFEF%2FtYNtnvu775jdhwHP9KERAE40tixk0a1IHlUBwpWW9FR7SGuTaVikJrfsiqJ3tHCZrvlk2D5dMFValcyunCI8jUV7ed8Za6CoPsIU9wD4teNgXQepu64DQ64AG4HN2Mc9ojT8sArWP%2FDOtOGYMqXfuBj1t8pSx46Esp9KtWth%2BGBBZGjgHiqOExgMsil%2B9SKZuRN4z7PUA%2Bkts2kANG8qQHYZnrnfxzg4FBKIRGcCqWAgz2qgfsLlFL8nn4Fi2AnoLuujZ%2B8yooFzwa6kIJd8syK%2BGt9FbBNpOVrW%2BFB8sGQ7ta88iCQDH2QTdhe0%2BSPDBbD9hGL2p1bJ6VertBMtZ3XrsXC%2Fa6aekI%2Fk74k%2BtQsdUyN3S5HCbkaPWnN6JqMKYBlWX33ggqTuuMHmR54iZlmH2DU8owxq6rlo7SvfOPwYZUemHpdgQqOzvR6oS51RLOGRvG2agxgWL71Gz%2BrvtUWsPNkUFG2NktSAdUC1zuPoAJ%2BAQhFm%2BIFYHKl%2FWxOL6VTDDy5O%2FBjqkAaqv8rXExRXC9k6a8Byfj89zMSh%2BuVP6JZTYDLFQcwkLwKIUrVkLJAxNV8lDyYxpVlWu9fTvDiec4W0fJSiL88ZOMerU0wyzkRLGcUTWXqmvgGl%2F2%2BMb9Ac52HkTVDid6QrndV8%2B0LmOVhI46TFN%2FTjYSMWosmRkDkcdzLrwgf0lZwmelo2eFQ5Rii9XTlWKDUEzqwsAgPDOxovoErjAI1Iimj7I&X-Amz-Signature=8b95e6762631991114b80cfb6f636ff32b1db80863d80329d89cc31f2e8e124d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
