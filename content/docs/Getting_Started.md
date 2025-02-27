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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDAS6NC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIGImt2hBU857GZaIjo%2FrCbFFL6dLXoXe%2B4tf%2Bew1OkWrAiEA90b7y0XDcYJk6guliDugF47rUh%2BTl2RO8FJTMs%2BZilAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BbzuXtQt0WpS4RvyrcA67H9%2FlFBA8Hgo2SiitQF8q0z3%2BrZoWpxmyyfj4RbeuLlkXGKZ%2BxtU7sspMelPMbTtxFndqnsaNJ3oHwJcMZ0cdMM6g3MtVMJCG4koeep11sl482jAbuI3B7J3RC27zgfLw5iMcFzOqhmgxNHpmoVsvcaM44oI9vFsViVJQJDtYRAeMtwA75XKAvhCnH5pRzDd9VIPk0wpbUe6ARa7UwYU3oISf55j78DL%2F2SfW74mAct2XVEEhMoXHiT9aSai4vftPKdd9CPcajZoCnZYLIKrRecQe%2FoDPInBOgkyIssSDSVWUlkHBVm1thO0kf%2BLi9fBtFvaNG2Sx7ii5uPwr%2BweMWtPDtm48pWeFfw14dxZxHi5dHp9kjN0IGcl7nfGgEh0By9WtHdr2YuItnAeILNYP8A7k6A6M8mB4%2FMS7oz%2Fmz1Hmcg3jzNkkwXZVF8jJcyrNCqp%2F5ooVDCUkKjdH8CrjQ1e1l902n40OOxjiorGhcd1RWLA%2FMhor7OJCUlAd760DWNAuLIzLQ9Xpg48uOFbhZdGtXxshfQUjs%2Bq7NyBnBke7C19Yl1OKsQGje%2B7YuHXXMCm2twBhoD0qNXzSTRDP3ljtdmlkBpOhTEKo4e9WScx1t%2FR%2B6H8lVsWVbMJnZg74GOqUBQIFlGy93MK6%2B%2FO12TOjXT1Y7CtrMo86UYNpgYWOuRkb4FDRaCSkZok6%2Ft5TWXXuCX9VnGIYl31%2FrkHckyl%2FERaR3Zh7iQ1%2F2WRko7F2t50Bsye9cGGMmNhj7Ivs5H9OlYgFQfUQ6OaAwzRcCN8mFfzommpOL3VXfMV7bG9NXNkTVtS6gab76VBYp7xU9PGpqEtkrjCCjyrTiAJ%2BsOnCy45Epftqd&X-Amz-Signature=0b2749a1b89e4983809536f67dbc55e57e567c06fddad48d4acc0807912e7633&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDAS6NC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIGImt2hBU857GZaIjo%2FrCbFFL6dLXoXe%2B4tf%2Bew1OkWrAiEA90b7y0XDcYJk6guliDugF47rUh%2BTl2RO8FJTMs%2BZilAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BbzuXtQt0WpS4RvyrcA67H9%2FlFBA8Hgo2SiitQF8q0z3%2BrZoWpxmyyfj4RbeuLlkXGKZ%2BxtU7sspMelPMbTtxFndqnsaNJ3oHwJcMZ0cdMM6g3MtVMJCG4koeep11sl482jAbuI3B7J3RC27zgfLw5iMcFzOqhmgxNHpmoVsvcaM44oI9vFsViVJQJDtYRAeMtwA75XKAvhCnH5pRzDd9VIPk0wpbUe6ARa7UwYU3oISf55j78DL%2F2SfW74mAct2XVEEhMoXHiT9aSai4vftPKdd9CPcajZoCnZYLIKrRecQe%2FoDPInBOgkyIssSDSVWUlkHBVm1thO0kf%2BLi9fBtFvaNG2Sx7ii5uPwr%2BweMWtPDtm48pWeFfw14dxZxHi5dHp9kjN0IGcl7nfGgEh0By9WtHdr2YuItnAeILNYP8A7k6A6M8mB4%2FMS7oz%2Fmz1Hmcg3jzNkkwXZVF8jJcyrNCqp%2F5ooVDCUkKjdH8CrjQ1e1l902n40OOxjiorGhcd1RWLA%2FMhor7OJCUlAd760DWNAuLIzLQ9Xpg48uOFbhZdGtXxshfQUjs%2Bq7NyBnBke7C19Yl1OKsQGje%2B7YuHXXMCm2twBhoD0qNXzSTRDP3ljtdmlkBpOhTEKo4e9WScx1t%2FR%2B6H8lVsWVbMJnZg74GOqUBQIFlGy93MK6%2B%2FO12TOjXT1Y7CtrMo86UYNpgYWOuRkb4FDRaCSkZok6%2Ft5TWXXuCX9VnGIYl31%2FrkHckyl%2FERaR3Zh7iQ1%2F2WRko7F2t50Bsye9cGGMmNhj7Ivs5H9OlYgFQfUQ6OaAwzRcCN8mFfzommpOL3VXfMV7bG9NXNkTVtS6gab76VBYp7xU9PGpqEtkrjCCjyrTiAJ%2BsOnCy45Epftqd&X-Amz-Signature=8485e159758be673bab5df8eef90007f2bf87ae6e5d82edfadd76948059a713e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRR6L3LD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIE%2Bewkt77amtxeyC9i6E0dbVfveHgY0H69Rs5BSLbGqgAiAdZXanT9D6qX4dbISIrxz1ZmDw9VCBqGQnwmQEfFkZoiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZH5qk8a1BDl6HT%2BKtwDUZrncmSNW4ROyuAPP1AULLvfBKYQuspe6mGa1hbWMKvrudzAv8qkFzmm0lRwiL8Jtu91FAnq5gzXB41NmozQryIPl5%2BdFWJ5uT4yJWXpP3pdZAhk6i2ZNLZkxou3fRIKGMENiq7jPaudcZlxDAlQS%2BfCcnu%2FFMwzZC5B1qXNu4JQhPPhvX7f3VNe5%2F%2BkYvySeDSCKJDxShOfjTRylvOWw4G2bKJqx8Ir5SVKJj8bVkVPZmO3TPf3xa6X4ZmyxKMxhaSjZTaPH60BKryMTrSpDtgftAz2XbaIxUpI26x9QUnpBQXEyd09z8qnm9bpzFhF3C64ZLCUCsH%2Fu1NI6ESxwYifGhRsrZnVTi2tzOeC9hD3OaodpBjg%2BFkH%2B5GBC%2Fr1Ky6gdtk%2BWZ6QcV47ieJg7UEB6jAdQ1hkUOk3jGfXmUFaz7sxfPvKMfVLZYiL1g7YODqZZcI3S0q3hluY%2FdbxfKpNkGfKHW2fX9l7aS9Hg%2Bwcb2JHXBw37tq2e3H6x2q0j16vwf092nUnogaI8DRYiQXwVEnvt3ZwBf1lU6E381Cm0Jz%2FkD6WtEVaIre5E2qPfoQ%2Fwr9LQyRfAAqQekMgGaWZXP3oItmdzfojCPk4nTUbgejuFO8Tfhg6EYkw6diDvgY6pgG7P3k%2FoZ7iik9Ki16IiD2TrPJepVahsdRtXLZiDqvrayRzOVv7jpWZR80LjzFik2nZJr4JYBMYI30xgME1WxIwocn321cj3%2FMHHcDMhVJxhAOBjhcvuYrJo4iBZ157Cssy0syBMBQHfxjT2yRkkDrpsr5sLD00gZi%2FfPysRR%2BCcvuYAWIrJxZhLFaNvp57fYkDH8g6ScAn6imf1GjeSNRVqpZ%2Bcwdq&X-Amz-Signature=56eedf37f95f5db16192e1c9bfc0650963a7fd09d21e04d10d21c6a0669c46c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XJQZOE4%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIF0BBM4OSn%2F00SQEsDacxerMeUfKZwuT7N3y8tiQSPaWAiEA7qleBEzHCCKP60td%2FvXAfeOAdd0li7aiM0IesCIsFbkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtkbEAE%2FRYyIVRRzCrcAw6PwRkkTFzLI%2BhvJef%2FCLXlMriCqlxhMWEEKbEbONjug9sFZO44NNn0lC%2FfvcD4H4xYvKCyLuaHhTsJjmxth5gM2tZCK9K%2FpwuYZ%2BPfFuzbQlw94LdyHW2jlLYu%2FliP72RLxRJpnBbUUGSa%2FIUNHWkTJFO5FkkeW5K0Lwl%2But%2BVY7eU5BpivD0P%2BA0WslTvEdAGzahIPCPLbIujUpXM2TWAEjQJ5tlSKpbwURT9aBoXVCG%2Be4n2p7vPFqBUqDfQHx8j8%2F8yUJphho0KmcNnSyAZn4cPzW6b9y3%2BxzQoFFpvC%2BQEqf2DEKBHvqSIom5C6DPAy0yPg8A9959OhEdAyLUt4XPKXlfDkJcfO2xV40P9KUKPk9mLAOr%2BNRmsEzc4SASzrfKoiNqFN2o1hjcj9hsJKRoV8JRCfTMF7B1KQ8gvB24vGElQ35m8zXeLGvoUBKKJhlOx34iHCwrM4mPLlllzSsmudfTX3kVOCqlIHGCRJHuvwKL1EjKqL6VYImtl71%2BATAyhQdSnmMgbp9UPbVLeFMH%2F%2BAExBle6SGgfeRIiChGdtEvmyGpwv%2BDcCxbocPd2UkjfFLxum1CvQnOcRp4L2ItwanFl3HR%2FZi71bw38FtHM7h0KamUMlFhkMPPYg74GOqUBWAmzz1iBfbdMg2CvVOGWAIlOa%2FmGshPqAtD425qDGjR3rbwHwsAE47vXdW88qcrz9Y5gTevOQ%2FvH6PAPkvr0pWeWbwUaDldJ%2F9o78HkBlKPnuw1LzLklCaFWSAhQx60Jb5DHZe3%2FJnjzpH0nn3dAnccOgbAakIVgnwknaFf5iLEs0v%2F%2B8peH01bDqHa2aBmsmBRIDiI7T08fZCoM4Mg8TN%2FUMHeR&X-Amz-Signature=2ca75ec6bef1e6bde2ac7d4fed1695645a91d1619c158e06d7425a8b8dbf1ab3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDAS6NC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIGImt2hBU857GZaIjo%2FrCbFFL6dLXoXe%2B4tf%2Bew1OkWrAiEA90b7y0XDcYJk6guliDugF47rUh%2BTl2RO8FJTMs%2BZilAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BbzuXtQt0WpS4RvyrcA67H9%2FlFBA8Hgo2SiitQF8q0z3%2BrZoWpxmyyfj4RbeuLlkXGKZ%2BxtU7sspMelPMbTtxFndqnsaNJ3oHwJcMZ0cdMM6g3MtVMJCG4koeep11sl482jAbuI3B7J3RC27zgfLw5iMcFzOqhmgxNHpmoVsvcaM44oI9vFsViVJQJDtYRAeMtwA75XKAvhCnH5pRzDd9VIPk0wpbUe6ARa7UwYU3oISf55j78DL%2F2SfW74mAct2XVEEhMoXHiT9aSai4vftPKdd9CPcajZoCnZYLIKrRecQe%2FoDPInBOgkyIssSDSVWUlkHBVm1thO0kf%2BLi9fBtFvaNG2Sx7ii5uPwr%2BweMWtPDtm48pWeFfw14dxZxHi5dHp9kjN0IGcl7nfGgEh0By9WtHdr2YuItnAeILNYP8A7k6A6M8mB4%2FMS7oz%2Fmz1Hmcg3jzNkkwXZVF8jJcyrNCqp%2F5ooVDCUkKjdH8CrjQ1e1l902n40OOxjiorGhcd1RWLA%2FMhor7OJCUlAd760DWNAuLIzLQ9Xpg48uOFbhZdGtXxshfQUjs%2Bq7NyBnBke7C19Yl1OKsQGje%2B7YuHXXMCm2twBhoD0qNXzSTRDP3ljtdmlkBpOhTEKo4e9WScx1t%2FR%2B6H8lVsWVbMJnZg74GOqUBQIFlGy93MK6%2B%2FO12TOjXT1Y7CtrMo86UYNpgYWOuRkb4FDRaCSkZok6%2Ft5TWXXuCX9VnGIYl31%2FrkHckyl%2FERaR3Zh7iQ1%2F2WRko7F2t50Bsye9cGGMmNhj7Ivs5H9OlYgFQfUQ6OaAwzRcCN8mFfzommpOL3VXfMV7bG9NXNkTVtS6gab76VBYp7xU9PGpqEtkrjCCjyrTiAJ%2BsOnCy45Epftqd&X-Amz-Signature=8843f3b6941776b202c87d48aecaf910007ebe1298c10b5dfe206db39b039186&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
