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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ4WUZ3I%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDw22l0yA8Ju8kTenErSelogBaw8tLWnuMRlxR4vosNGAIhAOdhccT%2FEEe8xz1mg4u06p%2F4%2BhYnWrr%2FDUzO%2Bk0fXtLaKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3FDgUrpuxbm9DcfAq3AORqRJFfDdr0IQ3y5pbOtVtQlTsZjFz84Gw1WT5AEq1JIIFzoZ0IhJ1iTfQRhMlhsOIL0Q2xArpT8qu7pZ0M5425Brq%2Bq%2FVj98huIkstGNgXcDiB%2B%2BUdJDj%2BLrs7sXF%2Bsj21giLuY6%2BJaOo57sbz7I8jghZ2xWinpS9nr5B5dtIi2ulCxiDKgUiXUVFwyGNQfBo5wsKuPJY3cj1sh%2FDSPSPVr9h8ZOC6cLDDO0gNp53tsi9GZ4cAPOzGnyjrnuqN4zM8DFpS4j3TOiU1p3e3iPWUW3hT2AExT2VNt1fA34py1HqqivXg5FTCL0BvjIWzrK92lrDi1PJe4RTILWan0WZv25Nn3VlmNzuqvhXKy5eGSsoaqD8OMpVVvBBpcgiXe2EYglJOERy3PHDLiOJOwhkQFNYMbJSipFc5pwBSStlFSEWBooVf6ULFd9%2Fg9tJvgjjFYZu%2Beg5NOlCcO%2BREMOANA%2BslFQhe2tLoHGEYoiWPBJYDppP6XOfPchVTzjx98tZ9hmwYRxjgar3ABSAAUf%2B0MngZUY51%2F%2BPS5jItYWzvZlNu3kX18VVx7eUayQt4a4CDmCyu6eoXWHJeLBo9VaZTIcAlCs6N2ZPMRfdi4TMi3HzpLP1fUmBk59P%2BjD%2Bp4vBBjqkAbE5HznBocnKxYkR1tqzgjWplbWX3iJ35WRyAgXRRJ81foQiloChR6H3aEvbXvJOxYl%2BP1VukPtsrC5KfL924FK1POH68Lc1IYQnvyX7Q2HcXGejIqaSqYZ6%2BSXs%2B4mjgjVhJzV3ubxqGObHFcstftPJMiE5TGL%2BNbSprpYsWq9M2eDf9PYMyQV62jNA7TNe2Iu2zV95ZwoKwItXtRlUIDWwrqPF&X-Amz-Signature=f1eb12fbf7c8874bfd5468a68fa6a7e60860044f072298fa6a0957bd452ae9b2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLC4P22M%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDYOMbNeMAqLSEJ4LSmEAgIiZMGHZmq5NHCkj44jvs0UAIgO%2FyYsMRMYnzHqO5VCxfH6begfV1N%2FESgnpFUx6HR8TQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD457tOfbZuCvWMgkSrcAzr8cPeLI7yZPgLWVfmTiTLB0PKvv8DDFycffADGaU8RxxuUDduxpXwtV6u0eltWML7CIED29uZHKzdO1n3Ixwk9rIR7mzH%2BSjwU45O7kLClUMtfl9GuepiFCOz1bJ2LKtdI2bGcHaqfra44W%2FgAKsSC7umJm48nT0Ax%2Blfu3HRKSOMBWnej4AK0LeTXJMmjh2vsszcP9F59SeiQHCeEYThbbnPvgoWwCr4rxLDlNEWX%2FXxToeoC0zpt5D%2FISXCXlwxU7c1i1jmp3B9vOyRTA86QBC54QBps12GTM2%2BvnKAMZTBFkH7oQ%2F790wecqIJ%2FUdDCXGQTG7AngyodYW%2B43%2FFW74h5qjbpn1zTudpuNMxtW0vhUmi6TPousdt5eDyKQXv5a%2B3wUUGMklR3UuA%2FdeRvIR%2F8Xhg3dqHAazKyE%2FGaaPbikgiLqGLCCOkRlYes5JNcG3QguG0NaZMzhY1wf%2FA6SztrUXYGfjoYE%2BgDyNYnHp3Mzmqd%2FmBXR%2ByD3GOweQxZ6ayuOf%2Fji48hEmY%2FsrQfa5NbfLYIsEQI3P%2FMRreOY%2FXlnRA753XtOUyR2G11sSiAI4osLBlS8pmB1W0Un3wMB%2FqmhtJ6Stxi59xISV1AVOnedCBQQP20XM5QMMWoi8EGOqUBCzH7TxoGDgnrM4IM3FdTVPqvCoG3U7Io6MsA0gvcBZJJgUAi4qeyRWNe6siiz%2FjYEIGKGAGqvYZquQu9WY27wkR%2FxSkT%2Fpycaxrw2fIMrjPYGpGk5Q%2FXdkLeOprU3%2FwBJO9NpXqPeQnP%2BPQdNrUoL0hzXn1rr7FaVqen%2BJxaTpQaLBqP5G2awr%2FUyGik3hYUjo20RQdeID1XKlF1B2lZNwGd9lbn&X-Amz-Signature=bfe4370b8b829773c64d3dc0b7986743edb2c0d32208742d6e132188191eebfd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
