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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMT7US4P%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH0Lcj5SWGTZwhKF3dYMNsvqbCkSAo%2BFVIpM%2FzFry8%2BeAiBb6jXGJ%2B7BAM4LJqFrAwWJi4LZTGYeQ5IcsA4J2pwnpCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgFgDNQlPmdLYXe8qKtwDcyOCy8b2Xm%2BZxBuOelBZdOFvfIXRGwchgv9B90ZAguaEyY9xaILrj%2BxhFUjGCZDAP0nVLDTO3jOnnNvgiBC021q1mY7x%2Fd%2ByPFIbWZRp%2Fj5eOmGauJS%2BpOqIi5rKcdkTBgsOtqJy%2FMe3RJ%2B3QvZWgfkWgwcguMVPfPmjJC%2Fpj8CSwwTsTnHJHlYulEcMYUrmLAl1sswLkV03LI1GT70i6y0ZFcv13B0ZF00zsI8BfWhxOgV6BgGo6XvJCKxArY6%2FUDx2%2BRsYVlvxjw5%2Bql1kngfPwDelatrCPo0xlU%2BBLjYSYHpD6cyho2lg7HxTEJhhF0crbK6MRUDcsrcHvztVgjZz2iDQGNnCcWY6ifkb5REE4mQ1GoNDeUnOZuu4hAigEXq0ZKUNZ8Y5aDYBwiTzP0saqCnFOaYcJbYB3J4r7eBnG6AdT1QtCpwoj6EbvwECgDq77cGnkPIZym6ZiHcqLA4J42iL6wD4gwFc6Wsx%2FQEKjhkTtDiIhmm%2FmETaBQzMubYFNeleFdKSbm1twcZ%2B%2B4K%2F2j6nUJvZqLS%2B0LkIrAuU%2B6jILhNQUd3Evo1swMQ51D%2BOnLU2EyGgZx3LkUgJxMfXjTEIMU0uo5ntK5dIbWIunHFhzxZebGP7jBcw3PrWvQY6pgH6L%2BdzHG8fCejjWKHj5%2BXjEUHm%2F5TppWMzoVDPEq0PIxAiTCMnZqGhkj9BPCWBrV4GfPDuGdjY0%2FM9jne0%2F%2Bwrn4kzwEnuorD9OyNXTrpdY49YlrlqBzrvma8bQfymTKy7bSE0FPo9demKXV0p89ACHgsx9xZ9g9K%2BvPMgqYyX2JnIVFG6ndIkObbNC5qa1TFngLatY2vJwwyfvGx7pQEJIFpUcO0i&X-Amz-Signature=1e19856a4ee35b5a8a4b7c82fc03a002c3e06d61ab6b062e2c3137cc525bbc5c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMT7US4P%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH0Lcj5SWGTZwhKF3dYMNsvqbCkSAo%2BFVIpM%2FzFry8%2BeAiBb6jXGJ%2B7BAM4LJqFrAwWJi4LZTGYeQ5IcsA4J2pwnpCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgFgDNQlPmdLYXe8qKtwDcyOCy8b2Xm%2BZxBuOelBZdOFvfIXRGwchgv9B90ZAguaEyY9xaILrj%2BxhFUjGCZDAP0nVLDTO3jOnnNvgiBC021q1mY7x%2Fd%2ByPFIbWZRp%2Fj5eOmGauJS%2BpOqIi5rKcdkTBgsOtqJy%2FMe3RJ%2B3QvZWgfkWgwcguMVPfPmjJC%2Fpj8CSwwTsTnHJHlYulEcMYUrmLAl1sswLkV03LI1GT70i6y0ZFcv13B0ZF00zsI8BfWhxOgV6BgGo6XvJCKxArY6%2FUDx2%2BRsYVlvxjw5%2Bql1kngfPwDelatrCPo0xlU%2BBLjYSYHpD6cyho2lg7HxTEJhhF0crbK6MRUDcsrcHvztVgjZz2iDQGNnCcWY6ifkb5REE4mQ1GoNDeUnOZuu4hAigEXq0ZKUNZ8Y5aDYBwiTzP0saqCnFOaYcJbYB3J4r7eBnG6AdT1QtCpwoj6EbvwECgDq77cGnkPIZym6ZiHcqLA4J42iL6wD4gwFc6Wsx%2FQEKjhkTtDiIhmm%2FmETaBQzMubYFNeleFdKSbm1twcZ%2B%2B4K%2F2j6nUJvZqLS%2B0LkIrAuU%2B6jILhNQUd3Evo1swMQ51D%2BOnLU2EyGgZx3LkUgJxMfXjTEIMU0uo5ntK5dIbWIunHFhzxZebGP7jBcw3PrWvQY6pgH6L%2BdzHG8fCejjWKHj5%2BXjEUHm%2F5TppWMzoVDPEq0PIxAiTCMnZqGhkj9BPCWBrV4GfPDuGdjY0%2FM9jne0%2F%2Bwrn4kzwEnuorD9OyNXTrpdY49YlrlqBzrvma8bQfymTKy7bSE0FPo9demKXV0p89ACHgsx9xZ9g9K%2BvPMgqYyX2JnIVFG6ndIkObbNC5qa1TFngLatY2vJwwyfvGx7pQEJIFpUcO0i&X-Amz-Signature=4eb64aeceb5785d2baeb9e1d68175f2218c43236ce4e3119d8598e627e834a4b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX6FTXPY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICo7hvwbII0OTcnX37hv8mGmIP7OFL9IUiRe3d2K4jmLAiAEin3gKKqnOtSOUYm7JpXIIRjVZiEvPWGmeAKmWGDv%2FiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGF6LpSaXj3Gmk4o5KtwDj2BaDEoNo5kKBt8%2BIFvrJEPeJTEbEGZOrdXUw%2F5SOU5gExeiFdYIl6f8%2BEDpVz%2FdY8J7VlXHzknhaWvulekXzmoPOG5X%2BVVETH%2Bg6EJFzd5Vu%2FkuI7vSGJIQXayzFicOkcYJ%2Fbe0TWNJoZ%2BI5q1PAVQMUKnLcES5HJY8bpq77jWBfm5wF4AzsvopVF3Wtkp5TMEoh2p3Bk0hsqAaOJ6%2BAdEMgp5fHxUbbX4hzOXGvQRoamZVtydkHgfgc5VhM2PzV6WBigeT2O%2BeiBNNsGHR4Hvu2n8uKMCDCevXFlnWg20lW%2FiYjgIcgZfR6AfdmVg22RFLnnjZSHr%2FC9f5XLPwjQnTiyTOAdKbW%2FM1esjK4Eg%2BR7zDsfX2vFyH16IAaNe%2BXaWlEm07RtFnxyLLoDNOM6EyHETWl26%2BoeYNihXjBhasdy0KQOKO1PNBqKQmzyB6AwsVjNaWPepVDyY0wTMll5q1vXzQfNS8TtNEwxvCSco94gexxzdUsBZbewm06IknxUv5tcSz4CoOcIwuv9c07qKvWBLYJEhgre9mfS9l%2BvFBKMcQxyVmJF9m0ZKHt6HXDSdJIu1IrYWiYPFIFZ58Qx7fNuvNNoYi5yHmCysyNOr%2F52ymI6%2F2mmiguvAwnvvWvQY6pgEZURqIYL7OnKqhYVLOKMEWi3VF5QtDm8O%2FJHNj47ZUWiy6hbDjoByZ6ae6GvoJDbQ6C7v68L9bVWBy2wR8duhWYUCuCLoGp4srGanEt7x8dTGFfAi%2F6RV%2FrhLqhWP%2FKuSae3GZcYOsmXvA07D%2FWHCTora%2FNUUgclstRM5o7Y7jC8tcmutNAzx2814%2BTTA2UyE4eecNMtQdVe%2Bfax%2FqPG7lu94CXFb2&X-Amz-Signature=907cc65340a33496bb521a9633863f3dbe357df7c60a046390d03b23d08725ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MYEGY2F%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCBFjd7udE8FyJGvkPJ8r%2FFFmGdDtowLn3E4%2F%2B92vp0EwIhAMWcSDJ475D1kCrCugCkBXWLITRP745hKEhLEPPsvCi%2FKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQEVsfgWdu0K9MATEq3AN2GuJSZRTC96u4A%2B%2FmxaAVkljFF%2FmZUsT%2FFQKqvSxlXe96PpCYzJDpwxjtr%2FqhnodIy3ld45vBOKpTwXBrO4k0kUW6rcCXnp8SAMttAdPOTSRLE48lRf054CgQRnGvrRzgS0Ca%2FeYV28gkzA2WcQvVJ%2B5itt6kHvuVmcpOkrym0y097Vat6h9gq37WVcYRuxl19ELaLhfZvOISS7qtg%2FoSRZ1wM5PbL1llqAavNlj7LGWj1PaO8Mk%2F%2BLDJ25exH2XqiYwyMPMVlamFyYC4eJs3mplTORhR%2BU19SCu1KJwAtuAlRx%2Bp%2FKwHOpJXPEi7%2BtYTrlFMLJks5V0xkd%2BgDv2nK613dogJzOwR5kKuD3q69axXbRs%2BfCqt1oTcwEizfIxVjpHk147Sl8x6hDUg2TdGL4hSwqU%2FJu%2FHu%2Fu0gT9igEQgsVgVZvbge81o%2BG6cseo737JFbuMtFJ3EWxM%2BwllfqNXqPhVTMr8puMLpWb8%2BQthEQ3GmR9ZIZUE0Cf7Kgy%2FAktw4eWE%2BIn%2B1nDuqidUgGLA1eiq50601MVh6DqMPrU5IyoihDizVE0z2Hm1r1Tu8sHQecpscmY5KLqKgOsnlrKBjoHQ4KM13iHloFTgu%2BbxshwUwqKKuIbKynTCJ%2B9a9BjqkAffY0eBqgS3XCyeNg1AbwgfsrR%2BvXGLLfGsCMvqdSoPysD200OCT2lXmt2cMy0v5DUhKer2GrCFZZhPBd0S1Kdzliii70LZ7KRK5q8QlMgxQg93PJVyhzwEPY0up35443667EyyCIourZRPWtqSXIIT9x6cr6PDeIMXAdIT0G8eJFtiTE6HhDlmaH48TLi2NHeoFYD856BeA6kPjBwUEiFGjJCNo&X-Amz-Signature=cd7c855b32050fca6cb88531985e9cc0751be081da514d69395eea4e370f6a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMT7US4P%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIH0Lcj5SWGTZwhKF3dYMNsvqbCkSAo%2BFVIpM%2FzFry8%2BeAiBb6jXGJ%2B7BAM4LJqFrAwWJi4LZTGYeQ5IcsA4J2pwnpCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgFgDNQlPmdLYXe8qKtwDcyOCy8b2Xm%2BZxBuOelBZdOFvfIXRGwchgv9B90ZAguaEyY9xaILrj%2BxhFUjGCZDAP0nVLDTO3jOnnNvgiBC021q1mY7x%2Fd%2ByPFIbWZRp%2Fj5eOmGauJS%2BpOqIi5rKcdkTBgsOtqJy%2FMe3RJ%2B3QvZWgfkWgwcguMVPfPmjJC%2Fpj8CSwwTsTnHJHlYulEcMYUrmLAl1sswLkV03LI1GT70i6y0ZFcv13B0ZF00zsI8BfWhxOgV6BgGo6XvJCKxArY6%2FUDx2%2BRsYVlvxjw5%2Bql1kngfPwDelatrCPo0xlU%2BBLjYSYHpD6cyho2lg7HxTEJhhF0crbK6MRUDcsrcHvztVgjZz2iDQGNnCcWY6ifkb5REE4mQ1GoNDeUnOZuu4hAigEXq0ZKUNZ8Y5aDYBwiTzP0saqCnFOaYcJbYB3J4r7eBnG6AdT1QtCpwoj6EbvwECgDq77cGnkPIZym6ZiHcqLA4J42iL6wD4gwFc6Wsx%2FQEKjhkTtDiIhmm%2FmETaBQzMubYFNeleFdKSbm1twcZ%2B%2B4K%2F2j6nUJvZqLS%2B0LkIrAuU%2B6jILhNQUd3Evo1swMQ51D%2BOnLU2EyGgZx3LkUgJxMfXjTEIMU0uo5ntK5dIbWIunHFhzxZebGP7jBcw3PrWvQY6pgH6L%2BdzHG8fCejjWKHj5%2BXjEUHm%2F5TppWMzoVDPEq0PIxAiTCMnZqGhkj9BPCWBrV4GfPDuGdjY0%2FM9jne0%2F%2Bwrn4kzwEnuorD9OyNXTrpdY49YlrlqBzrvma8bQfymTKy7bSE0FPo9demKXV0p89ACHgsx9xZ9g9K%2BvPMgqYyX2JnIVFG6ndIkObbNC5qa1TFngLatY2vJwwyfvGx7pQEJIFpUcO0i&X-Amz-Signature=ab5e161123f0ced563c602f48fc9b46a0de0afd61bd4cfd4c0c691b519960487&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
