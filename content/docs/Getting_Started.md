---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4344S76%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID2ckGUk4YqiudbC12eVNjPXEfQlUixNU2cgmF0fMyGgAiBRm3m9A2PQBK7xat2TuhHiWkMOW3FRKqgTAfYofM9%2FPyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMR7DuAm8AJoYTGROuKtwD%2FV3HJBdplherN%2Ff5iqO3%2F8sLo2ND74uvzpLwYmEMl69i8hfsO7ZFLtGGCmZc87X%2BQIz2eaZMOvma6VeIQ%2Bfs%2BhbTR9Gnf2rAefPbkAtRgIDeJHtoZugZ6FfDnqUDdoufaYE%2BtfavB3C3ltzTGVj6tEAIB6k%2FTotbqTtoxlZgP5Xd2Of3seeJDdt9%2FvI3P9prA4oQLahq5IhBY5hQZPG9oNeXUVu72QuZ7KMh%2BFq6vNbQtWCICSGqUtS9y7hth52E64xocsksGvMGK1uKJ5v9tbvI3btum8u%2BOe7VNqn3QSnUQeElCQiDVF0atNMJ3QL3a5EgEuw9fdsssKVZsYmmFZie8jX6X0GOaskWLHs87zqc8ypkd%2BGXTde%2BNaJuQWSZR5NhJza74CdKEnlEm%2FH0ykjilwSW06UtFdmXOPj15mTlVgwDx%2B8HEvkS676jU0ASaDLNmBPRdiQIiCGb1V5sfZAww9kUm%2FFd5hvfpBxJs0VV9JHIKUVIGod2LOVWBH4XUXi3gcjO%2BgPmhy%2FegL6k%2BfbTVxelBUbC53TInezban0qEDs81CYMvTXE1SNBdok1pBMrYvEOZ6ULX4O3dRfadX4BtILu%2B37U8ypmigJGsJ6HfFURhTbCnGCwDTow0%2BKevwY6pgEqQ2GOVgTpmwufPdvfSQqPBUZRTv5ClCjbDAG6oxI%2Bw8hx7IukYBDCAF4yCjE7uaLrmP5DdZHXi068VYb3g9HnkHPgY46BEnvFhr8Q3IWTSy7GcPLjW89LN%2BhjXIdOv6JWHKlbkSN7HogkwvKpSwVouuii81a9fW9VtQuF18yoI8HQZ%2Br%2BeuUMnVu5ZxiJegF7DR7FBDBRVDbXgHf901xwwaPDBWsx&X-Amz-Signature=8787203b85005dbd1570a0c6659fc3b5cdfcdde96b42faeb086e7e58e8c42dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4344S76%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID2ckGUk4YqiudbC12eVNjPXEfQlUixNU2cgmF0fMyGgAiBRm3m9A2PQBK7xat2TuhHiWkMOW3FRKqgTAfYofM9%2FPyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMR7DuAm8AJoYTGROuKtwD%2FV3HJBdplherN%2Ff5iqO3%2F8sLo2ND74uvzpLwYmEMl69i8hfsO7ZFLtGGCmZc87X%2BQIz2eaZMOvma6VeIQ%2Bfs%2BhbTR9Gnf2rAefPbkAtRgIDeJHtoZugZ6FfDnqUDdoufaYE%2BtfavB3C3ltzTGVj6tEAIB6k%2FTotbqTtoxlZgP5Xd2Of3seeJDdt9%2FvI3P9prA4oQLahq5IhBY5hQZPG9oNeXUVu72QuZ7KMh%2BFq6vNbQtWCICSGqUtS9y7hth52E64xocsksGvMGK1uKJ5v9tbvI3btum8u%2BOe7VNqn3QSnUQeElCQiDVF0atNMJ3QL3a5EgEuw9fdsssKVZsYmmFZie8jX6X0GOaskWLHs87zqc8ypkd%2BGXTde%2BNaJuQWSZR5NhJza74CdKEnlEm%2FH0ykjilwSW06UtFdmXOPj15mTlVgwDx%2B8HEvkS676jU0ASaDLNmBPRdiQIiCGb1V5sfZAww9kUm%2FFd5hvfpBxJs0VV9JHIKUVIGod2LOVWBH4XUXi3gcjO%2BgPmhy%2FegL6k%2BfbTVxelBUbC53TInezban0qEDs81CYMvTXE1SNBdok1pBMrYvEOZ6ULX4O3dRfadX4BtILu%2B37U8ypmigJGsJ6HfFURhTbCnGCwDTow0%2BKevwY6pgEqQ2GOVgTpmwufPdvfSQqPBUZRTv5ClCjbDAG6oxI%2Bw8hx7IukYBDCAF4yCjE7uaLrmP5DdZHXi068VYb3g9HnkHPgY46BEnvFhr8Q3IWTSy7GcPLjW89LN%2BhjXIdOv6JWHKlbkSN7HogkwvKpSwVouuii81a9fW9VtQuF18yoI8HQZ%2Br%2BeuUMnVu5ZxiJegF7DR7FBDBRVDbXgHf901xwwaPDBWsx&X-Amz-Signature=a154c1ba1041637a9626019b2aa13322b0a109df335eb975b91f5707c1197aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD4P2K47%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCx02URHFwLkOERjVUJvdQtzzbZ9SZ0rrdquQF5QZ9h%2FAIhANNcpdRMCSfdmLCF%2FoZYedKyglq9g4hnmnahTLHq8kNeKv8DCHIQABoMNjM3NDIzMTgzODA1IgxiLM521AB0Ju1CBiAq3AO1ETz2Vj85777M9RUQDWCogZSA2dz9SND0K%2B%2BJOHnwHEg2Gt2vuhh5dnRUUWp%2FHmoiArJZ6m%2FcJTJlx4pU6JavMhVVeITi1PlU8mNE6gkXg0fbeai9pWGC6cJt6%2FYYhuiCjxPGgHLmas8A0ugWh6oopOGEKhVR9CiUbfvQhTnZVKcx%2FteJt1Tt%2F08Ylzizg10x8Ny7LQ%2B8uChtUH6Mb21UBWaqGugAWPJYLn%2B%2FKXUYdcq0%2FmhE%2BT6xWxUZ8wCdE7PSwDT5Ta7vDZfqZcid7nXCcj1%2B1ek15wAi055%2Fjz0HyTeT1v32niw8fMhFOC%2BKpFVz%2FJVfxfrFhtmVy%2BRareoj3nMIYEQUCAO7oPl2SwRu%2FAdjhwZCx82NrBoUqTOqYfyMT13WLHQ7%2FaehKBndrWOFDZ%2BIVvT024TLNkmZmHxwLU8YX2mwPISN82R7wAkKvgJE90UfgVLBrZreQni7EcaTk67sy%2ByX%2Bu2sYCoxZlGcRC4vSmwMGebgfiE8zW2x1%2FqfGSzyxsDDeb%2FDYr66wTAsNfWrTYWOa8o%2FXzMimxpX4WG0iGR%2BYnRzYpZ725ZjTeft0G3GjpM2jI1DDinqBL6hNnSsnqsFaJ%2FlPHJlR%2F9kZVKZKvYi9Jpq613xVDCT4p6%2FBjqkAY20SSR0x1eQE3FcxdUdV288p9pAxmPR0a6atkcFXmf5ED4Wo66u4cPJcHOJ9b1rsBsnsrhcrLW3m9kGUVqMmKZ1hV4FtLQwRJ0XBmwG05Q%2BFFjm3lS%2Byr4%2BqAZng2upNtOqJ1UJUaIixvv6O6du4adJv6LAdy%2FxCsNNsDfzSwEMtomclcJqrCnXW4SrnBHPUOZgRMkgatLI4I85y1%2BWhdCWRBNM&X-Amz-Signature=539e14a06a581e1ac4f95d149aeff9d41a4253fde7a751555980231c1c91aacf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB5YBKCH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDu6xXA%2Bm0yHblXBoPNBl5oHAwYAqyJ3M49baK3S9xLqAiBGW5J17wxeOwnTpzh4Qj0kiClQgL7%2FNoymlSK%2B7tZ0GCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMCs4Y4BC1uc7ysp4yKtwDWoCVQWK4bZNix1k9NHjb%2F8%2BRb%2Bm4aCBpXjM%2Frz85aU18WS7V9c6%2B5Sg4SsPwbl4pLrRiSbXMqvT1GPXDHgwzJLVKVgdwk2vwhmIvs8SHTevSBa7typmB1XGxgEZVnts474b3TMmQfNpYrQyBcKjoWaRGxfK%2FlwRpTw5UrlRPrv%2F7KJbFizHF4QUwmhrCQnST%2BjvwZbsDI6poc5lxchOTBDaG7G1LhKGkF5vhqF1SFy6Vf8jSwV8ZSGWXQ5ldxEkq48Wex1sMGbSupg9TV%2BycDLL7dAHT8Cv4NVKQhQ5sBxV0Di2r42CKOuJcEdcUh%2FBXeYV8AgcimvyDMsYkVWzr3eATzYM7D3zhFiS08Xs2kvx6dYTi0CXbvXUzZ%2BbN6W5ZlZRxLbO6HKHtLpTYKZJFWHvL%2BgaLmYqL2Iqp9in2LEJybv1w75ALs5ZU2YpJ5BsBIAsPYAkvVLC%2FvxqC2Z%2BEXenp8KQAn4%2BRFaw0QvwD49y22obeOUOI%2FzMRfVq21AF623P2zDNT0qU%2BJ5TfDftX4sFzD37tFQQGqOfKH22t11J%2FXsRBXouFiH2Orkk6G0ACXikOndCx%2FWONeYpKVci0xPAd1rs%2F6KVrOp8sij99e897J5eWYSbnuC8%2FJ7gw%2FuGevwY6pgGkoQI0b7YZvZpvtbhmBvd29w4MJHRpffA3Imn%2FOZSoWqExN2C49FZo%2BohMsIbjA9VGzwJqR4jDvZhdt0LsWdEo9OqW9CgL2HnHq8Lx3L8n1x1uk6loa%2BQ7K2oPT0T9kbZB1CXFunL1mTP2m8cqEXL6POI1lPggC1rLFAHciiBANPaVXOd5%2Bw%2FoimZhAMyIn3heKSsJC7fnrUdBYBxrQm6GMyWOSWKN&X-Amz-Signature=a66c7cbd1904fde4fe5816a5ea513e7eaec9e42b108129ab42ad0065edf2778c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4344S76%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID2ckGUk4YqiudbC12eVNjPXEfQlUixNU2cgmF0fMyGgAiBRm3m9A2PQBK7xat2TuhHiWkMOW3FRKqgTAfYofM9%2FPyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMR7DuAm8AJoYTGROuKtwD%2FV3HJBdplherN%2Ff5iqO3%2F8sLo2ND74uvzpLwYmEMl69i8hfsO7ZFLtGGCmZc87X%2BQIz2eaZMOvma6VeIQ%2Bfs%2BhbTR9Gnf2rAefPbkAtRgIDeJHtoZugZ6FfDnqUDdoufaYE%2BtfavB3C3ltzTGVj6tEAIB6k%2FTotbqTtoxlZgP5Xd2Of3seeJDdt9%2FvI3P9prA4oQLahq5IhBY5hQZPG9oNeXUVu72QuZ7KMh%2BFq6vNbQtWCICSGqUtS9y7hth52E64xocsksGvMGK1uKJ5v9tbvI3btum8u%2BOe7VNqn3QSnUQeElCQiDVF0atNMJ3QL3a5EgEuw9fdsssKVZsYmmFZie8jX6X0GOaskWLHs87zqc8ypkd%2BGXTde%2BNaJuQWSZR5NhJza74CdKEnlEm%2FH0ykjilwSW06UtFdmXOPj15mTlVgwDx%2B8HEvkS676jU0ASaDLNmBPRdiQIiCGb1V5sfZAww9kUm%2FFd5hvfpBxJs0VV9JHIKUVIGod2LOVWBH4XUXi3gcjO%2BgPmhy%2FegL6k%2BfbTVxelBUbC53TInezban0qEDs81CYMvTXE1SNBdok1pBMrYvEOZ6ULX4O3dRfadX4BtILu%2B37U8ypmigJGsJ6HfFURhTbCnGCwDTow0%2BKevwY6pgEqQ2GOVgTpmwufPdvfSQqPBUZRTv5ClCjbDAG6oxI%2Bw8hx7IukYBDCAF4yCjE7uaLrmP5DdZHXi068VYb3g9HnkHPgY46BEnvFhr8Q3IWTSy7GcPLjW89LN%2BhjXIdOv6JWHKlbkSN7HogkwvKpSwVouuii81a9fW9VtQuF18yoI8HQZ%2Br%2BeuUMnVu5ZxiJegF7DR7FBDBRVDbXgHf901xwwaPDBWsx&X-Amz-Signature=d33a5b570d0b222c20f9620ede8ac7b62866e0182ffb52bddd2aa483042cf216&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
