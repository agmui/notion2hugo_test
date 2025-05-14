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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAS6RZPU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDF3eCZfbMXClI2oBxp0twOMER1E%2B5N3Za4l4jrsXwj%2BAiAwEaNy5BvY1iGciYb3%2F3BhOpANcTfGZtdDLhKr0uEoPSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMGx4tsv7JhvGNzXAyKtwDxQFkZMMrgnqdHrEhliZw2t%2BX4oMgbl1TdoAwI3%2FYJYvUjFJ87bRdUN1XGiCJcsznAy%2BFELAl9CQB0jbqbHM1LEKS6KVa5kL83yF3%2BriPXCwIrkUYIXUyfZjM3FFrUfnOI6LhReOApoAT483ElPXxduYXjfaKYYmtqoWv2CpQ3uC7QFlu3yg3Tky3LVsgAnpFmcvcea%2BvhKbx6H4%2F37LnFc2rpLxGjvdnn7rjdtVtmirWHK%2FtKtjAdyqB2pg9BeyhqOK9vpkxR0RGnjU%2BChSq5z85Shyn8qomNT3jzXt%2B3l3skrLpz%2Bs9gdSEiG%2BmQK8IGZ9hCeCiNk0unbzLrBNO4PenVMMVEk9Wr6FFe3f%2FqQDmeRrdycYL3ICfzOdcoL9UufuvqSAUb534snN04EQjXizZdTdH4I3ew%2B%2FzeI5Zucj3pDfiAyjTjtuQ0JVMZMrl8eP8qv6FTO2Y5ABa6q6KsIZ4RnZ5lefSKE9nM366vGUTeGoqCROwLnnCbMyLl3vDtyxBss0NWBBHMRPUcfnZg467TIzhCjhkLn%2FfckgyCAucIs4bbFkIzNlZsGdVvoxX7DkK8PGLhVX8ph9CqSvQuj%2FIobcxZxdQ%2BTjemJS%2BnzVm0QDq5Sqv%2FXCfNmAw%2B%2ByRwQY6pgHiK2sZtJkqFxkwZ7m1FxBAcODXTdsPfqZk36hhaB0v2ZfD%2FqwCdv7dTXRY8ccVk7WugZ%2BmAl0ye1D5QMNX%2Fo8NBR5gqkW2%2BC65qtkTdYR%2BSAScBRsK7Spx69OZVfvGBUOeeceNqMKhHLbopakTploCwoxkxDbu9sbn1kH2Owwpp%2FEzpJludHzgJDJWxjrvM2wViGP%2BReJ0eJn0xLAD%2BI%2BGlLzWFR3z&X-Amz-Signature=1bc81b5bf797e9beed38afe25ee32f34c40c4959973f4b57991050b5fcb09682&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAS6RZPU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDF3eCZfbMXClI2oBxp0twOMER1E%2B5N3Za4l4jrsXwj%2BAiAwEaNy5BvY1iGciYb3%2F3BhOpANcTfGZtdDLhKr0uEoPSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMGx4tsv7JhvGNzXAyKtwDxQFkZMMrgnqdHrEhliZw2t%2BX4oMgbl1TdoAwI3%2FYJYvUjFJ87bRdUN1XGiCJcsznAy%2BFELAl9CQB0jbqbHM1LEKS6KVa5kL83yF3%2BriPXCwIrkUYIXUyfZjM3FFrUfnOI6LhReOApoAT483ElPXxduYXjfaKYYmtqoWv2CpQ3uC7QFlu3yg3Tky3LVsgAnpFmcvcea%2BvhKbx6H4%2F37LnFc2rpLxGjvdnn7rjdtVtmirWHK%2FtKtjAdyqB2pg9BeyhqOK9vpkxR0RGnjU%2BChSq5z85Shyn8qomNT3jzXt%2B3l3skrLpz%2Bs9gdSEiG%2BmQK8IGZ9hCeCiNk0unbzLrBNO4PenVMMVEk9Wr6FFe3f%2FqQDmeRrdycYL3ICfzOdcoL9UufuvqSAUb534snN04EQjXizZdTdH4I3ew%2B%2FzeI5Zucj3pDfiAyjTjtuQ0JVMZMrl8eP8qv6FTO2Y5ABa6q6KsIZ4RnZ5lefSKE9nM366vGUTeGoqCROwLnnCbMyLl3vDtyxBss0NWBBHMRPUcfnZg467TIzhCjhkLn%2FfckgyCAucIs4bbFkIzNlZsGdVvoxX7DkK8PGLhVX8ph9CqSvQuj%2FIobcxZxdQ%2BTjemJS%2BnzVm0QDq5Sqv%2FXCfNmAw%2B%2ByRwQY6pgHiK2sZtJkqFxkwZ7m1FxBAcODXTdsPfqZk36hhaB0v2ZfD%2FqwCdv7dTXRY8ccVk7WugZ%2BmAl0ye1D5QMNX%2Fo8NBR5gqkW2%2BC65qtkTdYR%2BSAScBRsK7Spx69OZVfvGBUOeeceNqMKhHLbopakTploCwoxkxDbu9sbn1kH2Owwpp%2FEzpJludHzgJDJWxjrvM2wViGP%2BReJ0eJn0xLAD%2BI%2BGlLzWFR3z&X-Amz-Signature=e33f7de8f547135be2568b3f10afb26bb7e1695496c347ae6f076074354ad23b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAS6RZPU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDF3eCZfbMXClI2oBxp0twOMER1E%2B5N3Za4l4jrsXwj%2BAiAwEaNy5BvY1iGciYb3%2F3BhOpANcTfGZtdDLhKr0uEoPSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMGx4tsv7JhvGNzXAyKtwDxQFkZMMrgnqdHrEhliZw2t%2BX4oMgbl1TdoAwI3%2FYJYvUjFJ87bRdUN1XGiCJcsznAy%2BFELAl9CQB0jbqbHM1LEKS6KVa5kL83yF3%2BriPXCwIrkUYIXUyfZjM3FFrUfnOI6LhReOApoAT483ElPXxduYXjfaKYYmtqoWv2CpQ3uC7QFlu3yg3Tky3LVsgAnpFmcvcea%2BvhKbx6H4%2F37LnFc2rpLxGjvdnn7rjdtVtmirWHK%2FtKtjAdyqB2pg9BeyhqOK9vpkxR0RGnjU%2BChSq5z85Shyn8qomNT3jzXt%2B3l3skrLpz%2Bs9gdSEiG%2BmQK8IGZ9hCeCiNk0unbzLrBNO4PenVMMVEk9Wr6FFe3f%2FqQDmeRrdycYL3ICfzOdcoL9UufuvqSAUb534snN04EQjXizZdTdH4I3ew%2B%2FzeI5Zucj3pDfiAyjTjtuQ0JVMZMrl8eP8qv6FTO2Y5ABa6q6KsIZ4RnZ5lefSKE9nM366vGUTeGoqCROwLnnCbMyLl3vDtyxBss0NWBBHMRPUcfnZg467TIzhCjhkLn%2FfckgyCAucIs4bbFkIzNlZsGdVvoxX7DkK8PGLhVX8ph9CqSvQuj%2FIobcxZxdQ%2BTjemJS%2BnzVm0QDq5Sqv%2FXCfNmAw%2B%2ByRwQY6pgHiK2sZtJkqFxkwZ7m1FxBAcODXTdsPfqZk36hhaB0v2ZfD%2FqwCdv7dTXRY8ccVk7WugZ%2BmAl0ye1D5QMNX%2Fo8NBR5gqkW2%2BC65qtkTdYR%2BSAScBRsK7Spx69OZVfvGBUOeeceNqMKhHLbopakTploCwoxkxDbu9sbn1kH2Owwpp%2FEzpJludHzgJDJWxjrvM2wViGP%2BReJ0eJn0xLAD%2BI%2BGlLzWFR3z&X-Amz-Signature=95d66b92dd5bb45de7044345960ff9a034b884e944fa50383af12e34e0ce28d2&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEEWSEO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDDOn6YOCMdbqlBeJCCO34rLS9jMOBEmU3JIT6ztVPDcAiBLe0MIVBhU%2B6aCKNcfdTEcTtznpyeH0o8iPw6NUcw7Oir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMFolZEYe2WPTxByb2KtwDWgZBUu7NCZPL2sAcw9gIRt9sT%2Fwz7mfRv40TzTc%2BqJFD%2B7BnTMMRp02BljfmS4lDm79fZXQ0dffi1srebpoATKzalRfpUstsF0R8LBOSFrUnydy%2BV%2BNUfnNujyzh%2B%2BL1xErEgUUVH94XaYouWKvU3bhHnTDpt4EAkHeBPR8snfSKZ31f%2FhBYjznXo2lFME0BCVLXar2pyoDfK3u02YZakAk5UE0IVL3xTIvG6o6osffDv9TBnsxhiKhQ%2B1Jl6PN42XtDssbahx8Nf0ZthcnzlxVKq0rVItkU4QBjr%2Fqx8zIpRsyb2gXziY5WypGWS%2BFHIeiaRJPbihb1w7S3KB5dnJTj4nuA3i6yvxonJts6Cm%2Bw7ztw3glpK4xg26GTUKI6%2BAdNXc3OFftEmxJn29bsEOLH5E9srJ7fGty%2FSxjft59rS9hlsyw8TqKyosn5pYnBxXmymDYxMJFMwn4euWgmY%2FuNeotuznpHzoE80bFXrPQX7CagPcCeu3ojIFsJ2dzPbG7I8sEiTATcxDVF%2BnuvyDNBg3reoOOitssOkCtWRPiA%2BrVaXao6sDUrIxgR%2FxFxVJ%2BPj18QhCSXFALiVRQPyGq77igZ3EqT80RYLxqhaCf10YALRuEXHGhKs3QwhO2RwQY6pgEMGEZmEHYFx2lIFBIxFu4ePYppATNTpM37ZRsa0wHCVNsxH46PRq0nOzcFfb2x4E18Z%2F93BGFc3I%2FJaffF2a0wkAO5RZYkwVeteu4dtQE3fgPW9uV%2BPfMaLt4OKNZTL4CthOJwkVk%2F5PWTb6NAuGcZI1PR7t8sGmBvd1eRYrgFkHm3wT%2BvRXQJdLcySK93vGaCdtter2r83DT0QpG8yy86f04jU2g5&X-Amz-Signature=bd0860c3c7230f4264487359c22ece78e5772316235f0b5c93ca099068b421ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHFKZ3M%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEHfI%2BrwzhdGsygycKvNKRz4EoRY1bt6PJSG93xm3eD4AiEAjSBXiG%2BqbcFwUzi2TaQJA15R8NUBexQJRPaucw4r%2FdUq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEzTQY6FESPy4szqRyrcA0BAU4phNUfFikGgRYSwnbCl0cqFwCEjzCbwia7Xox4Df64JxIsInX4WVCfhU6lgvhU5hmi4E%2FHlaNg7lXEPqFgytG0VSrm68wV4VSEViVg3dU%2FFx6CSaZ%2B%2F6UJ%2BzE0QRI6LES6roNGNIoD45AMcW2rnS6rqTJAMU%2BMgqRJDM0mU5%2BMwQn5pedHfZf1KjXFmFhUfuYkeod2p4Ud1%2B1f401qE08WKY32l0JNXKAHGxPTY%2B8Aa3e3XJHRCyQHcDvj7zs%2F5rnold%2FZh93gqV3VK9uGw8kd%2BhpHCjPYWg6IKyV4HV2%2B3fyHR2lZXYr85dSIUHzJG0pcR099Ze0lJ2rz8KFSuyFCZAQhga8%2FwvbOYoF3ZIxycHtRBkFCPCiX2SoluCkKtsP%2FjxzDrbeHHVNtNmzbcpYR9mH05dSGJUsA%2BEDjrqxksW5BrA2XuNwbYKx45kUIsSJuOEvKsCYX4uOmHPw0z1LQyiEM3om5LWpthSbhpalXRX5QATNfQhr%2FaG2LaqJ%2B8os2rDq3pshZGKO%2FHnWAKsI6qeusNSsjTNMrY%2Ba2yw%2FZdLXEMeZVI%2FXqnuxP5Vtyoaei%2BeLaYWhH8uy6McTTY8COvSFeqAmeuwRhPA37KZPmpHGNcJEoS%2BezzMPHskcEGOqUBIWBwR%2BCUIHIZ0ujFS%2B%2F0qBqYAoJUzadK7IkPGkSlWTV5e4rLzqciQ%2B4lHWw9TOqiERxEHH5ziGUw1wCQb2M7pnPGWTIqhN654EVGVr3zCEE4jstH3qUsobXJULJkG85Hc47qiywtUzk8KbjbiOpy8jYGT79vf8ggPxObT%2FSBFbyJ%2FJPiAzRmwYkJhWepu4xdI5ZOwGuACyMr%2FVAxM3eB5Y6zkKaw&X-Amz-Signature=508665ff8faab6b284350dd356f365a97a8d2d0dd019ffb02ffc32daeda37991&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAS6RZPU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDF3eCZfbMXClI2oBxp0twOMER1E%2B5N3Za4l4jrsXwj%2BAiAwEaNy5BvY1iGciYb3%2F3BhOpANcTfGZtdDLhKr0uEoPSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMGx4tsv7JhvGNzXAyKtwDxQFkZMMrgnqdHrEhliZw2t%2BX4oMgbl1TdoAwI3%2FYJYvUjFJ87bRdUN1XGiCJcsznAy%2BFELAl9CQB0jbqbHM1LEKS6KVa5kL83yF3%2BriPXCwIrkUYIXUyfZjM3FFrUfnOI6LhReOApoAT483ElPXxduYXjfaKYYmtqoWv2CpQ3uC7QFlu3yg3Tky3LVsgAnpFmcvcea%2BvhKbx6H4%2F37LnFc2rpLxGjvdnn7rjdtVtmirWHK%2FtKtjAdyqB2pg9BeyhqOK9vpkxR0RGnjU%2BChSq5z85Shyn8qomNT3jzXt%2B3l3skrLpz%2Bs9gdSEiG%2BmQK8IGZ9hCeCiNk0unbzLrBNO4PenVMMVEk9Wr6FFe3f%2FqQDmeRrdycYL3ICfzOdcoL9UufuvqSAUb534snN04EQjXizZdTdH4I3ew%2B%2FzeI5Zucj3pDfiAyjTjtuQ0JVMZMrl8eP8qv6FTO2Y5ABa6q6KsIZ4RnZ5lefSKE9nM366vGUTeGoqCROwLnnCbMyLl3vDtyxBss0NWBBHMRPUcfnZg467TIzhCjhkLn%2FfckgyCAucIs4bbFkIzNlZsGdVvoxX7DkK8PGLhVX8ph9CqSvQuj%2FIobcxZxdQ%2BTjemJS%2BnzVm0QDq5Sqv%2FXCfNmAw%2B%2ByRwQY6pgHiK2sZtJkqFxkwZ7m1FxBAcODXTdsPfqZk36hhaB0v2ZfD%2FqwCdv7dTXRY8ccVk7WugZ%2BmAl0ye1D5QMNX%2Fo8NBR5gqkW2%2BC65qtkTdYR%2BSAScBRsK7Spx69OZVfvGBUOeeceNqMKhHLbopakTploCwoxkxDbu9sbn1kH2Owwpp%2FEzpJludHzgJDJWxjrvM2wViGP%2BReJ0eJn0xLAD%2BI%2BGlLzWFR3z&X-Amz-Signature=217e754eca907565799ebfa393aed48bca95cf7386af610b394d9458cfb1c7a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
