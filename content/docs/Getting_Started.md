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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q54OHVQ6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDIsDyp3rewr%2BVCcuhyXDYzpMDivf4tgXjqZrrl8r%2FQ2wIhAMC2WoP1W%2FJLDSMWJPNl31YGk7nlkeA3ObO7xGuK8c4FKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0Xv%2BHUlF7XHxDDT8q3AMEVTlj1hRrheNS2JxaTEWY1JKC3ed2N1vWMqzTzho0cqkZm%2BYTDSw1kfW5mf%2FibAQM1%2BP28iS7V3FzXKCG4YumKEFRRM%2BBDsi36MYZxvI9Jpth2JyTFkd67KcaM81geKnBP48KIv7ywoPWn36WkgrUfbGMc8yIo1KixNRja3tDmhgIxAzUTrVCMs0TB2F8bFgXXuPZOMvDV3lWNjnTg8lW7BhP5dPmCEV%2BrsI3tQ%2Bq6odNEm4oLhNGgbjbt2z%2F7mEcNfC3a19bdGuZ6kFUH3YFzszT07FCOv7B4R0Ixe%2FLU%2BEDNAJG97sYXmtbqa5LEGUYFnEPXiTpKpwcCpH7npcCKIMBdoJpYpqGHNc%2BEvjvUdwX5wwC7%2BkY2Zy3Qj6SJOQQRJ30toZJcBR5tavICufYx8BRMAyyCrxnQjQLiciIBA%2FrSQMhiQZ5dxhR09N2ABnizuNIVjlAnVFDXEy0qGsX8Xj%2Bic8VEKQz6tK4sd6%2BXMRpMhsCGaZKL2Qgd4Vvy%2FFl936ytK7169c683PDCfMTKvk4DJpWOCSQTi5nAyGOXIsYLfiqrN8mNBy0PUHuyVjb%2FnmLH%2F7Ll4sHHyWOFOqSQosinHczybzeu%2FMbOz5va%2BGMgFuLjM5WexeECjDYoI%2FABjqkAUlJ4w0XVoFdRbqr6Gon4SpCn4NrDQJItDaJQJgaTyyDx41%2FkNpdz2%2Fi37bDrPolFOuajkoFwmceTwQIcI6z4JSJOEMraJceJfYOa4Y%2BdXmDxIBIflstz9JYbfm%2Fn8uvbBU9fhwuWpOQD6isryfFYc0qqjAy8sqt71hKmbRLT6K3tpDR6Oxx7kDOpozviDCUgDo9GQbTCNNF9YPbAMxA8WnzbcLm&X-Amz-Signature=7675456a60e3e318b7718f11cd8699af6cd7dbb4cfb3b22ad42d22344ee64e63&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q54OHVQ6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDIsDyp3rewr%2BVCcuhyXDYzpMDivf4tgXjqZrrl8r%2FQ2wIhAMC2WoP1W%2FJLDSMWJPNl31YGk7nlkeA3ObO7xGuK8c4FKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0Xv%2BHUlF7XHxDDT8q3AMEVTlj1hRrheNS2JxaTEWY1JKC3ed2N1vWMqzTzho0cqkZm%2BYTDSw1kfW5mf%2FibAQM1%2BP28iS7V3FzXKCG4YumKEFRRM%2BBDsi36MYZxvI9Jpth2JyTFkd67KcaM81geKnBP48KIv7ywoPWn36WkgrUfbGMc8yIo1KixNRja3tDmhgIxAzUTrVCMs0TB2F8bFgXXuPZOMvDV3lWNjnTg8lW7BhP5dPmCEV%2BrsI3tQ%2Bq6odNEm4oLhNGgbjbt2z%2F7mEcNfC3a19bdGuZ6kFUH3YFzszT07FCOv7B4R0Ixe%2FLU%2BEDNAJG97sYXmtbqa5LEGUYFnEPXiTpKpwcCpH7npcCKIMBdoJpYpqGHNc%2BEvjvUdwX5wwC7%2BkY2Zy3Qj6SJOQQRJ30toZJcBR5tavICufYx8BRMAyyCrxnQjQLiciIBA%2FrSQMhiQZ5dxhR09N2ABnizuNIVjlAnVFDXEy0qGsX8Xj%2Bic8VEKQz6tK4sd6%2BXMRpMhsCGaZKL2Qgd4Vvy%2FFl936ytK7169c683PDCfMTKvk4DJpWOCSQTi5nAyGOXIsYLfiqrN8mNBy0PUHuyVjb%2FnmLH%2F7Ll4sHHyWOFOqSQosinHczybzeu%2FMbOz5va%2BGMgFuLjM5WexeECjDYoI%2FABjqkAUlJ4w0XVoFdRbqr6Gon4SpCn4NrDQJItDaJQJgaTyyDx41%2FkNpdz2%2Fi37bDrPolFOuajkoFwmceTwQIcI6z4JSJOEMraJceJfYOa4Y%2BdXmDxIBIflstz9JYbfm%2Fn8uvbBU9fhwuWpOQD6isryfFYc0qqjAy8sqt71hKmbRLT6K3tpDR6Oxx7kDOpozviDCUgDo9GQbTCNNF9YPbAMxA8WnzbcLm&X-Amz-Signature=27feaaa88f48918148a69e8204b858ca29548d56d5f4ea05ea70a07ba01d8c40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JDZH23%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDjFC0iOXT4NBnWRXdQ63NT3rFipGB3vp%2Fngvyhhl6QCgIhAI6fnhke4qqAejZOSnNXI3zAKb20D8lc7GnpFTbJBJdYKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdmFyP1cTatKtsU74q3AOIPsE9OQSv53pxGLWCTLpAIbfDoQrHRBlQUJrPdl1ls8gsrxJ3s9FK%2FUc%2FPOsk7cDOqCSM4gFb%2FdBSkjpRCjr%2BJFD4G7kB5%2BnxdKNctskjgv5vTRdPKcDThgMSL091LvFM3UjSCGt56Sm9RyyStUrRSL2qA3bX1FIJ4EhOpMkZBymV54vFmDWB15VWqy9%2BMhlotxV2kFVJnGJFy9XO7o%2F%2FW6eoI5S74vhrX3VvJLWGk75DMqwGel1OpaqJcaY%2FiCVehL%2BeZ%2Fh%2BI5XjhjVhxtQ4%2FEuhS0JB3qU1%2B0I5Wu14JieCnT6mpeafrmDh%2FgC4pIZotINgDVfQR0lc4grI6cIm3mYsYaUdwR%2FWcoFqtPmlXGg%2FS7uP2US5swDFaReXTip4NkPDoAEFq8pbaOQgyF7qSjIuQeIsDHGcxP%2B%2FNz%2BSNoAEufUd5Q8dCeHkaq%2FbN6xRPFF1z4e3KPc5eBny0zuksLKqjWZmd2kk6bHXYoKUhYg6Xi3%2BxJYw5KCyi2QuRPzrCmNLLOIOmWy9omg6Csz8ukw9EHPP0js9pJR5qWT2E0bRC0yOY3UExlvF7Ko%2FEQNmrp7MNGMU5mVjT1hV8YxuKt1ft0Gl3bhjLf%2BdjEpxRwTFYH4i8tpzbfHhfDCPoI%2FABjqkAaV3ccKDLnhMA7OIhb17jBmBPYif9XwVkGvKBuzBQQ4bodfQBdkhZPQlMqBYhAlD5CP0Op32HHBXi68k68iiipCixGpgj%2BGo7UMqEaQnCOk%2FUvRr8KcqoO4QIUmO%2Bd1IrYbCgQlHzwXqQjGmdyYPS91wLvKX6GuWBGFGvdpNnv6xpfo%2FjjGkmxu81%2BaJobTY0L%2B%2BKJ5UL%2FR6H%2ByfLKAxpaxRQvtG&X-Amz-Signature=a6789a6e49e9f060fca46fdade2f11b754abeb8b81dfa386cc30f7f4ed8d2274&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WK5FOAH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIGYHcztm%2BbuFZCqejB%2BwEDSAYfiKicCtEwldrxjFPOa2AiEArO0TMTHCCQwopmTkFWWtPCU3DDhq%2BXA9P87ck%2FXLCZwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGiSw87n9d9YDgvDBSrcA0RbH4JG9q0VS1Z4P0VQ3BADGr%2FHmW9EgIgcvPV%2F57iMeffxb3eSST2mdoQLMFfmRSuyD6M66ps19h0q5ndcChAHWgr005VwDcVyaR%2FsH0%2FSJGurbq%2BrcECUOHi9LOFnZAuXD9fkAjGGPbyD31tNTnruAejrMoboRNBONJPPZPYLELei%2Ff00RkH9q%2FVOwlV%2F30mRNGv48yDAWO1vI6rJBpiSL3uPGysr956BM5AgZd5bft5O41Zb%2FoFcXr7ywovElYqlfWEHskjqCy1QSISf1OrzD4UHrYnBh9Iy9kvdZ%2FCW6d1uZJ1MM5KzxqVuAffYbCEu%2BTMmdkyzvLfwqRnLrz4PHrckjUAutAZx47py5qgQQeNItOEhqAbZaFusjc7k5fmdNNmZx5wcRTDOay7rP76rVxS2XWTK1jFqONlq9vOgzsQ9PLzum7VN%2B8PSIFy0fcU3KTVuH37cbLBnp9%2FP%2FegOSCM%2B751zXsjWTwTk6SIVuSqOsk%2BhxlPkNiPBGkKke406wEPJCvLbsigyFDwOA2iuo5UjLzMJbsU%2Bmy%2BrGzxRUvdZoMzqOSov9bixBHaLVv8VDVeySF9pMxIN3ci6YFc2QrH8H7zLNOocOvoub%2B0KkkNjw9kbRnZ9wGZVMJGgj8AGOqUB4YtMwxxXBL9AH0eoRchN%2BNEObYDhd15e8OUjpZZYN0rnfnPKX4R4ASohmEtCo0WyGO7NEUFPCJ3vOSqlCl6vsDnsIddUpLYQkcHTaSBT3pwkEqOe89JNfRJVbBuetA3FoIIhreVuxqtF1lLSY0jOEzPxEer%2F709QOV1vR8Wd2mjMYDxzvGrmbZ3zxBqAoEriFP7Kl1ePL7sFqgQGLowcZMEKg46b&X-Amz-Signature=dd4471adc89b5e9bb923bb48de686ce612982e09bff7695451a4125abae8ac30&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q54OHVQ6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDIsDyp3rewr%2BVCcuhyXDYzpMDivf4tgXjqZrrl8r%2FQ2wIhAMC2WoP1W%2FJLDSMWJPNl31YGk7nlkeA3ObO7xGuK8c4FKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0Xv%2BHUlF7XHxDDT8q3AMEVTlj1hRrheNS2JxaTEWY1JKC3ed2N1vWMqzTzho0cqkZm%2BYTDSw1kfW5mf%2FibAQM1%2BP28iS7V3FzXKCG4YumKEFRRM%2BBDsi36MYZxvI9Jpth2JyTFkd67KcaM81geKnBP48KIv7ywoPWn36WkgrUfbGMc8yIo1KixNRja3tDmhgIxAzUTrVCMs0TB2F8bFgXXuPZOMvDV3lWNjnTg8lW7BhP5dPmCEV%2BrsI3tQ%2Bq6odNEm4oLhNGgbjbt2z%2F7mEcNfC3a19bdGuZ6kFUH3YFzszT07FCOv7B4R0Ixe%2FLU%2BEDNAJG97sYXmtbqa5LEGUYFnEPXiTpKpwcCpH7npcCKIMBdoJpYpqGHNc%2BEvjvUdwX5wwC7%2BkY2Zy3Qj6SJOQQRJ30toZJcBR5tavICufYx8BRMAyyCrxnQjQLiciIBA%2FrSQMhiQZ5dxhR09N2ABnizuNIVjlAnVFDXEy0qGsX8Xj%2Bic8VEKQz6tK4sd6%2BXMRpMhsCGaZKL2Qgd4Vvy%2FFl936ytK7169c683PDCfMTKvk4DJpWOCSQTi5nAyGOXIsYLfiqrN8mNBy0PUHuyVjb%2FnmLH%2F7Ll4sHHyWOFOqSQosinHczybzeu%2FMbOz5va%2BGMgFuLjM5WexeECjDYoI%2FABjqkAUlJ4w0XVoFdRbqr6Gon4SpCn4NrDQJItDaJQJgaTyyDx41%2FkNpdz2%2Fi37bDrPolFOuajkoFwmceTwQIcI6z4JSJOEMraJceJfYOa4Y%2BdXmDxIBIflstz9JYbfm%2Fn8uvbBU9fhwuWpOQD6isryfFYc0qqjAy8sqt71hKmbRLT6K3tpDR6Oxx7kDOpozviDCUgDo9GQbTCNNF9YPbAMxA8WnzbcLm&X-Amz-Signature=3a25cfd50384ffe8578e05b371f119c92be1132b1cc3d39e6878550cf0cf90e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
