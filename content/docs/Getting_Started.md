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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXPXSXP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAsbcPuqHtFX8uUdRGEsFpNVc1VCdCu%2BVXeOX%2BqHq9mRAiAZC0QnrqM8cGF8%2FxfrF7OAfq6Q2BgMgux7NOwenmdASiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtAulMTIOQgR4wNeyKtwD17dBdeFHKgP%2FcZ2CQuhuB86%2BFBtSrjgB83nOVH63TdhP3Qauw08UXCtddQccX12FCUuNzazi3AUy8Y7z1oRQDNAsXDtQfcdSWBz7G8sUmyrroSm8C5nkyCtjUB1s5Vhwh7ZI0l%2Fxy%2Blhj8ZUlI2SelE%2FSEbugjw4vBNBTRWHY4qmF%2BpWBXdFt09wB%2B%2Fg5%2FTsSjh3Mwbzx3NcGzXt73laiy%2FqeOBS4Bxv5s62XBBzLFFwD0C4zS7bTqMgAVKq6jITh7Gm7JsJD9YtawYE64tf9rogAmxC83Y2mfeHR8kMw5cQllPmAZ6RkILmb5iiKWFotuPGtW27PWHjYjwvxDbCB8b9os53AJ2jgwD2PA6TOvFj3Ov4NfZz3wmJTavA1UFPGm4SnW1eBe39Aj0Wsyf48SNSayBtjQPS7QjJbzEE0%2BigtFv0uAmRsczVIKdba5KgHU2FYNbvoq6kg4iCZ6L%2FdLpi9vC76hrPpON1Fe%2B0YuZhU8jI5iUAJD29M1%2BMHtiq6uxnV4DHmdkvk6pHz%2FAm32yuF2giBobSTmkvS%2BLBxBv55gb9jdpVB9QSM9TiJKdVJTYdhUDSqcAH9S8LNDYUhKjQ38awhjDQ1TuaXZNjJk5C4Q3GYzplhseUEWswm7T2wQY6pgFQDNqmS1wz1h5LEJB6%2BrfFyNn0JvUBAD5BJMLG%2FQSgcoqThDsXd6fpTTcUiMCMrDjd1vXezmJTQX4SapTVbWjesXWA0Qdrv1M5Ijp4mn2gQX4SQRIbww9CIgc4HVAHhLbE%2BjHGr0UW89qr%2BIjfdNchIBlXvSd61g69ccELK1rdXqHFd8bQ8UofWRg8YUvQ07eCbPf4J9q6dK%2BSiMR8FxO6rvOgnIak&X-Amz-Signature=0cde5db0b0d1109e191ef293b1c9e0c3efcfdc9875e45818862596464143b0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXPXSXP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAsbcPuqHtFX8uUdRGEsFpNVc1VCdCu%2BVXeOX%2BqHq9mRAiAZC0QnrqM8cGF8%2FxfrF7OAfq6Q2BgMgux7NOwenmdASiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtAulMTIOQgR4wNeyKtwD17dBdeFHKgP%2FcZ2CQuhuB86%2BFBtSrjgB83nOVH63TdhP3Qauw08UXCtddQccX12FCUuNzazi3AUy8Y7z1oRQDNAsXDtQfcdSWBz7G8sUmyrroSm8C5nkyCtjUB1s5Vhwh7ZI0l%2Fxy%2Blhj8ZUlI2SelE%2FSEbugjw4vBNBTRWHY4qmF%2BpWBXdFt09wB%2B%2Fg5%2FTsSjh3Mwbzx3NcGzXt73laiy%2FqeOBS4Bxv5s62XBBzLFFwD0C4zS7bTqMgAVKq6jITh7Gm7JsJD9YtawYE64tf9rogAmxC83Y2mfeHR8kMw5cQllPmAZ6RkILmb5iiKWFotuPGtW27PWHjYjwvxDbCB8b9os53AJ2jgwD2PA6TOvFj3Ov4NfZz3wmJTavA1UFPGm4SnW1eBe39Aj0Wsyf48SNSayBtjQPS7QjJbzEE0%2BigtFv0uAmRsczVIKdba5KgHU2FYNbvoq6kg4iCZ6L%2FdLpi9vC76hrPpON1Fe%2B0YuZhU8jI5iUAJD29M1%2BMHtiq6uxnV4DHmdkvk6pHz%2FAm32yuF2giBobSTmkvS%2BLBxBv55gb9jdpVB9QSM9TiJKdVJTYdhUDSqcAH9S8LNDYUhKjQ38awhjDQ1TuaXZNjJk5C4Q3GYzplhseUEWswm7T2wQY6pgFQDNqmS1wz1h5LEJB6%2BrfFyNn0JvUBAD5BJMLG%2FQSgcoqThDsXd6fpTTcUiMCMrDjd1vXezmJTQX4SapTVbWjesXWA0Qdrv1M5Ijp4mn2gQX4SQRIbww9CIgc4HVAHhLbE%2BjHGr0UW89qr%2BIjfdNchIBlXvSd61g69ccELK1rdXqHFd8bQ8UofWRg8YUvQ07eCbPf4J9q6dK%2BSiMR8FxO6rvOgnIak&X-Amz-Signature=d914d7a45c0d37c10aaf79788e8157e9d070352283869001da4bee5e9d34cdd0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXPXSXP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAsbcPuqHtFX8uUdRGEsFpNVc1VCdCu%2BVXeOX%2BqHq9mRAiAZC0QnrqM8cGF8%2FxfrF7OAfq6Q2BgMgux7NOwenmdASiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtAulMTIOQgR4wNeyKtwD17dBdeFHKgP%2FcZ2CQuhuB86%2BFBtSrjgB83nOVH63TdhP3Qauw08UXCtddQccX12FCUuNzazi3AUy8Y7z1oRQDNAsXDtQfcdSWBz7G8sUmyrroSm8C5nkyCtjUB1s5Vhwh7ZI0l%2Fxy%2Blhj8ZUlI2SelE%2FSEbugjw4vBNBTRWHY4qmF%2BpWBXdFt09wB%2B%2Fg5%2FTsSjh3Mwbzx3NcGzXt73laiy%2FqeOBS4Bxv5s62XBBzLFFwD0C4zS7bTqMgAVKq6jITh7Gm7JsJD9YtawYE64tf9rogAmxC83Y2mfeHR8kMw5cQllPmAZ6RkILmb5iiKWFotuPGtW27PWHjYjwvxDbCB8b9os53AJ2jgwD2PA6TOvFj3Ov4NfZz3wmJTavA1UFPGm4SnW1eBe39Aj0Wsyf48SNSayBtjQPS7QjJbzEE0%2BigtFv0uAmRsczVIKdba5KgHU2FYNbvoq6kg4iCZ6L%2FdLpi9vC76hrPpON1Fe%2B0YuZhU8jI5iUAJD29M1%2BMHtiq6uxnV4DHmdkvk6pHz%2FAm32yuF2giBobSTmkvS%2BLBxBv55gb9jdpVB9QSM9TiJKdVJTYdhUDSqcAH9S8LNDYUhKjQ38awhjDQ1TuaXZNjJk5C4Q3GYzplhseUEWswm7T2wQY6pgFQDNqmS1wz1h5LEJB6%2BrfFyNn0JvUBAD5BJMLG%2FQSgcoqThDsXd6fpTTcUiMCMrDjd1vXezmJTQX4SapTVbWjesXWA0Qdrv1M5Ijp4mn2gQX4SQRIbww9CIgc4HVAHhLbE%2BjHGr0UW89qr%2BIjfdNchIBlXvSd61g69ccELK1rdXqHFd8bQ8UofWRg8YUvQ07eCbPf4J9q6dK%2BSiMR8FxO6rvOgnIak&X-Amz-Signature=a5d7f21d0e99525be49dd0a6b043d57e8b69e94ea7a386edebeef35f23da6bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YPWFKG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDGJW6cySD1llQ5tFckB1KcFjf8dlsnI6AC%2BQfjdLnqHQIhAJRmezq2x2%2FKO9cMxnfc6fZUN8kCfu4k0pTeFHiJz6TXKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyoxnl5GWzK3LOc76Eq3AP0Lx%2FFIocQ3emgfEVJi6aiRh5ulbtGIXrQXLnUbmEfoyJNK3d7w3sP0YiipnptQpcAR85dgsnBCxcl%2FkDOr7E8PtzADNajyzBZpnbvFgU8tpqPpiSIFgQfl%2Fzu89DF7AviYuahbk%2Fh6uWDFiYxAagG7LPcdnOJB%2FZwEJHBPK5LdfJVQy5W4hj53K8y0SexneHi075ub4PYPws8trLTf6Ab%2BA5qqlaqD73qo9my17BKjrngq1z5y99bDxgjSXKcFktDLBkVjcByLErSxB8ycJ%2FfSvZCF0Nc7PHXt2BOWIGg03%2FLdC90wIbeJEyQ4jvpdCU%2F2gsu%2FlPRYZM%2FcN1dO9ykaWLnIZS4nqcU48Tz1tYDgdKG%2FCo4qPWf7ms4rY%2F1AcHneEQZpdGMbYB1iFLXRs6alU%2FhY5Lb4TFUXrvptJCOwDnpK7Iz5tjk4bFOD4LjFHXDV%2FmsdNAJK486Q%2BBDxK89bzslhjTATXswkyOOoN6dTVr0pxZsJLqRsNESTjyB3ypXE5ky9lCK5RWm4b%2B0MDo2R59aUKXqLSbkYbmhH0BcLp1XCH1oYU1ZCSGR8zCn4wQYBnS8gCENz3ckePO1e4bCzHXkHZ3tQI3p%2F%2BF944ON2bdnaruJ8UMsnZ7yGDDwtPbBBjqkAbvazVcA7yUHIO7EqSwy2gJVWW6XO67tfPJtzlyP5GG7DtSphJ6Gr9bgHkE5xoReVKc38k5VqDCdHeB3j9979CE15X3v3czElxlBTr8zP%2Fsl4%2Bt%2FBsCNT%2B4Y12zZG6qd7nYNqvhbgP6RkmXSPGFAsBqGDumsHCh6x9%2BG0D3UVfpa0wvyEGWi6ii9WJphnNO7xwKGURGjn5BjN%2FS12p2eq19IYgbs&X-Amz-Signature=951fa296a29bcf2cd67fdf7cf263688e3652a8cf5a8316e548a7c439a584ba41&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5W4IKIK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC20WQ3PWV48qCQB5b2rq%2BSZ7JjcXKu%2FvSAx5XOCF5Q5QIgbsqy7jekrD%2F9Hvli9kvv1Kpwu7kafuBqbXDjrbjFsd0qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHaVBQpeBdzCAON1yrcA78wGv1xlHuFA1%2BL5HlOjV96iWExaxxetdVMhVkff9I02Am7bIeGf1Mx3oH5TysNmQT48%2FGeClOXD07OaI09mJkZiHSaYfE3D3MGI4CQam8UEvgoENDOEUu8zoh1M4Pu8CrgHSLX6sHIgao2AtuGQRIz54XmpJrw7fvIg%2BDX4yse1d5vu2sDFMN9MP6GU1hewdTzjiurdavBJaLqZ99x4cyK3UdzlxfL250gBGwOVU9cRT0QeNljuxLdxc%2BtPAWiUdXNLJHVuy8ZoSOUyWbD%2BmR%2BibyyKmcdXsxVR0LWcWIEWexQDdpoWMsBXOisLthqKbGuEB%2BIIF8fFyJ2F5Aci0KuVKRSawOwGgHa1BySYNMjUti%2FlzIrLV%2BlMqHtWzFl53gdsb6miCy8IfKfKoOxbLKbGTthwpRZkJqnWUbc%2FAI3vda7J9%2BsDcEaSKVf8lnityPxzb3HEUy5Ob%2FpSNtONR2zINAIdZHzsoRwFNyaPWBrmcxifHWqSwXJstXKOuzVTAm7e1WkJPYqH5QC53d6X%2FZc5Z4H10fg%2F031iJZjIn%2BSbFVcrYECEsTxJpt%2FVp6rESjk88IccdDm8Ett7%2FlVhOVgS1B2GLVE82pXUi0samJBtEYU%2BvsSiQq4FYjbMM609sEGOqUBq%2Fkhdb1qjc05FRuC5%2FcFHZAukhpe%2Bwgkjq0zqGyGXZMEbxregU3f09xjN4OTj3GVHDTiUrXL9pfC6aJ9swxh4x14LRsxFoGd8YOVcqCrSTr959D6Io9%2FCm4nnfC%2Fyx7UzxH%2FncyoumIMofAy2BjfIym7JBnprKL7V5%2BY%2BpydTv3gAe1pBuWLK4lkEtuPjGqYjElZCMRBkg2w8dLaxxL7RlauujRr&X-Amz-Signature=9078343e0c5487bb354364c148ff25b06d48aba50ebb454237510cc9fc977a23&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXPXSXP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T132500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAsbcPuqHtFX8uUdRGEsFpNVc1VCdCu%2BVXeOX%2BqHq9mRAiAZC0QnrqM8cGF8%2FxfrF7OAfq6Q2BgMgux7NOwenmdASiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtAulMTIOQgR4wNeyKtwD17dBdeFHKgP%2FcZ2CQuhuB86%2BFBtSrjgB83nOVH63TdhP3Qauw08UXCtddQccX12FCUuNzazi3AUy8Y7z1oRQDNAsXDtQfcdSWBz7G8sUmyrroSm8C5nkyCtjUB1s5Vhwh7ZI0l%2Fxy%2Blhj8ZUlI2SelE%2FSEbugjw4vBNBTRWHY4qmF%2BpWBXdFt09wB%2B%2Fg5%2FTsSjh3Mwbzx3NcGzXt73laiy%2FqeOBS4Bxv5s62XBBzLFFwD0C4zS7bTqMgAVKq6jITh7Gm7JsJD9YtawYE64tf9rogAmxC83Y2mfeHR8kMw5cQllPmAZ6RkILmb5iiKWFotuPGtW27PWHjYjwvxDbCB8b9os53AJ2jgwD2PA6TOvFj3Ov4NfZz3wmJTavA1UFPGm4SnW1eBe39Aj0Wsyf48SNSayBtjQPS7QjJbzEE0%2BigtFv0uAmRsczVIKdba5KgHU2FYNbvoq6kg4iCZ6L%2FdLpi9vC76hrPpON1Fe%2B0YuZhU8jI5iUAJD29M1%2BMHtiq6uxnV4DHmdkvk6pHz%2FAm32yuF2giBobSTmkvS%2BLBxBv55gb9jdpVB9QSM9TiJKdVJTYdhUDSqcAH9S8LNDYUhKjQ38awhjDQ1TuaXZNjJk5C4Q3GYzplhseUEWswm7T2wQY6pgFQDNqmS1wz1h5LEJB6%2BrfFyNn0JvUBAD5BJMLG%2FQSgcoqThDsXd6fpTTcUiMCMrDjd1vXezmJTQX4SapTVbWjesXWA0Qdrv1M5Ijp4mn2gQX4SQRIbww9CIgc4HVAHhLbE%2BjHGr0UW89qr%2BIjfdNchIBlXvSd61g69ccELK1rdXqHFd8bQ8UofWRg8YUvQ07eCbPf4J9q6dK%2BSiMR8FxO6rvOgnIak&X-Amz-Signature=9904e3bc9a6fd0a62c39f7b81b17fdbbcbe26ba77c586d83b1230aaa838cfefe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
