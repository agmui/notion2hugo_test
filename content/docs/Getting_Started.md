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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHUGPD5Z%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGTV4HzT7smLNe2WDjwT%2BbjwFXk0RMcdASTFcOq%2FJqlYAiEA4KhdC%2FQW3iiCcg%2BBqdfOfj3qEOSbFhKq4ueR0CUm3r4q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDAjpLxmR%2F6ikS5mnhSrcAyE9wRGZeXBVTxRn98BrpkCwmLKD%2FPuqsWOnPS1lq8u5Kmm75%2FwR8ewSC6lVdJk303RC0eFdpSCRkuEI9%2BGrdHBIWTmd8EaMeA60wpuIapkoRzd0NAh06laD2ayJnAW2mF%2Fbfk6Aa%2BQRQ%2BaWU30WqXpimFZRIwziOWIV2s68BabZtlPRXEsL9F3HBGpcMAG1tIXqZwCW8b9%2FckEy0OcoVsUHY5icHU2tVpEnKv7Hi6HRot9DUhP4Kxw37NdwXs0GhSOsX0BOHwjUU4oWCD0CE7BlrGaCC6issPmGgsp75dhsmDP0lZdKmCPwS7tN%2BbiAWSVDepuqCk%2FjcfBMCQASmv2FIFBN46%2Fpws4FljfcaNXYT3yXH42lPVtDt2obaNkXzLIwMBJzPGLiuRWHcrdViLWvRKmtIFuq7jQ4XLkiYSqyf0gpMpRdmAR5xQakoStpeUrbM7NnfAmpe%2FSUSjMTOGvZ3Qo%2FDLi%2Ba%2BpX1QX2RBmvmljqh5tIsqHONKn2yh7xyW%2B%2FVgIf9l3h13TQuxK1tncOlzxTN4uGcFxKegCdJO0hxRvGe8FRwD6YWP8%2F6cKVnWwShX0QVkZpboTEi9KtMnwGXu3JLcYNzLxoiYMm3H9Ftp0HpOoGK3WKP1AcMJ%2F7%2BsEGOqUBlokbiB6hFjVrdjRPd4YsZyfQBZIuPWkXTLxqMtpITlN3pM62tmDVraK4Baxk0pcPFsOyhE3lhukcL%2F1tgkkk6ygixqsK1zxmdlYNEqc15iDpe5PD5sLHk7seUupWlz%2BsSZ1xu2xjq3837nXlixCU0Rmu5691U7E7T%2Bgl1vZuwst4R7r0wRrb%2B9pDtqInI6Bl53XehnepVic8rvRilLkNG1rA4dZE&X-Amz-Signature=68d2ba67ce1a75de1912b91906dd89f9f1eb7f99c8fc35b03043f689af311c15&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHUGPD5Z%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGTV4HzT7smLNe2WDjwT%2BbjwFXk0RMcdASTFcOq%2FJqlYAiEA4KhdC%2FQW3iiCcg%2BBqdfOfj3qEOSbFhKq4ueR0CUm3r4q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDAjpLxmR%2F6ikS5mnhSrcAyE9wRGZeXBVTxRn98BrpkCwmLKD%2FPuqsWOnPS1lq8u5Kmm75%2FwR8ewSC6lVdJk303RC0eFdpSCRkuEI9%2BGrdHBIWTmd8EaMeA60wpuIapkoRzd0NAh06laD2ayJnAW2mF%2Fbfk6Aa%2BQRQ%2BaWU30WqXpimFZRIwziOWIV2s68BabZtlPRXEsL9F3HBGpcMAG1tIXqZwCW8b9%2FckEy0OcoVsUHY5icHU2tVpEnKv7Hi6HRot9DUhP4Kxw37NdwXs0GhSOsX0BOHwjUU4oWCD0CE7BlrGaCC6issPmGgsp75dhsmDP0lZdKmCPwS7tN%2BbiAWSVDepuqCk%2FjcfBMCQASmv2FIFBN46%2Fpws4FljfcaNXYT3yXH42lPVtDt2obaNkXzLIwMBJzPGLiuRWHcrdViLWvRKmtIFuq7jQ4XLkiYSqyf0gpMpRdmAR5xQakoStpeUrbM7NnfAmpe%2FSUSjMTOGvZ3Qo%2FDLi%2Ba%2BpX1QX2RBmvmljqh5tIsqHONKn2yh7xyW%2B%2FVgIf9l3h13TQuxK1tncOlzxTN4uGcFxKegCdJO0hxRvGe8FRwD6YWP8%2F6cKVnWwShX0QVkZpboTEi9KtMnwGXu3JLcYNzLxoiYMm3H9Ftp0HpOoGK3WKP1AcMJ%2F7%2BsEGOqUBlokbiB6hFjVrdjRPd4YsZyfQBZIuPWkXTLxqMtpITlN3pM62tmDVraK4Baxk0pcPFsOyhE3lhukcL%2F1tgkkk6ygixqsK1zxmdlYNEqc15iDpe5PD5sLHk7seUupWlz%2BsSZ1xu2xjq3837nXlixCU0Rmu5691U7E7T%2Bgl1vZuwst4R7r0wRrb%2B9pDtqInI6Bl53XehnepVic8rvRilLkNG1rA4dZE&X-Amz-Signature=e266f6ffe1b0bc0d558bcca8629bc0d7520cf2211871f9878db434c20d7cd5e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHUGPD5Z%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGTV4HzT7smLNe2WDjwT%2BbjwFXk0RMcdASTFcOq%2FJqlYAiEA4KhdC%2FQW3iiCcg%2BBqdfOfj3qEOSbFhKq4ueR0CUm3r4q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDAjpLxmR%2F6ikS5mnhSrcAyE9wRGZeXBVTxRn98BrpkCwmLKD%2FPuqsWOnPS1lq8u5Kmm75%2FwR8ewSC6lVdJk303RC0eFdpSCRkuEI9%2BGrdHBIWTmd8EaMeA60wpuIapkoRzd0NAh06laD2ayJnAW2mF%2Fbfk6Aa%2BQRQ%2BaWU30WqXpimFZRIwziOWIV2s68BabZtlPRXEsL9F3HBGpcMAG1tIXqZwCW8b9%2FckEy0OcoVsUHY5icHU2tVpEnKv7Hi6HRot9DUhP4Kxw37NdwXs0GhSOsX0BOHwjUU4oWCD0CE7BlrGaCC6issPmGgsp75dhsmDP0lZdKmCPwS7tN%2BbiAWSVDepuqCk%2FjcfBMCQASmv2FIFBN46%2Fpws4FljfcaNXYT3yXH42lPVtDt2obaNkXzLIwMBJzPGLiuRWHcrdViLWvRKmtIFuq7jQ4XLkiYSqyf0gpMpRdmAR5xQakoStpeUrbM7NnfAmpe%2FSUSjMTOGvZ3Qo%2FDLi%2Ba%2BpX1QX2RBmvmljqh5tIsqHONKn2yh7xyW%2B%2FVgIf9l3h13TQuxK1tncOlzxTN4uGcFxKegCdJO0hxRvGe8FRwD6YWP8%2F6cKVnWwShX0QVkZpboTEi9KtMnwGXu3JLcYNzLxoiYMm3H9Ftp0HpOoGK3WKP1AcMJ%2F7%2BsEGOqUBlokbiB6hFjVrdjRPd4YsZyfQBZIuPWkXTLxqMtpITlN3pM62tmDVraK4Baxk0pcPFsOyhE3lhukcL%2F1tgkkk6ygixqsK1zxmdlYNEqc15iDpe5PD5sLHk7seUupWlz%2BsSZ1xu2xjq3837nXlixCU0Rmu5691U7E7T%2Bgl1vZuwst4R7r0wRrb%2B9pDtqInI6Bl53XehnepVic8rvRilLkNG1rA4dZE&X-Amz-Signature=473fa2f7d99d7cf942f86338ccf6d7023f24d4f8c1c7cc3aed22a4c5561734b5&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU255PT4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC%2BAZVY847sfBW20LDj8VKoHuSNxa81e2QtAn%2FVN172mAIgCrXoUNfouYDQME6pCrcR1rdKooD6y9e4J%2FGL%2BhwCwWAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDN4Q3EcObnUMhPp6nyrcA9T%2BXL53WPiMwGlroLTcTsIDGVVObagpTlLJcuE1CuR2xMQhGCHk8YaEd0hquIWx1IeBsSe9fx4yEF3rmgPNhO8DdDxm46NPNB8Q%2BUsE5MomT52R5XLAj4zJ%2FWM9Ns6YYCpKh9wdNMG7oggtbDZnMYY4psJzGKvlr9nzUI2%2BEojKSaiF8LsG%2FCK%2FEGv9lVKIrXegWHTDj4u3bxgQmwVOrhj5OqaZ6JOBgaqrQbKcF%2F9Fvf8750TW8OmghVKLsO7Z2ibONPJQiycf0GXJCYQ1z8VDAKjXX%2FU2t9YtKXB%2FvzMTHo5qTJarf9PiOni2Dbk6NRFKQpLy7FXHHgsA7AiyLuqCrAvhqaeVZhi2pBBrh5z24D3zkwLbPYCxgugrSmVXmiJyqLmIamQoppN2m5WkGyLR4F1EQDgAC2RHod2HrF%2B2Jbcy6mF2riO4T1ljYo59t7wMZDbvxScNNxlntWcgfuU6PSihPqr07aEvsT%2FpXulMF4UK8gwMYQ%2BsHCl64ttcFd6S6FWbMV8%2FyiWfw9aTp%2F9OxVTwHwXIi0fHYzmNkaSCg%2B49zDMw9gZkq9fYQHw6NlHIbH%2Fw0IABgnLO3DwSu4Xre9lWrgtls1xzh372DtcjNtNCkIeTRYWyqQiNMMWH%2B8EGOqUBRwdp65EJqezJCSpyWFB58%2F4p6VNKdd6M9%2B5n7sAK6cmtfaUAq3MgzniIgebK1nCBPqKptUmfxXnqTq4rzmbfxBvagWSHm3NSGasm%2FnqBcHo9voDIuQQ%2F%2BJVPZJqHmHJnbuyIYy802IJzA%2FnXnEmsJsW%2F25g0aRb%2FujUvYrCI%2Bc7W%2BNnIPrIDG16o6U%2BiD6eFMhnnLV20R0V7uoZRd7s31BX0TP1H&X-Amz-Signature=a06e2d24a384d6b7f6a1a8fc5da97a8389c117f9bdc8bbba98270997ba70c96a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PWGJKOA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDAnAvK%2BcXRypeusmsC%2Fp3WGECoO6f1cFokmeInUf7j6wIgZlMx2i5jkzbMDgpW3mqxyAw4U1pBm0%2FFv08Jlm00NUIq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMgHUgmU3wfzzTUDdircA0JOgBE%2FmhnJyTfQYj65emFhXJR7L7IN2DecYcoTuYI%2Ffb7cBpJlH0pAqU%2Ff9%2BcrZCP1PXDSf2EnFbGBZSq4oeJyiDyUFbTfAoTHUN7Y8X5LNenvuDfq1kYH1xqRFvwDrEM2hZLke4z2vmYDv8moWV7mRhSMI9%2FYFqYuTjemnPPwMn29xkvFWz3t6O2FzTQIzqs7w5mDMpYOO1MAbtPrRh%2B9uOTrFIr4b71ntBpFDyZa7PYymQZHb77s3mYH5vbh%2BhnAqtjmaKjVV7eYWUX%2BIIZpLP%2FPnLgVC8cGJk72AFx6Dq5rU31In6lUQ4tejO%2FfZr1tAkKt6p6DdmfHKav%2F8qrSMLVdI62diCPzDEWG9nZOOSTOMLcitDfyzEDoBQ%2BwsYFkxghpHW7Prhwu9Ucp%2BdpmLkDntW6gMmxLggUX5g2q7NmEDgAoz%2BDnPduDPieZL8pETudehxItebNHs3Do8q%2BRkNKmNNkxs2G8UPEJh5pJOxHIU8XRe8L5dEM0%2FyADrvkOrx%2BwNdUGKtVA1lV%2FT%2FUEdBslT5Gw6JpPujQJ7bONV35vJRc3h2M%2Bm8sGWtdz3r3O2B17OPqa6ElVJzXsq9pxekUbN3IeKZCYBx29TRlz%2BuWNKCmgkwvz6oXLMIX7%2BsEGOqUBu74rbx5E0YFj2uQmo%2FNTbBxQ9f9dTh3C2wVULPvxCcpTKubXKZG8CtFcNRruCSm0cUQupFHOe2%2BBcKXyCOlz6moLUL9Vv3Jz%2B%2FSfUFHk02ZOADqocaf7a1ZXV7VZhnVDIx2zt9OjnUlCT3tiJ%2Fp7zlUvLKIXe2MOAUnsRdBMlBzxByrvGerQ1SKXh9SgpPrTEasyj8szJha9g6gVFJ%2Fl80ntxU6%2F&X-Amz-Signature=53983549db40e22a1e0f6fdda2cb77a6f79bbae6b170d129a428af1fefaf63a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHUGPD5Z%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGTV4HzT7smLNe2WDjwT%2BbjwFXk0RMcdASTFcOq%2FJqlYAiEA4KhdC%2FQW3iiCcg%2BBqdfOfj3qEOSbFhKq4ueR0CUm3r4q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDAjpLxmR%2F6ikS5mnhSrcAyE9wRGZeXBVTxRn98BrpkCwmLKD%2FPuqsWOnPS1lq8u5Kmm75%2FwR8ewSC6lVdJk303RC0eFdpSCRkuEI9%2BGrdHBIWTmd8EaMeA60wpuIapkoRzd0NAh06laD2ayJnAW2mF%2Fbfk6Aa%2BQRQ%2BaWU30WqXpimFZRIwziOWIV2s68BabZtlPRXEsL9F3HBGpcMAG1tIXqZwCW8b9%2FckEy0OcoVsUHY5icHU2tVpEnKv7Hi6HRot9DUhP4Kxw37NdwXs0GhSOsX0BOHwjUU4oWCD0CE7BlrGaCC6issPmGgsp75dhsmDP0lZdKmCPwS7tN%2BbiAWSVDepuqCk%2FjcfBMCQASmv2FIFBN46%2Fpws4FljfcaNXYT3yXH42lPVtDt2obaNkXzLIwMBJzPGLiuRWHcrdViLWvRKmtIFuq7jQ4XLkiYSqyf0gpMpRdmAR5xQakoStpeUrbM7NnfAmpe%2FSUSjMTOGvZ3Qo%2FDLi%2Ba%2BpX1QX2RBmvmljqh5tIsqHONKn2yh7xyW%2B%2FVgIf9l3h13TQuxK1tncOlzxTN4uGcFxKegCdJO0hxRvGe8FRwD6YWP8%2F6cKVnWwShX0QVkZpboTEi9KtMnwGXu3JLcYNzLxoiYMm3H9Ftp0HpOoGK3WKP1AcMJ%2F7%2BsEGOqUBlokbiB6hFjVrdjRPd4YsZyfQBZIuPWkXTLxqMtpITlN3pM62tmDVraK4Baxk0pcPFsOyhE3lhukcL%2F1tgkkk6ygixqsK1zxmdlYNEqc15iDpe5PD5sLHk7seUupWlz%2BsSZ1xu2xjq3837nXlixCU0Rmu5691U7E7T%2Bgl1vZuwst4R7r0wRrb%2B9pDtqInI6Bl53XehnepVic8rvRilLkNG1rA4dZE&X-Amz-Signature=def88b300a375db5b3776bda48fd7b8b43ae79c1b4cd2c4cbc1dfeba5799d9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
