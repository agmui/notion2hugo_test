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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QRCFKA%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWRD18%2BOnENUy4yNcqrf%2BJQfGWtFZxg0WQpPG5tSKTtgIgEhaijtdnTi%2BftrEbnLj9NL62tJOxhClmPD%2FUt0ifu84q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKe4K4QM4CHYmirKQyrcA7sslr8yQikdlPQ7QC%2BMbCW%2F8t3wQ6naQz%2FKGoQnKjOkMTfhNhL3CovKD%2Fxxa4BtF3HeaNgHyXW4fELesa49nI2%2FptSPctLVc3M7xQFZFA2j%2F082K5YoRcKX6I6%2Bzwl0ddC%2BEiPV5nDFOjoikXRl%2BogBhDLdhNm1c8SWQPhbQQxL3W1ChfXAmBfspy7nnmAY3oE9qkz%2B4t5wwb8evOPr%2F0MT6qYWPhPddv1NWEEmhUbjYP5gEyUlVQJ%2B7ojd%2FE%2Fn9XVhgOlmVA%2FZO0q9YVH%2F7P7eR4UOWB6Crh6m7rJv17mfUeQXAiT5veOEaQEi8JM855VgcDiS9xkgnCNUt%2FJqskI6Oc8wE4xJXuZDxTdekVJgz%2FVru%2Bpw9RFfLaNrZW6pcleWYpG%2By1owXx%2B7z%2FHmydiNKG4Z6ICWCCf5bdEVFqXXCYazA5R%2FjaYx%2BKzr75MUxgGM06iJcTRIvdgP37Qh3foWHIU%2BsyArdqM4CW%2FAiL7E%2Fu91xVLl1g91EkRf6kRvlTvoDozhXfNbqhir0YkdSBvA02eFIGI1%2BkpN9sgIzbAThzdJslfYUCqgMb6pa%2BCHo8n9AqOqXoK4Z6jIS%2BP%2FBttaNnxMnXckdo8Z3dpNlsI4l2d6TAt2uwo7sFpMMNiVksIGOqUBWYgPV1g9cEEiTp%2FItVquMOSuNF9AHVN5i2qmjoESnyWvY3QESUftiVdhT2If3ZTafyfiXScF6WI661IsObYK7udD9IsiZafMI7j6coKv9rNIA9vrEhlbwvpHKtGaxLvhzLviyGdXa6GQyP8ivw%2FRj%2FvCij4uAZPdnDIIB6FNiFdanJMDwF4ndyZ9ZS78LU5PvRvWsuQ8KivmXUA6J5a64VonZTR0&X-Amz-Signature=b259762be1f87dbf871604aa3467508d85484492b129d1b4bd536f613649d34f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663F6V2JW%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCahBknPpEw5aMaMjoKNBZ%2BGiN4sE512ilj2tFXlET9aQIgIl353LDVVTKXpdfEGNkHYeIp5lnxlnQjbFcL6F%2FIDecq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNXfAIhu5HhuDu7i9ircAwVv6r9d3Cep2UYJiAi2HiBBAae%2Ba8gh8XjDsrBjHAD47Fw%2BoLfz65SUoaYzF%2Bfelu9NuT0dJHL9y5Jevx%2BWoLlttMpTdhDnUucxEdGfe8JYUScQmDwM6gdBlv%2FC88iegkkohihglPqtoqm%2F7vq42B%2Ba1FAv7hFNrrP%2FDneUOdZOwmr3brGaUn4hUb3RFgsmoWp4htW26cWwEcxagJ0X6lM%2BfQUb3lzxt0CJqMAlza3rzyxnnZIe2r2oJRxOQyA2Ui6IOe4r2QLEa6Y11wboPzfMej7VT%2Fgg0ZQMSWsJfvj0nKJYbj0aFCQ6MhZtFXdtdkiFFLOgyNnvOk0IeT73vJd9p5pkZDjjloQucsc1DGMpiikXUpyfIj0Uh0McbkmD%2F1oos%2FsVavqYyGWtCEhWdpxqpp%2BKsvbNntBlj5E0oquChxLae9kGrHgtYVw4Yfpnmcd0QRNEZwwYeIQWgOAJ38je%2FrK%2F4k8CsRdoVrDoar%2FW4rQC%2FPyrFmX3XEBqnYq54kNIYajp3sB%2B55Mb9SdXzsrFbdpTT9DIUyb4P1NTKFdrZon6jqD6MunLJCQ8RQ1BihdRYtr%2FFSVFkXUzFcDD1KdAA0VkjRc0TMp6OOXOpeiD8sjQocatEQpuFwfuMJaWksIGOqUBplhXvjAo6kNrDOEDMg68CN6T%2BS1v2E6OLkGK5%2BBd3NM1vfk9ti3xYvDFiBtpBE8b%2FnF6xSGYFS5gZT%2Bmrrm4TtjgnQFqfty4W8tGxRX%2FdoUW7Z%2FiwJq6u4s%2F8Fz9YxlBUj%2B7uKFfJKozZZhNqUF9yNCAbDPZ8BNpP8e2RyqE12lRi6NvDBeVEueadnf4CmI7GlgrI1zACkP4837m3h4pDTDmCyaL&X-Amz-Signature=cf7526149274c590071e037bd3a6675eb01a984c0f5494fc3afa97d1172f4db9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
