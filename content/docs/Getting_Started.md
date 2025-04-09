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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3TM5JTL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIBErPtNUGNjX0qmanUrpk%2BT1XIxSB%2F3DQVfrcJVpVIEZAiAF%2FttJar%2Fh2y7H4%2Fj%2F9s3o6hcgh%2FqecZxEwoFf3DZBdSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlTo%2FG%2F3GvTowTMLFKtwDh28Ec5IAvuFhK0mTICnFG0R2pQJka%2FAaKAj8SVPO%2BGFndd%2FqK1umBwu5aS7BaIRI6GO3MdUHJm%2Fu%2B8JQ%2BK0jLXjzhpDAVXNIgT5sf88PR4MzEaVejeQ9TJNWgGho0RidU68pIZmCcHVHTHBS5DXHnztk72ZEQkWuFd98CSlA%2F2TL5pOiXqYCe9Bu5PU%2F%2Bc4I8W8D4bj%2BtIxMtAN23I8Rf946PR8MpwoemlbRtQ22NS8plciAzRUAvK4Sey4JR1JSdxi%2BE%2BRehCO97gRmUn%2BtAB44UlikcBpvycBiVXZL3gOVLjdRPKkZVay14Ybsxnhbe1oQTGNckfZ%2B4BMRM9VCaqiOKThuHDPno13UoNz1RmrXVbAs6BQnHJFN0pSzsxKRfC4d1C5J5dWjcFUVff5VZ%2BOUzK93T%2FNG2HDIIEJkqywEh7OoqdHj2LxHgDm94TFaIX67SRTox1M0gKNVhKrGdxT2GikmnogTg6xW3PAtk9kWviWqJYLQvGoGmjO6tRUuX0Ks%2B1cHOzAAiSXMX9ufGoXqYJcpbzasd6490qmTygxfsYqZ%2FGzkoUSQYOnlat9rOliOsXy7vUC4AudvRePvvp9Y1vI4FhtToRjVl1l%2FyIJBWK4V%2FK5CCxibI78ws%2FravwY6pgEuBUkugV90n74taZk%2FPD%2Fb%2Bk3c98aUxbW205Huphd%2BgxmysYiQiItbwl3EdAUfYHhWBxW9JJmKAfBk3dmq9Zrm6rlwI3yFTWmOPdJuqSHCsoeqSm6rUjx1euubaacLJBhP%2Fe%2B5Ju6zgHGs3K5SsYhTl%2BLgjXVYGxATzozgB%2F07VuVSAjsTOY7wsUacVeYhuuOLYBT7kEosRPbSiE3NDxAgIMMjA17B&X-Amz-Signature=14d489ef5393bc26188ddb017493ccc33a47eeeac13b616c5290c3578345c6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3TM5JTL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIBErPtNUGNjX0qmanUrpk%2BT1XIxSB%2F3DQVfrcJVpVIEZAiAF%2FttJar%2Fh2y7H4%2Fj%2F9s3o6hcgh%2FqecZxEwoFf3DZBdSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlTo%2FG%2F3GvTowTMLFKtwDh28Ec5IAvuFhK0mTICnFG0R2pQJka%2FAaKAj8SVPO%2BGFndd%2FqK1umBwu5aS7BaIRI6GO3MdUHJm%2Fu%2B8JQ%2BK0jLXjzhpDAVXNIgT5sf88PR4MzEaVejeQ9TJNWgGho0RidU68pIZmCcHVHTHBS5DXHnztk72ZEQkWuFd98CSlA%2F2TL5pOiXqYCe9Bu5PU%2F%2Bc4I8W8D4bj%2BtIxMtAN23I8Rf946PR8MpwoemlbRtQ22NS8plciAzRUAvK4Sey4JR1JSdxi%2BE%2BRehCO97gRmUn%2BtAB44UlikcBpvycBiVXZL3gOVLjdRPKkZVay14Ybsxnhbe1oQTGNckfZ%2B4BMRM9VCaqiOKThuHDPno13UoNz1RmrXVbAs6BQnHJFN0pSzsxKRfC4d1C5J5dWjcFUVff5VZ%2BOUzK93T%2FNG2HDIIEJkqywEh7OoqdHj2LxHgDm94TFaIX67SRTox1M0gKNVhKrGdxT2GikmnogTg6xW3PAtk9kWviWqJYLQvGoGmjO6tRUuX0Ks%2B1cHOzAAiSXMX9ufGoXqYJcpbzasd6490qmTygxfsYqZ%2FGzkoUSQYOnlat9rOliOsXy7vUC4AudvRePvvp9Y1vI4FhtToRjVl1l%2FyIJBWK4V%2FK5CCxibI78ws%2FravwY6pgEuBUkugV90n74taZk%2FPD%2Fb%2Bk3c98aUxbW205Huphd%2BgxmysYiQiItbwl3EdAUfYHhWBxW9JJmKAfBk3dmq9Zrm6rlwI3yFTWmOPdJuqSHCsoeqSm6rUjx1euubaacLJBhP%2Fe%2B5Ju6zgHGs3K5SsYhTl%2BLgjXVYGxATzozgB%2F07VuVSAjsTOY7wsUacVeYhuuOLYBT7kEosRPbSiE3NDxAgIMMjA17B&X-Amz-Signature=c56dfea3463725f0258fb450b15f3fbf8e1d1e7ca26c17f2ec8456be606c124f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN6SVPBQ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIE2uekMNNRrmOug6ItXod%2FhKT56l4OmyONzHNZ7nL9J2AiEAoDuRj8jY%2FVBWEE%2BeCXYiAc3UMrCXIl8gYk69udyT8NIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcJQXhzqOugAAvqrCrcA%2FfGh0vb22BolqXwCG4nzmkfWufCoLM0F%2B9697a9u7nopT961CEdVYJAonIsu3vRSSMO%2BVBNfbehNkMd%2B9W2QZQdllShPki18fvIuW8WUinPQOXK7cUbkj%2FoJRZUBZuT66W4FDieGOXpI8tl7xW4TVkqw4iLbby5ts1eb%2FC8zviNweTZokPuNLmU0jbj%2FnOuYEIl4Xiug5d3TTC%2Fy%2BDG6cmkc0Od7z%2F3wFeVRB%2FkYKdoguyBUW5SX0V7u%2BGR4uBAsZ0y3t3fve5mThpouaba604Ln5lg%2FHjBDCY%2F3gY1ftPB6m5F%2F5gxQaFMlCH2QU9uCdUGN700qWjKCYVLWuWdF5Jtpi0CCO2dHRSONPrAIhlJKtMSsHAysXSPga%2Bl4HtYJj%2BOabAeEwPBszTN83LvUPuituMRTIQtDjuADvLdQVTS%2FrgPttij1sDP1qdCkH1AZwXxctNNISaFvWIwllAA6WKfC2isGG7xfvQ7ZNsNKuNSrmeALe%2BYDl30HQjTypzrJO1HSU0ynno3qci0AyA%2FdbxJHRA6wq1teYJ6cc9PQK7nH7hY9NxBUDEmvoSxkXifP9QvBosVbuytXC9Yy03Z4JpSVjKr3UOo67U6PbLmItpvjnf7ohR1sZ9sUONSMMv72r8GOqUB1Yc4TCStnUHOEk2VpMfJGndS2AbP8ZVcVHEp27vpfObUp7ILTwuhoto%2FcauuTTevhBS3TUd%2Bhq4PQu3U64YkitAz%2FaM79fo5jG48%2BwZ9v9xWyGov0lDqavHt%2FgE9Z4sP%2F7uXD4MYaE6RM%2BdrM18u7cHpNYMmzJvupT8UFdzwVMFbgqCGX8ewnRF%2BZyPq4SVJBZraSizUDYJWzgegxKk4xUtRUjRq&X-Amz-Signature=dc22852b950b02b2389639e74060f3079f3d113694f184f6c0f316a0094605fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HVM3ZNP%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDXfvQfjxzdPoCCaFA87wA5TxUL1%2FhEkYcCFUNK6%2BlQXwIhAP2asnJVo6WYUhujyHjlZ6HPa%2BvG1VgQTy%2Fe9KKv%2ByR%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHqv%2FzII05B5sLpwEq3ANSN1lvdYsz1P9wGjZtdTZem4CRa85TUvvxGmeBpA8lPwTKv1xR0XOu%2FOXaNaASfrzWfTKifAAnzbf%2Fh2qKPDZojyNjfn4%2FFgs4e6K4JnCRqxUpRDqU5R68XbqEFn2eHjY1tRWPcWGJFShls1Tx1mQ3dgcFVsRoYNbHey2NH9%2FQHV%2By9cUAxKn9mZQo%2Fr65gTUISLDVTjoZRly3d7XJdwwfaWSWIAUNulyE09X2WWFwOorz4Kwb%2BskhNvTyUYFKqOhEHrqgNwRBIEyym3uk1UqQVIOgUrerdKtzPv%2Bh1Tx%2BmgNvL7f4Y8xYL%2FCJdej8NH9VymGIDougUVJdjhevI94IZ7t3LBUYyF4sGN6toa%2BR82RcqZiDAHFaHg%2FUSpUF43oip66Cml%2FpQz8yDL3i7RkTJh8VHQuMx2MsF7ficuJSiB%2FORPovWWD4y4eYYV3YPGPAlIIthZPQbt6JKSq7muFKg2iK9ZMbhyCnHsvS3BwT9zcRUVYB0VOKsaseMrNdXnhV9az1%2BGnNH0JN45oEhclzHf%2BgOZJN1Y0uuL7mtbcUOQItPegXjnhp51LpLn%2BTCmUKgBR80eyCe1JL%2FzmQwhONgR4jzZGuJQ3mt1seE90%2Ff222LHJfHnWkDEKZGTC8%2B9q%2FBjqkAfX0OcNNPV5u%2BJXj7qat98%2FuLF25ImFkSs52BEnHBSDktvad%2FnjGi0unJWM5LzsQ4fVm8bYhzau3nJX%2FtgdP6O%2BjQw3wjzmRiuTZG8yBd5rLfYpcoXSwY%2BXP75kuLrJarPJC1gx81DFBinIh6QVZQucYUIXrXHy7C%2FBNKG3zOUBD%2FOaoqg7%2BiBRBKvbrQtI6Lm%2Bc8EgapITUn8S1Df9ZATy3KlXP&X-Amz-Signature=7a15261ef13bd8008410011edf78bcd937dd26554a0f75e0cb1ff4bbca8bdc54&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3TM5JTL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIBErPtNUGNjX0qmanUrpk%2BT1XIxSB%2F3DQVfrcJVpVIEZAiAF%2FttJar%2Fh2y7H4%2Fj%2F9s3o6hcgh%2FqecZxEwoFf3DZBdSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlTo%2FG%2F3GvTowTMLFKtwDh28Ec5IAvuFhK0mTICnFG0R2pQJka%2FAaKAj8SVPO%2BGFndd%2FqK1umBwu5aS7BaIRI6GO3MdUHJm%2Fu%2B8JQ%2BK0jLXjzhpDAVXNIgT5sf88PR4MzEaVejeQ9TJNWgGho0RidU68pIZmCcHVHTHBS5DXHnztk72ZEQkWuFd98CSlA%2F2TL5pOiXqYCe9Bu5PU%2F%2Bc4I8W8D4bj%2BtIxMtAN23I8Rf946PR8MpwoemlbRtQ22NS8plciAzRUAvK4Sey4JR1JSdxi%2BE%2BRehCO97gRmUn%2BtAB44UlikcBpvycBiVXZL3gOVLjdRPKkZVay14Ybsxnhbe1oQTGNckfZ%2B4BMRM9VCaqiOKThuHDPno13UoNz1RmrXVbAs6BQnHJFN0pSzsxKRfC4d1C5J5dWjcFUVff5VZ%2BOUzK93T%2FNG2HDIIEJkqywEh7OoqdHj2LxHgDm94TFaIX67SRTox1M0gKNVhKrGdxT2GikmnogTg6xW3PAtk9kWviWqJYLQvGoGmjO6tRUuX0Ks%2B1cHOzAAiSXMX9ufGoXqYJcpbzasd6490qmTygxfsYqZ%2FGzkoUSQYOnlat9rOliOsXy7vUC4AudvRePvvp9Y1vI4FhtToRjVl1l%2FyIJBWK4V%2FK5CCxibI78ws%2FravwY6pgEuBUkugV90n74taZk%2FPD%2Fb%2Bk3c98aUxbW205Huphd%2BgxmysYiQiItbwl3EdAUfYHhWBxW9JJmKAfBk3dmq9Zrm6rlwI3yFTWmOPdJuqSHCsoeqSm6rUjx1euubaacLJBhP%2Fe%2B5Ju6zgHGs3K5SsYhTl%2BLgjXVYGxATzozgB%2F07VuVSAjsTOY7wsUacVeYhuuOLYBT7kEosRPbSiE3NDxAgIMMjA17B&X-Amz-Signature=465edf801ae8ac7f16b37abfea5f7a11bed61a0c35d0ff01f61ef503c82f58e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
