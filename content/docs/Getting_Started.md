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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4KJM3V%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiOSt85MqGBtAUx%2BcIpjIzseCRaVVeRgETA4xgUThkWgIgdbUAKcegMIwkzBiQOzbEnP%2BMctZLdAbwfSdpxZ9XCEQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOhH24tYwDQof3og8yrcAzV%2B5D8uVa9P22XZgUE%2FqBO%2B0Heq6hexoaja19R7XPie4pYRI9cFh6aBCJL%2BxfgzHDrInBuyAu0uKJyDhe1xlIobrovACy%2FfPsk7aoXFvP7ie03fAbu15NXZ%2FLoCRsB7wk19DQvriZhYbJZFNBJV1XZw389lt2kQRiSHPwYME2w1Wo15IDZHMb0n9wEHBpCDqiT9dXRStG6y2Y4JdEW442OyjXS48kvVHyWb3J30OjACZ%2FxWea6pPqkh80WauM%2FBwuv2Eb52DZ3KtkroL4QeZ5wiTzvXFUEdtaKS%2Bre99FX59SY6SRYvUmxIQegBaPwmumCh4oUMG%2FI3Vy579lIbNtJZC%2BtI2DrCtyVyJGIYeShe%2FjVGjbKBPTLYjVoqEvNFsPTnzODwZogstfOQ2PiFkRJ1tFLm%2FR8XqSMaix69wNvM36MTkEJCJxJd0%2B7UwPiJD0%2BbLMDMZFSixMca0Oe56WV0vD2iksHj5%2FvAguNKP2CL7V%2FJ6oJD%2FPoMH6I9lMTs%2B08U1HdLrSsXRPHjyDBaniNt%2B%2FpMjz%2BNn5%2BAFtHuxGmI0L1PmVX78PKDTy2Tut3l8J760q3VZeo%2F9c52vs2HuudfiRfVggvY%2BzaFyo8Io1XvGuv%2BWpqQq4TC0Cw%2FMLHtzr8GOqUBcLewk1Oz3eyoJrghzhwCTciR%2FjLwaIEjc1WLx1hrkIWjEQqNCrIyK%2Ff9C86SXAVz%2Btk%2FXptJIFUyE1Lr2nFSd1IAK7C1bSPygtBcoMLUQPqhV7shq21s7tpRwF2hMw62kt9hJfdYvYSNCbNc7In%2BD9RuTXZ9jXViFAN7sohS59qEEAtKunALfFMjpJB6bw%2B39o2QhrOVmG9u%2Bl10LCBC%2FGoyEtAo&X-Amz-Signature=7b1f6886e9f43849dc47c8a2d4c1471a82d3dccdd3d0eb686bb6da30316bf088&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4KJM3V%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiOSt85MqGBtAUx%2BcIpjIzseCRaVVeRgETA4xgUThkWgIgdbUAKcegMIwkzBiQOzbEnP%2BMctZLdAbwfSdpxZ9XCEQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOhH24tYwDQof3og8yrcAzV%2B5D8uVa9P22XZgUE%2FqBO%2B0Heq6hexoaja19R7XPie4pYRI9cFh6aBCJL%2BxfgzHDrInBuyAu0uKJyDhe1xlIobrovACy%2FfPsk7aoXFvP7ie03fAbu15NXZ%2FLoCRsB7wk19DQvriZhYbJZFNBJV1XZw389lt2kQRiSHPwYME2w1Wo15IDZHMb0n9wEHBpCDqiT9dXRStG6y2Y4JdEW442OyjXS48kvVHyWb3J30OjACZ%2FxWea6pPqkh80WauM%2FBwuv2Eb52DZ3KtkroL4QeZ5wiTzvXFUEdtaKS%2Bre99FX59SY6SRYvUmxIQegBaPwmumCh4oUMG%2FI3Vy579lIbNtJZC%2BtI2DrCtyVyJGIYeShe%2FjVGjbKBPTLYjVoqEvNFsPTnzODwZogstfOQ2PiFkRJ1tFLm%2FR8XqSMaix69wNvM36MTkEJCJxJd0%2B7UwPiJD0%2BbLMDMZFSixMca0Oe56WV0vD2iksHj5%2FvAguNKP2CL7V%2FJ6oJD%2FPoMH6I9lMTs%2B08U1HdLrSsXRPHjyDBaniNt%2B%2FpMjz%2BNn5%2BAFtHuxGmI0L1PmVX78PKDTy2Tut3l8J760q3VZeo%2F9c52vs2HuudfiRfVggvY%2BzaFyo8Io1XvGuv%2BWpqQq4TC0Cw%2FMLHtzr8GOqUBcLewk1Oz3eyoJrghzhwCTciR%2FjLwaIEjc1WLx1hrkIWjEQqNCrIyK%2Ff9C86SXAVz%2Btk%2FXptJIFUyE1Lr2nFSd1IAK7C1bSPygtBcoMLUQPqhV7shq21s7tpRwF2hMw62kt9hJfdYvYSNCbNc7In%2BD9RuTXZ9jXViFAN7sohS59qEEAtKunALfFMjpJB6bw%2B39o2QhrOVmG9u%2Bl10LCBC%2FGoyEtAo&X-Amz-Signature=106f48984aaa1f476942799d465cd23c87d64f7b8dc7eeef59eb9df9cc9a5c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ4TFNXP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeyEiGV8RgnsrBjlOb1RFu7U9HiaGUvgueBOa2%2FZuphgIgPvgWgS7gk9RoqPsCGrcRR0O20Gd5xwHLM%2BEzHt1cAMUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDETYHcc72GxYUlwS8yrcA%2BIK3ri49FZ3YfYuZAIJ1nF9ibO0EQOqs%2BgFL4Jv71Ie2ld3Rle70JShF%2B%2FmusfyPJde6tCSDu0mfEw8S9YZGwe5vRzmfS5LPoeBlqchpu7BYPAEARD9i8%2F%2BCvNzfqDb4LIbdgFUS7Xkz1snWzUj3rMRycakiaDkfgh2FeIBQ%2FS98EEfiJDib6dpyeNo7hL79jw5lg%2FOnZzjA5u1q48%2FiWhLXMBuK%2BCa3vYSjEWE%2BpcOAhmD7Di13AExVC9OpOA5gOaY12YOyXJ%2BDfTAqeo1UUUI7Jc2HI4Y1PrDIJuFJXbYr%2FYZnY%2F9FS%2F0%2BmS%2FZrOOVNm3myhA74Xwv4K4qIojhQ7ljEVq%2FZy5rKZQLLtUchu4MHx6N3rQ087njoEKubW9ytQxqYquSfaSJnzam5soG89YJZFWqAJtZhHleNJqnJO1sY3cjGIIriAcI03kVhjS1k54OLXNmjOAPQvBOxIFkO7XOJ7EQh%2Frk2Y1quMUrmjJZf%2BOgC0NQZ1vHTmfspPSBaKBW4Xz2RDKeYE%2B4ZGUD1I4mPuil%2FiqD7UcSQtzRuZDhJokaWaYsBYTIjNSQw6%2BGqxODCj9tIC%2BXXq145XtKPX%2F0n8G0UrgWEc36sGGPoCKa4CIR%2F5RYK2nlzAZMObtzr8GOqUB2I1jjdXtqSn%2BC8jJQloZwavkaUvXEi%2FfaMKienn9gEL%2Bj%2FBqn8lSFb7MdudYJotN2emPtd5so5AySubJJy3SaSi1q03YDGYLry6ybWToPR%2FlzEB%2BBzElBt2xj0MVtI9TGkym346QW8k55AuZou9chnZ8T18R4IedVHJVarO3%2BikH7Nbti80JZyHPmQIiuRvsCWeO%2BICY9eQv1HSb94Gs3jiP%2FkEM&X-Amz-Signature=0052db88b6bb7b2447430a2e39825d9f65f6be5fc20c937e4577d083e653112b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ77TNM6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiP%2BzMgIy4opNVLQkckw7prZb%2FUaUVmosLKvNMzO6T2AIhAN%2ByjcEH%2BPGMEQB%2Fd3jG0mOwvz0QeHitJ%2Bda37AHeItwKv8DCFwQABoMNjM3NDIzMTgzODA1IgyhBUd4tm741pdS6isq3AOzMZPFDR4HNixGCO7exLJO6ap8fYlIxSt2uNSdt7Za67mtT%2FzLUOol6F6uq8pOWynwlpstT5DTdp7nBpIWpn64RTGn5xTVmcpvFY0pDB%2FhG%2B0ZBOa1u9bOmGfCDTzf%2Fd%2BxrE5gH%2F71t4rz4lfBDSTZIUXX4nzX%2B6E8NXFrocJdkgvXxJgYoRenLQd9%2F9sOR6VN58a5VcPJHZw%2Bm3kVhUQFJ5vscmORywGzV5uO0RI%2Bzv%2BHA7dSp6Jheb1hof3SUQ5AjK%2Bhn696SiucYSHXIUvWnafUhI%2FFzDlLN%2Bl3Xi8ARhPgZC1Toep%2BuqogTE7x%2F%2BvplXXwalRhH4r7KqJRgUjnaSmBfNCRRcUIoy5lrSuMaeMbdkPep84G5%2B%2BPWywcgrK3q5oa3dScBWMT2Ug95M%2BI%2Fo69vvuRQNmrMkhgXu%2BSDObhP23nZsMI3AvE%2BoFrk2zN1PW9HS6nlwv1lEsSKJZIlKPgOxxhuQFNIrT4%2FrElo8gLYWmAs2SGyHIbRvQnMHjQ58zT8Lh3RIzfHlR36zhD6TuRSp21JGeCnvlwRu%2BoYfti7eFXv0%2BzreVBmUn5VquTnjjKnzYWMRkcWZ6%2FM9mPAx9xDQgnzC79XODDK7Q5tyOOYyfSeQaxmDLDKTDY7c6%2FBjqkAf6Y6xKkgiuopja9yGQmYoW6j4m9mwV9qDo6PH%2B4%2BxTFBn4MroWefzHcICFAI5hMQ%2BCzWaBAx2VsoXtCpk%2BoOKqztMg9B2T6uEroeyTlODyMty5V%2BmB%2F081n9M0L2I8XSVqjOn7%2Bn46zjjUphdM6tei9wFdsU0MI8iiAKmBKW%2FlBLq0stRY%2FeI9fjj9Xcb3ahxeSx%2BCpjEEPD4G9XZTh%2FZeqMtTx&X-Amz-Signature=fca476c2f7bf0b835baa360feeb75f07f438824abebb73b5b00a5b37034b9eab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4KJM3V%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiOSt85MqGBtAUx%2BcIpjIzseCRaVVeRgETA4xgUThkWgIgdbUAKcegMIwkzBiQOzbEnP%2BMctZLdAbwfSdpxZ9XCEQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOhH24tYwDQof3og8yrcAzV%2B5D8uVa9P22XZgUE%2FqBO%2B0Heq6hexoaja19R7XPie4pYRI9cFh6aBCJL%2BxfgzHDrInBuyAu0uKJyDhe1xlIobrovACy%2FfPsk7aoXFvP7ie03fAbu15NXZ%2FLoCRsB7wk19DQvriZhYbJZFNBJV1XZw389lt2kQRiSHPwYME2w1Wo15IDZHMb0n9wEHBpCDqiT9dXRStG6y2Y4JdEW442OyjXS48kvVHyWb3J30OjACZ%2FxWea6pPqkh80WauM%2FBwuv2Eb52DZ3KtkroL4QeZ5wiTzvXFUEdtaKS%2Bre99FX59SY6SRYvUmxIQegBaPwmumCh4oUMG%2FI3Vy579lIbNtJZC%2BtI2DrCtyVyJGIYeShe%2FjVGjbKBPTLYjVoqEvNFsPTnzODwZogstfOQ2PiFkRJ1tFLm%2FR8XqSMaix69wNvM36MTkEJCJxJd0%2B7UwPiJD0%2BbLMDMZFSixMca0Oe56WV0vD2iksHj5%2FvAguNKP2CL7V%2FJ6oJD%2FPoMH6I9lMTs%2B08U1HdLrSsXRPHjyDBaniNt%2B%2FpMjz%2BNn5%2BAFtHuxGmI0L1PmVX78PKDTy2Tut3l8J760q3VZeo%2F9c52vs2HuudfiRfVggvY%2BzaFyo8Io1XvGuv%2BWpqQq4TC0Cw%2FMLHtzr8GOqUBcLewk1Oz3eyoJrghzhwCTciR%2FjLwaIEjc1WLx1hrkIWjEQqNCrIyK%2Ff9C86SXAVz%2Btk%2FXptJIFUyE1Lr2nFSd1IAK7C1bSPygtBcoMLUQPqhV7shq21s7tpRwF2hMw62kt9hJfdYvYSNCbNc7In%2BD9RuTXZ9jXViFAN7sohS59qEEAtKunALfFMjpJB6bw%2B39o2QhrOVmG9u%2Bl10LCBC%2FGoyEtAo&X-Amz-Signature=98079e553bd0789030899caac128e03320824646972d5501a27e9cd854505ccd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
