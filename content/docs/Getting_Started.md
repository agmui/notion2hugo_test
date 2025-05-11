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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4LNK3P%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGj6YPnvX%2F0nSHNIp14QxF7r9LTIbAUh0VYubEZ74MamAiEAwYyIJu3LBbo9NE247%2B3gp3b2cksDECop8x0zp%2Bkg2eMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0RpOigQk1PeF1iDircA5wDku%2FGFC%2Bn0k9QuLpNtGGis8YJ6FMmUjlyfCyOCPSGnL5kVD1EE1Ob1wFWMV8HEuR2LveIb1jj5yOyRzUu29mR7u5yTo8e58QSVH6Q2jRvzZjpSZuxDPpanD4%2Bu25U7ZCsTXshL4uWay3M%2FSzNzTcA2jEaGP5CNcKczyUBjxc6Vze%2B%2BNF1UqCO4bK2ygkF5eSeThog2DHNzTf1MKmZ8dD5NUv9s%2BhfaqMdSqZFo6SRijtPeM17LOpDE77PyyG3z8r8ypQlxfmFTnAl4EGXxNFvEO8hlVbLKZI%2FAo%2BkOxLytViFbgLl4ByOQ8R4L2qCKS4QYp%2FXbrPWiV2e7L9ZMIDfgCwtl8W56%2FZNM3xecCgwcjHLFiYbfMba5idcI0FdKsgZPdDrIT18GSjaNtKhDiSETvtJuV6IC4Vp5yxXIQqYTge89%2B0Kk8Zca69Op4VcaJW2YLxa7Vb97Y0FlEqXHqLekxxKy89WRmGKwDVuDz5HRPabVpLNoBgUEMSuu69tw9nA1BGnHkZNQn%2BVsjpy8CzxrkUA4jCefvY7lRXk823fwmtMu0zvQ9WdNS18Z0s9CneCU7puKU6A4kFmKyY%2Fo8tXDp%2BS8dsJVOXTaJvX12Rb5Eq1vzSjfyFZaGRDMKS5gcEGOqUBoyyTgRfWwlfy8f2YmMVU4gS2r5w56tgeUam4kw704mC7o4l0zggNYTcVNcCnw%2BgU7Lz4rCtr%2Bsb%2FmedEi88qqrgornmF%2FKU4GDFQV0vItFUEn6Wift7Owu44BwVdkJfh7JZIMOKu03%2F87VGJrIpPHe08adA0MKFYhUwcQGj7PZfdIMj0HmeRX%2FoDZOAKutPhWBddpFMTRkSe5xfPE2Dmbc7NCBiH&X-Amz-Signature=1cc55421b45f3c1c21a1c68b2faae67ddb9d8749aad80581082f0c82dd6ca864&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4LNK3P%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGj6YPnvX%2F0nSHNIp14QxF7r9LTIbAUh0VYubEZ74MamAiEAwYyIJu3LBbo9NE247%2B3gp3b2cksDECop8x0zp%2Bkg2eMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0RpOigQk1PeF1iDircA5wDku%2FGFC%2Bn0k9QuLpNtGGis8YJ6FMmUjlyfCyOCPSGnL5kVD1EE1Ob1wFWMV8HEuR2LveIb1jj5yOyRzUu29mR7u5yTo8e58QSVH6Q2jRvzZjpSZuxDPpanD4%2Bu25U7ZCsTXshL4uWay3M%2FSzNzTcA2jEaGP5CNcKczyUBjxc6Vze%2B%2BNF1UqCO4bK2ygkF5eSeThog2DHNzTf1MKmZ8dD5NUv9s%2BhfaqMdSqZFo6SRijtPeM17LOpDE77PyyG3z8r8ypQlxfmFTnAl4EGXxNFvEO8hlVbLKZI%2FAo%2BkOxLytViFbgLl4ByOQ8R4L2qCKS4QYp%2FXbrPWiV2e7L9ZMIDfgCwtl8W56%2FZNM3xecCgwcjHLFiYbfMba5idcI0FdKsgZPdDrIT18GSjaNtKhDiSETvtJuV6IC4Vp5yxXIQqYTge89%2B0Kk8Zca69Op4VcaJW2YLxa7Vb97Y0FlEqXHqLekxxKy89WRmGKwDVuDz5HRPabVpLNoBgUEMSuu69tw9nA1BGnHkZNQn%2BVsjpy8CzxrkUA4jCefvY7lRXk823fwmtMu0zvQ9WdNS18Z0s9CneCU7puKU6A4kFmKyY%2Fo8tXDp%2BS8dsJVOXTaJvX12Rb5Eq1vzSjfyFZaGRDMKS5gcEGOqUBoyyTgRfWwlfy8f2YmMVU4gS2r5w56tgeUam4kw704mC7o4l0zggNYTcVNcCnw%2BgU7Lz4rCtr%2Bsb%2FmedEi88qqrgornmF%2FKU4GDFQV0vItFUEn6Wift7Owu44BwVdkJfh7JZIMOKu03%2F87VGJrIpPHe08adA0MKFYhUwcQGj7PZfdIMj0HmeRX%2FoDZOAKutPhWBddpFMTRkSe5xfPE2Dmbc7NCBiH&X-Amz-Signature=de86e3805f7d8e56087c9148986df38af3b25e174bfe9837818268cce2b7127d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4LNK3P%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGj6YPnvX%2F0nSHNIp14QxF7r9LTIbAUh0VYubEZ74MamAiEAwYyIJu3LBbo9NE247%2B3gp3b2cksDECop8x0zp%2Bkg2eMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0RpOigQk1PeF1iDircA5wDku%2FGFC%2Bn0k9QuLpNtGGis8YJ6FMmUjlyfCyOCPSGnL5kVD1EE1Ob1wFWMV8HEuR2LveIb1jj5yOyRzUu29mR7u5yTo8e58QSVH6Q2jRvzZjpSZuxDPpanD4%2Bu25U7ZCsTXshL4uWay3M%2FSzNzTcA2jEaGP5CNcKczyUBjxc6Vze%2B%2BNF1UqCO4bK2ygkF5eSeThog2DHNzTf1MKmZ8dD5NUv9s%2BhfaqMdSqZFo6SRijtPeM17LOpDE77PyyG3z8r8ypQlxfmFTnAl4EGXxNFvEO8hlVbLKZI%2FAo%2BkOxLytViFbgLl4ByOQ8R4L2qCKS4QYp%2FXbrPWiV2e7L9ZMIDfgCwtl8W56%2FZNM3xecCgwcjHLFiYbfMba5idcI0FdKsgZPdDrIT18GSjaNtKhDiSETvtJuV6IC4Vp5yxXIQqYTge89%2B0Kk8Zca69Op4VcaJW2YLxa7Vb97Y0FlEqXHqLekxxKy89WRmGKwDVuDz5HRPabVpLNoBgUEMSuu69tw9nA1BGnHkZNQn%2BVsjpy8CzxrkUA4jCefvY7lRXk823fwmtMu0zvQ9WdNS18Z0s9CneCU7puKU6A4kFmKyY%2Fo8tXDp%2BS8dsJVOXTaJvX12Rb5Eq1vzSjfyFZaGRDMKS5gcEGOqUBoyyTgRfWwlfy8f2YmMVU4gS2r5w56tgeUam4kw704mC7o4l0zggNYTcVNcCnw%2BgU7Lz4rCtr%2Bsb%2FmedEi88qqrgornmF%2FKU4GDFQV0vItFUEn6Wift7Owu44BwVdkJfh7JZIMOKu03%2F87VGJrIpPHe08adA0MKFYhUwcQGj7PZfdIMj0HmeRX%2FoDZOAKutPhWBddpFMTRkSe5xfPE2Dmbc7NCBiH&X-Amz-Signature=63bed391c4fcc9e1fbcca24e409afb5111732a442b12b7579c4fd3db0397d179&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q23TCNI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEBhivnrbMdp8uZXIOp%2BKFVM3rQxSOtNxxKjGeh6yjOfAiEAivPMLK2c9lIae5GIscFdy1jFHCtwkPuNReVscISBtBoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD74r4Ux4HiyVyRHNCrcA74w%2B36T9361bHsRzIPCvdsJTkDRaAm3XE%2FBV%2BJOLRS1vCQQ9EuiYnLWkvscxgTmuvtcjsjuA%2FrMacQUan8sasdtOfN2BNwSfY1kKwCNialeOnZbvhzHSi8MAdZOmMdHqnYlIJ8CUXh%2FBbgXKGp59169hD3WcQ4xiCSgBBfsWrGvWnYhgS8aS32MvmumW42P35kJ0WCNGJ%2FKcORsAO8zcrwrdaeZUO7RC19d2MlMkbnyPlh8tNeqALu2EJrlorn5L1taXN0YFvd%2B26%2BXdk6%2FIHyAl3J46yKrIVw%2BmUnYcHNLHDZH1Y%2BDKkIVHKww55IcP%2BL%2FWGjatr65b4QXHF0%2BfGmr9BrDdsPmY87jKztDQq776We5JQ%2Fd77Q6vuIIeJX6PJ3lkH1HQ1jTi3gBGMjLSnIrfqa2jfsV%2FJRRbQ7DPoEKBZcpwJcxbIZU9VXS1sh7C7CKBKr8UjPZlQJ%2BWU72G%2FsK%2FAqDaxpzEY4RX8Qwu6W7BFdOEJhk6j2x%2FD%2BSwwP2aa1aB2DJS3cYOiyfdccjJdhNRIunbms%2F75%2Fig%2FAEtOJyfPyvOpc0DsB%2BBBIh13Bk1g8CtdrP6pa2kDoBa6SkImjcw0%2F4SSr%2BE5g7WFeOtC2Q03WrDyMefndxSh8eMK65gcEGOqUBiKUvLIUImEOIQtsIzSCXVKiyvlkFrZd5kauUi%2FSR8de%2FI4%2BG8Dm6p%2B449Cj4itQk7SIDqWfI%2FUOeb25iJOZxKmWpcI%2F9ecmdbiNsJ1ETWHESoG2T5NETnGEnNayK7wOaQWtn4D3UlqdJNX98Z5ElgS%2BvzzPvi68edXNYijjZZ%2BZ9B46bX01tBjI2MJjeAEYXyBSQCk4hfQA3khwD8FHIuKoqey%2FH&X-Amz-Signature=a569bfeaf07128d9b0033e9abb0c33851e6719ac32e5232f1fceff5ad0187c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLQP44J%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC767CiHQCYSpE1XyntkPt5FUGi0jaU4x8er91bR2BsUQIgdEmmgoajHLLXph3Cg5ebDblwQDKGaoXaQ4dgbKK%2FlyQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTmaYCCXJoRcdPnvSrcA789jZOTy9cL%2Fq0sg8%2B%2BBmXQVEFVAKx1MCnoo3dTgdaRz%2BcJJsuEfc%2F4mxkmCWNqTIMTg4xx856i%2FcvtdAsdZbumysx0lUxjPzw9smh2XQSGLdAr0XNJg8JTzxlhbLiJqji0tYHX%2F0JfymXGocQNnASFSYVDBXM%2BHokLXENCc8Un0mDzBH2wUa7OkVqZHfoXx%2BvnzBWMHakX9hfjSvASvItUgVLCbi9ERgtWhRXAzHhKagIiwdjw0s8jLNoioh9u6k%2BpcBoIX2OQX7YwCkkiIcQa2KojsdJNYPK%2FHwZGDOcdPms7aoQktPMn1oUXMOhkKBe4O9zBp9tcq2d00mGA5xS%2BcsTnLwUNmc7Ov9qBz8MenA5NKdn59GdEWWqsa%2B8WRJi%2FTV3%2FFHgSzmFqSP%2FcxgZyJ80DZN1eWxN27qjNjSkI%2FoZd%2BI7VPqS11RiXmctbTW%2Bp414drp7NVQrtM9uL3mrtr66E2RGLlfFiE5h3muUEWq1bf0CiB8xxUipYlS5WmPFOkZVYT11LsvHdlqV9FVVVJgv0jbjOAdinpR6NckOwM2KII164c84L0uq2AQqaWqbSPM%2BKI91WyjR%2FPT4vdc7ne9Ni%2FvUOsTvpzKa8Xd%2BHx0mAs4QWQuRlJKE9MJi5gcEGOqUBf5amZsLTYQK4%2BKNLdWYR94J3rw5WmfnSstGFQvxKJ35sXJsRXEEKx5zuSOiiQiNkZM%2BWFVuwGgeQpOnAmNmqBM5fV7TDfrsqh%2BI6q3hbB9LXwq1aTIHyceUr7Um3pJJlnXSgSM1qLCao8bzKj3n5ZuZSrPgHccUZ6HNtBEQdDiyANhcNzV8xsf6Q3vPiuVwGbMgnE4CKuP87hSk2bsUaVnwtKwxG&X-Amz-Signature=649e2135353630ad83f9cccf85d81c77aa9af75ec14e37fa42d007c5e26c5b3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4LNK3P%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGj6YPnvX%2F0nSHNIp14QxF7r9LTIbAUh0VYubEZ74MamAiEAwYyIJu3LBbo9NE247%2B3gp3b2cksDECop8x0zp%2Bkg2eMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0RpOigQk1PeF1iDircA5wDku%2FGFC%2Bn0k9QuLpNtGGis8YJ6FMmUjlyfCyOCPSGnL5kVD1EE1Ob1wFWMV8HEuR2LveIb1jj5yOyRzUu29mR7u5yTo8e58QSVH6Q2jRvzZjpSZuxDPpanD4%2Bu25U7ZCsTXshL4uWay3M%2FSzNzTcA2jEaGP5CNcKczyUBjxc6Vze%2B%2BNF1UqCO4bK2ygkF5eSeThog2DHNzTf1MKmZ8dD5NUv9s%2BhfaqMdSqZFo6SRijtPeM17LOpDE77PyyG3z8r8ypQlxfmFTnAl4EGXxNFvEO8hlVbLKZI%2FAo%2BkOxLytViFbgLl4ByOQ8R4L2qCKS4QYp%2FXbrPWiV2e7L9ZMIDfgCwtl8W56%2FZNM3xecCgwcjHLFiYbfMba5idcI0FdKsgZPdDrIT18GSjaNtKhDiSETvtJuV6IC4Vp5yxXIQqYTge89%2B0Kk8Zca69Op4VcaJW2YLxa7Vb97Y0FlEqXHqLekxxKy89WRmGKwDVuDz5HRPabVpLNoBgUEMSuu69tw9nA1BGnHkZNQn%2BVsjpy8CzxrkUA4jCefvY7lRXk823fwmtMu0zvQ9WdNS18Z0s9CneCU7puKU6A4kFmKyY%2Fo8tXDp%2BS8dsJVOXTaJvX12Rb5Eq1vzSjfyFZaGRDMKS5gcEGOqUBoyyTgRfWwlfy8f2YmMVU4gS2r5w56tgeUam4kw704mC7o4l0zggNYTcVNcCnw%2BgU7Lz4rCtr%2Bsb%2FmedEi88qqrgornmF%2FKU4GDFQV0vItFUEn6Wift7Owu44BwVdkJfh7JZIMOKu03%2F87VGJrIpPHe08adA0MKFYhUwcQGj7PZfdIMj0HmeRX%2FoDZOAKutPhWBddpFMTRkSe5xfPE2Dmbc7NCBiH&X-Amz-Signature=e271737827c3735ae405166bfdb090c1e456fc6f109b71925af48f337270e55f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
