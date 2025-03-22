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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637KFQSYU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDKBXjkAYWWDohM5YxRZaGXm8PuvrEJKww4CwBV9XFCAAIgLORnkGVMPwYL1oCOCZx1s2j%2BddCDDxuxd0ImEgAVSv0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDSvZg%2Fs6912tbTwCrcAyfwpaR0w%2BY8HY6WPtqcwGCR449leCbc%2Fcitto%2BGL5tNiU7En5MREGeEuwhj5pclCV5wt%2FjrJVvAopGjfjNg9b6Tg5CqR40mh4RqBdSfLIzJYjM1J036Xqh8pYBoHKtcRcvR5w1pgjw0dQLnmTrN1cc3q1tDGHFj08sIZZlHQlB3gF7Rhwde%2BC2Jvq6GYTyyWMJE5VQWc%2BoJazrZnVWkeU%2FuusMFDb13OWu53dgSz%2FqESrCcgKXKH3D0ESOW1hO9LrmpTFtfvrN3reBOEv3vOPmoMvNw%2BWiQzq9ZIhOLsy54v80iB4MMDDqWcu0%2FdTPm1%2FmH5L0VtV%2Ff7XFsTrIm0Z1wtMt9iqAICdSS92vHrVHuKjtkxQxHgpS7fvprpGnr%2Fo4H8f32v90u8yKM0TnCImD7K4T8Xx0X96Zk2SOQyljdLHoRa4n13LwEaKVUwlelvf9iYZmjh6XZnVcGVPCWBjeR9zCpduBh7%2FRQoRIcaXhTSpqkvHFTdWeGNr%2FROV244iwakv73DI6u0tVWv51WBT%2BG%2BUs89Sge9ZTEfcRQ7SbqP3cpZL7OBBfX%2Blh8i2KS4sd1Px70qaA5rPxu5ALzHBgPmqcfHzdYB%2F46Zk%2FYc7uDvpuJ%2FWJh82rpEVYuMLet%2Br4GOqUBKEYQ%2Bou%2FZ4qnDr%2FnVt%2B6uwEZ%2Bf8gCIlhcuLLibQYj0exU9fGLLBTjxfHSNe%2Fo0dgeS9ZRUpPztUhdfhgyUHGbCJBrZ8QG5UtJHa6kRAlx2H7%2BKVl48GCyZ9knHUVfcTiJoSZnCwlysXYw39UbSKyiHiT6xfdp%2Bdf3p5XXlr17U%2FmBZd4Q83Sb4t6%2FHvz7bMLY29OMKae20uk6bitH%2BoUoYI3Fc4n&X-Amz-Signature=0de84ebbde0b9ed8b15a2c84eb77ab6dcef10bb86910ca6fadc61860310e2f97&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637KFQSYU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDKBXjkAYWWDohM5YxRZaGXm8PuvrEJKww4CwBV9XFCAAIgLORnkGVMPwYL1oCOCZx1s2j%2BddCDDxuxd0ImEgAVSv0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDSvZg%2Fs6912tbTwCrcAyfwpaR0w%2BY8HY6WPtqcwGCR449leCbc%2Fcitto%2BGL5tNiU7En5MREGeEuwhj5pclCV5wt%2FjrJVvAopGjfjNg9b6Tg5CqR40mh4RqBdSfLIzJYjM1J036Xqh8pYBoHKtcRcvR5w1pgjw0dQLnmTrN1cc3q1tDGHFj08sIZZlHQlB3gF7Rhwde%2BC2Jvq6GYTyyWMJE5VQWc%2BoJazrZnVWkeU%2FuusMFDb13OWu53dgSz%2FqESrCcgKXKH3D0ESOW1hO9LrmpTFtfvrN3reBOEv3vOPmoMvNw%2BWiQzq9ZIhOLsy54v80iB4MMDDqWcu0%2FdTPm1%2FmH5L0VtV%2Ff7XFsTrIm0Z1wtMt9iqAICdSS92vHrVHuKjtkxQxHgpS7fvprpGnr%2Fo4H8f32v90u8yKM0TnCImD7K4T8Xx0X96Zk2SOQyljdLHoRa4n13LwEaKVUwlelvf9iYZmjh6XZnVcGVPCWBjeR9zCpduBh7%2FRQoRIcaXhTSpqkvHFTdWeGNr%2FROV244iwakv73DI6u0tVWv51WBT%2BG%2BUs89Sge9ZTEfcRQ7SbqP3cpZL7OBBfX%2Blh8i2KS4sd1Px70qaA5rPxu5ALzHBgPmqcfHzdYB%2F46Zk%2FYc7uDvpuJ%2FWJh82rpEVYuMLet%2Br4GOqUBKEYQ%2Bou%2FZ4qnDr%2FnVt%2B6uwEZ%2Bf8gCIlhcuLLibQYj0exU9fGLLBTjxfHSNe%2Fo0dgeS9ZRUpPztUhdfhgyUHGbCJBrZ8QG5UtJHa6kRAlx2H7%2BKVl48GCyZ9knHUVfcTiJoSZnCwlysXYw39UbSKyiHiT6xfdp%2Bdf3p5XXlr17U%2FmBZd4Q83Sb4t6%2FHvz7bMLY29OMKae20uk6bitH%2BoUoYI3Fc4n&X-Amz-Signature=67e1d7dc4cf1b6c8026348743aa81fd7cd917ec08fe387549ec99279c1b8fb81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVBV3L4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCWuYu0MqcOYF7u7Yq6ST1NnBDfhqL8rtcshshzpIwo4wIhAOAJ8%2FMIsN%2Fyfl5jlaz%2FZb8H5MWWkIhSoCqlkv70kVcgKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyv6OTZQWDt8Ar9zkoq3AO86%2BjZ2uywaVc%2FQvfGlumaJBbdpcmIt7tTwzXAtJqWFiskR9OBExVQFO8UJGXM4%2FVzFmEWmglaSd7kC9OWDVwSFgQz%2FO0X86yjxlb%2BlYw9OnnaQLFlk5QUHbyFAvwNX3PtV6f9B7lfjTI4a9vsZz6vf8MdU37rnHCa%2BQDihrW7V1QawFm%2BQIq3VXl0ydz0Vv4HIGCOAjH61GcllDzx3ptyWGBQ3g%2BEtXe%2BrXaqq4xgbATm7nE45%2BaSrXWlroHvqnTbL8c9YdJIN2IADo3eOUlggWm2hs%2B7feUDvTn3%2FkpUlh3O0tHcHKumzry8AJC5kkA3coZ2mjPdiAuFLjCHH%2ByThzl5Q96P7LC04KUKBfQHuObBNy%2F%2BUdy%2B5U6SvL%2FxYBALWOW%2BtQoRDa%2Fk29LO%2BXx3e5WKK9bg9bYTKjwb3NubijhUH6Q4uZBW%2BDUTc39LOAMnIMzYn%2Brpip39oo%2FeoQUjZVxiBsJ0ux1k0NQ5jpdCHDIMelg%2B%2BaXHNwaI%2Bw0%2FaLwPT%2FtJtfIU0A1jXkPXGfO8eACxLlpnZwvGoBJ6x8uB7kjyJgPtK2HeZlVXipnxwRAuc%2FOKsGVCT0BQHOwocAzULrEvfLkKZMNQgf2puINak1tdiVZ7wjXVK5ux6TCirvq%2BBjqkAejVkxaLrqpT8yWJ5ExUTlVjxozS4Hc8S6EE5%2Bjgt3htvveKACdOcTcCEP2wuLIad9WMOjQJV4HDCiMeBuvD449PH%2FA7AIPuOJF96rsBF8xBTuaHH08eo03FrCq9N4inycl39EVwslOFJ%2BYItEi8T5rtT1WHOgICJOtKxQ5Y1D7vRQY4fTBhAkiJanQAz%2BUc8KomRH42UWeDJ7oD%2B%2F%2BVoiO8TVEN&X-Amz-Signature=b2acfd7e47422b7c590fd373395da378d985267b8528b1e7e3583df2772001e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKU54XS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDFMbr35QvPggtdUCUSTD0pXc9vvWi2ffgCJ8RxS6tTFwIgAUnp3IKEy0cV2iZzhQnSh0YSOPFvWTXAtRJOg3WcaP0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOamgNY%2FU2qhJAPAgircA%2BI5xRAx6zKvdMTf33P8tA%2BXJSeR1RuSzQZbvSW55MHbXRntj2C9yk%2FnxuOm%2BR5CMHvwc%2F3T34Nm%2Bmj%2FyUxI1m4iFzwZ%2Frf8BRk4OsawVZPKNidgDhApZlIlvyCTPodQwLsM9uM9ePezR1C%2BDfw0UKwUlZZIXKXOPAlls7TzeY%2B2hfNbqOEqDM5wLNgYyIltTBlaQE7zRG5kTwJy18NdakWhsAFbndj%2FCbG8hdd3xbBWM4BjLMClxOkkZjQT4fiwEStciBf9WwxkkN47a%2BQ4yhwd3bN0%2FDHF5pfINUIx55ljQid%2FhHfcwy702xC653o4DS3%2BwHipAIlaT5DItldhtCuBPDe%2FoZSBVxUiNA58qfQhfwscgyf8Ca4Tsbnnbwn2%2FUh0Igg1i1ozDaqM5006sISWgB4wMdZj%2FpbZ69ZZqfrdfrE1PQI2QV1y%2BhSYCH4twoj17FDpNJCqsZFrhlTKn76aNqdlEdbfOO1L4CvG5uzyx7ykabLQl9fWZLkDwDZGbX8VjJmvam0ZcLizMHLtUL8P1vAU0tbr89egJpVZ3CrTKm1IbvzgjKavKwE66PorZpf%2FYltpIkWclaJoxnefJwPw%2FXSCqdaVETwqNbVkZfryZkjcoM%2FAuXMOJW7WMI2u%2Br4GOqUB%2FRC29PIDPNYAl3NZ31SbcMbPVXsYC3%2BNQwkueC0UxZ1X5Dfz9P%2FotyNfgKIf123AeVBBrgsyis%2FvmGUgaqoDli5DIc695w6PY7HX0OtO4b8UiRU6fc9l6RuGZ2fUoG6NmSF61JYSoQtxqXegpmBt6BopbixvLV4tV0oOV9GwOzUngeztj%2FiZboInU9mULa9hqeJJUzzlYHxGzkTOsi3D2EdOrvt8&X-Amz-Signature=411f7504ce3e87b034b0df9004b01d9562e602e72305c49ba99d3e064d96f97f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637KFQSYU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDKBXjkAYWWDohM5YxRZaGXm8PuvrEJKww4CwBV9XFCAAIgLORnkGVMPwYL1oCOCZx1s2j%2BddCDDxuxd0ImEgAVSv0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDSvZg%2Fs6912tbTwCrcAyfwpaR0w%2BY8HY6WPtqcwGCR449leCbc%2Fcitto%2BGL5tNiU7En5MREGeEuwhj5pclCV5wt%2FjrJVvAopGjfjNg9b6Tg5CqR40mh4RqBdSfLIzJYjM1J036Xqh8pYBoHKtcRcvR5w1pgjw0dQLnmTrN1cc3q1tDGHFj08sIZZlHQlB3gF7Rhwde%2BC2Jvq6GYTyyWMJE5VQWc%2BoJazrZnVWkeU%2FuusMFDb13OWu53dgSz%2FqESrCcgKXKH3D0ESOW1hO9LrmpTFtfvrN3reBOEv3vOPmoMvNw%2BWiQzq9ZIhOLsy54v80iB4MMDDqWcu0%2FdTPm1%2FmH5L0VtV%2Ff7XFsTrIm0Z1wtMt9iqAICdSS92vHrVHuKjtkxQxHgpS7fvprpGnr%2Fo4H8f32v90u8yKM0TnCImD7K4T8Xx0X96Zk2SOQyljdLHoRa4n13LwEaKVUwlelvf9iYZmjh6XZnVcGVPCWBjeR9zCpduBh7%2FRQoRIcaXhTSpqkvHFTdWeGNr%2FROV244iwakv73DI6u0tVWv51WBT%2BG%2BUs89Sge9ZTEfcRQ7SbqP3cpZL7OBBfX%2Blh8i2KS4sd1Px70qaA5rPxu5ALzHBgPmqcfHzdYB%2F46Zk%2FYc7uDvpuJ%2FWJh82rpEVYuMLet%2Br4GOqUBKEYQ%2Bou%2FZ4qnDr%2FnVt%2B6uwEZ%2Bf8gCIlhcuLLibQYj0exU9fGLLBTjxfHSNe%2Fo0dgeS9ZRUpPztUhdfhgyUHGbCJBrZ8QG5UtJHa6kRAlx2H7%2BKVl48GCyZ9knHUVfcTiJoSZnCwlysXYw39UbSKyiHiT6xfdp%2Bdf3p5XXlr17U%2FmBZd4Q83Sb4t6%2FHvz7bMLY29OMKae20uk6bitH%2BoUoYI3Fc4n&X-Amz-Signature=9c43cb6c3aba71a87c9f91d5456c4a59161cb2e8a6c09ecf918f9d19cea98e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
