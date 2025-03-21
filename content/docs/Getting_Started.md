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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEEVRX4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDf5%2B4iq5DC%2Bd%2BolkI3igoJOYlJhuRVbY1ROrYogj2wkAiEAm5178GN3UE0NXJunVV1d7M8lYYe4hx3XkjB7MxSPBZEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOpT87RvMl6uqDObCrcA9L5YXMy%2BTPUauOABernLtyZ8yw60UDmENpZhBA7cqISRpRitwMF29DoOfCDi00MDVXRfXRWrDw7S0B85Hlj9LA9MTmrpBW55y7mx2F4QONHP4eYd2Amf%2FYZ9CPnOn05zHJycj5HNADAGfwlVDupgDJtpbe5MI5Ddg%2BiK0f%2Bm5JRVPvwb2Py1DFWeCWZJscjDOsuyXGt86X0FjCI%2FyHCHAej4ty3DUKGyPSHNTyU6YFSuPFZBP1VkUHugT6xqtTTf941TMhLa15crRKc9zJ0L3QDVBMKRBm4RKlCjeLq9LyJ3LlhHXf%2F0D1t%2B%2BO5J%2FjoKgiA6FOt8AecfoaB%2F0St1X%2Fa1dwzp4GaWy%2FewyFKVFMHvxfy8KpdjY6LSXMH6Qislxm4Yb7QJMv2juFg%2BMOj3GPfi8MwLZwaZWJXL0Y5zeiEqTxFKcoGqCu%2B%2BCaB5WrnFbbPEIOyPqg7ofKyP62FNk9xg9Lug2eQ4I3qICmVZ1EPc7WfuL0ebZs1g7cvx3Kpaj6onF%2FmOQZLLCC0fC%2FUja81gKRmVsxrXVWKHENzlYuqaVGLuosSbO29JHdxp%2BeXNnHVHTCIfX3K8eDEclEBB%2BSvfKHG6zrqDhWgPI6MdQ%2Fi7QIacmVAfrTkFa6aMNLY974GOqUB0n79ZfDTcERN7aX66ens4kpSWBijQjvTgcebKG4DzbgSYyfs3fmQ9M9EkkVCtXp5sHSow4C3UpsxeXUrgfJh8lvnIiya8bHBDhcasXSna37sdYbKTQqDHS%2F64mH6VVtSU6c49Kgf1IG4HCtmhPyKSG1NwpoS7taxWw0AivV%2Bjj4BRrbb%2FEogtJZgy3J2UYl4vFdTGY8PnmuGdegFSU2rBnkdTLEp&X-Amz-Signature=40105cc2019cd974c19d2f1498046a52a963aa79d7a707714ac562e5aabd42a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEEVRX4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDf5%2B4iq5DC%2Bd%2BolkI3igoJOYlJhuRVbY1ROrYogj2wkAiEAm5178GN3UE0NXJunVV1d7M8lYYe4hx3XkjB7MxSPBZEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOpT87RvMl6uqDObCrcA9L5YXMy%2BTPUauOABernLtyZ8yw60UDmENpZhBA7cqISRpRitwMF29DoOfCDi00MDVXRfXRWrDw7S0B85Hlj9LA9MTmrpBW55y7mx2F4QONHP4eYd2Amf%2FYZ9CPnOn05zHJycj5HNADAGfwlVDupgDJtpbe5MI5Ddg%2BiK0f%2Bm5JRVPvwb2Py1DFWeCWZJscjDOsuyXGt86X0FjCI%2FyHCHAej4ty3DUKGyPSHNTyU6YFSuPFZBP1VkUHugT6xqtTTf941TMhLa15crRKc9zJ0L3QDVBMKRBm4RKlCjeLq9LyJ3LlhHXf%2F0D1t%2B%2BO5J%2FjoKgiA6FOt8AecfoaB%2F0St1X%2Fa1dwzp4GaWy%2FewyFKVFMHvxfy8KpdjY6LSXMH6Qislxm4Yb7QJMv2juFg%2BMOj3GPfi8MwLZwaZWJXL0Y5zeiEqTxFKcoGqCu%2B%2BCaB5WrnFbbPEIOyPqg7ofKyP62FNk9xg9Lug2eQ4I3qICmVZ1EPc7WfuL0ebZs1g7cvx3Kpaj6onF%2FmOQZLLCC0fC%2FUja81gKRmVsxrXVWKHENzlYuqaVGLuosSbO29JHdxp%2BeXNnHVHTCIfX3K8eDEclEBB%2BSvfKHG6zrqDhWgPI6MdQ%2Fi7QIacmVAfrTkFa6aMNLY974GOqUB0n79ZfDTcERN7aX66ens4kpSWBijQjvTgcebKG4DzbgSYyfs3fmQ9M9EkkVCtXp5sHSow4C3UpsxeXUrgfJh8lvnIiya8bHBDhcasXSna37sdYbKTQqDHS%2F64mH6VVtSU6c49Kgf1IG4HCtmhPyKSG1NwpoS7taxWw0AivV%2Bjj4BRrbb%2FEogtJZgy3J2UYl4vFdTGY8PnmuGdegFSU2rBnkdTLEp&X-Amz-Signature=817307f317701c75a7abb008eff6b258004533480c4674a9a6c4508aed60ba41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFUWEIF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBOPkrg1zxuQKsWjIieoX74U0z3iz9tlScOLX%2B14aGLlAiEAxc2hzmwUqGcDojxNqHqQQE%2F%2FmJLeqBj%2FwOZWsk1TCNEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy6E3%2BcLZFQ6lEF0yrcA2xs1YryT%2FBrmnzgw8l1w6lzrzPDvKO5YDWhVbNBPuJFUIeQ41OOJsrjGu%2FcHBVRQPS%2BV6AcB8PsNP29qXDkVpDzjaYMRx7vX%2FXm6pGeO21QncaEytLXrEA1XhtAS7%2BUAPSXiuldx%2Fyf%2F%2BS8zOXIusYur1%2F%2Bu7KOvmhxdE0GkfVNvdML0yHhF9wgWf4BuABsO1TXuIJNIYj4ZStioYmTK6FRHvSq454bDVc1MUM1AlNtBK54a099f1llu9knLlQbPRy8SpRgtLkkL%2F3QIU4DuHOPvKjj%2F4FUohxM4JRB5WlDwQmdToh6%2BTk7S%2BgN2VFrp8DirZpQI3hBzHlK1B1a8D2z486Iuq8u0kK%2BfOtOX%2FcRBHaGGBFfIAMSUQdAd%2FtDx%2Bfddk1BrSrkEPVLPfozbGpX%2FhNx5BqxSokHh5kVn1L4%2F6%2FsRUt%2B6OE8VZUSZ8xR7DaQ9qX5ggvFEPvfA109DkBfX%2BoD87zif0stXEKPEQYqUCk1gBn%2BUeLszAQWBbmeL%2BX0lzSEtgFVzLkoOX7C4Hqbd6tk9wGQcZIiiVORufwsPTf2BNwhUpif%2FQ%2Bp%2BM%2B%2BZKMnCX5A0ZZsSDypbgchBDMqdzjsNAsK2h0JF8Y34foRVFmnEizO3h7ZH%2FUyMK3Y974GOqUBmi0rt6T7oVf6QVOaPF0BUbXEJ8XEKdbCdUg2kd4JqcS5MKZlBod8KreLfClDIFprxgO%2Br3ZW7uXPfrOxqxNw%2FsY4uxOM6fdk0bhwG4e2ctK5Mbfa3LiMeojlefPLfdXKMAZj3ScvL3qhjbixcGF9ZLEATuBkHimg6HcgFz%2FwQW3FS3cs62gIPDGVDv64Fg%2Fi6ZLrlno7LJJ9V026LJfIfROBhg4d&X-Amz-Signature=73e1f1a8978c0d2bb2a935f385c39f97d5eafc63fce38935aa31a20a40e7c8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJUXBXQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC37pOXUfuoHUMi0IttkchXs3OazSts5gy0MVl5f8LPfgIhAKLQN%2FuxYqsXA4nDoH4eMyOCFZ8CxnFiA6sfNBG5PMHBKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxxRz8zGX0IXAgiXgq3ANDB%2Brk76Rm5N3idsHOe7yXw0wFiiKqS%2FdNPwXHYsCajNRTCg3Dxzp3E0GsjfywIU2LjhTnrr41bwW1WI4stDiQJjYINDq9QKN6XRpwEL6TOfnGFf9CVcoE5WcOjS6flap%2Bg2wbAOx0g8%2Fu710WVH7XNp5sC35%2FX0wt3x3ZvrcIb5v0jHFepwlAgPiJd5fxikCqrbUP0aHKKSUpmIJzakCQwB8V0SR%2FAOEgSaVKe8Gs%2BLbL0Abtwh20nszlM%2FU72HvsO4jQNLe8oN%2FEucv%2BmaINY%2FntXX%2FoolCzBCIbCxRHW%2B0a8NbbWk0EbEtRTNX6orH3lWhjiYsBqVhuCR5tVbs2KvyCECpZLQhg99rnWK%2B6U0XOB4XTocsEyl5hNyRRkd6J%2F1vOO9fjsVOzR4mdOwelAEBlUSyo9Jeif9a6t1r04zjsZtLqDtLx9WL%2FsEtrC8tQDGg%2FvnAMAHso%2B8XFnd2yXIQlDzIoThO2e13zZ4XK2wupmWnhOi1AL8iKnoQTzqiPRVNnquFsL2ArAaeXe6RTv3EaO9hr0E%2FGfKutVQeWEGfV7cf6EYzHPHG6amlF6HeLAFaQAbD7NyXGKPR%2F1jFfUSdsICBH8tqPBxXltysV6OplQMSxLuh2eNADnjD81%2Fe%2BBjqkAVZ9DkXxXbWihE10K0Hbi0suXtmS8Z5MshMLbFSyY22LMNHVr7hztu8pEtcNIJytMrntYBs43rdR62fPJOtqHC2n0X5FjUdMaMvhomlZIIhJkFSEhgeODohfrcllDJsP0TgBvMl8W7xUaRCJriKGl2lR2RibzJ3Q8D6fs1uzIO6thVtaPzDbt1%2BJbQ9M4T3GgCYF4vMZV1%2BFHbMgfUkWMnNbXIqt&X-Amz-Signature=8df8534ef01b241aa5588f7c34ca11ba608e390521971c20756e264daab30a10&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEEVRX4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDf5%2B4iq5DC%2Bd%2BolkI3igoJOYlJhuRVbY1ROrYogj2wkAiEAm5178GN3UE0NXJunVV1d7M8lYYe4hx3XkjB7MxSPBZEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOpT87RvMl6uqDObCrcA9L5YXMy%2BTPUauOABernLtyZ8yw60UDmENpZhBA7cqISRpRitwMF29DoOfCDi00MDVXRfXRWrDw7S0B85Hlj9LA9MTmrpBW55y7mx2F4QONHP4eYd2Amf%2FYZ9CPnOn05zHJycj5HNADAGfwlVDupgDJtpbe5MI5Ddg%2BiK0f%2Bm5JRVPvwb2Py1DFWeCWZJscjDOsuyXGt86X0FjCI%2FyHCHAej4ty3DUKGyPSHNTyU6YFSuPFZBP1VkUHugT6xqtTTf941TMhLa15crRKc9zJ0L3QDVBMKRBm4RKlCjeLq9LyJ3LlhHXf%2F0D1t%2B%2BO5J%2FjoKgiA6FOt8AecfoaB%2F0St1X%2Fa1dwzp4GaWy%2FewyFKVFMHvxfy8KpdjY6LSXMH6Qislxm4Yb7QJMv2juFg%2BMOj3GPfi8MwLZwaZWJXL0Y5zeiEqTxFKcoGqCu%2B%2BCaB5WrnFbbPEIOyPqg7ofKyP62FNk9xg9Lug2eQ4I3qICmVZ1EPc7WfuL0ebZs1g7cvx3Kpaj6onF%2FmOQZLLCC0fC%2FUja81gKRmVsxrXVWKHENzlYuqaVGLuosSbO29JHdxp%2BeXNnHVHTCIfX3K8eDEclEBB%2BSvfKHG6zrqDhWgPI6MdQ%2Fi7QIacmVAfrTkFa6aMNLY974GOqUB0n79ZfDTcERN7aX66ens4kpSWBijQjvTgcebKG4DzbgSYyfs3fmQ9M9EkkVCtXp5sHSow4C3UpsxeXUrgfJh8lvnIiya8bHBDhcasXSna37sdYbKTQqDHS%2F64mH6VVtSU6c49Kgf1IG4HCtmhPyKSG1NwpoS7taxWw0AivV%2Bjj4BRrbb%2FEogtJZgy3J2UYl4vFdTGY8PnmuGdegFSU2rBnkdTLEp&X-Amz-Signature=5e8ba5f551fadbec2e8956b397481f8e8fa8f2d6bfd0e63f41dd00e2495327f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
