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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBGYBV4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCZl6ZO84Rq4uKp1QCRM995rXmVJUXLx9uyulowHafaxQIhAOnAgb8T8FaXrgZUbVPYBo86BIcdkX6o8z1EUDOBhNQfKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FEQPrYxc%2BOGQhUScq3AOd7F1HP%2BuhlXNNMEFm2qq%2FC9Z7cd9TMBBNM%2FatKDK%2BtezWbsQUNpun%2Borg1h4EFeU2vMa0snlq0ZdXhwJTN7T6xLnmTQMM7nUdu7oV%2F5EZhPUu3YgCEQ0sYcDgtewynBATD8Mew67DdBthGGlyE8ODRkCOYWaqvH6uwCCk9XvtV1wOjGknRhkwwOPQucwH9x8GROFiDXsh%2FioKxATBqzyXTv3hAuKToY%2FoE1cSxjyQURV3qmbCOHLIaeKLgXCMB5bYqusH9aXBYiwQ%2F3zgArKsJUfEgNtcOhc292zs9y18hJyVULTAjEbEKBfIdYOIYBCqfEAYbP%2BC9wcut3u8JH6pvGWjjV81YHsg18EBQiARzZa3Kl4S9bV%2B93bQz6rut5QvCyA8iOVg35Rlni1C7YoMpg6ApjKUjRkYvurtRaQG%2B7svBifKVr3yyFcmDBJilEbzRexNfpECU9KwCm3tvyqPB0YLQAuCPSRWormNVInWxDUruOHbJqeT8nN0i5lyO%2FvkEdP1pJKtEE9wZF72Ad%2FSeTsjeM0xb1F%2BpKDJ4Lt5YZqfuYowJVUC1ETc7PBlcPPhFM8S3C5uzqe8BJxlv4iRQZ21wtHjjBFjzzuxW6ZACNTgVhy2MpqK9Tu3uDCxt4%2B%2BBjqkAeTty2hgWIY0kMcz9JPqw7d8ZTgyIG7sPzQ5H8lOq5YA%2B6OlHXwgFHPbsBc8y7BdZYSSTuir9j4dVoDYrnftpcL0mtnD5Rpv9l27Or7TmTi3jmKzcHEQ1NGfRrtS0DJjQ8jVxABBB%2Fikw29UKIRo5vAHgAJoNdwpy0H5tIFLpn3IoakAYb3Edyre4WRIk13%2Fw5ywUmSz4YoeBn4FoMrWFlzR6fzk&X-Amz-Signature=37c36e15385008e2315c927b0368501451fd127aa3e0272779ffcba00495cacd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBGYBV4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCZl6ZO84Rq4uKp1QCRM995rXmVJUXLx9uyulowHafaxQIhAOnAgb8T8FaXrgZUbVPYBo86BIcdkX6o8z1EUDOBhNQfKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FEQPrYxc%2BOGQhUScq3AOd7F1HP%2BuhlXNNMEFm2qq%2FC9Z7cd9TMBBNM%2FatKDK%2BtezWbsQUNpun%2Borg1h4EFeU2vMa0snlq0ZdXhwJTN7T6xLnmTQMM7nUdu7oV%2F5EZhPUu3YgCEQ0sYcDgtewynBATD8Mew67DdBthGGlyE8ODRkCOYWaqvH6uwCCk9XvtV1wOjGknRhkwwOPQucwH9x8GROFiDXsh%2FioKxATBqzyXTv3hAuKToY%2FoE1cSxjyQURV3qmbCOHLIaeKLgXCMB5bYqusH9aXBYiwQ%2F3zgArKsJUfEgNtcOhc292zs9y18hJyVULTAjEbEKBfIdYOIYBCqfEAYbP%2BC9wcut3u8JH6pvGWjjV81YHsg18EBQiARzZa3Kl4S9bV%2B93bQz6rut5QvCyA8iOVg35Rlni1C7YoMpg6ApjKUjRkYvurtRaQG%2B7svBifKVr3yyFcmDBJilEbzRexNfpECU9KwCm3tvyqPB0YLQAuCPSRWormNVInWxDUruOHbJqeT8nN0i5lyO%2FvkEdP1pJKtEE9wZF72Ad%2FSeTsjeM0xb1F%2BpKDJ4Lt5YZqfuYowJVUC1ETc7PBlcPPhFM8S3C5uzqe8BJxlv4iRQZ21wtHjjBFjzzuxW6ZACNTgVhy2MpqK9Tu3uDCxt4%2B%2BBjqkAeTty2hgWIY0kMcz9JPqw7d8ZTgyIG7sPzQ5H8lOq5YA%2B6OlHXwgFHPbsBc8y7BdZYSSTuir9j4dVoDYrnftpcL0mtnD5Rpv9l27Or7TmTi3jmKzcHEQ1NGfRrtS0DJjQ8jVxABBB%2Fikw29UKIRo5vAHgAJoNdwpy0H5tIFLpn3IoakAYb3Edyre4WRIk13%2Fw5ywUmSz4YoeBn4FoMrWFlzR6fzk&X-Amz-Signature=3e7fa358faf349c0a10f66da06b4cd4c77c26824b8d21e18646932bae4b8daa6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJR3RUTG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDRF%2FrhWFQ0trv154YwxAzqayMTjL1Ree7z0Lh%2FKW0J4QIgVaAq6P04V6%2FhvCfCigA%2F0r%2F8oWMcZwKhO%2BTxZpapJwsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIIthgooL51rvLfbyrcA%2FFcHX8XVGP9uoZm%2FCE1CxsAGWCJNaZ6MLPmupH%2FVD3oz0VcBb81cCw46xGbwOzqLLdyo174kgy5IKBU2hPPn6BHvPZL%2BEDauWrXpevLnVWTsgVyFN0aZKnQdF7%2FhjDh6laOL%2Frxw9VMmEvGr7sllm%2BKSzy8KMF17Hf%2FBYVqDljOvmBXNEi%2F6Iglgi6XzfkKNt01SJWKBtoKpkJeTAu4LkyNDtBD38auj56hm0BG9M92Flixh9bDWuAodbwAgZ1ar2xSbh%2By7PHydRqyJ7pnXQqu8KRwezHohIEhkBQ5W80fOcIzPR9iOVCQe3a0nYFcZhyHxrkfTu8Rfl91cE5Qo%2FexL5di8rXGm30T%2B0yoUkSlLhSTc3o8ZoPx2Mr0%2BgBMITnoULrc%2BuM2XnKNlemSFloTwd9kOcJbPSEJq6UJWyIVMYa5bcwqsvg1V5LB5mqvyCoMhL9gRpCaFW6wHsgKxdRwu91LDcYfRfp5xe2rI%2BLltQLZVkdnUkINCnfJ3WKTQYGbQj68nnx7rpIu%2BxUiXwm4n8NmiASvdSyZoP%2Fw1NgCI2bNVt1mpEpCOXWhcR5nlNYTxp8mtFCMruCsUJrGjIMgLCdyqM5oJNDp78CIFN21g0iRHgV%2Bnl8EQzYGMNG3j74GOqUBU7d67%2F5BDo3MTn02APbhnni3kK2cHqv2y1lo53FQQ5ePq73JSDH%2FGBKDRFzLqmATtULqAGzsL4y8E82XYlxQwfDmQe0UBJ7VytSTPcyM7QkKIlw5Ze2k4PAm0Zpa%2FoaagEOXHtrrU6eT0N%2B6mxvCUsgVM53Bvcszdn5HTpU2Mnbgp5ZK%2FaHYqyVT%2FnUdy3gG82jeZZl7Y7OtAI0kzwg6cYAx%2FAlE&X-Amz-Signature=3d0a7e016ef40c92b9e8b1edd4948288e561b0331ecca0d5108ecaa5c67edebf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLTPCQOJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDQVnAZMZ7foSES0brFZhYEYJ3yDVmCaAxRsweUueT93AiEA%2FB2lL%2Fxl1pvAq%2F4xo4GMldgPpGS9Vyf6nuBsSdFNZgkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyaNoA1TdVN%2Flf%2BbCrcA7i%2BxE92IS%2B4MTFTClmGHEWg22ViMYpRIZyueSUO5hXn81kvt%2BGYuBmgoxMLwwfLmNKcZUP2vJqVo20VXesl8mn%2Fk4Q%2FFpCWRwGHE7g6NQtwMuC3P3jhB2%2FCXq3nsyUVG3ahUxWC5cpS8OQaU07Om7ubdVIX9Au2UbCqjYdb%2FBMONILTSm5asQ4eqh5bRPbn1DWwQgfHYqW8jEB9KxFv4aim05Gk9JTFuQHRTurEE8SIIOevNjPRzR2FcEUzn40NAeFWaIbNKVrF3SKDFMU9ClVHrxInb7P1cJABRbYYYxrSBSletB%2FbkgHDo%2BLQk2aio7i4fc5rJ7EdI5KtmV2tsbxkPqt7Kd9QdrbaFjeW11ZWfllSggeL6%2BB04CIqj0h45OksVAIi8rn2xAKTUklcCmWSZeUOTbwoX8k2%2BRpRjemqxtFlHVIbWIUTOoP8z3ZRbY9bm9Ktk0C3iTDXaf7lrPclF3bbkFCbOFvIkVu3g9GEtLga1KDPFTLIkiDb2K2rap4xm6kuy0ZE6%2F2Q6ho%2BR9%2Bu5tMgEImhIemHHwvVv7fwJN%2F13Me7HY045Voq7kz7ybia0DyFVE9WXcM%2BD%2B4X1WiKsGNe9lTUPsH8sUsfgqlY0hTxDApwVDosBpOtMNG3j74GOqUBBizwz7j6Z%2FR5CJnZaNM%2FbP7cCsuxwI57%2F0eYeNmT9ucGOYywY4mLYt2Ob4CtUHXQVRsHxlgHP%2FzDFikePaDlBMQseMRUb%2BnbRhyzhWxaYtfIBGamBMj%2B9Bo78zBb9srzkZgtXCR%2FrRVk0gh%2BMQxTh3RfsXWy1o%2FfBq9X5liYIaT1gx41p2lIDu%2F6mUT5zeHQqOMP7u3aS%2FcUfpKOExOq5wfBxh3P&X-Amz-Signature=602c6e142d712dd0754bcf3bea63d4ab0f371f559426790ad34eea85a3573a65&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBGYBV4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCZl6ZO84Rq4uKp1QCRM995rXmVJUXLx9uyulowHafaxQIhAOnAgb8T8FaXrgZUbVPYBo86BIcdkX6o8z1EUDOBhNQfKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FEQPrYxc%2BOGQhUScq3AOd7F1HP%2BuhlXNNMEFm2qq%2FC9Z7cd9TMBBNM%2FatKDK%2BtezWbsQUNpun%2Borg1h4EFeU2vMa0snlq0ZdXhwJTN7T6xLnmTQMM7nUdu7oV%2F5EZhPUu3YgCEQ0sYcDgtewynBATD8Mew67DdBthGGlyE8ODRkCOYWaqvH6uwCCk9XvtV1wOjGknRhkwwOPQucwH9x8GROFiDXsh%2FioKxATBqzyXTv3hAuKToY%2FoE1cSxjyQURV3qmbCOHLIaeKLgXCMB5bYqusH9aXBYiwQ%2F3zgArKsJUfEgNtcOhc292zs9y18hJyVULTAjEbEKBfIdYOIYBCqfEAYbP%2BC9wcut3u8JH6pvGWjjV81YHsg18EBQiARzZa3Kl4S9bV%2B93bQz6rut5QvCyA8iOVg35Rlni1C7YoMpg6ApjKUjRkYvurtRaQG%2B7svBifKVr3yyFcmDBJilEbzRexNfpECU9KwCm3tvyqPB0YLQAuCPSRWormNVInWxDUruOHbJqeT8nN0i5lyO%2FvkEdP1pJKtEE9wZF72Ad%2FSeTsjeM0xb1F%2BpKDJ4Lt5YZqfuYowJVUC1ETc7PBlcPPhFM8S3C5uzqe8BJxlv4iRQZ21wtHjjBFjzzuxW6ZACNTgVhy2MpqK9Tu3uDCxt4%2B%2BBjqkAeTty2hgWIY0kMcz9JPqw7d8ZTgyIG7sPzQ5H8lOq5YA%2B6OlHXwgFHPbsBc8y7BdZYSSTuir9j4dVoDYrnftpcL0mtnD5Rpv9l27Or7TmTi3jmKzcHEQ1NGfRrtS0DJjQ8jVxABBB%2Fikw29UKIRo5vAHgAJoNdwpy0H5tIFLpn3IoakAYb3Edyre4WRIk13%2Fw5ywUmSz4YoeBn4FoMrWFlzR6fzk&X-Amz-Signature=53b3c6700e0dc5c89b1fc336beb7a23d537ba9ed3c7809ed95640333e1447372&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
