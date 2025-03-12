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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6XCOV22%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD8RkVjATSw1nvE7mvAxsLrFdHU2zSiyxABc7VMu5irYwIhAO6YeEsj1FDv9Ptlix1T1VrMqSjHhjIa2OK7l38y2KMCKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVhXDX1fHdPkUqQxcq3ANvNULDqhFBy2R2kqFR8Dx5zf%2Bp7%2FkFzYn%2BcHeN7JdBf8sIANDRreNl9O5qxQ6TVa1jYGrhd6TZka7MQHtGAwn75JBpjZFmvCcc3d%2Fsb5t2DdK0MkXwrnWmk7abSex13JMcklBA4P8ftjmgbWR1C3L6PGzQI%2F740PnSWwtXBEJGZX2XQqy09MpFdqONRiSe9iy%2Bpg3ErHTboRwRQkfd7nXTr0KQT%2FbYD4skgKCVSEWwPtqISvjgRExelFk%2BdJFdsy3iM0gyUgt7MKj3Ur2DrScTExwd%2FyRseC7cUtrnel0JAig%2B%2BuBt8iO0y3sZXssyZ7UyXCUMvJv22%2BhQP2aw2RI1nnWVRTuvV9IJoeNfScA86aXAw0JOttLcb79Hw8YpDiSJjibM16PjUus8jx7RcDfRxcrPVYKXRw4pe4FPsXCVQt%2B0L7RkKvm45MyVgdmOO%2BWO%2BB5i4NXxU%2FtkaT2YPZDgl1TWX%2F3lZRv2ApEAvuj%2Bpp5ihUFiTRqztuvLbYs5A3nWRFap2JwXP8OHyTXr%2ByfUduVs%2B8FoDwUeeyeH7F8cIdZlqII2nwZvcH4LijYdx%2Fh1s7mB04NXXtuztGuQHweqlkQ6k%2F6SBq5KxGeDi2OIXtxs7XV1dOCKeMcUyjDNm8S%2BBjqkARy90sZPF81UbeN2Hd3ePZ9PiAUPnxqVlXF%2Fe9bUd8GOyD5O%2FP8YwbkjCMN3LHh6fpWgFtrgRXl5nxFjj8OW8R3KnKKJp4%2BNhfBRzkJabXX4rr4laxkuo%2BBrqqN2njbzfOjeF8cfMDtK34ruStGSUtSnKQ9EcqelFgyo2rt2Q9aDB7P83p9hc710Jvask7e8%2F%2B4B9RouH3pJiBvNxxaiMc8uCqsf&X-Amz-Signature=02beeb181b22d59fdd277a361f34bb0521b0bb3a2cd70e6a343ac2e7efff1562&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6XCOV22%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD8RkVjATSw1nvE7mvAxsLrFdHU2zSiyxABc7VMu5irYwIhAO6YeEsj1FDv9Ptlix1T1VrMqSjHhjIa2OK7l38y2KMCKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVhXDX1fHdPkUqQxcq3ANvNULDqhFBy2R2kqFR8Dx5zf%2Bp7%2FkFzYn%2BcHeN7JdBf8sIANDRreNl9O5qxQ6TVa1jYGrhd6TZka7MQHtGAwn75JBpjZFmvCcc3d%2Fsb5t2DdK0MkXwrnWmk7abSex13JMcklBA4P8ftjmgbWR1C3L6PGzQI%2F740PnSWwtXBEJGZX2XQqy09MpFdqONRiSe9iy%2Bpg3ErHTboRwRQkfd7nXTr0KQT%2FbYD4skgKCVSEWwPtqISvjgRExelFk%2BdJFdsy3iM0gyUgt7MKj3Ur2DrScTExwd%2FyRseC7cUtrnel0JAig%2B%2BuBt8iO0y3sZXssyZ7UyXCUMvJv22%2BhQP2aw2RI1nnWVRTuvV9IJoeNfScA86aXAw0JOttLcb79Hw8YpDiSJjibM16PjUus8jx7RcDfRxcrPVYKXRw4pe4FPsXCVQt%2B0L7RkKvm45MyVgdmOO%2BWO%2BB5i4NXxU%2FtkaT2YPZDgl1TWX%2F3lZRv2ApEAvuj%2Bpp5ihUFiTRqztuvLbYs5A3nWRFap2JwXP8OHyTXr%2ByfUduVs%2B8FoDwUeeyeH7F8cIdZlqII2nwZvcH4LijYdx%2Fh1s7mB04NXXtuztGuQHweqlkQ6k%2F6SBq5KxGeDi2OIXtxs7XV1dOCKeMcUyjDNm8S%2BBjqkARy90sZPF81UbeN2Hd3ePZ9PiAUPnxqVlXF%2Fe9bUd8GOyD5O%2FP8YwbkjCMN3LHh6fpWgFtrgRXl5nxFjj8OW8R3KnKKJp4%2BNhfBRzkJabXX4rr4laxkuo%2BBrqqN2njbzfOjeF8cfMDtK34ruStGSUtSnKQ9EcqelFgyo2rt2Q9aDB7P83p9hc710Jvask7e8%2F%2B4B9RouH3pJiBvNxxaiMc8uCqsf&X-Amz-Signature=82ac9261679c4117d5b18beb5f014354c8983411eece78f608c6c830c93a96f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVBGDKOB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCG9Cw%2B9TWlq5nVGgecxewYy0ARz%2Fb80GJXxJhBlkXFXQIgWpZq1E8f8ErHcjG7FzTRZHA1CT4N%2F7cCCZVkCntXRI0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICExT0u4iW4kEa79yrcAznXUtrS%2Fexr6CDB2DVAbxQ7BlwfyRTH3iz0mKKldEX3hc76%2FVpSbHxk2XUlarJhJ31ed5lA3mEzjZ8KSS1LyrmvI%2BE1ZDYnbpC%2FxYySRyAFbiUYCfL3HIzbuZ5IU%2FusVOWy4rTu6DKQR4tUpNJ9CxD%2FhzJLDLoK78Xs7RMC1oTP1W1fCDmzLoLVh0iZmngZyw5WiN1wP0DNS4lkf3ez6OqDo4ch%2FJnfZqExBgRKLhOToXshC4qCVo7AfXn6vUsfjBhDYvBqdZ%2B%2FKm%2FdwglCKYLiFKmlsCAZXidFNuV0TyOAY2%2FNFzXJqhiH5GbySAVk2RTTJTGamBOjiivupg5nolZBCm6j7waiMTej%2FjTFwG6WcFl21TH6PVeBwA%2F6IMXLmaba6GxcZqgKpbRElaIrCOiIpMGkPfcHuvunkZGxKGQfbHbQEtK%2BvLy%2BofW2al70MFzqc74nN95FZyNuRlS8Ix%2B4yGrdaIPuiKxUSK%2FoBYcq3%2BE5RBIVo14uP4QkUPPmplJtjwGmgkP4aEh3mEDwzR9CXV%2FPbMSU%2Bd011RyP743IR7hamHBRxsX8eV%2FnKFTBs24qheqcSG09%2B472MDND%2F7QVux8Cs%2FwyNvHdxTsdbjeqjN0%2BOXXv0Zto3qRtMMKbxL4GOqUBXYa0rpXfuzcnPalui7TgJsgfD1hIDoDaTFAfuGCa0r9CIGCvnJVjT3Mjc6E1WazeGUYdDcT%2F%2FObuHEGsyd2%2FjWmnDiVTOS6feTQZvccFFxRd5cRaP4M%2F%2FPpRQGyW9CJSU7y%2Bb8rmYyCLQEEDqzGLEiMMS%2BDO2HQFtbBv0Bm1VZBybmgVCsLdQNjmdw%2Bb%2Fc2oEUlkjFg8g5AhK1nFX11wNKwc5wQQ&X-Amz-Signature=8c51c2bbbe68bf9886fcb660ae3056935c346187c8c6cc4321b5c4dbff310dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO5IHSNY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCxeC30V%2BX2LMgYqQvMKCNBQwIC9HfxtetNjAtJoIiCWQIhAOx4pJg%2FaM6eYVZMxkpJafeiQJt2dbElixLKCUmX%2Fg6HKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSlt9V%2FSfIf79GDHQq3AOmKkVI1q775XC1WPQIUGAh89lApaWExTP%2Bq1ttXCrwTpB6Fy8ThUtEhQzkTKqZGupzmXW%2FuDlPTaRSYXo7bPs9K2eu6k8JNo4G5Ep%2Ba7JyzxjNyp%2FumXtsashcfCdSy5W%2BCcKXI1HZMab7Mp1M4otLTea%2BxIFxV%2F1%2B2UL1WqqJN%2FXB7EBNkkIQpFmxgng%2FF3vmK6hsdfOZysmp4rNYlwDpL0zebXdJ3rpccsDNiOV426dpLv1sw4D1iw%2BQ3sDD1qURS%2FVipl%2BvqdBcC7yGACBUy1p4o1CNPv8PrM%2F4K%2FH1Fml1cd3T4IFlHXT8%2Flmcavszfa0QgV%2BZgMBGZbTdgTM81jYR4Cloit6cRx7hi9vM039ouhDEF%2BJNCs3TcSGE%2Fh%2FEci29wjPn0oJCCQL81Kp%2FveuRuMLsSQYD6z5BP8cpHnLXSJxPadfxJpAJ%2BjHnQ5uvSsKREkXtNvCTPr2pONK02NnwNQ1FgKQk%2FN2sYn0nP8SVVa4%2F3HhYMh7w721A%2BFqgnOCseAShxcA4cbaKFGlulKtQz1PEsz90GpnmgLFg9QMhy04U7u%2F4FHsD%2BFE6rkuk26riYrSFcaO%2BNaH9riWDW8ZtlYCe4VoB8LDa%2FvjbfLcR5yumYbk0vf3lLjDNm8S%2BBjqkATNA7Z0z4TXc%2BYCXq2E7Q6GJ9GcOf9Ufo8%2FpcNe0EkQcBfpaK3LU4ws01m3hmno0JSr1urpRpb0mKxf6FmHK4XKLyYGGPaCizvK4Ph7soW42edU7Di4wfnJ1xteDLtPzmS0y1TT2LakxZRi%2BFhxJVHFQZlvgM7HeM7aJWnqEqb5XVTMmeojSNyhCPWnmca1Bm1BCy6iPgQ0Y4v4FolUyGYsrF1hj&X-Amz-Signature=aa2e1dc1d501248f9d62a81fe77090b2a80f42ad6240ac886d1d3d8a46895885&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6XCOV22%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD8RkVjATSw1nvE7mvAxsLrFdHU2zSiyxABc7VMu5irYwIhAO6YeEsj1FDv9Ptlix1T1VrMqSjHhjIa2OK7l38y2KMCKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVhXDX1fHdPkUqQxcq3ANvNULDqhFBy2R2kqFR8Dx5zf%2Bp7%2FkFzYn%2BcHeN7JdBf8sIANDRreNl9O5qxQ6TVa1jYGrhd6TZka7MQHtGAwn75JBpjZFmvCcc3d%2Fsb5t2DdK0MkXwrnWmk7abSex13JMcklBA4P8ftjmgbWR1C3L6PGzQI%2F740PnSWwtXBEJGZX2XQqy09MpFdqONRiSe9iy%2Bpg3ErHTboRwRQkfd7nXTr0KQT%2FbYD4skgKCVSEWwPtqISvjgRExelFk%2BdJFdsy3iM0gyUgt7MKj3Ur2DrScTExwd%2FyRseC7cUtrnel0JAig%2B%2BuBt8iO0y3sZXssyZ7UyXCUMvJv22%2BhQP2aw2RI1nnWVRTuvV9IJoeNfScA86aXAw0JOttLcb79Hw8YpDiSJjibM16PjUus8jx7RcDfRxcrPVYKXRw4pe4FPsXCVQt%2B0L7RkKvm45MyVgdmOO%2BWO%2BB5i4NXxU%2FtkaT2YPZDgl1TWX%2F3lZRv2ApEAvuj%2Bpp5ihUFiTRqztuvLbYs5A3nWRFap2JwXP8OHyTXr%2ByfUduVs%2B8FoDwUeeyeH7F8cIdZlqII2nwZvcH4LijYdx%2Fh1s7mB04NXXtuztGuQHweqlkQ6k%2F6SBq5KxGeDi2OIXtxs7XV1dOCKeMcUyjDNm8S%2BBjqkARy90sZPF81UbeN2Hd3ePZ9PiAUPnxqVlXF%2Fe9bUd8GOyD5O%2FP8YwbkjCMN3LHh6fpWgFtrgRXl5nxFjj8OW8R3KnKKJp4%2BNhfBRzkJabXX4rr4laxkuo%2BBrqqN2njbzfOjeF8cfMDtK34ruStGSUtSnKQ9EcqelFgyo2rt2Q9aDB7P83p9hc710Jvask7e8%2F%2B4B9RouH3pJiBvNxxaiMc8uCqsf&X-Amz-Signature=776bae3ea3ebd803d82f19c2195e5799b7e9ff5de28a68f71e99e55cf2da5034&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
