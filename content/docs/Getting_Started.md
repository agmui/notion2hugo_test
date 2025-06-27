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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWPG3ILD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2gPRJ23T0P%2FBi3%2FpIz75LhbKx%2FagC5Dx1X%2BsEKoAuTAiEA9L%2BBv1qAKhNAkPe2JMPRneappTJxxH%2FZeFCgliDb9UYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDH72gJFaekW0Bai6ZCrcA1%2B04XkIlzKlIy0Pg2A%2BKnUmXLI5sSVxww0cDsXxTrTJAOHDB9c02LDR4jmoClfYAGOhufmKkja%2FK%2BHO2X8H54j86h94%2FvOzDEJqwqrLtzbFE1IkNBW%2Bg8DF%2F1dC5PjvjhqgOVu0%2BPH%2Bsd11L3FWwClKI0JE4MsXgcdVVsoS75jOmgl7gsr2RResmXEoERoQ1CVm25IepgVToi%2Fkxz3KR6I1XDlq%2FTd1awG7oJnjqmnH794PMQ92XHZzhWT9RXJ4LLBJqnYkhvq9%2BrM14Tg7HPhUAAnnWafYbu6H9hlPnpumg1All5SpUsrQjCrVY1ENKGE9ufywCWj24isAP0zBg33itsOmI7ndiK5mDZBuTu1FW6f3BazHIVWsOnA%2FY3rIFbsovHORIaVh9XzIB9xSxtzLzrXWvUl%2FMrw%2Fz23bK53q216Qvi4F7WpWYao5OMbgR%2F9nsnIDAabcsIvjkIg3vojC6%2FXK53AaWkrMfcbV%2Fbs1Dh9OBzNfUORyz1rrg9ySsYBWDe6KFMWR%2F%2FpmIsTkRtY6quC%2FiQxcqvuF1VCoj3NQOEBg6uE9xO%2BGApx5oymqd0deg%2FH30Ud%2F51titieOrY2hHtkobipeSBY%2BDakUylk4K7rC6dJKM2fWKmUCMLrK%2B8IGOqUBzbwz%2BuSXhunXb783RJgMwnojKvOCwZiMdb5JxLhjS6HCdlAilJr2Im7FiapoZS%2FBpy2O3mSnT8vj5dzUIcQc4GGgJ%2FdSxFKrD41DQUEcVtJI5SOCl051R63DfCdyLLfPlV5Mub60I1OSu9qNkfC8pohIgJ9ckudLGSHGH0xs6H9vCOHQ9Ib2GMbto7JZ2Ktn3kpOT7KaV%2Fsc%2FeSjuIYyYSn2y8Ux&X-Amz-Signature=aca87cd90e40da8e9d8547358ec4f68b0aad2413ca9bc354b64d16221a2872cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWPG3ILD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2gPRJ23T0P%2FBi3%2FpIz75LhbKx%2FagC5Dx1X%2BsEKoAuTAiEA9L%2BBv1qAKhNAkPe2JMPRneappTJxxH%2FZeFCgliDb9UYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDH72gJFaekW0Bai6ZCrcA1%2B04XkIlzKlIy0Pg2A%2BKnUmXLI5sSVxww0cDsXxTrTJAOHDB9c02LDR4jmoClfYAGOhufmKkja%2FK%2BHO2X8H54j86h94%2FvOzDEJqwqrLtzbFE1IkNBW%2Bg8DF%2F1dC5PjvjhqgOVu0%2BPH%2Bsd11L3FWwClKI0JE4MsXgcdVVsoS75jOmgl7gsr2RResmXEoERoQ1CVm25IepgVToi%2Fkxz3KR6I1XDlq%2FTd1awG7oJnjqmnH794PMQ92XHZzhWT9RXJ4LLBJqnYkhvq9%2BrM14Tg7HPhUAAnnWafYbu6H9hlPnpumg1All5SpUsrQjCrVY1ENKGE9ufywCWj24isAP0zBg33itsOmI7ndiK5mDZBuTu1FW6f3BazHIVWsOnA%2FY3rIFbsovHORIaVh9XzIB9xSxtzLzrXWvUl%2FMrw%2Fz23bK53q216Qvi4F7WpWYao5OMbgR%2F9nsnIDAabcsIvjkIg3vojC6%2FXK53AaWkrMfcbV%2Fbs1Dh9OBzNfUORyz1rrg9ySsYBWDe6KFMWR%2F%2FpmIsTkRtY6quC%2FiQxcqvuF1VCoj3NQOEBg6uE9xO%2BGApx5oymqd0deg%2FH30Ud%2F51titieOrY2hHtkobipeSBY%2BDakUylk4K7rC6dJKM2fWKmUCMLrK%2B8IGOqUBzbwz%2BuSXhunXb783RJgMwnojKvOCwZiMdb5JxLhjS6HCdlAilJr2Im7FiapoZS%2FBpy2O3mSnT8vj5dzUIcQc4GGgJ%2FdSxFKrD41DQUEcVtJI5SOCl051R63DfCdyLLfPlV5Mub60I1OSu9qNkfC8pohIgJ9ckudLGSHGH0xs6H9vCOHQ9Ib2GMbto7JZ2Ktn3kpOT7KaV%2Fsc%2FeSjuIYyYSn2y8Ux&X-Amz-Signature=4dc320a45caff9795edf14052ba75d382d3addd2d2804891d50be5379ffededf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWPG3ILD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2gPRJ23T0P%2FBi3%2FpIz75LhbKx%2FagC5Dx1X%2BsEKoAuTAiEA9L%2BBv1qAKhNAkPe2JMPRneappTJxxH%2FZeFCgliDb9UYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDH72gJFaekW0Bai6ZCrcA1%2B04XkIlzKlIy0Pg2A%2BKnUmXLI5sSVxww0cDsXxTrTJAOHDB9c02LDR4jmoClfYAGOhufmKkja%2FK%2BHO2X8H54j86h94%2FvOzDEJqwqrLtzbFE1IkNBW%2Bg8DF%2F1dC5PjvjhqgOVu0%2BPH%2Bsd11L3FWwClKI0JE4MsXgcdVVsoS75jOmgl7gsr2RResmXEoERoQ1CVm25IepgVToi%2Fkxz3KR6I1XDlq%2FTd1awG7oJnjqmnH794PMQ92XHZzhWT9RXJ4LLBJqnYkhvq9%2BrM14Tg7HPhUAAnnWafYbu6H9hlPnpumg1All5SpUsrQjCrVY1ENKGE9ufywCWj24isAP0zBg33itsOmI7ndiK5mDZBuTu1FW6f3BazHIVWsOnA%2FY3rIFbsovHORIaVh9XzIB9xSxtzLzrXWvUl%2FMrw%2Fz23bK53q216Qvi4F7WpWYao5OMbgR%2F9nsnIDAabcsIvjkIg3vojC6%2FXK53AaWkrMfcbV%2Fbs1Dh9OBzNfUORyz1rrg9ySsYBWDe6KFMWR%2F%2FpmIsTkRtY6quC%2FiQxcqvuF1VCoj3NQOEBg6uE9xO%2BGApx5oymqd0deg%2FH30Ud%2F51titieOrY2hHtkobipeSBY%2BDakUylk4K7rC6dJKM2fWKmUCMLrK%2B8IGOqUBzbwz%2BuSXhunXb783RJgMwnojKvOCwZiMdb5JxLhjS6HCdlAilJr2Im7FiapoZS%2FBpy2O3mSnT8vj5dzUIcQc4GGgJ%2FdSxFKrD41DQUEcVtJI5SOCl051R63DfCdyLLfPlV5Mub60I1OSu9qNkfC8pohIgJ9ckudLGSHGH0xs6H9vCOHQ9Ib2GMbto7JZ2Ktn3kpOT7KaV%2Fsc%2FeSjuIYyYSn2y8Ux&X-Amz-Signature=88c66399db90a1bf930b976a78b02e564e4f8805ce2117147b211ddc2f0c693c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64USZUQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASm%2FmGWmb2lW7o9UGcpn3FMW54ijy32VZcbZ5hrS8r3AiEA%2BSBb1bJBEoojILsn1cQ92%2B2li0tXnqTfb5DOWQ%2Fe0S8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGx36KFuBUPM6mnBtSrcA8hlvkxDR48bpBy0RaOpY%2FB69fkM4EFc%2FL4KCUwIN5H%2BO%2Fdi%2BlMTxRXqugBu7IQVjlcbxRIRS3ZtmcpEjPdKrBX%2FPbbaVP7oUFy7h2IbdLJs3MoGn66%2F7NC8GaWG1GLpMDTXDUBr7zieLdipkUTNXsQRHweQhsaf11V6%2BR7eTdMPU8Ew1mt2QfUjT0BhZdNyiLio8HPiHgmdq3CIW%2BYv93DY1EZeoWydArdZigGYvMCtLuFJLgSdvosrfXinrtId7XHr9gmpU%2BOslHSFkNsrFlaGKus1bwPERHLc237XJXuQL8z1iFqQtvRSyP3XqK2flm8b4AxN1iMyLlZYEV51Y21G4iSMNQJeH0kRAVFcG9g2ib7DXS65WorYSTC7GXTeZQXIWrOBBODuO%2FIKuWhMTTz%2FRm%2B2i0U86jdM%2FpupCsyVM5TLi9CEJ3CaO9CVFDMQ%2Fc0IIJWYXpGvIYi8h3OXV%2Fn9oZdG%2BwAIV9v53cbaJMC%2F46Km63isiBmqPxIuTMAlN6650ZBjlAO1lJvAh19D%2F5OX7M6%2Bq9n01Qig8HENeALV8HFiHD1EBtf47fxc2jKyIxi24AJLc9YMciZsu0QbhzonudNijl046P0%2F8TnKEIuZccZWMtE4gfDHXLMXMIDL%2B8IGOqUBYuGQ7XC2cqDAdnR5gooLGdWYY0aPZU85nGC2y2AVhtrZ%2FxNrCz%2FGK5r3s%2Bau7WZm%2BiDOtwJa%2FMT1zm%2BDiUuYh4ShklJmuVBvNa4frORExFeIVvu4oi3i55XFun5Gv3qFD9V7zyc4Hh3GiYdsqR3gnY2AxXk0eZQr2yyCgwHTZSn52%2BJv7UtI2RieLRnsODdpuDCXVnd69RPfPVbtntq%2BxA1HL3RN&X-Amz-Signature=671767844b7599cf965a20ab3bd8b0cde061ec37ef7cc5235004ac9f06ff57a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLH2DVUZ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsQ3Kd5G9ukxks2UbOt3GIMX2acrTShnC9hDWAFcaAEAiEArTEdmr%2B6vpx8G1TGnIl%2FN0D6Epu1U6LfGiecyDtCqhgq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPe%2FdtfVwuYjQSoVmSrcA9zf6MJPywo8ErcEVF02oRKoiKGc4LMsNAngbYMW3NCPEtsyGVQyCO%2FnxmTy%2FNuGYY4P4%2F%2FVS3wx92qeLDrNkyRny0AjUCiFrCZCjUUoWAPNkEZYTfbFv6HRB620g02LEPcF1GOmtOW9T5O%2BIayd042U%2BuC2LT2zPU2jm83XaEuM1vO%2Bi%2FQb5L0YGqgLug%2BM3q3gEiNNwULmySpd%2FHrNoYivik44IxVogD0osYyTB9uA17j3grSAUYVvaKW6OY%2BEHvYwqtkuEM1JZqfNCxsHYciTkvGfkWNDB00dVkLR5Lm%2Fk0OoilX%2BqtzXPHqoZNmTj9jDd56fX%2FmQA9pMjv%2B5pa7wqgTk7XQXYwl53fvLszV1WPxmm%2Bs%2BvURxYwNB5ohIRS9VQ7zwlxRBrMzs31qCYZuL55MGIkGIUMhZrEx9DTwyyKThzqVoP82JFmrYp41L5rj2DtIbRP6jqbXjNnXXtaySwLl3RARx%2FTNIOuUMUJ0Vwv6dHOPPNmHhhkulRCgLA644riR8iha%2FiHZ5bupR4alrdCf32J5EkElL%2BLpAsmm0ACmXb%2BRd%2FKBagqvFfxAnyrEweS5Z6nNF2lXIfLsV5hhzuOnayRofP8m2RLnCa1LN7DK7QTAfNT2CqLlqMJzK%2B8IGOqUBh7mZfEHFEfrfPhhyTSLFGEcHnDgmqWWBZCUQtfCcWOXWgOBid8MYXEUL466C1ScnQ4l0YH7Hsj%2BgGyEIaYg0aH%2BYHwhe9Tt2z79roPlYhUkLLljdV%2BSbFClvNqIlrCu%2Bh2N98KdQVfPKT17O0k99NTMESza3Xfy%2BmNgUBJKeUxebHS8z5RFJKfSr%2FFzLhIbEBETQ5PXX7Z7X7BqTLP7zO6MrjCdd&X-Amz-Signature=b632422241176e72aa758974cfd5f4bf1191fddf1dfeb5457a46617b84085783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWPG3ILD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2gPRJ23T0P%2FBi3%2FpIz75LhbKx%2FagC5Dx1X%2BsEKoAuTAiEA9L%2BBv1qAKhNAkPe2JMPRneappTJxxH%2FZeFCgliDb9UYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDH72gJFaekW0Bai6ZCrcA1%2B04XkIlzKlIy0Pg2A%2BKnUmXLI5sSVxww0cDsXxTrTJAOHDB9c02LDR4jmoClfYAGOhufmKkja%2FK%2BHO2X8H54j86h94%2FvOzDEJqwqrLtzbFE1IkNBW%2Bg8DF%2F1dC5PjvjhqgOVu0%2BPH%2Bsd11L3FWwClKI0JE4MsXgcdVVsoS75jOmgl7gsr2RResmXEoERoQ1CVm25IepgVToi%2Fkxz3KR6I1XDlq%2FTd1awG7oJnjqmnH794PMQ92XHZzhWT9RXJ4LLBJqnYkhvq9%2BrM14Tg7HPhUAAnnWafYbu6H9hlPnpumg1All5SpUsrQjCrVY1ENKGE9ufywCWj24isAP0zBg33itsOmI7ndiK5mDZBuTu1FW6f3BazHIVWsOnA%2FY3rIFbsovHORIaVh9XzIB9xSxtzLzrXWvUl%2FMrw%2Fz23bK53q216Qvi4F7WpWYao5OMbgR%2F9nsnIDAabcsIvjkIg3vojC6%2FXK53AaWkrMfcbV%2Fbs1Dh9OBzNfUORyz1rrg9ySsYBWDe6KFMWR%2F%2FpmIsTkRtY6quC%2FiQxcqvuF1VCoj3NQOEBg6uE9xO%2BGApx5oymqd0deg%2FH30Ud%2F51titieOrY2hHtkobipeSBY%2BDakUylk4K7rC6dJKM2fWKmUCMLrK%2B8IGOqUBzbwz%2BuSXhunXb783RJgMwnojKvOCwZiMdb5JxLhjS6HCdlAilJr2Im7FiapoZS%2FBpy2O3mSnT8vj5dzUIcQc4GGgJ%2FdSxFKrD41DQUEcVtJI5SOCl051R63DfCdyLLfPlV5Mub60I1OSu9qNkfC8pohIgJ9ckudLGSHGH0xs6H9vCOHQ9Ib2GMbto7JZ2Ktn3kpOT7KaV%2Fsc%2FeSjuIYyYSn2y8Ux&X-Amz-Signature=3d72e37bdd37d5c27879e0a273cf5ec4f54617a65e985f5825c9c29908c1fb2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
