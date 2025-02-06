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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DFV55SI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDPbd6O4SpkJ1XqYmwq5Jfx7nfKg18WnjHwOGn9T9VU5wIgC5HClkXI1oLAO9ri553l8I8%2BaabEvoezG9Jsjjo4PjYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJkChJDRW7kPfrFOeCrcAw9JGDKJHli9HCpWPvZEdM6W0icq9VpWnSsMYxaW9xMgIuYCeMHX%2FYOTTepL3pjAhS2M1ED%2BjpBBOKsyjYh7pSKRT6csdE9AGcjDiMHTSHEX3IkdtdY0iW0HTKsfuqqpeiXFTDuV3OdAsb4ViIBoY2KO6g92YB29sMa%2B2rGFlOuEx%2BgDXKq%2BeP2mI7pCv4ZKuEhJTB0X8FEkP5J5w12UUej15nM41B47Vsqipb5kL37mIuGdFtrCT4ifvkn%2B4Xym0pgTWEd%2BvjHIJ2sCQiLjWjQ4dor46cDYGstxVFqmHRDwtKWJbthSa74V%2BWZfpFR19fInLUfa%2FP0%2BEX%2FWY6LDfYx1uaW6w3zFsZJXqNaynCC52kXXahEGk6xawbhZSGIbiddTyG3tDYXXM%2FhEZiOVxotzFvjnXLPSZmBUWjc7M39RuTkShIgyqVzCm5%2Blxi03GgxBgGphj%2B43Sxi6aYp3aG2xM7vJSJRiejgdyEeExbIMYt5aMLjH0ak4G0sTq%2FHRqA0yjUmqEPm2vKhzV0srAWt30dL472%2FB0CUhNNxkWKK2iNcEyayb1wOhNtStL9yV%2BJVswpQOPf8l20z8xkKcjq9O5tzyxzVgikkilTkOn0fRiqwspFy1HNAB7NIBMODgkL0GOqUBtHmS5F5i6rDwljt3ppkHEkfCtdHbU2vhzsEoBuTqkskkWCPBrgArCEzr2b0c7yK9XwsD2%2BZJzH9OApWr3xKMw%2BOon5ciUf9Gf6Lmu%2BQp748jPFBTEWWK7BNdjuuCNDFsKcgSJVir7Lj487tmjOAP%2Fvy8G%2BgV1eDrrA%2BhjRmpYnVY7F5hDutRzNUpjQJ9AjOLy8qIEkEFv38H6jWzgR1mhBPx9nrx&X-Amz-Signature=03255ce44912c2fa8b282ac06630eb6e652960534f0444659078e9e2ad5464f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DFV55SI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDPbd6O4SpkJ1XqYmwq5Jfx7nfKg18WnjHwOGn9T9VU5wIgC5HClkXI1oLAO9ri553l8I8%2BaabEvoezG9Jsjjo4PjYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJkChJDRW7kPfrFOeCrcAw9JGDKJHli9HCpWPvZEdM6W0icq9VpWnSsMYxaW9xMgIuYCeMHX%2FYOTTepL3pjAhS2M1ED%2BjpBBOKsyjYh7pSKRT6csdE9AGcjDiMHTSHEX3IkdtdY0iW0HTKsfuqqpeiXFTDuV3OdAsb4ViIBoY2KO6g92YB29sMa%2B2rGFlOuEx%2BgDXKq%2BeP2mI7pCv4ZKuEhJTB0X8FEkP5J5w12UUej15nM41B47Vsqipb5kL37mIuGdFtrCT4ifvkn%2B4Xym0pgTWEd%2BvjHIJ2sCQiLjWjQ4dor46cDYGstxVFqmHRDwtKWJbthSa74V%2BWZfpFR19fInLUfa%2FP0%2BEX%2FWY6LDfYx1uaW6w3zFsZJXqNaynCC52kXXahEGk6xawbhZSGIbiddTyG3tDYXXM%2FhEZiOVxotzFvjnXLPSZmBUWjc7M39RuTkShIgyqVzCm5%2Blxi03GgxBgGphj%2B43Sxi6aYp3aG2xM7vJSJRiejgdyEeExbIMYt5aMLjH0ak4G0sTq%2FHRqA0yjUmqEPm2vKhzV0srAWt30dL472%2FB0CUhNNxkWKK2iNcEyayb1wOhNtStL9yV%2BJVswpQOPf8l20z8xkKcjq9O5tzyxzVgikkilTkOn0fRiqwspFy1HNAB7NIBMODgkL0GOqUBtHmS5F5i6rDwljt3ppkHEkfCtdHbU2vhzsEoBuTqkskkWCPBrgArCEzr2b0c7yK9XwsD2%2BZJzH9OApWr3xKMw%2BOon5ciUf9Gf6Lmu%2BQp748jPFBTEWWK7BNdjuuCNDFsKcgSJVir7Lj487tmjOAP%2Fvy8G%2BgV1eDrrA%2BhjRmpYnVY7F5hDutRzNUpjQJ9AjOLy8qIEkEFv38H6jWzgR1mhBPx9nrx&X-Amz-Signature=4cddf2a1653d5d90c54ef72599ca5282de9d4cc61456b8630383653c16d1057c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65SX2C4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFxwNB4cgRZZyp4USOS2bc17kMrT%2Frkc6lkaVkrNS%2BoXAiEA7QKv5lR4DDUjOpS1gGiItnnjRf753Xi8w2gSp18EB%2BUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMnv4owxFQNtWVC%2FyCrcA5H03Q7LxybMpvYb%2Fo2sBw%2FhWyJekF5zyOz33aVRDxs%2F5wMWjbBXH0xcsA9Xol64FXiXY0%2B8O967P4CU7uMXBEy6ine4FJnYEuHus9xwo9ERB9GQhmZZAIhLQjB1q5TSlU4ebuxWfI6RFcATMNului6tb3NAv0qL71TPYb%2Fd3TLno8KntNffdR1jq1g8ME0iaSBVBrzjaaRl253aHOxsLYo6%2FRr9kCduQbUtrO1k9y7X7KR5odVy0OqVyWjVaVybIbv4%2BfVvQ1kJn%2FXP2d3%2BN8jNIUDHAfZ2kbg6HqJAg7DZNn%2F49IWtWwoDoeZpj6Q3E4iRIV9FO0GvgOa%2FUnBnc56g8vOHmPSXe7Ne%2FKhOe%2BnWnYlfdC38HUDxtMYnKHezCvQmn4I29YBGp7rrmxf7ZFtlhB1H68zoDMHvoMuxNwU8EhMwwF7ocEyCsD6QG9NeZqtoxCMXPWY%2FdtaBE62FoIFwffHFwIMhpMmw%2FtVyH32Nc9PWSRIV4iuF6NVSTZnkphU3Nk7M%2B1RppC5jI3%2B0Bb9AbAteH2ZIJbEXS3oNbbp%2BjnWdBlGe0OpUTWrSFXKDk9%2BlpOGzu8hngH76cfFr3miDY1F6RWfFWQF%2FpQI1CKdsJNX%2BYDpR4pPlKCSIMPXgkL0GOqUB7CBGMZH1l5x9w6Fq9nDed9kSQHZ56wvbWHeGRnQWN1KxW2krE846gOf5jltAtSgN3VXzm1VN%2Bs19uCVQyQ6gbePblywKmWg1b8Z3Rsmf4nrdMaCLUv7M%2F8%2BTkNmS7DzaKV8K1BKMEnifPPVRdYp2vutcF5M%2FLyk1m55zaIeGXPtwHa%2FgRVeAQ%2Bl71aPgjGD%2BQ8QhIMoidUlaChBf7oXfjabDPWEk&X-Amz-Signature=9cb0dc2a86196be3b7e776e50e6aae1b71d7c2aa9848bc139d549e10d681be8f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFRLUOU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC%2Bv13%2BiPswSRK8hGd7wFq6NgZdTuLvxjDYrjg3I%2B%2FPowIgDLT%2FNpPtNwmWiQ3FZPqqeyH25LNSyCQzxRLK%2F9ZIJTUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDE3ld790SRZugubWdyrcA1Qwr0Azt6kwpQoBhiDN8ENRXZi3ZsTR1Fi1C9B%2F%2FUNZ9%2ForFGSTg0eR01n2yAWvWoomErup76VqCzDF7XKtwxGcnCnbcCSnDNDYeW%2FxtOBN1iKjf2suXvF1PweKUZmaRcVeTHUa3uWDe%2BqJmp6yViqJ5Od6yXZy7MqDRWiSHx5%2BIZbR4NVML7%2By7%2BjMSNvRqBsWuGe8kjQTYe4GVCo%2Bwsm5AXIhJHJrdhvwEnHFYzO%2FF8bD4CakdoJffUuZYtmVRFpFzGifmGUcxfrMgV2wzURg%2Fb3WcVrWDB7itVkLOOR3TrDav%2FX05UxGaqCnWKto31jGKME7caMC8UQQe1fN191E7EWrjG1iuED1ZXqCKjkcdxmfleUNOVdULHCvQQ1e7lo4nbybW45nGOQlHxP6tGc4Q4XJitZwaJS8hQj74qdTr1yAeN14ZsqQBbd6vl4%2FguVjOG%2FWGXXyEosoWCdbUvIAS%2FVaTohCf5el1d6wk1hQgMrsYlwVmT2i5lCb4FTiAabI5OfgxR7TUVfGq8rJcTkxZbM89NMwuXwR6XB4B8ym5Nu74FRnYBP7bAdgaATYMwgsd%2FgH%2FccVtYE4mk7a7NGEUboCRAU4mydMF0p9Or2SIdvS9Se39e1WsaYfMPPhkL0GOqUBVLQxZN4%2FsPOzWSitLi2x7M6fq4JpJ1%2FEQPIojBk0b3J5GnNoB4%2FnXR3g20a%2B2zdDeWvs9pv%2BJZw3WflbhOqGjSYAbT4J7npvLGYDchpo7qn0g7U%2BtyMgf7RL5xSRPrSA0JKjrHfKQCyueuAOWyv%2BHvLI65890qHG7GLslKdLPSASxyT8Jkucv5yM3lXqVe6gZLPJzKLYwryZUZprAOY71r4wlXGY&X-Amz-Signature=c4c0b22b30cf9a387b14762b16237b0b47c52cf5c39c53cb76ef68f934fd107d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DFV55SI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDPbd6O4SpkJ1XqYmwq5Jfx7nfKg18WnjHwOGn9T9VU5wIgC5HClkXI1oLAO9ri553l8I8%2BaabEvoezG9Jsjjo4PjYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJkChJDRW7kPfrFOeCrcAw9JGDKJHli9HCpWPvZEdM6W0icq9VpWnSsMYxaW9xMgIuYCeMHX%2FYOTTepL3pjAhS2M1ED%2BjpBBOKsyjYh7pSKRT6csdE9AGcjDiMHTSHEX3IkdtdY0iW0HTKsfuqqpeiXFTDuV3OdAsb4ViIBoY2KO6g92YB29sMa%2B2rGFlOuEx%2BgDXKq%2BeP2mI7pCv4ZKuEhJTB0X8FEkP5J5w12UUej15nM41B47Vsqipb5kL37mIuGdFtrCT4ifvkn%2B4Xym0pgTWEd%2BvjHIJ2sCQiLjWjQ4dor46cDYGstxVFqmHRDwtKWJbthSa74V%2BWZfpFR19fInLUfa%2FP0%2BEX%2FWY6LDfYx1uaW6w3zFsZJXqNaynCC52kXXahEGk6xawbhZSGIbiddTyG3tDYXXM%2FhEZiOVxotzFvjnXLPSZmBUWjc7M39RuTkShIgyqVzCm5%2Blxi03GgxBgGphj%2B43Sxi6aYp3aG2xM7vJSJRiejgdyEeExbIMYt5aMLjH0ak4G0sTq%2FHRqA0yjUmqEPm2vKhzV0srAWt30dL472%2FB0CUhNNxkWKK2iNcEyayb1wOhNtStL9yV%2BJVswpQOPf8l20z8xkKcjq9O5tzyxzVgikkilTkOn0fRiqwspFy1HNAB7NIBMODgkL0GOqUBtHmS5F5i6rDwljt3ppkHEkfCtdHbU2vhzsEoBuTqkskkWCPBrgArCEzr2b0c7yK9XwsD2%2BZJzH9OApWr3xKMw%2BOon5ciUf9Gf6Lmu%2BQp748jPFBTEWWK7BNdjuuCNDFsKcgSJVir7Lj487tmjOAP%2Fvy8G%2BgV1eDrrA%2BhjRmpYnVY7F5hDutRzNUpjQJ9AjOLy8qIEkEFv38H6jWzgR1mhBPx9nrx&X-Amz-Signature=5fba822b120f64289da748ff7ca1ce61e404509f51b478a935df127b5d606b84&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
