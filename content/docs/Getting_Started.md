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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3TETR6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8NT0E4e39OJFhNq2JdnY17D3uUiV8Ct07OI4GKZPwzAiAUVUlxmkmlFur%2FXpWfG%2FdBNtIGb3N8aLoUCObi%2B9UoAyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhWp3ARo7j1EWXB2mKtwDfhWMidOJn3PLyaEzCuMnimlDxck20axswRjzq6uQhfNlL6pgIoFxghXqJYlPCDXrDJGfQi1iktztSF5KISCUrFpRx7OigO14vBV2%2B2rxNh4dIVCuP5KZgcPwgcayi%2F%2FV63nC96%2BZSyrV8U1sIh6hT5%2B%2BXKKidC4mx4mSAtZw0TWjlYGlFup6CUUED4R9ZwNzOujkXm9SPYdbGGNpGl%2Bkf5DD12fnvv1Lwdc8Ke3%2BM895OElkdY0uIOyOQZEtfbtEjhjR4ANaUyrO64IwnLsZWqhryDHLyZ7S3U%2FDNF0cpkAcKfEhsoIVkmNrQHpxm1Pxhfw39%2FUBoUNdcm%2BHTnqM%2FIzreu42gjSdKnhi3DIyja3eu0uDHG1NKVsQh53avN7rkada%2BAcYmmh1SsoU75JQh9I%2FT0UgmWGFs9GfUjkWfsL%2FbYQxkSPiZ%2B2tlDjK%2BPzkzoJLCpwFXylgJczIJW0WlERtlc5vXes6c5NIT%2FxjlHlxXy%2BUTeQ7263g%2Br9VVsi3jqred9mlWlSgA9krGgiWBefsYH%2Bfz38bjH4eBVvOPgiY%2FnZnoUvpNC9tRvBdj%2BbMwVqB%2BzzxLpZ%2BO12Yv7nZPZ%2FjPorWfwftIMTGdetYgWCwhPQ1BzeBM9B%2FZBAw1NT4wwY6pgFtUXHlTfehoc3VgW9J%2FNvbe2hQ8I4EKACJu9tl02HBBxvSM8cRgSBOizeUfUsyJzHXVG8ovcRVTQEjILfzOmYenAfGs4OmDz4zPq0uO%2F3nHEkZn%2FodNd0HoLBuw7JCmHOPliiV73wY6ZpfDK1Hi4NQjUgGLdW3D4GREnKrbqCHQ7jTl8ve0A5sbHEaIUSn9v39K9uvAFFUg1%2FCJXOLGwE9KmlrTqzw&X-Amz-Signature=8a34c9455c248d97416312010d2596c8b98fb3e1ebdcd321b46c3d615d9bb78d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3TETR6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8NT0E4e39OJFhNq2JdnY17D3uUiV8Ct07OI4GKZPwzAiAUVUlxmkmlFur%2FXpWfG%2FdBNtIGb3N8aLoUCObi%2B9UoAyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhWp3ARo7j1EWXB2mKtwDfhWMidOJn3PLyaEzCuMnimlDxck20axswRjzq6uQhfNlL6pgIoFxghXqJYlPCDXrDJGfQi1iktztSF5KISCUrFpRx7OigO14vBV2%2B2rxNh4dIVCuP5KZgcPwgcayi%2F%2FV63nC96%2BZSyrV8U1sIh6hT5%2B%2BXKKidC4mx4mSAtZw0TWjlYGlFup6CUUED4R9ZwNzOujkXm9SPYdbGGNpGl%2Bkf5DD12fnvv1Lwdc8Ke3%2BM895OElkdY0uIOyOQZEtfbtEjhjR4ANaUyrO64IwnLsZWqhryDHLyZ7S3U%2FDNF0cpkAcKfEhsoIVkmNrQHpxm1Pxhfw39%2FUBoUNdcm%2BHTnqM%2FIzreu42gjSdKnhi3DIyja3eu0uDHG1NKVsQh53avN7rkada%2BAcYmmh1SsoU75JQh9I%2FT0UgmWGFs9GfUjkWfsL%2FbYQxkSPiZ%2B2tlDjK%2BPzkzoJLCpwFXylgJczIJW0WlERtlc5vXes6c5NIT%2FxjlHlxXy%2BUTeQ7263g%2Br9VVsi3jqred9mlWlSgA9krGgiWBefsYH%2Bfz38bjH4eBVvOPgiY%2FnZnoUvpNC9tRvBdj%2BbMwVqB%2BzzxLpZ%2BO12Yv7nZPZ%2FjPorWfwftIMTGdetYgWCwhPQ1BzeBM9B%2FZBAw1NT4wwY6pgFtUXHlTfehoc3VgW9J%2FNvbe2hQ8I4EKACJu9tl02HBBxvSM8cRgSBOizeUfUsyJzHXVG8ovcRVTQEjILfzOmYenAfGs4OmDz4zPq0uO%2F3nHEkZn%2FodNd0HoLBuw7JCmHOPliiV73wY6ZpfDK1Hi4NQjUgGLdW3D4GREnKrbqCHQ7jTl8ve0A5sbHEaIUSn9v39K9uvAFFUg1%2FCJXOLGwE9KmlrTqzw&X-Amz-Signature=67acde054d6aca73b5652a7fd6c34ecedb86755a9b8ee74072caac8cf9e6c535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3TETR6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8NT0E4e39OJFhNq2JdnY17D3uUiV8Ct07OI4GKZPwzAiAUVUlxmkmlFur%2FXpWfG%2FdBNtIGb3N8aLoUCObi%2B9UoAyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhWp3ARo7j1EWXB2mKtwDfhWMidOJn3PLyaEzCuMnimlDxck20axswRjzq6uQhfNlL6pgIoFxghXqJYlPCDXrDJGfQi1iktztSF5KISCUrFpRx7OigO14vBV2%2B2rxNh4dIVCuP5KZgcPwgcayi%2F%2FV63nC96%2BZSyrV8U1sIh6hT5%2B%2BXKKidC4mx4mSAtZw0TWjlYGlFup6CUUED4R9ZwNzOujkXm9SPYdbGGNpGl%2Bkf5DD12fnvv1Lwdc8Ke3%2BM895OElkdY0uIOyOQZEtfbtEjhjR4ANaUyrO64IwnLsZWqhryDHLyZ7S3U%2FDNF0cpkAcKfEhsoIVkmNrQHpxm1Pxhfw39%2FUBoUNdcm%2BHTnqM%2FIzreu42gjSdKnhi3DIyja3eu0uDHG1NKVsQh53avN7rkada%2BAcYmmh1SsoU75JQh9I%2FT0UgmWGFs9GfUjkWfsL%2FbYQxkSPiZ%2B2tlDjK%2BPzkzoJLCpwFXylgJczIJW0WlERtlc5vXes6c5NIT%2FxjlHlxXy%2BUTeQ7263g%2Br9VVsi3jqred9mlWlSgA9krGgiWBefsYH%2Bfz38bjH4eBVvOPgiY%2FnZnoUvpNC9tRvBdj%2BbMwVqB%2BzzxLpZ%2BO12Yv7nZPZ%2FjPorWfwftIMTGdetYgWCwhPQ1BzeBM9B%2FZBAw1NT4wwY6pgFtUXHlTfehoc3VgW9J%2FNvbe2hQ8I4EKACJu9tl02HBBxvSM8cRgSBOizeUfUsyJzHXVG8ovcRVTQEjILfzOmYenAfGs4OmDz4zPq0uO%2F3nHEkZn%2FodNd0HoLBuw7JCmHOPliiV73wY6ZpfDK1Hi4NQjUgGLdW3D4GREnKrbqCHQ7jTl8ve0A5sbHEaIUSn9v39K9uvAFFUg1%2FCJXOLGwE9KmlrTqzw&X-Amz-Signature=6b29caddb8772224292c9a3bdc0f11dbda33dfa6393883537b9dbcb709865d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ2XYBUE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuMz%2FFT3Ih3%2BFBD3x9GTg%2B5iqMHROSTFeYJ47LoD2QywIhAPPgsJMjwTLGjl6piYBjRNFsYsOieJyzzjYR%2F5gLZUsIKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2FhPBGz9A7Qa38y8q3AMDRvYbHmNM2l8Ha%2BhXXuk1zeoX0t5rmZ%2BCcxxHwRsvEmj0fPNrr%2Bmsp189GW9y2wYZUwiIoHC91%2FQT%2Fx2YoBIlHtPa11nb4jsr%2BM7KvBTfdgsCrrZKkcD1qDwIVlZwuZ8m%2BOyVqhJQsy%2Fm4yUAfeKXkvZbH5opyyjUqVW0k4gFqYxHHGbIFKhvGS%2BdlapGE4WZkUd5lAJLfGeBNXp2AkqZQl7QMhWAsBWycQFATKA%2Bz%2FYoTZoAquEdqrB4geuLJO2ujvaectx1EbbLduVH%2BMN8l948%2BqITlwpgN0GEewouXmC1aew%2F6b%2B1RoTKBaM%2FKWmpbP4scA0LB0jLADwHCepz%2FecwjvrwXVi3upW3INP2ZO4dORrs9roU%2BGp%2FeS21hmkn7V%2Fs2v26z%2FISxbiGPP0oQwkCuWQuRq4VIZkb9FwuFOwMoSsuSpwundvr1OrbqWmCdImwiK2S6WgN%2B29Exz%2BkgsWulnt7Ej6ifcyznmR%2FxAGDwAThBm3pw6XqJ4eiPnesb7xXUsdTGA88s4iy3wvTR3LKvDPTTh4D32%2FD5ciMQrWan2tRrzUXY8I9T1LqA81JEsDp0G9a0BGbMdgLgKSY5GUpV7GpRWxIh%2BNkG0fiNSlbaL6fxfUMlNgQEzCC1fjDBjqkATp43e6HKuS6MzVZ%2BByvZadpNEXCTbNUQXWQqdxg8r1SlH8DUmjGe6Ufl88byWJm1qwuy9ICvYY0%2FnfbQV26YJxkI2lCJXtTuMhAJyQUdJob6E1UILaWqx7A79KxhxaW0ChCsIusmygtqDRRqYHvxQLSlIs6GRF1sG7s0JbjuwY998iByceWZ6q1MN9k1RugUJdQiNJ%2BkUZ8ltITk5lW%2B0afmB1h&X-Amz-Signature=efa271fb03cad819f5931974031f9e76bc4efed12224e2f49006b893e639ac8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHNSPES%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZWxRHke0Ls32WsC59IFNDF1JuraR9mN6inbb8P00nwwIgVxwG8QwgKIGvhH9xQyqw3Htwj%2FAHwy0f9JNxEpT7gUIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBoTBVwjaMwD1RRHSrcAzGqUqVTgR3N7Q%2F0%2Fs4FSgiR9r5o49hthqy4%2FhjtV3gf3J1QaTu98yvmQcPzOsH6NE5NGI7pSMkOKChyGICSkw8Hq5dYbZSTTrTtiFuv1%2F%2FuFjYkvBk0a%2FXTAt9v9R0mK16SFIsCXXRw6rO6cuAo4e%2F08Lnsbav2NCA9ukTrfyq8QpT2c8YocLLtTpjnNXPp8b%2BLxw4uwn50mel5cSlNvDk7QiB9weQqcCyjULI0AxhQA09%2FDSKzaZi%2FImaX%2FK5dc8ri6xL%2FaX6CvVxXpoqVJNU9nrmey78p8uIE2YCl3pANlWuO9BP7YkuTpHmbho17tiDIMFxtZvuhchMRKVAl5qTFagJj1HgI38i12BURj%2FL9UuVR4PQwBW5X79FQ8LERRwg%2FxgTxShjVZZrBSoKDE3wEUaG%2FSJCZz6yd%2F6XNyUqAG2bG%2BysEfK1ektK3hynTWV6ITR1NgGUkU6krAm3WiJlj6JQzq%2BaUmsEEoNRs22RBg40qR9cahmgkLZAnVzQqd71oo%2FDOyy0fMo%2Bs9SCipcTkCMHmWYncYnAGNmzDAoQ5sBhPlYiCoh2qWc1TIuaoR%2FzVx%2FTvrC1v55lZrvnY6T%2B5GVdKt%2BIJgvQ9Gr11lrFFPKyHjBM1WO6AA5%2BHMN%2FU%2BMMGOqUBERLQa1auTmWB4rGYApD1yk5o6ZqDsBWGBU5NAaG3Aht5lTb%2B2K%2F%2FqLwL1MmZ642FQauFkjXuUXUVLQC%2BX%2Bm%2B6Ovm%2B%2F9EAfNbT8X1HN51u%2FUlkPt4Uwid1kwwTt1QLKP3J%2Ftm%2BRrC66XOtH%2BzhhyRPxrb5CRbx3MZ4KNIskn43InWup2K6Zjz%2Fs3y6geQ8jgJszWUPZRWkUrLCjDW%2BkES5NP1AUFF&X-Amz-Signature=17505fb9797ca876d3f43f72f10c0058b622d5c4156fe5aa6b39056c6d093773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3TETR6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8NT0E4e39OJFhNq2JdnY17D3uUiV8Ct07OI4GKZPwzAiAUVUlxmkmlFur%2FXpWfG%2FdBNtIGb3N8aLoUCObi%2B9UoAyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhWp3ARo7j1EWXB2mKtwDfhWMidOJn3PLyaEzCuMnimlDxck20axswRjzq6uQhfNlL6pgIoFxghXqJYlPCDXrDJGfQi1iktztSF5KISCUrFpRx7OigO14vBV2%2B2rxNh4dIVCuP5KZgcPwgcayi%2F%2FV63nC96%2BZSyrV8U1sIh6hT5%2B%2BXKKidC4mx4mSAtZw0TWjlYGlFup6CUUED4R9ZwNzOujkXm9SPYdbGGNpGl%2Bkf5DD12fnvv1Lwdc8Ke3%2BM895OElkdY0uIOyOQZEtfbtEjhjR4ANaUyrO64IwnLsZWqhryDHLyZ7S3U%2FDNF0cpkAcKfEhsoIVkmNrQHpxm1Pxhfw39%2FUBoUNdcm%2BHTnqM%2FIzreu42gjSdKnhi3DIyja3eu0uDHG1NKVsQh53avN7rkada%2BAcYmmh1SsoU75JQh9I%2FT0UgmWGFs9GfUjkWfsL%2FbYQxkSPiZ%2B2tlDjK%2BPzkzoJLCpwFXylgJczIJW0WlERtlc5vXes6c5NIT%2FxjlHlxXy%2BUTeQ7263g%2Br9VVsi3jqred9mlWlSgA9krGgiWBefsYH%2Bfz38bjH4eBVvOPgiY%2FnZnoUvpNC9tRvBdj%2BbMwVqB%2BzzxLpZ%2BO12Yv7nZPZ%2FjPorWfwftIMTGdetYgWCwhPQ1BzeBM9B%2FZBAw1NT4wwY6pgFtUXHlTfehoc3VgW9J%2FNvbe2hQ8I4EKACJu9tl02HBBxvSM8cRgSBOizeUfUsyJzHXVG8ovcRVTQEjILfzOmYenAfGs4OmDz4zPq0uO%2F3nHEkZn%2FodNd0HoLBuw7JCmHOPliiV73wY6ZpfDK1Hi4NQjUgGLdW3D4GREnKrbqCHQ7jTl8ve0A5sbHEaIUSn9v39K9uvAFFUg1%2FCJXOLGwE9KmlrTqzw&X-Amz-Signature=2bba633017e03608835d93b679ebe7730387afa4d0710e5458781ba3e903ff93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
