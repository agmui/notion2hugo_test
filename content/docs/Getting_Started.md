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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ETK52R6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDtPTTrBlY2sM3mQ2FvEB1xLcPXQfIQjdxaFjxnOUy0eQIgMwBw2J%2F4KmLvWHvSNrejW%2Bh3nm%2BMrXSxjaEfYtyNXd4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDF%2FFIf3jlecv1YMFrSrcA5V4R3L33%2FZFHtJzU0uJaUgXlKlxdAOXNxUXrbe%2FRuuzThK9WLSeflYx3o89W6TGxF8dgkW%2B4rT2kFun1Q6KZE1aRyCXdUl0WGqie%2FRmqJQJQKUeEjcaZTsy%2F48rA58YztcMVrw1zB5QXcq1SPiHwD0KWQSw5tixQA9ugT5lm6SoKwIk1yQpYFvzKzMsXdPVUy9dGISDMrksRAMyYFA8Yas1m%2F4X8trayN4V9NB8GdmA%2F48zeIdBPj%2FspzR5S%2F4i1wnvya3zsxtOhrMjVqgrch%2F6lQjmk4MVMdFwZaZJerhl3Yhe9vkcXYbZ2%2F3eUS5I9R27rGY4foXYVqM76TgjR9qEzjeCtQkz%2BizmCwMfvkqbuorO2JMY%2Bg5qKDL3TORgh%2FzhCrr%2BeCZBke2wIejKQUKNb%2BFvZjLM5kx%2BOsy2dNiyfL%2BnWiYhysuDR32pSX44XlYFQcFjigqPUUNqOwgpKKFlK3MfYJbKu1OxBIMkg5n3DwRzk1nMUZ5JO1Jty3u3uUFDLasNrmRRq2e%2FxSTRFxN%2BHvAr9NbEaq4JRdS8exbvmaQ9CyfMRQRhYxPQDpmQt%2BSxdTMxMZtXrhdfy2WiKh35%2FfhwjnMLjByv3YbAe%2B7mbQUBKGcu1YgnEXq6MI%2Fi48MGOqUBOaSYqV8zP7KQdbIBITDTfxhJRdbw7YsrqPoX0SjBiCVJFkLKKKYDmOOq8PsSk0ZAAZ5VDJbKZwJnNHN1HtGZ4sexugVyIUtPcLLtw7Trlti1rTWlj%2BZlkiKXVGg1L1bht9wUrf6%2FFKxffW%2FlR7dWN3oMmSDZG%2FihXr%2Fu%2BkIehdb1IdSfasLkMVvwSB0SMF1PnVnpD0xzwcwj2Z5OIQyPnEpfG7SR&X-Amz-Signature=721c4e0ecefd21b1cb76e780241ab8e7fc6316fbf0d4328cdbe5e2dd2c557710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ETK52R6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDtPTTrBlY2sM3mQ2FvEB1xLcPXQfIQjdxaFjxnOUy0eQIgMwBw2J%2F4KmLvWHvSNrejW%2Bh3nm%2BMrXSxjaEfYtyNXd4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDF%2FFIf3jlecv1YMFrSrcA5V4R3L33%2FZFHtJzU0uJaUgXlKlxdAOXNxUXrbe%2FRuuzThK9WLSeflYx3o89W6TGxF8dgkW%2B4rT2kFun1Q6KZE1aRyCXdUl0WGqie%2FRmqJQJQKUeEjcaZTsy%2F48rA58YztcMVrw1zB5QXcq1SPiHwD0KWQSw5tixQA9ugT5lm6SoKwIk1yQpYFvzKzMsXdPVUy9dGISDMrksRAMyYFA8Yas1m%2F4X8trayN4V9NB8GdmA%2F48zeIdBPj%2FspzR5S%2F4i1wnvya3zsxtOhrMjVqgrch%2F6lQjmk4MVMdFwZaZJerhl3Yhe9vkcXYbZ2%2F3eUS5I9R27rGY4foXYVqM76TgjR9qEzjeCtQkz%2BizmCwMfvkqbuorO2JMY%2Bg5qKDL3TORgh%2FzhCrr%2BeCZBke2wIejKQUKNb%2BFvZjLM5kx%2BOsy2dNiyfL%2BnWiYhysuDR32pSX44XlYFQcFjigqPUUNqOwgpKKFlK3MfYJbKu1OxBIMkg5n3DwRzk1nMUZ5JO1Jty3u3uUFDLasNrmRRq2e%2FxSTRFxN%2BHvAr9NbEaq4JRdS8exbvmaQ9CyfMRQRhYxPQDpmQt%2BSxdTMxMZtXrhdfy2WiKh35%2FfhwjnMLjByv3YbAe%2B7mbQUBKGcu1YgnEXq6MI%2Fi48MGOqUBOaSYqV8zP7KQdbIBITDTfxhJRdbw7YsrqPoX0SjBiCVJFkLKKKYDmOOq8PsSk0ZAAZ5VDJbKZwJnNHN1HtGZ4sexugVyIUtPcLLtw7Trlti1rTWlj%2BZlkiKXVGg1L1bht9wUrf6%2FFKxffW%2FlR7dWN3oMmSDZG%2FihXr%2Fu%2BkIehdb1IdSfasLkMVvwSB0SMF1PnVnpD0xzwcwj2Z5OIQyPnEpfG7SR&X-Amz-Signature=51e3a480b766f54c6b447d82980fbd65721d043bdc28138b5af600e5a2172a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ETK52R6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDtPTTrBlY2sM3mQ2FvEB1xLcPXQfIQjdxaFjxnOUy0eQIgMwBw2J%2F4KmLvWHvSNrejW%2Bh3nm%2BMrXSxjaEfYtyNXd4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDF%2FFIf3jlecv1YMFrSrcA5V4R3L33%2FZFHtJzU0uJaUgXlKlxdAOXNxUXrbe%2FRuuzThK9WLSeflYx3o89W6TGxF8dgkW%2B4rT2kFun1Q6KZE1aRyCXdUl0WGqie%2FRmqJQJQKUeEjcaZTsy%2F48rA58YztcMVrw1zB5QXcq1SPiHwD0KWQSw5tixQA9ugT5lm6SoKwIk1yQpYFvzKzMsXdPVUy9dGISDMrksRAMyYFA8Yas1m%2F4X8trayN4V9NB8GdmA%2F48zeIdBPj%2FspzR5S%2F4i1wnvya3zsxtOhrMjVqgrch%2F6lQjmk4MVMdFwZaZJerhl3Yhe9vkcXYbZ2%2F3eUS5I9R27rGY4foXYVqM76TgjR9qEzjeCtQkz%2BizmCwMfvkqbuorO2JMY%2Bg5qKDL3TORgh%2FzhCrr%2BeCZBke2wIejKQUKNb%2BFvZjLM5kx%2BOsy2dNiyfL%2BnWiYhysuDR32pSX44XlYFQcFjigqPUUNqOwgpKKFlK3MfYJbKu1OxBIMkg5n3DwRzk1nMUZ5JO1Jty3u3uUFDLasNrmRRq2e%2FxSTRFxN%2BHvAr9NbEaq4JRdS8exbvmaQ9CyfMRQRhYxPQDpmQt%2BSxdTMxMZtXrhdfy2WiKh35%2FfhwjnMLjByv3YbAe%2B7mbQUBKGcu1YgnEXq6MI%2Fi48MGOqUBOaSYqV8zP7KQdbIBITDTfxhJRdbw7YsrqPoX0SjBiCVJFkLKKKYDmOOq8PsSk0ZAAZ5VDJbKZwJnNHN1HtGZ4sexugVyIUtPcLLtw7Trlti1rTWlj%2BZlkiKXVGg1L1bht9wUrf6%2FFKxffW%2FlR7dWN3oMmSDZG%2FihXr%2Fu%2BkIehdb1IdSfasLkMVvwSB0SMF1PnVnpD0xzwcwj2Z5OIQyPnEpfG7SR&X-Amz-Signature=825810d47f124081df5b6d2491af659ff8f1b256672ff9da8b0ee96a7bb59b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWLKX77%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCv4YrXE8Vt5TLF65TMQ%2BzZ3ELSTsTDYV7tbL1Sj0a9RwIhAMtdMo1cF6WvqkEV8DfgcJuz94IUdSBFekJsHoazFhXEKv8DCHYQABoMNjM3NDIzMTgzODA1Igyj83EGhFuXsTyMqzAq3APCHmJ4DO6LVogj7ufoXF6YhDTGxP9NEV4K4DWowcLwfqppbp%2FitiaKnbj9VkA2Pbx9GX7pmOxKBk7WZjnQLZN5YqcY4wTSdu%2BW0uZ%2B5eC9scYKGU0iTNxn3YKPdKJneL6aPOyfxsZogCkJsKrCBEYrq9wHWQXcCxKhpXQQ1jWuRCy1m1XDON9dUvpKeNvXurame9yN1W0CZG%2FkjJL5z%2B4rKQW%2FD9ehSJMMXP%2B%2F7%2FBWORyVTpNKN0hiVZM%2F03hvo6jgI0RCRPfj37wQ5NzqO%2FrDOaklJB8%2FBdb974NqE2kHpVUkjRMAKRFToG2jjNcujqxZiKQFKiot9SO1frPytVOBmfuGm8Py5G8eS79cR2B3DOAm9EwLQsO%2BDMLvZFo%2BAjiVsYWbKq39Sen2ix%2FwwLZmnumQ1nj8Iydzj%2FJ2j8Dvog4gXCTi1Jd2jCiavcJB4yBA0Q1ZykM0Wal%2BsYMhHce6WFBcXEc%2FIyZOOM9LlyC6FlawCCNCpIbMKRJ5Glmve7W0NuJCybYWAJPQHaYmbmjtY26SXweieN9AG81MgG851nQmX6RuSdsCGRTGPLamz5xm5V7fPDlPYdoNxsaGHd8BtwinvhUcLq2HwIqd1hVaHBbpbuZ%2BWgj%2Bl4rhVTDt4ePDBjqkAcXTzZvPl0wh6SFdDZ8wqP7aH1W45FF%2BAvlJHwDI42IRhaRApEZ1NhyS4an4tSzn6VikT01rrnqtJ6XzYJUEBghjjF4nDS6k4mVYVs333Gz%2BJk1ZCYuIU0DbBS%2BNHTkAbyj0Qir4maQfjv%2BK1cJhz7wfsJc9XtD92KrhP4lX9%2B3cEJ1%2FNFWvBYqMT94M2mn4dxOeOiBRTtq5nyS%2FogyqUhdg9mm3&X-Amz-Signature=afdfa9bcb280b9f5d4d22b270b832f4370cf081f78d6d5a2634b596d6f306924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV7OGY27%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIG0r%2BOQbuivBK%2FnweuQWZ6AKKtZS4mcf%2Fnd%2Bur1QYStDAiAHpodCzDK2OOBkbr90CVpTEuDNzw%2Fv7Ycm3Mjak1cViyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMLEAnmIHo7nBHJ4rxKtwD3TXt12ZhRXfQERxBX%2FBkzshFz6Hp8tp4N2ZcJxtjO4gGxr6a6l8Gq47z%2Bjc8%2BTiWQjNiVfTMpNM763Lwt%2BqjbTnylCFVSuE2PdE36Qg6lApkEz3DlUkPo06fv%2Fk0ZNWL0uFLWWnPVb6Wqmkng6LRxTrSMrogXac%2Ba1mxi0x%2FSehb6uvK%2FOgZpYjsnbdB13%2Bkow79LC0yxdDPwvDjrNv%2FvWuZzwgAVYTMGxa%2FK6MReru3b5J8h4Xf%2F8RsusbviQ21bh%2FxWu3EIIDYQYud3Gn7AjUmsXsXUvnCQNvgP5a1SJd%2FZu9tXSjwnKwwEnW2k7%2B7A6QLUvoISkb2%2BBmWbq76BzcNJLSQ9I1N4GTL%2BTE47ZfR3QacuAuZb%2FXlngh4PLiZMdDmrfYNOU6F%2FTEhGkCqVbhtFo%2FaQvLFnXg%2BpmECmCvSs8aBPGzfZIJSL%2Bhgtl0GL7Rr7AY0wPrwnMpBoWAqvDOrOBr%2BNiushcDmUOD%2F0XYpOR%2B8LEm5ZjTjBz4y89ruVxRI9ik3HB%2Fwg%2B1y4Ds%2FU2OzSwWKDOL9jXczZvBvpfwuhHYUsQm3%2BbmZeGjbqa8kyl3gF5eLqeRbTYbuaryjcvhPBLBKwI%2F%2FGxzZdb6LTYhuhhl7VOStxOuYpOYwweLjwwY6pgHE1zdlUlnXFxUIrDia6qm1uL47izFHrXqtrXceXImJTYXDVvsB%2FzqtiJWDkEL9rEO5Zjx8e1g4rxyejMitUAbQ3nEL0QO7efNbnuYCxuq9mrMs1fq30jycrqeoYG64gUuGJ08JoJhzTUgwo%2FcYSWNxnfC%2BI6wPIMek92ER7F8Hmn9yriG3hnUUOjP7GYE2oWlCDvSKeCEY4KIuXGfZdAV4m5yYkd%2Fd&X-Amz-Signature=bb9e0099136298f47048b5ac3d4f74dce472135153f1eccf95e712a36f6df577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ETK52R6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDtPTTrBlY2sM3mQ2FvEB1xLcPXQfIQjdxaFjxnOUy0eQIgMwBw2J%2F4KmLvWHvSNrejW%2Bh3nm%2BMrXSxjaEfYtyNXd4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDF%2FFIf3jlecv1YMFrSrcA5V4R3L33%2FZFHtJzU0uJaUgXlKlxdAOXNxUXrbe%2FRuuzThK9WLSeflYx3o89W6TGxF8dgkW%2B4rT2kFun1Q6KZE1aRyCXdUl0WGqie%2FRmqJQJQKUeEjcaZTsy%2F48rA58YztcMVrw1zB5QXcq1SPiHwD0KWQSw5tixQA9ugT5lm6SoKwIk1yQpYFvzKzMsXdPVUy9dGISDMrksRAMyYFA8Yas1m%2F4X8trayN4V9NB8GdmA%2F48zeIdBPj%2FspzR5S%2F4i1wnvya3zsxtOhrMjVqgrch%2F6lQjmk4MVMdFwZaZJerhl3Yhe9vkcXYbZ2%2F3eUS5I9R27rGY4foXYVqM76TgjR9qEzjeCtQkz%2BizmCwMfvkqbuorO2JMY%2Bg5qKDL3TORgh%2FzhCrr%2BeCZBke2wIejKQUKNb%2BFvZjLM5kx%2BOsy2dNiyfL%2BnWiYhysuDR32pSX44XlYFQcFjigqPUUNqOwgpKKFlK3MfYJbKu1OxBIMkg5n3DwRzk1nMUZ5JO1Jty3u3uUFDLasNrmRRq2e%2FxSTRFxN%2BHvAr9NbEaq4JRdS8exbvmaQ9CyfMRQRhYxPQDpmQt%2BSxdTMxMZtXrhdfy2WiKh35%2FfhwjnMLjByv3YbAe%2B7mbQUBKGcu1YgnEXq6MI%2Fi48MGOqUBOaSYqV8zP7KQdbIBITDTfxhJRdbw7YsrqPoX0SjBiCVJFkLKKKYDmOOq8PsSk0ZAAZ5VDJbKZwJnNHN1HtGZ4sexugVyIUtPcLLtw7Trlti1rTWlj%2BZlkiKXVGg1L1bht9wUrf6%2FFKxffW%2FlR7dWN3oMmSDZG%2FihXr%2Fu%2BkIehdb1IdSfasLkMVvwSB0SMF1PnVnpD0xzwcwj2Z5OIQyPnEpfG7SR&X-Amz-Signature=1f41e26a9400fcd99aa35923025cc18e2f553238c85b4f1119cc75e06ade824c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
