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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPDEVEFL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQbHIJy%2BSqCdooMwlKIiJ%2BPAn9lOXfPIxEmsMslHPx%2FAiAxlNIRHqVw3P2QfRRLxjJ0RrFYuGxmdqSfPW1fLghU1SqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz%2BOrEMzUYcbNXylgKtwDO5EpYjYp%2Bb6WXDZMIFdU3%2BN2EVNqhbpCqHMggnwXbJmuI4JqdIlCnKzjrqvxPs2LCmWjpWO47H2hfy9hYJjFWS6Mkf8Q7cuEuPhx08bMlAzzXdsd8eMHZpI5hcHud7d3H1Syb4a81SIVODRrCmz1RZ3VaEtBHPHK7iM9uHUfXg1TY2KcB3H3sif4zHL10r8ERuVn2Dpi1THb8MyZAhDjT797Sbdl34ifyH4d84B7zB%2BFlbIFDmvXDq07phbSgQeNUZfrBEhrNLrLvigHzdCYzh91e8LbiVFTi7bXJiecKC3cy6c1%2F61KLxHhBesw%2Bmb9z8%2BYU7Zy%2BX997s6aVZXvE2sx5Ls962w5nsXd4wH62PRTdwXI%2BIY9y3FzUOvebgQ%2BhD00%2Fr%2F2e7wcP%2FpbY7tPrjLZAL8vP3fc8ZGpszg%2BDmeWLLNDUHUJZSYbNcuSSY%2BEufezt%2Fw8z22%2B%2BLljObzs1TB9FB4UtXaTBJDlP6sPNmMbOwtS1fTob6u9WtfJLgrtySLowNBFAEQ57OGipTnwMCA8ZvION8HC8OIqOsj%2Fkqh86hsybj57OWuH7cO%2BByo%2FDvNdDB37i0tMlylM9XB7pb4WpWd5pUouTDBnsnXj2SHBcawABMhv0hdxWZAwt%2BzmvQY6pgG8BesbYELdAGYzP6kg62p4vzsNN2vwHVAlpAX5LiltDC88XfVjxeH8JIZ2yEsl8CRYdU9wFMzi7NJtTz7PpoNx9LZ%2FXp1MDH30FVRVtJ1fValGT7FPUUIeUDNSvRx8qkwk1FZdaXU5uCs7hlH90jm89GbGXv32thr8GKg53mMo%2FG%2BrQR3VlYRxmfPTrQnnE%2BaRNAOmccMwKKoRCvI6xX4b8vmbYgWx&X-Amz-Signature=536462785f6fbb40d52aa6340d72f902f40c7edc3e3ecd2ae2c525d0eba9461a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPDEVEFL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQbHIJy%2BSqCdooMwlKIiJ%2BPAn9lOXfPIxEmsMslHPx%2FAiAxlNIRHqVw3P2QfRRLxjJ0RrFYuGxmdqSfPW1fLghU1SqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz%2BOrEMzUYcbNXylgKtwDO5EpYjYp%2Bb6WXDZMIFdU3%2BN2EVNqhbpCqHMggnwXbJmuI4JqdIlCnKzjrqvxPs2LCmWjpWO47H2hfy9hYJjFWS6Mkf8Q7cuEuPhx08bMlAzzXdsd8eMHZpI5hcHud7d3H1Syb4a81SIVODRrCmz1RZ3VaEtBHPHK7iM9uHUfXg1TY2KcB3H3sif4zHL10r8ERuVn2Dpi1THb8MyZAhDjT797Sbdl34ifyH4d84B7zB%2BFlbIFDmvXDq07phbSgQeNUZfrBEhrNLrLvigHzdCYzh91e8LbiVFTi7bXJiecKC3cy6c1%2F61KLxHhBesw%2Bmb9z8%2BYU7Zy%2BX997s6aVZXvE2sx5Ls962w5nsXd4wH62PRTdwXI%2BIY9y3FzUOvebgQ%2BhD00%2Fr%2F2e7wcP%2FpbY7tPrjLZAL8vP3fc8ZGpszg%2BDmeWLLNDUHUJZSYbNcuSSY%2BEufezt%2Fw8z22%2B%2BLljObzs1TB9FB4UtXaTBJDlP6sPNmMbOwtS1fTob6u9WtfJLgrtySLowNBFAEQ57OGipTnwMCA8ZvION8HC8OIqOsj%2Fkqh86hsybj57OWuH7cO%2BByo%2FDvNdDB37i0tMlylM9XB7pb4WpWd5pUouTDBnsnXj2SHBcawABMhv0hdxWZAwt%2BzmvQY6pgG8BesbYELdAGYzP6kg62p4vzsNN2vwHVAlpAX5LiltDC88XfVjxeH8JIZ2yEsl8CRYdU9wFMzi7NJtTz7PpoNx9LZ%2FXp1MDH30FVRVtJ1fValGT7FPUUIeUDNSvRx8qkwk1FZdaXU5uCs7hlH90jm89GbGXv32thr8GKg53mMo%2FG%2BrQR3VlYRxmfPTrQnnE%2BaRNAOmccMwKKoRCvI6xX4b8vmbYgWx&X-Amz-Signature=0abd311dd6e72f485409a1a7944b3bbd65180a416025424737394df588c69d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TNWU2WN%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgMiWOxUwRA0NnbOTDqd1WyYezc68nk55iot%2BjQAuhKgIhAMCBA%2Bv2N0NqkvDto0r69I97To8ObeD6zsYvKJdf6TGUKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCZxtdKyA1kHaZ7CEq3AO39dHYQmnTOfa2NrFvZY2I6B%2FWUBKhLHw1E00NSC1JGh9g%2BzBOaDpwUyuALGDWAlJGQ6BADPlnB%2FO1xwWVvXGipIjxdOWeYeL5U18o9octNklRRcCYegQzG5jZ8F%2FINS08DmWmO4ztTeOyGZ%2FbR1TIE0L1Dz8sCGOVRSuO3RYeTe8tktI1UdLKFS91F2uqLhP6JxAFfFLgKbXr8lI0rYr8VdgbB7l1pWAVq3ZXmCPpImInNj14w5wTib9YqJlBqnBscWNx%2Bi%2Bp%2FFwnXm09jln7yvkMqRmCBSAr33DIxDk9CWqXyRx%2F6Spv5H6zGSzuEqsEPeh0Uil2T1SIPG%2Bz4IOfULnvFAQ%2Fe5LEhMPAKum9pkQNbyjVY7PPdiNiz4iUfavUyZAfrEIJt%2FZswvg5uw9BHa10%2B5SwuS0euvY53skv97blf1%2FpfGNsaPJXHquL8cNAC3UPIJt%2FrM%2Bxgym2FJAIIFS0GkkcIo3EGkadOfPYYKExH0UTapLOcMlVbeAhA0meNYsSKJdap0LpNrg2MYWejDZTYLrOqIUsZYfpiltMClkhcFeebv7ARBbQ%2BZyDRtlmBwClYh1LsfJJli998UCaG%2FKD1jMtRdyDCB649%2BWlHpNmV%2Fga8nG5378MrTC55ua9BjqkAU2%2Fr1AEwikjrW2qeb7o7xCqrBOp2B5vcdQQ%2FkBLJvdlBxOg6zbZZ%2FtW6wtLLznjCGLGmnUWfpDjI3%2F7%2FuoPX%2FNiIMl1ucvEqeqM7GZlpf5I5RShLYZOjxKHdMxkpVIbBNNgh8kr5fyKrDKOeX8LDy4pTXyLI2IgpEvT3xoFuEyLOp7kGSxyvald37eqZB%2BUB8t11o4O%2FPqnYxp6bYRbQuMO6mm3&X-Amz-Signature=c6b9e1d56b83c4d974c09254423c8f5c64f7681dbc491da112425c5b7dea40e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EW3NA5J%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUn9CkYJgIrk%2BCWvHsMYCPKx5h%2BP895j%2Fl3KMpHu8BwAiEA0gVRxE2Mc0NdXOMA91yimkPZ6WVz3xUj4aM%2FOI8o86cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcl4Qz7gEsV6nCp5SrcA9GU%2BNi5K9VydXL%2FeweyjGcIwURgrBqI1s1W9KBmgibcVTIdwmx1h7inUPiDBl%2BAB2oCYC4wZMr671QLNmN354CuVp6QrQVjcZ4WjGQvRBLiAW6fiXxGXOTPP0gC4jJ6IOiTRA6IG4JtnDP80XoV%2BlV1l3be2Ara0%2BnTZxt5sZEQ3km56ai6gxYqycMefEmcIkxRvqUpDg0Jp%2B5j4OaImCbASJqDUVlD%2BRkCjDEO6kGBUs17CTIA5YD%2FEtoV1hUrdxT8VrarLjDLuleRZpRXwJtIapuF8nnEbAddusNK1DhsIYiXQ%2F6bMtaDVn8jc4AZLJAPhmj3K%2F9em6VSO9wdgboIYPV9v%2BWq9Vljzosr%2B7WI9L%2FR1jWVWI45hIZNgdNBKc1CdCsj%2FVbWQCpEQoP4Cd6VscWsRBX7oRko94ho4XZwZZ5q0Or5Lo5fQA8Yj7JnCqAEliHifFbt%2BWJc5qCsg1KuJsfUkJSALQGejBOL1gGRCdegsyldTZbOFcjo%2BI0JS9TvvBl%2BXNuv%2B6yWcCrDmfuTM%2FGeV22xXuZKAPZohx8wEctgVBrm91r4dJnHCMziZdIJUXy8l4Uj5u7A6HQCe%2B5IZTu71PB0upnxmmHdyteUvCVIcRWOF1BYW9oyMOXi5r0GOqUBsiIfVpdq%2FI%2FZNUk9xpzK8ajt1XD5vvw27z3BrDtrABi22DlZsOZW6Xrb9FF5wRI9lCr8b5Th4MN7%2BrY%2F8rWbJsKpQ%2F3CDTHc99pTqiC9tjSyGT1MWWDlRxdhVc2tnKtFBxnpmnPW39F4inB2uuJb0yMBSienk7h6YB17xcb0xoO4u7JHo1XMVsNIEizVhJmNo3g%2BfWtFCWVHvxyz6MJPIpNaftxO&X-Amz-Signature=d4c10977aeb8b7ec415f90bc422cb964029f287e15de67b12e71ba7d6c504e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPDEVEFL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQbHIJy%2BSqCdooMwlKIiJ%2BPAn9lOXfPIxEmsMslHPx%2FAiAxlNIRHqVw3P2QfRRLxjJ0RrFYuGxmdqSfPW1fLghU1SqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz%2BOrEMzUYcbNXylgKtwDO5EpYjYp%2Bb6WXDZMIFdU3%2BN2EVNqhbpCqHMggnwXbJmuI4JqdIlCnKzjrqvxPs2LCmWjpWO47H2hfy9hYJjFWS6Mkf8Q7cuEuPhx08bMlAzzXdsd8eMHZpI5hcHud7d3H1Syb4a81SIVODRrCmz1RZ3VaEtBHPHK7iM9uHUfXg1TY2KcB3H3sif4zHL10r8ERuVn2Dpi1THb8MyZAhDjT797Sbdl34ifyH4d84B7zB%2BFlbIFDmvXDq07phbSgQeNUZfrBEhrNLrLvigHzdCYzh91e8LbiVFTi7bXJiecKC3cy6c1%2F61KLxHhBesw%2Bmb9z8%2BYU7Zy%2BX997s6aVZXvE2sx5Ls962w5nsXd4wH62PRTdwXI%2BIY9y3FzUOvebgQ%2BhD00%2Fr%2F2e7wcP%2FpbY7tPrjLZAL8vP3fc8ZGpszg%2BDmeWLLNDUHUJZSYbNcuSSY%2BEufezt%2Fw8z22%2B%2BLljObzs1TB9FB4UtXaTBJDlP6sPNmMbOwtS1fTob6u9WtfJLgrtySLowNBFAEQ57OGipTnwMCA8ZvION8HC8OIqOsj%2Fkqh86hsybj57OWuH7cO%2BByo%2FDvNdDB37i0tMlylM9XB7pb4WpWd5pUouTDBnsnXj2SHBcawABMhv0hdxWZAwt%2BzmvQY6pgG8BesbYELdAGYzP6kg62p4vzsNN2vwHVAlpAX5LiltDC88XfVjxeH8JIZ2yEsl8CRYdU9wFMzi7NJtTz7PpoNx9LZ%2FXp1MDH30FVRVtJ1fValGT7FPUUIeUDNSvRx8qkwk1FZdaXU5uCs7hlH90jm89GbGXv32thr8GKg53mMo%2FG%2BrQR3VlYRxmfPTrQnnE%2BaRNAOmccMwKKoRCvI6xX4b8vmbYgWx&X-Amz-Signature=a83badbf230b93b2affc36c5ad285bb17677e4b95d9f14d18ef0308d84441f58&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
