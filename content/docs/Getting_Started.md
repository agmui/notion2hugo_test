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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6UDSR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICFii2KMsDtwfuLIiXjvszNNrGnJwTnxKO%2FOtKb7l4HVAiAp3IXqgTosJ9dbgG2gn1qpSOZ3%2FNS8aWqvmORbqefxsyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMGeJN0McUr0qsBJDVKtwDxejUtqy8QPiinfHBLsu2ICzWcVl6UjynPa2suUPUpcRqLMgzwZ3NBjsxgx23NX2O4HEkbG30w8rEPQ1TlJMHK1%2FSBzjwi9i3KRDzneT5bm5y6eDV6KRx6CXpzxpJNw1h1k68Yi4kIisPbEtKj68%2BCTE2Dk6JcOipP%2BveFfS1M4x3QYaIpFTqQpe7jX34PAryVNVW4DnmpqyhjVSmGUX1NarvqaFpsus%2FWRDQUyi6DWB%2BM7Xun5OA2AnJS6T4VO96dEDLMqHX2LrHUFOGPLINtFHO%2FYrtETbkDndIWSkAj3J2N0JkZawD7oA13zNk0ft4aLsvWXio5lCYs8f4cTxNvtIOz5K3%2BlZcysbM6NBjJu1Mp13ETow%2BZIxAsqKlB1O7L25kSsOJqs%2FucE7CyluodSWgtJCnC1pBqXovSfHZKhakiNGzYZAjCF68RSWViSTRCKyRBEGxE2f7RbDNoqF79vG7HzrofTlZ7NfXnDeEoEP%2BPCz8QdH7eiHfdRR2WhdafKlKvLmBW9aM%2Fq4B7ZpOJOovX6sUiqJTYASIIH6wXdQHGMXy3YXB9nndzHLutnymjwjAXwFEOX6gO4br%2BrJ1aAkr0k1GLF5vtz8Ib7OaKsFXrRky1OG8VpQ0JXEwkviAxQY6pgERduJCYt98TPaIK8UTBFib9vlBPScoRrJZwnRSVl3GAla0BXaxOPbGywPocesHR0HLfK%2FLB1xf9TlwQyjJoV9CcOSqbS05S5XqwwZka5bXns45%2BtagaBcbu4%2BRO99qbwCV8TuGTIaNads9fq%2FA9LUA7Cz7w2NKI0CJAlXeJTvXrx9YEk%2FmaUhTZrzX37A833lkJhcqJv7vKE4y4LzWu%2FOBgSsJ5BaG&X-Amz-Signature=59a5374909fdaa06aee787285a7924fb62380ad6e66079338835fb5ea73275e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6UDSR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICFii2KMsDtwfuLIiXjvszNNrGnJwTnxKO%2FOtKb7l4HVAiAp3IXqgTosJ9dbgG2gn1qpSOZ3%2FNS8aWqvmORbqefxsyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMGeJN0McUr0qsBJDVKtwDxejUtqy8QPiinfHBLsu2ICzWcVl6UjynPa2suUPUpcRqLMgzwZ3NBjsxgx23NX2O4HEkbG30w8rEPQ1TlJMHK1%2FSBzjwi9i3KRDzneT5bm5y6eDV6KRx6CXpzxpJNw1h1k68Yi4kIisPbEtKj68%2BCTE2Dk6JcOipP%2BveFfS1M4x3QYaIpFTqQpe7jX34PAryVNVW4DnmpqyhjVSmGUX1NarvqaFpsus%2FWRDQUyi6DWB%2BM7Xun5OA2AnJS6T4VO96dEDLMqHX2LrHUFOGPLINtFHO%2FYrtETbkDndIWSkAj3J2N0JkZawD7oA13zNk0ft4aLsvWXio5lCYs8f4cTxNvtIOz5K3%2BlZcysbM6NBjJu1Mp13ETow%2BZIxAsqKlB1O7L25kSsOJqs%2FucE7CyluodSWgtJCnC1pBqXovSfHZKhakiNGzYZAjCF68RSWViSTRCKyRBEGxE2f7RbDNoqF79vG7HzrofTlZ7NfXnDeEoEP%2BPCz8QdH7eiHfdRR2WhdafKlKvLmBW9aM%2Fq4B7ZpOJOovX6sUiqJTYASIIH6wXdQHGMXy3YXB9nndzHLutnymjwjAXwFEOX6gO4br%2BrJ1aAkr0k1GLF5vtz8Ib7OaKsFXrRky1OG8VpQ0JXEwkviAxQY6pgERduJCYt98TPaIK8UTBFib9vlBPScoRrJZwnRSVl3GAla0BXaxOPbGywPocesHR0HLfK%2FLB1xf9TlwQyjJoV9CcOSqbS05S5XqwwZka5bXns45%2BtagaBcbu4%2BRO99qbwCV8TuGTIaNads9fq%2FA9LUA7Cz7w2NKI0CJAlXeJTvXrx9YEk%2FmaUhTZrzX37A833lkJhcqJv7vKE4y4LzWu%2FOBgSsJ5BaG&X-Amz-Signature=e60933bb16d12feb9cfb5e906a9f5288b4272d14ea9fc7345eec810804668015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6UDSR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICFii2KMsDtwfuLIiXjvszNNrGnJwTnxKO%2FOtKb7l4HVAiAp3IXqgTosJ9dbgG2gn1qpSOZ3%2FNS8aWqvmORbqefxsyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMGeJN0McUr0qsBJDVKtwDxejUtqy8QPiinfHBLsu2ICzWcVl6UjynPa2suUPUpcRqLMgzwZ3NBjsxgx23NX2O4HEkbG30w8rEPQ1TlJMHK1%2FSBzjwi9i3KRDzneT5bm5y6eDV6KRx6CXpzxpJNw1h1k68Yi4kIisPbEtKj68%2BCTE2Dk6JcOipP%2BveFfS1M4x3QYaIpFTqQpe7jX34PAryVNVW4DnmpqyhjVSmGUX1NarvqaFpsus%2FWRDQUyi6DWB%2BM7Xun5OA2AnJS6T4VO96dEDLMqHX2LrHUFOGPLINtFHO%2FYrtETbkDndIWSkAj3J2N0JkZawD7oA13zNk0ft4aLsvWXio5lCYs8f4cTxNvtIOz5K3%2BlZcysbM6NBjJu1Mp13ETow%2BZIxAsqKlB1O7L25kSsOJqs%2FucE7CyluodSWgtJCnC1pBqXovSfHZKhakiNGzYZAjCF68RSWViSTRCKyRBEGxE2f7RbDNoqF79vG7HzrofTlZ7NfXnDeEoEP%2BPCz8QdH7eiHfdRR2WhdafKlKvLmBW9aM%2Fq4B7ZpOJOovX6sUiqJTYASIIH6wXdQHGMXy3YXB9nndzHLutnymjwjAXwFEOX6gO4br%2BrJ1aAkr0k1GLF5vtz8Ib7OaKsFXrRky1OG8VpQ0JXEwkviAxQY6pgERduJCYt98TPaIK8UTBFib9vlBPScoRrJZwnRSVl3GAla0BXaxOPbGywPocesHR0HLfK%2FLB1xf9TlwQyjJoV9CcOSqbS05S5XqwwZka5bXns45%2BtagaBcbu4%2BRO99qbwCV8TuGTIaNads9fq%2FA9LUA7Cz7w2NKI0CJAlXeJTvXrx9YEk%2FmaUhTZrzX37A833lkJhcqJv7vKE4y4LzWu%2FOBgSsJ5BaG&X-Amz-Signature=eee079fbf7cc7ab3be75d06ec9b6a3a88d4cd7b726387111654be30e61fa1977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZE5TBLO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGDdVsBUZYZmbnO79kriPfJfPM0iTEA5IUQkKrZZ5KrCAiEAuidwcIqp3EbXbd6jybtllnnKvM%2BECuoJ0asG6ANWsMYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBxUn63XqISndV1LdyrcA982jAY5UyuSZ%2FoIMXfEM8MtepEvamawXchOQJkfMfBJ2xxDlaUZM7Zh2VjLGir1R9FDQmEWWJWvsHEBC2UhG0y9TvYVoqLkNVUszxV1vGH3Vqw4FyqeBQDzWDYiTwjq39abDdzJYCBz%2BUvjoX8GQM%2FEe%2BA5D0d7ioYC%2B1Q%2Bxx6jfvGqax%2BFty%2FLTG6QfW5cUxMyh%2Bi5%2Bkojx3Jz3FpxNDtGIEwHvyFw8xKpgnq%2F0jUY8RGygImselBFBpdFq9stkrqXjajht3NfllTmpEwUV%2FpzGZ3jMbJKOxrLU4BOWOWF%2F%2BLubTw0sfOthRRNPnqwrg%2F20Nh683%2Bg%2BJXXfX%2FVPSd7JJB3LrQ2E49y8zx6N1Qw6uSb2sUZ2nZyPvRoDxGqywU0oz5MHrTgXYwN22rSR%2BAA03xC70Da%2Bva5LmhFf1qAtK63znSNGBflLnb8Fto3VPvLPpL1m0yxgerOWz3GOyfbr0RSTftmoFXK2Hob7srygWBCtCTpTtdCW37ZjiXALvC2T45UgB8%2FINv7cO%2BmJK0ojHhuCMqFeciFWgZ0F9CqAN6ygvfnMVqj7cMwhdVa2x6UptzpG6MsVNCi5a6euJ41xFIc75g2jkCKwtv7u3Ulgq8fOV7Fvh1%2F%2FXt9MLn3gMUGOqUBs78zOh49kP3uaYv2tjUsjMZJzWL0QtEDhlMPWe0a0NMB3ByoqehdrQdS1tFlgLSA%2BkaTrmhQY%2BTFr%2BZd9VJ0BQjP1ad%2FbjNqWIBLBZJst%2FS709odVGrhFM1E0ZZRchjh7UpqNWTgQmXeLvkMiyflfC5kRrNtbcw46hpxpADGdMTVeMFm2FLBH8t6wdkfWni8oPGORs7aRyW7GcQXb4rIuQmvXugv&X-Amz-Signature=18a4d4eac4e43ce1c4a548af3e775ffb54404af6b5c07c8cd62efde63c8d28df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXQ5LA4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDOkSqAZfZgy4BIf%2B%2FWspq%2BdvgIwVMafm5UUtJMvF7ZIAIhAPpTh91xW3dJifvgRfe5dus3ID4LG2ZQ6HZtwnNgHNSiKv8DCHEQABoMNjM3NDIzMTgzODA1IgzspQH4osCLyFauGhsq3ANL9gvWDgVLusxHRC%2Fm%2BS8k3kGZxoNUCpJVVdJ5RvsHdtGxTgzmPPC%2F3N%2Bt825m16ZVbmaipeFuw905stFSOGcN3h2UN5GHZ%2Bg0IjXY6INmrUp83xHDNz9pbkEB%2BbC9tuWB%2B4AzQcnuqjFXWept7O3Bh%2BEzuPVFIfx1FJlz9yL9s7W%2FmpiEqTBFftyG4arz0%2FDsQj0VaohDpEIGpPUjlrK4MM%2FnmSnS4WwJVJ5%2Fa%2FkPmy1uDQYNrXyQXosxKcA7SxzKGjOT8CyPDyb49u%2BMMzj9%2Fpe1DyUZycnEsFpC0luETTXjeA3W4m0KYWxuKvrPaN2QXrVKXkgwDFPAHI4Dpm0qd7UhL4LwCynXtOrBqGsK19Xc9Ykoqj04zgl2UmRqcNTmmQP2lrpp5ipYQ0ZiIOWZyl6zuUT4UTpx2fvh5GjiwZTBEH8bKI7hspDZynvNdsx5mRpjHRq4ShV%2F%2BCNQAdCwaQFtMy49%2FrYunQyfVz6J%2FdM4I%2FHsk13vqzkneHkt4%2FrpAL%2FL0cVj5Abm8qiHUDxDcTOYIHQeCJmJEu8r6KQHuETO%2BLfheBqcV%2FrJR3TCi1tvgeF0Pf2JHbO2h1OnaHbgNb5WSqpYvT%2B0diHp6wzvTZOuWeIDr4vzgaK27TDF94DFBjqkAdiV6g7HxImUcATb4Ep8AliSo%2FqeKR%2BpO8guMKy%2BDWGkFb4QHAFp6MddzVB5F5gMnIYhpm%2Br1yaUqMHHXEYpb4L9NuuUGbgTkPycXWG1%2FYEhTAJc%2BM2jkQ23iBeFQYjEcKXjPSXEgNz1ZAruwmBHvVZCgZUJ%2FPkx%2FS3lOFvtBqMT%2BsX4t%2FxhRZLzJRVakKfnKl97R%2BROpgqiNIGD8P7ZmLm8Bbe6&X-Amz-Signature=b8a7ea1d2e44bf4bfadf57f1c744f7f10d0093d18e29543439d057134ec453e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z6UDSR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICFii2KMsDtwfuLIiXjvszNNrGnJwTnxKO%2FOtKb7l4HVAiAp3IXqgTosJ9dbgG2gn1qpSOZ3%2FNS8aWqvmORbqefxsyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMGeJN0McUr0qsBJDVKtwDxejUtqy8QPiinfHBLsu2ICzWcVl6UjynPa2suUPUpcRqLMgzwZ3NBjsxgx23NX2O4HEkbG30w8rEPQ1TlJMHK1%2FSBzjwi9i3KRDzneT5bm5y6eDV6KRx6CXpzxpJNw1h1k68Yi4kIisPbEtKj68%2BCTE2Dk6JcOipP%2BveFfS1M4x3QYaIpFTqQpe7jX34PAryVNVW4DnmpqyhjVSmGUX1NarvqaFpsus%2FWRDQUyi6DWB%2BM7Xun5OA2AnJS6T4VO96dEDLMqHX2LrHUFOGPLINtFHO%2FYrtETbkDndIWSkAj3J2N0JkZawD7oA13zNk0ft4aLsvWXio5lCYs8f4cTxNvtIOz5K3%2BlZcysbM6NBjJu1Mp13ETow%2BZIxAsqKlB1O7L25kSsOJqs%2FucE7CyluodSWgtJCnC1pBqXovSfHZKhakiNGzYZAjCF68RSWViSTRCKyRBEGxE2f7RbDNoqF79vG7HzrofTlZ7NfXnDeEoEP%2BPCz8QdH7eiHfdRR2WhdafKlKvLmBW9aM%2Fq4B7ZpOJOovX6sUiqJTYASIIH6wXdQHGMXy3YXB9nndzHLutnymjwjAXwFEOX6gO4br%2BrJ1aAkr0k1GLF5vtz8Ib7OaKsFXrRky1OG8VpQ0JXEwkviAxQY6pgERduJCYt98TPaIK8UTBFib9vlBPScoRrJZwnRSVl3GAla0BXaxOPbGywPocesHR0HLfK%2FLB1xf9TlwQyjJoV9CcOSqbS05S5XqwwZka5bXns45%2BtagaBcbu4%2BRO99qbwCV8TuGTIaNads9fq%2FA9LUA7Cz7w2NKI0CJAlXeJTvXrx9YEk%2FmaUhTZrzX37A833lkJhcqJv7vKE4y4LzWu%2FOBgSsJ5BaG&X-Amz-Signature=4ea1c9c5d233e7205e91379a46d1369519f8106c7e8824fd36ef575ffb9b1b79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
