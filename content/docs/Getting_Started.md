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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHF6VHZW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGSka0dkr1AuVWEu7gc865qOkjP%2Fr3yJXrlX%2BXm%2Bf%2BiNAiEAhHrQ0BPdVBFmnwgFQ8%2BnN7yJZ7yUaSUNE1hmxi7FRl8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPs%2BnsFzh22vWr3tvyrcA%2FqZlXuCvOnbb%2F8YlDjgBkH94lTEqekzwG4Pp2Bi6KRJt9wlVftMwgolpN1OUceSemBw%2FE4rsY6%2FC9XvgttLsSuMTDYqYXBTDRXpi8R5uOfC0fHq631Ri8syBrsNm6CZU06DRo5ILcb2Mx1iN7Ke6oDEqd7ZExVTRbdp3tXZBbu3WcuxwAQ0RrDhor4bPXmWcgrKWaTRpEgeo0KUDohLv8gqBYWkP1U52m1enn7V4ShzGQTeHvEvbdxGudn6uN5WUjFt0K3D3wSRJeAa%2BJOCCp5681Im1E3kvlJq9YS04KTwLl6fyZKTLREfOq0KcKYka5Ru6vCeRHt1g21iwZReIy4bDmnn4sVfMKOcYxr67n00BIYK216I3zHqjH5MlPAQ%2Fg%2F6RbOCe8suqKwKaPJDNA2i9WoojeEegLrwev1gakm4vRlLB7NJcWOwfVKWppyISoB0QKQC6L%2BEL67fCwMXGEvJcMFs%2FCqckckxlLxP9drHNj6w4cvb0yU2q6pPd9bWWhj7jmeW5VLl8RF0INupUr%2F3NFAohYoH47VeLfNxo2GcEhPtPFFn0Bmv6E34JPQvYVG5sjwthkfvjvS0tEao%2B%2BrDFcOuP2gJ5KkKPdsecMzgbj3kqspPuI9w5OxiMOHOw8QGOqUBJSx0pr2eHWpSLAiDKBuOafZOgBAKJFJ3jCdlBNpnVpkDhkPQPCZ9yHJYJAX1qECBKImn1rAKMGZ9RGOEM7qGfjy4OK00%2B8gx2cZlxULcRlDOOq%2F9RcJ0X5lJ5NB7ERlPxYmqT6bmuSA7SE71xio5CwMQ2uvcwZd19hz3WHo1YOB9v0%2B9gFEjo%2FZDyux8sAqZhFD%2B31LXPB9D4WwAKrsUchyI8b%2F%2F&X-Amz-Signature=92e987eff9da6154b7a09a236a60652d3d985fc32ae0d77f85de206f60f3cf5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHF6VHZW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGSka0dkr1AuVWEu7gc865qOkjP%2Fr3yJXrlX%2BXm%2Bf%2BiNAiEAhHrQ0BPdVBFmnwgFQ8%2BnN7yJZ7yUaSUNE1hmxi7FRl8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPs%2BnsFzh22vWr3tvyrcA%2FqZlXuCvOnbb%2F8YlDjgBkH94lTEqekzwG4Pp2Bi6KRJt9wlVftMwgolpN1OUceSemBw%2FE4rsY6%2FC9XvgttLsSuMTDYqYXBTDRXpi8R5uOfC0fHq631Ri8syBrsNm6CZU06DRo5ILcb2Mx1iN7Ke6oDEqd7ZExVTRbdp3tXZBbu3WcuxwAQ0RrDhor4bPXmWcgrKWaTRpEgeo0KUDohLv8gqBYWkP1U52m1enn7V4ShzGQTeHvEvbdxGudn6uN5WUjFt0K3D3wSRJeAa%2BJOCCp5681Im1E3kvlJq9YS04KTwLl6fyZKTLREfOq0KcKYka5Ru6vCeRHt1g21iwZReIy4bDmnn4sVfMKOcYxr67n00BIYK216I3zHqjH5MlPAQ%2Fg%2F6RbOCe8suqKwKaPJDNA2i9WoojeEegLrwev1gakm4vRlLB7NJcWOwfVKWppyISoB0QKQC6L%2BEL67fCwMXGEvJcMFs%2FCqckckxlLxP9drHNj6w4cvb0yU2q6pPd9bWWhj7jmeW5VLl8RF0INupUr%2F3NFAohYoH47VeLfNxo2GcEhPtPFFn0Bmv6E34JPQvYVG5sjwthkfvjvS0tEao%2B%2BrDFcOuP2gJ5KkKPdsecMzgbj3kqspPuI9w5OxiMOHOw8QGOqUBJSx0pr2eHWpSLAiDKBuOafZOgBAKJFJ3jCdlBNpnVpkDhkPQPCZ9yHJYJAX1qECBKImn1rAKMGZ9RGOEM7qGfjy4OK00%2B8gx2cZlxULcRlDOOq%2F9RcJ0X5lJ5NB7ERlPxYmqT6bmuSA7SE71xio5CwMQ2uvcwZd19hz3WHo1YOB9v0%2B9gFEjo%2FZDyux8sAqZhFD%2B31LXPB9D4WwAKrsUchyI8b%2F%2F&X-Amz-Signature=3ccaedca0e584499eaf7ef0ddf6352a5bf6a771975b6aa5c487568d2798a7eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHF6VHZW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGSka0dkr1AuVWEu7gc865qOkjP%2Fr3yJXrlX%2BXm%2Bf%2BiNAiEAhHrQ0BPdVBFmnwgFQ8%2BnN7yJZ7yUaSUNE1hmxi7FRl8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPs%2BnsFzh22vWr3tvyrcA%2FqZlXuCvOnbb%2F8YlDjgBkH94lTEqekzwG4Pp2Bi6KRJt9wlVftMwgolpN1OUceSemBw%2FE4rsY6%2FC9XvgttLsSuMTDYqYXBTDRXpi8R5uOfC0fHq631Ri8syBrsNm6CZU06DRo5ILcb2Mx1iN7Ke6oDEqd7ZExVTRbdp3tXZBbu3WcuxwAQ0RrDhor4bPXmWcgrKWaTRpEgeo0KUDohLv8gqBYWkP1U52m1enn7V4ShzGQTeHvEvbdxGudn6uN5WUjFt0K3D3wSRJeAa%2BJOCCp5681Im1E3kvlJq9YS04KTwLl6fyZKTLREfOq0KcKYka5Ru6vCeRHt1g21iwZReIy4bDmnn4sVfMKOcYxr67n00BIYK216I3zHqjH5MlPAQ%2Fg%2F6RbOCe8suqKwKaPJDNA2i9WoojeEegLrwev1gakm4vRlLB7NJcWOwfVKWppyISoB0QKQC6L%2BEL67fCwMXGEvJcMFs%2FCqckckxlLxP9drHNj6w4cvb0yU2q6pPd9bWWhj7jmeW5VLl8RF0INupUr%2F3NFAohYoH47VeLfNxo2GcEhPtPFFn0Bmv6E34JPQvYVG5sjwthkfvjvS0tEao%2B%2BrDFcOuP2gJ5KkKPdsecMzgbj3kqspPuI9w5OxiMOHOw8QGOqUBJSx0pr2eHWpSLAiDKBuOafZOgBAKJFJ3jCdlBNpnVpkDhkPQPCZ9yHJYJAX1qECBKImn1rAKMGZ9RGOEM7qGfjy4OK00%2B8gx2cZlxULcRlDOOq%2F9RcJ0X5lJ5NB7ERlPxYmqT6bmuSA7SE71xio5CwMQ2uvcwZd19hz3WHo1YOB9v0%2B9gFEjo%2FZDyux8sAqZhFD%2B31LXPB9D4WwAKrsUchyI8b%2F%2F&X-Amz-Signature=1ca723d9c0411d0a8cbb424f69d8e58f5d4f27ee3c5a8acbec1222e39adfea1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PB3X2BX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDul9Kwox5UpQnMYtLB%2BNRAslC0R5E3AnSvsBZJVJDlnAiA97Ve2i6cTe3TovWW37xV134Y2xvaDED6ZtLMH0sZ%2BtSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMQ1DzlrxTxhHmiZxUKtwDGsYDuA1jOr%2F3%2BqGCSDificfL145PLg0MTkUQvMUOhg9qAdb71KppPdtde47ULDBfget1jkKbA46Lg%2BN4Ot7HzqjeoZfkee9qbDYUJlXCa7eIigKLiaYrEIWsu6VM9mcH7ZyG8JXuLla2XkYPP6804sG1R1i0DLtGDi%2B4EGLl3O2LAJZrFtcV2pJ2MXX4AU89lzTZQgMkjkNXZMm9QRQXyRhaQP2YNfGDqlv1RXXqyx8OSHESBb5i%2FmVYibcNGlhbOHG9Y8LvdxbrlO01H0N40Y8YdvHVy9MlmlAr8nuU%2FQcMtkRJ%2FUkAl40aPVxcPMbN1uwl7sTYxX9fGImlhaeKgBccrfS3nKODcsGr0p7X7%2B5ih1c4u%2FYBI5QHK0oFmlz4rS7UAEDfbj4j5PUn51Us67z%2Fm%2FBQBDC%2FKsy%2FW1UDFQ%2BTBJP%2F40Vj9gMX3RLZ6JcGXteEKbzENvF8pwMHBOFISHhIGNJa2fO33yxYT3t8P7dMTDExQaclOZWpOPIJUVPLf8dKFfCmK9oITrUgBhMae52rc4m%2F%2FdLu%2Fk0E1u0z3vZPmHn7eIvlBUTh4A9b4Z2n1KSyZ%2FcecG4nSGpnZdv%2BbqWlEZq5oigDQiuIcZ0ZQschKbC7UbfK7bKuvRUwk87DxAY6pgGIpkIOvVnXQzKx0Fd0q7mlS7rYU3vDSWl71GeQd0bTI1dqnlHcI2GoSI5ZqvmhEW7qJvKutnO53X1MHOgijDApEOMWnpRHEqHCAoLfOM%2Ffgn4gwA3DIKjJJGs2ak6LXz9DKRFbzlcR1W36aRuxVkZi75oq0gWm%2B4jXu4UqAJP9Locuar5Q6ZdM59pSOk1oVupJiwRJc9R3m5xpHiaUHgaC6ddh9cD4&X-Amz-Signature=d158f75a07673a15d905a1a53ca82ed9e4b18f60a2e619b21a9debf1a21cae58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFHMO67N%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCK7av5bD8kirjsrjYXAsLC24GBtVXMf7hBnsy0yyQedgIhANeHWAc16UohazNSPMASriBs9xVwK%2Bfvt3KZNrgbfxLfKv8DCEoQABoMNjM3NDIzMTgzODA1IgyFH9qle6Hi23YaHigq3AM4%2BB5dCaTTjbmeQTIey1wFIbWVm%2BDJuGZp8NdDEzUkfxEd18j4kmnNFGQqnYrfUGwid3qvRr7HQIxPQyXTsOC9ygFVbhnuIrt6rnum6ssUohxzoMqwf%2F2IUGLLmrmAEpqj3KmE4P6xRKuLp4bWm1BsHiFHQmQ4kmtV8rFs5UPmNO5bUesFrRwMaHT06dVuucIyU71OmWUqGVl6wHXukO0l3WPuhLdhzw2sXfvAPE4XLfx6GyIPPYY7BLabmmHCzJBgxwWiOGEZ0j9bBTbKTNMChvyL7uBwqx8OR7vgaGRzf8JlYxy3ijJ10HHXsWv7%2BwY98AD%2BAefK7fchh2A61EtSDgPyvIGIlvM0L6J7VLOoTqHbGU2IFCiXZCgmBIyhFaOvIgr9Twgca6BgHO26EJwULn%2FQpAsXvRzaTMfDFNj7thvVNrIfY5PP%2FQis1GQK%2BIBW%2F9YSiZ8RX9MvojkngwzQLi%2BSFw%2BcNuA94r7I7KnBCGVwUjokqPgEgMjV2qPneoNBzF6Qu1LUvRxjcuZclvqqux%2BmAni526qYQG5GcsMkMxMG263irOSbOLZfxtYlw8EJWZH2V37JqqApBzFCt15MqFoAwoxbNLSTnF6hq6WfcURPlCfPTHINBLFMgjCezsPEBjqkAR3sROP%2F1sJ7FEjszGZfikEwq1B%2F8PHWcm1rX0xLQrNkaO%2FZvxICmpZSoD4NjNfJLz9uhY6jRXTNFNJGzG8ZMCr%2FXQiC3jrLJMtWoP3XW1RT3VDZ2Sl%2F2N0ZdFWMGrXPwv6rhbl57d4B1zl58MDhfvudkMteNNpchLtaQM%2BV8zUlubGXqmB3W%2FohDNMg1ByJyecRa9lmP5rsV3ebWDE1fjDph3kB&X-Amz-Signature=f6900c382b84f8e1696107123dd31cef9025adc084d3c1294283531b73d90d15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHF6VHZW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGSka0dkr1AuVWEu7gc865qOkjP%2Fr3yJXrlX%2BXm%2Bf%2BiNAiEAhHrQ0BPdVBFmnwgFQ8%2BnN7yJZ7yUaSUNE1hmxi7FRl8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPs%2BnsFzh22vWr3tvyrcA%2FqZlXuCvOnbb%2F8YlDjgBkH94lTEqekzwG4Pp2Bi6KRJt9wlVftMwgolpN1OUceSemBw%2FE4rsY6%2FC9XvgttLsSuMTDYqYXBTDRXpi8R5uOfC0fHq631Ri8syBrsNm6CZU06DRo5ILcb2Mx1iN7Ke6oDEqd7ZExVTRbdp3tXZBbu3WcuxwAQ0RrDhor4bPXmWcgrKWaTRpEgeo0KUDohLv8gqBYWkP1U52m1enn7V4ShzGQTeHvEvbdxGudn6uN5WUjFt0K3D3wSRJeAa%2BJOCCp5681Im1E3kvlJq9YS04KTwLl6fyZKTLREfOq0KcKYka5Ru6vCeRHt1g21iwZReIy4bDmnn4sVfMKOcYxr67n00BIYK216I3zHqjH5MlPAQ%2Fg%2F6RbOCe8suqKwKaPJDNA2i9WoojeEegLrwev1gakm4vRlLB7NJcWOwfVKWppyISoB0QKQC6L%2BEL67fCwMXGEvJcMFs%2FCqckckxlLxP9drHNj6w4cvb0yU2q6pPd9bWWhj7jmeW5VLl8RF0INupUr%2F3NFAohYoH47VeLfNxo2GcEhPtPFFn0Bmv6E34JPQvYVG5sjwthkfvjvS0tEao%2B%2BrDFcOuP2gJ5KkKPdsecMzgbj3kqspPuI9w5OxiMOHOw8QGOqUBJSx0pr2eHWpSLAiDKBuOafZOgBAKJFJ3jCdlBNpnVpkDhkPQPCZ9yHJYJAX1qECBKImn1rAKMGZ9RGOEM7qGfjy4OK00%2B8gx2cZlxULcRlDOOq%2F9RcJ0X5lJ5NB7ERlPxYmqT6bmuSA7SE71xio5CwMQ2uvcwZd19hz3WHo1YOB9v0%2B9gFEjo%2FZDyux8sAqZhFD%2B31LXPB9D4WwAKrsUchyI8b%2F%2F&X-Amz-Signature=5b306aa574342a96492bd5e9e9103452ea173f81a716c7025229716641812886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
