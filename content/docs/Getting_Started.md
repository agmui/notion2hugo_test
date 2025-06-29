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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEQNEI2%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDTX8d5z%2Bepeb%2Bkn5PlG4E%2F2UeuMA%2FsA7t0%2BmSvIKKgIgNywzH1QT7WxL9k4p3gomQ00aRc82c%2Bng1vNByoTVwiIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMo%2B3DbKVkqodTLNGCrcAxeEB4Fo0c8wvgdB5mB4DI47uSUjKor8gCjbIBpBCNa%2B4aYI38%2BHSro4okSUQEgtQSG1QyiMcimsU%2FOdwCmNpkhf2gmhMj5D5nulUnqqc4pM64%2FxH5LWoYI8DTBGK5unAbk8%2FGlQe9j%2FYrxJvmIZsehVIYT23v%2BU0%2FR6BRpw3TecwdSDfj0n5dCsWy1WajcDceXr4t5sm0uxMi1fPyMKZR53yZFroR6KvIXDigNqPgp81N2crn%2BNQRl0PYVM%2FCWrBXQC%2FqumElQxuPuXO2wRnWJ9F2wbWgeOduuvJtgd1gstKTho9FxIcAPDOsNNWDETw7Qx7SNaTOIBbTUlVp5JAMJ9o9UbJMFkEyOVPPT2DQTPO5WodJvOhaool164skX96sIoE372%2FnkGn68uvFNHo2TIwDd8o3%2FEUy7cnsPsNar4t2%2BkdNWGltmmNS2iRU9ejgxkXGsL%2B2eYgm2e%2BLRfSIs2mWzQdGQD2LC3oUIBey%2B4ew%2BHRJxMDlGdXPjjEO%2F4yxWtLwSuCTLYT4C8OnsMeUfUI4uR4snfIIWxPEVCPI014TQiBIgCBHuv0pyZUppTxuj5AtaeCUjiyWMQXiTVbZDscqdSiKBVfFG6M4nEck7wO%2FWPpcHU%2F%2Bto17elMKzNhsMGOqUBEfmFm2AcwKafQOE1We19Ks13d1qahm8M2jgDDdtoSQUTnJbYwSLJxHCVjzrKSgAM7LiEFrzVY9sw6oDmnQeL2N9MhQGNoqARQ78v95kJ4KJFhxogo3rgi20E3R0%2FmmTaFIXjugMPj6B0htcm%2Fof0YL29kb9FGyS%2BdPIoQqdvFKJGWym2ir05MgQrODXMUIU3pPPVkJdHK%2FY%2BifjmJpTtWKpbbdHP&X-Amz-Signature=3b86070104c63e9e0ede2aa184a08c888008e43774075e460438c5c68c1b3c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEQNEI2%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDTX8d5z%2Bepeb%2Bkn5PlG4E%2F2UeuMA%2FsA7t0%2BmSvIKKgIgNywzH1QT7WxL9k4p3gomQ00aRc82c%2Bng1vNByoTVwiIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMo%2B3DbKVkqodTLNGCrcAxeEB4Fo0c8wvgdB5mB4DI47uSUjKor8gCjbIBpBCNa%2B4aYI38%2BHSro4okSUQEgtQSG1QyiMcimsU%2FOdwCmNpkhf2gmhMj5D5nulUnqqc4pM64%2FxH5LWoYI8DTBGK5unAbk8%2FGlQe9j%2FYrxJvmIZsehVIYT23v%2BU0%2FR6BRpw3TecwdSDfj0n5dCsWy1WajcDceXr4t5sm0uxMi1fPyMKZR53yZFroR6KvIXDigNqPgp81N2crn%2BNQRl0PYVM%2FCWrBXQC%2FqumElQxuPuXO2wRnWJ9F2wbWgeOduuvJtgd1gstKTho9FxIcAPDOsNNWDETw7Qx7SNaTOIBbTUlVp5JAMJ9o9UbJMFkEyOVPPT2DQTPO5WodJvOhaool164skX96sIoE372%2FnkGn68uvFNHo2TIwDd8o3%2FEUy7cnsPsNar4t2%2BkdNWGltmmNS2iRU9ejgxkXGsL%2B2eYgm2e%2BLRfSIs2mWzQdGQD2LC3oUIBey%2B4ew%2BHRJxMDlGdXPjjEO%2F4yxWtLwSuCTLYT4C8OnsMeUfUI4uR4snfIIWxPEVCPI014TQiBIgCBHuv0pyZUppTxuj5AtaeCUjiyWMQXiTVbZDscqdSiKBVfFG6M4nEck7wO%2FWPpcHU%2F%2Bto17elMKzNhsMGOqUBEfmFm2AcwKafQOE1We19Ks13d1qahm8M2jgDDdtoSQUTnJbYwSLJxHCVjzrKSgAM7LiEFrzVY9sw6oDmnQeL2N9MhQGNoqARQ78v95kJ4KJFhxogo3rgi20E3R0%2FmmTaFIXjugMPj6B0htcm%2Fof0YL29kb9FGyS%2BdPIoQqdvFKJGWym2ir05MgQrODXMUIU3pPPVkJdHK%2FY%2BifjmJpTtWKpbbdHP&X-Amz-Signature=4c281ceb5c2bcb59fd2a5731f3d4853394028b38089a79c55e04a82807580d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEQNEI2%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDTX8d5z%2Bepeb%2Bkn5PlG4E%2F2UeuMA%2FsA7t0%2BmSvIKKgIgNywzH1QT7WxL9k4p3gomQ00aRc82c%2Bng1vNByoTVwiIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMo%2B3DbKVkqodTLNGCrcAxeEB4Fo0c8wvgdB5mB4DI47uSUjKor8gCjbIBpBCNa%2B4aYI38%2BHSro4okSUQEgtQSG1QyiMcimsU%2FOdwCmNpkhf2gmhMj5D5nulUnqqc4pM64%2FxH5LWoYI8DTBGK5unAbk8%2FGlQe9j%2FYrxJvmIZsehVIYT23v%2BU0%2FR6BRpw3TecwdSDfj0n5dCsWy1WajcDceXr4t5sm0uxMi1fPyMKZR53yZFroR6KvIXDigNqPgp81N2crn%2BNQRl0PYVM%2FCWrBXQC%2FqumElQxuPuXO2wRnWJ9F2wbWgeOduuvJtgd1gstKTho9FxIcAPDOsNNWDETw7Qx7SNaTOIBbTUlVp5JAMJ9o9UbJMFkEyOVPPT2DQTPO5WodJvOhaool164skX96sIoE372%2FnkGn68uvFNHo2TIwDd8o3%2FEUy7cnsPsNar4t2%2BkdNWGltmmNS2iRU9ejgxkXGsL%2B2eYgm2e%2BLRfSIs2mWzQdGQD2LC3oUIBey%2B4ew%2BHRJxMDlGdXPjjEO%2F4yxWtLwSuCTLYT4C8OnsMeUfUI4uR4snfIIWxPEVCPI014TQiBIgCBHuv0pyZUppTxuj5AtaeCUjiyWMQXiTVbZDscqdSiKBVfFG6M4nEck7wO%2FWPpcHU%2F%2Bto17elMKzNhsMGOqUBEfmFm2AcwKafQOE1We19Ks13d1qahm8M2jgDDdtoSQUTnJbYwSLJxHCVjzrKSgAM7LiEFrzVY9sw6oDmnQeL2N9MhQGNoqARQ78v95kJ4KJFhxogo3rgi20E3R0%2FmmTaFIXjugMPj6B0htcm%2Fof0YL29kb9FGyS%2BdPIoQqdvFKJGWym2ir05MgQrODXMUIU3pPPVkJdHK%2FY%2BifjmJpTtWKpbbdHP&X-Amz-Signature=e5a67dea39c2490172f682b8675802f9bb473bdaed29524548544cb932c795b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LICCGK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAllo16x7E59yHpjkaTk6kOqqFmYcVBc0mnHWl71DkogAiEAurApvHQ43QNxxvtwaNnhpeuObZhTNE7cLpuRcquSUVQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhOAWm%2FfEOLFyXCJyrcA9ct552E8KdSWJ0o6HAFbVZp3KCe386q4ytQmaFwKkYT8wW0sl0gy2IKV1K3r91EIw%2BDcfgh1EOjIrtWCyjafmKdDz3kRZj93V9nNxvEON1gbUSI6Gstn7e79fq%2FUmHKSl8x3FaAB5zn%2B9kuUciLFXmFZ%2F9IdBGcG8U9xG6ZnEh4e%2FSygZJ6tvsSPUSMSXBnoZ1fNcUMgYcQh%2B4hFA0gzpUZJQIHaubUnAFNHzMSBt%2BbiWvLUgs%2BcmBZpzsBt6ge10DLHe3Ug5xbZWal8GgKIFjg5jx3yQVFY7zSymbni8JpT9l5%2FaaQYBZ7KiF4MpsM7BeLH5zdqx2VFsawdPrMrMmBXua%2B5%2FYULIaGb9Ia%2BMdHFXu8pHtueizGEFoAmiltUI7KdEjISqbtfK2qOaL8szZ%2Fut4U9os%2FPxlLxsi0DkzngwUWHdLwZT%2B47s1yGs1MKZmpjd1T%2FOMIaJCW%2FhC42J4sNtK5AMkKORUip%2BbO%2BcUIuUyLbrAXwt3jxv8Xmv%2B9pPL4Rei1p2uj6fw8li294Wb20DV44NyWGPRBH%2FAMr%2FpqAVL1unc2B3ioF1kD9t0uPJnNJPlQp3mYn4hD6BUggl6mTrfQGNjiAfX3x79p3BXzyJJ06qSdIl9NaSQ6MPrMhsMGOqUBUQWw99s22L1KEGE6GQePYCf4nuRfjwZ6iVaH2XKspUJ50Z1ErwHSF7dp7Igdv8l5jKsgc9TpSwlkigVAlGK7iyaTKTSYiCrKa50sQJndJUgZN3BHT2ytYSaIYFzBSIk8Dp%2FKrjgAuRguCIltN8pRl4LsVaGIv0zTTCWPHGLC8ljokbiQmreSqETMBSgKcgrlG0lhpIDSseyKGkaUgRn3A17NSFxQ&X-Amz-Signature=4367c40657731e76e16778bd8e43e8a0864cf10049ba11eb45f7e690ef32d500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZU7UPK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9QREzK9%2FlY0ZolCfg9fxbpPoDpdBNo9WnDxB%2FE%2BzJKAiEAgUwGgcRC4%2BeN370o%2FioO1wFCb%2BxPciIO5Avi6jUbuxsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FKIC%2Fj%2FmuI45DbDircAxpkMUOflFu4JJECc6T22EyHg07YFxvPAED%2BcnjXi9t2%2Bomniwf1UCcOvDC3NtCCcYqOEtB8bjSPS%2BzScDyYZMYoe%2B7ieCFJUoqgwp%2F47C0GzTBofKVDX%2BEZyYXkGkQmTZbqMKE%2BDnfDXLQ%2FZDG2A0JjqhUbyrA63qVb86s%2Bnq%2FRhy9Gx5RhIsGpMUayepyjnj7jh6KG4Avvwlq6jEBJbBg%2B6d35tMU0UanifNo3hy005sbuZcms3eduXvuDZGdzenzqK6IqJtoLPCZ8ZmDtXu2%2FD3z%2B4Y%2BPrybYu1yuOUz30QHsaKdlC05NVn4aULFwxSSvS4hOSr%2BjhEb%2FfMUoA0Wq6CFSBEA7AI5a1EWf8I9tcf4%2BQSs06fdexntshkS18t9JkZ6QpRzMJ%2BoCJFEqgCjScVA%2Bcv8V7UKz6eYkDuLptZyZ9lnmggqqrfQf5y0ArIVnTZYo5d3mJ7ioA35Q7x6hXdhVqn3UcqlIej2GEzXuTDOuCPZVqZQ%2FGcGbELic26RjZ%2FD1p07x9IYyFiZdw82iPGnbEXAd88cj2mcB%2BtGzrjlR7Za8CVABpQ1wO0Eokr564sXtfZFlsucl%2F4NFZUU4hWEFOa1fc0lDrYnzK5ZAs7BHT6uQ9J%2FEWl12MLfNhsMGOqUBWUFcokb%2FzGbDv%2B0dW8nF2g2GZaO6AFelfBFEIQAEPP9S92XgMjhV772ymplL0lcfgkVmqLgb19QeCeBWIp3xAyoF2UGHjPCFxhOBpi%2BIyToUZSfgfUQvMAA%2FuLbRUzAEZRH1XMWNn9cHyWB3O2muJLBOkb7CRxymSgCygQ5KxBmc3pIl3ogCxltEiGwu9xbmYsg5qLN8b1L7Yfa0iRoE5dSHBbiY&X-Amz-Signature=944233ff05912b1af6b90243dd72136ebbd66ca0b0a165109b672a9a9e9af67d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEQNEI2%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDTX8d5z%2Bepeb%2Bkn5PlG4E%2F2UeuMA%2FsA7t0%2BmSvIKKgIgNywzH1QT7WxL9k4p3gomQ00aRc82c%2Bng1vNByoTVwiIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMo%2B3DbKVkqodTLNGCrcAxeEB4Fo0c8wvgdB5mB4DI47uSUjKor8gCjbIBpBCNa%2B4aYI38%2BHSro4okSUQEgtQSG1QyiMcimsU%2FOdwCmNpkhf2gmhMj5D5nulUnqqc4pM64%2FxH5LWoYI8DTBGK5unAbk8%2FGlQe9j%2FYrxJvmIZsehVIYT23v%2BU0%2FR6BRpw3TecwdSDfj0n5dCsWy1WajcDceXr4t5sm0uxMi1fPyMKZR53yZFroR6KvIXDigNqPgp81N2crn%2BNQRl0PYVM%2FCWrBXQC%2FqumElQxuPuXO2wRnWJ9F2wbWgeOduuvJtgd1gstKTho9FxIcAPDOsNNWDETw7Qx7SNaTOIBbTUlVp5JAMJ9o9UbJMFkEyOVPPT2DQTPO5WodJvOhaool164skX96sIoE372%2FnkGn68uvFNHo2TIwDd8o3%2FEUy7cnsPsNar4t2%2BkdNWGltmmNS2iRU9ejgxkXGsL%2B2eYgm2e%2BLRfSIs2mWzQdGQD2LC3oUIBey%2B4ew%2BHRJxMDlGdXPjjEO%2F4yxWtLwSuCTLYT4C8OnsMeUfUI4uR4snfIIWxPEVCPI014TQiBIgCBHuv0pyZUppTxuj5AtaeCUjiyWMQXiTVbZDscqdSiKBVfFG6M4nEck7wO%2FWPpcHU%2F%2Bto17elMKzNhsMGOqUBEfmFm2AcwKafQOE1We19Ks13d1qahm8M2jgDDdtoSQUTnJbYwSLJxHCVjzrKSgAM7LiEFrzVY9sw6oDmnQeL2N9MhQGNoqARQ78v95kJ4KJFhxogo3rgi20E3R0%2FmmTaFIXjugMPj6B0htcm%2Fof0YL29kb9FGyS%2BdPIoQqdvFKJGWym2ir05MgQrODXMUIU3pPPVkJdHK%2FY%2BifjmJpTtWKpbbdHP&X-Amz-Signature=681fa17031af6a4cb5ddea473b125f68f2461e334f2318c356370f255ef7359d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
