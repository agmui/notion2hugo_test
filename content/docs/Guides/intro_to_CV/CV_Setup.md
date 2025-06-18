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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLTSYWCM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXZi3LEYYFEdxayL0pQmp4R8U%2BaQc%2BQvOnVejx05%2FfWgIgPBHgKe6OvbjvW4VOjTD7XyXuO%2Fw37sqWszBgecYbOSYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDObmZVAxhPEMKnvCrcAwSL8bBWEhc3df5c%2BrMtyECmsyaDmp15YXmWbEUlEelvt5M80yJbR99%2F1jqjJsatlj2fMjV8lEqA8VXMkwDExzpneNda1z9qNd9e3TRshHutddQLwEQxR9bEmpU7MPHSDcSjCR9yhS4JyYfJYfSK8LQp74HuunxnUGePjnU1TFdcz5VQiziiedP8L9aT%2BqdDQKjXmm%2BfbMzpACOwGytRrgLHMFo3PpdwQ%2BKciCrJASbvYLu6rILSLZAxa7eAEo4X%2FjcIz0idS4aj9JrKh%2B52r7BlK8lwb9jDpkOTJ%2Bgj5nvRo%2B7PopQbOFsCv%2FEjM%2FC2RDHu51%2FNLifA5hpXA0cJIKbXgY8lDZSIhntRrwYbVCed2XOCE3fyg109RhNswdRMOMiYNv2e11heioz%2FKfxfycvKeuc2DF5dvCZJJ62cldkYKPLZlz8hjjZdnXDsJPR4B4gP2uQCOjC8cLNanuHlx1v73EtiItP3mENu3hzNCNVOMOw7nQe9uCmbahvLnmUyr9%2BPoteD7FwXUSOiR6aW8h8zAV00V%2B1VMseQM%2F6T%2BG8Nof6Kp75H4X0AMzpMNvzhwTtU9Jn6muoglLz%2BTS0EWZfzRGiUJvWdGEY1F540OK8canKpvbScEdwrCyUDMKT7y8IGOqUBZ3SqMwUzRNsKOOwttybXzzjjSib1sWTYAJz%2BQ0ELlXoq5G600thTyR3qYIlmeUQdd0VGySVucNSOa%2F7n1idUFKV8OBlZ67CsoEmWnx1jqha4m5XZ4Uy9EXSUa6IQPEcdYtZimg2AF6k4gk3uJI68hEJgQOL4wCM1Z%2F32y7RQDvcv1pJVDB2Yr1YxzylMNjPKVPpC%2BgpHNQLw7KeseHXLwXGi0Ggz&X-Amz-Signature=829a039f88410f59eb00bc9a950573e17b80523ffe6ac7bd7fb2416586ac081e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X25TWQAQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7hSxK%2B8HSdkeCrztidkzZGTjl82idyZymRIhUJu1ARAiAhVMxfS6P8WqvdtNdwD%2BjngQHEIxqPuTZ8WgIUS6jOcyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVJpnNjpP%2BTqS29obKtwD7rE5VirsUhD9vFJJYTodzBm6lNaRdpxsICvuTrKjk3RpjepNWY9NIwWZ9WfDDRDwPJcOazy1WL9UlURGp6b7CwPA6Y61ZWb2uYkvCmCRHgjmsS4VhvU2AHQapUP4Zw%2B59ertd7%2BVmVb9G22e6t%2BfJKzR7Z%2FdeOG0jhqbu2RTQ%2BH%2FlZU34jimK1rTa2Wd8PizLKscdMhTlBDS8BeeKCqf1FRBRWk2o46x7E5Yvc7cuo2wlBt6lsC2pZ2oywcCqJ7EPfpXMjgPY1bRlYlrEevw5eQa2B9biYOlZW2FTPHyV9LmzpitKdoWiTpDvQtDTAtlH4GFaAtTez4VkcbJjcg31heiNsCBa%2BcFBOtdiUC3X1siZa7SpJHWH%2BRBjGj53q8Nm6Flnxd9JhMLyLnynhNL1jyxL681nwDGUaRsIhDwNlHOslBi2f5bXpzQwoVfl%2FvkfFjFEDCfuDrNc4na7TomhH7cEOi6k2IhE8x%2FAfE1lI3weSJjK5ocn0Vkfw32Qf0yKMP4VhryCWOF6xYf1YeRE5XLiJxUFVasW4WY774bOE5rCnlyzk9zAn%2FF8xW6cknFFEdPwyEbb9TVRNtocRED6sXcBpXYRZs8s12jPSV57Bg403PbNWf%2Bb019eHowyoPMwgY6pgElQK8a3AmhOO5I%2BkVECbxx1fwMrkXSKGj4QpyLUHPLtUQeLiGTgInNCbQQKwfAOusdbWoiQlgaCgZF35mDE34rIGirUZzg%2FxD1g7OZRfwMLs5ZNl4KvXmIdlRXFg3L1SSWFgtikigfxZOKSQ3Va5%2BzxUHWgDDusF8odoofi%2BsGCGv8mgpsQaLYJG0mMUgPDlK7j%2FVYfCon0WV5%2FL1VfVeX%2FG15ut9d&X-Amz-Signature=dc11b62bf66859b833f090d78776a13da89c3f693b46f09176345a30f27ba621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
