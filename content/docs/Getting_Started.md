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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBPYFSU2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCexhMpndHyTIWWKw1M3cGrvltqfv8jwPNYjlolKfBOLwIhAJV5bM8IAbC6jEy4BpmsUAPpQ5w4AjlZddXRRigEtVWFKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BDrfkeGlnVSDQRs4q3AMoAcdNMm9sWsFUHZT%2FSW5P20Yi1gvB%2FBadqFvd5tW4noQEW2IK087VhGOzlQRn7FiphmYGVaAilWwwRCgXpRvnurUSBvI4WYFy2xTJP34EB70R%2FmAfTs1ZIUTX0cNuKUfeumoD6uTnT68bE6d8Aa6zLK8yaJZw1YFqxNVyzZcVLXUnpVuirk5cEkNh%2Fs9fE812S1xBUaQej6V1Pq2OeZKRiJG1jhq%2B%2F6LIBjO%2FVnvKCOTHXdDgoSQZ%2FAJFsjldve02pDcWt8QnHSbvXZYDX9%2BSd5%2Bbb41JRotAo8GmrddTT2wozdDiK5SaykfYIeD8IecBJ4xNyzg3%2FgGETfjzhXT9piIm1DoOci2DbtIXELQl%2Frvy%2Fwl9tw2OKn9h6hpTgBXXQUXVu54nrfQ6BmTkOo7L0JxK05SuloVF6QIdIHvrin7jZwsaWIq361Ios6shsPJ6mXoQfoTcoP8aI97yJi41pW2%2BFauoSlhdUHEkjkhi2NXOB8Zl2jni%2F04fUkwQtZ%2FZWPtuG0pHfF0sAFjgWEaOt2NzGSkz0I1JwL0pXMzNMEf3pOYBGuXTP%2FtUStlK%2F9aF0%2BQBiWchwlIB5iejOd2Gk6lWoeCYliJMLlVDaFmY3hnPdjskZGfzyJO8JjDj%2BOvDBjqkAb%2FRTLyeRZHZSDNmVttQ3Lg3hE%2BxmBPIvVa0X8bB36rYw4uUjTcavB%2BGRHn3ZY4h5K0Cq7%2B5Jf1xCVlF2jvGfl3rRaz4iOcwNg8NKSGb1o6Z%2FJnVgTkNdcqeq2QOaqr97XoNExRe8o5eyR%2Ft8aVXpIClOvBF1ALldnAgNfHr9iJCih0V4EGhmgMldJEbtKKvkAfJAV81ObtCAi51WCZ713oa4h7J&X-Amz-Signature=570aa5e59a1a9811f20e0736b08b0f42dfc3d2fdcf4d7dcc231e8c1a47bfa42b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBPYFSU2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCexhMpndHyTIWWKw1M3cGrvltqfv8jwPNYjlolKfBOLwIhAJV5bM8IAbC6jEy4BpmsUAPpQ5w4AjlZddXRRigEtVWFKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BDrfkeGlnVSDQRs4q3AMoAcdNMm9sWsFUHZT%2FSW5P20Yi1gvB%2FBadqFvd5tW4noQEW2IK087VhGOzlQRn7FiphmYGVaAilWwwRCgXpRvnurUSBvI4WYFy2xTJP34EB70R%2FmAfTs1ZIUTX0cNuKUfeumoD6uTnT68bE6d8Aa6zLK8yaJZw1YFqxNVyzZcVLXUnpVuirk5cEkNh%2Fs9fE812S1xBUaQej6V1Pq2OeZKRiJG1jhq%2B%2F6LIBjO%2FVnvKCOTHXdDgoSQZ%2FAJFsjldve02pDcWt8QnHSbvXZYDX9%2BSd5%2Bbb41JRotAo8GmrddTT2wozdDiK5SaykfYIeD8IecBJ4xNyzg3%2FgGETfjzhXT9piIm1DoOci2DbtIXELQl%2Frvy%2Fwl9tw2OKn9h6hpTgBXXQUXVu54nrfQ6BmTkOo7L0JxK05SuloVF6QIdIHvrin7jZwsaWIq361Ios6shsPJ6mXoQfoTcoP8aI97yJi41pW2%2BFauoSlhdUHEkjkhi2NXOB8Zl2jni%2F04fUkwQtZ%2FZWPtuG0pHfF0sAFjgWEaOt2NzGSkz0I1JwL0pXMzNMEf3pOYBGuXTP%2FtUStlK%2F9aF0%2BQBiWchwlIB5iejOd2Gk6lWoeCYliJMLlVDaFmY3hnPdjskZGfzyJO8JjDj%2BOvDBjqkAb%2FRTLyeRZHZSDNmVttQ3Lg3hE%2BxmBPIvVa0X8bB36rYw4uUjTcavB%2BGRHn3ZY4h5K0Cq7%2B5Jf1xCVlF2jvGfl3rRaz4iOcwNg8NKSGb1o6Z%2FJnVgTkNdcqeq2QOaqr97XoNExRe8o5eyR%2Ft8aVXpIClOvBF1ALldnAgNfHr9iJCih0V4EGhmgMldJEbtKKvkAfJAV81ObtCAi51WCZ713oa4h7J&X-Amz-Signature=6a1f251ece6356b92f26e21b8f4e43ddee0b5b0387c84eb8887e0b337ce655a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBPYFSU2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCexhMpndHyTIWWKw1M3cGrvltqfv8jwPNYjlolKfBOLwIhAJV5bM8IAbC6jEy4BpmsUAPpQ5w4AjlZddXRRigEtVWFKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BDrfkeGlnVSDQRs4q3AMoAcdNMm9sWsFUHZT%2FSW5P20Yi1gvB%2FBadqFvd5tW4noQEW2IK087VhGOzlQRn7FiphmYGVaAilWwwRCgXpRvnurUSBvI4WYFy2xTJP34EB70R%2FmAfTs1ZIUTX0cNuKUfeumoD6uTnT68bE6d8Aa6zLK8yaJZw1YFqxNVyzZcVLXUnpVuirk5cEkNh%2Fs9fE812S1xBUaQej6V1Pq2OeZKRiJG1jhq%2B%2F6LIBjO%2FVnvKCOTHXdDgoSQZ%2FAJFsjldve02pDcWt8QnHSbvXZYDX9%2BSd5%2Bbb41JRotAo8GmrddTT2wozdDiK5SaykfYIeD8IecBJ4xNyzg3%2FgGETfjzhXT9piIm1DoOci2DbtIXELQl%2Frvy%2Fwl9tw2OKn9h6hpTgBXXQUXVu54nrfQ6BmTkOo7L0JxK05SuloVF6QIdIHvrin7jZwsaWIq361Ios6shsPJ6mXoQfoTcoP8aI97yJi41pW2%2BFauoSlhdUHEkjkhi2NXOB8Zl2jni%2F04fUkwQtZ%2FZWPtuG0pHfF0sAFjgWEaOt2NzGSkz0I1JwL0pXMzNMEf3pOYBGuXTP%2FtUStlK%2F9aF0%2BQBiWchwlIB5iejOd2Gk6lWoeCYliJMLlVDaFmY3hnPdjskZGfzyJO8JjDj%2BOvDBjqkAb%2FRTLyeRZHZSDNmVttQ3Lg3hE%2BxmBPIvVa0X8bB36rYw4uUjTcavB%2BGRHn3ZY4h5K0Cq7%2B5Jf1xCVlF2jvGfl3rRaz4iOcwNg8NKSGb1o6Z%2FJnVgTkNdcqeq2QOaqr97XoNExRe8o5eyR%2Ft8aVXpIClOvBF1ALldnAgNfHr9iJCih0V4EGhmgMldJEbtKKvkAfJAV81ObtCAi51WCZ713oa4h7J&X-Amz-Signature=4df7c5f270b1dd2c522eeeb99e60efe6702708967d230834f109d47081fd3ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T5MTCY6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRc4gnIcCR3OYRwyTd48z66QZ%2F3XWnLA4OfKMdnCTqZAIgeImBP0850GPArVtUhT4OppH2V1jCen3D4Fpr%2BZSk5KUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqABDZZknQ0iLlMTCrcA4r9tLx9nOxw9Qya89ek2VO7cUEQZAjnXcw5HseYrDLvL4oW%2F8TCk8JdLEld9pn2klYvuqiQasWcyb1euVmzvT2psiu20J2mtDDHmcGVPCw%2FEocZ%2B31ua0ZvpwJOwzdRlYy9MDmse7M9o3NhhDU3%2BzOhY22r9pqvoTrMDaY4Iz4WF2LTsaa2kNSzrSPthmvBkMN2IsvPOGrHnQq8tB2wT8YsmVtVJaDdsOWRXSxHpyQbhCpeZjQ3xfMjeNl96UaKgNieFfZxf2dWxc41H9YxolmopMyYLu6yKCWm8VbYtKcJgmbAGXYrQMScL8FVODcxWLJ2BUZGU8XJVDdtg2hHlohZixr6obufoVfh8jCgjkDG7pKTTXZrI3wapyz%2BXSgIBHYjs8cbZF2M5gRBpjqkuy7XESRtPgZG75vsMiBFnsiH8ZOGRwogG%2FZmewKZkfsZ1bLOweFHFaVhnU3uJln5ZRaddoLgFCd%2FOcZeJ428%2B0f35b00RpoB9YIrk37dBMpMkuaxRGf5AejQs1hZMww6CWYuPyAlHJ9E23LFr0D3jM9zqDlH%2B4W3WTjNr1GD7Em2a%2B5UiccCOu%2Fn%2BBVM%2BUJ2Ok1j7XIbnK%2Bcjrb%2FydA0sqOeATAotTmdmx554%2F3XMI3568MGOqUBCEa%2BgLrzo6oqhtM6mKrEkjp6OGR0RSFBgaqFVwhuhosRDM2I7YNzyK64kKioSwa9DuO8DeY5YaW0Iz6SFlKErVT08vURgfP24PhXIGMoPqf5RXeAQmRbDH7ODAamAR7So9kWKQKNgBa89cn0VBs2zJT7Lv95CSRRQfC0Z9g2mxqgTRAuoy3se4AkdNcEzdLZFhyAlbeVIxtP%2BwDB9trv0t4dwJms&X-Amz-Signature=8d545ec7458118cbcf9482ac170106b38fdd5aa7b6befd948e03283a32733099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676Z57H7U%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6TESV1Uq%2B%2F8uyMH9nQt6n6T5UL4QiUcxRNm27HhAcZAiEA7beNRn9PKIAG%2B9gqE3uAJD2O9fLbnAy6P6l%2FaTPujcIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBynmJv9VdzVNpidSrcAwu%2BjFH6s1V7O%2BsGuUDFb5ISnJUsm4wnfXcsee3OWY8w3i0EMcAuPS1rjrhMvTUjFNBLv7k8nNO8%2BPdr1TZtt7Q039YIuTf4OvnBlgaE6BLu7aNU0A5PJh2JT6S5op9RcweL%2Fb7%2BLhKuErDfs%2Bf5bcRfTb%2BXhSH6qRR8a1WAUHNpKgyK9%2FNS%2F9b09qjhouvH6ZMITZX8M4InOLim7AAVyAAZsq8Mbe6FMZx4SBQh7F3QhrZcf9tIFveK2uTGO2%2ByLNsIrpXnqCq84c2erzxw0ogPxdO40J0pWzKrbq4Eufte9Gr%2FpjbOwbgRP20MWObiW6EPTjraoCK%2B6en7QHWeB1g4Ol7q3wsj%2FzJ4zdNwe4BJG1zLzQeWN7nr7RfnWoj7mlRSauRB05lyLUN90OJmBV%2BsPryqQhKszY9V2ZRIM8yt8Twl%2B7VGqh0Rhl1okfZu9FB4019Pv0K5FdYwsTE1AXnVrS1JLO1C6bu0ImJ6bPB6qjsJgduuUfKcNrzxOxgG7SdrrtCjoZlHCI9sMw919wXlnmPwNq616w8Dt7hx8EP7Ep5H5MlRgv8RIfiZi%2BbmCMdlnjtjaqTuYEoxJjxXGJMNgPpXggXeF18Q%2Fp258j8a2jII1TXNi%2FFEn28iMOP468MGOqUBGptunaVG2Fk8rKqQhHCvSB1IIdq9xiSFv5UPMe6WMbcYISBAHHPbITs2zTZbQ5RMMMONYoDVCdJRvdciKcuNbotpHR6LI2BWkPqDw%2FqwQkir0mxDZBPkHiW8d%2FCsyELnGxUN7EFe%2FyESLr4I8Ao473aujHu0HpBXinyDVeh9eOkhgmyNzUxjxGZItlS3hGwKrSXJNrv7o0fHAxlJLixDiXGbBdyi&X-Amz-Signature=6244da52e7cf7a25958f7aa7b236c05d6e6c168bd36d92f2ad127580e89de88c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBPYFSU2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCexhMpndHyTIWWKw1M3cGrvltqfv8jwPNYjlolKfBOLwIhAJV5bM8IAbC6jEy4BpmsUAPpQ5w4AjlZddXRRigEtVWFKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BDrfkeGlnVSDQRs4q3AMoAcdNMm9sWsFUHZT%2FSW5P20Yi1gvB%2FBadqFvd5tW4noQEW2IK087VhGOzlQRn7FiphmYGVaAilWwwRCgXpRvnurUSBvI4WYFy2xTJP34EB70R%2FmAfTs1ZIUTX0cNuKUfeumoD6uTnT68bE6d8Aa6zLK8yaJZw1YFqxNVyzZcVLXUnpVuirk5cEkNh%2Fs9fE812S1xBUaQej6V1Pq2OeZKRiJG1jhq%2B%2F6LIBjO%2FVnvKCOTHXdDgoSQZ%2FAJFsjldve02pDcWt8QnHSbvXZYDX9%2BSd5%2Bbb41JRotAo8GmrddTT2wozdDiK5SaykfYIeD8IecBJ4xNyzg3%2FgGETfjzhXT9piIm1DoOci2DbtIXELQl%2Frvy%2Fwl9tw2OKn9h6hpTgBXXQUXVu54nrfQ6BmTkOo7L0JxK05SuloVF6QIdIHvrin7jZwsaWIq361Ios6shsPJ6mXoQfoTcoP8aI97yJi41pW2%2BFauoSlhdUHEkjkhi2NXOB8Zl2jni%2F04fUkwQtZ%2FZWPtuG0pHfF0sAFjgWEaOt2NzGSkz0I1JwL0pXMzNMEf3pOYBGuXTP%2FtUStlK%2F9aF0%2BQBiWchwlIB5iejOd2Gk6lWoeCYliJMLlVDaFmY3hnPdjskZGfzyJO8JjDj%2BOvDBjqkAb%2FRTLyeRZHZSDNmVttQ3Lg3hE%2BxmBPIvVa0X8bB36rYw4uUjTcavB%2BGRHn3ZY4h5K0Cq7%2B5Jf1xCVlF2jvGfl3rRaz4iOcwNg8NKSGb1o6Z%2FJnVgTkNdcqeq2QOaqr97XoNExRe8o5eyR%2Ft8aVXpIClOvBF1ALldnAgNfHr9iJCih0V4EGhmgMldJEbtKKvkAfJAV81ObtCAi51WCZ713oa4h7J&X-Amz-Signature=aa05068e260ebf7752da76e0c30da43c1ef9b6c2f621883531c5f4e0e7caa342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
