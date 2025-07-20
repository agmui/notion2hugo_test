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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIBH3HG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZPlCciMCyblk2d4EnXAYlR8ZMZGskjvVbrKLnZwP4GAiEAqtm9KVejgreKiNi1PmF2%2BEVG44HIiQ3fJSLCdmmaDagqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIi4s%2BMgOgE3JKm88SrcAyiKacoYEkQP1zYh2mOXa0ErS03C0TUIoc9el5rw2b6Neh8O9G%2F05J4WoZNE8IlDEaIqVw8FL4KGYAWVyRu%2BhuyRWDih4hpl46vZncDAprRggJV0mlNotPXrkHcDBASMFGdQWZAKST70Xu9XvX8cn7vx%2B%2BiFpo8wOUOBafsSs%2Fl0Xo9fQwAjeCBQHurN%2BI9twa9Tc%2BYu3%2Fmh3nhoDGdDhVwuskueDQ9d8up%2BjzDdbLsZsBKwtzg8SLcWrBALordouE7%2Fwt5i4g25cqQrUcdggk2Vx3ndPCokUu32f5VyHPMzZSldhah5znjAehoUSOLSqTqdRzZN2HCzMxSew7rOHCTLkv4bHNzjSAc1Htq6R%2BgmPSDrnXmLTvY2p2lb%2FprIJrKW21KPqV0GKJeewD%2FwIO%2B56uJ8WzZI7%2Foh1bpwNpcYqiddnkTQ4VtcmkJ7tIyqTkBi5KOdrQD8HXQKnJxC4laOPa4j%2BJ1758m9OHkDuKUUbb6EKhNFCZnfntt4XKxs857msAbP8Och1OosWIq5x1t4bNHGvZ%2FEqucMXaURPRQqKKUjgD7nk5IZnKBeAZ1H1EnzFVpjSF6VZ4yAX7MtDPeSPcaZWqMhT%2FDpsHBhiFFaWC4DaYRtlbTcIzVIMPK%2B8sMGOqUBAWVo%2B%2FD0q7sIUtURq7oSd2XP0bOjR9lGHITxFcukICVBp%2F9F%2B5sPT4VNbTaE51J5NDsrCSiQmgz9WjkqewZEkoJivgEgxFFOMlKiPdleG72MZSuKfAc7zuqgHbBNhpH8cQ52m9P8NcT6dmmr895WL65FiNytIyqMZRluFLpYbZ%2Bh4R7o8NVIGxNNZmwdj7EFM8vFzoUpUaYHF5OKhbaaBZqQmWg6&X-Amz-Signature=2a1e2b9b0b04733340ab23dc38cdc87f447b7893b4b8278596825d30be9010a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIBH3HG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZPlCciMCyblk2d4EnXAYlR8ZMZGskjvVbrKLnZwP4GAiEAqtm9KVejgreKiNi1PmF2%2BEVG44HIiQ3fJSLCdmmaDagqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIi4s%2BMgOgE3JKm88SrcAyiKacoYEkQP1zYh2mOXa0ErS03C0TUIoc9el5rw2b6Neh8O9G%2F05J4WoZNE8IlDEaIqVw8FL4KGYAWVyRu%2BhuyRWDih4hpl46vZncDAprRggJV0mlNotPXrkHcDBASMFGdQWZAKST70Xu9XvX8cn7vx%2B%2BiFpo8wOUOBafsSs%2Fl0Xo9fQwAjeCBQHurN%2BI9twa9Tc%2BYu3%2Fmh3nhoDGdDhVwuskueDQ9d8up%2BjzDdbLsZsBKwtzg8SLcWrBALordouE7%2Fwt5i4g25cqQrUcdggk2Vx3ndPCokUu32f5VyHPMzZSldhah5znjAehoUSOLSqTqdRzZN2HCzMxSew7rOHCTLkv4bHNzjSAc1Htq6R%2BgmPSDrnXmLTvY2p2lb%2FprIJrKW21KPqV0GKJeewD%2FwIO%2B56uJ8WzZI7%2Foh1bpwNpcYqiddnkTQ4VtcmkJ7tIyqTkBi5KOdrQD8HXQKnJxC4laOPa4j%2BJ1758m9OHkDuKUUbb6EKhNFCZnfntt4XKxs857msAbP8Och1OosWIq5x1t4bNHGvZ%2FEqucMXaURPRQqKKUjgD7nk5IZnKBeAZ1H1EnzFVpjSF6VZ4yAX7MtDPeSPcaZWqMhT%2FDpsHBhiFFaWC4DaYRtlbTcIzVIMPK%2B8sMGOqUBAWVo%2B%2FD0q7sIUtURq7oSd2XP0bOjR9lGHITxFcukICVBp%2F9F%2B5sPT4VNbTaE51J5NDsrCSiQmgz9WjkqewZEkoJivgEgxFFOMlKiPdleG72MZSuKfAc7zuqgHbBNhpH8cQ52m9P8NcT6dmmr895WL65FiNytIyqMZRluFLpYbZ%2Bh4R7o8NVIGxNNZmwdj7EFM8vFzoUpUaYHF5OKhbaaBZqQmWg6&X-Amz-Signature=5243438636f1c591db6085f4e69d4c06e75ac6d805b088665464df9a082a503a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIBH3HG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZPlCciMCyblk2d4EnXAYlR8ZMZGskjvVbrKLnZwP4GAiEAqtm9KVejgreKiNi1PmF2%2BEVG44HIiQ3fJSLCdmmaDagqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIi4s%2BMgOgE3JKm88SrcAyiKacoYEkQP1zYh2mOXa0ErS03C0TUIoc9el5rw2b6Neh8O9G%2F05J4WoZNE8IlDEaIqVw8FL4KGYAWVyRu%2BhuyRWDih4hpl46vZncDAprRggJV0mlNotPXrkHcDBASMFGdQWZAKST70Xu9XvX8cn7vx%2B%2BiFpo8wOUOBafsSs%2Fl0Xo9fQwAjeCBQHurN%2BI9twa9Tc%2BYu3%2Fmh3nhoDGdDhVwuskueDQ9d8up%2BjzDdbLsZsBKwtzg8SLcWrBALordouE7%2Fwt5i4g25cqQrUcdggk2Vx3ndPCokUu32f5VyHPMzZSldhah5znjAehoUSOLSqTqdRzZN2HCzMxSew7rOHCTLkv4bHNzjSAc1Htq6R%2BgmPSDrnXmLTvY2p2lb%2FprIJrKW21KPqV0GKJeewD%2FwIO%2B56uJ8WzZI7%2Foh1bpwNpcYqiddnkTQ4VtcmkJ7tIyqTkBi5KOdrQD8HXQKnJxC4laOPa4j%2BJ1758m9OHkDuKUUbb6EKhNFCZnfntt4XKxs857msAbP8Och1OosWIq5x1t4bNHGvZ%2FEqucMXaURPRQqKKUjgD7nk5IZnKBeAZ1H1EnzFVpjSF6VZ4yAX7MtDPeSPcaZWqMhT%2FDpsHBhiFFaWC4DaYRtlbTcIzVIMPK%2B8sMGOqUBAWVo%2B%2FD0q7sIUtURq7oSd2XP0bOjR9lGHITxFcukICVBp%2F9F%2B5sPT4VNbTaE51J5NDsrCSiQmgz9WjkqewZEkoJivgEgxFFOMlKiPdleG72MZSuKfAc7zuqgHbBNhpH8cQ52m9P8NcT6dmmr895WL65FiNytIyqMZRluFLpYbZ%2Bh4R7o8NVIGxNNZmwdj7EFM8vFzoUpUaYHF5OKhbaaBZqQmWg6&X-Amz-Signature=4222e9fc1a722122d048dfc1a3845df6369b3530770c8abfd1a01d66043347c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KPZDYFU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7Gf7wd8ZMWi4o8m0YFdb01uJ73GhoZf9ui%2F6MSboFBAiB7CLAd8YVfgU65lsQjJWwW%2Fq4xDZMBPmV0Z6faKXm8cCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj0DeWVpeQIYowNZuKtwDGs%2BUrB5e2rXncDyMSHScGWAu6duKKNytJCisrdb%2BJbi%2B9Dk3M%2FLT3YzUtFTMMzt2sYKQ20cobWTz6M5pbIFwV%2FfaCJmCtdqpVxOHrNfFPRqITBlybvJyabbW4%2Bi0i0Wcq4i7msEasQHcn6JfyUM6zZpKXlDsOLGbhudLYj2ll3RQXc9WPLVDxHaWfG5DYx4Qv2F5uhAfPIn%2FJbabkM9Ogn8uBRSv6IfOmuzKL7f2u3orNk57309kF7mTWbCeoi4lIUvvnYhBz4RUgUlV1Js0LfcfeVa0YQxTHM1vl%2FAssnlmpo6YJq%2FTJ%2BXhuzLx%2BBeb7Rr2bZj0mQztrdxLtSy6hLUWpASHVtTSQZ2s0DDktEMbdMReYgHAoB%2BLMVJ9fz6XLpfGKiA6RYoIvC5amBep2VEKb67Vu6wocEZ8H6Q%2FNUdIfF0ivYjCXaL8vDLEL0SeLGYgGl4hfpGLAi6XRU3hb80JPKcFX%2FJYg9TRU%2B0OgG0Tj8JutfrrZDAQjSfU%2BATXNtXHomR%2Flz3UiAiwNvxFbyCoLtSiZgrN38s4%2BT8MET4HlXS1GTm5jkOzq41MNrYB%2BsQEEslm%2FQt1RawpFYFw%2BCYFca7ayIwJBwN0Udf8IGiEC%2F%2FiWpGL2mkaLa8wxr3ywwY6pgEC%2FKrpdvUXhRWv5P453jrpRLYAfjqwOQ5VPuXJ0WrTu4wRRleBD%2Bu8sTcA%2BG2RnzNZKEBsdyvlPFU4oCF1U49sRWfgn8%2FQWPFsgQ9p%2F3ECGGuqWDX79cocwTO7e7QNlwQ7bH%2FMAGszbgADmKk4Bi3l2g01xbk0JmNcku9RfLftKHgZsNZNaZ5NjfnbtVvsTt0NjHFgMchTCYGuiFD8yONAbmUg8DPB&X-Amz-Signature=9220499b35e4ecfab35e4993dffa9af1edd08a4acc1ddac9a03e6d483f1b49a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJFCCLR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3JW0j2R%2FBz9ntGzh6KJZslB40%2FUT6I7osw1cfKkFzUwIhAJPVe5fpesue73GdVfJB9%2BLcdqxQ1IuOWvoJ9Z6SoVGdKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXpNQnYe%2BylpfAyJAq3AM9oG1aAiTXNTla980QNvazsFeo27xMJApeukhso5zGByPiHbwEzWKMjZhau7jch1f64CqYNge9HHQCdBbJ0E8cwvHYWTYXVxc34pG3gJrGQlW0cbWJDoPVoGAWQ6jFR3YTwX9RCmbwrXui9b1lSRvBWk98%2B0DJyN%2Fz5e4MAmlIrKVvZm0jT6%2FMH08oJPi7elfjgujqERUIXaX5Ns2aGpoDeN9K9vnHvnq%2F%2Fr46M4CEtnE0Mdj4pGQs%2F2%2BwP6VkA52OdNGNyTnTJFx7s1C%2B6gdsVo4mFy5jW5nDl3VzYPy0fsFCEXVR%2FZb6VTOdkZC8jGEn6RE7SLgP%2BYFvje%2F7i%2BUyJZy8clDbhdpBBDz59eBW1CSH0eWphtEZJNUl%2BnCBKLSVRBv11JWvqgm1wo%2FXh3aqRSOLo8g%2BFDD%2BBOKpfzFvP4szfgFv9xJadHHeZJCJaXgxka%2B7NRleViKQGDPg0Q94FXgLqWL3fYvZG8rMY%2B2NsE46YbkzZWD71ns6ip3vqVHnSi3K3dcGeXC3SxlzZjHD1i7g2POIY2qmMkkr6B6Eyc3tIXzEAuVePGvAClOAum%2FIjPCFNdWhz5JrUkja8PLfAdYLpeAoStWSJ3PJo%2B6WQmnY5jrzJ0ArfI44UTDxuPLDBjqkAQBJewnj2OCdnjlmlWQZEKBTt1ObJkpgrCQYuwANtrz7mtR%2FnBkUaaJjkEKpTAMk3%2BsdetDsaUqrK1%2Ftlsd5JUzvOR85ebEJoBeQgwykWhKFdXG7xMylFFuSTJIxIa1PNpoEmaOjbroyQk1lSwvRZ%2BOz0%2FRrklACFOft9oS9rYxleHjdWRHnMXglWHnUyvVSbOp1ttUZrv9AY9M6y12DCxxMLOzY&X-Amz-Signature=c76359beb631010465ed8f6f80218021fbeb92faa3fdb92862fe3c02a35407f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIBH3HG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZPlCciMCyblk2d4EnXAYlR8ZMZGskjvVbrKLnZwP4GAiEAqtm9KVejgreKiNi1PmF2%2BEVG44HIiQ3fJSLCdmmaDagqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIi4s%2BMgOgE3JKm88SrcAyiKacoYEkQP1zYh2mOXa0ErS03C0TUIoc9el5rw2b6Neh8O9G%2F05J4WoZNE8IlDEaIqVw8FL4KGYAWVyRu%2BhuyRWDih4hpl46vZncDAprRggJV0mlNotPXrkHcDBASMFGdQWZAKST70Xu9XvX8cn7vx%2B%2BiFpo8wOUOBafsSs%2Fl0Xo9fQwAjeCBQHurN%2BI9twa9Tc%2BYu3%2Fmh3nhoDGdDhVwuskueDQ9d8up%2BjzDdbLsZsBKwtzg8SLcWrBALordouE7%2Fwt5i4g25cqQrUcdggk2Vx3ndPCokUu32f5VyHPMzZSldhah5znjAehoUSOLSqTqdRzZN2HCzMxSew7rOHCTLkv4bHNzjSAc1Htq6R%2BgmPSDrnXmLTvY2p2lb%2FprIJrKW21KPqV0GKJeewD%2FwIO%2B56uJ8WzZI7%2Foh1bpwNpcYqiddnkTQ4VtcmkJ7tIyqTkBi5KOdrQD8HXQKnJxC4laOPa4j%2BJ1758m9OHkDuKUUbb6EKhNFCZnfntt4XKxs857msAbP8Och1OosWIq5x1t4bNHGvZ%2FEqucMXaURPRQqKKUjgD7nk5IZnKBeAZ1H1EnzFVpjSF6VZ4yAX7MtDPeSPcaZWqMhT%2FDpsHBhiFFaWC4DaYRtlbTcIzVIMPK%2B8sMGOqUBAWVo%2B%2FD0q7sIUtURq7oSd2XP0bOjR9lGHITxFcukICVBp%2F9F%2B5sPT4VNbTaE51J5NDsrCSiQmgz9WjkqewZEkoJivgEgxFFOMlKiPdleG72MZSuKfAc7zuqgHbBNhpH8cQ52m9P8NcT6dmmr895WL65FiNytIyqMZRluFLpYbZ%2Bh4R7o8NVIGxNNZmwdj7EFM8vFzoUpUaYHF5OKhbaaBZqQmWg6&X-Amz-Signature=5675e1eb4f253e066d22dd029cb9752b1ac189208e0cf0306a8b8b2d973ad6a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
