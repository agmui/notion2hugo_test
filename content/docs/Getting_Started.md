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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKVY3TB%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBcHTBjVtOEmfPzB3%2BHhKuOh4iZw846GCb%2BUl7Aj2Ao0AiEAsSj8c%2F%2BhL75exBCKgtFKzs5ejrZtSgSFgBJZsTijVqIqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVmbu16hudNkxBApCrcAwBt52hi42Lwc%2BkiytO0QgnPWNGGq5q2N4gfucP6A1x%2F%2FgnZh60hwbHZIZiEAHihOF0RGohYEdquCg2RR6xQCoLtbSLOXfE7v62q7NvcIi2Yj0tXRTvkUC2nHOVIwjCT9GHBRG8%2FOnxi57gaIApTIrhMH0AkQDMPCdKoWyH5odsvJkJb709ZRSSWvG5nyALsvcuCYUo2epns8RwWKbQ4Qpsu7k3P%2F16qZA6F2aun1cIgssZmdeE5qRFbnchARjaqlAzbwhkpAnfhT%2F7khipzUxA8wTllLYrhDQWHeFGBJ7dM9%2BeoMvud0XUoKuhLpxIrCRpKeCOcXa2M6tq5XdieKCQaBWnxVn%2FQcTVmbLtEQOgOw8lpBmPg2hPD4kmyN422%2FmkfaPcIWKVy7Z2lnidAoOYBecca3r4wDtmgkkHoTQpQMONrs%2BvnJhog60xPqOomkVbSe5GthHblae0O1K%2BbMmkYwNUimK3SDxJG2VsF5Pk1PXHGL8PhRJAOVACRVGpVSAWo%2BG1%2BJGF%2Byh8pJdoV8AsA%2BfdQxnq%2F0y3StMxiV3Jt8XKByrqOzmrVyMJ1h3let46LMmhyRlWoZLCkp1%2F1Ls0Vc0N87a6DfrQiUbCHPg8FYMktnFPpkoUchu5UMIy52MAGOqUBDfKr0skWwO%2FsgVG7ToUphCJcpD7Wek7txFbbBqTmEpNkn93Q3jnC8vzmzLSsv8xy2G9m0jgDOax9T%2Bmmfv3CWKOQ4XmK1TyFfNoI8anQhSrOlajnnCfWC1fkro7ZBRS2vCSydLfHvbUCV0EEpTOnquIiU2Rbg7cn4NO4iNDkyefKq65TsD2MgNwhtbCWVEKLnS4GIpwOHjt5kCQESrr2Pi1cLw7Q&X-Amz-Signature=049f60401deebe5721ae450d96bd31dc60d01dbbafe206b51ce81b0a669cec29&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKVY3TB%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBcHTBjVtOEmfPzB3%2BHhKuOh4iZw846GCb%2BUl7Aj2Ao0AiEAsSj8c%2F%2BhL75exBCKgtFKzs5ejrZtSgSFgBJZsTijVqIqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVmbu16hudNkxBApCrcAwBt52hi42Lwc%2BkiytO0QgnPWNGGq5q2N4gfucP6A1x%2F%2FgnZh60hwbHZIZiEAHihOF0RGohYEdquCg2RR6xQCoLtbSLOXfE7v62q7NvcIi2Yj0tXRTvkUC2nHOVIwjCT9GHBRG8%2FOnxi57gaIApTIrhMH0AkQDMPCdKoWyH5odsvJkJb709ZRSSWvG5nyALsvcuCYUo2epns8RwWKbQ4Qpsu7k3P%2F16qZA6F2aun1cIgssZmdeE5qRFbnchARjaqlAzbwhkpAnfhT%2F7khipzUxA8wTllLYrhDQWHeFGBJ7dM9%2BeoMvud0XUoKuhLpxIrCRpKeCOcXa2M6tq5XdieKCQaBWnxVn%2FQcTVmbLtEQOgOw8lpBmPg2hPD4kmyN422%2FmkfaPcIWKVy7Z2lnidAoOYBecca3r4wDtmgkkHoTQpQMONrs%2BvnJhog60xPqOomkVbSe5GthHblae0O1K%2BbMmkYwNUimK3SDxJG2VsF5Pk1PXHGL8PhRJAOVACRVGpVSAWo%2BG1%2BJGF%2Byh8pJdoV8AsA%2BfdQxnq%2F0y3StMxiV3Jt8XKByrqOzmrVyMJ1h3let46LMmhyRlWoZLCkp1%2F1Ls0Vc0N87a6DfrQiUbCHPg8FYMktnFPpkoUchu5UMIy52MAGOqUBDfKr0skWwO%2FsgVG7ToUphCJcpD7Wek7txFbbBqTmEpNkn93Q3jnC8vzmzLSsv8xy2G9m0jgDOax9T%2Bmmfv3CWKOQ4XmK1TyFfNoI8anQhSrOlajnnCfWC1fkro7ZBRS2vCSydLfHvbUCV0EEpTOnquIiU2Rbg7cn4NO4iNDkyefKq65TsD2MgNwhtbCWVEKLnS4GIpwOHjt5kCQESrr2Pi1cLw7Q&X-Amz-Signature=d03a58ff2b1de4c02321d2a10207b4d9ccdd01d7c240266d3392ddabfefeb55b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKVY3TB%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBcHTBjVtOEmfPzB3%2BHhKuOh4iZw846GCb%2BUl7Aj2Ao0AiEAsSj8c%2F%2BhL75exBCKgtFKzs5ejrZtSgSFgBJZsTijVqIqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVmbu16hudNkxBApCrcAwBt52hi42Lwc%2BkiytO0QgnPWNGGq5q2N4gfucP6A1x%2F%2FgnZh60hwbHZIZiEAHihOF0RGohYEdquCg2RR6xQCoLtbSLOXfE7v62q7NvcIi2Yj0tXRTvkUC2nHOVIwjCT9GHBRG8%2FOnxi57gaIApTIrhMH0AkQDMPCdKoWyH5odsvJkJb709ZRSSWvG5nyALsvcuCYUo2epns8RwWKbQ4Qpsu7k3P%2F16qZA6F2aun1cIgssZmdeE5qRFbnchARjaqlAzbwhkpAnfhT%2F7khipzUxA8wTllLYrhDQWHeFGBJ7dM9%2BeoMvud0XUoKuhLpxIrCRpKeCOcXa2M6tq5XdieKCQaBWnxVn%2FQcTVmbLtEQOgOw8lpBmPg2hPD4kmyN422%2FmkfaPcIWKVy7Z2lnidAoOYBecca3r4wDtmgkkHoTQpQMONrs%2BvnJhog60xPqOomkVbSe5GthHblae0O1K%2BbMmkYwNUimK3SDxJG2VsF5Pk1PXHGL8PhRJAOVACRVGpVSAWo%2BG1%2BJGF%2Byh8pJdoV8AsA%2BfdQxnq%2F0y3StMxiV3Jt8XKByrqOzmrVyMJ1h3let46LMmhyRlWoZLCkp1%2F1Ls0Vc0N87a6DfrQiUbCHPg8FYMktnFPpkoUchu5UMIy52MAGOqUBDfKr0skWwO%2FsgVG7ToUphCJcpD7Wek7txFbbBqTmEpNkn93Q3jnC8vzmzLSsv8xy2G9m0jgDOax9T%2Bmmfv3CWKOQ4XmK1TyFfNoI8anQhSrOlajnnCfWC1fkro7ZBRS2vCSydLfHvbUCV0EEpTOnquIiU2Rbg7cn4NO4iNDkyefKq65TsD2MgNwhtbCWVEKLnS4GIpwOHjt5kCQESrr2Pi1cLw7Q&X-Amz-Signature=9db0fc21c554ec4c510790f7fc27789a3f43c7325b4204e53db1afa173ee6c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSTVKMOP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDT64D%2Fz59ZOap%2BqCOrHDUrIXYGaqudL7rvJ3TpOZ8qkgIhAOfXKL3i2lVqxKV7riRL%2FDI0iVwFm%2FUU51Gq%2F1ImqDA4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz52nAg7abOj9k29%2F8q3ANBTsSO95%2BJojlVajanPpjY8j18OphgRWj%2FBWHWXDD3GlhSixMCVfsdGr55vks3Ouq61FFTPFNniAqmWEehU5DEh7EzWE7sSAUHfrUjZIOlSjyYCLKUPr0gmDIHdO%2FCeqmVyqE4D5WBtGMZKloL0MPHT8v0Wpez6TJGOfzyUo0yn9c7A0w7Vp%2F62XEED%2FkWNUl6v39iNynJTMQomfxhIEA9hoE7zCtlCVnxN%2FJSZPzyMayTCSK2fNg1qYOJWhqtn01hyD0X1I1K6Q9SFnIZUxK3KVhey4745ZhmQ8CcPR5IQ4PKnifWq%2FQqR%2BrQbEFgYEHXZRqawlQcwOrs%2BDrbNDlJofyqpId9uUCcMeJA5rwuKjkEGlJg3YW%2FAb7emprN5TXtZJYfIoU5mgLSidsl9R4Php%2FXCueK5FXFmXB8jgVaxOf0uJji%2Fd9WZTvXAwWKqKlrzJakpt%2By3HYnkQoS9mxMMHU%2BVidIB4kM0FL0Qw4YHxWes%2FLekzF2tLfdI%2F7nBRvm6L7I46%2Fya5YbZHOB5ruteqNYXK3QtfNtCH69ki5YAYdZ2Tgj%2FblD2HB0iZeTDXxzFAnK5wzM94kZrrOzNNlVCpbPz2etWdV3OTKSEfxKZSYBfKhDmgOdVGQeUzD73tfABjqkAVElRcKoT%2F6HNb%2Bfqv4fsv%2Fjtxn0lJ%2FgVLnS0rko%2Fh7GzWhJvaDQsYjpRQQDKcku66r5t4SUiM0oj%2FjCq1Ja%2BBCtq4QiRLha%2FncJsbvG%2B0CY9xaqdJPF%2FpS833AWheIgnRHWnTbuJS%2B7FzfXjN%2F8d6Gwe%2BOaWNvymNYlVRvB9Znx3Kh13ucm1Q1qbU6mqjHtMdHOL%2B1t7iLaAOsQatYqZFnX1ixk&X-Amz-Signature=075b6e570fc1a54d2b1e044e04d0a45f88e34391180a5db0332d2266da15b748&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF6D2GTF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHIAcLQdklASTUPBWzxeyOxtEa1KfF58V1avwxztHNA1AiB985z0SdFThLl3ZlDVeF1s%2FFiux9LLkYrwmq5lY5XM6iqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV5bsz3m1HCYurIppKtwDieTs59HbWuPPc0nNsX7RkLchMm8CufHL%2BmTfuy0qqW7MObuhxzYafTQHxl3hE%2FgKXH8G1e0J%2BFKvSJTfZzI5f1JZNrtaWk5jYB5%2FqVcbFiwv35i%2Fh5KSEYNaStBlRMPoAeJm1ljZkgEqraYXadu7yNpaiGPq29pNIoblmOx6TP2IeffSa8zHstulqb1f7XqHk0yA%2Br4FAIA5jnTtXCqsO5UEat6sF3HxopBwffcMJzqLBKssm%2BbRkQhI36nBNHatHaiTx3Lg%2Fo%2B%2BtEAXr6Wp4%2FomqR0HJbLKEAZm%2B%2FPQTnUlO10ZWkkR7laHYQzcBJywQog98Vzg3iwtlXauntooVuviCAjjn0AE%2BszYZCZm6V%2FDj0Oh2tuXPSzzY4GFKPLDdV4mwwMK7FGEv%2Ft6BjzeQQZjR9rbH1w7kP0Le%2FQTBZLeRvr7ZKhXSq4%2BfLCY0SNCX19D2ORTvmHB6ZDWE6n2NR3N3M2HH%2BVcfturDhQPnkmO8T%2FuJaY4ZgFb2uUBmiHjGYwsdHkNjdh8hCYidmDpYeUiV1rOm%2F5gxWp8wlEKe9FE2oXIhaxbq5xQnB9JS6UaMIrkPI8HpXXvGmeLLkL4mNdpT28AMy%2Bm0V7R5FQ%2B0DodMPkTYHbW7PYfDXYw%2Bd7XwAY6pgFYtDOgSk5g%2F7drfYNKH%2BKH9NaiKuc%2FxU%2Fvwu12NTPmVrE61RqxuOj0TOUhJSoBNUUgemcrhX%2FK%2FtgVsOdezJ27ueRZogTB4buKxAPd0h%2F7zrkQtkC92YxKD1ozuLvv14QtC1iIJ%2F5oHs5BZ9n1AscNdz3Ei0RS3v7ZXyGUlQmA9JunhPAaGBxKsKTMB91NMSJecf2Gue8aJvYBfre4oqHVpOwIKR2P&X-Amz-Signature=97a8bffe4463d4c9554c4652405b5ab0209c217709279a88e59f8b6617d89a26&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKVY3TB%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBcHTBjVtOEmfPzB3%2BHhKuOh4iZw846GCb%2BUl7Aj2Ao0AiEAsSj8c%2F%2BhL75exBCKgtFKzs5ejrZtSgSFgBJZsTijVqIqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVmbu16hudNkxBApCrcAwBt52hi42Lwc%2BkiytO0QgnPWNGGq5q2N4gfucP6A1x%2F%2FgnZh60hwbHZIZiEAHihOF0RGohYEdquCg2RR6xQCoLtbSLOXfE7v62q7NvcIi2Yj0tXRTvkUC2nHOVIwjCT9GHBRG8%2FOnxi57gaIApTIrhMH0AkQDMPCdKoWyH5odsvJkJb709ZRSSWvG5nyALsvcuCYUo2epns8RwWKbQ4Qpsu7k3P%2F16qZA6F2aun1cIgssZmdeE5qRFbnchARjaqlAzbwhkpAnfhT%2F7khipzUxA8wTllLYrhDQWHeFGBJ7dM9%2BeoMvud0XUoKuhLpxIrCRpKeCOcXa2M6tq5XdieKCQaBWnxVn%2FQcTVmbLtEQOgOw8lpBmPg2hPD4kmyN422%2FmkfaPcIWKVy7Z2lnidAoOYBecca3r4wDtmgkkHoTQpQMONrs%2BvnJhog60xPqOomkVbSe5GthHblae0O1K%2BbMmkYwNUimK3SDxJG2VsF5Pk1PXHGL8PhRJAOVACRVGpVSAWo%2BG1%2BJGF%2Byh8pJdoV8AsA%2BfdQxnq%2F0y3StMxiV3Jt8XKByrqOzmrVyMJ1h3let46LMmhyRlWoZLCkp1%2F1Ls0Vc0N87a6DfrQiUbCHPg8FYMktnFPpkoUchu5UMIy52MAGOqUBDfKr0skWwO%2FsgVG7ToUphCJcpD7Wek7txFbbBqTmEpNkn93Q3jnC8vzmzLSsv8xy2G9m0jgDOax9T%2Bmmfv3CWKOQ4XmK1TyFfNoI8anQhSrOlajnnCfWC1fkro7ZBRS2vCSydLfHvbUCV0EEpTOnquIiU2Rbg7cn4NO4iNDkyefKq65TsD2MgNwhtbCWVEKLnS4GIpwOHjt5kCQESrr2Pi1cLw7Q&X-Amz-Signature=7318251d57343c0b005c1326a4971fb94613050058d6f3541ad57a90b0d75d73&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
