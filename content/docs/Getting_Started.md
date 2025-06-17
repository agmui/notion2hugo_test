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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHWSQ7E%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmckYRSVKixp9cQh1GNGptjTuhxPb3j9Nxywgh5SC%2FRAiBCCFluRpmnLT6Ij6M1ehagPSa5iOdwNrG4uKXkzLgy1Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM2Vusjq2iVvCVqmSkKtwDlSdpRgVHe92zM1CWRBVNdZJoh%2Fvlg5IfZevqjcJDS8IXo49YbntJH1N4xunnUWM%2B9BXEsvdgbaD6PH6FxNI%2FmvcIb89Jqenzhe3XKyfTSSNaJNISI8c%2BQjcUjjjVWXNyoXGu6ER0YpGlMplyKXn6TWafgQN3cROKmWevfU1cpioJO8TsuA%2FvlQoTjFh0Aj7f3spF6b1Y7iOnu2IobpxgsAPDPsyUqVfFZl7jVGoEaXOGs3qnQNyfG41KjIPdZyyyMK1Gbfm1oLg1ERf5aeL4sdbXNdqTYALK5uTD1q2x7NuD1Sw%2BHFBNLFJ2oAegd77vm4zpYa6TSWMA1%2BAmmV8czBUrq%2FwR%2BJThBckLCfAYg3eCX0RkPzmFCMA6Ogi0XQMw5wcIzpwJsYHViwRP3BWwWYmTEjzcx%2FzvxoNF4tfjXecfrFd8cr0fcps0n3QAjgBIyv8SDIeOfkKaT6%2BRdT7qJCBtu9ZLVbGNr34nVFqQAKIFfo6nwInP2HFrrsoMtZanxgy6l3bmIKOI5pyLOzbQZ4rBbeszcBIzWHbb2bzbDzTpVb7OqzWRYAtGTs%2ByW%2BvuMF%2Fy0fnU3AaSExhouZdjZ2w0YK9dDxgVmjumcRZADoYPLNqrIjEtI5eWbJMw3t%2FGwgY6pgFE4YI8R%2FKYpbqmq5TmoYle1j4lTouMNq9uQftLEVI60R2b3wiNhbfRl99a4e6AK6E7GVYxV81VAxoM6I8LvQgl%2BZzetoMDWAfojiTQjLx6r2z%2BwJ0OtOmVWZY4eUr0XyGZsEo0UMERApa0t3ifIQxxt6dcY187eGQ7pYusuy8YcFHQ3Hg90UZ6M3yemEJvNhSCXNvrFZRduyzWz2CfB7ojBZZvmSJ9&X-Amz-Signature=40e8d4095ccbe1d5278ec11e0e9202b6096205161152ecdff248018acdbcf95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHWSQ7E%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmckYRSVKixp9cQh1GNGptjTuhxPb3j9Nxywgh5SC%2FRAiBCCFluRpmnLT6Ij6M1ehagPSa5iOdwNrG4uKXkzLgy1Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM2Vusjq2iVvCVqmSkKtwDlSdpRgVHe92zM1CWRBVNdZJoh%2Fvlg5IfZevqjcJDS8IXo49YbntJH1N4xunnUWM%2B9BXEsvdgbaD6PH6FxNI%2FmvcIb89Jqenzhe3XKyfTSSNaJNISI8c%2BQjcUjjjVWXNyoXGu6ER0YpGlMplyKXn6TWafgQN3cROKmWevfU1cpioJO8TsuA%2FvlQoTjFh0Aj7f3spF6b1Y7iOnu2IobpxgsAPDPsyUqVfFZl7jVGoEaXOGs3qnQNyfG41KjIPdZyyyMK1Gbfm1oLg1ERf5aeL4sdbXNdqTYALK5uTD1q2x7NuD1Sw%2BHFBNLFJ2oAegd77vm4zpYa6TSWMA1%2BAmmV8czBUrq%2FwR%2BJThBckLCfAYg3eCX0RkPzmFCMA6Ogi0XQMw5wcIzpwJsYHViwRP3BWwWYmTEjzcx%2FzvxoNF4tfjXecfrFd8cr0fcps0n3QAjgBIyv8SDIeOfkKaT6%2BRdT7qJCBtu9ZLVbGNr34nVFqQAKIFfo6nwInP2HFrrsoMtZanxgy6l3bmIKOI5pyLOzbQZ4rBbeszcBIzWHbb2bzbDzTpVb7OqzWRYAtGTs%2ByW%2BvuMF%2Fy0fnU3AaSExhouZdjZ2w0YK9dDxgVmjumcRZADoYPLNqrIjEtI5eWbJMw3t%2FGwgY6pgFE4YI8R%2FKYpbqmq5TmoYle1j4lTouMNq9uQftLEVI60R2b3wiNhbfRl99a4e6AK6E7GVYxV81VAxoM6I8LvQgl%2BZzetoMDWAfojiTQjLx6r2z%2BwJ0OtOmVWZY4eUr0XyGZsEo0UMERApa0t3ifIQxxt6dcY187eGQ7pYusuy8YcFHQ3Hg90UZ6M3yemEJvNhSCXNvrFZRduyzWz2CfB7ojBZZvmSJ9&X-Amz-Signature=845d97a00392ea30c647be91f0311737bd6929033282f7435856088078bfa1bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHWSQ7E%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmckYRSVKixp9cQh1GNGptjTuhxPb3j9Nxywgh5SC%2FRAiBCCFluRpmnLT6Ij6M1ehagPSa5iOdwNrG4uKXkzLgy1Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM2Vusjq2iVvCVqmSkKtwDlSdpRgVHe92zM1CWRBVNdZJoh%2Fvlg5IfZevqjcJDS8IXo49YbntJH1N4xunnUWM%2B9BXEsvdgbaD6PH6FxNI%2FmvcIb89Jqenzhe3XKyfTSSNaJNISI8c%2BQjcUjjjVWXNyoXGu6ER0YpGlMplyKXn6TWafgQN3cROKmWevfU1cpioJO8TsuA%2FvlQoTjFh0Aj7f3spF6b1Y7iOnu2IobpxgsAPDPsyUqVfFZl7jVGoEaXOGs3qnQNyfG41KjIPdZyyyMK1Gbfm1oLg1ERf5aeL4sdbXNdqTYALK5uTD1q2x7NuD1Sw%2BHFBNLFJ2oAegd77vm4zpYa6TSWMA1%2BAmmV8czBUrq%2FwR%2BJThBckLCfAYg3eCX0RkPzmFCMA6Ogi0XQMw5wcIzpwJsYHViwRP3BWwWYmTEjzcx%2FzvxoNF4tfjXecfrFd8cr0fcps0n3QAjgBIyv8SDIeOfkKaT6%2BRdT7qJCBtu9ZLVbGNr34nVFqQAKIFfo6nwInP2HFrrsoMtZanxgy6l3bmIKOI5pyLOzbQZ4rBbeszcBIzWHbb2bzbDzTpVb7OqzWRYAtGTs%2ByW%2BvuMF%2Fy0fnU3AaSExhouZdjZ2w0YK9dDxgVmjumcRZADoYPLNqrIjEtI5eWbJMw3t%2FGwgY6pgFE4YI8R%2FKYpbqmq5TmoYle1j4lTouMNq9uQftLEVI60R2b3wiNhbfRl99a4e6AK6E7GVYxV81VAxoM6I8LvQgl%2BZzetoMDWAfojiTQjLx6r2z%2BwJ0OtOmVWZY4eUr0XyGZsEo0UMERApa0t3ifIQxxt6dcY187eGQ7pYusuy8YcFHQ3Hg90UZ6M3yemEJvNhSCXNvrFZRduyzWz2CfB7ojBZZvmSJ9&X-Amz-Signature=d6d3e7d86a2a314314e7bb02a4c61a348a6c45dfc9dc035a23a2fe6b889f4029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4UUXQAD%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6s0cozkXBAOeFzNFvhRLhgyv9KC3GBiYROpMCh3iA2AiEA06IaadIf%2F3r3a2y9cqMxmszDZ%2BQ2fJimw30Q8z5NJWYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBM%2BH2a4jUImAw%2FeVyrcAyAJWQqnHryMLfY5%2BvBVu7mQAn93%2Bh1b7Y9QSBBjwWIqYjZIcqN3hGQhRp%2BZizCqTmMi2JAPGBZAfS32IV9fKgMzJSm4UEr5XGtxJNDIG2Sg0oF7CUid0ebEA4x0D9TJorWmf%2BMtDA5KZ%2F4cs%2BZPXQj%2Bn2x5JKzFWHz%2FWYVHkeTHyUMIBs80avL80YMf7L2Jbv5vtUtZMRfYrFBtabGSPaMvI4pXyyhMZPMl19DF4nYzy3nfboyUb9mTuTShe233pqMBXZzK13aHBCMyJycdOcCrmjpoICNFdvwSNs6h6PLEOE6UeHRRkZHnsyQcj%2BoN41s%2FmdFDLxw7dzdFvNy8iCiGHcPIhLOZgtObfNjo8luoyMUIxVOBeqsQoUpVaXjwwq0zBiZYySffqtZ6J%2F36a5l2gRg07%2BosBWnWWbhANt1WqRgUeT6FjVQ%2FN69VgX5t2iGYqk83eUGWKBpRmP%2Fjbt%2B%2B66tjiEgUjwsObrjWvgbu6fOs3fSsHl0NIWAqzFX1csdq1l4VGUMiEViRbJm8gioM1T0Lg3cwgnAL%2B5Uvo3V2Bfof9ehvMPpsoVyS984sVKPIQ3InY%2BTb%2BHYGr7t0wVLSE7mQDEvYLKnJ3X08Ph121w8LBP2I0AvAt6LCMOnfxsIGOqUB2S%2BQn9M9l1ovvgkW80V9VVbk2gR3qscXXSM9ft09JfRoyYgpV%2BS225ps2AGcRay08gYZN1kWtdyRBC1YHzAo39V839DOOEI9iWv7hFGhI9xtkmITFHKxxWRrGgQuJbW2FiVMeL6umVQCI7kMETL2K4S7nAUZw5NcO%2FEvv1OA1o38npDYV9hZsSim055SpMXhtHk9XzqTwsVBK59kP9W4g8rMXDN9&X-Amz-Signature=3b8aeb5e0c939381501af9e748262615610126dc916a6097563de1d6ec4d33a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH6KPW63%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEnwqEeq64qc1R2OFXbwRLm2xr3oy2PZ%2FSyRVQVPOauAIgZDJpmVFmTrtFhyrDiMuCvejwRRiqnFFyufeIeZ9YWhgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDA10QTjIAifZ2vRnQCrcAwW2ByeOLpMhL%2Brb0j7XHG3gMh6T7X6XmnBcLdwonfpBE8x6GYj9CA4D5vqAOUytxKHHcwkoXxji4RlYS4uIXdk5Y1mbhrDnz4nljodOuE0ey7rV5D1tvT4zHgIZawc9NGRSiTPGkWXsdHmhBiSHda6ohsHfr%2FSm0hXUuoSVfsie0kJYKTmVGZFwvuTU4jlwMWd8J0xAd%2BIx1bImVyFwtHO8%2Fy4tAHWWPPjB5uP7JQzioGdziQ0sjlb75FnlDvFergaryBCz6pjJeQmcmWSRsw0LFqa9ueLDKhtabUALhY9%2FxEKEhYvAdLym%2FvrszLX1NFKfa%2FO79FXF1o1%2BqtIuIlVilqegDOmozjtLnHrOfsOFEu9DI%2B27FHWbszlTRDi9S2KXfbB%2FG%2FX%2BrsTs6Q7FThOmtl4gDxmhpZ8ntrLAQ5lMeGyXGNqN4KCbc6%2F4JVwfBvT10NTu6lQM6dyQBTxqO7eo%2FkkN2iQPV8EN29%2FgebqWuk%2F%2BKjdRHQJYAn0t%2BByC4nmxStIzZD1b5skke6o3EoWs0ej5n687tpjATZkde32%2F876EjghUW0aaxtk2N%2F5Lv5wRDOcPAadqZRaHbm9EgebQD5Nos47z9ODAI6A7TjJZn6Kn4RxqdzsC6WvzMPvfxsIGOqUBqCK8k4Bms%2FyckX6SoXQvHnMKpg0GO4l1sZYH7V2S%2FWP3Bq88PV%2BlRnB7GrpY8804qGQKLrFxdTtSkF2ISzFZNp6MpF8E8PGr8T6FdINtbd3BsmiSPYXm7K9wiiHHj%2B4h48GH6xPq8K2mauJ88TlAuvHw6yhTxRuI%2BqKR0k%2FESXpQ4shJoFZIxZJtnXO9qk0cE%2B%2FeqXFFXuPNt%2B33TFUx0PJhjzzi&X-Amz-Signature=fdf9047f8712965905f6288295b2d6e5365431a37c5a05e8fa84ac190d09af86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHWSQ7E%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmckYRSVKixp9cQh1GNGptjTuhxPb3j9Nxywgh5SC%2FRAiBCCFluRpmnLT6Ij6M1ehagPSa5iOdwNrG4uKXkzLgy1Cr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM2Vusjq2iVvCVqmSkKtwDlSdpRgVHe92zM1CWRBVNdZJoh%2Fvlg5IfZevqjcJDS8IXo49YbntJH1N4xunnUWM%2B9BXEsvdgbaD6PH6FxNI%2FmvcIb89Jqenzhe3XKyfTSSNaJNISI8c%2BQjcUjjjVWXNyoXGu6ER0YpGlMplyKXn6TWafgQN3cROKmWevfU1cpioJO8TsuA%2FvlQoTjFh0Aj7f3spF6b1Y7iOnu2IobpxgsAPDPsyUqVfFZl7jVGoEaXOGs3qnQNyfG41KjIPdZyyyMK1Gbfm1oLg1ERf5aeL4sdbXNdqTYALK5uTD1q2x7NuD1Sw%2BHFBNLFJ2oAegd77vm4zpYa6TSWMA1%2BAmmV8czBUrq%2FwR%2BJThBckLCfAYg3eCX0RkPzmFCMA6Ogi0XQMw5wcIzpwJsYHViwRP3BWwWYmTEjzcx%2FzvxoNF4tfjXecfrFd8cr0fcps0n3QAjgBIyv8SDIeOfkKaT6%2BRdT7qJCBtu9ZLVbGNr34nVFqQAKIFfo6nwInP2HFrrsoMtZanxgy6l3bmIKOI5pyLOzbQZ4rBbeszcBIzWHbb2bzbDzTpVb7OqzWRYAtGTs%2ByW%2BvuMF%2Fy0fnU3AaSExhouZdjZ2w0YK9dDxgVmjumcRZADoYPLNqrIjEtI5eWbJMw3t%2FGwgY6pgFE4YI8R%2FKYpbqmq5TmoYle1j4lTouMNq9uQftLEVI60R2b3wiNhbfRl99a4e6AK6E7GVYxV81VAxoM6I8LvQgl%2BZzetoMDWAfojiTQjLx6r2z%2BwJ0OtOmVWZY4eUr0XyGZsEo0UMERApa0t3ifIQxxt6dcY187eGQ7pYusuy8YcFHQ3Hg90UZ6M3yemEJvNhSCXNvrFZRduyzWz2CfB7ojBZZvmSJ9&X-Amz-Signature=8176fa8cbe996f1cd065b0c18722bc01bc823b7a2bdf6ff953056dcb74fc0b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
