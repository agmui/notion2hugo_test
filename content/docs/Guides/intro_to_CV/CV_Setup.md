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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DA4M4GM%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD0qllFrz6cXr6P9pevJUk4IKjJHqpp7lbCO9gmXF4sGAIhAIXF657Oh8S0fvv8uwjklx3UoerntrXnqf5nOnP59nb9KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9vskEJkkIjtrqstcq3AOt2gACSuTM5X4Y4vlsZ1t9IvVjrBYYg1czG5l8cVyuRrY%2FMe%2FAM460BoZ7Q8nK9CFwQVHyg4DhHk7uPuODKPMiRZafeXKawGhtKlYhzBeU40timkN48KhZa8vlipVlLyRG00%2BRZNrF%2Bo%2FF6h8RJpla7c8U85IlX0s%2Ffo3GyqPwsdglNBl%2FbWZe7Hnqq8nC8ayvuwzk5WY4%2Fi7%2B%2Bg8O0%2B9YXlbVNSWM9aFcJduloh3yg3z7wIDaTJujcOY4KvSpHcPvjlx4FGYLMT40j8ERS2cYDlOMmvp4916lwUwvqk8Pxf9cPuneZ%2B4N8TKl2UtorKRf9V%2BVxJEdm4lO1jywFgmhdFmSU57KptL4EReJHarScawgacKqEyqYz0utByDXxmnRD7XifkM5SGmr3K8fEwaLSV9VvhHfIHDPHL0iABK6bFc9Uv%2FRmsr6OsAHuoK0zydAVpZ77eYa%2F5ngUisaCp9zQhwzagvwI4ivZcO1hPGeDZcD%2F0EDp9X0IrwZseZdCyUA6QyGNH8B%2B32%2Fz6g8SIveYFCuIxRDOUL3dHWnJrlvBksYyCMffI3yqoapSe23elwxUTwRoDidHT5VpZ%2FQj43Gcy%2FgBiZxT4NlGTI3U4eiZPZoj7V8OsoFyE5X0zCB%2F%2FHBBjqkAeC%2BWoeOQh8ztrXimqK9rx2cwvnmH6fwbqg5VEPLSNR8WPeJR7Jw1Q7aKmU5StvH2kMcphVtA%2F3qVZKbVd%2FY1gLv%2F%2FUkxfSQJGbhs7TkCO%2B3ywa7EqZVJA13TYWsmMs%2BYdeXiMpLzncUQAAK0KVoaEazmKrwcN%2FF6%2BlwjA%2FNIn3xWYbPSS3L391TxjNktaC6Olo9mMM%2FgAoio8WHHNB0KKrNQ3ti&X-Amz-Signature=805cf3d23a8aa342374ab5c7f65008a0674c0c0ba1c8df4180b31d6cafcf5c31&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULICVWN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHfdS6C2tgDcYij%2FhhmPHioI0G816CqW7JsOe3bxU%2FmAAiBgRpDrIja6hNy2uTm1UV1QdCG48jW%2BXOKjW9rFBmR%2BeiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHcgfMWsLhc4CIqx7KtwDYWXi44grWEZ6LHq2euerZ5XjeQJWJHxrAQwtmRj%2BdsVM77UyXGZGgP%2FOZUOSVE9M5wqjQLAufZdlmO%2Fj6JZhZ%2FRA%2FL5AGdXTSEVU8pE16MzwtkObVnghIWxoakO4LDzLTJ0BcAzGMr3iy4g2EOoJDmx1PwmyQefzJl6TtfraknPSlZyI3CwWYll3nRsOT234CoQcpv48fyb0BYa0CdtyUJ8q0osz7rvg6fHTkoCkdUxDNPS9yE9F%2FpgUu6jWY%2B5%2BnEIt3sNlH3yEsUuI2EvFvpXITfPOdOD4N5KxJ8WVlXmqGjx2p%2Fj1oFUbcoPxi2H2S5wdApUDiO%2FYlM5aJD5ILRIfkX8VTxYy10cW5%2F5PezMFoMwbLG%2BymNy0AxEdQHhjx%2B%2Bs1YKjEwBPCyt65ApMEfRx6KXWcIgL%2FTi1m3Th9pcb76Yoq%2FEAnSTJbE5Dq%2BuBscJgqfdVbdmjr3mNb6ZQzvlRR7ni%2B%2FXK%2BVZ71S6ZkCwjSws6zQKyTCvNLB3Du4kUQh%2F0lkMUkBllCLbSVBwLztDvOWhE1pwM9WZSuL%2FvrEB7cgKcKrC1Cm9KQ0TTWc%2B9vy6OhTcw6bW%2Bl5Gx%2BpLxpgdNaKvaefuPokPiTKuDza6DOO0x3xSKToc32TQwyoPywQY6pgH8ja%2FaJ0Tt3uCUNz0x8ITwfxkzTDusHkIKE%2BXeT5otYlcXhSA4UqOgo12QqvLOVMUxG9WHVOffpMp1HHpcXUvBBDFlbu5KpoSsrQ8R%2BCgxjnzCWxJqQ5ZJ3SmEBBgouNDTMxwEoOfvGooVouvkYvjnTu6L2SvDVHEIVJ88cBgY9pL0DWU8NdVMRfRRHGbyxI7PxexZxtOLe1icOHpIX%2FUWd3ipNyua&X-Amz-Signature=b41e5c536056e69c66c11f5d010e8814bdf7c3f02948e00b4f870796dd796cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
