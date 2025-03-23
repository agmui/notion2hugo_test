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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ2WO5BS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCCX%2F5%2FTdC9NRv0WCB%2BbMuKJkNPQlqqRkLFA3wd7GSFNAIhAKOEtYbD%2BHCuhm1z92v5wQrnsMezZwffUWuEZEqZpMjGKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUdg6hiKrfupCfsa0q3AOQZU1GuU7AKZWl%2FJWWTBfay4yY39I498gxY113HjLsyWYirvnQ1OCCq3QXRLRzn3axX9iMJX8iGJs4%2BK5qN2KuyafddEKxcU%2BSwhRp3G49FWuUF7v8ZlaXsJskUBiJgzqx0%2B4pnGZCXv8ica1DP2w%2FFGsPs79n8b3DJaFvIZXU%2BCeSBHUaDWt7WdwrZMSlurx%2FC2cwDsc%2FiWm069UPU3EvskVCVtx6YEBGpiKkdSQTTzSIuolGw6mr9zk%2BvS9bOX%2FMfCkCVebtuX86lsj2hboH669NvPrExnzNLIxVTajRQ%2FYhs1%2FUGZkI6RNCe%2FcB%2Fiyfv%2F7W74lkVq75zzP9Mvi6eCoM%2Bj%2BCJQHje1A6GT1ZFyJSzaPen1XvdC1Ect5MxaSK4Qf0h8j8PuvNgXT9G7f%2BwE4X0LrbYWLma05qB2pbMDirBXGw186XGDTyxeFa8lCAi%2FM2GmDj8BXLxkFQzCRTwFkJxq71uqzLxjYEthn0q6PCa%2FedYRzKP2oIQFUUz%2Bvk%2F7%2B%2F7ZLShXZoRcrFJXLG1f6KWzGhWlCUQ%2B4E23mW%2BmKGDnEG8mVdt2XVtmLnDOSWfTKgI9%2BvmRpfIX%2Bjmc19ZJLNUBSRtlUaif6RWdjSmt6rVItOLfTrckG2LTCrzP%2B%2BBjqkAax%2BXOeK9BwxuV19rHgWodGG2QT9nIHuSbO08cuR2CgKMu4WUgncbsozaOMYuF8gqZqwSfH7ILH7RO7koIA6IS0Ba5%2F%2BSZ9uUtpcaBp2%2F%2BKCuCiMNgMC9k8RqKlvmZuvznWWbyYDUaFpoWRJxf2Fj58q3fs%2FkXfu31lD3Pg%2FEnVyk%2F3F2LWX3rd0pQZFkGslsTCYXXMMdzsd1tgMGanGJrqvtO6f&X-Amz-Signature=940c83b49f45bbd75dfd7e84fffda04e8ff9be411026a8010cdb82c600dd4e00&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ2WO5BS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCCX%2F5%2FTdC9NRv0WCB%2BbMuKJkNPQlqqRkLFA3wd7GSFNAIhAKOEtYbD%2BHCuhm1z92v5wQrnsMezZwffUWuEZEqZpMjGKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUdg6hiKrfupCfsa0q3AOQZU1GuU7AKZWl%2FJWWTBfay4yY39I498gxY113HjLsyWYirvnQ1OCCq3QXRLRzn3axX9iMJX8iGJs4%2BK5qN2KuyafddEKxcU%2BSwhRp3G49FWuUF7v8ZlaXsJskUBiJgzqx0%2B4pnGZCXv8ica1DP2w%2FFGsPs79n8b3DJaFvIZXU%2BCeSBHUaDWt7WdwrZMSlurx%2FC2cwDsc%2FiWm069UPU3EvskVCVtx6YEBGpiKkdSQTTzSIuolGw6mr9zk%2BvS9bOX%2FMfCkCVebtuX86lsj2hboH669NvPrExnzNLIxVTajRQ%2FYhs1%2FUGZkI6RNCe%2FcB%2Fiyfv%2F7W74lkVq75zzP9Mvi6eCoM%2Bj%2BCJQHje1A6GT1ZFyJSzaPen1XvdC1Ect5MxaSK4Qf0h8j8PuvNgXT9G7f%2BwE4X0LrbYWLma05qB2pbMDirBXGw186XGDTyxeFa8lCAi%2FM2GmDj8BXLxkFQzCRTwFkJxq71uqzLxjYEthn0q6PCa%2FedYRzKP2oIQFUUz%2Bvk%2F7%2B%2F7ZLShXZoRcrFJXLG1f6KWzGhWlCUQ%2B4E23mW%2BmKGDnEG8mVdt2XVtmLnDOSWfTKgI9%2BvmRpfIX%2Bjmc19ZJLNUBSRtlUaif6RWdjSmt6rVItOLfTrckG2LTCrzP%2B%2BBjqkAax%2BXOeK9BwxuV19rHgWodGG2QT9nIHuSbO08cuR2CgKMu4WUgncbsozaOMYuF8gqZqwSfH7ILH7RO7koIA6IS0Ba5%2F%2BSZ9uUtpcaBp2%2F%2BKCuCiMNgMC9k8RqKlvmZuvznWWbyYDUaFpoWRJxf2Fj58q3fs%2FkXfu31lD3Pg%2FEnVyk%2F3F2LWX3rd0pQZFkGslsTCYXXMMdzsd1tgMGanGJrqvtO6f&X-Amz-Signature=1d06c97487e6ac811d201fb3caaa52021524fddb5ce62205110b0240dc6e776d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RNITQI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCpY12gvZvKfoiBLm33YBBw4oWua8c1g5ynQ%2B%2Buv4Ad4gIhAOXG9tacOftaVSM17ioQfGSa%2FCLT0YhkFybHt7idQus%2BKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNTBW0QQD5fKjxXHwq3AOC9934%2BkbhDDTo%2BJiKJgloTmlwJuCZXJdPy2vaEQ4IYD%2FlFTtFHyk8IHFCGh75o%2F%2BDPjZMlYDHH6VZN%2BqbqbEygLxn0SWBTXkFQw08VZmAX%2F6tE%2FpeH4tPVoREmYS0LpQGffYd%2BSy1taZJQDIITu843kAj9yZJWjVSVFDkMiicfwg6ICpB8MMWjcH9DnmLL5kFluIgUMj8NtcKyibcxwP1dZOhnLUsswpwbsBbk75EaPlQNXhSR49pcRVlOxsdkYZZooTF2Rx8WU4KFzdJU7R8JDu%2BxO7K9oMxYzzAvhSPr2AG0mdUatK%2BInLJcylt0YzRx3ORxfkIripiSXGdpRTqIn%2BgDvvsQSjlu6VW6itWkLz%2Fec5Nc0Kkgd2pcUR%2F4PY5QWNzDbXYQmTm9cLRgSeObzbe2RKisyi9vbriHmcnx9%2BOmOmaburgWLdiFnCjzelD5nWZkkJuGjRxEYoEnzgXCsuwktvYyJF0yYTd9C02u2Aphe%2FrAtrx7t2ZEa4ReTHrXwWdlHEYaSpm9hUPTRagbwscikonJbmK9FbfQBPg27R7yTBGwh5bEj8o5mWZzlIp240aZzSJvDp4Xmc43sJKL32W2eu0bzWlO5WW5PK%2F3f6WRmTiIzqL5dBPsTCXzf%2B%2BBjqkAWElxyKEW3XqoMdvxrVm3Oii9yZj2OtPnxurc1E%2F0XzgqyR0ZF5BfcnTeEGIUBkUneDlls9LW2x5HYlq9SLgPkpYkVp6vqIDBPePvjQQAwxWjX4eP2MXt4WALOe6%2B1msQjtmyc0Jb4rJouJsmEMrVH%2F4aZXI06zm4hITsqeMuFO7St1lo%2B9RlxO0RgGOAQlsdyKkFsw%2BzTGyeRfIJWjHORmK%2FQEV&X-Amz-Signature=058dfc52670749aff78a07ae885001ad4b49492ac938fcdf9e6b7ecb8cf06be0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VV5Y2MR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGmH2q%2BF9y0Dz5AFPRohw0rr46ul3fAep8U0pP2gSzxAAiEAgAbILzmro%2BcqOpFlEYpGE%2BeWjHnTVBSpNOPz2vn4CkcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhlPer9RSMmN2WHICrcA2ey7DKb3lvadFpu5vep6Y4%2BPwt%2B%2FY1fIFRCoMZivsUEY6K8b2r%2Fn%2F%2BEAj1GL9zNYuXIfavh1Gl8ndLPXYDJduwNzM3nkbXxvuMlOkLDY%2B10dsl%2BGvn%2BY%2BDloGdo4njximLQhzKVKbz62isAuP03zgjtqc%2Fc43O2kOAYbhupXOhqeP9hASlvH0%2Fzc1oLRzjFsgYTQX3uceYVbBBC45BMaL7Go2c1D2e20aR6Cq2Ke0FgErx5VmIBMMKyn7wNbFcfglnQXUbn58YvogRqFKq1AzDGCs486ETJbVFmDQe34yn3%2BUzdRDnUAyHYl8QB3qRZsRdeduc0WsLhhZD6U7W7o%2F9Oi%2BDJpTekPC5jowNWwqXzoFZT%2FqHz7Yw0ixFGbTJZNchq%2BrBTvpXS6J4M0MehaZjobFCoCu2F%2FGNXCreEBNjucweNPRGu1oHHLRNwrNSIOTGQXU4hHYDkd4qGhrP4YAukBwHi0HpXtwifZPEG11g0KvC7WXumDYPc1%2Bh2pHlAsP1ppCCfIMemKmFDC0MuVlXDn87AUSfou8dYquVbEX%2FP2NGhmgIRCceeVmNqPNts3d0vIMMv1iTRwA6BP6wb%2FaY6z3e062xzO15bLHPMwMgDABgc688B4DeLYLPFMIfN%2F74GOqUBud0QcPbeUfXD1N%2ByqZm3T84KMy23Q5D%2BNBepvn161kjy5moR3QeUCGoZ9P96h89n%2FXuBA9X53wRQxeZSYIeVDvCjkCy5DJAR%2F0L7m2TXJ8HDAYMA0rEPpLtg7ijviR7WZPnlMIBIvpY8%2BYjNS1NxKdcgdE8QVttZ8Qme6dyYpFrCLy3gqVNvATS9n6mniOo3Ympq58o0rXmPA7JrThKa%2FMJ1Ti0I&X-Amz-Signature=14a57f1fc467603c96dae3627420f4bcae35173d2931f0d9a254bda883f75ced&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ2WO5BS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCCX%2F5%2FTdC9NRv0WCB%2BbMuKJkNPQlqqRkLFA3wd7GSFNAIhAKOEtYbD%2BHCuhm1z92v5wQrnsMezZwffUWuEZEqZpMjGKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUdg6hiKrfupCfsa0q3AOQZU1GuU7AKZWl%2FJWWTBfay4yY39I498gxY113HjLsyWYirvnQ1OCCq3QXRLRzn3axX9iMJX8iGJs4%2BK5qN2KuyafddEKxcU%2BSwhRp3G49FWuUF7v8ZlaXsJskUBiJgzqx0%2B4pnGZCXv8ica1DP2w%2FFGsPs79n8b3DJaFvIZXU%2BCeSBHUaDWt7WdwrZMSlurx%2FC2cwDsc%2FiWm069UPU3EvskVCVtx6YEBGpiKkdSQTTzSIuolGw6mr9zk%2BvS9bOX%2FMfCkCVebtuX86lsj2hboH669NvPrExnzNLIxVTajRQ%2FYhs1%2FUGZkI6RNCe%2FcB%2Fiyfv%2F7W74lkVq75zzP9Mvi6eCoM%2Bj%2BCJQHje1A6GT1ZFyJSzaPen1XvdC1Ect5MxaSK4Qf0h8j8PuvNgXT9G7f%2BwE4X0LrbYWLma05qB2pbMDirBXGw186XGDTyxeFa8lCAi%2FM2GmDj8BXLxkFQzCRTwFkJxq71uqzLxjYEthn0q6PCa%2FedYRzKP2oIQFUUz%2Bvk%2F7%2B%2F7ZLShXZoRcrFJXLG1f6KWzGhWlCUQ%2B4E23mW%2BmKGDnEG8mVdt2XVtmLnDOSWfTKgI9%2BvmRpfIX%2Bjmc19ZJLNUBSRtlUaif6RWdjSmt6rVItOLfTrckG2LTCrzP%2B%2BBjqkAax%2BXOeK9BwxuV19rHgWodGG2QT9nIHuSbO08cuR2CgKMu4WUgncbsozaOMYuF8gqZqwSfH7ILH7RO7koIA6IS0Ba5%2F%2BSZ9uUtpcaBp2%2F%2BKCuCiMNgMC9k8RqKlvmZuvznWWbyYDUaFpoWRJxf2Fj58q3fs%2FkXfu31lD3Pg%2FEnVyk%2F3F2LWX3rd0pQZFkGslsTCYXXMMdzsd1tgMGanGJrqvtO6f&X-Amz-Signature=e6acc56cf62f35aef24970485d914ee520e9293820153d7c494c14950b08a5ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
