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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEPWKTP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDpCJFgSIFR38pqfpSTwoEwJXDkaAkjI8gc7cqHsUqlDQIgNJZ%2FuKjFIFoizfPbGzMchNioaHUlf4bXIsNvNPuv3JEqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLU%2FudqaXEi7xhjz1SrcA%2F%2Bs6q%2FQE%2Bw3gzObqYaXDo06tJFE%2Ff1RVLfz%2BQQ87sKTGcTKAgrgQs2kXUPJNtrrzISC9VaGLieHAHpIUKgne3NhGWqkNl4SlrW9PYwa4HXI8BuXP6XZxXrgJkO%2Bs2%2BwmxJOOpk55hSYqXzf%2BY1N%2FX72L199Sp1Wub%2F1xzmhjQxInnQhdDJbMFa9UjlREBvEHXcrkczpvDrdzlnmMwFlsJ%2FeEf3gK0SBknNxbnYcSZFrDF6lb3UTVaYwxwUgmu0ImiKhtYpqvr8JCWZ3F29LuLXAxbl3tKfwMXkoTpoS%2FOMAy%2Bw1det1jNNQdo%2B95pfsckrWwi9SR0obcGMq2Q4AiIa7MkicYL%2BLX3eWmWs%2BoOj0o7dEwgIWMNA1i9SUSLjnjlsPyY%2BpnXQW9Dqag5xXdG54Hm0eIfuITYE%2FGXAU6PCALjwP8evfh3NymKxuFdc%2FpeUHbSQNJZqq0i7XYddH9VvnIHifOuxvyhvuvEO7jtb9lu6tTaGeQ7Bo%2FCnNOMW4TedHNuRym5SXLsDHvrBldbNZqegqORFEXBhScrOp0xBpFPL69Q7osnQCoXqPvouriF7HIxicwgQSgqk83d5JK1EpuYCMtHpVmoSY3WOvryGgIpwbLFuk4hYcZ6XxMMfnqr8GOqUBs%2B%2Bmm0Wj4J6xWEn5GZGKNN6eyzb5l1qPEkXIOirUVPW2R2aoJPIlInf9VKM6Jt2qSEoAT6Vyx5oLg6NE6erBoS5nJE%2FhT%2F6tyA%2Boc1t3mkZ%2BCJ5FXKZLsqFVyUxBK4Uz0yUxkODQlvv%2BfqPZPe%2FrI2xv5atDjKVwD6yUlHKYrPPMd7g1gnBU9d4rX9dA3TFRmxTha9zDiT7aazFdvhpnoRD3cDV%2B&X-Amz-Signature=face94947d962b2d762910cf5d469d9a72aad455e78577dec93f851f16419cef&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEPWKTP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDpCJFgSIFR38pqfpSTwoEwJXDkaAkjI8gc7cqHsUqlDQIgNJZ%2FuKjFIFoizfPbGzMchNioaHUlf4bXIsNvNPuv3JEqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLU%2FudqaXEi7xhjz1SrcA%2F%2Bs6q%2FQE%2Bw3gzObqYaXDo06tJFE%2Ff1RVLfz%2BQQ87sKTGcTKAgrgQs2kXUPJNtrrzISC9VaGLieHAHpIUKgne3NhGWqkNl4SlrW9PYwa4HXI8BuXP6XZxXrgJkO%2Bs2%2BwmxJOOpk55hSYqXzf%2BY1N%2FX72L199Sp1Wub%2F1xzmhjQxInnQhdDJbMFa9UjlREBvEHXcrkczpvDrdzlnmMwFlsJ%2FeEf3gK0SBknNxbnYcSZFrDF6lb3UTVaYwxwUgmu0ImiKhtYpqvr8JCWZ3F29LuLXAxbl3tKfwMXkoTpoS%2FOMAy%2Bw1det1jNNQdo%2B95pfsckrWwi9SR0obcGMq2Q4AiIa7MkicYL%2BLX3eWmWs%2BoOj0o7dEwgIWMNA1i9SUSLjnjlsPyY%2BpnXQW9Dqag5xXdG54Hm0eIfuITYE%2FGXAU6PCALjwP8evfh3NymKxuFdc%2FpeUHbSQNJZqq0i7XYddH9VvnIHifOuxvyhvuvEO7jtb9lu6tTaGeQ7Bo%2FCnNOMW4TedHNuRym5SXLsDHvrBldbNZqegqORFEXBhScrOp0xBpFPL69Q7osnQCoXqPvouriF7HIxicwgQSgqk83d5JK1EpuYCMtHpVmoSY3WOvryGgIpwbLFuk4hYcZ6XxMMfnqr8GOqUBs%2B%2Bmm0Wj4J6xWEn5GZGKNN6eyzb5l1qPEkXIOirUVPW2R2aoJPIlInf9VKM6Jt2qSEoAT6Vyx5oLg6NE6erBoS5nJE%2FhT%2F6tyA%2Boc1t3mkZ%2BCJ5FXKZLsqFVyUxBK4Uz0yUxkODQlvv%2BfqPZPe%2FrI2xv5atDjKVwD6yUlHKYrPPMd7g1gnBU9d4rX9dA3TFRmxTha9zDiT7aazFdvhpnoRD3cDV%2B&X-Amz-Signature=19114d08085a8b854240ddd208c3508ee7e45fcd725ec69445386c5dd6318502&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPG7TLG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDpeKNHCv3aK0miGXgk28NsNojJrWdKvLnJbCJdesir6AIhAImBXVQqsONDQTp7HWAfogb3MqCr%2FeG3stqqYgJaK5ikKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziDh4AZOY%2B16UndIAq3APppf1ThNkYw5H2URXSBYAcH9PXyPWirdQnp5Tf4B1gTmF%2BslronMVPQKN5tB5rF4gepUEQE6W%2Bgddp38BpycTpGGMipXj2ip7lcKQ66uzs3COnsS4o1owIySU00xAfTb1f3Wv3UXHhbLq640J3RRiHO458t4EKTFAWkCU43BxKTpfW89C8SOd82r1Fzhvcejpj9xXj0BXJJ8QETpzTOw90%2B9mZJTkm8pljayNN%2BDCZLJrrKEAglMWB9DCqYZTlF1Momzr6VZ2b0RQt8lLAAzQceLirDlrYzkp1ieYbSwQZ1OQDD%2Bt0rFxlsjdhV7g6pQY6eHvWBoGgZsMmXbexhdxmZrCRErB11PWOp44dQNZGA2DAS8MW9Kp%2F%2BiGC7DimHaHaxedcGNq7I2oySC%2FGyy1xt%2BuZlw6uZfHI1QXqAnr5sdJCDg7ndWk8KL5ekRjDLGVkGB%2FxY0iR4NlKcieV9wl1TG4qzkH2VKbszQq3BKVxBTTLYBysMWOYXkYUaZUa5anzPCZBaDw3%2B5yVIa1cJMhZsoT5IVtIZ8%2Bl9YbecHOI%2B92qygN1BssvZAXGgIDAOpySMbusvMnNGRi0yHe%2B%2Bk14sjUo47fr%2B5jhXp9Fz9rbadjgSlRX9wpkbplNujCZ6Kq%2FBjqkAVyFw%2FK0yIQbJMQ5PS1SCsKgs3tcqxM2b5eBAsUaGvDj6nQ3oCAgAULGN6TWKeQjaMYGzyc56%2BhkiVuiaZC7iSBLO9txC7S3VBFP9AJMinPT9tBRsOyHcJ3%2Beo96IgryPq3vAc7K8%2BiFemLJaF3n4ekVL9np1FfoPlKwkAk8SxF%2FywRI8qS3LWWB%2FqmgIStPOsLf7f2t6XJSGAyTEB6MrVlW1%2FOa&X-Amz-Signature=06d6966429c57a23eb96b837b3d9c94cb757609b0d44641b17fd7370e86d4c84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XL4OHM2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHrDdFfZyG3%2FHjlnuhJx1GSJLZYD2fuyGmXSip2caKgYAiEA8nahHrG6Rz00tvTsECr0eQW2ny4yKpJSYzr0kmWqvd8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqdLx8h57LwNfzqrSrcA5fU4RMr%2FsX2yPo%2Bw%2FMNsPXms5%2BduKy%2BN7FtbIZRbLUALeqdXV%2BtIDahJ0jaXzq6g%2BhYuqN9%2Bsq1cByUI%2Bynndm%2BNzXDoC5o8pGgfgncuPc7QAMaHCfOXVVmMUlCeBt%2ByKs4OAPGxemLeSwM4Oj37a2knOa761z4kp75I%2FRa6ryoLdAcjtS1BpefwJOmokWBSJrGcSL%2FAHzPceV9zWOxTpPmMDT90Aryf2bfdtISzsZoXKy4g2ZVz%2FpFVEl0f85h0sWq%2FTQQaUYw66IYNuak%2B45T7%2BFBQR5Rm%2Feu0I907JqE9XK3c5n%2B645Zoe5Ht0vToxPeq81MvMH9ZGCb1Ii1g7QfdaXQMhDXoX7QupEp4d1jUWPsUDwNjpmngdxEWH2FinJcW%2FCZB9vNMAwg2pzv64ih9K7xNe%2BVEzd0OvFrxOTkAgSdhr%2B8WzgpzPxeCbRU2S%2FNGfRhO5zvc4KiCXgr%2BOVnkX9drFQzTYEsMrVcuftSyUF%2F9JVVgJFGsSR6jekijfcSqAFFnbcMXkb0bwitZ1n5f4hK6Yrg708idTo81CrjPs66X0QENfbdHO7Vr4IgPwa4H7QccbbOp4ZQyXZSHmCZDsOoYOYzLJ8mSabAsHk9YRKhv8oVzj%2BLLaRLMKfnqr8GOqUB9MWvGy8VRaD2IoZx8RA4Wtn3J9SI%2F8sJsFtuce2MXQHMbrSSZ6kGgn%2BTyhtGlsruQTLttVjLAuOP4trCI3nlwM%2B48AVBDvCUpQse5Vs62fIxh9CMxcfg3znAR6o5stPcvU%2Baxt9XeQ%2FG7p%2BFGhlsOKW3g2SS23%2BpnSrlbzMHOltyouKeg7ES73FMX2Dxo3MGt4K1Z8ovCrUHFW57fHryNDgo6b8A&X-Amz-Signature=44724577c750f9d47338cc222334daedbc61136202b8106ec3f963cccb0fd4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEPWKTP%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDpCJFgSIFR38pqfpSTwoEwJXDkaAkjI8gc7cqHsUqlDQIgNJZ%2FuKjFIFoizfPbGzMchNioaHUlf4bXIsNvNPuv3JEqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLU%2FudqaXEi7xhjz1SrcA%2F%2Bs6q%2FQE%2Bw3gzObqYaXDo06tJFE%2Ff1RVLfz%2BQQ87sKTGcTKAgrgQs2kXUPJNtrrzISC9VaGLieHAHpIUKgne3NhGWqkNl4SlrW9PYwa4HXI8BuXP6XZxXrgJkO%2Bs2%2BwmxJOOpk55hSYqXzf%2BY1N%2FX72L199Sp1Wub%2F1xzmhjQxInnQhdDJbMFa9UjlREBvEHXcrkczpvDrdzlnmMwFlsJ%2FeEf3gK0SBknNxbnYcSZFrDF6lb3UTVaYwxwUgmu0ImiKhtYpqvr8JCWZ3F29LuLXAxbl3tKfwMXkoTpoS%2FOMAy%2Bw1det1jNNQdo%2B95pfsckrWwi9SR0obcGMq2Q4AiIa7MkicYL%2BLX3eWmWs%2BoOj0o7dEwgIWMNA1i9SUSLjnjlsPyY%2BpnXQW9Dqag5xXdG54Hm0eIfuITYE%2FGXAU6PCALjwP8evfh3NymKxuFdc%2FpeUHbSQNJZqq0i7XYddH9VvnIHifOuxvyhvuvEO7jtb9lu6tTaGeQ7Bo%2FCnNOMW4TedHNuRym5SXLsDHvrBldbNZqegqORFEXBhScrOp0xBpFPL69Q7osnQCoXqPvouriF7HIxicwgQSgqk83d5JK1EpuYCMtHpVmoSY3WOvryGgIpwbLFuk4hYcZ6XxMMfnqr8GOqUBs%2B%2Bmm0Wj4J6xWEn5GZGKNN6eyzb5l1qPEkXIOirUVPW2R2aoJPIlInf9VKM6Jt2qSEoAT6Vyx5oLg6NE6erBoS5nJE%2FhT%2F6tyA%2Boc1t3mkZ%2BCJ5FXKZLsqFVyUxBK4Uz0yUxkODQlvv%2BfqPZPe%2FrI2xv5atDjKVwD6yUlHKYrPPMd7g1gnBU9d4rX9dA3TFRmxTha9zDiT7aazFdvhpnoRD3cDV%2B&X-Amz-Signature=e927a2ed0f2b66bb96073cf5ada7ce619762307e54cd4bfc8903a3bc25b03e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
