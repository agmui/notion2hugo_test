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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXKZJVM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpr40L77lfQ%2BXSqoH4VKQvkASVMJ23f9X1gpls5LKHUgIhAMUXyI1hKzAkHhFqOkBovDd5uwI4%2B6mH5L1pkHiql7eJKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZRlSS5rMvCj0uu9Eq3APdb8%2BnO9QxcN7vmcygzO8zwRaptr6TihNCndTE%2BwjeToDGvc9VV%2FjAUzrXDexAl0u6Y3Ru7oPmagehrKm2o7tqWGOafP78zmkZHMd3UJwdPLZuj5qbuaJwQYZtoaaCexhSjQjWlPG6OxTSbV5hnv9EcoB34dCmHqjh2VJ8jC8lhwKWiPUAH34OEOWVbwOTnpfUDITRBSWCMWbNDblfdFd0V05chu8iN8njYMkhO9jZUj34s4yqvbyuySWmMpxd5s1ZSTuMVyvq16tlQheB5Z9Yd1EmdVEUzVdQu7HkLSOXEiE097%2FM66PirNDUJ3%2FG2uzIEAPhVF2meWBszDppVRJArx6nOBxdVGpHDT5hENqWCNIOyv0Ntu4B9D%2FH6qCM8SvpTpl9hJZOcF16Ef5nE9fr1x7tlABu0ODGcHH6XdxhkrxMomYDKtb%2B9EhkghAvDRRvmeqcOhmjK%2F%2Bv2BOvn%2BEHsXdCqv5EPPl6ImgbWaVrmPVL1wPCtaQAuitF%2BQx0qTI9SBLikr9RJxKZZsek%2BEumQE3%2FkvXXZksp1hXmN3bTIjawRv9d34zwhw%2FK4suh3bE39uq89JQqbZk5JZE0NaylaBABVmh7kuk%2BQV2VNBjJGBK11Mf5iJ8x94FbpTDOyoG%2FBjqkAckQqA587A0vPR7E56yc%2F5zJH82qeiopjrhpITobVD8g4TR50QXZOHSeTV5ArnYW4pBNsTGDeobbLZt55IZKlOApve58Irb5lOix0VZX%2BehcR%2BEHKWLZ6FaJdKNCbZYqS90iZCYgx7AfvYx%2FQWzFExZEA2K9jsIBqUx%2F%2F0Gx7GsTJTssH7GoQUtGcM%2F2Ess9MKvaGFyV2uyHIwaZKZF34MUTlNAu&X-Amz-Signature=6c5e451da787022010e0e5a12160e79e105076f5b8166368cd446bd3431b22f1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXKZJVM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpr40L77lfQ%2BXSqoH4VKQvkASVMJ23f9X1gpls5LKHUgIhAMUXyI1hKzAkHhFqOkBovDd5uwI4%2B6mH5L1pkHiql7eJKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZRlSS5rMvCj0uu9Eq3APdb8%2BnO9QxcN7vmcygzO8zwRaptr6TihNCndTE%2BwjeToDGvc9VV%2FjAUzrXDexAl0u6Y3Ru7oPmagehrKm2o7tqWGOafP78zmkZHMd3UJwdPLZuj5qbuaJwQYZtoaaCexhSjQjWlPG6OxTSbV5hnv9EcoB34dCmHqjh2VJ8jC8lhwKWiPUAH34OEOWVbwOTnpfUDITRBSWCMWbNDblfdFd0V05chu8iN8njYMkhO9jZUj34s4yqvbyuySWmMpxd5s1ZSTuMVyvq16tlQheB5Z9Yd1EmdVEUzVdQu7HkLSOXEiE097%2FM66PirNDUJ3%2FG2uzIEAPhVF2meWBszDppVRJArx6nOBxdVGpHDT5hENqWCNIOyv0Ntu4B9D%2FH6qCM8SvpTpl9hJZOcF16Ef5nE9fr1x7tlABu0ODGcHH6XdxhkrxMomYDKtb%2B9EhkghAvDRRvmeqcOhmjK%2F%2Bv2BOvn%2BEHsXdCqv5EPPl6ImgbWaVrmPVL1wPCtaQAuitF%2BQx0qTI9SBLikr9RJxKZZsek%2BEumQE3%2FkvXXZksp1hXmN3bTIjawRv9d34zwhw%2FK4suh3bE39uq89JQqbZk5JZE0NaylaBABVmh7kuk%2BQV2VNBjJGBK11Mf5iJ8x94FbpTDOyoG%2FBjqkAckQqA587A0vPR7E56yc%2F5zJH82qeiopjrhpITobVD8g4TR50QXZOHSeTV5ArnYW4pBNsTGDeobbLZt55IZKlOApve58Irb5lOix0VZX%2BehcR%2BEHKWLZ6FaJdKNCbZYqS90iZCYgx7AfvYx%2FQWzFExZEA2K9jsIBqUx%2F%2F0Gx7GsTJTssH7GoQUtGcM%2F2Ess9MKvaGFyV2uyHIwaZKZF34MUTlNAu&X-Amz-Signature=550b524f04fbfdecb5738bbbeab2d991dc0ea6b13c5794ba060309dc84530487&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUECL2MZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgw71%2Ft%2Bxuq6394UEk0BPC5Egq7%2BVMBJMwv4t%2BcMNyvAIhAKwef5jzKNMBEvf8eKk2q%2BDMJS%2Bkv49eqZBEaerHUp21KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP%2FkEjZUqMuRWpeF0q3AOzbd%2FROdB37rGORc8Urlxmwo9yUJ6%2BdvTsyRnpLbzQScmBwwyOf7FmanBrg9UU5eeXcK0q84x2eskrAdZvWgAcs%2F5jH1IWE2BYzreldeMIBdsCDB0j0UjujoXVpze0wvwZdLrNgtJyLlK3bniErNBvI42e%2BwnukHEmgGLVNzAPsre9naAYmAMEVnqsbksoJge4Sivor2VIbhab5HoJmsa9ndrKcCOR8rOkaKdVBSAsxwISrIv80d1uiNISaemM98%2BwDqMZ1R3ePV%2FoafMtN4BUuaLBhhpoqvrcyUngXt7gkRBsS8RyLKsBb54O8AAnfHOl4HTqPyNl7MNynheLyGt8fv3TcxmZOdTNPDN4s93eCKbo%2FJZgBkCTTyOUIhP2A0FVh%2FQPgKX6DLZ1lxyASQTPRtuX5%2FeCJBMpxQ8ziDjgoZIsdYwYOC8fMZYMedwPGQ6czAs1AH9HaVVsUpVmI%2BAum0mXJP7UZnnffCNWI0JtAeHdgldJb5%2BfLeuXdO2soAFFqLo95BU4QgE%2BQfYYMEJbwIcB48j5TpNabQkjkii9dy6bwiW%2BkL%2B8mz6oYhVRkBq%2BqdkTavmQpWWo8ivUzFM5vCJ2HRsJY0lDJojacfdCpOrbvA4cAE%2FHhL8PqzCwy4G%2FBjqkARC0MhBUxpizdUZkVTvjazV5%2BpkgykFCA86wy85ptEZtp5EK%2FZBAT2FFnEOvD73%2F6S6wFn%2BtCNDwzfQww4ZFbB1h8gXAgpaaQifDDATRalT2JuGIPk6NNV2LbpZIndi6xF%2FmeOAZf55uC2uxizAjqhmlKvTnjSFbyq0R7N00P1BekYu%2F%2FKKP%2Fb6FE3jsEH6h8tOI3yrpxlYEpBbg0mnAyksDN%2BcU&X-Amz-Signature=d1a55359a428465ed8623b034139fa913c10022cce7d15bd5364973958edd07c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWGP6BN%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrLsfy%2FvMNxX5d49VKDe0%2BCJkGuYuD80kcwXjT8wsxQgIgTWssK3rGylV1nk2TbmxRYKYsM0Ume5jykIOJ4W5uErEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJeho0KeqEbRxKjzSrcA3l%2FGLOik3IkZ%2F5IcT%2FBlNfPHqpGbFWW6EXFQr65FfG8PNjD4SNfTw7qm2QKUT8a%2BW6f2FLhUsdiiy%2FR429zsNwdLUnfSx4DSrAFhasTIbWxiUiZviuRAcPn5p9Nq%2FjPk1YRnp9XDMY3l%2BdQgVFdmBUqgnt9UOA%2B6bQr4Hc%2ByyshDFFMVabeZ2h53gyqeXTiKjmLKy71X%2BtpDbQ3rA40GbcHkaTu2unT%2Fk2SKn6S0tNkVTj4wmYQeYd3HkYzDjCAd228GyGFl%2BK610T1w8Jpo6RrVqpN%2B1mJjVBz%2FjXtUcTeeMjXhcQf3f6imCWRSHim8qopS5pPi%2FTn3c8guCT4I4ZGo25yM9CpKMOEN4OePnwrcvoS4OiUOo989IzlTWMk%2FKpFvBJHzkVasYFE0U5QQiLTGxcDyS8MVnOKGNLGN5xHLYIE6IZmaj0MVYj1dinzxMW6IODeR%2B0QzTY7ZbJq9aQnEd6T%2Bj0UqTRxMZooLYC6zKRvfVwfv05L78ZK6FZ7q1ndVV7Ob%2BBzI9JdIQZLpx1f5osiM5VbHOCINofLhwt%2B78K5ZWn5AGqaig%2BiPgOSQYqmI%2BNDHILWBK8LYu6wL%2BPnCivYdr2X6xGONjsxK0nqIOrdlOiZtxtwyla3MO%2FKgb8GOqUBUsh1NAugJE%2FMyWNKntx8G7%2BO%2Fsr7%2BaOMqYF%2Bk8yQ7QMQ5jpcalOhWMQe1FI7YOnQwm2UI4WfN4KY1Gh9CB2nCIicmWWMExELKN8vOLp1TiJNRhvTu6T5oT0QTY009f36AkqSRia91tHEIWFES%2FXJnrPwoZcm02IJeBI2edIB9NpME1XLu9rvOlSXDbTFBLhZtTtAkXl2PgOlsyXyEGVKlLG%2Ftgzj&X-Amz-Signature=6da24e9f2f7390b9181a831b797a83095e58bd0a9af532c8ec788a60250b0878&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXKZJVM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpr40L77lfQ%2BXSqoH4VKQvkASVMJ23f9X1gpls5LKHUgIhAMUXyI1hKzAkHhFqOkBovDd5uwI4%2B6mH5L1pkHiql7eJKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZRlSS5rMvCj0uu9Eq3APdb8%2BnO9QxcN7vmcygzO8zwRaptr6TihNCndTE%2BwjeToDGvc9VV%2FjAUzrXDexAl0u6Y3Ru7oPmagehrKm2o7tqWGOafP78zmkZHMd3UJwdPLZuj5qbuaJwQYZtoaaCexhSjQjWlPG6OxTSbV5hnv9EcoB34dCmHqjh2VJ8jC8lhwKWiPUAH34OEOWVbwOTnpfUDITRBSWCMWbNDblfdFd0V05chu8iN8njYMkhO9jZUj34s4yqvbyuySWmMpxd5s1ZSTuMVyvq16tlQheB5Z9Yd1EmdVEUzVdQu7HkLSOXEiE097%2FM66PirNDUJ3%2FG2uzIEAPhVF2meWBszDppVRJArx6nOBxdVGpHDT5hENqWCNIOyv0Ntu4B9D%2FH6qCM8SvpTpl9hJZOcF16Ef5nE9fr1x7tlABu0ODGcHH6XdxhkrxMomYDKtb%2B9EhkghAvDRRvmeqcOhmjK%2F%2Bv2BOvn%2BEHsXdCqv5EPPl6ImgbWaVrmPVL1wPCtaQAuitF%2BQx0qTI9SBLikr9RJxKZZsek%2BEumQE3%2FkvXXZksp1hXmN3bTIjawRv9d34zwhw%2FK4suh3bE39uq89JQqbZk5JZE0NaylaBABVmh7kuk%2BQV2VNBjJGBK11Mf5iJ8x94FbpTDOyoG%2FBjqkAckQqA587A0vPR7E56yc%2F5zJH82qeiopjrhpITobVD8g4TR50QXZOHSeTV5ArnYW4pBNsTGDeobbLZt55IZKlOApve58Irb5lOix0VZX%2BehcR%2BEHKWLZ6FaJdKNCbZYqS90iZCYgx7AfvYx%2FQWzFExZEA2K9jsIBqUx%2F%2F0Gx7GsTJTssH7GoQUtGcM%2F2Ess9MKvaGFyV2uyHIwaZKZF34MUTlNAu&X-Amz-Signature=bedbd7f73f52cb14f3400d074c694eccae924168cfd156a2d95f815e19dd7a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
