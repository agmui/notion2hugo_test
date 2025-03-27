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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654IJHLPL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd1gVcZn4ocsMKaOShwTFVfTM9XoejfsuGyP9Y13hwbAIgEZl08UYWcKfdIYGsoAvZ18%2FkMADkcG6HFdlEYfXexSsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDI9A2S7t4E8X6d719SrcA3Ji19Twu6MZOGsNqen5uA%2BN%2BwThlox3upQn65AyqgHLGaTKm%2FWtisOfeXpYjUihMd3mEwjWoQMzPCFDkVWuvjCA%2Fpxvp0rJGaXbqouOoUlbNZjT0PlxklbFPRm01hcExKNanNQi7hHC1cfuHf5c2xFeCJeDz%2BsILm45AYfiHP6eFRNT5Af9QNpDpNraq8CC9D24A6Wn02Z8I6xwTp1ARrKUmVoq%2FhPnl4GA1djbVh2Uw4TU%2FdTgCDq8ddPulvOayHcYgRiyEpd3dcozJL7zt9s%2Bxd77gz346e1zn6jx0ad2%2B1TrvavBq2nAVCka9o%2Fho28xKve9yHAj1jNrD5AspPvl0GNM8uDbL4NErIjePjFrrIXglPQqW%2BfA%2BLVkrzzYFLC0L6AOO4rE7l%2FZnM%2FbxytbJD5R%2BAHKRLeapvWcxl%2F4dwpHzobA1R122LPnNOx5iVrtALW9FE1De8DKzM2BIqW9Z6SX555ss5o9IFZn8rO8bQwmBryk3Vij2N4Ah1hF7cXPj0QRh83MTc%2F%2Fdgyo6xIYfYGoA2%2Be3QI8IQDdM3N4SPxaEw1O%2FOEiYtfBkYIVW7AMtqxwMpRbchAAZV5sorK3wbS04yM8WA%2BQhz53cMYbn%2F6RGLZsZb34wCzMMJTNlb8GOqUBPxXQ7QZoK%2BEsu23gFhmEYV0YT2agjbeU3SWMrxAThfSuOc0ifsFHhLt3AmDj6UIXQEhEhapG6tV9dKM%2BfHTcMLulrTt67Uw3GX0BfJP18WtbCHxcKeslgVMqdVJPasUnwlAa9iggcmvVa2phWoDEr2J%2B%2BxoPbdv8DMfT8VFLkZMvPvmbcJWmuL7ee23ZmmhcydTXwpgTrpgPOWmSxUSUhqYWLTu0&X-Amz-Signature=61ec9db9ea24909a925723b3cb6d6b8498f41b5e131d5f42ffc7736c29ceabcc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654IJHLPL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd1gVcZn4ocsMKaOShwTFVfTM9XoejfsuGyP9Y13hwbAIgEZl08UYWcKfdIYGsoAvZ18%2FkMADkcG6HFdlEYfXexSsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDI9A2S7t4E8X6d719SrcA3Ji19Twu6MZOGsNqen5uA%2BN%2BwThlox3upQn65AyqgHLGaTKm%2FWtisOfeXpYjUihMd3mEwjWoQMzPCFDkVWuvjCA%2Fpxvp0rJGaXbqouOoUlbNZjT0PlxklbFPRm01hcExKNanNQi7hHC1cfuHf5c2xFeCJeDz%2BsILm45AYfiHP6eFRNT5Af9QNpDpNraq8CC9D24A6Wn02Z8I6xwTp1ARrKUmVoq%2FhPnl4GA1djbVh2Uw4TU%2FdTgCDq8ddPulvOayHcYgRiyEpd3dcozJL7zt9s%2Bxd77gz346e1zn6jx0ad2%2B1TrvavBq2nAVCka9o%2Fho28xKve9yHAj1jNrD5AspPvl0GNM8uDbL4NErIjePjFrrIXglPQqW%2BfA%2BLVkrzzYFLC0L6AOO4rE7l%2FZnM%2FbxytbJD5R%2BAHKRLeapvWcxl%2F4dwpHzobA1R122LPnNOx5iVrtALW9FE1De8DKzM2BIqW9Z6SX555ss5o9IFZn8rO8bQwmBryk3Vij2N4Ah1hF7cXPj0QRh83MTc%2F%2Fdgyo6xIYfYGoA2%2Be3QI8IQDdM3N4SPxaEw1O%2FOEiYtfBkYIVW7AMtqxwMpRbchAAZV5sorK3wbS04yM8WA%2BQhz53cMYbn%2F6RGLZsZb34wCzMMJTNlb8GOqUBPxXQ7QZoK%2BEsu23gFhmEYV0YT2agjbeU3SWMrxAThfSuOc0ifsFHhLt3AmDj6UIXQEhEhapG6tV9dKM%2BfHTcMLulrTt67Uw3GX0BfJP18WtbCHxcKeslgVMqdVJPasUnwlAa9iggcmvVa2phWoDEr2J%2B%2BxoPbdv8DMfT8VFLkZMvPvmbcJWmuL7ee23ZmmhcydTXwpgTrpgPOWmSxUSUhqYWLTu0&X-Amz-Signature=9621e8a282a04fa2c0b27f72bd397b3119f058fb35a4373c1df92b08a6f9d6c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4NRT6N%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyL2P%2F8d90WbL7CB60DYgBuN05Fni85Acu7hICK89F4AiEA8uhcC%2BQImZ9wMmuvogQ7rXD0EkjFxZGucayQ4Gbe%2B5Qq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNOx5rOdhXORcEoCCSrcA85dUvdRpvyH%2ByM2T4b2IS%2BmS16m%2B33DebZXRpD0ZoGVG0EWio5epG9OGlAElpfYDwKuV9zd1jl6qogCvOtMHy1Bd7T5Z1QAVS1S2rTD%2BoJ1HX7NBbdtN8cyRCw%2Bqv2xlM6%2Be%2Fx99dGr%2BgKoeD7%2BIWBAnUET%2F9hrwEyWWKqHUesbhMdM2QM4YbsOAJEtMbVz7FB4dCJnLU57VSatiHCHkzz8D8OlpbURtHEQUEY%2FbUKs8t%2F4x8XHBm%2BJgQTjgOq9szeVeEdtlMSYv%2Babo0QafeV8W3yUKUaRkanmam517150H1SlLKoUtGM8AELtWGM0SaFlZBLmOw52oXRhm648wpmw%2BXVl1LWpv6xsp0dJoWt3k2azRCpLYdLBSEGo07WRyJukxKB2bcjdo59m1sUs4NvgbkxMwUz9JfxOA3S4Q3bucVMUx8uNoMtN15xYcoCPK%2F4TxNe34%2BKRIiZPMRetq7oNSxf5vJEjFg12jygOcIVmA1sJiU1yg4JMJLCy%2FXrc0HlwZobnV6rR9ILEEYey%2F9TElXaDBvyyM9raEDIUmjTDdEYMMuRtw86kz46gR1wuoelOLmC4Z89QAzKyWe6tvbOBWwyW3ddJULv5AlCJ0f46nSgQo2sRRJZqc4w%2BMPPMlb8GOqUBJwXQ1qgPGj5qrrln0w6HJvoRt3UD4YYMXNlQHQ7WfJOXuxySqTqEOoqqCLyJr9I5L%2Fl258eRgXPvFKL4CcXTxIViwqnnXFrq%2BbHVQIjjRf8TJwBVBo5U4Fhl7V5Jfi2ijdyY7LwxbepuegQQtNu8DUQYnmV8C3SzaN5u5KA8NIlQxV%2BspVjcPtDBthiilx2w3IatrQHFHefKw23bl9uyjCCdmbHy&X-Amz-Signature=66c24df3ffb533628ef959ca7ac37525ccb2f835a5261a98cbf890a32e54362e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIAIDBN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfoycu0j4BfHkAS2ZsTxj%2BUbYZqTG%2F%2B49k4NWVK51jaAiEA1YlH6rWkCaBmphs7YmGH2%2FxA5%2BWcwxTAviqGNTSKev0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOVUKsyFRxkCcBHpMSrcA76DXh3Cd08sj5%2B%2BQkWdB%2ByQMwwgVtjslw5BHfPvsDfg%2BS48wERNn3jadzKK%2BalhY%2BJPcd9A%2F2OrH096A5YgU6LPWLBhFfBiG2KD6bc5Mbb9RwGS9NpCugileNWH16yN53kRYkAf9XoYNE8WlUgkvQBEoMwpul6wRj01wZLRfvngCXYme3EvQPpDGbk%2FlWnXXls6UOJuroE1%2BlolJmdRLoe8jbawifjM4DkKP6dLTpJ4Qq%2FAOrf7J7%2FTiJ9mPWyiGfY5P7yKsqO8AsmxXGcR6cM2RhaLoisEHXsQhO4eVXijnCYZQAkBVRfKgMUgIEH3lkZudOJhZqVrESf%2FLLL8U9SioI4ADIt2%2FyzOU9I1h9OVHrtMXgyMkvlzr64Am1%2FcHlYu1YBqqAaxhpR3p6NdMdg0bGv0SiaFW9qPE7er08uqCMYtwj5i1TVbIkvj5wYWM2eTxMoMcdWKAmZRtDRHrugArQfSPt6QWNcNBfAn2M70upXbBJLaVIXK3yKLYRMIBvEXO0bAMG1d4IDhR7XlmRVRQ7FTUanbrI9AzRusro7ALW0zn4doKgdWZYvlYvraqmLrDLQyqlbuptYyLycdWLS6XSmeOKKFfavV%2FU%2FJu2yP1paW66VGQEB1C4%2BeMLLNlb8GOqUBYQDVUz11RP0u7PXwf8XeKSuxqbKPonN6MaRwJfripHYqWqT2QlQUl%2FzNwG5Dps6MKUOK800FAzvFIt%2BfFVQOAPMN8EXVIDspV9qLzY%2Fr4mAQwoUrgXyhwyWS4cQqP92UrQSgXktCbnHwXh2N0S7ZZYXFYmF1xsdUvbPCGgNkQzLUMC8J4cKLNPZf%2Ff6l4GkxNNIEblf78f3eXLOiyYINnYQlF%2F7L&X-Amz-Signature=16a254a26a6226b9be3eeba75734d3b768b61678a22f47125133b707659023a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654IJHLPL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd1gVcZn4ocsMKaOShwTFVfTM9XoejfsuGyP9Y13hwbAIgEZl08UYWcKfdIYGsoAvZ18%2FkMADkcG6HFdlEYfXexSsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDI9A2S7t4E8X6d719SrcA3Ji19Twu6MZOGsNqen5uA%2BN%2BwThlox3upQn65AyqgHLGaTKm%2FWtisOfeXpYjUihMd3mEwjWoQMzPCFDkVWuvjCA%2Fpxvp0rJGaXbqouOoUlbNZjT0PlxklbFPRm01hcExKNanNQi7hHC1cfuHf5c2xFeCJeDz%2BsILm45AYfiHP6eFRNT5Af9QNpDpNraq8CC9D24A6Wn02Z8I6xwTp1ARrKUmVoq%2FhPnl4GA1djbVh2Uw4TU%2FdTgCDq8ddPulvOayHcYgRiyEpd3dcozJL7zt9s%2Bxd77gz346e1zn6jx0ad2%2B1TrvavBq2nAVCka9o%2Fho28xKve9yHAj1jNrD5AspPvl0GNM8uDbL4NErIjePjFrrIXglPQqW%2BfA%2BLVkrzzYFLC0L6AOO4rE7l%2FZnM%2FbxytbJD5R%2BAHKRLeapvWcxl%2F4dwpHzobA1R122LPnNOx5iVrtALW9FE1De8DKzM2BIqW9Z6SX555ss5o9IFZn8rO8bQwmBryk3Vij2N4Ah1hF7cXPj0QRh83MTc%2F%2Fdgyo6xIYfYGoA2%2Be3QI8IQDdM3N4SPxaEw1O%2FOEiYtfBkYIVW7AMtqxwMpRbchAAZV5sorK3wbS04yM8WA%2BQhz53cMYbn%2F6RGLZsZb34wCzMMJTNlb8GOqUBPxXQ7QZoK%2BEsu23gFhmEYV0YT2agjbeU3SWMrxAThfSuOc0ifsFHhLt3AmDj6UIXQEhEhapG6tV9dKM%2BfHTcMLulrTt67Uw3GX0BfJP18WtbCHxcKeslgVMqdVJPasUnwlAa9iggcmvVa2phWoDEr2J%2B%2BxoPbdv8DMfT8VFLkZMvPvmbcJWmuL7ee23ZmmhcydTXwpgTrpgPOWmSxUSUhqYWLTu0&X-Amz-Signature=0447626d4fea02d24adf10438d71c9c2a141296a79bb7bb1a79d97855e2387f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
