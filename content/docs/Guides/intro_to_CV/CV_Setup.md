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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ZYNWI6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDbp%2F6G0u%2Ff%2FmHnxoy509snqrmzYnhPcsEBk22LqWUc2QIhAITh2GA8Nj7%2BoJ3tm3bjq3DhJH9w1f7HHjlUpQ6aePTTKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTB9QiGdNxaz0HJ6cq3ANHLfzqOzIaBZe7Kbo3yU3RIFVgWaywb4Rqq%2FsIZ7vseIXkz4ZC%2FvkLeUOxJUgBQUjGbuvbIO5OcZDpjtwxbo2iWDEa2eMEBhbKM%2FmMwU2RB5A9uR9JKj8szK1c%2BuauCvfuHliS%2B5M9FlSDsyi%2Fk5tISDrMHU9Ld0UDY9AZjydwf8FtOYKm1tv6VkLfZG8Nkapzk1Z09ZnrWftHWPX%2BrmrLp2smQHEZk1T5LAn4d2pjgbsmRR2R2x37CYWCRvmTA%2FhzjH2aqD06mDJpVgdkLko8gy6SC3gP4NrgbTPNIq%2Ba%2FCt%2BEKo%2FQoeRKPEFZWEqjE%2BHo1Th90g5PAqbxJQQeB6gxmQj4OwyQiQtdPNQ5XXExUKi5klWVUU6XWz%2FIzZtvCGIH2Vg9ukKUjWvfwUgCbDw5mTF5AaodZ13KkSkLN8vImo8StjTQFsMo1zk3Cmh04h%2F6F6Cl3IDX5f%2F8NQATEIpFuDksJp%2FOanvL%2B36Vc%2FA2tqiSgohuvyAv2%2BA60C191esI63pg3l0F%2FGbr9g66ior97BhbS7IwYr2CBN679iLo4c0rQB%2FAw024Y7E2zQ%2F0dov99s5u289hBlcWjHl4u8OHggC0Tun5cKGjhOX40iaiWMH9G9Z7KodK29BWzDz14%2B%2BBjqkAW%2FScfeAEkCr7MVZsSOjg7fInV43hl0UEWBaMYXkxHbqFnbndn%2BqldNorJ4upZ%2BM6EcA0pElSM9VYdlEb7fHZ3NJuliT2X38A2CLJ5xN5zyZWjQUJVvIEdufRVYnxpjftPOpPVEqZX0pirXRsO0ylQ7AWR7BD%2FvzCHVOwL2RfEUKubq%2BWUE1VkRsQKH%2BfsxP4oaBho7%2F4ABgWlzkcUHq6GYnDraV&X-Amz-Signature=c013f40745bbcf6038d118ef5959518731b0f433b9cde3e3751689935fdd4a90&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF7KJF3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAbC8Co8ne6ikFdqeWbFAGyUDKQAsKkwjvfoJ6e9gGcWAiEArnB0k%2B6jsbwQuJAanKjwocRMwZ0WO8zocX9vo49FGo0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiOuKNWsRR2BHNyJCrcA3Mn%2FMH90Or8LLrreOG7CQDo8ZoB5P822%2B1zsBl2b6OeOk72sF9eKbyGAXmzAPHBrxFTOuFbyIAV5dwYbeh8I1gAuEZOIxCLFMxq%2BgqE6h7ZME4UqyjZocwVi25FNQy7SPCFVXkwS6pE9CsaY5r0lSpXD3DyQRivfjxjwohZApXTmqfwd0U3VuOsgT%2FrU744MIXA9hibKgKoQskseCxPzCky%2B2KqqH%2BFuCjDF%2FPNAwlNHI8d8Sxwtb6pYUfvBj%2B3Ytj2fKLz0zEqvq0z60ZNFvi6hG8trVPpz6POWec76rFjhR6JV%2BGcsDm%2FPsgdQzsW0g5%2BfJWIgljd7ZhsDhbQaxQXOHF92EnwetvVhcAypjYO5WJ3b9185lOhfPqMuvo4iZt3SIPwYfZE%2BV4TOv922IDvBaG9YF6539FLxEzRwxzay9ZMFw3cBCuNGL4JPPyrQd5WNBPTFyTtBwt0dkEGWxgARXdde0qyQxgtIWzuUg4QQGTi6vERjwv0%2B1%2BtMV1qHz0%2F9SwpM1Hg6iUp70MJPxZpaKsE5a8ZmbnWJc6t2XpROIaqV77FVCTGupcFG2nUrXOje2PMc7BxwxxxCi8o7OfqJ3JNZi%2BkT%2FaGgkk7rGzJUV8O2F7xUSALx%2BcpMP7Xj74GOqUBS7VbKdGx%2Fne7%2Bhi0r5OSUCsR8AxCvKOtMuTbvXnHmtcFdaEsWwQkpnmQeWz1pEiuA%2Be25ms9DDoYldJ5lrk6gM%2FDyG%2BxMMJxLtn54U89PXPHM2nqPxqLC5TneGj8rjEej%2BbI0S7NjpOxXK9xvbWhPNEJ1L1STAMziNDIhTKoGyuUAzRvaGJt7Oe7%2FibPuWFzOt%2FUdwybwdevPw%2FTlwe13wz5Zi7K&X-Amz-Signature=903ecb5de7b06f675162a249eb6f32427dcaf6916a5bb740e573ca5b174f3438&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
