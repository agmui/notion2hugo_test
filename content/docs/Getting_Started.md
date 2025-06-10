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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST43LUKY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ51itv2TIeN4bfJAURPO7R4qPA9k8LmmBd6CwsNkpSAIhAKnx5r%2FkjQM%2BnAQpov7lDtGoUVAybSBrmwDR0xMkKOY3KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyTgC9TdWRophlSBkq3AOyjSKN8reKem9GK9aYTBW2WS7nGMa4XuDgr3C40TbQYNa9jTkQm%2F09x7hDaoSf9wrtMmSajyR73m4hdcWXus08D1UGlWca4eJthrkmrQJH%2F5lCqcEi6YMEA%2F%2Fz%2F1hR8dF3B9ghN91bnNEKENR8vKLyxJytQbk0p8QhX3Ym4fOho4XcPi1XtW7DBPLg%2FAnYyLwC3%2FH5jIO0OpYwpJE3eeezXkRD%2F%2F4acLq9eSBs9yrGi69ZkYmfhvFXzBgnBPILUZ9DPdLMW38wL%2FJsY0Z0cVcgOrWH4BXUbWtcE3K2bClBHi78H%2FwdgC2vXnCu%2B7TGtMKJixJnlSB7kF495dSHcOS9PAZGTTx0CnR87tEbEgQSpKdO%2FZXI1kueMwCJQBJVQnpLA4zxawdxtM71NxQ%2FvpFLndVnV78hll8QiH%2FpU%2FlevOoFodgIojosfqcn4ORXrRyg7Gq2xBncJ4uyMSyWUXXJBoJ3rQYgXb6BKz7%2BGz4t%2FASKOQorT%2FMSG5cykeGarGsW8djpVDIWfc0jZhyN4tOHl4Ty2u8l2F3%2BV2VdHv40BDaaX5NUnMVOgz9PgWNxyHHpljtvJzL6rj%2BqsmAr2G3LBAyOAx5RAjFrDaKObgBRwWJxd6Zr387zovjWtTCYs6LCBjqkAVTeoamXaINMHnvxkwEMPGIVjJ4E8ozh7IONSbPwPIpdVA9UTGQ%2BhVEmiQGZQdfUdQWgy8B%2FrWX4w1qMzb58oYIw37AwnKYk%2F72deUnfenJdNHAWib5QZWldMJNuHhmOCQRwMhpS%2FpJW1O%2BfKoXZ7OebnwQwYTHBVZVRuEIMC0gzOqbvLfgZl1rGx6iH3mAMEUDPBKnOngJwdPA%2FQvgF6FOPk3XG&X-Amz-Signature=2e8f29e9fa9703edf16959174df1a97c3fda658b7a4d4b3413020960fde9e385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST43LUKY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ51itv2TIeN4bfJAURPO7R4qPA9k8LmmBd6CwsNkpSAIhAKnx5r%2FkjQM%2BnAQpov7lDtGoUVAybSBrmwDR0xMkKOY3KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyTgC9TdWRophlSBkq3AOyjSKN8reKem9GK9aYTBW2WS7nGMa4XuDgr3C40TbQYNa9jTkQm%2F09x7hDaoSf9wrtMmSajyR73m4hdcWXus08D1UGlWca4eJthrkmrQJH%2F5lCqcEi6YMEA%2F%2Fz%2F1hR8dF3B9ghN91bnNEKENR8vKLyxJytQbk0p8QhX3Ym4fOho4XcPi1XtW7DBPLg%2FAnYyLwC3%2FH5jIO0OpYwpJE3eeezXkRD%2F%2F4acLq9eSBs9yrGi69ZkYmfhvFXzBgnBPILUZ9DPdLMW38wL%2FJsY0Z0cVcgOrWH4BXUbWtcE3K2bClBHi78H%2FwdgC2vXnCu%2B7TGtMKJixJnlSB7kF495dSHcOS9PAZGTTx0CnR87tEbEgQSpKdO%2FZXI1kueMwCJQBJVQnpLA4zxawdxtM71NxQ%2FvpFLndVnV78hll8QiH%2FpU%2FlevOoFodgIojosfqcn4ORXrRyg7Gq2xBncJ4uyMSyWUXXJBoJ3rQYgXb6BKz7%2BGz4t%2FASKOQorT%2FMSG5cykeGarGsW8djpVDIWfc0jZhyN4tOHl4Ty2u8l2F3%2BV2VdHv40BDaaX5NUnMVOgz9PgWNxyHHpljtvJzL6rj%2BqsmAr2G3LBAyOAx5RAjFrDaKObgBRwWJxd6Zr387zovjWtTCYs6LCBjqkAVTeoamXaINMHnvxkwEMPGIVjJ4E8ozh7IONSbPwPIpdVA9UTGQ%2BhVEmiQGZQdfUdQWgy8B%2FrWX4w1qMzb58oYIw37AwnKYk%2F72deUnfenJdNHAWib5QZWldMJNuHhmOCQRwMhpS%2FpJW1O%2BfKoXZ7OebnwQwYTHBVZVRuEIMC0gzOqbvLfgZl1rGx6iH3mAMEUDPBKnOngJwdPA%2FQvgF6FOPk3XG&X-Amz-Signature=5841f3c40aa5dad1480dc2de03ee0f5be24cb0fbb02711197f2114ea813b10c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST43LUKY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ51itv2TIeN4bfJAURPO7R4qPA9k8LmmBd6CwsNkpSAIhAKnx5r%2FkjQM%2BnAQpov7lDtGoUVAybSBrmwDR0xMkKOY3KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyTgC9TdWRophlSBkq3AOyjSKN8reKem9GK9aYTBW2WS7nGMa4XuDgr3C40TbQYNa9jTkQm%2F09x7hDaoSf9wrtMmSajyR73m4hdcWXus08D1UGlWca4eJthrkmrQJH%2F5lCqcEi6YMEA%2F%2Fz%2F1hR8dF3B9ghN91bnNEKENR8vKLyxJytQbk0p8QhX3Ym4fOho4XcPi1XtW7DBPLg%2FAnYyLwC3%2FH5jIO0OpYwpJE3eeezXkRD%2F%2F4acLq9eSBs9yrGi69ZkYmfhvFXzBgnBPILUZ9DPdLMW38wL%2FJsY0Z0cVcgOrWH4BXUbWtcE3K2bClBHi78H%2FwdgC2vXnCu%2B7TGtMKJixJnlSB7kF495dSHcOS9PAZGTTx0CnR87tEbEgQSpKdO%2FZXI1kueMwCJQBJVQnpLA4zxawdxtM71NxQ%2FvpFLndVnV78hll8QiH%2FpU%2FlevOoFodgIojosfqcn4ORXrRyg7Gq2xBncJ4uyMSyWUXXJBoJ3rQYgXb6BKz7%2BGz4t%2FASKOQorT%2FMSG5cykeGarGsW8djpVDIWfc0jZhyN4tOHl4Ty2u8l2F3%2BV2VdHv40BDaaX5NUnMVOgz9PgWNxyHHpljtvJzL6rj%2BqsmAr2G3LBAyOAx5RAjFrDaKObgBRwWJxd6Zr387zovjWtTCYs6LCBjqkAVTeoamXaINMHnvxkwEMPGIVjJ4E8ozh7IONSbPwPIpdVA9UTGQ%2BhVEmiQGZQdfUdQWgy8B%2FrWX4w1qMzb58oYIw37AwnKYk%2F72deUnfenJdNHAWib5QZWldMJNuHhmOCQRwMhpS%2FpJW1O%2BfKoXZ7OebnwQwYTHBVZVRuEIMC0gzOqbvLfgZl1rGx6iH3mAMEUDPBKnOngJwdPA%2FQvgF6FOPk3XG&X-Amz-Signature=d5e6ad42884cf330a2be7f086c137d8bf57989f49cad694719bd9fa714130a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MZEBBI%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExtouLTubqtruNycCYy%2Fr0k%2BIGzuc6401jxvISsA%2F3VAiEA%2B%2BXe2eRkXBuRReL7m659sYI0Gt7JueBELkUu%2B9KMewQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbQICDdS%2ByCcuJ2YCrcA6m1r92lvopHyRg8Vn9g9Kfg6%2BiStByY401bdVy%2BdVsALwjrFd2RvcCC2zo5ov4sX6TULfBZjWZzGSpjCkLEk%2F9q3NnoHaQXq9D2NXBTPYY0J7sm%2Bga517Zv8WMP%2BZyLX67NZAy2AzocnF5zaEf%2F5hX7fzKqDHFajmRiSDQp3xAZ4rRQEfLZDIbNOlemIOzGUH%2FIFAE%2B3DibojAAU1yApAckarcWowHFLhlSspQQZxwEwML6mb%2BjAFf88SeriNpGCIovqSHNn7Sb1pMGiyyag2g%2FDdEoojlBvZ%2BpGZFv9j0PnKwuerC4Asf6%2Bxa%2BE4AAjdq3sDDKy2x169uabbtXJQ5T%2Byf%2F9uoR09j2y5Q7aKZmIKJKJQhwXIJ%2BiCCuHW3ckyeqn7fwwNhS1pPpgMvCh3FNJtuZF%2BILZQXz%2FrDJxgpOIBmjWckSjPudv2GnSPYDNP2iC4rxDF9Bo7ARlNnrH%2BEEoIY9MDwzdJYTdAtcbxQRrZKBbOlMrKLu%2BJlV6LHqpZWSyWkPTPEr72ft7s1q0LDKqr1BonOx3QzYD97guR%2F2xvydLzQJVWhssWm2luSAyNxYMIGRvB9lK%2F1r65Yx%2FLgt8o4J%2Fdn4ibJeKqLMR97tXP0Hx09NhBgqbRLBML%2BzosIGOqUBploSsjmPggEZFm9Jb6M2%2B%2F97qwKkGAak%2FAwG6xeOjxwpMQlQ5wpvWcTBqRRKSv5ChCby50%2BYVBlK2m9elv0VcLrNBRJkm74R1FJUHa9GnNPxJ4FZnFamaHgmExZetc1MsP4uuZFX%2BOe2nMsbuptlGfCUoyXB%2BziA%2BLcK651mq%2FRlJYnrXNBnQYILQeN2lRNw5Bch53gwaOIlsVNaqRFwiT5V9gMn&X-Amz-Signature=817bcd60ac1a5621a6cf82f0a7a6d561d74e199271e6cf6698c64a520cf6ede3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YL5T5NF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpUKgdP1cWCRsK4HYd5UhdAPpuoTCN5uJI6dHrE9LSTgIgePgVAqylHCEqqqaxpwWEdR0CBnyGyyItrCckySbLB%2FQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPM%2BG%2BXuf%2FhcGplp2CrcA4JtvDLipOjo1SooykmZ39I%2FAW0TA0DtI0ncSgoZsoXhA40b8PBAdMe6fZnb6QofMDyGduqC0R%2FWm8nP4deGBM9fY4dAhV2ZFCM4dyiTQvfIppdSyxFgXKm9dV2fRpbmnEkhUpscAsWYfKLHFiposHlt2x1tkwFvDxFLzFPYpDDNBfeKC3vfuhSUP644DhA9NMpykQEkZHvHkk9akaOm4c8HuwgPKOrcPoNUCbNapHIP77ee0SCZ%2BvaMJZa1y5KVAq8S0xqCU%2BUUDYibODUV0eZFfY71BVpd9LZprfICQSCIbl5b0NVjGnOI8S3El578j%2FJkxujaJqDjYDOHU3djuH0GmKMGp8wblV3BIXrqLfgHU1Oav5z1bYkqDk6lIwRr%2BILlkeHRMEjsaeDHPYjc2azKoqNZabRqB2Bx0fUFsMQ4R%2BMqgKeY266H2nszL%2Fb5jBm9xossltWOk9kveulbPxV%2FEWgZvKuptX0Cnd%2FLbAq2%2BNG4zY%2Fqj0uDZV57Qc%2F8CWMWzzWv3CyUptv3ByGm%2BsegR%2BHbJqWsn7ROrfqzUA6IRr1sXEOCJOe8B4pnTpycf2DTtFwNd%2F9XGAVNIymPtybLkZLxV0EPlXdv47SxAt5n9MwSlSCSuSHHlx1dMKKzosIGOqUBWkCV9fNuietSVfIFaNVLy%2B8puMmAhCbjKroaxFw6XZE2NaD4wUJpahrG9WunYfP0xefEMaFg48Nu1YxeNUIzc5ao12XcTIlLTZpMMsII9zv41Mv3wd7iAMWAD33O%2BAeKQUiFgOFqmTUrwm9fiCHMnJ1Zmqd8VpxCjLwZLBBC4Sq2lpvBce32teG22Gfe1Z0EoGP9U9ZSxaq%2BWX%2BPfSaE6pdjMPe7&X-Amz-Signature=47c1dd44189f8607277ec1e77fc4c1fd2ec1d486a5d8a3e3653f41d4a686570e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST43LUKY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ51itv2TIeN4bfJAURPO7R4qPA9k8LmmBd6CwsNkpSAIhAKnx5r%2FkjQM%2BnAQpov7lDtGoUVAybSBrmwDR0xMkKOY3KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyTgC9TdWRophlSBkq3AOyjSKN8reKem9GK9aYTBW2WS7nGMa4XuDgr3C40TbQYNa9jTkQm%2F09x7hDaoSf9wrtMmSajyR73m4hdcWXus08D1UGlWca4eJthrkmrQJH%2F5lCqcEi6YMEA%2F%2Fz%2F1hR8dF3B9ghN91bnNEKENR8vKLyxJytQbk0p8QhX3Ym4fOho4XcPi1XtW7DBPLg%2FAnYyLwC3%2FH5jIO0OpYwpJE3eeezXkRD%2F%2F4acLq9eSBs9yrGi69ZkYmfhvFXzBgnBPILUZ9DPdLMW38wL%2FJsY0Z0cVcgOrWH4BXUbWtcE3K2bClBHi78H%2FwdgC2vXnCu%2B7TGtMKJixJnlSB7kF495dSHcOS9PAZGTTx0CnR87tEbEgQSpKdO%2FZXI1kueMwCJQBJVQnpLA4zxawdxtM71NxQ%2FvpFLndVnV78hll8QiH%2FpU%2FlevOoFodgIojosfqcn4ORXrRyg7Gq2xBncJ4uyMSyWUXXJBoJ3rQYgXb6BKz7%2BGz4t%2FASKOQorT%2FMSG5cykeGarGsW8djpVDIWfc0jZhyN4tOHl4Ty2u8l2F3%2BV2VdHv40BDaaX5NUnMVOgz9PgWNxyHHpljtvJzL6rj%2BqsmAr2G3LBAyOAx5RAjFrDaKObgBRwWJxd6Zr387zovjWtTCYs6LCBjqkAVTeoamXaINMHnvxkwEMPGIVjJ4E8ozh7IONSbPwPIpdVA9UTGQ%2BhVEmiQGZQdfUdQWgy8B%2FrWX4w1qMzb58oYIw37AwnKYk%2F72deUnfenJdNHAWib5QZWldMJNuHhmOCQRwMhpS%2FpJW1O%2BfKoXZ7OebnwQwYTHBVZVRuEIMC0gzOqbvLfgZl1rGx6iH3mAMEUDPBKnOngJwdPA%2FQvgF6FOPk3XG&X-Amz-Signature=6b419ba472ed9aaeb3a8cecb5ed7a04a02e56a8824258286d1a24f785bb56e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
