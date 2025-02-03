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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D6OXIJW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIHlN7g0Fa8VcfuKWXKS2H7zGDv0Yg6N0vtOiMNGv%2F4nFAiBi%2Fy8y3aVVfc1AhVOkglkDibAnZnSG5cioZyJpaKk%2Beir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMaegFMwZw%2F796GIjaKtwDh%2FdQHyv%2BqNGlSBFQA3cQ%2BF5gnPf6iviq930k5k5TDuWfd%2BtZgupPbIZrEuwXZJktryJutW5jZdsQ1ZGUVB%2BhRCo5D1p3kRY0ZLaKNbYDXZ97GwFGxFw3%2BDre98ryQAmqpOxqrX8BHMxusnaC%2Bfp2AyofMzSyjHQoo2TzG1QZoOhgWdkOs2UyH%2F%2BsBDaQSjQb6eracuiUN8UrvPNTyJ008Cmh3m2eVtertaxrly7YfOzJJkoQi1NdSKHBhngPFhOuFGNCL7MEImGlyapH%2FkIvD3OJpiNGmPKul5SVd91bo%2FCBG0ZXcS%2F6FytLVUq5lTPlGG1tkhOe3gws%2B332swPGkhiSK75wC9dJIs6IFg2jr0TZOhqOvfQ4pPCGPdIfw1%2FucTmulTAYXzlcTH7Rf3IB2crBw95m%2B6qrq3FxSemZ7gTDoVWA%2FTy6CLwlMMjfEiFJVj%2FSE9MgGHvw6Q2%2BtaBWhb1yM1eEp3Xe%2BeULiEp95GoT4bSBnubLBHTfoy%2Bs%2FuRjlCE2HsUIx5Ans1EziIZntVfPpHovp%2FIOwVITwPM2xVJBZmpiYhaPW3udqC0qLoiGL3MRGSgJ4tgtNdyuBsrTRMJPnFCPie83bEBGTxCGeS9xGgc5Zr2b%2B3zpQNMw6PmEvQY6pgHPFZIsZ4W3ssiCk9ji4cPTt4PmgTpqjD4kZ54rWPZqNanTsmDULg5SKeU3XjxXee5VT6z33ZORUNLcuHJ30bdjprArt%2F8KzMkN8OM3%2BUyyEFLmlRDcpli9LxFB3z7lc1f8lqnPxlzJoYkIR81Nc8bIUGKZCZP20G%2BQfCokr8RmO0T6efLOuEkTI3sHD7j8sBbiAJU%2BsojsBU5JgMGt9xTXIkRWv4N5&X-Amz-Signature=8eccb0b7de742c55e3e3637c986014627c7f77cd2740877d7d8729db7f11d259&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D6OXIJW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIHlN7g0Fa8VcfuKWXKS2H7zGDv0Yg6N0vtOiMNGv%2F4nFAiBi%2Fy8y3aVVfc1AhVOkglkDibAnZnSG5cioZyJpaKk%2Beir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMaegFMwZw%2F796GIjaKtwDh%2FdQHyv%2BqNGlSBFQA3cQ%2BF5gnPf6iviq930k5k5TDuWfd%2BtZgupPbIZrEuwXZJktryJutW5jZdsQ1ZGUVB%2BhRCo5D1p3kRY0ZLaKNbYDXZ97GwFGxFw3%2BDre98ryQAmqpOxqrX8BHMxusnaC%2Bfp2AyofMzSyjHQoo2TzG1QZoOhgWdkOs2UyH%2F%2BsBDaQSjQb6eracuiUN8UrvPNTyJ008Cmh3m2eVtertaxrly7YfOzJJkoQi1NdSKHBhngPFhOuFGNCL7MEImGlyapH%2FkIvD3OJpiNGmPKul5SVd91bo%2FCBG0ZXcS%2F6FytLVUq5lTPlGG1tkhOe3gws%2B332swPGkhiSK75wC9dJIs6IFg2jr0TZOhqOvfQ4pPCGPdIfw1%2FucTmulTAYXzlcTH7Rf3IB2crBw95m%2B6qrq3FxSemZ7gTDoVWA%2FTy6CLwlMMjfEiFJVj%2FSE9MgGHvw6Q2%2BtaBWhb1yM1eEp3Xe%2BeULiEp95GoT4bSBnubLBHTfoy%2Bs%2FuRjlCE2HsUIx5Ans1EziIZntVfPpHovp%2FIOwVITwPM2xVJBZmpiYhaPW3udqC0qLoiGL3MRGSgJ4tgtNdyuBsrTRMJPnFCPie83bEBGTxCGeS9xGgc5Zr2b%2B3zpQNMw6PmEvQY6pgHPFZIsZ4W3ssiCk9ji4cPTt4PmgTpqjD4kZ54rWPZqNanTsmDULg5SKeU3XjxXee5VT6z33ZORUNLcuHJ30bdjprArt%2F8KzMkN8OM3%2BUyyEFLmlRDcpli9LxFB3z7lc1f8lqnPxlzJoYkIR81Nc8bIUGKZCZP20G%2BQfCokr8RmO0T6efLOuEkTI3sHD7j8sBbiAJU%2BsojsBU5JgMGt9xTXIkRWv4N5&X-Amz-Signature=6de3d1fad2da3492645bd6b662576b61f8a1f33a89dca13c97753c4a2e48e829&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFHFYFQR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDloc6igGXJdkPFVMhpvnFG8hhYUkaGgMu58kWOtIQKHgIhAPhC4%2FbdOLGd7vyfM15vdVCtSwadvNDS59KQRvQaWkGqKv8DCB8QABoMNjM3NDIzMTgzODA1IgxXctCYkbB1LJvKXwcq3AOz3F2V2t%2FT1BhuI8%2FKr7r0Xr17exW0SBouC2hsHVhlr5y8eLGQRSQ%2FaD6FKdY3E0v492EYK9gZWQrCuATvO0ro7LZwjYu5CKO7ItDRHi9Gxc69DtdIH1Y3xglB4gs4UQEO4VnGQ5GYy066bfI7k0OvMUNOHyNq0Ccv4Thoc3KwymadH19IrZua4paNqtgIm5pphuMZu73mE2G9yWZQsaErVV5mZsdSUMjPvGniv4ZCdbUrUXMoOxRl0%2FS1quQXvM3iji74XcvfMRjQZJdLIr%2Bi3zoqvC2XI9xRakAhzdFp8cLJiuYxaos5Ex4nSpvBx%2BeYJ3tizPN0Bc0Bl2OR2%2BfoL%2BuqEJhk3tlIxhgQaidm20myzkpaOfUK%2ByuG9tUysdzSlAgwgvR1UT8wJUchSsRAIF5%2B%2FS%2FEO2elLq7%2FYtXsqn0DjR5rFkEU61CVO4Hi%2Bx060iB%2Fvbx0iOzQIkVEaUC9dasxg2f5g0gIflUV1X1qHRQpVuet2KsIgcUjsfiEMocRzCUAeniVpB%2FKI%2Bk%2BrGXPsoOGo3g5NNtobDWAfJkwvB7ZPgUX0JBxJP9V2clIgzTVbXz0xufA3FYcAKBRjDOTm854XNE2SoQFLiwl4AnjTgW20w4IeX8yzRVeUzCN%2BYS9BjqkAQW3BYa4m4xKFn7ShMsDXCNbuJxQnGj8iQcgIwdMAWLQUsdrEvmIrgdENr25RZDVwHp3GaNaWfAqxYcjtQ70p0oDF9gNYpQfCk08fktbFxq8OV6JjCNSIFerc6u334hlB%2FSxU2F8RoyCLAiwyRs8OzYqJKe1jrCTqIwa%2BL1HOXLuXRwCfw4WQtPn2TcvJDOuLegrIPDk4nzV76gPtOZkbCGNPvHO&X-Amz-Signature=996ee4b21a54fc220b6967f81e63050c29f2281a28d2b00cfd9ae3fa53ef86e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HMMA3C%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIArnO08ugMngAtRZdtV3k%2BsIVeKtQc8MlFuI4J90Q8jVAiBv6OQIx9gNil7PI70e72GsqcP1ml%2BDTJ6EragLQy0FSyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMTye1JZS5oVkqzxeiKtwD6dpLH02Bon4ahoKVJEXQc38OHrbNd6IfqboUhV0%2FVfE04soFg%2BIKhMUeTAov3oJso8kIgT3oGL1g0K7GnApqhmpOwzAkt5fjfMGVrg%2FDWSnyY9Ku7XV7vzdEC5bEdgvkqw%2FlZ2Q2vVEbNP%2B%2BQgFfvPz36OAFs8TNpLDaXiVzHpkzlLCIqv8weuHygA5xfW4w31z0VSg5ePYi3q1Z%2BDOlF6ewNNbgRLBOyVjBMN5uRTxd836GANAA9g33dlDiHv%2FLiZftKHU9EsBdLWC2wQxkAwhlkP9%2Bv78YJD4%2BLkSSGqiao%2FWP%2FwU3JwFWxe%2FiJqqJH3lnCPTsLbRwgf5Adkduam0s%2B0dWggzUy6e0VWt2z2vJjHZjfQ4M59tlf8%2FqbVMjpkMg68SE1zJJrbQm7qdknFgHyz9ZO4Y6zk0Eq6pJQ53bk02P3ZIVahaefMTGT%2Ba%2FB0XFJxjoL2ZIMLmCftOAYrmzlCphjTCc0y4Z60ZMDG4U%2FoqDn4po%2BpEF4%2BxdeGSRDUxo0ih9VGZBU10Ibo60anlpvs%2FsxwiS12WuSyG%2BuRFyo0IDpsoZapm%2B7%2FckflG9cHPi6DJivOa8%2FzQ%2B45sZTvcUtBpIVjKoEZ0Hd7FpuNGDroqZ7U%2BMJ%2F4tnDgwkfqEvQY6pgE%2FmO5%2Bf7ezyr2IG026qGCOdkof2xMWp4mnLAv4srUoGasqTA082t3w5i6juc6ESXXEFMLp5aNucdR7cuFAodoBNbR17Zn1ffz49WOfKroYz1pujJxIAY3CSJclgd5pPDOul6mhKy0huon9016bL%2B8tXUn8DlUb7jUpX%2BvoFRm3V9BXZ%2B0Makuj6Vuj30f%2F6LRLe3Mm%2FIY91etkUT2NfjHmR%2Fg%2FSTJr&X-Amz-Signature=29a34cd7c2eb66998b87abdf94ea176ec37ded77e803e75432e75c40177192c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D6OXIJW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIHlN7g0Fa8VcfuKWXKS2H7zGDv0Yg6N0vtOiMNGv%2F4nFAiBi%2Fy8y3aVVfc1AhVOkglkDibAnZnSG5cioZyJpaKk%2Beir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMaegFMwZw%2F796GIjaKtwDh%2FdQHyv%2BqNGlSBFQA3cQ%2BF5gnPf6iviq930k5k5TDuWfd%2BtZgupPbIZrEuwXZJktryJutW5jZdsQ1ZGUVB%2BhRCo5D1p3kRY0ZLaKNbYDXZ97GwFGxFw3%2BDre98ryQAmqpOxqrX8BHMxusnaC%2Bfp2AyofMzSyjHQoo2TzG1QZoOhgWdkOs2UyH%2F%2BsBDaQSjQb6eracuiUN8UrvPNTyJ008Cmh3m2eVtertaxrly7YfOzJJkoQi1NdSKHBhngPFhOuFGNCL7MEImGlyapH%2FkIvD3OJpiNGmPKul5SVd91bo%2FCBG0ZXcS%2F6FytLVUq5lTPlGG1tkhOe3gws%2B332swPGkhiSK75wC9dJIs6IFg2jr0TZOhqOvfQ4pPCGPdIfw1%2FucTmulTAYXzlcTH7Rf3IB2crBw95m%2B6qrq3FxSemZ7gTDoVWA%2FTy6CLwlMMjfEiFJVj%2FSE9MgGHvw6Q2%2BtaBWhb1yM1eEp3Xe%2BeULiEp95GoT4bSBnubLBHTfoy%2Bs%2FuRjlCE2HsUIx5Ans1EziIZntVfPpHovp%2FIOwVITwPM2xVJBZmpiYhaPW3udqC0qLoiGL3MRGSgJ4tgtNdyuBsrTRMJPnFCPie83bEBGTxCGeS9xGgc5Zr2b%2B3zpQNMw6PmEvQY6pgHPFZIsZ4W3ssiCk9ji4cPTt4PmgTpqjD4kZ54rWPZqNanTsmDULg5SKeU3XjxXee5VT6z33ZORUNLcuHJ30bdjprArt%2F8KzMkN8OM3%2BUyyEFLmlRDcpli9LxFB3z7lc1f8lqnPxlzJoYkIR81Nc8bIUGKZCZP20G%2BQfCokr8RmO0T6efLOuEkTI3sHD7j8sBbiAJU%2BsojsBU5JgMGt9xTXIkRWv4N5&X-Amz-Signature=83d754d6d0ab355d690378760d428ead8e2e8b5dddb84d28a52b704f3052c9ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
