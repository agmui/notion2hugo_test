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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDUY777%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLXM4KtBH1TskWd8tn%2BQCqr0OfkN5BXgwzQx7cJ%2F8w7AIhAJQ0NaY0iyUrOZXQKp1bTqenTY0dZFJfHRd0HA4PGlhcKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxusaPPDWckgUaESXgq3AO5thkFubbQSjVueXlgo9mInj5i987AvkmUBHGII6gUeNTD6eYWdpGj6JEHmNBS1gZlO1J1kFXX4Hi8JZv45kwX7%2FtgAeBlkMMbBQX%2BsgDGT0SdFRloFfCSsLN95aRzjVSZ13XKEndpknoZd1z69UuZDuvlXvUy%2FM6%2FK%2B8QStTi%2FpPdprAJFysuYNh80Mn9xs0UqZajO9I2s%2FkHKIC1C5uL6gJllEU2Q63coRfiwSqtMoh4M%2BNKEtmk2hcFVADCIxyL6Sy2sSHoUhWY3PtShM7V%2BRhyygGa0%2BT0Mbh9scP2kp8qQIeaj6nAPRxgvN2q5MAZN91rcVbHwr9tFBvTKf9FW500UegKQ%2Ffdlv51lU5tkeTdWRjV8rMXfxsp47FQxa4v7GZoPKiENveGDVd4yhYCQCX7g6jaVM%2BCaWbMUF0kJpNVtXlZOEPuif%2F2xpf%2BvU7QLDvpM1AjyJrg7DjFbAhC%2B5l%2BXyfQcBfSBpAjevmtjp8lybQNMKP%2B%2FYY0Uwv2dN5mbd4XnVSIpw5%2BtrtPFEfPeQixT3pOhBvsTnrBeQbXZVhU6wF5JveLOE9ifxLmVLxcS6hyWs9st59X5NoH5Egc5WDya8AHxVCKdkLS9vq92R1lCtiJpYpV%2BruS3TC5psLDBjqkAd7Nq5073Q%2Fbn%2Ftrfs7TSL32odDvw0m0Yl0ePp12sQGWYuCN3ZiF6EcBKX3KPWoIlRH4RjUgNncqMqGdcnBtAYviYMUg2qpud%2BaS912fFYrl0HnpZnqpeoY%2BpHnVMvjhvuIcrv50aSy%2BiMW%2B7%2BPb3djCtKZ8mItOmEDqRs0h1UHJ0FM0fpiSfm62wihdrzEmsx3jvPiVZCCOBdYeKrxyO1ZYSKWP&X-Amz-Signature=fc738cb022800c159c9ec23a2be8d70a147c70805f7e9ce9b8c2a670a03479b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDUY777%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLXM4KtBH1TskWd8tn%2BQCqr0OfkN5BXgwzQx7cJ%2F8w7AIhAJQ0NaY0iyUrOZXQKp1bTqenTY0dZFJfHRd0HA4PGlhcKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxusaPPDWckgUaESXgq3AO5thkFubbQSjVueXlgo9mInj5i987AvkmUBHGII6gUeNTD6eYWdpGj6JEHmNBS1gZlO1J1kFXX4Hi8JZv45kwX7%2FtgAeBlkMMbBQX%2BsgDGT0SdFRloFfCSsLN95aRzjVSZ13XKEndpknoZd1z69UuZDuvlXvUy%2FM6%2FK%2B8QStTi%2FpPdprAJFysuYNh80Mn9xs0UqZajO9I2s%2FkHKIC1C5uL6gJllEU2Q63coRfiwSqtMoh4M%2BNKEtmk2hcFVADCIxyL6Sy2sSHoUhWY3PtShM7V%2BRhyygGa0%2BT0Mbh9scP2kp8qQIeaj6nAPRxgvN2q5MAZN91rcVbHwr9tFBvTKf9FW500UegKQ%2Ffdlv51lU5tkeTdWRjV8rMXfxsp47FQxa4v7GZoPKiENveGDVd4yhYCQCX7g6jaVM%2BCaWbMUF0kJpNVtXlZOEPuif%2F2xpf%2BvU7QLDvpM1AjyJrg7DjFbAhC%2B5l%2BXyfQcBfSBpAjevmtjp8lybQNMKP%2B%2FYY0Uwv2dN5mbd4XnVSIpw5%2BtrtPFEfPeQixT3pOhBvsTnrBeQbXZVhU6wF5JveLOE9ifxLmVLxcS6hyWs9st59X5NoH5Egc5WDya8AHxVCKdkLS9vq92R1lCtiJpYpV%2BruS3TC5psLDBjqkAd7Nq5073Q%2Fbn%2Ftrfs7TSL32odDvw0m0Yl0ePp12sQGWYuCN3ZiF6EcBKX3KPWoIlRH4RjUgNncqMqGdcnBtAYviYMUg2qpud%2BaS912fFYrl0HnpZnqpeoY%2BpHnVMvjhvuIcrv50aSy%2BiMW%2B7%2BPb3djCtKZ8mItOmEDqRs0h1UHJ0FM0fpiSfm62wihdrzEmsx3jvPiVZCCOBdYeKrxyO1ZYSKWP&X-Amz-Signature=6a96d3baa5fffebba0d0594f2f8e4bc8827c8424ca4c7b48261a99c23159082b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDUY777%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLXM4KtBH1TskWd8tn%2BQCqr0OfkN5BXgwzQx7cJ%2F8w7AIhAJQ0NaY0iyUrOZXQKp1bTqenTY0dZFJfHRd0HA4PGlhcKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxusaPPDWckgUaESXgq3AO5thkFubbQSjVueXlgo9mInj5i987AvkmUBHGII6gUeNTD6eYWdpGj6JEHmNBS1gZlO1J1kFXX4Hi8JZv45kwX7%2FtgAeBlkMMbBQX%2BsgDGT0SdFRloFfCSsLN95aRzjVSZ13XKEndpknoZd1z69UuZDuvlXvUy%2FM6%2FK%2B8QStTi%2FpPdprAJFysuYNh80Mn9xs0UqZajO9I2s%2FkHKIC1C5uL6gJllEU2Q63coRfiwSqtMoh4M%2BNKEtmk2hcFVADCIxyL6Sy2sSHoUhWY3PtShM7V%2BRhyygGa0%2BT0Mbh9scP2kp8qQIeaj6nAPRxgvN2q5MAZN91rcVbHwr9tFBvTKf9FW500UegKQ%2Ffdlv51lU5tkeTdWRjV8rMXfxsp47FQxa4v7GZoPKiENveGDVd4yhYCQCX7g6jaVM%2BCaWbMUF0kJpNVtXlZOEPuif%2F2xpf%2BvU7QLDvpM1AjyJrg7DjFbAhC%2B5l%2BXyfQcBfSBpAjevmtjp8lybQNMKP%2B%2FYY0Uwv2dN5mbd4XnVSIpw5%2BtrtPFEfPeQixT3pOhBvsTnrBeQbXZVhU6wF5JveLOE9ifxLmVLxcS6hyWs9st59X5NoH5Egc5WDya8AHxVCKdkLS9vq92R1lCtiJpYpV%2BruS3TC5psLDBjqkAd7Nq5073Q%2Fbn%2Ftrfs7TSL32odDvw0m0Yl0ePp12sQGWYuCN3ZiF6EcBKX3KPWoIlRH4RjUgNncqMqGdcnBtAYviYMUg2qpud%2BaS912fFYrl0HnpZnqpeoY%2BpHnVMvjhvuIcrv50aSy%2BiMW%2B7%2BPb3djCtKZ8mItOmEDqRs0h1UHJ0FM0fpiSfm62wihdrzEmsx3jvPiVZCCOBdYeKrxyO1ZYSKWP&X-Amz-Signature=a4622a150708539fa7205a9a91447f8f399bf62d25a976c9188c5df7452b74bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJQITK5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLCqpYiyCl6cITXkdyQmQXnz6EAUyEEGoTjSifXGlbKwIgMFsjv2oEo6uOECWABfp2rpGKi6yWbKKB7kaZnVhrR%2FcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZC2Opn66aHuFxUtircA4ejrmlJKf4kwthrF3mejFplGyEvxfn7M6i%2B39j3Gebtg0zqszE9ouUiX%2Ff1B0cAx74K89SfCTsmuKNVRPWhIBeQS61%2F5HAm9P0%2Bw83cqcIpZ85Cj3dX%2FRIGb2pX3pUNsl7pWadY%2BvWBBr%2BHWp4p58ph8FsyH%2FtEZZphXB1XWr2cLzfl1gyM6R5%2BNDjZSYFWswmwlW79Ao2Nq8VYw3OlcyZLDFugDm2J%2F%2Fh6vi75uV9HGiGaICSySTiqHvvqD9hT9sbcAoC5aMYREqyvhBBR3COkrJ7PRiWNYUyjq6TDltnve%2FOx1s3whBZ34mz%2F%2FInv4V7cIxi0pM3vrEdhFi8FPKsABrX0mC1E0LcDglKu9B3FFXYVxNFXeUNgXdC87Q9Mo25L%2FySnBZu1F8Eg5zI5rtfer6QzyHYcJYHQX2RQuuC34lSF4RehsdZ0WUm%2Fz9aQorPdhfuRyGKoZ90IpFLQ%2F1z%2FXHvNyNUj1NXq81xoddvFBeSpoVsDi8uF7H8gYZ48QpvE1RAWiJFsUUfnIiieoLMAKqHnv5Ei3xM7zOGhzSUpodPe%2F5pfS7iXlSirTjZss%2F%2BTo%2Bq00PP%2Fw1ACP%2BK22CcNlo%2F2aujSaMTM9MW%2BlIKQf5mZxUUxGzsASoDtMIimwsMGOqUB0w5FOEWjjBtS81m34PReEUry6UrDEXxSAyJgUY7wpDRHWBZ0uHhR%2BNB4e7wJkjFlyzm54N7TF1mH%2B4XWgOj9efGKPmBsA6RZVID0gGEb1Zd1sFHLrKEX14K0uBQHXi%2BeIx6GmWGDBsNtccehl4Yg8YXuMZe0e%2Bh4HFYs0TfyKyRVaaVCr6GZ2KHXNrZ3Yacu2udFs%2FZMkwrKZADTVmEIFjv5WSVO&X-Amz-Signature=b104d522f3d264609bfbce1b938ef5905b0f96322428601ce24579776353d0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USBXUZA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD4k9GDU1lia10P7YVSd7qy2Z%2BLhNZ7jNatXUitFyQ0AiEA4qiI5XwFQOMSKYm3oxuxX%2BngyJg%2BB5YHuR%2BzsGzFmkAqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECrXo9tiGZTONqDxircA2QGDkycOf6GBOTJkEVmfZ1O2r1BfqjIy9izaTNTavy8Eqnsg90vC30aVRhSVJBUwomifwtqOCkWztGPN4TMhjD4sY2PZGzrcgn5%2Bkpm%2BkUK5GymgzYjooCFlrkIdyWNJcRaGdU1xFTlqVdPKpgq%2BDZ0uYDN3Thm55RmMAikWfpl%2FCbXV%2BAAwfMZ%2F1TZ2OLJh%2FE19pcyKAh%2FcvHQST6j6vF7VQushpyOM7k8uHcRjgWFL%2Fe5Geu1ZVgsUiKu6xUR8qgM%2B1J%2FzVUstCkx4i%2FDWKe1XKR79X0pkrN0ZXM4JwmW6nsojACRRtKND7V1J5jEhTXjwMMnoFvMMDf3YL8Bue1Y%2BjPE0p1mvgPfh%2BshGIgraZ7ml0a0JO3%2BqtMqj9kTcDIscu2f5UljCWV1zfwcvXL7NZ0qNMRSshsiKfSKdzJqHlVfUM21YPG0XzA4IAE%2BLddbFjCbAteKeuhmqZRN68dP37aMvlGu2pexcKYDo4KgHlg9%2BKEwdV%2FFDeWuTzY0LvyOk3jLa7Bj2ai61O%2FgPNYeq%2F1yXXzuGjBIqRGIh7pn7wbTt0owjaRJsR2rOQJRGwQzVfF%2FizMMaimWL9yqwJbJErjHvfOp1L4GXXdHygK66FEBvHFsnT8vH3ZMMLmmwsMGOqUB7mvzPnRN9X%2FahnbfktnpGRaL5yIx8AtoQLU1gHqaivGQnYdflO1ejUTNSHdxUEebyTVb7pfOml2yRGzKnnNvckBSbh%2F%2FH7IZlsVCGF8ONj9%2BmxLFp%2FLh4Ch%2BoA6V%2Bd36x3dyJYO6EiOcyEi8HbqmLpHuI7LUR5el%2Fy303Mq6fqhEvO1Su4W0neaC0GdJw0AjyiRSoycp7ZyG9y%2BSObKOfn5MKNVt&X-Amz-Signature=fb06078c25b33fdbfa78869884fd851269f111a996a9409f111f99aac6ac3d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDUY777%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLXM4KtBH1TskWd8tn%2BQCqr0OfkN5BXgwzQx7cJ%2F8w7AIhAJQ0NaY0iyUrOZXQKp1bTqenTY0dZFJfHRd0HA4PGlhcKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxusaPPDWckgUaESXgq3AO5thkFubbQSjVueXlgo9mInj5i987AvkmUBHGII6gUeNTD6eYWdpGj6JEHmNBS1gZlO1J1kFXX4Hi8JZv45kwX7%2FtgAeBlkMMbBQX%2BsgDGT0SdFRloFfCSsLN95aRzjVSZ13XKEndpknoZd1z69UuZDuvlXvUy%2FM6%2FK%2B8QStTi%2FpPdprAJFysuYNh80Mn9xs0UqZajO9I2s%2FkHKIC1C5uL6gJllEU2Q63coRfiwSqtMoh4M%2BNKEtmk2hcFVADCIxyL6Sy2sSHoUhWY3PtShM7V%2BRhyygGa0%2BT0Mbh9scP2kp8qQIeaj6nAPRxgvN2q5MAZN91rcVbHwr9tFBvTKf9FW500UegKQ%2Ffdlv51lU5tkeTdWRjV8rMXfxsp47FQxa4v7GZoPKiENveGDVd4yhYCQCX7g6jaVM%2BCaWbMUF0kJpNVtXlZOEPuif%2F2xpf%2BvU7QLDvpM1AjyJrg7DjFbAhC%2B5l%2BXyfQcBfSBpAjevmtjp8lybQNMKP%2B%2FYY0Uwv2dN5mbd4XnVSIpw5%2BtrtPFEfPeQixT3pOhBvsTnrBeQbXZVhU6wF5JveLOE9ifxLmVLxcS6hyWs9st59X5NoH5Egc5WDya8AHxVCKdkLS9vq92R1lCtiJpYpV%2BruS3TC5psLDBjqkAd7Nq5073Q%2Fbn%2Ftrfs7TSL32odDvw0m0Yl0ePp12sQGWYuCN3ZiF6EcBKX3KPWoIlRH4RjUgNncqMqGdcnBtAYviYMUg2qpud%2BaS912fFYrl0HnpZnqpeoY%2BpHnVMvjhvuIcrv50aSy%2BiMW%2B7%2BPb3djCtKZ8mItOmEDqRs0h1UHJ0FM0fpiSfm62wihdrzEmsx3jvPiVZCCOBdYeKrxyO1ZYSKWP&X-Amz-Signature=93ab6660dcfb328685c6861ff688a97aab9681fd02f7dcc15da2e99a7db63fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
