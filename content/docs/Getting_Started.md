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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R466OTUO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBF8vNf3sHSlEOe1xGujosnMC%2B80igupoe4npfVBbLHJAiEAt6aTW8hg%2FcLDqIeQrbQjp3zGYyjol8EqokTUpS5NNm8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8VDc2KWN99O7volircA1iExMUXjlHd8Bna0T6F19q0Hk%2FC7myx4S9d7JU26FKm9oo%2BM%2F87WDX%2Bjqx%2FbrBuvaLV7BcGq7DgfiZ%2BQFnAtkM46Yt6y8BMVuvh6v0YDshbJwfrxUIhpgmhRnYsk%2BN9EVq6Lgu3f%2BuU0ekGezdfnOQmpcnrt24Tw2HTSd5dfvUDKjNKnBYerrJ4vht4kqaT64SWGD229S1ePy7jWM3CI%2FsWytn7U9kRusz%2FHK5x28L%2BB6O3zdougeuTvN2h4EwfzGgK1phRw4d%2ByXWiIgywfK3nrescbeMaStIm%2BtdWl%2FEBtNoQbENohDWN3mCjaQeYA6H6EGDi2FSgdB77i%2FMncFhiJjv%2FOGHLD6uBSraKAcvJD7V%2FyRg8pRCTPGRTl0UW5OAYAW8DOMNMoQQ3kjtsVPiAvzkLf6wiFvMaODgjJ5fG2goMC9GwHGEWI6cKPK0jqeS6x0slN5%2FYUDZdHYQuX8E7PjQxK3kMQEfYcCCnpRfGYQrCxCC8FZCK%2FX0sHuarH%2FuhZdye2rGx3Y%2BMwZ%2Bkgx%2FJXKs7%2B28%2F1rGACWzjnmsgnMMFlIL2z%2FL%2FfZvXDbz2P6XVq42aJWKSgv5kOZpu81q3JRojjKmwozzXx5Fux8fGNVbmbapW5VnpsGDsMKCXm70GOqUB917Rqxcj2vNcyzL6OKMuPt2PH8blk0xJpBYrwyA9Y4KfS1h9%2B9qbQvpUSMSmvHbyIMmzPQJb%2B6rg%2Fs%2B5xjKJcjwaoFZj13t1y6PpKNhoz%2BUnh%2BUQBjyNy%2BAh1GMaQwCurCDga2oIn6nnTc3xCnxtng9r%2FltrIh9WD8gvkCmQlZITG0zX95d5fMT%2B5zbiqkl5%2BCxHsOvk99sYn%2Bx530rsYiUVy4O%2B&X-Amz-Signature=a2d59a2d2fc571f06809684351f3c5d641c4825ab5ae7a26ef12132a6c0d4503&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R466OTUO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBF8vNf3sHSlEOe1xGujosnMC%2B80igupoe4npfVBbLHJAiEAt6aTW8hg%2FcLDqIeQrbQjp3zGYyjol8EqokTUpS5NNm8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8VDc2KWN99O7volircA1iExMUXjlHd8Bna0T6F19q0Hk%2FC7myx4S9d7JU26FKm9oo%2BM%2F87WDX%2Bjqx%2FbrBuvaLV7BcGq7DgfiZ%2BQFnAtkM46Yt6y8BMVuvh6v0YDshbJwfrxUIhpgmhRnYsk%2BN9EVq6Lgu3f%2BuU0ekGezdfnOQmpcnrt24Tw2HTSd5dfvUDKjNKnBYerrJ4vht4kqaT64SWGD229S1ePy7jWM3CI%2FsWytn7U9kRusz%2FHK5x28L%2BB6O3zdougeuTvN2h4EwfzGgK1phRw4d%2ByXWiIgywfK3nrescbeMaStIm%2BtdWl%2FEBtNoQbENohDWN3mCjaQeYA6H6EGDi2FSgdB77i%2FMncFhiJjv%2FOGHLD6uBSraKAcvJD7V%2FyRg8pRCTPGRTl0UW5OAYAW8DOMNMoQQ3kjtsVPiAvzkLf6wiFvMaODgjJ5fG2goMC9GwHGEWI6cKPK0jqeS6x0slN5%2FYUDZdHYQuX8E7PjQxK3kMQEfYcCCnpRfGYQrCxCC8FZCK%2FX0sHuarH%2FuhZdye2rGx3Y%2BMwZ%2Bkgx%2FJXKs7%2B28%2F1rGACWzjnmsgnMMFlIL2z%2FL%2FfZvXDbz2P6XVq42aJWKSgv5kOZpu81q3JRojjKmwozzXx5Fux8fGNVbmbapW5VnpsGDsMKCXm70GOqUB917Rqxcj2vNcyzL6OKMuPt2PH8blk0xJpBYrwyA9Y4KfS1h9%2B9qbQvpUSMSmvHbyIMmzPQJb%2B6rg%2Fs%2B5xjKJcjwaoFZj13t1y6PpKNhoz%2BUnh%2BUQBjyNy%2BAh1GMaQwCurCDga2oIn6nnTc3xCnxtng9r%2FltrIh9WD8gvkCmQlZITG0zX95d5fMT%2B5zbiqkl5%2BCxHsOvk99sYn%2Bx530rsYiUVy4O%2B&X-Amz-Signature=409534a0e5526035b76012e18afc7a7c77b2b206fb77c4b35f7342f491c39e54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KYTPXPS%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDOzTt%2F1TH5W5nbcTFTPeEr4U7jOvLe7EbeoVsae4C7fwIhAN7Kk%2BzmPtttkHcszApH4xzvvSaJEoQdZJ7MOZFIN7pPKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw0LQuMcMNl%2B%2F0GX4q3AOc3YEKoVjnxUgxc%2F3JOtHqFWoWX%2FShgKAIdhtfcEZrnHLx8OHLGSqFuA3aHSQVcgnoggG0xiNFBZc6Hf95OT2m0prOxFjfWtXhJByiwGke3aTZkABFET43NNnCqZHDIr00AJXhR4yhh139UvofcDMVtD0vQu4YDiY5wlqDwAtiA%2BfBdaT4UoEIRFBjgPKYalcBwpWouUX94LahsYdX6fwcqCLxy0mSF6hNQ2UXTOqX0WaTpPhpESzSEqWdgWuHDhOhn%2F3e5uig4zcNoQWWoR7qgdcyIJ97HVJpLjNNjMKdfrQ0L0TjBXe1URjdN77%2F7pom8NtU3wdFszaCEURjxtu8MhQOCKZSvHn824YOKMltow1HRtjNh5BQxt4KiOwQkORVLgXNPli6IeYqJ9Tu%2B7IKTzMnV0XENtt%2FiLbm9%2BZOfSnTEMkC%2B%2Br0vr%2FHRRfGDTJd2HCGckMM%2F7MxSS8O1w3O5sK0fjdS7LUobEea%2FRJ6XcE2ezFQ6qcwNDefIQ%2FteZuqq0DSEqztLL4hkgg7QDEnzeMGgw%2BjhUZOU5SNhk0YdlVLQ%2FFquAB2l2RU9cJBV7S5WsRrJb%2FtReDShEAQAGUc7rsa8eR2WC%2B%2FbSUL7rAdKUXm6dKXyQU3j40oxDC5l5u9BjqkAWHm7X6Hv960rIMXracmDhKED%2FP06dLIiFTntC%2BXtyhENKdag8txq%2FCUsBqT5o4Mzj5Vt9N88kWO8m0J7zfwHcmYJFZ4bT%2BqVO9xhv9mLMG7U%2Fzv35oWv6RiR6AxARebA0U18oEcbQyzlKmPi9iQTiQFlYe63csbqKLqyS03KFklPKaKHjY6BEwGLafkjrZzpGJ3uVLTzXIi%2FJnuIm6HpZn3Dlnw&X-Amz-Signature=554ce3ff5e1d1e31fa8be82a9ee9daa9d1b76ccdc9ce3dcb03fcf218089c17b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5QYFGOT%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCqVhy8Am5%2FtNiVsWr2GBgEhGthLleIeRyguSxkaEWFdwIgf87eh1wZDHOsE8I5Ue4aj3rNlUMpqTN2I2Vno7qL03QqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLQcYWX5MHVx7ZUbircAyaATi91fwiDtKsxzEtGvPeVGsmwfa%2Fs%2BkKhJRvgs7zInustJ3Zyh84CS8fs9Yjj1WXdmnlOqsNVpUd3Ua5%2B%2BQPHxP0yjOsiDyXyTKRZg%2BeS2u7NM8OVghgaGWoqOQWgKL0rjuZQywgCi6Qv%2BFBLjoBu%2FLGB0XW6zfUCg2ZRCu%2BKXw9g%2BwueEo%2B3%2B9FW8I49RAGY8hJ5h6B8NYnxFrfrReVSCIw47Mo57uwElqe3PPQZ6IV%2F9AtxPzNKXrxoI7FpEUCTcpy4LuCFPTqlTUeY%2FoxrE6TYcj4mCr5hyYoF1VLKkswfpejqyNvs2iQSq1fHXMu2RPbwG3JC7sRRxNGqPJrtatajntYWhO%2BfpeS%2Boh4HLaa62dzxah4NrRWplnvlyqwjrlWbZI6xFG4esf0z5vXO82hg5ahC6AAbHoPgkMhi6HYThJxG6Z7cY%2BOB9lIZmna0R9JNeTQmvBSgTLlmdTanzP89bWZzYmIvcjGnSIot4ii8%2FlzgEWJeixolrVayLXBT%2F8C%2BFKQb9AVvf4ZrsOLiAXXcuSypBWSs%2FL%2BikjfnpAO9AusYLIimO%2BfCTEiWCjGqGmfcdIWjhCFQ0NlLNMCz%2FpkxOk8X9JjW1qyrvrvn6RzQXmo%2B7NkN64ZHMIKYm70GOqUB88yYUwgesHvh6bcRRnuZAvQD9e9a65ENs0pwvXd%2FRxEjaRz5nekaRGAWJvegwDEEuVZfBE%2Bg4xM%2BctUIqusH8lDJ4m3X%2BC2t6mCA77rwxlBgavVWyMMHu4gvtIZVorAuJJ5itFqZpCGJAxXoOax1SS0KwEshNGmi1Z7IFYC0XIjCnqs5CAhekgCBUYWq5VtelnNtp3SxqSXmyaeXhu2jn3wmkEfw&X-Amz-Signature=3245e7ff67757d1a16b56f1a2ec5a3dd113f2b8bb4c090aca780c09930586cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R466OTUO%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBF8vNf3sHSlEOe1xGujosnMC%2B80igupoe4npfVBbLHJAiEAt6aTW8hg%2FcLDqIeQrbQjp3zGYyjol8EqokTUpS5NNm8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8VDc2KWN99O7volircA1iExMUXjlHd8Bna0T6F19q0Hk%2FC7myx4S9d7JU26FKm9oo%2BM%2F87WDX%2Bjqx%2FbrBuvaLV7BcGq7DgfiZ%2BQFnAtkM46Yt6y8BMVuvh6v0YDshbJwfrxUIhpgmhRnYsk%2BN9EVq6Lgu3f%2BuU0ekGezdfnOQmpcnrt24Tw2HTSd5dfvUDKjNKnBYerrJ4vht4kqaT64SWGD229S1ePy7jWM3CI%2FsWytn7U9kRusz%2FHK5x28L%2BB6O3zdougeuTvN2h4EwfzGgK1phRw4d%2ByXWiIgywfK3nrescbeMaStIm%2BtdWl%2FEBtNoQbENohDWN3mCjaQeYA6H6EGDi2FSgdB77i%2FMncFhiJjv%2FOGHLD6uBSraKAcvJD7V%2FyRg8pRCTPGRTl0UW5OAYAW8DOMNMoQQ3kjtsVPiAvzkLf6wiFvMaODgjJ5fG2goMC9GwHGEWI6cKPK0jqeS6x0slN5%2FYUDZdHYQuX8E7PjQxK3kMQEfYcCCnpRfGYQrCxCC8FZCK%2FX0sHuarH%2FuhZdye2rGx3Y%2BMwZ%2Bkgx%2FJXKs7%2B28%2F1rGACWzjnmsgnMMFlIL2z%2FL%2FfZvXDbz2P6XVq42aJWKSgv5kOZpu81q3JRojjKmwozzXx5Fux8fGNVbmbapW5VnpsGDsMKCXm70GOqUB917Rqxcj2vNcyzL6OKMuPt2PH8blk0xJpBYrwyA9Y4KfS1h9%2B9qbQvpUSMSmvHbyIMmzPQJb%2B6rg%2Fs%2B5xjKJcjwaoFZj13t1y6PpKNhoz%2BUnh%2BUQBjyNy%2BAh1GMaQwCurCDga2oIn6nnTc3xCnxtng9r%2FltrIh9WD8gvkCmQlZITG0zX95d5fMT%2B5zbiqkl5%2BCxHsOvk99sYn%2Bx530rsYiUVy4O%2B&X-Amz-Signature=b9cdeb561b6c9de9549da950daac86a1af55ad3f563c0cf9e7a8d4c6c1f8a1ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
