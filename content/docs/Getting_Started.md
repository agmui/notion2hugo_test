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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNR7UUFD%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDTJ%2BLDH4vd7jqFHfk9ACIYvav%2FvqkM8LNj51uuuFuT%2BQIhAPx08zIkf%2FQ910C4Qqavbxpho4TkH7%2Bk4fnloZt77UXpKv8DCC4QABoMNjM3NDIzMTgzODA1Igzi81T4jeJVG%2BKib6Aq3APNbudMroc4M4XFOPJrtA9VmQ0ohxW5aT1SPJDfu1%2BbkR5GBrPzRWH5kPRqnMZKt7Ny%2F5io4b%2FoxFez85g8rDzWE6a2ZXfU8zD5FveNnRueEklNIMMUStDw4jmOEILs9MPD2bWgp5Tx9j3Oi4N8uSinZag%2BCHQ93KgX2FhDKxS1iLlYBmWgVEJnUJ77E4UWydoDz%2BPluVSvJVzwO%2FJy%2Btq9SNZ3yUgS6Yd4J0hxp3H5AAqdhmxdAfqktdVy8%2B3AfDaLGwaT6sUCLTpbyqsNBvLLfrPtaTdTbTPCPWt2pbiMZ9yfzGZabivquIidAnQqEyMeXE8B7FeJgPkjTFg1yaO7cCt9YYmxftR9B4dTE2BCEX0h%2FdhL32NCHv9RcUN%2BuN9eY39TjzAvEZr1iGU%2FTLP4%2BXN5jBdbmgzOcXVO%2FMI80D25vdPpLi8w3HvcqVoZk%2FRZh9o0FCjyZ979GGNxwsK2VIBkyT1SYtW3nNp8Y8vbt%2FqpBlz70bcLttnpNzBybfcl%2BnNbgPNoNjdC89I8oDQ4ehk%2F77wlNbK%2F3Z4FTjbxBhiDhcJagB2dTbRUc%2B6JCQ%2F2xtKAVcDY%2FD3d9arj2rhcdqH9dFEobtc6dQIPRtwBPtWowQDHPDg1Ax8ujTC0n4i9BjqkAfqBZe9vbP%2Bvpy3djph9o8zFFpbTatCZrBSCnPq2AaBrcGajWBoLjiYqKpQnzYsnJGCZaAy3l9k9uAo9EfZRe7S9ouXXVmO1Rx6zufrcP3H84t162ek5INs1oVfTEkemULl3z%2Bi%2FOlGDcVgkchouBBjvcOW0JB4PeXxFF9I%2F%2FdJjmM7XegoNwJUDy0bObcFjHFcWfL6wRFkiFghlFsHff6afP3Uq&X-Amz-Signature=ffbea8d3b9767a4d227d73eb881bf1ba73948e8b4961207535e2abe04db7f46b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNR7UUFD%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDTJ%2BLDH4vd7jqFHfk9ACIYvav%2FvqkM8LNj51uuuFuT%2BQIhAPx08zIkf%2FQ910C4Qqavbxpho4TkH7%2Bk4fnloZt77UXpKv8DCC4QABoMNjM3NDIzMTgzODA1Igzi81T4jeJVG%2BKib6Aq3APNbudMroc4M4XFOPJrtA9VmQ0ohxW5aT1SPJDfu1%2BbkR5GBrPzRWH5kPRqnMZKt7Ny%2F5io4b%2FoxFez85g8rDzWE6a2ZXfU8zD5FveNnRueEklNIMMUStDw4jmOEILs9MPD2bWgp5Tx9j3Oi4N8uSinZag%2BCHQ93KgX2FhDKxS1iLlYBmWgVEJnUJ77E4UWydoDz%2BPluVSvJVzwO%2FJy%2Btq9SNZ3yUgS6Yd4J0hxp3H5AAqdhmxdAfqktdVy8%2B3AfDaLGwaT6sUCLTpbyqsNBvLLfrPtaTdTbTPCPWt2pbiMZ9yfzGZabivquIidAnQqEyMeXE8B7FeJgPkjTFg1yaO7cCt9YYmxftR9B4dTE2BCEX0h%2FdhL32NCHv9RcUN%2BuN9eY39TjzAvEZr1iGU%2FTLP4%2BXN5jBdbmgzOcXVO%2FMI80D25vdPpLi8w3HvcqVoZk%2FRZh9o0FCjyZ979GGNxwsK2VIBkyT1SYtW3nNp8Y8vbt%2FqpBlz70bcLttnpNzBybfcl%2BnNbgPNoNjdC89I8oDQ4ehk%2F77wlNbK%2F3Z4FTjbxBhiDhcJagB2dTbRUc%2B6JCQ%2F2xtKAVcDY%2FD3d9arj2rhcdqH9dFEobtc6dQIPRtwBPtWowQDHPDg1Ax8ujTC0n4i9BjqkAfqBZe9vbP%2Bvpy3djph9o8zFFpbTatCZrBSCnPq2AaBrcGajWBoLjiYqKpQnzYsnJGCZaAy3l9k9uAo9EfZRe7S9ouXXVmO1Rx6zufrcP3H84t162ek5INs1oVfTEkemULl3z%2Bi%2FOlGDcVgkchouBBjvcOW0JB4PeXxFF9I%2F%2FdJjmM7XegoNwJUDy0bObcFjHFcWfL6wRFkiFghlFsHff6afP3Uq&X-Amz-Signature=f55044d5135250c5d6999d14c490cb1f5d71f7c8ab33b1a93b324e24dc432afd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47YJZED%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGSs4LUvMfPZvSW%2BtTygdtPZZrd68DcpPfipa5%2FzUwNuAiBQRIlw9Vsngw97sl8OvXV2qLVF1S6Qp416S9hjGA8UuSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2BU8uNg8oKRxcAJfgKtwD039c2MRCHMS5a%2FDIC%2FlDEOrn5aDQsNsft9FBQYMMIHPTceifnBjbuOgwyjpp81lo43MXrect9wEelMAumu5fqCC%2FwL9afT1hgPY6sCQvjFYHByt%2F5l6bvwEryYm%2BsR82%2FmSda%2FMn3HqGGR%2Bd2I9lyil5pwRvzjsaVYw%2FBG67oXZXwHyf42T6J9dIEklpuOLfiMFKYH4FstgqddagT6%2B%2BovJr2AwpSBBmHziC61zA5lNwEHWvKIxgyzgO9DiMIXQ75l0idMkKa6E4jBT46KnHPdawQrwJtQGlW5xJnQx0ODxv4xzbmTDaTvohkwS5hYw5ibS6VWpzqOufY9vOiNgCUwsnsOHotflHWnNkqYB2%2BMj2Q8rHyKwVq1GYk%2B4GmtOiZwk8HUm7OIPrr%2BiXciIGDQ8xsDeloTIl3qW9CLgvSqPpa0r2b33kX1PS6euVJFqW7eLXpaJ29X2MU1iNXJNFXo6ZpBNLIOdp0EO9O4uOZnNp9z6nIqIwvted4ddztjwVxUd8AKQpJKRoVRyV0r6u5usEi0AHTeFVIK8SMzlIUvH7kJDFWmMaYEie9VGcyvx1hBh488SO4%2Bp11otK0zS098YG4CNDPlkhmimDwYsvzM%2FmRVPVxddcvQDoUpkwnp%2BIvQY6pgFQvFC5Uu8efp9Y8qrkgHdEQaMzyKgYPH1NclzvF%2FWR7iyWBw%2BeAv%2FNYqROJAW9z4LCaBfGMQtZhOp%2Fl4EJcLpjFp3fQNYfqZuQn6WjYO5nA872j%2Fmg319yWYQxf0tUhAnCloelQXCoF55tdHLYuedDvItjkXbFGZhtJx%2B2RvAZp7ihiozNzhRufRGyJv7CDsLNzjXQhYnQy%2F9HVF%2FTIPFUuU0PQCNV&X-Amz-Signature=c9538cc7a2230047984cb36c12c9431fa090a4cb212df2c092a05342eaafa6e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJVFVUM3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQClwY04p0l2bh%2B2fEXxJuYoGLfq6aFP6R6Ynes%2BQtgwZgIgBmt65kWtLA8dvpi1CZYt4C3v2Bed2mBPgrn05fPP%2BAMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJMxl5ZIzAHXQbGX9yrcA26MfQIDObg4Eo8Hybur%2Fa325kcOzAAslH%2BfwL2HVB2gOT0wzmPGvppJngFcsWiEW6UmPbd1dijKmiAael0GK5mXOr5Kc3w%2BBvAzxGe5g0o59WPhF6C9uHb63JJH7VXqyyyWE9QnarMM9APgXuFetNDZ4wC79oJfyykDnyvZC7OsizrFNU7axPa%2FfN7L8UOCBpm9gZtNA%2BX96q49gfQhfhKgJRaGdjrCISRCLhkzIjZtTNyDphhAKmp3L8U8AdTo%2FkPB6%2BFJ%2BjEF9CZDw55VRD8GfA%2BLm8jvAwJrccyYH35t6P45X9%2Br4uru9o3DbCnQsRKPZh%2FDaUUUyLFTn0XmPHAi7P3Icq1QiCnpzJUdPQcwwYW5Ew8ElUPGdHhJkTD1ciWc%2FltTq9rI1Z4LpVHKEGIi53V%2BI6BTgTa9D%2BQk2bTm0n7phChK1IDgVPhCn7MFQ1nGQhgcL2EhzUHJiSQfd3CZZRypsvpohQ1Bg%2BYD%2Bxrx3jrITivBh6z6RwjKY6C2jjDMu2dnI8K8RKkgv77lcZ%2F1kPKuiBYCnYUZmU1nWbOkM0Gw2L3POuynFRrY96%2FmlJzniWWhpZXfdOW4v2Y4oUc5s%2B1cQ4SXr28ndW8uPII5zHy76U3ye%2FYnNRViMPaeiL0GOqUBe2RMXknUgWhTTsP7A21AErAnbEmz2mJAVXqsO6JzhWUl4Ve2wywRHVSS1yKe3iKrDsTWM4rPFrp0mnyEL%2FRQ85uEZYPw8FJSeI%2FclcMNjBhema60qX1kEiEFX4HkdxG3rsPCADv%2BeYOcngW6pPag5yrfq2wLnMNHXfyr%2BUbu9%2BVusC%2BOG78WmZGp2wUTjZU0ao2C5SNn%2B7J86W%2FJUIwafdafPFAP&X-Amz-Signature=a5f055d9ddcd562f29e85302a5b90910e8c7e61129331a6f1f9ae3f2ceb53bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNR7UUFD%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDTJ%2BLDH4vd7jqFHfk9ACIYvav%2FvqkM8LNj51uuuFuT%2BQIhAPx08zIkf%2FQ910C4Qqavbxpho4TkH7%2Bk4fnloZt77UXpKv8DCC4QABoMNjM3NDIzMTgzODA1Igzi81T4jeJVG%2BKib6Aq3APNbudMroc4M4XFOPJrtA9VmQ0ohxW5aT1SPJDfu1%2BbkR5GBrPzRWH5kPRqnMZKt7Ny%2F5io4b%2FoxFez85g8rDzWE6a2ZXfU8zD5FveNnRueEklNIMMUStDw4jmOEILs9MPD2bWgp5Tx9j3Oi4N8uSinZag%2BCHQ93KgX2FhDKxS1iLlYBmWgVEJnUJ77E4UWydoDz%2BPluVSvJVzwO%2FJy%2Btq9SNZ3yUgS6Yd4J0hxp3H5AAqdhmxdAfqktdVy8%2B3AfDaLGwaT6sUCLTpbyqsNBvLLfrPtaTdTbTPCPWt2pbiMZ9yfzGZabivquIidAnQqEyMeXE8B7FeJgPkjTFg1yaO7cCt9YYmxftR9B4dTE2BCEX0h%2FdhL32NCHv9RcUN%2BuN9eY39TjzAvEZr1iGU%2FTLP4%2BXN5jBdbmgzOcXVO%2FMI80D25vdPpLi8w3HvcqVoZk%2FRZh9o0FCjyZ979GGNxwsK2VIBkyT1SYtW3nNp8Y8vbt%2FqpBlz70bcLttnpNzBybfcl%2BnNbgPNoNjdC89I8oDQ4ehk%2F77wlNbK%2F3Z4FTjbxBhiDhcJagB2dTbRUc%2B6JCQ%2F2xtKAVcDY%2FD3d9arj2rhcdqH9dFEobtc6dQIPRtwBPtWowQDHPDg1Ax8ujTC0n4i9BjqkAfqBZe9vbP%2Bvpy3djph9o8zFFpbTatCZrBSCnPq2AaBrcGajWBoLjiYqKpQnzYsnJGCZaAy3l9k9uAo9EfZRe7S9ouXXVmO1Rx6zufrcP3H84t162ek5INs1oVfTEkemULl3z%2Bi%2FOlGDcVgkchouBBjvcOW0JB4PeXxFF9I%2F%2FdJjmM7XegoNwJUDy0bObcFjHFcWfL6wRFkiFghlFsHff6afP3Uq&X-Amz-Signature=04ab79f0a23e61ab1d4eb7f249fcdf2c7f74bd67791c00d7f7c5c5dddfd8237e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
