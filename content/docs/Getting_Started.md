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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKL6GCKT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICc3lHEtyE6QWkmLIokCI8ydtz8gJ83lyuNs8pEh5dnwAiBQlasaB%2BV%2FqywzzVp8pBSDLfDCIJofeaXrXt55BAQqSSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmhfT%2BrYTdlErAZMZKtwD0eTgC2xGOxhZ3E0ion4CGCnNsST%2BvqTGtusyl%2FW8NKoeiwRhkfrILxCkfsKi6Drj6xCpW1dP97MLq7pXR0UegsDN%2FDvTK0d%2FbAJMYm10v5UK%2FmJgK%2FGfSnA7lPC0b77BPDCRjBlRGMMIo0C%2FEnRt6nn%2FKG3FSFR7A8IMia1wMmQTEsh%2F51AMhvVnxf%2FMn1S22kAah2LfIjXj4XeESD%2BI28mXTwA%2B3s7cRnuTzfKN%2FtXQswecv%2F59uQXFZzNHvL4ZCAYJp56yxCE1xCed3KbrfKf1m5qBMvi4fp0jhv3hp8ITXAQXFvhv6pjozhtqaJtHCM4DVXivM8209j%2BT%2FQI4IraTIX4igPosUdR%2FlzRCjySjmIdvH9YSa8qbnBM4ThFycSI99nzyg%2B3muBMYqoxt0d96kXDSCZnbuXl8rC18EwoutmH15MbHvnW9ro5IF%2BV2FfOuyLNinPCHL4YD1OMrC43pB67KQj9xZWBBMPWujdInJVYXWQkMKGZB%2FaCU78PXM3GtRPMxztrp82nsNHxgwW8vxfomajafvyE2FA06o9BRbdI8xFEzg15pjWmGAUrRO29tCo2ZYCc9IJuP4%2B9GNhTWFcqqbdPHvrjKReiy6zxGOi0mEAHaYqMFLPUw4OuUwAY6pgHw9se6tePyYBaCPmB4BRbVZ1DbWw28cFXBAW2irRFeikypGBcvgoY98ZCsgBFSMuBNND1VtPvkN%2B8dBlWQz%2BZKslMz%2FM%2F5BHxvow9icAYhg1eAuYU9xKb3IAkV4AHvAmLHVhQT06VBa4esxVQkA4AetFozp0FqZp3t69qEXT12IMDOHRwBvnKFh3UIuF1e8ZcfUMVl3rBDibKtKpFgJpH9wH4kJVDh&X-Amz-Signature=1f9ee7d1c04652ab342f3eeb58ee4811832503269675f306db2da711cb51de73&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKL6GCKT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICc3lHEtyE6QWkmLIokCI8ydtz8gJ83lyuNs8pEh5dnwAiBQlasaB%2BV%2FqywzzVp8pBSDLfDCIJofeaXrXt55BAQqSSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmhfT%2BrYTdlErAZMZKtwD0eTgC2xGOxhZ3E0ion4CGCnNsST%2BvqTGtusyl%2FW8NKoeiwRhkfrILxCkfsKi6Drj6xCpW1dP97MLq7pXR0UegsDN%2FDvTK0d%2FbAJMYm10v5UK%2FmJgK%2FGfSnA7lPC0b77BPDCRjBlRGMMIo0C%2FEnRt6nn%2FKG3FSFR7A8IMia1wMmQTEsh%2F51AMhvVnxf%2FMn1S22kAah2LfIjXj4XeESD%2BI28mXTwA%2B3s7cRnuTzfKN%2FtXQswecv%2F59uQXFZzNHvL4ZCAYJp56yxCE1xCed3KbrfKf1m5qBMvi4fp0jhv3hp8ITXAQXFvhv6pjozhtqaJtHCM4DVXivM8209j%2BT%2FQI4IraTIX4igPosUdR%2FlzRCjySjmIdvH9YSa8qbnBM4ThFycSI99nzyg%2B3muBMYqoxt0d96kXDSCZnbuXl8rC18EwoutmH15MbHvnW9ro5IF%2BV2FfOuyLNinPCHL4YD1OMrC43pB67KQj9xZWBBMPWujdInJVYXWQkMKGZB%2FaCU78PXM3GtRPMxztrp82nsNHxgwW8vxfomajafvyE2FA06o9BRbdI8xFEzg15pjWmGAUrRO29tCo2ZYCc9IJuP4%2B9GNhTWFcqqbdPHvrjKReiy6zxGOi0mEAHaYqMFLPUw4OuUwAY6pgHw9se6tePyYBaCPmB4BRbVZ1DbWw28cFXBAW2irRFeikypGBcvgoY98ZCsgBFSMuBNND1VtPvkN%2B8dBlWQz%2BZKslMz%2FM%2F5BHxvow9icAYhg1eAuYU9xKb3IAkV4AHvAmLHVhQT06VBa4esxVQkA4AetFozp0FqZp3t69qEXT12IMDOHRwBvnKFh3UIuF1e8ZcfUMVl3rBDibKtKpFgJpH9wH4kJVDh&X-Amz-Signature=b36b97290ba7a7afc4015f8b121df5443f8bd6af9145b2ff7795b5f51292e5a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7SPIXP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD7N3iGHYPLDnIg5vnUk2xj4ZLwvwaPqGwk%2F0ZDjYsMLQIhAPznaDtkrfB5d2m%2BidjQoeqFkLU%2BoVpOly9FEE5QjH0TKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFQrSylnE0kD%2FWpDMq3AM30I0eIe2pExhtIjPcqnCCuU%2BCN3BYBD10AxsRinncsVlVX7MCl4inYXPmQmrPLwPRkAQgqe2gqY28%2FWbWPT9wFHkUVsL9rcA6%2FvrROt%2FVPevfw92eQVX24dcGcyf0xi2qs2zi6qZuvUiDKh4vjE%2FN493YDkiMTBUbwXh6FWCgOmYtmByQrAI5YCc%2FI2dVWnFHbp6b3up%2BrRsQlt58oYCVrfVJdobJXqqz%2BTP2Fz8OBx1LpGtXLj0YcaGnZJmbJJyGX5fGAeUZs8USYgJFiFQcE3DEHnq38hvJsCiDdsJLw%2FU70cvSSALT9v%2FKBgYiguA58rbYfBXTjKjBDDmZ88Q5A4xm8ouGqsfI0JQodXyj8IoRU4Ht9Ug3yQ8bUOasP00PWo%2FVto%2Bmg0BHNCB1CbhvcsTVkPFFDBEL2fe6RbgGScdM%2BjZT2ftOILwJSPUU6XmdI9zbbHsH0gTVd64oP41c%2F4Q287afNBgKwS2qOxGdAmCeU0GbGzXtM7hRn9OkRCh34g1BkDkP8nyuPeNWSG2sCmJZA4L7yRAJb6yzJeW7eInYw4Aaw5cuntqkBejxS%2FRa8CcqdWn5rx%2BF0loBw0gqRE6bNgBXyVXvT7qpHJJ8OSfU2wuDMEXMEuXiSjCenJXABjqkAcTiy6DLRdGfJ%2FinWnRBPk19lw5BqVhSnpcyqVI1Ij%2F56DstMd57j6PVfyVBvqUj1NKneKQhkoQI5tCL%2FFUnHn9YDOSPxUWSpKGuy5UbUHoZcrjiD1Wi2wnmCB5KOQgWD5QsTCaieAZIvr9Y8JuqFhK5CnrMp9QmxEfktNxs6el%2F5OHlBPDpC0UPXbgz3LBucWEVbRiDE7QfN7r4CoUOV1MkffNh&X-Amz-Signature=ee6ea271d4c5f090525004e83ce724daeef065db956afe16e43a7c62f9d7c545&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUX5TSBN%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCJgT%2BqZTkyf8Yb2xBG5blx9sD66mScKyy7ibZWDBVW1QIhALauHQWd7BD26vL5oV9F%2FsdQH1Lq3XyA4wrdmeAILI9RKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwx28CeBHkHDLjd4uoq3AN14AbobYBS0aTYfofo4E4OkWE%2FKPUwUqUdPr7o1FByxCUZ7J0VecrjH7RaEmuwsJ5KzL2g%2BdkWQdfglU94yumdhGbwfrUvQnfv01rZdCu%2FPafsnjFy2ZuW2oi6zoXX3MiIwsN0uYegYwURq%2BpBbgPdTdFcJXn85TqX%2BnnJIRNtugDQrrbvZAUrH5%2F0Jwr8uWPulBfICCkKrnEaDDpSufVMuUmNxMM3XnhFjwH%2Bg8dd3GnJicwnZVVSmwzOvsUsmDOoDLat4EWpwyR84eLK5T2fAFZ6ft5K13TDB%2BppiDJA%2FaVTj1IjlEBOIe5lu3uNaAr87ME8NdOkBFYJrf1UAceeIfK98keQMl7q%2BQpFBsmvWDods63obUCj7Jw6z6OnCFhhdQ352uZHdJLlC3tcVUTYpupnNBHSyZZHfL99m1i3U4clxnjS0DsHQ46mb2rKihw7yHS8JfQCMrRa%2FQCIiCmV6lD3azT6%2BgxBJ48BFTIoqAHLxNKdLEqE0M%2FB%2BIl32%2Byl5IEl8uuYR0LF%2BC4ZEBl2jPcQ96L0lgVsUImVRMVN6aRPCdVi%2F4bPLhbT%2B9rhN0w4Wwg6BezZcPJaedOW8FgK8brDn%2B8GFZWhnxaTEXDiOe7QwRa7AQIYY4hD8TDM5ZTABjqkAdnD%2BDIgwBfiPFHmRJI6D4d6jxYktjaXPiHifE8IgVRLsTuO854kWX9d805%2FAQ90w7so4DN0o%2BRPdHtPeINQ%2FmaxbtfZUcuM6QfxzigAVC73TLcaShtww0TkJxN8xTPhnDAHWxxdx9QGkL%2BJSTQVJRfMNF2yaN3GHxMu8c1ZlKMmr8H2iKZpXtDSnmngAVCi7FdljRMVc8jd4n3l7fOvNWNHzf7k&X-Amz-Signature=accd71c472beb9893aeaacdadbff765aab1b4b725717ab703fba4f9653114d34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKL6GCKT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICc3lHEtyE6QWkmLIokCI8ydtz8gJ83lyuNs8pEh5dnwAiBQlasaB%2BV%2FqywzzVp8pBSDLfDCIJofeaXrXt55BAQqSSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmhfT%2BrYTdlErAZMZKtwD0eTgC2xGOxhZ3E0ion4CGCnNsST%2BvqTGtusyl%2FW8NKoeiwRhkfrILxCkfsKi6Drj6xCpW1dP97MLq7pXR0UegsDN%2FDvTK0d%2FbAJMYm10v5UK%2FmJgK%2FGfSnA7lPC0b77BPDCRjBlRGMMIo0C%2FEnRt6nn%2FKG3FSFR7A8IMia1wMmQTEsh%2F51AMhvVnxf%2FMn1S22kAah2LfIjXj4XeESD%2BI28mXTwA%2B3s7cRnuTzfKN%2FtXQswecv%2F59uQXFZzNHvL4ZCAYJp56yxCE1xCed3KbrfKf1m5qBMvi4fp0jhv3hp8ITXAQXFvhv6pjozhtqaJtHCM4DVXivM8209j%2BT%2FQI4IraTIX4igPosUdR%2FlzRCjySjmIdvH9YSa8qbnBM4ThFycSI99nzyg%2B3muBMYqoxt0d96kXDSCZnbuXl8rC18EwoutmH15MbHvnW9ro5IF%2BV2FfOuyLNinPCHL4YD1OMrC43pB67KQj9xZWBBMPWujdInJVYXWQkMKGZB%2FaCU78PXM3GtRPMxztrp82nsNHxgwW8vxfomajafvyE2FA06o9BRbdI8xFEzg15pjWmGAUrRO29tCo2ZYCc9IJuP4%2B9GNhTWFcqqbdPHvrjKReiy6zxGOi0mEAHaYqMFLPUw4OuUwAY6pgHw9se6tePyYBaCPmB4BRbVZ1DbWw28cFXBAW2irRFeikypGBcvgoY98ZCsgBFSMuBNND1VtPvkN%2B8dBlWQz%2BZKslMz%2FM%2F5BHxvow9icAYhg1eAuYU9xKb3IAkV4AHvAmLHVhQT06VBa4esxVQkA4AetFozp0FqZp3t69qEXT12IMDOHRwBvnKFh3UIuF1e8ZcfUMVl3rBDibKtKpFgJpH9wH4kJVDh&X-Amz-Signature=f7ec85bba39a4780f4e5052eafa8e6cce640724c8c714f44b439bc16dc8ec54f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
