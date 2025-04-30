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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV7BVLT4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDpTRMQc53yZSy5wWOhkYR6Tah9TvWdBID6BfuAOIjTjwIgb7Wb6Zyk3SQdf3L7E%2FssktYYM%2BAZwQZlFamt5VfmZSkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwQu%2F0wCKEqib%2BTCircAxfE8XXQuEyLMjcpmAGPzCMFwFjG44nAzDRWsD6YQm8uwJKH%2Bp4XRTD3EZVOrETyizof33a0cvaDYO6UDl62TN3ZLYBdcVnqyOAkPzc9xHi005VdSgozMiqkMzKlLeVs%2B7PLGDdmhMr9e3fcRMfZnttQAADUIt1hjt1TG%2By3JJcvU2TUF51KOD4hyL%2Bi%2FAf0BTxE20mrf0YWJJiJmVxHqoCtgjpUGwdAwWViPnIFuelcYW3MAAfYhZOUMUd5sG6iHwshjHuxMH9SHBsAYFkgbUVXXmNMVqdgK7WGOprFC0sneqMebcCcOE31GiEIuMyK2qrHOEyyaeeykCxXJjShgfTmBJRXsXQ8V8rO56lw09cHxUPtzfeqrpF0ZJAvmcryNZmfkxC%2F5livZweXchl8rS7OKW%2BmLo4%2Fc8Tz%2BVHv%2BhpNRefh7b1d3eqkLfbIQXtQ6o%2Farbni7dSon%2FbxGFqIu6LNAgs0byXRDHwO0g94OSYWpUG9wCbBL727vT1rtGuX5%2B6MFOWTz8uR%2F6vWxyqo7f5NDvH5Na9mNndxBShfnj4YoeZDwUNbuZAHo39eyUKkg5Kxho%2BI84V%2FOD%2BOfB1fyIm%2FJDMPVnp0cYZ9mH76OFS9Umx4puNkoV2tgqW%2FMKaRysAGOqUB2ddG1Dsdx8p%2BHbB%2BO%2FIi5pwKyJI0vMdGWrIjIVpVJSadVDLD51HVzTRTakOPxDybslGm5Ni1GJSpy8D39Qfq95S6g131o7%2FtOvSB4s59Yk0AGBsvygKmFoOsjGipc033AO%2BJyEf93oRkyyz6xs%2B5dxGKc4Ts0EY44bdDQGbBZAXMCOktM7KMZqfuKtReOnKxsqCeePKYU88vcd0LI9n8V%2Bl8jAvN&X-Amz-Signature=cba4b15f4aed9c25f86fec6e6186788fdc6d4f301917f53d90487f9f26323d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV7BVLT4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDpTRMQc53yZSy5wWOhkYR6Tah9TvWdBID6BfuAOIjTjwIgb7Wb6Zyk3SQdf3L7E%2FssktYYM%2BAZwQZlFamt5VfmZSkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwQu%2F0wCKEqib%2BTCircAxfE8XXQuEyLMjcpmAGPzCMFwFjG44nAzDRWsD6YQm8uwJKH%2Bp4XRTD3EZVOrETyizof33a0cvaDYO6UDl62TN3ZLYBdcVnqyOAkPzc9xHi005VdSgozMiqkMzKlLeVs%2B7PLGDdmhMr9e3fcRMfZnttQAADUIt1hjt1TG%2By3JJcvU2TUF51KOD4hyL%2Bi%2FAf0BTxE20mrf0YWJJiJmVxHqoCtgjpUGwdAwWViPnIFuelcYW3MAAfYhZOUMUd5sG6iHwshjHuxMH9SHBsAYFkgbUVXXmNMVqdgK7WGOprFC0sneqMebcCcOE31GiEIuMyK2qrHOEyyaeeykCxXJjShgfTmBJRXsXQ8V8rO56lw09cHxUPtzfeqrpF0ZJAvmcryNZmfkxC%2F5livZweXchl8rS7OKW%2BmLo4%2Fc8Tz%2BVHv%2BhpNRefh7b1d3eqkLfbIQXtQ6o%2Farbni7dSon%2FbxGFqIu6LNAgs0byXRDHwO0g94OSYWpUG9wCbBL727vT1rtGuX5%2B6MFOWTz8uR%2F6vWxyqo7f5NDvH5Na9mNndxBShfnj4YoeZDwUNbuZAHo39eyUKkg5Kxho%2BI84V%2FOD%2BOfB1fyIm%2FJDMPVnp0cYZ9mH76OFS9Umx4puNkoV2tgqW%2FMKaRysAGOqUB2ddG1Dsdx8p%2BHbB%2BO%2FIi5pwKyJI0vMdGWrIjIVpVJSadVDLD51HVzTRTakOPxDybslGm5Ni1GJSpy8D39Qfq95S6g131o7%2FtOvSB4s59Yk0AGBsvygKmFoOsjGipc033AO%2BJyEf93oRkyyz6xs%2B5dxGKc4Ts0EY44bdDQGbBZAXMCOktM7KMZqfuKtReOnKxsqCeePKYU88vcd0LI9n8V%2Bl8jAvN&X-Amz-Signature=625eeed2728e51274d31fd653ee095330ae4ecd2ad1456facc7681e2fa51bf18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV7BVLT4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDpTRMQc53yZSy5wWOhkYR6Tah9TvWdBID6BfuAOIjTjwIgb7Wb6Zyk3SQdf3L7E%2FssktYYM%2BAZwQZlFamt5VfmZSkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwQu%2F0wCKEqib%2BTCircAxfE8XXQuEyLMjcpmAGPzCMFwFjG44nAzDRWsD6YQm8uwJKH%2Bp4XRTD3EZVOrETyizof33a0cvaDYO6UDl62TN3ZLYBdcVnqyOAkPzc9xHi005VdSgozMiqkMzKlLeVs%2B7PLGDdmhMr9e3fcRMfZnttQAADUIt1hjt1TG%2By3JJcvU2TUF51KOD4hyL%2Bi%2FAf0BTxE20mrf0YWJJiJmVxHqoCtgjpUGwdAwWViPnIFuelcYW3MAAfYhZOUMUd5sG6iHwshjHuxMH9SHBsAYFkgbUVXXmNMVqdgK7WGOprFC0sneqMebcCcOE31GiEIuMyK2qrHOEyyaeeykCxXJjShgfTmBJRXsXQ8V8rO56lw09cHxUPtzfeqrpF0ZJAvmcryNZmfkxC%2F5livZweXchl8rS7OKW%2BmLo4%2Fc8Tz%2BVHv%2BhpNRefh7b1d3eqkLfbIQXtQ6o%2Farbni7dSon%2FbxGFqIu6LNAgs0byXRDHwO0g94OSYWpUG9wCbBL727vT1rtGuX5%2B6MFOWTz8uR%2F6vWxyqo7f5NDvH5Na9mNndxBShfnj4YoeZDwUNbuZAHo39eyUKkg5Kxho%2BI84V%2FOD%2BOfB1fyIm%2FJDMPVnp0cYZ9mH76OFS9Umx4puNkoV2tgqW%2FMKaRysAGOqUB2ddG1Dsdx8p%2BHbB%2BO%2FIi5pwKyJI0vMdGWrIjIVpVJSadVDLD51HVzTRTakOPxDybslGm5Ni1GJSpy8D39Qfq95S6g131o7%2FtOvSB4s59Yk0AGBsvygKmFoOsjGipc033AO%2BJyEf93oRkyyz6xs%2B5dxGKc4Ts0EY44bdDQGbBZAXMCOktM7KMZqfuKtReOnKxsqCeePKYU88vcd0LI9n8V%2Bl8jAvN&X-Amz-Signature=83a757131d54ca3277ab0a325e80496f9eaeb9339d7fd32d8c94303f54717490&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VCXGXJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBrqyz9gwaPJi6PffKshDpi1l9GAwvJomkfD%2F5Oiv3ArAiEAySyPmZ%2BFGaf6Ncxe4Bhq%2BL%2FHOYbvv3F1XXaWo7emU4wqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Fq5mj7Ab14Cy7suyrcA7CJAt5JmojL2qM9dN9kLttk1eTfoqWL4n8CB1MTUJXr8a9yj5831l2EjbuqAMjDhw5lklbYXQiEbndLLrOZt4o0kk%2BvtRBwEdhJnsGgGuqoKsnnGTcNcSpJP0llYpRrwCps0oN6V6awbhuBg05e%2BxDaJDJDDQwzK3LmmrGUBb8P8eDICwhH9bf1dbzMME8EIOZ9x1k9E5l6HQE0tTGk9FtOC%2FLJJIGwT9vncwj%2BjbcM1zvVRVnYLgSPNPbRTyIkWJmj7psSKo%2Big9HcvyOzt5zdSZPtHn7Zcuwlw3Y07CeN42hupv9YA5TmqVKOo%2FRxBTTH%2F%2B9SrDl3W%2FgllLEP1bP56CAkUbVJL%2F1hLDHFmPVBh34QqwSY%2FlnnrP6gX7OpQaUGuNvyTt0ZVznDz5F3oa%2F3rzoC6IodQQvouooQzEhryXZq1NL9rkJhgAwW46WKJtlCFVg6qDNkPNYZVgk6cbC1omcalkTaZw1o6J%2BeNbnOWNlwWIxaRP%2BHK5a0rfr%2BxVLUvjXwpJxouD9g6MdQGMgTO5un0%2F44llmdcQrdmyiIinQ0%2Bkjv0tEMuX57pMoO1j14X3s%2B23%2FuU7DXN6Vcew7ghgHqxUkQBN5xCdvs%2F3bYSKtfj%2F8WRjJsjMevMLGQysAGOqUBLVxvTQAfM2Wq6jq7KAukYvH2bfZ8cUJVinubi8kgkoN5obxTGLrQ%2FN0AwfdMfNFmwRUzzKorcULSWIHGtM3vl7g0weoF3xKOE7gM3fbxqwcQ5kaGbfTkyUv7kBKV7cAnaabn5Brm842B9dobQsJGH6Q2rBctBG7YNw%2Fw7CYpsZ0J2BXqYRRZkR96tX91qNfw%2Fo09WHEJdh0wYEylHRiWUIir0F1r&X-Amz-Signature=0a1742bf84086df33b427cb6aed4b40c578b43c78e02a712c3158b905980a1fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3TBH33%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIA2As8LeuTO7pkcj1DGbmH%2FrReZXp%2BV9pkcDPGigD7HhAiAbp1Q253sMgRaj5YM878FT8BlvQRUQYeM9sJhdmVDHzCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA12NH%2FOW3A%2BIA4b8KtwDQHLzasNpP8VFHj10sMfN7VrOwtV1WzQwdjayY7adBSCy1g3UnXp9YkH8RhpvG%2FojL%2FQJkgCZbblDXhgdM%2BpoTEsuS3s6YtaM0GR8cpjcII8NjwlbXG2r5MN%2FgPiN9fVnxlo3VbE%2FwSEAUnfrEdzoagDbVvKpx3LMhq8WVmRBMWV5WHeCJ3YolZubf0XewjXtHGnyN6T2%2FatXOGgdv%2Fph8tnm5HRnYmv8ut0FBji2fElwZzjIoLY%2FVepuKDMJ%2FtvGssFs2BqmWFRRPcbndGwX0zdrWg7S3xdJbjpmNgfj8V%2FGr9qAILfY5epN%2Bq2ekUXLs5qwpLw2Ci17JrEOK%2B9dC%2B8Jy98ZdOWWuotKeRNI3q%2F8EoRbdihOidTEjnuiAJlyCaEfhFRThbjrpoA7bLNXQMthC44YCtpggljmLD3IU4pOe0tDHk9DQJPExcAIL1CjwVXbJj6amcu8Cr8uYpulgajukmqW59R0ZkUdIHkHHuf5aeBGXWLYgYrWxjUu0vMiQ5odIIwIAqlAnGjBAsjHRLYJWTHnEyhjtCKq4K35nyfSZhiuAmcvSRIrQW2H54AwkClvCSh2DAI40QAn8z%2B5%2F3GZRCvF7RQPDHa4A4BrRyhlCEuPwEZ6s%2BkNDxAwypDKwAY6pgFcPXJTgqajLN8UY0XlGLPyOLMhn64NWgMba0B9A%2BG4y4782fQBQtNGu%2F2%2FbCr0dug7ek3neg0rzJju8psOxx3rLf7VrtDYwjnXfpBYqW5yJsEjcWXocJinBQzi9qFKSSLhyoxaylrqXAuEGf3teQnlzQFCgl6OE96J04kQT9maL5o%2BuLOr44RkRXVeRxTTiSAhlPnO7fQK0PDtqAaiDVH0yZOMt3Ti&X-Amz-Signature=b2a93f3b62b11a2659fc842d9a439260a75ff605441e34b5db66e9456035d02f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV7BVLT4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDpTRMQc53yZSy5wWOhkYR6Tah9TvWdBID6BfuAOIjTjwIgb7Wb6Zyk3SQdf3L7E%2FssktYYM%2BAZwQZlFamt5VfmZSkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwQu%2F0wCKEqib%2BTCircAxfE8XXQuEyLMjcpmAGPzCMFwFjG44nAzDRWsD6YQm8uwJKH%2Bp4XRTD3EZVOrETyizof33a0cvaDYO6UDl62TN3ZLYBdcVnqyOAkPzc9xHi005VdSgozMiqkMzKlLeVs%2B7PLGDdmhMr9e3fcRMfZnttQAADUIt1hjt1TG%2By3JJcvU2TUF51KOD4hyL%2Bi%2FAf0BTxE20mrf0YWJJiJmVxHqoCtgjpUGwdAwWViPnIFuelcYW3MAAfYhZOUMUd5sG6iHwshjHuxMH9SHBsAYFkgbUVXXmNMVqdgK7WGOprFC0sneqMebcCcOE31GiEIuMyK2qrHOEyyaeeykCxXJjShgfTmBJRXsXQ8V8rO56lw09cHxUPtzfeqrpF0ZJAvmcryNZmfkxC%2F5livZweXchl8rS7OKW%2BmLo4%2Fc8Tz%2BVHv%2BhpNRefh7b1d3eqkLfbIQXtQ6o%2Farbni7dSon%2FbxGFqIu6LNAgs0byXRDHwO0g94OSYWpUG9wCbBL727vT1rtGuX5%2B6MFOWTz8uR%2F6vWxyqo7f5NDvH5Na9mNndxBShfnj4YoeZDwUNbuZAHo39eyUKkg5Kxho%2BI84V%2FOD%2BOfB1fyIm%2FJDMPVnp0cYZ9mH76OFS9Umx4puNkoV2tgqW%2FMKaRysAGOqUB2ddG1Dsdx8p%2BHbB%2BO%2FIi5pwKyJI0vMdGWrIjIVpVJSadVDLD51HVzTRTakOPxDybslGm5Ni1GJSpy8D39Qfq95S6g131o7%2FtOvSB4s59Yk0AGBsvygKmFoOsjGipc033AO%2BJyEf93oRkyyz6xs%2B5dxGKc4Ts0EY44bdDQGbBZAXMCOktM7KMZqfuKtReOnKxsqCeePKYU88vcd0LI9n8V%2Bl8jAvN&X-Amz-Signature=3fc1ece22023eaf76050490aa51b509f9ab9eab38ae8d75a6b1888c0f130f31d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
