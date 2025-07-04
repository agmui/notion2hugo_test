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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCQZ2DO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDP3dumwUkITntdCtRP4Xl5q8FyCx%2FARfZxG0RbJ%2BXIaAiEA%2BtUS%2BDE3mDn0C3DhuRh3guRWBQFOoClSFE7SyCvvKwwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKoQiFWNhorbleOFsSrcA2abIIuw1ofAiZR3%2FLYOAjyDkpg6XYlS56vbOBpfkSqRbnQG9bHS71QIvPO%2BGiSWa%2BDp3s2vk2%2BvqF6v%2FlazGdHVTS%2FId4eQ8rUpTIEiogyh%2BTIDGp8X27bjEkaccHNOrfrALqpGJBrqzKqvR4ZEk0eLOLrOdHxPafhwQDLCwUSwaeSxGOIRoetrz7XvDQ%2BqOEgZdrpmGSpdFNnZgt3Sctzz5j0gDLcD%2B1HJu5n2Y%2BLC459ZdzfdLPZWNF5dosyV6%2FojjNw0cEa%2FeBWFrXLMSt%2F9b8z1A4WnM98PYuaeh85x3IRpBF0hZCq1VGjcJiaR4eS%2FBtlecfTSlj3EI2uvUqd4iE2DQiveyRR8JrozjCXVCeDush75OniUqkcLEZ1m3ZaExwQgQHab8Wr2atzP7Ood8%2BOWRwiyusc1f5WILtF8xyszBApNV1zt%2FVFKuHAAFmhpKK69RQTDcsA%2FIlNyP%2Fa85VlBCuzTfDlawRwlNNDrJAs03UFA%2BRkQ136yVuCHfZjhsLUkLH5CXxgFyGtq%2Bs5Y2MFlT%2FyomP9ZifMSO0P9AS977RCTxIr8eSR9tMZbBd7FSO51if2c8HS7EfLF1bU8XcEC263diCjPg54%2Fd98ws3BV9VGJk1Hb0T38MLe%2FoMMGOqUBo9dS%2FaFQnEuJBBY8gtJbzQeEhywF0m1PQcdVNuaLH9Nu7uCFq9E%2BmitsZX9dl7791aoKpH4CF8Rv4I611dtbJrslpF2W2GCMJXL6rMVwfxiybXXdb6FC%2B%2BRF84cuqHBejQgwGwSpaI23yIJyBBl40o8r6S9YBkrK9nM8BzKrqkVL9JTbkapxcOB8tc1hqtveFA26B1GKeUv7TNlDt0MiH8oluS6N&X-Amz-Signature=a4e35c6822d55804fec1a82bc52b477a6c2efbbc3f9bb40e87f2a4c2e8a4846c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCQZ2DO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDP3dumwUkITntdCtRP4Xl5q8FyCx%2FARfZxG0RbJ%2BXIaAiEA%2BtUS%2BDE3mDn0C3DhuRh3guRWBQFOoClSFE7SyCvvKwwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKoQiFWNhorbleOFsSrcA2abIIuw1ofAiZR3%2FLYOAjyDkpg6XYlS56vbOBpfkSqRbnQG9bHS71QIvPO%2BGiSWa%2BDp3s2vk2%2BvqF6v%2FlazGdHVTS%2FId4eQ8rUpTIEiogyh%2BTIDGp8X27bjEkaccHNOrfrALqpGJBrqzKqvR4ZEk0eLOLrOdHxPafhwQDLCwUSwaeSxGOIRoetrz7XvDQ%2BqOEgZdrpmGSpdFNnZgt3Sctzz5j0gDLcD%2B1HJu5n2Y%2BLC459ZdzfdLPZWNF5dosyV6%2FojjNw0cEa%2FeBWFrXLMSt%2F9b8z1A4WnM98PYuaeh85x3IRpBF0hZCq1VGjcJiaR4eS%2FBtlecfTSlj3EI2uvUqd4iE2DQiveyRR8JrozjCXVCeDush75OniUqkcLEZ1m3ZaExwQgQHab8Wr2atzP7Ood8%2BOWRwiyusc1f5WILtF8xyszBApNV1zt%2FVFKuHAAFmhpKK69RQTDcsA%2FIlNyP%2Fa85VlBCuzTfDlawRwlNNDrJAs03UFA%2BRkQ136yVuCHfZjhsLUkLH5CXxgFyGtq%2Bs5Y2MFlT%2FyomP9ZifMSO0P9AS977RCTxIr8eSR9tMZbBd7FSO51if2c8HS7EfLF1bU8XcEC263diCjPg54%2Fd98ws3BV9VGJk1Hb0T38MLe%2FoMMGOqUBo9dS%2FaFQnEuJBBY8gtJbzQeEhywF0m1PQcdVNuaLH9Nu7uCFq9E%2BmitsZX9dl7791aoKpH4CF8Rv4I611dtbJrslpF2W2GCMJXL6rMVwfxiybXXdb6FC%2B%2BRF84cuqHBejQgwGwSpaI23yIJyBBl40o8r6S9YBkrK9nM8BzKrqkVL9JTbkapxcOB8tc1hqtveFA26B1GKeUv7TNlDt0MiH8oluS6N&X-Amz-Signature=8de8ea356304290443307a9115a2eb605a012545af7cf94b1c5c516eb2b20477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCQZ2DO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDP3dumwUkITntdCtRP4Xl5q8FyCx%2FARfZxG0RbJ%2BXIaAiEA%2BtUS%2BDE3mDn0C3DhuRh3guRWBQFOoClSFE7SyCvvKwwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKoQiFWNhorbleOFsSrcA2abIIuw1ofAiZR3%2FLYOAjyDkpg6XYlS56vbOBpfkSqRbnQG9bHS71QIvPO%2BGiSWa%2BDp3s2vk2%2BvqF6v%2FlazGdHVTS%2FId4eQ8rUpTIEiogyh%2BTIDGp8X27bjEkaccHNOrfrALqpGJBrqzKqvR4ZEk0eLOLrOdHxPafhwQDLCwUSwaeSxGOIRoetrz7XvDQ%2BqOEgZdrpmGSpdFNnZgt3Sctzz5j0gDLcD%2B1HJu5n2Y%2BLC459ZdzfdLPZWNF5dosyV6%2FojjNw0cEa%2FeBWFrXLMSt%2F9b8z1A4WnM98PYuaeh85x3IRpBF0hZCq1VGjcJiaR4eS%2FBtlecfTSlj3EI2uvUqd4iE2DQiveyRR8JrozjCXVCeDush75OniUqkcLEZ1m3ZaExwQgQHab8Wr2atzP7Ood8%2BOWRwiyusc1f5WILtF8xyszBApNV1zt%2FVFKuHAAFmhpKK69RQTDcsA%2FIlNyP%2Fa85VlBCuzTfDlawRwlNNDrJAs03UFA%2BRkQ136yVuCHfZjhsLUkLH5CXxgFyGtq%2Bs5Y2MFlT%2FyomP9ZifMSO0P9AS977RCTxIr8eSR9tMZbBd7FSO51if2c8HS7EfLF1bU8XcEC263diCjPg54%2Fd98ws3BV9VGJk1Hb0T38MLe%2FoMMGOqUBo9dS%2FaFQnEuJBBY8gtJbzQeEhywF0m1PQcdVNuaLH9Nu7uCFq9E%2BmitsZX9dl7791aoKpH4CF8Rv4I611dtbJrslpF2W2GCMJXL6rMVwfxiybXXdb6FC%2B%2BRF84cuqHBejQgwGwSpaI23yIJyBBl40o8r6S9YBkrK9nM8BzKrqkVL9JTbkapxcOB8tc1hqtveFA26B1GKeUv7TNlDt0MiH8oluS6N&X-Amz-Signature=da99c297c48eb59efbe70f4041b6450c93dbe5c45cc2311f1fcddbbcbb9e963c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWN32GGW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBwBcYmVh3Hg%2Frb92iAhIJsSfslMmhLMhWi7Gwxbmz82AiBlpPuId9Uum6hEJweZlp5k0NLpGmCRX2HDpoota5M41ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMNAwYx6dTmjpk%2FSZ%2FKtwD7Q%2FYpEUbRzY0BWk2FSsh4wnRTU4A2kvp9eZDTaVaAimLEI1UbUNS7NLI8WiNfy4DZ75S7u2VWCyabZUDl5Ls2K%2F4av3TVrFPFLGCZET9Ks1uFpGrleFIHQfDK6YOys%2FAwZAUhEneOI3yi8Q1aKtsd0W3MXIytkcu52EDP3Da43TWQWmb%2B%2FX4LbvulbjIvr5LMTCzBZPh12ePbgxKC4gLM4VrVH7dg3qmFEtON5Ia%2Ftq2p%2BwmTEgHEmbFAFxf9Ukh%2BbUfn6lE7DHau4wGWVTqOqjgibssYQAmfZYlSy80pEef%2B7AgB3qDXCL3IpQJUyulOO8G0osZxZidI1NELR8uebfFE1HbAxbm%2B4tOksV%2Fo5P7XLXrzVhejBkzo4hPLt3RaWtUG0sGQ2CsmXImAIj3ploinWnwoJuDJhXWzwPGcboA%2FRbHYJdvoRgfyTt3zGU%2BIqH3d9%2FDoEl3sEwQaCw3Jdwfd3H6MpwS3pGoznRYZIx%2BfkUi6kP6aqal7S%2BOcF7llbSxgqt8sIaYPRB6palKbNVi47HOn3E10pvyvOVplicNBisOrKQvlADJwom1PIHHpNRCOIKxOvZbnSF%2BdMORXoTA%2BUVYOz4xNa4B5Uw2sYafl7kWE2SrpDwf8Jgwkr%2BgwwY6pgHA8ZJ%2BDokDAr2jdg3JA757L8LJgyOr%2BBNHcLksFG9TGgUyectBX4tsYkOJ1VwgME2rIL0twm9XxLjOtEEraaTAKTIGE4dH9uBZqkZdllpuVIAkFIbqX3YfdVqquePgskAYDoTdbgTMSogCFKrmft%2B9APXtDM1Pm0we5c%2BsIcZ%2FsTwZEZfpynl4kBCzWY8Trp8gN%2BtSnwr%2Bf8pqkRxp2hAgQ9IsJ3Gr&X-Amz-Signature=7dd7e8d4fed0ea0c04c7445a8d16ce66f432dbc506f975feec8dbc8d1d3b15f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZ4GZIH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDdoNzf6WWYIXpzIwe8QFxiu37kN7lvPd4dQOnslV805wIgT82NQQ31IpcchTzVpbC2OJV1xwc%2B1s2vVgxCbIwbtIgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJotTh7RAJBI%2FTh4hCrcA3zpEjkU%2Fx82FHTElv%2FpUcQJ2LuR%2FwGmvY%2BB29z83MnbFg9mUqDNRuuCbPt92%2F4YcW6h5ZvcAeHe8I9JAMBRsfdSog1Q%2FnL9FQVqgKQCoJRNHtw4xbXcer3l3r3pl3AoElzlBSxeetTIqn%2BzjrPz%2Fd8tEaV2uwkXm580MhuCQNv%2FxWYTSS5uvwFyUBqjnHeAsJxnNVu7gkNGprN7gfBXCQnxBaDcz9si3dhs4pNajp9qpPbjtkumGUUJB9TsNqb8bM%2BbK49pBDFziRMdLmmCWBddQyJMIpWLK1uxqzDax79O8OE%2F1wxZszCN5g65IB2NveqbcMwk7Y8b1relfStN%2BZNu%2FfBRgSjJxi1QxtZvzbFtZX%2BEiQl8CuJ6JRKN8yIhCIQn0ooC9gVWmJYit4G%2BT7TuQZN3n1AbbKp4p2%2FvdGiLzpxOMx405plp7wBzJODGhrvPEurEFCP%2FV0O4msTnZXFAuzsmkXrqLDG3K9GOgyynTQzyeE2e8rnIyv9UeXvibIUqGTYTKNWNFqLgPnHA4PTzLNmOfLjh7%2BywXipHhPbSQVfV5PSshhOT6D%2FuaEQ7Fel5Ao4T5LoKqthkse65Dw6oAQO9l4w8sfg%2Fkvau%2FXfDJirIH2WnupHVzwVVMLu%2FoMMGOqUBfEQUB04xvF2YTZeuzDgkiwAi7J53tOsytJdKQmT%2FrA5N67IedyblMExG%2B5WS3pI%2FmAG1b5I%2BV7wd5bsTEUB4tr9i64J2zV9X%2FydLBcovJdO7HCLT6GKkXQM%2BV%2Fx2xKELivPjPoekmIyOAhux%2FTsAzQWchmPlfcFqtOhFcDzZj9OBHv4W1sIcD7uof9n8LS4CMkhPodyYmFJlGVIiUMtRsBVt%2FLIW&X-Amz-Signature=b43a619b0e9402f8715f4c9479c81e80dac5314458de9fe8b2d93f0797c4320b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCQZ2DO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDP3dumwUkITntdCtRP4Xl5q8FyCx%2FARfZxG0RbJ%2BXIaAiEA%2BtUS%2BDE3mDn0C3DhuRh3guRWBQFOoClSFE7SyCvvKwwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKoQiFWNhorbleOFsSrcA2abIIuw1ofAiZR3%2FLYOAjyDkpg6XYlS56vbOBpfkSqRbnQG9bHS71QIvPO%2BGiSWa%2BDp3s2vk2%2BvqF6v%2FlazGdHVTS%2FId4eQ8rUpTIEiogyh%2BTIDGp8X27bjEkaccHNOrfrALqpGJBrqzKqvR4ZEk0eLOLrOdHxPafhwQDLCwUSwaeSxGOIRoetrz7XvDQ%2BqOEgZdrpmGSpdFNnZgt3Sctzz5j0gDLcD%2B1HJu5n2Y%2BLC459ZdzfdLPZWNF5dosyV6%2FojjNw0cEa%2FeBWFrXLMSt%2F9b8z1A4WnM98PYuaeh85x3IRpBF0hZCq1VGjcJiaR4eS%2FBtlecfTSlj3EI2uvUqd4iE2DQiveyRR8JrozjCXVCeDush75OniUqkcLEZ1m3ZaExwQgQHab8Wr2atzP7Ood8%2BOWRwiyusc1f5WILtF8xyszBApNV1zt%2FVFKuHAAFmhpKK69RQTDcsA%2FIlNyP%2Fa85VlBCuzTfDlawRwlNNDrJAs03UFA%2BRkQ136yVuCHfZjhsLUkLH5CXxgFyGtq%2Bs5Y2MFlT%2FyomP9ZifMSO0P9AS977RCTxIr8eSR9tMZbBd7FSO51if2c8HS7EfLF1bU8XcEC263diCjPg54%2Fd98ws3BV9VGJk1Hb0T38MLe%2FoMMGOqUBo9dS%2FaFQnEuJBBY8gtJbzQeEhywF0m1PQcdVNuaLH9Nu7uCFq9E%2BmitsZX9dl7791aoKpH4CF8Rv4I611dtbJrslpF2W2GCMJXL6rMVwfxiybXXdb6FC%2B%2BRF84cuqHBejQgwGwSpaI23yIJyBBl40o8r6S9YBkrK9nM8BzKrqkVL9JTbkapxcOB8tc1hqtveFA26B1GKeUv7TNlDt0MiH8oluS6N&X-Amz-Signature=40ecf655f718a14f1fb9e8b273cf8b8297198c4d7ba35f95e008d80498973a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
