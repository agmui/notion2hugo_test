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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWW7HLY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIESoOD9k78yYHc9aQIm6653e01x7Vnv6lSgm2ENBmNwoAiEAjrwMTioH1a0P1ErK25csnKJcPLLizGstxQojgOBb%2BTQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgtI1COBnx%2F4PcBFCrcA6xFWm6m3bhQj75rCznYj7uHFiY3l8m6bkgcSI0JHzzxhvMKQh1EhVjzJqDJvqz81%2FcQfnQJ1DSN3aGA7REC937f0nm8na%2FPOAiLE4rDN5t5MSd66RoehzQc%2BtRochZMcJ9NPkPu2NqsQskDQZbzV4yGjYblJ5oPwxylhP0PKrc2W9s3SPbxPVXDriJBOWJIFvn1IOJcO%2FjI9Kx8dArU3Ra69XQ5jc84MvdNWxbf25EjVCwEDseHJ7bEkw2RLnIMTNt0RBm8UuqmtBNmSTPhn7kYKozR2BgPYp%2Bo4tdnrp5XxQxiRve80YVwJSasgqz%2B1zTjb%2BDWh38JYd%2Fp29E9dgM4IjIfjve%2FC7TnfwoSDlD9p6KMV9oiZdp8dTPk6FYlmXETBpsmswq%2FckK7uV3LY4gAoD2S93LzSihqKiSw%2BrSwxVg5pkOp0F8UXWfQDgnL1ORKjgqp%2BaDYwJPKLTFX2DnZxkbVAhTB6t2%2FK%2FRq7QBjbEJYZv6rEU4NTgr%2BgOgVdPRCJB5B6zBnhczmwRGmyXHUQu%2FXZtKFtv0oPU8pnND9lrkp8dOUU7qV9bFOeJXenWln7tA3BkuQEGNbETQk1SfQ%2B8abUyAk%2FBUABmGpat8IuPIGxbZyPzKzN4SsMMuG%2FsAGOqUBuJJSsw%2FQ1rWkmxM3JsHFHUxv59sLlEQIeUTreQfJsQOnbMBjvwviRUMQjelyBtLxfUUmDBjSUEQLMSuqV5xfCr0UtJN52ZHyYOnQkzXQAQtEixymFbZEGCIGeD3Gr%2BCdpB28D%2BWMie%2FRrKhkL4WvbXwBAM5gZuL2aR4hLCfTstePA65jXQJ9wZx%2F5DNVzTbggpmErlcV7B8wtE6yDqv9q7UqgPYu&X-Amz-Signature=e33d6c6cbbe9827e2e934105f1be8e0e04a1128a7ec3e5eb7cde3465f2447613&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWW7HLY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIESoOD9k78yYHc9aQIm6653e01x7Vnv6lSgm2ENBmNwoAiEAjrwMTioH1a0P1ErK25csnKJcPLLizGstxQojgOBb%2BTQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgtI1COBnx%2F4PcBFCrcA6xFWm6m3bhQj75rCznYj7uHFiY3l8m6bkgcSI0JHzzxhvMKQh1EhVjzJqDJvqz81%2FcQfnQJ1DSN3aGA7REC937f0nm8na%2FPOAiLE4rDN5t5MSd66RoehzQc%2BtRochZMcJ9NPkPu2NqsQskDQZbzV4yGjYblJ5oPwxylhP0PKrc2W9s3SPbxPVXDriJBOWJIFvn1IOJcO%2FjI9Kx8dArU3Ra69XQ5jc84MvdNWxbf25EjVCwEDseHJ7bEkw2RLnIMTNt0RBm8UuqmtBNmSTPhn7kYKozR2BgPYp%2Bo4tdnrp5XxQxiRve80YVwJSasgqz%2B1zTjb%2BDWh38JYd%2Fp29E9dgM4IjIfjve%2FC7TnfwoSDlD9p6KMV9oiZdp8dTPk6FYlmXETBpsmswq%2FckK7uV3LY4gAoD2S93LzSihqKiSw%2BrSwxVg5pkOp0F8UXWfQDgnL1ORKjgqp%2BaDYwJPKLTFX2DnZxkbVAhTB6t2%2FK%2FRq7QBjbEJYZv6rEU4NTgr%2BgOgVdPRCJB5B6zBnhczmwRGmyXHUQu%2FXZtKFtv0oPU8pnND9lrkp8dOUU7qV9bFOeJXenWln7tA3BkuQEGNbETQk1SfQ%2B8abUyAk%2FBUABmGpat8IuPIGxbZyPzKzN4SsMMuG%2FsAGOqUBuJJSsw%2FQ1rWkmxM3JsHFHUxv59sLlEQIeUTreQfJsQOnbMBjvwviRUMQjelyBtLxfUUmDBjSUEQLMSuqV5xfCr0UtJN52ZHyYOnQkzXQAQtEixymFbZEGCIGeD3Gr%2BCdpB28D%2BWMie%2FRrKhkL4WvbXwBAM5gZuL2aR4hLCfTstePA65jXQJ9wZx%2F5DNVzTbggpmErlcV7B8wtE6yDqv9q7UqgPYu&X-Amz-Signature=7be53383c45825f06838f8774f3be546bb7e7bb1cb605747f43dac5076db3b19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWW7HLY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIESoOD9k78yYHc9aQIm6653e01x7Vnv6lSgm2ENBmNwoAiEAjrwMTioH1a0P1ErK25csnKJcPLLizGstxQojgOBb%2BTQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgtI1COBnx%2F4PcBFCrcA6xFWm6m3bhQj75rCznYj7uHFiY3l8m6bkgcSI0JHzzxhvMKQh1EhVjzJqDJvqz81%2FcQfnQJ1DSN3aGA7REC937f0nm8na%2FPOAiLE4rDN5t5MSd66RoehzQc%2BtRochZMcJ9NPkPu2NqsQskDQZbzV4yGjYblJ5oPwxylhP0PKrc2W9s3SPbxPVXDriJBOWJIFvn1IOJcO%2FjI9Kx8dArU3Ra69XQ5jc84MvdNWxbf25EjVCwEDseHJ7bEkw2RLnIMTNt0RBm8UuqmtBNmSTPhn7kYKozR2BgPYp%2Bo4tdnrp5XxQxiRve80YVwJSasgqz%2B1zTjb%2BDWh38JYd%2Fp29E9dgM4IjIfjve%2FC7TnfwoSDlD9p6KMV9oiZdp8dTPk6FYlmXETBpsmswq%2FckK7uV3LY4gAoD2S93LzSihqKiSw%2BrSwxVg5pkOp0F8UXWfQDgnL1ORKjgqp%2BaDYwJPKLTFX2DnZxkbVAhTB6t2%2FK%2FRq7QBjbEJYZv6rEU4NTgr%2BgOgVdPRCJB5B6zBnhczmwRGmyXHUQu%2FXZtKFtv0oPU8pnND9lrkp8dOUU7qV9bFOeJXenWln7tA3BkuQEGNbETQk1SfQ%2B8abUyAk%2FBUABmGpat8IuPIGxbZyPzKzN4SsMMuG%2FsAGOqUBuJJSsw%2FQ1rWkmxM3JsHFHUxv59sLlEQIeUTreQfJsQOnbMBjvwviRUMQjelyBtLxfUUmDBjSUEQLMSuqV5xfCr0UtJN52ZHyYOnQkzXQAQtEixymFbZEGCIGeD3Gr%2BCdpB28D%2BWMie%2FRrKhkL4WvbXwBAM5gZuL2aR4hLCfTstePA65jXQJ9wZx%2F5DNVzTbggpmErlcV7B8wtE6yDqv9q7UqgPYu&X-Amz-Signature=c9c4081aff492e8e6983d912471fd8359d2c97aa4e80a7d86005b43c05c70718&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WQ5CRB%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCZrwvXxvX%2FPFLw6G2c97lKcqNtFgrR6xIyhYM7qkxr%2BwIgM7cLYHLDg2A%2BsRQVctCyOm3w4GWmPVF08uSrhjfWdzsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6DNUlzKUSO79AhySrcAztEE9%2FMpsHQM8H09nLEoX%2BaxLcuv%2BNJXUYKQncSi8mtqfEevkK9wPp9nFdsaDxQ7wTaggV5uxiARe2IGu4WqwEI3BWNA5qFc41BxTiTGhDqvsXt6dy0GZzZBCaWbSqUNh12BHHgsYr3CtX9EuQXSZckKHZaNm0vnt0%2FyioYt%2FnkxhJRTejiqFe5P4jaNvG29u%2Fdax2%2B7mFdd1ZZ26vW61nZ1jiY6b%2FKCj%2FSSRKBRcOmo0GI4KrmV9BHd%2FYtfxROyNXNYejwgiPn%2FnoO0k8xBoz5ILL4D0ukTzBac95wE68bt0wA1kDn6AeYt1LJwmDCVtpYFdLblNaP42YeSCp2dy2oHQM4Mf5JkxuqtPpNhZ8xXAQvZRThRTNtqGH694KyeJd3x3hnFCSNEOR2jlt6WIhun6KjeC23%2Bv68KJPclBj6yMrD2WG%2B5nRnSaamhZTUt1VFYVhdA5t2ON%2FWn4SfA9aHzDxAg0XtvdJiCTvIOcwDnZL4b7Ln3Zt6JlFTKDyUN8ihoHqER%2F7rR356DbeVBNgwbwJ8oNi8r1MZOWkCnICl4A0KSylNyz%2BFLdKbJ2vFvC4Z2h%2BG2vu6e%2FejZB8nazmBjH%2FTDQT95j2yBfkxfVHnrKy5qJwzNCgncPmHML%2BG%2FsAGOqUBIkqDAuO2NZ9M1IUqJbC0%2FKbrBaGzcbcPNcg9KkAReT6ILaMbHh2vm5tAIr7bekpPr5oWtqHBZBrsRc78%2FU8h9TF4eQ9PD3gbRp3YOOJxxqU91nclN5TXA5patSvY1VBwG7BPcwwiO86AvyVDEZ0sgWQSKHTmCT4SUmOWUOyLuK9XAEdLs2Mtx6bRdGUJBNwN2Su5sBwOLHRf1xOvE34925CjRmiG&X-Amz-Signature=d9442f029458e2a44ec2ecf5fe93abcde906714485db9c13433a75a08c0fdb18&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUWUPGG%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFOtvrNQKx8NS%2BEDU7cDbnc8suzylsjHioKDxhb6cuT8AiB%2BJo0VBBi14FOYIwJzD3rupPaT4mqzqDkInH5NJJLakiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKzmkQPzGN5OgwEhNKtwDrsI3kWirXL71zLtUAZkfXqIRNy5DoKekES%2F6Bfkgvw690iUBN%2B9V1lDQvJdCTanO8PyUynPAxhs32nv5PbxpRLTowVIkZ%2FOZgO%2Fdxvb4M9djqDUCZcDxua%2FAkj6sdge4Xfx7lF8wXB4sqjdqnOqwv%2BgE2HAKvXGSEa9VESunlfK88i4dRgalUKYqUgN2JlatG8IhsTKhU434vt6Hxm7wDpce6uyo7vkRT%2BU5mKl6jbngv%2FBgW5YYwFSKgQjqsiCL2davz1j2U9%2Bv5YTWRiFwNunZO3fTGquzBZp6i4bb78U%2BrlddkfEbcOp5egEJIIqQYvELIoSgVOHD4eq9P0B%2FqI2WqrWY%2F660wiXUJdJ1EQj%2BgZgVzRYqXViyn1Z6KGMkQcxg1vwQGKW8MG89UBBPSvHWCRbhpe5Sv9T7l4WXtTmIOhC4PYpwSo9QkXbqIVA7wrghgbM6Vn9Mt9tdBa8FvN5uY7MlHchrCS83CgadrV6NHZc7slbJzWVxTpzXqltfLkY0bToxtN9mgSoZFXK2y9EiahfoAnd9Fx45%2F0%2BX1UuHYaslAEaiWvx1BAK0Ao0E0eoxOEjsUS0vqIND6zj98KDF77qjdCesCgydqbcYm7BGVWVcbB4B0pGsNN0wgof%2BwAY6pgEkdEJNBXc5C8A7Yl7QITJICfNzhFRuHTQ1a2F5FkXV6DhLi4C8vY2O%2BdBGZN%2BCs%2BLMfj9XiTFNEjuiLt0k1VvRXOz4leyl%2FmOpsTzAi%2F6%2B59OksJA6fWQCW1FZwhkCGWaDyaVZYqZFG2lY40CDEeAHw7Nu67Tpxnamv5IGPd6Q%2Fy867dPCZiJG6qMGKONNpPRCVyDF0iLJFpM6WRIWndmpkg1%2FgT3F&X-Amz-Signature=5ab3bd27ea02e3c214448f966a3b0b92e4509d3529a34e4c80da30460c13c555&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWW7HLY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIESoOD9k78yYHc9aQIm6653e01x7Vnv6lSgm2ENBmNwoAiEAjrwMTioH1a0P1ErK25csnKJcPLLizGstxQojgOBb%2BTQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgtI1COBnx%2F4PcBFCrcA6xFWm6m3bhQj75rCznYj7uHFiY3l8m6bkgcSI0JHzzxhvMKQh1EhVjzJqDJvqz81%2FcQfnQJ1DSN3aGA7REC937f0nm8na%2FPOAiLE4rDN5t5MSd66RoehzQc%2BtRochZMcJ9NPkPu2NqsQskDQZbzV4yGjYblJ5oPwxylhP0PKrc2W9s3SPbxPVXDriJBOWJIFvn1IOJcO%2FjI9Kx8dArU3Ra69XQ5jc84MvdNWxbf25EjVCwEDseHJ7bEkw2RLnIMTNt0RBm8UuqmtBNmSTPhn7kYKozR2BgPYp%2Bo4tdnrp5XxQxiRve80YVwJSasgqz%2B1zTjb%2BDWh38JYd%2Fp29E9dgM4IjIfjve%2FC7TnfwoSDlD9p6KMV9oiZdp8dTPk6FYlmXETBpsmswq%2FckK7uV3LY4gAoD2S93LzSihqKiSw%2BrSwxVg5pkOp0F8UXWfQDgnL1ORKjgqp%2BaDYwJPKLTFX2DnZxkbVAhTB6t2%2FK%2FRq7QBjbEJYZv6rEU4NTgr%2BgOgVdPRCJB5B6zBnhczmwRGmyXHUQu%2FXZtKFtv0oPU8pnND9lrkp8dOUU7qV9bFOeJXenWln7tA3BkuQEGNbETQk1SfQ%2B8abUyAk%2FBUABmGpat8IuPIGxbZyPzKzN4SsMMuG%2FsAGOqUBuJJSsw%2FQ1rWkmxM3JsHFHUxv59sLlEQIeUTreQfJsQOnbMBjvwviRUMQjelyBtLxfUUmDBjSUEQLMSuqV5xfCr0UtJN52ZHyYOnQkzXQAQtEixymFbZEGCIGeD3Gr%2BCdpB28D%2BWMie%2FRrKhkL4WvbXwBAM5gZuL2aR4hLCfTstePA65jXQJ9wZx%2F5DNVzTbggpmErlcV7B8wtE6yDqv9q7UqgPYu&X-Amz-Signature=e97f1a31ab87dc35b82c388980f059ca409e2d3bf0c031083a3af6bbdb0846e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
