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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLT534L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMDH8IhVrvsfd%2FxJNDqyAL7%2Btb54WTznUEhwwBFRl73AiEA60kncOkRCwZSxcot8X4btpEIMBN2zRuPKtsGC0dhe98q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLRI9qgoxgVJgwLVDSrcA8uKpYpE950QTIiespptjBrpBByli7L3vqEA1ktMDXN%2F7qL9TonUxAvi9Uj75Qdnt9rJkDE%2FKQ4vr1t5juZUS1ijpI4sIGHwRWiQc9wO9%2FWwLaQvEQp6sS5UUnygvV965iRa6PekLu2kjMlEVY%2BkSPyx5Au7oKy37PpvJotAjcZRiwwTRUCWxgqAq11G7T5WdbOr0%2FKdEvM01kX5g1YghBCgntzIR02WJI0XxZq%2BlLfsXVntgGqKxT3Lw2ZdyxCScCRIhB2JgjDv29NCQSGwc66rnqe7KpIqzrOXjj6YNeXnQ77d8NZorsbvWXbYnJgOfFAk4YqPXoUwtObs6yNsdDwYIyux6Gm6%2BEp0JWoImUyKgqSr2tDovxdYerKWTUhRLOMS7lE3AFNUy8T2MT92iH1uInJrlf4twPzcWRPomI1NkZJ8K5ytl%2BrLLj5Ih4JRZf9LUe0ONqp0rXwd3UsZgZgoFz0D4eYe%2Ff2OWLiyUsVvASWVnedXtWQTEDDxzrGu%2BQz%2F4URiz42H%2BloBU9JhwPfTdn6QCEhWxioFKURfZRrlOnXw1CQaGA5eKkIBU1j1L2pJqdTOKmyXyQdbTGGqd6n8bOclR6afbkT2DS7OkWB7B09gDEKZH5a8vNpXMLad3b4GOqUBObHaOS8VtCxJNfMv4hH0RgcT5hzLKROOG5FzKFG2h8Z1NfuzUJJTk3EgASF4gYwRJgSC1WjU4WVedPTv%2BMxpgnyZhPocp%2Fuaac06OhBqoW%2BoooUBK57WM7OvUgpMaaEx1cjHpaar7LcCJlwVYd3zckamnbEYYaz0uKOwEj0gg3pLyK7ST5sCoS1T3EY07GloUJVNLZqAvw7ZbeBiFgzEHh0%2F2GJc&X-Amz-Signature=6c5d8d3ccea8127b7a3262869cb4b1ca7f14b7d000ae07a4cbe15462d48d3277&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLT534L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMDH8IhVrvsfd%2FxJNDqyAL7%2Btb54WTznUEhwwBFRl73AiEA60kncOkRCwZSxcot8X4btpEIMBN2zRuPKtsGC0dhe98q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLRI9qgoxgVJgwLVDSrcA8uKpYpE950QTIiespptjBrpBByli7L3vqEA1ktMDXN%2F7qL9TonUxAvi9Uj75Qdnt9rJkDE%2FKQ4vr1t5juZUS1ijpI4sIGHwRWiQc9wO9%2FWwLaQvEQp6sS5UUnygvV965iRa6PekLu2kjMlEVY%2BkSPyx5Au7oKy37PpvJotAjcZRiwwTRUCWxgqAq11G7T5WdbOr0%2FKdEvM01kX5g1YghBCgntzIR02WJI0XxZq%2BlLfsXVntgGqKxT3Lw2ZdyxCScCRIhB2JgjDv29NCQSGwc66rnqe7KpIqzrOXjj6YNeXnQ77d8NZorsbvWXbYnJgOfFAk4YqPXoUwtObs6yNsdDwYIyux6Gm6%2BEp0JWoImUyKgqSr2tDovxdYerKWTUhRLOMS7lE3AFNUy8T2MT92iH1uInJrlf4twPzcWRPomI1NkZJ8K5ytl%2BrLLj5Ih4JRZf9LUe0ONqp0rXwd3UsZgZgoFz0D4eYe%2Ff2OWLiyUsVvASWVnedXtWQTEDDxzrGu%2BQz%2F4URiz42H%2BloBU9JhwPfTdn6QCEhWxioFKURfZRrlOnXw1CQaGA5eKkIBU1j1L2pJqdTOKmyXyQdbTGGqd6n8bOclR6afbkT2DS7OkWB7B09gDEKZH5a8vNpXMLad3b4GOqUBObHaOS8VtCxJNfMv4hH0RgcT5hzLKROOG5FzKFG2h8Z1NfuzUJJTk3EgASF4gYwRJgSC1WjU4WVedPTv%2BMxpgnyZhPocp%2Fuaac06OhBqoW%2BoooUBK57WM7OvUgpMaaEx1cjHpaar7LcCJlwVYd3zckamnbEYYaz0uKOwEj0gg3pLyK7ST5sCoS1T3EY07GloUJVNLZqAvw7ZbeBiFgzEHh0%2F2GJc&X-Amz-Signature=19c324c1af41962aa2dd857af78a99490d619cb3eefb743c8e90af92f4dc105b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBRTIOBR%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8v%2FfQ0h2Re2j2L9eOEBrEHzerca%2F%2FmCxciic6J9Jc0gIhAOoX1Z91hNah4VjZNa4vcG9aV2lOcQOR4ovPsDX8a104Kv8DCDcQABoMNjM3NDIzMTgzODA1Igy%2BiH5TM%2B5s57ylAiYq3APnQjmCRGlaZ6huA0MtJEcVHu5u7z3zGNJdCU7oy3xAOKjbDSzxYkJDIVHjIhc5V6ndre91vPVsmboc4KyBnmMdZLFdl6L%2FOh9yoxamMUaKclrHcL6yKdyyCxWFQAipCrQko27k9Gjio4v9eSiJ3VaZyJWCCLssmyyIBZ0uAX%2F3e6r1RMplAHZh8EAtc9vvx5S0DObzlebKuqRdyOpoB97r6lVi42Vj53z5VKPWn32QE2HVEganEWADKPE12TUH%2BiS8oIMyat%2FixmJDx8yl8Q%2BBSHcEeT8vZEGeI0AyvjswhhXHccNL6FW4vfDkBykwHSPkjXZKhsmjF%2FB0mqqVSMJrnYj96NGzCT6BxJE9eUfJ%2F5wX0yIdrvjEWfaVnZYKhKb3T4K3kgW0yzlG4cDWrDbQg7GAWUL9dSK2%2FTaHshtwjh9rbmqVFRdywvcDy0RasnNhrcDx8KwF7v%2B%2FJB7OdyfS8sfnhC7tea4zndXwtDleDt2triqcEW9Rhh59A8sfVexRPv5eQM0bGhjhLBgbQ%2F8bnHmMJmI6V2K794C1LMb62a%2BDRoVD6tLX%2BTuYmuAEQRR1AGYH1VaFSLwl7gP09N0MjKdgyLK7UxxY3nYDls6t%2BGbeiQp3SpF09VhJAjCqnd2%2BBjqkASfD68AGDF629vVNqO2C4P6v54zbAlbFzbF4MpAEqXDer%2FhQ74DkA2Pp66%2B4DvbolIyc9F0hLcijlsL4M9bTqA58i47kAynTO5VPGksGN7Ocxlab1I1CWSKJmBHwPdax%2FP0ZQKQ01MI9SdJGm5PR3UpwLXzjxUqeWCPI%2F3gNeT6QxDIVKIFW%2BXEa2hewqLz%2BjegZLp98w0eIgAV7zo5CQ49p5fiu&X-Amz-Signature=58e3e7121b1b53d57e0e9b86e3d2eba84505b966e1360448390b6cdb15b06781&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6FN5PF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfhG4UHiHftYiiW4BwsUaGn%2FQT1xMSOhrutTleIQT4yAiEAhTVWzAvliy3YScjddGA2d4n8gnB6EQt49pmsQQzB%2BFkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFDs3PEYKRIBV8vW8SrcA6FBeiItSWrCJP90mpdOUKv9UlUkh6CUflE4NJ0WJRTI%2BhUQgs8h96qsiAa%2FUw2ClLdrnZ98AiLvEqVi0Xo8ASCaZHmZIdKQQKAldQK2OiKasE1fA8BzSUduzcmNm0MK96gJAzTUgESE9XEYcMQFIQnm2lvHtUb22Fic7rZc5q9uRlLayYSKE63efRCUd96pOsA0CyV287vCtl3Jid%2BeQxe%2FWJ9w7Y50rMZ0g1HxnEE3mTJmlJOROCtSTu%2BX9Jb3GCk%2FZAy%2F1N%2FyJ%2FP2SxMsRoFaTWrSq%2Fl7rlB9a93FzpiX%2BvlHcehjZYe1%2F%2BB0n8pr6WR6MwC1idY%2FUBEJuRcYfxrZmWilBc6uQ%2FpAdqpdyYDCJ0gEu%2FF9S4Y3l8uGz43hGlk8yi3cl6nuG291%2FVWtyeDbqnZfrD7TPM5y6I42MP%2Bm3E1XDFX2XeyvTg98wkL03%2FVNFd23jjA%2BUFIsJD4Izc%2FYVTVAF1t2aqijJbU8xGQBlABDJudPK0NG3rzDefooeEm4XKODky9br5XyiJ%2BW%2F1iHm6bEQMco%2Bi%2FYpXtygJKT9LoOCMje%2F7stj6QvvnArFtKW%2BXunAKA6qb%2Bc49LHBgupkBF2xhylxwPYATZq1diZYczz%2BD3Bv2vLtAWRMIec3b4GOqUBOGAoTZyHtJd754%2Bn30Jcm8oHChP5Kol3xw12MWprIw9PnGUyEFc6w6fQZBBbLudthth1MAPdiw1%2BX1TqwvEBR8ukSqB6OJCFG13QlsWuOcLOlMlW3V1N2WjhvvaCDzV6uayT7VpjA1%2BlCi%2F2jlGdn%2F8%2Fe4d3OimgI2bGyc9LZDFMHmqtGPN5hgeGx%2B3C%2Fen%2Fludd2EK1caOMJeosxaAN1aVMmOqM&X-Amz-Signature=60bed756367a3cf0c6380964ed365487e8d3081bc36f743132e1e2e18b35360f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CLT534L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMDH8IhVrvsfd%2FxJNDqyAL7%2Btb54WTznUEhwwBFRl73AiEA60kncOkRCwZSxcot8X4btpEIMBN2zRuPKtsGC0dhe98q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLRI9qgoxgVJgwLVDSrcA8uKpYpE950QTIiespptjBrpBByli7L3vqEA1ktMDXN%2F7qL9TonUxAvi9Uj75Qdnt9rJkDE%2FKQ4vr1t5juZUS1ijpI4sIGHwRWiQc9wO9%2FWwLaQvEQp6sS5UUnygvV965iRa6PekLu2kjMlEVY%2BkSPyx5Au7oKy37PpvJotAjcZRiwwTRUCWxgqAq11G7T5WdbOr0%2FKdEvM01kX5g1YghBCgntzIR02WJI0XxZq%2BlLfsXVntgGqKxT3Lw2ZdyxCScCRIhB2JgjDv29NCQSGwc66rnqe7KpIqzrOXjj6YNeXnQ77d8NZorsbvWXbYnJgOfFAk4YqPXoUwtObs6yNsdDwYIyux6Gm6%2BEp0JWoImUyKgqSr2tDovxdYerKWTUhRLOMS7lE3AFNUy8T2MT92iH1uInJrlf4twPzcWRPomI1NkZJ8K5ytl%2BrLLj5Ih4JRZf9LUe0ONqp0rXwd3UsZgZgoFz0D4eYe%2Ff2OWLiyUsVvASWVnedXtWQTEDDxzrGu%2BQz%2F4URiz42H%2BloBU9JhwPfTdn6QCEhWxioFKURfZRrlOnXw1CQaGA5eKkIBU1j1L2pJqdTOKmyXyQdbTGGqd6n8bOclR6afbkT2DS7OkWB7B09gDEKZH5a8vNpXMLad3b4GOqUBObHaOS8VtCxJNfMv4hH0RgcT5hzLKROOG5FzKFG2h8Z1NfuzUJJTk3EgASF4gYwRJgSC1WjU4WVedPTv%2BMxpgnyZhPocp%2Fuaac06OhBqoW%2BoooUBK57WM7OvUgpMaaEx1cjHpaar7LcCJlwVYd3zckamnbEYYaz0uKOwEj0gg3pLyK7ST5sCoS1T3EY07GloUJVNLZqAvw7ZbeBiFgzEHh0%2F2GJc&X-Amz-Signature=81cc973aee81ed7106c303a23937c0a9098f309691fe2318dc603ca7ef22e577&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
