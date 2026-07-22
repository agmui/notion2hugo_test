---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D3JBDP4%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCCDJd5%2FCTBgnCswPsR%2Bb9Uhfd7UogQtPvUlFgsEQdw5QIhAIRb%2B%2F2ZVvQatkybEg6YQt5bDqBfw8OXWM41SW%2FmNgxWKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxotAzhH0Rh3YEZf14q3APbE2ZuTfZYgRmHQPRlKf%2BMiEImcTkU7HFYhGWZA7JtpHShnBArxtILBSJ1agSCm9W%2BoHME11VBucAVk9KBWhiFaVSi7XTMN2h9Erv2aYIc1VY7d3yUGVc%2B6aWYc7qBkx5KkDGLJmpvKSp05H0c9kykK%2F1SAHjoHeOqidIjzOP%2Fv1a1OhMyPXfLrxoAs86t1ywleIKxDkqEZHhJuP6oQRw%2Fmz8TB9zuWoQDILngCQoB5GO%2FkQr2zvrpw4nIoSqFo59Y%2FUiMWrD0vP5hWcuzR25TsWTxeILP%2B2t1r3dMpCRb3cR4yn5gya%2FJX0Ax%2FLME725mBJzfyFJU3%2BCOWPIrODD3ib7YG7o%2BBiyqQYFqvpPihV99rEuY1QEJYfeubGJSXcb5sbKVXHPNt1AvBsCknkJqOinyTdQRHniEgF1PqrKwkLT7MKufgD6Cj7uVpWrFbHWXmUhCwX0TB%2BOwp%2FNEDcMSRm6WCtpMxMAlIEh8FLLqixVsDVKWxH4UiTBGvZUo1Wxz7jctHspRhWUvHlc6FI%2Fc2n1YlxpqZJHTRTc8tiaGFwQhAUACCeWlrccti4pnVEQyIDXOUMwEshhRc83rOf%2FqS0qsMYdagUBziF8xSna4uOd00VOsUtNPGceuYDDMw4DTBjqkAW72v8iMD8YigUdh8IupuLQR34mP8jukDBrB1fkPXign3RItRB9nSHsL2U%2BlHB8CHRJ95sFZdKusuHCYvrRTAoAenvMZJsEXmFwxVQOIAdRdQ%2BDV3gkq6iaEmmi9DVCveLr29EGvW6%2BV4wFpZ1iNC82vVqXW4iZrnGJLerkO4q%2FsITvjrZ1WfaMqaAZDQFNa57ZrfG54DifAWpI53vg3F9ykZjoW&X-Amz-Signature=cde5286a0c43e945384854c0d4d5d55e63290d90192b04b87d120768febca1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D3JBDP4%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCCDJd5%2FCTBgnCswPsR%2Bb9Uhfd7UogQtPvUlFgsEQdw5QIhAIRb%2B%2F2ZVvQatkybEg6YQt5bDqBfw8OXWM41SW%2FmNgxWKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxotAzhH0Rh3YEZf14q3APbE2ZuTfZYgRmHQPRlKf%2BMiEImcTkU7HFYhGWZA7JtpHShnBArxtILBSJ1agSCm9W%2BoHME11VBucAVk9KBWhiFaVSi7XTMN2h9Erv2aYIc1VY7d3yUGVc%2B6aWYc7qBkx5KkDGLJmpvKSp05H0c9kykK%2F1SAHjoHeOqidIjzOP%2Fv1a1OhMyPXfLrxoAs86t1ywleIKxDkqEZHhJuP6oQRw%2Fmz8TB9zuWoQDILngCQoB5GO%2FkQr2zvrpw4nIoSqFo59Y%2FUiMWrD0vP5hWcuzR25TsWTxeILP%2B2t1r3dMpCRb3cR4yn5gya%2FJX0Ax%2FLME725mBJzfyFJU3%2BCOWPIrODD3ib7YG7o%2BBiyqQYFqvpPihV99rEuY1QEJYfeubGJSXcb5sbKVXHPNt1AvBsCknkJqOinyTdQRHniEgF1PqrKwkLT7MKufgD6Cj7uVpWrFbHWXmUhCwX0TB%2BOwp%2FNEDcMSRm6WCtpMxMAlIEh8FLLqixVsDVKWxH4UiTBGvZUo1Wxz7jctHspRhWUvHlc6FI%2Fc2n1YlxpqZJHTRTc8tiaGFwQhAUACCeWlrccti4pnVEQyIDXOUMwEshhRc83rOf%2FqS0qsMYdagUBziF8xSna4uOd00VOsUtNPGceuYDDMw4DTBjqkAW72v8iMD8YigUdh8IupuLQR34mP8jukDBrB1fkPXign3RItRB9nSHsL2U%2BlHB8CHRJ95sFZdKusuHCYvrRTAoAenvMZJsEXmFwxVQOIAdRdQ%2BDV3gkq6iaEmmi9DVCveLr29EGvW6%2BV4wFpZ1iNC82vVqXW4iZrnGJLerkO4q%2FsITvjrZ1WfaMqaAZDQFNa57ZrfG54DifAWpI53vg3F9ykZjoW&X-Amz-Signature=ab9785be8702d70819a2ae3911115911f6d34845eed18c9ff5d5d726fdbe3f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D3JBDP4%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCCDJd5%2FCTBgnCswPsR%2Bb9Uhfd7UogQtPvUlFgsEQdw5QIhAIRb%2B%2F2ZVvQatkybEg6YQt5bDqBfw8OXWM41SW%2FmNgxWKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxotAzhH0Rh3YEZf14q3APbE2ZuTfZYgRmHQPRlKf%2BMiEImcTkU7HFYhGWZA7JtpHShnBArxtILBSJ1agSCm9W%2BoHME11VBucAVk9KBWhiFaVSi7XTMN2h9Erv2aYIc1VY7d3yUGVc%2B6aWYc7qBkx5KkDGLJmpvKSp05H0c9kykK%2F1SAHjoHeOqidIjzOP%2Fv1a1OhMyPXfLrxoAs86t1ywleIKxDkqEZHhJuP6oQRw%2Fmz8TB9zuWoQDILngCQoB5GO%2FkQr2zvrpw4nIoSqFo59Y%2FUiMWrD0vP5hWcuzR25TsWTxeILP%2B2t1r3dMpCRb3cR4yn5gya%2FJX0Ax%2FLME725mBJzfyFJU3%2BCOWPIrODD3ib7YG7o%2BBiyqQYFqvpPihV99rEuY1QEJYfeubGJSXcb5sbKVXHPNt1AvBsCknkJqOinyTdQRHniEgF1PqrKwkLT7MKufgD6Cj7uVpWrFbHWXmUhCwX0TB%2BOwp%2FNEDcMSRm6WCtpMxMAlIEh8FLLqixVsDVKWxH4UiTBGvZUo1Wxz7jctHspRhWUvHlc6FI%2Fc2n1YlxpqZJHTRTc8tiaGFwQhAUACCeWlrccti4pnVEQyIDXOUMwEshhRc83rOf%2FqS0qsMYdagUBziF8xSna4uOd00VOsUtNPGceuYDDMw4DTBjqkAW72v8iMD8YigUdh8IupuLQR34mP8jukDBrB1fkPXign3RItRB9nSHsL2U%2BlHB8CHRJ95sFZdKusuHCYvrRTAoAenvMZJsEXmFwxVQOIAdRdQ%2BDV3gkq6iaEmmi9DVCveLr29EGvW6%2BV4wFpZ1iNC82vVqXW4iZrnGJLerkO4q%2FsITvjrZ1WfaMqaAZDQFNa57ZrfG54DifAWpI53vg3F9ykZjoW&X-Amz-Signature=9f810d25650081b80deb3319a1263c159a6135e3870e73d37212466dfb1f031b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZOCXN6%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC1y%2Bv4nLbHldFeVmXdC2hkskC7QQ%2F93oxWoJCZSTvHKgIgYDMtbXzqZvIbmIw5LETeXQqn%2BCfW5dAfJlj5%2B%2FJ2iPoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT6FycHBH1bFcWhACrcA%2FJGsQvv55aBADK4cW1jO8P2F30Xvw2yBkjdtqAMIEvvKAr8NgezVhJQKKN0SSmMkmdVvGljJ6hpBgcNqW9EDdGGtpzuN3dX9RjZXdjWIuVl%2FOFXBCYhnmNH8EPQtyLPeOzpvktoV30r48UEvd0hjIE3d1h%2BtDCBm%2BAyM4BtFWCasg213gS7%2FrYkdtJIYGBZz66KZKZjje1iUkDuSS4lQcbgZt3L4wpD0WIdF8bID%2BF2htrGS3M1ZHmXWisEQbvx0XnMquw4UCQKnvTvuOw4FP9XKud1dvjioGLI3LbMYzL38ucRonunGTyusdIm5B5z6tlnJvcuXdoopj%2B7mnBpUs5w3Nao%2BK2phhI%2FbLmNJV57iSMVJBaWgdzi4qdX7ZeeltIBV5ewRAX46KTRkyO%2F22TNSck%2BLS8c08idCFgGl9igPmT4oJvwGkXe3f3y0jeeLoCDA06fd8gTlK26cJUk5XOR57UIifqACnYXaWPEx%2BJLEv1WdtOynrmSvOhAb03TSUpsZpxjhj1byUGHT%2FuOv4IKe0kJwxVXNVtmXIk%2BLdkDNgK5lQ%2BYuz4WQM3QVbiDDoPoIY8HiIFjviXbx%2FlQEjhLvK6jfcwEVBzkQ8T3sDWnpzVNwg45Mutjj%2FleMNzGgNMGOqUBP99jtaxCVcYdSijaz9Lk76FKntwrKtMbByhbWHW6R7wl%2FFSGsTmUAH2mrfdt1nYKjJxHsbWe%2B609Nxa15xWbk0YV9rhVuTIkHSHHd1MsVaMFuaY9R7a2UbGG9atAQBPaWTj5GpxW11%2BHQlVEeIss1rcny9WJNMTHyxGS8a9IWoVQhK%2FK4Ni8gZ1kj4SCuMcYFKYvCSihh61VA3%2BVg0wF%2FISh9TE%2F&X-Amz-Signature=fd4d75053152005cea217f77d1db61b19f78b90bea806db0e82166ca16f8417d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LC6JEIC%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBMXaq8sVwqTiHwgGVM0RUBxhifvIqGic6l1cbIwMqKBAiBEYAfjmsiKlKVPoIwsgsqUG0Dczbmmr56hwPbj0x1oDiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhQ3n1Mkk70ka1m9KtwDgfABEBu9WiOGQcuiFKqlwAG8Z3uzXkqsDI7U3BhtlDHR9iV28gkWVHkS9mQ%2BRjA%2FSeKrHs0M%2B%2BkqEBrv%2BtpxOY6vl0e3vdwi44eK9Ii1swOKvz4FFG0za3tfuUMy3sjnwzPP8bw%2FxUHs9%2FPfOpxYjd7Et0M8LwrmVeOvCwM87LthqspyGBv%2Bs%2BuVZnU183eE4RU54j6d1fxBSBMKPz5crhE2egcKPAGbLPlrh5IzYqV9jArrrts3gLpVVQvZGs3vJu3i%2Bl1DCoCQd2imY6tIZ8rHXrL9%2B1HWwAow5CD6%2FMUne0ujH7Fc9XYB75nH0qlEork5UPnkvp6NFvBRzHGzzmhGiDHW0WlMkyf8PoIQaUw4tuieT31fo1NuHaQUYkV3%2BsX0S3kHtcK0KBt4wy8XIejaBDBaEPe60SUPKkJbJY1uypD3KMWA4FObFYlgXJKkAdf5w8e5KOrKyL%2F84v46cBbgPpIqK8%2B0Fgx7tJxwhOvfI9x7a9eYjLxsfvad4mssUtb1YIOMHXzJc2Z5xuOJgHGa1MyGqr7ggLs85mP6oHOuo1rQfhQyAKKJa0nTIlVqSaIu2Rmiv7lAhIE4V1UiuQCMPNkJ12JfAPQFeqaYjZaJV%2Bn%2FBKYKycWjIegw5cOA0wY6pgGCJqvZzndVR6PlpGyx9Qt3iMQIYTIRGHM6WvQkqkwQJ%2B2CZMbQFtmm913y%2BKF4y2%2FVLSAItq5n6VRCfpUMAGrvBfnhYKSbLutzxfcPfjE8iz2HidAyKLdUBbYMYX3F2ctw803L8zWZhBbEMi1en7ZKfCAGH81hZqcCl2JflyscElFIGWbOyJKEeFSeKZAeghVq9EjtLTpKER3eTNiG3CWrJ%2Fvgj7Vr&X-Amz-Signature=fcac8a48f996d3beb5d529ea72591a2ed2a826df779b535857641a379ca290cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D3JBDP4%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCCDJd5%2FCTBgnCswPsR%2Bb9Uhfd7UogQtPvUlFgsEQdw5QIhAIRb%2B%2F2ZVvQatkybEg6YQt5bDqBfw8OXWM41SW%2FmNgxWKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxotAzhH0Rh3YEZf14q3APbE2ZuTfZYgRmHQPRlKf%2BMiEImcTkU7HFYhGWZA7JtpHShnBArxtILBSJ1agSCm9W%2BoHME11VBucAVk9KBWhiFaVSi7XTMN2h9Erv2aYIc1VY7d3yUGVc%2B6aWYc7qBkx5KkDGLJmpvKSp05H0c9kykK%2F1SAHjoHeOqidIjzOP%2Fv1a1OhMyPXfLrxoAs86t1ywleIKxDkqEZHhJuP6oQRw%2Fmz8TB9zuWoQDILngCQoB5GO%2FkQr2zvrpw4nIoSqFo59Y%2FUiMWrD0vP5hWcuzR25TsWTxeILP%2B2t1r3dMpCRb3cR4yn5gya%2FJX0Ax%2FLME725mBJzfyFJU3%2BCOWPIrODD3ib7YG7o%2BBiyqQYFqvpPihV99rEuY1QEJYfeubGJSXcb5sbKVXHPNt1AvBsCknkJqOinyTdQRHniEgF1PqrKwkLT7MKufgD6Cj7uVpWrFbHWXmUhCwX0TB%2BOwp%2FNEDcMSRm6WCtpMxMAlIEh8FLLqixVsDVKWxH4UiTBGvZUo1Wxz7jctHspRhWUvHlc6FI%2Fc2n1YlxpqZJHTRTc8tiaGFwQhAUACCeWlrccti4pnVEQyIDXOUMwEshhRc83rOf%2FqS0qsMYdagUBziF8xSna4uOd00VOsUtNPGceuYDDMw4DTBjqkAW72v8iMD8YigUdh8IupuLQR34mP8jukDBrB1fkPXign3RItRB9nSHsL2U%2BlHB8CHRJ95sFZdKusuHCYvrRTAoAenvMZJsEXmFwxVQOIAdRdQ%2BDV3gkq6iaEmmi9DVCveLr29EGvW6%2BV4wFpZ1iNC82vVqXW4iZrnGJLerkO4q%2FsITvjrZ1WfaMqaAZDQFNa57ZrfG54DifAWpI53vg3F9ykZjoW&X-Amz-Signature=757416f6f961b0572a83439dcfea083dffc3ec238904882ce09cb883beba78b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
