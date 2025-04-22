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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYRQ6PJ4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCID%2FW9DecDFqZ5OtppPZ%2FMGo3N%2BIOmEdyJR6mEO3zNGtFAiAmAwNc0UtSITQdol5iocKcJ4JWpNQ8FtMuw9kgVe4HEiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeSnFNRDiZr1MdhkbKtwDwPAofhAFOoBWJwZwFCifXKR%2F9J0imAipRKDryWuUCoYlV4kqTNFBMIPa3OCEnnepITv0l6A3au%2FNCWM5NwWgzYjzvJRLd6O7Jxrlwqip%2FNBe%2Bs4LwEM3l4qRue75PADQxdHaryIHXWeMA7uVkJvSv9NEKiAJ%2FdbpaGwQ8hP6jjWw%2F1f43UoRF4FkwxbiOPZXiTEfzMHC%2BS5Qm6x6hysyxc4udmKz2pHgptxO4rLYmgDVKszKtHD6GlubHmJUW7q60UGC0QXtW0dIU1e89eovFuKwcqnR5DQtTF8XQZD2MUFZCES3S6pEzRzPe7Humw55gjBGNUq4lTu2Bp6%2BytVSLp4kOLXEnsUmSdtvn9lKrMoZ0yNmR0sYrkGNl0JCMIuydlnaHQtd0hNdGLmcbMkKSKjiZ55lh1zYLlCh1x7qz5SzJxW8UtwsiDdbtJ4dE64vfaSvr1o31mIRlzhPK5KJn6tARvuXT%2BWXj%2B0w9ovh%2BvwFs1PTAxZ4Nsbc9aFfVJUY%2BalwKs89RJSIAaV34XbCBNSd4AsN4ia2zaOxiu6Cru%2F1S7QfJDCjHBG%2BHuQvJC%2BBlGStbOcfFV2pCxVSmcpDG%2FdNHHbfsL9eLaLSWoNyEWrDT5lBbcdUADJXwOgwgPGbwAY6pgHP1pn%2By1GXRuLCOukzciaThFiCi3M2oiQEll7TlpfuJJn7EvLQE9SPZjZvRgG1xb7uFtixZDfjSqg%2FEiTUZ2EqQNtv7MeT2qqvxaxZ42MNza%2BjJhuLtd2F2vAiz1TysNXRHyKtJo7YzFycKDNFzhPNK7Mq4OBDdyY6%2BDx1Cgujn3SCYFIlHV9PPC2VJOeEyKheM68fkE3Sn59NqCEgkAeOFX5ec4Yb&X-Amz-Signature=4824a78db8a9998e6640a8e3fccfed16776b449b534d5691e31ef36d02273c69&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYRQ6PJ4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCID%2FW9DecDFqZ5OtppPZ%2FMGo3N%2BIOmEdyJR6mEO3zNGtFAiAmAwNc0UtSITQdol5iocKcJ4JWpNQ8FtMuw9kgVe4HEiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeSnFNRDiZr1MdhkbKtwDwPAofhAFOoBWJwZwFCifXKR%2F9J0imAipRKDryWuUCoYlV4kqTNFBMIPa3OCEnnepITv0l6A3au%2FNCWM5NwWgzYjzvJRLd6O7Jxrlwqip%2FNBe%2Bs4LwEM3l4qRue75PADQxdHaryIHXWeMA7uVkJvSv9NEKiAJ%2FdbpaGwQ8hP6jjWw%2F1f43UoRF4FkwxbiOPZXiTEfzMHC%2BS5Qm6x6hysyxc4udmKz2pHgptxO4rLYmgDVKszKtHD6GlubHmJUW7q60UGC0QXtW0dIU1e89eovFuKwcqnR5DQtTF8XQZD2MUFZCES3S6pEzRzPe7Humw55gjBGNUq4lTu2Bp6%2BytVSLp4kOLXEnsUmSdtvn9lKrMoZ0yNmR0sYrkGNl0JCMIuydlnaHQtd0hNdGLmcbMkKSKjiZ55lh1zYLlCh1x7qz5SzJxW8UtwsiDdbtJ4dE64vfaSvr1o31mIRlzhPK5KJn6tARvuXT%2BWXj%2B0w9ovh%2BvwFs1PTAxZ4Nsbc9aFfVJUY%2BalwKs89RJSIAaV34XbCBNSd4AsN4ia2zaOxiu6Cru%2F1S7QfJDCjHBG%2BHuQvJC%2BBlGStbOcfFV2pCxVSmcpDG%2FdNHHbfsL9eLaLSWoNyEWrDT5lBbcdUADJXwOgwgPGbwAY6pgHP1pn%2By1GXRuLCOukzciaThFiCi3M2oiQEll7TlpfuJJn7EvLQE9SPZjZvRgG1xb7uFtixZDfjSqg%2FEiTUZ2EqQNtv7MeT2qqvxaxZ42MNza%2BjJhuLtd2F2vAiz1TysNXRHyKtJo7YzFycKDNFzhPNK7Mq4OBDdyY6%2BDx1Cgujn3SCYFIlHV9PPC2VJOeEyKheM68fkE3Sn59NqCEgkAeOFX5ec4Yb&X-Amz-Signature=6bbd33bc719b8438b07ea8a19d3634d08bd9477e0dfd432b3f2ceef64a63daf4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3PX73PX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCICgnIcc9FF99lNlZESOV8raILbfyjUf8jgx02UNxHEXXAiEA525%2BO8JUEU3z8kuHL4fZ8Eyg5fjgdzhmSTh1ZqEqAkIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBooNdRaTjjPylMVSrcA3DTdFYopE%2FXbOWrOMDnQgUSQGgLN0h%2FFwytgW74gHUtH%2F4L6Tmq4Y3a6qC3hPe0HB%2BapAoltw91iS9EBnkc86nKwCLhdtGtSoB4BS5f9f6cKlBTWR7Ca91jprXLvPMQq6zDJHyrfKayhDy2hEMPnhNtzELL7HpminuJgSIHV3MgU0RqpRv5bIaIKsr8kncI9HdHgJnhc%2FywVqx25S9fIkHOXVuiYEfPgSe73c18RKF%2FsR1MhHkJgORKvT4n7IsASk7u6XUEvEFdF7KiC%2B95LrBIIDBjvC7X2CZmZN5OKZqpdJSqVNZjUs8WNK9qpf2gZi%2BxlLck7NgqMXbothAOTvYL06ypui48fO7jFmnBjMy2Pr62xPT3JwfafjaIx7PGGuilApkkfrDku3j7yrfzpGN7ZYupFN%2BCXTZWEQUWX87d4s9QM%2FGOR3F4vZK%2BDk%2B7ro3T1EvwLu3fx4GUf5sGBuPvNWDXhYz0Wk8%2FuyiLGHHKnu3pKIayWsm1jLt3dzSJUc%2B7WLkAlSnFCZGjAVLmVI3pGYJV5JXYJcWHJbuP668vMgPH2FUQcBJcpfBtCBwfE4hE%2FU%2BE7bolj3WbVEpD31SqmMzJggxQ0wVgT8HtQil9NE%2FZ2VXiu0%2BWAPx3MI3xm8AGOqUBezsVuxcYuxUVWZbSSY7bEbLfA7lUvL8YJxbClvDV7nOwLogrhQ6ciG7PZvxLBWjPniS8V%2BTSzVwPvajqyvelnBDXzR5ZkzBGJucnhZPDP7ESobBrmcA9aZWEqVfsX%2Bu5c2SMiAugGywDlD%2FN274SfFh7ZoZgUL9UmJjdPjE1RzMmYbWpw6L4SV96nzoS%2B3pqVkHuEFylGD%2FNg3905qraEeOJogox&X-Amz-Signature=6512c70e62523f580461dd1b0f77b62d47bf6813a58d32e438fa7e9565256dc1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7NYRCND%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIEcTMvwxOOK%2FGiIST9IM%2Bi6%2Fvk26EjtQ7QMUPbpL0v8vAiEA5txzU8WDSKruvc64436BBlTwxEV4m31Ul8ziwYZ19I4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPP9ySoFq%2FeLmquopCrcA0FcYlvML0DkYxOJ73EBqoUH%2FMpPOZJYgpOwSebqaJY%2FJPHLmjFW%2BlZp2I13Qv3syR3RSml8pGH4WVPSjmEeh5EIzVZ%2FONVnlVqPpClPJEyypoUzR%2Fem0xlF1zA4c9KZfil96%2FwlPFssiNfAUJmB5oVe%2BZkAMYmi2UJ0aSWEwdJirI2EzuiUKK5N%2BsqLtJM2V%2BDmO0Pc8tmQm2u7VOHbwIMHv%2BhAT2QQHNU5gPe%2BI9c%2B5Sshzs3xaR9LRwSteXNKi1y4cafncvEOlZra59%2FIBZorkKf40WcQAWmcg9GCRodKK9N8qBotu3vfSduqcPuqgbLzGdGUIFv%2Ba9gm5j2sfQLcM0%2BqvKfjVJ5%2BsnF5UX0xanlnd%2FexUEvCvUUuvzFA0jkixZRAHHmX0pO35IU3bNip0S6oGx7IpYdYdSTArVyjvJhQIVJ57kCGY6Qs1jwwH7kPesMtZdczbt3NkKUWfjJj53CxFgNxn9WZGwyZJxiatFC1TPMG3R1WjyeDe68HiHE4igSqlUvg%2B673cbGBXoSlFHFcrP8Y%2F%2FSQqjM%2FbLkyskRo%2BiTlHiMpWjTdS1Fj4pYcArkpJgPT69pK7E5tAOpxdCmA2amTTTwW6FpFAiebGmXZPaClXbVdJUF7MJDxm8AGOqUBdpa0FieFXHm%2BJGIj79kaphuzheocbMhgLnSVQIsETFe6RhLj5ZP1r3mdqY2GD%2BTX6dVtctJbZJnCLFvOsInbxZn0AJU5tRQiES8Z1TH1e99gg%2F%2FfSEzd5logowHdjqdmh9MrLwqzcCItHNNtPvZSn45GMIvX5njHLqBotWDhTh6OK1np8hLWKUh8ai97EqE9ZgRo7Aaic4o4NymnQ0aaBbLyC9Nd&X-Amz-Signature=05147998df3e6f9d22f03492e0ef9ac42e56a0f0f5ee01bbcdd43f52a9daba05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYRQ6PJ4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCID%2FW9DecDFqZ5OtppPZ%2FMGo3N%2BIOmEdyJR6mEO3zNGtFAiAmAwNc0UtSITQdol5iocKcJ4JWpNQ8FtMuw9kgVe4HEiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeSnFNRDiZr1MdhkbKtwDwPAofhAFOoBWJwZwFCifXKR%2F9J0imAipRKDryWuUCoYlV4kqTNFBMIPa3OCEnnepITv0l6A3au%2FNCWM5NwWgzYjzvJRLd6O7Jxrlwqip%2FNBe%2Bs4LwEM3l4qRue75PADQxdHaryIHXWeMA7uVkJvSv9NEKiAJ%2FdbpaGwQ8hP6jjWw%2F1f43UoRF4FkwxbiOPZXiTEfzMHC%2BS5Qm6x6hysyxc4udmKz2pHgptxO4rLYmgDVKszKtHD6GlubHmJUW7q60UGC0QXtW0dIU1e89eovFuKwcqnR5DQtTF8XQZD2MUFZCES3S6pEzRzPe7Humw55gjBGNUq4lTu2Bp6%2BytVSLp4kOLXEnsUmSdtvn9lKrMoZ0yNmR0sYrkGNl0JCMIuydlnaHQtd0hNdGLmcbMkKSKjiZ55lh1zYLlCh1x7qz5SzJxW8UtwsiDdbtJ4dE64vfaSvr1o31mIRlzhPK5KJn6tARvuXT%2BWXj%2B0w9ovh%2BvwFs1PTAxZ4Nsbc9aFfVJUY%2BalwKs89RJSIAaV34XbCBNSd4AsN4ia2zaOxiu6Cru%2F1S7QfJDCjHBG%2BHuQvJC%2BBlGStbOcfFV2pCxVSmcpDG%2FdNHHbfsL9eLaLSWoNyEWrDT5lBbcdUADJXwOgwgPGbwAY6pgHP1pn%2By1GXRuLCOukzciaThFiCi3M2oiQEll7TlpfuJJn7EvLQE9SPZjZvRgG1xb7uFtixZDfjSqg%2FEiTUZ2EqQNtv7MeT2qqvxaxZ42MNza%2BjJhuLtd2F2vAiz1TysNXRHyKtJo7YzFycKDNFzhPNK7Mq4OBDdyY6%2BDx1Cgujn3SCYFIlHV9PPC2VJOeEyKheM68fkE3Sn59NqCEgkAeOFX5ec4Yb&X-Amz-Signature=cc8c24787756fcc8af60e00d01ade45ac712c1f0cfdd062821d950ee1876f20f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
