---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJ2KKW7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDsEYv2wq%2F4buA92LkzHdMdPeMAfAUF97CTkR2TO5zjggIhAPgDmjd%2FIqHPEtFa2s%2BdNoNCzjOBQXcZVb8Y%2BEXx2FObKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyd%2FvPFJAerthPpnvoq3ANDj8jFX8uMrdfDtkZX%2FDoWaQgv34X7iEq%2F0DTqiW3KRijBVc1wQ2eqevqCt6TcpFq9tJZIR3AoJw3J7v0JWsi3iLDq9BOpJR2fd4TfV2o4O3nwFMilKVV5w9yERyhYOG7%2FC0a2H5XFYx3omfqevIi%2F6ty50hI0LjVD6w8%2BeJTQ%2Bfuv7w%2B6xQUBaRfdekfzo9%2BZRSSL2cMcw9UYzQsJXbqFnZYIYVPvNbwCfYU5U%2F%2B8Alh%2Fg2ZA%2B8uNj92ciwk%2F2SNLBlRBeWM3AJzjb0dQ9siWeS7ojGim4NQhAMqxZIhNG1FQVDR78uWuvX3%2FrNsslvRnY3X8EYT5nU%2BUh%2FdZQyGemKZCY9BUi0vqByweMZe2XY2GR5FXC%2BOGj%2B3wk1KED3G9LQoKrarRkTmJgdY4GZZvNhbQDSA3dsHR9OEmFhWa2HGV7D3EPhV%2F60y1vRIZzwQuW%2BhS5xmhphC8OyZgcyZk5ycS%2Ffwh0zG8FSW2N4Uc%2F4nTZggQAOvAprEEpqKwpNPRRR%2F%2BtRaS62x69RXVAOVraLwqvCJY1xPLxoMX3hgjb42PsZ3W7fflmtPPlPYlp3zV%2FAzi2FfOS424BCYG%2BHw8v7u7fl7B3j%2FLeQxrizjpSfGB0Pa10YtZpZQCljCYw%2BK%2FBjqkAcLaXmhBkx5knidFE04gRir8mWtkzjMJIHozSMN2%2BFCPqYablrNaD0CQ73Y5l25DsQQi6Pmc0yI8ArOx00Ap3LD7tH1Jl7aCxuEn%2F6GMXA5WbLBaBPnHIz%2B%2BG15ZelX7gLB4QbI85S0T5QvHeGxHC3ZtLEricQMeVvM%2FpVH2u6nKByZ21UOBUOQlJhmNJyh05cnN8Vdtr7XImMgZeW4p3eTYMLtU&X-Amz-Signature=4d79626fbc8d50ef441dfcc63b6007a82e19467ccf3129d860532f23c1c5255f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJ2KKW7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDsEYv2wq%2F4buA92LkzHdMdPeMAfAUF97CTkR2TO5zjggIhAPgDmjd%2FIqHPEtFa2s%2BdNoNCzjOBQXcZVb8Y%2BEXx2FObKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyd%2FvPFJAerthPpnvoq3ANDj8jFX8uMrdfDtkZX%2FDoWaQgv34X7iEq%2F0DTqiW3KRijBVc1wQ2eqevqCt6TcpFq9tJZIR3AoJw3J7v0JWsi3iLDq9BOpJR2fd4TfV2o4O3nwFMilKVV5w9yERyhYOG7%2FC0a2H5XFYx3omfqevIi%2F6ty50hI0LjVD6w8%2BeJTQ%2Bfuv7w%2B6xQUBaRfdekfzo9%2BZRSSL2cMcw9UYzQsJXbqFnZYIYVPvNbwCfYU5U%2F%2B8Alh%2Fg2ZA%2B8uNj92ciwk%2F2SNLBlRBeWM3AJzjb0dQ9siWeS7ojGim4NQhAMqxZIhNG1FQVDR78uWuvX3%2FrNsslvRnY3X8EYT5nU%2BUh%2FdZQyGemKZCY9BUi0vqByweMZe2XY2GR5FXC%2BOGj%2B3wk1KED3G9LQoKrarRkTmJgdY4GZZvNhbQDSA3dsHR9OEmFhWa2HGV7D3EPhV%2F60y1vRIZzwQuW%2BhS5xmhphC8OyZgcyZk5ycS%2Ffwh0zG8FSW2N4Uc%2F4nTZggQAOvAprEEpqKwpNPRRR%2F%2BtRaS62x69RXVAOVraLwqvCJY1xPLxoMX3hgjb42PsZ3W7fflmtPPlPYlp3zV%2FAzi2FfOS424BCYG%2BHw8v7u7fl7B3j%2FLeQxrizjpSfGB0Pa10YtZpZQCljCYw%2BK%2FBjqkAcLaXmhBkx5knidFE04gRir8mWtkzjMJIHozSMN2%2BFCPqYablrNaD0CQ73Y5l25DsQQi6Pmc0yI8ArOx00Ap3LD7tH1Jl7aCxuEn%2F6GMXA5WbLBaBPnHIz%2B%2BG15ZelX7gLB4QbI85S0T5QvHeGxHC3ZtLEricQMeVvM%2FpVH2u6nKByZ21UOBUOQlJhmNJyh05cnN8Vdtr7XImMgZeW4p3eTYMLtU&X-Amz-Signature=72e91b665ebf443ff4ba6e3b5aeca95862c1f05d2f100bafe4b17bb1ea352633&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNWQ5565%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICgQQgEygcxQDoPzIX2ewpZ9SR4UF4dvZmOLN2TBprurAiEAkc%2B6wMQTQZP8imT9lf4yzWHqCZy%2FpIRKrCOE9dZWM1cqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsOQwPaE7Cj%2FpFp3CrcAx7lKrmQ4wis9%2BC%2Bpp8V%2FTIqG1nLlilqUYxyk6yjr%2FG76m113vXwHu7tBQwTlGubqsvwDqQgNks4VOXAEb%2BHplecVLmIz05UmNWW%2F6e1mpCW8QVHf83XBRRk0bDw01M5iuIRNxjVtPhX704tPto2RSLZmkfXLmi5GWHNfu8JAZ5PVzcgsZfq%2FL28HI%2B1%2B8qLavtizF79%2BgSFCXTzxviyxlRDonyxxBn%2BFUE4Sg8njzPR6dcldS6hV1NuoreDwqEfJfYFIohHuXy6aqo%2FxjHffFwon%2FvIEVTXtKyCVyDOWHhFZtLqLhXgiHW9vGyrldopNncrL4%2FGC9vjGVL6QURfvrc4gB0oC3X5z0QUrb1fnku9lZwcnOA0kLB4Oju3xiYkN3M%2FZzcnRwfEvfzPqmxWbUF%2BJdcnxGUeakmZqZyNklhiKyPIrNSHjBwyBu1NXg77KDrHr5lIBRa17h1VeZ7B1cvPgyFudnqQYEhsx%2Fy7FBHs%2FuFVkgLvU1iKBNQJxXffW0FnK5CGwJ3IAz4ol9OYoOnvYIb2qj9lbClbE%2BgxUXk9srfrOj6Aahizz8tdA%2BXxvV%2BNQEReNHj%2B8Ls3WAMAmiYgwpCNOB48AjXrzEOgnWPA86V2b0lrqc6Y9IM5MNbD4r8GOqUB17tEnHJF10WNFwwmbl9tMHJeBrhrUrsOABSNVSA6Q2dm5mjauB8R%2FqR1rKG%2FSXc0CcjyS2Dx7D0Jr9JCWV6WsT2hut26zKn3Tdb4Apj1L%2BcJ8p5MlyzdM5Klr%2FFytOundHIZf7eM9Dimb5v3rwCd0ZtpdNROCmku0p8%2B6MzEjfxOsPhEmxxJcA0Y%2BIRgfE%2Fe88Rx2cBpf0qFEkoVdg0ulMN5BJ7O&X-Amz-Signature=831219372cc9d313a1d3a8ce238d8128c7f5d672111432ecccc495a6bd5ef3c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNXEYMVB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCPMq8N7bVT2qvEZrUvu3eoO%2BdSq2SLaJ1YCkzm0qxE9QIhAK4hNXDX9A0EjQ6lh%2FxJYW11YzCiNzMGkULSscTJ757vKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwozhQqCTcHzBA4Rwoq3AO7g1N2ZgRKxB35FqgfXHIApnO7yeVVRYTxrgoZR84eIytyhTxqRu%2BTyGikH9EuToI9gIO%2BpOijjZTOA3YD5XZ60p3qqyWHYH34wYfLAdkqXlw2nEmPqk5VGdtmg5Jtmxg7FtLHo%2BTuBRAT1LFlLBXs8DnJt3OFdHXy5Q0b2l%2FEm7Q%2Fb3PGd3ug49zSXA3Gmbfhr6S7Iet7e%2BxndIUMUD%2BCuo8hJxW627RoeaZGLKqeumRuZtRUmg6swyw3dYRGPn7Dq91upY0%2B3taZi%2FhiPCtN%2Bq1Bk3b2Alph6J11SMQZv5HoB869N9iDAOK9k5N8fKxfo1maLnnWyme5fHUFV9BYTxjtc%2FHW%2FW5%2BnAk3tNHr0rMdqDZNRk8n9JMYx6Sx0DzUIY5Atpl7MYvyDhb0z85u8heLQLn420Sb3W0iUbDPgckr0SuNfyXACn21r1P5DOj9P1%2F7Rko6MUR5Brwer48uo6ah%2FsegXR7xWWpVAxXdXP0VhaPCNlOH3enhRQ9nJJf%2F8Z3FjQ%2BI4Uton3hU5vcYtYyuWme3ikrtfz8SB3dQlZFLWVL5WntJvURf8%2BYwfQL1yfN8FtJIP2O3IgnelJLQJM1uGZjuXkDKiap9YO0bkK4jLpJznGjwllSJuzCtw%2BK%2FBjqkAQ%2F3i4X7BPy%2BfEjwtAUpXkLPMc2JIaZHJf8L5M3GKtdXVDWGS22RBINOrxLNLUwatsuWzshz7VbgjzWK6kO0xsGTHDh1y9dtwz60ppA6%2FiQDhzaNPZTpbVfU8uL50Qw8sRcTra4VKUCjoDRNUOthMH3xi2IAWsIF0UZ%2FDha2hdWCZtT%2FsA9KDZsPab2DVZyfF9Genx8IYPmlNSmMoOhSjJrBWcsg&X-Amz-Signature=6621635405ba528b15e47a8589176f5fce46da59a22c35f6c6c642171b6ec525&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJ2KKW7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDsEYv2wq%2F4buA92LkzHdMdPeMAfAUF97CTkR2TO5zjggIhAPgDmjd%2FIqHPEtFa2s%2BdNoNCzjOBQXcZVb8Y%2BEXx2FObKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyd%2FvPFJAerthPpnvoq3ANDj8jFX8uMrdfDtkZX%2FDoWaQgv34X7iEq%2F0DTqiW3KRijBVc1wQ2eqevqCt6TcpFq9tJZIR3AoJw3J7v0JWsi3iLDq9BOpJR2fd4TfV2o4O3nwFMilKVV5w9yERyhYOG7%2FC0a2H5XFYx3omfqevIi%2F6ty50hI0LjVD6w8%2BeJTQ%2Bfuv7w%2B6xQUBaRfdekfzo9%2BZRSSL2cMcw9UYzQsJXbqFnZYIYVPvNbwCfYU5U%2F%2B8Alh%2Fg2ZA%2B8uNj92ciwk%2F2SNLBlRBeWM3AJzjb0dQ9siWeS7ojGim4NQhAMqxZIhNG1FQVDR78uWuvX3%2FrNsslvRnY3X8EYT5nU%2BUh%2FdZQyGemKZCY9BUi0vqByweMZe2XY2GR5FXC%2BOGj%2B3wk1KED3G9LQoKrarRkTmJgdY4GZZvNhbQDSA3dsHR9OEmFhWa2HGV7D3EPhV%2F60y1vRIZzwQuW%2BhS5xmhphC8OyZgcyZk5ycS%2Ffwh0zG8FSW2N4Uc%2F4nTZggQAOvAprEEpqKwpNPRRR%2F%2BtRaS62x69RXVAOVraLwqvCJY1xPLxoMX3hgjb42PsZ3W7fflmtPPlPYlp3zV%2FAzi2FfOS424BCYG%2BHw8v7u7fl7B3j%2FLeQxrizjpSfGB0Pa10YtZpZQCljCYw%2BK%2FBjqkAcLaXmhBkx5knidFE04gRir8mWtkzjMJIHozSMN2%2BFCPqYablrNaD0CQ73Y5l25DsQQi6Pmc0yI8ArOx00Ap3LD7tH1Jl7aCxuEn%2F6GMXA5WbLBaBPnHIz%2B%2BG15ZelX7gLB4QbI85S0T5QvHeGxHC3ZtLEricQMeVvM%2FpVH2u6nKByZ21UOBUOQlJhmNJyh05cnN8Vdtr7XImMgZeW4p3eTYMLtU&X-Amz-Signature=1546726f90b8ff380475b60323db32dc1621ca1fbc53e27628dfbc77193b2b52&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
