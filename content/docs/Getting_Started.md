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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOK5XGCG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL5DanOGTSei%2B6QPxlNxX5lFfrqVLKyu3uBzNaohjSuQIhANtjBeDdaqtqS%2FOoRmxB%2FA%2B0mbqoOY93D7wO8kcLw1VnKv8DCBkQABoMNjM3NDIzMTgzODA1IgzQ%2Fivs2XUW7ArWIBQq3AOM1sVnJFOzlyujqu3stVZZ6bPUWe%2BxYNPuW6H6uqZ%2BNmvJO6c3z%2FstoEFTDNB8WfFcYEOO%2BUUakyqrRc2oZpHd3keq5Ga2k1UbkcTiX2ZdIk3rjEPIPrQ0hy%2FCRw%2BWBD6uAedsym8wGYi31GUUCn9qHLAL6yTYs3sfwFTV%2BGfa12lSVp9ebmOwpcdFsryXM1GbSfmjsnxaVJ6h2F7mklV1EBxg3bpDZM6cV2Lk4DkLiCmb7mKArpwJNWX9NH1WPaNbM1WS1suOzl%2Bp1TXWo5PDrjsnZ4js8t5Qso71T%2B89Av5R3jVodlt2BpaBN8rQqi4jRnZBotE2aJLesvS0WuSWsQhjrRBZYDi2GRIbMC6840mvmiqdxRnzvg5PTOjDOYkWNsNccxUyX0lhnBzmDjuirPZVXPQi%2Bxwsmnzni3A%2FiNgeuN6z8e7Mb2icl%2B4OzMadJ0Nv5I9Kd1e%2BLJ3fkeLW4vz4l52%2BxPOM6CtvzkFmGtE6Y4%2BMiU50ndW5D1xk5IZ3t36npzq%2FfTJhQc6G8Q30Qfb9xztOz1CsVjdXp38v5SXk5%2BoBVOsVifJjTDwgkjHygob6L5cqatTQpEXjM%2BwrqdNE6op0cnRbobV%2BrN8Hs0UEsltpskFTofJwfzCmgsC%2FBjqkASW9k49gpLKxwzUSR7yYKLTdYVBM28MEyCDN7vcGcIrRHgIY2OyK1UU3jniRdxJ61vyda4wpM7Tms0H6naVwD%2FsFEV1%2BxlUnl907GBmEXWqeWxhpNSsAP2EQ%2FCyCwYNMA1MRpVLK9mhL8mvRWuPCPI5Hbre8pIsQWKCJ0UglDp5KtHSEhqr4kvwQmnt6XpOe%2FepgD7hYSNwb2YbhW%2Fw3X%2BmtWQxE&X-Amz-Signature=a81983df01f5818da042e4f973d7ad4056cd9dea08346c01087a6af90bd48109&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOK5XGCG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL5DanOGTSei%2B6QPxlNxX5lFfrqVLKyu3uBzNaohjSuQIhANtjBeDdaqtqS%2FOoRmxB%2FA%2B0mbqoOY93D7wO8kcLw1VnKv8DCBkQABoMNjM3NDIzMTgzODA1IgzQ%2Fivs2XUW7ArWIBQq3AOM1sVnJFOzlyujqu3stVZZ6bPUWe%2BxYNPuW6H6uqZ%2BNmvJO6c3z%2FstoEFTDNB8WfFcYEOO%2BUUakyqrRc2oZpHd3keq5Ga2k1UbkcTiX2ZdIk3rjEPIPrQ0hy%2FCRw%2BWBD6uAedsym8wGYi31GUUCn9qHLAL6yTYs3sfwFTV%2BGfa12lSVp9ebmOwpcdFsryXM1GbSfmjsnxaVJ6h2F7mklV1EBxg3bpDZM6cV2Lk4DkLiCmb7mKArpwJNWX9NH1WPaNbM1WS1suOzl%2Bp1TXWo5PDrjsnZ4js8t5Qso71T%2B89Av5R3jVodlt2BpaBN8rQqi4jRnZBotE2aJLesvS0WuSWsQhjrRBZYDi2GRIbMC6840mvmiqdxRnzvg5PTOjDOYkWNsNccxUyX0lhnBzmDjuirPZVXPQi%2Bxwsmnzni3A%2FiNgeuN6z8e7Mb2icl%2B4OzMadJ0Nv5I9Kd1e%2BLJ3fkeLW4vz4l52%2BxPOM6CtvzkFmGtE6Y4%2BMiU50ndW5D1xk5IZ3t36npzq%2FfTJhQc6G8Q30Qfb9xztOz1CsVjdXp38v5SXk5%2BoBVOsVifJjTDwgkjHygob6L5cqatTQpEXjM%2BwrqdNE6op0cnRbobV%2BrN8Hs0UEsltpskFTofJwfzCmgsC%2FBjqkASW9k49gpLKxwzUSR7yYKLTdYVBM28MEyCDN7vcGcIrRHgIY2OyK1UU3jniRdxJ61vyda4wpM7Tms0H6naVwD%2FsFEV1%2BxlUnl907GBmEXWqeWxhpNSsAP2EQ%2FCyCwYNMA1MRpVLK9mhL8mvRWuPCPI5Hbre8pIsQWKCJ0UglDp5KtHSEhqr4kvwQmnt6XpOe%2FepgD7hYSNwb2YbhW%2Fw3X%2BmtWQxE&X-Amz-Signature=71e150d713580b9f5e05a236a810c445f0317e58a355a493a51a9561d4cb1f22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGCANVWW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIopjzLfx8ZiWPW2GrRbkOdbtRQsGMLIXvybc4PxqZ6AiB78JiiZYE4GIbTeS05K7s9Uuc9LTPGy86pO00PCL%2BXlir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMkL%2FKDgbugADs122pKtwDQAZ7KAJMUGE8QV1jlORUJE85o52hsEiwToLytrcH8rIzJO8GhixBXePQ0SpklLoEbml7ADWjEuPEUytur5SZ94qCL0a1TFzFIgFlGxsaPNqdvrVky%2B3DkYv0vZfwGHYtwrUgeImRnToBAdkegu1X0j5wY7DYaix1oUiwQhHur%2FaRpebOhJdDKO%2FldAh%2BJMNJC5kFVN4h70kLu5mu6IdB%2Bh52MIDWQ1IbqbCNLJo4fJJRhd3XVgrKi1bKGQI%2B9gZSW%2FuB3OP7tOWkvPeoRxxmhT1NPqBFxXhQnYElIjvhHNrbFpwH6vXxw%2BycaNDYsJxFb3on%2FKsgL1EYHpmMWPb7wPKQhG7LOkwYBrxgvJ6rwriXObn%2BZmHC4RQ1kQrTgZyoStk50JD4fpOnhIDAlEbEKfNwPqlG5aCU%2B1BSlEg1kTs9HVZPXkh3oHsLTC%2FPE%2Bxjt3uTAjR8QIFCRU4FkwwDYwuwvd66efDadLL8FbKG9KC8WTu55bUCkUqiFSWCjnfGJE9eaHI9gN2e0sTM%2FKvz4qk1gipKTeMC2Nns%2FZu7Bf6Xr6yS9NtAnvwZxEMwtpY7X4sg1UEveyqipQl03%2BBe%2FJ%2FdcC9u%2FMid9fdRveBdho6xVFJftcLyBu%2F08rYw%2FYLAvwY6pgEe09OAPyZEwbul%2BkZxidhyoZ4LePetc8qm7VQlYNBRV2aD79ogrLboVauVhRFrmnah5k%2FJsKmCCZTuwjU0LO7JgDfJ6TEy5a3%2FY%2FcmowBrXs34TMV0Bcwwap9p94zUG2rlqRHA02lDEVqZdz4U6ILEubxE%2BZkVAEaGcV9%2FR115B8Ps91HsH1nJyQNFro%2BvndG4%2FcGZRV%2BTCRPZMJmCJlGBF8vq6r6R&X-Amz-Signature=f4c8bcf25a81c2fe49bc0b209b2c31aa0cf0e437f51c9ffb73bf2abb48717356&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3UVXZVZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeAJ%2Ff0FHmr4i1%2BuOnJizTHkkiKQMWI13DbQv43JjNVAIhANDIhpJw1Uz1SCJ%2B%2F8lXp2UNZC73ZnkNGLmmjQ4QWObfKv8DCBkQABoMNjM3NDIzMTgzODA1IgyvF88oDSZ0m3UJzzIq3AOwi8AGS9IZHMcnyHOfmZnAV7kTxcQY16WwTQ3z6LN5cpStQinqJBR%2F7sJW6Z%2FjT73A2%2F0oN3eczkFAFRsfMAGV7XAbXypTL3B7T%2FLN7wLbyyap6ColHR0OunkAZxm370oX7hskWgCCzdDz%2FXuFMWGT%2FcJPkL95AdApfpu%2FbW%2FV2a1TyNhYU5ZDC1fHJPJDXipUrdg5x2dajjlAMSehYBBNeKgTFd8pU4pYShOfq1tMi51PNRio46NtkqDlxav7F08N19pufq5L2SSz1G1RbjK7gzJw5zg0ds4FAE5HP%2FnabxvND3gw%2FciWe1rGygOZqPwANWyN6Isf3yZNHAuY%2F%2F2BEHJtP%2BQwnH4BahauigvFnDfZiOXs0PdIkPcPEpn0O3mZvuBh9pG%2F7lXcYP8DgHCV1Fz5DjhjylptsXuTWd%2BLWZgGB0ST8OgVppfMAZ56CWi8FbH8%2Be801dtLtEf%2BR54irLrs%2FWhpoZ2HeaOKiZXG2PldbCU7WuroXmg8CkkAEKB1NkMqf440SkVNDhhsYoDgwAr04C7iNZSMfyqfehn21ZIQd4K%2FWMYDNDn%2Bkfb%2FEoWreSMpHcWUkVO5BgV9DRy6b%2Bi8mJrHVmxoonQgoA6XR49LTh4U%2F3q6OThBJzDtgcC%2FBjqkAQCeRFXPNxd6HTdLGYvb09XKmzxV4n97A3LSUOy%2BtsrKjLabG%2BQzQ85rC56O5r4ZnuXfrheGacFBqmHauZC4S%2BycwaQ2s5MtN9x8fgJoZ%2BvYd%2BBduPV6m1%2BCS1XNGK8KFaRJVmV35oDj0LDotScyXgdKyGN22QeZx0YZrN9IIuDlBwNfL4TkbATL10392Gj9rmrVXHxeZ1pmD2bX8Y5j%2FDfyDJcB&X-Amz-Signature=f4fced7f3050c1fd42df543e8a86001ad84a10877894d4ecb3d56905134e3506&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOK5XGCG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL5DanOGTSei%2B6QPxlNxX5lFfrqVLKyu3uBzNaohjSuQIhANtjBeDdaqtqS%2FOoRmxB%2FA%2B0mbqoOY93D7wO8kcLw1VnKv8DCBkQABoMNjM3NDIzMTgzODA1IgzQ%2Fivs2XUW7ArWIBQq3AOM1sVnJFOzlyujqu3stVZZ6bPUWe%2BxYNPuW6H6uqZ%2BNmvJO6c3z%2FstoEFTDNB8WfFcYEOO%2BUUakyqrRc2oZpHd3keq5Ga2k1UbkcTiX2ZdIk3rjEPIPrQ0hy%2FCRw%2BWBD6uAedsym8wGYi31GUUCn9qHLAL6yTYs3sfwFTV%2BGfa12lSVp9ebmOwpcdFsryXM1GbSfmjsnxaVJ6h2F7mklV1EBxg3bpDZM6cV2Lk4DkLiCmb7mKArpwJNWX9NH1WPaNbM1WS1suOzl%2Bp1TXWo5PDrjsnZ4js8t5Qso71T%2B89Av5R3jVodlt2BpaBN8rQqi4jRnZBotE2aJLesvS0WuSWsQhjrRBZYDi2GRIbMC6840mvmiqdxRnzvg5PTOjDOYkWNsNccxUyX0lhnBzmDjuirPZVXPQi%2Bxwsmnzni3A%2FiNgeuN6z8e7Mb2icl%2B4OzMadJ0Nv5I9Kd1e%2BLJ3fkeLW4vz4l52%2BxPOM6CtvzkFmGtE6Y4%2BMiU50ndW5D1xk5IZ3t36npzq%2FfTJhQc6G8Q30Qfb9xztOz1CsVjdXp38v5SXk5%2BoBVOsVifJjTDwgkjHygob6L5cqatTQpEXjM%2BwrqdNE6op0cnRbobV%2BrN8Hs0UEsltpskFTofJwfzCmgsC%2FBjqkASW9k49gpLKxwzUSR7yYKLTdYVBM28MEyCDN7vcGcIrRHgIY2OyK1UU3jniRdxJ61vyda4wpM7Tms0H6naVwD%2FsFEV1%2BxlUnl907GBmEXWqeWxhpNSsAP2EQ%2FCyCwYNMA1MRpVLK9mhL8mvRWuPCPI5Hbre8pIsQWKCJ0UglDp5KtHSEhqr4kvwQmnt6XpOe%2FepgD7hYSNwb2YbhW%2Fw3X%2BmtWQxE&X-Amz-Signature=2982e6e12624b4abe4330d093b9254a4c6d291c93b065b29c981c8ebbbe7d896&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
