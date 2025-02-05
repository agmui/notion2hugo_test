---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "null/Getting_Started.md"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2X5ISYP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCTtjF3wSbsvoEJ4fBri6%2FU191aqxGleq7xpah6gOtCzgIgEsHP%2FA%2FnbpQWK1mHbX1SYkgClXnSheK9%2FntQx2DucrMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMTYa4jHtCVM7kqrGCrcA0BI8PJ6%2FGPfY%2Bxfx%2BpC0si0Jduaoqy9EIc2aGGrt%2FdTcRukla1gNgFGoZ%2Fdm7Yjm5gWq0KlApfmXJpwGH6eaqkoxe9koy2UHvBEjO2IFKAaLGTUMNr5KLXn7xW4mKCh3u4HO57bHwDEFxA5j66veMLvio7pZPYvp7hMfGaS5xvVqnw7hW8fQ%2BEz1BbXfWHxhwKkKSJ7JvprmvcKLMUpOhHWctbSJCXADRiz0zYSJmzT0QmbvM4mohs1b5sH20kfdJNxfDcvgaVD94YTN3IdQ7uTHtAg6bx%2BTxkfVgWhkpa2jt8PEly8GtrDrTCPUur0KnJnbG%2BpV6vtf2jkgNYIrJXUixSpUP3p63fKulXB8oG%2FNs5GWfQ0R45XFbpee11PMGf4Dm3l2Yc7UXvRmTnOMIVmBVfhpi6WtXyBLRNk%2FpQ3frFpHd%2FMdBZXRV2qSpy8yzViS4ARnvoYpnz2beGaki4JTeGBhYLkDPdcEGgRHpUfUm6NzuHWLn7QYffKtb34v2xbZPatYTnvUmWu%2FCo4r6%2Be22vRjfhAggzLh2HY1%2FhO8v4WfyDkcOkEBuzWDmG9HkcdG7oHcNa8EkotaXzGmNxO%2F4BlWeZtCl3%2FLkrdwG2Ic6NyPT2%2FbPBJvuHuMIOXjL0GOqUB7a658tX4OEIqrofvoH22Lcsl9BNg0by6kp3GoDZVA73SIF2%2B1F13psuK6YAtuN6jbGiDJ%2BtIX0WC460MNEaTu9Viiz0reZl1YSjFXkM4tAm9tv8EiK%2Fkgv65Pur%2F5CeYkdN5MRzB2hVQP7e%2B%2BLwIv3s1HR4F9e6r77ElyrhmV0fTKi1b0RMEG6GSOmE7%2Fjx7J1pw0Q8rp3Ay44hvpIfaUfo%2FcsVT&X-Amz-Signature=79e6f798636410a0bdda91483141969cab68890bab4d75f4b1b2d673abdebcf1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2X5ISYP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCTtjF3wSbsvoEJ4fBri6%2FU191aqxGleq7xpah6gOtCzgIgEsHP%2FA%2FnbpQWK1mHbX1SYkgClXnSheK9%2FntQx2DucrMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMTYa4jHtCVM7kqrGCrcA0BI8PJ6%2FGPfY%2Bxfx%2BpC0si0Jduaoqy9EIc2aGGrt%2FdTcRukla1gNgFGoZ%2Fdm7Yjm5gWq0KlApfmXJpwGH6eaqkoxe9koy2UHvBEjO2IFKAaLGTUMNr5KLXn7xW4mKCh3u4HO57bHwDEFxA5j66veMLvio7pZPYvp7hMfGaS5xvVqnw7hW8fQ%2BEz1BbXfWHxhwKkKSJ7JvprmvcKLMUpOhHWctbSJCXADRiz0zYSJmzT0QmbvM4mohs1b5sH20kfdJNxfDcvgaVD94YTN3IdQ7uTHtAg6bx%2BTxkfVgWhkpa2jt8PEly8GtrDrTCPUur0KnJnbG%2BpV6vtf2jkgNYIrJXUixSpUP3p63fKulXB8oG%2FNs5GWfQ0R45XFbpee11PMGf4Dm3l2Yc7UXvRmTnOMIVmBVfhpi6WtXyBLRNk%2FpQ3frFpHd%2FMdBZXRV2qSpy8yzViS4ARnvoYpnz2beGaki4JTeGBhYLkDPdcEGgRHpUfUm6NzuHWLn7QYffKtb34v2xbZPatYTnvUmWu%2FCo4r6%2Be22vRjfhAggzLh2HY1%2FhO8v4WfyDkcOkEBuzWDmG9HkcdG7oHcNa8EkotaXzGmNxO%2F4BlWeZtCl3%2FLkrdwG2Ic6NyPT2%2FbPBJvuHuMIOXjL0GOqUB7a658tX4OEIqrofvoH22Lcsl9BNg0by6kp3GoDZVA73SIF2%2B1F13psuK6YAtuN6jbGiDJ%2BtIX0WC460MNEaTu9Viiz0reZl1YSjFXkM4tAm9tv8EiK%2Fkgv65Pur%2F5CeYkdN5MRzB2hVQP7e%2B%2BLwIv3s1HR4F9e6r77ElyrhmV0fTKi1b0RMEG6GSOmE7%2Fjx7J1pw0Q8rp3Ay44hvpIfaUfo%2FcsVT&X-Amz-Signature=5696494ca72de535e3caac19b9a67fb250273cb2f638270b02ba442ff200e654&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVBADCX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIEygpt1laoO4eZxvuWep%2BA2SF8EPnhmeR1u3LVdNP5e4AiAMitWbRGT3bNg4vbEDLXcr0TFJyAhRy3EbFl1RqI1KYSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMC2Q0umJSro07L6PWKtwDgNxMcWrzLxdIsCgvUEmGBi8OPW%2BKn9jsT1PVwf2%2F5ViqYZXQn2dOaFP9EKsfMIR1CHDEpArHfcLigkG3EzLK2KuKN7SGhNnbpvzt%2BgzGwGDEdrtmChZpmEON7AK1%2BrfgGPkzMEd%2FC41B5OPj1Z%2Bm3qDQ38%2FlwxUkhTmO0nAtpP4mawIIQtU07cLyNnnsmRwTlzTSnPC67QMj8Ms5%2FGahbaTmvJ3KgkASAxZs9pofTbt9Y7XbY5M155NfF8nR1qGEXgCBeDBHf8THLoqZaPGUW7lwfenqTXJJnYQc71NSs5Hr36Cslc%2BzlbyIw2YIZropw5Zm0xHMwh%2Fy9prXqA3vd2jqst1S9J9Mc6hH6nk0XbKnG55LmyAHQp7NwaCWDw3oVWh7YOYpdnpV6%2FxCy06OkxUTOVwBFYqkfN8jk5LS8mbxTUNOLy2gXKhkeF%2F54oPr6SWxn9ZoXCU%2BxBfglTcsXMjh%2BFG7rNbDqXMencGYA8RiuUl0ysNOyVtAA8Bq%2FyuTfscDUK%2FRiKrfr7AMRh8Dxci3jzj0iIyNacbGxf2JVcExrtKxwXm%2B0CcDuQb4zOEdsZkZKE%2F%2F8o3UHlHSNKOAuplmuXdvbkPAEwGrgk%2FvwKeDfRtsaBdC6sxFRUkwwZeMvQY6pgEsNfphziVRe1FG41oYiqh9H20cQuXYhvTMXgoYE80GONpJsWZt06paD4%2BIcud9vT4UXkpUT6TacJKYLx9aeFM%2BeocuKQYkGeh8l2JfcR6bIkw7q8uUJVDwB%2FybqSezeSvCgwFxiSE0dc4TeXW23X4DsqYFmY64bqStdsCNoB04eCCEExXLAZwUbru%2FEIRJPGNa8THAXbDjOh0rlJo%2FJzg57ShCdU95&X-Amz-Signature=ff40d86622cf423097489f5f3a31176f324332ca978c296bc4da80f694ea9db4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH3NSOGZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQD2zjaYUv%2FWDDJwrpdQvKga1MggZ1unoSmcyRJWVXiKRQIhAKlA%2BAs%2FOGgOZilFZBelzUg69CIs%2B3cXkJqDIdTm8%2BZsKv8DCEAQABoMNjM3NDIzMTgzODA1IgzwLdarIxZKcuY59Loq3AOJu26ARYgVXreowjr5q70PB8OAkyRYzA%2FbK98ttjXEOQ6pk6R91yPBmFryLd80CJxS347IoWdxmkw3P0D%2BV1hC6muxBqfZFb82tFsKleVd6Midwi2JRl8kYiJeEllPnPQZQ3RGdt5J86uznxTs1Nm5YZdVAffEeF%2FAebEJGffuaus6eFDeha7IOHRYgZEqG0%2BNDxixuLxXlptcF%2BnGky0DIg3vEj6nSqjwKWVgN8OsJ9XxaOiUPidLr9uZtz4xD26DNOnbUnjzfLLg%2BLJUP2J41CKEus9Fe6CvtwFaEqd5JnMvCU9YSmJdflq4ZcAIBJjr%2FQiNPGnqsjwR%2FftPp2L7MRio%2F0LocXL9Z5WkwkSglb8JjPB2eoY7b2w0kQdT84GMiLdyY8P6qhKZTwC6FWPux6mlgQoXjbhJ2rokzULrSg4omkSbCTwCJaCPEzP9AWb3SY0FazU2LI5FDmWe1fjtPvvsCmgXUJqGnbEo6GVPt9UjVo8jlWOTfn31AUxAbUcXoryZPXXaUtjo%2Be%2B4UOg21jgtWlNCuHUbcgwEGx%2FlDK3ohQeBa7lvIphlNxLDxRV5feDDdjB8qnT4GuGIw%2F1VZheV4blnU4dyLCDuf3woyS4%2FQ%2FybFHPa4fL2%2BDD6loy9BjqkAfxARGTHSrLDRf%2FsCsqkaVV%2BfYa11kz3x%2B%2BKRVaex22Ll5E1lCrA%2F7nprbAugzzTxf2DnuNbB8BMy%2F365OzoqNRh%2B52VBVnodXQnz%2FK4on6KyoFtxgXfxVhW2FcO6kCSPUqMjU0dZRJMI7XbfeEHM3bMNHPVrtQCZTnOvDeY9YV4ittEV8rwD2U%2F1W5UETogOHBHecvQeNvgB5%2B%2BsKIytLk9pTpP&X-Amz-Signature=0083273af211035c4c9271b6771c1245513872fc516a655fd099cc08ac831036&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2X5ISYP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCTtjF3wSbsvoEJ4fBri6%2FU191aqxGleq7xpah6gOtCzgIgEsHP%2FA%2FnbpQWK1mHbX1SYkgClXnSheK9%2FntQx2DucrMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMTYa4jHtCVM7kqrGCrcA0BI8PJ6%2FGPfY%2Bxfx%2BpC0si0Jduaoqy9EIc2aGGrt%2FdTcRukla1gNgFGoZ%2Fdm7Yjm5gWq0KlApfmXJpwGH6eaqkoxe9koy2UHvBEjO2IFKAaLGTUMNr5KLXn7xW4mKCh3u4HO57bHwDEFxA5j66veMLvio7pZPYvp7hMfGaS5xvVqnw7hW8fQ%2BEz1BbXfWHxhwKkKSJ7JvprmvcKLMUpOhHWctbSJCXADRiz0zYSJmzT0QmbvM4mohs1b5sH20kfdJNxfDcvgaVD94YTN3IdQ7uTHtAg6bx%2BTxkfVgWhkpa2jt8PEly8GtrDrTCPUur0KnJnbG%2BpV6vtf2jkgNYIrJXUixSpUP3p63fKulXB8oG%2FNs5GWfQ0R45XFbpee11PMGf4Dm3l2Yc7UXvRmTnOMIVmBVfhpi6WtXyBLRNk%2FpQ3frFpHd%2FMdBZXRV2qSpy8yzViS4ARnvoYpnz2beGaki4JTeGBhYLkDPdcEGgRHpUfUm6NzuHWLn7QYffKtb34v2xbZPatYTnvUmWu%2FCo4r6%2Be22vRjfhAggzLh2HY1%2FhO8v4WfyDkcOkEBuzWDmG9HkcdG7oHcNa8EkotaXzGmNxO%2F4BlWeZtCl3%2FLkrdwG2Ic6NyPT2%2FbPBJvuHuMIOXjL0GOqUB7a658tX4OEIqrofvoH22Lcsl9BNg0by6kp3GoDZVA73SIF2%2B1F13psuK6YAtuN6jbGiDJ%2BtIX0WC460MNEaTu9Viiz0reZl1YSjFXkM4tAm9tv8EiK%2Fkgv65Pur%2F5CeYkdN5MRzB2hVQP7e%2B%2BLwIv3s1HR4F9e6r77ElyrhmV0fTKi1b0RMEG6GSOmE7%2Fjx7J1pw0Q8rp3Ay44hvpIfaUfo%2FcsVT&X-Amz-Signature=68ad4c9863ec5253d7e20a9687f356af25ee6829f1dcd1d9667f4e10e0c5bec8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
