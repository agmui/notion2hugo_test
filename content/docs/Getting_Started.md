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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6KZSJSX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP0c7WkPiuAMTWFYy7de8Z7q78nH8VUrqdtEd3fchyCQIhALqttKuORHstkcqnFe2n6HB1p8vGDG1RDjkyAgQ8PZotKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyutZ9REHry%2FjZuB9oq3APh8EGn6NXetjU3tRFDS3x46V27j764FHaQc%2BJ7YwzESSWx9cvpNPLcAL%2B%2BZfQ8byRpkPM5ZCSlAK%2BKTTdheSUKSjAqXb872lVC7NSY%2BlCNVYxD3ZjIpiaBK4lrI%2BGK9b386alAAnaj%2F9vNJBPIsmgjcUIsz8%2F3RCxRQJ%2FTtuImV3kz4rnj7ZPsJiPaEq3mBPIXkG8ikhwOkQUAcPG%2F4OR8A4d0JwKF%2FCX8Pc%2B7wUF6fF8wkeHpnvTR%2B%2FrQ0QGlxE8thEnNTjTmflkVrdYC2jGfGR2S%2BZJdZq2QFEEmEVFxZ6YDB51x0A9I43BtATfaMJUX0bujFAUz0W%2BOzUhUzVRdoCwbvKabz%2Fd6x5hJfFsPDfA5fmCWgChPgAPyh9Q%2FDCum8NUcF3fJTfvsomDLZlPnlH%2FdabPDV0Yhac6pHKCISNaUqle4GKonE6RJEHKLaSBgGuBU7uKT9fWBLfHwC7l5jBF0gzklXYayqwy38Ciz7iPujbg7DxNmGJTI3df%2BmoyZ2%2FxpwvMhZmi%2FGXGQpOYUZwZN6DUkDmqkd153BCO2bIv8dHai7Q5CIeyEyhhg959VBCTGhIOQYgcQufXrbiPkeQRyjLT7VA76tO7giVYX8WVPFvv8O25jNDKgjzCH0%2FC8BjqkAc%2B%2Fk6HPX80C9dmh1nX%2FxJug2qS8FzWdzAaE%2FNKGeTIpZ75MryW1WagvL7VD4KTlcOQwXeMdLgwqzdEo%2FbZShVwo%2Bhx1w9m07%2B4iWH2ts4mEgyXxL76vHVvuu501QeqCvrD3SIo3xCfjVPjDBkJ1bv7gZqvSf%2FbxDrPYbaXxyzSJPNlGC%2BnLs5vfLdIQa3Cb%2F3fyR33DRQw9j3EYk%2FKMcm5JBNly&X-Amz-Signature=b4eca45c2ead333b94ab6448942dabf2e3995804509aae86abf18797347fc704&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6KZSJSX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP0c7WkPiuAMTWFYy7de8Z7q78nH8VUrqdtEd3fchyCQIhALqttKuORHstkcqnFe2n6HB1p8vGDG1RDjkyAgQ8PZotKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyutZ9REHry%2FjZuB9oq3APh8EGn6NXetjU3tRFDS3x46V27j764FHaQc%2BJ7YwzESSWx9cvpNPLcAL%2B%2BZfQ8byRpkPM5ZCSlAK%2BKTTdheSUKSjAqXb872lVC7NSY%2BlCNVYxD3ZjIpiaBK4lrI%2BGK9b386alAAnaj%2F9vNJBPIsmgjcUIsz8%2F3RCxRQJ%2FTtuImV3kz4rnj7ZPsJiPaEq3mBPIXkG8ikhwOkQUAcPG%2F4OR8A4d0JwKF%2FCX8Pc%2B7wUF6fF8wkeHpnvTR%2B%2FrQ0QGlxE8thEnNTjTmflkVrdYC2jGfGR2S%2BZJdZq2QFEEmEVFxZ6YDB51x0A9I43BtATfaMJUX0bujFAUz0W%2BOzUhUzVRdoCwbvKabz%2Fd6x5hJfFsPDfA5fmCWgChPgAPyh9Q%2FDCum8NUcF3fJTfvsomDLZlPnlH%2FdabPDV0Yhac6pHKCISNaUqle4GKonE6RJEHKLaSBgGuBU7uKT9fWBLfHwC7l5jBF0gzklXYayqwy38Ciz7iPujbg7DxNmGJTI3df%2BmoyZ2%2FxpwvMhZmi%2FGXGQpOYUZwZN6DUkDmqkd153BCO2bIv8dHai7Q5CIeyEyhhg959VBCTGhIOQYgcQufXrbiPkeQRyjLT7VA76tO7giVYX8WVPFvv8O25jNDKgjzCH0%2FC8BjqkAc%2B%2Fk6HPX80C9dmh1nX%2FxJug2qS8FzWdzAaE%2FNKGeTIpZ75MryW1WagvL7VD4KTlcOQwXeMdLgwqzdEo%2FbZShVwo%2Bhx1w9m07%2B4iWH2ts4mEgyXxL76vHVvuu501QeqCvrD3SIo3xCfjVPjDBkJ1bv7gZqvSf%2FbxDrPYbaXxyzSJPNlGC%2BnLs5vfLdIQa3Cb%2F3fyR33DRQw9j3EYk%2FKMcm5JBNly&X-Amz-Signature=c731e7e159a1f4334544d052a3a4b43218df1bc9c929e2e029103109dc20f46f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DUNZCRQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGJ41oKHl98Xuzj1awSDFcWb9wSbyVVMNbKt4Fs2QMzAiEAh8lECa1qqjFeegEoMQM6TUGKHtxhDQ9DiTl2K9aWrvEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoFtte%2FI8yQwGqxjyrcAx2Ou3akjhzaJAVjnZdmdMkIxM51sOxJfz%2FbI7nATtbxFedM%2B%2BAzaqZ9Aabo7U%2BUQeuYRch4cZhi7WZc5t90zDh%2BItj8o5CmGg3RFgt3cuZBkDK6aXu5vf5dnfoEoXStbFMvfNre%2B5IWDTQoZL0JmwTxwZp79jvZxxADPq5l34Ga839FEZYMA8OXc22CUtYOIOe0EHE3X6N2oWeE1Ye%2BinDj7YPUa6hiro4hAEm2S5JI2yNrqW%2FQ3ixxxVNt3lb6SwUnd0PU%2FOLd0q2CZDatmAwUiJ9ceYoiGya313wMvz%2BpLuPQ9WcdIYrwUHoMjU7SnraZAUS8XDvg0RKRh9qDmisTlgHXldyYBBwd%2Bar%2BzNuuBIYYA5rK4zRzDzXQlgElc4N9P1qD0O5FL3MVi%2BTGpYS5OGvRyWYZCw5dRDgzh%2F3PRS6KOQ2jRQBj%2B4vrbJTNW7eNU7rESPWQZFBjnSpiBKuc9ScYE%2Fl56%2BRiS%2FvGxDWCe%2Bym%2FBK8mKN5EWjrhzHSjISLLYkkJu72cLc3jSXU3keIPNeIn7rU2bNytmknDbwbw7HI4gaqivHMZnsn1kJ6q2S2PgObqwrXjS7M2rYZGfWP4fG40jPpUVCFbqs8Mcn%2BYModqX8JBMNRIXIKMOzR8LwGOqUBTzqt%2Fkyydks9CwEXn6qrXn8i9AfrB1JcHi9ZJVSreARXEf6jXmqFNhiUGASbQjge1DCWswM%2FIdGFS9%2BtF1GHfORuKKo1vW8tFJLkZIZ4rD%2FCMQk4EWF4Spo0lszJ%2FdPhdExUsgMajPqwLJzB8oT7UzQq6IHV1vjK%2FNhjuDOI5pz%2F4ZhVRTI93FNj3pxCmC1z29GM49AARkqQR5mXcZID01ZiCsaN&X-Amz-Signature=191d8f699c3083955c83a5b912427363adda5198c9e6f99ef495aca7e0748eef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4SSB7US%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkBA6fOKqrTrkJWou%2FPwwwQy2x5C2ZewimwRcBtb20FAiA85fx9%2FYfUwoJqnhzjMbIzsHCShVcQGKJl2LuZrZalXiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCD8ZhId6Crdd9o%2FlKtwDMU6CT3ktiLp2V%2BPNjKc50M2DWGPHxSCS51uJOXJw5HpcuoINQKwywt1jaBqbnQsTdem7SvOCBlERFCifdO6J19BxmAhZqTdAHOYo3xTguxaDD5pUOau038ruuc0R1Q%2FSdkhMCNYB18Idwc3KIHcnw4FxYVYfvP8Qnymy2h3401KACc6%2FUB5nBMMlVLoLssxKstwW8ugr8ul72lCcPgiR6aHeWAr8DMH5RHLzIQ6VxJrpf6Wxyjvu4ere5Hh%2FtENFFBYHqYLOtKnIGejnhhN7P9GSQWd182i%2FKRHTx%2FOd3TImabqtUsPoyAkxF7Yq%2BTMdNnmhsDmONWXWzJFPCQ3xLQ5yTfqvmiqzjtGzsk3aBVQX43uunSd0pNjyppuXgwfh9du%2FCZg1JD9F%2FevvphHXzR%2BNLwcqcBlZTES%2FlrQ%2BOwc15MbqtFAzwx2k1CpzDB7OHdQX8oHwCk2pHhx6T8PWsy7%2FnbrejALQdyIGHyMl53v6mTy4%2FSok9qkmajcxnMDSIp2NFfAHGyp6mCP8UpecjJvD8Yxus7FvHoGPr7t4IgFJN%2BPHIHJE7ML%2FyP%2B4%2BP9sqrBPFzSFZ4vx0s4SIukz0LBmwywReyvzXBx1S2x%2FxyjgDvyh5SljzVhfqi4w9NHwvAY6pgHFeJmKJQ78%2BsGJbWtLLJzBoULRBSSd6XsJsbBrFqkbbM%2F8OAdLRym2xDq9gb4aP2WVhEYmYPUwTocK8DN7JOK4n3JXDKhYoME0g7iW8bzlwvLQozvCr8sYTN3G8XrJdEEPdy12YUrxl7iqaItD3zTd0zYZwOYy0XJrGh4zYOogmQfEWwXpzqUrUFJ5LISjULSCkYjcMJaxHdSyEAoOV0xxMf%2BBh8JK&X-Amz-Signature=b678f325d03bcf6d39109fc9557db0e03804b50bfc77850e882c3dc084456266&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6KZSJSX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP0c7WkPiuAMTWFYy7de8Z7q78nH8VUrqdtEd3fchyCQIhALqttKuORHstkcqnFe2n6HB1p8vGDG1RDjkyAgQ8PZotKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyutZ9REHry%2FjZuB9oq3APh8EGn6NXetjU3tRFDS3x46V27j764FHaQc%2BJ7YwzESSWx9cvpNPLcAL%2B%2BZfQ8byRpkPM5ZCSlAK%2BKTTdheSUKSjAqXb872lVC7NSY%2BlCNVYxD3ZjIpiaBK4lrI%2BGK9b386alAAnaj%2F9vNJBPIsmgjcUIsz8%2F3RCxRQJ%2FTtuImV3kz4rnj7ZPsJiPaEq3mBPIXkG8ikhwOkQUAcPG%2F4OR8A4d0JwKF%2FCX8Pc%2B7wUF6fF8wkeHpnvTR%2B%2FrQ0QGlxE8thEnNTjTmflkVrdYC2jGfGR2S%2BZJdZq2QFEEmEVFxZ6YDB51x0A9I43BtATfaMJUX0bujFAUz0W%2BOzUhUzVRdoCwbvKabz%2Fd6x5hJfFsPDfA5fmCWgChPgAPyh9Q%2FDCum8NUcF3fJTfvsomDLZlPnlH%2FdabPDV0Yhac6pHKCISNaUqle4GKonE6RJEHKLaSBgGuBU7uKT9fWBLfHwC7l5jBF0gzklXYayqwy38Ciz7iPujbg7DxNmGJTI3df%2BmoyZ2%2FxpwvMhZmi%2FGXGQpOYUZwZN6DUkDmqkd153BCO2bIv8dHai7Q5CIeyEyhhg959VBCTGhIOQYgcQufXrbiPkeQRyjLT7VA76tO7giVYX8WVPFvv8O25jNDKgjzCH0%2FC8BjqkAc%2B%2Fk6HPX80C9dmh1nX%2FxJug2qS8FzWdzAaE%2FNKGeTIpZ75MryW1WagvL7VD4KTlcOQwXeMdLgwqzdEo%2FbZShVwo%2Bhx1w9m07%2B4iWH2ts4mEgyXxL76vHVvuu501QeqCvrD3SIo3xCfjVPjDBkJ1bv7gZqvSf%2FbxDrPYbaXxyzSJPNlGC%2BnLs5vfLdIQa3Cb%2F3fyR33DRQw9j3EYk%2FKMcm5JBNly&X-Amz-Signature=556d406dacdb56ed1c3bd3c097b4d93c31f5e658d3c151c7eb09b4b3231a55ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
