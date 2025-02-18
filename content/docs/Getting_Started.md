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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N3NVNLC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIF4bOo6n94yRgMiCLvSxbkR0LWaL9ooYnmVmO2aZN7lJAiEAr7VYmZHH4wG%2FrX3IUZVLJ3AKMZ1FE5UwniDmUoCM%2FA8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF42C5pTezIYH3q7EircA%2FESKaV3f3jO4iyEAB7zqttl1gwg2WOK%2Famw2dGsQCJRpfHfFA3pdSQ1m1X1AVl%2BsWGk8eb6UIEnfX65hbTMXTomMiqN3lRC2mo6kUaniZErDIlIH4Z64jyZy7F%2BQ4E8ipeAzUl9ydBw92YpD4Y0pXQeo8V2heAywPBOQmdROUc%2BKdjU7pFZXquiw11hLbJOoWHwSh1ETeBXBXLdeFjqEgpn5%2BprDd53gctUVjIxIwVCkjsr0wcLHnODspaM3bLTgWCYaQ9aic5Opl2gn%2BjLBsBmxnW5op9Z3fZ6T5sIv%2Fv46n%2BiQE07acYNRn9VVNC%2FqjCvxciJ3d2jc9A7uzXBqzVonDHcrm3CymikXlqZ9428t9qzUrVFFepzZTVY3eUDBJxReXmI2pKcSHaj6feJ%2BqNil%2BvHxPsIWUG0b13SFL%2FcirhEurGdadhV%2BN0qlf7S8f8%2BzQrNtZ40H9npYZ4XV%2BrNMxavyA77tB0bxjY%2Bf4BqnhUxhbPItpnf4i0Ui23KTln1O0%2BgYO9mqYt%2FNLna24BUIPrXF3TKQTzulyRO75nGkdxI85jCsEKp5oV9du75YkUu0r1JopmuB9X14EbNFezDUDcyouqNefM5ErtqJEJpZvXeIqtiOiezpGwzMMSmz70GOqUBtAGNwpcMe8FzcqWzSLheVUQ0Kf3Y0YW5mD0h8dm6TQTBMNC9OkpAE6ri1nQCZIo2jZzwhrAXHLNJNkHDmeOxlKOSuo4wu35zg6VSqDGMumGck8qfJQkrcttNvfnz56Qjp7suCEuc9TK3n3%2BNdaA8cz8wj646disHrLRSyJ6zD%2FSPDQcMbCfahdiqvDVQwbQoXme5eRXypLQDZRd%2B1pR2Xz0VOFx8&X-Amz-Signature=a7aeaf79145b0a1be984e2bee03e084fa68ed29c0f51942bc5636105b561563e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N3NVNLC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIF4bOo6n94yRgMiCLvSxbkR0LWaL9ooYnmVmO2aZN7lJAiEAr7VYmZHH4wG%2FrX3IUZVLJ3AKMZ1FE5UwniDmUoCM%2FA8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF42C5pTezIYH3q7EircA%2FESKaV3f3jO4iyEAB7zqttl1gwg2WOK%2Famw2dGsQCJRpfHfFA3pdSQ1m1X1AVl%2BsWGk8eb6UIEnfX65hbTMXTomMiqN3lRC2mo6kUaniZErDIlIH4Z64jyZy7F%2BQ4E8ipeAzUl9ydBw92YpD4Y0pXQeo8V2heAywPBOQmdROUc%2BKdjU7pFZXquiw11hLbJOoWHwSh1ETeBXBXLdeFjqEgpn5%2BprDd53gctUVjIxIwVCkjsr0wcLHnODspaM3bLTgWCYaQ9aic5Opl2gn%2BjLBsBmxnW5op9Z3fZ6T5sIv%2Fv46n%2BiQE07acYNRn9VVNC%2FqjCvxciJ3d2jc9A7uzXBqzVonDHcrm3CymikXlqZ9428t9qzUrVFFepzZTVY3eUDBJxReXmI2pKcSHaj6feJ%2BqNil%2BvHxPsIWUG0b13SFL%2FcirhEurGdadhV%2BN0qlf7S8f8%2BzQrNtZ40H9npYZ4XV%2BrNMxavyA77tB0bxjY%2Bf4BqnhUxhbPItpnf4i0Ui23KTln1O0%2BgYO9mqYt%2FNLna24BUIPrXF3TKQTzulyRO75nGkdxI85jCsEKp5oV9du75YkUu0r1JopmuB9X14EbNFezDUDcyouqNefM5ErtqJEJpZvXeIqtiOiezpGwzMMSmz70GOqUBtAGNwpcMe8FzcqWzSLheVUQ0Kf3Y0YW5mD0h8dm6TQTBMNC9OkpAE6ri1nQCZIo2jZzwhrAXHLNJNkHDmeOxlKOSuo4wu35zg6VSqDGMumGck8qfJQkrcttNvfnz56Qjp7suCEuc9TK3n3%2BNdaA8cz8wj646disHrLRSyJ6zD%2FSPDQcMbCfahdiqvDVQwbQoXme5eRXypLQDZRd%2B1pR2Xz0VOFx8&X-Amz-Signature=c8f0cb8ba2d5171a522d0018ea12947ba02fa82a51910e29cb50924148490c99&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN57K4KA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIANTKQQ0FR4fEDoUQAzGwu9vlqJVGAOboZQ5Qe83szDKAiAiMEd3Pq%2FLX6dwWH6dcT4ZmD%2FKphkxnlCOfnr9MhLKeCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkRh5bnAq5yYczCi%2FKtwDupg7qaLPEjDV6mPmflGHp%2BiAhEjtruy%2BzeAvJVge1MjsSzXnH7flPUkJ7dkA6pfAXVAhYeM99vcOgD7yje7o0cIg08ozonOCYQVUvUsOgdKtaXrrYzPFeoFjy6zwXQeuv21lmPHXLQrVQlYnjkXgWyelSkvao3KmOCgc7Hu4TYCcEW01%2BZ%2FrXHACt3pFWx1gpQGWcjMvH86GdYeZB%2BvVJNY1ImPdYqzLzdciLT%2BolWIGVLkVp9%2BVB%2Bjk%2FN8hkv2WDmXR%2B45%2FlqHxJOK5ZyUYFqjgesLE6ZxR9j%2FfqfU3Rl8ZFTf6peL9Bl%2BAFm4iJMTNh8P%2FEfuXKhAlU9s2KlVVDMw1TQbstsDtKGdS47tZ%2BXWkwMbXBu9UkdbA8j2Wgx3Uw0tc%2FmEt2jigZVNfcPZ853KmD2t8oHRE7slnwtGF8Q8sXrOupObFbW8SEaZNTlec1Cw%2Fh4Vngd92KT6GutCeh8zlP7JqG2TspfO7yEzy8pQo14ATFfZ4wxVt%2FTv0sowrrh5ZGkEM1d%2FPw3svKvEAEji6JC8euWiSw44sLB6Svtbo93guohfKutM2RnpCSBZQ2N4%2BdVKP7Z1HjXjGH5nqceOzkhhb14GyEg%2BO60x6bjtu86KvlRp2Vnc9NKgw0qbPvQY6pgHJBt09k2IACYSAKyVHe6W%2B5XgvYH%2B0%2FFcEY5hB%2FqSbOILonPPeHK9GXXyeqkFgx56yisB%2FzbRnbgSDfMj%2Fs7ugd3liXuqDmIyWTl6LzOw%2FoBqnzXH33zlVDZRic9ciW8d8KhOi1pO%2BNGf58k9xcdXMM%2FTDfXGAvcCy1biSkgV9Gw0i1VyRynPgQ57sAzGGYbxFxh68uweh7HKEWVnlKNi3U9RlED61&X-Amz-Signature=d8a1a3d670b86e611d3deda77fb361d285da6ed6e6641ef275e38a03e72f08a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHL4H5XU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCaBnH7q3t8n5%2BqRjio0C3OWuBjknU7JDcXbKrCp9PJpwIhAMPEv78oVRjy6CxjFt4BZT1PCDtHAZN7mDofN%2F4GU2jLKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOrrRpodSpNuXmKUgq3ANERtoLYVwtAsFar%2BzfI7JZ6VHigtJb2dLHNF%2BMXdH7g9%2BZIDurae2c42%2FnCyHpELDEthNf07pVgaKd1INscShTPjn%2BQcLUqcGiRHJXHX1DeL8ozhPazLGFBDzNojw5HXSJkNcS%2B0ry1TyF11X%2B4QAkv8Ok2cTWAzmPINmTNCGRp9%2FCECe3e3aayLZS3rDTKlIjDU%2BjUyx%2FVY2ooUjVkoGWBr6%2BOYiEWvHR3C6ZW3Kcw%2BzsbUzLT4%2F%2BkBLNDSjclH7DafKsNXpGbZb2Lv57GjRHBPa3XMjDImMdGnomw3CNwbZVAXny5UDPT6USEL29ZeGry7Gc8Ox8Rwqpt6RedecMOEHOfedSPGrreTgKMj%2FuFAhnRDzjXOIXy%2FivIjB3j8c41rjsBXwJy8PQ7Bz5p4E4JiGXLgZegNka67295vvGWX4aL0xDlxL0YI7tb%2BbPhFhZ8q5f84HOnI2FpjbVGUkmsaN4NCK52lkZFPo3PgA4xRT5%2FruTCrvWwJ8x9R9y2X1vuXBNdHgxU11OXyZvrrFD4G%2Bl396RH%2B%2FUXgi1NGXu7k4iWu8SmXxuTzKjK0z4jCMl39gqy8ISx5JgIU4Nqg2%2B26QaUMM4RDuV4Jy5%2FIAuHUsXkFgKd94nmfFz6DDJps%2B9BjqkAZwmnYEVRaP86RFXdvLPOuUJa68VXKfzstnsVZUAfhyNDXdzCeUJ4MWAudelOkjdRl57JP8V154RqhHVp92GaoNt8YrTcFbS4I38heD1ppbpWeRBULL6qXlxHPhNUKfEipFlFmyXYyOeUNeLYohEiugctVs5mw7K8KrNSysIb2QjPXJu0swAfWe4Fd7lZR%2BomfzHX1QTQMniCvLyJcayH5oQrDNf&X-Amz-Signature=8c4d4d5f82d7362e4abc61dfa1202b08b42288041b843a6f3b8a2bc609a1ccac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N3NVNLC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIF4bOo6n94yRgMiCLvSxbkR0LWaL9ooYnmVmO2aZN7lJAiEAr7VYmZHH4wG%2FrX3IUZVLJ3AKMZ1FE5UwniDmUoCM%2FA8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF42C5pTezIYH3q7EircA%2FESKaV3f3jO4iyEAB7zqttl1gwg2WOK%2Famw2dGsQCJRpfHfFA3pdSQ1m1X1AVl%2BsWGk8eb6UIEnfX65hbTMXTomMiqN3lRC2mo6kUaniZErDIlIH4Z64jyZy7F%2BQ4E8ipeAzUl9ydBw92YpD4Y0pXQeo8V2heAywPBOQmdROUc%2BKdjU7pFZXquiw11hLbJOoWHwSh1ETeBXBXLdeFjqEgpn5%2BprDd53gctUVjIxIwVCkjsr0wcLHnODspaM3bLTgWCYaQ9aic5Opl2gn%2BjLBsBmxnW5op9Z3fZ6T5sIv%2Fv46n%2BiQE07acYNRn9VVNC%2FqjCvxciJ3d2jc9A7uzXBqzVonDHcrm3CymikXlqZ9428t9qzUrVFFepzZTVY3eUDBJxReXmI2pKcSHaj6feJ%2BqNil%2BvHxPsIWUG0b13SFL%2FcirhEurGdadhV%2BN0qlf7S8f8%2BzQrNtZ40H9npYZ4XV%2BrNMxavyA77tB0bxjY%2Bf4BqnhUxhbPItpnf4i0Ui23KTln1O0%2BgYO9mqYt%2FNLna24BUIPrXF3TKQTzulyRO75nGkdxI85jCsEKp5oV9du75YkUu0r1JopmuB9X14EbNFezDUDcyouqNefM5ErtqJEJpZvXeIqtiOiezpGwzMMSmz70GOqUBtAGNwpcMe8FzcqWzSLheVUQ0Kf3Y0YW5mD0h8dm6TQTBMNC9OkpAE6ri1nQCZIo2jZzwhrAXHLNJNkHDmeOxlKOSuo4wu35zg6VSqDGMumGck8qfJQkrcttNvfnz56Qjp7suCEuc9TK3n3%2BNdaA8cz8wj646disHrLRSyJ6zD%2FSPDQcMbCfahdiqvDVQwbQoXme5eRXypLQDZRd%2B1pR2Xz0VOFx8&X-Amz-Signature=15683d284254c6718de9980e58115d32b1d492d4edca5e67f02e13773d4e03c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
