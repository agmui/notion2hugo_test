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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZVRR6K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T051946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDhC8%2Fk6vrZ4xsrZ0CjUD5%2FcCZMWZ97RshjrXkZzli0XwIhANGzilJl1w1XCTBSW%2BM1i2A48%2Bdky4C2REbLHUF9dvfBKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywszH7u9qerlN0oKQq3AMlUuLl7sQxyT4niGekAqTDPT9YL9Jm%2BcGMoPPt%2BPH39eQBenloy0GUkhbxgvM3X0k5hdEbeMbuhvynU4WpGJb4g1qJuz9J4TN2ZZ7P2fdnWGgW3Bdl6jhjTjT%2FTbasjQUE2UJxJI5daThPqjgqysArtpQUpeg159PfR%2BOxyRtuSPqrza%2FD%2B5jwyKr3iEWZiIQqqYoXlDc4VvMaX8NWzLrxXo%2FxvYjmO9c6rhiGvZQ6qqQELpqNliE%2FJt78iaWC5HARaEjr67XNqH5p3tL%2B%2BH4ybx5gIH3dAXMgI1S7iuV4KlLHcQxMru3XSxW%2FJXVEHo3tezaXLxyR8fC5HN%2Fr9SSzH1NffzumrsWZZ8TgPoCzlQmWlktgfNud4l%2ByhxQCQBC%2FlvfpnhoKfwJbrWTtH3qY9Fbm85u89Fp0i9vmGsu5fVtk5Dj7X0YYxoxZfYQUZgPE4B3Gprb%2B%2B0AdmAVvAQpyw%2B9e2K0vfqKhq0RWPGzS8S%2FEvTN4uv8f84psi0PY0Q6sSPkl3Q0YJPOfO1uIq1VWJzuXzTbPMH90qd3p2b3IE%2BNXnueZpmCro1AfPBhJAC6LMoK058Jb1waYSKm%2BQNkPyC2WTzwG%2FjjrIL40pgq4zJQHPOM54%2BpbGJJ5OjCX%2B9XEBjqkAWk7cp7oasNQ%2BP8ojvidUIF5sm43PLNT9lwMaIhYDSOeekG7mVMyZmZGiPuaUmpfJW0LXVuUG5WpSVXfa9caJKE3OEcNMsahurbM5KZNDeNU5r1JdqAMIh8OFuXdgvvsVrYbQAkSYDvGvbkRoaDAVBsmpnTbmeIkLU%2FpJSen4%2BgYMyQwUPadwpx30gnJ%2Fj3NKYn8b%2F9mna8Nw7bBO4g35Aazx5VT&X-Amz-Signature=c68e8c99aa01cbb6b710eabe5e1f394a25eff1ef49f266fcf17b1a0063cbd2f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZVRR6K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T051946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDhC8%2Fk6vrZ4xsrZ0CjUD5%2FcCZMWZ97RshjrXkZzli0XwIhANGzilJl1w1XCTBSW%2BM1i2A48%2Bdky4C2REbLHUF9dvfBKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywszH7u9qerlN0oKQq3AMlUuLl7sQxyT4niGekAqTDPT9YL9Jm%2BcGMoPPt%2BPH39eQBenloy0GUkhbxgvM3X0k5hdEbeMbuhvynU4WpGJb4g1qJuz9J4TN2ZZ7P2fdnWGgW3Bdl6jhjTjT%2FTbasjQUE2UJxJI5daThPqjgqysArtpQUpeg159PfR%2BOxyRtuSPqrza%2FD%2B5jwyKr3iEWZiIQqqYoXlDc4VvMaX8NWzLrxXo%2FxvYjmO9c6rhiGvZQ6qqQELpqNliE%2FJt78iaWC5HARaEjr67XNqH5p3tL%2B%2BH4ybx5gIH3dAXMgI1S7iuV4KlLHcQxMru3XSxW%2FJXVEHo3tezaXLxyR8fC5HN%2Fr9SSzH1NffzumrsWZZ8TgPoCzlQmWlktgfNud4l%2ByhxQCQBC%2FlvfpnhoKfwJbrWTtH3qY9Fbm85u89Fp0i9vmGsu5fVtk5Dj7X0YYxoxZfYQUZgPE4B3Gprb%2B%2B0AdmAVvAQpyw%2B9e2K0vfqKhq0RWPGzS8S%2FEvTN4uv8f84psi0PY0Q6sSPkl3Q0YJPOfO1uIq1VWJzuXzTbPMH90qd3p2b3IE%2BNXnueZpmCro1AfPBhJAC6LMoK058Jb1waYSKm%2BQNkPyC2WTzwG%2FjjrIL40pgq4zJQHPOM54%2BpbGJJ5OjCX%2B9XEBjqkAWk7cp7oasNQ%2BP8ojvidUIF5sm43PLNT9lwMaIhYDSOeekG7mVMyZmZGiPuaUmpfJW0LXVuUG5WpSVXfa9caJKE3OEcNMsahurbM5KZNDeNU5r1JdqAMIh8OFuXdgvvsVrYbQAkSYDvGvbkRoaDAVBsmpnTbmeIkLU%2FpJSen4%2BgYMyQwUPadwpx30gnJ%2Fj3NKYn8b%2F9mna8Nw7bBO4g35Aazx5VT&X-Amz-Signature=b2f0e493c6f7116ffbafeaa641ec5cda0ad67a7282114c89177fd571c21379fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZVRR6K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T051946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDhC8%2Fk6vrZ4xsrZ0CjUD5%2FcCZMWZ97RshjrXkZzli0XwIhANGzilJl1w1XCTBSW%2BM1i2A48%2Bdky4C2REbLHUF9dvfBKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywszH7u9qerlN0oKQq3AMlUuLl7sQxyT4niGekAqTDPT9YL9Jm%2BcGMoPPt%2BPH39eQBenloy0GUkhbxgvM3X0k5hdEbeMbuhvynU4WpGJb4g1qJuz9J4TN2ZZ7P2fdnWGgW3Bdl6jhjTjT%2FTbasjQUE2UJxJI5daThPqjgqysArtpQUpeg159PfR%2BOxyRtuSPqrza%2FD%2B5jwyKr3iEWZiIQqqYoXlDc4VvMaX8NWzLrxXo%2FxvYjmO9c6rhiGvZQ6qqQELpqNliE%2FJt78iaWC5HARaEjr67XNqH5p3tL%2B%2BH4ybx5gIH3dAXMgI1S7iuV4KlLHcQxMru3XSxW%2FJXVEHo3tezaXLxyR8fC5HN%2Fr9SSzH1NffzumrsWZZ8TgPoCzlQmWlktgfNud4l%2ByhxQCQBC%2FlvfpnhoKfwJbrWTtH3qY9Fbm85u89Fp0i9vmGsu5fVtk5Dj7X0YYxoxZfYQUZgPE4B3Gprb%2B%2B0AdmAVvAQpyw%2B9e2K0vfqKhq0RWPGzS8S%2FEvTN4uv8f84psi0PY0Q6sSPkl3Q0YJPOfO1uIq1VWJzuXzTbPMH90qd3p2b3IE%2BNXnueZpmCro1AfPBhJAC6LMoK058Jb1waYSKm%2BQNkPyC2WTzwG%2FjjrIL40pgq4zJQHPOM54%2BpbGJJ5OjCX%2B9XEBjqkAWk7cp7oasNQ%2BP8ojvidUIF5sm43PLNT9lwMaIhYDSOeekG7mVMyZmZGiPuaUmpfJW0LXVuUG5WpSVXfa9caJKE3OEcNMsahurbM5KZNDeNU5r1JdqAMIh8OFuXdgvvsVrYbQAkSYDvGvbkRoaDAVBsmpnTbmeIkLU%2FpJSen4%2BgYMyQwUPadwpx30gnJ%2Fj3NKYn8b%2F9mna8Nw7bBO4g35Aazx5VT&X-Amz-Signature=36c74c439339674c2ae65761d53df389ad803730326f6c53e4e3a803fc994dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SM4THGN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T051947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC%2FsE2I0n2haYDeSHWheoYJxpWKMPkPFSl24kHGcvvVVwIhAKI%2FM56JCcLMZCtrEUy2RUBGQbA8%2Bbtp%2BCUIoFFBUdmqKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxik6bAocDL4Wnaftcq3AMUKOknGPn42jAQKHSrlFVJFEpE99kfpyo0yHSiO4rc6R1mxbxfM7NYUBubqjNvvfuwJTm%2BLzxFvKqZFXo%2B9zxoVXbekTYEZMmXL6t9IFlQfEtzDmGTMHenbjVcwzL37V4m8HJs38Cnq5VugYpv69G6EqX6syxO85d4oS5g9Yc%2Bhl2QtCBSrd%2BewncM3NNY3RYPDZK5tpn0Q9L08weZ4r1nj%2Ft28jDUHyGIK88EZU8jks5Grq%2FI6hKVRr1M8%2B2axtGZ2i%2BLf%2FlKkn46hSWV3EXZAlNOxNq4PRWgKCDTv1a0V1%2BIGTBc%2Fj9diXMKec16tQeKijOoFqV4cu1yPz%2B9Cdv6TRHAg4MjSGtRcD14VX74cwXm7xxl%2BfEUMwA9GFLgu%2BOFNmNj5YqNtxJHsCbankUNYcVHnktBgYTpYZ3xIsUV9AgAwrFhvYOpXxa%2FjR%2BbWRCyjXeiLj9%2FYnIFgQzJzgbBVjsJA6gvoUD0gSZJKwkUSDoBcngH7UHvbQQ7fOimkyENrDhh0j6xnEbaksht4WYkZnSoNG95qUGKORxdxE0uy2Sa7fYEmn8GwdAeBGHLwITBT3M%2FhKlg%2B%2BR2uR7TqoQVgiYPgQsQ2boaaQQ4XqgsOlW5H%2BXUS4kuOyvP%2FzCE%2B9XEBjqkAYD4DvW2zZrhuPekioTve2n6oO%2BcSC6i3haSbXzVjYVZ6S%2FcIafEF6psA7PU5o44H26syABrlJ4%2FGf%2BKS9hszOglVciZJ%2FiAvQEaQfc%2F1LzopqsG%2BFgBZfFtECh8AV622VCsN8QS54ywVYxfFTLXLm4hBsUkUe3ig2IXBZPHN6ocHk31Jo7jI8US64hTt4fDBFIhELl0sRUejIqGQlFJtjvir9xJ&X-Amz-Signature=8159a126c19b9c07d7dff3d5e2c93f4af1cda691f0c3559233b73e0b47633c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMUNRFQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T051949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFxxSil6%2FDru4V9IKZXwAdCYG8Vr8BgpRb0%2BssZXyjLmAiEA7uPKdJSvWVfsO4JXYuMnioYdaCSXTBwRy%2FFA9U00ogUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKRFpJGnhaDcqBgByrcA%2BEcFnqMGlNA2%2BhRCXda1jw93UHYoKP6B0uKD9kw6y2aJj%2BX4wYMhvlFV1YKCmGKwvQFVL7l%2FUDZ6Yd%2F6UEhEEUzw8jkFg6xEcKZysRz%2FHZeN8l12nLISGMNOvLxsPbMQ8iDNDUUOVa%2BAFg2VpFah%2FwR4m0Ujc6LN%2B0A3L7ADCF5Z2%2BKPaFo9zgYiH8Yc9ITXvCG%2B8XxZKpAcJAwd4vKZcZgwr%2FNDTCgXcukMkf%2FPeQafa%2FVOnCDukiWLANsJ9FwUGo4ayk4VnqLXIlN58P2WTh5dmwftUrhxIoQNKypsK573URv3YpRJPKa3xN%2BztClxPIFruZJGXfSlrFCScAjdMfKDzl4%2BM9n7RLQA9xp9NxG1mbfbgzJhiMZntq3KBjEVytd2Ht4Kl6qCHJHpYuENhSuiOTXmETYQV7fHr97DX96NB07nXOcz%2FQLdJCjbo%2BESrnMoQXQtEHgP22UtiWqGXjlklLG8QfZbbw9bZRXmBdPqzaXZHQeV9he1i3HeEswGnEOmb4V9V8GnHQzEFTb5n4DmQD9xfteLA%2FcbA4hxZKH9R9c769KhQfl7nAQjEZagU3yFFWs6RXEKWqP%2FndNV954UCXKE3HOk%2B7Ys1%2BSFLvLdBkEL15GKS4hFFd8MLv71cQGOqUB5X0%2F3Pr9sxqTWChkoELn9CZMAVi7n7PmFZi1dj9cis1kcICFfzGLkvw0az1H5H5ftIDHM9J6ZOTOe4RSmhSbH8C7aiDokvnmIxPkpfqbSEYewTwF1MITTGhm%2Fiw%2BuPwgOWX0oCNy4rCvkGuMxwTuF7YgeQqkd%2FUCZZpYeObyV0wS2uFlMxBgmUlDcxDBG6KPkC4ysouRlX1liar8qG6lFLJ4TBB2&X-Amz-Signature=687eb15e342ba848ee6428b6dd8b31366a3895f4c2222012e3b5cb6414a75cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZVRR6K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T051946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDhC8%2Fk6vrZ4xsrZ0CjUD5%2FcCZMWZ97RshjrXkZzli0XwIhANGzilJl1w1XCTBSW%2BM1i2A48%2Bdky4C2REbLHUF9dvfBKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywszH7u9qerlN0oKQq3AMlUuLl7sQxyT4niGekAqTDPT9YL9Jm%2BcGMoPPt%2BPH39eQBenloy0GUkhbxgvM3X0k5hdEbeMbuhvynU4WpGJb4g1qJuz9J4TN2ZZ7P2fdnWGgW3Bdl6jhjTjT%2FTbasjQUE2UJxJI5daThPqjgqysArtpQUpeg159PfR%2BOxyRtuSPqrza%2FD%2B5jwyKr3iEWZiIQqqYoXlDc4VvMaX8NWzLrxXo%2FxvYjmO9c6rhiGvZQ6qqQELpqNliE%2FJt78iaWC5HARaEjr67XNqH5p3tL%2B%2BH4ybx5gIH3dAXMgI1S7iuV4KlLHcQxMru3XSxW%2FJXVEHo3tezaXLxyR8fC5HN%2Fr9SSzH1NffzumrsWZZ8TgPoCzlQmWlktgfNud4l%2ByhxQCQBC%2FlvfpnhoKfwJbrWTtH3qY9Fbm85u89Fp0i9vmGsu5fVtk5Dj7X0YYxoxZfYQUZgPE4B3Gprb%2B%2B0AdmAVvAQpyw%2B9e2K0vfqKhq0RWPGzS8S%2FEvTN4uv8f84psi0PY0Q6sSPkl3Q0YJPOfO1uIq1VWJzuXzTbPMH90qd3p2b3IE%2BNXnueZpmCro1AfPBhJAC6LMoK058Jb1waYSKm%2BQNkPyC2WTzwG%2FjjrIL40pgq4zJQHPOM54%2BpbGJJ5OjCX%2B9XEBjqkAWk7cp7oasNQ%2BP8ojvidUIF5sm43PLNT9lwMaIhYDSOeekG7mVMyZmZGiPuaUmpfJW0LXVuUG5WpSVXfa9caJKE3OEcNMsahurbM5KZNDeNU5r1JdqAMIh8OFuXdgvvsVrYbQAkSYDvGvbkRoaDAVBsmpnTbmeIkLU%2FpJSen4%2BgYMyQwUPadwpx30gnJ%2Fj3NKYn8b%2F9mna8Nw7bBO4g35Aazx5VT&X-Amz-Signature=1b218c2943f321508f5815ab0f3f1214b79bd3710c6b47867dd6ff073493ebce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
