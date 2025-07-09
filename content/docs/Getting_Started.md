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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662APVEV3F%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBk93MTgRYzgMTMBdKbVPgK%2BllLdJ%2Fzzd5LmpLNhhlw%2BAiAxxMaN%2BGqpxlRbCrnxdzh9REmve3Ig%2BMFTn4Dau5M6GiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1hyWNr3ri63BAlMKtwDlVhHNPKWagEL3eRnfDS8Rknq7iFaCDkqeeVgTirZVIGrvUNIN9XAOLv73zDLkdvCY3hoYbkmoyjae8z0bKLWVej97LlxNhxSYjXFmPJCGmXJRn7O3mhCE37Y8ASITUNVqVSJwfT%2B0UVSVEv9hzrnFhiUJu2pWHCRfMtmVeGVTz4Mss1HYHtn6BlRqP%2FBIZaDDzLIos1dlsGWPWJMPwP00FKS7iBTIk1rKRoP38rzWYIJRQsfu0qyaGj5TE%2B8PdTNKYq3%2F9tUl%2BSmNFJU6xFPRkT5CPJRsdMI4LmI08QzvPGAx9zWjyRBRHNnChnJ%2Bv1qwCczxCD53I4sqygzlaQbpnSBhKQFsD0M%2F37cOWArzJ1k9JLyPgvZEtsgAijatr5qv1YxXF%2BJZ9OMF8eL3np8USPJHUJx5yn5uXcSdl2pqNgcu6yqSTwSy4beZisIn%2Bg8l8%2F9sSL6XePiaOw0LV4GXSGGvA29oohGD0xtwg2UXCpvgIl9TiYh%2FRAtqcvsU1XdlcPwL6kT11BGx%2FFej2RpgCzTDc%2FywQ73gNKDpgoJ9%2Bs31%2FaYAB092jc7PySouxBP1qTXkR6H5L2%2FFYduggS6K726wDOoT%2BV5WJNfXAfJQLCL2zoSjvMFABt5Spgwl8W6wwY6pgGATsvtkOMH5Tsobp%2BN8b1hGUaGWAaMSk9jGuYcxeA8fZnxUsvG0dToiQrFOUZhjpP51XsptLjlElLBDz5jF8zbSuj0T4A4x6UK%2FuwVCWXrpIhLAhvoXkjpupqqMUYJLtu3S57w4TjepLQtsXlNZB89M9F5pbnXlOeMAZp%2FixrOBdsnJ1fMpllF1wFT1nTZFkSMUDCzEdjg3kottnadb2jzygBqNBsl&X-Amz-Signature=78b8f76999fb966d813f86486052a0f2b47f263dc2bd312fc18e3a9c42c7f36e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662APVEV3F%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBk93MTgRYzgMTMBdKbVPgK%2BllLdJ%2Fzzd5LmpLNhhlw%2BAiAxxMaN%2BGqpxlRbCrnxdzh9REmve3Ig%2BMFTn4Dau5M6GiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1hyWNr3ri63BAlMKtwDlVhHNPKWagEL3eRnfDS8Rknq7iFaCDkqeeVgTirZVIGrvUNIN9XAOLv73zDLkdvCY3hoYbkmoyjae8z0bKLWVej97LlxNhxSYjXFmPJCGmXJRn7O3mhCE37Y8ASITUNVqVSJwfT%2B0UVSVEv9hzrnFhiUJu2pWHCRfMtmVeGVTz4Mss1HYHtn6BlRqP%2FBIZaDDzLIos1dlsGWPWJMPwP00FKS7iBTIk1rKRoP38rzWYIJRQsfu0qyaGj5TE%2B8PdTNKYq3%2F9tUl%2BSmNFJU6xFPRkT5CPJRsdMI4LmI08QzvPGAx9zWjyRBRHNnChnJ%2Bv1qwCczxCD53I4sqygzlaQbpnSBhKQFsD0M%2F37cOWArzJ1k9JLyPgvZEtsgAijatr5qv1YxXF%2BJZ9OMF8eL3np8USPJHUJx5yn5uXcSdl2pqNgcu6yqSTwSy4beZisIn%2Bg8l8%2F9sSL6XePiaOw0LV4GXSGGvA29oohGD0xtwg2UXCpvgIl9TiYh%2FRAtqcvsU1XdlcPwL6kT11BGx%2FFej2RpgCzTDc%2FywQ73gNKDpgoJ9%2Bs31%2FaYAB092jc7PySouxBP1qTXkR6H5L2%2FFYduggS6K726wDOoT%2BV5WJNfXAfJQLCL2zoSjvMFABt5Spgwl8W6wwY6pgGATsvtkOMH5Tsobp%2BN8b1hGUaGWAaMSk9jGuYcxeA8fZnxUsvG0dToiQrFOUZhjpP51XsptLjlElLBDz5jF8zbSuj0T4A4x6UK%2FuwVCWXrpIhLAhvoXkjpupqqMUYJLtu3S57w4TjepLQtsXlNZB89M9F5pbnXlOeMAZp%2FixrOBdsnJ1fMpllF1wFT1nTZFkSMUDCzEdjg3kottnadb2jzygBqNBsl&X-Amz-Signature=46782c224982a65c14c3e0116c389e1e0e75bb07364011ba443063b5a20fdd1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662APVEV3F%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBk93MTgRYzgMTMBdKbVPgK%2BllLdJ%2Fzzd5LmpLNhhlw%2BAiAxxMaN%2BGqpxlRbCrnxdzh9REmve3Ig%2BMFTn4Dau5M6GiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1hyWNr3ri63BAlMKtwDlVhHNPKWagEL3eRnfDS8Rknq7iFaCDkqeeVgTirZVIGrvUNIN9XAOLv73zDLkdvCY3hoYbkmoyjae8z0bKLWVej97LlxNhxSYjXFmPJCGmXJRn7O3mhCE37Y8ASITUNVqVSJwfT%2B0UVSVEv9hzrnFhiUJu2pWHCRfMtmVeGVTz4Mss1HYHtn6BlRqP%2FBIZaDDzLIos1dlsGWPWJMPwP00FKS7iBTIk1rKRoP38rzWYIJRQsfu0qyaGj5TE%2B8PdTNKYq3%2F9tUl%2BSmNFJU6xFPRkT5CPJRsdMI4LmI08QzvPGAx9zWjyRBRHNnChnJ%2Bv1qwCczxCD53I4sqygzlaQbpnSBhKQFsD0M%2F37cOWArzJ1k9JLyPgvZEtsgAijatr5qv1YxXF%2BJZ9OMF8eL3np8USPJHUJx5yn5uXcSdl2pqNgcu6yqSTwSy4beZisIn%2Bg8l8%2F9sSL6XePiaOw0LV4GXSGGvA29oohGD0xtwg2UXCpvgIl9TiYh%2FRAtqcvsU1XdlcPwL6kT11BGx%2FFej2RpgCzTDc%2FywQ73gNKDpgoJ9%2Bs31%2FaYAB092jc7PySouxBP1qTXkR6H5L2%2FFYduggS6K726wDOoT%2BV5WJNfXAfJQLCL2zoSjvMFABt5Spgwl8W6wwY6pgGATsvtkOMH5Tsobp%2BN8b1hGUaGWAaMSk9jGuYcxeA8fZnxUsvG0dToiQrFOUZhjpP51XsptLjlElLBDz5jF8zbSuj0T4A4x6UK%2FuwVCWXrpIhLAhvoXkjpupqqMUYJLtu3S57w4TjepLQtsXlNZB89M9F5pbnXlOeMAZp%2FixrOBdsnJ1fMpllF1wFT1nTZFkSMUDCzEdjg3kottnadb2jzygBqNBsl&X-Amz-Signature=06e9b1a097f30c4c096f8a9d61ffe18e6238deb372bea8f5ce7e838ab0101808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT6DJZUT%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgcfyv76wRcSsHPw%2FCx1zzPcIwaaCDo17KngkM%2BT9kPAiEA7ovizjdX2FfGyYOrgmhSBMU6PvqFlR7xFvWkt6bm4O4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPPwkAnN0mGNLh4bSrcA8teLJxyU7%2BlVun25KRjoaN1EWu2AOem%2F0QhRxCAY3VxfU%2B7ZVfkI%2BATTYzFr9nsdWWxTqwfjGvhjYjCRQYq2%2BDZhmZXNcuUxuM4iHbfcZBJCAdL2dt%2BzPgPN150L9mBaQKutJVNS2A2EoK7pUb%2FA2lyCD%2F0emj%2BK7cGQk3tCjdL%2B4OqP%2F591YwgIqYKLaNND9FQ%2BBI8tmqnl49ARyjCtqlM2F54M3UTx8em9P4f1qPirgmu5EqAs7%2BpgUO%2BZYOmdOTGQ6LzmkcvKS9ppGKbJMk8nXc%2B74VwRk65aPwiW%2F6w1zVvaqM3FuRCrn5%2Fr3dsQ1x6IopFvy2v2vA41%2BDA%2BzZyowC33tllsFruRzCctCBQQigdGIIQeRZmbZLGTOKnqD83BLHFtybmqxyEz2wMVIhDpja1e%2F1%2Bn8ii3MXojMX%2BBMN1o16wnDcuST2yYck4%2F1vvtBVcncB0Sa%2BrNVFCTgirrlKllPSO16xuiS6OI5ylDG9d4%2FYurgfYZXTUZ2uOWvvI6GotD%2FooOF7%2BlGHOzHYU29CRzy9RIYsq65QL48OqjBV4K8mZHBXFIGXDA%2FdeWHT6tBMHGKuHNBZUUi5WTvzs1cLEhxUCm%2B%2BFt6cFXTGQqU%2B686itQdE1nq3PMJ%2FFusMGOqUBtr9l85hFLnnQ%2B9sF16qcfhn5rE4dDDXXaFMdwLkrlpEfQSCMq2Oh1uaENStgGrvPkyXYsa16rZl%2Flw1VHI4Fj2PEEOOkxdo2r3ekN0nKfX8yUNjIhGBMmbZJH10mbM2qAtnE7CQRWw8FVc76h%2BoGkXWVa1LyWdCROQqBC%2B1dws9ivL0M5ResQPYJOM8PixfghWzvVCu7jFFPCLt8U8Y%2Bd3U8o7me&X-Amz-Signature=8518a7f72b0d1509fcccac07efa4224caf7866ca8331a71df885db977384608a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DZVU6DC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8%2F6CwmFKhV%2F%2FCDtPFEANzUQtM%2BW1DaUpLNnUj%2BMwa8AiAQguhLFZ0iGWafXxNOoE9J69w2vd5y%2FmpN%2B%2FbQF4VERyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnT5risA7%2BEuZhpS1KtwDlvT8m%2Bq9CTI5dEG49FKFM1wYHy%2B%2BDojn8MFsmMkzWa%2FMjKzPhwg52raaGWbIhFk4b5Zd7xy7mCoFDIHN1hyc0Jv4pOyqm5woTIdGrhBFvng%2Bvn8ecT%2FmuNjyxYD6TcIBVGvGapYhegQkOjHD47cnWZXvP0aiN8YHP85T9sjJpmHqeMQvKuw9llsNCh2Is%2FGrF125HXd4nVDcJYKFAiMraES0TIIh7yax8K8I6VprKMFxJlCBMgv4n%2F%2FzQORvUo5BidtD4TseeilUohE4vvmxQxOtzovDNBtA8gJFAtayHEtrUaS%2FmDmOxfj%2B7cDSyLCogddMpSdNYaqKDEX3UuK6PZpTsIDsoW2ha7RITxv1LDa4Ob2qnUzaHuvTHPbt2md34p6FymnZ3CB5KWcyc5z9jebnlvKK3XWVI2zAXcF67%2BfQGRBNDRbJ8Zt7nwvqMMcGink%2Fo%2BgvV3KypikKDMZW0SF8ZEmzsYZWLd7%2B4xOxEN6M7ee5v9AwC5N0zw8D67JNnZcpAyFfNpVrPIFK55qAcKLtccC3mC2a%2B%2F8rLLTXp%2FiblDUkNaFnGl2vESxii8WkzumNyZ7V%2B6ZCfNdM6zZX7MZSyNaI5hvT8viRVI1bD8xIn7CDHjh1L8deirMwncW6wwY6pgFIUOHo%2BfgH85a4qwlQk%2F%2BHUE3VkMIlc7Bw6%2FGQBD6kkAPPi25TiYo2zDqC4BzNbmXCxLB3Y7uPodeqDlLSADziS3OHYW2gXaeeDcI2a5ilWgQjAVyeCcuWt8PH9HZgBIW4E97y0iV2eZvY8M7AIp4XrIr6k%2BIFlan0onwiHB%2FJmAq%2Fh%2Fn93MrgN7e2fJ3bneFdD%2Bg%2Bpf7VMgmsZn7oQTN2eHMj4Bto&X-Amz-Signature=4b53cf609ec9fb66b6d70bb0b05a18809bb13bef0334a450fd80f7d04da1f8bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662APVEV3F%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBk93MTgRYzgMTMBdKbVPgK%2BllLdJ%2Fzzd5LmpLNhhlw%2BAiAxxMaN%2BGqpxlRbCrnxdzh9REmve3Ig%2BMFTn4Dau5M6GiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1hyWNr3ri63BAlMKtwDlVhHNPKWagEL3eRnfDS8Rknq7iFaCDkqeeVgTirZVIGrvUNIN9XAOLv73zDLkdvCY3hoYbkmoyjae8z0bKLWVej97LlxNhxSYjXFmPJCGmXJRn7O3mhCE37Y8ASITUNVqVSJwfT%2B0UVSVEv9hzrnFhiUJu2pWHCRfMtmVeGVTz4Mss1HYHtn6BlRqP%2FBIZaDDzLIos1dlsGWPWJMPwP00FKS7iBTIk1rKRoP38rzWYIJRQsfu0qyaGj5TE%2B8PdTNKYq3%2F9tUl%2BSmNFJU6xFPRkT5CPJRsdMI4LmI08QzvPGAx9zWjyRBRHNnChnJ%2Bv1qwCczxCD53I4sqygzlaQbpnSBhKQFsD0M%2F37cOWArzJ1k9JLyPgvZEtsgAijatr5qv1YxXF%2BJZ9OMF8eL3np8USPJHUJx5yn5uXcSdl2pqNgcu6yqSTwSy4beZisIn%2Bg8l8%2F9sSL6XePiaOw0LV4GXSGGvA29oohGD0xtwg2UXCpvgIl9TiYh%2FRAtqcvsU1XdlcPwL6kT11BGx%2FFej2RpgCzTDc%2FywQ73gNKDpgoJ9%2Bs31%2FaYAB092jc7PySouxBP1qTXkR6H5L2%2FFYduggS6K726wDOoT%2BV5WJNfXAfJQLCL2zoSjvMFABt5Spgwl8W6wwY6pgGATsvtkOMH5Tsobp%2BN8b1hGUaGWAaMSk9jGuYcxeA8fZnxUsvG0dToiQrFOUZhjpP51XsptLjlElLBDz5jF8zbSuj0T4A4x6UK%2FuwVCWXrpIhLAhvoXkjpupqqMUYJLtu3S57w4TjepLQtsXlNZB89M9F5pbnXlOeMAZp%2FixrOBdsnJ1fMpllF1wFT1nTZFkSMUDCzEdjg3kottnadb2jzygBqNBsl&X-Amz-Signature=3e956f28af1a461b4d3b8a49e1ffe274fdfce35eb1721e500aa2ccc40f6f0841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
