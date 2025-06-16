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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XFSMIHL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCIXGD1MH%2BDt4PAw6n81SM6%2FTlRdxmYtRqSZqD4L3HjKAIhAO%2BqTF26SQW60y06KEUDpehX9bJPhn3R%2BViSqqpa246GKv8DCFEQABoMNjM3NDIzMTgzODA1Igx5Cw2QACwRjVz9WHIq3AM5FzawMmoaaEMLEBiyOxGpUE28OkyShJpotqO7ee%2FN36WPyL21COCMBPGsmVngp1p0TkasdFeq4g8M65Oey4WTEiV0W8h%2BDVem7HXocDOWxkfinmBaN8F6ri0WBHfAeR3Sd9ajoNxGRaugpsvtgf%2BdwuoEqnq90LcglGtGNyk00XDhdOAt30%2FlJu84novi1Ymilo1wNQBDzE9A9hAGqgoWX%2F6ELkRc5T46Qe2hP4dl3%2FsEDWfTF4IK5wBGipSHiwyvTAYK59rJpco%2Bhwpr1OojDg9IB1YLQ8KFkSTfM9CThl7HfFdajILuwNQt4hEeipckFz642R8sWyxO%2BWHalmyE6zPHLIOMFim3%2BF4zKUDrYHhF0DDUPvD324GYp1GkPFmeE4IPUf8nDNt8DH%2BHWX8ajZ8EaZ2zp0EhHPq33ySUxtYyVbd6LDW4Mu1IPbtUUdHiHfv1NSULBbhvUv1D9ssjWY6XnSLXolSWm3ysGJ03Mii6ZMknqxukogliJqqRVtcsrwrl%2BfrtRisPrfieq%2Fh8RRddDguf5rd6Gmd84BmZEhcQFCM0jZcLvgepC9cdVZ6mjZFUKNWgjLA4QSMqd37semSVnnLKXWWOw7dRqry3g4UXabTQ5huytM3DUTCEr73CBjqkARauXdt%2BOoYVdLXv1nV1Rappnch2A%2F4k47L4qnLNiW2CcNiCg1gn4jUSSjKmekQLGAx8FgvdKGu3akVQ79lrvBIsQkPUIHuv%2B0KeJCIqWDQjCENTBWkQRshBe8qx38SsgfYMCRnoB%2FX%2FA3nHYbMvp44klHCvxPBq9KADys%2BWUxgZvWyWQvvFav9nR%2Fm473Tll9hQVUXjTNN%2F%2FBpi4HEPiHZbFb%2Bs&X-Amz-Signature=bc72a6657bb8a40583784a8de8ded1523139c8baec71277217f330f2ed45d369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XFSMIHL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCIXGD1MH%2BDt4PAw6n81SM6%2FTlRdxmYtRqSZqD4L3HjKAIhAO%2BqTF26SQW60y06KEUDpehX9bJPhn3R%2BViSqqpa246GKv8DCFEQABoMNjM3NDIzMTgzODA1Igx5Cw2QACwRjVz9WHIq3AM5FzawMmoaaEMLEBiyOxGpUE28OkyShJpotqO7ee%2FN36WPyL21COCMBPGsmVngp1p0TkasdFeq4g8M65Oey4WTEiV0W8h%2BDVem7HXocDOWxkfinmBaN8F6ri0WBHfAeR3Sd9ajoNxGRaugpsvtgf%2BdwuoEqnq90LcglGtGNyk00XDhdOAt30%2FlJu84novi1Ymilo1wNQBDzE9A9hAGqgoWX%2F6ELkRc5T46Qe2hP4dl3%2FsEDWfTF4IK5wBGipSHiwyvTAYK59rJpco%2Bhwpr1OojDg9IB1YLQ8KFkSTfM9CThl7HfFdajILuwNQt4hEeipckFz642R8sWyxO%2BWHalmyE6zPHLIOMFim3%2BF4zKUDrYHhF0DDUPvD324GYp1GkPFmeE4IPUf8nDNt8DH%2BHWX8ajZ8EaZ2zp0EhHPq33ySUxtYyVbd6LDW4Mu1IPbtUUdHiHfv1NSULBbhvUv1D9ssjWY6XnSLXolSWm3ysGJ03Mii6ZMknqxukogliJqqRVtcsrwrl%2BfrtRisPrfieq%2Fh8RRddDguf5rd6Gmd84BmZEhcQFCM0jZcLvgepC9cdVZ6mjZFUKNWgjLA4QSMqd37semSVnnLKXWWOw7dRqry3g4UXabTQ5huytM3DUTCEr73CBjqkARauXdt%2BOoYVdLXv1nV1Rappnch2A%2F4k47L4qnLNiW2CcNiCg1gn4jUSSjKmekQLGAx8FgvdKGu3akVQ79lrvBIsQkPUIHuv%2B0KeJCIqWDQjCENTBWkQRshBe8qx38SsgfYMCRnoB%2FX%2FA3nHYbMvp44klHCvxPBq9KADys%2BWUxgZvWyWQvvFav9nR%2Fm473Tll9hQVUXjTNN%2F%2FBpi4HEPiHZbFb%2Bs&X-Amz-Signature=22c090c49a3d65a823f7b7952e09f7dadc74e74a54c6d0b1b2828c09e11d6680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XFSMIHL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCIXGD1MH%2BDt4PAw6n81SM6%2FTlRdxmYtRqSZqD4L3HjKAIhAO%2BqTF26SQW60y06KEUDpehX9bJPhn3R%2BViSqqpa246GKv8DCFEQABoMNjM3NDIzMTgzODA1Igx5Cw2QACwRjVz9WHIq3AM5FzawMmoaaEMLEBiyOxGpUE28OkyShJpotqO7ee%2FN36WPyL21COCMBPGsmVngp1p0TkasdFeq4g8M65Oey4WTEiV0W8h%2BDVem7HXocDOWxkfinmBaN8F6ri0WBHfAeR3Sd9ajoNxGRaugpsvtgf%2BdwuoEqnq90LcglGtGNyk00XDhdOAt30%2FlJu84novi1Ymilo1wNQBDzE9A9hAGqgoWX%2F6ELkRc5T46Qe2hP4dl3%2FsEDWfTF4IK5wBGipSHiwyvTAYK59rJpco%2Bhwpr1OojDg9IB1YLQ8KFkSTfM9CThl7HfFdajILuwNQt4hEeipckFz642R8sWyxO%2BWHalmyE6zPHLIOMFim3%2BF4zKUDrYHhF0DDUPvD324GYp1GkPFmeE4IPUf8nDNt8DH%2BHWX8ajZ8EaZ2zp0EhHPq33ySUxtYyVbd6LDW4Mu1IPbtUUdHiHfv1NSULBbhvUv1D9ssjWY6XnSLXolSWm3ysGJ03Mii6ZMknqxukogliJqqRVtcsrwrl%2BfrtRisPrfieq%2Fh8RRddDguf5rd6Gmd84BmZEhcQFCM0jZcLvgepC9cdVZ6mjZFUKNWgjLA4QSMqd37semSVnnLKXWWOw7dRqry3g4UXabTQ5huytM3DUTCEr73CBjqkARauXdt%2BOoYVdLXv1nV1Rappnch2A%2F4k47L4qnLNiW2CcNiCg1gn4jUSSjKmekQLGAx8FgvdKGu3akVQ79lrvBIsQkPUIHuv%2B0KeJCIqWDQjCENTBWkQRshBe8qx38SsgfYMCRnoB%2FX%2FA3nHYbMvp44klHCvxPBq9KADys%2BWUxgZvWyWQvvFav9nR%2Fm473Tll9hQVUXjTNN%2F%2FBpi4HEPiHZbFb%2Bs&X-Amz-Signature=12d84d17cff4a5709aa455c904887c1c7c6056fee412841875cf9ec7ba2f1492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB3MXR6X%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD9NmyjVzsDpyObTYsDu1K7Vo1sja76N7eIBtSe%2BK7u2QIhAOcXsICGHPIPy8rp7vCiP2F7Elz2vumgxsKAbppMv2V1Kv8DCFAQABoMNjM3NDIzMTgzODA1IgzwUwMQQLpxnWWMTsUq3AM1fm5Q0uu5A9HQRIeLW%2FasC119N%2F1g5836oLsVO6Lf1hzp5AHuBqHpd6sa87wiLyXBeqp1LU4wB%2BraDv9Sx%2F76k1Zm2kx9hIC71Z1VqdbxX3rD2MobJcffaFvHnXcO%2BDam8rRF64ZRsUtw4Q3kn4o0uu4gOZyVqJt%2BvMxUPSJqPxhlvjw8bCarwmWzX4g3zOuZMoj0o9OKKbu2K3%2FnV5oIABB1Wcj%2BwOCWEz8ROSOIL7M0bEdW8PvG96f%2FbrXqQGiRqZbyk3HGfHYvfQJqcVXNpVrZsyaBkcjNP4xL1Tdhkiq3Xn6zxfDiPq1Bu1TkNZHpoNhbPJqQFPInYm%2FfOm0gWlCcYRuKVmjLPoGoaWa3Fgj%2F%2BRr1nwGJpAU3owIjH3uLNkvXAlZo6BSAFRcA6aDCtiB1NoBUiRazIuc1VJX7JmZeXvOpxfJansKWjCpuH7QN9fNUJ%2FnahzObcdQTHkD4%2BEw8VLC4fCIQWVQwV35s%2BR%2FzNZ3l6Y%2FbZHNbQ%2FVllhbzGFB8s%2FtLiOKtvu%2FGb6m5GJnaTkbc5RQFnsu8mRuCB6Pwt0l7Mue6OMAL0kgsYG8gIjdJDms0B%2BddTW4G%2BNbQq70UhBXeotO14SHQho8m79kbLUmSai4EIgi2NzCTr73CBjqkATbP90W10jwnND4ALVcyfJgh7cEb5GWCubjRZegr%2FCoeIpkYu%2FOIqRTJbWCCjZRnAHw54vdLU7AtARrMhZMHplMJQLEfu2Pt7qbs0rmvDmFUaRj1SonZi%2FEMuaDydvAt1XujD5Wjp%2BWWUtsOG4iQaUVNXQrR%2FLOKh7Cs%2FWlAraHEcKr3NEo8TD3P6nJy0gwerOHFHkgOs6NDDmjpzrLpJDpOoyla&X-Amz-Signature=14a6286bb90c1155355e4ba2b46352c9222650d3ee061e87e5171242c4519861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPLYJGFP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBT%2BQM%2FSRRjcySpGMHNttZPJ0MMMicrtBF2gDckrkHfmAiEA7qGkhNlE0MZj7ST9dREGiCwLqDfLpEIlFl6dA3opYMEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKHgIP5pgLx%2BX2iB4ircAxb7Z7tkuVHdRDYxO46STICaOYjptWphImF60QZWDGmyMgd4CqxgLHpqsVuSJAluEkv%2B5zmMNd1F9Tgf7E6TES29MEQlQ%2BONHG3x05wY8Qui0jgj1oRBnlfeoj2j3yVSuIJ926f1lrp%2FW27DScAuG5mAyoXQPjPyUyzIAZkLsHxQH2prC0mFvVVvBihRqWkhZRQvu3B%2BQ5kCzEhmIBXKOA7UyWi%2FodmkqI9KvuITcE57kGJpRbndJX%2BldrWqaGs%2BB%2FP%2B4WORusbgPP%2BQSlXSB1TTBTDuLPEZGrpukjAU9ypMRiRocNWe8l%2BWt9UHv6D2gwN4m9322jjBh4qNiZNV5q4zvicQBLhBYmwqIgoR%2FQEaJ145SK4eeTZtd6XpAcV2%2ByPyYxBd9r1vPIQKIB0mEoYivl%2BpLVsW8mrtCyh3O0C5HzxAJV82vQ670HE3bGlCDO9dZoixdaTEMZlVNJmWa1AiTy%2FvSTw9mD0FokaIEm0z8TLRnf9SjqVh5mgJjfcD3GrFVoZeI%2FakmTTiB2uPb1gS0ji8Uq%2BpgnI5PrBLHRVE7FfnOSwh5Npn5q%2BdUgg8jAGiGWatiMPRVy5hlDri1jEPspFrH63tQ9KACttPh%2BFNYciWmFMEpYlSdpTZMN%2BvvcIGOqUBSkJpTVMY7lUDgeBA8fPLd8nt1fVeYMBNxxziXZHVASOnlFuae%2Be2KrxAJFLO4QPNgdVEJ%2FkCZ5p3AWQ%2Flt8E1mLgy0LRoTQGKQcNjOZeDRrdIuIre4V5neprfObplzK%2Fpw%2BQVvAoZ787bX%2BG6wEab9EyOYdRKVfha2ETrJNNjR9Smfvd3E5vQE6j3olFaUB1BdV0tFY8IjoTSsh3JHWxo94fIEDl&X-Amz-Signature=9aaef439d5aa7d8ea01ef2ff0e4e682b5db40da5ddc1eec717f6a91d7cc0b118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XFSMIHL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCIXGD1MH%2BDt4PAw6n81SM6%2FTlRdxmYtRqSZqD4L3HjKAIhAO%2BqTF26SQW60y06KEUDpehX9bJPhn3R%2BViSqqpa246GKv8DCFEQABoMNjM3NDIzMTgzODA1Igx5Cw2QACwRjVz9WHIq3AM5FzawMmoaaEMLEBiyOxGpUE28OkyShJpotqO7ee%2FN36WPyL21COCMBPGsmVngp1p0TkasdFeq4g8M65Oey4WTEiV0W8h%2BDVem7HXocDOWxkfinmBaN8F6ri0WBHfAeR3Sd9ajoNxGRaugpsvtgf%2BdwuoEqnq90LcglGtGNyk00XDhdOAt30%2FlJu84novi1Ymilo1wNQBDzE9A9hAGqgoWX%2F6ELkRc5T46Qe2hP4dl3%2FsEDWfTF4IK5wBGipSHiwyvTAYK59rJpco%2Bhwpr1OojDg9IB1YLQ8KFkSTfM9CThl7HfFdajILuwNQt4hEeipckFz642R8sWyxO%2BWHalmyE6zPHLIOMFim3%2BF4zKUDrYHhF0DDUPvD324GYp1GkPFmeE4IPUf8nDNt8DH%2BHWX8ajZ8EaZ2zp0EhHPq33ySUxtYyVbd6LDW4Mu1IPbtUUdHiHfv1NSULBbhvUv1D9ssjWY6XnSLXolSWm3ysGJ03Mii6ZMknqxukogliJqqRVtcsrwrl%2BfrtRisPrfieq%2Fh8RRddDguf5rd6Gmd84BmZEhcQFCM0jZcLvgepC9cdVZ6mjZFUKNWgjLA4QSMqd37semSVnnLKXWWOw7dRqry3g4UXabTQ5huytM3DUTCEr73CBjqkARauXdt%2BOoYVdLXv1nV1Rappnch2A%2F4k47L4qnLNiW2CcNiCg1gn4jUSSjKmekQLGAx8FgvdKGu3akVQ79lrvBIsQkPUIHuv%2B0KeJCIqWDQjCENTBWkQRshBe8qx38SsgfYMCRnoB%2FX%2FA3nHYbMvp44klHCvxPBq9KADys%2BWUxgZvWyWQvvFav9nR%2Fm473Tll9hQVUXjTNN%2F%2FBpi4HEPiHZbFb%2Bs&X-Amz-Signature=e6300a8f795b34f2ca76b4438dadb25f96c5b7b3bb5b086106b60572043a99d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
