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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKMHWYLR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH42GqtJkE3mHRcAihAXguwpccE5zj5p33xsxnJlLkJ7AiBc%2FfxV7DW2ClRIRBbH527M9v2uV7YCYlNuVD3VLVsH3iqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FPv4DhhHyLqfaeGsKtwDxWKpqhL%2Fnlv4WC%2FyVrAHk%2BMay9sOooqQ5frSTbe6eyU8XP2FNGAM8ArYymSk8%2FpyoefHHAJEi5nq%2Fu%2BZwKLbbX1yCNJvlCvtppo6fImkkHeAZBpI8i%2FWOESPoapCRwlHx2Zjc4MrZC8NM6ZFGlDdTFCD6MvfznS5q6KwihvPrENRQ2FhYDqw7%2FseJ%2BpF%2F5y%2FLY9s%2BGCqCNQJSvHHiL1wKnzIRIH3xPW%2FCoHQP6tiWbBxOlLdQGaQdT1pSI6Ms%2BsBrqn41cwhJliAc%2BlxoXEOgLSIXxdW7%2FbuJmWNJsl%2BnRooaro4K4x0T%2FJONEg0vXpaMuw%2B09jd6BTWKjfmTEy1Y3%2B1x%2FJ2R6%2BR1wF%2FZ%2BLrjHBxoXtnUiSdtjZzc7lY7imgsO1fXyRvxS6gHnQRJbzBjS9e7GMujjNZynCWPzznos5ymHmlE34HuSkIxUmmiu2HSpNO8W7NPusrx6D6Dbl197C724PG3CjjcPwrsmImNGqsUWQV1knzC%2BCmGJtp1g7mMfKkFkpT3s4rCCAu1Ptfar%2F2As5%2FkV3uhIwAvTu3H4DbqOdIhk5fV3qPIvNFwX8QXV40eB1aGqYeRTjueo2RA4T8ZT4PyEgwNwsiUtMqh6NsAC0NF7OPaX%2FoufowjYCEwwY6pgF7huBFBIcdcwgVt4naPWPh1bs5m2cSJgLyjLlXfLDtwzRDHOf%2F3V3lxzKFtfDzf8mFShCIVIAGhomYAB7SdiD52%2ByAPNLWrh673WEJ6AZQhiFX666ly1WX09pe9uGlPNfjJ%2Fbj1QGnGCinJHTzTCDcmYdVVBY2Cf3eAES2wWHmjbd4lHSWCqnsmIRXEoteiktw9gUBRIMY%2B0LZHICNaPGTabahaX09&X-Amz-Signature=f4daaded108d97a38828476572d28f82b67de884da7afb5d7564d6b244a87fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKMHWYLR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH42GqtJkE3mHRcAihAXguwpccE5zj5p33xsxnJlLkJ7AiBc%2FfxV7DW2ClRIRBbH527M9v2uV7YCYlNuVD3VLVsH3iqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FPv4DhhHyLqfaeGsKtwDxWKpqhL%2Fnlv4WC%2FyVrAHk%2BMay9sOooqQ5frSTbe6eyU8XP2FNGAM8ArYymSk8%2FpyoefHHAJEi5nq%2Fu%2BZwKLbbX1yCNJvlCvtppo6fImkkHeAZBpI8i%2FWOESPoapCRwlHx2Zjc4MrZC8NM6ZFGlDdTFCD6MvfznS5q6KwihvPrENRQ2FhYDqw7%2FseJ%2BpF%2F5y%2FLY9s%2BGCqCNQJSvHHiL1wKnzIRIH3xPW%2FCoHQP6tiWbBxOlLdQGaQdT1pSI6Ms%2BsBrqn41cwhJliAc%2BlxoXEOgLSIXxdW7%2FbuJmWNJsl%2BnRooaro4K4x0T%2FJONEg0vXpaMuw%2B09jd6BTWKjfmTEy1Y3%2B1x%2FJ2R6%2BR1wF%2FZ%2BLrjHBxoXtnUiSdtjZzc7lY7imgsO1fXyRvxS6gHnQRJbzBjS9e7GMujjNZynCWPzznos5ymHmlE34HuSkIxUmmiu2HSpNO8W7NPusrx6D6Dbl197C724PG3CjjcPwrsmImNGqsUWQV1knzC%2BCmGJtp1g7mMfKkFkpT3s4rCCAu1Ptfar%2F2As5%2FkV3uhIwAvTu3H4DbqOdIhk5fV3qPIvNFwX8QXV40eB1aGqYeRTjueo2RA4T8ZT4PyEgwNwsiUtMqh6NsAC0NF7OPaX%2FoufowjYCEwwY6pgF7huBFBIcdcwgVt4naPWPh1bs5m2cSJgLyjLlXfLDtwzRDHOf%2F3V3lxzKFtfDzf8mFShCIVIAGhomYAB7SdiD52%2ByAPNLWrh673WEJ6AZQhiFX666ly1WX09pe9uGlPNfjJ%2Fbj1QGnGCinJHTzTCDcmYdVVBY2Cf3eAES2wWHmjbd4lHSWCqnsmIRXEoteiktw9gUBRIMY%2B0LZHICNaPGTabahaX09&X-Amz-Signature=cef2eebdfe3da7a348fb2f9e7ebcc6304fa67d1d93623026ca375661bc99d893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKMHWYLR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH42GqtJkE3mHRcAihAXguwpccE5zj5p33xsxnJlLkJ7AiBc%2FfxV7DW2ClRIRBbH527M9v2uV7YCYlNuVD3VLVsH3iqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FPv4DhhHyLqfaeGsKtwDxWKpqhL%2Fnlv4WC%2FyVrAHk%2BMay9sOooqQ5frSTbe6eyU8XP2FNGAM8ArYymSk8%2FpyoefHHAJEi5nq%2Fu%2BZwKLbbX1yCNJvlCvtppo6fImkkHeAZBpI8i%2FWOESPoapCRwlHx2Zjc4MrZC8NM6ZFGlDdTFCD6MvfznS5q6KwihvPrENRQ2FhYDqw7%2FseJ%2BpF%2F5y%2FLY9s%2BGCqCNQJSvHHiL1wKnzIRIH3xPW%2FCoHQP6tiWbBxOlLdQGaQdT1pSI6Ms%2BsBrqn41cwhJliAc%2BlxoXEOgLSIXxdW7%2FbuJmWNJsl%2BnRooaro4K4x0T%2FJONEg0vXpaMuw%2B09jd6BTWKjfmTEy1Y3%2B1x%2FJ2R6%2BR1wF%2FZ%2BLrjHBxoXtnUiSdtjZzc7lY7imgsO1fXyRvxS6gHnQRJbzBjS9e7GMujjNZynCWPzznos5ymHmlE34HuSkIxUmmiu2HSpNO8W7NPusrx6D6Dbl197C724PG3CjjcPwrsmImNGqsUWQV1knzC%2BCmGJtp1g7mMfKkFkpT3s4rCCAu1Ptfar%2F2As5%2FkV3uhIwAvTu3H4DbqOdIhk5fV3qPIvNFwX8QXV40eB1aGqYeRTjueo2RA4T8ZT4PyEgwNwsiUtMqh6NsAC0NF7OPaX%2FoufowjYCEwwY6pgF7huBFBIcdcwgVt4naPWPh1bs5m2cSJgLyjLlXfLDtwzRDHOf%2F3V3lxzKFtfDzf8mFShCIVIAGhomYAB7SdiD52%2ByAPNLWrh673WEJ6AZQhiFX666ly1WX09pe9uGlPNfjJ%2Fbj1QGnGCinJHTzTCDcmYdVVBY2Cf3eAES2wWHmjbd4lHSWCqnsmIRXEoteiktw9gUBRIMY%2B0LZHICNaPGTabahaX09&X-Amz-Signature=0861283e5d523faa4c407141c6db090a9d9b64f129f9f1c60fd410e0d8e60b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33473O6%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGb0WbP1xHlMTMilF2vD6RUkl%2FjI8UotX4w45A7GkUfsAiBivPCwSZHGcr9512Dyu%2BMvseVVgXo9tHZtYK8OPRVgpiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrJSnHEIDkzXH%2Fx37KtwDUyiz%2Bhlz1ZzjN1%2FxGakw6uAJcvWh47s8tRO3auu6AV%2F04dB7cAKFKjdm0366dYCU7cGV3NlgDwKjhwkajApqiOgeoyAlBaolKZZspilixXJQA5oAMm%2Bo5I46%2Bb8d0ze51GQfJT%2FKjLY2DlgjGHcP6zyGke75hZpnktBYtcaASHylOG5EJPjFPDQpKhzd7YAzrcC054LiSwB2r%2BUEbjFoPlrvZBh9Une9hp4N5Z2PyV80ez6QbhV8ulTG8%2BtwVPIz%2FX%2Bb%2F98Xen4iAnWZrveqFWxmn5hV%2BEhPaJhxmcYVTbtry8fUhUUJUV8M4uZVUe5nNxuXwyDks0nlRIaCJFW5M5EnWhlxNiAOAHexYhObGDA9mVdV2Yl88Ut3aJS5Uv85j3YNrS63arc80GyooPP5InG3ezwUo2kx3DrYsDgdduFS3fQEj39d5Oqs9ZF0Wr6Rc7Eg00y1IAt6Bw2QDBQRi2C4tvG%2F2y8%2FcyP1f3uR1%2FrAgcNIuR9deIDf%2BKmnqqf21IWswUFKvtkqvmi0wVRUZkFFb8QmV8h8EinEEQOzWS8oSHZCvQGkWTOVhbmuWVlBMZNolcs8s5ioBvGWQr%2FfKjt2%2BeyLBPZIj%2BmUllrRJ%2B8IgzUGjCoYL%2Bn8ng4wuYCEwwY6pgEZzRZUPvROIDAoag9dtYTIfE%2FEPpCsPcfD70g73lEQii%2BF2Daq1Kjk00tRG%2F79Gpnim1iCfZs5iK5Fu%2BrTi1I%2F9P%2BxZDKE4%2BBNEPWyzPRrE4C9Yh01VK3FmiU2sgLyWnHULLOqTb939Ocq2YGJYof9pmJs3dhRvIWD44ie1QGy1asfSANr%2BNwPR1ywohiy1%2BMirrhfSi6iyEqw2l%2BCiARPPS9%2BzPk2&X-Amz-Signature=ffaa27cfc7e69e53268822df9575eda58b48a9cf470ef34c1bc7c35a2bc09150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6F6TGIA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID98NViPSvkvYmLefq64GrFv4qvbZqqXnRGa3rAzZw0FAiEA8g1m4HWkj1rAxz48tSQUwIPzqMGKVv3g%2FZUfFtCderIqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMql35Psi319%2BEFTdSrcA8kt%2Bm8sIyiviO%2F5HC1fybiWkv5tokNSvrfxGr%2F5RWhGrNTnYHPsHYJFKcLOxYSAEGVEJygmYir5LQgfKzAeWOBM8PKRfWC7axKFh8F3hWHFswfwROh62GHzh42egOUYU35M1P7aVq%2FiOtDYoH7ly6n9D68bkE4F8cVpg4XRB4OYt5EkLGHQHB%2FKh1ScENh1ZHoJP9xJa2mIwbTJKGYawjeKPKGVrCFsEomgC9HRcWv5lDrhfOTQx3378MZvJ808DFuYW8mAeSPjhV07BsEqt3J91MTKAKEcXuSZxu1rStA%2FX43OT3c%2BqeE4UVpuKWBwbMD8wNcSK%2FgoPoi%2BFlSTuRzdrOX%2FUB0t87G9EfcBQLdGtFzxwyltuf9UnEA8ntBm%2BZ5xAfzRBI07AnHYagkSJtX3nfCO7hpI2VObnbPape09tqEDW2YMVWfV29bv8ifLmQSSquSSY%2BQWSAOmVOAi0zDQpmrBJRRAIOuTqOdh3Nn%2FXIAe7ffS3f8g4AJuQGfhIK4laVWz%2BKSj8%2B%2BPvx2mDoshRY5zALT9Ujudl4Stnl1xPWFyXrHmqASm%2FCwCDyowjrW%2F6VxGhYJDFmpEVPrNOGpgNEGEUr3qz9Wl3zGF3opElAbfzfUoZCpLkSuqMLeBhMMGOqUBrDjMJxTdoFwfI9ItDQtMcGgdDgRICQwvTSNKNydr2GQwD4En2xbGAOlwGDamg%2BJd3QhwCAJMdL71zNYYqYWYuzaDJIux5mk4slXAmV%2BbJG6BSxjo4OyGYOD5pw%2FfPFXCGI7Q%2FunF49R5OiATJU1mm7QBO%2B%2Bt0YGohbTBv8gUUlot3xpD6XLvZe8kGVLkRNZjSObNtxk8e68lBFVFvlq%2BZEutXXeD&X-Amz-Signature=10484ef5a58f5575b60e6a37990953f9d4cba435661a8c59643cdef03164706e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKMHWYLR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH42GqtJkE3mHRcAihAXguwpccE5zj5p33xsxnJlLkJ7AiBc%2FfxV7DW2ClRIRBbH527M9v2uV7YCYlNuVD3VLVsH3iqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FPv4DhhHyLqfaeGsKtwDxWKpqhL%2Fnlv4WC%2FyVrAHk%2BMay9sOooqQ5frSTbe6eyU8XP2FNGAM8ArYymSk8%2FpyoefHHAJEi5nq%2Fu%2BZwKLbbX1yCNJvlCvtppo6fImkkHeAZBpI8i%2FWOESPoapCRwlHx2Zjc4MrZC8NM6ZFGlDdTFCD6MvfznS5q6KwihvPrENRQ2FhYDqw7%2FseJ%2BpF%2F5y%2FLY9s%2BGCqCNQJSvHHiL1wKnzIRIH3xPW%2FCoHQP6tiWbBxOlLdQGaQdT1pSI6Ms%2BsBrqn41cwhJliAc%2BlxoXEOgLSIXxdW7%2FbuJmWNJsl%2BnRooaro4K4x0T%2FJONEg0vXpaMuw%2B09jd6BTWKjfmTEy1Y3%2B1x%2FJ2R6%2BR1wF%2FZ%2BLrjHBxoXtnUiSdtjZzc7lY7imgsO1fXyRvxS6gHnQRJbzBjS9e7GMujjNZynCWPzznos5ymHmlE34HuSkIxUmmiu2HSpNO8W7NPusrx6D6Dbl197C724PG3CjjcPwrsmImNGqsUWQV1knzC%2BCmGJtp1g7mMfKkFkpT3s4rCCAu1Ptfar%2F2As5%2FkV3uhIwAvTu3H4DbqOdIhk5fV3qPIvNFwX8QXV40eB1aGqYeRTjueo2RA4T8ZT4PyEgwNwsiUtMqh6NsAC0NF7OPaX%2FoufowjYCEwwY6pgF7huBFBIcdcwgVt4naPWPh1bs5m2cSJgLyjLlXfLDtwzRDHOf%2F3V3lxzKFtfDzf8mFShCIVIAGhomYAB7SdiD52%2ByAPNLWrh673WEJ6AZQhiFX666ly1WX09pe9uGlPNfjJ%2Fbj1QGnGCinJHTzTCDcmYdVVBY2Cf3eAES2wWHmjbd4lHSWCqnsmIRXEoteiktw9gUBRIMY%2B0LZHICNaPGTabahaX09&X-Amz-Signature=3d8931768b4158264c18adb26149022742bf2ace4865eedf3a2c854d3f2f6345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
