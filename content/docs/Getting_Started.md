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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLBRLS6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCtjSXLTgADU9ZM9VcGhOctUR96OCYDbD9J8mawAeyjPQIgCB8ZoJw5jsx6hG2gesEnns2zGcB5XTKEq8DusjRHKhkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJjXKg990N41PjzaYircAysueSlvTUmpFgh2IkQT1UNs7In4Vh7281xQ0%2BswWogU9QMw6kafgZr7UQDWSf8OAwHenmGPkeP3zUr1US%2FpOmOixlrHvudYFvQUq438fp0Xip1ymGE6tnrqVVlH1%2B%2Fc4cy0mKlURLVJYCInGr%2F7x0VwSQJl42Sn6cEWpK33tg7gOxqhgMGxe%2FsG4XbNUhN8%2FiZGkgg2Q4e0NuA8eUu6YfcBhdYgCw5yWpfwnVQhW7U3R1Ctsoj9Y%2B1o53aSi%2B1MVNTaSohJRZl8CpPP7YllNSbFaQdgXhOyAYu5sqirpJSIud2WrpnjqZxJCpo1ZvgYXwDBc0CFZjBf%2FddCCab6hS5%2BLb7wu6wOqRUMB8HPWnmRP6lBb6MtyJH4CcsTcNlajdoT24YNE%2BtO99kelLuUrgT4o%2FNEMNNUeJkiEMYlrKyfL3rPAaMFVlQzWzVGE03Zck4lZ5HyOE4WsFuPqgJ0IMAEZUAUixCAL%2FWASe7f2HmIv801FBdNqQ9SUAI43h0HDgDiqOdHoYBlVogPq9yKLBoVGAYDYbzKNNZysd10LnhSkPAww1dVVg1O4tS5tknBK46CIyV0CLj07hhEkQ8zzaoehzE5N%2FlNWxShSy6G7eAqm%2B2KKKbZ0Arw2DpMMMv3gMUGOqUBs%2BcbM3siYM1roJeZ605AK4AUjN5l%2BJ0fI9vvB6E4hdmrIgchml%2BBLb6G%2BwDaeU%2B6ICofzaI0lM%2FwFtXT2tjgncFUMPn1kL1s%2FkoksNZVDOcRuWd2EhMAkTD49rnaujkLC7GhFjoVrXlzmt%2BquvEFJ9QH4p6R3n6CcIF4%2BpvBY192NPvaM87SYVxSD7yXcP1PmvxnrDvPZFbEgQutTqJVVzQtVC2j&X-Amz-Signature=23cac573dd7c81bea6278a4808b308a1afa10f243c2742d04efb7d23ae13b79b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLBRLS6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCtjSXLTgADU9ZM9VcGhOctUR96OCYDbD9J8mawAeyjPQIgCB8ZoJw5jsx6hG2gesEnns2zGcB5XTKEq8DusjRHKhkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJjXKg990N41PjzaYircAysueSlvTUmpFgh2IkQT1UNs7In4Vh7281xQ0%2BswWogU9QMw6kafgZr7UQDWSf8OAwHenmGPkeP3zUr1US%2FpOmOixlrHvudYFvQUq438fp0Xip1ymGE6tnrqVVlH1%2B%2Fc4cy0mKlURLVJYCInGr%2F7x0VwSQJl42Sn6cEWpK33tg7gOxqhgMGxe%2FsG4XbNUhN8%2FiZGkgg2Q4e0NuA8eUu6YfcBhdYgCw5yWpfwnVQhW7U3R1Ctsoj9Y%2B1o53aSi%2B1MVNTaSohJRZl8CpPP7YllNSbFaQdgXhOyAYu5sqirpJSIud2WrpnjqZxJCpo1ZvgYXwDBc0CFZjBf%2FddCCab6hS5%2BLb7wu6wOqRUMB8HPWnmRP6lBb6MtyJH4CcsTcNlajdoT24YNE%2BtO99kelLuUrgT4o%2FNEMNNUeJkiEMYlrKyfL3rPAaMFVlQzWzVGE03Zck4lZ5HyOE4WsFuPqgJ0IMAEZUAUixCAL%2FWASe7f2HmIv801FBdNqQ9SUAI43h0HDgDiqOdHoYBlVogPq9yKLBoVGAYDYbzKNNZysd10LnhSkPAww1dVVg1O4tS5tknBK46CIyV0CLj07hhEkQ8zzaoehzE5N%2FlNWxShSy6G7eAqm%2B2KKKbZ0Arw2DpMMMv3gMUGOqUBs%2BcbM3siYM1roJeZ605AK4AUjN5l%2BJ0fI9vvB6E4hdmrIgchml%2BBLb6G%2BwDaeU%2B6ICofzaI0lM%2FwFtXT2tjgncFUMPn1kL1s%2FkoksNZVDOcRuWd2EhMAkTD49rnaujkLC7GhFjoVrXlzmt%2BquvEFJ9QH4p6R3n6CcIF4%2BpvBY192NPvaM87SYVxSD7yXcP1PmvxnrDvPZFbEgQutTqJVVzQtVC2j&X-Amz-Signature=0abc6523f825dce192c7557769a272e88095460720c3f09d03cd41c277d0d223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLBRLS6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCtjSXLTgADU9ZM9VcGhOctUR96OCYDbD9J8mawAeyjPQIgCB8ZoJw5jsx6hG2gesEnns2zGcB5XTKEq8DusjRHKhkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJjXKg990N41PjzaYircAysueSlvTUmpFgh2IkQT1UNs7In4Vh7281xQ0%2BswWogU9QMw6kafgZr7UQDWSf8OAwHenmGPkeP3zUr1US%2FpOmOixlrHvudYFvQUq438fp0Xip1ymGE6tnrqVVlH1%2B%2Fc4cy0mKlURLVJYCInGr%2F7x0VwSQJl42Sn6cEWpK33tg7gOxqhgMGxe%2FsG4XbNUhN8%2FiZGkgg2Q4e0NuA8eUu6YfcBhdYgCw5yWpfwnVQhW7U3R1Ctsoj9Y%2B1o53aSi%2B1MVNTaSohJRZl8CpPP7YllNSbFaQdgXhOyAYu5sqirpJSIud2WrpnjqZxJCpo1ZvgYXwDBc0CFZjBf%2FddCCab6hS5%2BLb7wu6wOqRUMB8HPWnmRP6lBb6MtyJH4CcsTcNlajdoT24YNE%2BtO99kelLuUrgT4o%2FNEMNNUeJkiEMYlrKyfL3rPAaMFVlQzWzVGE03Zck4lZ5HyOE4WsFuPqgJ0IMAEZUAUixCAL%2FWASe7f2HmIv801FBdNqQ9SUAI43h0HDgDiqOdHoYBlVogPq9yKLBoVGAYDYbzKNNZysd10LnhSkPAww1dVVg1O4tS5tknBK46CIyV0CLj07hhEkQ8zzaoehzE5N%2FlNWxShSy6G7eAqm%2B2KKKbZ0Arw2DpMMMv3gMUGOqUBs%2BcbM3siYM1roJeZ605AK4AUjN5l%2BJ0fI9vvB6E4hdmrIgchml%2BBLb6G%2BwDaeU%2B6ICofzaI0lM%2FwFtXT2tjgncFUMPn1kL1s%2FkoksNZVDOcRuWd2EhMAkTD49rnaujkLC7GhFjoVrXlzmt%2BquvEFJ9QH4p6R3n6CcIF4%2BpvBY192NPvaM87SYVxSD7yXcP1PmvxnrDvPZFbEgQutTqJVVzQtVC2j&X-Amz-Signature=9323041c537786c6c91b1de5e511cfc08ed57a636eb9c8bb7b8b84eeb5ad0653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E4DHVTP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHms6ZqyQGV0NCsvPcwiVkn6ckX3R1MSI%2BX33SoiKWDvAiB0ZHYeKUMlT4OCWVQEa1AeJ0PLZNTAumOFYbXggESTOir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4JGghfVRn%2F1syrL3KtwDVAiWpXu7aLHDTPR%2Fi%2F1tJ6NBhDreO2bXkIgVYlOM31V8yRwHgJ95OUwxjgtbh%2BF9dxUcK2y%2FlKt0FnN5v1qcF10ChdK%2FYzpmrcv0POXL07WDSFVhRdiiyQZSHZkl3cWMyw4v0junjPoK3Xmq9cy%2FLKULxW14TFBZu568M9qW963pSHreIceJI7sdSbk7%2FRzguxqguPvbEk0964ztGC%2F6SGPsM%2F3X8JTRzlFnModL74HpvWEKqFdaheh86Y5cuSB7RZqsDsP1JxjUGv7VGTvr1%2FZhEh2cqZpiZWWM%2BOxPPWLbh5vkS7OCmIo28s0VKx9krwjK5MQazVNSqtoI%2Bi7tTapChwffsxjUZpRhLsmpAL%2Fd5Yr3BTCS29aPq0x9Ct1qCRCnqc6d5Ey060gGKQ9MsfEUJumIB2b5%2Bj52KNWxLJBp8MqLhsSbPka1NvHd5iCR6GUXjKR7lBJxRCSrDWxDkVLJTk%2FZhM3AMdAcMGyLoaWdIipWbWKItTVgzDwJ8Ttc9I1I3HVsAaJOpGkHVdCbVMWnSilzXEiCZ2Zya9NJXhN2av7ZfrG%2FVlHuS0jhlf%2B7FEVsAMVGM6l8mVMVfL4v%2Ff7ANO%2BT8VNedk8erfqkjDA74UOUgMirvWm57l4w4feAxQY6pgH5dNcs8ZySE6%2Fd6PgOcXaJIdK7pBg%2FPabld67LVwc9SbsmCdU2z9CHu%2FOy9%2B7RBgtxb5kvG1LtOlviDiXKKI6J4ou%2BWkxwoVkA5xlV6fWo1FUMG6g9Ub5tt1fqp4bQajYpQgz%2B9VSfpXVh270APV0yc1bYKWyiZkklTcojzxNonjFBYpC86xRhdAyNW6y6IrrkElDxDiN2l5dqWNux6ijwiQDNQ3Cb&X-Amz-Signature=9e977734d83ef0714a3e4bd07c1a708e86b4b8db86e25c83a0b7710d9c595338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677PVWPXI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCfpgulXpGpUSfsVGqPTmR2AtzWVPtVMc%2BlXa%2BqojT9WQIhAJX%2BicKz%2FFXaVA%2Bspgd3g%2Bfc49kxkLon1mLkipF%2BmD8QKv8DCHEQABoMNjM3NDIzMTgzODA1Igx596eaoQVlj%2B8O62cq3ANB8WzqLYmowd%2F2rYTv%2FgKUa%2FrzaXvAJLBUULBsmdPxUamgqvqRYDumylUj9Fh%2ByOv5QR0j3GAfLfG7S2xoxsg%2BKXfa0j%2Fq9jt%2Fu4pTE%2Bhd6ZB0SU3OLf5IPSmmiV9FeQsSadbXFYcG1rlVZ2EGj3dvd7%2FgXA9VNcH93Pl5UkvmLLQuMIYDDK9cYcIs%2BD3v78cmHKleNFhWv6hnL5DLrllDcx8KurF1BBQyMJrLl6%2FjzKq6kuKfOK9kGcP3VXybrajcNSEEGB3tP4iQJJBp%2BB9lI7uPFEX4uBFYYed9zjfzhrEo88hOnaUgu3AdzpdnS3UIvZaN9rI61pgC81x9No2rZWFm5DB32OUhL5Pmk0KfQkUhNEPESFid3Mnb%2BJlikTGma29%2Fu2X1Kfqq%2F3qAfClIrHZ0zzMLw1NFOD6vMgfmTJD9LsbZGMapOquuoZseycO6A0QSO94lXSNeybuoiQdycAgce91w9cBPUGn9nfUXhqE2G%2Ffn6uL%2F2Wh3avtM5lNiCTJIzDSO3ux9ljy5wTMOieN%2BYc7he42DWZp3HBvF6VJ6wgUVlJx%2ByoWYx7ncfRtGM3248Zcy7gqOP1FXwOr5l%2BtO7v6se2KUbeBttTfU6vb1CDUyFKg8utO70TDp94DFBjqkAdUWAKpP%2BF9%2FNQST1q5hDqId31wDuiL8PVljJbYMIV9TblicWsMiA7n9kgGsLLT9vbcJDdiD8YMn6SdHkhmiFNoX%2FwxNLAZQ%2BHjIZa3m%2BqcESwGsN8Lqhj0NjJ329y%2FQ%2BPHGOJX8k5%2F2QBHJhTbtZrtWyBm2D8iRDJqbnwaD%2F5TT4qO92BzbH8CFakQMRCfXIL5w1VVEusRIp%2BjncsSQU0kMJar3&X-Amz-Signature=455f1cf1ee8a0abf0e5df2063597024ecff36bd11d54a772480d8b6499d8b9a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLBRLS6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCtjSXLTgADU9ZM9VcGhOctUR96OCYDbD9J8mawAeyjPQIgCB8ZoJw5jsx6hG2gesEnns2zGcB5XTKEq8DusjRHKhkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJjXKg990N41PjzaYircAysueSlvTUmpFgh2IkQT1UNs7In4Vh7281xQ0%2BswWogU9QMw6kafgZr7UQDWSf8OAwHenmGPkeP3zUr1US%2FpOmOixlrHvudYFvQUq438fp0Xip1ymGE6tnrqVVlH1%2B%2Fc4cy0mKlURLVJYCInGr%2F7x0VwSQJl42Sn6cEWpK33tg7gOxqhgMGxe%2FsG4XbNUhN8%2FiZGkgg2Q4e0NuA8eUu6YfcBhdYgCw5yWpfwnVQhW7U3R1Ctsoj9Y%2B1o53aSi%2B1MVNTaSohJRZl8CpPP7YllNSbFaQdgXhOyAYu5sqirpJSIud2WrpnjqZxJCpo1ZvgYXwDBc0CFZjBf%2FddCCab6hS5%2BLb7wu6wOqRUMB8HPWnmRP6lBb6MtyJH4CcsTcNlajdoT24YNE%2BtO99kelLuUrgT4o%2FNEMNNUeJkiEMYlrKyfL3rPAaMFVlQzWzVGE03Zck4lZ5HyOE4WsFuPqgJ0IMAEZUAUixCAL%2FWASe7f2HmIv801FBdNqQ9SUAI43h0HDgDiqOdHoYBlVogPq9yKLBoVGAYDYbzKNNZysd10LnhSkPAww1dVVg1O4tS5tknBK46CIyV0CLj07hhEkQ8zzaoehzE5N%2FlNWxShSy6G7eAqm%2B2KKKbZ0Arw2DpMMMv3gMUGOqUBs%2BcbM3siYM1roJeZ605AK4AUjN5l%2BJ0fI9vvB6E4hdmrIgchml%2BBLb6G%2BwDaeU%2B6ICofzaI0lM%2FwFtXT2tjgncFUMPn1kL1s%2FkoksNZVDOcRuWd2EhMAkTD49rnaujkLC7GhFjoVrXlzmt%2BquvEFJ9QH4p6R3n6CcIF4%2BpvBY192NPvaM87SYVxSD7yXcP1PmvxnrDvPZFbEgQutTqJVVzQtVC2j&X-Amz-Signature=65bcb66c29bc6bbe11ba539e18d97006c2d53d506af52c53903566e30fe80f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
