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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIAS7DO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDQOB8d2h6Y%2FfK7L9hHKIsQI5ZvzaijuFhPQCR0N%2BTd1QIhAMEPacmpGA4w%2BtDPhBqWGk6goops%2F4%2F9kU4NDUYvDdO7KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPBrvKN6Vgk2CC%2BIcq3APkA9Rq87cHWlcDR4CUkoJKot9a8mhQsLflo9Mx7N1hiQD6JZAMYPVpUJ5Qapg2lnoV3i7gpRXkrcyv0QgaRbFgR%2B5HP3tVnltqfDDaioSJLAaamoDPDJW%2F0anQJeSxpBKtBP2z9AB9BWE1gbKUw7nGxGrPWXPrDznOqoCh8Vwi91HYAeDn%2BEqiR3o1IpIrisJHiCCIJpdCEt4ThYNqXXWFpIXGVSi9I0Z%2FIW%2FHbLZo0QZZKiwqiEFFQO6N5O13%2BLgiaanubCjON%2BPgTrN2DyxJwzkAyM4VvlFUylxFPfkD7VC2reP8HU8GW5cvVsLcJjIoxLg7mIYzrQnWIkp2PlImurLy%2BCsSa%2BkKTw%2BWVWKHUEy5sF2uXOGgpTzIRL%2FepWjUkc9LHHHQVxLtn4nDPw7XjOZUfRl1dG2TbR7Q6zw8GoIwYCFz%2B%2BZJuSRQW%2BXWRb%2FJ9uh0mOvxNU6ayJVtrdGdqlBxfuG5hp94iF691J0%2BeEmElBaQ3%2BdU8ADSAlnj8wQ2dtpaLQdUrD1Q51EyDXF9ta0vsilPb5qXarXDm%2F5lhUeMDOqzup4iObJlH%2Fzr6rmQo92njGWiMTNCVENKIM1aKmAUmFEAd4y1%2B5aNywVMJPvYelYwZU%2FTreLHfTCZiozBBjqkAdk3NaIGUL%2FH0a9VR2q82g%2BXsvSOngbP81bf%2Br5ZtmgKmfxclaBJi5a14Ntr%2Bwj4EAgERCLAORzzOIdm27NL8jizqQs6L72d37s%2FeTGrViAdo8DCFmrrcFhaU%2BS%2BngalHViWJlkADj41nF8T3KeQ%2F9dWMO0aosaPJ3YXCtBA2s9qyCw3LestqNPNJHViFVBesS41DZUFyYvkwf346PlEzsWhJg4f&X-Amz-Signature=30d2152fa2153e26c563b457a2a4e4b712f800009263272032290d06e9e67234&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIAS7DO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDQOB8d2h6Y%2FfK7L9hHKIsQI5ZvzaijuFhPQCR0N%2BTd1QIhAMEPacmpGA4w%2BtDPhBqWGk6goops%2F4%2F9kU4NDUYvDdO7KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPBrvKN6Vgk2CC%2BIcq3APkA9Rq87cHWlcDR4CUkoJKot9a8mhQsLflo9Mx7N1hiQD6JZAMYPVpUJ5Qapg2lnoV3i7gpRXkrcyv0QgaRbFgR%2B5HP3tVnltqfDDaioSJLAaamoDPDJW%2F0anQJeSxpBKtBP2z9AB9BWE1gbKUw7nGxGrPWXPrDznOqoCh8Vwi91HYAeDn%2BEqiR3o1IpIrisJHiCCIJpdCEt4ThYNqXXWFpIXGVSi9I0Z%2FIW%2FHbLZo0QZZKiwqiEFFQO6N5O13%2BLgiaanubCjON%2BPgTrN2DyxJwzkAyM4VvlFUylxFPfkD7VC2reP8HU8GW5cvVsLcJjIoxLg7mIYzrQnWIkp2PlImurLy%2BCsSa%2BkKTw%2BWVWKHUEy5sF2uXOGgpTzIRL%2FepWjUkc9LHHHQVxLtn4nDPw7XjOZUfRl1dG2TbR7Q6zw8GoIwYCFz%2B%2BZJuSRQW%2BXWRb%2FJ9uh0mOvxNU6ayJVtrdGdqlBxfuG5hp94iF691J0%2BeEmElBaQ3%2BdU8ADSAlnj8wQ2dtpaLQdUrD1Q51EyDXF9ta0vsilPb5qXarXDm%2F5lhUeMDOqzup4iObJlH%2Fzr6rmQo92njGWiMTNCVENKIM1aKmAUmFEAd4y1%2B5aNywVMJPvYelYwZU%2FTreLHfTCZiozBBjqkAdk3NaIGUL%2FH0a9VR2q82g%2BXsvSOngbP81bf%2Br5ZtmgKmfxclaBJi5a14Ntr%2Bwj4EAgERCLAORzzOIdm27NL8jizqQs6L72d37s%2FeTGrViAdo8DCFmrrcFhaU%2BS%2BngalHViWJlkADj41nF8T3KeQ%2F9dWMO0aosaPJ3YXCtBA2s9qyCw3LestqNPNJHViFVBesS41DZUFyYvkwf346PlEzsWhJg4f&X-Amz-Signature=8447c33e9e39b4f01bfd0f33ea01b7266f525eb30d6eab6c2ba8035adb2fa569&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIAS7DO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDQOB8d2h6Y%2FfK7L9hHKIsQI5ZvzaijuFhPQCR0N%2BTd1QIhAMEPacmpGA4w%2BtDPhBqWGk6goops%2F4%2F9kU4NDUYvDdO7KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPBrvKN6Vgk2CC%2BIcq3APkA9Rq87cHWlcDR4CUkoJKot9a8mhQsLflo9Mx7N1hiQD6JZAMYPVpUJ5Qapg2lnoV3i7gpRXkrcyv0QgaRbFgR%2B5HP3tVnltqfDDaioSJLAaamoDPDJW%2F0anQJeSxpBKtBP2z9AB9BWE1gbKUw7nGxGrPWXPrDznOqoCh8Vwi91HYAeDn%2BEqiR3o1IpIrisJHiCCIJpdCEt4ThYNqXXWFpIXGVSi9I0Z%2FIW%2FHbLZo0QZZKiwqiEFFQO6N5O13%2BLgiaanubCjON%2BPgTrN2DyxJwzkAyM4VvlFUylxFPfkD7VC2reP8HU8GW5cvVsLcJjIoxLg7mIYzrQnWIkp2PlImurLy%2BCsSa%2BkKTw%2BWVWKHUEy5sF2uXOGgpTzIRL%2FepWjUkc9LHHHQVxLtn4nDPw7XjOZUfRl1dG2TbR7Q6zw8GoIwYCFz%2B%2BZJuSRQW%2BXWRb%2FJ9uh0mOvxNU6ayJVtrdGdqlBxfuG5hp94iF691J0%2BeEmElBaQ3%2BdU8ADSAlnj8wQ2dtpaLQdUrD1Q51EyDXF9ta0vsilPb5qXarXDm%2F5lhUeMDOqzup4iObJlH%2Fzr6rmQo92njGWiMTNCVENKIM1aKmAUmFEAd4y1%2B5aNywVMJPvYelYwZU%2FTreLHfTCZiozBBjqkAdk3NaIGUL%2FH0a9VR2q82g%2BXsvSOngbP81bf%2Br5ZtmgKmfxclaBJi5a14Ntr%2Bwj4EAgERCLAORzzOIdm27NL8jizqQs6L72d37s%2FeTGrViAdo8DCFmrrcFhaU%2BS%2BngalHViWJlkADj41nF8T3KeQ%2F9dWMO0aosaPJ3YXCtBA2s9qyCw3LestqNPNJHViFVBesS41DZUFyYvkwf346PlEzsWhJg4f&X-Amz-Signature=a18ab1fa00b1e6fc4c7c2b5cdc0a9a985d243fffe9ed6b3dad90d166dcb94435&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQ5SKNX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCZLFTiFwgETW0UKBT4Jrpv0uEEYMl%2BgUv7SdJVTXzaYgIhAJyqDLJbldh%2B48OWDp99peoajB2U08ogmQsuDK8E1PMPKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBsKeuglPondLS3Vgq3AOMz4thtAIz4HE6dbvPvE%2BoTAhKibjruC0mSAlLAze9cTEX1OvQ1SIYXDWnAsQgM1YScokD7jg0zUYNm7iIGVesp4Fan6u49V199A7MkVb4DpGD6IPgQBkT5Qj7%2F4WnP0zNJEoInDDX%2FY2qfDpEF%2FjC8NF2BKrqpJI8U68R1UHCJ2dfys8%2BRioxb%2BumPEaYhOqYonaV2px9Qq7%2B095HVy1qdedghbSlfAeqeS%2BsYyINP1g5W%2B2DHCuYCWPEXUZC08kQ7ZJyXsHnceUcfnllLPYdFjppeClsMisBZ%2F0XEGe%2F8j7RmMzHvvBUcrheeD%2BVOtaInzteGk0DeGYrR7jEtagI37GAobRQ%2FTm0uWaBvX4mnstOdAjEGWEWH0qDO%2FQAN4EsyPsF4XRdjm1cAgaPQIkIawgdHyPAWgDJRGHINfj1wDlXNgju9I84J79Qpn69Qu4ZX61zvlgVkOzCJb5i1mvf1aMMyOcetJywqxKevWgFUB6DEh%2FCm0hYTUlHOlC%2F9e5cwRDX9lSrTh4smniZh7oVErJ%2FbimR%2B1pGJsUaOHs9Hlis6ZN7Az7k3Z9%2F4%2B7RMQLR1%2F2fdFsuNcJV3I0KurnqOw3OL4ltvx%2BBLX1TZ3Wsd3aaODarRLD3wrJiMjCCiozBBjqkASnJFawqQmcZQCrk22YzOPceSIRiGMrnMCKXWOZKCvHySKWFXKlSxOPDmXQzh%2F4qipSMVkeGtA%2F4%2FI9G0BjJvFvqJfiiLI5sUxV9QRZZV9rCp5WWGKrO8w5u%2BH0g6FA%2BLXI3vj4G2EZGCwBHrXG%2FVt4gpLkMoUWHIV1mRDt%2FjWY4g%2Ff4p4trYEElPdezvQ2eRP0Y5UcITbjuDCAX04khd33QCBax&X-Amz-Signature=be999df4ca0c291eb4f347ee62d9148ab8d4f3d48dd69a4588faa04f333e14a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ZSVVNK%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDSdWo56kq46%2BmDOvG5Dob2q2d7QqqorFvo6UM6%2BPxR3QIhALnNvish3nnlg9jzenFstOyOX56cojWzRAhCDYRIaoJMKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1iGSGZRf5HcweedUq3APLm2qXxxzRJRjoGEwCF87IS3bpl5ETZMb0ZEycuKhbBGAfVN18bVyi7a%2BisrE76Uwv88Ez7qyy8%2FojdysWUNelSM%2FOkaS%2FE3OA2JbxmkgAHirNmpWJMKyg2SRJUB%2BITsCTAji7IdgMuXKAW0gl8OXwCdOkZP%2B8WrT33nHUGrqEMgjsg37dFrXrnidBPZmfQ7H9IdaVR8f%2Fg2o3eavfAGMzfPXD4OlyJ3pgmOQ8OYN1YVzKedYUY7ObbPje1KBiF7r58Zq%2BGvf5Q2e%2Fi%2F2ozhaoFaSiC9ZjDkkFnyYVVeqa5rOsZxuo725qpxc8GN%2BuRQAPIrFPHfE%2BI77yyb%2BXOXNBnZIDOFmT8m76V8DyoRmf6XQ9scBuvj8tPznGnotyYHjENlXEPc2RTnPsB%2BB%2F3CdvGXOAuZIGRqHifoKz50519As6KGlnmqbx9N6oohQo6lmpsYRIZ2WWS%2F0rj7QkDMa%2BINLyL2Y8CvAIq%2F8FutB%2BoTmn%2FIZe8ADhsDN5VzbqeU34E3d8sRMa8%2BXYnUap0nP3h30Z1No8Y7vJf2NydWi%2B90MExi67LBXHcW6BiMWSNyx8CM%2FtXX9ks2U65PK4C1NlwXsVJ0cmzCKI2x4evdR78jjA%2F4CW6gmzPCB8aDDHiYzBBjqkAZiseM0sV2H1JebestcEOxKwNLwzCr47d6NfXauxx3mnHNJDfLwx18UBgWnqAlpggjXQhgVSmyJargSpY6r8%2Be4XjYR7BY8gpWOP6bDARsWWMO1NqhueDiI8zNfWkloIyMeuOJ3lGemT2MRoiv5%2BTK1WRTowqYUwo7zzZTsaJ17pEe8Y6N2qO2tWXLKN1EFTxoiPG9Kh0Ye4gEGV%2BQ0vkeata584&X-Amz-Signature=f8b133dfc27997ec24baabb89023d73ab5671810a996e5d56f16059ed491b2d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIAS7DO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDQOB8d2h6Y%2FfK7L9hHKIsQI5ZvzaijuFhPQCR0N%2BTd1QIhAMEPacmpGA4w%2BtDPhBqWGk6goops%2F4%2F9kU4NDUYvDdO7KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPBrvKN6Vgk2CC%2BIcq3APkA9Rq87cHWlcDR4CUkoJKot9a8mhQsLflo9Mx7N1hiQD6JZAMYPVpUJ5Qapg2lnoV3i7gpRXkrcyv0QgaRbFgR%2B5HP3tVnltqfDDaioSJLAaamoDPDJW%2F0anQJeSxpBKtBP2z9AB9BWE1gbKUw7nGxGrPWXPrDznOqoCh8Vwi91HYAeDn%2BEqiR3o1IpIrisJHiCCIJpdCEt4ThYNqXXWFpIXGVSi9I0Z%2FIW%2FHbLZo0QZZKiwqiEFFQO6N5O13%2BLgiaanubCjON%2BPgTrN2DyxJwzkAyM4VvlFUylxFPfkD7VC2reP8HU8GW5cvVsLcJjIoxLg7mIYzrQnWIkp2PlImurLy%2BCsSa%2BkKTw%2BWVWKHUEy5sF2uXOGgpTzIRL%2FepWjUkc9LHHHQVxLtn4nDPw7XjOZUfRl1dG2TbR7Q6zw8GoIwYCFz%2B%2BZJuSRQW%2BXWRb%2FJ9uh0mOvxNU6ayJVtrdGdqlBxfuG5hp94iF691J0%2BeEmElBaQ3%2BdU8ADSAlnj8wQ2dtpaLQdUrD1Q51EyDXF9ta0vsilPb5qXarXDm%2F5lhUeMDOqzup4iObJlH%2Fzr6rmQo92njGWiMTNCVENKIM1aKmAUmFEAd4y1%2B5aNywVMJPvYelYwZU%2FTreLHfTCZiozBBjqkAdk3NaIGUL%2FH0a9VR2q82g%2BXsvSOngbP81bf%2Br5ZtmgKmfxclaBJi5a14Ntr%2Bwj4EAgERCLAORzzOIdm27NL8jizqQs6L72d37s%2FeTGrViAdo8DCFmrrcFhaU%2BS%2BngalHViWJlkADj41nF8T3KeQ%2F9dWMO0aosaPJ3YXCtBA2s9qyCw3LestqNPNJHViFVBesS41DZUFyYvkwf346PlEzsWhJg4f&X-Amz-Signature=18e118bcf093c2c13db8877f15730aa9564602782f60d12623106ced18eafe6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
