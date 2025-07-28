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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVBJ336%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCD1Uq%2Bto6A06NG3EN2r23U72I6RTexVq3EaLot1EYo5wIgXatSoh87Jw4OQS7YN1YPKOWa7LT68XQGkgit2iNlp8EqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2aFw0hSXbsVqLuZircA1e04oGtzyZV1FsLErfK4aa6a65F7ElReDg11tgl8esjjvADKYzEHQR%2Bq2Ua1QAqIb7pH4rDtn7kAhtzpIwachfcIk7xE0f5BotL6wivj0l7%2BwMBUV2DbrOs5cwZ8hifiyjmU6wbvaeEften%2BNCGxxvL2FppnoBbLJUntd5FfVJtMUzbs5erKFXTtX%2Be7KgivSLWLS3P%2FmfCtcePwAbBjcIHv7tQodmx12bOOWBGqETendx9qRkmAklBTo3Pi0y8cm8q8EKpY1xMA1vK72yba6JJ%2FZHbCc99%2BNPf%2BaKX8966lL4aX0wVOwZZoNPAqSoi1GHS8lXnSivwGynShqUTPkBMKeNecTEa%2BMnp0DXiiWEprjMlzz7Kzk19Fho9FpprYDuI9EuEGIY9xCIcEaPXBYvZfz2ygWn0z35bddRTclv105Mipmk%2B0%2FFZbSeg9ijkFkeIKvmjKga2enXsWYCjUgJdfj7ENRqNIDejo6oIkJifd%2FiPXtRkUE3I486Fr6p7ua49pwESsLwwSeOcsUYMz6eqLR97IhX%2B%2FpGTHSTTp8eHxqkgBP3ORfqbUB%2FMI9PV61CELUQNcdXFqOnHYPPlmITBzHshF4Z1WbG1wZhK6AXf4NaHvPfEdQQ6pN0yMK2Sm8QGOqUBjyVgXa046BFgGoM51AxzeIGAq%2BJTOCULIPAoaE0hRCOBi8MIQaLLgeSfkM8JAZO9xW0QIhzsvun52agaIWyUJDr7IaFcYbBgRdjDW4uRTBox%2F4ah1l%2BjDb%2F1TdTEuL2PeQOrvGNyM8oXxscn%2F0IUJ%2BJQZdvAxB%2FU%2B0ni1jUDZ2H2HmDo5WdRxX1CNRVXp%2FfOvmz%2B20D9ZWKEmpfvx7UlDpemeamu&X-Amz-Signature=806a43aa99bbfa6a095e4e835f1fad3c9afdbaf706026270484083cc710d4c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVBJ336%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCD1Uq%2Bto6A06NG3EN2r23U72I6RTexVq3EaLot1EYo5wIgXatSoh87Jw4OQS7YN1YPKOWa7LT68XQGkgit2iNlp8EqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2aFw0hSXbsVqLuZircA1e04oGtzyZV1FsLErfK4aa6a65F7ElReDg11tgl8esjjvADKYzEHQR%2Bq2Ua1QAqIb7pH4rDtn7kAhtzpIwachfcIk7xE0f5BotL6wivj0l7%2BwMBUV2DbrOs5cwZ8hifiyjmU6wbvaeEften%2BNCGxxvL2FppnoBbLJUntd5FfVJtMUzbs5erKFXTtX%2Be7KgivSLWLS3P%2FmfCtcePwAbBjcIHv7tQodmx12bOOWBGqETendx9qRkmAklBTo3Pi0y8cm8q8EKpY1xMA1vK72yba6JJ%2FZHbCc99%2BNPf%2BaKX8966lL4aX0wVOwZZoNPAqSoi1GHS8lXnSivwGynShqUTPkBMKeNecTEa%2BMnp0DXiiWEprjMlzz7Kzk19Fho9FpprYDuI9EuEGIY9xCIcEaPXBYvZfz2ygWn0z35bddRTclv105Mipmk%2B0%2FFZbSeg9ijkFkeIKvmjKga2enXsWYCjUgJdfj7ENRqNIDejo6oIkJifd%2FiPXtRkUE3I486Fr6p7ua49pwESsLwwSeOcsUYMz6eqLR97IhX%2B%2FpGTHSTTp8eHxqkgBP3ORfqbUB%2FMI9PV61CELUQNcdXFqOnHYPPlmITBzHshF4Z1WbG1wZhK6AXf4NaHvPfEdQQ6pN0yMK2Sm8QGOqUBjyVgXa046BFgGoM51AxzeIGAq%2BJTOCULIPAoaE0hRCOBi8MIQaLLgeSfkM8JAZO9xW0QIhzsvun52agaIWyUJDr7IaFcYbBgRdjDW4uRTBox%2F4ah1l%2BjDb%2F1TdTEuL2PeQOrvGNyM8oXxscn%2F0IUJ%2BJQZdvAxB%2FU%2B0ni1jUDZ2H2HmDo5WdRxX1CNRVXp%2FfOvmz%2B20D9ZWKEmpfvx7UlDpemeamu&X-Amz-Signature=a2ed9893adfd1d626c0ea5f66efed2dbfa979c99c707de8e5eff33677b548950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVBJ336%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCD1Uq%2Bto6A06NG3EN2r23U72I6RTexVq3EaLot1EYo5wIgXatSoh87Jw4OQS7YN1YPKOWa7LT68XQGkgit2iNlp8EqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2aFw0hSXbsVqLuZircA1e04oGtzyZV1FsLErfK4aa6a65F7ElReDg11tgl8esjjvADKYzEHQR%2Bq2Ua1QAqIb7pH4rDtn7kAhtzpIwachfcIk7xE0f5BotL6wivj0l7%2BwMBUV2DbrOs5cwZ8hifiyjmU6wbvaeEften%2BNCGxxvL2FppnoBbLJUntd5FfVJtMUzbs5erKFXTtX%2Be7KgivSLWLS3P%2FmfCtcePwAbBjcIHv7tQodmx12bOOWBGqETendx9qRkmAklBTo3Pi0y8cm8q8EKpY1xMA1vK72yba6JJ%2FZHbCc99%2BNPf%2BaKX8966lL4aX0wVOwZZoNPAqSoi1GHS8lXnSivwGynShqUTPkBMKeNecTEa%2BMnp0DXiiWEprjMlzz7Kzk19Fho9FpprYDuI9EuEGIY9xCIcEaPXBYvZfz2ygWn0z35bddRTclv105Mipmk%2B0%2FFZbSeg9ijkFkeIKvmjKga2enXsWYCjUgJdfj7ENRqNIDejo6oIkJifd%2FiPXtRkUE3I486Fr6p7ua49pwESsLwwSeOcsUYMz6eqLR97IhX%2B%2FpGTHSTTp8eHxqkgBP3ORfqbUB%2FMI9PV61CELUQNcdXFqOnHYPPlmITBzHshF4Z1WbG1wZhK6AXf4NaHvPfEdQQ6pN0yMK2Sm8QGOqUBjyVgXa046BFgGoM51AxzeIGAq%2BJTOCULIPAoaE0hRCOBi8MIQaLLgeSfkM8JAZO9xW0QIhzsvun52agaIWyUJDr7IaFcYbBgRdjDW4uRTBox%2F4ah1l%2BjDb%2F1TdTEuL2PeQOrvGNyM8oXxscn%2F0IUJ%2BJQZdvAxB%2FU%2B0ni1jUDZ2H2HmDo5WdRxX1CNRVXp%2FfOvmz%2B20D9ZWKEmpfvx7UlDpemeamu&X-Amz-Signature=aeae70df5de412eb9c62f7e61c17f93b310362ea91395eda8132f2ba79f678ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4R43Q6N%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD5DM36PPzMCz9hB8ZAIdMZDWVUYeJ0h2Ve2kkIYsXS8QIhAI89NN%2BFhkoB6UHFZ8toxMvtA21GkYNANZO7Qx8hyvbvKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgbgCNv0Mj1Hzg%2BlYq3APQ%2Fj8bF61ytXUt1eW08T%2BiHVMqVgaxf0yD1cqW1jCg9lu4jCbDR2slBrsODZtYqKqTKqr3D2YEEuXYfoukPxi9GO8pmfRay0zbmbnCFS8bd%2BF%2FKqgmCtUcxb4BhqTBLYL2MEuLePJZF6s6%2B80di9ySDlNwi51trw%2FXAmNnegAOXPPfmIDTlYp2y9VsfMDBsOMEbnUFLqUUr0FE04DHxkqBDtJqhJDJaziVRE%2B3WDCS4r8NeJ%2BBXR3xc0BdGI9Z%2BgOAjOiyp4Ou%2B0DPytQ1g%2FgkpnHv76Q%2BoE%2BfUAa4a9r2OKeCrayarLflMGTLoqK%2Bowfg0pLQ8YozqEB%2BWwugQCcIIu0lI2O6MQ%2BrXX3z%2BLxC706GxwPRHq4gJ1aNpDsPZaeRAcPd1lXOHnXR%2BnN%2F22wNvZfQreVIA2Wup6eXHIAqWRPW1dd6Lpys7CSXzruzXRKn2MfHqFGAe5JpBjysKV8EoZdZuRrHjcPShdgvnmx8K8I9SI6HbLggzGIf6X9oI9OJXLfhJZbQAMkorOVcoMdOoj6gYrloPuywfp9cpDMfCD14Pp%2B35co1dcWdkI%2F0LhK2qten4Up538ppfFdsJjuJdsoKHHfUDCU3ABiIzPRsx2TMwyDxsevJ2Ddy9zDAk5vEBjqkAbtJYsZG0I5t9wD%2Fq1RgGtgfQX4QBvHTfx8hkhGfHI8KV9sScqoBDAoETc8qGOgwYhhoZYws%2F%2BD0oSYK%2BT4Y%2FZ5Ed5PXtHQajJIl8ypWatXwXdQ8UENs%2FZk6LZx8bmXh3UYWkl4CRvXyV46Mo1F0iACTUSl8Jx3OE3eUbyRvqcN%2B2a6mBYFnAk6LjviB9sUMHsCKfFcVGQCTJLAajlw4OnbicuKX&X-Amz-Signature=9c129962a35101a4248da39a4498ee75b1aef113ed299743081e78592da78759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JPORNF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIH2VmX2zkJ%2BLQIU8xwY4iPvO%2FQ%2B0BqRtADd6S1VtDVDyAiEAosNVjHcU8NE7UEdHBLtWWIrR0DcRvhYvmpaeuhp2tAMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzC6TXvlHmj6roBNircA%2FHZO2iG9tTMt0STlFYm8erJIFnU26hcM0eRJHkm8MYYjM2PAupEa9oWrgRSvcZTl2tVq3wi4rg7gehhdsZ9Kk6rtpLoRDL49Pd6hyFo5HaAbjcY1VzUrXAFUiQRmErP2cDSJIfqxew5igQ%2Bqig%2FZCPS1qeGOZwcFQTQcOskgoU9MfRktaujHnmm2PoSFLF%2Bm1vAJWqmMpQIAnQgKQ1rvGNngKr%2FYWczd5Izvs%2B347219Lp1gvJnTctxNbUaK6fRYutoQkE0gWM%2FhUZTOJ3eCrl9hR5phSXh0GLIdCUb%2FlDmFm%2Fh4eyCpmJFf9Tcn6FCjLLCBBgzqYuOaS0XCkF7ZB9kzMYC20ot3caQjGabH4egExJoMf6%2BRnNOol4unM%2BjdYOyjBZsbkddBIDFEM1rwPihVsRaYlyRE57%2BxPaJiZvH6ddl6wVIRLUXDchpii5F9Oi%2FKcq0IuWOTiU2%2FID%2F92SA7f%2B5pnJJ6%2B7NOWW5wyfWFBwLz7%2B3g8ctdbBstX%2F8hZckoBATvnYSUZ1B2M3Rp6Mu2HyLwJ0oNcr3vae0n2k3i0IZ5Cr0zm%2BNjd1VUhmKs1xGE5SgVlmPYA6MX9GC20wEFECoONCeXLQacRRDG85vzo49AU6%2FG5N%2Fz9kMMISTm8QGOqUBofWyn8%2FWLeUuASuSyiinZIxW5aHMVHiYIPqm9CkquD29VDmIQXNhcbTXEcQAXr9FVXvNyTiQB7DkVgCIpgwCLBI7UwvUDSuy0l9gs9xqgo5dvQeNZZHU%2BSDc14hdYuFUhPdNcOyAdQuRjeRjXB9kf%2BL3saKSbpYSKXw0lsBsXubTUZUTunVUaZl%2B7s9cZHU2xSzCLWQ%2BmIKOw06Vkcf4tzg8y30L&X-Amz-Signature=0d4b150bbb472ffb398bd579d57da636a033c970b8731e4a98ac37802f127699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVBJ336%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCD1Uq%2Bto6A06NG3EN2r23U72I6RTexVq3EaLot1EYo5wIgXatSoh87Jw4OQS7YN1YPKOWa7LT68XQGkgit2iNlp8EqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2aFw0hSXbsVqLuZircA1e04oGtzyZV1FsLErfK4aa6a65F7ElReDg11tgl8esjjvADKYzEHQR%2Bq2Ua1QAqIb7pH4rDtn7kAhtzpIwachfcIk7xE0f5BotL6wivj0l7%2BwMBUV2DbrOs5cwZ8hifiyjmU6wbvaeEften%2BNCGxxvL2FppnoBbLJUntd5FfVJtMUzbs5erKFXTtX%2Be7KgivSLWLS3P%2FmfCtcePwAbBjcIHv7tQodmx12bOOWBGqETendx9qRkmAklBTo3Pi0y8cm8q8EKpY1xMA1vK72yba6JJ%2FZHbCc99%2BNPf%2BaKX8966lL4aX0wVOwZZoNPAqSoi1GHS8lXnSivwGynShqUTPkBMKeNecTEa%2BMnp0DXiiWEprjMlzz7Kzk19Fho9FpprYDuI9EuEGIY9xCIcEaPXBYvZfz2ygWn0z35bddRTclv105Mipmk%2B0%2FFZbSeg9ijkFkeIKvmjKga2enXsWYCjUgJdfj7ENRqNIDejo6oIkJifd%2FiPXtRkUE3I486Fr6p7ua49pwESsLwwSeOcsUYMz6eqLR97IhX%2B%2FpGTHSTTp8eHxqkgBP3ORfqbUB%2FMI9PV61CELUQNcdXFqOnHYPPlmITBzHshF4Z1WbG1wZhK6AXf4NaHvPfEdQQ6pN0yMK2Sm8QGOqUBjyVgXa046BFgGoM51AxzeIGAq%2BJTOCULIPAoaE0hRCOBi8MIQaLLgeSfkM8JAZO9xW0QIhzsvun52agaIWyUJDr7IaFcYbBgRdjDW4uRTBox%2F4ah1l%2BjDb%2F1TdTEuL2PeQOrvGNyM8oXxscn%2F0IUJ%2BJQZdvAxB%2FU%2B0ni1jUDZ2H2HmDo5WdRxX1CNRVXp%2FfOvmz%2B20D9ZWKEmpfvx7UlDpemeamu&X-Amz-Signature=29f2eb6179e51d16c27cc39cb4e64b7dfbf58c5b5f1c1ca4e01759d43566ae90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
