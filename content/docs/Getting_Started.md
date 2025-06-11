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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYMSGX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbmgaUA39B9STrw%2FL5G3x%2FYFDVWc0%2BNB0QMyuVs1HViAiEArWauF0Zj%2B79v3twwZvPQTKz8SWpUjWMdfh%2BpPaFSC6IqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGRUSbkZ%2FBzUPM1mSrcA4EPOlRwPPoqzrnPsjwZ5kqEQook2rxgOx7neTRUS8zEFk8Uyvy3pKCdFWqq8lkZ%2BBnigPSRjZZUyghWSLsWq1UZ5xsHuiE%2F9f7jEaxx6IflUL6Nm8dopiaU58nwZOfKmgRnvQi5K7xeyCXKGMqn2AA848PvjJVimc8isehqCkK1W0ZjAGo9afbzEK4hA%2FUdGWO8QSHXaZQVmdWRb%2BZlQar6ElkXbmkawCaw0fEUIIsU6pyx0RoXqA%2BNhcItClFzr%2FA3OFU6DEVgX2rpCl0tIUXOsUq8zAgeB8FhlorqiYUnHQe%2Bzl%2B8l9g4CiTW9bk5d2pd3RmLnCG43zGVcykqSkprEI1bUTJ8qlPYPgt3HwrKg3jwgia7bP7DTDRbuGlqW9Qc35jWqpxprNw%2FOwcQRnadR3hQwEHOWJgbkZOIzMFRNuTSZwwgvknwdrnnY1uUjvOT1MKeAaCynVs1fUTIc%2BikvyUjVChmYH1k7F%2BM%2BJfy%2FUM8FzIRBGcxneglyHBz6D7hD2%2F0NVZ1SAOwCtBRLk2xNB2Mff3G5JZQOkycR7asc0D%2Bv4xz2RpNxQRzgY%2FKrNh3d%2BDQpWesLo8TptIxxsBnhMO2Q3fPgzmslfLzphSD9UtS94BCnWwF1gIcMIfmpcIGOqUBoWiesWtontYfJUQiOoxsAWm%2BNjl2YoromRkm2IrRePiEENCQkqlkd8fJrFUAg%2B6A%2FyisTpHGIBhr2puT%2FMql4CCSV59S9xwDj8UB43dJAz%2B%2FB5ZWHssHHtbI%2B11DTUS3gNFdMN2Xoy3x6cduLt5RxSDaPuBmRJ5uM3E5q08qqU3YwjxkcJIHTXaYYT1f3C4YXzznXkry8wYmdYyrKaRL91G1vlVJ&X-Amz-Signature=6137a443cce7cbada7f8799528bfdc6f251aed28279bd0fa02aa558fbb3a04cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYMSGX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbmgaUA39B9STrw%2FL5G3x%2FYFDVWc0%2BNB0QMyuVs1HViAiEArWauF0Zj%2B79v3twwZvPQTKz8SWpUjWMdfh%2BpPaFSC6IqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGRUSbkZ%2FBzUPM1mSrcA4EPOlRwPPoqzrnPsjwZ5kqEQook2rxgOx7neTRUS8zEFk8Uyvy3pKCdFWqq8lkZ%2BBnigPSRjZZUyghWSLsWq1UZ5xsHuiE%2F9f7jEaxx6IflUL6Nm8dopiaU58nwZOfKmgRnvQi5K7xeyCXKGMqn2AA848PvjJVimc8isehqCkK1W0ZjAGo9afbzEK4hA%2FUdGWO8QSHXaZQVmdWRb%2BZlQar6ElkXbmkawCaw0fEUIIsU6pyx0RoXqA%2BNhcItClFzr%2FA3OFU6DEVgX2rpCl0tIUXOsUq8zAgeB8FhlorqiYUnHQe%2Bzl%2B8l9g4CiTW9bk5d2pd3RmLnCG43zGVcykqSkprEI1bUTJ8qlPYPgt3HwrKg3jwgia7bP7DTDRbuGlqW9Qc35jWqpxprNw%2FOwcQRnadR3hQwEHOWJgbkZOIzMFRNuTSZwwgvknwdrnnY1uUjvOT1MKeAaCynVs1fUTIc%2BikvyUjVChmYH1k7F%2BM%2BJfy%2FUM8FzIRBGcxneglyHBz6D7hD2%2F0NVZ1SAOwCtBRLk2xNB2Mff3G5JZQOkycR7asc0D%2Bv4xz2RpNxQRzgY%2FKrNh3d%2BDQpWesLo8TptIxxsBnhMO2Q3fPgzmslfLzphSD9UtS94BCnWwF1gIcMIfmpcIGOqUBoWiesWtontYfJUQiOoxsAWm%2BNjl2YoromRkm2IrRePiEENCQkqlkd8fJrFUAg%2B6A%2FyisTpHGIBhr2puT%2FMql4CCSV59S9xwDj8UB43dJAz%2B%2FB5ZWHssHHtbI%2B11DTUS3gNFdMN2Xoy3x6cduLt5RxSDaPuBmRJ5uM3E5q08qqU3YwjxkcJIHTXaYYT1f3C4YXzznXkry8wYmdYyrKaRL91G1vlVJ&X-Amz-Signature=671a6733c8b1ea092835e3d00d1e3f90db1ff8a04ef1b4deb3d4bc9c1f553250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYMSGX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbmgaUA39B9STrw%2FL5G3x%2FYFDVWc0%2BNB0QMyuVs1HViAiEArWauF0Zj%2B79v3twwZvPQTKz8SWpUjWMdfh%2BpPaFSC6IqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGRUSbkZ%2FBzUPM1mSrcA4EPOlRwPPoqzrnPsjwZ5kqEQook2rxgOx7neTRUS8zEFk8Uyvy3pKCdFWqq8lkZ%2BBnigPSRjZZUyghWSLsWq1UZ5xsHuiE%2F9f7jEaxx6IflUL6Nm8dopiaU58nwZOfKmgRnvQi5K7xeyCXKGMqn2AA848PvjJVimc8isehqCkK1W0ZjAGo9afbzEK4hA%2FUdGWO8QSHXaZQVmdWRb%2BZlQar6ElkXbmkawCaw0fEUIIsU6pyx0RoXqA%2BNhcItClFzr%2FA3OFU6DEVgX2rpCl0tIUXOsUq8zAgeB8FhlorqiYUnHQe%2Bzl%2B8l9g4CiTW9bk5d2pd3RmLnCG43zGVcykqSkprEI1bUTJ8qlPYPgt3HwrKg3jwgia7bP7DTDRbuGlqW9Qc35jWqpxprNw%2FOwcQRnadR3hQwEHOWJgbkZOIzMFRNuTSZwwgvknwdrnnY1uUjvOT1MKeAaCynVs1fUTIc%2BikvyUjVChmYH1k7F%2BM%2BJfy%2FUM8FzIRBGcxneglyHBz6D7hD2%2F0NVZ1SAOwCtBRLk2xNB2Mff3G5JZQOkycR7asc0D%2Bv4xz2RpNxQRzgY%2FKrNh3d%2BDQpWesLo8TptIxxsBnhMO2Q3fPgzmslfLzphSD9UtS94BCnWwF1gIcMIfmpcIGOqUBoWiesWtontYfJUQiOoxsAWm%2BNjl2YoromRkm2IrRePiEENCQkqlkd8fJrFUAg%2B6A%2FyisTpHGIBhr2puT%2FMql4CCSV59S9xwDj8UB43dJAz%2B%2FB5ZWHssHHtbI%2B11DTUS3gNFdMN2Xoy3x6cduLt5RxSDaPuBmRJ5uM3E5q08qqU3YwjxkcJIHTXaYYT1f3C4YXzznXkry8wYmdYyrKaRL91G1vlVJ&X-Amz-Signature=80b017a061fb3e50ce9d5a537957a84c795294340805431ee5c5ef4e59401718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657HSZFK7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN5J3V%2Bq5YLhSF2z7AA1fFIlU0jznZ1cogxz6ZHNdLGwIhALjPMftO0%2FHLAo17AJS6vu1T24Hzu7Ak6hGS8xdfhmKkKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B3a7k27l9Z2saE%2BQq3ANdF1Q51kzBw6oQR8rSadYpsKn%2F2pVDhwx9vz8hnzTQv2i53%2F0337NHJgnFB9PfWL%2BQBk19yzagZ3z%2BK2OsSMyG0nwZT8dieFH97Ao4TGTFJpmts9%2Boerm856HDR2q%2FJrpHQkDr2F0OFY5BqmSk9%2FmolgJWR8nnKZS9f40vSKqGHzscXM0kvSbK3UXG746SETK73uzc%2FQCIe7lu7ak3qjJZv2ZLKY7fsioDbmiudtysPKJ%2B71OSRaQ3wV3BmW9HKZMnj5WQ0%2Bb%2BCBIGeXpofb6QuC7nK8Pk3iZmQnlHdSqbHHuX7npYrEG0SGyKYRo7SWdeLFoT3LCgXJUG8DGGKad%2BQ7e2SbVmxLQGCVicU2nmEpxwPKoqXPNsO%2BSGpru42oPwmz8Fcjid2UFyXyEwvAGZIwFQftG0H6Mwx2wytrjkeNtFQ0esYIE9YcvRfCRdZIc8QbG1LZBecBFkCqWD2D2AthmmvQ4%2B9WobQIkRJ%2BTS%2Bu3Z4WpR1n3OrnAwSKNoJQjqFG%2BaDL3mspez%2BpTHztnM5MPsW34bucjj5G5Mc33fkJXpSnE%2FKzMK5mgFgghzSAONx1BAOTVngBA78ZZoNsK8zyrFaqcUavUeA8PLim%2BLhXUcN54EvjCdPrzPHjDL5aXCBjqkAc6n7vE4xGsnVJPEe4J43x4JjJ9TzrRngU6YwjDV85Qilss8u74Jq2XSXXzjVpXAcl2uu7RfbiqgRQq3mFw%2BiqkaLMML%2FJUxAPCQYBKTfX4TJWwP5NIMPsBXd87cdkuMbdglOP%2FNtOg4hUs%2FMNErpACtxS7Ds1BPznFo5xChbPfiSAalsbB3O4QMDL4riSjHsfDUKBLwAN%2ByDYiGskhkT1hkR9jU&X-Amz-Signature=955249e9865f244d47baa54b9df1085505c94b6e57038b4420ba7cd0195986f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627M7ETX4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZIfmVwqdGg3OyZOB02hALsIx2wTrmQDHCmfETq5uKsgIhAMVu5HOp8RiO0C8BuNFIbA6ke6oFQ5O6YnpRGk9WwgNTKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx44aIg7mlY3izjRpIq3ANNPoW4q%2BXBWq97FSV9ISMpE9cE9XaYMf1jkaMmI%2FfznfgBJwfPJf2cb0wcMfpKefyGxLZ7WX9smK02fWj03R4QtPQHPPog5Vet3SlQIJLeRx96HQe8Wg2DtbrnUcwVtrXmJk6l8gpSRfPQLAfGs2zxz8JqA5F%2BE2rObeiMJpNKF3Spjl0nzG7QyIrQJ2Gqf%2BCU6Ovj1ETs5Pl9fOc8iwiaEyZlluMzuQq9zw8KK%2FAd4dKfYWWefbABdZhxPzTwtEps59g9JZQqox4Y6Uw6ABej8F7oDX6TSLquHvCMTb1KVU%2FUHO9uV8YjD50WaImnkNCHyj7ZdCWr0xAUkEfSdV2WhVp8p%2FdsV4CFOuK3Aa0XVYCFKD3iJj5TTeYNiOACTe8UHLAochymptE6TVu5HuBoOf%2B5Npmkn72X%2FxvF1orf8HzEVFNL0AIwlidrJdgClFdeoJSJdL2cVzI0weyC222OPxwgqzmkqPkS8lc%2BaCluNqVn15b2MbG9kWDPRxiYy7BW3nnS%2BmeuBOphKD2k%2FeBVwetkf92QVWd6uimxmZbWUKNoBl%2BFToy4nq8QEM%2FgRxCB7eO3gS423A7s%2BHLJGVYsAxAvyZsY2iCthBkd0veTfMXhA52we67JbEYfZTCn5aXCBjqkAZHQXxknaor7URNOSVBfz6oMFhdxToLkbQwAOOBH89ONER9oVAGoX6mt13J%2Byd7zqwJY7465hGydG9KBzbvOrzyX6cV%2FP3%2FwFHI2HaAKv6xRWbfeoW%2BXVd%2B2i9VQQsCdR%2BnRZcKtemW%2FHH4HPMwA56ukraG%2FbexKrLuhZsaLeyCgTGWQOTeYPv%2FHefm%2Fmc2jNm8BDDeRrV8YBakM86QpTVABBdcb&X-Amz-Signature=732f9e94a229bf0a1648088b25cc1fcb2aee3a404a0aa23e282def14f85f78f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYMSGX7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbmgaUA39B9STrw%2FL5G3x%2FYFDVWc0%2BNB0QMyuVs1HViAiEArWauF0Zj%2B79v3twwZvPQTKz8SWpUjWMdfh%2BpPaFSC6IqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGRUSbkZ%2FBzUPM1mSrcA4EPOlRwPPoqzrnPsjwZ5kqEQook2rxgOx7neTRUS8zEFk8Uyvy3pKCdFWqq8lkZ%2BBnigPSRjZZUyghWSLsWq1UZ5xsHuiE%2F9f7jEaxx6IflUL6Nm8dopiaU58nwZOfKmgRnvQi5K7xeyCXKGMqn2AA848PvjJVimc8isehqCkK1W0ZjAGo9afbzEK4hA%2FUdGWO8QSHXaZQVmdWRb%2BZlQar6ElkXbmkawCaw0fEUIIsU6pyx0RoXqA%2BNhcItClFzr%2FA3OFU6DEVgX2rpCl0tIUXOsUq8zAgeB8FhlorqiYUnHQe%2Bzl%2B8l9g4CiTW9bk5d2pd3RmLnCG43zGVcykqSkprEI1bUTJ8qlPYPgt3HwrKg3jwgia7bP7DTDRbuGlqW9Qc35jWqpxprNw%2FOwcQRnadR3hQwEHOWJgbkZOIzMFRNuTSZwwgvknwdrnnY1uUjvOT1MKeAaCynVs1fUTIc%2BikvyUjVChmYH1k7F%2BM%2BJfy%2FUM8FzIRBGcxneglyHBz6D7hD2%2F0NVZ1SAOwCtBRLk2xNB2Mff3G5JZQOkycR7asc0D%2Bv4xz2RpNxQRzgY%2FKrNh3d%2BDQpWesLo8TptIxxsBnhMO2Q3fPgzmslfLzphSD9UtS94BCnWwF1gIcMIfmpcIGOqUBoWiesWtontYfJUQiOoxsAWm%2BNjl2YoromRkm2IrRePiEENCQkqlkd8fJrFUAg%2B6A%2FyisTpHGIBhr2puT%2FMql4CCSV59S9xwDj8UB43dJAz%2B%2FB5ZWHssHHtbI%2B11DTUS3gNFdMN2Xoy3x6cduLt5RxSDaPuBmRJ5uM3E5q08qqU3YwjxkcJIHTXaYYT1f3C4YXzznXkry8wYmdYyrKaRL91G1vlVJ&X-Amz-Signature=83d055f7a25c2d374c01f3fdee1e21f8b1f4b0eb1e2f3cbc9f7816019b2e0763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
