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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2N5F5C%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtzWRRqdy6LRxCHnY0BAEoE7ccPv6f8K6Oie9QgmmxRAiAWPVHciIkUXWdiORRL8Z47qiToM8btDL%2BsgoxsqtqB%2ByqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMygiLQJ1Dao4DUMDKtwDzzlugGEt9OjFuGVGb40mgThOCjPuHF%2BoPd3F7JWSrFpfjcmknvgcJWfo8FJoUNP5ggivfDeuPrjeG9jQ4TAi9Wlv0aRD9BrKSsN5wsIkkIk9szC37GHXON7mmePY7397QKCJs1fhgTps0%2FdRKn7J8J0W5iiPlFqqob12Z3sNasBMhrBJMUZloB4FcydyNdtk40PAG50ebGpoKy64r4xp7OhSvk9EXnPaFEvBC4eVa5OkWV8Drut7%2BbMFWbX5LHpI042WSrr9veqYTk2dJyNfktvkxwgazjnRHsAqpWrJoGydpoQPujzZ5Lqx3G4rteCJ3glM%2F%2BuehTMRxTOi3rPrMChmx0MU7dfzHu8MXXosRvYTSd2Tq127EYvzXj7knH7nZhyyZWkZ0heyS%2FMKEjMr7rxJw75stL17ZRP4dXEL1I3sededqDdjesIa%2BYwcOUD5DNK0usYQnaw1Snpezg34tbwg%2F9iopc8oMAhiogmUsO2%2BHRKKpc8ekocnjs849Pk0bL%2BH7QCz6uVAJvyrn8PosW2Po38x6Lr5GJc8ob%2FzkPRGBINJE1jys6ykqcesqOM7dlExgcNCFZ2vhtaQ8VMzSdDjZH7t6dRKWm%2FbogTB1f96XP5a%2BS84O57kU6EwlqO0wQY6pgFAVgckcq6KlQzJJryEtnkDvKuD%2FjoF8NpDmf1dtHH0rLdZAIXvZ3fl0FYmxI80hwk%2BPmy6Dr1Tv0pnk5Gtm6bj8owFvT78bf6mPbXTIbz%2B45w4TBNS%2BnXL11eCYak8kvZ%2B2J601BQBbW0ksJZiL4tOxHiRxPtq6psfvqlPjlp68nevzpiAL2oLy9rZTIjFPPcm1VpbYiM6H1dNJGriaHv0wPmnjWbI&X-Amz-Signature=805c3535bd8e826099009803af40327c830ec2882b18bccf9e531573f381e71e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633PZW5PN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQ2xNe8a0l6d0WFrV0I8%2BPk5Hi%2B85YpJfc97KHSgctzAiEAy1bZWmLVIcE%2B7YLN4De1cq1N1c%2F%2BYP7iACFUINl0ZmwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBt%2FLwdtO4%2Fo6zRF9CrcAxXRzc80UFIbRNk%2FtzgDQMFQG%2FB1Qy%2FT8mKAGb%2BQhp%2F%2F6wmXrE%2Fk1yJNLMyt1mH3%2FuBxSb12CpRSJLaO%2BmfQUvxBlg52UNxlytD5ZQcxU5WKv4QpS8RqnUmWJG%2B%2BDJUhGK6ExYvzZugfDxk2Ske6wxzKR91C%2BD5csltDb6NKLwmtx3XQk3jdZyzYYEz03k8Hlsn%2FL%2FFDaUonrenBiOPhnj9PnPiqWOftRFrX%2FucSW5GlOG1fEjCPaYCvwysUzJh2E1cdWpcUVzYAGVB9fJU43JXme40H5Gs6rNHX4tFeDyt6qZYK5P%2BZWE5a1mumv55R%2FOUPnR3ElWU%2B1tThaFWhIjAAss6JzExnW%2ByVXWj8%2FjUVcskxnm1FUvPFK%2BHkhQcVTcRv2uVVSuhnePlHjL6ST7thAxC%2BoEYJxlFyvQYulFej2XtPnXp%2BxqKYaqkPV598f6J949FFsDqaXsEqEwhBLjnTDmdEddEJOcHtcUSej1OrqiRFvdufbEiowdIMYMa2E2wdzPOazlQ0YbRWNc1eJ2BM15uM0kPtp2NJJJCsH%2F3wqXjqs%2BimjKBd1tn6VhJ%2FQa6h0uRP4yZ9%2BDelQtgzGSZbcUO0lyIc%2BxTEj%2FimMp%2BXv%2FPdrpabUv2T1Oh2MOGitMEGOqUBgUKBLrvEz%2BBbm70Ert5eG%2FV6GBbK7wln5wi1BxfYyaGibBt3%2BQ2Upqo0fbSKYSNaXRcWWv%2BWIoEcs36C3VU1bAPGaJAvqJtREHj4nEpaY1UK1HddrpXdtdgaaRQH%2BsHMTRglhh31NopWILPMNVNh70Vk%2Fby5eq0iJrQA6sonQlgXR8EsLgxqRgHqA69YADzz9J7CS5AtNQGSgWBNMsxg%2FYUll%2FDF&X-Amz-Signature=a69fa10b6bb10c23d4f427de0e3e52eb060c36cd10f4dc774d5ebe60d5a85bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
