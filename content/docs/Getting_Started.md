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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MO7YWD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGAumnAE5sdqP0w0i8ZdYnhQYC6MUThni1aMs87aJwEuAiBYRTysJvNON1HngosG3X7QR23q44TQ1Otc9obgqvnr6Cr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMM6ipe71NaNTTopAcKtwDM7XxT%2F8vaTLzt6bNfbt9UX3Lx%2BMG46WXPQuboiyiMq06ng03O6KBOxVQLzwhYF5OxzFI7w2u808MSl%2BebW76ecf9OhwsHYQ2zOp6%2FhoArKph7T4ghEgrCVAYDRnNaNnXUHZ4HE8rYQZARGQHO9zBopFVAhYVCVcNBc4DDd45P4CRIjEDK%2BWpBkgKhS3LLwMcBn4ZELoiPd2r72CSl9tPN9SVSGis60k8JfWvh9BFHe5YslpII5mZzSXgh19wA6OMayytd%2FIzdT0dqnHIZ%2BGsA16BoSSmktYNuA2hnhDOJIok2V0yhRgQW%2BBv2dmCUHNGCMREtXTvqZ8c4cjS8Ktbw24aF9tRL3x6rTV0vhLQu%2F6lY51mdYH5Whgm6JoJmidDU3JIfTG3CxDztOzJzAReaiJXmx0kmoVuiCbMGYMlYsw0VDiF89x%2B6F%2Fd7uozfb9zKQUuLMpdyM3K4DXjBTUlYKnw2nB2%2BCdkYPC23udzG2rGhvJajSO814kCd2AMRg5trOq3v35FXacvn%2FaEG8EtdRbEsOs0S6k4CVswHXJNQ%2B%2BA2RJbMAtX4zs5h3M%2Fagf8RNbRXpEqg8u76Njz2PkMJOLXjemcZKN33MgN4pJ7fZLR%2BwjCs26wvj%2BVjHkwk6LkwgY6pgEV8NazR2rWk36eZq1h%2FTYS3PVLTO1vD6oiWy0IWjItE%2FZB49tYKvRmYb23qtMOUkt9ZCL2it%2FFCGEm5mOB%2FrHiPfFGjpfd%2BI4dQT%2BA%2Fs%2FMC07ytkFYSkshIg7rWSmiPuTAVL%2FdoI0uwUoAivf6YfeF8zSEF3ZFEDCM3nWBEm4xVAF9OjB7%2BwRRetYlmbpnZqoQemTCp50GGzgp%2BJtXjRBfUcnt%2BCP0&X-Amz-Signature=72a4300a8b5d2909766d2de63bbfdda8448bd2e7f6d762a291374a5314cc6378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MO7YWD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGAumnAE5sdqP0w0i8ZdYnhQYC6MUThni1aMs87aJwEuAiBYRTysJvNON1HngosG3X7QR23q44TQ1Otc9obgqvnr6Cr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMM6ipe71NaNTTopAcKtwDM7XxT%2F8vaTLzt6bNfbt9UX3Lx%2BMG46WXPQuboiyiMq06ng03O6KBOxVQLzwhYF5OxzFI7w2u808MSl%2BebW76ecf9OhwsHYQ2zOp6%2FhoArKph7T4ghEgrCVAYDRnNaNnXUHZ4HE8rYQZARGQHO9zBopFVAhYVCVcNBc4DDd45P4CRIjEDK%2BWpBkgKhS3LLwMcBn4ZELoiPd2r72CSl9tPN9SVSGis60k8JfWvh9BFHe5YslpII5mZzSXgh19wA6OMayytd%2FIzdT0dqnHIZ%2BGsA16BoSSmktYNuA2hnhDOJIok2V0yhRgQW%2BBv2dmCUHNGCMREtXTvqZ8c4cjS8Ktbw24aF9tRL3x6rTV0vhLQu%2F6lY51mdYH5Whgm6JoJmidDU3JIfTG3CxDztOzJzAReaiJXmx0kmoVuiCbMGYMlYsw0VDiF89x%2B6F%2Fd7uozfb9zKQUuLMpdyM3K4DXjBTUlYKnw2nB2%2BCdkYPC23udzG2rGhvJajSO814kCd2AMRg5trOq3v35FXacvn%2FaEG8EtdRbEsOs0S6k4CVswHXJNQ%2B%2BA2RJbMAtX4zs5h3M%2Fagf8RNbRXpEqg8u76Njz2PkMJOLXjemcZKN33MgN4pJ7fZLR%2BwjCs26wvj%2BVjHkwk6LkwgY6pgEV8NazR2rWk36eZq1h%2FTYS3PVLTO1vD6oiWy0IWjItE%2FZB49tYKvRmYb23qtMOUkt9ZCL2it%2FFCGEm5mOB%2FrHiPfFGjpfd%2BI4dQT%2BA%2Fs%2FMC07ytkFYSkshIg7rWSmiPuTAVL%2FdoI0uwUoAivf6YfeF8zSEF3ZFEDCM3nWBEm4xVAF9OjB7%2BwRRetYlmbpnZqoQemTCp50GGzgp%2BJtXjRBfUcnt%2BCP0&X-Amz-Signature=f4db57c45afcde81a74c9451f2fdfc979f3f419a4dba6b81a2d3b060889c8f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MO7YWD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGAumnAE5sdqP0w0i8ZdYnhQYC6MUThni1aMs87aJwEuAiBYRTysJvNON1HngosG3X7QR23q44TQ1Otc9obgqvnr6Cr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMM6ipe71NaNTTopAcKtwDM7XxT%2F8vaTLzt6bNfbt9UX3Lx%2BMG46WXPQuboiyiMq06ng03O6KBOxVQLzwhYF5OxzFI7w2u808MSl%2BebW76ecf9OhwsHYQ2zOp6%2FhoArKph7T4ghEgrCVAYDRnNaNnXUHZ4HE8rYQZARGQHO9zBopFVAhYVCVcNBc4DDd45P4CRIjEDK%2BWpBkgKhS3LLwMcBn4ZELoiPd2r72CSl9tPN9SVSGis60k8JfWvh9BFHe5YslpII5mZzSXgh19wA6OMayytd%2FIzdT0dqnHIZ%2BGsA16BoSSmktYNuA2hnhDOJIok2V0yhRgQW%2BBv2dmCUHNGCMREtXTvqZ8c4cjS8Ktbw24aF9tRL3x6rTV0vhLQu%2F6lY51mdYH5Whgm6JoJmidDU3JIfTG3CxDztOzJzAReaiJXmx0kmoVuiCbMGYMlYsw0VDiF89x%2B6F%2Fd7uozfb9zKQUuLMpdyM3K4DXjBTUlYKnw2nB2%2BCdkYPC23udzG2rGhvJajSO814kCd2AMRg5trOq3v35FXacvn%2FaEG8EtdRbEsOs0S6k4CVswHXJNQ%2B%2BA2RJbMAtX4zs5h3M%2Fagf8RNbRXpEqg8u76Njz2PkMJOLXjemcZKN33MgN4pJ7fZLR%2BwjCs26wvj%2BVjHkwk6LkwgY6pgEV8NazR2rWk36eZq1h%2FTYS3PVLTO1vD6oiWy0IWjItE%2FZB49tYKvRmYb23qtMOUkt9ZCL2it%2FFCGEm5mOB%2FrHiPfFGjpfd%2BI4dQT%2BA%2Fs%2FMC07ytkFYSkshIg7rWSmiPuTAVL%2FdoI0uwUoAivf6YfeF8zSEF3ZFEDCM3nWBEm4xVAF9OjB7%2BwRRetYlmbpnZqoQemTCp50GGzgp%2BJtXjRBfUcnt%2BCP0&X-Amz-Signature=d8fb59b2c6959e212c4ddab6de9fa6989fc96e205710d7303598d77034608cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U623FEPX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCsCBYKrbwqk6f%2F%2B%2Fhrf9G1wJIlJvf7RezeZuQNScnl6gIhAJf7vQZbbibYQYarsi4kpeyniaN7KR76FUTW2YIzG88%2FKv8DCBMQABoMNjM3NDIzMTgzODA1IgweoyjRm3AlTyr3Eecq3APxWttC9B8ZqkuUc7Z%2FuYHu5oKz0NWvDZN%2Fe8YlG6NmcWJLJw3LOivezAzNHzVmMKHQ3vuB%2F9ZYIgoadw9%2Bkim2cMT2MjFoMfHdfFyLiiQKy4xkS59UJBSD8tDUSxUu3HuGGmxJwCqkHgTiU18R3wsv6uLtrJlLksR%2BiZUtVX05LKpAkX7MfU%2BcQyoXNqEmAQBz2inWX5Otl7DdIOATq0ClVNIw4C%2FpDAbdKBI0RpJggvp1Vn0Pw%2FATRpJozou7srE00Rb09gXaJh1cBR9rSPTabfaufs7%2BujfDdYvaWsTZaAFEfMoCg2hdxS7GKOOaFvb7MpR4sOoHwyVk%2Buq2DPuw4Du7DXxoQ2VOfwEEkN1NYIMJ%2BhdTK0sBkIXi58mR0PDh1btXZesbGZFBYdw%2BCSfeJv9%2BPMZDgFa21bN1BbIej37Ncix7zUNLloNnZXHRtMxrtUnkkbx43YGXVt%2FuHFcE86aLrDZsg%2BJ39nOFv78IFcmv843EbLZTm4h7Pc4HF50aVVWMZ6qHVFqXsKPF7UcRbPCVCn1e%2BDIo5HEfGuFP1kmlx6f9wHI5i%2BtZfpzy83aKb02eFKYnO%2B%2BSWQAgcUB6INN3xbVgXWubQKJVlcsN0bQ6AD1Ea4wnCOA8wTCT1eTCBjqkAdu9wbcnrOFNeWSWr7nNwP2p82qbxgKu5DqbengJ2Xy6aVF%2BvkA1hTQ7lr6VN0XN5cC3Z%2BEJRJ3z5Hn3fv0NmI5BG%2BNW0NYpeKon%2FVKTeWo0BkvL310hwnH5BVml8T6%2BlGoFhBZ2crHdq6mTL5F6kwiUdi4WAdgjmUPZ%2F1VGchxk9PMwiaQ%2FcblJ9p3suBbuAILSCrHw7OfrK1GbvlJm21L3CoXK&X-Amz-Signature=0123c579cc7877cafc2e4e243a53cd7cfd59ef0a49c5406c1fb364e4d886f77f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XPGJBTV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIAWWYSjZD5vQE2wtQV1owFW3rWXZ8sC1vP1KXRFcz1gRAiEArFTU3t5p0odvJU%2BJyFL7w3VJEEyDCn%2Bd3TMnt4akJiAq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDC%2FxyrzcZlWwB4L0UircA5JF%2FC44OsPBCRY%2BAfkXRSgo24GY7CxUhTNHVH0ytpdlDPh7bDixEC3d0XdOQzWCTcVPS3pXlxOIvzU2VuvJWDE8eGtgKp4R6lrpmTI%2B6bWViEukbk67I6Nxi2d6JlwSZJXwRdlAyUkZqghV1TeZsGvkYhbUmS0%2BIS1pfcSia4uqiM1yN2x8bDwwE0gnm3RFCS7vk%2BHxBt72nIINNFGUe%2BaSF0vGjgmiEWHDqnULxVYwvEbIWQqas0vWVEo6qa1SIHReYrmVmp3n5%2FPT9RI9ysjZ%2B0wKSpA2hESYmHfDqKhtWRPuZsBMF4ciNnLedAzVaez4Fh1I88CXwyO%2FUMScQX898Yue1%2FrAeXX33Ht1Tt1ZXR43ulCblhYleMwFaXKLdDUEKpX56JsrU%2BILmypDcjMf0FOH07CoSmWAzNig7Ez54MsOzJAnjkTfKrsvO%2Fl9M%2F4RCmdFTxFGWg4dNf7GYM0nWJiuKxPvooHaF0OXudC9eBybFSoR%2FivV3dw2F0NrUu69E9omXWqKK5Xj5C%2Bc3w8bv2uX6AlItAUcoun5q85%2FFjlkYF4iOdGJfSZ13DcvBz3IbPeeFhjYZzR2MfPaYLj1EjOen6nJulmQaILMEBH9qzNejooz7Pc5bpfaMPGP5MIGOqUBVlFe10XiAkJwPM5%2BLdcocTYXT5oOQg2gRJmewrYTAesasdwPO%2BXX7%2BboGnaobbjgj2Z%2BcC9W%2FJMoNV%2B%2B091dZjhv%2Bi%2B8DlonhKckKz%2F0u9odcNdTntkd9usEmNoBApwNH5Kv0SOIN7N9kxPRRNHZzheNHIZl72Mzxq4ZzSPiz%2BPGv4dSrRlsrKFzzPD4emdr2uYugQEXToJw%2FPBLtIia1zXKK8fJ&X-Amz-Signature=34221d6624c940ee47ed5d66c9c67c5783892c00a5720bc1d2b8c760ba4e2fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MO7YWD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGAumnAE5sdqP0w0i8ZdYnhQYC6MUThni1aMs87aJwEuAiBYRTysJvNON1HngosG3X7QR23q44TQ1Otc9obgqvnr6Cr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMM6ipe71NaNTTopAcKtwDM7XxT%2F8vaTLzt6bNfbt9UX3Lx%2BMG46WXPQuboiyiMq06ng03O6KBOxVQLzwhYF5OxzFI7w2u808MSl%2BebW76ecf9OhwsHYQ2zOp6%2FhoArKph7T4ghEgrCVAYDRnNaNnXUHZ4HE8rYQZARGQHO9zBopFVAhYVCVcNBc4DDd45P4CRIjEDK%2BWpBkgKhS3LLwMcBn4ZELoiPd2r72CSl9tPN9SVSGis60k8JfWvh9BFHe5YslpII5mZzSXgh19wA6OMayytd%2FIzdT0dqnHIZ%2BGsA16BoSSmktYNuA2hnhDOJIok2V0yhRgQW%2BBv2dmCUHNGCMREtXTvqZ8c4cjS8Ktbw24aF9tRL3x6rTV0vhLQu%2F6lY51mdYH5Whgm6JoJmidDU3JIfTG3CxDztOzJzAReaiJXmx0kmoVuiCbMGYMlYsw0VDiF89x%2B6F%2Fd7uozfb9zKQUuLMpdyM3K4DXjBTUlYKnw2nB2%2BCdkYPC23udzG2rGhvJajSO814kCd2AMRg5trOq3v35FXacvn%2FaEG8EtdRbEsOs0S6k4CVswHXJNQ%2B%2BA2RJbMAtX4zs5h3M%2Fagf8RNbRXpEqg8u76Njz2PkMJOLXjemcZKN33MgN4pJ7fZLR%2BwjCs26wvj%2BVjHkwk6LkwgY6pgEV8NazR2rWk36eZq1h%2FTYS3PVLTO1vD6oiWy0IWjItE%2FZB49tYKvRmYb23qtMOUkt9ZCL2it%2FFCGEm5mOB%2FrHiPfFGjpfd%2BI4dQT%2BA%2Fs%2FMC07ytkFYSkshIg7rWSmiPuTAVL%2FdoI0uwUoAivf6YfeF8zSEF3ZFEDCM3nWBEm4xVAF9OjB7%2BwRRetYlmbpnZqoQemTCp50GGzgp%2BJtXjRBfUcnt%2BCP0&X-Amz-Signature=f8251cb5a978876f7c1253927099147d1e05b7fa6aedb6b2a1b15cd49cd2d094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
