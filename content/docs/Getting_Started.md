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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TTBO7PX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCXJYqP%2BOQaWHFfnkXC06XMdIw%2FvlwytDcYWbOLQ7WxTgIgKYWOdgEacWVD%2B5RHU%2BGXpgF2agaJLtXvgaDhmYbmeCMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOljRusM%2BaK%2BXyVtsCrcA1CYv06W%2F0ZInB2GNH7iMbdb530XCh4NPMRLWcMleoCEfByaMH9rYchX8qO9UWDFRtmhJ8CatiPEN68aaDyHVpWIwXN3M00KJR8tkKv07iguxMfulyJmFM630eIpe6gi1dTNjHoWP%2BhKAJteibDFFDKQyXAD4kZY7ADt7BnPOnkgTZuDmreDXp6QWLurcOo8pmnHFtg8E9XtDk86w2w8ugTfUubBKYC4KV5zaoyi45HlpwdMIJcSSc7irXDtod0tlPAsY98e844v6TT05UwqokjLdnUdTn1EHy9vPRmh1Qi5ZQvcWjzr6Uy%2FJkaQ7JRmuzo9ylICE%2F1cGljDHPVMvQ63g9%2FM90V5rwiCvENFoFDpse5eBbaXx2SMMMutRG7fL5kYTrGGJxOuAWGAYGp8BLM6TjwFSaYBgQY4Oyp2uuqmf3fOqqZkDVVdxIxtUF3ho%2BuJljv1GFKLAk0WX20S9WN5vXh9U93PbXjjFgXcEm7OPgiwaufSLr%2FmN9Laz8E1ggnnPfRkp6f6w4xMIcl4mRf03HgUC7hCCqzffVpRraOWqlPMC2UV8Kt4gpPXYnUJWN4OIAt7Io0Tc8ePKC0zbdBj5lrBM0bBG7MDrB9q0%2BD0JZ6ng5btQBqRF8FxMLK93r8GOqUBc2jO%2BO6kHq1FVvVTg0FHjDY7%2Fj0tHIzpgwu62nri%2FfVCH%2BKX%2BQi1tusPsRd7L0EhBI6QX4zmu%2FJL24r%2FTzxczycW3LvvZkId2%2BGFTW9XZI12XugwtPLoNl4m2JC52OGrgGUHS%2BNaWOz%2BLo4fo3juW0yGyPUpDVdB%2Fyw7HFf5TRphy%2F8Jr9yW9eAEYVdMg8wkKer2OFxk81gubsyssHyqzkaGjTOs&X-Amz-Signature=3e4e7640c192b18ba0961e5f89644374cc7d07105a76a3226c599db60d7bbe10&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TTBO7PX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCXJYqP%2BOQaWHFfnkXC06XMdIw%2FvlwytDcYWbOLQ7WxTgIgKYWOdgEacWVD%2B5RHU%2BGXpgF2agaJLtXvgaDhmYbmeCMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOljRusM%2BaK%2BXyVtsCrcA1CYv06W%2F0ZInB2GNH7iMbdb530XCh4NPMRLWcMleoCEfByaMH9rYchX8qO9UWDFRtmhJ8CatiPEN68aaDyHVpWIwXN3M00KJR8tkKv07iguxMfulyJmFM630eIpe6gi1dTNjHoWP%2BhKAJteibDFFDKQyXAD4kZY7ADt7BnPOnkgTZuDmreDXp6QWLurcOo8pmnHFtg8E9XtDk86w2w8ugTfUubBKYC4KV5zaoyi45HlpwdMIJcSSc7irXDtod0tlPAsY98e844v6TT05UwqokjLdnUdTn1EHy9vPRmh1Qi5ZQvcWjzr6Uy%2FJkaQ7JRmuzo9ylICE%2F1cGljDHPVMvQ63g9%2FM90V5rwiCvENFoFDpse5eBbaXx2SMMMutRG7fL5kYTrGGJxOuAWGAYGp8BLM6TjwFSaYBgQY4Oyp2uuqmf3fOqqZkDVVdxIxtUF3ho%2BuJljv1GFKLAk0WX20S9WN5vXh9U93PbXjjFgXcEm7OPgiwaufSLr%2FmN9Laz8E1ggnnPfRkp6f6w4xMIcl4mRf03HgUC7hCCqzffVpRraOWqlPMC2UV8Kt4gpPXYnUJWN4OIAt7Io0Tc8ePKC0zbdBj5lrBM0bBG7MDrB9q0%2BD0JZ6ng5btQBqRF8FxMLK93r8GOqUBc2jO%2BO6kHq1FVvVTg0FHjDY7%2Fj0tHIzpgwu62nri%2FfVCH%2BKX%2BQi1tusPsRd7L0EhBI6QX4zmu%2FJL24r%2FTzxczycW3LvvZkId2%2BGFTW9XZI12XugwtPLoNl4m2JC52OGrgGUHS%2BNaWOz%2BLo4fo3juW0yGyPUpDVdB%2Fyw7HFf5TRphy%2F8Jr9yW9eAEYVdMg8wkKer2OFxk81gubsyssHyqzkaGjTOs&X-Amz-Signature=f809ac02b761d3a2cb48085e0fb1f76672911056e564f6521b7c3820ddfc9bec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJMNGMG3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDGwW09ogiKkWpeq%2FNiN294sYJbl9jd3wzrFs8kAJvbEgIgLgoWQdMPff7EIvJp%2B3HW%2FmN4LNdDOOXlkBhWQTSnCDAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU60%2FX0qCN9aNLH7CrcA%2FVOTNf7URpbgmBeD8N1RWyMIL%2B%2FBCDkRB6gw0qk0bJmiCVScOWxW9nyGHe2nBKF0wzdyZQHHpfURu6AkWcHWLtcQECG0v7%2Fr5A8U3xh6kzAm7HLMKlhnJ2MWZX%2F1LI5U8rnPG%2BzQQZtbZnuDa5cQaQ7xn5PQbWp7HcNQqElBPJHPFpW6J2n1g0WQ%2FsZazPjpvAJSj00LOnmdJ%2BopTDyO%2B9m%2BBrOlxh8NLl2pnTzK6ILG9dUziAtAwGgWOIofnsUo4UvvNNHGNuLn8jpvuyQlFwGC51oPhl8BFPb8HTAyKsRYR%2F15PbeQm1xXBtNO%2BL2JNPqmT%2BDhZMH%2BuOhTvHJ59cwuz2wanmcL6D2lREpqN1CKMvzlE7IIf8synHx%2B4BBKtMATFPZ%2FUTgSq4uska0xmv9Yt57nv%2BuBXaeR74WWdF%2FGFoGCGcHd442oaSMXami%2BAdNztbDzKhyxV%2FxQD4DVzyXPEUylKS8xyKCEKeStiozShhrAu3vnQa7y6%2FKE99LWG66Gzl3CCNfmmkgAI%2B12pF5mhzUlR5K%2BACnJ06ABqAiwjT2O%2BquqpNux7BUEy8Y%2BUTruxdFoAkBq1aFBRnn0Ncdc2eeeJm48%2B7bN%2FZsyNDL3biFZgj8l%2B8MFKjfMK293r8GOqUBVeveyDn82P%2BnajVB2sFOO3k1YdQwFUyBP44v3IR0ZaeK85NS0uxu44MLvMJV1GzjM6t7sPK%2B5xTd45xuNbbapqio5pH6Q6FeiJcGrP6bcvHBnd4IOL76Pg8%2Fo9WSh%2BFcJmUwb5lrkjIiiKo7pVTps5w1uZofUj5A1zbx6yzhBHLfHCsZlLeGKP5Os0jkMvcRAfJ%2BT06oLWFJID4akgXOCItf%2B6Yq&X-Amz-Signature=9ee272cf72e2f51e5622f0b02257e12ee4f7e6141da5179aed6adcff125a6c45&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDLNGHRO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFfXIdVSW1zbrGedJ9Qh0HwcRFBIEDPbetcuDixXM0j1AiBzZ9W3K3HjRCD7tF%2BRTGmsz%2Bh%2FdNEn1zFZEWJ4%2FYJyLyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcuQqci90pMmxNpZcKtwDvtLniHRw%2B0TVjL%2FAc1xJy6u%2FGjiYF5AAVIG0depX7iO6%2Fl9wTTmtvIIYAdSPO7pbMuFDUkCM%2BfJeiPqxKU4i6gmI8ofgmtKjBrwgPngnfNwsqwoweX2j%2Fu62KP2MsKeeiqtYelKdzPZBxnw%2Fj%2FoTNVDimHX42syLdQsJx0ajVKFAaoTy6%2Bwy3MMma0h4CuAHzYI%2FhnAvDbPiFvDpmk6nd2TsJMqM97a%2F2nvbMHo44wrUk89mZCjZ1P05bHjRMWPcZ9XCE1hgYRsxKflGJjvY4e%2B6vwSEx4velUZh79IV32milpEXp6gF55YGiYrMIeSSXPwvbFNGTioO7MQktZzlkcvKfxyKBhIF%2F2MZKtEyH8goN7EQOcqDOrqFX%2FPdcb20UZw708v9r1RWIHcPHPHAArLL7ysR2KorZgw9yTFx1LjQuyVM3P86T7%2FzN4enJKwNGlKcf9zqTaqQwfcRZA9T8DeDkp48rLZYcgLjSlxrcW6Ddb79Kftgd6rkUhtCeYk6App4tCQ6adyRSbCJzk1%2BexxIkqUhfxt3kZx2pvaWftSpiR%2FTpuaUco8ZEIjO7xG%2FUu2eK1l%2B2A3h3GwHY0Xajf1LQNs7HNFy0dQ%2FX1JcpKq8DuUYRstobJuqf6Ywvb3evwY6pgFREJu1wuk1BchviRTQxEDA7jREbWr785xeGUdIJ68jZ713wrm3kWM7msdzk2yJ%2BNRTckyXCiOSjmoHINO3a6ql53NK6ur2NWgIyEswThwBaXhPKQMSvzNpgB66QRO0tFoiCYFuYgBs2IhiDgDqwR%2BDteHblYaeTCAFxRgTw5Zpi0GHj%2BtgWjYGYEyA2omGwwsP6xUTLt9k5iJRYzz3vaCYWQNVDTPs&X-Amz-Signature=b15c68b4226233f6e016bf82b20c3997e32c74392e6d723b6737376e7f9dc4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TTBO7PX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCXJYqP%2BOQaWHFfnkXC06XMdIw%2FvlwytDcYWbOLQ7WxTgIgKYWOdgEacWVD%2B5RHU%2BGXpgF2agaJLtXvgaDhmYbmeCMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOljRusM%2BaK%2BXyVtsCrcA1CYv06W%2F0ZInB2GNH7iMbdb530XCh4NPMRLWcMleoCEfByaMH9rYchX8qO9UWDFRtmhJ8CatiPEN68aaDyHVpWIwXN3M00KJR8tkKv07iguxMfulyJmFM630eIpe6gi1dTNjHoWP%2BhKAJteibDFFDKQyXAD4kZY7ADt7BnPOnkgTZuDmreDXp6QWLurcOo8pmnHFtg8E9XtDk86w2w8ugTfUubBKYC4KV5zaoyi45HlpwdMIJcSSc7irXDtod0tlPAsY98e844v6TT05UwqokjLdnUdTn1EHy9vPRmh1Qi5ZQvcWjzr6Uy%2FJkaQ7JRmuzo9ylICE%2F1cGljDHPVMvQ63g9%2FM90V5rwiCvENFoFDpse5eBbaXx2SMMMutRG7fL5kYTrGGJxOuAWGAYGp8BLM6TjwFSaYBgQY4Oyp2uuqmf3fOqqZkDVVdxIxtUF3ho%2BuJljv1GFKLAk0WX20S9WN5vXh9U93PbXjjFgXcEm7OPgiwaufSLr%2FmN9Laz8E1ggnnPfRkp6f6w4xMIcl4mRf03HgUC7hCCqzffVpRraOWqlPMC2UV8Kt4gpPXYnUJWN4OIAt7Io0Tc8ePKC0zbdBj5lrBM0bBG7MDrB9q0%2BD0JZ6ng5btQBqRF8FxMLK93r8GOqUBc2jO%2BO6kHq1FVvVTg0FHjDY7%2Fj0tHIzpgwu62nri%2FfVCH%2BKX%2BQi1tusPsRd7L0EhBI6QX4zmu%2FJL24r%2FTzxczycW3LvvZkId2%2BGFTW9XZI12XugwtPLoNl4m2JC52OGrgGUHS%2BNaWOz%2BLo4fo3juW0yGyPUpDVdB%2Fyw7HFf5TRphy%2F8Jr9yW9eAEYVdMg8wkKer2OFxk81gubsyssHyqzkaGjTOs&X-Amz-Signature=06124f79c44b35d5bc6c01edfed2f4a318133056582a68281d15e088a1f76f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
