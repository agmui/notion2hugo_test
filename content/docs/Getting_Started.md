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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BG55X7Z%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCHLXv3v0P5HTs34W9buS0dpsT1ama1VkRbypHL9Wk0mgIhAJ%2Bo%2BW92qoCHTpEBrmgPmQb89rIzv3yLhiD0Eii2ZJQsKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNs0YTYcbKBOAZOG8q3AOC%2BYDaXT3wbMuXqb1wTAA8e9XP6%2FY06q5MNUlhipJBd73UYsB0DifYB2sxrzL5Ofc9dMvU5ZIUuULhkgvXc6CxenMqXxfQ2U2q8dhaXzzdy3Oq5wUA3EMv8WYoeU6jPIebQ3Kq5qo9gOuJHsjyBWAXY8Yh28IeEnxriMUwEYXtcuLsIingTBH8gM7KVJOxE2ogYivUxpxAnuOH%2BDwjfEchNVczvxdhLieedgNmGX%2BTlndbeNifjAjVE8YXXSdHDBne3XPykkvCmKXj8GdI3%2FtN%2FQqgVihpTsukI24NJbqzZwjBUqPGbHDzHFmC0aKiye8ZXSDEDlS%2BZPjVOAVyO4hPWmYZHr5tPm2BDBt9M7qru3RKHX48vwyNWTlGM1AAz6cL41PqZHkm0MbgcUQ0zweXOezNAUixMx9jaFQKc7TgdaA4hpjDuyTvCjalGBl981pvIP85Hb%2FHzyCMQZPomLu5YfRL9l4HCZbxu8dq9P83ItIoxku7ciEHoqCHjA34THAFaG5LRoOyVzsv2ITxmq3Jq1ubXSjVwaZnbuhaPd%2FKQ3pBXmqLiG%2Blc5%2BB46ByQ0huOWjgMj97xGjUukukoGG6KsjR%2BzrXb%2B1GvWnQjES%2BjXJOAlNY9hukabDpWzD5oM7ABjqkAZ%2FlVhpoEbnE%2BrINFM%2BRxQP8rxf5249XF7x4HzUwuBAQ%2FQ680aYYHs6ZT3%2FwmL0QP0HNum59v4GhrGCY4lVu%2FUMCmNwSa%2BakvXFX1B7VeAC2nbOw8OJj1PCYgxlZszEzpNTVOWt0hNHAP76y6PjvOs2g3d%2B3g8LSEtLBphJcIHbqGf8zqNP6QH4TxkLE%2B8a87KEijIEYpS7a%2F2QQc1AWe6IP2PGV&X-Amz-Signature=0ba0403d2348050f03707eb3ae6ef591c65cc73c0bea7b41b39df1f38f015c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BG55X7Z%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCHLXv3v0P5HTs34W9buS0dpsT1ama1VkRbypHL9Wk0mgIhAJ%2Bo%2BW92qoCHTpEBrmgPmQb89rIzv3yLhiD0Eii2ZJQsKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNs0YTYcbKBOAZOG8q3AOC%2BYDaXT3wbMuXqb1wTAA8e9XP6%2FY06q5MNUlhipJBd73UYsB0DifYB2sxrzL5Ofc9dMvU5ZIUuULhkgvXc6CxenMqXxfQ2U2q8dhaXzzdy3Oq5wUA3EMv8WYoeU6jPIebQ3Kq5qo9gOuJHsjyBWAXY8Yh28IeEnxriMUwEYXtcuLsIingTBH8gM7KVJOxE2ogYivUxpxAnuOH%2BDwjfEchNVczvxdhLieedgNmGX%2BTlndbeNifjAjVE8YXXSdHDBne3XPykkvCmKXj8GdI3%2FtN%2FQqgVihpTsukI24NJbqzZwjBUqPGbHDzHFmC0aKiye8ZXSDEDlS%2BZPjVOAVyO4hPWmYZHr5tPm2BDBt9M7qru3RKHX48vwyNWTlGM1AAz6cL41PqZHkm0MbgcUQ0zweXOezNAUixMx9jaFQKc7TgdaA4hpjDuyTvCjalGBl981pvIP85Hb%2FHzyCMQZPomLu5YfRL9l4HCZbxu8dq9P83ItIoxku7ciEHoqCHjA34THAFaG5LRoOyVzsv2ITxmq3Jq1ubXSjVwaZnbuhaPd%2FKQ3pBXmqLiG%2Blc5%2BB46ByQ0huOWjgMj97xGjUukukoGG6KsjR%2BzrXb%2B1GvWnQjES%2BjXJOAlNY9hukabDpWzD5oM7ABjqkAZ%2FlVhpoEbnE%2BrINFM%2BRxQP8rxf5249XF7x4HzUwuBAQ%2FQ680aYYHs6ZT3%2FwmL0QP0HNum59v4GhrGCY4lVu%2FUMCmNwSa%2BakvXFX1B7VeAC2nbOw8OJj1PCYgxlZszEzpNTVOWt0hNHAP76y6PjvOs2g3d%2B3g8LSEtLBphJcIHbqGf8zqNP6QH4TxkLE%2B8a87KEijIEYpS7a%2F2QQc1AWe6IP2PGV&X-Amz-Signature=b71b178a43863285ca550c7763f7853a965f755f5c22d01cde54367cc64295c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BG55X7Z%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCHLXv3v0P5HTs34W9buS0dpsT1ama1VkRbypHL9Wk0mgIhAJ%2Bo%2BW92qoCHTpEBrmgPmQb89rIzv3yLhiD0Eii2ZJQsKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNs0YTYcbKBOAZOG8q3AOC%2BYDaXT3wbMuXqb1wTAA8e9XP6%2FY06q5MNUlhipJBd73UYsB0DifYB2sxrzL5Ofc9dMvU5ZIUuULhkgvXc6CxenMqXxfQ2U2q8dhaXzzdy3Oq5wUA3EMv8WYoeU6jPIebQ3Kq5qo9gOuJHsjyBWAXY8Yh28IeEnxriMUwEYXtcuLsIingTBH8gM7KVJOxE2ogYivUxpxAnuOH%2BDwjfEchNVczvxdhLieedgNmGX%2BTlndbeNifjAjVE8YXXSdHDBne3XPykkvCmKXj8GdI3%2FtN%2FQqgVihpTsukI24NJbqzZwjBUqPGbHDzHFmC0aKiye8ZXSDEDlS%2BZPjVOAVyO4hPWmYZHr5tPm2BDBt9M7qru3RKHX48vwyNWTlGM1AAz6cL41PqZHkm0MbgcUQ0zweXOezNAUixMx9jaFQKc7TgdaA4hpjDuyTvCjalGBl981pvIP85Hb%2FHzyCMQZPomLu5YfRL9l4HCZbxu8dq9P83ItIoxku7ciEHoqCHjA34THAFaG5LRoOyVzsv2ITxmq3Jq1ubXSjVwaZnbuhaPd%2FKQ3pBXmqLiG%2Blc5%2BB46ByQ0huOWjgMj97xGjUukukoGG6KsjR%2BzrXb%2B1GvWnQjES%2BjXJOAlNY9hukabDpWzD5oM7ABjqkAZ%2FlVhpoEbnE%2BrINFM%2BRxQP8rxf5249XF7x4HzUwuBAQ%2FQ680aYYHs6ZT3%2FwmL0QP0HNum59v4GhrGCY4lVu%2FUMCmNwSa%2BakvXFX1B7VeAC2nbOw8OJj1PCYgxlZszEzpNTVOWt0hNHAP76y6PjvOs2g3d%2B3g8LSEtLBphJcIHbqGf8zqNP6QH4TxkLE%2B8a87KEijIEYpS7a%2F2QQc1AWe6IP2PGV&X-Amz-Signature=553f1330501e0f73ea3317741a374255e217000b3a92508df670bb6f4413bba0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HVYWZU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBlF3r7uVRKs8f%2BZ3bVtDvCduckyOsmD1VWgiAnxLjsVAiEAqWlIE%2BwStp%2ByehuVrHaMrrFS3wQ%2FNwMGGCiz9PDtPk0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHs6qBEoa8usWq%2B6LircAx%2BmDniOp1sX%2BSg1cSVVF8a97NsnawNWsw1%2FLuFNP%2FqtNSal1J7MNebJsh6ElX4WPf3YBX44vuzqRJWJz4PIFYREM82WDljuIsSQ8Y0f2B09BHz9dzHN%2BeDS2BuT%2FQpC0B4%2BDFKikw0wHjnCnK0vdTpAz%2BdDnUSs42SGQ9XYEJPmyl3VpA4VUx%2BUmPjv7CrdfaHUVXGrQruQMashHlR7jlGbuYlJXvsMOERLnWKNnWgsjKJGeFL93GRlosMj666ZQhaLrJgl5aznG3GhzZswl7OIVcqnq6XLWGEQtFrmaiMdgUI0TS8JWa4xLFowrqPRJ905OJwsSIoWjusFfgKtgVsOsZp0myJvRgvb3STusssaNz1tUzUC1tOnKce8m6FqXaUhsn6lFXyd8kXUQlmxKoiEBpVNhQYSuesMe6i4oiD6alSnFFJPO2ferVNroPlQsFqK70kUrCZzaY3LSFRj7ERu0o%2F%2B%2BdXSYxpBBy1UnTWcOjynbA8gkA5Wsq%2BHfFYbblsWVzjOMIH%2BGmJOYfSG2IVsr%2BWiR7I0eynToYpEl1CKSn51oxzw6zHrHBHP5W5LxzM2gmY4nw4uTidg97dHqPhxm%2BkXsDnHXQFM9CfGMqG7gsDlXoIm6bK43c5nMMSizsAGOqUB3IH6vhEAouexz89hdY6a%2FcTel4dyTf6jXYO456gRdk4z%2BKCjEfsBK%2FmNsfvjkC0fF%2FwMCSYfn95zlytUPPrYc2NdmXiNjrJtvJ917lNDGU7yhnL2MdcqoOCDjQdF%2FKTXbO8HkOE0SsQ0Haq41xs0Fc5ymIHsn7WNpf1oWvzkuuVqkzf99xLOwF4%2F6vPiqyoQrkDeX7x3k0n111STsqmoFHFilUff&X-Amz-Signature=61d328982b110363706c7251a0e153fa2d0a4b31655dc1df79878c9d544f5976&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UP3YBQ6%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAsIOZyok200ynb44xS0IHhMZXgNUf97HtNCH%2Fu3RE9LAiAlWkRRNo5hXCPEfk1ATRS1uYwpLccs5FrmoANd%2BdFImSqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtTr0eK1ae58YjBAKtwDb1TGohGZ3j2XgXlMY6HwkPTZ1uc3idRoiZkfzyv0ioW%2FbIX8f5WKV78ImwTnlKMVHBZdHkbJh9ZxEKiMELPhDXkvNcOHZOtUkPrq8czDXxJXxuy%2BzLmuwHa1kqdSz4rUFIHUEh%2BpOuNigJNyvwy68QpQEmazf%2F5QmaxogJAX%2FAIiGY8%2B5d%2FGLXpwVSad0bYBECA%2FemQVWs34gzk9hN%2FFPt3vdyJ4m5BB9cK58yYK9UzL8pqRpl%2Bs4Qrk7euHSdKgtnFQklVRuglEjBdS1MdoUT%2FKe1%2B5ROdy%2BaijdrYUz2vXnZuGeeufbI%2B2uh5fA6iFPSqR35ZfpICscS8gbekGnadIw44MF%2FUD4xU%2B7Tt8OtQhZUMUGBRmV2Skj%2BQECImS8CYAfNqF1UdmizFmNLkdE%2FGhX5mdpAReqqJiVS9Mdkl3ruFnXEmkIgK16wd%2Bnnf48fCq8dzPNl9SPtSSJKdbYwtLHyZTGqDa5UI4Rz%2FzNDgiNCeRpv48StnnMk8%2Bz0gBo3BgM34P10qEbKnRwlOYKQWfWzRJWGCoEmB19SciZlIdM319J6VH2WVVHGZOjeJgk2KS5HaaYpISRXreZGGXUoEVxpLe8694E9WTSWcNyaQqx%2FineEq6hN1rbv0wgaHOwAY6pgEpLdDrKHJLwgsQJcgyyI0BGDhL7aa1AYxr3J0dp6zyHZfiMN%2BqIihJUDlXDg%2FcNHT0DK6kdLlx42nZmlqWSVvuCVYGymAYMK1EX%2FIinsWXEC5YJe53FgJMtNYl40RgZcnJjk%2FC4pr7yOwSyJmvalCj%2FCtG66DFYiF5gHWoZPub9JTaAper5eQ0EdFDA2lhk4DvGPKjZPVFVx2qk6P17tl4LSKnkkQd&X-Amz-Signature=578277791ddccef1d5935ed7ace5a65e734142bb6dee2d998e89a7bc187be750&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BG55X7Z%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCHLXv3v0P5HTs34W9buS0dpsT1ama1VkRbypHL9Wk0mgIhAJ%2Bo%2BW92qoCHTpEBrmgPmQb89rIzv3yLhiD0Eii2ZJQsKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNs0YTYcbKBOAZOG8q3AOC%2BYDaXT3wbMuXqb1wTAA8e9XP6%2FY06q5MNUlhipJBd73UYsB0DifYB2sxrzL5Ofc9dMvU5ZIUuULhkgvXc6CxenMqXxfQ2U2q8dhaXzzdy3Oq5wUA3EMv8WYoeU6jPIebQ3Kq5qo9gOuJHsjyBWAXY8Yh28IeEnxriMUwEYXtcuLsIingTBH8gM7KVJOxE2ogYivUxpxAnuOH%2BDwjfEchNVczvxdhLieedgNmGX%2BTlndbeNifjAjVE8YXXSdHDBne3XPykkvCmKXj8GdI3%2FtN%2FQqgVihpTsukI24NJbqzZwjBUqPGbHDzHFmC0aKiye8ZXSDEDlS%2BZPjVOAVyO4hPWmYZHr5tPm2BDBt9M7qru3RKHX48vwyNWTlGM1AAz6cL41PqZHkm0MbgcUQ0zweXOezNAUixMx9jaFQKc7TgdaA4hpjDuyTvCjalGBl981pvIP85Hb%2FHzyCMQZPomLu5YfRL9l4HCZbxu8dq9P83ItIoxku7ciEHoqCHjA34THAFaG5LRoOyVzsv2ITxmq3Jq1ubXSjVwaZnbuhaPd%2FKQ3pBXmqLiG%2Blc5%2BB46ByQ0huOWjgMj97xGjUukukoGG6KsjR%2BzrXb%2B1GvWnQjES%2BjXJOAlNY9hukabDpWzD5oM7ABjqkAZ%2FlVhpoEbnE%2BrINFM%2BRxQP8rxf5249XF7x4HzUwuBAQ%2FQ680aYYHs6ZT3%2FwmL0QP0HNum59v4GhrGCY4lVu%2FUMCmNwSa%2BakvXFX1B7VeAC2nbOw8OJj1PCYgxlZszEzpNTVOWt0hNHAP76y6PjvOs2g3d%2B3g8LSEtLBphJcIHbqGf8zqNP6QH4TxkLE%2B8a87KEijIEYpS7a%2F2QQc1AWe6IP2PGV&X-Amz-Signature=6a9f4660e0dd58e1213c1c94bba3c73af653c2c2fbec45409477e24aa6288795&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
