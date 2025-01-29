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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM6F6SSL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwNtOF8y4BsQJUPeb25z9OwRI%2B8NJ7KJ4Xkh588yXWFAiEAxexdY3vHUsCXnW5uQkRo0K8vClNby%2FWr2U39PFaSTLIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGyUKsyzqJIglqqOSrcA5PudNwpd%2FsFOFMqRykeXtvywyt09KY%2Ff61yV1bg4O0gunMUaR0GicTKLpeuL3O3pctPNlqouG0W74fR3zGv6aEFSdUxH%2FtvDdgxi0mbTWU2oOt7Mzij3O%2FGGRm8NNDoi2FFPhp1gSODiBm%2BL1k5xRzATwV8CcEPOIHEy77ZJA7Z2FMGJ7%2FvyiW1zm9S7FjnDjwHx0zjB6IpiA7ns28W1mkFvSukY65pxjsMlmZ3pX1yqg2nv49uIx3iCYzNSEvfVoZlQkGcPlWlessgqaO2rcaTeFJqGap4n9lzCdwvwKUeawfGgemzQbZiPrR%2BzpuZsENy1FEJwkZ2jvEx5julgd6JHnGfx7BdGERakRCdUWdvvCgds1lb%2FF4xyQosY23D%2FytM9ByPqjuFYLIT0jmAbunL27LK3Bj4Pu0N3D9ggA9wUKcFtsDIDpVSgU1jgy3esZKu%2FEdzbs2dtZpoLu5G2pwLzSc3dJLr2t%2BWEq5dVrj4qgGIriDfYew6waCTIqUsFlImyNmYC6vAjerVD9DT8lCtgsa89%2Be0jvcKP8p7d1zDtDWgNeQnr5cKU8fEA4bpXgavmi3mb%2FVeCNzKS3f7sj2twtDSvK2loQsY41KSCMydlyDhWMa5PC3nSXDLMMXF6rwGOqUB2ia04OQAk2V1siHz16lLKF86UjeRi35RhgSkSIpMwQnrFOaJLTDG0kLelHJLrj1MJRNHrB0sD16170JBVNbHAQjBxgZGN2WimbhRSjA4PUN2ziO%2B9gjG2XvrRtBZHY5Jks1KfXtzWo7Q4Ac2Kffcz5TggJrLfOHSQzhkX9Jgi4Sshbe30x95j%2Bb4d40Z6UoCCM3cARm6WBi%2FQA769Lora2OKeaV3&X-Amz-Signature=97d4c31c903334c40e79d698ee95070f49a94ffcec65ffc9f640cd964890a6a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM6F6SSL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwNtOF8y4BsQJUPeb25z9OwRI%2B8NJ7KJ4Xkh588yXWFAiEAxexdY3vHUsCXnW5uQkRo0K8vClNby%2FWr2U39PFaSTLIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGyUKsyzqJIglqqOSrcA5PudNwpd%2FsFOFMqRykeXtvywyt09KY%2Ff61yV1bg4O0gunMUaR0GicTKLpeuL3O3pctPNlqouG0W74fR3zGv6aEFSdUxH%2FtvDdgxi0mbTWU2oOt7Mzij3O%2FGGRm8NNDoi2FFPhp1gSODiBm%2BL1k5xRzATwV8CcEPOIHEy77ZJA7Z2FMGJ7%2FvyiW1zm9S7FjnDjwHx0zjB6IpiA7ns28W1mkFvSukY65pxjsMlmZ3pX1yqg2nv49uIx3iCYzNSEvfVoZlQkGcPlWlessgqaO2rcaTeFJqGap4n9lzCdwvwKUeawfGgemzQbZiPrR%2BzpuZsENy1FEJwkZ2jvEx5julgd6JHnGfx7BdGERakRCdUWdvvCgds1lb%2FF4xyQosY23D%2FytM9ByPqjuFYLIT0jmAbunL27LK3Bj4Pu0N3D9ggA9wUKcFtsDIDpVSgU1jgy3esZKu%2FEdzbs2dtZpoLu5G2pwLzSc3dJLr2t%2BWEq5dVrj4qgGIriDfYew6waCTIqUsFlImyNmYC6vAjerVD9DT8lCtgsa89%2Be0jvcKP8p7d1zDtDWgNeQnr5cKU8fEA4bpXgavmi3mb%2FVeCNzKS3f7sj2twtDSvK2loQsY41KSCMydlyDhWMa5PC3nSXDLMMXF6rwGOqUB2ia04OQAk2V1siHz16lLKF86UjeRi35RhgSkSIpMwQnrFOaJLTDG0kLelHJLrj1MJRNHrB0sD16170JBVNbHAQjBxgZGN2WimbhRSjA4PUN2ziO%2B9gjG2XvrRtBZHY5Jks1KfXtzWo7Q4Ac2Kffcz5TggJrLfOHSQzhkX9Jgi4Sshbe30x95j%2Bb4d40Z6UoCCM3cARm6WBi%2FQA769Lora2OKeaV3&X-Amz-Signature=c5d1d768dfd50af568112f54b679a2edd64fada0abf02f025921eefa4feeeed9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFKRCS4X%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkj3a%2Fxiz2Apa1ZP40v6UT0Mx0GXEolVwqTh6t19NlIAiEAiAzBGK2VDYorItQjJPKA2A84VsIWFfpvM59ufu82tb0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlp4EkhNAr%2BFU%2FWYyrcA5PZGi64avQC4XluPWcaxxTlxpjkSR%2B%2BTDMqKerZkRUm5At%2B1k%2BvkT0HXZEcqhJdnSdn%2FNtbeVbVBRDjsLJsOAjfnv6FhULs%2FSZ8RX46Dy%2BUoogpUZEkXCO3kJ7CuAgQ9odpxcF%2BfbAeMwgsdaraUKshtK7T7nft56GjPfGgMtWrh9vihBeZ1Taze2M8qcRUa3EVrLrCyk9Lw%2FtNutahMjqZ0%2BrrsEOYP3%2BxAcblaI8GWTC8eZXnD5Zs5W87Cw4QlvcaHsjHBhH%2BJpRwgYjcA%2BOJ8AA6fT2PU%2BhNYIhPgQZjbjQCDS9Pg4FUwouYEnupNRcBsrrPe5tc1L0qtqZQr2k55qAK2awT5RcHHF%2F2UkoEaIuAJqos8zHJ5nZUBWSrgdTtuv8I%2Ft3N%2FdLYDDlSkyyamBOqcuMcyTakGYqfYjAYNjEg4qacXbLa6ZQfyJ3zfzCg5QrEgP3YYfr9XGagkSWi71ugDelxfnBTWOBAHME5qSfDIoadTRyn7gGnC1c%2BM6UwNW3NK0pJ6XUDrNYjj%2FtbUj19oZlE75CDo6TC1MPO0oLLAETkt9zeEbE2Sar2o8lltT8wa1yc7LQz%2FE9QO3UYj%2Fi8CZ1RMfs96byQM41kt%2FMavkGtYecNoNmtMO7G6rwGOqUBabQKUObYyX1gkFKu%2BOtom3gYvd2s5qsNsi8eNHTk9tTxzWsmUPGXX6l0W2%2FhjK0V4zTV3ZGfziQterUQplmejdfojE%2BvZ0YggAU4h%2B3TGuqtWZDl6lT6qo%2BG5tZozr9qYGMCZoCOF9iycJU8wzJBct6GztTQxlNVsGNQz%2FibVxyCMPLUp9Lkhu9m75BrV%2FKXipeRQhdvNSVg96EIu%2Bb4P0j9OMma&X-Amz-Signature=e589b7fb8325697314cab4554790fd7f967e98df970e93d829cf34a72745957e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3C3REET%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICx%2FyxhSM%2FZ%2FBj0BK83QkRe5gwGHuoZB9qlkL8rODq6NAiEAvEnmQJisVEtKGG2CupJq5GZ6hV0yqjO6TF%2F6uCL1%2FJ0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLRSh%2FynoCGFYkAESrcAwNBix7uURf2dJEiUe4WXk0At%2BSyegQn%2BLVSpSZ1%2BsaKRdtOxKHru5rYQDP5MPfCCbu6AnaeNnws5zpDuHlriKZYXxr4zRM3PTuNCu2Av7Dh6%2BgRscXOhRgN%2BN4XgbpPsxhQjJR6t6ndNLycF9EubuZIp4p%2FmgMRr3IRcGloP%2Fj5DmExwfytqYepp9b6J3hjMr6PjzmBNwxLgN19GIE4VJ9g72wlUjS2tty9ZnafwOHCkFkZHxY1ajQbGrgVK4zdXcCDHxjLxLPiLD3Pt5tXSMndWyBBBA5RkXo9cR4RRpr4sx2BjRIF%2BaIGdYIOF9PsMQdDw1n7XhRap9vTnCnvtqdUaLaVKhve8cW00RF1vyvg3%2BmRs65Ug2F2hX28ZlAG9WYupPCAPq%2BxdDNG%2F12kyrTizvkTMqES5ld%2FY0q1hF2f7vjwDNQaAP9K8WjA8O9u1W2l3QnPmWU15L5YDKrU%2BryY0%2F3cfTMo7nJp2G%2BPyCnn%2Blg5hfKQfSXd6TtMgIXqVepammK%2B%2Fb6i0laqhjYTSMRl5jnk7Lud0hdWiFwenBBcYVcIxhDgJfelDJ8CdRUSKOGs29mzSXr2IFiLRLWbwF5OyAE9KP71vmCwbcFANLv7SntWHYmGhi83jKFNMMDG6rwGOqUBkvwPgMQSNJmLBmSKAMbigDdv0dTgS2HvsSi%2BYbVxu8gzLMAgIp2aEwZftbjyYtaCfPq5MsD9yQkXyayeErfwSOrkI7My6kp76R5W07l4utwd4OXGhHS2bGRAZlIgciKCMxmzSbeLWH7EadhJ%2BJ%2B%2F7diNDKcttnf1qbim%2FDAbUYqUaa6tLNaRX5atKvy4RRc8kF%2BBHMy4k03bF2AsYY4i%2F7W2Kdip&X-Amz-Signature=bb7375b7bdb6ec4d96b20fcc79d9b7239a12e38b9274252d9fb0627aa06e928b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM6F6SSL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwNtOF8y4BsQJUPeb25z9OwRI%2B8NJ7KJ4Xkh588yXWFAiEAxexdY3vHUsCXnW5uQkRo0K8vClNby%2FWr2U39PFaSTLIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGyUKsyzqJIglqqOSrcA5PudNwpd%2FsFOFMqRykeXtvywyt09KY%2Ff61yV1bg4O0gunMUaR0GicTKLpeuL3O3pctPNlqouG0W74fR3zGv6aEFSdUxH%2FtvDdgxi0mbTWU2oOt7Mzij3O%2FGGRm8NNDoi2FFPhp1gSODiBm%2BL1k5xRzATwV8CcEPOIHEy77ZJA7Z2FMGJ7%2FvyiW1zm9S7FjnDjwHx0zjB6IpiA7ns28W1mkFvSukY65pxjsMlmZ3pX1yqg2nv49uIx3iCYzNSEvfVoZlQkGcPlWlessgqaO2rcaTeFJqGap4n9lzCdwvwKUeawfGgemzQbZiPrR%2BzpuZsENy1FEJwkZ2jvEx5julgd6JHnGfx7BdGERakRCdUWdvvCgds1lb%2FF4xyQosY23D%2FytM9ByPqjuFYLIT0jmAbunL27LK3Bj4Pu0N3D9ggA9wUKcFtsDIDpVSgU1jgy3esZKu%2FEdzbs2dtZpoLu5G2pwLzSc3dJLr2t%2BWEq5dVrj4qgGIriDfYew6waCTIqUsFlImyNmYC6vAjerVD9DT8lCtgsa89%2Be0jvcKP8p7d1zDtDWgNeQnr5cKU8fEA4bpXgavmi3mb%2FVeCNzKS3f7sj2twtDSvK2loQsY41KSCMydlyDhWMa5PC3nSXDLMMXF6rwGOqUB2ia04OQAk2V1siHz16lLKF86UjeRi35RhgSkSIpMwQnrFOaJLTDG0kLelHJLrj1MJRNHrB0sD16170JBVNbHAQjBxgZGN2WimbhRSjA4PUN2ziO%2B9gjG2XvrRtBZHY5Jks1KfXtzWo7Q4Ac2Kffcz5TggJrLfOHSQzhkX9Jgi4Sshbe30x95j%2Bb4d40Z6UoCCM3cARm6WBi%2FQA769Lora2OKeaV3&X-Amz-Signature=efe1491a9179ecc532a5f32e4e67dec461dde8a3945143f2458f286044dd9f78&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
