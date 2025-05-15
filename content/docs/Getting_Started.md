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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72QUWNV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCwbkR5Q06Uk5Gl%2BdpATD3Wv2c8Zwfra%2B8SQQOq%2BtShHwIhAPgMnDkHCC1MajCaVogKghKvXSsubi44c9x1XltBT1IKKv8DCDIQABoMNjM3NDIzMTgzODA1IgxFjRc8uiJRLlSC1rAq3AMcox7bD35TxFxf32ikZJcm5L1YfncXlevNIuxPvAVQeZpGwRLgzvU1R3YdTBAcOivtCyXH4EjjNBe9LHIOxXyJuNWmobgxaOWKErFB4CHYyOSMN7aqAyiWz8pVbu4pc6TCfowDPSpjrRhS844DC6ku6WgTyq1uFXGiBvCM52cY5hyPbd72sR2WAawD4pGTOLIvyH7FIe3bCRyablPUr9RqG89J8CRd1YeXguzm1y8iddf6mKM%2BBs2jaifaG2TODhwBStzr1gMedP49bdosm%2B0AGMzgMIY1VWyj6NUYPqRoNbadmhXXBEnwjQsVjY3%2Fw6p3DN0j%2BZGjXSzJ6%2BJhrphOWnqAeyMbVVck85i6GLE8XOK5VxW7iMdAejiCv%2Fs%2F1fDN9JkQnhVikcbgxR7FfOCN6aLlgBerM3tLbuUUTL5xXgQXSBaSjoVibnlg2DcVI6zpw%2FGpYcqpJOa%2BfE3sipA4QtXFg6sykzE%2FZTPiJwaRVCXg8uqgyReFhbeYfuF8dZv5otrIn6lc%2FYJHkET79rOiuFQBDdyEvFhZWsnwm5fIB7njVrBxc0SZTxGkZXJFs1e7oqneL4SnkXcw%2BuW01kJA0veqtdCD5M0orEhXh%2FTEzI6izV7JFlEQiCpGiTCmrJjBBjqkAW0SjwxuvnTN%2FP04vZWcY4P%2FgIm1kqAlPnEzMuy6esn04RBrK3suUG%2FLwYsdOKKL4dBM0AfExU5Vo2sQPt1H1749I3bl7UwauHBQ9BttbEoLkiIzddESW8rnOW%2Fl312qaKiuJUu0dIXprNNw98p%2BkJmp4j2qdqZUcBBxkCjlH87i0q87CMI9%2FH3H7vsbaJl2U7cQxkDWFI4WYrMAk5On2cW%2F%2FhkO&X-Amz-Signature=4156a1890f1570cea15120270ba7aa2bb0bc9f96d1a5698a96abd5b496c8cf6d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72QUWNV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCwbkR5Q06Uk5Gl%2BdpATD3Wv2c8Zwfra%2B8SQQOq%2BtShHwIhAPgMnDkHCC1MajCaVogKghKvXSsubi44c9x1XltBT1IKKv8DCDIQABoMNjM3NDIzMTgzODA1IgxFjRc8uiJRLlSC1rAq3AMcox7bD35TxFxf32ikZJcm5L1YfncXlevNIuxPvAVQeZpGwRLgzvU1R3YdTBAcOivtCyXH4EjjNBe9LHIOxXyJuNWmobgxaOWKErFB4CHYyOSMN7aqAyiWz8pVbu4pc6TCfowDPSpjrRhS844DC6ku6WgTyq1uFXGiBvCM52cY5hyPbd72sR2WAawD4pGTOLIvyH7FIe3bCRyablPUr9RqG89J8CRd1YeXguzm1y8iddf6mKM%2BBs2jaifaG2TODhwBStzr1gMedP49bdosm%2B0AGMzgMIY1VWyj6NUYPqRoNbadmhXXBEnwjQsVjY3%2Fw6p3DN0j%2BZGjXSzJ6%2BJhrphOWnqAeyMbVVck85i6GLE8XOK5VxW7iMdAejiCv%2Fs%2F1fDN9JkQnhVikcbgxR7FfOCN6aLlgBerM3tLbuUUTL5xXgQXSBaSjoVibnlg2DcVI6zpw%2FGpYcqpJOa%2BfE3sipA4QtXFg6sykzE%2FZTPiJwaRVCXg8uqgyReFhbeYfuF8dZv5otrIn6lc%2FYJHkET79rOiuFQBDdyEvFhZWsnwm5fIB7njVrBxc0SZTxGkZXJFs1e7oqneL4SnkXcw%2BuW01kJA0veqtdCD5M0orEhXh%2FTEzI6izV7JFlEQiCpGiTCmrJjBBjqkAW0SjwxuvnTN%2FP04vZWcY4P%2FgIm1kqAlPnEzMuy6esn04RBrK3suUG%2FLwYsdOKKL4dBM0AfExU5Vo2sQPt1H1749I3bl7UwauHBQ9BttbEoLkiIzddESW8rnOW%2Fl312qaKiuJUu0dIXprNNw98p%2BkJmp4j2qdqZUcBBxkCjlH87i0q87CMI9%2FH3H7vsbaJl2U7cQxkDWFI4WYrMAk5On2cW%2F%2FhkO&X-Amz-Signature=99fe68ecf3b118da56aece24354e1ccc7f50c4f11aabd56cb985a3df097f0592&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72QUWNV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCwbkR5Q06Uk5Gl%2BdpATD3Wv2c8Zwfra%2B8SQQOq%2BtShHwIhAPgMnDkHCC1MajCaVogKghKvXSsubi44c9x1XltBT1IKKv8DCDIQABoMNjM3NDIzMTgzODA1IgxFjRc8uiJRLlSC1rAq3AMcox7bD35TxFxf32ikZJcm5L1YfncXlevNIuxPvAVQeZpGwRLgzvU1R3YdTBAcOivtCyXH4EjjNBe9LHIOxXyJuNWmobgxaOWKErFB4CHYyOSMN7aqAyiWz8pVbu4pc6TCfowDPSpjrRhS844DC6ku6WgTyq1uFXGiBvCM52cY5hyPbd72sR2WAawD4pGTOLIvyH7FIe3bCRyablPUr9RqG89J8CRd1YeXguzm1y8iddf6mKM%2BBs2jaifaG2TODhwBStzr1gMedP49bdosm%2B0AGMzgMIY1VWyj6NUYPqRoNbadmhXXBEnwjQsVjY3%2Fw6p3DN0j%2BZGjXSzJ6%2BJhrphOWnqAeyMbVVck85i6GLE8XOK5VxW7iMdAejiCv%2Fs%2F1fDN9JkQnhVikcbgxR7FfOCN6aLlgBerM3tLbuUUTL5xXgQXSBaSjoVibnlg2DcVI6zpw%2FGpYcqpJOa%2BfE3sipA4QtXFg6sykzE%2FZTPiJwaRVCXg8uqgyReFhbeYfuF8dZv5otrIn6lc%2FYJHkET79rOiuFQBDdyEvFhZWsnwm5fIB7njVrBxc0SZTxGkZXJFs1e7oqneL4SnkXcw%2BuW01kJA0veqtdCD5M0orEhXh%2FTEzI6izV7JFlEQiCpGiTCmrJjBBjqkAW0SjwxuvnTN%2FP04vZWcY4P%2FgIm1kqAlPnEzMuy6esn04RBrK3suUG%2FLwYsdOKKL4dBM0AfExU5Vo2sQPt1H1749I3bl7UwauHBQ9BttbEoLkiIzddESW8rnOW%2Fl312qaKiuJUu0dIXprNNw98p%2BkJmp4j2qdqZUcBBxkCjlH87i0q87CMI9%2FH3H7vsbaJl2U7cQxkDWFI4WYrMAk5On2cW%2F%2FhkO&X-Amz-Signature=611040ee4311abc67a2fa7575bc375f67ece802aaf78ca5ff232df4aa199e012&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOV3P3AU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDlx2e4kJOKBds3vsKNFp9kuzcl05AdMsN7JAr%2BTNewUAIhAN8aTCSQiAlluUAPVzhOuvJ72Ljqrn173uQWbT3HiAwbKv8DCDIQABoMNjM3NDIzMTgzODA1Igz7KtBUj5MRoZM1L24q3ANhpU47M5gMpa27f4FWHymsaJw44m2z7IegYF%2Fl9CPe4niPKYQTdVdSnT%2FtUWU19Qf6dotagQJujUZ79tQKNFOnaChaApUGGC6rsPvdteOJZFgGs0vWtGr6WvFN3Y6GBQIIeVu2Dq0YeRoQPW%2BFOtFAx4W%2F5cy2hF1zzaaHVevSDWNJrafVcyHKLcq9IqRl%2BIlQ0jldw%2FTaguRoYHLDt4zGX82Oif0d%2FxkDxyizmjuIlpX1CGG5llJhTuxueUO8VM8%2BHEdSMuOxzlUTiUDKp2FmBzaeGMY9QcDy3jPWW60h1fvfaaEd92KhINSxWXo3ApItYdT11aCoO2mQnVM7Dq1tm5mIYZoRN%2FLguzBmuzP%2BIdLsN%2BGP1XitkIf8s3ABnxeMMw5lGH3rdVraLnEbIxnsEV9QDPVwIYOvIZZCDH7KLRPZ%2BOc8vvH1cKDdOW%2FgF30gjcaq7jKt2VY8LTTUIhllmc2nDHzA5RzL1ATypW6NEPtFXvn7U9rKP8GXnKTBfLEdcY6DaOQvd42NKDxopj3sIuZq%2BBUNJaKbBJp0aximKPnKF35Dt4cz3vhRDir3cVBA3eD8JoTjOtrdPujhtLlDDvX3MJazNssZRVrqpLTnyI22n4YiDEEy6gW9NDC0rJjBBjqkAYGclNA0jmTiIbxuzkI%2F4mLTR4xHSIdzTxfJLWtK40Nz9Rycq4KfkUad%2B679BF7uTmH6ZA9rGFt28A5s0ORk93YrvKJxhqiNNA%2FQUt%2BDxm%2FO%2BI%2B5UWvXLHxpMn0Qh1xDnjVaCOPthSWMJWkOIL8GNlgvPq5ubU%2BrYwa33q6ed9XFlatoBAmD2eEcHxfuoek9prEFYLbUoBVSRQOs6OQ6K%2Bbf94f4&X-Amz-Signature=32bb60ccf1e7dc8ca1450f4698ac0b4354ac9e07545671b12dd2e8334ae54033&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZPLTXRQ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCKUBKz8dzfC7yHfG6S9yw5%2F4RrnA4i2Z7GnftFqPbu7QIhANC9%2FnytGyLC9bttXmDLAquxTk4035ilCjktfS6FHgYJKv8DCDIQABoMNjM3NDIzMTgzODA1IgxoGZScXBOW63dnKPMq3AP4e5bf2GBcCni3MmOg8eJ%2F20EWdVqL8YpgTr%2FFU6uCtU16bkM2bjAqji0FG0arw0TzeAQ4tkpiEc4pxj%2BDafNdfXWrQOEhwt9RFIvFFl8nCh0fyXTN2BIANrZRi0upVOwgprUVpJj%2BRtRUiAVgJMEsfpnXtWiAdmDXJ1KSl6QLvfJt6juqdsLZFFXUBeSZZfFQkMJiHZlUEphCov7rsW%2B36OMWPosZ1G0Hsol2XTpj%2BFJzWFPbMmDDlpI2W1I0UxF%2FpdZXcL1NMwdFqhscR2MFl0ipmJC%2F%2BabGbg5XKZ1NKhgqechYjMRRqBQ8MczrRGG%2BXi8k1mpFlyVW7pcMceJkny0DfpCUUjzs3Aid7DhU5h6XeFdcBTGeIA4ioBQnENSpo35N7BQKeSqcy75RiP23BKQt62qkM1NG92emYvx7JVMSsCM9fjRUqpGBRSou%2B2%2B0rhLTBlPA4ddrFaleovDlDREMEaGi5CZfWaroJscBW%2B%2F5K69Vuwg6nVEcUZwAHtY%2BxchBgnVJ2VnYS2VSbrafyUkw4Ynvfc9RRH1SdrMK7YzqtCQMk1dWeIhDrwEoggkPEF7XpF10lMMMkGVQPVFSKnT6yYCCf05fYs6JeCdkEcNmiY2fHdr7G1xv0jD%2Fq5jBBjqkAQ65xIO8KB22QToBFX1qS%2BEfgBxPjNUWGTXyiBew1IEeWskCqCxtf2VmfmbHDvsuNOp1oe1vx9nK4zWGvykkdFWHkKaymBKuSpe2GOqdTTKk4e93oTVaPuFgd7nkcUI6077625Rc8N1YCNFEOBtjD46jZwWcqbR%2FiMBkIVbYq6Hw3LfhtAWj6DAQ7WAxQaiA7JJVPXl9m31rIGi5yU%2B4lMFyAgvF&X-Amz-Signature=32fafc165d986b3f608f1a1af644eac3d193185d05512e011b62207c82996cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72QUWNV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCwbkR5Q06Uk5Gl%2BdpATD3Wv2c8Zwfra%2B8SQQOq%2BtShHwIhAPgMnDkHCC1MajCaVogKghKvXSsubi44c9x1XltBT1IKKv8DCDIQABoMNjM3NDIzMTgzODA1IgxFjRc8uiJRLlSC1rAq3AMcox7bD35TxFxf32ikZJcm5L1YfncXlevNIuxPvAVQeZpGwRLgzvU1R3YdTBAcOivtCyXH4EjjNBe9LHIOxXyJuNWmobgxaOWKErFB4CHYyOSMN7aqAyiWz8pVbu4pc6TCfowDPSpjrRhS844DC6ku6WgTyq1uFXGiBvCM52cY5hyPbd72sR2WAawD4pGTOLIvyH7FIe3bCRyablPUr9RqG89J8CRd1YeXguzm1y8iddf6mKM%2BBs2jaifaG2TODhwBStzr1gMedP49bdosm%2B0AGMzgMIY1VWyj6NUYPqRoNbadmhXXBEnwjQsVjY3%2Fw6p3DN0j%2BZGjXSzJ6%2BJhrphOWnqAeyMbVVck85i6GLE8XOK5VxW7iMdAejiCv%2Fs%2F1fDN9JkQnhVikcbgxR7FfOCN6aLlgBerM3tLbuUUTL5xXgQXSBaSjoVibnlg2DcVI6zpw%2FGpYcqpJOa%2BfE3sipA4QtXFg6sykzE%2FZTPiJwaRVCXg8uqgyReFhbeYfuF8dZv5otrIn6lc%2FYJHkET79rOiuFQBDdyEvFhZWsnwm5fIB7njVrBxc0SZTxGkZXJFs1e7oqneL4SnkXcw%2BuW01kJA0veqtdCD5M0orEhXh%2FTEzI6izV7JFlEQiCpGiTCmrJjBBjqkAW0SjwxuvnTN%2FP04vZWcY4P%2FgIm1kqAlPnEzMuy6esn04RBrK3suUG%2FLwYsdOKKL4dBM0AfExU5Vo2sQPt1H1749I3bl7UwauHBQ9BttbEoLkiIzddESW8rnOW%2Fl312qaKiuJUu0dIXprNNw98p%2BkJmp4j2qdqZUcBBxkCjlH87i0q87CMI9%2FH3H7vsbaJl2U7cQxkDWFI4WYrMAk5On2cW%2F%2FhkO&X-Amz-Signature=52a16bfa25a381f015f8b3ec0f39344842b7decf85aaaffd47e48419b32e0a96&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
