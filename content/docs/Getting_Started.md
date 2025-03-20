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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5T27TSZ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICJbmzODbCdJPsXXu%2FpoN9hG9pqWZHhwWwxODs180TxhAiEA8xOrpwspJoB5RMaIAd%2FmfxNIwgminFEWoQjQ484egKwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ9DooixIvtzShY7CrcAxBxbkChClb1kNtDHhFHQce%2BrI2pS9pSfbr8tKc0jccRVe3U498UGw%2FxOSmUhz%2FPMqC%2FTDs3ZU5a47j2lxp9tJ%2FHpa4gxCiZr1vATSpDh1iIGRdpxm5If7Zq1ZEa%2F7aIYTvSH4XtEzSYoLj2SYPoQuWYQze07m4TnmV74difGEcbieTHjL2sBvWjPSE6hRGrgxGL2ln3LoCf5A3%2BpOfO0OwQaDk8EaGqTwYYnpzqLv09adeeuI5gpHBNTlKtQHo80mk7a%2FfKubA152jCWmJNkswo2%2FhZ0FUGAUlNKpqpi0vDKkAOLkfRouSToiplY53aWCNHZsH0pSc4OvG1VUwMnirYAW8X%2B8HCm5MZHnXCVwx3YdyLLeggmBlU28IVOJ%2FJ3jYMTXHZ%2FGCJ6TwSHvT%2FGD4Lm38nda1UwztjmDWCLldYHr7q5q7d8QU1V4fl3lk5U4kjuVy3awHPh4%2F%2FCKevhC8excTLx0LsX6cDTfTBA47t5q1YCqNkgGdFhzsOPN7qhK3I9pMxIaNVqz1YX%2BbScxuOYlvPxWdlWDppa8bo3vX6hxbSs7SCLN%2FdFl2ayXsq9XC2UNucj8tx4IQLObtHP5YlReys8aga94bb7e%2F4F4297icPpamETeko8IAkMN3G774GOqUB2mr%2F2ueglg9mvrrnV9sG9w7q0k01BMGtXPd2D7c4AJ4dm2CwHWmByD%2BiozCBaiUlAQsIdhAvuijkskMa%2BNGqGeQmTyAKz3SCIOnwDBRY9zykYWOGNObXgX0wX7lABSr4X440NwTAdKjujuhsIFprE1kgOX%2FooPv%2ByVC%2FbDH%2FYE3u1IGfCkALQRpbyLO1Osz2Xe%2BcCrHy%2BYRIiPIA9dzOCPhoGPcR&X-Amz-Signature=b5405729320f572b46ec49dc098d2f5b5df2465abc94f01cf6fb5a6b0b79a575&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5T27TSZ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICJbmzODbCdJPsXXu%2FpoN9hG9pqWZHhwWwxODs180TxhAiEA8xOrpwspJoB5RMaIAd%2FmfxNIwgminFEWoQjQ484egKwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ9DooixIvtzShY7CrcAxBxbkChClb1kNtDHhFHQce%2BrI2pS9pSfbr8tKc0jccRVe3U498UGw%2FxOSmUhz%2FPMqC%2FTDs3ZU5a47j2lxp9tJ%2FHpa4gxCiZr1vATSpDh1iIGRdpxm5If7Zq1ZEa%2F7aIYTvSH4XtEzSYoLj2SYPoQuWYQze07m4TnmV74difGEcbieTHjL2sBvWjPSE6hRGrgxGL2ln3LoCf5A3%2BpOfO0OwQaDk8EaGqTwYYnpzqLv09adeeuI5gpHBNTlKtQHo80mk7a%2FfKubA152jCWmJNkswo2%2FhZ0FUGAUlNKpqpi0vDKkAOLkfRouSToiplY53aWCNHZsH0pSc4OvG1VUwMnirYAW8X%2B8HCm5MZHnXCVwx3YdyLLeggmBlU28IVOJ%2FJ3jYMTXHZ%2FGCJ6TwSHvT%2FGD4Lm38nda1UwztjmDWCLldYHr7q5q7d8QU1V4fl3lk5U4kjuVy3awHPh4%2F%2FCKevhC8excTLx0LsX6cDTfTBA47t5q1YCqNkgGdFhzsOPN7qhK3I9pMxIaNVqz1YX%2BbScxuOYlvPxWdlWDppa8bo3vX6hxbSs7SCLN%2FdFl2ayXsq9XC2UNucj8tx4IQLObtHP5YlReys8aga94bb7e%2F4F4297icPpamETeko8IAkMN3G774GOqUB2mr%2F2ueglg9mvrrnV9sG9w7q0k01BMGtXPd2D7c4AJ4dm2CwHWmByD%2BiozCBaiUlAQsIdhAvuijkskMa%2BNGqGeQmTyAKz3SCIOnwDBRY9zykYWOGNObXgX0wX7lABSr4X440NwTAdKjujuhsIFprE1kgOX%2FooPv%2ByVC%2FbDH%2FYE3u1IGfCkALQRpbyLO1Osz2Xe%2BcCrHy%2BYRIiPIA9dzOCPhoGPcR&X-Amz-Signature=53492665a85243b22d5dcf6e99d027f2af7e145680d7b6ab84b288d49ec9ed54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBIWHFZD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCLwaUbChP%2FeBYkgevUkAUL29rS3kS1MSG%2Fw6SX2EsLeQIgWJKvNS%2BClDegLMJYBYl1kXSXVMOXwwDTF3zu1N5sIlEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlfuCDcaqPjWOyYbCrcA%2FLT5LI9bXpuvjQRo%2BpUoTNbZr3XbFkOxzz8RtVULLDTG7OFnJFnANfqaEr37QkcQh%2BxDv25OMD7538%2Fb6l4gZpy357Hu7K0X8v8bmcXTUKFb95AuH3B1zo016IFkWk1sROgXkY59RGlYCXCKTEbGRWOw89a0eEIamR64hNCIOZr3LDeaSczpEbmVXq8wzIM8rp26Y4fNBawOXA8o3iOOGsZZjcCD32eZ4yge5PfC31NTzaagF9Fg%2F30x3WPPCk%2BqS5sOIb2VLMjaYaZOWNBulCnTPq3NLWAUG2A7rIIMDicYHfS19oaRafChMsspHy880qnrepYTSVw6jGToHxsmDy7OE0waDHRRuoB44zbIPL1lZjOdfrX2rCRXpOHmuHZHyhV9h7C72x8XAOXlopLUx%2B6ytzOFO5NWqP6eDnXKu3oHXYjxln1xVUfdCvJ2dLVSqSkSGBSqtZzVUISTuy0ZbpzNg6fSecaIoDVE137FqQFcqv0ysWXYmp0RmMPO%2FFS6hzFZcyIB1LGzH3gXo0TTDwZR8%2FxM6SP7iO6lc%2FOOJ6J0l3v9G%2F%2BBk8Ea%2FsCQfqq1HAfgxZqKgDZ8AJjGB96%2FSQy1qmONObCW1JUpSfLrDPRiTXh011iZjgHtMYwMK3G774GOqUBi0mBxL2vzdHziCS4EQ8Bcwqoge4CD0EZeHgCmG%2F4BiyNsz3zBAjixhic3FGPuxm6OwHqWdWxBXfllHtsg%2FUxsHfVuKslzK4I%2FZw9birBbxHPv5Lt8HQ2VvVsMDV5bVDUMAW5zov43%2BxiEugn2DJYG2U8LtLZEvf7KqAM%2F2kbTA8qedFM%2Bxrrxc7ArZGDuMERBK8pvTIwvRO%2BcoZTJOwepXw2cGSI&X-Amz-Signature=c4e4d7dcdb94c24740186c2dc2e4242acdabdc18490e3dc3597c90556d4ce1ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUGT6W6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICv5%2BPrflgT0MxBtGrwyyoS37mLdABayFfF6uR2mVFNNAiEAs4S5MWpz0FfrB4F21fqjAeGiZu6Pm667ZEjh125pMNEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUubdx6%2ByH%2FQ%2FTC7ircAwiOTdBPOB%2B3HR3q7LgXOyXzUvoB9IEe70PuWknvRF0btI4GprbCRzHrs3TdAC%2FmqNfgdhI9LEURjuU%2BhhOvvW1KMqDmQEMHFBcN%2B6CmgHucCgl%2FreqfTo86VCExjxwiCeezQ0ECB1Eee7P%2BHRgadd10v4Rp0wb1UIZYswJygzpOi8hh4YaNhCUiMxOYyrjG%2FsrBGIvp2LKA07wTSWXIBw4nb4zflTLAAVea9CJCjOpk3gjXpq9fm0bscPVI4UC46GsgLppbGKtYMjEWhE62QaJAoJiBX0S7PB3avrKOBnWtw6tkJEqueWo7LNsLY7xOKIr3gpDxMx%2Bio4jGgLQW85gKB7kSSzP1aHDRvzAH5jZjIO%2FitrYFQTzSKtt5UVopJ2IrilnkkphsfgqXYxwP2RH2zw%2FNjsZnORSdDVh42wC3vhI%2Flh6atmd5dNFpW7mY4M5WkwGEDe1wCyDSUhfEUnNxX3aZMy0J04NUhUkSXMxmrz83rgGxCkSrxnY%2Fu7MG7yMUV8fPTdEXJm8aaO3S4b1yL64NpAtu94oWDYrCBGE7Q9%2F8l%2BKAHdfD8tPXa2jWx%2FcnrADXUK5SKfBb2QmNhITrSfeG1yQNI1V0HF7uZXPEtj7cvOo3oxHeK54tMLDG774GOqUB9RnhHjnY2TsyJ%2BFbRuFan2mgx%2BFILLPdA57n4hmBb87qrXsjL0lI2QpXKnHZJEN0sCtE4fq%2BvTw12LMoVWPtqJBquSQOrWTvXG%2B%2BFfpdmU0mmQQH4QpLw5i7xur3y0ubkS%2Fo9RPXAnysFtv78Mj%2F3EKR7UD%2FiIt2rufYXA6rMoecHECNYbjCzvo5bZE%2FZ3y7qmXIErGfbLZ%2BUFlSKBVvsCFXENPg&X-Amz-Signature=c13aa76990659f863ed6b774ac745e29a2cb0e19ad525ed7c26d8f37b7078ce7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5T27TSZ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICJbmzODbCdJPsXXu%2FpoN9hG9pqWZHhwWwxODs180TxhAiEA8xOrpwspJoB5RMaIAd%2FmfxNIwgminFEWoQjQ484egKwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ9DooixIvtzShY7CrcAxBxbkChClb1kNtDHhFHQce%2BrI2pS9pSfbr8tKc0jccRVe3U498UGw%2FxOSmUhz%2FPMqC%2FTDs3ZU5a47j2lxp9tJ%2FHpa4gxCiZr1vATSpDh1iIGRdpxm5If7Zq1ZEa%2F7aIYTvSH4XtEzSYoLj2SYPoQuWYQze07m4TnmV74difGEcbieTHjL2sBvWjPSE6hRGrgxGL2ln3LoCf5A3%2BpOfO0OwQaDk8EaGqTwYYnpzqLv09adeeuI5gpHBNTlKtQHo80mk7a%2FfKubA152jCWmJNkswo2%2FhZ0FUGAUlNKpqpi0vDKkAOLkfRouSToiplY53aWCNHZsH0pSc4OvG1VUwMnirYAW8X%2B8HCm5MZHnXCVwx3YdyLLeggmBlU28IVOJ%2FJ3jYMTXHZ%2FGCJ6TwSHvT%2FGD4Lm38nda1UwztjmDWCLldYHr7q5q7d8QU1V4fl3lk5U4kjuVy3awHPh4%2F%2FCKevhC8excTLx0LsX6cDTfTBA47t5q1YCqNkgGdFhzsOPN7qhK3I9pMxIaNVqz1YX%2BbScxuOYlvPxWdlWDppa8bo3vX6hxbSs7SCLN%2FdFl2ayXsq9XC2UNucj8tx4IQLObtHP5YlReys8aga94bb7e%2F4F4297icPpamETeko8IAkMN3G774GOqUB2mr%2F2ueglg9mvrrnV9sG9w7q0k01BMGtXPd2D7c4AJ4dm2CwHWmByD%2BiozCBaiUlAQsIdhAvuijkskMa%2BNGqGeQmTyAKz3SCIOnwDBRY9zykYWOGNObXgX0wX7lABSr4X440NwTAdKjujuhsIFprE1kgOX%2FooPv%2ByVC%2FbDH%2FYE3u1IGfCkALQRpbyLO1Osz2Xe%2BcCrHy%2BYRIiPIA9dzOCPhoGPcR&X-Amz-Signature=fb8ed9eb86a97c1dd432a1b38bccf0818368e076c80ecd2d06d911188508f486&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
