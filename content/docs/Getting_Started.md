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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A6RPNOX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOWl6dYPvHErkOo7kaRllTQfXOr9UqshwQY3TJwgyI%2BAiEAtVBWKiCrnKakCvwKrTHI78Xnwgv%2BVV8ySc0JL%2FtMa0sqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYn7Pgp6KulZCBBCyrcAzY4DXd%2FcptGGbiQi8YHQUBdzMZOA%2Fy0nbAFoLmEhPyUUFXacl7IYByIO%2F9TfwVJ4j1mDeSNJ1KSuhwxZiAZX6VTQI89gazUD%2BqAaXepGWV2xKcT%2ByavCN9den3dYFvqBtLTw%2Fax50VMXkS%2FEye3%2FrmiWb5rJvxsQCtwNfvjANiZz2%2Fy7iYJ89rIq64y1DsKpxwoNBmNPNpu9iUSNeoQILndg3y4qZIpzp2v8rfN%2FCQoRsPzWpiaVYaFa0Hw%2BHmuGWt5RNBdOO4%2BQL6nfozWrVcd1ERmH%2BHdp9ELaf4RWbq%2BRJlkRV9LeZmQg7lno%2BlqHSrSU58G76A84ft%2BdwrtHvIFp7TK35wRlcnkAAwyuF2RiDbdBKfnBWlbwyjDHll4bWQo%2FJHhQByRkY5tgsyEmbRAivu3wGKw73Gg6GKDqn2Yg0jhO8WmEdfNhdFlmatMjeUivBsPgUv0b3Jha89wURskOB4f%2BKtafvSP%2FutQ4aL7VGuzVscrpuWp10Z1oooSNgya0wKi%2FI%2FIHRgQlFMHoIxpTEzZOU0Cy20kLpek%2FC34Sj1XLESBx%2BLL1c4JyRSjzcAUwIvaVpaHImNYPmv0Pqimc5zhEZ4JMMH34KfvKZIpY29jNAz1utUNjx9IMPqhyMMGOqUBI5ue44QNaG%2BZ1IMXMhAQQl6q%2BfyEZjqUeX%2Bcc7k%2Fcorx%2BPdSisaHeRJuVY6Qo7TlgDajVCdLN0nmk1KfWIFiw%2BQNVHhHzmoZrx7xgk8leFW%2B0fFBJeMUBxwPF9%2FVNf2zRzbPf6h77pxWesebAbMic48EBhaiFulHW4k0gI5hubefa0i5qjwB%2FIWMl8TjN7mNOY1d67vsIwK4c0tn%2F60%2F6s2dVX7C&X-Amz-Signature=00035643227a7efbd31a164017b4875960cae8a3439b9f5dae2d64fc02278324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A6RPNOX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOWl6dYPvHErkOo7kaRllTQfXOr9UqshwQY3TJwgyI%2BAiEAtVBWKiCrnKakCvwKrTHI78Xnwgv%2BVV8ySc0JL%2FtMa0sqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYn7Pgp6KulZCBBCyrcAzY4DXd%2FcptGGbiQi8YHQUBdzMZOA%2Fy0nbAFoLmEhPyUUFXacl7IYByIO%2F9TfwVJ4j1mDeSNJ1KSuhwxZiAZX6VTQI89gazUD%2BqAaXepGWV2xKcT%2ByavCN9den3dYFvqBtLTw%2Fax50VMXkS%2FEye3%2FrmiWb5rJvxsQCtwNfvjANiZz2%2Fy7iYJ89rIq64y1DsKpxwoNBmNPNpu9iUSNeoQILndg3y4qZIpzp2v8rfN%2FCQoRsPzWpiaVYaFa0Hw%2BHmuGWt5RNBdOO4%2BQL6nfozWrVcd1ERmH%2BHdp9ELaf4RWbq%2BRJlkRV9LeZmQg7lno%2BlqHSrSU58G76A84ft%2BdwrtHvIFp7TK35wRlcnkAAwyuF2RiDbdBKfnBWlbwyjDHll4bWQo%2FJHhQByRkY5tgsyEmbRAivu3wGKw73Gg6GKDqn2Yg0jhO8WmEdfNhdFlmatMjeUivBsPgUv0b3Jha89wURskOB4f%2BKtafvSP%2FutQ4aL7VGuzVscrpuWp10Z1oooSNgya0wKi%2FI%2FIHRgQlFMHoIxpTEzZOU0Cy20kLpek%2FC34Sj1XLESBx%2BLL1c4JyRSjzcAUwIvaVpaHImNYPmv0Pqimc5zhEZ4JMMH34KfvKZIpY29jNAz1utUNjx9IMPqhyMMGOqUBI5ue44QNaG%2BZ1IMXMhAQQl6q%2BfyEZjqUeX%2Bcc7k%2Fcorx%2BPdSisaHeRJuVY6Qo7TlgDajVCdLN0nmk1KfWIFiw%2BQNVHhHzmoZrx7xgk8leFW%2B0fFBJeMUBxwPF9%2FVNf2zRzbPf6h77pxWesebAbMic48EBhaiFulHW4k0gI5hubefa0i5qjwB%2FIWMl8TjN7mNOY1d67vsIwK4c0tn%2F60%2F6s2dVX7C&X-Amz-Signature=d861c1c0e6e1982d48ed648d6eba586f315263babc46a99790a66fd7b01faed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A6RPNOX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOWl6dYPvHErkOo7kaRllTQfXOr9UqshwQY3TJwgyI%2BAiEAtVBWKiCrnKakCvwKrTHI78Xnwgv%2BVV8ySc0JL%2FtMa0sqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYn7Pgp6KulZCBBCyrcAzY4DXd%2FcptGGbiQi8YHQUBdzMZOA%2Fy0nbAFoLmEhPyUUFXacl7IYByIO%2F9TfwVJ4j1mDeSNJ1KSuhwxZiAZX6VTQI89gazUD%2BqAaXepGWV2xKcT%2ByavCN9den3dYFvqBtLTw%2Fax50VMXkS%2FEye3%2FrmiWb5rJvxsQCtwNfvjANiZz2%2Fy7iYJ89rIq64y1DsKpxwoNBmNPNpu9iUSNeoQILndg3y4qZIpzp2v8rfN%2FCQoRsPzWpiaVYaFa0Hw%2BHmuGWt5RNBdOO4%2BQL6nfozWrVcd1ERmH%2BHdp9ELaf4RWbq%2BRJlkRV9LeZmQg7lno%2BlqHSrSU58G76A84ft%2BdwrtHvIFp7TK35wRlcnkAAwyuF2RiDbdBKfnBWlbwyjDHll4bWQo%2FJHhQByRkY5tgsyEmbRAivu3wGKw73Gg6GKDqn2Yg0jhO8WmEdfNhdFlmatMjeUivBsPgUv0b3Jha89wURskOB4f%2BKtafvSP%2FutQ4aL7VGuzVscrpuWp10Z1oooSNgya0wKi%2FI%2FIHRgQlFMHoIxpTEzZOU0Cy20kLpek%2FC34Sj1XLESBx%2BLL1c4JyRSjzcAUwIvaVpaHImNYPmv0Pqimc5zhEZ4JMMH34KfvKZIpY29jNAz1utUNjx9IMPqhyMMGOqUBI5ue44QNaG%2BZ1IMXMhAQQl6q%2BfyEZjqUeX%2Bcc7k%2Fcorx%2BPdSisaHeRJuVY6Qo7TlgDajVCdLN0nmk1KfWIFiw%2BQNVHhHzmoZrx7xgk8leFW%2B0fFBJeMUBxwPF9%2FVNf2zRzbPf6h77pxWesebAbMic48EBhaiFulHW4k0gI5hubefa0i5qjwB%2FIWMl8TjN7mNOY1d67vsIwK4c0tn%2F60%2F6s2dVX7C&X-Amz-Signature=f298c337531c58a1296b9c01381381db7112be463fd227db6f149a4f6105319a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBP2MOXW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF3q1uUHg%2FYhRTiZI0mYsk23vF7zPqLWE6RQtK3InxtwIgEt0tMEhDHgNhp4sj3yc942SlJ%2BVst27DXypT6BHCr6kqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS4unfoab%2Bxz3yNwCrcA6WY2x9xaJqULWNDHENOMMzioDKThU2i5X8gXaLnGc%2BqSwqsMBBQUFyRfu%2B3DyHV4QAdUIhj6KW0%2F5Ag0SepgJLST%2BKlaScPodkHjGNUX2yO%2BHgAgdM0LQ0u7sO%2FUiGI2smc3vz8%2FABfEsCuc853zvv56YRXff76sApupp2VdINpElXCmkhosJ1IPK3A2RrKMYUQeg%2B4p8S2TREu3dQYhRVOTYpdFTmNFwG%2F3XWkm4Is7GZ8Vcr78SXlioKoTQztL2cQJ2HzCDByBQvohrphFFM0YtAX6ePDbDxh83cvgeLuV9fyS7EPecNksDcHPcGJA31LmhjfOg2NqZCzb8KctNgLM775z3DfBkW48AYv7HUxVwkWuWwmCYidxhXpOgzeVEExGv7KF1nLc6Y0%2BVcvL3wqCydtTEdBh1VklKxV%2Fod%2FBN7cEeAe4rjjbJhwk7F9wd2rDPz9ZxHT0M4i5QyvPhEzeSyQ9k7YXVFdaUhlh3RMA20u234fMWjKNrZXFyGTD684msUfJUgsxEaUVxnCArNypJGgwR79CMxuJgBO3gTWZ7GDf7NtBzcQTzsW2MuGaPTuNlMd3utezeo6JI5LutcKGtnTAYieICGHekxiQXZtCkqNE%2B%2FY9nJLucyLMMGiyMMGOqUBzwIZ1QvaPcNXM9OncKZn46%2Fe95HjgK5rOp3mP10wy7bKO3VKfMxt%2BRpchuDLGwM6gtjGU6S8lz1M8mmu23%2Br4B4UlLrRU5iN9LVnZlk2vhAsRkcZ1E%2FgohnMdVRIsWxZ%2BE2g62dmNe%2BGa8uBq43ww9oVvvfQAQ1vWT%2Fc7WPWJannd%2ByehuA%2BQ0wNEz6E7%2Feu79sgKFcnarTNB5CZjt8qI5gazcq5&X-Amz-Signature=92d8fd30cff5697e676de34c8523b49e1e5bcec84cf211d04bd47fa99da1bc37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y72HD6I%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVl0ZOoLfb4ATq0kDc9wjZ%2B1NzlBziC1PPxUrcSAuz7AiAw8dxFzNCuOiiTnY%2BB8rtD2ldwtt064%2BTBdzChn3uYzSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSq1quhrWkyzgUHRxKtwDd0aidioGgcEreBOUUiZ3er%2Frm4nOxMt0Z36Jn4fw5RDBW7VSVWs986FzV9eD5EYbdosEjJXNXsN%2FGohUimcMOQKYQq15L%2FfU1hgR%2FmZeOey6E0Vyio5zNz%2FSsszLV5uqlSYFdvUMPQSxF5m2Tr9ZHKQuTrjGLGPmMoHDIyGsv%2BcJfd0G8mPhZgkAxQTTch6tHvCxDpPJz%2FSKXRroMAVutDeWohb7tvqaUQNDoPS%2FOGc0twkErXC2lsHkjBWG748LQBJo87L99XtkJmACmTWXRS2cabjK0ogH5UWPqStxMNndtzSt24OBeWiOmYlo8YVT%2F43N5z%2FiX7oEIFrM1KDetb3qpQkNX71Gl36H2WfYLF6c7ApFKQN0JsGuUjJ3l8r635GRuUAqnnJL5zRxzEpXW9Ong3rPtm8JVXttiEGSteNrssJlQZEdik867N12DKhMxBkKdcriRNno3tgRWZkNAOWBSLhFqerdSZ5cwc9U4saHZpBtamwh896qFQGlpCm8Wy7fDYYNNDEYpl3%2B2MOe%2B99X8O%2BEN8Vcb%2BnHu16YkienTj8%2BKBhePsoXkUEsfk38O0UOkNTixFCwsWnequDXWxS7UMnPYdDXwU3CB4CcsatRTynRuRa4yOv4v6gwiKLIwwY6pgFL5RbTb93OizOzYxnn8AGaaXIoyMmRfgDEnJO5p%2BTIJYo9up%2FV%2BKxxkEJSnksG%2FrMIyQ6ZMP4IKc25qEtmyW4N7CJ1bKFyYynzUa0puw2SIrGTaO1jUMTWv8ikQk%2FcITVQxElJthg%2FWXWJRGGc85oPmi9hoAhDdKxRmVgaIFZ6qLhnfY9vsNtUSlOJD4zac5PMhV9V9g2QlW4Y6HcWH7uV1KkYPmf%2F&X-Amz-Signature=961d51b9011321959c3b8e9665dca11fce43ba766bf7baa6d050b6d6b9c4ebb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A6RPNOX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOWl6dYPvHErkOo7kaRllTQfXOr9UqshwQY3TJwgyI%2BAiEAtVBWKiCrnKakCvwKrTHI78Xnwgv%2BVV8ySc0JL%2FtMa0sqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYn7Pgp6KulZCBBCyrcAzY4DXd%2FcptGGbiQi8YHQUBdzMZOA%2Fy0nbAFoLmEhPyUUFXacl7IYByIO%2F9TfwVJ4j1mDeSNJ1KSuhwxZiAZX6VTQI89gazUD%2BqAaXepGWV2xKcT%2ByavCN9den3dYFvqBtLTw%2Fax50VMXkS%2FEye3%2FrmiWb5rJvxsQCtwNfvjANiZz2%2Fy7iYJ89rIq64y1DsKpxwoNBmNPNpu9iUSNeoQILndg3y4qZIpzp2v8rfN%2FCQoRsPzWpiaVYaFa0Hw%2BHmuGWt5RNBdOO4%2BQL6nfozWrVcd1ERmH%2BHdp9ELaf4RWbq%2BRJlkRV9LeZmQg7lno%2BlqHSrSU58G76A84ft%2BdwrtHvIFp7TK35wRlcnkAAwyuF2RiDbdBKfnBWlbwyjDHll4bWQo%2FJHhQByRkY5tgsyEmbRAivu3wGKw73Gg6GKDqn2Yg0jhO8WmEdfNhdFlmatMjeUivBsPgUv0b3Jha89wURskOB4f%2BKtafvSP%2FutQ4aL7VGuzVscrpuWp10Z1oooSNgya0wKi%2FI%2FIHRgQlFMHoIxpTEzZOU0Cy20kLpek%2FC34Sj1XLESBx%2BLL1c4JyRSjzcAUwIvaVpaHImNYPmv0Pqimc5zhEZ4JMMH34KfvKZIpY29jNAz1utUNjx9IMPqhyMMGOqUBI5ue44QNaG%2BZ1IMXMhAQQl6q%2BfyEZjqUeX%2Bcc7k%2Fcorx%2BPdSisaHeRJuVY6Qo7TlgDajVCdLN0nmk1KfWIFiw%2BQNVHhHzmoZrx7xgk8leFW%2B0fFBJeMUBxwPF9%2FVNf2zRzbPf6h77pxWesebAbMic48EBhaiFulHW4k0gI5hubefa0i5qjwB%2FIWMl8TjN7mNOY1d67vsIwK4c0tn%2F60%2F6s2dVX7C&X-Amz-Signature=278597ee4caca8df91fca6e561ea7532fb0eb9f905bea0320209c364644dc5a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
