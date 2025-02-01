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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FDTQIE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDayJsf%2BHfmW8ueqPwhTSHn%2B2RywWwx0g3ZRwcgjX6VnQIhAPDcJ%2B9BbmS6Dda2gzUQy26Mg%2FwsftpR0iYwDlrE1EajKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyh1nDnq8aUWGBZd08q3ANH3mfESvf3DQAoRt9hDNx9suso2FUqIGnAcmGffe5bXgPk8Q%2B4tA4Yi5E9LDf40eEeOI9MYJlAZOJesfj49H7AwVAHGELVI5ZoJmXdNsP0cVaqZXAS1Dk9Mebz8kG6Z0PczE9Bb4ayt4Y0mRS1wS6vNY49VRnhLiMezVC5t4Lx9vcX7KhP3229NTFY%2FNjYpY1kymwypxQx48Ogm2tQUSqk%2F7J5S5eLGtc32oKO2eVwt39O08ER6IiD%2B2CmDSs4wKR4WeMzI14FA%2FcoZ2ymucFazWy7xZypg5Dgc5sH7oslrhzl%2FE4%2FTCJ8ignpTRsi8ePxNPQIPNQSgZilywNcNtFngPvZpKVY9cp%2FqjOHtH11pKR2ck5WT2gsNPgDM7XgXrBlq8BIw5rNqoGbgH%2FTrq2YNRGNqsNBnU0bWyqyu9lxZdZ6Pd4Lfa1dYAy7jV6fztyt%2FD8VGPHQww7p2ORcB9wgPB2y4y46gxB5ysfXWPzdqMh%2BUomUWwlW%2BWeyRJbgmp0tboollOIFcvfUxjO5AhmoZ1PIFj2Dya9l3tdD%2F3G5yhFrd5%2BRrdbxteU3inVXvkKXpy622GRFh%2BLfsPhmblmsUDsHRsPRD4GLIiSVQemdzLkJR%2FZ%2B%2F7e%2Bw2BeFDCClfq8BjqkATRFLqFZ%2Fne2XAZCr224r5XO%2FQGxc3eA%2FUd01rEKTttg2hhGhrH1kp3acXWzu7HV7dpbYRz6iI6Nw1oz4mfZEdkCH5VIXSPnu4AfAn8D01ysvkJ0%2BNDL7fxfVfcBEOVgFGAKDSeSznFBNQOZXGfgR9P683No6D9jSm3voP7vsAnj1%2FlQeX1MEaeL8f5bbI2KfedSdjk%2B1FQ4XAbZoAdz%2B7tDXBNn&X-Amz-Signature=cfa1d6f2022cacb768aa1f82cbd4db58b8edab2f3baf0af6a8f311717c7077f1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FDTQIE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDayJsf%2BHfmW8ueqPwhTSHn%2B2RywWwx0g3ZRwcgjX6VnQIhAPDcJ%2B9BbmS6Dda2gzUQy26Mg%2FwsftpR0iYwDlrE1EajKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyh1nDnq8aUWGBZd08q3ANH3mfESvf3DQAoRt9hDNx9suso2FUqIGnAcmGffe5bXgPk8Q%2B4tA4Yi5E9LDf40eEeOI9MYJlAZOJesfj49H7AwVAHGELVI5ZoJmXdNsP0cVaqZXAS1Dk9Mebz8kG6Z0PczE9Bb4ayt4Y0mRS1wS6vNY49VRnhLiMezVC5t4Lx9vcX7KhP3229NTFY%2FNjYpY1kymwypxQx48Ogm2tQUSqk%2F7J5S5eLGtc32oKO2eVwt39O08ER6IiD%2B2CmDSs4wKR4WeMzI14FA%2FcoZ2ymucFazWy7xZypg5Dgc5sH7oslrhzl%2FE4%2FTCJ8ignpTRsi8ePxNPQIPNQSgZilywNcNtFngPvZpKVY9cp%2FqjOHtH11pKR2ck5WT2gsNPgDM7XgXrBlq8BIw5rNqoGbgH%2FTrq2YNRGNqsNBnU0bWyqyu9lxZdZ6Pd4Lfa1dYAy7jV6fztyt%2FD8VGPHQww7p2ORcB9wgPB2y4y46gxB5ysfXWPzdqMh%2BUomUWwlW%2BWeyRJbgmp0tboollOIFcvfUxjO5AhmoZ1PIFj2Dya9l3tdD%2F3G5yhFrd5%2BRrdbxteU3inVXvkKXpy622GRFh%2BLfsPhmblmsUDsHRsPRD4GLIiSVQemdzLkJR%2FZ%2B%2F7e%2Bw2BeFDCClfq8BjqkATRFLqFZ%2Fne2XAZCr224r5XO%2FQGxc3eA%2FUd01rEKTttg2hhGhrH1kp3acXWzu7HV7dpbYRz6iI6Nw1oz4mfZEdkCH5VIXSPnu4AfAn8D01ysvkJ0%2BNDL7fxfVfcBEOVgFGAKDSeSznFBNQOZXGfgR9P683No6D9jSm3voP7vsAnj1%2FlQeX1MEaeL8f5bbI2KfedSdjk%2B1FQ4XAbZoAdz%2B7tDXBNn&X-Amz-Signature=1825b169cb53f42fc4d88dd5fac64f53d3dd8bf44c1c149b55065de240aa2b04&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XICD4XCU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGxjAgQpB3d9WdZqT%2BoGGwrNmna3y00mtm2WHGP0YN8wIhAKgnu1ic2zpWUvg%2FjXCE7zvjJOcqVxSNsTiJT6RS4joMKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKoSRfI7xi%2FUFM5%2F8q3APu904gt2XM94ysWpGLIOBisBfLbjycAl47dujW7%2FS2bwGeHBDGIOd52hZcxqNxY01gt66Js3MBPcwJq9fQWklJHw%2BV2WxsaDkEGEa%2Bspb3xguy7JMk%2B%2F%2FvW7U20gauF%2BL1SgoWceSi9b1rRS5RJl3ElN2SdTvRrzoNqZobSPm6Nox2dC7XW4ouRS24uNbYcOvyi3mQhcuDVKJs0nS6780tA7Stmu6hZTXM5KvsWIE9Emk3Qcx7nKZgqe3u9S9ZE7rb57inyP8%2FNzUjdtthI%2FL7HgshYlT49n%2FucHVD4FIsqEUsYEffZhLAr9CvmMlJ%2FPcrxGH4dFatEe6efWynOoauBCMXIe10yzmCA7J7CDx6gBHq8z%2FbzzVjBWcNGkxFNlUTYPRrnLY52M9sqqCdWvWJthpnuEcTlnM2VmvaYYnv100x8f42ZTkDFF5s2hT22vjqwM13Mw%2FrLJrwAWaRfB83GiM4gr0qK5fjgoSdfJ7IKfc82TEwYoAuH6QJg0Jt0r6UdXazamkZTtmGLv0R%2Fh6yd6O25sOq6T%2FTwlP6SByoDD6vFKEeOpam%2FnDzHfM%2BX9Ob8kpKASKBCOkbc1hkaNdIr8MjqcrxgKs1agxYDSIwFxcxQfe9ZdwJ7YFlGzCAlfq8BjqkATs%2FpqLwiFAYHItqe%2Fo4FnFsUJELVFzi7QZvojEKB14xp719v7CHdk1zFPswI2zs0mmFHzhwSAm0hU%2FYDDjC1esUz%2BdgrS9l%2BVwY3jAF9Wzwh%2FvmRbrrCEZbzhoz%2F7y55XPrRqCfPqQEnixNWz43FHI5wnDNldW%2BxKBDNV7SyPEkeMasfu3IPEH9P%2B12hADT9QOuACgcbo%2Fj2Pzz57jDLma%2BDra0&X-Amz-Signature=a2b4b1c4c9129b55a49bc3266cd381a1ae6bfb19d7c9e10b039f202a11df995e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTHNHQ5E%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhdDKtFeO4go3%2FeaO9wrM8kLHJ2lI2cAB3kSbQXMEGFAiEAr3UJqa0IsTqs%2FwMOsLVDUCPUvxQR0lqgfNNs15ilcUAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOI02ub1A38fDmtrgCrcA33ZjiUzFYQtiI3d3GDMKo04%2FmNJxltXX8XF8zdAkIUJwlkIJNxo9FQT359QsBBOnYZ9JftX4x4TlSN4Wb0Lq3WutQw6OH3twHbuMsr4YlkDOBbimJUOgFj6l4vO7%2BXnBhWpVgXnICqj8Z2XPtU1qUBsXQNaHD9cILLcVNcRyncSTxxkd9W1XZzyXbjcpjkl8tuL8TW1RGT3GM6GGPaKplyDI4vrcunZi6vJdDTQ%2Bz8p08Eqxan9m17XWV2vEF5qCYjSHfgBurWN8VaipVcwwBOkSL8DctERDfCM4UTyNENdC72LldPsAJ8eyW9sqyr1mp3C2fkM1Qu9Jzx%2F7Be4XlSLdmAwv5%2F8%2B%2BCdsOJWvULuapTnqO1ZJoXyQnfmos8K3Wu44PFwZ4NAEx0aX1jtg7bk60JrRDZ6svR8GsAgFPkB6%2B8RJXcL7gCZdR88XxjCuw8w9z1fDcMHpEEugmsy3zoniFOuP1kZN8ERQxWYv%2FH0JnRQKyKpg80e0HkOsHGyzyRHPv9vCiE8SVxLjseBnRu6%2FphfvyWM0zHFcVK7Hhz45eJgCkcfXtmtYuAxdIl3xYPj3%2Bjkb7dx%2FhHCgouKD9IYOEHLa%2B3QFnF2I7o2Y1Wx4sxqXxQ5lT1Z3Q3jMOCV%2BrwGOqUBb7uEGSQQaxRHbG5hpKpxZOU2S%2FslIx8adJ1KvQe%2FbXFeBcAqQGMvFHoZSIW4E0knQpP7emCr359MDp4f%2FDz7rZYNe%2BWoKKHFymVzAzN7s6Zc9M0b7Fg0C5VS2%2Blx26khbD18RQ0aPmoTNJlO6DDd0dRImghnPsHmbwnV4s%2FU03RYmF47nmLyreLBQg%2FvMxAdp1pebdk8g6GKis09BkiZ%2FR1TPKqz&X-Amz-Signature=2db32e790c727c1dc63f848694c473510f53a9daba7b5934aa544aed809f7265&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FDTQIE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDayJsf%2BHfmW8ueqPwhTSHn%2B2RywWwx0g3ZRwcgjX6VnQIhAPDcJ%2B9BbmS6Dda2gzUQy26Mg%2FwsftpR0iYwDlrE1EajKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyh1nDnq8aUWGBZd08q3ANH3mfESvf3DQAoRt9hDNx9suso2FUqIGnAcmGffe5bXgPk8Q%2B4tA4Yi5E9LDf40eEeOI9MYJlAZOJesfj49H7AwVAHGELVI5ZoJmXdNsP0cVaqZXAS1Dk9Mebz8kG6Z0PczE9Bb4ayt4Y0mRS1wS6vNY49VRnhLiMezVC5t4Lx9vcX7KhP3229NTFY%2FNjYpY1kymwypxQx48Ogm2tQUSqk%2F7J5S5eLGtc32oKO2eVwt39O08ER6IiD%2B2CmDSs4wKR4WeMzI14FA%2FcoZ2ymucFazWy7xZypg5Dgc5sH7oslrhzl%2FE4%2FTCJ8ignpTRsi8ePxNPQIPNQSgZilywNcNtFngPvZpKVY9cp%2FqjOHtH11pKR2ck5WT2gsNPgDM7XgXrBlq8BIw5rNqoGbgH%2FTrq2YNRGNqsNBnU0bWyqyu9lxZdZ6Pd4Lfa1dYAy7jV6fztyt%2FD8VGPHQww7p2ORcB9wgPB2y4y46gxB5ysfXWPzdqMh%2BUomUWwlW%2BWeyRJbgmp0tboollOIFcvfUxjO5AhmoZ1PIFj2Dya9l3tdD%2F3G5yhFrd5%2BRrdbxteU3inVXvkKXpy622GRFh%2BLfsPhmblmsUDsHRsPRD4GLIiSVQemdzLkJR%2FZ%2B%2F7e%2Bw2BeFDCClfq8BjqkATRFLqFZ%2Fne2XAZCr224r5XO%2FQGxc3eA%2FUd01rEKTttg2hhGhrH1kp3acXWzu7HV7dpbYRz6iI6Nw1oz4mfZEdkCH5VIXSPnu4AfAn8D01ysvkJ0%2BNDL7fxfVfcBEOVgFGAKDSeSznFBNQOZXGfgR9P683No6D9jSm3voP7vsAnj1%2FlQeX1MEaeL8f5bbI2KfedSdjk%2B1FQ4XAbZoAdz%2B7tDXBNn&X-Amz-Signature=02a7cfbb0fa4d9b4f52f687cc8308428f585ff5df8b7b682dd567cd94a215752&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
