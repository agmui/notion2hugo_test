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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CKLW5N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCC6rNGYCOToO7Uie0jF5yHptMfQ%2Fmu6L2BEdIVSZqeGAIhANLr%2FISG9E8MqY72dU0zEKVMLBK8mug2r6HKxzah3YZ8KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxAXOnFC8yfT4FuFYq3AMRGBhpNMSVVIxg0ibtwM1MCbfUSYgugfO%2FTfRrf0Rd6IAB6TpiMzwgBFlhmHB%2BpXkAvVkZp6zKCbZmmQ79Wu3cRH8hKgQPmgR1uQhJntJdcQIRblPYJwgNQKxIJSqw9MCvYrWE3hMd0%2Fk3euLVo5mpGeAYEbXfoyX9CZ%2FLYmhX2VYX1cNH3oULeQPDpLOy0I5i0ukq%2Bd9pNZ1q0tlEj6%2FPwAs17tP8aRacGAPHFFwEPQ1lqXNipB626r%2FU0ZwRuteEHdwvZripXxvru9GckIC3srcYN8C153Ph6XFcIWhK5sP%2Bv6Bqys1xl2EdBykSeDuKzwwEXdw%2FV8G9P1IXhOZ143OHWkN0UpRPkb3Yee8rdMfMgZTFcDv7nQuKPHZWE8oSGw%2FOtzyd9lQibSyll7mm0Mj6yDYTovPKrfhkDL%2B54VjI0NazoSLKxaVjwf%2FZzaY2tRF82draQsGCa2YXilY5SXf4vsYEqoBpOwvdv0%2BFVOkW30kFYV8Yy7GUZwz4lI5fFkN6It5Rvpzzl5hHjiERWtw7f2Pyr2%2BHvmzkKZvf15bCkWUdOm9CECwzPKVQt%2FOrMG1rJshrI%2FNtLeEDFfqVOgCaXtrAYILKJv39WzEbhbjkJj2RTiys6iN81DCpyNDEBjqkAQAuwc6Rr3wyIgynl9cQsQ7bxoTSnVcEll56AmAm6X8Te%2Fu%2BY45ATlYlr8ZxCf6OvIFwF6f2EasllOoVhrJ9tAseN938NFeHlRUaKaunzNyT5oYYmY9%2FlspCgp20h5wjE%2F%2BwWbuPd01BIk39NeWSEGYwNmMjmMvN57wWWiUKp%2BRSwq44iGvqcCE5MxczILVzj2qxLKn6JPdmi4I71g3TD8rGru%2F2&X-Amz-Signature=fc7d65b22459a9907b44e40b3fad9ad318c1fd2a5e265b287607f10f4de54b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCRBGVT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIHXNOywh8KgCHQ%2B9MzFQOBRuUmKps8zlYt7cmdNLrVoDAiA8FDviZlU1v8ueXlb6On0PlImDsoFe6piZ1cnWKqfElyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxwJPKl6EasjJp3uvKtwDmtJgtT70AUoR0zPVKd%2FplemcEwDAIek3CmZZGLrlUqJ6ZA56LcI2b3diGuJtckTO9SduRE4Z7jE0CR2otRtL40Ao9LghMcU9FvWAyuuaSRYSUPTjx0J4xeJs8ygfynqTBwzQnByfWGHe4czK154n20Y7Eactj6wtrEcPbEYWOwdrSvtu%2BIx%2FIYUsKt8APyejhqCCV0abKwfxQQAWrHi6m5hYCZX1A0GZL2YsmJN3e6aZJtn1tMynvkAJ7yHXGx5cTrHXpcfptXbbhqUBtB98Rc9UFd%2BzVkmGbzmV20tgLAEzG%2FEnHP53qkqoCQMU1nj0mocmf%2BqknWTfK1hxB9aw8GG2Z7b9PBXVINARtV2CSDziYMaahiyUMOjgmSdndkYuFXq0uMbWZzSs82Dhla1KqLFX7Q%2FwRgSDL1AYrrZTSc7kGck9Vb1Obkl9dbO1%2F%2F0W4qHWOtUZ0Wj54Qq%2BWiGTeW5S7qOjGVxGWg6LH6R0vJ9QldPqM58tcMNPO10iNr9Bzcv3NBTjSmkl8yH1pVByEYk7qLDf61ylfOpPtInOmYypsJwgSJOpf%2F5UTKKQyCrp4gu3MgpIOtCje8bU%2Bc6JeYGYrkJHwgoKQ5Yrxc3oSXEsJ1hOOvQgrs5EiRUwkcjQxAY6pgGFi5789YHToQgfK4PvzsfXsDs48fdypnK5c9DtFzVwEst5pHFHPUa%2FAH9btc0SxhVk0rKzobu8xBu%2BQcNPONrjR%2BUd0VJC8hMem7%2BNHjIxOFfEEBFlS6RkQKFfsCtet2WmR0Va3xrlVSdx6BELynoHBAclh0Ut%2FXSvH%2BW2S2m0%2FG1HW0BBean9iHLM9q5tvL1qnFErZIqMWMpgOBMjyBqktJB92FjZ&X-Amz-Signature=eac0fb4bd681e8ffe4eee6d57fddd43cc77cef4e0bbd3768e2e4394e3894e545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
