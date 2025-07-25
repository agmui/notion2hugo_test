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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6XTZIJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIE4pLEf1PqakX2uUxcU2VfnF5z01TM9%2Fr3po5FK%2BEuhRAiEA%2Fj4mBo9oADkohZ0nMZt%2BhQ50AYEAc44lfjGXFvAqedQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDA%2BEzZRCjO18i%2F0LVCrcAzopEJz8uX4YiqejuB5Fwmvnw0zUvBwSLOWdeIYuGKD32T8OxvwUrDNdFeBzPb2QJ81BiaCgyMr9Pw7k3%2B%2BBbzaRHNOIxM62UbCSdXU0Avu5CsBA%2B2suwyOO5JNPJgtj5jZHCe3l9AiDZrPx1LDGxRp85ikYfyJluzHPxRi7f3558GmiEUBnlJLf3iHJOGRkMAUTkh7jckcLLSk2cKhpNm7irq9lfFJUToTq9fL06wVC%2B9GR1SXBak3T7o8B4zhyQSGN0AFhjmU1ZalYNKLV2zVfJ%2FZgq0R7UaEC2kbl3ue9QPm6F7lEh7%2B7TNvH5gKgwQXunJadHY3s2jhEbyW8qlCaghARCLtNx%2Bb37iTvQhVsuISKlFYimF0JqyFYU%2BY9CmjWJ%2Fpl%2FVzs4vWQo%2ByCsZKkewz7R%2BN0XgBImePF%2FG8CriDX8e8RUjuz81WQGksOJq1k74PTTaP6Ogi8yolzFI8yFGZBIfseZZBByOsyOkDMW%2F7bKML7SaXqD18I0onYwGIo1QquhTOVFC7taDrtA9tp8fU3NneFIND0VlT4aq8FUHONbbuPmtaYMMOunAA28tpQ7H9oRXw%2B6A%2BDKZCRiqlD73NoXa9xn4wDvfNnICX2KJpGinZE6UBtpvdfMIjRj8QGOqUB9PkluW9w8KtUccvSOogdLP84cXYY83RB46bvjsJKw1xJjFQiOynRt03CweFZfRPOXn6OKskK%2FPzp5mU7c7zHGLosAvTJjHe%2Fx49WzHbTJcxxbMVqhYdljlfVnoIFYcULKW5hfOcZPvc%2BCMTVlP0ubBMCUa7I2K9fFKBwmKY7QeUbgRz3oBpOrOpDBZcgn3us7ynfcuFaC0AVkAFpdzRSKGQ7Lw9w&X-Amz-Signature=41cfed57d896107202215ab82e94b2b009976d577d00e3132b0d5bed85c8a7a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6XTZIJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIE4pLEf1PqakX2uUxcU2VfnF5z01TM9%2Fr3po5FK%2BEuhRAiEA%2Fj4mBo9oADkohZ0nMZt%2BhQ50AYEAc44lfjGXFvAqedQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDA%2BEzZRCjO18i%2F0LVCrcAzopEJz8uX4YiqejuB5Fwmvnw0zUvBwSLOWdeIYuGKD32T8OxvwUrDNdFeBzPb2QJ81BiaCgyMr9Pw7k3%2B%2BBbzaRHNOIxM62UbCSdXU0Avu5CsBA%2B2suwyOO5JNPJgtj5jZHCe3l9AiDZrPx1LDGxRp85ikYfyJluzHPxRi7f3558GmiEUBnlJLf3iHJOGRkMAUTkh7jckcLLSk2cKhpNm7irq9lfFJUToTq9fL06wVC%2B9GR1SXBak3T7o8B4zhyQSGN0AFhjmU1ZalYNKLV2zVfJ%2FZgq0R7UaEC2kbl3ue9QPm6F7lEh7%2B7TNvH5gKgwQXunJadHY3s2jhEbyW8qlCaghARCLtNx%2Bb37iTvQhVsuISKlFYimF0JqyFYU%2BY9CmjWJ%2Fpl%2FVzs4vWQo%2ByCsZKkewz7R%2BN0XgBImePF%2FG8CriDX8e8RUjuz81WQGksOJq1k74PTTaP6Ogi8yolzFI8yFGZBIfseZZBByOsyOkDMW%2F7bKML7SaXqD18I0onYwGIo1QquhTOVFC7taDrtA9tp8fU3NneFIND0VlT4aq8FUHONbbuPmtaYMMOunAA28tpQ7H9oRXw%2B6A%2BDKZCRiqlD73NoXa9xn4wDvfNnICX2KJpGinZE6UBtpvdfMIjRj8QGOqUB9PkluW9w8KtUccvSOogdLP84cXYY83RB46bvjsJKw1xJjFQiOynRt03CweFZfRPOXn6OKskK%2FPzp5mU7c7zHGLosAvTJjHe%2Fx49WzHbTJcxxbMVqhYdljlfVnoIFYcULKW5hfOcZPvc%2BCMTVlP0ubBMCUa7I2K9fFKBwmKY7QeUbgRz3oBpOrOpDBZcgn3us7ynfcuFaC0AVkAFpdzRSKGQ7Lw9w&X-Amz-Signature=80098c2091e1b1091581a88bd5f33687e55029a7561777b37e4cb7aef6159850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6XTZIJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIE4pLEf1PqakX2uUxcU2VfnF5z01TM9%2Fr3po5FK%2BEuhRAiEA%2Fj4mBo9oADkohZ0nMZt%2BhQ50AYEAc44lfjGXFvAqedQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDA%2BEzZRCjO18i%2F0LVCrcAzopEJz8uX4YiqejuB5Fwmvnw0zUvBwSLOWdeIYuGKD32T8OxvwUrDNdFeBzPb2QJ81BiaCgyMr9Pw7k3%2B%2BBbzaRHNOIxM62UbCSdXU0Avu5CsBA%2B2suwyOO5JNPJgtj5jZHCe3l9AiDZrPx1LDGxRp85ikYfyJluzHPxRi7f3558GmiEUBnlJLf3iHJOGRkMAUTkh7jckcLLSk2cKhpNm7irq9lfFJUToTq9fL06wVC%2B9GR1SXBak3T7o8B4zhyQSGN0AFhjmU1ZalYNKLV2zVfJ%2FZgq0R7UaEC2kbl3ue9QPm6F7lEh7%2B7TNvH5gKgwQXunJadHY3s2jhEbyW8qlCaghARCLtNx%2Bb37iTvQhVsuISKlFYimF0JqyFYU%2BY9CmjWJ%2Fpl%2FVzs4vWQo%2ByCsZKkewz7R%2BN0XgBImePF%2FG8CriDX8e8RUjuz81WQGksOJq1k74PTTaP6Ogi8yolzFI8yFGZBIfseZZBByOsyOkDMW%2F7bKML7SaXqD18I0onYwGIo1QquhTOVFC7taDrtA9tp8fU3NneFIND0VlT4aq8FUHONbbuPmtaYMMOunAA28tpQ7H9oRXw%2B6A%2BDKZCRiqlD73NoXa9xn4wDvfNnICX2KJpGinZE6UBtpvdfMIjRj8QGOqUB9PkluW9w8KtUccvSOogdLP84cXYY83RB46bvjsJKw1xJjFQiOynRt03CweFZfRPOXn6OKskK%2FPzp5mU7c7zHGLosAvTJjHe%2Fx49WzHbTJcxxbMVqhYdljlfVnoIFYcULKW5hfOcZPvc%2BCMTVlP0ubBMCUa7I2K9fFKBwmKY7QeUbgRz3oBpOrOpDBZcgn3us7ynfcuFaC0AVkAFpdzRSKGQ7Lw9w&X-Amz-Signature=aab4704a252bfedd2f233a9b4766ef1c004a22820cffa7c1e59717b03c6b676b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBKJSSX4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGwdJGRGnrbGLDNqPGiGuhfjv1s8rIVmym6lV8nBnFS0AiAceqdaqfnFSeKJFSGdAOl7PCnxYrPXrmTNsLehJ33WOir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMI00XkX16LVMZXpHxKtwDA2VoS%2FO1XJb4GcLASpeuq5VYF8FDl810I6%2FV0P73z3ZTQmT3IjOCrpvVYVBjYmoRg20l4If6arvWKHyDfX%2B9Utggax6UPkKJqyy%2BoyHpdpCknZtzoLqObHXBCHpwzmo4Dg9KbQC9TAD1VBEw1D7ibnO6%2BeIu3VjZGFMW9CaHfGglnGgBpbRbtEi1PExBF9iVsh6zHyIhV59XHHOYFT78dDMWznLEW7RArGs0ulV725iswouFdnJT1U33KvJNakqP1N6Yy%2BFdVMrEFckz%2BR%2BnVqz3hQP3BmNMpQolokMmUkPh4WyfMCBnO9uqLTMw3kKBDEmupj7NVA1jED5OywN225U%2FdfkPRfgxI0WoMWVx0RiGobw3j7RyCyc3nIS4TXPc2nhrDKFxGplWsUt54X%2B0X367v%2B8hVUnKQpWBSbyYy6r617TrL80Ll%2FIfgOp8S4LUldDQRy0BWYnl0ELlO%2BKLUncVD6yXcJB38vXNpbs7WM1x1GCu6%2FJWIVPsbEAZiuaFvRaoeFd1jEi3DXZe5Mzhr2ugFdLuag5Zs%2FfUnYo9WnA68TTa6MO97Oe4ZWiMl7JI028uwt6rc1Zc5EeaJAKtiDm0tsa1h8BQDHEzUPuICHB%2FTAZc2TRKrpaTSaIwgdGPxAY6pgF8NnF9sT5bPz9Wuo4xNNDpI33nwaVVZwYTcMcFIxY9epWdDHc64Lgt6DFqfaK7LL6jLxNZ6NCWUnrPbfSX%2BPH8bMCx2oXiHUxeJwbscitmOyuTGoWWms58y0OzxEDEkFpmKSYCfONTw0VvPOQT1NaGpbsTuU%2FsqOJKLMYN%2BQ1HzH49jrza8wzk6NnKMmcaLMVW9nlfoXJZMkFYG%2BAYD43uk6M%2F%2BpZU&X-Amz-Signature=e00f81c75594c7cd1836bf19c7c006d48264c17371a4af34805fb9b67b28e275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZPMKBT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCICuf07yjVt46G0fQaQIya2Xu8mze2I%2BAJXhgTIGvN%2FaKAiAyE6g7QeQ0QHKJW93kfn0xdC24%2FH3oof3PTm8BoxufXyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMcJD0S7EY6mr64fAoKtwDYG72gSdKWSJia5PwBLMVQY38zsY9zSLL0Gf%2BlNyog4s7INMQ8A%2F38dWermiC9vKV6CJ%2FusTKSOVprQ2rm2XAZq%2Fz38dOj8JAU5KzCEQ91atB2TWas%2FLV1pPw7DNF7%2Bywtby1S06Fa2QKAHlMNqQL3NJl05nxSn%2BoRZTjXNZblHPtVHPsLIDruo2OztSAJtWwDgefvWbtbjEXZofwzSGfJ7a0MX5aagJg43JS001H8KowYbyuEhTsKf%2FjGeSRUX6QuIu5Zm497cqCUwzDK4LZYQOpigesOudkSgmxvhnpvAAvHpJaWE9xtJOb2umNWol3FjV2S6mHDDh7JtyrqgoT9GePAbhYx0EM1hSGrXdxpWXqD3%2Fg%2Ba3RmpIRabqiUHVWAoRVVVIMguZgacD6eRvWUnNQqXtIgf5ltectMB%2BgbB6idlmgpcHSQNVKDQHeHXN1zB3A1syfhE6FBm27B4wqKKsbU1ssvTg%2BFaVSjlbXucEZ8gcaoeUMPA%2FqCcSPN1Pbpft2o5pRTlB3%2F718HCerWU%2Fyfq%2FIDUWQgSjUIKFwTOWWz0L1JyjqD5LsFxjvMtgPlxxZwy55%2BtFyA6WNJ28WMS4umSvrSXENY9AHi2HXYGgMPSG7AjuxdoJi9pwwy9GPxAY6pgEglhHPwbhl9wtYmA4YhV2FyYHc5q%2Be0BdUZfOS6dPi41iAby4vprAxNXpnz8IKB8kIhQbbHWZz2T%2FoAPaUmhp5oDw%2B%2FO7AMdk4dXyvcmXgAI6Ctrxur%2Bkm3pLA0CA5T%2Bk5wuk%2BBC5mhwu3FnqBZZ2kv1hiZKKxF1GLaTs2DkvvMCd5wddRyx3UmvDM5GTx7NUfubaLUmKA4TLIE%2F3%2B8IeC2ksbsaxT&X-Amz-Signature=ca48fb906a0ed3ad8566caaaf2dec2c0fb9a59dc0b9c914688ea61892a4cb8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6XTZIJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIE4pLEf1PqakX2uUxcU2VfnF5z01TM9%2Fr3po5FK%2BEuhRAiEA%2Fj4mBo9oADkohZ0nMZt%2BhQ50AYEAc44lfjGXFvAqedQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDA%2BEzZRCjO18i%2F0LVCrcAzopEJz8uX4YiqejuB5Fwmvnw0zUvBwSLOWdeIYuGKD32T8OxvwUrDNdFeBzPb2QJ81BiaCgyMr9Pw7k3%2B%2BBbzaRHNOIxM62UbCSdXU0Avu5CsBA%2B2suwyOO5JNPJgtj5jZHCe3l9AiDZrPx1LDGxRp85ikYfyJluzHPxRi7f3558GmiEUBnlJLf3iHJOGRkMAUTkh7jckcLLSk2cKhpNm7irq9lfFJUToTq9fL06wVC%2B9GR1SXBak3T7o8B4zhyQSGN0AFhjmU1ZalYNKLV2zVfJ%2FZgq0R7UaEC2kbl3ue9QPm6F7lEh7%2B7TNvH5gKgwQXunJadHY3s2jhEbyW8qlCaghARCLtNx%2Bb37iTvQhVsuISKlFYimF0JqyFYU%2BY9CmjWJ%2Fpl%2FVzs4vWQo%2ByCsZKkewz7R%2BN0XgBImePF%2FG8CriDX8e8RUjuz81WQGksOJq1k74PTTaP6Ogi8yolzFI8yFGZBIfseZZBByOsyOkDMW%2F7bKML7SaXqD18I0onYwGIo1QquhTOVFC7taDrtA9tp8fU3NneFIND0VlT4aq8FUHONbbuPmtaYMMOunAA28tpQ7H9oRXw%2B6A%2BDKZCRiqlD73NoXa9xn4wDvfNnICX2KJpGinZE6UBtpvdfMIjRj8QGOqUB9PkluW9w8KtUccvSOogdLP84cXYY83RB46bvjsJKw1xJjFQiOynRt03CweFZfRPOXn6OKskK%2FPzp5mU7c7zHGLosAvTJjHe%2Fx49WzHbTJcxxbMVqhYdljlfVnoIFYcULKW5hfOcZPvc%2BCMTVlP0ubBMCUa7I2K9fFKBwmKY7QeUbgRz3oBpOrOpDBZcgn3us7ynfcuFaC0AVkAFpdzRSKGQ7Lw9w&X-Amz-Signature=d527d061a39d11a1b06640afbd338f5e0cd0fbd205462646aa18a9445b43a003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
