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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YSSZWQ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD4awSTWngr0TSngHUFRY%2FGgVTAST1WI%2Bl4G5EtizTx1gIgFmXOitSsZiaCf3drXgtkIspR0fZfdo056vMtaO881kgqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKZSC0lnPJVJYds5yrcAzO8bV1MqQcf1ZzmTqiFs%2BxLBWBYlU%2FlLIMfJvtJmyK3tLr3%2F0n%2FIBSvDGmgRE2qMdk2CdHXP%2FD%2FSV8hK%2FrdXT%2Fi3LUfrUjoIDsCotM%2FhYe%2Bpb1JxGtpLiqL%2BNTUK2KwqwY8ifHAu04pt%2BM%2Fea5QLj0JhjQO0poNufa%2BQIrNUSXAzxc450Yq%2FTZHtPPEyKU8RjyZEyB3%2FwRrBCAIVkIDlk%2FyMK4%2Fl%2F5CZsJk5nmAf70IUI2WdTIkVA%2FeLFXNHBl6GdghyND5jN%2B5C7zLQq5DwcFKnBCf36yAkmI603OoXI5Py16uxKbl77DxJ7Fgchdo8br1443UbQAHqIPwVBy3RgwsaQVdVNUGGcivxPvi7kbg6f0UQif2lpPm0Y%2B7KAZOOK%2B92s20PUhhUkSVwWe1OaCkExqpZ%2BqIdZAllFA8%2FCSudPq5pnGc7M5QPW1rL5FzuPVURcupSXklvJbXqhU5VyNcEDIcF5KnyIlLMfNpsLnNB5gXjyVPmynCKPqtwuG8%2Fw4sAozeZGE1GooOU4ym6W3QdUSqKk2EcUJ1ZQs2%2BBzw2qVKXd%2BZ80YU26FQ2zarwpiStHVu2u9bSblt5MTKwY%2F1gH33QMO6CfPm4nAO07YbOWrmNqrT0e7IQlydMJmJ78EGOqUBwjiED1inM%2Bv5%2BVehPQzKl3DdK3Mkc5%2BfTWqX8vCzExbuTLAM1U7VKQ2BiE7BO%2F1YPsnr3YwciRuZgG5ZQBXwSjUecaVJJlGxAHlFisaIAjbPLGGBMZn91YRfs0ILsfRFC%2FyxetVq82dQQ4G6EtVfiEDlapYPyFUuI3b6x94EV0Nz7odgd1Df3STGumh7BvzvU2TAmDgDECWfBhodDfjWuVNSE%2F%2Bc&X-Amz-Signature=503a68543d65cabe3af8251f3a7549a7ae0815c0bd4ecc3e29afbb70730646e9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YSSZWQ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD4awSTWngr0TSngHUFRY%2FGgVTAST1WI%2Bl4G5EtizTx1gIgFmXOitSsZiaCf3drXgtkIspR0fZfdo056vMtaO881kgqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKZSC0lnPJVJYds5yrcAzO8bV1MqQcf1ZzmTqiFs%2BxLBWBYlU%2FlLIMfJvtJmyK3tLr3%2F0n%2FIBSvDGmgRE2qMdk2CdHXP%2FD%2FSV8hK%2FrdXT%2Fi3LUfrUjoIDsCotM%2FhYe%2Bpb1JxGtpLiqL%2BNTUK2KwqwY8ifHAu04pt%2BM%2Fea5QLj0JhjQO0poNufa%2BQIrNUSXAzxc450Yq%2FTZHtPPEyKU8RjyZEyB3%2FwRrBCAIVkIDlk%2FyMK4%2Fl%2F5CZsJk5nmAf70IUI2WdTIkVA%2FeLFXNHBl6GdghyND5jN%2B5C7zLQq5DwcFKnBCf36yAkmI603OoXI5Py16uxKbl77DxJ7Fgchdo8br1443UbQAHqIPwVBy3RgwsaQVdVNUGGcivxPvi7kbg6f0UQif2lpPm0Y%2B7KAZOOK%2B92s20PUhhUkSVwWe1OaCkExqpZ%2BqIdZAllFA8%2FCSudPq5pnGc7M5QPW1rL5FzuPVURcupSXklvJbXqhU5VyNcEDIcF5KnyIlLMfNpsLnNB5gXjyVPmynCKPqtwuG8%2Fw4sAozeZGE1GooOU4ym6W3QdUSqKk2EcUJ1ZQs2%2BBzw2qVKXd%2BZ80YU26FQ2zarwpiStHVu2u9bSblt5MTKwY%2F1gH33QMO6CfPm4nAO07YbOWrmNqrT0e7IQlydMJmJ78EGOqUBwjiED1inM%2Bv5%2BVehPQzKl3DdK3Mkc5%2BfTWqX8vCzExbuTLAM1U7VKQ2BiE7BO%2F1YPsnr3YwciRuZgG5ZQBXwSjUecaVJJlGxAHlFisaIAjbPLGGBMZn91YRfs0ILsfRFC%2FyxetVq82dQQ4G6EtVfiEDlapYPyFUuI3b6x94EV0Nz7odgd1Df3STGumh7BvzvU2TAmDgDECWfBhodDfjWuVNSE%2F%2Bc&X-Amz-Signature=0a33f72826b97c2d4519b951018290d31befbfc6e7d58016d4f812ee0ccc4d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YSSZWQ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD4awSTWngr0TSngHUFRY%2FGgVTAST1WI%2Bl4G5EtizTx1gIgFmXOitSsZiaCf3drXgtkIspR0fZfdo056vMtaO881kgqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKZSC0lnPJVJYds5yrcAzO8bV1MqQcf1ZzmTqiFs%2BxLBWBYlU%2FlLIMfJvtJmyK3tLr3%2F0n%2FIBSvDGmgRE2qMdk2CdHXP%2FD%2FSV8hK%2FrdXT%2Fi3LUfrUjoIDsCotM%2FhYe%2Bpb1JxGtpLiqL%2BNTUK2KwqwY8ifHAu04pt%2BM%2Fea5QLj0JhjQO0poNufa%2BQIrNUSXAzxc450Yq%2FTZHtPPEyKU8RjyZEyB3%2FwRrBCAIVkIDlk%2FyMK4%2Fl%2F5CZsJk5nmAf70IUI2WdTIkVA%2FeLFXNHBl6GdghyND5jN%2B5C7zLQq5DwcFKnBCf36yAkmI603OoXI5Py16uxKbl77DxJ7Fgchdo8br1443UbQAHqIPwVBy3RgwsaQVdVNUGGcivxPvi7kbg6f0UQif2lpPm0Y%2B7KAZOOK%2B92s20PUhhUkSVwWe1OaCkExqpZ%2BqIdZAllFA8%2FCSudPq5pnGc7M5QPW1rL5FzuPVURcupSXklvJbXqhU5VyNcEDIcF5KnyIlLMfNpsLnNB5gXjyVPmynCKPqtwuG8%2Fw4sAozeZGE1GooOU4ym6W3QdUSqKk2EcUJ1ZQs2%2BBzw2qVKXd%2BZ80YU26FQ2zarwpiStHVu2u9bSblt5MTKwY%2F1gH33QMO6CfPm4nAO07YbOWrmNqrT0e7IQlydMJmJ78EGOqUBwjiED1inM%2Bv5%2BVehPQzKl3DdK3Mkc5%2BfTWqX8vCzExbuTLAM1U7VKQ2BiE7BO%2F1YPsnr3YwciRuZgG5ZQBXwSjUecaVJJlGxAHlFisaIAjbPLGGBMZn91YRfs0ILsfRFC%2FyxetVq82dQQ4G6EtVfiEDlapYPyFUuI3b6x94EV0Nz7odgd1Df3STGumh7BvzvU2TAmDgDECWfBhodDfjWuVNSE%2F%2Bc&X-Amz-Signature=5f0703256004974707baab81a89b399afb00a84c18a20dd442abe355d1c9a98a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRAQBTD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD8T5e%2BWpsW2qOka4if6eEssmJ%2BkVZ1aPUZLqWYiC4KDAIhAN3TlCK559%2FVvTy1RdYN7Dy6WbhoHUk8eHS97sdQzHeCKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEPuTt8OcZZacSwpUq3APhmpUvsOL6d85v14TXUUqQRmjsgN6xreojwDpUOOWJVninMi%2FeySpsQnBL9CDnrb5gv35%2FQw%2BSJktRmoG3jPKDJU%2F8ChnXhAeDeHf4IqPumj0zC5voSBAhY3m9PNIfdlYPX1j5CRBXzoFSkCW4SqbVaXaIuHK6lSVvO8r6HY9CeCROOG3xfOV%2FbV%2FCoyufJXKJBhz%2BvdRgu8%2BNvHaoed0W3XYaj1Tt2jYMnFqjc4MEebQsX0ZOeA8RmJb5gztVpcwknP5UFwsbh689%2Bg61Hs2FLhSzWFXNUwJNK%2B7bIPLnDlEt9RGHpgG6Em%2FOJ5P1uBXMudZ6DzKsKMjpm1lGAJJt1QHcLXEhaWna8qbejyQmYI4KpsToMp6NGAOLvF1AAKkkCmWB6d1ximyIhsvX2w%2Fx%2BeoMSchR4heQnVo%2F%2F%2BYEsk727rIvvpezalWAqpgxmTCygV9cUpT%2FXtA7iGh2tMqtvqTaIV4QqCRFLUOzJbhB7yjk8Ltk7KYxQZmAtzrj75Ae7vOPyShI452NresOrXRMNstmJgNoMxGPAwUM7ATaG5FmFS0BhjxBX%2Bl2rgeuEwjuMa5h0Y3kMvrpMREodbBdXxofVzLhjpBvLRPDY%2F0Xy5S4oAWbaJ4FPzq6%2FDCB6u7BBjqkAYMoIGGbtV5yiZg4YB3zJlpq%2FyBCUWW11dVa%2BhtrUDufQtXs3Dmyro1pMJHNTAhBC3TiHm8p17ffD%2BW5TvHrlEB0J2p3o0pKxh3i5SzX7yy0cFfrj1%2FKDybyzfFEX9Ynp7MMwvechJweAVghCSC4dWz5w0cGrivAhjL7g5X%2FC%2Fv9yLOH2IVDRwg0zJ5kvZHTZ9EuX2uRGLmYqpd2RNsDGtjpAGL2&X-Amz-Signature=0a8969f41316f1aa78e6e8531df2d3b4d2e7ff496a190a028ab0139fdbc840d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7OSSMA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDJDuCW7VBQCStPRwHODnbKlnDjakPmiO46PD1xuEk4DQIgB3J3ubvjy7GxeEmvIucnhnM4guUg9oDWhXFIVwReqpsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7GYxwJzBpze%2BW7FircA4DsxqTr%2FhP2LXWcM5yLgE8dm3toU5JduwToBUSorXVOiPST6q1IiLk87J88PMmGuuY28%2FQKB0OPcFmiukZSQap436Qtj5Pz4De%2BS4buQyG0YrPxCOQOPAWd7R7TvBEHBH8zPdFsosEzcKgvDdCdp7o79134wlhr1aDN3%2F%2BJonIgs787BLkZOEuwCQE8W02u8TqX%2BHtcrwnoP1%2Bpv%2FxnIw2OwlTRTD8CGx1ZcaI4h81rsW9w%2BT%2FFqZcR1Degsxznly1EtyrpP1s8yWoN4R6FqRAE9G%2BKefhKPudE%2FvxZoDyGQafviaj2QDXFHBrxWlh1YV0nTLn0gE25NJSSPKPY0iZ6vXLfqNzKWfnIi9hIbnyLa4zRBi6%2FsiJuQIKb0sOSDcC4EUypvgxABfW%2FJ%2BSt4xTs%2BDO0w%2FH8ad%2FT2WdHmv2FgpQ7qYBDm6%2FRcwAIo2s9YXe170oty75Z%2FkYWV2AXrvI7mWBFU%2FGQT%2F8EXmnFnVffJAk483Vr1oxQu0knGrsYvnAhDHZAKaOgnkOAwTozX8M2uXPvYSFp5cLwMhGBDm0CA7P7j58gZnMJIzL4eFL633vPqDudDtZqmPiyBQBN4rufgJiTJmkurbH%2FLTe%2B9uQRiQzAPPpEuF8l3XfuMK2E78EGOqUBJrhEqCAH6m%2BskJAr587U7mKGElfSbCwtDyMmr9r%2B9EKmUZVuGqqqLoByNTrPDpZ%2FoG0hU6uEeBgdghHe3K3%2Fi4w8a3Ia6oMD3MC%2FV%2BpizR3HwHRlXcUuZewKM77uKGIxDp5wYVOuypjydbo4P1sajWniCgb6goPo9ISKsnSYYmHE3nVkPt9mO6bFMMxRVUAieWUu4REzPinkLCAmKmgYgXhgAmE3&X-Amz-Signature=58293cf583118867ef07f01d70135680180a6d7df22e08659f5159471fd8d2f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YSSZWQ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD4awSTWngr0TSngHUFRY%2FGgVTAST1WI%2Bl4G5EtizTx1gIgFmXOitSsZiaCf3drXgtkIspR0fZfdo056vMtaO881kgqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKZSC0lnPJVJYds5yrcAzO8bV1MqQcf1ZzmTqiFs%2BxLBWBYlU%2FlLIMfJvtJmyK3tLr3%2F0n%2FIBSvDGmgRE2qMdk2CdHXP%2FD%2FSV8hK%2FrdXT%2Fi3LUfrUjoIDsCotM%2FhYe%2Bpb1JxGtpLiqL%2BNTUK2KwqwY8ifHAu04pt%2BM%2Fea5QLj0JhjQO0poNufa%2BQIrNUSXAzxc450Yq%2FTZHtPPEyKU8RjyZEyB3%2FwRrBCAIVkIDlk%2FyMK4%2Fl%2F5CZsJk5nmAf70IUI2WdTIkVA%2FeLFXNHBl6GdghyND5jN%2B5C7zLQq5DwcFKnBCf36yAkmI603OoXI5Py16uxKbl77DxJ7Fgchdo8br1443UbQAHqIPwVBy3RgwsaQVdVNUGGcivxPvi7kbg6f0UQif2lpPm0Y%2B7KAZOOK%2B92s20PUhhUkSVwWe1OaCkExqpZ%2BqIdZAllFA8%2FCSudPq5pnGc7M5QPW1rL5FzuPVURcupSXklvJbXqhU5VyNcEDIcF5KnyIlLMfNpsLnNB5gXjyVPmynCKPqtwuG8%2Fw4sAozeZGE1GooOU4ym6W3QdUSqKk2EcUJ1ZQs2%2BBzw2qVKXd%2BZ80YU26FQ2zarwpiStHVu2u9bSblt5MTKwY%2F1gH33QMO6CfPm4nAO07YbOWrmNqrT0e7IQlydMJmJ78EGOqUBwjiED1inM%2Bv5%2BVehPQzKl3DdK3Mkc5%2BfTWqX8vCzExbuTLAM1U7VKQ2BiE7BO%2F1YPsnr3YwciRuZgG5ZQBXwSjUecaVJJlGxAHlFisaIAjbPLGGBMZn91YRfs0ILsfRFC%2FyxetVq82dQQ4G6EtVfiEDlapYPyFUuI3b6x94EV0Nz7odgd1Df3STGumh7BvzvU2TAmDgDECWfBhodDfjWuVNSE%2F%2Bc&X-Amz-Signature=f7937d15f0aa87446f3173a1a8f77e67f5ae3ca00fcb8f820b6774dc42b9e217&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
