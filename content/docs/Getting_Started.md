---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JU43OPZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC2Z5eD2vqfLP8hIityHuaZRNHKPgkoUNiIbb443b8qAQIgRPgfJ4fz8JeO5kv1LMm3K0HldXOGmN1Cn6x9jETMqTMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEfMNYh%2BdhvY3LIvaCrcA6IDLw%2FvQq8CVJTubHqwfcOnUW8N%2FF9Z5jd%2B3ANm2MKT85jJ16AVcqT1IE6qoP8w8ujWtnHWIX5%2FqviihP7s9wvQU9REAnLP7SXLtbtSRhx2oTH0b0rM9QxNoNn5I81mF8cn%2BIpMbCFDrqd1bUkH7dYRkcRi7fcjqQiKwfC%2BmKdNYxYtfIRC2%2FvR57FTQ81xungpcGlJ0v4vNwKdCfevyCEd9G8H3%2BYVITCLqaDGGtZF8daOVHvS3YuAV0XkSJY6EfOap19kiFuDYS%2FsQjtwEvv9Bi3sntJWmZmh4t7tjP3ZlYs%2B1vf%2BqPB%2FPBRD1%2BJA9kxhHN%2F%2FvzjZdUxAvJHz%2FIrVmby4YBvvs3wvSkgLDadfjuqaHbauiotSp9E8UM0XqtL1ill%2Bub%2Bf1ejJ935QZgZUo%2BFxnzY3Ykg1zPtxQDAowSl26aha7FdDkFuRmdvkF8rAOx%2BHBwm0Ta2pgiRKynk%2FfkmcFZVY%2BzRGqB7KLytsTIZC4BThPKGYA4pSo1BrXBng%2Beremg6M1l9h4ufefkE%2BEcLof0Kww1Vgo%2Bxnl519ubV5SP0YTqjydmcBNy56Xoig3E6IwwjkhV6g5mx96HyQN%2BFgoUbP1knQR8ltB6Kzoe0KW2ilxAThQ31PMNPosMMGOqUBeKGZhOS9U9rr24wmxE1Q%2BJzwoyHf26MoACK8qxZKHt3lzuTSBNVJr8O65Y3W5qKFjqDyNVeU4jCMilNnUhJXCfYbXGvaIii7RJgzj4ZNa%2B2WczmBx7%2BVAzuwECJVkcqa7CVbl8ayfDwY4Cb5S2bJPLpMzyrMcdZulLd8NA4EPiumnXCZ33%2BN%2BxV5DgVp1v4Mb4WMCxQszTu5QCH3y4Q7N3TuTHbq&X-Amz-Signature=f1396aab664a060cbff95cd4e15370e97f0eb1e6fe310c0f2f7576e831c1b0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JU43OPZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC2Z5eD2vqfLP8hIityHuaZRNHKPgkoUNiIbb443b8qAQIgRPgfJ4fz8JeO5kv1LMm3K0HldXOGmN1Cn6x9jETMqTMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEfMNYh%2BdhvY3LIvaCrcA6IDLw%2FvQq8CVJTubHqwfcOnUW8N%2FF9Z5jd%2B3ANm2MKT85jJ16AVcqT1IE6qoP8w8ujWtnHWIX5%2FqviihP7s9wvQU9REAnLP7SXLtbtSRhx2oTH0b0rM9QxNoNn5I81mF8cn%2BIpMbCFDrqd1bUkH7dYRkcRi7fcjqQiKwfC%2BmKdNYxYtfIRC2%2FvR57FTQ81xungpcGlJ0v4vNwKdCfevyCEd9G8H3%2BYVITCLqaDGGtZF8daOVHvS3YuAV0XkSJY6EfOap19kiFuDYS%2FsQjtwEvv9Bi3sntJWmZmh4t7tjP3ZlYs%2B1vf%2BqPB%2FPBRD1%2BJA9kxhHN%2F%2FvzjZdUxAvJHz%2FIrVmby4YBvvs3wvSkgLDadfjuqaHbauiotSp9E8UM0XqtL1ill%2Bub%2Bf1ejJ935QZgZUo%2BFxnzY3Ykg1zPtxQDAowSl26aha7FdDkFuRmdvkF8rAOx%2BHBwm0Ta2pgiRKynk%2FfkmcFZVY%2BzRGqB7KLytsTIZC4BThPKGYA4pSo1BrXBng%2Beremg6M1l9h4ufefkE%2BEcLof0Kww1Vgo%2Bxnl519ubV5SP0YTqjydmcBNy56Xoig3E6IwwjkhV6g5mx96HyQN%2BFgoUbP1knQR8ltB6Kzoe0KW2ilxAThQ31PMNPosMMGOqUBeKGZhOS9U9rr24wmxE1Q%2BJzwoyHf26MoACK8qxZKHt3lzuTSBNVJr8O65Y3W5qKFjqDyNVeU4jCMilNnUhJXCfYbXGvaIii7RJgzj4ZNa%2B2WczmBx7%2BVAzuwECJVkcqa7CVbl8ayfDwY4Cb5S2bJPLpMzyrMcdZulLd8NA4EPiumnXCZ33%2BN%2BxV5DgVp1v4Mb4WMCxQszTu5QCH3y4Q7N3TuTHbq&X-Amz-Signature=006ed1ce3a01abbad1ca77baef4b871480cdbb9e955e65958c5cf94b01d5346e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JU43OPZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC2Z5eD2vqfLP8hIityHuaZRNHKPgkoUNiIbb443b8qAQIgRPgfJ4fz8JeO5kv1LMm3K0HldXOGmN1Cn6x9jETMqTMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEfMNYh%2BdhvY3LIvaCrcA6IDLw%2FvQq8CVJTubHqwfcOnUW8N%2FF9Z5jd%2B3ANm2MKT85jJ16AVcqT1IE6qoP8w8ujWtnHWIX5%2FqviihP7s9wvQU9REAnLP7SXLtbtSRhx2oTH0b0rM9QxNoNn5I81mF8cn%2BIpMbCFDrqd1bUkH7dYRkcRi7fcjqQiKwfC%2BmKdNYxYtfIRC2%2FvR57FTQ81xungpcGlJ0v4vNwKdCfevyCEd9G8H3%2BYVITCLqaDGGtZF8daOVHvS3YuAV0XkSJY6EfOap19kiFuDYS%2FsQjtwEvv9Bi3sntJWmZmh4t7tjP3ZlYs%2B1vf%2BqPB%2FPBRD1%2BJA9kxhHN%2F%2FvzjZdUxAvJHz%2FIrVmby4YBvvs3wvSkgLDadfjuqaHbauiotSp9E8UM0XqtL1ill%2Bub%2Bf1ejJ935QZgZUo%2BFxnzY3Ykg1zPtxQDAowSl26aha7FdDkFuRmdvkF8rAOx%2BHBwm0Ta2pgiRKynk%2FfkmcFZVY%2BzRGqB7KLytsTIZC4BThPKGYA4pSo1BrXBng%2Beremg6M1l9h4ufefkE%2BEcLof0Kww1Vgo%2Bxnl519ubV5SP0YTqjydmcBNy56Xoig3E6IwwjkhV6g5mx96HyQN%2BFgoUbP1knQR8ltB6Kzoe0KW2ilxAThQ31PMNPosMMGOqUBeKGZhOS9U9rr24wmxE1Q%2BJzwoyHf26MoACK8qxZKHt3lzuTSBNVJr8O65Y3W5qKFjqDyNVeU4jCMilNnUhJXCfYbXGvaIii7RJgzj4ZNa%2B2WczmBx7%2BVAzuwECJVkcqa7CVbl8ayfDwY4Cb5S2bJPLpMzyrMcdZulLd8NA4EPiumnXCZ33%2BN%2BxV5DgVp1v4Mb4WMCxQszTu5QCH3y4Q7N3TuTHbq&X-Amz-Signature=e8a655ed8f22317e301ca721921b75d3e4a3f16425816bcefab87cc26479cf52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYNOIDWE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIHqVefvG1KxZwDhPsKworagLBVJe5ToBb4iWUaxx19R5AiAsXqF2DkzFDh1Tj2wijBtbPQpQurktDW%2BufHrJvaOaSir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM%2FsClmReF0dnACLaDKtwDaGugYOdRpjx4y0R%2FwKv%2FLKjN2JEey0khB3Yjv%2BthSEbdLl4NFO%2BfD%2FhvFrFRmeZtTtg4kbv%2FkNbHUQr2V8oshD%2BF28pv7qYwVVFz1nGCgETFPNwROZJhtBWs24tazbzSzrk7eiurKiOMRY1noMXXuwTvPph6sOVlE%2BWM2Xc6QjnL5ECxxS9T7uADwpNMowIrz8paTpNUWeAn4fLgaTTzgjdxS3aKWEEvFPEfpGgMIqluC2V7TEDXE2dFuFTBWJ%2FAbiRHpDTsqHXHXacy2Yzp80ssbucXEWuTnhSWQbXhZ2qvojxIvSJF6B3GkroquyIwVbckZ0FoA6lUgvqF4RIpbzfvy6XXWM8uvdxRAwfslJVsB3NS2B1lP7h%2F23Fs144rUVJqLt%2BgNtlfbnZiHA3scL4yn0mz%2FmrdzMxQ57hZ%2FyllxqMDOxhtH71saGD%2FFm%2FxS8mhjRsi4BtLWoxjrVs0bhsAR3mVFGl6mQfEGi0gr7dOfwnox9mON8%2B49cTD6v48i8lzabLBaqr3RH6iT3%2FEqF%2BeoK9OYqtFf7gi4Ydaa%2BboNyAj4id4rMyx2iLhjOq80vMuBPGG1acaBZ%2BZYHZeNNKHH8AULQbloSbgHzkbxWGINQc3kVOP5nwEU3kwk%2BqwwwY6pgG6hp%2BgbZORAziGWFuLHF2a308s8a30BhDtMjeBqYR1jKILUm9GLomOKif%2Fp3bhudldO23UOYj%2FuFroP66pl%2BdETKTlPsxU7UzfqaYP0X3ZwATmc6qfz5R44SvtHRJKnqafPkWrLAM%2Bt8QkHHr56zFb5av6yf4qfYvcCkIt2J1djtK70E63Kq8PH5oSCIShanDA89TOIdAjFZ0bJnP4iL8csg4q2IKv&X-Amz-Signature=d566d7642a2f26d4ec5d285c659a333660c57baa22dd682b46caa5a78e1b54a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC7NUPTT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCdwTPYt8%2FyMmrrDDapgOI7JTw%2FdcFunugXGeiHD470cQIgG03nGb25fSvOjlmPZRqbURi2AQXXypMIJv0rr5W4E34q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM5SG6EZFbFoRv84ByrcA4ySXV%2F%2BMuHPo9RcczF7ntNlj6pQV29h5l5NqUUxB2kHqin%2F7HC%2Bqm7z%2BTIiQatKKdvDGw18Rp9Wq5zStfjh3c6Fp15eE0FsoLGv3xHUGgiINB9RShoEnhzykIhpK4qe8OboCbK8C%2BK%2BrfgUwfEHTgNyfolpSfd6ZRkEkFGtIioSaAduXsQEmFGVkNz%2Fe4ccfN6UUK2UrfrtotWdKaEZSdJPeJaKFGXsKqAhlbIQsBWQxJhf596DE7vMfrr7GLMKNe4HaQy2MP7b2waH%2BD42HaK16V7E8Kv4EAECERCzvd8QCDOgeisAjn9NlYggEzO7XZioc806cJI%2BWh3D20UWldLhhUUeQDrOmMsxZA8aR2WmmaJtOs7SPN5IZwOru1xyKrltWmVF2XRinORj7njdzrpSkCbwH2s41HpwdA4lB483T52K960d%2F7LrhUfVcB8EzuLcOOR6fCY8Pw45%2BTTou2Tw6mxW%2FgZTG3as6zuyh%2FOQ%2FA86rosUWf997rYURqh0xsqEUCI6OsY8kuVzTJFOCyn2p9Pu7p%2FjBOdEbFvZ1mrobXC6NDPVNEthRc%2Fp%2FFlzdw%2BYMHG4%2BcghrgRJs07jb4QAjSzy3MGA9JeLF8QLX%2BjY2dOLANMUeKr7JR3UMObpsMMGOqUBI57pzxmUR3iUp8PIerc4ZRYYdX5iydFRQbbCUbvQDRWd32FZhvldVlYzdp1Qx8FDmFJAFzfaF4DYFrlFPsWk6oJnKGIItIQpwfXrjiLhgdbSqpGHaX7eYt%2F3C4wsM8JL43Lgv1P1tBYjkcAl1t0rygCMwQiPKi6iHeTB6%2Fc40dLHhPC0eVwWZoFyiQXps376FQ7OCTJIZvfHTlWFi4spbzKTm4UV&X-Amz-Signature=67d354421066788e97d42bc86ac28dfe64c0cf58aa01b4796a760fa6d20cd8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JU43OPZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC2Z5eD2vqfLP8hIityHuaZRNHKPgkoUNiIbb443b8qAQIgRPgfJ4fz8JeO5kv1LMm3K0HldXOGmN1Cn6x9jETMqTMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEfMNYh%2BdhvY3LIvaCrcA6IDLw%2FvQq8CVJTubHqwfcOnUW8N%2FF9Z5jd%2B3ANm2MKT85jJ16AVcqT1IE6qoP8w8ujWtnHWIX5%2FqviihP7s9wvQU9REAnLP7SXLtbtSRhx2oTH0b0rM9QxNoNn5I81mF8cn%2BIpMbCFDrqd1bUkH7dYRkcRi7fcjqQiKwfC%2BmKdNYxYtfIRC2%2FvR57FTQ81xungpcGlJ0v4vNwKdCfevyCEd9G8H3%2BYVITCLqaDGGtZF8daOVHvS3YuAV0XkSJY6EfOap19kiFuDYS%2FsQjtwEvv9Bi3sntJWmZmh4t7tjP3ZlYs%2B1vf%2BqPB%2FPBRD1%2BJA9kxhHN%2F%2FvzjZdUxAvJHz%2FIrVmby4YBvvs3wvSkgLDadfjuqaHbauiotSp9E8UM0XqtL1ill%2Bub%2Bf1ejJ935QZgZUo%2BFxnzY3Ykg1zPtxQDAowSl26aha7FdDkFuRmdvkF8rAOx%2BHBwm0Ta2pgiRKynk%2FfkmcFZVY%2BzRGqB7KLytsTIZC4BThPKGYA4pSo1BrXBng%2Beremg6M1l9h4ufefkE%2BEcLof0Kww1Vgo%2Bxnl519ubV5SP0YTqjydmcBNy56Xoig3E6IwwjkhV6g5mx96HyQN%2BFgoUbP1knQR8ltB6Kzoe0KW2ilxAThQ31PMNPosMMGOqUBeKGZhOS9U9rr24wmxE1Q%2BJzwoyHf26MoACK8qxZKHt3lzuTSBNVJr8O65Y3W5qKFjqDyNVeU4jCMilNnUhJXCfYbXGvaIii7RJgzj4ZNa%2B2WczmBx7%2BVAzuwECJVkcqa7CVbl8ayfDwY4Cb5S2bJPLpMzyrMcdZulLd8NA4EPiumnXCZ33%2BN%2BxV5DgVp1v4Mb4WMCxQszTu5QCH3y4Q7N3TuTHbq&X-Amz-Signature=8cef96e8c41fe78fd57b39e4f42ec548024cd51de168851460d005a44e94b53c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
