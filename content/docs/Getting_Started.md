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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJ4GHKQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7juHdIuXu%2B7izbPeJAjLNJUH644C2C099zJh6yaFPDgIgWp603LdTlgNU2hLgIEQDK7zAijeLXMarvAmUKDbehIoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIODy36FtMixZ2fq0ircA4kUR9E%2B2eR784rck25TYn1Sy%2B7HESm%2Bq8BEaro%2FbFNH6oWtniQBwXmwA5eCPzwHc8dJ4PsNcuff7WvtdAzGbaYEbfC8H9o%2B2IvjNmSwBIn%2F4RoZBuXrGS1DIHYxiInwFemTENUtxThKWGf%2BvdpK9LJLdms4E3m6NomUPjRYdgOCnBfsv9RBCwIvcnEWpUY2lWA%2FqhaRwMff7K3qR8wfSGiI0esn%2FAJp9azHtJr248YLdiVebk2QrmSPqSa30ueM80egNfEoDHL5Xp3789u5OZbvkif%2BWSEOPiOmTpUI3%2BLgmyb0Afby7DqxzFeGwHXU4hgO34ZUQy4XChSghyBkUhfhjrmQfIbpPq8baeef8BfzBDOvm8V854lthsuFy61L%2FTCPRgu7EmlubkbVbvDudxqrtGaTny0u483NAeg%2BbwEFnMj9KD6Fs0LpINol3zPCqwogJArP8DbczP6q0LkmCHqiovGmcAiHsetIrqKg739K%2B5xZQ2TtJrOTU8TFfLQ981k9%2B0mbQeXkazNfWA2lAYUePl19BBzUrw%2B1FAymGiirKYaHv%2FnKqGGoQYGDbEqQnjfIXb6Wmz63qyKidwRuxlkHmv9lxckd0Utfo%2Bc0MUm3LHOpF5Ag5xyTmfHdMLPc5MQGOqUBiqYxr53SthEEb4n9A%2BWMTwEJYhJvQw5KS4XqjVPn5NV84UP9NxvnxFs6PJN1Gilb1rZk3t5ct3y6flVigjjWZxaYyrqragJdENN2CEK4mGRpzJHiReRYn00wHUq0j8g4sUGYNgMJKz%2BoEFqelAaXwTTW8m%2FCQbVFPCgSMYXXssWEv7NANTBWeh3koYO%2FsU59kW0V99x8Kgal%2FmRhVgW2vYu5JvRn&X-Amz-Signature=52feafabd13d6ad611243916f8d63b413390d8d770d8d4bdbf763125649ca41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJ4GHKQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7juHdIuXu%2B7izbPeJAjLNJUH644C2C099zJh6yaFPDgIgWp603LdTlgNU2hLgIEQDK7zAijeLXMarvAmUKDbehIoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIODy36FtMixZ2fq0ircA4kUR9E%2B2eR784rck25TYn1Sy%2B7HESm%2Bq8BEaro%2FbFNH6oWtniQBwXmwA5eCPzwHc8dJ4PsNcuff7WvtdAzGbaYEbfC8H9o%2B2IvjNmSwBIn%2F4RoZBuXrGS1DIHYxiInwFemTENUtxThKWGf%2BvdpK9LJLdms4E3m6NomUPjRYdgOCnBfsv9RBCwIvcnEWpUY2lWA%2FqhaRwMff7K3qR8wfSGiI0esn%2FAJp9azHtJr248YLdiVebk2QrmSPqSa30ueM80egNfEoDHL5Xp3789u5OZbvkif%2BWSEOPiOmTpUI3%2BLgmyb0Afby7DqxzFeGwHXU4hgO34ZUQy4XChSghyBkUhfhjrmQfIbpPq8baeef8BfzBDOvm8V854lthsuFy61L%2FTCPRgu7EmlubkbVbvDudxqrtGaTny0u483NAeg%2BbwEFnMj9KD6Fs0LpINol3zPCqwogJArP8DbczP6q0LkmCHqiovGmcAiHsetIrqKg739K%2B5xZQ2TtJrOTU8TFfLQ981k9%2B0mbQeXkazNfWA2lAYUePl19BBzUrw%2B1FAymGiirKYaHv%2FnKqGGoQYGDbEqQnjfIXb6Wmz63qyKidwRuxlkHmv9lxckd0Utfo%2Bc0MUm3LHOpF5Ag5xyTmfHdMLPc5MQGOqUBiqYxr53SthEEb4n9A%2BWMTwEJYhJvQw5KS4XqjVPn5NV84UP9NxvnxFs6PJN1Gilb1rZk3t5ct3y6flVigjjWZxaYyrqragJdENN2CEK4mGRpzJHiReRYn00wHUq0j8g4sUGYNgMJKz%2BoEFqelAaXwTTW8m%2FCQbVFPCgSMYXXssWEv7NANTBWeh3koYO%2FsU59kW0V99x8Kgal%2FmRhVgW2vYu5JvRn&X-Amz-Signature=6bcdb1d051f14440b8cfb032626a79603d0507efc7f845f9e47a3d03de3401f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJ4GHKQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7juHdIuXu%2B7izbPeJAjLNJUH644C2C099zJh6yaFPDgIgWp603LdTlgNU2hLgIEQDK7zAijeLXMarvAmUKDbehIoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIODy36FtMixZ2fq0ircA4kUR9E%2B2eR784rck25TYn1Sy%2B7HESm%2Bq8BEaro%2FbFNH6oWtniQBwXmwA5eCPzwHc8dJ4PsNcuff7WvtdAzGbaYEbfC8H9o%2B2IvjNmSwBIn%2F4RoZBuXrGS1DIHYxiInwFemTENUtxThKWGf%2BvdpK9LJLdms4E3m6NomUPjRYdgOCnBfsv9RBCwIvcnEWpUY2lWA%2FqhaRwMff7K3qR8wfSGiI0esn%2FAJp9azHtJr248YLdiVebk2QrmSPqSa30ueM80egNfEoDHL5Xp3789u5OZbvkif%2BWSEOPiOmTpUI3%2BLgmyb0Afby7DqxzFeGwHXU4hgO34ZUQy4XChSghyBkUhfhjrmQfIbpPq8baeef8BfzBDOvm8V854lthsuFy61L%2FTCPRgu7EmlubkbVbvDudxqrtGaTny0u483NAeg%2BbwEFnMj9KD6Fs0LpINol3zPCqwogJArP8DbczP6q0LkmCHqiovGmcAiHsetIrqKg739K%2B5xZQ2TtJrOTU8TFfLQ981k9%2B0mbQeXkazNfWA2lAYUePl19BBzUrw%2B1FAymGiirKYaHv%2FnKqGGoQYGDbEqQnjfIXb6Wmz63qyKidwRuxlkHmv9lxckd0Utfo%2Bc0MUm3LHOpF5Ag5xyTmfHdMLPc5MQGOqUBiqYxr53SthEEb4n9A%2BWMTwEJYhJvQw5KS4XqjVPn5NV84UP9NxvnxFs6PJN1Gilb1rZk3t5ct3y6flVigjjWZxaYyrqragJdENN2CEK4mGRpzJHiReRYn00wHUq0j8g4sUGYNgMJKz%2BoEFqelAaXwTTW8m%2FCQbVFPCgSMYXXssWEv7NANTBWeh3koYO%2FsU59kW0V99x8Kgal%2FmRhVgW2vYu5JvRn&X-Amz-Signature=b7ae654fcbc21af2b5c343f5529dbe337e8eca6621d93f6a4c9a628908287336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB5G6WM4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BaDGY%2BzOgT99AMNvkhk7HbGw2NOls0JOMS9R1uwz13AiEAkAJN1Xuf%2FZ%2F4yOeNds9eLpDRCfTKtKmnKu9pLGiKLasqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMR3cu70ft1CbscgYCrcA0hJx7cihCIyPl%2Fl%2BDiNUTiF6C%2B9oPRrTMb5UHoLJHanhlCSMGUWQAZqu68qGv4fpQ6HF%2FFpNjiEGPxE2PIZuNewI6FN7XthJ%2BjRxmtVRqBML44H8fEvsaOwlokc1KJ1rDrpsDt6OvgGe9DpAcG%2BgYMUVkC3Gc0bfg5hdJ9q6vephczb8%2Fuqju9TnCJ4QGPA9Btkd5ZVoDnqzzgk580gESnOPxtc2oMxWY7Kx%2FR1A01QDLSOhTDrUdAWa%2BM%2BDdsDa2YbDzWageReAlzxft%2BL8aqnpLecKKousywkWovWDv5MSQof2eApCNzSAnsJSkV6jfg3cHn1DZwpk2cslVR%2BtBzCCr%2F5LHkvR0aDZxK5i0Z7kN4vDTICJ9h8hwi5OFuRkkPivRVB0XFVPEUqD2%2FM2kgsAqLPjgU7N3dkfrg%2FswW3oxVKHYy2KFCXZtqtaSN42IomWKVBzGvpO2pXAIlWa39WyQqG17994eqdOh%2FVF1HhgCJONfeY4u2IOEghycvKc5NGDPP6XpN%2BD%2FyL9KGCGtTqlXgzPZD6V3uJB5vJSwV7QWRZ%2BdiN9XiFy9JJ85X6VTGGkMrKZVFCAG2EG2RcgxxihW1IH%2FzNb122sFhKuPa%2BCsksT%2BTOY2uD3%2BqJMPbW5MQGOqUBZXuK1xb%2F9r0waRWrvZ6SdM0VNN2rFPmJWdQIM5Sj6VhH%2BIX45J%2FDN6VC6mSWhQGa0hKrmYsq9MfUSt2RNNdDZ4v8arEVW9dMfSoA%2BY5joiC0R1IRZ%2B38di7u9mPJK5pTNHHKRRivk2mRuMp4wyL7TA88usDRjPFn5jAVZIHY6372%2BPM92PBiQgfEkCZL87W8e5H5ME72t7NlNewc1fBZKmoO5%2FiZ&X-Amz-Signature=51c59a02bd11388a0a7a006b4f66b62d7615e6d6a9e8ed01c99f9cd9b4f747b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5DNHKK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGUdIYkLwukxUsmn5CD%2BgOU6s9tH%2BCwi8R0bc2UJmkLQIhAIGR4%2BKBgCrO2%2FHc1jUH7cv68T6UuN1rfxfOQkYTkPu0KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJBvHnL5ZwySPshyQq3AOzbByuM%2BGIK1VCPcdI2HnEoAXK07O4X%2FfdPmqwtg1GzR0xdu%2FaLz%2Fvh6xw4YAJKpwD%2BtOJmDUBrfVoEMlhnhOql%2BN5sB1iZA2XOw4WFL4N74wBITEJ13Wtco%2FOJniJHKjY7TxA5EAKo%2BLby6T9cPAuALO4Qmb2yE5YQja%2BKpSjY2EN22kbwVGamOF%2FmP%2Fsmbx6DnnSx5ycbNDTYXPmJGUBmHVuCiUmlF5fGFikkyHtgb4HRr%2FSAbB2a5CjrrHHMsmoCoRHaHmrJLa7TMAM7ngkyWVRaJ9zE62EYx8warawtNRxEk%2Bb2sDrHqGruJv8m%2BeNc9iAcW0onaEx9jcukIehVnOZmnVHBfmd5VV8piigUZz11YD%2Fup5D8%2BsmHQQKtPUSr9ZMqCQY9lnFsLOtRiFLaYKbi%2BnXFtnPPdHJPbxFYakLFzR7ug%2Fksh74pL57O5Dqn51wmfxwKl%2FVxM8gcfnyTfEiaVyoc2KNWHfDdlO3w0QwVuMHVZBMc53DPCU3rOX6O7CHw%2FDSCc6exEc9%2FHfz9B1IjI%2FMZz%2FI4G%2BCccu%2F9vGV5ttFKVwUrOk%2Fub%2FmsbvWWAgyW8JzmlCQpQLIjxl25cz3bmdDblsTJNDjUwyNaRSHORDu4T7nRf%2FrTzD61%2BTEBjqkATvS%2B%2FSPCtz3wvHnPQkV%2FfWu%2FBuc0Lwg%2BJqHM%2Fo8xPBHrRWQpvMJL%2BmMiAi%2FPy8tLZemZ%2Bh%2FLAMNKUef5CQ4tgWFwFOTw3wJf764UPBHs6%2BqspJBr7WJrOR%2Fyb%2BO75Gm55dfdUODx5t%2BLBvitIcNBVMYCUsANgWOEHpIYx1FyJP3KlFtOmz%2FBqoHxxlpT5d2M6tdB2Oj5eOug8bbmb%2Bi1748zybG&X-Amz-Signature=5d5dcb15e90dd770a59adebace2c299d31ef14fb60664cb6498884262d1eb7b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJ4GHKQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7juHdIuXu%2B7izbPeJAjLNJUH644C2C099zJh6yaFPDgIgWp603LdTlgNU2hLgIEQDK7zAijeLXMarvAmUKDbehIoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIODy36FtMixZ2fq0ircA4kUR9E%2B2eR784rck25TYn1Sy%2B7HESm%2Bq8BEaro%2FbFNH6oWtniQBwXmwA5eCPzwHc8dJ4PsNcuff7WvtdAzGbaYEbfC8H9o%2B2IvjNmSwBIn%2F4RoZBuXrGS1DIHYxiInwFemTENUtxThKWGf%2BvdpK9LJLdms4E3m6NomUPjRYdgOCnBfsv9RBCwIvcnEWpUY2lWA%2FqhaRwMff7K3qR8wfSGiI0esn%2FAJp9azHtJr248YLdiVebk2QrmSPqSa30ueM80egNfEoDHL5Xp3789u5OZbvkif%2BWSEOPiOmTpUI3%2BLgmyb0Afby7DqxzFeGwHXU4hgO34ZUQy4XChSghyBkUhfhjrmQfIbpPq8baeef8BfzBDOvm8V854lthsuFy61L%2FTCPRgu7EmlubkbVbvDudxqrtGaTny0u483NAeg%2BbwEFnMj9KD6Fs0LpINol3zPCqwogJArP8DbczP6q0LkmCHqiovGmcAiHsetIrqKg739K%2B5xZQ2TtJrOTU8TFfLQ981k9%2B0mbQeXkazNfWA2lAYUePl19BBzUrw%2B1FAymGiirKYaHv%2FnKqGGoQYGDbEqQnjfIXb6Wmz63qyKidwRuxlkHmv9lxckd0Utfo%2Bc0MUm3LHOpF5Ag5xyTmfHdMLPc5MQGOqUBiqYxr53SthEEb4n9A%2BWMTwEJYhJvQw5KS4XqjVPn5NV84UP9NxvnxFs6PJN1Gilb1rZk3t5ct3y6flVigjjWZxaYyrqragJdENN2CEK4mGRpzJHiReRYn00wHUq0j8g4sUGYNgMJKz%2BoEFqelAaXwTTW8m%2FCQbVFPCgSMYXXssWEv7NANTBWeh3koYO%2FsU59kW0V99x8Kgal%2FmRhVgW2vYu5JvRn&X-Amz-Signature=73787bf2f1432d8d250b3c23a4b5a4cfe2d59e5e499e77af2341fe60f33f69ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
