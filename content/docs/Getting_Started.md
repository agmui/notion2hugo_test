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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DW2CVP%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAIvR50O7EbBbNNoCs9RVrc3%2BtioGa79Gd8ppuxnY3TPAiAHJ9sk4%2FXpjKotTGQE%2B4hw3nZWFlTGh1lDY1qob8CCGir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMcdB0W1uOdOva4mjyKtwD1rbWSSfcyzVIeQ3GrKFLrCmxXepwN7%2BbeHmjpMzVGECJIeQrTq01xLAhoN9Px4WejplGYpujk5ZZoIHyVDvcRYCig6oxHnhcD05ezOzJMCHTS8kIDtRLJAQvDwxwVNOZbRjt7kg%2BURjLpDgj%2F0bdTM%2FruZQONi008SRR9u7EKtpsXgjZyYMqfkPsT4I%2FCkwWu6KI%2BRiN4CDDwyvJDBI843t%2ByZf5F84mghExCyMKkNllzBSk4vVHS4nj26kYNdmDXshsXFonsRgYqVwdfcK%2Bw2YMGK8NLCf6vWrQMk0vfh5bLXLDQaasfCNYbUqOMOweRfpK8mYiRiXd6ujwrSzC7qmhCxdym2VoL34i%2FgN0%2BxHXQANY1KPdkQPmSK7wf%2BcVNdOShX8OA6AMR4hB69%2BRmJcGr7Wq%2BBDLsXNnslU3tmqp68qif2fh6QHN2vXufLmrSF9xWYPMWkTesmaIfdY7yMV1PDwOa%2F9Lun%2BO%2Bc%2BlPSk5t4crnD60HR59xu4zgkSS7NCWgqGhHaFhtHCDIQD1nJij1YCVuDM7R4V21wsS1CWGFJtOlNHkLnWMNY%2BrSrdxQK5YV5h4AOOuB4FVpR24Con5FZ3b4N6spT7l%2Bi7h1MiatX6AJzMgfJyIU0IwnMSGwgY6pgF27d3lXEZJ632Up2iMURkzZI8BS5fI%2BafyuAYwkccEmFX0491rLMGxQq8Coxc7OpfyDEajgtbu4mxpfSF3IJYGRghMpcj1PjpsZxwHwkLunRJxUXqnQ%2BbS2bTdgLww%2B6VfXuOfOCn0mGm30joOZRMInAATaGOqnzTkEKv2CE5gpnbyGvIELEMRbTmGuyaih%2ByWe1XSoi2oen0QfOVhfxcxEkSt0230&X-Amz-Signature=1d184fe08e2a93980553c5395108d9c8311f0e642bd0f3d0f99cae4f95aaa4ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DW2CVP%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAIvR50O7EbBbNNoCs9RVrc3%2BtioGa79Gd8ppuxnY3TPAiAHJ9sk4%2FXpjKotTGQE%2B4hw3nZWFlTGh1lDY1qob8CCGir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMcdB0W1uOdOva4mjyKtwD1rbWSSfcyzVIeQ3GrKFLrCmxXepwN7%2BbeHmjpMzVGECJIeQrTq01xLAhoN9Px4WejplGYpujk5ZZoIHyVDvcRYCig6oxHnhcD05ezOzJMCHTS8kIDtRLJAQvDwxwVNOZbRjt7kg%2BURjLpDgj%2F0bdTM%2FruZQONi008SRR9u7EKtpsXgjZyYMqfkPsT4I%2FCkwWu6KI%2BRiN4CDDwyvJDBI843t%2ByZf5F84mghExCyMKkNllzBSk4vVHS4nj26kYNdmDXshsXFonsRgYqVwdfcK%2Bw2YMGK8NLCf6vWrQMk0vfh5bLXLDQaasfCNYbUqOMOweRfpK8mYiRiXd6ujwrSzC7qmhCxdym2VoL34i%2FgN0%2BxHXQANY1KPdkQPmSK7wf%2BcVNdOShX8OA6AMR4hB69%2BRmJcGr7Wq%2BBDLsXNnslU3tmqp68qif2fh6QHN2vXufLmrSF9xWYPMWkTesmaIfdY7yMV1PDwOa%2F9Lun%2BO%2Bc%2BlPSk5t4crnD60HR59xu4zgkSS7NCWgqGhHaFhtHCDIQD1nJij1YCVuDM7R4V21wsS1CWGFJtOlNHkLnWMNY%2BrSrdxQK5YV5h4AOOuB4FVpR24Con5FZ3b4N6spT7l%2Bi7h1MiatX6AJzMgfJyIU0IwnMSGwgY6pgF27d3lXEZJ632Up2iMURkzZI8BS5fI%2BafyuAYwkccEmFX0491rLMGxQq8Coxc7OpfyDEajgtbu4mxpfSF3IJYGRghMpcj1PjpsZxwHwkLunRJxUXqnQ%2BbS2bTdgLww%2B6VfXuOfOCn0mGm30joOZRMInAATaGOqnzTkEKv2CE5gpnbyGvIELEMRbTmGuyaih%2ByWe1XSoi2oen0QfOVhfxcxEkSt0230&X-Amz-Signature=273884d18baa09ff5c5c5c60cdafb52904316e1b77211285a0126bf249755a33&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DW2CVP%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAIvR50O7EbBbNNoCs9RVrc3%2BtioGa79Gd8ppuxnY3TPAiAHJ9sk4%2FXpjKotTGQE%2B4hw3nZWFlTGh1lDY1qob8CCGir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMcdB0W1uOdOva4mjyKtwD1rbWSSfcyzVIeQ3GrKFLrCmxXepwN7%2BbeHmjpMzVGECJIeQrTq01xLAhoN9Px4WejplGYpujk5ZZoIHyVDvcRYCig6oxHnhcD05ezOzJMCHTS8kIDtRLJAQvDwxwVNOZbRjt7kg%2BURjLpDgj%2F0bdTM%2FruZQONi008SRR9u7EKtpsXgjZyYMqfkPsT4I%2FCkwWu6KI%2BRiN4CDDwyvJDBI843t%2ByZf5F84mghExCyMKkNllzBSk4vVHS4nj26kYNdmDXshsXFonsRgYqVwdfcK%2Bw2YMGK8NLCf6vWrQMk0vfh5bLXLDQaasfCNYbUqOMOweRfpK8mYiRiXd6ujwrSzC7qmhCxdym2VoL34i%2FgN0%2BxHXQANY1KPdkQPmSK7wf%2BcVNdOShX8OA6AMR4hB69%2BRmJcGr7Wq%2BBDLsXNnslU3tmqp68qif2fh6QHN2vXufLmrSF9xWYPMWkTesmaIfdY7yMV1PDwOa%2F9Lun%2BO%2Bc%2BlPSk5t4crnD60HR59xu4zgkSS7NCWgqGhHaFhtHCDIQD1nJij1YCVuDM7R4V21wsS1CWGFJtOlNHkLnWMNY%2BrSrdxQK5YV5h4AOOuB4FVpR24Con5FZ3b4N6spT7l%2Bi7h1MiatX6AJzMgfJyIU0IwnMSGwgY6pgF27d3lXEZJ632Up2iMURkzZI8BS5fI%2BafyuAYwkccEmFX0491rLMGxQq8Coxc7OpfyDEajgtbu4mxpfSF3IJYGRghMpcj1PjpsZxwHwkLunRJxUXqnQ%2BbS2bTdgLww%2B6VfXuOfOCn0mGm30joOZRMInAATaGOqnzTkEKv2CE5gpnbyGvIELEMRbTmGuyaih%2ByWe1XSoi2oen0QfOVhfxcxEkSt0230&X-Amz-Signature=318852ab359623c68415402355f1557ccba9635d31079252dd49e0145934f961&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3GN7TQR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCzMn6P%2FxiUEL%2FHrzDplNSI%2FaZZaogXy9hMipImokrxOAIhAMgADLrrO06ZhqR1vA035j%2FerrFQxzHWgNEjBzAQ6P4RKv8DCEcQABoMNjM3NDIzMTgzODA1IgxK7Jjm2aEJ6yuGUI0q3AN%2FenruB4vsOZY3OJEYvDnw75X2JX9QrddSIdmn8hedMRMq8r7qaYFfZPcEfIQGlIcDjNefb73aJeUzX%2ByEGkCChShcHK%2FDy1tDHNbfvzLc22jl9kpC0kf58%2BWiBNeRk0ubOGKiOq%2BQEBZ9D6C1NUVHE588wMFBpDB8zu49Ud6RhkQX9IBzrskhkeZp83lXnuJj6g3bAPP4LFZO4kh6aKDvZkPqR7cO5slkdi6Iq8MHLrU1KqW1XrmLU494JbOCULCuZmVWw8XTj6Rj1bBAoeMLG2%2BBOopAmkXRkJidDNzCDviSyVqK8hXxfeK%2BtvBcDoNBeDRNxRr7KpOQ0ZkH%2FtWOC04uM0PhReAwJWMT72Bp2x9062Hu9TSgS7Z8VjQ4nEj948KNdUUx3bq12wT%2BBkAP1PV2iQw6psqmZB%2BE%2FsYo87TdlSOpScjF0vS%2FTGRms7kOnFyvitCvs5L7krGlb8kotcZyil0t7qOZeXS80H%2ByHl2%2BBVlZdi6pv1igIX1ePPtAQ01apHf0e%2BTzogiZbKw7cZtW3DmjodjetaZszbZ6I6Bh1wGbkNSzDbq1MFR9%2FMSETYkThPpmgSS6IXecfBtZgmtBwyQ3BKGVqhIDLsaaIO4V6iJ0uJtFMQtvnTCOxIbCBjqkAVlEdhhVVuF90wPAH01QIxvO96xc30lZV297ptYhV9w%2F4gLyclHdFaOPDHUFIzAdMfHoNoq3zIU3Mawib%2F8ACZA5Wz%2BYp%2BVhxO9JDSpqXHd%2B5KQUSC2ezL2I2AoRqQOYAJ2B4ds7jGtWHeP1oo9tMpvBQP%2F9yi%2FLWKen6lW0pxjucbaL%2B%2F8SHiT5ylHvJgwgB7iohzixJAaTS5Cxju9eg1nbWD5C&X-Amz-Signature=3717d282b15e16a85f4fb478a074ef0700024a93da405494e23b0e60ceef2cee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3GGGURA%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDNpOkNcEnYEzG5l%2BqOQTmbytfIZSgEF%2FKJg%2BUBLEnCzQIhAK%2FTCaUhZgUB1xrWrYIAPyhFVBemSQAyxKJIHnp%2BXnRIKv8DCEcQABoMNjM3NDIzMTgzODA1IgylMx3kJ0V2yZZLmdsq3AOTIJwEQcbaeTOreaTFd0fwl7Kf3lHisVbQAeFElRds%2BPyiFgO%2BSnCIZ7CkPK1kDbXIdQAgS75x2lBMeYIaHZAPD%2F0RmjJHqiEImQgek5iLvEiB7EFu%2FdPZ9woJxN3FFKJ8X3nMN5v3qAhRA2p8qn9v%2Bl7FtMWZiqbLsNKd0zx7KsZ6MSHszFS%2FxYLfME%2BEDi%2BDatERxfWW6MUsZel%2F8xCLMeWHi98oACuyy4PGkJfnlKSuKEZY0M0upwAjNYxQXu7SRKKuaZQcgC2o64qkd6byUq7uEmMEaq0vInKo6y6ANYt30cE2anQ%2Boh%2FZuv5H3ZCHhDzX7YQ1%2Bo2BJwcaAk4gONa4sjFl1GyrKBxsYaS3PTSPUvEZ%2B3lxV%2FUNrMI7Jh%2FLWyq4EzBd0rTn8jV1tQlvBw6uVlQIBEa3dEURN4q4YGzCnlXATY5Jn0n%2BmJTpIC25g22GnhPBot24weZ3%2FjThtJpv0EQmgL6DYx7D%2FsBknD1F83TfclEQutG3giMHG3z4%2FdQ2vbK%2F4BnTU3pCKUo8yueDLXZQsAukzVj38MZDnW5nb7jXHmzRE1rp8BIGquCSj2seyN3CO43wa5dC5o3%2FaU6pNgSy%2FByVqc45X6K2ej2pjjLfwiFeNiMKoTCexIbCBjqkAYepfgP5OYRXHtjQqk%2FDQmHZpH6OuvV2CXdQnq%2FYavfsQDpnN8PUoakUuhkhpg9noFR%2Bibxm16Gh62uEn0xBO0GhZRwfrRHKMoeqi8fjBU44CzONeM9ctobOI%2BwK944RD5zreaso8KKMciSzwmFOTvGXaZ6MNPJUNJOm16Ko8R7ujqDT%2BWK3dUil4bXv%2BApBsSQ%2BF9zLBM73X8vi8POZmazT52u9&X-Amz-Signature=91ae26c3f9cc6563ffe9b7bcc5183ee834806c95cdbb4c9aa2b6d5acac433e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DW2CVP%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAIvR50O7EbBbNNoCs9RVrc3%2BtioGa79Gd8ppuxnY3TPAiAHJ9sk4%2FXpjKotTGQE%2B4hw3nZWFlTGh1lDY1qob8CCGir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMcdB0W1uOdOva4mjyKtwD1rbWSSfcyzVIeQ3GrKFLrCmxXepwN7%2BbeHmjpMzVGECJIeQrTq01xLAhoN9Px4WejplGYpujk5ZZoIHyVDvcRYCig6oxHnhcD05ezOzJMCHTS8kIDtRLJAQvDwxwVNOZbRjt7kg%2BURjLpDgj%2F0bdTM%2FruZQONi008SRR9u7EKtpsXgjZyYMqfkPsT4I%2FCkwWu6KI%2BRiN4CDDwyvJDBI843t%2ByZf5F84mghExCyMKkNllzBSk4vVHS4nj26kYNdmDXshsXFonsRgYqVwdfcK%2Bw2YMGK8NLCf6vWrQMk0vfh5bLXLDQaasfCNYbUqOMOweRfpK8mYiRiXd6ujwrSzC7qmhCxdym2VoL34i%2FgN0%2BxHXQANY1KPdkQPmSK7wf%2BcVNdOShX8OA6AMR4hB69%2BRmJcGr7Wq%2BBDLsXNnslU3tmqp68qif2fh6QHN2vXufLmrSF9xWYPMWkTesmaIfdY7yMV1PDwOa%2F9Lun%2BO%2Bc%2BlPSk5t4crnD60HR59xu4zgkSS7NCWgqGhHaFhtHCDIQD1nJij1YCVuDM7R4V21wsS1CWGFJtOlNHkLnWMNY%2BrSrdxQK5YV5h4AOOuB4FVpR24Con5FZ3b4N6spT7l%2Bi7h1MiatX6AJzMgfJyIU0IwnMSGwgY6pgF27d3lXEZJ632Up2iMURkzZI8BS5fI%2BafyuAYwkccEmFX0491rLMGxQq8Coxc7OpfyDEajgtbu4mxpfSF3IJYGRghMpcj1PjpsZxwHwkLunRJxUXqnQ%2BbS2bTdgLww%2B6VfXuOfOCn0mGm30joOZRMInAATaGOqnzTkEKv2CE5gpnbyGvIELEMRbTmGuyaih%2ByWe1XSoi2oen0QfOVhfxcxEkSt0230&X-Amz-Signature=1cd38cfac21d0c3ac82eb281aec246dc4213e48bd56b7bca6b85660718bc9b70&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
