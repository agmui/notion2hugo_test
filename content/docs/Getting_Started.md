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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNXR5KW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCnaFZ3Yvggqx%2FB3J07C4HlBcPPjkQMNv4nRSaMeJ8%2F0gIhAM%2FRlaOoRWbH%2F%2F2EQc2cxbH5sQ4aMnUwfmjMM%2B3wOMSRKv8DCEoQABoMNjM3NDIzMTgzODA1IgzTAI9s0BE7dIGhexEq3AO4%2FBRkgafvfzDp2By761DQMV89rufXjqTxMVZY8AeiOjC8ppltCwvNk0ATD%2BqrqbqJRieOlXubpWZe6rHM6FtymNxr1wwyE2KVUiIC8PN9n64eu%2Bh9a%2B9KDz8AurSlCM1xGKZL%2F%2BdbjXQs9EsPid4jjJj9dmPSUuzoNUxzfWGj8lLt5kcIe2F2EluzvbY1uLSgGjpv%2FfL03Shwj2cJq4pQvT993CP2ECqtGwbGWsrdrWBBXGVqEA4QHKGWDZHZnc%2BBa2HQN%2F8SlQfb%2FYSx4GzyCtMpequ6c9a0dhDA2O6oVGRQN4tQJHFa6nBY3fpkhU%2FZusmH6P8z0q0IE%2F7ZOEH1zusuUqSHpPtBBd7A6JWuFfCmpjF8bmp%2Fi7rKmM11lBqGnBrjKL1SFyWb2gnbno%2B0ngNZjXOBcVuvOyNX2WXqv%2BOLKq7Pw46g%2F9TcbuCYu4ri%2BLDGTMreGArlWAqX7iSZxCB%2BI49cREeOp4r5IDZMjNW4cbmrQAyrOvmLlxwqMV4z1hDA%2BrUA2C5Jg3VarOiQS3PsrzpunZm8eWXecZJGCMBVrzYSnzsZY0O%2BPAKg%2BK%2FYRbYgd1XAQwYEHyKB8g3l%2FWcAt4ue1wrmk05wK2gDKNHZ7o1Q6nYRNltJrzDtv6y%2BBjqkATSZYaGpBS3ZbQ6tMASaFKsDhEaLP359OT5sFfc7DAGkW1zrIExvMX%2BW2HX72PtDSIqZQXtxzhd6nDCPLmkhmSgnuOqHWBWyakse93VBjDkLCSVcnTD%2BwVPRiIC%2Bc8KMHYSume2BPzpFdU55pH%2FSYvR4WltZWvfk%2BJuvptZgBFJLglAPEs7xhwcMIRrgEpuYjD%2FbdJSJ7RbRHF6uox7JF7AGuY%2Fv&X-Amz-Signature=3fcbeed592f2b5cb4e084d5509b33197acb5d85115cb2f2d394a323bf00c1c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNXR5KW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCnaFZ3Yvggqx%2FB3J07C4HlBcPPjkQMNv4nRSaMeJ8%2F0gIhAM%2FRlaOoRWbH%2F%2F2EQc2cxbH5sQ4aMnUwfmjMM%2B3wOMSRKv8DCEoQABoMNjM3NDIzMTgzODA1IgzTAI9s0BE7dIGhexEq3AO4%2FBRkgafvfzDp2By761DQMV89rufXjqTxMVZY8AeiOjC8ppltCwvNk0ATD%2BqrqbqJRieOlXubpWZe6rHM6FtymNxr1wwyE2KVUiIC8PN9n64eu%2Bh9a%2B9KDz8AurSlCM1xGKZL%2F%2BdbjXQs9EsPid4jjJj9dmPSUuzoNUxzfWGj8lLt5kcIe2F2EluzvbY1uLSgGjpv%2FfL03Shwj2cJq4pQvT993CP2ECqtGwbGWsrdrWBBXGVqEA4QHKGWDZHZnc%2BBa2HQN%2F8SlQfb%2FYSx4GzyCtMpequ6c9a0dhDA2O6oVGRQN4tQJHFa6nBY3fpkhU%2FZusmH6P8z0q0IE%2F7ZOEH1zusuUqSHpPtBBd7A6JWuFfCmpjF8bmp%2Fi7rKmM11lBqGnBrjKL1SFyWb2gnbno%2B0ngNZjXOBcVuvOyNX2WXqv%2BOLKq7Pw46g%2F9TcbuCYu4ri%2BLDGTMreGArlWAqX7iSZxCB%2BI49cREeOp4r5IDZMjNW4cbmrQAyrOvmLlxwqMV4z1hDA%2BrUA2C5Jg3VarOiQS3PsrzpunZm8eWXecZJGCMBVrzYSnzsZY0O%2BPAKg%2BK%2FYRbYgd1XAQwYEHyKB8g3l%2FWcAt4ue1wrmk05wK2gDKNHZ7o1Q6nYRNltJrzDtv6y%2BBjqkATSZYaGpBS3ZbQ6tMASaFKsDhEaLP359OT5sFfc7DAGkW1zrIExvMX%2BW2HX72PtDSIqZQXtxzhd6nDCPLmkhmSgnuOqHWBWyakse93VBjDkLCSVcnTD%2BwVPRiIC%2Bc8KMHYSume2BPzpFdU55pH%2FSYvR4WltZWvfk%2BJuvptZgBFJLglAPEs7xhwcMIRrgEpuYjD%2FbdJSJ7RbRHF6uox7JF7AGuY%2Fv&X-Amz-Signature=eb3e25a38a5107c20dbce1736e8f93c452d1f6c21eb169a0f722a6e462b17544&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPAY3WR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGB6vpnOa5rMWyUrJaIAWlmXxtuy06jZUBsU8uSGB1JAAiEAn6yCOljr06IdT6Jer6Q3nMKzVgUUhg1xcC0dLfaP67cq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLN95pGDhfZ4rh1huCrcA44KIlwIJD2V2wrpKZZ9w8LAX5qONWC9S%2F2OMfFIWsR3vumfzn5odxLE0kQ9rBFDba4qMZvbi8n9BnoRKGmiYMVsIM1eoLXDvB0MEcsfgRK2fyuaubtymatsiegny4sNZZi5ZvoZ04Df5MG%2FrLIUvQ8B9RERnJrG1BmENeQJvToT0Dd8pOSypLlPAWVKWQPn5vO%2Bc%2FxytqqWaOzHxlA88aN4vPoc%2B7u%2BlwNZIx6SICt1VhJ5NJAAWQxjSAn32SB5V67kMiQB2Qafx1iop24C0vuT0UNHviPaNqu9CWPWW4SJ0Gb3ct%2B7G8tlrdQFI6OBCHEFyPKb4BFScNXz1bPdOGsEBmKK1xeKwQvL4uWIs%2BO644HqsYLiNO9O%2B2Z3yYV%2BiYfmpFCK3Gg5Dh3QlpIol0lAOa%2FOaSKQCt%2FGMfIJCABq21wrilIxlb%2BWKW42Hh0zPc1PHilp15Qj7t4fBFrbGzYXnUh1LCeY6NV%2B1qskor5nS1VfbFTON29SioxRRS0o6VRWwZd5dJXQLMCdVGQB793kixYwIXeGaObXy2ECOsDuNZVxj9a8NAsIZcJQhETd%2FeXWFLTw1mN0DG7eIsF%2BS2JlKrEJUBn7wfDt5tKbaj8bxK0wwehhcHvNOwxiMPq%2FrL4GOqUBSGuf4M%2Bnxk80Dj1TxoGLaBvOXw6%2Bt%2BhwIXvu5N%2FqjOYwk4CKJsKDjs%2Fo9C9Pl4OwirsZym%2FDArqlp57ftFUbwSXlahVWzFHHXnRts7mGij%2FpqUNTYt3JE%2BkF08A5q1ubMr65a6KnYHe5iXi9B%2F2cE5NiGwQuEaVfAG0aGelLPAiCdGFD2YPd0hA09nthIDf9cYU0whDlW4XpE7PdRCGRNCpTqV3%2B&X-Amz-Signature=f83292bd4a014a1e8612e43a887f356cb19dc12b740b197a96aa1ea9d027de6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYC65MN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFVGWSQNNh%2BaqEA6yyfFDzI4KBREglzLj51rHKlrcAT6AiBfZyxisY8JndttvJzROqglOjk4Hz%2B%2FwuTVGp14Lddujyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMj%2BzWXKyRbt7Pi63%2FKtwDrIro1CZcT02BauON2jonX3s5FkqAyzoW5%2F4TjhbfKrIAJNsKd4VGUJP9pe%2FZ6ouWxFpNexX1CjYrOTHo%2F08ybll%2F8ZQJJXSyhFPVCdzWzP4th6%2B7Tz1kW3JmQzZu1XxnBBDesh8T204teQBZg9hLjll%2FYrsqJ7kHsDeysiAIIQLpqk0fxKRaA8XHys8QVJO84iOEl73XPgNG88QcNh1VzSCN9G54a0eRYcS1VhkJVlbhZJ5pVVVVUdbRtGQXO2mUBTzkOOY%2BhLhtyA40MGHOijoUahNjoQe16BqyUm71GG73gV7Ar%2BtvaLICdQb43p6%2FJ3ly86PfQnqNEz5U8e%2FcZQSZcFH8ssvOnf4ucWWS0ovPyG6C1XfafEJHg0ovLJJTjS%2BhqNwkobtsCj1hCbcUDPcZV3UKx4JqYvUgoAvsLnEA6Y22oVS05bn%2BSe90EA9t13VATvUoI6pQf7FFmrGDMY6i8oju2CfC4KklTlEva8hxgpp9CVr32l%2FdmN7K1TDS7IqogFhgCfiTQHUKvKU5heajh0uaon1Dp%2FARnFiwwR9V6ibx8BWC%2BaOGz5BZrJLwQ5gyBQS5Veh5LKVmD53u8n7E%2BAhtUYrEf5Gll0jq787a4vSB4vAlcEJ4eu0wwMCsvgY6pgGXPGU88dtKMgv0eeRm5HnH9lwN0Z9TMyWVPqR6GhDemuSmJBXW%2Bo%2FHCzoHI1%2FhA2RzWPm7S%2BS9fbWKQa0%2F5zOOb5rv3wnlVFUpvwMOX%2FZvSTjbEiq4z%2BxOBhMvXWSsszAjQ5Zv2tiwv4BrrbUUCAu02byskBNe0mma9G6kBxb7XVMoZW4wqo5FSJRkyOpSvPEP2e2C27J9BEIjXdI08hO2vAhADg0G&X-Amz-Signature=6ed2dbc845e6a251717b76275ccbcc6abdae977ee2265eaacde359a91c33be11&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNXR5KW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCnaFZ3Yvggqx%2FB3J07C4HlBcPPjkQMNv4nRSaMeJ8%2F0gIhAM%2FRlaOoRWbH%2F%2F2EQc2cxbH5sQ4aMnUwfmjMM%2B3wOMSRKv8DCEoQABoMNjM3NDIzMTgzODA1IgzTAI9s0BE7dIGhexEq3AO4%2FBRkgafvfzDp2By761DQMV89rufXjqTxMVZY8AeiOjC8ppltCwvNk0ATD%2BqrqbqJRieOlXubpWZe6rHM6FtymNxr1wwyE2KVUiIC8PN9n64eu%2Bh9a%2B9KDz8AurSlCM1xGKZL%2F%2BdbjXQs9EsPid4jjJj9dmPSUuzoNUxzfWGj8lLt5kcIe2F2EluzvbY1uLSgGjpv%2FfL03Shwj2cJq4pQvT993CP2ECqtGwbGWsrdrWBBXGVqEA4QHKGWDZHZnc%2BBa2HQN%2F8SlQfb%2FYSx4GzyCtMpequ6c9a0dhDA2O6oVGRQN4tQJHFa6nBY3fpkhU%2FZusmH6P8z0q0IE%2F7ZOEH1zusuUqSHpPtBBd7A6JWuFfCmpjF8bmp%2Fi7rKmM11lBqGnBrjKL1SFyWb2gnbno%2B0ngNZjXOBcVuvOyNX2WXqv%2BOLKq7Pw46g%2F9TcbuCYu4ri%2BLDGTMreGArlWAqX7iSZxCB%2BI49cREeOp4r5IDZMjNW4cbmrQAyrOvmLlxwqMV4z1hDA%2BrUA2C5Jg3VarOiQS3PsrzpunZm8eWXecZJGCMBVrzYSnzsZY0O%2BPAKg%2BK%2FYRbYgd1XAQwYEHyKB8g3l%2FWcAt4ue1wrmk05wK2gDKNHZ7o1Q6nYRNltJrzDtv6y%2BBjqkATSZYaGpBS3ZbQ6tMASaFKsDhEaLP359OT5sFfc7DAGkW1zrIExvMX%2BW2HX72PtDSIqZQXtxzhd6nDCPLmkhmSgnuOqHWBWyakse93VBjDkLCSVcnTD%2BwVPRiIC%2Bc8KMHYSume2BPzpFdU55pH%2FSYvR4WltZWvfk%2BJuvptZgBFJLglAPEs7xhwcMIRrgEpuYjD%2FbdJSJ7RbRHF6uox7JF7AGuY%2Fv&X-Amz-Signature=0ead6f778f52f3bd2dd82246392e9f630f60d25ccaef52521809829cf08bc093&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
