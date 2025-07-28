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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZK53J3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAKrZ7KSdRqgHH4J57zQA9iDpH94u0%2FEulPrV%2B%2FYiW4hAiEAi7TnBGhMCRh3KdZpoyfArnLbRXR4TeKjrW4lURxVGM8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOtBHY4WifpO7vfnCrcA%2FDISJUm4cQ1FpQVDGTqLUe310pSUTYx3o3cZZnkpBNJBdulQbEajuRY2lUAjI62Y8LIXSJMnuoj1Bl8rMgQbOtdZg47qV7lgJeFvDRJyQjvt1LC6yKoy9EVZGyqhZUzOL%2BRmbQYZ3gKKJlF4GPzoo3QF1UPw2TJSUYQJBg8xhuEOxFNQU708i1lEwFC2KtqM76xkJKZKYHXta3iQos3rzKb27%2Fu7%2B2Kx3AXPFAWcb8PTzL5Qw%2FtcAIDOLUS2lxo9bm2KZWrstLScu6B6dmYP0%2BdQxzxUpiHi8QGmVZuyYM4QW551segDHzwNMjsBAoVz1s599uaeLYqf6hcU0dEQ86dr%2FZywKkLnHX7uEbFb6QrVaQiU5t70l07Bu9f5rDrfM7OraTpfTYyXC7kEVO2nzV7dwRHiSrPWNjbib50PYDq%2BnDso12JUXYtmDkloY1mmEufnZ5Og1QXqDtBKocJNLFmvCBi2CDAcSaXVMPycWxMVaEvH%2F0C6jjzvE47nTQBhSRPySEbaXm2r3ohnTT1IulF1I5ZqQCK%2BVTaIwz%2BCxUMDUAxzcG4%2FotALe7F2AEbZ7yBLgnDakDB5A7UI8iEf1GyrXQkTs5xRWgDY%2BZDzRq9OkQUawNmP6kOlvpSMNX7ncQGOqUBx6yDK6WCPmaMxQM8wr8%2Ba8VtDi7f6V1cIlwcQukn3%2BjfLRhWr8vhWyHrTYBlf946LCbe2CxZGlsjDQB832gYOxImi2PTWasurknOZnkhJcgp7icz2CLWs0wvGhv58Bdyq2PPLLqzCIZvzxpJqRGQOrSTaXfOyXtfyaGu2eGfosGDAyRo%2Bw3eU%2FnIRaCYn%2FAcrp49qIiKZMevsWKVb2sapOxVqxoG&X-Amz-Signature=c17d36cba00e7f034d9653ec810ff04441cebc21f365994ca9e017d78b4d5a03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZK53J3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAKrZ7KSdRqgHH4J57zQA9iDpH94u0%2FEulPrV%2B%2FYiW4hAiEAi7TnBGhMCRh3KdZpoyfArnLbRXR4TeKjrW4lURxVGM8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOtBHY4WifpO7vfnCrcA%2FDISJUm4cQ1FpQVDGTqLUe310pSUTYx3o3cZZnkpBNJBdulQbEajuRY2lUAjI62Y8LIXSJMnuoj1Bl8rMgQbOtdZg47qV7lgJeFvDRJyQjvt1LC6yKoy9EVZGyqhZUzOL%2BRmbQYZ3gKKJlF4GPzoo3QF1UPw2TJSUYQJBg8xhuEOxFNQU708i1lEwFC2KtqM76xkJKZKYHXta3iQos3rzKb27%2Fu7%2B2Kx3AXPFAWcb8PTzL5Qw%2FtcAIDOLUS2lxo9bm2KZWrstLScu6B6dmYP0%2BdQxzxUpiHi8QGmVZuyYM4QW551segDHzwNMjsBAoVz1s599uaeLYqf6hcU0dEQ86dr%2FZywKkLnHX7uEbFb6QrVaQiU5t70l07Bu9f5rDrfM7OraTpfTYyXC7kEVO2nzV7dwRHiSrPWNjbib50PYDq%2BnDso12JUXYtmDkloY1mmEufnZ5Og1QXqDtBKocJNLFmvCBi2CDAcSaXVMPycWxMVaEvH%2F0C6jjzvE47nTQBhSRPySEbaXm2r3ohnTT1IulF1I5ZqQCK%2BVTaIwz%2BCxUMDUAxzcG4%2FotALe7F2AEbZ7yBLgnDakDB5A7UI8iEf1GyrXQkTs5xRWgDY%2BZDzRq9OkQUawNmP6kOlvpSMNX7ncQGOqUBx6yDK6WCPmaMxQM8wr8%2Ba8VtDi7f6V1cIlwcQukn3%2BjfLRhWr8vhWyHrTYBlf946LCbe2CxZGlsjDQB832gYOxImi2PTWasurknOZnkhJcgp7icz2CLWs0wvGhv58Bdyq2PPLLqzCIZvzxpJqRGQOrSTaXfOyXtfyaGu2eGfosGDAyRo%2Bw3eU%2FnIRaCYn%2FAcrp49qIiKZMevsWKVb2sapOxVqxoG&X-Amz-Signature=66c5f59e0640bac2e9d35feb40e02c810108c3123899132515e880bed75f48e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZK53J3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAKrZ7KSdRqgHH4J57zQA9iDpH94u0%2FEulPrV%2B%2FYiW4hAiEAi7TnBGhMCRh3KdZpoyfArnLbRXR4TeKjrW4lURxVGM8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOtBHY4WifpO7vfnCrcA%2FDISJUm4cQ1FpQVDGTqLUe310pSUTYx3o3cZZnkpBNJBdulQbEajuRY2lUAjI62Y8LIXSJMnuoj1Bl8rMgQbOtdZg47qV7lgJeFvDRJyQjvt1LC6yKoy9EVZGyqhZUzOL%2BRmbQYZ3gKKJlF4GPzoo3QF1UPw2TJSUYQJBg8xhuEOxFNQU708i1lEwFC2KtqM76xkJKZKYHXta3iQos3rzKb27%2Fu7%2B2Kx3AXPFAWcb8PTzL5Qw%2FtcAIDOLUS2lxo9bm2KZWrstLScu6B6dmYP0%2BdQxzxUpiHi8QGmVZuyYM4QW551segDHzwNMjsBAoVz1s599uaeLYqf6hcU0dEQ86dr%2FZywKkLnHX7uEbFb6QrVaQiU5t70l07Bu9f5rDrfM7OraTpfTYyXC7kEVO2nzV7dwRHiSrPWNjbib50PYDq%2BnDso12JUXYtmDkloY1mmEufnZ5Og1QXqDtBKocJNLFmvCBi2CDAcSaXVMPycWxMVaEvH%2F0C6jjzvE47nTQBhSRPySEbaXm2r3ohnTT1IulF1I5ZqQCK%2BVTaIwz%2BCxUMDUAxzcG4%2FotALe7F2AEbZ7yBLgnDakDB5A7UI8iEf1GyrXQkTs5xRWgDY%2BZDzRq9OkQUawNmP6kOlvpSMNX7ncQGOqUBx6yDK6WCPmaMxQM8wr8%2Ba8VtDi7f6V1cIlwcQukn3%2BjfLRhWr8vhWyHrTYBlf946LCbe2CxZGlsjDQB832gYOxImi2PTWasurknOZnkhJcgp7icz2CLWs0wvGhv58Bdyq2PPLLqzCIZvzxpJqRGQOrSTaXfOyXtfyaGu2eGfosGDAyRo%2Bw3eU%2FnIRaCYn%2FAcrp49qIiKZMevsWKVb2sapOxVqxoG&X-Amz-Signature=ef4fdb5a7ab43a1741a58bfbc3123e7b04026b15089c963e6ace78c3ebbdc898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDYYGMS6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIErr6RgLrxuumR5M990dIBboeYKqPcA%2BmoC4E0YdYiyTAiBDcV9VOV7mcr6QaPKqFE6OsCoXKGM%2Fm7clepMpkgg4KyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCMYI73A5bnAt0EdeKtwDHVNB%2FNslZNS5rk71aGb3gPXOfvNTS4SJUcoo1U0aSrswL4yBD5kLbftohPO9Lmw1aTMem9l4SZp%2Bc0zL0oa2DwrS3yRLEXv1%2FMEjtS5zIjUvSn%2BEFNyd5FwqBdwBaICuz2zphaagCc496NKEMhm2rBfk3xPXbxVaLRaEGjFzALM2WU4hXifkONi%2B2mU5jfJYOC9lAgJt7na07mcznpM7SHIJNKTMaFc5eikNleRp7%2BZuk549Dhp8uzCz4fWEFP%2BBPd4KqITc5owuYqmpD6u7pzyAJr44sXwYuUofU0Ami0wYbmTsyRPyd25duBDJfcY5AvLiFVzdZpZUsXrdLaX64KZKLROFPs%2FQbVYE8mgCQE9F%2FZ2mkRe1yH4W%2Bt6CSU7DZwvlgK7u%2BsVhtV%2B8fArb%2FwD%2Ft38uQbYA%2BwDx1YSzfDftVNW5ge1e9%2BWrFBnXkYu6sKHpufxKtewxkTrh0y3vVzglG7sSNjCjgk5qxIFGRHOBhFWE8ftHg99LpDPDS%2FJykiV2LSktLCgSE%2FMXFj4ewK35kWGgPKy3XaYFG06QJLbPAe6%2BmX7uujGw%2FEfBbRbpoVyM3AVagAk55fXRzAs7hyjOmX3RpLHVTQg0qMxYEVuMbi2jh6FJFayEWTMwgPydxAY6pgGOhEtxVR%2BHjqXSbKDNgbgfeL1vlJnaBMVZHVc7SVbnLHIWxMJyeOJMOLCYTvHcHTPLEDszWhhglEhEJPtbHs1ty%2BF8NroarxK0HbaKwPffghXTEQ3w5Qqs2%2BqcOkcTB6ZLi8gMY8frXegfzR%2FfV0mhtWHRWamCuGf7WH5I2ci0jgYeo5bTMqYCxbIVEsiQCdKxUg%2FIart%2BXFzNFML5c0JgzMJjY7DT&X-Amz-Signature=14664e38f8dc09bad7b91f0121e6416fd25cbee5f02018f6713b54c7875040ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVP5LYTU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDDlJ6t90mrmVlavHye3twQe1%2FUTrFC4y%2FolNaxxLrVEgIhAIIAmRH06MUuuWJEF1KLmZQkj4qHLWQ%2FgWoG%2B2M1wLjeKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUOLMv3zuBuv8ik5cq3AOViUw0q2J6UI5r9a0febBhB%2Bwn%2FZDw8zStSm7UL2VUj6fYHPmgt5VzfRmpln%2FtFG2VQeV6cUcZOGKoOlm9PYyod8WKnamvlErlce80aTP4JUNJ18%2FXj0fYiyhDrUdNGIyzvYvtkr8f1XWml2MS1hppexcgsfxpgcGQkG%2FBKA5pc%2F%2FFUuqgZ1YnY%2Bb%2Bhrh06vJebyBt%2FGyXXWhEe%2FgJL%2FFUl%2FzlWJi682%2BfR7dvRUVEZJZN1JGzCYkX0xUt1tZ%2BNMuplYCAEapkDJs9Ad0siAYQ0yiJB2t0Kof0T7KVPgyjVVt8qys3nQ5uPTPL62xiq7UHUOeX4hBPLTTCmZFDb61PLQKp4pqxrLzGYMmajaSKFmsoq9dwR3mlaNLXfcYu3vhtguIofgat0ry7PnUJhIIprHSbEtSwpq1MAH8oPL1lwhJ2K3y2rfap%2Bt3MpiIJ00%2Fo1A7k%2BuzkJO3UzIiTdkgIgH3Ql9kZSDBdNLSKtJj3pmIgEC3Nbho5pP3qDNpV%2FFE%2Fx3jiOsfR%2BH7GHq8eD9fhXXa6mGJFsoJlPDXHTYWfPaeJx9Soy%2BBELu9WwpFeuPbIi9ONtYjZ75O4PAx61MQo%2F43MWUZCQ8XjFhgrNxZvuECPtiSjwjIo9aIa6DCB%2B53EBjqkAfQy6xWczFON2MoyCNURYkNrUhoWghXHWMWZhXSKscVvKH9iSJPvMU7cizxuXOfGevoCTHyC8K4%2FygzeLeTqqQ0AF%2FR9w8ThhVZrm6TrFleUXHV51DOQROP%2F1tz2SGP4yF3riDe6ZxW2g4xu3Z404bQx2jLIY24s%2B2sKH4hWU1Y4DrmYm7%2F2WbgDw9uS2J8aeGo%2BVWa6tkxeUqrnjP%2F%2F%2B4gO4D1r&X-Amz-Signature=de20ed89cd8b369337f3f638454b5279cbdd8e91b7d5fb9f1bbde53d68a8aa38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZK53J3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAKrZ7KSdRqgHH4J57zQA9iDpH94u0%2FEulPrV%2B%2FYiW4hAiEAi7TnBGhMCRh3KdZpoyfArnLbRXR4TeKjrW4lURxVGM8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOtBHY4WifpO7vfnCrcA%2FDISJUm4cQ1FpQVDGTqLUe310pSUTYx3o3cZZnkpBNJBdulQbEajuRY2lUAjI62Y8LIXSJMnuoj1Bl8rMgQbOtdZg47qV7lgJeFvDRJyQjvt1LC6yKoy9EVZGyqhZUzOL%2BRmbQYZ3gKKJlF4GPzoo3QF1UPw2TJSUYQJBg8xhuEOxFNQU708i1lEwFC2KtqM76xkJKZKYHXta3iQos3rzKb27%2Fu7%2B2Kx3AXPFAWcb8PTzL5Qw%2FtcAIDOLUS2lxo9bm2KZWrstLScu6B6dmYP0%2BdQxzxUpiHi8QGmVZuyYM4QW551segDHzwNMjsBAoVz1s599uaeLYqf6hcU0dEQ86dr%2FZywKkLnHX7uEbFb6QrVaQiU5t70l07Bu9f5rDrfM7OraTpfTYyXC7kEVO2nzV7dwRHiSrPWNjbib50PYDq%2BnDso12JUXYtmDkloY1mmEufnZ5Og1QXqDtBKocJNLFmvCBi2CDAcSaXVMPycWxMVaEvH%2F0C6jjzvE47nTQBhSRPySEbaXm2r3ohnTT1IulF1I5ZqQCK%2BVTaIwz%2BCxUMDUAxzcG4%2FotALe7F2AEbZ7yBLgnDakDB5A7UI8iEf1GyrXQkTs5xRWgDY%2BZDzRq9OkQUawNmP6kOlvpSMNX7ncQGOqUBx6yDK6WCPmaMxQM8wr8%2Ba8VtDi7f6V1cIlwcQukn3%2BjfLRhWr8vhWyHrTYBlf946LCbe2CxZGlsjDQB832gYOxImi2PTWasurknOZnkhJcgp7icz2CLWs0wvGhv58Bdyq2PPLLqzCIZvzxpJqRGQOrSTaXfOyXtfyaGu2eGfosGDAyRo%2Bw3eU%2FnIRaCYn%2FAcrp49qIiKZMevsWKVb2sapOxVqxoG&X-Amz-Signature=319c7f91f4371d934740944f632c0b0aa4010dae5ebf4e6d7505d64c3cb33be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
