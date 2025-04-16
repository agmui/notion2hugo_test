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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DSRV5AI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BSaD1prFcofiBpdF9Tg0jHAUPb9QPZGlePe6SOI%2ButAiEA8S%2Fs5my%2FSQuqS19odjo46jK%2B70T3eFGxvV1N1TUw8Wcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDA2NgGWuAhijhKbQvyrcA47cQoXCQw55rpSCZhBEI%2BFKaNKe0qmYcIaWlaJuiF9vdLHEuwTDJmny7bBtZQWvYplHA7%2BRxiD0ZxAE1uB8Q8wuh0fT%2FXFfqQbMTG%2Fg89Z62bjPHgmGk2MG1IxNbV31rU%2Fd6B0Cc3bUYZWXslCaAMqXFmRjCaqpcM2SvUtP6BL8g262%2FoPDGQynrcAD1AOxy37oY%2FeUjxE4sAbonXI1xF9QJvEgLGXtZT%2FkN8s1rxVTmFUZ6FAIUG0YFiAQElvOvjVclzPU3Fu0KcDaFRObJ9vSbznp4KNIDREf%2FmiVSKaZj54ez%2Bi4elky5qQey44UgSOQpy%2BgreMHgt1QPHkUHn0lajVACyJIcNoSo8rIRBfB7SDeypduCEwZT6zEXIiET%2B%2BHeg%2FTwGf7hmBgiPcbuOkn6RXq0Q21YSm4CtKUa0b%2BlxIR718BLRWntDO8xHlFQCz8uTAidAJ5M0zp4TeKE3auoCCIMEi0G66PSY9w%2FbrD0IGjHitTN4wWpjpCCAr1aslRYeAV15%2FsYwW7tEGKKEgZdULBWZxaxfmJXJkSNKB9RssZPlh3r0lr9%2FPL7Xtg9Gw0B8D9P1Hus97UOwfuFcH8TCQJMzVqRJbW%2FjEwWV%2FcPd11p%2BG50L90tuR0MMysgMAGOqUBQO3h6Vc96QZmwaYAZoH0wGkdgIGsQb%2BJ3bgRkWfnnxTSXWAeQqw3SQZV%2FdY8NQd6C0U%2FpaaKDP1x96AyPAyXCryrXgVy77tSExUR7cYW6wxUm8AKTa5Li56CGRm3yYHn%2BVs8GBc9qkFk1Tg4z1nfpl%2FHPeys3goadBcH50e2DGrJ5rUbB%2FK393AaE4XZ94P2529F8bR8bS1fIKVtUEbKI1yJFpkG&X-Amz-Signature=95c3a30cd34f9382bc5a381c417ed4b6422e4587c9989c54baa5b72b95600491&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DSRV5AI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BSaD1prFcofiBpdF9Tg0jHAUPb9QPZGlePe6SOI%2ButAiEA8S%2Fs5my%2FSQuqS19odjo46jK%2B70T3eFGxvV1N1TUw8Wcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDA2NgGWuAhijhKbQvyrcA47cQoXCQw55rpSCZhBEI%2BFKaNKe0qmYcIaWlaJuiF9vdLHEuwTDJmny7bBtZQWvYplHA7%2BRxiD0ZxAE1uB8Q8wuh0fT%2FXFfqQbMTG%2Fg89Z62bjPHgmGk2MG1IxNbV31rU%2Fd6B0Cc3bUYZWXslCaAMqXFmRjCaqpcM2SvUtP6BL8g262%2FoPDGQynrcAD1AOxy37oY%2FeUjxE4sAbonXI1xF9QJvEgLGXtZT%2FkN8s1rxVTmFUZ6FAIUG0YFiAQElvOvjVclzPU3Fu0KcDaFRObJ9vSbznp4KNIDREf%2FmiVSKaZj54ez%2Bi4elky5qQey44UgSOQpy%2BgreMHgt1QPHkUHn0lajVACyJIcNoSo8rIRBfB7SDeypduCEwZT6zEXIiET%2B%2BHeg%2FTwGf7hmBgiPcbuOkn6RXq0Q21YSm4CtKUa0b%2BlxIR718BLRWntDO8xHlFQCz8uTAidAJ5M0zp4TeKE3auoCCIMEi0G66PSY9w%2FbrD0IGjHitTN4wWpjpCCAr1aslRYeAV15%2FsYwW7tEGKKEgZdULBWZxaxfmJXJkSNKB9RssZPlh3r0lr9%2FPL7Xtg9Gw0B8D9P1Hus97UOwfuFcH8TCQJMzVqRJbW%2FjEwWV%2FcPd11p%2BG50L90tuR0MMysgMAGOqUBQO3h6Vc96QZmwaYAZoH0wGkdgIGsQb%2BJ3bgRkWfnnxTSXWAeQqw3SQZV%2FdY8NQd6C0U%2FpaaKDP1x96AyPAyXCryrXgVy77tSExUR7cYW6wxUm8AKTa5Li56CGRm3yYHn%2BVs8GBc9qkFk1Tg4z1nfpl%2FHPeys3goadBcH50e2DGrJ5rUbB%2FK393AaE4XZ94P2529F8bR8bS1fIKVtUEbKI1yJFpkG&X-Amz-Signature=eae1d7a5e6bb94baea39104e5dc8828fe17e57260cd60cdc19a690995210a8eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4YK5AT%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRockEE16YtlDNdyThF4wKaYq4FI1Hqzy1G4LiO%2BhC6AIgJf8y4fd%2FBVtSV5T5CeneooyLXG6ptKU9fmTwMacgvpUq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDMLDK%2FerUvF85sx2ICrcA7%2FkoARRud2jk359huSU7N2%2B5eIMtAhpEJysBUzg%2F2NQfQLlLnnRciZDQO6aACP3vPus2rWGQM7xoiqOARhozhQDW8Wrn9Cuach2gBtXRdWin1svnIHju8tvMuj47Xf5%2Bn7HfHFUr%2FcHnws6TJKRUbBvyPMeT5LWb3msdIcd%2B%2FzHf01Nho5z%2BB0qqbUye%2BOZIYiM6t4dWfXXBe%2BAgpYFDfBrgjuFyemPq1JC0j1VqjG2thhxZGfGVL6x5L2eAWBmNjNSEBdP4LPq99Bi9NkzYYUkdzeBx4bfJIj8Ewu2YaxTrnqyb%2FSv%2BDlXgzib0bb573wfOpn5AmDzQ57byPMeqmqzneAjV2CPR6beSiA9QbcDo9NvuMHLCWQejtkdHwuWVYN4k%2FzhZMQUzgoUVbMur8gNqk1%2BGk9jzaoI73kjFMYIzrdZLnwV3j9jBWzoT84jd82EEgrT3wna3kFdInVzQNQ%2FxfMPZ%2BCFngSaVylmADdQZxgOGLQAI1pTc66%2FxefxLQSX6qFM%2BUnT%2Fb2zfvTYnPqIflTPENCYfEKLGm6D6D2y7ps0WjAie0oavm7u6mS58OjtiEIxDE%2BsgXMMqfj8wGY2D0TXnB6%2F%2Bz7779%2Bl7kBC2ONuCsGsRm8zQ2inMMCsgMAGOqUB%2B2%2B7BRpI7nk8bdgRaRwmJp%2FesLdHhzjOwUjX%2B2B8DAITnun9m7wETiwZmnTtXoFofZ38Lh%2BEcrJZQPzoq6zqkqKvgSm7ei5Cew1%2BfDQeUzHNfGnVXDuQUytoLBlU2tf63hWRignXJ%2FJCmGaTzp57tYlSy23gUjmxXE1Nt2LmusPVXcMrXYvwQOdiMplFlfumLi01PGrvcIetfmGkzpOXtHzfLgGe&X-Amz-Signature=d9e5823277429a3477afe3470283ea6e1f9ed6d7d69569349c4641a1e310a4b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMC7IHOE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvT4biNo9wZRoH6%2FzFdjhFSJJ1ND2XNHbAPGU324XHewIgRhokLmx%2FtdPxW6Epqj6SxyB8cBHOzl%2FmicNOc7GpV%2Fwq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOO21EMYNJPn%2FAwC0yrcA8YJFQzwpllNvNfWnNpA3aafi%2F7R42nFAW4vS8jb3BlkZg9RsJ9jpYsFNyLb8Vp6FTGkT1VFGfg%2FCRlPnO%2BglMkStPzG6wfH5b4HrPq4wWTfqWQIvqPrTETBMKXML7zrwYP%2FmRvBVZOkdKapsxX2Qn%2BJsIZ0S4LH%2Bn2byWZXgwubYL4WKV33Xwg2QxUnItGoLaX4iQ%2F6PFGWDeQjy9e%2BdZe2%2BCdZNOTEasYt7wzECSgk1ZdUFmqc81ftSxUB5qEWNuxYCYAC37H5NUssDX2Qad5BQge%2FzD1qps38nrmj%2B4xQ9%2F1lWQAmT4EwVmAQOO36OTfXaBy5R6WJI9o9yk%2F195DEdm2vBGyqBIQ3oMuAK2VO4lK%2Bvn2iC55X34N3HNhDlQlZHtU3qztZedjlamVVrDMjXvKsX6CmLweSxHzkQushz21%2FDifRu4et%2FbTTSEZUjpmQq3ZIBJye9ZGPlSbbr1MLtFx%2FaPylfC0ZHwKQUjqBY0ZjO1EHOfjU7NtU0Ses98ZeaEIPu2KahhQnlzSxLDZMiJbOP3GbHqx0VUcZRJokrtUoCP0hjBK%2FwAW9Xcn7FTm6OGVuC%2Bki0cAJcWhn640gAUaLw05kPYfldcWYr7SqsY5e%2BIxbBRWUC0FMMMisgMAGOqUB%2FrE%2FaCj8444%2FnSXVywpcwd2J0VNPxfGVzDPx4HLJI8NoI5qUo2%2BjqTfMFkOlyXcyrhXvJvfJqF0cXkXib2jmJpkZr6KykT%2FJPZBy%2BXovJ2QUtY3Jk7gasXKPZmN3imk2fksZi49%2FRzufwPu4mzwAQyI%2FPgPsD7u9fp6lHnY%2FByo42pKvhDmxGHwf%2FHoUlM3WVhyyvywXz0bJaOeWmhsrdnNof7ON&X-Amz-Signature=4a393e54ffda53f49097fa91b2615ec44f477378aec8ed83711fbdd62be2fc2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DSRV5AI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BSaD1prFcofiBpdF9Tg0jHAUPb9QPZGlePe6SOI%2ButAiEA8S%2Fs5my%2FSQuqS19odjo46jK%2B70T3eFGxvV1N1TUw8Wcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDA2NgGWuAhijhKbQvyrcA47cQoXCQw55rpSCZhBEI%2BFKaNKe0qmYcIaWlaJuiF9vdLHEuwTDJmny7bBtZQWvYplHA7%2BRxiD0ZxAE1uB8Q8wuh0fT%2FXFfqQbMTG%2Fg89Z62bjPHgmGk2MG1IxNbV31rU%2Fd6B0Cc3bUYZWXslCaAMqXFmRjCaqpcM2SvUtP6BL8g262%2FoPDGQynrcAD1AOxy37oY%2FeUjxE4sAbonXI1xF9QJvEgLGXtZT%2FkN8s1rxVTmFUZ6FAIUG0YFiAQElvOvjVclzPU3Fu0KcDaFRObJ9vSbznp4KNIDREf%2FmiVSKaZj54ez%2Bi4elky5qQey44UgSOQpy%2BgreMHgt1QPHkUHn0lajVACyJIcNoSo8rIRBfB7SDeypduCEwZT6zEXIiET%2B%2BHeg%2FTwGf7hmBgiPcbuOkn6RXq0Q21YSm4CtKUa0b%2BlxIR718BLRWntDO8xHlFQCz8uTAidAJ5M0zp4TeKE3auoCCIMEi0G66PSY9w%2FbrD0IGjHitTN4wWpjpCCAr1aslRYeAV15%2FsYwW7tEGKKEgZdULBWZxaxfmJXJkSNKB9RssZPlh3r0lr9%2FPL7Xtg9Gw0B8D9P1Hus97UOwfuFcH8TCQJMzVqRJbW%2FjEwWV%2FcPd11p%2BG50L90tuR0MMysgMAGOqUBQO3h6Vc96QZmwaYAZoH0wGkdgIGsQb%2BJ3bgRkWfnnxTSXWAeQqw3SQZV%2FdY8NQd6C0U%2FpaaKDP1x96AyPAyXCryrXgVy77tSExUR7cYW6wxUm8AKTa5Li56CGRm3yYHn%2BVs8GBc9qkFk1Tg4z1nfpl%2FHPeys3goadBcH50e2DGrJ5rUbB%2FK393AaE4XZ94P2529F8bR8bS1fIKVtUEbKI1yJFpkG&X-Amz-Signature=7624b7251b2ee17eef65331956cd1daca681ebb01fc373bebb6220b370eff1e0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
