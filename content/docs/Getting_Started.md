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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSFUUEN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCdeY%2FT6CS2dfIwRKzHOXrSrtqzRMvldfcYwIEIoOcZqAIgYQlIhTDuj2Tnwyi2tu6p%2FKKxbOnl1I2znF%2FbNXAfolEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCOy15SNLQu8T18fhircA4%2FEbeN9U9ftpiQbNC%2BXO3kuY9cap95xu8TeB%2F6zsq9lJLdwQFD9af0vKHoN6C1s1I3AzsxVsYeYXHp63mi1g9%2BFSy6jf9uwBkmvtxq8AfXQfGT0cTi7IqdBuzERK9KYTpfyVXqwjeXWyJHomZJLvCDGaoUmrRPtLnT7sxiuET%2BLPvvINC%2BRIdQjjQcRkOOlYXs4EiVqFOYIlfUfaNySey5km0ppCMQaIvNzR9rPSHfb0RlSe8fZ6eFiQYKIZcV2qqSUs1HxahQtpu1GIJ3U3ze5Mv%2Bs3Rur96ioxbgEfVPHSWl59afUxWB%2B0HmcFR5mI%2BZMxiir2MmnaGaTlEaqVZbkeZrQzdyCbPwUkkbLvswofAgedYmQOWupnLBqbF3mvdYMv1g%2Ff1NRb2BaTITGbrrcu%2Bp0nA4KBG6rzcoDRZswfIjbzm5yf8l%2BnPNVN9Lcp8bsGnwb3YSrDYmCqTj%2BW87SJbNfoHc4r%2FznomoJDjfis9znVYTCFI6ZgPBWBAIfKP4L5Zud79PDPbMSH4GFCTjHfFCMIhbdfrd7H94NJvuUtE1xOBRxT7hRDmKIgknPO7G8V%2F%2BQRgRLLN7yAn1Hq3NDSAfsVmdNNdFeFKTDXwuyoArBY3aaYyXXkaUWMPWurcMGOqUBYZ5st5il4Lk16Dcfog%2BfdgwQVYzXLO32Z3jQRkPGiEOaoF3aui8mA2GAlusQjUpnbXYuZiPKdUuJvnDA9vdq3K6P16h3zHy1U61sDoHKPe3RLoq%2B7h8Qp4mctOnu7YgMcfpxL31hZnk0NTcsjmVQ2SzUu%2BPCCOn6voaLFHrHbCHoqGxi8%2F%2FHbpsGFb3%2FNZuHI4NmWwrPycVw5AW3gYSqBlt3aSBX&X-Amz-Signature=0e41dfec0669ae4615db1a08bf8f53931a06682b7b982bdae739555b1690a446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSFUUEN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCdeY%2FT6CS2dfIwRKzHOXrSrtqzRMvldfcYwIEIoOcZqAIgYQlIhTDuj2Tnwyi2tu6p%2FKKxbOnl1I2znF%2FbNXAfolEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCOy15SNLQu8T18fhircA4%2FEbeN9U9ftpiQbNC%2BXO3kuY9cap95xu8TeB%2F6zsq9lJLdwQFD9af0vKHoN6C1s1I3AzsxVsYeYXHp63mi1g9%2BFSy6jf9uwBkmvtxq8AfXQfGT0cTi7IqdBuzERK9KYTpfyVXqwjeXWyJHomZJLvCDGaoUmrRPtLnT7sxiuET%2BLPvvINC%2BRIdQjjQcRkOOlYXs4EiVqFOYIlfUfaNySey5km0ppCMQaIvNzR9rPSHfb0RlSe8fZ6eFiQYKIZcV2qqSUs1HxahQtpu1GIJ3U3ze5Mv%2Bs3Rur96ioxbgEfVPHSWl59afUxWB%2B0HmcFR5mI%2BZMxiir2MmnaGaTlEaqVZbkeZrQzdyCbPwUkkbLvswofAgedYmQOWupnLBqbF3mvdYMv1g%2Ff1NRb2BaTITGbrrcu%2Bp0nA4KBG6rzcoDRZswfIjbzm5yf8l%2BnPNVN9Lcp8bsGnwb3YSrDYmCqTj%2BW87SJbNfoHc4r%2FznomoJDjfis9znVYTCFI6ZgPBWBAIfKP4L5Zud79PDPbMSH4GFCTjHfFCMIhbdfrd7H94NJvuUtE1xOBRxT7hRDmKIgknPO7G8V%2F%2BQRgRLLN7yAn1Hq3NDSAfsVmdNNdFeFKTDXwuyoArBY3aaYyXXkaUWMPWurcMGOqUBYZ5st5il4Lk16Dcfog%2BfdgwQVYzXLO32Z3jQRkPGiEOaoF3aui8mA2GAlusQjUpnbXYuZiPKdUuJvnDA9vdq3K6P16h3zHy1U61sDoHKPe3RLoq%2B7h8Qp4mctOnu7YgMcfpxL31hZnk0NTcsjmVQ2SzUu%2BPCCOn6voaLFHrHbCHoqGxi8%2F%2FHbpsGFb3%2FNZuHI4NmWwrPycVw5AW3gYSqBlt3aSBX&X-Amz-Signature=57b16bfc74c12131b228f09d811bbb41d7f5823c9b8b3ee10d582b037b636203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSFUUEN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCdeY%2FT6CS2dfIwRKzHOXrSrtqzRMvldfcYwIEIoOcZqAIgYQlIhTDuj2Tnwyi2tu6p%2FKKxbOnl1I2znF%2FbNXAfolEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCOy15SNLQu8T18fhircA4%2FEbeN9U9ftpiQbNC%2BXO3kuY9cap95xu8TeB%2F6zsq9lJLdwQFD9af0vKHoN6C1s1I3AzsxVsYeYXHp63mi1g9%2BFSy6jf9uwBkmvtxq8AfXQfGT0cTi7IqdBuzERK9KYTpfyVXqwjeXWyJHomZJLvCDGaoUmrRPtLnT7sxiuET%2BLPvvINC%2BRIdQjjQcRkOOlYXs4EiVqFOYIlfUfaNySey5km0ppCMQaIvNzR9rPSHfb0RlSe8fZ6eFiQYKIZcV2qqSUs1HxahQtpu1GIJ3U3ze5Mv%2Bs3Rur96ioxbgEfVPHSWl59afUxWB%2B0HmcFR5mI%2BZMxiir2MmnaGaTlEaqVZbkeZrQzdyCbPwUkkbLvswofAgedYmQOWupnLBqbF3mvdYMv1g%2Ff1NRb2BaTITGbrrcu%2Bp0nA4KBG6rzcoDRZswfIjbzm5yf8l%2BnPNVN9Lcp8bsGnwb3YSrDYmCqTj%2BW87SJbNfoHc4r%2FznomoJDjfis9znVYTCFI6ZgPBWBAIfKP4L5Zud79PDPbMSH4GFCTjHfFCMIhbdfrd7H94NJvuUtE1xOBRxT7hRDmKIgknPO7G8V%2F%2BQRgRLLN7yAn1Hq3NDSAfsVmdNNdFeFKTDXwuyoArBY3aaYyXXkaUWMPWurcMGOqUBYZ5st5il4Lk16Dcfog%2BfdgwQVYzXLO32Z3jQRkPGiEOaoF3aui8mA2GAlusQjUpnbXYuZiPKdUuJvnDA9vdq3K6P16h3zHy1U61sDoHKPe3RLoq%2B7h8Qp4mctOnu7YgMcfpxL31hZnk0NTcsjmVQ2SzUu%2BPCCOn6voaLFHrHbCHoqGxi8%2F%2FHbpsGFb3%2FNZuHI4NmWwrPycVw5AW3gYSqBlt3aSBX&X-Amz-Signature=d536767ed96d91c3cf6734b5c9c3f845ea48a8537679beb6ec6f58b266851b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U43QSHK4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBWJTLBI%2BFUfhLvOeF84WSn9OP%2F6ab52hZMqOrQwiWvXAiBRD0QkxsbmpbrvFSyQvY3bejjET9%2BZIS4wALuW4LzFlCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMcHO1JrExh6LvnLk4KtwDtl4B6ebn9GetKTCy1oj%2BUW3Baa2V8By%2BaS9YW%2BFq3nQSxtKxeHKJxkHQH1sT8OSZTqaRBc7r6pepTT4PlWOtmpy%2Fog9dzxSG3VsvKu9CbeXZP7RxnmF4Jsth3GW4RjuSOoodcx1iQLlIId1gdVAP4gOjR0smJ1yykl1FK7CC6m4kRxAtiyVb31qDm4w52NvGI4WgWbsmHMNvm2DLMSP4iJO31lQeNBv0L8nszbXd4HaWtkZcWCvCok7F0NATkaZS7hHMltPWRU75%2Fgj9HZM5TR%2FrvOBFX5zE%2Bl%2Fed6d%2FnTT%2BNQ%2BUJ6RGYf30SECrw%2FRgYBUHB81kpvrmK8RJLemwNoIpodQsgeMTfDTlmue0WzCqZ6ITKLrgKr2x5ENpSXQhP4zMgy77CqqC93Bm1MOgD9I957vuPO65k9WGdy8ltQJPC5tadu9cWjGfd1GwkQElE0rBWya7EDwXw3F2Y2COR9Xe2lpKiMvmwYyCGV1w9H98uJ48D02oc9S792TlxuWTcnuNsiaBUaRbbhejuu9z5rkuX%2BdrlJ34Tama7A1g4pFUQYsUn3d%2F9XO%2F8mPjm8jKFozYBMYvWT2RyDayAYgH%2BhtVbqvzsevxOVpeAEtSSJwAnQ%2FCnyr7zeuoh7wwvrOtwwY6pgGrlmSIFIzqnrUq%2Fax7UH32rdRx6xBX34EkoFGya9xrP81VuouuUi4ajZOQ%2BiIyPgJ42fXiFYj7lz1Kox71joPkK19DTCtRBA2U7EzxwQk4pKaFJ%2FG0kIak93dxjxnCgI9e5Rb2SyxSuXmEZmxBdG0F%2FqgqCj9RMnqLQS9vNkIBEBjwEYJO%2FCr7m9ImUgYddMCUnPV%2B6gdnRCjWHcGxlmYcbiK4wHj5&X-Amz-Signature=e39bf337ab57efe43e4ff5d06626e9f593012612a18f5da3f56ef291012386eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PIVBWPS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDlk9QbtdN7NGZM9GA1lHjiqOfhZHJ7Sn73FRTSj1RfkQIgQvZ1e%2Bm1rNtwJXlvMmtoUDyQ1jk6gMrZJrI9dpBn3XAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPLJq%2FXg9j7u1kOVUCrcA7a4dwcUwikXq9sgcsyswnN7PyLt%2BiI1xHxJglwJRm3wvfkThXlSm4yEWO0f5Xwck%2FEJAjobQv%2BSU%2BaU6mutYn%2FSVULoooPaUhFdV%2B6tyUtKKiQq7QiTKv6h7qbjPFfNbPZg4EpmHIhZpZexgteOK5kYB8pT06hFe1DlYFzoKlm4aDuL%2FGoxomsHcSmRUUFJP3A%2FWLllU%2BJZmXs2QfXIO%2B0Dw5B95nYfXjmCJxP8VmaTrtYL%2BC2R2y2CyI9qE49w55veRqbYDH5b0JYKb4LX%2BLdpwRktxjzlJoBdw9MJDoHZuXpGt2EXTcFtOegWuSdCpW3gbgPUeaisqBBUNSwdCaMXYA4wHX1k7E3mphVa1ItAPeSI85K2BiG6SYpo1X99bstu4I2KmAOYRIBCf8q0u%2F9TMuHMjEfiHsVrWTDSGtV%2F4w5ONriqg2ZGALQqti2qORaP%2BePSeG176jFh%2FEg8iMimVmfsseyvd1SvBQNz1GFQFy7od3VpPJyBIa3Hq0F07Vps%2FnDAgD7zU90zEIwg8AmXhZNWmc1EuFWfaveA4UCAlzEx25%2BGL0aYACE6ge68BoaMvJljWB164dlfQBINKETA5R8rC%2BOe1NtFW%2FSTeIvc7YfdyVgB6wR3kBiLMI22rcMGOqUBdovaoQSMJVwNes5lP86DjaWSJhONM41kTB4Y3RT4%2FbjmprXpALWRfGDJZRbkfQhOGuaU6BiO9xMBgBShs2T0K9KlwWAVXhzgc6897nDT%2BxEPTKoShrJesDs2ZbDQqsNccKEr67zDfTJhDR6xClZqy1iIF7k5LWD9Cwt1MjJvaMDr8jPjL8e79iv%2BGd7zvT4Wz6g2nFabXdUtroOHdjRvlmkdz%2FOs&X-Amz-Signature=14675e7fcc048be6a4747ca58fd70aa7b2002dc9186e8d8c44201a0decf9c042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSFUUEN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCdeY%2FT6CS2dfIwRKzHOXrSrtqzRMvldfcYwIEIoOcZqAIgYQlIhTDuj2Tnwyi2tu6p%2FKKxbOnl1I2znF%2FbNXAfolEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCOy15SNLQu8T18fhircA4%2FEbeN9U9ftpiQbNC%2BXO3kuY9cap95xu8TeB%2F6zsq9lJLdwQFD9af0vKHoN6C1s1I3AzsxVsYeYXHp63mi1g9%2BFSy6jf9uwBkmvtxq8AfXQfGT0cTi7IqdBuzERK9KYTpfyVXqwjeXWyJHomZJLvCDGaoUmrRPtLnT7sxiuET%2BLPvvINC%2BRIdQjjQcRkOOlYXs4EiVqFOYIlfUfaNySey5km0ppCMQaIvNzR9rPSHfb0RlSe8fZ6eFiQYKIZcV2qqSUs1HxahQtpu1GIJ3U3ze5Mv%2Bs3Rur96ioxbgEfVPHSWl59afUxWB%2B0HmcFR5mI%2BZMxiir2MmnaGaTlEaqVZbkeZrQzdyCbPwUkkbLvswofAgedYmQOWupnLBqbF3mvdYMv1g%2Ff1NRb2BaTITGbrrcu%2Bp0nA4KBG6rzcoDRZswfIjbzm5yf8l%2BnPNVN9Lcp8bsGnwb3YSrDYmCqTj%2BW87SJbNfoHc4r%2FznomoJDjfis9znVYTCFI6ZgPBWBAIfKP4L5Zud79PDPbMSH4GFCTjHfFCMIhbdfrd7H94NJvuUtE1xOBRxT7hRDmKIgknPO7G8V%2F%2BQRgRLLN7yAn1Hq3NDSAfsVmdNNdFeFKTDXwuyoArBY3aaYyXXkaUWMPWurcMGOqUBYZ5st5il4Lk16Dcfog%2BfdgwQVYzXLO32Z3jQRkPGiEOaoF3aui8mA2GAlusQjUpnbXYuZiPKdUuJvnDA9vdq3K6P16h3zHy1U61sDoHKPe3RLoq%2B7h8Qp4mctOnu7YgMcfpxL31hZnk0NTcsjmVQ2SzUu%2BPCCOn6voaLFHrHbCHoqGxi8%2F%2FHbpsGFb3%2FNZuHI4NmWwrPycVw5AW3gYSqBlt3aSBX&X-Amz-Signature=60645638ad99538b982048c85727833ca998058cb4520dc2c091e8b2a3cbef66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
