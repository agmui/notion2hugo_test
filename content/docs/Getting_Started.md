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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LHGZLS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqq%2Fej5JuWN%2B7G%2BaoGHbqnMYabGfEhGYbCi2Kdny6XMAIgW0RjNUPpP8OITx39do0ndUj2LMQO%2FmiIQAnFsDLfJ40q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjufaAj5febX12EdSrcA8QTatYybd%2FrxfdjGYGOM2PBGskoklGuRPH7wLIbEGQD0kQE8G%2BOWNMfZjj%2FPf1tnsv7Zk2N8mrW26wNPVwltu1xdL2S0L5GPTrb1YDZ%2BGWL8vZ%2B4hWxvwpIPHMfLqj4FAxQLySPMwUs9m2uBwXUfGX2OPNLEbAq5oE%2F0gOwdktZWqtdlujXSmiBMZaAc6O4dYJf83A4fn8Xgfoon8adewvTk89n964zh0wE41UeMzXOaBselOK441qmbtjUWMqtoVPdHqkvx2fAyv3vqJci7k95jD1YSGLowRLMQUxAqdGqIUROU%2FO2BTrfJfLalR3%2Blo%2FxWJG0IGZaCfj%2BLTCZCi%2BvjAjIhplgIZwgHrbZ0C5ARhggicgvGPeGfAT%2BQ%2BI%2BvyELcBYCpgI8oZJVH2ppe4Ap%2F%2BYvrRcNifbPUMve9X8qM1kXtFG7tI80qJTS31PHxQ%2BWJ8Ois05%2Bx3fXbKWU1huj7GwLQKSfMUtY8nEfPOQAfqKVi9gRp81xKBhd1YUVgb7a4vqaytGNMOqlhukvzWRswAw4BHiP3dzgJRVALR%2Bg90qb%2BbD78%2Bx76MyS8o8b%2B31nxeiuu32uZm1CBHZADane%2BzUxLhcnTYjcTsUjVWpKSra%2Boe1Nl7H5mawyMKfTpb4GOqUBtrZaj1o4hxn%2Fp%2FYYqz2Znuj9YURl4tq%2BxpJyQw1XbONmEoMhJWK%2FGZpBTkByXHqM9FdIwQV4arWrOWV8K6Hlsx6E9sqReXQJGvcwbWFAiPaHCIs1Ca1zdZ%2FbEqPpHm2AhUpTZZba45wRdePbhmcLkDzsDhKC3CrqYt2cT2tFppm9KPo6JMXn3ZjiV8tQSsQogzMENwpy9290rVDq%2BCuFscW4ID%2B2&X-Amz-Signature=6c7c8545da1228f345ed61a96bca88722cff306743b25842e7679125ea923445&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LHGZLS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqq%2Fej5JuWN%2B7G%2BaoGHbqnMYabGfEhGYbCi2Kdny6XMAIgW0RjNUPpP8OITx39do0ndUj2LMQO%2FmiIQAnFsDLfJ40q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjufaAj5febX12EdSrcA8QTatYybd%2FrxfdjGYGOM2PBGskoklGuRPH7wLIbEGQD0kQE8G%2BOWNMfZjj%2FPf1tnsv7Zk2N8mrW26wNPVwltu1xdL2S0L5GPTrb1YDZ%2BGWL8vZ%2B4hWxvwpIPHMfLqj4FAxQLySPMwUs9m2uBwXUfGX2OPNLEbAq5oE%2F0gOwdktZWqtdlujXSmiBMZaAc6O4dYJf83A4fn8Xgfoon8adewvTk89n964zh0wE41UeMzXOaBselOK441qmbtjUWMqtoVPdHqkvx2fAyv3vqJci7k95jD1YSGLowRLMQUxAqdGqIUROU%2FO2BTrfJfLalR3%2Blo%2FxWJG0IGZaCfj%2BLTCZCi%2BvjAjIhplgIZwgHrbZ0C5ARhggicgvGPeGfAT%2BQ%2BI%2BvyELcBYCpgI8oZJVH2ppe4Ap%2F%2BYvrRcNifbPUMve9X8qM1kXtFG7tI80qJTS31PHxQ%2BWJ8Ois05%2Bx3fXbKWU1huj7GwLQKSfMUtY8nEfPOQAfqKVi9gRp81xKBhd1YUVgb7a4vqaytGNMOqlhukvzWRswAw4BHiP3dzgJRVALR%2Bg90qb%2BbD78%2Bx76MyS8o8b%2B31nxeiuu32uZm1CBHZADane%2BzUxLhcnTYjcTsUjVWpKSra%2Boe1Nl7H5mawyMKfTpb4GOqUBtrZaj1o4hxn%2Fp%2FYYqz2Znuj9YURl4tq%2BxpJyQw1XbONmEoMhJWK%2FGZpBTkByXHqM9FdIwQV4arWrOWV8K6Hlsx6E9sqReXQJGvcwbWFAiPaHCIs1Ca1zdZ%2FbEqPpHm2AhUpTZZba45wRdePbhmcLkDzsDhKC3CrqYt2cT2tFppm9KPo6JMXn3ZjiV8tQSsQogzMENwpy9290rVDq%2BCuFscW4ID%2B2&X-Amz-Signature=0a38269f66db777efa121bb41243285e1d82863ceaf836aa0aa6fc17345dd53f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYH4W3BX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmFrntoJXFNEgP5FxXcqyH9Ty72VS5A2uiAMQeIVlunAiEAgLwlprY7YXFwUIyxgoQeZ9yHzgzR6xOX6L15jnu28bYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDpqdgiYx5UKE7xk%2BCrcA1fA4OjW5SrsYcbqadWvR6tbTLILhf5fES9REPZr5xJMCW7Cwo%2FW5S3oJgirauvNgEV45Jyx%2FqghGtc%2BvbrCeMC3rMWpwW2iaMGb9WqECiyDqsN3gAldebYjlghVzZ08zc5z4cYOEEpYwyL3%2BgK7wrJd%2BD84D6twt9xqk2rcjjkWea%2BLVtwut2SKpIRvrDPP043Vvlmh7KlevgBVeUQAjdGV8HEzSIvshssVAzL5a1OHNZbmLTj%2FHpcujR1Pd9l%2B9noZY29aQCztashS3iHFh7GmYtECHF5vycbQ1Lti%2BhibHROPX0dzl%2FXuaD%2BDehIXWzPrv1NTXbFv%2B71hkwEIak6emprLKeW0ybZqdIviCHtW%2FfGKB8ONS6fCg8CKMtlr0B8%2B3RgVl8y6FmCwzTmrCrrVBBaky5QakD8rGkOs%2Bo5M14qvGYmmEsajcOfYNd7tbmzvbHJKvEWmrUrEzmpBDQnR3Sg5wSXUBNnkinJRv%2Bj2o%2FJAO2JKpwhojNhBG7ooiaX5XMkTg4SN%2FzTgwMVgkDe2PyB4NrWDK3yZI3OkhfNu%2FQqdEOUUp72Mbm1rv8AsZnKBPQ6F%2BiJXg8zdNBhK3tpuj%2Fh6HfWW8YGO7wkQ8OdIro023jjQHV5kw2F8MLfUpb4GOqUB%2FWE67tw6LIenpNyFw9eoJPfxA%2Fj%2Fyxpbgl4%2FzmFxqidlNthREwtxKPN9zNIUn%2BxIrRuiPYxagleL%2F1A3mvLl1ugpnjBVXourQ1olBIsWz1ZMpZuD1rkZoDejmgMhch0bJujWs1mo1G7%2BnOWv23NxyUP7qWbp0BJFuu6gEEHgrpwYMlTHCGb%2FG%2BkHPLIZB%2FMjOnMUToQqwCZrZTx3EFmdZ69XBl9n&X-Amz-Signature=757a6fc6656b72e3b370ad63e659a9d1447eb6d201eba3cb4b043dea99c40346&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RHXK2SF%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBr2Y2BQESoVsc6yyIxWLxhguEjtuZd8kwprXqDEMl3QAiEAgLNuU8JRwOhRkX59gcv5oekjh2nZ4kRVX96nGNCRCIcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDgPlkZ4%2FVCaIBkFNCrcA2yyqyFrT4vEC6abUwq0axBZmdBU0gBe2KoPi3Eo%2BYRY31NiFLzMQvVviPguokWSnWBjdMGNzDqIup%2FQ4Yoqc0UWUvEJNahcoIkr5Iil%2FJU5lTleDvWD3FY4QOEIMYDUu32xpyAQ6Af%2FyifD3MbWYNG7rlf7DLpY3RcPEQLXK4PaGmyfuQzvfE%2Fcnhynbv%2B5qlhphJ38o0tWwZc0iV54MlKbPlueJf4%2BxTebjToDeZ%2BbIXIlYAhacG0aXTb%2BjXGy%2BNHnlU7J6T1XDk5b1a1KR0xv1Buc2KPULATXzQYTVDEN%2F8bDXsBV2PjSEPu56q0ey0FOubanp2pyn5WWAxUYEltgcQEp4ZsQvu8zxczBr1GrK7ElhQJLwqlLjTfgHr69gVgV9JCBdUa5IL32cGKQ%2FDRDmK6m1ClPAIWues%2BN0N819D2zxyZ3tURWtz4yU9oqaloFz39bqJlnaUWey5jbctdpz5GB3Vr%2BWHJoOFGT5Ski331Z28ruRlAB2g5v3AfeSo6h0pIDjMOun2aJY3rZb%2FmX2a7QE5OCeKo3Wo6Osld6kih16M7O8SB5EIuXK4ohDxJbmmUAU6hJAiS6roD7VagTy3lxJqdGCFkrmONMsbKSXmwYiNAU8lskcpiVMMnUpb4GOqUBONfm3nJV06a%2FmfhQFWUi70aGFJu9Ulud2xBxMTb%2BqBRCS9Xr0aKQsS2IeEU7HcLaKHO8Zvm%2F2FYaMvSC%2FYGXTcIoumvEmBsu6pxWCVc4f%2BKA4clqHqSi2i%2BMcvVc9pZ6KiUZHaGiq5txZimCSWZdAaP1eu9A7JFbc%2BSg3qKslwIIzVklM4QmSjJqL4hW%2FzFdxX7e%2F6%2FUK1tICqx%2FGL6iej3cXPuC&X-Amz-Signature=0c64a4ba460a82bc8e1dbe2b9c89ae1f80330b3565d68b00bc59855b2f5eab6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LHGZLS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqq%2Fej5JuWN%2B7G%2BaoGHbqnMYabGfEhGYbCi2Kdny6XMAIgW0RjNUPpP8OITx39do0ndUj2LMQO%2FmiIQAnFsDLfJ40q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjufaAj5febX12EdSrcA8QTatYybd%2FrxfdjGYGOM2PBGskoklGuRPH7wLIbEGQD0kQE8G%2BOWNMfZjj%2FPf1tnsv7Zk2N8mrW26wNPVwltu1xdL2S0L5GPTrb1YDZ%2BGWL8vZ%2B4hWxvwpIPHMfLqj4FAxQLySPMwUs9m2uBwXUfGX2OPNLEbAq5oE%2F0gOwdktZWqtdlujXSmiBMZaAc6O4dYJf83A4fn8Xgfoon8adewvTk89n964zh0wE41UeMzXOaBselOK441qmbtjUWMqtoVPdHqkvx2fAyv3vqJci7k95jD1YSGLowRLMQUxAqdGqIUROU%2FO2BTrfJfLalR3%2Blo%2FxWJG0IGZaCfj%2BLTCZCi%2BvjAjIhplgIZwgHrbZ0C5ARhggicgvGPeGfAT%2BQ%2BI%2BvyELcBYCpgI8oZJVH2ppe4Ap%2F%2BYvrRcNifbPUMve9X8qM1kXtFG7tI80qJTS31PHxQ%2BWJ8Ois05%2Bx3fXbKWU1huj7GwLQKSfMUtY8nEfPOQAfqKVi9gRp81xKBhd1YUVgb7a4vqaytGNMOqlhukvzWRswAw4BHiP3dzgJRVALR%2Bg90qb%2BbD78%2Bx76MyS8o8b%2B31nxeiuu32uZm1CBHZADane%2BzUxLhcnTYjcTsUjVWpKSra%2Boe1Nl7H5mawyMKfTpb4GOqUBtrZaj1o4hxn%2Fp%2FYYqz2Znuj9YURl4tq%2BxpJyQw1XbONmEoMhJWK%2FGZpBTkByXHqM9FdIwQV4arWrOWV8K6Hlsx6E9sqReXQJGvcwbWFAiPaHCIs1Ca1zdZ%2FbEqPpHm2AhUpTZZba45wRdePbhmcLkDzsDhKC3CrqYt2cT2tFppm9KPo6JMXn3ZjiV8tQSsQogzMENwpy9290rVDq%2BCuFscW4ID%2B2&X-Amz-Signature=0505ba521bd366fadac24f49fa5914b46bd11dea57e2805827e0f07a36f81e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
