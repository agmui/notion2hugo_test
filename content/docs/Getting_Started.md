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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BICU4NJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGJlMSDhOHHm%2BbHtcm3K3KsmCjhKPu772hnxZ%2FkCe927AiBR4R7Y3zXieMvGyl7DnbXQT3rv4CJXp7vtFXBk5P9QCCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMJToaDaIHVhCngiaEKtwDz1z1nQ2OyeJtXSX%2B9CPDiINSrUsXx%2FuxCLdPmkX5Y8%2B0Hae3bluv84fjUeSejRmB%2BAOar0%2FCSCGIwbHyVitNb480yplX22EHLb5sv46pB5TOpZMoCHKLyhj9vMMj7xlHJ79oXTN%2F8HYANB9XAvXWvpN5YX94ll73Z%2BrOlhDCmMYWFWreUc02tKYmHwm2%2Bzw0sLyl27omHXTj8HpRJ2aO6vwR0kFyrcB1%2B5UagK83Dai3p6sGkJxA5Ry4NiTncvO2Z0CZbtfDGRtamz7MhToaZ2oYRWggDqUpDNDqx45r1gfZogMsVyc9J56HThihJlWyKCXpnGdTuF6YFIczR5H%2B754z%2BSrNX6DfvCwNFWuu7wGrimgaSif8Ku%2F6ifpY%2B0LmwCtHFAYOA%2Buolo44VraxOp%2FFeEyxlg0sXAWouvA7Sd9Q9yGi9SZ5YLouz2ETLCwA6u6fHtUWA57NlhZ0ehzGUMe9ePnMm5TgsOrv%2Fk36ZZwcONzACpO6tm35CR3JcasqTAKE1V9%2FkrC%2Fublw7pg%2FtNifefunOKodUF0JNtsN9gzuBWcWVJ2JC4AOQwubQbpf2kuuZ%2Bhtu9c4r2IKSXMBHFuPnmmrjyuvywEtRba9YnAmAaUXzDodBkrNfC8wnu2PvQY6pgH%2B2ApYSclQN74a7LljvWvhOB4QHdaM2VXRepDRJ3HFAaKZEKqzPT%2FlZLBlvP0%2Bdo38mn1Mi6%2F1k4YuP4p4JwgqSOLKMk23vDuaQzs2eZhGALJ4WXeBVnUqr8HeAXIlXlN7nM8Cj5lWqCIV0qbikPPE19wkn9X2HF7ODZlBqspULYnGW3Gx%2BCw%2FEKnoHsKdczvNx7ZQpTleYymCjVej%2BKkQJpm450Ni&X-Amz-Signature=13d219b3f7c50512b2b104306af7f71ce957e1e6ff14126d8c8effe9d8614b48&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BICU4NJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGJlMSDhOHHm%2BbHtcm3K3KsmCjhKPu772hnxZ%2FkCe927AiBR4R7Y3zXieMvGyl7DnbXQT3rv4CJXp7vtFXBk5P9QCCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMJToaDaIHVhCngiaEKtwDz1z1nQ2OyeJtXSX%2B9CPDiINSrUsXx%2FuxCLdPmkX5Y8%2B0Hae3bluv84fjUeSejRmB%2BAOar0%2FCSCGIwbHyVitNb480yplX22EHLb5sv46pB5TOpZMoCHKLyhj9vMMj7xlHJ79oXTN%2F8HYANB9XAvXWvpN5YX94ll73Z%2BrOlhDCmMYWFWreUc02tKYmHwm2%2Bzw0sLyl27omHXTj8HpRJ2aO6vwR0kFyrcB1%2B5UagK83Dai3p6sGkJxA5Ry4NiTncvO2Z0CZbtfDGRtamz7MhToaZ2oYRWggDqUpDNDqx45r1gfZogMsVyc9J56HThihJlWyKCXpnGdTuF6YFIczR5H%2B754z%2BSrNX6DfvCwNFWuu7wGrimgaSif8Ku%2F6ifpY%2B0LmwCtHFAYOA%2Buolo44VraxOp%2FFeEyxlg0sXAWouvA7Sd9Q9yGi9SZ5YLouz2ETLCwA6u6fHtUWA57NlhZ0ehzGUMe9ePnMm5TgsOrv%2Fk36ZZwcONzACpO6tm35CR3JcasqTAKE1V9%2FkrC%2Fublw7pg%2FtNifefunOKodUF0JNtsN9gzuBWcWVJ2JC4AOQwubQbpf2kuuZ%2Bhtu9c4r2IKSXMBHFuPnmmrjyuvywEtRba9YnAmAaUXzDodBkrNfC8wnu2PvQY6pgH%2B2ApYSclQN74a7LljvWvhOB4QHdaM2VXRepDRJ3HFAaKZEKqzPT%2FlZLBlvP0%2Bdo38mn1Mi6%2F1k4YuP4p4JwgqSOLKMk23vDuaQzs2eZhGALJ4WXeBVnUqr8HeAXIlXlN7nM8Cj5lWqCIV0qbikPPE19wkn9X2HF7ODZlBqspULYnGW3Gx%2BCw%2FEKnoHsKdczvNx7ZQpTleYymCjVej%2BKkQJpm450Ni&X-Amz-Signature=64cac1b7bdb507e148c677c254f58b0d38563fff739c19a8fc3d0ff32d93e6a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCOB47C%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIEMez5GoI8LsA8TIpoB5ONGGpKZEcliBmn2tEAV8OU%2FZAiB5swFVfNJ4UoF0GW%2Bt4RcdGS4rQIY4HdW%2BLTWyKcJ75ir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM%2FyOgP%2BBjXv11p%2BV%2FKtwDYIHzOSmsTUYC%2B0BV1jZr1ynsVDfTpX0hYgGbXvsAvPR6Q5NblswDmXaSILW%2FbIB9c%2F8NHyCl5aA5Bnn64f4N0ZUPaUB3bokr%2Bfz1wev%2B8BxsEfiTQLiD0f5f9N0niW3yT9eRxoyEQx6uZLuO%2B43YCc5WJcbaVQVyUIdA1LvEo%2BdQkxR0v89xrFuncDQiaXorW3YL8rEg8%2BOR5tJ%2F4iM1MmEGRG3VBU5Yys1%2BGnDK86%2BCgU2aRLqbEA3ox5gGTHHr9VYYWgZMfuYq5usiXLhcC6SUdn2PNkDXGigy6%2FAct73AhB%2Bu9YxoLKcdiH9Pxu6yGboVPnlt6Kd%2FEG263zWRFxD1uj8OtWaLTpq4GZ8ZdirgM2F29kOrkaOiQDo2qOewbY3g92iO0KLRhwe68yY5NuBHa3HJvYEAskr0ZztCuzZSZrKKUFh7yPOSJZdpecUgfT2v%2B0zGdLcQluE87uM8VNcxMTbQT4%2FNQtmYOXlv4tjC%2BOdlK343WkqiGpgoa4UR%2FWvPcRpbMCwxeZF7x3DHmVOX%2BuMvKiJ0qfW9cSgHnUK%2FZV0w%2FkCG6mIwT%2FImG0tD5%2F9o6UdGTB5yLUtL00ZceNFdz4vd3i%2FYpU8CTBBG6zjgU0PG50Jm0Dhj3uIw8OyPvQY6pgEVtmYpGGJZmgZKpzhn1c1VZ8hCmMXM5OHVrCybaNMnoVPIclsA0RhnjECMMmCwYubc7ecvQ3YBxeM5cy06herzP4F79Sbina4PZ8Z7%2F2HQX4GGhW2MLW80sEFrQzUfW6%2F2IaUhT%2FC7PFnhpwsN7nSHkYESFHZcXEdq5XRXUXS%2BRnGrQj7TK%2FzX9uhplcWXJRkxCWIRwexAFBMcxHubsnaBAkyuTBlo&X-Amz-Signature=b5ce86ad1d7f310ee4e2b6204ae413552ddfca50b041923d6e4be25fc9c02bba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCVVBWXB%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIF6VS31v68t6kHzpTLPpn5vfFldEipWH%2BbWJQPIxnLV%2FAiANh0q31ti1QuHWuc84c1X6Ooq0WZFLel7e80p6Eb2Elir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMSJ6kE6ZHeoc1vgQWKtwDDpxayOc58f9QFNXdcuhwQYkS0Ynk2L%2FYFPR8p5DjmSqYu1mCUx03onKKtpD2TOCMxhx8RKtA8wl1gr3xx7VLGIHVnkFnj57TqwcVwEacZ2CAA%2FFQp%2BTdkm0%2BeTJc7F5qKoe0xnbhe1GXYp91y9loi43qbTk2JQaEGbqwQX9r92e0usxP8JbaTiLCOAvxYLPeYIO%2Bb%2FLcUBtsr9eBxVjG9N503Oc%2FLREp8j0AZ4Kw%2FsapLxeVt9q4n1HjTvgdo0DEkxURxaEtYiKx7AHTJiZOXPgTtLOd6Ttjt4LXHAiyBHvWdwMKqAtF58bjUraXClvDEL59rqbuHukkifN9VUMjhJZFyH5LpQEMBbHwJ1H6BzxZ3NDG%2FjtOBr9RqY39kqW0M52dQMqYiLTZrf6rVaQOBzlSaPWJo0hy%2FjUeFksNWpi8Lg4EsmmA%2BfysvdMaw7jgT8Sixr4CeMJ83vr5%2BYsXL%2BGN7pq0tGe5p1YwcC%2B2Y3X76ZkQxBhJ%2FxCRhWZCsaz5XqAA%2FAQVfKp1AYvzN2s7h0AxdAI70ktEKQERmU3DRTFYgtCQ8XQXUPZktmk%2FxCfwr9ZdsGRlRAFz1PSG7YxTJ1vd2uROaRQ47K621a853geEAUob4wJtU6XFxUowgu2PvQY6pgE%2FpkziA53sJ%2Bqmo9QtgVXqlObCP0JS8qvSBwPWBQjnv1F3DvTDzyE%2FFuhKnW1%2BZOnZP5t34ozz%2Btz2HKxZ1nMd1OVJ7F5iV8MgwjkyKZj4Gc6U%2B8VLlZqTsVpQu1OZ%2BfRmSHUj%2FOXkcCFSyPUOFlZ0j8bQ7JpKLHhJs0fA8qx4vJkqMjsSukjbwUMyaqH4YUrhsPUzEAQvQ0f%2BTMOZPvl7awNBlxmy&X-Amz-Signature=030272b6fd71b05806b7965c81cda84c007c3a5d1991df316647364684776411&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BICU4NJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGJlMSDhOHHm%2BbHtcm3K3KsmCjhKPu772hnxZ%2FkCe927AiBR4R7Y3zXieMvGyl7DnbXQT3rv4CJXp7vtFXBk5P9QCCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMJToaDaIHVhCngiaEKtwDz1z1nQ2OyeJtXSX%2B9CPDiINSrUsXx%2FuxCLdPmkX5Y8%2B0Hae3bluv84fjUeSejRmB%2BAOar0%2FCSCGIwbHyVitNb480yplX22EHLb5sv46pB5TOpZMoCHKLyhj9vMMj7xlHJ79oXTN%2F8HYANB9XAvXWvpN5YX94ll73Z%2BrOlhDCmMYWFWreUc02tKYmHwm2%2Bzw0sLyl27omHXTj8HpRJ2aO6vwR0kFyrcB1%2B5UagK83Dai3p6sGkJxA5Ry4NiTncvO2Z0CZbtfDGRtamz7MhToaZ2oYRWggDqUpDNDqx45r1gfZogMsVyc9J56HThihJlWyKCXpnGdTuF6YFIczR5H%2B754z%2BSrNX6DfvCwNFWuu7wGrimgaSif8Ku%2F6ifpY%2B0LmwCtHFAYOA%2Buolo44VraxOp%2FFeEyxlg0sXAWouvA7Sd9Q9yGi9SZ5YLouz2ETLCwA6u6fHtUWA57NlhZ0ehzGUMe9ePnMm5TgsOrv%2Fk36ZZwcONzACpO6tm35CR3JcasqTAKE1V9%2FkrC%2Fublw7pg%2FtNifefunOKodUF0JNtsN9gzuBWcWVJ2JC4AOQwubQbpf2kuuZ%2Bhtu9c4r2IKSXMBHFuPnmmrjyuvywEtRba9YnAmAaUXzDodBkrNfC8wnu2PvQY6pgH%2B2ApYSclQN74a7LljvWvhOB4QHdaM2VXRepDRJ3HFAaKZEKqzPT%2FlZLBlvP0%2Bdo38mn1Mi6%2F1k4YuP4p4JwgqSOLKMk23vDuaQzs2eZhGALJ4WXeBVnUqr8HeAXIlXlN7nM8Cj5lWqCIV0qbikPPE19wkn9X2HF7ODZlBqspULYnGW3Gx%2BCw%2FEKnoHsKdczvNx7ZQpTleYymCjVej%2BKkQJpm450Ni&X-Amz-Signature=9cdec87774dbf23b6f3cbeb3773fed445955d422750c160325fdcbe5519fe280&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
