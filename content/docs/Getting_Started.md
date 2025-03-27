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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZ4NR3X%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeYZ7yvlokBPwsv6D268%2FOXjmA%2FNk1Da8Fyns494FOKAiB3bbJpy8yHCoCB4aH9quM2efO1uX%2BJziW6WoZAUjWVICr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMDeNKpyrJKyYfPaJ8KtwDQzzODzDr973%2BpuWI4aNdq6nPS6HaEy8N4anxCVH%2BFfGZ8QiF99hrXuAjm2OCcJoJLArAg%2BGeCx1GQE2IDXyd7d%2BlDf%2B9qSw%2B72X4lHF65%2BGlq%2Br8hxuxDFA4Fhi%2FV9pbvZ602XptCy4nAh1O2FgkmwhViXzGT7igdV6vgzQhDdgkpFNDUEEWiBiCt%2Bj%2B72y%2Fi%2BFqJmEgEX%2FpHojkbqGC1fvkkJcRO1npfgjCIJ8wCYVe%2BuIwf8bb279QqpObwlAXeQuqFad8Hq%2F%2BRdGYCNxP%2FfwSfIOHJABdblW2PFx4NrEldI80XLEfDKt71lsMOmIqrQ6HDm0TOSzxP4I5yh%2BCqLi9%2FVo5VbybyR1Yh2D3MwH6BIL%2FVqr%2F193X7j7H34Uz3FWN8tf%2FwZypmBtSyAPUB0KlhabKXv7xLaMT2CAzQPNR7QkvAUW5Tbg0EW04nmfOK8cq3TPwKTq6J9oCCi3YBugWHNJooQ6iwr1qqSB4L7XNnydU10eUbGgVBaJcueLl5%2F2PABcpuKkXj%2BUFe%2FfHy50ABAhnTlneT%2BlYa2QOMWi6d%2FfGhR3FdOaz0hz9ECfLjsumOxqZ1wX5Tgi8yhLc5ragQRpLnG9qgbm1BZZUMmbfVuEke7k%2BVfG24A8w942SvwY6pgHSBIncTyVI%2FVX68pLKqKJ2my3nVJgg6KmnDW%2FQjxGAARtF32IHxdJUEn46%2B5yBZehKEwVPgMIAmSlXvcPyadQfA8msiFQ0mJYjaY5kJ69RQbk4p93E1nHU7zk15XPY15H9uxnVHs%2BGgWFX2EmFaBlsbgFOD6HRBm28GpJKLfTT2rXhCIr93gm2OwtGgTu603GmTaRY3dJyADAbjqUfGAkZzs%2FoUkEe&X-Amz-Signature=10e03bb5036126bcc57c17b6a0e315a027823f26764b07e9bfbfd8c85b6e5c80&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZ4NR3X%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeYZ7yvlokBPwsv6D268%2FOXjmA%2FNk1Da8Fyns494FOKAiB3bbJpy8yHCoCB4aH9quM2efO1uX%2BJziW6WoZAUjWVICr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMDeNKpyrJKyYfPaJ8KtwDQzzODzDr973%2BpuWI4aNdq6nPS6HaEy8N4anxCVH%2BFfGZ8QiF99hrXuAjm2OCcJoJLArAg%2BGeCx1GQE2IDXyd7d%2BlDf%2B9qSw%2B72X4lHF65%2BGlq%2Br8hxuxDFA4Fhi%2FV9pbvZ602XptCy4nAh1O2FgkmwhViXzGT7igdV6vgzQhDdgkpFNDUEEWiBiCt%2Bj%2B72y%2Fi%2BFqJmEgEX%2FpHojkbqGC1fvkkJcRO1npfgjCIJ8wCYVe%2BuIwf8bb279QqpObwlAXeQuqFad8Hq%2F%2BRdGYCNxP%2FfwSfIOHJABdblW2PFx4NrEldI80XLEfDKt71lsMOmIqrQ6HDm0TOSzxP4I5yh%2BCqLi9%2FVo5VbybyR1Yh2D3MwH6BIL%2FVqr%2F193X7j7H34Uz3FWN8tf%2FwZypmBtSyAPUB0KlhabKXv7xLaMT2CAzQPNR7QkvAUW5Tbg0EW04nmfOK8cq3TPwKTq6J9oCCi3YBugWHNJooQ6iwr1qqSB4L7XNnydU10eUbGgVBaJcueLl5%2F2PABcpuKkXj%2BUFe%2FfHy50ABAhnTlneT%2BlYa2QOMWi6d%2FfGhR3FdOaz0hz9ECfLjsumOxqZ1wX5Tgi8yhLc5ragQRpLnG9qgbm1BZZUMmbfVuEke7k%2BVfG24A8w942SvwY6pgHSBIncTyVI%2FVX68pLKqKJ2my3nVJgg6KmnDW%2FQjxGAARtF32IHxdJUEn46%2B5yBZehKEwVPgMIAmSlXvcPyadQfA8msiFQ0mJYjaY5kJ69RQbk4p93E1nHU7zk15XPY15H9uxnVHs%2BGgWFX2EmFaBlsbgFOD6HRBm28GpJKLfTT2rXhCIr93gm2OwtGgTu603GmTaRY3dJyADAbjqUfGAkZzs%2FoUkEe&X-Amz-Signature=3826c13ebe3c5bc64bc7afa57e0fd128683662acb05c4f107a478c914618e201&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU5QYVYF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5dW%2BSdOgVw5d4DKpGYyuTDqH%2FHDSR3lVZFZiuvYty%2FQIgMBcec4x4PMHXBK3v81jBgEReH3d%2BZgKb07v4y%2BWDj5gq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDK4x063rf3HEh2bm0yrcA3bc0icwuFZap83moX6YQ%2FSfKZMXcX3fvE4doJ6j6uNpfEsp0v8QY9boKbS5cwxlWwh94VUkZgBD8lMufAC7YSTETSStKW3JZHD5mGfFJ6ROUGSCt1164Y9wMqcvr5bxtwcOis8JyMCQvtJFmqwapObzFFUE8iNGsH2opI1Y8UgEP0hMY1H9paExLQjWhNC%2BIMlSq2SsC%2BGdKURZFL3h3liaLm4tGjKbW76fCbPzBlWxyW4R31tpN7O%2F23No8s9b0pZ7aTjlP6%2F7IYadu4HOE1nuE4IkRlCD73%2FBezbXum63Xn%2BcQZJSGvHdOHTWD3j8W5BGPbWVGqlYmj4xSJkr9COhQO1PkbJXc8pps%2FP5GVj%2BTSHX4%2BTXvwQnEyWJEOq7ys%2FzPxxJ3IoYDREpQxjBUup%2F%2BChljOgixSyrdEqpzA0KmR8ZbY8OSY5PPXWzIvJ60G0jDCHDagDMrnGJPVbiK%2BIiv2q%2F9K3%2BoNRlT27ZcO1XERfe6od3ByopRuJQEiyqdTEqUWIiNJijteo4NeThI5vFlzx3%2BvCHe15k3WTo80E%2FgB6af0qy3m35b8pgOwODxe6lBsL6LeSSzWtYozPElDVDm9SVoSu7yiqUjn3eiBwSBBLniJRsxOOqKdL5MNGNkr8GOqUBfNIddLS%2BruCue315tDeJSFmEn%2FNRlqUbQTtYnx3Kvquqc%2B0dy59Bn%2F8UG5uM952sDnwTC9M6%2BUAnOzEptK5o52kGQD8qfOkWiRV2DxU9n8zsjVdN1Wl8ieUmO2elRxmUx7pKsWelv6edzp0Hmkhvh%2BvzvsqqVsAsdL7QHw0g6f1k%2B5RVOuhufNkCTtcv3dYjj27P6%2B%2BA54RZ0HmqOo1QAcKoh2gD&X-Amz-Signature=04cc47d20156ef1834a3809219d1b059df17861af10f1ff391892e95ba487a16&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPUWL7DY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B9kg2rBVvMgvYUuZLVznULGbq10RKOcn8i6ax9G3OugIhAOJ%2Bq9hXXbcmrSgi%2B00q6Zbx7x6jW9hR4829HXvsEuCkKv8DCDgQABoMNjM3NDIzMTgzODA1IgzqcCjbw1JLvIm6cG8q3AN8JqgoPDoh9ioz9APnXX2BHaRY6HM24Qwka8uUvPn2rxIz4JYBKG11Ge9VAYF5mIERg%2Fnmid2uPURUgFjyIy6ybhwvUbL8S0U1EVfbapbbxR8jasaDKVRPY2ZQYBbq9PEe6%2BWsLc72uviKtSxJZW7ildnYG8%2FvaYuVrBRYEqjpTwgJM2dSFHELSo8V0tQ2G6gI8P2zQtyvI5A%2FgO0Zi0xdnlo%2BrAdL%2BKly33%2BAk2EvlCokZywfFtB7E3KF3t2Sk2OjAeCIjob8d2Acp95kNm3iDdZq2EQz7PltwjyBb1AlX%2FMnRVNP0VLibqDm8eD%2FSdhErW9VAK4lO76FlXIne7Bzwck12y8xQSsm6LB4zJM2NDVJPiIWg6VMojHHpIfGQJPCua3RGUjJUGjiMDHVUMZ5TBmmcpjd50TOtzDd6KXyQDqcGPa%2BKOu5imsUMxblkrKe55FlsYA2KoPokLw6gTtsgM4JtaAhOSWLSJ6xudlxsdPQDkpHGxsQ7hCuzWWYy%2FteS87GwtoH9R8fzt73rf%2FvBA65YJrbnu6KhfjqB%2FcEGxJodSvGvQtmP04wA%2Bp81gHb2vUg2AEqSRZvd9sulr9pyHhhLqgyWhMY%2BAE4q%2BKflwzPLB4M617xzXl%2FHDD%2BjJK%2FBjqkAcqpVQAygPL%2B9yw6Y4whlZRjfkzbpUjY%2FizuKoDAUylAYs%2FyZlmQ0FHI0s5pAjVdBC1nFxPeXtLRkTZBIG%2BLf3LD3kRzSjqfn0tJCwxuXrsq62toIDgvKWjqvOZh%2F8UXEe2zFKypSc3xH9RCsgfqKZxkm81ooM5st%2BEH%2FZ5QETey85MOo%2F8DhXrN1f9AEKketwKGjT1YVSYLL1NxXutgoVTS2Dnm&X-Amz-Signature=1ba833155aa85fa8479e89ce51dea746fc8f0f9a491917357d0cfa07003e5765&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZ4NR3X%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeYZ7yvlokBPwsv6D268%2FOXjmA%2FNk1Da8Fyns494FOKAiB3bbJpy8yHCoCB4aH9quM2efO1uX%2BJziW6WoZAUjWVICr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMDeNKpyrJKyYfPaJ8KtwDQzzODzDr973%2BpuWI4aNdq6nPS6HaEy8N4anxCVH%2BFfGZ8QiF99hrXuAjm2OCcJoJLArAg%2BGeCx1GQE2IDXyd7d%2BlDf%2B9qSw%2B72X4lHF65%2BGlq%2Br8hxuxDFA4Fhi%2FV9pbvZ602XptCy4nAh1O2FgkmwhViXzGT7igdV6vgzQhDdgkpFNDUEEWiBiCt%2Bj%2B72y%2Fi%2BFqJmEgEX%2FpHojkbqGC1fvkkJcRO1npfgjCIJ8wCYVe%2BuIwf8bb279QqpObwlAXeQuqFad8Hq%2F%2BRdGYCNxP%2FfwSfIOHJABdblW2PFx4NrEldI80XLEfDKt71lsMOmIqrQ6HDm0TOSzxP4I5yh%2BCqLi9%2FVo5VbybyR1Yh2D3MwH6BIL%2FVqr%2F193X7j7H34Uz3FWN8tf%2FwZypmBtSyAPUB0KlhabKXv7xLaMT2CAzQPNR7QkvAUW5Tbg0EW04nmfOK8cq3TPwKTq6J9oCCi3YBugWHNJooQ6iwr1qqSB4L7XNnydU10eUbGgVBaJcueLl5%2F2PABcpuKkXj%2BUFe%2FfHy50ABAhnTlneT%2BlYa2QOMWi6d%2FfGhR3FdOaz0hz9ECfLjsumOxqZ1wX5Tgi8yhLc5ragQRpLnG9qgbm1BZZUMmbfVuEke7k%2BVfG24A8w942SvwY6pgHSBIncTyVI%2FVX68pLKqKJ2my3nVJgg6KmnDW%2FQjxGAARtF32IHxdJUEn46%2B5yBZehKEwVPgMIAmSlXvcPyadQfA8msiFQ0mJYjaY5kJ69RQbk4p93E1nHU7zk15XPY15H9uxnVHs%2BGgWFX2EmFaBlsbgFOD6HRBm28GpJKLfTT2rXhCIr93gm2OwtGgTu603GmTaRY3dJyADAbjqUfGAkZzs%2FoUkEe&X-Amz-Signature=d0c217c474da2d4794d9a8584e05eade89743759a2b3186f45c9ea57d57f0b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
