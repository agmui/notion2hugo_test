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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXJEPJY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDNEwxvGDf8fuWQI9sEsgraYlX8XHX3EMuiUUuW1nDcSQIhANJOEoVLVZgfwypGRJcxHG4Rd9Rtbti7WyO2ie%2FB1GzjKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBtBdzWCC4MvDy1uEq3AOzYImPSHjiQR2yahrmhODKynbvqFawxAAv7dGxoj%2BrIdXAXdiXupN2Xd%2FhFSMqxZRsruZya54CDgIqcjCjWQS9jLUyDRoWijQ4OqDHHt%2BQrOwNdx3xyyqbhAw7KxFeGW6akK4LZWZrFNTAtLKgoRRs8hnUUtlMR6RQr1oYRtXtU2CkziYNnbyX1qpM85B2ktz7E5on5gY9RGIyEQa1HJRs%2BZEBGvMGz6b5F8%2F2FtKapnkPjmhkQ2cv%2Fti7i30jZjF20ZCkyZ%2B65RzaaCRCkBg0F8FzqA5Bav0b0mBdBVjV55shwf8kGB2FhQZ95qNa4LcEJ%2FIv2Kl7n51wblTnpICPWeKxYUREW4d%2B1L8DWxXiEdcS4AGNxqN1j1uyNRdsdTafEDOqIqA5ZFhZsbgh84eyLSYR6TJhd6Vwq8QKyPXSNExraXr%2BxOA775Bjvw12K7s68EMYexfC4JXbsto990tt%2Bg6%2BtSe%2B3XDR2yilwaSw4iDCsVQdReG1084Ap9zDKkHbFcc99HOCxGi330lvGVvzIrfwrrgkswrfYBLYsqpki9T0e8S8WsNT24PeVP%2BMLekTyl36TQ%2BU7rGyDKekE6um%2FFZOvRUBbI%2FBYpiPPos4eD7GI7n5Ai8No82cLzD%2F%2FsLBBjqkAX1EZuOXjl%2BjvumjAv2KLTao05zzHpJCT5o8Y9XARlmLYihIXi%2F%2BfpRSZ8C7ftOGvrbYpXBkZ1GewG4ARx4Y7n%2FJjCxsY7rV9mEHtg7HgUu8smVqYLdeNmBHFHFT8cvIZJaFwmH%2FBK173c8NVFRRa8I3jbR6pJj1l0lkJbC1tOPvZTUsqF%2FMkEJ%2Fr0iB%2BkmMbi7HcLiokWcTYD%2FER0wVl3GH7kGo&X-Amz-Signature=585dc218069561a7b73314eefca8f1605cb8efc4e81efc8c29738d7c9c9448ed&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXJEPJY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDNEwxvGDf8fuWQI9sEsgraYlX8XHX3EMuiUUuW1nDcSQIhANJOEoVLVZgfwypGRJcxHG4Rd9Rtbti7WyO2ie%2FB1GzjKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBtBdzWCC4MvDy1uEq3AOzYImPSHjiQR2yahrmhODKynbvqFawxAAv7dGxoj%2BrIdXAXdiXupN2Xd%2FhFSMqxZRsruZya54CDgIqcjCjWQS9jLUyDRoWijQ4OqDHHt%2BQrOwNdx3xyyqbhAw7KxFeGW6akK4LZWZrFNTAtLKgoRRs8hnUUtlMR6RQr1oYRtXtU2CkziYNnbyX1qpM85B2ktz7E5on5gY9RGIyEQa1HJRs%2BZEBGvMGz6b5F8%2F2FtKapnkPjmhkQ2cv%2Fti7i30jZjF20ZCkyZ%2B65RzaaCRCkBg0F8FzqA5Bav0b0mBdBVjV55shwf8kGB2FhQZ95qNa4LcEJ%2FIv2Kl7n51wblTnpICPWeKxYUREW4d%2B1L8DWxXiEdcS4AGNxqN1j1uyNRdsdTafEDOqIqA5ZFhZsbgh84eyLSYR6TJhd6Vwq8QKyPXSNExraXr%2BxOA775Bjvw12K7s68EMYexfC4JXbsto990tt%2Bg6%2BtSe%2B3XDR2yilwaSw4iDCsVQdReG1084Ap9zDKkHbFcc99HOCxGi330lvGVvzIrfwrrgkswrfYBLYsqpki9T0e8S8WsNT24PeVP%2BMLekTyl36TQ%2BU7rGyDKekE6um%2FFZOvRUBbI%2FBYpiPPos4eD7GI7n5Ai8No82cLzD%2F%2FsLBBjqkAX1EZuOXjl%2BjvumjAv2KLTao05zzHpJCT5o8Y9XARlmLYihIXi%2F%2BfpRSZ8C7ftOGvrbYpXBkZ1GewG4ARx4Y7n%2FJjCxsY7rV9mEHtg7HgUu8smVqYLdeNmBHFHFT8cvIZJaFwmH%2FBK173c8NVFRRa8I3jbR6pJj1l0lkJbC1tOPvZTUsqF%2FMkEJ%2Fr0iB%2BkmMbi7HcLiokWcTYD%2FER0wVl3GH7kGo&X-Amz-Signature=5dea07e77a9295baf08744db740bbe1883523d936b5a4388b1436355347dd448&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXJEPJY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDNEwxvGDf8fuWQI9sEsgraYlX8XHX3EMuiUUuW1nDcSQIhANJOEoVLVZgfwypGRJcxHG4Rd9Rtbti7WyO2ie%2FB1GzjKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBtBdzWCC4MvDy1uEq3AOzYImPSHjiQR2yahrmhODKynbvqFawxAAv7dGxoj%2BrIdXAXdiXupN2Xd%2FhFSMqxZRsruZya54CDgIqcjCjWQS9jLUyDRoWijQ4OqDHHt%2BQrOwNdx3xyyqbhAw7KxFeGW6akK4LZWZrFNTAtLKgoRRs8hnUUtlMR6RQr1oYRtXtU2CkziYNnbyX1qpM85B2ktz7E5on5gY9RGIyEQa1HJRs%2BZEBGvMGz6b5F8%2F2FtKapnkPjmhkQ2cv%2Fti7i30jZjF20ZCkyZ%2B65RzaaCRCkBg0F8FzqA5Bav0b0mBdBVjV55shwf8kGB2FhQZ95qNa4LcEJ%2FIv2Kl7n51wblTnpICPWeKxYUREW4d%2B1L8DWxXiEdcS4AGNxqN1j1uyNRdsdTafEDOqIqA5ZFhZsbgh84eyLSYR6TJhd6Vwq8QKyPXSNExraXr%2BxOA775Bjvw12K7s68EMYexfC4JXbsto990tt%2Bg6%2BtSe%2B3XDR2yilwaSw4iDCsVQdReG1084Ap9zDKkHbFcc99HOCxGi330lvGVvzIrfwrrgkswrfYBLYsqpki9T0e8S8WsNT24PeVP%2BMLekTyl36TQ%2BU7rGyDKekE6um%2FFZOvRUBbI%2FBYpiPPos4eD7GI7n5Ai8No82cLzD%2F%2FsLBBjqkAX1EZuOXjl%2BjvumjAv2KLTao05zzHpJCT5o8Y9XARlmLYihIXi%2F%2BfpRSZ8C7ftOGvrbYpXBkZ1GewG4ARx4Y7n%2FJjCxsY7rV9mEHtg7HgUu8smVqYLdeNmBHFHFT8cvIZJaFwmH%2FBK173c8NVFRRa8I3jbR6pJj1l0lkJbC1tOPvZTUsqF%2FMkEJ%2Fr0iB%2BkmMbi7HcLiokWcTYD%2FER0wVl3GH7kGo&X-Amz-Signature=f31117ef48c8025aa9c9b3d308a39f300f981a22995edd296841bbaf1dfb16f7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIONNFJC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCID5VVZ%2FV%2FsKe%2FkEiRLTKVpZKKTtS23PCFfHNywco%2FKKeAiEAuqnVqaokVjwkicpESKN0o7uGtgt5w29iXAn2gzua3f4qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVuCW1Rsxi3RNYYPSrcAwRbEwjc1bAkFBo8ybc7phnFqyn94DjLjZ2%2FvYxarqgCDXM0FtStYFr%2FzXEecgE2MQWomLpObeigYtoP%2FaMLnx7GTDFe4x9pLFH7HAjKPlxIA1rXC%2Fv6BN7f9YkFpqqWcZGazd2ZdPRgoTz86jajdz0BjHKM%2BNn4PXY%2FQ5mSQf3YGJDVs1yo6mpI9ENXYqPFuh0brlwbG8GxfwdvZZUucxEsgA%2BZEjG%2BwmgEH1KZWEHTLki3XUZbMrIStnhdcAo4BYetMboipaJUFnMgQW%2Ft2aBZvOI2ZOpIy%2FbY69sGtA2%2B5mTge1f7pLGlzk8FwQ6uHzSrlEbzhuvV8GqYnRCOsLzrX33MxnUs%2B7471odiZFE0hXbmqpwmR4UXZr4lMusONYMdpLuCiC0j7MnLQ%2BOYMd1rAoaieHd2WC7z%2Bzcz97TsmIJP%2Bn6AlUJiSo5hUoOTNbqzVbzM4fLzJm%2FgwKgzOlBuaRQ%2B0sK3SYlv2yCT5hvJNQladRXnbtM2rUZ7hfOMnuyQR3pUFBSq82albYGEIMl5HBncJipbVBYdBbxiM4xhU9Y2TUWLPLnJdg%2F%2BdLzM9%2FyXr0bsDjs6JoGJvmnQhtui4GX%2BqYZ4U%2BWdF68AIB9jY4WG7aJlcWZ9ETV2MID%2FwsEGOqUBrkaoMAZ%2F0CC1CVfQJstmvtiDc8%2FjDOWSiW%2BuB1CJN4rfYjmo5%2BacuUYa1nbdeFM5qYawJfLp5xm2nVSAdPgr4N6GFTvxzkB9Ae5AiwkieQebWjKJDYcE1biK9UcrcbfLcY2Xhy4v3VCH53Y8HCrEqaW3a3gZRZeLyUyPkV3SK19EXbv7Ltyn6RPb9Y7CESAtF6wlYVvahgyfsS%2F%2FZBOMpjhHveFu&X-Amz-Signature=c6a26746f316a959872ad11a5908f71453cb29c3e1b76bef5538ed48cbdc5582&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV7GIXXV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIEm2%2F0dis5B3IUVMb1H%2BUWcLUmQzG%2BAfsG%2Ff3KyWEhGkAiBkra7G3szypzod44v30F080mJ5TGkrNfTocBsgYBUEXCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMID%2BxPOL2N53rLSsHKtwDiDuz3gWoLQ8AuA3b%2FJkXUM6OOvGBpSodSNaFkOrDCmCH%2Bswi43kqgM5HSwUaQ9jNbpxBvEO5yLRhTmyblS%2FYF1pSPKLueaXncJf3BQao5eWRYooPITWDoIcmWcXg2hcV9ocNIdHFeLdlQcgi9hVTZXlkc3jIlaX%2B9gS%2F2v3mLNL%2BmtdPdrvlI0UbB%2B4cmF%2FfQugNK4TBCbqIBuWVJXv4SncFs9CBp%2FLhGaakBay%2BKl%2BYy2ZxljnUAcQAkDV6Uu6zxfZtYCvNCnUkuQvpgDDH84LAmprFMfR4jdHufD4WWKVkRokaLqBWbMIxamBlQMo0Mi9Ep%2FMO6Lu2LtGsNCvaILrK9sHPAW0z2x3URNRdu2MEHpiaxkF7vG8hA%2BMdspGY81LpGerQcH3sEMWVkz%2B5OGcJXQnDIwr54%2BSjvi4VUlMHy9OCHarTdAIwS8UjcQLV%2Fip8z%2BdrEoVScV0RG2wiIpG9ripnr8VFZRwgLnKwT%2B4yqPraBbqJOzR4XGYBaZITQhpoM4WS1fm8119uSy9jRr2osPUavcYjifis3ap7hpvrx5hQZiVqLKlsMX4UI5eLlfIEGsOBxYwNrA2NWi0d28kqYoZs0YlCaUOLPY%2Byx0d10pAS0RdWSBRol5gw2P7CwQY6pgGyPI%2Fx0KOpLeqFo9QuQBuqeiJJ%2BktVcA%2BN%2Bl%2Bp5T7lknxVeoRDPr%2BYATmYQcmwHBzoz3kaYlXgn5PP4bxUedrdGRApEz%2FWNr6okTayNI3joCOc%2FVD2pb%2FpORI5Mls2uTZQrLfYdYELC%2FvxIYyqaxGXZ5moq8txAh6wwu1vVrxfnZuYxIhpim2bKLCjdYIeD5qSd%2FnT4pVggNPoesVWL%2F7D0%2FlkZfx7&X-Amz-Signature=eb5b3089ec2df2194af1fedaa0b3e9180528aae7fb8090cabcaa2e397468bc8d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXJEPJY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDNEwxvGDf8fuWQI9sEsgraYlX8XHX3EMuiUUuW1nDcSQIhANJOEoVLVZgfwypGRJcxHG4Rd9Rtbti7WyO2ie%2FB1GzjKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBtBdzWCC4MvDy1uEq3AOzYImPSHjiQR2yahrmhODKynbvqFawxAAv7dGxoj%2BrIdXAXdiXupN2Xd%2FhFSMqxZRsruZya54CDgIqcjCjWQS9jLUyDRoWijQ4OqDHHt%2BQrOwNdx3xyyqbhAw7KxFeGW6akK4LZWZrFNTAtLKgoRRs8hnUUtlMR6RQr1oYRtXtU2CkziYNnbyX1qpM85B2ktz7E5on5gY9RGIyEQa1HJRs%2BZEBGvMGz6b5F8%2F2FtKapnkPjmhkQ2cv%2Fti7i30jZjF20ZCkyZ%2B65RzaaCRCkBg0F8FzqA5Bav0b0mBdBVjV55shwf8kGB2FhQZ95qNa4LcEJ%2FIv2Kl7n51wblTnpICPWeKxYUREW4d%2B1L8DWxXiEdcS4AGNxqN1j1uyNRdsdTafEDOqIqA5ZFhZsbgh84eyLSYR6TJhd6Vwq8QKyPXSNExraXr%2BxOA775Bjvw12K7s68EMYexfC4JXbsto990tt%2Bg6%2BtSe%2B3XDR2yilwaSw4iDCsVQdReG1084Ap9zDKkHbFcc99HOCxGi330lvGVvzIrfwrrgkswrfYBLYsqpki9T0e8S8WsNT24PeVP%2BMLekTyl36TQ%2BU7rGyDKekE6um%2FFZOvRUBbI%2FBYpiPPos4eD7GI7n5Ai8No82cLzD%2F%2FsLBBjqkAX1EZuOXjl%2BjvumjAv2KLTao05zzHpJCT5o8Y9XARlmLYihIXi%2F%2BfpRSZ8C7ftOGvrbYpXBkZ1GewG4ARx4Y7n%2FJjCxsY7rV9mEHtg7HgUu8smVqYLdeNmBHFHFT8cvIZJaFwmH%2FBK173c8NVFRRa8I3jbR6pJj1l0lkJbC1tOPvZTUsqF%2FMkEJ%2Fr0iB%2BkmMbi7HcLiokWcTYD%2FER0wVl3GH7kGo&X-Amz-Signature=e0377d5768b6014e685c15e6d1814f7244061c1b5f266a8d81b7693fa391df36&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
