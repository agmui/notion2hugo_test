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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKOC2HO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2XAMzLAoYnd3Gc9BKrXlElmPPYRTYuEXUNXBhOWK8zAIhANXMsxVxc3wd7KQIx5Hig%2BwWv6F3eeUA0kowhMA%2BWlVmKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAKDgZjvxBe93W6Lcq3APdyxY1CEXVC21lN%2FOnAeEM1VinVNM4LTJ2ha75Df168723zPeLXN%2BhBFS6ugcAcgG2HUVdCrYcklx5kZWQQt0%2Fhh2ITIM5QUyMrMrjDq0M9w%2FdC5dUAQUKHZIPITvVd2DoWIqZhrqaCPhB8N06FKU8e5NUCc4YSSd2mvKDGZzucstbgxG67o7yC6owzzYWjh%2BB%2FBs%2BehVZ%2BMNeDojcG8tnS%2FJa%2FeBAvRo%2FSN7IBdB43Aqc4tEER3JBRi6gy7pICr%2Bt0N5PGbDYHypM4K0y1%2Bs0YnZ7wcs5%2B5dHTe6OSx3qY8pCxXanq4eHV1XLPlud1BgGoQxw0eTLKU3L2vDykF9c%2FGkismUXC3UoJcg5XDycGtx46lCChVMeYFeA0sIDHg3%2FdNVhVJkZST5mItEeQ0IMNu%2FElqBEkcEnD577nyRwH92OLfDQZELR7Mg3c29ny2aAg3UkpjzNGn4CmUKnYJQz2k4q5ewNsTY7R1SCY08S0AlVt%2BzEvORQV39uoQQrSv%2FIesfMl35AZyZESmZIOp7bcD62DJB1ZZfvTRL7oMVGFIL6LkhE5xNPfbKfrGdvPpObv9k1gG0q5SWqXQ7Efg0v%2BynHO3lAICnluzip79ObJw2T745l0MdG%2BjECijDRxJDDBjqkAdl8jieDyt%2BFgzvqR0uoRc8UubxMxbB88yBswmZc8xWJg2mvtlhrNSpHkBV%2BKzGbKOptvXn62Mx%2BacVwonTFIKAjWzELvoZa4dQDyuuRFmeKfc6hR1BWQq69EPROvhQyGfybkA9FWn7aMaXoTMOekAu4%2F%2F1SgtcUe8JyL4kScJQdtMA0AmPPFIKG21ugtHOLpbbhrUF33s%2BIuVKQoNcRbqLGB6Dk&X-Amz-Signature=0b117b2819c4765c88fbbe19a78728b1839dfe159adda3d694a9718d08e92460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKOC2HO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2XAMzLAoYnd3Gc9BKrXlElmPPYRTYuEXUNXBhOWK8zAIhANXMsxVxc3wd7KQIx5Hig%2BwWv6F3eeUA0kowhMA%2BWlVmKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAKDgZjvxBe93W6Lcq3APdyxY1CEXVC21lN%2FOnAeEM1VinVNM4LTJ2ha75Df168723zPeLXN%2BhBFS6ugcAcgG2HUVdCrYcklx5kZWQQt0%2Fhh2ITIM5QUyMrMrjDq0M9w%2FdC5dUAQUKHZIPITvVd2DoWIqZhrqaCPhB8N06FKU8e5NUCc4YSSd2mvKDGZzucstbgxG67o7yC6owzzYWjh%2BB%2FBs%2BehVZ%2BMNeDojcG8tnS%2FJa%2FeBAvRo%2FSN7IBdB43Aqc4tEER3JBRi6gy7pICr%2Bt0N5PGbDYHypM4K0y1%2Bs0YnZ7wcs5%2B5dHTe6OSx3qY8pCxXanq4eHV1XLPlud1BgGoQxw0eTLKU3L2vDykF9c%2FGkismUXC3UoJcg5XDycGtx46lCChVMeYFeA0sIDHg3%2FdNVhVJkZST5mItEeQ0IMNu%2FElqBEkcEnD577nyRwH92OLfDQZELR7Mg3c29ny2aAg3UkpjzNGn4CmUKnYJQz2k4q5ewNsTY7R1SCY08S0AlVt%2BzEvORQV39uoQQrSv%2FIesfMl35AZyZESmZIOp7bcD62DJB1ZZfvTRL7oMVGFIL6LkhE5xNPfbKfrGdvPpObv9k1gG0q5SWqXQ7Efg0v%2BynHO3lAICnluzip79ObJw2T745l0MdG%2BjECijDRxJDDBjqkAdl8jieDyt%2BFgzvqR0uoRc8UubxMxbB88yBswmZc8xWJg2mvtlhrNSpHkBV%2BKzGbKOptvXn62Mx%2BacVwonTFIKAjWzELvoZa4dQDyuuRFmeKfc6hR1BWQq69EPROvhQyGfybkA9FWn7aMaXoTMOekAu4%2F%2F1SgtcUe8JyL4kScJQdtMA0AmPPFIKG21ugtHOLpbbhrUF33s%2BIuVKQoNcRbqLGB6Dk&X-Amz-Signature=94bdd75213655408c6cfa9121c5590727fb75b33cd5e0c91de7e46216d0ddb37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKOC2HO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2XAMzLAoYnd3Gc9BKrXlElmPPYRTYuEXUNXBhOWK8zAIhANXMsxVxc3wd7KQIx5Hig%2BwWv6F3eeUA0kowhMA%2BWlVmKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAKDgZjvxBe93W6Lcq3APdyxY1CEXVC21lN%2FOnAeEM1VinVNM4LTJ2ha75Df168723zPeLXN%2BhBFS6ugcAcgG2HUVdCrYcklx5kZWQQt0%2Fhh2ITIM5QUyMrMrjDq0M9w%2FdC5dUAQUKHZIPITvVd2DoWIqZhrqaCPhB8N06FKU8e5NUCc4YSSd2mvKDGZzucstbgxG67o7yC6owzzYWjh%2BB%2FBs%2BehVZ%2BMNeDojcG8tnS%2FJa%2FeBAvRo%2FSN7IBdB43Aqc4tEER3JBRi6gy7pICr%2Bt0N5PGbDYHypM4K0y1%2Bs0YnZ7wcs5%2B5dHTe6OSx3qY8pCxXanq4eHV1XLPlud1BgGoQxw0eTLKU3L2vDykF9c%2FGkismUXC3UoJcg5XDycGtx46lCChVMeYFeA0sIDHg3%2FdNVhVJkZST5mItEeQ0IMNu%2FElqBEkcEnD577nyRwH92OLfDQZELR7Mg3c29ny2aAg3UkpjzNGn4CmUKnYJQz2k4q5ewNsTY7R1SCY08S0AlVt%2BzEvORQV39uoQQrSv%2FIesfMl35AZyZESmZIOp7bcD62DJB1ZZfvTRL7oMVGFIL6LkhE5xNPfbKfrGdvPpObv9k1gG0q5SWqXQ7Efg0v%2BynHO3lAICnluzip79ObJw2T745l0MdG%2BjECijDRxJDDBjqkAdl8jieDyt%2BFgzvqR0uoRc8UubxMxbB88yBswmZc8xWJg2mvtlhrNSpHkBV%2BKzGbKOptvXn62Mx%2BacVwonTFIKAjWzELvoZa4dQDyuuRFmeKfc6hR1BWQq69EPROvhQyGfybkA9FWn7aMaXoTMOekAu4%2F%2F1SgtcUe8JyL4kScJQdtMA0AmPPFIKG21ugtHOLpbbhrUF33s%2BIuVKQoNcRbqLGB6Dk&X-Amz-Signature=54b9d0ff9ce55a8783ca2240de698308d7144cdfcbfae8a6393b43afbaf7ed5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQ3R6ZS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpF7KNWjWAIt0Lp%2BSPY8f%2B8QlZVCS9C09rGw1rM6L%2FMAiB8Bs6AXMO07O54ExrI4M2B4wh98QoPtiQJpQO9efffqSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFd5f%2FP%2F40lAzi8%2B%2FKtwD0Ji4qZiKt2mdTBaI1wywWR2ayq8xv0kDNVQlsJ7htIqZ19sg1UUC%2FgyDQNxrTeFH02%2B68%2F5cg46hoEkarWsbLtl%2BoGyLRbIJ%2FS9AhN828WGWTHXRMCVSZkRIvHgAunDlDALkVTqC9QxCxGBtA1yFaVtqWH0y0LGiv8GW6my0UPJztuVgoc9ohj4PoMsTpOvQB1O1ZLftAqLESz2o0sErl%2F4aOrPusz0MXKgOv02sRi80clOwTh8sRfxFDjvH3Ib13DdAnU3k5kpzfP4lIwlxcHJ%2FdBV5P4Ze%2FQ7baSMg6hiGHxMZuJ7bKRNHdcXVFIa%2BbhQ8Jjw4oXBQlqNpqYFCYPDQepdx8C8BSGsQgNlLgh0X%2ByQK1Ayz1T4LM3Ux5%2B%2BbVeOyTQ2Md%2BYJFcnxn3fvRZvZKmpO7blZbVHkRYcjvtiDYBWpXlbNK86dio3pFU5EGXTchnutSUSMtF1xI%2BnRrY4e4vCS4uVNF%2B592z8N4O8PUrC7xgb0g24cXdyFCd%2BIcD1CtnlkMynJQz1rpGkFsbosrb4exyb%2B8269ouZxHMW0eAl9Z7zLyu14tkwfdBP9NXXuVpV9N9fZRTOcw%2BiHDLuklr8Vooarj%2F%2BgYRuBlKPJ7WxPexwlp60gHWQwjMWQwwY6pgFjhwarfYx4GSiz3vCTTFpfagA%2Fk7cq4vUav%2FMJo6oWacfCZIDdeCowu%2Fnfq55GHYQXUquPuIHrMuAlGzBF9NBhNmObDauUpizYMrhuPqoP%2F7M0d%2FDWhol0oTwDV9HU7zlcUB79N9a9mNt6HSV%2BLHzJ%2F5cz%2BK6qGJFq1a%2BIPVMSnMwiDPjgC6kJSE9ibswUH4WgTtqHq%2Fqy%2FeVy2Bg1SJVgFaokEKYP&X-Amz-Signature=e84736b53f5fe246a1b7af9a71b470bcc7e5ca0ef8cf79062f0e2777d6a338bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJKDHSIS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbhU4793Zn3IgHB%2BjASjg9f9n0JJZJ7M9b5iZX3cU1MAiEAtIh8ERBRUgxqajyylJJ175B3UgEEnRoQlUYZGNfarOcqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FMuGB6nLKftAd6HSrcA3zz4cRYQvxGy77ZawEo%2BlmSyVxul3wIHpLq7qFSmdcLhDQgF28W70E9Otl4JoSHlXUrcbPbXt%2FdFLw%2FSRhyeJeR9if0UNAM7ePsMvcdlotvrM8ZX%2BaQP1dkE14%2F7Si%2FsS9aQotDcTeW8Y0GGRx10j6l9aiyzLCIugxWLsI%2F75wGDQ6rnPpAit%2BfgAP0neimctwQbX08OWQoJ6A5rqVQcDWJJNZBAOXTgydK3BQS9%2BlnAZJwCopJMTfa%2Bcp7CWLbbGGDk6UgdO9jdXFwM3Jkk74gM5j666j3XvQIiSDtzHnJ9p7NCsRfTWnib4UU51LmkuyirJHhJAlmtDYstKR5LC7zGSrLVEQmd9aa8C4s2grnL3LQAdRjp%2FgL2VAWW2sNxozax07HvBU56%2B2R4iGQ78AteTnpM%2BEKyVoMmup5nmZAEOOxJ9E3QI3DhOOerawFQ0jl4YGeqOxfqYzu%2Fi5RENuyLdwQyCvxJtNXfv8UMubc0e%2F63Yx5TSQkbcmKrmNln6hmWogwKtIBQsPWuLNTpWigPdWcMF4yImvfAusz0HH4VLcVw7NfVHUsc8j20P0CLyZ6jk3eLGYIrWlTFYxf6UpcynSmhI3s2l63rNr%2Bji39CmiG4Ks54nb%2BEWh3MNHEkMMGOqUBZChjT%2FRXwcpe7%2FiDvc%2BUIKqZ3jEDQ20mPYOQY7yR9TdUmp19g7xYSdCGrWlKaDmgdk443VCWs56cNLABCq2vMrQrBjJEufYeGIh4R49EUY7E2tNJE3Ru4bqJNfR5v3Il10AIUyGPpdNA0KK1GnVPRq3ZrwmI25nBHrJ6NGy%2FNC51uvXPMdI3o8STYeOGRSvTGFmfVXiXIiHeWUxESZAD7Ybmc2zf&X-Amz-Signature=8faf40e22073668f40c6da9def443357250b19434f0c486e155f5fae0d989dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKOC2HO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2XAMzLAoYnd3Gc9BKrXlElmPPYRTYuEXUNXBhOWK8zAIhANXMsxVxc3wd7KQIx5Hig%2BwWv6F3eeUA0kowhMA%2BWlVmKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAKDgZjvxBe93W6Lcq3APdyxY1CEXVC21lN%2FOnAeEM1VinVNM4LTJ2ha75Df168723zPeLXN%2BhBFS6ugcAcgG2HUVdCrYcklx5kZWQQt0%2Fhh2ITIM5QUyMrMrjDq0M9w%2FdC5dUAQUKHZIPITvVd2DoWIqZhrqaCPhB8N06FKU8e5NUCc4YSSd2mvKDGZzucstbgxG67o7yC6owzzYWjh%2BB%2FBs%2BehVZ%2BMNeDojcG8tnS%2FJa%2FeBAvRo%2FSN7IBdB43Aqc4tEER3JBRi6gy7pICr%2Bt0N5PGbDYHypM4K0y1%2Bs0YnZ7wcs5%2B5dHTe6OSx3qY8pCxXanq4eHV1XLPlud1BgGoQxw0eTLKU3L2vDykF9c%2FGkismUXC3UoJcg5XDycGtx46lCChVMeYFeA0sIDHg3%2FdNVhVJkZST5mItEeQ0IMNu%2FElqBEkcEnD577nyRwH92OLfDQZELR7Mg3c29ny2aAg3UkpjzNGn4CmUKnYJQz2k4q5ewNsTY7R1SCY08S0AlVt%2BzEvORQV39uoQQrSv%2FIesfMl35AZyZESmZIOp7bcD62DJB1ZZfvTRL7oMVGFIL6LkhE5xNPfbKfrGdvPpObv9k1gG0q5SWqXQ7Efg0v%2BynHO3lAICnluzip79ObJw2T745l0MdG%2BjECijDRxJDDBjqkAdl8jieDyt%2BFgzvqR0uoRc8UubxMxbB88yBswmZc8xWJg2mvtlhrNSpHkBV%2BKzGbKOptvXn62Mx%2BacVwonTFIKAjWzELvoZa4dQDyuuRFmeKfc6hR1BWQq69EPROvhQyGfybkA9FWn7aMaXoTMOekAu4%2F%2F1SgtcUe8JyL4kScJQdtMA0AmPPFIKG21ugtHOLpbbhrUF33s%2BIuVKQoNcRbqLGB6Dk&X-Amz-Signature=11fc3acf76de19b9d7c73d759560f0a46b4764f1ff48d82f539b15e94db18c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
