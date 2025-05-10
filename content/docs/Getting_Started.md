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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TELS6HHL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWaf4rFlKZeEKOXLizTasTIi8gcWG3I07F6DPln9hp6AiEArlZwEHuaEg6J45khKOiE9WWxMwQtqnXu1S5sv3S%2FBqMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMB3dYihiSgPS%2B5hCrcA41lapWqDC1COpy3t79C6OewxKeNWqtdXHs%2FM7%2Fov73BS7BqHV748iAiLJWRzynNT1jcRct04GjGibiyXT6zjk0O2uHSHG7FRhGjutY7E264Q%2B3IUeQk%2FLNoce1GJty4ynJQ3tdGHeiTgdbjAeQr3Xp5OIAulIWIE%2BL2Pbgzir7tCecJh6EfyytmevMAm0qcqvmSFJI9by0PmtyYd6QRIZYSdPWoUpMGvsSPVGN2AoYq35wOoHfQlCHoAa4qWTxAVCEpBauIRjVkRsHsontErn5vYBtWu0RnLeXHJhJWdlbruB2WOzMVZrTfUdmJp1Av31ojBm8G4W%2FBlDfiF6c9YIaisoPCy4YYOm%2FFyNsEEkelj4d3kzm0tz14sHFJt2KgIOOha7s9YWXRieRbnxPS6BcTQZ1zPKWw45YCdeIWdE7Ze0A6OfglMMXPYhOnz6PrRZHJnG5syLKcEhlnlZNRhDfg11axOpedkTKHXidf5HtDsZm%2F1hFHVJATpa5aPCugCr5bSoFqPyX4Vp6tBrvG1DJl96mYoIy9cxNAhbxgVVliNS9Cg%2BN%2F2MERTnl2MjVNWwm%2B8GXNq16eUrePrLnCCnOfx5CbG6SuC4T3fHXNdI%2BHVJgSl9XmKnaiXfgnMKjW%2B8AGOqUBA0x5vROTUExeHTwViv8JCyQ916fWQhaQykKV%2F%2F4bIWJpBgCrXJVCgkG8aoE2ttTJ3rgIOALU6esufA2KaiGzQZ6rNPozru77mLKv4gFAolGXLn6hxK%2FWHMHJhM3%2BOyMB9an7vVNazE4I3I9F9TNzrrt2%2BbVOUIGSOij6xVHck58zs97dvlUcU8UaqxI%2FWYs7bov2MGRsJI8Se8qC9whNgwp0t0uK&X-Amz-Signature=aa3a084dd3f21b81b34f60eaadcfc27bdae246bff8b981cc1300bfcbf8fd2a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TELS6HHL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWaf4rFlKZeEKOXLizTasTIi8gcWG3I07F6DPln9hp6AiEArlZwEHuaEg6J45khKOiE9WWxMwQtqnXu1S5sv3S%2FBqMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMB3dYihiSgPS%2B5hCrcA41lapWqDC1COpy3t79C6OewxKeNWqtdXHs%2FM7%2Fov73BS7BqHV748iAiLJWRzynNT1jcRct04GjGibiyXT6zjk0O2uHSHG7FRhGjutY7E264Q%2B3IUeQk%2FLNoce1GJty4ynJQ3tdGHeiTgdbjAeQr3Xp5OIAulIWIE%2BL2Pbgzir7tCecJh6EfyytmevMAm0qcqvmSFJI9by0PmtyYd6QRIZYSdPWoUpMGvsSPVGN2AoYq35wOoHfQlCHoAa4qWTxAVCEpBauIRjVkRsHsontErn5vYBtWu0RnLeXHJhJWdlbruB2WOzMVZrTfUdmJp1Av31ojBm8G4W%2FBlDfiF6c9YIaisoPCy4YYOm%2FFyNsEEkelj4d3kzm0tz14sHFJt2KgIOOha7s9YWXRieRbnxPS6BcTQZ1zPKWw45YCdeIWdE7Ze0A6OfglMMXPYhOnz6PrRZHJnG5syLKcEhlnlZNRhDfg11axOpedkTKHXidf5HtDsZm%2F1hFHVJATpa5aPCugCr5bSoFqPyX4Vp6tBrvG1DJl96mYoIy9cxNAhbxgVVliNS9Cg%2BN%2F2MERTnl2MjVNWwm%2B8GXNq16eUrePrLnCCnOfx5CbG6SuC4T3fHXNdI%2BHVJgSl9XmKnaiXfgnMKjW%2B8AGOqUBA0x5vROTUExeHTwViv8JCyQ916fWQhaQykKV%2F%2F4bIWJpBgCrXJVCgkG8aoE2ttTJ3rgIOALU6esufA2KaiGzQZ6rNPozru77mLKv4gFAolGXLn6hxK%2FWHMHJhM3%2BOyMB9an7vVNazE4I3I9F9TNzrrt2%2BbVOUIGSOij6xVHck58zs97dvlUcU8UaqxI%2FWYs7bov2MGRsJI8Se8qC9whNgwp0t0uK&X-Amz-Signature=36bbeb5d0d6e9ef19d465e1821103a114defc29710f80c02ede8192046b0faeb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TELS6HHL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWaf4rFlKZeEKOXLizTasTIi8gcWG3I07F6DPln9hp6AiEArlZwEHuaEg6J45khKOiE9WWxMwQtqnXu1S5sv3S%2FBqMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMB3dYihiSgPS%2B5hCrcA41lapWqDC1COpy3t79C6OewxKeNWqtdXHs%2FM7%2Fov73BS7BqHV748iAiLJWRzynNT1jcRct04GjGibiyXT6zjk0O2uHSHG7FRhGjutY7E264Q%2B3IUeQk%2FLNoce1GJty4ynJQ3tdGHeiTgdbjAeQr3Xp5OIAulIWIE%2BL2Pbgzir7tCecJh6EfyytmevMAm0qcqvmSFJI9by0PmtyYd6QRIZYSdPWoUpMGvsSPVGN2AoYq35wOoHfQlCHoAa4qWTxAVCEpBauIRjVkRsHsontErn5vYBtWu0RnLeXHJhJWdlbruB2WOzMVZrTfUdmJp1Av31ojBm8G4W%2FBlDfiF6c9YIaisoPCy4YYOm%2FFyNsEEkelj4d3kzm0tz14sHFJt2KgIOOha7s9YWXRieRbnxPS6BcTQZ1zPKWw45YCdeIWdE7Ze0A6OfglMMXPYhOnz6PrRZHJnG5syLKcEhlnlZNRhDfg11axOpedkTKHXidf5HtDsZm%2F1hFHVJATpa5aPCugCr5bSoFqPyX4Vp6tBrvG1DJl96mYoIy9cxNAhbxgVVliNS9Cg%2BN%2F2MERTnl2MjVNWwm%2B8GXNq16eUrePrLnCCnOfx5CbG6SuC4T3fHXNdI%2BHVJgSl9XmKnaiXfgnMKjW%2B8AGOqUBA0x5vROTUExeHTwViv8JCyQ916fWQhaQykKV%2F%2F4bIWJpBgCrXJVCgkG8aoE2ttTJ3rgIOALU6esufA2KaiGzQZ6rNPozru77mLKv4gFAolGXLn6hxK%2FWHMHJhM3%2BOyMB9an7vVNazE4I3I9F9TNzrrt2%2BbVOUIGSOij6xVHck58zs97dvlUcU8UaqxI%2FWYs7bov2MGRsJI8Se8qC9whNgwp0t0uK&X-Amz-Signature=141ab11b6d4b69424a94614d7d623f18b7be9f1faf187084cc35899117a5d87f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HTASHNQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhvQE%2B27FJ%2FwZ5vvr6%2F5M6kdvbtGdfHKnch0LC0%2BH%2BXAiEA2FrEuW7eFM%2BCvG9H0dw8jzaaYUuNr52oxm4JFbCmy6wqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhVrHfcHUH8xFmOpyrcA2v1zFwWIP9r9A0K0%2F9lEZ31Pjdu65tl06GZrp2Y01nC3jjq2gw%2BSid2VdInp5X3YR75GmqenPYDhKs%2Byhf4buWEeSHaYzXtmKNMvzTkpsuxQdM2pstD7mL4QZROeinUTyU38gnCIEuCwMtubdLAIxnIgRDE1IDfLipkSnk69vF0Ux8uoQlm65gDTNX0uxt8uvVWNlZ8zapWLPkojfSAbAEdeIIhzEXAUuP91NRCzo8Z8CIEedL%2FyV9kS%2BwdeHX2U1KtZ3cMOR61%2FUVXqpkkz9eyQuqBJNCuw38WCsac3AczgkbKW9vzTKllMF6QpByc0g20ARF7NKYGjSsWhIUltl0Y6QHD6prNX8TB7fTE%2FIHYrpU71M6Z%2FWu4R%2FFtBN4psodPBZ%2FZcmsg2v5SrGsVrh4V6ypHna2vBa5AewVJhHC43U%2FaJZ%2BlgK%2BLYe59MKjMlk0hdqhvAGMoWNPD9jPBaxZaMPr3qTG44zNk3OTdaJs3SYdRHp2hgURoXb%2FGScELUtp6OTAZczCCO231o%2FNt96CnHBO9j89cCYFH9nwlUGGjgrdlSqZ9yFJyFWqw8nIj7FHGXIR9ibPYeWrXFP9xhylubCR3UmEs0SIc9QnZuCM2DIE92pAJZ2kVFlYNMOjW%2B8AGOqUBoJHuCqSVkJ50vDnJtgrdawVbXQ%2BjA51AhOEaweAOvwaP7nmgCjvbgRY3yF%2F7oA5ftp4i0YUEpUdWha8XwOmQf4SNugMbDScErDtKseKepfqGXt9mu9DnDbK4o7baOuVjGKqiK%2F4RMRyDe7XMsPq%2BDbJtcAu363Eb23W5lz3%2BFUNeedgG6AWfOo1hDSV8vT2jmVtI7JAl9xu326AduUE9AvP3VmbZ&X-Amz-Signature=ea535f5cd17818043131b393c995d0b46c7c818b8e359cbd9a23940a7bd07ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VJPSACG%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxVWQ87CZ6nXUPaSbIQGfxsTgJSizAGU15wRti%2FWAlQIgAl76bf3YkuBcKBUyY7T1EpUsAUGjYdirq7sshcjbb2wqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTxFfPswDAD6Jgx8SrcAyLMBaO%2BXjfC8AggCcr%2BO%2Be0VKhOji%2BGOm7F%2Ft752JbMCdORvbVSA9o0lZNqV%2BOV0WsH0Zt2F2HDNOCuEidp%2BecbeimT3pMsm8uo7Tq23fHQVyvmEuBjA5cQilRJDdJwSUbu7yNlE3334c0zY%2FzqqCijO5br78vVevHb9lHI4cwjYv5UnY319x9gJkjIEI%2BKoulEkNeYumZxrzyLYmzhw2G8dsvD5ZWm3c8Aumq7Ox0PPtDc0b0ajxhwBiUsl1aOnZA6FanH0vFNGoqvc%2BQc%2B95wL4j%2FpbqNPITZWda4ngG1gDJNGKmm69VBDmxzmvK3flfm%2FUNUCfhj%2B8HEs3DJszprmH58mlNCyQTT16uIzxYaYgxPAjAv0kYXKjHxxqC9XDJmCaqGGAOZtDrPvTLy7kwvvTc3UtWIMjnd2Twp4xPHx0sbB%2Bl0fydaUZ2%2BQ0FTcWqhd%2BLaWJ6Fmi086ddTCos9gUwVGoSZZJASRY7wJSFeqny%2FUsFdwImCtzlQT7eU6T8LERouMNWBUw%2BI4Nb3%2FbXkIcLaK3OVOFGwcaeOFRgq0JX%2FMd7RhVj7rPdllE9KoEsGvZbxRa6ULUyNyAdM6Df%2Fi%2FRdZn4jIH6Obj%2Bevm%2FvSeDNpZKvWHZvyMldMJbW%2B8AGOqUB7pL%2FXO1EwABVT7zGxXQxuq2oKgpfA%2BiW5adJS6SMzC1w2%2F%2FZm0a3or8qYvd%2FvGJ0%2Fx3n3cFMZ3hFt8lR3Jp1zpmaLhKSo3uk53Jnhy%2BnFAWRaKhlwcSU69lKM6SSwaRCXobIhKgb%2Fj9mE31tjwc0uT66EnkWzTaLUmO%2FUMo%2BHbqKoWG2rx%2BJWTc2gz9vbnkENTCL3UAVtj6NkJcnwLXiUjweMPNc&X-Amz-Signature=8304545c8e9b605e3f7d7c828668b209c8be68c07830c4b8889901509dff9a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TELS6HHL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWaf4rFlKZeEKOXLizTasTIi8gcWG3I07F6DPln9hp6AiEArlZwEHuaEg6J45khKOiE9WWxMwQtqnXu1S5sv3S%2FBqMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMB3dYihiSgPS%2B5hCrcA41lapWqDC1COpy3t79C6OewxKeNWqtdXHs%2FM7%2Fov73BS7BqHV748iAiLJWRzynNT1jcRct04GjGibiyXT6zjk0O2uHSHG7FRhGjutY7E264Q%2B3IUeQk%2FLNoce1GJty4ynJQ3tdGHeiTgdbjAeQr3Xp5OIAulIWIE%2BL2Pbgzir7tCecJh6EfyytmevMAm0qcqvmSFJI9by0PmtyYd6QRIZYSdPWoUpMGvsSPVGN2AoYq35wOoHfQlCHoAa4qWTxAVCEpBauIRjVkRsHsontErn5vYBtWu0RnLeXHJhJWdlbruB2WOzMVZrTfUdmJp1Av31ojBm8G4W%2FBlDfiF6c9YIaisoPCy4YYOm%2FFyNsEEkelj4d3kzm0tz14sHFJt2KgIOOha7s9YWXRieRbnxPS6BcTQZ1zPKWw45YCdeIWdE7Ze0A6OfglMMXPYhOnz6PrRZHJnG5syLKcEhlnlZNRhDfg11axOpedkTKHXidf5HtDsZm%2F1hFHVJATpa5aPCugCr5bSoFqPyX4Vp6tBrvG1DJl96mYoIy9cxNAhbxgVVliNS9Cg%2BN%2F2MERTnl2MjVNWwm%2B8GXNq16eUrePrLnCCnOfx5CbG6SuC4T3fHXNdI%2BHVJgSl9XmKnaiXfgnMKjW%2B8AGOqUBA0x5vROTUExeHTwViv8JCyQ916fWQhaQykKV%2F%2F4bIWJpBgCrXJVCgkG8aoE2ttTJ3rgIOALU6esufA2KaiGzQZ6rNPozru77mLKv4gFAolGXLn6hxK%2FWHMHJhM3%2BOyMB9an7vVNazE4I3I9F9TNzrrt2%2BbVOUIGSOij6xVHck58zs97dvlUcU8UaqxI%2FWYs7bov2MGRsJI8Se8qC9whNgwp0t0uK&X-Amz-Signature=915dce077de680be094585ec15b972b1fa8b4a6bd06a745df1c1a1a3c4febc5f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
