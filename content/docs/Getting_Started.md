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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LG2LYZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEhXYySEyTvIp3ZPrW1uo8nMin9q63zN6bI3pjCFbENqAiEA2JcZwnBcSgplSV2%2Fiiu7FJZX1tMFL3x%2Flbaj94rJNLgqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQk6Jvc%2BYMs4wlVRSrcA77Hah11WI5mRwEltFmZkkZOhvpW6CMNL6M8ts0BxRdRC4E8l2KZDAqPiCL%2BaNewPdNph9mehSjJuS%2FV1xIYgvk11NTncS1jwmDEX3AEUEtrFRE7Rp%2BValBODCv3C4%2FfSjvGxeoF%2BrmrJ3dey%2BNsY1pCDb8VGB2kPBKysixy7PJkQ8O4Vawn%2FejOyCw6GfQ3XQfWMNrBNidL5aEx6QrbGS%2BrUaX1x8O7u0MCLBoaGA9iICzdInEQHy3Q6oISi%2FMoqaLD797ifSPDqlNjUif%2Bg4S8yOKZmBq1GbaCtlfnkcaJPcKgywZo6hW0F%2Bz5Xno2qAiB6xn%2F9FEFSxLpPhJMcMw7irYdIfJShrni9ozalZ7CDy2ndewUizdFDKzqByMo%2FXyk7wWyio1cZSlkLkyanOX0jG2eMuD6kjFIjZtiv0ieVwBZFy5BUWvh3CLehbcbO8i4ZhLANonFsdQsBW9p1jIOk0nTeCSe9CZAWS9%2BdiWIQuwKgpaJJB00lL48pLARsGzxFRNnNPbTjhztlPiOUbQIlZkJOie%2BUo%2BoUgSbdYqg7eo0JbaQ8iU%2FljMrRooKUw3bi1Zka9X1yXoGoYgRwpCvTKWttT3%2FUz1DJHZ%2FkPGDt13rbMelB0AFmn6GMP2y2L8GOqUBvEfm%2BGt6fSR5XdocL%2Fu5jOMPVmpXha0%2F3GUuzlBgh0MJfHa3OiC6iTni%2Fg%2FS1YKaoRpBISqJ%2BWbHpNA%2Fi7QDphu6V3tIKdHbHsRXH8pCc27HpbztRBaKMMNWSoZ%2FftiRfzTaW82qUuOJNdfqEOk700k%2BgtqOo3%2B2wVebvO81P6oQPtKcT2DxxWjZyCCZTJSeRj0SPE5NbewBuvfxkIaa588vgJaz&X-Amz-Signature=6bb377c927e2a6ec56526329a459a13fcf6f066cc61dd47b485078d758a442d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LG2LYZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEhXYySEyTvIp3ZPrW1uo8nMin9q63zN6bI3pjCFbENqAiEA2JcZwnBcSgplSV2%2Fiiu7FJZX1tMFL3x%2Flbaj94rJNLgqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQk6Jvc%2BYMs4wlVRSrcA77Hah11WI5mRwEltFmZkkZOhvpW6CMNL6M8ts0BxRdRC4E8l2KZDAqPiCL%2BaNewPdNph9mehSjJuS%2FV1xIYgvk11NTncS1jwmDEX3AEUEtrFRE7Rp%2BValBODCv3C4%2FfSjvGxeoF%2BrmrJ3dey%2BNsY1pCDb8VGB2kPBKysixy7PJkQ8O4Vawn%2FejOyCw6GfQ3XQfWMNrBNidL5aEx6QrbGS%2BrUaX1x8O7u0MCLBoaGA9iICzdInEQHy3Q6oISi%2FMoqaLD797ifSPDqlNjUif%2Bg4S8yOKZmBq1GbaCtlfnkcaJPcKgywZo6hW0F%2Bz5Xno2qAiB6xn%2F9FEFSxLpPhJMcMw7irYdIfJShrni9ozalZ7CDy2ndewUizdFDKzqByMo%2FXyk7wWyio1cZSlkLkyanOX0jG2eMuD6kjFIjZtiv0ieVwBZFy5BUWvh3CLehbcbO8i4ZhLANonFsdQsBW9p1jIOk0nTeCSe9CZAWS9%2BdiWIQuwKgpaJJB00lL48pLARsGzxFRNnNPbTjhztlPiOUbQIlZkJOie%2BUo%2BoUgSbdYqg7eo0JbaQ8iU%2FljMrRooKUw3bi1Zka9X1yXoGoYgRwpCvTKWttT3%2FUz1DJHZ%2FkPGDt13rbMelB0AFmn6GMP2y2L8GOqUBvEfm%2BGt6fSR5XdocL%2Fu5jOMPVmpXha0%2F3GUuzlBgh0MJfHa3OiC6iTni%2Fg%2FS1YKaoRpBISqJ%2BWbHpNA%2Fi7QDphu6V3tIKdHbHsRXH8pCc27HpbztRBaKMMNWSoZ%2FftiRfzTaW82qUuOJNdfqEOk700k%2BgtqOo3%2B2wVebvO81P6oQPtKcT2DxxWjZyCCZTJSeRj0SPE5NbewBuvfxkIaa588vgJaz&X-Amz-Signature=47653e10307e18fdfbf1e023df724a008dabb4fedd0bae36b491337fe70cb188&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLARKNY3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDdsLovsXiJ4TFSYRkxuu0f7d0aI4bCJ5dNBpJ4YXxYmAIhAOpwywl%2BwHWGbo8viuiQgBDZok6w8iC85a36Or%2Fyt8AzKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB1m34J6Av0BcYcoAq3AM4UvcnfSloQmFzQjFU6EEJtwfNH68lgbsbKbF6IT7k2sgXJdqEnpwXfxuEZZp7pLPyN7%2BF2C%2BoYLL0FMCcRG2dXYtNRsYNMkCawJVlQRNUYwQ1b%2Fw92TBHz0KiYXFnecQ4wRxn%2BlWrhJhmCcKwgjVsiQiesx6XKuA9yQXB6wh0nF8WJDiiJ7uRMPtFKj87h4GOGFCIP2Si9blnMS479nSWs00Z5jWI3VeCYryZM8j8evvbymdfdmXO%2FXWAUmXphd7x0WUFAPqTCEk8dXf5PgjTi7yuAqCliiCWBTK0gK4LYm8CiJnFP7%2B9kje%2Bw3tWQQ8tcOrns0x68GcF2MpMwDYsISmqOGlB%2BpWwmvZZC%2BR00urJfSv8zwy3nyqkSCM3FkBsM%2FaClkqbC3yL39a7vpDc1IdhmVvGMMv3UOJ4p6aoLnzeCF3C7xCXPnVpujjiktHwavLWVcY7BCVYs%2F8rmpvpvNUGwzxhwzK%2BBR3CrHa0hpjPtgDdNaCnWfVTbM3ItorzG6RB0%2FViIVPCq70bja%2FgzkTw1GdiDMgjqNbEjt4rDjYaU%2FnKUhKs%2FN2LVmo9UJ7Q04ls2%2FW7HNea0g4z0h7NDemL%2B4rKHimNnl8gLi7%2Bsy6bnCSjjH2qICRWajCisti%2FBjqkAWVf1D7xMam32CE2ohTTdh7qUpn7dNbxwMSlIWPERCJSQVjx%2BaqNV0%2F2ungCLK%2FbOSg0rPTLZze4LkMReYZ6YxKEKraLLQEGAfzX1yKf9RmIPWfSVbjtghMUmWbh2HJy%2FKRS8RmImNZo4HDXfAns5A%2BZMSpUYVc5hTR416RLJzeSGcxfHQc1kBtixgyxn2eBHQRILmIC%2B4YKbuDiacJcex087k1s&X-Amz-Signature=8c6ba4b73a64f3c0a042a1ce2d6193c0e46ba1bd3470214590851e87b9019534&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPAWKN4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCrAHgYAM4GGX0HbUMgJV%2BtaICkbHfKGfmvUHWu8PS%2BoQIgKV2gD2uHhw0HqBmTFyyoMVWG37nEYxvfZIm3tdt3KZYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe8QNUvczCoxVY8dyrcA7LIoqtQT4RAD8zRi0qi%2FhVD7WzCHta3tACFMZBV%2Bg4YlUnLxGs4CdgsUUFrusM%2B3kL%2FDrA5Ms%2FNFOOqUaT6fBi7C91zcVr4KLzpUcCwVLc%2Fjfa7hDYTNxT7e8elxnroyU7BaQoVNJ8e7GXrpaVxQdQVZyWtiIbpSBR7%2Bw331cYLouPSSP50XkpBbq1xMvwJv9AUNCmMFj7uHWkXrN077vfwTiqvZxYHzcW%2FMlz8wee%2BQHpB3pxWNfo%2FgbIFXDlGB9sdTFUwTPnpN0EKgudupyXb2qw2GvjKgHnrn3rmYTqP2WwjhJTMwdtJ8kRAd2S4umIRbA2SS8qGhiJEk8Si4xlQ4Ru6O2VBLUgpQrxbrHdFDrXxA5pNLiosNnUmH%2BCrOkUkQ6baDlShVzFDM%2BUHw51Qiithe4n1maT%2FyVy%2Fy3E%2FujwcnXdkLfHMTN4Yp7QigJbe8qniV%2Br%2FE2trVQi9%2FQVYBAMzK1QB3lFZahS74qaEVpq2Hc7WykbkwTLhF%2BLNxlSQtDctc%2BMdPps7V93o0WsgZA6jS0cLjH4vqGjmMKw1owUUXb1c%2B5slU2LcZjzhJ3NrKa1zh6htlJ8Da941i%2FdjGkQuEUsk2Aq3fbOvfkRSLDDG9L3dwL9DbqDTMN6y2L8GOqUBjl%2FPGmXtSg1pvacKzFBMUE2%2FQHe%2FtDmbhMbM%2FTXodOBOV1%2BViMbv8NwkT2BFzQ%2FeU90xFNOvOE5JGklm%2FmMs1c3OiC507HeXiRxudr1QUphbgbGtQ3ZkMypSw3L%2FCLgyau1k9Y8lZeD%2FaW4GYG2e2%2BUXmu1EE%2F1Mza0rqqrvLTSEF8YtCJP2k%2BTJSr3dSGtz2x7BLvTtT%2B65L%2BC2s%2BEQwKgaYrec&X-Amz-Signature=cc5f261c838737548617306b4082072662aa8f123ea0f33f60fb9f039bc037db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LG2LYZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIEhXYySEyTvIp3ZPrW1uo8nMin9q63zN6bI3pjCFbENqAiEA2JcZwnBcSgplSV2%2Fiiu7FJZX1tMFL3x%2Flbaj94rJNLgqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQk6Jvc%2BYMs4wlVRSrcA77Hah11WI5mRwEltFmZkkZOhvpW6CMNL6M8ts0BxRdRC4E8l2KZDAqPiCL%2BaNewPdNph9mehSjJuS%2FV1xIYgvk11NTncS1jwmDEX3AEUEtrFRE7Rp%2BValBODCv3C4%2FfSjvGxeoF%2BrmrJ3dey%2BNsY1pCDb8VGB2kPBKysixy7PJkQ8O4Vawn%2FejOyCw6GfQ3XQfWMNrBNidL5aEx6QrbGS%2BrUaX1x8O7u0MCLBoaGA9iICzdInEQHy3Q6oISi%2FMoqaLD797ifSPDqlNjUif%2Bg4S8yOKZmBq1GbaCtlfnkcaJPcKgywZo6hW0F%2Bz5Xno2qAiB6xn%2F9FEFSxLpPhJMcMw7irYdIfJShrni9ozalZ7CDy2ndewUizdFDKzqByMo%2FXyk7wWyio1cZSlkLkyanOX0jG2eMuD6kjFIjZtiv0ieVwBZFy5BUWvh3CLehbcbO8i4ZhLANonFsdQsBW9p1jIOk0nTeCSe9CZAWS9%2BdiWIQuwKgpaJJB00lL48pLARsGzxFRNnNPbTjhztlPiOUbQIlZkJOie%2BUo%2BoUgSbdYqg7eo0JbaQ8iU%2FljMrRooKUw3bi1Zka9X1yXoGoYgRwpCvTKWttT3%2FUz1DJHZ%2FkPGDt13rbMelB0AFmn6GMP2y2L8GOqUBvEfm%2BGt6fSR5XdocL%2Fu5jOMPVmpXha0%2F3GUuzlBgh0MJfHa3OiC6iTni%2Fg%2FS1YKaoRpBISqJ%2BWbHpNA%2Fi7QDphu6V3tIKdHbHsRXH8pCc27HpbztRBaKMMNWSoZ%2FftiRfzTaW82qUuOJNdfqEOk700k%2BgtqOo3%2B2wVebvO81P6oQPtKcT2DxxWjZyCCZTJSeRj0SPE5NbewBuvfxkIaa588vgJaz&X-Amz-Signature=6b774ffa6fa288a338e81731cde6840d2cf5c08f7d3e18eba8d7b5ab07d75d02&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
