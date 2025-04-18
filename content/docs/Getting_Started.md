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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CRD6PBK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt3H3N2mQM3C9myLkCvr5ijIEb%2Fn0HI3rRbJhvzsY4MwIgbTvSPmBRHpZVfDRGnWhGzmbFCIic2nRBKJXK3nvPc7Yq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCrO5QlnOjRzLyoHnCrcA6kwrz2ihamXOtu6gP2W790cJJr9MxxWD1BmfSo56gnkPcrdycs71aElZ3HhkJM67j4OPSgSzoJK4cc4yHH2V0XlhfDuwQkuTaECA7%2B0TMbhvI5aaemPgpjPebuAuVjQAD5Err8BLtTHnzCLkBqZiXkcosdiCg7qKpve%2ByXdt7oYHymojMZPlAs1%2FojZ%2B%2FOkxqdDBfGQmpzVbxdlYi%2FkQX7milhOqQ3vAMrLZLxHJUe34jjfby8S6vGF71JIyi%2Bd6sLUQcKJeAD9qD%2FlE6EkITSAavjlrinA9NeGGy7fBuLAU8wueO93%2F5NUoVJhGZnN7Uzp5JIfOgu8JY%2FppcfLYWi26DGU%2BGfDaGxTPKu8ptisDEgzSbZ2tQ%2BpVQFyYgpCcBuwJ8uUiUXEfTPW7XvKPQ6kXnpau%2BzHKqHKUQYPFAjSfeQQjW7yrhJXzTP%2FNxGTifI3VBpWdO65HKvWF1wdC3O7VWJvI6dM9ob62Z5TXHx2JmX3M4YVNlwgUTksQ18GO%2FSLy6wm%2BbspBo2NpHhYFqbQ0C%2FqdJSiHyy5HxxKj1Lzw6v70rHmI8eSGiNyoZzGjJF%2BGvPzo3fHeB6UjzeKrby2QASKRu3%2FtbDBlUIWGOCn5lP6qKJekPLgA1yOMJaph8AGOqUB1OX%2B%2BOuUoQqpMxUYqi3EBZLktpl4YoxnyOL8qv6FICoAJPwBMDMp50s37zGpH3mxypATh2K2xLoaMJwEny8DcXd5YEL%2By2Nhs%2FUj4eKgeb2jAMcOURJbAV7ZA1v3aWOrybRNS0BIlrUbvqYKDScGmeVmpZaZYJjls4amBPUeUN77lsq1Ff6ALvknKyWXqe%2FbHJ18lD6%2Bc7clGn%2Bpzn7FNg1xmOIO&X-Amz-Signature=1b499e2147e024f36f7ee88de4804342b80a59f834ca50b17b264a348e55ae3e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CRD6PBK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt3H3N2mQM3C9myLkCvr5ijIEb%2Fn0HI3rRbJhvzsY4MwIgbTvSPmBRHpZVfDRGnWhGzmbFCIic2nRBKJXK3nvPc7Yq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCrO5QlnOjRzLyoHnCrcA6kwrz2ihamXOtu6gP2W790cJJr9MxxWD1BmfSo56gnkPcrdycs71aElZ3HhkJM67j4OPSgSzoJK4cc4yHH2V0XlhfDuwQkuTaECA7%2B0TMbhvI5aaemPgpjPebuAuVjQAD5Err8BLtTHnzCLkBqZiXkcosdiCg7qKpve%2ByXdt7oYHymojMZPlAs1%2FojZ%2B%2FOkxqdDBfGQmpzVbxdlYi%2FkQX7milhOqQ3vAMrLZLxHJUe34jjfby8S6vGF71JIyi%2Bd6sLUQcKJeAD9qD%2FlE6EkITSAavjlrinA9NeGGy7fBuLAU8wueO93%2F5NUoVJhGZnN7Uzp5JIfOgu8JY%2FppcfLYWi26DGU%2BGfDaGxTPKu8ptisDEgzSbZ2tQ%2BpVQFyYgpCcBuwJ8uUiUXEfTPW7XvKPQ6kXnpau%2BzHKqHKUQYPFAjSfeQQjW7yrhJXzTP%2FNxGTifI3VBpWdO65HKvWF1wdC3O7VWJvI6dM9ob62Z5TXHx2JmX3M4YVNlwgUTksQ18GO%2FSLy6wm%2BbspBo2NpHhYFqbQ0C%2FqdJSiHyy5HxxKj1Lzw6v70rHmI8eSGiNyoZzGjJF%2BGvPzo3fHeB6UjzeKrby2QASKRu3%2FtbDBlUIWGOCn5lP6qKJekPLgA1yOMJaph8AGOqUB1OX%2B%2BOuUoQqpMxUYqi3EBZLktpl4YoxnyOL8qv6FICoAJPwBMDMp50s37zGpH3mxypATh2K2xLoaMJwEny8DcXd5YEL%2By2Nhs%2FUj4eKgeb2jAMcOURJbAV7ZA1v3aWOrybRNS0BIlrUbvqYKDScGmeVmpZaZYJjls4amBPUeUN77lsq1Ff6ALvknKyWXqe%2FbHJ18lD6%2Bc7clGn%2Bpzn7FNg1xmOIO&X-Amz-Signature=23238022d0dca9b2205ec4ca3cdb13762aa31a522c6d0d524f6503d03ff908e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IVAWSMC%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvhFQJ%2F1NngTULJMnX9W9I4z1We%2BfzfY9hFwdHHcTjeQIhAI%2FZjq0pYvOOjy4BKuhOe6l%2BLZqjqrZA4jVGkF8NuhRqKv8DCG4QABoMNjM3NDIzMTgzODA1Igx6xC%2FdJLgE8jr4eTYq3AOEm7cJxMQYhEy8IHq1Ezk29kSTv7JjW5Ma35U2OOu3oy08vEwi1RY4Py1DQqriyD3SwyMU3yhBsbXBF6OW0Tx%2BUDr79uL89jH6PSSbDBunDhvhlTVRaWauAP71b9A3%2B%2BSQDSVRezh2AYomvQVHqyT%2BHwKihZhiSShiyvwl8%2FuwjZtdt7eh%2F2ZlR79G7Xr4Zw%2B%2FEn%2BwTnkWuxz39Py8ixOksHVOk43xgzeAWk5w9MiYv5y9bitZQwLtgM7bi%2BqDkCGC9QOOaHqmBMKGWIZgSqMxmJ6mt%2FZjfHMdrH%2F0PiAjtkkawjLcUesN0tScDWlm7FwsHJ5pZd4mUKIPRVDK173mMHD8tRwYIYgwBBKTkSdh6rZbwRVJi5QmuZgPJi6t87wWywhkF0a4Ime4Nnypu4Zg3VPZF7nzvKPd5ZqH%2FEqLbNVbLHEQ6J7di1T%2BFFcEQg%2BH%2BjgFe8zh5zx8TUiFEq74ZLQX4ofVVwKRC%2BTihLeG%2FCrKUyVHkQXSPxO0VNdoOlu9OldxFpS0af8%2FHKY9olAYBhnucfHUdOEz4zCGTX%2B7Xbqh0xvg0vKlnRUvMO0dwb5tMkYLDlYfBjO6sC9ZkN2q09JZqKeJ1EGq17mNHlQfi8%2FgJ7wRAQ%2BN5iEZojCjrofABjqkARKcjmh0Yv7bF9SIfCY4OWM2VCtz%2FpSoB4TS6AVXjGThbsMZ3vxEiQPxAtvHUUM4YWcbfRMy6V27JDs7YDCTn5XmCtMvHUc6OHWZioA2N%2B9K0fRccjs0fL%2BLyD3atT0VnTm0ejYIAg9EPcnzIBnPbIQxO7QlQXvNza9CSSM5O%2Bqfrtk4wELbKewIyr4ackU%2Fc4aMY3YckZ2GtCAeBfWV%2Bs3CWsDe&X-Amz-Signature=475408075a3e632cff80f8893b4f026dff318e8f3f76604db54e3a656becaee8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5DI5XV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtIknYKjpbEUv7kr%2FYoEUI%2BM%2FhJWMwB1IFYMgEoVFpngIhAPt1853nUC112nI0eKO5LKmSvMNWx8lgM5TOt4C022trKv8DCG4QABoMNjM3NDIzMTgzODA1IgwAxe2000WZTjYXdYsq3ANqTSZf5ug2cEJTDx8N2cl6nDbwI5%2BMH%2B1lcNfQugAm%2BVvCVGNZgSrJvQDnr3iptOZ1KBqvOsZKtjcM35BtB4MybwelQIGlJjIeMb%2By%2BZXSjq0fYHgKcdXGtFcJtKGTTuVmpf36OS2R2qDvnLpakVWDUDRfqfTnFCVwtxbTPQ2jVjI2R%2FOK%2FbDVhd%2FfOJRsWutl8u02uviBnhTRPCiPqvQ0F%2BgnnGJkmZ5lFSnHjRwz%2F5gcFmmU3zK9kPjEf1WFiKMyCu6R4v0vKOPYqQAKh0IzDFmjD1Ie76GmOhwT%2B2Lr%2B8eOGwzd7B%2Bo3wZa1GOtxbYWblcULv1lQTmle9ETKglAcCuYcLJIOoCPHG90nkwjPYXeBiO1vuAxnDxEsNP%2BeEoZm5MwnMBGcko2OGKkrqMWO8waPfmsVspM617vXkS1gonvJzqu5PAP7CfNp9gkclL2tr5CJ7B0a0TAkA13m%2FfcwXb7tm0dwipuBt%2Bu6e1e2cW9Z7tP7vFgyV7ZCc32lMb5YwnqtqUHP14PHQ%2BqNroKXAPFGzD87cxYs%2Fq3NyIdYLJDciUzlubk3b3igSM14kiAx5TNOx8Cgva%2BjaoAThUYAo8336ZLWZyIp4DLB%2B7hMJqZDYiVnRhj1vOe1zCWqYfABjqkAQau1Js2dewji6hkdhaIX2q3penDEPE1Gx0zXYZnTQe6pGnIgw9EiZ5q9WZwosem842ZMEl5uYhYSUezypQFxRmr4t1YYcgs4DNIx4H71cMAOQTDVITLcLKbBgdQawnHaHBopfsSs3g4JCU8XKNNm9G5foiIo9eGe6ze3P51zhiqZtAMXUzvWHyIC%2BpJKV%2BZKHO%2B9Or%2FXTO3G1gL6ja3X%2B8Im7tQ&X-Amz-Signature=e26bbb124108d938f21f8a9058e3b56db015bbdadcce58f6286bc4aa035b15e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CRD6PBK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt3H3N2mQM3C9myLkCvr5ijIEb%2Fn0HI3rRbJhvzsY4MwIgbTvSPmBRHpZVfDRGnWhGzmbFCIic2nRBKJXK3nvPc7Yq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCrO5QlnOjRzLyoHnCrcA6kwrz2ihamXOtu6gP2W790cJJr9MxxWD1BmfSo56gnkPcrdycs71aElZ3HhkJM67j4OPSgSzoJK4cc4yHH2V0XlhfDuwQkuTaECA7%2B0TMbhvI5aaemPgpjPebuAuVjQAD5Err8BLtTHnzCLkBqZiXkcosdiCg7qKpve%2ByXdt7oYHymojMZPlAs1%2FojZ%2B%2FOkxqdDBfGQmpzVbxdlYi%2FkQX7milhOqQ3vAMrLZLxHJUe34jjfby8S6vGF71JIyi%2Bd6sLUQcKJeAD9qD%2FlE6EkITSAavjlrinA9NeGGy7fBuLAU8wueO93%2F5NUoVJhGZnN7Uzp5JIfOgu8JY%2FppcfLYWi26DGU%2BGfDaGxTPKu8ptisDEgzSbZ2tQ%2BpVQFyYgpCcBuwJ8uUiUXEfTPW7XvKPQ6kXnpau%2BzHKqHKUQYPFAjSfeQQjW7yrhJXzTP%2FNxGTifI3VBpWdO65HKvWF1wdC3O7VWJvI6dM9ob62Z5TXHx2JmX3M4YVNlwgUTksQ18GO%2FSLy6wm%2BbspBo2NpHhYFqbQ0C%2FqdJSiHyy5HxxKj1Lzw6v70rHmI8eSGiNyoZzGjJF%2BGvPzo3fHeB6UjzeKrby2QASKRu3%2FtbDBlUIWGOCn5lP6qKJekPLgA1yOMJaph8AGOqUB1OX%2B%2BOuUoQqpMxUYqi3EBZLktpl4YoxnyOL8qv6FICoAJPwBMDMp50s37zGpH3mxypATh2K2xLoaMJwEny8DcXd5YEL%2By2Nhs%2FUj4eKgeb2jAMcOURJbAV7ZA1v3aWOrybRNS0BIlrUbvqYKDScGmeVmpZaZYJjls4amBPUeUN77lsq1Ff6ALvknKyWXqe%2FbHJ18lD6%2Bc7clGn%2Bpzn7FNg1xmOIO&X-Amz-Signature=6afbbf5cfee0a47a379e4649f45a78f0d695fdcd3ebc606feeb9a26637b8c3b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
