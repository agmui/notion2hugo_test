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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HR5CHTQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICwSzkuAPLgj3kOuR%2Fbw328Sr9ymJuBSv%2FB%2Fq2VOqSyvAiBlx2Maqr4LCarLR%2FZTbqRxJFuIADFE4zzsmJIUyOL%2Beir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMx9GB02JZX1wFx4glKtwDJlUfjMGzbWrVGYBUjqzRp6cANdWx8Jb%2BZB0i3xgrYzCoUAUgMaa2X%2Fmyr0IwZtymqKAGs%2BD%2BWxKZcU3J%2BP2ptukBAwTNY0ZOjuOkjidLL3Dgg1dmh6SK6TnAgpzzA3uALTpa8Raz%2FUfEaMxHrp2vsmQSfRHzAxKbgmkL%2B9PZ9qt5efdwc7P9IKh%2BskHPbyMnF6HK0j%2BthriQ%2BmCNcoZypg56mQKeIzlmqoUQcAoZwpe4sZhiYWpdOvcDfw2nCdjZRWrUxMUj4QBr88VvlpJei2GZSzSRnwUBjFuI5IhYAnjbfjbcqcCaIh0BL%2BuZ2bGDeKGDeZ4%2BCWPqRD8zVHsQmLj3EGMtOpapsQO%2BL4%2Ftuiopp%2BTgA8UsFUu7OmPA860vGKymd6o7mrlEZvzMC7yCWU1fctCZjYMHLz4sNznStVA%2B3iCP3XWBil7tSDmldbNF6SuKL35HAVNwljUlWykIT2d8froO%2BvIYrSPPdTv3edoNgbLqUj2zQtoY60ATVOe2vVXw13OMu4KHRfUTBP3N%2FZ7uwp8mxajXA%2Ff1Ai3TGrrjiH7JFYYSDmraaF6pYnNFIG280b9wTu3kTdbmy3SHTEDAKdIdVsHoRMM9xXuFijqUKZZ3XELWXsBzWLIww5WRxAY6pgEnRe2dpkdg0U6O8DwKyrOlN8Dnx4Um70coPCkmSbj%2FUbaQ1U2nUXhj8WgcyZ4fRkNMk7%2BDDLJAEXY7uhtrJH%2Fd7m3BXwRIgrV7S7dfjVJyvcfkDS1IWQxlST04itNTdTWctSHUKZC8T1c7SgIjl%2B2qUirMCLi%2FrJglBRT9QG7JXHB%2FQ2RVkqgkr0Je6RRSXJXyn53pI9ghj%2Byx1aWg%2Fkc09s9xFCo%2F&X-Amz-Signature=757dd1cdf89a3dcb60edfab3ef039acf772f0c3d0b0b310955d8d27707c90fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HR5CHTQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICwSzkuAPLgj3kOuR%2Fbw328Sr9ymJuBSv%2FB%2Fq2VOqSyvAiBlx2Maqr4LCarLR%2FZTbqRxJFuIADFE4zzsmJIUyOL%2Beir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMx9GB02JZX1wFx4glKtwDJlUfjMGzbWrVGYBUjqzRp6cANdWx8Jb%2BZB0i3xgrYzCoUAUgMaa2X%2Fmyr0IwZtymqKAGs%2BD%2BWxKZcU3J%2BP2ptukBAwTNY0ZOjuOkjidLL3Dgg1dmh6SK6TnAgpzzA3uALTpa8Raz%2FUfEaMxHrp2vsmQSfRHzAxKbgmkL%2B9PZ9qt5efdwc7P9IKh%2BskHPbyMnF6HK0j%2BthriQ%2BmCNcoZypg56mQKeIzlmqoUQcAoZwpe4sZhiYWpdOvcDfw2nCdjZRWrUxMUj4QBr88VvlpJei2GZSzSRnwUBjFuI5IhYAnjbfjbcqcCaIh0BL%2BuZ2bGDeKGDeZ4%2BCWPqRD8zVHsQmLj3EGMtOpapsQO%2BL4%2Ftuiopp%2BTgA8UsFUu7OmPA860vGKymd6o7mrlEZvzMC7yCWU1fctCZjYMHLz4sNznStVA%2B3iCP3XWBil7tSDmldbNF6SuKL35HAVNwljUlWykIT2d8froO%2BvIYrSPPdTv3edoNgbLqUj2zQtoY60ATVOe2vVXw13OMu4KHRfUTBP3N%2FZ7uwp8mxajXA%2Ff1Ai3TGrrjiH7JFYYSDmraaF6pYnNFIG280b9wTu3kTdbmy3SHTEDAKdIdVsHoRMM9xXuFijqUKZZ3XELWXsBzWLIww5WRxAY6pgEnRe2dpkdg0U6O8DwKyrOlN8Dnx4Um70coPCkmSbj%2FUbaQ1U2nUXhj8WgcyZ4fRkNMk7%2BDDLJAEXY7uhtrJH%2Fd7m3BXwRIgrV7S7dfjVJyvcfkDS1IWQxlST04itNTdTWctSHUKZC8T1c7SgIjl%2B2qUirMCLi%2FrJglBRT9QG7JXHB%2FQ2RVkqgkr0Je6RRSXJXyn53pI9ghj%2Byx1aWg%2Fkc09s9xFCo%2F&X-Amz-Signature=1750e2a8844934c8d2f31aa285f755c24e0e8818f3c3a52ca0e58aa70b48a78a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HR5CHTQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICwSzkuAPLgj3kOuR%2Fbw328Sr9ymJuBSv%2FB%2Fq2VOqSyvAiBlx2Maqr4LCarLR%2FZTbqRxJFuIADFE4zzsmJIUyOL%2Beir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMx9GB02JZX1wFx4glKtwDJlUfjMGzbWrVGYBUjqzRp6cANdWx8Jb%2BZB0i3xgrYzCoUAUgMaa2X%2Fmyr0IwZtymqKAGs%2BD%2BWxKZcU3J%2BP2ptukBAwTNY0ZOjuOkjidLL3Dgg1dmh6SK6TnAgpzzA3uALTpa8Raz%2FUfEaMxHrp2vsmQSfRHzAxKbgmkL%2B9PZ9qt5efdwc7P9IKh%2BskHPbyMnF6HK0j%2BthriQ%2BmCNcoZypg56mQKeIzlmqoUQcAoZwpe4sZhiYWpdOvcDfw2nCdjZRWrUxMUj4QBr88VvlpJei2GZSzSRnwUBjFuI5IhYAnjbfjbcqcCaIh0BL%2BuZ2bGDeKGDeZ4%2BCWPqRD8zVHsQmLj3EGMtOpapsQO%2BL4%2Ftuiopp%2BTgA8UsFUu7OmPA860vGKymd6o7mrlEZvzMC7yCWU1fctCZjYMHLz4sNznStVA%2B3iCP3XWBil7tSDmldbNF6SuKL35HAVNwljUlWykIT2d8froO%2BvIYrSPPdTv3edoNgbLqUj2zQtoY60ATVOe2vVXw13OMu4KHRfUTBP3N%2FZ7uwp8mxajXA%2Ff1Ai3TGrrjiH7JFYYSDmraaF6pYnNFIG280b9wTu3kTdbmy3SHTEDAKdIdVsHoRMM9xXuFijqUKZZ3XELWXsBzWLIww5WRxAY6pgEnRe2dpkdg0U6O8DwKyrOlN8Dnx4Um70coPCkmSbj%2FUbaQ1U2nUXhj8WgcyZ4fRkNMk7%2BDDLJAEXY7uhtrJH%2Fd7m3BXwRIgrV7S7dfjVJyvcfkDS1IWQxlST04itNTdTWctSHUKZC8T1c7SgIjl%2B2qUirMCLi%2FrJglBRT9QG7JXHB%2FQ2RVkqgkr0Je6RRSXJXyn53pI9ghj%2Byx1aWg%2Fkc09s9xFCo%2F&X-Amz-Signature=7a2e50ad9955ad82ff1c995dcd37d4aef09cf2e37950bba94b816180d2d531d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VAVRS6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCqEzZUWEmnYYSmgLsdZJGQUify2eAQ1sgT8dqtGwCmcgIgZTbtgVh11796frFtXnD4nNqlB97JEWf2dAfjj1j4fn0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKWgwa2Vq16776%2BPcyrcA7XlIipAYT4LVsfuOnSSKJSkM1HcKB56SiVuMPC9oCxBUe7UgvfHHFzURJYVMcXY9OL0OR3%2BYO4bzTP38nxF1TJbCJGK%2FqyvhxoZMARcKve0S0sloPuUnvdI6ell8sPyIa%2FJoHauHNQ9MGeOSnVui4TXIGgU779hkTcOQQCJHpHksKuXXgY0%2By95DoFwmlqLKrKYkj1grbH0oYfa9rgBJ1fLsErHYb9aGZyFhWuoZlvAiFMVsHppqF2Q%2BpcyYmazHom74Yz6rBRvptwUYG52rhn60kVZy6W7xBmn9eYJRwwG4Q51a2HQrmB3tCaO%2BzySWmE3OMENJTDPEgZfJfQlbKmzpU6r7L%2F%2BCYUhU0ADC%2FWjCnsReacmrP8lKGcRyQRHeYfzL5pBIUQZpx2aI8DnLFYqzUqagRO%2BivQcKyghFZxdzHRGn0HJbsoozdh7BqLjf09rIhDxTrAc1tYUy9QwPpwvnRjiYsadUsTn39c3y9mdQimOiYcFwQSY17Hhujc8%2B7r9R%2Bk%2BUOF%2Fs%2FkItdTrGerraCBGamAFNGop9VWF7fkYf28YkhvxwR0wfcRTQwklrKNtXm3AmdKhgGT3anqyD54G18QyCrU4I14O%2Famiazz%2BMS4YzFTzwJPvP13YMM3rkMQGOqUBKV9BqFKUFUk6aagCEfvtZLmjp9SM7XhOvagiyHVG4FCk3c8MiVHTu%2Be5hmMvcBRYbgeVHpypcPsmNhksRQiB99NkmodJNdTqiOiz%2FyZzq%2BqFtoyJCpjIuOtkjg8AGOnLrx%2Bgfm2l5ZxLUdXxI1LExi4i%2ByvD6uZWyYmcnMUUs%2B33Is3F%2F8ofb58SeSXsSXlKc5G4I6qcJNDHtixzBosu6T6PSjl%2F&X-Amz-Signature=17eb5bf680a3ddad6353f3b51910dc450cda33e99e37697264c5aaff5e2cef75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EYB5WQU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCMtCfWvDDJ%2B9QuqoLHbQmZpZKL3qVl0Pvy0M9YVuEvkAIgO%2F2TJCBAU%2BY0KhIF%2Fh%2FPAJF0UcbN5yid78QnAFKHgQQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDAy1l%2Bqduay1lz3L%2BircA7Nf220Zb2KuYNJLE%2B8MeVi3hz98HvN4WXvQTPzuYo7EsuBx7U5TcZGT4Tp5RmB0qrtk3dZ99hPsPTYjZNfoqKEoQhHYyOGULSD87t%2FtJbgTryTOOdOMn%2BQMmDwKz0k%2FSZ5QMqe8uM9jAK6VZpHd0WtDKYo9sEdvIDM6RYMEqeP1U5DM9Scn6hI34mf9jSSXT0cKfRAVohrvsCfS0FLcqw%2BEHyo0F6GwT%2FBbGDP2k036958zWh%2BZfMVeuJdlMqkCvgpfGZ5yZES9ET3mgnriNMCp5Gj0x6uQ9TZ03CyaSHno5OZRlqQAZ%2BHD26tzvRJrCzTunQ1CcLqjHg5bkmWOu2h9KXdB8Gfve6l5Gtu10dC5zndCMCWtrwqx9bdY7pNjz3tET8PngWT9T%2BOzYfJXJrbrpgDDuA6FD20REcJoUPxBorqX2Btr1m4EXO5pQAxm4Os3m53d%2BYoIGB7dolT42TTxQpFtxj5AZTjpjZukq3p0SvAP7YOR06wopU2lslAE6wxQfOVtcEyJByAMzq%2FZ1VUFw9wzePOaJ3jRaGYa2QeH5bZuv9qOLzUovPUyaz1t0ThstV13GtXXbZ58nbL6fjBqC7pJ0Xgr%2F7jmdzx9d41nPuPQIJkHAks4%2B3AgMOnzkMQGOqUB2wqroHndDu4ZU6pnXg72Nxir6AcReh7YHroraYgcft3vzqJ9k%2FsHrKPT5voQ7vMJtjl1evryv0ydbpzR5D4NlyXEskne9UuiSGvkgiFQ%2FVTfRLHuFukIKg9DqluywH7%2Bp%2FjKXFagVJBkqjFUAQ2RsFjnEQ8Px%2FvfFkP5sMThsipPnPsAphP2LE3YLYnK6kwSN5sEY9Pmqoio3gCCkfW7mjgoc85b&X-Amz-Signature=bb0f0685eb295269355ebf37f5b1a0975f1c224ee9d564e27850920bdcdabf51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HR5CHTQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICwSzkuAPLgj3kOuR%2Fbw328Sr9ymJuBSv%2FB%2Fq2VOqSyvAiBlx2Maqr4LCarLR%2FZTbqRxJFuIADFE4zzsmJIUyOL%2Beir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMx9GB02JZX1wFx4glKtwDJlUfjMGzbWrVGYBUjqzRp6cANdWx8Jb%2BZB0i3xgrYzCoUAUgMaa2X%2Fmyr0IwZtymqKAGs%2BD%2BWxKZcU3J%2BP2ptukBAwTNY0ZOjuOkjidLL3Dgg1dmh6SK6TnAgpzzA3uALTpa8Raz%2FUfEaMxHrp2vsmQSfRHzAxKbgmkL%2B9PZ9qt5efdwc7P9IKh%2BskHPbyMnF6HK0j%2BthriQ%2BmCNcoZypg56mQKeIzlmqoUQcAoZwpe4sZhiYWpdOvcDfw2nCdjZRWrUxMUj4QBr88VvlpJei2GZSzSRnwUBjFuI5IhYAnjbfjbcqcCaIh0BL%2BuZ2bGDeKGDeZ4%2BCWPqRD8zVHsQmLj3EGMtOpapsQO%2BL4%2Ftuiopp%2BTgA8UsFUu7OmPA860vGKymd6o7mrlEZvzMC7yCWU1fctCZjYMHLz4sNznStVA%2B3iCP3XWBil7tSDmldbNF6SuKL35HAVNwljUlWykIT2d8froO%2BvIYrSPPdTv3edoNgbLqUj2zQtoY60ATVOe2vVXw13OMu4KHRfUTBP3N%2FZ7uwp8mxajXA%2Ff1Ai3TGrrjiH7JFYYSDmraaF6pYnNFIG280b9wTu3kTdbmy3SHTEDAKdIdVsHoRMM9xXuFijqUKZZ3XELWXsBzWLIww5WRxAY6pgEnRe2dpkdg0U6O8DwKyrOlN8Dnx4Um70coPCkmSbj%2FUbaQ1U2nUXhj8WgcyZ4fRkNMk7%2BDDLJAEXY7uhtrJH%2Fd7m3BXwRIgrV7S7dfjVJyvcfkDS1IWQxlST04itNTdTWctSHUKZC8T1c7SgIjl%2B2qUirMCLi%2FrJglBRT9QG7JXHB%2FQ2RVkqgkr0Je6RRSXJXyn53pI9ghj%2Byx1aWg%2Fkc09s9xFCo%2F&X-Amz-Signature=7319b386cf968eb8676ff9d855437536985bbaac57df76cda033359baae6aba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
