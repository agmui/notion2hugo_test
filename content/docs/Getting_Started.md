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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EA7FQ2C%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICTL79uObtM6bwjI0o%2B%2B4ULF%2F%2F9mCeJSF4DYooLxAW7JAiEAjSaFlUIrXvjeCIl1qLeA5YT0TMY4OiUYJq5XSnC99fcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLroJSudoZm3I5TT5CrcA%2Bds89zgU1DkeKB0N2bJWy0u3wu1qIX4h9UgMig4IOxEeSbrnlN2aVOeROjKcEC%2BFncYCIt5OHXAYXIGXJaPFXFV%2FGRUYAko4lWf9oNda5aO%2B163s0881Jx73gNo6XXNZsh7C4O4xoHU%2FLPH0r8xlByx56la4WblwCslLcVURtpEe8xjY8mf05vY8yY6VkmATR2wTL52nMbpWEyX4K90m7n0SfmaFQyj1%2FmjENnjIL31Yv5DkwJukn2N%2FIuqGpWYCcCUCjB1RLMv3nq%2BNH%2B2vJxX9FfZ%2BksAn4tqKNk3IXSlrMHSnFH9DQv9O3qyX3ZR7ryZm5T4GwIF6rVpdX9ST8L%2F4rODxs8gUYtP%2F277hJrF9l3OOiWy6i7re%2Fn0Rl2Fq%2BuuRvBalSrqlca4ZxurQ0m8ktEgvgwXlpjyH%2BZinDVQDOcXHTlU8fJog1w%2FKzgQtW7lSzqwKZ5qjgIAMj%2BYD3TBDbsg2uRO5LDcxYo7zYfNA89nYY24AV%2Bp1cMoz9o5W%2FPDXjEkVy4s1Rm6CO%2B%2FI6PxwpLBLNhCYtzbMkOdcqF46MUb11wj9AHseP2JKkXNMTBP7FwVp%2FRRl0dRu74dLJ1zStblebFYscA44Baprw0nv5%2B%2Fc7LLheGvjxRSMMvmlscGOqUBAxB1t9Ib3%2B8v7%2F%2B3LVCVwRTSNAMmZmKJYL3kQm5As0In8E7Tj6KFvevmbnLyPNibI9GBCJ0XVLs%2Fpupycp0Atl8ku%2BgS8M5YKkNsL7Z3XIDtGmcMdW%2Bj%2B5Lxut6oHcHN9IF5wuVs544GFBkU1C2Q9PgCGheGC%2Ff5F%2FCJKdLSDyXtgeU9qTEO%2FxMtckcW0uv0etr69t4PLSrsi4fXOX07jiYHSiME&X-Amz-Signature=13dbe1f848370afafbc6822b83e78e9f774fea7e797cf0423d07ee1302ab7da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EA7FQ2C%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICTL79uObtM6bwjI0o%2B%2B4ULF%2F%2F9mCeJSF4DYooLxAW7JAiEAjSaFlUIrXvjeCIl1qLeA5YT0TMY4OiUYJq5XSnC99fcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLroJSudoZm3I5TT5CrcA%2Bds89zgU1DkeKB0N2bJWy0u3wu1qIX4h9UgMig4IOxEeSbrnlN2aVOeROjKcEC%2BFncYCIt5OHXAYXIGXJaPFXFV%2FGRUYAko4lWf9oNda5aO%2B163s0881Jx73gNo6XXNZsh7C4O4xoHU%2FLPH0r8xlByx56la4WblwCslLcVURtpEe8xjY8mf05vY8yY6VkmATR2wTL52nMbpWEyX4K90m7n0SfmaFQyj1%2FmjENnjIL31Yv5DkwJukn2N%2FIuqGpWYCcCUCjB1RLMv3nq%2BNH%2B2vJxX9FfZ%2BksAn4tqKNk3IXSlrMHSnFH9DQv9O3qyX3ZR7ryZm5T4GwIF6rVpdX9ST8L%2F4rODxs8gUYtP%2F277hJrF9l3OOiWy6i7re%2Fn0Rl2Fq%2BuuRvBalSrqlca4ZxurQ0m8ktEgvgwXlpjyH%2BZinDVQDOcXHTlU8fJog1w%2FKzgQtW7lSzqwKZ5qjgIAMj%2BYD3TBDbsg2uRO5LDcxYo7zYfNA89nYY24AV%2Bp1cMoz9o5W%2FPDXjEkVy4s1Rm6CO%2B%2FI6PxwpLBLNhCYtzbMkOdcqF46MUb11wj9AHseP2JKkXNMTBP7FwVp%2FRRl0dRu74dLJ1zStblebFYscA44Baprw0nv5%2B%2Fc7LLheGvjxRSMMvmlscGOqUBAxB1t9Ib3%2B8v7%2F%2B3LVCVwRTSNAMmZmKJYL3kQm5As0In8E7Tj6KFvevmbnLyPNibI9GBCJ0XVLs%2Fpupycp0Atl8ku%2BgS8M5YKkNsL7Z3XIDtGmcMdW%2Bj%2B5Lxut6oHcHN9IF5wuVs544GFBkU1C2Q9PgCGheGC%2Ff5F%2FCJKdLSDyXtgeU9qTEO%2FxMtckcW0uv0etr69t4PLSrsi4fXOX07jiYHSiME&X-Amz-Signature=1a6e1ec8fd4397b996511007b1c0121556c00b4772ec179e3a5b92072d9280b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EA7FQ2C%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICTL79uObtM6bwjI0o%2B%2B4ULF%2F%2F9mCeJSF4DYooLxAW7JAiEAjSaFlUIrXvjeCIl1qLeA5YT0TMY4OiUYJq5XSnC99fcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLroJSudoZm3I5TT5CrcA%2Bds89zgU1DkeKB0N2bJWy0u3wu1qIX4h9UgMig4IOxEeSbrnlN2aVOeROjKcEC%2BFncYCIt5OHXAYXIGXJaPFXFV%2FGRUYAko4lWf9oNda5aO%2B163s0881Jx73gNo6XXNZsh7C4O4xoHU%2FLPH0r8xlByx56la4WblwCslLcVURtpEe8xjY8mf05vY8yY6VkmATR2wTL52nMbpWEyX4K90m7n0SfmaFQyj1%2FmjENnjIL31Yv5DkwJukn2N%2FIuqGpWYCcCUCjB1RLMv3nq%2BNH%2B2vJxX9FfZ%2BksAn4tqKNk3IXSlrMHSnFH9DQv9O3qyX3ZR7ryZm5T4GwIF6rVpdX9ST8L%2F4rODxs8gUYtP%2F277hJrF9l3OOiWy6i7re%2Fn0Rl2Fq%2BuuRvBalSrqlca4ZxurQ0m8ktEgvgwXlpjyH%2BZinDVQDOcXHTlU8fJog1w%2FKzgQtW7lSzqwKZ5qjgIAMj%2BYD3TBDbsg2uRO5LDcxYo7zYfNA89nYY24AV%2Bp1cMoz9o5W%2FPDXjEkVy4s1Rm6CO%2B%2FI6PxwpLBLNhCYtzbMkOdcqF46MUb11wj9AHseP2JKkXNMTBP7FwVp%2FRRl0dRu74dLJ1zStblebFYscA44Baprw0nv5%2B%2Fc7LLheGvjxRSMMvmlscGOqUBAxB1t9Ib3%2B8v7%2F%2B3LVCVwRTSNAMmZmKJYL3kQm5As0In8E7Tj6KFvevmbnLyPNibI9GBCJ0XVLs%2Fpupycp0Atl8ku%2BgS8M5YKkNsL7Z3XIDtGmcMdW%2Bj%2B5Lxut6oHcHN9IF5wuVs544GFBkU1C2Q9PgCGheGC%2Ff5F%2FCJKdLSDyXtgeU9qTEO%2FxMtckcW0uv0etr69t4PLSrsi4fXOX07jiYHSiME&X-Amz-Signature=3be253734630a05bc82c432e35e957f5202bf12bd56bca46e8a073e2f4b1cca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOEMSWYX%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDTzGIkO0Vz0lLcBRnFmP4%2BEekLlbLOYXsLuTHwR6txnwIgB5AbpRMiFvlLFuSIdyVfVlBL6XvtzshJFLiJgwb8pyMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDII99TuWXOSXAnA5XircAxfHsEkpN01BojXUW1EekFWrDuXSVMNgKhDPfaUX8DB%2B7v2nUx%2FqJJvMiJDRyhJjAFxIvqvcwBmVigr71p8EUSmROd%2BL4hxm5Q7WVrphAPY1oF4gBq6AtihH4XQW31eB8PDMQ3%2B4%2BGJ5mTI2%2FdQcSRqeblDBdJcZ%2BgVGeyh88UDf%2B2iKSGEMfQjl7dNcgjFPtlaCdFWUzkbQU6BPlKo%2FxJElI4o4L8FSfs6Q577mHrAuLc5nn6SqhBGMN4LvWnrtkgqrCphGPn5YMfGqwvd4VjQedosQvGWXo%2FGsOolxYkhahL0Y83xFkuJSuz%2FjZGQrdnsBMuKtXSp%2FlhB%2BqhT97cHTpQtqy3hK9CLiYg7q7JiwOOp8YWlLIt%2FEVhNoQimz1lV3h2y5hXQRSakoufzc7btWopHEcRnY313RdWS9y7aNViTG10P%2BvBEgYM68cllK23pNw9GjqTSfu0fnYoKPfOt8VbT0jBVbNDMlOUUAMw4LHlwqLI30mBe2TMel4GA%2BbfoIx9QqCXONzV9kA%2B%2BweFg0EwiEkgn06Q5rOdrRC5tOd0SYV3en6JYpxSG7m7S2w6v3LRI%2F7thfe12GMDNtof35pvnVU99z4mi2IMkwSxDDF02uNU9uJCmCRqnOMIbnlscGOqUBAoxmjCSL2pFPPCbdBHE2zl98Tvz5H5s6CDwWpX5TRQAxtNiP%2BvyeRFOXjs4wSn7Z9l5K9EpTMJ7QcXv2y2c5UPqKxD8UiRIso2tZN8cPpC%2FYyGRKhAN%2Fh%2Bxd9mhWu4%2B5l6B2VyQuldE3z8J7nZXiC%2FqtK%2Bu4lqUI%2BWtaVmj0yzcqu1CioVZiDC1EGp61G4wwY%2F9QmL6loSYMj7le2iWXmIqx7z2n&X-Amz-Signature=27360b4640f5f0665a0a8327fc3141b7ac55ae5f190d16723566b9719f4be2e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CO2NRSQ%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIB4nYR%2BMTu6n3pygEim4fB2h9BxhdQvGHaMxM9nK5CenAiEA7FjWboL3gEnDBrFiBDh329ZQjM3LeRiGtRFh4TFMFKoqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzpkCfD17gGrc7WByrcA0R2UBUz3alsvfQcyn6R09t%2BXUzQQX3fw0knWFT0CnxkceGFOYVvFECzNVU7zwXhZmB3H%2B3Q9YXxaSJYXj9xUw7gnyOwUhj0Tqqp4M4wwkdna30d6PVogAxagQeMxQfQFjPWw%2F4qF3WuwJ4QhAtb%2B%2BOea5YEb3iUp9IXiWR%2FuVWijkPGPjzuAVnUp%2FHO1FjlXxdss4BekkB7xTFZ33dZrsc%2F4jMmlN919HhO2DttUR0Nl2wOU2oxHrjalnO6DY6lltvmI98pnrrFWrRbNPGip7zwVEkdk%2Fi96kVAIM8MFK4nC3aGFNuxetB%2Bker1LHuQgNfYvX%2FjnP4bwKBKRfugmQtmbBw9%2BkiCsqCPfrnfGK56idU5g%2B%2BA5P9OA3ACC%2FFVklAuvS9jwb3iVuMTDDrVF3P9v3kdSgwtsa3ODOfM%2FPgE8BYrDp088D0YSw7R%2Bbhvy4JM2MvHprTGYV9Y4pqD9S9wWuNmdTUM39tGHIiWEPdEp6TUC6RFUl7MV88IxMmGUgn%2FnFH4ZiFLcGy7KPOWcZQhtkMxqDeUqvpno3d7fzAOPJLrLGinKyNEX%2BOhrZTfDDjYd5POf%2Fe3zut3GG8GsFuyzlwZLsY%2FkmmkrGpLPz5blpWsyQf5WnLFuArNMP%2FmlscGOqUBEU7rWW63g%2B4fgqLuWJsP%2BiaauldlPbEm9Z90p%2FLeqqxOjWfK2AnucvvQtJUM3iLCwK7UZdD65clloCl1tn1dEytztC%2Fu%2F6uoee7ve01kfky9qTdSdzjkcObl4T0OZ50X3TmyUAPylX0A5Unk4ZyC1cUQQc1yqG84vwtTiiiMu%2FqQBjPcO8ntWn6%2F3b17eTyT5fdDzDoTMRcVqYLfFowGgPO%2B7413&X-Amz-Signature=ef22ad08f3376efff051de935074aa8e5d8967a5b8548ac93e26fb9726a96ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EA7FQ2C%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICTL79uObtM6bwjI0o%2B%2B4ULF%2F%2F9mCeJSF4DYooLxAW7JAiEAjSaFlUIrXvjeCIl1qLeA5YT0TMY4OiUYJq5XSnC99fcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLroJSudoZm3I5TT5CrcA%2Bds89zgU1DkeKB0N2bJWy0u3wu1qIX4h9UgMig4IOxEeSbrnlN2aVOeROjKcEC%2BFncYCIt5OHXAYXIGXJaPFXFV%2FGRUYAko4lWf9oNda5aO%2B163s0881Jx73gNo6XXNZsh7C4O4xoHU%2FLPH0r8xlByx56la4WblwCslLcVURtpEe8xjY8mf05vY8yY6VkmATR2wTL52nMbpWEyX4K90m7n0SfmaFQyj1%2FmjENnjIL31Yv5DkwJukn2N%2FIuqGpWYCcCUCjB1RLMv3nq%2BNH%2B2vJxX9FfZ%2BksAn4tqKNk3IXSlrMHSnFH9DQv9O3qyX3ZR7ryZm5T4GwIF6rVpdX9ST8L%2F4rODxs8gUYtP%2F277hJrF9l3OOiWy6i7re%2Fn0Rl2Fq%2BuuRvBalSrqlca4ZxurQ0m8ktEgvgwXlpjyH%2BZinDVQDOcXHTlU8fJog1w%2FKzgQtW7lSzqwKZ5qjgIAMj%2BYD3TBDbsg2uRO5LDcxYo7zYfNA89nYY24AV%2Bp1cMoz9o5W%2FPDXjEkVy4s1Rm6CO%2B%2FI6PxwpLBLNhCYtzbMkOdcqF46MUb11wj9AHseP2JKkXNMTBP7FwVp%2FRRl0dRu74dLJ1zStblebFYscA44Baprw0nv5%2B%2Fc7LLheGvjxRSMMvmlscGOqUBAxB1t9Ib3%2B8v7%2F%2B3LVCVwRTSNAMmZmKJYL3kQm5As0In8E7Tj6KFvevmbnLyPNibI9GBCJ0XVLs%2Fpupycp0Atl8ku%2BgS8M5YKkNsL7Z3XIDtGmcMdW%2Bj%2B5Lxut6oHcHN9IF5wuVs544GFBkU1C2Q9PgCGheGC%2Ff5F%2FCJKdLSDyXtgeU9qTEO%2FxMtckcW0uv0etr69t4PLSrsi4fXOX07jiYHSiME&X-Amz-Signature=13150ab81064a6f55693980bc019731f53eafb8a7e54d812e2a4865230a516fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
