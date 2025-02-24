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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667II5DPB4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFXuBjt1KU9Jx8dxS4vd7zOoewN%2Bwz9Z%2FqmM3AWm3sRAiEA9Ax8%2FwoKcdF5wxoc8h%2BWjv3d0rk5PT1y9MDKix24x18q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDONu%2FSepOXeaOKH5jircA1WIGyMVaMKfw2tPZThmtQMKIagMO6gnWDyC9xWme63m7Ghk8Ny9Yy0IVvqhkVISW613ZCNL2uhELq%2FrynPuFcmKNMY5EEGUOo%2BS2zGwsR1zBS8IwEGzY6VsMDQ1F6w3gSYAhBVum3TLiFHYO1tmYvs5s2T%2FLo9Htae1J5TBkLEhn6ABQn8lsrwed4SxEIcsmnRnA2KbmZ0ne4hl%2FtxzVENAbgPh27hOoVFLVxxFGCSVNpPJ7zaM%2BbokAwA3b4DyxQQfXR9gvnHVpx3%2BVZXR7OEOae6Dz2Zff26mLP8jr701QMxEka0n8M6JPYzIP1wAPgHUIGKrTgHK5vv2dinFoO4MBloAU2m9ylhk9Bc%2FF9r%2BmwAv6N8oIBfNx7j924P5%2FCFWuEbeBhr4V3oKsBbLxZ%2FqiUAWPny98g7lGlMfBIEYc%2BPNhjwkgQWY3VExRKjCMLf9XfA2y7I5mytM8S4zRZEOeY%2FyTnfnRLJCLDWmLk1AIu70dniu4WYHlS7FfsNQ5YXc4jtgwDvUcPliMkGVbow%2B3dN%2BDzzrQPg64Gt%2FZuMUpS2wNJPhG9eEIF93VmAu9QcQdO4dG%2FBtuXyFQqWYhzD3mB2N%2Bg8hPul8Ae3AsUhDxnDEzXdagP7iuL8VMKjw7r0GOqUBOtz3y%2FtEO9PeT%2BceZf7MdOU91%2FltQbO87IDG90IzcvOSfWFxRhjQg2PMdGSz5V0WLUEvMqfGV7T2iFQSTSgfzTxIITKuGlJKMTIu%2BJZfNU1gK6BFK4xci20VP%2Bnio%2FPU3v5xoyA1mHwDykBD0NX0KMknLHwaM%2FxWFpemPRNqNsPkmiaVyO%2FInvoeAsuy8MXyLSfls2e8uKo2wUR1Zjk2uEPYBPu5&X-Amz-Signature=039ef9bba74fbe1fe2075e729f18594c9bff2e1350106e02e35f012492388f69&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667II5DPB4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFXuBjt1KU9Jx8dxS4vd7zOoewN%2Bwz9Z%2FqmM3AWm3sRAiEA9Ax8%2FwoKcdF5wxoc8h%2BWjv3d0rk5PT1y9MDKix24x18q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDONu%2FSepOXeaOKH5jircA1WIGyMVaMKfw2tPZThmtQMKIagMO6gnWDyC9xWme63m7Ghk8Ny9Yy0IVvqhkVISW613ZCNL2uhELq%2FrynPuFcmKNMY5EEGUOo%2BS2zGwsR1zBS8IwEGzY6VsMDQ1F6w3gSYAhBVum3TLiFHYO1tmYvs5s2T%2FLo9Htae1J5TBkLEhn6ABQn8lsrwed4SxEIcsmnRnA2KbmZ0ne4hl%2FtxzVENAbgPh27hOoVFLVxxFGCSVNpPJ7zaM%2BbokAwA3b4DyxQQfXR9gvnHVpx3%2BVZXR7OEOae6Dz2Zff26mLP8jr701QMxEka0n8M6JPYzIP1wAPgHUIGKrTgHK5vv2dinFoO4MBloAU2m9ylhk9Bc%2FF9r%2BmwAv6N8oIBfNx7j924P5%2FCFWuEbeBhr4V3oKsBbLxZ%2FqiUAWPny98g7lGlMfBIEYc%2BPNhjwkgQWY3VExRKjCMLf9XfA2y7I5mytM8S4zRZEOeY%2FyTnfnRLJCLDWmLk1AIu70dniu4WYHlS7FfsNQ5YXc4jtgwDvUcPliMkGVbow%2B3dN%2BDzzrQPg64Gt%2FZuMUpS2wNJPhG9eEIF93VmAu9QcQdO4dG%2FBtuXyFQqWYhzD3mB2N%2Bg8hPul8Ae3AsUhDxnDEzXdagP7iuL8VMKjw7r0GOqUBOtz3y%2FtEO9PeT%2BceZf7MdOU91%2FltQbO87IDG90IzcvOSfWFxRhjQg2PMdGSz5V0WLUEvMqfGV7T2iFQSTSgfzTxIITKuGlJKMTIu%2BJZfNU1gK6BFK4xci20VP%2Bnio%2FPU3v5xoyA1mHwDykBD0NX0KMknLHwaM%2FxWFpemPRNqNsPkmiaVyO%2FInvoeAsuy8MXyLSfls2e8uKo2wUR1Zjk2uEPYBPu5&X-Amz-Signature=1165f8f1b3b221d96a0610cfde7c44fd1c18e9e1a5e3b949769d8f917242f2f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTG64UF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2B6zcT%2BuTh05ccjE9cNRhDbjRDRWmKbvu%2B83CucWMagIhAO%2Faxt8Fxnue6GFYq7jD80JfUWxRHY%2B4uIEEOKlnwnYQKv8DCCMQABoMNjM3NDIzMTgzODA1Igw0SLCf8GP41d8nyQIq3ANcMRJiZ5TMUS%2B7BTSinit8V87%2B3tK%2B19rTd4U2A2%2Fnv%2B2N69DAHK4sjTcgKohoAtD%2FKR0A5CNz5Qz2QI1cEhM3gbEd8hTgESU6SqVlGbK6OoOaGCPTkYF0z2ISIYQqjQD6B71i64wGgosscHYE8k5uEsK7HH3cyzwJ%2FD5o6MMgy11RkmEzVCrU1vP8trUQAsyJbWWrtrLhKCInX7GUVX%2BHlLU8lz48gIgsZuGL1q8t%2BDrETT4sSHLDGfKbWYFry9Ufh1yhMFNt7vHxV%2FuJGo5aPvkb60jDpaScXBVfk99An%2Bcy5BAiw7CFhRI4%2Bp7ypuXMa9%2BHM6SSR5wC%2FtOAMtctuao3u%2BG9GAT5SgFKNBCnHwgBEkDMFysQI0crjFjizBrkVOoFCyW2UeZO9UZrkefoJJEAZWYXSvdO%2Bdswqfd92mBNa%2FwuoFB1xhNlvK0%2FqNDWlPECdxB8d3ahHbmr7kkb1QIx8qOeMa1%2BljO1o1cCi1b6d9OlIj7RYjaeuGot0FFdO1WWmgp4hXEFp7VqjSg2xyuc8pa687mMPKHpYIxweyAZc8%2B6GzyYLgCFORB8Z8SLlYTmqXLDTqMBaptUAcSUxoIWn5Nqt3ukCC5smtdZ4e0BkvAW3IQVxafe7zCuqu%2B9BjqkAZhy2Bi9YI5zHyZx7fbXZpCbbf1FQLJJuEjcxWx3UDLy5ezUCv9YXNHWqfJaruFPTJ%2FVM0IU5M756tTLj%2FFAWyiBRaVzsZOaRRzibZAGVxq8%2Fcij5%2F7JSPUWCtuECcuWLb%2FogXjCNZWdwYbdNCfU6kgo6rdsFwkRbpfp9s0Bgu2Xuqk7tuVbe06KmJ3d2ny2tbOQc%2BTKESKn0jl6KaaJ5ZaL%2BcTe&X-Amz-Signature=ff77565cb26adcab658a946346b6886cd61e0eaccb85f00a083f824de4fbd746&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6NPOB4B%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzvztlMMNdgU7pgMK5%2B7puwIt578TWcMsGpFmlAoyB9wIgHqf9S83%2BrHjSw2ASbbgrFR1%2B1nUQUpNvHGCBukwqY3Yq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDB4noGbQ2YcwsKb5zyrcA4IgzX5hwIi3CzID14ggx0rLL2wahsPqOMvXtEbK9VoBeKKQsKUq%2FYZNqoBOJF%2FS%2B5EeL77moEbdbagX6LKQ8ZZiU4bmFosuT1K7KmKV4vA6Mcl4rpk7i4MDXQt7umoVtGzQqgffy0RvsiZ9DxcT8Wtxljf8XCyEJbnecSbti%2FDwuXYyiLaM1dqYW8t6Dh8obNSiaYkQw794%2FIPzpr9bPJ1ym8ldWXWQVELQYXtCSmea7aaelYdLhJgQI9n6aCwim1afLIQknWTAKnj7ELKGyQ0bXYNr6xAXqssa%2F28L66RmSdmDNuTedGfDlfNQK%2FfM2XOTNrRmyLOWZxL1425QFbrF%2FcQumTZ6EcXHXR%2B9w%2BMmFNQbfDjEbtLRvm2%2FPaVGDM1BSAcFOIC3Px0MB6DFb7HkaTkQuSie7sdz3rFVAhL%2FkubrB23k9cXyBSkBX5HUM5%2Ba73grdLmz4CZZAiGeit%2BU1Xit%2FdZogRC57zrYhGoyLuK6Ok4VfZTjagg6L5I4sx4z%2FNbtrthhgCeYVCqHgjPKueZ7EOT9LlfnwNvnKoltKbK%2BTpVgL456IQsKE5l%2BOjYGwmNi9x%2Fl%2FE3GS3RSynhbEUnGk4LVIb4E7Rczcq71vof4KIYvD0yhMDzkMIry7r0GOqUBkbi5vW9F4l4CLUNgd6%2FMzWJiCGPsGt%2BMePVCeRWZXY8AMGzum4K4ChZEgwPkIbtCg2Pb2sTS39DaavJCkNhhI8rAFdqLSR7moaLqM%2F5a2sJFebIbYnTGpf03At2%2BOCAO0lGVYPU3rbq3Kvbkp6BMtUW90ekjr6FCXrOe1Gy0SV7SOOadmtj3n1kY7YofhGwI2hpq0ujlwxizVXGKsfhXjYsEAs4u&X-Amz-Signature=37313bbeea16805571570a77ae13a2c8a6abffea2712ad2f649eb8e3d29e0fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667II5DPB4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFXuBjt1KU9Jx8dxS4vd7zOoewN%2Bwz9Z%2FqmM3AWm3sRAiEA9Ax8%2FwoKcdF5wxoc8h%2BWjv3d0rk5PT1y9MDKix24x18q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDONu%2FSepOXeaOKH5jircA1WIGyMVaMKfw2tPZThmtQMKIagMO6gnWDyC9xWme63m7Ghk8Ny9Yy0IVvqhkVISW613ZCNL2uhELq%2FrynPuFcmKNMY5EEGUOo%2BS2zGwsR1zBS8IwEGzY6VsMDQ1F6w3gSYAhBVum3TLiFHYO1tmYvs5s2T%2FLo9Htae1J5TBkLEhn6ABQn8lsrwed4SxEIcsmnRnA2KbmZ0ne4hl%2FtxzVENAbgPh27hOoVFLVxxFGCSVNpPJ7zaM%2BbokAwA3b4DyxQQfXR9gvnHVpx3%2BVZXR7OEOae6Dz2Zff26mLP8jr701QMxEka0n8M6JPYzIP1wAPgHUIGKrTgHK5vv2dinFoO4MBloAU2m9ylhk9Bc%2FF9r%2BmwAv6N8oIBfNx7j924P5%2FCFWuEbeBhr4V3oKsBbLxZ%2FqiUAWPny98g7lGlMfBIEYc%2BPNhjwkgQWY3VExRKjCMLf9XfA2y7I5mytM8S4zRZEOeY%2FyTnfnRLJCLDWmLk1AIu70dniu4WYHlS7FfsNQ5YXc4jtgwDvUcPliMkGVbow%2B3dN%2BDzzrQPg64Gt%2FZuMUpS2wNJPhG9eEIF93VmAu9QcQdO4dG%2FBtuXyFQqWYhzD3mB2N%2Bg8hPul8Ae3AsUhDxnDEzXdagP7iuL8VMKjw7r0GOqUBOtz3y%2FtEO9PeT%2BceZf7MdOU91%2FltQbO87IDG90IzcvOSfWFxRhjQg2PMdGSz5V0WLUEvMqfGV7T2iFQSTSgfzTxIITKuGlJKMTIu%2BJZfNU1gK6BFK4xci20VP%2Bnio%2FPU3v5xoyA1mHwDykBD0NX0KMknLHwaM%2FxWFpemPRNqNsPkmiaVyO%2FInvoeAsuy8MXyLSfls2e8uKo2wUR1Zjk2uEPYBPu5&X-Amz-Signature=c18467b560a0a713a3543e7c1e5f485991135ef7c6016ebe61be2634afe5cc13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
