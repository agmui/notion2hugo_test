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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSVANZK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC7oOAtx%2BSlaE%2BuCCwnSjESpieW6ytudEb6t8DmsD6%2BwQIgJFkZStvUpGREOosJWWnkBW12sBTGLu%2BfozXolaw%2FffQqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkKDHLaPDC%2BVMx7MyrcA15VUP1paCxVtHKH5X0kjhSu9kHZKyHhaW9Wv%2FFH0dMFmEiRgsBOTz66zpZIg3%2F8UDgLg3Is4HjnwvM%2BQhqqZwdC3OnCQkY9yUWZi2Paq7J8w8Lqvi8pamOdrvccuKMWwWrSnHdwgCmYRf%2BUNd%2BzEvh2hKlWWlKy8DKzhwbtQvfO%2Bw7dWZB0NWgO6jkaSkNU8JpPn99G9hZpXnRb4TnxCj4KOnhl6qPba%2FuZxGz%2F%2FJrrMFO3UwejYb36dE%2Bjq%2FBMt1sKKNNELu556fmcCEKnYF43PcLHlNppkfFlqrtHyb%2F350nA%2BLNNn5wh2Ua5KJ46Kdq3ElYH9A6lINDdK%2Bcn9EITpSEKhfMzw064xqXGs9d6V9qBWkQJS7Pty%2BJiRnm%2FN0%2Fzvlgi1arhUt9vuDgT2rWZMwFptxE1rdg93e924DIK96q2YGfO9VP6YJmX4q%2B82P7vaoxYgvi8vVaWcRtrYTzmivE1YOLi6og6wGZgZJPPbG2eQS3zHIPnT7EeJ0MmWEzCuUYNSmAtIGtnTietrQyMTiLGrg%2BHtc55TG0KzQ4L3XaAYP0liOeavdfU1meFrr0Ru1MBh%2Fky7zJu%2FH8hCs3jsHKZ%2Fk1J6eo8%2BgWrxPtVi524I6TMDYnpfU7bMKHJ8sEGOqUBauBsFkXSBUyteLnoSa%2Bt%2FPNFT%2BtTVM8OJqefctVkZY7wydZxAlFSFGjIBXgbvr3DC2BWYfjAPm3mBqnXhzWpEA68CRTwHoxu3xd14tR9DTc7it7ofRimGsFKaSrFjS5bo58enmldxhg48D3mexV6x6ZRQO5fLGLs3VKvK9bkUNOgbG4y45wtR%2Ff82h6PCUX0Dv5805eK255MGz8QeIMyr%2FdDTp%2BC&X-Amz-Signature=8a7647f75db1ff1670b0a825310fa3cdbc39cfde679b2194c41c3f036ca6a76d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSVANZK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC7oOAtx%2BSlaE%2BuCCwnSjESpieW6ytudEb6t8DmsD6%2BwQIgJFkZStvUpGREOosJWWnkBW12sBTGLu%2BfozXolaw%2FffQqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkKDHLaPDC%2BVMx7MyrcA15VUP1paCxVtHKH5X0kjhSu9kHZKyHhaW9Wv%2FFH0dMFmEiRgsBOTz66zpZIg3%2F8UDgLg3Is4HjnwvM%2BQhqqZwdC3OnCQkY9yUWZi2Paq7J8w8Lqvi8pamOdrvccuKMWwWrSnHdwgCmYRf%2BUNd%2BzEvh2hKlWWlKy8DKzhwbtQvfO%2Bw7dWZB0NWgO6jkaSkNU8JpPn99G9hZpXnRb4TnxCj4KOnhl6qPba%2FuZxGz%2F%2FJrrMFO3UwejYb36dE%2Bjq%2FBMt1sKKNNELu556fmcCEKnYF43PcLHlNppkfFlqrtHyb%2F350nA%2BLNNn5wh2Ua5KJ46Kdq3ElYH9A6lINDdK%2Bcn9EITpSEKhfMzw064xqXGs9d6V9qBWkQJS7Pty%2BJiRnm%2FN0%2Fzvlgi1arhUt9vuDgT2rWZMwFptxE1rdg93e924DIK96q2YGfO9VP6YJmX4q%2B82P7vaoxYgvi8vVaWcRtrYTzmivE1YOLi6og6wGZgZJPPbG2eQS3zHIPnT7EeJ0MmWEzCuUYNSmAtIGtnTietrQyMTiLGrg%2BHtc55TG0KzQ4L3XaAYP0liOeavdfU1meFrr0Ru1MBh%2Fky7zJu%2FH8hCs3jsHKZ%2Fk1J6eo8%2BgWrxPtVi524I6TMDYnpfU7bMKHJ8sEGOqUBauBsFkXSBUyteLnoSa%2Bt%2FPNFT%2BtTVM8OJqefctVkZY7wydZxAlFSFGjIBXgbvr3DC2BWYfjAPm3mBqnXhzWpEA68CRTwHoxu3xd14tR9DTc7it7ofRimGsFKaSrFjS5bo58enmldxhg48D3mexV6x6ZRQO5fLGLs3VKvK9bkUNOgbG4y45wtR%2Ff82h6PCUX0Dv5805eK255MGz8QeIMyr%2FdDTp%2BC&X-Amz-Signature=953d2f229a4d099ebb0bc34c713608183cf319ac0d63c52c21465918e263a9bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSVANZK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC7oOAtx%2BSlaE%2BuCCwnSjESpieW6ytudEb6t8DmsD6%2BwQIgJFkZStvUpGREOosJWWnkBW12sBTGLu%2BfozXolaw%2FffQqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkKDHLaPDC%2BVMx7MyrcA15VUP1paCxVtHKH5X0kjhSu9kHZKyHhaW9Wv%2FFH0dMFmEiRgsBOTz66zpZIg3%2F8UDgLg3Is4HjnwvM%2BQhqqZwdC3OnCQkY9yUWZi2Paq7J8w8Lqvi8pamOdrvccuKMWwWrSnHdwgCmYRf%2BUNd%2BzEvh2hKlWWlKy8DKzhwbtQvfO%2Bw7dWZB0NWgO6jkaSkNU8JpPn99G9hZpXnRb4TnxCj4KOnhl6qPba%2FuZxGz%2F%2FJrrMFO3UwejYb36dE%2Bjq%2FBMt1sKKNNELu556fmcCEKnYF43PcLHlNppkfFlqrtHyb%2F350nA%2BLNNn5wh2Ua5KJ46Kdq3ElYH9A6lINDdK%2Bcn9EITpSEKhfMzw064xqXGs9d6V9qBWkQJS7Pty%2BJiRnm%2FN0%2Fzvlgi1arhUt9vuDgT2rWZMwFptxE1rdg93e924DIK96q2YGfO9VP6YJmX4q%2B82P7vaoxYgvi8vVaWcRtrYTzmivE1YOLi6og6wGZgZJPPbG2eQS3zHIPnT7EeJ0MmWEzCuUYNSmAtIGtnTietrQyMTiLGrg%2BHtc55TG0KzQ4L3XaAYP0liOeavdfU1meFrr0Ru1MBh%2Fky7zJu%2FH8hCs3jsHKZ%2Fk1J6eo8%2BgWrxPtVi524I6TMDYnpfU7bMKHJ8sEGOqUBauBsFkXSBUyteLnoSa%2Bt%2FPNFT%2BtTVM8OJqefctVkZY7wydZxAlFSFGjIBXgbvr3DC2BWYfjAPm3mBqnXhzWpEA68CRTwHoxu3xd14tR9DTc7it7ofRimGsFKaSrFjS5bo58enmldxhg48D3mexV6x6ZRQO5fLGLs3VKvK9bkUNOgbG4y45wtR%2Ff82h6PCUX0Dv5805eK255MGz8QeIMyr%2FdDTp%2BC&X-Amz-Signature=450763462db64a4e68c831bd1184b2fa158b9334eb6896b5219b3765e23d6f00&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JX7ZTWF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCFyPq80iMBczCFMnyu2rqT8pTbFvohvOUZAfmpm6GRCAIgWxJCr6%2BUIal%2F4oLjALF9i1sAtZnR%2Bnjsup5T56of52IqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnr1WxxlTP4eTezQCrcAxUqUf8uGuviRHrEYBSEGg%2BPLYTdI24QyREnn6GcErx6q5ew02m%2F8IPlniC08AT3PZPcibczwnI6Ex05uLVLRqFj9Yc8ipwYeZmRqeqMBr%2BzVYwj3A5nBh%2FYajjGJlcpRvAW29VEbNSL5MySaDKwkuqnKZYWszAAEZxGff1IxkoGofGjC1mYNLoVvfqeF6JQILuOhLNcTiOcHBlR2F1DyYBW%2BY2sQDg7tbVMb57fyAHgGrE5JZBXF63hNQHWV52xbPNGFfcEZzmXyVvBdOWtFDpwjkpGo%2FLgksEVqxJNdbDNYxfa85bky5qncPwXoleKQLTrz2gMxgTVmlRrjaUiyJ7xptz29RJc8p8SzTPMmDBRYlhLgpH1IVQBFRfUFm5hjSjsGbQQMBiMpzb74EBI3TpoYHv7JLHlxOpCA%2BHc%2F1e5mA%2F4fCTQja1dmQCals1UGZ3UEdD1uMKJ2QCAbY98zbgfl8%2BgG55IWuvAdvd0keHhoXehBg%2F1o7m7UpZmuc2QKRRa222%2BAd3368lnEbIQi3DVlVFG0Q17DEajytbw3%2BMHx2WRqcSMLVc5G7pOZhH18taRFtng5CEj3tc%2Fm0HwCdEluAlq%2BJ5UNGpN9jLSF8rDqZUoJ7DRbT0UwqGiMIaC8sEGOqUBARdgXOkPJblHoNpEZCWDjSbvQXlga%2Bb%2FT%2FRUQo9AXnQmR%2BIlSQhFOARF5PqgV1CHJekmQTV2J0PMSIEU8HiIOSBGO%2BaQMSFl1Ke0hKgxN9qhHwRfhC5V2MsDaLHpzzenTEHN2eEQJyFkqnTiNSAFvAKDLdWbAacKXJNIEirIBWS6Nl21Ey%2BR%2Bu%2F%2F9kXpPcIA7XgIfZK0mBKxQ4BKtl8k8EB%2BcvLI&X-Amz-Signature=109f5c23946b93cbee4546bc8ec5143867adfa430b50e6e49ab227bbde46ad16&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLA3MMR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCOO8%2BihrB3ys%2B79Matfp1f3v5BcNNGHfBx3PSXTLUCIgIgRe4MqDFZXBVzxpF0M83lzIgUPMYiiVBdN2NrB4qLZi4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVSTekk7%2FiCmj7PAyrcA6gI0INyDjyM6tWSATTk3kaxn1qzaxshlJ9MDHAm%2B8G4bKlPfC%2BQeQj8tJUFEns1p0UWSBw%2FoKeWQYanzFdRzCsylgwjrF94CHhuVl0ZAGmxQSaFxAg6LQZQLbT7ZWdZTfAtj6kqiiVmdyykC%2BDcBLai3n8h%2BPYFFtDRz94Xl%2FYAq%2B3X9pRz0z2CFozBQNLkj4QzBisuhFH1JjvGX34H30%2FqZShAetVNTbil8xA5j4KPFbQ5WLP4XTJGVb12qiTrSWRjyNrGr7z4%2FU7xaKG0eWeBgqYN9IO6f%2F2YnxoccvGemBjWpU3fzmjvjMVrszTX5gH3U5YNC0L5yVzUGZpOZNZJYqKFZJ%2FeveO8TFbmTYHKveL8UwW2ZlpuWEAvkYH0pZVK%2FcIYCzcOQBZVt5Xzh%2FDu83DJQOqa8p6FB83I5XHHj%2BxlO9uHd3d%2FNRdFsLw9IGSXwI%2FHTUnxno9iFf8FLFMieWqNQRavUHZJTxw7xcZnA%2BwVw9C6XvC8A28dcKuntVFWYkv94KqyLegtI7%2BwAFsX44dk1ON4%2F8jyvTeuoDJFT5IFiTuF1GOfjeN3nsJbAXIUQuuvFDS17G3p2UvNe3afGve8fIEHeXW%2FlI%2FZTks9rUiJyNOpCCmLHHltMM%2BE8sEGOqUBFLp2wAITnbg%2FoT7tVFMlyLBrYWOeMvctiEDgCdyEiyUhjcDPibcrin2c43dC2Aqidn0OZSP0JJYtOk3vJgKavUzMh1XlU79%2Br6qiTyfBnpNjARbxKmdm%2BdsNW%2FaN8XkUdnoXrldiwS1GXemnbdrhMMhqESEy5Smh%2FJILSgM%2BmCkDSrNVBbvrcbl1G5FIJGvGJYkR2VoOsp76fD3osPofhUL7LlbA&X-Amz-Signature=b3b4093afc1d055fc32b7b6609888831fd2ec769beee4d2ed5f65df763b598db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSVANZK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC7oOAtx%2BSlaE%2BuCCwnSjESpieW6ytudEb6t8DmsD6%2BwQIgJFkZStvUpGREOosJWWnkBW12sBTGLu%2BfozXolaw%2FffQqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkKDHLaPDC%2BVMx7MyrcA15VUP1paCxVtHKH5X0kjhSu9kHZKyHhaW9Wv%2FFH0dMFmEiRgsBOTz66zpZIg3%2F8UDgLg3Is4HjnwvM%2BQhqqZwdC3OnCQkY9yUWZi2Paq7J8w8Lqvi8pamOdrvccuKMWwWrSnHdwgCmYRf%2BUNd%2BzEvh2hKlWWlKy8DKzhwbtQvfO%2Bw7dWZB0NWgO6jkaSkNU8JpPn99G9hZpXnRb4TnxCj4KOnhl6qPba%2FuZxGz%2F%2FJrrMFO3UwejYb36dE%2Bjq%2FBMt1sKKNNELu556fmcCEKnYF43PcLHlNppkfFlqrtHyb%2F350nA%2BLNNn5wh2Ua5KJ46Kdq3ElYH9A6lINDdK%2Bcn9EITpSEKhfMzw064xqXGs9d6V9qBWkQJS7Pty%2BJiRnm%2FN0%2Fzvlgi1arhUt9vuDgT2rWZMwFptxE1rdg93e924DIK96q2YGfO9VP6YJmX4q%2B82P7vaoxYgvi8vVaWcRtrYTzmivE1YOLi6og6wGZgZJPPbG2eQS3zHIPnT7EeJ0MmWEzCuUYNSmAtIGtnTietrQyMTiLGrg%2BHtc55TG0KzQ4L3XaAYP0liOeavdfU1meFrr0Ru1MBh%2Fky7zJu%2FH8hCs3jsHKZ%2Fk1J6eo8%2BgWrxPtVi524I6TMDYnpfU7bMKHJ8sEGOqUBauBsFkXSBUyteLnoSa%2Bt%2FPNFT%2BtTVM8OJqefctVkZY7wydZxAlFSFGjIBXgbvr3DC2BWYfjAPm3mBqnXhzWpEA68CRTwHoxu3xd14tR9DTc7it7ofRimGsFKaSrFjS5bo58enmldxhg48D3mexV6x6ZRQO5fLGLs3VKvK9bkUNOgbG4y45wtR%2Ff82h6PCUX0Dv5805eK255MGz8QeIMyr%2FdDTp%2BC&X-Amz-Signature=5c067fa67086dd89b65b8c202607e117ee5c1d77fbbefb2fbc1f6513c4b95a19&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
