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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFEALTXS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDcPBjhTuMiAqxCTwtOEO7ssr9oI5z6sYfNOnsr%2BBUWhAiBnqhiRXFkEwM48nRVQr8Puse0j1fh%2BkPSzQkCBJEDNMSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMpiX6xSLtkJNfpMZNKtwDqQwSqCYks9H6DTsCCXNFttT7rgEJi2hRPfDGJFWC%2BaslDbL4CI2a20KkR0iE5TPtWPLqu7wd03cd0wgjKO1JGeEdPyey%2BJN2ghKMn6KSodQ%2BFV3EC1xUmRjZNgsvzsxakS9EUK%2F8riuXX%2BbbNa37HnxYMZuBPcsdumbUWt5CzjTygrvfXXaxKSCr2dbnFUhTZ5YUevCLEwm5cla9UhL4KUmRH0VBRFyE2xbON42hMrqlu9yziJ4ZbjhE6Ib1iD%2FT2qn5k3ja%2BAVD1WWwjixi8WWXe%2BSnNK7YCPtQ3PyyRbTjsPwmxHf0zX0SR73EhlChwfsqq%2FWnx97Vok2KKfpjQWAPslSIXHYYP%2Fr3%2F3rpsQQoGACIsHAwglWLW85pvcQKEBw03hMfnhr8FLsS1%2FpaPAQgEE9AyYS7SxldNRg4kKwpDhDyRP35OpoFG9v64Pl0ecRGSFTXSflBjE9FQBwLhAqaPRquDvJ5SuoYlDJAX%2FMiiP90eV%2BFYA9pIrcB%2BjcDK9JFaKlrDOkKCUIkLqPbGpCPKQ%2BDJ%2BNc%2Fc8IA5eP7H6NZ3dePLynmWlU6v7znsTtFUCW%2FSl%2B2A3Dmzz3LD31VzazMUqv%2B4UnR1NlkZPNXK5URxxYKx2coZcOY3Eww7TfwwY6pgF3sOKoKkeWmGVeykw%2Bto28plgqmRrYNkGiEkS5sGh66RtOPmkYWMr2ZTPEsrHqjwSea9sCPplJwdCPZuED%2F9WKdN58euvwxGp0MwhVZWbcBlmFfSmu3hQy07CAdqhkb39wQcZfswK%2BR3SzVySE7jDtcHXavKL91izS%2B2qCsTNQNQ2i9kZpNdptvFU2ah34hWCt5%2BaLdiqQTiN5DmrvQmA%2BpG%2BIl5qf&X-Amz-Signature=fd5afa771efee208a7bc52d99af870f534e52eb783d28436013afa3f2976aa04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFEALTXS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDcPBjhTuMiAqxCTwtOEO7ssr9oI5z6sYfNOnsr%2BBUWhAiBnqhiRXFkEwM48nRVQr8Puse0j1fh%2BkPSzQkCBJEDNMSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMpiX6xSLtkJNfpMZNKtwDqQwSqCYks9H6DTsCCXNFttT7rgEJi2hRPfDGJFWC%2BaslDbL4CI2a20KkR0iE5TPtWPLqu7wd03cd0wgjKO1JGeEdPyey%2BJN2ghKMn6KSodQ%2BFV3EC1xUmRjZNgsvzsxakS9EUK%2F8riuXX%2BbbNa37HnxYMZuBPcsdumbUWt5CzjTygrvfXXaxKSCr2dbnFUhTZ5YUevCLEwm5cla9UhL4KUmRH0VBRFyE2xbON42hMrqlu9yziJ4ZbjhE6Ib1iD%2FT2qn5k3ja%2BAVD1WWwjixi8WWXe%2BSnNK7YCPtQ3PyyRbTjsPwmxHf0zX0SR73EhlChwfsqq%2FWnx97Vok2KKfpjQWAPslSIXHYYP%2Fr3%2F3rpsQQoGACIsHAwglWLW85pvcQKEBw03hMfnhr8FLsS1%2FpaPAQgEE9AyYS7SxldNRg4kKwpDhDyRP35OpoFG9v64Pl0ecRGSFTXSflBjE9FQBwLhAqaPRquDvJ5SuoYlDJAX%2FMiiP90eV%2BFYA9pIrcB%2BjcDK9JFaKlrDOkKCUIkLqPbGpCPKQ%2BDJ%2BNc%2Fc8IA5eP7H6NZ3dePLynmWlU6v7znsTtFUCW%2FSl%2B2A3Dmzz3LD31VzazMUqv%2B4UnR1NlkZPNXK5URxxYKx2coZcOY3Eww7TfwwY6pgF3sOKoKkeWmGVeykw%2Bto28plgqmRrYNkGiEkS5sGh66RtOPmkYWMr2ZTPEsrHqjwSea9sCPplJwdCPZuED%2F9WKdN58euvwxGp0MwhVZWbcBlmFfSmu3hQy07CAdqhkb39wQcZfswK%2BR3SzVySE7jDtcHXavKL91izS%2B2qCsTNQNQ2i9kZpNdptvFU2ah34hWCt5%2BaLdiqQTiN5DmrvQmA%2BpG%2BIl5qf&X-Amz-Signature=f2b47bb85e31750269cef897b08241812de6cfb2391826118595146e794c25bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFEALTXS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDcPBjhTuMiAqxCTwtOEO7ssr9oI5z6sYfNOnsr%2BBUWhAiBnqhiRXFkEwM48nRVQr8Puse0j1fh%2BkPSzQkCBJEDNMSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMpiX6xSLtkJNfpMZNKtwDqQwSqCYks9H6DTsCCXNFttT7rgEJi2hRPfDGJFWC%2BaslDbL4CI2a20KkR0iE5TPtWPLqu7wd03cd0wgjKO1JGeEdPyey%2BJN2ghKMn6KSodQ%2BFV3EC1xUmRjZNgsvzsxakS9EUK%2F8riuXX%2BbbNa37HnxYMZuBPcsdumbUWt5CzjTygrvfXXaxKSCr2dbnFUhTZ5YUevCLEwm5cla9UhL4KUmRH0VBRFyE2xbON42hMrqlu9yziJ4ZbjhE6Ib1iD%2FT2qn5k3ja%2BAVD1WWwjixi8WWXe%2BSnNK7YCPtQ3PyyRbTjsPwmxHf0zX0SR73EhlChwfsqq%2FWnx97Vok2KKfpjQWAPslSIXHYYP%2Fr3%2F3rpsQQoGACIsHAwglWLW85pvcQKEBw03hMfnhr8FLsS1%2FpaPAQgEE9AyYS7SxldNRg4kKwpDhDyRP35OpoFG9v64Pl0ecRGSFTXSflBjE9FQBwLhAqaPRquDvJ5SuoYlDJAX%2FMiiP90eV%2BFYA9pIrcB%2BjcDK9JFaKlrDOkKCUIkLqPbGpCPKQ%2BDJ%2BNc%2Fc8IA5eP7H6NZ3dePLynmWlU6v7znsTtFUCW%2FSl%2B2A3Dmzz3LD31VzazMUqv%2B4UnR1NlkZPNXK5URxxYKx2coZcOY3Eww7TfwwY6pgF3sOKoKkeWmGVeykw%2Bto28plgqmRrYNkGiEkS5sGh66RtOPmkYWMr2ZTPEsrHqjwSea9sCPplJwdCPZuED%2F9WKdN58euvwxGp0MwhVZWbcBlmFfSmu3hQy07CAdqhkb39wQcZfswK%2BR3SzVySE7jDtcHXavKL91izS%2B2qCsTNQNQ2i9kZpNdptvFU2ah34hWCt5%2BaLdiqQTiN5DmrvQmA%2BpG%2BIl5qf&X-Amz-Signature=a7c200ab383ffac88c6dfdb52b9b1eaa09f46d85d35b9b313c4dcdba53249735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URI4KU5W%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD1Y9%2Fodh0b7MrybhNLqXdURlv3eUvAiE9of984CKKJ4wIgKN6bZdqZuUlLYAMBZJWnPzatXAKN3Lq%2Fhjy05F5rZ0Mq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDMeGkLTZEkTjs9uveSrcA0q9te2SK6h5VTusCYq4vSuLsc2nsoP%2FmuS91ECU7kMQ5PaAkWC5qJJqWiToDl2l2PnDGpAa54VUZRizSNIbj8Wisq49xxsMPPZ6TLlum2XVKfiEx9xtZWeqTUFdTUw4MxPkE82bo2p8tLHgecoN464xWmm6%2FPTB3k0yKQqZX0%2B76KZ%2BFA2nsGjlu%2Bw6GIvjrB7jbXiIXgIZD%2FVhCn7AKVxFNIyalNQB9FlHAjD1a5849rrGZ5p%2BVvEpb547mplQCUoqgEz4xBjiiH2WRdcgQV%2BclVBQahQKZ6hB8Rk7Irs8xh1bxx9x66MupnHMxHYqzLYK%2F%2FKDMHqhS8Pz4uyHWIgXSNi0y6J0k4GVCRJiu48%2BXtjvr8Dl%2FoJuXI%2BU9H4exmnNNf1Diwm3nU%2Bz%2BHP02ySRsg0xjJdGk8g4rJnb5tzWlGS%2FOH%2FiN0xQWO45WymgwHhR5Lrd5gGDQLi2ezT8W7GgdlAf%2BNQzoGaq3n2PSmrAtKchZZyJoYN%2FPd6ZkAp8pAxXCUPaZLPNWyHCNJ0c5ZhY%2F80Zly9PwxAmNQyU4z5xshMBJWUXqMhX7Qpa%2BAcZuC1L5qmzeGaKAVOqpxTgVVOvcZHA6sm3FA2%2FwmGxeZ8KiVOxFFgiSjQw9GnMMOWz38MGOqUB8s3G8Izj%2BGApxLseiDNaoZquu7Gb9rytjAUAZpWvJPMtX2jp88jjNvK6COu%2BhkGgzpD3BnFqhVs7ZzwXQFnRiy%2BBz3LmZd8BN1udIWGUXbR1o%2BdStZ5rjZMpvBqmjYt7Kud9VrURYmP63NrLSLOwEqzi3ZNZF%2BDF1GmUZI%2FIZANeJH43WzQyEet7Hg1slMCxKKcvzKJ5L9jnrXfJfX0KRrWNcF8T&X-Amz-Signature=3b792b41f596b4ac395bcd03b51fcb3d589f05af238cc47236cc787006b32e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGGVTPFJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDqkt8logYmip2tYgv5%2Bv3bXQQiAEvpGWXgo%2BS6hyJ6RgIgUkEV2DKJyZbmXKfj9c6jUf0FusdOvGIg3RmfYmtRKjkq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDLLrpEVYezFckY3zVyrcA93AxqvdmJjVDXAYU3RgsCKkC30GRyAzfhamoJdVnCzlV3GTdp9f3mnZ6EcI2O7peI6SlVdrPNPOc0Vh88khX6LeTda71q3b%2FIWeulLC%2B6LXgdddDq9sT4roWVitkiiMJhfdmeRZwq7KikO9fkc4fQbHMI%2BNOJ40MwR%2FIWqNNhPiEzJO4u%2BDgIJZ0kQrFw4sUHoa1nM%2BlyAJePv1dIUVYXCbdIxSlYSFlja9GKAIhfkQaxKLHjY4iTFbu2a8FpIqo3TRbJRtwNUQfyEvjZTYB40coSMMqfkeZtibdPzQISbHa0vRizKBSwowS2dEISQ%2BKG51m6i%2FBrA74x9bXZ3ZwUpvhWx8xKhilzQbxQtoGNYnirbgwQOR3o7p5ij0RaHfd8D3dcHmYgTEMe9j1Ikgyw80IuYzn1zVtV72Gm1d%2BT4lNJfVMK4FFW5afozIl1zloUDE%2FgKSxCHfgmN20jr9JC79kk7EmCtFBLQ5cm1fd78%2B9gIwunVwD4BoxqnVC6QZYG%2Bo4YyCwbXV0FkUu%2BGxhYCj0kaVKDlu5Z6dXSctz6pBBhzHO0fv59ohGC60RbBkJDKQuVlpRGiiAdszzWIqodntQPqZeUZ4scvPbC%2FApfwp89049unvnGfVsaqHMMS038MGOqUBfeFjaBh%2BK4bzVWcoiG3ysQguIDH88H4PDYhiAHlkfzUtQ8nzfpRdS9AMRxeGpZBtJrWs9P1423It%2FNEc99h3FMWyk5Eve1KDkpUOuqRLivpCHdJ7tVjreWphUjKz%2Fs5aAzdS%2FRTWtcTAtfNbBykTenLv7ckqiLKkmj7S1Bc0OnoMFMA8D8ooosDJvfL1FX2ZzcZrTMFQ4cv2s%2FgRFOyQYCZogDPx&X-Amz-Signature=7eebc10d9081ca3a4394ab16a66c4eb358c142655fe9f8ec5b7f863a196bcdf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFEALTXS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDcPBjhTuMiAqxCTwtOEO7ssr9oI5z6sYfNOnsr%2BBUWhAiBnqhiRXFkEwM48nRVQr8Puse0j1fh%2BkPSzQkCBJEDNMSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMpiX6xSLtkJNfpMZNKtwDqQwSqCYks9H6DTsCCXNFttT7rgEJi2hRPfDGJFWC%2BaslDbL4CI2a20KkR0iE5TPtWPLqu7wd03cd0wgjKO1JGeEdPyey%2BJN2ghKMn6KSodQ%2BFV3EC1xUmRjZNgsvzsxakS9EUK%2F8riuXX%2BbbNa37HnxYMZuBPcsdumbUWt5CzjTygrvfXXaxKSCr2dbnFUhTZ5YUevCLEwm5cla9UhL4KUmRH0VBRFyE2xbON42hMrqlu9yziJ4ZbjhE6Ib1iD%2FT2qn5k3ja%2BAVD1WWwjixi8WWXe%2BSnNK7YCPtQ3PyyRbTjsPwmxHf0zX0SR73EhlChwfsqq%2FWnx97Vok2KKfpjQWAPslSIXHYYP%2Fr3%2F3rpsQQoGACIsHAwglWLW85pvcQKEBw03hMfnhr8FLsS1%2FpaPAQgEE9AyYS7SxldNRg4kKwpDhDyRP35OpoFG9v64Pl0ecRGSFTXSflBjE9FQBwLhAqaPRquDvJ5SuoYlDJAX%2FMiiP90eV%2BFYA9pIrcB%2BjcDK9JFaKlrDOkKCUIkLqPbGpCPKQ%2BDJ%2BNc%2Fc8IA5eP7H6NZ3dePLynmWlU6v7znsTtFUCW%2FSl%2B2A3Dmzz3LD31VzazMUqv%2B4UnR1NlkZPNXK5URxxYKx2coZcOY3Eww7TfwwY6pgF3sOKoKkeWmGVeykw%2Bto28plgqmRrYNkGiEkS5sGh66RtOPmkYWMr2ZTPEsrHqjwSea9sCPplJwdCPZuED%2F9WKdN58euvwxGp0MwhVZWbcBlmFfSmu3hQy07CAdqhkb39wQcZfswK%2BR3SzVySE7jDtcHXavKL91izS%2B2qCsTNQNQ2i9kZpNdptvFU2ah34hWCt5%2BaLdiqQTiN5DmrvQmA%2BpG%2BIl5qf&X-Amz-Signature=5c270d8331457e8c41e2717b31fc02152bb324a7bf8dff6b3c033f2f488cf355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
