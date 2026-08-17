---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFHMSDBC%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD3t2A0CSbdrOK5fwMAu5q5sU%2B4fCGYbH3UDCQ4DMQVXQIhAO8VGYnGh2b72hYVwedS3uNGBGYmCSKjdpHwbfVIpDaRKv8DCDoQABoMNjM3NDIzMTgzODA1IgzEyy0cE1ekwI8QR2kq3AMdxK0O1djoco%2F%2FO0xF0LjmUb2mkn%2FIggmiMyL96RnrgFIPrH6OkhV1Q1hZE%2BpAXhOBQljcehuIWAfuHd2EleRaVdbtLIVhzfq6%2BDnjRQbhcofYxOXGNj4dEHe4HlwhwNwMOmVtVjrKmAAWzZdWKj7OGooLnfGRTsoSfAY5D6h02YgK3xKkhXHFYaLk1z0aPnt0ILQIXCVBXE9C8NSy29dFFTLJ1WrsvvRpXnaUNl1oPalAF1jXHeaD6HAmd21kBmJoerRrl2PlLzHdsEQpVv18zxsbAyjuAE7oa%2FV4rtIScJqVRLILxaHYhOrvzBqIcIaIGbocahvmlxKpPiZ7Wgfk0wmXJUaornjN07okecgRSyAtAPw9ebLIMKf%2BivipsOB49fHzR41XVetS5aFaJUTQgj52657eCjMSygeIoKc6l2qio0%2Bv0iiUsYVd0Pl%2FM4WDV03mgHgQsuRBAV4aF9972rc9GzyneCSCVmgzjIBN0tdXqwFQjh%2FfJA%2F87RzG7yH2dQ7vVloS5VUVr7VNX8a9GtADSdiRf3vi1%2BUplNs0W3KX3F0V2cIjC3RhaYZNxGLvnxKixGudn%2FVGMWLDBqGMycfHM7E%2FIGhQICgEdZvhO2iA32%2FAh2LE8Jy3KjCYronUBjqkAe0RUJFm0QPnH0i1Pc7SFpvFzRnt0ct2F1YGrKwyMWTa2Tk2CxxJtpO45Y1SeHVqNlH8bXxbFCxRTAnnzc5oNhxZi7nzL3Dy6COkm8eKKcYAupNbrAEzZVJa5u42q0TfiadZKZSTo2lvRTGLLvNiThiOMdvBT8EplsACZBKN5nXnPrIWlkE0WCdlIeWUJt2fDEBtHAD9sCwf7LR5MWJSTBGcvIkU&X-Amz-Signature=c4ae2fce0ec30d22a9687ee5997ac617d74e95f9f9b6c7f468c9dcc90cb0406c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFHMSDBC%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD3t2A0CSbdrOK5fwMAu5q5sU%2B4fCGYbH3UDCQ4DMQVXQIhAO8VGYnGh2b72hYVwedS3uNGBGYmCSKjdpHwbfVIpDaRKv8DCDoQABoMNjM3NDIzMTgzODA1IgzEyy0cE1ekwI8QR2kq3AMdxK0O1djoco%2F%2FO0xF0LjmUb2mkn%2FIggmiMyL96RnrgFIPrH6OkhV1Q1hZE%2BpAXhOBQljcehuIWAfuHd2EleRaVdbtLIVhzfq6%2BDnjRQbhcofYxOXGNj4dEHe4HlwhwNwMOmVtVjrKmAAWzZdWKj7OGooLnfGRTsoSfAY5D6h02YgK3xKkhXHFYaLk1z0aPnt0ILQIXCVBXE9C8NSy29dFFTLJ1WrsvvRpXnaUNl1oPalAF1jXHeaD6HAmd21kBmJoerRrl2PlLzHdsEQpVv18zxsbAyjuAE7oa%2FV4rtIScJqVRLILxaHYhOrvzBqIcIaIGbocahvmlxKpPiZ7Wgfk0wmXJUaornjN07okecgRSyAtAPw9ebLIMKf%2BivipsOB49fHzR41XVetS5aFaJUTQgj52657eCjMSygeIoKc6l2qio0%2Bv0iiUsYVd0Pl%2FM4WDV03mgHgQsuRBAV4aF9972rc9GzyneCSCVmgzjIBN0tdXqwFQjh%2FfJA%2F87RzG7yH2dQ7vVloS5VUVr7VNX8a9GtADSdiRf3vi1%2BUplNs0W3KX3F0V2cIjC3RhaYZNxGLvnxKixGudn%2FVGMWLDBqGMycfHM7E%2FIGhQICgEdZvhO2iA32%2FAh2LE8Jy3KjCYronUBjqkAe0RUJFm0QPnH0i1Pc7SFpvFzRnt0ct2F1YGrKwyMWTa2Tk2CxxJtpO45Y1SeHVqNlH8bXxbFCxRTAnnzc5oNhxZi7nzL3Dy6COkm8eKKcYAupNbrAEzZVJa5u42q0TfiadZKZSTo2lvRTGLLvNiThiOMdvBT8EplsACZBKN5nXnPrIWlkE0WCdlIeWUJt2fDEBtHAD9sCwf7LR5MWJSTBGcvIkU&X-Amz-Signature=90f8378392e13d76be44abbfaacf62545cc6c0c79201e39abf389cd7502ba561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFHMSDBC%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD3t2A0CSbdrOK5fwMAu5q5sU%2B4fCGYbH3UDCQ4DMQVXQIhAO8VGYnGh2b72hYVwedS3uNGBGYmCSKjdpHwbfVIpDaRKv8DCDoQABoMNjM3NDIzMTgzODA1IgzEyy0cE1ekwI8QR2kq3AMdxK0O1djoco%2F%2FO0xF0LjmUb2mkn%2FIggmiMyL96RnrgFIPrH6OkhV1Q1hZE%2BpAXhOBQljcehuIWAfuHd2EleRaVdbtLIVhzfq6%2BDnjRQbhcofYxOXGNj4dEHe4HlwhwNwMOmVtVjrKmAAWzZdWKj7OGooLnfGRTsoSfAY5D6h02YgK3xKkhXHFYaLk1z0aPnt0ILQIXCVBXE9C8NSy29dFFTLJ1WrsvvRpXnaUNl1oPalAF1jXHeaD6HAmd21kBmJoerRrl2PlLzHdsEQpVv18zxsbAyjuAE7oa%2FV4rtIScJqVRLILxaHYhOrvzBqIcIaIGbocahvmlxKpPiZ7Wgfk0wmXJUaornjN07okecgRSyAtAPw9ebLIMKf%2BivipsOB49fHzR41XVetS5aFaJUTQgj52657eCjMSygeIoKc6l2qio0%2Bv0iiUsYVd0Pl%2FM4WDV03mgHgQsuRBAV4aF9972rc9GzyneCSCVmgzjIBN0tdXqwFQjh%2FfJA%2F87RzG7yH2dQ7vVloS5VUVr7VNX8a9GtADSdiRf3vi1%2BUplNs0W3KX3F0V2cIjC3RhaYZNxGLvnxKixGudn%2FVGMWLDBqGMycfHM7E%2FIGhQICgEdZvhO2iA32%2FAh2LE8Jy3KjCYronUBjqkAe0RUJFm0QPnH0i1Pc7SFpvFzRnt0ct2F1YGrKwyMWTa2Tk2CxxJtpO45Y1SeHVqNlH8bXxbFCxRTAnnzc5oNhxZi7nzL3Dy6COkm8eKKcYAupNbrAEzZVJa5u42q0TfiadZKZSTo2lvRTGLLvNiThiOMdvBT8EplsACZBKN5nXnPrIWlkE0WCdlIeWUJt2fDEBtHAD9sCwf7LR5MWJSTBGcvIkU&X-Amz-Signature=20ffbef95377bc89a30170f7f94ac4f697edc43f435eb9761a2d6e41785b81fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVK52UHN%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC%2BO22%2BS%2Fgq9KaCs06BM%2BEuGbVH0WCAvyvQJNEZLKlLwAIhANA49L8SgdCvKvic6g6Fo7m%2BzX9LfT8l%2BZWT%2FnsvHeW3Kv8DCDoQABoMNjM3NDIzMTgzODA1IgweZfYJ1w4uKQDxJ7sq3APpXFpLDzWb21Kq%2F21Q5hOFQGRlQoAc7%2Fkj2Pavllxw7z%2F4N6c5nB1lYo5RoQVGKZAmqBDTIujgPHOGK6yxiAfhUg4jGWxhZD3aosSoBeHlWpehkOsKNOdTno%2F2wWEKRFIBkGPUewJ%2Fg0nm4zscNqHrggmbAFkUXBbLiiX9jotkMRb1BEeZd31lD%2FneOA%2Foc6xjMBBwh%2F7x6AN7wzMrMU0NtRuSLSl2k2whhnXLN0qhRgMDHJUdihZPNu6EU9tcalGC0XZQuEOQY9FN2hG5bLQXZ3MpXM0dPZghI7c05shfnaPxCkj2qWmy0l1shV4WM38hF1Fc99myvkmEAKDpWJxV18MzalxF8Kzbh8guzA5fCI5%2FAa7Gy3ZLFq0TXyK0RXSv3UaQT2bExcaeqlohKcQRDz%2ByFuGpVV10j4LHv1D1tnC2ykf45oMTCU%2BEYnxgfk9rZVfbBO8kX2kxtAa%2Fh01ej2PHL1SOH5CTYHOZ%2BOQvAvpJs0CZ5%2B5O25ujZunI4uSWeKrpV1Jov0aDTAQf1VI7rjOSotGpLprY2crqcyPMM3tRd0wBvFnsNKRPkrp%2BQbXUBdjnuK0nC2cxDLlbmu%2F4igxvvcqx%2FbtP7Ipvx2K9E65FxlKw6zGJ0626pDDPq4nUBjqkAZuigT%2FhAlqd%2BUlEbs7V42eWDVHMC8pYygqwk7J0DwRcKLdYfY0YyPAmX7zQnjJEvcZnugxByex9iQolqohg5Igg2uDif2yzd2C8%2Bq5rKBYgN%2Fl98h2ZcfYlCyBXNrHMK0OBUsXKNc7AiC0XiL7QYAWZU9G0qXFKUZUghjfTT1GCLCX1EjRL5%2B9dJEUysveP6BCd%2FfKAv6DnuYaVtKGsj2%2FEFss0&X-Amz-Signature=b2426ed1db94fb3a31bccd803d352f197bac6ad178cb958df9806ea9fe94007b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKOPBHV%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDBd8mMsIXghEjzGpfQFbvIaOlxupNtGD2nLYwyldHoYgIgDh%2Bl6MzGg01efR7Jfb3%2B44zqleo42YAkORs%2FkWvHvZ8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEUkl34BMkh87VzLMircA%2BTvYTdRwbvMo5AsiLYgp62Hpk0XfCxPxSZYv%2BsOunkWghB5Z6ifI9V7vJzdvJrfyObbr6GVTTwf7lKu%2B2N1wN0i%2BXoOG7OUtmczg%2FcO1Gf1fmVSO%2FD%2FlF28tYiJ45erCrJXq%2BSd0S3xecdRDtIMAZitGZCMsJc%2BXdqtcUShh4czTMULYraU0dbPvYj%2FzX%2BT7S%2BGlKvwNOvvldRUMILxnaA8jgnxO8MigcLq63RkhqccmAovo3F9c0%2Bd50%2FAb5E9ziYZ4Ol81Iw26T09l4TFjCCBvcuboqlnuRzgz4hopOGXGHcME6NxdkXbysonhkkWQUdNQgiPTqsh3jicntjt7%2BJDG03I0OBIi3mhikDVvvPmBg%2BkKwzpdLmgJYqZoeTKVfu83j4kfECgsFjgrplsy96yYuXIm12gleGdnygiMNUIqFHpeqe3M2LB%2BvhDg9pcU32x5xgbV1YmnVs5Qo2c9zCdUYvu04jGxt4r5Y9Rj634OgtT8w3iajW1NPDqLhN6awlPpgTnQDrqIQMBV31fH85M5gciZlK4T9jnhUXyUnovRF48lGHfYEgNAeLopPd8XsKVv54igDUovSOPwHcCDf8ohQBGjmq13IK9uvrhhA3544wVsRWmoNUZS1AmMIWridQGOqUBBnX3odj1Y9Sysbg0rF8i1fmRVhNXW5EykAYbceDr%2BGChsYzyd6zgle1xFRe1BXBRlrmHgWl5Z2AvpCgJ0Ckw7kVrRqu0CmUaVGIDoBSIsQ4kODqny0JhEbI06u4GwzG9hIjrdE%2B6cSgZKuHJotRkZ7QVmB9cTAV0vrw4WDcehC9MtsojzWMVx9rq1vyqHoQZN%2BSraXWlBYq8zDyrpFdJD%2BBGz1fv&X-Amz-Signature=f475efb69d1a50f5ab3ddc310409af4bf926752c3bbcb89e5adac5bc1e1e008c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFHMSDBC%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD3t2A0CSbdrOK5fwMAu5q5sU%2B4fCGYbH3UDCQ4DMQVXQIhAO8VGYnGh2b72hYVwedS3uNGBGYmCSKjdpHwbfVIpDaRKv8DCDoQABoMNjM3NDIzMTgzODA1IgzEyy0cE1ekwI8QR2kq3AMdxK0O1djoco%2F%2FO0xF0LjmUb2mkn%2FIggmiMyL96RnrgFIPrH6OkhV1Q1hZE%2BpAXhOBQljcehuIWAfuHd2EleRaVdbtLIVhzfq6%2BDnjRQbhcofYxOXGNj4dEHe4HlwhwNwMOmVtVjrKmAAWzZdWKj7OGooLnfGRTsoSfAY5D6h02YgK3xKkhXHFYaLk1z0aPnt0ILQIXCVBXE9C8NSy29dFFTLJ1WrsvvRpXnaUNl1oPalAF1jXHeaD6HAmd21kBmJoerRrl2PlLzHdsEQpVv18zxsbAyjuAE7oa%2FV4rtIScJqVRLILxaHYhOrvzBqIcIaIGbocahvmlxKpPiZ7Wgfk0wmXJUaornjN07okecgRSyAtAPw9ebLIMKf%2BivipsOB49fHzR41XVetS5aFaJUTQgj52657eCjMSygeIoKc6l2qio0%2Bv0iiUsYVd0Pl%2FM4WDV03mgHgQsuRBAV4aF9972rc9GzyneCSCVmgzjIBN0tdXqwFQjh%2FfJA%2F87RzG7yH2dQ7vVloS5VUVr7VNX8a9GtADSdiRf3vi1%2BUplNs0W3KX3F0V2cIjC3RhaYZNxGLvnxKixGudn%2FVGMWLDBqGMycfHM7E%2FIGhQICgEdZvhO2iA32%2FAh2LE8Jy3KjCYronUBjqkAe0RUJFm0QPnH0i1Pc7SFpvFzRnt0ct2F1YGrKwyMWTa2Tk2CxxJtpO45Y1SeHVqNlH8bXxbFCxRTAnnzc5oNhxZi7nzL3Dy6COkm8eKKcYAupNbrAEzZVJa5u42q0TfiadZKZSTo2lvRTGLLvNiThiOMdvBT8EplsACZBKN5nXnPrIWlkE0WCdlIeWUJt2fDEBtHAD9sCwf7LR5MWJSTBGcvIkU&X-Amz-Signature=84b4a5b10896e4cbe3f09fc569413b4a6cd3245f798ad7ed98b6071e18b96f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
