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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP64CC2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARriI9Dk4mDAwf286gpqMCltPj6NdIbAa2tXotaCIvnAiEAkBQPX3lReOy%2BKQkdE9O7bH8%2B%2B4mRgXTEmkNX9pH0JKYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKW0JYwFaRxDrwpGyrcA7W2EB9bUi9KcCsO5SEixAeghoKPHAk%2B6S2holP2wUjPNpOBoPo9iA65fneYFzccltnMf6W8PfW8Hem93xZ9hq168bfFgAbjxA3LKdXzFD8nQC9L456CmJgKQLKrG%2FjmOjxnBqmh%2F2gywEt4FrMZD2CeWFVoSkxAmIkpaQ%2F%2BZAZqsZGUufZrLgpkO96HpCrAV1TPYhESW9HrrmDDuOxhtdZob3NDTcEHGqViT1fM57vnt4ZoVcyPO7GcA5j3oSWudut1ViCHXJ5HbrQ1gI5vPl203HUhlXMyFoh0EJctYh6yeC2KhCrBybyQq7DfG815ZjkyGycQz0D9B%2B3bIwNcdTmm84h6LVS%2Fcz3GkOtRIaLQ2x%2FXJO%2F9FhjwOWkmh0HIYURGD6T9tGyfl%2Fo8nbQ3thRczePkRdyOlcuqARAwFd3x6yH8yDyLCrHDYZ%2FaBqHHZMQ0d1pSU2QzxwIC4qEvLTpuDP48z%2BLbfZEFeWMFaFlz%2FKyTOTuhx1EanTV0H9Xfvu0ki8HxnpR7GPc%2B8%2FAzPwmTTZ7Lo0sAiz0iWZgr3BMet7BHMd98y%2FKLP2x1lUO13Z%2BeGOZ%2F9DlEUtuY6iYFLnORllmaJGXZb%2F5wnk4XoeSKtrBOrbO%2BjFDZIWSPMN23%2FbwGOqUBL00pP4zBISuj5tI8EaimFqjPYTI%2F3HGfkZqDh3dUod8EMEGQ%2BeTGWBovezZbngV9NfKyF%2Fo687UFjJ6WQnkzvMY2pWPvyEmBOLzhR2AOcR%2FHpCJFrd1zbOser19Xqq1jApQOHOMKrUUL%2BCHB7VtBC2L1KxwiE3hSQ0MdQ8xGy0ATUU7OkTd78in1mMOCwP29zzurzbPFTLDqxjG6fNTi18Gy0yQP&X-Amz-Signature=30f7d8179c9cccba3631582a0ac9bf93a3c674a65277424a5c28c49198205aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP64CC2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARriI9Dk4mDAwf286gpqMCltPj6NdIbAa2tXotaCIvnAiEAkBQPX3lReOy%2BKQkdE9O7bH8%2B%2B4mRgXTEmkNX9pH0JKYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKW0JYwFaRxDrwpGyrcA7W2EB9bUi9KcCsO5SEixAeghoKPHAk%2B6S2holP2wUjPNpOBoPo9iA65fneYFzccltnMf6W8PfW8Hem93xZ9hq168bfFgAbjxA3LKdXzFD8nQC9L456CmJgKQLKrG%2FjmOjxnBqmh%2F2gywEt4FrMZD2CeWFVoSkxAmIkpaQ%2F%2BZAZqsZGUufZrLgpkO96HpCrAV1TPYhESW9HrrmDDuOxhtdZob3NDTcEHGqViT1fM57vnt4ZoVcyPO7GcA5j3oSWudut1ViCHXJ5HbrQ1gI5vPl203HUhlXMyFoh0EJctYh6yeC2KhCrBybyQq7DfG815ZjkyGycQz0D9B%2B3bIwNcdTmm84h6LVS%2Fcz3GkOtRIaLQ2x%2FXJO%2F9FhjwOWkmh0HIYURGD6T9tGyfl%2Fo8nbQ3thRczePkRdyOlcuqARAwFd3x6yH8yDyLCrHDYZ%2FaBqHHZMQ0d1pSU2QzxwIC4qEvLTpuDP48z%2BLbfZEFeWMFaFlz%2FKyTOTuhx1EanTV0H9Xfvu0ki8HxnpR7GPc%2B8%2FAzPwmTTZ7Lo0sAiz0iWZgr3BMet7BHMd98y%2FKLP2x1lUO13Z%2BeGOZ%2F9DlEUtuY6iYFLnORllmaJGXZb%2F5wnk4XoeSKtrBOrbO%2BjFDZIWSPMN23%2FbwGOqUBL00pP4zBISuj5tI8EaimFqjPYTI%2F3HGfkZqDh3dUod8EMEGQ%2BeTGWBovezZbngV9NfKyF%2Fo687UFjJ6WQnkzvMY2pWPvyEmBOLzhR2AOcR%2FHpCJFrd1zbOser19Xqq1jApQOHOMKrUUL%2BCHB7VtBC2L1KxwiE3hSQ0MdQ8xGy0ATUU7OkTd78in1mMOCwP29zzurzbPFTLDqxjG6fNTi18Gy0yQP&X-Amz-Signature=220707c1f8280001edb4f73dcf082e0ec4fd942939bf4f4bae1e5ec6ef45a592&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2BURAJI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjaZkOr%2Fmrg7Wf3Q3M1RdI4Vf0ZWEvQZAhaOR6LteneAIgbWbbU8yZi6ICbZ%2Bp2exKZ5ng7uW%2FHx1Pyo3g9jULAjAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4O9XYwoB3cd8WCLSrcAz2kafItuMCPAMuXr3KskH%2BH4LAcJiPJpC3y1T4aPw480W2IDvPmbmFwOYnM34GmBj2EkvYD9BsV1abKf2JujtwGQ24AEROu8TIJy%2FD4I4H5RSVp5gj3Vlrpb81NfVrxuy20KDnzvw5fLNgWt5aQBlit%2BJgUTtABbAOh6auPQiKhzGtjJhLqm%2BXz7hSuCqex3ebEuIsizSapn63Deo53w5paobE4jKpL1gUZO2riw8XLTnbsuQoTv1ofU1G5oMgS3VrVbIzGaKiJUYk7OpD8FAnulrnSITw4bTi9JMcVKJL26QV4NErBmxFOFSwv0R%2BEEfg1UJW17PKUMFdtrxWo78kGnC0Vggu%2FtTp6AxDNSBuwsLbGhHy4v7IJzzdMRS6alLjBwYElN5AwSNDXMiNLFQ7svxwgUa3wSTQMue%2BzZhYfo000Eni1cP3zxvl6u7Q04hdUBEwhkeT8%2BYWGhQXfBcNwxZ1Lq1a%2Bz%2BO7DQml9sOefWhNaGNucjezBHRF0HOjuWPUJh1pxfQlcylfrCdUkA1jNTqz9%2BBHIPJPgKFZ1FUQoznvtkoCjncCliLgPE5zOwr97sMUymj8FrCIAWf55PQCHsWJitN%2FNKZs45Yaep8FK25e0mfyPB7YCvK5MPDC%2FbwGOqUB7mSMMxHfMlJ8PGhtK%2FwGNZKVITb2vNIfnM6PGMwHeH9NnKXGgNabj1E9Z2Uzi%2Bk7dLWzAjg5jxjDMSeq1%2FUC9hRXRCXIRd63RvWRjEilORkp2Q7qE7wxVNga0mJ2nfc0KuMNi9FE4mLRBULDyAQFuJP%2FKaL90xo41%2FVi4uTaBiygohA1U7R48YcSc6aoIcK5MFj1AhHyCVRP6cuGkz%2B%2B2%2BcSVLyi&X-Amz-Signature=6b30f9b51e84f0222b6996ae4d094448bc517af824c2aa24c623af4d50143ea6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5PCFP2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBV9dQ7kBzsW8Xv6yQwNL7vf15MyE6zlmIN4ZXK1eYIOAiEA6F2UJAEl%2BjlbKKcmM5YBw3rbqH9DYPbObvAyeAir500qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3cI%2FRjTA1AuPrBCCrcA34WWtsblySbNuJpCxy6DBSK4JovCCm4jhHDDtahOwg6%2FZEvJ3h%2FZuIczfKGDI8GrjGzglguBWjPStbiS0p1O8Hi5iVLsDjz%2F5TVSOURQ2mGqO5hwGgR1hCLNOlfMPpfZVtxrcqgmfM%2Fw8ejvx2pwjFTaQj%2BP9AiHNL1DLIiBxcE6mIcjsR1FyEnKLlTs7eZUrNNbwBm%2Bk7F8FRfbwP9gSHXdlaGav7dKHt2mI58ywZs%2FSOs5QP7eoEhw0vyRBJzntQxbT6CCbAUzzvifKJ1eYFYYCT%2Fjwi97It0d55nmW2SY%2FfuWwvyzmYJC%2FSQWb%2BOV5oGO4covTmJw0uGjy96ghPHfmyQW5Olg4zzXiNt3Nqjb5EKaGP3DKAz5jRuxWxx9n8sE%2FeHz0F8kaS8aNiAB6n%2Fmx7DDcyDh569RcFCWsoji21v19AO5m%2FapfLbxVBWdljTL0NKwTPCxoswqMq%2BJRirBtZD0GHoUz1zgFdkYNLUsVFcDzM2S8lH54pQlfhx0c8onZjz7a2uduhh4UuUTE4dyP8ziuWSNPxTHNHKmEFMNHwW7%2FdOMoKUlbuTlruWrc%2BMN7sSt5IN2Xi2yxgcZUoRkKaEbEom3GeoQJvcBmdIw7n8Yrfjnz3AHc4ZMLLC%2FbwGOqUBkrh%2F1%2BzQ991Mv25iutSTb1kMTma2Ybh3ym0xv3JRjNAs7xSZ9pO9814j6wCLbWEkbYgjAnXruIQb9CwJxTLGla%2BHc0qHJrnU1agSNE%2FsT%2Faad58%2BVr437TxVERgc16GPAumLd9T3hnfcldWDrWH8klM9Me6JAQftBRx2Fwwas6GUL79LYzuUUGTB%2FXhqU73xhLd49dM84blfj1fwDttHeAXcNcc%2B&X-Amz-Signature=5d0b7444942e19cd9a09e4f8928cc25242ca7bb621741dd2e3ea58c81fe3bf33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRP64CC2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARriI9Dk4mDAwf286gpqMCltPj6NdIbAa2tXotaCIvnAiEAkBQPX3lReOy%2BKQkdE9O7bH8%2B%2B4mRgXTEmkNX9pH0JKYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKW0JYwFaRxDrwpGyrcA7W2EB9bUi9KcCsO5SEixAeghoKPHAk%2B6S2holP2wUjPNpOBoPo9iA65fneYFzccltnMf6W8PfW8Hem93xZ9hq168bfFgAbjxA3LKdXzFD8nQC9L456CmJgKQLKrG%2FjmOjxnBqmh%2F2gywEt4FrMZD2CeWFVoSkxAmIkpaQ%2F%2BZAZqsZGUufZrLgpkO96HpCrAV1TPYhESW9HrrmDDuOxhtdZob3NDTcEHGqViT1fM57vnt4ZoVcyPO7GcA5j3oSWudut1ViCHXJ5HbrQ1gI5vPl203HUhlXMyFoh0EJctYh6yeC2KhCrBybyQq7DfG815ZjkyGycQz0D9B%2B3bIwNcdTmm84h6LVS%2Fcz3GkOtRIaLQ2x%2FXJO%2F9FhjwOWkmh0HIYURGD6T9tGyfl%2Fo8nbQ3thRczePkRdyOlcuqARAwFd3x6yH8yDyLCrHDYZ%2FaBqHHZMQ0d1pSU2QzxwIC4qEvLTpuDP48z%2BLbfZEFeWMFaFlz%2FKyTOTuhx1EanTV0H9Xfvu0ki8HxnpR7GPc%2B8%2FAzPwmTTZ7Lo0sAiz0iWZgr3BMet7BHMd98y%2FKLP2x1lUO13Z%2BeGOZ%2F9DlEUtuY6iYFLnORllmaJGXZb%2F5wnk4XoeSKtrBOrbO%2BjFDZIWSPMN23%2FbwGOqUBL00pP4zBISuj5tI8EaimFqjPYTI%2F3HGfkZqDh3dUod8EMEGQ%2BeTGWBovezZbngV9NfKyF%2Fo687UFjJ6WQnkzvMY2pWPvyEmBOLzhR2AOcR%2FHpCJFrd1zbOser19Xqq1jApQOHOMKrUUL%2BCHB7VtBC2L1KxwiE3hSQ0MdQ8xGy0ATUU7OkTd78in1mMOCwP29zzurzbPFTLDqxjG6fNTi18Gy0yQP&X-Amz-Signature=299d80a2a3b8718b06bd8dada8960984d2344f135cad480bd4b5d6b24c110366&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
