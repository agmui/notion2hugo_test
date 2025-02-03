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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXMHZ3P%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCS8Yv%2FbS6%2BVlUMvrO8vm0g2ehLTiqa2wJm6aBBvvY9AiEAoEIs4Zbods2bwd9RPvpg3btEiCPJp93MeEhU8iHeZPkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDECoHqICbwP1CGlqdCrcA0wO2HtbYM6uXKl4s7AphiN%2F6RPqWH8%2FVMeVNuzuuB5uYkFwYwMvVBZx8KlzgWoKNMVmXQ8sHwQg%2BjAsK2OLGj8q3t2w%2FiMpcddxGsXzZXhUy1HjhLPuan7VUh%2BuO%2BEV5%2Bfh%2FU0WH189G0XYWDmT%2FSUUMeqRf1budoHNzsTGJvga7qkmOexnauX7P1XZvWzTl8dsDz41jm2dsU4Ty5V8evmbaZQ1Thg%2BmkxfHDj3ujeul1yEQwQcmjut0kahYZcIgjztW9OlVY81ffWrgqDue6mogiIe8hEWqlDe9NbAEBHrWxg9vAFgws3V21LUYAvs0j6e91xv%2Fiq93IXb%2Fkeey1UcG5PyNYz%2BdOJiOI5lFRxRd6c7sIshCgPAcb7%2FSkoMC%2FJzUVkPY6CHVbpBX%2BH7T3zysbDqTLEyBZlxd1h2GZvlb0qOcBdxmdiZ7MlSItN2QCIE21gmYSDzkwJxzRXV2SxLovlqACbaOt0rBvrLsx2%2BL328cUKDVnkYfAq%2FPdYbZPLoF%2BKvJbsPxpk9CXfoOCb3LU5cMuSsSrKOwv3ZHuPCgliMAkX2ZRmrobbR9O9fjwFXvUjz71b%2F9DFx5HGT0uEDpa1pE%2F4mD%2F82RDZd1Je%2Bo3bzIRHFXFfQmFGZMLP1gb0GOqUBNh2cy5FkdCVv9zobQwFmOPIgobvdy4EkyJKLiiLnMrb1f45Kv%2FasRv39FY50TtjtnzjCp1%2FMKxKr3nWRZ8srIq3IXSWcEnE4%2F3PtTKJ%2B9GGzyONxsQb53p5%2FvLvUbrMOp6iPYz3FQpzngJXvoyFO3f5%2BbOU8m%2FjUERPDWtSemwEWTfpOCJOyOCoIt%2BTSFAcvkpyk5qKN6RdPOohsdOGfk5ObyWga&X-Amz-Signature=63b9078b09cac0269dfad034db6da18c80ba82252b86121caa2482f167236554&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JK2RQ3G%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BXl1EaBWzv5tpYpS9CCN4mSDpUV192cgr8mDrtetGHAiEAj0YOtAxO1gX8YW4Rjd8mTZj8osAMETLVC4uY8IVYx2Uq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBjRPxw%2F2RSaFA10xCrcA%2FmgVf9r72vXU%2BtbvsdvjquTQRLM8ElbQSkNpKR4KjAwibTTJspz0iELHIwgh2nNAjeNfS47j76UyZDKAJ63JPIKF3krazVffA6cjB%2F4CvufHmp0s491rN0kdCD8hY%2BwtYFNCR8jPrp2zT19eogcP4Csjwb%2BKF3QYTa8R2ovR52lDD06hPaob%2BWtvP5dScPMBSKMyfMmgPrDMrOq%2FuRYyu6X3vhJJ%2FTTpZCGq%2BJ00Y2g6OSWTlXv1L%2BsbX4ppz04gFi%2BswTZkaRz%2BF%2FsTrEeIk4zbzyLx6Nb7YkhskrLvbbNVDVPI6HGL8Xv53jhUAwYbE%2BTalB2IdMvnnylt7P6UbelemyxyctT4RXZN3BfQiv3YE1cN1fIsVm0xfi0pU4mGjUp7x54Y5dP0Yla90HjzGVfnOkuRB4Z67NfQoYrT7XqhagGXQNf2HlGR7uqIsu%2BZm1yNkmt6U9e3QSRHsm7Cju%2FnYXBJotkE7UQeVYE5hGvWEKBymXsfKgQXMMbNTSOClJt9HTDvlV7kXT2ZKGLQZvF6AnmAmEIaSxY79DRutiViypdev2ssI0jELfNjxIOT8nEXcFIyzoIeRW5gvjjxqmFg2yBqOL%2FfkqnU1tyAtKxD4%2BYt1xNrQ82p6piMMD0gb0GOqUB9TbvnoANTgBPCZF6TURxtQKlQTAYbfQmCdMFpwtMf3vs%2BkY%2Fp82X1OS0d6o1NZksGuDdUT55F3GT8iJTBnmy1GqoKEL7Z%2F12pOlva1YiwRjwr4o9yQHq0OZLxkJQE2ZbuUtrIvvUOfD8PODVhwg0RfzuSGvozszh45utPe6TBRrPTfCqLQAtav1UBKEdLLSWBMjeA30qNzSyXryGAP%2FgCSmfxeHF&X-Amz-Signature=32534767f8dcbb6d7d662d36d9fbd074a71e86e25f47c9b2d087b535beb79917&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
