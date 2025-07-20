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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAWMU4UH%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNrbSIpBZ2nQykYjH7aTtNfFk3eeEVO3nTE6LvI05EdwIhAPF3u%2FlrY0i8rl1qeOF1fpJvwxuKCct8x8a9%2BClxKNPJKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BhHW7JHwdIn3sN7sq3AO2lR2O8Faf4w1rxZ6dWbqNwCIJtIqlTKihmtymUXwqsHPyI80ZUF2KHptUjsZb0AI%2BIt633V4hCKxpgNmmSiMA7uHkqTXV8Cqh9gboHuy9qSokO66oFGVpgJD0uuVDs5g0nyZt1qLv5lj7JzniFfcy9FwvvvapIKfki6k0eGpTDvGR3oxY%2Bc5A%2BfosyS8PkLhGky%2F4%2FL8BWy8V9x4xlfmG%2BcwbA6ss%2Fbc1qzBIf9Xs6OGWKZAgEEOmXi4LhuoIGi27ezLr2xAbD5B8csHfgGIe35sFleKd31lZzJ%2FgO05Q%2Bharp%2B93nJUmCqw3xKuEgB8aP6xBn6cWEtBITqXT0yeQz7pS6Izl3RChus%2BvF8Kwqmq3Cv0OsWqSPmyKDNdyxnX6xwnKHybnxWammRnXplaWk88aKVoNHwAFzyyXfeIR0vRrKsX3629eWy7zYse5IZxGPQ%2FYtU8VrC29t18kfl7xKkxFmRwHDxwKEWKUxs6ZBCOe8LHDPa6xs03Dp%2BsVmjhpdxZd7BoUTZPvOjgg9pWRdvixcNZfaZ6PjAZ4it%2BEtDNWKSBAdFdlsuYyoHiA59MnSl9SmVYmj54%2Bo6eZOvl6fIGJJnZ1Nw8AgG7WJO3Qz68IspciqsZYdK83pTCcv%2FLDBjqkAZb1VP02K%2B4xqctxaNDQOAfC68Hv2G4DSkwW0SwAGS4qWE5dDQhRzN7WmcLR4BN17LLSTp8jTUZh7t3ZjyQFvRkNbcFbyDTSyX95DHZz8OizY%2BZ%2BN2yrYxPqp1zBzEgywrUVcoZ8KRWoOQqmOm42GO%2FOwMiq6lm%2B9mWRVUueKeqF4mTPw7Tg4xizQpJToRQQB9xzdZsonR35JlW96d9%2BSZrF8mAJ&X-Amz-Signature=fb3f66f82d94afb7b2122d6d2a82d3e81b32a000159271e6f110e86771dc2b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAWMU4UH%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNrbSIpBZ2nQykYjH7aTtNfFk3eeEVO3nTE6LvI05EdwIhAPF3u%2FlrY0i8rl1qeOF1fpJvwxuKCct8x8a9%2BClxKNPJKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BhHW7JHwdIn3sN7sq3AO2lR2O8Faf4w1rxZ6dWbqNwCIJtIqlTKihmtymUXwqsHPyI80ZUF2KHptUjsZb0AI%2BIt633V4hCKxpgNmmSiMA7uHkqTXV8Cqh9gboHuy9qSokO66oFGVpgJD0uuVDs5g0nyZt1qLv5lj7JzniFfcy9FwvvvapIKfki6k0eGpTDvGR3oxY%2Bc5A%2BfosyS8PkLhGky%2F4%2FL8BWy8V9x4xlfmG%2BcwbA6ss%2Fbc1qzBIf9Xs6OGWKZAgEEOmXi4LhuoIGi27ezLr2xAbD5B8csHfgGIe35sFleKd31lZzJ%2FgO05Q%2Bharp%2B93nJUmCqw3xKuEgB8aP6xBn6cWEtBITqXT0yeQz7pS6Izl3RChus%2BvF8Kwqmq3Cv0OsWqSPmyKDNdyxnX6xwnKHybnxWammRnXplaWk88aKVoNHwAFzyyXfeIR0vRrKsX3629eWy7zYse5IZxGPQ%2FYtU8VrC29t18kfl7xKkxFmRwHDxwKEWKUxs6ZBCOe8LHDPa6xs03Dp%2BsVmjhpdxZd7BoUTZPvOjgg9pWRdvixcNZfaZ6PjAZ4it%2BEtDNWKSBAdFdlsuYyoHiA59MnSl9SmVYmj54%2Bo6eZOvl6fIGJJnZ1Nw8AgG7WJO3Qz68IspciqsZYdK83pTCcv%2FLDBjqkAZb1VP02K%2B4xqctxaNDQOAfC68Hv2G4DSkwW0SwAGS4qWE5dDQhRzN7WmcLR4BN17LLSTp8jTUZh7t3ZjyQFvRkNbcFbyDTSyX95DHZz8OizY%2BZ%2BN2yrYxPqp1zBzEgywrUVcoZ8KRWoOQqmOm42GO%2FOwMiq6lm%2B9mWRVUueKeqF4mTPw7Tg4xizQpJToRQQB9xzdZsonR35JlW96d9%2BSZrF8mAJ&X-Amz-Signature=2717f676d0694c0fa8936aaf6f1a634b3a5db5054df27e06fbf9d3a8e08ffdf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAWMU4UH%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNrbSIpBZ2nQykYjH7aTtNfFk3eeEVO3nTE6LvI05EdwIhAPF3u%2FlrY0i8rl1qeOF1fpJvwxuKCct8x8a9%2BClxKNPJKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BhHW7JHwdIn3sN7sq3AO2lR2O8Faf4w1rxZ6dWbqNwCIJtIqlTKihmtymUXwqsHPyI80ZUF2KHptUjsZb0AI%2BIt633V4hCKxpgNmmSiMA7uHkqTXV8Cqh9gboHuy9qSokO66oFGVpgJD0uuVDs5g0nyZt1qLv5lj7JzniFfcy9FwvvvapIKfki6k0eGpTDvGR3oxY%2Bc5A%2BfosyS8PkLhGky%2F4%2FL8BWy8V9x4xlfmG%2BcwbA6ss%2Fbc1qzBIf9Xs6OGWKZAgEEOmXi4LhuoIGi27ezLr2xAbD5B8csHfgGIe35sFleKd31lZzJ%2FgO05Q%2Bharp%2B93nJUmCqw3xKuEgB8aP6xBn6cWEtBITqXT0yeQz7pS6Izl3RChus%2BvF8Kwqmq3Cv0OsWqSPmyKDNdyxnX6xwnKHybnxWammRnXplaWk88aKVoNHwAFzyyXfeIR0vRrKsX3629eWy7zYse5IZxGPQ%2FYtU8VrC29t18kfl7xKkxFmRwHDxwKEWKUxs6ZBCOe8LHDPa6xs03Dp%2BsVmjhpdxZd7BoUTZPvOjgg9pWRdvixcNZfaZ6PjAZ4it%2BEtDNWKSBAdFdlsuYyoHiA59MnSl9SmVYmj54%2Bo6eZOvl6fIGJJnZ1Nw8AgG7WJO3Qz68IspciqsZYdK83pTCcv%2FLDBjqkAZb1VP02K%2B4xqctxaNDQOAfC68Hv2G4DSkwW0SwAGS4qWE5dDQhRzN7WmcLR4BN17LLSTp8jTUZh7t3ZjyQFvRkNbcFbyDTSyX95DHZz8OizY%2BZ%2BN2yrYxPqp1zBzEgywrUVcoZ8KRWoOQqmOm42GO%2FOwMiq6lm%2B9mWRVUueKeqF4mTPw7Tg4xizQpJToRQQB9xzdZsonR35JlW96d9%2BSZrF8mAJ&X-Amz-Signature=a2b77886ba8bd3d60ed8d7ac266a60aebed63710ca17049ac4c04623c6455471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NAHHNOM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtdQ4WRb2Ru6X%2BQU2RoO5pXPkfP2vTdvsTc7UR1nIx7AiAf5faqYSj08hBZpmqxHivXUT6oECZbNMVYWlXvOiJ4GiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzW%2B6Q415j87bTsdIKtwDlU6DQGxizq2CCzfRXfijnM5wPPH3vtQLssgSTjzLUBtK2OApljEk2H7B2FawlH7QH3LjVemoLE%2FydN5em8k6j2JI%2B0xWF4hUeRtl005HjtTRVAYk7jUA6dScHwV%2FhCZWOju0ZW4ojU37cm6YjOYQUp1Pl96hc%2B0TfW%2Fcv9vnPr3Zte%2FEu5YC5rJEmdGT2WBYyrZcYQaJew4Ml5APNVGz0%2BoZwS2m7CLEh6xsnemMZHqiZ7u3TmFfRGLri16RFzW5D7woEXVbITxIHea%2BZMIfWAQ%2B4REYClOGmdiWoms0Q7qjfbIzW%2B3KIZvk%2FzzKS2b7TO%2FVle0QZEBwWv7jkwbRH4PSR2b7jIh08Id1O0Fd6mJCDEAwpRvrDJswqJi1qXUoI9ZXtQa5sY337PsotHyrMhZs0RuFERWX%2BPQdNCLyEf7oSppIQstm4ZsxGrT9GRMCMyw8CBrguDiOlU6lrTM%2BzsjX0rJOS%2Fmj5r3ML3ZCwmnc7ODga7xg59zNHkVmqvqN7ZXbglevldoYyf%2BYQcrhcy5jFD6s3kSMCfTdtcEaG5FaZOaQEa8h81tC2m25WbFdIHAsJ4gAuKJuEdIBs9YCLX%2Bt1aVQ7Mi0qgn%2F4e2ewujTMgqyW2Mdz%2FC3f%2Fww6L%2FywwY6pgGtIxiXwS4e%2Bd5fL%2BDpnB0VXF%2Fyqeer56NO52CUFezoBKyIyBP9JauilmiScMVRp00SXCd1ta6ARbgHhXIowJevrexhFVnj7cyHdemy93nzwHLSnpdR29TMfYBExDCY2Os%2FFOGgs1cNN6F7eAQRPD8CoMi8%2B1oJctqBI21zfjj7wcLU5if4AYQ91Pnfd4yBkOnQz%2F8LUchfKt5cVCHDwOcBFOGUXHag&X-Amz-Signature=f9498d7e5bbed12ee0a05ef2beb6007b85ab90680775c5841ad1d96470cae20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNGJA6I%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICoOEF925xogw%2Be5odOmINKNTeK9kg4ekR463nsDq4XpAiEA0bMhxtLR0RWNzAEs9lVsEjCBT3Ageba%2F2%2FYGVr12qsAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWG%2BJzp8YoYSudOlSrcA0GBAlDL01isRtOOIxE3n0ZKZf0S1tusJJe5AT6i10HM4SXKWF9XSbwBMFeStxTvykoQdnYZptnFp7OYPCIzdCyJLpxzIi8VnSMGnbkCD7dXEWsWykXED8eflYfdS10lk3Rr3OM8xmy3TrBQeNt1b8fPCJ9PC8S7u69I5JPZAVrqGN%2B7WcEOGn55khAzd0OPAih08KhzD2gwNj9lKX%2BR14ng59RvyZzF8821weyQQMM17O%2FleZgehFCvrHs2jff0q2pwPUcN8RsGA4vWH0Lyjcn1ZG8761xjICKH7LKktoTLcHcz8D0j0ZMzVoOZgbPHbgeyuCbfe%2Fks6FRavryMvnqFlhcHnBe0I%2FmdPMaBCVM0NLgYVcCioGDrMfqfpukHw4nt8zBDhqB%2B8g1tTpD8ZQbu%2BapHVpFxie6Ql8WHPWFtkEUshvpF8RXY2mvNJtl9jy1peu9Jd5Ux%2F%2FJG5lQI7UbWBM1RxDkpjdbsiiirZJPBkFDohtZGH4BfwMKQ6IC1xVnJeD6Mctdd5Br85eijMUvZT5BMjipIcMqxcBKenVGau4Gm2SoV0tYNwEY%2BrT8%2BzkI%2FTfrwK%2BDkR4AFAy%2Fr3cAgHgV1JVZ%2BmqAljPQTaBWFlWOz7Zlm7XfYP7FYMJO08sMGOqUBa7GhwktRMhFDmvwnjSFPhk4GNXMmaENlTEPTbQNxyiky9TNKPptoo8VljgBR3ixO1XjI9ktCmIB0f9NHCJ96G2lwRQTFL5LnNIy1VKaYRnaPMoQeouUBEH3KEFuzpKd%2FlkSBwNw8gDG3XqD2pQEJ7gZ4Ize6ax9hvPeFRnYl0sOBjQwOV5u4k8XGRJx0k3sPbfIXZrc9vsGm6AIFUTxGIdILM15f&X-Amz-Signature=a286b42d548fd0bc6d0174209b2bef42d7fee74df0e6d78ceaf7fce3e16d5ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAWMU4UH%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNrbSIpBZ2nQykYjH7aTtNfFk3eeEVO3nTE6LvI05EdwIhAPF3u%2FlrY0i8rl1qeOF1fpJvwxuKCct8x8a9%2BClxKNPJKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BhHW7JHwdIn3sN7sq3AO2lR2O8Faf4w1rxZ6dWbqNwCIJtIqlTKihmtymUXwqsHPyI80ZUF2KHptUjsZb0AI%2BIt633V4hCKxpgNmmSiMA7uHkqTXV8Cqh9gboHuy9qSokO66oFGVpgJD0uuVDs5g0nyZt1qLv5lj7JzniFfcy9FwvvvapIKfki6k0eGpTDvGR3oxY%2Bc5A%2BfosyS8PkLhGky%2F4%2FL8BWy8V9x4xlfmG%2BcwbA6ss%2Fbc1qzBIf9Xs6OGWKZAgEEOmXi4LhuoIGi27ezLr2xAbD5B8csHfgGIe35sFleKd31lZzJ%2FgO05Q%2Bharp%2B93nJUmCqw3xKuEgB8aP6xBn6cWEtBITqXT0yeQz7pS6Izl3RChus%2BvF8Kwqmq3Cv0OsWqSPmyKDNdyxnX6xwnKHybnxWammRnXplaWk88aKVoNHwAFzyyXfeIR0vRrKsX3629eWy7zYse5IZxGPQ%2FYtU8VrC29t18kfl7xKkxFmRwHDxwKEWKUxs6ZBCOe8LHDPa6xs03Dp%2BsVmjhpdxZd7BoUTZPvOjgg9pWRdvixcNZfaZ6PjAZ4it%2BEtDNWKSBAdFdlsuYyoHiA59MnSl9SmVYmj54%2Bo6eZOvl6fIGJJnZ1Nw8AgG7WJO3Qz68IspciqsZYdK83pTCcv%2FLDBjqkAZb1VP02K%2B4xqctxaNDQOAfC68Hv2G4DSkwW0SwAGS4qWE5dDQhRzN7WmcLR4BN17LLSTp8jTUZh7t3ZjyQFvRkNbcFbyDTSyX95DHZz8OizY%2BZ%2BN2yrYxPqp1zBzEgywrUVcoZ8KRWoOQqmOm42GO%2FOwMiq6lm%2B9mWRVUueKeqF4mTPw7Tg4xizQpJToRQQB9xzdZsonR35JlW96d9%2BSZrF8mAJ&X-Amz-Signature=0c875acc49b989565fa528c102a6bc9f3d1dba59ab3a1625f2a70cfc7c93379f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
