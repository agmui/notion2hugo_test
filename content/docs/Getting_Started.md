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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUW6Y6MC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGbYTew9YJCzyGDwgNSb2rQX31cKkcfPuB%2Bn5VgUO6ukAiAaNlOfz08nyNIYWUtLFuNg1x1tCHJ1ksNPTBUYQ1U1hir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMpPiTz903M0LE9DOZKtwDko06gXpKj04rq4fF%2Fp8WBp2SgjnZqWLH2KoZ9uwpuwrQk20n%2FyfWyLwjHOx9RBYNk75khp3Qg4IWJjSnUgzq%2BDsmx7b7Xu%2Bd0vFZ9116kkJ%2BuDJe3sDTAlULID4JW%2BnCDxRTuL4s8WGRuXRC%2Bk7n6O1vyVV%2F3mMBlhDuUeBQq1MCnNhjCCSAg1MJAl5bi7U3VFwfT02Lw6VSih6ogdbgNyVz1yHm%2Fq5fEq4TCZLQv5WJodcQKNjnZdOaARQQG%2B85pucAMN7SFfF4zDcsBk5xcsfVL3KfC5IAWZbW6AW53DnTaVqRGPe48D%2B54%2BllBDh2J7%2FKgOLp2hCKe6BS5XZ8KPRJJwiLVCEKDt9%2FrotYIrU3F9ks1k3RxQrKn1j4taRX3kd%2FfX5uoBBVgMWciD3OAHpPWpW%2FTcsiLdle28QxAgOCX9zRRNjyA%2B5SUjDnMjo9GxtXPxEM2BGo7cMEMrILW2p2NhZrHgnOYT6wTxmPexhE%2FtwyG8XZX67mC9zYcLZhpltNh9hWqzgRrQ4zW00kTnsduG8x%2FJ%2FryT1O64%2BlrMtDVUUE8AOG%2BbI92Xft8mVREzgdU%2FzaHJJIksj3aRtjkscR3ECFHJF9Sy9n5Q7BpMUtS1%2BM9%2FHpend6Eakw3IzswgY6pgFuyi85sgsSO5JGoXQ3z7G8vH8%2Blb4EJMCjXiZ%2Fh4UhQKJEddXZpvQANnkRHobtH0QJfMEhq%2FcbyG7FHXcXX94x9DN49hVRQOns49V41OOqOwnt7thFKfCLSVJB2FoebuOyE6g5MmjqVhPS84On%2FgKWBFNigmmgRNbkQy8cZIDc5Uq%2BgyiL3ln5OYW4DzF7Kl%2FJsEhrA8DSV4f%2FDfAuIazuzXk3MZ9h&X-Amz-Signature=972105cc7ec32678cb2c0da26a25016d8e1a1eb5349c773f2eaadcb4005a99e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUW6Y6MC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGbYTew9YJCzyGDwgNSb2rQX31cKkcfPuB%2Bn5VgUO6ukAiAaNlOfz08nyNIYWUtLFuNg1x1tCHJ1ksNPTBUYQ1U1hir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMpPiTz903M0LE9DOZKtwDko06gXpKj04rq4fF%2Fp8WBp2SgjnZqWLH2KoZ9uwpuwrQk20n%2FyfWyLwjHOx9RBYNk75khp3Qg4IWJjSnUgzq%2BDsmx7b7Xu%2Bd0vFZ9116kkJ%2BuDJe3sDTAlULID4JW%2BnCDxRTuL4s8WGRuXRC%2Bk7n6O1vyVV%2F3mMBlhDuUeBQq1MCnNhjCCSAg1MJAl5bi7U3VFwfT02Lw6VSih6ogdbgNyVz1yHm%2Fq5fEq4TCZLQv5WJodcQKNjnZdOaARQQG%2B85pucAMN7SFfF4zDcsBk5xcsfVL3KfC5IAWZbW6AW53DnTaVqRGPe48D%2B54%2BllBDh2J7%2FKgOLp2hCKe6BS5XZ8KPRJJwiLVCEKDt9%2FrotYIrU3F9ks1k3RxQrKn1j4taRX3kd%2FfX5uoBBVgMWciD3OAHpPWpW%2FTcsiLdle28QxAgOCX9zRRNjyA%2B5SUjDnMjo9GxtXPxEM2BGo7cMEMrILW2p2NhZrHgnOYT6wTxmPexhE%2FtwyG8XZX67mC9zYcLZhpltNh9hWqzgRrQ4zW00kTnsduG8x%2FJ%2FryT1O64%2BlrMtDVUUE8AOG%2BbI92Xft8mVREzgdU%2FzaHJJIksj3aRtjkscR3ECFHJF9Sy9n5Q7BpMUtS1%2BM9%2FHpend6Eakw3IzswgY6pgFuyi85sgsSO5JGoXQ3z7G8vH8%2Blb4EJMCjXiZ%2Fh4UhQKJEddXZpvQANnkRHobtH0QJfMEhq%2FcbyG7FHXcXX94x9DN49hVRQOns49V41OOqOwnt7thFKfCLSVJB2FoebuOyE6g5MmjqVhPS84On%2FgKWBFNigmmgRNbkQy8cZIDc5Uq%2BgyiL3ln5OYW4DzF7Kl%2FJsEhrA8DSV4f%2FDfAuIazuzXk3MZ9h&X-Amz-Signature=75a9c1e7df69b766a8fc588adaae91bb5c4565043cf1dbced19c872af964ca85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUW6Y6MC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGbYTew9YJCzyGDwgNSb2rQX31cKkcfPuB%2Bn5VgUO6ukAiAaNlOfz08nyNIYWUtLFuNg1x1tCHJ1ksNPTBUYQ1U1hir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMpPiTz903M0LE9DOZKtwDko06gXpKj04rq4fF%2Fp8WBp2SgjnZqWLH2KoZ9uwpuwrQk20n%2FyfWyLwjHOx9RBYNk75khp3Qg4IWJjSnUgzq%2BDsmx7b7Xu%2Bd0vFZ9116kkJ%2BuDJe3sDTAlULID4JW%2BnCDxRTuL4s8WGRuXRC%2Bk7n6O1vyVV%2F3mMBlhDuUeBQq1MCnNhjCCSAg1MJAl5bi7U3VFwfT02Lw6VSih6ogdbgNyVz1yHm%2Fq5fEq4TCZLQv5WJodcQKNjnZdOaARQQG%2B85pucAMN7SFfF4zDcsBk5xcsfVL3KfC5IAWZbW6AW53DnTaVqRGPe48D%2B54%2BllBDh2J7%2FKgOLp2hCKe6BS5XZ8KPRJJwiLVCEKDt9%2FrotYIrU3F9ks1k3RxQrKn1j4taRX3kd%2FfX5uoBBVgMWciD3OAHpPWpW%2FTcsiLdle28QxAgOCX9zRRNjyA%2B5SUjDnMjo9GxtXPxEM2BGo7cMEMrILW2p2NhZrHgnOYT6wTxmPexhE%2FtwyG8XZX67mC9zYcLZhpltNh9hWqzgRrQ4zW00kTnsduG8x%2FJ%2FryT1O64%2BlrMtDVUUE8AOG%2BbI92Xft8mVREzgdU%2FzaHJJIksj3aRtjkscR3ECFHJF9Sy9n5Q7BpMUtS1%2BM9%2FHpend6Eakw3IzswgY6pgFuyi85sgsSO5JGoXQ3z7G8vH8%2Blb4EJMCjXiZ%2Fh4UhQKJEddXZpvQANnkRHobtH0QJfMEhq%2FcbyG7FHXcXX94x9DN49hVRQOns49V41OOqOwnt7thFKfCLSVJB2FoebuOyE6g5MmjqVhPS84On%2FgKWBFNigmmgRNbkQy8cZIDc5Uq%2BgyiL3ln5OYW4DzF7Kl%2FJsEhrA8DSV4f%2FDfAuIazuzXk3MZ9h&X-Amz-Signature=e6c0754911aec6b7fdea36e815eac1572717af80959cbf2164e318d01a5ff3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHOSNU5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCI5aN%2BDnWZ2fnHTznygffIMe3%2FtjaF3%2BV9pxzbXR3i0AIhAIMUAyrKiFiwO2BQtILWplj19ffKtZwKxY6oeuwYI4H0Kv8DCDUQABoMNjM3NDIzMTgzODA1IgxWQuCh4bd7%2FyceSw0q3APkWZLSjRmXK78lzqYHBWHVG5qLVCv7OsK6oqSgw27GdZJ9pXorU0iX21%2BOQZsst%2FTD5AUsbtsl7o9ryRfgVOyHItyYdaXMn52xQEPJTNtsOXMiPQoY4uh%2BK%2F8wtjdnAP4EQuUcJ%2FaunWQubeRfH4Q4JQZ%2BX%2Fnxn47Mz6dVY8d1oC7j1v97X9Qlzbyh3XyQfrvZQKGQww0NnVeJb6VxG%2BeqTchFdvRaGQGXqMI0TzuBvypRDt84e6MUUGE6goGO8JNxc86oqYPOXJFLx0CFkKtBtwAyFvQ7iDYHYMEke3yx49Kdyfn271zZLhtI6K5U%2BKAJsFBQF%2BsAWbrwTt0vRLPo9e0pXZ3H1qco9jWvu9wKloBvWyVgL8rWOgVo5bmsVIzode9HgUSjUjXKkYyQOtE4ICnQbT2tI8B3FE7pVC55G%2FXtOaZ77rtdwNdMSHI%2B29bgTj51U2LCbGG70frVLnpTj5bkIOwI1LmjRk%2FjiQLXfnZ3hBmJY4qlbrJgNTUGr%2B6JyTKD5hI7CIkPbqRD2%2Blmwc4uf8HTmgmmE1m6iW8cKBnsQo9AJuDKuX9V2AcsHrCzi7kbgvPcL6ItqkRGxUb%2Bad33PSAhFZP0mukl%2F61nd0izDfRfVKB2cEHfcjCnjOzCBjqkAc6JY%2BdVOqrfU6IhN3igRPhKettWyJgnXDCU%2BKm4ApZkKI%2FwJh72yciQJY%2FyolTBLONWUz2E0RaEpPNxxH9C8avd5GttH2qvofjSvAu9R%2B5EdEt83a%2Fs1ONw0ABULi%2F7iiRzIvf0vvayp8DQebMMz8Hc7Gv9rvvLiwZWaTmF7T7cKuc4KHTUHRHf8%2BACadHIx4Dz7xiKqww3gcF3iA%2FQK8Lce39T&X-Amz-Signature=cee0ad26d7c06a3b636dd9a3caadfcd9a530901e2e13587e0b75cfe69e5d8c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQJ3O2V5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIA82n0FOe1CTBOSXRDB3nwjEi70zfs2k2W9u8AebwplwAiEAj0uKbttNNDXziQFlABmY%2F7nDWxI%2F96FbCqIJlJq2kE0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFQI3wSy1HhHGvzyuSrcA%2FOGkFyzYM%2FpfLGvcZiNanwPmUNpTg0hfCXb7vOEuX1FJ1gE1g0bE%2F8O0GzX0Y5aY7zeVpIGu9bjoBs65nEddcJnClchQPBOcxD9f%2BnVOmGhVNkfb6%2BcduyjE0XlQqV6E4%2FKKSyakCERtmQ5O2oovLldMm2BB%2FU3nXRDVJlEbAxHWIt43gmGcQArzv6g4O1egKI8RDhpj4FgX9HZxooqaUS2B2bF6i1DqIuIfbgjAzRVvDM7%2FuXFayR2Z4IHppWDuAOc1aRmjcieOjlcByD%2BemrLo2ETfK9xET3Dprc1JzflFcAV9B7ztJRO%2FS8zQQQbhfC%2BqUaxM%2F0Y%2By3etAq%2Bc2gd%2B9jdtUWmlqJCdcm9hymHZaqSUs8u3ZTJMixNfqqlcYj9oEIm3XHFKcnpydN5dMECjantBRDMSJU6dO0jfDXPDo%2BHd9L95n9ikqCwk9YkzovFcIm45CG56df5is5covkBvPnsc0hl1rAGw2dnZmF0Gbnkrgg1V1G%2Brlal4Q2KzOGJN2gDRlrwZKwF9rrr%2FqukPKrT8r6UvMdvGDgwUBmPCFig6prs8mmPF2GDEvGVMLfBDkYd7kfOUuew7IUWBFdf%2FlwUoV1uihZ%2BSKORbim2AXbmoWufJv7b45R7MNmM7MIGOqUBbzTw%2BKCl9YxYGemf6YyhZLchnV9rMnEqjP3ApyKqJatTsewOPKbDApuZ6FWamIiLw7QsU6JT8Bye3GWg1aUwyVOBIWFwoJV36YELCQlrSsSw7okXgbl7o6DsGriJJRPpx1vBBmSdVakCbjELbfmN5BpUnkW4CgSM%2FLUdp01EkaRjCsRWKJ4OTxHVsdStbLDiFVvfPhvIzlToAH0LfFw0%2BUiJJWa%2F&X-Amz-Signature=e2f3fc5f0b1c601b48ff9b6fb6d3429a272127a00b1978ffc15187fe06165f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUW6Y6MC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGbYTew9YJCzyGDwgNSb2rQX31cKkcfPuB%2Bn5VgUO6ukAiAaNlOfz08nyNIYWUtLFuNg1x1tCHJ1ksNPTBUYQ1U1hir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMpPiTz903M0LE9DOZKtwDko06gXpKj04rq4fF%2Fp8WBp2SgjnZqWLH2KoZ9uwpuwrQk20n%2FyfWyLwjHOx9RBYNk75khp3Qg4IWJjSnUgzq%2BDsmx7b7Xu%2Bd0vFZ9116kkJ%2BuDJe3sDTAlULID4JW%2BnCDxRTuL4s8WGRuXRC%2Bk7n6O1vyVV%2F3mMBlhDuUeBQq1MCnNhjCCSAg1MJAl5bi7U3VFwfT02Lw6VSih6ogdbgNyVz1yHm%2Fq5fEq4TCZLQv5WJodcQKNjnZdOaARQQG%2B85pucAMN7SFfF4zDcsBk5xcsfVL3KfC5IAWZbW6AW53DnTaVqRGPe48D%2B54%2BllBDh2J7%2FKgOLp2hCKe6BS5XZ8KPRJJwiLVCEKDt9%2FrotYIrU3F9ks1k3RxQrKn1j4taRX3kd%2FfX5uoBBVgMWciD3OAHpPWpW%2FTcsiLdle28QxAgOCX9zRRNjyA%2B5SUjDnMjo9GxtXPxEM2BGo7cMEMrILW2p2NhZrHgnOYT6wTxmPexhE%2FtwyG8XZX67mC9zYcLZhpltNh9hWqzgRrQ4zW00kTnsduG8x%2FJ%2FryT1O64%2BlrMtDVUUE8AOG%2BbI92Xft8mVREzgdU%2FzaHJJIksj3aRtjkscR3ECFHJF9Sy9n5Q7BpMUtS1%2BM9%2FHpend6Eakw3IzswgY6pgFuyi85sgsSO5JGoXQ3z7G8vH8%2Blb4EJMCjXiZ%2Fh4UhQKJEddXZpvQANnkRHobtH0QJfMEhq%2FcbyG7FHXcXX94x9DN49hVRQOns49V41OOqOwnt7thFKfCLSVJB2FoebuOyE6g5MmjqVhPS84On%2FgKWBFNigmmgRNbkQy8cZIDc5Uq%2BgyiL3ln5OYW4DzF7Kl%2FJsEhrA8DSV4f%2FDfAuIazuzXk3MZ9h&X-Amz-Signature=89d907dfcdee72613b37f4349a75f28edd731e267f5efab56aa97abc0314ddb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
