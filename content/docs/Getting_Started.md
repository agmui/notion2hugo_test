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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDU3GHP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T070959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBzf5BamxOsOJbkKAXRX9KpyXNTBnG1XspD9QbSlOthwAiAGqLSkhQrfxDLJPZkClOHrXyvbO6DJEAd4DIttoPdJACqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBUCLuySTTkQ2e0HMKtwDBsaMrGPccJWm0pOVY%2B0mqiCrjiGZIByafVf7ojALMFNiy%2FyFvz2VdL0jxoicP%2FNZ%2BjJTu8LakZ3mM8KXnSaiZc383DpTYM0FZWKL13%2BJBPdmmJxpNH5drshKNw1SwkBCn56zXh2T224iKoAu1WF4yteotUutcXWE9V0aH2qce6hJRekbPh91HFx%2B2G%2FT9KPcjxI0O36y%2BlZzYGPerhwBOhrrhkyrIdjrNwPHGSOlZIeUDo9lx112H%2F9hFDHkVc25pEiW17nA7Y0UEFPlV2wG64fBvd0bZdZRn2%2FlZLhd%2FRF5DbBASoNIi7n%2B8tKlJqLZ41eoJrVFU1Nsu%2BR3Um%2BydiGUAh9arTurX4c%2BNWwfWuCS5oLw1GSG70Sl3NUQyP5rBhsptKAhSFlwnLhKIm2RbzFCmq%2BliU3Dq0I5IGYcGIbvVecxaJRJzpdIgwWjzp7qX%2FwcWQ%2FcPHhVYy3R%2FkXy9xbRmNXBKSvnJjj5b9T39kVkTaMAVRV7PNkFeHJIZE%2BHUVgNqpJIhier0MJsRcF7rHOM8mcVhGuqOOxDurNrzPbw4y1vBOxyKbEpTVmyKqbKUDllIxUWDy5Ak6zy69DS3vPYL3wm41WqeMjLKKEWB7wnvQcE8ZA0eJxREmkwmYWGwQY6pgGgViAwkf2kbWND%2Beir4AErw72UigpqRyVLH2f7SSJzVZU1xt2MSdlmvR98sfVLLw0tkYJrHmb1sRWPgPLzis%2FpGhe6Ef%2BK8KY8fM6lB0iTZyxcv6NmXNtk%2Bp0f20Bq%2B4o59fM9qKnObdsLO%2Bd8lLrnspLFYQIT5mlF7lKxQSXxOOwEFYQPlz7VM72TL7PzKHKqdrwjNAZJJkFuN5jbA0RfdzvnctBW&X-Amz-Signature=97993f971db5080c423521c8497a1ba645c87f2e4daa36b31b80640b2afbd6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDU3GHP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T070959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBzf5BamxOsOJbkKAXRX9KpyXNTBnG1XspD9QbSlOthwAiAGqLSkhQrfxDLJPZkClOHrXyvbO6DJEAd4DIttoPdJACqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBUCLuySTTkQ2e0HMKtwDBsaMrGPccJWm0pOVY%2B0mqiCrjiGZIByafVf7ojALMFNiy%2FyFvz2VdL0jxoicP%2FNZ%2BjJTu8LakZ3mM8KXnSaiZc383DpTYM0FZWKL13%2BJBPdmmJxpNH5drshKNw1SwkBCn56zXh2T224iKoAu1WF4yteotUutcXWE9V0aH2qce6hJRekbPh91HFx%2B2G%2FT9KPcjxI0O36y%2BlZzYGPerhwBOhrrhkyrIdjrNwPHGSOlZIeUDo9lx112H%2F9hFDHkVc25pEiW17nA7Y0UEFPlV2wG64fBvd0bZdZRn2%2FlZLhd%2FRF5DbBASoNIi7n%2B8tKlJqLZ41eoJrVFU1Nsu%2BR3Um%2BydiGUAh9arTurX4c%2BNWwfWuCS5oLw1GSG70Sl3NUQyP5rBhsptKAhSFlwnLhKIm2RbzFCmq%2BliU3Dq0I5IGYcGIbvVecxaJRJzpdIgwWjzp7qX%2FwcWQ%2FcPHhVYy3R%2FkXy9xbRmNXBKSvnJjj5b9T39kVkTaMAVRV7PNkFeHJIZE%2BHUVgNqpJIhier0MJsRcF7rHOM8mcVhGuqOOxDurNrzPbw4y1vBOxyKbEpTVmyKqbKUDllIxUWDy5Ak6zy69DS3vPYL3wm41WqeMjLKKEWB7wnvQcE8ZA0eJxREmkwmYWGwQY6pgGgViAwkf2kbWND%2Beir4AErw72UigpqRyVLH2f7SSJzVZU1xt2MSdlmvR98sfVLLw0tkYJrHmb1sRWPgPLzis%2FpGhe6Ef%2BK8KY8fM6lB0iTZyxcv6NmXNtk%2Bp0f20Bq%2B4o59fM9qKnObdsLO%2Bd8lLrnspLFYQIT5mlF7lKxQSXxOOwEFYQPlz7VM72TL7PzKHKqdrwjNAZJJkFuN5jbA0RfdzvnctBW&X-Amz-Signature=8ace79ee6d8d6abce96d0ab956d65268149d5131bc319f0095c0d10d4f33ce0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDU3GHP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T070959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBzf5BamxOsOJbkKAXRX9KpyXNTBnG1XspD9QbSlOthwAiAGqLSkhQrfxDLJPZkClOHrXyvbO6DJEAd4DIttoPdJACqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBUCLuySTTkQ2e0HMKtwDBsaMrGPccJWm0pOVY%2B0mqiCrjiGZIByafVf7ojALMFNiy%2FyFvz2VdL0jxoicP%2FNZ%2BjJTu8LakZ3mM8KXnSaiZc383DpTYM0FZWKL13%2BJBPdmmJxpNH5drshKNw1SwkBCn56zXh2T224iKoAu1WF4yteotUutcXWE9V0aH2qce6hJRekbPh91HFx%2B2G%2FT9KPcjxI0O36y%2BlZzYGPerhwBOhrrhkyrIdjrNwPHGSOlZIeUDo9lx112H%2F9hFDHkVc25pEiW17nA7Y0UEFPlV2wG64fBvd0bZdZRn2%2FlZLhd%2FRF5DbBASoNIi7n%2B8tKlJqLZ41eoJrVFU1Nsu%2BR3Um%2BydiGUAh9arTurX4c%2BNWwfWuCS5oLw1GSG70Sl3NUQyP5rBhsptKAhSFlwnLhKIm2RbzFCmq%2BliU3Dq0I5IGYcGIbvVecxaJRJzpdIgwWjzp7qX%2FwcWQ%2FcPHhVYy3R%2FkXy9xbRmNXBKSvnJjj5b9T39kVkTaMAVRV7PNkFeHJIZE%2BHUVgNqpJIhier0MJsRcF7rHOM8mcVhGuqOOxDurNrzPbw4y1vBOxyKbEpTVmyKqbKUDllIxUWDy5Ak6zy69DS3vPYL3wm41WqeMjLKKEWB7wnvQcE8ZA0eJxREmkwmYWGwQY6pgGgViAwkf2kbWND%2Beir4AErw72UigpqRyVLH2f7SSJzVZU1xt2MSdlmvR98sfVLLw0tkYJrHmb1sRWPgPLzis%2FpGhe6Ef%2BK8KY8fM6lB0iTZyxcv6NmXNtk%2Bp0f20Bq%2B4o59fM9qKnObdsLO%2Bd8lLrnspLFYQIT5mlF7lKxQSXxOOwEFYQPlz7VM72TL7PzKHKqdrwjNAZJJkFuN5jbA0RfdzvnctBW&X-Amz-Signature=feaa74c33d0d81dd1bc5c2cbaabb5f5674ce87106545f934a5bc9db908e92620&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDLEJTFL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEbf2S%2BtjnC3Ljf3iSLW0xlFb%2FcwvlBZm9l9%2F%2BkjA%2BfIAiBvFNTm5uIBQoURUnfq8xMv5hJ7whEd29mNURoC7K4T7SqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO9JGF8ZH6uEi0TnCKtwDN0YnoDvnDjtp7uA3EeTrrvbjvRXRsIWzeAoo0vIiSTGtfQuvZJujekoLDhPa98662HOznyL1yTdn6ImauWA3OmcS42kMDprqwktuc8svYS3UOhFYok1NxAdSffT1slKTix9bQ1FIaI5GFxGHYBvoAa6ap7WUkq7tYb53QfO1oA7g8Q33XdqCbs1Gy9YxtzjZ78sj2TU6mhdluf9thrEm%2F7gRCkrhJvfsubjU5pyo%2Bm%2FlTr9043U%2BtSEIBPzU9A5uLSYhf2UUZjf6IZ4B%2FAQWHIcnsVhdLLvHFBpDBl0hk09gcWXfRMeD4dtNUOCK3ZET8ruSDR1lZWLXOh%2FX2%2BkbJ8G9WQ6q9tXj%2BzhuNsrulNsmdBH27FNLDM2Fw%2BpqYQKkilpFtlXArgqGWJRjNy9pOPCUxiTM8JHNq8gPyKA2I4PrmgAs94ARW%2FmnkhgbK1sXMYLi09XDVibwxVAZqfGsBt%2Fj4miBzKhIpiO65iZW8E4RG3Jqwj6yXkgZTQGg35QfPLkHTPl6GX0hgtDxUD0YwebJjnEX1c1o1CsSYTxnVLZNosF%2BnY%2FFu%2B33%2Fd493ypQt%2BMBT0MpzuC%2Bl%2Bn2sGnmbfxlF3k%2BaIG9l%2BWl0aeZdJk57F0aXgs9JZjdbwUwj4SGwQY6pgGgHfxnXn8Cbnn57rksNOpuwXbGcN%2BXJn5%2FUdX0xTeUepoF%2B2sWl%2Fiin6Tno%2FOLXQTTNh7CWrRV8aH0suRti3w%2BlLsG5VGkLnlPHwsaSa3N%2BiWvilwl1ziepI5dvWeFeqvioDAtp%2FWShRXKqE3Gm7vDS5hJmEAx6y9V9SZgpHYp%2FTt65A%2FbTDV%2Fu8tPXS%2BzLvi1dhXiLO6VO4SEfGNfOQqYzgN5rIBU&X-Amz-Signature=7c53ee99ad64c94b6aba8b191e2fc67657cb49781d81cc8173e6c59e8250e60d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466343RBKFJ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHlk8YggfCFXugg7zBeRE99iv9VSU%2BvzIHTTKK8fTEZNAiBH3QhEFhBiBa6vZUYTArsinKh5jFt8DQzay%2FwSd%2Br0SSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2FT6HA15VoVDdn9MKtwDYmBwgVMamZwqjbGdw2ShscHtWRKn1kxMhwjdAyJJHE7TDnYGQbeKlFx3qeG9WO7O0dhzoQwqPRcCNLZVFkEBw7hqtTmjtYVhg2HU7HWUmmdXcJP%2BWstBz9ADAvn3gPopvtpoSb1LRRrpeULtw4I2q3aQUtJ7MdO3MbUhaGOnJJN6OB3lCFiMEqnwtDkthH5FNpikvjD6IT9H13I6G1bbqjTFnOVxre6GixLl8kdetdOavAnnEeBmDBknpo74adwFeQs7Djwhth1oHeB%2FxIExWC8%2BzkPAyiVk%2FNh%2FKYXjPsMs8GsXlp0mDERiHgnyc4LQggx5TyaFjpTtTVUTJOfO9apae5EAhkTUz7FuoOKGxv%2FAWjkORHnUQeclETv5eZwemK8MnkRJFMgVT3gVfJTO1oc%2FgEg8phpgtvSCb%2B%2F0Xsng7%2BvZYBVIEdzLdHtyBVva2gU0eOfYWrvY69QMOSPhf5HvgEveBMzIVW%2Fo4Xt4krIP6j3CvAUhoAOOUXJiYzZJLp4bboUqU%2BDoWIDQxe6Ie2y6JBcEp0DB7V9Tlj6tznZMe6TxOwI3kBYmvKTZEabRNR3jh70XnaUQE3j3MjQaWzsKjAXZgGZTFmUL9XlTtJ4c9fSNdhXe8ypJlRYwsoSGwQY6pgGhHuT2nM3cyctwtyQ0HDtafwCsoFtsEfN5Bm1NaHhHoh4dQdOPXnlkQ02X5H7L5yZhMlWMu2jx0Nk3AL7hNTOUjWCdQcM4Nu8JwvSh25z6PDnle3Wj1xD812xpykfJUwL00uXnNs9k9Q0klZ%2Fb6uQPc6cLdWDE4YPLXUUHgbhP7f1Z81GtsTqM2ytUb4MdYTstjMaZtV0ar3JIqZZ2GvyguVHumPKS&X-Amz-Signature=0573571e84f50b0541c258791aa6ed1f00526089ad0aff763c68075e48bea580&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHDU3GHP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T070959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBzf5BamxOsOJbkKAXRX9KpyXNTBnG1XspD9QbSlOthwAiAGqLSkhQrfxDLJPZkClOHrXyvbO6DJEAd4DIttoPdJACqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBUCLuySTTkQ2e0HMKtwDBsaMrGPccJWm0pOVY%2B0mqiCrjiGZIByafVf7ojALMFNiy%2FyFvz2VdL0jxoicP%2FNZ%2BjJTu8LakZ3mM8KXnSaiZc383DpTYM0FZWKL13%2BJBPdmmJxpNH5drshKNw1SwkBCn56zXh2T224iKoAu1WF4yteotUutcXWE9V0aH2qce6hJRekbPh91HFx%2B2G%2FT9KPcjxI0O36y%2BlZzYGPerhwBOhrrhkyrIdjrNwPHGSOlZIeUDo9lx112H%2F9hFDHkVc25pEiW17nA7Y0UEFPlV2wG64fBvd0bZdZRn2%2FlZLhd%2FRF5DbBASoNIi7n%2B8tKlJqLZ41eoJrVFU1Nsu%2BR3Um%2BydiGUAh9arTurX4c%2BNWwfWuCS5oLw1GSG70Sl3NUQyP5rBhsptKAhSFlwnLhKIm2RbzFCmq%2BliU3Dq0I5IGYcGIbvVecxaJRJzpdIgwWjzp7qX%2FwcWQ%2FcPHhVYy3R%2FkXy9xbRmNXBKSvnJjj5b9T39kVkTaMAVRV7PNkFeHJIZE%2BHUVgNqpJIhier0MJsRcF7rHOM8mcVhGuqOOxDurNrzPbw4y1vBOxyKbEpTVmyKqbKUDllIxUWDy5Ak6zy69DS3vPYL3wm41WqeMjLKKEWB7wnvQcE8ZA0eJxREmkwmYWGwQY6pgGgViAwkf2kbWND%2Beir4AErw72UigpqRyVLH2f7SSJzVZU1xt2MSdlmvR98sfVLLw0tkYJrHmb1sRWPgPLzis%2FpGhe6Ef%2BK8KY8fM6lB0iTZyxcv6NmXNtk%2Bp0f20Bq%2B4o59fM9qKnObdsLO%2Bd8lLrnspLFYQIT5mlF7lKxQSXxOOwEFYQPlz7VM72TL7PzKHKqdrwjNAZJJkFuN5jbA0RfdzvnctBW&X-Amz-Signature=6fac9db9f816f52254bc05fd809422d272f83b8277bacc68c3762c6fd6dbc182&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
