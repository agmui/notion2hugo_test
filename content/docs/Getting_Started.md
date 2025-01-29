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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZKVMPQU%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIDJO8r19VY%2Bih9%2FZAYKe8xbtzN2kWJViZwFxMHvZpZS1AiBIO8GLGgt3yHnLeUkeytvmZSczlJtS6o5DQdOF3v0F8iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYGMvkZ1eVQ06Wdp1KtwDSlc82D2fC7QXaZggcCYrl5vLBmCm1GJmM32dSLeqF%2BMzncCeNvCyvca1zeyuQvH3I0EZ%2Fyrbd6j5ac8YsZASTnRWscQFuM%2FPIwDoTX5IUKAEKwD1XQ0XD1CxFFlqxSq7ZuKbazwlOcaRsuiq9IqCTETMLPnquNyppEdDn3Knq%2BKrqxXRAhvdqARcraBeOCN94f7BNZT4ubKy2ozVVT6xN4Pg7HcXJTek3t9rTDMhbiXKhSBjSMGTRHplsD2WmlMPrhx3MQoED7J4LdjKnMwoMHg0W49pB5Uddf7s8TfVYa5DPCb4%2ByHzF%2B7JDBet1e6ndKyHEpq0s62nejoZ5tYWIIr60sN9DjNi1C6%2FxVUvpFLIl09fvTePF2PgFDAZB3%2F4jyoomTPYggJlIKBfPUShJCKoL7AQpa%2BV64Is9LA2eOM91qimb1DhkmQ%2BU9vIAhKYvfQb6Brd3mN9ABWxRF5F3QyocSdIb7t7sIWl9VafYX0WW%2FDhcm%2FG60B%2B1WdUDPFTQfMTGTZui8skNdoJXblwPlRQ%2Fk52gbX0tU6rOkuuR2ByxksYGVTotRxCafiGxLdN5teya0be1ZJccIQa9bBPSwlhadTcPHvSC5FZmAV15V1DC7MhF43nv%2FyG1RkwspHnvAY6pgEMUdiKxUQ%2BtZAOuICxN8Eq%2FWli%2FUHVwy61dCKPII66sCmXECnVv6Ww80DAUeZaSXuIb1jKFQqB91afAaHQtuSKGrifNURA%2B5qCLsZZT1wSJYaizx%2BBnM4IfyKNCtVO2kte%2FsFHzCp9%2BALKzQIM6FrcL7RkZcvtgKbJCPdfpRJG08%2FM04oHuHIf5xJ8pBBfvYxs8wz%2FUlTF612NAoAr9dYmnOcu00FH&X-Amz-Signature=56b933f2269cd9b43bff63f13bf502acdfa507222b3b265cd8d68daf3518b36a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZKVMPQU%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIDJO8r19VY%2Bih9%2FZAYKe8xbtzN2kWJViZwFxMHvZpZS1AiBIO8GLGgt3yHnLeUkeytvmZSczlJtS6o5DQdOF3v0F8iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYGMvkZ1eVQ06Wdp1KtwDSlc82D2fC7QXaZggcCYrl5vLBmCm1GJmM32dSLeqF%2BMzncCeNvCyvca1zeyuQvH3I0EZ%2Fyrbd6j5ac8YsZASTnRWscQFuM%2FPIwDoTX5IUKAEKwD1XQ0XD1CxFFlqxSq7ZuKbazwlOcaRsuiq9IqCTETMLPnquNyppEdDn3Knq%2BKrqxXRAhvdqARcraBeOCN94f7BNZT4ubKy2ozVVT6xN4Pg7HcXJTek3t9rTDMhbiXKhSBjSMGTRHplsD2WmlMPrhx3MQoED7J4LdjKnMwoMHg0W49pB5Uddf7s8TfVYa5DPCb4%2ByHzF%2B7JDBet1e6ndKyHEpq0s62nejoZ5tYWIIr60sN9DjNi1C6%2FxVUvpFLIl09fvTePF2PgFDAZB3%2F4jyoomTPYggJlIKBfPUShJCKoL7AQpa%2BV64Is9LA2eOM91qimb1DhkmQ%2BU9vIAhKYvfQb6Brd3mN9ABWxRF5F3QyocSdIb7t7sIWl9VafYX0WW%2FDhcm%2FG60B%2B1WdUDPFTQfMTGTZui8skNdoJXblwPlRQ%2Fk52gbX0tU6rOkuuR2ByxksYGVTotRxCafiGxLdN5teya0be1ZJccIQa9bBPSwlhadTcPHvSC5FZmAV15V1DC7MhF43nv%2FyG1RkwspHnvAY6pgEMUdiKxUQ%2BtZAOuICxN8Eq%2FWli%2FUHVwy61dCKPII66sCmXECnVv6Ww80DAUeZaSXuIb1jKFQqB91afAaHQtuSKGrifNURA%2B5qCLsZZT1wSJYaizx%2BBnM4IfyKNCtVO2kte%2FsFHzCp9%2BALKzQIM6FrcL7RkZcvtgKbJCPdfpRJG08%2FM04oHuHIf5xJ8pBBfvYxs8wz%2FUlTF612NAoAr9dYmnOcu00FH&X-Amz-Signature=822ac74722369d1aa5b6b4d0e34da18348e1626a27bd3c6a9b43037201ac5b70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPFRPBCV%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDRA8g3vBCOZyYnO8J1g9tV%2FfD%2BHHC%2F02Vd33tPPwf2HQIgeFYpVP6EYoTkfW86NwxFcuHf5PXHVEcHbckRKFWoNQYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsIxq7HHNCMSqs9BircAxeF4cDlamtDU4Xcg2i1DK2YbnCj7i67TAdYQ7442QtDg4MH8J0AQdkq55hO0yb40o251i%2BxyViiijgPeT1Rzk51LZqGTpNmw1g9I2jYqFQFYVm9H9mjRQ%2FLSvgiEx0rnNyH3HcOCwPHpAh1F2FZCNVQaVoJ5weadtSu2hKc3fOn5nuWriZEktmdJGOpaLcQ83YMmVVFl5LptJfWzYfTPJxfUzj4gJ%2BRjCzqsDCe8n41PNhE12IEldqQgeftTdSVQGhd6xgNqI3tRRZr69LBCA%2BZk5mb7%2FWCNpznUG5qhvBizlwsNLvGm2Wer2nHb7wRhIYurJw5iftsnDZpbOv0d6LyJH9%2F8cuwCunWbfjq3Cn5EJjNlmiOuX1hIPg9g13rD%2FpQmrb18zFsMlPnnq7bQmeAJUtNvnVUHu5hDHq7jJGRRptpxmtyCyKOAopfleSPS0nKYf4u5gNmTQym7JJoRPGJEmuxv8YaO0ijSV3Cx8TdiBTUVVsOn3O%2BE1RqdwI1QzwqRMPxMp74Sqe4YzrBR3Z282TDgCQJCj0BddffatLZC8Lw01A6bdM9tvssmM1H7%2Bgivh%2Fdzj0MVuykGJxusRc1A7EvO4gxGJeaUdEWo8e%2FAW9aT%2FyIzNigNwO5MPmR57wGOqUBqT%2FG%2Fxfp8n2U7J0kjuFqLKc8T0P1nskvhxa8oxWC2ifyuHM4VgUzmf9S%2BktqjfN5Ociu7Qw1EEsw%2BjuAIIwoEcKkErnJHtmgrVIhHBf15kklv3xrnJNtKRfUqyqlbMqHj7GPbkVJXdnWotT4psFTxWkr%2Fi3%2Fk66L4i84qDlCnuY711fJoEwmKR5bca0NeYal9686j7QDrURU0raERLJr8pXQWYAh&X-Amz-Signature=9973668f15957a1b04a25bcf3a488de6c70752c1493146f2de789892a96486c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNOEVL5N%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIFprKSIIUj%2F7DVF7y5%2FlFrZzdG6WOr2elfm%2FdU23B5b2AiBtVWBBijcp5dADpLsERnDyiSWQBIFPglkOpnqpoJo8HiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhGo1J995%2BnEimrzRKtwD8u7MbusOZ4r%2FSpi5dgmY5hHnajL8WcNQ6iqW4fu97DoL9JBYlty7ksUDCtpw2FKq%2BIPOso1%2Fkmi3whVM6NDqhxf0YEbp9RggJZwkoZBshDMVqbkltLRok1y1XV42de8AYvQId7GnY0MUf%2B2kXwUunx5iPVrBK35xjnbSTK9i2L36Z2GTr6vHRY0g1b6og%2FLfGCA6Mt%2F6PJLvCRPWK%2BumJvLWNPGTkRM2XQfnGCgYjK2AB7naS9tRJwAAhM%2BemwKBphN57r1C99dtQNT0V9nhqahwSARG9uGbDfyIZvTwte%2FYfrP6qfM%2B%2BgniahKqUzfj6cMyNZVYj5pDOOFA1Y4MuaNeK%2FwrjuWJ%2BP%2B99%2BVh3FyTrUaMGB6thhTIUMo37SigYH%2Bmqd0alT8TUG2hcPfQvxI3AUIqv36WLZW3XeSRXDlDDWIxMPBA4xpnFQnuUm14y0%2Br0S%2B0z4BWMY1P6ty3AGjXzaNQnEZxUK9KIIlso2Aa0ANrzSPhOcUGp8qoIYsTuSg0ZjnfiDcOSb0b6iSdI9M0tP1x%2FAKRcLTglZNgsIMG5jodk%2BkZFRPDu3N0uKm2jKZeIyf4tTWGx4vDtnaJSol6ijRVqhh0GT1%2FfInUzIiMA%2F0iSPFjfB%2Bd8uUwxpLnvAY6pgGkIJI2TAQC1JsX7sUS%2BQa2nA2j9mR3rbwn06OBvsULsEAo%2FXGDkjRcerNjBWyMzoKkF8r2tc36xciuGq7NtPNmh1HyMQ53%2BZvLuxUGmNmsw7GlrHIxIzEVm0e2Xqb1gdj0yjHUaVbjW4zrl%2FfBI%2FNw%2BcjZ3ceojHXe0ylo4T2Mo%2B2JEJt9N%2BLvUQ%2BzAU6cGiXW6g7d5mo9RtpPirsvrAn2hLSg7fq%2B&X-Amz-Signature=a8cccb02ead3293a682ff068b44cacc0737a5dd15035c1d98e2156f3ac320779&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZKVMPQU%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIDJO8r19VY%2Bih9%2FZAYKe8xbtzN2kWJViZwFxMHvZpZS1AiBIO8GLGgt3yHnLeUkeytvmZSczlJtS6o5DQdOF3v0F8iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYGMvkZ1eVQ06Wdp1KtwDSlc82D2fC7QXaZggcCYrl5vLBmCm1GJmM32dSLeqF%2BMzncCeNvCyvca1zeyuQvH3I0EZ%2Fyrbd6j5ac8YsZASTnRWscQFuM%2FPIwDoTX5IUKAEKwD1XQ0XD1CxFFlqxSq7ZuKbazwlOcaRsuiq9IqCTETMLPnquNyppEdDn3Knq%2BKrqxXRAhvdqARcraBeOCN94f7BNZT4ubKy2ozVVT6xN4Pg7HcXJTek3t9rTDMhbiXKhSBjSMGTRHplsD2WmlMPrhx3MQoED7J4LdjKnMwoMHg0W49pB5Uddf7s8TfVYa5DPCb4%2ByHzF%2B7JDBet1e6ndKyHEpq0s62nejoZ5tYWIIr60sN9DjNi1C6%2FxVUvpFLIl09fvTePF2PgFDAZB3%2F4jyoomTPYggJlIKBfPUShJCKoL7AQpa%2BV64Is9LA2eOM91qimb1DhkmQ%2BU9vIAhKYvfQb6Brd3mN9ABWxRF5F3QyocSdIb7t7sIWl9VafYX0WW%2FDhcm%2FG60B%2B1WdUDPFTQfMTGTZui8skNdoJXblwPlRQ%2Fk52gbX0tU6rOkuuR2ByxksYGVTotRxCafiGxLdN5teya0be1ZJccIQa9bBPSwlhadTcPHvSC5FZmAV15V1DC7MhF43nv%2FyG1RkwspHnvAY6pgEMUdiKxUQ%2BtZAOuICxN8Eq%2FWli%2FUHVwy61dCKPII66sCmXECnVv6Ww80DAUeZaSXuIb1jKFQqB91afAaHQtuSKGrifNURA%2B5qCLsZZT1wSJYaizx%2BBnM4IfyKNCtVO2kte%2FsFHzCp9%2BALKzQIM6FrcL7RkZcvtgKbJCPdfpRJG08%2FM04oHuHIf5xJ8pBBfvYxs8wz%2FUlTF612NAoAr9dYmnOcu00FH&X-Amz-Signature=7e60cca1417b5d75a900d80a7454eb57f80fc1db9c044f1f6897b38979640eba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
