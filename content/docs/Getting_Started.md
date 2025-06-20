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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q4BCNOO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FkWbb8MWoh0yXW4IJNnGSAtS631uePOWNJb6nQYQsfwIgSdUa1GuurIwkOwtA77SsvtbjJDLW6VeHTFduwOiOX10qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQVaXz4T6grM2PfxSrcAy9pH8v4615WWzvHfB8B3ex67PYTu7GY%2F8j1%2FOkxFNeyqOoXSt3%2BA8xdZItP%2B70RrCTW%2Bi%2ByKpgLnuP%2FF3qnIKTsOkjzsLme74lFblsNZRjVNdcb2pDjmrX7jB%2BhAqY19SknvISr0oeXHcBjxLRDZ1X2DHP25x7DiI1tRhefKmQCntqVmA8zb1NNQ63ZJfzOUoQfmgnx3LXREsDfFkN5V0QEzaBCupWbdjfrJNa1PQQgJZY5hn%2BxkebVryhchCmx0arGDty3wTFXkbC6ovNpwHJnmE3wwhflpB9DDahL%2BKOv83n416uLNZE2WWa142yVKO6igelmimkoRw0RkCLWT2mmb5590fvRfVc7p3x8WfryIKQ3n3PJq5qwAU09sKN%2F7TaYpjJc1B8dUFJjnHNwoyJcYTZNxhheDWIev91rQeHg7ApZZ13Roynkx6Xx4ofgWe15xMyeM5Ez2Bfu2rp6z%2FUTECVR3ua8kjAjC1frA9Bklul5ap5udV%2Bv0%2FC66AE%2FvCsJV%2BIAGpYvaDtcuTEompfpyAt71FlavUqiaXFftK2X%2B4qR50eWoNN8QvmMi%2FwLs%2F8TFE8c27A13JuTCZ0pFD1%2FoE9kSYsm1tRri%2B8VVGZFNm0om2CMmiEI3VFPMOuk1cIGOqUBDrb5PGzwyIYhhdsq6rpUBj1L%2BeNNSeA5%2B8gOceAp0ZR0B2f0vyF%2BHj5O4ltgKSiy3g513CpLjFGdRIGjToT1Qumy8TH5hhuzVNXVLP3TX2In893LIqd31b3Cl7R%2B4S3xE71JnhsBeO%2BcQcRQPlhXtW2Gud56l7pVoXUywhR8ZimbiHh4xGwu60Kfyw0KT%2F0MdWSiSer9H0PKW0tFaOn8OqmXoo6w&X-Amz-Signature=2170e42bffa53111503fd9534450da8bcaaa301c7dd4fd9adc73e4cc0d9da30e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q4BCNOO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FkWbb8MWoh0yXW4IJNnGSAtS631uePOWNJb6nQYQsfwIgSdUa1GuurIwkOwtA77SsvtbjJDLW6VeHTFduwOiOX10qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQVaXz4T6grM2PfxSrcAy9pH8v4615WWzvHfB8B3ex67PYTu7GY%2F8j1%2FOkxFNeyqOoXSt3%2BA8xdZItP%2B70RrCTW%2Bi%2ByKpgLnuP%2FF3qnIKTsOkjzsLme74lFblsNZRjVNdcb2pDjmrX7jB%2BhAqY19SknvISr0oeXHcBjxLRDZ1X2DHP25x7DiI1tRhefKmQCntqVmA8zb1NNQ63ZJfzOUoQfmgnx3LXREsDfFkN5V0QEzaBCupWbdjfrJNa1PQQgJZY5hn%2BxkebVryhchCmx0arGDty3wTFXkbC6ovNpwHJnmE3wwhflpB9DDahL%2BKOv83n416uLNZE2WWa142yVKO6igelmimkoRw0RkCLWT2mmb5590fvRfVc7p3x8WfryIKQ3n3PJq5qwAU09sKN%2F7TaYpjJc1B8dUFJjnHNwoyJcYTZNxhheDWIev91rQeHg7ApZZ13Roynkx6Xx4ofgWe15xMyeM5Ez2Bfu2rp6z%2FUTECVR3ua8kjAjC1frA9Bklul5ap5udV%2Bv0%2FC66AE%2FvCsJV%2BIAGpYvaDtcuTEompfpyAt71FlavUqiaXFftK2X%2B4qR50eWoNN8QvmMi%2FwLs%2F8TFE8c27A13JuTCZ0pFD1%2FoE9kSYsm1tRri%2B8VVGZFNm0om2CMmiEI3VFPMOuk1cIGOqUBDrb5PGzwyIYhhdsq6rpUBj1L%2BeNNSeA5%2B8gOceAp0ZR0B2f0vyF%2BHj5O4ltgKSiy3g513CpLjFGdRIGjToT1Qumy8TH5hhuzVNXVLP3TX2In893LIqd31b3Cl7R%2B4S3xE71JnhsBeO%2BcQcRQPlhXtW2Gud56l7pVoXUywhR8ZimbiHh4xGwu60Kfyw0KT%2F0MdWSiSer9H0PKW0tFaOn8OqmXoo6w&X-Amz-Signature=c896259ffbd1694eb14e0adc23a8fe6fa4b6d8c4065211b722bb1357b6ec55c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q4BCNOO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FkWbb8MWoh0yXW4IJNnGSAtS631uePOWNJb6nQYQsfwIgSdUa1GuurIwkOwtA77SsvtbjJDLW6VeHTFduwOiOX10qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQVaXz4T6grM2PfxSrcAy9pH8v4615WWzvHfB8B3ex67PYTu7GY%2F8j1%2FOkxFNeyqOoXSt3%2BA8xdZItP%2B70RrCTW%2Bi%2ByKpgLnuP%2FF3qnIKTsOkjzsLme74lFblsNZRjVNdcb2pDjmrX7jB%2BhAqY19SknvISr0oeXHcBjxLRDZ1X2DHP25x7DiI1tRhefKmQCntqVmA8zb1NNQ63ZJfzOUoQfmgnx3LXREsDfFkN5V0QEzaBCupWbdjfrJNa1PQQgJZY5hn%2BxkebVryhchCmx0arGDty3wTFXkbC6ovNpwHJnmE3wwhflpB9DDahL%2BKOv83n416uLNZE2WWa142yVKO6igelmimkoRw0RkCLWT2mmb5590fvRfVc7p3x8WfryIKQ3n3PJq5qwAU09sKN%2F7TaYpjJc1B8dUFJjnHNwoyJcYTZNxhheDWIev91rQeHg7ApZZ13Roynkx6Xx4ofgWe15xMyeM5Ez2Bfu2rp6z%2FUTECVR3ua8kjAjC1frA9Bklul5ap5udV%2Bv0%2FC66AE%2FvCsJV%2BIAGpYvaDtcuTEompfpyAt71FlavUqiaXFftK2X%2B4qR50eWoNN8QvmMi%2FwLs%2F8TFE8c27A13JuTCZ0pFD1%2FoE9kSYsm1tRri%2B8VVGZFNm0om2CMmiEI3VFPMOuk1cIGOqUBDrb5PGzwyIYhhdsq6rpUBj1L%2BeNNSeA5%2B8gOceAp0ZR0B2f0vyF%2BHj5O4ltgKSiy3g513CpLjFGdRIGjToT1Qumy8TH5hhuzVNXVLP3TX2In893LIqd31b3Cl7R%2B4S3xE71JnhsBeO%2BcQcRQPlhXtW2Gud56l7pVoXUywhR8ZimbiHh4xGwu60Kfyw0KT%2F0MdWSiSer9H0PKW0tFaOn8OqmXoo6w&X-Amz-Signature=49d23a2f58ecd8e87716f362eecb3e8628870f7986683d6500cb934d52a7b37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ2PTQIS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxmy4%2FHg9lNEePyCFaTBKZtu7cNmWPsCW1%2F3xdiuEHxAiAOFGvl0XwYX2jsCc9cKS9BfhcTiC6E2eR%2Bl4EVZd%2BIqiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsMeq68%2B5vt8pwDNKtwDGv1kxKVLnLYy8emx1BJsZlmbL6R9orQSE1xppzQVPGZccuN%2BMa5epONqSCVrfj2HIjiERnJk89bJfHmSsj3lAILRz6AQ2e8ItK%2FLtK72sf56jTU1yFFFy6SvmVtHe32Tsqb4ZrmCKu47JJyEvhC4%2BJkhuj8wUO4FGbBwUsInAnobCqCPz%2Bj5aknwgwfoivrAtxPLTR91xg7K%2Fz5J1HjBi2OydVtiSQol4FCTJZtX15O5P6Ha%2BsNYlZUFH%2BWw4x0DwcdYsSbPRtD3dEPcJXWU5Wg2IbhwnHcBv4Uj%2Bgmiipqv5OSpvQkyQikWBs3weifZhDa9R3ZZPukz%2F13ElT6nwDIFxldZtqpWNl62FYf4I%2BmrEmYbL0NkUTt43J%2F5bWDc5d%2BNqqcig5ilXt29BYvhYz%2F7dU2YUSGkEashEyAlhz%2B4WvbjkJ%2BY1G%2BJgD3I9JCvGmAENUJcMUT6%2B%2FG8Y6L%2FrSU7dlpWN9bSDgi6OY4VVGxgwtE4jGFQvyLf1L1yXKP5pG%2BrU8X9zgoUiZD22JsR1ZoUbesdpHwl1%2Ff7XNJPHqVI%2F1vPApIEb5ta4gXRwclrCaZ57bWsAMPBzpzkY6iOw3Rv9236Rsy2Z4BqS7jdESOfwf%2BSGWL5%2FbvazSYw9KPVwgY6pgEmvnNQgKMOVAamYlC%2BsT95mxv4CU%2BMmn6CJub8BnrWJYWZUlz6I62roO6K4mv8OdWmixzqqLuBZyw9jymG%2BMuQOau2lWDf10EssmHGrzYMzOpokAsQmiK6VXgVpdPBTYZgea8%2BdI9MVIOs3G68K3eGiBd7LT7hrMcY6%2BmejeRTLSfgKAA0s%2BrKA8AyB8PbNQZ5%2BSVWdFu6iS2VZoqeVG%2F5iqcb9b50&X-Amz-Signature=d88bb4b27caff25e128081a3ee6126faf4fc3e922f8660fea6cb6728bc649c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6ZLV25%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtbEGjEqOWDt5AHAfn8ED0uXwfZVlqUk8yk6f27OikiAiEAjY8xfBR%2FTJfRV4n1igT1vPexHVSGRHmQN6PNT%2Bw3GuYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyJRfNaD2CsY78vNSrcA%2BgRJyxYfnRFbB3rZPAOlumVdAGCkIFTMuc1M7Pvc38%2B%2F8HfVBjzLuRBfzvSSYGcmFG2rwCzq92XzbVJkEEMU7dAZpQLO5zVhtBF2R9PW5Rk5HjWJUJUryKDcCKnfaRe15zCHGpF4aWHpCvA8JjADb3rPJEjSQRMbh1BI9ap%2F%2BdeVEtjEwUrmUfcEqi1xSnSXWVyHFBpnYxwFHEVXYQbUX4xUMOtYxYX2R75MkbAN9w9kVYTrnNNyCL1ux62KnpEpxRcevWkpnn9imiAm3BgjATYZ7eiRj%2BAtlsg%2FLOoHBDq0OxCbzVLz2%2BP99EE76%2Bf2p3sn%2B6x8mrZ9NkZz729Culvi45IH8Wgwvedwfs2gVmGK1WFT0%2FxLL0Fxzk7RtyOmh2gX0zDXsKiUiv55tla%2FacAwyJg%2Bbcp6R23ytuH7zxKkVJLPgAH00K3jkd7GYZiURwu3asfslrjZFqXcNhgqBXQIM8x2JvR8PeSjCxbfbwWPahm0KHnArdwfys6L4D6C60V7U%2BfkEg14X5CIshnDvl1zK1RWPxgWOrGOcuPjMwM2Wbtg9Vr5XHg15tWb2lOk8MKZQqh0O%2FKC6ym1QJMjPovwgKUNJjQfY8SqfNwTao9tOf9%2BHggC6tIr9Y1MOmj1cIGOqUBDBC9E9zkFsWLQ7A4srVzM2hc%2BW%2FAz8gL8rJMpFktAzC0n5wZO2oGEPdg7xcsIibPOTVSMaE98SFSEUuPjlmhLsI%2B4ro8dJwhUXh5GEho%2FeGO7IQP%2BZrbT1Xe3oE6ENWAm3WxO0wp2d1okea5C6frAxUry5lP0lOknq0Ln%2FOqXiQO%2FRcEnUEIVxWbHQsWdhkLBmVMG16akbwvxqFa41yfkxmKzcwu&X-Amz-Signature=1e4e6639e13aa6038e28d1a3f48ee996b7351a15323865d2d48c248875442b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q4BCNOO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FkWbb8MWoh0yXW4IJNnGSAtS631uePOWNJb6nQYQsfwIgSdUa1GuurIwkOwtA77SsvtbjJDLW6VeHTFduwOiOX10qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQVaXz4T6grM2PfxSrcAy9pH8v4615WWzvHfB8B3ex67PYTu7GY%2F8j1%2FOkxFNeyqOoXSt3%2BA8xdZItP%2B70RrCTW%2Bi%2ByKpgLnuP%2FF3qnIKTsOkjzsLme74lFblsNZRjVNdcb2pDjmrX7jB%2BhAqY19SknvISr0oeXHcBjxLRDZ1X2DHP25x7DiI1tRhefKmQCntqVmA8zb1NNQ63ZJfzOUoQfmgnx3LXREsDfFkN5V0QEzaBCupWbdjfrJNa1PQQgJZY5hn%2BxkebVryhchCmx0arGDty3wTFXkbC6ovNpwHJnmE3wwhflpB9DDahL%2BKOv83n416uLNZE2WWa142yVKO6igelmimkoRw0RkCLWT2mmb5590fvRfVc7p3x8WfryIKQ3n3PJq5qwAU09sKN%2F7TaYpjJc1B8dUFJjnHNwoyJcYTZNxhheDWIev91rQeHg7ApZZ13Roynkx6Xx4ofgWe15xMyeM5Ez2Bfu2rp6z%2FUTECVR3ua8kjAjC1frA9Bklul5ap5udV%2Bv0%2FC66AE%2FvCsJV%2BIAGpYvaDtcuTEompfpyAt71FlavUqiaXFftK2X%2B4qR50eWoNN8QvmMi%2FwLs%2F8TFE8c27A13JuTCZ0pFD1%2FoE9kSYsm1tRri%2B8VVGZFNm0om2CMmiEI3VFPMOuk1cIGOqUBDrb5PGzwyIYhhdsq6rpUBj1L%2BeNNSeA5%2B8gOceAp0ZR0B2f0vyF%2BHj5O4ltgKSiy3g513CpLjFGdRIGjToT1Qumy8TH5hhuzVNXVLP3TX2In893LIqd31b3Cl7R%2B4S3xE71JnhsBeO%2BcQcRQPlhXtW2Gud56l7pVoXUywhR8ZimbiHh4xGwu60Kfyw0KT%2F0MdWSiSer9H0PKW0tFaOn8OqmXoo6w&X-Amz-Signature=7fa79673194cefe791e59129d39047a86a95c6f6373de5e637f52b6314124648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
