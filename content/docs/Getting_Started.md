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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS5IGK5G%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFcojxvpzGMFrIHCt3%2FPptu4SfJf1wlln42%2Br5K8ynhuAiBYub48t7OKstfvkNdEG%2BHc8b8HaU543leWpSPb0B1whSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMBifFAXQXrgf6lsWqKtwDkEsUUIqedSMnb8rcaVLySS5YEoDSq8JKNlVgSGwNSDw3Yt9I9SB2p%2FPvocPQj3n1UTuPyeGgIQ1K%2B7BNVg%2B2G6wCV3O%2FyGChNVbZErpiJml3cKoWbEvbcJ6YFc%2FM6R4OCzY2hEiYG6%2Fmccm1Z5WpPiWZEooyDlVCzlen%2FtlYS5e2MYtDk9vialM%2BpNtRDw7fg2rONV7MnnIlcjJUIA5qFV5JsZtweA9J%2FaHl2AEHLNgQYLjgPG1wbAQFwRpIdq%2BuK8zuySo6qR1%2BXBUliqzHMemX49VwxthEqeFcF7oxoDvkxSOUtDRm1pXd5HlPEYpolKTQ8%2Bsv0pYNaXKg1oCdOQq6JqYwSpTMv93c%2BaVWkyB7hF9tMjVLei5PVgxUj2I7%2FT2A%2Fty%2FUtODzqlzN5qVWKt8h2j9D%2Fa8gFkKfOjsnhg9QnH%2FztJ0XMkffdwzAq6smFWZcG7qqLe0qnko4yvzTD0OCIwJE4nRqXYhp2yM6ATsPxgaZasb1JJHQU6P78GPQR%2BKevrm0NHGwmAQgnWymFJ5TQQnOk7QL8lNtnH0wZI93sH2gMvSS%2FQs8dshs%2B6u5ivcfMKBltFwP%2FRCZmYm1%2FplvbMPQ2AF3ZkEsD5eBZypIeJtvB%2B4E6k9dx4wxrq2wgY6pgEJvxanS%2FdVCNMjTJMfM4Z5c6KZddbeQNyzRF6QI0FHmBz%2Bhs6gpQR%2ByCXu%2BB%2B3l7hxqf0ZhkxlhMhv4PfVfUYjiY8cR1I4ovOLrHJfp55Dfa686dO8t1chAmWv0tOuekG55wZQ6MUeoA4bF3csh7oPOTPsnnMl%2FYfWjmcM5XFXpwcMwfrBAcLOyvYEbpKNJDVAfJvgmFUk%2BjqNLS470IsaNml29fQj&X-Amz-Signature=4e767715c04e0f5960134d9483305b329361ea095e325d22e5b28abd0fb86bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS5IGK5G%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFcojxvpzGMFrIHCt3%2FPptu4SfJf1wlln42%2Br5K8ynhuAiBYub48t7OKstfvkNdEG%2BHc8b8HaU543leWpSPb0B1whSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMBifFAXQXrgf6lsWqKtwDkEsUUIqedSMnb8rcaVLySS5YEoDSq8JKNlVgSGwNSDw3Yt9I9SB2p%2FPvocPQj3n1UTuPyeGgIQ1K%2B7BNVg%2B2G6wCV3O%2FyGChNVbZErpiJml3cKoWbEvbcJ6YFc%2FM6R4OCzY2hEiYG6%2Fmccm1Z5WpPiWZEooyDlVCzlen%2FtlYS5e2MYtDk9vialM%2BpNtRDw7fg2rONV7MnnIlcjJUIA5qFV5JsZtweA9J%2FaHl2AEHLNgQYLjgPG1wbAQFwRpIdq%2BuK8zuySo6qR1%2BXBUliqzHMemX49VwxthEqeFcF7oxoDvkxSOUtDRm1pXd5HlPEYpolKTQ8%2Bsv0pYNaXKg1oCdOQq6JqYwSpTMv93c%2BaVWkyB7hF9tMjVLei5PVgxUj2I7%2FT2A%2Fty%2FUtODzqlzN5qVWKt8h2j9D%2Fa8gFkKfOjsnhg9QnH%2FztJ0XMkffdwzAq6smFWZcG7qqLe0qnko4yvzTD0OCIwJE4nRqXYhp2yM6ATsPxgaZasb1JJHQU6P78GPQR%2BKevrm0NHGwmAQgnWymFJ5TQQnOk7QL8lNtnH0wZI93sH2gMvSS%2FQs8dshs%2B6u5ivcfMKBltFwP%2FRCZmYm1%2FplvbMPQ2AF3ZkEsD5eBZypIeJtvB%2B4E6k9dx4wxrq2wgY6pgEJvxanS%2FdVCNMjTJMfM4Z5c6KZddbeQNyzRF6QI0FHmBz%2Bhs6gpQR%2ByCXu%2BB%2B3l7hxqf0ZhkxlhMhv4PfVfUYjiY8cR1I4ovOLrHJfp55Dfa686dO8t1chAmWv0tOuekG55wZQ6MUeoA4bF3csh7oPOTPsnnMl%2FYfWjmcM5XFXpwcMwfrBAcLOyvYEbpKNJDVAfJvgmFUk%2BjqNLS470IsaNml29fQj&X-Amz-Signature=7de14b6bc1c241a6af6740078ffbe34648abd8efd5cc47782e9b89a0cd5946c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS5IGK5G%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFcojxvpzGMFrIHCt3%2FPptu4SfJf1wlln42%2Br5K8ynhuAiBYub48t7OKstfvkNdEG%2BHc8b8HaU543leWpSPb0B1whSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMBifFAXQXrgf6lsWqKtwDkEsUUIqedSMnb8rcaVLySS5YEoDSq8JKNlVgSGwNSDw3Yt9I9SB2p%2FPvocPQj3n1UTuPyeGgIQ1K%2B7BNVg%2B2G6wCV3O%2FyGChNVbZErpiJml3cKoWbEvbcJ6YFc%2FM6R4OCzY2hEiYG6%2Fmccm1Z5WpPiWZEooyDlVCzlen%2FtlYS5e2MYtDk9vialM%2BpNtRDw7fg2rONV7MnnIlcjJUIA5qFV5JsZtweA9J%2FaHl2AEHLNgQYLjgPG1wbAQFwRpIdq%2BuK8zuySo6qR1%2BXBUliqzHMemX49VwxthEqeFcF7oxoDvkxSOUtDRm1pXd5HlPEYpolKTQ8%2Bsv0pYNaXKg1oCdOQq6JqYwSpTMv93c%2BaVWkyB7hF9tMjVLei5PVgxUj2I7%2FT2A%2Fty%2FUtODzqlzN5qVWKt8h2j9D%2Fa8gFkKfOjsnhg9QnH%2FztJ0XMkffdwzAq6smFWZcG7qqLe0qnko4yvzTD0OCIwJE4nRqXYhp2yM6ATsPxgaZasb1JJHQU6P78GPQR%2BKevrm0NHGwmAQgnWymFJ5TQQnOk7QL8lNtnH0wZI93sH2gMvSS%2FQs8dshs%2B6u5ivcfMKBltFwP%2FRCZmYm1%2FplvbMPQ2AF3ZkEsD5eBZypIeJtvB%2B4E6k9dx4wxrq2wgY6pgEJvxanS%2FdVCNMjTJMfM4Z5c6KZddbeQNyzRF6QI0FHmBz%2Bhs6gpQR%2ByCXu%2BB%2B3l7hxqf0ZhkxlhMhv4PfVfUYjiY8cR1I4ovOLrHJfp55Dfa686dO8t1chAmWv0tOuekG55wZQ6MUeoA4bF3csh7oPOTPsnnMl%2FYfWjmcM5XFXpwcMwfrBAcLOyvYEbpKNJDVAfJvgmFUk%2BjqNLS470IsaNml29fQj&X-Amz-Signature=7f5a5761dd5d43ca23ba0df4901ee9c0ee8bc7122f8968ac0280b31acf9e929d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V77JUAC%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDycTaR%2F73%2FA4gnWS0yjoi58C9KayH72v8h2IBgKr4avwIgQueVfg3ulpJI59wmC3dbb2%2FsXQPh9HXdoWNuZRbPyxcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPaO0nBrDQX%2BgmXQ9CrcAwd0Qa59y%2BvOe%2Bg4x0aSnM%2BjLCAUvVEo1WT%2F5ECBWmsP9g5Jrs0kKhylzpyqrO5KXF0%2BiMDBzt4oUSysfgvZVP91RV5L8A1S1IQ5xJgsra%2F6NWKZkw3GbLsemnsaewc1MvSwhW0JYaits%2BbXxP7lv5mv41JYoiDdAzzXH0LojqF79k4EAcGLjVXy1s%2BTL6y15pYBdVKCRGR%2BnP8aCesd5mgd6o4t4GZxuyWKU7d7pKZE%2FVemfGvfdvLu6fQsz76R13wenD7NyYPUUJjbsnrrzf4I56YMm1PY0v0zRhI0OExGxZB9binMLONghFDO1QiTEz1TT5%2BHR7JNG4Rm0QyJH6xeKHLC8z0SYnok%2BA%2BQxiORdmP9aKQ3NYsUJwklVDydZSm14XoGRIgspGWc%2BTLVVs%2BBKlZjKvFh48dwS4MuCQk7Y%2FkyijGbH1pG%2F4OzlURApwNFWZEbG%2FsHpSMG8YceCSHpCC5BJ%2B6dvoe4mLWFZWmerj2kZk5f52R7uctWJde2HoCqMJH8xTHBsyGeUE510U%2BeGmf1%2Bhpo18c8WXV4W7GFXPB2tW8ISZY%2FIrAwu29UEOYLLbtX5q2ps%2BGJDMczSC42FNFm18WooNlZzzH1rO%2Bk9cEmEGgbPJWWLxyPMJS7tsIGOqUBfs892LlFPND%2FIFQ4DQ6J%2BHQyprMEtukNzociFFcj2JtYT25qKguhSPD0il%2FRasHu%2FJr0zE9b6hmxXWfQmg7Vsu%2Ft590MyNGuQ23AvBqMKoUKj87drm8M2am02xgrYNKxqt%2Fw2zffjPQiKHZaybsmxlT6pdd7QZCWtZitFDiXv55bQS5DlAzaHkFuZH3DIdZ525RATEuiVv3IINuYT95QbRuJ%2F%2BGr&X-Amz-Signature=4f705721312eac790c0431da42df4c4563b6e855258111223658725261246a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHC6MDV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDEay28XSrpcFMy3UxAE0n%2FcYEMQM05x7edLCujXc%2F%2FBQIhAPJth%2FW8jworefRx%2FK1%2B37pGUQRYy38NuAyOg2SDRpWJKv8DCDEQABoMNjM3NDIzMTgzODA1IgxIhQBbNCYmf19xqp4q3AP3cFqV0HkjIQkynx59KZBNmI694GAJYp6%2FUAAHxLzEXD0tX9lBo2zSPqHkcsCX3z6VCYIN3uT0aCmDo0Ehl8HI4ZSQz9wlNQJ3eXeFml5Sx9uzY%2FSQY0oaOgAM3307Sr0rbsAlIzWKJk0ZfSCV6BA%2FG10bUNF2HwhnutJctuzHfgsQ1xaDC1qMqqYHUuQ79RtsHXSpjg0wHUq2Tiud77IduBayBCaCbDSaOCHBUSTnzXT4RZ%2BY7iphiJQn%2BtBBoKiyENm6VOhZ52ZHE%2BACGKDH6dwILJdGjcJIYdyerMgzmGTWMLSAMRPVCsrhLqMC0MRG6IVpmIhhm3rE%2FXjDBJ4tJjy%2BeXGqnPVdBxyJs0gpnTXOwK%2F2xMlirwcNL3OEx8Fv%2FCAjsEJLBtYGMKV6H%2FYpN1hpyS7aAYacW4KEnrD7IE4leiVMSrOhvh4mnwBhPTIqWs57v7WpB9pKojn07Ss0%2BTYSEpbssfF3uBZVzPpEoHyUR2mTpgrnB42L7vD%2Fr7TR4kMCmz0Q6lVZEC1bPgP9iwQ1AWgMdd99ZDGNIZ3WITcorrw97TB8a1XKLvmtBT7rzR3N%2BAxYuT1V4IMqQVoeCwE7eNOjOz7t%2BusD168PWDPaesGZM18mG7cc5TCZu7bCBjqkAe%2F4GGyG9KzEZ4EZwpycxT3k3vMVAhnFEVjy4Ic1egV5wyvVTOsqIY8RLLq6h0Do4IS5%2FVTH%2BS3dJD%2By6qtp%2FdrQt2fz7ZLE1PyHlJNbcuYA7PaalwpsyoPufwFVbmYXLhZQL7O7i34amsmFMGDksjmWA1CA5poGiKMzIkth6%2B7JG1TaRWs5Y2x9N42DfxENhGHfOak7c148BUB6eVFPHF%2BkKAox&X-Amz-Signature=bbe0ed6bee2a7e05929250fbfc405f09bc2784c416dae7aaf96355ef54bdae8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS5IGK5G%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFcojxvpzGMFrIHCt3%2FPptu4SfJf1wlln42%2Br5K8ynhuAiBYub48t7OKstfvkNdEG%2BHc8b8HaU543leWpSPb0B1whSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMBifFAXQXrgf6lsWqKtwDkEsUUIqedSMnb8rcaVLySS5YEoDSq8JKNlVgSGwNSDw3Yt9I9SB2p%2FPvocPQj3n1UTuPyeGgIQ1K%2B7BNVg%2B2G6wCV3O%2FyGChNVbZErpiJml3cKoWbEvbcJ6YFc%2FM6R4OCzY2hEiYG6%2Fmccm1Z5WpPiWZEooyDlVCzlen%2FtlYS5e2MYtDk9vialM%2BpNtRDw7fg2rONV7MnnIlcjJUIA5qFV5JsZtweA9J%2FaHl2AEHLNgQYLjgPG1wbAQFwRpIdq%2BuK8zuySo6qR1%2BXBUliqzHMemX49VwxthEqeFcF7oxoDvkxSOUtDRm1pXd5HlPEYpolKTQ8%2Bsv0pYNaXKg1oCdOQq6JqYwSpTMv93c%2BaVWkyB7hF9tMjVLei5PVgxUj2I7%2FT2A%2Fty%2FUtODzqlzN5qVWKt8h2j9D%2Fa8gFkKfOjsnhg9QnH%2FztJ0XMkffdwzAq6smFWZcG7qqLe0qnko4yvzTD0OCIwJE4nRqXYhp2yM6ATsPxgaZasb1JJHQU6P78GPQR%2BKevrm0NHGwmAQgnWymFJ5TQQnOk7QL8lNtnH0wZI93sH2gMvSS%2FQs8dshs%2B6u5ivcfMKBltFwP%2FRCZmYm1%2FplvbMPQ2AF3ZkEsD5eBZypIeJtvB%2B4E6k9dx4wxrq2wgY6pgEJvxanS%2FdVCNMjTJMfM4Z5c6KZddbeQNyzRF6QI0FHmBz%2Bhs6gpQR%2ByCXu%2BB%2B3l7hxqf0ZhkxlhMhv4PfVfUYjiY8cR1I4ovOLrHJfp55Dfa686dO8t1chAmWv0tOuekG55wZQ6MUeoA4bF3csh7oPOTPsnnMl%2FYfWjmcM5XFXpwcMwfrBAcLOyvYEbpKNJDVAfJvgmFUk%2BjqNLS470IsaNml29fQj&X-Amz-Signature=9f9c3c71f99a07f129bc34a939ae93a4d132e0aca2aca3f5c08ffd9690210846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
