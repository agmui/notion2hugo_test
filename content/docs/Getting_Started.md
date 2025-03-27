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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A7QENJK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWie2mQ6ic8hM1naBFuf26R5mtr3OtlQo%2BWWpDTRPb1AiAxIBUr6DFjD79ChjHv%2FwUh1lZLd7ZrXcGOhDhPrZWqjir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMDVure2muIb93byiLKtwDeSWxkJOz2rQbGgLK76b8ymSvXKKl%2F0BuHEY8KMtTUctpq1RvrU01Y0%2BhcdkEiRT4R1VGQJne58v%2FBtOh3XwtEZL3c9vn0FP3QCHP4D4n2blMl4MR%2BGXUQtaKN7C%2FYJBSkF3tsWSQ4CR7SrE7M%2Fo%2B%2BHN7vUvhq8dUBoWW8e19aG%2BpCSoJwiVxN5rILyTaqjQsYpSsSPSEG7tAL3bnsRpVgIwSunjMelqzjy%2FjQNP%2B02w7BIIgcHZU9%2BN3T5BjAy9Re8ZZrehlSe%2FngX8Hn%2FfghAhB9WUwfT8SNgyCjh%2FutpZdPIzntQuyGUJgLZ0m%2Bi9ovRdts%2FaPtIgiRg2rKQDdxUQs1GGlouqrO0r%2BCRzIjLEmJZNq2JvkGmHU65aM%2Bx%2BFgRmeDY%2F2z4zYWu%2Fq4oWt%2F8HH%2B5YFm6ux0xNct4qHpgA3c2y4h9k6sFp6wkRo2IvJm1T5lcc4g77z1YzPxutpFsTV5zqxwjJZTLM5zcJa7uCnKhuRs3qnMcPQurVTAJQnNPmm%2BzKaPxTw6UA9IFg8J5FJEYHh3VIyZRNPFIIwbphG2Dk7c9xE1lK6I7n%2BJE1VGnKZhZkW7rmWdogxUWyoICv%2BlFJazVB9eqY84RYU4xpZGlxBSML6gKLSBbEw7dqUvwY6pgFRohBtFN0%2F7Ay2wIvZuLqNdWXEtVduOjc2gzWQuHq9%2BcVMXQ0EPCa9JdFMUUuFZs5E4ADRzmF4BjuMwJ7%2Bnu8EVMrEKrU1n4JlffmFxfG1qMAevZo8hzlw8O4TMvPXXuAQqVI4UQCdvaHuDYa0Pg6IxykBHm%2BQvtuJqNoXMdDEyzOH4y3OewqWnqw7plBfimeinYXqxKqGAiAxt5SEodZ%2BbLTe2bR7&X-Amz-Signature=d479278616a52f294ae35cea2f3266f66a60620b1d554552898402ce458a7e27&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A7QENJK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWie2mQ6ic8hM1naBFuf26R5mtr3OtlQo%2BWWpDTRPb1AiAxIBUr6DFjD79ChjHv%2FwUh1lZLd7ZrXcGOhDhPrZWqjir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMDVure2muIb93byiLKtwDeSWxkJOz2rQbGgLK76b8ymSvXKKl%2F0BuHEY8KMtTUctpq1RvrU01Y0%2BhcdkEiRT4R1VGQJne58v%2FBtOh3XwtEZL3c9vn0FP3QCHP4D4n2blMl4MR%2BGXUQtaKN7C%2FYJBSkF3tsWSQ4CR7SrE7M%2Fo%2B%2BHN7vUvhq8dUBoWW8e19aG%2BpCSoJwiVxN5rILyTaqjQsYpSsSPSEG7tAL3bnsRpVgIwSunjMelqzjy%2FjQNP%2B02w7BIIgcHZU9%2BN3T5BjAy9Re8ZZrehlSe%2FngX8Hn%2FfghAhB9WUwfT8SNgyCjh%2FutpZdPIzntQuyGUJgLZ0m%2Bi9ovRdts%2FaPtIgiRg2rKQDdxUQs1GGlouqrO0r%2BCRzIjLEmJZNq2JvkGmHU65aM%2Bx%2BFgRmeDY%2F2z4zYWu%2Fq4oWt%2F8HH%2B5YFm6ux0xNct4qHpgA3c2y4h9k6sFp6wkRo2IvJm1T5lcc4g77z1YzPxutpFsTV5zqxwjJZTLM5zcJa7uCnKhuRs3qnMcPQurVTAJQnNPmm%2BzKaPxTw6UA9IFg8J5FJEYHh3VIyZRNPFIIwbphG2Dk7c9xE1lK6I7n%2BJE1VGnKZhZkW7rmWdogxUWyoICv%2BlFJazVB9eqY84RYU4xpZGlxBSML6gKLSBbEw7dqUvwY6pgFRohBtFN0%2F7Ay2wIvZuLqNdWXEtVduOjc2gzWQuHq9%2BcVMXQ0EPCa9JdFMUUuFZs5E4ADRzmF4BjuMwJ7%2Bnu8EVMrEKrU1n4JlffmFxfG1qMAevZo8hzlw8O4TMvPXXuAQqVI4UQCdvaHuDYa0Pg6IxykBHm%2BQvtuJqNoXMdDEyzOH4y3OewqWnqw7plBfimeinYXqxKqGAiAxt5SEodZ%2BbLTe2bR7&X-Amz-Signature=e16b6fe99fb007ab4fa629697ba4718126cbdc0580de7a79b8d4858f59ff88d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LDC22L%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdidHpu4jXabt7H3SwQhtdgccM4Wr2KrEzzKfZXmv2owIgdUQ7%2BLuIoNgUp0g5E7Dt3YvrAwJMRT3q%2BgzX6zq6gpkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDDgp0PZ2w8yleY3GYyrcA8R%2BO2cJz1aYo%2BUMyaQtvAjZYo8uzuNsv%2ByZeQdP0ghpEyhxDB6uDJ13pjX8Ocq50YL33nw6JTBIqT0Xy8XggqjHglkgXeX75OfMR5A9PWOeRjaIk4Sg%2BRu1JltcWbJ%2B0140cF0c9cJgbkP0DgBTQUVCb0VnAGzXq9aXGFW%2Fsk4ao6dqtSUGG0btHR4yyVAbZB5%2BkCdSfoUlnDxtUPRBA0CW7mfmfEdioaRhZUhMLREa87zthyJ4tPYvRZHHTKNFa9AjJmFXvriDuOkXuR0XhXqvOuBut0K4rwrosINLZbXabUG9kE%2Bgk9v4%2Bg1Lfw9uM50UL8ItGBK5wYJN%2FCGwcucte3IX4LdtkRtSXcESVUEj5KLqvjcoj4nmQmv7f5%2Bf3YRagk3a8c1QE6d7Ik3hkq9VER%2FjMyXDP9JTkUpEyYmZmEbU5EbJ9yV8VSDegqJTvqdGzrrDX%2Fb4cVcZS0VjAuILJTXZWKNvWNMjiSdqjLMuMVsZe4m1y%2FncY%2F8Y8VNX8RIrxfP0VasqUlXbs9rtW7fq%2B%2Fd1HE4RN2Cv7ZpngICzk0UyjwTSu5UYtXmR3lA2KCBhHTBqzNDfwwUbW%2BHZehf%2B2MUQgaXs9shaKUnwWnSqFxXASQGGFVi9T3vzMPDalL8GOqUBQETqIjvPU5tdBA7SvzzjJAFo46L4TQO5JL8OUqm6mu%2BgWQw1tFcVz4y%2B5FtD4foC%2BDueQh58FeKdNtgRQI%2FIPb3ag8YwCbEiYWrphiwQ3NEQdJHczXOcfUqrgCOrh5xVvH%2BmzQXtusTD5qL8IUPyh9FS4oDYpVraLExOgjcdlS5pV2VV01aRJuDzKV2vIXLdkWQl6%2FaijCbI6SrePKpEz3T%2FeVIf&X-Amz-Signature=cab9ed63d94ac16a1c149e35a11d12a8576629429d83e8d138786c128f7b208e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYIX2HC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpTy8w5Z%2BPQmsnRR6uKjlRfYDHP7fgqbBFiq0J2EPQSAIhAIMmN7GB%2FdZSZOQm4FXwyxGD7uKTpgoJ07aW%2F3FTchhKKv8DCEQQABoMNjM3NDIzMTgzODA1Igywz7tGQv%2Bt%2F6kXMwgq3ANC2cKPVRHNzQ88n4JZmricusGoxUwcg1JXrA2B2Ad3uEqUL%2FM3OoyOw%2Fq%2FgjR6B7%2FUDo50hhKfDjkA4A%2F9vHqQZKQU8dD0p%2BtbAZvAwR46A0gP889GRzmJDh3qzopEOO%2BKsxdrS5SbpI1lbweM%2BKYSZE3%2FU6PcCtEM%2BglfsiXdmtlGQyqlSV8lBe3u6JGke9zr%2FnNsFxI0Ac6%2F%2Fh%2B96I4cg0Y2iz07gvj4EWUrOqTkA1%2FgdzB%2FAZ7C1Wdib4p%2BZdzorxZqu5if9g9S2cI%2BFNioU%2FetQsAcvsgA6Dsd6WYmq6ijtZJFvRHV%2BGttl4jHXh2nXpP1ljf4fG3DvUmFbawByTg0kgdtxLeaWgLuyYoWiTeUXaWDMgQg33IsHu5mg2nKMhIwSRgwXRa3WVK2GqAeoGzv1D3FrIB3BUJ2QPSJFQp0xAgCQLlQC3HvREMvgl5YxeIaVwpAbRfAYGfzI46B7I5oxX%2FiUL1Eo5SIyF8mdTKlty%2BJKZHzvGgpZVor%2F1z15SxiFsBc%2BONQJDUyDUlReM%2FlFr1wAhRZJJDsuJEtqUTNoJfDN8IePnnplfQooXOcDDM%2FPibbTwizLxZ1uFoIPyKZ9fZcF2pPiBAF4TCIdzcxHXeNNmtg6xvJ6DDv2pS%2FBjqkAUgIPgc%2Bh0j2Rp1oxQ1duecuXLdhSjXZ%2F2rqbDFlBvhyUtkEqH6RqjFIDmn%2BeJNxVpVQrwlqIcyHlFFNhBm%2BDZG0is9%2FRzwOOOZjwC06nkaRFDBTCzhF%2F14EWRSsi6tiWVlDgMMSEuxV2zgO%2F86INw40Ym0r%2FwO7uZDNowfavVZSVMPvtGk%2F8gNBmwjPQgvRrqJ38YcC6l09GtniHfcQQM%2B6pUMQ&X-Amz-Signature=58b56e1004af8b849a7664f59566b8146d95fb63c565965a03814948caaa7c88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A7QENJK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWie2mQ6ic8hM1naBFuf26R5mtr3OtlQo%2BWWpDTRPb1AiAxIBUr6DFjD79ChjHv%2FwUh1lZLd7ZrXcGOhDhPrZWqjir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMDVure2muIb93byiLKtwDeSWxkJOz2rQbGgLK76b8ymSvXKKl%2F0BuHEY8KMtTUctpq1RvrU01Y0%2BhcdkEiRT4R1VGQJne58v%2FBtOh3XwtEZL3c9vn0FP3QCHP4D4n2blMl4MR%2BGXUQtaKN7C%2FYJBSkF3tsWSQ4CR7SrE7M%2Fo%2B%2BHN7vUvhq8dUBoWW8e19aG%2BpCSoJwiVxN5rILyTaqjQsYpSsSPSEG7tAL3bnsRpVgIwSunjMelqzjy%2FjQNP%2B02w7BIIgcHZU9%2BN3T5BjAy9Re8ZZrehlSe%2FngX8Hn%2FfghAhB9WUwfT8SNgyCjh%2FutpZdPIzntQuyGUJgLZ0m%2Bi9ovRdts%2FaPtIgiRg2rKQDdxUQs1GGlouqrO0r%2BCRzIjLEmJZNq2JvkGmHU65aM%2Bx%2BFgRmeDY%2F2z4zYWu%2Fq4oWt%2F8HH%2B5YFm6ux0xNct4qHpgA3c2y4h9k6sFp6wkRo2IvJm1T5lcc4g77z1YzPxutpFsTV5zqxwjJZTLM5zcJa7uCnKhuRs3qnMcPQurVTAJQnNPmm%2BzKaPxTw6UA9IFg8J5FJEYHh3VIyZRNPFIIwbphG2Dk7c9xE1lK6I7n%2BJE1VGnKZhZkW7rmWdogxUWyoICv%2BlFJazVB9eqY84RYU4xpZGlxBSML6gKLSBbEw7dqUvwY6pgFRohBtFN0%2F7Ay2wIvZuLqNdWXEtVduOjc2gzWQuHq9%2BcVMXQ0EPCa9JdFMUUuFZs5E4ADRzmF4BjuMwJ7%2Bnu8EVMrEKrU1n4JlffmFxfG1qMAevZo8hzlw8O4TMvPXXuAQqVI4UQCdvaHuDYa0Pg6IxykBHm%2BQvtuJqNoXMdDEyzOH4y3OewqWnqw7plBfimeinYXqxKqGAiAxt5SEodZ%2BbLTe2bR7&X-Amz-Signature=85267962c57d994361d328f00cda6d260b84de3d8057e8b302e4dae415e9408c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
