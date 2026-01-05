---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWX7QPHD%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFqU0Ni%2F%2FVaNtgunHfYk9mdYwmag9yV9hMLg%2BMbdEJbWAiEA7h8FKepnE5dzG84wCLJCueSZ%2FCoxkYPxd48SQTt8xmoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBc4y8BA3mUTX25n8SrcA1HXlsnGdhjFi%2FVUb5GBkX0C8N2wm53tyWMosFuJsqij5vlot4PHo8O26Yyd4qjir%2BeUaalpBQqOhav5sPz3zi%2FZR6PXhqTkZQZ7WBeztQOxQvmDl5oJohMg%2BbZwrXGM9IjVghYKhikx7dn%2Fi1l8bzxFB4lh7pylcWrbRxiLgxTu0eopKByDyqocO20AETWAE6K5TwnEVICQjBFpUtwxsRctPWqXuDcL3uTeBJiQgEQZ1JCGolWJQVJJQz%2BWiy%2BcmLnWTQugt90g3Ds2iPKcFwwO6CMxBhTqfP30pnDe1kkSdqycYcQONIwW5rCs5xDbKZZxxFiDkLE9MYEwoW67Pe4daVGGIiUw50AKPO0uPvpju%2BOLYVGGQ4wP9IneeO10EuKxrHh5sUniKLXqAucc4kMGAmiZQV6Qfr4PJOJBn80qGy30sx2dGHc8qSQQTr4XVOx%2BK6c9FpGNIvv7rqnLceVHPgrVsgPsUt%2BHnVEe%2FBE1%2Fmo5Uca1Gq7MH7WLIbRwI1%2BHZ7MxpuQWn15dXkAIcjt6ND2ZgnM3bXvYhbrYQ1jpUOt%2F%2BH%2Fgkcv%2BsdzjWcbUaYwliohpS4PgLfUGAgDBHNB1GksG3pjUt30nbVTa7%2FPaWlMIyf1ZP48c%2BGsSMKaV68oGOqUBZNZ%2FO9o1E3B4HMxl0V%2Bn2TlClf0km8eslXKSvHUiQ6OpAIUqzvzx0gDQ8pcVAt6y%2FhgDrh4sx6ULkn6s1YbaVRI0reAbPKZaLYszD%2FBIH%2FbCtG8hg0fKCbEcGhJlVIZ1jsym7VSQJulFMs6TiWuh840dHsjTOdljy1GP1ww8dtj4woz%2Bn7CsMIbHcjsylcrn9r2t8iGvYB7hC5KEDEFx%2Byb4amVd&X-Amz-Signature=fb61e409b56b542b93d16f5b802ccbfe04a495d6a02ab127f7aaea012f6987fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWX7QPHD%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFqU0Ni%2F%2FVaNtgunHfYk9mdYwmag9yV9hMLg%2BMbdEJbWAiEA7h8FKepnE5dzG84wCLJCueSZ%2FCoxkYPxd48SQTt8xmoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBc4y8BA3mUTX25n8SrcA1HXlsnGdhjFi%2FVUb5GBkX0C8N2wm53tyWMosFuJsqij5vlot4PHo8O26Yyd4qjir%2BeUaalpBQqOhav5sPz3zi%2FZR6PXhqTkZQZ7WBeztQOxQvmDl5oJohMg%2BbZwrXGM9IjVghYKhikx7dn%2Fi1l8bzxFB4lh7pylcWrbRxiLgxTu0eopKByDyqocO20AETWAE6K5TwnEVICQjBFpUtwxsRctPWqXuDcL3uTeBJiQgEQZ1JCGolWJQVJJQz%2BWiy%2BcmLnWTQugt90g3Ds2iPKcFwwO6CMxBhTqfP30pnDe1kkSdqycYcQONIwW5rCs5xDbKZZxxFiDkLE9MYEwoW67Pe4daVGGIiUw50AKPO0uPvpju%2BOLYVGGQ4wP9IneeO10EuKxrHh5sUniKLXqAucc4kMGAmiZQV6Qfr4PJOJBn80qGy30sx2dGHc8qSQQTr4XVOx%2BK6c9FpGNIvv7rqnLceVHPgrVsgPsUt%2BHnVEe%2FBE1%2Fmo5Uca1Gq7MH7WLIbRwI1%2BHZ7MxpuQWn15dXkAIcjt6ND2ZgnM3bXvYhbrYQ1jpUOt%2F%2BH%2Fgkcv%2BsdzjWcbUaYwliohpS4PgLfUGAgDBHNB1GksG3pjUt30nbVTa7%2FPaWlMIyf1ZP48c%2BGsSMKaV68oGOqUBZNZ%2FO9o1E3B4HMxl0V%2Bn2TlClf0km8eslXKSvHUiQ6OpAIUqzvzx0gDQ8pcVAt6y%2FhgDrh4sx6ULkn6s1YbaVRI0reAbPKZaLYszD%2FBIH%2FbCtG8hg0fKCbEcGhJlVIZ1jsym7VSQJulFMs6TiWuh840dHsjTOdljy1GP1ww8dtj4woz%2Bn7CsMIbHcjsylcrn9r2t8iGvYB7hC5KEDEFx%2Byb4amVd&X-Amz-Signature=13d59e04d3fb5d24dda11d7d9aac912e5b87794ef76e4b64f1a60a364f5e6313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWX7QPHD%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFqU0Ni%2F%2FVaNtgunHfYk9mdYwmag9yV9hMLg%2BMbdEJbWAiEA7h8FKepnE5dzG84wCLJCueSZ%2FCoxkYPxd48SQTt8xmoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBc4y8BA3mUTX25n8SrcA1HXlsnGdhjFi%2FVUb5GBkX0C8N2wm53tyWMosFuJsqij5vlot4PHo8O26Yyd4qjir%2BeUaalpBQqOhav5sPz3zi%2FZR6PXhqTkZQZ7WBeztQOxQvmDl5oJohMg%2BbZwrXGM9IjVghYKhikx7dn%2Fi1l8bzxFB4lh7pylcWrbRxiLgxTu0eopKByDyqocO20AETWAE6K5TwnEVICQjBFpUtwxsRctPWqXuDcL3uTeBJiQgEQZ1JCGolWJQVJJQz%2BWiy%2BcmLnWTQugt90g3Ds2iPKcFwwO6CMxBhTqfP30pnDe1kkSdqycYcQONIwW5rCs5xDbKZZxxFiDkLE9MYEwoW67Pe4daVGGIiUw50AKPO0uPvpju%2BOLYVGGQ4wP9IneeO10EuKxrHh5sUniKLXqAucc4kMGAmiZQV6Qfr4PJOJBn80qGy30sx2dGHc8qSQQTr4XVOx%2BK6c9FpGNIvv7rqnLceVHPgrVsgPsUt%2BHnVEe%2FBE1%2Fmo5Uca1Gq7MH7WLIbRwI1%2BHZ7MxpuQWn15dXkAIcjt6ND2ZgnM3bXvYhbrYQ1jpUOt%2F%2BH%2Fgkcv%2BsdzjWcbUaYwliohpS4PgLfUGAgDBHNB1GksG3pjUt30nbVTa7%2FPaWlMIyf1ZP48c%2BGsSMKaV68oGOqUBZNZ%2FO9o1E3B4HMxl0V%2Bn2TlClf0km8eslXKSvHUiQ6OpAIUqzvzx0gDQ8pcVAt6y%2FhgDrh4sx6ULkn6s1YbaVRI0reAbPKZaLYszD%2FBIH%2FbCtG8hg0fKCbEcGhJlVIZ1jsym7VSQJulFMs6TiWuh840dHsjTOdljy1GP1ww8dtj4woz%2Bn7CsMIbHcjsylcrn9r2t8iGvYB7hC5KEDEFx%2Byb4amVd&X-Amz-Signature=3eebb3c888f3d1f9f1d931bce58697b415b5999b9c6791459566a3b7782bf0d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466632P3GIU%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD1BPdIOwFs%2BDNaz%2B7uThmfH%2Biaoan3LM%2BlNpSqdN67cQIgTjnUpC5FaX8nEurbZLWYZlPlqTl2MtuavssFB5lvgqYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLm29pgtEA7rErSWgSrcAyNNo%2Bzh7Y57cmEEhpxytZpGLSVJ6qUlHRLglmCBYBmrFfbrByxhRVNSYAPMBi1bnkNF1DQU8DFs529OnmvL3EVFrbTCN2w7GQVLNWtsa3RcEsXbqIPC4gv6eZdUnlO4B4Q1g8WABsVuxnhvb0Iy5Q%2BkmO3pbNEM3lYywGJYg%2BkGxZJOqKzrdkeRzPqoiaqRZX97%2FQIhv5uyR5dNAYdl8f8I9Z%2FY6c7RdH%2Fkeb7TxdqP1PuJvaDo0KFqAC8sRHtPls2%2FAOQIrwVEjPxkiz2oyUOykp3uEYEVYhnG%2FanbjnRaF4v%2FiWycFmqdR8BpczzHRegRgl4eYo9yCVCAYuUstnFpGNIS3wyJy9capvRY2Kqxk0q6BJ6OfIHRH4SG%2FZ1E%2BdZAPejzZV2LC0IE25taoLeXR2wAd6ukPDPwBmBVXbrW%2FqlzuRJ5vur7T2YXhM96FvoaeucMOfctJBr3GG7swt%2BTyYKzl2%2B1HWRlFqbq%2F88rGHHwpEiYDVkDkc%2FgjkYoRPi4yoW5g8n%2BiKPKBD0yAXPWqdsuBvqTJ0u4jtFqRsjfPo%2Bk8qkxjcUf3TKBKie%2BmadEhfIaPlXbuk4NHjrnkcfgUqZVdvSuN%2FZxiIzL4%2Fy7TjJr2aNrcixu9YfjML%2Fd68oGOqUB3V4JYTp0YhNkALyBB7%2FAnt7%2Bc%2FYJqMs3pdN8WOINMDZ2Q2DEGuvFtfZaXszaiaHHlaziz6QD9Lk0kUbibIch9mrpJA8%2BNGWnWLdTn1%2Bq%2BIk72U851gsyqJ8xM7ca2DQVduIW3TmBdZ8DoBsxWlD6zmSAPg4xrHetMPr4uPqs2UmRN2TiHnKESlzqArlW9NKxNlkyaCpr5fkXGhjfQFttZgHPthcL&X-Amz-Signature=410ca1dfbb12fd42341f41606b14e4622028ca5d1afbd4bceeace343021f9c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK77NEX3%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEPL1Sv8O1Jq3%2BcsqhjeYrwD5bIjOEFFAl9cy0ktw5g3AiBHR6u%2FiOoZauQ6i6xLNsw38CLe1%2BV1Tk6uN8cX7avMuir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMgEjMtqUO1mmuCuTFKtwDTrskZr9PloUM98KdOPrGcOwOF%2FDkGISlMn9dCB%2F4qjCfGODhq%2F6F%2B5qD4UMNrQgm60cuuEE%2FRVVG0rFHJ3LiZLOsZrbqUTPhyY5eSvLaWq1jP91RIVRtA%2BVSMo0SL4%2FlaLyEAoOdQlSit4KdyXZhYHONSZNpVkybom68%2BpBYOHfj37W16k0u2%2FWrQ3h7pMp5dz24dszmgmeuhRoH195FP%2FceHP6sdrDs8KlaxalCdjddIVJ%2Fn4dKZYFzdcxQ%2FXAPAB%2Bnbb1Pex0J7x4TuD1OBEdfthvr6tKDp0uino3tKFZTIfXWa40OEnP84oaF72DJX9Zb%2BfJJ3dA3%2BBsxi%2BZKnHp2jABrDzAfqjVZYShBQmXAHAyNfdvyq%2F3xRn%2FL7sOI6wvNX9O5a%2BWWjRwhGcdM6hf1mto%2BbAtYPV64VdS3LniUgsKklr7mvIqJ%2BMK3pN9nwMr%2BIdQvZgFZxm%2FixkgybsVtcANJmPF5cJjPOybvTt2xWldjJ9FFvi8DjK0tI8af0Ptfv8pt7UJHr0ONMzHYTwrxpe77vRQJUkk7gUjljPl6hUuc86S7hIXJmEhwPt%2FRTF65JaNnUiktuGS0Jt3IXKkF0EmS%2BSxWxt2ZrFYvcxgG5%2FHBdsDuw1S%2B0IYwk%2FrrygY6pgGXu0cV%2BUHIeY3bvc%2FzqqUmcP%2B18EXwijS4YnYKnnHg%2BIu0OWyK8SMQRN%2Fk760J%2FXGQj%2BeS8OgKPTVFZ7opyR100%2BEMFTdiU6a%2BLs9GH3Xe4cxU1q6v19xDjDhJebWBjJ7nOSsMafQ%2BHiOdFeUiOf8gp3v%2Bmli5Md4bw%2BwKaBdvyCN%2B8jgxv13KbSuZP1pMOcaMGKxDk0%2FnmJ3xFlBH3ABhLUofICRQ&X-Amz-Signature=3366fa8440fede704811d7a28a9819f5176196fd34caca3899f289e8bd89da95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWX7QPHD%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFqU0Ni%2F%2FVaNtgunHfYk9mdYwmag9yV9hMLg%2BMbdEJbWAiEA7h8FKepnE5dzG84wCLJCueSZ%2FCoxkYPxd48SQTt8xmoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBc4y8BA3mUTX25n8SrcA1HXlsnGdhjFi%2FVUb5GBkX0C8N2wm53tyWMosFuJsqij5vlot4PHo8O26Yyd4qjir%2BeUaalpBQqOhav5sPz3zi%2FZR6PXhqTkZQZ7WBeztQOxQvmDl5oJohMg%2BbZwrXGM9IjVghYKhikx7dn%2Fi1l8bzxFB4lh7pylcWrbRxiLgxTu0eopKByDyqocO20AETWAE6K5TwnEVICQjBFpUtwxsRctPWqXuDcL3uTeBJiQgEQZ1JCGolWJQVJJQz%2BWiy%2BcmLnWTQugt90g3Ds2iPKcFwwO6CMxBhTqfP30pnDe1kkSdqycYcQONIwW5rCs5xDbKZZxxFiDkLE9MYEwoW67Pe4daVGGIiUw50AKPO0uPvpju%2BOLYVGGQ4wP9IneeO10EuKxrHh5sUniKLXqAucc4kMGAmiZQV6Qfr4PJOJBn80qGy30sx2dGHc8qSQQTr4XVOx%2BK6c9FpGNIvv7rqnLceVHPgrVsgPsUt%2BHnVEe%2FBE1%2Fmo5Uca1Gq7MH7WLIbRwI1%2BHZ7MxpuQWn15dXkAIcjt6ND2ZgnM3bXvYhbrYQ1jpUOt%2F%2BH%2Fgkcv%2BsdzjWcbUaYwliohpS4PgLfUGAgDBHNB1GksG3pjUt30nbVTa7%2FPaWlMIyf1ZP48c%2BGsSMKaV68oGOqUBZNZ%2FO9o1E3B4HMxl0V%2Bn2TlClf0km8eslXKSvHUiQ6OpAIUqzvzx0gDQ8pcVAt6y%2FhgDrh4sx6ULkn6s1YbaVRI0reAbPKZaLYszD%2FBIH%2FbCtG8hg0fKCbEcGhJlVIZ1jsym7VSQJulFMs6TiWuh840dHsjTOdljy1GP1ww8dtj4woz%2Bn7CsMIbHcjsylcrn9r2t8iGvYB7hC5KEDEFx%2Byb4amVd&X-Amz-Signature=bb6e3da58c0980f5ff52f2f951b8f98f5ca07fafc98ab04efb5f03924b425126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
