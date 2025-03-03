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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4RO6FLN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWcOTOkJraQOSvhySeQOoBi66MyVS9U%2Bhck0vFMahpQwIhAOEurULgKfzj0H1mHwueWJee78lCsb27kqnjquoRTNnAKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiKBgGC%2Fb7VmGHcgwq3ANFeVijGvH5uVtyGlaUWRJN9%2FIdZjcHv0WC7yPueZepCrzk3zAbYQWjFzI7a23YaDxvJLi2Ma7OHWu%2Famtrs1H7GRwQ3bmVvmmNBgi4FXtH6bcOCk11ZGtZl1fhen5GkWI1R2gTXtWZAcR12rYLg4%2FxkBtbXrzTz1V3wjk9PnVSucqe%2BEJdOPuR%2BdRM%2FT5THRnKbl%2BFPuxreCRMMPaylnnM7I6Jl9hpc%2FP9jVigpeMZQ8lPrwV0Rjkeeb5BiATSZi%2BA6J3HE%2Fk1iD0oAnjUweuprp0E%2BzD2JZKNghKM6L1wh3ZY2gO0cO%2BwWbvpQmmaR5Ez56sfOtiwLUlMcLQW5PIQdd0MElTJaichroeLfMt%2B%2FVOCE26UfuZRKHYIj5h%2FsLo3CCAlR394WNIJSR5ZhZgmR8cvnQH0uQE68ut51NAtqbc0nhZn5MOF0S2rSR9YKAvLXT7iKKPFxgA8WQOugJ8I5GYWeTQFFSK7njK6jy3sOGcivmNVvg%2FcrgZmTZrZzl3LVOUge7Rqu5r59KciTxAjaEuQWkKyCs3FlKQYKxEYgt8ew8L8wpSrvDtbSlcJA6aaadeN0BktzeZXOoKYNVuAE2gpHEJG2zLYkpYHCRZhyBV0y5GhQYm7mARr3DDu%2B5e%2BBjqkAZ9QAaByhxGT7TKcd5UXH%2FPjDkjQ%2B%2FDzyzT%2FEiHmiLaQDpqNJxH8xRXZn9p2L7MnhWq5CK2LDFl4Eqm%2BOL0%2FDQqXIkUxqdK6Y9WQj%2BJCFmrXwdB1DcJOOU8XVQ1WMAAjFNfYioj5HQH99l5FlT3wangLxRz0252cuxeE6YVFPbS7x%2Fq8Sc3f8SRSWTy%2BKWDgPipYhjn%2BzSW17DsfOsJwgN20JaLP&X-Amz-Signature=b71598f5e55d60fc7011bd6343e3aa90323ed56bf78af582c53965ab4b14dae4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4RO6FLN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWcOTOkJraQOSvhySeQOoBi66MyVS9U%2Bhck0vFMahpQwIhAOEurULgKfzj0H1mHwueWJee78lCsb27kqnjquoRTNnAKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiKBgGC%2Fb7VmGHcgwq3ANFeVijGvH5uVtyGlaUWRJN9%2FIdZjcHv0WC7yPueZepCrzk3zAbYQWjFzI7a23YaDxvJLi2Ma7OHWu%2Famtrs1H7GRwQ3bmVvmmNBgi4FXtH6bcOCk11ZGtZl1fhen5GkWI1R2gTXtWZAcR12rYLg4%2FxkBtbXrzTz1V3wjk9PnVSucqe%2BEJdOPuR%2BdRM%2FT5THRnKbl%2BFPuxreCRMMPaylnnM7I6Jl9hpc%2FP9jVigpeMZQ8lPrwV0Rjkeeb5BiATSZi%2BA6J3HE%2Fk1iD0oAnjUweuprp0E%2BzD2JZKNghKM6L1wh3ZY2gO0cO%2BwWbvpQmmaR5Ez56sfOtiwLUlMcLQW5PIQdd0MElTJaichroeLfMt%2B%2FVOCE26UfuZRKHYIj5h%2FsLo3CCAlR394WNIJSR5ZhZgmR8cvnQH0uQE68ut51NAtqbc0nhZn5MOF0S2rSR9YKAvLXT7iKKPFxgA8WQOugJ8I5GYWeTQFFSK7njK6jy3sOGcivmNVvg%2FcrgZmTZrZzl3LVOUge7Rqu5r59KciTxAjaEuQWkKyCs3FlKQYKxEYgt8ew8L8wpSrvDtbSlcJA6aaadeN0BktzeZXOoKYNVuAE2gpHEJG2zLYkpYHCRZhyBV0y5GhQYm7mARr3DDu%2B5e%2BBjqkAZ9QAaByhxGT7TKcd5UXH%2FPjDkjQ%2B%2FDzyzT%2FEiHmiLaQDpqNJxH8xRXZn9p2L7MnhWq5CK2LDFl4Eqm%2BOL0%2FDQqXIkUxqdK6Y9WQj%2BJCFmrXwdB1DcJOOU8XVQ1WMAAjFNfYioj5HQH99l5FlT3wangLxRz0252cuxeE6YVFPbS7x%2Fq8Sc3f8SRSWTy%2BKWDgPipYhjn%2BzSW17DsfOsJwgN20JaLP&X-Amz-Signature=2f3c8825eebba2876d2c676b4a7dbff0a094d4e99c28bf5459e7c8fb6e0f5647&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OVFLRE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjMzKsbQLQiifG3lX8MYyCTiI5%2FG8c0djsTGtKXd93UAiAxKqCRomqE5bGg24%2FKTB0QSTnGxJN42WBqEnJpIDfTBSqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUUvK0t1s38pzw1NlKtwDtf9D3w%2Feu4NzFwq8t%2FfSKTiIb062V93rKe25rpyFvglO6%2FzlqqvGD5WzrPVhZyj25HRrZZctNyWEVF8EhxFMBO5wyh8yR39t9PLQTYhTwKap1o%2B%2FpWUNZbj450k8HaVwiOQQtJGuC2RM6GHoY4sYB3XKnrCR1w1Ntx7Gzoo0O33XinMKzn1HIw02pioN0KxKn7Ub7RBdvHf3tXr9LjlaxQvSuis7krIbLjykFaXMdPKFNjwSIDDnqBrDAR8r4hUa6qfAChWbV%2FRGTtEhgNa6%2B1ba%2FFaP1xgQWIZgA85avCPmr7WSqlxfsfDoyQDgtD%2FEoyjhB67fHcnaERsrRZU7O3fb3kb7B8QTdchUsxK3yHqmgwCIgQRPRzyziXKJGG61pNxz9q%2FJ3NXiRP%2BFOI4XuxFGQ0iIv5IbCgs3pFatI5h5WW%2FSipik%2BK5kDcme751YzChw2WuPyUCSgmdaLiv8YugV0zbTS8eLWQYaJ78EKETAI4w5ANRKCutOriSyxDmDrBY%2FKTuE6uStD849VSRatC5Sow1dCFI8EwzyN%2FA5c1fQxbWmwXf%2BIKvjltaC0Qdp%2FKwo3dKVAoShlXiNihzTBbhDRbLBAGyKviXNxNdUO2jA3y9Vqnau6qKM8oQwzPyXvgY6pgFJgz0d30UeeSWa8oxj6%2F6VJyOniXLBs71fVC4oLT%2FDhkJpayl4xRXIU97kE%2Bf8%2BSW9421cCGr9B%2BaQOKPSV%2BXshssMxofOVUcaAYFRr0zWx4cLK68L6T4WC76KhOD%2Fb7yg%2Fo76pMR6fdT9z9RKHBAnQkctjDUmiQQCoWyRf8rkuUAt%2Bftlo1i8vez8iD0zciq2Fiq50hFl6QA5Ep5B8IRY5f90IiKF&X-Amz-Signature=bb9856b98834db634e542662a3e7b637eb4919a3a5263f34da5840fb5b0420d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TYNMKO4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmtTAP8lzpaEnkOUMM6uG70Vroqk6gvcjdmLQQ2TDEYgIgSpc4atVg%2BveRByw6KOwxikCG4HoeTQhoy6RFXJAGwBMqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMx9AARLWivn0kvryrcA0xEfsQ%2BOaBV4%2FvLhF%2Fqmh4Napao1iRPxQrJGc56V7Q7GAQ38TrtLelcSqD5FP5vJSAvZ4UkdPSnHAZF5vXz%2BhGgBIB5y4cIlh2XUIlVi%2BGbYVju7Bf3aG%2B7mhXRq9rVvbMam9eJte1xRCqMzTudYbjdo21SwtlueAbVGruxdIP2ZuRVJdWOpOd28vOz9jAoWDwJxxaFRMC2YXN8JlBqZuWi0%2FqN53BVB1FHSzCXL5XNku67hporEU1FA0OcH15V1ILgTJDBc4%2FHzW0LbQAK6mcSTUjf3ZjvHUfbshN4nzSWEpfNY1EkdlExzKT2HAJgSOj9J72X3jYvkYWwnfk0wCv3lDzuIOqLA7XLk0neeeDqqffMwlL6eImCgPp6a5ePBuZvADppzISoRK96bXqxk2kxudjEc9YBXKsCJQrjrRioST1sfdvGCRSPZTovLhZUme9nufL3CQPE2jOmf4Bmd5E5P18YPPE8FchrYGDQWffMidY%2Fx0kCCwPv9HELZeqGh14nxirbzdP%2FR32En02BfDRMkrb6zz8xa1xiUlo%2FScbvQ%2FUQTXwlKMs6ZYGDJK%2FgnieBQmiGg3fekqfZPB%2FSkAMPOLIicQzrH1kYEyEXVha7HM%2BbbTnbTVxJZc8YMNr7l74GOqUBN0GYU5rKNRdk5VzcOMLhmpZWLr3ta0NvL2Yl%2FO3Vyd6BlkjTIm9%2BbD4WslWRIC4Ta03C11KH9K59TgYpfo3C%2B%2BVqhyfORzffbpGCnz%2BpWyLuwPUG9FsI3mfq9X5QbxNS282JJZXVdzjemsSi9VcRJjXnG2fdpfP8u1rhsi4yWYfuadXOENU%2BgTPFwn2QAdB%2FavOq7SjRzDLXvKY8k6iBZd0kCDCa&X-Amz-Signature=f597a3e6317a1f586e7a46ca72d026fc892a8b1df982d96806bf187d01b8fe89&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4RO6FLN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWcOTOkJraQOSvhySeQOoBi66MyVS9U%2Bhck0vFMahpQwIhAOEurULgKfzj0H1mHwueWJee78lCsb27kqnjquoRTNnAKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiKBgGC%2Fb7VmGHcgwq3ANFeVijGvH5uVtyGlaUWRJN9%2FIdZjcHv0WC7yPueZepCrzk3zAbYQWjFzI7a23YaDxvJLi2Ma7OHWu%2Famtrs1H7GRwQ3bmVvmmNBgi4FXtH6bcOCk11ZGtZl1fhen5GkWI1R2gTXtWZAcR12rYLg4%2FxkBtbXrzTz1V3wjk9PnVSucqe%2BEJdOPuR%2BdRM%2FT5THRnKbl%2BFPuxreCRMMPaylnnM7I6Jl9hpc%2FP9jVigpeMZQ8lPrwV0Rjkeeb5BiATSZi%2BA6J3HE%2Fk1iD0oAnjUweuprp0E%2BzD2JZKNghKM6L1wh3ZY2gO0cO%2BwWbvpQmmaR5Ez56sfOtiwLUlMcLQW5PIQdd0MElTJaichroeLfMt%2B%2FVOCE26UfuZRKHYIj5h%2FsLo3CCAlR394WNIJSR5ZhZgmR8cvnQH0uQE68ut51NAtqbc0nhZn5MOF0S2rSR9YKAvLXT7iKKPFxgA8WQOugJ8I5GYWeTQFFSK7njK6jy3sOGcivmNVvg%2FcrgZmTZrZzl3LVOUge7Rqu5r59KciTxAjaEuQWkKyCs3FlKQYKxEYgt8ew8L8wpSrvDtbSlcJA6aaadeN0BktzeZXOoKYNVuAE2gpHEJG2zLYkpYHCRZhyBV0y5GhQYm7mARr3DDu%2B5e%2BBjqkAZ9QAaByhxGT7TKcd5UXH%2FPjDkjQ%2B%2FDzyzT%2FEiHmiLaQDpqNJxH8xRXZn9p2L7MnhWq5CK2LDFl4Eqm%2BOL0%2FDQqXIkUxqdK6Y9WQj%2BJCFmrXwdB1DcJOOU8XVQ1WMAAjFNfYioj5HQH99l5FlT3wangLxRz0252cuxeE6YVFPbS7x%2Fq8Sc3f8SRSWTy%2BKWDgPipYhjn%2BzSW17DsfOsJwgN20JaLP&X-Amz-Signature=4d683a66eff779f2d9920238f5258b336d8f135eb2f96257bf2fa22947e4cf21&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
