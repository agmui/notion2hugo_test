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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJDRRK6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzjuk1ZJNHSsHHmditrZ9ysReDUSKZMt%2BhR5yTEVXeMgIgNNhsTIPZT%2FzdQccrHW4HCuw3OrhHSZn%2FI6d%2BCxDwCpAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh7Fq%2B9GwTXRO1V9yrcA7TAPawqiVhR432EHNqOOP74NcZYi%2BVUUkaBwmyXC%2FB0vgMmAHxV7JpLdjLOIFIz20MZFCGwY%2BIMJCrIxzlgI4fVO813L00Qr3jbZ3TggykwfyVUmfIUMggERnLFfO0YraHPduarL8QQHhMWWIXChvxyevwU1W1thYnZx8IOfujlIs5nSTvGMKpuat3j2sk%2FW1S2flCptTAJCw8J3oDrtkxWTvEc%2F0AQDgC7mLJbzO4KXA0o4tCkUiMM4Rwl1hOzflPOu8L1D0H063c8S1E05VPCLnBHaRF%2BhQOI%2B8s9AdhcfaGFIQ3Cu9BZB4jNMpmF2wEWlArAMsJqv1%2BefmfxVdPGxK%2F4Pg4CEVcjod%2FG4ZxPKnlCQ6yRZHtuskRGqsaBhmu7ODPlalTM5EOlEPKOAYDMx9rnXISMHks1vDtV2k54aZ7cQhYAJhnOmqdexiIvyxfznmRz9N7N436Gjju8TI4yECnfHA7RChLn%2FMxMzJ8ksgAyL9%2FMQsFgGVhvpX0hjEZkg6Wa8EiA9yUN7JPYzoIJ%2FtytfU2iz%2Fj81RpDu4SIxWcL3iQClISYrAFWugHlz6HTdpc6rLBPmrsHPHfG1to8ZGWphI8y3Y9%2BGCJ4zGzxyntlRdBGSQTTKWwYMNjW%2BsMGOqUBZefGJJUMECKFyTsGT0YrM34OjzS%2Bo1K7fAlbQVeSH9NB%2FOVicaLGP5Esik%2Bwaa2UkEaGJWD8IHBT%2FQ023NgyumOTUp3zXzf1XIvr3%2BORQ6ZNJZcnmI8Lsu0%2FpBb3P7rWRcuaSy8pzf%2B3p6oDsmXN2CHP4pAeUbLwZTBZ8FFYzyl%2FU5ty2uXJrbpiIwituPlXpx1CXJ6dioX4XFMnWz1MUZyobgCR&X-Amz-Signature=2a5f8da54a10d8e7f2b9be48dde21fbe3c66a3f7e8434b91a08d2ec3437073ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJDRRK6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzjuk1ZJNHSsHHmditrZ9ysReDUSKZMt%2BhR5yTEVXeMgIgNNhsTIPZT%2FzdQccrHW4HCuw3OrhHSZn%2FI6d%2BCxDwCpAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh7Fq%2B9GwTXRO1V9yrcA7TAPawqiVhR432EHNqOOP74NcZYi%2BVUUkaBwmyXC%2FB0vgMmAHxV7JpLdjLOIFIz20MZFCGwY%2BIMJCrIxzlgI4fVO813L00Qr3jbZ3TggykwfyVUmfIUMggERnLFfO0YraHPduarL8QQHhMWWIXChvxyevwU1W1thYnZx8IOfujlIs5nSTvGMKpuat3j2sk%2FW1S2flCptTAJCw8J3oDrtkxWTvEc%2F0AQDgC7mLJbzO4KXA0o4tCkUiMM4Rwl1hOzflPOu8L1D0H063c8S1E05VPCLnBHaRF%2BhQOI%2B8s9AdhcfaGFIQ3Cu9BZB4jNMpmF2wEWlArAMsJqv1%2BefmfxVdPGxK%2F4Pg4CEVcjod%2FG4ZxPKnlCQ6yRZHtuskRGqsaBhmu7ODPlalTM5EOlEPKOAYDMx9rnXISMHks1vDtV2k54aZ7cQhYAJhnOmqdexiIvyxfznmRz9N7N436Gjju8TI4yECnfHA7RChLn%2FMxMzJ8ksgAyL9%2FMQsFgGVhvpX0hjEZkg6Wa8EiA9yUN7JPYzoIJ%2FtytfU2iz%2Fj81RpDu4SIxWcL3iQClISYrAFWugHlz6HTdpc6rLBPmrsHPHfG1to8ZGWphI8y3Y9%2BGCJ4zGzxyntlRdBGSQTTKWwYMNjW%2BsMGOqUBZefGJJUMECKFyTsGT0YrM34OjzS%2Bo1K7fAlbQVeSH9NB%2FOVicaLGP5Esik%2Bwaa2UkEaGJWD8IHBT%2FQ023NgyumOTUp3zXzf1XIvr3%2BORQ6ZNJZcnmI8Lsu0%2FpBb3P7rWRcuaSy8pzf%2B3p6oDsmXN2CHP4pAeUbLwZTBZ8FFYzyl%2FU5ty2uXJrbpiIwituPlXpx1CXJ6dioX4XFMnWz1MUZyobgCR&X-Amz-Signature=8f8412f2ddc4f888f11eaac7cf2fdbc2a5eddc0d4bd77c199fa9ce22adac6602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJDRRK6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzjuk1ZJNHSsHHmditrZ9ysReDUSKZMt%2BhR5yTEVXeMgIgNNhsTIPZT%2FzdQccrHW4HCuw3OrhHSZn%2FI6d%2BCxDwCpAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh7Fq%2B9GwTXRO1V9yrcA7TAPawqiVhR432EHNqOOP74NcZYi%2BVUUkaBwmyXC%2FB0vgMmAHxV7JpLdjLOIFIz20MZFCGwY%2BIMJCrIxzlgI4fVO813L00Qr3jbZ3TggykwfyVUmfIUMggERnLFfO0YraHPduarL8QQHhMWWIXChvxyevwU1W1thYnZx8IOfujlIs5nSTvGMKpuat3j2sk%2FW1S2flCptTAJCw8J3oDrtkxWTvEc%2F0AQDgC7mLJbzO4KXA0o4tCkUiMM4Rwl1hOzflPOu8L1D0H063c8S1E05VPCLnBHaRF%2BhQOI%2B8s9AdhcfaGFIQ3Cu9BZB4jNMpmF2wEWlArAMsJqv1%2BefmfxVdPGxK%2F4Pg4CEVcjod%2FG4ZxPKnlCQ6yRZHtuskRGqsaBhmu7ODPlalTM5EOlEPKOAYDMx9rnXISMHks1vDtV2k54aZ7cQhYAJhnOmqdexiIvyxfznmRz9N7N436Gjju8TI4yECnfHA7RChLn%2FMxMzJ8ksgAyL9%2FMQsFgGVhvpX0hjEZkg6Wa8EiA9yUN7JPYzoIJ%2FtytfU2iz%2Fj81RpDu4SIxWcL3iQClISYrAFWugHlz6HTdpc6rLBPmrsHPHfG1to8ZGWphI8y3Y9%2BGCJ4zGzxyntlRdBGSQTTKWwYMNjW%2BsMGOqUBZefGJJUMECKFyTsGT0YrM34OjzS%2Bo1K7fAlbQVeSH9NB%2FOVicaLGP5Esik%2Bwaa2UkEaGJWD8IHBT%2FQ023NgyumOTUp3zXzf1XIvr3%2BORQ6ZNJZcnmI8Lsu0%2FpBb3P7rWRcuaSy8pzf%2B3p6oDsmXN2CHP4pAeUbLwZTBZ8FFYzyl%2FU5ty2uXJrbpiIwituPlXpx1CXJ6dioX4XFMnWz1MUZyobgCR&X-Amz-Signature=dd7848b6ac0cab3f6ae05d5d0d16390701dda75dd7535854cfb53c4cc95162b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSLH4CP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpB5CLdM4s2PJ9gilLsL3OwoDnaQIXq%2BfRcGYsblzNzAiB0kwVPJIRs%2FqNgJVito3q14pD1ilumL%2BCQsURsCjwq%2FiqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBFgj26eCOOrOIe5kKtwD2l94Fwnbi%2Fu2OWIHZ3gKXNkAR%2FSxQxt8oJzcpb4IrtjiS%2FuZhYzMqjViS0NrkOLU78ZGbOl9cp%2FsMSHvAj%2F%2F9YIm7CCmY%2Fgds2wdo%2BvcQSAMhNs6o37UpZnGOIYtaYT2X7eWLiZ4enbENNztvnVVpRUpXVaj10ErSNVrsv6SxfTeMqLpABpCuLCt0qc7d2HWxwN8RMJuP3QDXc%2BhSt5NgqYvEJH7DpUJrXzTH2wG7vqvaGo1QgKr8hBEE4Gm6hBlAyCd3hXEqp4ZCh%2FRvrGGS6gLFMpE3ypGDnVhUZGZ%2FT0pTmnpl6SarbCiATbIAvCpj0%2B7WZqmapfCbWvgBr4x4Lw7%2BQcWWlI3%2FFVFEEqUFUqs51TKwC4b%2Fcm2vBTREsn4gOk33FwYrDJL4yp2T2puSwWo2hx4Jkm%2BJb0brMOXMYEicONdhtEov%2BGohN8Yhvox2faH3Qg49NpT4D956tN01UJh3uc5o7AwKtvRRi0zP9hUxdVQzTsTLsKzATBrd4GyPP83IgW0MaozosXryzWlgSiuYCfkPMEKNebIBeaq5aITEBg1Ui8ifhyDuFpEvNW2w8w%2BngDfZwUdcP4rNomfS8231vKHovwWOBJgaQxo4Y3EatYWJ5JpByR2%2FtQw2tb6wwY6pgEIOIAY9hKj8N1unobLkQiUzrM26d30f5tGsEf78h0WLFOC22jczic%2FSFBL4d0rj%2BuAou6l05RUP9oXSidWd3TgSE6bO%2Bd%2Bk5RMcVvDixXu0GUHz2uhCd5g58%2BsAkXO%2BTm1avL0cxUJZC4RTT%2Fm%2FapPvRyf169xpJ5LS%2F7YRHpWm0eH4hGILL6XpSEXX5poScqmdeN%2B8BWue%2BT7bG6E4oJPt6Vt%2Bs1Q&X-Amz-Signature=ced10102bb52ac980c212e226bb6b5ef6bffa297f84c683eedc6a8d01cd9dedc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677ZPT6WB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAXjYZYD8de8noT5hDSWa0MaDZRNE43sWwNH6og16pJAiEAogeuZccv2yVFWFQwccblUnjjKXvMOzuMZUY45rcmiDwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZa3hjbeSyaBqTdSSrcA5xElh7Mk5Q0m7Bi7%2BiEqxGffb3GAx%2Bnq2UnZkjEpyIh7WJU2%2BnEgJQ0J12AzQAZaV%2BwDnxhUA5ucJdSnh7bc39OK%2B4kK42Qze6fJfJc12N5ZBpO%2Bj0yGcBPs99s855BLr5u6pUgDxPa%2F8rM1dxJlexsa7wUZ%2B0JcsRePv0dmoHuXTk1lVhrL8SfBhBQfS4F63RMAP8SOfAcSBd9Y%2BD43hpf14zrdB68rFeAaM89yKH9OM%2BOcxypKHCtVyaNE%2BGpxuJu5F%2FXStFgu4zL6clZTM5rwGsgDLGTi8GuQHO%2BPoZLNmmlnIAvWkT0LjTwJ0YBkCHyypAG%2F6IPXqjHW6a99bHLyMLV4ItxlcT3%2FW9O8g3krdYEUZA1IyDEMw7t%2Bnkzww2lL%2Bck01ETvSXMff536pt%2Fz9HVPAxOpn6wEFeJSySpjXP%2Fb2zrResh%2BIQ0qoBGCkSV5hddip%2F3d%2BeByTZEA2evmFx4NOyO7OWyI6e6YsZRky0FUYQfxqIK1zfzJyjkVoo%2FjWCMiaLeF6hQKTo4PGxRcENcHhBdftfggo1A%2BlRi6ZhnSwgW8A%2FL%2F%2FM4Iq2OK6g3us6mocjWHxxBVmQK3bsMdlRMFmJqxKKbGaS%2FS6CRvcjhy9oyve2RmUyQMIvX%2BsMGOqUBV%2B24w48C3JxtWxfMQgxd2zGY7ybVfG5SrBknAe87fG%2BuXaQzniCt7tVBvCDLFKlMse%2FCrFsk6yUOgxiIWR%2F63WPIIIHgq%2BTBthDI5to43QonzjRzNZkkn6S%2FFxHIGzSgrDXrQQ2G1nsiZpujsH8k%2B66F9SFU1CMFePUPdz5AwSDhLO7N%2F5BQCBPFviE15fO6pVB0uRwKq%2BNvdi8%2B0hvm2kaooCci&X-Amz-Signature=56b7ff091148182c393ffcf56484419a75dc5f93b96c843c624b0ed3b80ddf7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJDRRK6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzjuk1ZJNHSsHHmditrZ9ysReDUSKZMt%2BhR5yTEVXeMgIgNNhsTIPZT%2FzdQccrHW4HCuw3OrhHSZn%2FI6d%2BCxDwCpAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh7Fq%2B9GwTXRO1V9yrcA7TAPawqiVhR432EHNqOOP74NcZYi%2BVUUkaBwmyXC%2FB0vgMmAHxV7JpLdjLOIFIz20MZFCGwY%2BIMJCrIxzlgI4fVO813L00Qr3jbZ3TggykwfyVUmfIUMggERnLFfO0YraHPduarL8QQHhMWWIXChvxyevwU1W1thYnZx8IOfujlIs5nSTvGMKpuat3j2sk%2FW1S2flCptTAJCw8J3oDrtkxWTvEc%2F0AQDgC7mLJbzO4KXA0o4tCkUiMM4Rwl1hOzflPOu8L1D0H063c8S1E05VPCLnBHaRF%2BhQOI%2B8s9AdhcfaGFIQ3Cu9BZB4jNMpmF2wEWlArAMsJqv1%2BefmfxVdPGxK%2F4Pg4CEVcjod%2FG4ZxPKnlCQ6yRZHtuskRGqsaBhmu7ODPlalTM5EOlEPKOAYDMx9rnXISMHks1vDtV2k54aZ7cQhYAJhnOmqdexiIvyxfznmRz9N7N436Gjju8TI4yECnfHA7RChLn%2FMxMzJ8ksgAyL9%2FMQsFgGVhvpX0hjEZkg6Wa8EiA9yUN7JPYzoIJ%2FtytfU2iz%2Fj81RpDu4SIxWcL3iQClISYrAFWugHlz6HTdpc6rLBPmrsHPHfG1to8ZGWphI8y3Y9%2BGCJ4zGzxyntlRdBGSQTTKWwYMNjW%2BsMGOqUBZefGJJUMECKFyTsGT0YrM34OjzS%2Bo1K7fAlbQVeSH9NB%2FOVicaLGP5Esik%2Bwaa2UkEaGJWD8IHBT%2FQ023NgyumOTUp3zXzf1XIvr3%2BORQ6ZNJZcnmI8Lsu0%2FpBb3P7rWRcuaSy8pzf%2B3p6oDsmXN2CHP4pAeUbLwZTBZ8FFYzyl%2FU5ty2uXJrbpiIwituPlXpx1CXJ6dioX4XFMnWz1MUZyobgCR&X-Amz-Signature=906885ce8f912b59b1d909b6a28eae0c2824c3f1f9f142e2f228cd7f962a73dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
