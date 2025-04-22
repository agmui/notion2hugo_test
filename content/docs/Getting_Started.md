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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIIW3I3P%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDWTj75QdkvjQ81mb%2Fuvxzxvr34NFHhUEfDufvM%2Bh9TSgIgZ8zhmu06MdS8JLaEpcX%2FG%2BuyJYaB02XKvneJoz9fqTYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXTUXyhKPnZEqBYeSrcAwPIntHHGJpTlVCAcrNYbi5%2BCJi2dm6bV4wcXVVColrnuoSW9XPYwCa1TikOiJsR8CFs4bIDdLb4ehEIzuGnKPMSdWnP1REZIUDIiGrbPz%2FbyF9p%2B9i5ez3XW91PpvVoxg8FREXS64IkDbBg4fYcVkuu6fVFPRw0vRavn5VhrOrABz676XvNxPRk%2BJ3TsfKNlvNV6WRj%2BVAxbBNaPKnQKxK5urn89koq6RhLAiBWRW%2FU%2FQMSIyMfe%2BTwbZrm7uc4xqdCVeK%2BrbFFjn4nUBsNgElIdfdonwcnifbQvqhtbv%2B1hqcZjS%2FKSdrCoQbZENBPXMyS7mG6gP7UfWQqPYVdaM3t7qYZKpvtYYkh5JapofLEeV0OXkuiHZ3IkNTspRX4onCnyvitQuXficnkmRhJV3ksCBOTNtaLdLskANVjZWYw6rftvWVm9b74KABqNiVoW40PdvYQybeQCNjhAicGtByeUcIsbQ9vQH17%2B%2FQEyLdKVNV1PUw81CAFdmQ548Q%2FBAooVqy1Dg1BprXSSj9xtOxCmiFnPDOTpw9HfXHW7oOCkKD0cWubqujmeQytuXdzGH7kKsQEgBusDhfUpo4KEn7yISMizc3zuIto%2F%2F9hmkRkv2BdlG9MxZLaHeAQMM2PnsAGOqUBrKguRfUCo%2FZ0CJZK1VcXIsLDUsNB%2FWzFYt0RbtLGr%2Fgusbkul%2Bju6y8DhMWIsdZCXn3h8p1uM0ciOgioJQqxBV564lWr54ao29A94QUwK8fi2yUkF6HDIvd1wOHg2k%2FDOQpHJXmRG%2Fhryb%2BIVwnuuti7kVG3A2hi2PaSpXgx6XjHcjlEmHsMJd9sLpQr5%2FbvEOw7h%2BtPJ271w12tTnLLDbulApUV&X-Amz-Signature=6c3b5a92a9f76f3492353566ed9f6f4a84bb814860d87255ac9c7ee922b20830&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIIW3I3P%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDWTj75QdkvjQ81mb%2Fuvxzxvr34NFHhUEfDufvM%2Bh9TSgIgZ8zhmu06MdS8JLaEpcX%2FG%2BuyJYaB02XKvneJoz9fqTYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXTUXyhKPnZEqBYeSrcAwPIntHHGJpTlVCAcrNYbi5%2BCJi2dm6bV4wcXVVColrnuoSW9XPYwCa1TikOiJsR8CFs4bIDdLb4ehEIzuGnKPMSdWnP1REZIUDIiGrbPz%2FbyF9p%2B9i5ez3XW91PpvVoxg8FREXS64IkDbBg4fYcVkuu6fVFPRw0vRavn5VhrOrABz676XvNxPRk%2BJ3TsfKNlvNV6WRj%2BVAxbBNaPKnQKxK5urn89koq6RhLAiBWRW%2FU%2FQMSIyMfe%2BTwbZrm7uc4xqdCVeK%2BrbFFjn4nUBsNgElIdfdonwcnifbQvqhtbv%2B1hqcZjS%2FKSdrCoQbZENBPXMyS7mG6gP7UfWQqPYVdaM3t7qYZKpvtYYkh5JapofLEeV0OXkuiHZ3IkNTspRX4onCnyvitQuXficnkmRhJV3ksCBOTNtaLdLskANVjZWYw6rftvWVm9b74KABqNiVoW40PdvYQybeQCNjhAicGtByeUcIsbQ9vQH17%2B%2FQEyLdKVNV1PUw81CAFdmQ548Q%2FBAooVqy1Dg1BprXSSj9xtOxCmiFnPDOTpw9HfXHW7oOCkKD0cWubqujmeQytuXdzGH7kKsQEgBusDhfUpo4KEn7yISMizc3zuIto%2F%2F9hmkRkv2BdlG9MxZLaHeAQMM2PnsAGOqUBrKguRfUCo%2FZ0CJZK1VcXIsLDUsNB%2FWzFYt0RbtLGr%2Fgusbkul%2Bju6y8DhMWIsdZCXn3h8p1uM0ciOgioJQqxBV564lWr54ao29A94QUwK8fi2yUkF6HDIvd1wOHg2k%2FDOQpHJXmRG%2Fhryb%2BIVwnuuti7kVG3A2hi2PaSpXgx6XjHcjlEmHsMJd9sLpQr5%2FbvEOw7h%2BtPJ271w12tTnLLDbulApUV&X-Amz-Signature=c1b1298ce0d39227b073f1c5b12dca45bb368c8d5fa8860bee1a9c2dc12a02cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7XZMYYM%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCKkzNUM4D5jX3fS32ym3WPw3e7jpwor4D%2BeuvfQ8SjxwIhANn9IPHO7zKm38732OrDbmlUyOfgnckcbRFxCklE2jMuKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlJZpU7gzK0FiqUhAq3ANnpnggcnmfCg3qXw0dkFOCgQvKcFKIxGbbbKBXhxidtojCjo032fvi0%2FUypFdJKOmnnuxMjiDOwELMYPaqQ%2BYmO7ztcqusl%2BuPMmanUrX1brbGEG%2FZwlY4iVNBHZ6ygmA1Gr9lHQlAWvULuTF0Zo1w%2BKSJCfIII%2FnVNRs9yCiyV0K8mQOPPqTz5soOHmBvRPCjjccI1y8YyKQwhK1Bphy%2Bis22tqExJgokLma3ogY5tsE6hGTcVaM0gBrMf8RedmxV7xpqcYf957IcXS7bT1CgQ0P7XXrxCmdGWLoVSHw9M6d4HaSfNQvrhtyfsZ6uSGg%2BlZJKpLzvbC05RPTS3pDMRpK9wYxOjBSH7nb51Jxbx05km5d3fLHnz3N1hmTNoNu8k4G64k%2BOLZBqB%2FjVWwc5oKUoS%2FZB8081Iy852FjP1Zim4H2L4kSXloVrc3XuxSpWY8349eLogUcnd4Egd5hA%2B68ZMAJkqvJqimq0yMzAWv%2BonYGPx6hPnjPY4tStehjf6vgopDbmRcY8ly%2FNk3wR9stYSg%2BHJ24CIgb%2BxdZGkGgAY7dGI3bQDOw8WvwyW4zNxpaseC3JX4PuQN2Ju5qk2bjaaQf9YzXU%2FDYn7TZ%2BdYJI0Q2NtdvVrcIdHDDQj57ABjqkAQJfFvmYMtuc2RYSues8MWqzeU0D82x6OHqKQoSlD3rRPLbsGM3N2aLnyPUi7ayKw4XjfB2pkdnlWy06hiCqRjWiwB4xFTSdCAa8jXeM5ysikNqhICJLr%2BU24Bq0jpAQfyjB8M3ugbkQK53oHLKE3P02UCdLo3YKwFF6g%2B5qklflfoX1D9VXEyQ6PZepc9oEUakDfB29W9dt4bk6rh511fo399O%2F&X-Amz-Signature=2d026f14bb188f05c84a764b6ac2d2e31fc47b4dba49cfceae3e04d1d2a5b640&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHPIL3Z%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDppkTQkrxdkefshc8uWLdW675GlwFIB0Gj45q6Kv%2BLBwIhAKWQwV1hZyBOUJOgiTpXlqtSV3FriK75%2BQN3BCiHoOTLKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUzBaXZzzc963xpiYq3AM4TFZ5T2ZVytyzFq3eEyVZo83HOBWs2xN8SwzT4QuvgEYHx5HJJR6kvmm7H%2BiXzsFu6B5sqG0RdjcJM2Fd11B9et0%2B4j1DkwDm4o%2BK7AZLZQgtRhU6sf656tBwSw2a6KwdVMw9scCKgh6UniUUI0d74rXUerWuyUbe4yROEcNlXUhRQ%2FAJSbzkIaEQd7REsszraxT1LImSL3AAXYb87eCF4FsLxxPqNIE8KT7afWUpaWmS9xhVzaecoEKB4FvwtB2xxPTQeBIo%2FTOQTqMj4n51mXZNetGcOdkLE%2FokXEseYixWotalIQGWHSvm8O66vqCkganunJybjL8U%2FNnVn0YR4rQzsQAlcIweFaRuzbGE%2B0U7%2FTlYLuSr999Uak8B%2B5hUXYDd5pyvMQkTAtT4X%2BFiKx5nhtuwnll0mEMSLWlZ%2F%2BlYVXhSbSS7MZ0WRbTJ15gJ%2BpTmp5j9Zw%2F%2BJh5hyeMrfYtCvoNy%2FAlJEFa9mDGbvs53M6PwrrUiOF6%2FfyFUzaiO59YBYaDGAC5xxJ1CQIiUv1YoZAm79Ds8k2PHK%2BViHS09ZaZ3pc%2Fk1GX19HqpWEGzPhTVfMU3Sh2Au5R3NRyaNpnjYqaUDqNdfWapwQTE8mx%2BkP4Ci8KcuGpK6jDPj57ABjqkAQvZhBK8gK%2BMRladLOPwTwDaysA%2BOyqkN7gEYkRgMVvBMV%2B5hjeK2fm7N7%2ByBU79tqiW1gWXZS1vW%2FbX2GkXV6JP%2BV3NNcyy7WN9f56O9SQTdyGnFG8ESL1JYiWSvqZQdyzTpwEBuGBtI%2BeekVO65OKPhQPLDIVpEMJiWeidXN%2B9WFWQrk5Q6v3DtgXzmSWF%2F6U3HWvMDKmrCn27ASfqVCaqYplF&X-Amz-Signature=bf31fa7cf93bb101f9ee00e829b83577a31fa12a75602cc60177f6a8c7eebb18&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIIW3I3P%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDWTj75QdkvjQ81mb%2Fuvxzxvr34NFHhUEfDufvM%2Bh9TSgIgZ8zhmu06MdS8JLaEpcX%2FG%2BuyJYaB02XKvneJoz9fqTYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXTUXyhKPnZEqBYeSrcAwPIntHHGJpTlVCAcrNYbi5%2BCJi2dm6bV4wcXVVColrnuoSW9XPYwCa1TikOiJsR8CFs4bIDdLb4ehEIzuGnKPMSdWnP1REZIUDIiGrbPz%2FbyF9p%2B9i5ez3XW91PpvVoxg8FREXS64IkDbBg4fYcVkuu6fVFPRw0vRavn5VhrOrABz676XvNxPRk%2BJ3TsfKNlvNV6WRj%2BVAxbBNaPKnQKxK5urn89koq6RhLAiBWRW%2FU%2FQMSIyMfe%2BTwbZrm7uc4xqdCVeK%2BrbFFjn4nUBsNgElIdfdonwcnifbQvqhtbv%2B1hqcZjS%2FKSdrCoQbZENBPXMyS7mG6gP7UfWQqPYVdaM3t7qYZKpvtYYkh5JapofLEeV0OXkuiHZ3IkNTspRX4onCnyvitQuXficnkmRhJV3ksCBOTNtaLdLskANVjZWYw6rftvWVm9b74KABqNiVoW40PdvYQybeQCNjhAicGtByeUcIsbQ9vQH17%2B%2FQEyLdKVNV1PUw81CAFdmQ548Q%2FBAooVqy1Dg1BprXSSj9xtOxCmiFnPDOTpw9HfXHW7oOCkKD0cWubqujmeQytuXdzGH7kKsQEgBusDhfUpo4KEn7yISMizc3zuIto%2F%2F9hmkRkv2BdlG9MxZLaHeAQMM2PnsAGOqUBrKguRfUCo%2FZ0CJZK1VcXIsLDUsNB%2FWzFYt0RbtLGr%2Fgusbkul%2Bju6y8DhMWIsdZCXn3h8p1uM0ciOgioJQqxBV564lWr54ao29A94QUwK8fi2yUkF6HDIvd1wOHg2k%2FDOQpHJXmRG%2Fhryb%2BIVwnuuti7kVG3A2hi2PaSpXgx6XjHcjlEmHsMJd9sLpQr5%2FbvEOw7h%2BtPJ271w12tTnLLDbulApUV&X-Amz-Signature=ede1e0cd40160b2c7a5dce33a5593346d802df2b3370d8126c3ded6a77236782&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
