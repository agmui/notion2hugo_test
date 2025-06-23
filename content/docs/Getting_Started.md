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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZITDKWZY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGmCFfd9D9HxL3%2FSgZknrZ%2F%2BYQbGFlpO1Hs2R27C0ys1AiEAzAEK%2FBDiHh%2FwZXnfdsXVbRt12KmF6uGVuOm2GExGqOcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBSfmB1AAmPqnTJ%2FIircA%2FzBLZtrDjfF5%2F0LpdoXtW6bwc2dykNuLju9K1fEnUDCv7cs9OnYYzRpupA31fx3N%2FQmLlOiTfXGHYf423y6z08UI%2F6GO9%2BtXYABPcXs9Dp5pB7KBZdLcHbmN99OmAGAxGprkDCr7VRykFtUmYaP%2FCowC0RvpIO7T8Abt%2FGnyD%2BGVeRQlhw%2BYIevT85sPOorFQ4f8PQv%2BfMzFe5%2FZQkm5PVrR7xXJFXVfKqi7fzyxYpJ7T%2FUkbaOj7C3BJATG1WhslqaYrW8wAGIqqbALjDn4kQ2ldxcTJQCe3CL%2FCu%2FbiIPt1nqTz2vrrHucFnAMfIPUpzwsGs8n9%2BEuK1FNUjAS6R7d7Yy97NyCeZck4X7z11HJkyj8X3D0ol9xlQTYXKDm5Wf2xU%2BtGa326IjUJPA3FqAo7seusVeRj95R%2BnFV8M4ha0HS8ujULuGqcwoXl0Hmy1%2BojdL%2FCOkxjPAKMaxYnZp%2BcBb1b3wQs5ByNO4M2sFz67ctIuWavAU3P2IIkcP62LO9WAxxs6uEBOvS5pUQmJ9RgX5MihehWVQRH3chWqf0VP0ek%2BnVvbdo1vn73OZdJxMdS53deh4Q%2FhCSS6zCTuOSlkdxvAw%2FzI1i6oUJ2XgSh1cxJgkJZkwnKDLMLf05MIGOqUB8vvTtnPPoRY5XgCBmxnH8hVsiA%2BXsznhfvkkSf3vacPZikrMjlx43H5Lddof1i5%2FSu1SKtadIp3xVou8%2FEP0pFAv6mDtR0dqvEEfCYUldaeVCiOMbC%2FoSQZWNONgRGeToUZeLVRDvFoPYZ51HQ7X3SvNHQAQQmv5bly24Qf9IG5MUx0baqC8%2Fr%2FJQF%2BYmZGh23FbWAgBdA6FApo8Ho0FpCvntoKV&X-Amz-Signature=adfd7dda596c83ceb18659e81ece466c50e119724d547525cc4cba702e9dd418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZITDKWZY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGmCFfd9D9HxL3%2FSgZknrZ%2F%2BYQbGFlpO1Hs2R27C0ys1AiEAzAEK%2FBDiHh%2FwZXnfdsXVbRt12KmF6uGVuOm2GExGqOcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBSfmB1AAmPqnTJ%2FIircA%2FzBLZtrDjfF5%2F0LpdoXtW6bwc2dykNuLju9K1fEnUDCv7cs9OnYYzRpupA31fx3N%2FQmLlOiTfXGHYf423y6z08UI%2F6GO9%2BtXYABPcXs9Dp5pB7KBZdLcHbmN99OmAGAxGprkDCr7VRykFtUmYaP%2FCowC0RvpIO7T8Abt%2FGnyD%2BGVeRQlhw%2BYIevT85sPOorFQ4f8PQv%2BfMzFe5%2FZQkm5PVrR7xXJFXVfKqi7fzyxYpJ7T%2FUkbaOj7C3BJATG1WhslqaYrW8wAGIqqbALjDn4kQ2ldxcTJQCe3CL%2FCu%2FbiIPt1nqTz2vrrHucFnAMfIPUpzwsGs8n9%2BEuK1FNUjAS6R7d7Yy97NyCeZck4X7z11HJkyj8X3D0ol9xlQTYXKDm5Wf2xU%2BtGa326IjUJPA3FqAo7seusVeRj95R%2BnFV8M4ha0HS8ujULuGqcwoXl0Hmy1%2BojdL%2FCOkxjPAKMaxYnZp%2BcBb1b3wQs5ByNO4M2sFz67ctIuWavAU3P2IIkcP62LO9WAxxs6uEBOvS5pUQmJ9RgX5MihehWVQRH3chWqf0VP0ek%2BnVvbdo1vn73OZdJxMdS53deh4Q%2FhCSS6zCTuOSlkdxvAw%2FzI1i6oUJ2XgSh1cxJgkJZkwnKDLMLf05MIGOqUB8vvTtnPPoRY5XgCBmxnH8hVsiA%2BXsznhfvkkSf3vacPZikrMjlx43H5Lddof1i5%2FSu1SKtadIp3xVou8%2FEP0pFAv6mDtR0dqvEEfCYUldaeVCiOMbC%2FoSQZWNONgRGeToUZeLVRDvFoPYZ51HQ7X3SvNHQAQQmv5bly24Qf9IG5MUx0baqC8%2Fr%2FJQF%2BYmZGh23FbWAgBdA6FApo8Ho0FpCvntoKV&X-Amz-Signature=fc9ef1d4b0e4a162b40afcd69e1ee2cc730d870c1428881088367cdc141b0c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZITDKWZY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGmCFfd9D9HxL3%2FSgZknrZ%2F%2BYQbGFlpO1Hs2R27C0ys1AiEAzAEK%2FBDiHh%2FwZXnfdsXVbRt12KmF6uGVuOm2GExGqOcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBSfmB1AAmPqnTJ%2FIircA%2FzBLZtrDjfF5%2F0LpdoXtW6bwc2dykNuLju9K1fEnUDCv7cs9OnYYzRpupA31fx3N%2FQmLlOiTfXGHYf423y6z08UI%2F6GO9%2BtXYABPcXs9Dp5pB7KBZdLcHbmN99OmAGAxGprkDCr7VRykFtUmYaP%2FCowC0RvpIO7T8Abt%2FGnyD%2BGVeRQlhw%2BYIevT85sPOorFQ4f8PQv%2BfMzFe5%2FZQkm5PVrR7xXJFXVfKqi7fzyxYpJ7T%2FUkbaOj7C3BJATG1WhslqaYrW8wAGIqqbALjDn4kQ2ldxcTJQCe3CL%2FCu%2FbiIPt1nqTz2vrrHucFnAMfIPUpzwsGs8n9%2BEuK1FNUjAS6R7d7Yy97NyCeZck4X7z11HJkyj8X3D0ol9xlQTYXKDm5Wf2xU%2BtGa326IjUJPA3FqAo7seusVeRj95R%2BnFV8M4ha0HS8ujULuGqcwoXl0Hmy1%2BojdL%2FCOkxjPAKMaxYnZp%2BcBb1b3wQs5ByNO4M2sFz67ctIuWavAU3P2IIkcP62LO9WAxxs6uEBOvS5pUQmJ9RgX5MihehWVQRH3chWqf0VP0ek%2BnVvbdo1vn73OZdJxMdS53deh4Q%2FhCSS6zCTuOSlkdxvAw%2FzI1i6oUJ2XgSh1cxJgkJZkwnKDLMLf05MIGOqUB8vvTtnPPoRY5XgCBmxnH8hVsiA%2BXsznhfvkkSf3vacPZikrMjlx43H5Lddof1i5%2FSu1SKtadIp3xVou8%2FEP0pFAv6mDtR0dqvEEfCYUldaeVCiOMbC%2FoSQZWNONgRGeToUZeLVRDvFoPYZ51HQ7X3SvNHQAQQmv5bly24Qf9IG5MUx0baqC8%2Fr%2FJQF%2BYmZGh23FbWAgBdA6FApo8Ho0FpCvntoKV&X-Amz-Signature=7835f9861cc140ef6554303cab15581e361af0db92ab10c687c305696a7fccf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNWBZIHP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIB0hJF7eOLw9OwAJ0O656Rkx%2BeZ9rPvPfoiZ3E%2FojeiWAiEA7fvTfqkAwl1QFR9R0x8Xk4OljKdeymog7AOCEZEPrzoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMY5w%2Bl3z4Ua7596WCrcAxazwor0iishjEDHjETPe9c5Wj1pXUyYhF8lb7AiAe2BsJLXBY1vunloFyRYK7xIUMOsGDY9NLrdaSyvcF2PuSnzFHxr27triX3gqbhapvI8Ut6yDP6k9JA6Gi9nybNzowUBp0M6BKvjzJS0nSGnreym79DbxqA8Jam35WCLl6i7is0R3Ivcoki00Mh6VQ0MmTxPYH8LEB9mSockrArsEXNOe3YJzR8SRJUaVvIFB0%2FJ6BIvas0UgLKKDBz33qGyTeMm9J6P8V1JDdd6hU4pkjNPDxYo1PDg0oRuT7xD%2Bz7l4rOJD1220juET3V19R%2FmHyPlzsK4dRLZ9Ymek6eR4JkcfGXfU%2FRQaC2QQnX7aQ8uy1GcqutoBwKNRVb8UKo1abvgaZIrx7TyjVq5vJWwLW2BW3s7HpIhcFc65CfyIixltKTx%2FalSRsC%2BWOejQUkd7Y0MwNoXSQ04zVVQrzJB%2Bo7RAFXUPbQ0Au8RQHFcM9%2FZNAoragDfqWcgw8x8DExfBOlE3AMdFm2J1w2tRSxV%2FfCbR50uVBe7lbQ%2Fnei93bhu8ZIsBLs00LndSSarLTy2uUVyB9%2FU7tMp2E%2BMG%2F5gsqjQAs5%2BNt7kYFEv6Unt6T05AmoMiIKQNHfms45XMJn05MIGOqUBqnAxdXDvTNW7zlePDObRm37unWb%2BCH6SkpCJC%2FvZsrHSDA5E1D4LBVWQlg5HrW58y3Gwin6EizyoU29DM2yPOHX7u71uspJlHgScmtbZ%2B6o3qmqwkanJaO%2FrlcyvNjfM9xI%2BTpkqiB%2BP12um6kuLXv7ohrDPKUSEfypGipY3tWDKAsjTB2ZmGE7T%2Br6Iqez8rq%2B7e4iwuzZur8uBWCcAl8qn2RDf&X-Amz-Signature=76781e64876f5c6d9a24c856960d0eeab69dc8a208bd9241a315873719f18fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMH232GM%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCShJN6AhHB4kkfm8LddOGJ1Wb9UtRwbj7Hq1YBtLdh6QIgHUZGgEXIZHAQf1vctk2BJLyuGqwHU63v%2FuYSaTjT8f0q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMHUcEATDlH8AP6sUCrcA2nU%2Fpsja%2By2mDdPcI8ARisrui%2BNBkOnQCutDeplElgmA%2FSllER4oBQ%2BUr%2FO7RV8gLihsPN8iF6NSL6f6Vh%2BlpqKlyLIZgXB9lcQPlYP0MAiZsJYW0FJn6a%2Bw%2FVhSjUzhxcVPtoQCcjCB2E0p4LIEABqONxrFa6DW2lWzThXqV0LtkLj1r1wuBNHCEinJAOpeNwwIwPcEFbYCp%2FCV2%2BfjffbmZ9LlnzbkqlAubTZWnSB8KQp%2FIbXzsQ88prwy9DBLdXEePvqKdcWnbHfqQHhRkbgMrugh1NVyst%2B3coYxKdP%2FfOJ9UPtJ7iqEQiuYjQ1QAleVvWzTsjiYp%2FcZCa82jPwWAVtH9viht9A5LVqRIRJFgRbPfWgRlpCBq4PnrwkkDAysSR5%2BZ5ZLh%2BOors0mJftzAmqQ0xk79%2B%2BmR079%2FtvtgxeuXycHeiQ47wZd7hBjhD1MMdkqjCLltVMCT%2Bju%2FvKyiIDuQjDqAwaVpcmqqDGEt6KH0ktTNvPZVsSp3HlouVKIuyaa4HDWCN4X4rzQ0PNyO38jl85jcsCBHAKuXC7DVVnVVo%2BS1xhnB6EJ2TNdJokg2f1JyEImbvLwmMzoYvVLBqHPzKRwQ8u3I1TN1y2xdgepynACt%2Bf9i8CMLrz5MIGOqUBcXpyz0Y82NJzUbATn5sjeGFN8cWzEi2DO2QiZ1Ca3fIZsUKUV%2FMH20ihWVKaOTOrHmoL0sAnyeNIxZ2GW3a7Nm8tTwkAJLPSGnD25cFPAjZNHC2rmR%2F%2FeL0QNbIg4IPL3Xuyah92gT5L2hnAH%2BiUfCgdTHeg2QHIiYiZNn5aDuQdiOgZfwTP0GjkRdkZy8OkiPmSkz7dU7NXQzTHCXO7qurxqeax&X-Amz-Signature=ae48d8098ef37b79cded866dd03f05b5253326c82a1e79a3abc529cfc44042c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZITDKWZY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGmCFfd9D9HxL3%2FSgZknrZ%2F%2BYQbGFlpO1Hs2R27C0ys1AiEAzAEK%2FBDiHh%2FwZXnfdsXVbRt12KmF6uGVuOm2GExGqOcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBSfmB1AAmPqnTJ%2FIircA%2FzBLZtrDjfF5%2F0LpdoXtW6bwc2dykNuLju9K1fEnUDCv7cs9OnYYzRpupA31fx3N%2FQmLlOiTfXGHYf423y6z08UI%2F6GO9%2BtXYABPcXs9Dp5pB7KBZdLcHbmN99OmAGAxGprkDCr7VRykFtUmYaP%2FCowC0RvpIO7T8Abt%2FGnyD%2BGVeRQlhw%2BYIevT85sPOorFQ4f8PQv%2BfMzFe5%2FZQkm5PVrR7xXJFXVfKqi7fzyxYpJ7T%2FUkbaOj7C3BJATG1WhslqaYrW8wAGIqqbALjDn4kQ2ldxcTJQCe3CL%2FCu%2FbiIPt1nqTz2vrrHucFnAMfIPUpzwsGs8n9%2BEuK1FNUjAS6R7d7Yy97NyCeZck4X7z11HJkyj8X3D0ol9xlQTYXKDm5Wf2xU%2BtGa326IjUJPA3FqAo7seusVeRj95R%2BnFV8M4ha0HS8ujULuGqcwoXl0Hmy1%2BojdL%2FCOkxjPAKMaxYnZp%2BcBb1b3wQs5ByNO4M2sFz67ctIuWavAU3P2IIkcP62LO9WAxxs6uEBOvS5pUQmJ9RgX5MihehWVQRH3chWqf0VP0ek%2BnVvbdo1vn73OZdJxMdS53deh4Q%2FhCSS6zCTuOSlkdxvAw%2FzI1i6oUJ2XgSh1cxJgkJZkwnKDLMLf05MIGOqUB8vvTtnPPoRY5XgCBmxnH8hVsiA%2BXsznhfvkkSf3vacPZikrMjlx43H5Lddof1i5%2FSu1SKtadIp3xVou8%2FEP0pFAv6mDtR0dqvEEfCYUldaeVCiOMbC%2FoSQZWNONgRGeToUZeLVRDvFoPYZ51HQ7X3SvNHQAQQmv5bly24Qf9IG5MUx0baqC8%2Fr%2FJQF%2BYmZGh23FbWAgBdA6FApo8Ho0FpCvntoKV&X-Amz-Signature=b79467fbe10580b45b0aca65a37c5c31fe3084dc10ca95ad857ec5fa32dc9522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
