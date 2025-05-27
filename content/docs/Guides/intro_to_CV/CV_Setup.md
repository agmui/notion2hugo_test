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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RON2JNA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2V%2FzIyv3TWqQho6UOP9RLg5s5GNMI5toaT2OoOlpiYAiEA9qZ%2FFoO1ttrZmwDGLpQHl0C8qeWtSMt2CxsE3PN%2FPdAq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDNr4fz%2B7itXJKwXAnCrcA1PChLSJCfLZ3X2ydltcFe5Me4xTkfGyBfNsFpax44ljG7CVo%2Fjx9G2d4xFh%2BH5xKkn58eyo0KptSkk8JoXjw8bLwkfUA9jwasTQ9GUHVAL%2B3VUyS0IrtcsKnU7X7RkGWqWEv6cTfF%2BlxpzSv3IIwI%2BHwA97qbJNTzkTseCDZGLgFgnmAfi%2Bhaj2fHonuvonK0AS8kVU8I1GmgRIhvzDcJ7%2BTR4%2BpBytMo8M%2F91cBn%2FQTU6qzRpxXql4KHXndQj2gETCIgzkg7QAEv2AJXWcAtMwaTsrLaybnD8621w7L6s7Q2xDx7pLS%2FxUmGyQDcw1BRKiz3tJE5OlxT4jIPKl43Biuw8Mzc1fTVCXL3%2FHdWqsN6OB97geAkAXagrY2jY%2Fr5LzOGZmrpWIeKkOXO89IL1BbAY6vkrWnu4ySAWOxdWvWTX4VgarRVhkxBWTzszoEVcueO%2FmgBiDDVPt3Oed0HeIl64GRRt3f4Dn2%2Fds3ZEwEIoR%2BDihw32NAppzo6QRK34nGGyA4pgMZXUmXASluYi0WANv9m0S3x5ixSrKlQ3tjNYPTjeU3EtJN63SglQaYQYrpUOV6KoQ31f3oePCdOR1%2FV8e9IIbaQrZZYjLN8AiyZYEfQHmruSxMkiVMNSW2MEGOqUBAq8T7OS2RSVm4h0ZTLt2U4vtZ81KJbFLECNzqLVXNFXA3QV9YLY7P%2F0MoULJGAt%2FQz9M82dNq3%2BH5G4DX5V061c0JNJPgigcTyHOoYRIFclMoHLmkN0dCEvdpXFt%2F8gY0EjabJx71hWZamaJW6c%2BtoCq%2FmW0%2B8xCSUqZIHDmwKZQB2iiiBeQSjGUkdKNo4%2FrRjQicZocjUiEMVcRwFBXmrwvN5Ed&X-Amz-Signature=ed1f6c61a4afca5177f4e961895de0045907b601c93ed55210ef5b24b33fe827&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXQJN3QE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaVpTJ0MJ%2Br0eKGJRUa2dRa3fTsA2pBeafBhGwmTWBtAIhAKWYfoX8FGtc7aAl%2BOsbm9VnIsfxoPtqZG0jzlqwGT%2FFKv8DCGQQABoMNjM3NDIzMTgzODA1Igyv5C42EMCxsvEdRG0q3AO4E7jnFJ0cx%2FanunN%2Br6yfuExpJu%2B8RLZEy18oP6D0B8JO1bA6s8l1%2BSfoQsC1HXmU53Mfcbul%2F7j6M2KbZs4gpo3iT%2FkOrJnj5LUwZ9a01dV9zPI6SHWRO1RCkBBevOWQq2Vknwbtl6dEJdgZyDshgfuw3dj7wQykMJm2zmjuaxw5GeXsq%2B4J86imIIoFeXn2owYcms40c1Ej8sr83IrnkKd4yLxKvg9zAQbYJg9h4A4BSfr%2BsL%2BVW6pZVIf5nFKWilmvOLrVr8Vp2TSJx5pJlwzwed7oZsuULX4KvF3M7qkhH%2BnOVrTNxXBmMB2LFf%2FolgNkf8sZgkKhbE1mBt3IqvSld8MzYfxbG4H%2Fxq2qB3NVP7IfQ%2B3tTjZsaCghneeMU%2BPLpOgB79wB%2FRLC7W%2FxQ6ARV49NboExX4g8nYddzARo%2Fg22VWU1e9%2BK%2F8tda5Kc0dkb%2B48JQXnlaFLbQGUo1C%2BbCLF8gkOhkNuNc2R6BQ%2FeKp7iKm3%2BQbErEy%2BpqZ%2FaSo3QwYoZyPka0VnSgvVIiwTEwZbg0BtI2kBiTcpXQSzWZt7X%2F95omAFrDFLqWLu8dqtFAntc6eXW7nT8jtT9M5l84GmMETvaM3xZdn3Xn%2BZ1oU5T4vz%2F%2BBIVRjDBltjBBjqkAZZbjPmaKw51o7vZp7aRRFtSkA%2BQJZg1RByxdMUatYb%2F2DzjIzrKDwDCXOddAzWrXsxTlsctC2dC5rntyzbwvHcEltzlOCBb8varfpRfZ8vDE9ovqABczQtqoIgRqZa1Y7uPcs6hVaQnIAzmB6JYWFGrhVDfFQ%2BDr2ULiX%2BHQteFllJCYhbbB4TrZOEHqmBAwzwV4IDUjfQ43gZbD6xzc1OwHjLP&X-Amz-Signature=7965128dc3ccedc147c3123f20edbc8d01c1ccb07c9600e372ea237cc8df9507&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
