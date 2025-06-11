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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6VTJVN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCteCdWj9TsBQWnrMbayy3ZzWf37tRa%2F4rZBfLJe1xG4gIhAK%2ByuL0reO9lIKIrCIwoDKQuZFhCXXbtKiNHLbjqhv%2FoKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpSXcqZRzl7oYUqfIq3APOK0V0F04M2G9ab3YeFqAogQTRQJrMhqxFDWHsIX1NeLkPDCm75uUS8Bo6nhdAKQ9kLstOWM0htsKbxfYwJSpCbNaQtEisTUti4YmfS6kECOFX%2BN0MMRTaTA0d9X51DrQLgmKVmf0rhfRxg%2BTKZurxw0xaVLz9Iu%2BNdMa6A0V7s1AE5l1M8n92pAqunjO1oI6k9dvfo0J1ySgqBkOUJjqooZpZfxyTZpBaDYj5H%2FmqLFCK3%2BmlhHUnGxglVfIfT0z8K464llCuY4UgVVLiXu3r7xleVvSqM0E8w%2FRbbyQgWALCXuxTbV7VJHS0T1Qe%2FwWAEujCAFtjwLKhOMYzIU3pt6KsXpgxOHsz5nHkI4Ou6%2FgTfnDW3pk5spSNExfKe1C6wO7sIq7%2BF7PNKIzrc14sIOxQloB3cFdae76caTApYMEgOV9KceqbHJmHXNzGGm%2B9GYtEFbbq1lBwBSU7BffUqaZIDNJ%2FeJwEF5ObZqhnfL5DrzB7s3g2xjI077WcmgbBoDYFZQ4tgEt67L3xWwyFJ2BlOWsWYHe6vlD6%2FATGEe6HR1F9buQXW46TNvbcRU5R%2F08NleKytyeCNtrFb%2B18H9stubSfwvhlO8Oq0TgYCQdWbg%2BQOGVwGuUQUzC6mqfCBjqkAck3vcM%2BTxIf4kGZUATFEvC6GA4PbTP6hv02Cs%2BSPtGIrV%2FIr33aKtFwlwoXZZnkU9I7s1X8nLXY%2B%2Bu6bZaFqCBAEZ6zf3Maee%2FFbUp5obU3JyiABMK%2BP%2F6vRaJ6qY9Da5FOSKJ6uMxnHKNncYLCfmSu1bYDR1V8P9455P2efz3F%2FnFvQyMhKLGpPq%2FP9S%2B%2B%2BY9UMC7ko%2B8dZnMDQFN9HlzhN6CB&X-Amz-Signature=afde975504c0cf48cebf077281d4d42e578db9a1dcb2b25e5c1c5520b64a0fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6VTJVN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCteCdWj9TsBQWnrMbayy3ZzWf37tRa%2F4rZBfLJe1xG4gIhAK%2ByuL0reO9lIKIrCIwoDKQuZFhCXXbtKiNHLbjqhv%2FoKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpSXcqZRzl7oYUqfIq3APOK0V0F04M2G9ab3YeFqAogQTRQJrMhqxFDWHsIX1NeLkPDCm75uUS8Bo6nhdAKQ9kLstOWM0htsKbxfYwJSpCbNaQtEisTUti4YmfS6kECOFX%2BN0MMRTaTA0d9X51DrQLgmKVmf0rhfRxg%2BTKZurxw0xaVLz9Iu%2BNdMa6A0V7s1AE5l1M8n92pAqunjO1oI6k9dvfo0J1ySgqBkOUJjqooZpZfxyTZpBaDYj5H%2FmqLFCK3%2BmlhHUnGxglVfIfT0z8K464llCuY4UgVVLiXu3r7xleVvSqM0E8w%2FRbbyQgWALCXuxTbV7VJHS0T1Qe%2FwWAEujCAFtjwLKhOMYzIU3pt6KsXpgxOHsz5nHkI4Ou6%2FgTfnDW3pk5spSNExfKe1C6wO7sIq7%2BF7PNKIzrc14sIOxQloB3cFdae76caTApYMEgOV9KceqbHJmHXNzGGm%2B9GYtEFbbq1lBwBSU7BffUqaZIDNJ%2FeJwEF5ObZqhnfL5DrzB7s3g2xjI077WcmgbBoDYFZQ4tgEt67L3xWwyFJ2BlOWsWYHe6vlD6%2FATGEe6HR1F9buQXW46TNvbcRU5R%2F08NleKytyeCNtrFb%2B18H9stubSfwvhlO8Oq0TgYCQdWbg%2BQOGVwGuUQUzC6mqfCBjqkAck3vcM%2BTxIf4kGZUATFEvC6GA4PbTP6hv02Cs%2BSPtGIrV%2FIr33aKtFwlwoXZZnkU9I7s1X8nLXY%2B%2Bu6bZaFqCBAEZ6zf3Maee%2FFbUp5obU3JyiABMK%2BP%2F6vRaJ6qY9Da5FOSKJ6uMxnHKNncYLCfmSu1bYDR1V8P9455P2efz3F%2FnFvQyMhKLGpPq%2FP9S%2B%2B%2BY9UMC7ko%2B8dZnMDQFN9HlzhN6CB&X-Amz-Signature=cf15e3b7931a0a1abe8f55588370b634b5b6c6acea614de2f4505b808d76eed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6VTJVN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCteCdWj9TsBQWnrMbayy3ZzWf37tRa%2F4rZBfLJe1xG4gIhAK%2ByuL0reO9lIKIrCIwoDKQuZFhCXXbtKiNHLbjqhv%2FoKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpSXcqZRzl7oYUqfIq3APOK0V0F04M2G9ab3YeFqAogQTRQJrMhqxFDWHsIX1NeLkPDCm75uUS8Bo6nhdAKQ9kLstOWM0htsKbxfYwJSpCbNaQtEisTUti4YmfS6kECOFX%2BN0MMRTaTA0d9X51DrQLgmKVmf0rhfRxg%2BTKZurxw0xaVLz9Iu%2BNdMa6A0V7s1AE5l1M8n92pAqunjO1oI6k9dvfo0J1ySgqBkOUJjqooZpZfxyTZpBaDYj5H%2FmqLFCK3%2BmlhHUnGxglVfIfT0z8K464llCuY4UgVVLiXu3r7xleVvSqM0E8w%2FRbbyQgWALCXuxTbV7VJHS0T1Qe%2FwWAEujCAFtjwLKhOMYzIU3pt6KsXpgxOHsz5nHkI4Ou6%2FgTfnDW3pk5spSNExfKe1C6wO7sIq7%2BF7PNKIzrc14sIOxQloB3cFdae76caTApYMEgOV9KceqbHJmHXNzGGm%2B9GYtEFbbq1lBwBSU7BffUqaZIDNJ%2FeJwEF5ObZqhnfL5DrzB7s3g2xjI077WcmgbBoDYFZQ4tgEt67L3xWwyFJ2BlOWsWYHe6vlD6%2FATGEe6HR1F9buQXW46TNvbcRU5R%2F08NleKytyeCNtrFb%2B18H9stubSfwvhlO8Oq0TgYCQdWbg%2BQOGVwGuUQUzC6mqfCBjqkAck3vcM%2BTxIf4kGZUATFEvC6GA4PbTP6hv02Cs%2BSPtGIrV%2FIr33aKtFwlwoXZZnkU9I7s1X8nLXY%2B%2Bu6bZaFqCBAEZ6zf3Maee%2FFbUp5obU3JyiABMK%2BP%2F6vRaJ6qY9Da5FOSKJ6uMxnHKNncYLCfmSu1bYDR1V8P9455P2efz3F%2FnFvQyMhKLGpPq%2FP9S%2B%2B%2BY9UMC7ko%2B8dZnMDQFN9HlzhN6CB&X-Amz-Signature=e26806176f2f640281969434dab2c24e5e81b7d4acd25bba8b79a50296fc6830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677RNLHT5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCw0l%2BoTCGQHvJYvdXijhKy742RfqKsBvnMGSAxt2d7PgIgJnoIhhhjwwjCGhYg5oOSLtFgfHjcKV%2BNgsx9EGAOdcgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsCd10qvzwDMzmfSircA2Ajo3kHTpHCAACMmhv4Vq7uj5FtHIDOGcF7XuzH8Q1SzkdH%2FTJKtH4nym0e5u5HHTD5Q0PvXx%2FP%2Fi7RlvSQtTN%2F2zEOiNGlwMcb%2BWKOW0kRF%2FQgOtkalCQC2bJagLkDFOFvjd9oGmP4%2F2Fm7hR4m9iR0FRpONt5cvp4fFlc8KSdM0Pep9hRS%2FZ%2FtDQUFUNVC%2Fg11nzFfV0TQTqmoq5ngsIrwhidApfLwGOym9Nd4FMbdo9ezFJVQwg2%2FZ8L3kI8egg8aeZO%2FCJZHBhV239y3NrCrDEL%2Fho5LHne9vm%2F%2BPV4tRoS5a%2FHcH%2BZjpn%2BIvDMgi72nz0LgbYUzxXEDzoRT5patXFLflXD1UBCGkoNlAVMbMYIfPhysG%2BHUJ26n6q4J7XpmxJCa1c6JRiGYktjHonkN4ctdcpfzB1JWAEds8guK309mikdIRzqYgRr0DdMesuuNbxM2dVtXKTmZ18eNjeS7wV5gtssntvfeKHSuAtW5cODL8frKMV4uK5YdiPXsQ9GEzX84YYtHCA24BZpVkMlpRYldhI50UCY855M4KIUZMSyvFQNM5406%2BSpK6mizt1QB8XrUfuMk1RcLB4B1N4b9ZfbihNKbfq0jksS%2Fd3%2Bwu6uNDn8pQ25N%2BwFMJyap8IGOqUBnzBPQuDv5D8Yjvqu963rY0X5uQOTFMMb7Luq%2BMN%2BGjLBvBDiXe4qAjCpGXdXtBaYyq0EA9X9yMuVpQRXBxYV2SNJRRHObVoeOqx%2BXPHIappLZN1Oh%2Bc5S6rZ2tdZurWZqgwy7OTvP2mARXtfkJHeov5N408VDQUwuG9YnDtlSZtyS3eHqrTMjBMcvpG834w66p3kL1Vom0cUhkBiPwAcVIrgGcqe&X-Amz-Signature=a43662816f4b75609f75eaa2a6358eb9b561b5eab1914576e4db6397e7fba475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWHJEMBU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCTdRWR8P05vmuaHqlzOTjlK9zcnw3Hx%2BoC9rEo5tP2SwIhAJroRVtupUp3L9eWNuor2f%2B7aymzepWmkJ6thZocAu3eKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqBB8zUr8bmmDO7yAq3AOolsVD8NkZxvqeqytlEe3aXbmljMmHokKALbfzrIvs1khuvQq8CjYFsZOetvo9LLMawMppUsYs9uzmPD1ouIwaHb3rGktAveDg6FT8KxRyN7lYIlKi%2BafqxhCXJPfRfB4OnXSY%2F4KwjUkJPpSEbxU1IAZuKtjpQc79%2BHTpjYKZS8vstsFEw6TaeMRIp%2BgD5Bnx%2B1hoBJw5M4EcCS0kkgrqeBrhOIqPGLb42lUOTph0VRn4GGxjatKQT1XqM6w%2B6ryzNqGxqY9AJ51WTUJVI8YD1DmsS%2Bzql6plAPc98Hc8VnJt7uo9NAAnRnyal09Q5d5UOJyuQNrxqUU7kBsHmTaDXjV5p8MtlHb0jDutQizbvmaYE8RhtYFnPm3rnZXnTg9ZE6a0%2FFFQ%2FM3%2B6awdQm4XY3TEX8RqVos3U0PGZjqYKqgerrQ9AkkG3XRt%2B8lskDOqyYvvOuu07JrEsdoYa49ZzzT%2FRm6z%2F%2FWf2IkdkNSG1qp35C8Tf1SfQRDrLc2dWoDHsj1J4FIY2FrT%2Fii9A31Q4kWTYOIiSf4Xj3uTLr7KjOidJ4PipC7R%2BkFZleu1shARm5VwCTG%2BfNvdwM3mzTK%2F55clhVjWxiUz3fg%2Bf4VZXMM805Fpd5ahFqIMrTCJmqfCBjqkAYxiAu6iAn4dfHs%2F17GrMw3xRe302wKt2lBC8nDqwryrf64P1C4FVkzVnRxFs3o13%2FjCM1HYHmz67Im3UkaXI7tMuoSIHvdTukeWCDWAGX1kAuNcS969%2FHUGOsTddmGS1S2UaWmyocnLrLCzZY%2FwIyBW71o3wCU69H702WJOA3h4rX%2FaIeDYo920UJj3xlaOsYqFhI26WNuXZCJzn7A3BqugSm5I&X-Amz-Signature=1bab2c78fa0b094cccb6148c250c0b5e129ba42ffaf9a4888172f30af551ea3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K6VTJVN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCteCdWj9TsBQWnrMbayy3ZzWf37tRa%2F4rZBfLJe1xG4gIhAK%2ByuL0reO9lIKIrCIwoDKQuZFhCXXbtKiNHLbjqhv%2FoKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpSXcqZRzl7oYUqfIq3APOK0V0F04M2G9ab3YeFqAogQTRQJrMhqxFDWHsIX1NeLkPDCm75uUS8Bo6nhdAKQ9kLstOWM0htsKbxfYwJSpCbNaQtEisTUti4YmfS6kECOFX%2BN0MMRTaTA0d9X51DrQLgmKVmf0rhfRxg%2BTKZurxw0xaVLz9Iu%2BNdMa6A0V7s1AE5l1M8n92pAqunjO1oI6k9dvfo0J1ySgqBkOUJjqooZpZfxyTZpBaDYj5H%2FmqLFCK3%2BmlhHUnGxglVfIfT0z8K464llCuY4UgVVLiXu3r7xleVvSqM0E8w%2FRbbyQgWALCXuxTbV7VJHS0T1Qe%2FwWAEujCAFtjwLKhOMYzIU3pt6KsXpgxOHsz5nHkI4Ou6%2FgTfnDW3pk5spSNExfKe1C6wO7sIq7%2BF7PNKIzrc14sIOxQloB3cFdae76caTApYMEgOV9KceqbHJmHXNzGGm%2B9GYtEFbbq1lBwBSU7BffUqaZIDNJ%2FeJwEF5ObZqhnfL5DrzB7s3g2xjI077WcmgbBoDYFZQ4tgEt67L3xWwyFJ2BlOWsWYHe6vlD6%2FATGEe6HR1F9buQXW46TNvbcRU5R%2F08NleKytyeCNtrFb%2B18H9stubSfwvhlO8Oq0TgYCQdWbg%2BQOGVwGuUQUzC6mqfCBjqkAck3vcM%2BTxIf4kGZUATFEvC6GA4PbTP6hv02Cs%2BSPtGIrV%2FIr33aKtFwlwoXZZnkU9I7s1X8nLXY%2B%2Bu6bZaFqCBAEZ6zf3Maee%2FFbUp5obU3JyiABMK%2BP%2F6vRaJ6qY9Da5FOSKJ6uMxnHKNncYLCfmSu1bYDR1V8P9455P2efz3F%2FnFvQyMhKLGpPq%2FP9S%2B%2B%2BY9UMC7ko%2B8dZnMDQFN9HlzhN6CB&X-Amz-Signature=f23dc7bf5afb38cdf4941d3b22e87957a7d14e11a25c376a90cf28f9377a8b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
