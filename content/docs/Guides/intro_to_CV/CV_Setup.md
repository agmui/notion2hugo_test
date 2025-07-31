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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE7FJHTR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzHmA4AkeBD5X2i%2FQr%2B3aRoIP4UcxeC4EfBHZ%2FzDb8GAIhALSgp6YFUGRwXIFwAixNjHWMqawos27fiOv4ji1lneRnKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3%2B6oNVlJmPDtWyE0q3AMNc1O6H7aypJ7wgr%2BwdBtTGLH44esyEjAG8IMosywdbwPLv2mC55k%2BYK8LpVa6vHrNpwpUZ0Z2CAPDQV1SVhN09zN2PBPEsDzkUGLU2wjyRgPbMwKDBfy0T427vn8zkygmwW93otmNIg7Sd917ZtcO1u7TBNHEd76L0FsqWuup5WjQuNQNrOHqiuINtv1v8r985GmH%2FefSCJ7PrFx9P%2Fncy%2BRdqDOjk8L6PfAPnMku%2FYQ1O4Z2WuRVBWtlX7N9eDF%2BiG1tYZtn1noARm1sDxYEnlsU0HXokC7rT2fD4DIsc6iN%2BIcyagLjLV2oPmwBLjfianzUOqMOFoMugozz1FanaNhYVbcim8hJMUDO1brEZN%2FPWSkxxe2POrZRQ9H%2F0qOanQxrFv9s3Mq7HdUePR6sj%2BQv1mWpu6vMSe9kr1CY9q598ZrjnEdZAZBUWwx2c30bJgTce9%2FO%2FL8SIBEhOWcR3HgNVwKR%2F1clfDu9ysgoRLWk8J0KiPdcsTTfldV8HACPKFyCckWdbtTsR9JIVnm99UCawoiLd21oKwf23CnTCW9sMFM4BWdQFjS%2FTfQIsMg7ZMF37KUWwe%2B3D13%2BfbR4umGYuX9Fb9TbsfrspRmoN08NT4L1ZBmszpPeizCxxq3EBjqkATKK3bYKq1c3ocqbxCRu8pDxALaVPSbLn%2B6%2B9aPbz2K8FI9ZT6hAG3bT9FBuA5QK5VMWPFRD%2BsFKeppXrADhsx8OkBeELlDlvJg8ReBkb4p5ijsmY7Z683%2FRxUoWDOPnU1fZLd9K8d78CTrrGiVKde3xCLYYH38uDdpMtRT0zRvCOSCVcc7%2Fh0zDcchN5M1Ljog5A22lv9pfAqOQTlGQtPERrd2J&X-Amz-Signature=e766a4005045eac54f7200217eb7d820d7e7155c9e7b6a1bdde3511a3473018c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSGZWOR7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrdxblD9EsdAfgVI%2BF62bXC7GqcerevhCsalVXwH%2B7RAiEA86IXnraDOivmaA0UBF%2BnCS53MzkdanGneQ3opCZr%2BvgqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2znLmeiNWgl9uFVircA6DL58t9BWQY4nnRr7luuDmoq5IgvWhQ%2BXOiruK9gckH95esbgUlQGCh5JjotIbvrCNqj5NIQuUaNhFO7JBZirUdtlmucUggExrT%2FddX8i15lejpj6I%2FYyYebVzCT9RkJDj%2Fkt57jTHKX1D5V3eeYF6h8B2sT96KVCw83TsZM6MgRBii6GS5WEQRfw3DWIqcIvWF1xHqe3%2BSkbfazsduZNIsrVzKTfPVHCP3SxKM1F9dEbfZipYWmn%2Fyn2YKzP%2BTH15eJBFdQAAdRHcMi%2Bl6sJyaIUIZuw3%2BZDDqknRNoWL1kujMqcAXMVTteSJtpEEvFqdp7kfM0W%2FXkf69U3CaSKxZLtMqexUCEiIFnk5NLrMjobcgtYvzW3zyCdn3nYUu8vgaQcg7XEbeNRaqRyqwRywWoT4AHh7u%2F619wsftZm7UXve6O1v1DTuFc6dnRjAIEfkj2Dc28nevBtl1UInsMNjC9gyWVK2HAQen1Wz4D6Pp0PY83m5Tyrsxr5%2Fnjn2mjLn4ooFWXLFRm3%2BgBvrd5NxxHS1X0NhKVt9ACTB6RkEnT6Ep%2BOV%2BGgQZxBM9HQaDLyRH5Ge31kuiW4mr%2FiAF7z4eN7UYBx0IVKbCGSQWaAEp%2Fx1WUUxHKqEszelpMIHGrcQGOqUBSAMTZfotU2N0m3dJOvbDlh%2BeG61XnzUnyAdKU6ws8I%2FRatbIE7vJn%2BMPjfyidjzOf3aP%2Blhpm3adPBrKclm%2FLmLsjVvQObx6bQR2Mzl5F2S08GF0sMVaAp0EydnNcfNnRWTIWE7PgiHaLMZpQoEtKjhTSMx1OahegtUEvRi63elHD8%2BcdPGq3DJQbAJlYs6bXFZ0VpMi1VSVYaDgI6kQIrYOhkUk&X-Amz-Signature=2a6a88b4811115f9209a3103491ac2741baf5e6dbf8da356653fe27da60a62d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
