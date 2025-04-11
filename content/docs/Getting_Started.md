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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6JCWTZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD%2BaZ3YFY7pNJNTDFMxA1ZApmopTdarmNElQFjESa9ZhwIgKDwGhUS%2FNFhqyiZDoe7iFGoNWJSsxXctUdSAe4uukp0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnQUwbo54fcauGoiircA04gaVjUW0IMkXwmxnRp80oLN%2Fgf6EIMNPDgJsDqLD4Dj9xq3eXrPAfovQN%2BDwP5NYs%2FBrwYmIJN8a1DUHXJOxRNWP36TZgy9Pt76Ea8gMe5DaqC0rM1eeI%2Ft79fR1bOCJml5i4VZUpQC9y7taefkgpgJMFaUGDoYHh2j3fEThKCVd3Nc5V4hEbfUK0bPNaM4VTYb4nl0jXKnzRVgcwPDvyr4JBLDsh1kK12Yx1RyTncKiyD2W7pgw6mJ8ne4jSUtRuHY9s6TFEr3eI09kwJkjJ29T3gzY%2Fsyx%2B8qnta%2FTXhguFED6DFCSXWqxy5nQc5zuTMQNFmqL364QhzZs9tG2OcTSuETVRIMyahIMtQsW8DX0hdLCQv1RlbvR1QFNfvByQDhbUZ%2F%2F0dDXMD6xxPGYBOojkFElRyC1pBJLJE1ZMymm49TNcKS0NFeqiA9cQe937uxOQl1MD8VreHS4I84JogON3Bios1GyXN77YVvMn0hR4LJ3C67AF4wlLmHM8W7NZCf2JM3QwxRIbs9AvJ736vnyAibkxahzHroUX1R5sWCgkx5C5hEAFD3K8g72Qm0c6NzJY2fZesCvc%2B7iPVsJN%2FOoUwlysxCVRSBUZvPGkkWIlAXE9M2hOI3PuDMM6r4r8GOqUB3Vn4nqiTLF%2Fh5KPaP2Hr7fF36UvjKxrBU4UNKZk5rPXIgYj53tpID%2BoOryGaF36oKLSNTTQn%2Fyu6uaFsrZXWtzaR7aNbZm1cFKI1vaFA7xCtK1b6ph6mCQDvhj8s3ZONOxG4IXr%2F5lEpeHRzPs9scgJxu33dGqT%2B9Bkglu24TV0B3YScLE2j8DVcOh2MKnzAMh%2BYr%2BMlqDaMYoVexRZnOlzR2s8u&X-Amz-Signature=ce1ac524995407558a6f0033e148d1d24901915e0fcc9bf3b5dd18beec2ea4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6JCWTZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD%2BaZ3YFY7pNJNTDFMxA1ZApmopTdarmNElQFjESa9ZhwIgKDwGhUS%2FNFhqyiZDoe7iFGoNWJSsxXctUdSAe4uukp0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnQUwbo54fcauGoiircA04gaVjUW0IMkXwmxnRp80oLN%2Fgf6EIMNPDgJsDqLD4Dj9xq3eXrPAfovQN%2BDwP5NYs%2FBrwYmIJN8a1DUHXJOxRNWP36TZgy9Pt76Ea8gMe5DaqC0rM1eeI%2Ft79fR1bOCJml5i4VZUpQC9y7taefkgpgJMFaUGDoYHh2j3fEThKCVd3Nc5V4hEbfUK0bPNaM4VTYb4nl0jXKnzRVgcwPDvyr4JBLDsh1kK12Yx1RyTncKiyD2W7pgw6mJ8ne4jSUtRuHY9s6TFEr3eI09kwJkjJ29T3gzY%2Fsyx%2B8qnta%2FTXhguFED6DFCSXWqxy5nQc5zuTMQNFmqL364QhzZs9tG2OcTSuETVRIMyahIMtQsW8DX0hdLCQv1RlbvR1QFNfvByQDhbUZ%2F%2F0dDXMD6xxPGYBOojkFElRyC1pBJLJE1ZMymm49TNcKS0NFeqiA9cQe937uxOQl1MD8VreHS4I84JogON3Bios1GyXN77YVvMn0hR4LJ3C67AF4wlLmHM8W7NZCf2JM3QwxRIbs9AvJ736vnyAibkxahzHroUX1R5sWCgkx5C5hEAFD3K8g72Qm0c6NzJY2fZesCvc%2B7iPVsJN%2FOoUwlysxCVRSBUZvPGkkWIlAXE9M2hOI3PuDMM6r4r8GOqUB3Vn4nqiTLF%2Fh5KPaP2Hr7fF36UvjKxrBU4UNKZk5rPXIgYj53tpID%2BoOryGaF36oKLSNTTQn%2Fyu6uaFsrZXWtzaR7aNbZm1cFKI1vaFA7xCtK1b6ph6mCQDvhj8s3ZONOxG4IXr%2F5lEpeHRzPs9scgJxu33dGqT%2B9Bkglu24TV0B3YScLE2j8DVcOh2MKnzAMh%2BYr%2BMlqDaMYoVexRZnOlzR2s8u&X-Amz-Signature=182707a3654117378fbf88198105167124c105fc03126cc6129bbb36b324a079&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL6ZN466%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC%2BZNmhlryAXsKD9S5wKBQ1ZiYQME5sEzNFQAKHSY%2FjwQIgUQmRjMRIzWotrZPEW0O6fdL%2BpjKAXIZ96RIrq1%2FlaIUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1RHNNd1mIRUiG%2BmircA66%2FGFrUdYVkwBiu3c4vLBYVx91WXHukD9dK7xtroZz05OE8UlxNZShfU10uCMV1hPTqCRiG8BPeTq3XgVen1j%2FXRiZkVuq1tbeugI8rhX1BIy9ZQNbq4rzbhYPZK9BO%2FCmmN%2F8ZXZuTCH%2B7pcWlYRKt4GcucIXBe4h7GMc7UUIbd3F5TvgrIk7PI%2Bb6j3I7aOYPAvneLINs9xvUaJIEXiIoIh3bQhvjZEfIqerwHOvwex3VfASe%2BeZJOrkTBACq2EOMlYzHsGaAf5a%2Bv9otUTYsLKNo5nEC2CWi3tNmfi013dI62L8Ji2V8zY8iak3KK5hh7SZuQx7xVNzN78oP3br5VxRqORzZzE%2B3VgxUX0K90PXdOhecHvt5GfbpSkKw6%2BBDxJpUF7fiQ7YH1Xab74Rubl7X1QNyjpwk4kSgAfkU1u%2F%2FCOrNfdzOYoOSTj9joDak1JE2ALV8WZme%2BtnFft22hNAhh1NzSJYTcg%2BTohg9Jj0KwGaUGFCkOP3p9aPYRbx4gRU5tSP1lBwIR8nLzszwTMDvrl%2F9VKYWt6%2FT7GtVwS09g2kTd%2FHqu0pAo83Ej0doMEUDZfZw7DgtyjsHFYgmxPZUA50tE0B7PpDU%2FidFpt52Ia2iEwnP7rT4MIur4r8GOqUBsZwiD2wJ5s4E2JrcbS6WClaPO40WjavlaSWA%2B%2BG10D5pYzDwDePOA%2Ftjs7tL6S1QTu%2FWmftfI1AN%2FWoTirIuYDAo8g767nK1d7INvhDuTqC87B12ODiYNQkvutSyAJ4iamSYwZKyN%2B1%2FVpMUB3uxOYTWE2KASJTBm4zyucF5%2BF9pAtpsCaKU%2BlYJM9PYyTML7IT37UxWixP0DDTFxEF4B1awxIve&X-Amz-Signature=2465e0d001387230e3e12072d45cd3c3d10da2df602893a63f4f4385b056cdf0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2NXUXV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDJbxV4surQZIjMxYju%2BgBftUoyX6jMdwUvSBKRhr4fiwIhAJ%2BcZh40miq6MD2wyJgblVg%2BMaYf43j%2Fo7o%2F1w6E%2FbvQKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUNvpwbyjnRjOB1EAq3AOlLnRY8PoN1KLHxhGNvqmbwGXGjH%2FPMsdtoobT%2FEqOkAJ2RZcCIq4eHeA%2FRzT0lh9eAe7D0HFXSflB2eds9VU15%2FhSy6xOAS4SL%2BmCxlBSMYRtyYnma%2FQfwzwJTQjgFQLVcTqOcWQOShIaEQh7z%2Fq8wIXXl%2FxyRRB9E5P7tq94mtO5xqOt6WmH9gI8Ur5maLLEqjzFkM%2BHeYERhuRYO%2BMAH2JYUvgZVYVP8VovR4gLbtFSVkjN6iWvXbQT3DIbOu7N0ppePkrxo7WjEf5%2FReObIQIJ7ZZZhEeWd2fAA78n4O8D6fOCOW7cwhVZrt%2FIf6bdmRkaMyfhCi%2BgdWfUptwNHdJZsL5SJeDa%2BxqhVDngkejQxKPdU%2BuqJM6dUW%2F%2Fj%2Fq2VypKM2brxsQICK00vLPj73z0obDdQh4Ae9kogi7sRRjtZQhWN5EvmcLEo0YMvaq9ENo6eCbnv9gxAH63SpD1j%2F9YpRoXIrQw29beIRUMg3omSpVTLKbNj0BL8MYdHuBNmY%2FGNgezPjfB4iY1wWJKL%2B72u4xbT%2Fv8FSJedv0kMqkWw63S%2F9VUOrqR1xo90mW%2F0QDYzb9N%2FW9f%2Bnfe7c7ZTg2myDJHcKgZufKea3USqLGC%2FpzInke12uKUrTDLquK%2FBjqkATSbID6tjLpu4MeaThQh%2B9scC2P1g9Raidpy9x0G6zVPId7QqkQpO8Qnw6%2Bl0x%2B8G22AwuyPVvEC8afyEvDnLcczYEEOG%2FFHJPX1UQIL2u2E17T4%2FHv95PaXacNfIVW2YcCGfiG7CmeJzjbCrMr%2Bi1nrYrdXdAEXZhj9BEsOjQRxpBksldYO093SMp06xLgpxXVMpAR86XAmBMpfiYfYQgDTPghF&X-Amz-Signature=b6f84a46608f8f4d4bdfeb8fba67f44d56141660ce330f6f2ed3d7d7df61b71d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P6JCWTZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD%2BaZ3YFY7pNJNTDFMxA1ZApmopTdarmNElQFjESa9ZhwIgKDwGhUS%2FNFhqyiZDoe7iFGoNWJSsxXctUdSAe4uukp0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnQUwbo54fcauGoiircA04gaVjUW0IMkXwmxnRp80oLN%2Fgf6EIMNPDgJsDqLD4Dj9xq3eXrPAfovQN%2BDwP5NYs%2FBrwYmIJN8a1DUHXJOxRNWP36TZgy9Pt76Ea8gMe5DaqC0rM1eeI%2Ft79fR1bOCJml5i4VZUpQC9y7taefkgpgJMFaUGDoYHh2j3fEThKCVd3Nc5V4hEbfUK0bPNaM4VTYb4nl0jXKnzRVgcwPDvyr4JBLDsh1kK12Yx1RyTncKiyD2W7pgw6mJ8ne4jSUtRuHY9s6TFEr3eI09kwJkjJ29T3gzY%2Fsyx%2B8qnta%2FTXhguFED6DFCSXWqxy5nQc5zuTMQNFmqL364QhzZs9tG2OcTSuETVRIMyahIMtQsW8DX0hdLCQv1RlbvR1QFNfvByQDhbUZ%2F%2F0dDXMD6xxPGYBOojkFElRyC1pBJLJE1ZMymm49TNcKS0NFeqiA9cQe937uxOQl1MD8VreHS4I84JogON3Bios1GyXN77YVvMn0hR4LJ3C67AF4wlLmHM8W7NZCf2JM3QwxRIbs9AvJ736vnyAibkxahzHroUX1R5sWCgkx5C5hEAFD3K8g72Qm0c6NzJY2fZesCvc%2B7iPVsJN%2FOoUwlysxCVRSBUZvPGkkWIlAXE9M2hOI3PuDMM6r4r8GOqUB3Vn4nqiTLF%2Fh5KPaP2Hr7fF36UvjKxrBU4UNKZk5rPXIgYj53tpID%2BoOryGaF36oKLSNTTQn%2Fyu6uaFsrZXWtzaR7aNbZm1cFKI1vaFA7xCtK1b6ph6mCQDvhj8s3ZONOxG4IXr%2F5lEpeHRzPs9scgJxu33dGqT%2B9Bkglu24TV0B3YScLE2j8DVcOh2MKnzAMh%2BYr%2BMlqDaMYoVexRZnOlzR2s8u&X-Amz-Signature=ac51ebaa136334818a67587d23fd452bd310d7adfaf7c32e042b96c6edb94a0a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
