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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6EL2DU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICTjmTAygtWxUECwJyFmh%2BAaqoTMsN696KAQfNJ3Afm4AiBtKJDtQREKYYR%2Fw2pdrLNfGJJOFo%2Bqi6goRC7kSJr8RCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMQuaQjp3KrLW79rwRKtwD8EeofUzMJtcvQghcowk3M2qrCNlgFewNWqJUe8kQAvw70DuLaTxHbc8nE161CF69Ml4l6SzuAZHuWELWzpTRmd%2BH4NVFPd3BdqCVYClWR%2BdV4fjdZHaeamgAtTDt42Hf5RblAVExxkXGZCuvIXcHrxqy0JmhRHvHlWdl2WCEld1eu8GH1RLS77GltzkNPEGtFkJuOzSlYQn2ccoulaX6lmGAgV3%2B13klTRme5EYUONg%2Fr1SO1WpaeySE%2FSP3%2B3VZkICKyqrVcYRtA0x6QnCsrKPMKzK3rcQk3RF%2Br%2FkquRj%2FTU%2FmvZohSlCMyr6At9%2BNkbeKE68xtYsZGK6F6eaW5kS%2BdzJaaPcKdhRI2IJqlZwJF4fR0y9j9NGMwLs%2BWfrYMxWEWE%2F2PaBePEgfvMZvu49HUeulPuftT%2FauWjDirZtG%2BzUQtP5rfyQ9JcGDnMKeQtmMAUO3AJZtzVV8IvSrMimsYUK6tNGeLJFzpb9%2F3CcOOzoF7vahEWZlbNygUIM%2Be0Ow5%2BO%2FPstFk8yFTgjWkdgAxa%2BsZa9mU07eR9KxxpS8mC3eqtLR0FVmBDVUbtIAsoYUlSH8%2B7pcyBceMNRIlb8EdKb%2B4AMNVINeULPRLi%2FK%2FO1RKL4zMNPrv9Ewi4yvwwY6pgGx138rwiIqcHkzGqMo3WKWf0BjzIt%2F3TnfBs1Z%2FAsGJmgU3Fsf54T0MXz1Vvj5jy96PQR6sHRDcbsV4bs03i21Z6skxTYHiA69ZsmMeO1ub%2F0aafmQGDI6KVEYgGSkQwtXFCJIIQxnYV%2FYcFUU40lAteXBdL1%2BhWFeH4d%2BiGNTSqhp9X9%2FZLgcsTKBvFR8JBU91GMDPnaCmfAfzSNatw60XA8USRxG&X-Amz-Signature=e3c3adfd3ced7d9a6581c70968beeb59e3370c442f0d2e09f57d33ff95770d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6EL2DU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICTjmTAygtWxUECwJyFmh%2BAaqoTMsN696KAQfNJ3Afm4AiBtKJDtQREKYYR%2Fw2pdrLNfGJJOFo%2Bqi6goRC7kSJr8RCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMQuaQjp3KrLW79rwRKtwD8EeofUzMJtcvQghcowk3M2qrCNlgFewNWqJUe8kQAvw70DuLaTxHbc8nE161CF69Ml4l6SzuAZHuWELWzpTRmd%2BH4NVFPd3BdqCVYClWR%2BdV4fjdZHaeamgAtTDt42Hf5RblAVExxkXGZCuvIXcHrxqy0JmhRHvHlWdl2WCEld1eu8GH1RLS77GltzkNPEGtFkJuOzSlYQn2ccoulaX6lmGAgV3%2B13klTRme5EYUONg%2Fr1SO1WpaeySE%2FSP3%2B3VZkICKyqrVcYRtA0x6QnCsrKPMKzK3rcQk3RF%2Br%2FkquRj%2FTU%2FmvZohSlCMyr6At9%2BNkbeKE68xtYsZGK6F6eaW5kS%2BdzJaaPcKdhRI2IJqlZwJF4fR0y9j9NGMwLs%2BWfrYMxWEWE%2F2PaBePEgfvMZvu49HUeulPuftT%2FauWjDirZtG%2BzUQtP5rfyQ9JcGDnMKeQtmMAUO3AJZtzVV8IvSrMimsYUK6tNGeLJFzpb9%2F3CcOOzoF7vahEWZlbNygUIM%2Be0Ow5%2BO%2FPstFk8yFTgjWkdgAxa%2BsZa9mU07eR9KxxpS8mC3eqtLR0FVmBDVUbtIAsoYUlSH8%2B7pcyBceMNRIlb8EdKb%2B4AMNVINeULPRLi%2FK%2FO1RKL4zMNPrv9Ewi4yvwwY6pgGx138rwiIqcHkzGqMo3WKWf0BjzIt%2F3TnfBs1Z%2FAsGJmgU3Fsf54T0MXz1Vvj5jy96PQR6sHRDcbsV4bs03i21Z6skxTYHiA69ZsmMeO1ub%2F0aafmQGDI6KVEYgGSkQwtXFCJIIQxnYV%2FYcFUU40lAteXBdL1%2BhWFeH4d%2BiGNTSqhp9X9%2FZLgcsTKBvFR8JBU91GMDPnaCmfAfzSNatw60XA8USRxG&X-Amz-Signature=6aa8c0075ca8663d35a6a09652edb5a41818894618a3c3507ba84b0b90276e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6EL2DU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICTjmTAygtWxUECwJyFmh%2BAaqoTMsN696KAQfNJ3Afm4AiBtKJDtQREKYYR%2Fw2pdrLNfGJJOFo%2Bqi6goRC7kSJr8RCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMQuaQjp3KrLW79rwRKtwD8EeofUzMJtcvQghcowk3M2qrCNlgFewNWqJUe8kQAvw70DuLaTxHbc8nE161CF69Ml4l6SzuAZHuWELWzpTRmd%2BH4NVFPd3BdqCVYClWR%2BdV4fjdZHaeamgAtTDt42Hf5RblAVExxkXGZCuvIXcHrxqy0JmhRHvHlWdl2WCEld1eu8GH1RLS77GltzkNPEGtFkJuOzSlYQn2ccoulaX6lmGAgV3%2B13klTRme5EYUONg%2Fr1SO1WpaeySE%2FSP3%2B3VZkICKyqrVcYRtA0x6QnCsrKPMKzK3rcQk3RF%2Br%2FkquRj%2FTU%2FmvZohSlCMyr6At9%2BNkbeKE68xtYsZGK6F6eaW5kS%2BdzJaaPcKdhRI2IJqlZwJF4fR0y9j9NGMwLs%2BWfrYMxWEWE%2F2PaBePEgfvMZvu49HUeulPuftT%2FauWjDirZtG%2BzUQtP5rfyQ9JcGDnMKeQtmMAUO3AJZtzVV8IvSrMimsYUK6tNGeLJFzpb9%2F3CcOOzoF7vahEWZlbNygUIM%2Be0Ow5%2BO%2FPstFk8yFTgjWkdgAxa%2BsZa9mU07eR9KxxpS8mC3eqtLR0FVmBDVUbtIAsoYUlSH8%2B7pcyBceMNRIlb8EdKb%2B4AMNVINeULPRLi%2FK%2FO1RKL4zMNPrv9Ewi4yvwwY6pgGx138rwiIqcHkzGqMo3WKWf0BjzIt%2F3TnfBs1Z%2FAsGJmgU3Fsf54T0MXz1Vvj5jy96PQR6sHRDcbsV4bs03i21Z6skxTYHiA69ZsmMeO1ub%2F0aafmQGDI6KVEYgGSkQwtXFCJIIQxnYV%2FYcFUU40lAteXBdL1%2BhWFeH4d%2BiGNTSqhp9X9%2FZLgcsTKBvFR8JBU91GMDPnaCmfAfzSNatw60XA8USRxG&X-Amz-Signature=41bafffb372364c6fce3a503b47d04350b3aebef16e15565a469ea422e3fdf47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TEW7WJO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIH14cypZYUGEeEjZfzaw4ISZjhz1%2FXL4Ml3pM%2Fcz2ZEUAiAhBoDjPyyXDpkT%2FoSM9T9KdjCYJ6evF991N8xLX8VeEir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMph32qptt%2BoqXu60CKtwDQgI2FwYsUJ5mjY4OGluTrxUenYVXs5SNKzFyH4r%2FV9DWoCQvUZYChrx9S9UaemUewQUEff2uTwNA15%2FutHT0vkZQugaN%2B1%2BvkF75I1jX1tlHO9ZYg4tz%2FD%2BX8wfj3pI%2F4Nhxr9XHNs0vMTx3V4%2B%2FRtVPQO5OmxNlXin2vOwIBgQzSTe%2FLklCFgevAMeY%2Fjp8rd%2FTH9qrbTOWH9GGRpAar6aJdQKYkOMJqF2BMN1n0dy7vF5uXxs64X20JYF5zKag864RLfVDQUiUT8PhquTyA%2BwUnQh0%2BEiOh5barhgA%2B%2BisbR7ouTv17KDydwmLOTN9ZSWJ1b6U%2FhhEh%2FKPrzAtCb3WsXmr%2BDX03ZtJ7o0yVbAfg2%2Bd9piXlGe0g%2FBGwHx4KgNoeXQOfDBVQRUJndzBiHcxSEcc4%2BriZccZbglaLyAVAgZGXO1fDBPhlbnud%2BMD4EcLVtm%2BM3K5%2BZ98wKXDE7VrXASrHc4uYN0I0k0Z9ZNNLRj8uquWdQ0J8yiZQjjWkV2I7sIDxFSfQbO7OH0v3yUdpmTj1Hw5VbLIxhKVuHZ2YUGKGxC3qTIr5jqcoCTWJ0WekSPruTCc6XbndZ5naOidYwaPpFXN3zjpMVJWWhWMhB3Xi2dczbgUvnUwloyvwwY6pgGTZzJJVvrHD1YIC%2FvwiYM1G49qEesTaL68N525nbOTpVjebuGydzKpgB4iWUPS5IvfuRkh0UQBGFYozO%2B0NZzk3TitEfNVdiZ5CeaMeY6eovYhk1hOmnfyqdrZ%2BwIeJxnr9b8WADA2K8b8qNYVciLuBtHiwDDpGqQncqj9Mt0vGBn%2BdbReC3dmKztx4%2BlWvlPymA%2Fi92KTM7TCeqalDJK1RCZXkCSA&X-Amz-Signature=c1b80416cb794378ee55ed02a540680ff2627dd86d50f90278b07d570be622c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFF6J6BR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDzuxmYaNrKzBjPQz88BAYva%2BmAHAW5K%2BQyhYndF3dsRAIhAI8tngz2liRTVnSjbKzFUikP5ibgw1SXGbpjdkLTvDQjKv8DCHYQABoMNjM3NDIzMTgzODA1IgwDy37K1zIVOXHRzToq3ANgb5nNTh%2BsnYzQmFjGB22qOFfde24RTxAYB1MzU8F7WtcZkMOJfhDYIvLdJQBzbpQjVea35QeNlc%2FUItI%2BVIrO5LvyGoLF30xkVt%2FWe4R%2BWPbpywhXyXOBZhoZ8JVEsGvhsrBAu6D1z7sDg1bEHWg7b1KPHg0kqKfLSX9kvD5ywoL8jb7iWlMczsNor%2BXwaQq5mUcUWP2%2B4Jytg62u2c3z46b%2FUIu3fMX3qfUT1eatxK3ihutuz%2FeySD7%2FdeaFUU%2BmfYLrf8GtdpeaRc51Q7fv1x%2FS21QX4DOiSRu7qmzCxeD6APIcThHuo1pCNQHzvt%2FEuzo7n7453c7HZLPib0hKsTcAjd5XduTn%2BOfqQsnapq6rYyUTCGt9wLOkbPVvxr4my5csEZpEOux780nLUrMU13ZXn4murvKrI7Nm9upPlA2x5g3YCIWmPtOmbwCLr3B6Q0YQrY%2FmBUIsDHG6ujg2kjQDxFmNnjySU0q9PaaOWsvRWC%2FZ4%2BnFrkT6%2F04zzzMcwPAxhFqDtp42t9iiDf%2FLQA6TFM3GTkhgWtVE9NiiWU0GLJu%2FGOqfZdMPAgIsbMKf3zaBJRSNFy3pJoEVotft1UfzJDmyU%2BHOGBbA6y7J2bFUNT3adUiUgfGkmTDFi6%2FDBjqkAVNxVAD0pdsRqN6D3BKZWmvfHLi0g3N4ZMUHjfTj85SoQdboAPP8j7vkG%2BvfLdBleDJJzfcC4WTUb7Tujpt1UzNviZmZwJBBs0%2BBkH%2B478Wjt4sIFTonjfswLEWbACACKrkMB%2FzdAIMa%2BugTOeLtXmbtGiWrfO6tW9H0ncRjbehrpDTAuQnbob%2FrcibBRaiknKnNGCW1VnLOHHjhy6ijmh2UX%2BWw&X-Amz-Signature=c679e7e76e8d52825648a29e0fce045d2c89ec1977cb030d0aa19a4919d0aa1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6EL2DU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICTjmTAygtWxUECwJyFmh%2BAaqoTMsN696KAQfNJ3Afm4AiBtKJDtQREKYYR%2Fw2pdrLNfGJJOFo%2Bqi6goRC7kSJr8RCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMQuaQjp3KrLW79rwRKtwD8EeofUzMJtcvQghcowk3M2qrCNlgFewNWqJUe8kQAvw70DuLaTxHbc8nE161CF69Ml4l6SzuAZHuWELWzpTRmd%2BH4NVFPd3BdqCVYClWR%2BdV4fjdZHaeamgAtTDt42Hf5RblAVExxkXGZCuvIXcHrxqy0JmhRHvHlWdl2WCEld1eu8GH1RLS77GltzkNPEGtFkJuOzSlYQn2ccoulaX6lmGAgV3%2B13klTRme5EYUONg%2Fr1SO1WpaeySE%2FSP3%2B3VZkICKyqrVcYRtA0x6QnCsrKPMKzK3rcQk3RF%2Br%2FkquRj%2FTU%2FmvZohSlCMyr6At9%2BNkbeKE68xtYsZGK6F6eaW5kS%2BdzJaaPcKdhRI2IJqlZwJF4fR0y9j9NGMwLs%2BWfrYMxWEWE%2F2PaBePEgfvMZvu49HUeulPuftT%2FauWjDirZtG%2BzUQtP5rfyQ9JcGDnMKeQtmMAUO3AJZtzVV8IvSrMimsYUK6tNGeLJFzpb9%2F3CcOOzoF7vahEWZlbNygUIM%2Be0Ow5%2BO%2FPstFk8yFTgjWkdgAxa%2BsZa9mU07eR9KxxpS8mC3eqtLR0FVmBDVUbtIAsoYUlSH8%2B7pcyBceMNRIlb8EdKb%2B4AMNVINeULPRLi%2FK%2FO1RKL4zMNPrv9Ewi4yvwwY6pgGx138rwiIqcHkzGqMo3WKWf0BjzIt%2F3TnfBs1Z%2FAsGJmgU3Fsf54T0MXz1Vvj5jy96PQR6sHRDcbsV4bs03i21Z6skxTYHiA69ZsmMeO1ub%2F0aafmQGDI6KVEYgGSkQwtXFCJIIQxnYV%2FYcFUU40lAteXBdL1%2BhWFeH4d%2BiGNTSqhp9X9%2FZLgcsTKBvFR8JBU91GMDPnaCmfAfzSNatw60XA8USRxG&X-Amz-Signature=1f218e5fa2ce3373c6e473d47e5461bfbb671b622480413822dd3f4e08d15a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
