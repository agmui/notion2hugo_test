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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T334VPHP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAOdTxLVe%2B68WjYmi8M%2FeZRgSLPl7EZGztKLk95DdLe3AiBcXVOeOdVUyK%2F3KvFU9bbgea3517dzwnK7jRgEvR2xnSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMPHnmRxONHxgiDEbiKtwDLpMTwSGgV9uxoBp5kqzJCZkqkMAJbrF8bxhmLllWVP0Tc58HBWYKqlT9sthvpCpeRN6m5edL68Pv%2BYfv7uicIYkjPhZjoZbh6bjf5goEuWKQCX4LcEUT30xFvHuq%2BJxg0%2F7fNXL5Tid9pSBPeppMK2g%2FtTjZ7pHotl9ZKrii26qslv07jSZiNZH3nosWDYer83GIMVFpE4wjuFzEVwrGdnWBcvwpiMZWSmlv52e2OunnFLldLYsbXJRKSCGb1t8J3OenfmOettDVDvPqLEj6oHDbTdIcmwLl9bTwZaODlwxlGCrbPmJnoFpza8WWePFBHFedSCsvc%2BWEwAmgDppsHT0rzZKBnMgPQctNyQhc5dRzbe7WlzodcFHPcg84lhFuw0o0EisHb5KC9UXn3XectvyXcnKK5BMASeCumgkpYctRMzgY8qXyXi5DHxCge6ecTyGid8nJ0UEdiCj7yQrvGmE7NHiJjs1%2FrtFZ8u8cBhpJAGM17newgPtcuBjCfJPgUd2eTUFRg4yKNd0RkFKqyOjFUBkGYsSkpxCXccfcP1w495Xk3mFLcstw3%2BHhIHGj6BjQbEElkIxeTkjQjm0IyQ4J0NImz9cW07OHEFCejnY%2Br%2FNF7tB9dgCdnJUwzum7vQY6pgG%2FPc5D9qEqjdoMzsmiHaxy0TDeGPNPDQhTY33mNVsRtNNU6WZ4u4XnnEw33zSYkgDs0oL6YkSZAT6c2CPixNzgMtwzrFFn4fUXaDodjTSKNsTGCdgxDAJockv5sT8usuOXg2H3fDhdkW%2BWk1Nd6QKoHdGuDPqtpRMmknszyeuwc6LwjllJ0tsjRGfwNN6PdgLiw4I991VwmzF4DpK6EbXa5MNmabGF&X-Amz-Signature=5464939da6cb3536b59c335837476fa108331314d134d3ab0389083307539712&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T334VPHP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAOdTxLVe%2B68WjYmi8M%2FeZRgSLPl7EZGztKLk95DdLe3AiBcXVOeOdVUyK%2F3KvFU9bbgea3517dzwnK7jRgEvR2xnSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMPHnmRxONHxgiDEbiKtwDLpMTwSGgV9uxoBp5kqzJCZkqkMAJbrF8bxhmLllWVP0Tc58HBWYKqlT9sthvpCpeRN6m5edL68Pv%2BYfv7uicIYkjPhZjoZbh6bjf5goEuWKQCX4LcEUT30xFvHuq%2BJxg0%2F7fNXL5Tid9pSBPeppMK2g%2FtTjZ7pHotl9ZKrii26qslv07jSZiNZH3nosWDYer83GIMVFpE4wjuFzEVwrGdnWBcvwpiMZWSmlv52e2OunnFLldLYsbXJRKSCGb1t8J3OenfmOettDVDvPqLEj6oHDbTdIcmwLl9bTwZaODlwxlGCrbPmJnoFpza8WWePFBHFedSCsvc%2BWEwAmgDppsHT0rzZKBnMgPQctNyQhc5dRzbe7WlzodcFHPcg84lhFuw0o0EisHb5KC9UXn3XectvyXcnKK5BMASeCumgkpYctRMzgY8qXyXi5DHxCge6ecTyGid8nJ0UEdiCj7yQrvGmE7NHiJjs1%2FrtFZ8u8cBhpJAGM17newgPtcuBjCfJPgUd2eTUFRg4yKNd0RkFKqyOjFUBkGYsSkpxCXccfcP1w495Xk3mFLcstw3%2BHhIHGj6BjQbEElkIxeTkjQjm0IyQ4J0NImz9cW07OHEFCejnY%2Br%2FNF7tB9dgCdnJUwzum7vQY6pgG%2FPc5D9qEqjdoMzsmiHaxy0TDeGPNPDQhTY33mNVsRtNNU6WZ4u4XnnEw33zSYkgDs0oL6YkSZAT6c2CPixNzgMtwzrFFn4fUXaDodjTSKNsTGCdgxDAJockv5sT8usuOXg2H3fDhdkW%2BWk1Nd6QKoHdGuDPqtpRMmknszyeuwc6LwjllJ0tsjRGfwNN6PdgLiw4I991VwmzF4DpK6EbXa5MNmabGF&X-Amz-Signature=6812433dd7a009c9369a9f35b5eb559f87d9ff432f1441b1c13a69dfedf33295&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6C5GQ6S%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCGBfBQo4WV6ROYKlX%2FeSbjeoJ63FUp3BZFgGCFAPjsUwIgdusi%2FrI%2FdQ1IQrBKGh5XX4%2Bmq5UDwddvzw47CI6%2BdDQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFEB%2Fg2UyPfdmQgKGyrcAyMdYROoGv4pKBGIvKV0zelaXUtU5wAwAtqyBfJhzoupxy2dVJbTl7fDfakHrxB83qbd4goWVFx6ySBkkuhYBFmMPCZa0ijljgw7C8L7R3s1WmZd1351t2oZlFMUacQ462jsmjkmjpJSv9xLCR%2BQVfQavyjIQPYz17bFAB21eV%2BdRU%2Fxu%2FcmhyK%2FyJL4Hdt5WDqN0BkqxztxYAzt1qGABnRwPgShuMkW0w04DJI8XzxsoRibFbQybWWTo5BlD%2BpY1dTwLt7YhLXub7IGV3kSAVWgrklLsdoYrVgoF9qjYd0ezHRJ6RxnRQmRCMJyHBLGz7fuf0Wh1QEh5ARdqQldJlt3ggRa8oS5Hmtm%2FeHIL8vcY2ffWI7HvyQ9BtzCBpk0uOHCPeYFbyBEp8TV3Zq%2BV75c%2BAwmXkm775sVfR5TOlLnuY0UfjMcrRffIGdJ1g9X6W6V8yQhLezDmrGzdmuk5YSoowkwZWLPt7aHws9P%2F9RKUUFIOAs4m%2F1nnkb0luSRoqIjo1yAeQeqNTDC9z8qjbeiAWL0%2B6X4t57mlFyd9p9BzEhUC%2BBwXHYQmVKUIy7ii8Whqo2%2B5UwI2oYU2yHL%2BIJZcRpTwGa8tZGeI%2FnaDB8w5RMbAaXYR0IOkYJCMMzpu70GOqUBR2YpRHyRGkkNmk7eRSMCK55a2z2cJfQ95lwviM6kIJKSwjwlqG97RQGpf6DpCh2IGEVtXEFvASHS6EozxQEu%2B1v%2BaAW5oTlE1kyD3Pews02eliPA56CZWhd5PJh4%2FKDwDtkduMy7udHe%2BP7xMzYUqqOw9KKVY%2Fmjokv4v2kGPMe2ILRpbwgoE8ebORjoXI7C6kuaqTN1%2BkZiBkfdFKP7lynVUFUX&X-Amz-Signature=7f4effcd7dbbacdbfa76b2b9378b51da47d7959b780e477da48e626920b993a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIL34PUN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAMhMh%2Bmf7truoY%2FkYQvvSF6GGzGZLyF8ZjBuGNDHGQbAiEAzietZkWA5QpjDldTmvNt6Ph9WErmxR3VJhnua67aXlgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKl%2FBc%2FXfDMsut4tJircAxgL9RLglNmQqGDWuXpV%2FK9t5Ndp%2FnOhI4M84uOznjcM15lNmEbhVTKdZFbf9cOuNx4m9eIY5FtoCEb7A3ASZ%2FsRQPZ6L%2BeoMvOFvV0lMG7Z4Xb%2BF7KQj3RJizToGynGbHM8tZnmsgRk0AMcDVfwowe4oqiokG30I1MEuiqTYwa8pChKBUxIlzTMiwLFb8moTCvlSC5jhf3Fo1lQfls7t2MzeSxO%2BYSZoUU838y%2BXScrNZXHlsDJU7uPhjvVSt9i9jI1xHhcULWVgHS6NSTtwTVft6vZIMWZNccjfFgn5zb7rI6tMY3C4NQln2NdFrOmadOn3bBYmWVKfb7%2Fu0tPvFp0uy%2BYmgyOlyR4DikqeMm%2BXvZZeKe1LvuQ%2FZMn%2F%2FmDVKqUgFIsglFv1N0rYc7UPCubhbK4%2B1%2BUD8j%2F3m1JyBg4eEJYqIMqvjJQd%2F%2F0ahZZ%2B8yMcgmJFwduh3G%2Fgled3oAL3wB%2BwCh2fYlwiNrXLFwzFcdNiZhn4EtAKOZvu58hEwN99u8gzeGRCd5AsnGLlZLZ9wobDNlCxUCGnx7IInbWRznm3SOmJ3bNm2KiivWK%2BI32ROW%2Bv5%2Fo4uyNc2H690NL%2BGk0WRB2oAa%2B7l%2BjCwh8kzsIsYeCt2eqCqoTMMPpu70GOqUBX29qz2F3omQhH%2FvFBtgjNHbhlewUTAb5LCySqcCaDyiXgnct1YM%2By4HaUmnTInzLEy6GpyegRXrJuQbRfSfq2RooVOx%2FFFa4GJHTJmrTDmZsCUeUVqi9hB4WSSkpCAHoM27hDEBoGliqHNowLexTfdMsb2OtHNtVQRTcBYCKQCe%2F6JE2E6TrAz%2BhajhtuP6jJ5w3uKbFc7AMF41RpbxBcaN%2Bfzzz&X-Amz-Signature=918333fb01ff76a56d54011956127421711941fb5c55b780377cd42c20ce2bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T334VPHP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAOdTxLVe%2B68WjYmi8M%2FeZRgSLPl7EZGztKLk95DdLe3AiBcXVOeOdVUyK%2F3KvFU9bbgea3517dzwnK7jRgEvR2xnSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMPHnmRxONHxgiDEbiKtwDLpMTwSGgV9uxoBp5kqzJCZkqkMAJbrF8bxhmLllWVP0Tc58HBWYKqlT9sthvpCpeRN6m5edL68Pv%2BYfv7uicIYkjPhZjoZbh6bjf5goEuWKQCX4LcEUT30xFvHuq%2BJxg0%2F7fNXL5Tid9pSBPeppMK2g%2FtTjZ7pHotl9ZKrii26qslv07jSZiNZH3nosWDYer83GIMVFpE4wjuFzEVwrGdnWBcvwpiMZWSmlv52e2OunnFLldLYsbXJRKSCGb1t8J3OenfmOettDVDvPqLEj6oHDbTdIcmwLl9bTwZaODlwxlGCrbPmJnoFpza8WWePFBHFedSCsvc%2BWEwAmgDppsHT0rzZKBnMgPQctNyQhc5dRzbe7WlzodcFHPcg84lhFuw0o0EisHb5KC9UXn3XectvyXcnKK5BMASeCumgkpYctRMzgY8qXyXi5DHxCge6ecTyGid8nJ0UEdiCj7yQrvGmE7NHiJjs1%2FrtFZ8u8cBhpJAGM17newgPtcuBjCfJPgUd2eTUFRg4yKNd0RkFKqyOjFUBkGYsSkpxCXccfcP1w495Xk3mFLcstw3%2BHhIHGj6BjQbEElkIxeTkjQjm0IyQ4J0NImz9cW07OHEFCejnY%2Br%2FNF7tB9dgCdnJUwzum7vQY6pgG%2FPc5D9qEqjdoMzsmiHaxy0TDeGPNPDQhTY33mNVsRtNNU6WZ4u4XnnEw33zSYkgDs0oL6YkSZAT6c2CPixNzgMtwzrFFn4fUXaDodjTSKNsTGCdgxDAJockv5sT8usuOXg2H3fDhdkW%2BWk1Nd6QKoHdGuDPqtpRMmknszyeuwc6LwjllJ0tsjRGfwNN6PdgLiw4I991VwmzF4DpK6EbXa5MNmabGF&X-Amz-Signature=4594a739f9a28280f7056b645a80b6133dd513637046336a9ba75a10ebdfa04a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
