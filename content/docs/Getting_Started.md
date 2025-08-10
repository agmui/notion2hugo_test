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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRLYU36%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5Fe6iA86TVIsuk1Zi%2FqCKpd1wtF1I3%2BpJXjWfqh%2FSnwIgGsJWUCMtYzVgk%2BtCv1pzFfyWwHBoJB%2BaVlsYQT7OQuEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKumVUHwqRDr6GgXrSrcA55gX5Cc0OLAKJGoKKt2N6rgbkKn3dIPn6TXPXQLGoQdhuSs5eV3gDTKucu8A8w9VMV5Py%2Fcl4Crjf1Ki0Ovyo1RYEu52jfaA8E5r0iDGUZboCHefZLKWcswajEB6khD5By8f%2BjPqLQdiKRWYnJYBgORb96T%2BWVVPysj%2F%2FlEu4j8U5WnyaFtDzbBiTHFFtqgp4mOW9koJ%2F%2FB5G8KkHTHK607c4wFRRtbAXW8OB%2FScn5I2Cttb4Olg3Mk0SGbf6swOShe4PuyL4JiuuDL2hk%2Bd1rP7MvjlG4koWFKD0DA01dPwYXmjp31Xgc8P6VKXQVKV0PkRzoAySPxMveIRSUcbxjUsulKNE3KJEYZpJJ%2BPeeQ%2Bz9mRvQYzaVaAhkuuqbYIajpXWa7z%2F3EJLhtyjrq%2BzB%2F3byfsKfmLDC4FGSZzdUHsOAVWyTsgYHaFb%2FpXwPo1cKQzSrtzsgFUnqhDQEh8%2Bk6dS64gqOHfI4av16H1gttC0Ek1PDymFkMYNWnrbx63MiyQwyjURyJQPSjlytnxtnRLy5TdV77ZQ0lHssauJKnx3HqslDz8wQLL%2FuwaCYCp8wDiByPk5fUpS2%2FWen1vt%2F94ViAb1RcOfcyNO4XZ%2BCrNG%2BG1szaDt%2BjTbD1MI2748QGOqUBCtjtYA5twh2%2FrkFxZn8QACeVTvGlkLZABwS8SgB8xkqYnqhQq7SRmoiJZMRpuFDvgMOx%2FdPoWkLl5fuSLq0Jx3xz2fMR2hs1GDz%2BLI%2FPgq%2Ba%2F2QxhdNd4IVxxcCEel7BGMjBXcbr9HUAYQeX7LmslIe3V2x22DVVJd9SnD%2FTLs2sUiOB9P5Q1pqaUOE83epiuTvMGAjpYprV2vQZFrs4npjyGdiB&X-Amz-Signature=2558e2d5e7ed498c2eeb8205dcc94003e59e899386c053e33f0950b0e531700b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRLYU36%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5Fe6iA86TVIsuk1Zi%2FqCKpd1wtF1I3%2BpJXjWfqh%2FSnwIgGsJWUCMtYzVgk%2BtCv1pzFfyWwHBoJB%2BaVlsYQT7OQuEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKumVUHwqRDr6GgXrSrcA55gX5Cc0OLAKJGoKKt2N6rgbkKn3dIPn6TXPXQLGoQdhuSs5eV3gDTKucu8A8w9VMV5Py%2Fcl4Crjf1Ki0Ovyo1RYEu52jfaA8E5r0iDGUZboCHefZLKWcswajEB6khD5By8f%2BjPqLQdiKRWYnJYBgORb96T%2BWVVPysj%2F%2FlEu4j8U5WnyaFtDzbBiTHFFtqgp4mOW9koJ%2F%2FB5G8KkHTHK607c4wFRRtbAXW8OB%2FScn5I2Cttb4Olg3Mk0SGbf6swOShe4PuyL4JiuuDL2hk%2Bd1rP7MvjlG4koWFKD0DA01dPwYXmjp31Xgc8P6VKXQVKV0PkRzoAySPxMveIRSUcbxjUsulKNE3KJEYZpJJ%2BPeeQ%2Bz9mRvQYzaVaAhkuuqbYIajpXWa7z%2F3EJLhtyjrq%2BzB%2F3byfsKfmLDC4FGSZzdUHsOAVWyTsgYHaFb%2FpXwPo1cKQzSrtzsgFUnqhDQEh8%2Bk6dS64gqOHfI4av16H1gttC0Ek1PDymFkMYNWnrbx63MiyQwyjURyJQPSjlytnxtnRLy5TdV77ZQ0lHssauJKnx3HqslDz8wQLL%2FuwaCYCp8wDiByPk5fUpS2%2FWen1vt%2F94ViAb1RcOfcyNO4XZ%2BCrNG%2BG1szaDt%2BjTbD1MI2748QGOqUBCtjtYA5twh2%2FrkFxZn8QACeVTvGlkLZABwS8SgB8xkqYnqhQq7SRmoiJZMRpuFDvgMOx%2FdPoWkLl5fuSLq0Jx3xz2fMR2hs1GDz%2BLI%2FPgq%2Ba%2F2QxhdNd4IVxxcCEel7BGMjBXcbr9HUAYQeX7LmslIe3V2x22DVVJd9SnD%2FTLs2sUiOB9P5Q1pqaUOE83epiuTvMGAjpYprV2vQZFrs4npjyGdiB&X-Amz-Signature=fef759c71238f42d2231bc6515bcec347f1b6ef1541dca6ce488d3445acd85cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRLYU36%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5Fe6iA86TVIsuk1Zi%2FqCKpd1wtF1I3%2BpJXjWfqh%2FSnwIgGsJWUCMtYzVgk%2BtCv1pzFfyWwHBoJB%2BaVlsYQT7OQuEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKumVUHwqRDr6GgXrSrcA55gX5Cc0OLAKJGoKKt2N6rgbkKn3dIPn6TXPXQLGoQdhuSs5eV3gDTKucu8A8w9VMV5Py%2Fcl4Crjf1Ki0Ovyo1RYEu52jfaA8E5r0iDGUZboCHefZLKWcswajEB6khD5By8f%2BjPqLQdiKRWYnJYBgORb96T%2BWVVPysj%2F%2FlEu4j8U5WnyaFtDzbBiTHFFtqgp4mOW9koJ%2F%2FB5G8KkHTHK607c4wFRRtbAXW8OB%2FScn5I2Cttb4Olg3Mk0SGbf6swOShe4PuyL4JiuuDL2hk%2Bd1rP7MvjlG4koWFKD0DA01dPwYXmjp31Xgc8P6VKXQVKV0PkRzoAySPxMveIRSUcbxjUsulKNE3KJEYZpJJ%2BPeeQ%2Bz9mRvQYzaVaAhkuuqbYIajpXWa7z%2F3EJLhtyjrq%2BzB%2F3byfsKfmLDC4FGSZzdUHsOAVWyTsgYHaFb%2FpXwPo1cKQzSrtzsgFUnqhDQEh8%2Bk6dS64gqOHfI4av16H1gttC0Ek1PDymFkMYNWnrbx63MiyQwyjURyJQPSjlytnxtnRLy5TdV77ZQ0lHssauJKnx3HqslDz8wQLL%2FuwaCYCp8wDiByPk5fUpS2%2FWen1vt%2F94ViAb1RcOfcyNO4XZ%2BCrNG%2BG1szaDt%2BjTbD1MI2748QGOqUBCtjtYA5twh2%2FrkFxZn8QACeVTvGlkLZABwS8SgB8xkqYnqhQq7SRmoiJZMRpuFDvgMOx%2FdPoWkLl5fuSLq0Jx3xz2fMR2hs1GDz%2BLI%2FPgq%2Ba%2F2QxhdNd4IVxxcCEel7BGMjBXcbr9HUAYQeX7LmslIe3V2x22DVVJd9SnD%2FTLs2sUiOB9P5Q1pqaUOE83epiuTvMGAjpYprV2vQZFrs4npjyGdiB&X-Amz-Signature=395e421ccbc283519d7d96252b8ff7f79cb9150ca35c49e8a57db661950d777b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQIB6BM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvr9YAeR70QphCu5zS7RTCcylJFNvGjDom0hWbQNd%2BnAiEAkUXQYhSEQeJfnYklJuIJppQPrWhJrFDUfOPvGP6jZ7cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMW5UNQcrDqhsXyKJyrcA8OBxgegyZyF3qmOH5v0VUYUSZiBGnxoMNq%2F0nTPs31kGKzdO0N43XggXJ9RMIYjY2tmAsDIFQPQwhrRwkzH%2BWjiy8H7896tMUvrpkqOjVav%2BDCoD8N%2BBJ7T1AAK3p8cA361eKVS0RC7zCJvwD3g7wAdrZ6YqJSwbtACrnN9iXeC7Y7YI1L65BgjSPmes7HBs25pyrhrZHaWtr%2FkHEAVN9YI077BWOFS4Zy57IkzQsfcBWIq3n7FypSpSK9dwHIVFN284hfmKapyDFWW4hLwNqGVT1y6owVq8uYiCzre%2F%2BvNSoORly%2By3vwwVZtgZlLA%2FVEC6VVCOBmI4ioiKz5w1n2VREX1js9ZBO5w53bkofbeAom0QIM03adrksiBCvWzwai3C83cD4DTSbNQ7617MQO4AawnJC%2BhCMWYEsUGXOjWOWli3R%2FmJ5lRP%2Bc9gk03DCCwVSHnd3htEBcbt0c5JPRlE7jBCyKZ1yZrB03RxlFyZSxcQV1B%2B2FQ3tgW6FEE9LFDQYboUhzIgTAaEWjbDodwlTSfcsZ0TXezuWx2psb0yf3P5og2XJUhTXMKbEe16PxaVjWwPRBXKUPlIWa2PQONcHUuTUcIQvI5VA4%2FigompUSw7v7hY5ecUe0GMP6648QGOqUBCTjYf67vyiLfKkIOkXmWvqtiQDMJK4YmxYJ%2BRYQv6cNfPb9VmZE6MOSc8p5NAtxiCoayhmhb6qX4a03OgYpaxutl7ydSWg%2BoTCd45EhGJJZRnxV7DexhaXu%2FtpYgazOFzy7Ujf6E2bsHgq3aIhaB8%2B4AHcrvRw4m%2FLltdSgSnVbD98OA8A7yUmbGMriE%2F2ks8ZSGBjxjV1aFj7Z%2B02iddE2QEkGw&X-Amz-Signature=24472c0f3798f4b1b84a2e6f00c322018803fea407542e208c0d6ff5d04ff0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CWW5WN7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRfLRWAH8%2BMGk6R3pPscf0fsYqiNupFkayuUi9QQnbjQIhAKOqxtXvQukP9I0codt6%2BkUzWVHDpuVyXjU1XJy%2B21i1KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjY60Fppww74zFc6oq3AMo%2BzFgIdq6HMNsf6m49nShEMYC5TNJ%2Fq2IP0Wavfs8PIQIQ4B2v3BJXZ7MzKFF5HEibq%2BMIfqybVGplR9OmVJFoWtMfticln3L2UoT9z9uwchWf9%2BiYIi4wNSQ8mEYl6eP6hZeCq7vu1iOa41KJvSDKd%2F30l2lDlHU8cF1aIj9wLbqkWGhRyF54u0VoUYqNsC6uOtCVtyD7XAfpskNn4b41m4QiEH8rud%2BRX4nzqx%2FdWdNxhlDw3z12uXErzqjFgFLRsELH6ilpVqptjoEMSLfeKsZRncUeMgx%2B0q97%2Fjw5mZmv8phYAmO%2ByVqygHKM80UcdwWsp7s%2FPZoTqcMC6nD0tqCALNt5YTAjlIWxyxxtJxSRg6AX%2B2Z5rsG9DuK1DRsVfHQ3RCKD2ZWuojemOOWbmORcFSo%2B%2BGwSHEGQXXSzrHEJnHC%2BHoZPA%2F5dZYoTyFBHYeBhYtrfb6j%2BKDgGm6SLYgGunuMC24PzpY%2FiA8QfFMIXDAd2EnHep8jBd7hqYZmAXnuo9IH7RTEVd8oLVyPr95VeDEWzfzdPhoc0zsfWPfuCudCgwd7TZy2XEOXxe5FLEkyEenCO5Cyr8cEzupqBNOeD5%2Bmie4Krw4YLtq3OgWoXs5iDXxWeaB05DD8uuPEBjqkAaywvtO0tr75iquP8Xi6TZBg6S9dU1wfis71D%2F1vCi8OGBwrDxBXI4tkHaXUUQ9%2BX60DA7CngrgkS4Ng8M88o9bCOGMFnQH%2Bo%2BlRqM2qJRfcKZRqw6Ui3cXH5b9Jgi8XgRshfCj9dA9r1yegFBzAdUcSYXrNIcPFI8ophNzPZO1SGklpeaM9Qq6xbyySoyAEwqjFgWtCGfpjVt86oBI5gzKICfB4&X-Amz-Signature=218695e1b460a46b19ecc93854c37b919f5038b769a7e30d85a5c3d07dd1643a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRLYU36%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5Fe6iA86TVIsuk1Zi%2FqCKpd1wtF1I3%2BpJXjWfqh%2FSnwIgGsJWUCMtYzVgk%2BtCv1pzFfyWwHBoJB%2BaVlsYQT7OQuEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKumVUHwqRDr6GgXrSrcA55gX5Cc0OLAKJGoKKt2N6rgbkKn3dIPn6TXPXQLGoQdhuSs5eV3gDTKucu8A8w9VMV5Py%2Fcl4Crjf1Ki0Ovyo1RYEu52jfaA8E5r0iDGUZboCHefZLKWcswajEB6khD5By8f%2BjPqLQdiKRWYnJYBgORb96T%2BWVVPysj%2F%2FlEu4j8U5WnyaFtDzbBiTHFFtqgp4mOW9koJ%2F%2FB5G8KkHTHK607c4wFRRtbAXW8OB%2FScn5I2Cttb4Olg3Mk0SGbf6swOShe4PuyL4JiuuDL2hk%2Bd1rP7MvjlG4koWFKD0DA01dPwYXmjp31Xgc8P6VKXQVKV0PkRzoAySPxMveIRSUcbxjUsulKNE3KJEYZpJJ%2BPeeQ%2Bz9mRvQYzaVaAhkuuqbYIajpXWa7z%2F3EJLhtyjrq%2BzB%2F3byfsKfmLDC4FGSZzdUHsOAVWyTsgYHaFb%2FpXwPo1cKQzSrtzsgFUnqhDQEh8%2Bk6dS64gqOHfI4av16H1gttC0Ek1PDymFkMYNWnrbx63MiyQwyjURyJQPSjlytnxtnRLy5TdV77ZQ0lHssauJKnx3HqslDz8wQLL%2FuwaCYCp8wDiByPk5fUpS2%2FWen1vt%2F94ViAb1RcOfcyNO4XZ%2BCrNG%2BG1szaDt%2BjTbD1MI2748QGOqUBCtjtYA5twh2%2FrkFxZn8QACeVTvGlkLZABwS8SgB8xkqYnqhQq7SRmoiJZMRpuFDvgMOx%2FdPoWkLl5fuSLq0Jx3xz2fMR2hs1GDz%2BLI%2FPgq%2Ba%2F2QxhdNd4IVxxcCEel7BGMjBXcbr9HUAYQeX7LmslIe3V2x22DVVJd9SnD%2FTLs2sUiOB9P5Q1pqaUOE83epiuTvMGAjpYprV2vQZFrs4npjyGdiB&X-Amz-Signature=f481eb1446ffffdca2e5e289d02b1f792fb79d8704f937bf4d2b7499504ad0f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
