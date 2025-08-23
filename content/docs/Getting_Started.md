---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GWXHYHE%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZ9Jlabq%2BZ28j6p1VH6EYNBDd%2Bd%2BDMkKTl3Jeb1XPoTAiB8PoQxlR6PHIbZv2TDH14%2BxgSqodm41BZmNekbPI0HWCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMET53dZErHnYw%2B8EgKtwDMPnkPWdQ%2FukAwXtkuB5LcPUmqbxTtv4%2FTkTHqY%2F3akur2aRRpkkcEDpyCZL4EXn6OhxJma7osjovFL5BZgZV41x3Q20t3wZXCYA2DgKI3pg2z1YbwHMtmsWQPDPK%2Bs7xC6ioV0FHWZYuodJnYdWJ1ksP0hurN8r0yGwKpGEVzqeF5jHS3sTMDMvLFA%2BVHpU9YPzuIxhvpVs2VC%2F9aSQWhrrLDaVJaPbY25yOjDRFxreomA5tlH%2FNDxlVG3MuJV6efnDisJ5U6VAYRyMxKYB9q1qr4pCwhGNqF9%2FW0xwKMXn2LvRpVAFgZ3z6MfIY4HkPnYwYct3%2F%2B9UVPeJLjdLCutVMKay0%2FPHZ16gr2TI33TVnM3E66nz4en2YcUr2ZTGLZDcvWrtSo9cGx2%2BFQEZ3W3df%2BBEoSnecfdRmyBGs76Lq7SsboIGF0oIdX3rPJR5Q2roIQZyZGZuHdddZtZrxX0iaS1u1vQKgr6S6s2d6IZ2rAxEtM9HIHNy8aiY4qXpLIVgidRdSE2arK%2FH2XZtxAJS9%2FOS9y0aeBqUl%2B681gbK4abBB6osryFVtE6FLONrqdg0kS5Vpef2PowKeVMPc5I06F8wvtJpLuT0deLElntgeRMq%2FPfVtFte662Mw7Y6kxQY6pgGFfzmkJ35jH6P1PQXsDI0N854QBcMtKBuuha9teOCbSWtbaZewkpQVl4OnUKj0JiO7hLj27wEY%2B3QwA6F24uHG29XFY%2F6st2mAolfh14fd2rFoXwuWhE1VbZ%2Fu52hPcmJ59WqowI%2Fe66hmUzEV6iAYUUpFl%2FAegZDbHcN8xeKs6FREw8Nf2GeKox%2FJR5Lzy9%2FA3MgzWssVMA08t%2FH%2FCKyrbzmhCaj1&X-Amz-Signature=875de6f85999d70005a4ee3d0560497a12e04ca674d5f28c6a51f4f6d275a414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GWXHYHE%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZ9Jlabq%2BZ28j6p1VH6EYNBDd%2Bd%2BDMkKTl3Jeb1XPoTAiB8PoQxlR6PHIbZv2TDH14%2BxgSqodm41BZmNekbPI0HWCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMET53dZErHnYw%2B8EgKtwDMPnkPWdQ%2FukAwXtkuB5LcPUmqbxTtv4%2FTkTHqY%2F3akur2aRRpkkcEDpyCZL4EXn6OhxJma7osjovFL5BZgZV41x3Q20t3wZXCYA2DgKI3pg2z1YbwHMtmsWQPDPK%2Bs7xC6ioV0FHWZYuodJnYdWJ1ksP0hurN8r0yGwKpGEVzqeF5jHS3sTMDMvLFA%2BVHpU9YPzuIxhvpVs2VC%2F9aSQWhrrLDaVJaPbY25yOjDRFxreomA5tlH%2FNDxlVG3MuJV6efnDisJ5U6VAYRyMxKYB9q1qr4pCwhGNqF9%2FW0xwKMXn2LvRpVAFgZ3z6MfIY4HkPnYwYct3%2F%2B9UVPeJLjdLCutVMKay0%2FPHZ16gr2TI33TVnM3E66nz4en2YcUr2ZTGLZDcvWrtSo9cGx2%2BFQEZ3W3df%2BBEoSnecfdRmyBGs76Lq7SsboIGF0oIdX3rPJR5Q2roIQZyZGZuHdddZtZrxX0iaS1u1vQKgr6S6s2d6IZ2rAxEtM9HIHNy8aiY4qXpLIVgidRdSE2arK%2FH2XZtxAJS9%2FOS9y0aeBqUl%2B681gbK4abBB6osryFVtE6FLONrqdg0kS5Vpef2PowKeVMPc5I06F8wvtJpLuT0deLElntgeRMq%2FPfVtFte662Mw7Y6kxQY6pgGFfzmkJ35jH6P1PQXsDI0N854QBcMtKBuuha9teOCbSWtbaZewkpQVl4OnUKj0JiO7hLj27wEY%2B3QwA6F24uHG29XFY%2F6st2mAolfh14fd2rFoXwuWhE1VbZ%2Fu52hPcmJ59WqowI%2Fe66hmUzEV6iAYUUpFl%2FAegZDbHcN8xeKs6FREw8Nf2GeKox%2FJR5Lzy9%2FA3MgzWssVMA08t%2FH%2FCKyrbzmhCaj1&X-Amz-Signature=884ad858c210c7d6305e4ae975c1b03cc0ac5159e4a55b8bd14d8747e12ba01e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GWXHYHE%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZ9Jlabq%2BZ28j6p1VH6EYNBDd%2Bd%2BDMkKTl3Jeb1XPoTAiB8PoQxlR6PHIbZv2TDH14%2BxgSqodm41BZmNekbPI0HWCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMET53dZErHnYw%2B8EgKtwDMPnkPWdQ%2FukAwXtkuB5LcPUmqbxTtv4%2FTkTHqY%2F3akur2aRRpkkcEDpyCZL4EXn6OhxJma7osjovFL5BZgZV41x3Q20t3wZXCYA2DgKI3pg2z1YbwHMtmsWQPDPK%2Bs7xC6ioV0FHWZYuodJnYdWJ1ksP0hurN8r0yGwKpGEVzqeF5jHS3sTMDMvLFA%2BVHpU9YPzuIxhvpVs2VC%2F9aSQWhrrLDaVJaPbY25yOjDRFxreomA5tlH%2FNDxlVG3MuJV6efnDisJ5U6VAYRyMxKYB9q1qr4pCwhGNqF9%2FW0xwKMXn2LvRpVAFgZ3z6MfIY4HkPnYwYct3%2F%2B9UVPeJLjdLCutVMKay0%2FPHZ16gr2TI33TVnM3E66nz4en2YcUr2ZTGLZDcvWrtSo9cGx2%2BFQEZ3W3df%2BBEoSnecfdRmyBGs76Lq7SsboIGF0oIdX3rPJR5Q2roIQZyZGZuHdddZtZrxX0iaS1u1vQKgr6S6s2d6IZ2rAxEtM9HIHNy8aiY4qXpLIVgidRdSE2arK%2FH2XZtxAJS9%2FOS9y0aeBqUl%2B681gbK4abBB6osryFVtE6FLONrqdg0kS5Vpef2PowKeVMPc5I06F8wvtJpLuT0deLElntgeRMq%2FPfVtFte662Mw7Y6kxQY6pgGFfzmkJ35jH6P1PQXsDI0N854QBcMtKBuuha9teOCbSWtbaZewkpQVl4OnUKj0JiO7hLj27wEY%2B3QwA6F24uHG29XFY%2F6st2mAolfh14fd2rFoXwuWhE1VbZ%2Fu52hPcmJ59WqowI%2Fe66hmUzEV6iAYUUpFl%2FAegZDbHcN8xeKs6FREw8Nf2GeKox%2FJR5Lzy9%2FA3MgzWssVMA08t%2FH%2FCKyrbzmhCaj1&X-Amz-Signature=c34a40cc3e8531ac72d9022515d2dbfda1439895dd2ac17ed9c81d6d5d3d68ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEWHGXJW%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgE2lIxoi2dOE1o1jkdr%2FBJ8riKW4BpoUBo60HgnR7YgIgXtQT6Ff6SDoyb%2BVqfAKtqbEaU%2BFuJIVJhUJLKvSWsgIq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDOWBiizhOg9uTTJd1SrcA2wiouG0vwmu6Gu2vAUj4i%2F6uoP2%2FOFR2GP6S7SpuDQ4i2UKh20VueLyiQQBsOk6wTofbT2Vt6ZbylQuBaD9V3oec8Fj%2B0WpXRXflNhJrXP5MxBsg5h6fXtJDydVv74BEA0JKIC9y1lLe%2BNXws4V8wvwVX%2BxEPlSZSAcj74FiMXQ5toQyJm9I5E96pO9AkvtUTgMgk4%2BVXv7RTuDbKl6YuSPUlYAsMfrRBM2VO8RiCyPJ5hZ1AbQt0FgK7HJwI91I7SakyT4I1xJ8xiSr4CE1P2NEaQ8KbJEdPfxo5Rmfd7R0S%2B6%2BTCApXTjdS9znimpdcLmTVQ6Xz9sByGSwyGveyt3FjfoL8zwHDSKL3ojx01UEaXDr6Z6ElT6dc%2BD8WXLJpI55pjZJpqRbPTz2Iks4BKXcS70utEivUCPJh8cMEL0WofmxBeqr7L5rqn4BLH4gEyu7MMMHkl3RmR9FpvcISWjBJdbHQiDLtBINlKTgHXsJdcx1Vrq6PtaKc8gBlK3eEv0i6wm7n5jRibTV78Lr%2BN7WjX8sFDNPtCBl7L6VHm24R5TAwpiPlRvEjtsEdwyIpdl2HKPmhrxDCTsG7yjH3zzY%2BumFkHmVMZIo1SOimERau6agJFtsK56i7%2BhMJmOpMUGOqUBDzAwGKY81XrAD8Qr2QqWdI9S6Kg26jCRzUsbw%2Bb%2ByJ%2Fkl%2FKt3aK7fc0Ob0hTQrDBhrrz3jlWJZPB9YzqztwLRgobztl92b%2FS%2BpEiGiCQKw1dfC5qlkDVGScm%2BPPo6PokNlPq1CBoxTQTklozyRtVxgTe0QA8Mcmx9b4DFDl%2BWXfil1S7Alqm0LWSn9CNlnXPKzoIPaPE5mN%2Fil%2BGUGm992UxR0Mh&X-Amz-Signature=d13e0679db5985e2018a12b9b0019bcf68c706ba69ef9fb6cf5a6fe8707dcac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOPITLPZ%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBv67W4n%2BqvMlEVlKFWSyppv3PmGi9QKGoDVD%2FPoaPlBAiAYR9pso0kZIh3lHhUpj7RQQ7u0%2BB6V%2BWZjoSobwahRxCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM5raAeFwDb1Hyqn9HKtwDtwyNOABIFj0oOnhFBSKV9DvmjNLQoFP0k0A0AqvLGsLxrQGnpBE5CKe8Epc5DHYm0gaSc8MI7ioetQ%2FRUCBje0mXG%2FUe4zvdl2xEUbOhqQWUy9h4kQQWYy3SPj80DmT9ryhCiJQvmg9lZP5KZLwlDa%2BjWdB%2BZDJ45XlZyyqrh9Ph4esY4wSRTyJTcTcIoylouLNBJkCrVqxxclpUZfjwxjLY30W3iekXRq7f4QKXi29VGsHCNSKvZeRVR6MmyycK6BDlsH%2BRuCJ%2BYJj0z6Df5cxsvkerf4TPdDYr0xLDd%2BaHtkm2yczTf6Zf%2FI2itBcnD9dieMjZNIOo1mmpp3Dgl7N%2ByYU6m3JFX7J2f%2BPU5AHDcTDVUw2glE%2BJsJlVodvUzzPujw2xlgfOjw5%2B6z0PC5Hqu%2FwQHRCqCkR%2FxoQiXdTUdxfvk%2F01%2BRKftI1T1gO0iDTMw4IZe9CwoC8wOGEbY%2BAjaxJNxdhPx8m27G4OgNZzg8x6nI3LR9e5pMoxI9k6Q3%2F08Jz6pUp2g1XULyxG7faL8uwTAZ88cW97sdMoJv0uC6JB3Cv%2FSwGViUQhsH8oa7SSHXJ4KwuToJyLtUNuO5dmxGwlIxi6rIIfUDxHPcNdvT2se1uB9i8dl1cw0Y6kxQY6pgEMTFZJJJyLn36ZuUWYMxXH9HGE8THHvnffKimiug8jeZQNgWHPXMTur7VnroCe4ExfBWizm6RdCjaVmBeK2asans23f4xdch20RZ1MaMN9WzwUDaDWW0kZQjYhrsj%2B1PC29jUxGm3lLEiHAdxRsp2pGzBulP%2FGQGNxXlYFxO2ZU9NqTKPNE7ZCLlXEJXAlGPJqXOPSBCQ6BxQDGgpnRGe%2BZqbSbvoM&X-Amz-Signature=3de4e9c1c0c997c42cbed84d1d9817471413279b7a66b548f0e20278d26588fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GWXHYHE%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZ9Jlabq%2BZ28j6p1VH6EYNBDd%2Bd%2BDMkKTl3Jeb1XPoTAiB8PoQxlR6PHIbZv2TDH14%2BxgSqodm41BZmNekbPI0HWCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMET53dZErHnYw%2B8EgKtwDMPnkPWdQ%2FukAwXtkuB5LcPUmqbxTtv4%2FTkTHqY%2F3akur2aRRpkkcEDpyCZL4EXn6OhxJma7osjovFL5BZgZV41x3Q20t3wZXCYA2DgKI3pg2z1YbwHMtmsWQPDPK%2Bs7xC6ioV0FHWZYuodJnYdWJ1ksP0hurN8r0yGwKpGEVzqeF5jHS3sTMDMvLFA%2BVHpU9YPzuIxhvpVs2VC%2F9aSQWhrrLDaVJaPbY25yOjDRFxreomA5tlH%2FNDxlVG3MuJV6efnDisJ5U6VAYRyMxKYB9q1qr4pCwhGNqF9%2FW0xwKMXn2LvRpVAFgZ3z6MfIY4HkPnYwYct3%2F%2B9UVPeJLjdLCutVMKay0%2FPHZ16gr2TI33TVnM3E66nz4en2YcUr2ZTGLZDcvWrtSo9cGx2%2BFQEZ3W3df%2BBEoSnecfdRmyBGs76Lq7SsboIGF0oIdX3rPJR5Q2roIQZyZGZuHdddZtZrxX0iaS1u1vQKgr6S6s2d6IZ2rAxEtM9HIHNy8aiY4qXpLIVgidRdSE2arK%2FH2XZtxAJS9%2FOS9y0aeBqUl%2B681gbK4abBB6osryFVtE6FLONrqdg0kS5Vpef2PowKeVMPc5I06F8wvtJpLuT0deLElntgeRMq%2FPfVtFte662Mw7Y6kxQY6pgGFfzmkJ35jH6P1PQXsDI0N854QBcMtKBuuha9teOCbSWtbaZewkpQVl4OnUKj0JiO7hLj27wEY%2B3QwA6F24uHG29XFY%2F6st2mAolfh14fd2rFoXwuWhE1VbZ%2Fu52hPcmJ59WqowI%2Fe66hmUzEV6iAYUUpFl%2FAegZDbHcN8xeKs6FREw8Nf2GeKox%2FJR5Lzy9%2FA3MgzWssVMA08t%2FH%2FCKyrbzmhCaj1&X-Amz-Signature=6a25f3788f0dd458ef2e1190f0e4d22e7e1d1497ae5bdd70f50039a1e833408b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
