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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KLMRDQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQC54bXNAlKspKYrrRS%2FleFORHrxqPDNTbUeBfUYergNgAIhAN5ZCEfBZu%2FXMXjiyyDB%2BavPWwmObW0ZlxVpH7xJxAiOKv8DCEcQABoMNjM3NDIzMTgzODA1IgzizQsqyI7%2BSmcapkoq3AM6j9rjtXHjpucYJkfXQpTut7S3rz3LUE1UwvmfGfGXuAYOZrtr2d%2BurFuQC11hm%2BEO%2B99BnRMjQgfnGFQOxAP3aVhNVHf%2BTBEbjs%2FXGPsJ5DqeQ1rxO4WCgkI8d3SHP03i6mvyb%2Fvgr0yV0ZdCrez3gpy%2Favj3AIcOYRyeq3SuymWNCFizRoqbhEQs0Nw6kWkPds%2FJddoekiOl58DSfWzA%2BykDQxzpkqYxSHT40kLLz610qI%2B8c03V4nbB%2F2l0LyazlofONM%2B25y248MUKZslneHk3hKrNrQVmOo%2F3CvD9BN2uo43biVzUyZsmqIcn2xJ76UtEx8zYDEY9lObeLViPWhg7FP2MmXYOw%2BNmISRPM5YhW9h84esSL5es0zz2tfsYCyHBjQNm2S1kHJ9Dqc3b53V4A1bzWag2aW%2BlwBKKypO5LkY4etqXbSmsrxJOnm08%2BDQAOAJohnRDpNW%2Fy4o68Jhlyb4BkZtZcKV82l8pkqAyKiX%2Bv2qX%2Fnd2rPj1SRzlRcO343pbgJdRNwr0L9WT5zins%2Bg2aDG46Wd99g1wGZj5RXq2QxoUrm2%2FXehab9Wzdvzw8F5a1BpUlmGbL2WL2ZH83CAUTxJitpukwnAhG52UOKbDEj8j2Ay76jDS06TDBjqkAUdR%2Fu86O6%2Fa0K8Hn%2BQLV%2FQQzQYb79A%2Fs%2FAcf8zUxlsHIKsvvmC6NwBt1pRbupuxayPfjL0lIOK9kLrxvKJDxm%2Br2k5Ae%2F9YVAJsGPhwBPjdTeIimvfKe24L8bYc32IYmMDOTmCmn3pEPLPdethRAqEgXGp8270vJ1RAjHBIC9pZyLwjunMxBjcBCTu410paiknPONtaOE%2Bf1L7BLWX%2BUjGKFSMC&X-Amz-Signature=5fb47cc2adb9ff51da0331f7a9004db89e83c388ab0d0645d6cf72b6ed621b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KLMRDQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQC54bXNAlKspKYrrRS%2FleFORHrxqPDNTbUeBfUYergNgAIhAN5ZCEfBZu%2FXMXjiyyDB%2BavPWwmObW0ZlxVpH7xJxAiOKv8DCEcQABoMNjM3NDIzMTgzODA1IgzizQsqyI7%2BSmcapkoq3AM6j9rjtXHjpucYJkfXQpTut7S3rz3LUE1UwvmfGfGXuAYOZrtr2d%2BurFuQC11hm%2BEO%2B99BnRMjQgfnGFQOxAP3aVhNVHf%2BTBEbjs%2FXGPsJ5DqeQ1rxO4WCgkI8d3SHP03i6mvyb%2Fvgr0yV0ZdCrez3gpy%2Favj3AIcOYRyeq3SuymWNCFizRoqbhEQs0Nw6kWkPds%2FJddoekiOl58DSfWzA%2BykDQxzpkqYxSHT40kLLz610qI%2B8c03V4nbB%2F2l0LyazlofONM%2B25y248MUKZslneHk3hKrNrQVmOo%2F3CvD9BN2uo43biVzUyZsmqIcn2xJ76UtEx8zYDEY9lObeLViPWhg7FP2MmXYOw%2BNmISRPM5YhW9h84esSL5es0zz2tfsYCyHBjQNm2S1kHJ9Dqc3b53V4A1bzWag2aW%2BlwBKKypO5LkY4etqXbSmsrxJOnm08%2BDQAOAJohnRDpNW%2Fy4o68Jhlyb4BkZtZcKV82l8pkqAyKiX%2Bv2qX%2Fnd2rPj1SRzlRcO343pbgJdRNwr0L9WT5zins%2Bg2aDG46Wd99g1wGZj5RXq2QxoUrm2%2FXehab9Wzdvzw8F5a1BpUlmGbL2WL2ZH83CAUTxJitpukwnAhG52UOKbDEj8j2Ay76jDS06TDBjqkAUdR%2Fu86O6%2Fa0K8Hn%2BQLV%2FQQzQYb79A%2Fs%2FAcf8zUxlsHIKsvvmC6NwBt1pRbupuxayPfjL0lIOK9kLrxvKJDxm%2Br2k5Ae%2F9YVAJsGPhwBPjdTeIimvfKe24L8bYc32IYmMDOTmCmn3pEPLPdethRAqEgXGp8270vJ1RAjHBIC9pZyLwjunMxBjcBCTu410paiknPONtaOE%2Bf1L7BLWX%2BUjGKFSMC&X-Amz-Signature=d41493873f905be96df9285820e6e10eb0ae0d8869bfa7eb22d8f64cd7264e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KLMRDQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQC54bXNAlKspKYrrRS%2FleFORHrxqPDNTbUeBfUYergNgAIhAN5ZCEfBZu%2FXMXjiyyDB%2BavPWwmObW0ZlxVpH7xJxAiOKv8DCEcQABoMNjM3NDIzMTgzODA1IgzizQsqyI7%2BSmcapkoq3AM6j9rjtXHjpucYJkfXQpTut7S3rz3LUE1UwvmfGfGXuAYOZrtr2d%2BurFuQC11hm%2BEO%2B99BnRMjQgfnGFQOxAP3aVhNVHf%2BTBEbjs%2FXGPsJ5DqeQ1rxO4WCgkI8d3SHP03i6mvyb%2Fvgr0yV0ZdCrez3gpy%2Favj3AIcOYRyeq3SuymWNCFizRoqbhEQs0Nw6kWkPds%2FJddoekiOl58DSfWzA%2BykDQxzpkqYxSHT40kLLz610qI%2B8c03V4nbB%2F2l0LyazlofONM%2B25y248MUKZslneHk3hKrNrQVmOo%2F3CvD9BN2uo43biVzUyZsmqIcn2xJ76UtEx8zYDEY9lObeLViPWhg7FP2MmXYOw%2BNmISRPM5YhW9h84esSL5es0zz2tfsYCyHBjQNm2S1kHJ9Dqc3b53V4A1bzWag2aW%2BlwBKKypO5LkY4etqXbSmsrxJOnm08%2BDQAOAJohnRDpNW%2Fy4o68Jhlyb4BkZtZcKV82l8pkqAyKiX%2Bv2qX%2Fnd2rPj1SRzlRcO343pbgJdRNwr0L9WT5zins%2Bg2aDG46Wd99g1wGZj5RXq2QxoUrm2%2FXehab9Wzdvzw8F5a1BpUlmGbL2WL2ZH83CAUTxJitpukwnAhG52UOKbDEj8j2Ay76jDS06TDBjqkAUdR%2Fu86O6%2Fa0K8Hn%2BQLV%2FQQzQYb79A%2Fs%2FAcf8zUxlsHIKsvvmC6NwBt1pRbupuxayPfjL0lIOK9kLrxvKJDxm%2Br2k5Ae%2F9YVAJsGPhwBPjdTeIimvfKe24L8bYc32IYmMDOTmCmn3pEPLPdethRAqEgXGp8270vJ1RAjHBIC9pZyLwjunMxBjcBCTu410paiknPONtaOE%2Bf1L7BLWX%2BUjGKFSMC&X-Amz-Signature=b856056231b3735e6c35be3f00ccb7c1bfeeb5e561b213e9db2c9da008ffe48b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZNOGHA3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIEGc37jrd5Z%2BcKpbsHb99Zq%2BXX2XHRuWcJ5a4FWOPjFhAiAc4BbaGhmgRpJ11xXU4DlAfqPmvISAevnPef4lX4eDlCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMOmO7DDH%2FrILEXtdXKtwD5AWUJ7Z9PewkQI6c5jphSmzzuhDMyrMmbjx3Gjo%2F2GLoORb7zSP71WbYiHnWmxXBL3KZShqGdAIZGs0JVhW8mRAXIFUETnv%2Ff5k%2FSOG3RXFePs4EfBWwJudGZoGcVPyvHyn0GqYS7HW7zo6Y4jIoYb3zcGZcxwRX2yjFCHsYe57J0PhRZ8xg23pvt1HIH1lB9nscdC1MxlKziq59zvbie%2BS01njcCU5kWKn%2B%2BbJNfPNApfR%2BNx0uQchvdzL9lnVOaAyyVn90zyylv0a1dA4tW6z2tWUMLriZkxkkeawO0mo%2FsmyAmg%2F9kD3Kob%2BmI3oFg7roJ8mQqfL3dzc3Hxbo5Z9%2B%2BV%2FAF5LJoZ8Y0f2v%2BAVe8BrO2pNxiomNpB30hCA0zJsX7VIefGqQiatjNwpc0HO%2FJPNs6UAKg%2BWaG1tYROP3gRXniheqYIo498bMoZgcJsioeHKvwCDa8mYxYxwe8Q%2BN%2Ft5szmI7lWlHZtznkOAS%2FmzaKZW9e7tldQmF6npOWtWCpuFm5QRZF4hpDR4uihd7CeYCwTtjbhyo%2BfBMDVWGzQcUARmC5gnfqVW6jYhnKlGLkTZ4%2Bg5FNA33u37i7URzx4OGQD7sOL1uv8QtNGZxRgFkIM%2FUCaBHv%2Bcwns%2BkwwY6pgFvpGSj9XuC%2F93p7ASdhD9AGnAnFtt8xVrztGpIYkZWMPIOVAFBovm1xILYLHQQUh9Udu0Jlb4F5GtScYK5gnfeHwUi8NX%2F2vIj4nJkxRatbCOBQKsfb1nQI%2BswGFtytlxcnaDp8qjpDyJV30VpkziUjJ9QIQvZUJ8YzPgiTNEzMJheYBE9pb5X7TUUQcOGl5uSvo7KfFzsVX6XIDP6B4lymP7YK%2F7D&X-Amz-Signature=1c8d1c4d1fab70099d57fcd9b5290e7334dbf843dff43398c96cf94c2dd1ef8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X4VPRS3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICUnjRxSpC88UHtCZBovOJK5ZP1e029ZfW4XyVkQ8%2FAiAiAqpVZuIVf6qWW68Rn3EfC87fEXMKiuKLQ%2BFJ4VwdbCvSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMb2VHCPue5j%2B0eKTLKtwD9WyI3TBi%2BZEemZxuVzu7XG2rtbh5eT2SDvJXIWqantGtWiWjofHB%2Bu3y%2B0HkYmYh9X4XuuLwioSiE8w6dqq0W2DzpvHBH1ln%2BQjGj0sl0pwbhwCCQbwEoRnaaB%2BdzrhwGyPrTxSFPqk%2BgSKXBfbzNcWcJuuK3wC3VCnrITLwv3Kn3XJuB7AHEUmQit9EAuTdfluDdOXh6r7cJk1%2FZOOH2BLwMGhSXtAsM%2F4RSbXXEWaCxmCcuiszoOLAy53g%2Bmv8SS1ezEqns%2FBmyF95hQz66btmij9K3d%2BA3mzO%2Fv9I8ax4DuwlBZUbAU1W15l3YnNHKsHNzNlxDZddO8otIidHrPxkxAHQKE4qgWj6xgdhTnkFwOVneEdujZveORjZf08aDQlIso5xwtxAjFiPfIusdJcrYgqiDJlnZbh799XAKCaOsOsWGSpZcWGFaJWEO6FmhyPswVCKPl13f68k1J8At%2BZzWzBb6k4HWKKmit8Tn23sKMM7u%2Bt0VA77JlGXeo8tqkUckBqjjLRRTJMzynjjp46%2Fy6QmfgABEql4EKY7YroYXURlZWloIOR6MM4MEw2yXtyXKHpLPgVLNppePwxcDWkprrV8tTxOXVTbXSSX%2FQu4%2BMXT0ZmMggQo1OIwqfijwwY6pgFIhbX%2BFQbwr5PVhEG63u96rb2qD%2Fut1sS8J0Lss%2FioPgjghoJKP3PVLPkqQTivcTfPmg%2BvOdBO960qW4OcgpkJcg7qYzTgrGDH%2BqM14OeUMFGLkQrmaKLRktd8ziD%2FT5Q8RRAF5HD4GaHU63AQHZYkUNpIQjALHN48VOIdIFD9auILhSz%2Bpn1DPN%2FglKLqiaSygpwHJaePi69qq9H5HSz6wSqCOVnm&X-Amz-Signature=5e6cfa3ead7186cd4017e8968a3a2792b8dab8d84fdd12ba67a8df5caebd756d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KLMRDQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQC54bXNAlKspKYrrRS%2FleFORHrxqPDNTbUeBfUYergNgAIhAN5ZCEfBZu%2FXMXjiyyDB%2BavPWwmObW0ZlxVpH7xJxAiOKv8DCEcQABoMNjM3NDIzMTgzODA1IgzizQsqyI7%2BSmcapkoq3AM6j9rjtXHjpucYJkfXQpTut7S3rz3LUE1UwvmfGfGXuAYOZrtr2d%2BurFuQC11hm%2BEO%2B99BnRMjQgfnGFQOxAP3aVhNVHf%2BTBEbjs%2FXGPsJ5DqeQ1rxO4WCgkI8d3SHP03i6mvyb%2Fvgr0yV0ZdCrez3gpy%2Favj3AIcOYRyeq3SuymWNCFizRoqbhEQs0Nw6kWkPds%2FJddoekiOl58DSfWzA%2BykDQxzpkqYxSHT40kLLz610qI%2B8c03V4nbB%2F2l0LyazlofONM%2B25y248MUKZslneHk3hKrNrQVmOo%2F3CvD9BN2uo43biVzUyZsmqIcn2xJ76UtEx8zYDEY9lObeLViPWhg7FP2MmXYOw%2BNmISRPM5YhW9h84esSL5es0zz2tfsYCyHBjQNm2S1kHJ9Dqc3b53V4A1bzWag2aW%2BlwBKKypO5LkY4etqXbSmsrxJOnm08%2BDQAOAJohnRDpNW%2Fy4o68Jhlyb4BkZtZcKV82l8pkqAyKiX%2Bv2qX%2Fnd2rPj1SRzlRcO343pbgJdRNwr0L9WT5zins%2Bg2aDG46Wd99g1wGZj5RXq2QxoUrm2%2FXehab9Wzdvzw8F5a1BpUlmGbL2WL2ZH83CAUTxJitpukwnAhG52UOKbDEj8j2Ay76jDS06TDBjqkAUdR%2Fu86O6%2Fa0K8Hn%2BQLV%2FQQzQYb79A%2Fs%2FAcf8zUxlsHIKsvvmC6NwBt1pRbupuxayPfjL0lIOK9kLrxvKJDxm%2Br2k5Ae%2F9YVAJsGPhwBPjdTeIimvfKe24L8bYc32IYmMDOTmCmn3pEPLPdethRAqEgXGp8270vJ1RAjHBIC9pZyLwjunMxBjcBCTu410paiknPONtaOE%2Bf1L7BLWX%2BUjGKFSMC&X-Amz-Signature=dfd39d4962c14ab9b60f371d63886027b11ae2686dcc267b5772ef20bb21e6b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
