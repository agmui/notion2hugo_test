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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4URLAB2%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCZuJJcpjYlLrGBC4ODPuUrfcuxaaAxVT%2FPryoUXoIVigIhAIGoECwd8kcYb35DiQ4oFV5M1h0X9ZbjcYbDS39KA22kKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTD0qOgEC1Qc7TZtEq3AMfnrvbfpsdD9wRgcmfYzodPakp5R4zeIfmiPpiYuMs0GzYLPpoNT532pvkWmWQ%2BAWs9B47oODk%2Ff9610N3G0Qk2d2tN4C0Q0ZHY%2BkstfTEleD6lBNxKVis3Km8fLk05CCpASu9%2FwnkLHCPcw6Ag8TDC8yUM%2FiZRXoPXq9JQ8plHNZ8JhWhAxAfYk2vD8gFWOf47tblG8vJs%2F19EDH8DonI6ADFtJsRW53B2k%2FnfqlUnraey3Xis8niQ9KWHVQQXdzOvPQwT2IpGSrTuBvHfn6P88FKGDiaIhbqCT4R6qd7IYf7i%2FBOw9IQwrdlMf18mzRLkZBAHBP5HdLr5c8Dz%2B%2FQ6yvb9C%2B%2BJAJeIZ4e5pTIn98hujvcwnOM4GkjTaDBmMBPJKUOETQZ6NSoNqZLzkW0HKm2Cz7uOXoco7kAoq6YIhbQZlNR17n7vVoSCLydeMTLpluNBlEA7HIAK3LJNySs09stviKzkIEY7Zz1IYHY6k4OzCJLBDP7LNExwdX0og0Yw%2B%2FaZ9KRNBK%2B8iyH%2BlgfsNvefc6JmVBItmI30pGvrtYJeaiaUUVNfHa4HANKUi4LtFgmjr2n7wakpd6Wqb%2FZYp6awFjlSZkP0jTsJ1GeA251ktfYGzlf47oOUjDrrdvHBjqkAXnitWqAKHaF4QGO0Rr5KgcSkmP9TMXyam4P2D6FDSUCiUR1f4yiS%2BR6UxB%2F51GtU6DcXL%2BIfyb3jVtazGIFdOzD1huxyE7Djx29L4J8Iz6i4CHhjUupf0p03CcSroUSnABWGiq%2FVJnV3LiU8R3M6FnG0jQcdK7DvsQjGfzYEQJE6%2BlZwpVKF%2F7oZ6HKJXV0OHmFvw7TqqpoKBgaw58CcHCByrna&X-Amz-Signature=5486037343a0882a38921ffe57a828d07fa060092cca27121b5e15338ec233d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4URLAB2%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCZuJJcpjYlLrGBC4ODPuUrfcuxaaAxVT%2FPryoUXoIVigIhAIGoECwd8kcYb35DiQ4oFV5M1h0X9ZbjcYbDS39KA22kKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTD0qOgEC1Qc7TZtEq3AMfnrvbfpsdD9wRgcmfYzodPakp5R4zeIfmiPpiYuMs0GzYLPpoNT532pvkWmWQ%2BAWs9B47oODk%2Ff9610N3G0Qk2d2tN4C0Q0ZHY%2BkstfTEleD6lBNxKVis3Km8fLk05CCpASu9%2FwnkLHCPcw6Ag8TDC8yUM%2FiZRXoPXq9JQ8plHNZ8JhWhAxAfYk2vD8gFWOf47tblG8vJs%2F19EDH8DonI6ADFtJsRW53B2k%2FnfqlUnraey3Xis8niQ9KWHVQQXdzOvPQwT2IpGSrTuBvHfn6P88FKGDiaIhbqCT4R6qd7IYf7i%2FBOw9IQwrdlMf18mzRLkZBAHBP5HdLr5c8Dz%2B%2FQ6yvb9C%2B%2BJAJeIZ4e5pTIn98hujvcwnOM4GkjTaDBmMBPJKUOETQZ6NSoNqZLzkW0HKm2Cz7uOXoco7kAoq6YIhbQZlNR17n7vVoSCLydeMTLpluNBlEA7HIAK3LJNySs09stviKzkIEY7Zz1IYHY6k4OzCJLBDP7LNExwdX0og0Yw%2B%2FaZ9KRNBK%2B8iyH%2BlgfsNvefc6JmVBItmI30pGvrtYJeaiaUUVNfHa4HANKUi4LtFgmjr2n7wakpd6Wqb%2FZYp6awFjlSZkP0jTsJ1GeA251ktfYGzlf47oOUjDrrdvHBjqkAXnitWqAKHaF4QGO0Rr5KgcSkmP9TMXyam4P2D6FDSUCiUR1f4yiS%2BR6UxB%2F51GtU6DcXL%2BIfyb3jVtazGIFdOzD1huxyE7Djx29L4J8Iz6i4CHhjUupf0p03CcSroUSnABWGiq%2FVJnV3LiU8R3M6FnG0jQcdK7DvsQjGfzYEQJE6%2BlZwpVKF%2F7oZ6HKJXV0OHmFvw7TqqpoKBgaw58CcHCByrna&X-Amz-Signature=1823e4e9b1d5faf7dc5ecb544fd12e1e01cde290f426c0a74207eb170ff1b70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4URLAB2%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCZuJJcpjYlLrGBC4ODPuUrfcuxaaAxVT%2FPryoUXoIVigIhAIGoECwd8kcYb35DiQ4oFV5M1h0X9ZbjcYbDS39KA22kKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTD0qOgEC1Qc7TZtEq3AMfnrvbfpsdD9wRgcmfYzodPakp5R4zeIfmiPpiYuMs0GzYLPpoNT532pvkWmWQ%2BAWs9B47oODk%2Ff9610N3G0Qk2d2tN4C0Q0ZHY%2BkstfTEleD6lBNxKVis3Km8fLk05CCpASu9%2FwnkLHCPcw6Ag8TDC8yUM%2FiZRXoPXq9JQ8plHNZ8JhWhAxAfYk2vD8gFWOf47tblG8vJs%2F19EDH8DonI6ADFtJsRW53B2k%2FnfqlUnraey3Xis8niQ9KWHVQQXdzOvPQwT2IpGSrTuBvHfn6P88FKGDiaIhbqCT4R6qd7IYf7i%2FBOw9IQwrdlMf18mzRLkZBAHBP5HdLr5c8Dz%2B%2FQ6yvb9C%2B%2BJAJeIZ4e5pTIn98hujvcwnOM4GkjTaDBmMBPJKUOETQZ6NSoNqZLzkW0HKm2Cz7uOXoco7kAoq6YIhbQZlNR17n7vVoSCLydeMTLpluNBlEA7HIAK3LJNySs09stviKzkIEY7Zz1IYHY6k4OzCJLBDP7LNExwdX0og0Yw%2B%2FaZ9KRNBK%2B8iyH%2BlgfsNvefc6JmVBItmI30pGvrtYJeaiaUUVNfHa4HANKUi4LtFgmjr2n7wakpd6Wqb%2FZYp6awFjlSZkP0jTsJ1GeA251ktfYGzlf47oOUjDrrdvHBjqkAXnitWqAKHaF4QGO0Rr5KgcSkmP9TMXyam4P2D6FDSUCiUR1f4yiS%2BR6UxB%2F51GtU6DcXL%2BIfyb3jVtazGIFdOzD1huxyE7Djx29L4J8Iz6i4CHhjUupf0p03CcSroUSnABWGiq%2FVJnV3LiU8R3M6FnG0jQcdK7DvsQjGfzYEQJE6%2BlZwpVKF%2F7oZ6HKJXV0OHmFvw7TqqpoKBgaw58CcHCByrna&X-Amz-Signature=926c63b09c4a27b1e457a1aab65af04533276522497ba449f0b2f9ae2f3b976e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSSQ7UV%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIB9iLBwhrw2GXSwkZ7bd14BwIk%2BepMOnHy082rHqDiNHAiEAhiDumS4o%2B0TKzQD6M966ll4sl7SGZv1DXfpWBmtrXp4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0xU0zHbCNU9tJZ7SrcA3r6YDCi3sasTaJICzdECogf8S%2By4x6tVrvrprhZOwFmrEnaj0WlUCPKGkhfdNvLWTXK%2Fu6kgnxP8ozPQdt2BsosMlYz6GaKXESL1D5N1esHIyT4G0IUCe2gwynZ%2FEwOksUSOUzf%2BluPq%2Ft%2FxKPKxrbOu5%2Fx1CLEizp1gvXXtMQURZNg5IFrzjRYBXxqgzlSUHW%2B3auwA%2FOJFm%2Fyq7LP6QFj%2Ft3%2BTTpDL8jb8Kq6rDfLrNiS7DZjYnzpLAn0Yg9%2FydDdn7dakcNsqRHhLp%2FIRRAbeNOZF5Gx7AZyviOhS5LaDaVf5hvSM0KE8qLrS3%2BHndY5%2BDrYLI3%2BEbw6%2BxrGolpKa%2BwTFfLMCwgNDPSzI%2FI8XDFcwQhFYskaITfy2FBjc8ZjrgUiSqYJDuWjLwKzLA9jamzosq9Yytud9fjyd8d5E7y%2BxmKEQCaE%2F3x2tBPBSEVPqqTWXu68q0mDUpobIEZY6Ysikt9DDpPNA52UVOd2oai5wZI0xIkkDt9WQFM3VfjTKmj63phmpuWmFrH8hZkAdoOiJnx7uzPcW7rq%2BxBzGEE0oskfEL7H1cDLsfk4FSPT4OfUwY2CmMFT%2FASfArTbltmMuuvRIG4gWjnT0YX6MqEdpN1oEjd3NI1GMJOs28cGOqUBxnmaBSCEyy99atJsZzW19GuXvU5DWw7GP8JrkiBT4IHMDVr6FKe%2FeSl%2BmHWIB%2BFEwWAJw3b9%2BHjj5W1ciwSy2JQFxwigH0QOGR1hZHEhlefo4i2Roc240MXxxmkJuxyMaEjYK9EoHybiJzNVcUSEHKQnvxdKaMpOiUsdPVxN52c9pdeutul51MPjw%2F4BOip3fzNYgcUO1qNO2bMUsiekl%2BcfIVer&X-Amz-Signature=e9cf45b5f46cba100b59b64cb53541f810d0a3f8db67b7bf5b043a15205c33c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2QPBE4K%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCmuFFVE2xhnBrVGNSt4hqaOiwbhw46TGnrLza1auqAnQIhAKTHNDBlyXt%2FKvPAqaXCUIyFQoxf5odJ0Gj4yHHBMUl%2BKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqnmXwYfjeK%2FUQ3C4q3AMADSLJAWhhjQLgNpP6cKfjQiSNEFbN%2BFfT84QDk6qe0mHKyMxR7iQGdnILwZro2kz4QFFAJkQ1wd8U%2FfkOilVwC4Km53kNIyRIal1qoa94P3DWUBLdSySE0D9HVSvpOe9VDy%2FaAdmRlrwaYATXGGK5vKkBGnR47%2BuH6UtOzlpDvNdEfr9Up2GQrVTAbie2%2FrRjdvHa0o9oIpdPRp9Wlwx5FX4KfjbuLSArz%2BNdnVqEbdR3rZgZtg9UdxGe80U69Jou6J3RTbNWLxEfLFHx4Cn3ncUPue0ZxQs7lTNXEGUxzCo7JnEMB3%2FM1jgDqnuQTW7oCxVp%2Ffe1jy8OLPLcfgx1bBzWMxMoeU5REQAX2Ys9nVZ1rrYYmFWMOYRZ16zSyMd7bVtxdQo01NrvoDCKsXBLWWWDg3HSl6sqgYLeCK0AYXaTTcht3Gkv0EhByJK6BXUSGlSFYGdoNjNRw1AI26EvD3FoNGXbgxVaSNDDQmnUcjWzIH8Ccr5IZwyP5ch%2BC4DS1VnPHnppuNcrbsTJZOnE4vCgOGR8LmK5dK4K9AbYIuYjPVkpS46HYZRFCCR343wZyNt9XQT1DcJCea5k99KKiZb0b63pAuh3iJxzpAnF3gIkVu4tmR0oN6YEkjCJrNvHBjqkAQaTj3gyZnJu%2Fk%2FhTqPgVTtyUH8KeBfgHH2sHTKlJA2TPv7T%2FG0xbHwAziriZj5Xg4b2PL8Q8AJ4SSArbVn0g8AlaZqhklYrhCPl1ke%2FedP9HYUpZE%2Bo%2F8dnj7vl1lAfUPKT3lMKjp3FykAxYkACJUkAX%2BTTrEMk1KFSl8IZ3A9VCU2COxfbXbC6oJrTymUgm%2BIFvabgknyYjForawQ%2BH%2BQwG1xV&X-Amz-Signature=807c3d5396fa4cf3b8c3ea9693d4ecd84493fdd14c55618447ecfadd52eee2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4URLAB2%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCZuJJcpjYlLrGBC4ODPuUrfcuxaaAxVT%2FPryoUXoIVigIhAIGoECwd8kcYb35DiQ4oFV5M1h0X9ZbjcYbDS39KA22kKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTD0qOgEC1Qc7TZtEq3AMfnrvbfpsdD9wRgcmfYzodPakp5R4zeIfmiPpiYuMs0GzYLPpoNT532pvkWmWQ%2BAWs9B47oODk%2Ff9610N3G0Qk2d2tN4C0Q0ZHY%2BkstfTEleD6lBNxKVis3Km8fLk05CCpASu9%2FwnkLHCPcw6Ag8TDC8yUM%2FiZRXoPXq9JQ8plHNZ8JhWhAxAfYk2vD8gFWOf47tblG8vJs%2F19EDH8DonI6ADFtJsRW53B2k%2FnfqlUnraey3Xis8niQ9KWHVQQXdzOvPQwT2IpGSrTuBvHfn6P88FKGDiaIhbqCT4R6qd7IYf7i%2FBOw9IQwrdlMf18mzRLkZBAHBP5HdLr5c8Dz%2B%2FQ6yvb9C%2B%2BJAJeIZ4e5pTIn98hujvcwnOM4GkjTaDBmMBPJKUOETQZ6NSoNqZLzkW0HKm2Cz7uOXoco7kAoq6YIhbQZlNR17n7vVoSCLydeMTLpluNBlEA7HIAK3LJNySs09stviKzkIEY7Zz1IYHY6k4OzCJLBDP7LNExwdX0og0Yw%2B%2FaZ9KRNBK%2B8iyH%2BlgfsNvefc6JmVBItmI30pGvrtYJeaiaUUVNfHa4HANKUi4LtFgmjr2n7wakpd6Wqb%2FZYp6awFjlSZkP0jTsJ1GeA251ktfYGzlf47oOUjDrrdvHBjqkAXnitWqAKHaF4QGO0Rr5KgcSkmP9TMXyam4P2D6FDSUCiUR1f4yiS%2BR6UxB%2F51GtU6DcXL%2BIfyb3jVtazGIFdOzD1huxyE7Djx29L4J8Iz6i4CHhjUupf0p03CcSroUSnABWGiq%2FVJnV3LiU8R3M6FnG0jQcdK7DvsQjGfzYEQJE6%2BlZwpVKF%2F7oZ6HKJXV0OHmFvw7TqqpoKBgaw58CcHCByrna&X-Amz-Signature=a8564edba5e49dde95ab97cbc60b34c36c8cc1a2fd5749cb0c29ab9aa514e3a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
