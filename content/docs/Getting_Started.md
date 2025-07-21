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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVKKWJBU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbn%2Fxi5gcwMqmRVwS4oSoU5xCbRNG%2FMY8Hc%2F%2F%2BnGkr3AiA966YescuNaerQQyLW0EDWd2xbmutOOwwYLOtnY6TCdCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiqdFQ0C5gk84HwvpKtwDjIxdjsJSd1mVPbBdmRwmhqJtHYBFZRkOeBVX7n%2FbX%2BivLkyN06WiQ83gGpbF%2BgLKfJpY%2F6DS71QguPjhrdV6NcxZSsj2EVv1ENxXG0wBrufl5Z2oVaNGJAY%2FxA8JBfCcMGYaiMQAciDxdV%2B4pyuvikULjcEz9kvWm3qNAdtHf5xJMzf%2F8v40oHgfYjfqGsRZ%2BCCLrOsyDXRQNU100xUztCEjK53Eu6hSZTsAcg56up0%2FjAqRk%2BZJXkiT8MQ%2Bx%2FtG0ngIdoz%2BveaCYYhcwsDgL64tPRU6MpYGgvUtQsMn7S84hU3V8X%2FCFdcPc4v5L%2BpsMnqyOlTfeGgyx3pPqabxSivr3Jhpi1M75ijhL%2F4Bf27VtlPzugjZJZzViruCc8GrYGgBixpnCXGkFcj9VML9Bo77BdhoDFrFMnBqiV7bOQ8XkI2zg%2BfXVXIST7fLfBCGcvK%2FbfYMeS84w2HFSJZ3PpdUMZb%2BXYnoGH31JSM1uNBlhhyGloGSZTsFkccKb3%2FoLGlC6XlYp05isjBvwCDcoKn0nW0r2AHeySHcWGRJuQRhyQNlBkx%2Bo9fXsJg3bSqv5V0Zf%2FIjol85JvExgz2PXqkHBddpQpnGDd2ipuGYXALPrdZI6qtjDY7UzIAwn5P3wwY6pgG85EACEcizWjssNlxXCcW41oSxQ1W21Py5%2FLxz1mItyuRDowdfxmbga1FbuGezh6R4SR1E6riiiby0ItXYSXJJMOZsP9AgkDaKkl8ilvzCI5c2PnL%2FM9EGfiWOKmaMwmVKLd%2FAv5aakbYamGNsnzYZ8XJbSV8fwWYTQduwdNyX9zDivLTVp5UVjpruYoxHDjLPo0pAaQ%2B%2BdthAjqxUCMYiZmuvxmge&X-Amz-Signature=cf1e4e57f1457266ed9bf504c4bebc12ad01b1722d943d27f6eea5d596f4046b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVKKWJBU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbn%2Fxi5gcwMqmRVwS4oSoU5xCbRNG%2FMY8Hc%2F%2F%2BnGkr3AiA966YescuNaerQQyLW0EDWd2xbmutOOwwYLOtnY6TCdCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiqdFQ0C5gk84HwvpKtwDjIxdjsJSd1mVPbBdmRwmhqJtHYBFZRkOeBVX7n%2FbX%2BivLkyN06WiQ83gGpbF%2BgLKfJpY%2F6DS71QguPjhrdV6NcxZSsj2EVv1ENxXG0wBrufl5Z2oVaNGJAY%2FxA8JBfCcMGYaiMQAciDxdV%2B4pyuvikULjcEz9kvWm3qNAdtHf5xJMzf%2F8v40oHgfYjfqGsRZ%2BCCLrOsyDXRQNU100xUztCEjK53Eu6hSZTsAcg56up0%2FjAqRk%2BZJXkiT8MQ%2Bx%2FtG0ngIdoz%2BveaCYYhcwsDgL64tPRU6MpYGgvUtQsMn7S84hU3V8X%2FCFdcPc4v5L%2BpsMnqyOlTfeGgyx3pPqabxSivr3Jhpi1M75ijhL%2F4Bf27VtlPzugjZJZzViruCc8GrYGgBixpnCXGkFcj9VML9Bo77BdhoDFrFMnBqiV7bOQ8XkI2zg%2BfXVXIST7fLfBCGcvK%2FbfYMeS84w2HFSJZ3PpdUMZb%2BXYnoGH31JSM1uNBlhhyGloGSZTsFkccKb3%2FoLGlC6XlYp05isjBvwCDcoKn0nW0r2AHeySHcWGRJuQRhyQNlBkx%2Bo9fXsJg3bSqv5V0Zf%2FIjol85JvExgz2PXqkHBddpQpnGDd2ipuGYXALPrdZI6qtjDY7UzIAwn5P3wwY6pgG85EACEcizWjssNlxXCcW41oSxQ1W21Py5%2FLxz1mItyuRDowdfxmbga1FbuGezh6R4SR1E6riiiby0ItXYSXJJMOZsP9AgkDaKkl8ilvzCI5c2PnL%2FM9EGfiWOKmaMwmVKLd%2FAv5aakbYamGNsnzYZ8XJbSV8fwWYTQduwdNyX9zDivLTVp5UVjpruYoxHDjLPo0pAaQ%2B%2BdthAjqxUCMYiZmuvxmge&X-Amz-Signature=a51c74d471c6291de7c7c9f4f39ba781798ea01b81809c1265399f39df42fc5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVKKWJBU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbn%2Fxi5gcwMqmRVwS4oSoU5xCbRNG%2FMY8Hc%2F%2F%2BnGkr3AiA966YescuNaerQQyLW0EDWd2xbmutOOwwYLOtnY6TCdCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiqdFQ0C5gk84HwvpKtwDjIxdjsJSd1mVPbBdmRwmhqJtHYBFZRkOeBVX7n%2FbX%2BivLkyN06WiQ83gGpbF%2BgLKfJpY%2F6DS71QguPjhrdV6NcxZSsj2EVv1ENxXG0wBrufl5Z2oVaNGJAY%2FxA8JBfCcMGYaiMQAciDxdV%2B4pyuvikULjcEz9kvWm3qNAdtHf5xJMzf%2F8v40oHgfYjfqGsRZ%2BCCLrOsyDXRQNU100xUztCEjK53Eu6hSZTsAcg56up0%2FjAqRk%2BZJXkiT8MQ%2Bx%2FtG0ngIdoz%2BveaCYYhcwsDgL64tPRU6MpYGgvUtQsMn7S84hU3V8X%2FCFdcPc4v5L%2BpsMnqyOlTfeGgyx3pPqabxSivr3Jhpi1M75ijhL%2F4Bf27VtlPzugjZJZzViruCc8GrYGgBixpnCXGkFcj9VML9Bo77BdhoDFrFMnBqiV7bOQ8XkI2zg%2BfXVXIST7fLfBCGcvK%2FbfYMeS84w2HFSJZ3PpdUMZb%2BXYnoGH31JSM1uNBlhhyGloGSZTsFkccKb3%2FoLGlC6XlYp05isjBvwCDcoKn0nW0r2AHeySHcWGRJuQRhyQNlBkx%2Bo9fXsJg3bSqv5V0Zf%2FIjol85JvExgz2PXqkHBddpQpnGDd2ipuGYXALPrdZI6qtjDY7UzIAwn5P3wwY6pgG85EACEcizWjssNlxXCcW41oSxQ1W21Py5%2FLxz1mItyuRDowdfxmbga1FbuGezh6R4SR1E6riiiby0ItXYSXJJMOZsP9AgkDaKkl8ilvzCI5c2PnL%2FM9EGfiWOKmaMwmVKLd%2FAv5aakbYamGNsnzYZ8XJbSV8fwWYTQduwdNyX9zDivLTVp5UVjpruYoxHDjLPo0pAaQ%2B%2BdthAjqxUCMYiZmuvxmge&X-Amz-Signature=201ca0d805041817d0d062236fc16f6130cde5223d9ac9e4a9030559f4445173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2TOWPGY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEjm9G6EztaJ5UkvW1kNdJrHXct07ThWnb7i%2FkkcwH3AiEAv5tywBoP9eGI1W2tTbtzhOiwbE5mqzgik0MN4AhfnxkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3E%2BIAcATMrovmAsyrcA44R8xo7tNT%2FeVPzysVnWD9H7DcM9MDUsXkjTDS1NO6TeZ%2Fl8WvYa1xf02Ps2orYBXfPESj4ABrg848I8FZq1n5K0TVxEUqK36N7mCEeW8iRQN2GU8umA6IBXLrmQlsSGUX3pYbr19aq%2FX9IlQZ53xCOSCvq8vNy%2FKlL%2FbS%2B3ZLho9LVx2FCXEgTTuijApLKhvUay3MIrdh40bkgC4ye9KMaXjaotpog50DmypyFiTt2Wm4KX769PyEV1ewNuYMFhciL0SqXxyt9S%2FuKiEkcQ5uKlVlGFPMR8x3NkJGs3fSYy6oa5Muoxe6wfGbtEFHgk1RsCTfywnRa3icjmzMkCJW0Uui%2BeDkQ%2BszjYbFg%2Bz8m5lEg0%2FrgYTocG33tLk1qL3kzoTq7h6vaNuZLq%2BXJPRMNKN0npeIWYG1VWhBkm52IHqocPcQ%2FI%2BjYJ90zKLyKKl6ilgc4nqVfJNixsUVy6oNDdpIsxaaNsJixcWSxWezYfXG9A0fcC17NUQla4W4w8xstbnKIxWG36U%2FYAf2HZ%2FqrXne9hmPozdOoZ0FL0jgC1ZhfP8DXyfoLytL0MK8cYOP%2FoCrFOgpzCQ8XpVH9RgveBvrDV%2FQEmeZFzkJXOyo7%2FI%2BufhgGs7t3EmfRMOCS98MGOqUBarXTQh5R9exzsXzsTnjN60649QjLiwf%2FVUKXAQ%2Bn9GYJ2Am%2BiDE7Lc2I3oAK6Nu6unUuIqNAumbt7tGIue5QP07qcs6IYpqSgMjJxfl2298qNknazzrPn9iUPkee3HCOBcBtZ1OffA%2BfLgmUf%2BrdW7DqmH2tCM0r4Dz4%2FlDl2LbQ9dLf2MhqsZEas4eba32qKiSswEQ%2BgRYGmCVeix7cXqP5AX6m&X-Amz-Signature=fd9874f128b10af230afa6e15bc649ffda396138e46dca1898d91ad97625f95a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GIK6AZ7%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZKN2FuZ9E%2Fb5rKjaLeKKvRt9HZ7TXiu4xYHTbmBePKAiBDmQTlcRS8kAGTxThL6iTMcu%2BKqIxUhLptOR%2FR0wDmWSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb3IacxaL3JhmWvonKtwDbp3pxI0U11NO13lplKQD8ApTE%2Fd6%2FpsOmOoWXVEK1Yo%2FwgzNoYn%2BTuDraE%2FPAN7R2xktv8PPBYDmyMfvLEPmwGxyElnYoai2ySiftsFJF4y1o4d1gCr40jYHcmgvY7iejl3cpFtqa62PbFk7Hs%2Bwwgqw86FLyWPGSANOLuO3xXu5cqKCTuHefpzqeQcs2ZnDpb45Xx1nenUyI9Nu4vX96njiOfnUfVotcAo%2B1ybF%2B859CaL0%2BipQZRGQKhZ9BC2XfYSwVDke%2Fa0D%2Bppm6PDdLtJe%2FdSEaQj0CQUSi%2BDLgicuz1vOTHUKMDFfQQtsY5hm10YcMwgnBWwbhVhXkotd%2BqxlnLBkkycqfb617%2FK%2FQdukPrMIx%2BSqvCSnYNWQ2XSNTPMVGcFzixC5RcxDwSz17JAjET3zq66%2B7N%2FlPoxzlLgF8t0BtyARJRwYrMfGRECgafYA7QEGWXkuYTjLz07BKSEZEwtAZyWUB7PvXaZ4b8xojg9Dl5vcpc7NcSKhskZEGlS5nmBiNgu0ddf2GySGsLwDnXJ5gVfcW488q7%2BQiyjYLpL6E4dvfBqH4wRJNshtbVL3IzDNFZ1qzzh7z7CXgjefnfOjpsKJHaDImvJKk9oJScFPVWUmAnBA0R8wiJP3wwY6pgHQSW3kZE%2FMvEPP79x23P8hJFnUdOPRnj51dtP%2BcFpuKMCTwm75%2B6NJjNe4bj7TOejXY7W5OKw3b7UbZVb%2BDcKrwRW3J2kVlW0LFhhMzALP8tI9FHixsWaClut28uYBdZtmTQJcDT%2BMkMpl3UFLTa%2FfFhJFyoBSyQdKOVnsspyfiEJ9NLUCIG%2Fs6RVPAgCd1FEuLPBwmy1kVKwWcTIsxVQlNwCNIxIr&X-Amz-Signature=9dd74194d9aba154765f378fe5fa443dfbefe3e535b1cb82ed43dcdf31a023c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVKKWJBU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbn%2Fxi5gcwMqmRVwS4oSoU5xCbRNG%2FMY8Hc%2F%2F%2BnGkr3AiA966YescuNaerQQyLW0EDWd2xbmutOOwwYLOtnY6TCdCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiqdFQ0C5gk84HwvpKtwDjIxdjsJSd1mVPbBdmRwmhqJtHYBFZRkOeBVX7n%2FbX%2BivLkyN06WiQ83gGpbF%2BgLKfJpY%2F6DS71QguPjhrdV6NcxZSsj2EVv1ENxXG0wBrufl5Z2oVaNGJAY%2FxA8JBfCcMGYaiMQAciDxdV%2B4pyuvikULjcEz9kvWm3qNAdtHf5xJMzf%2F8v40oHgfYjfqGsRZ%2BCCLrOsyDXRQNU100xUztCEjK53Eu6hSZTsAcg56up0%2FjAqRk%2BZJXkiT8MQ%2Bx%2FtG0ngIdoz%2BveaCYYhcwsDgL64tPRU6MpYGgvUtQsMn7S84hU3V8X%2FCFdcPc4v5L%2BpsMnqyOlTfeGgyx3pPqabxSivr3Jhpi1M75ijhL%2F4Bf27VtlPzugjZJZzViruCc8GrYGgBixpnCXGkFcj9VML9Bo77BdhoDFrFMnBqiV7bOQ8XkI2zg%2BfXVXIST7fLfBCGcvK%2FbfYMeS84w2HFSJZ3PpdUMZb%2BXYnoGH31JSM1uNBlhhyGloGSZTsFkccKb3%2FoLGlC6XlYp05isjBvwCDcoKn0nW0r2AHeySHcWGRJuQRhyQNlBkx%2Bo9fXsJg3bSqv5V0Zf%2FIjol85JvExgz2PXqkHBddpQpnGDd2ipuGYXALPrdZI6qtjDY7UzIAwn5P3wwY6pgG85EACEcizWjssNlxXCcW41oSxQ1W21Py5%2FLxz1mItyuRDowdfxmbga1FbuGezh6R4SR1E6riiiby0ItXYSXJJMOZsP9AgkDaKkl8ilvzCI5c2PnL%2FM9EGfiWOKmaMwmVKLd%2FAv5aakbYamGNsnzYZ8XJbSV8fwWYTQduwdNyX9zDivLTVp5UVjpruYoxHDjLPo0pAaQ%2B%2BdthAjqxUCMYiZmuvxmge&X-Amz-Signature=05d4f859bc98d2fea662263b8a89cde88a7a0cd602f29eb6bcb81c7dcabd7201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
