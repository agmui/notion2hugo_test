---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJE46O7%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRji2Q%2BWp5bV0m71HCs8RD%2FvvANxvuQDOOFN8WZn2yYQIhALFaxJCnw1w1igJYl0N1b1EC%2Fqfm96yyylyxZFo9tTfPKv8DCHkQABoMNjM3NDIzMTgzODA1Igw7OnS5vKO28fZi2wMq3AP9lDwyIKcyY4xggKX6UhQdcQ%2BD8Ow0Nvr%2FPFAU%2Fwl%2BseeLtnMEJm6x4yFFJAmMuRc7MD1pe2iymqSnrNHly9wcwL2Ne02idsZ%2B72IksxmznrmmIQCU1us0M3qzZ8FkVe%2BTrsz8NfBkir5QavgcVTvN9OaqPA9KcKctosJXLoMuQo1NM1ZSKveVxeWt5P7inFBBDLEvTyy0m4d8Wju2rLkK5ZzX4M6a0n2sVFvunurXpPSwgIm7iEbdxK0PXSWfuR243zbgeqluLH6ByNMpkSzhH7CIDnocDhbuaiUKJpG4GA46jhD5FqXHmC7BSL48PF%2FsN2EwKlcItRgn38n%2B0UEkm272b%2FVEtkonrFXzBBgS5w0Lzk3JGBw527am%2FBw8BjvY4v2PRGX5u48qnnhcfIc%2F04pFfclDWl4z4EnlDUm2HiYvAMIwuM%2FNERRqI%2Fw3RGLyYrEc2ML%2BLfBfI5P%2BTJvYOw%2BbJr94dHeRP082MzRl4zGfKyGGDAtlfMi1vwwxcWzlePDrkHiMuoxRzCUyf05K2tGpoBJN7CtByUuxMQS39VBRGD5OCjYVlCo%2FcxH%2BVfSS5R0zk3ZgRr0Tnt2dAFFdAltNv8jI2LlqbIDcw7mrIX4aQ2%2FB465vmqHnADCb5sHKBjqkAXpo2XdMABkMzz577tJQxB8YOv1wwW3Z7F%2F6TOh4G2Znac9mGC8dLFXCPOWyqLBk9FkDvDTRdWkHM6NA4a7vhqhpYeqHLi2xleEdDgW8wBI3fnNzOiR9kpROIVLtA8AFFUIgYICBENK7NrRsDS5AlEW9ivWZDAdrOTq2aUg%2F1txAkZ0ucrG%2FWptO2o1bYbbRBn7VIVzvxx2UdX3twNUGLN1pshRW&X-Amz-Signature=8042c260b00ee4b031d8e863215832aca1ef6914dc4b4bc3c8103ee4dc63b14c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJE46O7%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRji2Q%2BWp5bV0m71HCs8RD%2FvvANxvuQDOOFN8WZn2yYQIhALFaxJCnw1w1igJYl0N1b1EC%2Fqfm96yyylyxZFo9tTfPKv8DCHkQABoMNjM3NDIzMTgzODA1Igw7OnS5vKO28fZi2wMq3AP9lDwyIKcyY4xggKX6UhQdcQ%2BD8Ow0Nvr%2FPFAU%2Fwl%2BseeLtnMEJm6x4yFFJAmMuRc7MD1pe2iymqSnrNHly9wcwL2Ne02idsZ%2B72IksxmznrmmIQCU1us0M3qzZ8FkVe%2BTrsz8NfBkir5QavgcVTvN9OaqPA9KcKctosJXLoMuQo1NM1ZSKveVxeWt5P7inFBBDLEvTyy0m4d8Wju2rLkK5ZzX4M6a0n2sVFvunurXpPSwgIm7iEbdxK0PXSWfuR243zbgeqluLH6ByNMpkSzhH7CIDnocDhbuaiUKJpG4GA46jhD5FqXHmC7BSL48PF%2FsN2EwKlcItRgn38n%2B0UEkm272b%2FVEtkonrFXzBBgS5w0Lzk3JGBw527am%2FBw8BjvY4v2PRGX5u48qnnhcfIc%2F04pFfclDWl4z4EnlDUm2HiYvAMIwuM%2FNERRqI%2Fw3RGLyYrEc2ML%2BLfBfI5P%2BTJvYOw%2BbJr94dHeRP082MzRl4zGfKyGGDAtlfMi1vwwxcWzlePDrkHiMuoxRzCUyf05K2tGpoBJN7CtByUuxMQS39VBRGD5OCjYVlCo%2FcxH%2BVfSS5R0zk3ZgRr0Tnt2dAFFdAltNv8jI2LlqbIDcw7mrIX4aQ2%2FB465vmqHnADCb5sHKBjqkAXpo2XdMABkMzz577tJQxB8YOv1wwW3Z7F%2F6TOh4G2Znac9mGC8dLFXCPOWyqLBk9FkDvDTRdWkHM6NA4a7vhqhpYeqHLi2xleEdDgW8wBI3fnNzOiR9kpROIVLtA8AFFUIgYICBENK7NrRsDS5AlEW9ivWZDAdrOTq2aUg%2F1txAkZ0ucrG%2FWptO2o1bYbbRBn7VIVzvxx2UdX3twNUGLN1pshRW&X-Amz-Signature=a1f79d5e47d6fdb06e3d2db41de702a9b3e9e09bee2a3838ce13bcac2b3e7258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJE46O7%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRji2Q%2BWp5bV0m71HCs8RD%2FvvANxvuQDOOFN8WZn2yYQIhALFaxJCnw1w1igJYl0N1b1EC%2Fqfm96yyylyxZFo9tTfPKv8DCHkQABoMNjM3NDIzMTgzODA1Igw7OnS5vKO28fZi2wMq3AP9lDwyIKcyY4xggKX6UhQdcQ%2BD8Ow0Nvr%2FPFAU%2Fwl%2BseeLtnMEJm6x4yFFJAmMuRc7MD1pe2iymqSnrNHly9wcwL2Ne02idsZ%2B72IksxmznrmmIQCU1us0M3qzZ8FkVe%2BTrsz8NfBkir5QavgcVTvN9OaqPA9KcKctosJXLoMuQo1NM1ZSKveVxeWt5P7inFBBDLEvTyy0m4d8Wju2rLkK5ZzX4M6a0n2sVFvunurXpPSwgIm7iEbdxK0PXSWfuR243zbgeqluLH6ByNMpkSzhH7CIDnocDhbuaiUKJpG4GA46jhD5FqXHmC7BSL48PF%2FsN2EwKlcItRgn38n%2B0UEkm272b%2FVEtkonrFXzBBgS5w0Lzk3JGBw527am%2FBw8BjvY4v2PRGX5u48qnnhcfIc%2F04pFfclDWl4z4EnlDUm2HiYvAMIwuM%2FNERRqI%2Fw3RGLyYrEc2ML%2BLfBfI5P%2BTJvYOw%2BbJr94dHeRP082MzRl4zGfKyGGDAtlfMi1vwwxcWzlePDrkHiMuoxRzCUyf05K2tGpoBJN7CtByUuxMQS39VBRGD5OCjYVlCo%2FcxH%2BVfSS5R0zk3ZgRr0Tnt2dAFFdAltNv8jI2LlqbIDcw7mrIX4aQ2%2FB465vmqHnADCb5sHKBjqkAXpo2XdMABkMzz577tJQxB8YOv1wwW3Z7F%2F6TOh4G2Znac9mGC8dLFXCPOWyqLBk9FkDvDTRdWkHM6NA4a7vhqhpYeqHLi2xleEdDgW8wBI3fnNzOiR9kpROIVLtA8AFFUIgYICBENK7NrRsDS5AlEW9ivWZDAdrOTq2aUg%2F1txAkZ0ucrG%2FWptO2o1bYbbRBn7VIVzvxx2UdX3twNUGLN1pshRW&X-Amz-Signature=b999e3ed2bf944d6153f090e3aa300d53654f40172022180d253da4503a5f639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDEZRKW%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkhKf6yhnS8HC2oo7wkv8hk%2BZ8qOsaU3g96kVcpG7WbwIgB8VHdSYOUubZgvDz5LS0qxqQ15DrVL%2FbHd3HpmNtrCoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPVXt%2FtHh%2BBcpPaNHircAw%2FyBnBsFiARgg3J5Ld5vNAxrYPbmOwa2NJaTDwriFly5JKR5QalzX7Mldpt9Zp5WrL3ej4oNZbodIkRz2odu4QVE%2FbYlvrtWbZKV52pzKvVY77CvA18mqxSyUIsMLJ9cv9hZQAQswiHZ9U%2BdXm%2Bpmaqg%2FIu4Kznjb7Z9Zj06AzwLUK%2FiITbYU321PAHt1NngCgf%2F8%2B99HRn4wiM8%2BXbMcgGAoqdUd1UX7ZOXyRdXnsIrQ2dd9s9weumSKcrg9KTcsAOHxupUae9oiok%2Ff7jEn3hlS4fgTmtvzljQVIp58rbsKxv3y6TgvAqJZ8KJZ9BI%2B0Dup6NdEe2AIYdiZZiix4IJWXHEdneQMRL7sz5ZR9Twe3ocELUS82Tpq209JJOXVeGl2unGccffxwjUnmuPj8%2ByFDkhjEddplDJZt%2BslY2EE8HXhJiJzwSSfZACS%2BTD%2BoVEYyVMnIdJ39eSx9kxk1AZpTcXqeutq%2BRsiQZPe1JyK9VjxWJ%2BhabLE44NpT8TXbeRRv4M6r%2BIgCF5eQiRZ4IYf36EKu9aRsu%2B2XTj%2B%2B%2F4umCKCe3x8MvqnogrvP6PVtEz5EKYchX%2FOJN6k16seB10e8YmXc%2BchNNKuNXggGlZb%2FCclpsPRlug524MMvdwcoGOqUBObQ3CvWQ901%2BrjsYrCCfvnDXfE0%2FDRrr21bL%2F3pPxRNqu7kGl9d%2B2sTWYrnTgEf4nacN8ZTEw3PG%2BefX8EE0oyGHgpTxr%2BIByqlJFUELzPvo8%2FJQFQO1Sr3BRofXvjr8c6TyLLnRWL%2Fe12EwxId1iCLOpjlMn8%2FibnRxIs1PtgI34a1Y%2BpBWH7lA4aYi%2FPyic4TXPvvZxX9Gyrr7QLSO4qI2qnlj&X-Amz-Signature=aa1fa0af6333c65a3a51548f128aba11f26522e7b3642f772c84b2fae0874ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UC24KFY%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6qUFylVmWcILsIn0RvJ33CnmBVqyZD21ToS5WS1rmNQIhAI280PwUUxg36t70GQGrDA1YnIFw82FLWxL0ZsXfIXXFKv8DCHkQABoMNjM3NDIzMTgzODA1IgxXlX7a%2FpXKFdUM088q3AMH2V0YlLFgOVP5iIqRK4JQgK2N7vKRmMYUTSPtr%2BZmS7ZChe4q3svY04Dfy2zKzGzxoSkLBMa09MhQlZSwlPtNMX4FsfqGq4SstKJKpm0rfCzqwTO4a%2B617rRx2MskCE1jaF8%2F4wny1xY%2BCpkb4F4pr4JSCYJgfbL8Ip0PJ2EXhD4Kal%2FTXDUDLnmV5LsDMwtzYY%2FHtxitRv7iZ%2BLSABQCMZ%2BA%2FGRYVB%2FktPqvD2sjBKAxlSR70Llxmfn5lkn0sSCYyPYUzRjEO06YxT%2Bpsc6GO%2FJwJ0cMkngeyjWETnFRHqEmvjfTUY0QVgt%2BPMIir7Ecv0I6vpVnybfCeYTqfCLjy%2FQRaweipMEj6ubS9PFBjqGae1oj4ZDIxeZV52GMnvgUGLLAX%2B97aMMnt08IdGb4GpbKPYcO%2FmFJvgLbtE2ug9YuuyevEueJ4kzZKC%2F1LTQx%2BpxU9AI%2BoEDaZY%2Bhu1CPymhH8SFfNbpIuvU2fVb3E8X4eMG6kqRdF4Vn2GH3Qq9PkxsEJZrqoGH6153twwVUb%2Fw5Ic1xkVmnqxEC1gw%2B%2FOHxH1iyXFaa66lpzyzSh3YLor9zg1HVMfSVut8ZvZ7meX%2BdEhkjzx6hf%2BVXTErh5g%2Fn%2FzD6%2B5JNkExL5jCw68HKBjqkAa0YcJ2vwtrnhp6pDDqlQSp3VcdySyXOMmg6ugNRp6N7qsbDzs6RygDPTuy4VNJLZ9oSRJmJo4kpx8Vv%2BXAAACqIbEwRBjHBZKv9lu31FTEw%2BRl0zM5HpvjpkWw18o5UJEKoIaRHlhZDyhkKibTnqXukDStjiqWENPmXnQuc%2F6aKrVQgJwxDclrRaT8uEpNTc0Oaqs98upcDBK7j9JSbTjwR2L6C&X-Amz-Signature=fd3cc4463bbbb24d564bb43e702e59f13070702aabcacdac4ddd121cb4cbe0d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJE46O7%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRji2Q%2BWp5bV0m71HCs8RD%2FvvANxvuQDOOFN8WZn2yYQIhALFaxJCnw1w1igJYl0N1b1EC%2Fqfm96yyylyxZFo9tTfPKv8DCHkQABoMNjM3NDIzMTgzODA1Igw7OnS5vKO28fZi2wMq3AP9lDwyIKcyY4xggKX6UhQdcQ%2BD8Ow0Nvr%2FPFAU%2Fwl%2BseeLtnMEJm6x4yFFJAmMuRc7MD1pe2iymqSnrNHly9wcwL2Ne02idsZ%2B72IksxmznrmmIQCU1us0M3qzZ8FkVe%2BTrsz8NfBkir5QavgcVTvN9OaqPA9KcKctosJXLoMuQo1NM1ZSKveVxeWt5P7inFBBDLEvTyy0m4d8Wju2rLkK5ZzX4M6a0n2sVFvunurXpPSwgIm7iEbdxK0PXSWfuR243zbgeqluLH6ByNMpkSzhH7CIDnocDhbuaiUKJpG4GA46jhD5FqXHmC7BSL48PF%2FsN2EwKlcItRgn38n%2B0UEkm272b%2FVEtkonrFXzBBgS5w0Lzk3JGBw527am%2FBw8BjvY4v2PRGX5u48qnnhcfIc%2F04pFfclDWl4z4EnlDUm2HiYvAMIwuM%2FNERRqI%2Fw3RGLyYrEc2ML%2BLfBfI5P%2BTJvYOw%2BbJr94dHeRP082MzRl4zGfKyGGDAtlfMi1vwwxcWzlePDrkHiMuoxRzCUyf05K2tGpoBJN7CtByUuxMQS39VBRGD5OCjYVlCo%2FcxH%2BVfSS5R0zk3ZgRr0Tnt2dAFFdAltNv8jI2LlqbIDcw7mrIX4aQ2%2FB465vmqHnADCb5sHKBjqkAXpo2XdMABkMzz577tJQxB8YOv1wwW3Z7F%2F6TOh4G2Znac9mGC8dLFXCPOWyqLBk9FkDvDTRdWkHM6NA4a7vhqhpYeqHLi2xleEdDgW8wBI3fnNzOiR9kpROIVLtA8AFFUIgYICBENK7NrRsDS5AlEW9ivWZDAdrOTq2aUg%2F1txAkZ0ucrG%2FWptO2o1bYbbRBn7VIVzvxx2UdX3twNUGLN1pshRW&X-Amz-Signature=818919aa59a26186032b94673d12c3a5e92095cd3f735fdf92c44e9d1b631203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
