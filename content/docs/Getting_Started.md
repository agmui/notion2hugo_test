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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234TIWJP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDA17dys22oox759myd8TVgIf5GiiqRquOW6UutgJpNwQIgLTskrfOGLTzPVn9iaseYUQfIEhW9rcFOjURY5dc29lwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO4W%2BGosLQC6Zcpx8yrcAw3ZB5zWd6bPowN4Zw9G455yqJ35fmKJ3Hlb7QbBtTiqzv8bM1hXi21N6S%2FFEV9jQhe%2BIBkJMjX9qIkVzWO28zEqO88s5uH3y4XR%2B1CIxDU%2F1mECxsvCcu8ZAH32jn%2Fd6RpWgt1rdyQthh98PJMAxVV77DZpfNo4O4Tf0yl%2FYrsgnKVTH8bNQ96i7x7LMbMgEXIf827Z4FTDRDHsrgBdk1wSLjQLEHnRzBP8BcDWeXt761y47z3qVcsUesDa5oPGQIVOMv2hMkATW7MQKT31f42gpppIpJtaSGLWW5RmQ9bGZuNb9NBYMjb%2B6IadwKguupZIJ63iMWvfGIOw380sLL77tjqWQ%2FULT2%2FWw2YYIQshEDNBbGhXa3F28MaAWe1IYZ5qpuftjw1ykncFX51IdQPNGifXymtKRgmV2XpPkpnDQ%2FBbsMEw%2BSSsEXpdZEwsCDsDO%2B97wo%2FiUipsBAvizb9xi4O8L1mz01yqAoUICHB9%2FOrpyvELhjlrzdkKxH5X4zs2ECFewZozFbIP70%2B82VykliAsldpirc1thi6C6sNDTe1chADQoYldQoxDk82C2stf3C9Xc0kjK1niR9ZE8AZt2SyMQ%2F5849an9LejL8u0viNcPYMcEtxaysfXMO%2FGmL0GOqUBfQdW%2FVzuiNTpFLRujf98YNz4eBfJTWVy5uq2SjsB8Iu3CnXEGyuG%2FGhNT5LnWXpNiZcpa8pOUr7IHeXB0C%2Ftsi2jwbfg%2FVY0e21ZJBw63gz%2F1Sn1xLRXkYGZY%2Fa25uChMWpGwa7tVq3jt2Iqtwf%2BewMCCBe8aEcPtmsacWKh%2BlEmYY1qCsd7yxfQ7%2FOKuN8iQbcPwQeXLBaNRtID2Sa9M2KDRaE4&X-Amz-Signature=e7e0b4306ab09b064f02a88c47e20a4fbc9e1e9a1d7e405c079818a0991b238a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234TIWJP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDA17dys22oox759myd8TVgIf5GiiqRquOW6UutgJpNwQIgLTskrfOGLTzPVn9iaseYUQfIEhW9rcFOjURY5dc29lwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO4W%2BGosLQC6Zcpx8yrcAw3ZB5zWd6bPowN4Zw9G455yqJ35fmKJ3Hlb7QbBtTiqzv8bM1hXi21N6S%2FFEV9jQhe%2BIBkJMjX9qIkVzWO28zEqO88s5uH3y4XR%2B1CIxDU%2F1mECxsvCcu8ZAH32jn%2Fd6RpWgt1rdyQthh98PJMAxVV77DZpfNo4O4Tf0yl%2FYrsgnKVTH8bNQ96i7x7LMbMgEXIf827Z4FTDRDHsrgBdk1wSLjQLEHnRzBP8BcDWeXt761y47z3qVcsUesDa5oPGQIVOMv2hMkATW7MQKT31f42gpppIpJtaSGLWW5RmQ9bGZuNb9NBYMjb%2B6IadwKguupZIJ63iMWvfGIOw380sLL77tjqWQ%2FULT2%2FWw2YYIQshEDNBbGhXa3F28MaAWe1IYZ5qpuftjw1ykncFX51IdQPNGifXymtKRgmV2XpPkpnDQ%2FBbsMEw%2BSSsEXpdZEwsCDsDO%2B97wo%2FiUipsBAvizb9xi4O8L1mz01yqAoUICHB9%2FOrpyvELhjlrzdkKxH5X4zs2ECFewZozFbIP70%2B82VykliAsldpirc1thi6C6sNDTe1chADQoYldQoxDk82C2stf3C9Xc0kjK1niR9ZE8AZt2SyMQ%2F5849an9LejL8u0viNcPYMcEtxaysfXMO%2FGmL0GOqUBfQdW%2FVzuiNTpFLRujf98YNz4eBfJTWVy5uq2SjsB8Iu3CnXEGyuG%2FGhNT5LnWXpNiZcpa8pOUr7IHeXB0C%2Ftsi2jwbfg%2FVY0e21ZJBw63gz%2F1Sn1xLRXkYGZY%2Fa25uChMWpGwa7tVq3jt2Iqtwf%2BewMCCBe8aEcPtmsacWKh%2BlEmYY1qCsd7yxfQ7%2FOKuN8iQbcPwQeXLBaNRtID2Sa9M2KDRaE4&X-Amz-Signature=954b71174d892d200d049644cdc42104a957ef3870e858bf186ae1efda4659e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNHWWZT2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQC1GW44xz73JqiFPrsnqe8aDoyKevsmHbt%2BynpSp1AuQAIgOAcK3mev0riwQACOtLhixOCrWt6kHxbPCV6Aqtn1SCcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGiOiibJXvCuE2y5iSrcA7GDRaZcTcPgWS6tz%2B0sCaSTshJfeeLvVy4l%2F1NmTpe6bweXb%2B1ZB%2FSuZ%2F7jwqRIAcRSJfHgaMZkeQyROAyyUpoZCvbd8Ixa261X%2Fmg0ehsoSKp2bU8vEWFK7OUxTlI%2BzQfTS9DCauBuKlLfoIF5tKs9LcV%2BglotFF4cXqouMb2X%2B4gRCXLflHDpi36DnUx8t2P5m2mM%2BpV1vQG3xo17dHjD33OomWbZ3lZxkjaOiEhGy3bfOeV6WHb6zaPKmQP2eDOOTcv%2BTzsZbDCuL%2BB3d4LSctTd4V5ESmPqBpJFj7mAahCduXu8WV8aylzc9T1H3Cxqmp7RvYKwyzQ5a9IwD6I7OhYSKDkb5jnDx46utv76PDdlWfJs9PI59pA9GmZfIDZaSUZvMGhW11vLXfTOlSbLjSnkwb8m%2BcHgl5qC2RWkx8k9BtdEhBnRSsyj5RNgoyqxIoHORcdclLsi6f4eNiceHvttaOeFm8yUhoPuvR44QkA7Lu0eqq%2B8Im%2F3f8rb7klDS3CnP7wghsdwHbHgBoswXUmCaStrIGnzV3znWF0l0wE1PSzvSK3DAR56v3ORk%2B%2FPj1jjEPAgru6XEKUgExXRuygr3OxLRwAyd0LMn6smslIB3DiEHMeDdQdYMMDHmL0GOqUBFOvckcCcMJ0I7CJn8KKbx638eQ%2Btk8rvLgsxsM8OsIwPCR%2FPMs7sRs5jl5FJVKYVUkfWnQ4cvVn6kHjWC0%2B1239xpC4dTurxYdcELZnaUAahdjaC%2BJHsmiPEYhMa18yVGejWnQsXnFQ5%2BpnQDX%2BPSaIxRqo3LfYo7XnnDQbIm2JHzekhuekw4WexH62tDk47bZjsRufbghqWik%2FpRgDg0CKPu22u&X-Amz-Signature=648a5c7aae242a898e845e8ec2fe1e90a7bbb617c64e14bf0daa8ae7c2962aea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC5NNNW2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQD9wM2mz8PVrA3vJJgdK%2FIBiE64TKDdWER4enCTXe94%2FgIhAOu3PYAwqZEEpDKNUa74xW8pLqURGp5ICj3QXfURpIm8Kv8DCHgQABoMNjM3NDIzMTgzODA1IgyB4kBQ8yyEEMD91N8q3AOQGeOeqZglwferRqitdNRS3IIXdv4pYXWKIw6MugMNzn52%2B7uiFKqOywceCV1QYztAZ4t4h6czJO6MHkS1F5s5TT7EhTJbJN6SZeQgjiQsz3%2FjBNXcb7E6EdfvDsavIxFC5Fu5e%2FKa%2BZfEjql0BSz7TgbhxsIUgStvMXHEw0eqPlsgR%2BS65dUHPZjapLRrGBNJPo3Xc9bRLn9NxZZM0ty7FGIjtVzahWmZSvihZSQdyLg2f0jx6FDHHaDymn5q6pLbl2CN4xo3qeYKDToyJSojaItYRF%2Fg%2Fy9grdkxGBIZ6yLaKuIciRojBqVwFSSC0hfKz7ec2G4NnB1mZeIC%2FCZOzEnd%2BPqzJ7uItVkV%2Fp31I8FFMMISkV5LnlXeEgKbG7chq%2FaBINHnc5B19zF6S4KzunWQDxOmIJrhLG8rd46rLejEC6cAoFJmg0%2BmmDUlJT2xIPT9KzGVEDUHHsYFZsBuHiRRPrvcGiGqdWc6C3Q5DayESOXuePMfcjXQCrmInp9ljHTRzaM%2FDGGHPU3YGTFangxldh3%2BB93IgybG2%2Fs4TKhc8Nx6tk7etoN20%2BiUMY1SYJTeEZXK3bz%2BTxCkx1xCx5WC3eWnCkISHaxThnuRA4iwKinDtOdyKxaSTDDJx5i9BjqkAVreTUNNxBgXuYY7xBAECm37R4GYlOR7Qps0IfDyOrQu5%2B%2FOQ6UQznFPMhkaMIosq%2FqBn2TF8nx4q8InP7FtqQNI9iAKWGj%2BomBhsn8crC6jd0tJu1N7cX%2F1woVQ8lrD4HCNqmZv0Ovj0gMlAwC2IGWE%2Byxm0k3YJqwWV7OSv3SXR3sbMuTL9f0t7YeU3t6MWZG1zLEwL%2BQOZptGMxqBiFMR5TJq&X-Amz-Signature=bebd2041d966454098d79b4f48fa82a63fc2bbcd7c7142d50585a969e2a5efca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234TIWJP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDA17dys22oox759myd8TVgIf5GiiqRquOW6UutgJpNwQIgLTskrfOGLTzPVn9iaseYUQfIEhW9rcFOjURY5dc29lwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO4W%2BGosLQC6Zcpx8yrcAw3ZB5zWd6bPowN4Zw9G455yqJ35fmKJ3Hlb7QbBtTiqzv8bM1hXi21N6S%2FFEV9jQhe%2BIBkJMjX9qIkVzWO28zEqO88s5uH3y4XR%2B1CIxDU%2F1mECxsvCcu8ZAH32jn%2Fd6RpWgt1rdyQthh98PJMAxVV77DZpfNo4O4Tf0yl%2FYrsgnKVTH8bNQ96i7x7LMbMgEXIf827Z4FTDRDHsrgBdk1wSLjQLEHnRzBP8BcDWeXt761y47z3qVcsUesDa5oPGQIVOMv2hMkATW7MQKT31f42gpppIpJtaSGLWW5RmQ9bGZuNb9NBYMjb%2B6IadwKguupZIJ63iMWvfGIOw380sLL77tjqWQ%2FULT2%2FWw2YYIQshEDNBbGhXa3F28MaAWe1IYZ5qpuftjw1ykncFX51IdQPNGifXymtKRgmV2XpPkpnDQ%2FBbsMEw%2BSSsEXpdZEwsCDsDO%2B97wo%2FiUipsBAvizb9xi4O8L1mz01yqAoUICHB9%2FOrpyvELhjlrzdkKxH5X4zs2ECFewZozFbIP70%2B82VykliAsldpirc1thi6C6sNDTe1chADQoYldQoxDk82C2stf3C9Xc0kjK1niR9ZE8AZt2SyMQ%2F5849an9LejL8u0viNcPYMcEtxaysfXMO%2FGmL0GOqUBfQdW%2FVzuiNTpFLRujf98YNz4eBfJTWVy5uq2SjsB8Iu3CnXEGyuG%2FGhNT5LnWXpNiZcpa8pOUr7IHeXB0C%2Ftsi2jwbfg%2FVY0e21ZJBw63gz%2F1Sn1xLRXkYGZY%2Fa25uChMWpGwa7tVq3jt2Iqtwf%2BewMCCBe8aEcPtmsacWKh%2BlEmYY1qCsd7yxfQ7%2FOKuN8iQbcPwQeXLBaNRtID2Sa9M2KDRaE4&X-Amz-Signature=31f78dc4bedfd032f2a1427cf35d7982cd96a34e8a2c7ba24cc57f925f4905aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
