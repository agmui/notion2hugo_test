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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DBOKJ2I%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDvJUehWlJKGJs0TDPcPd4L9nCa0zvtAd1Ucue%2FNLH7pAiAqPzWfC81ml94MIkl%2FPO24BaidMf%2FXuZWMQ6yx5EcBgSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC7QyAwxan4TfTv6zKtwDPd%2F%2FjQOuzKnopKgdyRAaNoXBsOC65UlDiWXprkIxFmm5kh0w03LNmlDa77MdqktG9Gkaxd8ryAVO%2FSh0s2pJrt%2FrnY8Dnwn%2FQGHmrDLxuKhS4bJTXeFszL8K09bBpIqxKlGS5ALPHS%2Ftwo2%2FNVRZMMmGmg4vHw%2FPLufeyvEkzT3aumgbJQWokSDE2ac4tq307V%2FZ%2BjK1XTbPqPbGLE0pv2Zk40Hjp0NzlKpT%2BKUQ75R%2F8wHcf1tcn4gMfSRN9PRFsd%2BIGsf81E1Z7vf04eq1ILdF%2BZtripMuwQT62tdfF0xYKDgv6dqW2XzFOlLd9csQijf6%2FWe9WdS3m7KRkWpofymo6XAELWP9TuQ0NIXA7YfvQSHQhqPmif%2BlfXQhf0TF%2F9lf18qYsR5yCXu4duhV1hmQbA0Dvk4cWHSKL8ZVrIhMgjTjNGnPk9ZzqV3GWUCsyVBiHJEyQ6m%2F2F1gUM0DCZQSkoI6dRuqiMLlY4XwlsoYqJsEp4Y319ahZhxqGbkDSUMr3cT7q8qOHelKE%2BunhTTqd810xCj27OJjAOQiKbKJU0FzjO%2FfugUc9OV596sOZDLuDEXKM%2Brdnppx%2BP64e4rQI0DGiu55UJqHR8owYMMaODG0tEiq12FQJaownsu9vgY6pgEjGDfwDHzKB9X5YCq5XVe06MQ%2FfVtpB4vDC5utI5GTGlCzjNt6kTsv6O82h9Kwa3DNhyClNVuXuoxsV%2BMjBxusa4KqWs%2F3NTp3QrM5EYg%2F98t3Ym1N1PE7PuxL1F9mSof%2Fz%2F2J%2Fb82b3IBnTHuNUOVXpr22QiUbaJDiSrZnUXcB2EBNt%2FcNFxysYGBx8ifIlIgEyl%2FhFfQg%2BxtxE69drPsR1HM0R3l&X-Amz-Signature=ee34b30a0163fa903db449b461969aef107200c695f1dc54d98f75c9fb22fa6b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DBOKJ2I%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDvJUehWlJKGJs0TDPcPd4L9nCa0zvtAd1Ucue%2FNLH7pAiAqPzWfC81ml94MIkl%2FPO24BaidMf%2FXuZWMQ6yx5EcBgSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC7QyAwxan4TfTv6zKtwDPd%2F%2FjQOuzKnopKgdyRAaNoXBsOC65UlDiWXprkIxFmm5kh0w03LNmlDa77MdqktG9Gkaxd8ryAVO%2FSh0s2pJrt%2FrnY8Dnwn%2FQGHmrDLxuKhS4bJTXeFszL8K09bBpIqxKlGS5ALPHS%2Ftwo2%2FNVRZMMmGmg4vHw%2FPLufeyvEkzT3aumgbJQWokSDE2ac4tq307V%2FZ%2BjK1XTbPqPbGLE0pv2Zk40Hjp0NzlKpT%2BKUQ75R%2F8wHcf1tcn4gMfSRN9PRFsd%2BIGsf81E1Z7vf04eq1ILdF%2BZtripMuwQT62tdfF0xYKDgv6dqW2XzFOlLd9csQijf6%2FWe9WdS3m7KRkWpofymo6XAELWP9TuQ0NIXA7YfvQSHQhqPmif%2BlfXQhf0TF%2F9lf18qYsR5yCXu4duhV1hmQbA0Dvk4cWHSKL8ZVrIhMgjTjNGnPk9ZzqV3GWUCsyVBiHJEyQ6m%2F2F1gUM0DCZQSkoI6dRuqiMLlY4XwlsoYqJsEp4Y319ahZhxqGbkDSUMr3cT7q8qOHelKE%2BunhTTqd810xCj27OJjAOQiKbKJU0FzjO%2FfugUc9OV596sOZDLuDEXKM%2Brdnppx%2BP64e4rQI0DGiu55UJqHR8owYMMaODG0tEiq12FQJaownsu9vgY6pgEjGDfwDHzKB9X5YCq5XVe06MQ%2FfVtpB4vDC5utI5GTGlCzjNt6kTsv6O82h9Kwa3DNhyClNVuXuoxsV%2BMjBxusa4KqWs%2F3NTp3QrM5EYg%2F98t3Ym1N1PE7PuxL1F9mSof%2Fz%2F2J%2Fb82b3IBnTHuNUOVXpr22QiUbaJDiSrZnUXcB2EBNt%2FcNFxysYGBx8ifIlIgEyl%2FhFfQg%2BxtxE69drPsR1HM0R3l&X-Amz-Signature=fb496470305f56f3dab54f40da5f461af82b3fa8328ae16bc19684edada54724&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGJ5EHWD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD%2Fjq1AJh0JIFrnceLl2uFyKqFt4iXTqSNt%2BkC9YBcplAIgR5M7dyjIXj1UBA3cojVRDFr7nS0Vga0T1o9zjOkEahMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxKCzVSYUQRcxH9yyrcA4kDi47xGCGBXot%2B6nJfCHk8l4kGf06Ikj4XcEeEmIcrurSBcZL3wsdXdeMTOseKv8ebTSlCWnYaLu886%2B0Iq82Oor%2BmmwZ0SntsBrPx7Qn9zUOcHsQ8dbZZJDCc6oIbjdDKRHysfZ%2B6Zr1tCOSzTmb3bZGkljudLXdksJQoG47xBpQYsUPZ731cqTFK%2BcVG%2FI4vf%2F9bawuE6BFkw%2F8rHJ%2FpBcXTMoS%2FY9j1904%2F9y1N1%2F2iNL%2FYTeOY1Qxg9WAzQ%2Fo5mJchxekwDiPFQtmQuB4fPBI2TkdfO6BZJSTIvVcMzYaIB%2BvighKOhpMFhU%2B4S9NzAvByqHbt4QTBRBhh%2BWnTz%2F0lQrP0P%2FIw8BJhh7RCcD%2Btx0%2FH7AT8RZdNWiJFNxeHTxzLR%2FUJyOIQyYE4K4dUl54nEiRdiWUh18xsOeUmaspaUeazPBc1BVsBZT3Q7vVlWlnQSeKpv3TjQFIyFlSqhuzpzmo80c98O0UZUWIdwcwXVLHgLs16kfMsY6%2F1wJOzWHbv5s5UJ4KgpRqMm%2F2N%2B7M1krhXvv3Q0cCoUnEvw4FuDuePB5cCfNuwvaAvH0plK4iTrgjGwYmh7VulJtxOGRrfQJ9YAe3%2Fsp2vmaEj4HvC3ZWt6luy4ikWML3Lvb4GOqUBU0RIRZSlP463A8408kIPprRv3fC6%2FoYCnGzpK5hSdcerlXAhekjTGFS5%2Fm04Pn0LYPUd98RVWtVQgdZs454yb8HVVnxTcFlI4Fih4zFlU5wspNT2ZI8%2F4%2B9qQ7CNmVM91b%2FA8a0%2BtyP44PtI%2FugbgLoA4Ga%2FI7zpqyvE9niMhua921G4CTkMMKf7eYESac0KF49mTPnbuMy4kHfjWrKOKd4xgaKa&X-Amz-Signature=04d608cad7535f52e1974d8790fd6862aecc1c4ceae3ad413268eb4bb1819d44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q6DXMP4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDmF6wk8zNvUEczswyhYeGSn1IC5nDN4Zi3AxdiH5fcaAIgOb2W5r%2BXLXz1Ixs7vMcbTZJZPI0MbtJc6DbZ2med6igqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAS1ss21N6vojaI1GircA6%2BAv9HJe4pGjKnKM5FMtZe2ZhUA9n9kgqddG%2F69cfGTJWDL%2BfRLWB%2BkiY3AqF9BFk%2BNmu7rNZcjP%2FI5%2B%2B1dZCzFLrUZdF%2FHYRH%2BS9yhY5ZSOcMR5xvssmzWZyqdrjU14KwTQeqZV4%2B4mA4HaFRqCE5ndMHsvjCTPYBk9AAeCkSFqrjYiAhuLDpZpoVw%2BjncYwgDQa33lcbqHGLSLlagIUp1V%2FigmjrFm2dP2emU8JYzXKsSpkpWQR8aKIX9As0Ald%2FUrRECBweAt7aO4uNwKWarOybRYLLCRhm6LoxsjqGA64Wy%2FYRbXSbtsaqHWiFhyIodlLi%2ByHVETTx5EHmUasLzmSRmcf9Ks4DaBAnkA4iv0J0RHiRtUpuZF0qEs4riWA%2FMjELlSt8DleKgX%2BZDq3CvtD%2BnVZXMdRtsX7CzFPyHXbnbSIfT7oScg7HLeikwtdo%2BzdSJ5gu%2FXLxKH5twCNRx1yAMWFO99cVFblioY4Irs%2FE6HO2I6Y5yl6muKS6t1bMeuNxtCi6HEAJuRm6284VZNJl46iM2fO%2FegECssz95EerTLNRZr7T56kNb8jJ75iPMeWZcV0CVY67xYQUiq3vZ7j9oXVLY%2BZzIA6IPGYSgC1FOU436mIT1gNTuMNPLvb4GOqUBU%2Fmhxg%2BxnyGPGug9NpbXxBFQuCGiRavU2APhMR7W39xpckOjW6A9cyqWEYeoOIL4TP%2FLLthOaqm3Yle69qR7mKiTcza4aRt5qkAO2vJVM166pdJRRrRtEKI1CQFYQWr5Nh2daZN%2FuFjLBFzJa5uLqV5dtfQXDo4LMaEeHZe%2FTqjSKjSVJ3m5xDVOSvU7gNMf12n3l12CAcNyjUZLe4Ik%2F8BtGMyW&X-Amz-Signature=68d03c0c0a444874badf4ba3579ca7718a5b1210e57d285da19befa207a4df92&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DBOKJ2I%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDvJUehWlJKGJs0TDPcPd4L9nCa0zvtAd1Ucue%2FNLH7pAiAqPzWfC81ml94MIkl%2FPO24BaidMf%2FXuZWMQ6yx5EcBgSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC7QyAwxan4TfTv6zKtwDPd%2F%2FjQOuzKnopKgdyRAaNoXBsOC65UlDiWXprkIxFmm5kh0w03LNmlDa77MdqktG9Gkaxd8ryAVO%2FSh0s2pJrt%2FrnY8Dnwn%2FQGHmrDLxuKhS4bJTXeFszL8K09bBpIqxKlGS5ALPHS%2Ftwo2%2FNVRZMMmGmg4vHw%2FPLufeyvEkzT3aumgbJQWokSDE2ac4tq307V%2FZ%2BjK1XTbPqPbGLE0pv2Zk40Hjp0NzlKpT%2BKUQ75R%2F8wHcf1tcn4gMfSRN9PRFsd%2BIGsf81E1Z7vf04eq1ILdF%2BZtripMuwQT62tdfF0xYKDgv6dqW2XzFOlLd9csQijf6%2FWe9WdS3m7KRkWpofymo6XAELWP9TuQ0NIXA7YfvQSHQhqPmif%2BlfXQhf0TF%2F9lf18qYsR5yCXu4duhV1hmQbA0Dvk4cWHSKL8ZVrIhMgjTjNGnPk9ZzqV3GWUCsyVBiHJEyQ6m%2F2F1gUM0DCZQSkoI6dRuqiMLlY4XwlsoYqJsEp4Y319ahZhxqGbkDSUMr3cT7q8qOHelKE%2BunhTTqd810xCj27OJjAOQiKbKJU0FzjO%2FfugUc9OV596sOZDLuDEXKM%2Brdnppx%2BP64e4rQI0DGiu55UJqHR8owYMMaODG0tEiq12FQJaownsu9vgY6pgEjGDfwDHzKB9X5YCq5XVe06MQ%2FfVtpB4vDC5utI5GTGlCzjNt6kTsv6O82h9Kwa3DNhyClNVuXuoxsV%2BMjBxusa4KqWs%2F3NTp3QrM5EYg%2F98t3Ym1N1PE7PuxL1F9mSof%2Fz%2F2J%2Fb82b3IBnTHuNUOVXpr22QiUbaJDiSrZnUXcB2EBNt%2FcNFxysYGBx8ifIlIgEyl%2FhFfQg%2BxtxE69drPsR1HM0R3l&X-Amz-Signature=b3f05b69e2fd9156392dcff73eceeaa99d37e23a57a511b79f3ba6db1da2097e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
