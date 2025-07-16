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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FV423PC%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDiuTKk3Q7eLh96yJQ9ihvaBdIO2pZ1g0Rpnm7BOqyJAgIgJwA3lpDURcZsGMg57ZLMlfOjKxnKR7McVTYPTxYc7V0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOE6xv23n9RcRGUoFCrcA4rLz84uRWkrvXiAHg0u6QbfJC%2Fhd%2FJMrVVoBZ2RvxxXEpCwqQoXA8t92YdipuXovhCb%2B69qr5N%2Fvky7fgDBxy1lJcXI8ehYL0NnsuFdH3ot4p%2FGI2IoCgwvwTmO3s3A8jrgGU%2BybABxI%2BqdMnL24%2BYKdSaX0SictoHbb8KUmzoIBOv0PVgVR79ExuB%2FYGpk9ZVzFlPUDbccC7ewReyhvt8pKbewpBWl%2FqAPOV3pFxDNi2U0WItV9DWIeLQQmLMg0dl%2FZc3zlXTIoRyRSzPFy2uy4LZ2i6JE80jHMlPSmIk1TUT1Uz4C%2BBtX4pF9gqOW6dFy372CH2427s096aoclXc1OIVTimJdLkgOGM9wie2hx0H8dDiBsv0dTg71Hsgrz%2B2bFvB674tUW6B3T4ICQvZGT%2FxZRX2dkHrjcGUU7eMlnfsBfd3O2w2ofS09JrXJGZFiAqlUrrqFOQrhqlVyz%2Ba7AvOIjM2hcnKYmOAnO15y8QU0bCh5WGjHjXEDONJKy%2FZY4K%2FYRvAVYG%2B%2BAiMubewElAzdwIHfi7Ba1aIj6CJ%2FDIVe5U%2FoVBGLHXyZ2AlobQVmJUAUhiH4hTtJB8IsWqYy8TLaaTKMbLSZhyjIbq16Sz%2BqybOr4NNUGHKsMPWu3MMGOqUBbzwEBn1OjH0wbj%2BUZPZrwxcZRzmN9H7dtmBdY8CPXVU%2F5PnS%2B3Vrr8cgBDqLOMQ69DTeaEU4Za1ZxreH9neaS716XwK4bMN0R52xIonTFkG6yNUT38tLeSdxvNFKfrT%2BI%2Bd06cQCY5ULICtBddKEAE6xnFGCNTrPYxE%2Bwhizw2PZEBKAnEtlXK%2B5XannmcRQjo%2B%2FowTmO1WnAuRN9QGkAts2WNvF&X-Amz-Signature=d6d45b5b699268e299de85c9a50b23e237878ce6d8df34d632a1f4174c74beee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FV423PC%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDiuTKk3Q7eLh96yJQ9ihvaBdIO2pZ1g0Rpnm7BOqyJAgIgJwA3lpDURcZsGMg57ZLMlfOjKxnKR7McVTYPTxYc7V0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOE6xv23n9RcRGUoFCrcA4rLz84uRWkrvXiAHg0u6QbfJC%2Fhd%2FJMrVVoBZ2RvxxXEpCwqQoXA8t92YdipuXovhCb%2B69qr5N%2Fvky7fgDBxy1lJcXI8ehYL0NnsuFdH3ot4p%2FGI2IoCgwvwTmO3s3A8jrgGU%2BybABxI%2BqdMnL24%2BYKdSaX0SictoHbb8KUmzoIBOv0PVgVR79ExuB%2FYGpk9ZVzFlPUDbccC7ewReyhvt8pKbewpBWl%2FqAPOV3pFxDNi2U0WItV9DWIeLQQmLMg0dl%2FZc3zlXTIoRyRSzPFy2uy4LZ2i6JE80jHMlPSmIk1TUT1Uz4C%2BBtX4pF9gqOW6dFy372CH2427s096aoclXc1OIVTimJdLkgOGM9wie2hx0H8dDiBsv0dTg71Hsgrz%2B2bFvB674tUW6B3T4ICQvZGT%2FxZRX2dkHrjcGUU7eMlnfsBfd3O2w2ofS09JrXJGZFiAqlUrrqFOQrhqlVyz%2Ba7AvOIjM2hcnKYmOAnO15y8QU0bCh5WGjHjXEDONJKy%2FZY4K%2FYRvAVYG%2B%2BAiMubewElAzdwIHfi7Ba1aIj6CJ%2FDIVe5U%2FoVBGLHXyZ2AlobQVmJUAUhiH4hTtJB8IsWqYy8TLaaTKMbLSZhyjIbq16Sz%2BqybOr4NNUGHKsMPWu3MMGOqUBbzwEBn1OjH0wbj%2BUZPZrwxcZRzmN9H7dtmBdY8CPXVU%2F5PnS%2B3Vrr8cgBDqLOMQ69DTeaEU4Za1ZxreH9neaS716XwK4bMN0R52xIonTFkG6yNUT38tLeSdxvNFKfrT%2BI%2Bd06cQCY5ULICtBddKEAE6xnFGCNTrPYxE%2Bwhizw2PZEBKAnEtlXK%2B5XannmcRQjo%2B%2FowTmO1WnAuRN9QGkAts2WNvF&X-Amz-Signature=83bedd6f8adfde3ff9bae039bdfbe16bfda8c1f6146877a03541b2f77cd154e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FV423PC%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDiuTKk3Q7eLh96yJQ9ihvaBdIO2pZ1g0Rpnm7BOqyJAgIgJwA3lpDURcZsGMg57ZLMlfOjKxnKR7McVTYPTxYc7V0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOE6xv23n9RcRGUoFCrcA4rLz84uRWkrvXiAHg0u6QbfJC%2Fhd%2FJMrVVoBZ2RvxxXEpCwqQoXA8t92YdipuXovhCb%2B69qr5N%2Fvky7fgDBxy1lJcXI8ehYL0NnsuFdH3ot4p%2FGI2IoCgwvwTmO3s3A8jrgGU%2BybABxI%2BqdMnL24%2BYKdSaX0SictoHbb8KUmzoIBOv0PVgVR79ExuB%2FYGpk9ZVzFlPUDbccC7ewReyhvt8pKbewpBWl%2FqAPOV3pFxDNi2U0WItV9DWIeLQQmLMg0dl%2FZc3zlXTIoRyRSzPFy2uy4LZ2i6JE80jHMlPSmIk1TUT1Uz4C%2BBtX4pF9gqOW6dFy372CH2427s096aoclXc1OIVTimJdLkgOGM9wie2hx0H8dDiBsv0dTg71Hsgrz%2B2bFvB674tUW6B3T4ICQvZGT%2FxZRX2dkHrjcGUU7eMlnfsBfd3O2w2ofS09JrXJGZFiAqlUrrqFOQrhqlVyz%2Ba7AvOIjM2hcnKYmOAnO15y8QU0bCh5WGjHjXEDONJKy%2FZY4K%2FYRvAVYG%2B%2BAiMubewElAzdwIHfi7Ba1aIj6CJ%2FDIVe5U%2FoVBGLHXyZ2AlobQVmJUAUhiH4hTtJB8IsWqYy8TLaaTKMbLSZhyjIbq16Sz%2BqybOr4NNUGHKsMPWu3MMGOqUBbzwEBn1OjH0wbj%2BUZPZrwxcZRzmN9H7dtmBdY8CPXVU%2F5PnS%2B3Vrr8cgBDqLOMQ69DTeaEU4Za1ZxreH9neaS716XwK4bMN0R52xIonTFkG6yNUT38tLeSdxvNFKfrT%2BI%2Bd06cQCY5ULICtBddKEAE6xnFGCNTrPYxE%2Bwhizw2PZEBKAnEtlXK%2B5XannmcRQjo%2B%2FowTmO1WnAuRN9QGkAts2WNvF&X-Amz-Signature=6abe042e24155aff83097075f9dd4e8c6c14f50024970fa5d99386be7d39d55f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DKF7334%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFo%2BCXqhcyZPwq8mMpVt9zknJmcikO6CYnsPNhbQ%2F0lTAiEAkf%2BpQIbxfXQ2wKMTY9sTKgp%2B6JAeynzM1DMjm5SVvwEq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMXK6GBANqzDEZaLOircA%2FvxY0dNC8F3BJ3MCWr9Z%2BVN67oAQ0YxdyAg60Njk4QB5O6q2OGhrZp0IbMkFSwwp270mZlN%2BG7dUJx7qlH4zLFkgSdE4Nu7INuCl9ommKQgBFYRfg0gtEp51PFKm0%2BUTJIcvvOIGj%2FOiUw6QwYsmtOiTZdHwZPBq%2FaOMkzPn5ZM4r9hC2%2FL9anyiEMHQ%2Fb7hndcdxOXre9VLkWQBx9keCsVzjdo8wvpzvAbGpJwnxMzqBKxahjyVjT3i2Sl86I2hE56JF2kpf5ogo4BlSXSrB13oT69A4A4oEwBy196wkp6JsslAVStb20p4LQnOyqdmRf0VJQWRMq23lZcAE45QXZL5hnzu2TR2txbCIBS8Ew%2Bqb5CXuCBdVTaXNdHyT1xHkfYY%2Bue%2BTcDxl7CqczWoy8xJYi7Iwdz%2Bfia6hpgh9tlvQ7a%2FTZX5ecouJ4iV0XsDNsLXPqdyVbhK1Hyd0T3o0GfsSRRENm55TcWHYZ9OQ1YEBd4Kx1d%2B1VA49heXnTXiLMR7VjaMe7Qb4t66jrA%2FxjFlAKMgGHgERRjSx4hV80KrV9b2Ry6Vn93oE0%2FRk5HzMZT1vf0CC6kcuUj%2FBjDL243SngYF9haceCwzBbp25Vrhbuua5wLCL69tRolMP6u3MMGOqUBdenQhniVbpqLOYa0P3Efhrn6DRnE2DfNbnReRJhw0GgBY9aOSRtokdtQJMfYe45bY8qRGuxPCAT6qHuTMnQX0kXPqscYhpewQJ2DqPOcAULVWDjGTpQO1jOGHuYXbPUPyVoT3IRrHy7xtfVkjAEttFB5cE4ixE93X5QrODhvwV42jPivR38hHL2dJtuPGGrcShyMavkYx2%2FCILDXYcrvN%2Blb3Qif&X-Amz-Signature=5ddadd8b492e7c13fc6b399c3a84af768b88aec5fdcc04c2d4caa02c3bfa26ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFEJUL5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQD%2FarVucg7oGuwopyss8uX1Xvzs3sYp0%2FZw8D%2Fq5bE%2BvgIgCnwNACA%2BaV0saoEu7jxov6MuXvOGgZYFZfzZ5qwyeRQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHpBK7XHY6ChJuDNVircA64TjLcrcZ5SdqP79UyeaQ3uWGOPLjkSq3lCn%2FDzkruita7QLsyfrcpgDx0C1WTJD3L1UCHtZzK8jhCYlp11VhJFnj%2B%2Fgxx0KZYd4D7iq%2BVlcGKQUmAoVZm6UDvIROmAhx3N02AN8Q5PvVWJFzpcFU%2FUeoDZYaVugPm%2Fpp7r9y7b7IfV9GF7XVHABBi3klt9XgzlkFSM7flIuj3tnHh48Xg0II9zBoTkuUL0kLVZ7EeOpfy%2Bf3C0TwxsDCsaOVa9q%2F4exrBDDsmmR2dfCWchjuxqn7V80ooGm0R4hV%2FntC9PF%2Fx3scuuZaKk7%2FJJBI03gWfGG8x4GIe%2BHY4P6mDipq59FaZSpe8rXHF8KSYvCmLlSYXFkFwCOc160TihseUT0DYFtJfgYM1Scum8bSkj%2Bk1XJ1%2FABtD04E%2F208rn%2F7pBUzoFcyV5V7rhEAWRsHc%2FWCB4t69G271guPtRKdsbjmf0F4VaXA4He%2B6h6UsvlXpqNMUKtT8L3k4zxNHzGZmW53ylQtzyxkQcq7wX6OD%2FbYjjWccXRrHeZJNwfwNX4XWQqcxmAKqkIZjWfu%2BNTXcXBfY80raLjuJ6OgCDhBWm9r%2BhfIaWRtOLIbMusJmmRILw69BsVeEuwXQqfoXWMMKu3MMGOqUBUhiDjRfg4wz6Br9VsTzxXTbVU5nDPCPBP2zitxaW29euP%2BLCQD%2Fc%2BKl1k9V%2FFeFICUeGh4ibYynTbTHz44VB1%2FiqAFPfXCaOglCgm1HVdPY0%2FYHK8P%2BHISCCl%2FbfUzHb4GIRNlHFUEWPWlZCpVMqe2WzPO6L56l6fI8R%2FFb8sMbIWymp6lG6XxMERauTx%2Fy3iclqWv0FyaDiOuguCinNLNl3pxNa&X-Amz-Signature=74751687da364d6e58f4f6f5050b39dc2afaad399f3ed9702c292654e03d9e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FV423PC%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDiuTKk3Q7eLh96yJQ9ihvaBdIO2pZ1g0Rpnm7BOqyJAgIgJwA3lpDURcZsGMg57ZLMlfOjKxnKR7McVTYPTxYc7V0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOE6xv23n9RcRGUoFCrcA4rLz84uRWkrvXiAHg0u6QbfJC%2Fhd%2FJMrVVoBZ2RvxxXEpCwqQoXA8t92YdipuXovhCb%2B69qr5N%2Fvky7fgDBxy1lJcXI8ehYL0NnsuFdH3ot4p%2FGI2IoCgwvwTmO3s3A8jrgGU%2BybABxI%2BqdMnL24%2BYKdSaX0SictoHbb8KUmzoIBOv0PVgVR79ExuB%2FYGpk9ZVzFlPUDbccC7ewReyhvt8pKbewpBWl%2FqAPOV3pFxDNi2U0WItV9DWIeLQQmLMg0dl%2FZc3zlXTIoRyRSzPFy2uy4LZ2i6JE80jHMlPSmIk1TUT1Uz4C%2BBtX4pF9gqOW6dFy372CH2427s096aoclXc1OIVTimJdLkgOGM9wie2hx0H8dDiBsv0dTg71Hsgrz%2B2bFvB674tUW6B3T4ICQvZGT%2FxZRX2dkHrjcGUU7eMlnfsBfd3O2w2ofS09JrXJGZFiAqlUrrqFOQrhqlVyz%2Ba7AvOIjM2hcnKYmOAnO15y8QU0bCh5WGjHjXEDONJKy%2FZY4K%2FYRvAVYG%2B%2BAiMubewElAzdwIHfi7Ba1aIj6CJ%2FDIVe5U%2FoVBGLHXyZ2AlobQVmJUAUhiH4hTtJB8IsWqYy8TLaaTKMbLSZhyjIbq16Sz%2BqybOr4NNUGHKsMPWu3MMGOqUBbzwEBn1OjH0wbj%2BUZPZrwxcZRzmN9H7dtmBdY8CPXVU%2F5PnS%2B3Vrr8cgBDqLOMQ69DTeaEU4Za1ZxreH9neaS716XwK4bMN0R52xIonTFkG6yNUT38tLeSdxvNFKfrT%2BI%2Bd06cQCY5ULICtBddKEAE6xnFGCNTrPYxE%2Bwhizw2PZEBKAnEtlXK%2B5XannmcRQjo%2B%2FowTmO1WnAuRN9QGkAts2WNvF&X-Amz-Signature=d6df2f938b890be5017da2ca4c585473d26faad59d8d4df28ed2694174b9fd09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
