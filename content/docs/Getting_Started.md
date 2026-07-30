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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPWJ5MD%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CYGIDnwXpInhR36q131h3ihNHbjXHuxok%2BB5W948NAIhAL5efow7Hkw4l1t4frA9zVF724kFE3gqMXrl4JDIErZYKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2k7xqGzyHamBYIicq3ANZS08crUTMG5A03UVOFI8fz%2FBPwlA196Ton%2FYBbZxB4wrWBDA6Qd8ctEbcodRv8%2Bkd%2BGRzYZJEC8PpUoOWLALKNjeo6HT2%2Fz165vr1h93JyI7wethLOisd%2BkCZyKrBbkVheZ0t1sO%2FXFI4NYAleXmyyQCzvNwXgSWtZqhSt8FNIRMzOEWpr7qWrzoo8a9%2FqDQo12hjqBEwDLkgfXP%2FYXm1ch9lUokwLnMTS95mgBRv34%2FhzUdZMwhhkMkcITj49NQ7GWeQKKokEtftrIFPDp38qT3ch5%2FuA%2BDxZRCNMDNYRAK%2Bv4B5RoltEHslFXEySka81yne9Cgxy68IMMsWJpAIiTLMijg%2BFhRxaTnYuWLMhwe4W502%2F6mxMi07%2BMv9rHTCe%2F%2F3M%2BdpEjAmKXjQH7uT4XMwLlZUN%2Bhvn%2FHQfGHElxS%2BVWWKlKKuR2F2S2LiyF8Ijry7dcQkJexNK5K5AevA5zKmd%2BwIT%2FcNsWklo4i0zn%2F77rXFFAlUH5ePfyUxxbGIuyN%2FPkP7BjJoUY2bgGFqM8ZCVRmUc7liVHWKlYzglQSobYFK%2F3tbVnjhU7%2F9mghsVQb6K0Mq5mdaC4LxljIntRfcQDAk1qeCJHFx5F8%2Fwmoh7BXY7Ee3Tq9J6jCQ4qrTBjqkAbgz%2FTSNKPhO8qmkrrVP0oOtwdSagx7qDpCAlRiItRqJ%2FL98oNdYjp8Fww7dgna430hZ8N8%2FnsmoeuhpzUTkud3gQOu%2Fs%2BTZKR31QhidsXavk1RkqGBGSbkCC%2FJdthjA0SGKRMuEeS4WWqVJ7qW%2Bl58hpFP122D0ZDeP4911zRiqma9qrxozknY0MOfys7%2Bgaf6jYx%2BGxPgNcvE2XmuFZWIsSrmF&X-Amz-Signature=b4ed5ebef220fac1ddb9217ffdf357d5dd91a5e5b2a15dbc114648d72c4e60b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPWJ5MD%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CYGIDnwXpInhR36q131h3ihNHbjXHuxok%2BB5W948NAIhAL5efow7Hkw4l1t4frA9zVF724kFE3gqMXrl4JDIErZYKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2k7xqGzyHamBYIicq3ANZS08crUTMG5A03UVOFI8fz%2FBPwlA196Ton%2FYBbZxB4wrWBDA6Qd8ctEbcodRv8%2Bkd%2BGRzYZJEC8PpUoOWLALKNjeo6HT2%2Fz165vr1h93JyI7wethLOisd%2BkCZyKrBbkVheZ0t1sO%2FXFI4NYAleXmyyQCzvNwXgSWtZqhSt8FNIRMzOEWpr7qWrzoo8a9%2FqDQo12hjqBEwDLkgfXP%2FYXm1ch9lUokwLnMTS95mgBRv34%2FhzUdZMwhhkMkcITj49NQ7GWeQKKokEtftrIFPDp38qT3ch5%2FuA%2BDxZRCNMDNYRAK%2Bv4B5RoltEHslFXEySka81yne9Cgxy68IMMsWJpAIiTLMijg%2BFhRxaTnYuWLMhwe4W502%2F6mxMi07%2BMv9rHTCe%2F%2F3M%2BdpEjAmKXjQH7uT4XMwLlZUN%2Bhvn%2FHQfGHElxS%2BVWWKlKKuR2F2S2LiyF8Ijry7dcQkJexNK5K5AevA5zKmd%2BwIT%2FcNsWklo4i0zn%2F77rXFFAlUH5ePfyUxxbGIuyN%2FPkP7BjJoUY2bgGFqM8ZCVRmUc7liVHWKlYzglQSobYFK%2F3tbVnjhU7%2F9mghsVQb6K0Mq5mdaC4LxljIntRfcQDAk1qeCJHFx5F8%2Fwmoh7BXY7Ee3Tq9J6jCQ4qrTBjqkAbgz%2FTSNKPhO8qmkrrVP0oOtwdSagx7qDpCAlRiItRqJ%2FL98oNdYjp8Fww7dgna430hZ8N8%2FnsmoeuhpzUTkud3gQOu%2Fs%2BTZKR31QhidsXavk1RkqGBGSbkCC%2FJdthjA0SGKRMuEeS4WWqVJ7qW%2Bl58hpFP122D0ZDeP4911zRiqma9qrxozknY0MOfys7%2Bgaf6jYx%2BGxPgNcvE2XmuFZWIsSrmF&X-Amz-Signature=85cb84e076301c5bec91e188a264de745d6672cb226a7608c31b185e40903f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPWJ5MD%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CYGIDnwXpInhR36q131h3ihNHbjXHuxok%2BB5W948NAIhAL5efow7Hkw4l1t4frA9zVF724kFE3gqMXrl4JDIErZYKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2k7xqGzyHamBYIicq3ANZS08crUTMG5A03UVOFI8fz%2FBPwlA196Ton%2FYBbZxB4wrWBDA6Qd8ctEbcodRv8%2Bkd%2BGRzYZJEC8PpUoOWLALKNjeo6HT2%2Fz165vr1h93JyI7wethLOisd%2BkCZyKrBbkVheZ0t1sO%2FXFI4NYAleXmyyQCzvNwXgSWtZqhSt8FNIRMzOEWpr7qWrzoo8a9%2FqDQo12hjqBEwDLkgfXP%2FYXm1ch9lUokwLnMTS95mgBRv34%2FhzUdZMwhhkMkcITj49NQ7GWeQKKokEtftrIFPDp38qT3ch5%2FuA%2BDxZRCNMDNYRAK%2Bv4B5RoltEHslFXEySka81yne9Cgxy68IMMsWJpAIiTLMijg%2BFhRxaTnYuWLMhwe4W502%2F6mxMi07%2BMv9rHTCe%2F%2F3M%2BdpEjAmKXjQH7uT4XMwLlZUN%2Bhvn%2FHQfGHElxS%2BVWWKlKKuR2F2S2LiyF8Ijry7dcQkJexNK5K5AevA5zKmd%2BwIT%2FcNsWklo4i0zn%2F77rXFFAlUH5ePfyUxxbGIuyN%2FPkP7BjJoUY2bgGFqM8ZCVRmUc7liVHWKlYzglQSobYFK%2F3tbVnjhU7%2F9mghsVQb6K0Mq5mdaC4LxljIntRfcQDAk1qeCJHFx5F8%2Fwmoh7BXY7Ee3Tq9J6jCQ4qrTBjqkAbgz%2FTSNKPhO8qmkrrVP0oOtwdSagx7qDpCAlRiItRqJ%2FL98oNdYjp8Fww7dgna430hZ8N8%2FnsmoeuhpzUTkud3gQOu%2Fs%2BTZKR31QhidsXavk1RkqGBGSbkCC%2FJdthjA0SGKRMuEeS4WWqVJ7qW%2Bl58hpFP122D0ZDeP4911zRiqma9qrxozknY0MOfys7%2Bgaf6jYx%2BGxPgNcvE2XmuFZWIsSrmF&X-Amz-Signature=f622495388165526acba27652f512c084806cde9c197b56a27581eb43c0eb44b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EFCZWNE%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRVg83ItWatrPSQ7xqNO0nwIl%2F6wTp0mWAJp6USsuEwIhAMgi2EWS6IxIX2IBoPc4h7S%2Fx%2FHHw0%2Bbtj7zpq%2FKQirTKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyz%2BfbmQ8HxlHxxJjgq3ANtCnuwPUsAXXpLGDqwUKe4H0a%2FO0MyCVo1H8A0As79grfcG1dVPsejIApNeb%2Ba5xCrYJ9dnt8kPEq%2B%2BfqgpmWVbFif3ikpVJDXrkqk6pd7otB4oG68phM0dHWJpONColrB5Xa1XD0%2B5UvUYE%2BXh4W%2BGxqVW4ksqqWoKNHKm7wfuzlAa7P6hSivBBHYoKTZTXTcmKafz5jTK9vlcqTG0XbpzknIJf8j208quELuyEDX45gyrDPUZmnU2y4fg4DKW%2FNinZDkOxcOdOKwnz8WVaZXGe3m3WXptpEhThkBAVTh%2FmbnjLxJE1L%2FkLcSTume65YKqU5Ash7P1zQ8g%2BxzGC0KkVmgd1JsUc7kl%2F%2FmyeTFwB2qCDRpbLgg5ObAYoPPTbGhOnNCIDkbVu%2BP6i%2F01HHflHKMa53eUyJpg84bM8%2B%2FLW8PwxoXa%2FJTbWPbiwIKTeDyUc5kYOBJyCxdManrOAwflaL1ZlPlG5lYYm%2BkxH3nJ38p4MQBKAruCu%2B8FL8umL8XZ8dytJ759axJ%2B4zKeSvD5FrLxR940BVd%2BHv2TAndfWt2AqKEGpk7OA%2ByqkUcidVrYUpFRU3FBYhAHSe9f1KcKARW4fMY4eUcaC0FPJS1brOYjeKnAjeFLV5yHzC%2B36rTBjqkAfRfAEHuNzEbg8oQEIk38Ea2CJ3evYKbNkYJdgzNb5PuOWeenTxnARtOYM5sB7XqREPbZaXRa%2FIlJ5VeHBbH6Txnmuk7yMCC8ZcSSITRiTqatKxrS1BMOo0pWRdoiMFEqPnoh3V15YV6uNVUcZR2%2FEMd2QQ%2FYVF39Pz77QSfCSkwoqbgNCUhvRZfbb1bTAd6u8Wf2v8r%2B5RrhvcXVE%2BqWT5Mz0vI&X-Amz-Signature=e88f33a1c2956355cc52b5dac4ad59ec66ca92ce2f4ef7f04406a87e952bd94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2G3R3XW%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmxwtxEErphEg%2BW4a3%2BHVJI0b9rF1rnXQ4f4PlR6uDWAiEAnz7pLsyZgzOr5gs3FKI32lFtjvE3FtJ1eVa7NrK8btcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUKTsWbOEvDkEl0nyrcA1N%2BgboQibw5o77HfjhawsOXX9wHpbIl4qVYQxJlWoaD1QD2QNFk9H7e2cKEQuQwYfs1CdV7RikL3UXpM14SuN343dv7pdzpcGpalm8TX4QYpTtOPht6xZEmU6SwwOR5gAiW2ZpBWzLf%2F0jTJjdqNVktl5BJaOIsyAiM%2BvqpMYDXHN3fgrCLuyWyhlP62SKG76Cl0b2Wp4rHnTZPkQwhQmV3Z9Y3q6h2%2Bs7Vpzv0%2B0oaioB4FYFrgR6ygVn0KLgIwM8t%2FyCOaiostp1ZeEZyqs7Mv7TLdOkWrRIGVEHKIw8Xss72tBQszYyb8MfqQshBRatnQQEy9NAB79LZubGbLqqmYuXhCnYPOWY5lWdv7JiW1Rktds48IkogsGR2tZqKT73u8fGOybYxbdCmdUH94ZPgEnuPxdtvsjIYKtAr8iuNwrb4Y%2FzQdlmuaqhJMnLKn3fVhnGE7BVkWgrQI4U7IeN4PGqsQ9a8Zw9%2BaswjOKeOM2GDQiR2tGTcNMLDwZGLInvK9H7AgmBSFTPcThoANkVA3BQacTtzdr4yOIwAlzqZ2AFYNhTU5SIKNt5InVyC4JI86EI8BFI2RC8SM3%2BjZtNc7JtsB79wB6siuEflJdd5vvQWAynfZ95AQusxMJDfqtMGOqUBMckEdnWcGe%2BN6VgD%2FjINvWkvOtcQDo7j8uW9rBhAu%2BAJpFOVRcVEuAY%2BfhLfqPlpZ9gGevuvzaJUsO%2Fz47apfLiXI4y8iaeS88Sljg6%2BnVvQDiocQDrv5LIVULHnsZOPd4oS0xJYBMRxGUuXURGEwtaxT7dSGEMnXB3552UOby6Y0fXQtz7WLf64dYxCfjziJS7YlC3pe9fEcrWuWJ1MYqUl7He%2F&X-Amz-Signature=7c20edc0d37d8c53383a75446c08b2f98a1c32573cab526e77bb3e0172a4b85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GPWJ5MD%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CYGIDnwXpInhR36q131h3ihNHbjXHuxok%2BB5W948NAIhAL5efow7Hkw4l1t4frA9zVF724kFE3gqMXrl4JDIErZYKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2k7xqGzyHamBYIicq3ANZS08crUTMG5A03UVOFI8fz%2FBPwlA196Ton%2FYBbZxB4wrWBDA6Qd8ctEbcodRv8%2Bkd%2BGRzYZJEC8PpUoOWLALKNjeo6HT2%2Fz165vr1h93JyI7wethLOisd%2BkCZyKrBbkVheZ0t1sO%2FXFI4NYAleXmyyQCzvNwXgSWtZqhSt8FNIRMzOEWpr7qWrzoo8a9%2FqDQo12hjqBEwDLkgfXP%2FYXm1ch9lUokwLnMTS95mgBRv34%2FhzUdZMwhhkMkcITj49NQ7GWeQKKokEtftrIFPDp38qT3ch5%2FuA%2BDxZRCNMDNYRAK%2Bv4B5RoltEHslFXEySka81yne9Cgxy68IMMsWJpAIiTLMijg%2BFhRxaTnYuWLMhwe4W502%2F6mxMi07%2BMv9rHTCe%2F%2F3M%2BdpEjAmKXjQH7uT4XMwLlZUN%2Bhvn%2FHQfGHElxS%2BVWWKlKKuR2F2S2LiyF8Ijry7dcQkJexNK5K5AevA5zKmd%2BwIT%2FcNsWklo4i0zn%2F77rXFFAlUH5ePfyUxxbGIuyN%2FPkP7BjJoUY2bgGFqM8ZCVRmUc7liVHWKlYzglQSobYFK%2F3tbVnjhU7%2F9mghsVQb6K0Mq5mdaC4LxljIntRfcQDAk1qeCJHFx5F8%2Fwmoh7BXY7Ee3Tq9J6jCQ4qrTBjqkAbgz%2FTSNKPhO8qmkrrVP0oOtwdSagx7qDpCAlRiItRqJ%2FL98oNdYjp8Fww7dgna430hZ8N8%2FnsmoeuhpzUTkud3gQOu%2Fs%2BTZKR31QhidsXavk1RkqGBGSbkCC%2FJdthjA0SGKRMuEeS4WWqVJ7qW%2Bl58hpFP122D0ZDeP4911zRiqma9qrxozknY0MOfys7%2Bgaf6jYx%2BGxPgNcvE2XmuFZWIsSrmF&X-Amz-Signature=d666c9ad4f0b3b9cb38a3b830e5ec54d2096f8df422a562425e6d4c3691b657e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
