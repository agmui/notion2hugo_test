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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTHVDFGZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTJKL0RLKiTwfN1MRR7Cu6blcqOj%2B3Edf%2BoBqkasEHrwIhAMycn7KYLz2QDrZH1KAWADdpsL3mHMJMbUzyN9zvWPz7KogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziNV72c2suAUwMockq3ANU%2FKKG0NOtO6G8GN5Mewzh9%2BC0Y4CEMJN39pFpZaOMUEENwqrO3c%2FYS%2BKBxLuvWrmiMbig9N4xVPwBHaTkJ1DbHfFzxIJalzR7So8Gz4BXKinycwUdqJrmQcyomxK4AUYPbqlBxASdbY2s9YBVHyKvLOsCLAGAi8uFhArtAXqi263jhLegk17dOzuHClnv1WBeGxpbqMY7HF8HLM3IvZEV3%2BZaCaKvEVKhY41ciUtNrfkWUcku8FmwQS3leahWsKUltjhFBU%2FNYgudKxf1dDUK8mOSTZIloWB1ALWOzn2mkMuCLMiq%2BbO%2B0gipJGbL8B9Tune2fEipbZvg7JtUWBCx0PKuEhB5l%2F35l%2Bb4BpStVcD0YAD3kGhCRgtjR0ongDePMJ4SQ9lRGy%2FtmB2I5Up0WdWH6eGMALISz%2FaFo6abyvcDPjAJ9p%2BK8Q2Z1fFzDvyBdDZCusbYckBbDAKIPVAnoR19dG%2BIOlXVtTUgsi9XLMdAyGuXeQ0QPIhYAgNdXsa754ncE7fIqMe2l6Jtr37F3rHAuk0w1TZeTiRuS4j4S0akDIa5Cviu0FWZIIdpNKMgx6ei5DXt16xuLFAMgwzzDzrT9WkAin0zm1m6l0Ggrk6Ixz0bZYujjTH2hDDBvZbDBjqkARhNAcEQfrU%2F%2BEm8GR1jxoNWn0PqPV7KRzAE9j72nVH%2B2DwYybH7CX7UsecSuKduYIPMDhby1eAcbwEnin0JZqvFm8JzTjLrYi0a8ChK6ymN8MSWc4DA4lFXH84e3qNBk8w2gQc%2BXN2EEeRQNLmQwubGOTm7x7Iem6VY5WRufW8Y5pHiuFaH9U9jU0nq17KedvcZJHyn%2Bb143Paw4%2B7WuIcMxMDs&X-Amz-Signature=4500b47d3c56d79030b1108a3d8045f61e6b9b0854a6a9d0a30d9aff953f93ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTHVDFGZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTJKL0RLKiTwfN1MRR7Cu6blcqOj%2B3Edf%2BoBqkasEHrwIhAMycn7KYLz2QDrZH1KAWADdpsL3mHMJMbUzyN9zvWPz7KogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziNV72c2suAUwMockq3ANU%2FKKG0NOtO6G8GN5Mewzh9%2BC0Y4CEMJN39pFpZaOMUEENwqrO3c%2FYS%2BKBxLuvWrmiMbig9N4xVPwBHaTkJ1DbHfFzxIJalzR7So8Gz4BXKinycwUdqJrmQcyomxK4AUYPbqlBxASdbY2s9YBVHyKvLOsCLAGAi8uFhArtAXqi263jhLegk17dOzuHClnv1WBeGxpbqMY7HF8HLM3IvZEV3%2BZaCaKvEVKhY41ciUtNrfkWUcku8FmwQS3leahWsKUltjhFBU%2FNYgudKxf1dDUK8mOSTZIloWB1ALWOzn2mkMuCLMiq%2BbO%2B0gipJGbL8B9Tune2fEipbZvg7JtUWBCx0PKuEhB5l%2F35l%2Bb4BpStVcD0YAD3kGhCRgtjR0ongDePMJ4SQ9lRGy%2FtmB2I5Up0WdWH6eGMALISz%2FaFo6abyvcDPjAJ9p%2BK8Q2Z1fFzDvyBdDZCusbYckBbDAKIPVAnoR19dG%2BIOlXVtTUgsi9XLMdAyGuXeQ0QPIhYAgNdXsa754ncE7fIqMe2l6Jtr37F3rHAuk0w1TZeTiRuS4j4S0akDIa5Cviu0FWZIIdpNKMgx6ei5DXt16xuLFAMgwzzDzrT9WkAin0zm1m6l0Ggrk6Ixz0bZYujjTH2hDDBvZbDBjqkARhNAcEQfrU%2F%2BEm8GR1jxoNWn0PqPV7KRzAE9j72nVH%2B2DwYybH7CX7UsecSuKduYIPMDhby1eAcbwEnin0JZqvFm8JzTjLrYi0a8ChK6ymN8MSWc4DA4lFXH84e3qNBk8w2gQc%2BXN2EEeRQNLmQwubGOTm7x7Iem6VY5WRufW8Y5pHiuFaH9U9jU0nq17KedvcZJHyn%2Bb143Paw4%2B7WuIcMxMDs&X-Amz-Signature=b84031c55f2c3c348c9c3efc46e9043726c4729fb869d730ffabc67dd63550d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTHVDFGZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTJKL0RLKiTwfN1MRR7Cu6blcqOj%2B3Edf%2BoBqkasEHrwIhAMycn7KYLz2QDrZH1KAWADdpsL3mHMJMbUzyN9zvWPz7KogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziNV72c2suAUwMockq3ANU%2FKKG0NOtO6G8GN5Mewzh9%2BC0Y4CEMJN39pFpZaOMUEENwqrO3c%2FYS%2BKBxLuvWrmiMbig9N4xVPwBHaTkJ1DbHfFzxIJalzR7So8Gz4BXKinycwUdqJrmQcyomxK4AUYPbqlBxASdbY2s9YBVHyKvLOsCLAGAi8uFhArtAXqi263jhLegk17dOzuHClnv1WBeGxpbqMY7HF8HLM3IvZEV3%2BZaCaKvEVKhY41ciUtNrfkWUcku8FmwQS3leahWsKUltjhFBU%2FNYgudKxf1dDUK8mOSTZIloWB1ALWOzn2mkMuCLMiq%2BbO%2B0gipJGbL8B9Tune2fEipbZvg7JtUWBCx0PKuEhB5l%2F35l%2Bb4BpStVcD0YAD3kGhCRgtjR0ongDePMJ4SQ9lRGy%2FtmB2I5Up0WdWH6eGMALISz%2FaFo6abyvcDPjAJ9p%2BK8Q2Z1fFzDvyBdDZCusbYckBbDAKIPVAnoR19dG%2BIOlXVtTUgsi9XLMdAyGuXeQ0QPIhYAgNdXsa754ncE7fIqMe2l6Jtr37F3rHAuk0w1TZeTiRuS4j4S0akDIa5Cviu0FWZIIdpNKMgx6ei5DXt16xuLFAMgwzzDzrT9WkAin0zm1m6l0Ggrk6Ixz0bZYujjTH2hDDBvZbDBjqkARhNAcEQfrU%2F%2BEm8GR1jxoNWn0PqPV7KRzAE9j72nVH%2B2DwYybH7CX7UsecSuKduYIPMDhby1eAcbwEnin0JZqvFm8JzTjLrYi0a8ChK6ymN8MSWc4DA4lFXH84e3qNBk8w2gQc%2BXN2EEeRQNLmQwubGOTm7x7Iem6VY5WRufW8Y5pHiuFaH9U9jU0nq17KedvcZJHyn%2Bb143Paw4%2B7WuIcMxMDs&X-Amz-Signature=17f5cde5e713b7e205856a35f7245d8b4a225de0a52227f2de8ebbd003fde548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654WQYQFU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr8Uvapr%2Bxa7179vEoMNCRID1qMedgjY10NzuP5GxGngIhAK6qnhINqthAgBntAQJSNiU6rjtDfH470ny2hxqq25MBKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrZYzco%2B9Q0t8BH50q3AM1Qk8Bwgaq9PBgZ4L0TMYTMWzLz0J6Iezw2NchrYWB3xc2lHvmwksukGCf9OgGPZhnPGkjUqkWnVsbjMs%2B03nsuwZH%2BtarRdbsfz6vasD%2BicmS2ZMrjB9zA1clDA9033ISppwxuf5oCbSz111Il2RhefS%2B8fMIjqQ%2BhD1vhnE3P5PmlVavGlwUwBAU2%2FzTbNenUDwDbZwuDdCaVgz8dVjPIbgCqveV0FFlhH3SbHjpMLqT0WCKoLm5MMZ4nwqKMxgeflFlFSNts%2BtJGnm%2FLdxDg7mVWEUwgX3o050BWv%2FphSCyk1mlwEbvslO0pzF0DFAwQVnrqFORKn6aiVWKXrxUWvqa1crS%2Bkk0gIaQo0yeTMwB49ckpcE1BOoRzrvxUsnPbYpRWDqYohlM5jfPn0q7vgQUpsyq0c5KpBsSXF28jM7GJoBlYymQ8zgRCkocv%2BZQPWUd8zCEXjKDW8TshX0kO2qlCmwbFvIqpCV71aI1Q2Jf3T1Wqj08B1iOFu4vK6qSFcmLNZ6%2F4oUiJ1DuhiBMO5r9745FKXWPNZ0EoO4auHQtMKiMWy3CxblJcfUsFm8bK8k2UUo8syURMOZzGdw27mn1T1hoxzES1ZwMjwPnNnmv9nlzYo94TZ%2F8wDD8vJbDBjqkAX%2B0dU6on8SbNGrxMQw%2Btub4CX7ZbRpRFYy8mxLZkpC6JJ1BFuLC68U%2BpZ7vQBCJfxPRjYSVyNQjljt%2BWQdtGAebc8e0maY5hJmRT3f%2Bv9%2FBxMtrKqNqjebvC9cBQ%2BhrS5bXL9QaHMvuGAuc9PLpuNLoDcXRMRQ8m1xVtBNNd8A9VNyvQObLmkZNfMCoPgduJklcsOen0yoXIVnsaRGOxDJQ5iFK&X-Amz-Signature=8c68d642ddbcb6abc75653946b28f683376ba5eee6f6898714a566b22e87ab2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZMJAB5P%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN7VVVrCO%2FdpBYQZAQlBP8lxf0cNqAfXq0Di6IMzxOjQIgdUnz8uenzdkUXqCeBN6KA8OMlImZI7sBWT952e58LjAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNH4d88uLz85KW1LBSrcA5Y78uQSjKb3y3k24T3dco8RVFDdlqcWswijH8yhlOkmHyBGIOs5toyh81MDUmrKeVWbAqogG3rbP8AnHlSvTnjrdzyGXKbudqE3rCu1UBSO%2FlWpEOcd4WIDm%2F4CgGOpRLzZmqdoGbXqy%2FLcXrgDsE%2FUmWbZC77eCAKTNFAsJ7VkXhUO7o12h4sXvtuiBm9exNqNtCk7Pyf85fbFQfQrt%2FGz41vSxRtBdkSjyGLpb1pCJOFIyrlilhUzIA4fcYuh%2Bm%2FkHJa5KNLGrdRoni4Z9WdjATxUMG7xH%2FSFX7gXcpndwLcsIZWO0NNu3XdLbV0ho61YyCt24WPwGXOyATlKGoOfrHq2YYKbgA1eHgmm76M%2Bku75WGw8ZQLB5y%2FFabvlsLoHFlyZWmicAzTHGfUtDt5B7j3gcTXc6JxIXfW5SXrEfp13mhp4a2vcIIu3B1DhHh83ynRu2GuntUuTM9y3%2B7oKgR6ZwWh9OAQ9c2jYvW9ENycpwIWAzhMpOtmyt4p8KN07XnIFwWn9VomOmbgJqrlzn%2F1tZCFrj6Q5CidJmEypSc%2BCTwjFQmGlMzmrgqqnP37EVi0dmP%2BDb%2BZ6stVIfasQ%2BnUhNUJ%2Fgv0riuhjp46%2Bmr24Uh1Wj%2BHTUts3MMy9lsMGOqUBwa0go3vE%2BMeaGuyEkRZHUiMBl8W5zFS%2BIhZdeZYRLQlL35RixQkMz3Nw5NkNhAkf0JevRjIBtJfZFcLMIf9k6OcYHrbmdLEhY0rrVEkQdYkdkcwQBG%2FA7fcEaPMYdqtaavJk%2BKeeaNAo0agmWgdQndFex3fkvJ2vZfG8TefNtHXInZaSZyUk6oy43uUNZDUBjMpj6hF99yKt7A5YyEOv7ZR34Fzq&X-Amz-Signature=24cf1f7a4b5ed7ed39d7b5b5662aa548fe33c1308f51c84a3b336235edcf7c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTHVDFGZ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTJKL0RLKiTwfN1MRR7Cu6blcqOj%2B3Edf%2BoBqkasEHrwIhAMycn7KYLz2QDrZH1KAWADdpsL3mHMJMbUzyN9zvWPz7KogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziNV72c2suAUwMockq3ANU%2FKKG0NOtO6G8GN5Mewzh9%2BC0Y4CEMJN39pFpZaOMUEENwqrO3c%2FYS%2BKBxLuvWrmiMbig9N4xVPwBHaTkJ1DbHfFzxIJalzR7So8Gz4BXKinycwUdqJrmQcyomxK4AUYPbqlBxASdbY2s9YBVHyKvLOsCLAGAi8uFhArtAXqi263jhLegk17dOzuHClnv1WBeGxpbqMY7HF8HLM3IvZEV3%2BZaCaKvEVKhY41ciUtNrfkWUcku8FmwQS3leahWsKUltjhFBU%2FNYgudKxf1dDUK8mOSTZIloWB1ALWOzn2mkMuCLMiq%2BbO%2B0gipJGbL8B9Tune2fEipbZvg7JtUWBCx0PKuEhB5l%2F35l%2Bb4BpStVcD0YAD3kGhCRgtjR0ongDePMJ4SQ9lRGy%2FtmB2I5Up0WdWH6eGMALISz%2FaFo6abyvcDPjAJ9p%2BK8Q2Z1fFzDvyBdDZCusbYckBbDAKIPVAnoR19dG%2BIOlXVtTUgsi9XLMdAyGuXeQ0QPIhYAgNdXsa754ncE7fIqMe2l6Jtr37F3rHAuk0w1TZeTiRuS4j4S0akDIa5Cviu0FWZIIdpNKMgx6ei5DXt16xuLFAMgwzzDzrT9WkAin0zm1m6l0Ggrk6Ixz0bZYujjTH2hDDBvZbDBjqkARhNAcEQfrU%2F%2BEm8GR1jxoNWn0PqPV7KRzAE9j72nVH%2B2DwYybH7CX7UsecSuKduYIPMDhby1eAcbwEnin0JZqvFm8JzTjLrYi0a8ChK6ymN8MSWc4DA4lFXH84e3qNBk8w2gQc%2BXN2EEeRQNLmQwubGOTm7x7Iem6VY5WRufW8Y5pHiuFaH9U9jU0nq17KedvcZJHyn%2Bb143Paw4%2B7WuIcMxMDs&X-Amz-Signature=140ccd39783852f20976b4ec6a91dbff202c4e9aeb401f6663d9e3a970d84f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
