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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPEMGLQQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2Bld4vOx3luQzJ2OLkLdtGTXCZFYQmhU7XJdX%2BcPqKLAiAHQyihr1sewoGA%2BD8pZ50RMWkK7WEKm9aLr%2FkuMeJMRir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM80yXp9ZOdrPV%2BLeIKtwDKFdQPzWOJ7b2EHJT17ddGt16YEu0LqqLHWg9Cld7q27L2kcadtivsP6gcfX9kc8Bt0g7jcIeE0FtI1nIXH5oTfWuXm5Mmjvz5HRsJ9t8f5ngkgOit%2BXVhXGhYKLx6YaFfZfNpmxn06UPGaWYN1qxwF8UZwz2fxI9rBrNjllyPW6J3sGb2QA0rzLxFyCKICx9FNnpbV3mR8MepGv%2FVbsd9%2BpZ0S3J9qagaB0KFxgxxliqg27UCfp1NnG7SZQIUy4OYr8YaLZTQ6maQUPVUHBsScfV0W1AZ0cZi9CXekg8a9vq6bwVcA8D%2FPE%2FzuqUN6lb8Lh0ZiCosyrUZWxlWUKw4o5azW1cx2pOu2qXOewoevYMe3nzvRhlIn2lSLNIlZHU95FbN4i3UL9tKGhT6Ri9EBXw7eqsVWLSEwIA9fo9zSatDlNzx4LHQ%2BwDHEGcs6t8TpslMgPND1OQjsOGiM7%2FYX4ZeM6yJdrbGLVTBgdb8ua5lkRv4f4mUEMh3y2nhc6Z%2FwB8RiXi1%2FziteM3u8VIWO%2Fm9NJta0LH1AzflwUtpRuwpxKi%2BlunJVF%2BeVlWCrLHS5ub0YW5qt0fUtuPbUUszExS1VSZXVvnUe6Mt87lDIqtSSAqVtX4qPLYmTgw75%2B7xAY6pgGyXw1HrEdUUH1qPEm1Vo7%2BK3jeg%2FiEu7sWz6P5VJSUXd%2B7O1HyyW%2BCchWB0ztGu6EleQj0KZEDtIw0JXHUU0eezUBg0D99C%2BzBCO1v4n%2F9K%2B9oidB9pFh7f8UhCIDxDbyjaGh%2BeeINpttCxMTVtc%2Fi2RUQo2ZnlxM%2Bdyd9mGnQWk6W0NPo9E3hOCdBjuMaAjKKcj0Pguw6glZ6QU76hMp3zFBnhxnb&X-Amz-Signature=1e357d59a18815ff0fc17c5a2e9339cf9c2d3c55a5f43169c20b5a305cfc28da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPEMGLQQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2Bld4vOx3luQzJ2OLkLdtGTXCZFYQmhU7XJdX%2BcPqKLAiAHQyihr1sewoGA%2BD8pZ50RMWkK7WEKm9aLr%2FkuMeJMRir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM80yXp9ZOdrPV%2BLeIKtwDKFdQPzWOJ7b2EHJT17ddGt16YEu0LqqLHWg9Cld7q27L2kcadtivsP6gcfX9kc8Bt0g7jcIeE0FtI1nIXH5oTfWuXm5Mmjvz5HRsJ9t8f5ngkgOit%2BXVhXGhYKLx6YaFfZfNpmxn06UPGaWYN1qxwF8UZwz2fxI9rBrNjllyPW6J3sGb2QA0rzLxFyCKICx9FNnpbV3mR8MepGv%2FVbsd9%2BpZ0S3J9qagaB0KFxgxxliqg27UCfp1NnG7SZQIUy4OYr8YaLZTQ6maQUPVUHBsScfV0W1AZ0cZi9CXekg8a9vq6bwVcA8D%2FPE%2FzuqUN6lb8Lh0ZiCosyrUZWxlWUKw4o5azW1cx2pOu2qXOewoevYMe3nzvRhlIn2lSLNIlZHU95FbN4i3UL9tKGhT6Ri9EBXw7eqsVWLSEwIA9fo9zSatDlNzx4LHQ%2BwDHEGcs6t8TpslMgPND1OQjsOGiM7%2FYX4ZeM6yJdrbGLVTBgdb8ua5lkRv4f4mUEMh3y2nhc6Z%2FwB8RiXi1%2FziteM3u8VIWO%2Fm9NJta0LH1AzflwUtpRuwpxKi%2BlunJVF%2BeVlWCrLHS5ub0YW5qt0fUtuPbUUszExS1VSZXVvnUe6Mt87lDIqtSSAqVtX4qPLYmTgw75%2B7xAY6pgGyXw1HrEdUUH1qPEm1Vo7%2BK3jeg%2FiEu7sWz6P5VJSUXd%2B7O1HyyW%2BCchWB0ztGu6EleQj0KZEDtIw0JXHUU0eezUBg0D99C%2BzBCO1v4n%2F9K%2B9oidB9pFh7f8UhCIDxDbyjaGh%2BeeINpttCxMTVtc%2Fi2RUQo2ZnlxM%2Bdyd9mGnQWk6W0NPo9E3hOCdBjuMaAjKKcj0Pguw6glZ6QU76hMp3zFBnhxnb&X-Amz-Signature=120c4aaff5ce6da3013cb0d39dfb32f5578239e9785a913c10f6cfc27b38cbe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPEMGLQQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2Bld4vOx3luQzJ2OLkLdtGTXCZFYQmhU7XJdX%2BcPqKLAiAHQyihr1sewoGA%2BD8pZ50RMWkK7WEKm9aLr%2FkuMeJMRir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM80yXp9ZOdrPV%2BLeIKtwDKFdQPzWOJ7b2EHJT17ddGt16YEu0LqqLHWg9Cld7q27L2kcadtivsP6gcfX9kc8Bt0g7jcIeE0FtI1nIXH5oTfWuXm5Mmjvz5HRsJ9t8f5ngkgOit%2BXVhXGhYKLx6YaFfZfNpmxn06UPGaWYN1qxwF8UZwz2fxI9rBrNjllyPW6J3sGb2QA0rzLxFyCKICx9FNnpbV3mR8MepGv%2FVbsd9%2BpZ0S3J9qagaB0KFxgxxliqg27UCfp1NnG7SZQIUy4OYr8YaLZTQ6maQUPVUHBsScfV0W1AZ0cZi9CXekg8a9vq6bwVcA8D%2FPE%2FzuqUN6lb8Lh0ZiCosyrUZWxlWUKw4o5azW1cx2pOu2qXOewoevYMe3nzvRhlIn2lSLNIlZHU95FbN4i3UL9tKGhT6Ri9EBXw7eqsVWLSEwIA9fo9zSatDlNzx4LHQ%2BwDHEGcs6t8TpslMgPND1OQjsOGiM7%2FYX4ZeM6yJdrbGLVTBgdb8ua5lkRv4f4mUEMh3y2nhc6Z%2FwB8RiXi1%2FziteM3u8VIWO%2Fm9NJta0LH1AzflwUtpRuwpxKi%2BlunJVF%2BeVlWCrLHS5ub0YW5qt0fUtuPbUUszExS1VSZXVvnUe6Mt87lDIqtSSAqVtX4qPLYmTgw75%2B7xAY6pgGyXw1HrEdUUH1qPEm1Vo7%2BK3jeg%2FiEu7sWz6P5VJSUXd%2B7O1HyyW%2BCchWB0ztGu6EleQj0KZEDtIw0JXHUU0eezUBg0D99C%2BzBCO1v4n%2F9K%2B9oidB9pFh7f8UhCIDxDbyjaGh%2BeeINpttCxMTVtc%2Fi2RUQo2ZnlxM%2Bdyd9mGnQWk6W0NPo9E3hOCdBjuMaAjKKcj0Pguw6glZ6QU76hMp3zFBnhxnb&X-Amz-Signature=d181b867f0ffd3b42e77d885d882a2da0a56153d46d67a880725a51302f3f2be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMU7OEW2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHtEfzZvwwpkd4qAmF9PbTbGK6NFYuclAfusvGMs9qXAiEAijxFSGSxq100yeE7xApMxVbGo%2FfenddHUUlrEvzvquUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEExmr8zkYBRjyqL%2FCrcA94UsQQ%2Bu%2BeKopTUgO%2BTx6gSaJIYtfYQJpA2r0bJWBI3bkJ%2BXaWMQycWEBwwNpU02XCfa1zz98mHsLD7YukWeEQfvS77Hu4QxE%2FaHe8%2FJ2rdio8VSf7%2BZ%2FLwnbZQFF%2BFTPXoCtewIo84OhEo06sZFtl%2Bc2q7%2FowGMH9OifRwRneAqaRPQNA2O1A8P4LX7U55Gmi03I5K9yGvKGLu11pE4%2BX2H3ayN34niAaartSpYCaU2ZUC2mBHHwWy%2FL8CVLS365e5f0cWUsWM72vU3k5erQYkqKOUL2M%2FV4gEK9LZW3xoVK2jERLTz6LniJ%2FW0QABFhuS2N1SIpYAD4LBCEj4x3kaJXEWuoWot2FHMBFmkTIXzrs10toBrqIoRUH1HjrE7qbUnloZW35BnswVfWILsZZ017Bunfq4xPulrv3JqORnZwYXZdpgAUy32ym7sIww2rK00Mpsd%2B7CPmgfOa19tHAOvw0Nsh9eOv4q3mzINTeWrksx3Vr6rvfSjBsDEAqJYR1fTpI8wCiRqY97ErnNpHIWHd%2B%2FVj9q8ZF0l0g1r9GvS738Jroc2hQ92UW%2Bhrc%2Fmk5g86pErbg17GuzOJ5wqdhi9x3CSNVxhr5BasforpqltK3dScJsKwvufAU7MIecu8QGOqUBvYyCxNHEOxid%2FQ9OtnkEPS0a%2BGEJL80v17FfuVVWB%2BZ1SnRgplGeGOXfk6NX3R7L3VznsWddwHFjJ8w%2FL6fKrFWF5bBGEW3evLj8dlS8wVKavlrH0bmrQsiVMdZC5J4Y6kfGTXJDpMKWyu2xVMozvDAM7%2F%2Flk%2BXUMUv5szg16nadsLtUIdXb6UPck%2F0j3avFRxJySlzwiARyXBp1rVZwO1FYUn6C&X-Amz-Signature=bdf01bc088a6c8f17c26fe1e8986a2c2569bd0b348d1a45e46cdf951715a12cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6ZOV4B7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFiCa3W4Eiwt3Whgp3s7VFiniFUSi3%2FhcefTmr%2Bybg4yAiAfkvS%2FuIcpwlFZWhmbMpI8A7QiXyw3r%2Fk80lAoVx%2Fo6Cr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMLUggHL86QPC6KePcKtwDYiI60XPmV%2FgR%2FmgqW0fjEALlqFuZjvFSES9Fxlln2vMlC%2BgTljdHmFTJVkt%2BHgmXyRy5IXWiYh0qlRgIt6nYVkdfgLOFDy1Etu54od8YdQ8jlJ5BYTn3SowzX%2Fut3QylwDSHFNa9KWSU4wbTRX2tcOseWDm3OnJbK0KtgjxO6LeC9tOnf%2BdaU2Ee3L8qfiKqdsqSIotA0jtNBCdQN%2F9gjGx46zr8EgnjXRTZFxLXJGT6ej813KC%2FD%2BIlgjupNZemy16X%2F5Ff5oIQX1ZGM9f3mi%2FLKS0q%2Bmwv7f29kTjyf%2F1Po3xIzmfYSs2mhtqWB3eJHMeBlbp1lc5qXICFHiDivZYrqNFZ%2B7sY3zCjts%2BYh%2BW4BrkkG%2BrYOMZzB9F4h%2FHcBtnw6wRZ5ZzuWniqA5EXl16xSDj%2BiawVy3CRDxHhWR2ZNwJZQtyeC%2FXN1iE22%2FKAy92SjX1TaicT0rAJ4rCjsDJZpHoq9PfYkA0GeLtkyZ0ToKCbmn1tja6k2pFDecqeje3KteE3bGw0ZlI53VUUsiUKgBzZA8ighwzRGnAVBZyRCSXl2pFyMe112Wg7TvpoZ0SbAVpMvDUeFuNCaakcIRRF5ZxJkopJl50G%2FrttjrOV%2Ft7Ek0pQ6wFvqGUwtqG7xAY6pgFmFkzuKptkw%2BFiqCf2tkOyqGs15REixfI9FBVjojF8QEpiL25uT4ch9mbwmI%2FCC7gZgOKdzpSsbboNrXIvspbF%2FDHOQw%2FJjIeMToblue0%2FKqD%2FBGeIsY2Xkno%2BrQBCAmhb19sDYIPXAODfoIp3T%2BLbN548Zv3Ok1yvzNUGlfFQFEYFwBOAp9i6Rx4x9O6k%2BOr13S5IOEj44Lq7CVMkLUCJiioSaxLf&X-Amz-Signature=946f4468cdba2604be0994e0245f8c772385b42fcf504362012c93f78c88a684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPEMGLQQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2Bld4vOx3luQzJ2OLkLdtGTXCZFYQmhU7XJdX%2BcPqKLAiAHQyihr1sewoGA%2BD8pZ50RMWkK7WEKm9aLr%2FkuMeJMRir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM80yXp9ZOdrPV%2BLeIKtwDKFdQPzWOJ7b2EHJT17ddGt16YEu0LqqLHWg9Cld7q27L2kcadtivsP6gcfX9kc8Bt0g7jcIeE0FtI1nIXH5oTfWuXm5Mmjvz5HRsJ9t8f5ngkgOit%2BXVhXGhYKLx6YaFfZfNpmxn06UPGaWYN1qxwF8UZwz2fxI9rBrNjllyPW6J3sGb2QA0rzLxFyCKICx9FNnpbV3mR8MepGv%2FVbsd9%2BpZ0S3J9qagaB0KFxgxxliqg27UCfp1NnG7SZQIUy4OYr8YaLZTQ6maQUPVUHBsScfV0W1AZ0cZi9CXekg8a9vq6bwVcA8D%2FPE%2FzuqUN6lb8Lh0ZiCosyrUZWxlWUKw4o5azW1cx2pOu2qXOewoevYMe3nzvRhlIn2lSLNIlZHU95FbN4i3UL9tKGhT6Ri9EBXw7eqsVWLSEwIA9fo9zSatDlNzx4LHQ%2BwDHEGcs6t8TpslMgPND1OQjsOGiM7%2FYX4ZeM6yJdrbGLVTBgdb8ua5lkRv4f4mUEMh3y2nhc6Z%2FwB8RiXi1%2FziteM3u8VIWO%2Fm9NJta0LH1AzflwUtpRuwpxKi%2BlunJVF%2BeVlWCrLHS5ub0YW5qt0fUtuPbUUszExS1VSZXVvnUe6Mt87lDIqtSSAqVtX4qPLYmTgw75%2B7xAY6pgGyXw1HrEdUUH1qPEm1Vo7%2BK3jeg%2FiEu7sWz6P5VJSUXd%2B7O1HyyW%2BCchWB0ztGu6EleQj0KZEDtIw0JXHUU0eezUBg0D99C%2BzBCO1v4n%2F9K%2B9oidB9pFh7f8UhCIDxDbyjaGh%2BeeINpttCxMTVtc%2Fi2RUQo2ZnlxM%2Bdyd9mGnQWk6W0NPo9E3hOCdBjuMaAjKKcj0Pguw6glZ6QU76hMp3zFBnhxnb&X-Amz-Signature=8d37d64b4832305c4c8791c187382cb7ce7e147bb47ad8c5945a49c242d7194e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
