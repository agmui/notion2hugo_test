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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDC4VLS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDwGLDfQr5uL8mmGqx4pPTmIAialo1uL1qjRCGrbJGK8gIgT6FGAyuxrU64cnR0G3C9pjj967bqKdsl81nTnL7oXCMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLIOQ%2B%2F5AZqqUVPh1CrcA7PxoEGSRxiXU8yHfUpRxLyenfpQd%2F2aLWz0AEeDmr9%2BZesWPjQM8GXYYhPF9p4e%2B7tjyde74mDbvcUdzEsvRFe7eQKgJXsr6EOhKmKBP1Bzse91uncvRIMgn4%2FaVhApbIyBF%2BK9Yu9qipwiARKYX0ZRYT65f2qVhR9zBNQGNWWkrkrrTIZFuDM4Q5Gzmbq6vTv2Sw7dsRUz%2FxnMbQhJ6lVDKqUWUWedvQ51E7CnyVR%2B%2BeZ9lmdIG2auLQBfY5PtbiWKQPOrR%2B4va0yrRWmqL%2FzjGnT0dTSWAfzqxsHm3MUFNaH4bZ7u5DpSiLuO1BFmY8mJOLEEq4GsVq%2FHTQKyfKJ5g2G7uHt%2FETBy5c0dbVh5TwKJz7Kpb55itvnkQQaxr4tXhIQWXtaEg5tuxHHnlSAoI0tGx48k69EamxTtE8TIMhLqTWo8mG37YLGDcCLtbR1Bt1s%2FFWkI4ctW1llf21l5%2BqJs09nCpvDgyQ%2BGV9pcJPEI8eTKSAtI82oe9dSz%2FVT6gqn1T08dfW8PhI%2BOjJ6ED6uuiAYk9n3qf2AUuL7xf%2FxwYpsL0qTA2sXAvACBVZsT7SHg6lBzvs%2FWe65H1Y1MySjCpKaK9MX7junLmraq%2BD5oPQ49FnGUDQLnMI%2FNysEGOqUBWH1VSuPCF1OMVuczktVjbyJVD9KefVKRnNKOrulvrma1kLC9PUsZ05rNbW9ceXCFlQUH4dNPC7KVOLtXx9KtenicEmeTlRzQCUoNzonDrRkH8Sr9KOvFQXSpgN2%2FPwb1Hl%2FKQiAJA871L%2FeLkOUq%2B6ioSd2V8XeHQG414TjtkxjO3CRRxAwttXl9CnAofW2puwIpkZKiGBfuH%2Fp4lhTt6f%2BWsa0p&X-Amz-Signature=eff73744fe11103db7c154f1201c04fe3f1e2e4d686e5108c6180f456f142134&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDC4VLS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDwGLDfQr5uL8mmGqx4pPTmIAialo1uL1qjRCGrbJGK8gIgT6FGAyuxrU64cnR0G3C9pjj967bqKdsl81nTnL7oXCMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLIOQ%2B%2F5AZqqUVPh1CrcA7PxoEGSRxiXU8yHfUpRxLyenfpQd%2F2aLWz0AEeDmr9%2BZesWPjQM8GXYYhPF9p4e%2B7tjyde74mDbvcUdzEsvRFe7eQKgJXsr6EOhKmKBP1Bzse91uncvRIMgn4%2FaVhApbIyBF%2BK9Yu9qipwiARKYX0ZRYT65f2qVhR9zBNQGNWWkrkrrTIZFuDM4Q5Gzmbq6vTv2Sw7dsRUz%2FxnMbQhJ6lVDKqUWUWedvQ51E7CnyVR%2B%2BeZ9lmdIG2auLQBfY5PtbiWKQPOrR%2B4va0yrRWmqL%2FzjGnT0dTSWAfzqxsHm3MUFNaH4bZ7u5DpSiLuO1BFmY8mJOLEEq4GsVq%2FHTQKyfKJ5g2G7uHt%2FETBy5c0dbVh5TwKJz7Kpb55itvnkQQaxr4tXhIQWXtaEg5tuxHHnlSAoI0tGx48k69EamxTtE8TIMhLqTWo8mG37YLGDcCLtbR1Bt1s%2FFWkI4ctW1llf21l5%2BqJs09nCpvDgyQ%2BGV9pcJPEI8eTKSAtI82oe9dSz%2FVT6gqn1T08dfW8PhI%2BOjJ6ED6uuiAYk9n3qf2AUuL7xf%2FxwYpsL0qTA2sXAvACBVZsT7SHg6lBzvs%2FWe65H1Y1MySjCpKaK9MX7junLmraq%2BD5oPQ49FnGUDQLnMI%2FNysEGOqUBWH1VSuPCF1OMVuczktVjbyJVD9KefVKRnNKOrulvrma1kLC9PUsZ05rNbW9ceXCFlQUH4dNPC7KVOLtXx9KtenicEmeTlRzQCUoNzonDrRkH8Sr9KOvFQXSpgN2%2FPwb1Hl%2FKQiAJA871L%2FeLkOUq%2B6ioSd2V8XeHQG414TjtkxjO3CRRxAwttXl9CnAofW2puwIpkZKiGBfuH%2Fp4lhTt6f%2BWsa0p&X-Amz-Signature=31e7ac20eadf43d45087d4507ed2e4f4578f501823ebf84e2020bcfd7acee5c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDC4VLS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDwGLDfQr5uL8mmGqx4pPTmIAialo1uL1qjRCGrbJGK8gIgT6FGAyuxrU64cnR0G3C9pjj967bqKdsl81nTnL7oXCMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLIOQ%2B%2F5AZqqUVPh1CrcA7PxoEGSRxiXU8yHfUpRxLyenfpQd%2F2aLWz0AEeDmr9%2BZesWPjQM8GXYYhPF9p4e%2B7tjyde74mDbvcUdzEsvRFe7eQKgJXsr6EOhKmKBP1Bzse91uncvRIMgn4%2FaVhApbIyBF%2BK9Yu9qipwiARKYX0ZRYT65f2qVhR9zBNQGNWWkrkrrTIZFuDM4Q5Gzmbq6vTv2Sw7dsRUz%2FxnMbQhJ6lVDKqUWUWedvQ51E7CnyVR%2B%2BeZ9lmdIG2auLQBfY5PtbiWKQPOrR%2B4va0yrRWmqL%2FzjGnT0dTSWAfzqxsHm3MUFNaH4bZ7u5DpSiLuO1BFmY8mJOLEEq4GsVq%2FHTQKyfKJ5g2G7uHt%2FETBy5c0dbVh5TwKJz7Kpb55itvnkQQaxr4tXhIQWXtaEg5tuxHHnlSAoI0tGx48k69EamxTtE8TIMhLqTWo8mG37YLGDcCLtbR1Bt1s%2FFWkI4ctW1llf21l5%2BqJs09nCpvDgyQ%2BGV9pcJPEI8eTKSAtI82oe9dSz%2FVT6gqn1T08dfW8PhI%2BOjJ6ED6uuiAYk9n3qf2AUuL7xf%2FxwYpsL0qTA2sXAvACBVZsT7SHg6lBzvs%2FWe65H1Y1MySjCpKaK9MX7junLmraq%2BD5oPQ49FnGUDQLnMI%2FNysEGOqUBWH1VSuPCF1OMVuczktVjbyJVD9KefVKRnNKOrulvrma1kLC9PUsZ05rNbW9ceXCFlQUH4dNPC7KVOLtXx9KtenicEmeTlRzQCUoNzonDrRkH8Sr9KOvFQXSpgN2%2FPwb1Hl%2FKQiAJA871L%2FeLkOUq%2B6ioSd2V8XeHQG414TjtkxjO3CRRxAwttXl9CnAofW2puwIpkZKiGBfuH%2Fp4lhTt6f%2BWsa0p&X-Amz-Signature=94117bd591dfef3aaa2aa1461084eab8e5b43f6cd3adea2846403659bbeba4d2&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665YO3OOL%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDcZnFBwHWbqmtSHrzw95UMchKaJau2N591h0SjBYqtZAiAsoP%2BY7FwkMH%2F4dWa7qXgTHy%2BoktjdlYbu7kv1VOkgIyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMDCMbZx4N1Pqxu5o2KtwDScr9CPv6hzuWSG2zJAuTy5JZfXn99c244GGXqxPhLJVGoR0%2Bha1uMf1E0JzG2ZSEWd4nu9dcZT0MFAFtBTInoHgJvB2qwFlmkbV7i0SRrUYzxfKCFHdu3HirekZJEKhUwetF1RKtsNCOsgyqr1LxjxHwEYEb8one0i%2FGDK%2FT0d%2FipHdzCX%2FTL3J389YU6Ku%2B4c8tHN9N%2B3G8FmSdWX1kq%2Bt2EQWek2s80CqTs0Q6Q6YQ6mRy5gSCkrYsIYmRejfEpbUMBvjmAKM47Uy3%2FbhzLbfbY8QSDdW%2FFgEpz%2Bo1YdrjOhMoCAlMot4I%2BiK1ras%2FB7z6o8qGxSjCKeuE2kWsQ1jpNUdq3ei6aKGAHqgXedX%2BD49UOZcV%2BYqD3t2BqNGmyzPIiDmyVd7NVXDHS1vv4ByQSjlexNw0iJitl%2FH%2F0qejgdoUr%2Bnp%2Bo7FR8F3v6SfraPynYpdrMbQBWiwB68XEbx%2BSaTZAPuQYj6QV04MzHqoDg9eSwPuDz1cAax9QLOn7x0F81Ue5%2BnS%2FNleNrf35cNu6h4b7SB%2BvWkbZGcMc1PcxoTxycL3VBrsoXdIedh8aLBUFkE4uNLO%2FzJAVTAOPK2IWDdac5kO0Cj%2BpMcyKTzmKQ1t2LPub9MqtaUwu7nKwQY6pgHsyd%2BNM1na1zHdoP4GS%2BgrGl6V2k4BgN26AjLrogwkB1NnSqyWnISgaIPfC9xofQ7LLBsoYUAz83bylQad095ZMl1SZUYYFxefzYhoBr%2B%2FlgNgu6%2FgMVk9I5qHYhk8%2BkdC28tXJPbme5anthA%2FmeDkSahcagdYmDIPsAUzIR%2FJ3j23HN0no3d84IS0kuk7bxvUUaOkC4RZOlcPr9dKu02TFMw01Tc0&X-Amz-Signature=8f3131799755ea4a65841a882da69bafa241dc1ff96204257505449f0aa55360&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3XZUNM7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBNqiJbBNR0AO4o20JKaAXvhnzClCkREF2FhB4Dw0rEtAiEAu%2BGCWGZkyPw%2F%2B2NvmrCn5gK20xOY%2FArad%2FgMeIAWFDUq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDJ7w1cVKF1JwE8KoTircA%2FxYfT2%2F%2FwdSscE4RjaUdBFidWPp4bCZ0dnbcQKmfyyNF1%2FHKFWOJjf4BgX8yDTiYTRqF%2BgxYldsnRBeDpbeCgOjbuwyGE2Z8zZeLw55bC%2FMcLwcNtbZknDmwwQ%2FGjmzMDnjiNDwOIXvpelqy%2FrK2HgmBhPTu1CMlwz6Rm52d2pC%2FOFLIKtlv0cHns0g9BOLEvMGFuKbQeSyer6YFTpyP0BtlO9%2Ft%2FnrRkR3zdHQ57pOdrY%2FasB1fo2f4uw2TdfOXUlimGgZlordBv1ckjKWcRUch1sffmIYcZHKJs7bnwDM%2BKshl11ZqMArmwvz%2Fs8YU810dQo%2BYKjfBLOptHAipQPg%2FOU9LXMqR2k4IXItiA1fseTvrPKeT5ePDRY1FC8eHqTlGzgIwAQh5mD9iXS9IpgSrrbaa8%2FpMKaXY3CNVZMFkUcN9cMg7yw4unh3F9XoStPDDQPAFhk%2F%2BXhKXfi0cfwI7WWfUX%2F6DaO4wOIEVupaETJrrvXTlFSm7AHBgwg%2F9u4Rc85XlwGQKCYSGyAjyJKNFUdjuNloyiA26FM4e2XKuDfrkck954ywlNMQEIAYkjX%2F4syaBsdKqY8ki8EGT80fr85a%2FRMWV9UE%2FeDJPYLEfzxFbm6f63fMkVncMP24ysEGOqUB0uyrwS9rSkHKMPylgwTbGZCwwrKZiu19EJKzGQ8SGRcRlnTRb%2F6EopAg%2BfUOOQzzN4nktFoG5k1VF%2FfwcYgY87zs%2Far1Oo%2ByCCJ19TwkIEMGMDNT2YzUlOALNor0Hb5ZjvELnVbij4ynZf3h0EzzYWZxFXw9Fa0m%2BfV9d6PiKEnd6b0zALybbFoGeCsD7F85rTGHvBqHaBLsKaa5C6%2FJpF6%2FBqB5&X-Amz-Signature=2d531058b5a77de6f862e130b6e915b34a0b7f689987cbff8229a365aa70c192&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDC4VLS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDwGLDfQr5uL8mmGqx4pPTmIAialo1uL1qjRCGrbJGK8gIgT6FGAyuxrU64cnR0G3C9pjj967bqKdsl81nTnL7oXCMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLIOQ%2B%2F5AZqqUVPh1CrcA7PxoEGSRxiXU8yHfUpRxLyenfpQd%2F2aLWz0AEeDmr9%2BZesWPjQM8GXYYhPF9p4e%2B7tjyde74mDbvcUdzEsvRFe7eQKgJXsr6EOhKmKBP1Bzse91uncvRIMgn4%2FaVhApbIyBF%2BK9Yu9qipwiARKYX0ZRYT65f2qVhR9zBNQGNWWkrkrrTIZFuDM4Q5Gzmbq6vTv2Sw7dsRUz%2FxnMbQhJ6lVDKqUWUWedvQ51E7CnyVR%2B%2BeZ9lmdIG2auLQBfY5PtbiWKQPOrR%2B4va0yrRWmqL%2FzjGnT0dTSWAfzqxsHm3MUFNaH4bZ7u5DpSiLuO1BFmY8mJOLEEq4GsVq%2FHTQKyfKJ5g2G7uHt%2FETBy5c0dbVh5TwKJz7Kpb55itvnkQQaxr4tXhIQWXtaEg5tuxHHnlSAoI0tGx48k69EamxTtE8TIMhLqTWo8mG37YLGDcCLtbR1Bt1s%2FFWkI4ctW1llf21l5%2BqJs09nCpvDgyQ%2BGV9pcJPEI8eTKSAtI82oe9dSz%2FVT6gqn1T08dfW8PhI%2BOjJ6ED6uuiAYk9n3qf2AUuL7xf%2FxwYpsL0qTA2sXAvACBVZsT7SHg6lBzvs%2FWe65H1Y1MySjCpKaK9MX7junLmraq%2BD5oPQ49FnGUDQLnMI%2FNysEGOqUBWH1VSuPCF1OMVuczktVjbyJVD9KefVKRnNKOrulvrma1kLC9PUsZ05rNbW9ceXCFlQUH4dNPC7KVOLtXx9KtenicEmeTlRzQCUoNzonDrRkH8Sr9KOvFQXSpgN2%2FPwb1Hl%2FKQiAJA871L%2FeLkOUq%2B6ioSd2V8XeHQG414TjtkxjO3CRRxAwttXl9CnAofW2puwIpkZKiGBfuH%2Fp4lhTt6f%2BWsa0p&X-Amz-Signature=ad1c9c68b8720bd4c3cf316bb21c61f49471103d87ea0fdba5983d797a180f5b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
