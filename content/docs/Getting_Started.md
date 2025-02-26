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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK57IX4H%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVelZwPEWfjBGylB053PVcFYlfdBm4GZB7bZokSNk1fAIgFXWTenqb3w94lbWooNZ3UujRl1PsZg3o2k7fEyiqHtkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEweJB%2FECBh9Xs7rCSrcA63tEy8Mz%2B7VZC3u4jTsKL8s3vD5e%2FMpLVMoP16gZnesR2aL5ruUuV5yx3osB6NahLzrT2YSGmNT4kEeF62ngR2GI6Zb4zgJBarPlMbHLmWGGuyYYcHT0veJt4ncAwtmM5e7%2FMg9SxVbpOhleZPQn1clHAgwMI272mdiSb7JuhFi5lEjHnLs%2BwiQSNh6aKQN85KToJTOmvEQLmIMb1dpyIDmYe3H%2Fyg8UBHNHh7emqo%2BA7BeiIBYDkz2848MHBgUKIMgM3GJrvDctZ4oRem0Yns2xUa1oPvU%2F56oisE0mS2%2FEu20W25FfHi43lBRQgdG85DCT%2FKF%2BWb7ljeeG0YJFP9CZE2Qphx80gzugo4pYEEuhmKE7mRu4xsKR37p17EBUcF6xKuyQqqz41eYIULlHYn8U%2F%2F00eEmUxkbmSmmBlbyIYNbnpnCwdPH9gzZNGsUU7dPwpqax7cLyYmojcLpenH%2FfA1EOIXfmq0fQEPFGa0UXPAbd1HFLk4f2hvw1Rsw6dQ5xyJk19dOn5CDuG1OuWKD7s%2FUZ3e6%2F7x6qDk4NbrKA7JQqUpVSsiZC0sg%2Bmx8wTNFwvetT1pCa6Iwd73WH%2F1YwfHPj6Pham7TGcNds5UClZw7YgncGrKniLKKMMCI%2FL0GOqUBxS2VGGYwtEwmzA13ui6rjQAgRIbUwenOac4%2Fc9SSGMZjRPSa8iPK%2FIlkque02Zn0RF4OTSrOMgN0g84EjtzHLEKjFVmpTsR6AnvVZZQadKXJ8Ec7bI0MA2AdAdiJ6QWA2HTCN2nShb8ERm3rwkue17FCxkrW%2FOHX94DWQqJhk%2FjnIiMqzfcMICQTSFfF%2FGDXcwOo8F8JbaNTT%2FHyzNqlpRhzlbpo&X-Amz-Signature=b2208e3744a68b4e8645dd6b415328abf7a3308408dc9e6ebcabfb738c24ceb3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK57IX4H%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVelZwPEWfjBGylB053PVcFYlfdBm4GZB7bZokSNk1fAIgFXWTenqb3w94lbWooNZ3UujRl1PsZg3o2k7fEyiqHtkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEweJB%2FECBh9Xs7rCSrcA63tEy8Mz%2B7VZC3u4jTsKL8s3vD5e%2FMpLVMoP16gZnesR2aL5ruUuV5yx3osB6NahLzrT2YSGmNT4kEeF62ngR2GI6Zb4zgJBarPlMbHLmWGGuyYYcHT0veJt4ncAwtmM5e7%2FMg9SxVbpOhleZPQn1clHAgwMI272mdiSb7JuhFi5lEjHnLs%2BwiQSNh6aKQN85KToJTOmvEQLmIMb1dpyIDmYe3H%2Fyg8UBHNHh7emqo%2BA7BeiIBYDkz2848MHBgUKIMgM3GJrvDctZ4oRem0Yns2xUa1oPvU%2F56oisE0mS2%2FEu20W25FfHi43lBRQgdG85DCT%2FKF%2BWb7ljeeG0YJFP9CZE2Qphx80gzugo4pYEEuhmKE7mRu4xsKR37p17EBUcF6xKuyQqqz41eYIULlHYn8U%2F%2F00eEmUxkbmSmmBlbyIYNbnpnCwdPH9gzZNGsUU7dPwpqax7cLyYmojcLpenH%2FfA1EOIXfmq0fQEPFGa0UXPAbd1HFLk4f2hvw1Rsw6dQ5xyJk19dOn5CDuG1OuWKD7s%2FUZ3e6%2F7x6qDk4NbrKA7JQqUpVSsiZC0sg%2Bmx8wTNFwvetT1pCa6Iwd73WH%2F1YwfHPj6Pham7TGcNds5UClZw7YgncGrKniLKKMMCI%2FL0GOqUBxS2VGGYwtEwmzA13ui6rjQAgRIbUwenOac4%2Fc9SSGMZjRPSa8iPK%2FIlkque02Zn0RF4OTSrOMgN0g84EjtzHLEKjFVmpTsR6AnvVZZQadKXJ8Ec7bI0MA2AdAdiJ6QWA2HTCN2nShb8ERm3rwkue17FCxkrW%2FOHX94DWQqJhk%2FjnIiMqzfcMICQTSFfF%2FGDXcwOo8F8JbaNTT%2FHyzNqlpRhzlbpo&X-Amz-Signature=bcbdc9493ca34829da6f7b218aa37c41b2c012abc278d753581872f2eaf5a52d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOGBQO3I%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAv20wDpQh3Yfd1fTReLEztWd7dtGnZh5LXGSuGJLE5AAiAbqJjqWFq4UL1urGPDM8yWrq0Hv9I%2FcS5qjyDi9LkeqSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMqoGMo%2FWPRmJbSbbPKtwDb9cL6DxTU3WVtrJz3S5Oq2Wey5xDSbWFvjzyHmLzrKnD15b%2F7Kz54bkXZE9%2FF9pgNLYhym5GiOSEqRivVImWMhy%2BGQdBjqb20qRJkHUBWinI41kyNSWnLVfAhyuB9ZHC1OTVQl%2F8Gk6ZZ6nn3NXzPXkf4pPfjO4iU%2BdRBC1d3b%2F9OFHRWmIZARB%2Fv0zMGDb%2FvQuCFg4YtjhppglDdV8IpsESOcSSTVHj098dItjJPsBxlDBam%2F39RF0jtDnms39PEIXyEUkOX%2BfNhox0Aj8Xlx94bL1YVBCn8hKRG6Q55rTcxGuW2pSiNVRHTtQsZuDh82lKxeDa8%2BaiIpBJmvne%2BDOlnaCxCj0q8SFaNLh3T0kkJNSfdRh11zYTcH58GZ36IfdFu4%2F2YVXpegV7YKBBsni0XeSWhSEPlLOgTpr5geBWvtWsTu2jpf4U0Tw9ZevqFIxeHsCqMq4NEFQodds6irwwcT7785JVqrk5vP0f9JH1jTWimhYI3CB1JCU5x9%2F1SzMyY7PbEfif%2BcS4q4WnqOAGGsJJpW2YhtTHPZTpekQRzvA4mS5VmrAJxI9k3BEJ7bcx6woRoNys8oLHnfJTyAkTz960oo9otj1akxhyvhbZ5L8lD%2Bok3R7rf%2BMwpIj8vQY6pgEXuA%2FYGGDecw0ckUineUoVOsBbW7ItG%2Bc7sdr0Vvd48wV%2FsdYj9obO1HFGWX9zPhgM9vbh76raG80v5z7NfHeXltLG5evjcbRLPl3RAcHVhDq0K1dMAg97DLGufz%2F2Sv3%2F4RkQdLe%2BauX%2FdPvZFg53Jfb5g4QdUi0c511ilBt5U6tsoXaLdWml3a6dq%2Fkn%2FtwTjQP5Oe4DPWBSXzAHDixscFmlmHy5&X-Amz-Signature=53c883b45584db461f82ce5e8eb2b1aa0c30056b14f7202a54c073f64cbfd69e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVS2AKPI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCH2yViwkZpgTA%2BxMfXTsaa2h0au9s81t43RDIKQL0cZYCIQDZ55s%2BrOF%2Ffrk56vlv7NEKknfeY8JsplzyMtvwGtFxFCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMP84f62n%2B%2Fn4nbinBKtwDce%2FmZccFISK8HO8Ta%2Fwl3SboDYOGUDSjfPtxekLVMCYGleidhK6tGCwz1tj07sQ8zX4Nak4pR1sBW0zu3DdU1xGA7ZXVFASMIXhe4Wz5Y%2F%2BZX9u%2Bzbz3XMYUfSE2Sobhwfud78lcIdPhl9HkUTb9wDm97S7TiByZwMHZbX73Bc4BVEW582Nw70pgGsoQFtLOZ7sdfJywscR4uF63YnGnHlpujAqsj%2Ff%2FdLVs4BYWiJY0%2B5GZQOJvw%2Fdd22jIP%2Bdc%2BureJY4ZJaiRN%2FkiAtjvS%2BEPZIqCmKvWb3COZPA2QEWsm2rn7SH6MaXKzB7zMwQe5IVEI%2Fz6J7fwP8PxPqBi80AbKalQ8qeM9vSNiMYVOGcE7Ok90cz2m2DreswyzADv3iB80m1GofN1to5WzxeMIZLHFqONpt4vLNkCi%2FJncoHQNvQxFiZYkXR0Wrc0RFOZ%2BOY9IxTt9JVWHyCZawl5uqGCsiz036DYZqFt8kgOh%2FYQGNVQL9rM%2BHDZDMslqkx2GDYLxE3%2BVGwdD4WZ2Oyjj21gk5f04duWURWAOxAtvO4ERiTErDyI0HB8GZOJ5DyTUF9DTjxMBN3BgpivOZwLKyqp0jnVD9%2B7ZspyR4ZRhvTINdS0Zh3Z7m2D19Yw3of8vQY6pgHKXxR4QkrqxwRfj8Te11SvaEEGSYKaaCx05UAFN2TQWK7lEeQv5xc92wddgQZ82bbCmo4l3lm5XRWoTAumURMxSOC96KfmONIfbhWneLgmECJTRAKgOfCbX2zYQLnp7N0kXM1w5vYUFIWNwFnbjLaLtFAfd4eMZB0%2BFeBY3eMAYGZ2BfVjZSEbvBAHIsoAPob%2B9tiqqYS%2BA4jEVoCbwoNkBknehOgN&X-Amz-Signature=41a50753f7c6a2968faea2513313bbc4d286e51239c64b196713067d1d015044&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK57IX4H%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVelZwPEWfjBGylB053PVcFYlfdBm4GZB7bZokSNk1fAIgFXWTenqb3w94lbWooNZ3UujRl1PsZg3o2k7fEyiqHtkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEweJB%2FECBh9Xs7rCSrcA63tEy8Mz%2B7VZC3u4jTsKL8s3vD5e%2FMpLVMoP16gZnesR2aL5ruUuV5yx3osB6NahLzrT2YSGmNT4kEeF62ngR2GI6Zb4zgJBarPlMbHLmWGGuyYYcHT0veJt4ncAwtmM5e7%2FMg9SxVbpOhleZPQn1clHAgwMI272mdiSb7JuhFi5lEjHnLs%2BwiQSNh6aKQN85KToJTOmvEQLmIMb1dpyIDmYe3H%2Fyg8UBHNHh7emqo%2BA7BeiIBYDkz2848MHBgUKIMgM3GJrvDctZ4oRem0Yns2xUa1oPvU%2F56oisE0mS2%2FEu20W25FfHi43lBRQgdG85DCT%2FKF%2BWb7ljeeG0YJFP9CZE2Qphx80gzugo4pYEEuhmKE7mRu4xsKR37p17EBUcF6xKuyQqqz41eYIULlHYn8U%2F%2F00eEmUxkbmSmmBlbyIYNbnpnCwdPH9gzZNGsUU7dPwpqax7cLyYmojcLpenH%2FfA1EOIXfmq0fQEPFGa0UXPAbd1HFLk4f2hvw1Rsw6dQ5xyJk19dOn5CDuG1OuWKD7s%2FUZ3e6%2F7x6qDk4NbrKA7JQqUpVSsiZC0sg%2Bmx8wTNFwvetT1pCa6Iwd73WH%2F1YwfHPj6Pham7TGcNds5UClZw7YgncGrKniLKKMMCI%2FL0GOqUBxS2VGGYwtEwmzA13ui6rjQAgRIbUwenOac4%2Fc9SSGMZjRPSa8iPK%2FIlkque02Zn0RF4OTSrOMgN0g84EjtzHLEKjFVmpTsR6AnvVZZQadKXJ8Ec7bI0MA2AdAdiJ6QWA2HTCN2nShb8ERm3rwkue17FCxkrW%2FOHX94DWQqJhk%2FjnIiMqzfcMICQTSFfF%2FGDXcwOo8F8JbaNTT%2FHyzNqlpRhzlbpo&X-Amz-Signature=8c9d8d3470d30f1e273b612f8081780cd5396dd3f0de0e09b41c22cc143fbeec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
