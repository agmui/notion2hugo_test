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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647CTG3GM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0CxebkyC1C%2B%2FlN6ftjH%2BBsuKrWetbz6bGn04QxU3ZJwIhAKXqhzmprYiHyIY%2FES5Zp9VYLHUs9UnYEv1Aaz0fYILGKv8DCBkQABoMNjM3NDIzMTgzODA1Igw%2BYu82FPELMBHAlzkq3AOrLW%2BwY8gnoh3T19v%2FPGTrCzhEOzuzNfon79TUhVL6tB%2BjgdKazX80Mu5kE9pF%2FxQwc28aJokzaniKSgIKm%2BgzgS08HOpGKXj3D6mWDEx5tWbzDyIAIJb%2BxOmkEU2tP13WC3UEzYzvJC7P5qCEvQkN9vp1VITCOy5xT%2BjJ6jI6CF2w9xkWnAGGS9wZ6STcGHLu6vbzwUjAT5JHEgIufezmUf5Bwdi4hSVUzaWII3hPqbplVfCCe25J%2FJYu%2BcfW1IIedW1YPitgbJgIufYd5VjI5MHNgU0b1Rx%2B5ENphCqiyQxteng3OSoNOsikOvKd3lz0woeaK%2Bb214vvqAQie%2BEj0QRjur6wK4iHUFKNaWwVBx1Egxx%2BQnfMOXck99b4A%2B55B0ReKMEitGx%2F95Co0uKJ4qO6JOpmpCcyptmpyDB2MCfRyVhdWWqQnh4xjOnz2TFkCkNZCUQx7YtKjanwqQQxoY%2FBJow6T9OazWwjAKE%2ByC5smczPGs9EmwQyEohziTK1luADNC2TLVl%2FyFL42GGGqfda%2BikQGvF40tu8TzRaNI%2BULVt60640CXoXWAPJHVd8YYr%2FhBC782bR9pGw%2FC%2BBZnzlwpN782cSrVWFavsa%2FEdeQprWZoS%2BmYZGKzCPju29BjqkAcUQTP4nxjlUvyFWG3gtswqQ8L73MCMkXhn7nmnOLDCMdPU3YIVdiZA%2FNr1W0fdRXlqRAWUjwR2S7qleDOJflO%2Bx5QrXjMoSIQ0ufTXnNgjDEbi5DxRKZIrjbDOdfxChvn%2F2RfuZMiwWB%2ButfQODSTfKTy%2BTT65MSiUIhshui8u5pWsnF2gLJO7toUPbTnXnYi4l4rxWhfcSEgXsCIbwE0RsgMlN&X-Amz-Signature=377736c6d0a96d28a05819dceff29da73828197df1db177d698cd0980a75ca70&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKTTCC3%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsypzHHn%2BDRopnOcl9frRvPA2R5RoEogngx7kDbeO2YQIgWvD5wVg%2BkXXWozjCcZXfkztf822WX3iSENOW0FOd%2BNMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEoI6l5baZO4mIVzoyrcA8iI5ImAiRi8BCIYErv9AN1s2ZrJrr%2FuhR8l2F7SfMiwhyOv5eAoU7Uny9GhdW3JAnJNUcqKQVFfjBdHSCygzk%2BBA1TIi57RzWgz%2FrFmGxT60Jb5qJDzczG8CwJ0QJa7De%2BVELVY%2FCPtL4IgR88D7veUjYgtfJuF3COqb7V7Iyt44Sp2zQaofCXWC2zmNNXF0MdMhFAxM6fF6UXqbkZgpHJJDVGtBcN901r53Fxx6PJbwHFxf5cIGpR2FgWVu5i9XbwbdhqPn21UxK%2BMeR9Qx0QiabtC6bFmvWMPd8kvumISpeQ8T3bJs5ImD08ERGXg5nZE5US6K4j0kTGYjHEhxe0Wqm%2FmC4Txc7V7tbnoS4qCo4H24BYkcK0BGvMBFZHL7lTJfor88%2BQjRbvXo66%2BDs%2BeNY8qBUpW3qYmkQ%2FI9B3Y9yHy7dfQsJpEmUq4bxRhCbSZYyIodXpegEyr6wtWd8u20uhpyw6szWISyisa4vkJJum7hQYg75BO%2FOsNgXZ4o2uzIG%2FLRbUJroovLHE7ES1CzFx3FAaISqYVB6iAEdZrVvVs9xLtvwLIFRUXvIrWyKGdet8%2FnFnx4RNQQgz9Lc%2F4mup%2BTy6TkcUrG6%2Bl0IpLnmvijDRoEWQFTBXDMPXM7b0GOqUBIdhPtGHU6IFGBiUi7RjREMbmaQPpY4wQk4lbCKGXZwj8C2TqXcZBUQ14xRSa3NgxEm6OT6Wt2t3k8WY8555FlOaOVFNg0DBpxiA%2F5HzeVeRJT1BOoMi1sJV9tEtxXr%2FUAzwAiqItkZ2GNQ5zZM3ZitaGpuJXF00q360A%2BZ0Zc2jfIk2lc1stNczS5%2FE1uAP0JvuQzwieeW3D5UsurZU7IgNs6hHp&X-Amz-Signature=68455430eec71f02a47025724518d9d4ed87af7cf322fc2a7ac774002a2ad595&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
