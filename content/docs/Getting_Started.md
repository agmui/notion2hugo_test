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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CKHKDUS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG03rCj06J3kfyaesffAFXp3XIs9HNLqcEr7ilO9WtueAiAdmkzcYW4oZVkSReVXw7rQqmXrXjbXdla%2B7zV71wjuLCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTSafAI8kvx8vvdbFKtwDFEjmvFkORt6we1VYWjNBzGShqkANhpdgb9lJZKiDC0CthMPuhrqZgPyytlmsaoOe3PvWI8yS84RvOo7fifUG3dFgPAsW5BhtNnI5xKEvF1mP4qHQ7q%2FpxQNTlSf3hCu%2BsyV6RzKRtv%2BiBeMB%2FmE6E%2BXDz4ZFCqY%2FIjcHAqjHhz4CXLC46afH8mzNE1Osni%2F8YWzC7cUcOCafwrg2GE9yP2i7CwwZmemWzCP%2Fp%2FDutBtqotJgnQfUdTQBNqZdnTmNs8cVg0%2FDUv6Bfkwul%2FCpmAvFNuNPgnJKcpHRlwJmZq4pa13PUrg44V2wNssA9nmMF9W9VuA3Q780YyYQMjc7nmk%2F8XjBloix7AIsVHKEFJAnzm1kPPwtoAOEMDfnLk6zxrUX2sOZf4r%2BrEhfNW9TsFFPDLM7eJgZV%2F23C1GvP2vPLzQe3VWhrIY7JZrOorFhjm%2BMK9KmLFk2%2B%2Fwbgzplw1rCFsLx8hbr217Z8CXoxH7snqaaxgwvzT6CI83AKdifb8MH3BMd90GEgKgL05vazl5yAUph7DRvLZHdNja%2BbxBULBuLwkT%2Fr8d3kjCMhVEkGb8u0uEl%2ByU%2FvSMUBmXylKbmQ0Qzzinvy1HCIxGORq2Lz4JcDsR3KU%2BwqUYwt9HPwgY6pgGDXS2Qgb37%2FpK7mN5Q9Lj%2BunCKrj%2FUqaZ1%2BpbxoGJb8mRC%2BHGSnaTtNHsguB7ERbbjAWxBGDvlhAEPTAN%2FS2CkjGWPJbtoAh%2Be3R6G4nhK2ihqZu1pPE2YL3SoSV6unO4THEczj5gKPE5SjLWwsuZ6Wf8vwTK5t3lQBShWYVgUg63qFE1i3PdSvGQ0YvZIVLQT5dCBuiknXTH%2B%2BLSi%2BpGb%2FHtyJR05&X-Amz-Signature=ac13521100d052b80e9abfc2b662958021d7f1d92e5aaee268e30b01647935b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CKHKDUS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG03rCj06J3kfyaesffAFXp3XIs9HNLqcEr7ilO9WtueAiAdmkzcYW4oZVkSReVXw7rQqmXrXjbXdla%2B7zV71wjuLCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTSafAI8kvx8vvdbFKtwDFEjmvFkORt6we1VYWjNBzGShqkANhpdgb9lJZKiDC0CthMPuhrqZgPyytlmsaoOe3PvWI8yS84RvOo7fifUG3dFgPAsW5BhtNnI5xKEvF1mP4qHQ7q%2FpxQNTlSf3hCu%2BsyV6RzKRtv%2BiBeMB%2FmE6E%2BXDz4ZFCqY%2FIjcHAqjHhz4CXLC46afH8mzNE1Osni%2F8YWzC7cUcOCafwrg2GE9yP2i7CwwZmemWzCP%2Fp%2FDutBtqotJgnQfUdTQBNqZdnTmNs8cVg0%2FDUv6Bfkwul%2FCpmAvFNuNPgnJKcpHRlwJmZq4pa13PUrg44V2wNssA9nmMF9W9VuA3Q780YyYQMjc7nmk%2F8XjBloix7AIsVHKEFJAnzm1kPPwtoAOEMDfnLk6zxrUX2sOZf4r%2BrEhfNW9TsFFPDLM7eJgZV%2F23C1GvP2vPLzQe3VWhrIY7JZrOorFhjm%2BMK9KmLFk2%2B%2Fwbgzplw1rCFsLx8hbr217Z8CXoxH7snqaaxgwvzT6CI83AKdifb8MH3BMd90GEgKgL05vazl5yAUph7DRvLZHdNja%2BbxBULBuLwkT%2Fr8d3kjCMhVEkGb8u0uEl%2ByU%2FvSMUBmXylKbmQ0Qzzinvy1HCIxGORq2Lz4JcDsR3KU%2BwqUYwt9HPwgY6pgGDXS2Qgb37%2FpK7mN5Q9Lj%2BunCKrj%2FUqaZ1%2BpbxoGJb8mRC%2BHGSnaTtNHsguB7ERbbjAWxBGDvlhAEPTAN%2FS2CkjGWPJbtoAh%2Be3R6G4nhK2ihqZu1pPE2YL3SoSV6unO4THEczj5gKPE5SjLWwsuZ6Wf8vwTK5t3lQBShWYVgUg63qFE1i3PdSvGQ0YvZIVLQT5dCBuiknXTH%2B%2BLSi%2BpGb%2FHtyJR05&X-Amz-Signature=524175662dbce86aa02453dbde1cf54ca23d15d88893ab9caaf4c27895960df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CKHKDUS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG03rCj06J3kfyaesffAFXp3XIs9HNLqcEr7ilO9WtueAiAdmkzcYW4oZVkSReVXw7rQqmXrXjbXdla%2B7zV71wjuLCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTSafAI8kvx8vvdbFKtwDFEjmvFkORt6we1VYWjNBzGShqkANhpdgb9lJZKiDC0CthMPuhrqZgPyytlmsaoOe3PvWI8yS84RvOo7fifUG3dFgPAsW5BhtNnI5xKEvF1mP4qHQ7q%2FpxQNTlSf3hCu%2BsyV6RzKRtv%2BiBeMB%2FmE6E%2BXDz4ZFCqY%2FIjcHAqjHhz4CXLC46afH8mzNE1Osni%2F8YWzC7cUcOCafwrg2GE9yP2i7CwwZmemWzCP%2Fp%2FDutBtqotJgnQfUdTQBNqZdnTmNs8cVg0%2FDUv6Bfkwul%2FCpmAvFNuNPgnJKcpHRlwJmZq4pa13PUrg44V2wNssA9nmMF9W9VuA3Q780YyYQMjc7nmk%2F8XjBloix7AIsVHKEFJAnzm1kPPwtoAOEMDfnLk6zxrUX2sOZf4r%2BrEhfNW9TsFFPDLM7eJgZV%2F23C1GvP2vPLzQe3VWhrIY7JZrOorFhjm%2BMK9KmLFk2%2B%2Fwbgzplw1rCFsLx8hbr217Z8CXoxH7snqaaxgwvzT6CI83AKdifb8MH3BMd90GEgKgL05vazl5yAUph7DRvLZHdNja%2BbxBULBuLwkT%2Fr8d3kjCMhVEkGb8u0uEl%2ByU%2FvSMUBmXylKbmQ0Qzzinvy1HCIxGORq2Lz4JcDsR3KU%2BwqUYwt9HPwgY6pgGDXS2Qgb37%2FpK7mN5Q9Lj%2BunCKrj%2FUqaZ1%2BpbxoGJb8mRC%2BHGSnaTtNHsguB7ERbbjAWxBGDvlhAEPTAN%2FS2CkjGWPJbtoAh%2Be3R6G4nhK2ihqZu1pPE2YL3SoSV6unO4THEczj5gKPE5SjLWwsuZ6Wf8vwTK5t3lQBShWYVgUg63qFE1i3PdSvGQ0YvZIVLQT5dCBuiknXTH%2B%2BLSi%2BpGb%2FHtyJR05&X-Amz-Signature=29054e9481a7ed4c57914ccd4865db715ee94f730321ca2e0afc444f8291d636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY66JUN2%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpGtWHgrKtWvwaauG1%2BT6oqvqSkrXvABavP41k%2BLHsXwIgDkpr5Uq9YWNi%2F%2BCc2iIcHUZ6Zlvl6JO%2BOkAv8dGoLTsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVMRvaKdFaXa6KqaCrcA1SojT2XuU%2FWKDsINmcAw%2F3M8tpwnoACY%2BhOqgVO%2BLBFtv2Twv3yCDaw4fBC2ySEy3bsk6VanRtDuLV08HFwEHkV1EGS%2BSxrbUz73fMbnI%2FouUjGckk814j7bnZhSvlSedqS0SLpr7AHtdGgL%2FMLceQ0Ww9xMBG9ifkZ4ozgo%2FNEV431sCwiZWZ5ifinVVgMM2r6EtUaQECCLubWkb33KSdPBGvLUjXsL%2FEA%2BPZaE1vxZn0ilfNcUsV3c18LSTA0qexkG8upmlMXF%2Fut6CLoNp2%2FfoO5heByDZnJpHQUNDpy%2Fsm9XwBZ%2Bor3C8p92SLR1cCsHisx2bc7F%2FlXcQ70orjhGseQaqHWIbhkPi8Ops4r5pEOuZ6qRb5aOUW8Nuhsb53zpDKfoKSf%2B9cTwlFb4sJV%2FPMYfc%2BvLN0FGrPnubmu9pUGykeJ05Ew0whYLainqD5bMoc6qNn2qeI3shnqIktsbjRbyUFqSH3%2FcSWT3Ta9%2BJTJS9AJYbJb1heydGxpPGuELRaMcjF5jqz6IoKoGb7tkfbOg9XwwyOpFMl3nfPo5d%2F%2Fs9C0rYAjyeMkU6BoAAJDj5N3KNqvjBrdrGdBMSfLxNalzLAISafdH3SF0M455nvSoLnXiYESmVgZMP3Rz8IGOqUBfaLqYmq7qyzl%2BsqmhfVNEMluquiQYjzEZ2GO8pm9kOBVgJlUeS3yMJGt7ODyaGTmL5Xz6EprZYEUSAzdgO2NU6DSJ6qXpnoV%2BdTwKy2q9tndlEA09KbMc2NOzXmy6CBUrQj63gglSZ5IcFXKde5AvoQI%2BcOjYbDCqnyjJAD3dGXysIpGQUsZNTiZ5Fm561AN7kP6qA%2FyTCqdmp0KXayjjPOG%2FfeU&X-Amz-Signature=c6935aa2fa939608d8753b274ac9e2140d6ba39611458d18f259de6b95606468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB6STU45%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr8TfkVd5TjLKPmIx7Q4t2uEzNmGdFw%2BVz4RI2gW1UTQIgGJo938Sxd6YWLhrVZSRC428ySaU5mPRlCbL8g9GMmz0qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOU0PjVcLW36oZFKyrcA7Z6RE%2FZSDuSwL5NnNo4p6Vs6Mbbig5dmU5rEqgOSVVWpPn%2F9NGmYJB%2F6tpiDbd2ZoLUdf6REhqp3TMLrJWnI1kvalAwugjngo073htfEhJrmCiw%2Fy9rcnTWkul8tp6ulOvooEq5m%2Bxw572Yna2rQVAI6hHa8vlWzLdOwuNiX9iSsrkEfeD34mTjLaedkBWx6C0JpTJ6qxU0Em%2FB031j%2Bm1ZlKoJQA0vywf7s41%2BHke56CynllBihMk39COkPM3ximRiVKwlR5TNQ071Z7%2FDONqxIAKQVzm3PMrSWogHpu2pMnbcKyR%2BtBRJz9gy5PirYdyg1q2cEB%2BI6PABgt6CrZZVw%2Buo6eZpmvUeMjJxxvYb1fdrDX%2B0yPcLj14vZXlUDjJ4UrpuSkiFdCcxjokYs9WxTYzxrjHCLsYEaBHAJSx8yBTottWwJw%2FzWeUw5mNEScfshtqo56kA07TS1STjF8HsuEqtKDbLDAUm9Z23tMHjGtzvySs1afMf9hm%2BxPNMCCliLJg7BVtN%2Fw0Ob%2BxWL53yI6%2F8YQFLKe8jgSyq0ekIlNKIC1b7M%2FqZgYuKcJVudAYYa0GIy%2F3JBkHSanrUlbc7tJNPdX5gcbVEpQz946MNoJLDbarzS0yCvcg5MLDSz8IGOqUB2udzzi6feABR5YIfOB8HPQokp%2BY8%2Fhly16Xp%2BVKAgmKZ3qwCymE%2FyM7VmgJA0fltu3S8VV0bG2WJsHK2mCiduJEILH4cR0npjNxiQscfbjbRkTZsu969dyIUNnjXZySM1sU4bkIBs%2BUFxY14gBDYTE%2FuvpEzLMMoZ3%2BzffAkzcLU2tcE8%2BrGMKE%2BKL00HXPDDMr8UM43bf6PUBhPXDKDX5jA2NFF&X-Amz-Signature=fc1c68861eb7f7b45de0ccc5a0c0a12118f05fff86b22f305be87a9768ad087c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CKHKDUS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG03rCj06J3kfyaesffAFXp3XIs9HNLqcEr7ilO9WtueAiAdmkzcYW4oZVkSReVXw7rQqmXrXjbXdla%2B7zV71wjuLCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTSafAI8kvx8vvdbFKtwDFEjmvFkORt6we1VYWjNBzGShqkANhpdgb9lJZKiDC0CthMPuhrqZgPyytlmsaoOe3PvWI8yS84RvOo7fifUG3dFgPAsW5BhtNnI5xKEvF1mP4qHQ7q%2FpxQNTlSf3hCu%2BsyV6RzKRtv%2BiBeMB%2FmE6E%2BXDz4ZFCqY%2FIjcHAqjHhz4CXLC46afH8mzNE1Osni%2F8YWzC7cUcOCafwrg2GE9yP2i7CwwZmemWzCP%2Fp%2FDutBtqotJgnQfUdTQBNqZdnTmNs8cVg0%2FDUv6Bfkwul%2FCpmAvFNuNPgnJKcpHRlwJmZq4pa13PUrg44V2wNssA9nmMF9W9VuA3Q780YyYQMjc7nmk%2F8XjBloix7AIsVHKEFJAnzm1kPPwtoAOEMDfnLk6zxrUX2sOZf4r%2BrEhfNW9TsFFPDLM7eJgZV%2F23C1GvP2vPLzQe3VWhrIY7JZrOorFhjm%2BMK9KmLFk2%2B%2Fwbgzplw1rCFsLx8hbr217Z8CXoxH7snqaaxgwvzT6CI83AKdifb8MH3BMd90GEgKgL05vazl5yAUph7DRvLZHdNja%2BbxBULBuLwkT%2Fr8d3kjCMhVEkGb8u0uEl%2ByU%2FvSMUBmXylKbmQ0Qzzinvy1HCIxGORq2Lz4JcDsR3KU%2BwqUYwt9HPwgY6pgGDXS2Qgb37%2FpK7mN5Q9Lj%2BunCKrj%2FUqaZ1%2BpbxoGJb8mRC%2BHGSnaTtNHsguB7ERbbjAWxBGDvlhAEPTAN%2FS2CkjGWPJbtoAh%2Be3R6G4nhK2ihqZu1pPE2YL3SoSV6unO4THEczj5gKPE5SjLWwsuZ6Wf8vwTK5t3lQBShWYVgUg63qFE1i3PdSvGQ0YvZIVLQT5dCBuiknXTH%2B%2BLSi%2BpGb%2FHtyJR05&X-Amz-Signature=baf75cd74505e40f78faf5815627fbac4a72d053fb8d9f3eb9bdc5c362528fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
