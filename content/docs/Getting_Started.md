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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLZRTKTN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDrUswP2tFVcBY8dtAv%2FqgLJqJKIrj%2FHWQul3p0IOmGsQIgMKsCS4CYpbLIDhyeMf2y2QUlX6FQPZKfheK5sBNyzuEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLHH4ff6XVCma075ICrcAxt2%2B0p6caFRdoY8UPbeXdqFvF%2BqVoMowbAFe7rkXFk2Zl6sLZjZX8jOgDPKEk4dTbsYKkye1Xwd4VoyV3jvf3LijRBnL%2F%2FOKsd3s2DIfNAYirZXoRoNxW9dhGh1b1LzKB%2BNlQqmMmPXtYK%2BFacKUwqGXiJXUrMRFN3qEYR8TMB4FjrJ4qp8aIknUjftwOYgGD5yfgARcUhBPyQVgb%2Fr5x4UqjaHbGT%2Fu7VuzvmZ4si3LLic6rHzzm4nImaExe6KjLyjfo3GVqu3lP2iBeujgk1WqUL7ymaME948U7VROgTl%2FR2BjylYOLR40S2MD0jyxHjsDXZ1GV4vG9vipVfTkkzW1UGlzZaEOAfnoka9WknEMZkX9XpCKZ6g1JaRodTtlC1TO3yHDXqiVMU7i0vnh1ZWQo3p3fJVYv3PDUHbnp8nsmGOkgw5IaQ6EeeLB66f23rCYf%2FA1ynRTw7a0ytGg02txMGDG2af59mkvTdaSgSKeF9qmxdkAXHB1koKm4cd%2Bc2j3oQpOm%2FC7AWbfBwwSVIAtHfGxfKJYyAdUxj08hQMp1gc4tvGYjFBwmaY5MJxSx%2BqC9rUgqpyjl7NxjWNVNWSY%2FX6CLCKEuOBxP3nRDQsitHFV5yNTz6D4s95MNeek70GOqUBRbKEvoNwsHVCaLJFBsMo3eNFXtUYrN3mUVwIBEikyNyeXPezr9OAfeCP%2FJ0giSr7Ek3yf%2FHA1%2Fyz9PUppsEJZcJtjfD8e1ePUz7xhPUbjKpR3YVhNk8umZw93XnOvWDHzma2U8%2B4hCGC0u8dHTIw5Ly7zx0mAb7sN8HoMRKafsZrwzHtMAJaOHZfcHTxV43qvlIEOvq1AWlFcf%2BHY4a7wWaKzpDs&X-Amz-Signature=46fe7ccb31fed6a1296ccac6002d01990346622c94a252f8fe89ea3d3929e9de&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLZRTKTN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDrUswP2tFVcBY8dtAv%2FqgLJqJKIrj%2FHWQul3p0IOmGsQIgMKsCS4CYpbLIDhyeMf2y2QUlX6FQPZKfheK5sBNyzuEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLHH4ff6XVCma075ICrcAxt2%2B0p6caFRdoY8UPbeXdqFvF%2BqVoMowbAFe7rkXFk2Zl6sLZjZX8jOgDPKEk4dTbsYKkye1Xwd4VoyV3jvf3LijRBnL%2F%2FOKsd3s2DIfNAYirZXoRoNxW9dhGh1b1LzKB%2BNlQqmMmPXtYK%2BFacKUwqGXiJXUrMRFN3qEYR8TMB4FjrJ4qp8aIknUjftwOYgGD5yfgARcUhBPyQVgb%2Fr5x4UqjaHbGT%2Fu7VuzvmZ4si3LLic6rHzzm4nImaExe6KjLyjfo3GVqu3lP2iBeujgk1WqUL7ymaME948U7VROgTl%2FR2BjylYOLR40S2MD0jyxHjsDXZ1GV4vG9vipVfTkkzW1UGlzZaEOAfnoka9WknEMZkX9XpCKZ6g1JaRodTtlC1TO3yHDXqiVMU7i0vnh1ZWQo3p3fJVYv3PDUHbnp8nsmGOkgw5IaQ6EeeLB66f23rCYf%2FA1ynRTw7a0ytGg02txMGDG2af59mkvTdaSgSKeF9qmxdkAXHB1koKm4cd%2Bc2j3oQpOm%2FC7AWbfBwwSVIAtHfGxfKJYyAdUxj08hQMp1gc4tvGYjFBwmaY5MJxSx%2BqC9rUgqpyjl7NxjWNVNWSY%2FX6CLCKEuOBxP3nRDQsitHFV5yNTz6D4s95MNeek70GOqUBRbKEvoNwsHVCaLJFBsMo3eNFXtUYrN3mUVwIBEikyNyeXPezr9OAfeCP%2FJ0giSr7Ek3yf%2FHA1%2Fyz9PUppsEJZcJtjfD8e1ePUz7xhPUbjKpR3YVhNk8umZw93XnOvWDHzma2U8%2B4hCGC0u8dHTIw5Ly7zx0mAb7sN8HoMRKafsZrwzHtMAJaOHZfcHTxV43qvlIEOvq1AWlFcf%2BHY4a7wWaKzpDs&X-Amz-Signature=a4254953957aca46ab35fb150f50852172499dfe0c3d6def3a26202186a1434d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633EL3KN2%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIB5pybJ3Uq%2FXwe7G4gdKfO9BVPtCCiHRcZwVXRCpchSaAiA0DcyTpk1s%2BBE6XBWdh7cD%2FnM6fefGw56cvhrxT8KODSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMOPa%2BzNrUsAtp2jhWKtwDEfbti8yG60YtKvtA%2FHGg%2FCHjFS6wY8X3s%2F1eRTQ2Jrx%2FKaRP%2FkXeLk1IQU3U%2F4P5%2F7DahmdHVAxLJEdU2aac33QgnPL46%2F1OEvuJYRIt5XJPUyT3LUPGKUuFabuykwisZ19khKqQUKiJdNnfjz8MvdGFzaPumNwHm6E2w4b4%2FqhSWrnHYoixtLzcWGJYBIMeSPrRcF3yG6i8xoPubBlr%2Be7C7QPgWZ1w5lPBBSL%2FiOxhgxaIPzyIaNlGb0mPVF%2B4VdA9awFhUOw4QA1YrMzlsOIy%2FbsXQNro%2F8FNHzjtXh%2B4q9TVbjbOtV0p3ZwVrrBIpA5YRxlMO%2FPlGRmy96BzJOwPxOmRCkHH4fG99RCAfb3CarvPa60aqpBq2qKWI8TQFMVahf0kBf1aYRos8jytokyr2KT82vbwhk6BxQ%2FU6t%2BeqvCC6HkhVgDy2Bn9kY0H8OVfoyT6jnbrMw81PtXzkYe4GNuQGJImg5Pxi7LB0w9bEEBNtYCdJD7pKGmuLdy9ShEIJLAd95GeLb%2FvHn4yUp5CJyrgcBLPygdSTOsCHUj%2FJjLtyl8yejV33ycuHkFgTI5xqIt%2FmPSTUbK15l3TWJPk%2F9HQ73HzBl2l1FfTtBgIDXPZcyFNSGlniBcwsZ6TvQY6pgEmOA3bHselmlatUIMmHhZdZ3PU1d3VmwJYLmA2kAlq8zA5i%2BFTRFNNLqr8I5IteOVOmdizpB2F%2B60dXTKnp%2BHY6DdjYP5dbfCw%2BD%2FfMrKqNXRFR71e2nJkcQYwgcqXZo8FJ9K5aVoLYnMIyYCkchx5RcncTDSe8VGhr6GwuHQSoMr6%2Fbq41IIKEeGHSApGtLY3TiuPpEj5Erfas69ppbBoY%2BVjRN6w&X-Amz-Signature=ae3c0b464ebe0f1a07bb4b5fcd21fa2253f051aae22ad29995f2e839cccc6e98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766YYFQP%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDWmFzG%2Flend0ZBz9VzejV1T8DS7ujB9ChGzcE1GxMxaAIhAPMAXFYKWWSLl1%2B4fMfHENpufqXORpfxH2f7ErlDNisBKv8DCGAQABoMNjM3NDIzMTgzODA1IgyVrzauipY2bH54xu8q3AOxDSD2InRkR3OUcjjWF8VsdvkSWrGM%2FaiWSrjss8TrAKO7dIJzTqsd2xwdI7ji%2BYSUkhU2ikvBLwaup%2FzJfm7pzsvJNGp%2BIvAaUdpGI4Aa%2Bothx43idtWVVI1ybFZa2zmtORSji%2BRrepSWZbcZ3%2Fa2aMAv2gFW%2BL5YIUmBUPyexDATnGH1M29TkqppEZMeVg0f5qOZGyKLGvoF%2BZSUCRtycGaAgWm1izS4ka8FYH%2FgLxyBSXKpTKt%2B%2FKBgsczZSBaI%2BR7kkGLToojAq2%2BDnNLqknT4f0P428r0VuTM6x97a5dzCfE7FWmvfl3piu9FiWUVU5zHPCIUPm18iIER4iL7GxDCCHfWPNk5bmAK9fNcOkSCla4HnUIq6gCCzLgAcZJkQb5wCi%2FqA%2F0tBnlPj98LykJyekR%2Fl8tbe3XJ9sDl4urhkhjpcsyP2e2xDptMfCA8JRDTPhX5hgNlZ%2B3YCNvCS2Sc1GpaoE2M%2B7lALNWAACCsyiyq%2FzRaPW2PrtJ9Rff82zVnDK3eYOPb5YYzfwzYkqD1W%2FuPtyt4lT1plY%2BQSFhRoOz9p7j0isQsBSVGIFtSFeAtCXKCqw4xW%2FK6RuhCxEypErZmSCTRCLxlzwvpGDs14Nxiqx77itVaKTCUnZO9BjqkARTyJnJKkpJs7iU09JJUjF3v7pV0n82eTJ8vmkKteRx6MIRwxEurR7s6E3hDpn6aHciETN43A4idDDEYpzPgt6DvBpnU03cSx8teWqDvB7H9i56jXm51uI4tz7LieAULrUhrYGdtdc44CfrnmBIzGF%2FLFS7ySbl8XkJTqc6okW8DhnbbIfoVeQ9oc6vOB2NgAVt6%2Bb0W7yF7VhS32l5aHK23WjBC&X-Amz-Signature=e82da9a62b28823eb7802e6d99129f045407d9623a14613c9ba0ed205e68787f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLZRTKTN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDrUswP2tFVcBY8dtAv%2FqgLJqJKIrj%2FHWQul3p0IOmGsQIgMKsCS4CYpbLIDhyeMf2y2QUlX6FQPZKfheK5sBNyzuEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLHH4ff6XVCma075ICrcAxt2%2B0p6caFRdoY8UPbeXdqFvF%2BqVoMowbAFe7rkXFk2Zl6sLZjZX8jOgDPKEk4dTbsYKkye1Xwd4VoyV3jvf3LijRBnL%2F%2FOKsd3s2DIfNAYirZXoRoNxW9dhGh1b1LzKB%2BNlQqmMmPXtYK%2BFacKUwqGXiJXUrMRFN3qEYR8TMB4FjrJ4qp8aIknUjftwOYgGD5yfgARcUhBPyQVgb%2Fr5x4UqjaHbGT%2Fu7VuzvmZ4si3LLic6rHzzm4nImaExe6KjLyjfo3GVqu3lP2iBeujgk1WqUL7ymaME948U7VROgTl%2FR2BjylYOLR40S2MD0jyxHjsDXZ1GV4vG9vipVfTkkzW1UGlzZaEOAfnoka9WknEMZkX9XpCKZ6g1JaRodTtlC1TO3yHDXqiVMU7i0vnh1ZWQo3p3fJVYv3PDUHbnp8nsmGOkgw5IaQ6EeeLB66f23rCYf%2FA1ynRTw7a0ytGg02txMGDG2af59mkvTdaSgSKeF9qmxdkAXHB1koKm4cd%2Bc2j3oQpOm%2FC7AWbfBwwSVIAtHfGxfKJYyAdUxj08hQMp1gc4tvGYjFBwmaY5MJxSx%2BqC9rUgqpyjl7NxjWNVNWSY%2FX6CLCKEuOBxP3nRDQsitHFV5yNTz6D4s95MNeek70GOqUBRbKEvoNwsHVCaLJFBsMo3eNFXtUYrN3mUVwIBEikyNyeXPezr9OAfeCP%2FJ0giSr7Ek3yf%2FHA1%2Fyz9PUppsEJZcJtjfD8e1ePUz7xhPUbjKpR3YVhNk8umZw93XnOvWDHzma2U8%2B4hCGC0u8dHTIw5Ly7zx0mAb7sN8HoMRKafsZrwzHtMAJaOHZfcHTxV43qvlIEOvq1AWlFcf%2BHY4a7wWaKzpDs&X-Amz-Signature=4ce50b99b4c42e5436d72cda573dd071e23051e385a2a7175f33cf1134b98d46&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
