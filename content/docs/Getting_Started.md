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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6VPL7Z%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5z0wDSLTps9s7Jbl27NcURpBv%2FLh1jaY6Sj%2FejzYNagIhAMR241aMAQR%2FCzrdN4ilZmZzD3Pnj9PFjK6IDiH5i36dKv8DCCcQABoMNjM3NDIzMTgzODA1Igw0p4%2Bp4bXjjQ25lCEq3AOtYY43Vi0bhwTrERHqXAJEftehTr%2B8N5bN4r2WEo%2FselxTNegM8W3P2gljxkMhDSIX1Sk1%2B8%2BVKStXNlIQgvh9z4Wx5lYrHQ%2FS76NSMAI6G6k7L0ZdgUQlaB4M3%2FoEMZjPMuvT%2BcXV5ZCyoZfWH5kdVtFpNfpm%2BR%2BBZ%2FWbMLyZUReOZoh%2FVsxQs20RlzFm5SjSyUItIRfvc9XSlovRogsLoTr1lhxw4HTX1A%2F%2FPzotlt%2FRxpuoCIWQqd3P%2Fflh%2FiZIFe75h%2B6jQmpWnT5mUSiARQXJefV3szdVVVDvxkqz4zXcFGts7GXKAOwP2xWmYljG24ymFsRFxe3kovbXtQFN%2BgHNBI8DdH%2BCer6cDbdXXUPXdAwuF4seNPnqCIFfjxYyElKXzFsdFjN4tM6R8xAyJ1PgnexP%2BJxReVuzrR9Fmfs7qZVxLaREh1cvIC9s6RE7HYA1nExu5Y%2Bzli%2FieKal15n0H8tD04DVckDnCSb9DhhFvpciaT2Fs0Hpyba5BqfbmHQ%2F3N6cnBQtkGxlzEuqXfumA%2BwjbIxCeOQDWmcIyo%2FJpMk55nirvmEGJNC8hGr1ntNAZA4KnW5zg8rdK5i%2FqbAKUNfwfEom4Gzhi1vvemjtmH9ZwyAGxmswOjDwwtm%2BBjqkAXvCA95sRcpI1i6stymLS9kAay10kc1QRqrQNEkv8cdkzXdTLrcNhzzyaZpXR7Yy%2FVoTfZSXJ%2FDjSVT8ZIGCHNEXicSxmXP20NVoRjTIZjKQjkKnrFvLk%2Bw29DQPI1GcoHVMgk7KKrwl%2B9vjKWGWgyVzxLwC3aIqk41y7hRafkg8rUr8UvZJ%2BRuhP3BW%2BJeCu6T7g8oHlA5i31IIr8rNzkZ2%2BuOu&X-Amz-Signature=650ca4d79f001510b7d83bc7f9e1f77687a60b2d3222dc8dbc8d28811a3485e0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6VPL7Z%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5z0wDSLTps9s7Jbl27NcURpBv%2FLh1jaY6Sj%2FejzYNagIhAMR241aMAQR%2FCzrdN4ilZmZzD3Pnj9PFjK6IDiH5i36dKv8DCCcQABoMNjM3NDIzMTgzODA1Igw0p4%2Bp4bXjjQ25lCEq3AOtYY43Vi0bhwTrERHqXAJEftehTr%2B8N5bN4r2WEo%2FselxTNegM8W3P2gljxkMhDSIX1Sk1%2B8%2BVKStXNlIQgvh9z4Wx5lYrHQ%2FS76NSMAI6G6k7L0ZdgUQlaB4M3%2FoEMZjPMuvT%2BcXV5ZCyoZfWH5kdVtFpNfpm%2BR%2BBZ%2FWbMLyZUReOZoh%2FVsxQs20RlzFm5SjSyUItIRfvc9XSlovRogsLoTr1lhxw4HTX1A%2F%2FPzotlt%2FRxpuoCIWQqd3P%2Fflh%2FiZIFe75h%2B6jQmpWnT5mUSiARQXJefV3szdVVVDvxkqz4zXcFGts7GXKAOwP2xWmYljG24ymFsRFxe3kovbXtQFN%2BgHNBI8DdH%2BCer6cDbdXXUPXdAwuF4seNPnqCIFfjxYyElKXzFsdFjN4tM6R8xAyJ1PgnexP%2BJxReVuzrR9Fmfs7qZVxLaREh1cvIC9s6RE7HYA1nExu5Y%2Bzli%2FieKal15n0H8tD04DVckDnCSb9DhhFvpciaT2Fs0Hpyba5BqfbmHQ%2F3N6cnBQtkGxlzEuqXfumA%2BwjbIxCeOQDWmcIyo%2FJpMk55nirvmEGJNC8hGr1ntNAZA4KnW5zg8rdK5i%2FqbAKUNfwfEom4Gzhi1vvemjtmH9ZwyAGxmswOjDwwtm%2BBjqkAXvCA95sRcpI1i6stymLS9kAay10kc1QRqrQNEkv8cdkzXdTLrcNhzzyaZpXR7Yy%2FVoTfZSXJ%2FDjSVT8ZIGCHNEXicSxmXP20NVoRjTIZjKQjkKnrFvLk%2Bw29DQPI1GcoHVMgk7KKrwl%2B9vjKWGWgyVzxLwC3aIqk41y7hRafkg8rUr8UvZJ%2BRuhP3BW%2BJeCu6T7g8oHlA5i31IIr8rNzkZ2%2BuOu&X-Amz-Signature=e5fc95c8701e181ee79c11e032df73ec3fa4e898f86b9e3612a18f97d5851844&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHI7F6JO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSTf3k3hAsiRsmgkhKVcfM9gecJCSc%2FWkGWLbRltRkzQIhAPZXgTscailmpvS%2BGIOFUlF84W8SMIU%2B%2BQ7%2BsApBIKYZKv8DCCcQABoMNjM3NDIzMTgzODA1IgzVwLQpKFEoszNqP6kq3ANzmT0Y5mXBWZrCm0SQ7tb8oDAXeNn%2B8pPu1E5MzcR62NX670ACrwgNSvILMi4dVqFm2AnsaoyHDAkQZln7gRkaU2AhgkcDhfcQoK6D7N6H7wduylrxMs%2FDjyTQ35P3FIPOcNA%2FUoYJXRQ0fuW9B6ab5dFgnPFZkxaXyw6dmhH4jWG1tMMRZ63RIrHnPSTkh1ahPS4d%2FK9OpTVX6NhRiggLHVnV%2BIOPovcV0Ns9keeARZaof33uh%2FykFIu6JlnmUuXjFGQUUdCpryK1aoU%2B7FVd4jwFGT5Q19nLE5Gt2iAzjouyV2OikTrpnpdoc5M5L8hAVFl%2F5lZkBy5j94ZpNWNIhwgq%2Fxy%2B%2BOGWAYMZEHW361j2nlE4UDxbEIpF62ZA8mB5OkkUsVPLSBZKtc1ySBJtRsqq7EfmA8AhZibuYYZYwBPEXcAnafp2eNqklHYPiZscdxgMR%2B%2FnrwQ%2F7%2BezFs7Tx3U1FflhNu%2FJq5%2BBhVsvZzc6Lvnvc6BjhDEWobzDPHJoFtVxhjjOQjcXEcCqrMWTjFsaU8XhXpoE1J2HYoM82u%2FRa%2FxgXUCDMp2F6r3vUHwjC6gpohMnodX3HTCgwJWbSObU%2BgpyhV38jD8L%2F%2BXh5NWpGYjOf%2F9cKgZNzTCAxNm%2BBjqkAcne6fneE5qMKGSXgwgA1AUPi9goMZQ2n1GobB3Bzb45gn3W9j8NBDGz8y3xSgMXIBCpZ6LX2P3biCdTzeRonhUDcdpyXC5THGVTPZ00%2F70LeC3WWFhfkkWkAi%2BYdwJPj%2Biu0GklGTX6ObQsQHk%2F9R9FeDjrK5kUU0lE4Jjz9%2B3emxh7bX5r3fDQvbZ5J7YVzKIn2Nwx%2BfSQi2YQlvAV3XD%2BMf60&X-Amz-Signature=5958c08a29bf9792aa3b6a0ef2e8a7b06a8a238421e53bbefd1351a1402d48cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTMUBY3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFMpAY3i2cFuFtKJpLIyL3WIztjhHQRd5nwvBSJsQd4wIhALqeXK3GXVMFACt2O6nDxXxu9BAquRARkC96BY4YjpLLKv8DCCUQABoMNjM3NDIzMTgzODA1IgxLdra6QC6NaU1Ak%2F4q3ANF9ahFowdk07i9VK7TsbMdjYRVHrNtPOk80Xq9A4zU1uzgOJwezL4hmuA8KHh4KagAKCLvrGfwBqu3YPeFAVl6IATzWgUBW1E68OL4noOWfAzI0BRLs2JARjNMAf%2FjYA8%2BdnYqr2pdh8ztwtPJYXG7vqSGnZsk9wtgSm2yxghtaMct6WmMYjdz6tW0EVkeKqxZt5C9SUKxuFwibIiotH8SJLyc0IpkZGVzsfg9ozBbzpvcIYud8j4AFgpaKVOSnDQVTjuZDTrUuI9%2Bd3%2F8d77PzKeY0Ic7bVpJWhsPpbjWSTyc4wcxkBYwoQmUVfC1uZIbRxJac0JFC5bmr%2FDCVjdvi1%2BVW7FTQ24QSIH%2FGs964ZrsIabe0hmrbgiP1kgWVYtO%2BqkyLv%2FRdUDoTcpz%2BVa41ky7qKkvZtPKM8%2BT9MV0ULoywjLk2jstJNVujKPMsLWEasLNDEWHQ7o56bGb1Gfatw24GR%2FbtMiygjabLhvgYo1HTWeQZdCrO52M3RizRh1bnzg7waVUftXIlUKxGe2ZRHQmrc0lXTzVPfujk5AF7Y%2FbQUXf3XYBIFrbzIP%2FfueXtadb5oLlglGwYI3enmiJcEeiwkaOjV5u58kg8EJA1ifU%2FagWrSPYYodF7jCmodm%2BBjqkAXEkxfH%2Bvn65%2Bo3Au2rrEA%2BeRoU%2FVVxrQ%2FqiHp615%2F9tXbICGgo4Uveg0A%2BkZET%2FEfj2e4bSZt7ksVE1mJFq5Dyl%2B03FQvTtzI6pibEXiT05gBr1HTlBUArOYxNQbbkR2rqLqO4GPMrBqkyJ98hoP6MsYQutlI92Iz9E45AWoPGK9dZIodqKr9ZrYCVPMUMmmJFKhhSjmNjnkqsOxcRg%2FK9id8D9&X-Amz-Signature=f180206b0c031b7d3cf83de70d7c59959b95d379dcc8131f1afc9c93d9647cec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6VPL7Z%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5z0wDSLTps9s7Jbl27NcURpBv%2FLh1jaY6Sj%2FejzYNagIhAMR241aMAQR%2FCzrdN4ilZmZzD3Pnj9PFjK6IDiH5i36dKv8DCCcQABoMNjM3NDIzMTgzODA1Igw0p4%2Bp4bXjjQ25lCEq3AOtYY43Vi0bhwTrERHqXAJEftehTr%2B8N5bN4r2WEo%2FselxTNegM8W3P2gljxkMhDSIX1Sk1%2B8%2BVKStXNlIQgvh9z4Wx5lYrHQ%2FS76NSMAI6G6k7L0ZdgUQlaB4M3%2FoEMZjPMuvT%2BcXV5ZCyoZfWH5kdVtFpNfpm%2BR%2BBZ%2FWbMLyZUReOZoh%2FVsxQs20RlzFm5SjSyUItIRfvc9XSlovRogsLoTr1lhxw4HTX1A%2F%2FPzotlt%2FRxpuoCIWQqd3P%2Fflh%2FiZIFe75h%2B6jQmpWnT5mUSiARQXJefV3szdVVVDvxkqz4zXcFGts7GXKAOwP2xWmYljG24ymFsRFxe3kovbXtQFN%2BgHNBI8DdH%2BCer6cDbdXXUPXdAwuF4seNPnqCIFfjxYyElKXzFsdFjN4tM6R8xAyJ1PgnexP%2BJxReVuzrR9Fmfs7qZVxLaREh1cvIC9s6RE7HYA1nExu5Y%2Bzli%2FieKal15n0H8tD04DVckDnCSb9DhhFvpciaT2Fs0Hpyba5BqfbmHQ%2F3N6cnBQtkGxlzEuqXfumA%2BwjbIxCeOQDWmcIyo%2FJpMk55nirvmEGJNC8hGr1ntNAZA4KnW5zg8rdK5i%2FqbAKUNfwfEom4Gzhi1vvemjtmH9ZwyAGxmswOjDwwtm%2BBjqkAXvCA95sRcpI1i6stymLS9kAay10kc1QRqrQNEkv8cdkzXdTLrcNhzzyaZpXR7Yy%2FVoTfZSXJ%2FDjSVT8ZIGCHNEXicSxmXP20NVoRjTIZjKQjkKnrFvLk%2Bw29DQPI1GcoHVMgk7KKrwl%2B9vjKWGWgyVzxLwC3aIqk41y7hRafkg8rUr8UvZJ%2BRuhP3BW%2BJeCu6T7g8oHlA5i31IIr8rNzkZ2%2BuOu&X-Amz-Signature=8ce0a8d9af9fe6136ecef9eca8c54a65770cb94b1ce983af448b859d214661fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
