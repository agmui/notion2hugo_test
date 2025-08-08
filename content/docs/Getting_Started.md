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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6JR6YR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCbqxL1lRblGho7PhG4t1LwIV7WD0JrgO1l6W5OXhOlDwIgQmBEt1fkceG8MeJVO50MjUGcOOMEwsyx%2FM2CkUxZUPsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3xKETZHZZSQ2rFnyrcA%2Ffo17tjsER4AveoIcN%2F6CK1UhLOg%2BAtvzussQ2UWtfzMX0gsYmJMPmrfFfJWG2b2kC4v7bOWjY2MYtMUkfX%2FafrYMh%2Be5GMeJFlU0U0PzoM4mYqeSkqeigCB2Ku5NXYFp1LKTe0w2tgzg9yNk9WU%2FwIlzmMbrAFC3xPfk8ufHkX%2BCEl5f1W%2B5rrz8nQDv7iOqbdZqa4ULuTvsNNvcVkaW9tj1Gou6WNPEnOEIGqEkOsoc%2FL68VMCksF8MvDv7tYL4qkMMZshLDcidAhLa8hTNwjOJJGdcvKo6C8VaAO19bGe5DPi9aphlbWdPQl0YlgLtjl20ri6ITaOsotukuTFyeqEcHInAwxtga%2FI%2FtVZ14gUen0W%2Fc7TkVeUi%2F1tuXtLTGzdtqazUPY9Jv%2FXO7J0jqmeS%2Fnf7EwZEg6Xo9rC6pjqLS4RTXOclfad5J8HecXpvjHmkbPDDAr9JGVk%2Bcebh2dthwLHhmFozpNZkJOauvLSUQNKjrP7v7OJ3%2BFJtEbMkNiwSkpuCv1E%2BPawrnHLdmfYvEhTeNDg9jYy4v3fuNOqDTTRRv0DwOS6u7iMNN%2FfRAuooWrZEM3D4kKypdfJ%2BKipGRSJO4xyBiFyHgepoYsyqD6%2FelrYMS82XFcMKvg2cQGOqUBQvJYoBW962qzzNYdwtCserAo%2B%2FNtmUtC7tO3kRS%2F3afBwjVYI3Pi3m7WxN4MZH06Wul4FtSvOyGkqIgkc%2F5k2rJO7j1v0Ti8UrMp4Zm6jkm6yUF5El4Q6BtHEdVYPsZNg7XiPPG%2BbKUnGNRgWNsQSt52q9tUwH3qZikgvlIp8nufH%2FgsgCkYUU1oiIjYhIXvSGMBtiCiaglCHuggTWJ8EQ%2FKlYST&X-Amz-Signature=08ba4794138ea640f1648c7a7ce8e943536f0d6d2d048e8f68aadb4e29016a93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6JR6YR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCbqxL1lRblGho7PhG4t1LwIV7WD0JrgO1l6W5OXhOlDwIgQmBEt1fkceG8MeJVO50MjUGcOOMEwsyx%2FM2CkUxZUPsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3xKETZHZZSQ2rFnyrcA%2Ffo17tjsER4AveoIcN%2F6CK1UhLOg%2BAtvzussQ2UWtfzMX0gsYmJMPmrfFfJWG2b2kC4v7bOWjY2MYtMUkfX%2FafrYMh%2Be5GMeJFlU0U0PzoM4mYqeSkqeigCB2Ku5NXYFp1LKTe0w2tgzg9yNk9WU%2FwIlzmMbrAFC3xPfk8ufHkX%2BCEl5f1W%2B5rrz8nQDv7iOqbdZqa4ULuTvsNNvcVkaW9tj1Gou6WNPEnOEIGqEkOsoc%2FL68VMCksF8MvDv7tYL4qkMMZshLDcidAhLa8hTNwjOJJGdcvKo6C8VaAO19bGe5DPi9aphlbWdPQl0YlgLtjl20ri6ITaOsotukuTFyeqEcHInAwxtga%2FI%2FtVZ14gUen0W%2Fc7TkVeUi%2F1tuXtLTGzdtqazUPY9Jv%2FXO7J0jqmeS%2Fnf7EwZEg6Xo9rC6pjqLS4RTXOclfad5J8HecXpvjHmkbPDDAr9JGVk%2Bcebh2dthwLHhmFozpNZkJOauvLSUQNKjrP7v7OJ3%2BFJtEbMkNiwSkpuCv1E%2BPawrnHLdmfYvEhTeNDg9jYy4v3fuNOqDTTRRv0DwOS6u7iMNN%2FfRAuooWrZEM3D4kKypdfJ%2BKipGRSJO4xyBiFyHgepoYsyqD6%2FelrYMS82XFcMKvg2cQGOqUBQvJYoBW962qzzNYdwtCserAo%2B%2FNtmUtC7tO3kRS%2F3afBwjVYI3Pi3m7WxN4MZH06Wul4FtSvOyGkqIgkc%2F5k2rJO7j1v0Ti8UrMp4Zm6jkm6yUF5El4Q6BtHEdVYPsZNg7XiPPG%2BbKUnGNRgWNsQSt52q9tUwH3qZikgvlIp8nufH%2FgsgCkYUU1oiIjYhIXvSGMBtiCiaglCHuggTWJ8EQ%2FKlYST&X-Amz-Signature=fa27d98113caf2bdf7873c5e8b3077fb5a4daee958ee9bde05c81902fdada1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6JR6YR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCbqxL1lRblGho7PhG4t1LwIV7WD0JrgO1l6W5OXhOlDwIgQmBEt1fkceG8MeJVO50MjUGcOOMEwsyx%2FM2CkUxZUPsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3xKETZHZZSQ2rFnyrcA%2Ffo17tjsER4AveoIcN%2F6CK1UhLOg%2BAtvzussQ2UWtfzMX0gsYmJMPmrfFfJWG2b2kC4v7bOWjY2MYtMUkfX%2FafrYMh%2Be5GMeJFlU0U0PzoM4mYqeSkqeigCB2Ku5NXYFp1LKTe0w2tgzg9yNk9WU%2FwIlzmMbrAFC3xPfk8ufHkX%2BCEl5f1W%2B5rrz8nQDv7iOqbdZqa4ULuTvsNNvcVkaW9tj1Gou6WNPEnOEIGqEkOsoc%2FL68VMCksF8MvDv7tYL4qkMMZshLDcidAhLa8hTNwjOJJGdcvKo6C8VaAO19bGe5DPi9aphlbWdPQl0YlgLtjl20ri6ITaOsotukuTFyeqEcHInAwxtga%2FI%2FtVZ14gUen0W%2Fc7TkVeUi%2F1tuXtLTGzdtqazUPY9Jv%2FXO7J0jqmeS%2Fnf7EwZEg6Xo9rC6pjqLS4RTXOclfad5J8HecXpvjHmkbPDDAr9JGVk%2Bcebh2dthwLHhmFozpNZkJOauvLSUQNKjrP7v7OJ3%2BFJtEbMkNiwSkpuCv1E%2BPawrnHLdmfYvEhTeNDg9jYy4v3fuNOqDTTRRv0DwOS6u7iMNN%2FfRAuooWrZEM3D4kKypdfJ%2BKipGRSJO4xyBiFyHgepoYsyqD6%2FelrYMS82XFcMKvg2cQGOqUBQvJYoBW962qzzNYdwtCserAo%2B%2FNtmUtC7tO3kRS%2F3afBwjVYI3Pi3m7WxN4MZH06Wul4FtSvOyGkqIgkc%2F5k2rJO7j1v0Ti8UrMp4Zm6jkm6yUF5El4Q6BtHEdVYPsZNg7XiPPG%2BbKUnGNRgWNsQSt52q9tUwH3qZikgvlIp8nufH%2FgsgCkYUU1oiIjYhIXvSGMBtiCiaglCHuggTWJ8EQ%2FKlYST&X-Amz-Signature=1b6d4a52528469a992e46b5ce1963663f33a506937e0eb69c2b5ead5bb35a3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFO5UZN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC%2BDQyvPdhiOMeod%2F2cVJFoHDS9G7%2BexPjAgeOshs2DIQIhAIYcfR7iVQKBj4Bt4bI121I%2FWx%2FfF5hq6ciMVP97vZ1yKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys13fndy0gMeNbRZAq3AMn%2BP0pqX20Y4v0rE83BTQ68cqfZ62h4QfS%2BbqQpA0aeix7bdYejTlV8fnMiIT5Js7S86%2FzFnd0IakYVWLR381V7MUF1%2FBBb%2F5MSl2q%2FcvbKSKIzAvRJsBJVCJ0qF5xRe554OxgiWRVhGwvO1NuGteNbNcCR1HRdt5O3Q0mcfIomEUdLgMX1dLRUwvPkW3T4PsnJYP6z%2FuwfQXRG0IGPW3W4e7wN5%2B6Kwx%2F8LBZoieTqW1pqfgfJbOTH9CWaJs%2BDEaIIh0P%2FOJnUf11hnwnmRZYDv4lBPdd34tJeW0KYmqqmOH2NeoVmeD5zrxzhHM8kWn3V%2FsfMjE11MrBL0E3xM34rcJQKJeqKAMsLuxOBraRbfBVTVu3P4X3ueek5YJv0%2BoAN%2BUmnKoDPFgiaIb%2F35sclyuMu%2Bkavdp8KNKvIP%2B2qXYzVVMwTVafp4geryOmXsA%2B%2FSwCXkjuresQdF0oRmfC3HtFzfNzlK5kX4r0dZAVv0pYDfDtAHu0vcjULwzS4DVMTOIqk4%2FTih0SjrVeea%2BCVw0EFOePoLRjm788d6I%2FfzgqLwhxYPlW5mdzFfhI6iI%2BXmKQlg4DDdqynnnUZqlNzDt15rshpb674NHHmtsp%2FOYGyAR0kDHewGrPtTD639nEBjqkASR7HKdSCrOdeH71nRqS3PpxPGErgoGXzheGdNEytXeQHu3ynXEoy8MFe7Mr4ZDq1MR%2Bq8OwUj3h5bzxpbvum86qQRv%2FM5jLPCMtyDEgCYbtUv6t3J4yrC%2BFo%2Fq9tfN2M8J6WUEg%2FsUE1sTgN0k5NppbaVpP8rQghTjZkjX8Xc%2F8CYr%2BPrb2yOQJrm1mWJ6pe%2FWl%2FONjtz1aJNkSbcMEahDcARRG&X-Amz-Signature=850fae8dc18d78613c668b2d279de1a77d9f44a32f30e88a6a312c9009456310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM23F2SP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAoY569tYYheAJVJ4jJK9J%2B1PPKQlvz%2B%2F%2FwjzUusqTPZAiB7NDpj446CVujD1%2B5jO1sYFIBdDnL%2FRwkpxOpYiwzIzCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6KxnHBwqDOFl0L64KtwDWmdZ3o3e603qrbRMZZ8vgqmDGC88ry%2Biv9GAZrHBaw0rdgfUy8nn%2F1%2Bomxglulld13Yr7v6FOoJlcfIecaHq2yl4CQi3LJT1JD01KJtnaaTF1t6F72TG8bYWpCBOy9SdfccOvXSEzTf1az4GBpof0ue6hPilsKwUSmsbUN07%2FlJ7Y6to%2BhdhJvfns6PjvGp1moQ5janbXN%2BCEfGMXBrvp9kW0%2FbZGRMpxFyaQAWvSCtQtLZ5PZQp6N%2BshEvdrhb37NxX8tXeUESZ474XiFnACHWHUFed8Rf5RskWcz0%2Fv9CxXQOBkaFVN3XbvbBBztqcVf%2B%2BhG5Hhl%2Bk90s3aLfFn%2BxlGW1h3Lj3MvfZaVS9AXhRaAAFqAubHusYJvx71i%2BXATHHDwZb3JccnyADwHBuaSATjHyz6aTyUWnGx9g7yM7zyYMZZhF%2Fo8XcmJ9dk6fGPKUqksNXyogPl8Eniho0uw63kn0cEhtON3LqBDxQkuBVaTEib0U8ZZEtiWtSaIAo9FfyUeY0NdIBbbyDYc%2BhSIoIvy%2Fpz0ULbCIsUV5%2Fq9RhqqZoZm365jPxE2j5nFBWpcD04HnkJc89BBDojYng2nxU8lc8cDE6kCT0mQcvPaWZLKGNmTQCY3PvhHowheDZxAY6pgHhmO%2BDt%2B4YrjqFzT6Xbz1Ogm7BwtwMDRgjugVsQcj3lWu4Y4DG3LP58z5jUrD15T4l3lj%2FqQooqaxPCTN%2FgYX6e%2FNHTmQ2e5lIcS%2BPzQ09rRr2xjL0VV2vXxnYz8wgP%2FpAE1hEzrOcG9kEh4FclFqhbX0cwBJfF59vp5iJL2P5irexFAe8blf7CcLKqe2b2eyneYmM4E%2B06V1USVCQ2vnLBJp%2B8hEb&X-Amz-Signature=4c9415358846863f8837bdc0b18b129e51f93c0956eef05581c117a7ac3ce311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6JR6YR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCbqxL1lRblGho7PhG4t1LwIV7WD0JrgO1l6W5OXhOlDwIgQmBEt1fkceG8MeJVO50MjUGcOOMEwsyx%2FM2CkUxZUPsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3xKETZHZZSQ2rFnyrcA%2Ffo17tjsER4AveoIcN%2F6CK1UhLOg%2BAtvzussQ2UWtfzMX0gsYmJMPmrfFfJWG2b2kC4v7bOWjY2MYtMUkfX%2FafrYMh%2Be5GMeJFlU0U0PzoM4mYqeSkqeigCB2Ku5NXYFp1LKTe0w2tgzg9yNk9WU%2FwIlzmMbrAFC3xPfk8ufHkX%2BCEl5f1W%2B5rrz8nQDv7iOqbdZqa4ULuTvsNNvcVkaW9tj1Gou6WNPEnOEIGqEkOsoc%2FL68VMCksF8MvDv7tYL4qkMMZshLDcidAhLa8hTNwjOJJGdcvKo6C8VaAO19bGe5DPi9aphlbWdPQl0YlgLtjl20ri6ITaOsotukuTFyeqEcHInAwxtga%2FI%2FtVZ14gUen0W%2Fc7TkVeUi%2F1tuXtLTGzdtqazUPY9Jv%2FXO7J0jqmeS%2Fnf7EwZEg6Xo9rC6pjqLS4RTXOclfad5J8HecXpvjHmkbPDDAr9JGVk%2Bcebh2dthwLHhmFozpNZkJOauvLSUQNKjrP7v7OJ3%2BFJtEbMkNiwSkpuCv1E%2BPawrnHLdmfYvEhTeNDg9jYy4v3fuNOqDTTRRv0DwOS6u7iMNN%2FfRAuooWrZEM3D4kKypdfJ%2BKipGRSJO4xyBiFyHgepoYsyqD6%2FelrYMS82XFcMKvg2cQGOqUBQvJYoBW962qzzNYdwtCserAo%2B%2FNtmUtC7tO3kRS%2F3afBwjVYI3Pi3m7WxN4MZH06Wul4FtSvOyGkqIgkc%2F5k2rJO7j1v0Ti8UrMp4Zm6jkm6yUF5El4Q6BtHEdVYPsZNg7XiPPG%2BbKUnGNRgWNsQSt52q9tUwH3qZikgvlIp8nufH%2FgsgCkYUU1oiIjYhIXvSGMBtiCiaglCHuggTWJ8EQ%2FKlYST&X-Amz-Signature=2fceba1bfcd92a9c4d2780b97e71bbe34fab6bd318684c1052f761ba70709447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
