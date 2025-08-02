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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5RXE622%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy7m%2FYShGOIm5SXX04dzxfwmMl3ArsyHWDqr%2FagCEVSwIhAONS9%2FOfnC%2FIPwNuEaneX6CD%2FZfy9uHpYX0MOfIPuz3AKv8DCBAQABoMNjM3NDIzMTgzODA1IgwxwGowzj4A56Q6SvAq3ANbszvGRNSJeEQJjhpYPjkegMX2Ry%2BkSw%2FZLR9MPXAns8vqLb9C3Z9bI2yJZEX7HpUvertU%2FpAgCBZ3EEnW%2F%2BTCZdYF4WR3cJQ%2BGjMtUptnabrZlAnhomitji7vTOvi0nvTeC63grNYp4qyEKWckBljiT%2BbYkdx%2BTav9qehZdjWm95fkX7EWJUv%2FBKloJXt2N%2FmndxSog6RIGTwrTWmUeBeG%2Bas1qPBJe1gKqH2m5w6qGk9anEnYYxW6tDZlwdOMnGoW9YUVzGqRNXhG0aJki5RaCp0JtB22SVzVARP%2Bm95nPsVuw0WaaOlYCpUav9a4vEZ24xmMZBbrzhZUFqeV6vAsMeXReGCJJpw4B8ffsn2ezWfYhMu8IYaO0N3kwAJddiR14N0qbOct4X%2FZhzuInU4B8saZ2nTvqDVscm69a18mGIE5PV%2BI2R0n1B2ittqo6bHJVezxSxk7CtBmmUB%2BwAdzrLaBl3CQx%2FZ8yi4eXK%2BtehnMg%2BZMsM84WezXKesVynNcRI%2Bw84RFKJ2eoZ%2B6fi8uH6vNWz9QF7HQNVlQc4IOwzdpyfqvOHla1kr7BXOD2Rd4%2FaLZAnRY%2BEPUqsO4HtaOsKKGpk7IGrsmny7NkWq3q7QLGFQ34GHsEo%2B9jDg77bEBjqkAZPiEadWGYiBgwxVeSNMjtuki%2FNOnU9aHiT6GgSmcFLFrlePXmUmuYVQh2rstBCmD2q9Pv9jzcYR8Peclug7zRzIgpujK4C9OMNkQY3fanno%2BACemVARCG%2BkYy0%2F717xVDGO1BK%2B3lce8A9CsnUjzEh0apEXhqqUOXaJUxBCGLu%2FiezdKS2bh%2ByDvOW93k4KKhFWpY2LC8%2BPACq%2B%2BLW4MTGFND9J&X-Amz-Signature=754456005b3583575eebd4bee45ec411043a709efe74ae71950ae1518813e282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5RXE622%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy7m%2FYShGOIm5SXX04dzxfwmMl3ArsyHWDqr%2FagCEVSwIhAONS9%2FOfnC%2FIPwNuEaneX6CD%2FZfy9uHpYX0MOfIPuz3AKv8DCBAQABoMNjM3NDIzMTgzODA1IgwxwGowzj4A56Q6SvAq3ANbszvGRNSJeEQJjhpYPjkegMX2Ry%2BkSw%2FZLR9MPXAns8vqLb9C3Z9bI2yJZEX7HpUvertU%2FpAgCBZ3EEnW%2F%2BTCZdYF4WR3cJQ%2BGjMtUptnabrZlAnhomitji7vTOvi0nvTeC63grNYp4qyEKWckBljiT%2BbYkdx%2BTav9qehZdjWm95fkX7EWJUv%2FBKloJXt2N%2FmndxSog6RIGTwrTWmUeBeG%2Bas1qPBJe1gKqH2m5w6qGk9anEnYYxW6tDZlwdOMnGoW9YUVzGqRNXhG0aJki5RaCp0JtB22SVzVARP%2Bm95nPsVuw0WaaOlYCpUav9a4vEZ24xmMZBbrzhZUFqeV6vAsMeXReGCJJpw4B8ffsn2ezWfYhMu8IYaO0N3kwAJddiR14N0qbOct4X%2FZhzuInU4B8saZ2nTvqDVscm69a18mGIE5PV%2BI2R0n1B2ittqo6bHJVezxSxk7CtBmmUB%2BwAdzrLaBl3CQx%2FZ8yi4eXK%2BtehnMg%2BZMsM84WezXKesVynNcRI%2Bw84RFKJ2eoZ%2B6fi8uH6vNWz9QF7HQNVlQc4IOwzdpyfqvOHla1kr7BXOD2Rd4%2FaLZAnRY%2BEPUqsO4HtaOsKKGpk7IGrsmny7NkWq3q7QLGFQ34GHsEo%2B9jDg77bEBjqkAZPiEadWGYiBgwxVeSNMjtuki%2FNOnU9aHiT6GgSmcFLFrlePXmUmuYVQh2rstBCmD2q9Pv9jzcYR8Peclug7zRzIgpujK4C9OMNkQY3fanno%2BACemVARCG%2BkYy0%2F717xVDGO1BK%2B3lce8A9CsnUjzEh0apEXhqqUOXaJUxBCGLu%2FiezdKS2bh%2ByDvOW93k4KKhFWpY2LC8%2BPACq%2B%2BLW4MTGFND9J&X-Amz-Signature=1b8cc24312b61c143557f9f84269e742c63480f878ad66762fdc7100a70d08f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5RXE622%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy7m%2FYShGOIm5SXX04dzxfwmMl3ArsyHWDqr%2FagCEVSwIhAONS9%2FOfnC%2FIPwNuEaneX6CD%2FZfy9uHpYX0MOfIPuz3AKv8DCBAQABoMNjM3NDIzMTgzODA1IgwxwGowzj4A56Q6SvAq3ANbszvGRNSJeEQJjhpYPjkegMX2Ry%2BkSw%2FZLR9MPXAns8vqLb9C3Z9bI2yJZEX7HpUvertU%2FpAgCBZ3EEnW%2F%2BTCZdYF4WR3cJQ%2BGjMtUptnabrZlAnhomitji7vTOvi0nvTeC63grNYp4qyEKWckBljiT%2BbYkdx%2BTav9qehZdjWm95fkX7EWJUv%2FBKloJXt2N%2FmndxSog6RIGTwrTWmUeBeG%2Bas1qPBJe1gKqH2m5w6qGk9anEnYYxW6tDZlwdOMnGoW9YUVzGqRNXhG0aJki5RaCp0JtB22SVzVARP%2Bm95nPsVuw0WaaOlYCpUav9a4vEZ24xmMZBbrzhZUFqeV6vAsMeXReGCJJpw4B8ffsn2ezWfYhMu8IYaO0N3kwAJddiR14N0qbOct4X%2FZhzuInU4B8saZ2nTvqDVscm69a18mGIE5PV%2BI2R0n1B2ittqo6bHJVezxSxk7CtBmmUB%2BwAdzrLaBl3CQx%2FZ8yi4eXK%2BtehnMg%2BZMsM84WezXKesVynNcRI%2Bw84RFKJ2eoZ%2B6fi8uH6vNWz9QF7HQNVlQc4IOwzdpyfqvOHla1kr7BXOD2Rd4%2FaLZAnRY%2BEPUqsO4HtaOsKKGpk7IGrsmny7NkWq3q7QLGFQ34GHsEo%2B9jDg77bEBjqkAZPiEadWGYiBgwxVeSNMjtuki%2FNOnU9aHiT6GgSmcFLFrlePXmUmuYVQh2rstBCmD2q9Pv9jzcYR8Peclug7zRzIgpujK4C9OMNkQY3fanno%2BACemVARCG%2BkYy0%2F717xVDGO1BK%2B3lce8A9CsnUjzEh0apEXhqqUOXaJUxBCGLu%2FiezdKS2bh%2ByDvOW93k4KKhFWpY2LC8%2BPACq%2B%2BLW4MTGFND9J&X-Amz-Signature=c474f272832ebc577f69e4e6322801da6831f2c25807c467b2213974dd566a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TR6MALO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGhrdFXGfS0Oy2LBBANphJOt8dAhOe8XwKGpo71dAk%2BAiARcjyhhRmLF7RyrQx1zZiC6kmEgQFuQjh2%2BESpmJDsOCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMFKSp%2B4PkM%2Bz0CtYBKtwDXYP2DhI9FvdlpH%2Fz9LvVMhxGGWfSU%2Bn5RiB5ZgacdftGDs%2FDmXo%2BsLYXYrmGf1hCxBtlGIsZnL%2Br7tc9MAG9FdJqq5NxxSZl5lKJ87XtEqfmnw6CeBGq8uqPMcWb1N5AEpbdN2fWogRtD1SyOc96lM4CU6zS0k%2Biee3KH0acRroKAliFqgHWWq%2FaMFYfBWlz9s07n0Vsx%2FQfwu7UWR3oZfJOWiglOsfM57lCo8ENSmDaORTYvB4jzcbFZGmghnXIFoe0ZZ2EsXYrkIjFtosdBooimm9OdhfRX6NqA94U9WGx2y2pJU9wu0NojK7Av8ixuUkg7mHHKCcDxv3Qf%2BdMr%2Fvpz1MHfEI8pbOpEx5IjFB4WAxyvCfEuRFDQQnywTkdLdZyhAPD4TbZny2pxTYzIKiVCGLrcYpczTs4hSrOlxvYFq0az8roTC%2BFWVfQKb%2FMohGl89fsGwX532SrUhmoZN4s4%2BwjBmaYJ%2Ft0rpdMI0ScqvBpFtm%2Fb1uPX%2FqFNPewIqhGtd2JauOO59cRJhm01OGahkNGxReoqpdgztE4MIVsolyTCFSGQk2nH6vCMpOwQY%2FJT63WjZapbHy4uIN3bJ9u5Qnud8MBFYFONyVYTxD%2Fr3uoRJ%2BLXTvKmb8w8%2B%2B2xAY6pgHDbZ5K3Vr%2BQY3ayfM6C%2Fu5vCCnNDKfkpAlDRcEeLBJdUOnNnf%2BbNqUl%2FNGybTg2eocaopMcaZcTgQ3h3rv91QiIzSG8F1%2B%2BjUk2jqjpzpCUsoqA6vGDO1HWhMxYkDEouiGMHsDC1Hq3PxJ%2FEex%2FAtRaocgZZtVDz99%2BlOYUA1eiEK0AV4%2FhqR15NDGa%2FuqVoCTgD7EQE72HU4Eeqn%2Fh2oKDZE7Bday&X-Amz-Signature=c13d4fee6bb4defd2d192c27ec41a3898574cad21c0c4cac0e287524b4c9e10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RC6B5E3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj8DN11en4YSBbrK8WpnGMd2s9isZ%2Fa57431pLAak4uAiEAjzCZSKyOStl%2Ff3nnnlgaQ5m%2B6L580NwIlC4%2BpMqoM5kq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDINNESJF5nKRpjSnKircA24jWHDVItVTds2QFGO1Vk3KE%2B6hkD5H2SqcoJ0zGXpW5EY058LnQop6oqkVbgIbc6tGW7%2BAiXaAOLNk46MtmI8ceOZ0C6cZLCnye0Rr60f0MNdsIEHsdosH31mvBXt7MU99cMRt7xvry40rR%2BQxVD0e%2BwkQTTGhu0yqLoX4hms6C%2BGE9DKeea8oh6%2Fp%2F5sSrxeX4HQUmF85vKYuwZ7k1ZSBI68vkRw4EHJb%2FUNzpnvI5%2BIEgD9RxtaX3gzdLzPQ8bWpkCL4qLEnsQ8js7VfKt9xiN3ivhke1X%2BwtYBuuGtUOfp9z9yr3aWDBzVNtYSsCOs%2FuW5VAVHWmlEHNc0iwwCe9BqHQxLcaDzNDEvsfC5rgfTcjcNPgXwmuoTLK9bFz3%2FGaOhh9bE6o62HyOp4Y8mHdjCSF%2B9MZVLKZ0Er33Ked8mYULCRjmT8Iyey2WfHFKAslyhJRkXIVCpeVEdBGoRfV%2Bkh524h%2F4J2mSy%2B00J0UHrZ%2BxPWBC5QYkaeGn%2BLjVPjM99ASB%2FUac7BzpPXUSZXM0h4qh6Pf8K10OUPPQcn7%2BMGmPz2W%2BrH2T3JETznZyhnaPUF76LKOlDYm4Xze0D1%2BMse7pbNDrR48t2vbZqNiJyBVV4%2Bl0TBCwT7MKTwtsQGOqUBfVwqrzspWYBi6gwCjIwW1rxxpUfSgC81E6TuKTZ8QXiXRZVC1AfvLYtVD%2FPJVN7mCogJKUZboHFeIHXQ%2B2v4DXcaotoxNKTdJdx6zwv7DGEsXQTisKI2fZGITQu%2Fm5jXIKAiMf3lgRPMB6vllKszL77x%2FqROSwR8qAL6shA6UslcZxSOVJFPFh%2BH%2BeX2EKX4xQDlbmRH01eQDgRnipouDfsvwme4&X-Amz-Signature=2c5166c89bac7ba8a8647ac6fd8f1bb6a1659f3580f74629944159cc92273071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5RXE622%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy7m%2FYShGOIm5SXX04dzxfwmMl3ArsyHWDqr%2FagCEVSwIhAONS9%2FOfnC%2FIPwNuEaneX6CD%2FZfy9uHpYX0MOfIPuz3AKv8DCBAQABoMNjM3NDIzMTgzODA1IgwxwGowzj4A56Q6SvAq3ANbszvGRNSJeEQJjhpYPjkegMX2Ry%2BkSw%2FZLR9MPXAns8vqLb9C3Z9bI2yJZEX7HpUvertU%2FpAgCBZ3EEnW%2F%2BTCZdYF4WR3cJQ%2BGjMtUptnabrZlAnhomitji7vTOvi0nvTeC63grNYp4qyEKWckBljiT%2BbYkdx%2BTav9qehZdjWm95fkX7EWJUv%2FBKloJXt2N%2FmndxSog6RIGTwrTWmUeBeG%2Bas1qPBJe1gKqH2m5w6qGk9anEnYYxW6tDZlwdOMnGoW9YUVzGqRNXhG0aJki5RaCp0JtB22SVzVARP%2Bm95nPsVuw0WaaOlYCpUav9a4vEZ24xmMZBbrzhZUFqeV6vAsMeXReGCJJpw4B8ffsn2ezWfYhMu8IYaO0N3kwAJddiR14N0qbOct4X%2FZhzuInU4B8saZ2nTvqDVscm69a18mGIE5PV%2BI2R0n1B2ittqo6bHJVezxSxk7CtBmmUB%2BwAdzrLaBl3CQx%2FZ8yi4eXK%2BtehnMg%2BZMsM84WezXKesVynNcRI%2Bw84RFKJ2eoZ%2B6fi8uH6vNWz9QF7HQNVlQc4IOwzdpyfqvOHla1kr7BXOD2Rd4%2FaLZAnRY%2BEPUqsO4HtaOsKKGpk7IGrsmny7NkWq3q7QLGFQ34GHsEo%2B9jDg77bEBjqkAZPiEadWGYiBgwxVeSNMjtuki%2FNOnU9aHiT6GgSmcFLFrlePXmUmuYVQh2rstBCmD2q9Pv9jzcYR8Peclug7zRzIgpujK4C9OMNkQY3fanno%2BACemVARCG%2BkYy0%2F717xVDGO1BK%2B3lce8A9CsnUjzEh0apEXhqqUOXaJUxBCGLu%2FiezdKS2bh%2ByDvOW93k4KKhFWpY2LC8%2BPACq%2B%2BLW4MTGFND9J&X-Amz-Signature=fd16370f6c423e5de34e3fbfb84d3c69204870fcb41d87ee7437ecf53bc413ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
