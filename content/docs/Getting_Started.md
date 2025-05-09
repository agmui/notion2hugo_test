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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QESJBJIJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHHMDwa1I9%2B4dOBDyC%2FFs4DNEu43W6orxHzSt7G8dHgAIhANpCNSUcKt6PztsiP8iFrSsko7pU5BbG2thBq%2BfXpWUIKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1lRxcYOvuRgb%2FMJsq3AONLmU4ze0MAOD75YU2hcXSzA06uFlmsLNCQ5GZQbPIeCxLwJ1EDJVeeLCXg8ajp6IJE1qLvO1R%2Bx1VaNpZV7KvE5W2PG%2FYdUGHE4NjX9OTFbFCHRAGL7t0JtUqL4l0ZKXGrlnSvlH26rhbrO7RVRmgLeURXAkH2qlUIYczimbraCfiAuyKDK6uJNT%2B8rWSL5%2BUvi17C7OcfTC9TwMg1%2FblEV%2BsTFNn0cR1MUltkXfxIufPTCaGz7KhSx6Jvx9Smr%2BbWrLioXnh3lpKLuJR3eg8bP%2Bggu1QUsNTeYJTzY7EEoR9phQbEuHJcaTXipnFxTI9N%2FzBhyNnPKKo9%2FkchV%2BS77%2FUEI%2FsZ1nQwRomFpuskOFEpsn%2B%2FNLy2ZVqkCXPWa%2FQgTfOBxXXLC8BWL29sqNc4uTEFMleSY3MzVR5kdvIS4pZ1X9t4V%2FNhs2Jd7VphNnuuGyYgwdzHFNSXrGS6zLLXNa8URBXSa78iq1pBkAXt%2BMeeo7XkRc8mYGL%2FIURMCOoF29Dd0%2BhXupPOKiWjSPPfPjbag0%2FeE8pFTvoUOwcdpTLWsL%2BpZrQ991YBGfov6LH%2FjNSNqm9Gj99gBT5s5UBnHhyYFT5hgyMbqOKypOuLN0B%2BnquIlU3YVewgDCE8PjABjqkAcpEhRsYv9MqvBmWVZE7i3KujoMqgpd1raFaumg0FzxFeXVC0ps6kQq3dc8KxJycd3l8Yj5iFy95PlPQI4%2BAZ8dpp5Cvjsn%2B007kYq8Nooe5%2FIhohUb%2FdLmFbiPeGk9B4s2cNK2ukC9DhaRLjfNsesA8TKkQWavt4OztXxqqGFmUrpT7Ak9kHAJwDMV%2FB1YN92xBKZ7JTTIkCXwkGh8bwXkrE%2Bn1&X-Amz-Signature=d0e5ee13ce046f1f4ddabc84e32a2092f06958dc0f33de655904c108a6616df1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QESJBJIJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHHMDwa1I9%2B4dOBDyC%2FFs4DNEu43W6orxHzSt7G8dHgAIhANpCNSUcKt6PztsiP8iFrSsko7pU5BbG2thBq%2BfXpWUIKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1lRxcYOvuRgb%2FMJsq3AONLmU4ze0MAOD75YU2hcXSzA06uFlmsLNCQ5GZQbPIeCxLwJ1EDJVeeLCXg8ajp6IJE1qLvO1R%2Bx1VaNpZV7KvE5W2PG%2FYdUGHE4NjX9OTFbFCHRAGL7t0JtUqL4l0ZKXGrlnSvlH26rhbrO7RVRmgLeURXAkH2qlUIYczimbraCfiAuyKDK6uJNT%2B8rWSL5%2BUvi17C7OcfTC9TwMg1%2FblEV%2BsTFNn0cR1MUltkXfxIufPTCaGz7KhSx6Jvx9Smr%2BbWrLioXnh3lpKLuJR3eg8bP%2Bggu1QUsNTeYJTzY7EEoR9phQbEuHJcaTXipnFxTI9N%2FzBhyNnPKKo9%2FkchV%2BS77%2FUEI%2FsZ1nQwRomFpuskOFEpsn%2B%2FNLy2ZVqkCXPWa%2FQgTfOBxXXLC8BWL29sqNc4uTEFMleSY3MzVR5kdvIS4pZ1X9t4V%2FNhs2Jd7VphNnuuGyYgwdzHFNSXrGS6zLLXNa8URBXSa78iq1pBkAXt%2BMeeo7XkRc8mYGL%2FIURMCOoF29Dd0%2BhXupPOKiWjSPPfPjbag0%2FeE8pFTvoUOwcdpTLWsL%2BpZrQ991YBGfov6LH%2FjNSNqm9Gj99gBT5s5UBnHhyYFT5hgyMbqOKypOuLN0B%2BnquIlU3YVewgDCE8PjABjqkAcpEhRsYv9MqvBmWVZE7i3KujoMqgpd1raFaumg0FzxFeXVC0ps6kQq3dc8KxJycd3l8Yj5iFy95PlPQI4%2BAZ8dpp5Cvjsn%2B007kYq8Nooe5%2FIhohUb%2FdLmFbiPeGk9B4s2cNK2ukC9DhaRLjfNsesA8TKkQWavt4OztXxqqGFmUrpT7Ak9kHAJwDMV%2FB1YN92xBKZ7JTTIkCXwkGh8bwXkrE%2Bn1&X-Amz-Signature=c43ada251c35e9a35981dcf4e264b0ae5887a5610a22b5736160332c070db85e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QESJBJIJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHHMDwa1I9%2B4dOBDyC%2FFs4DNEu43W6orxHzSt7G8dHgAIhANpCNSUcKt6PztsiP8iFrSsko7pU5BbG2thBq%2BfXpWUIKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1lRxcYOvuRgb%2FMJsq3AONLmU4ze0MAOD75YU2hcXSzA06uFlmsLNCQ5GZQbPIeCxLwJ1EDJVeeLCXg8ajp6IJE1qLvO1R%2Bx1VaNpZV7KvE5W2PG%2FYdUGHE4NjX9OTFbFCHRAGL7t0JtUqL4l0ZKXGrlnSvlH26rhbrO7RVRmgLeURXAkH2qlUIYczimbraCfiAuyKDK6uJNT%2B8rWSL5%2BUvi17C7OcfTC9TwMg1%2FblEV%2BsTFNn0cR1MUltkXfxIufPTCaGz7KhSx6Jvx9Smr%2BbWrLioXnh3lpKLuJR3eg8bP%2Bggu1QUsNTeYJTzY7EEoR9phQbEuHJcaTXipnFxTI9N%2FzBhyNnPKKo9%2FkchV%2BS77%2FUEI%2FsZ1nQwRomFpuskOFEpsn%2B%2FNLy2ZVqkCXPWa%2FQgTfOBxXXLC8BWL29sqNc4uTEFMleSY3MzVR5kdvIS4pZ1X9t4V%2FNhs2Jd7VphNnuuGyYgwdzHFNSXrGS6zLLXNa8URBXSa78iq1pBkAXt%2BMeeo7XkRc8mYGL%2FIURMCOoF29Dd0%2BhXupPOKiWjSPPfPjbag0%2FeE8pFTvoUOwcdpTLWsL%2BpZrQ991YBGfov6LH%2FjNSNqm9Gj99gBT5s5UBnHhyYFT5hgyMbqOKypOuLN0B%2BnquIlU3YVewgDCE8PjABjqkAcpEhRsYv9MqvBmWVZE7i3KujoMqgpd1raFaumg0FzxFeXVC0ps6kQq3dc8KxJycd3l8Yj5iFy95PlPQI4%2BAZ8dpp5Cvjsn%2B007kYq8Nooe5%2FIhohUb%2FdLmFbiPeGk9B4s2cNK2ukC9DhaRLjfNsesA8TKkQWavt4OztXxqqGFmUrpT7Ak9kHAJwDMV%2FB1YN92xBKZ7JTTIkCXwkGh8bwXkrE%2Bn1&X-Amz-Signature=4d77b5f2be163d357c1f4c5cf1da3a28d8df8d01e8e5c3b71a214c8ed3f7ee38&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZLV7DC7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGoxL7M16K7poG%2F6S5WOH3r6509S4oOfj4Sb7MnjYuYAiAv923jOOSqUW6SU8O1YY6Ob39JamFHv%2FowJxMiz7ehRSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQZIELCWz%2FLrskuTjKtwDk6pjpzvewKgiUSv0KA%2FDBy73vWePP0nFjqurmuK3VVqk4xllpsgVTQxpT%2Bu2PnkZxSwvIPRYJQlvePgX4l7VHPhTc99EZZEwPgxPGw8qZvjKtxGL2STKDvnenhQlHZoOQTXhy6hxwraZ3c4DxFoBaciIGKzVuKiJX9Dsvlt0NsBc8ECPdYbySmEvHU5pkjCRHQv%2B8pO72aFVqbJRyeNOrmbXuOTqy74Q4AgY8S86UqLUvLRmYwsKu1ylQ4FNqByAOULsymBJX3NUpqleZ%2FToBhUPAUxwjkASLt7UAW01591DAYJ3TfQRwoIcCCRsAUvsxXhZ4i5bNsrQihAv%2BqH56IEEzWi%2Fm3X0trm9qr36GMlA2VLTlZ%2FYXdl%2BPXomwjwHRt00EUm5L0Xtitp%2BX8%2BlHLcmwZDYL3iGR8QuWuAjKlLUSFJQl14NUaUZkZfgWHDKS%2B%2BBPMe3URkyytnRsoPqUxn%2F3IEzwZdG3nfu9Y6K7a1yFilpCNufur9VdBMPASQgMAwx56eF6Gtv%2FLFgOMEyApqjSOusPKpDU%2BGrV0WcyykKZgJ%2BQ7lWrNZAJV2yO994T9WhLcG08qcrG1LXb6RrBv0oY01T4cE3QAyM%2Bq4cYjRoNpFwQdBZKnj9wHswkvD4wAY6pgFx%2Be4lalVxX9SmP91J7FkLiJFS4WqVygnpoaiCgtA3ztqkvBaviBlceI1aQiupbAsHBfb8MVJOPgtsJbNSm6KSYVX8MBHd9O3PVk%2BhT7wA6z9B4D8366zoaGc7b7PQJGho1a%2FGmjK%2FGVSRr11fFUjB49pMK%2BbUC7WSrzRPeRTRL48nK5pofvJP6keATCrHqKHOLI6Ify%2Btndli%2BoB1XLIiYkgAvgQm&X-Amz-Signature=bb55af6f5c4e465455a583d4d0ae3b9fe04eb2c0b4243a6a60f25be15865ad44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3UI6PTX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3nf8x1NEvMEF5nbPeYtcn15Gk%2BVDuYFF2Jwv1oGleoAiEApQLu6YSAa5Jfyd1CQniJFMuzdRmsd5WeaFfWwLGD%2BBsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdCiifeo9SSYIYLtircA%2BB5Rjb6un6f8HMKPsSAIwcvu8WUA97ZNDH0zrXgrjF%2BchXU0yBVI0i1RQEu765RosWuhHre1SQR6l4vSOWWa3KpOxuibI6kN6%2BKERLC%2Fy%2B7Bc1GIxqtZcQKbHRYjISa%2FM1f%2B4kYfdj24mYwOK6WxhNxjAqZyAo9PXb%2B02kUEpKtMp9MtQg546%2B3kpblQQn%2FZcGerYBInPNj%2B9OyJ%2BxSUKOiUPREyD%2BAO%2FajPJ%2BOVB31S%2FkLrFRDL74cBjUGZCQjcAs9d8rLwAAgyuL774KQTjQ6q%2BXfGX9KbB3EuLVbu6C%2FL8Ym8bGEZk7zwymGYBILXphbTLSwOhtK5unAC3rPTuHy%2BBTdORNP8PuIE5s4QisHu%2FJzWHa%2BcqbDlvfxwkUcsFuTYmLiKMpcds822Isx0pV%2BOWPu6x6fGdqynFDROX26eyfwJaakQ1b9aKNOZiS%2FBWciKOSTQJc2fQePRpADpPZXHki87X2Q%2FfcJGkx1Bf%2FiprFCPRcnfAWEG0mLSFduOy2xCK0piLZQ%2B%2FPpEWiaGaOWd8VlODPqdHUwfdwmsQMTDwj1ACSBfh2%2Fqk6fqSqvBEV1Qq5m4ZEh73gcP620Td2m4zrXQDFxRTaHhEX99aG2mGEdWvHMddWUuFvNMNnw%2BMAGOqUB58%2FJizJU6IOGo6eoRuX3el5ti9ZNjKSgrYBRD6AwbyoImO1vz%2ByF6JJiPXsPjil7xZaYcu6NNXg%2FDGtsZjzcwNjUD3Mlgp%2BwZVdQQK4l2FTyVcJHhfAEFk5OOAB%2BHlTpvLeCmwohfdYU8HP9fHwA5cEdb%2BdPKw7w5gY5HMKHQ6%2BECRRN3Jb%2Bu%2BLsqbtlfK6GtJthaRaTbs0M5ySFmg%2Fv55Yo5BAv&X-Amz-Signature=b6d1cee31573801a74545ce6fff844f5cbf74c4ebed67167607772f0c8fbd0b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QESJBJIJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHHMDwa1I9%2B4dOBDyC%2FFs4DNEu43W6orxHzSt7G8dHgAIhANpCNSUcKt6PztsiP8iFrSsko7pU5BbG2thBq%2BfXpWUIKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1lRxcYOvuRgb%2FMJsq3AONLmU4ze0MAOD75YU2hcXSzA06uFlmsLNCQ5GZQbPIeCxLwJ1EDJVeeLCXg8ajp6IJE1qLvO1R%2Bx1VaNpZV7KvE5W2PG%2FYdUGHE4NjX9OTFbFCHRAGL7t0JtUqL4l0ZKXGrlnSvlH26rhbrO7RVRmgLeURXAkH2qlUIYczimbraCfiAuyKDK6uJNT%2B8rWSL5%2BUvi17C7OcfTC9TwMg1%2FblEV%2BsTFNn0cR1MUltkXfxIufPTCaGz7KhSx6Jvx9Smr%2BbWrLioXnh3lpKLuJR3eg8bP%2Bggu1QUsNTeYJTzY7EEoR9phQbEuHJcaTXipnFxTI9N%2FzBhyNnPKKo9%2FkchV%2BS77%2FUEI%2FsZ1nQwRomFpuskOFEpsn%2B%2FNLy2ZVqkCXPWa%2FQgTfOBxXXLC8BWL29sqNc4uTEFMleSY3MzVR5kdvIS4pZ1X9t4V%2FNhs2Jd7VphNnuuGyYgwdzHFNSXrGS6zLLXNa8URBXSa78iq1pBkAXt%2BMeeo7XkRc8mYGL%2FIURMCOoF29Dd0%2BhXupPOKiWjSPPfPjbag0%2FeE8pFTvoUOwcdpTLWsL%2BpZrQ991YBGfov6LH%2FjNSNqm9Gj99gBT5s5UBnHhyYFT5hgyMbqOKypOuLN0B%2BnquIlU3YVewgDCE8PjABjqkAcpEhRsYv9MqvBmWVZE7i3KujoMqgpd1raFaumg0FzxFeXVC0ps6kQq3dc8KxJycd3l8Yj5iFy95PlPQI4%2BAZ8dpp5Cvjsn%2B007kYq8Nooe5%2FIhohUb%2FdLmFbiPeGk9B4s2cNK2ukC9DhaRLjfNsesA8TKkQWavt4OztXxqqGFmUrpT7Ak9kHAJwDMV%2FB1YN92xBKZ7JTTIkCXwkGh8bwXkrE%2Bn1&X-Amz-Signature=86f77b298fb873752ca2f523c46451ade1a488e73480d3f956d26a53ba245305&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
