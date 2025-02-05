---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "null/Getting_Started.md"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PYK5NU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCxXg%2FWIgNrZrHOtCmvQWRtn%2FOOy65Maj5MpuWUwOmUxAIhAM0aQWv9TuumcEp3XTuHcouYcp66EfXwuomzsMHWACTcKv8DCDkQABoMNjM3NDIzMTgzODA1IgzwLAcWmWaMPoA0O%2B4q3AOfDkMMqokxxifRDXE8dmjxBb5WxlI%2FNfBaMq3ZEVDI9tF0yY%2BGC1lxJ9jb3MyleK9FUraUYP9ZeZQCcVKsGRPIo9O2Yb5%2Bet4OlBj%2FHySf35%2BVlAfoX6g3IDt3eVzC6kWOpFQxQvQfEzfQ1QD0hQPi5YXL8PI5vqbpBbvVeoJYfEr2WHFi61Ch5lWl5Thr2VgKiUnDZ1qqMaGAYe0RyLpXHe37RxAAOQO36kLYkXYDX06FLxmMCWdH1tbWkcDRpmIXGa6JcDJirfXs2h1U9s3dFpyqyGcKGguHcFg%2FFK8JPVT2H%2FppnMnFMdFqFnYFH5hDyYuTYOBxZg2vBqbtDjtI7Rq1ofD9K01NQSBa5p9vAr5TG%2FV1OpbTVzKrooIPo2%2B8wn7O43sK885p5s%2BAajFQtNXk4b3uHi8BCvsXwE0y5DP5Dc7MxxOyBCQm29mfJpLZhL0zDgDsRdVkpEnPAVoDBJPpU3KrP9Ll2OIEYBFiQUgLdiSEp5GSZGCaNDGaapI8Kp8sKI1d2dRUbFTMr3pesUpDq%2FK2rUc%2B7yIdDAZIjoDSdLQYIea6suh5lzqqMs4ntqHwLdsjpYVByLceD2SQycPhpQvaQNlaYddayp7%2Bcx1NaFzeT2f2JRnLkTDSz4q9BjqkAT4tcCg7Df73ZkzPqGJ9TEaGaV4XpuMGZLK422EDSsrD7RPm4hHoUVh1y61EAoJsBHDdLOmKoVf6xtEKaqc9TfVrkce5NQSooHfY8TmzGn6Mls28wNiLtSovan%2BWt7pPlIVtaMRrdJWX5oFO50G745BQMPf8LUhjm0ZmNmitm2UxSCBzlvmuvcqz0i%2BWKdpNj7iO5Lo%2F%2BPHWlb7leDsWSTCryo0a&X-Amz-Signature=279a499ac20ca56f0b113fc980eb738ab1c64610b806bf0b26675804f2126e18&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PYK5NU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCxXg%2FWIgNrZrHOtCmvQWRtn%2FOOy65Maj5MpuWUwOmUxAIhAM0aQWv9TuumcEp3XTuHcouYcp66EfXwuomzsMHWACTcKv8DCDkQABoMNjM3NDIzMTgzODA1IgzwLAcWmWaMPoA0O%2B4q3AOfDkMMqokxxifRDXE8dmjxBb5WxlI%2FNfBaMq3ZEVDI9tF0yY%2BGC1lxJ9jb3MyleK9FUraUYP9ZeZQCcVKsGRPIo9O2Yb5%2Bet4OlBj%2FHySf35%2BVlAfoX6g3IDt3eVzC6kWOpFQxQvQfEzfQ1QD0hQPi5YXL8PI5vqbpBbvVeoJYfEr2WHFi61Ch5lWl5Thr2VgKiUnDZ1qqMaGAYe0RyLpXHe37RxAAOQO36kLYkXYDX06FLxmMCWdH1tbWkcDRpmIXGa6JcDJirfXs2h1U9s3dFpyqyGcKGguHcFg%2FFK8JPVT2H%2FppnMnFMdFqFnYFH5hDyYuTYOBxZg2vBqbtDjtI7Rq1ofD9K01NQSBa5p9vAr5TG%2FV1OpbTVzKrooIPo2%2B8wn7O43sK885p5s%2BAajFQtNXk4b3uHi8BCvsXwE0y5DP5Dc7MxxOyBCQm29mfJpLZhL0zDgDsRdVkpEnPAVoDBJPpU3KrP9Ll2OIEYBFiQUgLdiSEp5GSZGCaNDGaapI8Kp8sKI1d2dRUbFTMr3pesUpDq%2FK2rUc%2B7yIdDAZIjoDSdLQYIea6suh5lzqqMs4ntqHwLdsjpYVByLceD2SQycPhpQvaQNlaYddayp7%2Bcx1NaFzeT2f2JRnLkTDSz4q9BjqkAT4tcCg7Df73ZkzPqGJ9TEaGaV4XpuMGZLK422EDSsrD7RPm4hHoUVh1y61EAoJsBHDdLOmKoVf6xtEKaqc9TfVrkce5NQSooHfY8TmzGn6Mls28wNiLtSovan%2BWt7pPlIVtaMRrdJWX5oFO50G745BQMPf8LUhjm0ZmNmitm2UxSCBzlvmuvcqz0i%2BWKdpNj7iO5Lo%2F%2BPHWlb7leDsWSTCryo0a&X-Amz-Signature=d9fb97d07337fd671c271c4cb8b35e4d66dcf58fe4ca8f66d4ed3b9719edcf70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKO4FY5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDvB67DeITzGcuWeN1bUKJz38%2BfmpYXm7zevqzbbZYJ%2FwIhAJPV0er4OQZ57OOuBB8EcAJ%2FnSNS%2B%2Bijsoohf%2BE8RfKTKv8DCDkQABoMNjM3NDIzMTgzODA1IgzARjfAL6amzNy9B9wq3APkPdbn61k4RBiAj%2B5lxcjzBBP84zsDbIkBatqQZFHd0w6Gn%2FBHg6g%2F%2F6yA5OnC6woP1bW0UPvQ202PodqYk%2FQswspHkdSw%2BHdLLXsiVLe7e6rEVUYtHwj%2Fgvy9kOLsF6oKLHO88H7eQGX0DD2g8vJ8aOmn2H2oXDCzbvdCyHCw%2FMhxrGO6JjrBBNGHiqwYRE3QEJ%2FJqfxaPhvfQ77TKVwfltdCXCdw9jorXpcYEds6ukWrNCBoVnIHxRL%2FU%2F0KuvNT1XWY4OpGYHmhY6sm%2B2zM%2BqWqL5rsufqJBX%2F%2FqkPu%2BPaaQERXGVRN4JM13%2B%2FvhUn0GGmabYUDMdTViPeGMQ17D9nyBWYN8Ba7Gs8CaoiPkMHeM50qU3q6TIzAW%2FSMo3r0qBL8yX0381aMQF5cpultIXuZrRU3YGMwt5bIhkZ37psiL1SVc2oCjU6mNY7UbvaygEEwQpvmEGlnHierHGWQJSJ0FYZCsluqw2%2BNh5Sb1lpUFYK9YHS0V8zN3VxmwOxElXXLoz5uEX8vk2tZXnK1vwcaJ5SDvKxqJfLnyHlzpIbbS5p35vdofgcIePW6d%2F2Ski1HStQ1RJFVJe%2F1fakE3IQLYiqq%2Fir7e80GTchtq0i47N9V8jr%2BvJ7eXzCfz4q9BjqkAXOXzXFuXOpsElckzED2TyU380M8FcZywb4KroNZaCx84tbPuL1WutPqtFLV3ZyHdjnkKm3ajS8hUVZUeYJdU4uz7%2BLuSPGHwbPYH8C57gm7ChWKAqIhKf%2BI2Y3LGbCPA5h2CxtiUlYBcaGkx5Kl1LFJxZApAWy9kIN6x8%2Bz%2BOyJX7AT74FlVWO%2FzPfarPfx%2BnvEaylc0nPznxg7gA5DlgpH%2FRgp&X-Amz-Signature=ab47f85ecaee78b8279fa875e750c5c6db37f6c7a643d5e2c4487695be8a0b11&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3M64YP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCICs7diH3xtv0%2BO8beQV9HLYzc3vBrCHDav3NmQDqcjVPAiEA4mNq1%2F7qmEnITr%2BYAzemJP8c2KS%2BPSBYJGGSQfHx5aQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH44xR%2BH8gVqcOmS2ircA06l11gfdmPZspfUWFkHqJ2%2BJGnRJfZSiSV9Xc2I3X73hNUkrdOoAlUgkQMAbsAg5KEWyFpKdzZKdPTBn%2F%2FTay4OBozhstIPP633YG9phNlp6aZuipjvC9ohKOKlHlhqPH19%2FydwQHTwRZL0tUxcmK%2BkvhXjyQoGI8D1pEYGSVrepL%2Fd6WAZnnyYMo1vz4hObGZR3zOMjoJH%2BBuB8px1EeGpQSbQEoiqzGBrxwz7mrNHbRvlnA%2F33Yc%2FfrQgSRnlirlfdVjSHtXB1wgu46HCGOUpWHATd95FXuzYcWtnX9m70LyIomGffV8R6Y5Er6U%2B2Gh5uxww0NjcJ3DF8GYQCg7Y0AxfteOj%2FZsnuADVoKo3XeLaMGogksw8wQk2T5VT4uqJ1QB8UTo5lkrNTm38lBQegTvUaD3WV9JKIlqxRUAA%2FsKYfDOsbEwWGF7wlOW0h%2FcL2eZ%2FOcn8IqQc8cgKb7kJm8bnGDVwKMF8yomZfgPGqqnxGqJr4YCiYVznw7flIrfk1HeNqxhRLsJKvx9c1mprWQyVxMp7IY1XSKGhXluhaa1clRde7nafGYzAPWjg%2BGuZwx32XXfjBZzE8YMX13eTDbjndOrZ0iACnWv19wEH9Z%2BfFyI1CWOLrD60MNXPir0GOqUBKzYi%2Bz2oQZpEzZFO3Lp7FBCqwtaDw90YDyD7n%2FlWwMgInAs4h%2FLow%2BT%2FzgAXxvKFQMt3c2n%2F5mpoaPn0nsF5cJcmxLFdAiStcQej%2F0UEjkzZZ8kw%2BAXdNsLEZir%2FtEuQfflSioXi7XOkQKdpIn4E25vWtQVs%2F4ZjqxvugcJYoE9liNaH%2BwQO8andkUoDrijt2tyU4%2FPmHo8momq3RSeQM%2BEWRqk1&X-Amz-Signature=a08a587fa0f66cc8e3daa63dc955829f83ee5b02fc5d9b8ebd40e10300d75944&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PYK5NU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCxXg%2FWIgNrZrHOtCmvQWRtn%2FOOy65Maj5MpuWUwOmUxAIhAM0aQWv9TuumcEp3XTuHcouYcp66EfXwuomzsMHWACTcKv8DCDkQABoMNjM3NDIzMTgzODA1IgzwLAcWmWaMPoA0O%2B4q3AOfDkMMqokxxifRDXE8dmjxBb5WxlI%2FNfBaMq3ZEVDI9tF0yY%2BGC1lxJ9jb3MyleK9FUraUYP9ZeZQCcVKsGRPIo9O2Yb5%2Bet4OlBj%2FHySf35%2BVlAfoX6g3IDt3eVzC6kWOpFQxQvQfEzfQ1QD0hQPi5YXL8PI5vqbpBbvVeoJYfEr2WHFi61Ch5lWl5Thr2VgKiUnDZ1qqMaGAYe0RyLpXHe37RxAAOQO36kLYkXYDX06FLxmMCWdH1tbWkcDRpmIXGa6JcDJirfXs2h1U9s3dFpyqyGcKGguHcFg%2FFK8JPVT2H%2FppnMnFMdFqFnYFH5hDyYuTYOBxZg2vBqbtDjtI7Rq1ofD9K01NQSBa5p9vAr5TG%2FV1OpbTVzKrooIPo2%2B8wn7O43sK885p5s%2BAajFQtNXk4b3uHi8BCvsXwE0y5DP5Dc7MxxOyBCQm29mfJpLZhL0zDgDsRdVkpEnPAVoDBJPpU3KrP9Ll2OIEYBFiQUgLdiSEp5GSZGCaNDGaapI8Kp8sKI1d2dRUbFTMr3pesUpDq%2FK2rUc%2B7yIdDAZIjoDSdLQYIea6suh5lzqqMs4ntqHwLdsjpYVByLceD2SQycPhpQvaQNlaYddayp7%2Bcx1NaFzeT2f2JRnLkTDSz4q9BjqkAT4tcCg7Df73ZkzPqGJ9TEaGaV4XpuMGZLK422EDSsrD7RPm4hHoUVh1y61EAoJsBHDdLOmKoVf6xtEKaqc9TfVrkce5NQSooHfY8TmzGn6Mls28wNiLtSovan%2BWt7pPlIVtaMRrdJWX5oFO50G745BQMPf8LUhjm0ZmNmitm2UxSCBzlvmuvcqz0i%2BWKdpNj7iO5Lo%2F%2BPHWlb7leDsWSTCryo0a&X-Amz-Signature=5a4a8841243c4ebc006d5eda564d8cedb9495a953d18846db5232d68b1fb4cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
