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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDH6CSOI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOL3NA%2BppRqnUvzHyBEoHM8u0cyezWHu0igoX%2Fcg%2BtWgIhAPj%2BQAuQx%2Blz8Odw4pkSMWBu7ODU%2Feuxpfi7YwCxa5clKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzam4jnyQykxa%2FAtssq3APmJvRhw6pCoAjFnsSHYIkUW%2BL%2FIpptGG3YwOp6hhem3yYe7CYRmKv0BnPJ1T0PC1x8ervB63%2F6jy%2FzOMmj7NMSiIa4f9Ow%2Fel9PEehiMnLPKfD%2Fy4Da3Dfhq1nupkmUAOm%2F0ZmKls5hvhK%2BPaOof6lC4OOOSxFShE3fc%2BLd1wwJ7b2vFjVgJmwnpHZm27kMbcTqUg53WzwK0l6DfWklD7T5ziXY5xPV7Ta7bI1r6frh8eui0VnYLxsUdjZWUbYA1z9aswLWI61khu6Wp69kF6Cp9uF%2BDcx1mfmJGDzaCYvxCCT5Zo3s7Moo6Sbh32g5%2BKug5x%2Bm8Q9FqJ3YlQPCtuBF4ApN9JUYO5Eqrzm%2FYU07JBBP60hRyQnWYMOo10UP2oAsnqqlyJG%2FMj9eOh60n12B%2FNZNUxQuCWAk%2BJAMRGquY1JJ7b8dM0FN0g8XpwccBrdIY9SfMtzLWcu1r%2Ba6GtnRT1C5n34k8or8f3Hsr5ZU%2F0sYmKIjzdW%2Bsa%2Ffs5zJS4dhs%2FbzIwZz7Gy8IfW0gl0JhMMyVv07JIEiZ6%2B9slsUlPj5AiAgzeh1EIzPT8I0%2B4%2BIen1UzWx7OQNt%2Fpwln6EBvBWKn2DhO%2F6VNx1NCD8DdgV2SdinYs5nH5vnTCxk5XDBjqkAX6ldJB2ns6tkGN9k8zs6%2BFAUEgHk9KNFuSB2xusHFpmAykl60MpR8Ftc1Sbs3PZJJrl%2BTTrFV3CIro6r8XQ0n8Nnxc6oRthkB7%2FDlxzviDA2YDwT1N%2BIGe8gU8zXCDTYI4oLcW6%2FIe6Iagz8Ff%2F0sjkIVmf5DBrXsNqDmAYKVJnYBdunPg4%2BJywLQG5D7yUz6mLdBV20uXCQxcMZh5KPvxJG5td&X-Amz-Signature=04364582a1e6239b8e85ed6763deadb88dd6c58e596e39a74a568f625c6ee3e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDH6CSOI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOL3NA%2BppRqnUvzHyBEoHM8u0cyezWHu0igoX%2Fcg%2BtWgIhAPj%2BQAuQx%2Blz8Odw4pkSMWBu7ODU%2Feuxpfi7YwCxa5clKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzam4jnyQykxa%2FAtssq3APmJvRhw6pCoAjFnsSHYIkUW%2BL%2FIpptGG3YwOp6hhem3yYe7CYRmKv0BnPJ1T0PC1x8ervB63%2F6jy%2FzOMmj7NMSiIa4f9Ow%2Fel9PEehiMnLPKfD%2Fy4Da3Dfhq1nupkmUAOm%2F0ZmKls5hvhK%2BPaOof6lC4OOOSxFShE3fc%2BLd1wwJ7b2vFjVgJmwnpHZm27kMbcTqUg53WzwK0l6DfWklD7T5ziXY5xPV7Ta7bI1r6frh8eui0VnYLxsUdjZWUbYA1z9aswLWI61khu6Wp69kF6Cp9uF%2BDcx1mfmJGDzaCYvxCCT5Zo3s7Moo6Sbh32g5%2BKug5x%2Bm8Q9FqJ3YlQPCtuBF4ApN9JUYO5Eqrzm%2FYU07JBBP60hRyQnWYMOo10UP2oAsnqqlyJG%2FMj9eOh60n12B%2FNZNUxQuCWAk%2BJAMRGquY1JJ7b8dM0FN0g8XpwccBrdIY9SfMtzLWcu1r%2Ba6GtnRT1C5n34k8or8f3Hsr5ZU%2F0sYmKIjzdW%2Bsa%2Ffs5zJS4dhs%2FbzIwZz7Gy8IfW0gl0JhMMyVv07JIEiZ6%2B9slsUlPj5AiAgzeh1EIzPT8I0%2B4%2BIen1UzWx7OQNt%2Fpwln6EBvBWKn2DhO%2F6VNx1NCD8DdgV2SdinYs5nH5vnTCxk5XDBjqkAX6ldJB2ns6tkGN9k8zs6%2BFAUEgHk9KNFuSB2xusHFpmAykl60MpR8Ftc1Sbs3PZJJrl%2BTTrFV3CIro6r8XQ0n8Nnxc6oRthkB7%2FDlxzviDA2YDwT1N%2BIGe8gU8zXCDTYI4oLcW6%2FIe6Iagz8Ff%2F0sjkIVmf5DBrXsNqDmAYKVJnYBdunPg4%2BJywLQG5D7yUz6mLdBV20uXCQxcMZh5KPvxJG5td&X-Amz-Signature=ae32abdcda0c74af33fee8011e0df8a8e7e0412e6ac9ce120885ccdfa9093156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDH6CSOI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOL3NA%2BppRqnUvzHyBEoHM8u0cyezWHu0igoX%2Fcg%2BtWgIhAPj%2BQAuQx%2Blz8Odw4pkSMWBu7ODU%2Feuxpfi7YwCxa5clKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzam4jnyQykxa%2FAtssq3APmJvRhw6pCoAjFnsSHYIkUW%2BL%2FIpptGG3YwOp6hhem3yYe7CYRmKv0BnPJ1T0PC1x8ervB63%2F6jy%2FzOMmj7NMSiIa4f9Ow%2Fel9PEehiMnLPKfD%2Fy4Da3Dfhq1nupkmUAOm%2F0ZmKls5hvhK%2BPaOof6lC4OOOSxFShE3fc%2BLd1wwJ7b2vFjVgJmwnpHZm27kMbcTqUg53WzwK0l6DfWklD7T5ziXY5xPV7Ta7bI1r6frh8eui0VnYLxsUdjZWUbYA1z9aswLWI61khu6Wp69kF6Cp9uF%2BDcx1mfmJGDzaCYvxCCT5Zo3s7Moo6Sbh32g5%2BKug5x%2Bm8Q9FqJ3YlQPCtuBF4ApN9JUYO5Eqrzm%2FYU07JBBP60hRyQnWYMOo10UP2oAsnqqlyJG%2FMj9eOh60n12B%2FNZNUxQuCWAk%2BJAMRGquY1JJ7b8dM0FN0g8XpwccBrdIY9SfMtzLWcu1r%2Ba6GtnRT1C5n34k8or8f3Hsr5ZU%2F0sYmKIjzdW%2Bsa%2Ffs5zJS4dhs%2FbzIwZz7Gy8IfW0gl0JhMMyVv07JIEiZ6%2B9slsUlPj5AiAgzeh1EIzPT8I0%2B4%2BIen1UzWx7OQNt%2Fpwln6EBvBWKn2DhO%2F6VNx1NCD8DdgV2SdinYs5nH5vnTCxk5XDBjqkAX6ldJB2ns6tkGN9k8zs6%2BFAUEgHk9KNFuSB2xusHFpmAykl60MpR8Ftc1Sbs3PZJJrl%2BTTrFV3CIro6r8XQ0n8Nnxc6oRthkB7%2FDlxzviDA2YDwT1N%2BIGe8gU8zXCDTYI4oLcW6%2FIe6Iagz8Ff%2F0sjkIVmf5DBrXsNqDmAYKVJnYBdunPg4%2BJywLQG5D7yUz6mLdBV20uXCQxcMZh5KPvxJG5td&X-Amz-Signature=568830ab969e12048dec24372cee0d2ffd135fb7e8f7156cd2c38b9821d134f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDFPIGT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhNdBctSmZePWWShZkbTVcLr%2B2%2Fn2VHNm15QbwH1L61AiEAiSElcRRIrkroBktZT6nnfIiWJgzAx%2F5%2Fbt6dLCf4vQ0qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm0v80Si1jStLU92CrcA%2BafyxEiKsAcSJF0G62C%2FyhOt%2BrVVXR1WABVCIeHM1T3PhT0SzRp73LpL1LYSg3%2B1bTVE4hNQXg4Lpu4pxFOp2kt7MImtF1NuBJKKXISl1oFOuCCLgoRaTe4rMz6h%2FPDemTLaIsYIDPeQJr1pBqmjErfUaIwMPXHnnS2DnjLgGQPqN3Fkg27XqV1xgZY0fSlhsqIABXerIDAHUqEHehyo3YWWxrTkKPSz0gMsPxiVcMcoZeKRUbAIdaMOHDJ1jkWnbBerRU7Kz5mcogrhxjoawIhhcM%2B%2FZryhppOS7YFLZqPmhXqKUXG%2FH8KOWt%2F7iFPfc1vPy4mQ3SSlyG%2BeDBBhGq0aKIVJHcuq94Snwv2PJX%2FqU1LN2uCK7wsrT7Y2E7M7lon%2BeVs13JvsicgKNOp26p77i%2FSuwJP%2BplRNKbzE%2FHIIuVRbLGWmZZ74On7%2FegWEp6AzfNM6xQiA4DVbR2%2BpgqMxPSha59FjNKU6cim7ConZ68rFsiGUY52SUse8LclvDusG3zw8SMnqDNFvGKiHklMKFfOmW87bpv2Y7qua%2Fvv2woRH02l7rCJg3P0atGQDUxuA9hOaBFZfrB%2FxkhFf0l0x3Ythdu46bTJyrAIOvQZvWzREbDdmfh0OVFdMJuUlcMGOqUBVO1jfN182KxJSnzn%2FmzuU9VPv1Ta39I495yDJUblSiaIVoibbULDrCUSJE%2FUfv0v2QEvzTxYBK%2Bvi%2Fk7lgIWoqGadiu4qCXg4yQAfL8Qlaa0f%2F%2Bif%2BOeHw3qdEwG9pWmUL7dgXymlxH%2BJVnjhi33UpeZLexhVM1zkoyk5r0%2FCLIjHuFMdXLs2GoDhZVXKtK3Zm0MW4CLZDcBFYcUC%2FL%2Bkd9H2Ivv&X-Amz-Signature=1ed57d798016d9437a14d737d7ba4a9df7435b897a5aebb6c6211da650ef3be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2QPBGK5%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4gZ4%2FJKLYBqVHa08b%2BNoYXbf6F2HP4TiL8IhGzCTRbAIhAJ46%2FE%2FIM7eDJO%2FwI6m4e2eDi%2BN6VRtczrf6VazOtf2aKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9%2Bp2CS4yYjmcauD8q3AMF786Mk%2FIosxX7viKhk9AZ6J3WdM7bz4l3IBtAhj2%2F09LkyAiQUTY6FXpRsQZQNrpIvkDrt4qgYQC0i05vbIgZ2FV27ldinBQ7yAc26%2FW2V43a4nGmHuRYyZBRlNLcuf24TEczVrlmVEYvu0O8GzFV6mJcOhbQsn%2B2Tcbg2rhWLFyIa7Iah2Qu87DydneLXAiFz4vPwmREb9p7hn1anzAhPBFAwYrczeOdukFEDvZf6EWTgN1YRVEMuALkk%2B9wsckRi3dkgCfAvKuh5ANQDH0z%2FdFlLI9LMO15e9J7Q%2FoG%2BEwFoWTBStxlbmTSheDm5jxK8yNT3Aht4l7qtVDIHeEm9F3Tc5hdojuluTclv0qoyYz4O0jQpgxwxG1HaY%2BLnyvLUP4AC90RxPgvQQH%2FIwFFIEr%2B6PUITc7z5hyDB6b%2Bps%2Fe3O3egkLQVmF5TqDBuSgtICZZjE%2FPvozCvpgufm7%2BHnY57qxsxPRpnO2sSGMaqYl1IMxMU7pD%2BHemBJzPAWHaCojgSI4v49iiywx7dWgnTxppLOFzlfhkWR9YyRikVm4lbLsmL%2FNisp1WALuRSKp5jshAY0o6MCYzuiuiISNxzjMMoD%2B7GZueGfaT%2BLKxXDMVDyb0yDUWKZGYcTCPlJXDBjqkAcKIoI4HXAXEAwMqjwZlFTcJxyG%2B9nigTLQ%2FHExknLZ1UKJ%2BxUO%2FMy6s%2FUI8SP3iyNewkLaXwMaO8DpCW6VKyET3nbXnOhRCUP09Vl3%2FHfSlTuvBu55bmgebjWuiBQJu%2B8fqL40XbQe4WjnikJliUQktwEyYxLkNGnWGfOGkHmj0AohZr0aexiKqMTGOju6SkRjrSvJ43ESmfyrySTc5bISrYfsE&X-Amz-Signature=f69ca691e65abfeee717fa6bc9951fb41d5f998d5742d2a8ad79b299114a3104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDH6CSOI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOL3NA%2BppRqnUvzHyBEoHM8u0cyezWHu0igoX%2Fcg%2BtWgIhAPj%2BQAuQx%2Blz8Odw4pkSMWBu7ODU%2Feuxpfi7YwCxa5clKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzam4jnyQykxa%2FAtssq3APmJvRhw6pCoAjFnsSHYIkUW%2BL%2FIpptGG3YwOp6hhem3yYe7CYRmKv0BnPJ1T0PC1x8ervB63%2F6jy%2FzOMmj7NMSiIa4f9Ow%2Fel9PEehiMnLPKfD%2Fy4Da3Dfhq1nupkmUAOm%2F0ZmKls5hvhK%2BPaOof6lC4OOOSxFShE3fc%2BLd1wwJ7b2vFjVgJmwnpHZm27kMbcTqUg53WzwK0l6DfWklD7T5ziXY5xPV7Ta7bI1r6frh8eui0VnYLxsUdjZWUbYA1z9aswLWI61khu6Wp69kF6Cp9uF%2BDcx1mfmJGDzaCYvxCCT5Zo3s7Moo6Sbh32g5%2BKug5x%2Bm8Q9FqJ3YlQPCtuBF4ApN9JUYO5Eqrzm%2FYU07JBBP60hRyQnWYMOo10UP2oAsnqqlyJG%2FMj9eOh60n12B%2FNZNUxQuCWAk%2BJAMRGquY1JJ7b8dM0FN0g8XpwccBrdIY9SfMtzLWcu1r%2Ba6GtnRT1C5n34k8or8f3Hsr5ZU%2F0sYmKIjzdW%2Bsa%2Ffs5zJS4dhs%2FbzIwZz7Gy8IfW0gl0JhMMyVv07JIEiZ6%2B9slsUlPj5AiAgzeh1EIzPT8I0%2B4%2BIen1UzWx7OQNt%2Fpwln6EBvBWKn2DhO%2F6VNx1NCD8DdgV2SdinYs5nH5vnTCxk5XDBjqkAX6ldJB2ns6tkGN9k8zs6%2BFAUEgHk9KNFuSB2xusHFpmAykl60MpR8Ftc1Sbs3PZJJrl%2BTTrFV3CIro6r8XQ0n8Nnxc6oRthkB7%2FDlxzviDA2YDwT1N%2BIGe8gU8zXCDTYI4oLcW6%2FIe6Iagz8Ff%2F0sjkIVmf5DBrXsNqDmAYKVJnYBdunPg4%2BJywLQG5D7yUz6mLdBV20uXCQxcMZh5KPvxJG5td&X-Amz-Signature=0e09a65d7b312820095c6fcb0153b9a9ea5d2943836da98e9760b30c808ee78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
