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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBI27V7E%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQClzxrU7K9h%2BNPXgWV0qdtgta2ofP%2B3Qp9I9PsL3jJPLAIgYJBcODPI8ELiUl5WM9%2BrQaHdx2bjQPWB8W7MHc%2FjhEkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJusAJPLBd%2BvXsnf3SrcA5AXHYc6rusGFoOh9Zr2fSe%2BYONFsZLttzxuyI05HrSiErpQJ5b6oMxIwk9apeDJHKgBZKntrdjKyUBAcC%2FmGBZh2KmjjlC1AX9jCWooQj2vUpxBwAU2O32CARnhBfVyclzeCp5oNrnIkF8tZ6tGP8wxEhxRamprN7W8AnP6Y2NkwKa6bW58AZ834XY%2BzT0QIJfHWkyWZAdIkW5fO5umq6wfdJI5otFQTTQJCyD1qkBPbuUibYalhAV8t2SkJI571o%2B7gqxJk0CvRQfD%2B%2B5xz9XCx%2B%2BvcvCtXHhS%2FzQiWT61nGm6uJRfBCuWW8LWjwKVn2pIzrGbn3TkH3AeOyxetR1p84Ea19B44zQcD49p%2BlgBLSR1QCoa%2FjA%2BK5ujYu90qJaT850xDt7cREm90C3VhhbzrbUVq7llZaM3KaZ%2FQHQHeNBYOfd5UgszocDSKBbBh23AyOTEajarXKFI8o1ICEGIOrWT3qeCXXtKITSJSoqqdyuBOg9jO673uneddDx6uASUG5%2BXAQlhmGG4XjzoeaZoJNTOWVcfvCwmoAYys%2Fn%2BCQCrXjmKvNIqZXfZoEJSinNCPmtzmYtxntb%2BrnbtgTK%2FvEdAPpylDCpa4d1wSYi8pk6Le7MKoUUiLsjoMPqq18MGOqUBFYhfAlGPTikCJm9PZkkNtujazHWtCWmUwwtDT1pnjUmZWmqavxlHpDf7rxC%2BovqUKTIQtVpNiV51nitqWBwTz27Q%2BcPH0O8NtMJm9Jj58G20uSaGdyjV%2B15yyi%2F%2BHt3ioRT%2BFfpPU7of9fkVw3EwHmfSj9wtSg%2Fmh6UZZvvLMIZnO7bgX1QcIt5vsrLav%2Bz%2BvsJTFV%2FmmyFeCTRgW4qiNu8keDkt&X-Amz-Signature=eb65019c5e0fbe9b8c90bf905f517ba97ab7abbbe52ef3602740cf4b49b98072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBI27V7E%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQClzxrU7K9h%2BNPXgWV0qdtgta2ofP%2B3Qp9I9PsL3jJPLAIgYJBcODPI8ELiUl5WM9%2BrQaHdx2bjQPWB8W7MHc%2FjhEkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJusAJPLBd%2BvXsnf3SrcA5AXHYc6rusGFoOh9Zr2fSe%2BYONFsZLttzxuyI05HrSiErpQJ5b6oMxIwk9apeDJHKgBZKntrdjKyUBAcC%2FmGBZh2KmjjlC1AX9jCWooQj2vUpxBwAU2O32CARnhBfVyclzeCp5oNrnIkF8tZ6tGP8wxEhxRamprN7W8AnP6Y2NkwKa6bW58AZ834XY%2BzT0QIJfHWkyWZAdIkW5fO5umq6wfdJI5otFQTTQJCyD1qkBPbuUibYalhAV8t2SkJI571o%2B7gqxJk0CvRQfD%2B%2B5xz9XCx%2B%2BvcvCtXHhS%2FzQiWT61nGm6uJRfBCuWW8LWjwKVn2pIzrGbn3TkH3AeOyxetR1p84Ea19B44zQcD49p%2BlgBLSR1QCoa%2FjA%2BK5ujYu90qJaT850xDt7cREm90C3VhhbzrbUVq7llZaM3KaZ%2FQHQHeNBYOfd5UgszocDSKBbBh23AyOTEajarXKFI8o1ICEGIOrWT3qeCXXtKITSJSoqqdyuBOg9jO673uneddDx6uASUG5%2BXAQlhmGG4XjzoeaZoJNTOWVcfvCwmoAYys%2Fn%2BCQCrXjmKvNIqZXfZoEJSinNCPmtzmYtxntb%2BrnbtgTK%2FvEdAPpylDCpa4d1wSYi8pk6Le7MKoUUiLsjoMPqq18MGOqUBFYhfAlGPTikCJm9PZkkNtujazHWtCWmUwwtDT1pnjUmZWmqavxlHpDf7rxC%2BovqUKTIQtVpNiV51nitqWBwTz27Q%2BcPH0O8NtMJm9Jj58G20uSaGdyjV%2B15yyi%2F%2BHt3ioRT%2BFfpPU7of9fkVw3EwHmfSj9wtSg%2Fmh6UZZvvLMIZnO7bgX1QcIt5vsrLav%2Bz%2BvsJTFV%2FmmyFeCTRgW4qiNu8keDkt&X-Amz-Signature=22a2af769970ad1adf7c5e985de964a22037877fe7454210313bda3fd205b24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBI27V7E%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQClzxrU7K9h%2BNPXgWV0qdtgta2ofP%2B3Qp9I9PsL3jJPLAIgYJBcODPI8ELiUl5WM9%2BrQaHdx2bjQPWB8W7MHc%2FjhEkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJusAJPLBd%2BvXsnf3SrcA5AXHYc6rusGFoOh9Zr2fSe%2BYONFsZLttzxuyI05HrSiErpQJ5b6oMxIwk9apeDJHKgBZKntrdjKyUBAcC%2FmGBZh2KmjjlC1AX9jCWooQj2vUpxBwAU2O32CARnhBfVyclzeCp5oNrnIkF8tZ6tGP8wxEhxRamprN7W8AnP6Y2NkwKa6bW58AZ834XY%2BzT0QIJfHWkyWZAdIkW5fO5umq6wfdJI5otFQTTQJCyD1qkBPbuUibYalhAV8t2SkJI571o%2B7gqxJk0CvRQfD%2B%2B5xz9XCx%2B%2BvcvCtXHhS%2FzQiWT61nGm6uJRfBCuWW8LWjwKVn2pIzrGbn3TkH3AeOyxetR1p84Ea19B44zQcD49p%2BlgBLSR1QCoa%2FjA%2BK5ujYu90qJaT850xDt7cREm90C3VhhbzrbUVq7llZaM3KaZ%2FQHQHeNBYOfd5UgszocDSKBbBh23AyOTEajarXKFI8o1ICEGIOrWT3qeCXXtKITSJSoqqdyuBOg9jO673uneddDx6uASUG5%2BXAQlhmGG4XjzoeaZoJNTOWVcfvCwmoAYys%2Fn%2BCQCrXjmKvNIqZXfZoEJSinNCPmtzmYtxntb%2BrnbtgTK%2FvEdAPpylDCpa4d1wSYi8pk6Le7MKoUUiLsjoMPqq18MGOqUBFYhfAlGPTikCJm9PZkkNtujazHWtCWmUwwtDT1pnjUmZWmqavxlHpDf7rxC%2BovqUKTIQtVpNiV51nitqWBwTz27Q%2BcPH0O8NtMJm9Jj58G20uSaGdyjV%2B15yyi%2F%2BHt3ioRT%2BFfpPU7of9fkVw3EwHmfSj9wtSg%2Fmh6UZZvvLMIZnO7bgX1QcIt5vsrLav%2Bz%2BvsJTFV%2FmmyFeCTRgW4qiNu8keDkt&X-Amz-Signature=e33e7d0cf1a742025fe4321ffd4afd4224e0b0d23d951606eabae0ae5291e3f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFC5E7S%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIDvmnAvMvfCDCfxr33v8d8zi39mdDHygFZM0qKW4kRHrAiBs8KurD2B3Kqrnwb40gB%2Fux5metMoHvjYFppmUOEC5yir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMoD%2Be96%2FwIXpG4Q%2BnKtwD3ttFYvZL0hnLyCFMce2tZPWhLdZVppupud4fOdOzNjQpBoFWkwJ%2FothLQ18%2FFUJ1aEvXxfbfAras7nthAiZpX6xXiFuIxrxTRHL0lWOyTRfSOM1wORU7v1wV4NKRUHX2%2BVS9MNl6lDiNH9ygtNkk1WNmPPAeg6BZhhhNINADqxjcUOIDeqfeIK5QbPPbXsCxC5Qhary8fGaIG5OU3ZTNvx4MvXHna5H%2F12%2BBkBiaq3HZ4fMK1yR9XoY%2FuQbRNFdr47Fe2LKxP%2Bi6aRFgYlIseGBJfFaHO6nMTPI1YcMwGDFgwpOAKve9RX%2Fu33Vx%2BSEZ8%2FmD5b%2BCWUmTzh0X0aYQq%2BiRpfn6R6sDaTAujBRPBL3x1iEZ9rH4Qmm%2Fzyf%2BPan%2Bm%2FFDYMRccpkNAuqeUypoTKEGS%2BHhlN692jwCAGdiImetrkcQZZJ5TwXX1ozm4QIsichQvmUCHvkaCsAExUKsNgjzzfwFmVk2SNvPjVOqKSGH13NZNwSCuZWYaw7JykW9YPRe9VKP3h7pkxBCfCY%2BECsSfepDi8p29IUGPY4T4Tsw0n%2F%2F4S1ofttoJYt9pp7wUCotA32spB5UPoPUxV4noCXxkZZxLErkuBilfSrplegtkC%2FQd1DUHFvUH3ww96nXwwY6pgGTYHhkbzjcCah9hXOZ3wkbEUKmQeuPhmw9R1IdpDXHiM9GCESyyBb%2FteF1zWthM9G7ZsZx3txS1JsQTeZJKm%2FqGah%2FVXk5RcoVPnZnd04CFdZ1uUNiP%2Bc%2FQY93xbGEkA%2BN59vw9Aw1tQjlSsUlvCE8BkaDeDa0FNRPpVgIo62c3124IyYUOD8qDouZCAOK4H9id%2FOjI2YuVTmZahnn5r8fKxNramhk&X-Amz-Signature=9be4371693df72e545e598bfe6fe9d666690a90cfd1ffc019f92936dbe8b44a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPVTRZZ3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDjY8U5xkYiFmuYdKFK1smSrHSW05mPUc9rCUi0hZd9%2FAIhANqPz72a2GeMPzdQOaQbWE9SLrKlTI9VOvjW6dgEFjPrKv8DCD0QABoMNjM3NDIzMTgzODA1IgzMrZRoMEvv2OWpv%2Fsq3AO4gQaVIM7DbWWSOA5irv%2F0FgftPLPg8nviqwg80sM%2FazrqqsakK6kr4VPHfyfcL%2BbpNWqNZeuVB70rDQkrwv6Y4YFUAOQUJ%2BuSoyZT48BxkG0AbqPH0xv6dl4quN1IFeuFzWNrkL2YbJhQUjD1TkL26RjgNfBnyXJvAdvLIPoMx2GM6OK9ttlCR9S0cpACZ8flKzemrCxrnC4DA2N6N4AQz5crfyd%2BuynjhwqrfvFS9IcGcVJOlFFU13keH0UgZvtMM%2Fj9%2FCoBiw7cnPgu4jxZyypbyPndf2XRQ1oOq73wXBCVlwiBzuhawdrlJjU1T%2BTvqrCOpD0OpylhhGZDoYBcV2r8DrU%2FN%2FUn%2BIPylRZONyGlJwqWw1BUAfz6U7e2RVXSKMlcdhJXzmiplw3U%2F2tiB5CoBViqzwdo9M1tScplQCKlxZhMQQf31VeV4Z1d4RpmCoWR5DMXUGPIut1ZM3BC1XNFiMrN2L6yEdz3HEwt0r6XHR%2ByV3L6eNo12irZZR8%2B8N3OqqeIiaU%2B4RBN6hRxsd7qATJn4F0iFPoTids2wwT%2FJI3bpETevefwZeYxhnoLzqI36DmyuS9ri14MQM%2B%2BdHAmMFsVpsUup68B8J8C0ROf5wxhAYWFQr4TDDCcqtfDBjqkAfeqRbPxA8AmDQpkAYiRaZ2NnvWDN%2B%2B1fDahA8Ot6PBRLHYXmsfcw9q%2BxImGs9BO0cEMsSlGSVjvkNQy%2FHVIaeTPevmoku9A12Wvk74Y6je5dotFoLPXc%2FZc%2BB%2Bw3BN1u1Gkcgun4OlKd%2B%2Fl6ef6DCCy%2Fkec%2B%2BzLtLG0CJTEBTc%2BwDP5RWb0%2FR6X1d8QywQ26rPfJks0uRHNPKa3HMXg3Vay3Rmk&X-Amz-Signature=835d03f4aec9d21882782ea3f080ad81be47e6677a8d7851ff9091ef15d0a9ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBI27V7E%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQClzxrU7K9h%2BNPXgWV0qdtgta2ofP%2B3Qp9I9PsL3jJPLAIgYJBcODPI8ELiUl5WM9%2BrQaHdx2bjQPWB8W7MHc%2FjhEkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJusAJPLBd%2BvXsnf3SrcA5AXHYc6rusGFoOh9Zr2fSe%2BYONFsZLttzxuyI05HrSiErpQJ5b6oMxIwk9apeDJHKgBZKntrdjKyUBAcC%2FmGBZh2KmjjlC1AX9jCWooQj2vUpxBwAU2O32CARnhBfVyclzeCp5oNrnIkF8tZ6tGP8wxEhxRamprN7W8AnP6Y2NkwKa6bW58AZ834XY%2BzT0QIJfHWkyWZAdIkW5fO5umq6wfdJI5otFQTTQJCyD1qkBPbuUibYalhAV8t2SkJI571o%2B7gqxJk0CvRQfD%2B%2B5xz9XCx%2B%2BvcvCtXHhS%2FzQiWT61nGm6uJRfBCuWW8LWjwKVn2pIzrGbn3TkH3AeOyxetR1p84Ea19B44zQcD49p%2BlgBLSR1QCoa%2FjA%2BK5ujYu90qJaT850xDt7cREm90C3VhhbzrbUVq7llZaM3KaZ%2FQHQHeNBYOfd5UgszocDSKBbBh23AyOTEajarXKFI8o1ICEGIOrWT3qeCXXtKITSJSoqqdyuBOg9jO673uneddDx6uASUG5%2BXAQlhmGG4XjzoeaZoJNTOWVcfvCwmoAYys%2Fn%2BCQCrXjmKvNIqZXfZoEJSinNCPmtzmYtxntb%2BrnbtgTK%2FvEdAPpylDCpa4d1wSYi8pk6Le7MKoUUiLsjoMPqq18MGOqUBFYhfAlGPTikCJm9PZkkNtujazHWtCWmUwwtDT1pnjUmZWmqavxlHpDf7rxC%2BovqUKTIQtVpNiV51nitqWBwTz27Q%2BcPH0O8NtMJm9Jj58G20uSaGdyjV%2B15yyi%2F%2BHt3ioRT%2BFfpPU7of9fkVw3EwHmfSj9wtSg%2Fmh6UZZvvLMIZnO7bgX1QcIt5vsrLav%2Bz%2BvsJTFV%2FmmyFeCTRgW4qiNu8keDkt&X-Amz-Signature=788585721f06249641de2c00e0cbb7137d0c795ca16c9b48de5fcd5563c848f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
