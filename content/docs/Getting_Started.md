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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LZ54JX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDesL8Oqwn2GW70CT%2BVUlJaSCxYUjkl%2Ff3Gr%2FIHDh6KigIhAPmV%2BWAVYWCC%2F%2BPl2vOptI9c7c%2FMQ13pbl7pwnuUA6AgKv8DCD4QABoMNjM3NDIzMTgzODA1IgyrDhoPYOg3vQU64wgq3AOOWMw%2ByPHUF2V70eqSucBbsVhBi0Tnzv6Cgd8UC8wKCRqn7VfScdrjZvZbLa55W4GCXMYGDZa3QKg%2F%2B8zZVbsoBINc%2Fh6ySPKdMnO%2BYt3Zer9j1BMbnIuvd%2F26kw8hwIJc%2B5Arccv%2FvUKFwpY8JP8eATzn56Pz7ygr0%2FaYlpMgZHNMwhz%2BHl9%2FnB3MT6UUv128kUTO4pyFYL8MCic0Fsb63KV5v659fojCbIhnIEawaOlaVUg0iW6YRyeR8PSJCAW4Ct%2F%2FSdbqoeMAI4RhWutZ0FxebblS7eMu%2Bgv2WlHiQl38YDXJEEdW76Dvry3lWaJPjHkdpSE0OcD2K9K%2B73XHgZ2Z6j%2BkYxwBFPXNVhZQSZLsfpCwDU5AiqiJje2P7VVktp%2FQVlY4XoRwN8abUDPTguKF1wwemPfYGCeYuWCosyHSSeAkBUQrYAI%2BgrHorR4KUMpctWhHRvvQP1ojeDavk5qUNnMZ%2FoiCUIj4Y4SI%2F43bm%2FCkBUdyx%2B9eIxvm552taCDUqnF0ilVWjodPH2ZwtVQ8ycTU33sWcutw0UtoEOZqA68GqFVE7cW5Vf5eH72%2F7Rg341yXu0xLXRhfuF9A%2FeTx31Q02bgjQBvE4W%2Fq5x8%2BNztYeJc4SZ8C4zCdsebABjqkAZEwMKUYjvt3WKrYKulPiYigCXlMgdHfMQXkXO8Sux2gZUVt%2BS9HKrfiTyDJ0ixxDxTvh2kUfh8Ydk5E7KDrVUCUF7Ryyx2%2BCu6qD6psk0o%2FGw5%2FvXWbCcsrnRar4yPGc7c7bXUlVwvTQbMyQVWUMeA5GzrMMnbVM6%2FAswvUX02Y6C63%2F2cO%2F4LoWskPHXZnCRFxBxnXOpB3pRDF%2FuLfgeonh0z5&X-Amz-Signature=6e7bb492e142d80a35ac31f7460412d9054fe08b0ca6de3dd20e8139d8739ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LZ54JX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDesL8Oqwn2GW70CT%2BVUlJaSCxYUjkl%2Ff3Gr%2FIHDh6KigIhAPmV%2BWAVYWCC%2F%2BPl2vOptI9c7c%2FMQ13pbl7pwnuUA6AgKv8DCD4QABoMNjM3NDIzMTgzODA1IgyrDhoPYOg3vQU64wgq3AOOWMw%2ByPHUF2V70eqSucBbsVhBi0Tnzv6Cgd8UC8wKCRqn7VfScdrjZvZbLa55W4GCXMYGDZa3QKg%2F%2B8zZVbsoBINc%2Fh6ySPKdMnO%2BYt3Zer9j1BMbnIuvd%2F26kw8hwIJc%2B5Arccv%2FvUKFwpY8JP8eATzn56Pz7ygr0%2FaYlpMgZHNMwhz%2BHl9%2FnB3MT6UUv128kUTO4pyFYL8MCic0Fsb63KV5v659fojCbIhnIEawaOlaVUg0iW6YRyeR8PSJCAW4Ct%2F%2FSdbqoeMAI4RhWutZ0FxebblS7eMu%2Bgv2WlHiQl38YDXJEEdW76Dvry3lWaJPjHkdpSE0OcD2K9K%2B73XHgZ2Z6j%2BkYxwBFPXNVhZQSZLsfpCwDU5AiqiJje2P7VVktp%2FQVlY4XoRwN8abUDPTguKF1wwemPfYGCeYuWCosyHSSeAkBUQrYAI%2BgrHorR4KUMpctWhHRvvQP1ojeDavk5qUNnMZ%2FoiCUIj4Y4SI%2F43bm%2FCkBUdyx%2B9eIxvm552taCDUqnF0ilVWjodPH2ZwtVQ8ycTU33sWcutw0UtoEOZqA68GqFVE7cW5Vf5eH72%2F7Rg341yXu0xLXRhfuF9A%2FeTx31Q02bgjQBvE4W%2Fq5x8%2BNztYeJc4SZ8C4zCdsebABjqkAZEwMKUYjvt3WKrYKulPiYigCXlMgdHfMQXkXO8Sux2gZUVt%2BS9HKrfiTyDJ0ixxDxTvh2kUfh8Ydk5E7KDrVUCUF7Ryyx2%2BCu6qD6psk0o%2FGw5%2FvXWbCcsrnRar4yPGc7c7bXUlVwvTQbMyQVWUMeA5GzrMMnbVM6%2FAswvUX02Y6C63%2F2cO%2F4LoWskPHXZnCRFxBxnXOpB3pRDF%2FuLfgeonh0z5&X-Amz-Signature=7d6a0f520dcb404c321e387ebdf27975cac3be0e7493ce01172837d0a2270ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LZ54JX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDesL8Oqwn2GW70CT%2BVUlJaSCxYUjkl%2Ff3Gr%2FIHDh6KigIhAPmV%2BWAVYWCC%2F%2BPl2vOptI9c7c%2FMQ13pbl7pwnuUA6AgKv8DCD4QABoMNjM3NDIzMTgzODA1IgyrDhoPYOg3vQU64wgq3AOOWMw%2ByPHUF2V70eqSucBbsVhBi0Tnzv6Cgd8UC8wKCRqn7VfScdrjZvZbLa55W4GCXMYGDZa3QKg%2F%2B8zZVbsoBINc%2Fh6ySPKdMnO%2BYt3Zer9j1BMbnIuvd%2F26kw8hwIJc%2B5Arccv%2FvUKFwpY8JP8eATzn56Pz7ygr0%2FaYlpMgZHNMwhz%2BHl9%2FnB3MT6UUv128kUTO4pyFYL8MCic0Fsb63KV5v659fojCbIhnIEawaOlaVUg0iW6YRyeR8PSJCAW4Ct%2F%2FSdbqoeMAI4RhWutZ0FxebblS7eMu%2Bgv2WlHiQl38YDXJEEdW76Dvry3lWaJPjHkdpSE0OcD2K9K%2B73XHgZ2Z6j%2BkYxwBFPXNVhZQSZLsfpCwDU5AiqiJje2P7VVktp%2FQVlY4XoRwN8abUDPTguKF1wwemPfYGCeYuWCosyHSSeAkBUQrYAI%2BgrHorR4KUMpctWhHRvvQP1ojeDavk5qUNnMZ%2FoiCUIj4Y4SI%2F43bm%2FCkBUdyx%2B9eIxvm552taCDUqnF0ilVWjodPH2ZwtVQ8ycTU33sWcutw0UtoEOZqA68GqFVE7cW5Vf5eH72%2F7Rg341yXu0xLXRhfuF9A%2FeTx31Q02bgjQBvE4W%2Fq5x8%2BNztYeJc4SZ8C4zCdsebABjqkAZEwMKUYjvt3WKrYKulPiYigCXlMgdHfMQXkXO8Sux2gZUVt%2BS9HKrfiTyDJ0ixxDxTvh2kUfh8Ydk5E7KDrVUCUF7Ryyx2%2BCu6qD6psk0o%2FGw5%2FvXWbCcsrnRar4yPGc7c7bXUlVwvTQbMyQVWUMeA5GzrMMnbVM6%2FAswvUX02Y6C63%2F2cO%2F4LoWskPHXZnCRFxBxnXOpB3pRDF%2FuLfgeonh0z5&X-Amz-Signature=24c8db639ba9f9bda9f1cda76d0e0d3de778a944cfc9059d716d68fdc0344377&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634PTP537%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzr00Fox3xnlC89fGdJxwPJ634l270aH%2FJbIXjjy2GVQIhAN0v%2Fhxb%2FQBQ%2FE%2BFIXCnKWa0o1lOBXt7A%2F0rZj367l5DKv8DCD4QABoMNjM3NDIzMTgzODA1IgybKfp0m8zZz22CD4Aq3ANnEpy6bugtPZFx0zrI%2BiDh9qaGT3SuEPXNAIncwE6Ftt4PEvuGVeJ%2F15VPYgyUerKdesRw8IxLaiBsh%2BxhB4SJGnDtmRVwvmZmHMNo2jcuLnMYEmU9CLW0izg4%2FMb98A3ZNJoUHPKWaAw2PV%2BLkQlJTC4Q625FqIS8X05Kja1X6kZE1G4sO1ITHAFBStnMKd7cCKDF43cyJWZg0o%2F9ubVa7fGFItIZlrp5d3z6hQxMRT9wxLFqrA8UyfChwAQ6mexwVrYmqAiJ8JxHxmSbuqq%2FztTj1hQ9iKDwyx0X9ILhpG0AFoRDDF%2BYbcgkEHWZBda78HayndYwo%2BjaDNcsIT%2FHSK0ktTYZp6gRbp8Qy0ScsXA5lavwPEqLJH784NfhCqs5qTdW1RAswi6TxhMIj%2FiuekYL258jghV30xr%2FPoysB56jXTqjMYZnDU8vhqAP0hnJfoY7vKK92%2FA8M6C87xLsLqyTD6l2l4H4Fqwd018kfEPAdU8oC8jeQ77xh3ssOPMjn7LocslnnZ8yL5pYFudsfO5cul7%2FwuHLFpR0o8TEtZ3OyoWi2Hbmt0lpXkQ6uz1XoyBsDGF4oqY5727qcAWEo42HTtOkBQDv%2FCNrfcfdD3px5lrt2hYB%2BhYSvTDmsObABjqkAe7rBKU32PZcgAHWbCw7RmsBpLAQ7gxhefBxXuUO9DxAZMdvwQOkM%2Bs%2B117kGcogGrmtOJYZrtOfdq%2Bu%2BsuRTn7vDmywHXr612RwVtLdIjlTG9P44zq36RRXg0N5czsOp2dxNDmSIm33VDpCE%2FpGT6P%2F4depz3nPUrzlqPdsYidE0LIsxtxR83WceQh2iKNR3xtWQY6p01OlSGD4bxJx%2B7iflT1T&X-Amz-Signature=5251f79b2ba6dc895b025a74d8d235d550226ebe1231bb5c24e0c9bfc5aa881a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQDJPQ6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7R9XD%2FvRDCVu0aWitxNWydcy1mDATWaEGb7MZb8iHhAIhAJkNKaCH98hj97cFQgNtmVf7zlrvZc%2B5yoKqHLo1PnE8Kv8DCD4QABoMNjM3NDIzMTgzODA1Igz5aeyx%2BCXhwYc8KoMq3AOKT2WI92sAogy0Nj%2BRv7XVJ1dx5wxCiIBLW%2BAW7fhfRAH3FJkIpMBPT5fO81BEvjJvrtMVVUATKJOel%2FKA9z5nrvy62EMcWmrbokioAqeU9FDaLrcGkhFSPK7hPQ4VrELlv2qhCz15r2k%2B46t2htCWDn6K1zXytxAvlhgjEG5plU5hnNeHkeouzZe0JWO2DhUavx4VJmJHepvrh9ThgwWz2yOQ3rgn%2B8id1qj4YyS%2BdcNoaBrGKMgYtPvk%2Fd9RIzY66mHox38ZZKdm5PppxdnHQa76jQX1YPccoYiLqyU1yGKZo44aQ6pWc4E0jmHU3r%2BDQl2Hwc%2BSFdeRKFjI3JP8nYpRnbs0dajtqvBo%2BfYRbDEXZnYP3SSZGAW49PlUEVRwHExupgg2iLsjxZsII0W62Luv%2B6dWNYqieGZpFBnKe1AS%2FIR1ce7CbgzbTFuHdg7ojWgEMcRCsmCZ7yB7Q3%2FT45yyglInkCzb9Ro1HpKcE%2BwUslhPEBObAseNmwAwJzadOuSiLdqlVEdEBsHVp11%2B%2FFyjFu%2Fj31k57jqFRHaWP2nCk2KM6h4aLdmC2gy2q9duaFTOIr9KH%2FoWSuffcywdj4kAX3SyAn4RbGe4WmymHvO%2F1B1huiuMvWcpQzCasebABjqkAWsivZh%2Bu5pTFkdU0jbVWbFqiKwD2ZhQE8PPR6ckO9zcxqWoNzKLnR8AlsSETXtk%2BSrVnbkaugMAIvkV7uz9qnFU2KY34JwD1hkQag8MxG3n9UYcLidaZH7k5fvlSUfHhNuDhLPJr6bFzmMugh4VdncqAS99%2F14GVNnunrG8yjb4mN5capYyWdkK4FeHP4DM9FtIcgQe%2FROPR1oyP1CDCmhajoky&X-Amz-Signature=3f2ce39c69793b4763ca224310f18574c00d635059bf9a747adbe72c4477d297&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LZ54JX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDesL8Oqwn2GW70CT%2BVUlJaSCxYUjkl%2Ff3Gr%2FIHDh6KigIhAPmV%2BWAVYWCC%2F%2BPl2vOptI9c7c%2FMQ13pbl7pwnuUA6AgKv8DCD4QABoMNjM3NDIzMTgzODA1IgyrDhoPYOg3vQU64wgq3AOOWMw%2ByPHUF2V70eqSucBbsVhBi0Tnzv6Cgd8UC8wKCRqn7VfScdrjZvZbLa55W4GCXMYGDZa3QKg%2F%2B8zZVbsoBINc%2Fh6ySPKdMnO%2BYt3Zer9j1BMbnIuvd%2F26kw8hwIJc%2B5Arccv%2FvUKFwpY8JP8eATzn56Pz7ygr0%2FaYlpMgZHNMwhz%2BHl9%2FnB3MT6UUv128kUTO4pyFYL8MCic0Fsb63KV5v659fojCbIhnIEawaOlaVUg0iW6YRyeR8PSJCAW4Ct%2F%2FSdbqoeMAI4RhWutZ0FxebblS7eMu%2Bgv2WlHiQl38YDXJEEdW76Dvry3lWaJPjHkdpSE0OcD2K9K%2B73XHgZ2Z6j%2BkYxwBFPXNVhZQSZLsfpCwDU5AiqiJje2P7VVktp%2FQVlY4XoRwN8abUDPTguKF1wwemPfYGCeYuWCosyHSSeAkBUQrYAI%2BgrHorR4KUMpctWhHRvvQP1ojeDavk5qUNnMZ%2FoiCUIj4Y4SI%2F43bm%2FCkBUdyx%2B9eIxvm552taCDUqnF0ilVWjodPH2ZwtVQ8ycTU33sWcutw0UtoEOZqA68GqFVE7cW5Vf5eH72%2F7Rg341yXu0xLXRhfuF9A%2FeTx31Q02bgjQBvE4W%2Fq5x8%2BNztYeJc4SZ8C4zCdsebABjqkAZEwMKUYjvt3WKrYKulPiYigCXlMgdHfMQXkXO8Sux2gZUVt%2BS9HKrfiTyDJ0ixxDxTvh2kUfh8Ydk5E7KDrVUCUF7Ryyx2%2BCu6qD6psk0o%2FGw5%2FvXWbCcsrnRar4yPGc7c7bXUlVwvTQbMyQVWUMeA5GzrMMnbVM6%2FAswvUX02Y6C63%2F2cO%2F4LoWskPHXZnCRFxBxnXOpB3pRDF%2FuLfgeonh0z5&X-Amz-Signature=38d03e0f90b0875eb4c4dd5ff795749b523c4e721796b9edae2348968f1741dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
