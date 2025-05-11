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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HFGKGZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDz3vpHPQq3Cdi8GYW3CRljb4WunYkiRV4OdPLTtGFxAAiAKW8oxkJinTbAQiRl%2BWR%2FuJu8XyZihk9vqGG69idDQ%2BCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZCnSNUkMGeMQFtImKtwD%2FSDKrE3LrxdbZ7VJdgcgexaI4s1ga%2FYPI8BYgHwuMCCXVSfbZgUxGug0pY1o7tIls6qz1%2Bvq0KXGIOG4dbasIJ1Jr46eCpbwjcAxc7h0FjLpMo6Jafd4RkSqvJIWreGt6eZthoKoyEiFGzIMYUaytL0gpNyXpW3EHL1oMwDbP0hWLbpv5Z%2BopZRpBD%2FeBn%2FPa8U%2F8WQCRq80ziQ3fxf1YCSMGaDi%2FaSbtM59wGWPsNAfmViWX43JvG%2Fbce%2BQCLfsSv7vLz8BESnaLPsMOdcPb8C5ZKZSeptR4VJvfHWyynJelLGdPSkN%2FhAQBYhEAdkQXySBGaAYY%2BXX%2FcFeL7HlobN8gNnGPZ4rxsWg6e8zk3Kzksfl5TRmIBd8TuYSZb219ofw9DWWF2AzHl%2FRctra8vCjtvWTwXHn28sRG8iwmB86tHAFjY%2BNcFPXLYQe198tj2TOc4NQhrji8cj%2FxfSQGvxwTTRHGkee08ZLSCpd3HgSvne%2BHXlAlbfeHQ8UWPHC16Fu068njsVuwlerlosFwzAFoa13GbxVwQGkMuje2750kN8XGjk%2BOMM8enwqpKKquYgFtIZOEL22h9b3ISbrmkl%2BR3UmxQKHtq8P5YVWk3xkNivA9rlRCbMnHmAwisSAwQY6pgGmJdm7Ange6mcUYZl%2FJ%2BTiYBZPoQA9kegxj8Vih42G6bOc4qM%2FvUFGAhPdA5rLwzwgBeMohMWSl0fjch9yPZtUTrwLZlXhgTYdBw6JQ6NT5il13fSfjChkIUVWosFEoMBiD7faqPVpqPpeNnmKvti0ofe1C7lny9p0yh63Y%2FAMcP1pAC3rDtYBAJ6DoC47khPfBUb1xeBf%2FaH2nXcQ8VaSUufxtKyn&X-Amz-Signature=548bff19ff3aaab345d12ad1eb8201a5bb6667e61a10c8d1ad8822e328c4fdbf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HFGKGZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDz3vpHPQq3Cdi8GYW3CRljb4WunYkiRV4OdPLTtGFxAAiAKW8oxkJinTbAQiRl%2BWR%2FuJu8XyZihk9vqGG69idDQ%2BCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZCnSNUkMGeMQFtImKtwD%2FSDKrE3LrxdbZ7VJdgcgexaI4s1ga%2FYPI8BYgHwuMCCXVSfbZgUxGug0pY1o7tIls6qz1%2Bvq0KXGIOG4dbasIJ1Jr46eCpbwjcAxc7h0FjLpMo6Jafd4RkSqvJIWreGt6eZthoKoyEiFGzIMYUaytL0gpNyXpW3EHL1oMwDbP0hWLbpv5Z%2BopZRpBD%2FeBn%2FPa8U%2F8WQCRq80ziQ3fxf1YCSMGaDi%2FaSbtM59wGWPsNAfmViWX43JvG%2Fbce%2BQCLfsSv7vLz8BESnaLPsMOdcPb8C5ZKZSeptR4VJvfHWyynJelLGdPSkN%2FhAQBYhEAdkQXySBGaAYY%2BXX%2FcFeL7HlobN8gNnGPZ4rxsWg6e8zk3Kzksfl5TRmIBd8TuYSZb219ofw9DWWF2AzHl%2FRctra8vCjtvWTwXHn28sRG8iwmB86tHAFjY%2BNcFPXLYQe198tj2TOc4NQhrji8cj%2FxfSQGvxwTTRHGkee08ZLSCpd3HgSvne%2BHXlAlbfeHQ8UWPHC16Fu068njsVuwlerlosFwzAFoa13GbxVwQGkMuje2750kN8XGjk%2BOMM8enwqpKKquYgFtIZOEL22h9b3ISbrmkl%2BR3UmxQKHtq8P5YVWk3xkNivA9rlRCbMnHmAwisSAwQY6pgGmJdm7Ange6mcUYZl%2FJ%2BTiYBZPoQA9kegxj8Vih42G6bOc4qM%2FvUFGAhPdA5rLwzwgBeMohMWSl0fjch9yPZtUTrwLZlXhgTYdBw6JQ6NT5il13fSfjChkIUVWosFEoMBiD7faqPVpqPpeNnmKvti0ofe1C7lny9p0yh63Y%2FAMcP1pAC3rDtYBAJ6DoC47khPfBUb1xeBf%2FaH2nXcQ8VaSUufxtKyn&X-Amz-Signature=bbf880b31fcccda0af1d65f9537fe266df10e7728e0097ff289f54f9f8985f62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HFGKGZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDz3vpHPQq3Cdi8GYW3CRljb4WunYkiRV4OdPLTtGFxAAiAKW8oxkJinTbAQiRl%2BWR%2FuJu8XyZihk9vqGG69idDQ%2BCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZCnSNUkMGeMQFtImKtwD%2FSDKrE3LrxdbZ7VJdgcgexaI4s1ga%2FYPI8BYgHwuMCCXVSfbZgUxGug0pY1o7tIls6qz1%2Bvq0KXGIOG4dbasIJ1Jr46eCpbwjcAxc7h0FjLpMo6Jafd4RkSqvJIWreGt6eZthoKoyEiFGzIMYUaytL0gpNyXpW3EHL1oMwDbP0hWLbpv5Z%2BopZRpBD%2FeBn%2FPa8U%2F8WQCRq80ziQ3fxf1YCSMGaDi%2FaSbtM59wGWPsNAfmViWX43JvG%2Fbce%2BQCLfsSv7vLz8BESnaLPsMOdcPb8C5ZKZSeptR4VJvfHWyynJelLGdPSkN%2FhAQBYhEAdkQXySBGaAYY%2BXX%2FcFeL7HlobN8gNnGPZ4rxsWg6e8zk3Kzksfl5TRmIBd8TuYSZb219ofw9DWWF2AzHl%2FRctra8vCjtvWTwXHn28sRG8iwmB86tHAFjY%2BNcFPXLYQe198tj2TOc4NQhrji8cj%2FxfSQGvxwTTRHGkee08ZLSCpd3HgSvne%2BHXlAlbfeHQ8UWPHC16Fu068njsVuwlerlosFwzAFoa13GbxVwQGkMuje2750kN8XGjk%2BOMM8enwqpKKquYgFtIZOEL22h9b3ISbrmkl%2BR3UmxQKHtq8P5YVWk3xkNivA9rlRCbMnHmAwisSAwQY6pgGmJdm7Ange6mcUYZl%2FJ%2BTiYBZPoQA9kegxj8Vih42G6bOc4qM%2FvUFGAhPdA5rLwzwgBeMohMWSl0fjch9yPZtUTrwLZlXhgTYdBw6JQ6NT5il13fSfjChkIUVWosFEoMBiD7faqPVpqPpeNnmKvti0ofe1C7lny9p0yh63Y%2FAMcP1pAC3rDtYBAJ6DoC47khPfBUb1xeBf%2FaH2nXcQ8VaSUufxtKyn&X-Amz-Signature=0fbe349be1d94cafd3dcc9218c79404bb4da1c71153cc33d16d8be164bb2459d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3X4ZQS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDX5fbWP%2FBAEdyFdk9XfeytdDi%2FL8Rb3KY%2BvuAyj9gzPwIgJpN9NdfPFaamT92oGIY4IvBTScSyLBD6zZbAUUGN76MqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4QMmPIfFv2NU%2FnoCrcAzjGV4U0vdook1BIZArIKElhw4Lw%2FLUIbB5LzILhEtGpTs5Zqm6eeyvvG71M0opEGzi542VRTw%2FQi63fpDyHaNPX644Keo8AKxycTBA3XOdzNeR%2BbdE7Xrke6rBkhmRP%2FevA%2Brv0FjfrBhl%2FmS%2FXD1OVDD5YfIuxwVl4EQezmDfQdZRB1ylgIkZwC2lShmnnCXYgMq4eGxmJKpIZQhJMv3SeHd31k%2FzIBaf%2FNcrOXxZtoo1GF8e12svcI6rYPbgiurUG46uaq%2BzlUOVk9CvFPpAdhMwZFI5oWjzophQk4GbR8aiNSk9JSkHdMH%2F0SjvYU37rifrFXK%2Btq3gCB5G3myxr3MsqoeC7bAlJnAlWAhkeBEzl%2F%2BL1NI%2BmwsDR6urOviqwDO1XxgNrxv%2BOBzulh1SkA%2F0IxIQIJbZQ%2Bi4jO51v3dHis%2BD%2FdazUKoOptnpkTKcArrUzSswcEp5n0%2Bb33zr%2BeV2XFmrEtfsAWSBEsu7mAtLhD0uUxL0UhsDOOo%2FeCxKVYukYv8xy7BkYwMfF5PmrqwV5t0NYp4dCFhfx%2FF0E3ReMBRrDm3lAXjil8ru9clsx95xOLdXyUJQj2bI3oyDKVlbSTgYicgcr638g6j7RAG1wW%2BOmyd7a03APMNjDgMEGOqUBLMWA6XD2Az8diwDILdUYLPbaPAEF35xzIzY1HNbKD1vJ%2FXYUhhaQ4mWpc9grmzt6Min3TnUxNbVKnvwl06xigf5dHQSYHSBLawy1rkjkyz7xYQZVwonq6ExT8aHRcyUMbh%2F1yiAqCQ9%2BlWgHWydoh%2FjT8x1nNLJq5jOEJnDcFnZ6gYpCPybFQm5Gpdx7IVUiRMt68EIFffCIF7hUYlbXe52uIE5c&X-Amz-Signature=fb933518517eb6e0b86dbc787266fcebbf382070c1451ee5ca58f4ea39c8babe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWJ2SYU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCUSQrmWQxi57EJBAVAqJeXyXVdcvK0igTiel2%2BTcdN%2FwIgRpcHAvtLv6ybcn0oowX8PESi1ApmcxoMa0UXb05Dw%2F4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9VpD12HLUyrH2i1SrcA831YDkgLrSTzW5dOECLg0XNkxQe0hlB5x1Pdj1yg9DVX%2BXo%2BCqoZqW%2BPoYSdIfWR1P2dRgAJj3W0B%2FAzpM3rniNd%2BkK59EyL8rfTWJao%2BdUGVD73GZLUjEHLbl%2FNFdHZtE1sOKJQ9mtvrZ%2By%2Bp4lNJaepuhY4uf29souTs8%2BnaY4f9HuykS1Xc%2FeCk%2BNtLtsTXFlbv%2BEKRayMcGb2SEEIoahV8JgLls0%2BKpYUsJGwqZsxkbUzPh5xgYq4xk6X66W9s4I4txHhA6WgNhFIRb5VgPyROTYdOv93CRwCIg9xcw%2BqCNN3Q%2BXb%2B9PSz1ZWJTYMKGU%2F2Cb5j%2Fthi5knmUwTKTmv2nI9%2B9%2BORca%2BmL5WDWyIecxiULKdTqkKHYIlbQBL4StG3NxbfpHdTgvZHarD5cwsLAO4Z4ELcbpdY1jzFFs0TVbujxljELgSFEDv7irqpbpnATx0cy9iPN0Ga7X5FcpCBXYUlYP%2FMLCJJdneRvEXsIBACICqi8XA4ZP2VYD63cygS6rvTGnJAGRAbPmpYomvcBYiNh9rj6pcbO8VsHWuVT7MSkx1YIJu6rxpsLy%2FqHfqrmMdCb%2FekFex7A7vMJwTgdl0gd1k73EjPNAYsX8jGNaAu6Cc4b7M9yMPHDgMEGOqUBbV83AgSCiUEGC0sz6vUAj2%2FR44ARlOJr%2F061GqX9B7tI9e1Pd4NAfrmmVyd1vdT6GHP%2FsDjqZGuhpQeEuTTo3iFKhud2wfzm31xs8yYjO7VLD4rPkDFdJxip5pnVKuOkJFot80iZZPfTYW4m42l0MkBnKchWTKX7gWYPtzUU7u9bEcmU8ciLWO52%2BW9%2BV%2Fe0QuOWqEZBDuArpu3A1fMwNMv6h907&X-Amz-Signature=b6349c6e35975f2c044ca07d5b7c027f7e2b10ded24eb7aa9f40d422f1c6f35b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HFGKGZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDz3vpHPQq3Cdi8GYW3CRljb4WunYkiRV4OdPLTtGFxAAiAKW8oxkJinTbAQiRl%2BWR%2FuJu8XyZihk9vqGG69idDQ%2BCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZCnSNUkMGeMQFtImKtwD%2FSDKrE3LrxdbZ7VJdgcgexaI4s1ga%2FYPI8BYgHwuMCCXVSfbZgUxGug0pY1o7tIls6qz1%2Bvq0KXGIOG4dbasIJ1Jr46eCpbwjcAxc7h0FjLpMo6Jafd4RkSqvJIWreGt6eZthoKoyEiFGzIMYUaytL0gpNyXpW3EHL1oMwDbP0hWLbpv5Z%2BopZRpBD%2FeBn%2FPa8U%2F8WQCRq80ziQ3fxf1YCSMGaDi%2FaSbtM59wGWPsNAfmViWX43JvG%2Fbce%2BQCLfsSv7vLz8BESnaLPsMOdcPb8C5ZKZSeptR4VJvfHWyynJelLGdPSkN%2FhAQBYhEAdkQXySBGaAYY%2BXX%2FcFeL7HlobN8gNnGPZ4rxsWg6e8zk3Kzksfl5TRmIBd8TuYSZb219ofw9DWWF2AzHl%2FRctra8vCjtvWTwXHn28sRG8iwmB86tHAFjY%2BNcFPXLYQe198tj2TOc4NQhrji8cj%2FxfSQGvxwTTRHGkee08ZLSCpd3HgSvne%2BHXlAlbfeHQ8UWPHC16Fu068njsVuwlerlosFwzAFoa13GbxVwQGkMuje2750kN8XGjk%2BOMM8enwqpKKquYgFtIZOEL22h9b3ISbrmkl%2BR3UmxQKHtq8P5YVWk3xkNivA9rlRCbMnHmAwisSAwQY6pgGmJdm7Ange6mcUYZl%2FJ%2BTiYBZPoQA9kegxj8Vih42G6bOc4qM%2FvUFGAhPdA5rLwzwgBeMohMWSl0fjch9yPZtUTrwLZlXhgTYdBw6JQ6NT5il13fSfjChkIUVWosFEoMBiD7faqPVpqPpeNnmKvti0ofe1C7lny9p0yh63Y%2FAMcP1pAC3rDtYBAJ6DoC47khPfBUb1xeBf%2FaH2nXcQ8VaSUufxtKyn&X-Amz-Signature=f64bf57ed9b759ec888352719b5210b24854c44edd267ca59456af57cf94169f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
