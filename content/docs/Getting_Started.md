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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4W4LX4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFw21LHD0PXxZOAGxtOjV4tfXEhnZ%2BAHCfi%2Bzy7zAxUwAiEAkAt7FekubJmm%2BBCbRSKd93JskTQ3r4Za2PSajTv7PaYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO%2F45i7pBGITTZK1LSrcA5a54lnzLyGbbgELumXYiCubLEWcrMjytUb7wWQZWS02mKSiLjeJk44RsZv16zTJ9ebPjF00kOU59QVX8fSSQs%2B7dUW4NN%2FBdSDy1ZZeabYDVa43oPWW3DqxaLWWUHdf2XORLkiLUa%2B1shS%2BrfQZdOhCTWEbpj%2B1c7Ji0YxCLlai%2B36lsuA6L6ii2zQW5yXgszQf8Q0NklnvqfpqzgyCmoQKuBdtcNW8LSNnHpwSem4yYPA7QG1QzL5rNRp53PcTLYiAf2DBJsFD5dI3njMhq1yuSjE%2F4GMH%2BERYsUHBEVQHLETb02IhdHLV8gOemPgwyffs52%2FftR3Zach%2FIV%2FoIqQbcmd00pxNTd3K5cZS%2BqOR86KGMkMCOEZaOUbZa8wzWvNEoIJcV40bEDtaZqO2P5dATjkUG6d5eOwfexqL2BLnibdgH9dzHwrSG3rrTEzF3QhqiSYRsXUCymAtzZ%2FzAeXsjIy0wZJJyQtIfHDD4UM4Qf5Uo5mxIiIp4LrRBLdT%2FU%2B5vAYJjavOoLrS6w2tchq9cwo8fLd%2Bq2pNIpRrCAAyjVHl1OnW8Dj5naXsm3fwEIYsusCaRif4rMpbmwL45Mn9yoyam4ZvOeQSlmsXiSkQX7ro5zM6i3%2FWTEOfMMHm38MGOqUBIqbC20g9eUVzw%2FC4gJniFYPFhq8N4cgiau0rJ9d3JxrZKXXBNMnlQy4me7pqy%2BHNXPQsJl%2Fm7C05MYaR0m6n7f8OnnHysjZ%2Byc2pfWXNlSwXH18D3w7Hggn7T7VXoGLSklpdFFMk8pEhXWt1FkPzEBcx879uJMC%2BgV2kN3KHu8QSPRl75ep56DpD1ZquqxgYw6XGIlEvTtQfLNnI3J1LRhJtiBE%2B&X-Amz-Signature=734ad18c1fbad80a935176bbdde00be7e3adf7a2e8362a96441cbf2743ad01c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4W4LX4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFw21LHD0PXxZOAGxtOjV4tfXEhnZ%2BAHCfi%2Bzy7zAxUwAiEAkAt7FekubJmm%2BBCbRSKd93JskTQ3r4Za2PSajTv7PaYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO%2F45i7pBGITTZK1LSrcA5a54lnzLyGbbgELumXYiCubLEWcrMjytUb7wWQZWS02mKSiLjeJk44RsZv16zTJ9ebPjF00kOU59QVX8fSSQs%2B7dUW4NN%2FBdSDy1ZZeabYDVa43oPWW3DqxaLWWUHdf2XORLkiLUa%2B1shS%2BrfQZdOhCTWEbpj%2B1c7Ji0YxCLlai%2B36lsuA6L6ii2zQW5yXgszQf8Q0NklnvqfpqzgyCmoQKuBdtcNW8LSNnHpwSem4yYPA7QG1QzL5rNRp53PcTLYiAf2DBJsFD5dI3njMhq1yuSjE%2F4GMH%2BERYsUHBEVQHLETb02IhdHLV8gOemPgwyffs52%2FftR3Zach%2FIV%2FoIqQbcmd00pxNTd3K5cZS%2BqOR86KGMkMCOEZaOUbZa8wzWvNEoIJcV40bEDtaZqO2P5dATjkUG6d5eOwfexqL2BLnibdgH9dzHwrSG3rrTEzF3QhqiSYRsXUCymAtzZ%2FzAeXsjIy0wZJJyQtIfHDD4UM4Qf5Uo5mxIiIp4LrRBLdT%2FU%2B5vAYJjavOoLrS6w2tchq9cwo8fLd%2Bq2pNIpRrCAAyjVHl1OnW8Dj5naXsm3fwEIYsusCaRif4rMpbmwL45Mn9yoyam4ZvOeQSlmsXiSkQX7ro5zM6i3%2FWTEOfMMHm38MGOqUBIqbC20g9eUVzw%2FC4gJniFYPFhq8N4cgiau0rJ9d3JxrZKXXBNMnlQy4me7pqy%2BHNXPQsJl%2Fm7C05MYaR0m6n7f8OnnHysjZ%2Byc2pfWXNlSwXH18D3w7Hggn7T7VXoGLSklpdFFMk8pEhXWt1FkPzEBcx879uJMC%2BgV2kN3KHu8QSPRl75ep56DpD1ZquqxgYw6XGIlEvTtQfLNnI3J1LRhJtiBE%2B&X-Amz-Signature=02ad9d680bd751c5e6ba1db3320edad5875d14001cc7eb6c6b8191a81c0b4f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4W4LX4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFw21LHD0PXxZOAGxtOjV4tfXEhnZ%2BAHCfi%2Bzy7zAxUwAiEAkAt7FekubJmm%2BBCbRSKd93JskTQ3r4Za2PSajTv7PaYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO%2F45i7pBGITTZK1LSrcA5a54lnzLyGbbgELumXYiCubLEWcrMjytUb7wWQZWS02mKSiLjeJk44RsZv16zTJ9ebPjF00kOU59QVX8fSSQs%2B7dUW4NN%2FBdSDy1ZZeabYDVa43oPWW3DqxaLWWUHdf2XORLkiLUa%2B1shS%2BrfQZdOhCTWEbpj%2B1c7Ji0YxCLlai%2B36lsuA6L6ii2zQW5yXgszQf8Q0NklnvqfpqzgyCmoQKuBdtcNW8LSNnHpwSem4yYPA7QG1QzL5rNRp53PcTLYiAf2DBJsFD5dI3njMhq1yuSjE%2F4GMH%2BERYsUHBEVQHLETb02IhdHLV8gOemPgwyffs52%2FftR3Zach%2FIV%2FoIqQbcmd00pxNTd3K5cZS%2BqOR86KGMkMCOEZaOUbZa8wzWvNEoIJcV40bEDtaZqO2P5dATjkUG6d5eOwfexqL2BLnibdgH9dzHwrSG3rrTEzF3QhqiSYRsXUCymAtzZ%2FzAeXsjIy0wZJJyQtIfHDD4UM4Qf5Uo5mxIiIp4LrRBLdT%2FU%2B5vAYJjavOoLrS6w2tchq9cwo8fLd%2Bq2pNIpRrCAAyjVHl1OnW8Dj5naXsm3fwEIYsusCaRif4rMpbmwL45Mn9yoyam4ZvOeQSlmsXiSkQX7ro5zM6i3%2FWTEOfMMHm38MGOqUBIqbC20g9eUVzw%2FC4gJniFYPFhq8N4cgiau0rJ9d3JxrZKXXBNMnlQy4me7pqy%2BHNXPQsJl%2Fm7C05MYaR0m6n7f8OnnHysjZ%2Byc2pfWXNlSwXH18D3w7Hggn7T7VXoGLSklpdFFMk8pEhXWt1FkPzEBcx879uJMC%2BgV2kN3KHu8QSPRl75ep56DpD1ZquqxgYw6XGIlEvTtQfLNnI3J1LRhJtiBE%2B&X-Amz-Signature=c60dcd0f0a2ed2fd305a68ef6f63fc44473c6e7810d2fcb421945b74a5357534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YR3W3JE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC8sZ7FX%2Bso0KQyCQpBNjg6dNKa7vLwKkzEippBU6y2UwIgFDH9qjMk9jeCDPM0%2Briv1Mt19wz7n96%2F5vWBJCm6rToq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAsuiRGS5y3zI%2B6gWSrcA7Cx%2FKdKksXZwp36e9fjA51RxEGhblZAKhpn7bJwePbuA0nhnLqy3qo8MunfK2jXZEbW4chELGnd1YwjICFpZGfqgw0mDVFbHUGxSCRDtSQLTRud6FXbUJYozEp8N%2B5NvzNTFGvYNQtj4iBEM1zd2G523BZ8U7B96%2F7NxP3dmB7e2P5v0exjI4qcna3LTl6lQ5aGwkT2x4tb3GHUjQZn%2FnhsOLyD0H%2F02jBLCj4iwPC4mcu7lsmZ8I9OoPXZ6qzzA%2FdvBQPFaDIsgX5rsgG9C2mNvSzWh4xVKp0%2Fyjej28a9yvEjjgZZIe6myfFRvwp947HZgSbXCozBdryC8q4TJbIvsWe%2BHhk4pvKEZnnF59v1rpMhbNTGsC62DCiKbRbjTPr1zoza0yFU8fsyW9XD7epJDvGq6TU9AWT08ozZkkpv3B7pBXrXpdXOdlS5wQlVQdXCgeIhD%2BxyWSC4QBm%2BfvkcvWq14TkIqp00AXu8ZnLcS%2BFMRupq8qskxd7wZz988s5d%2BPM%2FPiJuB2Lk2CA9ZGz%2FsaBBBDUaf6nUbQxHmGBMtqu%2F2e%2B%2FAFyd%2FZprigcFGSryg5sKYD0a9LqTbqOV%2BXaDKfpbi6i7N2tTIgZ6UglEuTu%2BUSo8of7blLnxMO%2Fg38MGOqUB939ji1ohy4%2BL2FqNYe8vhG7Tba87eVMkIIBw26q3qauAfuGvbs6ENiuo2kS5m%2FAEj7nCmjzY%2F%2BcDBNXw1BJdwCPe6BDi69Y5hOSIBEQbAgX5Bdyojnr7ei0Ci%2BPxXgwiDijsn03%2FbrLCu1CZ8lgt1MfRHXplGgYF9jcfZMdJ%2BPd2NKxqoAbAMyu5yjzHex%2Bitx%2Bvr2YRtGOZvZmU%2F8vdtPxe6oC2&X-Amz-Signature=c36b35c54a16e0e85262a50e2dd32cf5a1f6a7c07fc89be388447f9fc3f17e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVBECLJL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDbHV90EKMEHT8jhWYh3JiT4LuBzRrhVJcCagZJWhA4nwIhAP44Zg7sBLyA7Kl63Du7mIuRhaNChUsLm3kdE9UMoNScKv8DCGQQABoMNjM3NDIzMTgzODA1IgzPl23lQJXEDgDP3YUq3ANYbmyMMVYE4CWYNC%2FTo6NfG%2B1L9xaLgHjJ0NBbi4Xo74ErpGJOS%2BqFfPdLAZfpv7LyQXCfW8Z27mw28nw9mswF0S9FnPZHq3mWK38rsiaDbfMxW8lORfk6kcc8YcfYTyWDXi0dhQSHGNH5INwPhWFKPGSj3BDH71FSEC5B7qU8QXDRF8epGluiOvFZUlbGwFpCUTlBz6qfQwjIKrlWUhNHah16K7QveQcvh2GoE2OzPjSbL925n1emeiCD%2FFWREVoEByf3Ql2sVdG0hPAl7nE3%2Frems8PQUiGaXxEteUM3mMw3hVrPzc0vkhKZnrCR0AtUtKsXdg7M26Yr%2F1OqaEU%2BSbTcwJOwCBuNn8E2gOIsq1Oo%2FxPjsUWFnvXpNptrQlJumaTBIE4ySZoIe3JLbgVa5ylZOwI43byKRCoH5av5GHEgutqMAs%2FJXESixyFh5L8QODd3%2Bh4hZLjQ%2BJR0PNfkzX1Ojlh1iDBefJYMO6zpvVxWad8H4CQuFgBzSDWQ1nJJlP%2FuxKVybJQKAVS5rK7lLWZNAWYX50Qwq9eYktaC%2F0LZqBrrGrqPmyRw0%2Bs1ySjsqDN92P3shTM8gCHjSnO4YpjKwDbG80Y%2BucYbR0D2RXcWbUgY6lT1pGxc4TCZ4d%2FDBjqkAeB3AnZd7kObB5xcG8zoqxOlj49yLkkutpb0pa2bdUAYZlcLGS1%2FH13MD8qkZKv%2BlXlLxrgWPjH0dzSSAB4To5bL2yk5t6kIj54tS%2FzFPD%2B7uTa%2Fi%2BUhzIxTzZSVRuEchjDQi7KMKFAoBO9yWxoRwRnfQdZfuKw3lUUmMpqL9%2FgRMkCbfAhZcbBfLpuT70TQkBps2UXaJG1uiI5cadzxfp4cheBg&X-Amz-Signature=de17369df778e250e2f114c5d70502c2ae5c5f4493a5be366dc90a9397f30a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4W4LX4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFw21LHD0PXxZOAGxtOjV4tfXEhnZ%2BAHCfi%2Bzy7zAxUwAiEAkAt7FekubJmm%2BBCbRSKd93JskTQ3r4Za2PSajTv7PaYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO%2F45i7pBGITTZK1LSrcA5a54lnzLyGbbgELumXYiCubLEWcrMjytUb7wWQZWS02mKSiLjeJk44RsZv16zTJ9ebPjF00kOU59QVX8fSSQs%2B7dUW4NN%2FBdSDy1ZZeabYDVa43oPWW3DqxaLWWUHdf2XORLkiLUa%2B1shS%2BrfQZdOhCTWEbpj%2B1c7Ji0YxCLlai%2B36lsuA6L6ii2zQW5yXgszQf8Q0NklnvqfpqzgyCmoQKuBdtcNW8LSNnHpwSem4yYPA7QG1QzL5rNRp53PcTLYiAf2DBJsFD5dI3njMhq1yuSjE%2F4GMH%2BERYsUHBEVQHLETb02IhdHLV8gOemPgwyffs52%2FftR3Zach%2FIV%2FoIqQbcmd00pxNTd3K5cZS%2BqOR86KGMkMCOEZaOUbZa8wzWvNEoIJcV40bEDtaZqO2P5dATjkUG6d5eOwfexqL2BLnibdgH9dzHwrSG3rrTEzF3QhqiSYRsXUCymAtzZ%2FzAeXsjIy0wZJJyQtIfHDD4UM4Qf5Uo5mxIiIp4LrRBLdT%2FU%2B5vAYJjavOoLrS6w2tchq9cwo8fLd%2Bq2pNIpRrCAAyjVHl1OnW8Dj5naXsm3fwEIYsusCaRif4rMpbmwL45Mn9yoyam4ZvOeQSlmsXiSkQX7ro5zM6i3%2FWTEOfMMHm38MGOqUBIqbC20g9eUVzw%2FC4gJniFYPFhq8N4cgiau0rJ9d3JxrZKXXBNMnlQy4me7pqy%2BHNXPQsJl%2Fm7C05MYaR0m6n7f8OnnHysjZ%2Byc2pfWXNlSwXH18D3w7Hggn7T7VXoGLSklpdFFMk8pEhXWt1FkPzEBcx879uJMC%2BgV2kN3KHu8QSPRl75ep56DpD1ZquqxgYw6XGIlEvTtQfLNnI3J1LRhJtiBE%2B&X-Amz-Signature=de7db568987430e8354231326b6099db25956b8856efcb9840bd267c01e3d883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
