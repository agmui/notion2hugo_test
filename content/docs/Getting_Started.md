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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUKEWVD5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2BuMYaevqGZ96gKSVIbGGiqfcM19nCzbnM6BNCnuVGqwIhALytWCgBDd%2BYQleNT3gxZkUs9Be4Hs6X6KfAYNo%2BdtiAKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIyWDZG%2BybHkmJZn8q3AOjb3UQ0BomMNNCFzP81ChTTWW2KUJw4HqzQNhJfgIgffrnV9wWpyJBaePTytYuN8MH2zao8uh%2FTa8UV2OpYfmZxyKaH8EEAwN%2Figf32H3HCLdNX2997SWsld5yDQ%2FMJFlVhNTX05tqWDt9jLho24%2FQf7ed730wwQfb%2FFTJJ1OYxlomHyJhw5snH6bAdHXUv26s4%2BUKsGlxs8SrWTfoSCk9PHh%2B2BYZy9jdoBZsl925nWD4awLFTBnNGdv7bAMAwwzfX%2FXpPC%2BuKGTDk9wcqiSRGR6%2BSuvzZxPvuYdphAxqqtyRyFzDZ78PKDZXNaA1w4ecNXeJT%2FO6mNWoU7vWTfMtFkDV0TjFzrO7X0mAB0avzvfex0huowT8Bb5dBJ70fmKiRdI%2FV9Etmhtfx1N%2F60GIyHNCRzTUYUBchlRdSLua3zMHuKUtK1NJXnO%2BkqTrT3axtL1ehZfXjYEU9a%2BdiU%2Be6Uds5iXMkUp8m1AbmSId8dK%2BrAyCxbUegf1R9U0SUhrc1YqE9K6lJRvODggqrDB9zgyQWznQcNzSw%2BVRIjEq0ek9voXvBnbzik%2B34v1zWg%2B8V9qoMZqogrYTH87itRgNNUO7Ypc9DVHc%2F%2BsFTnM69sfwOl0wHZAgRZ3DEDCKh77BBjqkAacfyH%2BHSIfD%2BjgVTH1uMqJAIZxGtUQ4BnuOfqEmk4j%2Fke%2BbM2ONI8GMGP%2F2kY697vxsYqtBXCyC2sDNh2s%2BwzQZ%2B%2FJ7u7jpy0Mqu6Ux4p3%2FSScAQpz9IEtFSc3dEt8fm%2FhjwD7PiSCLeGRYGPqkrrKa02xhk53DC6ut8VXZmIcCOrDV%2B7wrm57PNog%2FVIoyJ6uI7Wtz8UCeoYPImL7m7ReETNmK&X-Amz-Signature=7cd856b3bb1068ac5535fd438192c0d6cd096604f676010dc15fe84ef5fc2c07&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUKEWVD5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2BuMYaevqGZ96gKSVIbGGiqfcM19nCzbnM6BNCnuVGqwIhALytWCgBDd%2BYQleNT3gxZkUs9Be4Hs6X6KfAYNo%2BdtiAKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIyWDZG%2BybHkmJZn8q3AOjb3UQ0BomMNNCFzP81ChTTWW2KUJw4HqzQNhJfgIgffrnV9wWpyJBaePTytYuN8MH2zao8uh%2FTa8UV2OpYfmZxyKaH8EEAwN%2Figf32H3HCLdNX2997SWsld5yDQ%2FMJFlVhNTX05tqWDt9jLho24%2FQf7ed730wwQfb%2FFTJJ1OYxlomHyJhw5snH6bAdHXUv26s4%2BUKsGlxs8SrWTfoSCk9PHh%2B2BYZy9jdoBZsl925nWD4awLFTBnNGdv7bAMAwwzfX%2FXpPC%2BuKGTDk9wcqiSRGR6%2BSuvzZxPvuYdphAxqqtyRyFzDZ78PKDZXNaA1w4ecNXeJT%2FO6mNWoU7vWTfMtFkDV0TjFzrO7X0mAB0avzvfex0huowT8Bb5dBJ70fmKiRdI%2FV9Etmhtfx1N%2F60GIyHNCRzTUYUBchlRdSLua3zMHuKUtK1NJXnO%2BkqTrT3axtL1ehZfXjYEU9a%2BdiU%2Be6Uds5iXMkUp8m1AbmSId8dK%2BrAyCxbUegf1R9U0SUhrc1YqE9K6lJRvODggqrDB9zgyQWznQcNzSw%2BVRIjEq0ek9voXvBnbzik%2B34v1zWg%2B8V9qoMZqogrYTH87itRgNNUO7Ypc9DVHc%2F%2BsFTnM69sfwOl0wHZAgRZ3DEDCKh77BBjqkAacfyH%2BHSIfD%2BjgVTH1uMqJAIZxGtUQ4BnuOfqEmk4j%2Fke%2BbM2ONI8GMGP%2F2kY697vxsYqtBXCyC2sDNh2s%2BwzQZ%2B%2FJ7u7jpy0Mqu6Ux4p3%2FSScAQpz9IEtFSc3dEt8fm%2FhjwD7PiSCLeGRYGPqkrrKa02xhk53DC6ut8VXZmIcCOrDV%2B7wrm57PNog%2FVIoyJ6uI7Wtz8UCeoYPImL7m7ReETNmK&X-Amz-Signature=b620514e2c90d6151dab08d5bae85333ecfa320840a429432e33777152b1a798&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUKEWVD5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2BuMYaevqGZ96gKSVIbGGiqfcM19nCzbnM6BNCnuVGqwIhALytWCgBDd%2BYQleNT3gxZkUs9Be4Hs6X6KfAYNo%2BdtiAKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIyWDZG%2BybHkmJZn8q3AOjb3UQ0BomMNNCFzP81ChTTWW2KUJw4HqzQNhJfgIgffrnV9wWpyJBaePTytYuN8MH2zao8uh%2FTa8UV2OpYfmZxyKaH8EEAwN%2Figf32H3HCLdNX2997SWsld5yDQ%2FMJFlVhNTX05tqWDt9jLho24%2FQf7ed730wwQfb%2FFTJJ1OYxlomHyJhw5snH6bAdHXUv26s4%2BUKsGlxs8SrWTfoSCk9PHh%2B2BYZy9jdoBZsl925nWD4awLFTBnNGdv7bAMAwwzfX%2FXpPC%2BuKGTDk9wcqiSRGR6%2BSuvzZxPvuYdphAxqqtyRyFzDZ78PKDZXNaA1w4ecNXeJT%2FO6mNWoU7vWTfMtFkDV0TjFzrO7X0mAB0avzvfex0huowT8Bb5dBJ70fmKiRdI%2FV9Etmhtfx1N%2F60GIyHNCRzTUYUBchlRdSLua3zMHuKUtK1NJXnO%2BkqTrT3axtL1ehZfXjYEU9a%2BdiU%2Be6Uds5iXMkUp8m1AbmSId8dK%2BrAyCxbUegf1R9U0SUhrc1YqE9K6lJRvODggqrDB9zgyQWznQcNzSw%2BVRIjEq0ek9voXvBnbzik%2B34v1zWg%2B8V9qoMZqogrYTH87itRgNNUO7Ypc9DVHc%2F%2BsFTnM69sfwOl0wHZAgRZ3DEDCKh77BBjqkAacfyH%2BHSIfD%2BjgVTH1uMqJAIZxGtUQ4BnuOfqEmk4j%2Fke%2BbM2ONI8GMGP%2F2kY697vxsYqtBXCyC2sDNh2s%2BwzQZ%2B%2FJ7u7jpy0Mqu6Ux4p3%2FSScAQpz9IEtFSc3dEt8fm%2FhjwD7PiSCLeGRYGPqkrrKa02xhk53DC6ut8VXZmIcCOrDV%2B7wrm57PNog%2FVIoyJ6uI7Wtz8UCeoYPImL7m7ReETNmK&X-Amz-Signature=32fe1aa48ff7285379b059a91eff1d0b940e8dbe33ba4f309f75852b17332e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PEPB25Z%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGJ5%2BUfKPz1jz6gdDyf7B%2FBdxj3NtmJAhDPfXD0qW9pqAiEA6MXjQoq%2B9SPkVBuYRz1flx9W%2BAH8QLcyUs5MHF2mGYkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6uuiLETR7V4AmAlCrcA9SwAJigHFvNTbcCIjwUXLj5Jx6bkLTvJEGOCsxUy4hh68iU7Clull7f9BD%2FoH8usvpvkz948MJgbXtvsqycUcQxDRq1AoCHY3HugUn7nJ1qd%2BvtvvYTOS6pYjusc4KZr8Vm%2BelyyTgbM7xLSMQ5SlAGt%2FAiakahaZyRsP4YSeT%2BByHHYWm%2FPrRTyTaXtKqglI1zC6JgigVZ8kK%2FY4CvyswjOPeqFcs68y7Yp9zwdOkTNO57WJ8gKszCSMVhCI7TjYCimUAebWyiqtEswpu%2FcmZDjaUVFVxl%2BhX8%2B%2B7rc7%2F5T5AwcvutLtWUheapaAGKmjE%2BCDNCcM8AN65rhym%2FHLOrV6J%2BBxxwwmrexJUY%2BM%2F4wFWlIJcbI2zgqTn5fPQkFCaALsGkuNDPVFCkLfZu6k7u4iGOREs0%2FPrRiqAnpKikVamvL2w8CIC6eZrmI1iVV0PVufKFZnwtzRKSyLvjssNmxBQ122RN7Mvhe9fXAQNK5%2FeEFBWQyz%2BIoP%2BSvhJr17OhqVHpaitqjhV24xH1dSvgwEXprtEg4AoF%2FmUrwvjUAZAUhkoAW%2FhJoP5eWqGPAgugS%2FhUv7v4nJfh72rqY5sLEmYTXOWLtT56F6ollq4Z5QxITHLfflMT81pAMK%2F1vMEGOqUB%2F6QF%2F8oGqsvlfj3WDooQmlexYnPcq6NhBUo13%2BR03DxTZcbjxyjlyFDmH1buqWybQ8LUo%2ByZu22ZsmbNQEkcMnOGkWOmQXxWtj6s5pcNhYRz9UPiUpqf%2B%2BsfdFDzR2Wf%2Fx8eIJ83vioQsEMdNMvkZzW3HRNMVmN2EN8T8wYaxvmsS7zq4FgujL3X9sSHOuv%2BbO1HGZYF2nFBWJdCNiC4Dxge6tnK&X-Amz-Signature=41e07d8e0285e818f83eb5f8dd09c0472fa90f20407c58847ff12ad185d07e15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRSWW3H6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCX%2B4FK1HU%2BQGAX0vIl8t0aqeKU%2BBb2hjTXpvEvjJLlAgIhAJdcM1Z%2BHwEZ2GFUkWZxZI2TtAPCwzno0czRnpoF1LCcKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHYpBRworyO8ZJovAq3ANHzmuW1KC0gJv3jZseBQRWHpvlskEEVjHN9vK4Mw2iVwf6rYuutiUOXxZc4F%2B955yojfKYJfiSFh2O977eeC8kZPu6AeEbt5Oxzf3nuRL4HXKjlc7%2By1zxZ7sybS%2BjzG55kno13X1wqnzEJn89X9ufFCnOdoaG5ncaLL%2FSTXFE5IuhNIueYLlXmFKBjYE1yMsYNuL94ugPRyitkjiqwZCwytvkVAeTne7Y4OgVVbaw%2FdgDpbSdVdGjbz9FYujOrTbF1DdfRbOUFjWUNn1h0%2Fc3WNW0IE5e94UDIi0sFZiTyaasKxKUqvxg5j0wIADWsy9lfDPiG4vwCCdQYcU3TEthTfNq%2BGoQ%2FsuHe4ez%2B70nKEikNtn%2BjO3tbCDv4WR8ewDcBIE1GwgOJ%2FdRBpXfozNKU0YZFYqAgmB%2FJ19Y5VlW4ACNesLu29WAZhVX3CYyGqYalvKsOByrAShm0u07qYteyh0a4PSSq5puQkGqko44nymMo0pTu8XbEHWxne5F%2FeQCmJpbEEH8JasFjXe6oAjqQEO677QJC3yNJQKFEVuncUxH28hE87BLNp9wIKuq5B15xYebIuQ%2Bi9vAE0EnFodpn9ENSveYe8%2FbxV5%2Bm%2BgyCs0tEdZ8LfXyoa6Y4DCzhr7BBjqkAbO6PHPvWD0ODed7d6Z1gtU8OGzJ2WDqV9UFt7BVo5KpTSZaIgFUAh6XsCPhsS%2BABc3NlagwESFSdOm0nx9BVvqOKMHan12EWKEHDxGojJki2nGltyJH%2BzBf50F7uVGvX1Q0lKi7aZrdKE0XUkBrZMowErW3CAmyohpCsTuoSi2M9GNr9zvSC5Eloprc3YA4ha6wrZkZx8lkVpJVpCyuUBsU4C4k&X-Amz-Signature=be1545651a64357cff741d4862605c4ba745cd7f04fd1c4f73537b22f9e8fca4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUKEWVD5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2BuMYaevqGZ96gKSVIbGGiqfcM19nCzbnM6BNCnuVGqwIhALytWCgBDd%2BYQleNT3gxZkUs9Be4Hs6X6KfAYNo%2BdtiAKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIyWDZG%2BybHkmJZn8q3AOjb3UQ0BomMNNCFzP81ChTTWW2KUJw4HqzQNhJfgIgffrnV9wWpyJBaePTytYuN8MH2zao8uh%2FTa8UV2OpYfmZxyKaH8EEAwN%2Figf32H3HCLdNX2997SWsld5yDQ%2FMJFlVhNTX05tqWDt9jLho24%2FQf7ed730wwQfb%2FFTJJ1OYxlomHyJhw5snH6bAdHXUv26s4%2BUKsGlxs8SrWTfoSCk9PHh%2B2BYZy9jdoBZsl925nWD4awLFTBnNGdv7bAMAwwzfX%2FXpPC%2BuKGTDk9wcqiSRGR6%2BSuvzZxPvuYdphAxqqtyRyFzDZ78PKDZXNaA1w4ecNXeJT%2FO6mNWoU7vWTfMtFkDV0TjFzrO7X0mAB0avzvfex0huowT8Bb5dBJ70fmKiRdI%2FV9Etmhtfx1N%2F60GIyHNCRzTUYUBchlRdSLua3zMHuKUtK1NJXnO%2BkqTrT3axtL1ehZfXjYEU9a%2BdiU%2Be6Uds5iXMkUp8m1AbmSId8dK%2BrAyCxbUegf1R9U0SUhrc1YqE9K6lJRvODggqrDB9zgyQWznQcNzSw%2BVRIjEq0ek9voXvBnbzik%2B34v1zWg%2B8V9qoMZqogrYTH87itRgNNUO7Ypc9DVHc%2F%2BsFTnM69sfwOl0wHZAgRZ3DEDCKh77BBjqkAacfyH%2BHSIfD%2BjgVTH1uMqJAIZxGtUQ4BnuOfqEmk4j%2Fke%2BbM2ONI8GMGP%2F2kY697vxsYqtBXCyC2sDNh2s%2BwzQZ%2B%2FJ7u7jpy0Mqu6Ux4p3%2FSScAQpz9IEtFSc3dEt8fm%2FhjwD7PiSCLeGRYGPqkrrKa02xhk53DC6ut8VXZmIcCOrDV%2B7wrm57PNog%2FVIoyJ6uI7Wtz8UCeoYPImL7m7ReETNmK&X-Amz-Signature=e58ba95b54536f4914e64fb887d46eca9a4c65c6252e540a37425ac9260d2c70&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
