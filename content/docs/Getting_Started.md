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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZHHU3YQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSpDaMSWQaWin8FiztRMDLRdv3JyfKWoHcGUKp6%2FEbiwIhAKY4hm3qWq5VH%2Bz2WovpKWnrzDkJD0JqQddH1kzScZ10KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQqjiQoOlyBiQArgQq3ANpuYJTYFqjqy7pmIC4b6ff8UYjpAV8%2BGlEkhAfBVuy6MsoHBU6DzMcjhvs6gCunQtFOeNcEw3t1F0uk7hKYcQ6NAbVJpnmhiK9LwKLhYe06uPYLWNQhoByvN6zz2YQ%2B2U4pMhwxy7Uv4oDtxTPuYklnPtnpOjly6l3KWkce0FRK%2B%2BhtxS4%2BRbpkhxCFy0oa1xE6%2B09rmMsWlOm%2Bmqz4LyrpFHO8FvFUbEEl%2B%2FaqW2kCdMSUypj%2B%2FK5QfPoQEHbf6DdAJI9ofnrHAZdoOEvfqN8YIn0H5ipUhgwTrWpcwZtAGAspopNsPJwisUCLwHOpeNZ0RG5VAdbquzlKEUh3OZGljckkfWnk9rHP9SQmjw550%2FPsC%2FAtGIkM%2F1Vpja%2BhQyiiEsS9qRtTlN%2F4H%2BooS7N%2Bn2GRHq1XZA8Bw3wHcfl60MOImjLfkibneVj2zvgz2h7XzIiLFrplIcFI3sWVvy63zZJs%2BrwGuCs9EgW1qRUr3Zq1vIush0ZIEqD7HR16XjX12zXxCwmiDd2fnUW%2FtjB0Cjba%2FQNCqCLlB5iXzetBZpNPGUgOi%2B4v8wGATtfb9ivehUuJ%2F4vu8mU7K3edrtsWiM6wYllHa17uvvaLRWmaN4LUzxnnX7vQ5Gj9zDE5pTDBjqkASycIkgASgP4LZz0mQLlRYCNI7yciUThtNaXibUutLT%2FPdN2OlNV6N6pCCnUlyHSX%2B0U2GfIBrvIqirRuGjUR9lvThvHt%2FiItXl9scExZDFyMf7iuYqtApqzsz36N4%2B7O87wgIm65ADNtjYaBWKZ7Qxi3cHwqRW0iDgmSt2BBiYyVvumwqNcwSa9jL9zeIxnI7xNWpMfEJJSAFpdxvEcmPfqfuAB&X-Amz-Signature=3bcf4e118b8f2d6435789fc4739d0c4a4d63276390a1309fc7a590ce2264f97e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZHHU3YQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSpDaMSWQaWin8FiztRMDLRdv3JyfKWoHcGUKp6%2FEbiwIhAKY4hm3qWq5VH%2Bz2WovpKWnrzDkJD0JqQddH1kzScZ10KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQqjiQoOlyBiQArgQq3ANpuYJTYFqjqy7pmIC4b6ff8UYjpAV8%2BGlEkhAfBVuy6MsoHBU6DzMcjhvs6gCunQtFOeNcEw3t1F0uk7hKYcQ6NAbVJpnmhiK9LwKLhYe06uPYLWNQhoByvN6zz2YQ%2B2U4pMhwxy7Uv4oDtxTPuYklnPtnpOjly6l3KWkce0FRK%2B%2BhtxS4%2BRbpkhxCFy0oa1xE6%2B09rmMsWlOm%2Bmqz4LyrpFHO8FvFUbEEl%2B%2FaqW2kCdMSUypj%2B%2FK5QfPoQEHbf6DdAJI9ofnrHAZdoOEvfqN8YIn0H5ipUhgwTrWpcwZtAGAspopNsPJwisUCLwHOpeNZ0RG5VAdbquzlKEUh3OZGljckkfWnk9rHP9SQmjw550%2FPsC%2FAtGIkM%2F1Vpja%2BhQyiiEsS9qRtTlN%2F4H%2BooS7N%2Bn2GRHq1XZA8Bw3wHcfl60MOImjLfkibneVj2zvgz2h7XzIiLFrplIcFI3sWVvy63zZJs%2BrwGuCs9EgW1qRUr3Zq1vIush0ZIEqD7HR16XjX12zXxCwmiDd2fnUW%2FtjB0Cjba%2FQNCqCLlB5iXzetBZpNPGUgOi%2B4v8wGATtfb9ivehUuJ%2F4vu8mU7K3edrtsWiM6wYllHa17uvvaLRWmaN4LUzxnnX7vQ5Gj9zDE5pTDBjqkASycIkgASgP4LZz0mQLlRYCNI7yciUThtNaXibUutLT%2FPdN2OlNV6N6pCCnUlyHSX%2B0U2GfIBrvIqirRuGjUR9lvThvHt%2FiItXl9scExZDFyMf7iuYqtApqzsz36N4%2B7O87wgIm65ADNtjYaBWKZ7Qxi3cHwqRW0iDgmSt2BBiYyVvumwqNcwSa9jL9zeIxnI7xNWpMfEJJSAFpdxvEcmPfqfuAB&X-Amz-Signature=34cd07db76f68c364e0687648f7608df4699ebfd728190dd5054e7ee8f282f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZHHU3YQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSpDaMSWQaWin8FiztRMDLRdv3JyfKWoHcGUKp6%2FEbiwIhAKY4hm3qWq5VH%2Bz2WovpKWnrzDkJD0JqQddH1kzScZ10KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQqjiQoOlyBiQArgQq3ANpuYJTYFqjqy7pmIC4b6ff8UYjpAV8%2BGlEkhAfBVuy6MsoHBU6DzMcjhvs6gCunQtFOeNcEw3t1F0uk7hKYcQ6NAbVJpnmhiK9LwKLhYe06uPYLWNQhoByvN6zz2YQ%2B2U4pMhwxy7Uv4oDtxTPuYklnPtnpOjly6l3KWkce0FRK%2B%2BhtxS4%2BRbpkhxCFy0oa1xE6%2B09rmMsWlOm%2Bmqz4LyrpFHO8FvFUbEEl%2B%2FaqW2kCdMSUypj%2B%2FK5QfPoQEHbf6DdAJI9ofnrHAZdoOEvfqN8YIn0H5ipUhgwTrWpcwZtAGAspopNsPJwisUCLwHOpeNZ0RG5VAdbquzlKEUh3OZGljckkfWnk9rHP9SQmjw550%2FPsC%2FAtGIkM%2F1Vpja%2BhQyiiEsS9qRtTlN%2F4H%2BooS7N%2Bn2GRHq1XZA8Bw3wHcfl60MOImjLfkibneVj2zvgz2h7XzIiLFrplIcFI3sWVvy63zZJs%2BrwGuCs9EgW1qRUr3Zq1vIush0ZIEqD7HR16XjX12zXxCwmiDd2fnUW%2FtjB0Cjba%2FQNCqCLlB5iXzetBZpNPGUgOi%2B4v8wGATtfb9ivehUuJ%2F4vu8mU7K3edrtsWiM6wYllHa17uvvaLRWmaN4LUzxnnX7vQ5Gj9zDE5pTDBjqkASycIkgASgP4LZz0mQLlRYCNI7yciUThtNaXibUutLT%2FPdN2OlNV6N6pCCnUlyHSX%2B0U2GfIBrvIqirRuGjUR9lvThvHt%2FiItXl9scExZDFyMf7iuYqtApqzsz36N4%2B7O87wgIm65ADNtjYaBWKZ7Qxi3cHwqRW0iDgmSt2BBiYyVvumwqNcwSa9jL9zeIxnI7xNWpMfEJJSAFpdxvEcmPfqfuAB&X-Amz-Signature=ab91c37519917239721831bc7ef63ce1f77ce36a9fce688c3bd1cc9ec3853323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXAUJQNM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM37XnGuM1ftllN4t1WXSd0vnn2iPJr3XZdMXt7TOmLwIhALisTsvXGYLQmqdDo%2Bd5LJHzD%2BtJ6yYPi6V378v5buZMKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsATHz2xCQujKeWuoq3APxhZq7mhzjTRIVHKvvvTkSyreK0GKWBVM0nO0P21kOUipSOlzGDjeOp3jFqdGsOQf6tuS4dKhmjYs4p8BLinj%2BEeYT8%2FR8xDSzfhtJp8jD%2Bi04Z5pcbPFHq6HCkBLT3HiSixdNElv5jhDyIqEBiqUvk4qpf63hB%2B%2FUYkmFOKe1lnn5BfJz5aQLVBXbeaSdJNJcVcmxqrZFqbbEzGjTTLj22yMybWGR%2FyH6pVKL4JnOFuPrs%2BOZOqOy2DlWZe4SzKAsU9Jp5J%2FeYkZezlDPDSEM6G4Zf9cDAaMmdGKiY6%2Fu%2FC8YlBKabmJQmIGGusS5F5yb%2BclmOvgRXrH7sQB7F%2B8bRfZaDMQ0VkrIkbE7b10uDbeZuynbHJ5D6ArjXP9aE4gl5lA%2FQR%2Fm3EPa4odSs4lUY2iIWg86lEr3yy8bteIaLR8AXdfIFVNMU6RrKzJ20dzkXcimKvPni18TxRal%2Bjms4elrOg2enWqL%2FJp1FLT0VAM7rHQClyO5vS6ox%2FGSBMtDC%2FQi1JhYxmmkn5jHkK56QEnD4kv1MJSnyH%2BVvfcq6AM8Srniece9xddyCHeJ%2B9FAB5aJS%2Bwo16ieT8iqOFX9xW6inf0O5Iad%2BeYQQtctgppYMb6JEbLYnQVIgTCg5pTDBjqkASkjQU2OMckGHLplZ5f03Br9exhY%2F83M21SOE8BlfBxsE%2Bi0wr2zE8m6Mbsr%2FIT%2B8RUJU8QJtsC2SqLJsN8gp7IY4NaYvAvXtUZASSphGxqZArwfwag%2FqfgpD7VSgeaGtn1kQYgjhrWKJsKwIbnw2eeXkV%2BN4R5pPPffudq5njkJZ8m%2Bdw6QSINEcAs1GF5gvqXzKMue9C9o3DXuZHaOf29y9wZ%2F&X-Amz-Signature=73201ede823bd52681218649073b0bcfc5982eed28e7e11d43a83a2d4203d0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZLJCYP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD26r1iuT35L0Ry7jG0VOfM0PqX6%2BfwCA2xWdwsd9nd7AIgeV%2FoyTYab3dhUat0IkO70VkaF5%2F6%2Fm0XtBdSugbUeJYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNwayEDSrq9EzJ%2BRyrcA9deg%2FKMWdvjPsd7f89oPKAnqPlClvAiMTiJBb5Ue0h7FgGjUJmjvy56YE0LgxsZWckfBrSdFNavZmwqFQYxtpwd0%2FfyBkP6%2FHxThlhTb9Ztquu1iqoDAhonr2hK54xoVhy4%2BqCyj6GaHqEQdSRAUdSRo58yyxOcof3KfIXfPOUCtzEWhTMUhvAFzASq3wVLwsPACbhJbWrmakFI4SmRql03yikTmaejmU3dOiqn%2B0Kg7RoYPB%2ByzcHi8yV7u2HP8u7xmVbG8vz74O%2FH4%2BvRjGfdYaX9vosXgf%2F28zk2cHxwLyB1XSJySqA2%2BwA8fGfM7HDGxL2dfe2OfpOXLmFh4yxHX1uu5et8VCOWS723ZPP9LSFpskIX5muDeW5oM7SIxgqEbrhY75qtKT57joFrP8HR7df4wl5vrUu2lnMDykuPMOzFkfXg1GA1Wcwx3d30obA33TW0riDgbpWMo17utf8jvD%2BeQl6livh%2FEKJdO5UQM6usPPjBu1RlWJ5Ew0IP67D2fplaHOx2eiwy63bada1YcElTE173EDFh9sMh0iPHlcav1NziWrifSFqoKfiTEabW%2FVa2KI76gCMGu1D6uWGQSmcsMQL%2F39VsK%2BTg75W78ozuEq4bIAqcmrYwMJHnlMMGOqUBYfzikkFeVILKgWKM2lX90U0pmCvJXJXjvW7H5J6KXFAALnP3xqWhQfuSG7n%2BAt3TH5TdHjxv0ubWnoCOQg9F0YQSRyybC5RD3TC8i6OxSHqhjFLvf%2FdfStNni%2B%2FszYcEHKLX5BShIrTpu%2B%2Fg22E0ttewPmy3Su%2BK5bohhPZtw6UUWhw0tlqSuOyjPFeiWm5pP0i9QeKnykGk6yDgXACTNdHmob6V&X-Amz-Signature=e3e0006476514f44b41b5049456d945054099655caa1e01e441bfda7cde4ec94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZHHU3YQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSpDaMSWQaWin8FiztRMDLRdv3JyfKWoHcGUKp6%2FEbiwIhAKY4hm3qWq5VH%2Bz2WovpKWnrzDkJD0JqQddH1kzScZ10KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQqjiQoOlyBiQArgQq3ANpuYJTYFqjqy7pmIC4b6ff8UYjpAV8%2BGlEkhAfBVuy6MsoHBU6DzMcjhvs6gCunQtFOeNcEw3t1F0uk7hKYcQ6NAbVJpnmhiK9LwKLhYe06uPYLWNQhoByvN6zz2YQ%2B2U4pMhwxy7Uv4oDtxTPuYklnPtnpOjly6l3KWkce0FRK%2B%2BhtxS4%2BRbpkhxCFy0oa1xE6%2B09rmMsWlOm%2Bmqz4LyrpFHO8FvFUbEEl%2B%2FaqW2kCdMSUypj%2B%2FK5QfPoQEHbf6DdAJI9ofnrHAZdoOEvfqN8YIn0H5ipUhgwTrWpcwZtAGAspopNsPJwisUCLwHOpeNZ0RG5VAdbquzlKEUh3OZGljckkfWnk9rHP9SQmjw550%2FPsC%2FAtGIkM%2F1Vpja%2BhQyiiEsS9qRtTlN%2F4H%2BooS7N%2Bn2GRHq1XZA8Bw3wHcfl60MOImjLfkibneVj2zvgz2h7XzIiLFrplIcFI3sWVvy63zZJs%2BrwGuCs9EgW1qRUr3Zq1vIush0ZIEqD7HR16XjX12zXxCwmiDd2fnUW%2FtjB0Cjba%2FQNCqCLlB5iXzetBZpNPGUgOi%2B4v8wGATtfb9ivehUuJ%2F4vu8mU7K3edrtsWiM6wYllHa17uvvaLRWmaN4LUzxnnX7vQ5Gj9zDE5pTDBjqkASycIkgASgP4LZz0mQLlRYCNI7yciUThtNaXibUutLT%2FPdN2OlNV6N6pCCnUlyHSX%2B0U2GfIBrvIqirRuGjUR9lvThvHt%2FiItXl9scExZDFyMf7iuYqtApqzsz36N4%2B7O87wgIm65ADNtjYaBWKZ7Qxi3cHwqRW0iDgmSt2BBiYyVvumwqNcwSa9jL9zeIxnI7xNWpMfEJJSAFpdxvEcmPfqfuAB&X-Amz-Signature=a9d39220466efb66c897d3ae2764f8d471c6939cfbd47690192d75918b63937e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
