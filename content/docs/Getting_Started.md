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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYIOAUYV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhWs5jeCq0dHrOAsy2NgOMEeZSIIAVAqDNWfl1Gthk4AiEA%2BORKbtW%2BkXcv1eUaOU4iYuutRTzVO5E%2FzSjj6qBOYtkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRW%2BZ0Qz88nQ3b4YyrcA%2FcMEtZ4fkNpsNf9xlKnsPv0vlnmavJ%2FAQpYVqjFO%2BwVLWgB4bLW49SBZwUThhV5o7KLZiAO5QzbDAslgYbnTOrvRa9JucDiRVjJvX%2BxwqoK2P3v6Bbya7hIIV9dF%2BgzJo7dwKl7QVVjiWjROZRbz7IcIUKUjtCv0jWK0YZn0uYJTF31%2Bm4R8eRY%2Fs6o8umAFw34NEU026%2FC4s776amoqvcUTGnXIyOwelwqL4J1kvgL8X5TvASnLS6jPy0U6sg%2BidsbkiOT0o61IsnBlmLQ%2FoWn7VoeLdv5QwlqCGrI%2FPmqnS3yiTMyzBWicuY3S6gf57sFTqTtEes2qDzcI4o%2B6eos8v9hveCKLYU426j2jIrNLDoIok%2FOwdWkCyTQNdRSClXI6Pe3WZ3x1tAeKO7LrW9FZGKfs3hPpajOpnefmWpk9LhLS6Xi%2FrO2PcVQZqN1frCxmR2%2FocCW1Zsyz4r1Djm4d8E15vzBh6u66Iy7d796wpFT8LvaDJdqmbsaT3jeK%2BRJezNouo09773IpXFnnqoHHLrSaEmEsVbFTa4LImbYt0hkGcXdq47Yn3aKjti3Wtpd7IgOk%2FzrkEY3AyJOy5AJ7rXG8eMHsdeS8UaU4yOymtySs%2BEaYO4RLpjvMOPjyr4GOqUB5mxeMIVObPr7mdM4%2BxOjEYLtMZHltI0lEXN2R9tTRyQBNSZ7LmiJQTZS22F%2F4yrW5ts9oHU6%2FIL8m11wFsS5KmkBcEtnSvZo4DSbxN5bVLUw3TUJQS8oUYsngC7wdpqk74UoizWxNn8yYgJLAwFTFkWMchQy2WpDdjP08fHmFH1%2F1ih7%2Bi1LV7QEHwDYyCMVPHjLT3w2Zl48JTzCf4wRFrE0EL%2F6&X-Amz-Signature=c5c7bb2e118d760ba0962089900345ae886670fb4f6ddd5b63340b2542ee390c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYIOAUYV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhWs5jeCq0dHrOAsy2NgOMEeZSIIAVAqDNWfl1Gthk4AiEA%2BORKbtW%2BkXcv1eUaOU4iYuutRTzVO5E%2FzSjj6qBOYtkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRW%2BZ0Qz88nQ3b4YyrcA%2FcMEtZ4fkNpsNf9xlKnsPv0vlnmavJ%2FAQpYVqjFO%2BwVLWgB4bLW49SBZwUThhV5o7KLZiAO5QzbDAslgYbnTOrvRa9JucDiRVjJvX%2BxwqoK2P3v6Bbya7hIIV9dF%2BgzJo7dwKl7QVVjiWjROZRbz7IcIUKUjtCv0jWK0YZn0uYJTF31%2Bm4R8eRY%2Fs6o8umAFw34NEU026%2FC4s776amoqvcUTGnXIyOwelwqL4J1kvgL8X5TvASnLS6jPy0U6sg%2BidsbkiOT0o61IsnBlmLQ%2FoWn7VoeLdv5QwlqCGrI%2FPmqnS3yiTMyzBWicuY3S6gf57sFTqTtEes2qDzcI4o%2B6eos8v9hveCKLYU426j2jIrNLDoIok%2FOwdWkCyTQNdRSClXI6Pe3WZ3x1tAeKO7LrW9FZGKfs3hPpajOpnefmWpk9LhLS6Xi%2FrO2PcVQZqN1frCxmR2%2FocCW1Zsyz4r1Djm4d8E15vzBh6u66Iy7d796wpFT8LvaDJdqmbsaT3jeK%2BRJezNouo09773IpXFnnqoHHLrSaEmEsVbFTa4LImbYt0hkGcXdq47Yn3aKjti3Wtpd7IgOk%2FzrkEY3AyJOy5AJ7rXG8eMHsdeS8UaU4yOymtySs%2BEaYO4RLpjvMOPjyr4GOqUB5mxeMIVObPr7mdM4%2BxOjEYLtMZHltI0lEXN2R9tTRyQBNSZ7LmiJQTZS22F%2F4yrW5ts9oHU6%2FIL8m11wFsS5KmkBcEtnSvZo4DSbxN5bVLUw3TUJQS8oUYsngC7wdpqk74UoizWxNn8yYgJLAwFTFkWMchQy2WpDdjP08fHmFH1%2F1ih7%2Bi1LV7QEHwDYyCMVPHjLT3w2Zl48JTzCf4wRFrE0EL%2F6&X-Amz-Signature=e96758911b1c34cd293c0b3e749956697ec56cc1f8f7cf2e6804bcbfdd30d0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJC6RD3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdWZJDnOwR4QWynoUzyD6%2B8URd7HaRinQz3WHrOeEZYAIhAN9IuwffirhpBE6Gqa7Q%2Fcl91n%2Fi1YYUCUOLSeFWOG%2FGKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqLqCOs0RdQ7LoVgQq3ANiknjpTGEjnyrmWyKEGmgUeVqlBhBKUKGJR3jKVIyAIK%2Bc3PsOxh1HDY9wSpIUWSYDbIeZfv%2ByIIX3IVZla4lxJWVa%2Bd6yyIutoSp3pyYXdG7oUdGXeO15crJitff2gj299dq%2BUSdx8oCCQyOq305bwMquftsA86SZYjHst5s5WdqU1jLCuio%2BXYhxdFSHpwWja9p%2B3XY6UQdCcmTqJPU%2FQT%2BzsOrJ6jDTwEfFlhrYRGuMrO16ZcedtBWct4aVrVJCjwr7uycAPI7y2gt%2FCPkveKDULNtA8tkEhojzVqGVbzZbfbV%2BA667yDeRV2XorASmg8DQDHyiqXMBpEWyLaUszcLXD%2F5aMCSp0PTq3bPo3DCHopyrM5HP8qFpewmvfpbKpq%2BOE5xuyexNVI8ZRU34y9BS80%2Bml1sIQzRcCfNTqyt918CpaNvhJqGsLRt6nUtNx6WMpzEm6Xp84vq%2F9TN5Dz4B3%2Bta3vQXSuiHseVQYdJYqp4Fv38HHQsZ81ODmoFT10oNh86cXx1iquWP0lD5mIX0Db6WXTxI9hKRHtGI7ZIPSsOJzm4gE8%2FrxHShjYflOCaQtEOu37EiL56SCOxfqiDHSa%2F6qrJaxL%2B4v5ZCRgpZR3XUJM9QPo594zDDwcq%2BBjqkAf6sXMav92HosM8AqmS8L83J0MQDZRWRaZWQuFwFNYehV2dgXeX722%2BgfikJZ1JazDRN9zCgJTIcAF9HiLidKuXGW%2BGoUpLKl0AmpKc1xeIInmrKFZrDhce4MWVtkyOfd4KjKG13G3S6b68oAmxa6luyHi2R9P%2FU3P7Z1adX5YjUgnvLWRpCxU%2F1B%2F3QaMYEoumSpFivyw%2FY2cS8upazpI%2BMgf%2F7&X-Amz-Signature=6631033ed4c03d64041e75c949ab7939522dbccf9ea0b9bdd482b5653fc861f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGM3HD2P%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy271sbZ1vWWEAppz0cu5putOaSfWqxk10fINKPEM0kwIgczThemaoTnt1qfLcWldvItpHliB9bPP9trDYN31fcDwqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9dU8ljjaTvE%2FM3LyrcA4Ph8QH8MHHnAA4F967hwgztwdnsqFs5WLxalUQqzJeRqM4xTJWW9s8yFUlZn%2BW0Eoh3z%2BqoQAR1Jadp59YdhmX1riLfmxmdvcbVvzvE02MH2WTL57UbWjjZabi8e6ZWOmkIN7h5I4uDEcZ9b8n0L1AkZtWEDjxzc7RM%2FIyCMbLNFsFKqHbOKwA4Fs0U3FZAEN8rD0AiyVOvO76b3xakUAwh5xkImKvL%2FqTOe4VRQI9W03Ze3sMFrtiBc882ATc1gNozgVrMbrd4BGiFkpK1piRjGRD75cV%2Bt0B9dJQfCENZ6Nw2FJKniHHdjvy%2FAM8vaIh2WWCsfEIuwkhyYqDencnJCaWwwCqMpKuwQde9HEcb3mAuC%2Fv3WdMHvanxFlpTVLaFRA4HgyFTB1gspBydDhhPPy2NZangENpS0PHTc%2FqIRA3auJAz4QJ%2BgFbsMPPFxov23YuDWs5G6mEMTBchCk2fkvVlGO5Ql1l5OaFERfnnrKVzH9i%2F7UNsRyQZxF9DpYSi9BUBOiBSj8djHHCGtrP90cmj0yynnAOS3%2BEn0SOXwO1xur1X5SqMXaSD3Hhv7N50rIRtmLnoOaQEYRwzQtOpg2A16DXu5f5n9VyqG4a5rpo3DDUVsw%2FnC3abMOjByr4GOqUBnM%2BkeCQdCVd3BzORNKtyqNePPodXyVFNI9kwBkWoVS3jaY%2BWqKerSuTkjKchz%2F%2Bm5CurxQqbQkFgmcHuvMBUL3fWdWbz4DnyovWLAqQCKKxFUesYR9jrcK%2B30QvxJuPaPZzIRqM0Q25qLUWkSlgwgHxFOqETKu%2Fib4FS2FLRj168UnS9oYUEwaZipc51VIWuFNWbNUta9LFZaMNF0S4jcSXSB%2B9l&X-Amz-Signature=d702a9af013f5b2d5b6fbf11490200444631f82dd290db0207aa64c8f1066404&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYIOAUYV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhWs5jeCq0dHrOAsy2NgOMEeZSIIAVAqDNWfl1Gthk4AiEA%2BORKbtW%2BkXcv1eUaOU4iYuutRTzVO5E%2FzSjj6qBOYtkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRW%2BZ0Qz88nQ3b4YyrcA%2FcMEtZ4fkNpsNf9xlKnsPv0vlnmavJ%2FAQpYVqjFO%2BwVLWgB4bLW49SBZwUThhV5o7KLZiAO5QzbDAslgYbnTOrvRa9JucDiRVjJvX%2BxwqoK2P3v6Bbya7hIIV9dF%2BgzJo7dwKl7QVVjiWjROZRbz7IcIUKUjtCv0jWK0YZn0uYJTF31%2Bm4R8eRY%2Fs6o8umAFw34NEU026%2FC4s776amoqvcUTGnXIyOwelwqL4J1kvgL8X5TvASnLS6jPy0U6sg%2BidsbkiOT0o61IsnBlmLQ%2FoWn7VoeLdv5QwlqCGrI%2FPmqnS3yiTMyzBWicuY3S6gf57sFTqTtEes2qDzcI4o%2B6eos8v9hveCKLYU426j2jIrNLDoIok%2FOwdWkCyTQNdRSClXI6Pe3WZ3x1tAeKO7LrW9FZGKfs3hPpajOpnefmWpk9LhLS6Xi%2FrO2PcVQZqN1frCxmR2%2FocCW1Zsyz4r1Djm4d8E15vzBh6u66Iy7d796wpFT8LvaDJdqmbsaT3jeK%2BRJezNouo09773IpXFnnqoHHLrSaEmEsVbFTa4LImbYt0hkGcXdq47Yn3aKjti3Wtpd7IgOk%2FzrkEY3AyJOy5AJ7rXG8eMHsdeS8UaU4yOymtySs%2BEaYO4RLpjvMOPjyr4GOqUB5mxeMIVObPr7mdM4%2BxOjEYLtMZHltI0lEXN2R9tTRyQBNSZ7LmiJQTZS22F%2F4yrW5ts9oHU6%2FIL8m11wFsS5KmkBcEtnSvZo4DSbxN5bVLUw3TUJQS8oUYsngC7wdpqk74UoizWxNn8yYgJLAwFTFkWMchQy2WpDdjP08fHmFH1%2F1ih7%2Bi1LV7QEHwDYyCMVPHjLT3w2Zl48JTzCf4wRFrE0EL%2F6&X-Amz-Signature=3f60bae36c02777e8cb87f0f08f7471ed0d8cd2411a5a6f57818826d95c26a79&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
