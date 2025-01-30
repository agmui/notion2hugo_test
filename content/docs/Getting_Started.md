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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625IXNAME%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5c4R8iWxCJxzJ0AMN1u8539mqv%2B48KkBivvyo3fZsOAiEA5J8conoCORxhp2hmtG4chugVDfQFUxm9wNb%2F2XGmo08qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvLXVF4ZLb23xU2DyrcA2dwezvRMK%2BwEe%2FAyEMrhiGm6FtfsDUtCMbp7yIPjTOmCX82KxkLpsEXtoa8DF7kU21wg9QN5ZgBJeHHSgKKC7r9nxa7Z5IynHEXhFcym0x8pCGEg3zX9pPxGq0gkkKod5QOofXGEz0s9afxO6iQVzU3ziX0HMyAgBRYR1jehrVADEb7kULRlerYpMc9dhCzb3EyKdfJ3eYW3pxyZh0DitkUu6zQZ%2BWt30eZ6wv5dekYxOJC6828li6yumujEY2RGUAkf7ev3Sizp9S91hmH7V6IeiQS0rqBt9QyBHeBR2JlMC3V2gt755rAtPAHtl6894Yw3njTp5yg1BTRlfU91OeS48yhaCUL037uaav5Q2sLPSTW2KdtY%2FbOPRFAT9NbzJc5kN0euXSjFinofuNt64WZqx%2BeoahgFOXSUR9SDy6AgmmgMW0xGBGXAEwfDKdMGarsHLX0QElIozg59N%2FJ2qNgaapqRlrWI5rm56gZPd8Z1x9I3GEFdbnk8GS8gqtm%2BmKqbOxS%2BLQZCbsT0%2B06lHhVvL1TkjBYtG0ZNzo1AiTp%2B4sAJHb9AYlYX%2BjhiJyLMjgzftUN6av9BK%2BDKfQ%2Bv82jajMtJqBUFISo50oisGIyO1uA0%2FTfoY37Bbt7MOyq77wGOqUBZVzJ%2B4%2FgLAwbxZzjaRmFIXD%2FRAl4%2BdBMaQ14%2F2Hw1ylnIgMdMrt74J8G1UAlTVpLEzZzscTAdzATWiMebs1ugi9yxK4hvzH9ND%2F%2F0whWlVtGhAebmTR8ImJT0GDHLzN7%2B0JnAydnrrJ%2BsNbCdGJCZc0lKVvAGdkHNcUhFCwSMtIleAflId2rCC60x%2BXCBY5Fmx8NZLoeba%2FQbgPzCXUCrllMmjup&X-Amz-Signature=8f07683a3957cba8ce561630827573dc6a6e4043246ec3354eab6aa8c0620ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625IXNAME%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5c4R8iWxCJxzJ0AMN1u8539mqv%2B48KkBivvyo3fZsOAiEA5J8conoCORxhp2hmtG4chugVDfQFUxm9wNb%2F2XGmo08qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvLXVF4ZLb23xU2DyrcA2dwezvRMK%2BwEe%2FAyEMrhiGm6FtfsDUtCMbp7yIPjTOmCX82KxkLpsEXtoa8DF7kU21wg9QN5ZgBJeHHSgKKC7r9nxa7Z5IynHEXhFcym0x8pCGEg3zX9pPxGq0gkkKod5QOofXGEz0s9afxO6iQVzU3ziX0HMyAgBRYR1jehrVADEb7kULRlerYpMc9dhCzb3EyKdfJ3eYW3pxyZh0DitkUu6zQZ%2BWt30eZ6wv5dekYxOJC6828li6yumujEY2RGUAkf7ev3Sizp9S91hmH7V6IeiQS0rqBt9QyBHeBR2JlMC3V2gt755rAtPAHtl6894Yw3njTp5yg1BTRlfU91OeS48yhaCUL037uaav5Q2sLPSTW2KdtY%2FbOPRFAT9NbzJc5kN0euXSjFinofuNt64WZqx%2BeoahgFOXSUR9SDy6AgmmgMW0xGBGXAEwfDKdMGarsHLX0QElIozg59N%2FJ2qNgaapqRlrWI5rm56gZPd8Z1x9I3GEFdbnk8GS8gqtm%2BmKqbOxS%2BLQZCbsT0%2B06lHhVvL1TkjBYtG0ZNzo1AiTp%2B4sAJHb9AYlYX%2BjhiJyLMjgzftUN6av9BK%2BDKfQ%2Bv82jajMtJqBUFISo50oisGIyO1uA0%2FTfoY37Bbt7MOyq77wGOqUBZVzJ%2B4%2FgLAwbxZzjaRmFIXD%2FRAl4%2BdBMaQ14%2F2Hw1ylnIgMdMrt74J8G1UAlTVpLEzZzscTAdzATWiMebs1ugi9yxK4hvzH9ND%2F%2F0whWlVtGhAebmTR8ImJT0GDHLzN7%2B0JnAydnrrJ%2BsNbCdGJCZc0lKVvAGdkHNcUhFCwSMtIleAflId2rCC60x%2BXCBY5Fmx8NZLoeba%2FQbgPzCXUCrllMmjup&X-Amz-Signature=47cb554a7439a1ec99787fb08dac083a76344e3526e304cfd1c4e0df66b92507&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFISGTV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB1J9%2Bu7%2BIXETv5tKqVl2c4MM5yqW0%2FSpv0pp68VZHWAiEAiFN9xZrulH4S0KJV3LE9sFQPJwznOzMMnbKaBLbIhLEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCY2jNVlz71g4QhJBSrcA%2F0Fni8m7E5s0eBtTar%2FYo61PzdOxMfsuGtU4PtVZ3x2sz9ejpHpoJ4UT27JxfCIkaKYUeGORvYYUYeUOzsuJZEyahh%2BYrnNQlTfczBcGOX%2F4WwPQ%2Bxi4gGGmJdG3DN8Tsjx68R8K5qZv7wELreHdXngnG6uvLqia1xF3yomv6trQSLVUk%2BVTEiHFEso4hVKLd6FMz%2FqXClGuUOn%2FAchAkxKvkMkrVA7qNIR75wqpQUPwxoKPkdeq%2Fop5njw5k5%2F0mjzH6WnvYvMF2irwvzFrh%2Fu%2BDah0tRw7laaoJK1DKYVsrHq9fQsH7nwV0pa0vR1fbnf2bNUKGeKERbq%2FDqp5br9AU2PyBIk6l8PfeixiMmsJ0uV06H2dUrZFXNambRt4rHkfyhLihiTZ4eYPFXrKf1hC8Xga1yfftWkG%2BBJWEzP3pKfyWki%2B1HRsV9KGIlZ5OZMES3oEPl%2FaEiG1m5xQzzaWh19isuxsO1UUVl9px99UeEqM80NtH0aqx6NdVgf4guXOjsQgkZ3H77Tr%2BPfLECqYi040U1Q3R1H6hUNQPRq9BER7MtSik0XlKjpN9kDsuXRIOsxcbERom%2Fvr1oUhaBMwHosM2MD54H%2Brqs0FDUuC9ZvJgskZXCg%2BcxKMMSr77wGOqUB205WovRICLU5ZoELXinp6ih7aDU8ckJKB2mGixbCQF1giqTbkmyORjigZ%2BupNTXk4OphrU%2Fhviu3yxd18iQx0JMtgwiX%2FmZUMd6T0NxfY3ReUCcQyE1%2BDxwkHx4%2Bx0j%2BT%2BUAHtKaLIYxn76ycG3QcQAEGi57jyD0wqGGAB5rhtdQIw5qfPXYV6hCu26M3INuGW5WhyS55AR681qx%2BC%2BB9Fe0SDs5&X-Amz-Signature=c997b3a4afc79249c5e6e5874dd21a407cef914c5f1cc33b35a925ef835cb240&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AIYIZOH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHB9BlajzRefznSKKFOqatRfZgt7Ict3t5g0a7B8KPoAiB7t2AX1EcpHe%2FvScjtxZWvFbIVwNtRNChlQq%2FTI8YUEyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQCmmxblmktlCNkuuKtwDM0vIsjT2vo32xVIOX9iqoT3a87aO1pL2YpX%2F9v87QaM5fTkku4rIcsCkU8wyu5kZ8BU1HFSWKrztcKOOjTcGHLs2cokrF74BDnDn%2FMeT6pf4VT%2F3fidiQ4ttZdEg2%2BSn1ImPnW%2FQ5ODas1N87ySMRrU%2FMcp39f7t%2Bf7yMuC8tTxnAJLDYuLRmqiTkRo%2FwNJnaBX6KVQbMOPj1adR2bFcfVHjg9gOEgm9OGn4tsa4Vldh84GjMQYpn5yH%2FXI9PjevsY9GMrddYjG%2BkYDAnGkHmkV26pQolLqGfZ8f3WsvNP9ovCONU2sXtqLv7LdiBVhC8vqfLDEVF8VL5Uiul5TSag9OnzFULvuWq8BmAN4qjuyvLYPk9d7X9PyO1T3Nm4VK1A7A68lkEuncreoXXPR2CWX3vOGqiJB7CUa3YEppjg%2B659JMpwqWU159CxYugNcPTX3VzB35LDNoNAcrvCvF6eQMeaGGfRcU6zrgTv1%2Fy6cT18m%2FV%2F8VM3E7GnP0lSQtnA93J6qlRoceCfaZyG2MRyzo5QEtGUhkq1QEuxI6w2SgA9Z%2FZ9TzDn0vJgi8mkqZUHEzPNeOpPnROFRpnzMzRnzVN4u8wiLMN4pfnSM5YDbQ%2Fwl5Ck3IeGR9E64wzKvvvAY6pgE%2BXFcagFEiko8IqP%2Bk7TNSEZd3U%2Fy%2FJjkhXXKZyCZE7Anf9GTbLmRQC2GGxb7ZTvuR8j%2BoWeckH7mQNBC%2B%2FBPaE9s66uNeso8Hc3Ik43Y7hsvqRWp%2BHsBJJcflBdnXq%2F2TAN%2BYD4L%2F%2F0BnEqW2PCYzKlm7O2a8B1DxGmrQdwez6SXPJuy%2BPP9JQbPpZWBMZXJ3MqEyWMB3qGsgvRxkmExJKoGbjpBA&X-Amz-Signature=4271e96870b25fd20ea7d9c93fe5822031863a28ae4d8e7ada4814b46b6cea13&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625IXNAME%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5c4R8iWxCJxzJ0AMN1u8539mqv%2B48KkBivvyo3fZsOAiEA5J8conoCORxhp2hmtG4chugVDfQFUxm9wNb%2F2XGmo08qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvLXVF4ZLb23xU2DyrcA2dwezvRMK%2BwEe%2FAyEMrhiGm6FtfsDUtCMbp7yIPjTOmCX82KxkLpsEXtoa8DF7kU21wg9QN5ZgBJeHHSgKKC7r9nxa7Z5IynHEXhFcym0x8pCGEg3zX9pPxGq0gkkKod5QOofXGEz0s9afxO6iQVzU3ziX0HMyAgBRYR1jehrVADEb7kULRlerYpMc9dhCzb3EyKdfJ3eYW3pxyZh0DitkUu6zQZ%2BWt30eZ6wv5dekYxOJC6828li6yumujEY2RGUAkf7ev3Sizp9S91hmH7V6IeiQS0rqBt9QyBHeBR2JlMC3V2gt755rAtPAHtl6894Yw3njTp5yg1BTRlfU91OeS48yhaCUL037uaav5Q2sLPSTW2KdtY%2FbOPRFAT9NbzJc5kN0euXSjFinofuNt64WZqx%2BeoahgFOXSUR9SDy6AgmmgMW0xGBGXAEwfDKdMGarsHLX0QElIozg59N%2FJ2qNgaapqRlrWI5rm56gZPd8Z1x9I3GEFdbnk8GS8gqtm%2BmKqbOxS%2BLQZCbsT0%2B06lHhVvL1TkjBYtG0ZNzo1AiTp%2B4sAJHb9AYlYX%2BjhiJyLMjgzftUN6av9BK%2BDKfQ%2Bv82jajMtJqBUFISo50oisGIyO1uA0%2FTfoY37Bbt7MOyq77wGOqUBZVzJ%2B4%2FgLAwbxZzjaRmFIXD%2FRAl4%2BdBMaQ14%2F2Hw1ylnIgMdMrt74J8G1UAlTVpLEzZzscTAdzATWiMebs1ugi9yxK4hvzH9ND%2F%2F0whWlVtGhAebmTR8ImJT0GDHLzN7%2B0JnAydnrrJ%2BsNbCdGJCZc0lKVvAGdkHNcUhFCwSMtIleAflId2rCC60x%2BXCBY5Fmx8NZLoeba%2FQbgPzCXUCrllMmjup&X-Amz-Signature=3b28c6a0bbb898c0676e2dba5fc0f570ace0cbbd453a91b64e61eaf62ec6b52f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
