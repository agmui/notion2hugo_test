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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFNTEQG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjStiGimQY13uukOri4mCE4hQqXN%2BMYAh7FAyzfoyx3AiEAtVMS7xXiftN6UDGA2BhUS2w3gqhtMoFMUrP%2Fd6LkwZEqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAtF2brtJQ1QZBxuSrcA7kPDnxZ5wpFUI8Qg1W%2Bix4qjLZ%2FAAF7fciyKcz8%2B%2BNAUqvl8ByZXDqcxov7Je8gE4mB5lpYt%2BRtAkgwjKS9ojYIGFrHqkWJUaOPs%2BYMuVAEi9J%2FIfK6epuDmK0b5GQRqQOz%2BcLJqwNGJpiuQnb%2Bp8LSyp%2BpBoqzajBv7nIGDd76Ke5kEJvs%2Bly13zB7WjejP%2BD8YjUmOYhZNycDyl54SpuzdEkLqBiASzQAFreQyuuTGPWa3UDLmNaKNBXC0sjgTVmsx0ZGJcB8x6FXoEu9yeHvD%2FWQOPbQ%2BO%2BOjLNVkRXburk%2BRGKBm%2FKFLggFFa%2BqeMEDQYg288QeqLN4AOgEyJsZeyAib3JeSppqFBNr7%2BMX6Fj9b5goa8BhFsUYQ4clGRqft171uf7xXgdi0cRppPEg8zymrT0W8XqxBCM6B1BVWMRG5by8r6ptI1Or6tkww5Lt4M%2BvqhOh%2FjTP%2BJl%2Fariepb6p1L8J0rEJ5K3zQRA7KwXcJoxpPQ34U6lcwL8%2FHJD9mGWl8Hfqbj%2BQ%2FOLfoponksWR93wFDvb4T7KeN0jcGHyDhOJC%2Fi%2FxV7N6JCxZl9St69Tuuq5CvjVV2aXIswA6HjECzCtaOqDfACLJtNdROIwJimqjBER2rTvYMLT45sQGOqUBD08nk%2FhyVVjZsoCL3zIos43DXhdahX6%2B3BSvtJBH1T2ms8g51aRTTHiWFgjoBzxZDtxWjYXw7qlZyKPBASY5QA0aesKNTGYCr%2FVridmwNs3R3SW%2FHAkgBBeDiw%2FaYfg9gza93wJKN6W923PBwE93mM6UoSXiBztW4JbTxF%2Bc6%2Fz%2F2gD1nfBe5IswPYiEzE04aRgcsRnIfJeGIc92zMpiqSxaAHNW&X-Amz-Signature=788ecdb6471839e964424d87f8e92ee653076308fbaaf869663cd11d7562243f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFNTEQG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjStiGimQY13uukOri4mCE4hQqXN%2BMYAh7FAyzfoyx3AiEAtVMS7xXiftN6UDGA2BhUS2w3gqhtMoFMUrP%2Fd6LkwZEqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAtF2brtJQ1QZBxuSrcA7kPDnxZ5wpFUI8Qg1W%2Bix4qjLZ%2FAAF7fciyKcz8%2B%2BNAUqvl8ByZXDqcxov7Je8gE4mB5lpYt%2BRtAkgwjKS9ojYIGFrHqkWJUaOPs%2BYMuVAEi9J%2FIfK6epuDmK0b5GQRqQOz%2BcLJqwNGJpiuQnb%2Bp8LSyp%2BpBoqzajBv7nIGDd76Ke5kEJvs%2Bly13zB7WjejP%2BD8YjUmOYhZNycDyl54SpuzdEkLqBiASzQAFreQyuuTGPWa3UDLmNaKNBXC0sjgTVmsx0ZGJcB8x6FXoEu9yeHvD%2FWQOPbQ%2BO%2BOjLNVkRXburk%2BRGKBm%2FKFLggFFa%2BqeMEDQYg288QeqLN4AOgEyJsZeyAib3JeSppqFBNr7%2BMX6Fj9b5goa8BhFsUYQ4clGRqft171uf7xXgdi0cRppPEg8zymrT0W8XqxBCM6B1BVWMRG5by8r6ptI1Or6tkww5Lt4M%2BvqhOh%2FjTP%2BJl%2Fariepb6p1L8J0rEJ5K3zQRA7KwXcJoxpPQ34U6lcwL8%2FHJD9mGWl8Hfqbj%2BQ%2FOLfoponksWR93wFDvb4T7KeN0jcGHyDhOJC%2Fi%2FxV7N6JCxZl9St69Tuuq5CvjVV2aXIswA6HjECzCtaOqDfACLJtNdROIwJimqjBER2rTvYMLT45sQGOqUBD08nk%2FhyVVjZsoCL3zIos43DXhdahX6%2B3BSvtJBH1T2ms8g51aRTTHiWFgjoBzxZDtxWjYXw7qlZyKPBASY5QA0aesKNTGYCr%2FVridmwNs3R3SW%2FHAkgBBeDiw%2FaYfg9gza93wJKN6W923PBwE93mM6UoSXiBztW4JbTxF%2Bc6%2Fz%2F2gD1nfBe5IswPYiEzE04aRgcsRnIfJeGIc92zMpiqSxaAHNW&X-Amz-Signature=b62e279b0f78a788cd1abb26e3cc30135338371af8cfbcec216918b7144e9e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFNTEQG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjStiGimQY13uukOri4mCE4hQqXN%2BMYAh7FAyzfoyx3AiEAtVMS7xXiftN6UDGA2BhUS2w3gqhtMoFMUrP%2Fd6LkwZEqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAtF2brtJQ1QZBxuSrcA7kPDnxZ5wpFUI8Qg1W%2Bix4qjLZ%2FAAF7fciyKcz8%2B%2BNAUqvl8ByZXDqcxov7Je8gE4mB5lpYt%2BRtAkgwjKS9ojYIGFrHqkWJUaOPs%2BYMuVAEi9J%2FIfK6epuDmK0b5GQRqQOz%2BcLJqwNGJpiuQnb%2Bp8LSyp%2BpBoqzajBv7nIGDd76Ke5kEJvs%2Bly13zB7WjejP%2BD8YjUmOYhZNycDyl54SpuzdEkLqBiASzQAFreQyuuTGPWa3UDLmNaKNBXC0sjgTVmsx0ZGJcB8x6FXoEu9yeHvD%2FWQOPbQ%2BO%2BOjLNVkRXburk%2BRGKBm%2FKFLggFFa%2BqeMEDQYg288QeqLN4AOgEyJsZeyAib3JeSppqFBNr7%2BMX6Fj9b5goa8BhFsUYQ4clGRqft171uf7xXgdi0cRppPEg8zymrT0W8XqxBCM6B1BVWMRG5by8r6ptI1Or6tkww5Lt4M%2BvqhOh%2FjTP%2BJl%2Fariepb6p1L8J0rEJ5K3zQRA7KwXcJoxpPQ34U6lcwL8%2FHJD9mGWl8Hfqbj%2BQ%2FOLfoponksWR93wFDvb4T7KeN0jcGHyDhOJC%2Fi%2FxV7N6JCxZl9St69Tuuq5CvjVV2aXIswA6HjECzCtaOqDfACLJtNdROIwJimqjBER2rTvYMLT45sQGOqUBD08nk%2FhyVVjZsoCL3zIos43DXhdahX6%2B3BSvtJBH1T2ms8g51aRTTHiWFgjoBzxZDtxWjYXw7qlZyKPBASY5QA0aesKNTGYCr%2FVridmwNs3R3SW%2FHAkgBBeDiw%2FaYfg9gza93wJKN6W923PBwE93mM6UoSXiBztW4JbTxF%2Bc6%2Fz%2F2gD1nfBe5IswPYiEzE04aRgcsRnIfJeGIc92zMpiqSxaAHNW&X-Amz-Signature=cbdd88bb33e8b99dd94d38046c1810fe5a15fc79a7f0e89383a1d2ac89952715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLOGUN45%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkx6F7W%2BgaQvMzUTw6esr5BOFViOk5ZyFN7eqb67mRUQIgexbFyir16nSTXx2X21pwpqLiGCry%2FyBT2OnkN02RrXIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORuctlqWOZKKjgSkSrcA5xUkLZSWmnDh8r1ki4Fn3fODNLX8eegq%2FFVBM9Bpx4hWWnjjMqzk%2FlCE6gFKuKE9yJ5K8ISUdT%2B4IE2m5mgb4bcgbR84CdtnKYafU%2BLgvPCnv8dycEpaRzmLHsI99EM3chmPKWePzhU%2FUt10dxRQy8AkaK%2BaI5iOSq2Sb24z41jdwfdzqXMVrLjJv7bu0XD%2FdLxFrkjbxm9emFg08iO5jsy1fER%2Fj4yI4IE7f6VTiOvGcjociG1zOMeQFleadFpYwqhLa7sHFD01GQuYzzMRkLBXtH%2F1M9KEfEG8%2FHc2XMvvP4YkauWY9e0je7x0fxtzAoe4CgjGvw%2FUzoqzp%2FDgW9LwfYWgFsIq%2FzHdm251MvEjlAGzVAADRDBLXIGRI6%2F3dF5YIhZbizcESlvjpB3G%2B5oAPw8YDlq8Jzi73HIpAhOgjD68FIZioUwdj25qUZHt5GTtL952El%2FaZ%2FCmuX2MbTlwnx75sXZabqdZVBHvJvtdUoKErRAc07IpeE5ts3GGlZQA2C4qwJVSdFLwyRJ4y4pKRL1fUgU7znMqD7Lz8cy3AvzAquTApYddrt6r6AZydIkjnhvRMbqtXfZTL1DMQjEAu7yAIBWj3BAP4uIEp2gV6A9Y%2FQCq%2F%2BUJ2fUMJP45sQGOqUBWUjJPL2fz00i58ul%2FFB1MJ9cLjVZueIuQLlrHg%2FsjVsTPMg%2BlAGM%2FyaMVTZSpiHfnB7w4YtBldXclvxQAqWqcvZlf6HHlSReIN8F2mT6t5AtmouTdHh%2B8aH4O8mDPy8SKE5st5bhxP1y0w22vskyP4aOMnIJpP%2F9Ypd0ADkWJDPWJZQSc%2F6BWFgI%2BkCq2FTYge%2Bh3RcubKv9d0ZBktk3VeG3%2BpPJ&X-Amz-Signature=1947e6b647338d1eb60576e490dde43d701c907f109d90983b3ca51923fa2f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CNAWVQT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjSGu3sYWL8SI1mV5QErdcLofa4CwftVGPAwGhdso2QwIhAO1mEkNzWgswufWeBmC8d6h5ldGpJaKoMy3unwr0xsFjKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmN5PuX2Mt36Spi3Qq3APpf1vq%2FPTiirAcz9SkuEM9pBEF9fbL5s3U08h0ZpeTcRdVKTMMJV9vD3guz4SwjOCjhr8XFBXgJHnyeRByyz5yfTlNFp02k8icJ0ZmPcgmLTSxqwJC0aFxVMEwKBP6%2FtQtT%2BwNsk6kem7pb87l1XriT4OMPp3dpzzp3dYljinsH%2BUa1cPo09H2KC%2BF0HpX%2FlosYXjLrA0BW0EMbKqyg7FwGAMZk0RFarziZrwM4Ih5digcd7SeKbuUNVMVUAD0sYOlivP1qAOjbzHMRLco1nbq2qlXQ7UK0vkB038hA4RUXlk%2BRjGLh6fDbtbP0lEqY9hSsXpVSd9G4r46%2Fa3esOz2JyaCoPLBPvzb60h%2FuH2i0NvlN3oeyJO1tgi0Mtks%2B3ZTP5EsMI8IXqatG0CC5dlZ7SXllaFqhaFQQmhdqTaV59ZUPPFxV3YrvSE2NihXRN4DbbsD07xyx%2F7jHBBFOeSC%2BexHlMisuCJgzDCIKyqwS03BqlPRP19vBrO0JekuazHbX9zryub7k2CVcXREsmp2Q8GrW7Rk5g%2BwzhR%2BCathnhLUEWcJv57MS0AjoIfrSXeeP6EcTpTEwRKqhmaoQIyP608D9RYnFQz0sdLgb9en%2F3m6IMCfdd6s3H1QpDDh%2BObEBjqkAWYCTwZX%2FG33JfXeNWI8dhzFoJwI%2B224KoggLDdjae8ktKqxkL9p3MG0qnU5%2F%2Ff%2FKFTXR8IMI1T86wl9Z2BuVau5vte%2B895DARRp4swlg1zIgQ%2F78eaaIcDc7WIEYims8w9VcssW5CT61ug2RRhXUgFMPWjY6godPPJXFanZUYNUzcj9g287LLaKmcsHdra89xRvpQdK4zyzTFzAwooxxSePJmDm&X-Amz-Signature=9f80c6cbbfc1513413a9013483ce464876012c7232db76832193143bf563afb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFNTEQG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjStiGimQY13uukOri4mCE4hQqXN%2BMYAh7FAyzfoyx3AiEAtVMS7xXiftN6UDGA2BhUS2w3gqhtMoFMUrP%2Fd6LkwZEqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAtF2brtJQ1QZBxuSrcA7kPDnxZ5wpFUI8Qg1W%2Bix4qjLZ%2FAAF7fciyKcz8%2B%2BNAUqvl8ByZXDqcxov7Je8gE4mB5lpYt%2BRtAkgwjKS9ojYIGFrHqkWJUaOPs%2BYMuVAEi9J%2FIfK6epuDmK0b5GQRqQOz%2BcLJqwNGJpiuQnb%2Bp8LSyp%2BpBoqzajBv7nIGDd76Ke5kEJvs%2Bly13zB7WjejP%2BD8YjUmOYhZNycDyl54SpuzdEkLqBiASzQAFreQyuuTGPWa3UDLmNaKNBXC0sjgTVmsx0ZGJcB8x6FXoEu9yeHvD%2FWQOPbQ%2BO%2BOjLNVkRXburk%2BRGKBm%2FKFLggFFa%2BqeMEDQYg288QeqLN4AOgEyJsZeyAib3JeSppqFBNr7%2BMX6Fj9b5goa8BhFsUYQ4clGRqft171uf7xXgdi0cRppPEg8zymrT0W8XqxBCM6B1BVWMRG5by8r6ptI1Or6tkww5Lt4M%2BvqhOh%2FjTP%2BJl%2Fariepb6p1L8J0rEJ5K3zQRA7KwXcJoxpPQ34U6lcwL8%2FHJD9mGWl8Hfqbj%2BQ%2FOLfoponksWR93wFDvb4T7KeN0jcGHyDhOJC%2Fi%2FxV7N6JCxZl9St69Tuuq5CvjVV2aXIswA6HjECzCtaOqDfACLJtNdROIwJimqjBER2rTvYMLT45sQGOqUBD08nk%2FhyVVjZsoCL3zIos43DXhdahX6%2B3BSvtJBH1T2ms8g51aRTTHiWFgjoBzxZDtxWjYXw7qlZyKPBASY5QA0aesKNTGYCr%2FVridmwNs3R3SW%2FHAkgBBeDiw%2FaYfg9gza93wJKN6W923PBwE93mM6UoSXiBztW4JbTxF%2Bc6%2Fz%2F2gD1nfBe5IswPYiEzE04aRgcsRnIfJeGIc92zMpiqSxaAHNW&X-Amz-Signature=a61509204ecd75eb95d4aae5a63fde359e17f3e004304856d606c6ef52958785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
