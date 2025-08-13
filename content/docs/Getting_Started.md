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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4VICT3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJjo17EnMpsCfaH18DgQUl6cr61nTe5OA2xgd1U2VNnAiBQrikYrXG2YWeNYh4X%2Fr8DObA9fH00CROdE6FhXxH3Air%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMwe2RFxh5YRdAu2xkKtwDa5s4HfVzbRMBYO7%2F%2FM8%2B%2BZ88FsN1jzwXy3qHmAAe%2Fkze6w4MZPFTsU3aP6L0ZQEcVJa0vIuyfFm6eo%2BtVBUrsEYtbNuVPlaTNCfwxBrxl1AZuXG4viSXC65vkS7zZ%2FUklbkenVDVLcgvZrsjSo05eKOsr7pd8U0Nm4XKnrzqaEuA8NjLaILHVue%2FUp0qXsmXjLgM1lfhXD0FfaBH14xT8sLIuDT2H7oBGJfYEGAf1Gcu3HrHnKYwVs8TF%2F3RWHM3zyyuouX6Utwe3yMWfYktY63aKcdcQcinq5KCTqlcSGvK9Kxh9J2YgkoMK%2F%2FXtI9O7yKIzG5dSrV7jaDVbVEx03Y97pWTqFwCfhGyU5nlDBpHTENC5NxoYKrfTQ8ueZopOEiEcICwWhVZvh00iKDsEsveUEu1Snzm%2FTchnKePafSv3UaSd%2F7qcxDP3C3BgEOnFNH4K8FJN9qIjGXaVJYk79UIjyRkri4enF6j1awW%2F1Oca0rMImRKt%2BBzQTqETZr7MjleGtKm5%2BcE2J5aZqX37dsmTmPuErUsl2wdx0%2B80%2FSJXSoltIB1Aua54UrX46nPh%2BVBvQqTf1ioMVfqtpkWNUJ5jMdXAS2f4w50xfN%2BKO96vmXCa8Lw8bnNDrkwiofwxAY6pgFo35cj%2BjALtDKyananYtdQLX2ghFH0ls5sFHk8Vw4xNADW2%2FXQkicD4HLYbpQTUZ8tYMwCOdX1h7yk7hbE4Pc2twm6TGN9igk1ond5C8hrkz%2BmG3BCiWLlHBCQXihTMDHw75QWvKCpbmavfu4F8uCAMg%2BcdBNzPbCWQvRVqHt4%2BkE6CCxLfZyhX6BxZ6k%2BIi78z317mhg9jmZRnwY0q7l40TJ3%2FU1E&X-Amz-Signature=c6ca2756a7d46e706a769548f01f7ff82d5eef79690b8f75bcc1e1c9ca8f4045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4VICT3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJjo17EnMpsCfaH18DgQUl6cr61nTe5OA2xgd1U2VNnAiBQrikYrXG2YWeNYh4X%2Fr8DObA9fH00CROdE6FhXxH3Air%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMwe2RFxh5YRdAu2xkKtwDa5s4HfVzbRMBYO7%2F%2FM8%2B%2BZ88FsN1jzwXy3qHmAAe%2Fkze6w4MZPFTsU3aP6L0ZQEcVJa0vIuyfFm6eo%2BtVBUrsEYtbNuVPlaTNCfwxBrxl1AZuXG4viSXC65vkS7zZ%2FUklbkenVDVLcgvZrsjSo05eKOsr7pd8U0Nm4XKnrzqaEuA8NjLaILHVue%2FUp0qXsmXjLgM1lfhXD0FfaBH14xT8sLIuDT2H7oBGJfYEGAf1Gcu3HrHnKYwVs8TF%2F3RWHM3zyyuouX6Utwe3yMWfYktY63aKcdcQcinq5KCTqlcSGvK9Kxh9J2YgkoMK%2F%2FXtI9O7yKIzG5dSrV7jaDVbVEx03Y97pWTqFwCfhGyU5nlDBpHTENC5NxoYKrfTQ8ueZopOEiEcICwWhVZvh00iKDsEsveUEu1Snzm%2FTchnKePafSv3UaSd%2F7qcxDP3C3BgEOnFNH4K8FJN9qIjGXaVJYk79UIjyRkri4enF6j1awW%2F1Oca0rMImRKt%2BBzQTqETZr7MjleGtKm5%2BcE2J5aZqX37dsmTmPuErUsl2wdx0%2B80%2FSJXSoltIB1Aua54UrX46nPh%2BVBvQqTf1ioMVfqtpkWNUJ5jMdXAS2f4w50xfN%2BKO96vmXCa8Lw8bnNDrkwiofwxAY6pgFo35cj%2BjALtDKyananYtdQLX2ghFH0ls5sFHk8Vw4xNADW2%2FXQkicD4HLYbpQTUZ8tYMwCOdX1h7yk7hbE4Pc2twm6TGN9igk1ond5C8hrkz%2BmG3BCiWLlHBCQXihTMDHw75QWvKCpbmavfu4F8uCAMg%2BcdBNzPbCWQvRVqHt4%2BkE6CCxLfZyhX6BxZ6k%2BIi78z317mhg9jmZRnwY0q7l40TJ3%2FU1E&X-Amz-Signature=322446ce1edbc7c69483d2950b00fdf15e4d5c2ec2c2c86c7a242da4e934bffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4VICT3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJjo17EnMpsCfaH18DgQUl6cr61nTe5OA2xgd1U2VNnAiBQrikYrXG2YWeNYh4X%2Fr8DObA9fH00CROdE6FhXxH3Air%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMwe2RFxh5YRdAu2xkKtwDa5s4HfVzbRMBYO7%2F%2FM8%2B%2BZ88FsN1jzwXy3qHmAAe%2Fkze6w4MZPFTsU3aP6L0ZQEcVJa0vIuyfFm6eo%2BtVBUrsEYtbNuVPlaTNCfwxBrxl1AZuXG4viSXC65vkS7zZ%2FUklbkenVDVLcgvZrsjSo05eKOsr7pd8U0Nm4XKnrzqaEuA8NjLaILHVue%2FUp0qXsmXjLgM1lfhXD0FfaBH14xT8sLIuDT2H7oBGJfYEGAf1Gcu3HrHnKYwVs8TF%2F3RWHM3zyyuouX6Utwe3yMWfYktY63aKcdcQcinq5KCTqlcSGvK9Kxh9J2YgkoMK%2F%2FXtI9O7yKIzG5dSrV7jaDVbVEx03Y97pWTqFwCfhGyU5nlDBpHTENC5NxoYKrfTQ8ueZopOEiEcICwWhVZvh00iKDsEsveUEu1Snzm%2FTchnKePafSv3UaSd%2F7qcxDP3C3BgEOnFNH4K8FJN9qIjGXaVJYk79UIjyRkri4enF6j1awW%2F1Oca0rMImRKt%2BBzQTqETZr7MjleGtKm5%2BcE2J5aZqX37dsmTmPuErUsl2wdx0%2B80%2FSJXSoltIB1Aua54UrX46nPh%2BVBvQqTf1ioMVfqtpkWNUJ5jMdXAS2f4w50xfN%2BKO96vmXCa8Lw8bnNDrkwiofwxAY6pgFo35cj%2BjALtDKyananYtdQLX2ghFH0ls5sFHk8Vw4xNADW2%2FXQkicD4HLYbpQTUZ8tYMwCOdX1h7yk7hbE4Pc2twm6TGN9igk1ond5C8hrkz%2BmG3BCiWLlHBCQXihTMDHw75QWvKCpbmavfu4F8uCAMg%2BcdBNzPbCWQvRVqHt4%2BkE6CCxLfZyhX6BxZ6k%2BIi78z317mhg9jmZRnwY0q7l40TJ3%2FU1E&X-Amz-Signature=2d5e38b11d73b7480deeb44d302690d9f4815f80a517e536f3c70faca137b0d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623OL5M5V%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe9VYxaiA7APiGwDm57o4E8mHSmqI7XUOReqNMXG7MAQIgLrZUQyJIRlZ04CV2GUjR1h3kUT9blZLi1Uwal2JUD74q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOi9EKdyV3RyNWHd8yrcA%2BvUuipnoH%2BSDzMaNI4s81GbQQiIoOCzdF9DLwnLu4I%2FDC4%2FhfCxEg4Qi%2BFumfBHTCE3toBQqFKeOGdzixVz2XE2SUCuGHIeuEx%2F3G8hypQtI26SfAhcnKUn0oHiXRsKQUIBAP3ffElDfBsEnCvmZ7PslX%2FTNS3UXnwGJPBXYC9oKDhkVsNbrRn7PTfUDJbz%2Fx8g%2FAqQCpJ4WxGBInbsDF2FbkAEKRekoT%2FE1N3kcygFhDTDNvdWjgX3uSf0R7oaIihfZP6XV%2BHw0pwcL5shN9ibADSFvWrcd1Z0Rjkg0Z%2BFZdMlAvcPul48wCmTd2h1sE%2F80kShyYa23nEz6OcV1pP5RPPem%2F3fNL9tQhxW13G%2FovPLTh152fcrEDUWShe6bAFzJSqAMEVdwcQRvDlExo34XtUSN2OcYa%2FJNFeE%2F3mO9juNpDDiGxj7WXgBEv%2B89g%2F0r5mZRP777gO3yrmsB%2BwDA0ATFi5Sny4aS9PM%2FTJimzqDjeGOKXDoJsaaixTsDSAER1qQ4z6eT0L%2BN2DScX7fL9%2FgvrcBC613CzVu4Q73TPFRR6%2FU%2FfPglDXqVDfIjkiOS%2Fxg5EDNnn6a4DkHmzOS10S%2BblqgEQt3D0xri3nhjF1PGA9al5edxO%2FyMP%2BG8MQGOqUBSSSQVUHR7U8iQU6yRLj%2BZ4ORImyswxy93WWYIAwfsWgoyqLX2qQVn1K6lmxeiJWm8MhIDnz3XjA6smFj7SrEldm%2BgsLGRtAerIk8cSbs3Jb6cHGBWbgLh1Z5RbgEBaOy7WYl%2FkwCIakdyQWarOZBh5IhZwccnEdyqM%2BQPce8GYbH0G82wzuWy2M0n6XlqsjvycSR6fe%2BXHUtrOiPswSq7vn86iRx&X-Amz-Signature=c3214b5c020fd2b93269c89af4b338cdb4200b04d3eabeb07bb815f2b6adaa6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIBLIUI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDehQ0oBOGUUJTP6bg72meOJU5pbOXD8X%2FQp5OF4LidiwIgUbVdbhofFQML5%2Fu68RA4NEPpgS0h%2FMhlqXvwGzISb2cq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAdj9EppJzd9lyMNbSrcA4HC%2BN3NLjCG6Dj5iAKAnMZ0LLq%2BbIQYZwaWeZNfHqt9ZYMvcTfpxIOUOZGHgfe52Pkxp0e9t1D0D2ADwLKylgu%2BFc0K3FQso4UVEFPMXGvukV%2BjwfBzC20ZZNCWJlwUT%2BcypNAn64VRtHcEf85fTIoe8nRWfV3myjI14wekwtv%2F9iHzIwxdpN6yBwX91LW6a2mY%2FnAwPrwT0D6Vmd0wdkXYd4nZwxcWvovHvKaxcknuvirBydCwqmoyzICm2tHFPbrNYYfA5s7sxLXqHk2uY7unfJqo89lUzmUHaA4fR3CUk8p%2BG8zikD2Z7bwYoJGULXTTDa2kr%2Fb8xAxJYnXxX3UDQTG7GUScrY2QVjXLBgNa3ZaQT62tPEGBvaABL%2FHx4FHlcg6LOKPSxmV1vGxselVZg9dYLseMOVTlN8ySkFzkEYgNf4jf4a4qmMQS14yuQoJ4kPsT%2FjNcAy3088wdRtYu%2Bkci%2BukXiaEkxTDmW8Co1Iu1lA3JyvmeDXqAXWms7WdtJmyn9XDNAxN4NjX8nuCIsQnGI%2FCSBhkuyFRYndGvf89yvbNkGAlCL3uYrr%2FNo2gMT%2BAVeJ%2FYgFBnax9YXNYjkepv%2Bl2xLJh1V3wjw%2B38SXK660ai2uWXYb%2BeMIuH8MQGOqUBHktI8si7FwRSci3Xmy2w%2F2g6tj7g4jVZAS3ivTfApM%2BJGGoJFa9AeEzBUYZ%2FH%2BZn21AwiL1EcaJrf5c3tCZlfo3DWEbLLuzoJkVdDPyf4bZhLVe%2BqgRRbPibisArJpCYIfjsafOw0KAgg5iqR09BpZ4ps66I%2BInhK7oZDdGup9ssagCKPUDjsnocyuCKPBZsjSNfooL021op2%2FH1rR3%2FWB9pP7YP&X-Amz-Signature=d975f0b6587e91ad69d7afff5159724ff3839ca6ea33dd9ccb5b2dff9a38ce11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4VICT3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJjo17EnMpsCfaH18DgQUl6cr61nTe5OA2xgd1U2VNnAiBQrikYrXG2YWeNYh4X%2Fr8DObA9fH00CROdE6FhXxH3Air%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMwe2RFxh5YRdAu2xkKtwDa5s4HfVzbRMBYO7%2F%2FM8%2B%2BZ88FsN1jzwXy3qHmAAe%2Fkze6w4MZPFTsU3aP6L0ZQEcVJa0vIuyfFm6eo%2BtVBUrsEYtbNuVPlaTNCfwxBrxl1AZuXG4viSXC65vkS7zZ%2FUklbkenVDVLcgvZrsjSo05eKOsr7pd8U0Nm4XKnrzqaEuA8NjLaILHVue%2FUp0qXsmXjLgM1lfhXD0FfaBH14xT8sLIuDT2H7oBGJfYEGAf1Gcu3HrHnKYwVs8TF%2F3RWHM3zyyuouX6Utwe3yMWfYktY63aKcdcQcinq5KCTqlcSGvK9Kxh9J2YgkoMK%2F%2FXtI9O7yKIzG5dSrV7jaDVbVEx03Y97pWTqFwCfhGyU5nlDBpHTENC5NxoYKrfTQ8ueZopOEiEcICwWhVZvh00iKDsEsveUEu1Snzm%2FTchnKePafSv3UaSd%2F7qcxDP3C3BgEOnFNH4K8FJN9qIjGXaVJYk79UIjyRkri4enF6j1awW%2F1Oca0rMImRKt%2BBzQTqETZr7MjleGtKm5%2BcE2J5aZqX37dsmTmPuErUsl2wdx0%2B80%2FSJXSoltIB1Aua54UrX46nPh%2BVBvQqTf1ioMVfqtpkWNUJ5jMdXAS2f4w50xfN%2BKO96vmXCa8Lw8bnNDrkwiofwxAY6pgFo35cj%2BjALtDKyananYtdQLX2ghFH0ls5sFHk8Vw4xNADW2%2FXQkicD4HLYbpQTUZ8tYMwCOdX1h7yk7hbE4Pc2twm6TGN9igk1ond5C8hrkz%2BmG3BCiWLlHBCQXihTMDHw75QWvKCpbmavfu4F8uCAMg%2BcdBNzPbCWQvRVqHt4%2BkE6CCxLfZyhX6BxZ6k%2BIi78z317mhg9jmZRnwY0q7l40TJ3%2FU1E&X-Amz-Signature=77d4e2c574558964c5f17597e17cab5d6682b615eb889b83d7f70f57fb165065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
