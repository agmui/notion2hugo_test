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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTT5VVO%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIC1b%2BzC3OGLzbdi1lMKkIc2YEDAAbtS6kilWE9qBw3ZLAiEAwz2MbBoivGmFp1scyrf9MTq14ucebZhvu2EZs%2BpOXPkqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKort14nDdzHu5A%2FwCrcA513fe8OtuGoCiZdUZbcuHcz6gkVvQSkAcMZMWMc8nzNL5WMzfi3k0en3hWm30cboQgx8y8QkWqWj5zkD3BrI5rJi8%2BDNPHhXjhXnGHtSaUZmveBH3fOvEFi%2F9nTN2PJEwKGPuWXV0c0Dodpp7Lnq7Gz1e8w9Ybyh8YHrMa6tYl5wT55bFgsW0%2Be50CNQno%2F%2BIQGOLacDn2n4AjXtLf9qtc4fz%2FtOfW2S%2Bkqc9TTjpIvqmdLYE6PvB1GmsN%2FG%2Bbi54HZkNfAfZV6652CakhNBOj91UGP5M9T68ldijGzOWZn6y%2BL%2B7OBQPX5Ai5B%2FoGgy2XZsSntfIVbSKvrVSjAHizXvLVC5grp4CFfZnBtbkVS8GaPM8V4DXqyUg2LL0XDRFfosp3t8qn8cq6n%2BbAdgLFxOqm1%2FZdp6ZqgfqwHWdGTc965G4ITAzx%2F0wegfQviwRQmfVVpn8VlGmichkEmqByHOH%2Bp9iA%2Fo%2FQh%2FCRaDnBZ90fNCXNL%2FeKGz3Luf6CPanp36l9C1xZ8zgD%2FvRMSs95192Q%2FpkAxYyRdvbzeaWU2LW40naRhVdBTterw%2B3H%2FJYTk67Pj3GHiKHYsJc6upaO5UobS%2F4miR%2BOjBH0HriPtXe8NdkQmK7OBDMTjMN%2FHusEGOqUBCn3CSHG9iTJBBNlp8kVJXr6ryu0xFubxe2qEkZIlnSgC3nbLo1pwAYyBy1Gn8UsSMrYY9oS1Ma3uoV1tKg2zJTfR5VaCY8hEn%2Bws8xhweuz8V43hq7FSvHYkUn%2BVEV0lGorQaTYP9%2FIEH0NDSTCWp2Qqo9w3ZhPSZo%2FPxbY3S3pe%2Bwfeqs46VF8UQtSOxhioasnGyxBx%2Bx%2BzzKase0iAhlqr%2BDj6&X-Amz-Signature=71176f52467ee50533a0edda00e304753c83954a6f16ff811940fb8fc4def527&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTT5VVO%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIC1b%2BzC3OGLzbdi1lMKkIc2YEDAAbtS6kilWE9qBw3ZLAiEAwz2MbBoivGmFp1scyrf9MTq14ucebZhvu2EZs%2BpOXPkqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKort14nDdzHu5A%2FwCrcA513fe8OtuGoCiZdUZbcuHcz6gkVvQSkAcMZMWMc8nzNL5WMzfi3k0en3hWm30cboQgx8y8QkWqWj5zkD3BrI5rJi8%2BDNPHhXjhXnGHtSaUZmveBH3fOvEFi%2F9nTN2PJEwKGPuWXV0c0Dodpp7Lnq7Gz1e8w9Ybyh8YHrMa6tYl5wT55bFgsW0%2Be50CNQno%2F%2BIQGOLacDn2n4AjXtLf9qtc4fz%2FtOfW2S%2Bkqc9TTjpIvqmdLYE6PvB1GmsN%2FG%2Bbi54HZkNfAfZV6652CakhNBOj91UGP5M9T68ldijGzOWZn6y%2BL%2B7OBQPX5Ai5B%2FoGgy2XZsSntfIVbSKvrVSjAHizXvLVC5grp4CFfZnBtbkVS8GaPM8V4DXqyUg2LL0XDRFfosp3t8qn8cq6n%2BbAdgLFxOqm1%2FZdp6ZqgfqwHWdGTc965G4ITAzx%2F0wegfQviwRQmfVVpn8VlGmichkEmqByHOH%2Bp9iA%2Fo%2FQh%2FCRaDnBZ90fNCXNL%2FeKGz3Luf6CPanp36l9C1xZ8zgD%2FvRMSs95192Q%2FpkAxYyRdvbzeaWU2LW40naRhVdBTterw%2B3H%2FJYTk67Pj3GHiKHYsJc6upaO5UobS%2F4miR%2BOjBH0HriPtXe8NdkQmK7OBDMTjMN%2FHusEGOqUBCn3CSHG9iTJBBNlp8kVJXr6ryu0xFubxe2qEkZIlnSgC3nbLo1pwAYyBy1Gn8UsSMrYY9oS1Ma3uoV1tKg2zJTfR5VaCY8hEn%2Bws8xhweuz8V43hq7FSvHYkUn%2BVEV0lGorQaTYP9%2FIEH0NDSTCWp2Qqo9w3ZhPSZo%2FPxbY3S3pe%2Bwfeqs46VF8UQtSOxhioasnGyxBx%2Bx%2BzzKase0iAhlqr%2BDj6&X-Amz-Signature=69984ee01b795d224bd6f9fc1ce2b54cb7491e4ba46e30c6c9f856c22f64e1d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTT5VVO%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIC1b%2BzC3OGLzbdi1lMKkIc2YEDAAbtS6kilWE9qBw3ZLAiEAwz2MbBoivGmFp1scyrf9MTq14ucebZhvu2EZs%2BpOXPkqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKort14nDdzHu5A%2FwCrcA513fe8OtuGoCiZdUZbcuHcz6gkVvQSkAcMZMWMc8nzNL5WMzfi3k0en3hWm30cboQgx8y8QkWqWj5zkD3BrI5rJi8%2BDNPHhXjhXnGHtSaUZmveBH3fOvEFi%2F9nTN2PJEwKGPuWXV0c0Dodpp7Lnq7Gz1e8w9Ybyh8YHrMa6tYl5wT55bFgsW0%2Be50CNQno%2F%2BIQGOLacDn2n4AjXtLf9qtc4fz%2FtOfW2S%2Bkqc9TTjpIvqmdLYE6PvB1GmsN%2FG%2Bbi54HZkNfAfZV6652CakhNBOj91UGP5M9T68ldijGzOWZn6y%2BL%2B7OBQPX5Ai5B%2FoGgy2XZsSntfIVbSKvrVSjAHizXvLVC5grp4CFfZnBtbkVS8GaPM8V4DXqyUg2LL0XDRFfosp3t8qn8cq6n%2BbAdgLFxOqm1%2FZdp6ZqgfqwHWdGTc965G4ITAzx%2F0wegfQviwRQmfVVpn8VlGmichkEmqByHOH%2Bp9iA%2Fo%2FQh%2FCRaDnBZ90fNCXNL%2FeKGz3Luf6CPanp36l9C1xZ8zgD%2FvRMSs95192Q%2FpkAxYyRdvbzeaWU2LW40naRhVdBTterw%2B3H%2FJYTk67Pj3GHiKHYsJc6upaO5UobS%2F4miR%2BOjBH0HriPtXe8NdkQmK7OBDMTjMN%2FHusEGOqUBCn3CSHG9iTJBBNlp8kVJXr6ryu0xFubxe2qEkZIlnSgC3nbLo1pwAYyBy1Gn8UsSMrYY9oS1Ma3uoV1tKg2zJTfR5VaCY8hEn%2Bws8xhweuz8V43hq7FSvHYkUn%2BVEV0lGorQaTYP9%2FIEH0NDSTCWp2Qqo9w3ZhPSZo%2FPxbY3S3pe%2Bwfeqs46VF8UQtSOxhioasnGyxBx%2Bx%2BzzKase0iAhlqr%2BDj6&X-Amz-Signature=dcf37b3d417eb722ad8ea8f4a1b11897c567535041caa8049ed2705c51f1a4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIBMCN7Y%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDhgPT5k%2Fo%2FTtvdNQe6Ry7fJdSwWK6vg2Y1Mi1lYaIZeQIgciHe%2FicWGz%2B3GE%2BJfIOre7nXq5as%2BHdpkN%2FuAP4Dw%2BwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwrH%2FoVmCcbAKoeqyrcAzL8ZeaHbpIAyvwm9Wi5tRYJix9Ck1QPTsqkPKjJJErtTAmb8CwLevG95JHLyMhLopo59SB6edBWPgFclAcdoxhaZgHR9bxz0sBsDrPNvWu0cfZD%2BRkHtzgbUuhEkjKPdMiI%2Fwj4Boh1KPYnz38SLPI0plHMwjUBzjpHdDsjnuqsoSWTz9lZ02tGz7ILXtFZpGhfDrgqRVaOdl7UFM8FbxegzimcyceugBrvQdYqVbnBb0zgap%2FdEql1KRXJLHtmCjPRWIvFGn0vvFURQQ79BDHFQnJr14oSEcRagda8xRUk1ZHzkaSlDefV%2FXNUmjFr75Dakc5WBK0YritmDtj0BWgDs1xAxkSdfjdhn9LdXacHZASEYkpWjg0JivOhltfkmY%2FWc%2BUseksnzumGicZBGysWEZ99J5Azczj%2BCfgFE86fBTRYwkRz1kxeOJT1nq3GoLmjHEJvODZtGi0yPK6OywgTt19%2FToIPSDPrx6JB%2B2vBLSBvJj4Qn2UFZRRZ2vv8v9ZxetXvOzueD957maCGdlzNHOOIh6bvPkz6Kxr9BiAcJuU7Sc17HraI%2BylDx7DoDLqOjMlFpYtFAenh1xFW8F3ekQlTMe30yizzkmD3qJOsry50HtYkyosSgM%2FGMJSUusEGOqUBWFfMdJVCE0zfHq9kWTgFgSlPHf7ucKYOGhVg4fRaAF7j0tdtxaorMURhk70HXa8xvt3kPBWvq1nio9RxgcBDsWMvsPiU7rjDQZ75DZO30rSmZ64zIwFubBdoW%2Fovfxget73bbNJr8CDkRqP2hYQqrbiLteZc6hLMELIRaNhhnSRg9VDed2r5fuD7BKhVa1HuJDc1zhrDERQ4PSQCrQrhTlzTWFtH&X-Amz-Signature=8672ba6946db8f8a0d192c23236df4d792fa73b9642c48b48a6285dafe1a08d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKLDFUJO%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIH07%2BPkI2rOwcax88tv6Vk%2FNldLFmEGaQajSUUnh0qcPAiBSPGAf4hv201lqYoUX3Mu%2FQL09mapg08rHoHA%2FXtDp%2BCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTliithHUeVyB3m5EKtwDirn4Mxi%2FowkBvjXnaEkWYRD3XndNrkB1WpA%2F4SqMHCFbqXqBrdVMdnmmTRtBTy5eT%2FRAQHntimLiZmCywqCEooekRlilakSmBy6bynjbepRQLoJgDy3t%2Fpl9svOxXgtjQYmJRHiI%2FrlvSDyjSxy2LfgopmtqJoeu7qCQvf4ErFlKUX0hrz3tihJ423Cc8A%2F69531VGuqr%2FD6XBlOG6WwU12%2BzUi4BlV1OAUiVgFnkY9a5NP9heKt8ob3fpFsBjQRsE6Mrw3peUqXp%2BW1ZqCqg3NBN59kiEwm7ekvKJJQtFc7SYSLk%2BSrY4a43hWIgupd2qWEE%2B2E2DqgLm0xhNp0V5I8uBNWtLOd%2Brxk2rjZ38Mz1mqcGR8MoRZ%2Fyf%2BK6vkSq1IXqeyWRAX4eYCVpvQP5gTDRZHJeAlPM9uMTTcPuW6L%2B4adHvqSAvzS0p22TGlyAGFs0iBUw0EqKjh9T5XasTA45ygg0q%2FXfKYxFJpMB8DN0GaEyrD0MUgnqAbsMF4yVixO3iXWF6muEoumsUNyLyHbYX65oxyvdzLsqyjipHIp1NfO%2B4PGfIeWkt21F0XwXLjj2Rb%2B2risln5umARbd5BmEflFg4tYxkGBR11bCIIhmC7%2BpzQ1rvRFxnIw6ZO6wQY6pgEzoce9Cb%2FQgnpL51KJtJQYBBTO0tbNlHUwdPJ01eB87WfJCWXBHnARSuTXZgrU0IzNIyPgFuXe%2Boauz%2BwY0YI74iNNtsnEFSYqp8ZjeSpdsgyf1YoqdkkI%2FKK5LHYzl0%2FEQzRKDfH0%2Bb5CLxP9R1KnQLLEJu4nVFoXp1nu6C4zkpst5cPqDrUonsr1PuGP08OsdIofR1Py2owLAMm8SYV4k9D%2F4o09&X-Amz-Signature=8648ee21be82cf35fce9894a4b82dd8b19621547d2783c367b841483944863d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTT5VVO%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIC1b%2BzC3OGLzbdi1lMKkIc2YEDAAbtS6kilWE9qBw3ZLAiEAwz2MbBoivGmFp1scyrf9MTq14ucebZhvu2EZs%2BpOXPkqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKort14nDdzHu5A%2FwCrcA513fe8OtuGoCiZdUZbcuHcz6gkVvQSkAcMZMWMc8nzNL5WMzfi3k0en3hWm30cboQgx8y8QkWqWj5zkD3BrI5rJi8%2BDNPHhXjhXnGHtSaUZmveBH3fOvEFi%2F9nTN2PJEwKGPuWXV0c0Dodpp7Lnq7Gz1e8w9Ybyh8YHrMa6tYl5wT55bFgsW0%2Be50CNQno%2F%2BIQGOLacDn2n4AjXtLf9qtc4fz%2FtOfW2S%2Bkqc9TTjpIvqmdLYE6PvB1GmsN%2FG%2Bbi54HZkNfAfZV6652CakhNBOj91UGP5M9T68ldijGzOWZn6y%2BL%2B7OBQPX5Ai5B%2FoGgy2XZsSntfIVbSKvrVSjAHizXvLVC5grp4CFfZnBtbkVS8GaPM8V4DXqyUg2LL0XDRFfosp3t8qn8cq6n%2BbAdgLFxOqm1%2FZdp6ZqgfqwHWdGTc965G4ITAzx%2F0wegfQviwRQmfVVpn8VlGmichkEmqByHOH%2Bp9iA%2Fo%2FQh%2FCRaDnBZ90fNCXNL%2FeKGz3Luf6CPanp36l9C1xZ8zgD%2FvRMSs95192Q%2FpkAxYyRdvbzeaWU2LW40naRhVdBTterw%2B3H%2FJYTk67Pj3GHiKHYsJc6upaO5UobS%2F4miR%2BOjBH0HriPtXe8NdkQmK7OBDMTjMN%2FHusEGOqUBCn3CSHG9iTJBBNlp8kVJXr6ryu0xFubxe2qEkZIlnSgC3nbLo1pwAYyBy1Gn8UsSMrYY9oS1Ma3uoV1tKg2zJTfR5VaCY8hEn%2Bws8xhweuz8V43hq7FSvHYkUn%2BVEV0lGorQaTYP9%2FIEH0NDSTCWp2Qqo9w3ZhPSZo%2FPxbY3S3pe%2Bwfeqs46VF8UQtSOxhioasnGyxBx%2Bx%2BzzKase0iAhlqr%2BDj6&X-Amz-Signature=8e9b88197df80674c9b7e78b151085c28dff4c475add80bd316315e41dac2e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
