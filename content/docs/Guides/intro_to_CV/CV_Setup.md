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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLQU37VK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID6MVFAKoTj9MuZYOxhENPhpTx2IyOPjsOolWp4PgkoFAiEA7PlNHgcxFVbI4ZbX2wjFIosWgcEYrJQ3MifU4YzwgKgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKcSHRhTuvPtM9c0uCrcA5OFRRsHf42pKjBdvioyHcZDdi%2FJw3tsVFdCPLpvRoWlAK7KGsqXGVPVL9FmsbYlumXEjgNSDBBbDe5dI6NsA3pmj6tV2AE%2FcQRYezIPNV%2BV%2F0w0gMVdEiX3c0Cv1o%2Bs3quSp%2FxLQdmo%2B3B1ScHdd9dvFmd2iWh0%2BmwpGVm8D87%2BsGUwX29Y47uyRn8MT1D974aak%2FXJZu74Lx%2BFcsVSLKTf3B19ZbNeIi%2BbbXTuYcmG%2BS4%2Fp6NjCEJq52DDY%2F%2BwzGey7aq9Vuv5iAlB29lx7xF9iWl3Ryc2Qp1IVTYfpvCgTmk4o8bjpJU6wAVlbbbGeyS2PF90fAIBaP7Yr%2FHQNS5bWVbh1umbTpG8xWlh1%2BckhK3F9OI3Jb7pj%2B9nE3c9tvsLG5KE1sSUZCnJ72LUSGn%2BjiD%2FlUXOrGfvdzUH9CJZegk4A3LedIsZ0TqVAdaWcau3dlY47vpxR4SsSBEYS%2F6zQhqnqI1u06f8bfkaX8iBOvnyRpVRrXtK5zYlP6sM8HZuvwkgghQhYI55pEg88dPJrL1LdAk9T5zt3Q5MRzVM%2BS%2B06u%2FTHNd3NlzZTBKl23f4JautL7ouARd2m2DB5ksv2NlochEJhROLkpRn01oBBS1w%2BVs5PrJVWu00MO6NnMMGOqUBoCfI3CPEd694vQYaOUDFpwZ4YJiW0QYjzhb5%2F%2Bjh31vnj1zsg2suHttkca5RKF7OHXceMMxJbf3T3rMZ2cPMk8%2F5nES5Gh%2BWiH48qwBJiJ5rehctgBHf0wNGMHynS3t%2BTPswmNB7jwFPb%2FocrpH0ol5d3NOmA5YeKTREwdmyaKZ7Q65coV63xhNt0ro0onVVdoAAvAfsSf%2FnfTBUZHJOZHf1IxVD&X-Amz-Signature=9e9e422f5d90b74d438a72720b4a3317041ad09e0f004653485ed8f37d454ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYYBB6ZQ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDEvQ2vDT8w3N6SJT%2BGUIkjwQLvc7RhFsrcatUjifDh6wIgEPVp5wEj6blbodqwBRKVL2pJyaB19dXfk3ZYiSYNOWAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDLG%2FTD3re44MWCcJoyrcA3PdiWh5TXLHui%2FaLc7qqroy8ABY9toyMLTG6%2B6h61ZBUcc4myJwLe0hghgW%2BC%2BtdkxrIpYXd2tCxLYToFC%2FJJP3UinivpwhifMUV2NusAjNcI896FMsMtPEZ4To523Fg2yQEbwPjotEBv8oLzzBXBzeLDKkUzvm4YqCa5HuR9I76xU%2F8kBdkMhv%2FA%2B1m8euiWYDHSDarWIYgmC8vNoLWZhRbxUOvWQrQoH4SwsD0oPVuK7EHPza76ZLwTuwJIHiKgNWhOXfAZLm1OUIinf0KkTFkQfIk%2BxakWZggW8CYUAcfBQMoroxg3CGQHNk8JUykpQGEMPoIqRenAR2ZH7ZsWbw269kfETuJCnzGBlSNdUvjZ4tqIaXfgw3D9a1Vt61pfmlyByqcM%2BcValox%2Fu9e8g%2BxIW8anbyj9ax2w0LoY7Z3qbrwP8A7LV2Hp48mGdz1g5mYDFXrDyXl4Df4CeNq%2BHnmOQG9jSbvE827zuXJjbs8NP9iLqVBBDqQ4Z8RPwH%2B3Ur%2BbmfMUtGZ2KomJBJZzgCdVGgfy36LW8d%2FsBqH4Gm9HHCiYqGopbHPm%2FezTIp%2FA8Ecc8iWsLTSDfj3lDT6xawpkY%2FL%2BfHwYi9WwiUF%2FqII992Dpi%2FzcRbyK93MO%2BNnMMGOqUBysetzEkZZVlasb5zZr3e6MYadqYMjCtJIzTe%2BSUbSwDVpE6zHPqzGV1b7YODoKX3YHOJnEkux%2B1x4Ib3M%2ByIjCgjOn2lIlihnCSXo04U5JeOxMwoPqfuIJYv0QtQyTrCKrzzz4nQWN0OYW0NDcm87o0Npt%2BCjg%2F86l67OQSBQ%2BifmVQS%2BsbWGvKnaLcSbaW5nwPU0mYgAr9YkuRd6FArNd72fq1Z&X-Amz-Signature=f16de8493f94dcafff8964a8b3e8f33a50c6410fac0345f0944d73f78faea8cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
