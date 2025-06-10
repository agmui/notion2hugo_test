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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4SDL6ZL%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDyv7JM1tERVbsbojHNI9Tp6M3WzrzoZFPT%2F2i0%2FE%2BgAIhAJwTupM752hokIlzXGyPhzvPEE7TjVTG8Paqxj%2Bb5xsTKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC9svQJkLX0GtRJMMq3AN35XX0oqzK0OTdW65WJjxEpSxdlkrOZd4JnkNK8tfQrmG1TiV4wK8VtaC687TIcHLB6a%2B4Bsohbt9NofmulTIY1ndhQ2Z7W8igwPTwP%2Fwjhdl9qtnb1INfBmoS0a%2FXlrvqq5PleQ3KF%2FyJVYXenzSLRtXQYzO3M%2FxzYyP6aDI3nw2P6xyboq3VeYFIVvLEGRUZsrcg%2FBL5fPVbyFnsWtgPG2boYPYHu4k%2F0Ng3XQktWSGIgKzRvz0FI5tMsrEgIr1KH%2F78d6nbqEGrt4wFo986TRe5i8LB5OT4Bfk5vlZQMUPZwaoY0dvFLJumMwdPL5BDQ2oKCTJyE%2F0%2FlHU4BGObG034r6vpniSa4WInZ9M40GZ7zA26vq3CjAUHhsLnSI80nT097Qo05lz4AwFHtOtbjTFs6TLOkJFdpD5miLJrh%2BHAZQy2diIBZ%2FCfrDSppKr2sA3SjFk84etkmWC%2FZdwWS75JqYErsLtYKczZZAMtpleNzmiqagJFLr8GFUWdfiZIaEbHNNMG6N1VqirrnL%2FITsqN1yTNUp%2F1seNloggsVnuEGu3ZsrmdcGDBY0T5KxWCMGrcNjK60Ypnwvpe3VGM2cAjYpdQi8qnvaMJ%2FcWmi968sGgDwOIHdGLv6zDUiKLCBjqkAZlgpLCJBViZ9QxESwAJKnBMlHUcJVAyZyqDk%2FJ06I0Op10ZvqAsch%2Bowc5Y7n7FztZmMcByNYXNOtX5rZ%2BhZgstUmYPoUdg%2BaYmRIXYSJoYSzKuGZiqwMRoIf0o20j3QfO3FsuhZEuQomXvE2o0QtrhU3X8jZ2rHpeh5f6EichSFjkhRJZEG4rWOcvHdKAecnQwMTtbk98n6vDbEgo%2FKhlI2kUd&X-Amz-Signature=bb22fba16d2798a99aa989a1ff88e1e6b588409a4d3296cf3a639eeedb15f0ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4SDL6ZL%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDyv7JM1tERVbsbojHNI9Tp6M3WzrzoZFPT%2F2i0%2FE%2BgAIhAJwTupM752hokIlzXGyPhzvPEE7TjVTG8Paqxj%2Bb5xsTKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC9svQJkLX0GtRJMMq3AN35XX0oqzK0OTdW65WJjxEpSxdlkrOZd4JnkNK8tfQrmG1TiV4wK8VtaC687TIcHLB6a%2B4Bsohbt9NofmulTIY1ndhQ2Z7W8igwPTwP%2Fwjhdl9qtnb1INfBmoS0a%2FXlrvqq5PleQ3KF%2FyJVYXenzSLRtXQYzO3M%2FxzYyP6aDI3nw2P6xyboq3VeYFIVvLEGRUZsrcg%2FBL5fPVbyFnsWtgPG2boYPYHu4k%2F0Ng3XQktWSGIgKzRvz0FI5tMsrEgIr1KH%2F78d6nbqEGrt4wFo986TRe5i8LB5OT4Bfk5vlZQMUPZwaoY0dvFLJumMwdPL5BDQ2oKCTJyE%2F0%2FlHU4BGObG034r6vpniSa4WInZ9M40GZ7zA26vq3CjAUHhsLnSI80nT097Qo05lz4AwFHtOtbjTFs6TLOkJFdpD5miLJrh%2BHAZQy2diIBZ%2FCfrDSppKr2sA3SjFk84etkmWC%2FZdwWS75JqYErsLtYKczZZAMtpleNzmiqagJFLr8GFUWdfiZIaEbHNNMG6N1VqirrnL%2FITsqN1yTNUp%2F1seNloggsVnuEGu3ZsrmdcGDBY0T5KxWCMGrcNjK60Ypnwvpe3VGM2cAjYpdQi8qnvaMJ%2FcWmi968sGgDwOIHdGLv6zDUiKLCBjqkAZlgpLCJBViZ9QxESwAJKnBMlHUcJVAyZyqDk%2FJ06I0Op10ZvqAsch%2Bowc5Y7n7FztZmMcByNYXNOtX5rZ%2BhZgstUmYPoUdg%2BaYmRIXYSJoYSzKuGZiqwMRoIf0o20j3QfO3FsuhZEuQomXvE2o0QtrhU3X8jZ2rHpeh5f6EichSFjkhRJZEG4rWOcvHdKAecnQwMTtbk98n6vDbEgo%2FKhlI2kUd&X-Amz-Signature=e6b9e9f15da28b883a0f3c0d49b746a67fac31264e375b8c577d5b623b9f4d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4SDL6ZL%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDyv7JM1tERVbsbojHNI9Tp6M3WzrzoZFPT%2F2i0%2FE%2BgAIhAJwTupM752hokIlzXGyPhzvPEE7TjVTG8Paqxj%2Bb5xsTKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC9svQJkLX0GtRJMMq3AN35XX0oqzK0OTdW65WJjxEpSxdlkrOZd4JnkNK8tfQrmG1TiV4wK8VtaC687TIcHLB6a%2B4Bsohbt9NofmulTIY1ndhQ2Z7W8igwPTwP%2Fwjhdl9qtnb1INfBmoS0a%2FXlrvqq5PleQ3KF%2FyJVYXenzSLRtXQYzO3M%2FxzYyP6aDI3nw2P6xyboq3VeYFIVvLEGRUZsrcg%2FBL5fPVbyFnsWtgPG2boYPYHu4k%2F0Ng3XQktWSGIgKzRvz0FI5tMsrEgIr1KH%2F78d6nbqEGrt4wFo986TRe5i8LB5OT4Bfk5vlZQMUPZwaoY0dvFLJumMwdPL5BDQ2oKCTJyE%2F0%2FlHU4BGObG034r6vpniSa4WInZ9M40GZ7zA26vq3CjAUHhsLnSI80nT097Qo05lz4AwFHtOtbjTFs6TLOkJFdpD5miLJrh%2BHAZQy2diIBZ%2FCfrDSppKr2sA3SjFk84etkmWC%2FZdwWS75JqYErsLtYKczZZAMtpleNzmiqagJFLr8GFUWdfiZIaEbHNNMG6N1VqirrnL%2FITsqN1yTNUp%2F1seNloggsVnuEGu3ZsrmdcGDBY0T5KxWCMGrcNjK60Ypnwvpe3VGM2cAjYpdQi8qnvaMJ%2FcWmi968sGgDwOIHdGLv6zDUiKLCBjqkAZlgpLCJBViZ9QxESwAJKnBMlHUcJVAyZyqDk%2FJ06I0Op10ZvqAsch%2Bowc5Y7n7FztZmMcByNYXNOtX5rZ%2BhZgstUmYPoUdg%2BaYmRIXYSJoYSzKuGZiqwMRoIf0o20j3QfO3FsuhZEuQomXvE2o0QtrhU3X8jZ2rHpeh5f6EichSFjkhRJZEG4rWOcvHdKAecnQwMTtbk98n6vDbEgo%2FKhlI2kUd&X-Amz-Signature=82a23487edd4d5e82845b5e65baf6bf1be324b7f0a3247bce9e10b75d111f712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MCYLRBH%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCHjYU3tJcKFX02RNgNz63exnzA0t3OlThyQ5XurCB2gIhAO3nBoBdjF6UtQtitE%2B0QQBwireeDdqdncg6ca8vLr5kKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySawjdfPEiK1knxA8q3ANab5wD1tSlfHPlLoWXHqq640dJFUD0aciEa5m3inMznpZotFTXHSqeqljxQnPyJeJN9FhDygeCiIsNWORKa3mRfy3Q8VAM8RpHmanVC26F9reHQKqULpWQn5la2T1IX%2FfuZ7aW%2FfyYc2Ywj8SNMMi5FcFJhPFzE%2FhtboZdL1Kk753qyxdwVBvq207G9cL7CLYzr8pS%2BdpHg8PRP1VmiRQS97cVOgpbIq409R3098aUX%2FAcAG%2Be0y68sOrJEICvP8ijBvl5XBRDw2K2EsImBRUzqYTdCYJYuTApMC1w7VvpBtqlqEZA6Jdgg34AjKRB1vH%2BKOuEniQ6Ap0MDScEPrBzsIkQ8LPdcb5YjGqSYFZTtFmPMx0%2BK54CJd4iumis%2Br8T%2FZT691Ilr65QaXIyTmUSttUfVm1%2FanjwSqUUFvzfscRpY%2BbQ4LwjWangtV2ZD7JMAOuOvrtdzKZJosHCc%2FypclA5IJH5a03P2oKSSI5buXmHb628YS1C3QPdbJ6W%2BXk7aqI0hcKd9J3GcXwcV6o%2FPMMm9L1KbJp4G5Ry6xhD5Wgy%2BIbNj8cbhKoKT1sywyVgdfWIliNFeYP00%2Fm5J1GK9Mig5ugs7he8EbqNWs71bJ9fM6%2Fp1ig7PtGKTTC%2FiKLCBjqkARpwrCLY1HFfFBZxBGczP2%2F%2FCC12eP41IFZgolklr5xHGs%2BFZ6TRg5ig4qoJudoFIsnYwp6VWir4kaQH6C%2F0eo6z95ZVeWubrnUgfSK5nhukBgFHgaa%2FMaoCGkA%2Bl8bt1XYTA%2FDmj6N0bbTTkMfUqQdFCfC1Z4kEYEsl4N3wsxj%2FFXvicGwo45WQfqRrYzYvGCDFxyaZ7KVq576ExTDxvo9eVxig&X-Amz-Signature=f8a5a2237edbd52fa5a40a26345ab5e29e53b50379942ffb0fcc3f4ad1b5ff0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSX7XV3M%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6wd%2Bk8eyvEpXwT0pujauUYDq7VjN4yV%2BZF4ryyLmpIQIhAPtZ4aglWaTkQyqAogmv4%2BKNOBf2hWlDod5hhn2e8FEzKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrI%2F4DM7XRsTlVegIq3AP8Uzuv3YR9goUdDCe3oXkyhHucvCL9TsAnskviVR5FgK0USQyDxmZp8gilQl%2BHObDR%2BRZ3MQue%2Biz7wcKL6n%2FvTe8LXvPiuxCO7wP9kCBO1zv28OM7BlD%2BhyZBh3GVwSo4BzXBtCg23E%2BEtOMM8f08r7ih9RJ2w2cJf9tPylQhO9IlD56wDjNBtM9%2BOlpxmxDaSBGNoTK2KMAnQNKFCu%2BhZOqVDLtH%2BS%2FKQMhbzItLTGkAwSsNBN5BHA3eZ0zwYR4fDT0uTjN7Cf7Wk6jLwhSV2dco0%2F8YFiJyDov8vhUWHHrkVDwAukQPWRHCmfp5blZWkKY1z%2B8ZEVj1OJpNKbL91AUNzsJT%2B79NCjWSN2nfj7B%2FqGA%2FeOiMi4teOIyNZ9YHD2Xe3CO4ba9pEMBL4BdbU97lPihLQvgVcfrgo%2B1mI3VGjYeIcWlBNKOTZxfL75O6mQtH5duso8LvVKoticmoygEjuqPIwBxFbiY1mHD4sLLvI8bQBG1u9XFXuPYduUWu4G2dhIzMLiDYEeEMHWX0Amql2Vi8zK%2BRPQwBcnWcdWVu%2FJV9idM0k27EaNPV3wXjodvybtO7gVmGwHhcPKYAFG0v4Q5UjovZncLoJyxDTN8CaBLwRujvoTBPMzDFiKLCBjqkAf5zaZR0pbEJ3ukg7d8BPT33THwXMltt5Ix9WVXOFujtEK3mNPjKSvRy4eRgo4j1DtZrjm35GzxT%2Bok44htUVkpIBgHfOBgRqC7oKF%2BmSumGhpFcqbgl0Ow%2BBhsQOuU3cVGT9SVWnhaZ18h4dgpfeb2ZDCFh4KjlaUbVvYLQ8G5eHwf6iMaPqP4nVVJEplazvjS8V5WFV7GCcBMwIf2HrZ%2FvL3pI&X-Amz-Signature=6831395bed9529ecdbc94c8f3c8dad4ad93a0fde31c68dad7a915ffa000cdd7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4SDL6ZL%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDyv7JM1tERVbsbojHNI9Tp6M3WzrzoZFPT%2F2i0%2FE%2BgAIhAJwTupM752hokIlzXGyPhzvPEE7TjVTG8Paqxj%2Bb5xsTKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC9svQJkLX0GtRJMMq3AN35XX0oqzK0OTdW65WJjxEpSxdlkrOZd4JnkNK8tfQrmG1TiV4wK8VtaC687TIcHLB6a%2B4Bsohbt9NofmulTIY1ndhQ2Z7W8igwPTwP%2Fwjhdl9qtnb1INfBmoS0a%2FXlrvqq5PleQ3KF%2FyJVYXenzSLRtXQYzO3M%2FxzYyP6aDI3nw2P6xyboq3VeYFIVvLEGRUZsrcg%2FBL5fPVbyFnsWtgPG2boYPYHu4k%2F0Ng3XQktWSGIgKzRvz0FI5tMsrEgIr1KH%2F78d6nbqEGrt4wFo986TRe5i8LB5OT4Bfk5vlZQMUPZwaoY0dvFLJumMwdPL5BDQ2oKCTJyE%2F0%2FlHU4BGObG034r6vpniSa4WInZ9M40GZ7zA26vq3CjAUHhsLnSI80nT097Qo05lz4AwFHtOtbjTFs6TLOkJFdpD5miLJrh%2BHAZQy2diIBZ%2FCfrDSppKr2sA3SjFk84etkmWC%2FZdwWS75JqYErsLtYKczZZAMtpleNzmiqagJFLr8GFUWdfiZIaEbHNNMG6N1VqirrnL%2FITsqN1yTNUp%2F1seNloggsVnuEGu3ZsrmdcGDBY0T5KxWCMGrcNjK60Ypnwvpe3VGM2cAjYpdQi8qnvaMJ%2FcWmi968sGgDwOIHdGLv6zDUiKLCBjqkAZlgpLCJBViZ9QxESwAJKnBMlHUcJVAyZyqDk%2FJ06I0Op10ZvqAsch%2Bowc5Y7n7FztZmMcByNYXNOtX5rZ%2BhZgstUmYPoUdg%2BaYmRIXYSJoYSzKuGZiqwMRoIf0o20j3QfO3FsuhZEuQomXvE2o0QtrhU3X8jZ2rHpeh5f6EichSFjkhRJZEG4rWOcvHdKAecnQwMTtbk98n6vDbEgo%2FKhlI2kUd&X-Amz-Signature=478d84a8d9afae2a6c59aaaaff1a34451d2ab07889ecc7ed749784d5b6272535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
