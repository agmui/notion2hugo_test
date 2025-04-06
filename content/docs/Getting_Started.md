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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6IPTA7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcpxUeIsa1E3ZmNJ4Xcq9QItbg16pUTRpy8eDKS8wZqgIhAInxiNfiiRiz43hLWYMUfvEVFxvf1PR8bG5VDgvIxVDaKv8DCEIQABoMNjM3NDIzMTgzODA1IgyiPZ7mrs%2FALqze0BIq3AOO9evJ8n93dVGu18fWwqdY3BRScvjhf6VMovHDIhkI4AJNtgOUGcVUXkcoks1OZB5AqsthBhZw%2BGZdF7EKqIsUffPkOyWCjDQ2BguQnX1FPGGGiG8ODwAbntgZmKprRNSQF4yjKqxbZhlXENK89zHqhmUDxeYn1cRPADWp6QqAthog4cfSRCGDORiNuMev%2B3xmSaGSHNF5CV0qH%2BLz%2BBu3lYaid5VIB%2F1o1KuemyJykoaa16wgcG6cffHtNxlQ69ybWatQhQ99Ro40%2FlRiqIoP6CaSPguntt8%2Btv07iymU598PZF5ilct1POLHXEh%2BVbCyDZR6%2BBI%2F5a8vxS63%2FhlmjE6SkuWK%2FfOYlUw26zW2qV6O%2FEYZZIPaSL9111IklFjhPl6Xc1magyuV1m6uqVsQYxrfFv1Z51sS5dJg6TL85s7aY6x3Yleix7h9OWNAvELS1OoA77tyKxce9SL7tmgWzv5K4pr5SNsDqI8OIPRDrRxXfKMlGpXI66KC0UpyrS99M7iyuY8h3q1uBavrm2HxtWhckHHckg8mEOlincnCpwm7By4RVrSkiw3UA3%2Fw0gb9v8hJjz21DiL%2FMPAB965aqCOths%2ByuGc%2F%2F5uoFY4jxhjrblE4J2E3t%2BVEJDC3%2Fsi%2FBjqkASTl1nsr0R2EHn7LGrH369NAjeNfUS9%2FNyPIQTVLaXkhZq7mNKQ%2F7lPbh2%2FVpd5%2BJjA29excdOyiRrV7%2BTJi1HbKR71r0iy5NQ%2FM0Oqcivknyv1GLZnbRV8K58WS4hKg7HqD6KK0vDm65w4bCRdzpihXuaN5jB5amwjje6oDKGI%2Bo%2BiFG%2BYXBTsOdhTX8MJo1GTPeOGOL6%2FGamRkwYWSadzztVTI&X-Amz-Signature=3076c683464413ff4371c85b9300ae83590fdf5ca2cc65ec228525f47caa5700&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6IPTA7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcpxUeIsa1E3ZmNJ4Xcq9QItbg16pUTRpy8eDKS8wZqgIhAInxiNfiiRiz43hLWYMUfvEVFxvf1PR8bG5VDgvIxVDaKv8DCEIQABoMNjM3NDIzMTgzODA1IgyiPZ7mrs%2FALqze0BIq3AOO9evJ8n93dVGu18fWwqdY3BRScvjhf6VMovHDIhkI4AJNtgOUGcVUXkcoks1OZB5AqsthBhZw%2BGZdF7EKqIsUffPkOyWCjDQ2BguQnX1FPGGGiG8ODwAbntgZmKprRNSQF4yjKqxbZhlXENK89zHqhmUDxeYn1cRPADWp6QqAthog4cfSRCGDORiNuMev%2B3xmSaGSHNF5CV0qH%2BLz%2BBu3lYaid5VIB%2F1o1KuemyJykoaa16wgcG6cffHtNxlQ69ybWatQhQ99Ro40%2FlRiqIoP6CaSPguntt8%2Btv07iymU598PZF5ilct1POLHXEh%2BVbCyDZR6%2BBI%2F5a8vxS63%2FhlmjE6SkuWK%2FfOYlUw26zW2qV6O%2FEYZZIPaSL9111IklFjhPl6Xc1magyuV1m6uqVsQYxrfFv1Z51sS5dJg6TL85s7aY6x3Yleix7h9OWNAvELS1OoA77tyKxce9SL7tmgWzv5K4pr5SNsDqI8OIPRDrRxXfKMlGpXI66KC0UpyrS99M7iyuY8h3q1uBavrm2HxtWhckHHckg8mEOlincnCpwm7By4RVrSkiw3UA3%2Fw0gb9v8hJjz21DiL%2FMPAB965aqCOths%2ByuGc%2F%2F5uoFY4jxhjrblE4J2E3t%2BVEJDC3%2Fsi%2FBjqkASTl1nsr0R2EHn7LGrH369NAjeNfUS9%2FNyPIQTVLaXkhZq7mNKQ%2F7lPbh2%2FVpd5%2BJjA29excdOyiRrV7%2BTJi1HbKR71r0iy5NQ%2FM0Oqcivknyv1GLZnbRV8K58WS4hKg7HqD6KK0vDm65w4bCRdzpihXuaN5jB5amwjje6oDKGI%2Bo%2BiFG%2BYXBTsOdhTX8MJo1GTPeOGOL6%2FGamRkwYWSadzztVTI&X-Amz-Signature=5624d0d2b9ee497889da0d8844fd5ecf58f383cb4db73e55ae3627b3046d189e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SRAKTEO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQjtIm5xa56uixSsjp%2Bt5RMKWoxVPsXtyNeC4SwLbsxAiEAxPYUjLJa5wruJzHy1pZwfUoNXIBZfLeRcAiQPICCAjQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDP1CtczvQCuPZH%2Fr1SrcA8TU6Rbky1HNG2JPyQ66Duw5cYTjCoXlYuS9oj7zb%2BMB9acwNfWbDwSNMCR%2F4NbVDhdiJ98W1tvMVCm0%2Fk1C79dWShOdhjXw1u2QSSQcJcggFh3QNrFZBPQ7zzbYoSAAKQZ%2B2VKReyLDykRhEEVa7N5CTNUY70MzkK9YIvaADvZpg7A9IYkk73p4PorMegSt%2FNE4cPpB1Q5cy2nAsLW6%2BhUZOEXOJ5%2BJaGhSgikKIPpXbOJ7Itd1imADFDypHxh0Sm7laDfUFNxs0TodwzYz2P7w6sGcZaFFXjqqCvolqHjh%2BDPelzrTH23FfcNq2EQ%2FLu5k%2BR1LjU1M%2BxKTIDQR0yb1yp4Fs7q870g5IEOKRvUHljTl4cUY8JpgMS8uDJgbH4MBBlctPfrIpli69Qhhu7zIahk2LjwDghiYXJ%2FpREN381yjnuGETOvN18RYEOxyCflu1QJGVb9Xpzzm6ahXejpR34LWyFc0STRH%2FSZUjLVpx45JseEcP19iuLGhDA3Jn%2FGELf68Wzw%2FKVo8xnoWBJn%2FBjJhJPWYTnWo9lcHAmL%2FcgogRojObeOwST%2BzmwhWU3kLS%2FUwDd6DVMxTiJoE3tyUrH6yBZlWGSyQQG3V1cOvrzX9CaTZwblTZp7IMLD%2ByL8GOqUB%2FsJGkoWxHEzz5wmt6wnO0YNLGX8fSRb8hu4sUaUcqwCCO9zWeyLJV0oIwMWid1HDFmV4GhyKVrPyem1P%2FCyCCMgOizcOws7jZ1%2BlHJDQzXa%2BmlUgC6FQ5Q9iO50tmaHk4L8RowVdb2MXBUcDU5%2BEN%2B1FSVrzmclNtGu4CF88YIwg8iraZhKz0iYLXGNnbnoGvFEl3PbIHqFz6Ibt3L6faCtsuANc&X-Amz-Signature=17a7b89da8219153290787992f9b0f7ce60ecee1c0564cf34b42fa7c0ae936a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUDTICM%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVz3uPoEpQoWdjZi%2BqE9BAXxWKQfus7Iw4uSQs9scKgAIgVf5aUzURclKcy7dfDMTZ7zjiWMNKu9p1%2BDqMTl%2FOQ6Mq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKsIjy711ShEBKljZSrcAwsTtUlpjDXYryCusqAlfCrk%2BYCiZxJm0dvUhsIie%2BL5z5VxJ37Hqkl%2B4uuMsP3dk7%2FM%2Bg5tj8z31Fwqd9m%2BGrz%2FzJxo80K3SvR7CPzl5fBomMfCFT9CQa56CYLOQLIB%2BBnlW33OITTaXIrgM%2FrNJVuMWXuqRaDKmofzZokDkx%2FyRLAcIL9GQ457SLYfqtJ4HYiSBggBZP%2BzGruABSt%2BTvYEur6rxflYiT%2B5%2BHtRiXs7pKizay7Yh5wD%2F2mauUvvamlMYubbJ0tX91%2F4sUGohSchS%2BlxbXVYAsA9sCUVChhxIdWo1XnA11JcBsLN7BKoxNDN6jWLAFUJ17YmLvlu4qFfidZs63XKw3G8E3QFV6fkdhvvWdb%2BYNKrXIn4sehvWr9arsqFJ1no%2BczBbik5eBYSzq9ZnOzGa089Lr0DBpE3UKhyOpOpf75RcjtcmxbwNvwi6taprKUoM3hM7iiEhjz%2FlRVweLBDnCawfYnAK4oClmhJXnNyKpl%2Fyev0r%2B1L4PnquUBmlIfXexNcjvchhozlMVxBRK9aeQkyfiVo9Tedlnyu%2F1khdT5EHJj4x1f9k0a9lvYRH3M%2Fylq4u4LTHwkhG2Qpj1dzOyZ8ODnpwVyPfNCy3iXQPUWAvmPRMJamyb8GOqUB2ExMAaS8GIjTQhNImsSnVam9Of2RTP7DDB0x5P5TYSihFynwUqzHgIbBSKfPddMz1LQF9%2FuRWOvvXvnM3jONfOyOUbw%2FAac%2Fg8fkBq03pZ%2FDj5AC6tLCu2uOSpQXxkmPyH6NZYW6QE2bB%2BC5nh1%2BEjKYRKSxFAFPDJ8LrJSC2Tek3iT0tjJitqSrdxsCqY%2FeHNiOsaWIBKcdXaGEJBvU1NislhFi&X-Amz-Signature=ea95fb16ef07615933ea576ae19ee7b4f97c01b9d7c6594bc2563911bc88ba82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6IPTA7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcpxUeIsa1E3ZmNJ4Xcq9QItbg16pUTRpy8eDKS8wZqgIhAInxiNfiiRiz43hLWYMUfvEVFxvf1PR8bG5VDgvIxVDaKv8DCEIQABoMNjM3NDIzMTgzODA1IgyiPZ7mrs%2FALqze0BIq3AOO9evJ8n93dVGu18fWwqdY3BRScvjhf6VMovHDIhkI4AJNtgOUGcVUXkcoks1OZB5AqsthBhZw%2BGZdF7EKqIsUffPkOyWCjDQ2BguQnX1FPGGGiG8ODwAbntgZmKprRNSQF4yjKqxbZhlXENK89zHqhmUDxeYn1cRPADWp6QqAthog4cfSRCGDORiNuMev%2B3xmSaGSHNF5CV0qH%2BLz%2BBu3lYaid5VIB%2F1o1KuemyJykoaa16wgcG6cffHtNxlQ69ybWatQhQ99Ro40%2FlRiqIoP6CaSPguntt8%2Btv07iymU598PZF5ilct1POLHXEh%2BVbCyDZR6%2BBI%2F5a8vxS63%2FhlmjE6SkuWK%2FfOYlUw26zW2qV6O%2FEYZZIPaSL9111IklFjhPl6Xc1magyuV1m6uqVsQYxrfFv1Z51sS5dJg6TL85s7aY6x3Yleix7h9OWNAvELS1OoA77tyKxce9SL7tmgWzv5K4pr5SNsDqI8OIPRDrRxXfKMlGpXI66KC0UpyrS99M7iyuY8h3q1uBavrm2HxtWhckHHckg8mEOlincnCpwm7By4RVrSkiw3UA3%2Fw0gb9v8hJjz21DiL%2FMPAB965aqCOths%2ByuGc%2F%2F5uoFY4jxhjrblE4J2E3t%2BVEJDC3%2Fsi%2FBjqkASTl1nsr0R2EHn7LGrH369NAjeNfUS9%2FNyPIQTVLaXkhZq7mNKQ%2F7lPbh2%2FVpd5%2BJjA29excdOyiRrV7%2BTJi1HbKR71r0iy5NQ%2FM0Oqcivknyv1GLZnbRV8K58WS4hKg7HqD6KK0vDm65w4bCRdzpihXuaN5jB5amwjje6oDKGI%2Bo%2BiFG%2BYXBTsOdhTX8MJo1GTPeOGOL6%2FGamRkwYWSadzztVTI&X-Amz-Signature=2e18b84d2f3ce29670c42c262f467ee8c426ce56ec7167b49c608798efc4faf9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
