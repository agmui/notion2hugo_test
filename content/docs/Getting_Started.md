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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLAUDYX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXRhmhfNj6WqBBK27oJofD1qw6aQAmtgyj6ybHPHn83gIhAKaWTAvyqxz8UF9h99QYVTfa%2B7OFmOZZL%2Fe%2F%2BYvT46I8Kv8DCBAQABoMNjM3NDIzMTgzODA1IgyFrKllcadFsaFaKAwq3AOiE02AEPRwDGcrK4T2Zu55%2BQTcbR5CIFwOtBVL0ZasNAKbjBcQsAw7HwMDjfpFoWvZSVT43f0Nl7JHt%2F09xI8buReiexagRJRSNCnYF9Gu4bkD%2Br%2FMmh1A1SAm8hulE4Pq6abG99W1iSm6XClCaOzIArGrwq%2FWEGRFzh%2F7Ek8zSNXKqcdDUrWiFaxSsqIe4U6582QtywPaytTtWAU%2BhVCYLm3Fy5TvBoIykRBU1XIpIhBTPZpuOWNw7DfaHfi5As6n0HK7FD4%2FKyze2VLofMsVff4HQMENFo%2F%2BB%2BZT327f9kDI9U%2F%2Btkw0rPFm0f7K%2FtxWH3xUhplhXJKSf2YOB%2Beg56nPiJdPvSvY9kuNGcyFW5qGu4lVw0CKp8Ao4aRYcEO1PjbTQI705%2Bn8baPdR5Gi4j%2BU%2Fgp%2B7rQ%2Bxmu0Cag3HXFI6m1O7do1zktAM94%2FMsWXcGORBVnz5Iv82dowgFNF7hShADwVuS2CIcf%2Bg1RrMBUWElDJqRJOHrPW1Iy7KtEvpBmK%2BpTikuMUuT2vh8VFwEF3kFvb%2F9eUuF%2FlHp0HbjLXSPc4mtrwkAtucG7Ffgm5eBYpNbO6P8tyLNy2bPIqUfqFr76Hhkpynuv5aO2YtoBNwuQpJL8DtZY74jDJ%2BL2%2FBjqkAbeAemdLi6hkmZUUbGVOdrvyu8yJyz6jULE3c%2BF%2BfXht%2F3e1ebgINW5PER9hHdLH9D6a6GcEf9Cxq28Rl%2BZS4AzK4tPc%2FLB13p0FOgb72RUx2fHu5cMhiCy%2FJ69t1eLalpy06S5s7tM8LGkSxtVBcv%2FUBfOcoc1LTdiEI9%2FzAEiaKvKik1FTUPPWLEp9NBmVwL3EZNIWZaLtnmkb6gVGMQ35Mx4P&X-Amz-Signature=4cbfa699e2289e234e8a869eaa96a5b512b11f70a3f11a095e16dc01325931bd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLAUDYX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXRhmhfNj6WqBBK27oJofD1qw6aQAmtgyj6ybHPHn83gIhAKaWTAvyqxz8UF9h99QYVTfa%2B7OFmOZZL%2Fe%2F%2BYvT46I8Kv8DCBAQABoMNjM3NDIzMTgzODA1IgyFrKllcadFsaFaKAwq3AOiE02AEPRwDGcrK4T2Zu55%2BQTcbR5CIFwOtBVL0ZasNAKbjBcQsAw7HwMDjfpFoWvZSVT43f0Nl7JHt%2F09xI8buReiexagRJRSNCnYF9Gu4bkD%2Br%2FMmh1A1SAm8hulE4Pq6abG99W1iSm6XClCaOzIArGrwq%2FWEGRFzh%2F7Ek8zSNXKqcdDUrWiFaxSsqIe4U6582QtywPaytTtWAU%2BhVCYLm3Fy5TvBoIykRBU1XIpIhBTPZpuOWNw7DfaHfi5As6n0HK7FD4%2FKyze2VLofMsVff4HQMENFo%2F%2BB%2BZT327f9kDI9U%2F%2Btkw0rPFm0f7K%2FtxWH3xUhplhXJKSf2YOB%2Beg56nPiJdPvSvY9kuNGcyFW5qGu4lVw0CKp8Ao4aRYcEO1PjbTQI705%2Bn8baPdR5Gi4j%2BU%2Fgp%2B7rQ%2Bxmu0Cag3HXFI6m1O7do1zktAM94%2FMsWXcGORBVnz5Iv82dowgFNF7hShADwVuS2CIcf%2Bg1RrMBUWElDJqRJOHrPW1Iy7KtEvpBmK%2BpTikuMUuT2vh8VFwEF3kFvb%2F9eUuF%2FlHp0HbjLXSPc4mtrwkAtucG7Ffgm5eBYpNbO6P8tyLNy2bPIqUfqFr76Hhkpynuv5aO2YtoBNwuQpJL8DtZY74jDJ%2BL2%2FBjqkAbeAemdLi6hkmZUUbGVOdrvyu8yJyz6jULE3c%2BF%2BfXht%2F3e1ebgINW5PER9hHdLH9D6a6GcEf9Cxq28Rl%2BZS4AzK4tPc%2FLB13p0FOgb72RUx2fHu5cMhiCy%2FJ69t1eLalpy06S5s7tM8LGkSxtVBcv%2FUBfOcoc1LTdiEI9%2FzAEiaKvKik1FTUPPWLEp9NBmVwL3EZNIWZaLtnmkb6gVGMQ35Mx4P&X-Amz-Signature=3bf08eed52778d91a8e85d05689145be3f081ffb5c25aaeaa74fc7e091fd37e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPVXT7MQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLG5mBraiQnFrzvGF5OACw0tXvPR4dkBH831l4gYMMpAIhAOBNkOrwDo6jhcgZcrEXk5TBRU8si0yC%2FXFqwQk%2Bu9s8Kv8DCBAQABoMNjM3NDIzMTgzODA1Igw%2Fe9Wp%2B7NP3KIfyH0q3ANKHVc71o5eB8%2BMxsNUiAd%2Bb1F5WMy26hG5ai9bsytbQ7sL39UKW0evVhjLcZdBHjNcq9OXheSGfP6Ck8hGdSb8XsXyBmO6pnez1Unwz7YLDiVylkWQsjl0Za96NuIP8w8wwBCXKJKk11bpSEtr%2Fd%2BtXtKgPpGiaMn%2B16D4cxenOFuvJc%2FzIZIPjSbQqXE3Y9tiVopDlHTZ%2BZ%2FL6M4Wk1nf2yrs7vFUTGBeHN3FyEv6YrmWF9IX0QIyrw7kCIe4x%2FCfPRwBGyScttoMwMeQ2PbBV%2BmJeJvaX%2FosiDX75b4i6GgZ%2FcvsCnHw7WBW61FmCCP1jSBUHenDOD%2FxPIhCidWHrBAnq5%2FUIuOIdyLfmILEp1HiJ3yfDx%2FyYJooW5oz2fPr7uazqy6DWCce9sEMbKrK9FJBStaTofQzDVbiCPT%2FyPF6WW4fqs%2BEt0X5fz1XjSdUeoQkrNs8cZchFuXMffv%2FKP3XjX3lIhgIQLIYDkt0C0efSbSr2Tj%2Fu6ZPnLpKiXTLIV%2FdEEbRs5E%2F5NjrR3HnyLTEEQ8%2B7BBHKs2VKV6LV7z%2FBNcvNxc5B852vM8An45s1geHTYMosj2Rfo2lMMujlfEnnhLrZJgEe26XQgoKG7vamfRD5RDvJuAbtTC%2B%2BL2%2FBjqkAWKq3%2F7oKyRqsXkgd7QSNHQTtNYyqBAWUXD%2FNk8VrcgeQVo2hgVBh%2FHPfiRXWO%2BfJMeiafYoqMUYIi%2F6z53OAytiR9F%2F6s3pDetzlj3CaK%2FGThp64fV5qpeIW%2BvFOOK0vgbJGV7L%2BhbiTEy59TxfXCk1%2FL7xwpO40aOhAOXKC3D%2BAYRCz6rKWG6apV9EeXrOUHYXQc1%2FbpTicWs1kpRndb0s%2BrjJ&X-Amz-Signature=e90b9d52cc771cfd5586e2cad331793c35d7ebb2f9923dc439bec943bd1c16e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMTGOJHB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuH%2FDG%2Fx48lvlK2ZCNoGQ4n5Csyu8gWPNaBw%2BxUrIb7AiAjtM%2BcQQPX1DCLo2sBzTCn1UA9EP0uwLfY3hgz0mxLRir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMjtlSrGsyI6MSGehGKtwDKftKXN7aTMMJBn2k%2FtR9l0m%2F4fpdSp8Ao0kIJvKuZLA7SEUY%2Fi2JeLq4uZDfT%2BPUEEYWTEbIze4sHgDLkE0z2m29%2FBRQysdHs2%2F4KuyirymcZJE5rmKCpU8t4Gp5RUZaOeKq1XUQTCpdLH%2Fs%2Fc4XsOSJJM1jJy0d0DCi6n%2F0JO8rZ3Q%2Bwl3RDk6G63r65%2FN%2FROfbn%2FBqzZQWgKU4gD8eA%2ByuXjb4LYwQE6fE3jAD8Rg0gadXtR4Mv6QL7kUysBd5%2FYc%2Bh13OTimbcK4RdP9sgLudONYNW1qfb6hSShF0PUgrwZ1yFy%2FyRcBGW4m8no%2FdhwEMIeotCbPaONJGMJgQ9PbgKvkQzQDYzPrOjFx7EtI%2BrIHA01S1H25f2IYgSHP17TDumToJQdMMf5EpwpITjt6y9%2Be88jlWVHhlv6jFxpIJm%2BvmnKGsuBeJEHS5VuhfhHj3WTczxgaPnhmgnQZ%2FzR0IJmGB0SYiJptNnjN2pNkMUh%2BVz74oPzW2DCRC4XsbcEScm%2FIeMkMMG2n%2FY6ZOBxSs0hn%2FTKFqZzLlYQqPH6VQn%2FPN1FwLkiO1Cr8Ayu3Im34zrsXNTcuzkf9vLfXTPLPi5DvJXcCGK2wJymm1BNiXHLQLgy3UkbYjvLowzfi9vwY6pgFRdxakpcRsUyEljvrJtlO2NtGOcbesJRxXhIeJAuJNList%2FLr7Ckay34tnjUsvOVHbxn7WWp6youiDbmHgvGu6N6kfQgOWRG17vhvebCVNMef6FG3G3rsg9KRlD6ALR2mZtcrvxbzvATXgPd10yj%2B6REB2PIe5SgDeX2ZkvHscPW1AUUGFCr7S9Wl5xNPat9jCDUa9C28KZKWQJgkhKWERKNN5pKZG&X-Amz-Signature=344cddacce6f328c5c8f7bbe77058e93685de55d3cf35cb5fd8976ace590313a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLAUDYX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXRhmhfNj6WqBBK27oJofD1qw6aQAmtgyj6ybHPHn83gIhAKaWTAvyqxz8UF9h99QYVTfa%2B7OFmOZZL%2Fe%2F%2BYvT46I8Kv8DCBAQABoMNjM3NDIzMTgzODA1IgyFrKllcadFsaFaKAwq3AOiE02AEPRwDGcrK4T2Zu55%2BQTcbR5CIFwOtBVL0ZasNAKbjBcQsAw7HwMDjfpFoWvZSVT43f0Nl7JHt%2F09xI8buReiexagRJRSNCnYF9Gu4bkD%2Br%2FMmh1A1SAm8hulE4Pq6abG99W1iSm6XClCaOzIArGrwq%2FWEGRFzh%2F7Ek8zSNXKqcdDUrWiFaxSsqIe4U6582QtywPaytTtWAU%2BhVCYLm3Fy5TvBoIykRBU1XIpIhBTPZpuOWNw7DfaHfi5As6n0HK7FD4%2FKyze2VLofMsVff4HQMENFo%2F%2BB%2BZT327f9kDI9U%2F%2Btkw0rPFm0f7K%2FtxWH3xUhplhXJKSf2YOB%2Beg56nPiJdPvSvY9kuNGcyFW5qGu4lVw0CKp8Ao4aRYcEO1PjbTQI705%2Bn8baPdR5Gi4j%2BU%2Fgp%2B7rQ%2Bxmu0Cag3HXFI6m1O7do1zktAM94%2FMsWXcGORBVnz5Iv82dowgFNF7hShADwVuS2CIcf%2Bg1RrMBUWElDJqRJOHrPW1Iy7KtEvpBmK%2BpTikuMUuT2vh8VFwEF3kFvb%2F9eUuF%2FlHp0HbjLXSPc4mtrwkAtucG7Ffgm5eBYpNbO6P8tyLNy2bPIqUfqFr76Hhkpynuv5aO2YtoBNwuQpJL8DtZY74jDJ%2BL2%2FBjqkAbeAemdLi6hkmZUUbGVOdrvyu8yJyz6jULE3c%2BF%2BfXht%2F3e1ebgINW5PER9hHdLH9D6a6GcEf9Cxq28Rl%2BZS4AzK4tPc%2FLB13p0FOgb72RUx2fHu5cMhiCy%2FJ69t1eLalpy06S5s7tM8LGkSxtVBcv%2FUBfOcoc1LTdiEI9%2FzAEiaKvKik1FTUPPWLEp9NBmVwL3EZNIWZaLtnmkb6gVGMQ35Mx4P&X-Amz-Signature=afa8f004702492792c183a7d2b7d730de6ade41727f9191e9f212eca9f82b736&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
