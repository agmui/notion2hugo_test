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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X5UKKLP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BasqYHw15yfzpYmds%2FwUm7It7hgIgKtcPa4Rx%2BM9aPAiB5cWuYp0WmZslToqiZ5%2BD8aHAQ3SeWKKe1tiV5iII1yCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkRk3mdxCCWWBPqReKtwDu0mHBglsIdWBPVGf0tj%2BP%2FMk8kubh1wCqnNwFmuEJr2u0qwU35vn5HffDJlkbRcnmbwL383DtolYBHADa0ULnXu4%2FT9qBaNp3tJgf6xZkH7m%2BUIVtGoA2JsFUwHPW3%2B%2BufFH3DeGkIGpmKiV1qrME%2BcnpdoX7%2BODAyzyVyIlYSoAwurx%2Fj7O46JIwO50qJSbFi%2BYoSKoRyRdplsXf7YYSEDSPz7BNmoLj1HhLqrQ4PWh%2B5yo0fOCDK9pTI064kJ3W5%2BaVt%2FLKG3B3zETrJE7xNxEzpEQM%2Bf%2BjeQNH9JYykZSIQKaS%2FrznkWNUMOMePHC5D%2FYkOuhjxYz5VqKbsZh3CPwFqBLGQwJxq7lzoyfSLMHMTIywR56WmsB3mt0TezjmH%2F2%2BHSs99asbmc4bFS5ZWI%2BCi2MGtXsD5bQXwSl7rQ1wHQk40H1VoROK3i4HLJjiZOReTn0avXwtXQu8AIPvnH3L9fEHs2l4Nkl4DK0%2B0uzuRMJzTk5RiW%2BSVt2ndQrOWut%2B%2FZZw3edqTPSG8jjd6Mi0dRkCo0uyEvNl8E3jyCAWw9TMd4wOM9BTU4W%2FofxPVJk%2FWfr90X3c%2F10S%2Fu%2BYJFr8XlQ%2BvTSp0eD7TTcUGe2a8y9Zp2CL8gb9v8wldDHwwY6pgGyQLUrFWccMs7VAELVk1hC8NuldLgchHiFaq7hh8ran3mhnTreKcNNwfokpXi9O3Swbk7O%2BsL%2FBnACiBu5w2xuoHtXfAjwoDdg32XzO14902erawNep2F7zHi2A1TbG68BpWzvUrhv8X8bcpuHL0vLrkgCcWI5Rh9ox8aN3Llior0Mqogx4YG6hFzbnH8vk5dvPANYYTx6twv2sImIEsEZtrhngua8&X-Amz-Signature=b95e0dc58f382f87663f2e94de3d68a2dfa07e007eeeaafa47ca7bbb6eeaf6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X5UKKLP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BasqYHw15yfzpYmds%2FwUm7It7hgIgKtcPa4Rx%2BM9aPAiB5cWuYp0WmZslToqiZ5%2BD8aHAQ3SeWKKe1tiV5iII1yCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkRk3mdxCCWWBPqReKtwDu0mHBglsIdWBPVGf0tj%2BP%2FMk8kubh1wCqnNwFmuEJr2u0qwU35vn5HffDJlkbRcnmbwL383DtolYBHADa0ULnXu4%2FT9qBaNp3tJgf6xZkH7m%2BUIVtGoA2JsFUwHPW3%2B%2BufFH3DeGkIGpmKiV1qrME%2BcnpdoX7%2BODAyzyVyIlYSoAwurx%2Fj7O46JIwO50qJSbFi%2BYoSKoRyRdplsXf7YYSEDSPz7BNmoLj1HhLqrQ4PWh%2B5yo0fOCDK9pTI064kJ3W5%2BaVt%2FLKG3B3zETrJE7xNxEzpEQM%2Bf%2BjeQNH9JYykZSIQKaS%2FrznkWNUMOMePHC5D%2FYkOuhjxYz5VqKbsZh3CPwFqBLGQwJxq7lzoyfSLMHMTIywR56WmsB3mt0TezjmH%2F2%2BHSs99asbmc4bFS5ZWI%2BCi2MGtXsD5bQXwSl7rQ1wHQk40H1VoROK3i4HLJjiZOReTn0avXwtXQu8AIPvnH3L9fEHs2l4Nkl4DK0%2B0uzuRMJzTk5RiW%2BSVt2ndQrOWut%2B%2FZZw3edqTPSG8jjd6Mi0dRkCo0uyEvNl8E3jyCAWw9TMd4wOM9BTU4W%2FofxPVJk%2FWfr90X3c%2F10S%2Fu%2BYJFr8XlQ%2BvTSp0eD7TTcUGe2a8y9Zp2CL8gb9v8wldDHwwY6pgGyQLUrFWccMs7VAELVk1hC8NuldLgchHiFaq7hh8ran3mhnTreKcNNwfokpXi9O3Swbk7O%2BsL%2FBnACiBu5w2xuoHtXfAjwoDdg32XzO14902erawNep2F7zHi2A1TbG68BpWzvUrhv8X8bcpuHL0vLrkgCcWI5Rh9ox8aN3Llior0Mqogx4YG6hFzbnH8vk5dvPANYYTx6twv2sImIEsEZtrhngua8&X-Amz-Signature=d55ddb8677c96b107a5740a7577c8cc9bc0ceadcce5b8d28920de94919f12658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X5UKKLP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BasqYHw15yfzpYmds%2FwUm7It7hgIgKtcPa4Rx%2BM9aPAiB5cWuYp0WmZslToqiZ5%2BD8aHAQ3SeWKKe1tiV5iII1yCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkRk3mdxCCWWBPqReKtwDu0mHBglsIdWBPVGf0tj%2BP%2FMk8kubh1wCqnNwFmuEJr2u0qwU35vn5HffDJlkbRcnmbwL383DtolYBHADa0ULnXu4%2FT9qBaNp3tJgf6xZkH7m%2BUIVtGoA2JsFUwHPW3%2B%2BufFH3DeGkIGpmKiV1qrME%2BcnpdoX7%2BODAyzyVyIlYSoAwurx%2Fj7O46JIwO50qJSbFi%2BYoSKoRyRdplsXf7YYSEDSPz7BNmoLj1HhLqrQ4PWh%2B5yo0fOCDK9pTI064kJ3W5%2BaVt%2FLKG3B3zETrJE7xNxEzpEQM%2Bf%2BjeQNH9JYykZSIQKaS%2FrznkWNUMOMePHC5D%2FYkOuhjxYz5VqKbsZh3CPwFqBLGQwJxq7lzoyfSLMHMTIywR56WmsB3mt0TezjmH%2F2%2BHSs99asbmc4bFS5ZWI%2BCi2MGtXsD5bQXwSl7rQ1wHQk40H1VoROK3i4HLJjiZOReTn0avXwtXQu8AIPvnH3L9fEHs2l4Nkl4DK0%2B0uzuRMJzTk5RiW%2BSVt2ndQrOWut%2B%2FZZw3edqTPSG8jjd6Mi0dRkCo0uyEvNl8E3jyCAWw9TMd4wOM9BTU4W%2FofxPVJk%2FWfr90X3c%2F10S%2Fu%2BYJFr8XlQ%2BvTSp0eD7TTcUGe2a8y9Zp2CL8gb9v8wldDHwwY6pgGyQLUrFWccMs7VAELVk1hC8NuldLgchHiFaq7hh8ran3mhnTreKcNNwfokpXi9O3Swbk7O%2BsL%2FBnACiBu5w2xuoHtXfAjwoDdg32XzO14902erawNep2F7zHi2A1TbG68BpWzvUrhv8X8bcpuHL0vLrkgCcWI5Rh9ox8aN3Llior0Mqogx4YG6hFzbnH8vk5dvPANYYTx6twv2sImIEsEZtrhngua8&X-Amz-Signature=b347539560cc9abca93cb12c1d6bf2a54320b1a18f3d7272deb70328f49cbdc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624BDMX7I%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAFduAwtlhKyoaXI4V1AFP1pIXFleG18YtJMrjFEis6AIhAIR6Gcb2hYh04G85N5NOI69ZJKQ%2BxIa%2B7vzpZ8AEjNqHKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzA0YLgOBnNzMrRULoq3AMK%2Fi1AsFBID3u7twOV72sT%2BMhTyZzOBBaBK6t0%2BNM0Cu8A%2FVwOl3VBqKMg%2BfZcN80C7JhL1GsZDYdzmmzFmP1abY7PcEp8r6xSSqOkiWMvEnolhUB9%2FEv4sL8pqI8Ig%2BgGCOi90xBCyWtlGpiIjF9RAzgQGu3DudpAXLCw8ieapeq7zeBr42TySSAeDTnyAiKVrEgZGe8ui4B7Kvi9lQKth91mpeUwODpJdaOB9cloDCN9zmzS3wgF0vCLGdo3VmVDuEDdxvTIxwQ7DxZXmi%2BNElAfIMMhW4J%2BlTizdZdFT1Nd5%2F5H0Xg6sfqlYpnaI%2F2ChTGwDQMIhIhCkNFkaD4xGKuZXB8nwaWcDUShnReij5AAq4WioQSxeBZbIqa49Wl6RjLaU38sVcT%2Bz6e9KcnjrV5zpSXPCW4XHUCZxo4GVj9YGV4oAZGrvPAiUUK4cuIPdUsP0Od6I%2FHER5NA69y4MknZXJ0UCzS5QVNjUKCDA%2Fzg7I1oC4rjc8GbYjR%2FEQJOTDVVvpgFQoxd%2F3iB5HDmC1v43SG2vIv5V7qqc102BrnOB1RKqHjNzsQmL%2BeK3rvR%2BBZ9ekwNTMzOwyWMsYR535avzYrj8l3mKiEhlSUULFlZZ7b6JP4v%2BESeujDp%2BMfDBjqkAU5Zw0I4lQ64lh13JE1sCzPFmIJXOS%2Bsxsg8OIxd5G37%2BQNc8hwtiKBRmRei0IpWN%2Bw7vcvYqfn40lWtCVM8GAo7plsDElbNYePfF3DPVSAIi35fGvlJF9fRC0N%2BzNXsiiVPLcNIeibxfj9xSOtmAHhP9i0x4%2FVNV%2BBxT7swAiBb9n2RU15IzfzOmGgR7k1VUELARovGP63k%2BzXI8XuJWmQPCqCz&X-Amz-Signature=f07c29fd1969b02da2d471290b7aff3b131b01242d48b41d69038fff8d12b60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJI2OJSU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmXY%2B8ikKOvsE7ylQgAdrfg3QP6gjqbk4XsAl3NOq%2F4gIgHL%2B6ITtfnqHRaN9ag3%2Fez4rHhcxtaFoR1Gg7X%2FUe8mMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8qGU3Z%2FwNaYOrFKSrcAzNTTwAXjasge07DusjSpvenSE6Ca2rExpSfe1vp%2F3XHsYObo1pAKlO7e0wceXOwETEPS%2FXkuGRFFE%2FIV0IDe%2Bqv8cQyd0AnnRoXHCS6TTpQrb2XyXoUbT0doy08g9qYNa1P1BZTmgyeW4FbuBjU4sia4eI9UxmeIVEb1dwFqz5yD8F6gfpQIVuDgzDiphw%2B0ofupIVe6kX5WA%2FJtm635IyKNtcGuqu%2FfaStn4rUQ3DmE6o0icB6louZD9Jb53JX7esT4g9ZvUj9b29FYL%2FCQcqkF5EywOi5h6b8kUmQOIFEspM%2FQFkaxLWxyMmu4QakbgMEt%2FBlGDwCYkPOYHpm6jj9DKDp4WPgDVLJtWUdceWcBwoJWrPlOASgPzj7TBLyN%2BX1A5E1k31ocQ9QzIdr334%2FLz1iNIVCGP6PrGsAehbzrNAm5sDvXrBBd0pNDULUeO8sJLoknM5PR4hCYr9TuVibQs7U19bY29DaiNqde7%2F5FRTP6As8dq09oXXWSVovZ81WOXMPvQXveFka1JePjDumX3DxmNKLKpUfkyZlsDsWgqM0XU2txzNWnEsCo2vnSAW2c9%2BVz93hwseDTecKhG5zmSSBo77GQMqqBSj%2FEC6m17%2BWwKm8Sz9f95ReMOr4x8MGOqUBxHDeyJroezZVnnAdr0jigRNv5Fdu1alIJeVGytqGytEZN%2BOfQQUJaNVNNggth3nH8LJumkglqVOkiPSNfQUrUahley7kvsSSl%2BC3RpGyqwLNCPJR4JkL1r%2Fsi5ty9pn%2BX9f5mCUymLVVNsRCnkSS0k%2BmXY4b5HoJ0ExzW3bFdF41VmGilEJBw8dBRmazlLB8kmF0FTD%2B0dequLm39PiQCTxzvY4S&X-Amz-Signature=1308f5f1543c9d4065315b18c04c31ac12eee23317e32c18c7d0e6ac7b50b418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X5UKKLP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BasqYHw15yfzpYmds%2FwUm7It7hgIgKtcPa4Rx%2BM9aPAiB5cWuYp0WmZslToqiZ5%2BD8aHAQ3SeWKKe1tiV5iII1yCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkRk3mdxCCWWBPqReKtwDu0mHBglsIdWBPVGf0tj%2BP%2FMk8kubh1wCqnNwFmuEJr2u0qwU35vn5HffDJlkbRcnmbwL383DtolYBHADa0ULnXu4%2FT9qBaNp3tJgf6xZkH7m%2BUIVtGoA2JsFUwHPW3%2B%2BufFH3DeGkIGpmKiV1qrME%2BcnpdoX7%2BODAyzyVyIlYSoAwurx%2Fj7O46JIwO50qJSbFi%2BYoSKoRyRdplsXf7YYSEDSPz7BNmoLj1HhLqrQ4PWh%2B5yo0fOCDK9pTI064kJ3W5%2BaVt%2FLKG3B3zETrJE7xNxEzpEQM%2Bf%2BjeQNH9JYykZSIQKaS%2FrznkWNUMOMePHC5D%2FYkOuhjxYz5VqKbsZh3CPwFqBLGQwJxq7lzoyfSLMHMTIywR56WmsB3mt0TezjmH%2F2%2BHSs99asbmc4bFS5ZWI%2BCi2MGtXsD5bQXwSl7rQ1wHQk40H1VoROK3i4HLJjiZOReTn0avXwtXQu8AIPvnH3L9fEHs2l4Nkl4DK0%2B0uzuRMJzTk5RiW%2BSVt2ndQrOWut%2B%2FZZw3edqTPSG8jjd6Mi0dRkCo0uyEvNl8E3jyCAWw9TMd4wOM9BTU4W%2FofxPVJk%2FWfr90X3c%2F10S%2Fu%2BYJFr8XlQ%2BvTSp0eD7TTcUGe2a8y9Zp2CL8gb9v8wldDHwwY6pgGyQLUrFWccMs7VAELVk1hC8NuldLgchHiFaq7hh8ran3mhnTreKcNNwfokpXi9O3Swbk7O%2BsL%2FBnACiBu5w2xuoHtXfAjwoDdg32XzO14902erawNep2F7zHi2A1TbG68BpWzvUrhv8X8bcpuHL0vLrkgCcWI5Rh9ox8aN3Llior0Mqogx4YG6hFzbnH8vk5dvPANYYTx6twv2sImIEsEZtrhngua8&X-Amz-Signature=7132c92af46297e712041dcb5c30b18e1983cc8a2fdeefd6e5f1d351863bbb35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
