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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXDYYU3I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhjWZvE8omFUlxlWhnhjsT2C73RDYwDv7EW2xMZtz0vAiEAjPAcmvKaLKZG8Va%2BeHW9UbdPqzf8%2BN%2B4umWqrTxbuZUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFO76oFyP5t5QGBdvircAwkJAViWgQyttSEtaRaJTvRXYv%2FMr7Ra2QvKhEWloRz4YtzF5a0XkDM%2BkE%2BCDapYu%2Fw0uvyw%2Fk%2F25BH57RUGGRxzhSheTETCep9wDLb0uAKQHB2ju%2F2DGOL%2F1zWfNw8MLsUdq8XfNGKav9dy3kzRVx7N3M1I4FMdNtYYw2hfe0vlvlkRtwaK4ICgKl2lv8lUR%2BpBgeePHgi1U2lx7MNyDBcZqwzOMXLySa2X7a1hZqwNiO%2BtWzJbUFsSY%2Bi8WTjJm123L9ZPgXD4pm%2BbAxr0keujEhnEtQPfM0ED%2Fqqey7jBPVRistciuDiDRpSB6pUEfgoqYgkUVyYU5IWTCRnJrMANx0fawWeoO1MDpyt6s0GaPfBzQHcxN9KyFQ5tiaSH9QE5MSsvailSKw%2Bu6sI%2B4WCb7S%2FUYy3mgBVJCP0yjGDFjyLe2Y9PUaad7%2Bqo0BJdV2bjyXMej9ztqNHDkDFSx6xMbmHYGHjPoXxj34br90c8UKf7xz2KQeK92DlaNjw%2BHAVrUSXMvqgzTZVVrmaauqV60PfJdlefU6wY%2FhglAKsvy0ErClrOXIMxPIvnB2j4NYLTw2luYArJASh%2BoFup%2BW7P%2BIWoYWnUsmvCSqPjJhxjXGCLoflsZWf0QNz7MPWAusQGOqUBCZlH5PFbW69JegnmCyQtKeSGPLooKkavpYNNarT0UavJfU7wbwcpLM5DnEa4C%2BR3fEosH3v1ydJaWVKsPukaeZJ%2FytxBBetSgnbCuZ%2FYryVBEc58XAxOKe3KpoW4WpVLoqh0Hor%2F56t0%2BTAxbsDr3C9T1Pe9XLqZUPMUfFkp82DAsBKR5N7ayQu5nbihWNgT94RxE%2FNgIcU%2F%2BFghCCTp7FeVf0BA&X-Amz-Signature=261b5e56dc05182c86a7e9f76203ff5fc40cae083d9e09bcccbdd3b49f87e23d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXDYYU3I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhjWZvE8omFUlxlWhnhjsT2C73RDYwDv7EW2xMZtz0vAiEAjPAcmvKaLKZG8Va%2BeHW9UbdPqzf8%2BN%2B4umWqrTxbuZUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFO76oFyP5t5QGBdvircAwkJAViWgQyttSEtaRaJTvRXYv%2FMr7Ra2QvKhEWloRz4YtzF5a0XkDM%2BkE%2BCDapYu%2Fw0uvyw%2Fk%2F25BH57RUGGRxzhSheTETCep9wDLb0uAKQHB2ju%2F2DGOL%2F1zWfNw8MLsUdq8XfNGKav9dy3kzRVx7N3M1I4FMdNtYYw2hfe0vlvlkRtwaK4ICgKl2lv8lUR%2BpBgeePHgi1U2lx7MNyDBcZqwzOMXLySa2X7a1hZqwNiO%2BtWzJbUFsSY%2Bi8WTjJm123L9ZPgXD4pm%2BbAxr0keujEhnEtQPfM0ED%2Fqqey7jBPVRistciuDiDRpSB6pUEfgoqYgkUVyYU5IWTCRnJrMANx0fawWeoO1MDpyt6s0GaPfBzQHcxN9KyFQ5tiaSH9QE5MSsvailSKw%2Bu6sI%2B4WCb7S%2FUYy3mgBVJCP0yjGDFjyLe2Y9PUaad7%2Bqo0BJdV2bjyXMej9ztqNHDkDFSx6xMbmHYGHjPoXxj34br90c8UKf7xz2KQeK92DlaNjw%2BHAVrUSXMvqgzTZVVrmaauqV60PfJdlefU6wY%2FhglAKsvy0ErClrOXIMxPIvnB2j4NYLTw2luYArJASh%2BoFup%2BW7P%2BIWoYWnUsmvCSqPjJhxjXGCLoflsZWf0QNz7MPWAusQGOqUBCZlH5PFbW69JegnmCyQtKeSGPLooKkavpYNNarT0UavJfU7wbwcpLM5DnEa4C%2BR3fEosH3v1ydJaWVKsPukaeZJ%2FytxBBetSgnbCuZ%2FYryVBEc58XAxOKe3KpoW4WpVLoqh0Hor%2F56t0%2BTAxbsDr3C9T1Pe9XLqZUPMUfFkp82DAsBKR5N7ayQu5nbihWNgT94RxE%2FNgIcU%2F%2BFghCCTp7FeVf0BA&X-Amz-Signature=900686e6cafd44afcebc95a66907300a841251755311579b92b3219759326333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXDYYU3I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhjWZvE8omFUlxlWhnhjsT2C73RDYwDv7EW2xMZtz0vAiEAjPAcmvKaLKZG8Va%2BeHW9UbdPqzf8%2BN%2B4umWqrTxbuZUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFO76oFyP5t5QGBdvircAwkJAViWgQyttSEtaRaJTvRXYv%2FMr7Ra2QvKhEWloRz4YtzF5a0XkDM%2BkE%2BCDapYu%2Fw0uvyw%2Fk%2F25BH57RUGGRxzhSheTETCep9wDLb0uAKQHB2ju%2F2DGOL%2F1zWfNw8MLsUdq8XfNGKav9dy3kzRVx7N3M1I4FMdNtYYw2hfe0vlvlkRtwaK4ICgKl2lv8lUR%2BpBgeePHgi1U2lx7MNyDBcZqwzOMXLySa2X7a1hZqwNiO%2BtWzJbUFsSY%2Bi8WTjJm123L9ZPgXD4pm%2BbAxr0keujEhnEtQPfM0ED%2Fqqey7jBPVRistciuDiDRpSB6pUEfgoqYgkUVyYU5IWTCRnJrMANx0fawWeoO1MDpyt6s0GaPfBzQHcxN9KyFQ5tiaSH9QE5MSsvailSKw%2Bu6sI%2B4WCb7S%2FUYy3mgBVJCP0yjGDFjyLe2Y9PUaad7%2Bqo0BJdV2bjyXMej9ztqNHDkDFSx6xMbmHYGHjPoXxj34br90c8UKf7xz2KQeK92DlaNjw%2BHAVrUSXMvqgzTZVVrmaauqV60PfJdlefU6wY%2FhglAKsvy0ErClrOXIMxPIvnB2j4NYLTw2luYArJASh%2BoFup%2BW7P%2BIWoYWnUsmvCSqPjJhxjXGCLoflsZWf0QNz7MPWAusQGOqUBCZlH5PFbW69JegnmCyQtKeSGPLooKkavpYNNarT0UavJfU7wbwcpLM5DnEa4C%2BR3fEosH3v1ydJaWVKsPukaeZJ%2FytxBBetSgnbCuZ%2FYryVBEc58XAxOKe3KpoW4WpVLoqh0Hor%2F56t0%2BTAxbsDr3C9T1Pe9XLqZUPMUfFkp82DAsBKR5N7ayQu5nbihWNgT94RxE%2FNgIcU%2F%2BFghCCTp7FeVf0BA&X-Amz-Signature=9c4ef3b8e617080749a99e9276c6560979ef932021626e8c8c0c8bcd043d0d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EO2FF5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BhOvFgjkM1LWJRhoQySwG6BUE0x4d1Z6uVe6O%2BQV5NAiEAiVeZ30BMyDoVvBRg8vUF6whRSSB8Huw7jzYHh4VT%2FKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDB9Qjj6xGvL7Rld5CyrcA78TWAjHi0KCsmloaYhDpGGrpW%2BFn%2Ffwqf9x0sSy9UPNjv7%2BhfIzAlL5Ds5nAutAJHW87AVHsP32F3HvGSh2%2BJHTYY3FPjA9Tn88F0LhlqOiBYeb%2BX9dHxy28kD4%2FMlZkKYyrhAZZ5dw%2FKMuzlrjUXap0aNbAgwzBSsnKDJu%2B1cL8ENLjSP2eBREyjcwQkKbaSEavIVh%2B%2BAj3ydxgBkHQT3SpEm5HR7G4MoBbW%2FTngCafP2u6k52kti0XH%2BiPYqJ7tInwitHR%2FbaaYY%2FYUxcNzFU0z8OtIVyRg4VCQA9eweUHTTwD0Qc47vdA%2BQr84sOe%2BjFLNXMCBnlYs79Rp6zroYYPR%2BLvokiZVNjs2nSakWk66yJ5Iy8Vs1sI1Dmt7Ub5s3Mnw%2FLLzlcOKXPPxtD590uRD5neSXqWRCko0pzLa8EGHwm78%2FX1P4FbrHSgVzMENDuwX6rdoFXSVtgHXXIGQ6JaNlzWocPSayeW0arwbQVzHAvcNYp%2F0EI2fGwgB9hyv9x3zxKyU%2FpljPzj7kxPOXajXMehL5jQ0aA%2FeqJ%2BmEQ6YbeGEQ0AxTVkjTwnbfGpH4iCQcs%2B%2BuIan%2Brh78AJgz3Zl6PRAX0wZq8BWQDirY3EbmYHaer63S3kfhHMJuBusQGOqUB5kiUCEb0MJ6D5TD%2BvLN0HhhOmckwZL0gm4xKQB%2BaQK9551hhq6Ni8TTGVPuYSz6Gu4j6BBbH6lhIw%2BPkuBcuJsQMPzq1U2mMTe0jdr248DUj%2BKvt3eTcrluzWzfrmgmz5tTW9uHAJg3Bk0EvkxPJH5x4K5JakHhdFtn1Ch%2F2iiOJytkulvlHe1H3nDXjocfShvCsufubjKsyInwAX1xejB1ssVaR&X-Amz-Signature=838ec9633eba7aacb72eeff54b62c51b198c78659ca61d320bb54f6911a01145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WJPAURO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj72jgP%2Bpdk253ct7MNlpnpDuaxozQismwP3hO1OHh%2FQIgZBC%2FH9FqQIQqqdSTrWZiWXeDYgKSkcRfXDLsRovSgHEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOqO3MtnQrP44%2FlaBSrcAyZk5Q1pJXyGELTibfX%2BIYwcTCn3qPVXqWyvyB9p4W5G4AIZzEECKf6R%2F9Ne4k2FQ3phR3QVd6uBMw80NKDUqWPSIhyv%2FVaXSpzeWvNTKzioY2SnglpT0pT0KOMDvt84o%2Bu9hrwAhsu1f7i4V%2B%2Fs93fkdazIkjxeABustBE1JfrZejKZZnGhW78JhKBOHngHLwCus6Bo%2FxAwdoZBF%2FHwyxLmpXlMTQJf9el8q4tqfUHEvEHxXXrl%2BqCX7jxIaTxgROqF63umMaQKADSzBHyP%2BE3d4yIM4OanM1gLvI%2B5Sh42%2FPws0qWp7jzBKbJxZRyGV6btRMgXsljGAEKaod2I4Glcmmc9JYnzQC0jaEHHQiD1t8qb%2FL7%2FJ2PbJ6YzbNz355OneOl2lWdWO5F3mrbP%2F3VFTTUOzi%2FZFi7BNEA9dx37%2F1e02yALDi29b%2B5o%2FI3oGJJ4sKVc%2BaIdQhkcDTHKiMLOOb0ASyKlbDVbH6hnb6%2FTA%2BvKZTxJ1nLyzZSZXk%2Fh09nOZ9RyXJG1b3uU8R5IjA7TtGE4Edbo4%2BnBrMhSqeqz52MGd8pOUQ%2BghmQ7fQpdyicwzgpYxdSG9i7Gcb%2F05lhMRINN0j9iuS8nFev6Cm7UcvrGthIb2DNg%2BF98ML2AusQGOqUB1Va%2FmkWDlmVV5ygqt8xlZQfVVf9aHZ2T1Qd0odA3gtf1sqMIhZPnmxe0xRhW72xfMrWeY740SeL3tU2%2F%2BR02uO8%2FHF%2Fg118xyGVBZ24V3PCs%2F3dOtM1cFeixcM%2FYW5BwJ6ix0C%2F1JVV566XKu1IZCTZOAFnP9CFLbsfPYyvg856tSKYv8YMX5OQHxojFtWHZUYComD8QQwQY4m0B%2Bmkn7BwoezBS&X-Amz-Signature=8e8ee8d41848170b3d71322e4dc127e3152690cb4aca978673f2f3697d40790a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXDYYU3I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhjWZvE8omFUlxlWhnhjsT2C73RDYwDv7EW2xMZtz0vAiEAjPAcmvKaLKZG8Va%2BeHW9UbdPqzf8%2BN%2B4umWqrTxbuZUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFO76oFyP5t5QGBdvircAwkJAViWgQyttSEtaRaJTvRXYv%2FMr7Ra2QvKhEWloRz4YtzF5a0XkDM%2BkE%2BCDapYu%2Fw0uvyw%2Fk%2F25BH57RUGGRxzhSheTETCep9wDLb0uAKQHB2ju%2F2DGOL%2F1zWfNw8MLsUdq8XfNGKav9dy3kzRVx7N3M1I4FMdNtYYw2hfe0vlvlkRtwaK4ICgKl2lv8lUR%2BpBgeePHgi1U2lx7MNyDBcZqwzOMXLySa2X7a1hZqwNiO%2BtWzJbUFsSY%2Bi8WTjJm123L9ZPgXD4pm%2BbAxr0keujEhnEtQPfM0ED%2Fqqey7jBPVRistciuDiDRpSB6pUEfgoqYgkUVyYU5IWTCRnJrMANx0fawWeoO1MDpyt6s0GaPfBzQHcxN9KyFQ5tiaSH9QE5MSsvailSKw%2Bu6sI%2B4WCb7S%2FUYy3mgBVJCP0yjGDFjyLe2Y9PUaad7%2Bqo0BJdV2bjyXMej9ztqNHDkDFSx6xMbmHYGHjPoXxj34br90c8UKf7xz2KQeK92DlaNjw%2BHAVrUSXMvqgzTZVVrmaauqV60PfJdlefU6wY%2FhglAKsvy0ErClrOXIMxPIvnB2j4NYLTw2luYArJASh%2BoFup%2BW7P%2BIWoYWnUsmvCSqPjJhxjXGCLoflsZWf0QNz7MPWAusQGOqUBCZlH5PFbW69JegnmCyQtKeSGPLooKkavpYNNarT0UavJfU7wbwcpLM5DnEa4C%2BR3fEosH3v1ydJaWVKsPukaeZJ%2FytxBBetSgnbCuZ%2FYryVBEc58XAxOKe3KpoW4WpVLoqh0Hor%2F56t0%2BTAxbsDr3C9T1Pe9XLqZUPMUfFkp82DAsBKR5N7ayQu5nbihWNgT94RxE%2FNgIcU%2F%2BFghCCTp7FeVf0BA&X-Amz-Signature=286e3905cb9a5d034847507815d858364ba729419b44dbddd2f9d487c4de3eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
