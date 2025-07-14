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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XE4MRYS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDhyDQRoDHzo0TXnCYsqel0nj1K%2BqJAihE6MCPV6X%2Bp2QIhAPbrCVbuADvslZ8ka47PcOGTn7C4bbZjrSeKPOZ6jhArKv8DCDQQABoMNjM3NDIzMTgzODA1IgxU5l%2F1irO9B7PCCBUq3ANlbr6vnygSTMdrUeOG35Xcxm1a245DhAWydn362mbJtnezA3IODXeUSkXY%2FAtJ2t15BFGO%2FHsGSttSWsH6pM10rP9CAtRORaRIf3HdJdCaHjAnmFn6MzBNIwRaEA2W0FZXoj9IWaU4emvDmr51lshkeom37215y6mtgGTP49qC9cYu3hw2hROWs6CfTWlQU9DFHqppp%2FiZpeda8WmHBaJYCO2YFCcZeX8emYAJ%2FkVKBCi0ynL1njBjvj88ASPI617yHSik6wYxSlNTiSVKjb8XT58JPv0NlW3fuRwYUMn%2FFnrVxTggETKa%2BGbzvdYUuvtsOSanrvHz3GAhgXcM2byStYh6FVtBYZXkaDF9tEp8ZzQ0C%2FZuMBKTbGac%2F1yZsyyJ37cGJGjyqtktKGNQXc133ZStRbR4Rabqhgi993CLwM99rOuYaKYhNKOlJ8feOboOjBzSALYuYgNs6AEoJJreff3sWOi3MSqItRGpxy2SEwzZL8Kr9I8VjdIYltXiHRAFOlKwPHcQySje%2BsunpND6MvrgcYcQoI6p5ii%2BD3SnjaIaPN754ocibwM0n9dN%2BNT%2FoOhkzwQqEh%2BPXkL265WcVbroGbtb%2FcOetlNHnZbfrEp%2FnV57A43j7asB9TDGpNXDBjqkAQzzZYsE3g9HZWiQvlk5HSGUubrCvbQALdOp4N925wZFwfoTqbsDM3VhedPBM8VwpbcUJ6gFkojn7r4lPYF51iBpDH74yRUe4wFfaWCG9eAPpm1jN5iIPnBDgrnLkt3W5cKWXrcoq49NI7ykrQsihLbQWjmKbZcwl3M5qktRbE%2F8OGRIMavEedsfB7hLORf5dcWZ1HXcNG%2FjvHD3jwr7%2FaA%2FE662&X-Amz-Signature=60eca4216669fd2b77916345d2109e032015b2f5e3764861eb906a1f36388d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D5JSQ3Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDp%2BIYmKjJ1QJ%2BbagrCKL1vf01jhLvlximHD%2FJc68RKtAIgfjGEvYKdeBzxC6xgOecnFra%2BXxuD9CwEDy5pTX2oYsEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNPKy%2B0sHFjXobWX6SrcA6VLJ6lw6%2BXxT854B2o5Ef9pDgIHl7vOq7M%2FbuSSyCgWcV%2FK62Gtf1P1PSvtlYqIySTV%2BmlLdEJy9%2BKR636e%2FkXfrS2XwjWNCGgWUiceOV3IRxVohjvKNF6hX1rt8drTsCq97M8%2B51qH1%2BDtrBvl6xZ5wRn2bJoHuMNc6KsB01j6Nn0xqkxX1YmYZIG%2BtvhaAS5XUQfIpJtRNdp%2BbDTQoKRyenXju8WU3SxHaxLXKH3opYi2tDbMZpvPTnyg%2BeBbrP4yb3D9sQcdSRs8FIWEsvOMWfrPIkHIZ%2BzdZpgvC0KfoeC5Ab4a5doHVk28IrIUY%2FtjNgxTrzHBeOukjvqfP35HIWRYj5ZE2gLUTMd53nGdO8LgNKU2LtpVtpncKIp05xbC%2FhqUaN4TFsZeyoFnsg5paGjb2gKiAM5KzkuqXP6CVrjM83g7nBT6gpsUqbtGPA1HmNkKgEXov03a2LUx3JFnB6vMVLNirBBd1qjyHaVf8nnWwpVWJQ5azNvIMU04njMI32yh1QLiQUcry6Yjf6EXjdHUokuNuF2OKQPXIAiUrZfRldP5Dr%2F8gzajkrN051YraDCqMGv92ZM%2BY9QTiBkETFP%2FOWJPeD0dLpWT5hBJB0yaiuCRJ%2B6qRMfoMOek1cMGOqUBsmu6Nsccc%2Fihn4kLYF16xasIHFMUQmvlyZu7gbfVy7pPSCXGYSAGngKWz6FQ2nw%2B3J0pdjDTMIWHcAgtWSbqBjt6HDf0XernrHZMpVxk%2BNW2NMGJ3pTt1AF220%2BluLy3REoiYTmf5e%2Fc4K5c6%2F6CgRe6XimWO%2FuFDwcf4Mn%2F%2FfYusnd%2BNBJrGBNTxr8bDoxbsEuurVYck3VX%2FmPYrOC1odxlHpcU&X-Amz-Signature=18492a011de50b343bfb63f5d9504852d080ca99b2aa6eafb8b003d2fc49cc8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
