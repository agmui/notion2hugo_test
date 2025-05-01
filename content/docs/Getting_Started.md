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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q5LXFSZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDsKd8XEhD3qLLeFsjz7Tz5KsbTy6hc5G%2Fw%2FbGcQTEv9gIhAO%2FvlAyGrKBBcSXlfzzwCQpc6N76Ak8qCgPxDty1qiv5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5OAudKj8uzp4IavEq3APRr4J%2BIiOADFbOqSxr%2B39cesvZBKon5NHS%2B%2FepKg2RIzDpi%2F%2FWTI2ASVF%2BrJrPcrwF2lrUA%2Bl0jT1gT%2B%2Ff1qzTdYJa5JI%2Bc1Ox2bm0LR9uFkoIFzt2Lk0pRWbOVFIZUXGgWxRudxjP8beeDyaXp3ZSmsG3bi7%2BmGq7RGuBqTZPU8C6ZwGGojy58CQ4c3RqwCYCFUWQrxWtWa2U%2F0AaIFDfwNxunEq67M6zu9Hc72P67V9SEvLwkkGsuxpDuKy2GZk1gWX8cnmegRR2jUqm7D1xweKFASLH%2FTpCigWwo9HJitZu7XaUmzIkzwgN84HPEXnaKlN2r4IVORvDoPQuIW2OjuY8A8kshFGAo1JHGPKEadBgSIu9nsVWYY3msAJhKL%2F7JhgNQ8bTDgb5chLTwmyTgxCxs6KCILGexKFQWVh2hY0be9vw%2FwTlC22n1wXDQOpHO1lYU13ehRLeMtNhvU6Y62e%2BCeWbBYFMUM7F5iOd%2BNkrFRXEkAQWWBxGdpp3D2vnMczUQfvzXhZjk%2BdeW6QY9Q59Oohlm4ON7wndtwOrMqbVCDCgx5sDH9wGfWm618R5b8YMQewBmlbDfdTgBjoQ8OtOWi%2FmmjDFp7a8pPDtGjsVbD90M%2FwtI9JgrzCHyc3ABjqkAR002WmFW4YEVxOuw1j03DK35YZSRfMQaNtjK3M8uWwrUY3qqCOxYpIPWM5kpI2HLnedaleGRYbT4m7IEAjjPQZFjhErHQjaxaKSjNw%2BPv7HsB1FxwnraLke9c0lCsL51bz8utUTVWLtmngZtciIqwXnHmArvBrIcIIJegzunQcx4q9rjptKUiUdmZXLYOIUUO117ONPxOle8zx3m7sd7Fzc1SFZ&X-Amz-Signature=da22af88d40fce8e476cff4bcd8671dff0387ab5d3a4c69897a1102cce6e5e48&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q5LXFSZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDsKd8XEhD3qLLeFsjz7Tz5KsbTy6hc5G%2Fw%2FbGcQTEv9gIhAO%2FvlAyGrKBBcSXlfzzwCQpc6N76Ak8qCgPxDty1qiv5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5OAudKj8uzp4IavEq3APRr4J%2BIiOADFbOqSxr%2B39cesvZBKon5NHS%2B%2FepKg2RIzDpi%2F%2FWTI2ASVF%2BrJrPcrwF2lrUA%2Bl0jT1gT%2B%2Ff1qzTdYJa5JI%2Bc1Ox2bm0LR9uFkoIFzt2Lk0pRWbOVFIZUXGgWxRudxjP8beeDyaXp3ZSmsG3bi7%2BmGq7RGuBqTZPU8C6ZwGGojy58CQ4c3RqwCYCFUWQrxWtWa2U%2F0AaIFDfwNxunEq67M6zu9Hc72P67V9SEvLwkkGsuxpDuKy2GZk1gWX8cnmegRR2jUqm7D1xweKFASLH%2FTpCigWwo9HJitZu7XaUmzIkzwgN84HPEXnaKlN2r4IVORvDoPQuIW2OjuY8A8kshFGAo1JHGPKEadBgSIu9nsVWYY3msAJhKL%2F7JhgNQ8bTDgb5chLTwmyTgxCxs6KCILGexKFQWVh2hY0be9vw%2FwTlC22n1wXDQOpHO1lYU13ehRLeMtNhvU6Y62e%2BCeWbBYFMUM7F5iOd%2BNkrFRXEkAQWWBxGdpp3D2vnMczUQfvzXhZjk%2BdeW6QY9Q59Oohlm4ON7wndtwOrMqbVCDCgx5sDH9wGfWm618R5b8YMQewBmlbDfdTgBjoQ8OtOWi%2FmmjDFp7a8pPDtGjsVbD90M%2FwtI9JgrzCHyc3ABjqkAR002WmFW4YEVxOuw1j03DK35YZSRfMQaNtjK3M8uWwrUY3qqCOxYpIPWM5kpI2HLnedaleGRYbT4m7IEAjjPQZFjhErHQjaxaKSjNw%2BPv7HsB1FxwnraLke9c0lCsL51bz8utUTVWLtmngZtciIqwXnHmArvBrIcIIJegzunQcx4q9rjptKUiUdmZXLYOIUUO117ONPxOle8zx3m7sd7Fzc1SFZ&X-Amz-Signature=389a6c66fefb72bbf27261be2122c5eba802f5116c86778c09a330183466d649&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q5LXFSZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDsKd8XEhD3qLLeFsjz7Tz5KsbTy6hc5G%2Fw%2FbGcQTEv9gIhAO%2FvlAyGrKBBcSXlfzzwCQpc6N76Ak8qCgPxDty1qiv5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5OAudKj8uzp4IavEq3APRr4J%2BIiOADFbOqSxr%2B39cesvZBKon5NHS%2B%2FepKg2RIzDpi%2F%2FWTI2ASVF%2BrJrPcrwF2lrUA%2Bl0jT1gT%2B%2Ff1qzTdYJa5JI%2Bc1Ox2bm0LR9uFkoIFzt2Lk0pRWbOVFIZUXGgWxRudxjP8beeDyaXp3ZSmsG3bi7%2BmGq7RGuBqTZPU8C6ZwGGojy58CQ4c3RqwCYCFUWQrxWtWa2U%2F0AaIFDfwNxunEq67M6zu9Hc72P67V9SEvLwkkGsuxpDuKy2GZk1gWX8cnmegRR2jUqm7D1xweKFASLH%2FTpCigWwo9HJitZu7XaUmzIkzwgN84HPEXnaKlN2r4IVORvDoPQuIW2OjuY8A8kshFGAo1JHGPKEadBgSIu9nsVWYY3msAJhKL%2F7JhgNQ8bTDgb5chLTwmyTgxCxs6KCILGexKFQWVh2hY0be9vw%2FwTlC22n1wXDQOpHO1lYU13ehRLeMtNhvU6Y62e%2BCeWbBYFMUM7F5iOd%2BNkrFRXEkAQWWBxGdpp3D2vnMczUQfvzXhZjk%2BdeW6QY9Q59Oohlm4ON7wndtwOrMqbVCDCgx5sDH9wGfWm618R5b8YMQewBmlbDfdTgBjoQ8OtOWi%2FmmjDFp7a8pPDtGjsVbD90M%2FwtI9JgrzCHyc3ABjqkAR002WmFW4YEVxOuw1j03DK35YZSRfMQaNtjK3M8uWwrUY3qqCOxYpIPWM5kpI2HLnedaleGRYbT4m7IEAjjPQZFjhErHQjaxaKSjNw%2BPv7HsB1FxwnraLke9c0lCsL51bz8utUTVWLtmngZtciIqwXnHmArvBrIcIIJegzunQcx4q9rjptKUiUdmZXLYOIUUO117ONPxOle8zx3m7sd7Fzc1SFZ&X-Amz-Signature=70735437c38eb83cbd837f96b159a2af0b240d4d4bac8b3f727c26a855fce2d1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DKNJLEF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICcANRiQTY82stNznB1V4rWOc2DIoVNWYXn39I4ggllYAiEA9%2Fm01WJ9CoDqXDOO4WJP%2B3WR2AcwAn6Bru59%2B2vat9MqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW8NBMDDHHT93AdGCrcAwDPA9r5M1emeAYx%2FzONGR0QJi05TWK2ks3KMAnEgYmpTpbDiH94qxF0UQ%2FGLJmEj2kNBm2QNIVkNfnaUqA%2Bt6a0k6GnFmcjwRKTxgaKQh5LVB93V0KQIxt4tSd%2B0q9gm7RsAO1GObmnAOKQ%2FW%2F40RdG4tf%2FUijJDNLUTKtTQlHxMAbzqcKph94YCjZXi4UQ0mqgyBIWqNvPc7ESazhMpQB2rC71s2Cg%2FMx5I5AuYX5scXAMMFTzmt0xSNRXvgMKU80%2FXeJd%2BLav9hQA5kZApK9gYwDydhcOnU0M90%2BOUydOJMVRe%2B%2FMimUvbOswmiQ62ZR4Cc7w%2Fw8KICMou4Spd1fd9bS%2F3MUubw93XynH0A%2BUMVAyFOYUBkbbUYDgorjguSPlZFyA%2B6g5CKQYIiaut4uMrf8r2UKXDYIRbtXWMLk%2FFeAPMwlO9JcXdoxQ9Pharg9BROOQfg2a3CBukHICJMDPHWvH998jcmRb29WuE36Dcd3s8cXRdy%2Ff6Ry8tRGX6mociYsS6Wh9TFG6egdBVF8Ud0CkuT9yBCJ4M6iIc%2BttcL%2BFlznOBJcOBtyRZlsAi9aS5rN75FudUXbzTzkgXsWemtdAU6w9UYwlBRd%2FDi5fugX116E%2FdI35VTMAMMrIzcAGOqUBO2ICXG65VYGB34%2FiLS0d6JfbDMsPkJcQnibhk5rkTJHnPRa59NNzmAAwuMFSPI9AD1bE5cfhEq13zqKHqvvCMJfafIRlpBYMNB08gkf6tLj51dhQe4gY5jJ6NzXyoTLL0msIDEpYpJ5y68sbjHIVbGK6nQKlhxknB69tukHaluNFVc%2BGpHIOGFG9lpriMLXbfkoOvPc1AAxsID4XjJyGFNkHL0%2B0&X-Amz-Signature=5b49f4a96ca16754db552b49170cc05a3df8fdecd578b55ec8e6cf5f2b84bb91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKNC7BBN%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDPj5qxEmVu%2BvYBHeVhMpxPY%2FJ2GMCbdRPpY6hh9RDZKQIhANJr3gM%2BHQyFnoQbrKymeqWMmnNw%2FaoX5CsvbQ20UwcoKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKk1bL92h%2F7a0lSVAq3AOtxCONgtdZUJssfqXX1QkW63cZFaAKSPw7xHbmSNByekmcPE3CcbTQP%2Bhajzb1wKBTPxYd4LBjly2IZYpGpXxo%2BMbfPfmF1cyqGD0T7sXpU8kTwY9h67RiHPwnV3NJsDpvK7mbk6m7MjX1kt0ky5FMdSQfUTSWB8mi%2FfT2nU4d7Gl%2B%2FWIu0fFsF4gQRG5i7uJ18kg3Su7uZOhJ4jW2I5E053U969hoF3CBo2BFB6lzTARM3Utl23no5Dm7LVqzyzPYmGXY9a4ixOdk5gHZHmBLXRokZQHWU0alMD6oHP7Moyki1gSvCoxiGdOiHI4zW%2B8tXe4QaMlGDB%2B7YWC0AZOk%2Br6hfQT9%2BSSfrb20LrFCZOJwK08CFYzJ4UQRKwmLukvSWZfMySS8eXjA%2FnLJYoM9hVhuo3XKMkNWwm%2FjaXP5HfwEFapUDkk4P1u6YZmMKxsX86UZxcGENkeCHCQTh%2B6g%2Fop9qi0SZRo2rvUGQRbC%2BRzbpmhsOsqdl%2F2lIEjSKR6A1aobEB7aKZM9nE%2FR8jgjlUteOjro21c8s78GwlU3AvPYrWF7yKWsrpqAzTcEZTtx3qo9%2FB6MQMFHlS5oyQHfoJ0Iiqp8r5MNe%2Fp75O1W0htDObdXDL%2B9k6AdhTCZyc3ABjqkAWI38KMDkZURM1eRSmBkMYnbnPxzAOGbcg%2BPRsHEQbiq%2F2Ziu6sC6x%2F4j6snHaxbHKz1vtDzCte5kCPDrOtSNq2y9jQhK5jZ8YJeHykNbubHNeH7Ia2mUNxnSEZICIvbfMUD%2FhoY%2BHLcuZCueKk%2Fpa0%2BBVoHEIe49m0zWeU3wTgyvlVgCN%2BoyiAHD7bK1BgS67jVHH0NCSD1TxL0uyLLTKpeJzLr&X-Amz-Signature=6d01cd3ebccedef2c1f58c930ed16de8435bc944b8aa49466db8eea517e1eace&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q5LXFSZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDsKd8XEhD3qLLeFsjz7Tz5KsbTy6hc5G%2Fw%2FbGcQTEv9gIhAO%2FvlAyGrKBBcSXlfzzwCQpc6N76Ak8qCgPxDty1qiv5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5OAudKj8uzp4IavEq3APRr4J%2BIiOADFbOqSxr%2B39cesvZBKon5NHS%2B%2FepKg2RIzDpi%2F%2FWTI2ASVF%2BrJrPcrwF2lrUA%2Bl0jT1gT%2B%2Ff1qzTdYJa5JI%2Bc1Ox2bm0LR9uFkoIFzt2Lk0pRWbOVFIZUXGgWxRudxjP8beeDyaXp3ZSmsG3bi7%2BmGq7RGuBqTZPU8C6ZwGGojy58CQ4c3RqwCYCFUWQrxWtWa2U%2F0AaIFDfwNxunEq67M6zu9Hc72P67V9SEvLwkkGsuxpDuKy2GZk1gWX8cnmegRR2jUqm7D1xweKFASLH%2FTpCigWwo9HJitZu7XaUmzIkzwgN84HPEXnaKlN2r4IVORvDoPQuIW2OjuY8A8kshFGAo1JHGPKEadBgSIu9nsVWYY3msAJhKL%2F7JhgNQ8bTDgb5chLTwmyTgxCxs6KCILGexKFQWVh2hY0be9vw%2FwTlC22n1wXDQOpHO1lYU13ehRLeMtNhvU6Y62e%2BCeWbBYFMUM7F5iOd%2BNkrFRXEkAQWWBxGdpp3D2vnMczUQfvzXhZjk%2BdeW6QY9Q59Oohlm4ON7wndtwOrMqbVCDCgx5sDH9wGfWm618R5b8YMQewBmlbDfdTgBjoQ8OtOWi%2FmmjDFp7a8pPDtGjsVbD90M%2FwtI9JgrzCHyc3ABjqkAR002WmFW4YEVxOuw1j03DK35YZSRfMQaNtjK3M8uWwrUY3qqCOxYpIPWM5kpI2HLnedaleGRYbT4m7IEAjjPQZFjhErHQjaxaKSjNw%2BPv7HsB1FxwnraLke9c0lCsL51bz8utUTVWLtmngZtciIqwXnHmArvBrIcIIJegzunQcx4q9rjptKUiUdmZXLYOIUUO117ONPxOle8zx3m7sd7Fzc1SFZ&X-Amz-Signature=da500fc5c62f5115b6e58aac3808f33c9829bd6b0edcc6b7c2ade5709c1994d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
