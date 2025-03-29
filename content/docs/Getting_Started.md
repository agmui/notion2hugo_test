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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKIIGHGH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCzXHBLHnBDXxu%2Bq23guMlCMZhA%2FWS%2FgvJAWvxWXDYN6gIgAYE8OKNfE8r9sgjXhSrzQZIp9Ia%2BBCFCZps5X9xDcOAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG0QfPChZLC7C5kCQircA4YvJsfB78ZckXTl7e4IX6CbT03ymldD1VMD%2FtT5HXByrz1UZbuHiVhcgH%2FFpjkSDpsFJcMkkjVpfejGXmOWU88KvFm7blKXzv2DspXgp8V8bZWDdDuBrC%2Fq7lbcWXpsIOYWzquwM8GOHzx%2FgX8zgyqNomKh6%2Fs0iNMj8phPFUR49ePLnzJgvMH57%2FLk%2FXRO8wfg0NwAnC4ITfCA3aH6B%2B2Pzt1Bh9iMGbxRLntLpirOnnrg4cpSLp71rZ7mTjzs9Fru9Kyu%2BANoMFUsS17xy5NGLAMlRt1TNOVQnNmESI2ULTominPsCqLWSkbVDVEURTzJm9OJKstyXl7sEJZNwmwO4frJK9vo36rH7iCEbB13Wk%2FW8fqLi7mMD%2FNTOcHi4MrWdtODlTWEUAR1tIJvrumz0uwkO5FatXQ8KquFA6q8lNM5e4Cb2jBAyG3Lgm6MExgUY3H6cueQrzChHkqM30N2C1xYZOLL9SLe7dHH%2FiIXFi7SScgv8uH6c8g52BFFmai5NLP3ZmTRAv8DRmliw%2FoVza%2FyCBaFqhesxHDL3Wtn6A2lHRxP%2Baov9FYwl%2FB555os7otu0NKJbZMtcunT91lNJem0EjhX%2F9ixCQGurvAdHIBJduWjoMOfuSQYMIKoob8GOqUBiT0i6UZ2JKAhHufYqOEjkJoLStSitIIKlCkHduebZ2WPLfKj1UEufNs1ohdKhLMi%2Fp1gf31KthNAYqDitQxKadedB4s8WUP00q3JcSy0ono72r2UP1CIoTPcikNU%2FQKULTTmzaJb4%2B5ntUEH5bVJxB6uHUrXku%2BleIL5U92zx%2FYGTvtQqqVlSie0hzQXWbhYUahxsS0GPkaSmBzxzW8gkQGuAklK&X-Amz-Signature=8a90fab195cb043b3f25515ff94776e9b27eed5480dbb3b30f21096ebda469db&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKIIGHGH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCzXHBLHnBDXxu%2Bq23guMlCMZhA%2FWS%2FgvJAWvxWXDYN6gIgAYE8OKNfE8r9sgjXhSrzQZIp9Ia%2BBCFCZps5X9xDcOAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG0QfPChZLC7C5kCQircA4YvJsfB78ZckXTl7e4IX6CbT03ymldD1VMD%2FtT5HXByrz1UZbuHiVhcgH%2FFpjkSDpsFJcMkkjVpfejGXmOWU88KvFm7blKXzv2DspXgp8V8bZWDdDuBrC%2Fq7lbcWXpsIOYWzquwM8GOHzx%2FgX8zgyqNomKh6%2Fs0iNMj8phPFUR49ePLnzJgvMH57%2FLk%2FXRO8wfg0NwAnC4ITfCA3aH6B%2B2Pzt1Bh9iMGbxRLntLpirOnnrg4cpSLp71rZ7mTjzs9Fru9Kyu%2BANoMFUsS17xy5NGLAMlRt1TNOVQnNmESI2ULTominPsCqLWSkbVDVEURTzJm9OJKstyXl7sEJZNwmwO4frJK9vo36rH7iCEbB13Wk%2FW8fqLi7mMD%2FNTOcHi4MrWdtODlTWEUAR1tIJvrumz0uwkO5FatXQ8KquFA6q8lNM5e4Cb2jBAyG3Lgm6MExgUY3H6cueQrzChHkqM30N2C1xYZOLL9SLe7dHH%2FiIXFi7SScgv8uH6c8g52BFFmai5NLP3ZmTRAv8DRmliw%2FoVza%2FyCBaFqhesxHDL3Wtn6A2lHRxP%2Baov9FYwl%2FB555os7otu0NKJbZMtcunT91lNJem0EjhX%2F9ixCQGurvAdHIBJduWjoMOfuSQYMIKoob8GOqUBiT0i6UZ2JKAhHufYqOEjkJoLStSitIIKlCkHduebZ2WPLfKj1UEufNs1ohdKhLMi%2Fp1gf31KthNAYqDitQxKadedB4s8WUP00q3JcSy0ono72r2UP1CIoTPcikNU%2FQKULTTmzaJb4%2B5ntUEH5bVJxB6uHUrXku%2BleIL5U92zx%2FYGTvtQqqVlSie0hzQXWbhYUahxsS0GPkaSmBzxzW8gkQGuAklK&X-Amz-Signature=99ab2c8d523b684de0b3feca04f031cfd496fa39cc94be6d275cb348c2975ead&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNXOHR3W%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFPjapCs5M9IxHu3lxUnzR68C%2FDeFFXk1ewwhsbxX21ZAiA%2BTDs5WpoVCo7mpUfKm8l5TeObKYA%2F62cZqMaOLbp14ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM7nnA1igb8PTfmI8uKtwDPvCPIYR1UahSHkVCoWtFUgWW95GJOtLmCTadbK8u%2B8hQ%2BhnS1A8%2Fsdcz8quwMLmBj2%2FHn4ZUYq7YSJ8uhojdO75yqZLVeOP5z4YOpUtdg%2BF1t6ap5p4S%2FfvRS9UOadom7USapYqRCB6xkcpIaLTWWfeD5AwY65WfZq%2F4%2Bms6qrHVnGEOuIO90%2Fg2WqGASeszwR2PXyFXIa70WoHwCVFgHgFzsAlIJjLMgDQEFIEjdhcpmSs96%2FzNkq%2Bo9l4exF6iJVpvXGqmlkspVX9UPV%2Fx5lHiKdzR3O095fwsiHFGKKfFKOjlHtj%2Bj8qHsfxAZockGVuzPirLk4cQspbx11EnMVjllKm14q4f8oU3SRaBH7xTllI3KQOeYHCZ9jq1vV%2BPuaXUpyij5U5FEpMVoBvfgiFZAfHd4sNeixQhtdFKgv3vHuRCUuoxIeJS%2BSodOvmBy70xOtGD2wyh6Xom713bJ2nhijDUuYCvxQ1T8343%2BFRJ0EZzsxi04LhxZ7UEH6Fxw10jmw9pQX4SrAzjHD%2B5yERP7WFKRNJipjCgZLMCjA%2FYgYV7WfnsA3gFIDthRe%2FLTK%2FCPAKIqh14fEx8v5COQ9f6WvZ2VstM6h23b7%2FAu4MOZerJNoYrE9Jc1HUwk6ihvwY6pgFxOv%2Bc%2BWmlhWtySnUcz9%2Ff1cJOCioVrTC2NYIoy7OHhbHnQ5NVWzSdFAShc6DHWb%2BUvCwJXkmTLLZPN9EBgIMeI2rDx4PDuxBi6BWzrYUpVVeAxLy6H9LqzvHtShKyDTm4X5Y%2B0AOgB6ZsSOP%2FPBm0hf%2BZ99aMEb%2Ba3%2BhfXlB1q2hULbGJC4Rj1s6l2hOS4ycHC2b5yqltrNAUkd7g%2F4eIKXZv8x4h&X-Amz-Signature=3769f9e9046411a3ea49d8d6b139a6c7833a581e9133061da97df4c01f76cdef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5J6J54S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBpebGwfBGzlfCn%2FpHBsdVrPGR6eKyYcuhlrESrmtr0UAiA3hVVJ%2Bs%2FPtEBd1B4n2vl2mgxZgmkzGRMJehUI5H6nHSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMnPyCIGEI62W7M6EtKtwD8oCfzMRBh9fOKr4sbOz9qrKvIAgnUXPMBuLM4%2FbzVlHGLe5okI8QgUCLIbcNAxwXgIXWNPmPmRcZUF0pTZ0l9H4G%2B8sGtaB92%2BEHD%2FlORmVIIejBXTawFgruolH3mRv0whGZb%2FRTIdmKO4Bdel7Hxm6vKHXgyRVj3oq9xoDXXqe4UarNylWj5X1AHu88top4cYU28rVs7AVknvUZ%2FLTe7rxi7bQuQ6HWFeCWxOJnutQwVKhEEHK5pNcHDRzs2K%2BduA0vSsO0CFPc%2BygjoFBDwZoiUALGlejJ6ghRe4zrV%2F4ji7KI2K3N1VUFKYbWdlZRPBugz5G%2BGIXWdh9Vgsu11DY7c6La3AkWLePNFTmYBEc8Gs1Ijrl94bFlvzSZE8k2qo7BcMWoIAeg09LeHvEvLmzIAMOAvB7NvcKhETzloF42qHzqKmXAqS8HipIc3OPRhBdWrAzJLBik5k5oYsu23a1JNScBjlPjH2rZCYyXJ%2FVJJLBWfDAi43Md8X22BY7rNhweK8ICr%2BOyegwxMdEk%2ByER7x9RJyeHVfa%2B3PdpOyrh3w0IMx90TFLl46LwTzLjwq0QdfmSgdXwiXklAZENrSuCMhIliw93hg3wGfkPQVvA7luxSBYwnncwvPownqihvwY6pgG7NWAF57%2FnxAb2WmJ3jh73TLmNnQQo2qsArqGvsZ3P2Au%2Fnywhm1YBQdLTB87RVvrrVOwtGxWR7EUErsCUBrVCo%2FPd3cgQMH0l0rEXiNeQf6J3XIXov%2BqB8DP0qS03DefaCk5rc23qBMQr7PfkBMGDABvHvoEWgnA9CmqqzDkN%2BjeHg2qFTQbSXPsH9qg%2FQUOuF4yik0ev6mlvxJBhhCJ%2Fsjw9ctrW&X-Amz-Signature=5a1e7d0d2b6fed5e7c3533ee63e25a2236bc6883fc156f36418858f245b97b8e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKIIGHGH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCzXHBLHnBDXxu%2Bq23guMlCMZhA%2FWS%2FgvJAWvxWXDYN6gIgAYE8OKNfE8r9sgjXhSrzQZIp9Ia%2BBCFCZps5X9xDcOAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG0QfPChZLC7C5kCQircA4YvJsfB78ZckXTl7e4IX6CbT03ymldD1VMD%2FtT5HXByrz1UZbuHiVhcgH%2FFpjkSDpsFJcMkkjVpfejGXmOWU88KvFm7blKXzv2DspXgp8V8bZWDdDuBrC%2Fq7lbcWXpsIOYWzquwM8GOHzx%2FgX8zgyqNomKh6%2Fs0iNMj8phPFUR49ePLnzJgvMH57%2FLk%2FXRO8wfg0NwAnC4ITfCA3aH6B%2B2Pzt1Bh9iMGbxRLntLpirOnnrg4cpSLp71rZ7mTjzs9Fru9Kyu%2BANoMFUsS17xy5NGLAMlRt1TNOVQnNmESI2ULTominPsCqLWSkbVDVEURTzJm9OJKstyXl7sEJZNwmwO4frJK9vo36rH7iCEbB13Wk%2FW8fqLi7mMD%2FNTOcHi4MrWdtODlTWEUAR1tIJvrumz0uwkO5FatXQ8KquFA6q8lNM5e4Cb2jBAyG3Lgm6MExgUY3H6cueQrzChHkqM30N2C1xYZOLL9SLe7dHH%2FiIXFi7SScgv8uH6c8g52BFFmai5NLP3ZmTRAv8DRmliw%2FoVza%2FyCBaFqhesxHDL3Wtn6A2lHRxP%2Baov9FYwl%2FB555os7otu0NKJbZMtcunT91lNJem0EjhX%2F9ixCQGurvAdHIBJduWjoMOfuSQYMIKoob8GOqUBiT0i6UZ2JKAhHufYqOEjkJoLStSitIIKlCkHduebZ2WPLfKj1UEufNs1ohdKhLMi%2Fp1gf31KthNAYqDitQxKadedB4s8WUP00q3JcSy0ono72r2UP1CIoTPcikNU%2FQKULTTmzaJb4%2B5ntUEH5bVJxB6uHUrXku%2BleIL5U92zx%2FYGTvtQqqVlSie0hzQXWbhYUahxsS0GPkaSmBzxzW8gkQGuAklK&X-Amz-Signature=54fd5ca08b51e80b7242b780d4df1102ffc40e5d6f951cd957b9bfbbb4efd624&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
