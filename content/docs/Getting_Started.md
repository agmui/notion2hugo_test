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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PAW2VD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaQuE8K0PWXJqGgT0R8qAXrLqASAgS%2Fkh%2FnjQ73nXdiAIhAIuQPMutBgTB5wPFh6sybUH%2BU6Bun6wDJpa%2B7IEdSq2UKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2BIS9BfxES%2BFJ4Rwq3AMgU29PhOVay5vIVDDYBjFGYW5%2BIzFSiT31qGSVYGJcGWGM826u6fSmqsfgmn4pBj4gOSEpuQygqnbnQ0x%2BfL3BAAZ60ndKfHpxUZAeyBRfnod8rwkXVHSY3z2HporI1jp%2Bnub2mf80kt2EQbWS76P%2F2B%2Fg9sGy5zrhqvE3ZrYptkA%2FdMCb499CvPempum0LmtyF1bl6BKMN18DX%2B%2Fc2OHrHEa0lFzIqhGYycYB9t54Cm6hWstvTYPCz7rfEXKkpXxXyj0B%2Bt8TjCgYgfxTUKsVZi0yrc1bRqfw007fVCTJBN0qXIYU9z5mfHxlCJVOahhfKKuWHm4dXsMokidmNC8eAVkoPXaBWdZu69ho0ELR3dRo%2FGfE2JAEuCI97f0oVahphNw13sOa8LoMSkTUxnfejZB3kQ81dbggzcrfD38m%2B5lTRZf9zH6E2Y%2FVwiRW2c9FUPSPlJ6ACqL239Z36zkHqHehdE8S%2FnHyKELj0Jg3C1F3m6vekRycoNgcdtHFJjHwLM3nazmdMQI%2Ba%2B68IR9KkPhaNQVeB%2B1m9rfw50Jgwd2OYIU69bWCpupRQgQYJxVhnL3RmOAGWcvFLlWKbvQZtf%2BlFgEp6%2BYEhT0LJBIbjzYseYKQ1rBBg%2BMsFjDysp%2FCBjqkAVa7K5v%2BPHz7pTL21oE6POI%2FJ4UmooU55ov%2B%2FqzrDBraqLY%2FKPrESz7aB1H6Y49BDpJDlsvOZgRp%2FJVGS%2FTveblycIxLNMq98mvf638da1XLiKo44y9rG%2B%2Bo5FgRo%2FUW9nX0IgBq7UMyvcMXr2R0CgHkb%2FolSNkVpO%2F63ZPw4ZVRHdX5c17egAgLp7PGV2zruJAjs9c%2BOrPs3s9RKEVZzQ278Tr5&X-Amz-Signature=84be1f7391eabe2219cef58f99f7459c20c7238556d5dab8e50041d7b8852928&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PAW2VD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaQuE8K0PWXJqGgT0R8qAXrLqASAgS%2Fkh%2FnjQ73nXdiAIhAIuQPMutBgTB5wPFh6sybUH%2BU6Bun6wDJpa%2B7IEdSq2UKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2BIS9BfxES%2BFJ4Rwq3AMgU29PhOVay5vIVDDYBjFGYW5%2BIzFSiT31qGSVYGJcGWGM826u6fSmqsfgmn4pBj4gOSEpuQygqnbnQ0x%2BfL3BAAZ60ndKfHpxUZAeyBRfnod8rwkXVHSY3z2HporI1jp%2Bnub2mf80kt2EQbWS76P%2F2B%2Fg9sGy5zrhqvE3ZrYptkA%2FdMCb499CvPempum0LmtyF1bl6BKMN18DX%2B%2Fc2OHrHEa0lFzIqhGYycYB9t54Cm6hWstvTYPCz7rfEXKkpXxXyj0B%2Bt8TjCgYgfxTUKsVZi0yrc1bRqfw007fVCTJBN0qXIYU9z5mfHxlCJVOahhfKKuWHm4dXsMokidmNC8eAVkoPXaBWdZu69ho0ELR3dRo%2FGfE2JAEuCI97f0oVahphNw13sOa8LoMSkTUxnfejZB3kQ81dbggzcrfD38m%2B5lTRZf9zH6E2Y%2FVwiRW2c9FUPSPlJ6ACqL239Z36zkHqHehdE8S%2FnHyKELj0Jg3C1F3m6vekRycoNgcdtHFJjHwLM3nazmdMQI%2Ba%2B68IR9KkPhaNQVeB%2B1m9rfw50Jgwd2OYIU69bWCpupRQgQYJxVhnL3RmOAGWcvFLlWKbvQZtf%2BlFgEp6%2BYEhT0LJBIbjzYseYKQ1rBBg%2BMsFjDysp%2FCBjqkAVa7K5v%2BPHz7pTL21oE6POI%2FJ4UmooU55ov%2B%2FqzrDBraqLY%2FKPrESz7aB1H6Y49BDpJDlsvOZgRp%2FJVGS%2FTveblycIxLNMq98mvf638da1XLiKo44y9rG%2B%2Bo5FgRo%2FUW9nX0IgBq7UMyvcMXr2R0CgHkb%2FolSNkVpO%2F63ZPw4ZVRHdX5c17egAgLp7PGV2zruJAjs9c%2BOrPs3s9RKEVZzQ278Tr5&X-Amz-Signature=ce7664056de7f25d563b38db4094d1956d2d83f533ddf8ad7eb97aee7c3543c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PAW2VD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaQuE8K0PWXJqGgT0R8qAXrLqASAgS%2Fkh%2FnjQ73nXdiAIhAIuQPMutBgTB5wPFh6sybUH%2BU6Bun6wDJpa%2B7IEdSq2UKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2BIS9BfxES%2BFJ4Rwq3AMgU29PhOVay5vIVDDYBjFGYW5%2BIzFSiT31qGSVYGJcGWGM826u6fSmqsfgmn4pBj4gOSEpuQygqnbnQ0x%2BfL3BAAZ60ndKfHpxUZAeyBRfnod8rwkXVHSY3z2HporI1jp%2Bnub2mf80kt2EQbWS76P%2F2B%2Fg9sGy5zrhqvE3ZrYptkA%2FdMCb499CvPempum0LmtyF1bl6BKMN18DX%2B%2Fc2OHrHEa0lFzIqhGYycYB9t54Cm6hWstvTYPCz7rfEXKkpXxXyj0B%2Bt8TjCgYgfxTUKsVZi0yrc1bRqfw007fVCTJBN0qXIYU9z5mfHxlCJVOahhfKKuWHm4dXsMokidmNC8eAVkoPXaBWdZu69ho0ELR3dRo%2FGfE2JAEuCI97f0oVahphNw13sOa8LoMSkTUxnfejZB3kQ81dbggzcrfD38m%2B5lTRZf9zH6E2Y%2FVwiRW2c9FUPSPlJ6ACqL239Z36zkHqHehdE8S%2FnHyKELj0Jg3C1F3m6vekRycoNgcdtHFJjHwLM3nazmdMQI%2Ba%2B68IR9KkPhaNQVeB%2B1m9rfw50Jgwd2OYIU69bWCpupRQgQYJxVhnL3RmOAGWcvFLlWKbvQZtf%2BlFgEp6%2BYEhT0LJBIbjzYseYKQ1rBBg%2BMsFjDysp%2FCBjqkAVa7K5v%2BPHz7pTL21oE6POI%2FJ4UmooU55ov%2B%2FqzrDBraqLY%2FKPrESz7aB1H6Y49BDpJDlsvOZgRp%2FJVGS%2FTveblycIxLNMq98mvf638da1XLiKo44y9rG%2B%2Bo5FgRo%2FUW9nX0IgBq7UMyvcMXr2R0CgHkb%2FolSNkVpO%2F63ZPw4ZVRHdX5c17egAgLp7PGV2zruJAjs9c%2BOrPs3s9RKEVZzQ278Tr5&X-Amz-Signature=4030d3b93d9c5e2673ab33b335899f1d79e79706a6ed5e19e6b33b63341800b1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QFA324Y%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjASRayeBgqyaaG1j%2B64BLuY8j7wYHv04%2BxpmTcfUMbQIhAOxoGvgDc8Vcke%2BNVLitcLq3nJeon0R0T2eank2NIxUfKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqBesNQcujIuBf5Z8q3AMuEeFbWj2gq1BjxwEKlGYqBVU7cTZKxxFr4xSnS0PEl898ZFwLMSwmRG0ojBaPRA0u6dJ5maxF%2BljSTKD4ffaS%2FEmvtx%2F%2FCbH%2FWxy%2BgW4WdEKR7orbf6h5xfzkLGHhHgjYv9W%2F5Q0OJ6XIo5VmNE5HBQOOm9MLZDtiwyFrCYHBtWCKC46hX69%2B4wXioJj1HW9AgUAXAWehbKZDD%2FtTqqfHKdP5zNixtHddHpbIAP5DP0Mccb4CPj6ZgBlOHnsaVziaftslSCmvmnR992oX0CV5wgCC%2FtV%2BIz8DVe0GdmsQ9ZAlmph%2BOzTEWg70Jg9szoynIg6OewXHhpIe92T6HLp8p9tuNro5K8N2oswpAxam9WEsAhRtNrTLtlumGeJnijg15Tklppc%2BsJ9w66y6rJTX5BvcsBkU2iwQQ7NaSRQj7lUB0koYLdogP23%2FNQq4Lnh20ce8VLZX%2FVj92jj%2FoWKhJUHTS%2BqsB6NRPNvR4UaJ0MTIVrFMVGSb6jx3CNyZnp3%2BUvCQvjXLybHH3MyPXVrrA6ZXyU2hDwlP27YeXR8lHycDEV%2Bq9HT2cc4CwFhmOBFkzjq0UVP6vzHIicKsmCL1If%2BYh3ZY3s%2FkdlC53NBEUfGVLkoHKcEA91XK4jC9tJ%2FCBjqkAXett8hRrBCMWH8%2F01F2XBN1%2BC3u8o89Gy1Ha11O8jAEpmVdItZG7FFGISassWHluAXY2i%2Bixi9jY5%2FHIaEPtnLctb%2FBlpjRLNNDpcD%2Fpyy95V1MSmVaePRn2RdDxfMUjvugbhv8iw3dmitjW3Y%2FUAd5AG5NZDq3yezF%2BPyFlpsFlTI2ieVAkaF4dqlMrV0yLtpuPFIgNAI2Y2CNXW7C2pxCj3QT&X-Amz-Signature=596cb2b3692823a45bd7a3537c17dcb62cedbf86eb7eadad7b3f567dc14203cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDU7INMG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvdNG8OBQyYIRdfKZda9D77tArSrWLWsBTJYcfaST07QIhAIu%2FmY0gVHTO9flJ05YoJMich1k4%2FByDv7cwGifiH5reKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyer%2BOhjyADDs7Afq0q3APUVWzyJN9xSAcDo%2FQeZZrrJW8gY3vnmq0ebgCaYFMTLrSiXElHhL7FL1HuCmYjWtuw9xiMk7YpO6s52pnddvPTnXmMizRbM6ILrXJkWgLzzCZ1p0TfqHVb6kDazrJedURNQJ%2FKULY4FShAw970smQBmKEmxC26iSgwbmgX8cgGtiGCFUc8N%2BkGefEMFFh5%2BQxMWFD1HETRi99nuQv4jUcwmLQ4of3C8n6iKleVLFo%2FyxxKEbxreTd24ZqJiQm%2BFFl%2FsXBAqDrb7vc0mwKGwCVs1xC7Bp3aOH7rR%2F9BC1nTiXd%2FD7uhfbEAr%2BLYOp0QsyNMf6S83UXsPPum0wydbJ%2FnyY1VZiplQa27wEfwzCtZefk12BLgCtJFn9E3DZKkBESKs5gTmRr495iRhedoQYswPeCeB0KJFuZUpNgrNo7NyKXbzZWLGEtt25NU5kcy%2FyFdZYD%2FG97s6tUUbCq6og1ndwISQaBq7S5vKpsLCZUpHEhhPUkGM7Ly1NFbvKZvBK6Ljrzq0px87tsKFOayC04roUtoB2JNvBgp7%2BpVDrBnV4SfHBgQAOndPa33gQ54iVP9u9nNG%2F8P9HNTDB98WeBVT27CmXNzjsyPgTukIT5fdexQ1%2FpUMEGE6UK%2FrjD3sp%2FCBjqkAaHPyRuEO2DWUeuyJoaqa%2FSy0Oo2EZ9R7Vsdxld%2FLNFaEKFYujY5pvk0o3JAeG%2BqU4kbk8drIAkmuvGsOgn9FZUCD68keP3XeVg862qNAaBCBxUTpk9STaFnhNfy57GCXMMSzYbfrhC2inP0PPbLZaI63f1s9DskeY4qQibT6yvkMBADHOfyTGZ6N1fT4hPQZYYFaV1QufuZdvgFkmfwVME4PdrV&X-Amz-Signature=52aed2cd654ade9b8ea61638debca7f00988d6b698f761f35fb558527acf1507&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PAW2VD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaQuE8K0PWXJqGgT0R8qAXrLqASAgS%2Fkh%2FnjQ73nXdiAIhAIuQPMutBgTB5wPFh6sybUH%2BU6Bun6wDJpa%2B7IEdSq2UKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi%2BIS9BfxES%2BFJ4Rwq3AMgU29PhOVay5vIVDDYBjFGYW5%2BIzFSiT31qGSVYGJcGWGM826u6fSmqsfgmn4pBj4gOSEpuQygqnbnQ0x%2BfL3BAAZ60ndKfHpxUZAeyBRfnod8rwkXVHSY3z2HporI1jp%2Bnub2mf80kt2EQbWS76P%2F2B%2Fg9sGy5zrhqvE3ZrYptkA%2FdMCb499CvPempum0LmtyF1bl6BKMN18DX%2B%2Fc2OHrHEa0lFzIqhGYycYB9t54Cm6hWstvTYPCz7rfEXKkpXxXyj0B%2Bt8TjCgYgfxTUKsVZi0yrc1bRqfw007fVCTJBN0qXIYU9z5mfHxlCJVOahhfKKuWHm4dXsMokidmNC8eAVkoPXaBWdZu69ho0ELR3dRo%2FGfE2JAEuCI97f0oVahphNw13sOa8LoMSkTUxnfejZB3kQ81dbggzcrfD38m%2B5lTRZf9zH6E2Y%2FVwiRW2c9FUPSPlJ6ACqL239Z36zkHqHehdE8S%2FnHyKELj0Jg3C1F3m6vekRycoNgcdtHFJjHwLM3nazmdMQI%2Ba%2B68IR9KkPhaNQVeB%2B1m9rfw50Jgwd2OYIU69bWCpupRQgQYJxVhnL3RmOAGWcvFLlWKbvQZtf%2BlFgEp6%2BYEhT0LJBIbjzYseYKQ1rBBg%2BMsFjDysp%2FCBjqkAVa7K5v%2BPHz7pTL21oE6POI%2FJ4UmooU55ov%2B%2FqzrDBraqLY%2FKPrESz7aB1H6Y49BDpJDlsvOZgRp%2FJVGS%2FTveblycIxLNMq98mvf638da1XLiKo44y9rG%2B%2Bo5FgRo%2FUW9nX0IgBq7UMyvcMXr2R0CgHkb%2FolSNkVpO%2F63ZPw4ZVRHdX5c17egAgLp7PGV2zruJAjs9c%2BOrPs3s9RKEVZzQ278Tr5&X-Amz-Signature=c7a4b35e5e9940bff3879de3c591fff6b46fc2a6826c16743df8b1ac71410a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
