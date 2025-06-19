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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PG7IOTA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpejR0kVH8RoOCFH7Pj093GuLUiDDhAx22iGzW1RFHwgIhAL%2BWjs9K6bUjW6XWA479bmqoxcrLQInVY11rKSRhWROEKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLRgkGSyLHmRjDl7Mq3AMEdo8gL7Fgwi5l7QDyn1BdoOsRcH5hUZhevodcWG9%2FDp88HOdFULwuicYF7yVfMfzCHopZNMm8mi%2BvcztnYS2dLs3I9QvgeY6V%2BDcvAmc1lT2adqTaKS6pZgR1LxV3Akc1vLmcs6KO56B78almlpAgnJE2cqhAQTTKLSu%2BjRL5dQt9fDNGy79xfTozL5TZ0S2Nfa9wupulbj3A580EEyR9pUN28MKTXzVRX29tnn%2BRP9gqUJ7BFzIs1JcKBA9iwlYoywng9zztcw7ScwzQQb4hi3CB0GqC3M7FqFmM6sRSTzR84oWNYZMaE17BiERgel11qECH2X%2Bx5F%2BZ0ayxwfnpgSldVWH9YForuVfd4Wh0owuRTQXTKa9yqHmI67zupWZNCnSXz8lNoYvQ4etyD%2FfNw%2B0q9lu1u6NXZ4KXGcnqTgwTwgaHZtG04%2Bm1zP%2BJtQLIgnTNbf6IVVL8ZWDnMbfQksuw6kU4Vfc8GzSilHxpqAtGUKy3y2m38rCK6crleIljJpFd4gqGH1l8lHBgp14mxVZSJIRm%2F9AuS0q4ZDfGk%2BMqt9%2FOM9%2B7iLnCVgvldR%2BNDSEo%2FZilKmDj7vnEaWKKvw%2FvKLO4uI4GTC7lbQzsIiD1cd%2BOWUApBfWQZzCatM7CBjqkARxvx3Vo6O%2FLUHc95v43020k7066%2BMPkOKEIWfwo1CxDCdiQZ6pX%2BEc15IV38MTNfEJ8gOPrcCO3%2FvH4%2BJ8Qmk8%2ByAhnb9RQhm0cFxDPMJblsLwboqcj8DfFFWpgbAuambHkH6635PmG9ttnOq3Fue%2FKtAaNkaiG1wD1F28mmCeNyJADzGohBitq8wambqujaV9kKI4rUdecGnk%2Bc%2F1BBRigyVI6&X-Amz-Signature=a9f036538b33518895326870a118b815277b51bfd4dc21672f5f4e6a9185091b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PG7IOTA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpejR0kVH8RoOCFH7Pj093GuLUiDDhAx22iGzW1RFHwgIhAL%2BWjs9K6bUjW6XWA479bmqoxcrLQInVY11rKSRhWROEKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLRgkGSyLHmRjDl7Mq3AMEdo8gL7Fgwi5l7QDyn1BdoOsRcH5hUZhevodcWG9%2FDp88HOdFULwuicYF7yVfMfzCHopZNMm8mi%2BvcztnYS2dLs3I9QvgeY6V%2BDcvAmc1lT2adqTaKS6pZgR1LxV3Akc1vLmcs6KO56B78almlpAgnJE2cqhAQTTKLSu%2BjRL5dQt9fDNGy79xfTozL5TZ0S2Nfa9wupulbj3A580EEyR9pUN28MKTXzVRX29tnn%2BRP9gqUJ7BFzIs1JcKBA9iwlYoywng9zztcw7ScwzQQb4hi3CB0GqC3M7FqFmM6sRSTzR84oWNYZMaE17BiERgel11qECH2X%2Bx5F%2BZ0ayxwfnpgSldVWH9YForuVfd4Wh0owuRTQXTKa9yqHmI67zupWZNCnSXz8lNoYvQ4etyD%2FfNw%2B0q9lu1u6NXZ4KXGcnqTgwTwgaHZtG04%2Bm1zP%2BJtQLIgnTNbf6IVVL8ZWDnMbfQksuw6kU4Vfc8GzSilHxpqAtGUKy3y2m38rCK6crleIljJpFd4gqGH1l8lHBgp14mxVZSJIRm%2F9AuS0q4ZDfGk%2BMqt9%2FOM9%2B7iLnCVgvldR%2BNDSEo%2FZilKmDj7vnEaWKKvw%2FvKLO4uI4GTC7lbQzsIiD1cd%2BOWUApBfWQZzCatM7CBjqkARxvx3Vo6O%2FLUHc95v43020k7066%2BMPkOKEIWfwo1CxDCdiQZ6pX%2BEc15IV38MTNfEJ8gOPrcCO3%2FvH4%2BJ8Qmk8%2ByAhnb9RQhm0cFxDPMJblsLwboqcj8DfFFWpgbAuambHkH6635PmG9ttnOq3Fue%2FKtAaNkaiG1wD1F28mmCeNyJADzGohBitq8wambqujaV9kKI4rUdecGnk%2Bc%2F1BBRigyVI6&X-Amz-Signature=11a44202fda1a1e19699446bd72d3dcec323e94cd74858ec442f43034f6c64a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PG7IOTA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpejR0kVH8RoOCFH7Pj093GuLUiDDhAx22iGzW1RFHwgIhAL%2BWjs9K6bUjW6XWA479bmqoxcrLQInVY11rKSRhWROEKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLRgkGSyLHmRjDl7Mq3AMEdo8gL7Fgwi5l7QDyn1BdoOsRcH5hUZhevodcWG9%2FDp88HOdFULwuicYF7yVfMfzCHopZNMm8mi%2BvcztnYS2dLs3I9QvgeY6V%2BDcvAmc1lT2adqTaKS6pZgR1LxV3Akc1vLmcs6KO56B78almlpAgnJE2cqhAQTTKLSu%2BjRL5dQt9fDNGy79xfTozL5TZ0S2Nfa9wupulbj3A580EEyR9pUN28MKTXzVRX29tnn%2BRP9gqUJ7BFzIs1JcKBA9iwlYoywng9zztcw7ScwzQQb4hi3CB0GqC3M7FqFmM6sRSTzR84oWNYZMaE17BiERgel11qECH2X%2Bx5F%2BZ0ayxwfnpgSldVWH9YForuVfd4Wh0owuRTQXTKa9yqHmI67zupWZNCnSXz8lNoYvQ4etyD%2FfNw%2B0q9lu1u6NXZ4KXGcnqTgwTwgaHZtG04%2Bm1zP%2BJtQLIgnTNbf6IVVL8ZWDnMbfQksuw6kU4Vfc8GzSilHxpqAtGUKy3y2m38rCK6crleIljJpFd4gqGH1l8lHBgp14mxVZSJIRm%2F9AuS0q4ZDfGk%2BMqt9%2FOM9%2B7iLnCVgvldR%2BNDSEo%2FZilKmDj7vnEaWKKvw%2FvKLO4uI4GTC7lbQzsIiD1cd%2BOWUApBfWQZzCatM7CBjqkARxvx3Vo6O%2FLUHc95v43020k7066%2BMPkOKEIWfwo1CxDCdiQZ6pX%2BEc15IV38MTNfEJ8gOPrcCO3%2FvH4%2BJ8Qmk8%2ByAhnb9RQhm0cFxDPMJblsLwboqcj8DfFFWpgbAuambHkH6635PmG9ttnOq3Fue%2FKtAaNkaiG1wD1F28mmCeNyJADzGohBitq8wambqujaV9kKI4rUdecGnk%2Bc%2F1BBRigyVI6&X-Amz-Signature=e18e064e444d91cdc27c856551259faef13c1e9705eb0e41110d4e6fb91c68b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEWTEGDB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQ%2FGzecgi8gshAUu9HCjrGCS%2F4mEGllT%2FOZGeF8R%2F41AiBZhtg%2B7Ro2cFoLUoo2KtWloI2hM68spfGiQPK%2BGtzsRyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29iEGgAe7SAmYavHKtwDpmOk27EyY4mJDUiTTQWOuOhnFJVZ%2B8Tb36GXnefPbctmK7ygFDPk3IS9W2KfAGzCevVsQYr%2BHmNntj2SCiBqS6FdivIet4P3vvx7AJ0dxtJsoJXFl28JkqV1gTuHROxFIBbI1Jg8HLlc2x7GgjZqmDUFJinstSwlF3f5f66HTWxBGZnm0KgCi7HzIuBFwG7CvukHtMYDOS8Ln1BaBWGFVAY9YJICLNqk%2FrS%2FOztBvuOBOrOz9uUGllWY%2BoThvgWhPAxHi4RkV%2BsTTpZ%2FCYGhH6aeLAJPvYijl7FY9O%2FgyTR%2BQdEV6cHdCvon9IcCQk0%2BVyl1Wjw7rZ4ZB9DKLlct0ym2sPJ1BeS993igYhq7Xgt701UGhvO%2BIkpS5Z8R7vHVynKDM2%2B4f0uvjBgiKhFrR8RH1ZLDMepsw%2BVB41H%2FI8SSm4ccT5aKaqVQedQPki2OX0J2gPz%2FEDAr0H0gw%2F6zKftzpOau9l%2BQqG90J1j9N3oqnroZ9yqMyex4NVFDxqfm56JEWm5qMf6yG7Rv2HDfB8WN20R9W5NNOHqqjXTFk34%2BgGlkjIeV%2BX9UHNG8lNQvpQ3uwnRSTqNekObevFkL1tS3h8sz5XPwYvJG%2BM4yon5t18Ux7JW1%2FG1ZY%2FUw3rPOwgY6pgEj%2F02303uexm2XPtHcqBg5wjwNCNx8IfT8LWELscApKmTQX16pLkrxoZKQUTwQ8M%2FChmKMoCKzJkCB%2BnUsRNJCjsw2zkeQlDcDRgc0ZXhR7fslSTFGDl%2BVRzJZztKSaSATCptyAAj9RAskLAfMfXzQjTmwipWjUej0cFPETwVzostLtQ0wcCCb740Ujq%2B9%2Bp%2BIO90fpzvWWKmEhvtDx4FFoKdHanXZ&X-Amz-Signature=a3bf6a7d78a9ba5dca76cab2fb6a71226699f9d878f4d742dad6b64863cb55b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BPUVBZR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzch6gPkyHCHArSdN4E%2BgcL6UdE8PyujucRPqq6cocAAiEAmtJYEoI%2BLq6luImNqicVkhO1Rqzk%2Fu7K21YDqotZ294qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcIJT8q8PF%2FuoCLSyrcA6bR3G6RsDVy1HiI%2BWoFsNT5LAHO8L2BEtfs2hyKW5d3g54WeKQCoaspV9el1Q3D4rMuhNwG5psWpI%2FIeHkfq0YUAKbGHnh8xQhkCeYe5W9WLASU4kHHtKTObErj%2BHxY7ItWMsQkcRTtupBbOLljcl0Pq8SNWv7h42BsaLQjZldDqc7nSzY%2Fl6tVDr%2BDaWfdDMZNZxvK5ZJRMs%2B2H50ZliSh9snudHVGOvwU%2FRwEwMNLOOmhsKecAAMilyKmoh6jilMasmBb5RsQxE9CJdzJDlFCcb%2FRJKgpLlz4mpcFTPnSveKeFc0kdng1wDvmG32Bs2YeQ2yXv%2FBBG0ESSJWtMpLO6HPMkuJYGjNjoFZg9Z4R4QeN6bI1k3ODCzqM4sWNUKkeU%2FsOQJjf6dP2kb5waaoDqdfkaDfnF6dzms1B%2BTLfipupTXVS0IRtF1ZnwVBQOp2U8L1mr8hPbr5bL6MmOICpGUsw%2FSxAXKnFyB8MihkHu7MEYp%2Bv1dN13BWDeuEVMBl7lvVNQYDZaBz8LGTWcT4MqdexKQXmCmWdgmTlenJg0d91ltxrqHZbviFHbe%2F9MphPvKgEHi5%2FEs2Ks6Njw4R9WTFOgJo0PA%2BAdcJZOISkLT7Qmm4%2FWSwICa8hMKe0zsIGOqUBOCwwz41KK91vwkuRKE2J1cd6DBpuW69nsQdVglOuqY6LUvT2XxWpSnNIsA%2BFjLh6Tx0YfLKnp5W2Dnlq8EBASfGpW3ZdAZgbrb0tU5cQ7KJWgMJiwHnADaufrx%2FByrTtCKwjg1rW9sreJncaFSOTB1Ig03iR14FdDZM%2B1YPy1ROGiUnbz3uHLD0NzYQRIzrV6gxv88gV4yUTBpvHKHEg0Dyo3M7o&X-Amz-Signature=e81dce6e6e8bd36067acd7a17288d923f00aef10e6fae35ebf844da0c01bf65f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PG7IOTA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpejR0kVH8RoOCFH7Pj093GuLUiDDhAx22iGzW1RFHwgIhAL%2BWjs9K6bUjW6XWA479bmqoxcrLQInVY11rKSRhWROEKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLRgkGSyLHmRjDl7Mq3AMEdo8gL7Fgwi5l7QDyn1BdoOsRcH5hUZhevodcWG9%2FDp88HOdFULwuicYF7yVfMfzCHopZNMm8mi%2BvcztnYS2dLs3I9QvgeY6V%2BDcvAmc1lT2adqTaKS6pZgR1LxV3Akc1vLmcs6KO56B78almlpAgnJE2cqhAQTTKLSu%2BjRL5dQt9fDNGy79xfTozL5TZ0S2Nfa9wupulbj3A580EEyR9pUN28MKTXzVRX29tnn%2BRP9gqUJ7BFzIs1JcKBA9iwlYoywng9zztcw7ScwzQQb4hi3CB0GqC3M7FqFmM6sRSTzR84oWNYZMaE17BiERgel11qECH2X%2Bx5F%2BZ0ayxwfnpgSldVWH9YForuVfd4Wh0owuRTQXTKa9yqHmI67zupWZNCnSXz8lNoYvQ4etyD%2FfNw%2B0q9lu1u6NXZ4KXGcnqTgwTwgaHZtG04%2Bm1zP%2BJtQLIgnTNbf6IVVL8ZWDnMbfQksuw6kU4Vfc8GzSilHxpqAtGUKy3y2m38rCK6crleIljJpFd4gqGH1l8lHBgp14mxVZSJIRm%2F9AuS0q4ZDfGk%2BMqt9%2FOM9%2B7iLnCVgvldR%2BNDSEo%2FZilKmDj7vnEaWKKvw%2FvKLO4uI4GTC7lbQzsIiD1cd%2BOWUApBfWQZzCatM7CBjqkARxvx3Vo6O%2FLUHc95v43020k7066%2BMPkOKEIWfwo1CxDCdiQZ6pX%2BEc15IV38MTNfEJ8gOPrcCO3%2FvH4%2BJ8Qmk8%2ByAhnb9RQhm0cFxDPMJblsLwboqcj8DfFFWpgbAuambHkH6635PmG9ttnOq3Fue%2FKtAaNkaiG1wD1F28mmCeNyJADzGohBitq8wambqujaV9kKI4rUdecGnk%2Bc%2F1BBRigyVI6&X-Amz-Signature=2a07f9ddca1cbb86ff9b2367b99b5aaeee3ab5f2fbb348697f9801957a7c9ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
