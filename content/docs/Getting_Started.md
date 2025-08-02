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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3L4AXU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6e1w9syysD%2Fc%2FuLvwi9D6liNxNAiFATSRhlSYvvVAPAiBG1JMh81OervoVwnJ46%2FGdVuxdWmEu%2FsyzfXyf6k0NZyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMmqHjaodKOy3%2F45IbKtwDhzl1j3c38BmLPJgDg9I5WBeYAPECAodpOITvDs2yEGkk%2FDFPSm84rYCBWPHvl8WCHSVl0slP9pLiOc1RFv1aWQMQWt4CKO6aLADStEWx2AXYHogw3D%2FZqAkGr4wzumLRJRhzgBBPhykVHm%2Bwo3srFHk75IdRR5YZmd0G5EZ4ENt6cI2T968FrBTotzO3%2BhgO44u6WXbSPWicy2IYnCmoxipRxzQ8E0dkTOjSDEHsKgu6xEfbe9nhXE0MDVjEbe%2FGUdEBiyH22bv1C6eVxbbmbkXNK%2B%2BG497Z8umlIMpRL4BOCx%2Fzb3syYpmEbJ8a%2BJeiAi7tEiVCx6Jqh9klR0J2B3jCQ%2FJ9I1R329YMOMrQ0aJkjktw9h3klbh1YHinfuNEdsr7SNhSaudY%2F2oGeoxWOjVhKl2lt%2BcZNFOpbgHNRwVf%2FPnCO9QJ8lDn9TUUgu%2BtBKaLLvUaAQxQ7wUkoj1Whl%2FRfowALLDFRbTtVAYhKQcNO1frmEZ%2FG%2FPDr7lrP7o6PEumr%2BqRpV79z4ISb0xVmnzNNtuYFEdTx7fPRdGj9%2BE33BeosxqkjXwLzU3PvhUMy%2FUtBcSVsBA7UeEJ9PUTMugApZPBIoZfT%2FkDFEGO7dC6Hiw0F3GTHYxMkT0wj8S5xAY6pgH0NMfEZ%2Fnty8KAo1BSnhg8EkSVT5IuVZfOzJGtpgC%2BFrC906obcAqyEc4JqcKpkj%2B6gg8Xeds%2BPK8hTKvB5z6KoKrnJOK%2ByoF3rQfxE7d4t882Fk7iDxz6ouvoWOuy%2BiS2PGcg28jnw1PFtSsbf%2BNv4UN9M5P6J2YyMXK%2B1UA33AmGsJSSHkW2I6GY0d8ytz3lA9%2BL7mGZjwTXn%2BG3OXXg8rjFtARU&X-Amz-Signature=3a84f2eed1f348058eafc94a88e41b0a8e03b5b66ee513024fce0ab65a479189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3L4AXU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6e1w9syysD%2Fc%2FuLvwi9D6liNxNAiFATSRhlSYvvVAPAiBG1JMh81OervoVwnJ46%2FGdVuxdWmEu%2FsyzfXyf6k0NZyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMmqHjaodKOy3%2F45IbKtwDhzl1j3c38BmLPJgDg9I5WBeYAPECAodpOITvDs2yEGkk%2FDFPSm84rYCBWPHvl8WCHSVl0slP9pLiOc1RFv1aWQMQWt4CKO6aLADStEWx2AXYHogw3D%2FZqAkGr4wzumLRJRhzgBBPhykVHm%2Bwo3srFHk75IdRR5YZmd0G5EZ4ENt6cI2T968FrBTotzO3%2BhgO44u6WXbSPWicy2IYnCmoxipRxzQ8E0dkTOjSDEHsKgu6xEfbe9nhXE0MDVjEbe%2FGUdEBiyH22bv1C6eVxbbmbkXNK%2B%2BG497Z8umlIMpRL4BOCx%2Fzb3syYpmEbJ8a%2BJeiAi7tEiVCx6Jqh9klR0J2B3jCQ%2FJ9I1R329YMOMrQ0aJkjktw9h3klbh1YHinfuNEdsr7SNhSaudY%2F2oGeoxWOjVhKl2lt%2BcZNFOpbgHNRwVf%2FPnCO9QJ8lDn9TUUgu%2BtBKaLLvUaAQxQ7wUkoj1Whl%2FRfowALLDFRbTtVAYhKQcNO1frmEZ%2FG%2FPDr7lrP7o6PEumr%2BqRpV79z4ISb0xVmnzNNtuYFEdTx7fPRdGj9%2BE33BeosxqkjXwLzU3PvhUMy%2FUtBcSVsBA7UeEJ9PUTMugApZPBIoZfT%2FkDFEGO7dC6Hiw0F3GTHYxMkT0wj8S5xAY6pgH0NMfEZ%2Fnty8KAo1BSnhg8EkSVT5IuVZfOzJGtpgC%2BFrC906obcAqyEc4JqcKpkj%2B6gg8Xeds%2BPK8hTKvB5z6KoKrnJOK%2ByoF3rQfxE7d4t882Fk7iDxz6ouvoWOuy%2BiS2PGcg28jnw1PFtSsbf%2BNv4UN9M5P6J2YyMXK%2B1UA33AmGsJSSHkW2I6GY0d8ytz3lA9%2BL7mGZjwTXn%2BG3OXXg8rjFtARU&X-Amz-Signature=0b821a6fef3ec6e2435f196a594675d893a90b9500a4639143f3c8056e5bb086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3L4AXU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6e1w9syysD%2Fc%2FuLvwi9D6liNxNAiFATSRhlSYvvVAPAiBG1JMh81OervoVwnJ46%2FGdVuxdWmEu%2FsyzfXyf6k0NZyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMmqHjaodKOy3%2F45IbKtwDhzl1j3c38BmLPJgDg9I5WBeYAPECAodpOITvDs2yEGkk%2FDFPSm84rYCBWPHvl8WCHSVl0slP9pLiOc1RFv1aWQMQWt4CKO6aLADStEWx2AXYHogw3D%2FZqAkGr4wzumLRJRhzgBBPhykVHm%2Bwo3srFHk75IdRR5YZmd0G5EZ4ENt6cI2T968FrBTotzO3%2BhgO44u6WXbSPWicy2IYnCmoxipRxzQ8E0dkTOjSDEHsKgu6xEfbe9nhXE0MDVjEbe%2FGUdEBiyH22bv1C6eVxbbmbkXNK%2B%2BG497Z8umlIMpRL4BOCx%2Fzb3syYpmEbJ8a%2BJeiAi7tEiVCx6Jqh9klR0J2B3jCQ%2FJ9I1R329YMOMrQ0aJkjktw9h3klbh1YHinfuNEdsr7SNhSaudY%2F2oGeoxWOjVhKl2lt%2BcZNFOpbgHNRwVf%2FPnCO9QJ8lDn9TUUgu%2BtBKaLLvUaAQxQ7wUkoj1Whl%2FRfowALLDFRbTtVAYhKQcNO1frmEZ%2FG%2FPDr7lrP7o6PEumr%2BqRpV79z4ISb0xVmnzNNtuYFEdTx7fPRdGj9%2BE33BeosxqkjXwLzU3PvhUMy%2FUtBcSVsBA7UeEJ9PUTMugApZPBIoZfT%2FkDFEGO7dC6Hiw0F3GTHYxMkT0wj8S5xAY6pgH0NMfEZ%2Fnty8KAo1BSnhg8EkSVT5IuVZfOzJGtpgC%2BFrC906obcAqyEc4JqcKpkj%2B6gg8Xeds%2BPK8hTKvB5z6KoKrnJOK%2ByoF3rQfxE7d4t882Fk7iDxz6ouvoWOuy%2BiS2PGcg28jnw1PFtSsbf%2BNv4UN9M5P6J2YyMXK%2B1UA33AmGsJSSHkW2I6GY0d8ytz3lA9%2BL7mGZjwTXn%2BG3OXXg8rjFtARU&X-Amz-Signature=9f00c332c5bd28ea984432a6c71f2b5d891c0d8bea285cd0f34e588b044c815b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3EW5WT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNPFqLTlDSKEs7b5eQNKg4xGbo%2FQBUZXYg512pDG4%2BAAiAk5Li5NRaK7SeCxhuT0bIqynFzmTzdDIASvxk0Nsmbeir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMetxW%2BBhWqbLUZ5lXKtwDPhFzZw%2B9nf8aRAa2xFbAyW4iqnRDv6Fwkv5tG1QgGyxMuWpOlW2AwLX0mUcCs0ew6m5SnqbCkt%2BbVmE%2FvYAr%2FBJQAT49mm1GvyY7T2sxm9PdXTosK24NcOxYB4c%2F35FnZku37ecMwSbzQPACarFOIx0fVcfQfYr7OzvGATF9GQWJLFNdAgNPI6jyjromTI2pcuKubgpXNY0DQVo4Y9Uw8ChKpR4jHvAJqlYIVWZOiNVnHjEnYrVhT0qH4AObsFsNd3dqhV%2FWjNJVHRHbfgQFVDbbR4FPPRmZPr6cbeuHMQCl8hEHn97iyRYLFw8Rug9vXI%2FAUwNnAc2zoDbAkcBhIqUDqgtMKsDvdDZtlxhvmX6fW2KcdSjwq1Kkc%2FXymVW8k2J%2Fs%2F%2BX64IsoeXx%2F9U1vbajQCxl2VuF9qEfu2qZA5qGrzCtaiumExM4vA5sTkMGhTgVSzBGc0w%2BcESTHmbvm85u4KdaNc0dDNe7tDdXTeMnuEoU9Wbj%2FIbC3kqw0pCoXesc1Hu8qHk8wSZT9ePnfnB5juqPKzJmP7nDy4klt5BHH728bMGHzZtSYIHhE8rad8yg2CErZbIU%2Fw0i%2F4SgCXMaPV02fw6K5r4QIDvoRc7M9yg6xGGfmFdpQ1Ewg8S5xAY6pgGYNUovpr6npBN3%2BX7B7CIuoeD4b%2B5n4NYRd10JK239hszrfPH%2BQPIqVZH0X0JNkmlPKsLAEbHtUj4CxqQpTyTkp5PdF227jqKrytMKGKK3Wa%2BeVXrgZRZ7pFyQvkOR%2FFUcp6WhwuwUIdBjGI31RAT%2BkUb%2BHspLR9%2FPKN9aDdhsrOJkaqiS20bfW2Zpz0nPyTW30EdKDrgYbNbWmuZ0juetHZV0G7yU&X-Amz-Signature=0c36d528610a5f9a2fc020ecd6d4a901aa15a48717b920dcaa77fe4bee34c52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOUDMFQP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0u8PktEgPMwEldpfYAtb4dVceKFO0LPSqTNEZdgplVwIhAPCiEfPVIHmpQZwaCeGmaFg7eg11iyQSkLNs0keCc3pgKv8DCBwQABoMNjM3NDIzMTgzODA1IgyGIDZozlpOnMq07hAq3ANHTrhopK5FaqBl%2FR5vLdwrVYva8IB5eXTRPsJxvrHQQ%2FSmXnUfWkW4HcvXRJUTVqfXRqFIxAsI9MkoJdHCMmBoHkco4gPrYgBAJESzdmSofzpIIr2XugSO2y7Knq0q2o%2FxfTHp%2BTgSPoi%2FzDHcGnxSnrx66aVoccgHxkSsEGy3QID%2BCluajW46iKwPOCgtJjIPwhTYF1ns8a470BjWAqSAwGTiCdOvqi3H7P%2FfSgW0%2B5BLGR1PTHNcFeQXzVoyYt3%2Fai9COS70MZJJ9YBFikZfvVpl4HjSBIrmeP1RR7sdOkWadNrjPN2yVcMUnzlfT3DJba7qCPx1MvmXsqhaN9p8HDkXWPlZ437ZqhoAnWaKVvmBVcx3AJcc%2FleGPg7sG%2BbngMOYGRtl1RE9N8oa3w3Ju1A6226Ejxl6f%2BprzeLvWIPtJthIN4JVokGHVP0g%2BAVHopUTN3jXvGMFBTmGpY2bu3lIkSydVawTx2lbgUROkCA7NcMTrFaXdCSjjei8awgvP%2BrQnja1yfaK694Wk7W1D4AN7DIIsX74DRsWTpVrH422wWpSmP0en2C0ZRmoVQE1ZRlXcKw4MIeiYgUwVqt8RqyagW2oD62G3A3X3Cq8h2l9C0Q0zkLw4TQ0wTDMw7nEBjqkAUyQSiWGsJXuuhnXDUGpi8A7fJ8SZlc4FpPiFfID0oyGyU7nBUEZ9WoS8Iz3iXz7UFUljMx%2FDh0Tu48LtRdz8MTD%2BJnpzXQbXxxORc%2FebQOAf6clwp90pVm6xYc%2FNXcOjS2ogj8Gvv0Xc%2Bf8%2B04vAc%2BzvpXqCUBjROWpD5zFkgt9ByFZ3ywAG6k7PEfbOOQNICzji3djk40SPGKcWdW0dQ%2Bbteaa&X-Amz-Signature=ed41d952eec18a22e2b88e63958075532d2afc70eef12369ec34eb3aa2b1d004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3L4AXU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6e1w9syysD%2Fc%2FuLvwi9D6liNxNAiFATSRhlSYvvVAPAiBG1JMh81OervoVwnJ46%2FGdVuxdWmEu%2FsyzfXyf6k0NZyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMmqHjaodKOy3%2F45IbKtwDhzl1j3c38BmLPJgDg9I5WBeYAPECAodpOITvDs2yEGkk%2FDFPSm84rYCBWPHvl8WCHSVl0slP9pLiOc1RFv1aWQMQWt4CKO6aLADStEWx2AXYHogw3D%2FZqAkGr4wzumLRJRhzgBBPhykVHm%2Bwo3srFHk75IdRR5YZmd0G5EZ4ENt6cI2T968FrBTotzO3%2BhgO44u6WXbSPWicy2IYnCmoxipRxzQ8E0dkTOjSDEHsKgu6xEfbe9nhXE0MDVjEbe%2FGUdEBiyH22bv1C6eVxbbmbkXNK%2B%2BG497Z8umlIMpRL4BOCx%2Fzb3syYpmEbJ8a%2BJeiAi7tEiVCx6Jqh9klR0J2B3jCQ%2FJ9I1R329YMOMrQ0aJkjktw9h3klbh1YHinfuNEdsr7SNhSaudY%2F2oGeoxWOjVhKl2lt%2BcZNFOpbgHNRwVf%2FPnCO9QJ8lDn9TUUgu%2BtBKaLLvUaAQxQ7wUkoj1Whl%2FRfowALLDFRbTtVAYhKQcNO1frmEZ%2FG%2FPDr7lrP7o6PEumr%2BqRpV79z4ISb0xVmnzNNtuYFEdTx7fPRdGj9%2BE33BeosxqkjXwLzU3PvhUMy%2FUtBcSVsBA7UeEJ9PUTMugApZPBIoZfT%2FkDFEGO7dC6Hiw0F3GTHYxMkT0wj8S5xAY6pgH0NMfEZ%2Fnty8KAo1BSnhg8EkSVT5IuVZfOzJGtpgC%2BFrC906obcAqyEc4JqcKpkj%2B6gg8Xeds%2BPK8hTKvB5z6KoKrnJOK%2ByoF3rQfxE7d4t882Fk7iDxz6ouvoWOuy%2BiS2PGcg28jnw1PFtSsbf%2BNv4UN9M5P6J2YyMXK%2B1UA33AmGsJSSHkW2I6GY0d8ytz3lA9%2BL7mGZjwTXn%2BG3OXXg8rjFtARU&X-Amz-Signature=49366f221458c6c9e7b74e6e7a6e71f5459359db517d9b4b729c33e6a17147f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
