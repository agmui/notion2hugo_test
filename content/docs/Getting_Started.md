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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK534MUQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5Ik6LCPGPa1mmH4Ru63Rb19I8E%2FwSJpXTrLqE3GiMGwIgHpSyIaBCnLKFprUPVULwuRojhe2iYa%2F%2F0JzfQve5tPwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBacZVhYkvKB035V7CrcA1s5rYtpE3s9SISwHFrBHj6Pd3EAZoPhloIqD7r9BWC9SX33TXINZlgdpmW7yT9HG7sEYaD15oTJXX0IGBWzmB%2FdaFIE%2F4pq5lKPISXb24tfwYAiHud17u5nuokjcSa3yoZ12GSPXA0MonlPARGxM%2BzDn2zAlZKJS5sUuZ3pCZ1n8PUiQQrPqKuEiCcJ5f7WEvg5MOajYA713hQw%2Bkvt3wzM%2BTDsipmbfRy87lsPm28KffnwDUmGTdRjchAo%2Bh5RfEH5KvzEUAPcMibDr500QZZLqvSeUHawFTe10HRQpW%2Fkm2XpF21t4wQHWNJT1gwY6Lbck36xpqQ5jKRwkQofqCm0zTgsHGAoEPjhe3d6EG3mQZxfyER%2B6PlFh%2BqsNzI5b2yvryrPPoLTkYL1tDymLJOiJ1uEd22QL988vD8ifXa%2B%2BDmJXvQzT0%2BuehIWC5eC4c1s298yy1gZlnjIVUqfkIUI1SIzuMu3GtL4E%2FaXbxfdx%2BSSHlQi91lAOBNWXCiEldw5I%2BgpSQvfyHpU6aNLJSAXA%2FLB%2FeAoQHkTulGIPi99dBMJEJxYK7PJrP9DxkTfkvV7xI7I8SX%2FBHpxs6AHVQ8UfS437nMqhzxCSjo3VqNHD4DoEZxV1kvZKCGwMNXop8AGOqUBtzXu4Pn7VYShRfQcNHOtL7doEqqrppRwPWfLIkpYLdrN3gAqxEAW1MOG3hdJdhmJ5OfbKsdV%2Fzs6accqacdeL9FuCwPT4EmNxUv3v6dVFmK3wWriCk4jOf4FKsWalTCFgbiWSW68gBX255lGjWA%2B%2BUclIE2gWxh%2B1%2BrA78C%2F4%2BFEpulODb4DhlotHFlrtfMycATuBV5RWfLhRa4LeyD3SpxOWpAh&X-Amz-Signature=a30a41f2f011f961bc2bd36229ae54643fa6a3031187178552f81273cb4e6734&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK534MUQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5Ik6LCPGPa1mmH4Ru63Rb19I8E%2FwSJpXTrLqE3GiMGwIgHpSyIaBCnLKFprUPVULwuRojhe2iYa%2F%2F0JzfQve5tPwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBacZVhYkvKB035V7CrcA1s5rYtpE3s9SISwHFrBHj6Pd3EAZoPhloIqD7r9BWC9SX33TXINZlgdpmW7yT9HG7sEYaD15oTJXX0IGBWzmB%2FdaFIE%2F4pq5lKPISXb24tfwYAiHud17u5nuokjcSa3yoZ12GSPXA0MonlPARGxM%2BzDn2zAlZKJS5sUuZ3pCZ1n8PUiQQrPqKuEiCcJ5f7WEvg5MOajYA713hQw%2Bkvt3wzM%2BTDsipmbfRy87lsPm28KffnwDUmGTdRjchAo%2Bh5RfEH5KvzEUAPcMibDr500QZZLqvSeUHawFTe10HRQpW%2Fkm2XpF21t4wQHWNJT1gwY6Lbck36xpqQ5jKRwkQofqCm0zTgsHGAoEPjhe3d6EG3mQZxfyER%2B6PlFh%2BqsNzI5b2yvryrPPoLTkYL1tDymLJOiJ1uEd22QL988vD8ifXa%2B%2BDmJXvQzT0%2BuehIWC5eC4c1s298yy1gZlnjIVUqfkIUI1SIzuMu3GtL4E%2FaXbxfdx%2BSSHlQi91lAOBNWXCiEldw5I%2BgpSQvfyHpU6aNLJSAXA%2FLB%2FeAoQHkTulGIPi99dBMJEJxYK7PJrP9DxkTfkvV7xI7I8SX%2FBHpxs6AHVQ8UfS437nMqhzxCSjo3VqNHD4DoEZxV1kvZKCGwMNXop8AGOqUBtzXu4Pn7VYShRfQcNHOtL7doEqqrppRwPWfLIkpYLdrN3gAqxEAW1MOG3hdJdhmJ5OfbKsdV%2Fzs6accqacdeL9FuCwPT4EmNxUv3v6dVFmK3wWriCk4jOf4FKsWalTCFgbiWSW68gBX255lGjWA%2B%2BUclIE2gWxh%2B1%2BrA78C%2F4%2BFEpulODb4DhlotHFlrtfMycATuBV5RWfLhRa4LeyD3SpxOWpAh&X-Amz-Signature=4915a4b00d723a5964a69f8697a08ba27895876e5d4b6b3d772ad08cebcc39d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GQEPU4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC26eXl81F0%2Bxchu0xGOo3XkNg1wRYgmp4kaAKJzOHnVgIgGFtoByoXcLzxDJ4meqQvxJ%2F4C29gmUbP38Bh0S13zG8q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDEeSKnsAsQ3KYK6JCircA%2FNGWGMbPGuYFR1pfoV6N00NkQo3ZN1RXeUlJJV8Fxg1oarB%2F%2BbRpDW24ifp2LKTa%2F7tZM1cD7I1%2FoF8mioaxXeMSFJEaTGUyDf7qvTDBuALVYEZZ5NzGZbA8NgZUzdZt4veJG6gLYezftPzTNLWjvneWZEOgjCNRU%2BSOltbEtVwC6DG%2F%2FwVi8UxuL83%2FNIP1lY3Gpdn9fEW7ap8XHSbGaXg1KVIaMa3c098t%2FMBQojdnqiD5wp2BKEpiUgVbbZzenf0rDmovA%2F2OM%2Fux6SnF5HydVB%2FHjFY6fAzBWNg5c%2BN1y%2FAR8fGyIOg%2BSkbyKS80PczCW7k1WfiKmNN90GaHLKbl9vsW8xsE%2BiQ8cNa4ou0Qus%2By1go9kM6uL%2B%2BSN8T4%2B0Xu%2Famt7bmkTGKmePUulApQfMEzg99jCH6gl%2FFRGGxqdJeTylyyoYDRWUEAxYmn2MzKSBa77Uv3N2SJ%2FgzIx6TQH%2B2M1RvNPjSKWx5oNq54kUTW9Jo2VsqSzQxdN8eAuP0Q8YG2lplmHjShFvR40LfBmTSDu5jBAY0nu6P%2BXJSpSt8%2Bjbk4PJOz%2FkR17B2hrGfnl6JrC1ZCQSNiYiY1FUlyorbcX7T8QeGZyN5G885ls5APWeAqZlAvsDeMP3op8AGOqUBCpptQRXdC1m9c%2B%2Fzu4VkxchP2K5z1s2%2BxtT%2Fr9tLYKv7jPER1GmV2cZUgBROhm1EXhBun07mwf3tEab0IwQxowo6Om8x6UHiDof3ePpo7R0pPa0v17tauuL%2FDQTp%2FlJzg3IPzR0EElrkDuBUWYGuWMSry2G01XM2%2Ffp3c9cPTW8RE%2Fol1gR28w1eQmeV8S%2BWfXhYa7U13dQFzFilac4zeLh9Coxf&X-Amz-Signature=f49536ffbcef4f46c6608cb06b507f0fe5fb013c171ca7fee85076b76e39e11f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6NDFJ3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDT4RSO0gvc2Nkb8%2FKXf2Wt8c6WvvsYuSU5U2VQkspPagIhAJxadLHEOJOErhkmjoPSJwuZRp8XuLhR%2BX1jBxo3Vk%2BSKv8DCBEQABoMNjM3NDIzMTgzODA1IgwFCx5qkE5H5y%2BC3lsq3AM64cI1DxAouSjSBnQMPBEvyCH8rnfL7pK1D%2FlV44rson9Fb1B9lrrA4ggjSeMvdnOjbRAgSDnV2%2BJru8v0w7KkYRQgXVz4xO9Qdfp8OZUForyvEIccyEmk0F5GafLZHakWm%2FvGrIoIaiSn5Vx7IDOE4qYhNeUrBtLLmfE0OZfajzkfM%2BnMR97qy2mH73jcc8299qql3Swoj1vGMuVHnsSzeOaFFrENQvCxOZIVAjlLpgS7GTT%2FS7n7tbq3kCw9d%2B%2Btwwk2cN6QLlzSk7LS5OmZ0kMajBIiNgEyiH8SPj9JaYR%2FT5RPf00Xa%2F5okTtEUG49N3WBkwxxEfjpj%2FCcU0btQkvC8nixExrbGz7zLd9Yjc4wTyn5gboKF3%2FUoJyDNVDpmjmZIuMFimKGj33rTQsyIJoQTKu6%2BYOE%2Fi%2FBkyTq6LRTy3uJpdMOKi5ffNu1Gkl%2BVwZvNEtllen2xIbFQF%2FdrLliGaMGeE7iEDU9He9QMePyp2z7hmvLtfnM7sbrXrNuSSDbJRFFdf0a7ugxZPMuq4ubc12ONRugGlAuJN%2BB6N4iYI0WgvJn%2BjagN%2BD1XS49EIK4Y8tDB1M%2F%2BSbjvOr2PPJLCxJr9YdL1K5iSlQWFGLHbTjg8qY6S8E9DTCC6afABjqkAZbjfLZa7YbQzCmagaXWmreOsf%2BNb%2FMhIYmra9adndLRccbziOBhZFXxlLutxWwHuLP4mgczsX3tAmFSFC5pHCBL1%2BxYpUdWBeyuokOouKZ0rEXdAEYYjYGA7xIjMdv3Q5WlLi7EXa2%2B1C4YyyADPhCzyWM1m25yVSuiN%2FVJUwLWa%2BiYxGmiYSA3Anq1MdykdgnxsugF4fzdvkoC0u8nrZSXyU1U&X-Amz-Signature=e43f0f0b508ae3ca44f92e328d20fa0f04b9e8424b6e263830a01ba9c16b7693&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK534MUQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5Ik6LCPGPa1mmH4Ru63Rb19I8E%2FwSJpXTrLqE3GiMGwIgHpSyIaBCnLKFprUPVULwuRojhe2iYa%2F%2F0JzfQve5tPwq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBacZVhYkvKB035V7CrcA1s5rYtpE3s9SISwHFrBHj6Pd3EAZoPhloIqD7r9BWC9SX33TXINZlgdpmW7yT9HG7sEYaD15oTJXX0IGBWzmB%2FdaFIE%2F4pq5lKPISXb24tfwYAiHud17u5nuokjcSa3yoZ12GSPXA0MonlPARGxM%2BzDn2zAlZKJS5sUuZ3pCZ1n8PUiQQrPqKuEiCcJ5f7WEvg5MOajYA713hQw%2Bkvt3wzM%2BTDsipmbfRy87lsPm28KffnwDUmGTdRjchAo%2Bh5RfEH5KvzEUAPcMibDr500QZZLqvSeUHawFTe10HRQpW%2Fkm2XpF21t4wQHWNJT1gwY6Lbck36xpqQ5jKRwkQofqCm0zTgsHGAoEPjhe3d6EG3mQZxfyER%2B6PlFh%2BqsNzI5b2yvryrPPoLTkYL1tDymLJOiJ1uEd22QL988vD8ifXa%2B%2BDmJXvQzT0%2BuehIWC5eC4c1s298yy1gZlnjIVUqfkIUI1SIzuMu3GtL4E%2FaXbxfdx%2BSSHlQi91lAOBNWXCiEldw5I%2BgpSQvfyHpU6aNLJSAXA%2FLB%2FeAoQHkTulGIPi99dBMJEJxYK7PJrP9DxkTfkvV7xI7I8SX%2FBHpxs6AHVQ8UfS437nMqhzxCSjo3VqNHD4DoEZxV1kvZKCGwMNXop8AGOqUBtzXu4Pn7VYShRfQcNHOtL7doEqqrppRwPWfLIkpYLdrN3gAqxEAW1MOG3hdJdhmJ5OfbKsdV%2Fzs6accqacdeL9FuCwPT4EmNxUv3v6dVFmK3wWriCk4jOf4FKsWalTCFgbiWSW68gBX255lGjWA%2B%2BUclIE2gWxh%2B1%2BrA78C%2F4%2BFEpulODb4DhlotHFlrtfMycATuBV5RWfLhRa4LeyD3SpxOWpAh&X-Amz-Signature=0a24a445e833bbe9ee2c8ed8a80db5b78ac44dcbab5163fa651d41567c70bcc1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
