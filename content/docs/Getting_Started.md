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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GXOFEV5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAs%2BKSbFlTcI%2FWxiSc8gIlr4J24iWF4vaeDxxRx7VRRAiBwwZarmg3M1dEOYXvhe2norJJNVQaSsTyPdQdXyOeEFCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMqvEc%2BMYD2IsbFIzAKtwD2V8lyvcL1bJvue9G3TKQOs%2B9AY41OaWcx5JBohx%2FNnT2bqCc1aDh%2BIgPgJs%2BllpjcROeB6YcC3JQMX0Tv7ZB9fM1drfz1RWNWNxJ%2Bmz7qKXSYJ%2B9chvw%2BlXQ29%2F56wLFIngL9GGnDcBlOK8WX%2Fw14F7VjZOpvgXLFa3oBWKzQzV%2F1X%2BS6CrRVyJKKeZ5NJREll2UPMyM2UJvMq7Bk1hEcvDEGyE09Ae7HdgOTMiLufu1o%2FJiNG5G%2Fb%2BchQCsOubyPC3lQQLS6OLwklFOpVVH%2FNE7rjx6S9orWDI8ZfW2p44HuZNkftaExRfGjZPDSgDtSffu151OFJxsvzj%2BSivnscDNIf7fGUp7lgy9%2B5Hgxr%2BqOR0aE3%2FLbX5sCBMGnm%2B2QH%2FT3fkzl%2BgtK3GVUArXu63v14kWLvOPvyHRW8CRKlv7TxRaVIynKu%2FaQIpBDp3%2BhQPRAQTiQHfx8HPfXLdDfe7YHZ6bCQ0lBAK%2BE8IVspSurVRQwB7iuq1PrpgSPeojEjO9lGXdkZpWpHKBBZHW84lsl8Rd4HFQ%2F5qQD%2FFWMMrsfPvcB%2BHMYdGY9Z2mx0FFEQcfA6Fkkx3mwVkTF6a1RussIOv7lJxIr9lmA7DcfQ%2FOWNhK1a0jByKdYw4w4dbxvQY6pgGr4cIy2g3vf3ArC8t7J7VhoUnbOdRnbuZWkGC3uxtE5Dm7nNkB612pRftDmGZ2qK9em%2BZ%2FxuvmGYgGpLSoHYEXuHBSB0opAe5C2VLw%2FXNO8WBxTs4s%2BroJ13ASM%2B16q4K0a2zqRONVjOEO1XltjzwzqygkbYYTOEKPC0Py3F5Ob7zTbDDMd%2FHtCIkwA1gQKwyHFjGXrTlHNYJU37oRljHcnM6Wa%2Fn3&X-Amz-Signature=22d2d406522bf0e72c681a2f17382f7e0a6d7b05ae7c135473485a63c9f56188&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GXOFEV5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAs%2BKSbFlTcI%2FWxiSc8gIlr4J24iWF4vaeDxxRx7VRRAiBwwZarmg3M1dEOYXvhe2norJJNVQaSsTyPdQdXyOeEFCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMqvEc%2BMYD2IsbFIzAKtwD2V8lyvcL1bJvue9G3TKQOs%2B9AY41OaWcx5JBohx%2FNnT2bqCc1aDh%2BIgPgJs%2BllpjcROeB6YcC3JQMX0Tv7ZB9fM1drfz1RWNWNxJ%2Bmz7qKXSYJ%2B9chvw%2BlXQ29%2F56wLFIngL9GGnDcBlOK8WX%2Fw14F7VjZOpvgXLFa3oBWKzQzV%2F1X%2BS6CrRVyJKKeZ5NJREll2UPMyM2UJvMq7Bk1hEcvDEGyE09Ae7HdgOTMiLufu1o%2FJiNG5G%2Fb%2BchQCsOubyPC3lQQLS6OLwklFOpVVH%2FNE7rjx6S9orWDI8ZfW2p44HuZNkftaExRfGjZPDSgDtSffu151OFJxsvzj%2BSivnscDNIf7fGUp7lgy9%2B5Hgxr%2BqOR0aE3%2FLbX5sCBMGnm%2B2QH%2FT3fkzl%2BgtK3GVUArXu63v14kWLvOPvyHRW8CRKlv7TxRaVIynKu%2FaQIpBDp3%2BhQPRAQTiQHfx8HPfXLdDfe7YHZ6bCQ0lBAK%2BE8IVspSurVRQwB7iuq1PrpgSPeojEjO9lGXdkZpWpHKBBZHW84lsl8Rd4HFQ%2F5qQD%2FFWMMrsfPvcB%2BHMYdGY9Z2mx0FFEQcfA6Fkkx3mwVkTF6a1RussIOv7lJxIr9lmA7DcfQ%2FOWNhK1a0jByKdYw4w4dbxvQY6pgGr4cIy2g3vf3ArC8t7J7VhoUnbOdRnbuZWkGC3uxtE5Dm7nNkB612pRftDmGZ2qK9em%2BZ%2FxuvmGYgGpLSoHYEXuHBSB0opAe5C2VLw%2FXNO8WBxTs4s%2BroJ13ASM%2B16q4K0a2zqRONVjOEO1XltjzwzqygkbYYTOEKPC0Py3F5Ob7zTbDDMd%2FHtCIkwA1gQKwyHFjGXrTlHNYJU37oRljHcnM6Wa%2Fn3&X-Amz-Signature=7fc5454f1dfb30336adb23a31dcd21913d095cba75e85ddde1b2c37fbba28d5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBXFXIW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPy501E4G1LCeIBNV4SXIsSJoFb2eBbZzIpkvJv5djSAiEAvYYey%2FlG9stIaXn4r1ZKOecvWd4J5OVhgVXR6BxayGkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOY2F661QGh1Jb3T7CrcA6tTbDPuM9zEsEVwCtJzUpfNQoCR1WK%2FSg%2B3IdOc%2BR6OHxKWryznK9SjeFBYsGvpWjrkX301W0XnaZOM59FLTtKZrqs2bw15QndgKKzmSG4MelYgjo5qfkHT6yi4uu6Bk%2FBBcJq3EisWLjc7x9rU9DFGr6%2BNYHNVVFbc5K2Y6skXWDcvxHwiWzocy5T0Xssl00hkDwers5%2BjpAJrcmAh1cicbWjDbTiqrrDAV645NevQstg3ZKwuVSylMCyNx7aZPfJq5sRRZE7z8sp1vtAlCVbp7OAwbVxAlxmdw%2FaCdX%2BoB6QrHWpWVu%2B3sKkDs35Uq8ajgbI2dbkte4phKzSc3KApO50yXiK7P7fT9kl4CEoI2WP5tLNIVoHt0p2rSRvPGlZ1%2BkaLG7hko6kqg1FZb1lNlhqLdCTtXfN%2FkwftLG%2BfvGovrApqOwQuCac1VMyknxx5b0PoNIpW6zFpjejIcVwxXWE8%2BUlyy185wlv3USxgyYXp5WN5eCXTEXI64oVdW%2BsUeMSeCqBCkRUYChRTu5SnYGDIG2Bn5qCrW6SiAlNGGrULR%2BgsnKAvpUn8kmxf%2Bjg5SEHvJuVehK1uL1YGUa2tUQS5x0roG7OIob4utDruQ5ITMiYy7U1t2HcYMKjX8b0GOqUB3R%2Bh%2BqH1ihog%2Bk7uwRoM9ukUkih2roU5Y9j2nayBgnTfAs%2Bh0%2FbdneaXA4adVvPFmnWPd4reFQUdBsxcwGrBO64640SvNhUgHBIdWxxc9dkFnkY7gTTUl9u5iYjlmRq0Ctw7QC8LXEzeL4dOi7uJmH8ovn7s%2B3muE2rdIdui2CiVACQWQd2huaykgyZJbXbZ1%2BM3qR7Noz3494xjyPokEjzZhGGO&X-Amz-Signature=751ed481685a77fe7804fc4200df82cc6a3833a0da35b698fdd77f3c3c419e67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXCVBUPR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcBFNJYClGySCrR0Cj2s%2FhNev7%2BAZy8iTJ%2BEAhVnw1jAiEAvmv2tAzK1f1CGcbY%2BWhiTi%2FDV905O8vHygpM50gTtXgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDObJcZGMyuAgReAi5CrcA%2Bi1uuwBvBLjvEy45SgCqmMlrIk6%2Fqe8ndpzOy2VtAVGppEuPkW1CEcv%2BjSY%2BNnTHGp56s7AbZyauoAv4xiu%2FL52ctBcADe0fnV3Xiv%2Br7Rtg%2FLEhqyNyEtgwXTk5L3KBCh50IoSq0%2ByNVsLqoISszClhFCEIljVIcEXdMIPBvtHvZ0S33azPAOPLpDs4rq6VYynS68kOPLJctzU7x4dsFzrSj0HAxWZXs%2B%2BBJcGjo0338UsI0trEQMQcS6OnnnuU7JxRrfeXEg4YijABmkfzKd2TmCUtyksqCMrFjVnpwy3wSSx1N%2FtHpQcD9MNd5yLkQHlK4CFwT6inBvqTngZJGAsTxLNSMXSnS0gYJMiN0sE2Do9FwcO4Xfw%2BhyzMWe05FXNOAZV3zLHoLx%2B6OpgT6rpCOi1tLv8Egy9mEGalN4huN6krZzTBO4jDIjlk5r1T37WiVf1q8ciMSc9SP6wH515bJ4gnXWyuy6ur3lr%2B2LOSjjy9PBOfKFjyzP6bRhCd8nL1RIc7%2FlsKpPu8WLfLaMSAxAtuAYEOylbnkli5J1qn0ua4I5A54PB5Q901swCxmwZGNyUeUcDT5aX15EMar9kUKk2%2FL4dRNr0E859QlA2jpNWFwfDWNfE1VujMPrW8b0GOqUB330qpNy%2FMEPoccLDbn%2FtwsBvZ79X5HFxLU8eyWrE%2F0cvF3rp36%2BNW1%2F0%2FtIR%2BZwNH%2FX5Ueu2jMhlOXmTflhngoLfW6C9kPrSs%2BL2lbKuCJsI6ribj%2FtnbcxfKcVHconrSF%2Fk1ZlVI4GfPIztw8%2FcB4QJOiu3DKXBiEZ19%2By5wBYK42qQUEXcTs5ww0hG%2B0d%2B39NxHS1kmBfRHAnFE%2FEcumfJxenw&X-Amz-Signature=ff4696ddb89c4b14670be60fb34cebef979c49fce8d18a76d3e4b98cba78f979&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GXOFEV5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAs%2BKSbFlTcI%2FWxiSc8gIlr4J24iWF4vaeDxxRx7VRRAiBwwZarmg3M1dEOYXvhe2norJJNVQaSsTyPdQdXyOeEFCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMqvEc%2BMYD2IsbFIzAKtwD2V8lyvcL1bJvue9G3TKQOs%2B9AY41OaWcx5JBohx%2FNnT2bqCc1aDh%2BIgPgJs%2BllpjcROeB6YcC3JQMX0Tv7ZB9fM1drfz1RWNWNxJ%2Bmz7qKXSYJ%2B9chvw%2BlXQ29%2F56wLFIngL9GGnDcBlOK8WX%2Fw14F7VjZOpvgXLFa3oBWKzQzV%2F1X%2BS6CrRVyJKKeZ5NJREll2UPMyM2UJvMq7Bk1hEcvDEGyE09Ae7HdgOTMiLufu1o%2FJiNG5G%2Fb%2BchQCsOubyPC3lQQLS6OLwklFOpVVH%2FNE7rjx6S9orWDI8ZfW2p44HuZNkftaExRfGjZPDSgDtSffu151OFJxsvzj%2BSivnscDNIf7fGUp7lgy9%2B5Hgxr%2BqOR0aE3%2FLbX5sCBMGnm%2B2QH%2FT3fkzl%2BgtK3GVUArXu63v14kWLvOPvyHRW8CRKlv7TxRaVIynKu%2FaQIpBDp3%2BhQPRAQTiQHfx8HPfXLdDfe7YHZ6bCQ0lBAK%2BE8IVspSurVRQwB7iuq1PrpgSPeojEjO9lGXdkZpWpHKBBZHW84lsl8Rd4HFQ%2F5qQD%2FFWMMrsfPvcB%2BHMYdGY9Z2mx0FFEQcfA6Fkkx3mwVkTF6a1RussIOv7lJxIr9lmA7DcfQ%2FOWNhK1a0jByKdYw4w4dbxvQY6pgGr4cIy2g3vf3ArC8t7J7VhoUnbOdRnbuZWkGC3uxtE5Dm7nNkB612pRftDmGZ2qK9em%2BZ%2FxuvmGYgGpLSoHYEXuHBSB0opAe5C2VLw%2FXNO8WBxTs4s%2BroJ13ASM%2B16q4K0a2zqRONVjOEO1XltjzwzqygkbYYTOEKPC0Py3F5Ob7zTbDDMd%2FHtCIkwA1gQKwyHFjGXrTlHNYJU37oRljHcnM6Wa%2Fn3&X-Amz-Signature=57a1279260f883b6bdb8d870f4b3a5153e3cd61f3ca550468aad36ba20c71e35&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
