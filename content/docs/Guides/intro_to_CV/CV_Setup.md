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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPYSPWEU%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDlGTiIbrawF4r9Zdy2y6Rc6VrYGuTrOt9KN0v083L%2BZQIhAPaPknVcc%2BxucijrAzom2K6NU85nN%2BDh2OoaARQw0fMsKv8DCFoQABoMNjM3NDIzMTgzODA1Igx7U%2BQN%2F1Er0Ten55sq3ANN1ORLkueasiekkFWagfK6o6wfyBwxn1TEd3boZfGkNsZy4SCaB5GRquV4Adk3u5SeQ1seaifvn6zU327MwQy0aeEt4PE1sRKyQr5kuCDfpHkOhh3sNzjZgXMdxo%2Ba6W%2BagzeQUAsivJ8YJy6PBfuBUrLVzaWPeRt7QYXTaL02V2m1eJLs8Xtak7dquktG14HysinQw%2FszFPSTLIkpD6SZXqOCM1CKRjt%2Fj8GPchwRaIyQTGN8dXYSxEC%2FEUUXEzYZUhYZBWfmRjiJnEElB93bfFed9NAkVVosZAgU69kZMXddNUPxP1lbrXM9rieFXRzlaq%2FkS%2FGBgxHNcW6m9%2FbRSrUfAjSUwD8ODwjaqUQCVOREK21pkUJf7NfbYTSGucFWdWpzGLfHViJs3uUme2o3l355h%2Fr4Zsomh8FWBSFWwvF2iLoSsx8Hev9oM9vhc1AewEx5VrHsu8hUseU1I2yh8kDFnMTlF06dydHQFMlm0Rum1s4hwojNItPWztBc1S1z2Zl4%2BwwRGRiBCplitsSLcrRbvu9lFvpHzh00jkv2EoARCIlYPHflLaEUB6DA27KARlhVdaLMhg1gfH%2BN4Rtpf4xys7P%2B8MbJNVeZVJhQ%2BfyHAHSL0eayQ3v1HDCOiLC%2BBjqkAQqXCP6fbXGuDIR43tlkcpOJkhDkRYHxa0Gs%2FZ7Gqn8TZcHEmN4ybyuVnZDWbpA1m3k3w6S5cLEgBnmSWzH1%2Bth9%2BCvaK4LtXMuiVH6XDVHd4bNjOKz7KHlFEYmikLZwaYfStJWcUH0EGE9M6xHdO3BoFfj7ECG%2FzkgPEhNBj8uGFYLViCg7CR7%2B3Ekw641Z3PPH90p0mJZAeV3A%2BNzVmPaZ6QXF&X-Amz-Signature=86bec11289a74f00853c9107d06f31b63feb38bf04cae30d549f02e23b2ac725&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35RPHF6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFVMs9d%2BWj6Zd%2FmCTVZaC5YG49c2jTufXDC%2FDFno3h5%2FAiADqxvNblGhB8Op2zqpGZ5mRtyeAWkAi7tRKlrTIliVjCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMWO2qJ0ybObyDZ9wDKtwD%2BtqOSvNRqx%2BTz7OvawQeCz40neZFDQOdH1Bb99DYD7pPLwN8lj8ulMGGn9M3W53u4flsfZFIDekcgTge3hgFZ0qiLFrTHguqC7eeXD%2BL6Mh132nidlSlPOT%2BdpxrrKI7NGXfsF711zhsNZbCKpWWjwYkw2Bw8xdk1Y5SFDR%2FS7eRqmCjzNGT94Pekm8P4ga6bwj%2FhlnhBXP3oiVg6V54WwKew7sTZvflNRgKBmhEWtK9uZG%2Bk8l4zIN32jPbFKLI3phg3oh2iPn6zM%2BRYNdCnRbOaap66I%2BH2J7RsLDew%2BzXl7me04Ama7RVGCrJdknOy0XMk9v2iDgsM3G6Y50x2Y3HJrjiBmgtXqom5ZR9CnPMqTZl3AvorBA8wEDCNcs7Pen4t%2FzAejpNGM3esT4i0v%2B%2BcEed2iAb8VVeeLKgcdfHxV9jVQ9tmxvxYfEtBtelhP2%2BjSCp6J48z950yp3rdq%2BkvpoyHtq7rOxo4iEQ1jgKxMZ1Ki38uJEVp12qfxWfKVfmiVdBLar7oXXfCV83E0uD1pMa7heOB5GcA1IuuMj92rGwwkRCg%2BLb%2Ffl59lY7hIEC7HAjXo1zySoG0Kl81GKLJPFI6Pj%2FOMbQmgePtAevIBl%2FEzaESgngVR0wrpewvgY6pgE%2FNwxY4SF4v2Cnu5ZI3rR6OBHapYRQ6bzohSTgwaNb0MgmYgkcU9IXGONmDjJlVAO2JVzgVQXxo9Bv6CLO%2BUMGVxWdZgc%2BC6u5TzwgjvumHQQF%2BcXCrHdJBfcIRKI6OKwLNXxf%2FZaq0%2Br8Tqn9rrG1ZFx%2BkPB7dtGgQ14rjEMKy0SJeRX8whEgMkzHJP6O0kGg7s4f3jikecLsc1LUZ3wyLmXAiD%2Bj&X-Amz-Signature=a6ce8a4f0459f88eeb4bfd3d921303647ca454e07bf6b5d70a70fc21ec02da7d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
