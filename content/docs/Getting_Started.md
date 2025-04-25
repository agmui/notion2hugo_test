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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TMDBOL3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZPQEGNITyVTmHGAWYGM5BpMm6J9yRn0YtrP9zSqtkKgIgRNCZhtKVIKYPipyNiZltdQpfIMQ9DN9SfJRRVEeVE08q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEh060zKdXqJ88c2ICrcA8e%2B7EUXA%2F%2BA3R4jOKshrNUIm1hl7dM1pzW0QT9civeqvnA41dc1gav9VfV501Pz2Q22EtSJB4%2BnuBNKrOGPh%2FnxoapSlgqE1MCF1Jjgs7sBC2mYGCfburMz6UAHQtF6VmdXsOe%2FudI25JH2SpYTV%2FxGQ4ExZhb7xKUghqLPmiWmxBUqDnzmRTdjQeOvnasSMfpUgHfESj9%2BM36RtCw8Bylto4wZWqPNDdcGZqEIruYG73F2vHUHYd832hsr0E2wBbynVmQgzjiBdgXWu9Ji5aMLpkeD6D0pgqm%2Bx%2B1i%2Fje%2Flo%2Bk%2FuV%2FwVbOaZiqLpPplrck8pgTsBfr2jAMHykkOFTtQATvYvfTbUGK0EwrIsWQXxd5VeJ4qA9ZOovQ6xzPIe29%2FCiVyXvAxWF5PuNOwBkXeRumHDbRPiB4jS6bZSlHMbiN1UkRJEPRfDzKVCCcs41GxSOt62Fa9JrbZE0sj6mWMaTBVKbQ208N%2FUvLEUnRlghE9pFvmFuVCnY3n6mFMyxUfqufpzMM%2FBiUGnGRWb%2BFj5Zri77ZOqWybMl5MI%2FmjzafuznA9xjI0YwPSjeCaTLm3UCSGQw3gCelvkO0Yi1SO%2BoDpfpBCb60UHO91tEsXgWYg69jkg1RFYSiMOGdr8AGOqUBjXrp8umGFsgI9zVazVeH6GqAK9JqE4SKhPTG4YpZC6pnbXvWDJfnBF3cZ7jXwgajE%2BB%2BGMvtzbqSZ33IUyB0Q5qJ%2FeISPtqHKcSgkJJPu47fbR3buPFVdbUPHz2AXxlzxLYUNLrLRs9X8c5q9LbzLidCFM%2BZWmRPjuA%2F4ZiWb6aUjGYaaXLx12DaQ9iIQkQEXhtjWDyqXoehM7R%2FSFHY3PE90OsH&X-Amz-Signature=cc9c3a21738910891d27689d7c0862851ee1d9e55f21a57cd7c9a11cbc160f59&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TMDBOL3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZPQEGNITyVTmHGAWYGM5BpMm6J9yRn0YtrP9zSqtkKgIgRNCZhtKVIKYPipyNiZltdQpfIMQ9DN9SfJRRVEeVE08q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEh060zKdXqJ88c2ICrcA8e%2B7EUXA%2F%2BA3R4jOKshrNUIm1hl7dM1pzW0QT9civeqvnA41dc1gav9VfV501Pz2Q22EtSJB4%2BnuBNKrOGPh%2FnxoapSlgqE1MCF1Jjgs7sBC2mYGCfburMz6UAHQtF6VmdXsOe%2FudI25JH2SpYTV%2FxGQ4ExZhb7xKUghqLPmiWmxBUqDnzmRTdjQeOvnasSMfpUgHfESj9%2BM36RtCw8Bylto4wZWqPNDdcGZqEIruYG73F2vHUHYd832hsr0E2wBbynVmQgzjiBdgXWu9Ji5aMLpkeD6D0pgqm%2Bx%2B1i%2Fje%2Flo%2Bk%2FuV%2FwVbOaZiqLpPplrck8pgTsBfr2jAMHykkOFTtQATvYvfTbUGK0EwrIsWQXxd5VeJ4qA9ZOovQ6xzPIe29%2FCiVyXvAxWF5PuNOwBkXeRumHDbRPiB4jS6bZSlHMbiN1UkRJEPRfDzKVCCcs41GxSOt62Fa9JrbZE0sj6mWMaTBVKbQ208N%2FUvLEUnRlghE9pFvmFuVCnY3n6mFMyxUfqufpzMM%2FBiUGnGRWb%2BFj5Zri77ZOqWybMl5MI%2FmjzafuznA9xjI0YwPSjeCaTLm3UCSGQw3gCelvkO0Yi1SO%2BoDpfpBCb60UHO91tEsXgWYg69jkg1RFYSiMOGdr8AGOqUBjXrp8umGFsgI9zVazVeH6GqAK9JqE4SKhPTG4YpZC6pnbXvWDJfnBF3cZ7jXwgajE%2BB%2BGMvtzbqSZ33IUyB0Q5qJ%2FeISPtqHKcSgkJJPu47fbR3buPFVdbUPHz2AXxlzxLYUNLrLRs9X8c5q9LbzLidCFM%2BZWmRPjuA%2F4ZiWb6aUjGYaaXLx12DaQ9iIQkQEXhtjWDyqXoehM7R%2FSFHY3PE90OsH&X-Amz-Signature=7456e903bd6bae36ff6effc9cea8a5b51ec043331546f8310b589492338b4d6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP4XPC5T%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrGfDaOISKy19bCabI3Ta3Q1DeMWKO4YxAWFBpUAWMIAiB6ehYGtVgbuSvtmEnehUojJuZva%2FCEXRG2Mz7THbazBir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMchxrf8Dg4mncpJ%2FFKtwD0BIXlyN8Lyqeb7D0iTvkkUP5q2USiWbmWQpTUadcsDSxAFTGOFkqz8QeoZuPUdtMgBnW6g%2BRoc0X0po7GL25%2FTrp6t9Xc6%2B7AWiwWYfJLKxQNWYkPxIjGVXFEYKgZfHKOtBmRUiRmrbcccnSKJBFsEzrUPKO88%2B%2FU67XC6V1QoUtoaAzXeG5Uxe8ahDiba1KBESmOAWbhJ2dINlSFjHDtrFAm%2FsSaOIPP3EAvY824AMfecZx5Gnl32aqTBVHlO9H6iJDLqPlb6ulwoNvigJVsA1AO5AkgnyyhoFx2F96b4mBcwCKVWbG3P8Oiu%2F2CLNidLkMthtm9c8yHp71dVhPG5qP2RB5vpF5xbcVeAxOXefo2mZfdpyoOS69aZHaFr1SFfSZOuYq4NcV5SINC3uALTPvl0ustHiPbwaCtI06N1s7ql3HFe%2FLpa%2BfXipttcDglPRqV4zn%2BMHQ25hJEeJC7ykH85Z1VlKRL2f5l4zEKhB9LWMpr%2B8YGq3L2PBDfHvftCVeklOQCJx%2Bhr75kL9FLR4sP9HWH5hFnQRnp9gEk9wBvEeNPrAKOx1xEbPSdrbO7GyeZSCi1z72ZR5wUgNtjJZOS8TJNUaMoTi8vFGz9JfWtX1AYlaABUsEKfkw6ZyvwAY6pgG6RiMeeIHCjagNBYGVPtejZKQaLac4MWeUJyJsuUtDMrSIcce%2BPbegefBF57rjQfubEFn114V48SzSydRDFMSmwesGNKMEVONkFS2X3lumb27y1CGdeZ3uXV0Z9nHsXOoLnKXpN3GeHhwbt29ofeKIHwQAj9GJLoSh0Cp5gtsz3%2Bmq0jHDFQrJdXuOgVvaF0QZ6grmmm5207F%2BZB%2BDnudTSXHxEJl9&X-Amz-Signature=b5aa9c3b96b490b4e6bb18bee35e55ea75d8f80df1afb6458db43e53fc40f2e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZXKZEJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSRUrCI6zDGfmGpvX8zOPZHGzCwveTCP0dCbXl%2BPB8RAiEA24QQ5Xixmemd8VuWjtRy7TZxasha6%2BMzGIH7fHA67O0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDBLk8oR%2B1MM%2F05q70ircA5c6f1lrgagYxO3YCGQ9aX8wHQFXNVIM0cIllRL0bWiHuf3%2BV47UXL55wopjDYtp6Nzr%2BfHWtbiL7QXa3%2B7SJCtlqyRrLoqRrHQbaNZTFivC1hP0xhPjtjDB0LtgKdfbS3Qqw6CxadDETVQ6vg7SUS8ttJUtUR9begzK%2FZywvp08hJNiy%2Fp2tF9nCWwKMRWJjv8K1rGaqa8FDJgoMSJWACJvkvutqRL%2Fklp0CnR2NKd8qjmdx82ONF10SdVPy%2FhkbThSkIkVJvAGsPL8VZe%2BNp6VXUdz5SZ%2Fgor6GUczuPi47KbHYNiTJQHAS5%2FE%2BbkoEQoxnM4yDOwdjWsaFSoQb3ynRiVUHLzGtuNWck1oXPDiCPuN0OjEO8uIQoKz%2FCUgS0e6ktIX1WU00%2B%2B1fLgK08ItRERKpj04REa8FNft2%2FfvjJdouNDjM6Z3N1dmlrmaDOw%2BvDqOmEbMuPgVFg4Rtr3sMeDp5GuIXuvG%2Fjzf1TZBOFDlp2r%2FwjposQeAdjlsDHsZbfByovaj%2Bspno3%2Fqy80E0s7mOLe9GlVHHPKZpFvUX%2Bl%2Bg7zRm74ajyybMbzdkI4jvKeCIo5j8QpwCcq3YeZBNeeAyP7dBcQC13c7sPXDVT9aOjK4QP8ryV8FMOGcr8AGOqUBw7iX1YI63LsKRjZmSHiQX0g8OIRZojX5fu%2BAOuaZ7W2nmF%2BUD%2FBI00%2B%2BhAiLM43S08oNuV0%2F2NvRZqbqTgxtvc8Pl6IqBSogb%2BWj%2BUmzvLFE3RdpElNqyvbCJtGTtS%2BHXKIUerw0JrHQ39wmh%2FF1eNdxPrqXN3dkdfJheK3xa6rY%2Bpm38QbzB4sKSqmhwG7RWzXAEt2qWc0F5xRUMBpfxtzLa28c&X-Amz-Signature=31895fbc26a6db59a7bcd4e07da0bd680da191e0987dd68702394afb81af25a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TMDBOL3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZPQEGNITyVTmHGAWYGM5BpMm6J9yRn0YtrP9zSqtkKgIgRNCZhtKVIKYPipyNiZltdQpfIMQ9DN9SfJRRVEeVE08q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEh060zKdXqJ88c2ICrcA8e%2B7EUXA%2F%2BA3R4jOKshrNUIm1hl7dM1pzW0QT9civeqvnA41dc1gav9VfV501Pz2Q22EtSJB4%2BnuBNKrOGPh%2FnxoapSlgqE1MCF1Jjgs7sBC2mYGCfburMz6UAHQtF6VmdXsOe%2FudI25JH2SpYTV%2FxGQ4ExZhb7xKUghqLPmiWmxBUqDnzmRTdjQeOvnasSMfpUgHfESj9%2BM36RtCw8Bylto4wZWqPNDdcGZqEIruYG73F2vHUHYd832hsr0E2wBbynVmQgzjiBdgXWu9Ji5aMLpkeD6D0pgqm%2Bx%2B1i%2Fje%2Flo%2Bk%2FuV%2FwVbOaZiqLpPplrck8pgTsBfr2jAMHykkOFTtQATvYvfTbUGK0EwrIsWQXxd5VeJ4qA9ZOovQ6xzPIe29%2FCiVyXvAxWF5PuNOwBkXeRumHDbRPiB4jS6bZSlHMbiN1UkRJEPRfDzKVCCcs41GxSOt62Fa9JrbZE0sj6mWMaTBVKbQ208N%2FUvLEUnRlghE9pFvmFuVCnY3n6mFMyxUfqufpzMM%2FBiUGnGRWb%2BFj5Zri77ZOqWybMl5MI%2FmjzafuznA9xjI0YwPSjeCaTLm3UCSGQw3gCelvkO0Yi1SO%2BoDpfpBCb60UHO91tEsXgWYg69jkg1RFYSiMOGdr8AGOqUBjXrp8umGFsgI9zVazVeH6GqAK9JqE4SKhPTG4YpZC6pnbXvWDJfnBF3cZ7jXwgajE%2BB%2BGMvtzbqSZ33IUyB0Q5qJ%2FeISPtqHKcSgkJJPu47fbR3buPFVdbUPHz2AXxlzxLYUNLrLRs9X8c5q9LbzLidCFM%2BZWmRPjuA%2F4ZiWb6aUjGYaaXLx12DaQ9iIQkQEXhtjWDyqXoehM7R%2FSFHY3PE90OsH&X-Amz-Signature=92a688b2bec4b69b70971238155b8ae9dc471d9e3fa3f10bfc544b4f9963cbaa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
