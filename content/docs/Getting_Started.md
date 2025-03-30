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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6ESHJO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC5KfkSsakKoWL4WL51XDhyGX3lA%2F0KsCpHBtNxQv6fGwIhAJ20bm9Kbzj8K97WckHtKC2EADQfYsql1HP1ByWCQOw%2BKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpzCjPNlftf0MXnKMq3APYOrai03b5XrPmUY4wEDXWk9SU8OG57Ze04xX0Mk%2FS9p3b3ckhfN7KSo7qV3Qx2n1EGSZCTq6jVIApFoPMH%2FXHFbJVfOxhl2KEaGJIdpA%2Fie84nLI%2BBnG8KouEOZBLSHFOsIv1FgCIMO8DkVMza3X0D%2F%2B4lNAnCtKgwTQE6Dt%2BmeQveHlQkDlRmcphThc8KzuuEsJxQj7PL8x0SnG5WVIpH75UWcjzFMNPCFgqw0B25j0iFvFJ6sPNo6EqNo4h87h%2BwiT65FepyW52PiowbPK%2BTBWT1TIPTkmVFCnjoD7GFToaD5XstIfNaPbrjea7hp0HGxRu9oY8DaLJxscs2LwbOWhs%2B0jrvrgFpngFUPDPSZrkBUbamTqwF5Ih%2BjDeHQ32gigY3z1BBJW7CF5HMsSzlHaUEpGC1vdudRLmjC99a3DJaukNNvu5sjYC8iqAmHIT9cdeWzzQV5WiozzxkTRfApc%2FnFClPbOpHKFwRvfVlG6ZxakuyT0qQwTc%2FC4HSCytLV3vCohErK0MNTELUj2XnYPAg4U0EIgfWSxffjPG8uifTllTv8cCuXcqrrQW8xRsNQXCl%2BBXQFk2wuXum49ilyce6AEm5TP9tyhcMthU8XhWxPWlzeYBkd9MVDCQ7qW%2FBjqkAQshGdeEBlyE07Vg0CA07%2F4Ifr%2F9t4vCGLw1Z0B9kO9kWYljpGb9WF4AMScfnvim34bTh9tHWJw1RouTdVv9%2BRNGLE2GGcuAgTkGZWWZh2ALIg5c8zQnvpQL4%2Fe6qPRUK7GLMlnDnEWb7zvmVsEUv4oBK37TtabdwN5vwPMLtSKmtp93Cj3pJlYl51DrggOVvoPpQNX0T0suaHjlX8H5wcvv3b9D&X-Amz-Signature=867ca736cbb691aa6ee234ca4c1b7ba88fd1c20f7a86557fe74269f171be732c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6ESHJO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC5KfkSsakKoWL4WL51XDhyGX3lA%2F0KsCpHBtNxQv6fGwIhAJ20bm9Kbzj8K97WckHtKC2EADQfYsql1HP1ByWCQOw%2BKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpzCjPNlftf0MXnKMq3APYOrai03b5XrPmUY4wEDXWk9SU8OG57Ze04xX0Mk%2FS9p3b3ckhfN7KSo7qV3Qx2n1EGSZCTq6jVIApFoPMH%2FXHFbJVfOxhl2KEaGJIdpA%2Fie84nLI%2BBnG8KouEOZBLSHFOsIv1FgCIMO8DkVMza3X0D%2F%2B4lNAnCtKgwTQE6Dt%2BmeQveHlQkDlRmcphThc8KzuuEsJxQj7PL8x0SnG5WVIpH75UWcjzFMNPCFgqw0B25j0iFvFJ6sPNo6EqNo4h87h%2BwiT65FepyW52PiowbPK%2BTBWT1TIPTkmVFCnjoD7GFToaD5XstIfNaPbrjea7hp0HGxRu9oY8DaLJxscs2LwbOWhs%2B0jrvrgFpngFUPDPSZrkBUbamTqwF5Ih%2BjDeHQ32gigY3z1BBJW7CF5HMsSzlHaUEpGC1vdudRLmjC99a3DJaukNNvu5sjYC8iqAmHIT9cdeWzzQV5WiozzxkTRfApc%2FnFClPbOpHKFwRvfVlG6ZxakuyT0qQwTc%2FC4HSCytLV3vCohErK0MNTELUj2XnYPAg4U0EIgfWSxffjPG8uifTllTv8cCuXcqrrQW8xRsNQXCl%2BBXQFk2wuXum49ilyce6AEm5TP9tyhcMthU8XhWxPWlzeYBkd9MVDCQ7qW%2FBjqkAQshGdeEBlyE07Vg0CA07%2F4Ifr%2F9t4vCGLw1Z0B9kO9kWYljpGb9WF4AMScfnvim34bTh9tHWJw1RouTdVv9%2BRNGLE2GGcuAgTkGZWWZh2ALIg5c8zQnvpQL4%2Fe6qPRUK7GLMlnDnEWb7zvmVsEUv4oBK37TtabdwN5vwPMLtSKmtp93Cj3pJlYl51DrggOVvoPpQNX0T0suaHjlX8H5wcvv3b9D&X-Amz-Signature=1e07bf5e7bc1694e7eb2b4d55d41ed6df7ba219bebef2cb0e2c543a4db65cd65&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUBZCZZ5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCh7zbdwgY1%2FRPptC141Bz5KEY1ix08wHCGEQDcETCRvgIhAMbzwvS1dLobNhqz9ud27BPHBC9MK5c0R%2BJB33LSUzJGKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhSZfn%2BrpLCfFjdNcq3APUu%2FiQRMizHwoMr%2BNSCFhY5Jncmhc838dYP5l%2FqJraKv6k4zeWodVHke33880xXSZ%2FymW7betLfhY0J5bRHZN0fm%2FFu0yejgTvju%2Fuw21xqi%2Fx2qCvPNOqmnZsddnuIksIZcrZ%2BXnVfqlx598KcFEIUj0UZTJ7gY3Ioktr7njB6UU%2Fjso92LxTXTil8HmeYArir%2B0x6NnwRxB2RaisBxqUbUjbySuSFRXOStVeahxD%2F6q8By0jYOhy%2BH8r1dgH%2BdKNdMskFMjTnSzHMg7UuFviqEcw0BcTDC1dBZx5Tu9U4qsc7GNfaBwsbJuFSGZI%2FI%2FVMPI2kuX8UNcI8PIxRyKhiJvL2FQCOvXMnAscaNJ4yQQIf1N7g%2FREUGoSYpV%2FIWV0FXpzAaXLWNrEg80b31GBCvn59hx4NBA4v1X6l7nAxyX2X02eCMLI7hzM%2Bnn63%2FdmkO8mL8%2FrE1ANex1t%2BhV4UMtgEMCTxya9IIuPOk45RuAZsLBQ03wMags%2FwTztYgDgGluFA%2BDCn5CsN5XzqppRLh7HLrV9E1b71Eg%2BL3noltOHzyqC9LYxYcDXld5x%2FpEpTWkDVOO0j2fLV29fjbYtUsAeHGslz7DdShdd6vm4EmwSBlDJ1F1hTAcBsDDO7aW%2FBjqkAcdwzRzik1vegXLghplWjOUHiBtgN%2Byeu0uNtW3VXGPEnH49dDkI1YZ9EIi%2FPi5RlGhAva7YW3ub7qJvuZXJNWOXQoJ1rxiFJPLDGFNrPIW0Im1vxJ4%2FGiwcJ8ZsRI6EgFhVmvtVyfVLBVAHYnd3QHvi%2BgpUcpsw5q8T59ZroK7tiDAaL%2FG8BOzxoDkXObmRohy5D1bsaC9QmOIqfPns2ZZMcqmi&X-Amz-Signature=575e9eb0f555edc7e35d927a4e042fda7ddfcb77e70e3c1cfc7090e60a583a55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7RLRE4H%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDIMueUlBWU68QR3pX%2BtW2waelsGavs35tDpyBmNV%2FZDwIhANUirfvluxbozUHhTIqVzz19z0XaalR%2BjnIA1ZfGZRDlKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDIfCZK6ZJk%2FrQkiMq3AOIJQ3sJfI%2BaxQsMVOpHLhWFOt49jixprdAV29naRG9hGVi3Y0A4dEcifuUrEtu4zmzaFQ8%2FE%2BmKqJI5eRrIZeN%2FP8JYyNgLcKkN2u2BLK%2FqMdZKlDuc%2BNbGOt9fg4zG96sEtfZjXoHJiyK7wTtmRZWcQEyTHONQZl3NPpGG10dVb4SStGD7Km%2BGnVWacMfnajYsVKmyi51ka%2FyMVrmdCmweqJmKot4RTCoWc4STWu%2BwZT%2FVTwR7NOprG0ywScTuVjdJ9Izu5igkFeE5ft9SKeAkxr94kqjWr4VgvRWx4vhz7i28WbDukHPPShSTZQkAP%2BDyfSFbzuxfzXyRT%2F8Vvu8e6xtce0%2Bu%2BQ3arpfpqQCtxX%2F2iW%2FCN7%2FvBcAcongp5zwEiQ1wUAgSjP7tR%2Fk2Yji3JLFf%2BYgMmrrIiG7ri6kyPrLBb3dLXikeygl2IhBbNnRU0I1Hsm4FyFssWJYo2JZgGHBsh%2BBdKg8eZLG0CjrBg0%2FlwuX2u7QYg1pYgzVghkbCjvE7ZOWNEIKm7P%2BFIQCE%2BhQfGpY48x3vPCd4ZjOsHPzQOOAr5qtI5qQ%2Bnqknpw53fprCuKMG2UWgkmvXBhZ%2FtFSStOXYnKKNOFoLOZ24erJbsU1yDBOCeKWaTDO7aW%2FBjqkAZ85532orEh6BmVniTO9ziSPBrgg6dUGujpgD0x%2FBwkU9W%2FU9POiKgixjfHfoUOXkrqnv1o5NCFh8xJ%2ByDoJWTXnbIRXevFq%2B8TM6yXNLvCK%2BMp8Ux6LecxvtMPs70TCcVQWhtwY8EejfRM8BoG0a7fIp%2FzERFzO46gJMzkFsc3FQElV%2B1ictGQl3F8By2DJd%2FSk6sqVhmIWnsoXe%2Bu%2F60tceyRl&X-Amz-Signature=017b6a004714e608c1d3a417235b864867283115084b583f33cfe1b00da77d5f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6ESHJO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC5KfkSsakKoWL4WL51XDhyGX3lA%2F0KsCpHBtNxQv6fGwIhAJ20bm9Kbzj8K97WckHtKC2EADQfYsql1HP1ByWCQOw%2BKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpzCjPNlftf0MXnKMq3APYOrai03b5XrPmUY4wEDXWk9SU8OG57Ze04xX0Mk%2FS9p3b3ckhfN7KSo7qV3Qx2n1EGSZCTq6jVIApFoPMH%2FXHFbJVfOxhl2KEaGJIdpA%2Fie84nLI%2BBnG8KouEOZBLSHFOsIv1FgCIMO8DkVMza3X0D%2F%2B4lNAnCtKgwTQE6Dt%2BmeQveHlQkDlRmcphThc8KzuuEsJxQj7PL8x0SnG5WVIpH75UWcjzFMNPCFgqw0B25j0iFvFJ6sPNo6EqNo4h87h%2BwiT65FepyW52PiowbPK%2BTBWT1TIPTkmVFCnjoD7GFToaD5XstIfNaPbrjea7hp0HGxRu9oY8DaLJxscs2LwbOWhs%2B0jrvrgFpngFUPDPSZrkBUbamTqwF5Ih%2BjDeHQ32gigY3z1BBJW7CF5HMsSzlHaUEpGC1vdudRLmjC99a3DJaukNNvu5sjYC8iqAmHIT9cdeWzzQV5WiozzxkTRfApc%2FnFClPbOpHKFwRvfVlG6ZxakuyT0qQwTc%2FC4HSCytLV3vCohErK0MNTELUj2XnYPAg4U0EIgfWSxffjPG8uifTllTv8cCuXcqrrQW8xRsNQXCl%2BBXQFk2wuXum49ilyce6AEm5TP9tyhcMthU8XhWxPWlzeYBkd9MVDCQ7qW%2FBjqkAQshGdeEBlyE07Vg0CA07%2F4Ifr%2F9t4vCGLw1Z0B9kO9kWYljpGb9WF4AMScfnvim34bTh9tHWJw1RouTdVv9%2BRNGLE2GGcuAgTkGZWWZh2ALIg5c8zQnvpQL4%2Fe6qPRUK7GLMlnDnEWb7zvmVsEUv4oBK37TtabdwN5vwPMLtSKmtp93Cj3pJlYl51DrggOVvoPpQNX0T0suaHjlX8H5wcvv3b9D&X-Amz-Signature=8720f6598b3bcaad267bfb1873b9a02d0838937cc14d78602b3b03e98f292223&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
