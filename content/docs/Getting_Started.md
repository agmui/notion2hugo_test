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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7YJQZN%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjRCiCUSBE2lHs09%2B%2B3XARjk4G6o8hg8WXPZLUfDi8JgIgf%2BWIOYgsPjrucBYKPQT%2FPNd3EDTfwGZfsyZHrlfAGz0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHNAAx%2BtfTbPFQkxyrcA3xnigaN66Ctdpp8qMSucWvatXBvmBM4cnrR1LzjPEt6bHBHecyzk00s6l9P%2Fff0V5X3jEEOlObhqRhB0YntpT8JSLU5ZlQSogo4Fs66%2BfrScUd2J%2FLdFu5chDaL9Hj8tkJcSlplxyaENvoBiOykn8AS6auzHYmPJIiITv3xwGZpt%2Bx9LlKJgbfCv2KRsFw8z1Ehjuu6OeCaQrCbKgu2WbjMgKOXUnYvAPZJakh%2FaCwy%2FgMXLSWW4%2F%2FdKo8cJZTmxteiNFpgxPp9hj9YQkB6Tlysr6UcfNKgWG7qlobINWqtzK5U8oFXOUdv0WQzx4qt85WJEeBIFmz6IUGTvx1XFA0NMQtdHihVFUteW7VEH55L4Muh35YQ2Z6tbBpbAs3R7E1Df2HHCdHjB%2FFdui6SVABVp0IJf3I4d43ss0IuZJ6SBoghVOrFz9dWB7BV7w9OompJ9HaEjyfbPWNoJsB3U0P%2BXQ7Qwc3WMa7jDxzh42ITpySHr6kGrRXLVB%2Fz3eT7jsjdzPFRzwWtrjt%2FNam6MlTvQiKXtQTgr7pR4RK92e56ysM%2BqVuPG0gAFGAfmYIdeUZ6F41UZOKochSdDujmsZFnvo54g4HpgeeDcKhuaxGp3gHGnV1z1xs4OI7UML6Ytb0GOqUBh%2FuB4CLHEAqusZMpIr8XJ1zIauXwYjm8WDl000jTbcAQ4sEcB6KmkeOvP%2FUOVY9%2BXzSRzjOk1NVmkIk6I%2BNYltCdOH6CqXSKX2LmSi4%2FhnxaiHJH5va1QeoeCSI8uosezOUM6sQX3wxXgXbMqpsVriWxdcmFpBDycz%2F1VuCtHemSJ%2FFaWw%2BVL1MCPtZQFa5amipywQ8gq%2FfpqDcoDVEivi6ck2Be&X-Amz-Signature=2b8049c2cb60dfa98ce4cc8f0cf0cfc3cf1d725a2e2fcf4c4c69ebba811dcd31&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7YJQZN%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjRCiCUSBE2lHs09%2B%2B3XARjk4G6o8hg8WXPZLUfDi8JgIgf%2BWIOYgsPjrucBYKPQT%2FPNd3EDTfwGZfsyZHrlfAGz0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHNAAx%2BtfTbPFQkxyrcA3xnigaN66Ctdpp8qMSucWvatXBvmBM4cnrR1LzjPEt6bHBHecyzk00s6l9P%2Fff0V5X3jEEOlObhqRhB0YntpT8JSLU5ZlQSogo4Fs66%2BfrScUd2J%2FLdFu5chDaL9Hj8tkJcSlplxyaENvoBiOykn8AS6auzHYmPJIiITv3xwGZpt%2Bx9LlKJgbfCv2KRsFw8z1Ehjuu6OeCaQrCbKgu2WbjMgKOXUnYvAPZJakh%2FaCwy%2FgMXLSWW4%2F%2FdKo8cJZTmxteiNFpgxPp9hj9YQkB6Tlysr6UcfNKgWG7qlobINWqtzK5U8oFXOUdv0WQzx4qt85WJEeBIFmz6IUGTvx1XFA0NMQtdHihVFUteW7VEH55L4Muh35YQ2Z6tbBpbAs3R7E1Df2HHCdHjB%2FFdui6SVABVp0IJf3I4d43ss0IuZJ6SBoghVOrFz9dWB7BV7w9OompJ9HaEjyfbPWNoJsB3U0P%2BXQ7Qwc3WMa7jDxzh42ITpySHr6kGrRXLVB%2Fz3eT7jsjdzPFRzwWtrjt%2FNam6MlTvQiKXtQTgr7pR4RK92e56ysM%2BqVuPG0gAFGAfmYIdeUZ6F41UZOKochSdDujmsZFnvo54g4HpgeeDcKhuaxGp3gHGnV1z1xs4OI7UML6Ytb0GOqUBh%2FuB4CLHEAqusZMpIr8XJ1zIauXwYjm8WDl000jTbcAQ4sEcB6KmkeOvP%2FUOVY9%2BXzSRzjOk1NVmkIk6I%2BNYltCdOH6CqXSKX2LmSi4%2FhnxaiHJH5va1QeoeCSI8uosezOUM6sQX3wxXgXbMqpsVriWxdcmFpBDycz%2F1VuCtHemSJ%2FFaWw%2BVL1MCPtZQFa5amipywQ8gq%2FfpqDcoDVEivi6ck2Be&X-Amz-Signature=39a3ca14342de452c4a978cf4a72324dbddfcb58d0b5713151267e5fbc262c91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIK6WHA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXgxolagVejXz%2FJzX3AC0KSGqT5A43k8qYX%2Fo%2BVIcrkQIgGLLE%2Fmtx%2BtR12TWnpVa3Hq0mfv0D6hGZPm8Z77SC1fQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmOJQnZcptAsPzzlCrcAzWBa1Opf1smGFiOgNjd4H31ytZVrP%2Fnnu5fRxOUaV3Z0ubVaguy8MKv7N2PI1oiDZJzCpWObCZEdM7CVWX4Khp0ymvn6xtdkTBa9TNXDHBtpQhgOFBcRy8muvO9M7Ee%2BrW8ynUePSu1vuP6y8daKvBkoAaXZTjm2fvWhmODUSGBjQYy20fMwlaB2AB4DK7%2BMuYbYTjwXfLxPy5w5qUbJrNgkAFYdJo9%2Fo%2BZxvA7ziI%2BjVtoD1%2FX6uEaUW3vsv5FRymBl6TGDjhLeZBfmjur%2FO92YpMVzR0vHUkLXrGwRt0fTTCfvda%2BRqLm6w7HjX2kscXmgzX%2BS4TuH3p6oQ%2BgJmRy24YOfhbctW9V2bPRIPjevIyiaRDCB6GyHkTXXMSL1e3rWXfWDXa3BBNch3KxU2bJDgj79%2FfZPPMx8F8hvVH6RegrVZ0kyLECgi1F%2BCSWUZYBuyCH34PQcaYltuy5yscq3zuQ5rRdeqgouSkV2CBO5g9oXVlaFWEsQev77ZiQFcViUuoUGWZFDOUMLYm9HWIJm1eIAwVZHq5dV45ZTaVtUvpSx83tCN8eMFts7VpymrR098ips9lzDbMtFx%2BFtUp6lsNkcFFu%2FQNnY0g6WvAW8ONvtf6mgajn9r4gMM%2BYtb0GOqUBFINlglhHZN2hYcfk%2BIGB9s2%2BnVV5an8faw5kUiEbQobP5b75A2LmB9jHzNzmboC73%2BYUR8WuQe6ldozwt4WivfyqUfPNrRl8XWEwitED1W5Nf7rrZYtVpasctbtB2Q2ovIs6aUsAL4W%2Fez1mJGxCC8fNMVagm6lOvpf9QBCDppYvMdzZOZU9UMkaQfWz5Dx0zogTyAJpH79kLzUQdYduRFgID%2BD7&X-Amz-Signature=e8874c964f172e9da9b260b9e6f2b91e07e7aaaeb92fa24683e0bbdae0168678&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IGRMN3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2Bd0Ax99H9fyIK3nK8FqnFm7tNBUSDveLoj6gOt%2B9RAiEAzPm7sOmYabTOTrshITnM96HPN9DPuQIIF3R62WJs%2Fy8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKzG5v84tp%2BBCNMGSrcA%2F%2B9T4p2ToFwI%2Bu%2B5RoWsdXRHt2WbSknI2Q5DiNQuO6rgT3MiNeZb14fjPGSWi9wHmFc6CXU6yGtAN4haxsaN%2B5B1k6G91915yp876pjWbkZBmlisLhiNbuX8p8IHsybs5zqOaSBI17qkwOfFZr58kgflMpQg%2BqW1k2Skl%2BPmSrp4PXF%2FgA7CSpi%2FeCkrkNrtGm9HW7jHVc45dqDT7ZawJJgOJOCcPWZk2d%2F9C9XtcpoT3fNIObWbZ8lY%2BAQV9TTpIQ6JZLXZyfQudDDr9tDGs58dIoTUGqTtO4nY7YVmOEi2hY0I181IMiFKAJrenZ8U1N3gvH7PBtm02VTxW6x3pexrk8IFaNPrioaEpQzsywb5gqcsz3tkPeiR0HfV8ZjuuDpc0yDAtmmTY2fTIgKNWv0xZdcmNFN2ymUNL8OPCnv9ArE%2B3rWPhPKZjLKgcFFdfeKWD4e07gitKV6rhmHYAd9AKg58T6Al%2BgRhOcWCFB%2FcWPtFUNgJnhaMm%2BoUui9xV768ZZpooVWtNZGplKGW2Xbt8DaTMCtmpjDQF4X1mooXIzPwvgQsscRPE%2BoBoVEdx4iVg4wfabGS8yc44XiXdL%2ByeNB0rEozWWStaDw5JL4tA1ftioWli%2Fflkw6MJuYtb0GOqUBqj%2Ffc1fY7H%2BRGXWJa5J9kffAbwx2x3qv50%2Fpjfe2pbMIFkNFayHe3Hk%2Bv0e%2B5GEWkujgxdPrjAEWIvnhV31USmEcMrCYcf1SL9ZCPb5diOMAFe4HYsK4fzFu0%2Bi0nsLCOU2ht66IjrtQ3MUbNIq5jlBvfnATYXnvxXvcYbAG6ZTcVfr7w7hSqlQFqJbcSl7vFGkU7GgyQxRxDdHoQqF5sgiUkOL%2B&X-Amz-Signature=2e8c98ca2bfd597b745737c2d08122433d09243c0ee0ad682b47847029935ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7YJQZN%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjRCiCUSBE2lHs09%2B%2B3XARjk4G6o8hg8WXPZLUfDi8JgIgf%2BWIOYgsPjrucBYKPQT%2FPNd3EDTfwGZfsyZHrlfAGz0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHNAAx%2BtfTbPFQkxyrcA3xnigaN66Ctdpp8qMSucWvatXBvmBM4cnrR1LzjPEt6bHBHecyzk00s6l9P%2Fff0V5X3jEEOlObhqRhB0YntpT8JSLU5ZlQSogo4Fs66%2BfrScUd2J%2FLdFu5chDaL9Hj8tkJcSlplxyaENvoBiOykn8AS6auzHYmPJIiITv3xwGZpt%2Bx9LlKJgbfCv2KRsFw8z1Ehjuu6OeCaQrCbKgu2WbjMgKOXUnYvAPZJakh%2FaCwy%2FgMXLSWW4%2F%2FdKo8cJZTmxteiNFpgxPp9hj9YQkB6Tlysr6UcfNKgWG7qlobINWqtzK5U8oFXOUdv0WQzx4qt85WJEeBIFmz6IUGTvx1XFA0NMQtdHihVFUteW7VEH55L4Muh35YQ2Z6tbBpbAs3R7E1Df2HHCdHjB%2FFdui6SVABVp0IJf3I4d43ss0IuZJ6SBoghVOrFz9dWB7BV7w9OompJ9HaEjyfbPWNoJsB3U0P%2BXQ7Qwc3WMa7jDxzh42ITpySHr6kGrRXLVB%2Fz3eT7jsjdzPFRzwWtrjt%2FNam6MlTvQiKXtQTgr7pR4RK92e56ysM%2BqVuPG0gAFGAfmYIdeUZ6F41UZOKochSdDujmsZFnvo54g4HpgeeDcKhuaxGp3gHGnV1z1xs4OI7UML6Ytb0GOqUBh%2FuB4CLHEAqusZMpIr8XJ1zIauXwYjm8WDl000jTbcAQ4sEcB6KmkeOvP%2FUOVY9%2BXzSRzjOk1NVmkIk6I%2BNYltCdOH6CqXSKX2LmSi4%2FhnxaiHJH5va1QeoeCSI8uosezOUM6sQX3wxXgXbMqpsVriWxdcmFpBDycz%2F1VuCtHemSJ%2FFaWw%2BVL1MCPtZQFa5amipywQ8gq%2FfpqDcoDVEivi6ck2Be&X-Amz-Signature=926d6e03d0fa7c8bc7ee83173edf3ca29263cf6f0078bb92728f8dd8fc06dab5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
