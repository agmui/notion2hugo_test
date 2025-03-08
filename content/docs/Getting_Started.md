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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E4XVSRP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDIdeLJi5%2FQGg%2Bzo9nelZNnLOfgNJhC21SRyloI3LsJpgIgToBxF1mijRiRgHPvlW0ZxuRAnvSPGcIB%2FjckCmOnVs4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGNctalTEYwG3%2BJ8GyrcA6iCES7lvDX4k%2Fna01V8hkkK%2BaX66m4APWwl%2BC4Etmty3Tzi6n%2Bde6t0m4kmyHdM83bb0fpPlkkOQtSCwv1m1bHAmBUymdl7QfYidqGYwlAhgbHYJrBLcg932oBPWx%2FQDbqrfba%2FTe2JevnHIeMiZTtxyajJnmautcx6sq0VI%2BJHrEhv061NKF36iD448hxRKM5soI7h%2FFV5bOGrUaxUA52lBYgN9wE9ir3mXd4mQOKHZ5K%2FH4SyAWVtLvRtgvQAGHFWgs0%2FoiMZIo%2BMSXsJqgkEZLfL9IyLzFXVYMr7KfXeZ2ENrDDunjpsWdwPIbjk3LZvwr70RH6czr85m0%2BNeHbVJe%2B4rtJipSckZlFP%2BD%2FjWv%2B6iuzt0%2Fjk2VKsj42SVAmBa%2FuXQU%2Fp6pjStRTzCDcnBG5aXC7IHcVaBgosRpu3DlrRxU5R4Sy9L08bDCtqhyCeBoXrHggIRSACN68SvvesxGs%2BQW%2Bx6fDcnnfkMc5eGwFuO3vKMdLeLqCUwZdHnkOWG1wenp945DBFs38IcFD412s0cf0Bq%2FbG7sf%2BuRj%2BhaeONmaU53x2%2BAYvESInkM7hH%2BSS7FxdLWgnb1G2H%2FE54NdQjoJCj3yc6U8HxpNxDz%2FUy25GFGhh0fQyMOiCsr4GOqUBvwtQSKj1O2z8FJirH7Z18W2gSEtnipGzOQGeC9hFQo0Eq1D%2BBdzQ%2FIQbaialMRA0lmiHDjrJqmgmQ%2Fz1a8UDEjLJ3AzytV57x%2BrDI0hR3s0F8u9%2B3QcIcuI%2FHF1fUR2IRazJ8SL1MopvwHZE%2Fng2Uza27rEWEmSHzn1v935B%2F8bWmwdLRBKMoiK5hlM2GTKsG8sWdj1B0jXuA46mDreZZDaCZ%2B1V&X-Amz-Signature=c53b2157cabcca00fb793ab0e87efa1198f2114f028464b4808e28e29638a15a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E4XVSRP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDIdeLJi5%2FQGg%2Bzo9nelZNnLOfgNJhC21SRyloI3LsJpgIgToBxF1mijRiRgHPvlW0ZxuRAnvSPGcIB%2FjckCmOnVs4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGNctalTEYwG3%2BJ8GyrcA6iCES7lvDX4k%2Fna01V8hkkK%2BaX66m4APWwl%2BC4Etmty3Tzi6n%2Bde6t0m4kmyHdM83bb0fpPlkkOQtSCwv1m1bHAmBUymdl7QfYidqGYwlAhgbHYJrBLcg932oBPWx%2FQDbqrfba%2FTe2JevnHIeMiZTtxyajJnmautcx6sq0VI%2BJHrEhv061NKF36iD448hxRKM5soI7h%2FFV5bOGrUaxUA52lBYgN9wE9ir3mXd4mQOKHZ5K%2FH4SyAWVtLvRtgvQAGHFWgs0%2FoiMZIo%2BMSXsJqgkEZLfL9IyLzFXVYMr7KfXeZ2ENrDDunjpsWdwPIbjk3LZvwr70RH6czr85m0%2BNeHbVJe%2B4rtJipSckZlFP%2BD%2FjWv%2B6iuzt0%2Fjk2VKsj42SVAmBa%2FuXQU%2Fp6pjStRTzCDcnBG5aXC7IHcVaBgosRpu3DlrRxU5R4Sy9L08bDCtqhyCeBoXrHggIRSACN68SvvesxGs%2BQW%2Bx6fDcnnfkMc5eGwFuO3vKMdLeLqCUwZdHnkOWG1wenp945DBFs38IcFD412s0cf0Bq%2FbG7sf%2BuRj%2BhaeONmaU53x2%2BAYvESInkM7hH%2BSS7FxdLWgnb1G2H%2FE54NdQjoJCj3yc6U8HxpNxDz%2FUy25GFGhh0fQyMOiCsr4GOqUBvwtQSKj1O2z8FJirH7Z18W2gSEtnipGzOQGeC9hFQo0Eq1D%2BBdzQ%2FIQbaialMRA0lmiHDjrJqmgmQ%2Fz1a8UDEjLJ3AzytV57x%2BrDI0hR3s0F8u9%2B3QcIcuI%2FHF1fUR2IRazJ8SL1MopvwHZE%2Fng2Uza27rEWEmSHzn1v935B%2F8bWmwdLRBKMoiK5hlM2GTKsG8sWdj1B0jXuA46mDreZZDaCZ%2B1V&X-Amz-Signature=830091b24387e2437fa21e700159726601b3a40f78795040dff5c8cfceb018d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNRKEVA2%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCeYt%2Bj5lKh15XKpZwrHURM6utF17YqHJqAcMXno8CNCgIhAIh8C116AsZuqbCURtk8Bt%2FHg9bs0AQwqE7tbYvqhQwnKv8DCGMQABoMNjM3NDIzMTgzODA1IgzWEoXLZzEAue%2FHOUgq3AOZPLeqZli61WXnMozJyL2k44EGSsvUfXxBQghYXGr6ln5yU8y10DllzFezxU1UI5CRFYdPdtYsDV1DZH%2B70Iu79m8obP23c2QLBYdE7N4Cg4FXWNiGt7bJCptpxl0mJXzEMuPA7MTLgHKb6DhXhdn3pjmALgAeuC%2FoxIGIubtkP%2Fqx641vWKwt3iWDYShBPF2hVRL%2FzkBqDfhAS3F%2B5cLG%2BvtJ9zBDDybP3YRAoDvDrTyW0Ku1zRqNN3awhVFGE6SCbAJKcODtTAcnOPmGQUCbX6l97JQpRCLUfVda1hMbSxPXVRgIHmckTjs3%2BuMG6j%2BqFAlN5fmguYw3bMCvJe%2FWBOMIHNaN5zRkSxbpNBO2JSr81oA6AoV3U3cZ1NOG0JLeqiU3XgDF9oAl0hioRcFccSB47T%2F1Ws9TVHU%2FCSiglQlzjUzXql4ZzmR1VT0%2Br%2Be0Qf%2FXD%2FJudF8b5JqPkCRFwD565hqstTXfQoM0WE3qO2%2Fr51c2miXJqK%2BKI0W66PAIZPVbigcCN32643xjFTAzMwK21EG5PwMPC%2BxHgz1dodF5bBsgAqOtBBscKyRoCCL0WNX%2BZbW%2B8H2yRI0Rz09OCFpyJxqb50jW5xqsi8y0WLzYrOHJv5Gdzv2RGDDCgrK%2BBjqkAaRR30bpIUNiUCFaL5SROpSH69Gyqh7pNIbxKVhmwkeRCu%2FexX%2B2E5HOCIN9Nm137KlgterhhhjRr7KvWSV%2Br06Mg58HfuMisV2W3iWFHHjrnlN7dUTXdDEsFhEnqVmdcUC3BYkM49g42IFciSE9AplEwGxunhJzCFTfJbr3wskwKNQykOz0eWSZ5xxwtQKGPOOC2KS5QRl7mQ%2BOeNsXIvqiW4nv&X-Amz-Signature=92ecffe0e4ee93db041e5ed2b849508f0a52be690d695df1451200e67210e281&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2AN6SD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCpQUySgNSvJOZTOTM1b3Z6ZEH9v8xYacAALo%2FsRIrP0wIgReoU7lBQrc63vWqgcEqmQ1OdxEOYwEUBmRzWsbw3Hrsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLnxZC9OarjgUd23QyrcAy5doiX8KoWVRNk2L1j6iWcGWX%2B4MgCGRxdrUtK31yh9g8E5cngfptLl4FSX2b1bF3OZhZuqQJTrL35AWkpejSuCndz7WkHnbfXiQedisboUmlp4cdcqLTbRnQUtQ3aFYjrxOR08nM63vKvB6hEy%2BOJhg37bBIU4XsGs6waucCHeXpxgm2rHleM23AeGftIXrviuNK03Zk8SUeIE%2F28LjvOT9oTJnRItnru6QnUxJFHA%2FsjKREJRiVYVqd26r9rE7%2F%2FnECpD7UwRtFq4d7C4q8TonoXCWk47IYmD8J%2Fc6eSuQFuq%2Fz4Z%2B5Y9sqZSsWWVxU3YQ46nj%2BZbGwzvM3N4cLazXwVYSfmLs%2BQ06glXEch0d41YoolYVzOvUuLA0epNbln8xDKBLLjUs6cBio4fcbxgZTHG5pPFM%2FAY2Q2fPkgAbIKz61UAq6uKJiy52zQwLHmYisKHY%2B01N%2FiUM%2F2WyorUACxrOMwSFw8xjlw2vEHkhDzwp4Z6YTBRuJdb3DZKe6ti9xwMzvk27Y6VfXtx%2FCBLcNYAT6%2FCHXDNzMUbxk0rJ1x3Ay8CK%2BpcN%2F%2FmJ4K2wz2rxEOarMacE2uE7vBdjbvxxAlTwSPwZXko95oYOkdjh4Fjq3zM8CJVBPwgMPeCsr4GOqUBOsKTLrwj2G9zFuzk%2FXdcEdbeNz36f9hv2QYVmJIPHlycGWTo8ZHGrNcG%2B28Pu04OcgeThqUOwYN41N16gETQ0HsqURnjtAGwbJESS6%2FYTHL%2BXBT1ERpynZmOPTZrUH%2FktZl2TzaGrUtfwkk8kXqNJjXHLoCD%2Bkq6oSB3qWgsNVOLiVK%2FqI1xf%2Bjf3hr9OJ%2FnZYkJK%2FwNMkkGuq4bSTzZZmAtc5gu&X-Amz-Signature=6c7f4b07b19c824c7a0f633b61c700286b23a688b659cb5717e89fc831b9095a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E4XVSRP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDIdeLJi5%2FQGg%2Bzo9nelZNnLOfgNJhC21SRyloI3LsJpgIgToBxF1mijRiRgHPvlW0ZxuRAnvSPGcIB%2FjckCmOnVs4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGNctalTEYwG3%2BJ8GyrcA6iCES7lvDX4k%2Fna01V8hkkK%2BaX66m4APWwl%2BC4Etmty3Tzi6n%2Bde6t0m4kmyHdM83bb0fpPlkkOQtSCwv1m1bHAmBUymdl7QfYidqGYwlAhgbHYJrBLcg932oBPWx%2FQDbqrfba%2FTe2JevnHIeMiZTtxyajJnmautcx6sq0VI%2BJHrEhv061NKF36iD448hxRKM5soI7h%2FFV5bOGrUaxUA52lBYgN9wE9ir3mXd4mQOKHZ5K%2FH4SyAWVtLvRtgvQAGHFWgs0%2FoiMZIo%2BMSXsJqgkEZLfL9IyLzFXVYMr7KfXeZ2ENrDDunjpsWdwPIbjk3LZvwr70RH6czr85m0%2BNeHbVJe%2B4rtJipSckZlFP%2BD%2FjWv%2B6iuzt0%2Fjk2VKsj42SVAmBa%2FuXQU%2Fp6pjStRTzCDcnBG5aXC7IHcVaBgosRpu3DlrRxU5R4Sy9L08bDCtqhyCeBoXrHggIRSACN68SvvesxGs%2BQW%2Bx6fDcnnfkMc5eGwFuO3vKMdLeLqCUwZdHnkOWG1wenp945DBFs38IcFD412s0cf0Bq%2FbG7sf%2BuRj%2BhaeONmaU53x2%2BAYvESInkM7hH%2BSS7FxdLWgnb1G2H%2FE54NdQjoJCj3yc6U8HxpNxDz%2FUy25GFGhh0fQyMOiCsr4GOqUBvwtQSKj1O2z8FJirH7Z18W2gSEtnipGzOQGeC9hFQo0Eq1D%2BBdzQ%2FIQbaialMRA0lmiHDjrJqmgmQ%2Fz1a8UDEjLJ3AzytV57x%2BrDI0hR3s0F8u9%2B3QcIcuI%2FHF1fUR2IRazJ8SL1MopvwHZE%2Fng2Uza27rEWEmSHzn1v935B%2F8bWmwdLRBKMoiK5hlM2GTKsG8sWdj1B0jXuA46mDreZZDaCZ%2B1V&X-Amz-Signature=0c6934f6358965df14111a4d13f20a6d73c96741b9d280146751d5f415c8a6ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
