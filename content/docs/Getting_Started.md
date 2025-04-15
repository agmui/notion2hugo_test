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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EYQA3J6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjMQWzaF%2FSXGh7E0wEHn%2BkUsY6VRZrW%2BZUKnL1O8vNwAiBHnVJBeAUd%2Bn6Oaj%2BzR%2BTQrQ3KgQ8LSNyM5QjYHeB9KCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMNKV2Y9UWlI9s2RIKKtwD%2BusdJP3%2FIDUSHcke8TBxhmTyOjRijna2zIjUGXDnJfKMobAF0mzqOdgHdf2NVfQIIo3nRQ2wgNHXpu58N1v21KAKetkKKLgWhUUHkz655WfG4Yo%2FyApZqPnnV%2FuOeQkFcXM9aJFehYguaBECPoMLB4C3LOzVtHAY5DVwYp1p2cCofcBZT7TEP1E9FVQGXlJBG9YHBYQkhTJbLiUnbLbZu2p%2FYRfoi1Na%2F5ucINSarBbgWkXtSyB7CEV%2FaLx5lhD0ZNNJK%2F6CudRUTvLgF%2BScF2q47cOm2fKG9E9E3fCFnbmXY4VfSMApSpBy5ta5X%2BBc0oeqA6v8d1fLdvCkUiodHUK%2FJSO8zMK1Dp6i4DbM5QiGtXDCwDOGIlR6DCbOF4O4JSN4N%2ByIYfzMFmpwnwsj4Rubg7sKTCMrvnKg%2BjL1wjZM%2BHMIMNJ1Ml7CoxvagYO%2BblwUFriCNjsyr0aRM03ip14nCXcBc4cxZVMVnL0vGAOzIYCbfvX%2F0bR4lBiMV2FpeHVqj7DdD6coawbfLlWRQxOx3KsLKXoKazYH7L0zJ8CGZ0HL7tJcoWbAPioxcR2869l5k%2FKAR2uQfyIOSJZTRO1FpTKcHKn2P1iGrN4VU%2BP1Xat%2BbE97q2ns0CQw99X6vwY6pgEWLmsroZcqAfWm%2BOXIExZBD%2B5CdHEpjxWsSbnKAap4i4W3wxAeiC7fk4%2Fy3KVzvujlZ1yIlX7T0zhrBI578qipCePn4GWXr%2BzJQGe6VOBMLCcDaMFxe8YZaU1z7Fe7mK1MoreRHSaq9bUYrBYUbZNgvveL3ckrQ%2BBzROEQCdtY7uTRR9kJFSUWsIq%2BRbU82v91BFftHxC3NqR%2FRNpkYNOEYsZSSCnE&X-Amz-Signature=0a841b40b4d766045aea2e6aa3da939406741049f5fa491f0366544a69a5764d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EYQA3J6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjMQWzaF%2FSXGh7E0wEHn%2BkUsY6VRZrW%2BZUKnL1O8vNwAiBHnVJBeAUd%2Bn6Oaj%2BzR%2BTQrQ3KgQ8LSNyM5QjYHeB9KCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMNKV2Y9UWlI9s2RIKKtwD%2BusdJP3%2FIDUSHcke8TBxhmTyOjRijna2zIjUGXDnJfKMobAF0mzqOdgHdf2NVfQIIo3nRQ2wgNHXpu58N1v21KAKetkKKLgWhUUHkz655WfG4Yo%2FyApZqPnnV%2FuOeQkFcXM9aJFehYguaBECPoMLB4C3LOzVtHAY5DVwYp1p2cCofcBZT7TEP1E9FVQGXlJBG9YHBYQkhTJbLiUnbLbZu2p%2FYRfoi1Na%2F5ucINSarBbgWkXtSyB7CEV%2FaLx5lhD0ZNNJK%2F6CudRUTvLgF%2BScF2q47cOm2fKG9E9E3fCFnbmXY4VfSMApSpBy5ta5X%2BBc0oeqA6v8d1fLdvCkUiodHUK%2FJSO8zMK1Dp6i4DbM5QiGtXDCwDOGIlR6DCbOF4O4JSN4N%2ByIYfzMFmpwnwsj4Rubg7sKTCMrvnKg%2BjL1wjZM%2BHMIMNJ1Ml7CoxvagYO%2BblwUFriCNjsyr0aRM03ip14nCXcBc4cxZVMVnL0vGAOzIYCbfvX%2F0bR4lBiMV2FpeHVqj7DdD6coawbfLlWRQxOx3KsLKXoKazYH7L0zJ8CGZ0HL7tJcoWbAPioxcR2869l5k%2FKAR2uQfyIOSJZTRO1FpTKcHKn2P1iGrN4VU%2BP1Xat%2BbE97q2ns0CQw99X6vwY6pgEWLmsroZcqAfWm%2BOXIExZBD%2B5CdHEpjxWsSbnKAap4i4W3wxAeiC7fk4%2Fy3KVzvujlZ1yIlX7T0zhrBI578qipCePn4GWXr%2BzJQGe6VOBMLCcDaMFxe8YZaU1z7Fe7mK1MoreRHSaq9bUYrBYUbZNgvveL3ckrQ%2BBzROEQCdtY7uTRR9kJFSUWsIq%2BRbU82v91BFftHxC3NqR%2FRNpkYNOEYsZSSCnE&X-Amz-Signature=cc1cecc787faa49afb0e3a5cce687f17560b399f88fd7cfd742442dc7c5cfb7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DGAM6RG%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJLiK5JKpaTyODXbGZhnK%2BhqLaF3XW4J%2FO0fBsNoyoDwIgIp%2ForyvQA%2BSEYv18t7wJGN3%2BFZsdu49MZCi6VaASWPwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPHrBmMYYNe33WBiZCrcAy0dsabO6%2F1R%2FK2Anr8P5bCJuykhjhC4upjayFq5%2BWJwnJIe3GCMw85twwr%2BWGyYhS55QPIHl9RuLqd96WaVM0M2Kyz7bTfIlnrzOR%2FMcVR%2BiX5Hx7e8p%2FcoD0GWUM1m5oYVy59AQt5nYhwkRuf7ax289RqePv493OsHnVSohL7LalFODMgxj5OleTzGTOVhAiXY9arlIfnTifg0lXZa%2FBjcJq7gqBkgyJlqzHLSzr1g37TxD6V67Iai63MmfDQgT6pgdtRkl53qPrQTYuDjQpA15ap3WIxkYnN%2FHWuQiNZ20eS1oufwk%2BoA2SIdouPn4wS4sAyh2gRAUzXDU8QChd0jJem6uP%2FWlP19pbCd6I3tEkx3KamJEjm1WgBWVl%2FsP%2ByxXlbjdBk8FfAAckdktYnOPhY3wQKNvZWlYK3vmm2SoZCFvgtF%2BCj6ot0yJIdah4fVirHjHVAtMDeNFrkhUoX4cDgFVecwVsGFXmXD1bAQSFFJTOsXt2BrpyyBusQqfkayD3Bhx9dq%2B7Et03XrrUSEDO4voOAdHeJyM%2FnW2qPhWlxtAVbQ%2FHnuCvHuBIpRdHxz2vggvWHhguDcJ3ZRLTA76vmrreMouVAhhRAKsIJAeoUcfp0nN2Ohz2KgMPLW%2Br8GOqUBGcAqN8vaj4aW5YgWnMNNtxB6hPrCB4wlGYklNbs0AGxiOQDFUgK7aRhZRcZSk%2FX0pq%2FCWqXxZo94kXc23ny9%2BPqFKywm1AU615AI5uXGqkhoq6qjXWe97XLuT0vjy2hBUuRWepsD%2B0%2FJRK%2FbJhXdeyHzy1NfUm6TlNl92gLqQu1TkV9d4S90j8RD23%2BvHSgOwwEnnXS1PM5ZsDzIkPCY%2F9nyzr5P&X-Amz-Signature=4c5b5128d60b300664886e389f8030d9256fa12ef1bf506b20cfc2ac7cde56d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN47EKX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWsw3WSVKoYZzzy9haACQltknC2CjijMEIUks5C6yoTAIhAPIqyfHm4IGobeU%2B7JR%2B%2FOTgEvKHxUBr0r22%2FFwyAB8iKv8DCDQQABoMNjM3NDIzMTgzODA1IgxFmvLDnJsUGhpzYLoq3AMYeaUNFwdJ5vY%2FXiBwNqeqTiz6PQyjcMigTrmMn9wjU2qyMIGhGbhOqGKMzcuqCOUUqB29vzpD1CNhuzCdJWWBlzVCOEF6vAPIn8Vy20zNF6gbCKhw7j0nb%2FTuIreIhaGWxbJZp6eHQu0329TOP7AxOfCEnNMf1O0E%2FhoMlzwqZ0YKx9GJSjUG6tqSKGHxymQlZrWtMFQV%2B2wjYoqzcbE0SYlh8Q0g8at7iKVy7cxIBqqNcNfLX8G8lfUEml3cA3ya%2BQ0oTIgdV%2FIzqWf%2B3CsagSJBN%2Fzg10pCCNy%2FK9cGNxY%2BlkulDtDnI0NsSdlWWa4Q4NAG8EO3zndOiz3qEzYFdEC%2BsCdCkmAp24tC%2Bd4n3wWr5oeOX%2FERYSoCtDdSCUV9nyP3RbK%2FTOUxIALZ2gn12YZxoz%2FLrRVvdRb3Q6Gq9%2Bhnh8FdZ2iHyaymXNhq2IxyxhyvYhmzAiWWOdO0iNMoCTnJrJG05w4K2I6A78BoVOo1m9D0Cx24xilFoCqOMRwcwmtEAr9uK7vfAT9zQi6T4Rv55Kz9A4q6%2B7%2FIgJw4OjWh3nK0mfuS3PZpZhGePRdBquWl0sraRAPNyLxHOJOKczUhFSUAv3vYEQGCOBOcQNoVj57w%2FdQvwH3tajDn1vq%2FBjqkAQU1Lnls0nf3devtO6jv6r1yxTmsebS1Pbf5N8aZgBqGY64nlk3RPBYhO0zttds8KASzry5SFe75ulS0eVzDMt7J42UHrJYgaS5vb%2BEjVYcsb5LYrn%2FZWUBLIVjQabT%2BgRrLLpcz3Zxs2KqlcY0EsJ%2B4H82%2Bmqu8ZsZGuz3cytv2%2FANSitxH%2B5KqpsmP1iyM7a2K4OK9hp2MihBliTyB7%2B7tGo75&X-Amz-Signature=00a2a464b7a1ed6e402cfc5d9b307c1ed56e4e29b9bd48188eeab57d73226859&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EYQA3J6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjMQWzaF%2FSXGh7E0wEHn%2BkUsY6VRZrW%2BZUKnL1O8vNwAiBHnVJBeAUd%2Bn6Oaj%2BzR%2BTQrQ3KgQ8LSNyM5QjYHeB9KCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMNKV2Y9UWlI9s2RIKKtwD%2BusdJP3%2FIDUSHcke8TBxhmTyOjRijna2zIjUGXDnJfKMobAF0mzqOdgHdf2NVfQIIo3nRQ2wgNHXpu58N1v21KAKetkKKLgWhUUHkz655WfG4Yo%2FyApZqPnnV%2FuOeQkFcXM9aJFehYguaBECPoMLB4C3LOzVtHAY5DVwYp1p2cCofcBZT7TEP1E9FVQGXlJBG9YHBYQkhTJbLiUnbLbZu2p%2FYRfoi1Na%2F5ucINSarBbgWkXtSyB7CEV%2FaLx5lhD0ZNNJK%2F6CudRUTvLgF%2BScF2q47cOm2fKG9E9E3fCFnbmXY4VfSMApSpBy5ta5X%2BBc0oeqA6v8d1fLdvCkUiodHUK%2FJSO8zMK1Dp6i4DbM5QiGtXDCwDOGIlR6DCbOF4O4JSN4N%2ByIYfzMFmpwnwsj4Rubg7sKTCMrvnKg%2BjL1wjZM%2BHMIMNJ1Ml7CoxvagYO%2BblwUFriCNjsyr0aRM03ip14nCXcBc4cxZVMVnL0vGAOzIYCbfvX%2F0bR4lBiMV2FpeHVqj7DdD6coawbfLlWRQxOx3KsLKXoKazYH7L0zJ8CGZ0HL7tJcoWbAPioxcR2869l5k%2FKAR2uQfyIOSJZTRO1FpTKcHKn2P1iGrN4VU%2BP1Xat%2BbE97q2ns0CQw99X6vwY6pgEWLmsroZcqAfWm%2BOXIExZBD%2B5CdHEpjxWsSbnKAap4i4W3wxAeiC7fk4%2Fy3KVzvujlZ1yIlX7T0zhrBI578qipCePn4GWXr%2BzJQGe6VOBMLCcDaMFxe8YZaU1z7Fe7mK1MoreRHSaq9bUYrBYUbZNgvveL3ckrQ%2BBzROEQCdtY7uTRR9kJFSUWsIq%2BRbU82v91BFftHxC3NqR%2FRNpkYNOEYsZSSCnE&X-Amz-Signature=ece7e8d7b29a3c0448217309b9aa7795decb3d4827a6644a3c47e356ee291952&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
