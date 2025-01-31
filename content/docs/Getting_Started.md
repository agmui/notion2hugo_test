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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BB4CKO2%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAqGqK1ww6vJlyV1Rb23ZpqSJg3svWC4qr4pzdVw7thQIhAO2CZM58RNPHlMVwWyRXXPdvahWCKzM4QIRl7qUxqRutKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BwjFdl1wg6CuKnuUq3AO2jkomKUTsi6v2kE9KH3l7wGsoEqU%2B4hO0EQUVgkVWg2yhe2pHXKeJzymCaScPxS7u8R5wc1NycXGHcRZMa%2FiC%2BEjzETX9v4qC%2FZvtGT6T7LfmFgDlVGL4UO9L1UaRqHDV2W1wogLsgslT1c%2BAN5V84f8s6%2FR18tXba2JZRWr%2BXxDZPEcX%2FFDkV5IBskIjgD%2BzgLp3gcxc9Fn6ujDMc3a%2FZRdAYAzuipH1MSMd7skPdEfrKkbaF9ISofwe7cG120jUhWn5MrVBkqizDuXc9cixQy7J0sCKndV0LNJ7kODzehtkk2bwXRQTUiljT2gpQXXo1AvZkvNsg36o20ruPoaAvTm4SyjLT9sSPChEY20bZb3jXvDRHy8IMll599q9zgSLXQQd5%2BV5%2Fr2K0RUz0wOVh6xVQtNKd7sC2pqH2XAf75%2BXaRbTAtObO0wRKzD9VYkCiUwudIQAV7ZhhO3RYTaL0zzKuPlychxDFppWwZ8FMFGNV8Eteh0afNdVYyAsvsU3T%2FWPoFrHnzNjJ2xPZI%2F6MqftQoXOCPtuFY3aQOa9s7ROJKrh8OYmKEO8NjaZB0cx5J3EKnURQlhK5VckbKQGnYyKl5Gqd6mOVYd5psba4ihooujES4qCsN8y6jDiwfS8BjqkAbdAfVBKUHZKb%2Fw2c0GMTmpY0Kx5opBM%2Bpws%2BT0Bm4446fvJndXpDTkUyooqnag3a4jXW8UUTcxLg5%2FZFKYieXOSz2BUg39eyOVZP3CXvwWK1Ax5PaxxGtaz1LYduHU%2B1LCq7a2mf5h6ZWFk4950NKtGKJtzyYqCF8LFOwuRlQl8LVTwdb3PykjnOMAPw2u8De3ipASpL2l4JaVnRrlwxMCNbgGM&X-Amz-Signature=f6cb27f3d27a6ebe85159d25f7778f752d74fd7bb3361c5e7f74fbd2fac46646&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BB4CKO2%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAqGqK1ww6vJlyV1Rb23ZpqSJg3svWC4qr4pzdVw7thQIhAO2CZM58RNPHlMVwWyRXXPdvahWCKzM4QIRl7qUxqRutKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BwjFdl1wg6CuKnuUq3AO2jkomKUTsi6v2kE9KH3l7wGsoEqU%2B4hO0EQUVgkVWg2yhe2pHXKeJzymCaScPxS7u8R5wc1NycXGHcRZMa%2FiC%2BEjzETX9v4qC%2FZvtGT6T7LfmFgDlVGL4UO9L1UaRqHDV2W1wogLsgslT1c%2BAN5V84f8s6%2FR18tXba2JZRWr%2BXxDZPEcX%2FFDkV5IBskIjgD%2BzgLp3gcxc9Fn6ujDMc3a%2FZRdAYAzuipH1MSMd7skPdEfrKkbaF9ISofwe7cG120jUhWn5MrVBkqizDuXc9cixQy7J0sCKndV0LNJ7kODzehtkk2bwXRQTUiljT2gpQXXo1AvZkvNsg36o20ruPoaAvTm4SyjLT9sSPChEY20bZb3jXvDRHy8IMll599q9zgSLXQQd5%2BV5%2Fr2K0RUz0wOVh6xVQtNKd7sC2pqH2XAf75%2BXaRbTAtObO0wRKzD9VYkCiUwudIQAV7ZhhO3RYTaL0zzKuPlychxDFppWwZ8FMFGNV8Eteh0afNdVYyAsvsU3T%2FWPoFrHnzNjJ2xPZI%2F6MqftQoXOCPtuFY3aQOa9s7ROJKrh8OYmKEO8NjaZB0cx5J3EKnURQlhK5VckbKQGnYyKl5Gqd6mOVYd5psba4ihooujES4qCsN8y6jDiwfS8BjqkAbdAfVBKUHZKb%2Fw2c0GMTmpY0Kx5opBM%2Bpws%2BT0Bm4446fvJndXpDTkUyooqnag3a4jXW8UUTcxLg5%2FZFKYieXOSz2BUg39eyOVZP3CXvwWK1Ax5PaxxGtaz1LYduHU%2B1LCq7a2mf5h6ZWFk4950NKtGKJtzyYqCF8LFOwuRlQl8LVTwdb3PykjnOMAPw2u8De3ipASpL2l4JaVnRrlwxMCNbgGM&X-Amz-Signature=762cf066acde6a4b423d5e9ea4a4ec550364247c44955c93f998be3a81dda736&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NTHDY6J%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDznx8axbXI1MorsIkQ%2FxCsG5jQKz4N3DONU5rOOLEUJQIhAKOKgCq2XRDmxhfzLF6VSuJsBnfEEP3ikADavZWvC23sKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNIjeySf117v7R1eMq3AM5qPICULhd5mPm1vJ2jYeVkX8VPtvGKdjVVsrU86z1PTFDKigSCYmIJY4SnvAx6MgRGha4BKxDgYWFFJjKhisR6MufkerIlmj6wuzm82kaRCb%2FhFcLoc8j%2BX7OqnlZiIj8UfMIBJkNT4oWCz5oMblC7nixJO8ygr4wsCiHI%2Fx5Z%2BH4hMXK9kcDTSwVhn9BIrHtEb90iYbEwew4U%2FrDF7ZRP88OmLaIIInxiexct2tUQlxI7l9SkWYf2UpTsBAln6p4Hnfp5Vu02nf4NR9wxaR0d9z8xo7xHZN2Qzh7rLmC%2BzEb4fbEnDZRf%2B9PP%2BBQEwenKo%2FUFJokK9tZl13J4SQikZXGOqun1taBY7qUX660lZA0gtj4%2F4PuNgN5f6%2Fwm5Tu3eKhmtNPn81HaFwfZEtCwizSn%2F4CFoB4AUFOzHo7afR5wadN1ndGr2y%2BQnEavLx%2BB1%2BBAKVh0ttDvbXIiOMVDDSRgACbCrYZyh35mXejEWJNm1w00gTN5CmmBiRlqF8teM4z2kAPRXHofXi2Cz4beqIzcdaUKwu6XBtsjkUHUx7hM4fG6EbMy55QOpWC76a2Gm%2FQnHb47cFXSAUR79%2BwpdwbAY23l2ZMqbE26pIBSL5Jwa4Dzzk5YUmsqDCiwfS8BjqkAUSnIk5LSioKi9MHgiP2%2Bno9f1SS1xIclNcc1TryaRyGNwAy1UVCs2M%2BY7KymOamBoAILnH4jHHqBSBWsV7e%2BynxdJts%2FyaN7YEFJjRhLmxBhHl%2BjpfVLOQa%2BAO8b%2BGPhMMroMJL3r4M9hfsMXbBK0Ma4r9zHdkIsN5NlgoZHo1h6yqrRXIQ2H5eZAvdY9rQ%2F8EN%2B3LdIeXPMWGb%2FSwAQ3zIm9Bm&X-Amz-Signature=94a265e200b22b886681d30e5fbc36a81058b04c432bbcab30093f0d54efdf88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QY6DAJJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw0Ptz8VEZrApBThCpxYs6mhxcI73FKvTMg3SEtf9hIwIgduy%2FegIBAWzOWTPPaAGyTBrirXwdJx%2FFXzB4R%2BtH3a8qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTZctqkGiUa%2F2iCiircAxGiFWVXm3So2Nn%2BcljsyMGK8T2X8igslf1BuP9w6HCPxJrvMk8jZbvTT7G02HhplKajSbDZsh7oK1WqMlGznCuXxE%2BJDVQ7vv0KSSSRShyGqle8GFqDyFWpHLPXPnSGR%2FpIvib108o0%2BU0EavVwf8PRyLtKD5TwETyPzWiRmMcwAtcdOag8duimdP2BBynPkaG4X6AqTSy59zbwh5KWswGRyFWW0%2BcLoHt%2BlPysa1ZzHua7Ndc%2BNVupCB1XBxoA%2Fdd7Jub8OU4vGMo6N3Jqu3%2BzFOqmsLbhspEHJ2%2FFzBVmwJJ5xSSVhgE57kClrmzu%2B9oTGkuN%2FZ6p1o%2FeGYGSKiaUE03cm4GcYc2ulj8xRd73Bc9NBYeIvqwZRrALSrbGtDBugw9KEee0NwbIBfMsxVNkyg6XxX6YVhRz3vfwEsML7Ovkl9etsJd4RHRr35HOVos5Sh40srTjg5ggtVkU5SINswuRe2VcM1NS0WTyGsnUXrgQuD7vamUK1vKxhrUQoxG2okpOmmbdbFTdUn%2FqbE%2F6v3lr9urMi9BbJJ01XvS6JDV6efDadyp8ecxJUBXD7m5VuqJ472dm1F78RF9yF3PENvpykLL4X9SinsNXDJo1kFxXuzUQ6Dv9%2F6GjMLfB9LwGOqUBKaDU%2F9VC6i2o7%2BOR0nw%2BOKBIc1CKmQwUMjnkTtC6MrbL4eaaEEuy9MOn2AOUS7NpfM4VNoEB0eXffAYcRgzmtm9xEShUyKlKwEstuIkx7zwv8GQUEwUASLQftnjMDVguInk02o5VVxn81bQgH33Ii2Q6UEUnp2NMshdVS9uWvS7BVosL%2BmFGXjMn2B7jXBGF%2FsZgEast0R0N7axIWPVMROPT5pSR&X-Amz-Signature=16a7e3b261c010ae7d733dbf2b42a5803bbb2368e722099f94012e54aba17645&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BB4CKO2%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAqGqK1ww6vJlyV1Rb23ZpqSJg3svWC4qr4pzdVw7thQIhAO2CZM58RNPHlMVwWyRXXPdvahWCKzM4QIRl7qUxqRutKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BwjFdl1wg6CuKnuUq3AO2jkomKUTsi6v2kE9KH3l7wGsoEqU%2B4hO0EQUVgkVWg2yhe2pHXKeJzymCaScPxS7u8R5wc1NycXGHcRZMa%2FiC%2BEjzETX9v4qC%2FZvtGT6T7LfmFgDlVGL4UO9L1UaRqHDV2W1wogLsgslT1c%2BAN5V84f8s6%2FR18tXba2JZRWr%2BXxDZPEcX%2FFDkV5IBskIjgD%2BzgLp3gcxc9Fn6ujDMc3a%2FZRdAYAzuipH1MSMd7skPdEfrKkbaF9ISofwe7cG120jUhWn5MrVBkqizDuXc9cixQy7J0sCKndV0LNJ7kODzehtkk2bwXRQTUiljT2gpQXXo1AvZkvNsg36o20ruPoaAvTm4SyjLT9sSPChEY20bZb3jXvDRHy8IMll599q9zgSLXQQd5%2BV5%2Fr2K0RUz0wOVh6xVQtNKd7sC2pqH2XAf75%2BXaRbTAtObO0wRKzD9VYkCiUwudIQAV7ZhhO3RYTaL0zzKuPlychxDFppWwZ8FMFGNV8Eteh0afNdVYyAsvsU3T%2FWPoFrHnzNjJ2xPZI%2F6MqftQoXOCPtuFY3aQOa9s7ROJKrh8OYmKEO8NjaZB0cx5J3EKnURQlhK5VckbKQGnYyKl5Gqd6mOVYd5psba4ihooujES4qCsN8y6jDiwfS8BjqkAbdAfVBKUHZKb%2Fw2c0GMTmpY0Kx5opBM%2Bpws%2BT0Bm4446fvJndXpDTkUyooqnag3a4jXW8UUTcxLg5%2FZFKYieXOSz2BUg39eyOVZP3CXvwWK1Ax5PaxxGtaz1LYduHU%2B1LCq7a2mf5h6ZWFk4950NKtGKJtzyYqCF8LFOwuRlQl8LVTwdb3PykjnOMAPw2u8De3ipASpL2l4JaVnRrlwxMCNbgGM&X-Amz-Signature=d7e1624a4c13d3264bce410b07b4a2a75513c1da8ed5dcf5af2f9f88c3d155a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
