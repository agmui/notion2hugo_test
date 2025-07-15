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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKAXYQH5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHE1Q4TD2HfgC1OtYODu14%2BYJM%2BCd1SR0aD20q0lKNkRAiEAjEafP%2F7oRUZ0v%2BquPdnKWm4cXwRtws3rqbxabU1exfAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCy%2BB4iZhkbGCLHGGyrcA%2FMdxa%2FoN9irzBle3fitkqQnq4D3ti76knLZTlnBrvZHH2SlO5Uuj1O2ilc28p3rPYMAZV6PtfLYxcuavy5HJujVecrDjAqNVMKVd2tXLgRH9pfp%2BLg5FCtXdISvk4%2BukITgfTutEXbfQoEEgfziSGLyWn89JEza%2FX%2Bdaq4HgErLfNIZ3fc%2BNExHs772EGlD1rsnpZaumvlfwK34vZIv%2BtggfXh34lu9uP6H%2FXgJ9VdhR6VuqQkjlBmKXbeBSlJFHNsZFx10eLyRnQOGwXOzLdbgNd94iYoQXZJaDLvyRV87EYzdYmF3O8MoA9Xz58XL6MDnzYJJ%2BrFOUJyyHAdiHHqC67uf4uBFWuTZlOoQ8QymffapDOt4s945PRjg4xKhC12g5y3I20GHeKXb5%2FcliQAQXyZE%2FoNRraJfuIJ0tbf%2FVI95x%2B9IW4N5k2v0pTfVfrhvlLN8%2BLWG4tFl6DJIPR5%2BbiFnoR5mLT5WtqeAaFgpdjfwL%2FMrhduepoVN%2BINb41VgmzqwMQpSLsCAnjhW2dFnQtGS2bmP6w3P31UgxMAcdHSr9%2Bs%2F1QPfgGI44iZmVSz1RFgZqBpUSSJ%2BHGfM6cDLi6mjbRyfkR1y%2B%2FzWSxsPQrRC6BJ12MA9w96iMKKk1sMGOqUBXb%2Fr0EpszvXTisj%2By9DHD%2F%2B%2BCsrJ%2BdhQxc9HyWFKCPUKKdgm4O5qPSaI8E2TWpB9cYCACJxOUFBDxI8Nl3xLch8MyNNZOceETzQ99BIok2ggSMUxQwZdAAeUScJMgBuwWjp71QGAGKD3Nj8QfNxhQ1d4S4Gy09vyybLcM2LXSTldRw0JFrijLFkNYPedcp6tG5%2BHhzzckKEa3iW0pqnaCEII1l8Y&X-Amz-Signature=6b30abe88cead0b9bc12c163d9587f9abb6deb675b511a315fdf73cfdd4c3e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKAXYQH5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHE1Q4TD2HfgC1OtYODu14%2BYJM%2BCd1SR0aD20q0lKNkRAiEAjEafP%2F7oRUZ0v%2BquPdnKWm4cXwRtws3rqbxabU1exfAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCy%2BB4iZhkbGCLHGGyrcA%2FMdxa%2FoN9irzBle3fitkqQnq4D3ti76knLZTlnBrvZHH2SlO5Uuj1O2ilc28p3rPYMAZV6PtfLYxcuavy5HJujVecrDjAqNVMKVd2tXLgRH9pfp%2BLg5FCtXdISvk4%2BukITgfTutEXbfQoEEgfziSGLyWn89JEza%2FX%2Bdaq4HgErLfNIZ3fc%2BNExHs772EGlD1rsnpZaumvlfwK34vZIv%2BtggfXh34lu9uP6H%2FXgJ9VdhR6VuqQkjlBmKXbeBSlJFHNsZFx10eLyRnQOGwXOzLdbgNd94iYoQXZJaDLvyRV87EYzdYmF3O8MoA9Xz58XL6MDnzYJJ%2BrFOUJyyHAdiHHqC67uf4uBFWuTZlOoQ8QymffapDOt4s945PRjg4xKhC12g5y3I20GHeKXb5%2FcliQAQXyZE%2FoNRraJfuIJ0tbf%2FVI95x%2B9IW4N5k2v0pTfVfrhvlLN8%2BLWG4tFl6DJIPR5%2BbiFnoR5mLT5WtqeAaFgpdjfwL%2FMrhduepoVN%2BINb41VgmzqwMQpSLsCAnjhW2dFnQtGS2bmP6w3P31UgxMAcdHSr9%2Bs%2F1QPfgGI44iZmVSz1RFgZqBpUSSJ%2BHGfM6cDLi6mjbRyfkR1y%2B%2FzWSxsPQrRC6BJ12MA9w96iMKKk1sMGOqUBXb%2Fr0EpszvXTisj%2By9DHD%2F%2B%2BCsrJ%2BdhQxc9HyWFKCPUKKdgm4O5qPSaI8E2TWpB9cYCACJxOUFBDxI8Nl3xLch8MyNNZOceETzQ99BIok2ggSMUxQwZdAAeUScJMgBuwWjp71QGAGKD3Nj8QfNxhQ1d4S4Gy09vyybLcM2LXSTldRw0JFrijLFkNYPedcp6tG5%2BHhzzckKEa3iW0pqnaCEII1l8Y&X-Amz-Signature=19aee11dc0ef056e66c8076e95ba364bb82da9152271d765f49d0ef53265b704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKAXYQH5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHE1Q4TD2HfgC1OtYODu14%2BYJM%2BCd1SR0aD20q0lKNkRAiEAjEafP%2F7oRUZ0v%2BquPdnKWm4cXwRtws3rqbxabU1exfAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCy%2BB4iZhkbGCLHGGyrcA%2FMdxa%2FoN9irzBle3fitkqQnq4D3ti76knLZTlnBrvZHH2SlO5Uuj1O2ilc28p3rPYMAZV6PtfLYxcuavy5HJujVecrDjAqNVMKVd2tXLgRH9pfp%2BLg5FCtXdISvk4%2BukITgfTutEXbfQoEEgfziSGLyWn89JEza%2FX%2Bdaq4HgErLfNIZ3fc%2BNExHs772EGlD1rsnpZaumvlfwK34vZIv%2BtggfXh34lu9uP6H%2FXgJ9VdhR6VuqQkjlBmKXbeBSlJFHNsZFx10eLyRnQOGwXOzLdbgNd94iYoQXZJaDLvyRV87EYzdYmF3O8MoA9Xz58XL6MDnzYJJ%2BrFOUJyyHAdiHHqC67uf4uBFWuTZlOoQ8QymffapDOt4s945PRjg4xKhC12g5y3I20GHeKXb5%2FcliQAQXyZE%2FoNRraJfuIJ0tbf%2FVI95x%2B9IW4N5k2v0pTfVfrhvlLN8%2BLWG4tFl6DJIPR5%2BbiFnoR5mLT5WtqeAaFgpdjfwL%2FMrhduepoVN%2BINb41VgmzqwMQpSLsCAnjhW2dFnQtGS2bmP6w3P31UgxMAcdHSr9%2Bs%2F1QPfgGI44iZmVSz1RFgZqBpUSSJ%2BHGfM6cDLi6mjbRyfkR1y%2B%2FzWSxsPQrRC6BJ12MA9w96iMKKk1sMGOqUBXb%2Fr0EpszvXTisj%2By9DHD%2F%2B%2BCsrJ%2BdhQxc9HyWFKCPUKKdgm4O5qPSaI8E2TWpB9cYCACJxOUFBDxI8Nl3xLch8MyNNZOceETzQ99BIok2ggSMUxQwZdAAeUScJMgBuwWjp71QGAGKD3Nj8QfNxhQ1d4S4Gy09vyybLcM2LXSTldRw0JFrijLFkNYPedcp6tG5%2BHhzzckKEa3iW0pqnaCEII1l8Y&X-Amz-Signature=43f7858be9865ede1acde9347fe2ed0af45f81e6c536741c52e1697525608a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HNJSVO3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCbpljqxWNbJbXw%2BNoT9h6Vsp1ihHLR%2BNWZ6E453wU00gIgP%2FaITxWE6rPVHo%2BZ6ZVSsNATUOeduf4vpudCCYbDAmUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKlrpALz1ZijERuVHircA%2F%2BJgkEwpAciuQ1b5AYfC1xHb5OzHiuFHE%2FcC2I3FMmFnfURyDQxGU13GM1DAQMmb8PQAY4ew7XhqWFGZ9h%2FY5aOk6KRqsKkgPDKhp%2BfZ1O7V1pFNmYTIKX8c5%2B%2FQSe%2BwM61XLhArrumNVISF9BlCE9yDgPnHg9QiNt1T9bRyqureraoiN8QEzTLE41WWjH9JYdvGwoYrfcOkviDGfmsDKs6CvSSOtbg6FiwRe9l4RMCjS8lA%2Bcnxuv3apiZE36uRjPEAMWLKRf1YOx6%2F1p46jycEkj8BhbEtxnQapvYLB542f%2BfF45rejgoEFpwg6lrG2Oz0f9h%2Brch%2BXAdisgGmfByLVtZU8kexZH9ktqp%2BxsSUkaZPqqWMC7tBoAc8D84i9aqUCTBiIo%2BM0K6XDOJ2ohJ3ahD6%2F0pRiIXO%2BRhjUz16itJBV4u47ybbnK0%2BwKs%2Bc5NgpCxUQMBLz72z1LcBYQu0nQNwoiGNKl7HHNrDFb0k9BVSeJH%2FuHrBNRMOWKDe5WkeV5Y2v4mQvE0Q3mwDPSy5iFHhoF1%2BV4L2daX5S5PNdOCxAOexpiToLYpE5WQ1gsX3cOjQf66clQJLC9xef4qdGOl51j4%2Bna083qXswiuZG1YmoCTo0FKPnHVMLOk1sMGOqUBs0iEwWauC%2FBh1RLnqXY4ivpX3GcbZs2m%2FGZhytRqlISB5wyF%2BNFbwozN3uenCDpuSI4OZvmGN19LS%2F7G7qexlk1jO6F7EkZlujhzLACqL%2F9p%2Fet3p1FfGfjL%2BmB8MdivZlgjmt6CdaERaw7VoiTE%2FiqPph4aPiJV6uG4Jung6T%2F0Yc33D7u%2F7xpVmJ98PPWS7PkZyo6pUBahRYZMEU4%2FrktVTyXu&X-Amz-Signature=7493fb511e33639f2896392a433c117661bf226290de33b7d4ba2412555e4f09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466747VWMKK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFw9h1ZaX0O2XBjNedW8ezYG03hxrN%2FOz8hn5Lsss5HPAiAWAm0FTjTU4ZWnhEF3tVOvdIcWzGY5KVJxRBPUm8cG5Sr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM%2BWUH8QwUK62Yok%2FNKtwDskGMYgNwnGJrQUoYvrch5rOqQpvY7GbdLjfw1hl3TkmtkjrV2gTA3uMbMigM%2Fnd720YeduvG%2BkSXl2UF7DOGEMXcdQ7yxIvooCbKAGWRxgFCJCrJ2NUZyXKed8bq3LX2XZCCXX2MVhzG5PiaRqeDsLyZxAErE2%2FMSTkCI0d07r1w8jD725iBSoRt5qDg4cunO0Ng1V1aO8UEaV0WHdyT0UdjCz85%2FnH81ZZECJewsqLexFlAbJ3rPDN0OrZgS%2FdEeKWgVYPIsR059idL%2Buwc%2F03OPX530pV7VL0qtX4uDmnUi4yDjvSyL7FITlQYNrDbuwDztzyL61Ey2Bv%2BlUtc7n2wI1MMXuiiIMoBkbkE2y1IEV6lu8ihSIFssjlxftDKnJn%2F9Gai3XWCrzeKs7BEa559Noan%2BLjWBPL1lcJL33OsQyQQSGJMJxymAwNWCqJ2hANgR0hwryN38eW2ImBWhFHG3EqaCf3jlkt94yZ%2FOA3q9LppVM8GQf9MsdFAaZEF0TVkdOJtdfTBzOtr4%2BgzwTNImFoNN2hMbyE9Pn6dLy1rroOERUiUeU0wnFAF467a4eoaY2dF9Tg4Z0O5N%2BJAbZRpWNcVuDGcZUDjKj54Bs1UHC08%2Fs3juaEnxSwwsaTWwwY6pgHp6OijbkGtQ%2F3kUHnHGwGqwYjmIIsIqLfSEXUCSJJUqrACpavsJy%2FatfcrQpy9wGM7ug8ZdkofDsNEhfxUXAr%2Fr9IRiUKW9XIACTVA4SOKv8scqL2NXt1GzUzYKitmFxCrxGRQ2c66b10meYFXt4NQEUsltk5PTJ1N9WVgXoOaYwpjsZtRbLYk4rdRffDsghjOKpPTjvlM3%2Fj8oxUoAxr3rqlTIrwQ&X-Amz-Signature=622d67f41cde2497ddf09645cf1dd5592a981d5754c625d57992f3dc0bdfe62e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKAXYQH5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHE1Q4TD2HfgC1OtYODu14%2BYJM%2BCd1SR0aD20q0lKNkRAiEAjEafP%2F7oRUZ0v%2BquPdnKWm4cXwRtws3rqbxabU1exfAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCy%2BB4iZhkbGCLHGGyrcA%2FMdxa%2FoN9irzBle3fitkqQnq4D3ti76knLZTlnBrvZHH2SlO5Uuj1O2ilc28p3rPYMAZV6PtfLYxcuavy5HJujVecrDjAqNVMKVd2tXLgRH9pfp%2BLg5FCtXdISvk4%2BukITgfTutEXbfQoEEgfziSGLyWn89JEza%2FX%2Bdaq4HgErLfNIZ3fc%2BNExHs772EGlD1rsnpZaumvlfwK34vZIv%2BtggfXh34lu9uP6H%2FXgJ9VdhR6VuqQkjlBmKXbeBSlJFHNsZFx10eLyRnQOGwXOzLdbgNd94iYoQXZJaDLvyRV87EYzdYmF3O8MoA9Xz58XL6MDnzYJJ%2BrFOUJyyHAdiHHqC67uf4uBFWuTZlOoQ8QymffapDOt4s945PRjg4xKhC12g5y3I20GHeKXb5%2FcliQAQXyZE%2FoNRraJfuIJ0tbf%2FVI95x%2B9IW4N5k2v0pTfVfrhvlLN8%2BLWG4tFl6DJIPR5%2BbiFnoR5mLT5WtqeAaFgpdjfwL%2FMrhduepoVN%2BINb41VgmzqwMQpSLsCAnjhW2dFnQtGS2bmP6w3P31UgxMAcdHSr9%2Bs%2F1QPfgGI44iZmVSz1RFgZqBpUSSJ%2BHGfM6cDLi6mjbRyfkR1y%2B%2FzWSxsPQrRC6BJ12MA9w96iMKKk1sMGOqUBXb%2Fr0EpszvXTisj%2By9DHD%2F%2B%2BCsrJ%2BdhQxc9HyWFKCPUKKdgm4O5qPSaI8E2TWpB9cYCACJxOUFBDxI8Nl3xLch8MyNNZOceETzQ99BIok2ggSMUxQwZdAAeUScJMgBuwWjp71QGAGKD3Nj8QfNxhQ1d4S4Gy09vyybLcM2LXSTldRw0JFrijLFkNYPedcp6tG5%2BHhzzckKEa3iW0pqnaCEII1l8Y&X-Amz-Signature=7df941bce79610b5fe632b05d732a22b881d15c48ed23b4d4d4eade7e1b56fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
