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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RXCJK4E%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6wP%2FjnXffnEofP8wcVd%2B3DyYTp%2BASVdZgnprXX3tHfAIhAPnsPHquwqt0ahKxOHjq78mVDFHIHgN3F4ur2oIGqNOQKv8DCBEQABoMNjM3NDIzMTgzODA1IgxK3lNVpd%2FSypvKSLQq3AOB5AgTuWPsjL1Vi9Rz5n9tIv234npKaCd7aNleW55qWcQuLz%2BNBLm8nCVUJDlfhNBQXP3ZcatxlfamntLl7ID23EAjCsWuH4bEz%2FINtB%2BVaAtYw5MndPAfBHwsoUjpFgEhIeN2kVcKLNpb%2FVSu6%2Fa%2BcCADgu3o3qEX%2Fd5UPIiuexM8cuakDv7miAGDuMEvebh%2FyeRJvM5q3QooEKDGSbspauaYeAMDMFard4kGRfFZXSZiKFmNRf79i9%2FN%2F4ag2ZItthCJGVxundq%2BArOQLIcgieZ7eyGCFw9nK0y%2BDJb0BViKi%2FHBCdAzDnihotKALtn9W8SDSr9QgYuwMFD2Ee0COx7IyCdgo%2B5%2FjmnCjWtvgxpEEW0b37v0rgK8n%2FE4wMN%2B8U%2FwDh8awYoIf5fqLDONrlk820RiYttZi6UFKN0KTIRAY6TgNb%2Bgi9UuAuf97zAtE5Zh58HcSiBiVnNs3X%2BYU0IY3ABsPqdBzoooN4tMdpi%2FkEbEN1ofebE8XL4z36tE6PRDxTXlNuaOEo5SJT15nE2qPyiCOZDtUzSo2mSIc2kfpKLgLfL%2BP8Oy7%2FiWchxKQRmn5oJZxeUEqvmp79l4uc%2BTtL7EheK8iwkCtrW4aBwQZWtR0eNLeHdD4DC69IG9BjqkAUTxGrF40pEJbredXuT6HIh2yG4pSc0f9CgZi0qE98zDItRUInS4awDmwrFQzd1yBb%2FfYacpspaKkwjzILtkOGcwdKFxtume%2BvC5RACfsYXJdsfjqtL1%2BYIg3bjMterN2jslIhjViaESU%2BxYybsiqaGow6kyHPblgxRMEh8W0xPJkmtSP3lsQFOMAHRzI2xKAC%2FPiY5DVkHid0nY2hPYDcLKV%2F2L&X-Amz-Signature=b91f27c3c9d6d260588595a51257c45f7c9c35d8b2504f55871de544ad9b6fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RXCJK4E%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6wP%2FjnXffnEofP8wcVd%2B3DyYTp%2BASVdZgnprXX3tHfAIhAPnsPHquwqt0ahKxOHjq78mVDFHIHgN3F4ur2oIGqNOQKv8DCBEQABoMNjM3NDIzMTgzODA1IgxK3lNVpd%2FSypvKSLQq3AOB5AgTuWPsjL1Vi9Rz5n9tIv234npKaCd7aNleW55qWcQuLz%2BNBLm8nCVUJDlfhNBQXP3ZcatxlfamntLl7ID23EAjCsWuH4bEz%2FINtB%2BVaAtYw5MndPAfBHwsoUjpFgEhIeN2kVcKLNpb%2FVSu6%2Fa%2BcCADgu3o3qEX%2Fd5UPIiuexM8cuakDv7miAGDuMEvebh%2FyeRJvM5q3QooEKDGSbspauaYeAMDMFard4kGRfFZXSZiKFmNRf79i9%2FN%2F4ag2ZItthCJGVxundq%2BArOQLIcgieZ7eyGCFw9nK0y%2BDJb0BViKi%2FHBCdAzDnihotKALtn9W8SDSr9QgYuwMFD2Ee0COx7IyCdgo%2B5%2FjmnCjWtvgxpEEW0b37v0rgK8n%2FE4wMN%2B8U%2FwDh8awYoIf5fqLDONrlk820RiYttZi6UFKN0KTIRAY6TgNb%2Bgi9UuAuf97zAtE5Zh58HcSiBiVnNs3X%2BYU0IY3ABsPqdBzoooN4tMdpi%2FkEbEN1ofebE8XL4z36tE6PRDxTXlNuaOEo5SJT15nE2qPyiCOZDtUzSo2mSIc2kfpKLgLfL%2BP8Oy7%2FiWchxKQRmn5oJZxeUEqvmp79l4uc%2BTtL7EheK8iwkCtrW4aBwQZWtR0eNLeHdD4DC69IG9BjqkAUTxGrF40pEJbredXuT6HIh2yG4pSc0f9CgZi0qE98zDItRUInS4awDmwrFQzd1yBb%2FfYacpspaKkwjzILtkOGcwdKFxtume%2BvC5RACfsYXJdsfjqtL1%2BYIg3bjMterN2jslIhjViaESU%2BxYybsiqaGow6kyHPblgxRMEh8W0xPJkmtSP3lsQFOMAHRzI2xKAC%2FPiY5DVkHid0nY2hPYDcLKV%2F2L&X-Amz-Signature=20469d3d85f3652961e2b01ff470ce53b69fdece459c443cb00a864fbc287bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJL35GSQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbgwh0MaIpy7xmWOMTU9y06ZbARxnrzbC043fbfe1%2FqAiBPt0fx0FIf6lyn39IQXK68cZVSw2GcF6iND9ScXl6XMyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMxBJrOYO3x5TCvRirKtwDeJvarZ%2FTvfZR5h5Rdh%2F77lJAWoWdeRxpCkd6QWNm5d7QD7YF8BekxMHUi00%2F1h5z51F5azA2hEuamWoOiXbFZaBDxydHxWs0G%2Budi9KXVyrfiQaxm5EJwkCqt7rTmPgSd2t%2FkUfzwiDm6oh2Ref%2FAesgtzEJkd3%2FIvieqD0%2BkuQ%2BE9pvfQApl8TrfQ56UBLUV%2FodI576MV4OWtixEHdvCvYgtqcrAgsGmCOepzxecRAfnGSnf8I%2BwaxmEzc3Mz4gluVcuDrEDjB1IwW117UP1PyXhEDQWBhajWH%2F136fxmtk1zv9rraePE5Ymwt2b7aMZehz0S2J%2BIsfF%2BVKSvSkUVwrH1gpBD0C3Xdnv8vxIrz6Um7mS%2FLqrMzz7lYQRjhvZlV4Q9t%2FkyuPv%2BRg8EchM9cMySrcdjXx0rNB6k0tjSJ920bdH%2BEwtpVSaebUEECT99qJBxoTxY1Zb%2FLxUu6DFQ%2BM7y5995lJpnCKnJl27Cl819ZK2ch%2FzrgwB%2BnNy6in7AFLBt6mJXIyQ2tGXqYNRlMQv3ty87Lw%2B0EqLl8AfvlrUyH45fogH7TC4%2BDAD58D9t6ecO%2BBiKakDrF9IdV2FtY7yFxeKLUEInPzJXgqtFT2FJPJvrdh1cYL%2FCYwl%2FSBvQY6pgFZGO3XFX%2FY7hcH%2Bb10OC%2F5wliim%2FpFf2ll1Y%2BK%2FqL7MP7u%2Bp3QcOF9pT7ck5%2B%2BxbnpLVa%2FBYJbHNIxnjjzm%2FCMNsJACM59ViuZm1q8vKJxzd%2B4dzo9x%2B7sStSnHaLWk7dlwnBl9IlbMl8vbVADjUzpnjRk49UpB2o70bPxoGNsaEcAhQiFb%2FTLtqiyNjyCjJpdMf09Bw5mQsZxv5nIa%2BznZLiZxMwJ&X-Amz-Signature=0cc222f87f320acf7575e693c1e24a78461fe39270eea04c021b65b44c1f162c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM6EBQ6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxnZKzmRua96EYfpnpuKGABY6IrW7lfJj4DphhodyaPQIhAOsNr3TJaiJ3j9mDddKHkgm3dXkGtuiRrLHEcygEs%2BglKv8DCBEQABoMNjM3NDIzMTgzODA1IgyNXdTos9IIMsyXPmwq3ANuQdPMWfZGDmeP3T8Nxh4%2B9bMiP5GkCB9SsWli3%2B4dvNM4Wn%2Fq8lzXtOHRi%2BzsUAeL8jC5B1pDwMAx3FWMPmrhsOFABgUbRRQ2x0WWrIfBlhh47yQiuasTNSF7rowGD2rhUk88mMMEHii3dDRX5tw%2BVNK6yHCj4kPyi6oOmJSy8VQ1BE9VqGp8ylbHdumvKFIHiViXogVwa1pwZOw8mvDUK%2BSP94eMyyRzsV0JQybQDypTvhb0PPliY0q3aN%2FBD0tVayZfJm3d1b1fk8EvwLaqOmYcYxLRndjzfKv%2BbQdejoV9pHHkKKNJ%2B3M2FMSrCTVPcXMyqXlovlI4KE%2FUE%2F5cdG8WU8Ofi2mDcXQM5xTmZKO415O7T2cmRgYH1vLvDPNt0kLvU6TiR1YdNi9OHW306x%2B5RU7xLkRIxScpTQJx1OEeLS2%2FU1YaAjEf81Y16BrRBEdwmz3zezMfWbTk4O7jYWV8QMhJuD6mh%2FEFGHP1m0sXt1no5%2FsXXTcEBRCOs7OIUk9NJQOfFuXnpL9kdFQ86zsmAExgCDYGakkU4MCn7OmKKPMd5Uodupt8IJKkC24ZWnur4dHNRFkCEqJZtQfQKA8J2vdkBPfQPLCx%2F58TS6UMRl8H3yVfhUzUxDDU9IG9BjqkAS4S%2Fyldx2H1ZSZ%2B0Bz8n7usC%2FafgdvciSVgFtBZr56bSeaJX7TXynbUEZCJv7S0iHbzOC9qvP5%2FKUUiwKJkRVdopXXlB8M3RI1uJct6%2F63su18qw%2BVgP2W7OIkuHCojRI7gSJly%2BMd35jexJxLs%2FqQYCSJKPVFKmZ0xmsZ5NFRUTKh%2BPc1qQYMzNfPoPUAqyXgpivLqDcgxjEUxOZZNYa%2FEmE4y&X-Amz-Signature=a37aafcfe8755bca472095bd2d1dd015fe560af996a78f79162fcba14f9c7d16&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RXCJK4E%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6wP%2FjnXffnEofP8wcVd%2B3DyYTp%2BASVdZgnprXX3tHfAIhAPnsPHquwqt0ahKxOHjq78mVDFHIHgN3F4ur2oIGqNOQKv8DCBEQABoMNjM3NDIzMTgzODA1IgxK3lNVpd%2FSypvKSLQq3AOB5AgTuWPsjL1Vi9Rz5n9tIv234npKaCd7aNleW55qWcQuLz%2BNBLm8nCVUJDlfhNBQXP3ZcatxlfamntLl7ID23EAjCsWuH4bEz%2FINtB%2BVaAtYw5MndPAfBHwsoUjpFgEhIeN2kVcKLNpb%2FVSu6%2Fa%2BcCADgu3o3qEX%2Fd5UPIiuexM8cuakDv7miAGDuMEvebh%2FyeRJvM5q3QooEKDGSbspauaYeAMDMFard4kGRfFZXSZiKFmNRf79i9%2FN%2F4ag2ZItthCJGVxundq%2BArOQLIcgieZ7eyGCFw9nK0y%2BDJb0BViKi%2FHBCdAzDnihotKALtn9W8SDSr9QgYuwMFD2Ee0COx7IyCdgo%2B5%2FjmnCjWtvgxpEEW0b37v0rgK8n%2FE4wMN%2B8U%2FwDh8awYoIf5fqLDONrlk820RiYttZi6UFKN0KTIRAY6TgNb%2Bgi9UuAuf97zAtE5Zh58HcSiBiVnNs3X%2BYU0IY3ABsPqdBzoooN4tMdpi%2FkEbEN1ofebE8XL4z36tE6PRDxTXlNuaOEo5SJT15nE2qPyiCOZDtUzSo2mSIc2kfpKLgLfL%2BP8Oy7%2FiWchxKQRmn5oJZxeUEqvmp79l4uc%2BTtL7EheK8iwkCtrW4aBwQZWtR0eNLeHdD4DC69IG9BjqkAUTxGrF40pEJbredXuT6HIh2yG4pSc0f9CgZi0qE98zDItRUInS4awDmwrFQzd1yBb%2FfYacpspaKkwjzILtkOGcwdKFxtume%2BvC5RACfsYXJdsfjqtL1%2BYIg3bjMterN2jslIhjViaESU%2BxYybsiqaGow6kyHPblgxRMEh8W0xPJkmtSP3lsQFOMAHRzI2xKAC%2FPiY5DVkHid0nY2hPYDcLKV%2F2L&X-Amz-Signature=ee967a95e31fc78921d7986fae0e3cdad9b360ee715d8d6efce7aa4777ba7b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
