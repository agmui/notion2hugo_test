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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UUU5A3C%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkE6evJgFwXeVtlS%2FxoHT9%2FToxz%2FAPOLBVIjtbhF4XnwIgexbousOiIQhpaAREe9w3VJ96tDZXJiFXM07c4PB%2BrXsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8Qqv7gKxdVYLrh0ircA05mUSmCJYHJmuV2kQrNLl%2FTZYu2JY7PU9DwJ8hojFnnxgMOu0l%2FLd7YlDBJTW94CNU3UdCUacZ7Nbp%2BzNexy7Ncw%2B6n9q%2Fo8KTNAUMj7ZOZOTlX7HMK3Tbf7TW3i4ZtPbyf3KGLMnj%2BKNdP49vrD3SGG3ULtjh0vbJpdsrXSk9Ft2od%2FPCppnmsfJqOWvVt5gY1CbRsyrVFGdiYCCW2PHBIcBzDEKhSSxmoSsr6ZMyZnhuowPbOxm8cxCTN7Yr1hoPU6%2FYhyBHCDd7YXv3Bl2O2RrVF%2BsrK7qT%2F7%2BjqZ5dB7R09Pgdk7%2BYVicg0uoNTWzIru5ywsQeEbR7NdroNSHAgGSoBUa9whX4vyPeYl2dY%2FBkyo%2BRu%2B%2B03YCkcd6Y%2F6FcewAmP3peW5YncqqP403wfousHzJsBsszDyK%2F%2BcZRaH%2FDp7l9GrktYnxtp%2FqFM3Vg67qQtcpXaSQgx6KzmHmUpd3zPMpiclar4lCqMYwwIHYdtF5LfJ6z12%2FjxJIeSQiKfYkaeJMmyiFXerf4nJs4WGcrTHFQ4pbFw6v8iAQh1MhlD%2B5JnQhK7JNJBMstGhQixTHMaJbUZHj6v5AzA2tBNrx5UBaqJn92fZj7D4OVwz07YdZptJl%2F2HAgCMPW%2Fmr4GOqUBSTrQgt45Y2TJIynA%2Bf6z9C1nXILHAiL9IiI9HDIazsjWE1ugYukQnjyGmyCoz4a7rMWMQmPuFEE%2BYSM2c7Tx1r4USHQvj7cLUAmus16VMYXpmB1GlbFpVgPGZhqOc2JRXcs6KBSaC3juOzsseasQVqwIEU1tL6CHrws8J%2FmTGklidSGheFNz97qof3nOqtYMtgM7AIXEtyAQVVS%2BO2q4fOVFPE2k&X-Amz-Signature=a2f416fba114895ae7809e7158cc1508c684192dceb2d8fa464c95195bcc6702&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UUU5A3C%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkE6evJgFwXeVtlS%2FxoHT9%2FToxz%2FAPOLBVIjtbhF4XnwIgexbousOiIQhpaAREe9w3VJ96tDZXJiFXM07c4PB%2BrXsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8Qqv7gKxdVYLrh0ircA05mUSmCJYHJmuV2kQrNLl%2FTZYu2JY7PU9DwJ8hojFnnxgMOu0l%2FLd7YlDBJTW94CNU3UdCUacZ7Nbp%2BzNexy7Ncw%2B6n9q%2Fo8KTNAUMj7ZOZOTlX7HMK3Tbf7TW3i4ZtPbyf3KGLMnj%2BKNdP49vrD3SGG3ULtjh0vbJpdsrXSk9Ft2od%2FPCppnmsfJqOWvVt5gY1CbRsyrVFGdiYCCW2PHBIcBzDEKhSSxmoSsr6ZMyZnhuowPbOxm8cxCTN7Yr1hoPU6%2FYhyBHCDd7YXv3Bl2O2RrVF%2BsrK7qT%2F7%2BjqZ5dB7R09Pgdk7%2BYVicg0uoNTWzIru5ywsQeEbR7NdroNSHAgGSoBUa9whX4vyPeYl2dY%2FBkyo%2BRu%2B%2B03YCkcd6Y%2F6FcewAmP3peW5YncqqP403wfousHzJsBsszDyK%2F%2BcZRaH%2FDp7l9GrktYnxtp%2FqFM3Vg67qQtcpXaSQgx6KzmHmUpd3zPMpiclar4lCqMYwwIHYdtF5LfJ6z12%2FjxJIeSQiKfYkaeJMmyiFXerf4nJs4WGcrTHFQ4pbFw6v8iAQh1MhlD%2B5JnQhK7JNJBMstGhQixTHMaJbUZHj6v5AzA2tBNrx5UBaqJn92fZj7D4OVwz07YdZptJl%2F2HAgCMPW%2Fmr4GOqUBSTrQgt45Y2TJIynA%2Bf6z9C1nXILHAiL9IiI9HDIazsjWE1ugYukQnjyGmyCoz4a7rMWMQmPuFEE%2BYSM2c7Tx1r4USHQvj7cLUAmus16VMYXpmB1GlbFpVgPGZhqOc2JRXcs6KBSaC3juOzsseasQVqwIEU1tL6CHrws8J%2FmTGklidSGheFNz97qof3nOqtYMtgM7AIXEtyAQVVS%2BO2q4fOVFPE2k&X-Amz-Signature=0f799d146ffa92b1f948148b3f36f2134244be77f2b79b5467657be5a14955d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLXFCRT7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FNr1i2g0nCax1LXCmEt%2FOoGBhMqmkle0MxdUpxz7ijAiBvD8cKeJpgnj35Rj%2BrAaGeP3eHWiaTXiuLUP5OJNkIPCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4N8rV4pA2D58NZTHKtwDuOEBv%2F3wDw6Fw7HUtTygGkcBCLguH08lcGSpihfy5QoKhebVeE7l9sFxAEVkPihxfp3owuukbnHjeywMGXdw1CtZ%2Be88Ct9j1Zc3qmkEvBekYo2lGIiA%2FDqgx9WBfK8wYIkxUXOAtLj%2FAg%2Fx8elPOdC0VN1nXBQIIr8UgYnaNL7W30lN18GmzVMzp2c%2BXg8XHLx%2FKIHrNF%2B2MIETQboe6Wti4yU%2B5c0X676ZdjbEx2LsAUlqWjahXh2SyfCqndg8SrOzD7QG7XmQeJlCSOSpkyiIHPCImTeyR8J77F5s0BjOBWgj5MKu%2FsXJKJC%2FO8DJbclyrvA%2BXmNnbnOlAmqTm%2BNJI5lDBYc%2B8kkymadj0RfAN0B2w42WLMrfI60LsmeOGKgQwf4mQF9DIJhqF3STLIS%2FnbJbLBuTXouft3HzSy8haHwhtTQOwGbbZCbgLLn6bIHMc9ibsPR45Wecu5ienPi27JX%2BlwO0Bzlp0q0ErJiLOe%2BhTvbD8a1qZFB%2FhsPpPdBF%2FKA8qTsrCKB3GpuvaTVzItrxwZzU3Vbow8AJkgSvC8UDvxOE2dTwUC%2BYnyfFtHfUpR%2F9nrylQqOsCP5LTI9V79pxqJP0tJAr%2BmQx9dXnNbKHz3IBTbk4G0ww%2Fb%2BavgY6pgGc7e%2F9PEFmfm6vu6yqEEYbnTRc%2FVDRtja%2FKsnhqwAmtfXcgdcRopH%2B0HiPDtH%2FZ59fWdPBYmNK4FtKeBQ9J4mGQ3Q%2F9UXO83HMMvat1pGQuuH8D56OUL%2BrIIOGv4S2w888mwZvbi35%2BeYBD9NBrFk7d9woSOruOIEKrnEFMEcL2p%2F6DfFxu9a3XLDs6mhuYIKzaXZb71DefKUB1B5zl1pq92SU8bWF&X-Amz-Signature=191d57df92c09aeff12c9f2137eb8157ded5249cb007797f3cd58390b994de3a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAONISL3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdTh0h3icBo1qE1k%2BzfSp3X%2FMkPvar1Dnx83Hqb85YNAIgRByfSVXXPGWGEVY3xNnjY4Kf6UKPNrCF%2BXBEwsLtPv0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjdXTi4rTey%2FVCSFCrcA0qIZq1F2n5NTAEhBti0gOkNWkqd6q80aI4Q6FlofrVqpTTC5J3b%2Bvtz26YOT7Qg7wM%2FEr4jGkSTI2rUkf9NjvNxeSJPUnoPBhQ4NXB3BPf7xwF2m3065LV2lcJHFjzaw3J0wxPvMoUomCQfFkXnXfNpgNVOhtvotjchYd35QaRFYErZrF31NyYpOuIQbS4qegPH%2FKOOyFbbLId7f998k2aq8B0Z6v1EmYNguz0lY770OP01AqFC0mhg4XlZq0rX6Q5qx5DVqUOWPCrk7XBXIsVH2gWpRfCwNZSCxH9E%2FPbjS91PbibZyTdgSwZZ73mcvZmEW%2F8qc5BGlg0RBDTZiAfWdB0rGvRfxDg2Ec%2F92qbNl5oEfXo%2BOqIBYw0YDJuLHEwbssSUJvDYfvD6bpNJWnlVox%2FFswbrsMQwNZ0Lnd4XdegfELF9drngYPlkuOuwwQDgqXwNxASMxXnK2BvcNoOIeWrMVy%2FYb0eosGEtq0%2F5FJdAdia9IKyMqKY5izBKoHFkD3A82ARGI4DAZ10fcLZbZ5D31W8%2BBqYvIRUFPkhq02OqG6wEkm%2FMB5Y8MyPXCSDH%2Ffc9S5u1BRXpPSmHE0iYQ%2FHFL2AIf93eLotExohv8rn6%2F5uKXXp69tTaMOe%2Fmr4GOqUB06fwK5Pd78PlLojoRdVvcTA54NWJ%2FiQpP4FAAJzylzNtEZDXx%2B9k%2Fltku3hIODzpFgUoYyUxpS28gEZQKM6IpwrlEVY%2FTWzS7mfkR9A7NUayNZydvmjvz0uclnEz%2BreDqE9u7J5Lc2PxVBZZhJXu2n2ZUavkOsmjwSAhSad%2Bvj3k%2FU12Mblga3CfgdFZKQLpx9LIA2hahDBKn8Ad19ZHodJ%2Bfxvv&X-Amz-Signature=cd728fdc046954089cca41cc5d712bd15e602e9312fb11c8fc3c4788730ef55f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UUU5A3C%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkE6evJgFwXeVtlS%2FxoHT9%2FToxz%2FAPOLBVIjtbhF4XnwIgexbousOiIQhpaAREe9w3VJ96tDZXJiFXM07c4PB%2BrXsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8Qqv7gKxdVYLrh0ircA05mUSmCJYHJmuV2kQrNLl%2FTZYu2JY7PU9DwJ8hojFnnxgMOu0l%2FLd7YlDBJTW94CNU3UdCUacZ7Nbp%2BzNexy7Ncw%2B6n9q%2Fo8KTNAUMj7ZOZOTlX7HMK3Tbf7TW3i4ZtPbyf3KGLMnj%2BKNdP49vrD3SGG3ULtjh0vbJpdsrXSk9Ft2od%2FPCppnmsfJqOWvVt5gY1CbRsyrVFGdiYCCW2PHBIcBzDEKhSSxmoSsr6ZMyZnhuowPbOxm8cxCTN7Yr1hoPU6%2FYhyBHCDd7YXv3Bl2O2RrVF%2BsrK7qT%2F7%2BjqZ5dB7R09Pgdk7%2BYVicg0uoNTWzIru5ywsQeEbR7NdroNSHAgGSoBUa9whX4vyPeYl2dY%2FBkyo%2BRu%2B%2B03YCkcd6Y%2F6FcewAmP3peW5YncqqP403wfousHzJsBsszDyK%2F%2BcZRaH%2FDp7l9GrktYnxtp%2FqFM3Vg67qQtcpXaSQgx6KzmHmUpd3zPMpiclar4lCqMYwwIHYdtF5LfJ6z12%2FjxJIeSQiKfYkaeJMmyiFXerf4nJs4WGcrTHFQ4pbFw6v8iAQh1MhlD%2B5JnQhK7JNJBMstGhQixTHMaJbUZHj6v5AzA2tBNrx5UBaqJn92fZj7D4OVwz07YdZptJl%2F2HAgCMPW%2Fmr4GOqUBSTrQgt45Y2TJIynA%2Bf6z9C1nXILHAiL9IiI9HDIazsjWE1ugYukQnjyGmyCoz4a7rMWMQmPuFEE%2BYSM2c7Tx1r4USHQvj7cLUAmus16VMYXpmB1GlbFpVgPGZhqOc2JRXcs6KBSaC3juOzsseasQVqwIEU1tL6CHrws8J%2FmTGklidSGheFNz97qof3nOqtYMtgM7AIXEtyAQVVS%2BO2q4fOVFPE2k&X-Amz-Signature=578a0fc5113e6846f08f628065fdbf9a625a05e9278e4f3a5ad4f6bb13e34831&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
