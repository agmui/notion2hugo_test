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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3UYCJR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHFMUEYizOaeMDVS96l%2B%2BEMPE%2BbA5AKhq2e%2Bj5JGnSGkAiAH%2FPMaNIRiaccrnCAK4iCxejx%2BcMxkGcQ7WwcNKunmXCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM0M9BnkuOL3Pv5Q8aKtwDLbbp487UFD8sYLUkZV%2BURCiCRf1rFQe%2FZmsNQi16Qv4Urbwg2tFq0qbGvKB6lTO%2FANZodic16zdFSwyGbsYu1pDUJ3qC7zxfccbCu2eKK3Nw5WNo%2F7GNZaGtKj3O8OSVbgKgyA2FDsVmJPsTsC0tz%2BaTuvvuVNmsSEMEbGay1WEyRlWFyyfulf1HWh5Dvx9XduE0JFVYETIXif9A%2BJpY8PA5rl%2FO2z4%2FEsIg091JW0WHf%2BaSLSMu8CV%2F%2BnfOkVxFQQQ6cXcjvBFCF6XE8fPw%2Fd2jQe0K4%2FlfzvBvML13EA49%2B4IprPZz73a%2FMw2xGRUzQsEXo3C2zN2F0ZlaQZppPUtyV%2BGKM2AYIB%2Br1z1ZKY970MutffeKRfXAi0%2B3blp6P0jTbWPxvi%2F1Ye7w7gxZpdj5kBOtMsa%2BSIRHA%2BrWZKcKGfevMFpiXd5fQu3m4oR3SjSgzi0VJyjhm9bxGodu9UCw7cdO1L%2BPMZXvg%2BdQd%2FFOIhy5pKmvzWt8REdbmWU7NCBA%2FegpPlA3vqNq6%2FeBgdNF9hyryAPwnYX%2F75NDB3DlqotTKw5h5oUPABaLSHqH%2F0dVZulcdsOwRvegk%2FCb9eL0uboZnpQkqI0EhReyhIxvQtST9h99AXSKSxgw8c%2FMxAY6pgFx7V61D0JlxaGZ2s4srN%2FtImVSjOVd3iJLwJLlTd76ezbnyYCRim5Mha2i63w6ifKkM06LtrJnVcl7lKCwg9INZhrRcwbGEBHRVYRAm4DGJ7iIcsnV5iBPv6SujIQOQaSfRItqY1ttVgs6WI50At3PCNmS%2BevSZBeaLyFC%2FgNeUHxwDDK6wOJE9k%2B7DNPvCWq%2FeV4wMzt0vEZfBWdrHsvoumNFU8kH&X-Amz-Signature=591b752f6e215d8662e53fd2f2245850fda381ef8899eea8338898607fdc0ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3UYCJR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHFMUEYizOaeMDVS96l%2B%2BEMPE%2BbA5AKhq2e%2Bj5JGnSGkAiAH%2FPMaNIRiaccrnCAK4iCxejx%2BcMxkGcQ7WwcNKunmXCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM0M9BnkuOL3Pv5Q8aKtwDLbbp487UFD8sYLUkZV%2BURCiCRf1rFQe%2FZmsNQi16Qv4Urbwg2tFq0qbGvKB6lTO%2FANZodic16zdFSwyGbsYu1pDUJ3qC7zxfccbCu2eKK3Nw5WNo%2F7GNZaGtKj3O8OSVbgKgyA2FDsVmJPsTsC0tz%2BaTuvvuVNmsSEMEbGay1WEyRlWFyyfulf1HWh5Dvx9XduE0JFVYETIXif9A%2BJpY8PA5rl%2FO2z4%2FEsIg091JW0WHf%2BaSLSMu8CV%2F%2BnfOkVxFQQQ6cXcjvBFCF6XE8fPw%2Fd2jQe0K4%2FlfzvBvML13EA49%2B4IprPZz73a%2FMw2xGRUzQsEXo3C2zN2F0ZlaQZppPUtyV%2BGKM2AYIB%2Br1z1ZKY970MutffeKRfXAi0%2B3blp6P0jTbWPxvi%2F1Ye7w7gxZpdj5kBOtMsa%2BSIRHA%2BrWZKcKGfevMFpiXd5fQu3m4oR3SjSgzi0VJyjhm9bxGodu9UCw7cdO1L%2BPMZXvg%2BdQd%2FFOIhy5pKmvzWt8REdbmWU7NCBA%2FegpPlA3vqNq6%2FeBgdNF9hyryAPwnYX%2F75NDB3DlqotTKw5h5oUPABaLSHqH%2F0dVZulcdsOwRvegk%2FCb9eL0uboZnpQkqI0EhReyhIxvQtST9h99AXSKSxgw8c%2FMxAY6pgFx7V61D0JlxaGZ2s4srN%2FtImVSjOVd3iJLwJLlTd76ezbnyYCRim5Mha2i63w6ifKkM06LtrJnVcl7lKCwg9INZhrRcwbGEBHRVYRAm4DGJ7iIcsnV5iBPv6SujIQOQaSfRItqY1ttVgs6WI50At3PCNmS%2BevSZBeaLyFC%2FgNeUHxwDDK6wOJE9k%2B7DNPvCWq%2FeV4wMzt0vEZfBWdrHsvoumNFU8kH&X-Amz-Signature=0ca260cf698e0543beb0d2d6d5ded9a9e50da6c32c7efd9261650f05ded4517e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3UYCJR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHFMUEYizOaeMDVS96l%2B%2BEMPE%2BbA5AKhq2e%2Bj5JGnSGkAiAH%2FPMaNIRiaccrnCAK4iCxejx%2BcMxkGcQ7WwcNKunmXCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM0M9BnkuOL3Pv5Q8aKtwDLbbp487UFD8sYLUkZV%2BURCiCRf1rFQe%2FZmsNQi16Qv4Urbwg2tFq0qbGvKB6lTO%2FANZodic16zdFSwyGbsYu1pDUJ3qC7zxfccbCu2eKK3Nw5WNo%2F7GNZaGtKj3O8OSVbgKgyA2FDsVmJPsTsC0tz%2BaTuvvuVNmsSEMEbGay1WEyRlWFyyfulf1HWh5Dvx9XduE0JFVYETIXif9A%2BJpY8PA5rl%2FO2z4%2FEsIg091JW0WHf%2BaSLSMu8CV%2F%2BnfOkVxFQQQ6cXcjvBFCF6XE8fPw%2Fd2jQe0K4%2FlfzvBvML13EA49%2B4IprPZz73a%2FMw2xGRUzQsEXo3C2zN2F0ZlaQZppPUtyV%2BGKM2AYIB%2Br1z1ZKY970MutffeKRfXAi0%2B3blp6P0jTbWPxvi%2F1Ye7w7gxZpdj5kBOtMsa%2BSIRHA%2BrWZKcKGfevMFpiXd5fQu3m4oR3SjSgzi0VJyjhm9bxGodu9UCw7cdO1L%2BPMZXvg%2BdQd%2FFOIhy5pKmvzWt8REdbmWU7NCBA%2FegpPlA3vqNq6%2FeBgdNF9hyryAPwnYX%2F75NDB3DlqotTKw5h5oUPABaLSHqH%2F0dVZulcdsOwRvegk%2FCb9eL0uboZnpQkqI0EhReyhIxvQtST9h99AXSKSxgw8c%2FMxAY6pgFx7V61D0JlxaGZ2s4srN%2FtImVSjOVd3iJLwJLlTd76ezbnyYCRim5Mha2i63w6ifKkM06LtrJnVcl7lKCwg9INZhrRcwbGEBHRVYRAm4DGJ7iIcsnV5iBPv6SujIQOQaSfRItqY1ttVgs6WI50At3PCNmS%2BevSZBeaLyFC%2FgNeUHxwDDK6wOJE9k%2B7DNPvCWq%2FeV4wMzt0vEZfBWdrHsvoumNFU8kH&X-Amz-Signature=e20b5f48edc19df5030627d6f9f6a9ad65baca20389d97b2236a9420ee9bf70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJQFTBHN%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICy9hac%2Bgg%2BBm8awXwilIRTbbebhK%2BgWlO%2BgMM4ztLm4AiEA7EsbJjKV%2F3jfha99seTJunKGTwhkzuKhgfiIfuOiYtMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIFPGD2ahbrJLM2vyircA1QKEKReZKsvkkbvotrCZcbC0Hlg1hV37iSzdf%2FcJ093HMJnvBg4CPXC9eKYlgOdmrcyb3rquNeI1Bt32u98byOfa5L4M38sypH2u0p3CW%2FC9pDrahiKcsInhwRlAFJxg1iDbbspGqFIG7jH9rB4u72z%2BU6A%2F5DT9YU4Fq7MD8q57R0nBZRilLrT4fnyAeciKDkECcM1lo%2BUHnrZKyMPa8cK4lDTSPwMDelLASIaXKL3Lf%2BYltdbq%2B9AhFmJBQ5SJMQIDsHMVnk9zu7K7snANli3v6wVoc4P1%2FcFz1KBuUhOnLNW%2FQfhXJJkFhfEFpdhuy%2B9jsqXyJPYxiyM%2FmOJjo11074nHLMwGWyr6%2BYK%2BFx4F6QDrik8QC1V7WWYnFKVIBaTWFAqrNc6gApMQ9TrjYCW0i4U86%2FclHXRdpAP7PKnwKOBILjIVJEIp9HCr4j1NRqjoWhXcAamKGCgvea9%2BtlMyS6sMpY0Asi%2BBxWMqxTVHIii%2BaDqdv3ygOmloH%2FbRcoR8bHD5DK7b81mxX9lnnp8%2F%2F5sMJleF359OyC4OxP9fZE2iNstnJP%2B59JrdX4x5XYJb%2FCA%2BAjJJUsXKJAkbExbRfvkN1OfheN2Nlup9V9rdGlN%2BL%2FA5%2B355zrMMITPzMQGOqUB6uD%2BX9W90bOiTBoUFh%2BZMb5gdoJOwScq5yDbxV%2BdPLvkaF1zpCOF6e%2BgK%2BH7JW408xVRlKhbd9MpbTYDSqrSH%2F9vyRWH9AxBRwXGwmaXa%2BHe57%2FVqr1sG2Vc1dPwnnyUeGxn%2BPTZfzycIRdmX4wTkVQRCgBMzy9eUmCtV9VS73a9z4RDjmIlZFUta%2BN51i8dyAmHs1IafU1JCuR2c%2FwV6py5kAYM&X-Amz-Signature=013596dcd264e647c35f5b89dad40fe9535bff655f95269c04f11db34f3e27ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5KZK62B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC8rP9YGRQ94JX5y35rVNCP%2F74wFUXGrcJefJ9X5R99NAIgO6vS7SJDJdzE3nxMxaEVs7knfJFjLpQmY5TnTUD60T8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCRrBkgogrw1d5Nf0SrcA4w5mI1%2BtHZL9py9Z2ExclGbKsS3K1B4AKlCoL28OLY8LthotVn5QILucja66rQcDa8PUUgbeoC2tcFp00UWICxCcbzzIOoXnLKnoZayPpbjppSAUcgS4hvNL%2FHbJE8pG8l7BlElBKQuLYezx0TiqH9VCI3DaZ%2F7A80Ub0irkZQ54rfKZnUtvL6%2BuKu78dC7grBUv1F8tx3iQpGq3FWo6XjHeG5HapMAbUPSUuJS%2B%2B9fb8uJcI5g0p4e0Dygq3bg3HkVcMw8YeeQ5m6i%2FlVgcjhbUj%2F9QEyZv4SpJCpY6F2ADXyEExYmkVhjOYwq2fIL%2BAXY4Y2Y8aVvlk5aseCk3bGtaeurJnYjoyi7Wkas34Iup7SNE94adjpdsQV5p56%2BZIxVTh7lBXCfdbuWL%2BIZRyH34ngGQY2D%2Ffu%2BE8SJBhb1M0%2FmvxALB02BGif0XOQnecDcUrikI7Z6qVgeuqzsZC2lfyDjf1KE1y%2BZTyJLzFjsFXUXMVCVC%2FXJKMSVFkm26cDWyKp8nl1NkElrgMi8DRFuRsBZMwuiKGghH562%2FPBTs7MMauYJ6Mdm4RCdwzaf1s7SYCI2DtB%2FhhRH4cLR8%2FeNXInPvq46tUem66%2F%2F4EokeuSoTJyT0FDjqMyBMJfPzMQGOqUBBkXhJ%2BtrbZCyiXXyQBM6PhQhZqqtGHvUxU%2BtgGIlhrcmmNixQO0vuSeoKbpf6bIJaRbSTviipArXwN4VdOUIx0yWM6ow9ScCcGE5oZeFQs132%2FOmlENuIaklci5kTakPWamOyGHvWjGxxLsORRYzvjLgu%2FuIKbj38QJ8nfgbiz8QRzkvT5%2B29pNK27s75nUmFVwuR%2BXzJNX%2BNjCyk0%2FhBTblX4YR&X-Amz-Signature=ce5e9c8ea63269d86fe662b240c22b51252a01844c0272d8f651e393ac380cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3UYCJR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHFMUEYizOaeMDVS96l%2B%2BEMPE%2BbA5AKhq2e%2Bj5JGnSGkAiAH%2FPMaNIRiaccrnCAK4iCxejx%2BcMxkGcQ7WwcNKunmXCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM0M9BnkuOL3Pv5Q8aKtwDLbbp487UFD8sYLUkZV%2BURCiCRf1rFQe%2FZmsNQi16Qv4Urbwg2tFq0qbGvKB6lTO%2FANZodic16zdFSwyGbsYu1pDUJ3qC7zxfccbCu2eKK3Nw5WNo%2F7GNZaGtKj3O8OSVbgKgyA2FDsVmJPsTsC0tz%2BaTuvvuVNmsSEMEbGay1WEyRlWFyyfulf1HWh5Dvx9XduE0JFVYETIXif9A%2BJpY8PA5rl%2FO2z4%2FEsIg091JW0WHf%2BaSLSMu8CV%2F%2BnfOkVxFQQQ6cXcjvBFCF6XE8fPw%2Fd2jQe0K4%2FlfzvBvML13EA49%2B4IprPZz73a%2FMw2xGRUzQsEXo3C2zN2F0ZlaQZppPUtyV%2BGKM2AYIB%2Br1z1ZKY970MutffeKRfXAi0%2B3blp6P0jTbWPxvi%2F1Ye7w7gxZpdj5kBOtMsa%2BSIRHA%2BrWZKcKGfevMFpiXd5fQu3m4oR3SjSgzi0VJyjhm9bxGodu9UCw7cdO1L%2BPMZXvg%2BdQd%2FFOIhy5pKmvzWt8REdbmWU7NCBA%2FegpPlA3vqNq6%2FeBgdNF9hyryAPwnYX%2F75NDB3DlqotTKw5h5oUPABaLSHqH%2F0dVZulcdsOwRvegk%2FCb9eL0uboZnpQkqI0EhReyhIxvQtST9h99AXSKSxgw8c%2FMxAY6pgFx7V61D0JlxaGZ2s4srN%2FtImVSjOVd3iJLwJLlTd76ezbnyYCRim5Mha2i63w6ifKkM06LtrJnVcl7lKCwg9INZhrRcwbGEBHRVYRAm4DGJ7iIcsnV5iBPv6SujIQOQaSfRItqY1ttVgs6WI50At3PCNmS%2BevSZBeaLyFC%2FgNeUHxwDDK6wOJE9k%2B7DNPvCWq%2FeV4wMzt0vEZfBWdrHsvoumNFU8kH&X-Amz-Signature=77a9720a363390fd1b75f9300998eef4fd60ba2e2898f5eeeeb6e56d826f0a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
