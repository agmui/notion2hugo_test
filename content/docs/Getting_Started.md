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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NEO6PUN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR1JvweV84F81y5rK%2BPSwqTCpQHUI1r10mwkuvg1TFxAiEAnA3AoZTM8ZdMWL21LMtNnmBQNla8G6Y05%2B56nj5XV0EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRubBcTbFIW0OJFvircA%2BCVU8fXAza%2Bps9rf8VlD4KIvr7gUwBZGvcNA%2FndRZ78bd14cZ7i94l3bixUf1uobHyuihgvO7vHac6GIewQIfE17froLH%2F3Q88Bs9cl5pQ7w%2B8yRC7xUgl1q2QBg6kQVtLe7U%2Byzd3wDvOznVinGb3JvwSs%2BJFCHybI54Oulnd2PkzpdgLYGf%2FzW3TVIlh2uZXPV96e0IGlz1yROJ1uEMKIWQeGxI7eMRGB%2B9hxotAxRgrzl%2Fq3gpOMrnVaKaJJTKWmSADh9h%2FWKqb3dPeCfLvQ6GTnSImjyH0XF9ycArImUI4qVJ03VkAKD2TmOeunEl9xrGYSSVF7M87SHNIERsluSn4A%2FXoJhH7pZsgi9ZC%2FH%2FPhbzb1VHpw5mKL8uCsXJzsYMZ3LbfcrA7rrEqddAemPnPBPzGxs5kMGGf28pG%2BNQl7esDA5V4lZiN5eq7FLduKef%2BFpKilcjqzKDD%2BkztvDZ80%2Fd6OitCYhVyuhByjrH1EqQ254FYhV92EzGxYnhWs9m5UHNKn7SazM451iF4chewhqqACC6Q60G%2BmoPrwt4ZR3G%2FyOF7CzFQvQQ3FIkZLH7OHj4%2Fqy5C2cOqLbV2USHgvsru8jJF5B8WzoHUI%2BQtaUUsUyfjy0LLpMMi648QGOqUBGkUnMArVNcbhjGYbvd6ZRtR6UqlMsUeSfD3T6DoUPBbGnTZN%2BPrMJtFYOtKpjHwXRfBE0rSVjFZOd2Cu0ze%2FpAhhPqXhWPpXPgJOqqG0KZ6M3QaksEkYpgWF45W029Uto3Nv5Mq3YHvo%2FkCmXHiuoU2%2FDz5oeoudlber6ov2tjJBKuVlNGcJelFJX%2BswF3gmuI2IDa8e2qQ78YJKDnWzUSCe51Cx&X-Amz-Signature=976d9f719c56b77a7d042a9faf1805397be210ceb0415e0d5019c7fe749b2854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NEO6PUN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR1JvweV84F81y5rK%2BPSwqTCpQHUI1r10mwkuvg1TFxAiEAnA3AoZTM8ZdMWL21LMtNnmBQNla8G6Y05%2B56nj5XV0EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRubBcTbFIW0OJFvircA%2BCVU8fXAza%2Bps9rf8VlD4KIvr7gUwBZGvcNA%2FndRZ78bd14cZ7i94l3bixUf1uobHyuihgvO7vHac6GIewQIfE17froLH%2F3Q88Bs9cl5pQ7w%2B8yRC7xUgl1q2QBg6kQVtLe7U%2Byzd3wDvOznVinGb3JvwSs%2BJFCHybI54Oulnd2PkzpdgLYGf%2FzW3TVIlh2uZXPV96e0IGlz1yROJ1uEMKIWQeGxI7eMRGB%2B9hxotAxRgrzl%2Fq3gpOMrnVaKaJJTKWmSADh9h%2FWKqb3dPeCfLvQ6GTnSImjyH0XF9ycArImUI4qVJ03VkAKD2TmOeunEl9xrGYSSVF7M87SHNIERsluSn4A%2FXoJhH7pZsgi9ZC%2FH%2FPhbzb1VHpw5mKL8uCsXJzsYMZ3LbfcrA7rrEqddAemPnPBPzGxs5kMGGf28pG%2BNQl7esDA5V4lZiN5eq7FLduKef%2BFpKilcjqzKDD%2BkztvDZ80%2Fd6OitCYhVyuhByjrH1EqQ254FYhV92EzGxYnhWs9m5UHNKn7SazM451iF4chewhqqACC6Q60G%2BmoPrwt4ZR3G%2FyOF7CzFQvQQ3FIkZLH7OHj4%2Fqy5C2cOqLbV2USHgvsru8jJF5B8WzoHUI%2BQtaUUsUyfjy0LLpMMi648QGOqUBGkUnMArVNcbhjGYbvd6ZRtR6UqlMsUeSfD3T6DoUPBbGnTZN%2BPrMJtFYOtKpjHwXRfBE0rSVjFZOd2Cu0ze%2FpAhhPqXhWPpXPgJOqqG0KZ6M3QaksEkYpgWF45W029Uto3Nv5Mq3YHvo%2FkCmXHiuoU2%2FDz5oeoudlber6ov2tjJBKuVlNGcJelFJX%2BswF3gmuI2IDa8e2qQ78YJKDnWzUSCe51Cx&X-Amz-Signature=4becb734ec9780eaf9aee462b4692c1f183b44ab1f407ed34b410274d2bc1f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NEO6PUN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR1JvweV84F81y5rK%2BPSwqTCpQHUI1r10mwkuvg1TFxAiEAnA3AoZTM8ZdMWL21LMtNnmBQNla8G6Y05%2B56nj5XV0EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRubBcTbFIW0OJFvircA%2BCVU8fXAza%2Bps9rf8VlD4KIvr7gUwBZGvcNA%2FndRZ78bd14cZ7i94l3bixUf1uobHyuihgvO7vHac6GIewQIfE17froLH%2F3Q88Bs9cl5pQ7w%2B8yRC7xUgl1q2QBg6kQVtLe7U%2Byzd3wDvOznVinGb3JvwSs%2BJFCHybI54Oulnd2PkzpdgLYGf%2FzW3TVIlh2uZXPV96e0IGlz1yROJ1uEMKIWQeGxI7eMRGB%2B9hxotAxRgrzl%2Fq3gpOMrnVaKaJJTKWmSADh9h%2FWKqb3dPeCfLvQ6GTnSImjyH0XF9ycArImUI4qVJ03VkAKD2TmOeunEl9xrGYSSVF7M87SHNIERsluSn4A%2FXoJhH7pZsgi9ZC%2FH%2FPhbzb1VHpw5mKL8uCsXJzsYMZ3LbfcrA7rrEqddAemPnPBPzGxs5kMGGf28pG%2BNQl7esDA5V4lZiN5eq7FLduKef%2BFpKilcjqzKDD%2BkztvDZ80%2Fd6OitCYhVyuhByjrH1EqQ254FYhV92EzGxYnhWs9m5UHNKn7SazM451iF4chewhqqACC6Q60G%2BmoPrwt4ZR3G%2FyOF7CzFQvQQ3FIkZLH7OHj4%2Fqy5C2cOqLbV2USHgvsru8jJF5B8WzoHUI%2BQtaUUsUyfjy0LLpMMi648QGOqUBGkUnMArVNcbhjGYbvd6ZRtR6UqlMsUeSfD3T6DoUPBbGnTZN%2BPrMJtFYOtKpjHwXRfBE0rSVjFZOd2Cu0ze%2FpAhhPqXhWPpXPgJOqqG0KZ6M3QaksEkYpgWF45W029Uto3Nv5Mq3YHvo%2FkCmXHiuoU2%2FDz5oeoudlber6ov2tjJBKuVlNGcJelFJX%2BswF3gmuI2IDa8e2qQ78YJKDnWzUSCe51Cx&X-Amz-Signature=4d0d12bd59bbfa78e9ae15aa83357012c305feae0aa425b16d9f0dfeb8318af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFJ2EVNG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwgm6ujvKbyTdRIXm54ysynScbRVE1HW2gb%2BR%2BISt1AAiEA%2Fluz4qSjoVI1O4sCMDA09Ru9rIf%2FJk3cHXcVoy309XoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqjZIB8MeD4tYgRIircA6%2Bnmun1a7Nj6KjODhA3y3sXSFauiVA3Qnew5WH3jvS5hc49iiLjrdSLD%2F8HmQ7aXH6ZFoB5xbJJ%2Bf97tuEZR%2F7TGSmH2WsOQJz1%2FrIkMoUySLrpypathtQ5FeNbqqVOcuEUpRwAZbh%2FcVqTIX%2Fg8pf7sXJS1qQY%2BHmfGMMTSOdga7X6Tj0sajzgvTXpMpEvtj1nnIyYF8KhO2vhwIYDIAl2FM5rZeB2tm9L8KOCxmfkcZ2kC7yvGNTnngiYWSqJ7LrPwmle%2FJ%2FZ73rqePUih4BwmxWY3jB4dnGS7p96zgK58ID00c%2BBCkGCvA3cLODwmSBfcpHW9TKWoJ33ke8O2kB%2BdFX5%2F7cdjeNh0zjx%2BmYA6DgfrggDBsMjCO2vxL7xt2xSH%2FOwufQAAk2%2F2XBaMFba9mTVDWEe%2B5PXdxcCmkPBaVMTs8ySdiTTEieF6OtiyyiP51n4OwAefBsN7Koy7Vb34g4DLlm5Q5LRiWcoGwiZYtK9vQGGypcwv3jdAIhGXfzgYPorPI3G3FxwQ%2Fx5MnZqvq41ffEugzJrHhWjWcZj3Ns%2BRp9yGfU6le7ynNt6APBriVp4W6eG%2BxS5gJHHFEyKlkrBIJzw4kcdWNeyX4glsJHJA%2B%2Bcii4OB%2FiLMP%2B648QGOqUBR6db%2F9iT5TXF1MRuhkYmgbZV6Loddc9Y1vKmLKd%2FnxUnktX29IAyrez02df6jRh1%2F9%2BOl2SSrCkj3TwAkkxhAvTqC0b4Rxq9eCU4hOrrinBuDYdi67zEDcOX9XRmyxios0nH3IyDJ6rcruRM0sJgN9S%2B%2B4p6u2rOg5BaruAeTvhsjXBn%2Fq%2BCjEF7grObh16Ujyvx%2F7cCKYISGnpzE%2FvExH2Amz4R&X-Amz-Signature=e453e37f2c400756ab1d45e5d9154a0536741b788bb570c6f0d15832f09d5203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MYYO7DR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FEuEPh8CaNY6mZp49u8RYWI0P2jxaRbFVTu3%2BNWSqkgIgc24jvsiX2sriUPX6%2BVBjilsYtxAdYgegr4A6ILClWQQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSk1fyYsLupyl8SuircA46mhbJSbWpKGLtP894wHhK%2BGcS0PgKpIVaXbbAIsSxFjyd%2FcwhNm3Or3Gt5mrEIjdcYx4hpU8jgQWdeu8PEPMaY7i%2B5ch6b6EjLCbw9RCPne6Yl4UxwNwgIgxtvOF%2B1G%2Bskooi2awqFw1B9saGqBsqFUEo8GisTSxUnY6mvY70Ptpryw%2F7IpZNHk5lxsqooRlf63uZ5MYuRC6rAf5BbapNDZUGM3BN6SSLLZpY0JJKOC6jYxV%2BvuhVnpy0VGkvxXRca26duOewLS7JXQ6Lpvjt36KKPrcV8LPYY%2Fhbcqsqk%2FCMVnDbHbw3iHZKhK3EwSYYXq7V4BqVPkhGS6E4Rz46%2B%2Fa%2BvXmzMzviKz4sWqLSi5V4LtHHm94D52lYyKErFjIxiSilougddGUTJX0KTfKJZhuYmjwhhQErhUjkle%2B8sAh8j2ppCbs9BMJy3GzeAFEoUEc%2FZbpzpfycnnED%2BoiLOm%2B%2Bn%2BlYQ2UcxQ0jFrLTXfsFT7Ti7s47M%2B9GuQ3cKRhNC%2FNTSDoLXTlCV6ppxnR4MVmt0tucNV0jzLS6K2GmFmb%2B5oEeG4YxhkXHI52V%2FUS%2FLleUVn2KojtTi7zgUsM4i%2FytpI7i%2FZ1In7x9KvW%2FaQcZENVDuie4S88syMMq648QGOqUBMLgr%2FrhrbjEPDmRNAl%2FmGa%2F2Zgild7cSec7cl19mYOHDoSObr140XX2bxvOJujhJCvq5kQLTXj33fWzv%2FCsyAem1gKP4IWLXy5VxmXKDp2lEVc4OY5zvTmfO7Dz8vF5dSSCUB5JN0FZ9OYesxZFnc464MAtZi1EBgiGH%2FsR9uKtCgcU%2FFV1SixOjZhLy%2BZ9fsAeFiw94Zp7accyah59hCkNdeJYW&X-Amz-Signature=a7d9a55186f436657f3949e18cc7ebd1535d99fb67be0f3c92c7216375e3fbb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NEO6PUN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR1JvweV84F81y5rK%2BPSwqTCpQHUI1r10mwkuvg1TFxAiEAnA3AoZTM8ZdMWL21LMtNnmBQNla8G6Y05%2B56nj5XV0EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRubBcTbFIW0OJFvircA%2BCVU8fXAza%2Bps9rf8VlD4KIvr7gUwBZGvcNA%2FndRZ78bd14cZ7i94l3bixUf1uobHyuihgvO7vHac6GIewQIfE17froLH%2F3Q88Bs9cl5pQ7w%2B8yRC7xUgl1q2QBg6kQVtLe7U%2Byzd3wDvOznVinGb3JvwSs%2BJFCHybI54Oulnd2PkzpdgLYGf%2FzW3TVIlh2uZXPV96e0IGlz1yROJ1uEMKIWQeGxI7eMRGB%2B9hxotAxRgrzl%2Fq3gpOMrnVaKaJJTKWmSADh9h%2FWKqb3dPeCfLvQ6GTnSImjyH0XF9ycArImUI4qVJ03VkAKD2TmOeunEl9xrGYSSVF7M87SHNIERsluSn4A%2FXoJhH7pZsgi9ZC%2FH%2FPhbzb1VHpw5mKL8uCsXJzsYMZ3LbfcrA7rrEqddAemPnPBPzGxs5kMGGf28pG%2BNQl7esDA5V4lZiN5eq7FLduKef%2BFpKilcjqzKDD%2BkztvDZ80%2Fd6OitCYhVyuhByjrH1EqQ254FYhV92EzGxYnhWs9m5UHNKn7SazM451iF4chewhqqACC6Q60G%2BmoPrwt4ZR3G%2FyOF7CzFQvQQ3FIkZLH7OHj4%2Fqy5C2cOqLbV2USHgvsru8jJF5B8WzoHUI%2BQtaUUsUyfjy0LLpMMi648QGOqUBGkUnMArVNcbhjGYbvd6ZRtR6UqlMsUeSfD3T6DoUPBbGnTZN%2BPrMJtFYOtKpjHwXRfBE0rSVjFZOd2Cu0ze%2FpAhhPqXhWPpXPgJOqqG0KZ6M3QaksEkYpgWF45W029Uto3Nv5Mq3YHvo%2FkCmXHiuoU2%2FDz5oeoudlber6ov2tjJBKuVlNGcJelFJX%2BswF3gmuI2IDa8e2qQ78YJKDnWzUSCe51Cx&X-Amz-Signature=7b01570d642d34a96a4f56a3d3885534a0f5002491b2cf58c41f161bbc88b067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
