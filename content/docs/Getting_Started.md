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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4PPVKY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtLr8johLuY89TymLPsmHg5vTmzeD%2BwNajskXmWamfEAIgJmNZXVHKI1nDlfnJFrKraVuKduBLxhSf9n5t4FNb5s8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHV1c2iMIFkdpynJsCrcA7Zot%2FyCjxJ2beFUN1CBJGp1hZEuOMLu%2FdoIL6uxUroY9fzW20EijO1iAxp1qlMankpJn7ae%2B9xa0ylq466JVyL%2FS4eij%2B6LC4k175SNrWCE4bKy27fDf4tkIkc3nzFduCHQhsEsegg9kVwP%2BlK4VjbhzRTFJHcHQ7Ki7Dn2uO0nd1NyRfXV4I64ePHnZjM1O13YzjgI5AtEH19SJYHWNQ3G1X2BJE7N1i2a8y93RqBbaXw9CB8rb82rIxZUdEx%2BZ7iZUC265mGzLb8iAPJWb4Fendx4VqqX1ZCAWq3iN4IUduqBRY%2FKmauY%2F38cSA1b8T1WTQ9kt3eIWu00xOJ2KWfUTR9cMH%2Bx7oketxLynA2kc7vmamxjLL8C197BHtAgG1y5YDYBMw6%2B17%2B5XrPeBDcP5Tc1kHhacl0fNilo1J5w9cjx86F8Bm7IBwwGBWbStz0BMOW2B09h6sY5Mg6dQnmZCjejE%2Fck5osrt0mjATWT7av5zD%2Fhq2LdAV5joYoBWMbLF9XVpo16oYVwrRe%2Bz6MgDpFw%2BcmT1kq15y6UPS%2FXr5njV0P4qGv0Hh12Hap1tcJ9LZfeNxkow8i4VYkDLPco%2BT0JSG6CLWUxoJqKAfawHYcWYS9199UY9QJRMNmtjr8GOqUBOlgbeDTDNtj0wl9oB%2BJg9Lluuakz4ekL%2Bi4ffEOdxUbY9RGXgQcTqOiD7R2h%2FM9ubi8oVmNr6vO%2B%2B8eoTYEx9q47Xm7%2BQd%2BPgC3fKI%2FZLIlCitifJm%2BQpbWPKnXTbZQPGUPRzZo78RkxvsMu3W2KaVPfykE8BJ5DzGDuMBmKZkaZec0qcj2D5610irALMTbu0kelygtzUNPzv2DlmzWYYX6HjXcH&X-Amz-Signature=2e60e3309bd995bc7dff6ada53c7afb337921483a6224c5df01f45708079ebec&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4PPVKY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtLr8johLuY89TymLPsmHg5vTmzeD%2BwNajskXmWamfEAIgJmNZXVHKI1nDlfnJFrKraVuKduBLxhSf9n5t4FNb5s8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHV1c2iMIFkdpynJsCrcA7Zot%2FyCjxJ2beFUN1CBJGp1hZEuOMLu%2FdoIL6uxUroY9fzW20EijO1iAxp1qlMankpJn7ae%2B9xa0ylq466JVyL%2FS4eij%2B6LC4k175SNrWCE4bKy27fDf4tkIkc3nzFduCHQhsEsegg9kVwP%2BlK4VjbhzRTFJHcHQ7Ki7Dn2uO0nd1NyRfXV4I64ePHnZjM1O13YzjgI5AtEH19SJYHWNQ3G1X2BJE7N1i2a8y93RqBbaXw9CB8rb82rIxZUdEx%2BZ7iZUC265mGzLb8iAPJWb4Fendx4VqqX1ZCAWq3iN4IUduqBRY%2FKmauY%2F38cSA1b8T1WTQ9kt3eIWu00xOJ2KWfUTR9cMH%2Bx7oketxLynA2kc7vmamxjLL8C197BHtAgG1y5YDYBMw6%2B17%2B5XrPeBDcP5Tc1kHhacl0fNilo1J5w9cjx86F8Bm7IBwwGBWbStz0BMOW2B09h6sY5Mg6dQnmZCjejE%2Fck5osrt0mjATWT7av5zD%2Fhq2LdAV5joYoBWMbLF9XVpo16oYVwrRe%2Bz6MgDpFw%2BcmT1kq15y6UPS%2FXr5njV0P4qGv0Hh12Hap1tcJ9LZfeNxkow8i4VYkDLPco%2BT0JSG6CLWUxoJqKAfawHYcWYS9199UY9QJRMNmtjr8GOqUBOlgbeDTDNtj0wl9oB%2BJg9Lluuakz4ekL%2Bi4ffEOdxUbY9RGXgQcTqOiD7R2h%2FM9ubi8oVmNr6vO%2B%2B8eoTYEx9q47Xm7%2BQd%2BPgC3fKI%2FZLIlCitifJm%2BQpbWPKnXTbZQPGUPRzZo78RkxvsMu3W2KaVPfykE8BJ5DzGDuMBmKZkaZec0qcj2D5610irALMTbu0kelygtzUNPzv2DlmzWYYX6HjXcH&X-Amz-Signature=b8509029f7880fc01fd3afd0d6d4fa4ce1069e152130eb37b0ff41b0ff65b753&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFECKIOL%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHF3ZyFhd3roy81uz909Vjb11Nwv3zWp68uX0xGjOkHsAiBqdCw6lYRDSNKqSxat%2B%2B%2FhDs5BFZsEtlIMyARhMHpBzSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMcfvqTZSF2EdcaAPrKtwDf0QleLwenbiL4ztG4DQtJfuikH6iT6%2B%2ByLYIMgWFA1B1RcEnG7RwatIb9J7ihmIB8PGON7AqCepuhOXf%2B52W1FJLIMx5MTwR%2FJ7Q4dVPe2qy17v1XZyLz9PiyqOCGs6bzh8kTDw5CXlGARlag3F9wC8LVGTPrNziIkgPCursnDGhvVaf5hj6xGM0i7UBHtkTplBfrHJhWmJUsSrujnz5J%2FUooETpmC5HDoU5p5j7SGZoFMlIHkMUGebnTZ2M%2F4QNpS%2FRfaJFw4uBgwkfw1ui%2BKA1LMtKxs4e5xdIwdkRgEbkViI4d7NdSIDLFEHHOQhP8vEyz321YuQMyIy2RwF1CckhlmPKeJCqaredSczg26KMhNi3L22OPjtCqo50G7yMcIZVtsMrcZwL4U0qjtJ0MNwhtR9eYprl24F67scvKyNENtkJFla7p8WrT05QBNKRCOBVgNZH%2FKkHk3hyhK2ft8Fmn1yFljl9W9mPyljIJ3oUTJyPrgNNpxum%2BHTqG4lf3sLyqG8HLbcqyh0GfkImikcuN6BNvKFuIqGI75vxGgq3Ddob0qBI8qC7qu2ShtzrBjniQxXjfzuaMqwhseYMFg6vAdpW7JvdNetsr37%2Bkjtbh4Ceoh3%2FqFTyxdAwpeuOvwY6pgEivBQenyd1MUY2RdoKi4WdGzaXA3oDgCQTECqZT3k8c6fb%2BrDMyxJVmmRf2zG6k%2BVeUulnhVseK0QM154QV1pLOFaWEqnY5sor10PaT5AFk%2FS8Q5kNGugEuBI%2BctbxjizKfCLhDese1D3V%2FKiQjQegDyPisXY26QUdVUcAb2863QUj4KhwOuZ%2FmERkyNR7gbcEdun7pmaDtAiounU2A4cPawsA2MVq&X-Amz-Signature=1638b4cb139fb5f7930a31db093dc4596fe2ff31f5d1c21b24f3f82708d4b77c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OHNTFRM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKup0UHsMpzlWpfeEYSvWHXDksVlIRcL1NLpaOhfQmAAIgI5UuPk%2FAMmrn8Mhr%2FtfVJT%2FIBA3lhwEWzc2eECI3%2FNIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKR0BmvyIRSXmWXNWCrcA%2FEcxlxiLaSWBQpMXhATdH%2BZ10bEoP10%2BxIo%2FLY8Tt%2BWTqtwditAJyRbU2Vh1YEzQ7YXFdgpiX6L5CzRw8EuIO6vYOQLp8Rtg3zl%2FBQw%2BzmTQ%2FVyypAp90oBXCypVtBtD%2FRAVuemMsENmkclCvTqDM4qy6v%2FPZVrLWcukX7nImyqEG%2BSX2kydd%2BCpGMu3AMT5IZz6aKpveXk03PF%2B8kOz3oZA0Ok75GTsAriK2otr59VKRNpTY3at4SszlwHUJSVEx51hU0K567rVLwFlrtuIfBGM02OqsFtrJs3OJTn6LoUq8uwO%2F0wBQjP0Fy1wGyFB9v7k1OKC64DNh4Cj1dmc9xR8K1LazEztvw6fEwKWV4bVWuoccm8dfSKEhLsU2F1T9sqP7gFD1IE5lyptiSjyZtt1uXGGAg%2BP9qlYbkHDfhvvl4Zd6oytlSHxXkcZLJPkDuo%2FPERMcvLYLvpA%2BWWgDboTInuvjLB4MSQueYKYt%2Bzczd7p%2Fr%2F04Qji%2BCYH5yxwXRZXJ9HosQ2ODG1SbFs3Zhy91J%2B%2BEQUz0EeaNgbKW6fRfyE8j2qHdJo8EALWCVr03Dm2D%2BMoVI0VuobD6dGO0X3vM4oOD8wUtHw5Yf5garM%2FVaHhd8kqxcoFinpMNytjr8GOqUBlSGPFtTSgrWvyzxpVi0mWoyfiyVsxq1HSn4H5zvFp%2FIol%2FCwMy%2F%2FqVmL2llzSdbdfgoacouZxTVtZM4QgZ6wCrb7NKicaufBQglZGmyHCxCv9R8HN985fr%2BLcHNJeAlqp12%2Fkd4tp6eLzz6uQ1MGicYfY1TzcDl1GFuh2a8krDLUlUj%2FDgBx%2FIyqRFXKc%2BmAUuPeeQ4H2nu1ob5IqRmo3CuvqFjC&X-Amz-Signature=84feb702ad24b5146e8d13bc0d4bed06e78203ca93d32112f52473c3705a3c88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4PPVKY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtLr8johLuY89TymLPsmHg5vTmzeD%2BwNajskXmWamfEAIgJmNZXVHKI1nDlfnJFrKraVuKduBLxhSf9n5t4FNb5s8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHV1c2iMIFkdpynJsCrcA7Zot%2FyCjxJ2beFUN1CBJGp1hZEuOMLu%2FdoIL6uxUroY9fzW20EijO1iAxp1qlMankpJn7ae%2B9xa0ylq466JVyL%2FS4eij%2B6LC4k175SNrWCE4bKy27fDf4tkIkc3nzFduCHQhsEsegg9kVwP%2BlK4VjbhzRTFJHcHQ7Ki7Dn2uO0nd1NyRfXV4I64ePHnZjM1O13YzjgI5AtEH19SJYHWNQ3G1X2BJE7N1i2a8y93RqBbaXw9CB8rb82rIxZUdEx%2BZ7iZUC265mGzLb8iAPJWb4Fendx4VqqX1ZCAWq3iN4IUduqBRY%2FKmauY%2F38cSA1b8T1WTQ9kt3eIWu00xOJ2KWfUTR9cMH%2Bx7oketxLynA2kc7vmamxjLL8C197BHtAgG1y5YDYBMw6%2B17%2B5XrPeBDcP5Tc1kHhacl0fNilo1J5w9cjx86F8Bm7IBwwGBWbStz0BMOW2B09h6sY5Mg6dQnmZCjejE%2Fck5osrt0mjATWT7av5zD%2Fhq2LdAV5joYoBWMbLF9XVpo16oYVwrRe%2Bz6MgDpFw%2BcmT1kq15y6UPS%2FXr5njV0P4qGv0Hh12Hap1tcJ9LZfeNxkow8i4VYkDLPco%2BT0JSG6CLWUxoJqKAfawHYcWYS9199UY9QJRMNmtjr8GOqUBOlgbeDTDNtj0wl9oB%2BJg9Lluuakz4ekL%2Bi4ffEOdxUbY9RGXgQcTqOiD7R2h%2FM9ubi8oVmNr6vO%2B%2B8eoTYEx9q47Xm7%2BQd%2BPgC3fKI%2FZLIlCitifJm%2BQpbWPKnXTbZQPGUPRzZo78RkxvsMu3W2KaVPfykE8BJ5DzGDuMBmKZkaZec0qcj2D5610irALMTbu0kelygtzUNPzv2DlmzWYYX6HjXcH&X-Amz-Signature=abd0d19c2d3073d6b581f020c2722d48d4c4a7c59c24b3b2880392021870dbf1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
