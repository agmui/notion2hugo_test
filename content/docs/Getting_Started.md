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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXUETVUB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDvzbiJ6IzGnHPe9wZ4F7CTa4kqsDIQPiZiEfIgSTxnWAiARyQF2C1LOPekLwiz6qh94MVdauFP%2BICA8czUnIjc77SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa8j0DsAY2kDhNG0FKtwDjFz7KusDSJGMCA3GKGUop8uxh2Nf0GHP5f9I%2Fh0GNCrDl1Sz%2Bg6qQOjigFz8de7UZ82KpDB0ZKx%2F13LhNOOyHlhipKe0TG1qiYEhcP7nA82rY7j6a58ZUslQm21yfYLuO9h7RqeTo%2FmNHXSdSdc9ZkVn%2BQev7lG4bO%2B9D55LpnAtuWuNB0J6QcdtNNjcP3%2BAgdsoTGCGtWo48xkioE9CLs%2FBte3dBsY4KAiCKXyikuFMX4CLZewcdWYMjD%2FmfDB6yU2KzYWijAFNsqYA9jtl0wssJppVsX2NZvEKNvf5MDotoZNMyU8Y8JUTy4t2gwyQ5kzPG7QwECqbppZ3byv8IPDt67oOCUYn6sBzdF0XadCAfpWBggkE5Sk4Wa7yXL9VZslysKfwehwqsSs0BVdhVg3I8y6qbxWgEaqgFIye6RPDV56GmJAaJrr44lU5vcYyFiT5nKR1O5NmioWN4ffaGruo2ueHf93DacDldLPkmYrCvayCkbRTCUNQ1VmSnrGE0zqRMko3MN9zRlVoylxD00QTTrzucmuj8t5LZrvJPJ%2B7029F2vLDehJOwbDvGdOHhiNw2FTppsCC1qhdsLjSlhkvEFjlRwjZB3uyYiAW2hYolulCgefs%2BxXwLY4wtL7CwQY6pgFk2iJVFcW9HfW47ohAaF3WfqXqTHYdPCMubYKlZkiS%2Fj%2F7iQBMQAnTbtxVLwrrg4EBxfiLg0GJkra2GeQW8NUJhTSdvbxp7PsFVCK%2BFVrFr81ZE%2FI%2BA6fUz9ZOInuhbjxg8584C8p6fHYN96bqAcmH8xobh7V5EFUbNKipALI0xQ5e719L6bsXB%2BwzCw3BZBDGWhBRmm25LGoiglkYdXM%2BSupfXw7H&X-Amz-Signature=6b8719033c52bd69ad313851d0152a0d9f264b309f01ad3650d70ef24ec92221&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXUETVUB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDvzbiJ6IzGnHPe9wZ4F7CTa4kqsDIQPiZiEfIgSTxnWAiARyQF2C1LOPekLwiz6qh94MVdauFP%2BICA8czUnIjc77SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa8j0DsAY2kDhNG0FKtwDjFz7KusDSJGMCA3GKGUop8uxh2Nf0GHP5f9I%2Fh0GNCrDl1Sz%2Bg6qQOjigFz8de7UZ82KpDB0ZKx%2F13LhNOOyHlhipKe0TG1qiYEhcP7nA82rY7j6a58ZUslQm21yfYLuO9h7RqeTo%2FmNHXSdSdc9ZkVn%2BQev7lG4bO%2B9D55LpnAtuWuNB0J6QcdtNNjcP3%2BAgdsoTGCGtWo48xkioE9CLs%2FBte3dBsY4KAiCKXyikuFMX4CLZewcdWYMjD%2FmfDB6yU2KzYWijAFNsqYA9jtl0wssJppVsX2NZvEKNvf5MDotoZNMyU8Y8JUTy4t2gwyQ5kzPG7QwECqbppZ3byv8IPDt67oOCUYn6sBzdF0XadCAfpWBggkE5Sk4Wa7yXL9VZslysKfwehwqsSs0BVdhVg3I8y6qbxWgEaqgFIye6RPDV56GmJAaJrr44lU5vcYyFiT5nKR1O5NmioWN4ffaGruo2ueHf93DacDldLPkmYrCvayCkbRTCUNQ1VmSnrGE0zqRMko3MN9zRlVoylxD00QTTrzucmuj8t5LZrvJPJ%2B7029F2vLDehJOwbDvGdOHhiNw2FTppsCC1qhdsLjSlhkvEFjlRwjZB3uyYiAW2hYolulCgefs%2BxXwLY4wtL7CwQY6pgFk2iJVFcW9HfW47ohAaF3WfqXqTHYdPCMubYKlZkiS%2Fj%2F7iQBMQAnTbtxVLwrrg4EBxfiLg0GJkra2GeQW8NUJhTSdvbxp7PsFVCK%2BFVrFr81ZE%2FI%2BA6fUz9ZOInuhbjxg8584C8p6fHYN96bqAcmH8xobh7V5EFUbNKipALI0xQ5e719L6bsXB%2BwzCw3BZBDGWhBRmm25LGoiglkYdXM%2BSupfXw7H&X-Amz-Signature=16b68cf6c2452cc386303a969ee6fb1be68894c79fadceb415efaee4e1bf1f71&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXUETVUB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDvzbiJ6IzGnHPe9wZ4F7CTa4kqsDIQPiZiEfIgSTxnWAiARyQF2C1LOPekLwiz6qh94MVdauFP%2BICA8czUnIjc77SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa8j0DsAY2kDhNG0FKtwDjFz7KusDSJGMCA3GKGUop8uxh2Nf0GHP5f9I%2Fh0GNCrDl1Sz%2Bg6qQOjigFz8de7UZ82KpDB0ZKx%2F13LhNOOyHlhipKe0TG1qiYEhcP7nA82rY7j6a58ZUslQm21yfYLuO9h7RqeTo%2FmNHXSdSdc9ZkVn%2BQev7lG4bO%2B9D55LpnAtuWuNB0J6QcdtNNjcP3%2BAgdsoTGCGtWo48xkioE9CLs%2FBte3dBsY4KAiCKXyikuFMX4CLZewcdWYMjD%2FmfDB6yU2KzYWijAFNsqYA9jtl0wssJppVsX2NZvEKNvf5MDotoZNMyU8Y8JUTy4t2gwyQ5kzPG7QwECqbppZ3byv8IPDt67oOCUYn6sBzdF0XadCAfpWBggkE5Sk4Wa7yXL9VZslysKfwehwqsSs0BVdhVg3I8y6qbxWgEaqgFIye6RPDV56GmJAaJrr44lU5vcYyFiT5nKR1O5NmioWN4ffaGruo2ueHf93DacDldLPkmYrCvayCkbRTCUNQ1VmSnrGE0zqRMko3MN9zRlVoylxD00QTTrzucmuj8t5LZrvJPJ%2B7029F2vLDehJOwbDvGdOHhiNw2FTppsCC1qhdsLjSlhkvEFjlRwjZB3uyYiAW2hYolulCgefs%2BxXwLY4wtL7CwQY6pgFk2iJVFcW9HfW47ohAaF3WfqXqTHYdPCMubYKlZkiS%2Fj%2F7iQBMQAnTbtxVLwrrg4EBxfiLg0GJkra2GeQW8NUJhTSdvbxp7PsFVCK%2BFVrFr81ZE%2FI%2BA6fUz9ZOInuhbjxg8584C8p6fHYN96bqAcmH8xobh7V5EFUbNKipALI0xQ5e719L6bsXB%2BwzCw3BZBDGWhBRmm25LGoiglkYdXM%2BSupfXw7H&X-Amz-Signature=ae2dcf87b7aed9ec6497561411d99632cc63e644c2f3e31afee06924e613d3ce&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7BQ3LX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBBxF8XqbmeK%2BBYq%2FtKjebVFmml4QY88l275PiVvTp94AiEA9%2F1XzCnvzhh6czxVYFrXeS4nBRHhtedijmPXtmpG4twqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3Dk8P4SHdGYGPxWyrcA8Ee7xYPnuCahChTWOWGv9tZRohHWy3ij%2BCN7JF%2Baj1umSUAHlUur3hxXonbB6hGPItyrp4p8NRTV12F4DdA8A0f6NewiFtAfaYlz3C%2BzbORgKFcuRydWfg%2BvPFxXrmgdL2gCDQvdhpc4KApA2%2FHtB1VgTs0BQqvXjm4kTxrT1BN4ogtaUAHbZzY4aOPnT6Kkap%2FGlxHawVDUdqSL3VRl612riVzMIZM096RlBn878gRCUbyYY8iLfAxlPaTZSsbgEYQAIDAs9jy%2FDjHRTO6sIYaUa6rKWcmz18lyUhR35DRBhNT2wDiKmiPZuAoIXyEL6P0QrJ3BjqL%2FhpvwzWiathXyfYL5pgwT1ER5iN3jBK4Odtnt2wK2pYa9XfHREnVddoKTukWMNsuplNwoswC7mgvXDAUlpnAcOhYJ9sTC%2BKnQE87eyQETyYWzAufyrwDKyd0EGzE36gn3InCG5VKGrwmPH9dnncyA1eXPOULO24Jeztb1RPAer07%2FV9NNzb7UECrj%2B6X9HT1jF%2FoEd7DV%2BvgEfdbNjqov5wwEt24zjx16iS1Dp551CaDMjziUlSTvb2OpyWRVgy5nGNAXcJgvlmZVsDWnU%2BBDBAhqfn5MrrnpOju5rBzRr69%2ByCmMO%2B9wsEGOqUBSViOggX5%2By3%2BWtINpLfKV7bG7LPTEUUs50MYygYFLHJgUwgvSMYWcp8fcIfBJ9Rctcid3nrEiEuaGFRx%2F87tAhC51UPH6IcvecHUL1167EHaf60XCfiNkHGhQO5Op3QW3Ran9C4Es9ILuu6GloaoSDuErhwcRHPqgpr0vX7DYQ%2FrS8NuDCGxujL3B5FvmW88E1FKWqRPBSobOxKEc%2Bi%2F%2Fx9eBBBy&X-Amz-Signature=6be41d8d12d1cbe471a0bd469616fb359326db3d376bd1bfa2d5f131fe9c2b58&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEACMMO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCo3AkEoBI45%2F4I5jJmmKNBcpIEk54HZlGF9pnZG0YBUwIgTYRgRP3HheZiNTbJQtx%2BfMvwxRxXUQWKsiUS9W2lymQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFF7Mk5BZHzeKYI8BircA%2B2EadBlpKhDPBK7Zv9DWJG7pxg3dI7Z6GL1iJQJJ33LT4FPvr3Z5jcniiqDOPO7sp94y18Lp6YEH2h%2FhWs8wWphF0npfIIxZRKljANNjtlZ370ScLanyl8puuIuXKTZFU2E4TsNT5KDx1HoMQ7s2a92O2yjTnQ2yy%2F010ibZGq1ZzB1eWYTe7ogNjDgsgt7iq4vjlGbr92zWaWGHCluQPc8Y0VlnPmzL%2BUkAIRCs8Qs0tDKGw3ah0FzYfGAqTajMXp%2BFYlcfWuoffPF55hjBk%2BhSfk7x4FkXT3Ra6%2B%2F2cjPnQUh5PV59y4Pm2igBXHBCOBOspHLjEgFHctDwDvjS9kjhfhmVknyNJtvUuQW4lRHLI4zM2MQrFzd1j1so%2B3l96PD2%2B8qeL2Hg4DMUMLpnFfPqe2vWMSYAWtgWCgv90eSZrhKE6Cdp%2BG%2F0ScSyK33M5yYd0CBlU5MLDJbY3U%2F8BgN5bToNFWlCKIAWjN8k5FvEYg4xxn4uJl3nzXCbt00G0rQdHiPjtpeqrc2bIk8BhBz3W4fQBNSyX8jRApJYP5sA0qn11ZvEqSSQwT2R2%2B%2BEVjAd81nDqlZsfi%2Fhwx24IXJ%2FAC%2FH7cgs%2By8VIarP8SoKJUDeS4ZxhRNX9IrMIm%2BwsEGOqUBz83rGmsS%2FWMN6jzx9wwAWuouRDGV1lpaasYLlMdCZxC%2FqjlfajWLYjkkD5u9R%2FspbJAmieYjD8l9oy0HZHzgic%2BNBWDwCEVfSQhbw583xvy25KsLOqEMWkjluVqmTP22y0RAcQ2ItRSkdEpHETvWFMwWhqDunJR9hmmkS94A84bPYeuQOpNb0%2BzkvF4mVJtW6eAQjHR8NNrOaW9jJ4G68eJKczi9&X-Amz-Signature=352c9159118a6bc358f6dd8897752a6ddb6406b40d4bb600a60cd8381f8192b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXUETVUB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDvzbiJ6IzGnHPe9wZ4F7CTa4kqsDIQPiZiEfIgSTxnWAiARyQF2C1LOPekLwiz6qh94MVdauFP%2BICA8czUnIjc77SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa8j0DsAY2kDhNG0FKtwDjFz7KusDSJGMCA3GKGUop8uxh2Nf0GHP5f9I%2Fh0GNCrDl1Sz%2Bg6qQOjigFz8de7UZ82KpDB0ZKx%2F13LhNOOyHlhipKe0TG1qiYEhcP7nA82rY7j6a58ZUslQm21yfYLuO9h7RqeTo%2FmNHXSdSdc9ZkVn%2BQev7lG4bO%2B9D55LpnAtuWuNB0J6QcdtNNjcP3%2BAgdsoTGCGtWo48xkioE9CLs%2FBte3dBsY4KAiCKXyikuFMX4CLZewcdWYMjD%2FmfDB6yU2KzYWijAFNsqYA9jtl0wssJppVsX2NZvEKNvf5MDotoZNMyU8Y8JUTy4t2gwyQ5kzPG7QwECqbppZ3byv8IPDt67oOCUYn6sBzdF0XadCAfpWBggkE5Sk4Wa7yXL9VZslysKfwehwqsSs0BVdhVg3I8y6qbxWgEaqgFIye6RPDV56GmJAaJrr44lU5vcYyFiT5nKR1O5NmioWN4ffaGruo2ueHf93DacDldLPkmYrCvayCkbRTCUNQ1VmSnrGE0zqRMko3MN9zRlVoylxD00QTTrzucmuj8t5LZrvJPJ%2B7029F2vLDehJOwbDvGdOHhiNw2FTppsCC1qhdsLjSlhkvEFjlRwjZB3uyYiAW2hYolulCgefs%2BxXwLY4wtL7CwQY6pgFk2iJVFcW9HfW47ohAaF3WfqXqTHYdPCMubYKlZkiS%2Fj%2F7iQBMQAnTbtxVLwrrg4EBxfiLg0GJkra2GeQW8NUJhTSdvbxp7PsFVCK%2BFVrFr81ZE%2FI%2BA6fUz9ZOInuhbjxg8584C8p6fHYN96bqAcmH8xobh7V5EFUbNKipALI0xQ5e719L6bsXB%2BwzCw3BZBDGWhBRmm25LGoiglkYdXM%2BSupfXw7H&X-Amz-Signature=795c8105bf28abe6525998a59b994227f6aedbb5a4d45dc38dbd577288f7b2b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
