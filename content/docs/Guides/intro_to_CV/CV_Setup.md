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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QSCJVAH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCud770ILoeyInpe2kdlVlrb0z5d2jhPcp7yonvcUElcAIhAMAV29dBiodYX65SbeNRElNgJMsMm6UjpDHReItieLZyKv8DCC8QABoMNjM3NDIzMTgzODA1IgyksP7C3wnhaTt1qTsq3ANRwrmXb%2FeUkn%2FShMVGRfOTCNiX1ksMvaq1KMwnLWfAcjMJy6h4CS%2F7c%2FqCrIX%2BirrrLgGnrVG945qfI4YsYqNfHbjSNr18tz9UjYT0OWr5m%2BdU%2BY21QbsKVf%2B5oIF9X2nxmFY17EkH2LOnrcdZyZsTnUACPRDKMssSB1Om2l8ZHF%2FQDBOCqxbMSe7icnobc5UWyaZ8gxR5c4ylmxY%2FXEJx%2B3DKQr54stYWmumRYawAhoZLSDmKGiou%2Be0TnsHT07NfO5FnRuNez3yNlzMaEuvbVXm2%2BO64xD1IbYwx7g12LYritcJuoc0zwGnVTKhzz2KmhBQdOYX6wWZCRy%2FKJjhZPaB9wsiwWEEtQMus1yb%2FG7vPrjlzdneVCWAbk2r3DzMn34Cmwl0FdOS8w1PR4gxgPiKhoncYt3R1OPitnHVzZfjugYhswsADwLErbd3%2FFDDUam1a6TEd8W2rAWwsAqbAzdJYkGAWfMCBkNVISbgAmOnX61Sus9tGuotOKRe5dmfIi%2BVB91DLkIsLRE6UIKI9rMtmAEc6BlJCTKw9oA2y2CWquQ%2Fc1X0bio1qNpX0z0BPPhxLTxzPfOmkglBTLME4QkC5gKfO7UPvNr5p2LTo%2FGTaFaSDT%2FsfPWOY7DDY%2FuLABjqkAWr%2FCIfnn%2FoBvlHVhRIuCooVgJTxrFp2x8kPWk9oO4EFVHtgK7FbhufUILJ%2FrEUYS1PhqPSbMe1CLPmWcwU4Zlu5MDEjob6JQoNQPcNXMGGed0%2FSrc4qiUzM1eAHsa5K649GHyLlBy%2F4C5rTqDsAcFwnBQqN342MGZZiAGwVrXflzSyD4rjuBIHKR86mr4R1CBWdrhWXmPwE%2BPacBPoBKqXJ%2FRoK&X-Amz-Signature=2f74d9971303f785bcd0a19fe7516d7435fe8f65b7293a1c21d43ee473403d57&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EOB4KPX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgZChGXOilpqa6pNwr4mE3kgvW3NQB3HX16QHiI4iTXAiA5FH7I5rt7lxVSeedcPLtIAIMz8eSBKx21Ii8D17DMOyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMcAREJRhQK1DguH%2FSKtwDLtEhxqRp%2FBMw4WiubYnNQ1oXTBui%2BCAAqBX%2F7dPqT4hlMvQoOHlBlPhbMSfa0jIXlNKjE5yMvV9BXEHJJ3tlx1lGi0ONJyGy9gSMWenm4VC6sC5kBF%2BClLFVcGy1TyjDDOyGRLZ3JIzs7NURnhjpvkTPuJUVp5O95JAK9Quz7iN5jyQu6r%2B%2FiuVXLRfwj3WdTlEk9JvWrZgX2h3g02GvqR551iZrt1nstzqzcdcIqPACh60cw%2FMLRnm%2FA9NlaexkuoXYmoLbSiHAvgKQPu9jsAeg0Nl5DleMJHfZoOqpuMQ3mrqh9DTA3hM2ItKONTNztp2UDlGuJlRzzXPDL77%2FOg1xJuJZPnxpLKAO4En86YE28DTa6yyn9gqhOIFESv0c9NjQyhfXaloGCwD7vWwvoCFLSZXkWg%2B78ANlGonWxVEl3nfZkWesnnxQVzxGjrCyID2AZa%2F%2FosvcjQJk7uo%2F6KDuqWQEkkDU5y5b6s%2B8y4rLNQpkAPV7o38r21UweQBaZ8V2Zn7CLjw2YQAAbyf9LTDqlsxLLBGfOLDHiEA8iKb6%2B6LlW%2BVg1uJU0NHJOASYk6YzKM2YFwadl5v0ZcnrxWvObOzaCo%2Bx47mpWv42DGaW%2F85oKK9TnjMbFfIwtv%2FiwAY6pgG0IlKJKgQs9Z4OcOMHAFNqjHihPk4r8N4UGZnvY3UzXsXqRUd1eldNHDlxDAytkyx1S%2BstOg3Ve2iomyXSrASR0QZSu3CwjYb4ZIMXR07mZBb%2B0JwkhlnPxATjNCr6s00mAOx%2Fw8CxsQ%2B5CjUaXtJ6tdF6ibLDN3Imli4egw0wI718aCuCh0imBniud6%2F3Ou2NlXpZnG90XzXYcem4B1wbkaE9TadP&X-Amz-Signature=d2edbc8fede26f4d69724221fdedfa44a44665fe28655459222127cbebc1b04b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
