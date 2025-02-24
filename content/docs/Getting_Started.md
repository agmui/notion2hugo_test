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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQTZ5S5I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb0FY7L7Ay82hZ1vLyboc3ECuEmeGQT4JCt9ClSyptDAIhAJmK1wMa1FGTTcQodsE3r79HbGSHcFmVSu1RpJhHgTI1Kv8DCC0QABoMNjM3NDIzMTgzODA1IgwXz0w4K7MYYN4pUYoq3AN8lKB0DxiKzjLFYrozKMyRWcDChcZxnXI6%2BedbS6m5ms57DGjjp3CKn%2BqEamWMP4UdGbisYxzcoTmQNCPTDfAaLUUwAyLKudusZ%2BJKkUsAJbNYVYwWTQHa0%2BWp%2FxFYaDvZFYFzCRAwq3UYfaKTK1wbFe8Y2lD6vs%2FP8uvuYVl0agzD35p%2BnpBQLjDFFEeUsMMzjhZfaTaENeV5DAxfj%2BxurUYWNNrASc%2B9FnV%2FYKTNU3HyyPesOswKylUjyVkFeAaqXNmW6pKtbIiszyD2fc71ZG7W%2BlinaRYm6I%2Bdv%2BgseRO9KzwtqRHQ%2BR4D8AVYZLZAKsjfXqpxpB7BBHWaXnGZHxR2IsuqIr4pJYqeWa79u7c4y56ELaCsL%2Fhrqnu0bvlLNji%2Bl2LWWyqE%2F4DEiXaSvmOkadSCucHiQWu0NU4k297xypgU6xa2qPuS1cqwOmUktcz%2BRxuz1Y5gNfsB68K%2FcW%2F%2FYRPf3qpg5zKz96YRZUvUTdGqp5Bi4J5kX0oQH%2B6Yh2Ea6jsmhIrLskMM4FbTGvmfv%2FfkgYF%2B2vPrTbV5bLBYqpo7buPsCMQU2a7aVCf%2Brp39AAwsztzYonuC0yEFopGhP4cavpGrR7tMKBQ5ZbX%2BvXBNxVgc83ExozD6t%2FG9BjqkATCawhWAtt%2BKneHsC%2B3PB0uiRfPkZ%2FPxySIX1N8Sxas0VWNXQPYlF03e6iI4VbDaNryJVr7cW54fWLZb0If25Kt05LKmzmgdVIdw%2BWKEZM%2F%2FdoifAQKr4%2FkDAKt71CBgmeST0Ykz5Rx%2BTypwAS4aHM%2F4%2FpWoMxAMX5MuSYGpSEUk%2BdI1Lr9at3Pb4Lp4315Z3fwUKEWh57m4h%2BDUnVaOSFfEKJHq&X-Amz-Signature=2b5b00484aeb5611a65173996e49c43eaf8047d4c54896cb9735d04c8d052d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQTZ5S5I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb0FY7L7Ay82hZ1vLyboc3ECuEmeGQT4JCt9ClSyptDAIhAJmK1wMa1FGTTcQodsE3r79HbGSHcFmVSu1RpJhHgTI1Kv8DCC0QABoMNjM3NDIzMTgzODA1IgwXz0w4K7MYYN4pUYoq3AN8lKB0DxiKzjLFYrozKMyRWcDChcZxnXI6%2BedbS6m5ms57DGjjp3CKn%2BqEamWMP4UdGbisYxzcoTmQNCPTDfAaLUUwAyLKudusZ%2BJKkUsAJbNYVYwWTQHa0%2BWp%2FxFYaDvZFYFzCRAwq3UYfaKTK1wbFe8Y2lD6vs%2FP8uvuYVl0agzD35p%2BnpBQLjDFFEeUsMMzjhZfaTaENeV5DAxfj%2BxurUYWNNrASc%2B9FnV%2FYKTNU3HyyPesOswKylUjyVkFeAaqXNmW6pKtbIiszyD2fc71ZG7W%2BlinaRYm6I%2Bdv%2BgseRO9KzwtqRHQ%2BR4D8AVYZLZAKsjfXqpxpB7BBHWaXnGZHxR2IsuqIr4pJYqeWa79u7c4y56ELaCsL%2Fhrqnu0bvlLNji%2Bl2LWWyqE%2F4DEiXaSvmOkadSCucHiQWu0NU4k297xypgU6xa2qPuS1cqwOmUktcz%2BRxuz1Y5gNfsB68K%2FcW%2F%2FYRPf3qpg5zKz96YRZUvUTdGqp5Bi4J5kX0oQH%2B6Yh2Ea6jsmhIrLskMM4FbTGvmfv%2FfkgYF%2B2vPrTbV5bLBYqpo7buPsCMQU2a7aVCf%2Brp39AAwsztzYonuC0yEFopGhP4cavpGrR7tMKBQ5ZbX%2BvXBNxVgc83ExozD6t%2FG9BjqkATCawhWAtt%2BKneHsC%2B3PB0uiRfPkZ%2FPxySIX1N8Sxas0VWNXQPYlF03e6iI4VbDaNryJVr7cW54fWLZb0If25Kt05LKmzmgdVIdw%2BWKEZM%2F%2FdoifAQKr4%2FkDAKt71CBgmeST0Ykz5Rx%2BTypwAS4aHM%2F4%2FpWoMxAMX5MuSYGpSEUk%2BdI1Lr9at3Pb4Lp4315Z3fwUKEWh57m4h%2BDUnVaOSFfEKJHq&X-Amz-Signature=9d0db8aea00f7af3749f8ee0441e35d74bf4e6a10fe6e7e9129af330f67763bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLGM7CER%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1MtVxkjLRlzGyBqI86xY3jPA9RXzhE%2FUgftKfJnNS2AiEAgZYAYHQr5LtrbmkQKjjFyW2GiVeySzgfHPwjx0P31Usq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJRjUqF8tDRAq4icbircA3UuiB3WBmY%2Byb9xigtjqPgBbzZh4oMLLpOSUJwG9ye45RA%2BsAxTVEnPwVtKRiWfmLCRzYNstFDasx8F1WNzyuOIloauC%2FOx00mQ3Z9cBnuUHCwIJXfj1qCYbILj5fx0rv0rDMZmvrfRZtWcsGkj4B7XxNDRgQfs9f25vAZ0chCTBzRRH3e%2FDi2kl9oYYiULas4mux%2F615%2FMsj%2BssYcLgw8P92yU4TDLpBRI31VLxDLSuwuS6BR5cC%2FMl13EJnsJU0hp3aZ7rCqhZ3OKX2jnuD6O1c%2BfEm8F03jZqWRi5m2RvMBX0ZOEhwIU0htsTa%2Fhhha1cjCF%2F6jY9%2Fj%2FCI%2BEboBqbZ7r%2FkrTvvyxFUjjvgL2jlp5cC1lP8AkTzIr5S4uyhIS4QTSQ0r%2FsBBsa3BOWsbXiKjWIKBUHY6Z2VwWyUgxoMSuVz6RhwNlrwAyIOPaCcC8v6V9UhIB%2Bs5cVE4HKCGr708n5gNVt4RxVgbXNrLoby3I8gr2yMGAjRImuDWpLsD2sPx%2FlBKtY%2F8lC9e1vX9uupHtPiRFjARwrnsOIFWZxtZy02yuiC4wy3kak8LM6cuwyEVfGZJg9HDo9nj77qQFAVXN0BQvogpTK4UcgluSp1W7twqEKbd7MUuuML%2B48b0GOqUBczNbT85TxY7c%2BBclmOk%2FOE6dXlQFXITx6hDRGf9cNeM%2BeS%2FdLcSWGWnDIHcjOoHAa6jEfbtcCU%2FPW4WI3Zy3rak%2F82fcjP6QuxNDWkcZXpKv8AmEp2V44WR9%2FxFZLjVnSqs%2Bu8yeTU1dvjEQoa6SkAS8zVaDkvgStWG2poRI%2BUDS35ZdcV6xjui1m9JJDakJolLEgx6oGKnHYR1AY1xEfcB4ZU%2Fk&X-Amz-Signature=ebb2c14e8b471d066f7300922b13f0eeaafec9641c95b8e3badcdead2b8f5dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDMJQ2CN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTDmbDSZiYi9wv91RL1Nlv5WIa7CLwH0tMGF6B0gK6RAiAFAFNIlSM4KuF3HTK9Je8kIgNINpAMBuyOyFYRfVxNTyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMKUgsb%2FaXKx6xXaCLKtwDiy%2F8P0ptG2TD0MV7Jw6F4k7uTJgB1qm%2Br34STOb6qK35PuM7MJaFZ%2FEK9MlpJxLz2Y7mkYjTUbFRjbHMRcDOTL5LDfEil6ZKD1PtyPqFdn3Lsq4HljIrgXi6Ib94Lm8ezPsc1dE018hmVL%2BtomtZ4hRXb9NIcYc2lRHoN1t5sx2ACY%2Fq8vr9ZyGoPadqn6VLedRzHL9x2xC8XQzJb84xSCgpZ17yNMA%2Fce4tWqVFvLPN%2BH2DNPYH0KpuAKw2zApXSVLboi67WtjON5blAYgAoVRxD0YDDGByySQ9%2BNh48Z2hOOy%2FphDByiJXkeF57WXIN64WQDTyeCrzJQafCvlDl%2FuL%2F2BEe0jE2b7JNbfVNDO2lpaFvwXsqBKTpW0WTexr%2F5MM%2Fs3XUIRmcbHOzqvPdbax6x%2FvaCacQ7pRg5vSKgebiDfH8st0aZQr%2BzrBcK50TS9jB7CXcXX37Dnf5MgaYmd94r8jnf4r1%2Bqdkj%2FXehaoPCxo50EpE0CO2MPCZ7AyhO1ylPnTYyQtGp5Tw4Yt2q0KeoYuqFqmrMLeGZWDp3Y0pdUb%2BVKBBTf4i34CRLr7S5abZZntLqkI7654iXO0Yhtqwi%2FeZ8atTu5bmUhUITksTnKoEr2oqyWS0V0w7LfxvQY6pgHfjyQIPO4dmybCFZmdpTwgGFsPlbKLunzL4VbMW5NP%2FOKJ5WWFOiJFczWn7CHHQdLoSJ973KKwhWqM8fAG22gdrgMzYXlo0mW3YKatbfC7a0niEDXcqGFVSmlh11IAVZYm55AemB9MVqJmUwNOYn4gPDqzKbkBtgOYjKCvwzq%2FLDl8w%2B988JmegaKxmAy9wR8u44A4mhCcLpt%2Ba5YpkMF26uUhroC2&X-Amz-Signature=1fb3f047e5bf9dd97fd066b6f754ef07da3d204a615fde526c908df329a3ae1b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQTZ5S5I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb0FY7L7Ay82hZ1vLyboc3ECuEmeGQT4JCt9ClSyptDAIhAJmK1wMa1FGTTcQodsE3r79HbGSHcFmVSu1RpJhHgTI1Kv8DCC0QABoMNjM3NDIzMTgzODA1IgwXz0w4K7MYYN4pUYoq3AN8lKB0DxiKzjLFYrozKMyRWcDChcZxnXI6%2BedbS6m5ms57DGjjp3CKn%2BqEamWMP4UdGbisYxzcoTmQNCPTDfAaLUUwAyLKudusZ%2BJKkUsAJbNYVYwWTQHa0%2BWp%2FxFYaDvZFYFzCRAwq3UYfaKTK1wbFe8Y2lD6vs%2FP8uvuYVl0agzD35p%2BnpBQLjDFFEeUsMMzjhZfaTaENeV5DAxfj%2BxurUYWNNrASc%2B9FnV%2FYKTNU3HyyPesOswKylUjyVkFeAaqXNmW6pKtbIiszyD2fc71ZG7W%2BlinaRYm6I%2Bdv%2BgseRO9KzwtqRHQ%2BR4D8AVYZLZAKsjfXqpxpB7BBHWaXnGZHxR2IsuqIr4pJYqeWa79u7c4y56ELaCsL%2Fhrqnu0bvlLNji%2Bl2LWWyqE%2F4DEiXaSvmOkadSCucHiQWu0NU4k297xypgU6xa2qPuS1cqwOmUktcz%2BRxuz1Y5gNfsB68K%2FcW%2F%2FYRPf3qpg5zKz96YRZUvUTdGqp5Bi4J5kX0oQH%2B6Yh2Ea6jsmhIrLskMM4FbTGvmfv%2FfkgYF%2B2vPrTbV5bLBYqpo7buPsCMQU2a7aVCf%2Brp39AAwsztzYonuC0yEFopGhP4cavpGrR7tMKBQ5ZbX%2BvXBNxVgc83ExozD6t%2FG9BjqkATCawhWAtt%2BKneHsC%2B3PB0uiRfPkZ%2FPxySIX1N8Sxas0VWNXQPYlF03e6iI4VbDaNryJVr7cW54fWLZb0If25Kt05LKmzmgdVIdw%2BWKEZM%2F%2FdoifAQKr4%2FkDAKt71CBgmeST0Ykz5Rx%2BTypwAS4aHM%2F4%2FpWoMxAMX5MuSYGpSEUk%2BdI1Lr9at3Pb4Lp4315Z3fwUKEWh57m4h%2BDUnVaOSFfEKJHq&X-Amz-Signature=31ed3144e086bff684e0e11b2ec0982cc23dafe748c1962e1be4bfd7cfd149d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
