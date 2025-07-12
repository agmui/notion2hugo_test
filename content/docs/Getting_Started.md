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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655RL76WT%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BcAAJ%2BP7rBRIbSQiIoISdj2TEzjqbn%2BiDQl0gfCCvcwIhAJA5ghWCqsaazF4WUzJD8jGCpHh6RW1uFMbsAGx7BrqQKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC%2F7S1JqG1aoe7iKoq3AOCQKmAWRr5hJD4IWhh6Q09pp1GSXXTvvRcslBrOMqsnfynO%2Bze7jPXXp4aRs1wnCN1D%2FXmoOHsgZlV4IZDrMZRiL0T%2Bu22pUPFpezbRQIq7RWtw5l%2BJliNUJ1DzI7NgK0F3C%2FTIISaTRddlGLg18XfUwhkA8EsB9GF9E63iVgHEcokmJE%2FzzRTCJrt7l2B4lNcMkO%2F8YxxcrU0r1crRMAFelN3%2Bj%2BsuFtlMAoDcbBsY9Ivn0IFvOSelFiN%2FaQ%2FbEGpEHfnHl6xmSWD4qHkLfEtbguMePFIwrwZLE2MuqnL%2FpupHHZhZ05rT7g3zT2i71ImitI2fnB%2BFBNfr7eK8KOslEwDWtOFcykgKxZMMXOirT4N9ZeRvFvRy9uc4LXcXJ2Z9NTjzznY1p7mX3euki%2F8iloUhExyBloW%2FGKvlT3Fit7QI7sX%2Bt2qS7Ybi%2ByGPpRTS2sqIrx%2BRzgwrF2%2BlXLSNdzEjt1tR%2FUw3HV9zm%2BeOsM%2FwR3nnI1LFmFVq%2Bsf5h0LUxU%2Bhp1M816GjrXtxFz6leCgbMDTsEs78OyfLnc%2FYsqt1%2FvHmJxEdvrZQ45Z2MofG5dY%2FTD47Df9NNNlwxjZ0Og%2FOGskW%2FCVO3K2QZgXvm%2Bby390fxhO0jgIATDUtcbDBjqkATuxixlKmccdECq8QLPp4SS7aLBe%2BwusiNdZz%2FZBtQoWjflvCAAFpUc4znVvH5XGIOWpEF53eAQqwx9R3pEPS5cZ5aqmW2e9PbT7TVAoeWCMy99HZg2qIxAuVnmSG6X33bbjZBt6b5UPWZIOSAfKPz7zsMefbNQKHL%2B5G3gIV1XsDKLKUfeiZ4c1V8FrBBLxso7AucVU8hHaa4TJUTAU1m2y6Zkc&X-Amz-Signature=4444f8c283edb58bdf93c82e9566f422dbf9c8da21f49d2d97c325dabeff08b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655RL76WT%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BcAAJ%2BP7rBRIbSQiIoISdj2TEzjqbn%2BiDQl0gfCCvcwIhAJA5ghWCqsaazF4WUzJD8jGCpHh6RW1uFMbsAGx7BrqQKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC%2F7S1JqG1aoe7iKoq3AOCQKmAWRr5hJD4IWhh6Q09pp1GSXXTvvRcslBrOMqsnfynO%2Bze7jPXXp4aRs1wnCN1D%2FXmoOHsgZlV4IZDrMZRiL0T%2Bu22pUPFpezbRQIq7RWtw5l%2BJliNUJ1DzI7NgK0F3C%2FTIISaTRddlGLg18XfUwhkA8EsB9GF9E63iVgHEcokmJE%2FzzRTCJrt7l2B4lNcMkO%2F8YxxcrU0r1crRMAFelN3%2Bj%2BsuFtlMAoDcbBsY9Ivn0IFvOSelFiN%2FaQ%2FbEGpEHfnHl6xmSWD4qHkLfEtbguMePFIwrwZLE2MuqnL%2FpupHHZhZ05rT7g3zT2i71ImitI2fnB%2BFBNfr7eK8KOslEwDWtOFcykgKxZMMXOirT4N9ZeRvFvRy9uc4LXcXJ2Z9NTjzznY1p7mX3euki%2F8iloUhExyBloW%2FGKvlT3Fit7QI7sX%2Bt2qS7Ybi%2ByGPpRTS2sqIrx%2BRzgwrF2%2BlXLSNdzEjt1tR%2FUw3HV9zm%2BeOsM%2FwR3nnI1LFmFVq%2Bsf5h0LUxU%2Bhp1M816GjrXtxFz6leCgbMDTsEs78OyfLnc%2FYsqt1%2FvHmJxEdvrZQ45Z2MofG5dY%2FTD47Df9NNNlwxjZ0Og%2FOGskW%2FCVO3K2QZgXvm%2Bby390fxhO0jgIATDUtcbDBjqkATuxixlKmccdECq8QLPp4SS7aLBe%2BwusiNdZz%2FZBtQoWjflvCAAFpUc4znVvH5XGIOWpEF53eAQqwx9R3pEPS5cZ5aqmW2e9PbT7TVAoeWCMy99HZg2qIxAuVnmSG6X33bbjZBt6b5UPWZIOSAfKPz7zsMefbNQKHL%2B5G3gIV1XsDKLKUfeiZ4c1V8FrBBLxso7AucVU8hHaa4TJUTAU1m2y6Zkc&X-Amz-Signature=ce43c1f7f78f2a8952df8d14c5b9224d2724940a5dcc0a5c4557edab3bbcef0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655RL76WT%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BcAAJ%2BP7rBRIbSQiIoISdj2TEzjqbn%2BiDQl0gfCCvcwIhAJA5ghWCqsaazF4WUzJD8jGCpHh6RW1uFMbsAGx7BrqQKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC%2F7S1JqG1aoe7iKoq3AOCQKmAWRr5hJD4IWhh6Q09pp1GSXXTvvRcslBrOMqsnfynO%2Bze7jPXXp4aRs1wnCN1D%2FXmoOHsgZlV4IZDrMZRiL0T%2Bu22pUPFpezbRQIq7RWtw5l%2BJliNUJ1DzI7NgK0F3C%2FTIISaTRddlGLg18XfUwhkA8EsB9GF9E63iVgHEcokmJE%2FzzRTCJrt7l2B4lNcMkO%2F8YxxcrU0r1crRMAFelN3%2Bj%2BsuFtlMAoDcbBsY9Ivn0IFvOSelFiN%2FaQ%2FbEGpEHfnHl6xmSWD4qHkLfEtbguMePFIwrwZLE2MuqnL%2FpupHHZhZ05rT7g3zT2i71ImitI2fnB%2BFBNfr7eK8KOslEwDWtOFcykgKxZMMXOirT4N9ZeRvFvRy9uc4LXcXJ2Z9NTjzznY1p7mX3euki%2F8iloUhExyBloW%2FGKvlT3Fit7QI7sX%2Bt2qS7Ybi%2ByGPpRTS2sqIrx%2BRzgwrF2%2BlXLSNdzEjt1tR%2FUw3HV9zm%2BeOsM%2FwR3nnI1LFmFVq%2Bsf5h0LUxU%2Bhp1M816GjrXtxFz6leCgbMDTsEs78OyfLnc%2FYsqt1%2FvHmJxEdvrZQ45Z2MofG5dY%2FTD47Df9NNNlwxjZ0Og%2FOGskW%2FCVO3K2QZgXvm%2Bby390fxhO0jgIATDUtcbDBjqkATuxixlKmccdECq8QLPp4SS7aLBe%2BwusiNdZz%2FZBtQoWjflvCAAFpUc4znVvH5XGIOWpEF53eAQqwx9R3pEPS5cZ5aqmW2e9PbT7TVAoeWCMy99HZg2qIxAuVnmSG6X33bbjZBt6b5UPWZIOSAfKPz7zsMefbNQKHL%2B5G3gIV1XsDKLKUfeiZ4c1V8FrBBLxso7AucVU8hHaa4TJUTAU1m2y6Zkc&X-Amz-Signature=31dbb12e7d1e163b9095102244b62162cd8c591cc9bb4ff2c9ed0c50017716fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGA57OOM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4T1WwE2Qu3aUUp2yb%2FbuKreQJfD6DgMxeroiI5%2FH5pgIgFMHeWx60BgouJ6Y2MuaU%2B5Ew2fV6Aj9YB%2Bl0tOae%2FegqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGl4%2FdicMV2UcpPjsCrcA11JQlcKgOEqRxA%2Fj3p4CBlZ4n%2FS88kaqP1yG9qf5cRo846q9mg9hYAd3OicdGoDznumyO6kLsP8qDaqqxr0zbjqOdMg0nCp5JZhS8dy0yJp%2BAwsukw92lS7kuB5V%2FJxrYQkVnwKSivtYxfe80wSww1evPPoBgEqOd7edUftQ9twd%2FO0XxbYpabArBqwTU4xCYB4mKuYWPfyKAwIh2GYORBNzWd5x8NedgHpnGVjQOvV2TCjht5LouLS8%2BzRGWnipxU6rk%2Bt8ZadXnIdW%2BtFbcOLwV0Ln4V9tFEFyOcyvi0S2x%2BI%2FcadegpABleCZS%2B8CidW7W9Ey6lvZPk8AnrOGvcqG9MuU9zb%2BsXH2StP0VM4mTZjkcSsmmQeLmwQscqWkm2%2B%2BGvSWunS6hnwCSIe4WTXSRVeTdWhlUzkGAzOlf6aVWdU5UuTA2DnWgs3fgA%2B39Mk1g81EUDC7RlFNWf0Xyx4S7hzSi7cnLiCMNpzumt0Q1v3WxO5bf0jL%2BxpMJQndxoYiMWaGPqcbmEKlqojCUQqLsTaFhvCTfy9dxeGuQwu4TGw0vfxg0vStMuGPH%2Fi3CsDtfUmqfmffdLZZW7mPXaLyhdnhEeeWnHuXbPXKs1aHux15S335e3RwS33MLe1xsMGOqUB0MTa9ptkX1eqLU%2FTPV6U43wKAW5XkKEJASHV%2FdN%2BRBPnYMTBoZhTPF39%2FSyw0mNYL1IoCsgc%2FZVB3%2B127pgnh%2F0mBqrgbF9nLxFX0XQpiuu1PyYw6rEISoISUzEx%2FSGFJvs6WW7MfuYPgrbm8P%2Bkk14OrQsopPlb8%2FFvrOSa756HwgE3WtFCTmlbb7IuOZqLrpUKULt5UG3psryEl%2FbSba0%2FrkSz&X-Amz-Signature=1a2efc9066e090a0f1e87b1f9f55ebdc8f6db14af489c604d32f73bcca008fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV56ZGF4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPbY7T8rdoxMagM1QfRrAKy%2F41o59Qv1YdknC3MAU9fQIgOWX%2BMS%2FtXVCi3PZ%2BIYrGehSp0Lh3tQ%2BEeMyZbdwO54sqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfwtrkMU4GVASdLWircAzMZuvLPsWaeaxK5PBgDKyYXwCA2MtZS6%2BHOnfAw3N0%2BTxdaIg2wrgpfkNmH2dP5ubDy%2F%2BsfJURFqmEzJ7mKrVartakazTHzN2PvDFkrXmQbiKdzInfzIIpC2NEMR3cMok%2Fzypa1HBI7S%2B260JHiO0a%2Fv2DfqUNcJ6y70YS5aq%2BodWcnhu5SN6o805lkaImty5TR8nUt2cro73D7tjeS8C4ksYruf8n3wScr8RwjoezIkCaKgdO3qHzevpi7I5mRtj06fhvyq13u8x58pUm%2FSj2K2foa9D0uyR4URtEZuzEiq%2F22EnzM%2FpaL49lw%2FC40bMezHkhDgBgHypIFRilEGTzkZwxiXd9IxzDPjQY2snfa%2Bplnjfd8WKih78xBywKjRUj3ksNwneYJS25vt%2F%2F3owFJIHqaYzFCwjUMl9ZxTHeu7rF2IqXyHHZNynmUTMF3hzPinWy816wfXiJl92uK422MhewAIAlKLoi3b0KbrCShU0zeHbLKpN0bLia8phQtvoxahk6MG9PMX1aUIu%2BBRRn31ZiPcrcEVc2y4%2BHz9dJ6fu%2B6nwU73FU6PVjiLC%2BrCW4a7%2BURJGZE4F97a3uSpUuSAPEbrBRjdmozBrlQt%2FE1qawpxL6W7VO6qz1TMPG0xsMGOqUBtw63P%2BZJgYE8m%2FULKbT2GA43PExFgXNFI4bAoD%2Fo1delytCJ7eMroe9SgnizXqjvx9H0IhY6x4upW85cqkdXhi%2FIYgeVaZkBM9wCaE7vf1PbhfPuVSzJWjEFz8m9rL3ay4p5JQ5PdTxSsPn73ZlQ1XzwE65qlX659mvTKRxnQVCzsnr%2BK%2Fw0j2rciFZHnDr0Vx6VdAflcEkZUJLs5%2FqMNH89Nft1&X-Amz-Signature=e176ba70449c2749752f8acf2d93b9211e60ba42bfe5f06151626b0d3fd534b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655RL76WT%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BcAAJ%2BP7rBRIbSQiIoISdj2TEzjqbn%2BiDQl0gfCCvcwIhAJA5ghWCqsaazF4WUzJD8jGCpHh6RW1uFMbsAGx7BrqQKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC%2F7S1JqG1aoe7iKoq3AOCQKmAWRr5hJD4IWhh6Q09pp1GSXXTvvRcslBrOMqsnfynO%2Bze7jPXXp4aRs1wnCN1D%2FXmoOHsgZlV4IZDrMZRiL0T%2Bu22pUPFpezbRQIq7RWtw5l%2BJliNUJ1DzI7NgK0F3C%2FTIISaTRddlGLg18XfUwhkA8EsB9GF9E63iVgHEcokmJE%2FzzRTCJrt7l2B4lNcMkO%2F8YxxcrU0r1crRMAFelN3%2Bj%2BsuFtlMAoDcbBsY9Ivn0IFvOSelFiN%2FaQ%2FbEGpEHfnHl6xmSWD4qHkLfEtbguMePFIwrwZLE2MuqnL%2FpupHHZhZ05rT7g3zT2i71ImitI2fnB%2BFBNfr7eK8KOslEwDWtOFcykgKxZMMXOirT4N9ZeRvFvRy9uc4LXcXJ2Z9NTjzznY1p7mX3euki%2F8iloUhExyBloW%2FGKvlT3Fit7QI7sX%2Bt2qS7Ybi%2ByGPpRTS2sqIrx%2BRzgwrF2%2BlXLSNdzEjt1tR%2FUw3HV9zm%2BeOsM%2FwR3nnI1LFmFVq%2Bsf5h0LUxU%2Bhp1M816GjrXtxFz6leCgbMDTsEs78OyfLnc%2FYsqt1%2FvHmJxEdvrZQ45Z2MofG5dY%2FTD47Df9NNNlwxjZ0Og%2FOGskW%2FCVO3K2QZgXvm%2Bby390fxhO0jgIATDUtcbDBjqkATuxixlKmccdECq8QLPp4SS7aLBe%2BwusiNdZz%2FZBtQoWjflvCAAFpUc4znVvH5XGIOWpEF53eAQqwx9R3pEPS5cZ5aqmW2e9PbT7TVAoeWCMy99HZg2qIxAuVnmSG6X33bbjZBt6b5UPWZIOSAfKPz7zsMefbNQKHL%2B5G3gIV1XsDKLKUfeiZ4c1V8FrBBLxso7AucVU8hHaa4TJUTAU1m2y6Zkc&X-Amz-Signature=8dae04c0771b28bb80c5514ae6521e9eaab58853a3849d7a93d6241d35eba397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
