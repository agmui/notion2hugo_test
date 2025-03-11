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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MMWIIFL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCID88%2BssPzpYvLSXLk8IsLq6aqYFuxPygT5u8VLkU0FWCAiEAuKd6m6mpssiORKlwIPiaHxyIw%2FqiFsk75NMBEgPCrWwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJXxZ%2BNCX2%2B7KkwzircA1ihIFnI9MtiF8PectUNewdpTTgDh4Bbrlwu96almXfJ8eP2bjd8MFAmQKviTUvcVIc9TJKrHtJDyUISqC7pBFeFcU9Qr490M2zlwYdjfv39IVu7Sb%2FfiwXfCYPBrD7ch2okMyOqDZQ97%2BjVYd8AW4bW7ILssnchZiXtlVmaFmUiw79rvNnAdR5rxDarzvdCw8Mp0fMpIzPIP8W2EIrOTGG2UcYQk81%2BCLfY79FOa7YjRMBtjAgg87yqF3aYg6lnBa1plKNl6zwlPXorTL4ag2M06xUlHSr9KZMSkFtCWT1LccA3uLT7xdDSbCttU4C3K%2BXFlPpbck5Ju6JwvW7tRRIdN64TA9KnPWQb6F44dbhsZT6kKandriwn7Rv5Y4qZo50qLoROXkhsAtEjdBOUSO%2FRmjFCsrvVLo2IZL2IdQT4cS9f8mDCJ%2BnkwZw8B6Wlp7bAw5u2rY5o7GKnJ6bLK9GWMAd9gslme4ejzbUs4QIBiBH2E0AR3X8y9x%2Bu15O%2BXxaaDxIwRF%2Fqi%2B%2Fwpa9DxlrFQ6IDWkwtbBGTUdNk6CHMawNMbbfLlRhVl6EcuSLEyp8XwDM8VSgs2P0APT9FCDGW4ObnBEAtDY%2FnFBBc9WYoXMUKwjqqvjDNJEXiMJmwv74GOqUBdOgrm3GFo5wd5UJgUtYafdjQND2WZTuPZtoETDJYvAqxiLoRQtGAfXRqzP8s%2FbWZqUDx9onnhF0GvJCn7y3Ek%2BWZ9bLlqHo6nsqZnVYIQGWW48s1CC6VjK3aAZNAekwQEZIJ4PvOl991zK1V4s0uaa%2BwiPM6Sa8%2BYfB2hQ9d1tqUso7FK0txjnJwQrPkJtacoGxdiUSCaAeaiUMvsSdTTqJXxSn5&X-Amz-Signature=cd53cbb15c127654226f0ed77e041a8e197710bafa39977b5b363671e98c6a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MMWIIFL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCID88%2BssPzpYvLSXLk8IsLq6aqYFuxPygT5u8VLkU0FWCAiEAuKd6m6mpssiORKlwIPiaHxyIw%2FqiFsk75NMBEgPCrWwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJXxZ%2BNCX2%2B7KkwzircA1ihIFnI9MtiF8PectUNewdpTTgDh4Bbrlwu96almXfJ8eP2bjd8MFAmQKviTUvcVIc9TJKrHtJDyUISqC7pBFeFcU9Qr490M2zlwYdjfv39IVu7Sb%2FfiwXfCYPBrD7ch2okMyOqDZQ97%2BjVYd8AW4bW7ILssnchZiXtlVmaFmUiw79rvNnAdR5rxDarzvdCw8Mp0fMpIzPIP8W2EIrOTGG2UcYQk81%2BCLfY79FOa7YjRMBtjAgg87yqF3aYg6lnBa1plKNl6zwlPXorTL4ag2M06xUlHSr9KZMSkFtCWT1LccA3uLT7xdDSbCttU4C3K%2BXFlPpbck5Ju6JwvW7tRRIdN64TA9KnPWQb6F44dbhsZT6kKandriwn7Rv5Y4qZo50qLoROXkhsAtEjdBOUSO%2FRmjFCsrvVLo2IZL2IdQT4cS9f8mDCJ%2BnkwZw8B6Wlp7bAw5u2rY5o7GKnJ6bLK9GWMAd9gslme4ejzbUs4QIBiBH2E0AR3X8y9x%2Bu15O%2BXxaaDxIwRF%2Fqi%2B%2Fwpa9DxlrFQ6IDWkwtbBGTUdNk6CHMawNMbbfLlRhVl6EcuSLEyp8XwDM8VSgs2P0APT9FCDGW4ObnBEAtDY%2FnFBBc9WYoXMUKwjqqvjDNJEXiMJmwv74GOqUBdOgrm3GFo5wd5UJgUtYafdjQND2WZTuPZtoETDJYvAqxiLoRQtGAfXRqzP8s%2FbWZqUDx9onnhF0GvJCn7y3Ek%2BWZ9bLlqHo6nsqZnVYIQGWW48s1CC6VjK3aAZNAekwQEZIJ4PvOl991zK1V4s0uaa%2BwiPM6Sa8%2BYfB2hQ9d1tqUso7FK0txjnJwQrPkJtacoGxdiUSCaAeaiUMvsSdTTqJXxSn5&X-Amz-Signature=ef4861eb96458a8898d23b02a6c1f0fa37902a192493b422e67988d6779b41f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KA5AH6A%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD06KAM77TBsOW9TrkWG8As%2FY2xsi8d2BNIKJ631TwYLAIhAMshFkc9zBgWZBYyTs%2BZ5WplrGWEoa72pBXunXXaBYKTKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPzusrJwU%2FunDuUKwq3APMpDlhzzWMV87Uymc%2BtGblZvZ5ZbKAcEiEzUFBXkxRfnXXIlzch82JkXuCGDJfrBUGCAq%2BtDi01ZO1lzXJZYOP56YX4ComRLVRUs4AbEiJ9Kcj2MaksrREiBs%2BRcNiHVETNkj%2FOwzsFJIns7MNng7%2BQtGpcWvWVVcJwPps%2F52vV5QibjYuveE0SsRUWaCIMy4BHK7X75yzW%2Fm%2Froj8wZxt9Cs4Udq169sEiaiSc0xcH%2FM4djdeMkHkUzLxMbHL54rjyzn9KG%2F3hE0IXgpwTgvZKmj8MxGlffusCa%2F5u0LRN2OhVCSNrEPL35RrDZE5AObEiOYSE7CPWAo66qwfZ8IE0ApYSIlMwxH4gsZHgKDQmS7zErwoRrqxxmVTxV3NwMl7PH7Jjh%2BAx%2FEmmPNlSlq%2BgA2UkSxitXTBXv6HG8uCjspK%2FD3U9dikO4WlQd7Wjm%2BrmH7O9nrcsKuplrI7utk6eOAypVs4Fv3NIJPebGzidRIdcUvs75Ek0etTfLP4SZfD9GbDQS52opF%2BwQe7idiOMXDmxU5exjZ2nhKUiLg551YPCxktFfoOAk5FJ8veeBmKnEn7QyFVzg%2FYRZD6S86T8pEpQNUsNn1%2B5H3TCC8DsnceoShnGPxoEGJF4jCMsL%2B%2BBjqkATtV5vZD5p3sShAArFF%2FxrY3dyKqbXrBWCJ9D3GChUppikT89PIhqrSF8RTxOyQjMVByT9v9F6FPZeMP9oMJLT%2F54bDLgw%2BmpnbuOMVTbOKEwr70sy3YjgGIwdmoExQNF5ExAaBMTt7WI3MTPTG08QVXZ8KS6spjxFfHQdh1uJn9DsMcoguIwILLfL3bQMkVJkaP%2F%2Fv1gM0yKXOlBTRR%2BEQ9MMiL&X-Amz-Signature=d75eb4029124b5126d55754ed166f150ea3576675dfef7aa64a27cd221439d54&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXFS7ZR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCcNsAtxh%2Bh%2Bs1nAsr89TbbIO34Swhb9ZVCrtRSFdiFfAIgccHpSqmMrnq3%2BM2LCCnrokc9RVg5qngc2ZgDC7hjLOAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQw9x5lFz3jn18sUCrcA1waFocco6exJJI7LRykvOVm8d%2F7h3jP618TBwADT2pA4L3Am%2BpuLpgCe8n8uM%2BkJHLHkbcym4XelaGBBJdHml7PlQP0Pq1ypipB%2F5yWP1%2FWenYYuCOnsJqmG0ud%2FZGBvmOldPOClO5XW4NerY5DBDyMHdlC8zxMDy7GKpQRCg7Vj3catdDgRCtQjMDI4tM6x4S2BtIz1%2Fbmf67ZMr60Tk0gOV9Uky%2BTMFJ9d8k0KCMZmIt1ehcP9VbV4tnXyzrdb9wNZltDyDy1F5DWIXST5GZ9nuPmlPAtC9JeLtOrpGXd28ScXvXXMniVb2iD%2BF2a0FmReic0gJCTjkLXr9OwsVG6JX51FAJSR2LuOLgXRGlSZdE87ma%2FWTiaU12vrZPEAgadd0GEquOskc8SLlxgCFQRamu7FguQsqXDn9EK5sA9s%2BBmUq6K2xF1gF6xQA%2FmgUxR1P8JzPgxy9mHRM1z27s3A%2F8U06G7ycdbnaWXYJ4939XYqs94ga1Es%2FQvSTGoOc4MlhGTG4oHsTxXtswTQ5yTTIdXwRfh5g5sGJ13XKckdue6yIxjSeXD2DOeUBR9UWSRsyz3QqSXEPE0o9j%2B4t4AP7NcHYQufW2bKd6HOd3N7804DEafQZ420mHiMMOvv74GOqUBLCm9E%2BbZQodQLunL908GV0z%2FMk7tn2lyNy5mvXex4VZGmhGxlAjdy6KKNDnxy7oYa1w2inrl%2FunIxmIyrh8DMyZFizi%2B2IuaAciOOq2bJcEEn3K8Kkj%2Bxg2phhIjMO9ETQfH1WUub4sLChltiAORQJKnFQYpVD8R3G4ymu9VPMI7qVJJU%2BkB%2BtmjBl%2BEWQASlw%2Bomb4cveOM8huQOTpBBGV83NLs&X-Amz-Signature=2a83d8429b56b916b33f3fa1b904826988bfe3f9056ff930b10dbfffc8f00075&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MMWIIFL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCID88%2BssPzpYvLSXLk8IsLq6aqYFuxPygT5u8VLkU0FWCAiEAuKd6m6mpssiORKlwIPiaHxyIw%2FqiFsk75NMBEgPCrWwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJXxZ%2BNCX2%2B7KkwzircA1ihIFnI9MtiF8PectUNewdpTTgDh4Bbrlwu96almXfJ8eP2bjd8MFAmQKviTUvcVIc9TJKrHtJDyUISqC7pBFeFcU9Qr490M2zlwYdjfv39IVu7Sb%2FfiwXfCYPBrD7ch2okMyOqDZQ97%2BjVYd8AW4bW7ILssnchZiXtlVmaFmUiw79rvNnAdR5rxDarzvdCw8Mp0fMpIzPIP8W2EIrOTGG2UcYQk81%2BCLfY79FOa7YjRMBtjAgg87yqF3aYg6lnBa1plKNl6zwlPXorTL4ag2M06xUlHSr9KZMSkFtCWT1LccA3uLT7xdDSbCttU4C3K%2BXFlPpbck5Ju6JwvW7tRRIdN64TA9KnPWQb6F44dbhsZT6kKandriwn7Rv5Y4qZo50qLoROXkhsAtEjdBOUSO%2FRmjFCsrvVLo2IZL2IdQT4cS9f8mDCJ%2BnkwZw8B6Wlp7bAw5u2rY5o7GKnJ6bLK9GWMAd9gslme4ejzbUs4QIBiBH2E0AR3X8y9x%2Bu15O%2BXxaaDxIwRF%2Fqi%2B%2Fwpa9DxlrFQ6IDWkwtbBGTUdNk6CHMawNMbbfLlRhVl6EcuSLEyp8XwDM8VSgs2P0APT9FCDGW4ObnBEAtDY%2FnFBBc9WYoXMUKwjqqvjDNJEXiMJmwv74GOqUBdOgrm3GFo5wd5UJgUtYafdjQND2WZTuPZtoETDJYvAqxiLoRQtGAfXRqzP8s%2FbWZqUDx9onnhF0GvJCn7y3Ek%2BWZ9bLlqHo6nsqZnVYIQGWW48s1CC6VjK3aAZNAekwQEZIJ4PvOl991zK1V4s0uaa%2BwiPM6Sa8%2BYfB2hQ9d1tqUso7FK0txjnJwQrPkJtacoGxdiUSCaAeaiUMvsSdTTqJXxSn5&X-Amz-Signature=6d259a5d6f7cde4cd2689e411b1796af9f4291e4de5cb40a4afbe9c4781ed8ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
