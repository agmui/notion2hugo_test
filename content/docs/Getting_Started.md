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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAUGN32%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIWaWxDbgsgFRnQFq%2BIol0WptoPvwuj3KE7czJ%2BffMawIgBoILI9aV47fHmhNVncSU7lFgc8KA2R2DH7G%2FBe%2FDWuMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNVra7pLe11WrzBWzircAzSOsMbkZFykaZ1PkB%2FkqISxJA%2FhmcnseklPG0LykWmHGAatwTBtPnb2CNxERolrpJ6M5bxNMjrmuE%2BupaVI46ctZfjWV%2FWEZ09EeHg9K0mXT4Ugr%2FYiVyR5hMj0FfkQM0GxnywDBUqOOxTL4Me2aj36mQMFHyRj6fGdf3XXmEZDKFgKE2OMvK%2FoyMgbfSfYWtbVOcMLRr3IHJc5MoEwPeC5si7j0ckoKLpuNG8pVyPrzxPLdjFitCEUastNHppZAGbZUhPMNRgcu4MXIdzUGY7V%2B%2BwlzR2n0KNuFrTMOTsiiNrcTxS73fYee1MB7DAbdMvNHwuZnlkvkycaPf8S4dI3P8OBwzCt70kya8vTKPod52%2BrflwWIgRgK%2BltaH8OH9IW5me8ZZtb5meEB8BcWvKf8Ej%2BpkN1JrUjR6cYEtmaLCagoY1N4aUXPa1%2Bkcq6gpY3J6fOAKIX1GrIbvuyDlxY2%2FMOzJye%2BB7BznR3GERaKt4vgT62Oh2c5N7sONRkVFiw6UeOUQx5H49VdBGJNu1qmhOcZVozYaCiadwWaQzesC0FaBCfGjSkNteEdM2BLN4shQyexy5W0ppT0SOMOQBQoPxW9SUl%2FKNQGYnqYTt795o%2BDC191sN6RI7eMJSjpcEGOqUBGyCcvVufopGCJSge671my9vPUF4sgT%2FYsgO8D4CIpMIL7vQTit8ia35wW3oCnKeywOqWq0KWlTKHei6lnwoVCT3kxL9rButkwvgrQCcKs1NnRpJLsNixhvZ%2B2IhRKXlkw2HlahbbsoHPFmm2tR7KDzgY93KxV8P1UrgMHJA0OWx72NFumt%2BL4Ir9NOwJ8hkPb2ctc3YE4rFJOUWpZVwGugtKniB5&X-Amz-Signature=c9ada0dc944c3e2bbc2f13a92bb946bc7b1fe082e9dd4da2fdb398bd38f6e570&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAUGN32%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIWaWxDbgsgFRnQFq%2BIol0WptoPvwuj3KE7czJ%2BffMawIgBoILI9aV47fHmhNVncSU7lFgc8KA2R2DH7G%2FBe%2FDWuMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNVra7pLe11WrzBWzircAzSOsMbkZFykaZ1PkB%2FkqISxJA%2FhmcnseklPG0LykWmHGAatwTBtPnb2CNxERolrpJ6M5bxNMjrmuE%2BupaVI46ctZfjWV%2FWEZ09EeHg9K0mXT4Ugr%2FYiVyR5hMj0FfkQM0GxnywDBUqOOxTL4Me2aj36mQMFHyRj6fGdf3XXmEZDKFgKE2OMvK%2FoyMgbfSfYWtbVOcMLRr3IHJc5MoEwPeC5si7j0ckoKLpuNG8pVyPrzxPLdjFitCEUastNHppZAGbZUhPMNRgcu4MXIdzUGY7V%2B%2BwlzR2n0KNuFrTMOTsiiNrcTxS73fYee1MB7DAbdMvNHwuZnlkvkycaPf8S4dI3P8OBwzCt70kya8vTKPod52%2BrflwWIgRgK%2BltaH8OH9IW5me8ZZtb5meEB8BcWvKf8Ej%2BpkN1JrUjR6cYEtmaLCagoY1N4aUXPa1%2Bkcq6gpY3J6fOAKIX1GrIbvuyDlxY2%2FMOzJye%2BB7BznR3GERaKt4vgT62Oh2c5N7sONRkVFiw6UeOUQx5H49VdBGJNu1qmhOcZVozYaCiadwWaQzesC0FaBCfGjSkNteEdM2BLN4shQyexy5W0ppT0SOMOQBQoPxW9SUl%2FKNQGYnqYTt795o%2BDC191sN6RI7eMJSjpcEGOqUBGyCcvVufopGCJSge671my9vPUF4sgT%2FYsgO8D4CIpMIL7vQTit8ia35wW3oCnKeywOqWq0KWlTKHei6lnwoVCT3kxL9rButkwvgrQCcKs1NnRpJLsNixhvZ%2B2IhRKXlkw2HlahbbsoHPFmm2tR7KDzgY93KxV8P1UrgMHJA0OWx72NFumt%2BL4Ir9NOwJ8hkPb2ctc3YE4rFJOUWpZVwGugtKniB5&X-Amz-Signature=36d9b0c0e8bf3d6b9fa6765b73cef2cc4c7599a9b5a145f9da68b6846fb2a360&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAUGN32%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIWaWxDbgsgFRnQFq%2BIol0WptoPvwuj3KE7czJ%2BffMawIgBoILI9aV47fHmhNVncSU7lFgc8KA2R2DH7G%2FBe%2FDWuMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNVra7pLe11WrzBWzircAzSOsMbkZFykaZ1PkB%2FkqISxJA%2FhmcnseklPG0LykWmHGAatwTBtPnb2CNxERolrpJ6M5bxNMjrmuE%2BupaVI46ctZfjWV%2FWEZ09EeHg9K0mXT4Ugr%2FYiVyR5hMj0FfkQM0GxnywDBUqOOxTL4Me2aj36mQMFHyRj6fGdf3XXmEZDKFgKE2OMvK%2FoyMgbfSfYWtbVOcMLRr3IHJc5MoEwPeC5si7j0ckoKLpuNG8pVyPrzxPLdjFitCEUastNHppZAGbZUhPMNRgcu4MXIdzUGY7V%2B%2BwlzR2n0KNuFrTMOTsiiNrcTxS73fYee1MB7DAbdMvNHwuZnlkvkycaPf8S4dI3P8OBwzCt70kya8vTKPod52%2BrflwWIgRgK%2BltaH8OH9IW5me8ZZtb5meEB8BcWvKf8Ej%2BpkN1JrUjR6cYEtmaLCagoY1N4aUXPa1%2Bkcq6gpY3J6fOAKIX1GrIbvuyDlxY2%2FMOzJye%2BB7BznR3GERaKt4vgT62Oh2c5N7sONRkVFiw6UeOUQx5H49VdBGJNu1qmhOcZVozYaCiadwWaQzesC0FaBCfGjSkNteEdM2BLN4shQyexy5W0ppT0SOMOQBQoPxW9SUl%2FKNQGYnqYTt795o%2BDC191sN6RI7eMJSjpcEGOqUBGyCcvVufopGCJSge671my9vPUF4sgT%2FYsgO8D4CIpMIL7vQTit8ia35wW3oCnKeywOqWq0KWlTKHei6lnwoVCT3kxL9rButkwvgrQCcKs1NnRpJLsNixhvZ%2B2IhRKXlkw2HlahbbsoHPFmm2tR7KDzgY93KxV8P1UrgMHJA0OWx72NFumt%2BL4Ir9NOwJ8hkPb2ctc3YE4rFJOUWpZVwGugtKniB5&X-Amz-Signature=d697358136f80dc5fb3c5e5e9b7da7eda821acc188bdd373203a10f54c18b2b9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGRW7J7Y%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjtwE%2BTK14Q%2BSzovVOaASqV8ms454NEcuxVhslY5dCnAiEAw45Xz8UcObQFcxOSRQ6jhuyx3XB4Pxvk6QuIdSEBes8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDjOrRkARr%2Fk02kSSSrcA1f6RARJVTD2wGo7C9QpcrgHlHFb%2FHK9E3%2F%2FB3UEpLTKWqI%2BkJ1JH%2Fd3CTvbf%2BqXD2PkMHJ4t0lvj4KNRBidDBHdi%2B3H7Lq4sZivC9vjH47zaxgopG%2BXWIKQcnqZ3LceHPCP0gF%2BK164sNOZKRn%2B5St1phEE%2FMpwOsUQo3wb0%2F7ewvK7EFcXd7aWHfhd7un3FhW%2B74NNv9SRi2C79kiRfpZ6r97JSn7jrOJt6QdjHS9exsgAOYAnfckFfUcalnjLYVKzhKnUc9dGhDhaEz2hY7VYiObomhT0jT0YykttH5UygdhXpK2QcOgR7xJsq0rldcJpy8dE3zMYRMadwzQnx7LNWy3AtkHznG06R9r2iHIWIbchJUcHHZZPEQs4wHVnecmL57b%2F9DUQR%2BVYBtTBFUmYuAtnOzChPhDcLYnnJqJ21cnegFB2EzIfiRL7tC6R6DqlOcvuzUUbPbAahobgd7bQIVm9y7lGivU51cocIUgvvcsvBzZR8Lvg5fTSXJ12Krd5d8QTFO7w3nMxEx4Jnrb19s1ZVbDU%2Fia6ysxUCn1RGVpNYOULax%2FupkRUZFKcWTNquZjdUk2cN0Qym0i6SEKs7XJ8FnrGlKrii0B1qztN9MDsPreRi%2BJF8dRcMNWVpcEGOqUBqgc59ZqH4zEMC9IyD%2B1ByqZ8vYjGFgdWJOHOpfByM1kK9LVxOTX%2FWSMe4mqwQ3b5RcyJVkEKp8jDZmKA%2BWPuJLJFF2Rr%2F39jvCB%2FMETxp%2B4vRV%2BsAJyyV2v3DyO3GYCGoFUFUaPrqV7gmLgEtm5TxaCFcrzuPrFpDwUnXo5AMx2W3vcskH63imoaFfg810NoZ35ZMcAf%2FZJY3l9J%2BQ1Oa%2Fzl1ktH&X-Amz-Signature=b7b8edac4d60a2f9d2e0e1e9c153f062c9a6a42f628b3d7abfff83d25e34f14b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSC6ISE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7wx6ygS3YU3iavB%2BmNx09bVpoRCplnYh5yASc5wrRuAIgXSoLIRtxgTOLTuR7leZhPOTfEI%2B1y2s88399OGCUqNAq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFYeAODa%2Fo7TSk9P2yrcAzRBTUDrIFY%2BH2n80lORgIPGV6AmiXikM8Di1nmnizpsA0qEcY%2FoBI%2FEMHuV8T7fH8S2ZpMFe4ZUBiSHlA8%2FFrzPgxxta1DOf3Irbyws0SF%2FwCbwne60FuUQbdIX4Z1%2Bj%2BQngkGEkUy6MjJfw6TOo4jMd61UfjltAbpZt0eEONcenxeOOVkh9pr2mnCwnNwHJVUH4sEYeQs3z7W5iXvC3a5pFI38qb%2Fw1uzVaAtv6fqahhSRFaTmKipLBf4RCDeOyvnwIP3l%2B3jxt7yhfjK0jWC7F8Qi6tM%2FHgbOZJ%2BuXnS%2BCCF64pRdn2jx2QN2AecOm8e%2FUDgx%2F8bXyb%2FtoXmxE8rmTH%2BjYpfhnleEsyuKalcO9IvqFfyYbEBxzhehIjj6meXlKM2m1%2F3lF71jLnY19hVhP%2FhYkwWw%2BDnNDWqcYWQRy7fJK1ixoFqdykw1%2FTrlcII%2F8jzTWLVyQLZLolBqPqenWHZw2W%2F9u43EF6pFlpa%2FFnkONE55XWdijyO24vPyp00ILS%2FDcRMA7lOxfEotkL8Pqp2wv88Dv9snGorHff0K7Y7qIbGv%2BuefY0IoBG6%2BxtMuMlS0bM%2B%2FJtIEpiF0dlo2eCKz8LNL1wSHDOr4oGagOgOQWhpLnom5ni65MJ3fpMEGOqUB%2Bdcs0wPcvIY%2BUDAGKliWHumPPPnUb3ARhSuIh%2FUi2zTkse1LlDl36o7IFO8RJqqRUt0OKyuVdnMKXWMMLRJ2KmtcCsCGlFS4s1Q6CJrFIB8SEx5rlN4hwfOJM2B9%2BIp4VRgV1serkLSKKXU0suZ0FjMe%2FV5%2B5PVsHDxjYkbkullfvMnGzJE9JKe2lspznrEfkGZ9DCwYKw7vEYHdt%2FjOXR3ib%2FN7&X-Amz-Signature=019e511183dbbd2ebe359efc4d46060149ffeef8f7aee8a591ded1b34d3f9ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAUGN32%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIWaWxDbgsgFRnQFq%2BIol0WptoPvwuj3KE7czJ%2BffMawIgBoILI9aV47fHmhNVncSU7lFgc8KA2R2DH7G%2FBe%2FDWuMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNVra7pLe11WrzBWzircAzSOsMbkZFykaZ1PkB%2FkqISxJA%2FhmcnseklPG0LykWmHGAatwTBtPnb2CNxERolrpJ6M5bxNMjrmuE%2BupaVI46ctZfjWV%2FWEZ09EeHg9K0mXT4Ugr%2FYiVyR5hMj0FfkQM0GxnywDBUqOOxTL4Me2aj36mQMFHyRj6fGdf3XXmEZDKFgKE2OMvK%2FoyMgbfSfYWtbVOcMLRr3IHJc5MoEwPeC5si7j0ckoKLpuNG8pVyPrzxPLdjFitCEUastNHppZAGbZUhPMNRgcu4MXIdzUGY7V%2B%2BwlzR2n0KNuFrTMOTsiiNrcTxS73fYee1MB7DAbdMvNHwuZnlkvkycaPf8S4dI3P8OBwzCt70kya8vTKPod52%2BrflwWIgRgK%2BltaH8OH9IW5me8ZZtb5meEB8BcWvKf8Ej%2BpkN1JrUjR6cYEtmaLCagoY1N4aUXPa1%2Bkcq6gpY3J6fOAKIX1GrIbvuyDlxY2%2FMOzJye%2BB7BznR3GERaKt4vgT62Oh2c5N7sONRkVFiw6UeOUQx5H49VdBGJNu1qmhOcZVozYaCiadwWaQzesC0FaBCfGjSkNteEdM2BLN4shQyexy5W0ppT0SOMOQBQoPxW9SUl%2FKNQGYnqYTt795o%2BDC191sN6RI7eMJSjpcEGOqUBGyCcvVufopGCJSge671my9vPUF4sgT%2FYsgO8D4CIpMIL7vQTit8ia35wW3oCnKeywOqWq0KWlTKHei6lnwoVCT3kxL9rButkwvgrQCcKs1NnRpJLsNixhvZ%2B2IhRKXlkw2HlahbbsoHPFmm2tR7KDzgY93KxV8P1UrgMHJA0OWx72NFumt%2BL4Ir9NOwJ8hkPb2ctc3YE4rFJOUWpZVwGugtKniB5&X-Amz-Signature=f223dbf7d0302dbac8557da7a08845a72c6368eb9b948ff01b4a7f962bffcf96&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
