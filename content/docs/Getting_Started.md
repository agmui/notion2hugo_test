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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYITHLNX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsB%2BLc9YxvYzVPzrzAAXL6cuToffyrLuPS0fKcALy6cgIgXfZ7jPVswXUhdqOU1EpNBPzREGenh%2B4y1AnKpMwoLfIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8WoEaW6xCH40w7FyrcAzjXmZjuatZBoaykloC4z0zjy3wuJKkO%2BK15lYXZgdAQHUWI3nFdaaIR0g%2BOEPUBS6cK64iMCdbIEBSxLbKZ8okTE%2Bkz3TiPtm3aA1AiSZ2%2BGz6guIO22QLboGeLC2XLKX2QgyGrYtE5F501NsxI1bI3%2FsUYtT%2FBTL7APng%2Fq1xkoTM9BdvnTyuEfcDls7i9uKi%2FhguzgmOYg%2BlzwJeNm8VaxTIkDIou%2F6fCFfi7MXog2Pgwq%2BpSNZiLoFtvdq6KR%2Bnju%2FW4fL1OmmRu0jW2R0LWtiTrjHE5tnhUIXM%2F8iI430OY0gZ0c0jqwPaYlYzS1k3tYyLq8ytXoGlYpkC06tk8PvY7KSncWDXbjPWFjBU4c5CMavsZ7k9aZ6Ahswk8jmertIMAfzclujQR9UVHpBmxjV%2BD6JqdybnZtXHhNeD1LjFCSOFsNo0RqCv%2FWSmQwoh9n70YCNgnikKQT7vqKmvbErz5BLD7xqMdlyHQs9QMmFPyp4G3Ug9Hr5O38vLyUBdbLEklXpcMbAtlFkPzNoBrlawoUuUtF5JkgO3ejSpn71Cqrw9irD3boScrtZ3xfsIIaTIEB08KmjMo8XeX%2FEeY6%2BTbMznTkoILaM6FGsATDwE8xpN5txi3l8QQMIudpb0GOqUB6VHSbUD7Kh0HURVqLvQCQHH01pa6e8spciTLcDqoc4q19xJKxWSoYJNdplyhed8QUofVQeDoWvpcIRJy%2Ffh9BQV1V2HP50CwF7EdU4XZsm7a07qty6RwQehe0eoOEfd0GL28nmsBV2shTueRCWQQf9GE9c7qQ5UGpB0rNSrRVQzOv%2BOPhrjqOrEU7f%2BvLYTte9wgW9aOWgyXzIXW04dr%2BRoi5p0T&X-Amz-Signature=5832bfba6117d2956177da6f91c7874e7415bf7229a95c298a3b307274c6633b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYITHLNX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsB%2BLc9YxvYzVPzrzAAXL6cuToffyrLuPS0fKcALy6cgIgXfZ7jPVswXUhdqOU1EpNBPzREGenh%2B4y1AnKpMwoLfIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8WoEaW6xCH40w7FyrcAzjXmZjuatZBoaykloC4z0zjy3wuJKkO%2BK15lYXZgdAQHUWI3nFdaaIR0g%2BOEPUBS6cK64iMCdbIEBSxLbKZ8okTE%2Bkz3TiPtm3aA1AiSZ2%2BGz6guIO22QLboGeLC2XLKX2QgyGrYtE5F501NsxI1bI3%2FsUYtT%2FBTL7APng%2Fq1xkoTM9BdvnTyuEfcDls7i9uKi%2FhguzgmOYg%2BlzwJeNm8VaxTIkDIou%2F6fCFfi7MXog2Pgwq%2BpSNZiLoFtvdq6KR%2Bnju%2FW4fL1OmmRu0jW2R0LWtiTrjHE5tnhUIXM%2F8iI430OY0gZ0c0jqwPaYlYzS1k3tYyLq8ytXoGlYpkC06tk8PvY7KSncWDXbjPWFjBU4c5CMavsZ7k9aZ6Ahswk8jmertIMAfzclujQR9UVHpBmxjV%2BD6JqdybnZtXHhNeD1LjFCSOFsNo0RqCv%2FWSmQwoh9n70YCNgnikKQT7vqKmvbErz5BLD7xqMdlyHQs9QMmFPyp4G3Ug9Hr5O38vLyUBdbLEklXpcMbAtlFkPzNoBrlawoUuUtF5JkgO3ejSpn71Cqrw9irD3boScrtZ3xfsIIaTIEB08KmjMo8XeX%2FEeY6%2BTbMznTkoILaM6FGsATDwE8xpN5txi3l8QQMIudpb0GOqUB6VHSbUD7Kh0HURVqLvQCQHH01pa6e8spciTLcDqoc4q19xJKxWSoYJNdplyhed8QUofVQeDoWvpcIRJy%2Ffh9BQV1V2HP50CwF7EdU4XZsm7a07qty6RwQehe0eoOEfd0GL28nmsBV2shTueRCWQQf9GE9c7qQ5UGpB0rNSrRVQzOv%2BOPhrjqOrEU7f%2BvLYTte9wgW9aOWgyXzIXW04dr%2BRoi5p0T&X-Amz-Signature=a99c8aab6cf6915a49c42d1744225e9ff22d7b37c1672db6b52c952d027b8dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNYUDUP7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDz3wXwMMo1MOcOms%2FwSiPqQ2DRfdZ23PWX%2Fs1AemSmAiEAlI09T2QsS4O9TYztCARy4D0CwU922z9g1PoMMVWnTFYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGADHXwvIdsYBkuyCrcA%2BGCVZkeMDRjnvwCPnwEPhn2TaoCDyo1kVIY9074GgDhq5IfSHGvC8BqP3CAMS0F7gsAGH1%2BWWg0m3ALeNvCG4wa3cWtxrj9ivHT5gth8qnIWVSglDyX3TUiSY3eaM9TeiotHK0K%2FpLe2iHia%2FN02wVF5kWAYlWMS28%2BfPc3bjOIu4r7%2Ft9mA68Wnh%2FmefMUK2pUdGUfeF94nydNXncdly75YKivvUEE3SBQUv8qq0I9M%2BXabaHFOB79Qcz%2BM%2BqpbknryBarYUpiETOwwUg%2BAOI7VYHwG9hAI4JiNqo8KJmXZ9OAjVo1vQZ1L8De0HYlPu4zrp1CwHzX3PycoPfuvMjorPfqqsu8WERpYGRBSTiEemfczG8FldmMpVQ1XnYjAP0%2BbVDliqdH0JkZIg2MYn4I9taA1noiLTFipHRn4XS03z3cn4StWR5gnTv%2FSrfBT%2B3nIx6fq79o9l5WSCWSEXASrFA5DJ7ZOlxin3D6KiWPSSk0CrhcgzbqzRWOLGjlyFJRlkDe99iZ0cEHINSofEQko3hEfiWEckVkzVpsp7DflodtR%2BOncH4X9nBtasCduEdaasWi%2BHv4QVnupYRzyAC8fEdHv0uWjmGzv5aWCBhf19MWDBbT%2F0rg8sHCMJadpb0GOqUBZpEVtHp8PKrb472qDHn543rIdHrZzRC1KXP2BzP%2BTSTz%2FelCQcVWmEsLf6IbYF6Bg7dEeEiOCI%2B4AUd%2FrQKOvtm2ikg%2Bc%2FiIusEmmGCgTEWkwN16yv5qw11fiLJYcwu%2FU%2Bv%2F6cIXaVdRgDAgOSW7nNOXFKM43yNYyta85ADn56VsUI0pebC3MSKTrP%2BsAW6l44b3gpIywUe9ZGcTZZgaATGhvGUD&X-Amz-Signature=c893a91d900ccd5a7a358cafe4227f9d6cf604b14521150b8a100a35ac9dcf1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HC5UMP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD61YGi0naDBBO31b9b2srqMIkrSbzI1Hf4bJy%2BDpZ7oQIhAIT3ksKONcJsTVsY0e8tboETfow80s%2BFmQFIsIY0UdMyKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaQxD%2FA%2F1XsHfPAPgq3AMZLK6vfLCsVY6daLpVXuizsPjkdRpU5tRDHCBzrQ7399IewniWLwr5NPRGwgASLw58rLmPinvYy9zsnbJmHYjLCZZTFTwtGLrPXHjPvDUJVF1NO%2F6nHbnoWKgbcTd0pCDu4dwBUxzjWp9tW0mc9K1vaeDkWUUrDIT2%2BENRPba0pbAYqDCJpe14um5iLRFITfGoJoPwwNZlWDz4zxLn8upiwC%2BlvXJ8MXPIL6NbVL4KtNW3A3VIUMWJ6t79hu674bdHSzl8rn13h5K%2F1hxyjm6uHHRsV34bK60fYnkwWaq2ujq%2FylMjafxpUH0Ma8OZQO0DF9rb6%2BqDZQztQUCUmgFS7ofcgLf3llkUtq6OfcdBam34Fo%2FZl%2BX%2F1sXiyUP8kz%2BvYyWBa4XMaRswBMePeWf%2BuJP57J6l0N4PVldD%2Fequn2m%2BI5ab%2FoYU1VYNZyow%2FcJVEn%2FlxTmT0ABiOdthf3FF3rL0b3CIqDGZLFabDiMGjLFNYEwRGheN3f1p0nMap0eSi3U44eoXRSeNssjZMOzy3vqbSXKsCzQXQuG5Xd%2BpdjxZjYX5oibJpXyWA0hPFrPcNuWWU2T9f3AIYIkanARXjItnNk7S5BeHZJZ6BrAIResWXazoHhsWOA9I%2BjCEnKW9BjqkAfwphXsQxTA6VlLISYRuW7SkM7W2a%2BI0PDB9xO2YiafxJzBL1PS3X0L8LSt%2FrOeyUdylyPFCB5RVfFb9%2BVjF%2B7NoWUTXif8qfueA62FHSZpDAd6qBR63PZ6dsqb64F8EKuBfdanAuU6pvxr6rzGxGznKM%2Ffx%2B9%2FWZktDIZMpImSfjTi6eWAoVY%2B93NlvEo7Mzw2ynMTeBZ%2BWYvGI%2Fli%2B1WfosweK&X-Amz-Signature=ecc09f8801ca9a75303fcd6b51b37fa3079324451a3acc8f5357a075f058ce5d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYITHLNX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsB%2BLc9YxvYzVPzrzAAXL6cuToffyrLuPS0fKcALy6cgIgXfZ7jPVswXUhdqOU1EpNBPzREGenh%2B4y1AnKpMwoLfIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8WoEaW6xCH40w7FyrcAzjXmZjuatZBoaykloC4z0zjy3wuJKkO%2BK15lYXZgdAQHUWI3nFdaaIR0g%2BOEPUBS6cK64iMCdbIEBSxLbKZ8okTE%2Bkz3TiPtm3aA1AiSZ2%2BGz6guIO22QLboGeLC2XLKX2QgyGrYtE5F501NsxI1bI3%2FsUYtT%2FBTL7APng%2Fq1xkoTM9BdvnTyuEfcDls7i9uKi%2FhguzgmOYg%2BlzwJeNm8VaxTIkDIou%2F6fCFfi7MXog2Pgwq%2BpSNZiLoFtvdq6KR%2Bnju%2FW4fL1OmmRu0jW2R0LWtiTrjHE5tnhUIXM%2F8iI430OY0gZ0c0jqwPaYlYzS1k3tYyLq8ytXoGlYpkC06tk8PvY7KSncWDXbjPWFjBU4c5CMavsZ7k9aZ6Ahswk8jmertIMAfzclujQR9UVHpBmxjV%2BD6JqdybnZtXHhNeD1LjFCSOFsNo0RqCv%2FWSmQwoh9n70YCNgnikKQT7vqKmvbErz5BLD7xqMdlyHQs9QMmFPyp4G3Ug9Hr5O38vLyUBdbLEklXpcMbAtlFkPzNoBrlawoUuUtF5JkgO3ejSpn71Cqrw9irD3boScrtZ3xfsIIaTIEB08KmjMo8XeX%2FEeY6%2BTbMznTkoILaM6FGsATDwE8xpN5txi3l8QQMIudpb0GOqUB6VHSbUD7Kh0HURVqLvQCQHH01pa6e8spciTLcDqoc4q19xJKxWSoYJNdplyhed8QUofVQeDoWvpcIRJy%2Ffh9BQV1V2HP50CwF7EdU4XZsm7a07qty6RwQehe0eoOEfd0GL28nmsBV2shTueRCWQQf9GE9c7qQ5UGpB0rNSrRVQzOv%2BOPhrjqOrEU7f%2BvLYTte9wgW9aOWgyXzIXW04dr%2BRoi5p0T&X-Amz-Signature=586f7c062cadb388a8eebd0b23073dfff53d1fed9051d34f4aab0f4829d481c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
