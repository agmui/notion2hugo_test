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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6RHOXE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCZZEPwNC0PZknENutKfabXpn2O7bHa82cR1tohjcWdOwIhAM2RXqM14bY%2BXXpjkHO3qjR4DzIJ5Qj1HtWfRdwMWE6oKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPd8waPswgYmBIyQ8q3AM0K2P4F1YMQSjtqSMFfuOX5%2B%2BMOC21vjJ88H4JirGIC6pqdP0LW42BUomt41QQ7CiERpsQ96sWJqO1LhRoyCwjvS2cTE9bFLi%2FnnQRWZ6jYyHJzdzViI2glW55aiy6MrReNJvggDq%2FpI9qhD%2Bz7xiEo6F1yCv1FPK%2FtRT%2Bl01eIdTogHMbvIQHB5Sp%2F2etIiNkl4W%2F%2Bm86Mp%2FT6FKqzmyoN%2Br5QfbR097ASyKgyHUWk353zvSC6ZPj3%2BBnXab%2BxNrkw3dINOOrjLd%2BhD84%2FrFstDGRw%2FytFbeFCcJNv3yN3VS10aJZAjP7fg%2BstCUHw3qGOoSpQ2rVLCZtjEVJXzXUsuwVXSCHDTFMLPfVE2lYUGhcpifgd36t%2FmrHz8MyJ8AN6snnu%2BPT16%2B39sKW3scAAlgzfcVL%2Bbv6H7Mf8Se6VR2i5TCYUoJHYw5xsja1BxGFvKn9h0l0SNRtzk2IDm54GG65VUIc9LyJujIzjXsdu1xLIfYPYcSdQwWzT3qnTJFv%2BjGdnXFpjp7WTV54LiGDKNOywNCTajBRHF%2BQm1GtQhlh2QR4%2FD2RgxqdIwSGMpzSPnWuNVmJ9e77kcGrRmI9umJtJhuStLDR25T9F0zZCsJcmbX1Z1fqj5F4EjCt%2B9i%2FBjqkAb1dTUQg%2BQnM57LBrvHO%2FISh9SheOm8URvtu4hZF%2FkUk%2FYQ6CNPoRGnwrp3t3883%2BT6Bn223UNE8QgJkr735sCgz5%2Fcx4lTkpoboWofSGcgzU%2BX%2BHjJ5tkmnQOQX4lcN37%2B8favZNWOB5bMlB12696UaaM2x63djDOvHzBkdaJGiuAcIm6B9insMng%2FuHYYv2ScV%2Fgs5W96lTU3L8RiWkirEEEZ%2B&X-Amz-Signature=d636f58389f09aa770f2aea0aca300ddc8b0cd525c15bda517446a4f01acb050&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6RHOXE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCZZEPwNC0PZknENutKfabXpn2O7bHa82cR1tohjcWdOwIhAM2RXqM14bY%2BXXpjkHO3qjR4DzIJ5Qj1HtWfRdwMWE6oKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPd8waPswgYmBIyQ8q3AM0K2P4F1YMQSjtqSMFfuOX5%2B%2BMOC21vjJ88H4JirGIC6pqdP0LW42BUomt41QQ7CiERpsQ96sWJqO1LhRoyCwjvS2cTE9bFLi%2FnnQRWZ6jYyHJzdzViI2glW55aiy6MrReNJvggDq%2FpI9qhD%2Bz7xiEo6F1yCv1FPK%2FtRT%2Bl01eIdTogHMbvIQHB5Sp%2F2etIiNkl4W%2F%2Bm86Mp%2FT6FKqzmyoN%2Br5QfbR097ASyKgyHUWk353zvSC6ZPj3%2BBnXab%2BxNrkw3dINOOrjLd%2BhD84%2FrFstDGRw%2FytFbeFCcJNv3yN3VS10aJZAjP7fg%2BstCUHw3qGOoSpQ2rVLCZtjEVJXzXUsuwVXSCHDTFMLPfVE2lYUGhcpifgd36t%2FmrHz8MyJ8AN6snnu%2BPT16%2B39sKW3scAAlgzfcVL%2Bbv6H7Mf8Se6VR2i5TCYUoJHYw5xsja1BxGFvKn9h0l0SNRtzk2IDm54GG65VUIc9LyJujIzjXsdu1xLIfYPYcSdQwWzT3qnTJFv%2BjGdnXFpjp7WTV54LiGDKNOywNCTajBRHF%2BQm1GtQhlh2QR4%2FD2RgxqdIwSGMpzSPnWuNVmJ9e77kcGrRmI9umJtJhuStLDR25T9F0zZCsJcmbX1Z1fqj5F4EjCt%2B9i%2FBjqkAb1dTUQg%2BQnM57LBrvHO%2FISh9SheOm8URvtu4hZF%2FkUk%2FYQ6CNPoRGnwrp3t3883%2BT6Bn223UNE8QgJkr735sCgz5%2Fcx4lTkpoboWofSGcgzU%2BX%2BHjJ5tkmnQOQX4lcN37%2B8favZNWOB5bMlB12696UaaM2x63djDOvHzBkdaJGiuAcIm6B9insMng%2FuHYYv2ScV%2Fgs5W96lTU3L8RiWkirEEEZ%2B&X-Amz-Signature=20db102e442cc624cf9bf07653e52a72c43c8a5bd09dde77ce3edeb2f28c1f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYVZATKC%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIB%2FvIjmalFQYZSPZY4Pr07UpcguiAgEStl%2Bzf%2BhDz9dCAiEA6DVkYL4CRcEjWLBKem%2F8IIcNvtrwT4rzKt7WLIgcX14qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnPFSXftGmdlLurhyrcA4KuKVRDMzlaLL1VNEqK4%2BGTf2Xbd9mpnqcBOl80BeAuJSfbogsVKhSIvBlIAlu3DQK76U95r8BZzcn6J1%2F6bNMW1kOa8qzMNA0apHMZLR%2Fy4EIgUeWME8pawW7V1RpRvuZx%2BKiXJgPEhe3k%2FPuB%2BjxC1zPCX7MRztnX83tL6wKLGJkIFtt7hWEfWa%2F7jKtl6PcbHdWUzCYhklooxcsWOrspRG0rwejs%2Bi5kCfREKSTv%2B6iexDdABNr3UFMteQwdYbL%2FA00G69av%2BE6LBW%2BOefSR3AqCGUqUBhXNHk6v14UPhqm5WwIRbLPMUcIo1S%2BRBtlhTR3A5amc32Re5UpVUnMmxubCzhqT1y92a7eKx7iZ1T590akZcMyR6wNro1JVrzz5KTqATdUUoED5Pyxf53PCcf1olNplUUV9h92VW66pFUDc7fgSPKxz1Yc%2Fq3AplbEPUxLsCOqS4VXiv1nfEzI0qbpamPyl0rSnTkJOMW7HXmUKjNIKIyG0d5YoJn4tm7i2llV9QqhL0N7ZXuJ9%2BhogpbZk3gADu2BqU67kmCtvT%2BYDC6zBT29bIubqBAmy9Kq12iPz%2FVVXjsYFpH3Oz7iPljf2dxoFLngU5lnhOeTOzadifLkeW%2BUmbL%2FnMLr82L8GOqUB1JbB6Ch0WEiagpsful13xYCKLXawk6tTYGqXy6SUuWnw3Oo4jTag9%2For95LIOs7kUfir8Qyz17F4uN9AZM5JAT0RQ1BAIAR5k10ehwnE5Hdx80YHT1sssIORDC%2ByGocYWhCgxsEZdCWrpTadSqcT7tg0SAROBZrWId%2Fb2hXrov2ydSYnQrRwcMbUGlW6LKMmWS%2ByxkrrBN84SryJMY6Sr6lReS2I&X-Amz-Signature=27db7fea586ea2b4b4435a5cee9bd12efeb81cd05ba1d7bea800735071263728&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNB6MGE5%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDqB8BnKYzeWywwiTqou2j34CGcIrmrVLrP%2Bs95XR7JGQIgNiTDBIUvDxEnYfky1Zw%2F6J9kInSOQBFQAsj7puwenEsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmyIRcIaB5xlNxM%2ByrcA21tkO7Z%2B2LS9nHFdAdWgIwR0nkCpYl0QPkjPOYYhDWpCQ9DTXhGKuM9Pup6ytkO3vHIR1vuuJ89hCrCDyGUrEO2deTlvQUcQk47TfIpvKAX4vUvOXety9fLJlrnUg93cE2Pn5pH0jqwgphznl7I5M69NQQCRepBZ857t0UIgyJ49zqFmb%2FK6sMQIALi24wRTR1X5HMcLUkdw9UuHAIr5xfFv0YIsOFa0M%2FbsJNIrLODypVjBGVbFn3mKx5PFn%2BYyNOIRWJajDCT%2Fy%2BFoC8eymXyLk1mJbPXXs78TLXNMlSGGW1mkZNnyds6warC0qcyzP%2F95syoIvkcokwkr9BDFmVARFKXLKNtTLz5ZO4iI7OcGoGe8bseu2paCB9CBqNHnCRRLNw5%2F6OAjenC8OIUha%2B5ybcxJe%2FTwWpH6xjmeqISVjNknha7G4ALBReUs4HV82I3v0DsKieu1kPNT0yB%2BCJH8M5B%2FKpv7WGdxoZpgBspebTT%2ByAIj9KU9Orbe2wT2Lz5M2XfnyE5si3WCPdDRRNUYZR29nB50RwNrR0kxv1Y%2BccKvQhBsuMpdJ6O2lbcupY%2F11V6s%2FD8yS212p2SVn%2FIrcERsVEvNIQTFH1KqUcp2BxEyg7uuEiKNqfpMJr82L8GOqUBqUybxnSbMJ8asMN513rsypOgHKOaZQWcWHGzrCOhOokeIB4ijbJ3j81u0h8J%2FMMuLsGfgtdkt5bdZtdB8xN505poe4Hc1RXdfZbPn0ABFreNbIiVb8oZWDHvTUbCAg40N1XUf18IjF71dWCS5ibIFw%2BKkJZBOQaz3w6ZzPuijLZMOV4cLgnrM7%2BzkGCd6D4hroeIIflcT4z4muLN5t27WE7RJmz%2F&X-Amz-Signature=c9c537fbb8c8c6b9ce5c6f042433e1847630eecf791cf5a1fbeb008f0e60e286&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6RHOXE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCZZEPwNC0PZknENutKfabXpn2O7bHa82cR1tohjcWdOwIhAM2RXqM14bY%2BXXpjkHO3qjR4DzIJ5Qj1HtWfRdwMWE6oKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPd8waPswgYmBIyQ8q3AM0K2P4F1YMQSjtqSMFfuOX5%2B%2BMOC21vjJ88H4JirGIC6pqdP0LW42BUomt41QQ7CiERpsQ96sWJqO1LhRoyCwjvS2cTE9bFLi%2FnnQRWZ6jYyHJzdzViI2glW55aiy6MrReNJvggDq%2FpI9qhD%2Bz7xiEo6F1yCv1FPK%2FtRT%2Bl01eIdTogHMbvIQHB5Sp%2F2etIiNkl4W%2F%2Bm86Mp%2FT6FKqzmyoN%2Br5QfbR097ASyKgyHUWk353zvSC6ZPj3%2BBnXab%2BxNrkw3dINOOrjLd%2BhD84%2FrFstDGRw%2FytFbeFCcJNv3yN3VS10aJZAjP7fg%2BstCUHw3qGOoSpQ2rVLCZtjEVJXzXUsuwVXSCHDTFMLPfVE2lYUGhcpifgd36t%2FmrHz8MyJ8AN6snnu%2BPT16%2B39sKW3scAAlgzfcVL%2Bbv6H7Mf8Se6VR2i5TCYUoJHYw5xsja1BxGFvKn9h0l0SNRtzk2IDm54GG65VUIc9LyJujIzjXsdu1xLIfYPYcSdQwWzT3qnTJFv%2BjGdnXFpjp7WTV54LiGDKNOywNCTajBRHF%2BQm1GtQhlh2QR4%2FD2RgxqdIwSGMpzSPnWuNVmJ9e77kcGrRmI9umJtJhuStLDR25T9F0zZCsJcmbX1Z1fqj5F4EjCt%2B9i%2FBjqkAb1dTUQg%2BQnM57LBrvHO%2FISh9SheOm8URvtu4hZF%2FkUk%2FYQ6CNPoRGnwrp3t3883%2BT6Bn223UNE8QgJkr735sCgz5%2Fcx4lTkpoboWofSGcgzU%2BX%2BHjJ5tkmnQOQX4lcN37%2B8favZNWOB5bMlB12696UaaM2x63djDOvHzBkdaJGiuAcIm6B9insMng%2FuHYYv2ScV%2Fgs5W96lTU3L8RiWkirEEEZ%2B&X-Amz-Signature=70a01c91c67142962cc334fbc7463eefbf12d8400dee407fe998cb00bef23428&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
