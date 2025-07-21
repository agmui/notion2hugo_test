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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFAPIBJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLLxnWmHOBq6aDtpHrNcKZDtSMSUIHlhx%2F6KphC%2BimlAIgSP36HBzfdJ3BKenN%2FsA3gfgCMkSOpzmCIqqpo4y8YEYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRk2CgOKLkLCbcGTircAzaTfUp8xyhG42yovxNN2WH59hu6v35NnFo3eWpsl7vHv6ahY4o7xkLApuZnAX%2F5Nc4iqoEQY6sxqjDV9ffilz9PcVYbbauMa67CvegmqZg%2FzzDosQWKQRLVWRsTaImulEgKfpRjLykvv%2BOdGEA0gbiHaoJ2sw9ltJmqR3LfqgwwJo3FvShDZEs3fS5dlGUy4t%2BwiMKQKBulPnXuFv2vIoQk44g5fGMp4Scjku4eo4ID3Y%2BDqA%2Fux%2BITRACv2rKGwsTi3tT0KCrtU6RnZ4i2N7mTJ%2F%2BOlp6HvEBc4EGJev0xO1ODSEoMyLBaEmjiHc2pQcLoAExwhRg4A4znRCno1PWTGyXHwZLkWDm9k0wrrugcgxufOUhbIiOmDIjXCWdXF9Od66I96Lnu7LmufMsZL%2Bxver8Sx%2Fj4pj740X8ci%2BwP%2B8S3KodXmpXUSnPTQhQZRpQ5%2BUN5k%2BhIWBUi14z%2FqssW1VvK1ReJEKsiOqkSrHlRnX%2B8FScszhaDAeRVANwbYD4SwWENhvlO4o89KsDOi26wwfJzY%2F%2FbEUHdcfoIyxPSPUmAh%2FTeEA1eZqYAbZ3z%2BAd5riuJk7hwk0iI9c2gTgijfDZXBKG0kb25aY9L5UYUbTazu4%2Bm%2FFrJkbGJMKjn%2BcMGOqUBO0fokLRSnRG6IV2jRJjzXL%2FcVXoFOwZM8JXIeE6VcYvCUiPgRyDchgTpGnFrXnpdJZCAW6gsAB0R2Y0KNuexv7VzRaJ%2FjtVfnSxDSty6r4b7JYlXxq6TStcCaSAvMGDTbTK5LYdIDa3Q48LDp2osoBPilglfKYN8Yn1u%2F4I85rouPFTY7cmFUGkq3wl%2Fy8KI4MfLIrp6HYq0DUgz3QoABvsEgDOK&X-Amz-Signature=eddd23b1a4c7913a2de362e45450162171573c39632bd08cbdfd46cb654692b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFAPIBJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLLxnWmHOBq6aDtpHrNcKZDtSMSUIHlhx%2F6KphC%2BimlAIgSP36HBzfdJ3BKenN%2FsA3gfgCMkSOpzmCIqqpo4y8YEYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRk2CgOKLkLCbcGTircAzaTfUp8xyhG42yovxNN2WH59hu6v35NnFo3eWpsl7vHv6ahY4o7xkLApuZnAX%2F5Nc4iqoEQY6sxqjDV9ffilz9PcVYbbauMa67CvegmqZg%2FzzDosQWKQRLVWRsTaImulEgKfpRjLykvv%2BOdGEA0gbiHaoJ2sw9ltJmqR3LfqgwwJo3FvShDZEs3fS5dlGUy4t%2BwiMKQKBulPnXuFv2vIoQk44g5fGMp4Scjku4eo4ID3Y%2BDqA%2Fux%2BITRACv2rKGwsTi3tT0KCrtU6RnZ4i2N7mTJ%2F%2BOlp6HvEBc4EGJev0xO1ODSEoMyLBaEmjiHc2pQcLoAExwhRg4A4znRCno1PWTGyXHwZLkWDm9k0wrrugcgxufOUhbIiOmDIjXCWdXF9Od66I96Lnu7LmufMsZL%2Bxver8Sx%2Fj4pj740X8ci%2BwP%2B8S3KodXmpXUSnPTQhQZRpQ5%2BUN5k%2BhIWBUi14z%2FqssW1VvK1ReJEKsiOqkSrHlRnX%2B8FScszhaDAeRVANwbYD4SwWENhvlO4o89KsDOi26wwfJzY%2F%2FbEUHdcfoIyxPSPUmAh%2FTeEA1eZqYAbZ3z%2BAd5riuJk7hwk0iI9c2gTgijfDZXBKG0kb25aY9L5UYUbTazu4%2Bm%2FFrJkbGJMKjn%2BcMGOqUBO0fokLRSnRG6IV2jRJjzXL%2FcVXoFOwZM8JXIeE6VcYvCUiPgRyDchgTpGnFrXnpdJZCAW6gsAB0R2Y0KNuexv7VzRaJ%2FjtVfnSxDSty6r4b7JYlXxq6TStcCaSAvMGDTbTK5LYdIDa3Q48LDp2osoBPilglfKYN8Yn1u%2F4I85rouPFTY7cmFUGkq3wl%2Fy8KI4MfLIrp6HYq0DUgz3QoABvsEgDOK&X-Amz-Signature=1329a209e2aafd5a8c6650b5aabd87e066f1032a8309c6e14cf8ef668191fb7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFAPIBJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLLxnWmHOBq6aDtpHrNcKZDtSMSUIHlhx%2F6KphC%2BimlAIgSP36HBzfdJ3BKenN%2FsA3gfgCMkSOpzmCIqqpo4y8YEYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRk2CgOKLkLCbcGTircAzaTfUp8xyhG42yovxNN2WH59hu6v35NnFo3eWpsl7vHv6ahY4o7xkLApuZnAX%2F5Nc4iqoEQY6sxqjDV9ffilz9PcVYbbauMa67CvegmqZg%2FzzDosQWKQRLVWRsTaImulEgKfpRjLykvv%2BOdGEA0gbiHaoJ2sw9ltJmqR3LfqgwwJo3FvShDZEs3fS5dlGUy4t%2BwiMKQKBulPnXuFv2vIoQk44g5fGMp4Scjku4eo4ID3Y%2BDqA%2Fux%2BITRACv2rKGwsTi3tT0KCrtU6RnZ4i2N7mTJ%2F%2BOlp6HvEBc4EGJev0xO1ODSEoMyLBaEmjiHc2pQcLoAExwhRg4A4znRCno1PWTGyXHwZLkWDm9k0wrrugcgxufOUhbIiOmDIjXCWdXF9Od66I96Lnu7LmufMsZL%2Bxver8Sx%2Fj4pj740X8ci%2BwP%2B8S3KodXmpXUSnPTQhQZRpQ5%2BUN5k%2BhIWBUi14z%2FqssW1VvK1ReJEKsiOqkSrHlRnX%2B8FScszhaDAeRVANwbYD4SwWENhvlO4o89KsDOi26wwfJzY%2F%2FbEUHdcfoIyxPSPUmAh%2FTeEA1eZqYAbZ3z%2BAd5riuJk7hwk0iI9c2gTgijfDZXBKG0kb25aY9L5UYUbTazu4%2Bm%2FFrJkbGJMKjn%2BcMGOqUBO0fokLRSnRG6IV2jRJjzXL%2FcVXoFOwZM8JXIeE6VcYvCUiPgRyDchgTpGnFrXnpdJZCAW6gsAB0R2Y0KNuexv7VzRaJ%2FjtVfnSxDSty6r4b7JYlXxq6TStcCaSAvMGDTbTK5LYdIDa3Q48LDp2osoBPilglfKYN8Yn1u%2F4I85rouPFTY7cmFUGkq3wl%2Fy8KI4MfLIrp6HYq0DUgz3QoABvsEgDOK&X-Amz-Signature=e72c96c96849fb86b3e23e3020d271f0a4508f0c110c803adda27eed567b37b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324J4OYD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNfZpziysbEyjFovjBIMB82CjvddVBi2mhax2HYRKlhAiEA5NxwMb8E%2B3tWvZcNAeiEOvzX9%2FNjdHDkET4g62VOX8QqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsVduSBn3cZ37lOrCrcA5pMYXJhFGAk%2BTDInrJjbsKk5%2BR2G%2FuN66UOb36kVr7nXGaQ%2B88NOexuy2BVYfCmcoKznrQylMadST7zBbx5F8tXAmqHRKj2aSXMGTtM0DB9gauORPgOU624doVPLprREkci%2BoYhk7aXcPiwRFXl99DI7uL%2BqV%2BxXNpxrHbLg1dSNLDxRU5LoYITTYoS8Zj2h84sodui6ywt8%2Fga9XgiHaOFGkluWyThqQijYr1zGki8LadxqawSz1hKfduVMaqetCBI09lx2LXa8gNB0Qqvnin9bk3870M7OnXcgYCQyRGzlTBksUAWQiSiaVCJc8jx%2Bo7WLmWx7f0LV2nJFDMVF7V%2F825UYjtrD%2Bmt40Pq0KDPzbKl9sBlHYIx3G%2FpUMi51fLjy%2B0pXh1Wxj5Gi%2FkI4erAXZvY%2FWiq0q%2FtMxYlghkD7DpNE9d4JRh2u%2BOXTYCxD2ecz%2BfOYywR1UFluP4QV1633oFQUN7icIPO%2FxmvZLWtg6C9iRGphrOKSSfQG198i%2BbJGFcfxejnK8X%2BKRrchG3DZE1vOShs162%2FitCNEV139LD4l7JINU40qIZIhfSTckqoG2O9Sl5mmTFf2DvK1is0QVyV2XGQUELcQsd3%2BvMcKe3i6y1Vyay%2F72FqMMbn%2BcMGOqUB08l%2BpRkp%2Bqx22IPA2gNUza8hJicX4A5hG9TWa0K4pzeaIfe0QKKT9qJLn98iNHNLYsYCk0Qi0K52aPCdaMRrqQtF8427Wa%2BVkOH4r%2FxdDHEgi2KAPsVxHvvGbWhfJkkkafTUrZWV86KthGsko%2BrUa9pwlGDbDuphA39hioVQXb24v8wY6exJLd8nZmcvsNcqt8lxi%2Baa8EUiutao%2BA2ANSryqgZy&X-Amz-Signature=7528b49c44c80e6e821dd71c580f8b4c0cb735f2e8c8af623bd48f56dc8b32b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HMIHIC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5fVDp63LVSOqTkhc01AeTf2odIVUqEEusNnU2e%2BlxdAiBfJoRcFjkOdU%2FgMNeKYTuHiUUicbmr7BycklC%2FKQKBHSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn4MJsKQb6C6OKnbpKtwDmpiynLErrcXV5EPzCdrx78OQlP0gDvkyt5LqkUuhhX8cZ%2B3FWVPPOTijkKI5%2BMxw30zx9iGycGr7mPsBzd5kxITc91RSckXgaYq5YrwHRSFiQL2wcnoipM4IB%2FKuKSo3dnGkVkXWUjcLoxC0JT9bjyIToJHcvUAG1z7DCzQow059fnFrbaQKsURmXpV5YUCbGycIm%2FM7noOjn%2F3scmsm5cxs%2FzHil1Zk%2FshfaaaDZjOdC6Wh4lqQFLxJvZSZ1vaE9hvGSJl2dNqnshcGZDvRvgSywZ4GpoR9%2FQoUyQy2rYht%2F7eqbBi%2FGjivMLyYiab%2FAX9askkHPawgem5p3XkfvTYhtXIu3lrk6S%2Bu6lwQjnAiLiuz2I9pOC9GAx3jGoD154vW9lftL%2Fi0VK28Ay4ltXzaG4Bmwydebmmzbgp9en0lq5UmtPSgvRcJZG93iQuknR%2FOTJMNv%2BisBq%2FdJgB%2F29DfChxknAtQPYK5RUGrnKWqRNYrvEfk56f6X%2F%2FR7yz4rtRov%2BBTYOVqmnagW86ddrfVxs1zeUqo7QjPEJbFa%2FUG%2FAlcEOo%2FJ0HBZg5%2Frj04G6VP6%2Be6gLjbkh26Wt3X4F7NBy%2Fu06nECweCSd%2BY1pjUhAd40bBh0eBCBwgw2uf5wwY6pgHNXP8qQVTT7kitSaSlX35IjZoG896d4AEHeAdUFaDmZ8fIZS2CbKvYWXkn45muGtxlg%2BKl8QSMxnUD6tjixIT7YHMGGTBF4iX%2FrJqdWb6QPSBPQ2GfIt5orIH9xd8pqq7xFFnZOaOoos4kbC9HkWvHelmWntGG97UdJWyp%2B7c4%2FkY7iKAAlp3Z9rRe2kX62BMde1l7bq6rsvCcDjn5xLBn6A%2BCWKvN&X-Amz-Signature=c56be55a00d33c30055b5b64ebf1f1e5ea431a31a6308a85c93a47cc8214a0d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFAPIBJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLLxnWmHOBq6aDtpHrNcKZDtSMSUIHlhx%2F6KphC%2BimlAIgSP36HBzfdJ3BKenN%2FsA3gfgCMkSOpzmCIqqpo4y8YEYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRk2CgOKLkLCbcGTircAzaTfUp8xyhG42yovxNN2WH59hu6v35NnFo3eWpsl7vHv6ahY4o7xkLApuZnAX%2F5Nc4iqoEQY6sxqjDV9ffilz9PcVYbbauMa67CvegmqZg%2FzzDosQWKQRLVWRsTaImulEgKfpRjLykvv%2BOdGEA0gbiHaoJ2sw9ltJmqR3LfqgwwJo3FvShDZEs3fS5dlGUy4t%2BwiMKQKBulPnXuFv2vIoQk44g5fGMp4Scjku4eo4ID3Y%2BDqA%2Fux%2BITRACv2rKGwsTi3tT0KCrtU6RnZ4i2N7mTJ%2F%2BOlp6HvEBc4EGJev0xO1ODSEoMyLBaEmjiHc2pQcLoAExwhRg4A4znRCno1PWTGyXHwZLkWDm9k0wrrugcgxufOUhbIiOmDIjXCWdXF9Od66I96Lnu7LmufMsZL%2Bxver8Sx%2Fj4pj740X8ci%2BwP%2B8S3KodXmpXUSnPTQhQZRpQ5%2BUN5k%2BhIWBUi14z%2FqssW1VvK1ReJEKsiOqkSrHlRnX%2B8FScszhaDAeRVANwbYD4SwWENhvlO4o89KsDOi26wwfJzY%2F%2FbEUHdcfoIyxPSPUmAh%2FTeEA1eZqYAbZ3z%2BAd5riuJk7hwk0iI9c2gTgijfDZXBKG0kb25aY9L5UYUbTazu4%2Bm%2FFrJkbGJMKjn%2BcMGOqUBO0fokLRSnRG6IV2jRJjzXL%2FcVXoFOwZM8JXIeE6VcYvCUiPgRyDchgTpGnFrXnpdJZCAW6gsAB0R2Y0KNuexv7VzRaJ%2FjtVfnSxDSty6r4b7JYlXxq6TStcCaSAvMGDTbTK5LYdIDa3Q48LDp2osoBPilglfKYN8Yn1u%2F4I85rouPFTY7cmFUGkq3wl%2Fy8KI4MfLIrp6HYq0DUgz3QoABvsEgDOK&X-Amz-Signature=6128b3fb8656cd80e71c93dd9467d4627af04b2e71103d33521f273e5c7cbd43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
