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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMMSOWYV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBet0B%2FVpDFbPuSEFCsQJRw1Ii7k4dnpspIXxBQt%2BuKrAiBNHFwVYepTh7W%2BD7hAyKx2k%2BJmwHe2mBsV8g%2BdJ7htdiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzwHQFyihseqp6njUKtwDpFxhxRsLIq49%2Bcwrud5JoQeS%2FqMSDSB1L6IBhTdVm6BmQSmthAQalyNOt0oNB2FkZyIwc2%2BUSNqEqpjMqdCKzWxyc7zYpNxEg1dgTIT5ZSG%2B9yLSPAjZkdbKZI2xcge5HztJ7ULWhTy75dQf5uSzHAK2JejBqxnUs2gP6dxvZRvLu4q0y%2FRHoshAKDpHuUjf7W26XNkVKla4uYoP7veHjcoroj4%2FQg7Ke7ARZKpFjd4v7AyNPJYupYvWDwLqPB5YaQLFvSoCT5VBGqtgfVPewXS8EiRd20WMUgG2JG8cNVcQlhb5TXDEyWvwmDRRXJl7dlkEKdOqX61wlVy1eiyKFctibpzsO%2FsHM34%2BMsaIsCy9epC1VFefn6KHQzGkmLgDKMCYv1G%2FOZ8IXuDevPho4AVAcIrutJaDoDTye3LIYnA0rUP333OKUvaklgqw4jKE3gCZJrBNinhFV5FhVuS6PtWGrJBVPrRfXIysvhho5rJM5EiLENnDE1xnnnfaL8qkxq6RBjWsBBhYAfySO1oFFuR7x%2FYY%2BbPpqxeFo59istzSQUd%2FTLreLfIwDDvTKXNbv3PmQ7JkmAEVKabFkAEEKPQHQJKIqA4oZTcqrAo%2Bjr1oGrjRXw23eNdUQZsw0LuEwwY6pgHdMLqDoDkCopZQ8uAdcSORMmusCxKI%2FAMmJFW1xIg2NWmsTxGib%2BRIAEaniC1GBNPIOj7YbShZoNu7US1qUcHT4AvnnNfN1sKZsHM0YC%2BfuCbfP%2Bfd8P8Mt1sYLjNH34%2FkAbOlADaHRL19DLi5tFGHFNctAlZa5z2ngW9fHOwV34n1YFiPzAD6th%2F%2BRUjCocldmUbxzXOV0BVWNHwaszYE2XChKmfI&X-Amz-Signature=22bb3cdc89be01e17ef01e7107acaabdb915c77455cde0565e8b7cbcfe6a027a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMMSOWYV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBet0B%2FVpDFbPuSEFCsQJRw1Ii7k4dnpspIXxBQt%2BuKrAiBNHFwVYepTh7W%2BD7hAyKx2k%2BJmwHe2mBsV8g%2BdJ7htdiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzwHQFyihseqp6njUKtwDpFxhxRsLIq49%2Bcwrud5JoQeS%2FqMSDSB1L6IBhTdVm6BmQSmthAQalyNOt0oNB2FkZyIwc2%2BUSNqEqpjMqdCKzWxyc7zYpNxEg1dgTIT5ZSG%2B9yLSPAjZkdbKZI2xcge5HztJ7ULWhTy75dQf5uSzHAK2JejBqxnUs2gP6dxvZRvLu4q0y%2FRHoshAKDpHuUjf7W26XNkVKla4uYoP7veHjcoroj4%2FQg7Ke7ARZKpFjd4v7AyNPJYupYvWDwLqPB5YaQLFvSoCT5VBGqtgfVPewXS8EiRd20WMUgG2JG8cNVcQlhb5TXDEyWvwmDRRXJl7dlkEKdOqX61wlVy1eiyKFctibpzsO%2FsHM34%2BMsaIsCy9epC1VFefn6KHQzGkmLgDKMCYv1G%2FOZ8IXuDevPho4AVAcIrutJaDoDTye3LIYnA0rUP333OKUvaklgqw4jKE3gCZJrBNinhFV5FhVuS6PtWGrJBVPrRfXIysvhho5rJM5EiLENnDE1xnnnfaL8qkxq6RBjWsBBhYAfySO1oFFuR7x%2FYY%2BbPpqxeFo59istzSQUd%2FTLreLfIwDDvTKXNbv3PmQ7JkmAEVKabFkAEEKPQHQJKIqA4oZTcqrAo%2Bjr1oGrjRXw23eNdUQZsw0LuEwwY6pgHdMLqDoDkCopZQ8uAdcSORMmusCxKI%2FAMmJFW1xIg2NWmsTxGib%2BRIAEaniC1GBNPIOj7YbShZoNu7US1qUcHT4AvnnNfN1sKZsHM0YC%2BfuCbfP%2Bfd8P8Mt1sYLjNH34%2FkAbOlADaHRL19DLi5tFGHFNctAlZa5z2ngW9fHOwV34n1YFiPzAD6th%2F%2BRUjCocldmUbxzXOV0BVWNHwaszYE2XChKmfI&X-Amz-Signature=5d2f390f4f91fa56f95495d9dd09306329ccb5ea6cf1fc8c0667aed061031caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMMSOWYV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBet0B%2FVpDFbPuSEFCsQJRw1Ii7k4dnpspIXxBQt%2BuKrAiBNHFwVYepTh7W%2BD7hAyKx2k%2BJmwHe2mBsV8g%2BdJ7htdiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzwHQFyihseqp6njUKtwDpFxhxRsLIq49%2Bcwrud5JoQeS%2FqMSDSB1L6IBhTdVm6BmQSmthAQalyNOt0oNB2FkZyIwc2%2BUSNqEqpjMqdCKzWxyc7zYpNxEg1dgTIT5ZSG%2B9yLSPAjZkdbKZI2xcge5HztJ7ULWhTy75dQf5uSzHAK2JejBqxnUs2gP6dxvZRvLu4q0y%2FRHoshAKDpHuUjf7W26XNkVKla4uYoP7veHjcoroj4%2FQg7Ke7ARZKpFjd4v7AyNPJYupYvWDwLqPB5YaQLFvSoCT5VBGqtgfVPewXS8EiRd20WMUgG2JG8cNVcQlhb5TXDEyWvwmDRRXJl7dlkEKdOqX61wlVy1eiyKFctibpzsO%2FsHM34%2BMsaIsCy9epC1VFefn6KHQzGkmLgDKMCYv1G%2FOZ8IXuDevPho4AVAcIrutJaDoDTye3LIYnA0rUP333OKUvaklgqw4jKE3gCZJrBNinhFV5FhVuS6PtWGrJBVPrRfXIysvhho5rJM5EiLENnDE1xnnnfaL8qkxq6RBjWsBBhYAfySO1oFFuR7x%2FYY%2BbPpqxeFo59istzSQUd%2FTLreLfIwDDvTKXNbv3PmQ7JkmAEVKabFkAEEKPQHQJKIqA4oZTcqrAo%2Bjr1oGrjRXw23eNdUQZsw0LuEwwY6pgHdMLqDoDkCopZQ8uAdcSORMmusCxKI%2FAMmJFW1xIg2NWmsTxGib%2BRIAEaniC1GBNPIOj7YbShZoNu7US1qUcHT4AvnnNfN1sKZsHM0YC%2BfuCbfP%2Bfd8P8Mt1sYLjNH34%2FkAbOlADaHRL19DLi5tFGHFNctAlZa5z2ngW9fHOwV34n1YFiPzAD6th%2F%2BRUjCocldmUbxzXOV0BVWNHwaszYE2XChKmfI&X-Amz-Signature=22cd522c8b2910d7b8f199b62fca17ab48d6908ac91bd6a9e1a5c0f43e646036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJE4FOKM%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE39Gi8mAkx5Fc5Zx2lszIF4mIq%2B8SWI2Vn0A3aogUIYAiEA0oW7elBybCfa4x98OaeWtYgGhGcMSY7j43ft9UgUqX0qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNS3iWqRcO5ozlSXJyrcA%2FL27FHG9MNx4FadA3kv4NYjVugjD7bZdRX2wj9nizu%2BRhP0p2u7l%2BodU7MCWlArLXDEnHN6mYxT9VpbJRrZFuaYFqKOeyvQl129zppztBtu6KoZ5PY0JIV3LMAJK1OHNt8oB%2F50IQrTGy%2FG2lz5%2FUELZcTwoyaRH1ZkNTtLMtHI87DJ%2FKb0BMOuxhRsjxigGVFoXLsc3c81%2FtJDKKbsi%2BnLk9Yz7xoxVHaMezIkaRZPmjlI3TubUzFpmZAuK9NzIoO7ipqvUbhDnWVCgb%2BdX0G2xDkCSsfk20vEYLW2UVLaxrdnhQdNTuoVgHfxl08kDYhJHPyQ3iLlMABJXhNizLdoBZ7BE%2FDZGQ9l7Og1sfVzv7oqgRUpYZSZOworJKAKxmaelkT3tygX1HFsqCkLDPPtCHqbI4WZmZwIRPShYxKcebBuSj%2Fva9n6QYD8Rneq7tVyOUA%2F5GmIUV1N05KsZdPTxUXwMIqqRRLeZIsjzbq943BLtAcH2AV4T2pONq8NkK4WZhOOS2ur2E%2FfxguKxWJ6DMSGMQ2CTEHgyO6PgFKcCbtTIiebUYur7KKODqBtt8NyS%2FsSfe53eJtcISTUA%2FaGe2aILzJMA%2FvcPwj%2BouS5cSf9sn52lBrdDsBHMNK6hMMGOqUBJcaBB5MoP13pVLcVbcfpKoeM7M7Bms8p1mdpGf9wDJrZ6BqRfXgVsIk%2FO6nuF7mWlr%2FJ9xthJXJr59JKIY0e%2BO3dZg0KrBwKV6EGN5UquldCtNZYRIW0eZvGkBbuIvVR%2B6x3CCCH2Sa9AgK75A0q5r7qvT3p5t8hl88vmC8UKx7q4sg9vWybjMXAPKwvs%2BoBor8YrDMOWX1AqIE6XKkwp8ganeLo&X-Amz-Signature=5bc9a598f7413fe3c09fc263e90583e07d95d0fe8f8cfb50b5b2286db26d3386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQEAYIV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq25gvGjJ5EiKdJzWJHz7K6zWda9%2BpT5CZGbmHRNkiQIgftzjOYOBR%2F27Rv7kJqgCvraYfzEZ7TLmPPQFSmVoFPUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrn8gumc0jnC8zUsSrcA%2FHqA2%2FpJUDtomiTo0iRssJat3ALZDEp9nAq%2F3Uu28z66gkKWHeaJ%2BT%2BXRDOpvExabCr9KR9Iv9ZKVwV%2BeZJGSQ6L8lXoaIN78mRULlkBECEVc4ZrdqOQOJrJscl2SkK5BUAoZ747Hv%2BYgUBxnv12nebGQ46qLC6BiaiRMZ4tW%2FAnWWK28mYPFO6RSHAKPfPr6t%2FI3g6e%2BIUBbIyXV91UwtHHEDMKn%2Bz7%2BhJ5%2B2Dgjmb5Y4MFSD2LUhW9nWicYZ8we7F%2F%2FlOtHlxw6ReYs0Co5pqt6yOw6yy1ocyPIl8OJzUd7ONpB4nHc%2BJUL6FuZB0iYW9gWDdz4ObR39o8%2Bnh6jl1%2Fso3Msz3S8Vb5eqE078TvveHT%2BwDv3cgf7ZZiRLtFONZV5F1tZKUDhMm5HmgnfuEct%2F3u8e6Z1YuCMC4gIetzcqaQYYgBmqchrPT7HEJfBtQhe2FhaGKTYUU07jMgEV0Mf19B7m9rL9aXK%2F9BfGCHH1Bn%2BOGu5lBkVk9yZLtC%2BDvP9o2Iuzq9esBcg40J9S%2F90v1vQXpobzLitkX%2FKyiEwBl6vhDr8HE9ASsZwJoIkLZj2TiKxVJjYeaix2M%2BVxN6FHJoLFEnbisGpCE2oMEpY3bgoUUWpe9tADBMKu7hMMGOqUBRwv94clks4BWq3cx8ToU8wqDyZH3M1%2Fw1paZSD9xaj5BW2cMANVlwcWsmNwr76tWRCbBe12WEEEyB6WK7MzT7SNLfFIWUpiEDY0I6jawKcvJXC8jBGdsPiPnRfSdhEkqIcu0JXcV%2FPRLdX5THv7BcQtNHC3NX20OFh2qlgl%2B79%2FC93xuJT0MmgqiElSp%2B0L1ARAUqRYTLzBePvOWi4WHM7y4Ep%2Br&X-Amz-Signature=6274abdbf4154c9ecc0f87e429140de21361f349a0bfeb5dafaa5d6354d8a18a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMMSOWYV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBet0B%2FVpDFbPuSEFCsQJRw1Ii7k4dnpspIXxBQt%2BuKrAiBNHFwVYepTh7W%2BD7hAyKx2k%2BJmwHe2mBsV8g%2BdJ7htdiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzwHQFyihseqp6njUKtwDpFxhxRsLIq49%2Bcwrud5JoQeS%2FqMSDSB1L6IBhTdVm6BmQSmthAQalyNOt0oNB2FkZyIwc2%2BUSNqEqpjMqdCKzWxyc7zYpNxEg1dgTIT5ZSG%2B9yLSPAjZkdbKZI2xcge5HztJ7ULWhTy75dQf5uSzHAK2JejBqxnUs2gP6dxvZRvLu4q0y%2FRHoshAKDpHuUjf7W26XNkVKla4uYoP7veHjcoroj4%2FQg7Ke7ARZKpFjd4v7AyNPJYupYvWDwLqPB5YaQLFvSoCT5VBGqtgfVPewXS8EiRd20WMUgG2JG8cNVcQlhb5TXDEyWvwmDRRXJl7dlkEKdOqX61wlVy1eiyKFctibpzsO%2FsHM34%2BMsaIsCy9epC1VFefn6KHQzGkmLgDKMCYv1G%2FOZ8IXuDevPho4AVAcIrutJaDoDTye3LIYnA0rUP333OKUvaklgqw4jKE3gCZJrBNinhFV5FhVuS6PtWGrJBVPrRfXIysvhho5rJM5EiLENnDE1xnnnfaL8qkxq6RBjWsBBhYAfySO1oFFuR7x%2FYY%2BbPpqxeFo59istzSQUd%2FTLreLfIwDDvTKXNbv3PmQ7JkmAEVKabFkAEEKPQHQJKIqA4oZTcqrAo%2Bjr1oGrjRXw23eNdUQZsw0LuEwwY6pgHdMLqDoDkCopZQ8uAdcSORMmusCxKI%2FAMmJFW1xIg2NWmsTxGib%2BRIAEaniC1GBNPIOj7YbShZoNu7US1qUcHT4AvnnNfN1sKZsHM0YC%2BfuCbfP%2Bfd8P8Mt1sYLjNH34%2FkAbOlADaHRL19DLi5tFGHFNctAlZa5z2ngW9fHOwV34n1YFiPzAD6th%2F%2BRUjCocldmUbxzXOV0BVWNHwaszYE2XChKmfI&X-Amz-Signature=8c8f0d0a9a4515edc595739e85765beade677027de82d39ec8a81511805544bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
