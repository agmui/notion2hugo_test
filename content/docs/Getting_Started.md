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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCT6PWAD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9%2BnefiOZc8A90hSKDavzsNTfQtMT6Os%2FQqWx65%2FA%2FEAIhAOAe594y9gKmqOrq37qUhnsy%2FXUUFdhaJK50RQTwEiliKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygh2E4SJ3TkCMYzjMq3AO6bB2X3AhHwEjWVJrydNCulbf59VbJlfJ%2BnsTchnjKCQ6k9AehsYHJVIU1VQugEhbG0XqwREBpnMkYPSVqciZ2H%2Bqmd5Id730MsJXlPPQniEK4N9ZVCm8xoXtEUOwz6iVBEPZ%2BETk47aNXHL3zDFLWekhi9uqDLZXfBmmKtcRQvfxl0eLBQyBbMTQLp8q46bl%2B%2FO3wO2ZtgZMW%2BCg%2BY7l1J9gPgRKrCrQkQ9%2BPvIS6NMswFamyrpAKC1YcwEY0MeCLG5y%2BYjkMCvXkOanpTu%2B8pTwnxXrAfr3hZ3tzNmhtML4LwlcJ%2FXjXXrgFpLkuntgyRgsJJALnnRAG%2Fw0zWPjwy6Tir6bYQyM9UAEGk9Acwi8a%2BuO1SOdjYmk1EWK2DcO8vhBTd5kV0l83VX3EllPnhVoWURbpzDKx3aHL5hlE9IyrXUyEGvBYBtd2wvleBvEH2MbKQX2XwCJfh3mELyzO2DbvieNoCwzWgjKgIKp2kWQiUV5ojml1PHcV60AbZQj9MfY%2B5mvw4Qbw5z28Bas4Ov%2BUi4PUcPivz1unAyvo2ha6o%2FTM0SYoYf%2Fc3jR0lQrT9PPqTr5lyDghbjsm7SZ1fuE2Mdk1wm5zUFbb1mzPiU%2FiEJY%2BGZVMhXZTGjCTy7PBBjqkAZht4e%2BHdwytEp7PcSLx%2FxUSZZlBPI%2FW8vBXUQ6JTJfFf1jYhHc76Wb%2BMFDBBOC1Zg%2F9cROMMGWDZM9XLZPjykSznHTt3OBh8dTfcjFOubUPQLvEyCLo4WsTYER1XzK4pmwL85CDZzbX6M8gBD8PscJ7nxaBq7woo3qf5JOFx%2FJTWSPBKJC6WCHqfpxe2rUndvOwn0%2Bc4AGnAkWT0yoRRdH1NpY9&X-Amz-Signature=257057e92fd8837a9505feb744385112e24fac53ece9dedf9d05c752462a4193&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCT6PWAD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9%2BnefiOZc8A90hSKDavzsNTfQtMT6Os%2FQqWx65%2FA%2FEAIhAOAe594y9gKmqOrq37qUhnsy%2FXUUFdhaJK50RQTwEiliKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygh2E4SJ3TkCMYzjMq3AO6bB2X3AhHwEjWVJrydNCulbf59VbJlfJ%2BnsTchnjKCQ6k9AehsYHJVIU1VQugEhbG0XqwREBpnMkYPSVqciZ2H%2Bqmd5Id730MsJXlPPQniEK4N9ZVCm8xoXtEUOwz6iVBEPZ%2BETk47aNXHL3zDFLWekhi9uqDLZXfBmmKtcRQvfxl0eLBQyBbMTQLp8q46bl%2B%2FO3wO2ZtgZMW%2BCg%2BY7l1J9gPgRKrCrQkQ9%2BPvIS6NMswFamyrpAKC1YcwEY0MeCLG5y%2BYjkMCvXkOanpTu%2B8pTwnxXrAfr3hZ3tzNmhtML4LwlcJ%2FXjXXrgFpLkuntgyRgsJJALnnRAG%2Fw0zWPjwy6Tir6bYQyM9UAEGk9Acwi8a%2BuO1SOdjYmk1EWK2DcO8vhBTd5kV0l83VX3EllPnhVoWURbpzDKx3aHL5hlE9IyrXUyEGvBYBtd2wvleBvEH2MbKQX2XwCJfh3mELyzO2DbvieNoCwzWgjKgIKp2kWQiUV5ojml1PHcV60AbZQj9MfY%2B5mvw4Qbw5z28Bas4Ov%2BUi4PUcPivz1unAyvo2ha6o%2FTM0SYoYf%2Fc3jR0lQrT9PPqTr5lyDghbjsm7SZ1fuE2Mdk1wm5zUFbb1mzPiU%2FiEJY%2BGZVMhXZTGjCTy7PBBjqkAZht4e%2BHdwytEp7PcSLx%2FxUSZZlBPI%2FW8vBXUQ6JTJfFf1jYhHc76Wb%2BMFDBBOC1Zg%2F9cROMMGWDZM9XLZPjykSznHTt3OBh8dTfcjFOubUPQLvEyCLo4WsTYER1XzK4pmwL85CDZzbX6M8gBD8PscJ7nxaBq7woo3qf5JOFx%2FJTWSPBKJC6WCHqfpxe2rUndvOwn0%2Bc4AGnAkWT0yoRRdH1NpY9&X-Amz-Signature=586f0e230687568fe535dbff6db4eefaf33c8c05b9f117a0806233a335d83450&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCT6PWAD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9%2BnefiOZc8A90hSKDavzsNTfQtMT6Os%2FQqWx65%2FA%2FEAIhAOAe594y9gKmqOrq37qUhnsy%2FXUUFdhaJK50RQTwEiliKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygh2E4SJ3TkCMYzjMq3AO6bB2X3AhHwEjWVJrydNCulbf59VbJlfJ%2BnsTchnjKCQ6k9AehsYHJVIU1VQugEhbG0XqwREBpnMkYPSVqciZ2H%2Bqmd5Id730MsJXlPPQniEK4N9ZVCm8xoXtEUOwz6iVBEPZ%2BETk47aNXHL3zDFLWekhi9uqDLZXfBmmKtcRQvfxl0eLBQyBbMTQLp8q46bl%2B%2FO3wO2ZtgZMW%2BCg%2BY7l1J9gPgRKrCrQkQ9%2BPvIS6NMswFamyrpAKC1YcwEY0MeCLG5y%2BYjkMCvXkOanpTu%2B8pTwnxXrAfr3hZ3tzNmhtML4LwlcJ%2FXjXXrgFpLkuntgyRgsJJALnnRAG%2Fw0zWPjwy6Tir6bYQyM9UAEGk9Acwi8a%2BuO1SOdjYmk1EWK2DcO8vhBTd5kV0l83VX3EllPnhVoWURbpzDKx3aHL5hlE9IyrXUyEGvBYBtd2wvleBvEH2MbKQX2XwCJfh3mELyzO2DbvieNoCwzWgjKgIKp2kWQiUV5ojml1PHcV60AbZQj9MfY%2B5mvw4Qbw5z28Bas4Ov%2BUi4PUcPivz1unAyvo2ha6o%2FTM0SYoYf%2Fc3jR0lQrT9PPqTr5lyDghbjsm7SZ1fuE2Mdk1wm5zUFbb1mzPiU%2FiEJY%2BGZVMhXZTGjCTy7PBBjqkAZht4e%2BHdwytEp7PcSLx%2FxUSZZlBPI%2FW8vBXUQ6JTJfFf1jYhHc76Wb%2BMFDBBOC1Zg%2F9cROMMGWDZM9XLZPjykSznHTt3OBh8dTfcjFOubUPQLvEyCLo4WsTYER1XzK4pmwL85CDZzbX6M8gBD8PscJ7nxaBq7woo3qf5JOFx%2FJTWSPBKJC6WCHqfpxe2rUndvOwn0%2Bc4AGnAkWT0yoRRdH1NpY9&X-Amz-Signature=df8fc93adea3ed13f45062d9aff1c900d682776a553e78cee054e79c61a1cfec&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657P2F4ER%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1xgWYaAvNA0yP0lowy97fMWjYflIT1zhoriGjWsFtfAIgXRJP4ATBgAHFxynQJ8O%2B5fYiSoPohUC%2Fs3EpxJkcqQEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyuUlq%2FAMGG03cGJCrcAycRNTRLUPFjZrRXI%2FToyG2y3wW%2Bozl5oRoBypJAGCGh3HPKMzuomG8tL%2BKThaAn1kHC8atZCD48SRo3azTIkK%2FeQLwDXNrCgsH%2BiwcY6iKUIyLgqzphq40o84PU5MsR%2FJoLtaiSZ5aGEGTy4%2FYKE0e4fBaWUPjWfaIfdg0JDQ2KPftuLfgUPBYmRGjhii8IdDWrMurHeXK4gF3hnIDmzCmj5R7Q25%2F%2B0QuuBW55Y%2Fgeg413MpM%2BfufcgdtZCPXeAs8SZwU0aQMQx5qW3lRHcIE%2FnjSNQ%2FLGj3%2FZFnrJ2%2FUUwB08X4VemLlYO79VyOrEm1eZ3wiBj32kMh7Nqaz0Ry2BpV1yOHDGZwEtAYQ1fC47KKcvljW89FNTBkUUYNNk5Yrn9Uz9OTsypmt9amIKuIX8b2gkujSrW%2B%2B5NRzc7EPSpncLSRtx89NGz1ogjtNeOQU1DRRyGkxoGnVL5MOQvtSd11r0NwmynpvhQWpesGvHHNoLvxvXDqP0Jj%2FNsQalCmaPoyTyPpefhQrBHsBREfGOf5IhbiNxH2QT1aEeIlflxL0zxnEhhh9ryyOFFJjSbI4qanPWCblzX5ia5liAOLSyoq3yZrTFi%2BmT2GKWigir2JyTLvRD9ZJzLNxOMODLs8EGOqUB6s4lSWzVL8aulL6UzpFCbJtz%2Fm3gTExLlMZM879VeYFQWHhGFCvLnooajz7iRTuzksTDr1SlLvGH85Nqp3ciB8xPpsK%2Bo8LJTUwieqSh%2F%2BwuVdaozja%2FeZPfFva3UZDIiWJSkIzXTCoX0emYlZLlVPU225pl189DOAxNnjXiUMdDx%2BtQRtdYNaLbjd0Urv4P50y3vLdwKeJiKu9UUGJlJFEgD0To&X-Amz-Signature=1c8b15c6e1389f83a0568c2cb987afc985683eaf78fb1b0d1f75001ccfdb4e61&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2SI5G62%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJEyaW3h%2FTXbkbq%2Fx8i%2BPiFMGK3fEsU2cH1fFCszyV%2FAIgYAqNtCAMJttShu6kMpBJrOF713ZxFgh8S4nYxtRYyxIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUGjRnUXzZv1m0gKyrcAygDjGINBnHofeCq5hmBwPLYaEi9bhx5y2nc3cya1qGN0u%2BAut0FnJd17RZ7GHjXDleqalBCmT5GG2ms3YoEEa6ndmVyeo9fq91QI3kTCBk2AhbWoB3w4Ta3W1UzZQLjA0kMYxAo8OAOcFKBh5q60JU9zOB1%2FbhD5e%2BoiOP05HBJT7vYirZ48SJy9c4Q%2FxEjxKbvD8Oe45qvaRORdfo9Dg%2FpL5TxZg7x6Dx%2B%2Btw4srMX9EkiWZB6KgF5m6CMhZOYBWOcruxp5jjYV774lQ5l5pOZN8gLh8pU1KhuCnCFpvvR74XPkOQXVIrpaL6ZUeUGMJOye4VhjSF9cRIeoG%2BLfurvROh1pRv8X3EvgAHxri83TsOg8Gfz9uQmqY8q6Vqb4mIlM6pgR%2B8HqvB0rnfv5eXUp0yLIaaN0wIn5prhWCcWHBZWlgZgWlRNYecifyo81saiX57bKkIODxcwlIAgewnOtkxygTXzDLQ0TXJ7duhMoeE%2BMmcC56wvSd9KCD90MDEW9EOIIqZq5GktMo5wxW%2Btik06KQhn%2FF%2Bm6V1yIypgv0K85wqnJvdu94vW3a3VUZkMXMqBjYEz%2Bt8znSD5ZVf5ZJbvFrKeSV6QSlCn%2B%2Fwbnw2m3S2MzbAxd%2BexMNDLs8EGOqUByQCDDpz9XCIP0L%2BaSnENjEjknOpE720SwXXzfIOuUQydGwNCeI0zt01arpdeyPj5udIXuIii1elgGF24WFXQTGRPvIihy7PAMFuQDOdsEsczfbxL9gewOS5Nm61v6yo5GKrEbvjqhM9viEIHLQPeL4%2B3w2ED%2BQGQlCRbek06Je0WF5CG0QmCOgMbaF57SqWBTTeNSii%2BT9ahvfBQdPN2LffUABkr&X-Amz-Signature=2a697cee1b63493677f3c38a69e3e8c5e180a16a69d5a31e8a84b02a8c9ec0df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCT6PWAD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9%2BnefiOZc8A90hSKDavzsNTfQtMT6Os%2FQqWx65%2FA%2FEAIhAOAe594y9gKmqOrq37qUhnsy%2FXUUFdhaJK50RQTwEiliKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygh2E4SJ3TkCMYzjMq3AO6bB2X3AhHwEjWVJrydNCulbf59VbJlfJ%2BnsTchnjKCQ6k9AehsYHJVIU1VQugEhbG0XqwREBpnMkYPSVqciZ2H%2Bqmd5Id730MsJXlPPQniEK4N9ZVCm8xoXtEUOwz6iVBEPZ%2BETk47aNXHL3zDFLWekhi9uqDLZXfBmmKtcRQvfxl0eLBQyBbMTQLp8q46bl%2B%2FO3wO2ZtgZMW%2BCg%2BY7l1J9gPgRKrCrQkQ9%2BPvIS6NMswFamyrpAKC1YcwEY0MeCLG5y%2BYjkMCvXkOanpTu%2B8pTwnxXrAfr3hZ3tzNmhtML4LwlcJ%2FXjXXrgFpLkuntgyRgsJJALnnRAG%2Fw0zWPjwy6Tir6bYQyM9UAEGk9Acwi8a%2BuO1SOdjYmk1EWK2DcO8vhBTd5kV0l83VX3EllPnhVoWURbpzDKx3aHL5hlE9IyrXUyEGvBYBtd2wvleBvEH2MbKQX2XwCJfh3mELyzO2DbvieNoCwzWgjKgIKp2kWQiUV5ojml1PHcV60AbZQj9MfY%2B5mvw4Qbw5z28Bas4Ov%2BUi4PUcPivz1unAyvo2ha6o%2FTM0SYoYf%2Fc3jR0lQrT9PPqTr5lyDghbjsm7SZ1fuE2Mdk1wm5zUFbb1mzPiU%2FiEJY%2BGZVMhXZTGjCTy7PBBjqkAZht4e%2BHdwytEp7PcSLx%2FxUSZZlBPI%2FW8vBXUQ6JTJfFf1jYhHc76Wb%2BMFDBBOC1Zg%2F9cROMMGWDZM9XLZPjykSznHTt3OBh8dTfcjFOubUPQLvEyCLo4WsTYER1XzK4pmwL85CDZzbX6M8gBD8PscJ7nxaBq7woo3qf5JOFx%2FJTWSPBKJC6WCHqfpxe2rUndvOwn0%2Bc4AGnAkWT0yoRRdH1NpY9&X-Amz-Signature=63761b6f61abc34c91c058911f8acbf9a84ce36f9dae042bc85097477f867204&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
