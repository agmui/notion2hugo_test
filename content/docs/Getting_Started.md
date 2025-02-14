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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFDXWX2K%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCATHr3hNtWnoRZtRpWJt2%2FCo5FDsN9M3rY1IIvD5Vo2gIgANt262wIcjJ0BtlbIshTd7CQ0e2e%2F1m8Jevj3z5ez8Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLSIVgCzXbeWRFxn3yrcAzRDX9UHls8vyrkTJzkttMHofGNB352OCsw4K0lmkYubkescl%2BvqkQPf3hQZLd6U2KSGAyVPtLNbrBcC0qliUzIjnWrsyv7exJoEhdU%2FBfgx%2Bxjbpn%2BS3%2F5hSqFRF4lIzGRtWC0tk3NVj7H5KfXSdXWcqziYsNYqbb7x%2FdQNYrvp%2FzOaQMSlW1FR7IALFAKN%2FfiTMqSWONxIkqxx7tBSHLjp85tHYeiO9YC1ZNe9%2ByEXHKVONacgZDLg7bJht1V5fMulapZ7H0tOAkPqW6qvt0SFXY4RKvJVieEx%2FK8YTwPWQ4fU%2FirzyvjRhPjA7b68FZTdWXd5j2fvmpEsuWSZbLul2%2BgUxRXLePCXD3MnmuxGnGhpJcAAF8I2DrFiFu4%2Fbziixl2%2BgavgfU3XfhIZ%2Fy0S44G9MZtbtR4UNBIZ1FX5cSCSoNMHySNgiRkzohDBUcI3UTOus6N5i1f89f1MqvU131ObQ5KNp7gOfcMGLgYkghDhzzWKPHwX7GCL5ECk5A3sBw8BJx1B9jzDX46Yqhxaq55X%2Fj9QtsayJ10cRA9eVMKg4w40nZxGt0EWYlYdtQnUk%2FfIIicbk5tfHcJKiJoxCQ8%2Baptw2C8dpo6Yn%2FCYGqkqzQC2dFqrcMphMOLqur0GOqUBL%2FFDvgsvR28mWZ7FmvJRexgc02%2FF%2BLDqGJfumU40V6DSgM6rWnPyfENyt4B5tjxgOL2rSm%2FgLAiydmiJFtdSinDWk7wcUH3R%2BnL0Y3EpKezYdoxXtFzy%2FolWJ54Os806yOQFuTFdx3Do8J8ul2OJD59OA5H4I2W4fTjYdgMJNxLLmmmhVidvEo7GzeTvfWHUoL34og9kHa77eWAFZubRtTPNG2ba&X-Amz-Signature=55d293a8e13105a18e0034b3857f07099812f72a470614ef99116c177ff387d2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFDXWX2K%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCATHr3hNtWnoRZtRpWJt2%2FCo5FDsN9M3rY1IIvD5Vo2gIgANt262wIcjJ0BtlbIshTd7CQ0e2e%2F1m8Jevj3z5ez8Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLSIVgCzXbeWRFxn3yrcAzRDX9UHls8vyrkTJzkttMHofGNB352OCsw4K0lmkYubkescl%2BvqkQPf3hQZLd6U2KSGAyVPtLNbrBcC0qliUzIjnWrsyv7exJoEhdU%2FBfgx%2Bxjbpn%2BS3%2F5hSqFRF4lIzGRtWC0tk3NVj7H5KfXSdXWcqziYsNYqbb7x%2FdQNYrvp%2FzOaQMSlW1FR7IALFAKN%2FfiTMqSWONxIkqxx7tBSHLjp85tHYeiO9YC1ZNe9%2ByEXHKVONacgZDLg7bJht1V5fMulapZ7H0tOAkPqW6qvt0SFXY4RKvJVieEx%2FK8YTwPWQ4fU%2FirzyvjRhPjA7b68FZTdWXd5j2fvmpEsuWSZbLul2%2BgUxRXLePCXD3MnmuxGnGhpJcAAF8I2DrFiFu4%2Fbziixl2%2BgavgfU3XfhIZ%2Fy0S44G9MZtbtR4UNBIZ1FX5cSCSoNMHySNgiRkzohDBUcI3UTOus6N5i1f89f1MqvU131ObQ5KNp7gOfcMGLgYkghDhzzWKPHwX7GCL5ECk5A3sBw8BJx1B9jzDX46Yqhxaq55X%2Fj9QtsayJ10cRA9eVMKg4w40nZxGt0EWYlYdtQnUk%2FfIIicbk5tfHcJKiJoxCQ8%2Baptw2C8dpo6Yn%2FCYGqkqzQC2dFqrcMphMOLqur0GOqUBL%2FFDvgsvR28mWZ7FmvJRexgc02%2FF%2BLDqGJfumU40V6DSgM6rWnPyfENyt4B5tjxgOL2rSm%2FgLAiydmiJFtdSinDWk7wcUH3R%2BnL0Y3EpKezYdoxXtFzy%2FolWJ54Os806yOQFuTFdx3Do8J8ul2OJD59OA5H4I2W4fTjYdgMJNxLLmmmhVidvEo7GzeTvfWHUoL34og9kHa77eWAFZubRtTPNG2ba&X-Amz-Signature=bb06ca92234700a601484b52a7baeb58e0940a5d1203731dcea3597421c680a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B5VHU2P%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjRWRoMuUAH%2BKoN9OQVondS%2BDhH6KOby6rkks2ulCZpAiEA8Assjj8FKmcyHhlCqOrSoV0aBTx%2FNEFbKiqkrFKbF7Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDE67isLPY%2BO00bqNrircA0YQuz%2FDzjO0FnVHfzRhZa4I0fNoaJKgFIqmE62Il5bj1XJMAZj8LDFB1sxF9CnCYqJFMphY%2FMsbDZfpjPmMiMZMiz3hmXMOTIizK1rW46m9PTIP5i8%2FLFqh6GtWfGgLb%2Bz%2FGMdmghgdyNWO7vi%2FxTIxuaL2823IQNHIfSqdvk4EYdSekYXlm3Ovu5ClwwYBd7J9v3UYLEA9u7%2BcoeRMvPqKp5CerhPweN78bEHZJ9FmB6rkjsmEOfwUH6Q491QZDeVkw2UyneIshntEG1lsy6atO%2BA57WIxsFHvGvQbIgM9p8PWAbSS1qz8qlWr%2F6NQSn21rxvFQXd5m86FauCx5Vm%2BNTLpxUhxwu4rWSksPf14GMy7s%2Bq2QmBtfSEYB%2F11ARa3NM6DL71SFi4iloQ0MKLNAbKwuj6DNHLhIbzv4zSb72BrnBbBnyDhP90EjCP1ouZR4ZZTx%2Fw7Ta81jjuQDtMCMmgkygfA9yvkzRdBcnh%2BFS1QOqCYvuNzP%2Fod4hOWA4TOSn9PJnfEq3DHZPQtHo2kCyPEFRGrzNM8kCsGK4KgBupHMNmIfkG4ZF9JxKr0dNfWpPDUx9RPK5ltxCGmhMBpNq8Faxl4w75OyNh%2F9Ng2rDVvib6RqF%2FEDs6KMIrrur0GOqUBexpJhwM4wZqX3Zva5KxR5BeL1CvwBrsl9%2FJj9Ww2GvcO37m7cpZr1hnKhqbf2Vuvjhhf%2FVWW0BOE969f5JVKEI%2FjdEFuGjqC4bq4kJJ0xpM%2B%2BlxPkvBPeySnn6L53bCQHFD%2BbZQL1tPKJxpfQJ9dNDR8yZknT07148uYwnAFUEKBy993vPBPy4E6KnYOWIF1NPL%2Bo4D1ZIU7fK6IBd06yeDbHCRG&X-Amz-Signature=888bcbf0c10d0ba2c8e726354c56ae9d5f20cb13470f6d980b16b2b0d12b508d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UMARAC2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaNjtcsg7gqpf6%2FET8qLp%2BFyVBJxpE6BQ0nOMUjSLTNQIgJnc6%2FHpvDolowrxyra1xCU%2FVQJgtxKFKDx1qjy177jcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFQAdlPmyLt%2BuUcLMyrcAzSm6vOEjBai%2B1S323ZHOD0ECpmTiMXY7AYRMKmyGRk4cPJP4Auh2Hqgq26Trkm%2B96km7uW%2BuCaRzNa2hm5SkTUuqSULad1MJ85VFkTkruogu33OaweaH12glFrYq8s%2FLx9wlXrFIKK82Y49Gk0VFTitPtV6PFDAAUGZnzx40%2BaP6%2BgpoRiERvnPPNhlvNWC2hLxzM26SiJhC%2BaTFeQ4BxvHMn1FzNjM4W%2Bd%2FVj3gUd%2BFWsVQi8S3JbS3PyOX%2F229Op9MKiHV9w1lj6LLdh2cx%2FAmVR1BM3X6YphtRdzNSzFcA64AxkHhLRW0AU3trWiyqMLhvAYo36tGTvr4TEqEX9sSKxQGOp1xiuX8AGG6LZYtkj82IvEcNgqnCBwA87fQTHEtgTE3EHqRAAmbOkM2QAcdDL9H2kp%2F2mX2C%2FYJdYPPPiAZ4h7ofSklsF%2FZ%2BagevcCLvHJY0vYigoCExxom%2FWCmndwq9UnwoUUZtaTGdHONvI3oe%2Fo%2F6deWKBFNtykue7NkqRXJ4Y3VlTA26dP3YldUOWsbtHvvaZ5WaIzum%2Fmb5%2FhIN8cz%2B1dlz6mLise4QRKP7HgVpF4v5X1IvxzJtqSNU38vd6V%2FCLG0KYPO1KZ6jMt0jNCX4fEw3HbMJrrur0GOqUBQE0%2BdEznkr0yN4yLqdHW4rV38n34kzlCTY0hu3pN8yl4fpLgF6r8vEmYdt9MT9fO1oDRxOzLRrMdiNp4ywKwJDQfXazT6XVdlelz85oE7S%2FjdyZeb9Uxff0qoUFUFEyJx4rQkD7%2BKS26cG%2Fscyy%2BUdsIG%2FxJLDP3BFx2OokfzWv%2BIApleG8DN3GjXZtUG0m6xxxF3ppsGViH1wt8sHUMhirhgM7p&X-Amz-Signature=ce31dc55dec799688080bb8d1d762de627dabfc1bb183bf3cbd292bc9d66ecd6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFDXWX2K%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCATHr3hNtWnoRZtRpWJt2%2FCo5FDsN9M3rY1IIvD5Vo2gIgANt262wIcjJ0BtlbIshTd7CQ0e2e%2F1m8Jevj3z5ez8Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLSIVgCzXbeWRFxn3yrcAzRDX9UHls8vyrkTJzkttMHofGNB352OCsw4K0lmkYubkescl%2BvqkQPf3hQZLd6U2KSGAyVPtLNbrBcC0qliUzIjnWrsyv7exJoEhdU%2FBfgx%2Bxjbpn%2BS3%2F5hSqFRF4lIzGRtWC0tk3NVj7H5KfXSdXWcqziYsNYqbb7x%2FdQNYrvp%2FzOaQMSlW1FR7IALFAKN%2FfiTMqSWONxIkqxx7tBSHLjp85tHYeiO9YC1ZNe9%2ByEXHKVONacgZDLg7bJht1V5fMulapZ7H0tOAkPqW6qvt0SFXY4RKvJVieEx%2FK8YTwPWQ4fU%2FirzyvjRhPjA7b68FZTdWXd5j2fvmpEsuWSZbLul2%2BgUxRXLePCXD3MnmuxGnGhpJcAAF8I2DrFiFu4%2Fbziixl2%2BgavgfU3XfhIZ%2Fy0S44G9MZtbtR4UNBIZ1FX5cSCSoNMHySNgiRkzohDBUcI3UTOus6N5i1f89f1MqvU131ObQ5KNp7gOfcMGLgYkghDhzzWKPHwX7GCL5ECk5A3sBw8BJx1B9jzDX46Yqhxaq55X%2Fj9QtsayJ10cRA9eVMKg4w40nZxGt0EWYlYdtQnUk%2FfIIicbk5tfHcJKiJoxCQ8%2Baptw2C8dpo6Yn%2FCYGqkqzQC2dFqrcMphMOLqur0GOqUBL%2FFDvgsvR28mWZ7FmvJRexgc02%2FF%2BLDqGJfumU40V6DSgM6rWnPyfENyt4B5tjxgOL2rSm%2FgLAiydmiJFtdSinDWk7wcUH3R%2BnL0Y3EpKezYdoxXtFzy%2FolWJ54Os806yOQFuTFdx3Do8J8ul2OJD59OA5H4I2W4fTjYdgMJNxLLmmmhVidvEo7GzeTvfWHUoL34og9kHa77eWAFZubRtTPNG2ba&X-Amz-Signature=1c6a3422378db001fb4adc04794f99f84c24eb3f7d9b0deaf0d656139ea38f41&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
