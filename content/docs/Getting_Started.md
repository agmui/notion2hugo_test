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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSVCQ35%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmAoLFONmgl00He0UBA3dTQRdDTxS%2BnWtkfXMr1gxw1wIhAMDq3bzKIQ5XeoPqMIKDYUXEUNFaIgbE90GbaUw%2Fu5VLKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNB2NHfT%2BDejx%2FO5Uq3AOi2M%2FmCogiDudifwrxUJYacJT72flsKvHRkK8sioTN7ctm0I%2FYBGAlHCW9Neu74d%2BEQcxjXzuqmwCm0n%2FIPnMP749nrI0NIsBhntePrVYkYzUicZ2XCWvKL1Yz4VIw78ikLUbzyZRQvt7jTxs0g5nHm95mvdu5BzS1yeeUcRanPHsAQX1o00df41aaKcipqpgPLegahWQ651ArZp8LP8e85ZvRPVoVAhFVp9D1FdPMWhVJ4RWXFI2qk%2FFAbwNP4zVoDpXE5DfU9RoPz9cE18I%2FCXar5%2FTfYvpio3jvG61%2BKtEV0ahZqPoTAhSQ5r%2B0zSBj%2BVXYr0HfswTL7VtAus87w7r1NkDDbvH2i%2FaoUn6eXkYS0kCUtwz3WPu%2BDPJ5wQh%2BKd%2BAQE63W%2F62kvfQ2UJr0aXN%2BcEBldd8dZt0FV3VD2LJq4P2z8Gey27GPKzySUPWEBGIXpwjVvkOlBqviDtWZsrc1KHWyokwp9csakrxhaA2QGSoAc1AB13ag4RM7s%2FrEp%2FYUdquJqYNUQWzJJjTP168j6WLYD2VPiU4Y6hTY%2BWBCTL3ZZxRS4dotSdDrGVNXwnBeFPiDr%2BN9Kme%2FmWspXsfXTwn7UPqYrdIvozb9ac9totKETKXyDUScDDKs7LBBjqkAYdbQYrfO8jgiu3IW8KXUlpLSi8MyMv8fSUR0hAmgNuGEmlcV3y3ZlXuGZlVEDgFYK8Wp0pz3eI%2BJjN5w%2FBqT4tXPytBUJIgxnwob%2BUoYjdiITY0a444yCcDXK1TifSupD7AQ2c9rzZBRVzg5NIPrucz%2BGiO76IhBb62PXAWEExOvG7xW83hlT%2BOuyzi2bWSzfSjYUtePGb0jlgD7zKpUEKmlrzu&X-Amz-Signature=aae35ab99f1db60c39a85e0ae90a621085312f8eb6c94058fa319510eed564a4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSVCQ35%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmAoLFONmgl00He0UBA3dTQRdDTxS%2BnWtkfXMr1gxw1wIhAMDq3bzKIQ5XeoPqMIKDYUXEUNFaIgbE90GbaUw%2Fu5VLKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNB2NHfT%2BDejx%2FO5Uq3AOi2M%2FmCogiDudifwrxUJYacJT72flsKvHRkK8sioTN7ctm0I%2FYBGAlHCW9Neu74d%2BEQcxjXzuqmwCm0n%2FIPnMP749nrI0NIsBhntePrVYkYzUicZ2XCWvKL1Yz4VIw78ikLUbzyZRQvt7jTxs0g5nHm95mvdu5BzS1yeeUcRanPHsAQX1o00df41aaKcipqpgPLegahWQ651ArZp8LP8e85ZvRPVoVAhFVp9D1FdPMWhVJ4RWXFI2qk%2FFAbwNP4zVoDpXE5DfU9RoPz9cE18I%2FCXar5%2FTfYvpio3jvG61%2BKtEV0ahZqPoTAhSQ5r%2B0zSBj%2BVXYr0HfswTL7VtAus87w7r1NkDDbvH2i%2FaoUn6eXkYS0kCUtwz3WPu%2BDPJ5wQh%2BKd%2BAQE63W%2F62kvfQ2UJr0aXN%2BcEBldd8dZt0FV3VD2LJq4P2z8Gey27GPKzySUPWEBGIXpwjVvkOlBqviDtWZsrc1KHWyokwp9csakrxhaA2QGSoAc1AB13ag4RM7s%2FrEp%2FYUdquJqYNUQWzJJjTP168j6WLYD2VPiU4Y6hTY%2BWBCTL3ZZxRS4dotSdDrGVNXwnBeFPiDr%2BN9Kme%2FmWspXsfXTwn7UPqYrdIvozb9ac9totKETKXyDUScDDKs7LBBjqkAYdbQYrfO8jgiu3IW8KXUlpLSi8MyMv8fSUR0hAmgNuGEmlcV3y3ZlXuGZlVEDgFYK8Wp0pz3eI%2BJjN5w%2FBqT4tXPytBUJIgxnwob%2BUoYjdiITY0a444yCcDXK1TifSupD7AQ2c9rzZBRVzg5NIPrucz%2BGiO76IhBb62PXAWEExOvG7xW83hlT%2BOuyzi2bWSzfSjYUtePGb0jlgD7zKpUEKmlrzu&X-Amz-Signature=96d4c5643740efd9eee40b79d609e062ed42b76275eec65e76029ab32469a67c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSVCQ35%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmAoLFONmgl00He0UBA3dTQRdDTxS%2BnWtkfXMr1gxw1wIhAMDq3bzKIQ5XeoPqMIKDYUXEUNFaIgbE90GbaUw%2Fu5VLKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNB2NHfT%2BDejx%2FO5Uq3AOi2M%2FmCogiDudifwrxUJYacJT72flsKvHRkK8sioTN7ctm0I%2FYBGAlHCW9Neu74d%2BEQcxjXzuqmwCm0n%2FIPnMP749nrI0NIsBhntePrVYkYzUicZ2XCWvKL1Yz4VIw78ikLUbzyZRQvt7jTxs0g5nHm95mvdu5BzS1yeeUcRanPHsAQX1o00df41aaKcipqpgPLegahWQ651ArZp8LP8e85ZvRPVoVAhFVp9D1FdPMWhVJ4RWXFI2qk%2FFAbwNP4zVoDpXE5DfU9RoPz9cE18I%2FCXar5%2FTfYvpio3jvG61%2BKtEV0ahZqPoTAhSQ5r%2B0zSBj%2BVXYr0HfswTL7VtAus87w7r1NkDDbvH2i%2FaoUn6eXkYS0kCUtwz3WPu%2BDPJ5wQh%2BKd%2BAQE63W%2F62kvfQ2UJr0aXN%2BcEBldd8dZt0FV3VD2LJq4P2z8Gey27GPKzySUPWEBGIXpwjVvkOlBqviDtWZsrc1KHWyokwp9csakrxhaA2QGSoAc1AB13ag4RM7s%2FrEp%2FYUdquJqYNUQWzJJjTP168j6WLYD2VPiU4Y6hTY%2BWBCTL3ZZxRS4dotSdDrGVNXwnBeFPiDr%2BN9Kme%2FmWspXsfXTwn7UPqYrdIvozb9ac9totKETKXyDUScDDKs7LBBjqkAYdbQYrfO8jgiu3IW8KXUlpLSi8MyMv8fSUR0hAmgNuGEmlcV3y3ZlXuGZlVEDgFYK8Wp0pz3eI%2BJjN5w%2FBqT4tXPytBUJIgxnwob%2BUoYjdiITY0a444yCcDXK1TifSupD7AQ2c9rzZBRVzg5NIPrucz%2BGiO76IhBb62PXAWEExOvG7xW83hlT%2BOuyzi2bWSzfSjYUtePGb0jlgD7zKpUEKmlrzu&X-Amz-Signature=ca9a6dd930cbf883fea4c9e884155873d5860ce7538b0ad3d582405e60f78199&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNCKS22%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3l5A7%2BUm3tweeEol0vfiLdM61fRDSozoAHjd8CzAWpgIhANKCXwRQCYBlmYJ53yGuLqi03bvGZrAhrgoIuSXxujaAKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1WBT2Tp9lZZggOBwq3AOJPWsrW7QRSaGBXbZ6vzbZ2%2F8O5A1CZsmtCFH4LE8wE1E0nBHQioNaQKe9WMb5Box1YLt1Rnu6CFwnIaqx3f9z7R8xotpD2LPn0Offjer9mXt8BFEDvBmkqM7y0j03mgY9jnNBzq97iz9vafdY4T96XUpnPkXmvFmi4kKDns4fhNMJej54hFQk5yIOF4ehXueAFMzJyWGWVfPMHGOKFNuNv9LA12TiPFaAXcWVxCkLeTH8YLU%2FEb1L6T2sX60LT4VP%2F8JN59RJuuSUYNK%2BzgUZt1YCVVVuqfyB4Ca6DoW%2BGhknUp8o1W4KZ9uPCgQMn%2BUZ7C%2FeZMi%2BzGp3gLrL89frKb%2FCXLYXuteu%2BDTShDMKN1WTK4sqTiPGH1ouV0zz1w8XmX2kJXLdF6slzuPRBvd%2Fln2v56tK7ILGZsSAKsrOeIySYbMcOAUVQSl3TyGr4LHaeztzn7dZq1%2B6jd%2BUZzMUF8hVVpiy7VhFfa%2FmX58bJzyIdFwvzTsPqPI723NxbOHqHb25XVm%2BKC5lavNugBjS8CpZqO%2FQgcihX4UExvXX9hZiaZIi9cihkeJAM9qI4YPTQp8fIbUTULG704D7h3Wwizy%2BrSxP4ullxEfJ9yeFcRRjl1KSzYHbyoOSfjDZs7LBBjqkAWLT6wI5y2DcCRlsgatK8fKMWD7DJYz0OQkp%2Ff3b0H0oHapoeQk9CInoqJe1boGwDhR43tft%2F8yhsQuHFz%2Bh5Ex95S4H8qG%2FgiYCUEgh95pDKUkOiuX3uClIxEoLQ0jLenoPMsmSsN6P4qFWa2l%2FdDBU02HAVas0FMJz3POJlpJd%2Fe%2B7RdRCebHBC%2FSrt%2B4IMCXL3lXbOBVs8pjDEoMVFZtPQpva&X-Amz-Signature=fe4895f928613a8751c4fd77930db96c2a704b5692d52a4cfaffe96b78178e1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WXG2XL3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa%2BKb637HSHOX5DfHOwPJGMecMawV4pGeR7Uh1w7Dz4QIgZXPxPbl8Um3xAuQA78N6OluHquxgeOzDAzz57LCsvDIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiKsvoGSpoCS%2B6NkyrcA%2BBw%2BCBe%2FNXErLLDGHbf4lPKJzRMYbaBQD7NFvI74MOIiNQKS9qyKtFuwAVgrNqski75BJ5PRgBToQsjWShxfOwO29CmxCYJsnGXXtjVDAFO9fNvpPHkHPHpGXX6CUp49kF8aVOMbZr9w5jFNm42rU4nK0QVCRNm59BWk1RsHUL79%2Bwm6GtDjY4TRdt9EN2s7MVIm822WC3u2UDhJ79dUmbkhhDpTLGiyKuc7Um2Csg2gbdRzDYYdAxtKWGgq8TeOgfwYyqYq2wURzrFvMuBqEWoJ6izLkpiO6i9bwJQ0rDnV6XXVZz4mBgmhYdZBV7jWaU7DqaFj0nxr3sW70lQWmGcHYr9TvpjQeg%2BQDRIjBva9om7O76GDCwQRd42wDD%2Fv8fM34aaiyFvJrT4x1DC1yGenaEWiyaV9Wnmx651GC6CYWYAMRf76fbmDCSHpdoDWRxeHk2bE%2FgErZSajxVNZwLzP0EU%2FzHHCxF6xLwDPAhAGsllXfrOsAyfvzoNXp5lon%2BIG6a%2BU7AfgJvDBp0r6bR6jE5AC5U%2BNNKQ6BKzXGAHyq7v65tTsFOt7IVuTTGWA4Fewr8uQ8kACleKS2sD1%2FwOpld3A1xHgKBhSunAdYEDuzXYNBi814TZRH2JMMS0ssEGOqUBMTZTRxSflLCsswfXZ6yFmL4mt4gN0W54BH3BmuaTaiIbdYHnaSulZgqZFCa41Q64GdckWv21HZop8kcAnzUbz1vnFs58cMjZ7SNjRxeMvtjW0DdY5Pt5CAYsAO5fKxrechaBYL1RB1JfGEZ8CVg%2Fk8TzMbQIgQVNfcjfvVUCt8CGRoX4GsN07DpZnb7dUwf2SUkcLrWdTEjjWg1PhsSMb07tTPCf&X-Amz-Signature=ed07a7e0cd769077d384fddd7ff394554cabc53ec5c05ed4d25551d3268723bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSVCQ35%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmAoLFONmgl00He0UBA3dTQRdDTxS%2BnWtkfXMr1gxw1wIhAMDq3bzKIQ5XeoPqMIKDYUXEUNFaIgbE90GbaUw%2Fu5VLKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNB2NHfT%2BDejx%2FO5Uq3AOi2M%2FmCogiDudifwrxUJYacJT72flsKvHRkK8sioTN7ctm0I%2FYBGAlHCW9Neu74d%2BEQcxjXzuqmwCm0n%2FIPnMP749nrI0NIsBhntePrVYkYzUicZ2XCWvKL1Yz4VIw78ikLUbzyZRQvt7jTxs0g5nHm95mvdu5BzS1yeeUcRanPHsAQX1o00df41aaKcipqpgPLegahWQ651ArZp8LP8e85ZvRPVoVAhFVp9D1FdPMWhVJ4RWXFI2qk%2FFAbwNP4zVoDpXE5DfU9RoPz9cE18I%2FCXar5%2FTfYvpio3jvG61%2BKtEV0ahZqPoTAhSQ5r%2B0zSBj%2BVXYr0HfswTL7VtAus87w7r1NkDDbvH2i%2FaoUn6eXkYS0kCUtwz3WPu%2BDPJ5wQh%2BKd%2BAQE63W%2F62kvfQ2UJr0aXN%2BcEBldd8dZt0FV3VD2LJq4P2z8Gey27GPKzySUPWEBGIXpwjVvkOlBqviDtWZsrc1KHWyokwp9csakrxhaA2QGSoAc1AB13ag4RM7s%2FrEp%2FYUdquJqYNUQWzJJjTP168j6WLYD2VPiU4Y6hTY%2BWBCTL3ZZxRS4dotSdDrGVNXwnBeFPiDr%2BN9Kme%2FmWspXsfXTwn7UPqYrdIvozb9ac9totKETKXyDUScDDKs7LBBjqkAYdbQYrfO8jgiu3IW8KXUlpLSi8MyMv8fSUR0hAmgNuGEmlcV3y3ZlXuGZlVEDgFYK8Wp0pz3eI%2BJjN5w%2FBqT4tXPytBUJIgxnwob%2BUoYjdiITY0a444yCcDXK1TifSupD7AQ2c9rzZBRVzg5NIPrucz%2BGiO76IhBb62PXAWEExOvG7xW83hlT%2BOuyzi2bWSzfSjYUtePGb0jlgD7zKpUEKmlrzu&X-Amz-Signature=838809e9e04dafc6bf2549d5e17cbcfd4efb2f4c4f80f4f2008a7725b86e56e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
