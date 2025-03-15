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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXCPWHW3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzdph8nki%2FXckjX9%2Byxew42sCuqaWkY86AdejONa2fAQIgFNqJUBAfcDc9WuG1murQTGrJRBD1w9zKRb4313PUfe4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGJG7SyoLglZ%2BeQPCrcA3uViLzazOW%2B6nR%2B9smjj0Uwd%2F06GQZMgNRtnSaL39JmDnHoTSJjcXC75nKPLfsq6MNmJXV5j8dFupbtM%2F6Jo%2BhlXDZ6tu8cHQrUYRaGpSxjZy3%2FSQTsGqEIOifM9kwdi3DBcSkis4xq1wfZvaLfNq07%2BFu8SBdsUYc0zrG%2FBeAALm9Q%2B6jQkWyjUDhA8%2F5kVtxlRu9pB2bBoIeFVinjRBtSxKAMhAgCNQd6oQh%2BSo2GkBdrjFakjyHGCL4dPIGk0zbWNMAZo%2Bo5DkSJ9fJiNOCau5LBNBRdAhUnWZV%2Fb%2FjLfHojm16Pzl47ykzQIzTzwcttuEKxHHpm943N8uYz9S%2FKYZtfFZQFjoj7y8jkTe8wvUiD9gaUTecXvB%2BfuYingur61Xxdw7Lb4VtyseEV%2B02ZKt1HrT4LZMATK6o%2Bk7cxFAbAjYGD1MPhRZoNmZGFWA3metv7pv%2B%2BRlei68WX%2FdXVuiFjwxbcokaW3DDV6einoBTc2tLwix33YwFPXWIoBgU8ka6eoyBXZn%2Bvu2pYzSsvOE1da55USyJ99cUGyzQ0bV0DdWIkWAbrR12nQRPpZ1lgBJlumX7zM06upMISo7cnFIPuhYLwGB5WPLfEoK4ejNVHMGTm8ywtElnxMJTL074GOqUB%2B8rSNBqCb9GSq6ZTOCe9ZSXadnxgjVm7vUyWqQys5a9ArFPxx1XMGz819Lyn0I1Q79MJcBxfeU3x%2F5TlxJaKovhWesi6Rv2PDzn60b2OByNn1j9Ex2dO%2B9eLeYsO5bDhbmjt9tHqFBQnHmNf0x5RsPpnPO6lnyWflQXp9ldjJtX2XA%2Blb857ilFlBe2xjatYpCBu%2FUqOP9cbdNE9mXGBtY8mqlvU&X-Amz-Signature=790d13c39b417bb4fa686020d301c060ee09d5938efab43fbfbd3eacd829aa92&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXCPWHW3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzdph8nki%2FXckjX9%2Byxew42sCuqaWkY86AdejONa2fAQIgFNqJUBAfcDc9WuG1murQTGrJRBD1w9zKRb4313PUfe4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGJG7SyoLglZ%2BeQPCrcA3uViLzazOW%2B6nR%2B9smjj0Uwd%2F06GQZMgNRtnSaL39JmDnHoTSJjcXC75nKPLfsq6MNmJXV5j8dFupbtM%2F6Jo%2BhlXDZ6tu8cHQrUYRaGpSxjZy3%2FSQTsGqEIOifM9kwdi3DBcSkis4xq1wfZvaLfNq07%2BFu8SBdsUYc0zrG%2FBeAALm9Q%2B6jQkWyjUDhA8%2F5kVtxlRu9pB2bBoIeFVinjRBtSxKAMhAgCNQd6oQh%2BSo2GkBdrjFakjyHGCL4dPIGk0zbWNMAZo%2Bo5DkSJ9fJiNOCau5LBNBRdAhUnWZV%2Fb%2FjLfHojm16Pzl47ykzQIzTzwcttuEKxHHpm943N8uYz9S%2FKYZtfFZQFjoj7y8jkTe8wvUiD9gaUTecXvB%2BfuYingur61Xxdw7Lb4VtyseEV%2B02ZKt1HrT4LZMATK6o%2Bk7cxFAbAjYGD1MPhRZoNmZGFWA3metv7pv%2B%2BRlei68WX%2FdXVuiFjwxbcokaW3DDV6einoBTc2tLwix33YwFPXWIoBgU8ka6eoyBXZn%2Bvu2pYzSsvOE1da55USyJ99cUGyzQ0bV0DdWIkWAbrR12nQRPpZ1lgBJlumX7zM06upMISo7cnFIPuhYLwGB5WPLfEoK4ejNVHMGTm8ywtElnxMJTL074GOqUB%2B8rSNBqCb9GSq6ZTOCe9ZSXadnxgjVm7vUyWqQys5a9ArFPxx1XMGz819Lyn0I1Q79MJcBxfeU3x%2F5TlxJaKovhWesi6Rv2PDzn60b2OByNn1j9Ex2dO%2B9eLeYsO5bDhbmjt9tHqFBQnHmNf0x5RsPpnPO6lnyWflQXp9ldjJtX2XA%2Blb857ilFlBe2xjatYpCBu%2FUqOP9cbdNE9mXGBtY8mqlvU&X-Amz-Signature=ab809514481fb6a0d0a09079286f2eedc968977dc990fbd7455a17ae8241ef03&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIGFXOWX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCntRhGjWkyBHzp%2FqdkCvVy6yaP3rpTgZh3ezUu7UbyiQIgJrn0019uvvg3nJT%2F0nQGxEEhJgo5vOtbtsYPJ1qou04qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOLeghhMq2ZzH4svCrcAzI7jXvQKWAHOosIXTTAsE3W%2B2ZDIEMw%2Fk5jGP1vKI26%2FLL8XymM%2FX5bePBVw8t7%2F0Z6U6qA%2FBdXr%2FA%2FZaycOQPEcBTdi%2BMYScJV5bpOi1ikgJORtpMm%2BNR77DIrqyanOEPUdwQlDXbFUUj20Zxbopssu%2Fh6F4R9cnz2KSeMtL%2BiwJn0LSxGjSbJWQZ0OkopKMR01UDAmDlBGX3q9NaARhhe%2BH7C4y2ZpDamV4rMso5v61JJc41uvvh2cbt9MNwJ65coEk6qHan3RNDR56b050QuFvfzMSXg%2BWm66RCT5WbonEMuuagdtQ1yBxrv4Rf0%2FJN6c7%2BCEfAXPgkrAO1Glrn2Tqi9CnX1GJ%2BTGg58ExemZ1X9KgExKvVQLbvn2LNNRx5RpX91CoxnhNsNwxTKn8RGO%2BygqUUwkjq58wsbV9Mw8NbYUJMYiKIfZ79W1l3BIJfWI1w4%2BKmZrXb5wgyJEXhFrPmOWNoB8wft4AEDv4UG44XuNG72YYiVo8bJIcI7z6xGLHh27%2B%2BngHDkE4a4rpUfunbWxWPVd8O2rYcUq2dhriLAxSGbdYNaRxiIyKRxJlo2yXZqaE8qLuJTc1cwF6QHBNZ5R%2B5cFhEPweiUusoA5O5Eyb%2B1PBVF1CT8MJ7L074GOqUBfH%2BSO1DFWcCg7mhn8X4zRg4Y8rBZkCBojSdeHzHYapPpE5FXgwnTETr93GKLTVtzgQmiMXl81%2BBrg3cO2PF13B3UkzKjK4dEeLZF9Pc8JvY8HMpB2C7LNSBNL%2BHPqTB%2BS%2BEpD0ijGpFLYNGi4KGogokGzX%2FK%2BR85P3NBpoIVUDBCT6GVPwiPKq62a6FQ8TrIGPUAKlgxQKplVI77ftUnYYlMECfO&X-Amz-Signature=97def6cae59dc285484ae286ba13329f767ffb606f7f0f8990c25d23d641436c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K72FMCS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxW1AlFgK8HR5Tg10lzizhfMFs9ufi1Ig28DqD74bdrQIhAIhOnzGkcG1kFpjDfqMQRIuUmTslbGR5dqI9ij%2BcdZINKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvSiTpEzKsLNqd2yUq3AMlh1iauzPdOjnTO%2FM8YnxgDrcyFMU3Kkohmzyv4Rw2BgpOlggNsEmH9LNMMBwYY2A2EFSOsX8j0EKBY68Q%2F8gzImiP70tXz0GSZlJWxRFHFKQGtPgKHk7bKXVTvvyks3nPI1PVG%2FyqMBLSKFNZ8qKlbOAp4JxaWwUigFxjcfFgoCz2sk%2F%2By280ZZuQVqCt9SQeaTyLxNaK5CIl9dUr2hNDM9hg61XU6zyB%2B9tb%2FGMW3BkjNxawnacsErJSyhx7jwEt8tC8knEFkaco1dWW2xt%2BK5NaiXa%2FkAvju5lwXWL%2BtgpuUYGAI6RkXIk3ZdP5pwvGJaIixt4nMhQEP%2B4JPPxzHwrCXCZQKTzqAvjPqdAGF3CDe1QE1RzdBWswWFlA1%2Fs8pRaRMSBkgF9VupFQBY4XoVglQKpXM3dMq76uSi8%2FtqxaCyqInBKt5cqCtPUKTjSfnkuTgWRdYUPrUN2ilJkUMLJJ%2BG4%2BlQyiDdZwDI7ucLMstPnaaBcspBq7y4rdN6REXVLkjRj1oVVCfsfKumcjqwiriqDSyMfMTQJpIxZMByTa9qoUXgn0NXh8EUCAhJ3RDorxP4lnoITm5rBskaS%2FGJmJOElN3NYvqnkIcuGTGvKobkGQYAkrKcDPMzCqy9O%2BBjqkAeer68FRjuS%2BYg2HeDSqNsf%2BNhwgcCyZiAHhHp2X204oeGA7AWKBT%2BQ0WfQTFkcOaPA%2Fgy655BJ9OXLQAMaI49saTaucMbiVf8EA6GibGhw6P6GvoK2tqQ3MyQB7zdH%2BBB%2FuvBR3aOzDquv1gImFdY%2BVy0JdF%2FHtbKRKctPXYo7I7KWqMxh7iiL78n1y%2Fsnj%2BUGFn9xOVVm0JAmKaSM6gPxIGIFM&X-Amz-Signature=7538651a1c6e561fbbf429cdab09e76f8f09578359da18842f920bb92572e699&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXCPWHW3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzdph8nki%2FXckjX9%2Byxew42sCuqaWkY86AdejONa2fAQIgFNqJUBAfcDc9WuG1murQTGrJRBD1w9zKRb4313PUfe4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGJG7SyoLglZ%2BeQPCrcA3uViLzazOW%2B6nR%2B9smjj0Uwd%2F06GQZMgNRtnSaL39JmDnHoTSJjcXC75nKPLfsq6MNmJXV5j8dFupbtM%2F6Jo%2BhlXDZ6tu8cHQrUYRaGpSxjZy3%2FSQTsGqEIOifM9kwdi3DBcSkis4xq1wfZvaLfNq07%2BFu8SBdsUYc0zrG%2FBeAALm9Q%2B6jQkWyjUDhA8%2F5kVtxlRu9pB2bBoIeFVinjRBtSxKAMhAgCNQd6oQh%2BSo2GkBdrjFakjyHGCL4dPIGk0zbWNMAZo%2Bo5DkSJ9fJiNOCau5LBNBRdAhUnWZV%2Fb%2FjLfHojm16Pzl47ykzQIzTzwcttuEKxHHpm943N8uYz9S%2FKYZtfFZQFjoj7y8jkTe8wvUiD9gaUTecXvB%2BfuYingur61Xxdw7Lb4VtyseEV%2B02ZKt1HrT4LZMATK6o%2Bk7cxFAbAjYGD1MPhRZoNmZGFWA3metv7pv%2B%2BRlei68WX%2FdXVuiFjwxbcokaW3DDV6einoBTc2tLwix33YwFPXWIoBgU8ka6eoyBXZn%2Bvu2pYzSsvOE1da55USyJ99cUGyzQ0bV0DdWIkWAbrR12nQRPpZ1lgBJlumX7zM06upMISo7cnFIPuhYLwGB5WPLfEoK4ejNVHMGTm8ywtElnxMJTL074GOqUB%2B8rSNBqCb9GSq6ZTOCe9ZSXadnxgjVm7vUyWqQys5a9ArFPxx1XMGz819Lyn0I1Q79MJcBxfeU3x%2F5TlxJaKovhWesi6Rv2PDzn60b2OByNn1j9Ex2dO%2B9eLeYsO5bDhbmjt9tHqFBQnHmNf0x5RsPpnPO6lnyWflQXp9ldjJtX2XA%2Blb857ilFlBe2xjatYpCBu%2FUqOP9cbdNE9mXGBtY8mqlvU&X-Amz-Signature=6bad91326861f5385d5d521b3677985baedeaa96a22c1d7e7393bdb1906374bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
