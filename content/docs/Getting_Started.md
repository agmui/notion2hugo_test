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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OYJDWYL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP6LFtPJ9gm1J7h%2Bot9oxlNMIKgfnebXp58RUwvh6CQgIhAMv4ARqygdTMQGBjOxKURBNnPObdqiUwrWWzxKX8Mgf9Kv8DCEMQABoMNjM3NDIzMTgzODA1Igz%2BWATtJ4NcMDFOVFYq3AO%2Bp559Xdf%2ByvJMSrVP2ZSVXzGHMYx2D2AaBUFxRvG5jwTOmyoiRcpz5IH4VCHjOeOZG9Bp4AV22Tmk%2F3kJMG42TayqWb8RffH8QHmrsGKI42s5TSgH2OcVQScrzEqh3AeH1kBpdO7UISyX0lliRSfOXdprzigF1SoCgCbYdE2Tlzt4ZjyJLHNBmuy%2FwWuo77MHl%2BDcaphQjbtS8y15q2SJz9edhDE9OyHok9UiDBCyd7PFleueI6eA5XS18NUc79%2FhMm%2FOKnqoreeASPlUvxNsP5lkVIpdjC84iy4usK0x6Jmdv8wKLMk9tb%2Bvt5RwK41FjDkrPvI7H53T%2BOVjyKn74LHivPZlBt9ApMnJDBCr23kT1K5gkacbBcBgfHCK896PYWpJFfRoGmQI8XYd1y8bsNvflfD9HOHzTsIUavVhsjy%2B9PJsZqmkw%2FtSlv76ZmJhG42gysofZimefm6FABknL76T%2BVBUntgziXmJJaq4kTLeJAy7PjFOl%2BQZLFyBddJ9%2Brh4WqaKPKCyLLY3IaXEipZxEyG59%2Bhbt3Nq0k%2FTuwEo6dQeGpms35x4mHAbDufOTHX6hfJOxMg7d54daOxXB8Z6dxRnarEYPinaBmPC85OsP%2B1qGjL8wf1vOTCo2LLABjqkAebwwzau4cUYEn22f2%2Be5%2By4Y88Gq8HarI1aio8%2B%2FZYD4sE1o7VODbA5Qx99Yc74qrMH%2BGqg%2FM5GVJvAEUJDUtnB3SzLgWHsi98fmTW7u30uIhMjiBQiek0S%2FjrrSl%2FNuEl7%2BJCpxKKgzMUBQh%2FeXgFwzKCnCYPNhENTwHWUssW3fAA5hCNjtlF8edHYf5xsiOJigK8gR2jjfgRbmPmTS9SRdf61&X-Amz-Signature=b44369d050f76e9f1257c8e7c3cf04c3c0a1b2c95dbc7dbcf056eaecda9a749c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OYJDWYL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP6LFtPJ9gm1J7h%2Bot9oxlNMIKgfnebXp58RUwvh6CQgIhAMv4ARqygdTMQGBjOxKURBNnPObdqiUwrWWzxKX8Mgf9Kv8DCEMQABoMNjM3NDIzMTgzODA1Igz%2BWATtJ4NcMDFOVFYq3AO%2Bp559Xdf%2ByvJMSrVP2ZSVXzGHMYx2D2AaBUFxRvG5jwTOmyoiRcpz5IH4VCHjOeOZG9Bp4AV22Tmk%2F3kJMG42TayqWb8RffH8QHmrsGKI42s5TSgH2OcVQScrzEqh3AeH1kBpdO7UISyX0lliRSfOXdprzigF1SoCgCbYdE2Tlzt4ZjyJLHNBmuy%2FwWuo77MHl%2BDcaphQjbtS8y15q2SJz9edhDE9OyHok9UiDBCyd7PFleueI6eA5XS18NUc79%2FhMm%2FOKnqoreeASPlUvxNsP5lkVIpdjC84iy4usK0x6Jmdv8wKLMk9tb%2Bvt5RwK41FjDkrPvI7H53T%2BOVjyKn74LHivPZlBt9ApMnJDBCr23kT1K5gkacbBcBgfHCK896PYWpJFfRoGmQI8XYd1y8bsNvflfD9HOHzTsIUavVhsjy%2B9PJsZqmkw%2FtSlv76ZmJhG42gysofZimefm6FABknL76T%2BVBUntgziXmJJaq4kTLeJAy7PjFOl%2BQZLFyBddJ9%2Brh4WqaKPKCyLLY3IaXEipZxEyG59%2Bhbt3Nq0k%2FTuwEo6dQeGpms35x4mHAbDufOTHX6hfJOxMg7d54daOxXB8Z6dxRnarEYPinaBmPC85OsP%2B1qGjL8wf1vOTCo2LLABjqkAebwwzau4cUYEn22f2%2Be5%2By4Y88Gq8HarI1aio8%2B%2FZYD4sE1o7VODbA5Qx99Yc74qrMH%2BGqg%2FM5GVJvAEUJDUtnB3SzLgWHsi98fmTW7u30uIhMjiBQiek0S%2FjrrSl%2FNuEl7%2BJCpxKKgzMUBQh%2FeXgFwzKCnCYPNhENTwHWUssW3fAA5hCNjtlF8edHYf5xsiOJigK8gR2jjfgRbmPmTS9SRdf61&X-Amz-Signature=7f76e7fffaa80f3b450d4bb8bdf6667ebec941b483506cee24045daa8f2b81fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUEUOGMR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi0MQxhceQMXJq2iB3LA6Cp8FwWFLOoAoczjpNvFAOIAiBdjbqv8WBOMyfJvY47dIenUfwBGT%2FxA%2F4R30j0wzKmyir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMZPqWzdS40PpIidusKtwDzEQX20M1ZMnBLvCoSsKltzF8X9RgyP7HffBvPPmVZFdNoDWiJYmZRWVimxQxjGysSZLKM8zTeVV2HmnlVywRABuX%2FF8TU9l1gV5wj08oU5nJs%2Fn4OQkQFE0IgBo0MG8QoYCIYE%2FqSku%2FWqxjQ9pddwkz1x6yuvSrmJ4X9opJU5lOM0SmXBK7Yl%2F2tCnMHZhX3nhd1lJO0T%2Bsn%2Fdw4KTRYfnUhj1X%2BjDdjxrtswN6OXDWTgGdRy8HMfsPG1UHaeizEE%2Bs7%2F5M4MCbM%2FI8%2F2WoR0UxMdGqq%2Fc9C1xe5s5kZa6FFoWceVA%2F79ioNhIn69tZQFaSmWHScbrfOL0JOU9pDfB003jcuRty58twjnLdhnH4lbZXyR%2FBzwdBDIkExXQYSKrn6faIGBDxkftxN3F0TwKMrTfTCYIakIfEEPS52Lav5o92oC%2Bwq%2BcgsOWjUs18QXNVkRlxoJBi8yIE5bVBiyhcaLamjHojnN5hOxVCWkmPbEUOjhBWv%2BnnB%2Ftr3oGeQQIXu0kbspqD3b%2BksCQv3FaP1DW%2BJAjYyu8V%2Fk%2FFYdt9SvEdOkbKO217siLxY8g2R00inKMX72O21h1%2BO9LuqJKs4rffMhxoBAb4lu17zdh3uEjWdaq8bkA30W8w86KzwAY6pgFI2B6X1ar0qbEsm41oE6KS8kHEAmx1J5JK6Tih2nnJ3qaRtTyUPEqD%2FA74t9LWuyhJd1gRo0iR06dQAwqRCZQfgUbNXbKi3kpxaguV3Xe%2BC29s6a%2Fm47uTWV9WTPkpzuC%2BUAd7REtNIAnXSchFKR41YM42AGm3tdJdFO7Qxs21%2BtDrBuqYoNfdhNMyRj5G1bAjDavhsgOeap65jyiRW5SuGSHu74wu&X-Amz-Signature=967045223ee05c98fdb046e7612b7022dbf417b7d37920aa1f344b740c28bbd4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIOOSRC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUZb2HQ0kvHjOvKX3tvh2boIaBuLB%2Fzya2tRyziauuaAiEAoyp54dtXTaGTIpIqpb3bt2mvnvrC7GXcgsgNwSS8mOgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMAflwsfmSo4hHzE9SrcA%2ByrTRq%2BbgY26WoG9xviM0xV2hciaXhuj3FJpuuqICI2zrlZXDhbbft5%2Flo%2BbjHiMHk3vxPmdLXfwXb7qpC4ufk2DWWhgJkPldCYwJ0Ys%2By80CZy5QeHje6FS8MUprROO5XKL%2BcC1xHT5AsJs0aCphgra%2Fmx5SL0oGif%2FO2SFypyBRo67LnqPyXj75b3lb0D75oeH5Ubmyr3mPBS547jetQr%2BlUChwSoP%2Bl5I%2B8m3kfzDuCtHpcujmZ1NsRAtjJb9k7MfqDj4JYaKj3%2FgHLdBOXlxXd478WyZVxm1rGU33swLsev5G3Hes%2BKEc8U25UPzK7uZHtgc58b1sapP2N4bVOtKdpIg9iULrHqIAYVFkgaicCsU0E%2BgeZiZ8B3xO6dcwGQStaArScnxLP50ii5ExsBg4R7yMh5RFbZ15WPaARgiuOUefZyv39RW6G29SAStJpRerdruj7whhtzT4U9u77%2BQvsunrJkvrcSmWcIutUI1Xutg3FYpAiw0Tk16MPcC8GR6HfAvoslXX3aVmEwNof6YJnVacUQoDCrnYiCGUoffXqura%2FDxJd4kCk0SF5mUYJIjhc1O%2Fz6yycdO38Vmjgdxissyd%2FjecN9RG2QANSvh6BLc0EIq7%2F98VB4MMyqs8AGOqUBCMJ2kG4e%2FptNB8mvuN5VkrYct2EOY8wiF8EFcvB4HKFzclXINt99u%2FutYXBvPdS4x1lTOUJZNvJAehrk0pMb0ZXHZb2jMXYRbCfyHXOxJvynwJ6nDI2qr3P6cCvf9VOHeqLt2JLv4rR8Okar7OwNgnFZgInm1wAbr%2BY3jeurBam7fi%2FdL73UT2HEcan8vz9xIzprJXpf8FHUZZeQmQ8vRjUpXZjz&X-Amz-Signature=26f32d7bd3eff9ac55b4524f05a0fdd37ed12de8b662273b883273f26b3415d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OYJDWYL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP6LFtPJ9gm1J7h%2Bot9oxlNMIKgfnebXp58RUwvh6CQgIhAMv4ARqygdTMQGBjOxKURBNnPObdqiUwrWWzxKX8Mgf9Kv8DCEMQABoMNjM3NDIzMTgzODA1Igz%2BWATtJ4NcMDFOVFYq3AO%2Bp559Xdf%2ByvJMSrVP2ZSVXzGHMYx2D2AaBUFxRvG5jwTOmyoiRcpz5IH4VCHjOeOZG9Bp4AV22Tmk%2F3kJMG42TayqWb8RffH8QHmrsGKI42s5TSgH2OcVQScrzEqh3AeH1kBpdO7UISyX0lliRSfOXdprzigF1SoCgCbYdE2Tlzt4ZjyJLHNBmuy%2FwWuo77MHl%2BDcaphQjbtS8y15q2SJz9edhDE9OyHok9UiDBCyd7PFleueI6eA5XS18NUc79%2FhMm%2FOKnqoreeASPlUvxNsP5lkVIpdjC84iy4usK0x6Jmdv8wKLMk9tb%2Bvt5RwK41FjDkrPvI7H53T%2BOVjyKn74LHivPZlBt9ApMnJDBCr23kT1K5gkacbBcBgfHCK896PYWpJFfRoGmQI8XYd1y8bsNvflfD9HOHzTsIUavVhsjy%2B9PJsZqmkw%2FtSlv76ZmJhG42gysofZimefm6FABknL76T%2BVBUntgziXmJJaq4kTLeJAy7PjFOl%2BQZLFyBddJ9%2Brh4WqaKPKCyLLY3IaXEipZxEyG59%2Bhbt3Nq0k%2FTuwEo6dQeGpms35x4mHAbDufOTHX6hfJOxMg7d54daOxXB8Z6dxRnarEYPinaBmPC85OsP%2B1qGjL8wf1vOTCo2LLABjqkAebwwzau4cUYEn22f2%2Be5%2By4Y88Gq8HarI1aio8%2B%2FZYD4sE1o7VODbA5Qx99Yc74qrMH%2BGqg%2FM5GVJvAEUJDUtnB3SzLgWHsi98fmTW7u30uIhMjiBQiek0S%2FjrrSl%2FNuEl7%2BJCpxKKgzMUBQh%2FeXgFwzKCnCYPNhENTwHWUssW3fAA5hCNjtlF8edHYf5xsiOJigK8gR2jjfgRbmPmTS9SRdf61&X-Amz-Signature=7dc3f497c48f22a73ab9f83ec191693cb1bd8a8a3b945264c7113d81f57208dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
