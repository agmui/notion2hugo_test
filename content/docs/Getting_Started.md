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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J5L4VBB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5GHp1CGfnOvRtXwvSbVgMeO7QSdl%2Bso2JVkLH%2FmqRQAIgGaOVPJqNl9ZI%2F8NIOPATtgPl9NW10yYPMhmCijZcSkoq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMKW3gqd%2FHSfQlDVOircAz6OX6zLSSSS459%2F56EsmeP0oEaPDXRZYoXwR0QzezlnlcfRHcWoUZ5zLfGb5px2YzDnWx55WGs2dPo%2FCEAt7wTJ%2FrrsITqnIgBnGD%2BMFKZbDV8PSjVY0pY7gsVXOC1MABpfgyG%2BHrjIAppRwprLo1gWE6elbLHstBNUzHwpq1ZEPMiLc0zQCtsq3v5J9BQAZ%2Fj9FQ1MAyRJHmUzJX4a1kQiM%2BVoAQwEUOOK%2BlADm1rrrAsIXss%2BDShUPyisw%2BnsmnotOwONte7RjCCk3nD8GimDaEI16h%2FBNhkDzJg%2B%2Fa2D6n%2BqdmrnSnoSd5x8oO24amJi6%2BVe4CCbXtu2KQN0%2Ft2gKvQYTfhx%2FoMgy4AaacEmP%2BDlhJT15s4uFE9s7GUHArAHDxQpw%2Fe2E8cGTlzsvKEYNM06I1bTsnYzOAFoQIEbTYF6PlI177hT%2BLciRoQrkxEUltZObFyoov3s8PEfPnaWUHDU4iNoX18BHz1x78AF88Ekhi%2BYK3CDLOZ%2FUnaB7WmSFvbhRKT3l8A7CmtZr4r%2FfshK6XqwtpC8vYKcuthFZC1hTTUlTOyAiNHjlrZFllwt28JVMxeg8AxnHY%2BP682tW2F0xaqi55iGEVXhdPNeK%2BxecDiT2NTGrNZxMLfsib8GOqUBxB%2Fpefjqibld3imzhTOjd5wlPsAh3pd%2FIMEi5blDE5fEksCZGkdHdKiudSdWOxgaBw1edZgtQ83bUHGO%2BDNrQCPMUjyybyy71esn8jZ4FdoXMS2ErhQPd6bFoRDp%2BbmD1qwgLD2eFtttvc76c4sB%2FDvLTaOOhE41ThHZTxUhHF%2FnoKoVp9HEP3gm%2BEehi3JwngYsm%2FiQFZ2w64nEYjjsOPDRybsM&X-Amz-Signature=e43c5476d1e1e30b79a4c08778313bbb65f8075c29057967c597a71471d0463b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J5L4VBB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5GHp1CGfnOvRtXwvSbVgMeO7QSdl%2Bso2JVkLH%2FmqRQAIgGaOVPJqNl9ZI%2F8NIOPATtgPl9NW10yYPMhmCijZcSkoq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMKW3gqd%2FHSfQlDVOircAz6OX6zLSSSS459%2F56EsmeP0oEaPDXRZYoXwR0QzezlnlcfRHcWoUZ5zLfGb5px2YzDnWx55WGs2dPo%2FCEAt7wTJ%2FrrsITqnIgBnGD%2BMFKZbDV8PSjVY0pY7gsVXOC1MABpfgyG%2BHrjIAppRwprLo1gWE6elbLHstBNUzHwpq1ZEPMiLc0zQCtsq3v5J9BQAZ%2Fj9FQ1MAyRJHmUzJX4a1kQiM%2BVoAQwEUOOK%2BlADm1rrrAsIXss%2BDShUPyisw%2BnsmnotOwONte7RjCCk3nD8GimDaEI16h%2FBNhkDzJg%2B%2Fa2D6n%2BqdmrnSnoSd5x8oO24amJi6%2BVe4CCbXtu2KQN0%2Ft2gKvQYTfhx%2FoMgy4AaacEmP%2BDlhJT15s4uFE9s7GUHArAHDxQpw%2Fe2E8cGTlzsvKEYNM06I1bTsnYzOAFoQIEbTYF6PlI177hT%2BLciRoQrkxEUltZObFyoov3s8PEfPnaWUHDU4iNoX18BHz1x78AF88Ekhi%2BYK3CDLOZ%2FUnaB7WmSFvbhRKT3l8A7CmtZr4r%2FfshK6XqwtpC8vYKcuthFZC1hTTUlTOyAiNHjlrZFllwt28JVMxeg8AxnHY%2BP682tW2F0xaqi55iGEVXhdPNeK%2BxecDiT2NTGrNZxMLfsib8GOqUBxB%2Fpefjqibld3imzhTOjd5wlPsAh3pd%2FIMEi5blDE5fEksCZGkdHdKiudSdWOxgaBw1edZgtQ83bUHGO%2BDNrQCPMUjyybyy71esn8jZ4FdoXMS2ErhQPd6bFoRDp%2BbmD1qwgLD2eFtttvc76c4sB%2FDvLTaOOhE41ThHZTxUhHF%2FnoKoVp9HEP3gm%2BEehi3JwngYsm%2FiQFZ2w64nEYjjsOPDRybsM&X-Amz-Signature=80b983a2fcfc1e7b45b624fda441afe70652bb30cb9eab1994b355cd087face3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWHYAHJ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFT6aQFsIeX2BEkWH2Zaz32Sz5rTkGfmXSuAnmeL4drGAiAzc0O%2FvuoAurixFBpU4fA5bUENWSwzCkNeZbApeainBSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1EOiy9CHtrIXx2CbKtwD53BZ8b1Jsn8flaqRfj0N1kzfqPCWpEvbI9nFfm%2BnpMNcpOe40OWj%2BYn8p9wq7a4gRf%2BMVhlrdZZu%2Fp5TckGxXl2Kmv%2B%2FDAABYXYhiBvEPbt6dWlgCHvflGDE8Y9Nj0A%2FppPRIuj0eL%2F4ksduMZ1%2FTmui4fklidoSPWsXLrourBzK1UY42ligCAnPRPif38GqIS0llw%2BZqYcDmvfRmknFs7FDqkxHUSBi3XWxeLE37SpXPFi35o95JGV5ivfqy5ABoyQxQ3hmIXoMZDF1Uo9p0gmZNwAJ73Ph%2BWW%2B%2BzzG3ZhCv6iB%2FnHhZjWxaQHNXNDezg4D16G27Mm5NBwXOlpuFKFQWEK1d9iReQ1UCk%2Fz1oNFd87SlFj5w5WQTU91%2BRn4fOzZ%2BhJ%2BeLFbKAivzoLHDkwSt%2BrFYkE9%2Bi6EPYhPewcLf1QDFsEmrcq9aIUWHyG4mO%2F5720vab2hLqSjvgTlwLRmSwmiqYmrWQjkKxVchtwOCGWEfUFzS2pjuuqKMrcgrME4U%2BwbJbJxWH3nJnwkVn67sHzKxolCcdTVpbFCCxxtztvb2I2qt6UYriUq7HcHrDt448o2Rj1%2F3FbnOKkGh9Szg%2BiprPW4mYmfIhgnTx24DNFH9alGdf7uQMswqeyJvwY6pgGbYeAPS0SuZ5C1pciUbRCgcznCkPQ%2FA%2BLYsLJwFsJ%2FmxLKkt2kJN4hVC56DvJZ8UBl5tDW0sI%2BaOtZWwlF%2B2zjwB3aO%2Ba57zAJtrekKTi22dUJhO6Tq0PbUkmAnXTWCQKP4lTdWxXimb9t0PJ9MefJJ9IKPBtIWKunmBzi3ms5t0LA8IZUrn17wA%2FcDBawJXYWq6tEdvxGgVVLwo8XUfFiBP4ShWwf&X-Amz-Signature=67c025aaf91adaab5f58b7fafd28e61af210cfade5d79bc9bc987a5e78ea8e37&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXRQGZM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfCSGBPB2u3YOLOPVbXnrKySrBlwYsaAWPxQj9%2BnScWgIhAIh9MNVuc%2FdmSl9BqrGaH7jo7z7MkdvRSvkkxIQnnNUPKv8DCBMQABoMNjM3NDIzMTgzODA1IgwNwQnSGdFF%2Fjm1w9Uq3APgxhMvXQowIiBjpHkugkr6tZClaMlsm%2BWBXyPRSc2WqGgH%2BlCQJGq7Z3gSYY5idkqL%2Bq5GhrKl4eQvmSOf0hgh1WDY8%2BcRsx%2FGcmXCZCQeGIgcH4%2FMJiYRLQ1FATZtjNdt4uSTLE2VI4ELvRlL8YVw3XXDRdNGMYpnU%2By%2BCGpgCm6dWNZduTZBAjOhGxoiMqMe7XOEceXfaCXM1IKARVsYxuicZIaVoZxc5zoHClw0rxRIbfpTGw6m9ge418oXB2KQyUeHekPU%2BfKCYrVlKkRKeDcWohhTgJahaw06%2BBpOLB0a2jnx3%2BmgVcfuTc5ekP1fMyAFUb4jLTTQAKFM48T3Z4DZ4ORz9n%2FZZE%2F6LASy1mBeOnZjdIPjw%2FIKXY%2FcfE5NkIwy56EViOq0ASbdk6KT6cBmWTK0P26hrQE1t8g3g9TDjtd1zw0RIuCLGDlLWK4wuzyi%2B%2FvWdRMJ%2FSWyTY2tKOuOdosb1cVZRzA7BqXh31BoCrrHymwzud5mxGjoPE45pYtVXA2J1fx3iBVyJxHZVccqsGSfX4gxJ2kKEmuxwsLYfa0CGq1OA09HgehHGIDa8RNXZVLJSNtOTEntGdCihuEdzp9soNnxKHIJs9kFOD7nLsP8DMCPw8e4vDCU7Ym%2FBjqkAc6VtW92KmNjDCd12VWE%2BnK%2Fm8s4gazj3Y8r3AfmaGzsOqL16VOi5bnCcdsCNKTUYvJkhWNE2E1zfNVj93I5yZnXbEIMpA0LBF3Y5aagPISNby2bddQB5zLAcSzYzijKBPhF0UehnEhqUj2E9ocm0YiftGX%2FoEkp%2FLMk%2F6oqDZ2qHKlQ18c8uAbL6SNw%2BXHOZ0Tzg9QKF1j2S95XyT8%2BsJv52HJp&X-Amz-Signature=008532137de84e12204d4baa5d90b67aa48baab6ec79463f5e05b3f124c93614&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J5L4VBB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5GHp1CGfnOvRtXwvSbVgMeO7QSdl%2Bso2JVkLH%2FmqRQAIgGaOVPJqNl9ZI%2F8NIOPATtgPl9NW10yYPMhmCijZcSkoq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMKW3gqd%2FHSfQlDVOircAz6OX6zLSSSS459%2F56EsmeP0oEaPDXRZYoXwR0QzezlnlcfRHcWoUZ5zLfGb5px2YzDnWx55WGs2dPo%2FCEAt7wTJ%2FrrsITqnIgBnGD%2BMFKZbDV8PSjVY0pY7gsVXOC1MABpfgyG%2BHrjIAppRwprLo1gWE6elbLHstBNUzHwpq1ZEPMiLc0zQCtsq3v5J9BQAZ%2Fj9FQ1MAyRJHmUzJX4a1kQiM%2BVoAQwEUOOK%2BlADm1rrrAsIXss%2BDShUPyisw%2BnsmnotOwONte7RjCCk3nD8GimDaEI16h%2FBNhkDzJg%2B%2Fa2D6n%2BqdmrnSnoSd5x8oO24amJi6%2BVe4CCbXtu2KQN0%2Ft2gKvQYTfhx%2FoMgy4AaacEmP%2BDlhJT15s4uFE9s7GUHArAHDxQpw%2Fe2E8cGTlzsvKEYNM06I1bTsnYzOAFoQIEbTYF6PlI177hT%2BLciRoQrkxEUltZObFyoov3s8PEfPnaWUHDU4iNoX18BHz1x78AF88Ekhi%2BYK3CDLOZ%2FUnaB7WmSFvbhRKT3l8A7CmtZr4r%2FfshK6XqwtpC8vYKcuthFZC1hTTUlTOyAiNHjlrZFllwt28JVMxeg8AxnHY%2BP682tW2F0xaqi55iGEVXhdPNeK%2BxecDiT2NTGrNZxMLfsib8GOqUBxB%2Fpefjqibld3imzhTOjd5wlPsAh3pd%2FIMEi5blDE5fEksCZGkdHdKiudSdWOxgaBw1edZgtQ83bUHGO%2BDNrQCPMUjyybyy71esn8jZ4FdoXMS2ErhQPd6bFoRDp%2BbmD1qwgLD2eFtttvc76c4sB%2FDvLTaOOhE41ThHZTxUhHF%2FnoKoVp9HEP3gm%2BEehi3JwngYsm%2FiQFZ2w64nEYjjsOPDRybsM&X-Amz-Signature=5e2d939fce7ad530205b109d86c4d5f5de77ae0b15ac39352ac7daf2c82e7888&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
