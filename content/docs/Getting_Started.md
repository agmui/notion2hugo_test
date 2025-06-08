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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNBMDWQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAgt%2B4zcrK8F%2BnSO%2FL6AaJbRfudJwZg9LU8%2FOH456eqQIgApa916LRrPCmOuaOdeH9SbzZqgInupzwjkHYqLushpoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLSetSWE8bTyxi45yrcAwz%2FZ9DPIio0DYZ4n4XUyFwtJdOBM7RlsDzP9wa8Gajz1pnmEPm61gAu87At72%2FD%2F5v6jCPuMfpOeQskIewP2TKNZwqjBndCDVFtG7N6uv%2Fizk4glTqEYd6kQbiHT1%2FRLW5pGOAaa2SPwP22zp9NE%2FwzVsDxMSKftAC8n4Xq2sWwS4krpet8Ob2raA4SCnDxPUlJQLPj4uPYnC3wM1sWfq%2BFRV8XGgytALcQ%2F4ptsWYlx0I4ZA4s0RjjUOISS948JFooKRrOv906NtGF%2BTCPdUw%2BDvQ0o%2BKRbbIQOOXDjWJtlOvheuUDk2X71w09tHmDhWveJgFcUE91Ne7nU7l2cZ0DaesKrJUPsvVYzRjI4eHX5WtQAIQtoHXWI3Y5U96cyUEfKIekQMs2epNGnwlnefh7IpGYO1wT1aP9bLKoK%2F1KK0PvIIHXelfzKUJ%2FA5dNHt7v9SefK4cAujJxXManhgi99obnrwvfi2bBjbEtv799vvuf1Sy%2FlpIYQntPuWa3L9Bq9haJSTuEj3nkGjff97du5Oaa5Bn6sSR27wm3W8UojNJyC1IXqxPsZcsJMK36z0efu2PFpc9VBs3dmoXF5HbnXCq8yPqsRwr5TIwUwHKNT9sUbn82NPvDI%2FtxMLymlcIGOqUBuhyZk05RZNN55AL90KV82K5Olhpwc6l7YvGZmZx%2BypL4S0j2g%2Fmjbaz%2BZFCl0nDl2VGw1m8HcT93T56XHhEwGV9BXXoi0ndBJEkhliMMLho%2FCrtNV8AzuG9R2iUEXeaWn5YWAyHxlL1l4VQ69ooTxTpo6UgpisMBV7G7PwSkdxxThOYlwNiWsifozHUzaOroH7qY2mZDblw9LVwi9UsalYZgAIZY&X-Amz-Signature=27927c7c4eb915d59108d848276fcc8b9df3981816cc63fb1d4ec3f8dc09ff8c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNBMDWQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAgt%2B4zcrK8F%2BnSO%2FL6AaJbRfudJwZg9LU8%2FOH456eqQIgApa916LRrPCmOuaOdeH9SbzZqgInupzwjkHYqLushpoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLSetSWE8bTyxi45yrcAwz%2FZ9DPIio0DYZ4n4XUyFwtJdOBM7RlsDzP9wa8Gajz1pnmEPm61gAu87At72%2FD%2F5v6jCPuMfpOeQskIewP2TKNZwqjBndCDVFtG7N6uv%2Fizk4glTqEYd6kQbiHT1%2FRLW5pGOAaa2SPwP22zp9NE%2FwzVsDxMSKftAC8n4Xq2sWwS4krpet8Ob2raA4SCnDxPUlJQLPj4uPYnC3wM1sWfq%2BFRV8XGgytALcQ%2F4ptsWYlx0I4ZA4s0RjjUOISS948JFooKRrOv906NtGF%2BTCPdUw%2BDvQ0o%2BKRbbIQOOXDjWJtlOvheuUDk2X71w09tHmDhWveJgFcUE91Ne7nU7l2cZ0DaesKrJUPsvVYzRjI4eHX5WtQAIQtoHXWI3Y5U96cyUEfKIekQMs2epNGnwlnefh7IpGYO1wT1aP9bLKoK%2F1KK0PvIIHXelfzKUJ%2FA5dNHt7v9SefK4cAujJxXManhgi99obnrwvfi2bBjbEtv799vvuf1Sy%2FlpIYQntPuWa3L9Bq9haJSTuEj3nkGjff97du5Oaa5Bn6sSR27wm3W8UojNJyC1IXqxPsZcsJMK36z0efu2PFpc9VBs3dmoXF5HbnXCq8yPqsRwr5TIwUwHKNT9sUbn82NPvDI%2FtxMLymlcIGOqUBuhyZk05RZNN55AL90KV82K5Olhpwc6l7YvGZmZx%2BypL4S0j2g%2Fmjbaz%2BZFCl0nDl2VGw1m8HcT93T56XHhEwGV9BXXoi0ndBJEkhliMMLho%2FCrtNV8AzuG9R2iUEXeaWn5YWAyHxlL1l4VQ69ooTxTpo6UgpisMBV7G7PwSkdxxThOYlwNiWsifozHUzaOroH7qY2mZDblw9LVwi9UsalYZgAIZY&X-Amz-Signature=ec470471350bba086cea8e569ff162ec73820110abf0bbb2fd1615c5d548f151&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNBMDWQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAgt%2B4zcrK8F%2BnSO%2FL6AaJbRfudJwZg9LU8%2FOH456eqQIgApa916LRrPCmOuaOdeH9SbzZqgInupzwjkHYqLushpoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLSetSWE8bTyxi45yrcAwz%2FZ9DPIio0DYZ4n4XUyFwtJdOBM7RlsDzP9wa8Gajz1pnmEPm61gAu87At72%2FD%2F5v6jCPuMfpOeQskIewP2TKNZwqjBndCDVFtG7N6uv%2Fizk4glTqEYd6kQbiHT1%2FRLW5pGOAaa2SPwP22zp9NE%2FwzVsDxMSKftAC8n4Xq2sWwS4krpet8Ob2raA4SCnDxPUlJQLPj4uPYnC3wM1sWfq%2BFRV8XGgytALcQ%2F4ptsWYlx0I4ZA4s0RjjUOISS948JFooKRrOv906NtGF%2BTCPdUw%2BDvQ0o%2BKRbbIQOOXDjWJtlOvheuUDk2X71w09tHmDhWveJgFcUE91Ne7nU7l2cZ0DaesKrJUPsvVYzRjI4eHX5WtQAIQtoHXWI3Y5U96cyUEfKIekQMs2epNGnwlnefh7IpGYO1wT1aP9bLKoK%2F1KK0PvIIHXelfzKUJ%2FA5dNHt7v9SefK4cAujJxXManhgi99obnrwvfi2bBjbEtv799vvuf1Sy%2FlpIYQntPuWa3L9Bq9haJSTuEj3nkGjff97du5Oaa5Bn6sSR27wm3W8UojNJyC1IXqxPsZcsJMK36z0efu2PFpc9VBs3dmoXF5HbnXCq8yPqsRwr5TIwUwHKNT9sUbn82NPvDI%2FtxMLymlcIGOqUBuhyZk05RZNN55AL90KV82K5Olhpwc6l7YvGZmZx%2BypL4S0j2g%2Fmjbaz%2BZFCl0nDl2VGw1m8HcT93T56XHhEwGV9BXXoi0ndBJEkhliMMLho%2FCrtNV8AzuG9R2iUEXeaWn5YWAyHxlL1l4VQ69ooTxTpo6UgpisMBV7G7PwSkdxxThOYlwNiWsifozHUzaOroH7qY2mZDblw9LVwi9UsalYZgAIZY&X-Amz-Signature=696972bc2eea41e11fbe62ed9fc795577da331008862559cdc303b33fd4cf4f9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWJ6VTX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExC6cjqkcRnFPAQ100egeYfwUJDiO0gjrh9hSw48l9dAiEAvTUE5ED4N9e%2ByH5ogc35MAkqkRCb%2FpYhrs3yXaixuqIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOor5zRlnXrnyeMJircAwEkbA%2F6S3qPgFscwoXkEPTLMJ6p1u4IXcDDNHtsfd5Tul9UO8Gbq91%2FUxmQukSTFyvq%2BKWiKj955eI8QgF8VN3%2FoVnSHYFdpX6y8UEyow6zwrHN%2BfTojukXiSzKW1b7Ojz9ny5MdkjRNJvvyaoPLBz%2BUR5AE7rGvB9qeDPbimaMG%2Ff8rJjd9j83UPrNpH6E2%2FHxOtDerraslWFwL7xiI7izGzRGx%2BBfIXBon4vD9EL65S%2Ba0Q9B3gvu5tChGG0sPr51YsGZ2t3ZwXBBkmiwflTIXtHkIYJUrkkhWglTiha0gOOf5x7OafXyifLgOu4BRKOi4gYyqC2ceYPo%2BnYJvLZKJ4UlcKssfLB5uMCeA250s%2FayFu0n%2BTpUihjruQlXRNsU1SMjkS2p%2FR0%2FXdwMzKqm101IPcOAwfRlMkjCKiRG7k8P6KxaNCBH9XiHrm%2ByGT2N6FOJvQWoRGm0mAdJ%2FbrP6hlh6vt9e1I7qbjLfrw9AQW%2FD8VgO%2BsBq8OHgWwT%2FxZrcOHSNzmVODIk0Fp%2Ft6hVuBRqq1Y%2BWUHYI%2FQ9LkjmI2cvnsE3RUeTb2wd7E3kiTMPEQxQ3tGNUzaqWNRes%2BHrjSusQoif5X3RPB%2Bf1pWCGtQxSM6LlPeZ4SXwMLymlcIGOqUB2NoLyaANjcipvHYWu%2B1n%2F2KNa6FCT80ayP0yboDU9794skJ7fqysW09lqNtEIls6D6O6KY1JuHXsS6bQa29jXbBXbsoavtAgqPGd43JystUQAjd%2BX1Z2BDuY%2BAuPB63I%2F3U00mXNKFXt5%2FWRvnvFZJL6wANZReYWJQzKJmUqMkiYZXG3iV8rQAC19R%2F%2BPpfREYZWqwwehdu2VQpLjg%2FVJVBuj%2F%2Bt&X-Amz-Signature=b4e1c4029800fb28c4de56da976a255d0065c9261f33fd8ce865db2fd7ac0eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAZALZY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF31RtsXh25UgslvvTuRWzE8OY3l2%2B6cQ3rk4F%2FA0JOtAiEAte2udaI6Qxud87iQWaVaCOPmTj%2BhaWwbxFLAc5HZZIsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7G9TVTRvUMMjCn5yrcA0t5tKmq6aZsztgxRXbkaLPc6KDjFtpjV%2FODLPYwB1ynKtBCkwITWS8zfsmfZHW8qfAHxNNMSHL%2BdfDJJdDpQzaERI1tHDdIzDteoJLjckqxpKuJidiA8TeNISbUx92bnkqVGylQQp0MKaV93ZB5M7xsJAkVabetFhOdTkmwKYCjwSI54wNGE%2FArp3DqbfQd09Pp1ZWYz7SeCxzyg5c8eVKmA4zorxCwIDsQX4p7AfMzfY%2B0XN1fDhNmoIf5VTG6zaHn6uz5qmzCE6Wy3ScxOFghSsHGodI4d5fuScrIPbA364Xk4G78Ru8pOfFNuyvtRMZP27EmqtnMTLc6YJk%2FbAQsg9mjJU5TZSVhMyfLpjD8NilV6dl4QTDz2TbTG5Xbr9hy3RwSILSf8gu7zPwsk8x9hh6H7guiAzt4LlCN9gvgll4AemVm7dA5q5rj9oXNE6AzhSUq%2Fzz0%2BMZrkkkpvBYFp8CRW8OPGs4gfHoc8HPFMpr8VHJSka4dAPmVSnyWbdgWtgNQjGaUZWv6EI4L8wpW5QoA4Y%2B1nE0PIThCXfTVwoPOBzU0heZTP65A%2F%2F1%2F1pOFEp0c%2FnDLYUex7yifcoSQygwbX4hnUPCQ5LcJrORESuJMnYhspdpu1pXNMNTPlcIGOqUBK80zajla8PcpzYuEnU9SZXW2iO%2Fx%2BjRPcuu9oFITZur%2F6XTegVpkCgAOswK%2FhJasW4e0bpFweWvTnmxESYmM1ZR3CUBQu9iuJ%2F3G2xAdNg5epNyaTZDDx%2FYOqhDYOYYbM5KFezgcyIT2DokqOfsfaJRyLeMfGiRMFN6fEHqKLTvLt7w2C6Zww77mfqenvvT9R%2B48fO5OYbpr4Ux%2B%2Fb5KDur55rBz&X-Amz-Signature=b6805afae5c513b95dc6c9aa2edf65867acec167f5e2780ad9c6e1e6514709ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNBMDWQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAgt%2B4zcrK8F%2BnSO%2FL6AaJbRfudJwZg9LU8%2FOH456eqQIgApa916LRrPCmOuaOdeH9SbzZqgInupzwjkHYqLushpoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLSetSWE8bTyxi45yrcAwz%2FZ9DPIio0DYZ4n4XUyFwtJdOBM7RlsDzP9wa8Gajz1pnmEPm61gAu87At72%2FD%2F5v6jCPuMfpOeQskIewP2TKNZwqjBndCDVFtG7N6uv%2Fizk4glTqEYd6kQbiHT1%2FRLW5pGOAaa2SPwP22zp9NE%2FwzVsDxMSKftAC8n4Xq2sWwS4krpet8Ob2raA4SCnDxPUlJQLPj4uPYnC3wM1sWfq%2BFRV8XGgytALcQ%2F4ptsWYlx0I4ZA4s0RjjUOISS948JFooKRrOv906NtGF%2BTCPdUw%2BDvQ0o%2BKRbbIQOOXDjWJtlOvheuUDk2X71w09tHmDhWveJgFcUE91Ne7nU7l2cZ0DaesKrJUPsvVYzRjI4eHX5WtQAIQtoHXWI3Y5U96cyUEfKIekQMs2epNGnwlnefh7IpGYO1wT1aP9bLKoK%2F1KK0PvIIHXelfzKUJ%2FA5dNHt7v9SefK4cAujJxXManhgi99obnrwvfi2bBjbEtv799vvuf1Sy%2FlpIYQntPuWa3L9Bq9haJSTuEj3nkGjff97du5Oaa5Bn6sSR27wm3W8UojNJyC1IXqxPsZcsJMK36z0efu2PFpc9VBs3dmoXF5HbnXCq8yPqsRwr5TIwUwHKNT9sUbn82NPvDI%2FtxMLymlcIGOqUBuhyZk05RZNN55AL90KV82K5Olhpwc6l7YvGZmZx%2BypL4S0j2g%2Fmjbaz%2BZFCl0nDl2VGw1m8HcT93T56XHhEwGV9BXXoi0ndBJEkhliMMLho%2FCrtNV8AzuG9R2iUEXeaWn5YWAyHxlL1l4VQ69ooTxTpo6UgpisMBV7G7PwSkdxxThOYlwNiWsifozHUzaOroH7qY2mZDblw9LVwi9UsalYZgAIZY&X-Amz-Signature=35856f98df5766483685bfa3941852eb5f9458751aed01d0242f0dca84672d19&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
