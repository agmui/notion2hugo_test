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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PSXTAPI%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIBb6C9vTWEbPLWQUiYUOAXODL%2BnUvIeFQ6CmucJU0GSUAiEAgBarX%2BrEXKppoE90lMPMImEg9VX4sdWc8TISQrp0NnQqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaxfQBpb8UMVDIJsircAyZbBDqcxrAe5vAp7foKuDz6BhUqabY3gLgkqIVpkqJ1EwrSRD%2BZMItzrTZxYCQT6W0lEDDqT1171j6ghPTZeZ9lM%2FH3xLwBdeRyp87tpb46tB9UMGN7RiD6Eay9oH2d%2B0giLJiIpWhzvSguU9aM8Y0UOx%2BmO6egtZHghJ0A0km8H03olnOQau32HbAZiDNPoQvN4%2BA5jdbc6ZbCd0roj4Bvg4dcvmcNZ5LWBCY6lrlUblG9vHGIqBOIWtOILEhuEPKtqu9%2FwlP6bVzT30v47JsyKyEH3oeVseChTfCkmo9rt0rIamZ4JhFu4ZV17ZQ0EiZuo1uyFwy%2FOhc5pmhJ3%2FQtfOwRK48xgPDNYxrepn5%2FsoMtxobCHMa2P6XwiIEyWTVKAQ5EZuEq4QeDwQpCdU8klAMKyBvdk7HSgcoIk93Z%2FECUgSi7cyhAkhfmWAmHjuMSlIDNzVEYR4VfLQNLQkrYjsQGhDpds6BMnsB0pbJLG6ZgPaEmXhjzHsv6qouu8vsfjjF2XYJFaPWncAYidVHo3VEcfe3107Tu4tWDjsryZYSdZP45A8SwijSf7q0J%2FIEFDWBPg9muuzmH%2BjtvE3QpT7j%2FzfDKTtWr4i7apM8Sj%2Bc4opkGXnwMzW3XMLGS1L0GOqUBhXuWqXFRlNeZyiB%2FpaRuuUqyZsiH1cAOZdIwHcRa7CX5W0tOubgfIf4x2VVlX3cyAKgvaGf2cHH6qL4%2BNNdBaTARJppMxzWBYR6ZBWoxsK9lJajb9g043wUEHYF41KChC0sRebPgVWdyHf5PlUMc%2BnPGrLzExW%2BVj9KkZ4Q1X25l5yu8pVxFumXAi7F3CnmEtfdXHQkZaOyvT9Jem%2BnGxvWQgV18&X-Amz-Signature=c15abf87454c039320a4825ac06ec56d8eabe98a2cf185eb544b5671f8fb8b44&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ETEFFG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIF0cNUXBhDgI9qgXPzN7iJeHYO7oZkhM%2FRJ26jRtbpmpAiEA%2FertEqGdz3XV7mV7h91hGYugNZSi8GuSmvkNfzGwbYYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZZA3rqgakkrZmYNSrcA%2BMbcPz%2BEWFZMnnc9H72dKkULsVWYvbSwHQ8PnuQkpcA2d%2F9hiUH8uhqqMk%2BIwkKLa%2B3hd0tw9a4ADLH%2BHgWvEqj789kPcgWBBvG8kqc3ExlN0HJpHQ9QHM46Yu2ZySzXQHOaWZbrGId2Kt%2BG%2BFaE3hQVjBoc%2BNHd3gMGS69nkqbxLaM5RxMvb0JBaaYcSAXL3TuF075plYzza6BdjLgGM2q4HrrBfPGI1WTvE0eUUVwN13PKo7km8WOYHJPslX8u4iOenxJ2PWG3GdIuolVM3lI2ELHSCYNb4%2B4MwSwUGYbyRWoYG6MUv9LEEW%2Fv9Soxrl1QAYZGVjWY8iIHAEG73cFWepmvjkuEj1o1O9JItyVLefXk3JRocxctHfz0HTIbYY56WASqI72SN1Ggq3W0sM2%2Bt1WrY8Zo1mah5IFLA7jrQL2x9D%2FmtLt8XOzQEvd2ycRmCa%2B%2BWcCaWSska7nUubyo8BJ19%2BB1L0i%2Fchpwr77Gm6ZU29BNlQx2brUAIPD8MG7vTnM2cYP20aNmph1dTr0JHerta3GwDspAQoKhawoP3KXKuQ%2Foe3bpKZRKceEmkkVrchvgAg%2FIeSg489uoeaap8ObMM2iU6zyGyWelqvZPDQigcKqGtT5sKTCMKWS1L0GOqUBGKB6g20VxGk8IGDNaQKG2xa73nYHmbJbwGz5CaBHctnzLOd%2Fgl2iPR6daOBsRyOY75xfPz7sf2dYUwlMZgEwzgmW5Ey59%2BGSj%2BdfZvFc3MRiDfUrW1KMvD8Y2g%2BTYC8LJAXAke0zTSEQTOpGVNCm37edHdvcr%2B93Zi7uvqifkTAXblpQmybnjeYxvtgzD1LrrGnVrZIvadNs3bvAGK8931pWEeFJ&X-Amz-Signature=952d7fb6c2b54dc37a80bca9f55afd2c0cf757da3e6babfcdbe4830e384d8999&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
