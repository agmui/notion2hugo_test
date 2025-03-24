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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CPNHHU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR8Zdj65SvHZI4RMDV%2FjPZpzsG6BXjVG%2BSwvl0En65DAIhAMzDnqEJQWJialcQInrTEwe2NYTMFSg1Rwqy3QKRDlYLKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtVQfbvk9ty4qR9h0q3APEYQRiF8ABQ5DfyyWcikX2CX9KsVt3Aly6LKd6tsKT3A1M%2BUw1%2BiYKBBsYBJQ%2BZGor927kRKAbGakZpKygPBuitJFK6SlhckyI8bMe9KnwPDpK3X6hQdG%2B6T%2B72QJo%2Fr%2FZWoe%2BX9VYNWmrIVr%2FCmC%2FzUv4zm7SBMCdK%2F9FlGi673ASp2bPVUOwANsNvJ0CsDDPP2PatwhhHUrv%2BnEs9b9bvfVMoqoYVOJQLtGUWLgr4y0PAtEr5L9y2d7sKom351UfNHqQQOQpffn3XU9ELnIA3w82wRq6dO7eH%2F3L1CSev%2BN6Xu1zoKZ8Cyd301CWENY4JN1sNBdJkViExtOvymsOkwQWMZuNjtdkevmgOcwm2dQZBp6JHblba9%2BJRJVnSZQzzcqw%2BbCVSlGsSxSz1i1qhgZQ4f0hkfjiRWF6vtJtqnCOnBoiqFZxadwUZUBXDSJDH%2Bny2s09SxRvuNjmIJ5trY2ilJZrLrhTCi3UIKZ3wYTMeMEtO1eIgdcS3wR4fmomZ%2BInz9u0qU9NhE2YlCGpRylea2OoLWCO3dHk0NUzUiVXBr8zxqRSZFQDfzySPv%2FdlkyXzQndjlKD6Q1fwYXI2zOzAE3DW1NNdh7NmWzkUP4gy%2BIjvxgtHDbH7TD1noS%2FBjqkAUz4NsynsKaPVaEiKGJpKge2VXFj%2Fu1yFaAV0TnAiEcIeGIJZ%2FvhHEE0qp1vtcQ%2FWAsbnK3d7mHHlx9SCHboD1OR1Fdb7vMYZfW3iEI%2BqpTclzfZnqEfYX7OezAC7OPzMuSmnZNk6n%2Bqp0XtGtd2G1%2F7myqCXI1wXje7eh1wOSTPxmK2u%2Feo1SXMPUWydeFlr5hoHcdEtGdWQZCHGJHpni6qFP7v&X-Amz-Signature=d8360f8a4cee743370a1585ec9e835f1b9c08ff0d575cdddd08f2025bdb4fb30&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CPNHHU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR8Zdj65SvHZI4RMDV%2FjPZpzsG6BXjVG%2BSwvl0En65DAIhAMzDnqEJQWJialcQInrTEwe2NYTMFSg1Rwqy3QKRDlYLKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtVQfbvk9ty4qR9h0q3APEYQRiF8ABQ5DfyyWcikX2CX9KsVt3Aly6LKd6tsKT3A1M%2BUw1%2BiYKBBsYBJQ%2BZGor927kRKAbGakZpKygPBuitJFK6SlhckyI8bMe9KnwPDpK3X6hQdG%2B6T%2B72QJo%2Fr%2FZWoe%2BX9VYNWmrIVr%2FCmC%2FzUv4zm7SBMCdK%2F9FlGi673ASp2bPVUOwANsNvJ0CsDDPP2PatwhhHUrv%2BnEs9b9bvfVMoqoYVOJQLtGUWLgr4y0PAtEr5L9y2d7sKom351UfNHqQQOQpffn3XU9ELnIA3w82wRq6dO7eH%2F3L1CSev%2BN6Xu1zoKZ8Cyd301CWENY4JN1sNBdJkViExtOvymsOkwQWMZuNjtdkevmgOcwm2dQZBp6JHblba9%2BJRJVnSZQzzcqw%2BbCVSlGsSxSz1i1qhgZQ4f0hkfjiRWF6vtJtqnCOnBoiqFZxadwUZUBXDSJDH%2Bny2s09SxRvuNjmIJ5trY2ilJZrLrhTCi3UIKZ3wYTMeMEtO1eIgdcS3wR4fmomZ%2BInz9u0qU9NhE2YlCGpRylea2OoLWCO3dHk0NUzUiVXBr8zxqRSZFQDfzySPv%2FdlkyXzQndjlKD6Q1fwYXI2zOzAE3DW1NNdh7NmWzkUP4gy%2BIjvxgtHDbH7TD1noS%2FBjqkAUz4NsynsKaPVaEiKGJpKge2VXFj%2Fu1yFaAV0TnAiEcIeGIJZ%2FvhHEE0qp1vtcQ%2FWAsbnK3d7mHHlx9SCHboD1OR1Fdb7vMYZfW3iEI%2BqpTclzfZnqEfYX7OezAC7OPzMuSmnZNk6n%2Bqp0XtGtd2G1%2F7myqCXI1wXje7eh1wOSTPxmK2u%2Feo1SXMPUWydeFlr5hoHcdEtGdWQZCHGJHpni6qFP7v&X-Amz-Signature=2a64fbb58121f72061149b99a313647fa835566b77df21f64ec002bd53e69eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZYCLU7O%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgeBVeCQIiOGe4MF4%2FJtVtKrWbQEf%2FhSIrLbdxkGVKpwIhAIl2U0261I9yMDScQ4shiIuTakn%2BOo0TOLe2LDjI7kbEKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHPLYin7e9fDdLzNIq3AMAcv41Mq%2Bh8TNCNXHRPw6D7HQhMV2nyTYi5LG65bsc304gbTACMN1x1yoUZfnEheH9VkAzIQtDuEaBkjlcPCGDekMUJb7gNRmlzQELtlujZ4yxTVrfXGZ5TR6sYwH2nUlapDUt6QBH0KXAopg2hIfay%2BQ6NZAlJVyQ1SbwYq%2F%2Bx8eXfy1rl%2BUJSR8dQPLl9wAcOTcaMp6xATxMgyidsmSLjiVVf%2BkmHSm2ApXK4QyJAT1FxidbY6nPMAxPP8v7GshrerOS%2F54eUb9cVlU0qRFlG%2BH0Z9SApJSsoYQt%2BoA6Z0zMANh2yGn7tSlD%2BbUnwgTIoGb0y2DmDJM081vcLr%2ByUmbcmhtlkCpdWqXkYrHr5QprCFMx2%2FW%2BNdLuIlEeMWGbHHCZT%2Fv59CA53UI6M33UPujmsLMKw1mHcqnh36PdBAWRR6ZlQRvB9fpQ2wNDsWGna9q%2BCaFPampJDyrET6L3AbXgQLVwp4Rov683nzDGk0rTXR8qbb5awJKnD2pSDC9SUAHGvAskpkCg3fWXuTvBGlaV1wKFYp%2BGcA2MFdDB71o5g%2FcGHkWTROtqxShWc7reBNc%2Bha9WBcv%2Ba%2By6V9%2FxhycVfopmjYW%2F3O9zl5RKfp%2FIISMTVRHQC4OZGDDMnoS%2FBjqkAZ7jHotsAyzdgxgM8dyrWsq46%2F24vXd1IE%2BD%2F7vwMT3NmBqrOBFoF8a3Cay27CJl53lHV9HPYytjj8x8EGd59qHii8YfwuZkjr71rMaUqDzu2Uc7hZdk4uKBMYqg7P4HS5VylF5TvV3FPk2AMs9gTMoCHQMBDdSSrCbPcsMwCY43fWOp3a7JVuImzpgIEaU7PTCqinIQTL%2BZjvBIZJfPcVUWfyXG&X-Amz-Signature=140711e93e07c840e7120e1d9ecb59be06c01f9309c5aa52bf759d0a00e48845&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RPMNT6J%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhGM52uUK3amwT76umdEmuG0lFkQ8axbCBjJrJul6NEwIhAJT9cGlVz6T7m9d2REqIUFCtppJjHjVbOB6hjEZoOkajKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5cfsECyJoZFXcTN0q3AM7aDLQ5QIO5FwYXmb1AgGGq%2BkYwfL1aDESExwHfjtMQgrqJAAXbZaftiX7DWgjqIIsSBvhasR4M7R5BdbS%2FMBXwP1b5RRfkgQ78CMrHFMa3Z3i6leNJlhhqqR%2Bl0Uhh0UzqIdUsHx%2FE%2Ff5Qhl6VA2ew29lQLfEKB2%2FjD%2FiWJ%2F92v11MzbcT188CvBvQegUyYGtGeTw0IxliUZCfDqqfnLTasUQEL0h0n4eSR9JQ32RDJnlRzxkecEe9ehOvsberiTDNJCI6DUVn6%2BhmfnzvefO7uAkTVeFP8UXJp6RwqS0gPqtpCR9X4cUtsTs99lt8%2FYOXJ2vo9ZHnsBee5cQiNrWWpcCu52DV29FkYSAOKI1Vva1zlHWILYtbMPZxBzrF8xqqKuALP0GxOj1tWChbs5dLhmdokV7MSJjaX6SExcfy2qPrxES2FBmt%2FuIqFiKA4j1dKKGuuPLOzJgRwRIiQuD4rb9Vqu9KQ7F0wR9UqtiwOjzQEuT0b5QQ%2F6eDpPGVWwtiqs%2Be9mVu5BFhLRhY74CrqDGD1SScRpFBEspRT05uI%2FpG0SvvH%2FH8OqE5Y5Juo%2FMiXFMjzyz2ztZY%2FiMVRRzaVyXFgqKMDXfI%2BIIDvxPwW%2FFU4F72A49P4vQTzDInoS%2FBjqkASrd3Z%2FVrSqsAXVgcTD6EGU6Qx6Xc1t7ImLdsnV86J%2BPFA0HNc%2BGq2tjWzyNbYb8nxSoRWxMNdntWzCpG9sWFB%2Fz4zzDSDKfZiYjpaANHETePNtYBtdZFfY9ARw5c6%2BiryHTWbrAIjA2NnZBMD8nA76IzBbCp7%2BASlLYGVPZEviMBerk4j848HszQnXJkKLQoVcvoGGKPygen7Uz8iohsnpiaWZS&X-Amz-Signature=4d9f597c4ce170c0ee1a1adb8a9d5cf914903240fcf0187eaf5ad43716a7549f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CPNHHU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR8Zdj65SvHZI4RMDV%2FjPZpzsG6BXjVG%2BSwvl0En65DAIhAMzDnqEJQWJialcQInrTEwe2NYTMFSg1Rwqy3QKRDlYLKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtVQfbvk9ty4qR9h0q3APEYQRiF8ABQ5DfyyWcikX2CX9KsVt3Aly6LKd6tsKT3A1M%2BUw1%2BiYKBBsYBJQ%2BZGor927kRKAbGakZpKygPBuitJFK6SlhckyI8bMe9KnwPDpK3X6hQdG%2B6T%2B72QJo%2Fr%2FZWoe%2BX9VYNWmrIVr%2FCmC%2FzUv4zm7SBMCdK%2F9FlGi673ASp2bPVUOwANsNvJ0CsDDPP2PatwhhHUrv%2BnEs9b9bvfVMoqoYVOJQLtGUWLgr4y0PAtEr5L9y2d7sKom351UfNHqQQOQpffn3XU9ELnIA3w82wRq6dO7eH%2F3L1CSev%2BN6Xu1zoKZ8Cyd301CWENY4JN1sNBdJkViExtOvymsOkwQWMZuNjtdkevmgOcwm2dQZBp6JHblba9%2BJRJVnSZQzzcqw%2BbCVSlGsSxSz1i1qhgZQ4f0hkfjiRWF6vtJtqnCOnBoiqFZxadwUZUBXDSJDH%2Bny2s09SxRvuNjmIJ5trY2ilJZrLrhTCi3UIKZ3wYTMeMEtO1eIgdcS3wR4fmomZ%2BInz9u0qU9NhE2YlCGpRylea2OoLWCO3dHk0NUzUiVXBr8zxqRSZFQDfzySPv%2FdlkyXzQndjlKD6Q1fwYXI2zOzAE3DW1NNdh7NmWzkUP4gy%2BIjvxgtHDbH7TD1noS%2FBjqkAUz4NsynsKaPVaEiKGJpKge2VXFj%2Fu1yFaAV0TnAiEcIeGIJZ%2FvhHEE0qp1vtcQ%2FWAsbnK3d7mHHlx9SCHboD1OR1Fdb7vMYZfW3iEI%2BqpTclzfZnqEfYX7OezAC7OPzMuSmnZNk6n%2Bqp0XtGtd2G1%2F7myqCXI1wXje7eh1wOSTPxmK2u%2Feo1SXMPUWydeFlr5hoHcdEtGdWQZCHGJHpni6qFP7v&X-Amz-Signature=0f55fe322b511e546f2ad774a18daec584e00cdb61bd3a4d78a835e61e8a59d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
