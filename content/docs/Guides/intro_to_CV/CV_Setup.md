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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TT6CNKR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2B4m1EiNqpBHulUmo7POY4bawbn7LvVVXP9ExEOxGp4AIgK%2BqqSkEy0kASdjz47m0Iy%2FSopgAe1xZw79Tmw8rTJ8IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlfcL0yi3ZnpLfI4CrcA1%2F25Nx6SahLv5K8%2BWGF5zAONLKyti884Btq4DnLAEZ4%2FFPJ0ugdGm%2B9t4hvX7lfbzuMuMM%2FXlXHxnLLGx4vQTFV7kB5mtdon4N%2BpXh9BFh4gpx9yfmjYAU9F62QM1H9t3Ysi4sxE9fu0rVZs0sGmt0w8uFIzT7%2BINLo%2BR0anCp5J3wVpdXkMVFut7fvPgLWxw0leEw6YwjCbwDjTBj4DfGWwo3%2FV5RSG%2Fc9zphnThvRG8is%2BSaaVjeGbOeHaVCfxl7w5Ei3lO4MQdnp3qkw0jiyvtsyfsy4RgIXqd3CBQiZdobfJE0YQVfbxwprFDrVcrNrh9ABWzw6wbTCqLraV7FLQ7aJ6f7Ww%2BZflEBSDB3FQHERBZJhHwhYWe42o%2BpiycwAgnBwBH6xmKG5eYIrTBsT6dG%2B6Efl13TIRYvNMSoEgDAGqhFi95feAsHqezODz5dnUIzmt0Ee0BAtqxQsm3YXx7qYhLFg5WYjPaJhlR5XEW%2F6vm2ycW6DfmA3DvvRJnCFUTBBHtZ27S12W%2Bew2WrXqUKfT1Q%2FQQsWyMgMMH%2B72D7dUXv5kH2lrL3PZi2grGg4h%2BrLpUxrq9YXihW0xByFueOgCFk2Cmf88YvMNqIxYftZAHL8aCD04QfSMKPE28QGOqUBGSsnJGsNaMJIa3nLNUz5EiFhj%2B31MiZVb%2FmRsWtCmIgDh9KZMijAwMAI4gYUKpH%2BXonWbM5e891uYMwQKjKqgjM1Zm3aDKAYWs%2F3hJuGa6tl9sKfJn5gKxlh%2BmgmiumJop%2Bpv4ob13x%2FtnEu68rQt5WByFIQnC0aJYI45kFK571O6gj5ZsyzrAg4TXUWVkvugKJf6veU5%2FjM2oI2LDtJfMwdW8B4&X-Amz-Signature=6b9f3b9df5b3517b43ebdad331ddcb9979c3dcb5c8b8265d4083cd2dd87d7038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCLXYZ7Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIH8R%2F%2BrhzeENcWZryqI7jndHTNZDXw0edcVG5CWseYRvAiAlZr7OpwqSSp3OSYjkC8OjHHVOZiQbQQHQRMOqnTpJiSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEZ4gTLbhNGFJB4IpKtwDQ62%2B6EoXdn%2BuXYoifkgUh2wKkvsLEmVSfPEhA9lqsOdbqlvprZ7ZPh%2FbSD5XiD2ouYkyz2MHTC%2FvTZm111ClgV5HhALJ7CvXYmshB7n15VqbqGzVLY0sq%2BUjoP7VYu17JS88UgwcvwzxB4L95WO%2FJt5hfOCSAGmT2iCA85n6NW4fJsG71S52T0d4P%2FaWiOQV%2FB6lJ8YuTevac8cqXx8QKdWX6XQDZmnqEdXj02tq9pIwtdvlellBLgeY1qjW%2BeePY6Foe2pP6ve5LJ8iNfiGimijJgZPx8wCCeUQ8o7kORU0Ym5TfbeFrquEy3OmjRD9hO5UWC71YBAaml0Y4%2FUbCw6j1jJGMGQ69uJgnfC7t69IWTSRvEnxq5chw%2F53ARvQQ5TrEkTBZpnkjv7KXHMDH6Bb1YumLdEF5VsWJPNyO4RYUK3xNclxlkwjtVDLfAbxKudtvvKiyNQ3g%2Fd8w0uw%2BS%2FPZ8mCFlf3kY3IKdN08Y3jINfGDk4r8u7exy8eZOdhh6asf5cpWDDBN0RPk6%2Fp2FKeOHIkNf73pmo3iA1QFQGlH4jiimpL3MeG5Ao%2B8C9h4ZwEbbX%2FiWvcoCrcbugKvY2rOjhzoTNdQ%2BXzdQ%2BxvujO9I0bdoGu69nGqQAwwcTbxAY6pgECymnFUMkZQY4wYzgUrLmxDnzJ1Rt8zhjUCHniH%2FTvr1NCblgz6yzzfrkIALO2RI3lCCk95VfQj700Z7XXSOLIhRjXkqjPqS0VHWBZWJ%2FKNtfAbh%2FjCJvlf76%2FdCzU%2Bv1lQRRuAJPHrUWtrVy7BzdMsmqJWvxbN%2Bq8zU77Fj9rFOv8GXlLJ6FjY8nZyzxC9oUBw2XdO1fqG8onBr%2BdRRLyiw3aUCJF&X-Amz-Signature=6ea9666dfc0b47cd7b0938463fce9b67b0db08904642abfa80098cf6ffa89b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
