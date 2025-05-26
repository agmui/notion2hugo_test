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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLAVD2VF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCPtTe4YKjvnC0cM22M2s3Kndwa3p99Osl2WXhbsAbNowIhAKt5EFTkxE1Ufj5NPk2R0NopxfAVjRbpQJBcJOBwCOE1Kv8DCEQQABoMNjM3NDIzMTgzODA1Igy%2FjCYJWBdcUcwF9Noq3AMgldRDGdsDABbE9dvHqKXwocGl4S5An8ocG4jC7DKyYRL4jSQmowUeaAvftixIr8f1zxUTT%2BqCtsOza07Vzv7zPd6lr2RyAdAKEw7BFn36LBqEwvX9z665dEkAQ9E4cuS%2FVvh48Qff%2FdHugt9jtQYLJjnpZ%2FdLYTkZPVPWIaljVpp%2BM601%2B0%2BfaJx7MDb2GdFdJU1U7EB6%2BtQJB4XtiPdct3hWKjqEFafgda06EgLf1IDf1%2F3WZwdF%2BtER6xgb%2FDoa8L5NEG4aNmLdivNCA3UplYULxsQ5TFzsKc%2FH6z308M%2BElke1RuTEjGyV26MReJm7EFpTs1Za%2FhpaBxY75%2B3kQENpxgmSSBbAhWOZWUCz7Tj%2BB5LTUCgcezPv8IPTd9%2Bcv3IoELNCz07qooPoPsKpmMdcsQ9Zyl41oxRuHE4JdlbUjFFt%2FdsVe3L7DOf8meQ3YhMnyuIR7NT%2BNY3My8PWe8PRw5ME%2BF%2B%2FTUN6RRzTwvoYyABHPZp3ZGOSkNjxe4wGwJwroHbpEL9mAdNCL6fss%2BXDs0uJybGvzArCxeRtP%2BXs6845cP0U6pBXQnSoxjwG9VksvM522oZFqQk%2B8kl5FCv1KyfQ9TnjMf%2FpBVZ%2Ba7pwuhGR%2FVjk6w5%2F1jD3jtHBBjqkAU8xqPJ9HjLNU4JeNuaeG8zodv8WXsJddtkvutq%2BYYL0q4h8pVbuG8wO7cMvx99gUW2pzpnbG8AGZYJFnPUctAJIDx8WU2T1Vdmu7cybwJgKn9ON9JlCjKSxhbdsoDhJAJjisyOkWl%2F%2FIJYM8vpR2mF8vfqzZ1N%2B48FgY9iAGqN1wnlRF0wh7XpEUv3810qivWauqQ4mzhTbRjRNxkJnz6tNKhV7&X-Amz-Signature=b1aec445a6a5ee65589125e9d734088b343073f85386099fe8e1dea117a2ce5d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLAVD2VF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCPtTe4YKjvnC0cM22M2s3Kndwa3p99Osl2WXhbsAbNowIhAKt5EFTkxE1Ufj5NPk2R0NopxfAVjRbpQJBcJOBwCOE1Kv8DCEQQABoMNjM3NDIzMTgzODA1Igy%2FjCYJWBdcUcwF9Noq3AMgldRDGdsDABbE9dvHqKXwocGl4S5An8ocG4jC7DKyYRL4jSQmowUeaAvftixIr8f1zxUTT%2BqCtsOza07Vzv7zPd6lr2RyAdAKEw7BFn36LBqEwvX9z665dEkAQ9E4cuS%2FVvh48Qff%2FdHugt9jtQYLJjnpZ%2FdLYTkZPVPWIaljVpp%2BM601%2B0%2BfaJx7MDb2GdFdJU1U7EB6%2BtQJB4XtiPdct3hWKjqEFafgda06EgLf1IDf1%2F3WZwdF%2BtER6xgb%2FDoa8L5NEG4aNmLdivNCA3UplYULxsQ5TFzsKc%2FH6z308M%2BElke1RuTEjGyV26MReJm7EFpTs1Za%2FhpaBxY75%2B3kQENpxgmSSBbAhWOZWUCz7Tj%2BB5LTUCgcezPv8IPTd9%2Bcv3IoELNCz07qooPoPsKpmMdcsQ9Zyl41oxRuHE4JdlbUjFFt%2FdsVe3L7DOf8meQ3YhMnyuIR7NT%2BNY3My8PWe8PRw5ME%2BF%2B%2FTUN6RRzTwvoYyABHPZp3ZGOSkNjxe4wGwJwroHbpEL9mAdNCL6fss%2BXDs0uJybGvzArCxeRtP%2BXs6845cP0U6pBXQnSoxjwG9VksvM522oZFqQk%2B8kl5FCv1KyfQ9TnjMf%2FpBVZ%2Ba7pwuhGR%2FVjk6w5%2F1jD3jtHBBjqkAU8xqPJ9HjLNU4JeNuaeG8zodv8WXsJddtkvutq%2BYYL0q4h8pVbuG8wO7cMvx99gUW2pzpnbG8AGZYJFnPUctAJIDx8WU2T1Vdmu7cybwJgKn9ON9JlCjKSxhbdsoDhJAJjisyOkWl%2F%2FIJYM8vpR2mF8vfqzZ1N%2B48FgY9iAGqN1wnlRF0wh7XpEUv3810qivWauqQ4mzhTbRjRNxkJnz6tNKhV7&X-Amz-Signature=1cbdcec8668630067dee1fbbd4e20463adcb071e3ce4ce2fabd4ecee3ca035b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLAVD2VF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCPtTe4YKjvnC0cM22M2s3Kndwa3p99Osl2WXhbsAbNowIhAKt5EFTkxE1Ufj5NPk2R0NopxfAVjRbpQJBcJOBwCOE1Kv8DCEQQABoMNjM3NDIzMTgzODA1Igy%2FjCYJWBdcUcwF9Noq3AMgldRDGdsDABbE9dvHqKXwocGl4S5An8ocG4jC7DKyYRL4jSQmowUeaAvftixIr8f1zxUTT%2BqCtsOza07Vzv7zPd6lr2RyAdAKEw7BFn36LBqEwvX9z665dEkAQ9E4cuS%2FVvh48Qff%2FdHugt9jtQYLJjnpZ%2FdLYTkZPVPWIaljVpp%2BM601%2B0%2BfaJx7MDb2GdFdJU1U7EB6%2BtQJB4XtiPdct3hWKjqEFafgda06EgLf1IDf1%2F3WZwdF%2BtER6xgb%2FDoa8L5NEG4aNmLdivNCA3UplYULxsQ5TFzsKc%2FH6z308M%2BElke1RuTEjGyV26MReJm7EFpTs1Za%2FhpaBxY75%2B3kQENpxgmSSBbAhWOZWUCz7Tj%2BB5LTUCgcezPv8IPTd9%2Bcv3IoELNCz07qooPoPsKpmMdcsQ9Zyl41oxRuHE4JdlbUjFFt%2FdsVe3L7DOf8meQ3YhMnyuIR7NT%2BNY3My8PWe8PRw5ME%2BF%2B%2FTUN6RRzTwvoYyABHPZp3ZGOSkNjxe4wGwJwroHbpEL9mAdNCL6fss%2BXDs0uJybGvzArCxeRtP%2BXs6845cP0U6pBXQnSoxjwG9VksvM522oZFqQk%2B8kl5FCv1KyfQ9TnjMf%2FpBVZ%2Ba7pwuhGR%2FVjk6w5%2F1jD3jtHBBjqkAU8xqPJ9HjLNU4JeNuaeG8zodv8WXsJddtkvutq%2BYYL0q4h8pVbuG8wO7cMvx99gUW2pzpnbG8AGZYJFnPUctAJIDx8WU2T1Vdmu7cybwJgKn9ON9JlCjKSxhbdsoDhJAJjisyOkWl%2F%2FIJYM8vpR2mF8vfqzZ1N%2B48FgY9iAGqN1wnlRF0wh7XpEUv3810qivWauqQ4mzhTbRjRNxkJnz6tNKhV7&X-Amz-Signature=b3b861e08575ddf4315e605dad33e921092d1c0ee8db08a4c18a4f6d61e0137b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZVAV6EZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCTvAFwfeaXBYfXnBUzUp9%2FLJX6%2BqK819ScwK3AgkmyGgIgBlZ9k%2BtigVwuLMVs05wPnFxiJozfzNrCJkuKtUFlci0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMLx4WMLxolwwdwr8CrcA5EpEz2sTrkdKtjSFE3MhhmR5l29aAoG6pDCbCa2eZmS6QmhRO7GxjgrZFtLPSUIe1Pm8SHGehcSxtbW%2FcJua%2BVjd0zkiMbac0jTi7HMiuUZZx1nsM83nIm7lZtF5WA3t4r0fSH1DaEYlnFt4tAeUqc1eOQy%2BgRHgDojXwaZncqP73z8cI5MVLnggzmNlBN2YQFljCitmCxi1SmLaR%2FDVgPYtlv05la%2FLDXVoHXMbF%2BoYaiUdGT5lRjFqDB6A3U9IN4%2Bqe4xsX98gqMPQwrjBPcb3A%2B3%2F93QddrhPHjgeFB40pTatblHofsf6I9%2B9CwmTW%2F3v9ZVrxqaqIncWt3K1oE2t0oTB13ZJBEPdq4q5WmW03kFhln1mq3ahY2TJGiOwLqDCfuOaycod5NxGTNPM1cFG1%2FMH98877ZJK9%2FOJHu0JXhhNoCrTd5iuLBkMI9IdwsKBnJGSuw66OpUeYAKSCZE0b4N2h%2BU7tiZfy12jDi1pLb0KH4BlWXSit4yWLv1kTMvXCEnzK25CnihUjTWQojATmi9SVUBk2mpfynmcl4vr87au99KgJl7APgPgLP2Pda%2FiQoDISJGY7BPe6Y5LSJKtbqradCBhtTFGYjxcJEJPovXJeBaq2ELV%2FORMKPX0MEGOqUBaAiFDHgSfVeCnVjSNMfNT5EMuzi9dzsPbsGVhG5zziKFlsyD8S9oMWhe9w5cMlTnvDht9x14CzIGRPKv2nh6IKR7sUvPVHxisQcFqbVIHabCSnyEM%2BeRvEEzC7hJvjeVOGqEMIjz6MFXLE1KHKHQ8Z%2F1nJobXVbMZMq6obHZK2NmfDSyAdxBshIOj0jCaW3pCaqdwge8jUwiLnIgXvuzNkyomDy%2F&X-Amz-Signature=df2a43b27ace15a59dbf9a1623531e9d87b3e1e0667b1d647d7f222bb5ee9440&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRCAENSU%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIDTHipxYiiR6NJbdnk18v4dXjc8tdDLh%2BiqOi%2BOtkkkTAiB%2Bp1xl2oz%2FIvrGAsWmet17JJnfYqTv03RkQ29f5iDfUir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMNr5TgjyzgfvrsGLPKtwDrZB6vami7lZvZpO%2BtHV7RxnmRSp9o7CMgFbYvBCO64ZFDajSKrfE0CTEYsyMO7X%2BooDDiKVs5YsQqQOGdTgyJJl22rUOM8yAGfUJMsy1dML1cvRwOqONiYdYdmbEPr%2F5AGj%2FDAPzVAi7kGhfR9u3slotU%2Bv6jczFJ7hJpu735cbN%2FAF4lJjRjx3CQSKUN10PdwMEMn1S7YjqJaDpSG2ltbpiuwOxK6pZ%2Bqsg6MbuCgrIzlCUJWEyqcrditb%2Bmeu8Tgdz02WnYqOOg5NWB93CDSoJBzSOf2ayE6EoK9tD9TrV6d5NgKbc3O9S4HVRcU%2Ff%2BA%2B%2BvT8Jz7O1Ylng7BkVCMUwXQ2TPuXzgY4SfXX6Gn9VseZTfUfDY1govcdswF1izxjfq3S6ACVtSrSAQqxIE%2FtHYolghAz79zYJdPtT1SSPrtINPjLfUum5%2Bptuxy9yPejyQ%2Bnv9B96eLV4wXiivAAKgYC3mXx0xAfYcHpA9haWrBtyIH4aLiaWjKPTManPXSxnRcvOFvR2jGAL6i842KcmrScLfoYvwP0uuN%2BPAcjQi0rFfIV28k81sEw5aQR3VahOgZGJ8r0MoRgMVf5VLlnJF%2F9a1txMn3wGPrZt%2FoFe17P2CHrEUa0tSRcwsuPQwQY6pgElcPr%2B33PVpqykGuipkLxAYWoz4Tf1STM%2BflQImj5aVO%2FDp5aNKECSgBe89524pGxTbCL2JQVlYcYQMz0o8GRlKWs5dK%2BoSnoaUZKTbvzLtQQsmB5qp48m%2B7kMHdjOW8Yp1363BjuNid2VrISius8l9J3zr95hm2ee7Por00yVEkw8CC9otg99JgLoz7SuVuEPQ%2FozubfoDRucKIVt2osuQ0t7FWkI&X-Amz-Signature=ec4214a320cc9f539ad7131c8fd8ed32e2618ae6371fb36ebbeda0a52e2d60b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLAVD2VF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCPtTe4YKjvnC0cM22M2s3Kndwa3p99Osl2WXhbsAbNowIhAKt5EFTkxE1Ufj5NPk2R0NopxfAVjRbpQJBcJOBwCOE1Kv8DCEQQABoMNjM3NDIzMTgzODA1Igy%2FjCYJWBdcUcwF9Noq3AMgldRDGdsDABbE9dvHqKXwocGl4S5An8ocG4jC7DKyYRL4jSQmowUeaAvftixIr8f1zxUTT%2BqCtsOza07Vzv7zPd6lr2RyAdAKEw7BFn36LBqEwvX9z665dEkAQ9E4cuS%2FVvh48Qff%2FdHugt9jtQYLJjnpZ%2FdLYTkZPVPWIaljVpp%2BM601%2B0%2BfaJx7MDb2GdFdJU1U7EB6%2BtQJB4XtiPdct3hWKjqEFafgda06EgLf1IDf1%2F3WZwdF%2BtER6xgb%2FDoa8L5NEG4aNmLdivNCA3UplYULxsQ5TFzsKc%2FH6z308M%2BElke1RuTEjGyV26MReJm7EFpTs1Za%2FhpaBxY75%2B3kQENpxgmSSBbAhWOZWUCz7Tj%2BB5LTUCgcezPv8IPTd9%2Bcv3IoELNCz07qooPoPsKpmMdcsQ9Zyl41oxRuHE4JdlbUjFFt%2FdsVe3L7DOf8meQ3YhMnyuIR7NT%2BNY3My8PWe8PRw5ME%2BF%2B%2FTUN6RRzTwvoYyABHPZp3ZGOSkNjxe4wGwJwroHbpEL9mAdNCL6fss%2BXDs0uJybGvzArCxeRtP%2BXs6845cP0U6pBXQnSoxjwG9VksvM522oZFqQk%2B8kl5FCv1KyfQ9TnjMf%2FpBVZ%2Ba7pwuhGR%2FVjk6w5%2F1jD3jtHBBjqkAU8xqPJ9HjLNU4JeNuaeG8zodv8WXsJddtkvutq%2BYYL0q4h8pVbuG8wO7cMvx99gUW2pzpnbG8AGZYJFnPUctAJIDx8WU2T1Vdmu7cybwJgKn9ON9JlCjKSxhbdsoDhJAJjisyOkWl%2F%2FIJYM8vpR2mF8vfqzZ1N%2B48FgY9iAGqN1wnlRF0wh7XpEUv3810qivWauqQ4mzhTbRjRNxkJnz6tNKhV7&X-Amz-Signature=8cf77c5c0f4661fd3aa53e818ea1377835c5ff22e323d81d7f1081cea69ec542&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
