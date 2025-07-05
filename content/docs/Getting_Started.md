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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IIBH64W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGqnI5Ld9CfhULenEqZ5etR4EKJLelmUIB4oke6c1hHKAiBvR75sSNbLIUFJnNUVj16FA5N4aP2Vf9NU%2BnXRWsKQsSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMW4TMKTxB%2BvgCfziMKtwD48JBgrE0HBxULC%2F1LHNJzbC0hQPnuj%2BlrX5fkV504LWE%2BW1QvUqru4%2FDwH5zpuF%2FPU3UT55gEG6Hq11NGwk6%2FsknDAjgmzYiDcSgN3d8KFbsoeRXPF61Adc%2FGbDKmIzFwVkAL3z8I1Mihn3Rix2LQS%2BzWjPAuxMy5JlNxPTA0ggEuTl1JgzHcfJ3aKJwAj0OPfn5QBemC7ImZ2xX%2FI%2Bo%2B9jlweCNfrcDnlUjp8A8zSKLtoD1n%2BBSBdd33nmm1dwKpe2fJLT%2BRvFbWOG%2Fb%2BW6ouglc8b2XsSm0htxsXUmottbopKoaQIdUuy36fPWFjIYie0UbYvxhbypI%2FzRX4dFqeM4n1WJHw8u9BtffMFcKwTGvRsfYN2X8YK%2B2he9x%2BdngpIZH4vCfx6pceskWug8mi%2Fib306mUz2wt%2BRybaZzO4xsl82NlINReBwSjQtcR3e5dolnhj66FPTX%2FAZcuLkUqUJp1LjiP4waB1YfAwZB2EdQM%2F8EXSnx3FmvELKV6qof6y%2BavULUgRrtJSpxMBSYdDyWc22dHREv4HUWk5LZzSs%2BAGKUFngIHCo1fc6rtmawxHpKllTRuvUxqI%2FicNalPxNS52Wmxd0KbOCJjktrMFgdQ5JycEdYi93Nvowr4OiwwY6pgFvIpF4%2FrOdR4I3uIj8a3Qs8jIM1FL3jXRSXiDTkMETJeksvfAxxw0K0DcoOKzhIyJSVkUVXYGkF0aYFBJliGSE4fhz%2BBZafPV%2BR%2FRD4wL0sYARQnLbaU4G3BClUouWNl2SCwl2p3vVyNl7RcK22yQZJzLrAlsb7SgHRyaFGZZRO0lftxsyfvBo6NsuxtjeFKl6wSAX7x81%2FewxbGTpZBGCh6eXeWvI&X-Amz-Signature=a0c59fc1de11129c28e32855512908e4d1c72b84269a966aa4ba5fabd8bd6fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IIBH64W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGqnI5Ld9CfhULenEqZ5etR4EKJLelmUIB4oke6c1hHKAiBvR75sSNbLIUFJnNUVj16FA5N4aP2Vf9NU%2BnXRWsKQsSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMW4TMKTxB%2BvgCfziMKtwD48JBgrE0HBxULC%2F1LHNJzbC0hQPnuj%2BlrX5fkV504LWE%2BW1QvUqru4%2FDwH5zpuF%2FPU3UT55gEG6Hq11NGwk6%2FsknDAjgmzYiDcSgN3d8KFbsoeRXPF61Adc%2FGbDKmIzFwVkAL3z8I1Mihn3Rix2LQS%2BzWjPAuxMy5JlNxPTA0ggEuTl1JgzHcfJ3aKJwAj0OPfn5QBemC7ImZ2xX%2FI%2Bo%2B9jlweCNfrcDnlUjp8A8zSKLtoD1n%2BBSBdd33nmm1dwKpe2fJLT%2BRvFbWOG%2Fb%2BW6ouglc8b2XsSm0htxsXUmottbopKoaQIdUuy36fPWFjIYie0UbYvxhbypI%2FzRX4dFqeM4n1WJHw8u9BtffMFcKwTGvRsfYN2X8YK%2B2he9x%2BdngpIZH4vCfx6pceskWug8mi%2Fib306mUz2wt%2BRybaZzO4xsl82NlINReBwSjQtcR3e5dolnhj66FPTX%2FAZcuLkUqUJp1LjiP4waB1YfAwZB2EdQM%2F8EXSnx3FmvELKV6qof6y%2BavULUgRrtJSpxMBSYdDyWc22dHREv4HUWk5LZzSs%2BAGKUFngIHCo1fc6rtmawxHpKllTRuvUxqI%2FicNalPxNS52Wmxd0KbOCJjktrMFgdQ5JycEdYi93Nvowr4OiwwY6pgFvIpF4%2FrOdR4I3uIj8a3Qs8jIM1FL3jXRSXiDTkMETJeksvfAxxw0K0DcoOKzhIyJSVkUVXYGkF0aYFBJliGSE4fhz%2BBZafPV%2BR%2FRD4wL0sYARQnLbaU4G3BClUouWNl2SCwl2p3vVyNl7RcK22yQZJzLrAlsb7SgHRyaFGZZRO0lftxsyfvBo6NsuxtjeFKl6wSAX7x81%2FewxbGTpZBGCh6eXeWvI&X-Amz-Signature=e96fbaaa16c01b095047b0d6f7e21e29edcc45597b4465fbb31c87d1a3b4ee16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IIBH64W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGqnI5Ld9CfhULenEqZ5etR4EKJLelmUIB4oke6c1hHKAiBvR75sSNbLIUFJnNUVj16FA5N4aP2Vf9NU%2BnXRWsKQsSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMW4TMKTxB%2BvgCfziMKtwD48JBgrE0HBxULC%2F1LHNJzbC0hQPnuj%2BlrX5fkV504LWE%2BW1QvUqru4%2FDwH5zpuF%2FPU3UT55gEG6Hq11NGwk6%2FsknDAjgmzYiDcSgN3d8KFbsoeRXPF61Adc%2FGbDKmIzFwVkAL3z8I1Mihn3Rix2LQS%2BzWjPAuxMy5JlNxPTA0ggEuTl1JgzHcfJ3aKJwAj0OPfn5QBemC7ImZ2xX%2FI%2Bo%2B9jlweCNfrcDnlUjp8A8zSKLtoD1n%2BBSBdd33nmm1dwKpe2fJLT%2BRvFbWOG%2Fb%2BW6ouglc8b2XsSm0htxsXUmottbopKoaQIdUuy36fPWFjIYie0UbYvxhbypI%2FzRX4dFqeM4n1WJHw8u9BtffMFcKwTGvRsfYN2X8YK%2B2he9x%2BdngpIZH4vCfx6pceskWug8mi%2Fib306mUz2wt%2BRybaZzO4xsl82NlINReBwSjQtcR3e5dolnhj66FPTX%2FAZcuLkUqUJp1LjiP4waB1YfAwZB2EdQM%2F8EXSnx3FmvELKV6qof6y%2BavULUgRrtJSpxMBSYdDyWc22dHREv4HUWk5LZzSs%2BAGKUFngIHCo1fc6rtmawxHpKllTRuvUxqI%2FicNalPxNS52Wmxd0KbOCJjktrMFgdQ5JycEdYi93Nvowr4OiwwY6pgFvIpF4%2FrOdR4I3uIj8a3Qs8jIM1FL3jXRSXiDTkMETJeksvfAxxw0K0DcoOKzhIyJSVkUVXYGkF0aYFBJliGSE4fhz%2BBZafPV%2BR%2FRD4wL0sYARQnLbaU4G3BClUouWNl2SCwl2p3vVyNl7RcK22yQZJzLrAlsb7SgHRyaFGZZRO0lftxsyfvBo6NsuxtjeFKl6wSAX7x81%2FewxbGTpZBGCh6eXeWvI&X-Amz-Signature=919912cf70173fed27054bda31f6dcc7fd780037889b1b6ffc8c2f15abdd60a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMQKV643%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEJm5K5YzlO63fDtL8EhgMJKWAhZFhFyvZQG%2FFJaEojbAiEAlL46J8H8MNeCyq1BeH%2FHQvdLiMUKClSR6LHHJqLU10sq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPx2M793lkPNP5SOfSrcAyAS61V%2B94Fssiuy%2FmVAkrVMK05Ct6zjhXgpDhV0cs0NVGBc0Aa8y1O4lmACpWFCDQwln%2Fi%2Bp27N8CUXO%2FNegitXE5ZifZLR9%2BQ8GlRsuCgydihb7W41CLpLrsJnO5TXdumwCJJDQ0aX%2BlXpgEJYU%2B%2F2eVcEBcQSMtnfeki5hWh3IMS9TTaTlAtjQdfhejNRXbVahscFl2U2DCiZ8PyN%2BnV5cGtdrrgujI32H2LHeWz6FD4I5PLffTmGve0VyWohhrFHC0c9QCZ5P193p1WXcsBwj5%2Fa8pZNkd5YkCYBdJvotleyI49SP8%2F%2BVkHPtRze6cDBeR0XqeFjnGx8U5UAxG4Rilg%2BGuK2i0Ge0XneQZvPgBwzwwEDfZG9rpDyR3UxA2FRv%2FkPyiZ6gL9Mm0l%2FDSBZGa2OsGaAFq3RB96lST2N5iXByVvxn68DUo4OFMhcPikXMhFpaPObiIC5hEz3nEZLAZlbiNMhPLYj1XIQavPEh5pTh7sIDrASgkU%2Bi4g49DDbB6PE5HZUGm%2FAMg23dPDWskasCPWBs9z%2FSd5jUV6tUUuoGu8UZ26MxE4Uf7co3Sv9CzbEdCF8PoqydS9apvmi4H%2BS4Yz%2BvV0Nd3YReHciYnXvKgst1DIgJmGuMNSMosMGOqUBsOUBo8USQXFq74aJNkGqKgF%2FETQ1t%2FpY4Qn1DAXN3c8k7SKl73S1yDevxBCBCsmeKpRIRk338IJxTzXMYXWlo%2BECuyqUEzLSyxhDYfzkA13UrKdvzKY4y7rcXav3cmD0dUte%2BsJX9UvifFMcE%2FlDi1c8kge%2BANNnPtoITSXsvqreWBoCYswrDEwRCb%2F2N%2FvYHzaT8X%2B7mB5NDPDVkmYv0ejiJ78%2B&X-Amz-Signature=a6b8f5ef6dcd0d4bd60d68feabd6fd15d20ba6f15d9f33fb57d165ffd234ebe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LZTCZFN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCDFwNryyhxEGtPO3QrzDzil3RuXwDJ6XRe390WhQzKNAIgWVY3vD7I%2FHPbe9TIijSDNfhq8wfXlMEdGQyroEVLEqMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOPnsuUO7%2FcSmmbN6yrcAxWtXDvhsaS5rlIkQvoecnEso7WiSTtQx40m7c5avlaxzgh%2FTPfw9q9OkwPzDA3%2Bj7SgOtWpwIzYiiJ5TNLLkGkVWpGRYx5VwSHPmVFe4ZbY99leVKlzeK3eCMZWHoSDnY8myHHpSM%2FkqEOwKwYaiwLA7O%2F1p5FMoFXEd4zKAP8%2BbgiH%2B1M3O4HGIB4X5KxlFWewI1ZRT6CEG9RM9pfyxb6IzUExezLyjbAMl0w9azvbc6bGW9iFqYwqcN%2BNf0UF%2F%2F7gjo09LpLjB8U%2Fh2d9dDXe5f%2FlxhEH1aIORitKufIr7sTRBAoCR8j1Cy1%2BIolNOY%2F3vcAS5HjGvYI4eFh93Qa5%2B%2F7wtR%2FVDdJnGeld%2BfqSjSUPej3ZrtH9T7oZITr9qCt1Mf4JHNZyp%2BBSroF%2BMfz1wSWlEXv%2FWT7ce5uirnovqjhNXXMD%2FZahE9L1awywqwVqFFgxdOEu730UWaHdv%2BhXbnJsS4T7zoxB3uRY0RaToLn0tNnwEkOoKDF16y5D46HNkBTcrOl3QZmmo8qVRXKVC9WRmjjlOYSiyfkGicEOHi2cUL59LF1i0T83PZMwi%2FdteP%2FxbWt%2BFr9LIMN2kQ6QV0%2BMQ7I9HI4qevpfft3uMF0ngJq1AFvrK7HQMMCNosMGOqUBeahtR3a0Yca0QmbeCZUX%2FjnDyhPvD0hA2PxNdn8vmxcT%2FN8ltq%2F8QchZGW1siayRDbQrRHYNkc2GVthDwMNuSwAvzMvP87xDop7wbhvyRjYH5lWVoH98Rqc%2F5XhFBplSPRUbkuB30Y42RNqrbK%2BJtHCPNXIHWyc2yYM173PoW8ysSVASyegd6B7bmcCtpoyCf6%2FA7DhWSs21bw7%2FcSERUqIDqvKE&X-Amz-Signature=f1ced30e9d966669ef933571b4f7bfbe0b2e4d5dd7ce1547210b6754939dcd06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IIBH64W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGqnI5Ld9CfhULenEqZ5etR4EKJLelmUIB4oke6c1hHKAiBvR75sSNbLIUFJnNUVj16FA5N4aP2Vf9NU%2BnXRWsKQsSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMW4TMKTxB%2BvgCfziMKtwD48JBgrE0HBxULC%2F1LHNJzbC0hQPnuj%2BlrX5fkV504LWE%2BW1QvUqru4%2FDwH5zpuF%2FPU3UT55gEG6Hq11NGwk6%2FsknDAjgmzYiDcSgN3d8KFbsoeRXPF61Adc%2FGbDKmIzFwVkAL3z8I1Mihn3Rix2LQS%2BzWjPAuxMy5JlNxPTA0ggEuTl1JgzHcfJ3aKJwAj0OPfn5QBemC7ImZ2xX%2FI%2Bo%2B9jlweCNfrcDnlUjp8A8zSKLtoD1n%2BBSBdd33nmm1dwKpe2fJLT%2BRvFbWOG%2Fb%2BW6ouglc8b2XsSm0htxsXUmottbopKoaQIdUuy36fPWFjIYie0UbYvxhbypI%2FzRX4dFqeM4n1WJHw8u9BtffMFcKwTGvRsfYN2X8YK%2B2he9x%2BdngpIZH4vCfx6pceskWug8mi%2Fib306mUz2wt%2BRybaZzO4xsl82NlINReBwSjQtcR3e5dolnhj66FPTX%2FAZcuLkUqUJp1LjiP4waB1YfAwZB2EdQM%2F8EXSnx3FmvELKV6qof6y%2BavULUgRrtJSpxMBSYdDyWc22dHREv4HUWk5LZzSs%2BAGKUFngIHCo1fc6rtmawxHpKllTRuvUxqI%2FicNalPxNS52Wmxd0KbOCJjktrMFgdQ5JycEdYi93Nvowr4OiwwY6pgFvIpF4%2FrOdR4I3uIj8a3Qs8jIM1FL3jXRSXiDTkMETJeksvfAxxw0K0DcoOKzhIyJSVkUVXYGkF0aYFBJliGSE4fhz%2BBZafPV%2BR%2FRD4wL0sYARQnLbaU4G3BClUouWNl2SCwl2p3vVyNl7RcK22yQZJzLrAlsb7SgHRyaFGZZRO0lftxsyfvBo6NsuxtjeFKl6wSAX7x81%2FewxbGTpZBGCh6eXeWvI&X-Amz-Signature=c4b64232ab4a9dfb56a0f75aa2cc5e4dfac8943e64d52e9090332cb8e29dcb75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
