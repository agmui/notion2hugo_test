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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFYUHWOZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdW9%2Bid%2F0rS%2FaeviN5Avt93PM1THMjULCi%2FMKwkkY54AiEApedNkTeq6Ju8rUKGDXgs0sIb0rbRwUwkkuWtiIAESpgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiSDYBj5xkDcYCTACrcA4okKt001r7tapUubpUUl74oRcCyGvQRaOsp5hoF5VAuiqju7NNq1xDF%2FoeRMl3x1abs36H9HoNtA76aViYuay0uEdCQbcSMY0hUtV8FjrpNUX2R3aPiMVsWMACmsbC7%2BVg%2FMYzdvYTCrbOEfE%2BJWXQPd5k1IP3l9t82ZxyTWhPNzpg1L8Vcw%2F5auRlfg5WoL6KhswnY46Op1%2FZ3bkufJ3Y8dnx6ZoXEyuPsi8%2FNU3rrx6Dp4FV9vmwheICcqEHvTzPKN0UDNJ44aw6GbK2RFrC%2FrIspFD6Qm7UUnUryTSypFvCSYRAry4XlnmqH8zqKFAfyVxvPGX3cEJybCYjUj5ZCfeAoHReSQHKVYJj6N855CR%2BJA9tlDm32JkakSfIUTQJvjnkMb6dYezT2Fa5q0ApG0uhgu6pYIk4sSTsF%2F6UoCrItQlDGYROpvMgj%2Fe8DVbMDgJz1pqtOkeXB7hG6SlwlssqMukPnjo3G%2FzmIn2yY6KfX1CthmhWmc3QUAM9JcVGZmtSJyk59jdjqvEqppHbZiT3YbkJd1VuDz4VgIm3A5HXU7nfel7n4sUCwBKWlhgh4C21l6mUa0aTHWLSM9TmqujkgR1R%2FsBzAx5NIlP2U3dO1y%2FZPYcKJS7RZMIjpqcQGOqUBoZdDS5IjsmSA4k9oIQNjM%2BQGGGOGM%2FHPdJRTMmWhrwsRjlcUxgSw%2ByJnX7io7cBINA1aRja%2Bc4wM8xvctF%2BaBNgx6XSF3cueMXQeCZK9fSdLb1tF0mmQPT5QSrQm048t435XpAYML40UwZtdJaR0t8eelHu9xUpGmQ8SLn27G%2BjJ7AFjZDEVBq2e7eyy%2FHIo5w7ZEEjR5iXPlZYj9958jwJ%2BKB16&X-Amz-Signature=970d31b1c877dd28ec0282c1b81f809fccee24f6641b08db29473782edfc2949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFYUHWOZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdW9%2Bid%2F0rS%2FaeviN5Avt93PM1THMjULCi%2FMKwkkY54AiEApedNkTeq6Ju8rUKGDXgs0sIb0rbRwUwkkuWtiIAESpgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiSDYBj5xkDcYCTACrcA4okKt001r7tapUubpUUl74oRcCyGvQRaOsp5hoF5VAuiqju7NNq1xDF%2FoeRMl3x1abs36H9HoNtA76aViYuay0uEdCQbcSMY0hUtV8FjrpNUX2R3aPiMVsWMACmsbC7%2BVg%2FMYzdvYTCrbOEfE%2BJWXQPd5k1IP3l9t82ZxyTWhPNzpg1L8Vcw%2F5auRlfg5WoL6KhswnY46Op1%2FZ3bkufJ3Y8dnx6ZoXEyuPsi8%2FNU3rrx6Dp4FV9vmwheICcqEHvTzPKN0UDNJ44aw6GbK2RFrC%2FrIspFD6Qm7UUnUryTSypFvCSYRAry4XlnmqH8zqKFAfyVxvPGX3cEJybCYjUj5ZCfeAoHReSQHKVYJj6N855CR%2BJA9tlDm32JkakSfIUTQJvjnkMb6dYezT2Fa5q0ApG0uhgu6pYIk4sSTsF%2F6UoCrItQlDGYROpvMgj%2Fe8DVbMDgJz1pqtOkeXB7hG6SlwlssqMukPnjo3G%2FzmIn2yY6KfX1CthmhWmc3QUAM9JcVGZmtSJyk59jdjqvEqppHbZiT3YbkJd1VuDz4VgIm3A5HXU7nfel7n4sUCwBKWlhgh4C21l6mUa0aTHWLSM9TmqujkgR1R%2FsBzAx5NIlP2U3dO1y%2FZPYcKJS7RZMIjpqcQGOqUBoZdDS5IjsmSA4k9oIQNjM%2BQGGGOGM%2FHPdJRTMmWhrwsRjlcUxgSw%2ByJnX7io7cBINA1aRja%2Bc4wM8xvctF%2BaBNgx6XSF3cueMXQeCZK9fSdLb1tF0mmQPT5QSrQm048t435XpAYML40UwZtdJaR0t8eelHu9xUpGmQ8SLn27G%2BjJ7AFjZDEVBq2e7eyy%2FHIo5w7ZEEjR5iXPlZYj9958jwJ%2BKB16&X-Amz-Signature=15b5c98527002bc423f5d8f517d7752dca66fdd8062367c110c905745ad15519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFYUHWOZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdW9%2Bid%2F0rS%2FaeviN5Avt93PM1THMjULCi%2FMKwkkY54AiEApedNkTeq6Ju8rUKGDXgs0sIb0rbRwUwkkuWtiIAESpgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiSDYBj5xkDcYCTACrcA4okKt001r7tapUubpUUl74oRcCyGvQRaOsp5hoF5VAuiqju7NNq1xDF%2FoeRMl3x1abs36H9HoNtA76aViYuay0uEdCQbcSMY0hUtV8FjrpNUX2R3aPiMVsWMACmsbC7%2BVg%2FMYzdvYTCrbOEfE%2BJWXQPd5k1IP3l9t82ZxyTWhPNzpg1L8Vcw%2F5auRlfg5WoL6KhswnY46Op1%2FZ3bkufJ3Y8dnx6ZoXEyuPsi8%2FNU3rrx6Dp4FV9vmwheICcqEHvTzPKN0UDNJ44aw6GbK2RFrC%2FrIspFD6Qm7UUnUryTSypFvCSYRAry4XlnmqH8zqKFAfyVxvPGX3cEJybCYjUj5ZCfeAoHReSQHKVYJj6N855CR%2BJA9tlDm32JkakSfIUTQJvjnkMb6dYezT2Fa5q0ApG0uhgu6pYIk4sSTsF%2F6UoCrItQlDGYROpvMgj%2Fe8DVbMDgJz1pqtOkeXB7hG6SlwlssqMukPnjo3G%2FzmIn2yY6KfX1CthmhWmc3QUAM9JcVGZmtSJyk59jdjqvEqppHbZiT3YbkJd1VuDz4VgIm3A5HXU7nfel7n4sUCwBKWlhgh4C21l6mUa0aTHWLSM9TmqujkgR1R%2FsBzAx5NIlP2U3dO1y%2FZPYcKJS7RZMIjpqcQGOqUBoZdDS5IjsmSA4k9oIQNjM%2BQGGGOGM%2FHPdJRTMmWhrwsRjlcUxgSw%2ByJnX7io7cBINA1aRja%2Bc4wM8xvctF%2BaBNgx6XSF3cueMXQeCZK9fSdLb1tF0mmQPT5QSrQm048t435XpAYML40UwZtdJaR0t8eelHu9xUpGmQ8SLn27G%2BjJ7AFjZDEVBq2e7eyy%2FHIo5w7ZEEjR5iXPlZYj9958jwJ%2BKB16&X-Amz-Signature=937df2c0a362c5664ccc1d5eec33385d888c9c9f626e8f054a61954e55376fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BYQ5QB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB43kuhnqbKz2%2BhZdRV4STQfDmUptQVuyBQ9XAtAM9DvAiEAoSlGbMqdQExil7pLktM7pImdaVPiR0xdixhXst10nM4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBb%2BPK8cjBrIjAAcgyrcA3MGnIsnu2gwxTmtXyZLReFIOB7obJ9%2FVsQ%2FNbjH4aaw7PAS3%2Fq7haXdx9OCVv0qCniIhQOoq3KW%2BHnOZTcJEHIoCKnEFWOy7Q6cVhk46rpFFrmdYi03tP3CcbHP%2F3UolpMC9tYVDnxNjg5hCkaT%2FVYTYRyX8Z9JAw89mwK%2Bhw%2FzzowuoBXj4%2BOFJYC1hBrYqIYV8mB0H%2FP0XQ4ZTmqhMC7RVALqwPGe3aewMuYzJk8IrR3CHg2%2B4YRZMISjJfB9t1bhZhVOShY3jC5nl6smCjubiu3rwbyd9P2OUsi54O6cKbyCNcKcIf16QbZUapvUP1Hhh3tZaE9AxUtCJDODY0IahkkzzVE7pelTBxsZEjC3o2HVgUiJLmp7%2Bs9Pz3%2FLIrf8kI6dnjDbby0eu2RJEEhBK9sWRApmwGd2gsRS4zVtuvD97F6YdUPK8HkWketayEPIo19JbVy0JfyD%2BzNTDfMWiNy4jIlEqCxZnAwS7g2tLJVNrnqxszA7TKf6a7EP1qKG6a3j1%2BOi8eq8SDqZd%2FraZXjHT9AG1KqNXB87c8YxlRswGADVvZpoeOFRteEf6L83LDfBk88rlmSwgqulvf0AsB5Fb7Db9uUj%2F6Z%2FF6lVEvMEz56NpfvKyvNXMOPoqcQGOqUBrWm7FmQlJfrEyNfeqgVFdDGA%2FgGG1Tb9LUsC3zlrGAf4rPDo6OXMeyt5XsFifOdtsv6nVG3wbcHxgry4UOJZ4BvLHtGJDI8OYQjQYM1HoOBazsg617NXlflOxTnJk%2FX8bOlIEHioAAe9Xc%2BbPPe6fwlmevVZ5DFQ292FSugg7vs%2FL5K9zqHPXxnRkOjuClVPWof7JuicEjYXLNsc7ChjgliG3gDn&X-Amz-Signature=af53ab4afe7575cec3df03d9cb38ba12932568bc26ca3f31419bb4acd986a939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2GJGOXI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElY7QGWENMs2FhYPhyGN4YEogyiKgFgkpPm30TM9c3sAiEA1p7yvRqeo0bcWR32rQoqv%2B6OHsw0Kz9AfHAA4cR9fNYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPELvm8w6z%2BoW2AQ5SrcA4%2BrxOc0N5xYcBcMTXfTY8upYD%2FgK64KIpBO%2BFFZ1CdbhIOP7E%2BaYMrjJvfAfQ9CvQxodz%2BDKnlWg9iqw5gKgFtYPJ4zmb6DIG%2BKxwZGAboMaQJB5M1AYeXuANOZzQ%2FdQHGUGSXYHq5kYQgKOlos9y5l3pCgP0C%2FaObwpJp%2BYGBnIf0hNOoZSxG4QG1y6W8HQpIZATfUYlcFZBIhuo6f0trEvMcWv%2FenuulmW6h%2FUXiXYgVLtysuk9vgzk5lombQMkvxvtL8pbxgj%2FXO%2F3GYhBok2ShTGNb2yriuuEkyDSpIRJa5yIq17O0O4ojxkcWnj4Sdr89Nqujml4B8lQXoEXD3LNtBflIMa0srsCjA9OpxzCKTMEUIgpEqx3C0u7GfALZJRPriIgmzmZnRS2mNPV2gzjlPgtqrWspdgRN9VMwkTs6vpmMc%2FN%2FhCVMQ1kC0OPvOAvvSlUu0AKK44xIz1mhjDSkqyFCLD5G0OxCZswQ0ZG78wGcZnGnXdXw%2BLlOG7oz8t7Epken5tyP3dIjptczFIgAErLsrcQo6fMXN7nvsJglGX0Cdk%2Be7VvYQfjj7MzamKecNQUVEfCMVhXTdXBmKF3OL8EkCk1dcuFJyMwjuRkSlp08lD37b2vG%2BMJLpqcQGOqUB55D3qtx%2BWF12gxwb81gaChz3jvoMiMg1dGCoS8xzsXMsHt%2FRRpwTQnEETpI%2F%2BVjyE5fKy5B0mIXr0lsKf4KRYnSjgOQwjhskt1AZDgRi%2FIEscXoi1s82p561FafqMIPklIlVcC7gtx4IsY00%2FkUOG5UWVArMudA7mDDiheB%2FZ%2B4AIlUKoX1k0a93uWFsX9zRn9Oa8NSUFHwbXoVmtKBwenYMseeI&X-Amz-Signature=8d14f21c2b2e95f6a5a2a8b87cc7b4cb89795c7301f1301d8b898f8e32167dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFYUHWOZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdW9%2Bid%2F0rS%2FaeviN5Avt93PM1THMjULCi%2FMKwkkY54AiEApedNkTeq6Ju8rUKGDXgs0sIb0rbRwUwkkuWtiIAESpgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiSDYBj5xkDcYCTACrcA4okKt001r7tapUubpUUl74oRcCyGvQRaOsp5hoF5VAuiqju7NNq1xDF%2FoeRMl3x1abs36H9HoNtA76aViYuay0uEdCQbcSMY0hUtV8FjrpNUX2R3aPiMVsWMACmsbC7%2BVg%2FMYzdvYTCrbOEfE%2BJWXQPd5k1IP3l9t82ZxyTWhPNzpg1L8Vcw%2F5auRlfg5WoL6KhswnY46Op1%2FZ3bkufJ3Y8dnx6ZoXEyuPsi8%2FNU3rrx6Dp4FV9vmwheICcqEHvTzPKN0UDNJ44aw6GbK2RFrC%2FrIspFD6Qm7UUnUryTSypFvCSYRAry4XlnmqH8zqKFAfyVxvPGX3cEJybCYjUj5ZCfeAoHReSQHKVYJj6N855CR%2BJA9tlDm32JkakSfIUTQJvjnkMb6dYezT2Fa5q0ApG0uhgu6pYIk4sSTsF%2F6UoCrItQlDGYROpvMgj%2Fe8DVbMDgJz1pqtOkeXB7hG6SlwlssqMukPnjo3G%2FzmIn2yY6KfX1CthmhWmc3QUAM9JcVGZmtSJyk59jdjqvEqppHbZiT3YbkJd1VuDz4VgIm3A5HXU7nfel7n4sUCwBKWlhgh4C21l6mUa0aTHWLSM9TmqujkgR1R%2FsBzAx5NIlP2U3dO1y%2FZPYcKJS7RZMIjpqcQGOqUBoZdDS5IjsmSA4k9oIQNjM%2BQGGGOGM%2FHPdJRTMmWhrwsRjlcUxgSw%2ByJnX7io7cBINA1aRja%2Bc4wM8xvctF%2BaBNgx6XSF3cueMXQeCZK9fSdLb1tF0mmQPT5QSrQm048t435XpAYML40UwZtdJaR0t8eelHu9xUpGmQ8SLn27G%2BjJ7AFjZDEVBq2e7eyy%2FHIo5w7ZEEjR5iXPlZYj9958jwJ%2BKB16&X-Amz-Signature=9726172bdde7d82a0a901c80d20fd985463ce379927cd8c6d4af21299a5f79fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
