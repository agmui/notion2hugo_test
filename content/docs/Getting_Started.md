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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6RCTNE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCybCGKoTsELgT9FMB1qbMeVblKTQHmXfNmN3duv0GDDAIhAKkZz%2BAFFKTQiZ8aCDrbxw7Ebm7zrEppevyMAtSgU%2F2BKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwQIQ0nXHbApkL%2F6Yq3AMjzQeLsve1F%2F1TWh3FsF%2Fm6I9KtetBoAJhhUMGMnnCb1o%2B6A3GzVAOGyIVOfaI6yv13T6ytYnx4l0uOBF7cRBUMaNmF%2Bfc2OMzXa%2F8wYvNklNHPv9Fvj%2BYPHxCzzdkQKbHe1oVhUZvBvx5fq9CPeKSkIiOlw5MsFj392bxCbJHp03vVjkjPxkSqeMzrD1tdLuVfB9KzUe1CdabsnMVN%2FCD6YpFxKkb8kdkl3ko%2Fj0L2cuQu3n1QLQgQXrLuDerFOecXQJTIfVyp35PpuYRg9EaM9SvpBB4itYg8GJ%2BRSdJ%2FD2%2FpF4NbLUBc7D%2F7nDGwjCicLxbUjD5sFZgCMudGLe9xA8XqD3ObYgrMmWSQ6nTm3RlMAJ2HKmJCbnjBDO0T4ZscaUM7v3LYXl9AolCGMWz77lz75VvQxERv4gkSp4bW8%2BK7yKIDG%2BCwV02yBHa7MC2ImAGn3xk9X46bUcXfrTb4dfjWFbVstVh4Vo8GrThDMnYYq4M5LN0QU%2BoXDzkhck%2Bfbuil7QjTKc5t83IPJ8F0krGTIesflPPl8KWJdDGbSdccxj4u%2FIwF18EQhn8ujtfqzvKwscgG%2BrpAx7EEsJqe4GB7XLMVe03KwKzhX3MGiTlAK1wB%2BboDZvK1zD17%2FfABjqkAWstXxLINfU%2Bo4s7cDHkFD2Gcv2jzXXOXZLljwPIjUpYbm4DJTNxFknapSXud%2BV7UX59x00IfUGyCKGfZF1mlNRczPg2UIINKKJU5MNHauoJoivG0PzW6wUUXHY9zpG%2Ffixr%2BLoYYHDS1NG0QqyoPcH6ayVHTLcsEE1j61X%2FO6qTheJJU1xgpujYeg4BtmTwZuQhAyC4e9H9PO8Y6LkFk9z38mRW&X-Amz-Signature=bb83bf15372d2c8dd7d8addb7772529fe04404e00211d0802a0a173a2e83d3c9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6RCTNE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCybCGKoTsELgT9FMB1qbMeVblKTQHmXfNmN3duv0GDDAIhAKkZz%2BAFFKTQiZ8aCDrbxw7Ebm7zrEppevyMAtSgU%2F2BKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwQIQ0nXHbApkL%2F6Yq3AMjzQeLsve1F%2F1TWh3FsF%2Fm6I9KtetBoAJhhUMGMnnCb1o%2B6A3GzVAOGyIVOfaI6yv13T6ytYnx4l0uOBF7cRBUMaNmF%2Bfc2OMzXa%2F8wYvNklNHPv9Fvj%2BYPHxCzzdkQKbHe1oVhUZvBvx5fq9CPeKSkIiOlw5MsFj392bxCbJHp03vVjkjPxkSqeMzrD1tdLuVfB9KzUe1CdabsnMVN%2FCD6YpFxKkb8kdkl3ko%2Fj0L2cuQu3n1QLQgQXrLuDerFOecXQJTIfVyp35PpuYRg9EaM9SvpBB4itYg8GJ%2BRSdJ%2FD2%2FpF4NbLUBc7D%2F7nDGwjCicLxbUjD5sFZgCMudGLe9xA8XqD3ObYgrMmWSQ6nTm3RlMAJ2HKmJCbnjBDO0T4ZscaUM7v3LYXl9AolCGMWz77lz75VvQxERv4gkSp4bW8%2BK7yKIDG%2BCwV02yBHa7MC2ImAGn3xk9X46bUcXfrTb4dfjWFbVstVh4Vo8GrThDMnYYq4M5LN0QU%2BoXDzkhck%2Bfbuil7QjTKc5t83IPJ8F0krGTIesflPPl8KWJdDGbSdccxj4u%2FIwF18EQhn8ujtfqzvKwscgG%2BrpAx7EEsJqe4GB7XLMVe03KwKzhX3MGiTlAK1wB%2BboDZvK1zD17%2FfABjqkAWstXxLINfU%2Bo4s7cDHkFD2Gcv2jzXXOXZLljwPIjUpYbm4DJTNxFknapSXud%2BV7UX59x00IfUGyCKGfZF1mlNRczPg2UIINKKJU5MNHauoJoivG0PzW6wUUXHY9zpG%2Ffixr%2BLoYYHDS1NG0QqyoPcH6ayVHTLcsEE1j61X%2FO6qTheJJU1xgpujYeg4BtmTwZuQhAyC4e9H9PO8Y6LkFk9z38mRW&X-Amz-Signature=e684ae7d73fe74f2e8422ad74824cd2923da63e9cdbd7a6c5b395672360f2710&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6RCTNE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCybCGKoTsELgT9FMB1qbMeVblKTQHmXfNmN3duv0GDDAIhAKkZz%2BAFFKTQiZ8aCDrbxw7Ebm7zrEppevyMAtSgU%2F2BKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwQIQ0nXHbApkL%2F6Yq3AMjzQeLsve1F%2F1TWh3FsF%2Fm6I9KtetBoAJhhUMGMnnCb1o%2B6A3GzVAOGyIVOfaI6yv13T6ytYnx4l0uOBF7cRBUMaNmF%2Bfc2OMzXa%2F8wYvNklNHPv9Fvj%2BYPHxCzzdkQKbHe1oVhUZvBvx5fq9CPeKSkIiOlw5MsFj392bxCbJHp03vVjkjPxkSqeMzrD1tdLuVfB9KzUe1CdabsnMVN%2FCD6YpFxKkb8kdkl3ko%2Fj0L2cuQu3n1QLQgQXrLuDerFOecXQJTIfVyp35PpuYRg9EaM9SvpBB4itYg8GJ%2BRSdJ%2FD2%2FpF4NbLUBc7D%2F7nDGwjCicLxbUjD5sFZgCMudGLe9xA8XqD3ObYgrMmWSQ6nTm3RlMAJ2HKmJCbnjBDO0T4ZscaUM7v3LYXl9AolCGMWz77lz75VvQxERv4gkSp4bW8%2BK7yKIDG%2BCwV02yBHa7MC2ImAGn3xk9X46bUcXfrTb4dfjWFbVstVh4Vo8GrThDMnYYq4M5LN0QU%2BoXDzkhck%2Bfbuil7QjTKc5t83IPJ8F0krGTIesflPPl8KWJdDGbSdccxj4u%2FIwF18EQhn8ujtfqzvKwscgG%2BrpAx7EEsJqe4GB7XLMVe03KwKzhX3MGiTlAK1wB%2BboDZvK1zD17%2FfABjqkAWstXxLINfU%2Bo4s7cDHkFD2Gcv2jzXXOXZLljwPIjUpYbm4DJTNxFknapSXud%2BV7UX59x00IfUGyCKGfZF1mlNRczPg2UIINKKJU5MNHauoJoivG0PzW6wUUXHY9zpG%2Ffixr%2BLoYYHDS1NG0QqyoPcH6ayVHTLcsEE1j61X%2FO6qTheJJU1xgpujYeg4BtmTwZuQhAyC4e9H9PO8Y6LkFk9z38mRW&X-Amz-Signature=84c38face3bdf29f95118291f1094c3e88814aa15c56352ddc4a93994e9e84fa&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKM4HGY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICG1r3TwfTzTDOV8CVwnkK2wwMdFg6SzQcbFlgtRif9lAiEA6yKLHmPN%2Bin7PX2dIFptbl%2Fk%2BnyInGUhzo5L58M0s8AqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFh3qmvVO0zRNLSyECrcAx461Pa6RsrkMXkXvEszuWgHTOK0gJ8fGfc8hmUt2A%2B8JTnDlEbpItC0JEn7onXJiYP%2B64r7xkG6lbYzMLWvJejBi%2BbQ%2F2z0fltqrtU1CJbzpvr9hSHF1U9zwrYdlury8stDGMqNevYDryDarKNKYt1LHG5Z%2BU1QPPJAVPlUM4O%2FnRI6EchVmGb0vtYY7Us47m6ZvgpnM2hFMrD7%2BSvGpgOekdDgc4KGNjJ9JvGhJ6K9CcjbqEguAg5BNfVh9yF9lWCOIRhWwoRXV4oiaJ1v7XidtdfLLVzsg49ZvpVm%2Bk4u1x1deoqju2yxoHKZHqr8zcuFRVkSaqdTSj36UjM28IpsuDpXln1BiTAhNSMA5pVkRp6u6i3SMNCR5%2BAuz7Qo4WFnGctpBWArWQ7NaBwYoifiF0oysr8ix%2Fr7s6uhsc7t6rKfFrjH5DvRUJ3y4h3BSIuh%2F78U5GIYNAC7cRr4XBBaQfAFC%2Bs%2FkUDz0bFPvTB1VY69XR2h78diJBqktsT7ULLUiJHB9ypYXiGRH9prZHDIvBT5hys0BxaDo5RWxEDKKx3VFj5qOkOk3ZRjPyKHR1cb1KqU6TbVtXIwXkH2mm9v%2BCPZUO5D%2F329LqVdxs2JdQdx%2BsP5VDP7gcrXMOL598AGOqUBZUwcit54ecOMjEjKJa1xwVv%2BBoMPCExEwmLKGeAZSBdGjnSShjFhcngi%2F6WEsJh9fXwb5YUUawnAchU0b7F6b4YxOVcOEFWjG0nFNRRewGxQL3qqC%2FCdqSxOWYtn%2Fph8fJpBws7V1%2FJhi1%2FHyvnNtOi9sfgM%2B%2B%2BGrQRW8Dr5RZCiBWxQirL8%2Faz7N%2F1CZc5TDSzDzGMTMvIfQrF5l0poGkAOzxO9&X-Amz-Signature=176a965dcd8d96fc3857edd07120ecbb9344ca1d9df43c240b30936489e0a2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRQPZJF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCePLqz8NQCNICgV4NrcJdRIzscrsWrCjQptP4%2BSpwxRAIhALW4nspWy564s4vWVW2HUCBY%2BareD7eHnUFopiwlGqdXKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAVjHAjn9%2F%2Bx1sBeEq3ANFwxr%2F3NXib0Yy8cF65BWXZ0MNixL60rIaBFkiisTAumXiA8Utr59eJrX88xQUcU4E5H2f7ihGQyDjhm9ZnFd4ocKzvhOk8DqnALH%2BzbPmx5I5X9bnCBiBjtKGXgJZZvgVprK5MlKo7jVVAzJ%2BYniDudHAwN9CtlZzuH3etdjEns2GXBjtllVuDnbmer4fvirp7DTFVFwBiSd0akTKd4WQysRgAbfTLbbK3Sr4seI9mX%2F2d68nXnj17UAOqwmcT2opZk7BkcgW6DbEX2kuCZ38cVX9cjLTHKQyrKzTqs5M3JoSSU3B7IYt01EPN9x7wP03D5oqCmRRwWfyC3NPqI2ebAhMRtYqjGV6Vc2%2F99l1hGFobMIE4z%2Bb7brD4UnUVzkx7%2Bw3fTSUj1qlKA3Vj1EAbwigCl%2B%2BPpTQWTRUIoz1qLQIuJ7keWG2BDle0UzjG15zS7TEwqjSQT4sFvZZ15xymvqcbYuAAozeozyteH%2Bd0RMf60GwoZV93MdTBevHk4gaTrpnnSZVUvrWd%2BnOPZJmT4E22xPYUGRrhJuELsarXL9o1I9zOzyayTQGwgV65Q%2FqPQPKKJxRzhw20zWBhCZa6hzKfFBc9097cY%2FBZa4J87mwZnGbBnarqq6r9TCo7%2FfABjqkAVOr5aJKrMdxTZ%2Fzboh6OALF7l86INfZRUdmFyoHJcDNIVYOYwbF0T6kPMEFG%2BgYQMuiLo2AZT%2FJLtoKLN3XFbHVEhH3GAcFOwmtaBRZWklR7otHeP4lc9EW39%2B86XmxInnQigRoyjjmqH3RqcX1yxNgzR9E3gzLFF0RYYRDtVgDTo60P6kYhSUvfp1x11LJ6kvwqPhfWuwIxwf8Y5SwBTG4KYuZ&X-Amz-Signature=957814d229e14ac9cc649615d45ba1a0a68a45c89b0cad12c79dc3c957978af2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6RCTNE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCybCGKoTsELgT9FMB1qbMeVblKTQHmXfNmN3duv0GDDAIhAKkZz%2BAFFKTQiZ8aCDrbxw7Ebm7zrEppevyMAtSgU%2F2BKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwQIQ0nXHbApkL%2F6Yq3AMjzQeLsve1F%2F1TWh3FsF%2Fm6I9KtetBoAJhhUMGMnnCb1o%2B6A3GzVAOGyIVOfaI6yv13T6ytYnx4l0uOBF7cRBUMaNmF%2Bfc2OMzXa%2F8wYvNklNHPv9Fvj%2BYPHxCzzdkQKbHe1oVhUZvBvx5fq9CPeKSkIiOlw5MsFj392bxCbJHp03vVjkjPxkSqeMzrD1tdLuVfB9KzUe1CdabsnMVN%2FCD6YpFxKkb8kdkl3ko%2Fj0L2cuQu3n1QLQgQXrLuDerFOecXQJTIfVyp35PpuYRg9EaM9SvpBB4itYg8GJ%2BRSdJ%2FD2%2FpF4NbLUBc7D%2F7nDGwjCicLxbUjD5sFZgCMudGLe9xA8XqD3ObYgrMmWSQ6nTm3RlMAJ2HKmJCbnjBDO0T4ZscaUM7v3LYXl9AolCGMWz77lz75VvQxERv4gkSp4bW8%2BK7yKIDG%2BCwV02yBHa7MC2ImAGn3xk9X46bUcXfrTb4dfjWFbVstVh4Vo8GrThDMnYYq4M5LN0QU%2BoXDzkhck%2Bfbuil7QjTKc5t83IPJ8F0krGTIesflPPl8KWJdDGbSdccxj4u%2FIwF18EQhn8ujtfqzvKwscgG%2BrpAx7EEsJqe4GB7XLMVe03KwKzhX3MGiTlAK1wB%2BboDZvK1zD17%2FfABjqkAWstXxLINfU%2Bo4s7cDHkFD2Gcv2jzXXOXZLljwPIjUpYbm4DJTNxFknapSXud%2BV7UX59x00IfUGyCKGfZF1mlNRczPg2UIINKKJU5MNHauoJoivG0PzW6wUUXHY9zpG%2Ffixr%2BLoYYHDS1NG0QqyoPcH6ayVHTLcsEE1j61X%2FO6qTheJJU1xgpujYeg4BtmTwZuQhAyC4e9H9PO8Y6LkFk9z38mRW&X-Amz-Signature=36b16fc339faf97b47519690145113809bb8ca86ff918e901fee0e4b24a1b950&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
