---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJN7MZQG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQClmZAmZown9lv78Uji4%2B9bLHPARvoWomEu3VgU3Gxl9wIgfLdFbF12E810fY9P7cr9kaBcxvNUlSwXFpim6di0ticq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAOJt3FuKpvBVjEaWCrcA3lS5kYq%2BFvuVgsWKdA8%2FIs28rKryQhr0QkuyGWMgXdsCyh1H%2FqL0CcFo%2BNEiMIUe5Af2HPW4NNox24Zn478%2FS4%2Bv%2B5nEmUux5ZchjGKt%2FXwtFlSM0XpYh9Rjne9B5u2vy1NWrkUR4hEX6Qj1oqVKdoRecLFU0AljYAi3xbz4t74Y%2B7LMfSk%2B2hr6c6uDjEnnSmSD%2FfwLq9cG1xw7GCYxHwoVOdhWTLtxiSFU3e%2F9%2FplbXy8ihIIfeWLrXFAteVeWtjhEcX3fX%2FgDd8ok%2BR6MBBedm5zLtljIXS9ldVbZiN8UTKki2olG%2FY0N3Ke8%2B5mB4xaLhQYJXAJJo0nzXSe9bJ52ZowP7yd2N8yzrk4%2BFM5WAtXQYAPEmM7G7UA%2Ftrx7oHCzS%2BcF5vw5ZESMLFRjSAAvjcITB7Jr3MyEX4jtJCWUXOLyDxuH2H4%2Fi%2FP%2BEhVnvULDv6Tolih2ujBJcB0T5gV5NwR306o46pdvDvn2P5tRIpTEKSCFN1qjd8CWgQ4mt6MddExyIJB82EKH7N%2FzvgzbkpXuwrq7YpK3aEP%2FPvl7ewhsjuCqsnkqg8wqDdZglS%2BFvyVIu0CZkorxsrhruT07Yw27CWn2OsFdBBERsHyV2hAEIHW%2Fd62HtqpMMCLhcIGOqUBivbQmVgDeTKAygQbOHE0%2F%2FpMhFph5%2Beh8tJ5Ik%2FKOsTlIml7m81aqwTsNv2Ssl1bb5DUG3Xhz%2FnXpk%2BX5zxLjJYjSkEI0doNNbHmpbN%2Fws0vdp%2B2Lqc%2Bexx5rDGfzNKAT%2BvsNqJwLkbnXaAtFvZDSK4xH3JhejYqovVnnn87QfB2GhtfSw%2BzR1PMUFM0l2uz2amvUrJAnOY0UPRV36xkhZfQk20B&X-Amz-Signature=d1918bd6620e5efbce503e9d29d559199d68910a6952df250b883583200001d7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJN7MZQG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQClmZAmZown9lv78Uji4%2B9bLHPARvoWomEu3VgU3Gxl9wIgfLdFbF12E810fY9P7cr9kaBcxvNUlSwXFpim6di0ticq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAOJt3FuKpvBVjEaWCrcA3lS5kYq%2BFvuVgsWKdA8%2FIs28rKryQhr0QkuyGWMgXdsCyh1H%2FqL0CcFo%2BNEiMIUe5Af2HPW4NNox24Zn478%2FS4%2Bv%2B5nEmUux5ZchjGKt%2FXwtFlSM0XpYh9Rjne9B5u2vy1NWrkUR4hEX6Qj1oqVKdoRecLFU0AljYAi3xbz4t74Y%2B7LMfSk%2B2hr6c6uDjEnnSmSD%2FfwLq9cG1xw7GCYxHwoVOdhWTLtxiSFU3e%2F9%2FplbXy8ihIIfeWLrXFAteVeWtjhEcX3fX%2FgDd8ok%2BR6MBBedm5zLtljIXS9ldVbZiN8UTKki2olG%2FY0N3Ke8%2B5mB4xaLhQYJXAJJo0nzXSe9bJ52ZowP7yd2N8yzrk4%2BFM5WAtXQYAPEmM7G7UA%2Ftrx7oHCzS%2BcF5vw5ZESMLFRjSAAvjcITB7Jr3MyEX4jtJCWUXOLyDxuH2H4%2Fi%2FP%2BEhVnvULDv6Tolih2ujBJcB0T5gV5NwR306o46pdvDvn2P5tRIpTEKSCFN1qjd8CWgQ4mt6MddExyIJB82EKH7N%2FzvgzbkpXuwrq7YpK3aEP%2FPvl7ewhsjuCqsnkqg8wqDdZglS%2BFvyVIu0CZkorxsrhruT07Yw27CWn2OsFdBBERsHyV2hAEIHW%2Fd62HtqpMMCLhcIGOqUBivbQmVgDeTKAygQbOHE0%2F%2FpMhFph5%2Beh8tJ5Ik%2FKOsTlIml7m81aqwTsNv2Ssl1bb5DUG3Xhz%2FnXpk%2BX5zxLjJYjSkEI0doNNbHmpbN%2Fws0vdp%2B2Lqc%2Bexx5rDGfzNKAT%2BvsNqJwLkbnXaAtFvZDSK4xH3JhejYqovVnnn87QfB2GhtfSw%2BzR1PMUFM0l2uz2amvUrJAnOY0UPRV36xkhZfQk20B&X-Amz-Signature=2528ac4c52153416e9838f6b1d120fedcd316fe1e229ee05cb2f52f4c2aea5cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJN7MZQG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQClmZAmZown9lv78Uji4%2B9bLHPARvoWomEu3VgU3Gxl9wIgfLdFbF12E810fY9P7cr9kaBcxvNUlSwXFpim6di0ticq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAOJt3FuKpvBVjEaWCrcA3lS5kYq%2BFvuVgsWKdA8%2FIs28rKryQhr0QkuyGWMgXdsCyh1H%2FqL0CcFo%2BNEiMIUe5Af2HPW4NNox24Zn478%2FS4%2Bv%2B5nEmUux5ZchjGKt%2FXwtFlSM0XpYh9Rjne9B5u2vy1NWrkUR4hEX6Qj1oqVKdoRecLFU0AljYAi3xbz4t74Y%2B7LMfSk%2B2hr6c6uDjEnnSmSD%2FfwLq9cG1xw7GCYxHwoVOdhWTLtxiSFU3e%2F9%2FplbXy8ihIIfeWLrXFAteVeWtjhEcX3fX%2FgDd8ok%2BR6MBBedm5zLtljIXS9ldVbZiN8UTKki2olG%2FY0N3Ke8%2B5mB4xaLhQYJXAJJo0nzXSe9bJ52ZowP7yd2N8yzrk4%2BFM5WAtXQYAPEmM7G7UA%2Ftrx7oHCzS%2BcF5vw5ZESMLFRjSAAvjcITB7Jr3MyEX4jtJCWUXOLyDxuH2H4%2Fi%2FP%2BEhVnvULDv6Tolih2ujBJcB0T5gV5NwR306o46pdvDvn2P5tRIpTEKSCFN1qjd8CWgQ4mt6MddExyIJB82EKH7N%2FzvgzbkpXuwrq7YpK3aEP%2FPvl7ewhsjuCqsnkqg8wqDdZglS%2BFvyVIu0CZkorxsrhruT07Yw27CWn2OsFdBBERsHyV2hAEIHW%2Fd62HtqpMMCLhcIGOqUBivbQmVgDeTKAygQbOHE0%2F%2FpMhFph5%2Beh8tJ5Ik%2FKOsTlIml7m81aqwTsNv2Ssl1bb5DUG3Xhz%2FnXpk%2BX5zxLjJYjSkEI0doNNbHmpbN%2Fws0vdp%2B2Lqc%2Bexx5rDGfzNKAT%2BvsNqJwLkbnXaAtFvZDSK4xH3JhejYqovVnnn87QfB2GhtfSw%2BzR1PMUFM0l2uz2amvUrJAnOY0UPRV36xkhZfQk20B&X-Amz-Signature=332e3842e727091efacdf9824796e4138f2798a40ad93179dd37bb8e7256c89d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMHYQWP4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIGVpxt0Xg2em%2BaMGJnBD3f5%2Beh%2Fv9eYirjK9XWqIzVBkAiEAuM8t4tvrsYdZVY6FXQkBl%2Fx32jg2SxsCkEI3F7tUJH0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ4v9xJUH99sMGwM%2FCrcAyJHCSjXN3jgPlYfv1eGjvap54jbnctaDy8xbJvcFNIxNDRedD4Ufsfh4lYh6nouJgqMSwN4WTH1QwxshFGtxSAiVFx2AoajI5ZdA8ANWGg75Eu7EOOBNGxTgwqAG8c2S4ub7jalecTAZJ74YXyLBvYpLQe1f1nukraCmtm4oIsAgHI7fvm6hv%2FN1Wn1weJWTnbl8SnOPUNeum8EF%2B36ovoO7KQsGcGj5iP6rmJ5LxL%2FkYeTnjGnalcqIqvgGHOr4KdQ%2F1fIt3sLh1magI31tiZvJIWlAy%2BNv2FLDLJvE9iGPdDJmboZi3Pr53XBYBe5l5XDrpcR7CO884IHZ26AZl3D1arqisU5pGo6rGLyjRR7o%2BScl5HEF%2B8Dabic9Qc9baJJ8uxIv8ZqwAi7d9gfMYQ9accHC%2B32F7B8T23MriwAJy6rO%2BfgLXDHiFsgKtD6BfPQRE0XRGF7UI62pPHAmtzbMpNtDqcD0I2L1cn%2BQn%2BsmCoe399fmVWhhhjxpfGcnM3ir%2BmXEeKcj8ddbSjfXxRQsqNAlHHWwMAl0LTdma1Me7hSyIvxrwqwxIECG5JhWSkpXfNEaAJoEituHmYGGQh6lf1r5xMpdqcC7KA6E5AiNh%2Bb7Djhi%2BedF6eBMKiLhcIGOqUB3ebKQ3bTqG0TgPCokPfvJi9X%2BqIaODy6CwyYR6FBv28iF6M8PmfJ%2Bkf4nHmT%2BjhjjazQ7qa800wbyopAMk3NaOOBIm700NZMLY7woD3HcUvTaRv%2B09%2FXst%2Fsh1eIp5SKfTaKE%2FEEOVT2t%2BkH8q%2FJggj0%2BU3nCHiaZFPksHfJtiT2CZpQ7xNOlppnxPq%2F7px9vfVBhe4pVInhq9NFSQrzMIYV50wQ&X-Amz-Signature=7897de40a639a401d2e656dd2b26558b34a815282645dff7a7899ddd7747250e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTRHHY4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCH1Ik%2FJUxiSk5nESTEdVYYVwR4mxOCCB%2BIehwakMwpNwIgFxF7q9CUMq7DaXm0p9RHXX4yCopH4%2B3uvh3xukhMQ5Iq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGlJnOwCqNCCE%2BniGyrcA%2BCoWxXD0mhHi9Ph%2FcKy%2FnHuzPIcFaZQBsLBAxPHF9MLhI1rj5P5DgFHWm%2Fx1WiOQPMVguI0pAz1eFHkXzaB5SBAfrf%2F%2BBbYId%2FTnBV%2FkWMmvGeJ2SHcwPZXZol44EKQgR6baKHHf0ilBWx6JsO0VZ9vPqyhW2Yxd3l0UZ%2FARNLPSstCpmAvjkiFRXrVo%2FHLj0MW9EJHcQXAaf0rwb8ytG2eCGoM7JpxW%2FOMWz6l3rgB5efuCoMNGnlEht1OnYfNoMIXKciFwcINR9DtKUNYtRysYbnFjuTeWf86JEwB8REDyGcOIY1a6J2BG9ErxLZ5Hg8eIQFmaK3a%2FlRxar%2F8PszjNx6fe9VARgABNOO2YF9VfU7239uVYKE%2B0X4deKg69sJXapKpHLTdBfKENcTrBGUZXSl5KMUM6dGwv4a5QOtELLIM0kmiK1EfInClOW%2BxZdWhdrdX88RhgdNlsmPCybT5FWp1l%2Fjxu0JMhMIoH%2BZlYiMYA6bYUlI%2FobVOlvjbL9P%2B6pwdSNEZ3QZJ1G35UmjZIY0JxyDcKxEd6arQjQ2VpKQ4bBD6o7o5Xe0ZqPNfnzZIunrB3cnaZUAvJ70s6VUSRjnF51WpwRdgKjMExE1lQbGxzo27Whiq77rOMMCKhcIGOqUBN4549neKLgw2S4fBIoYHrvbuGJ2REWWCVWJAWpLlyoymYlG9LFzd3HhQdt%2BwW9iKelNStq2E1X6igeyJXL9X3GT7SJ7%2F4Puyb0QkY4VvG6v5nMdVKArWlwVs5sGopXwsYvWjh7W7wn5e15Y5kGj0rZujyCN6oFKpJTPW1CcLjFOkd66%2BFA0jIIb0XP74HkHk0T3bef7Gp9phDOFdAkZqyu9YJsIq&X-Amz-Signature=2b6d3eeaf1cac368dd606eef9f6971cb850c2e964f1b8a07cf97978e1a9cd2b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJN7MZQG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQClmZAmZown9lv78Uji4%2B9bLHPARvoWomEu3VgU3Gxl9wIgfLdFbF12E810fY9P7cr9kaBcxvNUlSwXFpim6di0ticq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAOJt3FuKpvBVjEaWCrcA3lS5kYq%2BFvuVgsWKdA8%2FIs28rKryQhr0QkuyGWMgXdsCyh1H%2FqL0CcFo%2BNEiMIUe5Af2HPW4NNox24Zn478%2FS4%2Bv%2B5nEmUux5ZchjGKt%2FXwtFlSM0XpYh9Rjne9B5u2vy1NWrkUR4hEX6Qj1oqVKdoRecLFU0AljYAi3xbz4t74Y%2B7LMfSk%2B2hr6c6uDjEnnSmSD%2FfwLq9cG1xw7GCYxHwoVOdhWTLtxiSFU3e%2F9%2FplbXy8ihIIfeWLrXFAteVeWtjhEcX3fX%2FgDd8ok%2BR6MBBedm5zLtljIXS9ldVbZiN8UTKki2olG%2FY0N3Ke8%2B5mB4xaLhQYJXAJJo0nzXSe9bJ52ZowP7yd2N8yzrk4%2BFM5WAtXQYAPEmM7G7UA%2Ftrx7oHCzS%2BcF5vw5ZESMLFRjSAAvjcITB7Jr3MyEX4jtJCWUXOLyDxuH2H4%2Fi%2FP%2BEhVnvULDv6Tolih2ujBJcB0T5gV5NwR306o46pdvDvn2P5tRIpTEKSCFN1qjd8CWgQ4mt6MddExyIJB82EKH7N%2FzvgzbkpXuwrq7YpK3aEP%2FPvl7ewhsjuCqsnkqg8wqDdZglS%2BFvyVIu0CZkorxsrhruT07Yw27CWn2OsFdBBERsHyV2hAEIHW%2Fd62HtqpMMCLhcIGOqUBivbQmVgDeTKAygQbOHE0%2F%2FpMhFph5%2Beh8tJ5Ik%2FKOsTlIml7m81aqwTsNv2Ssl1bb5DUG3Xhz%2FnXpk%2BX5zxLjJYjSkEI0doNNbHmpbN%2Fws0vdp%2B2Lqc%2Bexx5rDGfzNKAT%2BvsNqJwLkbnXaAtFvZDSK4xH3JhejYqovVnnn87QfB2GhtfSw%2BzR1PMUFM0l2uz2amvUrJAnOY0UPRV36xkhZfQk20B&X-Amz-Signature=2dbbf7f71ac2b95b6193d2b5d841e3b1321ad6670fb1f6b87eab3cacfb057c83&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
