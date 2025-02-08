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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UMVKXBC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAdhypKF4IHgBeFjVNMzF4rsAc0GLQPAQE9g0jBcIlf0AiEA4DIyrzXFAcQpefHV%2FYteNde1IVngJpoGbrW7l3cqG7QqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvsw13AhQq2rQNxQSrcA6CxTuk%2BnuzTNt%2FaQ8U70CLoKIG%2B%2B55CPXP5VIBFWoRBgKDC5lFvaoj6R%2BPJQOdKmKHHRQWYNNvO6TUURBxVo%2FzJJeHCAW7yMFdyRO6H0f81k3Voqj2Ld0yscV%2BLsMfUTlfXM5XLBgSaVNfZCjXVNFvrt%2BjxdaE2mbh1%2By7%2BnClWmgvwd2jcavpBFI5nfknEbRSG2q6rqh5t5nZKDkQtR3QsajUjqko3Vq1SHwWZLnv2mwMn19ZvJZ9errIKp8%2FEKzAiGj6rBdVk107vfLk7jga5UDiQTyeIXRgB3vHI1ZPPrC2zvBxLOqWtM81cuTA4qyJqhse%2FToCYA0tC1E1zNvHZG1ma%2B1PeDrPjeKFB4mHSXCXwEYAb91QaPuGZ6dKMfE%2BiNEA2stv1Prs05GJIqdjyEAAAIfljJeIbD5Pwu9jgdjMI8%2FwHvCEAyk1Gy3IxeX73nx4CIL32T3KpjTS8Xuh2c3wH28BkrbV1m2OPjN%2FKjbSsF7TIMnWDgQ1%2Fh1D8DdxElmmpgHYn1s5zUm153air96fx2FwXNETBnKx8A3%2F20Lh31gEYFmUSVZd77KQKwaazHhAioA98wuNEw%2Fnyijt7uNctVOkxDzc7QyTzKafq8B4bvQHMBII3lP5qMJaGnb0GOqUBXY5Z2GUoA%2BhP9nEZh1TaMvPpwy%2BeK9ve8OzMnVnvgmjZLXDl9E%2FrAvWg5pF1heMyM3SDPXFju0xeTw5CK8KW0PTPiU9UH7oGir3VQ3oHiRZtOnSHJd6V8yuEfoEMD1zJgCtk25fLg21ligdRAABpSm%2FXJx3HttCOqsvFIRtnpdY7pqTqfVrXf2AqYPSuRefrMbZlqWvo0ckTLHtHb4KJidyMfZIR&X-Amz-Signature=4720fc7a303e0b5c917da74f40c3384094a4e3837f8ecf5cb1e2ac7859c49420&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UMVKXBC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAdhypKF4IHgBeFjVNMzF4rsAc0GLQPAQE9g0jBcIlf0AiEA4DIyrzXFAcQpefHV%2FYteNde1IVngJpoGbrW7l3cqG7QqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvsw13AhQq2rQNxQSrcA6CxTuk%2BnuzTNt%2FaQ8U70CLoKIG%2B%2B55CPXP5VIBFWoRBgKDC5lFvaoj6R%2BPJQOdKmKHHRQWYNNvO6TUURBxVo%2FzJJeHCAW7yMFdyRO6H0f81k3Voqj2Ld0yscV%2BLsMfUTlfXM5XLBgSaVNfZCjXVNFvrt%2BjxdaE2mbh1%2By7%2BnClWmgvwd2jcavpBFI5nfknEbRSG2q6rqh5t5nZKDkQtR3QsajUjqko3Vq1SHwWZLnv2mwMn19ZvJZ9errIKp8%2FEKzAiGj6rBdVk107vfLk7jga5UDiQTyeIXRgB3vHI1ZPPrC2zvBxLOqWtM81cuTA4qyJqhse%2FToCYA0tC1E1zNvHZG1ma%2B1PeDrPjeKFB4mHSXCXwEYAb91QaPuGZ6dKMfE%2BiNEA2stv1Prs05GJIqdjyEAAAIfljJeIbD5Pwu9jgdjMI8%2FwHvCEAyk1Gy3IxeX73nx4CIL32T3KpjTS8Xuh2c3wH28BkrbV1m2OPjN%2FKjbSsF7TIMnWDgQ1%2Fh1D8DdxElmmpgHYn1s5zUm153air96fx2FwXNETBnKx8A3%2F20Lh31gEYFmUSVZd77KQKwaazHhAioA98wuNEw%2Fnyijt7uNctVOkxDzc7QyTzKafq8B4bvQHMBII3lP5qMJaGnb0GOqUBXY5Z2GUoA%2BhP9nEZh1TaMvPpwy%2BeK9ve8OzMnVnvgmjZLXDl9E%2FrAvWg5pF1heMyM3SDPXFju0xeTw5CK8KW0PTPiU9UH7oGir3VQ3oHiRZtOnSHJd6V8yuEfoEMD1zJgCtk25fLg21ligdRAABpSm%2FXJx3HttCOqsvFIRtnpdY7pqTqfVrXf2AqYPSuRefrMbZlqWvo0ckTLHtHb4KJidyMfZIR&X-Amz-Signature=871acdf503ddf4d8044b42697a65cfff4daaf7772bf5f55f54a9ffd6b976837a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3ZORQP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIC%2Fp8tdgu0qRlRJ%2FSTLYn4Fk0jjMBfz0vcrET8l1u9t8AiEAgt%2FgzsGVfSn0MM1GRf%2BQ8x4F98noWjb5rBB2dGnnoZQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPhpKxIR1RtbDksdyrcA5vPQpOE%2F4d5lt4kq7NKB06TbSVIz8u8dsV%2BtUHJ81bBBBy78hvKYE9Am9su1I6z2MR5O4Cek%2Bjm89TqDubsYAdLNGrzytw405EsCuxuZDjyYARoBTcX575lrxNS%2F%2F24hedDUxK034ULbmQoL0q9Re8JO17JiHPEPy8KIpO7QQblShOW0A4%2FBmy2%2BjI8CNqtA6DmikzRGukV441Ld6J91VgeljcOXbJWZr%2FVqcrX8hKhB0YSCS5RSey75C46qCM23vWigdko9ZVUF8pcf4qaav%2BqfVbynVQQZdvwcSeyoyFed9b2oeUAuHMiQTduBXS5KGP4dnvCKaElOop2CsIgoRgAeU7pi84WXJAtNMjp%2FkUDCF34qhu8gGLczNJBDNUL3Fz%2Fsxp6ZGGSpKUK9ywsW1ph%2FjI0ZTlekcYBkPQ%2FsAFM6hVg%2FkqvV7ZH3Bi5ePXz4Vjm5Z2Oq%2FvVgwt%2BOQk9yp%2Fe6kHdaidgawe81%2BHru5qqVN%2B%2FG5b2rAJx73LCoMP4ouUHAg8MU1iqx9zsIHAqoBnZRQTEzfBWex4Zo6%2FCcc%2BLSwbZdz78GrndpOzUmjIx%2BISlq%2F6JIsdlaILSDapeOBq%2FpW2JOHGMwQLvF7GlrCPp8EACMZfOrikkKlxMMK6Gnb0GOqUBwCnMm%2BESf5pjLgxnOv6HhLM0VZuffXYJuh8rsPbN%2F%2BYW3AwjP51kP5PNhJ1Op6koamJKYXIpumiM9dvF%2Bzkv6glVqYcJS5tscoqtnv0OGbQdBNcUvXZZdHbVTRL6Zg6wstbjagXFswLuDVOCFTZRig2Ns2q5f57XD9bMnOc9nWsT1pb7D%2FgtsYjbb7et%2B6feUTTcbCq0JgfT4382baqW5%2Fy7YXnF&X-Amz-Signature=dac12cbac16afeefe7b055a5cbb009cec657b1ba95af1d8de0b4446544e08d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NKA7LWI%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD5NMj3XHhLnUhufxjIJdm2VWhS6rqDYAYYKu9wQ9YE7wIhAOiQsDvV4iPO0ILjAIQKiS9suF%2B2VxU5IZuIFcYjNLgGKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7VliYRs60k2N%2FTLMq3AM2L%2BMOTSnO1A6jcXACbUMWXyh%2BUDfjN9kZPr8wREzZEP%2FZ8XaUdPQEV7wi89Q5tNJV5aBpQlwJwUnR1t%2Bf1iEZfhIPnNKsqn4NOInf%2FgW6OQ9SdE3wp0FaUK8INhE5PxPiMn6aCAp%2BU%2FA7jMO9ECxkP2oYuAV6wxhZwpQfaa0e4vvG8OatCD7mElutJWzp7Z%2FIe7q04YkpGZvMxY5qu80vw1zlf9YZtl3%2F7aBDmTnm2xM8GfIVs43GKJc3N7zo267MrWTq%2FH27XmsRGDzXUaiTCh%2Fk6DPlKogOU56rHZWRTigHzVZjEpD6hBnCBvm9%2F%2Bjc4tda2KvOiVWH1ju217zMzq4mW3ay66lzqhrSl64gdeV4z9vqPQgxyPdpMySpwesQNQc246b5e6ourWzYBH7nVNyjqf2LfmLdLVWmIS1BbH3Z5u5SSxzFZn9xeWIxBU%2FklUvp6v8tBK06edei3O31CEdu%2BP3KJ%2B2QxHrEszL8rm17ANxMDcgH%2FheJYFFTaKbw7Ih1J%2BwTRBvh8k7BhIs3PeRouvYQwjsHdMJQimafIw0HvsHoLQuJIs%2FUOTUPBiDK%2FEyW6S2bBVOErJpnwy%2BZuOYVHTedzppzw33ZYXJrmnnSBVr8q7i1tjIsJzDnhp29BjqkAYoibEZz%2FmnyWp56m1EH0csaOfmpstXPXOndp1V1hGxi5uKYPcGuBDm3TyRnpVkCB%2BYbC6AYbhxmYL8Kynh00ULRJ0pHdOS0VYVZhqzJgpLGUqZ03EG71c4gDueMUOXi62qyPOaWaNkll1eALmdbTVad9622QLrAxEUq%2FiSEjyRYEfSmBJhDR6zvwH6xq6uuyxCF%2FM64VGBB7Rw%2F7OAD%2Ff8iE%2F5S&X-Amz-Signature=1adc843dfc02afde278f9e8a729ad256f16c89ecc0a69b1b03e0f4b254178107&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UMVKXBC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAdhypKF4IHgBeFjVNMzF4rsAc0GLQPAQE9g0jBcIlf0AiEA4DIyrzXFAcQpefHV%2FYteNde1IVngJpoGbrW7l3cqG7QqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvsw13AhQq2rQNxQSrcA6CxTuk%2BnuzTNt%2FaQ8U70CLoKIG%2B%2B55CPXP5VIBFWoRBgKDC5lFvaoj6R%2BPJQOdKmKHHRQWYNNvO6TUURBxVo%2FzJJeHCAW7yMFdyRO6H0f81k3Voqj2Ld0yscV%2BLsMfUTlfXM5XLBgSaVNfZCjXVNFvrt%2BjxdaE2mbh1%2By7%2BnClWmgvwd2jcavpBFI5nfknEbRSG2q6rqh5t5nZKDkQtR3QsajUjqko3Vq1SHwWZLnv2mwMn19ZvJZ9errIKp8%2FEKzAiGj6rBdVk107vfLk7jga5UDiQTyeIXRgB3vHI1ZPPrC2zvBxLOqWtM81cuTA4qyJqhse%2FToCYA0tC1E1zNvHZG1ma%2B1PeDrPjeKFB4mHSXCXwEYAb91QaPuGZ6dKMfE%2BiNEA2stv1Prs05GJIqdjyEAAAIfljJeIbD5Pwu9jgdjMI8%2FwHvCEAyk1Gy3IxeX73nx4CIL32T3KpjTS8Xuh2c3wH28BkrbV1m2OPjN%2FKjbSsF7TIMnWDgQ1%2Fh1D8DdxElmmpgHYn1s5zUm153air96fx2FwXNETBnKx8A3%2F20Lh31gEYFmUSVZd77KQKwaazHhAioA98wuNEw%2Fnyijt7uNctVOkxDzc7QyTzKafq8B4bvQHMBII3lP5qMJaGnb0GOqUBXY5Z2GUoA%2BhP9nEZh1TaMvPpwy%2BeK9ve8OzMnVnvgmjZLXDl9E%2FrAvWg5pF1heMyM3SDPXFju0xeTw5CK8KW0PTPiU9UH7oGir3VQ3oHiRZtOnSHJd6V8yuEfoEMD1zJgCtk25fLg21ligdRAABpSm%2FXJx3HttCOqsvFIRtnpdY7pqTqfVrXf2AqYPSuRefrMbZlqWvo0ckTLHtHb4KJidyMfZIR&X-Amz-Signature=a9c27ec51a19932a5caf42eef016b200ae36aadaed98201a8164f3c7ff8a299d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
