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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGTJTGB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFDqWdWi6w4ipcIQAQu79YTyhTKlyO205aatTnSduZxfAiEApd7aWdlqkuqBBlbbTthXrqyi9MseAGEjnxGU1dh6yxEq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFGkaHREH%2Bq34R8wBCrcAyCUDZQeVS%2B4spMRwl%2BduDYrUpJWoG2OsGHRZkGne4Zb6mwNUmRFMme2pFKRPtVd%2Fsi68IbRMSIgaDZS7gpIJ4T0YyqCUadEubOcp4IAB6796fuyQwfg0cKg6YlN9sThTBOPSBSgKATk8sPfi%2B0pG4v1ICWWhBW6ZhsGCly5ufK%2B2dhQVkeZu14fP%2F%2BCXjxSQhloth4cmrnnvpF%2FZIzdcl5mnZE3PiTgfOZWITUPbX9u1Co%2Fmsm%2FrmzK5eJT7LthIiE1S5kvUpT8dGyYa7I2fsOYw4ZTyS3J0RDMqteQA%2FO0BB4x4Kc22%2FX%2Fc0UvqCYben8Na38rcEVd3PZmgjZxKa4s3QlmErwBDmJOPCcriqD3XtJ8TtH%2FQRNt5CQz8lgmRmJ4I1GnCpbKpj8n5oq1OXdrdHu0bkGqKSr%2BmwOtoPee2zM6zsF96W%2FCDn42L52qKJVOQK67KtQivEYxz9l7gq7JM0ylNt%2BxHOsVbsvwgnC7qbsyYTdgtESHFeozbLT%2BPc4utiD4XYA0GPuvefvCYS1J278Ek6eg%2BlGf7Mgn1766I%2BNZcqx%2Bwknrxc8hwyjPEfIq%2BjPISUk58COSCXK%2FfZLtQEg%2BCG8RTliClbY3bbkZD2Eeh%2FMBV7EiNwcPMPTQj8QGOqUBcIEqzi7kUiujIA2wB%2FzSLPuE4izt9cVgCiiFgBZc%2FNiZxk710BeXEZMZRVvQP%2BI8FKq7ihEcgmZ0tzaKfE0cd%2Fv3vZH%2BClkkXrPJjrI2WPkpH9esnoKKLEyETSSShLpah9VXvCpWyQDamg9UCpVeEx14936SCznTzNT8Wv7Im0G3dRn2nizPexVVu0vhkxOWyQiMNt60PLX9nZc5GXYpbUoy%2Fpfq&X-Amz-Signature=6957aa9a7fd8e32e5efdd7753efb4ba564980b651e15d68e2639a8a21417053d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGTJTGB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFDqWdWi6w4ipcIQAQu79YTyhTKlyO205aatTnSduZxfAiEApd7aWdlqkuqBBlbbTthXrqyi9MseAGEjnxGU1dh6yxEq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFGkaHREH%2Bq34R8wBCrcAyCUDZQeVS%2B4spMRwl%2BduDYrUpJWoG2OsGHRZkGne4Zb6mwNUmRFMme2pFKRPtVd%2Fsi68IbRMSIgaDZS7gpIJ4T0YyqCUadEubOcp4IAB6796fuyQwfg0cKg6YlN9sThTBOPSBSgKATk8sPfi%2B0pG4v1ICWWhBW6ZhsGCly5ufK%2B2dhQVkeZu14fP%2F%2BCXjxSQhloth4cmrnnvpF%2FZIzdcl5mnZE3PiTgfOZWITUPbX9u1Co%2Fmsm%2FrmzK5eJT7LthIiE1S5kvUpT8dGyYa7I2fsOYw4ZTyS3J0RDMqteQA%2FO0BB4x4Kc22%2FX%2Fc0UvqCYben8Na38rcEVd3PZmgjZxKa4s3QlmErwBDmJOPCcriqD3XtJ8TtH%2FQRNt5CQz8lgmRmJ4I1GnCpbKpj8n5oq1OXdrdHu0bkGqKSr%2BmwOtoPee2zM6zsF96W%2FCDn42L52qKJVOQK67KtQivEYxz9l7gq7JM0ylNt%2BxHOsVbsvwgnC7qbsyYTdgtESHFeozbLT%2BPc4utiD4XYA0GPuvefvCYS1J278Ek6eg%2BlGf7Mgn1766I%2BNZcqx%2Bwknrxc8hwyjPEfIq%2BjPISUk58COSCXK%2FfZLtQEg%2BCG8RTliClbY3bbkZD2Eeh%2FMBV7EiNwcPMPTQj8QGOqUBcIEqzi7kUiujIA2wB%2FzSLPuE4izt9cVgCiiFgBZc%2FNiZxk710BeXEZMZRVvQP%2BI8FKq7ihEcgmZ0tzaKfE0cd%2Fv3vZH%2BClkkXrPJjrI2WPkpH9esnoKKLEyETSSShLpah9VXvCpWyQDamg9UCpVeEx14936SCznTzNT8Wv7Im0G3dRn2nizPexVVu0vhkxOWyQiMNt60PLX9nZc5GXYpbUoy%2Fpfq&X-Amz-Signature=473b644a00e4fbd60a65b353e3f99282878c0a8b5fb9987f21ebb2d9a976e516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGTJTGB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFDqWdWi6w4ipcIQAQu79YTyhTKlyO205aatTnSduZxfAiEApd7aWdlqkuqBBlbbTthXrqyi9MseAGEjnxGU1dh6yxEq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFGkaHREH%2Bq34R8wBCrcAyCUDZQeVS%2B4spMRwl%2BduDYrUpJWoG2OsGHRZkGne4Zb6mwNUmRFMme2pFKRPtVd%2Fsi68IbRMSIgaDZS7gpIJ4T0YyqCUadEubOcp4IAB6796fuyQwfg0cKg6YlN9sThTBOPSBSgKATk8sPfi%2B0pG4v1ICWWhBW6ZhsGCly5ufK%2B2dhQVkeZu14fP%2F%2BCXjxSQhloth4cmrnnvpF%2FZIzdcl5mnZE3PiTgfOZWITUPbX9u1Co%2Fmsm%2FrmzK5eJT7LthIiE1S5kvUpT8dGyYa7I2fsOYw4ZTyS3J0RDMqteQA%2FO0BB4x4Kc22%2FX%2Fc0UvqCYben8Na38rcEVd3PZmgjZxKa4s3QlmErwBDmJOPCcriqD3XtJ8TtH%2FQRNt5CQz8lgmRmJ4I1GnCpbKpj8n5oq1OXdrdHu0bkGqKSr%2BmwOtoPee2zM6zsF96W%2FCDn42L52qKJVOQK67KtQivEYxz9l7gq7JM0ylNt%2BxHOsVbsvwgnC7qbsyYTdgtESHFeozbLT%2BPc4utiD4XYA0GPuvefvCYS1J278Ek6eg%2BlGf7Mgn1766I%2BNZcqx%2Bwknrxc8hwyjPEfIq%2BjPISUk58COSCXK%2FfZLtQEg%2BCG8RTliClbY3bbkZD2Eeh%2FMBV7EiNwcPMPTQj8QGOqUBcIEqzi7kUiujIA2wB%2FzSLPuE4izt9cVgCiiFgBZc%2FNiZxk710BeXEZMZRVvQP%2BI8FKq7ihEcgmZ0tzaKfE0cd%2Fv3vZH%2BClkkXrPJjrI2WPkpH9esnoKKLEyETSSShLpah9VXvCpWyQDamg9UCpVeEx14936SCznTzNT8Wv7Im0G3dRn2nizPexVVu0vhkxOWyQiMNt60PLX9nZc5GXYpbUoy%2Fpfq&X-Amz-Signature=83110ad5534338fbe16b892bba31f7945226be7bf499a961ae3296819f51b13a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY6CB2DK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIElNdy4YcPmKHiuz%2BazHig%2BEmUiQZbOcWtRluetevq9VAiAS%2B1TelWQ7M3AVuVXZCtZbZovc8wgxZ2knX09SksWl7Cr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM2aPDeN5c%2Fr1KmTbcKtwDxDWtHnSf%2F6HuqeVvUXTQz3Z4cVC7Jw3ptOXqpaxNSpt23OZ0GStKdoaqTsWUZr2gOEpFsc0y17xqeunJp6k7K2dY16z8SR%2BbVfi58ne7o4EtkdsP6nuNdu2GaPmnPNTHbZniLEF4pG1RHrqz4B5yCoHQnhMwgtX9O1x2KYUsbT4Zl50YMyuR0IYWw0K25Nxa8DLI2vYQOVXketyd4Rq1Y%2Farnc%2FVpaSZe3mg%2BD5ffwDNVm2Eqb8aTZlXvzD64O1PQrBOt5yDfzhj1JXOxuK5u35RFmXL8ive%2FA5SWmoPwDZ3j6LIiedpKnuLqfO0boNOWTm7ePKyU15LqGZKbtT1Ui8v9IvD0UyjhahMfmOvA3rhCl89OXTFHuj%2FwR14J3aTRzk9npYAG8F8b9%2FeTgaRLN7oqI2WVaQlSPW7OhOxqaz%2Fve1wRRxn5BAln35HhcVZwGbYsRIPI4Wol4x9AVc%2B4l7C%2FuxrjjyiiQSDQlUJj%2F3TQ%2Bos8oj2u96wWIEv8hym9c8%2F65DkTN%2FmdeKG2BNbYLAz3BhxUoghfid2vLdjzASNlIJvyy%2Bh6oNA6P0VUDU6i6M2Sms7UEprsvfh9Ytuaah3wd4v8NNl8pWgHDVtFlvz6TjX3MC%2BSr3URuQwldGPxAY6pgF%2BjR3GyHHYbqy0W3EqpCepOX7QD23WD3sjB7OyI02FtkMI3AyMspvPT8Dj1Y4CE1ndXx4dAQtr0DHvl1dIq1eqhCIxqi6mpFmllwyN%2BNMFFdUpuk1qJwhHsuMyzNdBsKTNvVZ39t8FAC58fkHNg3t%2FlKF6%2FMU7xDNhfGfot0MBOqyTFTF7Yk2didMU9ep6IUmT1SR%2BbHtC9Vd8tKo0YYtwmxFwwvU1&X-Amz-Signature=c655078d43ff989eb7305d402a7d3720b1728bb005b0c6f2b76e6f02b6eba1ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JHEGFYT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIENsBxvETRroac%2B5YaIPu6lxjO7snXffIKLY%2BXonnjMuAiEAxXzCCgLaUUFan6VZW4orYFvFZwKQcwZWV9lpYAgw5dkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBFevr4dgoP0besaKircAwJGgYRHKt4ASiK0ovSwX%2FW2tJxv%2F6VR8UYILoIa8XcnwtlRuTPiktRIHUuccWsAmNVEYTwFOxjOykrEls9V4pnKFyRxeWjH9IDCudfPVkXAuZfrM7cOc6DBojdwLmZ3wkg670GwdbY%2BM7NnsKuyTjP8NSGJgkSwy7zafYficpTro%2Fp9KvhNmUxqO7Oa14dl%2FVyLiGBBW2iXQ%2BIPjsS2tNZia%2BYdL77TzsniW8oRPyOGpov%2B3AiJ9dh%2B7YYlCfIvmMG%2FU%2Ftk4O8%2Bi2JYPPa7ulcbhPHqVXrIS1wwD0rRMzz2n%2BcA9jNtXJ51HvrCLlZkKaiR0MtrTrBpJIFdEJvtAoaIbP8ixJ2Xpb0ooviVZDsKbTQGZWTipMEmxHki7r5Df4CFoPmdTBCcbLb3p%2F6YKbWRFZg4AOZ%2BOwjDoi2GI9hBdQyP%2BMaMSDa5rf4nRPEmbxYYPJCGy%2B4dsB5OCEjwIc6auzcGHv%2B65%2Bi5anZjzj4C1O4gq4H4YvOAUF0ZWIQuZQCLbTF%2FvQ%2FebiKtkZhBRwUz3SCsHIJB5JzemZ%2BaCSprdpXdmDL6VObZgeHV9wmV3mUSvrkNALmzGrRut4kXoGsW37GCY6VB774sHw34kad%2Fb3mpRUGhL88m2tGLMJPRj8QGOqUBdPDDngqY5y8Hvnvf6EGf0PaIKDMjIm4BINafJCTjrLDnMsbGvOcUE%2BJXKiehcnnpO9EVU2A1aK7HPAX96kSu6i6IlRFxZuvlqqi0i7uPPhIEsIRltNA%2FZHzehdM0E1govM%2FVbOzCXL2Mc4vdPArh2o1PlZVvUx3JqI%2FrP0FWuM3InsvOjOZjlZqD0GMThIYa9Gi8aH6WMbO3CvYn8WF%2FxzN%2F7g%2Fa&X-Amz-Signature=2fd58b04116116907c1ab6e6159a093523ed33c75165b5d0487039151f86ddea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGTJTGB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFDqWdWi6w4ipcIQAQu79YTyhTKlyO205aatTnSduZxfAiEApd7aWdlqkuqBBlbbTthXrqyi9MseAGEjnxGU1dh6yxEq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFGkaHREH%2Bq34R8wBCrcAyCUDZQeVS%2B4spMRwl%2BduDYrUpJWoG2OsGHRZkGne4Zb6mwNUmRFMme2pFKRPtVd%2Fsi68IbRMSIgaDZS7gpIJ4T0YyqCUadEubOcp4IAB6796fuyQwfg0cKg6YlN9sThTBOPSBSgKATk8sPfi%2B0pG4v1ICWWhBW6ZhsGCly5ufK%2B2dhQVkeZu14fP%2F%2BCXjxSQhloth4cmrnnvpF%2FZIzdcl5mnZE3PiTgfOZWITUPbX9u1Co%2Fmsm%2FrmzK5eJT7LthIiE1S5kvUpT8dGyYa7I2fsOYw4ZTyS3J0RDMqteQA%2FO0BB4x4Kc22%2FX%2Fc0UvqCYben8Na38rcEVd3PZmgjZxKa4s3QlmErwBDmJOPCcriqD3XtJ8TtH%2FQRNt5CQz8lgmRmJ4I1GnCpbKpj8n5oq1OXdrdHu0bkGqKSr%2BmwOtoPee2zM6zsF96W%2FCDn42L52qKJVOQK67KtQivEYxz9l7gq7JM0ylNt%2BxHOsVbsvwgnC7qbsyYTdgtESHFeozbLT%2BPc4utiD4XYA0GPuvefvCYS1J278Ek6eg%2BlGf7Mgn1766I%2BNZcqx%2Bwknrxc8hwyjPEfIq%2BjPISUk58COSCXK%2FfZLtQEg%2BCG8RTliClbY3bbkZD2Eeh%2FMBV7EiNwcPMPTQj8QGOqUBcIEqzi7kUiujIA2wB%2FzSLPuE4izt9cVgCiiFgBZc%2FNiZxk710BeXEZMZRVvQP%2BI8FKq7ihEcgmZ0tzaKfE0cd%2Fv3vZH%2BClkkXrPJjrI2WPkpH9esnoKKLEyETSSShLpah9VXvCpWyQDamg9UCpVeEx14936SCznTzNT8Wv7Im0G3dRn2nizPexVVu0vhkxOWyQiMNt60PLX9nZc5GXYpbUoy%2Fpfq&X-Amz-Signature=0e68a7194541360727e9b8c49d09b72ae6887a3e3b2899cf4c0893fc045d63c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
