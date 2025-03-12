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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7WH5F4U%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICvu6qMDHqvRLKlcTO4AYe3VKIdqkYZQ3JQB4jOpEijBAiEAg8zyN20Vjuq15qKORB42tFXMM5P43Z8T9%2BbuLUsPybwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMW4OXLIWhHrrZ%2FWOircA2GB%2F2XoZHEqYqv3Uj39KM2tYHmhtSbd5bbHxU978059Fb8SY%2FlheqofQxrAM4HWVwroGv20JpruD9J6sGMvAMLEySBVHfY%2F9ueGuG7t2eIIANFcjxxmS%2BAmcbEGEf9A7KiC7qaZNYJtan7xX5mPRXDV%2Fw9GlGle4xM7i5qEMEtrFNEBas756uHUAl5PXuPm96clt8p3zxkeKYat6G1kPqSMDN%2BUHcV7G%2FZT7kXhGSfYyseMx%2FhuoBqA05ok0mdVng%2F5EH%2B6XCAmMyFLeqfl4I%2FG%2BUuXkoX3txUrwiYlAO1PK4zpxMJELXoFtyuppXuxRhtRDfJGIfH3SWOtmj4G8MHYhlopCM80jyCr59wqqCc8WfOsWZyllipNdyvWD4W3TJ6W0QUDCbJOwTD8P6dJu%2FsJKufYoYGiSBzuwsX68ZegZ%2B9OFwDuN6Zmu2qmenb2P5jvh1aQdnQZi9oxhFixLggJWntxOIKA5Zq6aqgytIngJvH5YZXqyh6jGqOWaIWxKNXCMrT5aUa3LggWk0SUMi9D9%2BR8c5ZiKd%2Bwhjml7dN4DNnKsWtX04InNh5QCFWF9WOI6h5bq%2FHypvVk5rzmex8muzqWOvnyeucChV%2BQdq9%2BSNE24DKoQyBh7TslMMjkx74GOqUB48EgAaFv6gM6kNRv7Cg1Lm5TkcGZz2q5RD29fjSapS5cE%2F2OQQQk%2Br4LrVu%2BxMDlHy4vuPJMJFwyQunkFajuQO9hL7Gx%2F7gQ8lcVelFi5hsquvuKE6d%2BqOFvxtjAa3okqgRdVlmb%2FpoybOX3BCy99hRqji%2F6vdONtIxBymkF2bv4b67yuKLYq5ANMMmOyvI9TvOt0NOW77htThXWior6fthKNied&X-Amz-Signature=b29e80730539402bbca3e5a91bd582beafd4751ced4cf44506e5eee3c1194045&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7WH5F4U%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICvu6qMDHqvRLKlcTO4AYe3VKIdqkYZQ3JQB4jOpEijBAiEAg8zyN20Vjuq15qKORB42tFXMM5P43Z8T9%2BbuLUsPybwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMW4OXLIWhHrrZ%2FWOircA2GB%2F2XoZHEqYqv3Uj39KM2tYHmhtSbd5bbHxU978059Fb8SY%2FlheqofQxrAM4HWVwroGv20JpruD9J6sGMvAMLEySBVHfY%2F9ueGuG7t2eIIANFcjxxmS%2BAmcbEGEf9A7KiC7qaZNYJtan7xX5mPRXDV%2Fw9GlGle4xM7i5qEMEtrFNEBas756uHUAl5PXuPm96clt8p3zxkeKYat6G1kPqSMDN%2BUHcV7G%2FZT7kXhGSfYyseMx%2FhuoBqA05ok0mdVng%2F5EH%2B6XCAmMyFLeqfl4I%2FG%2BUuXkoX3txUrwiYlAO1PK4zpxMJELXoFtyuppXuxRhtRDfJGIfH3SWOtmj4G8MHYhlopCM80jyCr59wqqCc8WfOsWZyllipNdyvWD4W3TJ6W0QUDCbJOwTD8P6dJu%2FsJKufYoYGiSBzuwsX68ZegZ%2B9OFwDuN6Zmu2qmenb2P5jvh1aQdnQZi9oxhFixLggJWntxOIKA5Zq6aqgytIngJvH5YZXqyh6jGqOWaIWxKNXCMrT5aUa3LggWk0SUMi9D9%2BR8c5ZiKd%2Bwhjml7dN4DNnKsWtX04InNh5QCFWF9WOI6h5bq%2FHypvVk5rzmex8muzqWOvnyeucChV%2BQdq9%2BSNE24DKoQyBh7TslMMjkx74GOqUB48EgAaFv6gM6kNRv7Cg1Lm5TkcGZz2q5RD29fjSapS5cE%2F2OQQQk%2Br4LrVu%2BxMDlHy4vuPJMJFwyQunkFajuQO9hL7Gx%2F7gQ8lcVelFi5hsquvuKE6d%2BqOFvxtjAa3okqgRdVlmb%2FpoybOX3BCy99hRqji%2F6vdONtIxBymkF2bv4b67yuKLYq5ANMMmOyvI9TvOt0NOW77htThXWior6fthKNied&X-Amz-Signature=6fe61ae64cecf713ab11b140aa5e249a302fd353a4e4e5b5f4cad9067320bb14&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6K7Z3GW%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDRMOJnitn%2BryrLmjNrhI%2F4BxCjeb%2BklBCF4USxhCz7TgIgBdYrYvQefV9wlee7HQm79OmTId9Bh%2B0nvZMVw10JoRgqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWKdYsEMt1XAqGK%2FSrcA1KXS%2F1vwIJ0LT7EyfXRF%2FTXDm%2F0OJYoWhoGBbB%2FiSxMt8MZ5SJkMYMLsfZwLLetfcQLD4AW7lzrg3aIfvfiW7zlCeuvnMDSHG289ysnp98%2BC25FL9MOM1ySNZul51ZuvvyhJHTE6uVX2EnY3Ss3rmGHMHel8%2FvmIcmkf1ekw9jJ9vnn2mzrAkNl%2FObgLNLtK%2FVC8S1H3qOv1%2FjoQYFJztuiPGpOfxRxOZTFYfv%2BRsg1sttcdfoZPpSLP5Ti5aTMYoB4jm9wMt2xWGwDAlDZlo%2B5viaiPzvVf4qzZ5%2FNoYvkYvXRPB11KMUILwE%2Bs8O52NesNxojmrqIuiLv5FOVsgeULbqS6Q%2FfXrU80mc37TEzxa2sm%2B7yDtvkCQKuCnIk7s9NONi7pO71Mn45A%2Be%2BXAsXP7uq4WKh%2B0ZKF5ako5UVgO1ILS%2FEnKputEBmtdovaQWqa6f59S7HEjIWDGH27DqUq97BgwWUMlGUGOpyKG4iVUj3R92hv2dQLaOvmZkDt%2Fxmgo0cOQroCfh0u6aot6Dll1LXjYg%2FJ0LaRjaidy6grGI6Fe%2B7szifo0BOsQE5mlX672GwqdoN9KJDYzC1tqYJRPwuj79G%2BQECLq66DmYjE5vexhcmNy3uEP2OMPzjx74GOqUBpJ2hgjWs1bwjCrZSxtG4ElEyd%2BV5ZsgCue0dWTc5UlpxNJ57asl9MaqousimEelMRdoDDhr4jtVduCtGxKk0BBzS6O2fl3gANlqH8zjLvretRpqHj5eqhWpEd%2F%2BCXpOxFAtau7yZ6UxkoUft2UGw7euZ%2F1ZBUqwjRuHB0o%2F8SE7Yc4d4CE21lvWW3hE%2FX18D3GgZN8anLo8%2Fc8eqlHi4lITkJ6rP&X-Amz-Signature=e45e5e1af94e8f4f35e517d1ffdbe4af9243b53d1b9b457fff56403bb8132a09&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIIBMM5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC4yO%2FghNmccQKpbE%2FQLP8ttLc9MTrEFGh0kKS6QP0tqQIhAMhwV3ht%2FeQ4zdFGA%2FxjUcUE13k48eE84W3BqHBHEcs5KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVrD8NLHhYune69Wsq3AMiZ8gwQh7pvVUHi8GpVmt%2FdPEagldil22OCuiPtNayqXtCoJKW6o%2FmxyyeFZKsIS8ppna5%2By1DBnvaJX%2BajJU3uROlG6h%2FyR0PeCGIFxtbp5XZcJQmyAtvzvPorFxp9PhlefyUWBThXReVEWC1qm%2B%2FogVH%2B1dtRUM3VgXFnIBckVh%2FGWzMft6PCxwm%2BggQvNaMTGyrREFu4Vjab9U1CFSFzooQ%2FLc9n5m0ZfSqKMUaYKzXJX8giWYixKARFLbi1L2HEg2%2BXHBVGV%2BTwypF37ItKCuYnFnxTgDvzxl14%2BoMiYnEYVXqj7VUTwsmGrYnVGTWVHwPLdFw1vffuYISekrG5ahVSCwwu30F1Z5ut5xOiKEwh07liNWeqgBQHWqi%2FReI21z9dLat%2Bi%2BA2vAiM9NVN3F2qM04GqgUUmSf%2Bo3ZUHDhAhGdgcLgXMF4vd9gzp5dG3cIuEkXMRcgGIKbIiKSIlYlDv9ZjiovKfVu96gFs2%2B6984uFMtDfMFNEHZXS9ftKWD%2BLylH6FfD0N%2B1TA1ey7OqAB7fnxGoxX2X1HCSNegFuyji7ti7QhAU45emgrYCUi3VBOeVlWP3jwtMyhTJ9lRgBvQObC9x7rihz%2FSdnRQFobPj1kLM91hERDCc5Me%2BBjqkAUdlrqveKZ0tbVnG9A0PdzzSpIKfNhorpgMeu3%2BGkycJy6%2BMvDxvv8hf84kOCYx8MLNxj95SI17PBFVY9kFvyLpR4st8HxWAvjE%2BxEtXsLMiVHJKOpM8l%2FR%2F0Fv5qg0ujOUZThA9W%2BTC9wLoZVYmRf1WRI%2BN2SXQo%2FNNJsoGZvbqqH8UD%2FvClZUVF%2Fzl46NJvCvDQGz6H%2FXGBJKqIAWbFequ2wv7&X-Amz-Signature=15f758ec2b716458c2df5b94cb978846363a9f7385d161aab1db415d2c430961&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7WH5F4U%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICvu6qMDHqvRLKlcTO4AYe3VKIdqkYZQ3JQB4jOpEijBAiEAg8zyN20Vjuq15qKORB42tFXMM5P43Z8T9%2BbuLUsPybwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMW4OXLIWhHrrZ%2FWOircA2GB%2F2XoZHEqYqv3Uj39KM2tYHmhtSbd5bbHxU978059Fb8SY%2FlheqofQxrAM4HWVwroGv20JpruD9J6sGMvAMLEySBVHfY%2F9ueGuG7t2eIIANFcjxxmS%2BAmcbEGEf9A7KiC7qaZNYJtan7xX5mPRXDV%2Fw9GlGle4xM7i5qEMEtrFNEBas756uHUAl5PXuPm96clt8p3zxkeKYat6G1kPqSMDN%2BUHcV7G%2FZT7kXhGSfYyseMx%2FhuoBqA05ok0mdVng%2F5EH%2B6XCAmMyFLeqfl4I%2FG%2BUuXkoX3txUrwiYlAO1PK4zpxMJELXoFtyuppXuxRhtRDfJGIfH3SWOtmj4G8MHYhlopCM80jyCr59wqqCc8WfOsWZyllipNdyvWD4W3TJ6W0QUDCbJOwTD8P6dJu%2FsJKufYoYGiSBzuwsX68ZegZ%2B9OFwDuN6Zmu2qmenb2P5jvh1aQdnQZi9oxhFixLggJWntxOIKA5Zq6aqgytIngJvH5YZXqyh6jGqOWaIWxKNXCMrT5aUa3LggWk0SUMi9D9%2BR8c5ZiKd%2Bwhjml7dN4DNnKsWtX04InNh5QCFWF9WOI6h5bq%2FHypvVk5rzmex8muzqWOvnyeucChV%2BQdq9%2BSNE24DKoQyBh7TslMMjkx74GOqUB48EgAaFv6gM6kNRv7Cg1Lm5TkcGZz2q5RD29fjSapS5cE%2F2OQQQk%2Br4LrVu%2BxMDlHy4vuPJMJFwyQunkFajuQO9hL7Gx%2F7gQ8lcVelFi5hsquvuKE6d%2BqOFvxtjAa3okqgRdVlmb%2FpoybOX3BCy99hRqji%2F6vdONtIxBymkF2bv4b67yuKLYq5ANMMmOyvI9TvOt0NOW77htThXWior6fthKNied&X-Amz-Signature=9e1a141d3a8f2e15ee496b948b914a6127f6f2469c01e1855fbfedec5a89966c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
