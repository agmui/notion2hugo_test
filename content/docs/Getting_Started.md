---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIBCPSEX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBR7OqnEgGdxiS92czb3BYJYTmZWJ0YA4TAX3d%2FjXFcOAiEAqyzh7OX7%2FcVmlJMvaek3YZQ8Llfa3JVWVrN1gAbXYcMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDO088NF4SX87Im%2Fb0SrcA9fhLxdltocwYXEX%2Fmlux7fGw%2BEXnsmnW3mnZb58YuyaEavR2lBsTdU%2Bn6Kz9NdWVNXxTXPoax3J1f%2BXcGQfCT32yMmQljziR0tUzhhCfuK%2Bzd6MT8E61wNbyY01%2B8Nbl3Wjo%2BTV4sdar%2Bjs0z1XgJhbdtDjC646m22XKEL4nyrGjSJ3Zci1gnrjkHzBXLi%2BWIglon16OG1XTt%2FvHf8Z240n0VH6QIOSdgVUQxF1WZ4RWTl6%2FfhOBc0QlaLoEwWMaMIvttVKF18r6601K0yQ4c3ckMYnYdPqQSghhS7Wl9%2Fv4h74wcNlw4Uak250HMxvaUMhBmBeBlGJadLBNXLlOOiwhTfygt5xoF2XfxI0Lus4jlAVx1NsDqrEhMc8JgdVuc1r51oTSoS8zLQtaJ2iAxTiGHK4OruIn5SZTfjSVVATZBmjVSX%2Bb0ivPfO9%2BOXCEz2dwRQloNKI2AL9SaaHd9HwCcdBr5roUKQK8zaPc5n2rx4KSpbcaTEVN0%2BiAEL2U0b0PYqDNW%2BBgsYQPoNqbcLRewO3L%2BqoPvsgKrqjw%2FxeoFDTWUZ1jmp0atZt1DkIlo1QnzAHZvlHHzlhqRfxCroyRgvwMG2VAx7X7WHlX7Mel2Q8JfyJ1oTQpM1vMNmi6r4GOqUBLCH5ANEQLRUV%2Bxwy1Gd3MtrsXMDa4bIGOEPXbpJXm6iBSvVKiNWSCwJwoo2wX61LC%2BIm%2BOeaAYZ%2BwYZgqV0L8ix2ABsgIGmMQl9sBQDAS2CO6vq2TOFpMNNrcKXrCHceyuGpxiysvxTuQRD6f3sL%2FgM0bHoZeONeKS7HXWp8vZe7ZSbqQl3veaMd2TmSlGDEdPw627HPOVDmp8SmmAPYf8oJ9hf2&X-Amz-Signature=62e24d6fac39a85417e7f177435df960a9756e19c0a885a3138b59cd29430c14&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIBCPSEX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBR7OqnEgGdxiS92czb3BYJYTmZWJ0YA4TAX3d%2FjXFcOAiEAqyzh7OX7%2FcVmlJMvaek3YZQ8Llfa3JVWVrN1gAbXYcMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDO088NF4SX87Im%2Fb0SrcA9fhLxdltocwYXEX%2Fmlux7fGw%2BEXnsmnW3mnZb58YuyaEavR2lBsTdU%2Bn6Kz9NdWVNXxTXPoax3J1f%2BXcGQfCT32yMmQljziR0tUzhhCfuK%2Bzd6MT8E61wNbyY01%2B8Nbl3Wjo%2BTV4sdar%2Bjs0z1XgJhbdtDjC646m22XKEL4nyrGjSJ3Zci1gnrjkHzBXLi%2BWIglon16OG1XTt%2FvHf8Z240n0VH6QIOSdgVUQxF1WZ4RWTl6%2FfhOBc0QlaLoEwWMaMIvttVKF18r6601K0yQ4c3ckMYnYdPqQSghhS7Wl9%2Fv4h74wcNlw4Uak250HMxvaUMhBmBeBlGJadLBNXLlOOiwhTfygt5xoF2XfxI0Lus4jlAVx1NsDqrEhMc8JgdVuc1r51oTSoS8zLQtaJ2iAxTiGHK4OruIn5SZTfjSVVATZBmjVSX%2Bb0ivPfO9%2BOXCEz2dwRQloNKI2AL9SaaHd9HwCcdBr5roUKQK8zaPc5n2rx4KSpbcaTEVN0%2BiAEL2U0b0PYqDNW%2BBgsYQPoNqbcLRewO3L%2BqoPvsgKrqjw%2FxeoFDTWUZ1jmp0atZt1DkIlo1QnzAHZvlHHzlhqRfxCroyRgvwMG2VAx7X7WHlX7Mel2Q8JfyJ1oTQpM1vMNmi6r4GOqUBLCH5ANEQLRUV%2Bxwy1Gd3MtrsXMDa4bIGOEPXbpJXm6iBSvVKiNWSCwJwoo2wX61LC%2BIm%2BOeaAYZ%2BwYZgqV0L8ix2ABsgIGmMQl9sBQDAS2CO6vq2TOFpMNNrcKXrCHceyuGpxiysvxTuQRD6f3sL%2FgM0bHoZeONeKS7HXWp8vZe7ZSbqQl3veaMd2TmSlGDEdPw627HPOVDmp8SmmAPYf8oJ9hf2&X-Amz-Signature=5f2e0bc84871bbb061d8f88d2a9830e5dfd225cada101f117c4e4abb107e55be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624BIOCEI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC2UsyzG8y8g%2B91zd53aVXax2uqqO1QYj5LV7OE6B%2BOWgIhAJBu5F%2B6xCEhk3tQTLo9nBIR5rXY%2F034jQw9I6rTAtQSKv8DCHMQABoMNjM3NDIzMTgzODA1Igw4iLwircvWIV1IGXoq3AMvpAu9MtZtLpdrvaO4bmqb2QE74ilBniGy7%2FxZp4sYr44R4P1IjQs8O0axUm5pEt3PcnIfZ3HxCGcCI2nmjbHHJLGGz2W8a8eM8tJYhAtRiUctvLFM%2FeUW0%2BWDpUxJMl%2FeJKPh75IR6Pgf%2FKLryDQMecA6Ial%2FGnBDTo7QX%2B337PX%2BCpmyWBWYtCdDbXoBr%2FGX%2FtCkE3Pxm%2FlnTgh%2BFxyxFpPVhOm0aKRf%2F0wHZKVnNw%2BXH6ETTrjZTpz%2BDja%2Frvs63lHdOX3OUXEFkJUQFjotrte8pTmoq%2F%2B8sUcFpWR9OSSXusylz6yiByRCkZUHLS1BHxuFYnhg1NlYl4CZ%2FLwcm5iypEPoHnj8M0CKf%2Fjk5dYFTtc0xjdj4ul79Ffk5l%2BxsPfbfMv9OJ4C5s%2FODr3BNagroYoJAG1Lf5B6EuFLPk0HaI9FZyEV%2FuoUSm4cY1KkvarCmnlBbd%2FVhT6JsiC%2BqVERkZavlkm942pGNd5%2FfRQfzK13bz%2BMli%2FhSiQhSuoeYirCUTPIB6lD%2FZ0FKX47Jz0QTbyLZeEAmcRlC6TzESyslmuv%2F%2BvtVgy97Yj3s7v19VEIXnogP5SN0IMBm82Twr8aeah920vYhe740y7Iima6ijErhrntfogYuTDko%2Bq%2BBjqkAR4o1%2FXrHFukjDhX99uSROOvQitqEE2mxjEIGb%2BwakC0DBCZt1l%2F2iWsApWqlBnaNkWjkVINHvYMRkGJ03KNJte01EZ4MohaXSqvhyJunLS3Ns8zhwO4axo7x34hAtpwcb9t61ZDzvO%2B9jDwyOEom1p%2Bai%2FGdPpFlpt%2FZmnckWhGraqzv0V963h3FsWWkk%2F5OEEDfyVtt4s5B5BCnlgt62YR1PGq&X-Amz-Signature=1557cf2834c264b99fda314636b8bab5acbcdfa4dd2a657a90dd2da72029b737&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJKWZF37%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCu6dC52aGzUluqFKzuWRR2OAgYjBlqJdaQCFCjcExFFQIhAPLKV3W0h73GwYIvRNhon0OXjX7ZEmvZAV%2FrlF20mnOMKv8DCHMQABoMNjM3NDIzMTgzODA1Igy0wXf0pKDdVbQdP%2BEq3ANozBpNNtzWhgEgE3iw3AaB8KbBIu5nGAtdMifj47654LsZdKAhvCDMN92qNdBQoL6hKiS5koOWKh8KxWrs7HqAjDUeATl6rDzzj33wE19aAfnQF1ivt1BXu1nYCwBZ1dccjpraDRifvJo%2Be38iAJIsfWQ%2F17WNuErocYbjaUaJgldwOwcLhK1mHabYt6gKwF9PDgJREA%2Fc41xFJ0Xc32GkSrYtVSPIlLgurOaMSo2nL1xEVAeokhElatp5ZAcd2tuUVIdEdMymfoqaEhs%2BuLoOTrMCnYI28fmQIbTo2SNmWP8kyNHdby%2FHnawXAA%2FxTSBujtF%2B0XinOBakE1to88sKGErDJGKIjSNhKATA2ooq%2B8LMEUpqNb9wY3nkk21uoOyXjqUdN68F%2FKoycTQNn8Lxxf%2Bg%2BKrmFMBR4dhPmU7nb9Ik5AGLmMNIiSMu5Lrh0LSQZkaMj5TvGd%2BwmKzjR4%2FA29%2F%2FEs2aSYQTLTuiaZeRwMpk3Eri32d7DOOora8Bbj17rI0ggH1JY8SOd1rTy%2FVmlA48gbjw8wombkS6ZocDA6FR8W4o3aBj22R0xfCKEH6o532GLW%2BoiSyDQlwDjGtwXeTHVWJ34Jj4zoRBn3HKOWa335I3fcNzXHAOxDDhouq%2BBjqkASmH1Q60eflt8BlK7WjHp7qXZOIMwfl9YDFls3qkUR00c%2BcsrvggOMmRrGSnEryH4NLrN71e849wts4%2F2h0b38pcZKkGuG5R%2FF4SS0RfEJVrW87ZI%2F7awDIIkspW2VfO5v54UiVlG9%2F%2BCGalnAubJelxrklNzxtDJ0Q8R%2F7ReSuKGxzu9OCqJpv6P6Wv2qYISAme4ih1a9EeHT6c1lC6oHctDcEB&X-Amz-Signature=74b8a92f64be855f5c3294b0a8fb9d3eb44765af2896ea2d366eb28b55da9080&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIBCPSEX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBR7OqnEgGdxiS92czb3BYJYTmZWJ0YA4TAX3d%2FjXFcOAiEAqyzh7OX7%2FcVmlJMvaek3YZQ8Llfa3JVWVrN1gAbXYcMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDO088NF4SX87Im%2Fb0SrcA9fhLxdltocwYXEX%2Fmlux7fGw%2BEXnsmnW3mnZb58YuyaEavR2lBsTdU%2Bn6Kz9NdWVNXxTXPoax3J1f%2BXcGQfCT32yMmQljziR0tUzhhCfuK%2Bzd6MT8E61wNbyY01%2B8Nbl3Wjo%2BTV4sdar%2Bjs0z1XgJhbdtDjC646m22XKEL4nyrGjSJ3Zci1gnrjkHzBXLi%2BWIglon16OG1XTt%2FvHf8Z240n0VH6QIOSdgVUQxF1WZ4RWTl6%2FfhOBc0QlaLoEwWMaMIvttVKF18r6601K0yQ4c3ckMYnYdPqQSghhS7Wl9%2Fv4h74wcNlw4Uak250HMxvaUMhBmBeBlGJadLBNXLlOOiwhTfygt5xoF2XfxI0Lus4jlAVx1NsDqrEhMc8JgdVuc1r51oTSoS8zLQtaJ2iAxTiGHK4OruIn5SZTfjSVVATZBmjVSX%2Bb0ivPfO9%2BOXCEz2dwRQloNKI2AL9SaaHd9HwCcdBr5roUKQK8zaPc5n2rx4KSpbcaTEVN0%2BiAEL2U0b0PYqDNW%2BBgsYQPoNqbcLRewO3L%2BqoPvsgKrqjw%2FxeoFDTWUZ1jmp0atZt1DkIlo1QnzAHZvlHHzlhqRfxCroyRgvwMG2VAx7X7WHlX7Mel2Q8JfyJ1oTQpM1vMNmi6r4GOqUBLCH5ANEQLRUV%2Bxwy1Gd3MtrsXMDa4bIGOEPXbpJXm6iBSvVKiNWSCwJwoo2wX61LC%2BIm%2BOeaAYZ%2BwYZgqV0L8ix2ABsgIGmMQl9sBQDAS2CO6vq2TOFpMNNrcKXrCHceyuGpxiysvxTuQRD6f3sL%2FgM0bHoZeONeKS7HXWp8vZe7ZSbqQl3veaMd2TmSlGDEdPw627HPOVDmp8SmmAPYf8oJ9hf2&X-Amz-Signature=23ea206116b20cfaef934679dc06037e9568d818573dee601f662ca90e5bbd30&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
