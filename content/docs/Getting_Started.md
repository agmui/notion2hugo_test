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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQQCWB4K%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtXNYcuFdJ3FXfJe0ks1QgiOIeC6AfZDUpRqDdBl0y1QIgQAD4jjlhmczwwtqPq9BC0lCRLAVdAhWZbNaOizcceTcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDF7p%2FPMvg8rvnwmhpircA98UeEndAY%2FJJlDDf%2BJn8B7qXw1OZy3ImIrVY01maq5oGCu0Wlkpk%2FwwgtCOpM8UBS1iVMHS%2BVeFPcaUe0jooR8k4Ky3kuuCzMClqkceBrJ1rVDd37kq0mPocvMVmhDLqqvJsPrYMu%2BtD0aX9tIZJiiZH362dxp5kwYDpKjc5OYYVp5pXhh8UlAoTk5G6RiP8Scrm%2BZmk4eL5zy1ArBLchu2C9pbdmXVpXTor2lMuAo2lxOn2Xdpl0oRiqqQSs7xyfqCTMtbzuK55D3Wy67okfsize0Fa8Fq7Bd7ajxMVizffgkVmJpy25j9N1fY4E0wXfB4PmpjmI6jTwzQewoycDgYPuCX0kJB4z52pkJFSVQjiRLCuWYbbFY%2B24l4uCF9GdWqFZ0OYOE9nUU6wNtYoMXhXogC0BjZiDPPxv4QTvITUkLbP%2F0xL%2F77IeB8MMJaXhtaGYZM3xECR5lyIvGLIoCavlVkPGC4Gms2QNVKK5QZxHkVZO%2BAa35M8pcOsQvS0chE2Qve7SC2BYvY%2BoWw0ZvQKM7atLhwWsWSsQQNflZpS9KVtx0LN5GzuOJaoHtf0SSz%2Fyruw4H2JLrqD%2F8m1CmC6QD3UuYEiVfZv76IBWv8NNcx5XLQn44mmjYOMJuV9b8GOqUBuiGWGAKYvMAwlkcmMnqvkXYzx57wuwTeih8w%2F0AxNwVwQYRC3mw0of%2FqkcGCjUsEt6NB9PoJ6XHaohJWruY3a%2BeITftBOtdUfhSd5aSyxvzohpb2aRftHXbi0l3Brk6Bf0pvTnnJlPJ%2BDAkSKiARfo21lr%2FhP2D9qlhxj7OLYrpej2LjfwVHiPBi5j4wsshWd28e1rto4i%2Bk5igytHrJyBAm9qUS&X-Amz-Signature=2c58a8c3388c987b03a96c3ee1aa4df2efda45c3c9faa7bec906caea52571973&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQQCWB4K%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtXNYcuFdJ3FXfJe0ks1QgiOIeC6AfZDUpRqDdBl0y1QIgQAD4jjlhmczwwtqPq9BC0lCRLAVdAhWZbNaOizcceTcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDF7p%2FPMvg8rvnwmhpircA98UeEndAY%2FJJlDDf%2BJn8B7qXw1OZy3ImIrVY01maq5oGCu0Wlkpk%2FwwgtCOpM8UBS1iVMHS%2BVeFPcaUe0jooR8k4Ky3kuuCzMClqkceBrJ1rVDd37kq0mPocvMVmhDLqqvJsPrYMu%2BtD0aX9tIZJiiZH362dxp5kwYDpKjc5OYYVp5pXhh8UlAoTk5G6RiP8Scrm%2BZmk4eL5zy1ArBLchu2C9pbdmXVpXTor2lMuAo2lxOn2Xdpl0oRiqqQSs7xyfqCTMtbzuK55D3Wy67okfsize0Fa8Fq7Bd7ajxMVizffgkVmJpy25j9N1fY4E0wXfB4PmpjmI6jTwzQewoycDgYPuCX0kJB4z52pkJFSVQjiRLCuWYbbFY%2B24l4uCF9GdWqFZ0OYOE9nUU6wNtYoMXhXogC0BjZiDPPxv4QTvITUkLbP%2F0xL%2F77IeB8MMJaXhtaGYZM3xECR5lyIvGLIoCavlVkPGC4Gms2QNVKK5QZxHkVZO%2BAa35M8pcOsQvS0chE2Qve7SC2BYvY%2BoWw0ZvQKM7atLhwWsWSsQQNflZpS9KVtx0LN5GzuOJaoHtf0SSz%2Fyruw4H2JLrqD%2F8m1CmC6QD3UuYEiVfZv76IBWv8NNcx5XLQn44mmjYOMJuV9b8GOqUBuiGWGAKYvMAwlkcmMnqvkXYzx57wuwTeih8w%2F0AxNwVwQYRC3mw0of%2FqkcGCjUsEt6NB9PoJ6XHaohJWruY3a%2BeITftBOtdUfhSd5aSyxvzohpb2aRftHXbi0l3Brk6Bf0pvTnnJlPJ%2BDAkSKiARfo21lr%2FhP2D9qlhxj7OLYrpej2LjfwVHiPBi5j4wsshWd28e1rto4i%2Bk5igytHrJyBAm9qUS&X-Amz-Signature=21556a80c4caaf3bba3773cbd2f91e25086b530cf8858e6b88c8d108efb73151&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DJFW2WL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8baBgoB5ZYrD5WWi1IgdBNrTPmqBSAXlmy49Kg%2Bi59AiAcvaPdIfl%2FX6ra%2FvlhFy7a5721yJLQ2nyBULEPAOPPtCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM5u8bfTX3Kro9wZpnKtwDIRljgFuneTc2fRsYP5WvDpyMjReKmZV55iMI5Dr%2FYnuP1w6fB0p3VnZt6opyzpU4KnWpBHWHIys%2BbyEpvixzxzPsAXCHl1rKMmZ056agicL4opj1Ajuw%2FHyUYhWCVwVwLXSRlYEUXcSzYTs8iEjxJ9%2BqqF13TIvHXLd%2FGPDe1%2FIIOnJWhcwf0%2FpBxqNUKUUk7%2Bj%2FX%2Fc4FXC3YLTkMHusGKhFKHIun1WL4swgn6EVKAOoqyYA8YkbblKbarI4tC6V1o3oaGvVg4v6Dokq9PzhwhQArkabGL5XJjEMBRLzzcL2Bj3ai9QZdWWT0ObRPjZVkdXEI4erjp%2BHziFMT7qYaLJtYwli9hsaDcdIkVuNvqIBohhq%2Bsa1HJUyx7b76ubd8H1Pp64mo1KSrAk%2Fww0oIHdnWwRT63Oe2bAWUeB4zOIDW8roUaPNs1fJw3k08zwks%2BVS6LNTSPJDUfnLQlmiVEZR76IJ13GB9z7k0zK2eNeaKYjUAsTkyVwK33hqGCmVYywLvTK15drYVLOGTqr8AGTFVNNerI0j3fdZBiqNe1BxypxBLe5kxkF2kUOpKtKDl76x0LboKR%2F8L49xTSzj4fr35tOZwgXD6cTGbATBhcuFP5K4%2FvYZq11xzZ8w%2BZT1vwY6pgEvUWz%2F6txfhG97069Aym0enOVnh7LvYAYwvV2VyoDM36m5Nx3cza7avNB0m9%2BQRrKTxnfiLjdE5Xfx9b5tzDTeyHGptm9PNFHhslfplojHTZRpPXVmzsa5x0D7VYwGMQKeIJavOWXbjst57LihWFgzvuuHOMULq%2FxPdxY2gkRVsSt%2BOCOeXqgfBC1DcUhtwBM0ad1HDVtDKeBdmsUrUxRP2xsQ69g9&X-Amz-Signature=37986171ff3ff5ba14885d8eff42dc8e19e2a1e1ea9d2b79a23de5122698d941&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6EXKLAH%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIcWuDlaGV3A6ime7ofT%2BIQPxN2n5%2BI7CAWGQSiNodXAiAga1N7fVKRTdI6zsFRSYhPJplTlI%2FoIkd134PcSAy4Oir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMCCF8uC7TfG4gzgc8KtwDyfjMurWhMYZ1hC5L4lNHVCRgJTdEfNUL1vVtaYXSubU2w%2F3fOWVhrSonQbaY31ppNctvIetdLSC31p8LDFyP9HDFEHcGKTLYCT9A5Szx6fUAP7kMAroyCTsggiT1V8oFKZNeZvQhv7ZzlyUWX5Iph1QaOSjb73aHVwQh%2FCCBst25%2FbH6JjoUIQD3v4NUa3zLrzKdx%2B7mcFgNOs%2FvuUwFB2hljQoQf5QOMOjgHWlG7KEauKQi7Jv3NF4xRwsVjfyJdW4dg1jBFFUc28Q16LClwOyYQx2yffBBswNHmKGoUCRoo3R8IfYAyhHlt9m3b4mQGdxl404SKmwIlXRkgce9KH07YJorn0%2BFXI%2FN0BLT2McO1%2B8OZOFClQprvh37u%2FAEpx0i5IzGrw9vYDgiDDnDu9O8p8AS77vCjaPnmLlJVlOc0sJ60I3CmMBdLBGkvBOmaSkwTLslmxG4hmfk3g3xEiWZG4AvTLsdmcyWc6c0MpSB0BnRtFHjbRtZqXiCpU4R5V6m1f5skLckhjnWrRdR76g7lFPKGQYxKaqNVVLzj19jY6qHapze%2BP7qkj1mV4QVv7YJUUWv%2FuKpux3bPGYFTE047uyJAekthtBJWZUtGh7sctbo0X8b78tNeY4wnZT1vwY6pgGIoMRWN9omiAMbblHiOqccdZ7pPbyIdsbeyCLtxb6JVHJulE%2Bx84ltTFhAVjb6jlUC2GlT%2BMcypgy6dj9AfrLGgV61YhAaNYGn4X8O4G1y4k15PRs9RpZV3%2BioVhbKaoY%2FHylDjDbxkfWuBpGIjF7fOrNcVthz8bcoC6KNnxNAi9o57ThjQRmMeTmuMbcl32gqyd5ORtNcqYThwiyAH5w%2BW3RpgQo7&X-Amz-Signature=bc25062c24f63cf7d04a2ec44d01a7d662d64ca1025ff1ce9aeba0d0f1a122ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQQCWB4K%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtXNYcuFdJ3FXfJe0ks1QgiOIeC6AfZDUpRqDdBl0y1QIgQAD4jjlhmczwwtqPq9BC0lCRLAVdAhWZbNaOizcceTcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDF7p%2FPMvg8rvnwmhpircA98UeEndAY%2FJJlDDf%2BJn8B7qXw1OZy3ImIrVY01maq5oGCu0Wlkpk%2FwwgtCOpM8UBS1iVMHS%2BVeFPcaUe0jooR8k4Ky3kuuCzMClqkceBrJ1rVDd37kq0mPocvMVmhDLqqvJsPrYMu%2BtD0aX9tIZJiiZH362dxp5kwYDpKjc5OYYVp5pXhh8UlAoTk5G6RiP8Scrm%2BZmk4eL5zy1ArBLchu2C9pbdmXVpXTor2lMuAo2lxOn2Xdpl0oRiqqQSs7xyfqCTMtbzuK55D3Wy67okfsize0Fa8Fq7Bd7ajxMVizffgkVmJpy25j9N1fY4E0wXfB4PmpjmI6jTwzQewoycDgYPuCX0kJB4z52pkJFSVQjiRLCuWYbbFY%2B24l4uCF9GdWqFZ0OYOE9nUU6wNtYoMXhXogC0BjZiDPPxv4QTvITUkLbP%2F0xL%2F77IeB8MMJaXhtaGYZM3xECR5lyIvGLIoCavlVkPGC4Gms2QNVKK5QZxHkVZO%2BAa35M8pcOsQvS0chE2Qve7SC2BYvY%2BoWw0ZvQKM7atLhwWsWSsQQNflZpS9KVtx0LN5GzuOJaoHtf0SSz%2Fyruw4H2JLrqD%2F8m1CmC6QD3UuYEiVfZv76IBWv8NNcx5XLQn44mmjYOMJuV9b8GOqUBuiGWGAKYvMAwlkcmMnqvkXYzx57wuwTeih8w%2F0AxNwVwQYRC3mw0of%2FqkcGCjUsEt6NB9PoJ6XHaohJWruY3a%2BeITftBOtdUfhSd5aSyxvzohpb2aRftHXbi0l3Brk6Bf0pvTnnJlPJ%2BDAkSKiARfo21lr%2FhP2D9qlhxj7OLYrpej2LjfwVHiPBi5j4wsshWd28e1rto4i%2Bk5igytHrJyBAm9qUS&X-Amz-Signature=9a5e9f567272864ad631b0d987838096b2e4b53e65500812d5007fbbc3af5c14&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
