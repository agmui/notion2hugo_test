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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKAKY3LI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC71ccDWOKHHEOR8Q1HxDoWFx1BDdY98X%2Ft1XjAZeCKyAiEAxfabzk83RCZSIBoOnwdHzz1hktsC1JgS26PzYwsz7EsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEocUFh4Oemk1wVqHyrcAyJr%2Bff1JdRHuueKwPgVn5WRjGvrAW01x9ayo0a9cV8b1le%2BTMfSzqccW4TAxFS%2BOSVsU2SkH9W1VNtanmUsRoV2n2HZeOMSxRJlENSprl6QyHW95dsYYnorl3kX0%2B%2BMj5K7V4Nc20k51ZYXRrop0clS3cBKM6ZpxnO%2B7lOXjMAdZaJCU%2BnOsq7ySTSQhjwjFrkiJvOT3qSRBq7Q8XgndBdcKr1BhxtQe0KXtN50Ih4fwMSVZgdoyaQe9oDazSfi%2BCnBLiTuvBMtnak%2BFW%2FOFzm3eOxeaAkqVPPgsdADKIRYqVADG4lxS7G7JWkRfnP6W2KIpjVW6YTR5P1egK5SHx7waZmvvMM55svNo5h3gR3E630r3YLO%2BgzNw7LFCnsOGQGCHUTRSBFsmBbFaXw0aT45KO6HyYrQiDhMJd6GwZ78WyRoG5wkQuErhtYTHyyvjbSG5%2F6S8N%2FpUDQVEoyheQbli1IMH0nXTHBhPr6QowKrHdJTT4ZBWD4ZUP5BYanZ%2F7mGA9RqhAHA8MSMjenHI8ObK2j2xx7rcmY58J6x%2FqYiZA8wHR3gcQXIZ%2Fcst47rBEm3O9rzbxUirO3%2FLo4SPzPl%2B%2FLPA9l9XOQIyuMjyCGJYNaP%2Bl9xCxkClR4eMPK5q78GOqUBEPE1Sy101gEbogqJpMkEEy1AP8OiXktIf782fAQL%2BnnpEtlLopBDjPNJT3Dn2ZFV4J02Nk93ld3F8JXyjJliO%2FjgFKoAZfrruKszj8Va9dQwP83BcFxgNhgd0l0qD5IgoXS7FpuPCDtpdthoal2Co4Fd5GzAPY%2Bxlqk1i8wsq9pZ1Hg5bzPVhHdmVr2IVKbVenBWd1tSczZxLUSv%2FHk9lZC1busa&X-Amz-Signature=421a1ea5dc83f3a7f612785715ddc84e98df50ad038d5d4355b3cd8e4ca6b54a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKAKY3LI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC71ccDWOKHHEOR8Q1HxDoWFx1BDdY98X%2Ft1XjAZeCKyAiEAxfabzk83RCZSIBoOnwdHzz1hktsC1JgS26PzYwsz7EsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEocUFh4Oemk1wVqHyrcAyJr%2Bff1JdRHuueKwPgVn5WRjGvrAW01x9ayo0a9cV8b1le%2BTMfSzqccW4TAxFS%2BOSVsU2SkH9W1VNtanmUsRoV2n2HZeOMSxRJlENSprl6QyHW95dsYYnorl3kX0%2B%2BMj5K7V4Nc20k51ZYXRrop0clS3cBKM6ZpxnO%2B7lOXjMAdZaJCU%2BnOsq7ySTSQhjwjFrkiJvOT3qSRBq7Q8XgndBdcKr1BhxtQe0KXtN50Ih4fwMSVZgdoyaQe9oDazSfi%2BCnBLiTuvBMtnak%2BFW%2FOFzm3eOxeaAkqVPPgsdADKIRYqVADG4lxS7G7JWkRfnP6W2KIpjVW6YTR5P1egK5SHx7waZmvvMM55svNo5h3gR3E630r3YLO%2BgzNw7LFCnsOGQGCHUTRSBFsmBbFaXw0aT45KO6HyYrQiDhMJd6GwZ78WyRoG5wkQuErhtYTHyyvjbSG5%2F6S8N%2FpUDQVEoyheQbli1IMH0nXTHBhPr6QowKrHdJTT4ZBWD4ZUP5BYanZ%2F7mGA9RqhAHA8MSMjenHI8ObK2j2xx7rcmY58J6x%2FqYiZA8wHR3gcQXIZ%2Fcst47rBEm3O9rzbxUirO3%2FLo4SPzPl%2B%2FLPA9l9XOQIyuMjyCGJYNaP%2Bl9xCxkClR4eMPK5q78GOqUBEPE1Sy101gEbogqJpMkEEy1AP8OiXktIf782fAQL%2BnnpEtlLopBDjPNJT3Dn2ZFV4J02Nk93ld3F8JXyjJliO%2FjgFKoAZfrruKszj8Va9dQwP83BcFxgNhgd0l0qD5IgoXS7FpuPCDtpdthoal2Co4Fd5GzAPY%2Bxlqk1i8wsq9pZ1Hg5bzPVhHdmVr2IVKbVenBWd1tSczZxLUSv%2FHk9lZC1busa&X-Amz-Signature=a9c512c9d3ebcfe9d0ea83d89bdfb40caa476cb3c96e35056e915bbb8f4cc56b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVTJG5V%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAW2ZU4CQPUt2VcA0J3NlUN6OY6nARxeRlZTz%2BeK8TpiAiEApDgEuoYBOr6oCHhQCMC9tHr%2B%2BH6W0PNaB%2B%2F3K1KdIhMqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfaiegGRh2S2Z8YCyrcA0M1zDMFx8n2ggYziDbF4xYHi36Uq%2BN%2Fm71F8oG2b%2BX3iHheIrgojnCpnv9RfMk33ry4D1xxPMMdymmIdp7zINIQKUjlLxBuQ2MxC%2BeS1haQ8%2Bws%2FeR1hdKXLjK0IzvlhXtqd%2FmdpNV%2FWUeXFjAalSlLHSPmLHeaC%2BIZjM9Zv2g%2F2xFrg1wKOn89Hf%2Fm8uj0TrMUG8LBU1LfzvHn0gjbThESrlr7vILzr12TRoPOWNoHkXmWkfDXLrQmSDG2BxsF1U3NpnB5kKnejeGSPIGhzX9FeHMf1rawJUcyqUkAOcx0GEMk7GxdqZPGHkKHCpvYC3iG9rAPkZJA%2BviKeGBHk%2BhyXWvaQD%2FNlZ5ssrpCYnvZd02F5yPNCMRny8USprtQiH%2B5%2FtdR3GzOvFCs46ql8zPvQFzuAPOt3wDHxtPRismQLx8xxSGfIxOPyHYhRVTvSZspIHDkPlyrF4wYgjfzyEEpZNYe0YpFr1piCaBaFhB4E%2B3eIp4U%2BtQE2j%2BDxpsetJhELeTpqHkpS0G%2FqXKD%2BlWEEAl6StNSbaeoGr7ai4bJAyrB75HBjZUQwXbuwn7OvAYgCmJFThdb%2B%2BUHW%2BMctLrDk1iCrxx7GW%2F%2Bn1aR5XXtT9dIxqLRK%2FX9xQZKMOy4q78GOqUB0r21d46uz6xzUU2HZcaM9eNEnmfkGemCjF7%2F0r%2F1cSFFtEIQgJr32%2FQsTS0%2BTLvt8VuTFfBBbuziDsgef2EkCasI0hfZ9i1tQ78k0dLpc11Ugg%2BwjtasdfCgcWfYv5C1pU0Ho7AoeD3nioFRJNIN6r%2BSXDKQBDQ7HxPEivRcYBVZSVgpGqAVbqdL593N7S7IeFZzQAZneR0XfF4%2BCxsDXgd%2FW2Fy&X-Amz-Signature=e738caaf842c3e3a3ea224d0062c4eac61d46ecc9b6c665006c3b51210dce516&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EOZEYXW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFSNHO%2BHPgPcUz47U2zZ%2BTDJTpCe2ABRsGl3cP10DGM4AiANIdf6YVFzQQ8d76rstDr%2Fd0W4oILDyTN074W7ZfTT6CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC5ZMmu7qJZABnf19KtwDDEy5lt%2FcaSZlBXtMqkwE%2FgckVWUs3SlfTlwR37VcJQ945N%2BNTH6N6jd5KNW9ShSOtNwIldA2Rw%2B7p48ggAgqE9gROhhc6%2FdnaFgmRyTUVDmPoggZf8xMPvVLFg1gnBJ9a49SpZlgEHORgPug6uuOij%2Bz9IqgwozPclAVp3rlYovJ48IcTkKg4QbITiktQDfyH8kW9Hj5W286j0%2BeAFeyUEC3KsZpgaPSsd6F6G9HXlbqUMlkruXjnjiKHy%2FTk3lwfOLgp45BltE4NcJOoPp63Zc7gq4Qm3W8VtPkElFOg%2FvFLffaICiePX%2FXrf84JhGu7hXvZyP3FKlU9cL12qKuJsYheVA581iiCAEtZSO%2FQgW8XEgOlv5cqoH8EY%2BrkxcpNqv66LIFT7cWf9boaLYlGPnvKp9oF1igUsEy3CXhasYgJ1UWx%2FLg9CyOps5ZpQyfaumPRT7Wy5SBnzkW30uNSKO0Ri43hcbF1Lc6JoC5o94VHNTUnZlLE7I5tmZFGLuy0BlCFd%2FextHG%2BtizHAZ8YbBM71gwpe%2BfP67LqlyPkkjODeqGe02amNSKKFhHaB4q6d678Sdr12waxYtXIcvWyWtcymPx7QldAIK1zMREP8qXnSz3T33%2F0g3OPz4w17irvwY6pgENCu84A%2FwrKz2H967exbWsrDCPELm2yRZOR4QCufAFsT9CliyDwGKwUhx6MHxKqdE2QZaDt4pNiSHuQgt%2FUDA6GMFKDOeiC8Xbvh5nRrs9Jtrm0AQY6ZW9THvTqm1t8lxDyO7qsCWmbKo5GfIp0EWuNcCB6tiq1%2B8XzLooAmV2%2Bebqmfx5UJjvVtTjQdIWu8KFz3k7ixfPpdV4KciEJiqAfUwVv1zk&X-Amz-Signature=8988748b77a5ff916a0923c9c1935459d6863e90a52316fcf1e2320f25dfdf5a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKAKY3LI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC71ccDWOKHHEOR8Q1HxDoWFx1BDdY98X%2Ft1XjAZeCKyAiEAxfabzk83RCZSIBoOnwdHzz1hktsC1JgS26PzYwsz7EsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEocUFh4Oemk1wVqHyrcAyJr%2Bff1JdRHuueKwPgVn5WRjGvrAW01x9ayo0a9cV8b1le%2BTMfSzqccW4TAxFS%2BOSVsU2SkH9W1VNtanmUsRoV2n2HZeOMSxRJlENSprl6QyHW95dsYYnorl3kX0%2B%2BMj5K7V4Nc20k51ZYXRrop0clS3cBKM6ZpxnO%2B7lOXjMAdZaJCU%2BnOsq7ySTSQhjwjFrkiJvOT3qSRBq7Q8XgndBdcKr1BhxtQe0KXtN50Ih4fwMSVZgdoyaQe9oDazSfi%2BCnBLiTuvBMtnak%2BFW%2FOFzm3eOxeaAkqVPPgsdADKIRYqVADG4lxS7G7JWkRfnP6W2KIpjVW6YTR5P1egK5SHx7waZmvvMM55svNo5h3gR3E630r3YLO%2BgzNw7LFCnsOGQGCHUTRSBFsmBbFaXw0aT45KO6HyYrQiDhMJd6GwZ78WyRoG5wkQuErhtYTHyyvjbSG5%2F6S8N%2FpUDQVEoyheQbli1IMH0nXTHBhPr6QowKrHdJTT4ZBWD4ZUP5BYanZ%2F7mGA9RqhAHA8MSMjenHI8ObK2j2xx7rcmY58J6x%2FqYiZA8wHR3gcQXIZ%2Fcst47rBEm3O9rzbxUirO3%2FLo4SPzPl%2B%2FLPA9l9XOQIyuMjyCGJYNaP%2Bl9xCxkClR4eMPK5q78GOqUBEPE1Sy101gEbogqJpMkEEy1AP8OiXktIf782fAQL%2BnnpEtlLopBDjPNJT3Dn2ZFV4J02Nk93ld3F8JXyjJliO%2FjgFKoAZfrruKszj8Va9dQwP83BcFxgNhgd0l0qD5IgoXS7FpuPCDtpdthoal2Co4Fd5GzAPY%2Bxlqk1i8wsq9pZ1Hg5bzPVhHdmVr2IVKbVenBWd1tSczZxLUSv%2FHk9lZC1busa&X-Amz-Signature=6f438a06c20717c13985632111cacfb7b5f13233de63c1d6452b5a473fe6e564&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
