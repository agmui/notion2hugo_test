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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDDZBY3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEoodR5GbltphnrpBzFYjUF%2FwUUrHALoKOmZFg5Y2rVyAiEA09a0iT232j%2Boj%2FeLRRyZkaPAiuvN4FgntQrpR2Q3Z2sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWX%2B72N%2FHyqIazkBCrcA2gK%2FscBwaks76zV84Ktdk0R1q1UvZ36TjxndfUIMMxGbjuTKjwVtLmn5wOPfowqSi%2BK5KqxLm2z976gMSOk7BWueekztONDFvv6ZAMZl7VQInIm7nm7j9886lkozaLRC8QL05gkMqkFeS6kkSHWK5USkr8DrcBUgJkuqnN6y%2Bd4KVsn04LLoA6zFek2U3H4bVvs6Rl07wUpklp5zDKrXR5lEazEeZUTlt6bmzZH7P0ADW1Lhhv4iH42ObQy2WQr7TqM%2FZq0u7hqoSqJDcK3FZJdO6DMe4yrlmaE8HShBmZuU%2BhCA9o8ZBzpnRrDFE%2F54Vt7X1oxaAh087fvSzY%2BzrxQShULb11UI%2FThiIqaPPGEV6ylb8qqGnfk9dnc6c8f95IC1cB2eqNxf7duk5DRpjz7fQR5vr8M8ctyiz566HVJJQbgo6BKDCpaYsJUIUwbuj0cPfDdEZ26ktCnI9DNmxu2IouTmcI%2B6aQMtv7jOejKIfjnI0OEfRDLoqJMehc9GhjkNP4f7G82BhsKVOnbe5SV4kc%2BK662h2R6rLIHwzqkS8GS3szPIdbQnig1Vzj8S%2B%2BErjLnQO81RTdxFGtzfbbl4QCHOPMr%2FMk6ofhbEzcQYj%2FE%2Bwz84fGg257cMNPxqMIGOqUBxO4YMiXku47QTDwNZr5FAnFs7eqHzhOLx2KxMMgcXWzmz5NMkNe4q1tZTAqsE6ocR3WcEmbiAbMtplm%2BsCSVOkCdow%2BzCvOFlVYBes%2FSyHNfWl%2Frl0trIznqu7a21GqozMEHBimgMtrhtEB21acwYQZUjjZ6Ydj4ocC4NqmqvE7F3awNP8kw1Mrd8rXuWRYs1igf2iuFxGu0QvOdN6ajOYuK6y6K&X-Amz-Signature=47fe9b882fff5cb5f2dc44562fe91ad38df023aa7418fd7483a8118e29cda744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDDZBY3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEoodR5GbltphnrpBzFYjUF%2FwUUrHALoKOmZFg5Y2rVyAiEA09a0iT232j%2Boj%2FeLRRyZkaPAiuvN4FgntQrpR2Q3Z2sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWX%2B72N%2FHyqIazkBCrcA2gK%2FscBwaks76zV84Ktdk0R1q1UvZ36TjxndfUIMMxGbjuTKjwVtLmn5wOPfowqSi%2BK5KqxLm2z976gMSOk7BWueekztONDFvv6ZAMZl7VQInIm7nm7j9886lkozaLRC8QL05gkMqkFeS6kkSHWK5USkr8DrcBUgJkuqnN6y%2Bd4KVsn04LLoA6zFek2U3H4bVvs6Rl07wUpklp5zDKrXR5lEazEeZUTlt6bmzZH7P0ADW1Lhhv4iH42ObQy2WQr7TqM%2FZq0u7hqoSqJDcK3FZJdO6DMe4yrlmaE8HShBmZuU%2BhCA9o8ZBzpnRrDFE%2F54Vt7X1oxaAh087fvSzY%2BzrxQShULb11UI%2FThiIqaPPGEV6ylb8qqGnfk9dnc6c8f95IC1cB2eqNxf7duk5DRpjz7fQR5vr8M8ctyiz566HVJJQbgo6BKDCpaYsJUIUwbuj0cPfDdEZ26ktCnI9DNmxu2IouTmcI%2B6aQMtv7jOejKIfjnI0OEfRDLoqJMehc9GhjkNP4f7G82BhsKVOnbe5SV4kc%2BK662h2R6rLIHwzqkS8GS3szPIdbQnig1Vzj8S%2B%2BErjLnQO81RTdxFGtzfbbl4QCHOPMr%2FMk6ofhbEzcQYj%2FE%2Bwz84fGg257cMNPxqMIGOqUBxO4YMiXku47QTDwNZr5FAnFs7eqHzhOLx2KxMMgcXWzmz5NMkNe4q1tZTAqsE6ocR3WcEmbiAbMtplm%2BsCSVOkCdow%2BzCvOFlVYBes%2FSyHNfWl%2Frl0trIznqu7a21GqozMEHBimgMtrhtEB21acwYQZUjjZ6Ydj4ocC4NqmqvE7F3awNP8kw1Mrd8rXuWRYs1igf2iuFxGu0QvOdN6ajOYuK6y6K&X-Amz-Signature=2b4ff67311ff556c33ae7e1fb1708e991e73872431b79c2984e532f737a62f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDDZBY3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEoodR5GbltphnrpBzFYjUF%2FwUUrHALoKOmZFg5Y2rVyAiEA09a0iT232j%2Boj%2FeLRRyZkaPAiuvN4FgntQrpR2Q3Z2sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWX%2B72N%2FHyqIazkBCrcA2gK%2FscBwaks76zV84Ktdk0R1q1UvZ36TjxndfUIMMxGbjuTKjwVtLmn5wOPfowqSi%2BK5KqxLm2z976gMSOk7BWueekztONDFvv6ZAMZl7VQInIm7nm7j9886lkozaLRC8QL05gkMqkFeS6kkSHWK5USkr8DrcBUgJkuqnN6y%2Bd4KVsn04LLoA6zFek2U3H4bVvs6Rl07wUpklp5zDKrXR5lEazEeZUTlt6bmzZH7P0ADW1Lhhv4iH42ObQy2WQr7TqM%2FZq0u7hqoSqJDcK3FZJdO6DMe4yrlmaE8HShBmZuU%2BhCA9o8ZBzpnRrDFE%2F54Vt7X1oxaAh087fvSzY%2BzrxQShULb11UI%2FThiIqaPPGEV6ylb8qqGnfk9dnc6c8f95IC1cB2eqNxf7duk5DRpjz7fQR5vr8M8ctyiz566HVJJQbgo6BKDCpaYsJUIUwbuj0cPfDdEZ26ktCnI9DNmxu2IouTmcI%2B6aQMtv7jOejKIfjnI0OEfRDLoqJMehc9GhjkNP4f7G82BhsKVOnbe5SV4kc%2BK662h2R6rLIHwzqkS8GS3szPIdbQnig1Vzj8S%2B%2BErjLnQO81RTdxFGtzfbbl4QCHOPMr%2FMk6ofhbEzcQYj%2FE%2Bwz84fGg257cMNPxqMIGOqUBxO4YMiXku47QTDwNZr5FAnFs7eqHzhOLx2KxMMgcXWzmz5NMkNe4q1tZTAqsE6ocR3WcEmbiAbMtplm%2BsCSVOkCdow%2BzCvOFlVYBes%2FSyHNfWl%2Frl0trIznqu7a21GqozMEHBimgMtrhtEB21acwYQZUjjZ6Ydj4ocC4NqmqvE7F3awNP8kw1Mrd8rXuWRYs1igf2iuFxGu0QvOdN6ajOYuK6y6K&X-Amz-Signature=f75918fc314ec7e2d0e1342876425aef1fddbecbad8195963adae3d30778fa1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z4ZVLGH%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEgDwUfH9QbuwHHs5a%2B8MDSsvMbJeMsHgEGMMtFCgRu1AiEAv8SHqPvYS19KULnXYAMVci5xjQBWJgZ%2F2HcjQ1NcYpsqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9lcb6tBwQw1tluQyrcAykFijMzQvg92skua89XODOj2f5q6yxHMAeEI8cQu%2BhJrSBu%2F6AIKP%2Bvs8%2Bok7QA1hTJvWkgbnH6EQ%2BdzFSqGJJoV463zPzjR9Fu%2BW45i7UB6SzshPz8MIER%2FRrXKwB66wItP%2BQ9HFfplbblIYb5sZaIr3M6xeJLLPt%2B%2Ft7wB%2FAz3MO11HehSrZwJiRT0kiVR0KultnVw%2FfCqwESNfyRKef2Wt4MvI%2BW4NCykEnxceNnY%2BdWjrAeKH0UpEQwiCkqye3CMXz7iLH%2FaLWud6UUi2pbsSxe5xVi2WWJYtFOAU%2BI2tzlVeseVSek7KjA6%2BQPz%2FrS%2FQYMX84zMizHD93VFPEI%2BWfjxS7CalIaMzecKBBSC7eEgbAijPU78yTcEjw5nVAi0tJeJ5usHdX2DoCPt2J8tVbc62NgUxvIKed%2FZy3I4K35hXCDrViQSylVoLhGtkwwZTVwdrk4FZM7f0vNS1nTyeAZs5LcyjmzRbjYdzjmy3CZXo6XFwu2404TgJvhPrqoKoshVnGgRl%2FxdFm%2BRbue7GPu3JhN4s29Z5AL0geYdtul4YP3r1ukNRta%2Fr6l6Z0%2B4voK%2Fxc8K1RroPrYZgmfftZ3MK1K7rJomHx7rKBkaN0%2FHR8GDnBOFk4mMJ%2FxqMIGOqUBHY7zpJxBDGrGVHIoVc0R2Psksi028jy04SpYssADruU5CCUnWRg7V9tu9NmL%2Fhj39DZqRTni01d%2F2k%2F6jyksuhLYAcDmDEyB3yQcQPvcAkHOEZdXvKJm6UJOqHxdmIy9ONf8JQ5uv3RageKQ3%2BPM3tz8ZuPq1ihOhm6eFdOlrVQXiUony8LPPsdYOvmdzTBtp%2FJIl%2FElLOKWJSWTZFsb9DbIUmkD&X-Amz-Signature=55efad7c39fd47de13d9b95892e214448d0d932b85784af96751afa100127b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCSZTWX3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAujgxjpnDgFdlsGMX8kG5pXfjBpgL%2Bcf8oWi8Gi9jzkAiBQmsB3ekMbel3SFdwAvBO9TyIZjl4jkK8eNaSzOD26tSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BVcfRxxki%2BF6jnbLKtwDpuv7XYEbE5k8QuWFEHCYDsPELTXU5Igj8lvBnotLIyu2N8Q%2FytMY2u1Ox6r4Yf6D32OqoK5rTKUDJwph9B%2BhuC3YGyOe%2BxUkAR8FPaiqUnKvXxCKKVh4fh43DA6HcEc8YzwUB9lUDhPfOVZD0VaoavAYy79SURI2IJUFJx%2FWqRMQLrKNEMJkH4OXDKS7vRVnKLxkQ3HAzRvQzl7oUP%2FkmayaKWm%2B2SPiz1lO9HNqDkZ55%2Bo%2Bz%2FaJ9F7WpUlSWN7Sul47S12Gffas9MbbkTWl3kyd6Jb983KZrmgK%2BLK54D0g8cxeNOI61xexuIeagyIuWkJUjXurPfw9cY6iTTsynQEPFz0k8liUWe45%2BRX6muD4y8nNoIXZOchNDYym11RjQnf%2FVdF8i%2BW4sclOTL%2F5RpZX5zCpBwKWFOttbuB48CVaZ7GUasnR8IG2cA8XzW%2BNa7cuC1p97vRSfmPuPLY934w%2BYKK5mfi%2BZcRXp8QKRqKBf%2BgZeTK2WL%2F1tPyEkdiIWTjdLffPoleXAYGh4aPkrIVHaeHYQ9cxJKy8%2F7UZNk0tui4srC%2BvGMwRk1wkT%2B15J0CS9fzpPJz2jVncBAO3DKDlfSxl6jVgmbl%2BPKibF9rtXFACnsVJxK%2FrMFYwqvGowgY6pgFuTKg%2FuyL2SI6omhXzAEqV3ej9eu8iy4OSKxoioOpUNLpLtgqvX%2BOBsyXNSpWp5F42K391OTDuL1GJEE8%2BpPuscHk42NT6I3tlgOaQ0sseYXbDFbHBksTHsukMywaxtfBu0eQsG0GG%2FwkaOD9Gj8r1QLxjyrMKyOdRuukm8D8QDJMIs3xdM8ygEm83PIUDRIXSdIgg81YUJhIQpzd6CH6I0IV6wDaF&X-Amz-Signature=93a6e00346fc8cd9051cc4e1c533011c29d8d64610f493eba14b77b205b3b5c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDDZBY3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEoodR5GbltphnrpBzFYjUF%2FwUUrHALoKOmZFg5Y2rVyAiEA09a0iT232j%2Boj%2FeLRRyZkaPAiuvN4FgntQrpR2Q3Z2sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWX%2B72N%2FHyqIazkBCrcA2gK%2FscBwaks76zV84Ktdk0R1q1UvZ36TjxndfUIMMxGbjuTKjwVtLmn5wOPfowqSi%2BK5KqxLm2z976gMSOk7BWueekztONDFvv6ZAMZl7VQInIm7nm7j9886lkozaLRC8QL05gkMqkFeS6kkSHWK5USkr8DrcBUgJkuqnN6y%2Bd4KVsn04LLoA6zFek2U3H4bVvs6Rl07wUpklp5zDKrXR5lEazEeZUTlt6bmzZH7P0ADW1Lhhv4iH42ObQy2WQr7TqM%2FZq0u7hqoSqJDcK3FZJdO6DMe4yrlmaE8HShBmZuU%2BhCA9o8ZBzpnRrDFE%2F54Vt7X1oxaAh087fvSzY%2BzrxQShULb11UI%2FThiIqaPPGEV6ylb8qqGnfk9dnc6c8f95IC1cB2eqNxf7duk5DRpjz7fQR5vr8M8ctyiz566HVJJQbgo6BKDCpaYsJUIUwbuj0cPfDdEZ26ktCnI9DNmxu2IouTmcI%2B6aQMtv7jOejKIfjnI0OEfRDLoqJMehc9GhjkNP4f7G82BhsKVOnbe5SV4kc%2BK662h2R6rLIHwzqkS8GS3szPIdbQnig1Vzj8S%2B%2BErjLnQO81RTdxFGtzfbbl4QCHOPMr%2FMk6ofhbEzcQYj%2FE%2Bwz84fGg257cMNPxqMIGOqUBxO4YMiXku47QTDwNZr5FAnFs7eqHzhOLx2KxMMgcXWzmz5NMkNe4q1tZTAqsE6ocR3WcEmbiAbMtplm%2BsCSVOkCdow%2BzCvOFlVYBes%2FSyHNfWl%2Frl0trIznqu7a21GqozMEHBimgMtrhtEB21acwYQZUjjZ6Ydj4ocC4NqmqvE7F3awNP8kw1Mrd8rXuWRYs1igf2iuFxGu0QvOdN6ajOYuK6y6K&X-Amz-Signature=30f8f186a362fa97b38c9f8d3edf5d0d74d4bcb4c2fbf0544eee227fba06ec7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
