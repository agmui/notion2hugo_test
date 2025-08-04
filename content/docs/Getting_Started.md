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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4SC2WQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCw0UYhqmC6EORS%2BEf%2BNOiy9pk0WsKgHPFDmpXcLmAWrwIgVTVaYN%2BwVv0zArLQupEPx4qTfgwHw%2FCAoUFMb9ncuqcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMUBWBpDT6t%2FBZ%2FuXyrcA78Qf83FieVoSjlg3taiS%2Fstt23IqO5vaMdgSEnw5zaksON3UUTEK%2BCva339vdMFPgfkyx0mmO%2BaprCYzFzOLz6m5GmfCcYV9Woqk1%2BxcHUR92uwIUEOKnfslis9eMxHffsGJQz1SYBB%2FlnAoIQ%2FTdrvk9VNjnNx7jlP0brv7VxQUJhG2U22%2BgULS3lx%2FKuxutC15Sy2cKx8dRej1yywWyRmKHrTzSBPMgWkpn9KOOkL8dtx5zKJWwAI2idz0BnhgIxMYGGwUYiPRsLlDhz7tkg%2BXgn1LzuIl2vFIRAaBoTqWggnHeO59kiRe2G%2BBZKKmOD7lOtBJP0KJ6NRXxDQWBfsah5yonpUgTmH3qmgpbcsHn428ijZoSHZVi4uw9QOQNretzA%2BOf7isUKspu%2F91ke9sWdixLQ0v%2BmXn%2B8QDuiAonG8QYAPXLTT6BBYx4vqvIPJTII%2BhqnlOYbnSX9lp44uAbcSOJAnPkSJt0LSaIfCVIwIZU4Dp8Nz59tmsfYHUA7zkUxB0imtU9y4%2F9hehvMxIqgSg2vXZuINuin2pnIJsWWrjj1siB9XGaZypCb2FPprFJn2cqYwNxySzqi%2F32aqASaD4m3jy%2FeL0i3hXx6sZwkyloIaSCCsikTPMOf4w8QGOqUBmNmBeazFgYGM6FyHTOZaIVQubKCTQ1%2FuQvdwJbK8xCOR9mqFPJoexKnRMbcLrffUNo%2F2kM%2FeG0WhmT0xiRe7p4vT56KmP%2B5bWANQsnQmP3KNeGboEPhodyOTRZtr4xVO%2F7%2FQTftjGdeGFmoEgR5tnuS5hIncCTmr%2BkHSHDvYIFqV4HUP2UIka%2Bon1S%2Bt56iDc9Wwr1n3euvmOEGQe51105Jisr7w&X-Amz-Signature=18e0367e208c0c3cebda5ed820dd74dd798634f27f38cc25380c7025fed3aa73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4SC2WQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCw0UYhqmC6EORS%2BEf%2BNOiy9pk0WsKgHPFDmpXcLmAWrwIgVTVaYN%2BwVv0zArLQupEPx4qTfgwHw%2FCAoUFMb9ncuqcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMUBWBpDT6t%2FBZ%2FuXyrcA78Qf83FieVoSjlg3taiS%2Fstt23IqO5vaMdgSEnw5zaksON3UUTEK%2BCva339vdMFPgfkyx0mmO%2BaprCYzFzOLz6m5GmfCcYV9Woqk1%2BxcHUR92uwIUEOKnfslis9eMxHffsGJQz1SYBB%2FlnAoIQ%2FTdrvk9VNjnNx7jlP0brv7VxQUJhG2U22%2BgULS3lx%2FKuxutC15Sy2cKx8dRej1yywWyRmKHrTzSBPMgWkpn9KOOkL8dtx5zKJWwAI2idz0BnhgIxMYGGwUYiPRsLlDhz7tkg%2BXgn1LzuIl2vFIRAaBoTqWggnHeO59kiRe2G%2BBZKKmOD7lOtBJP0KJ6NRXxDQWBfsah5yonpUgTmH3qmgpbcsHn428ijZoSHZVi4uw9QOQNretzA%2BOf7isUKspu%2F91ke9sWdixLQ0v%2BmXn%2B8QDuiAonG8QYAPXLTT6BBYx4vqvIPJTII%2BhqnlOYbnSX9lp44uAbcSOJAnPkSJt0LSaIfCVIwIZU4Dp8Nz59tmsfYHUA7zkUxB0imtU9y4%2F9hehvMxIqgSg2vXZuINuin2pnIJsWWrjj1siB9XGaZypCb2FPprFJn2cqYwNxySzqi%2F32aqASaD4m3jy%2FeL0i3hXx6sZwkyloIaSCCsikTPMOf4w8QGOqUBmNmBeazFgYGM6FyHTOZaIVQubKCTQ1%2FuQvdwJbK8xCOR9mqFPJoexKnRMbcLrffUNo%2F2kM%2FeG0WhmT0xiRe7p4vT56KmP%2B5bWANQsnQmP3KNeGboEPhodyOTRZtr4xVO%2F7%2FQTftjGdeGFmoEgR5tnuS5hIncCTmr%2BkHSHDvYIFqV4HUP2UIka%2Bon1S%2Bt56iDc9Wwr1n3euvmOEGQe51105Jisr7w&X-Amz-Signature=e95f6a35904eb084c221f23a51cf8420f206eea8de67fa9270ec41f84ff3c2bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4SC2WQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCw0UYhqmC6EORS%2BEf%2BNOiy9pk0WsKgHPFDmpXcLmAWrwIgVTVaYN%2BwVv0zArLQupEPx4qTfgwHw%2FCAoUFMb9ncuqcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMUBWBpDT6t%2FBZ%2FuXyrcA78Qf83FieVoSjlg3taiS%2Fstt23IqO5vaMdgSEnw5zaksON3UUTEK%2BCva339vdMFPgfkyx0mmO%2BaprCYzFzOLz6m5GmfCcYV9Woqk1%2BxcHUR92uwIUEOKnfslis9eMxHffsGJQz1SYBB%2FlnAoIQ%2FTdrvk9VNjnNx7jlP0brv7VxQUJhG2U22%2BgULS3lx%2FKuxutC15Sy2cKx8dRej1yywWyRmKHrTzSBPMgWkpn9KOOkL8dtx5zKJWwAI2idz0BnhgIxMYGGwUYiPRsLlDhz7tkg%2BXgn1LzuIl2vFIRAaBoTqWggnHeO59kiRe2G%2BBZKKmOD7lOtBJP0KJ6NRXxDQWBfsah5yonpUgTmH3qmgpbcsHn428ijZoSHZVi4uw9QOQNretzA%2BOf7isUKspu%2F91ke9sWdixLQ0v%2BmXn%2B8QDuiAonG8QYAPXLTT6BBYx4vqvIPJTII%2BhqnlOYbnSX9lp44uAbcSOJAnPkSJt0LSaIfCVIwIZU4Dp8Nz59tmsfYHUA7zkUxB0imtU9y4%2F9hehvMxIqgSg2vXZuINuin2pnIJsWWrjj1siB9XGaZypCb2FPprFJn2cqYwNxySzqi%2F32aqASaD4m3jy%2FeL0i3hXx6sZwkyloIaSCCsikTPMOf4w8QGOqUBmNmBeazFgYGM6FyHTOZaIVQubKCTQ1%2FuQvdwJbK8xCOR9mqFPJoexKnRMbcLrffUNo%2F2kM%2FeG0WhmT0xiRe7p4vT56KmP%2B5bWANQsnQmP3KNeGboEPhodyOTRZtr4xVO%2F7%2FQTftjGdeGFmoEgR5tnuS5hIncCTmr%2BkHSHDvYIFqV4HUP2UIka%2Bon1S%2Bt56iDc9Wwr1n3euvmOEGQe51105Jisr7w&X-Amz-Signature=9cd4063792c42a8b9940b42e5ef12daab6a3ff7d008f656c5524d363c6f6b2d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JB6YQJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCICTAHEoCpPW%2FIQe%2B3rNa1fuEOMKu6vGDUR5AWiqT04NEAiEA%2FgyoFlHGVfk8xFORlR885HmA%2BnA9sRZndVHBgfSZwO4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG6R77n8uSWDTtQm%2FyrcA3n1nQ42mEUZItGUof5V%2F5KIOsZuNZohtjA%2FncBjJ2jb2tTWD3X27vsrX5X0p2kxYKrh%2BIiLAfUqRCcj%2FcWtioc4v3B0tiWwY0OD%2FrMgM7A7jrvu%2FwiS7O7WSZ1i6XvSQXKm0AH%2Fbdwr%2F3DNu%2Fj7G6Bexkg5WI6Up7cdbArDrjUezkHZhVpg81Q%2FVwWftEypDjSs5lIy3CVH51HAN9eODnAQLXypXaoq0qYxB3c8OSG%2B%2Fhz8cddG3z1rCHfEoRgLq8iDKYnzczHqucs42lowyrvzsZC%2BxkCQAbRjU2VNZS%2B4JDDz4O1cZWi5HOdGj6Qg3z4pn54Zhqks0FiFLV4zvJ7bEZrTMJ6NjylPO2Rw%2FoaaOweLRzbTnqfXGJ2uoPTm3Aod0rK5K826pxpuILzJIdGgfoKjjyHmrHlt2Gw0sDjyIpriSEM%2FZ7WxFuOZdy7AgO91rRYxFxzZPuqjgA11Tw6wiK%2FprDwQLh130zF%2FqVsB%2BhPG2LqlLsDcoTOc4wa0JzOq5Ht26N9KUWHJUhTt2W17DXK4%2FmWYa9wOWk7YQdnwkglIYaB9MeqZRj4ZCX9e6qXWdtw%2BwKe%2BYPpsJ3K8IXzata%2BbU8MA%2BKGoc0N0ywArQqmGusR2oNLtcIARMNX4w8QGOqUBmfVbm3G7PtxBj1311mT7yWTEF9hf9zp0mmQ1S7gpzv02d%2BSoWCVLdqg%2Fc8DVIOUFKeF8EY%2F6dUfCKhhzXDXd9k%2B2b1XYYy3i6erIMMStnJ7HaiAVV7R2ivQAIYtGLqS5IP1MAICNIUUj5SSgYUs589Xw60HLUQozisCbA9jdlGMTYT2mXZAP91xGedowywMxviYui7Ih4SCRcQwQwk3Swp3QSQok&X-Amz-Signature=7d62d79c78ef71b64e6bc664b06a24ae2506eaf425c22b26b02a666dda7c64df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKS4KPYA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDuDAnVi782MB2KjBBZQNEQilzp56q6WKqmI1N%2FpQdgpAiEA9P%2FHgo2BcUBS96zUsvom%2BxcDPPhonqw%2Be%2FL0XOIpdJIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOJpr2ywSBjs6t4%2FsCrcAxQXjnVrmhfaZfSOIA0srexSSch0p5TQbKyofWWIpCjhelnEmM9VefACbFlCkP1nAYnKr94WR7k%2FaVbKoRFDD65sUJQJsGSBww2HfloMYYttSpU8WxC67XRT2NPe0EMbeuKbF8dpyMNaNF1K%2FVD4FlINGKyecYr0ap8V0jonCoop7Jqli9atwQbYtSxj9jUtcQRmYBYSuaI9D5bPstyj79LIoIBdF%2FZ8BqVU%2BirWzcmKrtSSBgOTiqQ0d3o2Q4Ru8llff7ebKLpewLpc5zQIUvt0OmKAVGRomrLl7C%2BZVSuF0muTukosXQ%2B8LfFZhIYsdUuLxBiiyXwEiKmL0ElsCgfRnAbbCWZKuwn00MRxpeMXb9apNGhFcKRHHQona0aPEtla0OAHIitXNI8zPqODmNMZPXELAtFLiU%2FiYAYjThxBjoFvxRSgVNa0WYeuVO%2FMxsKDV4iA8Wj1swbfDOFFYhGcH6Qjw4tMRPF7BqRtY0UzSJexDDWB%2FInOqnSIo5Lm0BZEcAQKwXoFPBis4xq58x4eSmLJzirRO8j60U1MqoyDiMXAuURniboJ%2BbIknr%2FtbzSBwFVrFzKGsbipCGkpXzVXQgikR0A6CtWM1jJHAq6QZvTKQsznYJZ5I5xgMLL4w8QGOqUBQDxmnzv1HRBZ3Iz1Frvqj6Yp3CXJOmmXhzz8us%2F83%2B6640wzjCaEgEUV9vzfSj81BnuPKdeL8x%2BJ0SgZxtacu54nfzC2irZtefD1P8yvUGOBngMaC7WQxDegRNMzvDMf2w3sBQu3bNvkV8ViL8T6JVo9ZMXZksJr2OOaSz5a8iNeajXScCNpAnVYNK2jLQuHFLjeBuE51VgYnhk0kOo%2BK6Hdx2PX&X-Amz-Signature=33e41fdf51758fc496b0bdc81f86de57551e71ed2213124dc690b1d2fc08d42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4SC2WQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCw0UYhqmC6EORS%2BEf%2BNOiy9pk0WsKgHPFDmpXcLmAWrwIgVTVaYN%2BwVv0zArLQupEPx4qTfgwHw%2FCAoUFMb9ncuqcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMUBWBpDT6t%2FBZ%2FuXyrcA78Qf83FieVoSjlg3taiS%2Fstt23IqO5vaMdgSEnw5zaksON3UUTEK%2BCva339vdMFPgfkyx0mmO%2BaprCYzFzOLz6m5GmfCcYV9Woqk1%2BxcHUR92uwIUEOKnfslis9eMxHffsGJQz1SYBB%2FlnAoIQ%2FTdrvk9VNjnNx7jlP0brv7VxQUJhG2U22%2BgULS3lx%2FKuxutC15Sy2cKx8dRej1yywWyRmKHrTzSBPMgWkpn9KOOkL8dtx5zKJWwAI2idz0BnhgIxMYGGwUYiPRsLlDhz7tkg%2BXgn1LzuIl2vFIRAaBoTqWggnHeO59kiRe2G%2BBZKKmOD7lOtBJP0KJ6NRXxDQWBfsah5yonpUgTmH3qmgpbcsHn428ijZoSHZVi4uw9QOQNretzA%2BOf7isUKspu%2F91ke9sWdixLQ0v%2BmXn%2B8QDuiAonG8QYAPXLTT6BBYx4vqvIPJTII%2BhqnlOYbnSX9lp44uAbcSOJAnPkSJt0LSaIfCVIwIZU4Dp8Nz59tmsfYHUA7zkUxB0imtU9y4%2F9hehvMxIqgSg2vXZuINuin2pnIJsWWrjj1siB9XGaZypCb2FPprFJn2cqYwNxySzqi%2F32aqASaD4m3jy%2FeL0i3hXx6sZwkyloIaSCCsikTPMOf4w8QGOqUBmNmBeazFgYGM6FyHTOZaIVQubKCTQ1%2FuQvdwJbK8xCOR9mqFPJoexKnRMbcLrffUNo%2F2kM%2FeG0WhmT0xiRe7p4vT56KmP%2B5bWANQsnQmP3KNeGboEPhodyOTRZtr4xVO%2F7%2FQTftjGdeGFmoEgR5tnuS5hIncCTmr%2BkHSHDvYIFqV4HUP2UIka%2Bon1S%2Bt56iDc9Wwr1n3euvmOEGQe51105Jisr7w&X-Amz-Signature=be9d213c590ef822e23c51e4e19b239e38c2e45f9b0300be2d790c4fccf0b662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
