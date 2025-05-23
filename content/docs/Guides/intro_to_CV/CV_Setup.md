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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F2OWZ2R%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIA8IvTPTye8lEplbSN51nqLF8jNggiuYjheaWVCdh%2FPFAiA%2BE0mdivM%2BKtExK64BySezX%2FZpygNTLY5c0IGMI%2BQTrSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5W9dml%2FcaLV9G8CpKtwDKrPSkk57oB%2FzC83Ft2guCkPSJuElxTgm09ceJWRHNtigDPbtAwAryhqStL1zXG%2BDCuFz8gWGoQIMTArz0zTrmbrW0hSfqf%2FaYDo7SaxRzPAWsFjZl1xpBe8ocQ3QY7VipJXI53xxWUkYXsGtcKeNL8sSmKrLHL6DrJFH1n3SkRtUDXCDTY1AwCGS0%2FRO4hkDMIdPepSL397gr%2BBTs18oW7O%2Bh4%2Bn4E8zOs8TwZL1RBZUx%2BiBf4SCEWdXeYfK6lmGhNcudv%2BPEnJmF6YeIFqAEWuelfnkFdljh3%2FeLUu6XMWPdU5CXBl7C4puQqct6pgFoKGM3E5Hs7e2GzRUmMSU%2FUsmguKc34noVvl8yQRHof28uxY7PjmDh5kh5jKi%2F2ZKfsL73SnJV2ll0BNHufkxbDh6BAeJzY9xIW6gynLgNrKB1eW7Nv9iPPfuVttvIEg%2FQYHIai8Bmrm9ysUQDaL4lqRCSVYJPYmF16eEvExprNzrRjNmjfYKs3ugJsSxekAiEPU8QAKwgKBzP4i8x2JHubFI7coTpt9eAhs%2FAmnbyTF6uhmMC%2BUIrJ0z4JVQKWtf4hXoteP2BvetjgI1XTSKSABueo3Gzd7%2FwfqEDmt2D8sz8hnaKylYzlufhWowsMq%2BwQY6pgGv2n3CAHtSpWqav1zuHw%2BdIyPZ1Wu8rl2Pjks3vQ9xiqJQc0cxa4diuGKMVxHYTZecTXwwhoc6WiprVU5MTctxkekl4yZKBikEHXxXtqA2e6sPd46Dxd%2FljjHHqw%2FdZztjku35HZT4tZnb7V8kwlpEI3oKtzA8bMyEc3fwz9z6J6AxxT8gslIy0f1iyptbSp0iQAtsI0%2B4YZI58uusdtOzXgS1Img0&X-Amz-Signature=2231f65f4d142a02fc139005884a5a3f070b062492bbdd1b43e0d51a30d301ba&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIFK6DH%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC7t1fc67mQjmYHUMqq71RJVdMFerYg8nA1P08vj%2BNyiQIhAPlJjjz%2BrRGNtZMubq0ToBP3ltqB0mC3iLcZOqLOUY1sKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs6XTB9KxPMs2O8ywq3AMdrIhcmhED2UrcUIPkYPUscaL8d%2FiKuY7F%2FUgmOTmL6zFt2OqtPJRqZ6Ret36cvsF1HAONLUHLzAn1bWbmBf%2FiaxtU1U4SUNv1MjKIwLeyjHJ1uZ2C3wl7vB0rI4KXb8uXqQjy4xxNreidNYBcHrIBRL42SOQwLoZTc65z7s1o1sGamO7MRMOvKXlVwyUCYsGnyLlvXYgDQ1dZUVw4WzDLJCFlPcGjTbdUNQyUW8nzCBtfn%2B0oSGJd6uoTp5UvxomcTcXbJbWJhYVsoPUN9z2UaJ5GhwKpAukUWcAPbRw24W%2Fi3%2FTbFDSGix%2BA2VW4RVYeM0jIVUwpvwSVOHl78ph5wcmXk6L4ZBDnpXvF3%2Bv5bQobu%2BTV29pOAPxSLrFNIb6SWYAwzj2VG0D8LZLQRMMi9h5lHE4flVu8ox3WDTiqQCEfskL39amWKgKAwAfw3azIptf6yj%2FlA9WyNJI8xNXOJYmwhNOgnePauKts0c8v7YciV7imDXqywXrTFe47WmYOtfNT1jFePdZTW6GsNuDmLIpZcgOE4uGtv3kgiclAnzvUx2pPyHdd3ZWUT31FOQfUKvEJvAjHF786UZ5IeZdgoawfhP1fQs%2B9KsIYVRWeoMJfW9OvJzPmEqgLCTDMyb7BBjqkAZZjGf9MY%2BvzhJCwL5CnyNGJDPJSpcHqdsRUub6eCYev%2FTetwjdKT6Zco35ddMfUQqw38WOWuxC48pADnUyp3RxbwHnzbQb1oywQfHUB1CvAF5Ns0r9hicvfn034NvoCuswu9IBorenJPOTfh3i6Fwo3VTzsCOz3XemH6JVrZYZ%2Bc4X7hUgdG01Dx%2BUjuSwlv%2BygkR3CirLg1BATLpusyfyq9kTb&X-Amz-Signature=967d4c968b4e019f7824bacf312d473409abb49f6048ff6add92e03eb2714bf7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
