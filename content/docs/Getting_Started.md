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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVOS4QU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDfPvkL7GkGR6%2FqqyENBTeELojjdnooiP2hYO7pqyO2LAiAYuZgX533dqEre684mcbiL%2BcT9Yx7YEKjt4kfd0tdEdyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FuiocU%2BmOoJXWaiXKtwDxTLlg0qXiux72H2ca8BjMSMG46BJ7dQHokQgxm1%2BDxaG1FFwnO%2FIKgDA7HqmTZ6jPzJns%2FMg4XR73K9FRrmmAHSXRwUSPA0kBzgo8W%2BQzs1poxNZE570vzpEGRuncNq4t%2FL%2FqRxfAodGc2LAW8uQ9ZHb3LfrRVmcP8caHxhkJG1OebT3btJBlX8xXjn05vW6OkVTv8rXZFS0ct1wmXtNOqAftzywlwhqj6eeSt7jmDfqyYZf%2BUDMy3r9qNzluOvIckfVuYvY7khmi2edSN5XrDmBcsnN8jzWf7jmqOgJyKEXeu%2FBOA1qF5%2BjTX6J0G34I55zc3hhRkr%2FwfW73c9RIxA6r0LfAiz2d6be5fWm5K9NcrmShH2FvwZ8C%2FBpXi2MLg96tcxlCOKxYcgE5Lb3ESdVcGi44xb1je84ZKCdjj2muuYn%2BIrly62jCIH6lC7gu6%2FYwyGygvmgrK649nUkKk5nEo6P3ggsmaMAD%2Bol7aKWZy6%2B1VrALTaHm90rBLgqZEWoCumcvQiVXs%2Bi1n5o2XDospgjuqi1bckaCmbc1I%2F8ALf13aRmORqxkBXdRDsy%2FGe2UTmcbiOyYunBCB1%2BJag%2F4tGSiOTOeV3UWCvHYL3GgdDQmMguE0%2B3g8AwiM7HwAY6pgGPOSZc5X1Us5stCe4UlWJnXLtKI%2FS24Z%2BpofhDsETgzmJR1AwyXQ%2BAWTXXAlGII8h9PINfRxezvh2wee10puPjiaj9FiUybb1lPfcCfJRXsEeEgppccRyPLrc1DF3IhI3N2X1%2FwH15%2B78VfO2yp25p5%2Ban7M2e2FLAXuQpYlA23MKyQ0je83ccx9TvGOYUCm0V4CbhxGWCiwatanvnA8%2F5aG68mduS&X-Amz-Signature=129c3f9eda1bd8a403daf1f869e8c8f3774d42d0272fd9e1540fcb422405388f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVOS4QU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDfPvkL7GkGR6%2FqqyENBTeELojjdnooiP2hYO7pqyO2LAiAYuZgX533dqEre684mcbiL%2BcT9Yx7YEKjt4kfd0tdEdyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FuiocU%2BmOoJXWaiXKtwDxTLlg0qXiux72H2ca8BjMSMG46BJ7dQHokQgxm1%2BDxaG1FFwnO%2FIKgDA7HqmTZ6jPzJns%2FMg4XR73K9FRrmmAHSXRwUSPA0kBzgo8W%2BQzs1poxNZE570vzpEGRuncNq4t%2FL%2FqRxfAodGc2LAW8uQ9ZHb3LfrRVmcP8caHxhkJG1OebT3btJBlX8xXjn05vW6OkVTv8rXZFS0ct1wmXtNOqAftzywlwhqj6eeSt7jmDfqyYZf%2BUDMy3r9qNzluOvIckfVuYvY7khmi2edSN5XrDmBcsnN8jzWf7jmqOgJyKEXeu%2FBOA1qF5%2BjTX6J0G34I55zc3hhRkr%2FwfW73c9RIxA6r0LfAiz2d6be5fWm5K9NcrmShH2FvwZ8C%2FBpXi2MLg96tcxlCOKxYcgE5Lb3ESdVcGi44xb1je84ZKCdjj2muuYn%2BIrly62jCIH6lC7gu6%2FYwyGygvmgrK649nUkKk5nEo6P3ggsmaMAD%2Bol7aKWZy6%2B1VrALTaHm90rBLgqZEWoCumcvQiVXs%2Bi1n5o2XDospgjuqi1bckaCmbc1I%2F8ALf13aRmORqxkBXdRDsy%2FGe2UTmcbiOyYunBCB1%2BJag%2F4tGSiOTOeV3UWCvHYL3GgdDQmMguE0%2B3g8AwiM7HwAY6pgGPOSZc5X1Us5stCe4UlWJnXLtKI%2FS24Z%2BpofhDsETgzmJR1AwyXQ%2BAWTXXAlGII8h9PINfRxezvh2wee10puPjiaj9FiUybb1lPfcCfJRXsEeEgppccRyPLrc1DF3IhI3N2X1%2FwH15%2B78VfO2yp25p5%2Ban7M2e2FLAXuQpYlA23MKyQ0je83ccx9TvGOYUCm0V4CbhxGWCiwatanvnA8%2F5aG68mduS&X-Amz-Signature=8fa3bc9f376ba082e859f2d11e7d7b44b330d4df8dbc093233ebb5deb6229f61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVOS4QU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDfPvkL7GkGR6%2FqqyENBTeELojjdnooiP2hYO7pqyO2LAiAYuZgX533dqEre684mcbiL%2BcT9Yx7YEKjt4kfd0tdEdyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FuiocU%2BmOoJXWaiXKtwDxTLlg0qXiux72H2ca8BjMSMG46BJ7dQHokQgxm1%2BDxaG1FFwnO%2FIKgDA7HqmTZ6jPzJns%2FMg4XR73K9FRrmmAHSXRwUSPA0kBzgo8W%2BQzs1poxNZE570vzpEGRuncNq4t%2FL%2FqRxfAodGc2LAW8uQ9ZHb3LfrRVmcP8caHxhkJG1OebT3btJBlX8xXjn05vW6OkVTv8rXZFS0ct1wmXtNOqAftzywlwhqj6eeSt7jmDfqyYZf%2BUDMy3r9qNzluOvIckfVuYvY7khmi2edSN5XrDmBcsnN8jzWf7jmqOgJyKEXeu%2FBOA1qF5%2BjTX6J0G34I55zc3hhRkr%2FwfW73c9RIxA6r0LfAiz2d6be5fWm5K9NcrmShH2FvwZ8C%2FBpXi2MLg96tcxlCOKxYcgE5Lb3ESdVcGi44xb1je84ZKCdjj2muuYn%2BIrly62jCIH6lC7gu6%2FYwyGygvmgrK649nUkKk5nEo6P3ggsmaMAD%2Bol7aKWZy6%2B1VrALTaHm90rBLgqZEWoCumcvQiVXs%2Bi1n5o2XDospgjuqi1bckaCmbc1I%2F8ALf13aRmORqxkBXdRDsy%2FGe2UTmcbiOyYunBCB1%2BJag%2F4tGSiOTOeV3UWCvHYL3GgdDQmMguE0%2B3g8AwiM7HwAY6pgGPOSZc5X1Us5stCe4UlWJnXLtKI%2FS24Z%2BpofhDsETgzmJR1AwyXQ%2BAWTXXAlGII8h9PINfRxezvh2wee10puPjiaj9FiUybb1lPfcCfJRXsEeEgppccRyPLrc1DF3IhI3N2X1%2FwH15%2B78VfO2yp25p5%2Ban7M2e2FLAXuQpYlA23MKyQ0je83ccx9TvGOYUCm0V4CbhxGWCiwatanvnA8%2F5aG68mduS&X-Amz-Signature=3f2704b10b683aa32fdd7993bea4f2756e2f17f474f1b19b0eb11d394e68389d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEBD3U7Z%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIB3HN7ogy6UCyh%2FL5t6lY%2FjC3efs7GVOAjeeDLTvgqF5AiBYrgzSFgFxjo%2BVZkw4F8jlkqQONcj60ZRm%2ByaZ%2FrVobiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2B0opekOAsQf1C2LKtwDl61U%2Ft89t2zWURqEUpxVylDBM%2BAQV3Sqb2mn4CC45k%2FWRMqvzd1so6iVreFwbLaT6Eli6%2BmDdowjaab4UFftTCohUsziAE878Bj%2Bxv4iLcfF8FiL0jdB0QXtD%2FWx9ktmjFnDJJSLma5zY8zNRrjS7FBImQZvHC9xwSyBZNz5r9hq6k7BDHEawED9PFyBJDiFpRXbdwRW%2Fe4nGv3l%2BqNHSpYRJKjnD5IcTy0%2FwjNvUmhXrI6cMGyl7NQjbIQxVY%2BZmcqvrFFrjQz4w7Qhqc%2Bgb5S13XVwRr%2FYwGZbCx6ZcfUhnuH8HNz4jS8fV7huNqUYUfBM6jonTdvPrMCvRvFbb4z5bhe%2FmUcQoOPGy1wbGaOo1vL31fptJ9yZ5SvlnY3rf98aXdozpC62ETokvcjwZqDs%2BmWjaMe%2FHjd8WzZScRpu3TA5nt%2Fj1SpTkTRIl7cWClEhkbffRIMRHi5cUX6JGUPlMjVA3cxKriHbQYC5FdV9vFcMILZgxSkRVNvOwJeb6iOdjZ7eSyJxkpmOQxJlT8nIElfbKGdL5iHEG%2FyGLTqjqL0vf3HWFm%2BmAhawtDWKjXownn%2BykEa%2FIpAXMjuJ0BIYOQr1RO9nKrrMgWH01xuKOKMoo3Fu%2FHsYsXUwss%2FHwAY6pgHgdlhYUncYBDcdDuelD0HVhKfqTWUzsi4VYlTteR%2BySN2qJVZ4Cx54H7ctVnl2IMOd%2ByzhO6dO5aq5Adp2VAqAFgIMUVNGubGaM%2BBbt9Xkj8t7hq2kFgJUPp6EHm%2BiXO11OFKUEz8Elqf03TzsKwf9jbUBEcTCdV6hXnz6oYmXdQkcpgBp8Nsv%2Fp1g5AgolFBTQh%2BYsIRwmyProvShggwdLb7VTwTB&X-Amz-Signature=62f99907703bda5c1c6ffa0e6cb4131be064243cf821f9e4fbef2ea24053b4cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SMFCFQW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICxDK7BQfAgbIKhTYaEj8QNvRp3fHFBy1uihIcV0AmvmAiEAi0lfa%2F540F6QUxgRimdJhwtYunXAJUSF60ww5RN%2BIggqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVc7F54Z7653CrNqircA%2F3L6Cc4UrboNrtwZ7FsGaqHzIwGmqT4LycBlU8nUzoMCwl0cdWvVaIlLsPp4ZdJh1FqbhDs2rFKQX1%2Fggl3SNypCHRtxR64AwA7s5fbDcMRQuhHqc1UAMCt6gaO%2BXB%2BSXVZS3hMpFo8J9q6kVCbVLTgi4f0G59CJtLWDWe91nLBQDiUzyw3YO1hIi7sS0DLi4rGg0UaWGOScMLsrUPC5dwsY9OpskH%2FTy3W2lHlnaYKaKCdhSvqvvSZNbBGK9I%2BQrpuYa1Z5CLdVqSknVdxW8EE5bFVo0r6g85avRvsZ482%2FbGNy3QQxHgIBIVdgVN%2FcMrfOn3%2FnoSrhxxrWuL4ri%2FfAoEBMrJhQsprzOELuQgdZz3n%2FEQvljsI075aNbXnG9Rm7B0RleGH95OsMi%2Bamgqqf6PWex2sgHZZ9Im68pheFV%2BZ%2FsMnOLKzcxmnC6sOOt2LxjAk2v5loB8XBwwBDKvghclyGs4aJlNYpKg%2FkCnEqXtFzgJJPy3JaBMYyUbDsaOXlde0uB1PoLWuv6roMfBxe6VFN0aNLyuO2uXCIgb3NfEC2N06I6kM1wSMP%2FDYN0GDEMsO5AyIUcePEUEuVmCjNSheitbkxTvrzDlH9yfCUugo3S%2FkTKopS9OqMIvPx8AGOqUBHurnaRXEMRjZVxRBR7Qkro9hIKE7OE01Zi7odw0DaZ1rNqw9pMA4cR3%2FuZ%2FpH%2BI7NyZ0u28f%2BwZF7I1i%2FunXVYQYiZq9mPUlMGYEcKdFQw0LjrSikY1BWXu7Af5T%2BDi78I5P7rs1ebsc5YBzSZhCOYfFVNEeMTIFmllKFvssEFfNfKrJImmmL9xwIYEUusUNS%2FEahuu%2Bpvmd6GjYVnbikuQ3uS4T&X-Amz-Signature=a70265e4d1d960899df14171f511862f847d54c5121bc6e9c9fada8094d34d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVOS4QU%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDfPvkL7GkGR6%2FqqyENBTeELojjdnooiP2hYO7pqyO2LAiAYuZgX533dqEre684mcbiL%2BcT9Yx7YEKjt4kfd0tdEdyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FuiocU%2BmOoJXWaiXKtwDxTLlg0qXiux72H2ca8BjMSMG46BJ7dQHokQgxm1%2BDxaG1FFwnO%2FIKgDA7HqmTZ6jPzJns%2FMg4XR73K9FRrmmAHSXRwUSPA0kBzgo8W%2BQzs1poxNZE570vzpEGRuncNq4t%2FL%2FqRxfAodGc2LAW8uQ9ZHb3LfrRVmcP8caHxhkJG1OebT3btJBlX8xXjn05vW6OkVTv8rXZFS0ct1wmXtNOqAftzywlwhqj6eeSt7jmDfqyYZf%2BUDMy3r9qNzluOvIckfVuYvY7khmi2edSN5XrDmBcsnN8jzWf7jmqOgJyKEXeu%2FBOA1qF5%2BjTX6J0G34I55zc3hhRkr%2FwfW73c9RIxA6r0LfAiz2d6be5fWm5K9NcrmShH2FvwZ8C%2FBpXi2MLg96tcxlCOKxYcgE5Lb3ESdVcGi44xb1je84ZKCdjj2muuYn%2BIrly62jCIH6lC7gu6%2FYwyGygvmgrK649nUkKk5nEo6P3ggsmaMAD%2Bol7aKWZy6%2B1VrALTaHm90rBLgqZEWoCumcvQiVXs%2Bi1n5o2XDospgjuqi1bckaCmbc1I%2F8ALf13aRmORqxkBXdRDsy%2FGe2UTmcbiOyYunBCB1%2BJag%2F4tGSiOTOeV3UWCvHYL3GgdDQmMguE0%2B3g8AwiM7HwAY6pgGPOSZc5X1Us5stCe4UlWJnXLtKI%2FS24Z%2BpofhDsETgzmJR1AwyXQ%2BAWTXXAlGII8h9PINfRxezvh2wee10puPjiaj9FiUybb1lPfcCfJRXsEeEgppccRyPLrc1DF3IhI3N2X1%2FwH15%2B78VfO2yp25p5%2Ban7M2e2FLAXuQpYlA23MKyQ0je83ccx9TvGOYUCm0V4CbhxGWCiwatanvnA8%2F5aG68mduS&X-Amz-Signature=c0fa4793a458e7667ecb8b729a1cb6e8f3a9ece1159ec79543930afbb7febf31&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
