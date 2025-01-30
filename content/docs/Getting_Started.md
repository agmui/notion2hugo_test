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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ4FB565%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeRjRQ9Gg1bu%2BfAhE76bYKtnTXNTbz65ZFYmGphCKK1QIhAI16wEjGGGE4cOf1cGqumx33joQqYv7h27TihhMqJhR7KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Bdli0seV7Nt9SLXsq3AO%2B3AdufmV%2FmHeFc5T9JzvVMXFje06cZd82BjUIDhn0MlO9NtmF9cgmgdRtVtAUN4PqPFSnaKv9vo7ziN82iEKJzJh1VKgUvVd1DPkeHxLi%2BTorryY8O4raUI24xGAeUPkOXr09yl0sFli2ZZw%2FpFO4ACaS2UcaG75AJVm5sjCEz7YHCSUh3svs4ab3guHm5JAKh2tNEn0hcR4R642Rn0%2B5uGkLFc%2FVMAQeqPsLeG%2BCA0mn7NIdZuX%2FW7peQs8CwZZINYvnz2L96RQgMmYskI2ddzDjbASjiLxryajKHajCCi39t5%2B2Mz0X2rylmPXkyBtHoQ2m2retHwCKk6slt%2FxTvGlH19oxrY2V6prEOwgrWff%2F6dEBUKbPYyqS2puHUMDJuLQag0W8CM1mH%2FFL4VXvoye9BdedzjZTs7Nxv611mEuoddtruYHprkx7mtR7%2BXzyksvayhl%2F5r2QO8kOfXQ5Lvx0DbqOD8gGcSxjH8pQF%2Fm5yMknmPD%2Fef5MBpK1Q%2Boj5Jg0ktRAm%2FNmBUG5f3mem%2BMpL9y2KZEcwVSLzECjTmPWtMY1KmuNwsr1a3rXwjbblwWeAo7kki4koR96ZFbnXiR02O2Mur3gOtpyhfcHZud9cBKHpvXAM1jyMDCG2e68BjqkAdgYIl%2FoVd3Uq2I%2B83K%2Fwic2Iwq7fGYDkOCOO0lovqiOO1AUwLg04RvGeWpQAzkWvP8HgrUBpYI79EVrdZZrmpHC%2FNj38MWbzFIhM7SfGXTEdJihzpvKIs0y8r0n3ug0vDiqxakUoA1baTvxoE%2FvgiWRi8xr%2Bqq%2BjEZsDPmJ0XvRtIUshAhRfP%2Bmp942N2g7Ve5dLACE9PeDqVcDH07bR8Y3Vqbk&X-Amz-Signature=fd092a2ecc78bf29a8940beba42898d786346f077b98d36c74cefae7f666b803&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ4FB565%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeRjRQ9Gg1bu%2BfAhE76bYKtnTXNTbz65ZFYmGphCKK1QIhAI16wEjGGGE4cOf1cGqumx33joQqYv7h27TihhMqJhR7KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Bdli0seV7Nt9SLXsq3AO%2B3AdufmV%2FmHeFc5T9JzvVMXFje06cZd82BjUIDhn0MlO9NtmF9cgmgdRtVtAUN4PqPFSnaKv9vo7ziN82iEKJzJh1VKgUvVd1DPkeHxLi%2BTorryY8O4raUI24xGAeUPkOXr09yl0sFli2ZZw%2FpFO4ACaS2UcaG75AJVm5sjCEz7YHCSUh3svs4ab3guHm5JAKh2tNEn0hcR4R642Rn0%2B5uGkLFc%2FVMAQeqPsLeG%2BCA0mn7NIdZuX%2FW7peQs8CwZZINYvnz2L96RQgMmYskI2ddzDjbASjiLxryajKHajCCi39t5%2B2Mz0X2rylmPXkyBtHoQ2m2retHwCKk6slt%2FxTvGlH19oxrY2V6prEOwgrWff%2F6dEBUKbPYyqS2puHUMDJuLQag0W8CM1mH%2FFL4VXvoye9BdedzjZTs7Nxv611mEuoddtruYHprkx7mtR7%2BXzyksvayhl%2F5r2QO8kOfXQ5Lvx0DbqOD8gGcSxjH8pQF%2Fm5yMknmPD%2Fef5MBpK1Q%2Boj5Jg0ktRAm%2FNmBUG5f3mem%2BMpL9y2KZEcwVSLzECjTmPWtMY1KmuNwsr1a3rXwjbblwWeAo7kki4koR96ZFbnXiR02O2Mur3gOtpyhfcHZud9cBKHpvXAM1jyMDCG2e68BjqkAdgYIl%2FoVd3Uq2I%2B83K%2Fwic2Iwq7fGYDkOCOO0lovqiOO1AUwLg04RvGeWpQAzkWvP8HgrUBpYI79EVrdZZrmpHC%2FNj38MWbzFIhM7SfGXTEdJihzpvKIs0y8r0n3ug0vDiqxakUoA1baTvxoE%2FvgiWRi8xr%2Bqq%2BjEZsDPmJ0XvRtIUshAhRfP%2Bmp942N2g7Ve5dLACE9PeDqVcDH07bR8Y3Vqbk&X-Amz-Signature=8ca9508f180e26024e9b31bc59e0135a0aabf5b3b3bd395234d04b015c800abb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2RTSYS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo9Hp6RXBhDJsXn85GLtOvZO5wAlEoKunOlxq%2FuEhcdAiA5mXhnOpGWHRue9A0BTxEjUXwX%2F%2FNfLj9fFVOhB5SHHCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv9qRKb4IV12ium8sKtwDfajBHU0rh8lkOQjGKsfv%2BgS04HXXRZhn0ivM1lRIcetq4afMnsVDUmpeqnqduadBoPUYJ8cc6YfCSjNAA5dHGNUhYggjToPjuIXYu%2FVo5J9S7b0ChTBauz5mWDdmuWZ6ConQe%2Fzw8Wt%2BLUzLC7ilW2%2FFDitrMSU8OVfIgG%2BSEOqQOp9eRhNqMu1KIME9olGo1q812VNt9QTV1YUW2Vyh9jlC9B4CVdIllUBHjcH3p5CNuCQfnCR9UnfRoxUT8923ii%2FZaJetSL2aqBkPXUKL%2FU94GlzX2Iz%2B6GkHLY7FnekilDOATgCTKuKDVVVf1XS75Ouu8xBG0uQ5CFxGB6GdVR8dqz8C61CAB9vBAyL5nKZ5VJjtoUSg398YGPG0f39cYk%2BmZX%2BnOQSF08MxhRZpzSzWiOzcYufbBgwsHSPWkg1GXQYL5WqDD5FUQrteANWV38%2BAQqZ8av0hytxE2n22oNlgkHgWj34ymHIvu6eDg1TH%2FJmRXFKkoSn61NX4DiKZgbN%2FTi9Dg8namGdK0mMhLliI8q2wglpQaPEuqqLq7BDFJFzv9Hri6fyy5k5bMOT8YOYp%2F5xVamzpPMbtgS9kZItWDEqLe5NlEVXDwqijYueynSCjwTGy1pv6lEowqdnuvAY6pgHRFgm73d4rvSQx4REbtIqqVX10HBt4J0Q%2B9frweOx1%2Fc8S5m9BGFB3pQnV6cotpV3jT81YUlG7b5mfPy4qjZe8M9n4sztZdyKvR0IVuwM%2FD3Ay%2FDGfSNB8OCzkZcck2weXapXJqPIR6vD9JbTr4PqE6eSi3usO69SxyIKFDzdW4zp6ZbPN2Ij5WvaB6K3VSUCD8JhrAsT4r5GunzJleSxRUv%2BTQG9y&X-Amz-Signature=ed1a7745cd0737ffe29b6bd1575474af645069d81a54fd17109ff5f27b87d240&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMP7VN23%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwK9n0Q4abT%2FdF9HrBTLEH1lnMbP3QeqaQ71WMM0CEywIhAMPU%2FnjnOcQsTHY7v1pSVm5ohHy%2FkOaTq9EkmCEKxrckKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys58EiPcNlFokYA2Yq3APSl6qffKTNwPrB9kzj9B8WThdRqwd7umX3SYcItZg1mVdjrFkpmOMcgBQF6RQju2IsIS1x08e%2F4f%2BjDzaBJ%2FagHS1R8U6KlSMI3zD2egkOivNZT%2BFt9RShUPLxUDG3x%2BoyWmGgNq0yiyqitU485DvTlVEIPdsl18aQ92BXxjXuY7Trfg2JZtb03TkcA1o%2Fb9jl63iiEi%2Bdk9HYejAvOBx10MiKR2i0K%2BEjfuj9lys1EQ1kpqOxZeWwJh2gsAL%2FEi4%2BonPb9d28qrET%2BazR12BnwJOQSj1Zv3uYk9sOf9w0we1CKY1XpyfuXWC7%2FdgFnLzsu92jMiTWgqBAKBZmlscpx3w9eI1J5BEbcd4M0lKvl8JBc9aOyv5iXXO6nVYc3r6nWq5%2BZ7eG25wzn6aW91q%2FFLwiWgSMgxzQkch1sMnxRxt%2BZCqAqlaMVQCyjSRuXH161X6sMj7TjtL%2B9DRpifnsRrH%2B9I%2Bdg09kROGpl%2FoACCByunlHFgSQ%2FN004OcB2Z45EzB06t3duQOdnL0yS4lFS6svE4tmzaBHyytgDuehv7VgFr9rKVpaO91z1AgbDKQbnXe8howInQSVJqgnNwZlcY6iVK2YaPSwD0int7WZVBtQqIdX8yOG%2B6PwNzDU2O68BjqkAcvYdR%2FGPplj%2F1Dl2VdUdAMLrHg353JSjW88kQl7vkGzFY%2BsUqjYnj0isf4io%2BLssGiOUKyzGzotDcXgc1dZ7Y1viXAidnfA7fDMDgPGcfqczsz1Yh3MmqA0SoHQ7%2FMT10lb0klqQsNRmsrwaN1YprR%2BkTJvwPsURnW70jovddoV2b7%2BRfXKXkA%2F8AMblB2oPyzgFZf55GhepQWB1nGZk11TaXPL&X-Amz-Signature=65662ccb4d2041d396d6c99160a033a299d44b5d210d052dec519e7cc03c251e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ4FB565%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeRjRQ9Gg1bu%2BfAhE76bYKtnTXNTbz65ZFYmGphCKK1QIhAI16wEjGGGE4cOf1cGqumx33joQqYv7h27TihhMqJhR7KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Bdli0seV7Nt9SLXsq3AO%2B3AdufmV%2FmHeFc5T9JzvVMXFje06cZd82BjUIDhn0MlO9NtmF9cgmgdRtVtAUN4PqPFSnaKv9vo7ziN82iEKJzJh1VKgUvVd1DPkeHxLi%2BTorryY8O4raUI24xGAeUPkOXr09yl0sFli2ZZw%2FpFO4ACaS2UcaG75AJVm5sjCEz7YHCSUh3svs4ab3guHm5JAKh2tNEn0hcR4R642Rn0%2B5uGkLFc%2FVMAQeqPsLeG%2BCA0mn7NIdZuX%2FW7peQs8CwZZINYvnz2L96RQgMmYskI2ddzDjbASjiLxryajKHajCCi39t5%2B2Mz0X2rylmPXkyBtHoQ2m2retHwCKk6slt%2FxTvGlH19oxrY2V6prEOwgrWff%2F6dEBUKbPYyqS2puHUMDJuLQag0W8CM1mH%2FFL4VXvoye9BdedzjZTs7Nxv611mEuoddtruYHprkx7mtR7%2BXzyksvayhl%2F5r2QO8kOfXQ5Lvx0DbqOD8gGcSxjH8pQF%2Fm5yMknmPD%2Fef5MBpK1Q%2Boj5Jg0ktRAm%2FNmBUG5f3mem%2BMpL9y2KZEcwVSLzECjTmPWtMY1KmuNwsr1a3rXwjbblwWeAo7kki4koR96ZFbnXiR02O2Mur3gOtpyhfcHZud9cBKHpvXAM1jyMDCG2e68BjqkAdgYIl%2FoVd3Uq2I%2B83K%2Fwic2Iwq7fGYDkOCOO0lovqiOO1AUwLg04RvGeWpQAzkWvP8HgrUBpYI79EVrdZZrmpHC%2FNj38MWbzFIhM7SfGXTEdJihzpvKIs0y8r0n3ug0vDiqxakUoA1baTvxoE%2FvgiWRi8xr%2Bqq%2BjEZsDPmJ0XvRtIUshAhRfP%2Bmp942N2g7Ve5dLACE9PeDqVcDH07bR8Y3Vqbk&X-Amz-Signature=cee8617caca58e5daa577758300481d71cdf1faeab06a1755a7cadd06745f910&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
