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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR2QAO3I%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQrWrR3T%2FMIePA20OUmkcUyP8KH9sTg%2F4Eml7b6vRF5AIgL4QQ4ewQ8Ve49s5IkkYC6Ls2IT2budoL7R%2BrtaJ4F7Uq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJpM5Q1moXqV1%2B%2FQLSrcA5BzmftnQ8j91NaUqwyW99oefKftiVp617vmcUcZo%2FW160pZd%2BNDCS8eDEMoPQ11BBiEyUtOvMIZwJHb4nmUzaKzk6IQWr2Z9WlXfbULMJAyjFR4ILgvyVOJnQFkMGiUtkofRoabnqjIdp6%2B1TgsWZVaDzT4HS2yGpUQ3YaURL8awo%2Bqu5UNGH9WlY97rI5OfkwOP2diDjquDexAwz4wc1A28D%2Ft7geccYobIpwcj0ZhLnhsjhIb5drMsULh8mzQD6BWm82ZsDSO6fOwG5aWAgx29QjLeh7rTafcC%2B8MtHuA5AYavud9hXKOJ0aP%2F8P9Ixo5JM6freOyD1BK77rQyWKncwNkjE8eJKdcT2cVkfayyBqwJtzq1uw9GUPDDk9ZbIbfRyQiiJT3lQDgkPJLihCdbhDqUiC4KnUIF5xxnvagmHW5fF90ctsbmskLusqBsZxxz5EG6F2XBpenvifh7uPnhg2wPF4nkV4%2BlSDaK8hMsHgTxYfA%2B62%2FE8hVaAbTe6QmiXFdtolUtzm7pHA8lnedVQnV09wdpbGr1Nw1CGj%2Bz0pSuHDlh1wE66IiXg6jkZ0P5s79OsUlEGljjivTC1c64nSBdPEn8Ny5GxUlYm5ORsVFqdhgRv8K0v8HMLfc9L8GOqUBA0NlrMQqodKVJDkR0MgyOkVGhUsugho%2FtJqd3v3mmYIX1YysoEHvYachZeynXsBK0h5DO8N%2BC1G3w9OgSOdbaTyfMy0hHINSEGTYOfmBGj6%2FG9Hlm18%2BXd94DYN%2B9aFaFjxmly7QcfMv2AtIHpx1Pw95wMtxev3Kg8kcPDFKPMRtuhJrgwfIM1K3DkTmIRGCXE5fgsMYQTmYOjLW6DcVT4FQgz80&X-Amz-Signature=a947cb889b9c0aa91735ad26e3517dc2ec1e6c9b92438fa53c63908bc4dc56f2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR2QAO3I%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQrWrR3T%2FMIePA20OUmkcUyP8KH9sTg%2F4Eml7b6vRF5AIgL4QQ4ewQ8Ve49s5IkkYC6Ls2IT2budoL7R%2BrtaJ4F7Uq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJpM5Q1moXqV1%2B%2FQLSrcA5BzmftnQ8j91NaUqwyW99oefKftiVp617vmcUcZo%2FW160pZd%2BNDCS8eDEMoPQ11BBiEyUtOvMIZwJHb4nmUzaKzk6IQWr2Z9WlXfbULMJAyjFR4ILgvyVOJnQFkMGiUtkofRoabnqjIdp6%2B1TgsWZVaDzT4HS2yGpUQ3YaURL8awo%2Bqu5UNGH9WlY97rI5OfkwOP2diDjquDexAwz4wc1A28D%2Ft7geccYobIpwcj0ZhLnhsjhIb5drMsULh8mzQD6BWm82ZsDSO6fOwG5aWAgx29QjLeh7rTafcC%2B8MtHuA5AYavud9hXKOJ0aP%2F8P9Ixo5JM6freOyD1BK77rQyWKncwNkjE8eJKdcT2cVkfayyBqwJtzq1uw9GUPDDk9ZbIbfRyQiiJT3lQDgkPJLihCdbhDqUiC4KnUIF5xxnvagmHW5fF90ctsbmskLusqBsZxxz5EG6F2XBpenvifh7uPnhg2wPF4nkV4%2BlSDaK8hMsHgTxYfA%2B62%2FE8hVaAbTe6QmiXFdtolUtzm7pHA8lnedVQnV09wdpbGr1Nw1CGj%2Bz0pSuHDlh1wE66IiXg6jkZ0P5s79OsUlEGljjivTC1c64nSBdPEn8Ny5GxUlYm5ORsVFqdhgRv8K0v8HMLfc9L8GOqUBA0NlrMQqodKVJDkR0MgyOkVGhUsugho%2FtJqd3v3mmYIX1YysoEHvYachZeynXsBK0h5DO8N%2BC1G3w9OgSOdbaTyfMy0hHINSEGTYOfmBGj6%2FG9Hlm18%2BXd94DYN%2B9aFaFjxmly7QcfMv2AtIHpx1Pw95wMtxev3Kg8kcPDFKPMRtuhJrgwfIM1K3DkTmIRGCXE5fgsMYQTmYOjLW6DcVT4FQgz80&X-Amz-Signature=3767abde5f81995d41b4a9321d91ed984d430f804cc46d53b9d0a9fa47060efd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5Q2V3O%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT6%2FkPosNi51NoycxhXX%2BFNjXMsh9%2BH%2Fn8K63VqPygtQIhAI1IODnIfTQJSzitv8eOgAEDC8hc6A58zbfvjxhiBhcMKv8DCBkQABoMNjM3NDIzMTgzODA1Igxg0KfolyyxdfGZCbIq3APAOchAmj4IBs2qXeh4fRWxVuEcoO%2B7C38FbSUxTPaHLnF05FHPj22vYELslORe6IE%2FTqkHptu4xsvEojKjGYIDr1L0TZ9axM0i65NKQf%2FFDYG%2Fh7S5mfeJP73o3PoTExKiLn0K31DCC7A5JXtLN3Re73qq577W28TWkN1gtNqN1bkb90A9ZsMOeH7rVBRmxVL5inawn%2BLF5xkR%2B8wWU2d2ZHlNnwuJ8TGu1gVsnbGUuHn4ArqXia3qYl7KXafF76DMojLWEaJIwVRz3wSV9VKCrneXONPjRx588HEAOd0Hgt%2FPuX7yP7IOtDT9Nh3BDtP%2BSpeCJZtpg8jI05v7vmF2oauX2mR94jQnR7pjQADmWTNTaXWRfBenwpDnQGo4xnc8lgH534wZ5O3%2BVbuphULnPr6etzVeSKrxxR8WV2y3PvB5NaZrUzOkDvBR0Q0uzKWk9YOFdlo4shSDPyAUABnjNBv7r43mkm%2FgYu63sP4q%2BrNmhnjcYP64yPWBN7Xz09IdAat8Z6WtwpcYC51pCjPRrF7cNnvcCAsADRGrJu3YaBKgvBeqmHkiskjJyKOoLHtshxgG0MNLbNRcPvsYRTLTZn%2FNorp%2F0Gxy8%2BNuaxP9MckTTlx%2FWp%2FFRYeiYTCW3PS%2FBjqkAWN0V%2F6eYxyo9B3FhPMbNmqpWGkMrd7AUxkv3EW6UkrCgVG78pQUNEBLCghY9zgClneoI%2BvSKsTvGzbXrcBBxDUCH4vx5ct4unYT%2FXQIObZjzXo%2BF2yYNzY%2BraHmoLUCN%2BKfDj6VHeD2R9bZ9a9oCdz%2F0dXSOR810AvjCgmhTVN24OZprNhz6wyOkK60gNwqJtkDoU0VaTlZw%2FFkdw4s8c%2BzNz5N&X-Amz-Signature=ab8feb075f110a3b58db54f51b754bb9ab083425f2bf0a7d866296d444f49b65&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M4N2SYH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEcZbao9hHAslef6NVGYPGbvMdr9cm4BN3Br7bICOC0AiB8UyQaTr8Hqq9RhTJpRJJ%2Fk2a9JskPRuvi8F%2BT8A2%2Bxyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMLrKL8ABfhWQA%2FWLwKtwDPW0dUEbq4%2B1rM42z6cz2GfEzlLLQMnMnRZ0RyuksGSwPXvWZoDsCBFkmwtGGzmXD5x%2F8iCoc3rgPjGKHdUghLS5%2FaejwPMVZHnJaqEI1At9NRrah%2B2lXMwwxJhq01H6AUgalQ9ZSFdRhTpDf6TImK%2FsWQQFxwAjE8RxBl6oX2U6vrd26QmZZbpeuKve3wON7E7UCpo%2FBUT7XTEkhWzv9lIYWvYjVwW7doMIw%2FSU9QGZTnbSNpsSugnL56A9YjXxZUUnordCCoYZmTgeB84QFHNDaiXAwvG%2BL%2Fcfjp7knVvPx5M7gQjNJpxDZKT0vPbKmR9S%2B8UnIjCnGqJGktrnEL4fyilRx6MypDKVvK9UbS4FTTSztoRFZTD71S3jKCPm4InsXgBpjgC6P%2B509vTu6elMIMpK%2FkpmpEKfQEtYxgAcQgWfsXzCCFWZBgiJArfUQDzpyg5nB8AnOjorxzIujY7fx%2FgHLw3Bdw3pvStXj4ToLYwzZZu9NF7FEfhzn2zY79ObyfydQVBSdlKeg2PvjxJyI%2FxoH1QKGv9YCUMGjshX31gEUMye6E0CmXoL5JHjHtvOMIOjicmBu93%2FUSzYSFcEJStFCzV0WaYS4GplSwuSP4DMnTAuH6zJIgN0w9dv0vwY6pgEQJr0sSCdCtz6aNYor1nV7AWkhrsnJgIb9doie0j%2BOFAjs6xp%2BubbtA0GntYdznYP1Nu9t5rpQyowWRjXsoLM1axY5WrxzDSXf12OyZMgX2r7w37i8%2BcL%2F8pNmW7YFMrWhJtmgCBGZt7ccwtf4KGvarQoeG7YHoxM2jisDz9bMpcrfuA%2FQC0EE%2Ft4AGmDyhsOpC09ZZF6u9odcQgYjD3dIq%2BbSvBeD&X-Amz-Signature=04b7c66a74c912c3c5ea07baf4301d501324e2c33ae96ff82ab66df5ccadbcae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR2QAO3I%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQrWrR3T%2FMIePA20OUmkcUyP8KH9sTg%2F4Eml7b6vRF5AIgL4QQ4ewQ8Ve49s5IkkYC6Ls2IT2budoL7R%2BrtaJ4F7Uq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJpM5Q1moXqV1%2B%2FQLSrcA5BzmftnQ8j91NaUqwyW99oefKftiVp617vmcUcZo%2FW160pZd%2BNDCS8eDEMoPQ11BBiEyUtOvMIZwJHb4nmUzaKzk6IQWr2Z9WlXfbULMJAyjFR4ILgvyVOJnQFkMGiUtkofRoabnqjIdp6%2B1TgsWZVaDzT4HS2yGpUQ3YaURL8awo%2Bqu5UNGH9WlY97rI5OfkwOP2diDjquDexAwz4wc1A28D%2Ft7geccYobIpwcj0ZhLnhsjhIb5drMsULh8mzQD6BWm82ZsDSO6fOwG5aWAgx29QjLeh7rTafcC%2B8MtHuA5AYavud9hXKOJ0aP%2F8P9Ixo5JM6freOyD1BK77rQyWKncwNkjE8eJKdcT2cVkfayyBqwJtzq1uw9GUPDDk9ZbIbfRyQiiJT3lQDgkPJLihCdbhDqUiC4KnUIF5xxnvagmHW5fF90ctsbmskLusqBsZxxz5EG6F2XBpenvifh7uPnhg2wPF4nkV4%2BlSDaK8hMsHgTxYfA%2B62%2FE8hVaAbTe6QmiXFdtolUtzm7pHA8lnedVQnV09wdpbGr1Nw1CGj%2Bz0pSuHDlh1wE66IiXg6jkZ0P5s79OsUlEGljjivTC1c64nSBdPEn8Ny5GxUlYm5ORsVFqdhgRv8K0v8HMLfc9L8GOqUBA0NlrMQqodKVJDkR0MgyOkVGhUsugho%2FtJqd3v3mmYIX1YysoEHvYachZeynXsBK0h5DO8N%2BC1G3w9OgSOdbaTyfMy0hHINSEGTYOfmBGj6%2FG9Hlm18%2BXd94DYN%2B9aFaFjxmly7QcfMv2AtIHpx1Pw95wMtxev3Kg8kcPDFKPMRtuhJrgwfIM1K3DkTmIRGCXE5fgsMYQTmYOjLW6DcVT4FQgz80&X-Amz-Signature=772e21c07c8b23de6bec05838c1e1c797851123bceefc8c36aad798c38516910&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
