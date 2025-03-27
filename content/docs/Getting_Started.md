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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466454FUSNP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCakCuE%2FM%2F7BKYuF64g4K%2FDxiouvLRFCG685JnI5S%2FcsAIhAMP4yIqlFE7WCEIayRfWNbTc1nBAHAaQl2a0uCRw1PRzKv8DCDsQABoMNjM3NDIzMTgzODA1Igwd1rwPp0wMfYjvqVUq3APeYy8pfEv%2Fy%2FmIfk0%2BZOvTgHm48AWeVsFbNSTuopMRz2JjUPIyqJHBEUjnFdP3Bhd2GPhkjddPd0y43A7LY13%2FgW9Jh6eq3VjvqS7WzmXWvwnCMeM7sgrr7k4QuF%2BLMQzj3gQlMM1CzswCjP8zqRNRoUFCl583i2s0P%2Fz5oqYMzFWDn1G0KBw46zDmz8%2BSepWG0sDEWaARNwCZVEU1lmqV2%2FyhDGhXQEaG92jiaM2noi7OKr3DbIezDZCLIP1icO2ZMGbautXaYHNBcdgXcJ%2BSU886929hupBvMOfSzkmfR2%2FpnHYpILkPXQt41GrT03rVrJ9%2Fgaid6LQ4yNg7rTrznxMrnj00%2FchPzSrVSMErSpaMo1PBHywwFk6MeM0F68z3StZZ1soNtdqLg3dNmhoP2lSCWYEzsQ6BDwMc%2F0%2FO0oSPKfHzuwa0I%2FVBybGMUFnRD0kBYqzTw1N8Hx27Ywq4NVIn7otKcp93BMDvMvqc%2F8tvVg%2FiYkapT9FH6aoDQ31MuLM6ORK9HjLyID6%2BLAy5afrJKCYx1jyLAwiU0uVc4pL1sdwBhVZpaL9Sm3eGyITx1IjbNQABMAjktXsc80rl2hvHLqYmV2ZyykFVjZUOpiO7oJK1XiM1IZJMWzDI7ZK%2FBjqkAXLH1RztvZ0lnryZPUnhkbUq8RX%2FsnVO7I8UOzYKyNnCMEBBeVqAav0hZ5jLnKnxr1mwNeLsYksHJ6pxmJZsJGiGH6Lu0vlQ8PfMxeu6zA22cQfil6u0D7LtPgPrnR04hlDHGtGRCnOr66GAcEvQkuNeuXqs1tSxJ2SD20LEnaUhz0SSViPha2aXXmhUouQBXCgxdqM4jfScEfGj7oFXwaD6bdj3&X-Amz-Signature=845d3471dc3dc6b1ed22a2fef7be1cab6b0101873aa686a7387d90d3b322ccd4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466454FUSNP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCakCuE%2FM%2F7BKYuF64g4K%2FDxiouvLRFCG685JnI5S%2FcsAIhAMP4yIqlFE7WCEIayRfWNbTc1nBAHAaQl2a0uCRw1PRzKv8DCDsQABoMNjM3NDIzMTgzODA1Igwd1rwPp0wMfYjvqVUq3APeYy8pfEv%2Fy%2FmIfk0%2BZOvTgHm48AWeVsFbNSTuopMRz2JjUPIyqJHBEUjnFdP3Bhd2GPhkjddPd0y43A7LY13%2FgW9Jh6eq3VjvqS7WzmXWvwnCMeM7sgrr7k4QuF%2BLMQzj3gQlMM1CzswCjP8zqRNRoUFCl583i2s0P%2Fz5oqYMzFWDn1G0KBw46zDmz8%2BSepWG0sDEWaARNwCZVEU1lmqV2%2FyhDGhXQEaG92jiaM2noi7OKr3DbIezDZCLIP1icO2ZMGbautXaYHNBcdgXcJ%2BSU886929hupBvMOfSzkmfR2%2FpnHYpILkPXQt41GrT03rVrJ9%2Fgaid6LQ4yNg7rTrznxMrnj00%2FchPzSrVSMErSpaMo1PBHywwFk6MeM0F68z3StZZ1soNtdqLg3dNmhoP2lSCWYEzsQ6BDwMc%2F0%2FO0oSPKfHzuwa0I%2FVBybGMUFnRD0kBYqzTw1N8Hx27Ywq4NVIn7otKcp93BMDvMvqc%2F8tvVg%2FiYkapT9FH6aoDQ31MuLM6ORK9HjLyID6%2BLAy5afrJKCYx1jyLAwiU0uVc4pL1sdwBhVZpaL9Sm3eGyITx1IjbNQABMAjktXsc80rl2hvHLqYmV2ZyykFVjZUOpiO7oJK1XiM1IZJMWzDI7ZK%2FBjqkAXLH1RztvZ0lnryZPUnhkbUq8RX%2FsnVO7I8UOzYKyNnCMEBBeVqAav0hZ5jLnKnxr1mwNeLsYksHJ6pxmJZsJGiGH6Lu0vlQ8PfMxeu6zA22cQfil6u0D7LtPgPrnR04hlDHGtGRCnOr66GAcEvQkuNeuXqs1tSxJ2SD20LEnaUhz0SSViPha2aXXmhUouQBXCgxdqM4jfScEfGj7oFXwaD6bdj3&X-Amz-Signature=ac8f800add9158b5d2a68a8dd225742ac4ab29d79ee38b1d8984aea4c936fdbd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJOWRDZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1PYp1anqjELrzH4Tj15Q5eMCIIzmeEkal4qfpfhwEMQIhALqLrLIlbBfmB0HYyF8Ns%2BfKQ6CJdQyQKPBtX9%2FZWH%2F1Kv8DCDwQABoMNjM3NDIzMTgzODA1IgzgKftPl4fSN7JNe6oq3APN6BirTe%2FXPuTlS9tb3f9SLm5W5U5fI%2B4ealoZuGfBC4fbjA0e1vbkQcIckJGJqljrMpWoLKplT%2B2fSV49IC1m1ZHvVH7rOZsGOV1VBZLvFmqYFzVZt3Nglfw4LRdjDhflYgJjor2gibIJXJy1NHfXLANHqiDyFCGUfnKry7bO4UIe%2Bv4Zl9X6sJQ1XttpSaHXRUER6crcAY1nss1MqN3Yv73oUXzBVYItOQx2Fq6ipL9n05XjPr5W9qAJSGFbiL7XI5R3TDZY796Q71FViSm5%2FS%2Bf8C1C7nvO0neGJUDX%2BN%2F4%2Fzskt59f5L%2FkU6haT9s4ShWYlszEhEe8ZeDF%2FSXvNrzPDC8JmrqSrvxaZUhXsy258sE9fInmrx4oY%2BrZWV77C4hHURU6R2qieT7RpE2pCULsTRYSmsfNhfjV9cR3POKnDfhOoBRJZVcnk9uzvLF035hkM18sCUZEfu4AmbwPj8zuBG5RvBOZQGDuqUJShA47Y1V20ink8tKof%2BbxOh2LWJ9Dw%2Fh%2Bc07xULbQ%2BIYRvC388m%2FtVQf%2B5Zm%2FGNeoIRo1qVaDVQLr4XMrkpeXaU0w8esWpA3mYaJfdd6%2BsVbLna3IrSS5NX6aP4uhB2rdqAPx20Xy5P2%2BDtJxwDDc7ZK%2FBjqkARf0zFyVGxO%2FxnKEK6eZ5GG6AH%2BN8dZS0gLbYQ20AQPPRqAYRpKfuG4mDyR2eN6cAxVmsISHJT3WPaH6bF6eh5dYWRptpEPPK%2Bb2i3iviZ1lfcvC6TWiZP7YgG1TDEbptym6qDd0JRyLgGQPCH3UmAnG3BnndDD0ijDJNjnaGMcDQfi7p4KWkZ1LXm%2FphN01xVQVzwNHjA%2FVa5LpuTK4VQTRGF%2BP&X-Amz-Signature=4e0af308ab5f83ab8a992c7ad574d767aa3782ac3bf3977a405a05f9aebc609e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646I7MGP6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZtZVoHsl5vzh9cPgIwzDAWSZdXAlNZXBtj13B3scczAiEAvzBtwXXXnvRljLKyk3SAYbvVnT%2FhqAk%2BTHKVf9rniqEq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJUb8AaQxhfohtfgOSrcA8pUfBrcwbnAwBsWdioC5YEloaGAbHZqa0HpEnFJxCDIQkpJpdKVjvXuWD8mSP6aoJ0DHPxfBUFPYuDHoFRXlqevxWTbcOh3AG%2FWA%2FffMYH18ESnchdjBLkro%2BnGmTFfTAXomY2e58pyHZSEFgxyat3y7jiGaeBtL6V561zltRcW3BbCDIl1lsSMgxKYmBfLYioonlaSRWBfy3LxjBEjMhikqSco7anJzZQbr1LiK8HwREY0wipQrGAegXyohbK3eBUqQwSl7DuB9QKj7m5zn%2BjoWhl0sx5Yx61rdVjyWybizslGqwBykSOXwCagf%2F7VFHjwTwG9B57Kff41Em%2Bkfv9VWh6tshCNu99yYDMq8oxuqN5SIUaDAulvYfilRG6tdhys9X5HyLJx6as%2BpCghkSuB3F9ZNNq%2BqQbMIwYiwp41uSLnYreZVkfvPyoMUXbe9TfOGzpL7zhkfzsiWbUwaiHjQghBUNXrWF%2FVC%2FlUd3P3hS%2B%2FT5QIR6LEG7LZpuh944zm%2FXVXevY94ydO8XSIMfgXyAyejiniI4%2BM6p52aDzwC9ovSgo1V8PsIgA3M2OLgW4ilGUh8zvfG6wEnyo07BgolpBXez%2FaJCAd%2FhZpxZikxSVf6sZoEhKoHvX%2BMKjtkr8GOqUBMBVelytJ2oXJ0XfVycWvlfcmS0V95PRDXIQUdP4vwjA2SlpbxnZ8XveZMaJTDZbIlwde6RTKwTaWlSob8BhWe2qW0%2FJj9dHimT4Y5p1%2BdsXfx3jNBdgqRzj5ipPOvZjCqBL96zcDCTcNqv1TCXD0e2lZpX7qQ6MEYJXhDnDAAXpBsW2Fs79GYqbJyS%2FfNebPLQIqJ0YmZCdJzXBpLHgLFhexdAV%2F&X-Amz-Signature=f0220150400d14dd4424c64d4695057115440f20e31f421effaaff63d75115e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466454FUSNP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCakCuE%2FM%2F7BKYuF64g4K%2FDxiouvLRFCG685JnI5S%2FcsAIhAMP4yIqlFE7WCEIayRfWNbTc1nBAHAaQl2a0uCRw1PRzKv8DCDsQABoMNjM3NDIzMTgzODA1Igwd1rwPp0wMfYjvqVUq3APeYy8pfEv%2Fy%2FmIfk0%2BZOvTgHm48AWeVsFbNSTuopMRz2JjUPIyqJHBEUjnFdP3Bhd2GPhkjddPd0y43A7LY13%2FgW9Jh6eq3VjvqS7WzmXWvwnCMeM7sgrr7k4QuF%2BLMQzj3gQlMM1CzswCjP8zqRNRoUFCl583i2s0P%2Fz5oqYMzFWDn1G0KBw46zDmz8%2BSepWG0sDEWaARNwCZVEU1lmqV2%2FyhDGhXQEaG92jiaM2noi7OKr3DbIezDZCLIP1icO2ZMGbautXaYHNBcdgXcJ%2BSU886929hupBvMOfSzkmfR2%2FpnHYpILkPXQt41GrT03rVrJ9%2Fgaid6LQ4yNg7rTrznxMrnj00%2FchPzSrVSMErSpaMo1PBHywwFk6MeM0F68z3StZZ1soNtdqLg3dNmhoP2lSCWYEzsQ6BDwMc%2F0%2FO0oSPKfHzuwa0I%2FVBybGMUFnRD0kBYqzTw1N8Hx27Ywq4NVIn7otKcp93BMDvMvqc%2F8tvVg%2FiYkapT9FH6aoDQ31MuLM6ORK9HjLyID6%2BLAy5afrJKCYx1jyLAwiU0uVc4pL1sdwBhVZpaL9Sm3eGyITx1IjbNQABMAjktXsc80rl2hvHLqYmV2ZyykFVjZUOpiO7oJK1XiM1IZJMWzDI7ZK%2FBjqkAXLH1RztvZ0lnryZPUnhkbUq8RX%2FsnVO7I8UOzYKyNnCMEBBeVqAav0hZ5jLnKnxr1mwNeLsYksHJ6pxmJZsJGiGH6Lu0vlQ8PfMxeu6zA22cQfil6u0D7LtPgPrnR04hlDHGtGRCnOr66GAcEvQkuNeuXqs1tSxJ2SD20LEnaUhz0SSViPha2aXXmhUouQBXCgxdqM4jfScEfGj7oFXwaD6bdj3&X-Amz-Signature=cc2a5273886e5bc483c3ee94c72f4f38be760df288d626e55f28536e2d3e813d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
