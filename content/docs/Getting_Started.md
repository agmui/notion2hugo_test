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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SI23UXF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICs3uCJkaV1NyGT05fVRaPKnif5yhdaMpYRjSx4zOqpzAiEA4xwVsSr8o8ki8ouH9%2BGGcvR7AqDKjHQbt6QMETCi4OAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDM%2BxLhn0cK3CpzFqKyrcA4GRzmN4TkIrTs1QLeGMlVEygevEoAV5%2F11oZ3JIQrL%2BfYCDD5WBiZNCLE2KpJhl5W%2BHJnAQiaSSI088MTMvgX%2BMQr7u9%2BuH1YgpyGVOIcy2eR%2BqAqR0TkGr9wGELSnvzf8ToiVJI7zvDy4YiokaunSh57zFkjmxFKoIoeKmL8lWGZVpfDvividilhMpnq3y%2FagJUqI3PC68Mf1u8010tD6csduLFFh9K4ILBG8LEZog1xIAFUwBRdzV6HJBlO5mMub%2Fnd%2FJlekIyZhNuEQPbkTllgD7JA7tgakq1EE%2FmmGQkjWfCwlzDnwm7XPwDmbBAe6BgyUWCrdp53YPOPb0AXd5WqqqEiSMR3v%2BXivPa6QbiormGAuPxH%2B0GA9Butlwn5%2FeYKSqY5Zwu3wOV8i%2F4v4Cic4pVIr6EwNoC%2BVU6GqHE5dLOGUyBbgRFzJIMLPDs7XLThKrL4gpw9KZ9F7l5k5PToiT%2BvX0Fi%2B9pniZiOsQ65VWPdZjV9l%2FMPJf7sw%2BTShXcYlOTHfFmkM06ei8G%2Fx%2B0J2hBCy1oEMO%2FUz%2B6oxkjpsclz0VHLJfNsli%2BDA%2BK3Vgm9yQ28CqeeUeCs2N%2B9qgc%2FPNkaTJYiODbv0f%2BPjQO1pTyTWOIxHdf3ZGMIe%2BnsMGOqUBbgF6YfbMgXqcioZOv4AKes6W2ddnr8HRSafHCyVjtKi0YY%2Fouc4L21WI9C8v3hzoPhLOweGV%2F%2FGKDZRfck%2BJ6gWa9RxSTl9xAFe%2Be1vD5clwdlqSoZ4KNHKl%2F7n8WJK8AmXFtdX9VrXJguQx4ypnvx9UPnfuUiK47JH3M%2FDJXFXsPYZpbCoTtA%2FdpppGiGyMnwZQDTIjjNkK1dYrVnotDOkv5gkW&X-Amz-Signature=9d67cdaf47c434e3cf7924913933ebc80214c6b2f9fa95404587043b66ac8fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SI23UXF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICs3uCJkaV1NyGT05fVRaPKnif5yhdaMpYRjSx4zOqpzAiEA4xwVsSr8o8ki8ouH9%2BGGcvR7AqDKjHQbt6QMETCi4OAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDM%2BxLhn0cK3CpzFqKyrcA4GRzmN4TkIrTs1QLeGMlVEygevEoAV5%2F11oZ3JIQrL%2BfYCDD5WBiZNCLE2KpJhl5W%2BHJnAQiaSSI088MTMvgX%2BMQr7u9%2BuH1YgpyGVOIcy2eR%2BqAqR0TkGr9wGELSnvzf8ToiVJI7zvDy4YiokaunSh57zFkjmxFKoIoeKmL8lWGZVpfDvividilhMpnq3y%2FagJUqI3PC68Mf1u8010tD6csduLFFh9K4ILBG8LEZog1xIAFUwBRdzV6HJBlO5mMub%2Fnd%2FJlekIyZhNuEQPbkTllgD7JA7tgakq1EE%2FmmGQkjWfCwlzDnwm7XPwDmbBAe6BgyUWCrdp53YPOPb0AXd5WqqqEiSMR3v%2BXivPa6QbiormGAuPxH%2B0GA9Butlwn5%2FeYKSqY5Zwu3wOV8i%2F4v4Cic4pVIr6EwNoC%2BVU6GqHE5dLOGUyBbgRFzJIMLPDs7XLThKrL4gpw9KZ9F7l5k5PToiT%2BvX0Fi%2B9pniZiOsQ65VWPdZjV9l%2FMPJf7sw%2BTShXcYlOTHfFmkM06ei8G%2Fx%2B0J2hBCy1oEMO%2FUz%2B6oxkjpsclz0VHLJfNsli%2BDA%2BK3Vgm9yQ28CqeeUeCs2N%2B9qgc%2FPNkaTJYiODbv0f%2BPjQO1pTyTWOIxHdf3ZGMIe%2BnsMGOqUBbgF6YfbMgXqcioZOv4AKes6W2ddnr8HRSafHCyVjtKi0YY%2Fouc4L21WI9C8v3hzoPhLOweGV%2F%2FGKDZRfck%2BJ6gWa9RxSTl9xAFe%2Be1vD5clwdlqSoZ4KNHKl%2F7n8WJK8AmXFtdX9VrXJguQx4ypnvx9UPnfuUiK47JH3M%2FDJXFXsPYZpbCoTtA%2FdpppGiGyMnwZQDTIjjNkK1dYrVnotDOkv5gkW&X-Amz-Signature=39d76a30063c56869f529d6b0d187271fd2788abb9c0a8569ca6729bb1dbb0b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SI23UXF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICs3uCJkaV1NyGT05fVRaPKnif5yhdaMpYRjSx4zOqpzAiEA4xwVsSr8o8ki8ouH9%2BGGcvR7AqDKjHQbt6QMETCi4OAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDM%2BxLhn0cK3CpzFqKyrcA4GRzmN4TkIrTs1QLeGMlVEygevEoAV5%2F11oZ3JIQrL%2BfYCDD5WBiZNCLE2KpJhl5W%2BHJnAQiaSSI088MTMvgX%2BMQr7u9%2BuH1YgpyGVOIcy2eR%2BqAqR0TkGr9wGELSnvzf8ToiVJI7zvDy4YiokaunSh57zFkjmxFKoIoeKmL8lWGZVpfDvividilhMpnq3y%2FagJUqI3PC68Mf1u8010tD6csduLFFh9K4ILBG8LEZog1xIAFUwBRdzV6HJBlO5mMub%2Fnd%2FJlekIyZhNuEQPbkTllgD7JA7tgakq1EE%2FmmGQkjWfCwlzDnwm7XPwDmbBAe6BgyUWCrdp53YPOPb0AXd5WqqqEiSMR3v%2BXivPa6QbiormGAuPxH%2B0GA9Butlwn5%2FeYKSqY5Zwu3wOV8i%2F4v4Cic4pVIr6EwNoC%2BVU6GqHE5dLOGUyBbgRFzJIMLPDs7XLThKrL4gpw9KZ9F7l5k5PToiT%2BvX0Fi%2B9pniZiOsQ65VWPdZjV9l%2FMPJf7sw%2BTShXcYlOTHfFmkM06ei8G%2Fx%2B0J2hBCy1oEMO%2FUz%2B6oxkjpsclz0VHLJfNsli%2BDA%2BK3Vgm9yQ28CqeeUeCs2N%2B9qgc%2FPNkaTJYiODbv0f%2BPjQO1pTyTWOIxHdf3ZGMIe%2BnsMGOqUBbgF6YfbMgXqcioZOv4AKes6W2ddnr8HRSafHCyVjtKi0YY%2Fouc4L21WI9C8v3hzoPhLOweGV%2F%2FGKDZRfck%2BJ6gWa9RxSTl9xAFe%2Be1vD5clwdlqSoZ4KNHKl%2F7n8WJK8AmXFtdX9VrXJguQx4ypnvx9UPnfuUiK47JH3M%2FDJXFXsPYZpbCoTtA%2FdpppGiGyMnwZQDTIjjNkK1dYrVnotDOkv5gkW&X-Amz-Signature=9ccd05b5a137b6c0c754131abeb9abce39cfe8f0c3749fd3434a8ed58532e9b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTGV67E%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCcLEfW6pz4NGAovWGEY3EyFg0nF1BJ%2FDTXirtY%2BIXDCQIgBXGDOVO0rKQvtr5mwIKiLH0bRmLw7ZMBVLdKjbBFhrsq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLiQmidnbyckL653sSrcA4AQxCOXAPyV3hPFyNTobYgz7xpsG4cT4oxV4L46JXWzvdm4w3PKwbSeTQ4JHU9OeQF7ywrXc3FFjdTfVmBhWCs%2Fqzerlhdln7gYshljcHm72gHnqaBfFpWRzIJNGqntBFpJIZPuGYpvF0I3WDXwdO%2BYw%2Fm8YtkHMeG1QjsZbL%2FSQforDe9oKQJ3Wnrx5MbwZYtTvt75OlV0sUHV8lC0cuNLXHHI4NiBShP7tpD9lb1w0saX0n4ohfTykVP%2Bkw8pHPeRDYQJSJ9s9IcYxKDztMaTfO1GyayNRKLRcC9sPH9aMySkpHn5ZMO0nxDv6hN34vYGPB%2FXXew9pa%2FERDdgxqy%2FQ7LfGg9QH6CswGTyNtoERvM4q3KqIbJ0yI0nxUK9vWUyHx7Juq0Oh7AzzS1DAWvEn6T%2FGRqRWjAG07vN5GTWzyGe2HLY6rxqoSu1GLcbRfVGUARp6R5D1mkKaNwc4ZgQ4b%2FooL7jagFsdKDfnETIISW62Wg8hMv7BTp%2F1suH8Bd1BK8b6CORamgbaGVqjEunpnzu1QjHyIfjDeEi7fViYrgrbhzxA60waDpfM048DRccnB7XZMiORDhJKRcy3LbAqC8TiwhmocITAi8xRw7m5CvclWfoGdnHMUkKMPO9nsMGOqUBymItCWGj4sYgFRnViuxAQO3TdLm9YZlVKyCbpFkvrLpqYkc3Vtvf0Z4yILGZTv2v8ojOgPqiysO2S9Dc8D9NQUxyLERbjcMBaFpv4ds%2BWfyDOu6dU74L2On9FGzpsbeBxkwU50OXaRAWdEbrNHhhvTCcL1Vq7%2FM%2FznpJd6pCHpR5naiTpETMdYHDr4tUmtltGVF6bq3SipY%2FDTX61YCqHc9ZSwVJ&X-Amz-Signature=dfc2bdd013b7ce46230cdab28dce81b284cc6ea165fbfed7b8a3615da6ad4ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4LJECMZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIF2BOAwhzyBCXgh2ZPXkUaKv0%2B85UoqgBiDN%2FMhnvrbHAiBK%2FyjU8ECv19nJQkFgzFcoke7n%2FnjMiwxKMnuSyQGaDSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMNYrwtK87r%2BWOVys8KtwDqeYxITecN%2BISmRgiTl9NYmVExjx9%2BJsb0Ay6oiIl%2B9cnycwtYAq8zmnJp%2Fv1SxYaKFHSy4p6S3oqjpum0%2FUAbSWNV8Yv9GOskStmsOu%2FaX5YmIysXYtNVDOFPyvAMMir6z%2BS8pS1YUjxCurpjDiwIqiV9O4dBcX%2BvJIDhKhjdXLq3wcc8LUt9csg%2FQrAF8iAVV9Ik3lktvvFVlQBgzo3HTA1hP1ZEM4u5gaWrIevtaW%2BEJsq7DIUQ4Vihff%2Fok22nPcQ3b5Xe7wtwnv73hK20FWqKsCiILiUGFKE5S9CH3VvZGXh0RyXcWL9i6QQ4eu%2F%2BVHFcA5OzjzKfeTS5HBSf7rHvinYzV3Hl4SBbEWuAs1kc0VbmwvXQX2CP%2FKfSP%2FRuum%2Fg42x0SPpIjp%2FDNekotsmGnINPFA%2BU9aqntUMFnRTYhB%2BbOdMwCuiuax%2FUB%2FDLkzFaBypYUVJnMqcD8hamMJT3jvUEMXBKtDecr08%2F7MLQ7biGQIRaxfYlgHUQ9ezUEk3OZNf%2BywBSbe2WhiLvfFvvLLvqyBcopHjlkyWbY%2Fnh0OHvMnItakvj3Ltc0jSCsk4alBGJ%2BDtoPC4qMBi3w3w7IJMMN%2Bob0snq5uIaBRzk7QKHEygO9qkUOEw2r2ewwY6pgEAEvAAehyaGRWZvD1Y%2FnlPC4YWOZN62z4jNKKO9lU7igyiyY3r01vJsllhIaLmSrlgfjCDudlp1i3cglf8MBiuFzMIMjSoo7vWs7G%2BQhNclJjcMlgqSY7Kde0T2AoekFILrfGj3jC8bobjNvW6o5DLL47VYgNQAo7YSUVRNc5G8UtAQgCS7hPPtWCH%2BIyabkZaociWNK1hgTVMfdTI%2FCbP5aApjGL0&X-Amz-Signature=57a07e64e7f2f51adf55afdf15b5cd08136d2566e745a3cf2133f4d4811ddf76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SI23UXF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICs3uCJkaV1NyGT05fVRaPKnif5yhdaMpYRjSx4zOqpzAiEA4xwVsSr8o8ki8ouH9%2BGGcvR7AqDKjHQbt6QMETCi4OAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDM%2BxLhn0cK3CpzFqKyrcA4GRzmN4TkIrTs1QLeGMlVEygevEoAV5%2F11oZ3JIQrL%2BfYCDD5WBiZNCLE2KpJhl5W%2BHJnAQiaSSI088MTMvgX%2BMQr7u9%2BuH1YgpyGVOIcy2eR%2BqAqR0TkGr9wGELSnvzf8ToiVJI7zvDy4YiokaunSh57zFkjmxFKoIoeKmL8lWGZVpfDvividilhMpnq3y%2FagJUqI3PC68Mf1u8010tD6csduLFFh9K4ILBG8LEZog1xIAFUwBRdzV6HJBlO5mMub%2Fnd%2FJlekIyZhNuEQPbkTllgD7JA7tgakq1EE%2FmmGQkjWfCwlzDnwm7XPwDmbBAe6BgyUWCrdp53YPOPb0AXd5WqqqEiSMR3v%2BXivPa6QbiormGAuPxH%2B0GA9Butlwn5%2FeYKSqY5Zwu3wOV8i%2F4v4Cic4pVIr6EwNoC%2BVU6GqHE5dLOGUyBbgRFzJIMLPDs7XLThKrL4gpw9KZ9F7l5k5PToiT%2BvX0Fi%2B9pniZiOsQ65VWPdZjV9l%2FMPJf7sw%2BTShXcYlOTHfFmkM06ei8G%2Fx%2B0J2hBCy1oEMO%2FUz%2B6oxkjpsclz0VHLJfNsli%2BDA%2BK3Vgm9yQ28CqeeUeCs2N%2B9qgc%2FPNkaTJYiODbv0f%2BPjQO1pTyTWOIxHdf3ZGMIe%2BnsMGOqUBbgF6YfbMgXqcioZOv4AKes6W2ddnr8HRSafHCyVjtKi0YY%2Fouc4L21WI9C8v3hzoPhLOweGV%2F%2FGKDZRfck%2BJ6gWa9RxSTl9xAFe%2Be1vD5clwdlqSoZ4KNHKl%2F7n8WJK8AmXFtdX9VrXJguQx4ypnvx9UPnfuUiK47JH3M%2FDJXFXsPYZpbCoTtA%2FdpppGiGyMnwZQDTIjjNkK1dYrVnotDOkv5gkW&X-Amz-Signature=a0ee6567d45771f35085d536783e2c48c6ce3a2fc5676f13f416b9d6234dbf79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
