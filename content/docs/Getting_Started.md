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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZTLNVBM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBg8OiMJULcGy3%2FCGzVItfPcJX%2BL5UOateEOHOnDxLNXAiEA%2FnI%2BUOgu%2Bp4QErVtLytpRbpUm4PFNqiBhYE8mBAmzwgqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTM8QO7%2BvUAoObwMCrcA6FHlVtKOF74n8ywuAoFTUPVCNDziON7r0OUx9FgXqiijxHT4u6EPhlrCjxooG63mU5fpN4apR4%2BPV7iiSS6vSMcdfoU5n7s3G01rtH%2BrxnjPa66ebMbsMJTwFP%2F4TFqtUL0sIeY%2BRm1Gmj6A0y9AyYFMJ2fOhiMS1PeYFUV3p10mnZ9Bqnr9mD3nU6HE2yK8N8pnbU1tIrAuxzyGV3w65OgXGnCZd7wpLEmskzPUs9VVcfqtn%2BClkDRLW%2FzP1TKlHz2kzM%2FezFoDFTkZB9YNcVTcwyvEDb8n4lmjwYhDxV45IuhMHigYEXlUOgEvxPpDQ%2FhoRt6YTzZJarlWNrZZsZ8VccbMOktXZIEBf%2FADLq0IS9zSj9NdE2Udu7W5jGpai6CNH0CHxqQVx0iICXIiLud9ExxRw0PjaBQdxgAoU6voH956k%2B4A2RRNtTyKI%2Firhx59U2xjZ9KwJM8mCP%2Fmoq2xYKfEXaLBHpfXQMo1ejYzi1PtB7ViwDa8RijpvLaz69%2Bo6ePNG17%2FEe%2F8h7K5oE6KxxyO9Xn4MGV9%2Bx3WXBeyupAIuuXuIAOeqZbqaKLH4AFUsGi%2BpVO5r%2Bb%2BF%2F31W24AchZ3h7qw9zthqKbAUrO%2FAdV8DHI8KEpXHOpMIf6uL4GOqUB59QkKQ5a6XaBHp0lqiDLuRZxlMc9U1y1b4luHcbi9OYCW3dHZcu4L5W4670BsoGk%2BcGRqtvepBL6ugnudAm%2BwcdiHhfRcb5Hs226l0Ornxj47Au4n%2BQ6YXwaw%2BgVUHZjsz0AnVghQoa5DqZ69YCmpitoQgKb%2Bdcp2z7Yde6hf7sFa8qS6jxFkjJSu8fq50dHMgwE%2FyKRJj5xEDh8gKik21lWLRTW&X-Amz-Signature=30aa73b741edadcf7769bc81b00eaff56d0243f9310238eaa95e4ee62bb4a199&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZTLNVBM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBg8OiMJULcGy3%2FCGzVItfPcJX%2BL5UOateEOHOnDxLNXAiEA%2FnI%2BUOgu%2Bp4QErVtLytpRbpUm4PFNqiBhYE8mBAmzwgqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTM8QO7%2BvUAoObwMCrcA6FHlVtKOF74n8ywuAoFTUPVCNDziON7r0OUx9FgXqiijxHT4u6EPhlrCjxooG63mU5fpN4apR4%2BPV7iiSS6vSMcdfoU5n7s3G01rtH%2BrxnjPa66ebMbsMJTwFP%2F4TFqtUL0sIeY%2BRm1Gmj6A0y9AyYFMJ2fOhiMS1PeYFUV3p10mnZ9Bqnr9mD3nU6HE2yK8N8pnbU1tIrAuxzyGV3w65OgXGnCZd7wpLEmskzPUs9VVcfqtn%2BClkDRLW%2FzP1TKlHz2kzM%2FezFoDFTkZB9YNcVTcwyvEDb8n4lmjwYhDxV45IuhMHigYEXlUOgEvxPpDQ%2FhoRt6YTzZJarlWNrZZsZ8VccbMOktXZIEBf%2FADLq0IS9zSj9NdE2Udu7W5jGpai6CNH0CHxqQVx0iICXIiLud9ExxRw0PjaBQdxgAoU6voH956k%2B4A2RRNtTyKI%2Firhx59U2xjZ9KwJM8mCP%2Fmoq2xYKfEXaLBHpfXQMo1ejYzi1PtB7ViwDa8RijpvLaz69%2Bo6ePNG17%2FEe%2F8h7K5oE6KxxyO9Xn4MGV9%2Bx3WXBeyupAIuuXuIAOeqZbqaKLH4AFUsGi%2BpVO5r%2Bb%2BF%2F31W24AchZ3h7qw9zthqKbAUrO%2FAdV8DHI8KEpXHOpMIf6uL4GOqUB59QkKQ5a6XaBHp0lqiDLuRZxlMc9U1y1b4luHcbi9OYCW3dHZcu4L5W4670BsoGk%2BcGRqtvepBL6ugnudAm%2BwcdiHhfRcb5Hs226l0Ornxj47Au4n%2BQ6YXwaw%2BgVUHZjsz0AnVghQoa5DqZ69YCmpitoQgKb%2Bdcp2z7Yde6hf7sFa8qS6jxFkjJSu8fq50dHMgwE%2FyKRJj5xEDh8gKik21lWLRTW&X-Amz-Signature=45f4fc18f3d914667e4a79a61d2b6111c5104066c32ed6e9f802aa29170bb820&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SS62UW2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCICxmkUBmaI1Q52EQq1k1G78GbgpjmH1kpHG3X8CMNwH0AiADjVRq24RAas%2FjtcrVdry8CofkAr94c3doNymLebTKySqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtt8c%2FDtCUZ9c952DKtwDR2evCVVFq3v49rEXeU7ktYO0yA2pXfnN6KYV0oqMlWK%2Bn67Gp37SD75V9wqgjY%2B2YQvuXhYUtBpCGKXKpbyOAMu1FsHlCbK%2F8NO06T3aPCfFY1bBeEiluTbFu5GaLopBaMd%2B3JgMr%2B7jmA7fh%2FjZzNIFgcL0omxpKAF22XA1t3pRFycGHbYBaqFl67c8DhD%2FCQwvENnawwYZtXlGJ8ijMncfmZodHcsZRCfUZlLVNYmOqR3nI3A217E3bCFwgVbX8qiB8tt1VyFlD7ReTZILUmI%2BVurgmxQCGBdblY5UnTClsFvF5QbDYIguMdodmqsG0%2BDdjrVlIgdCVF%2B%2B3tUy5xhjn1HVPbnNmPVNBeoW9Pmsn3yZmJM4zag%2F9J1G6e%2BPBsP7x07iSN4V9loItfeawrLV5jV1OgIgjoyHND1FS3ed0Zx%2BeypdcHewqzrzsHFMnGUmEwz8nR0oTwilJ0ERm9JYCcM2QEizkJsY%2FSEBsA21RL71yQlJMInh%2BJDiYQ1zT4hjDlfzwrTjXv5jsE%2Bk3NlHZkO1cksAmPf21Map18ch28R8SZB6OU1UHw0PjcIJ%2F66pVS3v5kFcFD1y2cUXp9wtZ5E9wvjfffIKSHyiaPYEhTTZ1Lylxz1%2BVtQwnPu4vgY6pgER50Y9BqazctkF6zW7fd2AcN2s7w%2B1IxW5REXZjGAIXKkW1rAIed8Zx1z5bq2m2PIcClZrdJrBgKWru0AbxtRDjZiZ1E%2F0UbqTm7N4s1UpLmwomWvVplpm1UxHmx0J1JlP68AKSPftOCyYhZMAaxil46nmtSPIOWMFNJLQGjjCM7DmSVIesIjiYlWqimoj944PkyJa7O4k1AQVCYjnO3%2F7nZGLW1lO&X-Amz-Signature=360b485b00e1c92f82aa0a065ebaec62fad8c5b6f566ae67fae02a4bf0827bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXZB6CO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDfwK3oJO7L04r6Xb03gVgShQ2aVi%2Fad0gd%2BKs2P2kJLAIgAqsk2g0FRwJuhZzzVi5R9J2yRvD7uvsMozqWRoQVa60qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRd99TxXNvGz7WvDCrcAyBvUHXX7CYtLPveO0WQnrJMKpUIX%2BUcF9n%2FcEDQpZtBzROr8HtEG0NIwAT0EI%2BxwxVa3OgsI%2BlgJ7yoLu6YmqnJobeA8KlgOvyqhsyMhRJ2XVUjuKRTiw2o1BJ6Eg1JkbWuATpoJJ%2BxDMnGfPl%2FXjAl%2FZMzeFCofQbsK8k8%2B0IBGcWhu3dykKWUh476bSb86vKrwfd%2FPFfEthqOlpAD%2FFE5XGihFb9ZcdENxjqB%2FT8dgWA%2B%2FA7La1UToz1oYs6%2FZSThAjotv1GdpD%2B8C5Osm%2BM5hBlzWZO7d%2BoJyd2QVYidgPWch%2Fh4c2fn9f6USZUdSKsmxhFq8izEwz294xJp3nHszqnr%2F3Y6YP2gJB%2Foc1YCmGxfyGyzGW62nQAZ2ulUtJpe4fCuP3JCO19xWdUL29JsAEOXie2EMKtYTpDPJBZEpIlpLshiL1pY7hrxJve6gvN%2BsmCca%2BpF30KLOIyepS4A0MvZmbTYf%2B2jXP6yhYsfYuihkXiCC7q3%2BH4xjSiWI8p8DAvZUnmu%2FrJY1yhan0QVsAAlKzLqc6CzCFm8PVPcR%2BkmQTJkiMKUgj%2FvtEKQmMbFDoDvvRTBZ46oyg6nMIMwinP5E1KlKAGK7%2FHF1YdxP3y%2Fn%2Bk%2B9zwOw3Y2MJz7uL4GOqUBil6M81iPxCMndstUpeofm1pLZGFTmWlfZvpI6k7Aehsk7YE3R34AHkaqWhbFwDBzZCN%2FBAFBHBuyi9o70Ga60S6GvypCsrp95SZfcQXQFcdxpqWNIcX5EqtRm1RXup%2BaVybVvgGAoNyYi%2Bgi5SAYHS4SeFyjnhMJUGDBAkFTqL6L4GeqJ2RXDAJiPnGcvcVzYMZo8o0QZ%2FXLYA0ugYtlN95wbXig&X-Amz-Signature=99a35543a6fb0ced4ef6fc119525599ab560c16ecbe51c4aa632170821b97f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZTLNVBM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBg8OiMJULcGy3%2FCGzVItfPcJX%2BL5UOateEOHOnDxLNXAiEA%2FnI%2BUOgu%2Bp4QErVtLytpRbpUm4PFNqiBhYE8mBAmzwgqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTM8QO7%2BvUAoObwMCrcA6FHlVtKOF74n8ywuAoFTUPVCNDziON7r0OUx9FgXqiijxHT4u6EPhlrCjxooG63mU5fpN4apR4%2BPV7iiSS6vSMcdfoU5n7s3G01rtH%2BrxnjPa66ebMbsMJTwFP%2F4TFqtUL0sIeY%2BRm1Gmj6A0y9AyYFMJ2fOhiMS1PeYFUV3p10mnZ9Bqnr9mD3nU6HE2yK8N8pnbU1tIrAuxzyGV3w65OgXGnCZd7wpLEmskzPUs9VVcfqtn%2BClkDRLW%2FzP1TKlHz2kzM%2FezFoDFTkZB9YNcVTcwyvEDb8n4lmjwYhDxV45IuhMHigYEXlUOgEvxPpDQ%2FhoRt6YTzZJarlWNrZZsZ8VccbMOktXZIEBf%2FADLq0IS9zSj9NdE2Udu7W5jGpai6CNH0CHxqQVx0iICXIiLud9ExxRw0PjaBQdxgAoU6voH956k%2B4A2RRNtTyKI%2Firhx59U2xjZ9KwJM8mCP%2Fmoq2xYKfEXaLBHpfXQMo1ejYzi1PtB7ViwDa8RijpvLaz69%2Bo6ePNG17%2FEe%2F8h7K5oE6KxxyO9Xn4MGV9%2Bx3WXBeyupAIuuXuIAOeqZbqaKLH4AFUsGi%2BpVO5r%2Bb%2BF%2F31W24AchZ3h7qw9zthqKbAUrO%2FAdV8DHI8KEpXHOpMIf6uL4GOqUB59QkKQ5a6XaBHp0lqiDLuRZxlMc9U1y1b4luHcbi9OYCW3dHZcu4L5W4670BsoGk%2BcGRqtvepBL6ugnudAm%2BwcdiHhfRcb5Hs226l0Ornxj47Au4n%2BQ6YXwaw%2BgVUHZjsz0AnVghQoa5DqZ69YCmpitoQgKb%2Bdcp2z7Yde6hf7sFa8qS6jxFkjJSu8fq50dHMgwE%2FyKRJj5xEDh8gKik21lWLRTW&X-Amz-Signature=3f1956f922dfbce97c3ae823c220ee386299bd9d087478e61ee4d1e03ce1dd6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
