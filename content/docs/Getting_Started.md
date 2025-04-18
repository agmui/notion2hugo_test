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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHD6B5X%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNl%2FOmIi4tne8ny%2F0h1e%2Bz6e8Jq7an3AIt9IX2qo4RjAIhAI7UjSgFlV%2F0AW23T%2BaZvRGzexB0UXE7Mu6betvM3OBiKv8DCHkQABoMNjM3NDIzMTgzODA1IgynZ0hhP1I%2BhGEafLwq3AMU35KGDdxjoUnVTA8XQM7Elm%2BlapyT2artmhGTBZ0sJW83y8artNKKeksOJyLLuS1BAWcL0SX3Zq2VtLSFFGmywLpnkOlly7hrXZhgjpKCp6OcwsA9I3G1kwszXM13ZTuDrmOhllDjP9NziDet5tAmXqaiBGZYNdT85T2C6Lq3G8kHOD%2FiaSugF5EAJgyvVsWuDCy1QL6zBGkGQAeUViSWLngxD8zxC%2FXDp7AIYsmqP0xIu0PzUWnR6Gae9%2Bsp4iGxa%2BcUnqu4UoB5r5pwHtfDq4phJb01kJ9nyR1iwekG%2Btzipa05%2B0RL6ePcJ9XvSnTwqKCfe5l9s4FGXVP%2BHKKOfnRlIgsz3sAfAZtfgbMqvIQe5tgqXrO9Vg7Bc4ZQ%2BbgsdoAtEkmM6qDzt%2FfIOvmI1YJJ%2FpzPermIGZpAU88%2BTItc4QXXzu2FKty6%2FIyKMwSCZE0iVSgVvuwQfCp53x5lT4ZzKQ2I8N9n0cwF81jSCskB1qAgkP3STSeNhX3FOJZidfjFjA0dubvFqhPdqp6e9V0ZtO01TIc7zU9nFXou3JPhlBCohvmOnA3c5cwWpsbBlaJcjxk42deDD1MoXGqfbllONdH5lGpa6nZw3tP6JQArxO9LGCG0%2BksCeDC34InABjqkAQ%2F6useNjmvRz3cLtLzf63J3vOgUIbc6oJlZIAcb4pF1bkBePRFw%2FuuIYWyo0Gq96lvneT4n3HLqo60epWVNsQ%2FmCvkioBPzuJavLlNb44maRbjNge91B1oca1mRzkYGHttGqzPZSyKCWbGJF%2B6blRgCJHK6zj0hpNMf0q9nTp%2BUARjcLcgv5hzx7T8cG%2BZ5v6Szwgy18%2F3U%2FYOZk8bEE%2B30ds50&X-Amz-Signature=8d1bb7b4d94f991a49e6a02b27b7ed39bdf36f7060d738973121c2fcd6e42ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHD6B5X%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNl%2FOmIi4tne8ny%2F0h1e%2Bz6e8Jq7an3AIt9IX2qo4RjAIhAI7UjSgFlV%2F0AW23T%2BaZvRGzexB0UXE7Mu6betvM3OBiKv8DCHkQABoMNjM3NDIzMTgzODA1IgynZ0hhP1I%2BhGEafLwq3AMU35KGDdxjoUnVTA8XQM7Elm%2BlapyT2artmhGTBZ0sJW83y8artNKKeksOJyLLuS1BAWcL0SX3Zq2VtLSFFGmywLpnkOlly7hrXZhgjpKCp6OcwsA9I3G1kwszXM13ZTuDrmOhllDjP9NziDet5tAmXqaiBGZYNdT85T2C6Lq3G8kHOD%2FiaSugF5EAJgyvVsWuDCy1QL6zBGkGQAeUViSWLngxD8zxC%2FXDp7AIYsmqP0xIu0PzUWnR6Gae9%2Bsp4iGxa%2BcUnqu4UoB5r5pwHtfDq4phJb01kJ9nyR1iwekG%2Btzipa05%2B0RL6ePcJ9XvSnTwqKCfe5l9s4FGXVP%2BHKKOfnRlIgsz3sAfAZtfgbMqvIQe5tgqXrO9Vg7Bc4ZQ%2BbgsdoAtEkmM6qDzt%2FfIOvmI1YJJ%2FpzPermIGZpAU88%2BTItc4QXXzu2FKty6%2FIyKMwSCZE0iVSgVvuwQfCp53x5lT4ZzKQ2I8N9n0cwF81jSCskB1qAgkP3STSeNhX3FOJZidfjFjA0dubvFqhPdqp6e9V0ZtO01TIc7zU9nFXou3JPhlBCohvmOnA3c5cwWpsbBlaJcjxk42deDD1MoXGqfbllONdH5lGpa6nZw3tP6JQArxO9LGCG0%2BksCeDC34InABjqkAQ%2F6useNjmvRz3cLtLzf63J3vOgUIbc6oJlZIAcb4pF1bkBePRFw%2FuuIYWyo0Gq96lvneT4n3HLqo60epWVNsQ%2FmCvkioBPzuJavLlNb44maRbjNge91B1oca1mRzkYGHttGqzPZSyKCWbGJF%2B6blRgCJHK6zj0hpNMf0q9nTp%2BUARjcLcgv5hzx7T8cG%2BZ5v6Szwgy18%2F3U%2FYOZk8bEE%2B30ds50&X-Amz-Signature=1c43ae8b9dce22bd260bec6bdb8005ae422b0ec834179a00a39cb7d100e72d94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJWOV5I%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp0qlM%2Bc2j9cpaGvNHkFLBv6690EeWkiIoJLJS5E4FxAiBKokx0xekziLQRdxCrFbfX%2FmGn1EcSl8rMRWPgBO0Tryr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMeKPU02zKOG9KiLnUKtwDSvygVOabY94VnPQpk5m%2BuqZezIBesGnZpo%2BURag5XxdhjsNr3fBsKObVYMiSoApdLzsuw%2FGumFXxr5P782n6naMlBKWbZICq8y63vxY8GB506Oo8EGhkGmIKAZloACYSVXkk3nkS2lK0566GpGn4DRBlLGAfgKNlqqM4XzJOwmNSEjP1Y9F6tI1%2FRn4EaN3FPVVClpYGjJZd%2FZv6XyiA5AAr%2BmojXEh%2Frl89JI6lxsKzakPAZv%2FJc9XgnwJI4VOypoOB9Sxl8CPKbyH3Bs9K56QHgwlKRUqHtCf8%2Fkj7PIA%2Fr%2FdzHc3sNKxa%2FxpxunnabYm4FpSA8mprYoPDM56zM%2BMTAyDQGX0AD%2BCbHKnTjgGIdDxlM8I3XWT1BizdFoXb1gna56yEAe0Xrk1xHJHLMMpGT7%2F7Dn95lPXOQfQ7EEldXZ2v9BheATM%2BnThGcnAhd7dzIJd9dprWbTms4dDrC2YnMR2BXyB%2B1OF3SawfZsj8qsxKEERsMJe0X9zN9jygHA3JJ6B%2F%2FVJuSdPrVn0%2F884%2BQ0uwbQXKqu55lCFih0qQNX8rv4fGH5tDkPT5zgJByxd35FPQ5qsb717VbUolq%2B96NEQep9bfseIrHaIkc%2B6gecrVyzrXO8rEICkwz96JwAY6pgGyTEOgYd%2FTULU3cFlBmGTroJ5KE0tBBSO%2F7gNYfi0k6wzstYMI4ftS7hXm7jtA5Isf7F8hFy42d1%2BWGXbmEgPH8opF2B9WPRyHNYr9e6rLBXR6f4RAaUpGzawlnTS0W2q%2FSjieHFblJDUBZXbXSEpY8NtcdeP9sMt2443ppVoWwObmBgHY8FcThFlPemBYLX%2Flf9vSno5sECRBQW9YklFGTf69uHxM&X-Amz-Signature=e8b3d9aa4e263e287af520c427f65ecab0f7487f024fed9fee5e5a1f5d47a48f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBQ4P4WF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdTwZ3y7S5oCfCf3GTU2bf9rTk3ClxV%2BJymtKhmFusdAiAixDt%2BtHuhxQGGGliP8RmYB5Uaa%2B24WmjqrhYw4QwTYyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMJMwcGh6XcLrVnt7vKtwDTZ%2FSF3ggKBBgAZPxKLGViBF%2BvtZxcg5lVyDyszihAA7el41qIBL1i5oWZLirvYNG4kDT3uEKjqEulvC4cwtMtr%2FV4o1k8zt6GFFdaZ3mHQiXXlydLJSQM029E3INm%2FcJVtLtF8PUgsVOBc9xLgIKNH8emywvJmwI1IMvtxwOAnc0rEr3vkY%2BLmnQyv04q09dVZztvRDSSwkDOzCpLYJnUibyiK3wa7Yhv%2Bo1kfZzjPlMM5nYLvZYdRz1WY9p6fkxBpSKY9yI%2FplJVq3EuMiBnc0ZVubahWQJbwL%2B4tAbTt0teuWE%2BZkPsiuYZNiY5QmiFvk%2F3dlfeF28n0mGkA5fQJ%2BTYJ%2FP2EC%2F269En8GGLEgdiiseb4GPP3bKMbFx%2BduKumpAFb3TnILzJZnxTK0hcZpBkdA2Kln8fIt0%2B%2BP5xJzhk5GeMeIwIixTv%2F8QN%2FdFtIyxpsKP599V9QB%2FA7ilsIG5M6BwZd9bvBFUq764ZlsFmDjCD%2BywdudUBomHJWKaOpYNiHp%2FLw3XD0hzCdQJwIcRTjBf%2FUL4bl9mCVsPu%2BKBcU56Q2kITa2TgcCgbMfjGPuQuCMQuQbuOFCl%2BYiWNVCi4%2FgXr1wnICovdS3yk4MogyiyaT6HOtjgQxAwod%2BJwAY6pgG%2BrtKsysCoiWBshuIXbrIFgnK0nruWqgc86nDiZWx0Haym64I6kgvINKjFZF98STb0CDNTUH2klSs%2FoNwRp5fe4nHa%2FQt4rNAXEld8HOpmcMg%2BnCkpaliWUWxWroFyiQNvULKrxZklxipGwuJDHlp1v7VNZ4jTI5848%2Bov9F1bEivJj0dgZKrsgyjgAdJqdYCAfbT9dzw8z%2FyySddW8wo5qOD%2BV3je&X-Amz-Signature=83be6028d954ddc4b8c0bddf63bf7b96619b6b634acf3b054c6e7a7ad79f74f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IHD6B5X%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNl%2FOmIi4tne8ny%2F0h1e%2Bz6e8Jq7an3AIt9IX2qo4RjAIhAI7UjSgFlV%2F0AW23T%2BaZvRGzexB0UXE7Mu6betvM3OBiKv8DCHkQABoMNjM3NDIzMTgzODA1IgynZ0hhP1I%2BhGEafLwq3AMU35KGDdxjoUnVTA8XQM7Elm%2BlapyT2artmhGTBZ0sJW83y8artNKKeksOJyLLuS1BAWcL0SX3Zq2VtLSFFGmywLpnkOlly7hrXZhgjpKCp6OcwsA9I3G1kwszXM13ZTuDrmOhllDjP9NziDet5tAmXqaiBGZYNdT85T2C6Lq3G8kHOD%2FiaSugF5EAJgyvVsWuDCy1QL6zBGkGQAeUViSWLngxD8zxC%2FXDp7AIYsmqP0xIu0PzUWnR6Gae9%2Bsp4iGxa%2BcUnqu4UoB5r5pwHtfDq4phJb01kJ9nyR1iwekG%2Btzipa05%2B0RL6ePcJ9XvSnTwqKCfe5l9s4FGXVP%2BHKKOfnRlIgsz3sAfAZtfgbMqvIQe5tgqXrO9Vg7Bc4ZQ%2BbgsdoAtEkmM6qDzt%2FfIOvmI1YJJ%2FpzPermIGZpAU88%2BTItc4QXXzu2FKty6%2FIyKMwSCZE0iVSgVvuwQfCp53x5lT4ZzKQ2I8N9n0cwF81jSCskB1qAgkP3STSeNhX3FOJZidfjFjA0dubvFqhPdqp6e9V0ZtO01TIc7zU9nFXou3JPhlBCohvmOnA3c5cwWpsbBlaJcjxk42deDD1MoXGqfbllONdH5lGpa6nZw3tP6JQArxO9LGCG0%2BksCeDC34InABjqkAQ%2F6useNjmvRz3cLtLzf63J3vOgUIbc6oJlZIAcb4pF1bkBePRFw%2FuuIYWyo0Gq96lvneT4n3HLqo60epWVNsQ%2FmCvkioBPzuJavLlNb44maRbjNge91B1oca1mRzkYGHttGqzPZSyKCWbGJF%2B6blRgCJHK6zj0hpNMf0q9nTp%2BUARjcLcgv5hzx7T8cG%2BZ5v6Szwgy18%2F3U%2FYOZk8bEE%2B30ds50&X-Amz-Signature=2071f7fe953946760470919f93f41a26f08e3e8b293c2ce63584ed886ab18e42&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
