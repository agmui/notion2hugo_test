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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NYZG3YX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCffHnXGhjEgA5nUwehFaF9WNIVmkzVP4IDvqzFeI9pgIgT1QDV2x%2BV3NsWU1T%2BrbQyuWfo%2F584DgNiUQ8xXPucTcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDCuwZnuxHvuST4lqiyrcA1Y%2FbvnXfaG9YKkUUvC%2BnawbjlPk8HKpHRmxG6On8lOykGF8IHUXcZQTLfGiDemWTQX%2BQFYEBEhSY7Xao5fAiEbQN96wOED2srRdOPGx%2Bpq8JiSfBOczDM2%2BU8WDcbbvxg3w16dm51NDYISj9xZFgVPSoo0tvmf1CFmgJbVSDdDpvUY%2FUQnnjXKKy6fLiteeMjsvX%2BUfpkJXMLYMVBDlry0aFxz9wOScHs275kzsOsNvnpxjze1hcWy3a3S6avkGV2nVGy4yUTAIeYSYJxLmnTI7SZQyEF%2BeXiGFknM1BMu6Z7TQrkcgZMXAm8zjqtWilevz3G8JQZMehTi%2BR4uXDzloiGgA09qW7C835z5uCGUGxif6CtGIjjdWykbVSK8Zw8P1KSNtf526BxOxgTUhW0Pg4XRvBUQz0%2BstzdZLD7DCeTEngagw21LCDvHOHLAbPnkwT2iV7Wz4YHT5k3MRPLKmhwtGzKT8IgW4kF87oOdukg1LGYZAdkAlQO9AV5pdHFwuzMXCF2P7if2nomBiqm48yEGlgyAOqNn2PS7pQQilugDhggVrQtdlMzEf5dn19vSYWY6EKh9FUkQTyQN9DEXuMcqkW7T1%2BBVwZYcd1YW7dAOUVmq9jeyoeadSMJ%2F0oL4GOqUBK3czQsiXhSCbcuLtLcZMDtyIVN1p53xjNA8dON5MHTBmN5xcHP6HM%2BjLA%2BDRKNo41UdIHMwo6YF4kqa0jlxCivXSUUlOrvXhbUpr7cQcHk8XNYPTz6hRquv%2BT0GbNH6rwfCx0B1IxbpTVrQpEnsTerEBanSMlCjlX2q7MbqmzCzHmHPdWWTqaCzsVWAwBXrkGpggliHJpb%2F00UzLeY8ne7T9xpIb&X-Amz-Signature=10fb036b5069830f2f4c31e83642f47ceb903e9396311c0c2c4b817045b4c9dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NYZG3YX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCffHnXGhjEgA5nUwehFaF9WNIVmkzVP4IDvqzFeI9pgIgT1QDV2x%2BV3NsWU1T%2BrbQyuWfo%2F584DgNiUQ8xXPucTcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDCuwZnuxHvuST4lqiyrcA1Y%2FbvnXfaG9YKkUUvC%2BnawbjlPk8HKpHRmxG6On8lOykGF8IHUXcZQTLfGiDemWTQX%2BQFYEBEhSY7Xao5fAiEbQN96wOED2srRdOPGx%2Bpq8JiSfBOczDM2%2BU8WDcbbvxg3w16dm51NDYISj9xZFgVPSoo0tvmf1CFmgJbVSDdDpvUY%2FUQnnjXKKy6fLiteeMjsvX%2BUfpkJXMLYMVBDlry0aFxz9wOScHs275kzsOsNvnpxjze1hcWy3a3S6avkGV2nVGy4yUTAIeYSYJxLmnTI7SZQyEF%2BeXiGFknM1BMu6Z7TQrkcgZMXAm8zjqtWilevz3G8JQZMehTi%2BR4uXDzloiGgA09qW7C835z5uCGUGxif6CtGIjjdWykbVSK8Zw8P1KSNtf526BxOxgTUhW0Pg4XRvBUQz0%2BstzdZLD7DCeTEngagw21LCDvHOHLAbPnkwT2iV7Wz4YHT5k3MRPLKmhwtGzKT8IgW4kF87oOdukg1LGYZAdkAlQO9AV5pdHFwuzMXCF2P7if2nomBiqm48yEGlgyAOqNn2PS7pQQilugDhggVrQtdlMzEf5dn19vSYWY6EKh9FUkQTyQN9DEXuMcqkW7T1%2BBVwZYcd1YW7dAOUVmq9jeyoeadSMJ%2F0oL4GOqUBK3czQsiXhSCbcuLtLcZMDtyIVN1p53xjNA8dON5MHTBmN5xcHP6HM%2BjLA%2BDRKNo41UdIHMwo6YF4kqa0jlxCivXSUUlOrvXhbUpr7cQcHk8XNYPTz6hRquv%2BT0GbNH6rwfCx0B1IxbpTVrQpEnsTerEBanSMlCjlX2q7MbqmzCzHmHPdWWTqaCzsVWAwBXrkGpggliHJpb%2F00UzLeY8ne7T9xpIb&X-Amz-Signature=441bf10a2e71e847708888dedb61147f7d79f48e35dac6b62b4895e190cc7ba2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3HIKFT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRD8vBxY6gqDNqXn27vtNQB13D9T%2BSuvVfgw0jodB6TwIhAIcYCjOnfYelv1dMqloaiNYnTR6txfyBaV8E6XkdpjoaKv8DCBUQABoMNjM3NDIzMTgzODA1IgwyW4%2B%2BPM5ZBPc5nsoq3APgHkmSSybpcImg1oGpQEjpHtXO5UAJVyIRJxr%2Bezsmp1UiaEYQf6RqsGMpa1a%2BT8Rd45Vp1G%2BmowiFhPxFTbfC2TWm7Mi9cyUNcwZlp6AKJxlO2fsemaukPaAAVP5Q656uMSOmdPSWkt4J%2Bg6snhY1xjGWglN%2BUcy8sLacxCL6QFL7SJdtI2d7J%2Fz9Mdi8PNzi1myYgrsflsYlQ8LNR8C%2F1Lnu2JIaikdiXp8l79G6ZPUOyKuunUMykEV1ovyCGG7Fs%2BZIs6zmhPMiqOaboDG2ZoHjytRH41Z7yB0KHbMZlwozu7OsZb%2FhjDPOc3CoGMZ3cIqa8ySooWDVqWNs4D46ZbB5NBu4%2BVHTUmsmB%2BhRO1glshnRAmbHqC7GSOxvmSkQYSNp6Ha06f2k4i%2Fi%2FJtHooxKKTY%2FQR50eI6HnLiriZhLN4gGCbsta2eT91DGAObRPxe%2BRt70zsNOMDlfwVA5fQxhN753h6S8Tp%2BGeGRHY6y%2Fgae%2F3uwerSZez8qNXzJxQrYjfv13kITLEhzuO4l%2FzYHdKNRipJuu88oYcFePROXMt4EEweEo7u2e7NEtNULTfjTaGj6QgDqhf0%2BhMkXRGZYisWlGmQncJvOZ0UrRRTbcLteICoulSqs%2FtTDh9KC%2BBjqkASWCcUdalNCdYD4OAQGgxCZstqDeHHTuhMO7yJcDkX3mHoPMpWeDbe%2BOuryvNujXbQ25lcQ8en85uPl5AgXjfJttGaHWfw2zT%2FmerTB%2BMie4pZEpAjneXsG5zcTeIi3XgZvTQl3txMbqRjXFoPr4uPkmOoIbgjaAeppyBfEmERZWLHtuOLyePf9Kk0100eFeqY6suuDst0xaM%2BR%2F2z83ibz3tesN&X-Amz-Signature=cc51a7112a701a222beabdd6aace44c9026856456cc04ae726d3babb8bd59421&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWTKVUF4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBn6UYyygq72baoPg2SXQs1y34hHriuVzmgjFjhxj6sTAiBEcRvEu0OkNplKBnIQZeN03%2B7h%2FwL9TrDso8i2Sm%2Bqoyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM3Hp4maWom9uC1TAfKtwDo0dRgujGHewkh3%2F1vi9dD2Arz%2BAyvRB%2BHuDWJNaFQae1fKvwmT%2B7PWROJgUcse%2FCIRqvalV06d5rFC6mRcSH%2BeFZqjgyJJj%2FgcmYidhxXuMvG5Dv6OTNpXN1rW3f4nXcIBW%2FrxiHOkjVJVCVwjKe72nbCkTGM39TuNb5QyydaMNfIquS4e52Jn7n%2BF7fWA2ONtIClSQieSFyrD9poD%2FwS%2BVOZAtkDAdev6twmGIKk18PREIa%2FIw%2FkXPDA0YeEES0pEvr0dhZ%2B1OGVrALbZ%2BuUcsdpOw8JRBQmPmFSDIoI3D%2BcNyYa237zq2iSTC47HzjZNqZGC9HYsL8fHB%2Fw8q8c%2BV85v283XVkeQ1Wfp%2FCU3IUsmGExz8Jb6GX21m4cfU4pxkUC4lbEM0i3bqHi9r2KC%2BRwznJ1rMNQBZfnaXufg%2FRAyong4rRK2CkK4jxmpGK%2FtbJdA2AM9DluLtnQk%2BPNw0foQYzMWBLcKMOdEY7dWpN9%2BbwnKTgybPIFY0UnAHdRq9HFbfjxs3cLRsz7i6XvfrVDy2eXYlwDCbyVqQDeC3IU3s%2BsztlGMhMPkKHmPSGBfVlqPRxJ6t73oGcDuO87mO1cgPI1bUGSEy7tW9eZB1fd7nJynyidibTcmwwh%2FWgvgY6pgGcwgp990wDtzX8Lkd6r%2B1YKJWK9z57%2B1KJIAOo%2B55PAivh212Oi%2B0Mz%2FjugRqPcKArZZUmLfRlE3nT%2F%2F0%2BKEuSWzVuGcYLCdRd%2Fo2GW551P%2Bv%2Ft12L3mFv8GqUu9SvtYmLToM8Hac7s%2BoaO5yOMkAzPmyfyZ5wPJUp16e7G1QwB1kSBn9Ccji%2Feox8F1Sn7jTqr%2F54vexUkcWErjaOJFdQpzwaHF5U&X-Amz-Signature=a43503a57944017e2a721e1f9e6201d352515a6f2dd45fe09feeca46ed5f2628&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NYZG3YX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCffHnXGhjEgA5nUwehFaF9WNIVmkzVP4IDvqzFeI9pgIgT1QDV2x%2BV3NsWU1T%2BrbQyuWfo%2F584DgNiUQ8xXPucTcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDCuwZnuxHvuST4lqiyrcA1Y%2FbvnXfaG9YKkUUvC%2BnawbjlPk8HKpHRmxG6On8lOykGF8IHUXcZQTLfGiDemWTQX%2BQFYEBEhSY7Xao5fAiEbQN96wOED2srRdOPGx%2Bpq8JiSfBOczDM2%2BU8WDcbbvxg3w16dm51NDYISj9xZFgVPSoo0tvmf1CFmgJbVSDdDpvUY%2FUQnnjXKKy6fLiteeMjsvX%2BUfpkJXMLYMVBDlry0aFxz9wOScHs275kzsOsNvnpxjze1hcWy3a3S6avkGV2nVGy4yUTAIeYSYJxLmnTI7SZQyEF%2BeXiGFknM1BMu6Z7TQrkcgZMXAm8zjqtWilevz3G8JQZMehTi%2BR4uXDzloiGgA09qW7C835z5uCGUGxif6CtGIjjdWykbVSK8Zw8P1KSNtf526BxOxgTUhW0Pg4XRvBUQz0%2BstzdZLD7DCeTEngagw21LCDvHOHLAbPnkwT2iV7Wz4YHT5k3MRPLKmhwtGzKT8IgW4kF87oOdukg1LGYZAdkAlQO9AV5pdHFwuzMXCF2P7if2nomBiqm48yEGlgyAOqNn2PS7pQQilugDhggVrQtdlMzEf5dn19vSYWY6EKh9FUkQTyQN9DEXuMcqkW7T1%2BBVwZYcd1YW7dAOUVmq9jeyoeadSMJ%2F0oL4GOqUBK3czQsiXhSCbcuLtLcZMDtyIVN1p53xjNA8dON5MHTBmN5xcHP6HM%2BjLA%2BDRKNo41UdIHMwo6YF4kqa0jlxCivXSUUlOrvXhbUpr7cQcHk8XNYPTz6hRquv%2BT0GbNH6rwfCx0B1IxbpTVrQpEnsTerEBanSMlCjlX2q7MbqmzCzHmHPdWWTqaCzsVWAwBXrkGpggliHJpb%2F00UzLeY8ne7T9xpIb&X-Amz-Signature=f21f3a910ba0293a9652014907a838b2ac9e815cae49396c508f1ad25f4e5ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
