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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPYON6HE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIs3wsJ1MqVyzJ2kWc64Ng7bUo%2BTpvWtEKLf4xGbpDmAIgVFIE5XXrRv703IcuT%2F66DWv%2BPWGHBW44goFuPz9HoKkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP31HQwpEBAdF%2BEOSrcA57iCP%2BktvwUiM5jIJyYActala5uVGBxHFce4S43Nz4hZhqT3hA9qYFlYuBYPQPQgURxdLji931yFTBRGqMjvRqSJ7yqj%2FViPdYGzYkNeBL5phl6nKIXp6cLl9rVWrtDfWLS%2Fqs4mxhZ1ponYITXqHjicUAmuBC1B9eRxUzsaLCQmF6KD96%2FvXM%2FZTodhz03kIlyN4zrZt5aMIoEamhmWYDIyqMC0gawatkZwYjI3tjWQ1eqeyweTPpIZkpJ95QcSeVQozXYtLg5NRfCR5KRhwsoaNavRd9mYiouoWMB05xUK8bCw5znWguA7HAEZfW4slsYXopUJLa%2Fr%2Bnog9Co1ylazcNRI%2FKPizRHrAqoximmLeNSonSbCGLsGwlJqSxByzac%2B%2BOFequk1cOISiRZW3gfG3fay0frwTsa2dv8Frg8mOhGFl9f5jLRl5wgOs9SqB9%2BqIYJRTpuD%2BV%2BJu3IcH8s%2F%2FhqpWt%2BcPwJD4ofq0selha4EjtQ4%2FAQSpk8zbKQGa%2ByMu0yN6vRZUZsoqNg4gOCKWvLp2oe3EI4MNboO6QLNUEE0VZevubDZVzo%2Fa60AocnLrLJvYPSm%2FMeEHQ2rrqZwSWTb4jHcNuIVjDcPiY3WmBnjBDKzA%2FOG0ksMNPjr8EGOqUBT10M6auvqhDdmdNXjn1Kls8cWKcOAddbyS16s7gRRHLj%2F8D603Ti8xA5EmpmRfgVTFhL%2BLJmBuCF1ycCS6E3J3V8wgRDOTpyvTfM%2B%2BhdehBUEfuLUS8htnOb1sVfx%2FKixFSokJq46WAl%2B9OZa0kBaB9rnJb2fulUkEu12wSqg0OhL1PzCZGJ1WpXacSMRbU0r8pHJn77sIOPvFM2m15NnyriaZ0q&X-Amz-Signature=d09ba9ef051ad3a1aa6166387b2b4a1ac7a4cfb39e1c4d28c5157321fe9c8cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPYON6HE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIs3wsJ1MqVyzJ2kWc64Ng7bUo%2BTpvWtEKLf4xGbpDmAIgVFIE5XXrRv703IcuT%2F66DWv%2BPWGHBW44goFuPz9HoKkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP31HQwpEBAdF%2BEOSrcA57iCP%2BktvwUiM5jIJyYActala5uVGBxHFce4S43Nz4hZhqT3hA9qYFlYuBYPQPQgURxdLji931yFTBRGqMjvRqSJ7yqj%2FViPdYGzYkNeBL5phl6nKIXp6cLl9rVWrtDfWLS%2Fqs4mxhZ1ponYITXqHjicUAmuBC1B9eRxUzsaLCQmF6KD96%2FvXM%2FZTodhz03kIlyN4zrZt5aMIoEamhmWYDIyqMC0gawatkZwYjI3tjWQ1eqeyweTPpIZkpJ95QcSeVQozXYtLg5NRfCR5KRhwsoaNavRd9mYiouoWMB05xUK8bCw5znWguA7HAEZfW4slsYXopUJLa%2Fr%2Bnog9Co1ylazcNRI%2FKPizRHrAqoximmLeNSonSbCGLsGwlJqSxByzac%2B%2BOFequk1cOISiRZW3gfG3fay0frwTsa2dv8Frg8mOhGFl9f5jLRl5wgOs9SqB9%2BqIYJRTpuD%2BV%2BJu3IcH8s%2F%2FhqpWt%2BcPwJD4ofq0selha4EjtQ4%2FAQSpk8zbKQGa%2ByMu0yN6vRZUZsoqNg4gOCKWvLp2oe3EI4MNboO6QLNUEE0VZevubDZVzo%2Fa60AocnLrLJvYPSm%2FMeEHQ2rrqZwSWTb4jHcNuIVjDcPiY3WmBnjBDKzA%2FOG0ksMNPjr8EGOqUBT10M6auvqhDdmdNXjn1Kls8cWKcOAddbyS16s7gRRHLj%2F8D603Ti8xA5EmpmRfgVTFhL%2BLJmBuCF1ycCS6E3J3V8wgRDOTpyvTfM%2B%2BhdehBUEfuLUS8htnOb1sVfx%2FKixFSokJq46WAl%2B9OZa0kBaB9rnJb2fulUkEu12wSqg0OhL1PzCZGJ1WpXacSMRbU0r8pHJn77sIOPvFM2m15NnyriaZ0q&X-Amz-Signature=4f807cda29b17705a8061e7da79e740354ebf000d1eeb9c63e6543372c2e0a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPYON6HE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIs3wsJ1MqVyzJ2kWc64Ng7bUo%2BTpvWtEKLf4xGbpDmAIgVFIE5XXrRv703IcuT%2F66DWv%2BPWGHBW44goFuPz9HoKkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP31HQwpEBAdF%2BEOSrcA57iCP%2BktvwUiM5jIJyYActala5uVGBxHFce4S43Nz4hZhqT3hA9qYFlYuBYPQPQgURxdLji931yFTBRGqMjvRqSJ7yqj%2FViPdYGzYkNeBL5phl6nKIXp6cLl9rVWrtDfWLS%2Fqs4mxhZ1ponYITXqHjicUAmuBC1B9eRxUzsaLCQmF6KD96%2FvXM%2FZTodhz03kIlyN4zrZt5aMIoEamhmWYDIyqMC0gawatkZwYjI3tjWQ1eqeyweTPpIZkpJ95QcSeVQozXYtLg5NRfCR5KRhwsoaNavRd9mYiouoWMB05xUK8bCw5znWguA7HAEZfW4slsYXopUJLa%2Fr%2Bnog9Co1ylazcNRI%2FKPizRHrAqoximmLeNSonSbCGLsGwlJqSxByzac%2B%2BOFequk1cOISiRZW3gfG3fay0frwTsa2dv8Frg8mOhGFl9f5jLRl5wgOs9SqB9%2BqIYJRTpuD%2BV%2BJu3IcH8s%2F%2FhqpWt%2BcPwJD4ofq0selha4EjtQ4%2FAQSpk8zbKQGa%2ByMu0yN6vRZUZsoqNg4gOCKWvLp2oe3EI4MNboO6QLNUEE0VZevubDZVzo%2Fa60AocnLrLJvYPSm%2FMeEHQ2rrqZwSWTb4jHcNuIVjDcPiY3WmBnjBDKzA%2FOG0ksMNPjr8EGOqUBT10M6auvqhDdmdNXjn1Kls8cWKcOAddbyS16s7gRRHLj%2F8D603Ti8xA5EmpmRfgVTFhL%2BLJmBuCF1ycCS6E3J3V8wgRDOTpyvTfM%2B%2BhdehBUEfuLUS8htnOb1sVfx%2FKixFSokJq46WAl%2B9OZa0kBaB9rnJb2fulUkEu12wSqg0OhL1PzCZGJ1WpXacSMRbU0r8pHJn77sIOPvFM2m15NnyriaZ0q&X-Amz-Signature=d239249de49b0f162711b46ea61b7a8d340dcdec56e356ad4daafc97f0058198&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GG6TZ43%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUXcX%2Bg6sKw9PdE79qibTuxjZXzqQp2q%2BrR8UXTh9ufgIgB3J4szqi5wfJg6yMFcp4hpXNQNT4fgqHeFI05ZBCQMQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGG4UGVjzFQaIRYPqSrcA%2BI7nGqHQWA1dnGUPaz8gcrtlTutr5aREdvr4pV0brkJuUbd4hnteBVFVFSDS46KKF7XR8Y6x2RpxFkvOw5m6xWJnyQRTsOcbZMrgtf1mTYmWZbf2juw%2BJ9yO9Iq6N4SOdKOR16%2FJda7eM5lXsOAqINnC2P%2F51Q1joa9Etf%2FhP5pDQ%2F5c%2FvlPrYtgCRfoasaWMY0XdZRJVETColispMXlqkHdo7%2BWkOS1QmbRq2LQrFzLzFPwSeKYIKChA5gHxwvZjerLQoMPA%2F6NWppLP0vTiH78f9iu1Tb27Fv4ioLiGn1E%2BCf%2BcsWQ87SmMfcUZoLOBxM27OvES%2Breul008EH5Pbq0JF%2F3QIKz7YyomevPnJunPw0WAsJOCLnAt1L3eF7KipQ%2FCes%2FrBQUxvl3QIdAeqMpSdgKYABKKjtd8HH5r1fr3i12%2FqgqXrFO6Yc8Wuo2iljV2k5eeU%2BYT93yYU3f9mSHguEid6%2FBYKuqii26zOQWLe4LrJGHNfGihCVktrPZMF2ABYrPEYNzQWun038Gr%2FfgoszEhf4yatGUbAc4d0B8Ti7o8rYDq9oN3uXd1O%2FnHAyH7jxdvji1v%2F0WvJFoWchHnBnJVS44Y6zRw3L0XRj07TOdXVZB8TozUl%2BMLPir8EGOqUBBnW82puamLVWrUwKA%2BYGlvIxPqnSEBLqbbpQqBIqg78P%2BgYpAGNPsSiKJ29ncJZmTAWvArYye%2F3H2pHkjLl0XvesI6o3revNWoZSCDNlzdcJmOIxRmJIwVB1KaGFDD9R58PhaxL4y9WNzGYugGO5e5jqgvUHt0hyvmms9mPd5cVGQipGHTHafJQCquBohVeUH5crZKsCDyiuMBCDHaPyZL0XviSw&X-Amz-Signature=a87ce5cc133f3f9a8972543fcf06063521e1abba92243fc1d98895c012e309ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4L2ENWI%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6K5nQnj3ajWkuW591kkFbXbAZ%2FOdJDtq2mSLKucflcAiEArnXzD3kh%2BmPS43asZBc6saISA3TAPz65dnLo5URVFb4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9O5QSabnogdEdy5yrcA5GJcrRUz2NIxsfpTXimgUY0VxcpkfPaLgVFLUROePnITERWmC3wEVO5RaWe5ttwI6%2Bmad14QXcpJPKul59Id8I10zPnQ%2FJd51Fc1gjIy5dsrQoxDSobN6arp6fPU5AsEJ8YUMDbUb3gQFZ4ulMXDUQVBfZhNS6EA4Fhm90hojVF0UAQKpnTW4nIRyWpfoa2SV62UMHlS4nvuc2FJoVRd83esAufgER%2F2ORsvvHhTnNGlamXM38aAqgJU8bMRTLez990s1xB0OQrhq2izc3iHehTg3f3s0Ca1BIQ1ByR706Zf2Fn6Ct3uhWtOzq4WUPxGopHoMFVrCtAIJNhl3NsEtEnGEymDucC4BvHhISMLhUihifXuqtMxaFghSun1hVVCC8CKLnX0oFKUUKALctdix35LpZXa%2FloTKyPh6dP27U4ffkXSSIe2whZ6FvMFtxBf94WbXUUxeOE9vNSk1vqMxyDJrhTyYq7iAKFNb%2BQ3cLJZybJGKH%2FvEHyH%2FUI%2FQgBB3S%2BvcKS7H5CELtzDFuKuzTyp1vBBqK4iwMB%2BhnTQC48RGJPrwLzp%2FbHDTeF4IyUNLS4vJ4oJSUlE1jHEWtYwOE43zb8MGQ%2By48r3YlpabQugamLMIaJIZcg%2BRE8MN7jr8EGOqUBM6qCui4HQwKBHtomSEiF8psmdC6EP7lKliZh0fTiI3xVutru45zHEDYZrlMoFGreg096mEjyNRDdr1t1aOvr84HVOKUGNXUwGR5SmYekrlO72BWLhKh04kKXKcR2xZeSLONuEY8vCiKvrcqqMRhkcLj1EoiVibgm3VX6Yaa60WQkwwBKMjcep4VIxltBQlavsGl7uvmz2%2FY88lepLBVjwDuIXnT3&X-Amz-Signature=e1b123191a07b9623e5b31d3582490bce70517cf5d75354ddcb1d3f059a3fed6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPYON6HE%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIs3wsJ1MqVyzJ2kWc64Ng7bUo%2BTpvWtEKLf4xGbpDmAIgVFIE5XXrRv703IcuT%2F66DWv%2BPWGHBW44goFuPz9HoKkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP31HQwpEBAdF%2BEOSrcA57iCP%2BktvwUiM5jIJyYActala5uVGBxHFce4S43Nz4hZhqT3hA9qYFlYuBYPQPQgURxdLji931yFTBRGqMjvRqSJ7yqj%2FViPdYGzYkNeBL5phl6nKIXp6cLl9rVWrtDfWLS%2Fqs4mxhZ1ponYITXqHjicUAmuBC1B9eRxUzsaLCQmF6KD96%2FvXM%2FZTodhz03kIlyN4zrZt5aMIoEamhmWYDIyqMC0gawatkZwYjI3tjWQ1eqeyweTPpIZkpJ95QcSeVQozXYtLg5NRfCR5KRhwsoaNavRd9mYiouoWMB05xUK8bCw5znWguA7HAEZfW4slsYXopUJLa%2Fr%2Bnog9Co1ylazcNRI%2FKPizRHrAqoximmLeNSonSbCGLsGwlJqSxByzac%2B%2BOFequk1cOISiRZW3gfG3fay0frwTsa2dv8Frg8mOhGFl9f5jLRl5wgOs9SqB9%2BqIYJRTpuD%2BV%2BJu3IcH8s%2F%2FhqpWt%2BcPwJD4ofq0selha4EjtQ4%2FAQSpk8zbKQGa%2ByMu0yN6vRZUZsoqNg4gOCKWvLp2oe3EI4MNboO6QLNUEE0VZevubDZVzo%2Fa60AocnLrLJvYPSm%2FMeEHQ2rrqZwSWTb4jHcNuIVjDcPiY3WmBnjBDKzA%2FOG0ksMNPjr8EGOqUBT10M6auvqhDdmdNXjn1Kls8cWKcOAddbyS16s7gRRHLj%2F8D603Ti8xA5EmpmRfgVTFhL%2BLJmBuCF1ycCS6E3J3V8wgRDOTpyvTfM%2B%2BhdehBUEfuLUS8htnOb1sVfx%2FKixFSokJq46WAl%2B9OZa0kBaB9rnJb2fulUkEu12wSqg0OhL1PzCZGJ1WpXacSMRbU0r8pHJn77sIOPvFM2m15NnyriaZ0q&X-Amz-Signature=58c73492293d78a9b75cbc044233a5df5786865a04a3ff268c44d82b14620809&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
