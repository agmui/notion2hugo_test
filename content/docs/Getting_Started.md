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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UNRMNY2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAfUT20FuunysaklSvrtJzDLtv%2FY6PAQpPXtVeL%2BP%2FOQIhAJTRAbi7N1DWUgvS3rtdeyZO77umvZDksGN7MMt1u88yKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycrxjSDRrGbO9Wucgq3AOnX%2BIzIN3ZG9TAg8ewdnw3VeXBO78x8J6%2FqC%2FtjK5l%2BlUJy8Q50Ugik7d9yeDNUK3Z6DKkAR2I0pglR5Gm90h1SSAOX2ogWexHkfVT%2FsDab8Pxchy23VLb2i7aBDJjJwIogWtG4q63ee9x%2FrEtVNa6%2BjHXz7VpFYjBo1bBkTGMtJ%2FuYrt49KDoI%2BwcKYYzvpvNbQOc1NkGuuozv2PsCp2nc18Odm6L3wpYKzzJYvA%2Bl2wJSc441WEzgaolSqbnNTsJLvboguUUqilwtLnbwACOjxLkfIq5fUmhQuwhkY0ZJYI%2FMLT94MGBEpVqM3fh9npFE4QiKqWPqEbmxTEMp%2BwtHCtBTD8StWnqLl%2Fu%2B%2BeTmadEr2znVwleSnDM342roD3WskOB97Baahbxs9LPbNuPxWw%2BsHbve%2FrFQFiqz49WoK1jUKs2KIrm2cqY8%2F2nBuKeOb6XQ7%2BprxONKYTc5AHXuQ9s4dfi%2BX2gqvMncvRfLBssKmu4exEfvfjibALEB%2F%2BG0cp82diCNpijSy7NxAXldyI0hCpxtLqBheSVQiRE2DkxSD1fH%2FXuQ4pgrSPIjq7hxSZLbWGORADDiGiS43bstsuerDfWR5l5nQ5Vpt6pB7%2FVFgK%2FysuzfDnGNjDy5KLCBjqkAbk3YrZxJPK2ZfbBCkAabp%2Bp6KKyFOKD0GvhXI5yp19mWVIE4gk%2BtLOUBjresXdOwMgX%2FSIQEaHWHaRIX7XJHQn1wU4RQVVzxxqQOxe9fEBN78DdlCDHTrtj8hgCjXwGtSajDvv%2BU2H4GbkG0HyCKFoeGyHG4HslFD6kLkLJdtZz41XMMWrU909LgUcE5AWeqa2c3RrTm61J8kkW%2BXBuxVkt8qVa&X-Amz-Signature=db2e0aeda9efae744aa790c3828cd2d1ff27f482e6e2b5f867edc83180b6936a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UNRMNY2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAfUT20FuunysaklSvrtJzDLtv%2FY6PAQpPXtVeL%2BP%2FOQIhAJTRAbi7N1DWUgvS3rtdeyZO77umvZDksGN7MMt1u88yKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycrxjSDRrGbO9Wucgq3AOnX%2BIzIN3ZG9TAg8ewdnw3VeXBO78x8J6%2FqC%2FtjK5l%2BlUJy8Q50Ugik7d9yeDNUK3Z6DKkAR2I0pglR5Gm90h1SSAOX2ogWexHkfVT%2FsDab8Pxchy23VLb2i7aBDJjJwIogWtG4q63ee9x%2FrEtVNa6%2BjHXz7VpFYjBo1bBkTGMtJ%2FuYrt49KDoI%2BwcKYYzvpvNbQOc1NkGuuozv2PsCp2nc18Odm6L3wpYKzzJYvA%2Bl2wJSc441WEzgaolSqbnNTsJLvboguUUqilwtLnbwACOjxLkfIq5fUmhQuwhkY0ZJYI%2FMLT94MGBEpVqM3fh9npFE4QiKqWPqEbmxTEMp%2BwtHCtBTD8StWnqLl%2Fu%2B%2BeTmadEr2znVwleSnDM342roD3WskOB97Baahbxs9LPbNuPxWw%2BsHbve%2FrFQFiqz49WoK1jUKs2KIrm2cqY8%2F2nBuKeOb6XQ7%2BprxONKYTc5AHXuQ9s4dfi%2BX2gqvMncvRfLBssKmu4exEfvfjibALEB%2F%2BG0cp82diCNpijSy7NxAXldyI0hCpxtLqBheSVQiRE2DkxSD1fH%2FXuQ4pgrSPIjq7hxSZLbWGORADDiGiS43bstsuerDfWR5l5nQ5Vpt6pB7%2FVFgK%2FysuzfDnGNjDy5KLCBjqkAbk3YrZxJPK2ZfbBCkAabp%2Bp6KKyFOKD0GvhXI5yp19mWVIE4gk%2BtLOUBjresXdOwMgX%2FSIQEaHWHaRIX7XJHQn1wU4RQVVzxxqQOxe9fEBN78DdlCDHTrtj8hgCjXwGtSajDvv%2BU2H4GbkG0HyCKFoeGyHG4HslFD6kLkLJdtZz41XMMWrU909LgUcE5AWeqa2c3RrTm61J8kkW%2BXBuxVkt8qVa&X-Amz-Signature=1011715ccddaebf6c73c01964efe4dade33f2782c2b9fb7a35529f3f263628f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UNRMNY2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAfUT20FuunysaklSvrtJzDLtv%2FY6PAQpPXtVeL%2BP%2FOQIhAJTRAbi7N1DWUgvS3rtdeyZO77umvZDksGN7MMt1u88yKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycrxjSDRrGbO9Wucgq3AOnX%2BIzIN3ZG9TAg8ewdnw3VeXBO78x8J6%2FqC%2FtjK5l%2BlUJy8Q50Ugik7d9yeDNUK3Z6DKkAR2I0pglR5Gm90h1SSAOX2ogWexHkfVT%2FsDab8Pxchy23VLb2i7aBDJjJwIogWtG4q63ee9x%2FrEtVNa6%2BjHXz7VpFYjBo1bBkTGMtJ%2FuYrt49KDoI%2BwcKYYzvpvNbQOc1NkGuuozv2PsCp2nc18Odm6L3wpYKzzJYvA%2Bl2wJSc441WEzgaolSqbnNTsJLvboguUUqilwtLnbwACOjxLkfIq5fUmhQuwhkY0ZJYI%2FMLT94MGBEpVqM3fh9npFE4QiKqWPqEbmxTEMp%2BwtHCtBTD8StWnqLl%2Fu%2B%2BeTmadEr2znVwleSnDM342roD3WskOB97Baahbxs9LPbNuPxWw%2BsHbve%2FrFQFiqz49WoK1jUKs2KIrm2cqY8%2F2nBuKeOb6XQ7%2BprxONKYTc5AHXuQ9s4dfi%2BX2gqvMncvRfLBssKmu4exEfvfjibALEB%2F%2BG0cp82diCNpijSy7NxAXldyI0hCpxtLqBheSVQiRE2DkxSD1fH%2FXuQ4pgrSPIjq7hxSZLbWGORADDiGiS43bstsuerDfWR5l5nQ5Vpt6pB7%2FVFgK%2FysuzfDnGNjDy5KLCBjqkAbk3YrZxJPK2ZfbBCkAabp%2Bp6KKyFOKD0GvhXI5yp19mWVIE4gk%2BtLOUBjresXdOwMgX%2FSIQEaHWHaRIX7XJHQn1wU4RQVVzxxqQOxe9fEBN78DdlCDHTrtj8hgCjXwGtSajDvv%2BU2H4GbkG0HyCKFoeGyHG4HslFD6kLkLJdtZz41XMMWrU909LgUcE5AWeqa2c3RrTm61J8kkW%2BXBuxVkt8qVa&X-Amz-Signature=2f3ebba91e2b7459f5de3a474f4213904240a73bedf0d0f0ada936897f6f24d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXLXWKDZ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ6Cq8QRQc%2Bl182lQwEgwvkif3qoquRka6cXeNbprcKQIhAOv%2B9HRzTR0aQKZ%2F6AOMZpAgiB09iufmu82UQ0lKrNamKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCGXvKkTFAhDdqHpUq3APiz%2ByyO5fnrVL1A8%2B9Ee8zir1V8PmFO4dr1nsujxUG%2FGUDdIvJdef3Pb4%2FNBpfNb3n85UbGkaERj2Q81gbrVkB6mQdCj0XXHi3CtXBeggyaBrcFoB%2BcUOLCRbFvyiYRygqdiQWfKRxAM5htQXLkgaQ%2B20SlGJrKMhSTR4myklulkBr3%2F0cLIcJd5TZWoMbkj2L%2Blzts%2BI76j7%2Fjwm6nY6Q8YQ9rvmQTxq%2BrNLqXIrKbVYeqvRSufpCeaQ4ZOkWdwfLKdFdPrIRSmiVUDFwGuOKFPqOPfmVGX1gVyiW%2BQz4pHowd1LOsrK81VxMJQjFKkzb5meZ8rMROnKTo36lhtsW%2BUGdJFtVI6eVqzgYGdD6kf%2F6DBwNzj6VHbhqL77A2OUUhxVr3fTiIc9uFh4v123RiX3KZjGT6RlhiJ09%2FFrjCH%2FxSLgn%2BB3IeUmC5J8dXHl8tTtpf6EU1%2BzTK1yZgVXme4DcCKJYtW0CT0TYL%2Fslaf%2BqveNuBmb3cBneQ5PDSsyiitjWnnp%2BkPjTwhPt6IF4GIs3tjESZrlZD0%2F4Py6H1TGxMRF7ObizornIUDS3pkuE0hjs%2F85lM1zx1sIhlPwoncFcoK%2FDBvXzHp6EiBF5QdEJ77afel6RJqKwTDCq5aLCBjqkATrpT39wlTRU7pfImDCXMZd6Hn%2BFv1lktOlCJp30WmBH1A6WrY25kRz21RQqsKGmN1g47b393WHrA%2FuyFs8HCcjo9Bq9chCQl9k2KxGfsAOBgjMDGsVvhHBUKiAHiWJiw17RbwlBZqjH5uPLm3JU0O0dsBVNLHhJfKwENjO4t2HxqpviYrX3ThI3oFyg4YTu3OZnPhvVaDjjlp%2FtQ5ALrVl6E8qG&X-Amz-Signature=cd607dd68f570d79e933b5f844ba67a295dfcf417f65c99b760b2eb19399f8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJHTGTOT%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnofthUz6FIECs5Rje8pMfEsbTs92YzllU9qjStL26TgIhAJid007YisnIU8NmlYmOFwigtIuVMbOXcsnIH2ePXpzGKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjlZxOZ0zt%2FidwPYkq3AMMZTaL2RaFBIiP8uZSxLGRbN4o9a9BD%2FYOMYVpr3c1LvxPqi2yVnmzLIEcJGotEhZebLSo4jPyqEzvZoWwhr3d1lljMosAltNI5%2Fa4B81JZ%2F6qUXHbGI0bjt4cU5Cy8X9RERCgBrpq57%2FH8jpcKWQN1lvFRqfrEAY4gpyVUCNoZFNgm3AP2xDbfGWEl3%2FXEdIzKl0KTktglTK%2FTNDN7dKWjkBoVlOh8SM0yE0wqyoxExda43RGCXFCpyfZZiNCmY6GdaodSSEhCyY4c4Bu5IiiKWNOH37phbjX6kcRqeXRouqSp1udDs4dtNDeqxsOt9X3PAefNgzL5h9%2B1tBiQebVRIsPcJvnLX9o2tJoS%2BAzHdl%2B8D8Dox6pWJ9EMceX0LD%2FYoutHmL6WrJd6TjaNajPjo0WZfH7m8y8tURrWgVjK8vHTjGKtzDT8%2BfGmNeewjTkcPr%2BCStKfOccCLvq%2FCCIs3GO7b53G%2FZCYp62iuit%2F1AUfSXVtUSbbq0ngafKEqzOV6H3PlEq3ETFEP9Y2Y2idqvKoxtiFyVLr2S1LKCJ0md825RZj4p4RzoOHeS6lX%2FSUAcGRn3t8z3eNhCBNiFgmTWJSCcYPMyHnVo0zrLTIEw8b3gXPYHT9ZKRBDCT5aLCBjqkAVG8KD2Noj%2BWuZa5KTiiq%2Fcbrzdj7m4Xe24BHdpf5AIDBWqkmnWVaa7pMfXtc39rKvHjvSN5mfQboJZ5QfQCPD5VxC6koQ%2Bvpwvrxg58fUplwRMrHXjZPyhy7Do2Mlam%2FtZVCIxuqrLbrjcPuLE%2Bgy3wiT9gLZ79%2F80mRcOG%2BbvElVbmL0UZN9feEk2trKTD5ARW6poTob%2Fnry%2BQX0JHQ7Rk7ykK&X-Amz-Signature=8fb1a94c5391ca4ffe513938ff9b78eb977fea6a8392860678d41dd4ce031591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UNRMNY2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAfUT20FuunysaklSvrtJzDLtv%2FY6PAQpPXtVeL%2BP%2FOQIhAJTRAbi7N1DWUgvS3rtdeyZO77umvZDksGN7MMt1u88yKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycrxjSDRrGbO9Wucgq3AOnX%2BIzIN3ZG9TAg8ewdnw3VeXBO78x8J6%2FqC%2FtjK5l%2BlUJy8Q50Ugik7d9yeDNUK3Z6DKkAR2I0pglR5Gm90h1SSAOX2ogWexHkfVT%2FsDab8Pxchy23VLb2i7aBDJjJwIogWtG4q63ee9x%2FrEtVNa6%2BjHXz7VpFYjBo1bBkTGMtJ%2FuYrt49KDoI%2BwcKYYzvpvNbQOc1NkGuuozv2PsCp2nc18Odm6L3wpYKzzJYvA%2Bl2wJSc441WEzgaolSqbnNTsJLvboguUUqilwtLnbwACOjxLkfIq5fUmhQuwhkY0ZJYI%2FMLT94MGBEpVqM3fh9npFE4QiKqWPqEbmxTEMp%2BwtHCtBTD8StWnqLl%2Fu%2B%2BeTmadEr2znVwleSnDM342roD3WskOB97Baahbxs9LPbNuPxWw%2BsHbve%2FrFQFiqz49WoK1jUKs2KIrm2cqY8%2F2nBuKeOb6XQ7%2BprxONKYTc5AHXuQ9s4dfi%2BX2gqvMncvRfLBssKmu4exEfvfjibALEB%2F%2BG0cp82diCNpijSy7NxAXldyI0hCpxtLqBheSVQiRE2DkxSD1fH%2FXuQ4pgrSPIjq7hxSZLbWGORADDiGiS43bstsuerDfWR5l5nQ5Vpt6pB7%2FVFgK%2FysuzfDnGNjDy5KLCBjqkAbk3YrZxJPK2ZfbBCkAabp%2Bp6KKyFOKD0GvhXI5yp19mWVIE4gk%2BtLOUBjresXdOwMgX%2FSIQEaHWHaRIX7XJHQn1wU4RQVVzxxqQOxe9fEBN78DdlCDHTrtj8hgCjXwGtSajDvv%2BU2H4GbkG0HyCKFoeGyHG4HslFD6kLkLJdtZz41XMMWrU909LgUcE5AWeqa2c3RrTm61J8kkW%2BXBuxVkt8qVa&X-Amz-Signature=cc4023f70243bf544e12069151760c72c29fcba41f3618d6920f59fb74f9a604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
