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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDBNI6K%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBL26QVBCA2ZuzmCHLFSMsupqZnvhPiOTnKrWfWrGmCXAiEAyLGXKdkGfGWU7LDslom4ND7gdSwFNGeTPdGGxxPTNIEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHTsyCcP%2Fc8%2BR6nEdyrcAyzIKHicFcN28bgvzXDcroPPa7rDZDbh%2F35fWhtXa5jJGhT80sUEP5HdCQEkq5fvuVv871l%2FWmvYiC%2BvzFmoTIbAOVmPlj9FVuMw%2B8KCZpnXMTQt3mjvJlBjRTnwjOJoq77P9dkEI3x80ouOF1TqXlgrC8DhgDRHCR51R%2FLaaXwqV%2FUFyIpfxmHUhyubu1D0b%2By2CqW5179xgYy7UW8QnHYkTeuZ4b7wSg3Xt3LseJpzwK%2F9dFoBhyXYq2yzrxxIQRI%2BFcBAk%2BW2J7IQVY%2FaY6pXUcahJ8jV%2BiwD5ImSBj5I74J3BPyhQLLdTP9508T8Vg6YZ%2BJz0niYlrzRihNYJL2ZmgKvSYOIPcPJFrKUTVk74F6jgDMVXoPDhAD8qkCi1hPkR9mdyULXnkhjgkYMichGeDhGoyRoVwNBSlE2qeoT1Tgdv7TU%2Fua%2BKZTi8lCyEx4jviriA0P9clzQjfK%2FVAUJK2CIiK59xoBGNzVNabyo0tWazfDZ7ZTYeIE4OMyGwkmiHhXKlUjB2x%2FgFMvkmLY1DViZUYPelFjiGXEA%2FeNNmAwivBxl5YNbxB0ym5VWdRaPEAvJoXlx3Tg1nSTpBiQCtEDKWg3zRh0C1msPTVxKfn6aiueys0ZccOKoMN%2BtzcQGOqUBwIJ6%2FEG8xKmx65B4hP5p8nH%2BdhI%2FqS1A6zeS%2BlBREenv2fo747Pflh96lvXfpCjKAs2JsxlPiclQXJKd2shnEUp3R65hOlQFVrFXaT4E1bMATl2oYHFakF%2BnD7a%2BD0UZoJWpaQA1aDVfMiED056VNIWByxYuXT12wk1AnPKZXU9XdHJl0CPqWP1Ta%2BEjG69JPVqS%2FS0ESPT12PIuBcL9IKy7HctM&X-Amz-Signature=89b15af41b6d2d96cadf660d2cd2cd7ab7a3095bb7b6257d6b85090471e4c942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDBNI6K%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBL26QVBCA2ZuzmCHLFSMsupqZnvhPiOTnKrWfWrGmCXAiEAyLGXKdkGfGWU7LDslom4ND7gdSwFNGeTPdGGxxPTNIEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHTsyCcP%2Fc8%2BR6nEdyrcAyzIKHicFcN28bgvzXDcroPPa7rDZDbh%2F35fWhtXa5jJGhT80sUEP5HdCQEkq5fvuVv871l%2FWmvYiC%2BvzFmoTIbAOVmPlj9FVuMw%2B8KCZpnXMTQt3mjvJlBjRTnwjOJoq77P9dkEI3x80ouOF1TqXlgrC8DhgDRHCR51R%2FLaaXwqV%2FUFyIpfxmHUhyubu1D0b%2By2CqW5179xgYy7UW8QnHYkTeuZ4b7wSg3Xt3LseJpzwK%2F9dFoBhyXYq2yzrxxIQRI%2BFcBAk%2BW2J7IQVY%2FaY6pXUcahJ8jV%2BiwD5ImSBj5I74J3BPyhQLLdTP9508T8Vg6YZ%2BJz0niYlrzRihNYJL2ZmgKvSYOIPcPJFrKUTVk74F6jgDMVXoPDhAD8qkCi1hPkR9mdyULXnkhjgkYMichGeDhGoyRoVwNBSlE2qeoT1Tgdv7TU%2Fua%2BKZTi8lCyEx4jviriA0P9clzQjfK%2FVAUJK2CIiK59xoBGNzVNabyo0tWazfDZ7ZTYeIE4OMyGwkmiHhXKlUjB2x%2FgFMvkmLY1DViZUYPelFjiGXEA%2FeNNmAwivBxl5YNbxB0ym5VWdRaPEAvJoXlx3Tg1nSTpBiQCtEDKWg3zRh0C1msPTVxKfn6aiueys0ZccOKoMN%2BtzcQGOqUBwIJ6%2FEG8xKmx65B4hP5p8nH%2BdhI%2FqS1A6zeS%2BlBREenv2fo747Pflh96lvXfpCjKAs2JsxlPiclQXJKd2shnEUp3R65hOlQFVrFXaT4E1bMATl2oYHFakF%2BnD7a%2BD0UZoJWpaQA1aDVfMiED056VNIWByxYuXT12wk1AnPKZXU9XdHJl0CPqWP1Ta%2BEjG69JPVqS%2FS0ESPT12PIuBcL9IKy7HctM&X-Amz-Signature=7a5d8c5add52ca78be665b742ed4a287ac296c77e45efdd7d69fba9212992920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDBNI6K%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBL26QVBCA2ZuzmCHLFSMsupqZnvhPiOTnKrWfWrGmCXAiEAyLGXKdkGfGWU7LDslom4ND7gdSwFNGeTPdGGxxPTNIEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHTsyCcP%2Fc8%2BR6nEdyrcAyzIKHicFcN28bgvzXDcroPPa7rDZDbh%2F35fWhtXa5jJGhT80sUEP5HdCQEkq5fvuVv871l%2FWmvYiC%2BvzFmoTIbAOVmPlj9FVuMw%2B8KCZpnXMTQt3mjvJlBjRTnwjOJoq77P9dkEI3x80ouOF1TqXlgrC8DhgDRHCR51R%2FLaaXwqV%2FUFyIpfxmHUhyubu1D0b%2By2CqW5179xgYy7UW8QnHYkTeuZ4b7wSg3Xt3LseJpzwK%2F9dFoBhyXYq2yzrxxIQRI%2BFcBAk%2BW2J7IQVY%2FaY6pXUcahJ8jV%2BiwD5ImSBj5I74J3BPyhQLLdTP9508T8Vg6YZ%2BJz0niYlrzRihNYJL2ZmgKvSYOIPcPJFrKUTVk74F6jgDMVXoPDhAD8qkCi1hPkR9mdyULXnkhjgkYMichGeDhGoyRoVwNBSlE2qeoT1Tgdv7TU%2Fua%2BKZTi8lCyEx4jviriA0P9clzQjfK%2FVAUJK2CIiK59xoBGNzVNabyo0tWazfDZ7ZTYeIE4OMyGwkmiHhXKlUjB2x%2FgFMvkmLY1DViZUYPelFjiGXEA%2FeNNmAwivBxl5YNbxB0ym5VWdRaPEAvJoXlx3Tg1nSTpBiQCtEDKWg3zRh0C1msPTVxKfn6aiueys0ZccOKoMN%2BtzcQGOqUBwIJ6%2FEG8xKmx65B4hP5p8nH%2BdhI%2FqS1A6zeS%2BlBREenv2fo747Pflh96lvXfpCjKAs2JsxlPiclQXJKd2shnEUp3R65hOlQFVrFXaT4E1bMATl2oYHFakF%2BnD7a%2BD0UZoJWpaQA1aDVfMiED056VNIWByxYuXT12wk1AnPKZXU9XdHJl0CPqWP1Ta%2BEjG69JPVqS%2FS0ESPT12PIuBcL9IKy7HctM&X-Amz-Signature=79795db7040f0b5a82d23b3cef952e08d42e002aa0b91b70a07b489486d23401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNFHOMBS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDqXm%2FW1V0ypTCW1wOT9o%2Fk93ncJbtiDQtgu4vFI2wSnAIgJcJt9y5Ph%2BCkJvAJlD5qjS6YFfqKXQkfBxizevE12bkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLlXqc19bGq%2FmMFZ7SrcA9fMszrEN%2FBPRvTXW0iAfqW9xUQQfV%2BJAHew1G69%2FzhmeQc%2Bd82WIFFizlapKA5TgL2vSzY9nMOLyVxyLZRpmlA92ZET%2FOmdOtoazWS9e4JEEbyx5RvsPMo%2FKx6tvZE87tDM4lZFY1eNwEe2AX7%2FfcOkH2ASIT2ltoJBHBFJ0QOaALPWdgtHGXaZoGIyim0f3nc7lx%2BH%2Ff9rWM%2B4Ug0XKz8XZlNsdMXz3BsJOE7UivZ2AFXbnF3MFLzusNc6%2BidG7Ao9bRragAOea%2BtKntrMXy%2FbVuMEmRLTHNlylNvAaDZEDxZIPKrGD9LJk2kQXNUkkkkche3tgPgK8TlXpfdmbx4Hk3qMBwpqS5B1cHTfuHq64GkxD8iVw7kCjPfCCpFX%2BnE1lyQwq0dlR4uyZDO2OhAxJe4Tp8J4WmucBuPWks%2FPTRz105k4oUHyPbEiNpDprUe5%2Bw1kjR9xAgRo2PJtj9DiomPxDDapy0pRHovoVVAhcksA1GzsxPHvGJxHPpzZJw%2BfC0x4jP6j8klmqW%2FX87XoOKCN3xu1yxMByyulFZ%2F89V61PmKysuCN80v353jqnW2G4XTY%2BWzqEPPkjspy2vES0oigZRhE%2Bcfmto89Igin3Ci%2BxWW9xVMY8eF2MNWtzcQGOqUBMtvSVzfM4NjYlIT29qeZ5HI3N04p0Zqy%2FRrEDjx7jIlviZ42FuGeciFes%2Flzy38ZiY70vToVJkFNVS7F88n%2BUYy2dGrQf64kbn26JG6ysBIqNkTw%2B55cOh%2F%2B8umipKmJLvnKBuaj3cL%2BSh8hKcBmqSQE9Zs0rMYknizf6VuaUFa5f9poFWOgOg5qPmRDI%2FJGDMAQSg4eeC5kOfgOtiSUEGTGtxke&X-Amz-Signature=65effb1148b561465458a11d1df25811168b001b952a953de9e4c756c381c709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKABGA67%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIEV9H4C3XDMnSmQpE%2Barz9lj%2FILgjhfKukExlVP4m4R7AiEAkxUZt7Ax4hgckJrTQcFawYnmXF6O5w1DDdvi9hQsyDYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEYWpC27W7x8hmtYfSrcA%2BEMxmmN7m0dFAiPgX4MUWUncAZ4OYwOub2g2omOO%2BMhh9PrUNrECRQFTOuLItvanaVuX%2BRBK7ZegIiOQJBNTYOaaNQ9HpnDsFVxb0XZCADyQazT4jehlW7VyVoswih2bm3yoSOuoBjVbWXb4KD9IIYro60EX72%2Bk3kpVeqd22fjSZOmqQg1%2F1RR4us1uuHe6e7zhdVFm0lYHCJRlQigWbV6yTXljmspLMX5oIsmPR234PYK95urJ5uUNPzmoNaTSRgRHEJdoCMYOofDOS2noFe0IHSf4QSU0cT1REzDh6fTfLPzm9%2FO%2FzhFDPN1APsOQB7WZ%2Fa%2BI4RNr7qjXAEA5pDmj01N6oJO%2BAmW99o5v5T5lgUSmSMfTrNXYu2f210B9qhDvWsxEmOCweHjVPkrnBEJOq1iRop2bfbC%2B%2BwX0dFn6mss611gWv9erOTWOJrIQv3TPU8ZYkrAZvOgCs5TV0IM7rXbtTiimn6svW69w1sGm93TATB%2B8h5%2FFZRO%2BqnmoyIQzWCoJfM3M3bhF1iTKr4pTIfq8VRYoEgqCFH0GaZdXPYrftV34J6K5%2FuLCkmu%2F%2Bx6udXZnSIU0UT3akLCvSHxadFycMinVoHTKN1zCKDXgrctqNpUkDAspW%2BTMJ%2BuzcQGOqUBWJIBS71td95Vqkkeh7gOyiy4bgezmejJp8WQ4iW83QzJDvxSRtdrRGGPbShDdzQgpQxPc71QIJ7P3f9n1XFThg9%2B3R%2B40IkKuB%2BPKO6ZcVddHbU8RnvyfeUTdCRhwOifjFGsCALYfc3iai%2FboBC1WdRGQJXGDUiduFZpf1GemfHYaIGczsGDvee70gqunqbY%2FgMhqOw25ImNPBTILZK0cqLJqw3x&X-Amz-Signature=341b495874d44d17e575790e79193ea93fd4d592b12652b613e5616dcc38cfb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDBNI6K%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBL26QVBCA2ZuzmCHLFSMsupqZnvhPiOTnKrWfWrGmCXAiEAyLGXKdkGfGWU7LDslom4ND7gdSwFNGeTPdGGxxPTNIEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHTsyCcP%2Fc8%2BR6nEdyrcAyzIKHicFcN28bgvzXDcroPPa7rDZDbh%2F35fWhtXa5jJGhT80sUEP5HdCQEkq5fvuVv871l%2FWmvYiC%2BvzFmoTIbAOVmPlj9FVuMw%2B8KCZpnXMTQt3mjvJlBjRTnwjOJoq77P9dkEI3x80ouOF1TqXlgrC8DhgDRHCR51R%2FLaaXwqV%2FUFyIpfxmHUhyubu1D0b%2By2CqW5179xgYy7UW8QnHYkTeuZ4b7wSg3Xt3LseJpzwK%2F9dFoBhyXYq2yzrxxIQRI%2BFcBAk%2BW2J7IQVY%2FaY6pXUcahJ8jV%2BiwD5ImSBj5I74J3BPyhQLLdTP9508T8Vg6YZ%2BJz0niYlrzRihNYJL2ZmgKvSYOIPcPJFrKUTVk74F6jgDMVXoPDhAD8qkCi1hPkR9mdyULXnkhjgkYMichGeDhGoyRoVwNBSlE2qeoT1Tgdv7TU%2Fua%2BKZTi8lCyEx4jviriA0P9clzQjfK%2FVAUJK2CIiK59xoBGNzVNabyo0tWazfDZ7ZTYeIE4OMyGwkmiHhXKlUjB2x%2FgFMvkmLY1DViZUYPelFjiGXEA%2FeNNmAwivBxl5YNbxB0ym5VWdRaPEAvJoXlx3Tg1nSTpBiQCtEDKWg3zRh0C1msPTVxKfn6aiueys0ZccOKoMN%2BtzcQGOqUBwIJ6%2FEG8xKmx65B4hP5p8nH%2BdhI%2FqS1A6zeS%2BlBREenv2fo747Pflh96lvXfpCjKAs2JsxlPiclQXJKd2shnEUp3R65hOlQFVrFXaT4E1bMATl2oYHFakF%2BnD7a%2BD0UZoJWpaQA1aDVfMiED056VNIWByxYuXT12wk1AnPKZXU9XdHJl0CPqWP1Ta%2BEjG69JPVqS%2FS0ESPT12PIuBcL9IKy7HctM&X-Amz-Signature=47bc77050f94b57978b4f7c724defa083a487ac16d3e9d8d491130945a4ee73f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
