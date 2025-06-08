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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRG5AA3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYwDWg1Y6MTZgZHzGOftchJ1uaYRT0f7k%2FN2LwjteOggIgKKH4O%2FbQFi14zn4J4si6TnbvjTneZmkfiIp3RvBbi7gqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSFaMRKvwRFU3l3bCrcAxY7EeggIy9TAsngr8QQngqvlF34DGraKXVtCPGBI6U6G2kQtw0pmLU1gJmoCgroZTCMhyZ8%2FoZGnLjkp6h2CQ%2F1CVaLlCK6YZLsCMOWEuGuGOu%2BYV0un4vlABfd4rDHubhSFjGGVKccPOW4QArpcTVDuTpL4ZbYSteJJYcCAAbt9gWX19MyU3pI9rOb1GwbnYVTPTGQTvRYyXVEx0WEEBgGquvy9vKUvYLR3PeltaAYrV3fQj7G1zNWKRcoLk%2F%2B8KBNMFkeLK5UI%2B3vlijSnamP4IXMnQd4mTMrxgiOTdexkeSG3cZ%2FGi8LGoM9uWvcjFwZqfGYT0%2B7l6iDNvCf%2B%2BtonFHi03w5Vfd6eyReL4uENIzWGt00Th9iDLtL%2BkD5ZNgEk9Mau7TcwgG8bsvps12jEfrGyRLWvuFlrk7RNJUGFZ5k9J0n53ZTDRmxzBofYNzWMbL35CvTM1R%2BM8dl1raFEhI1u9sxeqmu7yapCm%2FZ89N0rtsBlTGNIqxz8Ve%2FTY%2FIZKADIrWjmHXKRHeAt5u%2F3prF2wxKkzFK2Y708hIxXhI8A1NUs1DdEta7YJS95hDeX9gAuZX2flSg6RNdQS%2FRcI0citFfng8Y3ofpr9WcYjfes7T1PIzl2EkZMOmwlMIGOqUBRbYJ2puceBmlKzhGCuWX3qIqpCKDeZcgHPqUTXDbimsDhoKVIxXBa9DMlTYj%2F50ow%2F3MBPnt2OlQJhKC%2FVT2hetYg2OmGXGKiOLv6i%2BZ%2FDxvP0gQKlzAPFNDvrjYLU9vw0qbuMPKNS7BcQDV5dmc9TCyOrBSjugA1mchdwWaPjZ2Wa0S%2FU8sp0D4IEJCkm2Bavqi6z%2B3%2BOJoRoNJ6iBIoymfaxne&X-Amz-Signature=fc1a55135089753f6eea2b3c9aaad6b88881681a5328a59b348d8e1cbb74a209&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRG5AA3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYwDWg1Y6MTZgZHzGOftchJ1uaYRT0f7k%2FN2LwjteOggIgKKH4O%2FbQFi14zn4J4si6TnbvjTneZmkfiIp3RvBbi7gqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSFaMRKvwRFU3l3bCrcAxY7EeggIy9TAsngr8QQngqvlF34DGraKXVtCPGBI6U6G2kQtw0pmLU1gJmoCgroZTCMhyZ8%2FoZGnLjkp6h2CQ%2F1CVaLlCK6YZLsCMOWEuGuGOu%2BYV0un4vlABfd4rDHubhSFjGGVKccPOW4QArpcTVDuTpL4ZbYSteJJYcCAAbt9gWX19MyU3pI9rOb1GwbnYVTPTGQTvRYyXVEx0WEEBgGquvy9vKUvYLR3PeltaAYrV3fQj7G1zNWKRcoLk%2F%2B8KBNMFkeLK5UI%2B3vlijSnamP4IXMnQd4mTMrxgiOTdexkeSG3cZ%2FGi8LGoM9uWvcjFwZqfGYT0%2B7l6iDNvCf%2B%2BtonFHi03w5Vfd6eyReL4uENIzWGt00Th9iDLtL%2BkD5ZNgEk9Mau7TcwgG8bsvps12jEfrGyRLWvuFlrk7RNJUGFZ5k9J0n53ZTDRmxzBofYNzWMbL35CvTM1R%2BM8dl1raFEhI1u9sxeqmu7yapCm%2FZ89N0rtsBlTGNIqxz8Ve%2FTY%2FIZKADIrWjmHXKRHeAt5u%2F3prF2wxKkzFK2Y708hIxXhI8A1NUs1DdEta7YJS95hDeX9gAuZX2flSg6RNdQS%2FRcI0citFfng8Y3ofpr9WcYjfes7T1PIzl2EkZMOmwlMIGOqUBRbYJ2puceBmlKzhGCuWX3qIqpCKDeZcgHPqUTXDbimsDhoKVIxXBa9DMlTYj%2F50ow%2F3MBPnt2OlQJhKC%2FVT2hetYg2OmGXGKiOLv6i%2BZ%2FDxvP0gQKlzAPFNDvrjYLU9vw0qbuMPKNS7BcQDV5dmc9TCyOrBSjugA1mchdwWaPjZ2Wa0S%2FU8sp0D4IEJCkm2Bavqi6z%2B3%2BOJoRoNJ6iBIoymfaxne&X-Amz-Signature=f36a09dbd87096865fd8075f046f2e22aea535cd5a45d4a7cfa2e7197f9b03f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRG5AA3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYwDWg1Y6MTZgZHzGOftchJ1uaYRT0f7k%2FN2LwjteOggIgKKH4O%2FbQFi14zn4J4si6TnbvjTneZmkfiIp3RvBbi7gqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSFaMRKvwRFU3l3bCrcAxY7EeggIy9TAsngr8QQngqvlF34DGraKXVtCPGBI6U6G2kQtw0pmLU1gJmoCgroZTCMhyZ8%2FoZGnLjkp6h2CQ%2F1CVaLlCK6YZLsCMOWEuGuGOu%2BYV0un4vlABfd4rDHubhSFjGGVKccPOW4QArpcTVDuTpL4ZbYSteJJYcCAAbt9gWX19MyU3pI9rOb1GwbnYVTPTGQTvRYyXVEx0WEEBgGquvy9vKUvYLR3PeltaAYrV3fQj7G1zNWKRcoLk%2F%2B8KBNMFkeLK5UI%2B3vlijSnamP4IXMnQd4mTMrxgiOTdexkeSG3cZ%2FGi8LGoM9uWvcjFwZqfGYT0%2B7l6iDNvCf%2B%2BtonFHi03w5Vfd6eyReL4uENIzWGt00Th9iDLtL%2BkD5ZNgEk9Mau7TcwgG8bsvps12jEfrGyRLWvuFlrk7RNJUGFZ5k9J0n53ZTDRmxzBofYNzWMbL35CvTM1R%2BM8dl1raFEhI1u9sxeqmu7yapCm%2FZ89N0rtsBlTGNIqxz8Ve%2FTY%2FIZKADIrWjmHXKRHeAt5u%2F3prF2wxKkzFK2Y708hIxXhI8A1NUs1DdEta7YJS95hDeX9gAuZX2flSg6RNdQS%2FRcI0citFfng8Y3ofpr9WcYjfes7T1PIzl2EkZMOmwlMIGOqUBRbYJ2puceBmlKzhGCuWX3qIqpCKDeZcgHPqUTXDbimsDhoKVIxXBa9DMlTYj%2F50ow%2F3MBPnt2OlQJhKC%2FVT2hetYg2OmGXGKiOLv6i%2BZ%2FDxvP0gQKlzAPFNDvrjYLU9vw0qbuMPKNS7BcQDV5dmc9TCyOrBSjugA1mchdwWaPjZ2Wa0S%2FU8sp0D4IEJCkm2Bavqi6z%2B3%2BOJoRoNJ6iBIoymfaxne&X-Amz-Signature=1f283cb4b42b28065b509f3491fef08f521b8cb334a317af1ad70d669b980acd&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFYFGHFZ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfvsPGF%2BF0m%2FIhR2ahsP9dxeMXFZ5sY%2Be6ldGfV0xdmwIgN7MMK3h9on5xyqHc6H%2FEzsLccKIDuZZLE2MrEKcoSR8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQCbMkKXwOTi6od%2FircA51%2B%2FZCe1HH33QwOtCC0DdKoznDyr4kq0q5FtLz%2BvEGUoJRN7LHtJYjEZGk4CYe6uAoodDr0JlOpLMHtGK%2BwCz6PXMkmtsryyOMN1hvJ7t6h5C1dWyoncGgyUV7y9wdqLJILPd%2FMrYlyOcPkcLEQ8SFgFyISnxI5kB62ard8i8f5NF2tBllOfPlexutrTFRGTI5%2Bpk0w4zZp9QaerfBTHBNrbmFarDZXOIrGEzfmUwdhASo6K6M%2F9Zvypww3BJta%2FfO7Fw%2FK%2FRzLhUyvlwuk9jf3OUt%2FuC6wQkqYKE%2BK%2Fi6pUKkmfHWHRDYIWIwWQPXexBcJGRCgejtW3rRnpinPjSpqUnw5xJF38dULrAiiC7PeusBSU0Md9eZVEU46crX%2FZvWHL%2Fxo9AWVCVrOTX3AygSfj%2FPsEs4C8nr%2BaTPX5QsVQkr4ZUF9gU5FCVOPKH5ujp%2Bk%2BdhT8xTTowgAIhgGTHueST78g8BxaSYWnN6GvIoFNYqGsLBubGcgpg91dZx7OurPa8kJblBvaAeJhkv2Bg99A9gckBGYxJHCaK3c07wmjxiypW4GXN17JFn6u0s7%2BkTslQLuj1ZUVWiYA9fKPKlEs3PgxEtC8linqgAbC%2BXYwoYdLF2U38QBxhuGMOuwlMIGOqUBen3WRcSwuhI1oLEHwRspvT518SdXFNvNLMh56%2BiCzF7qiDAlble4v9KGAvOPyvytB4x2gY9WcYIVkIpB1AMXNeDyN52sm3OYgV5terHbrv9dBqJGc1YANaiMXWrbl2bjlmRypFZV1RMRqgIHQw2oCIWQPGL1GKBF%2BJmhcPa0GFMxwwMy3SZklW%2Bv4SPIRVkisA3NOO6GnHO07KTd35DZfWbj2rjf&X-Amz-Signature=b10f36ecb032674eec2e218b236ebd6f0a7ccd400a7e1a92dd0ff67950cd9d84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7CBBH4%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNy8Gkg%2Bur7K9mIGe4Ubn9MNgkaZOvjniTSc4BDzPesQIhAM8uP0WSBQT4VAwdlZp5tLZy%2BFF0msRxjEcMVwvYb03TKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxAX6m7Fyea%2BVYiwMq3ANY0xqnwyecgRSQ6H1P47HdFFvrlRNDlpxkqiK43SOUKBkbcrL7%2BsC8vFZaY%2BHz30vcR%2FcndykIMXLYvAOr2QQqBk6XOBu1uqZHrIqjN%2FOO%2FccGPWvv4s7nUwbWi4FTbPxA%2FwXqy13ZUMR2sgLXxYufZKus%2FirwX3dgvMnSp%2B5TqyfLSARqsyJtqsC3l9Z2986z0fq0epf%2FRNvS9qFvTMuiwqKBHnO%2FSNSh%2BQiAXVRS9%2BRZAXIjx61JlVXz6N59nkQSVPqxtjHjfTQlApLKVBxy1l2M52D6pTXrtYU9UXiauEFOFB8eAqAW9%2BcRqRmFvrZps1FIxcf3E9XwJ2Jh1qcvQuPjMlR2dfoMAqzucCitg1%2B27VBflpaQYfsPiiVX0d8AOvfXiIT%2BDe4%2BEiAY3KzwSYYG%2Fcwrm%2F1B%2BCQ3csxjN8SAXNmUSLvxEOMMSmKRe7kz8Vs6XtOGnsW8%2BDEOY9TwCWsxP3KotGhHKXMCGna%2B%2FxiQCSKPDuu4pXi5jT3dXS60e%2FNyHmCBHEMh3PskwdZ4SIBkPaouGtJq%2Bh9jcmK7Dqz03A%2BE9LGPl7NC6mkO%2FYWwWF2eD%2FI6zIS3hyPa9YCFZsxlIF5TrAb3IZKQ76RdkLwE21hMABfI8eO5ODCJsZTCBjqkAVcMcZsRAsh2w%2BJY46d7BCgCxZrfR0ZFrvqY5x3SoxL%2FSxcMfPh3t4ZedlIEDymcvbXN%2F%2FsbN0Ln94yEdBHgu84VPYiaIBir%2BcwLv6JHCbpSh8QmpW401%2Bnr3Dp7rbhiExdz3k17mA3EfCHXUKmlo5rkFSiPM7%2B2qyIXa2%2BcvV1HN26KNHJnBtZkQ5RqcxIc86EPi0GRYZcYpqyRWfHdbIUjJRMp&X-Amz-Signature=d3fbc0e57bb7e64b2c54a491b949e37c8810b73231811014631a3d45644d3657&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRG5AA3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYwDWg1Y6MTZgZHzGOftchJ1uaYRT0f7k%2FN2LwjteOggIgKKH4O%2FbQFi14zn4J4si6TnbvjTneZmkfiIp3RvBbi7gqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSFaMRKvwRFU3l3bCrcAxY7EeggIy9TAsngr8QQngqvlF34DGraKXVtCPGBI6U6G2kQtw0pmLU1gJmoCgroZTCMhyZ8%2FoZGnLjkp6h2CQ%2F1CVaLlCK6YZLsCMOWEuGuGOu%2BYV0un4vlABfd4rDHubhSFjGGVKccPOW4QArpcTVDuTpL4ZbYSteJJYcCAAbt9gWX19MyU3pI9rOb1GwbnYVTPTGQTvRYyXVEx0WEEBgGquvy9vKUvYLR3PeltaAYrV3fQj7G1zNWKRcoLk%2F%2B8KBNMFkeLK5UI%2B3vlijSnamP4IXMnQd4mTMrxgiOTdexkeSG3cZ%2FGi8LGoM9uWvcjFwZqfGYT0%2B7l6iDNvCf%2B%2BtonFHi03w5Vfd6eyReL4uENIzWGt00Th9iDLtL%2BkD5ZNgEk9Mau7TcwgG8bsvps12jEfrGyRLWvuFlrk7RNJUGFZ5k9J0n53ZTDRmxzBofYNzWMbL35CvTM1R%2BM8dl1raFEhI1u9sxeqmu7yapCm%2FZ89N0rtsBlTGNIqxz8Ve%2FTY%2FIZKADIrWjmHXKRHeAt5u%2F3prF2wxKkzFK2Y708hIxXhI8A1NUs1DdEta7YJS95hDeX9gAuZX2flSg6RNdQS%2FRcI0citFfng8Y3ofpr9WcYjfes7T1PIzl2EkZMOmwlMIGOqUBRbYJ2puceBmlKzhGCuWX3qIqpCKDeZcgHPqUTXDbimsDhoKVIxXBa9DMlTYj%2F50ow%2F3MBPnt2OlQJhKC%2FVT2hetYg2OmGXGKiOLv6i%2BZ%2FDxvP0gQKlzAPFNDvrjYLU9vw0qbuMPKNS7BcQDV5dmc9TCyOrBSjugA1mchdwWaPjZ2Wa0S%2FU8sp0D4IEJCkm2Bavqi6z%2B3%2BOJoRoNJ6iBIoymfaxne&X-Amz-Signature=a3a75d9813f02a7b294aade198e34be832ef0000c73ae0f529c3aff196ba975c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
