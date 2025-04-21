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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVTQJJI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIGsP4SWa%2Fgg%2FYv9dmo38NExmA9ZrtzXk3WBy69XnZKhuAiBCyv9%2BUDiWmdoVM2WoSMTcb9VbJ8klCEXyGdLjDj8WcCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMph%2BiVVoZyjDM0cjSKtwDkZ770yCzMHImX17ks96A7YfF%2Bz22D6V90d9BIXEpc5kOMP0ZMjYHarV0eO%2FPC3QBYW7RCuNLqIpgAUOIRr18pWTXUIiKwWaTiaqGGt1f2GyPg0vXhudNh5ifen6WDA1GyOb%2BmYX1%2BRuUS%2BIBlOTPLsx1b2NR81DhSj2%2FzJEPdk0nOS%2FhLcErFe30gpL%2BVhNDNcE6Axo0aDVnLNnTp24iX4Sudp380Pvnzz%2BSuG%2BGF0b%2BgApz%2BeaMdrfCc%2F780ppSqByJRIeLZHlw7QNjqLMd2VAiny588x1FvdJ6Lu%2FBaMo1vKlxaaUcuuMq9LYq%2FxO5Nbp6yDqZUW3J5MwhfQHXsg9RNu5otCs0DXcMbNjflTVhtSlkSk8VP1102tL0qPn8Y3iPyRWacmjW1w8fXk1l347aOcQKPUqVJaSTNNvgtEzzJvHFc2dpnqTVv8js4w1AlhXhHyTYJqDtBTe%2BaFjnggBDwiOSMSK%2F%2FoO3fepeY4%2BRIn9A%2BGZb8odSOXvxCis1y%2FGgVbjQB6KmuoJWP5zMQtPKqAV36ysuHU9%2FHPDdiSjPTi8AS3uVrFTqLiaE8ztx5PhYqLDN7SNyWwszH0t65RdPtrDQwlmQnJ8Qs8NaVrSfLbSOnFY3R4Wa4pIw6%2FGXwAY6pgF2Wcx3rzn2X4Mowpnr5nn81JP9RU%2FBYFKp0paRNF9QbXUBIO%2ByuDxBkdW%2FPxMy4pnlyPxSVmUbswNqTOb5evA35hf3t6ro9WL9YFA1J3Ct7XRxrhJK0%2BfFAGzpEKGTagj1Yrce%2BQGsOcXbbN3rLXjmn1D%2FqV6cu6u8NECT%2FLPehd9hRf%2Fam6LWY7knfHjIyyOuKiGbXAl0c6wIY%2FVRRBFJBrLtcrjO&X-Amz-Signature=a381592c7039cfeb2e7db416c29eb77eee4aae744e940799ea468bd7ce4fbf7e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVTQJJI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIGsP4SWa%2Fgg%2FYv9dmo38NExmA9ZrtzXk3WBy69XnZKhuAiBCyv9%2BUDiWmdoVM2WoSMTcb9VbJ8klCEXyGdLjDj8WcCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMph%2BiVVoZyjDM0cjSKtwDkZ770yCzMHImX17ks96A7YfF%2Bz22D6V90d9BIXEpc5kOMP0ZMjYHarV0eO%2FPC3QBYW7RCuNLqIpgAUOIRr18pWTXUIiKwWaTiaqGGt1f2GyPg0vXhudNh5ifen6WDA1GyOb%2BmYX1%2BRuUS%2BIBlOTPLsx1b2NR81DhSj2%2FzJEPdk0nOS%2FhLcErFe30gpL%2BVhNDNcE6Axo0aDVnLNnTp24iX4Sudp380Pvnzz%2BSuG%2BGF0b%2BgApz%2BeaMdrfCc%2F780ppSqByJRIeLZHlw7QNjqLMd2VAiny588x1FvdJ6Lu%2FBaMo1vKlxaaUcuuMq9LYq%2FxO5Nbp6yDqZUW3J5MwhfQHXsg9RNu5otCs0DXcMbNjflTVhtSlkSk8VP1102tL0qPn8Y3iPyRWacmjW1w8fXk1l347aOcQKPUqVJaSTNNvgtEzzJvHFc2dpnqTVv8js4w1AlhXhHyTYJqDtBTe%2BaFjnggBDwiOSMSK%2F%2FoO3fepeY4%2BRIn9A%2BGZb8odSOXvxCis1y%2FGgVbjQB6KmuoJWP5zMQtPKqAV36ysuHU9%2FHPDdiSjPTi8AS3uVrFTqLiaE8ztx5PhYqLDN7SNyWwszH0t65RdPtrDQwlmQnJ8Qs8NaVrSfLbSOnFY3R4Wa4pIw6%2FGXwAY6pgF2Wcx3rzn2X4Mowpnr5nn81JP9RU%2FBYFKp0paRNF9QbXUBIO%2ByuDxBkdW%2FPxMy4pnlyPxSVmUbswNqTOb5evA35hf3t6ro9WL9YFA1J3Ct7XRxrhJK0%2BfFAGzpEKGTagj1Yrce%2BQGsOcXbbN3rLXjmn1D%2FqV6cu6u8NECT%2FLPehd9hRf%2Fam6LWY7knfHjIyyOuKiGbXAl0c6wIY%2FVRRBFJBrLtcrjO&X-Amz-Signature=b68994caf608ef5ecc15c1936a1912e1bcedeb951a213fa70c0bd1d721566cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U24TDWZ7%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIEtjTuNcYErxERbuUkTp2AaipBrcrFEkRYRjrL3qkzr2AiBtiGCtLJ%2BzEUfW36NFE%2BATvY9vamPUkFz9vDpUWKz9WCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTrEcfqxK1B66%2BIgPKtwDVP3UR886KTmR4QTZaWzbE5xsBbE0LQwYAuZ9pfD5twZ3cIAG1p6LzlH5XOekXcV8qYW1NMul29wzxZfVppT8EI5miE2SQjiI4K0%2BvDeBdn5xZwghEBddmmlFE404QkO1tyFUcKdWQfWgrul03OPyxQnR9z1OIsnebreyViBVbWZzVI3q%2BIElQYsecj%2FgV3ObbRIeCzcfa8WIbhB5W%2FGhPNoGGHGtDGOdTWmjqFRjlAPJYOmI%2FmsbQUx9O8Vpo75WIaNOXa03ahsGRDk3Ctag5sFHhU%2B6yNEYrteWXOc%2BKbTJEd%2FD8nmS%2BpDA3VEJ4mP9sBzoIAKGhyujQnhubPj6%2B27hS%2B2oOo02RKyICcdSRsJZl%2Flr%2BRAmsQnmfFO77X8JRlf2JYTXrovCwTHUIiEVI0lxO5EzCu5248t%2BLhCdhMto%2BvC1GGPgB3NfaZEIGJJp17%2FzwjUuhoyQCmu%2FwQ%2FM9oADULCX%2Bhpdkq%2B9tDb1TcNrai0RJZCnJYLQRiMwnhjMAbEtJsTRRhco4ZeN2vpSKtUZKpyboMGNQlhHKU6dnHhPWo9vH%2BZWry6c7cRGUg%2FOtlbLmGoIE%2FTNw55ik6jY2pTRsyaPoAFCtrI1DpCtZTrj0y%2Fu%2BsmP%2FOHjuwkw6vGXwAY6pgEhs3pL%2Bj0u3sMNUiKiSJwwZPZsCIQZhQ8f3RfQejh%2FdaKSbKvj%2FFIintSvnAU3SQfepVpENxTavhou8VbnlnUVFCfFgcKmc0oN0R%2FYvIuf9OplMSwGVmzbNrShplKh5Xevjw7vg5gEOW1WxYwx04%2FnCDc9PJLfEbadOnapyoUxUbUknyA8ga9rppleCAS7XRWcDDePuWVzxIBjp2kcKZ0FRMs4vc2R&X-Amz-Signature=a84412fbc6495eaabddc380d5e907eef9686a9333c4b628e9c1d28ddadeeced7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQNCVJS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIEBLOejTKxpSPK63WRCEMQNMzWG4qJhShSK8uh53JDAzAiAXW%2BFThjdaLr7CG1eBUAzwALYxLhQwAQRosRycnCu1lyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Ry2444O%2BWAxxaZaKtwDPCgnpZ3ZVF9mMAiuIgFthLRWB6Hpa5BHiJfI0t5yCErvDndyOi3GFXgyfTB1n%2BJrIWgbtzts0AYHa7rYQW%2FAYm%2Fr3ByHr7IWcjZBcvuiXX8GEDT0B9CCal%2FxL3QykENqxIYonj2eh8ii0s219rfTvCs8YBAXB2Sy0lxVtN3ibDZFKbCTzU12DrhkYaXYG6J0SRqR7Fz7MNPe4ogBXAyx9J%2FC2yb4gho5xsBpV3yAT8XpaPyFmSkyq2NXz%2FjKefPOJqq18l44PlsRNKatQ%2F94j%2BzCrZSBWFUsk%2B4K1VNyWdh2WSLIwi9lcxYVVcxsHUocnLEAZMH38bNQGEKzrSpmhhM9HCqlof%2B%2FkiPij5E3y2Wx72mC2FQuRMi8MuauvRgh7sU1huoFTlbq1QqN1h8RcuT7NYJxuNWlvk%2Fv17YEAcJWFUWYuAuQhLs7ROF4Zz8%2BvvHuLSdqrObZWciS9hlxP2deZhI88SYRGvyaomWJvclJ2QuRkYuJ5qU%2FtvowosL%2FnKojF84vRaNmJkZLwgwmaZjBCxPnamAEMsa%2FbXhqR5LrsGg65c4aCyQPCqRkurBxb2CsBQeuYXvMO5fj0%2BD3wia3taK4CcUZDU%2Fbf6Qo5oKMTlftmQExbdDjAjswiPGXwAY6pgGw1bPuYAH2C3VJlYa4TjKKLoVbZY8tS2VQKgTAnsEAQk%2FLkT9eOGjBTkd5h43qhUAU9sBEdN9UGcIS7F5W3ikGk5TjYIte%2B1mS8YfB%2BM8qLNnkxfEkpLj%2FwRk%2BgrKCknHtmqvRNsWT1aC8DJSrlkN9POHoClhqelis%2F32FYJJQaEkcZDmStGM3jtEBjDHX%2Be9AweIkfK2TB1hV9J%2BxW2jPPVFbAfE%2B&X-Amz-Signature=dae5b203fb085bf729628c89a481ca102cd2564fbcfb0a4a49dbfe42ffc4842c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVTQJJI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIGsP4SWa%2Fgg%2FYv9dmo38NExmA9ZrtzXk3WBy69XnZKhuAiBCyv9%2BUDiWmdoVM2WoSMTcb9VbJ8klCEXyGdLjDj8WcCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMph%2BiVVoZyjDM0cjSKtwDkZ770yCzMHImX17ks96A7YfF%2Bz22D6V90d9BIXEpc5kOMP0ZMjYHarV0eO%2FPC3QBYW7RCuNLqIpgAUOIRr18pWTXUIiKwWaTiaqGGt1f2GyPg0vXhudNh5ifen6WDA1GyOb%2BmYX1%2BRuUS%2BIBlOTPLsx1b2NR81DhSj2%2FzJEPdk0nOS%2FhLcErFe30gpL%2BVhNDNcE6Axo0aDVnLNnTp24iX4Sudp380Pvnzz%2BSuG%2BGF0b%2BgApz%2BeaMdrfCc%2F780ppSqByJRIeLZHlw7QNjqLMd2VAiny588x1FvdJ6Lu%2FBaMo1vKlxaaUcuuMq9LYq%2FxO5Nbp6yDqZUW3J5MwhfQHXsg9RNu5otCs0DXcMbNjflTVhtSlkSk8VP1102tL0qPn8Y3iPyRWacmjW1w8fXk1l347aOcQKPUqVJaSTNNvgtEzzJvHFc2dpnqTVv8js4w1AlhXhHyTYJqDtBTe%2BaFjnggBDwiOSMSK%2F%2FoO3fepeY4%2BRIn9A%2BGZb8odSOXvxCis1y%2FGgVbjQB6KmuoJWP5zMQtPKqAV36ysuHU9%2FHPDdiSjPTi8AS3uVrFTqLiaE8ztx5PhYqLDN7SNyWwszH0t65RdPtrDQwlmQnJ8Qs8NaVrSfLbSOnFY3R4Wa4pIw6%2FGXwAY6pgF2Wcx3rzn2X4Mowpnr5nn81JP9RU%2FBYFKp0paRNF9QbXUBIO%2ByuDxBkdW%2FPxMy4pnlyPxSVmUbswNqTOb5evA35hf3t6ro9WL9YFA1J3Ct7XRxrhJK0%2BfFAGzpEKGTagj1Yrce%2BQGsOcXbbN3rLXjmn1D%2FqV6cu6u8NECT%2FLPehd9hRf%2Fam6LWY7knfHjIyyOuKiGbXAl0c6wIY%2FVRRBFJBrLtcrjO&X-Amz-Signature=f7c092cc10e5f98ec4231b5c72a28ff17eed1fb203952f810212f2ed55ce6f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
