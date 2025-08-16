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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZEZ7HC3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIH8wJRycYAq89Hdu6oYfPgtYb2zVfc6FlZVB3ehYD6CCAiEAmctPMKVtWPwj0Ogam7ZubvU9PWYXx6yvjXFXQamaHXcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDlMeogLLJHOA8mqOCrcA18NpAw29WhhdceFTPZcK25XUouXE%2BzTUF5IXEq9ycw60bB7xzawbSu7VfSohRbvfwDPoiDFyZLLIHJm1tuw3oxzfNrlZiPd640smkNlyn1MLhK7Av503FR9i0zl54A6kwoFGs5vmRf4mGDqq7T9CxYtrY2P3Fa0E%2BNXkZnRCoXOE1X77537rvoamfBLOo7OcVh3kiORgWsbLWmwTfV4DD0XRWy6jmBkOA6Eb8qCQFIdZ2xiejEK9zT5QWQRy%2FSDpMrNhxR5Dp6s4THkbY27muTSAN2MNVx%2FynokfWmKeIIVSKZWhtW5kmH9JxTqXfoF9CgSTZyg0BUZLeqh74iWgRfgSp8%2BSd3DSi55t2q3uo6cfTjSwHgSRGZQgUEl10rgCj6%2FsCL%2BjrA5U6e5HflwMKpWRkMy7maBzv4bf7GUXCuxBr6eiQPO7r09nPIyxLSTZjSssv%2FSda6%2FOiG7lhgtI1TnSbjGaP5wf63PTlOzmzofg%2FhIbIgMgXVwfdrq6lSvRCW2ojfWfjwdyAhD4wX7k4M1173nuyYAvCzRGURB4lXgd4RhJtvfVla1%2BrEKfAXNRKF9qxZ5NWlxidMpxuEt3laZmAX1u3wXQgRxxqVsqbwQKFk%2B18fJlVjL1IigMNvY%2FsQGOqUB3GAh5hHG4L9570yj2laaCs%2FJaveeoOxhBzTKbRU6gPsgflgqGXkqugjvRI7r5JEDd16drB8MU2hDJ2Q1r2Q8mmSsB2pYuVrxJIJnN0H2GL169wCkngniUaNhARglgUvy0L%2Fl2cuDbaoyzo9d2R3JjXLr%2FbhmdWThs4uyr3i6CH%2B3O6z54TRK3Sr%2BYuNSKq5cKCrWarDrCDYy%2Blp%2F9hWMKcf0457n&X-Amz-Signature=14e348124e9df0373e4ee889e6758bc09a4c5ec3a7f962a449ef98009be0a3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZEZ7HC3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIH8wJRycYAq89Hdu6oYfPgtYb2zVfc6FlZVB3ehYD6CCAiEAmctPMKVtWPwj0Ogam7ZubvU9PWYXx6yvjXFXQamaHXcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDlMeogLLJHOA8mqOCrcA18NpAw29WhhdceFTPZcK25XUouXE%2BzTUF5IXEq9ycw60bB7xzawbSu7VfSohRbvfwDPoiDFyZLLIHJm1tuw3oxzfNrlZiPd640smkNlyn1MLhK7Av503FR9i0zl54A6kwoFGs5vmRf4mGDqq7T9CxYtrY2P3Fa0E%2BNXkZnRCoXOE1X77537rvoamfBLOo7OcVh3kiORgWsbLWmwTfV4DD0XRWy6jmBkOA6Eb8qCQFIdZ2xiejEK9zT5QWQRy%2FSDpMrNhxR5Dp6s4THkbY27muTSAN2MNVx%2FynokfWmKeIIVSKZWhtW5kmH9JxTqXfoF9CgSTZyg0BUZLeqh74iWgRfgSp8%2BSd3DSi55t2q3uo6cfTjSwHgSRGZQgUEl10rgCj6%2FsCL%2BjrA5U6e5HflwMKpWRkMy7maBzv4bf7GUXCuxBr6eiQPO7r09nPIyxLSTZjSssv%2FSda6%2FOiG7lhgtI1TnSbjGaP5wf63PTlOzmzofg%2FhIbIgMgXVwfdrq6lSvRCW2ojfWfjwdyAhD4wX7k4M1173nuyYAvCzRGURB4lXgd4RhJtvfVla1%2BrEKfAXNRKF9qxZ5NWlxidMpxuEt3laZmAX1u3wXQgRxxqVsqbwQKFk%2B18fJlVjL1IigMNvY%2FsQGOqUB3GAh5hHG4L9570yj2laaCs%2FJaveeoOxhBzTKbRU6gPsgflgqGXkqugjvRI7r5JEDd16drB8MU2hDJ2Q1r2Q8mmSsB2pYuVrxJIJnN0H2GL169wCkngniUaNhARglgUvy0L%2Fl2cuDbaoyzo9d2R3JjXLr%2FbhmdWThs4uyr3i6CH%2B3O6z54TRK3Sr%2BYuNSKq5cKCrWarDrCDYy%2Blp%2F9hWMKcf0457n&X-Amz-Signature=0b87b028fb8a007e05cad64b01f52031ab5e1c0edcf34ddba67d4121a8b51a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZEZ7HC3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIH8wJRycYAq89Hdu6oYfPgtYb2zVfc6FlZVB3ehYD6CCAiEAmctPMKVtWPwj0Ogam7ZubvU9PWYXx6yvjXFXQamaHXcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDlMeogLLJHOA8mqOCrcA18NpAw29WhhdceFTPZcK25XUouXE%2BzTUF5IXEq9ycw60bB7xzawbSu7VfSohRbvfwDPoiDFyZLLIHJm1tuw3oxzfNrlZiPd640smkNlyn1MLhK7Av503FR9i0zl54A6kwoFGs5vmRf4mGDqq7T9CxYtrY2P3Fa0E%2BNXkZnRCoXOE1X77537rvoamfBLOo7OcVh3kiORgWsbLWmwTfV4DD0XRWy6jmBkOA6Eb8qCQFIdZ2xiejEK9zT5QWQRy%2FSDpMrNhxR5Dp6s4THkbY27muTSAN2MNVx%2FynokfWmKeIIVSKZWhtW5kmH9JxTqXfoF9CgSTZyg0BUZLeqh74iWgRfgSp8%2BSd3DSi55t2q3uo6cfTjSwHgSRGZQgUEl10rgCj6%2FsCL%2BjrA5U6e5HflwMKpWRkMy7maBzv4bf7GUXCuxBr6eiQPO7r09nPIyxLSTZjSssv%2FSda6%2FOiG7lhgtI1TnSbjGaP5wf63PTlOzmzofg%2FhIbIgMgXVwfdrq6lSvRCW2ojfWfjwdyAhD4wX7k4M1173nuyYAvCzRGURB4lXgd4RhJtvfVla1%2BrEKfAXNRKF9qxZ5NWlxidMpxuEt3laZmAX1u3wXQgRxxqVsqbwQKFk%2B18fJlVjL1IigMNvY%2FsQGOqUB3GAh5hHG4L9570yj2laaCs%2FJaveeoOxhBzTKbRU6gPsgflgqGXkqugjvRI7r5JEDd16drB8MU2hDJ2Q1r2Q8mmSsB2pYuVrxJIJnN0H2GL169wCkngniUaNhARglgUvy0L%2Fl2cuDbaoyzo9d2R3JjXLr%2FbhmdWThs4uyr3i6CH%2B3O6z54TRK3Sr%2BYuNSKq5cKCrWarDrCDYy%2Blp%2F9hWMKcf0457n&X-Amz-Signature=af086720d575f41fc9180edbde6a1a87c19b17cc3f60e8b939150380cb672f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P4F3ZK3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCtnjv4jJyXx%2Fr%2B7Gh8h9NZeU%2BHcJwkYF18Lwi%2Bj8ehXwIgA51IaR%2Bw3hRRMaGx1l0ZtHzd7CKNKmVdyoxRXE3STyMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHVi4uQgITz4rswIiSrcAwGBt%2FUer%2Bn1LzDdnM7ZaD5MWo6QHPIw%2ByKGKXNYsarTxsENXCPwVD%2FFDeTPmme9mjyx1C6UR9attH2G6gWNWgi6AlF2JVbsEv%2Bd6O%2BUMxkqCNBIZX%2F0Ov%2B883RfCruah59%2BK5%2BbQMYGtz3dEHGVzB%2F8O%2BvWCfQ3J9vAlrdUsuEpMbXSzteJ1vzsCfoqjumq%2B9QmCiiz4njCoe7WU9WXB9xYyHTH4TYDsJJJX2IvXWHi9ABDFKN90VhA6dY1wEcgoslRbOgpKLTvPblksN%2BLm%2FmxF%2BgyYyY3zazRnSGWO8ACnHSJ3UmWhgdz%2BPcJIoPnRjUhfbieKu%2BlI5TZTG6ny%2B5VuOeqJXD2EeOxJqxEpZEgiIh7tMVq24BV9uFCQ%2FgOyXcJDPmfdLT00pf%2BPxLzz%2B0nmPZM9Jio0Smyphl5zJBG03aBb3r8kjbJAWTScLliV7xIJN2ImLoH9XZhnhKW8D7VmZiUNBBeYcpB03jMr7ba%2FIzQuUCq4L%2B5bxqbtS3N79v1i%2B2%2FZ5ui87HWU6KjhWIq6f1Ui%2FUT9i35UmSVUf8vZRQ%2B6Jeh4PpYXjLeI8fsUPIv3gco9SsQrNOgb3cJ5MlfT7QV1N58yK%2FzW%2F0Z4h6%2BHroKiFTEVTDr2VmPMIrY%2FsQGOqUBNJJG8Si5zBuN2EWgAW3YU5HKSvlpfs9JlE5VpdhJMCV%2FAowJJxlMPL75EXMJEMXNEN%2FZjXANmlSeYDc%2BGGSbK%2BmsN7Oz8%2FR8BfbDpnH3SFNozTz3sVEHNwblj7xwXA96ByK7CwqUIaonCbkwb%2B1rtFp9sjlif1nwzN7HF5xN5%2BHv1YMlunUqXeobInpJ2%2BqLq7TloKA0lm3o0%2FSJ%2BvIbDq4%2F%2BpyY&X-Amz-Signature=c66880fc7f994bf5713bb3c232b1ea42a37baa1245b8a1aefc7058807a204fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMKMHLDN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDmV69eDJbAjgducUKCVaN1OEUppdWhL9iP407yL061dwIhAJ8%2FQFfxCkYdq7GgStnTtSvX1%2BAI5EEQ6OERNpr6SiaAKv8DCGcQABoMNjM3NDIzMTgzODA1Igxj3LAxiBITi%2BzQgXEq3APKw329dYf8kSqsGs8Jo2TSscX5kEKsMfeZo53dMPIpfeP2hGcRVsbFnvnbNaPsD8LNZgHs%2BkkPZp3X3rsa4BELIGF5GRU7pmxDamzMASNwLetD4HTKyUk6iACZ79b8Vjgy7GcHkMMhH5VISsI%2BGNFR6ttM9a3WWnF0KKIKjAilA4bzFqKaVaABKRs8UyOCpB%2BCHPDeZz3MAvYEnd5h5EjBImRCO0Z7ILltTQDzffSgqm4kfggdDQ0UcQIHqPqTIn%2FO25q2IHC5KNyLTdlWt2WJrniqjei5rGLo7TWYNEihNPBJGg6x%2BqhdhDCBe139%2By3TkMZvXqmFvdMgUW%2Bvz7TR16bpa9Cbzn5xkAvrdNbQPTjtwYA5OIurJ9HGXGrqo5aks5%2Bx3aEni6%2BbTIkeyIUR37UJLIOmlQzn7kEJ6%2FqjO9Y3qQy5sag3hBEBtbwyMH%2Bc%2FfFmSY6X9BCMXaVF42VMm98axjw6%2Fzf4byzA3dynWrJ1ppeWUd7FszAQPnkPWLWwGg5iIwxU01ZQtma%2F1Te67or7cuERWS5OgDY%2FlMvKwjDE%2BJlRK%2Bu56h5n%2BtO8NyulVtP%2BBipzC1e7NptTJrCzS5V2o1Ci4PXlUi9yQbWnvPTApBxcvE%2F33HsPnjDu2P7EBjqkAR6tiXDorzpMk2ocWBt5MzBI0Urd1SFLoZBBAJUXFMhDDZqKbfe2Yvn8DoVJ8yfHQuqY4yM1xkcMETcPSk1%2FNQBfkAzrjUsgfLnkPSxrDfEfmZ91g23Kw4GXpqLXraAHsTECoFGECAzaMEcNLR%2F8gF95epe%2FFHdK8dt%2BLFYxCvkUWEEWKQKEWgmclTeEUbGpuM5qsfYxSekg6%2FV%2BcobHztvwSHLQ&X-Amz-Signature=ecae07a778b090af146ea199a33adf844ed43f43563648dbe8a62784a8ee076b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZEZ7HC3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIH8wJRycYAq89Hdu6oYfPgtYb2zVfc6FlZVB3ehYD6CCAiEAmctPMKVtWPwj0Ogam7ZubvU9PWYXx6yvjXFXQamaHXcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDlMeogLLJHOA8mqOCrcA18NpAw29WhhdceFTPZcK25XUouXE%2BzTUF5IXEq9ycw60bB7xzawbSu7VfSohRbvfwDPoiDFyZLLIHJm1tuw3oxzfNrlZiPd640smkNlyn1MLhK7Av503FR9i0zl54A6kwoFGs5vmRf4mGDqq7T9CxYtrY2P3Fa0E%2BNXkZnRCoXOE1X77537rvoamfBLOo7OcVh3kiORgWsbLWmwTfV4DD0XRWy6jmBkOA6Eb8qCQFIdZ2xiejEK9zT5QWQRy%2FSDpMrNhxR5Dp6s4THkbY27muTSAN2MNVx%2FynokfWmKeIIVSKZWhtW5kmH9JxTqXfoF9CgSTZyg0BUZLeqh74iWgRfgSp8%2BSd3DSi55t2q3uo6cfTjSwHgSRGZQgUEl10rgCj6%2FsCL%2BjrA5U6e5HflwMKpWRkMy7maBzv4bf7GUXCuxBr6eiQPO7r09nPIyxLSTZjSssv%2FSda6%2FOiG7lhgtI1TnSbjGaP5wf63PTlOzmzofg%2FhIbIgMgXVwfdrq6lSvRCW2ojfWfjwdyAhD4wX7k4M1173nuyYAvCzRGURB4lXgd4RhJtvfVla1%2BrEKfAXNRKF9qxZ5NWlxidMpxuEt3laZmAX1u3wXQgRxxqVsqbwQKFk%2B18fJlVjL1IigMNvY%2FsQGOqUB3GAh5hHG4L9570yj2laaCs%2FJaveeoOxhBzTKbRU6gPsgflgqGXkqugjvRI7r5JEDd16drB8MU2hDJ2Q1r2Q8mmSsB2pYuVrxJIJnN0H2GL169wCkngniUaNhARglgUvy0L%2Fl2cuDbaoyzo9d2R3JjXLr%2FbhmdWThs4uyr3i6CH%2B3O6z54TRK3Sr%2BYuNSKq5cKCrWarDrCDYy%2Blp%2F9hWMKcf0457n&X-Amz-Signature=74c8f69e5bdab10bf1b118e0551830d66f17a2485dfab0546f54cd6a2a427add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
