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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QQ5QZ47%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl%2FtJpBi3y8kJvxTfAGpIqQsSIvAfADjF%2FVQaOcCfwuwIgGDZ5T%2BHnrUH8QkLIHWgUNZVEKJ38h3GksXoHcLdZib0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFdGa11jXgMG5l81JCrcAzDcDntFfJDz9oNz5%2F1OolhuM9FN%2BX1fjJMLt3cUfvXisNqHo6P7Dyrnb5edCwSZcTjS5AkGpD7P1muO%2BstVLA085p2bS8CGoDaoaTIf1FFvCp6TOWZ9f35SbWxoQqB7xLNXDpNHrkZu43REBJSiRYdTMDQwaPTNyYdxw10hAN9fLFKYiE8I17gqVEYpj2n5TGGn6RuvPUNBSRxa2d1TXwgMHAe6XpNPZNkxMuXR3wEQT9ZfuB4onAjtjyKH8iqY0jKQ6i5ni7wVhD2RKpcDt5jLbFjsfJMNyr7v2E5VsvIPfxyRKYPkHlxOzqh06LHHmXabiyu%2FPxEJQqtr%2BY66A1FiIkPLNPILEJk%2BGASxuYHModXcgQqHYGK01hQYFHjpZPZBbBvciNYyCLDjQQ%2FYo%2B7XR75UYhWmgOFqc2POtt8CNu2KelzGFqzv8y2SdZKgCVh263rpsJVSzwaSiAAAZVT5EAgb%2Bclgk%2FBl3QVOcqQHcaGKhYSDEQamuNGwqEjEA7hMiGl9Wmcfwizo%2BEGzNKZZuoDEh93hJpn0RglvRNEfOiwQS%2FKVowpodm4sOoZAHWSbYT8zxyj0nomK0hQVJXWn4tNdStUoJ8UBCwAunmZqStooJumjDcfgVOCRMK7dt70GOqUBXSWKncOmVZEoKE7rJdysvtv907jbW96NLUNTXKZ2%2FjjHC8PeRzHEj%2FJBFeWRq4LPLe2rkDjV2HPFTxAwKmtDKsQjJKIwHg5QN0KwdwfwZG0Qvx%2BGfvJO0tMY8%2FVpqiM43SkC%2FH2fXadwjJUifAy%2B1avW9Ie8jOof0xzDXx8WKOGSY9W5YfMZBvhjSEW%2Byc8WToix3iRe%2BEE3V4piPhifSA7ZEMyz&X-Amz-Signature=e8ed696c4b62b4194995565c135ebd1167f21c9552445d13ec77df43c3fbbe76&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QQ5QZ47%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl%2FtJpBi3y8kJvxTfAGpIqQsSIvAfADjF%2FVQaOcCfwuwIgGDZ5T%2BHnrUH8QkLIHWgUNZVEKJ38h3GksXoHcLdZib0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFdGa11jXgMG5l81JCrcAzDcDntFfJDz9oNz5%2F1OolhuM9FN%2BX1fjJMLt3cUfvXisNqHo6P7Dyrnb5edCwSZcTjS5AkGpD7P1muO%2BstVLA085p2bS8CGoDaoaTIf1FFvCp6TOWZ9f35SbWxoQqB7xLNXDpNHrkZu43REBJSiRYdTMDQwaPTNyYdxw10hAN9fLFKYiE8I17gqVEYpj2n5TGGn6RuvPUNBSRxa2d1TXwgMHAe6XpNPZNkxMuXR3wEQT9ZfuB4onAjtjyKH8iqY0jKQ6i5ni7wVhD2RKpcDt5jLbFjsfJMNyr7v2E5VsvIPfxyRKYPkHlxOzqh06LHHmXabiyu%2FPxEJQqtr%2BY66A1FiIkPLNPILEJk%2BGASxuYHModXcgQqHYGK01hQYFHjpZPZBbBvciNYyCLDjQQ%2FYo%2B7XR75UYhWmgOFqc2POtt8CNu2KelzGFqzv8y2SdZKgCVh263rpsJVSzwaSiAAAZVT5EAgb%2Bclgk%2FBl3QVOcqQHcaGKhYSDEQamuNGwqEjEA7hMiGl9Wmcfwizo%2BEGzNKZZuoDEh93hJpn0RglvRNEfOiwQS%2FKVowpodm4sOoZAHWSbYT8zxyj0nomK0hQVJXWn4tNdStUoJ8UBCwAunmZqStooJumjDcfgVOCRMK7dt70GOqUBXSWKncOmVZEoKE7rJdysvtv907jbW96NLUNTXKZ2%2FjjHC8PeRzHEj%2FJBFeWRq4LPLe2rkDjV2HPFTxAwKmtDKsQjJKIwHg5QN0KwdwfwZG0Qvx%2BGfvJO0tMY8%2FVpqiM43SkC%2FH2fXadwjJUifAy%2B1avW9Ie8jOof0xzDXx8WKOGSY9W5YfMZBvhjSEW%2Byc8WToix3iRe%2BEE3V4piPhifSA7ZEMyz&X-Amz-Signature=8e25b05d9a7394431e346abb972b28767979256dee9fde5a6fa2b8041b412b88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JW42CVO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1mmFRAsu6aIVsxRkPaquWG5oVmetwg2bDA59jDBzmSgIhAJaGaexJhlneeVOXb3ZXMSaZJfjpLl1kiRezUmoJD61OKv8DCBYQABoMNjM3NDIzMTgzODA1IgyeVmCsYclcTc6XH1Uq3APiePgn8ZmYJqBR4h6sbbKXeabT2tFwFjInLuX%2Bm1GCZfiQPYk9%2Ffodn2YYRRiyzRdpbj1m7G3UeOh6cfklRPVciIBkkeF15rs%2BwXUFRPYbvGtCTTYPlt%2FGYi2u%2Fbk%2BdgXbovzYfq4SE9fdnMFWSIE8zV9FtX8vRHGBYcYqbHX5Xb%2FDhBw%2FIwKW4sooJQZhXiTW8NYUCIsShFBDV28gVLFlu1e9oGjewG7XuMXDB1%2FzctPbt2fCMdyuVFdxBA1oFdn59vT%2BwD%2F85r6vjV2IC5HxlVJnM%2Fws3FRzSMIhWVkNsuOb21gKzbTFTfaJxI41oAOoQ2mOpZUJdvJQCtCIWG21loMk84VCtmObHhqmr38jVLGaFYxJq1zax76WK4lyBASmOWkhBKy4W%2BjrDQljikhJaXRhiuErMHb96F2w%2F9frrzITfZ7FJ3%2FJuSeYGIZVJHP7NYwd2fEvt%2BxjpxB7EGbAskZhoQyVX8BjRE%2F%2BL7Hsqh1NHoTgDmk7JeENWQgnTvACAwSJf09uhf3pXzokB1P7OjAoL%2F4P6mrIyEBSBYfPhdcQsPCSJZ%2B5B%2FD7MrlcxaPcDwGmNiLkIcjsKDj70uo2E27VxuBQHIZS1dxW03nMkx2X7YTg8h6Czet%2F8TCo3re9BjqkAdx8zbzxYsPLoE39nEMXIfmYLdZeu19WZc7h1m96J7ne4JNLQUGdbGvC%2BPvczKaSDTOSrH5LSDRaae3vTuj3FCVqxSBqIJ26pQEk1T76msuCsjy8zTryR%2FJXNqTV9zHFy7aY3HsrRaJJwKXGaCEIVPHCU2dfhK7NHanHlfHdxcKcOdajXURxEdbl8wVPUHK9lF60mPO5IKQ6kY7%2FeQ3YxDl5uIt0&X-Amz-Signature=5faa09c0a15c1adcc1f2e9395c307748f49325c634f9bb7cf179a2e048e5be7f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTDNSJ5U%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr17b6BuwJ9TZIJXZYk3I8ZT3Hfevcr6j3EO1Y2mW%2BJAiAQaTiWtqMl%2FH8TAoZIGk2RyS0PsMUXGD6i3QMJ5YkmmCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMU%2BouSRdkhl6yDNzbKtwDIGj%2B1f%2Flz4%2FmxEFC1DqobQKpod%2FtpCKOa9mBrQNGI2hhDblfZLf0CPn7YMgHuhqk5o60KyTNluXVaXvbHyK2YNNithImr0Y3%2FnpC%2BmzVogAYsNCZsPO89IfAK4Icv80HW%2F9RdJUMHMdbP79FLMiyGf9eRWeBkmO%2F5bIIWlvr23cfkkqt%2BS0yHqLeP2TSamnfxRPKGgq4c0arNnqF8u53lnyfto%2Flk6tHx%2BWItNLFii6FeIi2p6OlnV6zu1dR%2Fy5BayHTTGdjA5c3jF8ZNbaWNF97rMVjXv9%2FeMHULFu4h%2FSFrIu%2BSO1iLs21SPUk%2BaY880F9tzIrTvKIRTTJ%2BWArHfMwvPM%2BQVyQXSCa1nvThzj2ZAMC%2Bvgo27OQaqyZ2UQVnL70OjtuT5Slj0Hdxpco3RfNwqEXENnAWaN6u3Jrszed61hJtkhq1gf%2F4bAT3hpm2goX6eFFRErHa842Yy%2FXGYW1dZ4jioMmiupGH%2Ft7BhsST%2BcUCD06lQ2mO5MBbNM9KFCGhYdRNZqy4G0ZU31%2FyJC18Jyixz0iNr23NSIeKUm2nTqI3%2FNVbD36uPycYXb4cLYywzz8Z2vWaR6zw3dNI7ZdVkZyY1rFW1Q7zEjYTQ1%2Btw9p3p9x4yDhuIEwud23vQY6pgGIUd2A5%2BQKWMq4u8%2B9r9oUfwvENap36GhOgkuR5h37yeio7hOW1d0hI7Z4mdlFMIZ07IpNv8HHIY5zL9CVsh%2F8RRGr0LWG2g8FfoGKzCzO9pmX9quVbokOGjXNca4We8BU60a0aGwzXVeXowQoHnaHIK6CioRYFJgsfDmmO%2BCAWMrx85IHzqHmVe0vwkkNfEC6Mo666WFX8nVjYG%2FsEN07vrtxCzCC&X-Amz-Signature=96e8499cc59f18abc752d2b8b87944bc36cf34046825c8bcce0d1234971f333b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QQ5QZ47%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl%2FtJpBi3y8kJvxTfAGpIqQsSIvAfADjF%2FVQaOcCfwuwIgGDZ5T%2BHnrUH8QkLIHWgUNZVEKJ38h3GksXoHcLdZib0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFdGa11jXgMG5l81JCrcAzDcDntFfJDz9oNz5%2F1OolhuM9FN%2BX1fjJMLt3cUfvXisNqHo6P7Dyrnb5edCwSZcTjS5AkGpD7P1muO%2BstVLA085p2bS8CGoDaoaTIf1FFvCp6TOWZ9f35SbWxoQqB7xLNXDpNHrkZu43REBJSiRYdTMDQwaPTNyYdxw10hAN9fLFKYiE8I17gqVEYpj2n5TGGn6RuvPUNBSRxa2d1TXwgMHAe6XpNPZNkxMuXR3wEQT9ZfuB4onAjtjyKH8iqY0jKQ6i5ni7wVhD2RKpcDt5jLbFjsfJMNyr7v2E5VsvIPfxyRKYPkHlxOzqh06LHHmXabiyu%2FPxEJQqtr%2BY66A1FiIkPLNPILEJk%2BGASxuYHModXcgQqHYGK01hQYFHjpZPZBbBvciNYyCLDjQQ%2FYo%2B7XR75UYhWmgOFqc2POtt8CNu2KelzGFqzv8y2SdZKgCVh263rpsJVSzwaSiAAAZVT5EAgb%2Bclgk%2FBl3QVOcqQHcaGKhYSDEQamuNGwqEjEA7hMiGl9Wmcfwizo%2BEGzNKZZuoDEh93hJpn0RglvRNEfOiwQS%2FKVowpodm4sOoZAHWSbYT8zxyj0nomK0hQVJXWn4tNdStUoJ8UBCwAunmZqStooJumjDcfgVOCRMK7dt70GOqUBXSWKncOmVZEoKE7rJdysvtv907jbW96NLUNTXKZ2%2FjjHC8PeRzHEj%2FJBFeWRq4LPLe2rkDjV2HPFTxAwKmtDKsQjJKIwHg5QN0KwdwfwZG0Qvx%2BGfvJO0tMY8%2FVpqiM43SkC%2FH2fXadwjJUifAy%2B1avW9Ie8jOof0xzDXx8WKOGSY9W5YfMZBvhjSEW%2Byc8WToix3iRe%2BEE3V4piPhifSA7ZEMyz&X-Amz-Signature=26d8351715b652fc9c8c05780aefe2ed1116a8dfad8f06ddc1fe0b8d4ce5ae21&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
