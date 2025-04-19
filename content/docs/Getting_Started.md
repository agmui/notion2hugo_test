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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLKXWJM2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBGaNkVXtPPeBaMj3l%2FYU6gRgwiE76dmi8H5yWSAO4PYAiEAqWJLPXrR6ZG4r7DakEkUpcb%2FEkGL4Zc7A3uhSdhyW%2BYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BKPXd5BgV2Pn70qircA3QCmDDEQCt1YLULLVf%2BU2iBrhGX0XWEKJgF9YhJWO%2FybbnNf1x%2Bmb4gVovTPzmMa42ztdd10DJoBNS5tUSTBQevcdb8MJN1FMkP8b1Qa3NP4ZmnomZjRLb72KRXnQIstUd8HPeLXwm7q829Qo%2FIUl2j%2FwiO2D%2BBDyf7Pgp7nQ0Scn3cI9jd9zAt%2FwaPy3qDQZfq9g6Hk9vokLiky%2FhUiuqaHgEJ6fgEsbUNXe1uwEUmZxR4vFCNVPYmY8iBnrQBgsqwKIbEwgm2hf%2FIY0W3OUngwNuxlXAY4KLmgVsDAShaG7iQG0OIDy8WK5SG%2FTDgDyqgJ0JmLfiFYogCO0MJsKabO9lLYXo4uuM2e7kGEDCNaN%2FEaadPzOjreWNwmE%2BSnejkbOU3tEJLpJyqvZGudq0RuFPS9h4wGO9qZURAZYA2mhOEfiL7k09c%2FH04jJMpOvOtGwmpyTkX4BQFCOLzbe2RGLzzV%2FaS%2BhlZSTIFoKjAfdKg4Ar%2FzC9j9loSMEbBC8L%2B7ertG0RsoOR2Y9Gjm2g0BxZIeBYjZkblw59%2B2sfbGTgm%2F%2BQ1x2kOmcfnUffek%2Bfq4LN0lciJPepbv8PTicTMot8Zf54Ai0ocTq5ey3vBn2Y7Kne8GkFiWM6xMIGfkMAGOqUBJqtigFBCDZYAW9Gb64%2B%2BAKACol97noMzBoq22ONEIdzLG3NiZC29zb5bojKYTfVbdNqzNdvRU9%2B6r8Gp%2FV5W1aNuDnEkWmIXdZ3LmZ%2BW0I22WH7VJdKHRVoATeRqmeZUC0p1j5tugAJlrCGq3QCMYA4tYPOdcKKqRe10%2BA6r7F%2F51khv4j%2FFUBQvYMvzMRrE5U5SANNl4vQJh5T5%2B6ww67IMq3bM&X-Amz-Signature=6ab371c92693b42352d2c94284490d2afec8dacf88e6fdb8587cfe1bfbd25600&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLKXWJM2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBGaNkVXtPPeBaMj3l%2FYU6gRgwiE76dmi8H5yWSAO4PYAiEAqWJLPXrR6ZG4r7DakEkUpcb%2FEkGL4Zc7A3uhSdhyW%2BYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BKPXd5BgV2Pn70qircA3QCmDDEQCt1YLULLVf%2BU2iBrhGX0XWEKJgF9YhJWO%2FybbnNf1x%2Bmb4gVovTPzmMa42ztdd10DJoBNS5tUSTBQevcdb8MJN1FMkP8b1Qa3NP4ZmnomZjRLb72KRXnQIstUd8HPeLXwm7q829Qo%2FIUl2j%2FwiO2D%2BBDyf7Pgp7nQ0Scn3cI9jd9zAt%2FwaPy3qDQZfq9g6Hk9vokLiky%2FhUiuqaHgEJ6fgEsbUNXe1uwEUmZxR4vFCNVPYmY8iBnrQBgsqwKIbEwgm2hf%2FIY0W3OUngwNuxlXAY4KLmgVsDAShaG7iQG0OIDy8WK5SG%2FTDgDyqgJ0JmLfiFYogCO0MJsKabO9lLYXo4uuM2e7kGEDCNaN%2FEaadPzOjreWNwmE%2BSnejkbOU3tEJLpJyqvZGudq0RuFPS9h4wGO9qZURAZYA2mhOEfiL7k09c%2FH04jJMpOvOtGwmpyTkX4BQFCOLzbe2RGLzzV%2FaS%2BhlZSTIFoKjAfdKg4Ar%2FzC9j9loSMEbBC8L%2B7ertG0RsoOR2Y9Gjm2g0BxZIeBYjZkblw59%2B2sfbGTgm%2F%2BQ1x2kOmcfnUffek%2Bfq4LN0lciJPepbv8PTicTMot8Zf54Ai0ocTq5ey3vBn2Y7Kne8GkFiWM6xMIGfkMAGOqUBJqtigFBCDZYAW9Gb64%2B%2BAKACol97noMzBoq22ONEIdzLG3NiZC29zb5bojKYTfVbdNqzNdvRU9%2B6r8Gp%2FV5W1aNuDnEkWmIXdZ3LmZ%2BW0I22WH7VJdKHRVoATeRqmeZUC0p1j5tugAJlrCGq3QCMYA4tYPOdcKKqRe10%2BA6r7F%2F51khv4j%2FFUBQvYMvzMRrE5U5SANNl4vQJh5T5%2B6ww67IMq3bM&X-Amz-Signature=e94b9d45d810ac17d8ec22980e0fb8e0d8dde1088586473c84a65c7ec83c320f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HBLLQ5P%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCICLCCvNovHRdxkQ4d1%2FZ%2B3r0TYBd0uoXbPEA3OfDeE7wAiBOjnDyNHlYBwKf8oekmn2rAQnDeZrrbXjL6BCnconbzCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbO4GC9aIXXjH1fTaKtwD8mMXZ7G8eRXLIjBBiHMVuDmjn3gS1SPDOmQf4kFTHvmWYtP9eiZuYeQ8Zg1wbMhfk3UKBTkEDGGqe8ZZVC28d%2BvdcUctUbNjBge587Z9zk3JN%2Fz0wEElJ0Dt8gPmn4cQck%2F28gls3ACTnWIwdly%2FP%2FfCL%2FPtw9vAe2ZyvPp79dxNYOpnwKhTtGEtCtoKlkTvVe%2BqPmlo%2BDExi9Ck64tFp01jJi0%2F%2BB1FmyFhqMOwX%2BBz7azW8D%2FhaBMVXWGhnt%2BxpaUhlfhCOHUNYG2EEIW6YyyX2B%2BH2oZDcm3WEgKgoWRIczQxZh6bYEMg%2BNPrjpNvh1YlH1fmpt5Tb8h82roM4p1Cxqv3x8Sm7kVfK0kHMEYRe1yPBaCcomO0f0mjHbLnDlzb%2F8g0429NcIU0x5d7lIQatmGk9IL%2BiNr3oNCjUi%2FaUAOHDa%2Bce9K%2FI9%2F1%2F7lW9WRZvQyG03ZhWV0y2ed0p%2Bz7K%2F53UH8EYMO5A97lUCCO7OQQiPrdi44Z6WEEFTJT8TMHpvjblX4290MnMUM58w%2B61%2ByrVR7nVp%2B8ZChUTz9WaEagn2XDHyXXflWk2Qw5ZmlYAnPEEieKS%2FGbpcj5JvulPG9mM4M8VgG4p7dpeRhbnC%2BZAyLyVynEW6Iwl5%2BQwAY6pgEkkC1hanSb9lsBqSUR2IrBPDGOZ%2Bl2ODeQhtwITNeo%2BLqBxANtSlEWkRY%2FLdcUTyublM6IGEsLYzO2mU3PDnI3oKRndOQk00nFth2TojaTXnc0%2FrdWcN9w4NF1T4SoUmYp4KykB3%2FdUxNf0zQZnUKttDA%2BKD1klt9ysuKxxLr5Ig7fS8wUeTkjdxtBxF5t63cuKb%2ByTrrB4kSq%2B2Oj%2Bapw7FIlzLaJ&X-Amz-Signature=11672b0e1a202e3886fcfbd94393663c9220bd0be2cd0cc104a4e944f3998b49&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIDW66KP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDBc4gffdddXFrrsrYPtNNf5NnxRJkIeZMle10wuefNgAiAMiCtlO6leHjdstUYnvXHJYbtzmZ9CJuynj5c0zxMi3SqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOtgnIrEDTSgSLLitKtwD%2FGP3YQ%2FO%2BNPH1hLR0OofQ1Q8hkOSoLi9cjGm3%2Fvif7eFT1FgFAQGpAAj01xov4yMWocoLiW960pUzmoJeMb2yitmFvKlypju4lzmsOxkKVVMsdAeoNDh4u7Ah85A%2FnImv6aFQNCD9jIPlCu4qtiYjJeQglC13PUeONdWeviQB%2FgpUR4A%2FYysYFJiCjn89yDZ58%2F9lyTz02PTVKcr3qV6hfvZ72nWqfj8OyXWd7j4LK%2F0eJMNuQTeOybpsj9wHZ7u3qxZes8Yz6lQW2uo5KiRasKIiFzMrhwz7%2BOERnVUKQgXf62mM8GzRNR7QdTCraV3jGIs%2BzXtYXxkuD9rHR0%2BoEK0XN8qTevdbqEJuxAGHoKlRvkKDkGgfCCmk1sox6SLavBtliL9po0b%2FiOjBTSlwfmpvUdq3s77CZ%2Bh039dH02H8Ifo0IpypeoLq5IDnxBbZyfzjTvwvG8SawWQLYyMOeFFGtvu%2Ft45OEaLKCDQrMXr2V6AKS5jR5OmQVU%2BH%2Fx272r3h%2FE1HvQyGqo%2B7M%2BhI1q1LVQdK7z%2Bc1KUAcy80sFmQLvCrhJ%2BhTKiikiYAo9GbiuuL2gh4%2FFF8RSjQ32mTL33v0gX6uyNQjJMXBOB6H%2B%2FgvaB%2BBSTQNPaEzswtJ%2BQwAY6pgHBJd8OIXyoNyrCkT5nE90YSK5G9tlnqNOTo%2FkhU%2FoGHzmEXuXUBs9fuK4uBjDrYDashJsvWZSNYoyFEOl7YgE3xeoPvlhDIVoTlTsgNPKkuqLot8otrW313j87nGp3qEuH26XFAv3l2V%2BYE6H0ACaCLVBL1d4TzUERYDhhaMgrguZZirXBdHFv0Y08ML%2Bcg9GbjM3IO3jGC%2FfBrqzZoWlusAI2laf2&X-Amz-Signature=7b8c367cb22d0dbaaf7b5d0bcf34fde9031f1bbc1db59481e1eac46312eee96a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLKXWJM2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBGaNkVXtPPeBaMj3l%2FYU6gRgwiE76dmi8H5yWSAO4PYAiEAqWJLPXrR6ZG4r7DakEkUpcb%2FEkGL4Zc7A3uhSdhyW%2BYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BKPXd5BgV2Pn70qircA3QCmDDEQCt1YLULLVf%2BU2iBrhGX0XWEKJgF9YhJWO%2FybbnNf1x%2Bmb4gVovTPzmMa42ztdd10DJoBNS5tUSTBQevcdb8MJN1FMkP8b1Qa3NP4ZmnomZjRLb72KRXnQIstUd8HPeLXwm7q829Qo%2FIUl2j%2FwiO2D%2BBDyf7Pgp7nQ0Scn3cI9jd9zAt%2FwaPy3qDQZfq9g6Hk9vokLiky%2FhUiuqaHgEJ6fgEsbUNXe1uwEUmZxR4vFCNVPYmY8iBnrQBgsqwKIbEwgm2hf%2FIY0W3OUngwNuxlXAY4KLmgVsDAShaG7iQG0OIDy8WK5SG%2FTDgDyqgJ0JmLfiFYogCO0MJsKabO9lLYXo4uuM2e7kGEDCNaN%2FEaadPzOjreWNwmE%2BSnejkbOU3tEJLpJyqvZGudq0RuFPS9h4wGO9qZURAZYA2mhOEfiL7k09c%2FH04jJMpOvOtGwmpyTkX4BQFCOLzbe2RGLzzV%2FaS%2BhlZSTIFoKjAfdKg4Ar%2FzC9j9loSMEbBC8L%2B7ertG0RsoOR2Y9Gjm2g0BxZIeBYjZkblw59%2B2sfbGTgm%2F%2BQ1x2kOmcfnUffek%2Bfq4LN0lciJPepbv8PTicTMot8Zf54Ai0ocTq5ey3vBn2Y7Kne8GkFiWM6xMIGfkMAGOqUBJqtigFBCDZYAW9Gb64%2B%2BAKACol97noMzBoq22ONEIdzLG3NiZC29zb5bojKYTfVbdNqzNdvRU9%2B6r8Gp%2FV5W1aNuDnEkWmIXdZ3LmZ%2BW0I22WH7VJdKHRVoATeRqmeZUC0p1j5tugAJlrCGq3QCMYA4tYPOdcKKqRe10%2BA6r7F%2F51khv4j%2FFUBQvYMvzMRrE5U5SANNl4vQJh5T5%2B6ww67IMq3bM&X-Amz-Signature=37e6104f63b39805e70e09e358ca8c301993472b6d1043eb6a9f8ba4673f5879&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
