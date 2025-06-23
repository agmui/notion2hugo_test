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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T567V6RF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDYVU%2FOokzOQdv1a4Yaeks4rOQMhMbP8YZ7kZruPglPjgIhAPetR1dDoHDmmfNJloIxE%2B6rL4%2BSzlT%2FabHbbpzUyxAcKv8DCBUQABoMNjM3NDIzMTgzODA1IgzsKe1s9c5VYxPoMf0q3AM3Zk8LlnCPF5CJcYS9lQwd%2F%2F3BqXfZvCmGQxoIkQZ%2B2EjV2ioFJdWFF%2B8kyKikXAGtY9Yku6XYngQbM%2BHWaJwx9E2ZbU3BCoV2LqohZJ1u7oF9cjEsuyoE0K0CKM0zb9Qj9fveqK8EGTf1oENVSSfAOP4tpfS1sNSMS9XHZNhLEnHEHA%2BX2AKfxrL9EnMjv48TN0%2Fb2jFjesayjXfLYDQup%2FVUkN0FclD6pzl40CjNKYhSG58dyx9zFcgQKTXlzsFOWAT7vTRd9ALtHfoLZSJ9J12hCZCXDyNJTXVdS%2BGYRt1T%2FIRQqxbPev0ITSZv8Bw28lWgsRecLPwPuHbCCP7hj9zdJbJyLYeHYA48I4mCqBpuY50gHFJ3DrbIgApb62iDhsKrhYQ%2BfOp5Zh65WrhS7zFAYvpK9HxiGLHVOahhIFwktxlXJRcrmVNAqyxFK6NhdAxrg6yElkNvb3giyIo1KgIhxlLuRNWbZdvn07uBjQuTuArooYdQyEsjPNgtXOGQa5Tqzi6z3ZpK6zuYCeLPL%2BjEBobdwdnoKm7D8MklPoWJ74fbbFy2INbl9ILjaWVBVJ0mA1AfRF3tASJAMiAoe208IYTfkRFF4nIAyezLe33U8P38Xkz4jjtgPjDg9OTCBjqkAXjuVoEO5QyeZlbWtm5zgPG0LDKUcAB0YCDVjBrY%2BcDZ1PQXN6en9oIO759VX5428wj%2BEjYItHjTdxrbtgDDgjsvwY0B8bsq%2BXkWcByoNtBmybvknPQ8JYiw%2B%2FEtSyl6xGxb4LSjNlstPspP8nn9L4Es0YcNubt4TtSt0pyrjkOYVWo1J%2BN9hy1HIpxf1gqi2fsMsQz1SYjRypiC6bwbSldZJV6I&X-Amz-Signature=cac654a1ea40fa945fe933fb88b1cc7a28fd30d360c1aad25e7e8847344953ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T567V6RF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDYVU%2FOokzOQdv1a4Yaeks4rOQMhMbP8YZ7kZruPglPjgIhAPetR1dDoHDmmfNJloIxE%2B6rL4%2BSzlT%2FabHbbpzUyxAcKv8DCBUQABoMNjM3NDIzMTgzODA1IgzsKe1s9c5VYxPoMf0q3AM3Zk8LlnCPF5CJcYS9lQwd%2F%2F3BqXfZvCmGQxoIkQZ%2B2EjV2ioFJdWFF%2B8kyKikXAGtY9Yku6XYngQbM%2BHWaJwx9E2ZbU3BCoV2LqohZJ1u7oF9cjEsuyoE0K0CKM0zb9Qj9fveqK8EGTf1oENVSSfAOP4tpfS1sNSMS9XHZNhLEnHEHA%2BX2AKfxrL9EnMjv48TN0%2Fb2jFjesayjXfLYDQup%2FVUkN0FclD6pzl40CjNKYhSG58dyx9zFcgQKTXlzsFOWAT7vTRd9ALtHfoLZSJ9J12hCZCXDyNJTXVdS%2BGYRt1T%2FIRQqxbPev0ITSZv8Bw28lWgsRecLPwPuHbCCP7hj9zdJbJyLYeHYA48I4mCqBpuY50gHFJ3DrbIgApb62iDhsKrhYQ%2BfOp5Zh65WrhS7zFAYvpK9HxiGLHVOahhIFwktxlXJRcrmVNAqyxFK6NhdAxrg6yElkNvb3giyIo1KgIhxlLuRNWbZdvn07uBjQuTuArooYdQyEsjPNgtXOGQa5Tqzi6z3ZpK6zuYCeLPL%2BjEBobdwdnoKm7D8MklPoWJ74fbbFy2INbl9ILjaWVBVJ0mA1AfRF3tASJAMiAoe208IYTfkRFF4nIAyezLe33U8P38Xkz4jjtgPjDg9OTCBjqkAXjuVoEO5QyeZlbWtm5zgPG0LDKUcAB0YCDVjBrY%2BcDZ1PQXN6en9oIO759VX5428wj%2BEjYItHjTdxrbtgDDgjsvwY0B8bsq%2BXkWcByoNtBmybvknPQ8JYiw%2B%2FEtSyl6xGxb4LSjNlstPspP8nn9L4Es0YcNubt4TtSt0pyrjkOYVWo1J%2BN9hy1HIpxf1gqi2fsMsQz1SYjRypiC6bwbSldZJV6I&X-Amz-Signature=c2a72de72f999e643f1f720d8003face038999681aa2b28abdd4c7fc2bdfb3f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T567V6RF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDYVU%2FOokzOQdv1a4Yaeks4rOQMhMbP8YZ7kZruPglPjgIhAPetR1dDoHDmmfNJloIxE%2B6rL4%2BSzlT%2FabHbbpzUyxAcKv8DCBUQABoMNjM3NDIzMTgzODA1IgzsKe1s9c5VYxPoMf0q3AM3Zk8LlnCPF5CJcYS9lQwd%2F%2F3BqXfZvCmGQxoIkQZ%2B2EjV2ioFJdWFF%2B8kyKikXAGtY9Yku6XYngQbM%2BHWaJwx9E2ZbU3BCoV2LqohZJ1u7oF9cjEsuyoE0K0CKM0zb9Qj9fveqK8EGTf1oENVSSfAOP4tpfS1sNSMS9XHZNhLEnHEHA%2BX2AKfxrL9EnMjv48TN0%2Fb2jFjesayjXfLYDQup%2FVUkN0FclD6pzl40CjNKYhSG58dyx9zFcgQKTXlzsFOWAT7vTRd9ALtHfoLZSJ9J12hCZCXDyNJTXVdS%2BGYRt1T%2FIRQqxbPev0ITSZv8Bw28lWgsRecLPwPuHbCCP7hj9zdJbJyLYeHYA48I4mCqBpuY50gHFJ3DrbIgApb62iDhsKrhYQ%2BfOp5Zh65WrhS7zFAYvpK9HxiGLHVOahhIFwktxlXJRcrmVNAqyxFK6NhdAxrg6yElkNvb3giyIo1KgIhxlLuRNWbZdvn07uBjQuTuArooYdQyEsjPNgtXOGQa5Tqzi6z3ZpK6zuYCeLPL%2BjEBobdwdnoKm7D8MklPoWJ74fbbFy2INbl9ILjaWVBVJ0mA1AfRF3tASJAMiAoe208IYTfkRFF4nIAyezLe33U8P38Xkz4jjtgPjDg9OTCBjqkAXjuVoEO5QyeZlbWtm5zgPG0LDKUcAB0YCDVjBrY%2BcDZ1PQXN6en9oIO759VX5428wj%2BEjYItHjTdxrbtgDDgjsvwY0B8bsq%2BXkWcByoNtBmybvknPQ8JYiw%2B%2FEtSyl6xGxb4LSjNlstPspP8nn9L4Es0YcNubt4TtSt0pyrjkOYVWo1J%2BN9hy1HIpxf1gqi2fsMsQz1SYjRypiC6bwbSldZJV6I&X-Amz-Signature=9ef746af99cbe1a7cf595514f180c732ad727555d95b206221badebcd5b81e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWSPVDEQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIB29sW71MP6MogrVuV%2BvxpsFpk8dSQwGsMy2pfgWNLOQAiAbob5sa6tnod4iD6K4W8rB9jyTGjgVCJwpHF4YAQydSir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMgXYi%2BdKS69eG7hMLKtwDDVgNlhgwJKiHErE1qg1MuAqgf%2BUP7bsCEeU7%2FSlOl0SKzaW25jQM8wlDFNS%2BaYvOoDXy9acXvfrpAdpsRq3ageSyDe6wd1Qng4aTspBKBIDh0LqI1p%2BzxbU%2B1sh3EltcqbYju4g6SeKmDtZh0%2BGVFzw9W0w692tzrdZnVw%2BZaQ4F2biu7W6P6Y2odM0SpPnsldhT7U93wG5%2Faz4uKLSCiaT23lSiL5Xgov6J%2Fz3Mu6%2B1StY%2BD9PIvUv%2FKLNkLYQDibbE2NdUWKpCx23phbTHgcOQue2CktVx9ROOL6ZttEtaPe0qjgubC2vvESyx3EKcIWJGFe8LE3c3Jz2Yo%2FB7jt4kuNHsys%2F8UKkDW9K%2F%2BsBvSfWanKKxCa%2BA%2F2%2BS3YbFJ2TUeGSYuQEz03LRxyGcyqzoXUgZv%2BZzjClCd5QCUI4Jgd%2Fk9X69gjWAeuQtRe2UwPmqh1n%2BRBqtTRtMxGxWudqkntusRsXDcl7VEy6hRj8nz6a%2FxyRyG6%2FhaWLC%2BfACIcVDnbOyXyHmIX8RVA9ud9pedNZk9fUxaUe6L8t04GcWseCvV3epGq7FwGN0C%2BPNEZb5QTy81ywcP%2BCcUlI1vrUoRpsPT0z%2FShOHbSCzPsB%2BLatOrpMxdfGbT%2BowtvTkwgY6pgEdZ00vc%2FU9RFNwjmkPbhmreCN%2F%2BPId1DDA1DO4aOouZc%2B2SeZWrrnxpI6X1nwTqJAJ5TU53Psr%2BCPw7xYhJkWZCCfSBPkL3WBH8HGj4ksC%2FbH7UQs%2FlL%2F%2FI0px06e7jqtwf2PiSmzUwLPS1auOqvo6fWIFSqrSE7M%2F1uiU%2FlTNZ1ronqmhgdnOuid%2FTFVfFRz1YRZhD2MVl4i53KAt1%2BGmeO9RB%2BAf&X-Amz-Signature=ffc6059587481c213de2b50dbbebb4ff43b15873af52dab20bdd7d59a21f37c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOF4D2D2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCAWCpmJV5GBqCQHSlMTCHFsx0fpMPq4ni7F3HpI8kktAIhAObb3AdVF%2BjZeW%2BJOGSkuxb8p7eVuJnnavKU9BKUf5keKv8DCBUQABoMNjM3NDIzMTgzODA1IgxhD62lsF14CeATWcMq3AP1UOTP4jrMY7u9i%2FvopSuwh0GrUuJAz16CIr3Lvkx8IxvFTxp4ReirRsYLClCxvuCTjXjFQt%2Fv1nq%2Fdl%2FRudHmF%2F9WuW2HvmEgu34QDU0Viptf89Md358B7gnSnKx3EWx1kk8Wh1crsIKlipDyJ%2BMkxXE0tsdOSxFaO96yMt9X6SSYac0SI16kcEJwP7nli02QHkPjHrvT03q2Wpn2J161ntRw5zeV6nNul3AV5TJzFi03NvfjQgzj8pxibcAQZEcyT6WTFwWmXDQokKH2yv3c3WwR2dZ8xcEAIiJ%2FstsaZX82B6zhC6JXdwo6%2BDnNUpWx6QxnsUu1NCYEeoxcu4NDiu4wbeP3ReQiwV3RsL82MYO%2FgsilevHOsaz9BojdnbJNUIB3r8WEM%2BhagY5KQGUjHlbNKxDHmybI12LIynpDtFqJVYqy8MfrYNoq0uPzlMxwWt2bB%2Bj6O5OsnQJd2WV7HCMQQNYPzu4QJ%2F1r%2BFlH6J68rpWTUImyIsegkTMhnop5I1JoyLv5pOrn2rZIKVlyIkdxY%2FsCYuO3ndu1YNaTFkxS2NS0ppVPfaf6zVk3OKo%2FyfuNjrTAi5jffFPkk6R0aIqlGwIde9ExDDCFy%2BTQ9cAZUl8YLXYPgoR6gTCo9OTCBjqkATUxGX319KwvByKAR14wmZBxXn7cMikz9cIxDNAV7%2F4kz3AhDH1DFgBzDB7Y2VF%2FECU6hseVwbelhmkmLvHV7JFgBhs731gljfCDv4259GZ29NxuS85oD80YD1RsoESlnbiVFwtSU9iboDwz1ZCdsc%2B6fs74pTM1SWynl5Jvru0P4ed3g395prUvHuwTRFPquqaLNdWDXJwL2Fbki%2BHtuFGTxMrm&X-Amz-Signature=f558aec8f81ab212a7e3e3b3683b56f817d246552d7667b2ef56d13bfab3cd53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T567V6RF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDYVU%2FOokzOQdv1a4Yaeks4rOQMhMbP8YZ7kZruPglPjgIhAPetR1dDoHDmmfNJloIxE%2B6rL4%2BSzlT%2FabHbbpzUyxAcKv8DCBUQABoMNjM3NDIzMTgzODA1IgzsKe1s9c5VYxPoMf0q3AM3Zk8LlnCPF5CJcYS9lQwd%2F%2F3BqXfZvCmGQxoIkQZ%2B2EjV2ioFJdWFF%2B8kyKikXAGtY9Yku6XYngQbM%2BHWaJwx9E2ZbU3BCoV2LqohZJ1u7oF9cjEsuyoE0K0CKM0zb9Qj9fveqK8EGTf1oENVSSfAOP4tpfS1sNSMS9XHZNhLEnHEHA%2BX2AKfxrL9EnMjv48TN0%2Fb2jFjesayjXfLYDQup%2FVUkN0FclD6pzl40CjNKYhSG58dyx9zFcgQKTXlzsFOWAT7vTRd9ALtHfoLZSJ9J12hCZCXDyNJTXVdS%2BGYRt1T%2FIRQqxbPev0ITSZv8Bw28lWgsRecLPwPuHbCCP7hj9zdJbJyLYeHYA48I4mCqBpuY50gHFJ3DrbIgApb62iDhsKrhYQ%2BfOp5Zh65WrhS7zFAYvpK9HxiGLHVOahhIFwktxlXJRcrmVNAqyxFK6NhdAxrg6yElkNvb3giyIo1KgIhxlLuRNWbZdvn07uBjQuTuArooYdQyEsjPNgtXOGQa5Tqzi6z3ZpK6zuYCeLPL%2BjEBobdwdnoKm7D8MklPoWJ74fbbFy2INbl9ILjaWVBVJ0mA1AfRF3tASJAMiAoe208IYTfkRFF4nIAyezLe33U8P38Xkz4jjtgPjDg9OTCBjqkAXjuVoEO5QyeZlbWtm5zgPG0LDKUcAB0YCDVjBrY%2BcDZ1PQXN6en9oIO759VX5428wj%2BEjYItHjTdxrbtgDDgjsvwY0B8bsq%2BXkWcByoNtBmybvknPQ8JYiw%2B%2FEtSyl6xGxb4LSjNlstPspP8nn9L4Es0YcNubt4TtSt0pyrjkOYVWo1J%2BN9hy1HIpxf1gqi2fsMsQz1SYjRypiC6bwbSldZJV6I&X-Amz-Signature=99860abbe51d17e760d1e72a72db9655a678a0ad459b9d7f98d5cbad54ca8574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
