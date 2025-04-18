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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5L2QCUZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfSgiQcOGiDzrKcpjVj2hSm3U5%2Fzy5KWsMvBcXAIzObgIgfo7NAMmEPMAy6%2Fpj9holFOvUKWuI%2FWl2IEAhQtu2EGwq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDI4Xt2RaY3Ie9h985SrcA7yRRQqoSec6nVKZZ19ZmFXfz6y4s5jycSR3uOzpwZYr3%2B3lhbT%2FkAXxCJdJasrjJgW7ne0%2BHvmPur0TKh5LD%2BID25kQcbRQbxPejMZZHKSbLsFmKQ6cInBZPkoY18iDQFTLQPw%2FDaFka70wxauV5z93ygLwQhekuNtwr9%2FnVmu2iSuP8wAvC8XtZAPbCRERh63VLxqUsipFptiqDLMuyQUwWittlE2zaJnW4MuKTW5g6679LE75dM%2B0TZmDzjmIhEFvaoInKOBVpTa7LFQKwfRa%2BhwgpigUjT%2FL6W0MBJNquix3J1PC6cfZFQvAG6e%2Fr62i8TrTQnMzLxLsjxbftAIm%2F3qJiOb7pnLrqceSQbiDZsVuWS86GyS99WbrJvtgAZG%2FEAu3Gc%2F%2F4N%2B1UlHWo%2ByOEe4a4cZ8WhdFKD6UPksEYgAvj3p5PaPwWjEw0F4vG3mf%2BK2%2BsX4%2FeSMwqiaP7RNU%2BSBlwetpsQOsKMf%2FI0N0ZFnze1XlQEoER08vxWkfxlFizK2Bud30ND%2FKpyILpQYp7I2HkqCZDCBe4odSgpuUJA%2Bqqic2ttgYqHj0IjoDf580l2dRKPt5QJ8SdGkUvpauLRcVczKJZ%2FoIFeo7ngfkk%2BW1xiCP0uACUFy2MLS9hsAGOqUBPAX%2BWyFSbKz7A8wdKpFcdpsNWy8AmZTrdPdx5HuBFiygYfUPOpXNfkvUSVhOxJzrKmvxHDfpg0eWSNVfz1%2Bvz1%2BhdPdfX542akaNNXpmw6BOBS9YsCL3mo62WS6VNLn5pIqmAlNpFf372FSigtrh8CgZk9YYo9a7nRmhB%2FLmt2BqNWGMX6%2FE2VSxX%2FZOD3vbCwsRULxXE0JXw3aLPAdTQ17V%2BOH4&X-Amz-Signature=4f0a7aee7be4fc4fdde598fec3069daec7e90f91839abddb3aa4fa1f56459708&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5L2QCUZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfSgiQcOGiDzrKcpjVj2hSm3U5%2Fzy5KWsMvBcXAIzObgIgfo7NAMmEPMAy6%2Fpj9holFOvUKWuI%2FWl2IEAhQtu2EGwq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDI4Xt2RaY3Ie9h985SrcA7yRRQqoSec6nVKZZ19ZmFXfz6y4s5jycSR3uOzpwZYr3%2B3lhbT%2FkAXxCJdJasrjJgW7ne0%2BHvmPur0TKh5LD%2BID25kQcbRQbxPejMZZHKSbLsFmKQ6cInBZPkoY18iDQFTLQPw%2FDaFka70wxauV5z93ygLwQhekuNtwr9%2FnVmu2iSuP8wAvC8XtZAPbCRERh63VLxqUsipFptiqDLMuyQUwWittlE2zaJnW4MuKTW5g6679LE75dM%2B0TZmDzjmIhEFvaoInKOBVpTa7LFQKwfRa%2BhwgpigUjT%2FL6W0MBJNquix3J1PC6cfZFQvAG6e%2Fr62i8TrTQnMzLxLsjxbftAIm%2F3qJiOb7pnLrqceSQbiDZsVuWS86GyS99WbrJvtgAZG%2FEAu3Gc%2F%2F4N%2B1UlHWo%2ByOEe4a4cZ8WhdFKD6UPksEYgAvj3p5PaPwWjEw0F4vG3mf%2BK2%2BsX4%2FeSMwqiaP7RNU%2BSBlwetpsQOsKMf%2FI0N0ZFnze1XlQEoER08vxWkfxlFizK2Bud30ND%2FKpyILpQYp7I2HkqCZDCBe4odSgpuUJA%2Bqqic2ttgYqHj0IjoDf580l2dRKPt5QJ8SdGkUvpauLRcVczKJZ%2FoIFeo7ngfkk%2BW1xiCP0uACUFy2MLS9hsAGOqUBPAX%2BWyFSbKz7A8wdKpFcdpsNWy8AmZTrdPdx5HuBFiygYfUPOpXNfkvUSVhOxJzrKmvxHDfpg0eWSNVfz1%2Bvz1%2BhdPdfX542akaNNXpmw6BOBS9YsCL3mo62WS6VNLn5pIqmAlNpFf372FSigtrh8CgZk9YYo9a7nRmhB%2FLmt2BqNWGMX6%2FE2VSxX%2FZOD3vbCwsRULxXE0JXw3aLPAdTQ17V%2BOH4&X-Amz-Signature=f5b5c66bc67e3d8c6e930914eb0cb0d91c7f314d6e1d028604a03f4d9b95e163&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QY77M6%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmZmkMYPowl8W2v4qvhK6lazg15uS0l%2B%2BlnFcpN8zwFAiEA6fHIJBI3vCNVbxOpE0ZQAKgWmT6GVZXKLKcg0We2Vpgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHmtTxOC4dmDKc%2B83CrcA7nsF0yAGe5WLAWYpxmwrp4EulrnNU5nHHwm7CzpV6KQxlt0QaS7AzxNIH1UyoFt0s0XAdXElz5RhqZGXzK8fbagrcDMLMIabbyyf2m4K%2FZwScqfJ6N68%2FwMkrxAVfMJG7qUOOq2T7N4EcryNvLoJ5pzAh7RN1dAZ9yH7BmITImTZycYNon5PWXudu%2BL2p02Y2JN3mLTuT7jG6dNnSgTGXoOIk%2Bl5qw%2B8Z0IYiqTuXHkiSDd8PXwKhqp%2B5OyJZRWXvwkdc0w5Q78Lh0iSyGLQa%2FeitQcz8lSH%2BgkyPn5aMFd7xu2RmHACQI80LQTw6%2FvpdPMbU%2Fs7g%2FSAjihWkzfwdF0auHGy5lXRlJH4sJGCVoVMk80yR5iRua7s%2BZZIntGR30J1hIQOYJVrgrb02kh6FElrww7wq6FsXjW4S9%2BSiBcedVQYRmVWCFquouH0aKG14uEVCwjB%2Faj1JLH0zQenH9AidGICqVgZCDDEpYfZJ2zNAoQpf2Rvh1vLWswoT3e1TZlhCb4uCI5lNyaYZ%2BKqN5e619Clq6xqEyCUD7JVHGAxWOLUZr4DnFibCQDHIlS6BjsB9zyX%2BK01x3%2FWOw20OVpqYmB7lJuPxnwzgVfeGjh1QwiOMyBW7oSKL5gMPqfhsAGOqUBTZ1wQclzjQtcOYmAJHpG2ZoIgez3jx%2F2UNXXWD3ylt4wruzu%2Fb7pzZgOqtO68Pqnci7Y8%2FqDdvZHUMcR0q65XlUGLFJyYQa8vzJdkx7cdvBE8z8B1rQ2oxm0zmaO0pd7UYD7fs1pcbkH0FrCAW1sNQqgQUW8rXBtRNhldY0tPVWTMi%2Bv2uLW9QluLG5F%2BjpbB8vYElUI39a2IFOf3x6tU2JnxYXu&X-Amz-Signature=a3f5e30ac3eb3694584eafdad99a5f81a51da26a9dbfe830bb7e71f36abc8395&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRN2ALQK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBUPs6NyqOtzV2VulB2DqNB13HIlFQxepWxZeXEehuHAiEAp%2F9YmESxKt01sa%2Bb9IAYwnwklHuH0X%2FkWqR5oLjF%2FAUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNGFOYadikoz%2FRJzeircA2%2BMoJuSsqv7X5DMRknxjagH4yAb%2BanyPu18Qr41JQgiP0Yw9G7%2FLvoF%2FXF%2F79B80N%2F2zhlRt7N1Q734REe0y%2FsUkgsZunxJEgEvSh7z%2B0CGDrVxJoNe1tQjOwNlviTlIvGplCQmxWYn3PAcjfJ0N8Wg5A0rsje2PznLLt0Z21SnuvrGWJeJ1uHMer57PEoM7yiPrYIGDojrvPwiAq6sRelno0iMJzV3kONVkPgBK6s89ejoqqi08wqWQ8m6MPNMnhIyQTCX5WZ9xgZw%2BhO8yUqbh%2FUq763k6f2H9ADt61vDF8Dw7aU4yOeOOoA0uqQSWU2%2Fs%2BF4PK4wft1inu6u5m11UrWh9ukeYPIcFkWI90x6iqpzZpUEu4iJBdJPzd%2Bjk42z39N8FWEKnMvzxN9On%2FCdcvmj0xUo05oimpYTBkpxqwbkL9nA7NCVikoigp4emrYnTr3P05ODHm631AjcXv8y5HqMbMyyMbjNljU4R%2FHejjv3bWaur4q0tZRJK2q78dvjhWgNjyHMlc4%2Bp4YNu8tyVAUJtwFsAGyliA7Qr38z3P42K9hOI%2Bq%2BpBfVlHLh9wdDWyeU6fi1bSP68gCW1EnFJSKk2HnN9VL2zNkzW8KRmBMrSehtNoBxMdiTMKi9hsAGOqUBoOCuqOADiOYACypJus5aW8lrmkxGWibuzILnziKArnqkFOXcNcGOpe1ta4IWhba3AwERuRridDwB4F%2Bnv7aS24pkMcRxqDqT1oPXRR74UnF9ZT%2FStfpPzwz2naLNWe7jVj75%2FWNQNiJ701lmbzduxQOcoftO76lhXMsPqWfQXB0TGXPqSHovMb5iIIo%2B%2BFoGTHzMeFIj38HlyxfRzeKXuCVGVUWr&X-Amz-Signature=b2bd30603d763f8824870ebc021c667548150b9f5fd5ef7ee0e710cc3b2a4a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5L2QCUZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfSgiQcOGiDzrKcpjVj2hSm3U5%2Fzy5KWsMvBcXAIzObgIgfo7NAMmEPMAy6%2Fpj9holFOvUKWuI%2FWl2IEAhQtu2EGwq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDI4Xt2RaY3Ie9h985SrcA7yRRQqoSec6nVKZZ19ZmFXfz6y4s5jycSR3uOzpwZYr3%2B3lhbT%2FkAXxCJdJasrjJgW7ne0%2BHvmPur0TKh5LD%2BID25kQcbRQbxPejMZZHKSbLsFmKQ6cInBZPkoY18iDQFTLQPw%2FDaFka70wxauV5z93ygLwQhekuNtwr9%2FnVmu2iSuP8wAvC8XtZAPbCRERh63VLxqUsipFptiqDLMuyQUwWittlE2zaJnW4MuKTW5g6679LE75dM%2B0TZmDzjmIhEFvaoInKOBVpTa7LFQKwfRa%2BhwgpigUjT%2FL6W0MBJNquix3J1PC6cfZFQvAG6e%2Fr62i8TrTQnMzLxLsjxbftAIm%2F3qJiOb7pnLrqceSQbiDZsVuWS86GyS99WbrJvtgAZG%2FEAu3Gc%2F%2F4N%2B1UlHWo%2ByOEe4a4cZ8WhdFKD6UPksEYgAvj3p5PaPwWjEw0F4vG3mf%2BK2%2BsX4%2FeSMwqiaP7RNU%2BSBlwetpsQOsKMf%2FI0N0ZFnze1XlQEoER08vxWkfxlFizK2Bud30ND%2FKpyILpQYp7I2HkqCZDCBe4odSgpuUJA%2Bqqic2ttgYqHj0IjoDf580l2dRKPt5QJ8SdGkUvpauLRcVczKJZ%2FoIFeo7ngfkk%2BW1xiCP0uACUFy2MLS9hsAGOqUBPAX%2BWyFSbKz7A8wdKpFcdpsNWy8AmZTrdPdx5HuBFiygYfUPOpXNfkvUSVhOxJzrKmvxHDfpg0eWSNVfz1%2Bvz1%2BhdPdfX542akaNNXpmw6BOBS9YsCL3mo62WS6VNLn5pIqmAlNpFf372FSigtrh8CgZk9YYo9a7nRmhB%2FLmt2BqNWGMX6%2FE2VSxX%2FZOD3vbCwsRULxXE0JXw3aLPAdTQ17V%2BOH4&X-Amz-Signature=65e059e2e24d0cf8e088176d3187ea756810148c0e5c05e7be34125a4054a0ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
