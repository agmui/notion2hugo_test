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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMST373D%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIFaqJbcXbFeCbYnZSbrdLbL5ti8S4twj2L4cY%2F8eJ8ryAiAlJUv87eGG8JGgcUxa3mByCdg%2FZHEcQ85gbH7ogWuu%2Bir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMVP%2B7M%2Ba%2Bjiyw%2FtxPKtwDQntLWmT7B0t%2Fr1XuR%2FUSyQBKDRP9Gb1yCnk6NXYvkDr4hygB%2B4itGTmhFVKIWoLRWkFBGKzlisuG%2FGHnimrcjDj9mD2tlMdxfbVf0kaRmOCN4qV6Z2sY4Mxgs90URDLINZw%2Fwatn%2BkNGqlW%2BkduWPzY28gQHISLAG4qS55nE%2Bp8e4eHIR7lRF%2BBhWAAE5EYafE2jz%2Bx7w456opYHn%2FLbjGrvbH5YHzmDryMPojDgpqvU54by58EWK7FrX9U6zzbcVabt6ITVZTn4nfSdBNNsdlunpM8iMnhDtK3VklSG6gB836JftMYEVS4p%2BC60R2FmDYZoOfnJOcyfoiE041GDGvVS5zebFpi4vqerpHFnG%2B2IzpNcRNUvl14c22x%2BPSgFlPsP2Cr%2Br6pYzEJjOZEFZv7MDDlF33skoCosALpE1onmUt1A%2FWuuq9tKc%2FOApD0vXYoZ2Dxx5DWcFnoTcGVjM6CLj%2BMGH0SGsfwMuOncQciQLkAcoP9gWl5xLHssSZJZ5kavtpIfzYrXamDPt7X6MzK%2BMLd%2FAw8i5lmWYizCoIkTz%2Foa%2F8GfGj8%2Fec7%2BXC%2BBT4tvJ4SJJA9OokZzsXwpXIHodPgZPquL2jI5N08A0YTfMbUMFtuk8eJgeYMws9yhvwY6pgECje02lSKjVzHpp4ILJEhGztXQ9Pc%2FJ3SzdQ5ABL6Xd%2BOVqbGqt2uGUNdijiD6E%2B36WJO%2F61xmjg5bDyxXhNGeIKk2ASfKerthA21sOQ%2BW6Pna39E18j%2BdH7baW3p3OluxG%2FCz5aA7lngmwAoPIQ80%2F5u2XEa0L8%2FB9vtm5TXKnqoE6QqtmfM%2Fulky74sg%2BW0bmQGc9DcIg26peD0s7jtjdrLw5jfT&X-Amz-Signature=e64a65221ffc3175dcc6da57221e799f96a6d83d03223db7cf45a1a8f4b53fb0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMST373D%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIFaqJbcXbFeCbYnZSbrdLbL5ti8S4twj2L4cY%2F8eJ8ryAiAlJUv87eGG8JGgcUxa3mByCdg%2FZHEcQ85gbH7ogWuu%2Bir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMVP%2B7M%2Ba%2Bjiyw%2FtxPKtwDQntLWmT7B0t%2Fr1XuR%2FUSyQBKDRP9Gb1yCnk6NXYvkDr4hygB%2B4itGTmhFVKIWoLRWkFBGKzlisuG%2FGHnimrcjDj9mD2tlMdxfbVf0kaRmOCN4qV6Z2sY4Mxgs90URDLINZw%2Fwatn%2BkNGqlW%2BkduWPzY28gQHISLAG4qS55nE%2Bp8e4eHIR7lRF%2BBhWAAE5EYafE2jz%2Bx7w456opYHn%2FLbjGrvbH5YHzmDryMPojDgpqvU54by58EWK7FrX9U6zzbcVabt6ITVZTn4nfSdBNNsdlunpM8iMnhDtK3VklSG6gB836JftMYEVS4p%2BC60R2FmDYZoOfnJOcyfoiE041GDGvVS5zebFpi4vqerpHFnG%2B2IzpNcRNUvl14c22x%2BPSgFlPsP2Cr%2Br6pYzEJjOZEFZv7MDDlF33skoCosALpE1onmUt1A%2FWuuq9tKc%2FOApD0vXYoZ2Dxx5DWcFnoTcGVjM6CLj%2BMGH0SGsfwMuOncQciQLkAcoP9gWl5xLHssSZJZ5kavtpIfzYrXamDPt7X6MzK%2BMLd%2FAw8i5lmWYizCoIkTz%2Foa%2F8GfGj8%2Fec7%2BXC%2BBT4tvJ4SJJA9OokZzsXwpXIHodPgZPquL2jI5N08A0YTfMbUMFtuk8eJgeYMws9yhvwY6pgECje02lSKjVzHpp4ILJEhGztXQ9Pc%2FJ3SzdQ5ABL6Xd%2BOVqbGqt2uGUNdijiD6E%2B36WJO%2F61xmjg5bDyxXhNGeIKk2ASfKerthA21sOQ%2BW6Pna39E18j%2BdH7baW3p3OluxG%2FCz5aA7lngmwAoPIQ80%2F5u2XEa0L8%2FB9vtm5TXKnqoE6QqtmfM%2Fulky74sg%2BW0bmQGc9DcIg26peD0s7jtjdrLw5jfT&X-Amz-Signature=8ec36a01c8c22a711ccbfc47374d06d62a9862d57061e22053094035506a14a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KENCKJ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCFSnToMMNaQDgx6%2FoB%2BAE8CdMYH11xUDd7sk6gRgLaJwIgM2VcoKiDbuUFvqtGWHKq2vLbEbWCtp0ALafqrOOqDZMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGWVjlOEmikN5WzMVCrcA4VA%2Fu%2BrbsFG2Zwx%2Bd20CYLhy5EnIZks%2FEL3bS4dHa0aJLVkvRZ3b%2FgUHTB7%2FTNmUXvFVuTkF99naWtyyjaibc7ccXgnJ10nkdC0dC9zLXx03GuafDc173FaWLPpBJSqIA0JmmUJT%2BJ%2B3shVgS9sR9Fg85%2BY6Z9NDfyxFH8k9znnT7D8MCeEh4CMN783uZaFdDJDirrsyuibdyBx7kcYKRkMICuMU3hj25a9BvQw86bJfoTt2e2Aki%2FCC5beZEvgTjA9F7E%2F2ActITmup7fLU9hAe0%2FXmgLrk02OkSP4Yjor6w1AHv7QQQhENnnuZWbRKGf1pWga1OOi9SbuIqon39bBeq%2FpEN69JNj465g8A9QidL0tUysmI65pUi4sHBk7rs%2BKkca%2FRa5QIDWv35W45qyJZfrDeNeoCIao7TYr94ctJRhp43pasiXr3YKrmq%2BBNtuAQsBiTiTSESSGRNDtbzeQI6dsEqrN%2BVYyfNPbAGC%2F1P6CBbTCgByqM8tzvpyB5gUKygOgFThZ67ujUvt1Y1LPZIoAEd0YSzaIu4rW6dSQyYASadXYA3qiCv4vfshl2SIXwP34GPF8Ti47twEhmKKhcuYMWI0rhsxs%2Fma9J55%2FJmpWB2QLwjdrPxSnMP7bob8GOqUB5ptPA5O5qMHxMlGpX66Bw6t6aBmQIggwBLhKFdmW%2FQo9KMDfoAmwm8fdGqBN7hFdxSv%2BD%2BkWCtN2L2rtswA0NFfUjjodx3hbCOSTyT1kSkc7oIDQKt6fERqNrscsjmsdFz0eMVaD3zCfaZ%2Bsw64I3Sra5o34JbdsbuAU9DsQQawsoqx1F3yahrqCHAJlFSWVI2UnLn1bD1xqh91fvt3UYa7Ct9fi&X-Amz-Signature=a1636880bb4eba12a6d3a3a7055221e65386e9742605fa47f86a363e6f8665ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU67TVGF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDnNiQmalq6%2FW2HbA4TwP36NonzybjWFLRLgqge7%2F8BDQIhAJmwZYqOSKeLCLTxfRbX79X3RMP51GJ5O0QZVGjYapWHKv8DCH8QABoMNjM3NDIzMTgzODA1IgxuIy5zEws3b006dVsq3AM57gWT3g3Ww1W8rAY21x1lNIkFAcddCssZSsRyAqcrUNj5fECYeiM8NVmCok6jclqJQSzFSI4nq5MLARfjeS0jsoHm9DOsAMQ5o1eJrxILLwNBZGr8L8CSzKq91kQreW4lMObJt2fkjIs0sGMJtVmfW3jNLGVY43hoXexiFN5iDCqBL4yNt56DlbG7Zbbd0ns7svdKyMj7FgNNcHGiU0RPVPKZ5rnr2Hfk6zYIvkCDKckL6a51bOm1bGIq7kjAJ4vHEHgDlGPyr%2BG08hIdIJ7UXvdozQ%2Ff%2BwFai1u3uHzsKECNe03E%2B3tmn%2BOfJW%2BGEIxbvgeeSVh5LCppuspjggB72R33yTQaQ9YqrcksDCelUdxsKV0bFmWGu61AG65YmNAlOC3STvdOSj8e31BTkYnSGj29gw2cpnvChxVyAFh98wXJvISSjRd4%2BAZOBQdRTZ92vuU0vwuxFe24ipyAVlfbRPS52024VwpHWpe3KVPgpxzrJk7LUzZa1YSX8CPlxP6ERCAQjGrGcgCyabpJO%2F68NFcAoDcMCa%2FHkymJobJ9zGJ48psigzSju%2F0LnM%2BxpM84p7uFRZRIfbVJgCyTwC1C%2B7Ccrxz0Pmv2Zp7fdlFXLjGKYdSXgoImTWY3RDCK3aG%2FBjqkATrUxfodmajhnZS3ejh1y7rmEpdnOmL7qqmDiJz%2FozGLtzAzjlFbYuTDSUReVPtii%2BLv%2BqNbwNGaCY%2FY06uh5Dpx83UVnxrpIToz9ZCfJuL%2F4zcIIv%2Fh%2BHJT%2BASnoyR9anv4%2BXbCz8QZwi6MfhGV7Ug9tzZPj%2FDZN10dii%2FLbFlSuAjugMqRBMK1kuaTCrX2pSWaPxMUg9tzP5YgZJdNr10RUsZC&X-Amz-Signature=32ba73d3f7056595721e1934b184ba74352985b7cf294c311144fa242efc7ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMST373D%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIFaqJbcXbFeCbYnZSbrdLbL5ti8S4twj2L4cY%2F8eJ8ryAiAlJUv87eGG8JGgcUxa3mByCdg%2FZHEcQ85gbH7ogWuu%2Bir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMVP%2B7M%2Ba%2Bjiyw%2FtxPKtwDQntLWmT7B0t%2Fr1XuR%2FUSyQBKDRP9Gb1yCnk6NXYvkDr4hygB%2B4itGTmhFVKIWoLRWkFBGKzlisuG%2FGHnimrcjDj9mD2tlMdxfbVf0kaRmOCN4qV6Z2sY4Mxgs90URDLINZw%2Fwatn%2BkNGqlW%2BkduWPzY28gQHISLAG4qS55nE%2Bp8e4eHIR7lRF%2BBhWAAE5EYafE2jz%2Bx7w456opYHn%2FLbjGrvbH5YHzmDryMPojDgpqvU54by58EWK7FrX9U6zzbcVabt6ITVZTn4nfSdBNNsdlunpM8iMnhDtK3VklSG6gB836JftMYEVS4p%2BC60R2FmDYZoOfnJOcyfoiE041GDGvVS5zebFpi4vqerpHFnG%2B2IzpNcRNUvl14c22x%2BPSgFlPsP2Cr%2Br6pYzEJjOZEFZv7MDDlF33skoCosALpE1onmUt1A%2FWuuq9tKc%2FOApD0vXYoZ2Dxx5DWcFnoTcGVjM6CLj%2BMGH0SGsfwMuOncQciQLkAcoP9gWl5xLHssSZJZ5kavtpIfzYrXamDPt7X6MzK%2BMLd%2FAw8i5lmWYizCoIkTz%2Foa%2F8GfGj8%2Fec7%2BXC%2BBT4tvJ4SJJA9OokZzsXwpXIHodPgZPquL2jI5N08A0YTfMbUMFtuk8eJgeYMws9yhvwY6pgECje02lSKjVzHpp4ILJEhGztXQ9Pc%2FJ3SzdQ5ABL6Xd%2BOVqbGqt2uGUNdijiD6E%2B36WJO%2F61xmjg5bDyxXhNGeIKk2ASfKerthA21sOQ%2BW6Pna39E18j%2BdH7baW3p3OluxG%2FCz5aA7lngmwAoPIQ80%2F5u2XEa0L8%2FB9vtm5TXKnqoE6QqtmfM%2Fulky74sg%2BW0bmQGc9DcIg26peD0s7jtjdrLw5jfT&X-Amz-Signature=ff9c8e874bf3ff95ce083aca60b9a7d1c3762dd389d43a8c909837bb7d403f13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
