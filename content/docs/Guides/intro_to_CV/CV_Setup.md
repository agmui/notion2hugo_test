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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDQXJC7I%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxaywRnigcz%2FeBRegwLIjv4tOV25I6jKmCxfamQCF03AiA0Yyo77exBYU85%2FugQYqf3eLkwk5VPEfsUd2at5NbrByqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17ZujZqE5a2hlmQTKtwDiJke93WkHyba6s4Fap0B1geX61t5jksuqPKbx5w9CPomq7MccfxrQ4OroLfRTC0K983UC%2FOMOcJ1tFe2SYBfBDKIT0RhdXhXXE8anOdVmU05nRT1NaFvJFSto36XbmQiMBLHzqF7vqTRigkkSDbOMPiXtRl0%2FLca%2FP2rsWoMdTaelG96b6a76J8GI00bOomS3hRyDrFeu3NVw1P7PHZ8JOzdls%2Fb027h%2FgQtcOVWGc1TdOZEIbEzHkWbpCndwJszV%2FQuqLKQsYM1Uct84WwkVFgi%2Bw4JZLKpRW5%2BpC72rQcmiZLEVhEKPaqxoHqnkUejWnjo4491Z9jccixln%2BrZvzEIQYSXgleXDRlxWNNDzwk6JPljcRVqcEJAzXbHlzuZOLsO1W01x%2F5AlwtrXJRKCUUEhx1vWD8GMsjijNvKBOo60jI7N5EldzZvhCdsXja48cLBEGEUWNFIxieRK4mC%2BJ%2FLH3D7vNiW5z7H4uniIOQvNTBl503wqVdQeEmQR3DZKDRDVcpIKn105ejaM3R7murK48jRUT6RuZN%2FaYdCdJfeD1IO28lQ38QUMEknVID4%2F5JuZ3C0pPIi6H47xgvIOJfbyIADOkk7vNXQzz2WShQwni88ZdzkE%2BcoUTww5czovAY6pgF97BnitUZfPrH6QWDUQ8WaYlXIjt3WNe40EC%2FVkjcS1bOPl7Lvt8VipBGZn5%2FYtbK3dr4oVL2%2Bc26nSzan0v%2B7CCHlt%2FjJBPAlg%2F%2F4fMozZ0GjmV7SpMe7oYs94mCasz4rj%2BGkr1hH2tAmiuVWR%2Byq6BVO1TBSk7Tsj4CyKr9spmDoYtifFQvRp%2FEJbgPX%2F0Q6553D6zQ6E0DWH5I6BorrBKd%2FYIou&X-Amz-Signature=fc2513ebe10d921e85f02858fa18f7ac2e35849786dc8108708ac31fed585ef6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYPO4ZH2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqlprfV%2B8Cv%2Bfp9MqRrlHEhUUT%2F%2FAMEwgZVABoFg9eJAiEA%2F%2Fs0O%2FGOOLCtDp7%2Btb%2F9Mmdrc7d00DlTJ%2BaCzu8tS1MqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeJO0bo8ROilzHPMSrcA5%2BvbE0SfV3ajKXpJF97fBiSc2L2VJFAclITQbqo%2BxlKtp5F4Ju%2BsoJ%2FgkhgPD6vkc7cBlAYP6Libv4aouMt97Y01kuaxoLplWDO3s9GQ55JnVqS27sYCMU13Hzm3H0q1iaPh72pRLWamcnK2s2fy9gImRJPXuAMfYjwK81q659XQTOinvMba%2Fbrpc1MBZLziO%2BvekUyTOYKDQLMNiD74popDhYnRFOn5n%2Fr9EFoipINhvRo9sA4sH1RLk6QS8gPslLzaSm6mOQKQbC%2FMduzMfYg9hfMdCfg%2Bj51U3xuXBCqtZpkdsfcUQH57xEnKWMyHikEFisOlTH%2B9P96VO8Mi99CKDn8aZyygM3S6%2BI2oh%2BoUDjSiCMQX1Gw81p18XgWj%2FsV5oTj0lyOGq3iPyEwmGduNE37xhJZNrzM%2BXSO4HdWBP25tb2Hnf80s%2FMdisimwhQqclGysOizMXBLX%2BPTMZ5p3jgS5FeAVCGTbOPBeJRsNXxpEo0EgUBB9arhreQzZhWYff3M%2FnkI5cuBHucpCqhpzseqODplKwzbbYBHbY4VvtwhA%2BLIN4UpaNSYiOqr7ksgt38xpax93lWLQX17URyWIE0q0LnG9Fp6dH2LeQtKxTEwZ3Omu7Mrf3ZNMPPM6LwGOqUBrGyzi7D1KdAiLXAYCWwI0qLZVSrVtBoUfUJZ%2B8ab3Nb7MZEXP6RRpVSOPIjMMwt2eSj%2F4E%2BcH6%2BFMLgWo0yDnjvg4RJjrBVnmyHMAnxo%2Bymu%2FVLUI%2FXV56rZLc%2F%2B5%2Faqj1XQDBMHBhRNGvVhHHmJDIzY0bEMMR28d7HnAwombCO46N6ZPdVLMcaGYVKi5ter0vl%2FWxPoSLERCmJZUwP3wsJxsXwt&X-Amz-Signature=539e40972b4e406b3bfac896c1319765b0cc848ba7be3fad6f1cad237f238ada&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
