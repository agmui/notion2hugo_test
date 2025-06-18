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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPBQJVHP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYI83bQfqKi5y3b3FgI8gbaTe%2BjGOAbafvr4thh6qtrAiAnaI%2FoDhyKQo%2BXRb4Db4Nq1XPwT1lP9MxzgHHPJDAgPyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWc99yWxwRPN4Aa0EKtwDgUbwWF2Fq8SXlRDvOmuDffYu0NfXX03yfa%2BVRVOjWWRaH2Tf77bJm7FmkRpL%2FHKXleyXugx4pNDaUE7CdiiVcFpGnSp2ykQsMQmc6IbvsSSLO54xfP5uBEp4vv3jU9jj%2FvSKTHUUF%2Fj9jBnnpqWyrxQd%2BTz4%2BL95pXEIlan8wYynuTDMGr26uDzGRJdyPHPAY3pC14Tc2JJpsGtEFei0ZVdON1JovEnrXJZZMYVD7UE4oOGi1%2Bn7djjyUlzmSdbefOLN1Ln0GlIY4Vw%2FzdM3F2CgXFpdei9yiVW06%2BBNBmpjqEDyHzktsV1awgUeqYYyCMsFoUkF1jC6c1rAnlCzQPb7rKTbyKM3g%2FIgzl19REoKJ%2BatypTPlXOEEm2QTgOA6et2Ckgf0WWiPmhh3QnDXjKRyS83ds6htLNfmF%2FfRyzweKF2ND%2Fuau4Y2z8Clmx9yEf8RSWS4YKG%2B%2FBoUNgBxIO%2BplRww7UHnwhPMZEE%2F46hdBpLvGSghnBteoJy3CgYTjnJHrPlOxajznF3vOXwqDLGHHHQpIIE6axbsuPRbAC%2FMncgWl3y%2BbwBlcGdgeugxIo1SFbdY52PUrSAskeFcXTlIs9AxQYgN43W57aJr7SI%2BKiqHbDK9exSkHQwvPfMwgY6pgGNnJv8dIM2N1P99gMbeWK5hlwyKOjKXbK0ScswcM%2BGL8kf3YRWvUDjwEn6xmmi%2BPiFJToazraVsV8ujfB1c8qlEnofS0ucmnz4PILu0Cb%2BCKvTzGr0p7wYPfqTPzJoM05xaVm2xZTp9TP7MUWpK2AeXPFftbVVHnLK5908MKAeSprZpVdAKuTK7hnWwgAOFNRBKSk78MTBGup0JpnkJ%2FtgNgHy3lcx&X-Amz-Signature=c4b8b98655c665072938ba6cff7fba8b334d2964b4b14e94046e73490106724a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPBQJVHP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYI83bQfqKi5y3b3FgI8gbaTe%2BjGOAbafvr4thh6qtrAiAnaI%2FoDhyKQo%2BXRb4Db4Nq1XPwT1lP9MxzgHHPJDAgPyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWc99yWxwRPN4Aa0EKtwDgUbwWF2Fq8SXlRDvOmuDffYu0NfXX03yfa%2BVRVOjWWRaH2Tf77bJm7FmkRpL%2FHKXleyXugx4pNDaUE7CdiiVcFpGnSp2ykQsMQmc6IbvsSSLO54xfP5uBEp4vv3jU9jj%2FvSKTHUUF%2Fj9jBnnpqWyrxQd%2BTz4%2BL95pXEIlan8wYynuTDMGr26uDzGRJdyPHPAY3pC14Tc2JJpsGtEFei0ZVdON1JovEnrXJZZMYVD7UE4oOGi1%2Bn7djjyUlzmSdbefOLN1Ln0GlIY4Vw%2FzdM3F2CgXFpdei9yiVW06%2BBNBmpjqEDyHzktsV1awgUeqYYyCMsFoUkF1jC6c1rAnlCzQPb7rKTbyKM3g%2FIgzl19REoKJ%2BatypTPlXOEEm2QTgOA6et2Ckgf0WWiPmhh3QnDXjKRyS83ds6htLNfmF%2FfRyzweKF2ND%2Fuau4Y2z8Clmx9yEf8RSWS4YKG%2B%2FBoUNgBxIO%2BplRww7UHnwhPMZEE%2F46hdBpLvGSghnBteoJy3CgYTjnJHrPlOxajznF3vOXwqDLGHHHQpIIE6axbsuPRbAC%2FMncgWl3y%2BbwBlcGdgeugxIo1SFbdY52PUrSAskeFcXTlIs9AxQYgN43W57aJr7SI%2BKiqHbDK9exSkHQwvPfMwgY6pgGNnJv8dIM2N1P99gMbeWK5hlwyKOjKXbK0ScswcM%2BGL8kf3YRWvUDjwEn6xmmi%2BPiFJToazraVsV8ujfB1c8qlEnofS0ucmnz4PILu0Cb%2BCKvTzGr0p7wYPfqTPzJoM05xaVm2xZTp9TP7MUWpK2AeXPFftbVVHnLK5908MKAeSprZpVdAKuTK7hnWwgAOFNRBKSk78MTBGup0JpnkJ%2FtgNgHy3lcx&X-Amz-Signature=7d274d187b9f74e22862fd64dec1ab4ca1955eab2bac988ae816fd271087ca9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPBQJVHP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYI83bQfqKi5y3b3FgI8gbaTe%2BjGOAbafvr4thh6qtrAiAnaI%2FoDhyKQo%2BXRb4Db4Nq1XPwT1lP9MxzgHHPJDAgPyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWc99yWxwRPN4Aa0EKtwDgUbwWF2Fq8SXlRDvOmuDffYu0NfXX03yfa%2BVRVOjWWRaH2Tf77bJm7FmkRpL%2FHKXleyXugx4pNDaUE7CdiiVcFpGnSp2ykQsMQmc6IbvsSSLO54xfP5uBEp4vv3jU9jj%2FvSKTHUUF%2Fj9jBnnpqWyrxQd%2BTz4%2BL95pXEIlan8wYynuTDMGr26uDzGRJdyPHPAY3pC14Tc2JJpsGtEFei0ZVdON1JovEnrXJZZMYVD7UE4oOGi1%2Bn7djjyUlzmSdbefOLN1Ln0GlIY4Vw%2FzdM3F2CgXFpdei9yiVW06%2BBNBmpjqEDyHzktsV1awgUeqYYyCMsFoUkF1jC6c1rAnlCzQPb7rKTbyKM3g%2FIgzl19REoKJ%2BatypTPlXOEEm2QTgOA6et2Ckgf0WWiPmhh3QnDXjKRyS83ds6htLNfmF%2FfRyzweKF2ND%2Fuau4Y2z8Clmx9yEf8RSWS4YKG%2B%2FBoUNgBxIO%2BplRww7UHnwhPMZEE%2F46hdBpLvGSghnBteoJy3CgYTjnJHrPlOxajznF3vOXwqDLGHHHQpIIE6axbsuPRbAC%2FMncgWl3y%2BbwBlcGdgeugxIo1SFbdY52PUrSAskeFcXTlIs9AxQYgN43W57aJr7SI%2BKiqHbDK9exSkHQwvPfMwgY6pgGNnJv8dIM2N1P99gMbeWK5hlwyKOjKXbK0ScswcM%2BGL8kf3YRWvUDjwEn6xmmi%2BPiFJToazraVsV8ujfB1c8qlEnofS0ucmnz4PILu0Cb%2BCKvTzGr0p7wYPfqTPzJoM05xaVm2xZTp9TP7MUWpK2AeXPFftbVVHnLK5908MKAeSprZpVdAKuTK7hnWwgAOFNRBKSk78MTBGup0JpnkJ%2FtgNgHy3lcx&X-Amz-Signature=670ea73277c08599dbcafc03584c9703ec565a8f68a5829937b84c8e8625900d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WVUZLHW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID63DeZ2JKRfaWk08Ulq7oZB3tfush4eNTzGhQiQD72TAiByqWO5DwSHUCZjCyeNGnYcxzbG3XviQkmpwYO4T41TSyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFe5HxRwIWAZVQ2NiKtwDGjrVWtFTzTyQmgUfSlEGt%2Ffio3Kg%2BtYTREsOryf5W6fq3Yud%2B5Wn77pct8PhPgXuJ8ZUOA7JAB3mpRd%2FbEYSkuEGw7lOIUcdaoEonyvwNBtBRrDKj02LGadhcH6floaCs70lbj%2Fv6NzOYj%2BxA09aHnpkAMmnRM%2FoVDAI5V7uqlmT4vEl7l%2B71zEMTreRqhB4Gc3O2TpfFHkiPU%2BYC0gKesEUUVDyBHeWvhyAy2qHa4wsP5A7cfFDs%2FX6v1x9MoxmV%2BHpcGvlxaFmTveR76dv%2BkEZmu6IOwmURZPy7gvac9WpCuz3EHWB1m7zytZDs5Us3gbSHlWnLw%2BjJ8cs7O2AwmKj%2F%2FmOr%2F%2Faz%2BZDpLlA7JQpvVTgV0HQp%2B7j4cvVbplJ8pVViKSgL8rDYI%2FVTa06j%2FY2jXf07BJ6rd%2B5Y3G6l5kh6o7hOJ6vTmENgRjmYkzodt0zPARiZ%2BfRpWLsnBDC%2FnP54lHyZpb%2FLpph4n1bgiaIbZaOPsmoyAeAuipAl8%2FWjd6Hhk2UD0Jn8gcAi%2Fd6VwnrqXS2C9v2IV%2BqJDN6mJWq8hmnTkJGiME4DRcbYOxRREGBwL57HeFw1UD%2BhZMYWiHc2bbA9FdH2qLHI%2BLBoZLiVnvgy47oePrvEFkwqPfMwgY6pgFFU9vzaMkBIja1Y5glgK0pMjGKgVikh0xf9Rct0OygP6ep2xQhQ7JZkwwzSLAk4sPgZwHeeK%2BIJXkQmvyDAgqdDVFXo1B81pVqsQFUZJalWejT87RTzE6MJ2iTpaootTXuFHbs7zhDTj2s21T6XLGvlqeLeyGOmChoJZbIVEMHKmCAPgjtLNB1K8O3jJmVUr%2BnXkzrphfGbxF0WPun7fCNg1lQnTUV&X-Amz-Signature=434fb8dc230e9ec873ef36e8b3e071ae4befd4f1373004a41781e0e1fcac6c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S4XYGJZ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3cE%2FqH6A0M2Sx77ETSPP7Bu4%2FHOHSNACnXURfoxNgwAiBFlF%2BmskNvjKdMMwbUAeqlB5WWrwvOUIXBpV0gYAGeviqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ6HgdQrrZoFmUVVwKtwDa7N47ZJ51gLso109Voy5%2BXjEcglfWJMeJpTo6MxFwFhy54bLIMxR9V6v2oJY6ME8P6hQyvjcZRpKcDlAf2i1gxAlph0PNl79Mg4RxSiz0aupXecnBChsiY6alhDVsX9VfC%2Fl455i%2BBvQtRzHOHghuM8ReOLAm69FuFTdSkyQurI6jlZA5Qv3E9a1FXHVXj%2B0odCGMWuQ4XE5BFQwfKRbisuPwjvOm4OHjaoK5JKvDZ%2FIYGD1ZOQ%2FX94vH5P0OZmIEKoIjW1I0JtGzKbNX3D%2BAONSVE62ZUJmD%2FiaGBRQON8an5QXfQWEEV9mbISHR0Wz78WSjRHCwbjqEPwwiOL%2Fxwy8iskudOG0oiFTbV3NY%2FFoN2d%2BW%2FzEyWG46oN7xs8scKeRnVq9AMN4UAZK2TFhFyUHtOF%2FcmrSydiPayCv0jOJxcsMipl6Rx853JODABqFvFbOZhqHcXEEpKOWSF1nAtYmnLbqNzOpKTjEuOwHptf6XgwIQse25aPZPxy9a3Ic4yKW70vXtX%2BjO7TJtLKaL9n7K00AMFvcFSRIpmCLTGqtSAL6RQ7zOCIneN%2BcrPyqW1QOMqfYNSpHmN%2F1YpIUF1q%2BSKhJKnvHxsMCx7pKyKwrfgt4tHS%2BIVVGpXswq%2FfMwgY6pgFsY3zzErPJKu8ANes4DLcSof1ghllz0%2BjvIL3FGWQpWark%2BL575dYD6WqhMLIByKc%2FRJf6ELXIJsCSMeLrLpViTe2S1h5qIkHTM8A%2F3j6FtBgYRyLprOz4v86ocTE8qYJOfmL7ysAvuO509AQJSWMRjglgFmKayPG7VYwuz0T98xbNBydsLqKV14aliAepzA%2B3z0Z6OawME%2BpXl5IOzT2%2BTiBsOKdt&X-Amz-Signature=e8f8bde3ccf829539e94da1e30f9d4772a3ffcedf960123159caa52752cb115c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPBQJVHP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYI83bQfqKi5y3b3FgI8gbaTe%2BjGOAbafvr4thh6qtrAiAnaI%2FoDhyKQo%2BXRb4Db4Nq1XPwT1lP9MxzgHHPJDAgPyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWc99yWxwRPN4Aa0EKtwDgUbwWF2Fq8SXlRDvOmuDffYu0NfXX03yfa%2BVRVOjWWRaH2Tf77bJm7FmkRpL%2FHKXleyXugx4pNDaUE7CdiiVcFpGnSp2ykQsMQmc6IbvsSSLO54xfP5uBEp4vv3jU9jj%2FvSKTHUUF%2Fj9jBnnpqWyrxQd%2BTz4%2BL95pXEIlan8wYynuTDMGr26uDzGRJdyPHPAY3pC14Tc2JJpsGtEFei0ZVdON1JovEnrXJZZMYVD7UE4oOGi1%2Bn7djjyUlzmSdbefOLN1Ln0GlIY4Vw%2FzdM3F2CgXFpdei9yiVW06%2BBNBmpjqEDyHzktsV1awgUeqYYyCMsFoUkF1jC6c1rAnlCzQPb7rKTbyKM3g%2FIgzl19REoKJ%2BatypTPlXOEEm2QTgOA6et2Ckgf0WWiPmhh3QnDXjKRyS83ds6htLNfmF%2FfRyzweKF2ND%2Fuau4Y2z8Clmx9yEf8RSWS4YKG%2B%2FBoUNgBxIO%2BplRww7UHnwhPMZEE%2F46hdBpLvGSghnBteoJy3CgYTjnJHrPlOxajznF3vOXwqDLGHHHQpIIE6axbsuPRbAC%2FMncgWl3y%2BbwBlcGdgeugxIo1SFbdY52PUrSAskeFcXTlIs9AxQYgN43W57aJr7SI%2BKiqHbDK9exSkHQwvPfMwgY6pgGNnJv8dIM2N1P99gMbeWK5hlwyKOjKXbK0ScswcM%2BGL8kf3YRWvUDjwEn6xmmi%2BPiFJToazraVsV8ujfB1c8qlEnofS0ucmnz4PILu0Cb%2BCKvTzGr0p7wYPfqTPzJoM05xaVm2xZTp9TP7MUWpK2AeXPFftbVVHnLK5908MKAeSprZpVdAKuTK7hnWwgAOFNRBKSk78MTBGup0JpnkJ%2FtgNgHy3lcx&X-Amz-Signature=99d03d62e5754b0de68ad0d5280bda2af6c36fa0cc189a2101b9f93a41a51fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
