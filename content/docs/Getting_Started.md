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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKWTOV5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIFcVlnTYKg7FDULXET4gQvx0UERpa9abA5GdYzUq3twIgKdmNeh9KYMY6n2urvJus7M7VFyusOmG5fiZV8pSAd3MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQJA6qGfPQv3CPtKSrcA%2BIIc6RQL5o16ZXISKk5uJnXnRASffEN4Y%2BYVWAdHnAekl%2FPZ%2BQzcFmH6IZIBGB7PtzR82Caud9XKKE7G%2FZOe%2F4P5cAH3VyDDW%2Fzt8pajwsK74nsGRwqcwIKr5x4zU39v9wux8Praa6D6E2jBGEpG0z1S4SQzh6XJ%2Bk7BR28M%2FeQQCpWIgiIRTWKf%2B7xCYUYbCuH9ObbfA0yLfaM7L%2BwoZPrvFQ1ElK4%2BA6ndxhQ89dg1M3QmZ8CKBAEJUgIVhsft9Xw%2FljQa7q1kqdCK2a1mGTt1MwA6oEA%2BU77cBEe2NVtuCjEWCDdIS60uhyUF%2BHtDIKUELpoxtI9ygu8xKmRcmGW1wxhyCJm%2F5UBrOF2mvmPLtp9ZjTsBsiMsAKEaY2lcJ5mF7Rb7cdKWj6pdU3xnjBoP1YiYJgrowac2ueAV2C8KHZG76XMCYAUlJao%2BHX6WG16LfzMChZydGZwrhRjW7eol5XetC2a5RDHSsNp20RY89RW9zgxN4vbn6A%2FOI3GQrblmRawgWnuA%2Fwn1QAG2WG0RvBsyDdTxPLv1PJo%2Bp7bxVUcWNynER7NQI5MYSfTuQz6T%2BdBRoFZLDAmYWJ7MrRk67ITW%2BVXP95X1gv%2FKSfv5BwBiQA7kkN8W0bQMLWO08IGOqUBRJv5akqQxOVg9KvFULDpuQBt7WbhgfOINk83KN8XnfLwn0yGEHz5kCOAh70y9P1Ubp8mH7LN%2FwhpqDuXqp6RCcPDMHIIujYhYXNAPUghThoory%2Blckn9Qv5yMxD3CU83z9PwlpgOXy8DW%2FKHP4KfxCOb2o99G7WW1wP%2BqXXqxXVtIqUf3aiqsByyF2SRzBU387EEkNWVJ0BWZTohytXnOX%2FNbNF0&X-Amz-Signature=c6ae26b048509d82c3f5576f92033e71cd7b1fdbc76f156fc02b32b83619d34e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKWTOV5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIFcVlnTYKg7FDULXET4gQvx0UERpa9abA5GdYzUq3twIgKdmNeh9KYMY6n2urvJus7M7VFyusOmG5fiZV8pSAd3MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQJA6qGfPQv3CPtKSrcA%2BIIc6RQL5o16ZXISKk5uJnXnRASffEN4Y%2BYVWAdHnAekl%2FPZ%2BQzcFmH6IZIBGB7PtzR82Caud9XKKE7G%2FZOe%2F4P5cAH3VyDDW%2Fzt8pajwsK74nsGRwqcwIKr5x4zU39v9wux8Praa6D6E2jBGEpG0z1S4SQzh6XJ%2Bk7BR28M%2FeQQCpWIgiIRTWKf%2B7xCYUYbCuH9ObbfA0yLfaM7L%2BwoZPrvFQ1ElK4%2BA6ndxhQ89dg1M3QmZ8CKBAEJUgIVhsft9Xw%2FljQa7q1kqdCK2a1mGTt1MwA6oEA%2BU77cBEe2NVtuCjEWCDdIS60uhyUF%2BHtDIKUELpoxtI9ygu8xKmRcmGW1wxhyCJm%2F5UBrOF2mvmPLtp9ZjTsBsiMsAKEaY2lcJ5mF7Rb7cdKWj6pdU3xnjBoP1YiYJgrowac2ueAV2C8KHZG76XMCYAUlJao%2BHX6WG16LfzMChZydGZwrhRjW7eol5XetC2a5RDHSsNp20RY89RW9zgxN4vbn6A%2FOI3GQrblmRawgWnuA%2Fwn1QAG2WG0RvBsyDdTxPLv1PJo%2Bp7bxVUcWNynER7NQI5MYSfTuQz6T%2BdBRoFZLDAmYWJ7MrRk67ITW%2BVXP95X1gv%2FKSfv5BwBiQA7kkN8W0bQMLWO08IGOqUBRJv5akqQxOVg9KvFULDpuQBt7WbhgfOINk83KN8XnfLwn0yGEHz5kCOAh70y9P1Ubp8mH7LN%2FwhpqDuXqp6RCcPDMHIIujYhYXNAPUghThoory%2Blckn9Qv5yMxD3CU83z9PwlpgOXy8DW%2FKHP4KfxCOb2o99G7WW1wP%2BqXXqxXVtIqUf3aiqsByyF2SRzBU387EEkNWVJ0BWZTohytXnOX%2FNbNF0&X-Amz-Signature=5a3c4da9f6f0824acbf59b3ce95bc873e22e3a4228fa1c96d4370e2c165be3c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKWTOV5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIFcVlnTYKg7FDULXET4gQvx0UERpa9abA5GdYzUq3twIgKdmNeh9KYMY6n2urvJus7M7VFyusOmG5fiZV8pSAd3MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQJA6qGfPQv3CPtKSrcA%2BIIc6RQL5o16ZXISKk5uJnXnRASffEN4Y%2BYVWAdHnAekl%2FPZ%2BQzcFmH6IZIBGB7PtzR82Caud9XKKE7G%2FZOe%2F4P5cAH3VyDDW%2Fzt8pajwsK74nsGRwqcwIKr5x4zU39v9wux8Praa6D6E2jBGEpG0z1S4SQzh6XJ%2Bk7BR28M%2FeQQCpWIgiIRTWKf%2B7xCYUYbCuH9ObbfA0yLfaM7L%2BwoZPrvFQ1ElK4%2BA6ndxhQ89dg1M3QmZ8CKBAEJUgIVhsft9Xw%2FljQa7q1kqdCK2a1mGTt1MwA6oEA%2BU77cBEe2NVtuCjEWCDdIS60uhyUF%2BHtDIKUELpoxtI9ygu8xKmRcmGW1wxhyCJm%2F5UBrOF2mvmPLtp9ZjTsBsiMsAKEaY2lcJ5mF7Rb7cdKWj6pdU3xnjBoP1YiYJgrowac2ueAV2C8KHZG76XMCYAUlJao%2BHX6WG16LfzMChZydGZwrhRjW7eol5XetC2a5RDHSsNp20RY89RW9zgxN4vbn6A%2FOI3GQrblmRawgWnuA%2Fwn1QAG2WG0RvBsyDdTxPLv1PJo%2Bp7bxVUcWNynER7NQI5MYSfTuQz6T%2BdBRoFZLDAmYWJ7MrRk67ITW%2BVXP95X1gv%2FKSfv5BwBiQA7kkN8W0bQMLWO08IGOqUBRJv5akqQxOVg9KvFULDpuQBt7WbhgfOINk83KN8XnfLwn0yGEHz5kCOAh70y9P1Ubp8mH7LN%2FwhpqDuXqp6RCcPDMHIIujYhYXNAPUghThoory%2Blckn9Qv5yMxD3CU83z9PwlpgOXy8DW%2FKHP4KfxCOb2o99G7WW1wP%2BqXXqxXVtIqUf3aiqsByyF2SRzBU387EEkNWVJ0BWZTohytXnOX%2FNbNF0&X-Amz-Signature=17f9ab070e2d8198b71251317215baf119ef860e54f99a8764c8dc4f7d9f2a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYD6A73%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T033958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIc3Xk85bXHwE%2F8hCBNHjStWTMiXs2vQ2aHBGpQizGFQIgRldTBY1vD0ghYyWUxWlgEKSYFazfN5FEQTuZLGjVjg8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyQZjknV2GeSniwFSrcA8XhCzOOHvCVxypGQfONN7x4NkHPN0TQILRxi4ZCOCld66Svlh%2FQHlVgGp%2FAZfZD6MdXHGVtebcG%2FldTYOpDx9nBlDXPDGAePSrYYF37uTncCaZIBZNMnbCxJvHY6hWkGDK5x0oME7EqhPbeJOhOZAUHpz6aHYRo1wHooj8BBvpZSHkeZy8w%2B8U%2Bmmt%2FfTPwz4vwBhqIxc5VYf0CIo8HDHRx8tEFUX%2B7E8GuXpXRiQ3idX63UJPH7Uo%2Be3vwx1JcLhVeGsNRbFC7CFmzPqFAd%2BgF2ianuO7MaZ4zL1MeloaKjcpRdnlcb2FOVIaObPv6HO7Q1ygj9dSUrEcPv08lW%2B7dFk%2BdpWHBqvFUyXUpKA%2Fl383C%2FwtXCEOwRK5gIcnGq0GiKYwuD7E6PlLw8%2B%2FBmOXP%2Bf1FrTwD8X9VivmUNMOeu1%2Fpixa2ZNTi1LwQ1do%2Bh4syfJtGCIrTrQcYRs4n5naOroBP8RPLpa1CLZhkw4LSa0fPkhYMZqaU%2F3GZK3OOR4%2FtxnDP4TlgC58SmenKCdXBa1Ml8bZLrc8sGf7x9T4oI94zJI9O9xqXv1YjqdTHlyy9hQnTRP%2BFKZFLrMMXYXSXTsoC6VGcrXntnc09gSOV7TWk4%2B%2BKR2dwJdhtML%2BO08IGOqUBc2iFxaK5TNfqUjX5d6fMB7wFUgqasCa4Mf4g3Yi3ayf%2FVftyx4UJwn9cHDWxsS33I18HQ6zx9Qr7UkaBk5wEGUwwnmVuAS1%2FuEkAzmPQrR82Vb3EOfBUi8tGKsu2XsCTEWv2GP7hhyE1E8ZrD3Mk0Qm5Jvlo%2FDwz2quUg1ZJZQ%2B3lc4mW3ujJfzF1%2FKkYE5q9LNE1ziFTmV7cNWbAxddn1h5djst&X-Amz-Signature=f1322907cb7e3de26b0e9cd9276885abc508a08c1fefbabd3d04a2b975958ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGSDXUJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T033958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoZ%2BIvUFDNUGXpthEUJ%2B4L8bH6rFKDsCtVX1yYycxBpAiEA9XrhsNls4pXavO4Pku3w9L990oKHVRtwG8ulXNqwNksqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJG5GsbmyzYIUuW84yrcA2p7MLjz59GlTEMML2BjXU9uob6Cuo4BJ5cMCDb4DZTztfcp8vyM9l%2BF2yu2QX1rbfAlZZQbQbElsM2SyzsZti07iEjK4bQ2gR9w%2B12Ru%2FSrLfp4HUd0hf9iNDCtsUXZv%2Bgjg%2BFUc%2FBQ%2BBxPBo8bl2qGlpU%2F7JwRVoSfpZsVyViUkTHGtxIe5B8Yfdf1sQp3YIWUKH7GmVOw54PbIAAaZc8ht9ug%2Fxv7ka2RFkkTH4RUVCGZyB9kQNGCv8JTGNzyw8mFm94IJAZ0pGRfyTE%2B1Gq95Ne94GWaC6vyfr0WDeFVaV8xL%2FYdsfp8lrTUGf2E4LQlKok8NGcnyKFYn%2FErdVBAyD9UeR%2Bb6Oj0C6zXduXgTV%2BpAwIqwy5%2FsBU8JQ%2BMlAOks37BXrJlWOj2cJ23Ef%2BqAH%2BZ3Vj1oBqNN6D4IBs0vkUAtppQ9xBOkzXPJxoMZ2lBg4X1nw09qPX5OUvQYHK%2Btu6GTy44YVtE8k8BmYyjgVV%2BEqXtMai6SwqeND1Y6d1bwURMs70dxGuNm9noEWCem3FXM%2B7OmO9oWbwh%2F2R%2B8GgN9rZgCigRHXZ62YNXd0DSqXuhWdQkvU1yP0cAU35M34bfbcXCOl7APF2W%2BXwEi7ejK4mekmiQyDvXMN6P08IGOqUB%2B9Yxzsz%2BCL92zxeGN82qz1A8xzfbj3z7anMu7TpIP3wdZcKqk6pxHzd8etCr0kqqkFobveMH0eRSNPzf4kJ%2FKL9RHQ9psF2g6eKFt6tzT%2F5f%2FjAUxg7IYtDs4craXPa5tA%2FUSk4klqhuTN2EimvKi8zp%2F0%2FAbGWRwmJZ6%2FAr9Oj76I7Ha%2BZECFwgNHZsjOEw4FuY5I17qVBdX4tRTi7CIjeMqQv7&X-Amz-Signature=6ec48b9401b58e3ba5dd807c1eb8082b5f20955a94bc371cde29781dc46ef8fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKWTOV5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIFcVlnTYKg7FDULXET4gQvx0UERpa9abA5GdYzUq3twIgKdmNeh9KYMY6n2urvJus7M7VFyusOmG5fiZV8pSAd3MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQJA6qGfPQv3CPtKSrcA%2BIIc6RQL5o16ZXISKk5uJnXnRASffEN4Y%2BYVWAdHnAekl%2FPZ%2BQzcFmH6IZIBGB7PtzR82Caud9XKKE7G%2FZOe%2F4P5cAH3VyDDW%2Fzt8pajwsK74nsGRwqcwIKr5x4zU39v9wux8Praa6D6E2jBGEpG0z1S4SQzh6XJ%2Bk7BR28M%2FeQQCpWIgiIRTWKf%2B7xCYUYbCuH9ObbfA0yLfaM7L%2BwoZPrvFQ1ElK4%2BA6ndxhQ89dg1M3QmZ8CKBAEJUgIVhsft9Xw%2FljQa7q1kqdCK2a1mGTt1MwA6oEA%2BU77cBEe2NVtuCjEWCDdIS60uhyUF%2BHtDIKUELpoxtI9ygu8xKmRcmGW1wxhyCJm%2F5UBrOF2mvmPLtp9ZjTsBsiMsAKEaY2lcJ5mF7Rb7cdKWj6pdU3xnjBoP1YiYJgrowac2ueAV2C8KHZG76XMCYAUlJao%2BHX6WG16LfzMChZydGZwrhRjW7eol5XetC2a5RDHSsNp20RY89RW9zgxN4vbn6A%2FOI3GQrblmRawgWnuA%2Fwn1QAG2WG0RvBsyDdTxPLv1PJo%2Bp7bxVUcWNynER7NQI5MYSfTuQz6T%2BdBRoFZLDAmYWJ7MrRk67ITW%2BVXP95X1gv%2FKSfv5BwBiQA7kkN8W0bQMLWO08IGOqUBRJv5akqQxOVg9KvFULDpuQBt7WbhgfOINk83KN8XnfLwn0yGEHz5kCOAh70y9P1Ubp8mH7LN%2FwhpqDuXqp6RCcPDMHIIujYhYXNAPUghThoory%2Blckn9Qv5yMxD3CU83z9PwlpgOXy8DW%2FKHP4KfxCOb2o99G7WW1wP%2BqXXqxXVtIqUf3aiqsByyF2SRzBU387EEkNWVJ0BWZTohytXnOX%2FNbNF0&X-Amz-Signature=a1c6351fd52f723cb5d777a48e2fa8c10940da96fb10181e13e222ad4de8b279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
