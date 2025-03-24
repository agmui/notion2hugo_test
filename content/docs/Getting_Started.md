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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CBCK2MW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAXc8IFwKWvOlcS5%2BqZg24Ky0Ii7Rh2K9%2BwzKOmNakBQIgV1RPfTFLjP8uj90KqrryCcgQMcfloplKpUZ4aaORrpsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHJ4zkFqNsdx5mYUSrcA9hjVNVuORR8Xkzf5oojfj549TnW%2B0thzCHlSgnwL1VnikxymfOb72jniSc%2FbHn%2BYozduGHpOoj2iYYar1HHTaXfiYB5RbfFy5U%2F8QalwmLxd0HQV98mQkMmFLG5Y6knhwY%2B19sq2YhiJJzAC8mUSOFMXkfh6EqmP3GOzUTreLgst39mBYSUOf3wemfeJkJbXXz57DGTYz76xIrPx%2BCCRCAJwAkniOKA1XpSpeRrceEHAYJ2zYDtXZkEV3jtFrlRs5BJwDE1wVu8PPaMYtZv9b%2FwMeAEDwPTAZgAfS4pOIMYyTTd4%2BCRuo2imspF1nbi46BYnp4gdZErOUelavObajgZhb8W8YyFJUzNeaDqaZt20hmJ3lJPAvP5z%2BSHqMb1%2Flq8dUfh4GAWk3oZ73jSpmohIVewCv5LiIrdpcV2r%2Bk%2BJYilxYSgWzNt4tODR6E6YaqchobFKfv32RIoXn2o%2BAzD3xuJ6iBQ0s3nyj0zgG0QodS%2FDdDHBYaSqqmebe1UiDWLmnyQZlTQ5l%2BTY2fPFBWWoq8Ke4yceGTV4GSvFps5FvmqNiCgLJuPKbJ1ojRVIBEIWI70D1q7GtJhpiQGbARUfd%2FxPZwyaODFaowYhsNLpexeczSMQetUMzYgMI2wgr8GOqUBXovv8gH%2Fy401W6rhnlGXHk9EClT01ctrn9O3%2FfLh2IhTT%2FOyqKL%2BGuEB%2FOAxcrHRlwsST53CD3Kl1CSi%2F%2B12XGRfVOeeLxfLn4BG%2Bn%2B2KYEU6ZTkgCc7UmGyWxJrDoCMpqcWwhPIX%2FUMZzP%2BjI6PyZSFR5hDcmBqnEbg4sb43U4XxWpoGEgMS0LiRgYuxlcwDwhe47J%2F1AQjvnxPT6OnTYyiLOeR&X-Amz-Signature=9ec3991625fc8846d68698b70f20eaf4b72b6fc75c125cc52135dc10c2c13188&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CBCK2MW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAXc8IFwKWvOlcS5%2BqZg24Ky0Ii7Rh2K9%2BwzKOmNakBQIgV1RPfTFLjP8uj90KqrryCcgQMcfloplKpUZ4aaORrpsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHJ4zkFqNsdx5mYUSrcA9hjVNVuORR8Xkzf5oojfj549TnW%2B0thzCHlSgnwL1VnikxymfOb72jniSc%2FbHn%2BYozduGHpOoj2iYYar1HHTaXfiYB5RbfFy5U%2F8QalwmLxd0HQV98mQkMmFLG5Y6knhwY%2B19sq2YhiJJzAC8mUSOFMXkfh6EqmP3GOzUTreLgst39mBYSUOf3wemfeJkJbXXz57DGTYz76xIrPx%2BCCRCAJwAkniOKA1XpSpeRrceEHAYJ2zYDtXZkEV3jtFrlRs5BJwDE1wVu8PPaMYtZv9b%2FwMeAEDwPTAZgAfS4pOIMYyTTd4%2BCRuo2imspF1nbi46BYnp4gdZErOUelavObajgZhb8W8YyFJUzNeaDqaZt20hmJ3lJPAvP5z%2BSHqMb1%2Flq8dUfh4GAWk3oZ73jSpmohIVewCv5LiIrdpcV2r%2Bk%2BJYilxYSgWzNt4tODR6E6YaqchobFKfv32RIoXn2o%2BAzD3xuJ6iBQ0s3nyj0zgG0QodS%2FDdDHBYaSqqmebe1UiDWLmnyQZlTQ5l%2BTY2fPFBWWoq8Ke4yceGTV4GSvFps5FvmqNiCgLJuPKbJ1ojRVIBEIWI70D1q7GtJhpiQGbARUfd%2FxPZwyaODFaowYhsNLpexeczSMQetUMzYgMI2wgr8GOqUBXovv8gH%2Fy401W6rhnlGXHk9EClT01ctrn9O3%2FfLh2IhTT%2FOyqKL%2BGuEB%2FOAxcrHRlwsST53CD3Kl1CSi%2F%2B12XGRfVOeeLxfLn4BG%2Bn%2B2KYEU6ZTkgCc7UmGyWxJrDoCMpqcWwhPIX%2FUMZzP%2BjI6PyZSFR5hDcmBqnEbg4sb43U4XxWpoGEgMS0LiRgYuxlcwDwhe47J%2F1AQjvnxPT6OnTYyiLOeR&X-Amz-Signature=4cd2c13f07fddcf30755832e35d630a4d091d31873bedb43cf6be03bb9446289&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWYKMIN%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDU92k9XZrY0kfuLFlDOn%2BhyKs3puRdZQXJXxGsAnBvbAiAEynyXVXcgezzDjkYDoL0poJGXia19TdDr7kUyEATAiSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDR4gPoIMEFciiHAIKtwDtOwyyi9g0M%2BLB4g%2BAAAJor85kbB4gZtsc%2BomB7rb2%2BUnyz6X3Jt6H7K18FM00wPGk1%2FZOMmcDzV9S0vitPwGqyUh5sGCTN%2FJqM0P%2FD2J94QiKw2sfN4fzuAcAb7N5XMs4Mz7II%2BITyGWWsrJXfgiTt9qjmZNBFzSzoe9FCeLmBZiKdV7wvvOym9bdYjPIPEmISJhhgBi3%2Fifa9%2F5mi6pGG50I9ZtkrNNNNg9MJPlv1T%2FTf6WX07ENqiAwhGvfoICnqao8Nw4B2a4eTB8QzROr%2B0Cr65vbbNNmy55vpyzLk9GGlJGS%2FNNd7NaDYgjGJTubvekYiLgZTw0A8XFy%2BDbT3pHoRpPmYPQ0qvl%2Bdgiedx%2FXmRkkGOyMkbTv6PBCbSBbLY8PCX9YvHNDC0IazsdtqlppPyzxNI%2FoOmcTkqhQ5qGasYkLsejdmPlXyVEbC0oDnbASEprX1H%2FF8vNpuEBglxj0BWC8iBZp4V%2FM%2FPtM7R1dO7cWBGPmXhsg2FpWfefLYBcE7tTQcuI8UhrKtmueFsymr5ZPZKWa6DOenpmYxZHVbEdYjleAiwuCRyBnZ7Ra7JnwZNHiS6nBCQPAw%2BcoZTDFH7wvX%2F7mXyUeAE1ZvbPhBrn8lBQSw0y%2FKownbCCvwY6pgGpkh%2BwMW3DlNTYemRiyIwVnL1wZ%2FOhEk09Pxc4StKjKYBorOoBk6mU13rynehR%2FwZ%2FnJWYQzy0L2Tnhy5uQYE23Mf%2F2Y17FCn1Ut%2F8O8c91CXCSTvxvwkJcZESU7gOJCJS0%2FTJHdr%2BJYCl%2Fid5uuD9Sf%2FFsxrQHQ77DsLBnS7dVJIMUFLvpBZHU2M4VqFxE6BJCrUGh5qWSuj2snAaXvZmICGg9oGu&X-Amz-Signature=75f8f9053fbfa9122c708889f5aac3f65aae174a901e6aeaace6157485e0aa2b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGK5CII%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBbI1US0CdD7tIsqfReHd6a2GQFkz%2BhR9eJlf0xPI1tAiAu9wmKPoXgphyRCqt6vg3eNy0IPnCFw8075nPAhU1giCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8C2%2FTWT594jb1AVQKtwDQ0ASi5h7KZD9%2Ftk9pma%2BbvxiIrKrjfwEoQEDUGrsVbwNqRQ4p6a5PkhAWQF%2BGwFkLYMx3vS7i1KZLg9g3R8n2F0At5eTenixfUjh6gwFgFAexnGuQyCpIn%2FlVUN2s0KSV5a%2BcNDY%2BoYcYf4UJhiujGotYKRlEeJfYX%2BXU3Ew9oyOSHqbny7uT387lI9ff984%2FDXsLE9X5%2Bdcfc3ZDPssU%2B4V%2FZTkPSpY%2BGU%2BQAk8hUwqTDX7Hd5z0tNCdo9XQjkAu%2Fn4%2FGF2a%2FC5DWUc4g4j%2F6W888F0aCOtlX7lKNWllSJKHFk5fIlvmn31IomUZp4Tm%2FmEGUcp2YwSnrQkgsBb6uK9ss%2BvYaq83WGam4YKhljPAKGhpX2lEHjMcG8Cm7igeOzqT4PsKd4Br9OODirFFMzwT9CPomd3tNTwtnNxkKZCtvBfl4QRqEgDXf9hv1V005%2FNDPn2X3s5obc2qdRhou5Eg4X10pWZSIuQGF2V4aAAH0nXIg%2FDcxqDYpN0y4qCC3MblGpIwGyxkqRlHzVNtVUMztbN45wqUufcKPCsGKkNuOBMF4A4YYfKtMjI864VYc55IE2FXtmRH%2FUz4hWf0EmpQGvpfgW3RsgVK5atq3ZyByEvrjdRZpjEuvcwy7GCvwY6pgHmPOpBHv%2B1F%2FIuAmJNGP7hna1Q%2FocAnwiX6t1IgXS6qcEegqB14oG2qovaSkJcaMAfZaxBnRICzo8QRhs1AlWt7RAzXzBy1yQTDXb%2F3dc9fqA1BivdL8AypAC%2F4icnx1tULc744J6RhMz7bxUKnU3Qm%2FaOmiLWLmr2kuVAo9K%2BHaukpqaenx6DLbClJTBoxWxEwnHGMX01IOeSdrqbOuL5pM%2B7nHqF&X-Amz-Signature=76739b5a5eefbe32361dcb549ce6273d58ba44cc3e99f3ea9b3d47a97524dc59&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CBCK2MW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAXc8IFwKWvOlcS5%2BqZg24Ky0Ii7Rh2K9%2BwzKOmNakBQIgV1RPfTFLjP8uj90KqrryCcgQMcfloplKpUZ4aaORrpsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHJ4zkFqNsdx5mYUSrcA9hjVNVuORR8Xkzf5oojfj549TnW%2B0thzCHlSgnwL1VnikxymfOb72jniSc%2FbHn%2BYozduGHpOoj2iYYar1HHTaXfiYB5RbfFy5U%2F8QalwmLxd0HQV98mQkMmFLG5Y6knhwY%2B19sq2YhiJJzAC8mUSOFMXkfh6EqmP3GOzUTreLgst39mBYSUOf3wemfeJkJbXXz57DGTYz76xIrPx%2BCCRCAJwAkniOKA1XpSpeRrceEHAYJ2zYDtXZkEV3jtFrlRs5BJwDE1wVu8PPaMYtZv9b%2FwMeAEDwPTAZgAfS4pOIMYyTTd4%2BCRuo2imspF1nbi46BYnp4gdZErOUelavObajgZhb8W8YyFJUzNeaDqaZt20hmJ3lJPAvP5z%2BSHqMb1%2Flq8dUfh4GAWk3oZ73jSpmohIVewCv5LiIrdpcV2r%2Bk%2BJYilxYSgWzNt4tODR6E6YaqchobFKfv32RIoXn2o%2BAzD3xuJ6iBQ0s3nyj0zgG0QodS%2FDdDHBYaSqqmebe1UiDWLmnyQZlTQ5l%2BTY2fPFBWWoq8Ke4yceGTV4GSvFps5FvmqNiCgLJuPKbJ1ojRVIBEIWI70D1q7GtJhpiQGbARUfd%2FxPZwyaODFaowYhsNLpexeczSMQetUMzYgMI2wgr8GOqUBXovv8gH%2Fy401W6rhnlGXHk9EClT01ctrn9O3%2FfLh2IhTT%2FOyqKL%2BGuEB%2FOAxcrHRlwsST53CD3Kl1CSi%2F%2B12XGRfVOeeLxfLn4BG%2Bn%2B2KYEU6ZTkgCc7UmGyWxJrDoCMpqcWwhPIX%2FUMZzP%2BjI6PyZSFR5hDcmBqnEbg4sb43U4XxWpoGEgMS0LiRgYuxlcwDwhe47J%2F1AQjvnxPT6OnTYyiLOeR&X-Amz-Signature=7d5dc7d99a52e901fef017aea47ed22f892b8b62a30ea41e03636d9eb302d024&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
