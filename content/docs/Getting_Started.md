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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SCFKNQ5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPkknIvynqIifDsrotpePNw%2FfDlda%2FcGI7ravZoGyxtgIgNsyspPMsO7tpIyC5n%2BckuxXyM5AAc%2F1MjsJD6q79MEcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHaLpJGryHa67LXlyrcA0MdzMoGmrBr1DskL2WrRQAgmUb%2BcpRPF2gHwzNpBNq4HOsrhKs2npZ%2FybUNIRHkgKNGYNggs5XpCzDzgCenvSVN7aXhrTeqAYyGmpnVz4wmUI9Ycsm%2Fepqii6I%2B5lKawAHqPQbLL8QFe%2F2QRRvxDIFq6HnhKldxHflRXMXQwlmWGb2ZHYLy9J9umD%2FTB8t8fMZURYFUErBjymrLd%2FcvU7r2WpyWMSnnurb4rluOQQqgwtSYpMLUAqZTdsrelo4MaRavghoJNzEjUsD%2B4WzsXv%2BBbkzmQwmNWZKz%2FkkVgr7%2BI32gVa%2BrH7GChHLHsvCvL1j5TZQ1SnWmsd%2FzctZshGOcA3In9WMJ2CmlEa6kzdWTuks%2BsVXf9sDKluWYmheZGVeZTV7gjWPhc8B5mzVhWHJ%2BFuCLGVrEwQXyCl5pzJBQijKrXnCf4o0p15BbHcaVLZyBaszzj9yNELOwu22sAsl9MVHGo841ZetaFMWxlaaxVHuedQI8pkU1Ui6VL3nWuebEqZQC2OEZDCoZzuJyjkSsf56ZUO3w%2Bt51IpSRFYKXpSJ1R7aIyM7kMvtHiMjwfPyMxUTd%2BhgJZ%2FHbbu370uDxOHMW5E2BhBUi%2BB449hGrJ6Sf1PRRpFujxG%2FDMMmDo8IGOqUB5pRDvcNIgVyeSB%2BIs2Ds9JGfxz4KrNk6QUzWFl%2FDheXz0srN4%2Bg7S%2BZ5eBjCPGCeA8tfwCqCcu6djnGsS%2FqdLgHhk5e7JegKBG9bGVp7FDTXViVOqvAM%2BplB8AovOSAe9oHAzARQeg9THyuV9dBQG4DGCnvkxK2mQQGICZQxyusM8KCdjWzaBvt%2F8n4ILZ2zsP14%2FV24guooMfPrYKvOwAnC%2FnrJ&X-Amz-Signature=99947611b81401b8bd3ce6f5568fc4cd051ab438c1354b2e53308d2c9559a796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SCFKNQ5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPkknIvynqIifDsrotpePNw%2FfDlda%2FcGI7ravZoGyxtgIgNsyspPMsO7tpIyC5n%2BckuxXyM5AAc%2F1MjsJD6q79MEcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHaLpJGryHa67LXlyrcA0MdzMoGmrBr1DskL2WrRQAgmUb%2BcpRPF2gHwzNpBNq4HOsrhKs2npZ%2FybUNIRHkgKNGYNggs5XpCzDzgCenvSVN7aXhrTeqAYyGmpnVz4wmUI9Ycsm%2Fepqii6I%2B5lKawAHqPQbLL8QFe%2F2QRRvxDIFq6HnhKldxHflRXMXQwlmWGb2ZHYLy9J9umD%2FTB8t8fMZURYFUErBjymrLd%2FcvU7r2WpyWMSnnurb4rluOQQqgwtSYpMLUAqZTdsrelo4MaRavghoJNzEjUsD%2B4WzsXv%2BBbkzmQwmNWZKz%2FkkVgr7%2BI32gVa%2BrH7GChHLHsvCvL1j5TZQ1SnWmsd%2FzctZshGOcA3In9WMJ2CmlEa6kzdWTuks%2BsVXf9sDKluWYmheZGVeZTV7gjWPhc8B5mzVhWHJ%2BFuCLGVrEwQXyCl5pzJBQijKrXnCf4o0p15BbHcaVLZyBaszzj9yNELOwu22sAsl9MVHGo841ZetaFMWxlaaxVHuedQI8pkU1Ui6VL3nWuebEqZQC2OEZDCoZzuJyjkSsf56ZUO3w%2Bt51IpSRFYKXpSJ1R7aIyM7kMvtHiMjwfPyMxUTd%2BhgJZ%2FHbbu370uDxOHMW5E2BhBUi%2BB449hGrJ6Sf1PRRpFujxG%2FDMMmDo8IGOqUB5pRDvcNIgVyeSB%2BIs2Ds9JGfxz4KrNk6QUzWFl%2FDheXz0srN4%2Bg7S%2BZ5eBjCPGCeA8tfwCqCcu6djnGsS%2FqdLgHhk5e7JegKBG9bGVp7FDTXViVOqvAM%2BplB8AovOSAe9oHAzARQeg9THyuV9dBQG4DGCnvkxK2mQQGICZQxyusM8KCdjWzaBvt%2F8n4ILZ2zsP14%2FV24guooMfPrYKvOwAnC%2FnrJ&X-Amz-Signature=59886a074afbd171844bc9231e5be3e12fed0b5051158dc5bbf309b9e5d4b8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SCFKNQ5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPkknIvynqIifDsrotpePNw%2FfDlda%2FcGI7ravZoGyxtgIgNsyspPMsO7tpIyC5n%2BckuxXyM5AAc%2F1MjsJD6q79MEcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHaLpJGryHa67LXlyrcA0MdzMoGmrBr1DskL2WrRQAgmUb%2BcpRPF2gHwzNpBNq4HOsrhKs2npZ%2FybUNIRHkgKNGYNggs5XpCzDzgCenvSVN7aXhrTeqAYyGmpnVz4wmUI9Ycsm%2Fepqii6I%2B5lKawAHqPQbLL8QFe%2F2QRRvxDIFq6HnhKldxHflRXMXQwlmWGb2ZHYLy9J9umD%2FTB8t8fMZURYFUErBjymrLd%2FcvU7r2WpyWMSnnurb4rluOQQqgwtSYpMLUAqZTdsrelo4MaRavghoJNzEjUsD%2B4WzsXv%2BBbkzmQwmNWZKz%2FkkVgr7%2BI32gVa%2BrH7GChHLHsvCvL1j5TZQ1SnWmsd%2FzctZshGOcA3In9WMJ2CmlEa6kzdWTuks%2BsVXf9sDKluWYmheZGVeZTV7gjWPhc8B5mzVhWHJ%2BFuCLGVrEwQXyCl5pzJBQijKrXnCf4o0p15BbHcaVLZyBaszzj9yNELOwu22sAsl9MVHGo841ZetaFMWxlaaxVHuedQI8pkU1Ui6VL3nWuebEqZQC2OEZDCoZzuJyjkSsf56ZUO3w%2Bt51IpSRFYKXpSJ1R7aIyM7kMvtHiMjwfPyMxUTd%2BhgJZ%2FHbbu370uDxOHMW5E2BhBUi%2BB449hGrJ6Sf1PRRpFujxG%2FDMMmDo8IGOqUB5pRDvcNIgVyeSB%2BIs2Ds9JGfxz4KrNk6QUzWFl%2FDheXz0srN4%2Bg7S%2BZ5eBjCPGCeA8tfwCqCcu6djnGsS%2FqdLgHhk5e7JegKBG9bGVp7FDTXViVOqvAM%2BplB8AovOSAe9oHAzARQeg9THyuV9dBQG4DGCnvkxK2mQQGICZQxyusM8KCdjWzaBvt%2F8n4ILZ2zsP14%2FV24guooMfPrYKvOwAnC%2FnrJ&X-Amz-Signature=63d62d38e7402eae930f7c6bc14ce1e9cc6c39ad1cbb4b9e0aff338efef4bc9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAN4GE5P%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsimqhTrd32eQ%2BuZH%2BqL39NPE3n5ll93YaxU5xMStjzAIhAPPf1yV5U6IfVRVBw2H65ByIPpIQs0w1e2jLqDCR8865KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2%2FzwGlimYxiA3UJAq3AP2Su5oJQhEasEJFCP1Wbkn40mnu6pfEcZpNzTwafUxZI4TKeqVMrO1A6cD5%2F2abry75wjSHz5%2FHz4f%2Fra7p0S3tK7fWOF%2BxiSvydVodhJ89ohvCM%2B5k3ovPCa0sCd81FZuLjO%2Bhx%2B%2Fv%2FOmM5i5jCbrAmffSkX1m%2BSFZeSgTrcgQJ546APK%2F8%2B6NnfgYmlcBqCE5Us8Et1mAnQUc9SktKkF9vIZ6ZRNapjnabI%2FP4l02hPlOT5PA4WMoScSe%2BURuEFS%2FVfgri25V4dIwMcH6tzl9jJ0gxP0LDyM4%2B%2FmiUK4szAdUbdidARCkLiPJ1NcpenmVBKtmT6cLfWRCQp7YubvvFnL1gPXhhajsCUAFMS4JCCwwM2jSEd9Xyw9gMAihtDQGQsFN8E9g%2FshefSMyeVtZJgllIyNA2oIUDpXm%2BpDle9gXK4wLlHaEdfyCcJx2Cswjk6kLLv9B261GDv0wB0zpeDI6qIFq6vWR1z%2BDvUc5hdYoM15%2BqV3G7dG2JjnjJS0PHneUL7ZrHRpsknzfVMZtSyfhV1sQygnbgqG%2BQwxvgim3s5dkqZj6q0HMONl8ab7TQPVWQ0k%2B9HC0TCgBN%2BpUV97BZK980jOM1ItW8KD%2BAG%2B6fpkwRUzPJLf4jCP5aLCBjqkAYRwCGoBN9v%2F71iLCEtc74KXOU%2F5iImrXL1DjqkHkuEn3t6uIa2TgKcz2q8HKc1B2GjRHrJjC62nGZ6rWha1640Jy%2BT615G5M5RKp08E5mw%2FY9jgCnDFoisgLLZqOmKkKOa86tkQvw5%2FOG%2B72Vy7%2FpDA12M6GEA5M0zHRW6p1H42%2BvhkoyyGXGyGkd55f%2Fzr6cgerwPDEiXnQGMOnZqW%2Fsz61zLl&X-Amz-Signature=306407312b1ccc63c45eb4d915cadebe2ac59261e52978a12511a1fbc33c9898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7Z45XO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgWlqUSiBL73JrRJSr3OVXLF6%2BvXEE6HA1wd%2BgbisHmAIhAL3FpjytPT%2FNCE4i4ARvnr4s126UStKlfioj%2FreWOrZDKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCdTBjQYff9ZYP%2F%2B0q3AOpz77FZZHA67G0SaDp%2FmjLDy%2F7BJz9iaRV6BIXDmOjIvWcOWU8QIf1M40seEsrw%2F5QLo3hKnKf%2BbKVaVCy%2Fv7BWM8w53RuFn1S%2BwYDTNLGs5yhuzOf0fY445JFN6nWEAFsUYihy9Hm3aPqNhkivF090bHpS40DylW3jpqdUQKiM%2BxiL6s%2FxVbwV4WuPV94z7MebW1YoobPR%2FHTR7%2BXaV%2FMK%2BLZ6sPtYdCeO2FLWu0msZqQqTMtcp5IIEeHtA6Mn1%2FqTL8jPhMU9NVR6lEL5vSfWTarw7Rg4e7TH%2F0f7ju4ZjNuTjDpX8Gx%2B6weIqdFQTwLHQw6n5%2F2rq1g2B%2BUNzI6%2Bg8PWgQPlmkHJz0frQ8sdd4V6sTS1cJo0wGub0VJwiAWt1eGodK3LEU7%2BnJttZp5ToKNByEw%2BADLxbKrShbk9JZUKaUSh9yXtrcAS3ioH29lLI7o%2F41Kp02IJllzXnKCL4g3ECvRfpjRLUIOZKP7n%2FomuElLAd%2FL789uK49JdhO91WxhZXtzOYk%2BSxBck%2B99XaZo7jLIWgAp6or82HDBuZmt6wYlB8mlKL6P3mzQR6Tzld0PAB%2FzZ5iM2XOcSgLnKFesJxkM%2Br3Ohpc508OJw8ai0Egvvfq0pWw6ajCs5aLCBjqkARVc%2B%2BZcrC41Nz1L1%2BKjihcQsRZP%2FS%2BI%2B2y3md2h05cDQ3uuP4jJW%2BnR7M%2BpXGaUeMBQFLT524FvFzym57KWzT%2BKH5WlO3nLQzX0kLsHPdvygPzeOKBtCpA1Yh902qjJb2hHDwXHk0kMKw3EYOU7iUSWgefkvl0%2FUE%2FuCEBFL2R1mLdCrAI5bUwLxoAhs%2Bh5Dg%2B4cy5F0OJ8lPK%2BM%2FPWeP7Vthug&X-Amz-Signature=6961784b2be5216363481a46a4e8dbd3b37983b4705f8903609be2b1e091166b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SCFKNQ5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPkknIvynqIifDsrotpePNw%2FfDlda%2FcGI7ravZoGyxtgIgNsyspPMsO7tpIyC5n%2BckuxXyM5AAc%2F1MjsJD6q79MEcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHaLpJGryHa67LXlyrcA0MdzMoGmrBr1DskL2WrRQAgmUb%2BcpRPF2gHwzNpBNq4HOsrhKs2npZ%2FybUNIRHkgKNGYNggs5XpCzDzgCenvSVN7aXhrTeqAYyGmpnVz4wmUI9Ycsm%2Fepqii6I%2B5lKawAHqPQbLL8QFe%2F2QRRvxDIFq6HnhKldxHflRXMXQwlmWGb2ZHYLy9J9umD%2FTB8t8fMZURYFUErBjymrLd%2FcvU7r2WpyWMSnnurb4rluOQQqgwtSYpMLUAqZTdsrelo4MaRavghoJNzEjUsD%2B4WzsXv%2BBbkzmQwmNWZKz%2FkkVgr7%2BI32gVa%2BrH7GChHLHsvCvL1j5TZQ1SnWmsd%2FzctZshGOcA3In9WMJ2CmlEa6kzdWTuks%2BsVXf9sDKluWYmheZGVeZTV7gjWPhc8B5mzVhWHJ%2BFuCLGVrEwQXyCl5pzJBQijKrXnCf4o0p15BbHcaVLZyBaszzj9yNELOwu22sAsl9MVHGo841ZetaFMWxlaaxVHuedQI8pkU1Ui6VL3nWuebEqZQC2OEZDCoZzuJyjkSsf56ZUO3w%2Bt51IpSRFYKXpSJ1R7aIyM7kMvtHiMjwfPyMxUTd%2BhgJZ%2FHbbu370uDxOHMW5E2BhBUi%2BB449hGrJ6Sf1PRRpFujxG%2FDMMmDo8IGOqUB5pRDvcNIgVyeSB%2BIs2Ds9JGfxz4KrNk6QUzWFl%2FDheXz0srN4%2Bg7S%2BZ5eBjCPGCeA8tfwCqCcu6djnGsS%2FqdLgHhk5e7JegKBG9bGVp7FDTXViVOqvAM%2BplB8AovOSAe9oHAzARQeg9THyuV9dBQG4DGCnvkxK2mQQGICZQxyusM8KCdjWzaBvt%2F8n4ILZ2zsP14%2FV24guooMfPrYKvOwAnC%2FnrJ&X-Amz-Signature=0b968e64a4a4eb8818340eee8d394483c90e72e8ebe5100469b672959ed1aca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
