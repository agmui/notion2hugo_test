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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIUXT5U%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhWsE3JNrevZG0BjMt%2F6NHaGHeFiczVz9JQHaFgm25LAiEAkW5PgkZ36jc0BTONXr%2B7n2ZQWz1TlHxCz88q4eAGWN0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHA152jQl5ZO04aSoCrcA6yZRuJjIOtX%2Btw9zPdF42IlPWM4UeR8FTcshKGqUkJwmQGS4e%2FI7DyJp0A%2B8MPRWjCMiJgKLrkXyjbugUPaJcpMWJ8HYgUNBN2CFwuiFcu8RlDtZMUNS%2FjHh3UhX4N%2BkHCjTu3KxYnrD1UWDWdiHoG%2B9x1P9OX%2BNovLIPgqUyW4%2FM5nwj7n%2F4v6VVIFQPZRZ39ofVnsRQEzY6LP7in%2FBY2NyX0xkbuEEnVe%2FFWBeKnhHKFAaMwsws0cE5WDmOxpFLUOIkn3CFuKGR1I5mrU2zicquXPQE21FZFvYqUMmdMBOolaN6Z3oRdIbTU3MlN0ucCy1Dm1y4p0GUPvMZr%2BU5kikEONEydidsPK6ewfovisJJeF%2FQclqA5W42pMLezepCGzCUpZIK0HlofZSc%2BYQ7unGvqn6qe0ulK3HztUG1m2MhDoPmYmzOk3bnigRoTiUyOEA5QU2TWr8RE4dLG%2BhkJaret3HaUewwnLz5Ih7rwZtbQIdYQiwsNkeqLJEQ1tOM9l99nQNdP6cx6m0sRewtFcFiwR4vGi5g0Ga5EB6RPZR%2FE0TLEYSkgBLE%2Fn5kyE3cPAth12cl7V7hHU27ZoFKQETdQGlOirl1Fy7eiBQqj8VpF%2F%2BYwkNtfEHY6pMK6x3b0GOqUBdTgOsyalHDjPS9VfaLFeiIbbP27dAAaJgtyhkV147mXNjQTrhi3iN8HkxHrt6WjRX9wVJL%2BhwedK6IpedIOAz6qKI%2BlyAGB5mF9HXz7BoXSmZEkxUh1x4PfZa2PTK7P8LvtXN%2FM0GYZtWwF7dv2W3cEtMQkNaGX%2BbqGdiqkvPveRyDXcCBiuQ0CYXK5pLLqNAmg1Au0aHOgqHCT6HmwFwsWf4AZl&X-Amz-Signature=da5fead2208c0a03fb9a56b6cee8416f4489aac712c8a1873cbb134551e62ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIUXT5U%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhWsE3JNrevZG0BjMt%2F6NHaGHeFiczVz9JQHaFgm25LAiEAkW5PgkZ36jc0BTONXr%2B7n2ZQWz1TlHxCz88q4eAGWN0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHA152jQl5ZO04aSoCrcA6yZRuJjIOtX%2Btw9zPdF42IlPWM4UeR8FTcshKGqUkJwmQGS4e%2FI7DyJp0A%2B8MPRWjCMiJgKLrkXyjbugUPaJcpMWJ8HYgUNBN2CFwuiFcu8RlDtZMUNS%2FjHh3UhX4N%2BkHCjTu3KxYnrD1UWDWdiHoG%2B9x1P9OX%2BNovLIPgqUyW4%2FM5nwj7n%2F4v6VVIFQPZRZ39ofVnsRQEzY6LP7in%2FBY2NyX0xkbuEEnVe%2FFWBeKnhHKFAaMwsws0cE5WDmOxpFLUOIkn3CFuKGR1I5mrU2zicquXPQE21FZFvYqUMmdMBOolaN6Z3oRdIbTU3MlN0ucCy1Dm1y4p0GUPvMZr%2BU5kikEONEydidsPK6ewfovisJJeF%2FQclqA5W42pMLezepCGzCUpZIK0HlofZSc%2BYQ7unGvqn6qe0ulK3HztUG1m2MhDoPmYmzOk3bnigRoTiUyOEA5QU2TWr8RE4dLG%2BhkJaret3HaUewwnLz5Ih7rwZtbQIdYQiwsNkeqLJEQ1tOM9l99nQNdP6cx6m0sRewtFcFiwR4vGi5g0Ga5EB6RPZR%2FE0TLEYSkgBLE%2Fn5kyE3cPAth12cl7V7hHU27ZoFKQETdQGlOirl1Fy7eiBQqj8VpF%2F%2BYwkNtfEHY6pMK6x3b0GOqUBdTgOsyalHDjPS9VfaLFeiIbbP27dAAaJgtyhkV147mXNjQTrhi3iN8HkxHrt6WjRX9wVJL%2BhwedK6IpedIOAz6qKI%2BlyAGB5mF9HXz7BoXSmZEkxUh1x4PfZa2PTK7P8LvtXN%2FM0GYZtWwF7dv2W3cEtMQkNaGX%2BbqGdiqkvPveRyDXcCBiuQ0CYXK5pLLqNAmg1Au0aHOgqHCT6HmwFwsWf4AZl&X-Amz-Signature=abcf0cdd19162b76d60e1f080f0685421fa552f6e1e54acbccbbbd01ff290773&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZCWKAMP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQgXbRdc8evzo%2BJFX9EXXBfDnEuTgQcjgXFwA1eFr88AiEAisRayxFVRTWwrsVInrgO2nIlQXHaM%2F7CBk9A3yBTWXEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9IT1htZZt1qlgyhyrcA5VcaT%2BadTcnliv1uBAs0vrIG0vEb8icxAHTJIGh21kc7AMnLAtJtLOMZTzhI2LrZhhGuVS2T9dDKVwyXcWrqk8zDtvfuaPEX7p4sfQi3%2FbOIz1RXmO9y1M1OhCwoUKo8Bsq91HphZlx785tX5S6eYNqYL3mdhU327PNFBVP8gbSEjNTt4Fq9pnjXY6GnmYNE9jGZLpAnkZ4ReeSzDJA0uR2SUrgKrOrs5f2qvmjFh%2FKmZbaAMdaWPr1fThh9txvQ%2FAgDK6FSzxd%2B9HoypXRDtYM1XuFPWvuihrcyHegHNiC49DgqZo81dy6kyyznHmoLr%2B45jZH7zf6w2TwEaEcHNxnTrwU7NpA5mseIllFedgrIcoiAy2siSWcwEVBAoCBXi1Yni%2B%2BWQDNUJIUHmBVDR0CeaI%2F1ifzL8LI81q%2BlzmkBoumom%2FEkD9NT7BT4qkjtHSL0%2FZEzcysQ5p8Fe5vDSvFPMXvcfHC95ab1LOIl7WB3%2FUbDqhSPBW38iJzGSnkDOlHKh2pPmw2zH4SOfNdF%2Bq6mJ6zdi5NBrb6Hg50cOgZ1oMbz6TVvZhbX6VuUC9qXTbv0aqIZxbQ1onAm0XYBkX7Hh4%2F%2BGby2QTp64jTGmgb8aHx0I2HuXs5QF4ZMNOy3b0GOqUBeil7ccAGQ2ReUn0xOb5858KV%2BzqN%2BPgrxIoRepcBgAYSFuAPUAjgqHVEilmGk5q5w4MZGUv6e2VKBXpBxoLxj1maxXKJG6iuUP7Lag7z6B2drh2dpd6cL5Ux6kl6Ft8X34shfgVqJQWCEN7Grh%2B0vIXfwsPhUdhW5nBoIxU4S2bl6FTCmAMS61aiQXfQHGWvat66a0Rx9AoimaZrZtr4gEIEoTJ%2B&X-Amz-Signature=c6ebeaaf4ee53048657b3130b37cf3aff28c92ad3fcf508cbf3de46167e093aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGWCP42W%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0MNnCUsrhzpCAP7kWQ1Khu9uNSy7fp%2FP1XC%2BnxoozjAiEA8JtDxtl41pA8z%2BEn8VjufnGdlpb4V6RLhHI5ZP5NzJkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFM%2BXUfL6mfAZ9cnNSrcA1DXYHA04DgdGC4Kr3zzdnqSyGQMAGRqy7LvyjxhCsq48VA%2FivYVaF54AXelhqmjPQmdD4HhvEhujQ%2BLKEYAl7ej2kpxqMjmCI1WmZd%2BtPencMVMKftHebKvI%2BSwFu9sEA6%2FnDsEY38bFGSaTNLa35hDOsjIxBigUFMz0R3aNk9ldc026kURPGhUQaGwPdSHYLrA5NdSi%2FRWqpWdDVCxTX96HAjNM2Rxd3ZdsvLiKdN3qVro%2Bzw%2Bi%2B7h9jgwEpwdpR9W0Nk7tPokB1PY9fiVIXky8Pn0UQj2xilSkAN%2Fs8hH8Z3xh7jHSPAdgC18rioRL1jl06paKmkhN0r92XFS2br14E5R5RD5TMl61FRslfKW00gUH95oEIm5GVQ2J9Yo1EEU4in53QIC6KfyXsG2Cq0HU%2FFYKqmruIRJso%2BbAR1EnVY6uACjyAIT%2F3wRTlI74b8ibJ3rlIggYnmlYBb86eQysaadLshuBityXcZ1np11MqUSyge%2Bh3EfK1sjPStvgkMLK3iydTejlTJEOQJwZUWCUpf0GFtuNt0ORxKpuAdLcuKe5QpoWaAWuFgSjIesO4obPjC2oQGWyFInwwBTJByfpBok7b8a27AfvKzq%2F7ukOlK0hN1GtaiMPFDoMLOx3b0GOqUBSS9BBOmj4vDZvmjIWEx73l%2BNvZE%2BZgMSyT8hyPVb6xThMS2fEGAOq3ikHIpjI%2BM%2BjQmbQUc8sbnBLtZaR8jzUiR4cpixrr%2Fp9BpF4LOnEvNz6JCFwtfvNUFenmIT3TqbB4tstXgEJhGo%2BNhue0m7FIM8g0NHKgidbh9WyQSLdgk9CSJ%2BXH3yOhbcenA7C%2FVFTogrAg5HSr15Vwj3JKUMAyoCgm6K&X-Amz-Signature=e107a5f9c7afe906a0ffe99faf702fdbdf8f4a1b659819b58e4a92a381f0e16d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIUXT5U%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhWsE3JNrevZG0BjMt%2F6NHaGHeFiczVz9JQHaFgm25LAiEAkW5PgkZ36jc0BTONXr%2B7n2ZQWz1TlHxCz88q4eAGWN0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHA152jQl5ZO04aSoCrcA6yZRuJjIOtX%2Btw9zPdF42IlPWM4UeR8FTcshKGqUkJwmQGS4e%2FI7DyJp0A%2B8MPRWjCMiJgKLrkXyjbugUPaJcpMWJ8HYgUNBN2CFwuiFcu8RlDtZMUNS%2FjHh3UhX4N%2BkHCjTu3KxYnrD1UWDWdiHoG%2B9x1P9OX%2BNovLIPgqUyW4%2FM5nwj7n%2F4v6VVIFQPZRZ39ofVnsRQEzY6LP7in%2FBY2NyX0xkbuEEnVe%2FFWBeKnhHKFAaMwsws0cE5WDmOxpFLUOIkn3CFuKGR1I5mrU2zicquXPQE21FZFvYqUMmdMBOolaN6Z3oRdIbTU3MlN0ucCy1Dm1y4p0GUPvMZr%2BU5kikEONEydidsPK6ewfovisJJeF%2FQclqA5W42pMLezepCGzCUpZIK0HlofZSc%2BYQ7unGvqn6qe0ulK3HztUG1m2MhDoPmYmzOk3bnigRoTiUyOEA5QU2TWr8RE4dLG%2BhkJaret3HaUewwnLz5Ih7rwZtbQIdYQiwsNkeqLJEQ1tOM9l99nQNdP6cx6m0sRewtFcFiwR4vGi5g0Ga5EB6RPZR%2FE0TLEYSkgBLE%2Fn5kyE3cPAth12cl7V7hHU27ZoFKQETdQGlOirl1Fy7eiBQqj8VpF%2F%2BYwkNtfEHY6pMK6x3b0GOqUBdTgOsyalHDjPS9VfaLFeiIbbP27dAAaJgtyhkV147mXNjQTrhi3iN8HkxHrt6WjRX9wVJL%2BhwedK6IpedIOAz6qKI%2BlyAGB5mF9HXz7BoXSmZEkxUh1x4PfZa2PTK7P8LvtXN%2FM0GYZtWwF7dv2W3cEtMQkNaGX%2BbqGdiqkvPveRyDXcCBiuQ0CYXK5pLLqNAmg1Au0aHOgqHCT6HmwFwsWf4AZl&X-Amz-Signature=daf67838902d70431144278f0b5bf905864146dbd7f5b2694bf1f8d6c3da8068&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
