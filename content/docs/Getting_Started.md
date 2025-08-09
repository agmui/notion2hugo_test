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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US5DDDYI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBV%2Fd%2BeGxqz9dcWCzYSfT0H5lMpFxyNpEs5OK9Bzvt%2FDAiEA%2FDiEjAs2rIA9ZrvrjmqfINma3Sieyw6sI%2FCg6D9eTNcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxqDo3os4c%2Fu1sbbyrcA51EogB50Cb%2F%2FGyk7rBIcbu1f1rw%2Bku9Gaysk1pYb9EXz9f%2F0pM8CItuLmcI2AiZOhn4PRyDkyiGl1LNDrV%2Ftd1rNTD99xm8VDBZHGL152Ej0PyPPRcSWouThtCn4jWALjVP%2BkSianiJqheR%2FG%2FPZrEqAwBfTVX4280Cx6z0LEhzzFTJRi7DCXRuSWJeLDS6aZ%2B2Hsz06%2BDJpBFpeL6LTzywlYcDiMhAcNuEjqE%2BF4ZzrdlHGq%2Ftrs80w5PRaJBXoETeZSbFrbKdTye0XSlgWM2qMltm38cmBclj1y7YvHM06i3supBJpis97AM9xFStoxlFndsS5%2BGBgvF06fN4pqBy5InTmSy5wIVzW2UDoKErecYB1%2FQoO2BbkY0grkJWP4HbXHolH1brryUmQ3FSrvFuwlAmAYYhTaXAqgT5ZlEzlhuBnGR8FDWydpocL3vMiyParmlQNw8o1uwNYn2HIA8RCFeGtOOgE3Rkr8uDf2r4%2FQJJHWyGfrJI6%2BwrBmVnWDaBeNLF8yM%2Fa%2B0AcGrPEvos6RwttslOHO9dPSbzf9F1m1xcw12bVTjm1mMWzrUJ53cJIBkEtY0U%2Fy0VO60ev7LbjBRybFuuyAYpGYdNrKKserYpFl3KmNJ4GC2QMMDl3MQGOqUBUOdrZ8S936QpG2pnq%2FtQVug3A4ly1zi5ey%2FX%2FWiH0jBtOzSHnMq7L73ROWVc1Huvhg%2Bp61Zqd0%2BxUNNufeH2Qd3uttC6qpBEbHkv9grSG5mBzaRI5EzrxgdH85pvxBnYWBIuq0DcICNXIDRspb0nR2H2o6RUzIQNONw6vW0NZgniYpxc%2BcPmsFniS2w%2B%2FGWSE66iXEYaU865bvouM0%2F647TPgFXz&X-Amz-Signature=318556bcc494e629f31763e4fbefa1e24e1fd647e0aad1219660d2b55955b084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US5DDDYI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBV%2Fd%2BeGxqz9dcWCzYSfT0H5lMpFxyNpEs5OK9Bzvt%2FDAiEA%2FDiEjAs2rIA9ZrvrjmqfINma3Sieyw6sI%2FCg6D9eTNcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxqDo3os4c%2Fu1sbbyrcA51EogB50Cb%2F%2FGyk7rBIcbu1f1rw%2Bku9Gaysk1pYb9EXz9f%2F0pM8CItuLmcI2AiZOhn4PRyDkyiGl1LNDrV%2Ftd1rNTD99xm8VDBZHGL152Ej0PyPPRcSWouThtCn4jWALjVP%2BkSianiJqheR%2FG%2FPZrEqAwBfTVX4280Cx6z0LEhzzFTJRi7DCXRuSWJeLDS6aZ%2B2Hsz06%2BDJpBFpeL6LTzywlYcDiMhAcNuEjqE%2BF4ZzrdlHGq%2Ftrs80w5PRaJBXoETeZSbFrbKdTye0XSlgWM2qMltm38cmBclj1y7YvHM06i3supBJpis97AM9xFStoxlFndsS5%2BGBgvF06fN4pqBy5InTmSy5wIVzW2UDoKErecYB1%2FQoO2BbkY0grkJWP4HbXHolH1brryUmQ3FSrvFuwlAmAYYhTaXAqgT5ZlEzlhuBnGR8FDWydpocL3vMiyParmlQNw8o1uwNYn2HIA8RCFeGtOOgE3Rkr8uDf2r4%2FQJJHWyGfrJI6%2BwrBmVnWDaBeNLF8yM%2Fa%2B0AcGrPEvos6RwttslOHO9dPSbzf9F1m1xcw12bVTjm1mMWzrUJ53cJIBkEtY0U%2Fy0VO60ev7LbjBRybFuuyAYpGYdNrKKserYpFl3KmNJ4GC2QMMDl3MQGOqUBUOdrZ8S936QpG2pnq%2FtQVug3A4ly1zi5ey%2FX%2FWiH0jBtOzSHnMq7L73ROWVc1Huvhg%2Bp61Zqd0%2BxUNNufeH2Qd3uttC6qpBEbHkv9grSG5mBzaRI5EzrxgdH85pvxBnYWBIuq0DcICNXIDRspb0nR2H2o6RUzIQNONw6vW0NZgniYpxc%2BcPmsFniS2w%2B%2FGWSE66iXEYaU865bvouM0%2F647TPgFXz&X-Amz-Signature=bbdaa16e6fa46b53516ae234e8ffc6d1b686b7d20c692ec88d506299ba0e991c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US5DDDYI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBV%2Fd%2BeGxqz9dcWCzYSfT0H5lMpFxyNpEs5OK9Bzvt%2FDAiEA%2FDiEjAs2rIA9ZrvrjmqfINma3Sieyw6sI%2FCg6D9eTNcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxqDo3os4c%2Fu1sbbyrcA51EogB50Cb%2F%2FGyk7rBIcbu1f1rw%2Bku9Gaysk1pYb9EXz9f%2F0pM8CItuLmcI2AiZOhn4PRyDkyiGl1LNDrV%2Ftd1rNTD99xm8VDBZHGL152Ej0PyPPRcSWouThtCn4jWALjVP%2BkSianiJqheR%2FG%2FPZrEqAwBfTVX4280Cx6z0LEhzzFTJRi7DCXRuSWJeLDS6aZ%2B2Hsz06%2BDJpBFpeL6LTzywlYcDiMhAcNuEjqE%2BF4ZzrdlHGq%2Ftrs80w5PRaJBXoETeZSbFrbKdTye0XSlgWM2qMltm38cmBclj1y7YvHM06i3supBJpis97AM9xFStoxlFndsS5%2BGBgvF06fN4pqBy5InTmSy5wIVzW2UDoKErecYB1%2FQoO2BbkY0grkJWP4HbXHolH1brryUmQ3FSrvFuwlAmAYYhTaXAqgT5ZlEzlhuBnGR8FDWydpocL3vMiyParmlQNw8o1uwNYn2HIA8RCFeGtOOgE3Rkr8uDf2r4%2FQJJHWyGfrJI6%2BwrBmVnWDaBeNLF8yM%2Fa%2B0AcGrPEvos6RwttslOHO9dPSbzf9F1m1xcw12bVTjm1mMWzrUJ53cJIBkEtY0U%2Fy0VO60ev7LbjBRybFuuyAYpGYdNrKKserYpFl3KmNJ4GC2QMMDl3MQGOqUBUOdrZ8S936QpG2pnq%2FtQVug3A4ly1zi5ey%2FX%2FWiH0jBtOzSHnMq7L73ROWVc1Huvhg%2Bp61Zqd0%2BxUNNufeH2Qd3uttC6qpBEbHkv9grSG5mBzaRI5EzrxgdH85pvxBnYWBIuq0DcICNXIDRspb0nR2H2o6RUzIQNONw6vW0NZgniYpxc%2BcPmsFniS2w%2B%2FGWSE66iXEYaU865bvouM0%2F647TPgFXz&X-Amz-Signature=0529fb89a90a2f7ea534290b5ffa096dc9b858dfcb50199b068f5c90ff7e3fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEBNEHHD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaQsS%2F%2B2scXXxoH2NsWpliLMLMrDJwJzwfUwEBvx3ERgIgRoAyDPJay65xo5vWEm3MWz0ROWm%2BTf4iI%2FN%2FVPiZfOoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH46csd1ZCYgbCiAPSrcA5xLfkdNMcxo3tkxfIoBJWELItX6NS5zvCOKKLPWspixrJnePYD%2B6ZKPfpzYRECrYzUZ3ljQTE3h7GcPhDtJixdtEaePGWuIyDki8EdXaJ%2FiGrcX06z7QoizjyaeehFG2zVdEjY0HSvI%2F0W4vmrUGF3S9P5etd4tCpmshScVNhriGnWTj9d6xoJjNfRz%2BNI3XW8IflYKkjiw%2B3EzOiqMyczqdKsNoul4jmpcL2Zc1ekEyyaJHr3NKy2f6bKUIHKgGjhaZCLEHLUJJUff1hbRFqsjeD5NnAAwNY4RfK9jcmVGbCsBoDRTO5VtUuDMsZgttVmNRgpifRwHzHXvYy2bX2ztnTgyMOFvgHRd4jRllYf3qZHPXdP5CYNsOBTd%2B2mV1%2B4mgiKfov3JLCkFvfQK8woQvTk4Gf4wF89tKuVlsWEZXajw6MAduoPPA%2FVcDsWykhGlNAf6IB95onrRe4alVcA3RuvKs4mKR8ORb0%2Fn55NSZoiiz%2F4l4ReAoO9WKR4a8NOkh1BOZ7HOum6%2F7wAcV0A8jIJ9X3XHt2fNcCOGeqHC70FP4uu1SqQf49iIi%2Fw1i%2FLxQI9hgH0WvYLwuLf%2BVe7WExI18DRToSFtySlPo3Y8OVmJN21y1xqL1L%2BfMIjl3MQGOqUBO6xVH5x%2BT7ycxsyA%2FTIJC%2Fr1e5A93KFMzdlwc%2B9BRQlaOVRZAiIaQRBknVClatiKcFzeNOlfRWdbl4UaHaqFnZSUYYvrsjYSEHIqHScKMUWvROxvQCT6VQyV%2BA8dm1vy8S1TfP45Fvd2hhBEJ5Q9EiF4X0u5ZNzc5tyu5SzVQ8sQ17u8qAWhr%2Bf2TUa%2BPt7%2BCHtFhM3GsAqdFV%2FQoo8czWrPGHGP&X-Amz-Signature=ac24d908eca468ea261273308ff32b7e907ac5e3ece4133dab5a760435f8cc1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MUSYD3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB16MAAagXmLSlbLoNJ09ag4jTZSPpXOadnP%2BjQ5Fx6EAiANtzwxQYN2FO4%2FH%2BSpIh%2B1N1KprjPC7fRYXEkM1ozs8iqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgB%2Fw9rOH%2FbOI%2FmVFKtwDJRq%2B4T0r9uuzrRBS4K%2BlpujrjwhAB0BYXDy4iSZVp7LhU6mXofungLoIq%2Fngb7hw1A5ErAp9eHR2Mz7QJGT8cFB3S%2BV3qBzkxhq%2FWZUWjujt7acs3A2RxHX%2B4wiM9N0wN7FBe%2BystEjVsrUFuhlKze5brv2bS8xnUqHw7rmMl2mM5d2ZvS98Jidk2UNZewWV4jwbtCQgi7ofpU76JkEPDS2rz7rsMLggvGNETNFzIYsKDKbQZuL7ATkmDutavYm9JQMuT8TLqV4S4ul1KHV%2BljJ9KSy%2Ff9EO5VKnDHzAJ8nmvS4%2FQ%2Bs3SSH4IO5Vq4B8BAt5qF5lwke3%2BItaNfOmjxc2HCUkMmsGavSofYkuIrsq63M%2FdRf%2FfP3DOiws8M6M7ehlkg9CiQJQS6TgB2U%2FSqxh5SL3zhgEI483pROpKo6rV5UGsCI%2BCMentT7%2Bm5u5rhvDV0xNClEHAhc8o4AibKe%2B8FDt8hMmZ2WUfhEgWGccR9lcBiUUheuawjEqFjTXLwfJxm34NfkrDQDIZXSO3rWJlSutP22ar4Ybmm5k8bCMSaStu9OPxu6DhLbbOHvAYgfvvcfhTAbjfWyKXo4xvuW%2FqC2Gjyqoaxdjpz00Q%2F%2B1uESzmXGLkc%2FYkMIwsefcxAY6pgHycTm7mDC5p%2B%2FQiC7jk%2BCsQfChWnIXRT%2BN4yFwSyum%2BDxesq33cc8EU%2B%2FKNfYknV5Q5fmEXj0WKeWs0k8YdfawLR7RjPMfFROoUOMqBhfSKDSWfyCZpEovMyFTicizHS1CLYekp13y7JXD1EpUTAH89Hr%2Fikb00XrPAwiNbMcsqLwAs9cJLpqR9hFII5DJHWJeTR2zM86hOfoe21Fw2o1osDRVL3zK&X-Amz-Signature=ebe26b0c26cfc032b7764b38098337ea5c8c618b2904518089e8a8a7aeff5e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US5DDDYI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBV%2Fd%2BeGxqz9dcWCzYSfT0H5lMpFxyNpEs5OK9Bzvt%2FDAiEA%2FDiEjAs2rIA9ZrvrjmqfINma3Sieyw6sI%2FCg6D9eTNcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxqDo3os4c%2Fu1sbbyrcA51EogB50Cb%2F%2FGyk7rBIcbu1f1rw%2Bku9Gaysk1pYb9EXz9f%2F0pM8CItuLmcI2AiZOhn4PRyDkyiGl1LNDrV%2Ftd1rNTD99xm8VDBZHGL152Ej0PyPPRcSWouThtCn4jWALjVP%2BkSianiJqheR%2FG%2FPZrEqAwBfTVX4280Cx6z0LEhzzFTJRi7DCXRuSWJeLDS6aZ%2B2Hsz06%2BDJpBFpeL6LTzywlYcDiMhAcNuEjqE%2BF4ZzrdlHGq%2Ftrs80w5PRaJBXoETeZSbFrbKdTye0XSlgWM2qMltm38cmBclj1y7YvHM06i3supBJpis97AM9xFStoxlFndsS5%2BGBgvF06fN4pqBy5InTmSy5wIVzW2UDoKErecYB1%2FQoO2BbkY0grkJWP4HbXHolH1brryUmQ3FSrvFuwlAmAYYhTaXAqgT5ZlEzlhuBnGR8FDWydpocL3vMiyParmlQNw8o1uwNYn2HIA8RCFeGtOOgE3Rkr8uDf2r4%2FQJJHWyGfrJI6%2BwrBmVnWDaBeNLF8yM%2Fa%2B0AcGrPEvos6RwttslOHO9dPSbzf9F1m1xcw12bVTjm1mMWzrUJ53cJIBkEtY0U%2Fy0VO60ev7LbjBRybFuuyAYpGYdNrKKserYpFl3KmNJ4GC2QMMDl3MQGOqUBUOdrZ8S936QpG2pnq%2FtQVug3A4ly1zi5ey%2FX%2FWiH0jBtOzSHnMq7L73ROWVc1Huvhg%2Bp61Zqd0%2BxUNNufeH2Qd3uttC6qpBEbHkv9grSG5mBzaRI5EzrxgdH85pvxBnYWBIuq0DcICNXIDRspb0nR2H2o6RUzIQNONw6vW0NZgniYpxc%2BcPmsFniS2w%2B%2FGWSE66iXEYaU865bvouM0%2F647TPgFXz&X-Amz-Signature=f5bf1649a86b686e44488ab02a510cab091b8bbd21ed8d4e1ef2d45c19dba1f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
