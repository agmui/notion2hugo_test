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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624Z27O57%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6LP0h8OQtwXIXjCifIjXoLgBOPnYk9kr8%2BPqSE85rxAiEAnFLoFZ4NCQTPjS4V8j6LsMt0Q5Ia3%2FM0DWKSb0tktf4q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDC4VZQaqyNqcHEdc%2FyrcA%2B1I4W2naXucvjFemmaw5bBhb6uy38p7j1lOuKBTs4E2J0%2FfKFzXKROTbZbJ1bY4KdcNU%2BVf8IeX%2FuggJdaZwM%2Fgd3JkmSJc2y%2BdGAgHXqwjnhTjJjW7mWJJVUQwthkbgo4TWNVPidy3wWtfCpybGxMn1tOa5xaOUVlVex%2FXw5PWq24zGsMnke53hRXVihxkjgRJKyIu1XtavRR0D3xQW5Um%2FMoy3eEFpoYcF7DH%2B7UFb7X0S8Mn6OUKcV1uoOLHyhfaL1oHpOOLQiq5puzFJl29ltLumbhGQ%2F2ZPs1MYIASWYHWvsyz1jTzxy6jGVP8myoiiOiRcD5QJGFpn2xdaa6uIEkRqNUWVE66%2BY4Uu%2FC%2FyFJs%2Bq0Taqy4GoTDY2VHPgHwhQbcN%2FqPpy9rR%2BGyZzCy2xvLX9uRnncX5sNtAzoTZ0Q0VQR5GFUR2P%2B0dP19NiiunsqnhsA2hz144hUcDi1%2BMPxK26W114gmHqBrKslcppaR639453V4s%2F6uTpzQxve3sfPFz%2Fl3zzXYzhOulacK5s99%2F2xO3G6ucWxQy0P5cg5Tr%2BREVwTv%2BE1S1J%2BsGjS8VZyFW62gopcYZjg1pQXoUAIXsZHVnAm1oEnNL3VoogOG%2BCIrj7D7jdfiMObvwr8GOqUBysJWtezniFot2ksZELX1bjsUN7w6QvvQEwlZF0oWYgRq%2B6tNWZX9wwwH1glXEaMw9Lv3vK6y5vm%2FAZsOVxkL4UkYWdT43wISkPzmJmW%2Fzb5cGcZ8HsZJ4uZKSTnYXlgLhl4p%2F2ZH%2Fu7ymXjeLkis5YzRZ5D8yKj8UunM0ljzOHkUGvHKC7WTEjRo%2B0TEIDwJ%2FcrolP1zofiXOdNjqbjLAu3uHZiQ&X-Amz-Signature=26297a5310454cda30be208c8e9d5f6ccf22b5cb4ef046e2ec93384381be1bf4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G3UK3Y6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAoceenZpOcDfwybst1U8cIlR4yaEBwhgaKinL2zgBWwIgKHnOJ6O2sU%2FjG%2FfFU94n%2FOvCXTLbO71GKTxnb8B5VlQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAZIe7n28J2aMFNEZyrcAzUS%2Bu2eI6UDdjxd5i7j1Ih%2BHfAF35qjEWIW%2FDkctSgyAb33XEjkRgQeI7hVNEfWfasYmENpkv3TXwKZlFr24zlW93ucBvtIQlqIm1%2B67bozqE9%2B1VenHQCiIR%2B9OoY1ZRbGki%2B%2FSHI4xhYvZgnQOpf8iW8BqU2ThwExBtpEvsPGYhzR2SfF65VnO9tvqlcRsmh9UloaK3zZHrUHaSi90Sc5fH0jEP1BS5SVfYmHcftnQBzt3kz1igrg1t2Pc0ocmf0WAV13QPOCgYswRT3m7RySadCvLvW1kgruM%2BDFFrQV6qUvjyF0ncwYXiqbVwNC4Ds7Fe9V1ntHhiaolTKeN%2B9PcpzhF7IF4JrfJhongQ8BZ9RD729z%2F%2BIAQj%2BBbegrZ17PhW9hEHCMhIcz4r7i2A21DDuuNqG4iNpIvPlLM2QbYhzRLU2ChlNr6TAsEGmL8Ln46WKLc0FlQ4d0y7QMwwzzxeXTvepfbUSTzYoqdhivP9gxSXWeEBv9ToGGxxQFk3HZGkZoxPOaDYDCqdzPt5KrY%2FdB54q9N6t%2FCB9s8MrhCuB2JqZ%2FACk8TLAk7nXcy%2BF5R1cOFgCJz2s8Gg7FmWNxxhSaQkJum2JFyy4ivTbvWMJ4zBUqf%2FapXEr6MJbvwr8GOqUBUHmhNrrh5JOJpDgaIiTx8YfHNyQo5MlHnICs%2BaBVdYqpagE6%2BHF5iy5%2Fa9O32ZtXM7locJcGc3tEKaHUkQ%2FkJt0EfZvft3lSdfBgtxcmUD2be8BJ0Cd5lzs6FKQk45Vldk13Iw%2BXvcAGwgFPRPdh%2BOP6jEJNhtlGpmpTVG92PRs%2Fp5VD%2BFuj1RRJZFfgLdgTTmhBz1FrVT%2FZTkMb3goeH5uekKop&X-Amz-Signature=442d664dbaa5c4629c512f44771efdb577dca8aea362063486ec881f409f547b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
