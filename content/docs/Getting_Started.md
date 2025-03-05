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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDDI6CTL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKww6tinZ6ZUDvmCyAaB5Lz9mMs0j08AVWPr80eBB9AIhALaCFRM3bO%2BNb9%2FZ%2FpTxWca9uczbDpWAeZruBMHeZECTKv8DCCAQABoMNjM3NDIzMTgzODA1Igz4bG%2B8bXdgsG3IPWgq3ANG%2BIjQ4KmX0zJoPJlx4oeDGecGhdV0Pzc66vtB9QowOxlBnykXwVP9T9xxMn5NIGCju2CxqhYaeZVhgk1L1jZST%2FwhWvQSJh3%2FD4eiPdpBgCcdgQipfldzMueSrMZ2bS4UQznHJX8KZd4LqYoO84KU4j2TjBBXymo9HOXwbZgZJAaJSy1jh6qKdt3jufnNkZG2WF%2BYY90t2SJiBmxBeUIEvW%2FlVKcYsHpby9C4CMowcDJEc%2FXJRTwNpwgkGvEh1pcG02zIGxhNNh2J9F42lhijrADPrfGwPXPP2B4%2FC%2BN3tKRSWIHVV3LmZDm5qfwGwnR2fb9gJYxzesy%2FckdRRQ%2BC5buK1U9CST%2BBWw1rgSb1sRMs9%2FJzuOaWyWyRaYEzuNwqC7DUEAcreJTFmkHoGz5d%2FHFF9kPuSiGdNhiJgz6XO7HNBWu4fECas6uLeNlP3yn4g%2Bkhle1KFclqYUElTQcem2NE5xKVGdq91MVztoqgzG8ytAVD3BeYrBxKETeB0WNlUJK50dBoIsf%2B0Klql72kXUwc7ZEqfqTzOJMRS70S%2BYgS606qGWpbm5oqHcz35tVf7nvLEmwkPYakl0xESl6sgfJI3clefy36Qx5YJOh29Hl3xnq%2BDb37CBkb8DC9o6O%2BBjqkAW5HRcUklwn4s6wV8SfAi%2BVrGjn7TNXl8hmEUYt%2Fwmj8kTKajzXKW0m82u2HpD5dZNEO%2FWA7nUxW91zdF5xK3yPGyn8KtNVylICS%2F6K%2FYK9gQndXUNltLpYC6XhF1RRJ4Sxdtebe5K8zU%2FfArmfCDvvTfTxKXJBlWsAWeA0zevvvrMsbRlRb6QSdeW19TQEjjcdUOLymNoZE3oHfTkPqINwxr8Z3&X-Amz-Signature=d731a7dbb684cd0146840cf320487b935b5520ca6218f03b3d1f643e3b2c43ba&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDDI6CTL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKww6tinZ6ZUDvmCyAaB5Lz9mMs0j08AVWPr80eBB9AIhALaCFRM3bO%2BNb9%2FZ%2FpTxWca9uczbDpWAeZruBMHeZECTKv8DCCAQABoMNjM3NDIzMTgzODA1Igz4bG%2B8bXdgsG3IPWgq3ANG%2BIjQ4KmX0zJoPJlx4oeDGecGhdV0Pzc66vtB9QowOxlBnykXwVP9T9xxMn5NIGCju2CxqhYaeZVhgk1L1jZST%2FwhWvQSJh3%2FD4eiPdpBgCcdgQipfldzMueSrMZ2bS4UQznHJX8KZd4LqYoO84KU4j2TjBBXymo9HOXwbZgZJAaJSy1jh6qKdt3jufnNkZG2WF%2BYY90t2SJiBmxBeUIEvW%2FlVKcYsHpby9C4CMowcDJEc%2FXJRTwNpwgkGvEh1pcG02zIGxhNNh2J9F42lhijrADPrfGwPXPP2B4%2FC%2BN3tKRSWIHVV3LmZDm5qfwGwnR2fb9gJYxzesy%2FckdRRQ%2BC5buK1U9CST%2BBWw1rgSb1sRMs9%2FJzuOaWyWyRaYEzuNwqC7DUEAcreJTFmkHoGz5d%2FHFF9kPuSiGdNhiJgz6XO7HNBWu4fECas6uLeNlP3yn4g%2Bkhle1KFclqYUElTQcem2NE5xKVGdq91MVztoqgzG8ytAVD3BeYrBxKETeB0WNlUJK50dBoIsf%2B0Klql72kXUwc7ZEqfqTzOJMRS70S%2BYgS606qGWpbm5oqHcz35tVf7nvLEmwkPYakl0xESl6sgfJI3clefy36Qx5YJOh29Hl3xnq%2BDb37CBkb8DC9o6O%2BBjqkAW5HRcUklwn4s6wV8SfAi%2BVrGjn7TNXl8hmEUYt%2Fwmj8kTKajzXKW0m82u2HpD5dZNEO%2FWA7nUxW91zdF5xK3yPGyn8KtNVylICS%2F6K%2FYK9gQndXUNltLpYC6XhF1RRJ4Sxdtebe5K8zU%2FfArmfCDvvTfTxKXJBlWsAWeA0zevvvrMsbRlRb6QSdeW19TQEjjcdUOLymNoZE3oHfTkPqINwxr8Z3&X-Amz-Signature=34c3a3c26aff6e8d5422a50a1f1f5f1eb7c3d0f116ecd7705438ac771b5f27a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZXXJWHB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFUwgiXOxbuanQfKHFIwlJFVfhipfYmGGdLp7oK%2F0IRAiEAjUx1BLcAOr4C5aTkwQHsP3Fjo1vkAAQ%2Fzs%2Fpza%2BCSisq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGfygwZObhoxFxmBUyrcA0VJrtps6UxDHhJU%2ByoZdBpgn2eoTgbQanHNFXiKN9kWCIxXiug8CVojSR4DGIdch6M3cuFYK0zvTCXLcv6EcaG3%2BpxLy9xiPwiL7TqimgsQVI3XLj6zGe%2BemH8iJjiRbe4oQiSvcZ88xSa4jIKwQVyksHK39PBy7ZKv6i5LUCRHUzZYPMOGFw3VhtQVhhQj9Gm4rt1fq1PSgr31A0UGJ9A6z7zbpOJulbGto0lX0NqNpUs3NqWbkdjT%2B6Coq7IJg4M5D05xUAMDhtR8alx284qScJDSwXWgAeXrAmY0MyocD%2F3FTJRnfz1zNAknkZme4r0kvLuMV25uEOZo6yb653aH0voH%2F8vmcYo0QLBhkqELZI15%2BzPemjhP973PL4i6LfsCTxSmzXOQxLr6hjGgftqT99FDvbNAapTYNbm6FJV3ym4EyUGOITqnMPOS3gi8Nv7h2sJRWee8zIbKvnrCKVdl9Cxh%2B4g8kIz6sCvkKYx6L%2BQpsZgaz%2Bb52zHN3OQkGzMd%2FSadn06P5am1kPfJoCk6UNod8cN6%2F5LRr60kpc5GW0FvRM3vzEt4q2Cou9HEPNOmmYtavncN0VSRNmkMSFIKf7yBBukndU2KjzRhfoqdLqPK10wiszEqmPRlMOWjo74GOqUB5gVxizB1QGd6jPFRe0DlECix4tU5qqyoGbq2czB6heMdCO8OCmusST%2BsclKDZqeFqkNNwPERdRxNgSCEP4EgGEdL6a8Sbld0w7Phw2yRS%2FMGoPB0KQkGLY5%2F64zlPRHII0hosCqLGmcPu%2BqU4NRR3oza%2BMCbCdBXzuQrCJ4ubbO3%2FXQXLAUDqeahsNwOuICpxFFmp5DkNVquXrZfLkT0uKEE%2F73B&X-Amz-Signature=d206ecfb0ffd16356ea0d745d5c19c2f5fde99fc74de8d9863bddc681d7f536f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4HRJOH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfi1K7KhGXzYXi5080yayOQomvD07eHxpU0WPd0NEFtgIgZ5aSzMCxm9ckTeQ9%2FmKsffW2Xb1UnjgLt3FxgXVSEuUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDE%2BqcWEuO63YUYdFsyrcAxvVyGKkVM84j0HAtj9Mc%2FeOLpy%2FkEflX5uQ%2F8tFtAG%2BaAokqzPq1Ntu1F0VqvQiXMVYuhP2aRCInMVKstwCWvzjqjiwRmGh1SUAjvUQaxROe1l%2BkYoj24DQ%2B4lgFjtBodwtRPvbOM7ZEXlYuKRDCWBPSanAp4%2FGaAa9C7TaCrb0dYL1MP6yuEUm3qcfgxZXhZFwF0k46otqP9Kz5nnISxEX3fykxqA3g%2BemuXy9%2FitnwCWw%2FHIw7h6MI3q38SAMQ2xsSXoHY%2FK3Hkqn2vQFFugZ3B5ydXqDX7FnDJ67f8Rwpl8rjPezTVRgbUwUSTmjN9C1hOz2QVnNc8HHHsX34%2FNusbtIhTLZA4uBoZRGs3WxlUcXGLqY3n3%2BfVo0i0XpKAoGdK%2FGyPsGy3nAhlVs5%2BYZzq1hBkJP76KCyYoV6mjYX5cua7JRo9xQW%2FBk86aVYFPY70leSamn%2FgHDJTomDpjCfNUdUPri%2Bq%2FrYSRk3CsoF95BkXQELx0Wh31IMMuePaXdX0%2Fs3%2FwWY5p42i4CkABKEof9%2BREeU%2BRdOjqpuXjIka9ydNu2U2LjEiAR%2B14jBdZ1gTUVFn6X3mMSaO%2FngGorRXUU7ohwj3As3hNS8Ygz%2Bsqazk9TLYNuFEG4MKejo74GOqUBpiMMBUFko8QoM6G4oANJ1xIBm%2FWnNVp3Au%2Bj6aqtRAWG%2FBYm%2FExAfT%2FVdKGK1qmRu4ZGlN5LHkzpPYp3rq7%2F24RWaGGxpO67xrMT6ashMUnDRzZSQfHalMc8nLOFXHqdTGhNaGCHS%2F%2BBRHo47e6oHEtgjfUYJ6z2jVT8Sg94ulHFvLf5tX6isdPwo3Kwbh4koXWCta7Z%2BeeUzuFJzvAPUC8PVP%2F0&X-Amz-Signature=0a89b4b9bc39b2cd86ded08d37bcb8fdf3724780e85778eea3228378b123ae3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDDI6CTL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNKww6tinZ6ZUDvmCyAaB5Lz9mMs0j08AVWPr80eBB9AIhALaCFRM3bO%2BNb9%2FZ%2FpTxWca9uczbDpWAeZruBMHeZECTKv8DCCAQABoMNjM3NDIzMTgzODA1Igz4bG%2B8bXdgsG3IPWgq3ANG%2BIjQ4KmX0zJoPJlx4oeDGecGhdV0Pzc66vtB9QowOxlBnykXwVP9T9xxMn5NIGCju2CxqhYaeZVhgk1L1jZST%2FwhWvQSJh3%2FD4eiPdpBgCcdgQipfldzMueSrMZ2bS4UQznHJX8KZd4LqYoO84KU4j2TjBBXymo9HOXwbZgZJAaJSy1jh6qKdt3jufnNkZG2WF%2BYY90t2SJiBmxBeUIEvW%2FlVKcYsHpby9C4CMowcDJEc%2FXJRTwNpwgkGvEh1pcG02zIGxhNNh2J9F42lhijrADPrfGwPXPP2B4%2FC%2BN3tKRSWIHVV3LmZDm5qfwGwnR2fb9gJYxzesy%2FckdRRQ%2BC5buK1U9CST%2BBWw1rgSb1sRMs9%2FJzuOaWyWyRaYEzuNwqC7DUEAcreJTFmkHoGz5d%2FHFF9kPuSiGdNhiJgz6XO7HNBWu4fECas6uLeNlP3yn4g%2Bkhle1KFclqYUElTQcem2NE5xKVGdq91MVztoqgzG8ytAVD3BeYrBxKETeB0WNlUJK50dBoIsf%2B0Klql72kXUwc7ZEqfqTzOJMRS70S%2BYgS606qGWpbm5oqHcz35tVf7nvLEmwkPYakl0xESl6sgfJI3clefy36Qx5YJOh29Hl3xnq%2BDb37CBkb8DC9o6O%2BBjqkAW5HRcUklwn4s6wV8SfAi%2BVrGjn7TNXl8hmEUYt%2Fwmj8kTKajzXKW0m82u2HpD5dZNEO%2FWA7nUxW91zdF5xK3yPGyn8KtNVylICS%2F6K%2FYK9gQndXUNltLpYC6XhF1RRJ4Sxdtebe5K8zU%2FfArmfCDvvTfTxKXJBlWsAWeA0zevvvrMsbRlRb6QSdeW19TQEjjcdUOLymNoZE3oHfTkPqINwxr8Z3&X-Amz-Signature=7535d01cec0949d4466b3515af89f71cac7762b9ad5c46114c6ed84b6db10c91&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
