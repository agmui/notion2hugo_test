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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBSEN4RG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIECA8La2S0FHoq2Zi4PZ5E1VqqvxHfzvkS5aoj2HBAPrAiBKwpvWYJIBcOLUTIP0gE3v6yggzyW2ZURWY1ltzAMagir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMuOa%2BtR8nYOHjsSWFKtwDQ7gtzzw05%2B7%2FhAnOGNwo5PvuHXQqEFrfIEb02GgUOBi1rWgTuciLPIt2I3GffwPed5vsrBoWdlc9pXLKbuLwozdFdyW1wcpujzsM9kbygbPUSbyTm8PifS%2BzUJ17Md7K3WkQ2avuLSlTU476hxkczQW1telftn%2BIr%2BGFw8d5cfzP6HzS3rwGOV8KBMlEwkEI9GJ6LvJOdALGda4pqOAF8l5LbBOk1utShRj3HW%2FQcRswhDI6K%2FTnkJLt1NU9qDpoh8uUD9c0CeKZRrb3JVNfm%2FwnL2HHB%2FfK5WoBPZKxKjhAE4hPpSFQa06Yy12xjBVzgBaaXyFLT2UKmp8jYlxGWjIkGO%2BZig0WSwiH%2BK3Ip4Thq%2BN94y1RB%2FShiXMI6AtILYe49sRuaiwpy9%2F70AXf8jiyFBJJrAgWsHC7PDNCTNvZmKYEOTTk8qM9mn8B2b13w7UtLept6DkFxuf8QVlE93lZoF8MuAKB3hn6DFzXhn2Grcve%2FyQsQ6joXArFrZYtxldrYeaUtECLfvPLxiUXxdSb%2B1kGC2uVirliQTyMUf0trRukW%2FUX07wOfPSisWy5ORrJctgXfd6dDbqNRSB%2BLVeUUg8YM8CFzLU%2FHE9jVa4E9adFaDnLTQ6cgHwwq%2BigwwY6pgHNW9hDV9efLz851f8ZHw%2BbjQ7uGOXnJ17tOgNlVGDRH%2Fx0kfjx7DSgfcTv8e%2FqqLTG3RXLAObuuqIt0TJKmiBwd5YhdryjStvIl7UjYNAfnbng3dbUf7757rbpxQm3AmhI2vvP9UIqszvTVog7tiNR0D7xkem22dTzhucaq5MxDCbKpXzCJ1kWT16kRwC6zQW84fPOZjZI21suDu7nzt5LK1P1OvH1&X-Amz-Signature=53d69252cce918f46e2b2b28bca0158b424bb101c30ce03184cb71f738d0868b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBSEN4RG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIECA8La2S0FHoq2Zi4PZ5E1VqqvxHfzvkS5aoj2HBAPrAiBKwpvWYJIBcOLUTIP0gE3v6yggzyW2ZURWY1ltzAMagir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMuOa%2BtR8nYOHjsSWFKtwDQ7gtzzw05%2B7%2FhAnOGNwo5PvuHXQqEFrfIEb02GgUOBi1rWgTuciLPIt2I3GffwPed5vsrBoWdlc9pXLKbuLwozdFdyW1wcpujzsM9kbygbPUSbyTm8PifS%2BzUJ17Md7K3WkQ2avuLSlTU476hxkczQW1telftn%2BIr%2BGFw8d5cfzP6HzS3rwGOV8KBMlEwkEI9GJ6LvJOdALGda4pqOAF8l5LbBOk1utShRj3HW%2FQcRswhDI6K%2FTnkJLt1NU9qDpoh8uUD9c0CeKZRrb3JVNfm%2FwnL2HHB%2FfK5WoBPZKxKjhAE4hPpSFQa06Yy12xjBVzgBaaXyFLT2UKmp8jYlxGWjIkGO%2BZig0WSwiH%2BK3Ip4Thq%2BN94y1RB%2FShiXMI6AtILYe49sRuaiwpy9%2F70AXf8jiyFBJJrAgWsHC7PDNCTNvZmKYEOTTk8qM9mn8B2b13w7UtLept6DkFxuf8QVlE93lZoF8MuAKB3hn6DFzXhn2Grcve%2FyQsQ6joXArFrZYtxldrYeaUtECLfvPLxiUXxdSb%2B1kGC2uVirliQTyMUf0trRukW%2FUX07wOfPSisWy5ORrJctgXfd6dDbqNRSB%2BLVeUUg8YM8CFzLU%2FHE9jVa4E9adFaDnLTQ6cgHwwq%2BigwwY6pgHNW9hDV9efLz851f8ZHw%2BbjQ7uGOXnJ17tOgNlVGDRH%2Fx0kfjx7DSgfcTv8e%2FqqLTG3RXLAObuuqIt0TJKmiBwd5YhdryjStvIl7UjYNAfnbng3dbUf7757rbpxQm3AmhI2vvP9UIqszvTVog7tiNR0D7xkem22dTzhucaq5MxDCbKpXzCJ1kWT16kRwC6zQW84fPOZjZI21suDu7nzt5LK1P1OvH1&X-Amz-Signature=1e06af465351e69a7ffa492438e1f93fb8b401416fe21d4227f4f27bfb1c4f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBSEN4RG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIECA8La2S0FHoq2Zi4PZ5E1VqqvxHfzvkS5aoj2HBAPrAiBKwpvWYJIBcOLUTIP0gE3v6yggzyW2ZURWY1ltzAMagir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMuOa%2BtR8nYOHjsSWFKtwDQ7gtzzw05%2B7%2FhAnOGNwo5PvuHXQqEFrfIEb02GgUOBi1rWgTuciLPIt2I3GffwPed5vsrBoWdlc9pXLKbuLwozdFdyW1wcpujzsM9kbygbPUSbyTm8PifS%2BzUJ17Md7K3WkQ2avuLSlTU476hxkczQW1telftn%2BIr%2BGFw8d5cfzP6HzS3rwGOV8KBMlEwkEI9GJ6LvJOdALGda4pqOAF8l5LbBOk1utShRj3HW%2FQcRswhDI6K%2FTnkJLt1NU9qDpoh8uUD9c0CeKZRrb3JVNfm%2FwnL2HHB%2FfK5WoBPZKxKjhAE4hPpSFQa06Yy12xjBVzgBaaXyFLT2UKmp8jYlxGWjIkGO%2BZig0WSwiH%2BK3Ip4Thq%2BN94y1RB%2FShiXMI6AtILYe49sRuaiwpy9%2F70AXf8jiyFBJJrAgWsHC7PDNCTNvZmKYEOTTk8qM9mn8B2b13w7UtLept6DkFxuf8QVlE93lZoF8MuAKB3hn6DFzXhn2Grcve%2FyQsQ6joXArFrZYtxldrYeaUtECLfvPLxiUXxdSb%2B1kGC2uVirliQTyMUf0trRukW%2FUX07wOfPSisWy5ORrJctgXfd6dDbqNRSB%2BLVeUUg8YM8CFzLU%2FHE9jVa4E9adFaDnLTQ6cgHwwq%2BigwwY6pgHNW9hDV9efLz851f8ZHw%2BbjQ7uGOXnJ17tOgNlVGDRH%2Fx0kfjx7DSgfcTv8e%2FqqLTG3RXLAObuuqIt0TJKmiBwd5YhdryjStvIl7UjYNAfnbng3dbUf7757rbpxQm3AmhI2vvP9UIqszvTVog7tiNR0D7xkem22dTzhucaq5MxDCbKpXzCJ1kWT16kRwC6zQW84fPOZjZI21suDu7nzt5LK1P1OvH1&X-Amz-Signature=0004bdfa7e74b210d62053ef78caefbb23fdfdcc0f0373ccb97241837c2167db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTWP6EZ7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIEl0H%2Be1eQhXkEYe22hwcUYEDssFUznR1HtXhcKYUq4UAiEA1cOTfuWMJf0bkLcxUpraBQWz6ZsX54LpD%2F0a126GuUcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNW1HJT0SY2q456geCrcAxNHIo%2BPp0s7Uezv9beM6v%2FmhIiT0sEtm%2FXNiS0jtpur9ZLZAwnTet1L%2FKGPGnnBf5q%2B9w4WXPMFUnBCx2XleaCg3wHrIHmWTLu03bqPPEJo7vA%2B3aEQlUhOWsDs%2FU%2BdLq%2BZ%2F6uum3M%2Br7jBrZs1Av5pdwrTJiqUxK1wtLuj5rjlPUc0arNLuzWwh%2BhEkl24kP6LQ%2F3m7mCUI5ompwMEk0dFc0Tvr4lgVYrRLac%2FC8ui0fEmkyWb4WK4B9hfYCdIxBvz5XpD6bej75cnmXVZO4pG9xqXs7BboFz0l9r0Y7%2BVTv10akdfP6K3wMzV%2BPWc1OnM4HnF2pFv74agz%2FvoTI9EOtzyHm0p3GcFISecsMOP7kb7oN0kjmJaPeOhoMq9%2BsFuk3kUekdXA9N4F3fCklZKtCCJNJ9MLHcm105juyzbI05jNKzKEZxQQDKmskWsWqjdtBmTEHOUCCM6ztJjdV%2FK5XnUhoBTljbXneJOBqtoamgAxje1OqqzuoG9DjUvsA8LXfG0ub8yWwqhO9XAvf79Ych303G8MON4P2zCfk7Hq0FJshGMGoRyt4wUuB7hoKhXrHVoPWppcDNU8rXv0ZPDRZoagwb7DMCSOCgfTi0d9Hm6UfQVleguAFzIMI3ooMMGOqUBYSy8wTi2aECMRYiqGKTDsLG9k3NftUpGjOizibi5Ksvm%2FgJF2rRo2o%2FoyH4zfqfA8aoOjzKB4a3D%2BENpLz3RGsrqDs05ZRkSOcDdRd8CHSoj7vfGsMUmnDFLcoq7j%2Fbmn%2Fa0cpPh1hxph1XBUkxaNFS4BmwLDOCh3FhBIJ%2B1jxGFngRfxSsHDJfNXw2OikMZcY8EwE6EmzUt%2BBw%2FW1JG8UKtpEH6&X-Amz-Signature=dc546744adf486a40a30deddcbc0679111f0b8dfd41f4903c1787fb9e77f4226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHYP6FDS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCk%2BM9m1Zob31FcCWGGQI5cYNoXPHlP1QVBEjWJaUQgpwIhAJ%2FUgoJ7Pch2KLHIcr%2BQ%2Fe8Wq4zlalL0R3K4vDLGpWGSKv8DCDUQABoMNjM3NDIzMTgzODA1IgwuEZ9MMsdB7frRBGAq3AP69sm00JpcaQQy9Wq8dESpVH505pBRaFFBwL%2F2I8XLPzjP80G2w1%2BVztV3BZ%2BwelmkgLzQJAJMAfPHWhh1Tn%2BBuEochSK3NO9YkdOZFb%2BBkXfy64o5Gw48v9GWzSUYjmHpamiWqX6yhV7NwDWBZgCPBUciF%2BvRcyrf%2F0ejiTbNj8W8cgXUOf8nKwrHdQS3JWmi2ebW4MGcJ6vj%2FwhxQTWnOgcJrchBvs3v7l0S9%2BwQQlYB9kiJtT5s8uQHE3IPSeCM3xL22w%2FABfhNUBDoLAg%2FV5%2BnU5t3YzRYy5EoNOCAjcsKh55ga9q%2FaNfFx3Vr4fa72KOztMK4AVKa98pJQsXlzVZme4ac98Tx6SEcyWAhKLcNYOUnf2n8rFOes9aBoK%2FS9WSOF3aRNuhoSeUohksAaphBgttywq%2Byik49ni228XP1a0FG5n368nX205y4NBUYk21gieOg7%2BzXqw5rGOj4N%2BsWwKLUM%2FueXejhwnn43FmFeYmEZKvWyIBGMSbZyi7Vx6%2FkaLKFTpxuFoWh18xSVJrSOyq8M7EVkLnMqM9OrI5JD36XqCtn%2BCG5cHU%2BMWpSIyAbPwwf7ayYb8av9lMtoT9OOpIJOOvk747rvfjc6DiEmwY846jFbQH0bTDE6KDDBjqkAXGQPPB48gdJWBGa8792Gqjj%2FEIbqOQE2Nik1hUg0NiQ0XcPAbXOjov1hbxIeJ%2F%2F9cxHY4sAb%2FebPgvoL5Yx2nSVmOxoa7l7wVuY0sj5kkCQkhyCRS5YApAGaTbZhXJeEbQr0BUnhGKZQ7NF47s086zQQVwu7cukbY5gvs%2FTF2GMN6XzETtT1vGuWgG4nR0ueJUEjjsBuAJvxszOEEgdzELjTSqe&X-Amz-Signature=1e7693f83bbb07d2c669cde5ae0e1e2c71383501a6f0dcf368bef5157c49adf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBSEN4RG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIECA8La2S0FHoq2Zi4PZ5E1VqqvxHfzvkS5aoj2HBAPrAiBKwpvWYJIBcOLUTIP0gE3v6yggzyW2ZURWY1ltzAMagir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMuOa%2BtR8nYOHjsSWFKtwDQ7gtzzw05%2B7%2FhAnOGNwo5PvuHXQqEFrfIEb02GgUOBi1rWgTuciLPIt2I3GffwPed5vsrBoWdlc9pXLKbuLwozdFdyW1wcpujzsM9kbygbPUSbyTm8PifS%2BzUJ17Md7K3WkQ2avuLSlTU476hxkczQW1telftn%2BIr%2BGFw8d5cfzP6HzS3rwGOV8KBMlEwkEI9GJ6LvJOdALGda4pqOAF8l5LbBOk1utShRj3HW%2FQcRswhDI6K%2FTnkJLt1NU9qDpoh8uUD9c0CeKZRrb3JVNfm%2FwnL2HHB%2FfK5WoBPZKxKjhAE4hPpSFQa06Yy12xjBVzgBaaXyFLT2UKmp8jYlxGWjIkGO%2BZig0WSwiH%2BK3Ip4Thq%2BN94y1RB%2FShiXMI6AtILYe49sRuaiwpy9%2F70AXf8jiyFBJJrAgWsHC7PDNCTNvZmKYEOTTk8qM9mn8B2b13w7UtLept6DkFxuf8QVlE93lZoF8MuAKB3hn6DFzXhn2Grcve%2FyQsQ6joXArFrZYtxldrYeaUtECLfvPLxiUXxdSb%2B1kGC2uVirliQTyMUf0trRukW%2FUX07wOfPSisWy5ORrJctgXfd6dDbqNRSB%2BLVeUUg8YM8CFzLU%2FHE9jVa4E9adFaDnLTQ6cgHwwq%2BigwwY6pgHNW9hDV9efLz851f8ZHw%2BbjQ7uGOXnJ17tOgNlVGDRH%2Fx0kfjx7DSgfcTv8e%2FqqLTG3RXLAObuuqIt0TJKmiBwd5YhdryjStvIl7UjYNAfnbng3dbUf7757rbpxQm3AmhI2vvP9UIqszvTVog7tiNR0D7xkem22dTzhucaq5MxDCbKpXzCJ1kWT16kRwC6zQW84fPOZjZI21suDu7nzt5LK1P1OvH1&X-Amz-Signature=10a3f77b3bd130915ab9538631abc272116756e73ce432b967859b4e0cad8118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
