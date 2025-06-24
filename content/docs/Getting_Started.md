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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIME3MCA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCli41Z0z%2B5OBTVrDcIokO9NCLoBKxabB%2BoQCofioh11AIhAIfHDvD%2F1O30IzPcO1BEhytQuInQMaayMBfk6nBZkPcMKv8DCCkQABoMNjM3NDIzMTgzODA1IgzSc5RmIgdievFJ5Kcq3APzyryFAaGAWaeO0jwiF54w1Z1C%2FBo2YaJdv6jmy47heiDHojA3MOhLwMkbjyvn9udrTZV8rI10dvn4wl3N%2BfKdEGIEvpbsLUTVltHqe80CRZ9HVAyepaCvBKlMH9fLRTN5WeUXuMBdBK0rrNFh1iv2PkWTWOTlT09seOsdMZMsP7Wtx9u2LrTy7X%2BTj4diNjQAx5FR0Y6HQRBHF5kSTtaOSiinTU%2FwwViOLPxQvMFXm06gv3jDPXf7tl3dyFhqIDfaK%2FMN67dUGVUe4MvR2g8rvAi7vBX0qOvcYlWO%2BhekO9E29hpOg2QAyqCeu6b%2B2kOgIAopAu6L8gIozyUVGYEflN4JYuTlTjod1bFh7rdEa%2B3GzVAxSHvhV264jKoqGs4aecqqCoqFC87aA6MXatCT22BfQMXqyzNcBHH%2FV83GYSuEOi2vFZTdk1UCZF8Xmqa57aacpgSTqVbFrtISGVZ6gE3tzalF0Pa%2BdqxJW%2BPWR3rH%2BJYKKm4CTK36OH9xTlu6TU%2FFVNnkUBIdLx5tXwpzSG1rYZmEcvP9gYUQqiguNnhKr%2FScTbqCmDPzicTevsJxLY9wkUiFiESayEIZGY1%2BoJuRIdP0aElt726rkVOnWJ4G8u5gCRKDuVr%2B2jC9s%2BnCBjqkAcQiKnSSQITCrso0zKn16Kuc06H3GeAjubHCRX0geqaYf9oCqkpj38R4rbaDvdQRm4MAJN1sCucdkhnGynTeY2CQCMyLwsG7abIIv5iMfnI3q6AAKNedAh7fRuWgJobkyAKTTPJKe9Zw5osWdnSfRT8Zzndi2cAXpLWcWlPUo5Oye3T%2B7%2BuI%2BCaCgees%2F9xSNwykRvSXjpB01NhSR3hVhXwsdZ8t&X-Amz-Signature=caf565e8be45466c1a419f9e11541eb640533a88c7b53e4dd93faeb54a0cc736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIME3MCA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCli41Z0z%2B5OBTVrDcIokO9NCLoBKxabB%2BoQCofioh11AIhAIfHDvD%2F1O30IzPcO1BEhytQuInQMaayMBfk6nBZkPcMKv8DCCkQABoMNjM3NDIzMTgzODA1IgzSc5RmIgdievFJ5Kcq3APzyryFAaGAWaeO0jwiF54w1Z1C%2FBo2YaJdv6jmy47heiDHojA3MOhLwMkbjyvn9udrTZV8rI10dvn4wl3N%2BfKdEGIEvpbsLUTVltHqe80CRZ9HVAyepaCvBKlMH9fLRTN5WeUXuMBdBK0rrNFh1iv2PkWTWOTlT09seOsdMZMsP7Wtx9u2LrTy7X%2BTj4diNjQAx5FR0Y6HQRBHF5kSTtaOSiinTU%2FwwViOLPxQvMFXm06gv3jDPXf7tl3dyFhqIDfaK%2FMN67dUGVUe4MvR2g8rvAi7vBX0qOvcYlWO%2BhekO9E29hpOg2QAyqCeu6b%2B2kOgIAopAu6L8gIozyUVGYEflN4JYuTlTjod1bFh7rdEa%2B3GzVAxSHvhV264jKoqGs4aecqqCoqFC87aA6MXatCT22BfQMXqyzNcBHH%2FV83GYSuEOi2vFZTdk1UCZF8Xmqa57aacpgSTqVbFrtISGVZ6gE3tzalF0Pa%2BdqxJW%2BPWR3rH%2BJYKKm4CTK36OH9xTlu6TU%2FFVNnkUBIdLx5tXwpzSG1rYZmEcvP9gYUQqiguNnhKr%2FScTbqCmDPzicTevsJxLY9wkUiFiESayEIZGY1%2BoJuRIdP0aElt726rkVOnWJ4G8u5gCRKDuVr%2B2jC9s%2BnCBjqkAcQiKnSSQITCrso0zKn16Kuc06H3GeAjubHCRX0geqaYf9oCqkpj38R4rbaDvdQRm4MAJN1sCucdkhnGynTeY2CQCMyLwsG7abIIv5iMfnI3q6AAKNedAh7fRuWgJobkyAKTTPJKe9Zw5osWdnSfRT8Zzndi2cAXpLWcWlPUo5Oye3T%2B7%2BuI%2BCaCgees%2F9xSNwykRvSXjpB01NhSR3hVhXwsdZ8t&X-Amz-Signature=999e43324b5aacf6553f1ed061d41286947532515b6e9fb5580f07910228f459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIME3MCA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCli41Z0z%2B5OBTVrDcIokO9NCLoBKxabB%2BoQCofioh11AIhAIfHDvD%2F1O30IzPcO1BEhytQuInQMaayMBfk6nBZkPcMKv8DCCkQABoMNjM3NDIzMTgzODA1IgzSc5RmIgdievFJ5Kcq3APzyryFAaGAWaeO0jwiF54w1Z1C%2FBo2YaJdv6jmy47heiDHojA3MOhLwMkbjyvn9udrTZV8rI10dvn4wl3N%2BfKdEGIEvpbsLUTVltHqe80CRZ9HVAyepaCvBKlMH9fLRTN5WeUXuMBdBK0rrNFh1iv2PkWTWOTlT09seOsdMZMsP7Wtx9u2LrTy7X%2BTj4diNjQAx5FR0Y6HQRBHF5kSTtaOSiinTU%2FwwViOLPxQvMFXm06gv3jDPXf7tl3dyFhqIDfaK%2FMN67dUGVUe4MvR2g8rvAi7vBX0qOvcYlWO%2BhekO9E29hpOg2QAyqCeu6b%2B2kOgIAopAu6L8gIozyUVGYEflN4JYuTlTjod1bFh7rdEa%2B3GzVAxSHvhV264jKoqGs4aecqqCoqFC87aA6MXatCT22BfQMXqyzNcBHH%2FV83GYSuEOi2vFZTdk1UCZF8Xmqa57aacpgSTqVbFrtISGVZ6gE3tzalF0Pa%2BdqxJW%2BPWR3rH%2BJYKKm4CTK36OH9xTlu6TU%2FFVNnkUBIdLx5tXwpzSG1rYZmEcvP9gYUQqiguNnhKr%2FScTbqCmDPzicTevsJxLY9wkUiFiESayEIZGY1%2BoJuRIdP0aElt726rkVOnWJ4G8u5gCRKDuVr%2B2jC9s%2BnCBjqkAcQiKnSSQITCrso0zKn16Kuc06H3GeAjubHCRX0geqaYf9oCqkpj38R4rbaDvdQRm4MAJN1sCucdkhnGynTeY2CQCMyLwsG7abIIv5iMfnI3q6AAKNedAh7fRuWgJobkyAKTTPJKe9Zw5osWdnSfRT8Zzndi2cAXpLWcWlPUo5Oye3T%2B7%2BuI%2BCaCgees%2F9xSNwykRvSXjpB01NhSR3hVhXwsdZ8t&X-Amz-Signature=f40bf7f62af639513f1c211171a1c1156618e9eb5904725f90e355b456861c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE7SHGBA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDxESbHar7AWBOvvRCsHKVIF4EtJ57OYq%2F4FsIbjt9rlgIhAOWot5GV0WARamobiYiZr%2FcNvcfLuyndsldr25sp3%2FBwKv8DCCkQABoMNjM3NDIzMTgzODA1IgzO%2FNbYRLtV25pprNcq3AN14HQ916YZYorfObzcLPMO62K4kEn%2FNwOy5Umm%2BY0kbeuGvde4UED7zOfKNEeN1psyQMPOW9R3VO0M5NPBIOSRzGOyld4NYRb%2FNi4bobGd%2B1IgT39R7l50nio654ptDX8s0zbh5U%2FolF9vBDwyyIlVoc5js%2FAwS7kDQsalGZIGQ%2B0rbtAci24c%2ByKIMSQy8rfUAm6ntJYVjQaajzsPWMWhFet5wsZZBF5WP87OtEPyEOKiG0eTipK6NiHBbX2DgSkTapyU5RXwLLnqPooCWEVoQYXZjH2ttggnt50e7eZVmkX7vmSIpMqiEK4raRuG2p1Vge5NkP3vmZwTpENFmT4QCNLaOo5EOINuAqtMzO6bccLr0LOlsGDekNGE7DvlQAoEpmxkMw7zvOA40oW%2BE1ypNt9rVfN%2F32cHmtp3pP6v4mimc9O0b0Xji7%2B8Q%2FWln%2FWg5LvmgUpHzid6CJ4NyufaIRxUoJMKPYmvTDuYBbBWB5ByRghrbNPKkVX4vIMjZ2xFSRlgZq947lL5%2FKkz3E%2BwMSo0HkLZJHHa%2FPVkUdaldamoklVlE7tkoAkWMbA3vExKSrVoQ8JOLLW7PmjhNr2hQuBep2eQ432miIaZ7NWr37BDuqtYSPtP9b5gJTCusenCBjqkAbKK5tk6wJHzQVK1R1MuchIbAiU07MoQzZGnC8K16OScBppP7lPaWWPOjPizk3FXiyEJh0dRAhEOHQ2uWhTQPCL5CXiZKQm%2BFY8vip%2BKGgbfWLeRkEBz0pmelJWUmEPfjBisj4KylkoXbRU%2Fo%2B5MyIa8IXN5dFj%2FdNk1WUuir7Xl4Rfxq2D2C02jsWiEi%2BqRIKae2XK881K7XCsdG%2BSOlBWX0kPr&X-Amz-Signature=410eb3b5f953bad891d679bffe9a6eb12069c666f13b686dc647a9fcf9129dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32PJWOW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGLrjHFJqXFaQVst%2BkizzfYDOvkc4XbVhUbv4Ib3GN5YAiEAmObuL2AmjJB5PAagyL8Fiu%2FqarB1oMNQiJJHPrNyfLkq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDM78C8kfs%2B6EcIxsnSrcA74ixLTimjeBNftqo%2BDQtW01GiHSr7PUEaxkaSBZtJbH7V29WVTxPwjccLz%2BhmRkc%2FnAq7oBssyqi2DLx2iLmuPzg28Ut07NRaUaHFPqSWnXDZtHeXUuubdMD576YEOKOsebXrqqmMgeL02n9uvxNKi0BBK76ZiJtEBH%2BAnZgCIZlhwUYm%2Flc4pHS5Ej0sek9dnjJtOOUA0%2FQBRD19yCFj3kIoEY8kLhKjTlWRYUt9O9OPLsK1HHFu1wsunhz0%2BLdUbaWgeEj%2FhNb6xRRBABfV4Jk0vYhdHse9rDfxQgIudJ5rBbvOg796iNlAN6Go8SSuF47dW2wv8UZ31Wg77B9UFUkc1HB03Y%2FzkbIa7ogKDWoDKDTHWFcLRwki7Y%2Fx%2Fd%2FKUK0ZCcwGuqTDI19MTJd7Wuya8rpy1FRufz9t8gf9KV7bs0TayZrOfuDdKEZoqfAm%2BjLm9cSvUKBQ9zDyT8tyjYFPedPLTYZ%2B9pGLShq3l3Tfsb7AwA3Bz3RseTjNQBNU2Z0Scom7TfqxVdIHR6pfq%2Fxuiek4RW6cqhjboYwkvgYwMZSxLVq%2BcQKZcwQSzTHj3iPaQcJsThj813aPQoTg87IQdU%2B4n4fELkfzZBQEFuk3ipgD89%2B4pmQTfbMIOy6cIGOqUBk5FCCqBhSvvKaZnKhCCCfnX0TtvoQu7v8vD7y68WMLeO1sVfyWyn8RPKTrFOpApZggQVRt3sHtr8wLny2RqvmkmcgiAhpDHNH3467FX4TB4i%2BU4NzDab0H%2Fb41DjqLbh8gtHhLRR7GXWjYysKog%2B1y0IW0uoexN3jmmyFoUVrqwOqxzzkZa%2FE5HwzgCHLkzlo9RKAwPdbnucffHfX%2FqFNp1se5C1&X-Amz-Signature=5a06ddab7fd01b355dd0e024528b090984624ac6b94530df21996075578f9140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIME3MCA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCli41Z0z%2B5OBTVrDcIokO9NCLoBKxabB%2BoQCofioh11AIhAIfHDvD%2F1O30IzPcO1BEhytQuInQMaayMBfk6nBZkPcMKv8DCCkQABoMNjM3NDIzMTgzODA1IgzSc5RmIgdievFJ5Kcq3APzyryFAaGAWaeO0jwiF54w1Z1C%2FBo2YaJdv6jmy47heiDHojA3MOhLwMkbjyvn9udrTZV8rI10dvn4wl3N%2BfKdEGIEvpbsLUTVltHqe80CRZ9HVAyepaCvBKlMH9fLRTN5WeUXuMBdBK0rrNFh1iv2PkWTWOTlT09seOsdMZMsP7Wtx9u2LrTy7X%2BTj4diNjQAx5FR0Y6HQRBHF5kSTtaOSiinTU%2FwwViOLPxQvMFXm06gv3jDPXf7tl3dyFhqIDfaK%2FMN67dUGVUe4MvR2g8rvAi7vBX0qOvcYlWO%2BhekO9E29hpOg2QAyqCeu6b%2B2kOgIAopAu6L8gIozyUVGYEflN4JYuTlTjod1bFh7rdEa%2B3GzVAxSHvhV264jKoqGs4aecqqCoqFC87aA6MXatCT22BfQMXqyzNcBHH%2FV83GYSuEOi2vFZTdk1UCZF8Xmqa57aacpgSTqVbFrtISGVZ6gE3tzalF0Pa%2BdqxJW%2BPWR3rH%2BJYKKm4CTK36OH9xTlu6TU%2FFVNnkUBIdLx5tXwpzSG1rYZmEcvP9gYUQqiguNnhKr%2FScTbqCmDPzicTevsJxLY9wkUiFiESayEIZGY1%2BoJuRIdP0aElt726rkVOnWJ4G8u5gCRKDuVr%2B2jC9s%2BnCBjqkAcQiKnSSQITCrso0zKn16Kuc06H3GeAjubHCRX0geqaYf9oCqkpj38R4rbaDvdQRm4MAJN1sCucdkhnGynTeY2CQCMyLwsG7abIIv5iMfnI3q6AAKNedAh7fRuWgJobkyAKTTPJKe9Zw5osWdnSfRT8Zzndi2cAXpLWcWlPUo5Oye3T%2B7%2BuI%2BCaCgees%2F9xSNwykRvSXjpB01NhSR3hVhXwsdZ8t&X-Amz-Signature=98d29d9ec00c45451495d87d0480612f89d07257834906ff663f4b50f211629c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
