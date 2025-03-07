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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WERQ7JAH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC6sMIXpHEQ2YRW1nzXcx5B2pb%2BmWhB2ujN0%2FZHh0vsjgIgJvDsBXNHAe5rUwmeEuv2376g17BqNPG6%2F%2BY6c6ZF5W4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDL%2BYkGOfceSt75ih3ircA2sz9gw5VYzwMY6soNAV%2F8bm%2B3DFQ2eFKYP9AMUxMT7geBIvaZ1dLPkfhrIo7MDAcJrP1TOEZn6hHfVZgtWHqWaDCyfwUUffRGK4JcRT%2Bh40yryzocbPv2Ooq8uqgN6mqbDXQaPZKM8jmSSqo2bX1adECt8LJPeGLgIGjhEMAgVuAuTQ9%2FKpQ7nF81w5%2B%2BhDtw0o6f%2FrzNGnU0NSBUv4X60j2zMOAfcjJUIuaJMTgbK6ImS4ye3uGqLbgccHcKdzhuHe7E5dbeKpiK2oKIwpWzK463KPz4mY0AQjhJOCRSqFcHuVS%2BmxXaqgWESzVeYic4kR1wKl3WomKtSIsP4C05CIkpBFAdi7y2qK%2FDzN7lLQ7iC9hH8Imeyuys9vsUq6F%2Ffwj0GFtb8eiblFlzNQDun6MTZQgnsmjDTvmbfuXbUOJS3Nm0nDKJL57ZW5N8ugNuaQpZUYKapKvZHZA%2Fc0LvbuAS72JTyUXxoK8TlR%2FJRMyAFxnLbjekM0cixrZNSiMEG4os1JFmcLCv9rbrvvSiDt0oUtquKoz9eFK%2FtpkTyAwrLL2ZEfMDM7nt19hJnzuJMeCtn7w7pyMcbQlqDmGx0aIGBYLIacOlpaXA9p56DtS2N2uYb%2Bd%2FbK1%2FgpMI6hrL4GOqUBZL3PsGZDn%2F8QYaQSqoaG5TviMyNPobpolt0rHoC%2FH%2BObH4sOT6vup%2BTUrxy%2FztYU9B2d02GxAzG9O5JwLhxOxVIx2mvFsJUPGyLzqIpUOX3EqwG4O1A4qaBRNZw9XA4MHJfuIJVekuXnOJFovzSvL8KGUEP4FBZ3fF33UYmDjEBg2rjuqHeeC3XdlNAgTbWm%2B5T4jzbemVIftowgt%2FE8pIG%2BnDmq&X-Amz-Signature=362869b20b4f0f5702bbc7e150146febf9645142af0d07252e9a2cc0e12b597c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WERQ7JAH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC6sMIXpHEQ2YRW1nzXcx5B2pb%2BmWhB2ujN0%2FZHh0vsjgIgJvDsBXNHAe5rUwmeEuv2376g17BqNPG6%2F%2BY6c6ZF5W4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDL%2BYkGOfceSt75ih3ircA2sz9gw5VYzwMY6soNAV%2F8bm%2B3DFQ2eFKYP9AMUxMT7geBIvaZ1dLPkfhrIo7MDAcJrP1TOEZn6hHfVZgtWHqWaDCyfwUUffRGK4JcRT%2Bh40yryzocbPv2Ooq8uqgN6mqbDXQaPZKM8jmSSqo2bX1adECt8LJPeGLgIGjhEMAgVuAuTQ9%2FKpQ7nF81w5%2B%2BhDtw0o6f%2FrzNGnU0NSBUv4X60j2zMOAfcjJUIuaJMTgbK6ImS4ye3uGqLbgccHcKdzhuHe7E5dbeKpiK2oKIwpWzK463KPz4mY0AQjhJOCRSqFcHuVS%2BmxXaqgWESzVeYic4kR1wKl3WomKtSIsP4C05CIkpBFAdi7y2qK%2FDzN7lLQ7iC9hH8Imeyuys9vsUq6F%2Ffwj0GFtb8eiblFlzNQDun6MTZQgnsmjDTvmbfuXbUOJS3Nm0nDKJL57ZW5N8ugNuaQpZUYKapKvZHZA%2Fc0LvbuAS72JTyUXxoK8TlR%2FJRMyAFxnLbjekM0cixrZNSiMEG4os1JFmcLCv9rbrvvSiDt0oUtquKoz9eFK%2FtpkTyAwrLL2ZEfMDM7nt19hJnzuJMeCtn7w7pyMcbQlqDmGx0aIGBYLIacOlpaXA9p56DtS2N2uYb%2Bd%2FbK1%2FgpMI6hrL4GOqUBZL3PsGZDn%2F8QYaQSqoaG5TviMyNPobpolt0rHoC%2FH%2BObH4sOT6vup%2BTUrxy%2FztYU9B2d02GxAzG9O5JwLhxOxVIx2mvFsJUPGyLzqIpUOX3EqwG4O1A4qaBRNZw9XA4MHJfuIJVekuXnOJFovzSvL8KGUEP4FBZ3fF33UYmDjEBg2rjuqHeeC3XdlNAgTbWm%2B5T4jzbemVIftowgt%2FE8pIG%2BnDmq&X-Amz-Signature=68f3e636bf691e142a190c1badb77ba4a3664dacc06379d773833995752ae374&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH25SE5G%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHX3vobPydcSTiYbj%2FK1BxWCSlO16L1beBRV3GpFsEMLAiEAvgCcNk5pbSLpE1qd0vRgVH66KfmbXg3LPbWslVd5XHUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCozqpJdmEN2BDqb%2ByrcA2YYOUbyDLbJooX%2F4RK6kkv9NKtX6b05HnIqJOuz%2FaUINWACpbyf7mEeexj5A6OA5jLMrJHMYySbhAdQZhf%2B7hW51xd%2FKHYGjZyXsKVvtRaglLY%2FTzQUCiaiu6DZ9NtK3gBgyPaeKclg1dE6GRpSp5TFjD0axzzxSfrytsWEYcKo8Krq0uT1kTuQRCgKRUspkxqMEKvGfCUXaOzf%2B15YFmM0rqc5mxEvQ7qwapOmW5xgimLqV9TiSQSPKQwIbtQMvmZ6tnJTtvwEOnSDxV934%2FRnZD2TeCJTearzPTH6KBXQm673UztWOnWQFLzmXnaFEc97fhFf%2Bjxs4WUjknxa0LfgMtW6ZfZ5%2FgJrH%2BS53jKw9S46OvhcOs2OlkBrH6BzkmwC7aVkkX6tyAU0sCHGcIavctgkdnc6tYvcrczzFzn4aHT%2B%2BtAWUjMz%2BTvEXy5%2FRV96y6%2Bi3pTECkph8sy5svbzc%2B03oYUEUjiZYra6twk2QvvY8YXdN8pDRtZ8fNyNfwLfmcnDIJivS3A9YNRKliHJS34SnmAWYIlDuj4I3qqVhIDgQaeoL45RO1hw4f78Uk3Yx8SwzqbmddOrLigmfzVjzWiDDxpsb%2FHhqwPLla5Veft1f46iz0Yz5Y79ML6frL4GOqUB0CXGVAaFsZJFTqtYiGbBzmZZDZu08lYh5TpH%2FRtHMimfJNml394xSvgTFhCPzOm4JkZgTx9D87gFoCWgjZ6SKNN57LWPy9DLREP3mBF2yAJh3hVZTVPG5Py4PVhnCrrAtrhyudupQgJ%2BlrVos3dCYM9uCUsgccEV9bJOgxHqNIbWoZqw4M47ow%2BSZneoCI92OkYE3xRnXOSSAI7fzOWp0YxoMqSP&X-Amz-Signature=ac3e9dd867d5a1c4b25d7972a406052851b2848ef8e8741961a83f6ab9eb8b79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTUFYQLB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDsU68VAtZ3lfhZp2lgyQ%2F5EKkN0p2ZG7qhcRZXjhDPlgIhAJvzrN9S8S%2F2tBXRGzwIDjq7DX033%2F47YSWqpi%2Bl86boKv8DCEgQABoMNjM3NDIzMTgzODA1IgyeYOF8FKMrbwDmOjYq3AOYItOzBWB3wJCWDD8WcFvdomr3iH946iOsdyRYgf0ZLWIYuilyeWwzh0v4QaFgnYKRrl7GYh4E%2B1y9OdOSHr7pXp1aP6MPlMWvASn9N7pGsgpreZv3IxR49BCwUX%2F5u37nbimq5Wv9sy1bYWQj447%2B5t%2B4RmQtdcLTnu1%2BqdvjU4HjdnC7Q6ImEI3s1HnRLYhR%2FIRPzd1AB3y9gPmIk6nNkU0DVK9GRJ8hgwyFipU7vieayqerLn8mmGHnhX67i9lAnb4aGBdL7WBrZTM1Ht80%2BJ0SY9gxiTyXfmEcg8qMtbhvpDlX90bnEuKrz0FF3KFRP%2BtU7FigvV4HKmmrhVxmYO2DqFS7krDUmsehG5sYC7d%2BbrkdrR%2FvA5h5QPkr1ZEE%2BWaj7EKHq0IoWhl4ymNg5YDXv6IPWdveQVsID3Tqx5dzNFfGfhevyTZSlcnO5c6vr%2BWAfSHTiicxafzx0zW0EuM5RhfTrduFKCnccwKf1UYrOEJPI%2FMW1OvL1Y0Rd2JyJjp5oTAuIL01bNwUO%2FhUNWdZKduqbLMSQbb39VykEqSE2O2HdehsqZxGqx9ZtWfVmTX59yymkF%2BDkULqOiD1AWM1V9OP%2F7%2BxjRelPqalg1G504v4oeRlUIRByDD%2Bn6y%2BBjqkAVANY1%2Fsu%2BQX4%2FXA75y%2BTxhVtH4hGsKEbmpha2DbrG%2BOA%2FHryobYNEG6b6eOS6xx5l6wLoXUk8KC99dYZYIF1bmR9%2FPSFIHMGn4QIyQoWn9RhohcXvG%2BlkhAPt%2BET3Ivgb4wwaOcLXLnTZRZqxN9tgWpbV45q5jZ0LB1sYFuJq3TOuno453kyQs9T5gNDGSTXe9khK1L28ia%2BwaEUCJS2bJXLCEq&X-Amz-Signature=971408256efba470f96dad275297d657aba4b42aee63d549a41ebbf167e01c78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WERQ7JAH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC6sMIXpHEQ2YRW1nzXcx5B2pb%2BmWhB2ujN0%2FZHh0vsjgIgJvDsBXNHAe5rUwmeEuv2376g17BqNPG6%2F%2BY6c6ZF5W4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDL%2BYkGOfceSt75ih3ircA2sz9gw5VYzwMY6soNAV%2F8bm%2B3DFQ2eFKYP9AMUxMT7geBIvaZ1dLPkfhrIo7MDAcJrP1TOEZn6hHfVZgtWHqWaDCyfwUUffRGK4JcRT%2Bh40yryzocbPv2Ooq8uqgN6mqbDXQaPZKM8jmSSqo2bX1adECt8LJPeGLgIGjhEMAgVuAuTQ9%2FKpQ7nF81w5%2B%2BhDtw0o6f%2FrzNGnU0NSBUv4X60j2zMOAfcjJUIuaJMTgbK6ImS4ye3uGqLbgccHcKdzhuHe7E5dbeKpiK2oKIwpWzK463KPz4mY0AQjhJOCRSqFcHuVS%2BmxXaqgWESzVeYic4kR1wKl3WomKtSIsP4C05CIkpBFAdi7y2qK%2FDzN7lLQ7iC9hH8Imeyuys9vsUq6F%2Ffwj0GFtb8eiblFlzNQDun6MTZQgnsmjDTvmbfuXbUOJS3Nm0nDKJL57ZW5N8ugNuaQpZUYKapKvZHZA%2Fc0LvbuAS72JTyUXxoK8TlR%2FJRMyAFxnLbjekM0cixrZNSiMEG4os1JFmcLCv9rbrvvSiDt0oUtquKoz9eFK%2FtpkTyAwrLL2ZEfMDM7nt19hJnzuJMeCtn7w7pyMcbQlqDmGx0aIGBYLIacOlpaXA9p56DtS2N2uYb%2Bd%2FbK1%2FgpMI6hrL4GOqUBZL3PsGZDn%2F8QYaQSqoaG5TviMyNPobpolt0rHoC%2FH%2BObH4sOT6vup%2BTUrxy%2FztYU9B2d02GxAzG9O5JwLhxOxVIx2mvFsJUPGyLzqIpUOX3EqwG4O1A4qaBRNZw9XA4MHJfuIJVekuXnOJFovzSvL8KGUEP4FBZ3fF33UYmDjEBg2rjuqHeeC3XdlNAgTbWm%2B5T4jzbemVIftowgt%2FE8pIG%2BnDmq&X-Amz-Signature=460679ff27946487beea77e74fc753be2c196b9291636a09367445629ceae49f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
