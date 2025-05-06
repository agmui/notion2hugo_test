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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXSMCQBC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuNPFXAPLXhcquNmPXcn62HZuuMkMvgndaKVzeOmNHVQIhAOL2pVWs%2BPmRRjf4ZDBlVmHEwyoxvHXNjUBDRUmTPgrFKv8DCEwQABoMNjM3NDIzMTgzODA1IgyOUhaFc9EW9ZcAtjgq3AOcjlEnfdhOM61KgEl849khtkkDufFgdH3sTUkEYOkuTw3ZOsKHkS5wyi135TJhE7cJX966ZJ3Z2zOuTBVY0Tt2r0C2q9K4MM7Ay%2Fg7ycoGq55ugSH1PqMC97f7Cqj0xmv3F17d8YE0Pw5F02S%2BiFDckkig3igoWBsAhu8IsZP3ncYBbQSUjaZhsWI%2Fxdp59bzVpXmSJTw6yr8%2BrtPbTCYhIjm8%2FB6Qs78MkJFsaO8fBzozWVF91wl6%2BLORohPF2vePHqrWXJk8%2FjsmQR8OthlAsK%2BD8aoqI7HKe2gF7ockUoo5Q9l6b%2BQ%2BD1%2BN2Omt8YsbGvkY4xR51qD%2BE9%2BmbB8YJ7SPfWRW1x%2BBK86nh%2BGfVgXTPsh8DwsoSgpr4GTCEpkcvoZlgjsLisie9X6VNsW1Sr%2FxiAy751hzkK9XBudLva4t64p5VETNj1y7DLMgMFt8bM6aRj3orsp9M3KkxCWR6J0AgHLcKj0QgdN15da2ARwokyUBUamSP%2FrKbWb%2BAhD4zeuOP1Wf2EBeBVAXvy0%2FzZHkBMrtAIznop65%2BRg9Ldp7NcOT9InwKwLGDbUqfCQAEPJEAWXUGaxIDoBcJurE7XhpQawV6a%2F5Vfd8kzLEcmDy9zWEbiOoJutDXDD0s%2BnABjqkAc7l8dTDW75plf%2FvNenOQiTlIkZB1F5Jwn3eF8vSV71slsSYfSPvDMcjNHhOfJPgP9S9lMSn%2FIIBczy%2FbAVgSkepHLOGyoYhhkuITTVPqZ6CV4qr5xpiQ598NMTs2bLehhq5cQwmWsOOpog6R%2FMVEfKJ%2F2Cgq%2BbeWGndKl%2FjLkipZxWwLAroXrHuCL9jGqvP2GonQdFxbpXfYFQixj8t011VLiFb&X-Amz-Signature=a57ccead5c9c621404745810ff34dc11962a71c5698f0c983266138fbbea25d5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXSMCQBC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuNPFXAPLXhcquNmPXcn62HZuuMkMvgndaKVzeOmNHVQIhAOL2pVWs%2BPmRRjf4ZDBlVmHEwyoxvHXNjUBDRUmTPgrFKv8DCEwQABoMNjM3NDIzMTgzODA1IgyOUhaFc9EW9ZcAtjgq3AOcjlEnfdhOM61KgEl849khtkkDufFgdH3sTUkEYOkuTw3ZOsKHkS5wyi135TJhE7cJX966ZJ3Z2zOuTBVY0Tt2r0C2q9K4MM7Ay%2Fg7ycoGq55ugSH1PqMC97f7Cqj0xmv3F17d8YE0Pw5F02S%2BiFDckkig3igoWBsAhu8IsZP3ncYBbQSUjaZhsWI%2Fxdp59bzVpXmSJTw6yr8%2BrtPbTCYhIjm8%2FB6Qs78MkJFsaO8fBzozWVF91wl6%2BLORohPF2vePHqrWXJk8%2FjsmQR8OthlAsK%2BD8aoqI7HKe2gF7ockUoo5Q9l6b%2BQ%2BD1%2BN2Omt8YsbGvkY4xR51qD%2BE9%2BmbB8YJ7SPfWRW1x%2BBK86nh%2BGfVgXTPsh8DwsoSgpr4GTCEpkcvoZlgjsLisie9X6VNsW1Sr%2FxiAy751hzkK9XBudLva4t64p5VETNj1y7DLMgMFt8bM6aRj3orsp9M3KkxCWR6J0AgHLcKj0QgdN15da2ARwokyUBUamSP%2FrKbWb%2BAhD4zeuOP1Wf2EBeBVAXvy0%2FzZHkBMrtAIznop65%2BRg9Ldp7NcOT9InwKwLGDbUqfCQAEPJEAWXUGaxIDoBcJurE7XhpQawV6a%2F5Vfd8kzLEcmDy9zWEbiOoJutDXDD0s%2BnABjqkAc7l8dTDW75plf%2FvNenOQiTlIkZB1F5Jwn3eF8vSV71slsSYfSPvDMcjNHhOfJPgP9S9lMSn%2FIIBczy%2FbAVgSkepHLOGyoYhhkuITTVPqZ6CV4qr5xpiQ598NMTs2bLehhq5cQwmWsOOpog6R%2FMVEfKJ%2F2Cgq%2BbeWGndKl%2FjLkipZxWwLAroXrHuCL9jGqvP2GonQdFxbpXfYFQixj8t011VLiFb&X-Amz-Signature=a224bb2bfcf4f096644c85b2f681fccae0de21f8f13d4bdde27f249a00fd975c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXSMCQBC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuNPFXAPLXhcquNmPXcn62HZuuMkMvgndaKVzeOmNHVQIhAOL2pVWs%2BPmRRjf4ZDBlVmHEwyoxvHXNjUBDRUmTPgrFKv8DCEwQABoMNjM3NDIzMTgzODA1IgyOUhaFc9EW9ZcAtjgq3AOcjlEnfdhOM61KgEl849khtkkDufFgdH3sTUkEYOkuTw3ZOsKHkS5wyi135TJhE7cJX966ZJ3Z2zOuTBVY0Tt2r0C2q9K4MM7Ay%2Fg7ycoGq55ugSH1PqMC97f7Cqj0xmv3F17d8YE0Pw5F02S%2BiFDckkig3igoWBsAhu8IsZP3ncYBbQSUjaZhsWI%2Fxdp59bzVpXmSJTw6yr8%2BrtPbTCYhIjm8%2FB6Qs78MkJFsaO8fBzozWVF91wl6%2BLORohPF2vePHqrWXJk8%2FjsmQR8OthlAsK%2BD8aoqI7HKe2gF7ockUoo5Q9l6b%2BQ%2BD1%2BN2Omt8YsbGvkY4xR51qD%2BE9%2BmbB8YJ7SPfWRW1x%2BBK86nh%2BGfVgXTPsh8DwsoSgpr4GTCEpkcvoZlgjsLisie9X6VNsW1Sr%2FxiAy751hzkK9XBudLva4t64p5VETNj1y7DLMgMFt8bM6aRj3orsp9M3KkxCWR6J0AgHLcKj0QgdN15da2ARwokyUBUamSP%2FrKbWb%2BAhD4zeuOP1Wf2EBeBVAXvy0%2FzZHkBMrtAIznop65%2BRg9Ldp7NcOT9InwKwLGDbUqfCQAEPJEAWXUGaxIDoBcJurE7XhpQawV6a%2F5Vfd8kzLEcmDy9zWEbiOoJutDXDD0s%2BnABjqkAc7l8dTDW75plf%2FvNenOQiTlIkZB1F5Jwn3eF8vSV71slsSYfSPvDMcjNHhOfJPgP9S9lMSn%2FIIBczy%2FbAVgSkepHLOGyoYhhkuITTVPqZ6CV4qr5xpiQ598NMTs2bLehhq5cQwmWsOOpog6R%2FMVEfKJ%2F2Cgq%2BbeWGndKl%2FjLkipZxWwLAroXrHuCL9jGqvP2GonQdFxbpXfYFQixj8t011VLiFb&X-Amz-Signature=68a1f79f579185c2de8c48f8597031b471ab6db8171d7e04a433e24a56e88787&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466643DRD7E%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETom%2FzyhHZgUkom2f9902PZXq8VbeeOWkXMoRLLLLhCAiBq0JoDmLozKHi8Sv5Tqof2xA4%2BuPPbK3%2FxFQSik%2BIyqir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM2PvQmWJ0yHXBXeGpKtwDNQiCkn%2FQp2oqYsayIWcWULkAWAA1DPHJwjTmo07rlYrktwSRbD4L5m%2BRghHfVzOmdsTWNp%2FnO7%2FKtMz6CJiX7lXmfat%2ByBU5tTtNqu5OniuUbfP2o0WKKNRSPM1%2FjX0JQ2%2BxTLlUIKumJFrGKX3gM%2BJpoOFVtmsxNMqxZH8AuYJ3QyKGzetYu%2BUQdZ0Iu3K1WsNugH%2B3aFU%2BWjyQiFiqyH%2FhCQqK6kmLVka029QwcHBRl%2BW2scKNVP%2Bnjk7L4hor9JvhYTZCm6%2BZ09AIKqetfYuVqW4TOFgwpvZcWXdYN3ayp4L7hYIfxceQ%2BqzWwWTjrcxIA6%2BUdCRCrfIVHdsnk6JyGl0LoKjhrJdBhfe9GOvO4a3qz0szYQew9IwLd3%2Fb%2F5DbiNcIQNjluJtgBvPYd2ca2uCIxSdCI83iCxl58NFFwi184UCO%2FrlIF06AYX2m9EZi0SH3febma1dbGL6soA1no%2B%2BGCsesNfRucGMW3VgXtpTd7NKcyIT3EJu9DxZ74RQYal3wC8b1f9L5BGyPjpqMqroQo4XxSugoEPFBaMX5DUvTI243p5V7QgnGIUCahsuF2537%2FhJlFSYlWJjKWaXZ8xFowkpSpVddpO3KKXwBXnukM7AkXwiKCN4wirTpwAY6pgEk0D%2FJQjDSxU6VaodilnLo4I9p1qEcWbvkjhb3KpB5eBK%2FwxCM%2B%2BJ9DArWQuRhqg%2Builri6ohHlefmk9GnTEDu%2BbsIqK39Eal5A4oDAW2TN%2FEAbCzCqMfQwjFvMMXIuhgG0qR99YxW899BIzX91meJV6BFh0YoMHKPN6mUbHF7hjt0xa%2B4f%2FgXYbacQ6wDFAIw1C1J4Iasd5jCcXYYjVVCXL1FnkvU&X-Amz-Signature=453978235ecad0a105bebcbc839747864fca7365881b108dfc40579238445b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOBGUFYZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMaSmLOAYYqIJZBq0%2BDJkUGnD5kvj9VeN1llzlrMBhpwIhALVHEo0bIkpP0VB4a%2BChE9jTg9XhTShvGGJkE34yjMm2Kv8DCEwQABoMNjM3NDIzMTgzODA1IgxYPieF9IjSTBIQvysq3AM71EQE7xO%2F%2Bra2K7%2F%2FaIcebgEaWMMNqOYBPpMALX33Al023Kk11MOUqIQJJTOTGvrpdQiuazi5wJ5P9VbjlRgXx8bzMV8Ldhwwb9BuJzddvGKieVxpuSpHjW%2FaJHeSemo3UluUCSCe9kh7FbARkRWqHqoQu1tX0YToNiDH8bq5YK0p7ey7vghw00recw3faSB36XhCVZY7y6qrWjfcPvf3vIwCwq%2Fr4A8YbvlfvmpAvmEOKoqGtzwdDmBayoaGzs1AMn26%2BJo9RHhskRj30wFaBZSUhIQAWBdDS3fJFl7UpfSEP5LYcz2Q0jNditdMpJeLWyDxiXcUKtNqxKeoGIO50QlrUEtASoeQLubALa7VbHN2hLh%2Fk%2BQ1x%2F3wqHxrQcndNl7AHp6xsZzFbFiZOC0ZuuqGYOzArg6wLPiu9XvlU%2Blmb1YKnZ%2FegAPUeBcYk4MlX%2F2jMM%2FAVQui%2BE8NAvvza0c9x%2BWqMKYw54M4JNu910gGdcP8v7EPYAiNiajLw7yLBAqOBVvJlSHd91WyueK%2FNMVbeAUTeSRMsY2z5OvGo9NQMRtBV%2BOWczAzylFfnoXIbXZkmkZrNP802aqsfcDPYH1qSBtR6T3EcCZjUtK4mkcxEJhR23qaqcwPiTC2tOnABjqkAcruKH5ImWSLTCWI5zHzHxHsCYD9AtiozUckQrJG8EHqXdal91G%2F0kayjJ2TRgVeczd9jjuvK1h%2Fmud18RFrSVkZw0OA5Sr8jERWlv4gcwbgPnAuNVbuyvJujeIIIhJBZThM6uLwoH5Uk6xIUqUN%2FVNwWuEZ2FILVv0sNTvMILETk40L%2FZu3uBdAx68dFhJHRdAYgqZnbjZ3CfhISmeZ6EKbhZD0&X-Amz-Signature=c427ab77c6b41b8ae836f0fb2a6443869c225bd0d38f65a70832711474df4d39&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXSMCQBC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuNPFXAPLXhcquNmPXcn62HZuuMkMvgndaKVzeOmNHVQIhAOL2pVWs%2BPmRRjf4ZDBlVmHEwyoxvHXNjUBDRUmTPgrFKv8DCEwQABoMNjM3NDIzMTgzODA1IgyOUhaFc9EW9ZcAtjgq3AOcjlEnfdhOM61KgEl849khtkkDufFgdH3sTUkEYOkuTw3ZOsKHkS5wyi135TJhE7cJX966ZJ3Z2zOuTBVY0Tt2r0C2q9K4MM7Ay%2Fg7ycoGq55ugSH1PqMC97f7Cqj0xmv3F17d8YE0Pw5F02S%2BiFDckkig3igoWBsAhu8IsZP3ncYBbQSUjaZhsWI%2Fxdp59bzVpXmSJTw6yr8%2BrtPbTCYhIjm8%2FB6Qs78MkJFsaO8fBzozWVF91wl6%2BLORohPF2vePHqrWXJk8%2FjsmQR8OthlAsK%2BD8aoqI7HKe2gF7ockUoo5Q9l6b%2BQ%2BD1%2BN2Omt8YsbGvkY4xR51qD%2BE9%2BmbB8YJ7SPfWRW1x%2BBK86nh%2BGfVgXTPsh8DwsoSgpr4GTCEpkcvoZlgjsLisie9X6VNsW1Sr%2FxiAy751hzkK9XBudLva4t64p5VETNj1y7DLMgMFt8bM6aRj3orsp9M3KkxCWR6J0AgHLcKj0QgdN15da2ARwokyUBUamSP%2FrKbWb%2BAhD4zeuOP1Wf2EBeBVAXvy0%2FzZHkBMrtAIznop65%2BRg9Ldp7NcOT9InwKwLGDbUqfCQAEPJEAWXUGaxIDoBcJurE7XhpQawV6a%2F5Vfd8kzLEcmDy9zWEbiOoJutDXDD0s%2BnABjqkAc7l8dTDW75plf%2FvNenOQiTlIkZB1F5Jwn3eF8vSV71slsSYfSPvDMcjNHhOfJPgP9S9lMSn%2FIIBczy%2FbAVgSkepHLOGyoYhhkuITTVPqZ6CV4qr5xpiQ598NMTs2bLehhq5cQwmWsOOpog6R%2FMVEfKJ%2F2Cgq%2BbeWGndKl%2FjLkipZxWwLAroXrHuCL9jGqvP2GonQdFxbpXfYFQixj8t011VLiFb&X-Amz-Signature=4f0e610da4c630b20a85105b769761c42cbf4be4f5814f66bf6ee6c041baa29c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
