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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QOAHNKK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIGCJ5E%2B3oKp8aW3jFcB%2BJ%2F9W131I7DfvAFYzfUtIHEXXAiBZq5TAk8QRNQDr0YfqoM8Bwa%2FzGg7R8d%2BfjlEa6KqGNyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Brpaz3HDDohGsjYIKtwD4oBiYycaG4dFKye4Ql0Qtjm5mw2l3EF%2Bd%2BxrYiCWM1xAYPKyFMio6bAl1o%2BS1CvUokAyMnOIVhgFmBGh7jSsJeGq8fJYAEVxur3lyhlV5%2BlOZ21gJkNfld0HLzfZ%2F7FQbqPudtninNq78HHqcV8xnmq%2FZwsB5WqLWj9PfdJ6rgffP5ZqDDkKwikeqODO%2FpDKdllIF7xeoS2VC7zjlHnDSVSI5LuTgkIP%2FJYHgm5zcNmOm5CxNFzu8sgOhBOUyhNdp8DvRLvOIYEJquMUl%2B6VKxU7sYHGgLA8Fq55Yy%2FKS0faLW%2Bzy%2B%2BttXeKM9ewYk%2Bw88ZoeDoB58vcteRcrBXguYnkHOvkq0HuofUm7L%2F4LyHKSP7QDUdTv3q7naWVKN%2Bcp1GtDPz5JaAfqKAjTg5ITsNXo329miR2vq5KxzpeG4NQFqBxzwPavbPZpVKHll88AADHyxyB%2Fsy1cfOmpeA%2B8svl7G4hC7l6pPz2lWtweGKo0uzgTQ2a4GyOULEw8gdAktSzmOagFBHL8woyJzRdv5qN1NvKaQZ5eMcGZuvkO%2BkP8wmpHq9Djmcv15MD4mGpwQCMCuBS%2F3rnLXLvueAxdX4mbVCspEDy934T2vaoDA7Xh5AQLK3NHctGv0Aw0cjQxAY6pgFT%2FC9QDMWBajfRr2SDLgYDbDqJoKD5Fqr7qk7EfMPUlEheCvxxSaWzUJXm2K84p%2BNhSXFOo5FTHXoIPxq33uSo8I8VcsMojqqMIZPRZq%2FVd%2BkpxHcgvyVCtDgmyVvkL6uzU33qYFxzbKmHSUZSRnX8bcm6EoxEm%2FVKwzfzt9hVXqTcQB%2FIs7HKMEq0NpFFUairjv3cQdjSdwefOO6viDQlypt%2FS%2FTU&X-Amz-Signature=445027e9eb0ed6f7eb478d66ec3c9658b30a09f54aef1f18fdbbdde908bd2a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QOAHNKK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIGCJ5E%2B3oKp8aW3jFcB%2BJ%2F9W131I7DfvAFYzfUtIHEXXAiBZq5TAk8QRNQDr0YfqoM8Bwa%2FzGg7R8d%2BfjlEa6KqGNyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Brpaz3HDDohGsjYIKtwD4oBiYycaG4dFKye4Ql0Qtjm5mw2l3EF%2Bd%2BxrYiCWM1xAYPKyFMio6bAl1o%2BS1CvUokAyMnOIVhgFmBGh7jSsJeGq8fJYAEVxur3lyhlV5%2BlOZ21gJkNfld0HLzfZ%2F7FQbqPudtninNq78HHqcV8xnmq%2FZwsB5WqLWj9PfdJ6rgffP5ZqDDkKwikeqODO%2FpDKdllIF7xeoS2VC7zjlHnDSVSI5LuTgkIP%2FJYHgm5zcNmOm5CxNFzu8sgOhBOUyhNdp8DvRLvOIYEJquMUl%2B6VKxU7sYHGgLA8Fq55Yy%2FKS0faLW%2Bzy%2B%2BttXeKM9ewYk%2Bw88ZoeDoB58vcteRcrBXguYnkHOvkq0HuofUm7L%2F4LyHKSP7QDUdTv3q7naWVKN%2Bcp1GtDPz5JaAfqKAjTg5ITsNXo329miR2vq5KxzpeG4NQFqBxzwPavbPZpVKHll88AADHyxyB%2Fsy1cfOmpeA%2B8svl7G4hC7l6pPz2lWtweGKo0uzgTQ2a4GyOULEw8gdAktSzmOagFBHL8woyJzRdv5qN1NvKaQZ5eMcGZuvkO%2BkP8wmpHq9Djmcv15MD4mGpwQCMCuBS%2F3rnLXLvueAxdX4mbVCspEDy934T2vaoDA7Xh5AQLK3NHctGv0Aw0cjQxAY6pgFT%2FC9QDMWBajfRr2SDLgYDbDqJoKD5Fqr7qk7EfMPUlEheCvxxSaWzUJXm2K84p%2BNhSXFOo5FTHXoIPxq33uSo8I8VcsMojqqMIZPRZq%2FVd%2BkpxHcgvyVCtDgmyVvkL6uzU33qYFxzbKmHSUZSRnX8bcm6EoxEm%2FVKwzfzt9hVXqTcQB%2FIs7HKMEq0NpFFUairjv3cQdjSdwefOO6viDQlypt%2FS%2FTU&X-Amz-Signature=6f50709d0c8216ab4c49b23e0e1494dc80ecc577e1c412f29a5c0cf0c6c13597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QOAHNKK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIGCJ5E%2B3oKp8aW3jFcB%2BJ%2F9W131I7DfvAFYzfUtIHEXXAiBZq5TAk8QRNQDr0YfqoM8Bwa%2FzGg7R8d%2BfjlEa6KqGNyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Brpaz3HDDohGsjYIKtwD4oBiYycaG4dFKye4Ql0Qtjm5mw2l3EF%2Bd%2BxrYiCWM1xAYPKyFMio6bAl1o%2BS1CvUokAyMnOIVhgFmBGh7jSsJeGq8fJYAEVxur3lyhlV5%2BlOZ21gJkNfld0HLzfZ%2F7FQbqPudtninNq78HHqcV8xnmq%2FZwsB5WqLWj9PfdJ6rgffP5ZqDDkKwikeqODO%2FpDKdllIF7xeoS2VC7zjlHnDSVSI5LuTgkIP%2FJYHgm5zcNmOm5CxNFzu8sgOhBOUyhNdp8DvRLvOIYEJquMUl%2B6VKxU7sYHGgLA8Fq55Yy%2FKS0faLW%2Bzy%2B%2BttXeKM9ewYk%2Bw88ZoeDoB58vcteRcrBXguYnkHOvkq0HuofUm7L%2F4LyHKSP7QDUdTv3q7naWVKN%2Bcp1GtDPz5JaAfqKAjTg5ITsNXo329miR2vq5KxzpeG4NQFqBxzwPavbPZpVKHll88AADHyxyB%2Fsy1cfOmpeA%2B8svl7G4hC7l6pPz2lWtweGKo0uzgTQ2a4GyOULEw8gdAktSzmOagFBHL8woyJzRdv5qN1NvKaQZ5eMcGZuvkO%2BkP8wmpHq9Djmcv15MD4mGpwQCMCuBS%2F3rnLXLvueAxdX4mbVCspEDy934T2vaoDA7Xh5AQLK3NHctGv0Aw0cjQxAY6pgFT%2FC9QDMWBajfRr2SDLgYDbDqJoKD5Fqr7qk7EfMPUlEheCvxxSaWzUJXm2K84p%2BNhSXFOo5FTHXoIPxq33uSo8I8VcsMojqqMIZPRZq%2FVd%2BkpxHcgvyVCtDgmyVvkL6uzU33qYFxzbKmHSUZSRnX8bcm6EoxEm%2FVKwzfzt9hVXqTcQB%2FIs7HKMEq0NpFFUairjv3cQdjSdwefOO6viDQlypt%2FS%2FTU&X-Amz-Signature=bc95e53ca3f0e9448d7c504b59ceabbb4c9aefaa5fa680cf10070c43e78dbe53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DKXWQIH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDGV%2FjcmngGVNpo1KJ0ORekzrFJ6nhH0lvZu%2BUIgKC%2BbwIhAM4SyTSFdLXxA%2B6Sa%2BmJJIKU%2FSdCjtpmaaGnWwGtM4DVKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwiyi9MseamNuuAXOcq3AM%2FYs9XSakvzp2n5A2qsfh9k0nieo60aFicpphwvRRrd6Q3QCbXynP%2FvlOHJhAkjfBQMrQ4rZ55FFZ%2Fx6TxFW9cmgAIcbgowjcFQlte6UvTqBrJN1A%2FpClX3AgqKjQRGNumwlIi0EBesfrmnnAsu9y5ZoJykCyUM43VfA2hgkXT5DJ%2BYqi1%2BgqbIaxdcwVRMWQe0Qj7mew6aAR1c0r%2FY9El%2FkszJ5o1gATIJQe42aWATS39FFk0Sl2FRpRCb7dQWXN%2FwrLPtoCqNQt2hqMupUAFGIcQ1X7Bq8w3JOz5dc9FtqrFtXq1hWovR14Mj%2FFr9B6%2FSPyHMrKkZ8MgBIFeCpfOQxqPlyylQHtFw4bVhp0GgmhZPAIrIL1rWEXCU6AZ7zYm9WgZXNmSrVVuFu2zS3tw41xjMrob2VzEnuUzOSV6X9jtJj1uvLVyNLZLg5V%2FzNBBXpOk0eGT4QyA5Q4JwQRKF8S%2FdmO98si4obHdaXZ9383oSdPlO44ZdGHAVg6AZGVsqVNCFU2H2f%2FxZwLWtW9L1GAMHc4%2FZJfC05JN%2BKQelXDpek66FiEK7W1XM6%2FTE119EVdX%2BeSR6VprumvLTO7XwNVvZQcyqGr8E8droZy8JxCZ%2FLkUr3MS54K2RTD6yNDEBjqkAf6OjswKDLiHenbxWjyzhT90j0tJwu8XBN%2BB6thhU8DDBSjDUUiDR7nrqSV3G1HC19i46DtAAZPLHaon4tT9O9%2FbG1w4jLWHzA0pAeNTqnmbhhrWe%2Fv6zjBzQOnSNB2HNvFVqXH3PYIseWf%2F72LbCPJfyP1OUaULIkElC7POK2tdq5QZAwEushqiURGCGBaGfE7loGEA0YjjJVXCt0OGHJZBqNAd&X-Amz-Signature=9f4fc1ce4ac11074467dd5fd3ec245d9bac31e2d0c491f40a138a020382e2d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JGQ27TC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDcnn4edqbEZWGsku1elvafQzfyqfEWMZNv3TvonmdFRgIgXCVa71iil92MID8YzGwy0Gzcg7JEcKCTnBG2XcfoM%2BQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKgRTSSOAJ4IegDlircAy1HMbEgvPJILxRylVbeGDbYe6ZcUy5rHolU%2B%2B9Mo22%2FrO1NH%2Bvt%2FMpdK0a%2BmPVgKIXlLLT%2BvbYCd9OkFJI7uC6l0bB4tRXwVhAGitPbhwz0tOV9PhdOuHuEbcbLnHW9ZgnNblfCfNTaPch9Og5zLJBw85nmVwY6UpCHua5xSdutTcnFMZELW5unmfPdaDjcOJs3Q7Rp49N%2FMblCw2ldPal6DlHiajG%2FEbYp%2FsromXpNJbTvYLMzehK%2Br31fbiEYo1WUKwprlCVfZMZdMOsahjrnxgbq8RbMxUWsPtrkPHEeahx2ILSYsTnVxNoeM1ji4NtHtgpTFvqVwOpK5bQkZwGPnSQyB4fpfa9j1Q8ulZxFaWKGCDB06iJcjuH%2FLlEhTbvIWQ0GOofeurDEyl0L0upZzCsBvCZxOmFllnjICPI%2FSnKC%2F78JFJQuFkENSX1luwrzXwWJ2xWUpDY%2F3dYlwdjGl9k0mzT1TzjZ5jLnLPwfs8OdLm3RZvyJWMHIQCKjZzwh5KtE%2FFC1Vropt2u2bMRhAfL3BpWJVcq667Oq25QUtkKPJNsG1jdHjnYKCvEKXby5W%2BDB%2FjURkr67XgyjymIOn5pk%2BAFR4GwrOB6OWlTYYD7%2BgSNzsF4h9qw2MM3I0MQGOqUBX%2Bq6IqDNDjOzk18PSkVLRsIgCEa0T1WxCYT49nWNc0GKw5bjEOv9y2k%2FrrD2M%2BVg5lP%2BYJsYLgg0k6uGW2VA%2BWXAYaazzNJcM%2FzoWbINc6jp7xTR1HjeaelhB1sUi5wziiBClqgxzgv6VrVUBJYcsKQHJE4jpvFyD8hb%2FDHYpLu6xyCIc2vHQKdxlYKqE5yybQwogB%2F0YyId%2FaiP9Bp7V7S8c23L&X-Amz-Signature=a3e3d7ee4d5d33612a8a638136068ca88677f1b96a440c0a441ca22ba18e6cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QOAHNKK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIGCJ5E%2B3oKp8aW3jFcB%2BJ%2F9W131I7DfvAFYzfUtIHEXXAiBZq5TAk8QRNQDr0YfqoM8Bwa%2FzGg7R8d%2BfjlEa6KqGNyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Brpaz3HDDohGsjYIKtwD4oBiYycaG4dFKye4Ql0Qtjm5mw2l3EF%2Bd%2BxrYiCWM1xAYPKyFMio6bAl1o%2BS1CvUokAyMnOIVhgFmBGh7jSsJeGq8fJYAEVxur3lyhlV5%2BlOZ21gJkNfld0HLzfZ%2F7FQbqPudtninNq78HHqcV8xnmq%2FZwsB5WqLWj9PfdJ6rgffP5ZqDDkKwikeqODO%2FpDKdllIF7xeoS2VC7zjlHnDSVSI5LuTgkIP%2FJYHgm5zcNmOm5CxNFzu8sgOhBOUyhNdp8DvRLvOIYEJquMUl%2B6VKxU7sYHGgLA8Fq55Yy%2FKS0faLW%2Bzy%2B%2BttXeKM9ewYk%2Bw88ZoeDoB58vcteRcrBXguYnkHOvkq0HuofUm7L%2F4LyHKSP7QDUdTv3q7naWVKN%2Bcp1GtDPz5JaAfqKAjTg5ITsNXo329miR2vq5KxzpeG4NQFqBxzwPavbPZpVKHll88AADHyxyB%2Fsy1cfOmpeA%2B8svl7G4hC7l6pPz2lWtweGKo0uzgTQ2a4GyOULEw8gdAktSzmOagFBHL8woyJzRdv5qN1NvKaQZ5eMcGZuvkO%2BkP8wmpHq9Djmcv15MD4mGpwQCMCuBS%2F3rnLXLvueAxdX4mbVCspEDy934T2vaoDA7Xh5AQLK3NHctGv0Aw0cjQxAY6pgFT%2FC9QDMWBajfRr2SDLgYDbDqJoKD5Fqr7qk7EfMPUlEheCvxxSaWzUJXm2K84p%2BNhSXFOo5FTHXoIPxq33uSo8I8VcsMojqqMIZPRZq%2FVd%2BkpxHcgvyVCtDgmyVvkL6uzU33qYFxzbKmHSUZSRnX8bcm6EoxEm%2FVKwzfzt9hVXqTcQB%2FIs7HKMEq0NpFFUairjv3cQdjSdwefOO6viDQlypt%2FS%2FTU&X-Amz-Signature=657c03e8fcde4cc2c2e110ea7642e5c6dfb50a3278696af21fa98e2fa3d9c44f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
