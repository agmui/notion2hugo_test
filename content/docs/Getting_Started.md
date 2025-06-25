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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AW3V2T6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCKYYEItI4lKwXDL77Zy44z0RN%2ButhRijxs7B1dJBKVNQIgWjIgvnhn5InFZIkLigU8zKoDwgY2D6boENuw2kXc2R0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFZdFIes83dTDlBQMyrcA021tYXoi1WKOJhfttN2GzUTCu2nzrVCSpPwdQxFkET1Nnp2aybxg8zrvu1UPAurN4BNbj8KVBbn%2BXegIXxrRz4l0S6Ps11I09sydb9Gqp1v%2BP%2FpnvUIlJzL9byIelAme3EaDaeFLBG0XtUI%2Bo3yUpHjFzsbtPQr5IErbMNQzdZ7U766KGC30dzCxmUjTNgGi2X3vDPIa4WGkFs0RNLrOTIG5nRax2r4yES3HLDP7cJvdF%2FwKZ%2BL4yp5aGwCLqwSh9YV2UOlBy3AkjDYUeSJIBc3uFOZspojcqQYT77fLxdK5yyVe2T4E03Hc7QFqZDiUj8bfQTSVZcmKFdxJNLzAxYyyfhvzf2Po86i24V%2B87Hugp5xJhk8JzT1IcDTZUvD9Drl66urjkBGbuQUseGSbS92I7Dp9C8jnkRRvuADMx2458uCqRf5h3DN%2Ff5XdccK6sbuGoRbXWlJAwxx38e%2BU3C8oYoeFrVrlk%2BMMBtWuriUdx7CvDCUsSYIYdiWIk0qFPIsvLCY1cCKgEIRYGrGGIPT%2B%2Fe0rpkGkl4MRgbIbJy2waEFl06NzvENNrmIHGp4YSO2BaL%2BWMuhRnk0wtHbxx8Gc02%2BWTVlGwRJ5c61A64OhBeDO4RnxglizFF9MJ2P78IGOqUBuILThWzVcG7Klrgb3%2FbXw8pxAw%2FOM4RzY1Q8CFifD5SEA%2FhdyTynufHAE2goVbQWtsAUVipXoesWSigJIz7YNgoYjm%2FvmkF10owStcKzTHjYc4Wjq3gd7L2I9Qpxqlls2ITSNJ39tMNN%2Ffd%2Fpe2QUmFQWoDqM7aqVPpGhqSmOdhV87ZgOdrIDUSweybI8ZogLHpTYCh0jkaF%2BeZLiBht2krxfduB&X-Amz-Signature=7ebca9ee4b638be573b2015626c7ac2cf30753ddc87e2505dc096b154a990b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AW3V2T6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCKYYEItI4lKwXDL77Zy44z0RN%2ButhRijxs7B1dJBKVNQIgWjIgvnhn5InFZIkLigU8zKoDwgY2D6boENuw2kXc2R0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFZdFIes83dTDlBQMyrcA021tYXoi1WKOJhfttN2GzUTCu2nzrVCSpPwdQxFkET1Nnp2aybxg8zrvu1UPAurN4BNbj8KVBbn%2BXegIXxrRz4l0S6Ps11I09sydb9Gqp1v%2BP%2FpnvUIlJzL9byIelAme3EaDaeFLBG0XtUI%2Bo3yUpHjFzsbtPQr5IErbMNQzdZ7U766KGC30dzCxmUjTNgGi2X3vDPIa4WGkFs0RNLrOTIG5nRax2r4yES3HLDP7cJvdF%2FwKZ%2BL4yp5aGwCLqwSh9YV2UOlBy3AkjDYUeSJIBc3uFOZspojcqQYT77fLxdK5yyVe2T4E03Hc7QFqZDiUj8bfQTSVZcmKFdxJNLzAxYyyfhvzf2Po86i24V%2B87Hugp5xJhk8JzT1IcDTZUvD9Drl66urjkBGbuQUseGSbS92I7Dp9C8jnkRRvuADMx2458uCqRf5h3DN%2Ff5XdccK6sbuGoRbXWlJAwxx38e%2BU3C8oYoeFrVrlk%2BMMBtWuriUdx7CvDCUsSYIYdiWIk0qFPIsvLCY1cCKgEIRYGrGGIPT%2B%2Fe0rpkGkl4MRgbIbJy2waEFl06NzvENNrmIHGp4YSO2BaL%2BWMuhRnk0wtHbxx8Gc02%2BWTVlGwRJ5c61A64OhBeDO4RnxglizFF9MJ2P78IGOqUBuILThWzVcG7Klrgb3%2FbXw8pxAw%2FOM4RzY1Q8CFifD5SEA%2FhdyTynufHAE2goVbQWtsAUVipXoesWSigJIz7YNgoYjm%2FvmkF10owStcKzTHjYc4Wjq3gd7L2I9Qpxqlls2ITSNJ39tMNN%2Ffd%2Fpe2QUmFQWoDqM7aqVPpGhqSmOdhV87ZgOdrIDUSweybI8ZogLHpTYCh0jkaF%2BeZLiBht2krxfduB&X-Amz-Signature=20aaf9d6633b195449d2f84aa7fb76cc137fbf4ee826f1ed2db144ee3dd60c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AW3V2T6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCKYYEItI4lKwXDL77Zy44z0RN%2ButhRijxs7B1dJBKVNQIgWjIgvnhn5InFZIkLigU8zKoDwgY2D6boENuw2kXc2R0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFZdFIes83dTDlBQMyrcA021tYXoi1WKOJhfttN2GzUTCu2nzrVCSpPwdQxFkET1Nnp2aybxg8zrvu1UPAurN4BNbj8KVBbn%2BXegIXxrRz4l0S6Ps11I09sydb9Gqp1v%2BP%2FpnvUIlJzL9byIelAme3EaDaeFLBG0XtUI%2Bo3yUpHjFzsbtPQr5IErbMNQzdZ7U766KGC30dzCxmUjTNgGi2X3vDPIa4WGkFs0RNLrOTIG5nRax2r4yES3HLDP7cJvdF%2FwKZ%2BL4yp5aGwCLqwSh9YV2UOlBy3AkjDYUeSJIBc3uFOZspojcqQYT77fLxdK5yyVe2T4E03Hc7QFqZDiUj8bfQTSVZcmKFdxJNLzAxYyyfhvzf2Po86i24V%2B87Hugp5xJhk8JzT1IcDTZUvD9Drl66urjkBGbuQUseGSbS92I7Dp9C8jnkRRvuADMx2458uCqRf5h3DN%2Ff5XdccK6sbuGoRbXWlJAwxx38e%2BU3C8oYoeFrVrlk%2BMMBtWuriUdx7CvDCUsSYIYdiWIk0qFPIsvLCY1cCKgEIRYGrGGIPT%2B%2Fe0rpkGkl4MRgbIbJy2waEFl06NzvENNrmIHGp4YSO2BaL%2BWMuhRnk0wtHbxx8Gc02%2BWTVlGwRJ5c61A64OhBeDO4RnxglizFF9MJ2P78IGOqUBuILThWzVcG7Klrgb3%2FbXw8pxAw%2FOM4RzY1Q8CFifD5SEA%2FhdyTynufHAE2goVbQWtsAUVipXoesWSigJIz7YNgoYjm%2FvmkF10owStcKzTHjYc4Wjq3gd7L2I9Qpxqlls2ITSNJ39tMNN%2Ffd%2Fpe2QUmFQWoDqM7aqVPpGhqSmOdhV87ZgOdrIDUSweybI8ZogLHpTYCh0jkaF%2BeZLiBht2krxfduB&X-Amz-Signature=61ac65d76b354bcdbd13a295d610751600293240ab536f4dd82048ee427f5ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CI7NQ6F%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIBAro6CZh3nYwzc%2ByQk7fqNavikdfjCTyKzCsjIOoRukAiAYBQAYEpynjuwRUFeJUwyUOQNwSXjSj3JF0xfR7MGeCCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMI7oiAtEzkPIBAvzYKtwDLn4j4AdL1eMO8REzy%2BnfHNhSbnoMcCVwBUyDLO%2B%2Ff8YWEuZnNUffZPuThCohZEsDXp0V2dMJQlJlXt8YZ28PwmEg9VoJKKg8oVSZ18C8JKyoNTe2g%2F8TLAymtErXDXXyPw73ylRiyiiMYKK3XLTLsfIQUe2ZDZHBYNakkhjYKgMIarcNvbrkRpArYmEvTvz1koomRLZknmdsoJWJMa5T198%2Fh5O6nEoSpRevReB62hhln9ebf8yggbw9bDwF4ZspW1MOamTSCe2UyzO%2BsUpHnCO%2BJ1xwVKs8a9NmN8ZDrACpVTTvv3cJxBJruk5fmF72IpGpcrhK0P8ed1QOa%2BH3lVnicfFXMCusrINFLTwZcObh2MvLCVU%2Fpx8s5YLlkolR%2Bj9oWV4oaFG0RD6P6ptq%2FSw9Y9AVzDAOsD1db35GJk2lCwRv4js4gU4%2BaFXvDFx400CzAMig91F66FO3vmTQjzZrnsbFX6tyviymYj7E25SPUJkQqwOoGUS8F5HwCG2o%2F1GS4K6ZtTFoo8FzsJvoHPYNTP7oD86pJ%2FniT0JyDKe59aQW77LP%2FWr8qC4wlpfhiZybAYqFOECGFmJ4%2B1W9ZBkea%2Bh7oEaCJevr1C23BqDZZfwPb3FCfinESn0wxZDvwgY6pgEbLGHwuW9RRKFnzoDSKnswT5k8GrbbkqG2ysoUj46lfSYrbrExI0mJLsQj5VZjqJltcuwupfxC4Sh%2BrWU8G7iMVs9qAVSUCGde4rCHqFX4HeRWEqzkuFd5vbe9UmLPR5SGHou8chAHZQch2Oq7mKr4OSN%2FNDyEmjAXOaFzsQhodKwq%2FjeT4C6LQw01dB%2FSssL8UFbSbqNLGqYHumTSn2%2BZVOziXP17&X-Amz-Signature=e96fdbce1aaaa24bc26865e58102d45d8bdac478426cc31e154ce83bbb3368d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDHVZB2Z%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCffsCFUmcS%2BRpQ7Nzp3rqJXHfrTBxd4%2Bg6eRjDurABewIgX0oElyJDQ2yoIQwNZtx2Dy%2B39HZqlqEevmmdVROrwk0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMg795uE6ZkKuqEvdSrcA%2Begul1YdBdIeh9mNvH%2FUpr%2BX5vf%2BkpdmaGYOT7rvBXXLVZrkKA4IXaqIUFB6dB0BOFiIT9j%2BNFxXOnLdCP2rZuDhLF3gSZnKWJ9hwX2Js7zk610Nd17MxRgeraNDEo%2Bzkph9ay02lsgJtoXkpIoz%2FaQx3siHbljAy6cirHrZYYDB5dLfsfSQve3QrK1%2Fd5XFgpCudaOeBXRfeUeTzJGuUYIt1FOGWL30IywdyxpO09t%2FA0MFVAYz3f8jqbRk8N%2Bt7y5ApB7cyKeMaVziv2pGgdZoof%2FZv5xikM4%2FPVHLSONR9C01PJ3TgLIzsh4rkKxza8rKgtmH7xGmKD0fuiY0NbidlDAI2umOgB%2FWoW2c9HJbItFQyRKpjsb1NP0T2corzvCAq40QFk5TekwS4BVZ6oGKiklNdtwxQC0ax3hQr2554WTJT3I27hStJeZQVht25CYSL%2BbEavsLpoQzrmTihDz%2BP9qFRancinfhsR9qiGaNAaB%2FGfmZChFF%2F2LPMg7VdlGqZVgdHNgUfxrF%2BqzbHZIWFCHoUVOWHnYoQ0z6i5xPLEi70KOTwuHd7JB0QHKLfPHuOSntEQKM85cWq1u4xizuPymUG%2BCkEswBJSgHG1boTsAo9nAEMvDF3RJMLOP78IGOqUBGgCsxuSK6kY728Z%2F2tku%2BciTAm9RUAYiOGMC3ZLEHjhfBkk9awwv6jYM2wKOxRbDkxtSOJbm7Zr6pDY6cqrHGbFDyGtdib6madAynPVOYdqoEukEYdYiRjinl7sWvQ30vLmx0wd2GSfHpwGWGFmWTX9vyUF%2BWtx1XLjgOLG2KDwisFC9%2FBVntJ5LodB%2BH%2Fdn8okF2Q%2F8CpPhWWQhViilsUBubGDl&X-Amz-Signature=b3373a752a3c616967f668bc33cf65c37a53967cacd23ad9bcda36f992749226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AW3V2T6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCKYYEItI4lKwXDL77Zy44z0RN%2ButhRijxs7B1dJBKVNQIgWjIgvnhn5InFZIkLigU8zKoDwgY2D6boENuw2kXc2R0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFZdFIes83dTDlBQMyrcA021tYXoi1WKOJhfttN2GzUTCu2nzrVCSpPwdQxFkET1Nnp2aybxg8zrvu1UPAurN4BNbj8KVBbn%2BXegIXxrRz4l0S6Ps11I09sydb9Gqp1v%2BP%2FpnvUIlJzL9byIelAme3EaDaeFLBG0XtUI%2Bo3yUpHjFzsbtPQr5IErbMNQzdZ7U766KGC30dzCxmUjTNgGi2X3vDPIa4WGkFs0RNLrOTIG5nRax2r4yES3HLDP7cJvdF%2FwKZ%2BL4yp5aGwCLqwSh9YV2UOlBy3AkjDYUeSJIBc3uFOZspojcqQYT77fLxdK5yyVe2T4E03Hc7QFqZDiUj8bfQTSVZcmKFdxJNLzAxYyyfhvzf2Po86i24V%2B87Hugp5xJhk8JzT1IcDTZUvD9Drl66urjkBGbuQUseGSbS92I7Dp9C8jnkRRvuADMx2458uCqRf5h3DN%2Ff5XdccK6sbuGoRbXWlJAwxx38e%2BU3C8oYoeFrVrlk%2BMMBtWuriUdx7CvDCUsSYIYdiWIk0qFPIsvLCY1cCKgEIRYGrGGIPT%2B%2Fe0rpkGkl4MRgbIbJy2waEFl06NzvENNrmIHGp4YSO2BaL%2BWMuhRnk0wtHbxx8Gc02%2BWTVlGwRJ5c61A64OhBeDO4RnxglizFF9MJ2P78IGOqUBuILThWzVcG7Klrgb3%2FbXw8pxAw%2FOM4RzY1Q8CFifD5SEA%2FhdyTynufHAE2goVbQWtsAUVipXoesWSigJIz7YNgoYjm%2FvmkF10owStcKzTHjYc4Wjq3gd7L2I9Qpxqlls2ITSNJ39tMNN%2Ffd%2Fpe2QUmFQWoDqM7aqVPpGhqSmOdhV87ZgOdrIDUSweybI8ZogLHpTYCh0jkaF%2BeZLiBht2krxfduB&X-Amz-Signature=c4965503ad5a41da69d5ce7ffb91724be0155a5d630d820231baed31a1f68e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
