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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFR4J44%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIxWQfZJsZjfbnX4QhBVBUVpnVwlhkeM%2FH%2B%2FSPno9OdAiEAiaTPJP7c%2FpnGQv5GhyAVqfQxSQbDnPQ5njXWKWddxR4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyaZmQg8xkEXReonyrcA0YpXosw0eWsGFlBwqwoetb0KJ6qtvB6sMAobJjIRe98wN0shM0slCjygYXkNs%2BpskkYWdCeLEAdrZzlr1%2BNsjWzQa8ky6fhejzDZK%2FK4L4grSI8DVJ0IeNd1a4s7SqM6t6TIqMSpQTaEpaAUKbLqhnPVRpMu8mZT3knbABhKSd6D30T6YYlB7s%2FDgOuSi3%2BWM%2BGQjr0YZh%2FTTkqVoiIRSh70tsAmXoJBmZ9d%2Fas4oyhFNcpu8d0gYfZkosFkp%2FR9zIkzPpg0qLLcR438SeSpNQiFQG4HWSTAOOmDHqvzkQOaToohLnh%2BsiICyGN5NE4TMlagzFojRyFzPLalF%2FY1jEETVY685itSbOeAo1YRkazwfHtx23uvQv5vcO%2Bh2eSyZ4oNYQV592ioR2Hd45Jw8pMFwc1vuaYzJ1A5SPS4MbBarXIiXGqNpAln1vSjPs418cGFSP9EmGwVuqZheaiyHG%2F8WqJ0BmU%2FSPMds00W8rvmyURI7fvJAyeBsu83E9K%2BQaTBggZVbq%2FgR0LYLhbEqYlcwf07bEJ%2B8j%2BWDGqjRAoyeMEwYHa0W1B9WMbPTjTTRBWO3yJK173EZ%2B%2FWzX%2FtduH9KpeHM0MSAcpF1PjPCqajqRnHgZSOhHqDjutMIGqycIGOqUBGIco0T1KySWNBWIKeculprp0yFcTmEbQ%2FJDfeqJ8%2BnOmVz%2FQVTqhs1Zikw8EejcmisyYC5VVqxjps7F7tZ60h3r67M%2FyeCeH7onXullEr25gYl5EE8Y7mDPYfcn9HAlG9BeuA%2FGZ58aGUTxWqw0N0loMFCBKBEQ2O1UCcdcvO1X7GqJMvE3d4MrvVqG2Bssrk%2FFytFZuH9IH8YsXDtR%2F8fTUCagk&X-Amz-Signature=73b5fd11db65dd554b99ec7a8c1cb83434eb28c5ff7446c75a6b3a1d1b12b1bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFR4J44%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIxWQfZJsZjfbnX4QhBVBUVpnVwlhkeM%2FH%2B%2FSPno9OdAiEAiaTPJP7c%2FpnGQv5GhyAVqfQxSQbDnPQ5njXWKWddxR4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyaZmQg8xkEXReonyrcA0YpXosw0eWsGFlBwqwoetb0KJ6qtvB6sMAobJjIRe98wN0shM0slCjygYXkNs%2BpskkYWdCeLEAdrZzlr1%2BNsjWzQa8ky6fhejzDZK%2FK4L4grSI8DVJ0IeNd1a4s7SqM6t6TIqMSpQTaEpaAUKbLqhnPVRpMu8mZT3knbABhKSd6D30T6YYlB7s%2FDgOuSi3%2BWM%2BGQjr0YZh%2FTTkqVoiIRSh70tsAmXoJBmZ9d%2Fas4oyhFNcpu8d0gYfZkosFkp%2FR9zIkzPpg0qLLcR438SeSpNQiFQG4HWSTAOOmDHqvzkQOaToohLnh%2BsiICyGN5NE4TMlagzFojRyFzPLalF%2FY1jEETVY685itSbOeAo1YRkazwfHtx23uvQv5vcO%2Bh2eSyZ4oNYQV592ioR2Hd45Jw8pMFwc1vuaYzJ1A5SPS4MbBarXIiXGqNpAln1vSjPs418cGFSP9EmGwVuqZheaiyHG%2F8WqJ0BmU%2FSPMds00W8rvmyURI7fvJAyeBsu83E9K%2BQaTBggZVbq%2FgR0LYLhbEqYlcwf07bEJ%2B8j%2BWDGqjRAoyeMEwYHa0W1B9WMbPTjTTRBWO3yJK173EZ%2B%2FWzX%2FtduH9KpeHM0MSAcpF1PjPCqajqRnHgZSOhHqDjutMIGqycIGOqUBGIco0T1KySWNBWIKeculprp0yFcTmEbQ%2FJDfeqJ8%2BnOmVz%2FQVTqhs1Zikw8EejcmisyYC5VVqxjps7F7tZ60h3r67M%2FyeCeH7onXullEr25gYl5EE8Y7mDPYfcn9HAlG9BeuA%2FGZ58aGUTxWqw0N0loMFCBKBEQ2O1UCcdcvO1X7GqJMvE3d4MrvVqG2Bssrk%2FFytFZuH9IH8YsXDtR%2F8fTUCagk&X-Amz-Signature=2eb5d38b3540e401263aa429f3fc4ace09d5fdb41f16387bcf8fda8b2547d0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFR4J44%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIxWQfZJsZjfbnX4QhBVBUVpnVwlhkeM%2FH%2B%2FSPno9OdAiEAiaTPJP7c%2FpnGQv5GhyAVqfQxSQbDnPQ5njXWKWddxR4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyaZmQg8xkEXReonyrcA0YpXosw0eWsGFlBwqwoetb0KJ6qtvB6sMAobJjIRe98wN0shM0slCjygYXkNs%2BpskkYWdCeLEAdrZzlr1%2BNsjWzQa8ky6fhejzDZK%2FK4L4grSI8DVJ0IeNd1a4s7SqM6t6TIqMSpQTaEpaAUKbLqhnPVRpMu8mZT3knbABhKSd6D30T6YYlB7s%2FDgOuSi3%2BWM%2BGQjr0YZh%2FTTkqVoiIRSh70tsAmXoJBmZ9d%2Fas4oyhFNcpu8d0gYfZkosFkp%2FR9zIkzPpg0qLLcR438SeSpNQiFQG4HWSTAOOmDHqvzkQOaToohLnh%2BsiICyGN5NE4TMlagzFojRyFzPLalF%2FY1jEETVY685itSbOeAo1YRkazwfHtx23uvQv5vcO%2Bh2eSyZ4oNYQV592ioR2Hd45Jw8pMFwc1vuaYzJ1A5SPS4MbBarXIiXGqNpAln1vSjPs418cGFSP9EmGwVuqZheaiyHG%2F8WqJ0BmU%2FSPMds00W8rvmyURI7fvJAyeBsu83E9K%2BQaTBggZVbq%2FgR0LYLhbEqYlcwf07bEJ%2B8j%2BWDGqjRAoyeMEwYHa0W1B9WMbPTjTTRBWO3yJK173EZ%2B%2FWzX%2FtduH9KpeHM0MSAcpF1PjPCqajqRnHgZSOhHqDjutMIGqycIGOqUBGIco0T1KySWNBWIKeculprp0yFcTmEbQ%2FJDfeqJ8%2BnOmVz%2FQVTqhs1Zikw8EejcmisyYC5VVqxjps7F7tZ60h3r67M%2FyeCeH7onXullEr25gYl5EE8Y7mDPYfcn9HAlG9BeuA%2FGZ58aGUTxWqw0N0loMFCBKBEQ2O1UCcdcvO1X7GqJMvE3d4MrvVqG2Bssrk%2FFytFZuH9IH8YsXDtR%2F8fTUCagk&X-Amz-Signature=5e4ecf48d9143d877378f378e69c071aa50411a9805f3bcb5709c52e44e9394d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627RPLP77%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpWpVRGnZgScfYJ4xlNxHT7DMKudEZNlbejmDNOhcY1AiEAhovQEkO5I7U5zo5RVdqpRPBABIzeiHoAhH93BBmhhbUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6XbsZHey9FokTQWSrcA1iZVn6lww5ioqwMWRbObaNhws0igfk5xwImbYPMz9kBMxw%2F5I%2ByStqHQqdMxB9BeE7xYYEygutvJWPTQTVG4%2FNMJiBByCzzFBD03UNF60WzWUGYgnY%2BdZhFSunyS8stMhHwcDTRKbVtAQBO99fre6m%2BOaSVAm8%2BapAhEF%2B7bHF60TOfwe4%2F2ewd8b7EMR9MA2rxWWcrg8ebvee2r55pekMyAkMfp2Rrga%2FZ1oHpgJcN5RmRIYkQ6ABOI0PUicnjMAdha80rAsSWTDuciBrKoooIUQ3COKsUaieJO3yWa6e4QaSru8BGwGHNqJJQteMqUnpznHXH46JLlcllA6sh9XUTTnSfl6XtlPme3w5uSIBXTt%2F3410aFRfX14gNPrD9uPaCcCSQ38tOHw2ZGBVrYQ98QnV2Im8zPJyqFqWkLuXcFzqLz8ruobzUMCMkJBam%2FsUqB9CPOQ%2FeYg5TcH71srUDYv1QvE%2BIxliWhdcItDR6OUbsVSLef5ieZC4rnbAR81QTCPaSC%2B1i4G8wCVFS51fdHKLeEKv9b2AdleythcAwb75PGBJyqNnuyCJxQkMhJaFzsz9fYYMRgKID48Y43fO%2FaPuspnjwlKY1%2BAPkzdSCTeDYe2iri4raiw1%2BMOmjycIGOqUB2sqMQNB9N3fbFtQgX1CBpxLhzweSjiCUXMdM9Taiz9TGI8Agr47ZzHihJVEbtWS3LSJpMmaPDlSGEjsYO0xxHInoSotDIA6eGbypY%2FWKbsoPrdi3UXrpuym0A88ijiy8B0iZyFgLEfSEZ1Ps1VJ20TobQQwm6CuM2plqo%2BNkQP%2BM5%2BeQvHx53KFsPhaLmMebcIjLn%2BIyxxl1qYpmN3h0xRgxEZ7H&X-Amz-Signature=e841bc00aaadfb3a1f17e18c78c7740ee6fe4aa0e051a13348a285f8abe350bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NNNTU6K%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCGc%2B3mAJYN6KQraAQT8ZyzTuV%2F6IpZeSOsyFfRJF8HgIhAPH6OTz1xMeggDHIFVR%2B9NppMbs64XD0tHrTeslST3f%2FKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytJH5ISz6dvoT1UKUq3AMzK7oZczFgLnM3HOcU%2B46VgEPCw49HmSbBY2n4Z6A%2ByJHdTkB3rBKB9rFSvhhjfjsOnllTDknvMz5hYgoiIbA8oSZ4tcDp6XLXmkqbj11KsvDBM6Eili%2BCE2M26dyEPHJVUV77XbnQhq94QZf3Fo6lhNZG8nvPOumZAruEKEHRuFlcApjLPvt9BYPljtESZzaEQBgBkfNJSgwuoK07UXrO%2FLfb0cRIi08SrD3vXKCFhbHveUMmNSWdpPjvXei5i6Q%2Fxc%2Bcfl3gxwnRiVGfM%2Ba16GUjlqS8hy7M0VdgPomrQO2HO8MtROXuj7MIRTdMXj2NCxNKeCPND68IjE6d%2Bwid0jcSljrtywAZSrp2tpk9ORyxmuGahlw3I8Jlnokqpw7pNnRHM8JhYp4HVirQ2Bf7%2Fozbc61iRjU2dXuIFQAvnZ0sTkl6YdvqifSuMz6RrQb4MhOU7rtH%2B6H07L6y6ug8eLylwiWbgCjvIm3Wr71w8HiXDILOJ1v2vuL0kZIYR7T4702bnclf7UCm51%2BBUOTCfy8z8U2LN8%2Bb%2FBBrqlk%2B4wVnsOnMzn47Hf8rrTmTZqIlbE9AKzamsiyRctlA6iI4Q28EEDbdmEbDNwj8Z6mehNxx7MfNXeclKsSxBDD%2Bo8nCBjqkAbeEZ3bT8bIIvXHf4YBcbJCevZzLmTfRLfGepr8fI0bx9rdoSfuze3DpBpJ%2FlPwy456Kd4TCppyVjWqJV1%2FIXfEfTbbtiVqno0TYaWH5afVpvGTjFNccPoShOGvZzAywImcnSJuJpnEp0I8G5Mjhbwd15PI6quaSZHSixnCNSGU3OjfgM9y%2B%2FZ26aN7XgpDjsxIaTRha84ocNvjK4fVZ%2Bw%2BIdGqC&X-Amz-Signature=6e111a6dd5e7569a8c17e0c9bf145278fbcfd4925babd228624b9d3a425dc5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFR4J44%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIxWQfZJsZjfbnX4QhBVBUVpnVwlhkeM%2FH%2B%2FSPno9OdAiEAiaTPJP7c%2FpnGQv5GhyAVqfQxSQbDnPQ5njXWKWddxR4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyaZmQg8xkEXReonyrcA0YpXosw0eWsGFlBwqwoetb0KJ6qtvB6sMAobJjIRe98wN0shM0slCjygYXkNs%2BpskkYWdCeLEAdrZzlr1%2BNsjWzQa8ky6fhejzDZK%2FK4L4grSI8DVJ0IeNd1a4s7SqM6t6TIqMSpQTaEpaAUKbLqhnPVRpMu8mZT3knbABhKSd6D30T6YYlB7s%2FDgOuSi3%2BWM%2BGQjr0YZh%2FTTkqVoiIRSh70tsAmXoJBmZ9d%2Fas4oyhFNcpu8d0gYfZkosFkp%2FR9zIkzPpg0qLLcR438SeSpNQiFQG4HWSTAOOmDHqvzkQOaToohLnh%2BsiICyGN5NE4TMlagzFojRyFzPLalF%2FY1jEETVY685itSbOeAo1YRkazwfHtx23uvQv5vcO%2Bh2eSyZ4oNYQV592ioR2Hd45Jw8pMFwc1vuaYzJ1A5SPS4MbBarXIiXGqNpAln1vSjPs418cGFSP9EmGwVuqZheaiyHG%2F8WqJ0BmU%2FSPMds00W8rvmyURI7fvJAyeBsu83E9K%2BQaTBggZVbq%2FgR0LYLhbEqYlcwf07bEJ%2B8j%2BWDGqjRAoyeMEwYHa0W1B9WMbPTjTTRBWO3yJK173EZ%2B%2FWzX%2FtduH9KpeHM0MSAcpF1PjPCqajqRnHgZSOhHqDjutMIGqycIGOqUBGIco0T1KySWNBWIKeculprp0yFcTmEbQ%2FJDfeqJ8%2BnOmVz%2FQVTqhs1Zikw8EejcmisyYC5VVqxjps7F7tZ60h3r67M%2FyeCeH7onXullEr25gYl5EE8Y7mDPYfcn9HAlG9BeuA%2FGZ58aGUTxWqw0N0loMFCBKBEQ2O1UCcdcvO1X7GqJMvE3d4MrvVqG2Bssrk%2FFytFZuH9IH8YsXDtR%2F8fTUCagk&X-Amz-Signature=e2342af288d6d353573d86bd43c40bb7496e3d60b838116b8b959c231db5474a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
