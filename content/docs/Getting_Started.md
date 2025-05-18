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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJKZQ25%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAx6zzCUYyoxOL295tpMds71LHbR33E0DI3a6M2FKESvAiA4qbRxxmoBPhrqr%2FQmEWjnB%2F4njM4OEdAp13REmIjvwCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtPHpdRudlA1qi6PsKtwDqKmIPNXCddGBmRs0vRKEuV4%2BJ9Jj5NF4Qq9oE8c9Yh7X%2FyRyyaVLI9Wj%2FkHa8vHX5BxDdLurtFT3Fx%2BwqTG4OgmQijYM5fiwaxu%2Bay7PSIKuH47f2vlfyBIbsOi5iuLaRb86CWY1ghIGuaX5hq%2BGBHeAe3HxAEYck0A2dH7aJZCeyIOPhCKPrOQ12kq%2BVofhDa0B8V15MqcN0%2BCVLSJ1%2BcmWnG%2BQFoyXWr9sMuuhXgwuGYa5nzwdpB6t6J8dh%2BsjL733fBxTJubyVF7Co6dHarX5%2BvpJuL7iOi8e%2BYfqrjDMYVGl5lrXaVl6d27isa5%2FOIguh0ZngRAhn33zcfGuAID6leXHP03zbdJpwJpy8mT6ZzVDt9vuq57C7RGByqb07BWizo8XKfZWCko9Kr8f%2BgLY%2FKzfC0sETqaTK8KOfsQ7s8PVSHojHwqIvd5x7TQ6FmtXTnNnYgMvdFz5ak4ElHPTCLwbo5H92lf28P6b0THj91aEBo%2BDgHQ0F%2Baq2EZDHUvmHByZAmanHGFNYdrFbwXPORK8wuepvTdCg%2FRIxlXDItKEk425dGK0T5vrIr5H%2B9ogSRdK0nDe4LbulFNOcYjdVf8tsD4DdBOPpfaLXtW81svUP1lEZyut%2BdYw4PqlwQY6pgF48vuTcyir6lwAqjWSi%2BYJtKYq3IhQr4r6sFSfZ3Sii%2FMz23m3BMKizzYQZiktOU%2FjDZF0M9VfAznhBu4DFMNkLJmoUANpftvflWCi9X2VslyYaBNp77a2Kbl%2BVwCnYEj4nJlyFOgYJUUdnYXq2b5B0fT4aanL0yaKFT6fasIHj%2B5XGbKk%2BImstaMC%2BjXMpXMkvP38998RZFLEs9FKQPA2KAyE%2BO0P&X-Amz-Signature=66848796fbde75f4ee7c94a07e834ba1f306fbe837883657ae1f029135035ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJKZQ25%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAx6zzCUYyoxOL295tpMds71LHbR33E0DI3a6M2FKESvAiA4qbRxxmoBPhrqr%2FQmEWjnB%2F4njM4OEdAp13REmIjvwCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtPHpdRudlA1qi6PsKtwDqKmIPNXCddGBmRs0vRKEuV4%2BJ9Jj5NF4Qq9oE8c9Yh7X%2FyRyyaVLI9Wj%2FkHa8vHX5BxDdLurtFT3Fx%2BwqTG4OgmQijYM5fiwaxu%2Bay7PSIKuH47f2vlfyBIbsOi5iuLaRb86CWY1ghIGuaX5hq%2BGBHeAe3HxAEYck0A2dH7aJZCeyIOPhCKPrOQ12kq%2BVofhDa0B8V15MqcN0%2BCVLSJ1%2BcmWnG%2BQFoyXWr9sMuuhXgwuGYa5nzwdpB6t6J8dh%2BsjL733fBxTJubyVF7Co6dHarX5%2BvpJuL7iOi8e%2BYfqrjDMYVGl5lrXaVl6d27isa5%2FOIguh0ZngRAhn33zcfGuAID6leXHP03zbdJpwJpy8mT6ZzVDt9vuq57C7RGByqb07BWizo8XKfZWCko9Kr8f%2BgLY%2FKzfC0sETqaTK8KOfsQ7s8PVSHojHwqIvd5x7TQ6FmtXTnNnYgMvdFz5ak4ElHPTCLwbo5H92lf28P6b0THj91aEBo%2BDgHQ0F%2Baq2EZDHUvmHByZAmanHGFNYdrFbwXPORK8wuepvTdCg%2FRIxlXDItKEk425dGK0T5vrIr5H%2B9ogSRdK0nDe4LbulFNOcYjdVf8tsD4DdBOPpfaLXtW81svUP1lEZyut%2BdYw4PqlwQY6pgF48vuTcyir6lwAqjWSi%2BYJtKYq3IhQr4r6sFSfZ3Sii%2FMz23m3BMKizzYQZiktOU%2FjDZF0M9VfAznhBu4DFMNkLJmoUANpftvflWCi9X2VslyYaBNp77a2Kbl%2BVwCnYEj4nJlyFOgYJUUdnYXq2b5B0fT4aanL0yaKFT6fasIHj%2B5XGbKk%2BImstaMC%2BjXMpXMkvP38998RZFLEs9FKQPA2KAyE%2BO0P&X-Amz-Signature=135796ebbee02a563726cb1029a4bbca2619687861758ffd3c0f3f8c66076042&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJKZQ25%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAx6zzCUYyoxOL295tpMds71LHbR33E0DI3a6M2FKESvAiA4qbRxxmoBPhrqr%2FQmEWjnB%2F4njM4OEdAp13REmIjvwCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtPHpdRudlA1qi6PsKtwDqKmIPNXCddGBmRs0vRKEuV4%2BJ9Jj5NF4Qq9oE8c9Yh7X%2FyRyyaVLI9Wj%2FkHa8vHX5BxDdLurtFT3Fx%2BwqTG4OgmQijYM5fiwaxu%2Bay7PSIKuH47f2vlfyBIbsOi5iuLaRb86CWY1ghIGuaX5hq%2BGBHeAe3HxAEYck0A2dH7aJZCeyIOPhCKPrOQ12kq%2BVofhDa0B8V15MqcN0%2BCVLSJ1%2BcmWnG%2BQFoyXWr9sMuuhXgwuGYa5nzwdpB6t6J8dh%2BsjL733fBxTJubyVF7Co6dHarX5%2BvpJuL7iOi8e%2BYfqrjDMYVGl5lrXaVl6d27isa5%2FOIguh0ZngRAhn33zcfGuAID6leXHP03zbdJpwJpy8mT6ZzVDt9vuq57C7RGByqb07BWizo8XKfZWCko9Kr8f%2BgLY%2FKzfC0sETqaTK8KOfsQ7s8PVSHojHwqIvd5x7TQ6FmtXTnNnYgMvdFz5ak4ElHPTCLwbo5H92lf28P6b0THj91aEBo%2BDgHQ0F%2Baq2EZDHUvmHByZAmanHGFNYdrFbwXPORK8wuepvTdCg%2FRIxlXDItKEk425dGK0T5vrIr5H%2B9ogSRdK0nDe4LbulFNOcYjdVf8tsD4DdBOPpfaLXtW81svUP1lEZyut%2BdYw4PqlwQY6pgF48vuTcyir6lwAqjWSi%2BYJtKYq3IhQr4r6sFSfZ3Sii%2FMz23m3BMKizzYQZiktOU%2FjDZF0M9VfAznhBu4DFMNkLJmoUANpftvflWCi9X2VslyYaBNp77a2Kbl%2BVwCnYEj4nJlyFOgYJUUdnYXq2b5B0fT4aanL0yaKFT6fasIHj%2B5XGbKk%2BImstaMC%2BjXMpXMkvP38998RZFLEs9FKQPA2KAyE%2BO0P&X-Amz-Signature=eac2ed0fa21788b2becd1694ef432826e4ac4af67bb490dd14e5fb32b4fbb8e9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGW7T5IK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9dhtGeYaBOWNnyjFM7N6bVFsEQmLNxBr%2BTtr%2BrpNugAiAn0eAG2BV1NL%2FIH2aBD%2Be1SLXzwvDsGuKWWEcPaRYm8Sr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMIqAKVoYGanqItseOKtwDxpysfSmXs2ifpjOp1XQnL1HXDYQ23IE5Q2mhbClL5TZG1m2HN63pBcMs6th6EJBoGGg0SuLJYK0dd0U2o834IP2tWM%2B5NZj08iiAI%2FYlQT0kEyXW4EHMTTRb6eNGilV6FDxHkv%2FfPs8KTiugbx%2BxzbNGoGQhHYM4w8KByW09qnwQUm%2B0M%2BVvU3f94BhhJPIapno7Iow7rCmd77VT8Hp4GhdzQ%2F2pKV%2BrMwOpdzKXwwssI7px0xR%2FxGjWhzWG55OtuX0WfsBF4o1Ki5SQCYTAwW8R%2B7BTBeGvrr4MOUXjbc6p%2BxWfQ51pPMgxL7ga8qY%2FcV787nMN1PVibmt9bbyyWARRMR6gsB5MBzFN2rrq9qqvvefTVhsuqxye7B%2F8oHzbuHpn2%2F9n4HXN2ueAY7dTjRGogMLR5fed6bsQW8S6IwkL3jGxW4Yntanae%2FIVn3fIh3owNafqE3lEyKt9gw%2Bkk0H11aOLWzsFHXnfX0SqlJjZJ%2F0mDvtKkGRcYMtayGhjgvTLPOOAFrpzr7z30fNp2NQ3egl3Zfni4xY7uN5%2F4niC5jjBS9mmpbodh2rcbYGsjj3H12Zp%2FoDf%2FfeJgHRoZpvIVRyuidyChn6wWoKUI6HY8HXwaWY%2Fc8Q4eukwwaCmwQY6pgFNGmg26ntETahJ19R4WJB%2BxwvBV1Van0SWh5VbmerK50l951tw3IwRpwIpMeztIxSEku87RJUsc2NWytceK6MAkGDSaEshMTe52PqWzP7KIXW2PC%2FoHB4M3ZCmrUPOihG%2BXHLjky7EyVFW9EQXwoLVjfb4c2%2FQ5Z0YOhHOVI80MAgsUAN1fbJHZIlNbCC1zYdjGvRv7mt1UcmU51fArK4ROQhkhxWY&X-Amz-Signature=0a7da06022e264bb0ac5b5bc9cc8c65d530e0255cf1e35b0c28cb2a6850abf5a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEV5PLGT%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOyOb%2BCIvBvmyVQN%2BnF1gdOfYYVuU7YsnmLLKc45VjdwIgU7ncEF5YsQ%2F0vCb4OrmwKkTJgDHxA7cxed3iJMj%2B0J4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAMvFxozfsBdj%2FCYdircA0tuYNr%2BRupUk2tbB3ADXsm3sGe%2BXduL0laccu4Z4U%2FgSQNt80MngC65zEwC0GfVodWKldKOw1SV6C3b8Rhby4zvf7sP3fsbm5j5pox8KP%2FlrW0ZJ%2BM25FVIpW2oOTd5pyL%2BbPC5nh1J5%2F0ji6XNtMOvb0JVoxeRXx2wc0bCIq8CwyU1UiPbMqb7WEOgKRnSRbgELoMQohM7%2FidvihnggcUESH8%2B4FhJxQzaGdEiL1A8W%2FhSrk%2FH3UDrAvnGbLytM3t8%2Bp1JSK33EZg2k3bIYHw26ZFSBTVOAESYczJVHSLIe%2Bd0dIqJ1IQhLVGhrj48bN01%2BSzWsa2a4psL%2Fv98WFWEYQXl4Kd%2BVY00VoczTzvyiSVhE0hJK6loWJkqdh8%2BqX4e3qVzAo%2F4hNjaE%2BQpQbfScijIS81FfYG%2B%2F5mJ7r7WJstWbKNAjFJtcBKz8gUlK3Gned5RbyT4JfMEE%2BfHNWFghGpqI7jlsIPoAM0OQDNeCi9GDcFY6t2SkPozpJ1EEnQn5D2SL2JPNQEjKgBSdBIaaRwvZ9sBn%2FIuMfTi4eUf4kWvD2zElf3xfDuxo6p7ImdCZz0kV%2FzqlaNlIomL9zf1%2FoVejq8gH9aA6FwAwwO4x5uTz%2FKhc5NkA0wNMM7xpcEGOqUB%2BTbQcT%2Fvcq6AKnxMsghO2h1o6CZeDbh1E5iA7nRArDHXfUF1DMN0e%2F07DWxVyoivcKrCz4YITxhlAGTLJIJ3icHlh422aqCpcNAfM8L95DQt0aOBOM2kS30OlciSGLTXqEHWlZdpuDMDAj0qj96d700kbny6k%2FnAQ4I9J2Q%2FUJUVyNSbrYxg6e1PrPO5h7Gr4nWkbZ0rG%2BpPc7X1iWjs6T92vV8Z&X-Amz-Signature=3137f0ea0e322635b04d34107464e2f8103d21c22907cfa4a90544a599429a2b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJKZQ25%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAx6zzCUYyoxOL295tpMds71LHbR33E0DI3a6M2FKESvAiA4qbRxxmoBPhrqr%2FQmEWjnB%2F4njM4OEdAp13REmIjvwCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtPHpdRudlA1qi6PsKtwDqKmIPNXCddGBmRs0vRKEuV4%2BJ9Jj5NF4Qq9oE8c9Yh7X%2FyRyyaVLI9Wj%2FkHa8vHX5BxDdLurtFT3Fx%2BwqTG4OgmQijYM5fiwaxu%2Bay7PSIKuH47f2vlfyBIbsOi5iuLaRb86CWY1ghIGuaX5hq%2BGBHeAe3HxAEYck0A2dH7aJZCeyIOPhCKPrOQ12kq%2BVofhDa0B8V15MqcN0%2BCVLSJ1%2BcmWnG%2BQFoyXWr9sMuuhXgwuGYa5nzwdpB6t6J8dh%2BsjL733fBxTJubyVF7Co6dHarX5%2BvpJuL7iOi8e%2BYfqrjDMYVGl5lrXaVl6d27isa5%2FOIguh0ZngRAhn33zcfGuAID6leXHP03zbdJpwJpy8mT6ZzVDt9vuq57C7RGByqb07BWizo8XKfZWCko9Kr8f%2BgLY%2FKzfC0sETqaTK8KOfsQ7s8PVSHojHwqIvd5x7TQ6FmtXTnNnYgMvdFz5ak4ElHPTCLwbo5H92lf28P6b0THj91aEBo%2BDgHQ0F%2Baq2EZDHUvmHByZAmanHGFNYdrFbwXPORK8wuepvTdCg%2FRIxlXDItKEk425dGK0T5vrIr5H%2B9ogSRdK0nDe4LbulFNOcYjdVf8tsD4DdBOPpfaLXtW81svUP1lEZyut%2BdYw4PqlwQY6pgF48vuTcyir6lwAqjWSi%2BYJtKYq3IhQr4r6sFSfZ3Sii%2FMz23m3BMKizzYQZiktOU%2FjDZF0M9VfAznhBu4DFMNkLJmoUANpftvflWCi9X2VslyYaBNp77a2Kbl%2BVwCnYEj4nJlyFOgYJUUdnYXq2b5B0fT4aanL0yaKFT6fasIHj%2B5XGbKk%2BImstaMC%2BjXMpXMkvP38998RZFLEs9FKQPA2KAyE%2BO0P&X-Amz-Signature=520f2c53e4d21b86b8ac7f5b85d747be78f892437327a46fa46bd4c698bf0f11&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
