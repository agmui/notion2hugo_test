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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXAL5Z6%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B5kq4YYo1tAr%2BkXEovZnXx%2F4yMS486HNq1Yz4mdrAlAiEAxOrQJfoDCej%2Bo0sqagxNQQW2Yu6fjVYMcSIkFzOGxCQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbNOpvCWBprLtLuayrcAzhebFzP99oPlAWE59OLvJs4ANeAdWDuBAk9ATu56h1nBreMdJSBZrQfzaDnUpL0Ocg4cmZ8vukAOTDQKJBl%2BTlxB8ojFnHLwsR83GsgmqjzQkaTUGx4xrVBOlSY3MZL%2BN7%2FVVen%2FCZiB8tsefK43R%2FaLeiqLzoFxQp4KR%2BWLs00hlqdkQ0o5YKD2xdOdOEngQGSVDjLRZw8rs2vYXTYuJ0zq1MaDEdNVSo15AjbsYJLYBStFmr3FF%2FxQd1736zZL0z%2BEWyg%2BPv5gwv3In0RPDWADVsSkSG3WYChbyOqsh9sBL4YStkZhEneNBcLyoBvKDyyY2PaDKghT5NgfOrFyTurio1Wer%2FrI3VKL%2BO%2Bh1k2ZasJsrtCX%2B8%2FrsGlT2trLM8liN20vOrdjHAfzc4KLTZOsiJ0%2BE4eU4tnwHTV0ALpxzvA7Wev9ZfUKktuwK1xJ24LJfkwwDh7VYqMEZE5a%2Fo92n0VTkbfRWjpI9GljCkMFBztus90U2NnOezc5OSJVbQCtKZcY2QOjpq6YcydMmSowTwXJFUwWI3d5Jr2391lQgRJGK46GiXOopbJATeowO5p4XQwrWZ01ilgJbN3Pi0UQx%2BYex1QNGo%2BEt1TycUoHMxn0ZN2RE5dgxRWMI2h4r0GOqUBEoi%2BYEj%2FbUCaL%2BTfD4FwkqjQl4bG5Vb%2FPkgo%2B8uwFlrqKt2gMHftzv%2BGZWlgqFxKKnAkDjEdsZ8tkiHtjfTmrNGbuo06OL%2F6ads3nnafLGiSBDUtFEC539zq2Xnkyac3wwTjarBM6jDzgqAq4R8jNOjQVh1wqW5Pki%2FEeo7az%2BdU0m1W1Z334EvaIKyPQa1g63sHePxOi50XQlRZJIiCqwBFhGRB&X-Amz-Signature=e1413cd2565cf57486a90e8e49ae4af419da65944d43b588902cbe79d55b0b90&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXAL5Z6%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B5kq4YYo1tAr%2BkXEovZnXx%2F4yMS486HNq1Yz4mdrAlAiEAxOrQJfoDCej%2Bo0sqagxNQQW2Yu6fjVYMcSIkFzOGxCQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbNOpvCWBprLtLuayrcAzhebFzP99oPlAWE59OLvJs4ANeAdWDuBAk9ATu56h1nBreMdJSBZrQfzaDnUpL0Ocg4cmZ8vukAOTDQKJBl%2BTlxB8ojFnHLwsR83GsgmqjzQkaTUGx4xrVBOlSY3MZL%2BN7%2FVVen%2FCZiB8tsefK43R%2FaLeiqLzoFxQp4KR%2BWLs00hlqdkQ0o5YKD2xdOdOEngQGSVDjLRZw8rs2vYXTYuJ0zq1MaDEdNVSo15AjbsYJLYBStFmr3FF%2FxQd1736zZL0z%2BEWyg%2BPv5gwv3In0RPDWADVsSkSG3WYChbyOqsh9sBL4YStkZhEneNBcLyoBvKDyyY2PaDKghT5NgfOrFyTurio1Wer%2FrI3VKL%2BO%2Bh1k2ZasJsrtCX%2B8%2FrsGlT2trLM8liN20vOrdjHAfzc4KLTZOsiJ0%2BE4eU4tnwHTV0ALpxzvA7Wev9ZfUKktuwK1xJ24LJfkwwDh7VYqMEZE5a%2Fo92n0VTkbfRWjpI9GljCkMFBztus90U2NnOezc5OSJVbQCtKZcY2QOjpq6YcydMmSowTwXJFUwWI3d5Jr2391lQgRJGK46GiXOopbJATeowO5p4XQwrWZ01ilgJbN3Pi0UQx%2BYex1QNGo%2BEt1TycUoHMxn0ZN2RE5dgxRWMI2h4r0GOqUBEoi%2BYEj%2FbUCaL%2BTfD4FwkqjQl4bG5Vb%2FPkgo%2B8uwFlrqKt2gMHftzv%2BGZWlgqFxKKnAkDjEdsZ8tkiHtjfTmrNGbuo06OL%2F6ads3nnafLGiSBDUtFEC539zq2Xnkyac3wwTjarBM6jDzgqAq4R8jNOjQVh1wqW5Pki%2FEeo7az%2BdU0m1W1Z334EvaIKyPQa1g63sHePxOi50XQlRZJIiCqwBFhGRB&X-Amz-Signature=f6d66fb5533fef179d5a72c206425835fc2e8cac6513881f05fdd990aab7b042&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JYFNV5Z%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpU%2FjMz7v1GWL%2FnNklbBjJJ66gIPZWQdf0ojCYBPfN%2FAiEAkP0RsFQO9sDBbjh8f%2FJpvWIUnx1hS2pB43GYM7wUsNMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOjwtlwrMiDWFuvXCrcA0BrgvYrGP3dpLzvBi8Ym8zQRF6g3KF%2Bhe3%2F92acTXaUkBr4Tirl4g9U44i%2FuFtWe%2BTxbBnhZh7PVr1C69zzRsG%2Fzb8XLbuNX05I4usg%2F5N0OjIvpLiOfmg%2BCPGW1ZIEaDHSptOs02rwhlYl5K0ZmgmegmP0R2UNWCvZwvPkW7QKb2BYrjsGqSx5%2BOhogNKWlO0xYjUCtwAgGPwpWuf48JhGmKlMnfFY11W4ciCW8e6xegEr8nkiZ31X2NhY3EZckIDFhWubIBvgp7VfC5NWrWgO7XXB1L%2FUI44ZkLC%2F%2BLrhSgk6hD9u%2B1fXNVzNjz20%2FaDY0M1N5CIlgxawymHbBegq%2FS5lAlG5hfkDQx8%2FV%2FrbzeEEUBlDTiTqLsNpTSwxUHq0WBx%2F7X5K6SKrOdJS46MtlxUzPnbCuBu1%2F%2BnHzKK6GoUpbWrQTREboq%2F7NyxiowcG8NBQA8rwHxJl68oYDgOJspIlszQQTV6YbIr6vrIY0jaZwRMRw3ZZb5eJvoldF%2FE0zwYYa%2BVDksNI8%2BuwCwn8ZHZaqOE0Ab1HrgMZgBU7X8KOI7B8g3stCPFv2%2B5fFnz2gQTuDmjEX8md6AZKAgdDkkzJ4Pq4mgBAQ0J8N85u0ToYLlo4W8Te5R1yMOuf4r0GOqUBLQONwNGKDNtd6TmKTsIb30NwhxawVYSrCBZZV9PRpqOWhDcUOQkdVhsdfzHXriL7wC76r2YfVEhynDmGHqGj6VpiJosKlYcCaQUdYi8vXmx77jTuVrm1S8jCTcHajRY%2Fh792%2FWqmjWx%2FYhfgMHlZg08oZ1liHi7Vfb4cnvTwFi3cT4DXkmYKyXsfPr8eUeLzPzhttxqrmEKC1fzLsaGZmvns8jqB&X-Amz-Signature=b744acbc630b68e2e389e0318b9db1fa3da499c60bbff2cd17572e086615f915&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARWYLMX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYu4zYOy%2Bqkmqr1yFGUvMX9GnhxWFuQkv3tvVt5JtBJgIgYUVpNRopEagf%2FL2eEy7lhkbKv2qIkdI5So6n7miQVV0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX0I%2BKcbm%2BF9roxMCrcA%2BN7bJ3mtR7b6OSGMTQPCXoNkbsm9qgepx%2BEZoz9Es7g4kU3oyQQzSekBvpY7h8S4kOoLYvuRyHFJcpng6TYOSc5zJxGfaqlaNrdPQeD%2B2KldHtPtaZklsb4syK8NEjQUA%2FpeNrHwaFs%2B4i5db1PGazRoSwuuoPG0HpbYZ2EvWf%2BratjLK1ZRqgqHyR8Sx52pIUatDtArz%2FNFgBko7sfVOwFnjInW5S0ue%2BkQDmOz%2BdVgiswDzgcxnD7tBz36%2FO6og7alEsnp10fOHbt9P0LQ%2FM1URBKJwXarqc1rhPKFskFotMQwXxJDeJfiLgEEdohKZRaPlppCcE%2FuLn%2Bc43md%2Fyo1ra6Rl%2BbEyBmdtlmS8A0CUecj6mlKjqsjMI7enaZAbEjFHrtelP3ac4PL%2FjYTLeb99P%2BFHRC3EllWqUf1LUv2rgNpMC%2BO1DsaXhqgFBG7gzExqdGcDft8xoN8f2o19jqT%2FrCz2b1IPCnLivB9TEATOVK5X8yX9T3OrEsaKNvB3CdssmrkkyplGu7JYD2tHOKzTt9sYY2WFnwj1aj%2Bre0HwWUKPOqNvbaUelFbtqkMHy7nqGwyYjPYF2mMexNCSzo4E2b%2F%2F1gGe3yl%2Fnv5bwLEE09DNnJfdHnv7SQMNuh4r0GOqUBrhN0SjAcnfgot%2FOwDznrWukQlueREkiIZBC7tm4SkjYDVqOPvFU%2BEdcrTILKCR7YjZo%2B9oRzu8yHJFwhExTqydTvTh80HVn%2BimMhhsp0PJitEicUok07jzNqh8ftCL4vIvOA%2F8xJdwr8zRCh0xl%2BsPcrmWqMPzikp8WEyMYhjgHp7pDgE626RG%2Bvb3N1rArktIoSv7Hp4V1nimLm6avh2dd%2Fy4Gw&X-Amz-Signature=cdd3194b4ac21d840e948cd351048d390db66f3deac6b6b27633e133a1c6ff2e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXAL5Z6%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B5kq4YYo1tAr%2BkXEovZnXx%2F4yMS486HNq1Yz4mdrAlAiEAxOrQJfoDCej%2Bo0sqagxNQQW2Yu6fjVYMcSIkFzOGxCQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbNOpvCWBprLtLuayrcAzhebFzP99oPlAWE59OLvJs4ANeAdWDuBAk9ATu56h1nBreMdJSBZrQfzaDnUpL0Ocg4cmZ8vukAOTDQKJBl%2BTlxB8ojFnHLwsR83GsgmqjzQkaTUGx4xrVBOlSY3MZL%2BN7%2FVVen%2FCZiB8tsefK43R%2FaLeiqLzoFxQp4KR%2BWLs00hlqdkQ0o5YKD2xdOdOEngQGSVDjLRZw8rs2vYXTYuJ0zq1MaDEdNVSo15AjbsYJLYBStFmr3FF%2FxQd1736zZL0z%2BEWyg%2BPv5gwv3In0RPDWADVsSkSG3WYChbyOqsh9sBL4YStkZhEneNBcLyoBvKDyyY2PaDKghT5NgfOrFyTurio1Wer%2FrI3VKL%2BO%2Bh1k2ZasJsrtCX%2B8%2FrsGlT2trLM8liN20vOrdjHAfzc4KLTZOsiJ0%2BE4eU4tnwHTV0ALpxzvA7Wev9ZfUKktuwK1xJ24LJfkwwDh7VYqMEZE5a%2Fo92n0VTkbfRWjpI9GljCkMFBztus90U2NnOezc5OSJVbQCtKZcY2QOjpq6YcydMmSowTwXJFUwWI3d5Jr2391lQgRJGK46GiXOopbJATeowO5p4XQwrWZ01ilgJbN3Pi0UQx%2BYex1QNGo%2BEt1TycUoHMxn0ZN2RE5dgxRWMI2h4r0GOqUBEoi%2BYEj%2FbUCaL%2BTfD4FwkqjQl4bG5Vb%2FPkgo%2B8uwFlrqKt2gMHftzv%2BGZWlgqFxKKnAkDjEdsZ8tkiHtjfTmrNGbuo06OL%2F6ads3nnafLGiSBDUtFEC539zq2Xnkyac3wwTjarBM6jDzgqAq4R8jNOjQVh1wqW5Pki%2FEeo7az%2BdU0m1W1Z334EvaIKyPQa1g63sHePxOi50XQlRZJIiCqwBFhGRB&X-Amz-Signature=56fbb1be2824d3fe4ea96ae6d451eb3a01774347e79abe28b521d581448d4e06&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
