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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMI6M3ID%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiGgNQVp1N3N7iGB8Zp0I2btoKChhTia0etFL66wWG7AiAC7o1kbb7ejYV26W%2B37pzn0V8c%2BwCJ5MoDHnqy4sl0kSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLtd8Ji5Eh8vEm2qMKtwDdvZN6t6M3sR2bPj%2FOBwCFf4nKTvFkfJaabTcSa9SwYSkNXQj9b2CmNT2%2FuhrxcfF9gXIbgQFMwexow%2BPqm2mzducn8Dn%2B2j2j0ez0m8sj4Nz1nXGUYo%2BStd9RyvD%2BhosWNVkuNIQL7lrgS4X6EVRwMFOodpEpJXkr%2FKIR1iu%2BYKtF2P%2Bvzh%2BFFBIDaXmivsA9xt5BD8DrmqLG99MyEF%2Bz%2Fkp%2FYO9QQwM7%2FQLZtN8xfSvkfeAN%2FlFiyHCp5q2Q%2BfcN4X0mWPBAdF4sj1iILmAuXiNgLbL3W2qhbzEA0gA201sdB9pbj5D1TXiXayZvxgwkuVSY1su9drM34QvC64q6dRE%2FzT5qoyAboxW6NMm9t2mCAT%2BIl8qbI2Fi%2BmXJ4IMt7F%2BFwd%2FvLDcQTF4nD4mIipKU8dtKeHXQnQRXMy7x6BGCQ0%2FKnE1TAVBwHo41acPZykpqteAV3W%2FUTDrYd66tUNnjf68zW4SKm3s2CzT4tQ%2B7%2FmZIbFoa%2FWmc5EysgGDxtWckb73lMEOj0zI8RWm7DXPziXCm2%2FYLkGZtyJH9xdUbys0TwrMAfYEcBVqQ60WcpSCKwjK0Vqc5dYz8e3l7Hhc2QZ0%2BTowrtAU3gdko85VPV32a0eYoXKFEuIwyIvlvQY6pgFp1K1X%2F6SlrkE3yde7MmateagrVCKKhGvshkI47F7zrKLnwmfcYQgp7v%2Ff9eqih09Maq2GFQfJVyZXa1pLpFY31eRgFa7IdruT2w6z0vVi2FdfYsFFDuDvg8gK75TL1H6No16ODXjOKwdirgNjvPNpUJnPJLau7Hx1g7waDzeAnrhlSqbi%2FvmhAZWW5p7mp0R%2BUXE73SaPAwfMhM7FZ1hcbQ93V35W&X-Amz-Signature=93f2019f3c9c56b92be4f496cd395bbaa8e8647313b12122388f065cfde99e3f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMI6M3ID%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiGgNQVp1N3N7iGB8Zp0I2btoKChhTia0etFL66wWG7AiAC7o1kbb7ejYV26W%2B37pzn0V8c%2BwCJ5MoDHnqy4sl0kSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLtd8Ji5Eh8vEm2qMKtwDdvZN6t6M3sR2bPj%2FOBwCFf4nKTvFkfJaabTcSa9SwYSkNXQj9b2CmNT2%2FuhrxcfF9gXIbgQFMwexow%2BPqm2mzducn8Dn%2B2j2j0ez0m8sj4Nz1nXGUYo%2BStd9RyvD%2BhosWNVkuNIQL7lrgS4X6EVRwMFOodpEpJXkr%2FKIR1iu%2BYKtF2P%2Bvzh%2BFFBIDaXmivsA9xt5BD8DrmqLG99MyEF%2Bz%2Fkp%2FYO9QQwM7%2FQLZtN8xfSvkfeAN%2FlFiyHCp5q2Q%2BfcN4X0mWPBAdF4sj1iILmAuXiNgLbL3W2qhbzEA0gA201sdB9pbj5D1TXiXayZvxgwkuVSY1su9drM34QvC64q6dRE%2FzT5qoyAboxW6NMm9t2mCAT%2BIl8qbI2Fi%2BmXJ4IMt7F%2BFwd%2FvLDcQTF4nD4mIipKU8dtKeHXQnQRXMy7x6BGCQ0%2FKnE1TAVBwHo41acPZykpqteAV3W%2FUTDrYd66tUNnjf68zW4SKm3s2CzT4tQ%2B7%2FmZIbFoa%2FWmc5EysgGDxtWckb73lMEOj0zI8RWm7DXPziXCm2%2FYLkGZtyJH9xdUbys0TwrMAfYEcBVqQ60WcpSCKwjK0Vqc5dYz8e3l7Hhc2QZ0%2BTowrtAU3gdko85VPV32a0eYoXKFEuIwyIvlvQY6pgFp1K1X%2F6SlrkE3yde7MmateagrVCKKhGvshkI47F7zrKLnwmfcYQgp7v%2Ff9eqih09Maq2GFQfJVyZXa1pLpFY31eRgFa7IdruT2w6z0vVi2FdfYsFFDuDvg8gK75TL1H6No16ODXjOKwdirgNjvPNpUJnPJLau7Hx1g7waDzeAnrhlSqbi%2FvmhAZWW5p7mp0R%2BUXE73SaPAwfMhM7FZ1hcbQ93V35W&X-Amz-Signature=66df6f2c164600626d4d910cec7a5c56ca463fbaa8bf53c42dbfe56059ecd7da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IIYEKX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPt%2BZhMYlckajejin9O1TVRpjZaTLzPilpAtRXgVuzVAiBHBOU97sZR8LOBiA6wHQ6J07LaZREUGtBFm6snTwFMzSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7ChR5FF1AIsUHjJ%2FKtwDJoN3lYtE1l9KsTHuqeqpSmGxrijySwvrxh6lV3FFAM431uZqrKz%2B5xkolO6bFqORH6vSrAyUkSrXpn6q0s4bjnMJbmZfnlPST2A0Fx5HC7OWc1dX%2FVC1ailnPHolAF%2BFzA2EsC%2B6WOQAH3lHNKkXFfoqrAkfWe4OorfqObSW%2BGbkhyyRIQrahXnXlVRIvLw%2Bz2FFkdwlldNY9KSdryYARMfySUEqu6K6dMJcpd%2BPrS4zcmRDToeLrTg6r52JnoIZtGS3R76aRCJrDlTqHimH6lDoNhMdLBOu2R1EX%2FmSL0eTMuInoWYgHTdtpaSN2aAAke8MQ4k8s91FRCbkPPK0fIicMz7gADT5sVAQXXAB1%2Fu%2FviPyllJvL4ySXHwEkACrxVKLpqo6%2FhtE1tdRS3cc4PuYKcob003wRhhqKy%2FMCVbVV2pxz06AdKn9jxj%2FKXHdelaStDP2lLBS9jTnm4GGzjU10EerziTwkWqlUwj1vPsaV2mQ3%2BaayDnXf1%2FeOXwZOZytbFx3bji9%2BcDhlxa8g8QnyXzrBPHs%2BsTpEhcLuCgNOYOrKBdq4UAmYRsPIGi4ks2g087PBxd4T9%2B12k39a52PXKPURM07NyNw3bdhgF7beZbnW4tnTQ6NB7ow%2F4rlvQY6pgG3X%2FX1sCvJb4m1W7ZE2XeN96yuo3QZyuXvQzkvXIIv5PprXKu461yH7Lb75NV4YlM%2B96tJDmBfOU7YNMA7PgIpmjtzCVq40VDdVa1flBRJ7Rkx0OndU6vpiUOTgqJhE6U2mQL7JRG9F06JnBZulw2sQ6X%2FSP4Qs59x24JznJjCpSGIwRql7dbCq1jdaeHj54dJ8RJkAx2mdkxhILfM6B7f5SIsPFPs&X-Amz-Signature=fa149736416374cdba6e6dbe1ac118381183cb23b18362ccbdec0cb75a9f6007&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DA3XAMU%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICodkWCwrBfGlpI1wUlWj5wrhmz0%2BvcvEqXOWAnWIIJtAiA2e2kdAsNnhsOzZkIOro%2FsppBQiL1e034uV182KVukLSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYKju9RdvqE7fWzzpKtwDXJE3fsLCcQdN9%2FnCAa1tYzGYv9ITfuqmB6IrwQ%2BcTSgihgUiTZoepqkhu0AqUDO%2FRSVmo%2FJJ8Qd1kbl4086ee6pyP7mh7xeBD0BA8Cwv1xubTKZwaBwtRtBMe1r4juupjtdVtcY7GCmqcasrmRl3LwgSmOibgCFL6zmiLocnSPFZl%2FZKK5CcJogEfgfRUdQCu0WNNlcLjUZdrUUIAHQJl4HaAfJpq5W6ecDUofaQDRmDZqmFbFRV%2B287ig2x5M%2BGlNu7zqv0GlCmTr9X7Tx2EEVY1wXD8IOBnPTENkfmSiJbr3A2NXQXwqav4%2FkOpB5IlVRxy9O9LM4TTjhs7%2BoSrEP98b6unoqZmZn%2F9hren12oySajo4KCBK40dNOezpW6kaAYNfkPkKApXZOp9OMD7RbMyfvBdIt2doubmBdC6cSRIwqvcXRR%2F16gvT2t%2FyLz2rZM%2B18ZEJCyf6GSW0thF%2B3f%2BqBhEuwsu3ol%2FYFGEo%2BDKUzE8S3IiCrhc1hQelybpT7Lvr77mMqGBYLhr8licIo%2BXLfIRAfy7%2FdjveqesbIPKkpwMr%2ByTKiZfZT6aTDB4QjX8aRz65M5xKWiJl5US36R%2BjnyW5ocAq5gTGQDt22prHXtTBVfqESlOkgw6YrlvQY6pgEtWKoyTVJScnEr6oPuIdJ%2FsaGLODgCqDjV7OwRrcbfwl%2BiSCeDHSXwQXQBQ%2FWVn4yQysij%2FVxLei%2Fqn0oFgbRO3s1UzaJsq4YwGn8CmumavOpXs4N%2BRCpwDwfy7F2UsAvvhRH4KR5cowuqZGe%2FqdDgvku9BxFK7FoPxpBqxqpV%2BPJYV99qRQm0pJ0aNSa4wi9WdiNjAHB5KvOnxb1fVo0Hnjmckaau&X-Amz-Signature=ee59b8d71584aa17cbcae1811438cd9d6496b4df08e4c732df37e9626aeae099&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMI6M3ID%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiGgNQVp1N3N7iGB8Zp0I2btoKChhTia0etFL66wWG7AiAC7o1kbb7ejYV26W%2B37pzn0V8c%2BwCJ5MoDHnqy4sl0kSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLtd8Ji5Eh8vEm2qMKtwDdvZN6t6M3sR2bPj%2FOBwCFf4nKTvFkfJaabTcSa9SwYSkNXQj9b2CmNT2%2FuhrxcfF9gXIbgQFMwexow%2BPqm2mzducn8Dn%2B2j2j0ez0m8sj4Nz1nXGUYo%2BStd9RyvD%2BhosWNVkuNIQL7lrgS4X6EVRwMFOodpEpJXkr%2FKIR1iu%2BYKtF2P%2Bvzh%2BFFBIDaXmivsA9xt5BD8DrmqLG99MyEF%2Bz%2Fkp%2FYO9QQwM7%2FQLZtN8xfSvkfeAN%2FlFiyHCp5q2Q%2BfcN4X0mWPBAdF4sj1iILmAuXiNgLbL3W2qhbzEA0gA201sdB9pbj5D1TXiXayZvxgwkuVSY1su9drM34QvC64q6dRE%2FzT5qoyAboxW6NMm9t2mCAT%2BIl8qbI2Fi%2BmXJ4IMt7F%2BFwd%2FvLDcQTF4nD4mIipKU8dtKeHXQnQRXMy7x6BGCQ0%2FKnE1TAVBwHo41acPZykpqteAV3W%2FUTDrYd66tUNnjf68zW4SKm3s2CzT4tQ%2B7%2FmZIbFoa%2FWmc5EysgGDxtWckb73lMEOj0zI8RWm7DXPziXCm2%2FYLkGZtyJH9xdUbys0TwrMAfYEcBVqQ60WcpSCKwjK0Vqc5dYz8e3l7Hhc2QZ0%2BTowrtAU3gdko85VPV32a0eYoXKFEuIwyIvlvQY6pgFp1K1X%2F6SlrkE3yde7MmateagrVCKKhGvshkI47F7zrKLnwmfcYQgp7v%2Ff9eqih09Maq2GFQfJVyZXa1pLpFY31eRgFa7IdruT2w6z0vVi2FdfYsFFDuDvg8gK75TL1H6No16ODXjOKwdirgNjvPNpUJnPJLau7Hx1g7waDzeAnrhlSqbi%2FvmhAZWW5p7mp0R%2BUXE73SaPAwfMhM7FZ1hcbQ93V35W&X-Amz-Signature=94bee86871968325c83d666133bf0c36be526263054c646ba6ca31d9cceafc64&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
