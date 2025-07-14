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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLJWJYWA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIASdZ2tX9wPGQUp93%2FL114DyvIqye%2BL%2F0qUFopSw0G%2FFAiA2YIk%2BLezZrzmFVuypWz6U2Ht8VeqcNMyrNIYub%2F7GMir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM2x9WgTQA7qfV7YerKtwDhtvfd0hy5Hsi42ekww0XlfBEcM7Venoyx6ZmHqhCnA734d2nSqSHd1URD%2F0ToItkKcWHe97WcD0mW%2FWo6r9aLis%2FDByJej1CIJcGdGPt1C1yR%2FJomS6zbPlOEO%2BXWfhH%2FUJ0dWp5Bim8ANTjgf%2BCldqRAAsS3N9SWgsUIFEOE6%2Fw4RTn2qdM72Tj4dJVis0j%2BbaAMqFvoHpVebEelpZzRIaoXyvdIeCFtdrG1RV52Ab2WqPbMqGUtEumzgZkDzXXSon1Rwr32FyHFIMl24wdhgDUAfcbrFLIik8EOMO4RSpXUseSjdndgl9ksgr6VRZt5m6XqI5%2BcjJcDlSNEcchCf9AJETPyZHDaDo%2FUYh3tnZ8w2fcji38Cd6gzdUCkJFLvuR%2FvqlBzxJFY52X%2FYQGk%2F58qxcfcxeQ7BOH73akMLAfQ30BrB5PqOM8d8C7E9ZwX5I6ee2bkoYwC8xnH6CSy515yyHiABH%2BBweEbsczo3w25B%2FB7Lxu55AcaxpI2MIb6uxQS%2Fd2lvJoa7%2BwpPPq5vFgQCGiJVuFdYfDoRQbFBSseJPNTubgrpDU64YtmJtkB3Nk2NU%2Bi7R41G18Xlc6elchvwYgiPsC5oCrRjkYsT74UsicaTIV5WdZ08Qw9YTUwwY6pgEUDossaVyZYAKASaEgcefIw3N0H5wCVbTb9V11r13kIETGrSm2KNfzdHDiv1Ijfn60MI5TKhSWXUA5x4DmZCWr2WbDZD0uno6ZXIttO5b4L%2FvaZXgKQLz9kmQyizNrtjtD0Wn6xzRz21SFt8kJlMtoSBJy9UqgODkM3ix%2FUa3Iz7UduU4NHUp0KOF0jyvLISlZAih0aqKw3LfhflJbxLdWuaqewfTM&X-Amz-Signature=156032c44b627f26c25b7a76040fdfd479a1e48163c39224284349b486ed6de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLJWJYWA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIASdZ2tX9wPGQUp93%2FL114DyvIqye%2BL%2F0qUFopSw0G%2FFAiA2YIk%2BLezZrzmFVuypWz6U2Ht8VeqcNMyrNIYub%2F7GMir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM2x9WgTQA7qfV7YerKtwDhtvfd0hy5Hsi42ekww0XlfBEcM7Venoyx6ZmHqhCnA734d2nSqSHd1URD%2F0ToItkKcWHe97WcD0mW%2FWo6r9aLis%2FDByJej1CIJcGdGPt1C1yR%2FJomS6zbPlOEO%2BXWfhH%2FUJ0dWp5Bim8ANTjgf%2BCldqRAAsS3N9SWgsUIFEOE6%2Fw4RTn2qdM72Tj4dJVis0j%2BbaAMqFvoHpVebEelpZzRIaoXyvdIeCFtdrG1RV52Ab2WqPbMqGUtEumzgZkDzXXSon1Rwr32FyHFIMl24wdhgDUAfcbrFLIik8EOMO4RSpXUseSjdndgl9ksgr6VRZt5m6XqI5%2BcjJcDlSNEcchCf9AJETPyZHDaDo%2FUYh3tnZ8w2fcji38Cd6gzdUCkJFLvuR%2FvqlBzxJFY52X%2FYQGk%2F58qxcfcxeQ7BOH73akMLAfQ30BrB5PqOM8d8C7E9ZwX5I6ee2bkoYwC8xnH6CSy515yyHiABH%2BBweEbsczo3w25B%2FB7Lxu55AcaxpI2MIb6uxQS%2Fd2lvJoa7%2BwpPPq5vFgQCGiJVuFdYfDoRQbFBSseJPNTubgrpDU64YtmJtkB3Nk2NU%2Bi7R41G18Xlc6elchvwYgiPsC5oCrRjkYsT74UsicaTIV5WdZ08Qw9YTUwwY6pgEUDossaVyZYAKASaEgcefIw3N0H5wCVbTb9V11r13kIETGrSm2KNfzdHDiv1Ijfn60MI5TKhSWXUA5x4DmZCWr2WbDZD0uno6ZXIttO5b4L%2FvaZXgKQLz9kmQyizNrtjtD0Wn6xzRz21SFt8kJlMtoSBJy9UqgODkM3ix%2FUa3Iz7UduU4NHUp0KOF0jyvLISlZAih0aqKw3LfhflJbxLdWuaqewfTM&X-Amz-Signature=ef2297c6439f5d4350b8bd29dceea98732bee6bbbdc005311362d4009ccf335f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLJWJYWA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIASdZ2tX9wPGQUp93%2FL114DyvIqye%2BL%2F0qUFopSw0G%2FFAiA2YIk%2BLezZrzmFVuypWz6U2Ht8VeqcNMyrNIYub%2F7GMir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM2x9WgTQA7qfV7YerKtwDhtvfd0hy5Hsi42ekww0XlfBEcM7Venoyx6ZmHqhCnA734d2nSqSHd1URD%2F0ToItkKcWHe97WcD0mW%2FWo6r9aLis%2FDByJej1CIJcGdGPt1C1yR%2FJomS6zbPlOEO%2BXWfhH%2FUJ0dWp5Bim8ANTjgf%2BCldqRAAsS3N9SWgsUIFEOE6%2Fw4RTn2qdM72Tj4dJVis0j%2BbaAMqFvoHpVebEelpZzRIaoXyvdIeCFtdrG1RV52Ab2WqPbMqGUtEumzgZkDzXXSon1Rwr32FyHFIMl24wdhgDUAfcbrFLIik8EOMO4RSpXUseSjdndgl9ksgr6VRZt5m6XqI5%2BcjJcDlSNEcchCf9AJETPyZHDaDo%2FUYh3tnZ8w2fcji38Cd6gzdUCkJFLvuR%2FvqlBzxJFY52X%2FYQGk%2F58qxcfcxeQ7BOH73akMLAfQ30BrB5PqOM8d8C7E9ZwX5I6ee2bkoYwC8xnH6CSy515yyHiABH%2BBweEbsczo3w25B%2FB7Lxu55AcaxpI2MIb6uxQS%2Fd2lvJoa7%2BwpPPq5vFgQCGiJVuFdYfDoRQbFBSseJPNTubgrpDU64YtmJtkB3Nk2NU%2Bi7R41G18Xlc6elchvwYgiPsC5oCrRjkYsT74UsicaTIV5WdZ08Qw9YTUwwY6pgEUDossaVyZYAKASaEgcefIw3N0H5wCVbTb9V11r13kIETGrSm2KNfzdHDiv1Ijfn60MI5TKhSWXUA5x4DmZCWr2WbDZD0uno6ZXIttO5b4L%2FvaZXgKQLz9kmQyizNrtjtD0Wn6xzRz21SFt8kJlMtoSBJy9UqgODkM3ix%2FUa3Iz7UduU4NHUp0KOF0jyvLISlZAih0aqKw3LfhflJbxLdWuaqewfTM&X-Amz-Signature=40892f7be60e1e6dc1b62afcc5394782efc25e74d9f39cf2ef0a5f411cddf14e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMUVWNI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC6RkJv1yDlMDRHIAIyx3PmbEnmWNGBlOdSQ9KXiI2EHgIhAOLY1UofSN4cWEUMVjQcT9e1B3HsnS1xOuj4i6PRtdsnKv8DCC4QABoMNjM3NDIzMTgzODA1IgwMNzF2uRqQcj8BEDMq3AN2e1M6NjKoLYlH5rQbps6bMFqRLA20jpjcnbVlgKfk%2BDuUR0vagbBvqhf82b2I4va5CATXf%2BEdtDlGqqrZrobVW1EK2IhAL7dU4rQL4t5GgT377K%2BpQTsVumdYCSnsZaquSsiU6DYzEn10FNLEfiaIKBqUk0sOLHaYkkOTlCy7qPfGD9mY2odOnXiiKhHqSIoR2zVZoUjwiUI11CmodnK5UAxelR16MjBOlIjAuspmzJ9PTU0Gtay%2F8uFdZZdGtkkwONmxhdXZqRleMEMzqf0FsP0iwP0kExYABGDDXZYMQyp%2FOHYDtEfOg2uh3yyOJiG853343wqzab09ZQmu7oImF0lmgp7bAgY0eCrvQS9hTuIFm6tMPDc9wl5OVjwO%2Fed6x7ENd3udswlloYFESwrRVDF0a5DI0uFXpwh3rg4CDzoYCWtwmZsuNHNZahamwMiQRazfcP5VxcL1pADIO4NRwgqEOh9lFdISCO8fKRaTTMuXldlOdXmGY6vw0R7NkV17gTOvDwiGOP462jKzYgIZ78OBIoEeJUDHvG4xEX3UgQei3r52EVHL7CPRZn1zWMhVwKZrBVf0nkMrO8QOLM35cwOINdtoesSLcs3wESrX2SRqc%2B6A%2BKJW35YMODDEhdTDBjqkAdskJGRsPzX2ZgJJhSJ3hdeUBHipbjUOT5yKoNxfnpMT40CRsU%2FB4rOXJasdvO6IYBrh%2BXBD3VqvmS8vx4UPfEKFmV8nqrWuqjAg2l79fIREqBZO0%2Bq0TMRRkyIPUuEEQkvYOUxnTnFahGENvSkargNHzSSd2fbIZggEA%2F1C9yCBx59abkuYctUwxGJAsKWm9sX7aafRMgNjaQvcV8etCYUbe%2FLD&X-Amz-Signature=4175400e26472b26f491b904d00deaee100b67beae33c37c9e88728e6caf9dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD37EXAT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCID1ndOT8%2Fr1ymcZAd6cebp4TEQv3tQTeo4apBqty023%2FAiEA4XwZG2oq3%2B6Dlikud1oaKNzP0ojunx9K3V6A6o7IpkEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLQpmrW9T2M%2Fi%2BwwUyrcA3Ln3EwAnSuwHvmtpphZ2Ge751LMzwLwdKb57Xdmdcfr%2BelmM0NwD2gylEnhzmBDkm9%2BpE3JiVcjAT5I%2BY%2B2IviMMHRueaQumBj4N44Z5lZGHl2jdTnFXRB6lfGy%2BN36U5rcWWxBLWrSxc3RInP%2B4BDAq1mSx8wYaHd75xZJp%2FlR7f8pDbmzVxhhNLz8wPqE6OmV%2FpJiZsNxm8yO1sDLsQTfolBCnYvLPd6XHzAGG9GL2pcKkOPmJtVgKN1pTqy3VLnc4sN8mLcDs6B5gjSPvzxceCIpW%2BddFt7Ygey5EnnMha9%2FSRU%2FaKHZMX7xvVLvFdgLZKEN2BoTZLqMHek9uOQQuSQmdxFkgXYeCsoPsemByaPH0rU90qV2Zq7RX7GIRDTY2rLb4aK88GvFWB9ZRDoGgFrzWeF%2FxsmYsyphtNUj8UifOhc9ojwUNhCWWwwai98MY26oASBSuFGi4hxsB0iHQPsLo2vYz2a7rnAzxb10bVeeitw%2B26PqiJtKFwD4QYZf1bRSHrd6GnGnPqINdZXmIBIh3exNJ3LYZVDAnTiOHysc8od1id3ZfxD%2FLowMzV%2FUaIPEWd6Nc3gVDxeAIMW3YZv6htv%2BbT0h4iWUyiHW6YzqkwsPtvwGl231MJyF1MMGOqUBPoHQElpKkucoGEq5%2BaA277BQ%2FJSnBBZXCAWBtmdGrnF%2Fs1SLgMaksVGzJvS%2BBTR1H0Sq3v42UKWr0ikrO6RuW82i7H8ResOwo6C3ZD5i3PW2acm1Lxhcfzth857EC%2BbU855dIs62Isix8heQrCaRVsp9ROqfVTKWZIEhp6BUK7A53I%2F6EsJaTqCjPbqBYY%2BsPBTgzV5a2fGGe3KXWLEQ0JjeX1kL&X-Amz-Signature=3b2c1e844510df37f9ba37d70b27b33d0e4b70ce52a998d0d695cb73bdbb0da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLJWJYWA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIASdZ2tX9wPGQUp93%2FL114DyvIqye%2BL%2F0qUFopSw0G%2FFAiA2YIk%2BLezZrzmFVuypWz6U2Ht8VeqcNMyrNIYub%2F7GMir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM2x9WgTQA7qfV7YerKtwDhtvfd0hy5Hsi42ekww0XlfBEcM7Venoyx6ZmHqhCnA734d2nSqSHd1URD%2F0ToItkKcWHe97WcD0mW%2FWo6r9aLis%2FDByJej1CIJcGdGPt1C1yR%2FJomS6zbPlOEO%2BXWfhH%2FUJ0dWp5Bim8ANTjgf%2BCldqRAAsS3N9SWgsUIFEOE6%2Fw4RTn2qdM72Tj4dJVis0j%2BbaAMqFvoHpVebEelpZzRIaoXyvdIeCFtdrG1RV52Ab2WqPbMqGUtEumzgZkDzXXSon1Rwr32FyHFIMl24wdhgDUAfcbrFLIik8EOMO4RSpXUseSjdndgl9ksgr6VRZt5m6XqI5%2BcjJcDlSNEcchCf9AJETPyZHDaDo%2FUYh3tnZ8w2fcji38Cd6gzdUCkJFLvuR%2FvqlBzxJFY52X%2FYQGk%2F58qxcfcxeQ7BOH73akMLAfQ30BrB5PqOM8d8C7E9ZwX5I6ee2bkoYwC8xnH6CSy515yyHiABH%2BBweEbsczo3w25B%2FB7Lxu55AcaxpI2MIb6uxQS%2Fd2lvJoa7%2BwpPPq5vFgQCGiJVuFdYfDoRQbFBSseJPNTubgrpDU64YtmJtkB3Nk2NU%2Bi7R41G18Xlc6elchvwYgiPsC5oCrRjkYsT74UsicaTIV5WdZ08Qw9YTUwwY6pgEUDossaVyZYAKASaEgcefIw3N0H5wCVbTb9V11r13kIETGrSm2KNfzdHDiv1Ijfn60MI5TKhSWXUA5x4DmZCWr2WbDZD0uno6ZXIttO5b4L%2FvaZXgKQLz9kmQyizNrtjtD0Wn6xzRz21SFt8kJlMtoSBJy9UqgODkM3ix%2FUa3Iz7UduU4NHUp0KOF0jyvLISlZAih0aqKw3LfhflJbxLdWuaqewfTM&X-Amz-Signature=1dca533e161e237e49e586ae10ef309be859801f7239303f500447307e1c5e6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
