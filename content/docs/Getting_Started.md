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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635NGVDLR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl4CqeMux2EeYcL4AuYx6Z%2BlAV8%2FTfbqbKa8AhWN3oUQIgScvcKHnQ1W5gRnzsBx7R%2FAy2VGi71Yw0omeGAlf1ZXcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwPbFOvZTpCLqL4DyrcA3hCiOqJ9Z5A0w78P5g12VWEy5h8CKOSz%2BFuGDh34t1cY5HretYAg9EJg6jW1G3zvEiEhLvpQ10x2wuUGv3jrM74ZQnJmjLenpr8NQgTQT%2FAhMM8IhfYuf%2B1O4CfANuUXEgN2dWBDK9AMNcnY4uNyjSI22SVuPc2cbUYV%2FWTOF900Q3eiDe7%2Feg740PsKdU3%2FzJiXUePaClg1E5qgkA0mCsCA1f1XrmBa4JPCUmMZAYQsGx8zU1EgVYo0RKICos1K5onUk28trqPgEHbYVrOyKq6gnkiiHeK7yZLYyU%2BQcn%2Fwp%2Bikotj7aEEOz00C11xgNTxyKVRsSAJ2cowMtAZT8%2FUZ5yTB0eFEZ4nAfCWRABrzc3oMnUrgVZCrEBsaCCSE1Fjxs3E%2BetbTpFUsmNBku5Ym%2F9nHniakee34KuCCJa1nKTLpKEf3m5Dx1vt%2FuJ%2BHseyXxiGH9DCiMKHvNpC33Hi0ydBqXU0xjP3TEYhntorP2N4OlYAX4SeG7h004Mgmsdh7UdR9ZiBYlReTHTv8pm%2FzRtKG2D0gZ2zQoPwScaUepyvmqQfhajcZP0bH%2FDu25sSOvSucg%2FPiLMONph1KdsAB5DKTb92cDi7rIwGwyGWNJ5bE%2Bov45Mo9c98MN6Lsb0GOqUBJPWfIw2Ly0oB0yGJ3dUDeV22gkk%2FO8prHQRYUu1HnTDbkAtR6Y1wuiGof%2BOM%2FAjD0NxmsiQ7Sr59ioY43%2BBtCG9MvBHbMlkVYX3wpJZZjVi%2BgBaJsp3f%2BmBXB6HST3Vf904kk30Wtud%2BRDda2KLH0loWe4GGpYvCEx8ghCKAHkPAP9MSoQ54kEroNEaDndvaJZvCEO22W2Fh9ToYtnvHAulfP002&X-Amz-Signature=e3a7fdbc290e1f97ad477deeeec94797341833bfc98b81d6e1967b1da4cb3be8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635NGVDLR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl4CqeMux2EeYcL4AuYx6Z%2BlAV8%2FTfbqbKa8AhWN3oUQIgScvcKHnQ1W5gRnzsBx7R%2FAy2VGi71Yw0omeGAlf1ZXcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwPbFOvZTpCLqL4DyrcA3hCiOqJ9Z5A0w78P5g12VWEy5h8CKOSz%2BFuGDh34t1cY5HretYAg9EJg6jW1G3zvEiEhLvpQ10x2wuUGv3jrM74ZQnJmjLenpr8NQgTQT%2FAhMM8IhfYuf%2B1O4CfANuUXEgN2dWBDK9AMNcnY4uNyjSI22SVuPc2cbUYV%2FWTOF900Q3eiDe7%2Feg740PsKdU3%2FzJiXUePaClg1E5qgkA0mCsCA1f1XrmBa4JPCUmMZAYQsGx8zU1EgVYo0RKICos1K5onUk28trqPgEHbYVrOyKq6gnkiiHeK7yZLYyU%2BQcn%2Fwp%2Bikotj7aEEOz00C11xgNTxyKVRsSAJ2cowMtAZT8%2FUZ5yTB0eFEZ4nAfCWRABrzc3oMnUrgVZCrEBsaCCSE1Fjxs3E%2BetbTpFUsmNBku5Ym%2F9nHniakee34KuCCJa1nKTLpKEf3m5Dx1vt%2FuJ%2BHseyXxiGH9DCiMKHvNpC33Hi0ydBqXU0xjP3TEYhntorP2N4OlYAX4SeG7h004Mgmsdh7UdR9ZiBYlReTHTv8pm%2FzRtKG2D0gZ2zQoPwScaUepyvmqQfhajcZP0bH%2FDu25sSOvSucg%2FPiLMONph1KdsAB5DKTb92cDi7rIwGwyGWNJ5bE%2Bov45Mo9c98MN6Lsb0GOqUBJPWfIw2Ly0oB0yGJ3dUDeV22gkk%2FO8prHQRYUu1HnTDbkAtR6Y1wuiGof%2BOM%2FAjD0NxmsiQ7Sr59ioY43%2BBtCG9MvBHbMlkVYX3wpJZZjVi%2BgBaJsp3f%2BmBXB6HST3Vf904kk30Wtud%2BRDda2KLH0loWe4GGpYvCEx8ghCKAHkPAP9MSoQ54kEroNEaDndvaJZvCEO22W2Fh9ToYtnvHAulfP002&X-Amz-Signature=48a26ad1faf5d17c285ff56d5bfd3e93346c155962739d37b9744ef8b21dcb72&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AHFCC5%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUc%2ByQ1lvy1iAZzp1JL807XTLwYmgXbTu1SDc17w2r9AiEAzuMElKZhWJ%2F2UqD6I0B4gDuNtXwd9wOeu2Cb3gZcRbwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9jD0X0gTT72UPTwircA3pLKG5eK88qXAYSbReFNdc5HnHoyQYtgm26HUf%2ByrGam%2BLgaHyRaLYdR9B20DnFu%2FBeR007ilg6KCBFmt%2FAmgfCHsJeD4qkaJu85jskGJDkeDHlG%2Bx4BcLSHlMN%2Bjjcjh8GhVYOF2LpYB6W8A0JSH4bMDAQc3Roy5JH2F6mF3DMRZS0gb7%2F%2BjaylKQaJ%2By3pmJwr0S52L8%2FPgRtXBS8RDngnqnHEt8Slv3bPUnhBTVuqKuoTfjIojVoSti7jTms3d6G%2BeMHwnkXRQfccg%2FUU7SQPZwNDBORB5SGIj2e%2BLI7WEqPP5CM%2B7JbgY7y6tiGFdV4dCdcU7vlo7JXCt7o0I6SobARixm5TgxOiKnrb8S3OZ2uNsgV8HQCWvOeOXA%2F2jlNZTStUtviiCMKkaIYZP4cAQ72b2EcCactVpVmSYHaRrMoDLf7CBQdk8xXyp3uikQSY6vw1kt%2BlBxbP2cwWvBO9ucB6viQgCpRAFWhJSsZBP1xbL2Koxff8QWaRt7De3PFbgqjPBUn1qEBM40xtlnJ5Isi9%2FsEWO4UujV08JkxInxdv%2F2IqAvulFGpoigoXvy5whflE18s718gk49%2BYYP9CJ9tqfBKzqcCB4gw0LJqVyQOmrSBUsJLVNCAMOOMsb0GOqUBrjAuTqtgsKai9m%2BNw6BFl8Gq2o36XpoZLfeZQGBFNKlp2xUyfqJP4PFStue5RPOExrqKkYKMmdrXQ8Ux5k%2FkECEFMZtv9jXHUifaYOxsrp8jexjneKkX5kFe1ibtiBP0Qq0OoexaiSYYsl1UCz%2B%2BkOkoQji5Uq0ZfSc1Ze5NjM%2BDbS5SqpgRnXqpWFQ3%2Fe9466w31Y2jM96Qm9xbpz8iXnJZME4f&X-Amz-Signature=e9db8a5b961ed74d8d4ee4a26e2c87e7c97c0bc7b2efedb194e49c672535ce1e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWCE3UX%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTRkFMcddM53eANHQFt6fqOQX9cDrhCurxJVcByL7XxAiAaMW1HsedtIEfgHL7uEX%2FBtobtSwQ8n2XpZjK701%2FkUiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpFl68%2Fa%2FA0sl3j3KtwDyPz0L9v3jJ9alCwDuTjJXtsXUCtrOM8uIgwk3J6fh3I6O8gjUkIG2W3G3vETMAYqyPSUBNGygGUiNOlklhTROMg1V572TFeM2v2tBqeevuKkzlcM%2BeKRID6G%2FIgCAlIRja4iVwWHLlbdL8pmmS0mxiAfMwu1RoULfSpeJKE%2Fy%2FGM40DgiLB4OONZsGjjPPVdZHSZglGuksBPnDj0n%2F1BbCVntQYZczt422xg4k9CSNEiWSUK8PnNweL%2FudPxEaJWm9C4Xc3dZdya9TEANhl2wab3ZgH6vEY%2BHj%2BdfhOeXGfdytYMA1vDfsH%2F3agijmvmjARwZkZzGiEp50mBcGG%2F6sXhpojn7PZSBZsycpEHXVGPhQBa%2BYAgxe506twN1svtAsnVooXrEy6XMybtcZNYmWLrIeY%2BM7zXPnSTln0FULO%2BzQcZbkOIbSBDx45BIPFzy43nGU5aDsJyqNwO7q9FH1PrQR7KGTbllAYqQ2JQclm6%2Fbs3KIaHeAyPdf8o9YyNult9f3liXGRs8%2BzvHRS9j9V1WCyMnNolZ74d7NvIIx36sQjEqearnFabCKBhmxpJ87S1w5%2Bh%2BaRZM1ru6XgKTwj%2FUNYghUmMA51PRXFBqZZRgtHVZdyKVKRg2ZgwmZKxvQY6pgFWszNH34Zxs7eUgvkD%2F%2Fmq9ZnLPa2GhBrIqz827Yhk0AJFhOUPE3LZd8HErSAfQoVBNIsYQRASKMlqzEnFe%2FEPyW0WBjiki5D4bDaGAmMxyFTK%2Bz2tqjnQHU%2Fbwdmm23EYwCt2%2FBzG0%2FvifhCd3VtiLVZWWDe%2F7tv5kofluv0Dt%2FjW6vlZHH9uN9M0%2FUptS4PLJ9m8USJa5BSfor%2BDHputy0kZNAb%2B&X-Amz-Signature=8af18f50eec6737e08ac04fdf6b4cae38e109cf3c58836fcac083090a18985a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635NGVDLR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl4CqeMux2EeYcL4AuYx6Z%2BlAV8%2FTfbqbKa8AhWN3oUQIgScvcKHnQ1W5gRnzsBx7R%2FAy2VGi71Yw0omeGAlf1ZXcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwPbFOvZTpCLqL4DyrcA3hCiOqJ9Z5A0w78P5g12VWEy5h8CKOSz%2BFuGDh34t1cY5HretYAg9EJg6jW1G3zvEiEhLvpQ10x2wuUGv3jrM74ZQnJmjLenpr8NQgTQT%2FAhMM8IhfYuf%2B1O4CfANuUXEgN2dWBDK9AMNcnY4uNyjSI22SVuPc2cbUYV%2FWTOF900Q3eiDe7%2Feg740PsKdU3%2FzJiXUePaClg1E5qgkA0mCsCA1f1XrmBa4JPCUmMZAYQsGx8zU1EgVYo0RKICos1K5onUk28trqPgEHbYVrOyKq6gnkiiHeK7yZLYyU%2BQcn%2Fwp%2Bikotj7aEEOz00C11xgNTxyKVRsSAJ2cowMtAZT8%2FUZ5yTB0eFEZ4nAfCWRABrzc3oMnUrgVZCrEBsaCCSE1Fjxs3E%2BetbTpFUsmNBku5Ym%2F9nHniakee34KuCCJa1nKTLpKEf3m5Dx1vt%2FuJ%2BHseyXxiGH9DCiMKHvNpC33Hi0ydBqXU0xjP3TEYhntorP2N4OlYAX4SeG7h004Mgmsdh7UdR9ZiBYlReTHTv8pm%2FzRtKG2D0gZ2zQoPwScaUepyvmqQfhajcZP0bH%2FDu25sSOvSucg%2FPiLMONph1KdsAB5DKTb92cDi7rIwGwyGWNJ5bE%2Bov45Mo9c98MN6Lsb0GOqUBJPWfIw2Ly0oB0yGJ3dUDeV22gkk%2FO8prHQRYUu1HnTDbkAtR6Y1wuiGof%2BOM%2FAjD0NxmsiQ7Sr59ioY43%2BBtCG9MvBHbMlkVYX3wpJZZjVi%2BgBaJsp3f%2BmBXB6HST3Vf904kk30Wtud%2BRDda2KLH0loWe4GGpYvCEx8ghCKAHkPAP9MSoQ54kEroNEaDndvaJZvCEO22W2Fh9ToYtnvHAulfP002&X-Amz-Signature=aad277f16b3316cfefb7e9447119490a963c7bbbbab5743caf4dfe6f904b89ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
