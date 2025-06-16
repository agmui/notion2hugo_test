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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHLLREBX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIEdBCefZ6OFyLkZGu6dqjixsDlPWd5kebo1oE%2Frep42VAiAYv0s4EZyV7lXF1Je3zwgeoX5xaWeEnopMymM0dk0xPSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMoM7Qwqc4MeiuZIEoKtwDQY07CbaJmyujWWYtBViiqoQxLI%2BB4tX0YsWJVLbcEAip6oqUKkOFifKV3Jt%2Bv1eTGSqB42ZapR38y7QYxrJU5OirqCYCUuAIuukSPsiEFDusqbPzhpOAMSw2xHXTonuwsM9YN8Iw8BgCokPZ0YEfIO14Hr7Ad16DCt78UMusuaahXNW7RQWYrWkUGuuKzYvxwbZAowrh6Eaf5p3SWiTf7GjJmrfGeww7RC8jZg0BIZKvGvhxuN%2F0vlxiKmDoYf5QHBdYOTHWt6mKiqdVKA8paGm%2BnUdeX0KZb9IUPR4zOl%2BA9ASCkJxLCpJC0aYbIPKtj6qlQfG%2BLPyfeIuuvMcEY%2B%2B4djeqHnFkLXX0UmxOM2thY3H%2BubhTK7UqbybrU%2FmCNfj%2FDKz%2BBKMJD1ntHgDhUDedWc3epRTioblD9Px0ekaWoJoqLJVT12VxZ8R7n0DMv23TSjkaTTIlNWglL%2Badt%2BU%2FQEMBs2m8nn7rt5Rx7LdvHFHVJbMwVAKrIJ%2F2oIdSwgmrnNSUUxo19xfokK9iJKD0qu25cCq5LOgxFWWNJiX8eAAW0R6EIwRh%2FUijSE5itb8Nai2pUySPYsX2Kjyyp%2Bfmiq%2Fz%2FLBha82xuUK83jpD3lS7dVcA4rbWrKAwurO%2FwgY6pgFUyYCe4SX%2BWgrFRBrGDTZ0QtOtTtOZDkfP2f5cWbqPRh5QoSdYom2hl6jSeZ3ja7Drd6ErYa8IWYCUYb%2FOJgRNKDGmTESDgEiYvtHdnPgFyxRkL5lmK0NULXgdCuwfuwnJkPA5CgnO%2F%2FiJunmj0cI%2BofIqvHNKAXhOjNpS7hSSiHI%2FLETk6AtsIDLCUDvnkBnO%2F9uIsdFG0rs3xdH%2FGa2xy52WGqMo&X-Amz-Signature=a189b495b4db3b06e626caa9e331beb8e7c367d6db07ac0e9cfa1eb07d3de558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHLLREBX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIEdBCefZ6OFyLkZGu6dqjixsDlPWd5kebo1oE%2Frep42VAiAYv0s4EZyV7lXF1Je3zwgeoX5xaWeEnopMymM0dk0xPSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMoM7Qwqc4MeiuZIEoKtwDQY07CbaJmyujWWYtBViiqoQxLI%2BB4tX0YsWJVLbcEAip6oqUKkOFifKV3Jt%2Bv1eTGSqB42ZapR38y7QYxrJU5OirqCYCUuAIuukSPsiEFDusqbPzhpOAMSw2xHXTonuwsM9YN8Iw8BgCokPZ0YEfIO14Hr7Ad16DCt78UMusuaahXNW7RQWYrWkUGuuKzYvxwbZAowrh6Eaf5p3SWiTf7GjJmrfGeww7RC8jZg0BIZKvGvhxuN%2F0vlxiKmDoYf5QHBdYOTHWt6mKiqdVKA8paGm%2BnUdeX0KZb9IUPR4zOl%2BA9ASCkJxLCpJC0aYbIPKtj6qlQfG%2BLPyfeIuuvMcEY%2B%2B4djeqHnFkLXX0UmxOM2thY3H%2BubhTK7UqbybrU%2FmCNfj%2FDKz%2BBKMJD1ntHgDhUDedWc3epRTioblD9Px0ekaWoJoqLJVT12VxZ8R7n0DMv23TSjkaTTIlNWglL%2Badt%2BU%2FQEMBs2m8nn7rt5Rx7LdvHFHVJbMwVAKrIJ%2F2oIdSwgmrnNSUUxo19xfokK9iJKD0qu25cCq5LOgxFWWNJiX8eAAW0R6EIwRh%2FUijSE5itb8Nai2pUySPYsX2Kjyyp%2Bfmiq%2Fz%2FLBha82xuUK83jpD3lS7dVcA4rbWrKAwurO%2FwgY6pgFUyYCe4SX%2BWgrFRBrGDTZ0QtOtTtOZDkfP2f5cWbqPRh5QoSdYom2hl6jSeZ3ja7Drd6ErYa8IWYCUYb%2FOJgRNKDGmTESDgEiYvtHdnPgFyxRkL5lmK0NULXgdCuwfuwnJkPA5CgnO%2F%2FiJunmj0cI%2BofIqvHNKAXhOjNpS7hSSiHI%2FLETk6AtsIDLCUDvnkBnO%2F9uIsdFG0rs3xdH%2FGa2xy52WGqMo&X-Amz-Signature=87d35ec7f9d6f57e8d25fd238cbbf9a7556eb60412b90677e93ee6f4d6aed653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHLLREBX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIEdBCefZ6OFyLkZGu6dqjixsDlPWd5kebo1oE%2Frep42VAiAYv0s4EZyV7lXF1Je3zwgeoX5xaWeEnopMymM0dk0xPSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMoM7Qwqc4MeiuZIEoKtwDQY07CbaJmyujWWYtBViiqoQxLI%2BB4tX0YsWJVLbcEAip6oqUKkOFifKV3Jt%2Bv1eTGSqB42ZapR38y7QYxrJU5OirqCYCUuAIuukSPsiEFDusqbPzhpOAMSw2xHXTonuwsM9YN8Iw8BgCokPZ0YEfIO14Hr7Ad16DCt78UMusuaahXNW7RQWYrWkUGuuKzYvxwbZAowrh6Eaf5p3SWiTf7GjJmrfGeww7RC8jZg0BIZKvGvhxuN%2F0vlxiKmDoYf5QHBdYOTHWt6mKiqdVKA8paGm%2BnUdeX0KZb9IUPR4zOl%2BA9ASCkJxLCpJC0aYbIPKtj6qlQfG%2BLPyfeIuuvMcEY%2B%2B4djeqHnFkLXX0UmxOM2thY3H%2BubhTK7UqbybrU%2FmCNfj%2FDKz%2BBKMJD1ntHgDhUDedWc3epRTioblD9Px0ekaWoJoqLJVT12VxZ8R7n0DMv23TSjkaTTIlNWglL%2Badt%2BU%2FQEMBs2m8nn7rt5Rx7LdvHFHVJbMwVAKrIJ%2F2oIdSwgmrnNSUUxo19xfokK9iJKD0qu25cCq5LOgxFWWNJiX8eAAW0R6EIwRh%2FUijSE5itb8Nai2pUySPYsX2Kjyyp%2Bfmiq%2Fz%2FLBha82xuUK83jpD3lS7dVcA4rbWrKAwurO%2FwgY6pgFUyYCe4SX%2BWgrFRBrGDTZ0QtOtTtOZDkfP2f5cWbqPRh5QoSdYom2hl6jSeZ3ja7Drd6ErYa8IWYCUYb%2FOJgRNKDGmTESDgEiYvtHdnPgFyxRkL5lmK0NULXgdCuwfuwnJkPA5CgnO%2F%2FiJunmj0cI%2BofIqvHNKAXhOjNpS7hSSiHI%2FLETk6AtsIDLCUDvnkBnO%2F9uIsdFG0rs3xdH%2FGa2xy52WGqMo&X-Amz-Signature=f69964c5448d3f27ca4c993ecae6aceb552d8ed190ab9a8b3e99ae3f3273889f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEOEWOOU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGiHVZWasK2cQmG9oE4qezLvpl7zE0bRpouyGsLWvxflAiEAgrpN%2FVhr2rWjeKPI7AhRhGyuWZWfZrO215ZKRdaq11oq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDC4cw%2FWD7qlVoRZIayrcA8CWeHRZ%2F5GVSHwJKBkZfDUeOGTZZZZGtBKcorh0sFA%2F4IZRQuLtRGE3ES6mj%2BFgDdIX%2F%2B51Wsv1hBImhU1Age5LjNgPuLJBm5uKUA1Yso8pmaQxb%2F7K8OFkVlLNVLr0muxuGo0Z7Z%2FascFTepyWEvO8%2B9FRd2omseZDlDMwLFMLwi%2BrJWt4HJVZs38jrN7GvfG591X8ChxFDkKQ95p2ZxVYxBxNx0Rc9ddKWpWojTP6X5U2lDs6RjSlgwTQ7uQfEYrdI6ZBqwi3Xn01ie%2FW1dXOttQ8FgLWFdaavMNh9xt6YwqR%2B%2F%2FF2cAqX182KLtgTrRHpxwKlCb1yFwqLRwHt1B9yjpz85yMAuX58kxJjhPMpPHPVBllTMRjWKl9sZ8JhwID2dMhrtf%2FgaiN%2FrViZpaprHSco2K%2BvtOD73inbmSbqgUnsJPTN6Di6ZPMn3T9OqDekmBalCroKkwqn37ZoS9SQ2Bh0%2BdNPbEMIY3Ctdb2dN6WUlnsHswmBkrBhVB5PxKT35668QbQxqvQ0Fpi8M2S1ZE4YVtBB1lQd%2B4MLSZ3VVBj2onsiKN%2B3SSY%2BDEmXmePFdDEADXx4GCHtfpIR0So233sIr4mo25CdK7%2Bwf8Xy5Ek5dqGVz3uMI1TMLazv8IGOqUB87akWSEf1hBrR7WuVe0wla3nzAeijMdCxQvp2Vx5QuAmO%2BPikR1SWKmSW33E0Xx3ce66VGc%2BA9gptXEtXZjPd0u8bVxvLkby14QDpxQRVpIuVRlo7o5jJr6UDmmO%2BIoHl2pz%2F87eteCDFSdqwbRPGulsj%2B%2F4dVAokACy6WbxpMUrcwoDeB8cWnwFjhIbn40VMIQvcEcWQ3Z4OOcRzR6XvOte9Xzv&X-Amz-Signature=abd2221d43e2b9d4df77a303fadba9830038ce9924ec0681a18e44fbe39575d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VC2BMYU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHM1TD1E6Zp8dv7ZNAzISPZB%2B2UdY6tnsfb4kOjV6DMBAiBA1CgKXjoRn2UT%2Bzb%2BwDcpj7wE0ESWl3WK7EFKqEK9Fir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMDfS0Fo3RxmnLelR9KtwDcpQDWT%2FPBlXXFuNreke936lLFR%2BGIf%2Frvz4qClysOGTq4o85HYvHslgvxRzUgsBAqtvZeADFz76MYp0gA9vqtslLWtoK5%2FHt2yjOQQc7OpCJLYplNz2KH5AaK0Cn3OvEf9pPzO3o%2B1%2Fi0A2gjsf9pSxHG3jw3LCL7likgjD3nvEJ8C0sqDiIB%2B5KW6aP3%2FAF9wkr27Nz3B45vx5jcX2fMT4O%2Fx2dhzg2YoTb3jnFF6P4wQz%2FQRqDWYLWU1cdo34eTA6O8rp2UO935SQxknnxQ1c2KYgbQl1eEP416haD29KIsH7z2lBXE2D74R9GVg%2Fz4CdvGYOj4HoyFv2ZOkSamiLvyxxML8OUWw9xEOokgzJOz1xrEonfsNWKIYDtNmutdXue%2FxsN3qLFly8yoVFaH8l%2FbcDMrE271deAQzk9%2BkSLUL0jLl%2FIWbH9OqU4jVCcVAgfjEzOVCog0BuicgHPJ6BT9pTqNC7oP7ywihbkXAmp7edP5QS2xssDSRvuSXANo4jE3auuOBz%2FPmhwN1LCZIX0Fyg4OY3epZAEeps6Yr0seuzr89NPYg%2FV7T90sfng%2Fpn0y%2F7%2BhPNlcQIOrzM7h%2FsECOZDoEjL4XeZ6GrrqcXVsF2Jp%2BPeXmebTakwt7O%2FwgY6pgHihCWkPtfRtEafbN7op3L7Mvn2dsQmMecDnveJdCFziB0mJiXGA0jFoQPraNUVWgSuwpxxGF9qcKrskX2P%2FkWsx0m9D5d8W%2BYCjm4KSGFH12504f82baeQWHnht%2FJbG5q4St%2F%2Fwln8u1C0cO1aBYuW0wRQqnT7cZRMjtxRcBjIVor3vJeIzJ1Lf8Xr0KiDSp2XlWuEkzED5Cd7hCuMtCJYreKcnTZ0&X-Amz-Signature=f7ff45a03d7e644ea4916f0da79e5e0e6402ba43836ac9d7c4f3fdc9b1c17702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHLLREBX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIEdBCefZ6OFyLkZGu6dqjixsDlPWd5kebo1oE%2Frep42VAiAYv0s4EZyV7lXF1Je3zwgeoX5xaWeEnopMymM0dk0xPSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMoM7Qwqc4MeiuZIEoKtwDQY07CbaJmyujWWYtBViiqoQxLI%2BB4tX0YsWJVLbcEAip6oqUKkOFifKV3Jt%2Bv1eTGSqB42ZapR38y7QYxrJU5OirqCYCUuAIuukSPsiEFDusqbPzhpOAMSw2xHXTonuwsM9YN8Iw8BgCokPZ0YEfIO14Hr7Ad16DCt78UMusuaahXNW7RQWYrWkUGuuKzYvxwbZAowrh6Eaf5p3SWiTf7GjJmrfGeww7RC8jZg0BIZKvGvhxuN%2F0vlxiKmDoYf5QHBdYOTHWt6mKiqdVKA8paGm%2BnUdeX0KZb9IUPR4zOl%2BA9ASCkJxLCpJC0aYbIPKtj6qlQfG%2BLPyfeIuuvMcEY%2B%2B4djeqHnFkLXX0UmxOM2thY3H%2BubhTK7UqbybrU%2FmCNfj%2FDKz%2BBKMJD1ntHgDhUDedWc3epRTioblD9Px0ekaWoJoqLJVT12VxZ8R7n0DMv23TSjkaTTIlNWglL%2Badt%2BU%2FQEMBs2m8nn7rt5Rx7LdvHFHVJbMwVAKrIJ%2F2oIdSwgmrnNSUUxo19xfokK9iJKD0qu25cCq5LOgxFWWNJiX8eAAW0R6EIwRh%2FUijSE5itb8Nai2pUySPYsX2Kjyyp%2Bfmiq%2Fz%2FLBha82xuUK83jpD3lS7dVcA4rbWrKAwurO%2FwgY6pgFUyYCe4SX%2BWgrFRBrGDTZ0QtOtTtOZDkfP2f5cWbqPRh5QoSdYom2hl6jSeZ3ja7Drd6ErYa8IWYCUYb%2FOJgRNKDGmTESDgEiYvtHdnPgFyxRkL5lmK0NULXgdCuwfuwnJkPA5CgnO%2F%2FiJunmj0cI%2BofIqvHNKAXhOjNpS7hSSiHI%2FLETk6AtsIDLCUDvnkBnO%2F9uIsdFG0rs3xdH%2FGa2xy52WGqMo&X-Amz-Signature=64372f21d1aee6033f14124e8377e8b91654902620906ff9d485e0d6891c9465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
