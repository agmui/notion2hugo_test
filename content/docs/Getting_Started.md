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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6X7D3N%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7T5Ju9AnSBDKwK%2B1pFkFZPIkj%2B%2FfFnhFwTXZs4OeBhgIhAMTxU6B7KF6593dODIlmeZea9b4gR43Nr73ugk4KUk2mKv8DCGoQABoMNjM3NDIzMTgzODA1IgyLBnJJ6mGFkrfwtEMq3AO5mD2SMilh%2BZzM9%2FckLVc2%2FiMxYQaXRrKggfI4ttTktAg98d5KpiTSqgGhajgPFub%2B01hUqATnFBNaT6KYrYHg8RP1V1cbGOFVdzQTt1otMHKvBDvT6BKX4EqHAIwT3QY3cUzDIl7pe6UKbwEZSU1VmkEphTaUzS9lj1Iq4zFCogo5xDTMLg9RDcJPbf6Hk3ltfwVAdSYhKmq9IGYgCwjPzRhFhbBt1WJQVIaicvxRrgeMLJIhY8TJr84mn9qe7zZMiza4NxbiTKp84wyXe9wQ9P%2Fvc0e1VS0%2F9sfBems2%2FyxvNXBXXiw5ACs6ln6hTDodT9O2dm6FwyAxm8Pf6%2By%2FrvXXzA7le%2FIon%2BBftSLvNoLa3xNNjL3vNdkjeTtsgBRE85rnUfZEXfuclzW%2BqhLblFhdFVB%2FP9w3Z5KUlsj9c8hmbo%2BMQNXinfT49lqBo%2BpJCtn9sBm8ExSFpZ%2B65w0S6RpOevNa3ECTNEuokuNtTnb6vRQEBNpIhAtmed78VHzjUCGJ%2FMcx2X5pGFNakGDLRFdsA7FTl5LDAZhGUEyGQj3XQGkcbpgkxIHjbuPTBmzEiRAATn5JnIkGX4V341U9KnXi3bKz9e1dNkQXy8NGDnDX7TUZc0g881EfMTC8obvABjqkAZO89%2FOOBFBwJqAvvwNo27uM7%2FZ5UztsE01jZrcDaW232cUVsnLNcxjuBgHgphyD0DYDWt9ftcNztSUqYZdHFQPEik3Ear1RxTo2Cgw4irL7f2YkWSAHzpoKHhFSGM9Z1LWSL8AIg6IycF10dqc23Ae33TikqIT7QrSmh5PhlWAn2pbwgSjs3sb%2Bhn1zEDnfGmu%2F0Jpprm%2Byyv7fiqHCQwTeMMfi&X-Amz-Signature=f003a09d1eb15d955922fd0a016eb465839b1c1d16a9f5dc7d622df033e60a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6X7D3N%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7T5Ju9AnSBDKwK%2B1pFkFZPIkj%2B%2FfFnhFwTXZs4OeBhgIhAMTxU6B7KF6593dODIlmeZea9b4gR43Nr73ugk4KUk2mKv8DCGoQABoMNjM3NDIzMTgzODA1IgyLBnJJ6mGFkrfwtEMq3AO5mD2SMilh%2BZzM9%2FckLVc2%2FiMxYQaXRrKggfI4ttTktAg98d5KpiTSqgGhajgPFub%2B01hUqATnFBNaT6KYrYHg8RP1V1cbGOFVdzQTt1otMHKvBDvT6BKX4EqHAIwT3QY3cUzDIl7pe6UKbwEZSU1VmkEphTaUzS9lj1Iq4zFCogo5xDTMLg9RDcJPbf6Hk3ltfwVAdSYhKmq9IGYgCwjPzRhFhbBt1WJQVIaicvxRrgeMLJIhY8TJr84mn9qe7zZMiza4NxbiTKp84wyXe9wQ9P%2Fvc0e1VS0%2F9sfBems2%2FyxvNXBXXiw5ACs6ln6hTDodT9O2dm6FwyAxm8Pf6%2By%2FrvXXzA7le%2FIon%2BBftSLvNoLa3xNNjL3vNdkjeTtsgBRE85rnUfZEXfuclzW%2BqhLblFhdFVB%2FP9w3Z5KUlsj9c8hmbo%2BMQNXinfT49lqBo%2BpJCtn9sBm8ExSFpZ%2B65w0S6RpOevNa3ECTNEuokuNtTnb6vRQEBNpIhAtmed78VHzjUCGJ%2FMcx2X5pGFNakGDLRFdsA7FTl5LDAZhGUEyGQj3XQGkcbpgkxIHjbuPTBmzEiRAATn5JnIkGX4V341U9KnXi3bKz9e1dNkQXy8NGDnDX7TUZc0g881EfMTC8obvABjqkAZO89%2FOOBFBwJqAvvwNo27uM7%2FZ5UztsE01jZrcDaW232cUVsnLNcxjuBgHgphyD0DYDWt9ftcNztSUqYZdHFQPEik3Ear1RxTo2Cgw4irL7f2YkWSAHzpoKHhFSGM9Z1LWSL8AIg6IycF10dqc23Ae33TikqIT7QrSmh5PhlWAn2pbwgSjs3sb%2Bhn1zEDnfGmu%2F0Jpprm%2Byyv7fiqHCQwTeMMfi&X-Amz-Signature=44a8f48e04ebb4e7c4b82ce0d35d1bdde9f9e064f88afadcac9b7e03799f61c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLICHGBR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUMgKRqBZTH8lkIwzdr7lsyBPzWHk%2FRjMkcG%2F65Asv3AiEAtj3usWkA8Rb4%2FasCSuBuPbc7HvRiZvK78tdITG%2FB7rEq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBxOAm0OTh%2BnP4%2B3gCrcA9xtl88s3eQ0CzHXVwBJ9nWXG4IdQWlrU%2FRA197Xzh%2FFTkeP5OVnre9%2F3xFylPzsuL1bu%2FFReU9TO0McEVlOIAR7s3cP%2FrkRXaoeeSIGaXlV69MY%2B48LedlHbHAcakzFqjk21uWs8eoN9Rfo1fLEWa6JQ9mHfgbYVJlHtRtaVSjxCxuHcF1yUaNxmQmOnb%2FHCSYUDtGa4akp1690qQLabx4m0Tyw319RlIxXtGqrdhqCJGfLpowv7JBVDOIdjurTROLv6COrv59sd3kDNzenA7MvEkJChqlSqpI9m5NSX%2BnDGwL4lrD3%2FVpXyowiq4yAPSYVeOHqeW0kBjVpQOihpQk8joWen7%2F3T8cwGCoAntQjF4C9yIevDSH%2FvQ0tA1f45dB0%2BluQ74yx6j%2Bx5rRYzSov084OqSZi9MRxm%2B3Ao8nfeiw1n4L3BzgZMVYBTR3XnFnVMqW4hDOtF42gd26KDhwZJ6Krou4L3bfYsJrHI6pCQ4syGT%2FIXQOwemQuc4IqStAKLDuwSKGRYjnFPxD7gS5L32nFAO30tnaN6kZGaMb5R3i8jep1%2Bsb6%2BlGCJlQFY49KF6406pFfnV3idjm6974HMKAPtlRS8WeW%2Bduq9JU6vYFrCmKmIjzOj5FMMIyju8AGOqUBufl0pDn91PdV0e%2Flw5gkidwx8vTbghZi1nKDweYkIrc4xCpmC7jaqbuxmjwsQpos4t6UasIEORIF9FIfsvEczjA5FHc0Dv5PiqJ%2FwMPgjB44rmBWtKygIR43%2F2K%2BfaJAdc0CUAqjz2xq8iwMNlbXOzfy84B3enSsme2O7b25NBsm7dHifEq3YkRGM8Tzr%2F0eRCnBGEEgrPdvBfqEWVP7TPaRlIrY&X-Amz-Signature=3ccb0a4d06d4bc13f6851dc46874b02759ec7d543417506717465229f132bff1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCNQVBB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUC0RGaw9NSM0OJAD3mu2l4Txv5WWVS9Zau19uOWtPoQIgGUmGdiTpo2BSKaVGAPljboiShbDOi7dHTRxAeTqjAYAq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKCc1RRlRaH5RIMDnCrcA3YVqwecfLFFjY%2FDvkt9HkHv%2BW%2F8mnvjoZNGoSk89MUdNhz8y%2FNFBWOij3MRT8LksD9Ix%2FLxwygNCZ5a2vp43g2P1kBubTtwQ7w05l99Lv4%2F1H8k6LIg4GzMKDrQLHaGRlSWeUUNMMh7hPCVgk7B7PS6srfEbRGLZxeiSAdgGquD5vjNvXmnCUBmeZLa1kieseUu4joxExMBKSwD38rbo4t%2FadBRUlusqCjV27jKSSyJ8sxa68bc0VjFfyvM%2BwWuwNjZDW9fFbUeE8qcB8kgEqBApeWiXzVUKq%2F4lfXUz0UTzAJ%2B7gLUMMC6K3Sflsa%2Fa0%2BAm6fILvWoyZQE56g3xj1SAxfMc%2BcECE%2BgdD%2FwJBDuC%2FEaCT99qOmgOrkKXtT3TgRuU3S5rlR41CkbrkFNA6LV0apF17gEJzFZJlFHrj2gol%2FV3f1U9lxFt%2BtBdkp050nMXYK%2B4Cha1CnHP2R25VGx9PyGhRQFiSAUUiXQknRs0wiUrRA70FlZIMFNxU2GxSe0XqB1gK03NJsFf0K2MzJ8rkq05hRnfzivfHUzv6W2phx1GBftnZPc6dCXolxn01G5FUvHHoi3UBEgyIjzcupy7Sb3G9oRE9cb3SwaHJKjLF%2BV1Aknv4zPhk8DMKCiu8AGOqUBYComLSi5MAPTbmpsxYDigvySHyqmTOlTchEz2pc91r7iwmBPnckcA8mRAnmrv782J3U5SRbi1vZtb4z6EN9332NNF6YsRyWLf1CVXATeNB%2F8gl4mOI8AysAXDN0dSdyT5wP%2Fd7ncaFcbnzGs7gOVymQxEBlQqE6CcGko8O60vUCNHomwEmxqcZjziz7fXrAEcRne4Jm%2FqNGTyLXCvy90ppou5MiF&X-Amz-Signature=3522a0569822e7aa43df6d8f95f3a3bcf7d02dea061b10b9d8897b48a15f9d00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6X7D3N%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7T5Ju9AnSBDKwK%2B1pFkFZPIkj%2B%2FfFnhFwTXZs4OeBhgIhAMTxU6B7KF6593dODIlmeZea9b4gR43Nr73ugk4KUk2mKv8DCGoQABoMNjM3NDIzMTgzODA1IgyLBnJJ6mGFkrfwtEMq3AO5mD2SMilh%2BZzM9%2FckLVc2%2FiMxYQaXRrKggfI4ttTktAg98d5KpiTSqgGhajgPFub%2B01hUqATnFBNaT6KYrYHg8RP1V1cbGOFVdzQTt1otMHKvBDvT6BKX4EqHAIwT3QY3cUzDIl7pe6UKbwEZSU1VmkEphTaUzS9lj1Iq4zFCogo5xDTMLg9RDcJPbf6Hk3ltfwVAdSYhKmq9IGYgCwjPzRhFhbBt1WJQVIaicvxRrgeMLJIhY8TJr84mn9qe7zZMiza4NxbiTKp84wyXe9wQ9P%2Fvc0e1VS0%2F9sfBems2%2FyxvNXBXXiw5ACs6ln6hTDodT9O2dm6FwyAxm8Pf6%2By%2FrvXXzA7le%2FIon%2BBftSLvNoLa3xNNjL3vNdkjeTtsgBRE85rnUfZEXfuclzW%2BqhLblFhdFVB%2FP9w3Z5KUlsj9c8hmbo%2BMQNXinfT49lqBo%2BpJCtn9sBm8ExSFpZ%2B65w0S6RpOevNa3ECTNEuokuNtTnb6vRQEBNpIhAtmed78VHzjUCGJ%2FMcx2X5pGFNakGDLRFdsA7FTl5LDAZhGUEyGQj3XQGkcbpgkxIHjbuPTBmzEiRAATn5JnIkGX4V341U9KnXi3bKz9e1dNkQXy8NGDnDX7TUZc0g881EfMTC8obvABjqkAZO89%2FOOBFBwJqAvvwNo27uM7%2FZ5UztsE01jZrcDaW232cUVsnLNcxjuBgHgphyD0DYDWt9ftcNztSUqYZdHFQPEik3Ear1RxTo2Cgw4irL7f2YkWSAHzpoKHhFSGM9Z1LWSL8AIg6IycF10dqc23Ae33TikqIT7QrSmh5PhlWAn2pbwgSjs3sb%2Bhn1zEDnfGmu%2F0Jpprm%2Byyv7fiqHCQwTeMMfi&X-Amz-Signature=2bcd4d96cea0617a324d29898eeefd28d349bbe2cf67847285a13cfa57e6f8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
