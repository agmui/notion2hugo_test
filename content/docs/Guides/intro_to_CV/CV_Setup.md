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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6TMLAHH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb0i8dlkqHQUZB9Zmkew5XOO3%2B7tqb%2FalR73M12JybEAiBxqI%2FVFuUkbTE3zEPRO2ZU%2B1hrdWmvrBIIrcNj5JoQtyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM2OuLqxZfvDls3demKtwDPhJF5DVfJjM3IHukYVCdmS9IcucOcRL2kLSnAk0dk4%2BrpnAGAmNJNTdnvDpsrQVnCF8sE6iFQREVwZIf4SbJm81m%2B%2FcCZ93lpqtJ3H7GN9B8RiYuxRulLwTQKs96kgZ2PuXtovEE7dncGtWM1Mc6gZAUhF%2Bs8AqP2onVTdCE%2F22xQCuDcWuXaJqQ22lnFPWHhaeI83t%2BKLVtP4TAWA6cTGcCrFNJEnqJO1wilE8rZSkdxnZKA%2By6%2FYzUS3KJFutzxDUQqZBNBixycNPEJx8YpyvPclXD4yJjNmV%2B7qa2YanEAyQIUS1akTCXAh06xp93p%2F0idrlow8BvHEZkKO4wPQSbxbCB9i5ADZJmBIwpjgOXqloInWrUqJUhc1M%2BCrCBm0UpfW%2FDVwVtACBSbnxZNlh%2F%2Bgiz2XWSNcP67GQKiSKFc8Jbn6RlvJIqJCvfGOytNYWcChFb35E5xfsZ6iD0anTraGEu2fDVn33jLUohOnD55hPIFSrSswRcxJtJiiUTv1D8%2FiGZ0K1do42BQv2w0Z7crz4HH7Wybxllpnz5rLvRyoPxtIs7hfDOaSY5toQuLI4GRyjyeeMiFsym%2B2VsLRPai3LZ44SXLngxqb16CNMsh%2FOn0c83rlpaEpYwrvi9vwY6pgFMHlGW2EL6NZ9j4fyyOUK%2BNHew%2BUAmrh%2F9NjjXxdp8vHCi66xRur0dE8OiYpnVDzojwk7x1Y0UO2nhC597yJKcdiOEAs2N1jxMhbE7DiLfrx6bVx%2B0rduU5rfK%2BpK7OgrgRZt4wbvDKjIoCoPbsN8lCh8Npb0WXT71g9PV7wV03ITMw1oNvMpPrbfeoKucj7JzjhxuYb55tdfP7dsLXo63oEoAjL41&X-Amz-Signature=7e5c6465b0857646923c831c075b80d7358e230aa622251ade3bfa99954afd5e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H5LBLK5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAjneRLwSc0DTqSdqphmMG8p3nwQqMd19Z74Qkfb7d6AiB33pKgjbyoy%2B%2FFSuf8pjmxZt6EeFafK%2BhH8B%2FU8fBbIir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMprEQmOhAxUQKgiX4KtwDaRUgxcBvdVluqW2wpEKhX5sqOIllTfFDXrAT%2FTcWHT7q5WANjIdNoQqVA1HIoquu8WRuQXvUuPAUfAW38qkOHjuxZKrFXZzCye5KaIU9a4jbrgmPFmTh7KUbRg4iWFez26BY83RAux%2FrupBuS7prvttHRiPNOMK5iFl2mxbMxLSHy5UhV%2B4Q9MccB6rupvZ9DIvphjg1vq5B004dZUuLDvrFkiWpYMH7oz3eSzZ1JErEHGipAiLS6IvO5inoAcZogBKxzEWk7bNYneJY07p2d1Au26QOoJEK%2Bl8QbZKPlwc55VUSDojnwkquQjMvyvIKfIn%2FD3GYmAffGQ8%2B2c0CJ8gwZM9KZl5hBmfla%2Ffkpu6LdOXfPNVYiG2WO%2B7l2%2FIh0OWbMso8Eb4zljTt698k%2B%2FUnkemeJ06Rl3HelL4O8LC71FbIGpAsGiPQtcD6UDI2smCCftO2jwfW16Tl%2BJN0K8h3WcrCbUBYdRsQ9EEuvYt0AJAXv4%2FO0EGMTxMu0TtQes1NQKV5svSjRjt3OT0AYOJFq8x0dt4YkTBe0qe0FPOwkNEeL7VnSx%2FntN%2Bpq5OIBIRS4FFHNWwJzDdnka0SME8y5BJ6PcdaYnAcG8fsSULBkXyhLUeMGKUFkDkwnPi9vwY6pgGl%2BhZNWPQASeCP%2B1uOwlV%2FD2JftymNoOnlqSb4UIJzp0DjJ81qoM1pIgm09EFv1D8sk5HRXnW%2BEYaAJeG3AWPAQunTkx4xPekDLviSGQzNGKQmJpuocV%2Ffodk5C0Iw8L1rMqVFuNDV9crnzsiDP%2B4DsxxBG7r%2FeRzeQYjV3JnNvi3rJoj4LWl%2B7fJlQpsHOwDyKrExRYhvjaOpiAkkvjeIqK1wBYD2&X-Amz-Signature=dc62f057ebaafd2885fc034ced8ed0326c0db4d11f53226652d846f02af64792&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
