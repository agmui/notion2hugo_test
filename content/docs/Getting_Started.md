---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRMNJKN%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD9m18cLp1VDz6BiFHlMkMG%2ForrZ4f%2F1aufXuiw5f1TYwIgTCsTrvR08IFX%2Byth6W11Um7oXaeE92UmR1cBQZ9zhuwq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDP8bv4tRgVoktDsR5SrcA%2B04YCRNUDVGAq57CLgVga74O6RnM9JLFm4d1Ix7Ld42Vi9dycLEk5DjSy61flZNPVZBW1m12wXfEe0yQT4qkIFDW0CIKMA4POjtjgyUR81sCYOPxgpzgpv10SwAZQ%2FfEBZsKFmZk3VPMKyhWRETLz5SY5k9w98lhzv%2F8AxAdDFmWCDbmpyL9J1CkaTubH8MlMnP6OexUU6hBUWJ1I63uzLh9ocNbBSgQOOVlKnuiQm5Kpq2UwcTvUxe%2FiIP3%2FyxzyMhMfS%2BKwURKRr8Nc%2BG0fzCu1ieLbtvXxSjnyF2Oh2z%2BAs%2BwjIJwbZUyHofGjyT22u%2BaQv7YxQb9oyx8MDPmDjxZLPjYGY0fDPYWpxApOBjU%2BuQj9icPnS5ePUZmWd4nKu%2FC3PisboyBQm%2Fh32zQ%2FBBZDUFW4O5PdzHWBJxlOKeXyncSRM3XKQPChPb2h71QH64mj3r4KUcRE09rWQaWI22OftHXn4EeGL1xUvRRf8ZBPS2Hi9M3ap18FCOJJeJwYpquFmOfd7NZihXOLW9zU0PIDaMbLLdrnkrNS2%2F74E%2FV0wHqNUqoPFKuXICCq%2Fvjwt%2BqpJiJ1%2B6UynjVJ%2F0ovqENhVEpm%2FisbuzVlTragQ3o4swkE%2Fv5s58UjsPMLur0MsGOqUBAmA%2FyNQWTOHG1MNrZT22WW%2FTmpVD64LG7iskQGjL8hPiTjVikoQqYcdq1wNaKv37QNre81ZkcKiyI1J1PuomuJG0kFDxbJATr2LAUn6wZt1AsjaWrn0ivS%2BxMtbWCPkFYQeH1ivaorOBpv1YX9ysC7QR1Pae7sJd11RwVlQwP%2F2pwz6hafMgniXealN8l354KVoajybKpQOWaVbaXjdUsmGj9xI2&X-Amz-Signature=455a589efeea18bb734fc53896508c928d505b1fa565d2b1d3c57ef751990d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRMNJKN%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD9m18cLp1VDz6BiFHlMkMG%2ForrZ4f%2F1aufXuiw5f1TYwIgTCsTrvR08IFX%2Byth6W11Um7oXaeE92UmR1cBQZ9zhuwq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDP8bv4tRgVoktDsR5SrcA%2B04YCRNUDVGAq57CLgVga74O6RnM9JLFm4d1Ix7Ld42Vi9dycLEk5DjSy61flZNPVZBW1m12wXfEe0yQT4qkIFDW0CIKMA4POjtjgyUR81sCYOPxgpzgpv10SwAZQ%2FfEBZsKFmZk3VPMKyhWRETLz5SY5k9w98lhzv%2F8AxAdDFmWCDbmpyL9J1CkaTubH8MlMnP6OexUU6hBUWJ1I63uzLh9ocNbBSgQOOVlKnuiQm5Kpq2UwcTvUxe%2FiIP3%2FyxzyMhMfS%2BKwURKRr8Nc%2BG0fzCu1ieLbtvXxSjnyF2Oh2z%2BAs%2BwjIJwbZUyHofGjyT22u%2BaQv7YxQb9oyx8MDPmDjxZLPjYGY0fDPYWpxApOBjU%2BuQj9icPnS5ePUZmWd4nKu%2FC3PisboyBQm%2Fh32zQ%2FBBZDUFW4O5PdzHWBJxlOKeXyncSRM3XKQPChPb2h71QH64mj3r4KUcRE09rWQaWI22OftHXn4EeGL1xUvRRf8ZBPS2Hi9M3ap18FCOJJeJwYpquFmOfd7NZihXOLW9zU0PIDaMbLLdrnkrNS2%2F74E%2FV0wHqNUqoPFKuXICCq%2Fvjwt%2BqpJiJ1%2B6UynjVJ%2F0ovqENhVEpm%2FisbuzVlTragQ3o4swkE%2Fv5s58UjsPMLur0MsGOqUBAmA%2FyNQWTOHG1MNrZT22WW%2FTmpVD64LG7iskQGjL8hPiTjVikoQqYcdq1wNaKv37QNre81ZkcKiyI1J1PuomuJG0kFDxbJATr2LAUn6wZt1AsjaWrn0ivS%2BxMtbWCPkFYQeH1ivaorOBpv1YX9ysC7QR1Pae7sJd11RwVlQwP%2F2pwz6hafMgniXealN8l354KVoajybKpQOWaVbaXjdUsmGj9xI2&X-Amz-Signature=d409177b136a7a8a0696040d1031feb732141246973564eda185802c61c06c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRMNJKN%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD9m18cLp1VDz6BiFHlMkMG%2ForrZ4f%2F1aufXuiw5f1TYwIgTCsTrvR08IFX%2Byth6W11Um7oXaeE92UmR1cBQZ9zhuwq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDP8bv4tRgVoktDsR5SrcA%2B04YCRNUDVGAq57CLgVga74O6RnM9JLFm4d1Ix7Ld42Vi9dycLEk5DjSy61flZNPVZBW1m12wXfEe0yQT4qkIFDW0CIKMA4POjtjgyUR81sCYOPxgpzgpv10SwAZQ%2FfEBZsKFmZk3VPMKyhWRETLz5SY5k9w98lhzv%2F8AxAdDFmWCDbmpyL9J1CkaTubH8MlMnP6OexUU6hBUWJ1I63uzLh9ocNbBSgQOOVlKnuiQm5Kpq2UwcTvUxe%2FiIP3%2FyxzyMhMfS%2BKwURKRr8Nc%2BG0fzCu1ieLbtvXxSjnyF2Oh2z%2BAs%2BwjIJwbZUyHofGjyT22u%2BaQv7YxQb9oyx8MDPmDjxZLPjYGY0fDPYWpxApOBjU%2BuQj9icPnS5ePUZmWd4nKu%2FC3PisboyBQm%2Fh32zQ%2FBBZDUFW4O5PdzHWBJxlOKeXyncSRM3XKQPChPb2h71QH64mj3r4KUcRE09rWQaWI22OftHXn4EeGL1xUvRRf8ZBPS2Hi9M3ap18FCOJJeJwYpquFmOfd7NZihXOLW9zU0PIDaMbLLdrnkrNS2%2F74E%2FV0wHqNUqoPFKuXICCq%2Fvjwt%2BqpJiJ1%2B6UynjVJ%2F0ovqENhVEpm%2FisbuzVlTragQ3o4swkE%2Fv5s58UjsPMLur0MsGOqUBAmA%2FyNQWTOHG1MNrZT22WW%2FTmpVD64LG7iskQGjL8hPiTjVikoQqYcdq1wNaKv37QNre81ZkcKiyI1J1PuomuJG0kFDxbJATr2LAUn6wZt1AsjaWrn0ivS%2BxMtbWCPkFYQeH1ivaorOBpv1YX9ysC7QR1Pae7sJd11RwVlQwP%2F2pwz6hafMgniXealN8l354KVoajybKpQOWaVbaXjdUsmGj9xI2&X-Amz-Signature=792372d7ce05cf07780dc440d805e9417f8f9a46fcdb6aaeb664646ccd378aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFBWFMB%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICEeFzHsBI4z9KRKz8IZcbD6NsHSymG11qEnA57s8FGmAiBffhvYCi344akVhGbvLSqzHYCVTptzvTO1VTXkbzwePir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMBdOi6gphiV2hTh1kKtwDxb8IM7IYJMcBuDrnfg%2BOVMyj3FvW4Xlf32Paxu9w6UILcix0LvTsbggSXfdNhl%2FozqtIyhp3OHkwLtEfeScKb0GGoJT6KoJ9utop%2FgFaTo6Y5oNcwmroe6nQAxPBaF1wfggEykBuJkshuoenskUAmSVr%2FAq%2Fwg3hQb8PO4FTTvFz3D7nJDKtkCM6wdnwm9lV%2F81jxFXp3PztnHh0Xai4G3OMig5CAkU4pScYgElAYqQA3PeC8eTZFzW4xZyAbgKC3xlruZLvy6iQGbANyk6pK6YGoOERolqsUn9CnqsQrFx%2Flab5TqxtwFSfLWDdrGs5F0MgwkvO6Yt6%2FeIOuPltohKrgyH8kThqMjTUq8nmUwEjALbz3CfQuPHZ7AfPO%2FWM21ZPLWvbcRuEyKSFcEx0FxdYZy5Zw7lTyV%2F8sUm1UGZDQlJNEE7nRILdBPPdMqISYgfMTqWec3xwr3T7uM9VlkYabYiu5xd1pO3%2BlHYvLRyIqlKUMX1B6OUq6%2FGpYJ%2B4MfkWO%2FUiZCIrBs8VqNYfXu74CmMQ%2F7ET%2BH2kx0Sgk4VdPGEkQmjR7IuZQzF6dDd3Af%2B15%2FD74qho06XbLe6s6yaKiEyAnZziGbK7sH2s1dLVh3M6gWxAtpGPQqYwyavQywY6pgFgX6uscnceJPlT6%2FbrND8StME7JijwdvT%2FHuC5fq2iesfBduE2%2BY3qKSfUMbHkV3HsDcdNoTfTHYIHnEYObWjfI%2Fu7yA5qEh3Y8wuIDvl2ggoRJKFDhKKz4LBk5agCy7Gks%2Bu%2FK1aKlbhBrAHpM8ZPbzF7sAUx4KGzHVIbTR1TXxDcxDpPaxXU0m8auQ9vrmdEGlrAZ8jYhdxhfU8aAvQy2%2Fqoz%2B5L&X-Amz-Signature=840c9a193e4a0a2ef5b3fd1400fa44728112982d85f33766a0a06774fc7e896a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5NSU4YZ%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFt4UjBhNieNh4R1aSf4K%2F346x88TgNCvQx1WLPEX69ZAiEAlUxLEfJwmlvhcRdoS%2BLoXDSD3YjTzdUsZ2XPsl%2FZfn8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDGOgxi0pFBNGsEEglyrcA%2BtPczrxnSeFCe3PSHCCYADtH8QSvmmfmhd7dWJtt2dcqHZE%2Fqrfwg59%2F6kGlLJ%2BekDM8y9VbHEX7i4sH%2BUQsxWEvvLkWdya3qMw9T0KUJ4NFx0xTn%2BSirtaaUMl8qiF89YLr0IpIiLfy%2FOZaR5ExX%2BMuREc1HpG64zi%2F7oWlfm8xzivXAMYq%2Bdb1N7qkWxLDfWmqWVF%2F6adYtUyDOXjOg7BSYjfhA7uiz5nDBS3NnhkH57%2FXSq4eUe19xHVHwF7mcT8Uzk1%2BKsmHlHqcSs7HqwrVm0jU85GduCUpuAu8txZEcR9B6PZ%2FhD%2FM3u%2F5RoFtYNg6N0oOJpJo2wmf3vow47StD8DvERqSHJsKf1AMqs4YIyJwspXquAULS6BW4Mv%2BtmBOlR7Qoe5IjuqnPJQSNa%2BqNyAKBoUWUdsHFWTmPED%2BV2PckAzjj1WmulFupcCgaBvI0ERjsFsEeghBIU9CrrLbzdUtBNSBGGqZUlkYkU9i68RfGRyeIxRusR8AyuKZEI7JWWM5e20nVYX%2FzcLxk8vH3kFUR7Rbz3QjZZrlPRMbfv5Bhv2QHZRRvWnfRq4coiPBJ5FUHLnAYjQX2yAVNpYLUg5JyXZEtMnPDGFGONn7NmQPIaeZNRIVDoOMLOs0MsGOqUBbC%2BYPFu8YXRqNU4cX3ek7Ajrs6OepyFxks7zePMU5VRb552pGs%2BehlAXEswf8rAk0voyJy7k1foS9nQvxmKYADg4Vgu4JrtgnGxShgPhjY4nPIurhRM1zTEQOuyVkVRbFRiBon6P28CWp%2FPb%2F8iDhW40j2dvXHCR3FtECHVzQPrhaXQSy1KfUHVNnIRhMZmjIUeLtHBkMl5iqb0rPE5pgSal%2FDQl&X-Amz-Signature=384cf8f536794246761835544df2e200902d78fcba4677adeb868d531df9a587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRMNJKN%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD9m18cLp1VDz6BiFHlMkMG%2ForrZ4f%2F1aufXuiw5f1TYwIgTCsTrvR08IFX%2Byth6W11Um7oXaeE92UmR1cBQZ9zhuwq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDP8bv4tRgVoktDsR5SrcA%2B04YCRNUDVGAq57CLgVga74O6RnM9JLFm4d1Ix7Ld42Vi9dycLEk5DjSy61flZNPVZBW1m12wXfEe0yQT4qkIFDW0CIKMA4POjtjgyUR81sCYOPxgpzgpv10SwAZQ%2FfEBZsKFmZk3VPMKyhWRETLz5SY5k9w98lhzv%2F8AxAdDFmWCDbmpyL9J1CkaTubH8MlMnP6OexUU6hBUWJ1I63uzLh9ocNbBSgQOOVlKnuiQm5Kpq2UwcTvUxe%2FiIP3%2FyxzyMhMfS%2BKwURKRr8Nc%2BG0fzCu1ieLbtvXxSjnyF2Oh2z%2BAs%2BwjIJwbZUyHofGjyT22u%2BaQv7YxQb9oyx8MDPmDjxZLPjYGY0fDPYWpxApOBjU%2BuQj9icPnS5ePUZmWd4nKu%2FC3PisboyBQm%2Fh32zQ%2FBBZDUFW4O5PdzHWBJxlOKeXyncSRM3XKQPChPb2h71QH64mj3r4KUcRE09rWQaWI22OftHXn4EeGL1xUvRRf8ZBPS2Hi9M3ap18FCOJJeJwYpquFmOfd7NZihXOLW9zU0PIDaMbLLdrnkrNS2%2F74E%2FV0wHqNUqoPFKuXICCq%2Fvjwt%2BqpJiJ1%2B6UynjVJ%2F0ovqENhVEpm%2FisbuzVlTragQ3o4swkE%2Fv5s58UjsPMLur0MsGOqUBAmA%2FyNQWTOHG1MNrZT22WW%2FTmpVD64LG7iskQGjL8hPiTjVikoQqYcdq1wNaKv37QNre81ZkcKiyI1J1PuomuJG0kFDxbJATr2LAUn6wZt1AsjaWrn0ivS%2BxMtbWCPkFYQeH1ivaorOBpv1YX9ysC7QR1Pae7sJd11RwVlQwP%2F2pwz6hafMgniXealN8l354KVoajybKpQOWaVbaXjdUsmGj9xI2&X-Amz-Signature=23a879ef6d40122cdff14112c82e9a92027abda9cbb39bb2455987f266d7e5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
