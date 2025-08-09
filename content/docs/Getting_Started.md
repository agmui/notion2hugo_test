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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OTWKZ3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSmkoOY43UHHbwXOm7euYC2Z4hPkgovWI%2BSXkEdiTocAiAR79HWci8sbwdRAMI8cOd%2B0TtmDCMeA8Wr3wkulp1ZrSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8KgJAhpvncKH5dmKtwDkCeUi2EF%2BX26Lh2V7MCBYTJlPazLqzl0gRi75dU4Vx%2F8DZl7oTOYVi3w8B5ClauEU65zNJX0uKjmv25EwmAjucRsAFwjPncu6TQoFr8l8AkD4H0em0SBUANbQM8%2FZepRMdb3ASXeNrOIhptw9yDwKMrGs7pER79ZcNRngpAax28zrKXLD%2Fit5QDd4W3awL%2BftAKNxl48qf3%2B4%2B7ANieaPPZmrPq7R%2BGOCohOFMDOxwa8ljcNl8cUAa7uQkhgtm53XTUrFMeB6Zmqhy7b2zt3A%2FJlT8SywB%2BkauV3RyYkylRZ89TUSQ1RsnKmcoHZzRidc5US5Lw0z69iiG4MTsnyZ7cIOd6Yl5n9jdAxtPjVpeWci%2Fj2GgMHy1MFIGt1bdBbI5jpDW9VbTuxUY9RgHG2RtXu%2BuV4pvX9MdO4IP6uH4CQiDWUfoYcbR8p7mZsePq7o8j83MoPVGFWPNh1XEwTA30NfARp%2BOgNLLReounqOxxBAMA1o637M5slNIcQw3sIFnzcGDFGTEf5FNSjWg8VwPBmxx9TQHNnjM25E9ha0kVan%2BxIOt4zNgEMTiOcIwi8R5iVN1J6UWXV8zGvUmO2vZyeRa0oJez%2BS9YBI2TApkbp8yEYjnW3S%2FumGdAw0%2BncxAY6pgFJCWfDHoabsb9Us9zTFeNM5qrJ3bGwgWSTeQQmwtaWGqKdtSe4CBYoCDxWbulC8htJVbrKX0%2BAdx0TmSxef6OP4kL%2BKQpSwF9x1Puikpu5Frp%2FqNjL0As3rfE8p4wyfulGaT0Fypx20ipwE%2FO8T9214Nk4d5r8a0g4gyR8D8NphcqHb9Qb6tqaKig5Y8TcqsaxTxK6%2BpINFhN0Mt7Q0eStsxQubR%2B9&X-Amz-Signature=2cc2db54f4c565bd694fd2069ca359bb9e8f79dda0afa5c425e72c7f80dbbccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OTWKZ3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSmkoOY43UHHbwXOm7euYC2Z4hPkgovWI%2BSXkEdiTocAiAR79HWci8sbwdRAMI8cOd%2B0TtmDCMeA8Wr3wkulp1ZrSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8KgJAhpvncKH5dmKtwDkCeUi2EF%2BX26Lh2V7MCBYTJlPazLqzl0gRi75dU4Vx%2F8DZl7oTOYVi3w8B5ClauEU65zNJX0uKjmv25EwmAjucRsAFwjPncu6TQoFr8l8AkD4H0em0SBUANbQM8%2FZepRMdb3ASXeNrOIhptw9yDwKMrGs7pER79ZcNRngpAax28zrKXLD%2Fit5QDd4W3awL%2BftAKNxl48qf3%2B4%2B7ANieaPPZmrPq7R%2BGOCohOFMDOxwa8ljcNl8cUAa7uQkhgtm53XTUrFMeB6Zmqhy7b2zt3A%2FJlT8SywB%2BkauV3RyYkylRZ89TUSQ1RsnKmcoHZzRidc5US5Lw0z69iiG4MTsnyZ7cIOd6Yl5n9jdAxtPjVpeWci%2Fj2GgMHy1MFIGt1bdBbI5jpDW9VbTuxUY9RgHG2RtXu%2BuV4pvX9MdO4IP6uH4CQiDWUfoYcbR8p7mZsePq7o8j83MoPVGFWPNh1XEwTA30NfARp%2BOgNLLReounqOxxBAMA1o637M5slNIcQw3sIFnzcGDFGTEf5FNSjWg8VwPBmxx9TQHNnjM25E9ha0kVan%2BxIOt4zNgEMTiOcIwi8R5iVN1J6UWXV8zGvUmO2vZyeRa0oJez%2BS9YBI2TApkbp8yEYjnW3S%2FumGdAw0%2BncxAY6pgFJCWfDHoabsb9Us9zTFeNM5qrJ3bGwgWSTeQQmwtaWGqKdtSe4CBYoCDxWbulC8htJVbrKX0%2BAdx0TmSxef6OP4kL%2BKQpSwF9x1Puikpu5Frp%2FqNjL0As3rfE8p4wyfulGaT0Fypx20ipwE%2FO8T9214Nk4d5r8a0g4gyR8D8NphcqHb9Qb6tqaKig5Y8TcqsaxTxK6%2BpINFhN0Mt7Q0eStsxQubR%2B9&X-Amz-Signature=c9dfe5ad6a3740fb55a43121a0105c5d74c7513ceeed5210f9c6f3e8031038c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OTWKZ3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSmkoOY43UHHbwXOm7euYC2Z4hPkgovWI%2BSXkEdiTocAiAR79HWci8sbwdRAMI8cOd%2B0TtmDCMeA8Wr3wkulp1ZrSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8KgJAhpvncKH5dmKtwDkCeUi2EF%2BX26Lh2V7MCBYTJlPazLqzl0gRi75dU4Vx%2F8DZl7oTOYVi3w8B5ClauEU65zNJX0uKjmv25EwmAjucRsAFwjPncu6TQoFr8l8AkD4H0em0SBUANbQM8%2FZepRMdb3ASXeNrOIhptw9yDwKMrGs7pER79ZcNRngpAax28zrKXLD%2Fit5QDd4W3awL%2BftAKNxl48qf3%2B4%2B7ANieaPPZmrPq7R%2BGOCohOFMDOxwa8ljcNl8cUAa7uQkhgtm53XTUrFMeB6Zmqhy7b2zt3A%2FJlT8SywB%2BkauV3RyYkylRZ89TUSQ1RsnKmcoHZzRidc5US5Lw0z69iiG4MTsnyZ7cIOd6Yl5n9jdAxtPjVpeWci%2Fj2GgMHy1MFIGt1bdBbI5jpDW9VbTuxUY9RgHG2RtXu%2BuV4pvX9MdO4IP6uH4CQiDWUfoYcbR8p7mZsePq7o8j83MoPVGFWPNh1XEwTA30NfARp%2BOgNLLReounqOxxBAMA1o637M5slNIcQw3sIFnzcGDFGTEf5FNSjWg8VwPBmxx9TQHNnjM25E9ha0kVan%2BxIOt4zNgEMTiOcIwi8R5iVN1J6UWXV8zGvUmO2vZyeRa0oJez%2BS9YBI2TApkbp8yEYjnW3S%2FumGdAw0%2BncxAY6pgFJCWfDHoabsb9Us9zTFeNM5qrJ3bGwgWSTeQQmwtaWGqKdtSe4CBYoCDxWbulC8htJVbrKX0%2BAdx0TmSxef6OP4kL%2BKQpSwF9x1Puikpu5Frp%2FqNjL0As3rfE8p4wyfulGaT0Fypx20ipwE%2FO8T9214Nk4d5r8a0g4gyR8D8NphcqHb9Qb6tqaKig5Y8TcqsaxTxK6%2BpINFhN0Mt7Q0eStsxQubR%2B9&X-Amz-Signature=078b7161ee37c1fe701778efbeeac1dec40728c78c05c50cfeced337c027e6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643Y6KLSS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUNm5yHoT9%2FIIMjkRqUVIL8SRnzsPqkfiznKG9xm3h2wIgO1aMfM4I%2B67McIVuDyW09o3%2Fgj%2FThUhaCMgOONSUxlsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKprY6FYomMymBhtvircAyBodvNLpYnBVQkYz9%2FOuUcUv4U40XWrz%2BB6lliT3pQYmgu%2F4bBY8K%2FQE7BLwFxWz8Jd0I6A%2B4cva1qO30doeEXU5m3HcNFqfIlKsgmnwi%2BXipI552FVJGhGkRSBT2Il88qlEk3LNxt6%2BD3vx7CDb%2BdLbMLEkNVQXN%2Fk3n0OQbWQMNZpq4wXE%2B52qJsmL24r8J3TVMkGlm9DraPUYJAy8xuQBDuqN3BF%2BkMKAoL43omynPWfufGWzBetB8w16wCE1JQ%2Fi5YDgBVBbyFF21rjeC6IguR4fVvUNtkwp%2BlPNar1icLpur9aAsDv2OH5%2Bk2aYlsHY%2Bbql2MXXURy7sdydQurwIuLkhpd6AqD6fUA8O%2F7fRERXUOfG8MMKis0vhptvetDLiqho4H45bPnjrn9rLQ38zhsSNZbagARrRdzC%2FdYX5PQvQA%2FdqMy6Ey4L4i15SXDXXccI%2BFupHnJNtXvHqW%2BGfCcxKdjb%2Bj8zvUfsG%2FzwwU3l%2BjRAkScgQFaDV1TISfmdhP%2FbC8KRTgJ4EEHwu6WodhkdRWZLvkRq6oaPQkf0XmqrFZWHZ1Gsd4PWtLnyYJXmDFtL3%2FWsFiaITxM4lOnwwv%2BDpCZHZCt4RT5XYrjPrd9eRmck7U4%2B8WeMK%2Fi3MQGOqUB8cN1u2gU7oBIczk06RyiHhatbiM3srpyfZWCWNxdfrb%2BuFcO886iK08cdAv%2FMOiQ5tDj8taeaWCDaORQvgIDD4DPviU2SxynlLxcxGLluMBSlChHbJmWk1dDnTtQcfl9h0240038f4LYU1rmAv7Je3ZhZ1GwB9POACcInyb3IF4xWF6vi2aSYxweUKWSDDKIPbnWdR6jl7nMWs1TUZOuFPFul080&X-Amz-Signature=996dfcb06b6cdba6661bdc3b33bbe77cd4d6653a576619895b15c0e1ec2d0aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWUWI7L7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMdZvazycvDAYv7pPAH4O2nmM6uIEV39rwMk4hmGklngIhAI4ECL50nB5yMReec4rPz0bP0BMe0B49LoJs8HtmdrJSKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyAuVyZB98mm0Lh9Mq3AMip3BDOoKGvaYPEjmKRhKgiUSYrStbikXPmrCxN7JirHle1aNb2nDnz6OlUK0Exzpo43FzmWLOdeWcJ%2ByEPr1tNEW8b84triNu8uiXT6I0d%2BShKS3YrMh%2BD6tTay8Zw8JQfNYyePQJCFhm7UWNPHcu8GaqXY%2BCDM0OMFSKLrmshR34GG9BSwrJa51tDTsSSeHJfI2X8%2B67DuV%2BUiU%2BOVJPqJz6Qp%2BNyc%2FMVDfLSSwLj%2B%2B4qQrINeBUaxJzWuxARda%2FFmZdKBFyni1YZKKPIx1P3i1mQTMuWMJ%2F%2B6hKSeXOjWuaXBDr2gRG0xHzpxv8OclCGTqpwO1gT81bydzMoUkjSDrkPeQh81yEnPFt60ZsVz16g%2BFrgrms%2B5LVk5vWuXP4MWoPUYhUlSd37EW51xUelEuO2Nrb6LEnYWJmopRV29uYlGBIM7P2%2B8STtmPqwTbhtUhhKGds8UbDNxOoubtGcVua8LP6x0nskwh9DjcaGIP4tSpD9sXC%2BEBXhdFinMxhotkg%2FpKYYgJRBZD%2FH34wWZdNi%2FUs5dBGNCNi6%2F1g9V2qWB%2FBe0pyAU%2FtaoZzzO0Nytfvp%2FyAJ%2BF4FIKLNwUuR4FwR2UB4fHJWdoUHtQAcEWFi1q44k%2BpJpgbujDt49zEBjqkAYokO4gadWfZ%2BSTlnLuLBIYYZ3PYr6ZEUj0kutcMO63p7bpUM18D47WkZv5HClcNT6Tht4Jpac1aSlaCvaNCLdwfYtw1zp%2BWuDWTNge0Ho3iYWkqULPCZr6ggDukcQ1DkbMA9CFMh7PMoyRG8UHk6%2FwNkYEzQM2V4ZB6%2FlS4Qiv7P68tMDDyW2Ta5mJ5QoiSv4G8LdNrtIOgcdrEMezuVN7R4UyA&X-Amz-Signature=55032bda9046a95366df3e3df2fdefdc7d9c933afc42cb8cf2b4dcfe333571d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OTWKZ3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSmkoOY43UHHbwXOm7euYC2Z4hPkgovWI%2BSXkEdiTocAiAR79HWci8sbwdRAMI8cOd%2B0TtmDCMeA8Wr3wkulp1ZrSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8KgJAhpvncKH5dmKtwDkCeUi2EF%2BX26Lh2V7MCBYTJlPazLqzl0gRi75dU4Vx%2F8DZl7oTOYVi3w8B5ClauEU65zNJX0uKjmv25EwmAjucRsAFwjPncu6TQoFr8l8AkD4H0em0SBUANbQM8%2FZepRMdb3ASXeNrOIhptw9yDwKMrGs7pER79ZcNRngpAax28zrKXLD%2Fit5QDd4W3awL%2BftAKNxl48qf3%2B4%2B7ANieaPPZmrPq7R%2BGOCohOFMDOxwa8ljcNl8cUAa7uQkhgtm53XTUrFMeB6Zmqhy7b2zt3A%2FJlT8SywB%2BkauV3RyYkylRZ89TUSQ1RsnKmcoHZzRidc5US5Lw0z69iiG4MTsnyZ7cIOd6Yl5n9jdAxtPjVpeWci%2Fj2GgMHy1MFIGt1bdBbI5jpDW9VbTuxUY9RgHG2RtXu%2BuV4pvX9MdO4IP6uH4CQiDWUfoYcbR8p7mZsePq7o8j83MoPVGFWPNh1XEwTA30NfARp%2BOgNLLReounqOxxBAMA1o637M5slNIcQw3sIFnzcGDFGTEf5FNSjWg8VwPBmxx9TQHNnjM25E9ha0kVan%2BxIOt4zNgEMTiOcIwi8R5iVN1J6UWXV8zGvUmO2vZyeRa0oJez%2BS9YBI2TApkbp8yEYjnW3S%2FumGdAw0%2BncxAY6pgFJCWfDHoabsb9Us9zTFeNM5qrJ3bGwgWSTeQQmwtaWGqKdtSe4CBYoCDxWbulC8htJVbrKX0%2BAdx0TmSxef6OP4kL%2BKQpSwF9x1Puikpu5Frp%2FqNjL0As3rfE8p4wyfulGaT0Fypx20ipwE%2FO8T9214Nk4d5r8a0g4gyR8D8NphcqHb9Qb6tqaKig5Y8TcqsaxTxK6%2BpINFhN0Mt7Q0eStsxQubR%2B9&X-Amz-Signature=f335ed3dafbd788dd33daa3ca7d1c84c822d3cab5c77c79241aa16b4abc863d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
