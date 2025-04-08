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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKGGOIO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOy3DsbYUyiAo2ZFqLA7MKUd%2BQX675YbRrI5%2B85NCkDAiA0z5iSnKP%2B3t68aWhErTIspbDy9xAzEikFpv23xxXd2ir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMglWNNPEUsvFkGRWyKtwDEB10oLNLWq3ntga%2F9P9j8oiEx2%2FIfoEOX55YjIFx3gXhajgs9HvjOMnhD%2FbcJyZYi6L%2BF0aSRcPJcssmUlEr5Qj%2BmU2Td1606aec08A6c2koEsjgRmykZlIMcKdBrwzMXghDfOLFsZrub08Y3dBUXBVzEqycJoaTGLpBfDHpzC9nxSnS%2BewnTB%2FTe0BKbKLUYI0NU%2B3%2F%2FMme9FfOaH199w0cXCoIWVJUClOmbIrQBNn8VoS9uSwE%2BmRKBc15H%2Beh3l3vNqd%2BB%2BI%2F20LEhnivZn3zw%2B0ms4qOPjSGP9tKVEUYeZqeGClG5JIUT59kDqDDOppLZrqiW0mD5%2BfOjplMN9PdH%2Ba%2FMNiTRnzm3ylxvGekwc%2BjilhChVjYBXTjC%2BD1nY2aYEilnlTbO%2BOGBqr1%2F4lPQZQDpmNgDbdFhxjPLPUKe63U0kOXGb5xNODVCycLZLw1BzqyfE6QW3Q0BniRa7IEGe2dhJ%2B%2F%2BPnaP%2FkaWY9RVdp7arwpqpvLrXSLGRwWxPain7P%2BaGLSScS2udD9uZzY%2BIe4vQ%2FGT2hhqCT05vw55RkKxE04MAg2r%2FV8zIvJzxh1GcWc6XuzPTrKGX8g2I3Z39aDyLy7OcMzmaPkMqvhDWLH5mr196t65ZMwlu3SvwY6pgEcVAOT1rN%2FM9Sbzqndqw8UCN0NjHxowzLzBZh03vppKMd9ZLLyENfeo0htgBDamM6Us1jWWzxhR%2BrfkXeoBVh8OkmpF8XLgB8W6PwbHEnI4DOL6brFr0Bqp834jqHd12bogw%2FRF5VY4ZR8h7NX3u0AzJsR2Z0wPB%2BLKyRyOXGzQlbTnsZ3mv8S9r02pr2A8aAqWikg0gRz9iR2Ko4oh2W%2Begzgnzri&X-Amz-Signature=7ccd8b48d4f455007e28894124bcfc9958152c6695320b909602f01435f3d07f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRHEWHO5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrA1euZ9prepkusQQUpM2ChlWYwoSulVsBPD%2BPOOznoQIhAPvncqM%2B9RJn6TD3uNHC9B0pJFVAGgyIFAtRMgH7sW4AKv8DCG8QABoMNjM3NDIzMTgzODA1IgwDQ4ZTtBXL%2BLmqvlQq3AMoMcPYvyPeO7Him2cAZMjS61E%2BEXhtjpcjxTx6ZApMmaYUM%2BObrtyhiaVFxiNrExaXrOeFVorM1lSzuZu8qgo1WZ7dc%2B6Qu%2Baudxe9W8O4eLJWdcm8IUjWsG7byfO2eVvxADym8vGO24hGWNOV5QL0AXsfc%2FiITwv8GYoUEyPeRgiefM522HwFSh2VzpUcMZn3SJ0skUdMTvvkB8C0CPL8fFvVfakMJ4Ork9rv3QlD7LU0aejwptZ8BNLiie00zZ5Zagl77T8AxvNn%2FDI85Z%2FZa5guQtoQjeqIKFha3bIB0eSpFQcQEf8bg%2FmDLcyvQXCyIacXmIMcNqd4fibAjWepUVVlcmy8T3A4DCftFNSVykzxJCd%2BubI1XOiywhqkscb3mpFhm54OVGEVnSy4jJWuPxv%2BxZuSPHKJ%2BIfcPWrDyetlKbNEOtCHeyemOH8t%2F1rsHtyfPiUu6G3d40jD3G0sncL7OevQEiwebuALs73DUgBMStrqU23%2BFVIBsqsU3pudhaKg9%2BQLR9aEvd72NfDpxT84uC4N6JHflWtMrXUGX9m4X04bzp6yfg4nIGF68yOnk0wu54rIKYprsLVX4Oeo0ltGh%2BckCz83TdwG4ZV6FbYShGlD%2FbSM0t%2F%2F0TCh7dK%2FBjqkAZWPwzlJurZJXLvkrdKM3HIRkRct89iAHPq%2FGHgIQU3OhUotOm8PZ6LetQyUf%2FIDOXvv%2FU%2Ftyc9IyshamLiYeE8PG54GJR3BZ6gZmzqahM7wzopgXgCLQFFpusEw7fs%2BKg5wpkajB8rAcRVOuWmtkSVgWPZTTyJNnpQOXOLe6qEDmDhrtqiXgT%2FA6B2Jyt0oP3yRNgHVhHS6bjaQAumUOGW7ncCg&X-Amz-Signature=992ac42bd37acb76e655fffbb449f1b03dc7fcd1b58e22c9217a135e5e09f27c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
