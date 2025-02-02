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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAFO3DTZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsSUNQefwPwCE3ENKlTxa9tp8Ji5xlsM9HhlASIcEEMQIhALKzZISs%2F8ZSFIbg8IjMsJyAeoBHW1xx5dndcwPKWTFOKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyqPtV45Iauu7WGsq3AO8BoelZEmnbSS5CUw6McN7KqlH3lbu4pnl7aGsuDi9LtlYUcrxnin%2F2UnOY6%2Bhz2THwgn61RFcA1e0r0tVUsAPiqZILfQnagC5wspkJsQ9acqKS%2FvDh%2F%2BvtboRDNxrt1ob6hbk15mUwHjKbO5qVKj0u7IZDQFhze5LIbnrqMSrLmtL1RrJQ0SiaUTkzggYFQGHG%2BO2D6rWVlJ0WHuRJCAoMnP48D22x5M%2BqmyiVvESDwZVvaaiz14VLYbKwhkIKohUCXL6zIrUXuDLuZdYYj%2BEEgQQJvk40fUDSNuEt1KnEdZZW5BwWoJmVgcDtlJPTUp60TioGbRbQ0i1QGPwbA9CBighFpLrAOObBbWP%2BJZTmlLrSf46%2BxYghc4AzQhkb3yCgpw%2FfJP6lthXkfBGU6dclYhwERkNzuUI3rz9JIvdbVCOWRBWHfhA89T5eDEr6oybFiIX1XI21qNm6eqknxujWW3QRKXkII269KwSE%2BCZar54DIiLZAHnGNPJ5wBRF4B72jqh%2F0yvi%2FXZl67Mlq1DTS6kS3uxUuV6eQEmqxQMACCkO3dZWIbI79uar085YZyDlYXzzjS6E1E0MjcUkeM66pDTGIW1LbaNoW2CUitRy7wC5JWkmHwxuokvXTC%2B5v%2B8BjqkAX1cwf0eqi%2FJy3e7XQq5RWBxNjxB0zB5V18Jn9fuxWlK8NGy1DwOMo0IkgHjkS5jli1BsWSKaH2yRxtqo31ZeaTEacmaLeEJhgTFmvB3EKXVsAj2zpDHY%2BiCMs0YRuHWtEN7b1jY0nAVAERqOPMMKMZd932I04C0irnDfQZWZIkeseVidMTZWu6HVSMe9eeQ4Q2BSo2gjbtpypaeHQyCcmEyJ7Li&X-Amz-Signature=21b3cc9538134e45ee058fbc720df9424ee4dabc99b4f9cf45324f3ceeab841f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAFO3DTZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsSUNQefwPwCE3ENKlTxa9tp8Ji5xlsM9HhlASIcEEMQIhALKzZISs%2F8ZSFIbg8IjMsJyAeoBHW1xx5dndcwPKWTFOKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyqPtV45Iauu7WGsq3AO8BoelZEmnbSS5CUw6McN7KqlH3lbu4pnl7aGsuDi9LtlYUcrxnin%2F2UnOY6%2Bhz2THwgn61RFcA1e0r0tVUsAPiqZILfQnagC5wspkJsQ9acqKS%2FvDh%2F%2BvtboRDNxrt1ob6hbk15mUwHjKbO5qVKj0u7IZDQFhze5LIbnrqMSrLmtL1RrJQ0SiaUTkzggYFQGHG%2BO2D6rWVlJ0WHuRJCAoMnP48D22x5M%2BqmyiVvESDwZVvaaiz14VLYbKwhkIKohUCXL6zIrUXuDLuZdYYj%2BEEgQQJvk40fUDSNuEt1KnEdZZW5BwWoJmVgcDtlJPTUp60TioGbRbQ0i1QGPwbA9CBighFpLrAOObBbWP%2BJZTmlLrSf46%2BxYghc4AzQhkb3yCgpw%2FfJP6lthXkfBGU6dclYhwERkNzuUI3rz9JIvdbVCOWRBWHfhA89T5eDEr6oybFiIX1XI21qNm6eqknxujWW3QRKXkII269KwSE%2BCZar54DIiLZAHnGNPJ5wBRF4B72jqh%2F0yvi%2FXZl67Mlq1DTS6kS3uxUuV6eQEmqxQMACCkO3dZWIbI79uar085YZyDlYXzzjS6E1E0MjcUkeM66pDTGIW1LbaNoW2CUitRy7wC5JWkmHwxuokvXTC%2B5v%2B8BjqkAX1cwf0eqi%2FJy3e7XQq5RWBxNjxB0zB5V18Jn9fuxWlK8NGy1DwOMo0IkgHjkS5jli1BsWSKaH2yRxtqo31ZeaTEacmaLeEJhgTFmvB3EKXVsAj2zpDHY%2BiCMs0YRuHWtEN7b1jY0nAVAERqOPMMKMZd932I04C0irnDfQZWZIkeseVidMTZWu6HVSMe9eeQ4Q2BSo2gjbtpypaeHQyCcmEyJ7Li&X-Amz-Signature=ab99b04c63574f2cb43a8509029c290056d7a20180ab69767ec7706565a6fb92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCJ6Y7C%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo9Rk9plHa79IcbrORZNg%2BJELk3BOMOb0bsQ%2FI7iMnQAiEAzsFxyiFcFxFkOzZ47LxEMoZv2FJToYZ76RTTtRa%2Bn%2BUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnPw0pFzKa%2BnK5Y5yrcA8anOdt6ZRvGGpfORj8fHvLXhqulVh0MInlrVdOKu8VIeC7HehGtujehMd%2BwNqi9ioQsPKLKWmA0IYiQlEyr%2BnrzLz4ohhBTLTBWAeONABsQ23QRhQb0tPNQQpmrEDgZxN6fOtxUyVBNLG1kwK7%2F8zd8dNQ9aitNtUxsnI%2BOs4rzdM2tK8XMdfDpVmIABIRsEn84Z9bOO52Uzy8nEmIUAL%2FxGxMSu2yj7z5OtrlIUbYpNzf5H3IrPMyyjnIa4FDwaSvVpdxl3z3LIUtxiDTj9WsXuIYYZphapZdjbJIYHoUw3FC5YQhNixONfPf6U2v3VfeX5gUhb9S%2B%2Bv5etae9s2pMhOFGt2WCkd0CowEhC1ZzjddH9FU0TbVApWMdiuF3sOEwztJid%2BtKe42tqhZEQs%2FKK9uz%2FYXXBkVDPRWDndT3TLb4HLASCMUZ2FRH226DNZrugvpm8%2FKGTUHxSQxI3IXekkShifVa26a%2BC4gz0%2FSVEH7lBXIeUFE5DdMcCxL4TcHPEZJZJpPkM1lxxlvF0soah3XcEbSUOZh3S4faO1XTIb8CcNfAxcn104lpFMwRyItF9gVWcZ1Ek3Z%2B%2BuwNWg%2FlEZV2rrEAgfMFPTL1fQU%2FWNM3aS%2BVlTsKnlfBMKTm%2F7wGOqUBAjMtnreLqVo5bsYSlaijFUnfO2yGZzzsrDHFmDcKXsau9BZumF2Ib9MXejn5PhPehA8EpusWTm0fvvObLcm%2FMXlqqc0tsKhc3PQW6l454Q2FQBO9wRQsmMnT9TGIZoocG8DEldRNkAajkigLaiYcDCFQVmlW3Npm16RsdsuO1IkKtpnlRByMJpyRJacHLun5fTNXJ4YAmNr8Ky0bCn6DWH1XU3a2&X-Amz-Signature=8e0c71db2dd17bf8ce2422da2326b6dfbda0034802d9b7f418d71f7d9a587d62&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM6CBK3H%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBpaZz2qcu81CTyFg5Rtak6riaH7mQK8rX%2FJDBFJBeNAiBU%2F2gLKNApZF42hocXdsFK7b5I1tEDxBsvWybBeWxstCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiOLxCjpgrJAeH2YTKtwDrnEg79D%2Byz0FfZbzILbEOrA%2BYsxiU%2B8hV0PZt4ARgZj6JDdFAfKo9QTMV7pR0u2RPUIJ8Nd1hnvRTi%2Fu3eLL%2BZNa4acyMFYFFyzzaBJwI00jlbPxGi0xzkjOBqsXxLL%2BL1aPJscz0vd6oooRBa54HTlGM6gbprtM8u45ecnQ8e0RNxp2FWIYfIj32wwqI7hEs4wGmXTG78v0cxL%2BQLpusGqmeQlw7hT%2FMCLWRGn%2FtkSbhgHXp6dZFF0P5fAxJLmf2mGCUpjRU1btLoY%2BizMcF4YBm9sUT8lELRGb2njdLOe9Zd7XjcDFqLYu9pRaldjmHdSqvK0%2FsozDN%2BF6mm3zs0501VckLNZKRHTVLmXyyZziwHDyRaVF2ID5GKKz3%2F7RZ4MxZxlTnGNojrxyqc0KYcPbZRVFZUi9yk8GJ1bOduJxhOA5aonaAT3%2B11uQbSD43cK314588EEWn7cFaquTqO5Ur7cdm1TympVA51ErOgnIFZcFSM3v2WMjAq8VvUQACq0w8tPTj%2BobWuCQDZN8ev8JohmvEH5jsXDi%2FJQgVRMtN3tQ5n0byearHBoFsqlYTduMwQ6XlpeYp8paUuD6a76la7EsTYUDQ%2BdyRqFsc4rYp01qLiMsMpSiYecwxuf%2FvAY6pgHZLOHgOcxRXUnkZYvH4XmD8EycD8LIMIy1GvYx9ZgOTV9dPt3%2BGq0feugzuBU4sNA3RMBRL%2Folg691Xm9vkkXCDM0GOz6Wf33fTeQMpBmZORsuF%2Bh0QTMKHJzEW2POwPh3sdl9N2M5Jw0cKwSNHkZK5Aky5ZWRWVLymt1FKzsW3GHHP9LkuYyluaQwJ%2FbODsIjaChZ9zcDImSHMsVQ6DssuYocVxBQ&X-Amz-Signature=686e8ce50a1e4e41c03f51ff15b9d7c068871e99d470d771230118a2801b8b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAFO3DTZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsSUNQefwPwCE3ENKlTxa9tp8Ji5xlsM9HhlASIcEEMQIhALKzZISs%2F8ZSFIbg8IjMsJyAeoBHW1xx5dndcwPKWTFOKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmyqPtV45Iauu7WGsq3AO8BoelZEmnbSS5CUw6McN7KqlH3lbu4pnl7aGsuDi9LtlYUcrxnin%2F2UnOY6%2Bhz2THwgn61RFcA1e0r0tVUsAPiqZILfQnagC5wspkJsQ9acqKS%2FvDh%2F%2BvtboRDNxrt1ob6hbk15mUwHjKbO5qVKj0u7IZDQFhze5LIbnrqMSrLmtL1RrJQ0SiaUTkzggYFQGHG%2BO2D6rWVlJ0WHuRJCAoMnP48D22x5M%2BqmyiVvESDwZVvaaiz14VLYbKwhkIKohUCXL6zIrUXuDLuZdYYj%2BEEgQQJvk40fUDSNuEt1KnEdZZW5BwWoJmVgcDtlJPTUp60TioGbRbQ0i1QGPwbA9CBighFpLrAOObBbWP%2BJZTmlLrSf46%2BxYghc4AzQhkb3yCgpw%2FfJP6lthXkfBGU6dclYhwERkNzuUI3rz9JIvdbVCOWRBWHfhA89T5eDEr6oybFiIX1XI21qNm6eqknxujWW3QRKXkII269KwSE%2BCZar54DIiLZAHnGNPJ5wBRF4B72jqh%2F0yvi%2FXZl67Mlq1DTS6kS3uxUuV6eQEmqxQMACCkO3dZWIbI79uar085YZyDlYXzzjS6E1E0MjcUkeM66pDTGIW1LbaNoW2CUitRy7wC5JWkmHwxuokvXTC%2B5v%2B8BjqkAX1cwf0eqi%2FJy3e7XQq5RWBxNjxB0zB5V18Jn9fuxWlK8NGy1DwOMo0IkgHjkS5jli1BsWSKaH2yRxtqo31ZeaTEacmaLeEJhgTFmvB3EKXVsAj2zpDHY%2BiCMs0YRuHWtEN7b1jY0nAVAERqOPMMKMZd932I04C0irnDfQZWZIkeseVidMTZWu6HVSMe9eeQ4Q2BSo2gjbtpypaeHQyCcmEyJ7Li&X-Amz-Signature=a5ba60e51121aca5c18f3d2c6730bb8353efac79200f5eefe1f4a391e4038ba0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
