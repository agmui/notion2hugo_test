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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFITLQGH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIG0ti2%2B3zw0qCqm4TQN9RV1PjDk%2BX7Jz8vadQK8RPkYMAiEAjafF5lhzAFG5dAPA0Jx%2FXOHtSjyvactnTIarkuKkjYIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDo7n1C1qbZ4ZioMzircA6YWk%2F8C4Hh9DPxSUWOUQZBRg%2FFs94OlO8IoZI8YusHp8cCgdac7%2Fg7olE2JQ%2F6nHsQx0WZnevo449BcyXLSmEyTI4WeFJrx4xdiBRsBqxBoUZsendxMqsB9fMZY64g0Db%2FHVdHoPia4Fqy5VZeKxYTcx5lUvNDiyeh0X6EY0wbNqxeKBU2nNmk1K3v1HdPmEknqYI5ApiYSi3qXJR7raBKv6Wi%2F0%2BKgYKwa7h%2FbFVmYowvlGzse3NUMpSOow9NtJUyNCY5hP1%2B6%2BUdkUxquXbHLC44uAAtrpLW5ZdcB%2B7degSkycGzPKqclQkm5COMnJMDLRkPbbm3faDIJa0hsZodRmSXxKH3UzmJmO7oymEGy6jedMTmZXHHaJEoTnXW%2FA0pAp7J2esS2j8JqiAEs19iz%2B6UQmwWcCBFOh%2F2uAFhmbyDUtOnhy2YkJ2MpvRKSYcgx5P9KgpfvkssID9wOI1YgaGZbFLxtgECjPc03ZhNqgwS9GhvLc2BDCZG4zwCSE6xa2ZOR5eK28%2B2MVL4HZJ%2FTo226BcjF3kbGVOZb8lrHgzFAPdf19bf4gw30GfnJRL54gTj9mrEo4CEJP%2FLF8Lqoh2wL6JG%2B4xh5TNQlQsgxlvwQAyGagG4lH5F6MLrX9MEGOqUBxePQlw4xliNKvSOn%2BdJuuZ1Lb57pQDzY86LEkx3y%2FZYeGvmPn4rOfO0%2FcZz4uIfh7XAHB2eLsbhuofo2FtTZgycZfHS4bi9T6gR%2F%2FNGibX1uzfNts6VyGZUFkc8vjzTc16JB8cCSwRjWXwFU4RaHNhZZQrCsT7OWiysW25XBoekly2zgt6XP1v%2BzYy8678C%2BFuKZwg2abLq5ZsHNVZcP4NdOJMCq&X-Amz-Signature=3da19ca8b9208e1601a85b00d097a2d1b0dc9f9da04cb8b3c8dc78aaaf08388f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFITLQGH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIG0ti2%2B3zw0qCqm4TQN9RV1PjDk%2BX7Jz8vadQK8RPkYMAiEAjafF5lhzAFG5dAPA0Jx%2FXOHtSjyvactnTIarkuKkjYIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDo7n1C1qbZ4ZioMzircA6YWk%2F8C4Hh9DPxSUWOUQZBRg%2FFs94OlO8IoZI8YusHp8cCgdac7%2Fg7olE2JQ%2F6nHsQx0WZnevo449BcyXLSmEyTI4WeFJrx4xdiBRsBqxBoUZsendxMqsB9fMZY64g0Db%2FHVdHoPia4Fqy5VZeKxYTcx5lUvNDiyeh0X6EY0wbNqxeKBU2nNmk1K3v1HdPmEknqYI5ApiYSi3qXJR7raBKv6Wi%2F0%2BKgYKwa7h%2FbFVmYowvlGzse3NUMpSOow9NtJUyNCY5hP1%2B6%2BUdkUxquXbHLC44uAAtrpLW5ZdcB%2B7degSkycGzPKqclQkm5COMnJMDLRkPbbm3faDIJa0hsZodRmSXxKH3UzmJmO7oymEGy6jedMTmZXHHaJEoTnXW%2FA0pAp7J2esS2j8JqiAEs19iz%2B6UQmwWcCBFOh%2F2uAFhmbyDUtOnhy2YkJ2MpvRKSYcgx5P9KgpfvkssID9wOI1YgaGZbFLxtgECjPc03ZhNqgwS9GhvLc2BDCZG4zwCSE6xa2ZOR5eK28%2B2MVL4HZJ%2FTo226BcjF3kbGVOZb8lrHgzFAPdf19bf4gw30GfnJRL54gTj9mrEo4CEJP%2FLF8Lqoh2wL6JG%2B4xh5TNQlQsgxlvwQAyGagG4lH5F6MLrX9MEGOqUBxePQlw4xliNKvSOn%2BdJuuZ1Lb57pQDzY86LEkx3y%2FZYeGvmPn4rOfO0%2FcZz4uIfh7XAHB2eLsbhuofo2FtTZgycZfHS4bi9T6gR%2F%2FNGibX1uzfNts6VyGZUFkc8vjzTc16JB8cCSwRjWXwFU4RaHNhZZQrCsT7OWiysW25XBoekly2zgt6XP1v%2BzYy8678C%2BFuKZwg2abLq5ZsHNVZcP4NdOJMCq&X-Amz-Signature=4856cd201477c99101c838bbf84fe20222fb00fefba95b50ff89b3416d95e125&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFITLQGH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIG0ti2%2B3zw0qCqm4TQN9RV1PjDk%2BX7Jz8vadQK8RPkYMAiEAjafF5lhzAFG5dAPA0Jx%2FXOHtSjyvactnTIarkuKkjYIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDo7n1C1qbZ4ZioMzircA6YWk%2F8C4Hh9DPxSUWOUQZBRg%2FFs94OlO8IoZI8YusHp8cCgdac7%2Fg7olE2JQ%2F6nHsQx0WZnevo449BcyXLSmEyTI4WeFJrx4xdiBRsBqxBoUZsendxMqsB9fMZY64g0Db%2FHVdHoPia4Fqy5VZeKxYTcx5lUvNDiyeh0X6EY0wbNqxeKBU2nNmk1K3v1HdPmEknqYI5ApiYSi3qXJR7raBKv6Wi%2F0%2BKgYKwa7h%2FbFVmYowvlGzse3NUMpSOow9NtJUyNCY5hP1%2B6%2BUdkUxquXbHLC44uAAtrpLW5ZdcB%2B7degSkycGzPKqclQkm5COMnJMDLRkPbbm3faDIJa0hsZodRmSXxKH3UzmJmO7oymEGy6jedMTmZXHHaJEoTnXW%2FA0pAp7J2esS2j8JqiAEs19iz%2B6UQmwWcCBFOh%2F2uAFhmbyDUtOnhy2YkJ2MpvRKSYcgx5P9KgpfvkssID9wOI1YgaGZbFLxtgECjPc03ZhNqgwS9GhvLc2BDCZG4zwCSE6xa2ZOR5eK28%2B2MVL4HZJ%2FTo226BcjF3kbGVOZb8lrHgzFAPdf19bf4gw30GfnJRL54gTj9mrEo4CEJP%2FLF8Lqoh2wL6JG%2B4xh5TNQlQsgxlvwQAyGagG4lH5F6MLrX9MEGOqUBxePQlw4xliNKvSOn%2BdJuuZ1Lb57pQDzY86LEkx3y%2FZYeGvmPn4rOfO0%2FcZz4uIfh7XAHB2eLsbhuofo2FtTZgycZfHS4bi9T6gR%2F%2FNGibX1uzfNts6VyGZUFkc8vjzTc16JB8cCSwRjWXwFU4RaHNhZZQrCsT7OWiysW25XBoekly2zgt6XP1v%2BzYy8678C%2BFuKZwg2abLq5ZsHNVZcP4NdOJMCq&X-Amz-Signature=d006a761ff3afc5c7fd168fe92fdc067be68ef8808277d61c242f21d9f3d08dd&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D222AY7%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDl2mP%2BjiKy%2FXRbxTUIeymEgbVxBQZ1at5VQPTf3CtEsgIgP4NCEmWl4oZcVE4TrUoECkEA102z%2F2tD%2B%2Boll2kWVvwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbrEBQv8z%2FW1Ge7VyrcA1deyg8QwiIbEq4rqwG6%2BVkChrFGRA2s9v3J0U8CSP1VvqFYD6vmhKCKncKNyGRzvpBGIxTa47L%2BMVeqtkmU85ACZrLOxpEttlZMdGZKHVXmu3BLNbdrP782Fink8jFjRQ7xLMDiRttGdaen%2B7uIv1h8OR1nISwBBzEZjojsAiNUBJAhWpUg2%2BFDSGLbfD9nDxf%2BM%2FFgID4plnDmFq6uj64DpUOPfJ0Eo06ajsK1%2BmbpvLy1CdBLhkqtZyocEYwd3e6cY4eaALbXoy5AAul2plj3mSMOOMgF48tfJiq%2BHsrwOjvLVXCrI5rCe6DPW%2BK3CofOE5o3%2BVQQn0EISz7e5%2Bh7jcPCAx1G2WcHLURaIakGoBXLjZsvCWXjTaL1Si%2FkCTRbS9zOtmMmLfU3TzvOUqOYbtlQ3a%2BvPB5KprjW4g1P3y0jIVsVKSAnTASZLU79kElzkSTIlTlDrPl6ZZRuCHqLt8NL8oQNMLPB7rrCsKbKwZLZpN%2BemM7ns25%2FEmIqkGJIF%2BGbNhy7CXRFxYFOxAfIIESyVW8KUpbWEoMkYR1fbJy3qi1w12%2Fb7yL6WGX2RL2GJ4gkB9IaPjVnM96qQq6JTBDKz8XWKO4HgGN1VCeAqt7%2FWzCAaQFW31jmMPfX9MEGOqUBnsBdWdZuMpkbO5wtqK2hxz0AljnTnATfbxwZg9bHa2IY1zJ9hxtoatIGNs417sPyG4NZ1k1ZVg6xac%2FcG4BLoMOPE6bRbrvPqbfnhK%2BQV%2FNcwCPDd2e%2FHIgxB854HB1dYolP35dFaFBgnSCY3PWxfmoj7vW79EdRsAsQktWEUT6uAJsAfMUSgSGJXEcMFF2BUrK28tsxGJHvCUlbIhtAZGB7QMtk&X-Amz-Signature=57117b642ffdea80f2810cc9fd54ae1750d8d90c7f596a496baea7883ec3d961&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWTZG5A%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCICW4w3fXB4mYUQv%2BLjWyd0rZBZJdtUsEb1h21gE3LHUFAiEA8lc8XLn6sOnM%2BFB0e1rsC8v9MEGvfqMzKRrGlaxE0SwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBstrm0RHTlK9zugCrcA9K7dYSaraxGx56FTK0wLFkzq7VoOF4ry2lL3aJtJUdUMzmpIsif3bkLzyvO0iNObFC%2FWzoavpyqzKx8e%2FeprwfLFWimC%2Fr9qKiUlvWS9v2RbOfCd963bqMcgDGK3mRD0YgO4K1tqt2qvaQViTwVPiekAvVkk4wAdkADSfUc%2BvkKdoTAl0KnjjnAWVqZWfYACEfkfX2826zkbjqGHGkV5UWTKE2UjgWRaDZJDSYxYFGip4LD430qcY8HheUWQ8q5601o%2FTqFAtiqNzvESY4Yi1Uv5vEdrjVMeJD2MB4hVCsk4sY7zTkKXGpgG%2Fh5f%2FJ2Vs7aW10lFmfUjPJidxwqoBigyKWDPw%2F7XUlonTKpXAhq0kVvyktaHzN543vTUFTRWy57KzbozS7d6%2FC1i0AjGE1pdNvkrcXmXa%2B0a8wXu3vOFUj0Q3jfrbLT6VYJEUkH7gF2BITiuoGpj%2BXk1x9qaIsJ67uUQxRLrJUOMTluk8ddxegibS1qPO%2FCTk5K5nXmz1Vh8st55FJqkUhSw8eHlsv5SXaOfwiTx7K4Z%2BTq0a8%2BZ4tVwJNC7Q9vyUW804Fioni5hGJlz0afkkFp1uiikNU1XNEfZZ8c4a0U1EaqSHIR%2FMM8vKj6rtYg8SKjMPfX9MEGOqUBRRBoGKDnhMKoVoh877F2%2B%2FyM5PcAWG2hMZp%2FHA31BFyAx3LTBHwPQDDL1S1OYnCq7WuKkIZeEcal9wnlwHmoiScxVER%2Fv4Mb1qvnP3pW52o8ATyT3aUpg6ca%2BVOSChswWH35C3k%2BZiSTUql5XhJ6ekSQGmXX4bW64cSg3neMKxJV2pVqhNTrJ%2BZo7YX%2BkdtQtr1y3RwjMwQ0QKtvy7x4hlLAOKLY&X-Amz-Signature=6ca81aca752c2866bbc1d13e56c385ce61254ee545e59dc3f48986266935d7a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFITLQGH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIG0ti2%2B3zw0qCqm4TQN9RV1PjDk%2BX7Jz8vadQK8RPkYMAiEAjafF5lhzAFG5dAPA0Jx%2FXOHtSjyvactnTIarkuKkjYIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDo7n1C1qbZ4ZioMzircA6YWk%2F8C4Hh9DPxSUWOUQZBRg%2FFs94OlO8IoZI8YusHp8cCgdac7%2Fg7olE2JQ%2F6nHsQx0WZnevo449BcyXLSmEyTI4WeFJrx4xdiBRsBqxBoUZsendxMqsB9fMZY64g0Db%2FHVdHoPia4Fqy5VZeKxYTcx5lUvNDiyeh0X6EY0wbNqxeKBU2nNmk1K3v1HdPmEknqYI5ApiYSi3qXJR7raBKv6Wi%2F0%2BKgYKwa7h%2FbFVmYowvlGzse3NUMpSOow9NtJUyNCY5hP1%2B6%2BUdkUxquXbHLC44uAAtrpLW5ZdcB%2B7degSkycGzPKqclQkm5COMnJMDLRkPbbm3faDIJa0hsZodRmSXxKH3UzmJmO7oymEGy6jedMTmZXHHaJEoTnXW%2FA0pAp7J2esS2j8JqiAEs19iz%2B6UQmwWcCBFOh%2F2uAFhmbyDUtOnhy2YkJ2MpvRKSYcgx5P9KgpfvkssID9wOI1YgaGZbFLxtgECjPc03ZhNqgwS9GhvLc2BDCZG4zwCSE6xa2ZOR5eK28%2B2MVL4HZJ%2FTo226BcjF3kbGVOZb8lrHgzFAPdf19bf4gw30GfnJRL54gTj9mrEo4CEJP%2FLF8Lqoh2wL6JG%2B4xh5TNQlQsgxlvwQAyGagG4lH5F6MLrX9MEGOqUBxePQlw4xliNKvSOn%2BdJuuZ1Lb57pQDzY86LEkx3y%2FZYeGvmPn4rOfO0%2FcZz4uIfh7XAHB2eLsbhuofo2FtTZgycZfHS4bi9T6gR%2F%2FNGibX1uzfNts6VyGZUFkc8vjzTc16JB8cCSwRjWXwFU4RaHNhZZQrCsT7OWiysW25XBoekly2zgt6XP1v%2BzYy8678C%2BFuKZwg2abLq5ZsHNVZcP4NdOJMCq&X-Amz-Signature=6af707cdcd4b1fd07a63c30214523ddeaa376c6f20389496060be5b543cb0fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
