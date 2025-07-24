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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4BLRSGX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDpfWqCvKS4kwry7rtkAiXEkFxR402e3Oqak7Gwk75WfAIhAOQlcC59rlsUUyV4hB5v0DN8jIUwTK80gyyJLjsVsWGxKv8DCDYQABoMNjM3NDIzMTgzODA1IgwFav6AHQ0t1KSzDfkq3APOS3cm2gcl0zLfaGsjChds062QmHOD5nrmRO9bmxNAgdj7onCf5rqpBzNJHTWj%2FgGmU%2Fkzz18xDBGBYuHJBQhEa1CHPJyWQtw9hZtWUU1tgyvTeFSbNcoUW4h9fxZ6WIdo8lsCwNbCh53qakqftRrbmdLM3Lpb0LtiZsyEWXcx4d3dS1%2BWMGzeCP1GbjKkOpY%2B2FjUU8yl4Of56DxoGYVuq79TfyYJ%2BHvhY%2BO1HpSRT5Xm95DzhZCmRVAwaKIv9NXf74ekkO%2FcKHBWZZbH2wCFnOREHfVkI8UeLSS9RRvydIEhuENBExtiKWkjg%2Fv7tOVI0hVduOwT%2FMVVXKyozq4UIytLCuBjofGnDpvK44advMu7pvfmiaZyCbWGOwh1VTARWhDqjJQiu2W755VuI9hFxWJaWAAsUb8tf7J528yL4FAE1UNZDuoDWJADuepDQ%2BGMI7AxGBW11hERv9vSF7j5DO6vKN5CW2VNQZ7ePIbgV9uHK6qqdT8EFitAAIFNCCk9jk4EcJs8hm9zV4B6rkbSf2BMKkLz2e5dL7JT3QuXrEVi9%2FxKubYR4k5iDLZbpSaGFJhNfbUeUl%2FyoUVYpN5h%2BASWtjKp%2Fjhb1SG9nXw6Chcbbjy6rbW2m0FhfDCItYrEBjqkAWaADOP90BfazrHtQFWeezlZoC2kcPh6aPr8%2B1ZWYOk6x2ofGiIEreqk0YorAYCVVseVVPW2vtoMa6fMwcq%2Bp6fuQW2lOOBxc4oKnnPU77a3Gp39eB1Utupqgngkp%2FhFtGGhlldKGLf8BunjruzNvPpmteqZD0ERnaQbPlbL%2FY%2FbFgUtrTAEMl1AHapR29GA3ou%2BDrM23DAuKq4RNnYi%2BGEXIqI7&X-Amz-Signature=41fb4ae70a822123370dca8d5523117f84a724a9781ed623faf5f1f644235719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAAMSZW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCDimuuKanfBzFjx1ZQPBiVWyxlcYR7VDsWGOM5sGMeGgIgTOCp0L0KZ%2BkppFWa2VDQ3S1SIUaKPmqHuaus1VxVD%2Bkq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGo%2FT9Exuw5R7uv8zCrcA%2BeJeg1exhhVHFu7oHC%2BPJzgTNJzdtucEfHNuqf9S6r0cGSAojHt5YTjg%2FMOeSIlYnPARrY9mQBVrJNZhXQje%2FfpdijWXUZbOOJLdhhARH%2F6baNKcynBOD8CsYUeosd94N8aa9ycS7j%2FFyaWsfExJfiEbOXLfRrDt1fqxk4MEGmrKKmEH4w4qZYm2AXVcUkmjBnlmegLmp0t8EYrLgrpREqgP8O8QWKTsWuLKVmwzXGJyJdN5wuMlQ8nDsEvpbo8J1r%2BZyB%2F2fu1RwalzeZidKu5sMtjdesflFbti1zwPWOuTgwAYt2B5h0yawFAfjFh26bHy7MWhjEgGuIOCK7uTWEzr9lFD341CvTgSNJPzyue3051llG80EtmB6%2FVIf93D2mkqsNtE4tEW%2BucTVIOcy6cJjYdA3O8g%2Ff1FHvTyjcXkkcBvBN%2Bu0aiiKbs6LTIojxKb277%2BEYUZSw21BpGT1fH71doEh8jaFpagJ1j8WbGL%2B2vLxgNjtR7bjvesHMYno3lggN%2B76Lf5WioZaC%2Fy3KXYTNN%2BrF0Camh5h%2Fgz5M95cBCY4Ttjw1WAPBr4XUhlfhh24e3BBJWqefpSgokaqlciXxxTE%2BPGEebZiFk8qQuadsz8cbUUHTIVRqmMPW0isQGOqUB2y%2BaBGznnN4n4YU48TfbFYoRztk6IT5n%2FWM0XAS8vKQrjqqr%2FFEwicaVhHTtAKgOA6AgK6x53XA37v2qB5a3UyB8lJW9KWA1rRyNPrd2TsL6q%2Bg0YlUmlBcQjNMt71SalewPl2LK35UcFSC%2Bgy%2BvggOcWontLlcYYIhKResmOIeCjRULs3Z7pP3QQnVDwt6IOOlSxqcY39EzBLWIUrl2%2BgpF15%2Fn&X-Amz-Signature=88bcff1cdf602437eb012800eec4f16137a59f9820568eb8ec52478aa8fde899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
