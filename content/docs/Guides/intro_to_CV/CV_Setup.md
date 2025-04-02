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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZEMYPY%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDeTyiU11xrpBv8k%2B5W6uw%2FXu83Rmy0iDLzirAkyrwYDgIgNhdx%2FRGa%2BxRat6CfhJqG8t5jakW4rV%2FeP4ShGDBrgWIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNRVgp1j1Yr%2Bxil0CrcAx0314lZx2gtRdo%2FnmeBuSaCv%2B1E5VqOwpHfPW%2FQtuBOiU8lU29vH%2BCPzSKZY9n8onH8I3WiPnMT5pwLPNqeyo%2FqOw1BnnS8AKW75OZbZg9RcIdT4C0WcpRdWAEHR88QCtfmggX8D0%2Fh%2FIwhba1%2B%2BKJzMoH%2FVARIGk7FaPQq6%2BItRImu5Yv0sowrKPencyjdufqKAbR1ObAj4EXyTrB5HdbZYYLXg368MnOEYzIPttueP8GdO6PzNBcjnHXBRkMiHZ2AATvgMZTgB%2BB%2Bk3IGa0EJroJYoWb5l%2BkDsT9E%2BaS3SyZSA%2F%2FuEK98VCM8nASroZC0yBr7FzvK7OoJ8DtjuCh46xOxfCp98YAUnxpZjBgsJMWKA7ABSo1xRki4ywrwFb7i75ajjvm%2FmXx0rixs7HyqQmoEC3FE6kcUnGT1pUGdMW8N%2F6ZcmAZdAgbUVRc10ypWGzZiEyGF8%2B8kO23BI8vjkLNtY%2B5QmG7re3mLnxj4GDpso4ZXSk6zc8vTU%2By8eTcsYxW977B1Tlgy9Voh4FEKU8YnjNqqQfZyASTND17bjvQdg1SDYiYlz4i5Qsw001U0hScV%2Bh%2FRoUOY8gxb0t8HqZ%2Bs7PDf5a2s%2B9h96OlYs2e7oSDmj6unmbKZMMDQs78GOqUBIPAjkNRZ2ir9hQ7gDjCqSukw8krXE20RJ2kEZykZqsYLYvA92PRk6qLdT6FdrSg2pvqAYktiYQK6SR2J9NRzwvmCr3dnUOdSNircHxmXn7zRpUjP%2FfPtzMFKg3vXohLif%2BsGTl4F80GW%2BOWvLRoOZCvVPSnQ4ovXKUN1mVTaOI0gDK%2FZBbcHsmSD3qQRzxKWUUIRvYwZyIA9zXo6tUGhAyIUAD2W&X-Amz-Signature=1d3a70c1493e6b2fa7ece8b0993ce69561ac6aa14a175d6b44d791d7e1117fa1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T547CMDY%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQD9eyYMDKp21lmQJxaobbmdBjANTD%2BZzxP8YsrGw8O5yQIgd6BUzxeN%2BCPkDSxyUZTQwbkwdMTfQl9lDrSWWGQnxUUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlWXYwBlaWwXUa3%2BCrcAxlW9d52gIB878zWZDWbt5GRSSb4yt%2F8kaUq5A51C%2FxYFzibVPobuVNAmCdDKWxaitvE1YBdly8B4HXFXtWaZNpte5CIIDpuFHhsMjT18OQ2re8VwI4kgLW%2FSgqNRz3wgYVKGwFhwuWASOj9qAK6CEjN4Dz5SfVtVQhpBhAuD0WorCT4Rs%2Fki3RQ3g1e3SBllD1Rs%2BruGc8FZBmMDoeXJ5Fo9om4zSsLjmE4Nz1BFxsbhpN4xHh5wdp8yyegTxJaj%2FL0xB3ZX4Yp1vdQH95OKBova3i%2B75m007%2BHe25S%2BrFOxcbIJZzx6p5PF7CbypBAtE46A%2FXAykWXMWAZbKsKF6zE8ezEQW8UTaSjn7ujWidnTBwQzG3lcaZYf2lYXxH2NWF1sXIucoIL8wiJPBNd1Pk350monMf7SRk5NNs7M8aaNjjyibC8OjY%2FOuY5kOWbay7Pox82gx6wq6EOjokwAgBv5douDzD5EEyg3uZNzOX1j6AD2fboCASTkNWjo3u6KoZCRitceBJYHQzf0LxkPfCLHeL6M6Eox8MlaaJ%2B9P%2B%2BjFQLB9SMvYmcNMOx5JFMMRue8m%2FRMfDkIovAt13NMgrdLgpt%2Buf6MB4XZZprr8fKNErgjAunsYxDRdNMMM%2FQs78GOqUBekEHfnxtsy6XcKn77qPQh7Va5Rc2qQ7QWEUQJq6ElbKbl52sAPZmoT3tLxGKLyjFGsWa8033EAx18XTbCN4Bi%2BrFbBLHXqnIqj%2FzZ6ZStduJ%2FgT6iOEyOAf9z6DUwi%2FXHCKQjGqno7CqLAKE9DXqENt5Wls9ue3VYBhgQfKbT8qpjcl7Ic8ldJXyMiyTw1Zeexz2FFYVPn%2FZkTD4zgoyuKV6PotE&X-Amz-Signature=bcc19c4767939177fdde67ccd97f03d52ee2589e4e4abcc0422d0e196e04c759&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
