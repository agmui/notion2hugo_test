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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647FVVOWF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD5I2%2FEyYgvO%2FbTAcdSJRBa%2FoRPlHO3J0Z6Drfe84tZggIgW%2BV7tn3PjbIFRLGn4on2mHFKP88iXSZOVNevwTa43lMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDN7F5leinOPIB091vircA7feWmS%2FLR9CDtm9Xi7FqUXDODfcpdWMUTGsODgtaVEzEjtqsnxmEHEKj4hYLCn7Bm%2FS7syEa5mAV%2BvtNIbccb5%2FZbgsyKGOuSHSBnUK7Kf1TGITbx0wDzt0bm%2FZBSi7KMbiCFUUVrNY%2B6HA4dA0sU7%2BCjf3qu8F3Kq8VG4Kbjzknaes3xaRXTF5dZYX74tIdp0KMSS%2BjUyqOpoL8j3dkQdxMXAtVUV91%2BDqdHI7Sn8iMSMqQB4zIzx2h2XpWKYT0DMaRjYuE%2FxWRPli4ig3S9O6Pc9zxanB8gCXQcvajeZWhKDkTTyI0WtHj3NrOsaIuXhQSTvEdh0r9j5w9AN6TUP9FIAWUkPmefukG3Alh%2BbgmWhbA0Ayk%2FefSfgVL6%2Bol6lRxtPJHfbx2OqhRl1nUN%2FM7nIfaB%2ByEW3YLYlO5VD8jDVD%2BuhppJs9POgL%2B%2FMAglWxi2qsbyiIrmqQldviYeZ%2FwtkWIjQyfZxB759bY3RSMsGOqF8CbPliCZKi%2B4UVLGNYTOhDxXECHERw4vfJIzY2Z2Kqm4vMxgglapgHmOBkhgS9RD3BEVlR8j0me3On4QRzKre7uhdFgWFsZI2VaXXvRH81y5Rb6JuKPoBL%2BoJAvXonjNcN0iiGhfabMP2Uhb0GOqUBr%2FuUn52zDyOP39w4pi622byHvc6KpAf10q1uMcZCMVP3g5T4wv8Xh4s1JlqqiNRCbMkfVOkomV%2BobsQxlzjFKOVsQhapsX8wsiayOZQgmT9AkolVsoBBIgLUpz7Mde%2FQxH4rlSVfWxpFOXiYHfNRaMHKZtQDTOaxh5QLnvQgTGqCUShs2PtLHQrluFGdOTG%2FCfpC9b2Tp72fim4Ou0BnsRrk9wWc&X-Amz-Signature=a539e6a54237dd376d9e53bb7f3f78ca51f0f0c356c354a5e2aeeb4e4ec5984d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647FVVOWF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD5I2%2FEyYgvO%2FbTAcdSJRBa%2FoRPlHO3J0Z6Drfe84tZggIgW%2BV7tn3PjbIFRLGn4on2mHFKP88iXSZOVNevwTa43lMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDN7F5leinOPIB091vircA7feWmS%2FLR9CDtm9Xi7FqUXDODfcpdWMUTGsODgtaVEzEjtqsnxmEHEKj4hYLCn7Bm%2FS7syEa5mAV%2BvtNIbccb5%2FZbgsyKGOuSHSBnUK7Kf1TGITbx0wDzt0bm%2FZBSi7KMbiCFUUVrNY%2B6HA4dA0sU7%2BCjf3qu8F3Kq8VG4Kbjzknaes3xaRXTF5dZYX74tIdp0KMSS%2BjUyqOpoL8j3dkQdxMXAtVUV91%2BDqdHI7Sn8iMSMqQB4zIzx2h2XpWKYT0DMaRjYuE%2FxWRPli4ig3S9O6Pc9zxanB8gCXQcvajeZWhKDkTTyI0WtHj3NrOsaIuXhQSTvEdh0r9j5w9AN6TUP9FIAWUkPmefukG3Alh%2BbgmWhbA0Ayk%2FefSfgVL6%2Bol6lRxtPJHfbx2OqhRl1nUN%2FM7nIfaB%2ByEW3YLYlO5VD8jDVD%2BuhppJs9POgL%2B%2FMAglWxi2qsbyiIrmqQldviYeZ%2FwtkWIjQyfZxB759bY3RSMsGOqF8CbPliCZKi%2B4UVLGNYTOhDxXECHERw4vfJIzY2Z2Kqm4vMxgglapgHmOBkhgS9RD3BEVlR8j0me3On4QRzKre7uhdFgWFsZI2VaXXvRH81y5Rb6JuKPoBL%2BoJAvXonjNcN0iiGhfabMP2Uhb0GOqUBr%2FuUn52zDyOP39w4pi622byHvc6KpAf10q1uMcZCMVP3g5T4wv8Xh4s1JlqqiNRCbMkfVOkomV%2BobsQxlzjFKOVsQhapsX8wsiayOZQgmT9AkolVsoBBIgLUpz7Mde%2FQxH4rlSVfWxpFOXiYHfNRaMHKZtQDTOaxh5QLnvQgTGqCUShs2PtLHQrluFGdOTG%2FCfpC9b2Tp72fim4Ou0BnsRrk9wWc&X-Amz-Signature=63e3f88cf157348e4d70119e53622e67720d609193f16e21cacd9372d15ac008&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2IEWLQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCG1qkdzWHy5QPFu81oPQfMW%2BXovE0vUStktCNYKYHk4QIgYR2lBKQ2vOQ3Qi04rJ6clF87cE41MiaZfmQN28JE8Sgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBloK%2Bbp8DWTgl5lGSrcA7efBQGs2bgMAJ4e3f3LIlTOFB2WL9eb6s9Sa9adkRKdTWppS3wKCLFv0CM77GfwWwCQat8kKVuQ0eWOJZaYLR5jmWmdoksLvqZO9OXTpNfNabMwptamyFzQi3qNLSP5qihf9mchXSApGGNlt9Sx3Bxa3RDwRVa3urWHoUsiJFe%2BLaEdQR%2B09yB3u%2FnAw4GOZ909jtfhubmCOl1xrSxqpT7f3RgLwYBxsZtpBTTaEtwm78gZPSc5PAQbXQawF7DppG5ekDlamHnsNToky4ipLfEHHTdixzSIG4K7chXXWT4gNT%2B%2F1k8Q8OO1%2Frkg4tiVZeZfMtiuVYwlNz%2BJXLPOSdZ8rxii0CbeeirEYRFJjQmSmMqy82r5%2FrarqAp6Nv8GHitlBntNmF1RathSaJG%2Bc3IyeGBUjOtx%2FKrdPLALFDhXdujy2Erhu%2BbzZr007y5K4pOPiinS9i%2Fhc2VnUxkWipAbJy2EMi8Dtgr8mAxz4SrX7mFCuG%2FLZLhsD9D10iNikodQcida6LIMzhySnLdEG%2FIiJC4xyJYP1WeNE0qv8ad9JmEZ2x0djRzaPXl%2BkUz598oqZjDycLJGEERu%2Ban%2F6oSZ5ixtVKxZyoFIxfvPmdE1WzZMKQna2El%2BTi98MNmVhb0GOqUBgD7lkXv%2F1hcFMcYl1LAPDkhYwfiODgtWhjn9WiZ40oKNuPH%2Bpsju5lXDQYYrHCqV3ZDI4hFEZnajCqhcdJhJPErgjXcB0f7DG9V5vfYtnll8jVwd33DMV%2BtJm75FpbPuJLWQaziad8tFUIHZbbQ64d027p%2F0Ri8mikmzeBRwMi83MofFeQ6L2bSL4na2ojHfoWcY1s2HXFGGSnGapyNZHcgEb41p&X-Amz-Signature=862ef101477e01c4e2f404c696817458695e9a1de2215f0f15a450edc4ae3137&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BUNTXXD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQChFbE5Sg%2B3Vcz%2FTc00Aqzpc4DFy26MVW6Q0zrhLx2TUAIgHbVK6jBCtJIbvsjWH5lqRKlSYZ3xS43qQ%2F9W2daWj8sq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDLCtohQYs2xqWDHybircAxTxZ3dzymY%2FLMsPcedwO1gbINM8WI%2Fu5NphCcnGNhEMY7MkL3Cw2XdxIfjblS1sW3%2BFKlab3KDmqXkiQ7DWP0jPnO6U0KvNXZPU731ouCuRXA7KorC3vbW8y9J6%2FAED1dQEExbs9Bg1dq2hNzG%2B%2FLS7Zmfhq5eAanbUECMxp23dVVo54YTcFjVhlD5HmzVfaROAFW0PXk1X%2FcBpLljwgRSyKnD%2FG6s5lObxA%2Bjrw9WGeCPRjPKrVjFDpxgwdxijt%2BjYU7ijhMNhxRQ4xvjwxGwUfL1YZBbgGt1YxF5R0Fn51pNOUJSv8kbRajyD4sTSacdtEFHCfMveJfxIVBkV%2BUsoQMciAJnyIfxrpUy7rwDeUs9kz2GCRWPpnyIAZzwjJHeaS%2FYBqxL5nAkUcog2QgXJ3aQd0Ak%2FD5Me%2FhOjoOZF00xFzCkHkRGeohTzEM5F7iJU6416XDjT2Xi5i7hVcCIaWAV%2FkodrtErK0JrDsiTBRL0wPE%2FxtU5Xz0nmD3nrYVwqQPQ%2F1vnf7WCLScQ61w3WH%2BHrsngFc0mE7XYjlgzOhOzXFMPW4Lc5fuh1ta0mlsqgmQq%2FMG1TWihhMjBdkNTpVvB7RR4YSlm9T2ZyluDUEhKeoO5Gfs7f%2F6s6MOGVhb0GOqUBJ5TDeR%2BkeDQWX%2B20AE5Mt2zCEMWtxsLv5AtvrBGgrxRNVpIcyQuEmNCe0Wbd6%2BtVsP7KKv4eJVVmMVM9Woq3mSogwK7Oj9%2BERyy6PQ307nikBE96kD1VFLIICAgLyOU5hVOOmmOEO0%2FYxu8nchVq9CL1GUqcjUcgoZrSulRL%2FuaNq82Ktv3dRDV3SZnbQXr%2BAE%2Biy1Y8nNxZsXaCFW9l2dWFVhXd&X-Amz-Signature=5d90c9e079bf31b0d8fb40023032ff4824d7f8290f9224d9eeb92e196e136670&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647FVVOWF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD5I2%2FEyYgvO%2FbTAcdSJRBa%2FoRPlHO3J0Z6Drfe84tZggIgW%2BV7tn3PjbIFRLGn4on2mHFKP88iXSZOVNevwTa43lMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDN7F5leinOPIB091vircA7feWmS%2FLR9CDtm9Xi7FqUXDODfcpdWMUTGsODgtaVEzEjtqsnxmEHEKj4hYLCn7Bm%2FS7syEa5mAV%2BvtNIbccb5%2FZbgsyKGOuSHSBnUK7Kf1TGITbx0wDzt0bm%2FZBSi7KMbiCFUUVrNY%2B6HA4dA0sU7%2BCjf3qu8F3Kq8VG4Kbjzknaes3xaRXTF5dZYX74tIdp0KMSS%2BjUyqOpoL8j3dkQdxMXAtVUV91%2BDqdHI7Sn8iMSMqQB4zIzx2h2XpWKYT0DMaRjYuE%2FxWRPli4ig3S9O6Pc9zxanB8gCXQcvajeZWhKDkTTyI0WtHj3NrOsaIuXhQSTvEdh0r9j5w9AN6TUP9FIAWUkPmefukG3Alh%2BbgmWhbA0Ayk%2FefSfgVL6%2Bol6lRxtPJHfbx2OqhRl1nUN%2FM7nIfaB%2ByEW3YLYlO5VD8jDVD%2BuhppJs9POgL%2B%2FMAglWxi2qsbyiIrmqQldviYeZ%2FwtkWIjQyfZxB759bY3RSMsGOqF8CbPliCZKi%2B4UVLGNYTOhDxXECHERw4vfJIzY2Z2Kqm4vMxgglapgHmOBkhgS9RD3BEVlR8j0me3On4QRzKre7uhdFgWFsZI2VaXXvRH81y5Rb6JuKPoBL%2BoJAvXonjNcN0iiGhfabMP2Uhb0GOqUBr%2FuUn52zDyOP39w4pi622byHvc6KpAf10q1uMcZCMVP3g5T4wv8Xh4s1JlqqiNRCbMkfVOkomV%2BobsQxlzjFKOVsQhapsX8wsiayOZQgmT9AkolVsoBBIgLUpz7Mde%2FQxH4rlSVfWxpFOXiYHfNRaMHKZtQDTOaxh5QLnvQgTGqCUShs2PtLHQrluFGdOTG%2FCfpC9b2Tp72fim4Ou0BnsRrk9wWc&X-Amz-Signature=39f95a49b340b5fa68e2013f2814d8a25db1af551f23aedabfb66c3b2fb8e140&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
