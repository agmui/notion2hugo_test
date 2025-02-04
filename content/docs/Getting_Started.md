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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646SSXU2Q%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIFPXH6yIyrg%2BJFWk4m5mW4z0QdDEMkH%2FnVFAMqAazDL5AiAeOFZUDmaLR5AXzPEeanbBXQJD92ijwlz7rj6JrJf8sCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM%2Fbtx9tEBtIU9n7nLKtwDqb%2BjA5kdyYRGZeEvFlvzkE%2FSCT%2Biso9WzoiRNd0RFT%2BAQ2Ms4%2BWaz07pPuUgAAsdY8V3RRqVTgn1Q6zq13K3CckxYmqC3ft%2F%2F7sHU3uJtvu1G5yXUjsBvHrle1%2FGMEYD4TgHOf%2B6mnKp0FwMfHHE0Q1TGaxcn7jpHAr8gi8JXL2iCvOckDL8EmEHHGTJwsTwgnGsmFBAC%2B6Ejin7zc1nDah3lUdtjoYlpLW1hRjYuxcTp8mCukZHG6VJ560nbtxYDz%2BFrH0Tm9Kimt2mHT%2FC5O6VruGFo8Bccp9DdkBHBamkISO8fYYqWsWWZa1e1hNVdIiBCiNQKrN6TkAApphSXYUgi9DetOxBR0ESko%2BTuoASalAFXm9n14SvPMC%2By24E76tzyXhHdtmLe99fE3N9SKA%2Bzt2xaUxM1EvUkTFQeTYBKPTdLgm60vBYSCxUtnkCxEyKr9yTRJWdoA0zOaM4RPBL0PPJhtvuHJw3yG3ryK4W5z8tarVKh%2F3Y%2BwaiDfL7tIRKWV48hGzbzGVb8PO6SgqJaFWNSjsTPRoyDQcMozygtJLZFEJgJXKweJOagKmDFvDy96Ki7S3%2FImKrooB6VpzhDBTC4f%2BIy9EpUAxTqc75WLoqjonIynRCcesw2oWJvQY6pgFCkq1%2F9SHMzPtn2G0XYMTd%2Fp4sDB%2Bf1PNs1kj0vsGnww73b9g2Pqn04BZYcYYUS3WDZwhje6y5gE4W1Zg4Zl5Dx%2FZM4keHBRPKkQYBFCnqoc970G%2BZTIjB%2F6rRA0lGQ2TaQMzeskBy7D%2B66v474E7PmqZqUuS7M5l32M1AxVNTx4pAeFtW8AT4LvFMo0GXKdExfEPcwDlljdlGQuPugfeX2hU8ZJFN&X-Amz-Signature=3199678d640523d9396b0a11b304b025f17e7a17d43c7186d7f3efb3e7494f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646SSXU2Q%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIFPXH6yIyrg%2BJFWk4m5mW4z0QdDEMkH%2FnVFAMqAazDL5AiAeOFZUDmaLR5AXzPEeanbBXQJD92ijwlz7rj6JrJf8sCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM%2Fbtx9tEBtIU9n7nLKtwDqb%2BjA5kdyYRGZeEvFlvzkE%2FSCT%2Biso9WzoiRNd0RFT%2BAQ2Ms4%2BWaz07pPuUgAAsdY8V3RRqVTgn1Q6zq13K3CckxYmqC3ft%2F%2F7sHU3uJtvu1G5yXUjsBvHrle1%2FGMEYD4TgHOf%2B6mnKp0FwMfHHE0Q1TGaxcn7jpHAr8gi8JXL2iCvOckDL8EmEHHGTJwsTwgnGsmFBAC%2B6Ejin7zc1nDah3lUdtjoYlpLW1hRjYuxcTp8mCukZHG6VJ560nbtxYDz%2BFrH0Tm9Kimt2mHT%2FC5O6VruGFo8Bccp9DdkBHBamkISO8fYYqWsWWZa1e1hNVdIiBCiNQKrN6TkAApphSXYUgi9DetOxBR0ESko%2BTuoASalAFXm9n14SvPMC%2By24E76tzyXhHdtmLe99fE3N9SKA%2Bzt2xaUxM1EvUkTFQeTYBKPTdLgm60vBYSCxUtnkCxEyKr9yTRJWdoA0zOaM4RPBL0PPJhtvuHJw3yG3ryK4W5z8tarVKh%2F3Y%2BwaiDfL7tIRKWV48hGzbzGVb8PO6SgqJaFWNSjsTPRoyDQcMozygtJLZFEJgJXKweJOagKmDFvDy96Ki7S3%2FImKrooB6VpzhDBTC4f%2BIy9EpUAxTqc75WLoqjonIynRCcesw2oWJvQY6pgFCkq1%2F9SHMzPtn2G0XYMTd%2Fp4sDB%2Bf1PNs1kj0vsGnww73b9g2Pqn04BZYcYYUS3WDZwhje6y5gE4W1Zg4Zl5Dx%2FZM4keHBRPKkQYBFCnqoc970G%2BZTIjB%2F6rRA0lGQ2TaQMzeskBy7D%2B66v474E7PmqZqUuS7M5l32M1AxVNTx4pAeFtW8AT4LvFMo0GXKdExfEPcwDlljdlGQuPugfeX2hU8ZJFN&X-Amz-Signature=86666cd13cb0fc8504f44d33dbe66a0b03ac5899042c5a1863756a1b661739df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UABTVMKE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDqeRuxEGr67htDfAt5Cac1%2BHqIJrx0JkMbFkhmvMGBtAiBlQR5R4kmR5xmzSQBT4hyldhQYv4mvYIGozmPcKRLTByr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMwn%2BWNpQhFrHSG%2BOGKtwDHoDdt43f85CsrywjH9JqQG52%2FlSCo7%2FqX9PbG9iXoejfshG7w2lbfaEfFN0fTzX6O%2FUCp3Je7QIj5xgetpQbClwXPDyDnngGvIPf8uqRcA9%2FccmYRrdV6vi9IqAO3E54%2FGEj9rkoJiXQB67ajVjasJIWYe5hVIuSqtRkSzwJlbDtSbm81V%2FJ09T%2FXFwViY86tGojCJDyOtZJpd7lASxWdAzMigMKzLnt8lSV27EewZ4DKkweuIiul1XVIoR9gwziVvtR1xzVWwQW8BIC6zPiEBl%2Be2WplgrORx7%2FV4o9HG4qBW7ec%2FzdU6mLgO%2FJkOK8xeKwtuXXR%2FPdp%2F8UryqQ7gSBN%2B%2BVTOO0KvdIHmtvvlTt7YrjzRblzveqFhsUeQ%2Fjf1%2F8GQlzfqYHLtN0GiiOfAa%2BtH5fRgnMp3g5I5Rhy766FZ5bmq6RgZJ8c8RDIwn%2FMYZwYijebqkd%2FIO2jywNu4YM6ZgMIJ6WJq47Fh9t38xtVEm3H%2FWqoljdJaZ8PmV0doe02X3ZeiPJWO%2FWC3ht6KGWBKYrKfoX%2F5rTWkBhqKe6oguGW5bjThNHocWRKpUF%2F1saek2aLf8x9XwbSHhQQvkZQ8o4noz77gPAGaCV5tljQVhvBdGdjRMMcsYwxYWJvQY6pgGHKzbjawZOe5408%2BTGglO3DWIduNXt7Sfw3%2B3dBS6aqDGxHoovBNcgMucyGcgI%2F%2Fak5%2FLxstF5feV1uPV93iBMUDnjhNFAWULILMR%2BJYOsYMzOswql3ZJGx0kDM5I4fjQYkbuEK5tE2VooudtNPFEo%2F1TlMe1JvOIy8lwTLgPz4qgY3dxOmGFxaDph5PGLT0bPuHC3d0%2Fk4pq6dBttilbOs9aE23VV&X-Amz-Signature=bd56e5a9c475c87cc88ee3e4ac463bd3e3825c02724037742185cf0a551d9077&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGC6G57%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICfixuXpavSZ%2BUQs1LSx1hVJmeimD73WMdzfAOBzlezOAiEAn6nq1ISsnyDqa0%2F3a23uvHExllYzQwMhF5Ea%2BHY9lewq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMw6KWJq%2Fvy7uZ1YKircA5IlrqJchURnvK%2FxmA1VvH2sRJM5fsG8StK7je65tcmIb7Iqnus%2BOmOuhpdF5LKeq31i%2BUeGlvvrMJpg6%2B5Yc45j%2FkttZ9eU7dCBmU2a8AKvYjnon7MSsf%2F1wvMzAncummZq9cJ%2BMX928wP3JiXkarEUKMop%2FHj2rx5TnQnsDtoGHhlhAFkkEFxo0cHO5ixwl7CP2suPaojzVJboidFHfwnP7uHBOP%2FqC2SnimgclPX9zUYYJdPK18tWid0sz3zdnvQwCYOJBGcBhAFUHD9hBiDraCXufG6jzHoadVhQF1OsOTIcQpjnhE3r0gIUkhKfGMNn%2ByvRImjDo%2FmUNj%2BfNNKRUPnSdsOj3ujqkrDrblQDdr%2BI2%2BsGnBGoC2BK7AY4Kfu%2BAySE%2Be6R%2BQFSouytBsWzsSI2tSjIvjsQO%2BsnHRDmwKVEDbgPP8NKPZPJXUWEIWTIPW4IQHd23cPeFyf7btEtOGCjHqLJhM0Mu%2Bm2FWM%2FQydWNLpueiwD0fKMSKOgOEQh6azGRVE728rJ6Un3DtjFzGafqwbmWB4D%2B1AxI%2F9UqTx%2B8jYaV8eqherxfyiYVDPP5GjGSLGh6VHIqiRXfBsJMjyYTcKIlbsuuSRUR4ksRCm6a88aHYp4KQDZML2Fib0GOqUBFTi1mrrvw81wT6TdvfKMxnTLHcZcGGhXOJFXkvOOM9WnqLJ4OYGb64OouP1E7ZQEpX%2FzeDhzxrCeuDSDtMdeMfGoMOC%2BNqx90mixki1x3b4WCirzRTStrAGilNLN49y2qgWTF%2BQyIKKukUqljaJrD4nL6JgY2TVsHF854KDpFqhqQDNj4COJpr1QzcNIGovaiBtCDXmC8ZHM84sDaGxf1eG%2BbWT%2B&X-Amz-Signature=abcbb9eb639f050695d68462570992c118aed40bd8664014eff07fe8cda40f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646SSXU2Q%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIFPXH6yIyrg%2BJFWk4m5mW4z0QdDEMkH%2FnVFAMqAazDL5AiAeOFZUDmaLR5AXzPEeanbBXQJD92ijwlz7rj6JrJf8sCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM%2Fbtx9tEBtIU9n7nLKtwDqb%2BjA5kdyYRGZeEvFlvzkE%2FSCT%2Biso9WzoiRNd0RFT%2BAQ2Ms4%2BWaz07pPuUgAAsdY8V3RRqVTgn1Q6zq13K3CckxYmqC3ft%2F%2F7sHU3uJtvu1G5yXUjsBvHrle1%2FGMEYD4TgHOf%2B6mnKp0FwMfHHE0Q1TGaxcn7jpHAr8gi8JXL2iCvOckDL8EmEHHGTJwsTwgnGsmFBAC%2B6Ejin7zc1nDah3lUdtjoYlpLW1hRjYuxcTp8mCukZHG6VJ560nbtxYDz%2BFrH0Tm9Kimt2mHT%2FC5O6VruGFo8Bccp9DdkBHBamkISO8fYYqWsWWZa1e1hNVdIiBCiNQKrN6TkAApphSXYUgi9DetOxBR0ESko%2BTuoASalAFXm9n14SvPMC%2By24E76tzyXhHdtmLe99fE3N9SKA%2Bzt2xaUxM1EvUkTFQeTYBKPTdLgm60vBYSCxUtnkCxEyKr9yTRJWdoA0zOaM4RPBL0PPJhtvuHJw3yG3ryK4W5z8tarVKh%2F3Y%2BwaiDfL7tIRKWV48hGzbzGVb8PO6SgqJaFWNSjsTPRoyDQcMozygtJLZFEJgJXKweJOagKmDFvDy96Ki7S3%2FImKrooB6VpzhDBTC4f%2BIy9EpUAxTqc75WLoqjonIynRCcesw2oWJvQY6pgFCkq1%2F9SHMzPtn2G0XYMTd%2Fp4sDB%2Bf1PNs1kj0vsGnww73b9g2Pqn04BZYcYYUS3WDZwhje6y5gE4W1Zg4Zl5Dx%2FZM4keHBRPKkQYBFCnqoc970G%2BZTIjB%2F6rRA0lGQ2TaQMzeskBy7D%2B66v474E7PmqZqUuS7M5l32M1AxVNTx4pAeFtW8AT4LvFMo0GXKdExfEPcwDlljdlGQuPugfeX2hU8ZJFN&X-Amz-Signature=0ea1ae25c0ee76e74afbdeaa34f2b1fd7b9f286cdb05aa7084a23c3b5c5eec24&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
