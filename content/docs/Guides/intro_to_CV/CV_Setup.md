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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MMLQPBU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCHhvHHUiTeg8waM3MpbE4Dwrr0PbBVcneQQeVlupOWJgIhAJ6LUq4pUStD8fl%2F%2BGNI4oQNlLVW%2B45BDGuv7rP%2B%2BFFmKv8DCBgQABoMNjM3NDIzMTgzODA1Igy%2FY%2B8bbyG%2FRxOBu1Iq3AMT3dEPoEacp31DeFIzovND1yTZTjFC0dxSSkQbbumdeWpHoPEkbQcXOs6CfEfY2s53Ak1hCkoEw%2BGh6PJ8vtFT95iSSHGE26Hzm6rX%2FR2RilhAM1u23UAFim7A33ompiarpLmubcmxTP4L9kE3724gnA8PelAtXSia9w0Xbq28RzhAugdLvwnW0HYm4NhDnRUcJCbibCBnl9FMuXhuS6S6YzXywsk28JfUkFL0YQ8enxf4i71%2BqwHU9zZTO6mA1I5oZ%2FZ6c13VRWdj3lcGwcrh%2F9UVGO03Sm0eS8nhynbyVZow6RTupPQScUXdbvhRgaler4DKozQk4O4m6MQ8O9%2B8BR35KjE81%2BsUijgwn9o8Tokqpr6DyrN9MiFVjsrpElf72i956Wdc34PI%2BSuoeUcm8xCwGS1QKrnHDWFr7%2BOL4Lx1hGCjMWGfnEn7hfjZkHOx2snqwcd8XgVhPDc%2B3KC2A%2BCGW3cXkmJrwS53j9Loo%2FhvoQVnLJYP6UY69RYMPnvGX5www9y6TjpMLE2YVT%2FufrI%2FCTD4BclZRvFU3Zh8Q0V%2F8hjlnmP6mYkZ19fhLR5hsqf7V9vLyxiNFHoe%2FQsmig1YV1Gny6q9uGx5jY7%2FtBW2%2F46zstQnR%2FA6ozDvn%2FzBBjqkAZ9lBKgNV4ztm%2Fc4s9r4UEOnctm5D3%2Fq8Eovh6bAeAsFO0ZbOm46H%2BRH9BlFzOyju8xyqzGwKXIdDmYzsNH8tzioCL3bxU1eHs8zFR5ZGuJHfslx5w2YsN8pBoO6fMI07sGoRNmTYUTqHTMGUhT1f1Mi3jXqYmDi1dsIb8sjOHSbf56ohBPQRSE1AIkrXMxIPvJz%2B8woRgSUl2TQkAYYRyeZHvWe&X-Amz-Signature=128dcdb5add14d538434135a4884b1f46b8ef33cd32f6a621ec0370fb9af0502&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AZUMYK%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDdvQDqtSLLp9gRhpz%2FlZU5zqGhTsQ3v7no9V%2F6XtsuNgIhAIUihiz8C2bJemY0j1H5UZmDb03HvrWUM%2BEv2i1lYMFhKv8DCBYQABoMNjM3NDIzMTgzODA1Igx%2BaqsweqJfKCsQwakq3AMkponJ5uIJu2YBMgcshAff6AIt2k%2BdeIFAHm%2FjSmz%2BdN2BFnuwAoo%2FrWE3zTvjKIuZwJ1T5eVa1VCLkZmPqdNxywjj5%2FKNEeixBfXPmkr8du0Z715C2q3hBD61EogKnuXx6QJSGBHZPm5TthV%2BfHg4TWe3KXkrtwE6kfkhm68RQeqCXRUgCuty95lpL0lD%2B3NFUyra%2FHnnqaJPQOmqYZXnROigPCFoeF%2BivaHIWxhGap5DJlFXXZS0Ha0FYgZgoNUwZ1E2zRqEbAKANd8HegaQi7fqqCAi4ghpBBa1rEBHyyICXNvCdnhB2mHL5peFi56sFtoq1IijFXC8QKf5KRYQpgNUvOn9wFtV0WsW%2FXPAZj%2FUhQ%2BDqyLea5FLsiaG%2BegaalLFq7i%2F%2F94sraUeBB0KtrXvBkB0MkK4WPO2sRjMAVAYWOrBc96B6bj4spiI1p8DVdD0zVffZST45lyBo0EZTcW80QaW3l%2Bvk27SAUpfdkfXIrQCs%2BHEsRYnopt1OA3dcGsLI8k8AHf2XWGIFcvv5iSyTrLMgcIueJGdQYUH8GXhmGrwgrRA%2BRZvWeqQJ1Mic%2F6qB7oaZ8%2F%2BKdU1pxXE2J5WFPvIWIG36SV%2FwMo8L6hJcU7G3FDNx8xW8zDL5vvBBjqkAShpvyHZJ3s1p5kPTS3wdkxJJwVp3LfOzKawLJDgdhuiNuVXofkh%2FxBpFIl4h4UJuj3cgWAxY3mn%2FHk2NMM1%2FYG47MpvYWM8jhj6AmiEXw3kwizG1Xif05qmVKO9dZZYqNbE7dS0sYtGAaNPH6%2Fp9Mt%2BwdUPZp4IFVS4X7dkKmCmcGRSYxHzSY4gQpSEuNMiSUGD%2FRiGzfFC29sW5YxIMS6kAe9%2B&X-Amz-Signature=ae46a0ed177e14278fb661928b41a23ccf934cb195e566a55564c236f4a7bd76&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
