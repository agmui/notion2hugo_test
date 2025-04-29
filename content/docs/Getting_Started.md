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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JW2YLUO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE70hL6J4cM7Rb%2BxLj0jeEqVL7eZrDAwbLO8v%2FVeV6RAiBx24cfSUh9q3Aol%2BupLfJUClPOx%2FyS8zX1NMQa5AnIXiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmIPGRf8gm%2BZwTNhNKtwDZZGYCxRlb%2F3czMust3ja%2Bhe6hZE9i2B8dibW3FvQJGdLw%2FF2cODvAT6%2BVEtOfXYtRJLqQ7FDBgBm6oQdTZVpBRDqmHreYbWf4auk8ETR1fXawyNaE%2F0zE%2FGWw4VblW22afp05ZdugJuGKhDkcEjrrxyarJO7FYEJexWEQKw44me0T84T0P1Y84urcnZJDERqjDsK6tkiKamka5vBTqmyl3JC6iirCFCr98z%2B%2Fhh8NqIGL0IPbGcAA%2Bv%2ByUIdfOWpfO9M17II7U5gL2AG7qhmuQ%2FnHry7HfbRYvIrUkHaYqa2t%2FYq6huV%2BrfqHHJTYJBPImCoC02wIY2CNdTVEGkCMRf8MDVwf%2FM0O6kkQPRdKiQuMlHbMcsS%2BYJSFxIiNRabWlpOMpYO%2FXJTjJeuCO5zbgidDG5fnF4UQBpnSCLysJ95aPThhnYw%2BrXsqxrmw9pKzxBuNNGDevzAIEjjJXzY7PHwkbfatV0Y3Tub2L6zW1ZI50lAKVbOxhIqfpheFdR6vik70P3nppbJ5mw5EBYRQPKTckHhWcbXTnrlRyp%2FgC91V3roz%2B3VRhyVx0IU%2BBkYpdysBr3u1pEm8EJbO9Oe%2B6K56DF496vc9EMXVGznylxVaJDowAUmcgXe1eUww4vCwAY6pgFGF97XbMMM2b8XM0qzjB6CNPMoyIergoM4OLZmE7L4jbRgzIpaY5NuXXtS07hTLrbeMvUWQHDOyiGfCSnWHThKtYlAhKxhwEaUa1q5Zium8tO%2FcyI7n%2FcpfRpbMv8iTSGdwtbbSnNc%2FrfyaQFhAbxDow3Hi4c0UpmTUX2BSs9S95qlj5yENYiGxTe8iL6%2FOwIH5bnFrPuIyg%2FB3%2F5FPuj%2Fo%2BE0vDuD&X-Amz-Signature=24759a7c7eaee426b697017956e80a0c7124c42f8f5b4d376cc319ff21ab63c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JW2YLUO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE70hL6J4cM7Rb%2BxLj0jeEqVL7eZrDAwbLO8v%2FVeV6RAiBx24cfSUh9q3Aol%2BupLfJUClPOx%2FyS8zX1NMQa5AnIXiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmIPGRf8gm%2BZwTNhNKtwDZZGYCxRlb%2F3czMust3ja%2Bhe6hZE9i2B8dibW3FvQJGdLw%2FF2cODvAT6%2BVEtOfXYtRJLqQ7FDBgBm6oQdTZVpBRDqmHreYbWf4auk8ETR1fXawyNaE%2F0zE%2FGWw4VblW22afp05ZdugJuGKhDkcEjrrxyarJO7FYEJexWEQKw44me0T84T0P1Y84urcnZJDERqjDsK6tkiKamka5vBTqmyl3JC6iirCFCr98z%2B%2Fhh8NqIGL0IPbGcAA%2Bv%2ByUIdfOWpfO9M17II7U5gL2AG7qhmuQ%2FnHry7HfbRYvIrUkHaYqa2t%2FYq6huV%2BrfqHHJTYJBPImCoC02wIY2CNdTVEGkCMRf8MDVwf%2FM0O6kkQPRdKiQuMlHbMcsS%2BYJSFxIiNRabWlpOMpYO%2FXJTjJeuCO5zbgidDG5fnF4UQBpnSCLysJ95aPThhnYw%2BrXsqxrmw9pKzxBuNNGDevzAIEjjJXzY7PHwkbfatV0Y3Tub2L6zW1ZI50lAKVbOxhIqfpheFdR6vik70P3nppbJ5mw5EBYRQPKTckHhWcbXTnrlRyp%2FgC91V3roz%2B3VRhyVx0IU%2BBkYpdysBr3u1pEm8EJbO9Oe%2B6K56DF496vc9EMXVGznylxVaJDowAUmcgXe1eUww4vCwAY6pgFGF97XbMMM2b8XM0qzjB6CNPMoyIergoM4OLZmE7L4jbRgzIpaY5NuXXtS07hTLrbeMvUWQHDOyiGfCSnWHThKtYlAhKxhwEaUa1q5Zium8tO%2FcyI7n%2FcpfRpbMv8iTSGdwtbbSnNc%2FrfyaQFhAbxDow3Hi4c0UpmTUX2BSs9S95qlj5yENYiGxTe8iL6%2FOwIH5bnFrPuIyg%2FB3%2F5FPuj%2Fo%2BE0vDuD&X-Amz-Signature=58c926226cc9235c517bb74bee244229c5f1ff7610488948a94c8d3d44237775&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJA3YLY%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCzuOxJ8H%2B2tN5zn6SNvfXAzZ90Hd96yv%2BbKqvAaJSE9gIfZ4kg96MVPhQ9PhAn6uywdwdxOSYvSJXezoGJJh5DOSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkbdg6TzzRBPdotPQKtwD%2Bw5BVpMUBYCBtIV%2FxDB0LgKAeEmIjAVvUJc11lRT1NS2DaQY4YXr7DFyRyjOVh9s%2FbbjnOu%2FO2XPeRWca4ALxAqbNidjXmgGJJBTYjKThbsJQ9NHytw4lJagPFEwH7pSAo6hB5RhfFVuWux3yuQIAOSdyUBpcUOLQAVPIMvAxLgKY9ZNyWnJTw7s2JXEvAbl2r3gOe6MdKEAGadb6zoOiO6oh2ZVPqTvE9zoIbWtTLtyVkZj5H7c%2Fa4hA4YyeX6kUOnIlgLIA94OB1ZGqQEUimtXKQAXPBz3AD7%2BIPtJhwliWs8GzcFwdrbYf7saGj5Tp%2FI1DMkHr4DYliEn0F6v1qAUHn6Zju02zTC6dzQqDcvltVmZM5GAzc0TzNlYNHhTSucDRez3QOPYGTko7JONSLCvrBx4OuXce5YCr%2FPVcoT8vUZBDLJkjRwC02DPk8asOGP2VDG856CVyJJTvLW82KDy6sQ3te%2F4xYH0%2FQQ4OBNdWB%2F9e7%2BEAy74jxzFjGQ%2BwjoUJjtJ90M7J8qYn9i%2BpNGsTboi86bSHnNV2rc24MjTkkBtJf84gNXpsh3KuCE5TTOubyz8ogQ9z9PuBEbJ4hrZKEw%2BQMbqTM5lFvGTa4MhsKfXOGuPr4vrbIcwlIvCwAY6pgHR4aB5v%2BYnaW%2BAe3u7iyru3Tw6bqZ7X1ZpJewpcpBOCaZfJjmPajh5djr7LMMBd%2F2PwYkDIwJkhwDdpz6UxW6JW6cZBA75eMawyAJmB9qMm7fwqC1Po5AP5a3JWKX8Pu4rtuje3GNGuosZrWsol2ptqvCy4TJvUTZkx9kupkf0KptRzN3zHZqM3sThUAsiKuSvRe4aUY6P%2FrOJXMOBwShYCpcuw1s3&X-Amz-Signature=0c8570ab09b9ca5168879a4e24c02559fcb1269c6f84fed96ffd535137bf061d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XMUWIIE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhHq4oOUQ8rGPaqJAeo9HhbjvWXOZG1bcJfwn8folCHAiBgt5iRTfeeXspUvxQOwa%2F0zpUy31EDQXdDwYSZ28fgJiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN4woSnkPtHVR1ArxKtwDwHz5mgBoIvErZkBTXeS6qJ7IKgI%2B4Ne7ip766KiO0lNRM2KJpEGSklGnFRP%2BI6kSmNl9ogb6egLXs9usGTH4lAudnWQUbCJn5GKLAdn%2BiaZClrkAB%2FtQA7gC3iAos4OLsXtIVQu4iiA7ln%2FB8GbaxPwPiwlkxfJiGeeVRihLxjabUxU%2FYBkxMSyP9RonvXsg1i3su8EghIS1%2Ba%2FK6M4GQJFsOIwchrpIEh9KbYIlsfmi77tAYTBeIwZ9Z6RNBFAwfr5Ghxj8PgJunH3mt87Pz%2BIl127%2F0nEiasnjfSZqX%2BNLlVSlXsF0qqT6QyLrwbsI9rrMrgPzjgXolWrMgy73qqg4ezEKV5Om141ozCyaxs3OMHf5CWxSe2elv0oYiAi1%2BR9pnvN9W%2Fy6r3dHmW5Xy%2BnJVjaXS%2FMM%2FCzgY%2FOPtqqZHLl%2BXTWICw9G047TqiCj3ynykG6Q4Luji0mDvOUyjnsBRRuk1a4QnnpYNFer3dcMJ%2Fl7o5YsE3GmEppC1Rl62t6tLd4%2FYeoATbe8gwOiAaxLnGDAQzf3%2BholglXqz4E5WLuJW7488%2B7KbeWdTnj5MEp%2F7jiPjX7i2c%2BEYPzx3M2LWx1KGoZwcEiFJnG4DVI2%2FmDmaHJ61Z%2B3E3Uw7ozCwAY6pgHYc8AX6geyC9Ru8eu42GuTYwAdlspIqORY2tL3ihGWSD026Q6qeqmRprTqJWPSKAHdYz7ytap1DiYsq4k9UIyW4wzafVI4fc3SGf9zrOBMjkZ68%2FcTBuNufUYFwsgz9q19IZhBjlibIxCvnrMNys8RIw0hZb38Zlt0d4GH3ClWDJzApOZ2j3Y10wfsYAv9uTOf3aWFXFe5Rc9%2BTGDqj4V49apGMRSD&X-Amz-Signature=58483c468c06a2a7cdf12e2f27c668727119d3e7284f8889869f86174588f4e3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JW2YLUO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE70hL6J4cM7Rb%2BxLj0jeEqVL7eZrDAwbLO8v%2FVeV6RAiBx24cfSUh9q3Aol%2BupLfJUClPOx%2FyS8zX1NMQa5AnIXiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmIPGRf8gm%2BZwTNhNKtwDZZGYCxRlb%2F3czMust3ja%2Bhe6hZE9i2B8dibW3FvQJGdLw%2FF2cODvAT6%2BVEtOfXYtRJLqQ7FDBgBm6oQdTZVpBRDqmHreYbWf4auk8ETR1fXawyNaE%2F0zE%2FGWw4VblW22afp05ZdugJuGKhDkcEjrrxyarJO7FYEJexWEQKw44me0T84T0P1Y84urcnZJDERqjDsK6tkiKamka5vBTqmyl3JC6iirCFCr98z%2B%2Fhh8NqIGL0IPbGcAA%2Bv%2ByUIdfOWpfO9M17II7U5gL2AG7qhmuQ%2FnHry7HfbRYvIrUkHaYqa2t%2FYq6huV%2BrfqHHJTYJBPImCoC02wIY2CNdTVEGkCMRf8MDVwf%2FM0O6kkQPRdKiQuMlHbMcsS%2BYJSFxIiNRabWlpOMpYO%2FXJTjJeuCO5zbgidDG5fnF4UQBpnSCLysJ95aPThhnYw%2BrXsqxrmw9pKzxBuNNGDevzAIEjjJXzY7PHwkbfatV0Y3Tub2L6zW1ZI50lAKVbOxhIqfpheFdR6vik70P3nppbJ5mw5EBYRQPKTckHhWcbXTnrlRyp%2FgC91V3roz%2B3VRhyVx0IU%2BBkYpdysBr3u1pEm8EJbO9Oe%2B6K56DF496vc9EMXVGznylxVaJDowAUmcgXe1eUww4vCwAY6pgFGF97XbMMM2b8XM0qzjB6CNPMoyIergoM4OLZmE7L4jbRgzIpaY5NuXXtS07hTLrbeMvUWQHDOyiGfCSnWHThKtYlAhKxhwEaUa1q5Zium8tO%2FcyI7n%2FcpfRpbMv8iTSGdwtbbSnNc%2FrfyaQFhAbxDow3Hi4c0UpmTUX2BSs9S95qlj5yENYiGxTe8iL6%2FOwIH5bnFrPuIyg%2FB3%2F5FPuj%2Fo%2BE0vDuD&X-Amz-Signature=2157e9db6cc6af7a70894bec3d6867f30ada3645f54d6c732984ac72f422187e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
