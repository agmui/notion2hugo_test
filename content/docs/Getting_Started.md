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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLPL7RNZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqzvAY7gYovNMVUXKuEfwmQz%2BSPqr%2F9gf%2FC23lEiIlbAiAd%2FbGvoawAJSg%2BRS4rBZ0ruax1tza1Y1YLby0W9o0v9yqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sDLzdqGdA4U%2B8%2BaKtwDvsNFSt70IY1LL33SNKfm80HDElNHiv9HKNyD%2Fl%2FnIECDRFHbKu9pbTwai3TvhLR1xN9XNPkbCWiI%2BDy4BQqtAKhv14F9%2B5IggkEBovi%2BiPkNeI7nUoIT5uV%2F%2F4geHSagM39tuilH7ll0vyGAhAEHYExu1wL1MyL2OQ%2BN86a8Sa8MQuSu%2B2vxOAP%2BPil6ZOO8r2uBZLKD5Ozy6UXGBGm9fJCuNPHJJThfw8S%2BW3y%2B5SgXycMPFPHWma12MSLFVViTCyPE9ExL1sVBtoClx4IqWalyINBgMpSp8upFrVK%2B4MTeYfu6afbaHXFJG1e%2F2y5haJvQ536G3YIPWmVHmgaE4u9xYLfiVG4phSIK%2FYS3lYAX7Q1zWYHGd9B1uUrnS2tO26DpuvqVjKZ9pUBNW9riww9PKr5bwhsuSNaSzsDayj5Iz6HG2jkj93zCWfjN7Wo99%2FoZSSmqeoRD1whzisNn46T60R8mC9zYevNmWFcOHyC9UVMFM5KPpI9o1twauWr7A3X1pQpoZI3ZDmKQd5bifpOtwM%2Bq1651l5A0KGc6KghJ8gezxldXozRgzBea%2BZwyT2H9xyTPjS7gzW2QN8jMkrExN0pv820QXUH9UA%2FwhpGHuyrvrjveT8QrveIw%2F92jwgY6pgFZ9lZF9Sso%2F59%2FUBWwGo9LN72u0h65y7TBN51GRJnBKY5BXovhp8ULDqgNAyi0vnfY1uluPiRZo8U9NrU1wJ7a%2Ff6LQHJtKMfisXBrgWNsOLgI7wo%2FgcNrJ%2Bh3ujKvOYLfHIdQj0wddA8Y4kyDWxRv5jyGvwNJuUKSJFg9sJG93h3atKKReeU6A8rbDEBFIw1NK3QrMNTUbj1ZfAxYicz%2B%2FJd%2B6Z29&X-Amz-Signature=c4f95af7ef6e783915b7a4873f4b0315d30d171cf65e2a21bf360cbfb5bbe312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLPL7RNZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqzvAY7gYovNMVUXKuEfwmQz%2BSPqr%2F9gf%2FC23lEiIlbAiAd%2FbGvoawAJSg%2BRS4rBZ0ruax1tza1Y1YLby0W9o0v9yqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sDLzdqGdA4U%2B8%2BaKtwDvsNFSt70IY1LL33SNKfm80HDElNHiv9HKNyD%2Fl%2FnIECDRFHbKu9pbTwai3TvhLR1xN9XNPkbCWiI%2BDy4BQqtAKhv14F9%2B5IggkEBovi%2BiPkNeI7nUoIT5uV%2F%2F4geHSagM39tuilH7ll0vyGAhAEHYExu1wL1MyL2OQ%2BN86a8Sa8MQuSu%2B2vxOAP%2BPil6ZOO8r2uBZLKD5Ozy6UXGBGm9fJCuNPHJJThfw8S%2BW3y%2B5SgXycMPFPHWma12MSLFVViTCyPE9ExL1sVBtoClx4IqWalyINBgMpSp8upFrVK%2B4MTeYfu6afbaHXFJG1e%2F2y5haJvQ536G3YIPWmVHmgaE4u9xYLfiVG4phSIK%2FYS3lYAX7Q1zWYHGd9B1uUrnS2tO26DpuvqVjKZ9pUBNW9riww9PKr5bwhsuSNaSzsDayj5Iz6HG2jkj93zCWfjN7Wo99%2FoZSSmqeoRD1whzisNn46T60R8mC9zYevNmWFcOHyC9UVMFM5KPpI9o1twauWr7A3X1pQpoZI3ZDmKQd5bifpOtwM%2Bq1651l5A0KGc6KghJ8gezxldXozRgzBea%2BZwyT2H9xyTPjS7gzW2QN8jMkrExN0pv820QXUH9UA%2FwhpGHuyrvrjveT8QrveIw%2F92jwgY6pgFZ9lZF9Sso%2F59%2FUBWwGo9LN72u0h65y7TBN51GRJnBKY5BXovhp8ULDqgNAyi0vnfY1uluPiRZo8U9NrU1wJ7a%2Ff6LQHJtKMfisXBrgWNsOLgI7wo%2FgcNrJ%2Bh3ujKvOYLfHIdQj0wddA8Y4kyDWxRv5jyGvwNJuUKSJFg9sJG93h3atKKReeU6A8rbDEBFIw1NK3QrMNTUbj1ZfAxYicz%2B%2FJd%2B6Z29&X-Amz-Signature=6aa4854ca99b5a5bc27a5e1c030eaa674732b62f72c086081ce6bbc916087891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLPL7RNZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqzvAY7gYovNMVUXKuEfwmQz%2BSPqr%2F9gf%2FC23lEiIlbAiAd%2FbGvoawAJSg%2BRS4rBZ0ruax1tza1Y1YLby0W9o0v9yqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sDLzdqGdA4U%2B8%2BaKtwDvsNFSt70IY1LL33SNKfm80HDElNHiv9HKNyD%2Fl%2FnIECDRFHbKu9pbTwai3TvhLR1xN9XNPkbCWiI%2BDy4BQqtAKhv14F9%2B5IggkEBovi%2BiPkNeI7nUoIT5uV%2F%2F4geHSagM39tuilH7ll0vyGAhAEHYExu1wL1MyL2OQ%2BN86a8Sa8MQuSu%2B2vxOAP%2BPil6ZOO8r2uBZLKD5Ozy6UXGBGm9fJCuNPHJJThfw8S%2BW3y%2B5SgXycMPFPHWma12MSLFVViTCyPE9ExL1sVBtoClx4IqWalyINBgMpSp8upFrVK%2B4MTeYfu6afbaHXFJG1e%2F2y5haJvQ536G3YIPWmVHmgaE4u9xYLfiVG4phSIK%2FYS3lYAX7Q1zWYHGd9B1uUrnS2tO26DpuvqVjKZ9pUBNW9riww9PKr5bwhsuSNaSzsDayj5Iz6HG2jkj93zCWfjN7Wo99%2FoZSSmqeoRD1whzisNn46T60R8mC9zYevNmWFcOHyC9UVMFM5KPpI9o1twauWr7A3X1pQpoZI3ZDmKQd5bifpOtwM%2Bq1651l5A0KGc6KghJ8gezxldXozRgzBea%2BZwyT2H9xyTPjS7gzW2QN8jMkrExN0pv820QXUH9UA%2FwhpGHuyrvrjveT8QrveIw%2F92jwgY6pgFZ9lZF9Sso%2F59%2FUBWwGo9LN72u0h65y7TBN51GRJnBKY5BXovhp8ULDqgNAyi0vnfY1uluPiRZo8U9NrU1wJ7a%2Ff6LQHJtKMfisXBrgWNsOLgI7wo%2FgcNrJ%2Bh3ujKvOYLfHIdQj0wddA8Y4kyDWxRv5jyGvwNJuUKSJFg9sJG93h3atKKReeU6A8rbDEBFIw1NK3QrMNTUbj1ZfAxYicz%2B%2FJd%2B6Z29&X-Amz-Signature=f2902929e03ae9d9ea93b7725d410420549fc4ca094ec15b9ce3ea5b4cf2846c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z26DT22V%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtzhNgJgTsxwVfzR%2FLZsJHMvkbj92hqg%2BikF6e8LVO0AIhANYS0JVwK13NQVXbI4gYIi4p5AjdSIUjBeJxauKCmb%2BUKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9v%2Fvg8QXtkPeTATcq3AM7TzLAt3NYne0pEE50a54YvuoXMLJr19ae%2FnZydBYsQQbg%2FWF8MBVNGlEwtEV1rD1jHjPd1imUwXimTt1EIgYEfBRrCLZwRkXRB8WrrerHRYeqLbrqQRD7cuZN1Qrl6LRphj81CvADFSiEtCnyB0C7M6aV9KqcJhufVlL7MfUZ5lMTO7m9drq8CbHcCs0tgBEOqvxTWZhN9BaMdJiolvIfxVfBzPi8vGkHbfoFeaiYc3xJrUfcmKcy%2BM7yFwRQVPc9pGqMwAy7sxffRWPH4NXAlaF0IYO4ew6JQFf1j4kp4XnkdgdY3qgBEvQ%2F2RpmZDOCPbtsGs7qCxf5TuaOrW8%2FQ2eT7%2F7LSShkDCqdJ5vxdUANevbGWXtpM5wxIm3mHSB5WuMi36L6IucPyrKpJYs2ubyuubZw8oVwpjnqp7gUa68m7QvNEntTfU9lZj%2FcX45MZRfYT3RhnuWYCjhNbRCdywBw%2BsVEKQmlmv%2BXYGmbpGp6P7oAPQDRYpTnu4b%2BCURd9%2FcOHoY6di45VOvDi2HpJz56AQ1N6upNiH%2F4FQI%2FHgP8cuHUQtPqvEhPrtmvd063TpCdB53Y4fQJKZaV0gDJAOAvX8ZVj3AfS%2F8cjkUZ5xxHfXPRavOY58samDC93qPCBjqkAUTNesyTvFBgYQ4uUws4kyxEACu4YxBfGPm57QWs6gwuFG8vS%2BHL5VWTdKkxBUa5Ah9%2BIyey6a8am0q1dJubXwqTBqLp2fazTQ4pr7EJeVONHMcfEuCd25%2FgbpP4g0UAsJHiUfEWPm3bicE7oMOzcI3JMkbgogcIbYQ%2FPmqfuMLyx8rYGzgopkVDKdJ8Pp8IdX4Lp3h6vbgMaMDIna8oVu%2BIG8Xn&X-Amz-Signature=996766fdc783804812f670644dfd3b8ba74e81663414e8132d52b8facdf6239e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJFOFQN%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnkeAejgRKUZJ5prAqU4ELnk9OdXFD7A7Ac8Q%2BQLcQ7AiA0qXJPhKduJSD4kh1lwOC6qZnn9SfE12ggh68f52gvpSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMLkjynabNk0vyTDBKtwDbzA3n2cV8Vpdgqs2EeW9gmpwqkg6lX15OG%2FKp6Le7Gmyectni0JCi25%2BG5VzxkC1h5OC62WJvPeskEm97d2uZDyIxelZLAHkjfgzbRCtbyQTGYL2y%2FIIw7aPbyh8U3TC%2FC4re26DOMKkGrXHFS8J0TolWDg08ZZZxtFvnGoCTm5aw1FyphmR2PxJA3TftGMhTRPqnaZzabpkGaE1LpO44ICda67fxbHQna0qYTuH7RBqbMsWAuUjILx99fNdQANIvhedP04SiraCg9VQlUDK6%2F%2B93RzbB3hO5hJsISNqwf%2FYFHqnJeWV4GAFLiGykL4LHZptvkZDdzGHoQJTMdMOGRuwvqBEZLtcg6WgCngzkvnrynpt2bjDltRSE54HQovpZXyl9CrLdLc%2FQ16%2BVstNqI6%2BaVaxgsU6BnBnS7vYaZ02b9kED6NgC0cDGrcOIy%2BxRG6tT9XHTFZWFFygH5R%2FwOQCQYJXf67BexpUw9AdGEdXCO6Y42ATQEaaMLwhKZYmEbj7c7HZTdsRXpaLTiS7X0cAGxq7cKiVRKcx6E7rKw4rR4RPXCYHi8ZbLNBVwkYbrg1SJ7UZKVG8QPeUgB8SvKW9mBNPDx3dfHTNL0RV6bKryIGacmc5sCAToWswoN6jwgY6pgF9%2BQQOtvjZ6jGa%2F1n7uF0MQO4%2FOYy4yEYH%2BLnsitY7syodZdZ%2Fzh62daMD1pSgvHPtZ%2F0SKBfSoh6AjuVcmQewBvBLUAko%2BDsEd8qyHK5kSD1L4aBFO1SYeFJj6nJiKjJQ4%2BnfpusonBcUF%2FfRlH5JfnFzz5pG%2FMTiRZtCk56M%2BzQxGuRJH2YP7G58efe0IAXj%2B0EZbyLGzJU19SeOhuavq6OydbH6&X-Amz-Signature=455ce593abfa52d7ea302aea630557ccc735a5ed24df8a6a95db1138dac7dc46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLPL7RNZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqzvAY7gYovNMVUXKuEfwmQz%2BSPqr%2F9gf%2FC23lEiIlbAiAd%2FbGvoawAJSg%2BRS4rBZ0ruax1tza1Y1YLby0W9o0v9yqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sDLzdqGdA4U%2B8%2BaKtwDvsNFSt70IY1LL33SNKfm80HDElNHiv9HKNyD%2Fl%2FnIECDRFHbKu9pbTwai3TvhLR1xN9XNPkbCWiI%2BDy4BQqtAKhv14F9%2B5IggkEBovi%2BiPkNeI7nUoIT5uV%2F%2F4geHSagM39tuilH7ll0vyGAhAEHYExu1wL1MyL2OQ%2BN86a8Sa8MQuSu%2B2vxOAP%2BPil6ZOO8r2uBZLKD5Ozy6UXGBGm9fJCuNPHJJThfw8S%2BW3y%2B5SgXycMPFPHWma12MSLFVViTCyPE9ExL1sVBtoClx4IqWalyINBgMpSp8upFrVK%2B4MTeYfu6afbaHXFJG1e%2F2y5haJvQ536G3YIPWmVHmgaE4u9xYLfiVG4phSIK%2FYS3lYAX7Q1zWYHGd9B1uUrnS2tO26DpuvqVjKZ9pUBNW9riww9PKr5bwhsuSNaSzsDayj5Iz6HG2jkj93zCWfjN7Wo99%2FoZSSmqeoRD1whzisNn46T60R8mC9zYevNmWFcOHyC9UVMFM5KPpI9o1twauWr7A3X1pQpoZI3ZDmKQd5bifpOtwM%2Bq1651l5A0KGc6KghJ8gezxldXozRgzBea%2BZwyT2H9xyTPjS7gzW2QN8jMkrExN0pv820QXUH9UA%2FwhpGHuyrvrjveT8QrveIw%2F92jwgY6pgFZ9lZF9Sso%2F59%2FUBWwGo9LN72u0h65y7TBN51GRJnBKY5BXovhp8ULDqgNAyi0vnfY1uluPiRZo8U9NrU1wJ7a%2Ff6LQHJtKMfisXBrgWNsOLgI7wo%2FgcNrJ%2Bh3ujKvOYLfHIdQj0wddA8Y4kyDWxRv5jyGvwNJuUKSJFg9sJG93h3atKKReeU6A8rbDEBFIw1NK3QrMNTUbj1ZfAxYicz%2B%2FJd%2B6Z29&X-Amz-Signature=2360636715c48c5360ac8076e3f54528faeab5a65cc71fae8df68a3eee65d42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
