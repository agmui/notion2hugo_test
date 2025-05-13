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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHEUKVC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJFMEMCICs76Y7MGRTuCEqHCCvfSerGI9SPIOf3LMFz0CwKymEAAh9jM6tGDiuKfjvWp2IouwEe4Y8jFkNGnv7xN6dsvRl%2FKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeC8eEnJjT%2FjUyw8Aq3ANKBRbeED3fnHszrPEIezQv83l4ut140SipYi4CRPIOQ85yBuBUStVlidNp8rys%2BWwZ2%2F2UMMu8pF86LRJZPZm%2FaB4Llmko1iL7aDrF8YCAl2ja7wlLx31UbtmjpXzeXZf4cpwzK75xnQpm6RGqj182UHmEFS%2BMRInKWo35pR52Xjbux1vsVgPVoOiJnmalIxHL%2BdD%2BznNZNnz%2FQwnyWDCEpJ39hmc9rarOWWrFmehHc8Bu6ZZPtBOstAX9h9Td89X3hEkE2mgSXY8%2BtmKqUoOBBeepGQHBN0VydARBGuDZiUk1d%2B%2F8H4AQBo24YMHiaZv5FYkeDTTaqxpHV3DLslnPtQLKODzM%2BNFnAm%2F5zk5Wy1DaOQvkEBic%2FxgOcjbEJqymIhJ8zhEjwUk5FErhUiObKTLrRbv2bzNO%2F0TPB4M%2F%2F64ihKYcWUDXyTjQbwMwIVkwx6mf9UxwEsC3Ni6DPr6%2FAqdbriINY8hB%2FXRhkC8wm5B%2FlX0mkgLyVb5zwQ7umOiHmLeyz%2BzAmCODxz%2BCXUfEZXJrsozevZ0CNMKsk5TxfioqpCLWqEgErHbZLJQ7JJpJd2recskShlKFAY265PyvgluIu5I%2Faj8O3T7wqN2q49Bh%2FyuDsOkhEqhNvjDYqIvBBjqnAThC8611K6CQ5geumYhR3kLK4Avl3ZpFkHkSVgejY8nj3awcH8O3vJjkuCAQgtaQUc%2BXw69uGCkMJyxxC8WN8SQYv5FnBggpxkoB8JMyXLaqU4YisjaU5ju5vI3FPTTV6g8xe%2F10O95X2kFN3H6%2FAGHM5fYgiTVQXweJs5dPBSV8jfu0H%2FfV941oX5UQtBmiHDzN%2BG92urNuS9Vokqfq0fyCWdATmNx6&X-Amz-Signature=2faae1484c7592855614888f080cb7c5ae2b2b8f9de7e9103d1388ff808e454e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHEUKVC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJFMEMCICs76Y7MGRTuCEqHCCvfSerGI9SPIOf3LMFz0CwKymEAAh9jM6tGDiuKfjvWp2IouwEe4Y8jFkNGnv7xN6dsvRl%2FKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeC8eEnJjT%2FjUyw8Aq3ANKBRbeED3fnHszrPEIezQv83l4ut140SipYi4CRPIOQ85yBuBUStVlidNp8rys%2BWwZ2%2F2UMMu8pF86LRJZPZm%2FaB4Llmko1iL7aDrF8YCAl2ja7wlLx31UbtmjpXzeXZf4cpwzK75xnQpm6RGqj182UHmEFS%2BMRInKWo35pR52Xjbux1vsVgPVoOiJnmalIxHL%2BdD%2BznNZNnz%2FQwnyWDCEpJ39hmc9rarOWWrFmehHc8Bu6ZZPtBOstAX9h9Td89X3hEkE2mgSXY8%2BtmKqUoOBBeepGQHBN0VydARBGuDZiUk1d%2B%2F8H4AQBo24YMHiaZv5FYkeDTTaqxpHV3DLslnPtQLKODzM%2BNFnAm%2F5zk5Wy1DaOQvkEBic%2FxgOcjbEJqymIhJ8zhEjwUk5FErhUiObKTLrRbv2bzNO%2F0TPB4M%2F%2F64ihKYcWUDXyTjQbwMwIVkwx6mf9UxwEsC3Ni6DPr6%2FAqdbriINY8hB%2FXRhkC8wm5B%2FlX0mkgLyVb5zwQ7umOiHmLeyz%2BzAmCODxz%2BCXUfEZXJrsozevZ0CNMKsk5TxfioqpCLWqEgErHbZLJQ7JJpJd2recskShlKFAY265PyvgluIu5I%2Faj8O3T7wqN2q49Bh%2FyuDsOkhEqhNvjDYqIvBBjqnAThC8611K6CQ5geumYhR3kLK4Avl3ZpFkHkSVgejY8nj3awcH8O3vJjkuCAQgtaQUc%2BXw69uGCkMJyxxC8WN8SQYv5FnBggpxkoB8JMyXLaqU4YisjaU5ju5vI3FPTTV6g8xe%2F10O95X2kFN3H6%2FAGHM5fYgiTVQXweJs5dPBSV8jfu0H%2FfV941oX5UQtBmiHDzN%2BG92urNuS9Vokqfq0fyCWdATmNx6&X-Amz-Signature=5b940e9513c2349c9b8a375a3e12bc73caa49e9e37704b06ba5f17c8f9cd33c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHEUKVC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJFMEMCICs76Y7MGRTuCEqHCCvfSerGI9SPIOf3LMFz0CwKymEAAh9jM6tGDiuKfjvWp2IouwEe4Y8jFkNGnv7xN6dsvRl%2FKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeC8eEnJjT%2FjUyw8Aq3ANKBRbeED3fnHszrPEIezQv83l4ut140SipYi4CRPIOQ85yBuBUStVlidNp8rys%2BWwZ2%2F2UMMu8pF86LRJZPZm%2FaB4Llmko1iL7aDrF8YCAl2ja7wlLx31UbtmjpXzeXZf4cpwzK75xnQpm6RGqj182UHmEFS%2BMRInKWo35pR52Xjbux1vsVgPVoOiJnmalIxHL%2BdD%2BznNZNnz%2FQwnyWDCEpJ39hmc9rarOWWrFmehHc8Bu6ZZPtBOstAX9h9Td89X3hEkE2mgSXY8%2BtmKqUoOBBeepGQHBN0VydARBGuDZiUk1d%2B%2F8H4AQBo24YMHiaZv5FYkeDTTaqxpHV3DLslnPtQLKODzM%2BNFnAm%2F5zk5Wy1DaOQvkEBic%2FxgOcjbEJqymIhJ8zhEjwUk5FErhUiObKTLrRbv2bzNO%2F0TPB4M%2F%2F64ihKYcWUDXyTjQbwMwIVkwx6mf9UxwEsC3Ni6DPr6%2FAqdbriINY8hB%2FXRhkC8wm5B%2FlX0mkgLyVb5zwQ7umOiHmLeyz%2BzAmCODxz%2BCXUfEZXJrsozevZ0CNMKsk5TxfioqpCLWqEgErHbZLJQ7JJpJd2recskShlKFAY265PyvgluIu5I%2Faj8O3T7wqN2q49Bh%2FyuDsOkhEqhNvjDYqIvBBjqnAThC8611K6CQ5geumYhR3kLK4Avl3ZpFkHkSVgejY8nj3awcH8O3vJjkuCAQgtaQUc%2BXw69uGCkMJyxxC8WN8SQYv5FnBggpxkoB8JMyXLaqU4YisjaU5ju5vI3FPTTV6g8xe%2F10O95X2kFN3H6%2FAGHM5fYgiTVQXweJs5dPBSV8jfu0H%2FfV941oX5UQtBmiHDzN%2BG92urNuS9Vokqfq0fyCWdATmNx6&X-Amz-Signature=1d5d8c400748c7989b7e27ffc130344e58f341cc01d078674da4ea1b4aba101a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7CSQHH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDX6AFdBklEsVqlxYPnVEuTQS7%2BkzGVH0Y%2BSxp8VSop2wIhALEqGoCbnB4qLtI3MbYh4gcsmrwYiGGEFP13oNJOwpfaKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznCO5xPH6suZXALeIq3APzJiIpavMt7BAylv7Da0kB9IgUq7FHRWPegirLued0%2Bv1vGindSnyuN8GqvOUwgGpF4%2B7iV9zXfSULTC5p%2BrbspqV2rQdD0vVxmeCA1I9w4KGYeGH4wG%2BCBZytxINCGSIBf8xVGVFzvw0m%2BtVNdMTSX50P4qjEWWQfogqO0GUIyT7UCPq0QcqVu4hZCGNsK%2BES9zmyBdllGPLK92GDU5j5LPyxMnpMr5tt2bf4fEt7oYEGTF1mHc6Fi%2BJ4wP5xbdNoi2ghCcguzEA2TuZcvtxcxDZXNIhl6LsK36UREg1UpQefK%2Fa1b2nI2gOwGfYCXhPTtrjtqDYdQgffus%2FRxpBKjJS5HPhs32N5p8FFgyuugf%2BzEEfhHLahZHiHlpMJywWaW%2BYcN8sZzqHgnIbrIsfCncp9yEci4FVYaHPF4gnxRRwTh83OtP%2FjciNWBO82AjWQ%2BhylPLNdyowcbb87jMfAfHIG%2B2htI%2FbnRhpF9QYIx1UhaSARlzAgR90dTd1Zy0KUpmnALIAdKVOVtP%2Biny5BTBd1tiK7mE3a8yAmuueSSiR1Sd41XM7g6bzT1Xx9YCIrxvlFw%2F2Y2rZP8iLP3lxuHGUfMyACsqKw7OOkpjpE%2FDW%2FdMLf8%2FqNV9uNKzCwqIvBBjqkASvMkU3uqTx1jos4vo9B2jEbCGudnjokX7duKEDe7v7rfH1M6i%2BQYbsumCmSfs0BrKN1fbl4WO4fP70%2Fogz2pRWQG9YhijuxJKV2WUrp6LaUI2QBhOqyYg2G6D%2BlhbtsKHf22ZUD%2Bu5gLqwLVL7%2FZTFMX3TT0oA3%2FhWPG0DPd2xK6nilyK98S5rZRiavHEvLD%2B38UREmyj%2Bd6fyeaO0JdE%2FucYlh&X-Amz-Signature=cf8dcb7fd68444ccd4c1afd562d2fdecd491f27cf7bfaa95d927b8c0b64aa789&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V42GT7M%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDX4FUSIl1fzSyu9LUP5Kss04mJ4Hfe6qeSMQ3SgtYRhgIgds4Zgb3SQPTEYIIKEafkWf6eLghPE6U9ccDWa2zit0wqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMo4gArkmH8YlAgxfCrcA8ugnymFsSZuDpTTcdsFye7D5tY0OSJP2wIoYLPzkOLs0IkcYzBX%2BNAVLknDIVAHUpvRRi5Agkr9PBbnGavHxeJyAA6CFOv3CIdgZ3oDRjLNzRUFmAoPBWtntIi8DfImlBhPYMHR29mpWW%2FIpDSIkjNUjquw3OsWCgrFx5um2oSblvnt1jyiiz8PHdm0SqGpaXagb73bYJfl6AwCB75UapwLRSrzPnkVDsI8EgYdRyPuZEdwaN5LmXHU55RqZtDTsXe0QG7VDKg0opkxnDakcaYmtxqAWOnkFdukyRHbVfsTi%2BHDcmWBDWE%2FDri7%2BTcN2idxj4F86p3TvG3VsHJERLrA35PobYH01RSR6jYkh4dc8SEaVXc%2BkPKbhc2YxYT%2F5D409NecByD2giW%2FW%2FWusW0plqDBPA5LqaRpoQ0pUwp9j3BqVMahlwyBvQBo0BOaL1jLYKuY33xJ7dsjcnAU8TSkWpBhpjrTFYsegsipo9LD26vP2RfomUjbuTe5L7YrNIAdI3jJqR8mDmn25dxGoZWC5uGpmRNKWp%2BGFvfRdOUt5AlR68RqRHuShLJqG8jL1a8U4LP66pBXdcQhptsy%2B%2F8267hrpkq8JQIG3jKAkZzHnhKQZvlTA%2F0cEMTdMOOoi8EGOqUBIGdIuctjsa8iGeHg3hIECvOiSlHhOP4dqPZeT2WrZTZt1bgO9F%2FlMYaSoHcrAH%2FirWgAvh7%2Br9GvO6JRd6hw%2F%2BtJd4RQ9FCjcvssHljEml0Jo%2FaazI2b33dUobWL8uk%2BBLWwwsbcGlo%2FedYGonwbsJ25PbBBqNab%2Fn5sT1jJCPeHxfKr6hGhlL7DSwkYMNWB5E%2BIKfn2kaXmB%2B67asH6rDDVMO%2FI&X-Amz-Signature=e61c9be25892a7ad1fe8b57237a75016bcc5e53af19cc8ff09d0eb5711cfd30c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHEUKVC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJFMEMCICs76Y7MGRTuCEqHCCvfSerGI9SPIOf3LMFz0CwKymEAAh9jM6tGDiuKfjvWp2IouwEe4Y8jFkNGnv7xN6dsvRl%2FKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeC8eEnJjT%2FjUyw8Aq3ANKBRbeED3fnHszrPEIezQv83l4ut140SipYi4CRPIOQ85yBuBUStVlidNp8rys%2BWwZ2%2F2UMMu8pF86LRJZPZm%2FaB4Llmko1iL7aDrF8YCAl2ja7wlLx31UbtmjpXzeXZf4cpwzK75xnQpm6RGqj182UHmEFS%2BMRInKWo35pR52Xjbux1vsVgPVoOiJnmalIxHL%2BdD%2BznNZNnz%2FQwnyWDCEpJ39hmc9rarOWWrFmehHc8Bu6ZZPtBOstAX9h9Td89X3hEkE2mgSXY8%2BtmKqUoOBBeepGQHBN0VydARBGuDZiUk1d%2B%2F8H4AQBo24YMHiaZv5FYkeDTTaqxpHV3DLslnPtQLKODzM%2BNFnAm%2F5zk5Wy1DaOQvkEBic%2FxgOcjbEJqymIhJ8zhEjwUk5FErhUiObKTLrRbv2bzNO%2F0TPB4M%2F%2F64ihKYcWUDXyTjQbwMwIVkwx6mf9UxwEsC3Ni6DPr6%2FAqdbriINY8hB%2FXRhkC8wm5B%2FlX0mkgLyVb5zwQ7umOiHmLeyz%2BzAmCODxz%2BCXUfEZXJrsozevZ0CNMKsk5TxfioqpCLWqEgErHbZLJQ7JJpJd2recskShlKFAY265PyvgluIu5I%2Faj8O3T7wqN2q49Bh%2FyuDsOkhEqhNvjDYqIvBBjqnAThC8611K6CQ5geumYhR3kLK4Avl3ZpFkHkSVgejY8nj3awcH8O3vJjkuCAQgtaQUc%2BXw69uGCkMJyxxC8WN8SQYv5FnBggpxkoB8JMyXLaqU4YisjaU5ju5vI3FPTTV6g8xe%2F10O95X2kFN3H6%2FAGHM5fYgiTVQXweJs5dPBSV8jfu0H%2FfV941oX5UQtBmiHDzN%2BG92urNuS9Vokqfq0fyCWdATmNx6&X-Amz-Signature=e22dd75b8d9c531b24b14681957dfb6341e3d8dd8bf9c4e873acb5ca413863e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
