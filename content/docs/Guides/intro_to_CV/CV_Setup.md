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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT4XEZZG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDj54An4mFb7qDsx3W9Ul1KuUdqzziC4%2FuDu1wt8kjLIAIhAJN2qFL8Og%2F1DqRT35VmQ7UgDf41WO0AIEnT8hy6BkWTKv8DCD8QABoMNjM3NDIzMTgzODA1Igwi%2FIZBb5gDnrAXTyQq3ANiKz6RpJS2ATI%2FZ351XvnJGVK%2BeirTKxNHmqWsBZjVI%2BHQ39UodewFYuDctDdJ7PGznPtOxrdHaJ5oPQd1wyPzeNgqydL0SQCpF0Gx2R1YMeiPgz3gXEs3udlRjKplbQXiPs%2Bhwu6Nw7jXz7uKIQVDIPVNu2SA88Onf1m12xZylxO06Hg9Lna6iqanu2PMNIQptrpUaOUv5JPAmIyNYivDfrVg4eYLXw0Utfvsx%2BfKlUlNoEGRIOs7iOv1XCrUQqEmdMr8egVn0gSSGcANlAKuxByQlpJxMExFIP4NiFEQPF0lkn6ELFpCqUb2S5mLCRXBYGSKUgzCBLU4Tbp8XW1ZFFEHjHc8VR2c2OnX3ZMQgLU3sKgJ9ffV3baTyMwAd1HK%2FNXN%2B4N2UpZR6P%2BHjDh1TV8JIhNRj2RvyY8XGCDXIE%2FgMlGzyNpU35vIzygzzuAoip9gwpAiwzptRA%2F0n7F74lixLw8mXQpzEq8XRrMyDg8NkI0eB0M5u8XP6X4sKOhGthv3UOdprOINsCh8zBcxGfMYhYpOm9D2XYTrlKjSHtddmZZixF8GXTw02j8MHgODhYUYX6dAiaj7KBaJv109%2BJAwMepKGrpHLRWtnLGoK5wFLXZ6rgQ6lMVU0zD1rPW9BjqkAccsrN02iBe2yeiL23wrTM%2Bt9sKHjyDr0UxsduEj7EW4DU3Q%2Bv%2FjRnkJQ9r3%2FArx9%2B9r%2Fjl7%2FGsx13FCjFRpcSijQqOcrmfXa7iLCRvDEvmlh%2FE7rOQ6dQy%2Bhl5UWZVo2nDtJR5km7deYDY6KNrlaHJgi6x4DUFOhESSySnDkQVHyI7ai41dbykAIiQUcYfUtd%2Fivpu6x2ezzNlUP7nZtAGwOwmG&X-Amz-Signature=f57b84ae269a0b946afa2949dbbffd81cd8318f291d9ac40133dd40fafb1fe63&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPW7AWF4%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBD3UP9j6EvXImCptXJutK%2Fe3f5XtqbmCiZw1yN1kj7UAiB4qYOz80wROCAt%2FBHzOkQIAcbdSo7Eacxqj72dxFXBiir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbFwHMdHtnHVtIja6KtwD6LPGXiqICCISldOza74%2B%2BF%2FXI98CRgjimQ7wIiuQ0%2FN%2F5vUC8Fe%2FTL5PhkjDUVquYMTs7FhL8efR6pvVVQ95Rrf8xhylZ%2Bq9DiiKg%2FClPRK7MzTLZFsEYO1G8cHuDngxB87S5mC1LolUPIWwNeciyH6DZTwMYrb7rUtcZ4IC0uxbbnX5IHvsA4fNGU2%2BHSLbLoBYRiHsG6l5vO46zgCM92Erdq%2F0h3r5eOZqSdefksPnZujAaAXORNr2WLeW7hIlenX2S0R28g8mQBa9lJK3JjZEis3RGY0vxaBqy0%2Bv3FgxkCTMVbRZgpdD5ZBUqHZrPLUukldH%2BX9P4x40fG14B2gcknjAb7qDWYDpYk8gWTaTMwoaY6B8hvfA8M2zAUvhQzRLzefxrYkErVWsbAJWDtxK2P9psf7%2FwIQVnBGbb5niWi4Osw6XdasMoLfe%2B%2Br3xDKilVMzBVr%2BrgBmrEkB7Al0Nep2SaNuQ6Y%2BZ3hewPZOIgAmZoHExuK6ZIY5TTEGsCAO0TRtdd%2FxLUu5ktq%2FLIce1HbgHg97wjoQ%2BrXm6U7NdNAPLIm%2Fxz62GCo3R%2FLcowfh7mHinVnIJ5bEpRiWedRtJPm%2BjelHJ0yFVQHegFapUv9ReKnFHr0B9WAwh631vQY6pgG%2F461534v9d6V0KjkeFYIp17Is09cWem05EahiO%2FFGdVJumM6RnEOs0BO2YnWgbUlT6e1pqOXQQ4wkqHM7ZWNOnQ2n163TPVZ%2FV3GJR07jA%2BAd1y1ZeIKEiTaGsLV%2BS7QkZprSNu4XXsg6F2WLnybhfeKEu3XJwzvGeLajh%2BbqGQXxlfodxMo0VeJijVAiWiwoowttH1ZXLhBIgCls0hOv422OBt9k&X-Amz-Signature=6c38badff14e78387f00901a612266fe17df345cf9d24a3802880a61a72fd7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
