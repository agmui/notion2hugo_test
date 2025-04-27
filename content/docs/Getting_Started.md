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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBUT4YIR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7B0mQkTw36wX1THOKY%2FFNx%2BcDowhuhx3dVjMhHITcUgIhAOIi0x0rWYTZhrTWBtD2bRVLqNeDixhH9bLQ%2FptA3bhrKv8DCFwQABoMNjM3NDIzMTgzODA1IgyUOjWMSOTgRdiYpi8q3ANG4%2FPSCC13Pt%2BHoy2cx82aNjvU3HLWDsE3nvsrRThG%2FojEoKfgqrdCpCeYRundq9DOVT3c6sh3zngtDFS3t7IhPsUVCt7iDeYsJGbEGzpzQsEW7vmaGoDlBfOrMj%2FrklkEEhwNtR8E%2B2BB%2B3JFbpOR6nf877uslYcyUtMcLWldFECSmo%2BRQjdrCSuukKqFWk0o8T6Yj3xVsOXwPhYjHjRzWRb%2Bcgq5ufOPaaHFw5M899ELeg7Zd9iT%2BCLl6r5MFJa3GVHVj7EEphbawUUerQukmirqtslzy7AvRIB8q2Bu2WAsBpi20nCo1vV1WZ21g8TWUk46IsfbMzKu90GzUqhdw3qZ3kDhxiMh7TmIhPIxdgi16pZ0uuyYgrOyQVPNmFcUaYFn2H52OfeHVpqWYLOwGV9cs%2BUF%2F3FJlRVV2Bh3QCm1Hx0Uru0T7cF4C0ao8zR5NSQzTXT%2FKWGksWibE05bgbVXN0gRFwxRjdi9oBOuUb%2Bsf8dINo8sflb2ENeWcxcHCWdbPFXzrpA7n55Po008ZbNyk45NEWZDEqduZz1H6W5yzjBBln1J%2FgYkCTsiwafema58ddniCaiVa7bpo4%2BwRmz%2BkQj%2FjjVW8qCG6Yzc0WsG5LajD8x2yLzHzTC%2FjLjABjqkAbMu2jVYb4pO6GCo8ME%2BzWu4anizR3xFF6qZXR2awlLjNCmdEi9oz6%2FUg8MCiU1AhOYl8olnbJ3MHKPHl3lvah%2BmoE50%2BkUF8hTawsRL4HzExa6%2BYmPg5nKFUw4lSQTL4gwl%2Fzmv32S14aBL14HUV5PJOLIpIDZ0Ci%2BsofP0EVoNOlVTVAI0vFg3utjbL7u3G6xxDntLCaq4IPnYVqyxKexhbh2W&X-Amz-Signature=6e864ef3b6a50a5b284e18504569e2964c58e8b051e5f108c0635ba082cdf89b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBUT4YIR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7B0mQkTw36wX1THOKY%2FFNx%2BcDowhuhx3dVjMhHITcUgIhAOIi0x0rWYTZhrTWBtD2bRVLqNeDixhH9bLQ%2FptA3bhrKv8DCFwQABoMNjM3NDIzMTgzODA1IgyUOjWMSOTgRdiYpi8q3ANG4%2FPSCC13Pt%2BHoy2cx82aNjvU3HLWDsE3nvsrRThG%2FojEoKfgqrdCpCeYRundq9DOVT3c6sh3zngtDFS3t7IhPsUVCt7iDeYsJGbEGzpzQsEW7vmaGoDlBfOrMj%2FrklkEEhwNtR8E%2B2BB%2B3JFbpOR6nf877uslYcyUtMcLWldFECSmo%2BRQjdrCSuukKqFWk0o8T6Yj3xVsOXwPhYjHjRzWRb%2Bcgq5ufOPaaHFw5M899ELeg7Zd9iT%2BCLl6r5MFJa3GVHVj7EEphbawUUerQukmirqtslzy7AvRIB8q2Bu2WAsBpi20nCo1vV1WZ21g8TWUk46IsfbMzKu90GzUqhdw3qZ3kDhxiMh7TmIhPIxdgi16pZ0uuyYgrOyQVPNmFcUaYFn2H52OfeHVpqWYLOwGV9cs%2BUF%2F3FJlRVV2Bh3QCm1Hx0Uru0T7cF4C0ao8zR5NSQzTXT%2FKWGksWibE05bgbVXN0gRFwxRjdi9oBOuUb%2Bsf8dINo8sflb2ENeWcxcHCWdbPFXzrpA7n55Po008ZbNyk45NEWZDEqduZz1H6W5yzjBBln1J%2FgYkCTsiwafema58ddniCaiVa7bpo4%2BwRmz%2BkQj%2FjjVW8qCG6Yzc0WsG5LajD8x2yLzHzTC%2FjLjABjqkAbMu2jVYb4pO6GCo8ME%2BzWu4anizR3xFF6qZXR2awlLjNCmdEi9oz6%2FUg8MCiU1AhOYl8olnbJ3MHKPHl3lvah%2BmoE50%2BkUF8hTawsRL4HzExa6%2BYmPg5nKFUw4lSQTL4gwl%2Fzmv32S14aBL14HUV5PJOLIpIDZ0Ci%2BsofP0EVoNOlVTVAI0vFg3utjbL7u3G6xxDntLCaq4IPnYVqyxKexhbh2W&X-Amz-Signature=1da01f97a3ad80728ccb5bef1837f0f84916b17a3dea2105af7a0354ea4864c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UMZQNX2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqvxl%2BpLkJd4vcD7LPt%2BfpXKItBmlu0huWSUUvAqNwhAiEA%2Bal7JsexD0Vv5e7pplhEj%2FsM30f%2BEJ3Wwn6AIw%2F3XK8q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDNbqYIsJf4Wwb2FTVCrcA19vAbHOPseFd4I4aWRVoK6ldXtMkCG0O6mAC3k4PQ0Y2INUHQ%2F7rDU9ClJAa4D%2F%2FSKDmuOi6TSX3%2Fa2EF47BdJ9ymAMrRb0mN8epQLH8G5ykyScJdi33sl%2BSvRHMGINkVcwfMrb%2BVnz5ZlC44AR6JBG6kQKHVZRgswvW03y5r9cXkvKRxHZGaROCLe6q%2BqEvgxdxWzTlMCln0b9ga8AUxEX8IKuWiIGbKM0UDQsa8qRYpR%2BQR9dSZ3nVyGChyatPeQVScaJhklT1T4FDZ8LBT2Ol5aAVSH%2F93SyKoOJ9g2OgDH5vo%2Bfeg2EeUGihhiczH58rxVMQg0GJDn3QJUw3vfHv9iOKqVFuRa4nSHcIB0W9aGx4s5zbeXBUptLCdimJKYEuPfZT3fYUTKHjAwDRwVoE8Oe6oJ1jeFsbNo%2BsALf2JrpFQwRVKgGZ4k6umcRgUm20Fqkf%2BLaDzUSm8cj31RVAFJdUH6k17l6D1b0H7DePRdnZiPuczYijR%2FphZMD4%2BNK2mWCEfPhsVFzjGUtnRNh9c3ESee4mMDKd9XU2B%2BfD8GJ1XNElXFN0HhI%2FimdPxymyY2m%2BMXSLOF6oJVehzRzIrj%2Fv%2FBrAFxEjTTcygegOTZphDuWOtYFOHq5MKSMuMAGOqUBkY%2FlagzvJkC1EuKObzuES%2FpkkO9FDeo1Ip9IZvsM6L5Ujobylx%2FrEF8TUOc0A0S6U9Ncm5uDCz1pm%2BcIf27AjN2pCQq1RGGPzHk%2F2sPBt%2F8T%2BtxSQH3Lgo1JmYWbACokw%2FF3m6IKiyEhiwlcU%2BmDuAj5qFuOTKvCBF%2BAkjy%2BqUFAjs0mts2Hlei1qlcdeR8ULY05GMZNj8vNpFNrtDhZvsZNs56A&X-Amz-Signature=3a19b01881982a566d0abfc1ebf3a5efa4144eed7ee0b4b41aa77bb8f5f916ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EJOGKZV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjQqE1ZPl4%2FxgQF5mUi3zCPXvWzTzj%2BT69p8E2C2C4WgIhAJNdWzR4sbb1Aja734hM0mi520G0fEv1N%2Fai5GM63y6pKv8DCFwQABoMNjM3NDIzMTgzODA1Igz9rBujli62bigYMFYq3APkGW9w2TI%2BB2mglOkgMaIMX9px8PKyggKWO8IU%2B1v%2Fxitl%2BgMOeRDf3jKjj9jQh%2Bsj7yqqdwO25kKrlumXDjDxL7AWegbLH9wRRTPPob7zN5boajMrUfhB%2FVoOhgxhOtGlFtSAjN%2BhRn4TUFEfCNQNuTZeueJ8VMxG%2F%2BDCCukppEXclgr7fADIy%2Fcm8rmATstLjPtQ1%2F4WRnf1opPeoXtjSf7pA%2BSSQppKn8xzlsaW6xAuOp%2BlbS4M2HpDkl%2BAnNQ9Z4BSbVNJQeYUJpjKwAxypypFphuXUYaAJBlXeBXvdfbv7SPu1xC6R0WYxbRHxHrjuQEigqAwYbdfXeW5lKKd%2BoG7I7f2xpwjU3KKOHXTokq7Kz0Ag%2Bs%2F2mPH7zD0NNIIylt9hGtPI6CuQo%2BESB8htYEMeDCzoZvQPhYl%2FJknAwMffUBT%2FMYwag2S9Eqb9m2vtQx7Sr1DQ7EjM1BiqhobZYbu2j7xhaZsEDkTRYSAAMOgcl1U95m89oLcW8wkq7QvyLIRkY2nWmwuOjeDsCxf1AgR0i2nrBLnr0aMyXPCk99vG5cFBl0QRI5Y%2FvhXB7sidiMJz1CTB7otWR3MVxTzSlg7c29Uk3Gd3L%2BRJjX%2FP0NLe%2B%2FeSJDAoTk92DCbjLjABjqkAbYmALC8ehqZsLRx%2BdZE2odp%2FaD3nC9mflGTvpNq%2FQwC9N8JaHQzqptbF%2FcAkRiCO0BoLpQFyR6s4jlzrYav%2FAx%2FTOCso4ap5JtFKX8Ido1RrHpr13EvRJ3%2FAssMjzLzLJrC1JxL4vRBoW8LE%2BWLmjs9Aycwg21JX2sXcVSCnynLFz1ZFbtVazTV%2BhPxpee36oPYRUWo6TgGkE2EqFzroEU%2B4BNO&X-Amz-Signature=476518c15a71c05b09d945cb6d4b6594074f2f528a18431b45e765ae88bc6f83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBUT4YIR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7B0mQkTw36wX1THOKY%2FFNx%2BcDowhuhx3dVjMhHITcUgIhAOIi0x0rWYTZhrTWBtD2bRVLqNeDixhH9bLQ%2FptA3bhrKv8DCFwQABoMNjM3NDIzMTgzODA1IgyUOjWMSOTgRdiYpi8q3ANG4%2FPSCC13Pt%2BHoy2cx82aNjvU3HLWDsE3nvsrRThG%2FojEoKfgqrdCpCeYRundq9DOVT3c6sh3zngtDFS3t7IhPsUVCt7iDeYsJGbEGzpzQsEW7vmaGoDlBfOrMj%2FrklkEEhwNtR8E%2B2BB%2B3JFbpOR6nf877uslYcyUtMcLWldFECSmo%2BRQjdrCSuukKqFWk0o8T6Yj3xVsOXwPhYjHjRzWRb%2Bcgq5ufOPaaHFw5M899ELeg7Zd9iT%2BCLl6r5MFJa3GVHVj7EEphbawUUerQukmirqtslzy7AvRIB8q2Bu2WAsBpi20nCo1vV1WZ21g8TWUk46IsfbMzKu90GzUqhdw3qZ3kDhxiMh7TmIhPIxdgi16pZ0uuyYgrOyQVPNmFcUaYFn2H52OfeHVpqWYLOwGV9cs%2BUF%2F3FJlRVV2Bh3QCm1Hx0Uru0T7cF4C0ao8zR5NSQzTXT%2FKWGksWibE05bgbVXN0gRFwxRjdi9oBOuUb%2Bsf8dINo8sflb2ENeWcxcHCWdbPFXzrpA7n55Po008ZbNyk45NEWZDEqduZz1H6W5yzjBBln1J%2FgYkCTsiwafema58ddniCaiVa7bpo4%2BwRmz%2BkQj%2FjjVW8qCG6Yzc0WsG5LajD8x2yLzHzTC%2FjLjABjqkAbMu2jVYb4pO6GCo8ME%2BzWu4anizR3xFF6qZXR2awlLjNCmdEi9oz6%2FUg8MCiU1AhOYl8olnbJ3MHKPHl3lvah%2BmoE50%2BkUF8hTawsRL4HzExa6%2BYmPg5nKFUw4lSQTL4gwl%2Fzmv32S14aBL14HUV5PJOLIpIDZ0Ci%2BsofP0EVoNOlVTVAI0vFg3utjbL7u3G6xxDntLCaq4IPnYVqyxKexhbh2W&X-Amz-Signature=5d664b16dbe3449f2b48ede94c1b59e5bc2a3fe3771253be1e8e4438f339c1fe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
