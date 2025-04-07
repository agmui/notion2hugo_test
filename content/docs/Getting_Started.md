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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STHA54BA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9LEtoVpQZ0jyCibWBJn9IQTAKtktmpV3kszs%2BMi7rhAIgDutE%2FXl9%2BUWGJNtt7%2B3%2BQz2nd82e1dxmu8MXNocR39Mq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCtmNSKgyUru%2BjTOeircA3MX6BmewJKNXe4CnJ%2FnfNIluP%2F363%2FWJOIpw%2Fep91M1UrBikVHdyHOWd7dcFIcvKedJ2W%2BUfJYEOrdOsPbRKofHTucJI0esNG7pnDtPJ%2FOX6zI1%2BCfRsrIqM0o%2FYEipoCMI2cyiNZcl5zjWr94nr2ETKn1tAWjcRPk%2FVr%2Br6SY%2Fync4rjTsRpmsTUqZBgLDa7gvzxCfVVMY%2FnKleO%2BpLyERSsL2mvy%2FCbO%2FJqhlJZwsIXQESxRG0Z6w3I6DlEgDneNVe9q2Py4JWlvVUgytdEJqgHukZRXzZCXS3LBPU81hhQ%2BE2d4h5GxVRDh%2FU5%2BEH142SBFunus5wqA2DTCbR79ybUcFfKk06UbJX1R5g6bDb7OP0%2But33eOmKP3GNlL%2BfGkDUswqmfLWhF92Z%2B5owjo1c%2Fxld0skxd3NVjGDydb1k%2Bh87GnQ7ILfyrf1m0vOOvDj1XN5wmnjHgTIiGznyTQ7I8fC9eejylJhGvxngt8sZqAc3QLWdRvWQOyVpQIIbOBtr0yMi3IKQQVGqAouSl%2B%2BLW%2FvL6mGPHbjTHaFiVrCduoMkIeuCiTlRn2R1LxO%2BRM8F65wVuBKplXYETMu317WVPwdO6LHPI7cWIhIAu7pwVhI4ZizrhRn5k7MMDSzb8GOqUBecgEyzoRxnOELq6VKfmOUVLBl2CgzBuwHmsd0oRJoYdNtkP%2F1GvjnQw0hqHYLmlZc2fOJjxUyhJGCus%2FPIe%2FsuFMbEgoXEYrX8zl7ZuSkAoUEaBC%2BITB2%2FJubhe49B8aCSgtbmnvAjOW3qgSxZgickQNdvrwgGSPjNoRYIYfwsnIN2DdaSwcOejhbIKAzYExvHswZ7uM1%2FsU2b7hPJLxx2d2GRIk&X-Amz-Signature=b7796ec29f97da6bbf6aa1d319891ac3e0c263ea78368bf6dd04e8b53fdb6f77&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STHA54BA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9LEtoVpQZ0jyCibWBJn9IQTAKtktmpV3kszs%2BMi7rhAIgDutE%2FXl9%2BUWGJNtt7%2B3%2BQz2nd82e1dxmu8MXNocR39Mq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCtmNSKgyUru%2BjTOeircA3MX6BmewJKNXe4CnJ%2FnfNIluP%2F363%2FWJOIpw%2Fep91M1UrBikVHdyHOWd7dcFIcvKedJ2W%2BUfJYEOrdOsPbRKofHTucJI0esNG7pnDtPJ%2FOX6zI1%2BCfRsrIqM0o%2FYEipoCMI2cyiNZcl5zjWr94nr2ETKn1tAWjcRPk%2FVr%2Br6SY%2Fync4rjTsRpmsTUqZBgLDa7gvzxCfVVMY%2FnKleO%2BpLyERSsL2mvy%2FCbO%2FJqhlJZwsIXQESxRG0Z6w3I6DlEgDneNVe9q2Py4JWlvVUgytdEJqgHukZRXzZCXS3LBPU81hhQ%2BE2d4h5GxVRDh%2FU5%2BEH142SBFunus5wqA2DTCbR79ybUcFfKk06UbJX1R5g6bDb7OP0%2But33eOmKP3GNlL%2BfGkDUswqmfLWhF92Z%2B5owjo1c%2Fxld0skxd3NVjGDydb1k%2Bh87GnQ7ILfyrf1m0vOOvDj1XN5wmnjHgTIiGznyTQ7I8fC9eejylJhGvxngt8sZqAc3QLWdRvWQOyVpQIIbOBtr0yMi3IKQQVGqAouSl%2B%2BLW%2FvL6mGPHbjTHaFiVrCduoMkIeuCiTlRn2R1LxO%2BRM8F65wVuBKplXYETMu317WVPwdO6LHPI7cWIhIAu7pwVhI4ZizrhRn5k7MMDSzb8GOqUBecgEyzoRxnOELq6VKfmOUVLBl2CgzBuwHmsd0oRJoYdNtkP%2F1GvjnQw0hqHYLmlZc2fOJjxUyhJGCus%2FPIe%2FsuFMbEgoXEYrX8zl7ZuSkAoUEaBC%2BITB2%2FJubhe49B8aCSgtbmnvAjOW3qgSxZgickQNdvrwgGSPjNoRYIYfwsnIN2DdaSwcOejhbIKAzYExvHswZ7uM1%2FsU2b7hPJLxx2d2GRIk&X-Amz-Signature=09cb911b220f6fb669673b402013d675b671c55da9b3d5296f7162924d3fb97d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RCKAJLZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCYFXj7ljKXeUXs2%2Bk2E8ASSqC37ezl%2BB633VG07KVhAiBQHQ%2FJQZ%2FtAvdHSOrGKeqKwPakfeuFdt9Pptk13pYVLyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMqgw0p0sbGx2NAIWXKtwDgzI6I3VCViZemeAEzBQwwBN4Lh3XWU%2BPNkF%2F6de0vNHrhhgPEWkcBmr1DmqCOmM3BOAV46po5wlTGVhEW8unocDLWS%2B87gAjg7iJQlvMLfIJc7dfYjT6U0gTXdf1%2Fb7BkYfLq%2Byt%2Fronq3y8wLg4zWv4RHhnODTCWB8yeq0dOTnl0X4nE6ISzwQacv%2FMsecVBRqieKjDobvWmlVDJtxaDag4HbblVtnOAMRMbFrRbCf4QdlCEy%2Fvx4GeTP7XMoP1cml3%2BjH350UGC%2FiCwu2D%2BvPz05oqd8WYKrguRca0qDXHq%2B%2FeYYGjlA2KoCmeAvLxSgfsEtQG1OY%2FUl0TtbLHrRYM3LgjOkJHPBRv52hF9JCqhfiYJa5z0j5pganRs4bHOoEYSBFpljG93v085nxcKwwMTyHU2SotoHNf%2FElOUHMIeW%2BIoDJmcNaepg%2BCR26TUr%2BOiVSFxG8gIHVuvAsb8kF8w4vCurxoHt3J%2BSULloOAUzKH0%2BknwxKq6fmvUHZ%2B7xGmjY66R8j%2FzP30zTzCvBgL3g30ueKC1ckCEAFP1LDMQHDCDsLyeS7HpAgWkOJvfDllrEwU%2FPk8w5WXIwWM5VIjD2c6XnQbP1Zf7tvONbFY8W9otVTnov9CmFEw%2BdHNvwY6pgFdlF6OxsUuLZCAuiPY7vaTX0fGFyoOj5tqIOoiKALauEIIM0lBuDWIOoYJQNWHZxPxJ3QN%2FCZy4Bdh%2FFan7Jj2a3kSsih4rDRR5UKITbhP6fE4Zo2zErLOZ%2BxRPMlh1sDEI0yRI%2F48HYOtlzkHkqF4EiiaV0EwRMGBO7kLPR3JpPf%2BvMi5Y%2B7MR4lHObGeN7ar08x3spfFiInL032OdttvrVAl8%2FPu&X-Amz-Signature=48c81f32925b57768d4509943dca53a06fbc9dbb2c62ee1407317caee39c6799&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULR5FEDJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL6oHRTLuAVLQfH7ftaTS62U9flfKamplWBII8OF971wIgbElDYSdEIqMZYeNRK6mtdKiUJPBSBVXxydS9hm5%2Bwvkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNCetLoDEpvvtnWPPyrcA7PriHrWYNneer2HP%2Fmbqf8MGNanE2pZf84A4kyr4WGZ%2FclY1zNZ3bEWLV%2B8VuqreJKXecdhFlcuykWE4lXcpL%2BMyitXf1wpLXZ5ipkCP7KHt59XSePF8E1xtKopWj3bZi1JZpqMFOeNG00ip896vhZLdEaSWJUyXysMOGe5QF6LlzVostvedLr3FJNPMDJPmWIz2YAydEcN40QA1FY2HnGZkyfmmMN9HazgHScr1yMaciLWpsUz%2F57y3A%2BJhl6LmxpDcKs5UcYA3Qvbw1SpICJHM14Gx3NGNqA8CWSSGiiVMZpElvm19na6Ebj61hbN8KwsHAJ680dgnQ9GjzOe7w9Nl2i7qeR08Ce7lk6VkioNlFkN%2BOBRljdOKHh7I5IGaNlQ1rph1TLAzqyrAB5SmNAnICpb8HdeRJUoRiNniCHAPasma60SWrbqbkGpejx%2Fd3Qkjv%2FHIhCtIuLnnMX5sgqV6OXVciAW1qgpbexK9dlRq6nM2aBn%2F1CPjn%2F6ACzOYluE%2F7jqa0ArEfAr3gbrOgJqQfln11XetYJg%2F1j0GGHYlxz2x2yYbN19ZFcsaAlgMRSyNDra8RGw1fUHohIRCDo3exRYhHHBewkRv234wnt6ydepG%2Bn2bwCN6UfRMKrSzb8GOqUBmHf%2FMDiyzyUl5vKksLgshzEfSTMnCr%2BEhuMdDw1iYlvpX71xH2vHNCQ%2BQqO2F2WBYNgpJj2omR9hGcHKwKr8m1b1ju6LEPe2Ur7zU653QCYsO51S2MNPQXipBLJ8VKqjw7KY9WyG1C2TrKJDtMUwUS9606eysDqAFlHNzPA28qqtonJ6Qw%2Be0g%2FxVYZvUfwP4c3h5vd%2FO2loZz304argo7rigCU0&X-Amz-Signature=9228bbeb55dd2d8ce70cc656f4390419256e1c910b0b85fa064bdecddf71b481&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STHA54BA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9LEtoVpQZ0jyCibWBJn9IQTAKtktmpV3kszs%2BMi7rhAIgDutE%2FXl9%2BUWGJNtt7%2B3%2BQz2nd82e1dxmu8MXNocR39Mq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCtmNSKgyUru%2BjTOeircA3MX6BmewJKNXe4CnJ%2FnfNIluP%2F363%2FWJOIpw%2Fep91M1UrBikVHdyHOWd7dcFIcvKedJ2W%2BUfJYEOrdOsPbRKofHTucJI0esNG7pnDtPJ%2FOX6zI1%2BCfRsrIqM0o%2FYEipoCMI2cyiNZcl5zjWr94nr2ETKn1tAWjcRPk%2FVr%2Br6SY%2Fync4rjTsRpmsTUqZBgLDa7gvzxCfVVMY%2FnKleO%2BpLyERSsL2mvy%2FCbO%2FJqhlJZwsIXQESxRG0Z6w3I6DlEgDneNVe9q2Py4JWlvVUgytdEJqgHukZRXzZCXS3LBPU81hhQ%2BE2d4h5GxVRDh%2FU5%2BEH142SBFunus5wqA2DTCbR79ybUcFfKk06UbJX1R5g6bDb7OP0%2But33eOmKP3GNlL%2BfGkDUswqmfLWhF92Z%2B5owjo1c%2Fxld0skxd3NVjGDydb1k%2Bh87GnQ7ILfyrf1m0vOOvDj1XN5wmnjHgTIiGznyTQ7I8fC9eejylJhGvxngt8sZqAc3QLWdRvWQOyVpQIIbOBtr0yMi3IKQQVGqAouSl%2B%2BLW%2FvL6mGPHbjTHaFiVrCduoMkIeuCiTlRn2R1LxO%2BRM8F65wVuBKplXYETMu317WVPwdO6LHPI7cWIhIAu7pwVhI4ZizrhRn5k7MMDSzb8GOqUBecgEyzoRxnOELq6VKfmOUVLBl2CgzBuwHmsd0oRJoYdNtkP%2F1GvjnQw0hqHYLmlZc2fOJjxUyhJGCus%2FPIe%2FsuFMbEgoXEYrX8zl7ZuSkAoUEaBC%2BITB2%2FJubhe49B8aCSgtbmnvAjOW3qgSxZgickQNdvrwgGSPjNoRYIYfwsnIN2DdaSwcOejhbIKAzYExvHswZ7uM1%2FsU2b7hPJLxx2d2GRIk&X-Amz-Signature=218bf8c601a96f8082b0b064315d4b58489a0bb49d768f8470a9b2f1113510df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
