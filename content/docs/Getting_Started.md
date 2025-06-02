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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VAWCG2V%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCGHIN7LvA7pgV8NbhJgV54usvardR6sxeZVMt10t%2BUQAIgcqfYh7O3GXXABqg6WXTsw15ux%2BKy0SN3IUVQm4pxHoMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhYfYOwWOaDOuAbXyrcA4sDFPXOUSLKg0tM0QsqN%2BA1AMuwPTb4sa8U6tM2usQTRkoHaHMFb78DlgeFbZqjdPxI3kh8f6XgJAZUNXGEY1Z24gAvPDe7vujri5p6ExmtJmWNV7O2JZDsQwuzGRMVGDYDuKdSN3pm2wsuCgYAh5thsKasN5IWVz9MOsCKe4T%2FW4WHKeaERFasAh7GBM4IW1mLsda%2FWHfOU6Zn0K7q2%2BYaCsITORQ4RIZ9hTnbMkulFAgDMOiwsG1oyFoAOLAd5eruJZc%2Fa9OAtAMY1CbJ6ZZrUthxmSmAR4JPhy4eD3ClCSbG15yp%2BpOkikwn9v1O5wTmegNRQ%2Fbcu969WVhTEnO5VfYRo5uXm5vaa0sfxHsn32KvobvljJb1u45L7QtrCA%2BADIyXxHfPH8IX4JySWsmuV6lO%2B6UuqIfk6IGh66iwkW9IPNyDKuaBZdgA%2BjKaCrjj%2FUt0jYN%2FPuvt2cA9ohPHtGnqfnI4T7zB8Go5QxqKufUvf2rhIe5mYcPcp8APcW3wR0eSaumpdAMU6XClgWD2Ji6FwGCL0l1xDFOvyf%2B9uvXCa6Pa2Zc%2BKea2lBvQVxNz5lGlmzKH0cpZVPlZ23GjbtxSDhaJdS%2FWjyzT7GaDdMe%2FO6KFMbdrHqURMPKy98EGOqUBHXybSsAOqkTnHts%2BXqUExLSq%2FkbXkeI%2Bj1OU9CfsrFFKazaGoo2NF9LKWXw2IRMEXP0ZZDDD4L9IryvGUAHwenKaC9tYHcWQHVxppHJQgtH8s3SW%2FNTiLGynaJIJmnRq9YntafSlORwFpi%2BakwRkCs4IArhmygq%2Fp1z%2FTQ82Z0AlHNyKlQXttE%2FDfC3h7xe25A7Si7wfIJ9u6lUR7zFBcT5a5sb%2F&X-Amz-Signature=95c2d6c43b3a9e6a09555a164d69c87d686c00c5f1937ab87140ee636e251396&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VAWCG2V%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCGHIN7LvA7pgV8NbhJgV54usvardR6sxeZVMt10t%2BUQAIgcqfYh7O3GXXABqg6WXTsw15ux%2BKy0SN3IUVQm4pxHoMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhYfYOwWOaDOuAbXyrcA4sDFPXOUSLKg0tM0QsqN%2BA1AMuwPTb4sa8U6tM2usQTRkoHaHMFb78DlgeFbZqjdPxI3kh8f6XgJAZUNXGEY1Z24gAvPDe7vujri5p6ExmtJmWNV7O2JZDsQwuzGRMVGDYDuKdSN3pm2wsuCgYAh5thsKasN5IWVz9MOsCKe4T%2FW4WHKeaERFasAh7GBM4IW1mLsda%2FWHfOU6Zn0K7q2%2BYaCsITORQ4RIZ9hTnbMkulFAgDMOiwsG1oyFoAOLAd5eruJZc%2Fa9OAtAMY1CbJ6ZZrUthxmSmAR4JPhy4eD3ClCSbG15yp%2BpOkikwn9v1O5wTmegNRQ%2Fbcu969WVhTEnO5VfYRo5uXm5vaa0sfxHsn32KvobvljJb1u45L7QtrCA%2BADIyXxHfPH8IX4JySWsmuV6lO%2B6UuqIfk6IGh66iwkW9IPNyDKuaBZdgA%2BjKaCrjj%2FUt0jYN%2FPuvt2cA9ohPHtGnqfnI4T7zB8Go5QxqKufUvf2rhIe5mYcPcp8APcW3wR0eSaumpdAMU6XClgWD2Ji6FwGCL0l1xDFOvyf%2B9uvXCa6Pa2Zc%2BKea2lBvQVxNz5lGlmzKH0cpZVPlZ23GjbtxSDhaJdS%2FWjyzT7GaDdMe%2FO6KFMbdrHqURMPKy98EGOqUBHXybSsAOqkTnHts%2BXqUExLSq%2FkbXkeI%2Bj1OU9CfsrFFKazaGoo2NF9LKWXw2IRMEXP0ZZDDD4L9IryvGUAHwenKaC9tYHcWQHVxppHJQgtH8s3SW%2FNTiLGynaJIJmnRq9YntafSlORwFpi%2BakwRkCs4IArhmygq%2Fp1z%2FTQ82Z0AlHNyKlQXttE%2FDfC3h7xe25A7Si7wfIJ9u6lUR7zFBcT5a5sb%2F&X-Amz-Signature=71c94d61857f7bd65413187b01fb07e94468691a9534cc58e16c0f29c3fa09fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VAWCG2V%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCGHIN7LvA7pgV8NbhJgV54usvardR6sxeZVMt10t%2BUQAIgcqfYh7O3GXXABqg6WXTsw15ux%2BKy0SN3IUVQm4pxHoMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhYfYOwWOaDOuAbXyrcA4sDFPXOUSLKg0tM0QsqN%2BA1AMuwPTb4sa8U6tM2usQTRkoHaHMFb78DlgeFbZqjdPxI3kh8f6XgJAZUNXGEY1Z24gAvPDe7vujri5p6ExmtJmWNV7O2JZDsQwuzGRMVGDYDuKdSN3pm2wsuCgYAh5thsKasN5IWVz9MOsCKe4T%2FW4WHKeaERFasAh7GBM4IW1mLsda%2FWHfOU6Zn0K7q2%2BYaCsITORQ4RIZ9hTnbMkulFAgDMOiwsG1oyFoAOLAd5eruJZc%2Fa9OAtAMY1CbJ6ZZrUthxmSmAR4JPhy4eD3ClCSbG15yp%2BpOkikwn9v1O5wTmegNRQ%2Fbcu969WVhTEnO5VfYRo5uXm5vaa0sfxHsn32KvobvljJb1u45L7QtrCA%2BADIyXxHfPH8IX4JySWsmuV6lO%2B6UuqIfk6IGh66iwkW9IPNyDKuaBZdgA%2BjKaCrjj%2FUt0jYN%2FPuvt2cA9ohPHtGnqfnI4T7zB8Go5QxqKufUvf2rhIe5mYcPcp8APcW3wR0eSaumpdAMU6XClgWD2Ji6FwGCL0l1xDFOvyf%2B9uvXCa6Pa2Zc%2BKea2lBvQVxNz5lGlmzKH0cpZVPlZ23GjbtxSDhaJdS%2FWjyzT7GaDdMe%2FO6KFMbdrHqURMPKy98EGOqUBHXybSsAOqkTnHts%2BXqUExLSq%2FkbXkeI%2Bj1OU9CfsrFFKazaGoo2NF9LKWXw2IRMEXP0ZZDDD4L9IryvGUAHwenKaC9tYHcWQHVxppHJQgtH8s3SW%2FNTiLGynaJIJmnRq9YntafSlORwFpi%2BakwRkCs4IArhmygq%2Fp1z%2FTQ82Z0AlHNyKlQXttE%2FDfC3h7xe25A7Si7wfIJ9u6lUR7zFBcT5a5sb%2F&X-Amz-Signature=95029886b0a59527bc21005d898160f8e52068ba23ea1451a8469214f212a8af&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2BFLXGI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIE8DX%2BnybE8CjqF0zqdOSD6JozhuuZAV1V6lJL8oGO1SAiAsMRvix2cFUILVeTU6Y485eChL8dejM4ymUfLrTuUmRiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRQsbfkbTFCnOV5k6KtwDWPqnO9vz2PGfBfn0Ee%2BqLQqKXG9WfFe0jjQihjL0axqBUnuggqv16VxiYrgsdZCXrinhjCOYcIa5OKAMrbe61hXf94OeOLvkV31NHt0dVDAe3uj6AeicgRzG6ghoL9%2BiZSavef%2F%2BUomTMb2%2B%2FnZzdxza7HjMD4P7ABuIj3T48KSvjn9W4m21eMbdYxHlFrAQC8pzQUvOJ53fvB560r4GOFw%2FXdrTbus%2B2G0Ypo3YyH2RToec%2F7xcWew2kBiHi195DrRR2FoAJRx4aE2XvEYF0i1lUS32weCQpI1W5lzM%2FS214N20beVuWQaCioBfgii1p3hHJEP1fCSqujNvjJaX7xzF%2FaUNgqQkQch30l993G62gkW6z4mSD%2B3pk18qUqkIxm5gAmqhe3nh%2B18mxqy3aSEKOegY44JdpNj%2BQpxZPL2umlR3rrhZV7WNm94YqUvnc2%2BSVUB1VNJEgh3ORbS7f1nDuHz%2FLPPrfqT54SyzVv7ObLaVBHaDkXoMygsizxabSCNOYp1UqxeuNFxD4qcsnEjgqj0OiQLrIfHM7T062rCqFUXmGHNiXISzvh1bWwIM2nN5hQfw7TcpZlvwugR9WQMh90Lruzh5xB%2FhQofXXPMG04cYYct2LbUP3mQwk7P3wQY6pgEFD7%2B3rfQ2xxjQmvOQvAnyKVw6QmGGBTTnuKfQtrlTsD5WjY1kPxynkDJzc9wi8apj2FPRk%2F4r4STXdyKmkpZyn14IhDqW0nx%2FXuAth4PnogfTPYzPbgZirwOCf7Rf9XwxcFAYbMWW%2BwGoTPPxiu20g5l8rXu88K7uovfjkk7G6TFRq1XjWbktljdedoUqH55SvDLVH%2F0bZiVEORmSjC15SOfDZsi3&X-Amz-Signature=0d3e113b1bb4852b3a5b9389106865cbad995dc28e41b05d091636ffb9836539&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A64JN3X%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC5r5x93NZsIH62qhlBixiNxzgMpFb2fm89pvZAoEpPoQIhAMe4VcPXK%2BibgDlPVWLtnHZNcrA%2BxyrcjIy1edMyIxYuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBiuoI6f8YRkHyXy0q3ANrbirSkfXYUrtS4yBib1GuZfxtyHRTUK6EDci2npQKubfo2pRnh27MFS%2F%2Bqbm%2FtQ7DNIAeF%2BGusFW0hFpcbICrl4fUsFlEepsceUV5u7uxUEgyPUSDRt1rdXRDSg94hJ9lgekhndiyjL%2B%2BwTNjnKjhBSkUIwUihOLHPd%2FbaS2LwxfLewqhXoRn6SMmLoLbev2S7i5N25G5YocBw9C95peRhHj8X48isQ0V1ShyyteXo%2FiYrkMUZLrpkc%2BCydfuek5OjBugvU45ewwvZQmKcTXD2%2FVj4niJeD5LoUB2pRNsR4z%2BgRNtbYliCEsI5DnvkeTRF%2Fa9%2F1QSGfG1e9QJpErq9tJeEBT6GSv2VyaBoBPvP1hZObEuTrCBedPW34DJyqgrExhbvBmSatqobzBDVYuNFc5StPlrcQ1jIXlJpuQAueUO7lgtz0M2pms3EkvP%2BiOHX0m6h6peVEltaAzeJw4skXWNCH9KRZI0DCOeRrUy61Y%2BiLc42KqgvGP2F1sbgamx6ENRuKMOQ3KyCMfejIzYtoTQ5SbnrHxyXktqDizUWI9iHQK0i3ZG%2BP9aDrVlYMoSpPZfS%2FOEcUED0KnwWoIQa67lWIobWaPosbi7v1mzIcEP0LSqKoJn7B%2BomzCOs%2FfBBjqkAavQ3NuuYFzSQb3D47hnu7h1vNnqH4fi1s9srNUnsfnumkXEBQefXcZC0%2F3wzJSLrhHtgIIjRDtxRMyMVtyy0eylmlwtPaCqU3tNxTVQVxjfuTKNfIfDeIBCmdAsy7tIxayZCLpzU4%2BopUK6LFIn30f0jij0h5KRcVTZrGyZ93hvhoWrE0Fwg4smRgoEN2rPCVDukNZezayZPLLvPqmDr%2FUKzj66&X-Amz-Signature=39139b10b03d8ce0ba5374fcc6ce9f835c099eb54715e8a7015c5eaca5c3a909&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VAWCG2V%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCGHIN7LvA7pgV8NbhJgV54usvardR6sxeZVMt10t%2BUQAIgcqfYh7O3GXXABqg6WXTsw15ux%2BKy0SN3IUVQm4pxHoMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhYfYOwWOaDOuAbXyrcA4sDFPXOUSLKg0tM0QsqN%2BA1AMuwPTb4sa8U6tM2usQTRkoHaHMFb78DlgeFbZqjdPxI3kh8f6XgJAZUNXGEY1Z24gAvPDe7vujri5p6ExmtJmWNV7O2JZDsQwuzGRMVGDYDuKdSN3pm2wsuCgYAh5thsKasN5IWVz9MOsCKe4T%2FW4WHKeaERFasAh7GBM4IW1mLsda%2FWHfOU6Zn0K7q2%2BYaCsITORQ4RIZ9hTnbMkulFAgDMOiwsG1oyFoAOLAd5eruJZc%2Fa9OAtAMY1CbJ6ZZrUthxmSmAR4JPhy4eD3ClCSbG15yp%2BpOkikwn9v1O5wTmegNRQ%2Fbcu969WVhTEnO5VfYRo5uXm5vaa0sfxHsn32KvobvljJb1u45L7QtrCA%2BADIyXxHfPH8IX4JySWsmuV6lO%2B6UuqIfk6IGh66iwkW9IPNyDKuaBZdgA%2BjKaCrjj%2FUt0jYN%2FPuvt2cA9ohPHtGnqfnI4T7zB8Go5QxqKufUvf2rhIe5mYcPcp8APcW3wR0eSaumpdAMU6XClgWD2Ji6FwGCL0l1xDFOvyf%2B9uvXCa6Pa2Zc%2BKea2lBvQVxNz5lGlmzKH0cpZVPlZ23GjbtxSDhaJdS%2FWjyzT7GaDdMe%2FO6KFMbdrHqURMPKy98EGOqUBHXybSsAOqkTnHts%2BXqUExLSq%2FkbXkeI%2Bj1OU9CfsrFFKazaGoo2NF9LKWXw2IRMEXP0ZZDDD4L9IryvGUAHwenKaC9tYHcWQHVxppHJQgtH8s3SW%2FNTiLGynaJIJmnRq9YntafSlORwFpi%2BakwRkCs4IArhmygq%2Fp1z%2FTQ82Z0AlHNyKlQXttE%2FDfC3h7xe25A7Si7wfIJ9u6lUR7zFBcT5a5sb%2F&X-Amz-Signature=ccfce50b4e85661b121633fb02da0df687adcf151d46d265073df660975a7632&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
