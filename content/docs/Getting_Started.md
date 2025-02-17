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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XVSWUJ4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T180951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAKpqBXmBcH1PdMq%2Fu%2FywMXahLsPTPOUzJikeOExZdfxAiEAysyhyTNF0DqVyevn1E4SztsPcxUFE6a1ytNxj0zTL0Qq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIUuT3IIltCaIly7sircA8%2BRQabjyun2hO2FSX%2BAPtmbc7dLdV8FEZV%2Fp77Oz9g0ocvqWi%2BT5Rh%2F8jgrMwpsPfc5cAXCsXGER3POtV4m6XBLqEBFIuYrokTORofPD881Ibq9dsEV52TJ2fuw%2F76bTzMghc81ruZTB9bt0QYDki1vIzF0BBDdGxw6Znm1upD1Lu7gU0UD6R3i4BWBUhmFWf3ip96Yt8E01uFvcyaWE7G1e%2FLimjI8ZD2mzCohwC%2BvAoMLrY9e1Cq4QAb%2FA54YL%2FC3Cf2iJKBr7DmElM%2FdZqoEjAjJ32i9cANQ7XVgJC5lHaW9RFJEji4dG%2BDDLY6AkOipZUuPxJlXjFYur98qqQFl9YrCpZkPhRgUUIgYATNISJWTT1MgjPbQZY10i20z43%2BSIW67ZGEJ0LQp8kCuG%2Fs0lzTjl44wywcEMAbmLbrtZfiwNLBKGJjMtP0JL7fkwtzqNkvdwHUIHe%2Bhw3LBJW2M7wBS1GJL%2BJlcDWoVb0UDUjFz7%2FHISVNkV1aCc1dCG3uTLwIKQiWsOmw7gR%2BTxI53oORIAYzhn0BU6%2Bcu1xk3YGsM06b7%2F1LLCGhROig4yV5Qoa4p3nI1ZLC%2FvIHzGQuLsZsEv3i2MEnmnpnpyJdXiHN1yiCEFQLTLpp3MMDDzb0GOqUBmUmZ%2BV9XghFvCoD1TVD9r4hUHvP%2BGKx%2B6KMgMwe9ehUGo%2BJsy7DZA644EOw4rVZs%2F4XsXRorQbQ1nKqNFgeXlW3lSXG2wFeQv4YOkNp%2FuL2v6NdNaNnwZ01JhK2qcxCK336x4aRqZY62gH28oRIyLjF1Wzy2HAvQoX0JMz4QGyrXmV9GbiNdcVeOzTWxeShGbuRU7sV29D%2FuG41Y%2BpADodAtnFlt&X-Amz-Signature=c84a310924b35626805cbd4166a2314c5f8a2ac99fe71edd29faf2f3b448e004&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XVSWUJ4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T180951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAKpqBXmBcH1PdMq%2Fu%2FywMXahLsPTPOUzJikeOExZdfxAiEAysyhyTNF0DqVyevn1E4SztsPcxUFE6a1ytNxj0zTL0Qq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIUuT3IIltCaIly7sircA8%2BRQabjyun2hO2FSX%2BAPtmbc7dLdV8FEZV%2Fp77Oz9g0ocvqWi%2BT5Rh%2F8jgrMwpsPfc5cAXCsXGER3POtV4m6XBLqEBFIuYrokTORofPD881Ibq9dsEV52TJ2fuw%2F76bTzMghc81ruZTB9bt0QYDki1vIzF0BBDdGxw6Znm1upD1Lu7gU0UD6R3i4BWBUhmFWf3ip96Yt8E01uFvcyaWE7G1e%2FLimjI8ZD2mzCohwC%2BvAoMLrY9e1Cq4QAb%2FA54YL%2FC3Cf2iJKBr7DmElM%2FdZqoEjAjJ32i9cANQ7XVgJC5lHaW9RFJEji4dG%2BDDLY6AkOipZUuPxJlXjFYur98qqQFl9YrCpZkPhRgUUIgYATNISJWTT1MgjPbQZY10i20z43%2BSIW67ZGEJ0LQp8kCuG%2Fs0lzTjl44wywcEMAbmLbrtZfiwNLBKGJjMtP0JL7fkwtzqNkvdwHUIHe%2Bhw3LBJW2M7wBS1GJL%2BJlcDWoVb0UDUjFz7%2FHISVNkV1aCc1dCG3uTLwIKQiWsOmw7gR%2BTxI53oORIAYzhn0BU6%2Bcu1xk3YGsM06b7%2F1LLCGhROig4yV5Qoa4p3nI1ZLC%2FvIHzGQuLsZsEv3i2MEnmnpnpyJdXiHN1yiCEFQLTLpp3MMDDzb0GOqUBmUmZ%2BV9XghFvCoD1TVD9r4hUHvP%2BGKx%2B6KMgMwe9ehUGo%2BJsy7DZA644EOw4rVZs%2F4XsXRorQbQ1nKqNFgeXlW3lSXG2wFeQv4YOkNp%2FuL2v6NdNaNnwZ01JhK2qcxCK336x4aRqZY62gH28oRIyLjF1Wzy2HAvQoX0JMz4QGyrXmV9GbiNdcVeOzTWxeShGbuRU7sV29D%2FuG41Y%2BpADodAtnFlt&X-Amz-Signature=ba53fb11970aa202178063382951b1d2b7551f78112f6b0a51f6f3d5ef6905db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPYKUAAO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDrCII4ry24u49sQ%2B%2B94YGz85WnlciXr%2Fte6hzNAoBJ%2BwIhAKM6PihVjtYNv5Tk%2BO6o%2FRw%2FpL%2B%2BCJuJ2rUGPEzmD6myKv8DCHsQABoMNjM3NDIzMTgzODA1IgxQw1YCWx2p3ZoBSdgq3AM3vW9jjalQgbfhJVmtfTNVE4EHjZpUY3FiAnvs5nhyT%2BklpmJWCHOUzmWQ%2FIIEcvCKfjG47ne8RvqUbf7tZBW%2BIMZyQR9ozlqxk5n6JxOZW713CAqrru1QkUqIHf%2BXnMGQnupGYLZsjh67CbyQn85pYYzXc1O7etK6RgEUlt9vxTo0DrdRCalhw6EpdDm8uFrZ7NcURSHuc%2BnvjdT4TaxmcNpw8Or%2BF9rRZnPq4sMY7dc8sLJZYKgRDpN3c4o6A68B2374kDJ4mIG3LMzimgrHMcnLU7HZBg41vyYI3Ml1Sk3ZBX%2BnOSH%2BHSp4ZLvbTB%2ByQFjoP0omC%2BpxK%2FdvrW8Pfi3Dm9J8wIRPuoPzGpZebmfeyCimBymTA4x8ct%2BqhcCXD%2ByZEhQUN4Y8lEScpjsIcr%2FhEg77S5k7LtrPoIKxVrynp5d1fLdV%2F4nXeGfBOt77EWyopv%2FL2zhwFVzEy2LEXyQub2fh1jtiCsdXCaFgKOp3FvtjMfDQLYTiB2CKqFNjdOZBKj9ZGJ20sNAHU5DCSHHgGegJTjRLhViBEFPeq8SUfttZ6oXzHpH0GxDuA4uR%2FO1xYJJ0puIgVc9%2FEyID%2BSpdzEqtY0%2BBUy9D2b4fKMnXbQ0X8l99%2BdxkujCA9s29BjqkAbi8VdnLlkTSW6b1Y3dxSG96n3SrHHlPucRaIj82I3VySPwTFuDHLTMvjfiyVl%2B9Y%2BhVIQoXdkPGXFsZivd36BbVyMqr5oajEkxXr%2BpmmFVOHXY0QCfpyk3rdvCQV%2FOefpA7%2F4iA04A2%2BWGvRe6gkcK6tdte1PhodoNaATFdbeOBU8JEkSQdAjvzbb7WLn364WOHzRJ2tjVU%2BvVTXCCCuZpSb0%2BB&X-Amz-Signature=9039ea6abc6915e423aa7c4222b8edec45e004baf76e6b1c191b318f517d6781&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5PIJBJ2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFceyV%2FfBl%2BskbmdywW6RVt76WbnswfTQovaUgroGtq9AiBNYmygyrHB7Ijkbv3T8eYv383uLs3zUcD39AoKWMvOJyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMwyX1TbTKgjC2t3bnKtwDbWYi0tegozWV%2BCp%2BDEIKfPc18vGE0vVfzfGvPe5PMdd%2BYzGgANWWodQgn67z3J33nodZSCVnBWDGh92itnGLBe%2F6EsqGRnoj1DD31dgAFmtYvuvw3jFKBaIymKwnrcumSv8JEIY%2FmU9k5xvHqtG17%2FZ7QiTcpLj%2BvmGKWPfBxYkNIs7j4ZYA9ZejERmrWbWQueVlWibsv%2BKvAktgifIrEuo9ugZtZb4NqHxNwJ6Vija2rBxbTQXRNxjohCoWINCmMd9dMOFTfi0cp1SLIr%2FUCUdxshFaJjom4Jcs9kqfIedv1R164foj2rYhPBcmQMN9qUdQ4Bh7s2GPTBEvDN0%2BNJTzNXm89AJpIasXhdvCsqBAoKt7W%2Br9KqzoiSUBApuz6GS7cI79%2BVmz0nzWvIKJg22mJv7OH9DXrkvGYDkGuilX7dwQyvyL8FnSWYtbMIDMt4LJ2Tc7JPGjfY8uf1Wgx5onp1L%2FWsf%2BUH2yOjZmJ6KpBf%2F6jc%2F%2FwBrxmeTP9YBPekN0ySD9W0U0p2CV067X4ZP1RsN3wdeJJvPOZe2XtSbWrwCvFhMd32Vmhj4ZXfQjLlP2bNgE6u98ay8lGfm8Ezckj1Q2D0TgHEdmLXMq3iAC6jw3ldpWDMfnY%2B0wscLNvQY6pgHzW7nCGVOEJgdFyMQc4yOss%2FEENQ7Mw8UCKusZtHyCznCP0yDy2gGrmw%2FIOpkMS29A%2BaH8SadnuYa9WqNhs27A6XzyWcKstmRdkLKlPQQ20rj5qnXSZ0KHjy1HEIpEjG9p9pLDx846R1EfKFlFpWFRMVnad7SH7BXWmKQUSeL5M1RI0WoeBrvHTQj1Mpv7tO%2BIjQ8JRwLlw54xZFNbW%2Fk0nucJH3Qn&X-Amz-Signature=6c58396723c060d8f1ca81f4911449ba208fe90c74a689853fb175ebdf1fe433&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XVSWUJ4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T180951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAKpqBXmBcH1PdMq%2Fu%2FywMXahLsPTPOUzJikeOExZdfxAiEAysyhyTNF0DqVyevn1E4SztsPcxUFE6a1ytNxj0zTL0Qq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIUuT3IIltCaIly7sircA8%2BRQabjyun2hO2FSX%2BAPtmbc7dLdV8FEZV%2Fp77Oz9g0ocvqWi%2BT5Rh%2F8jgrMwpsPfc5cAXCsXGER3POtV4m6XBLqEBFIuYrokTORofPD881Ibq9dsEV52TJ2fuw%2F76bTzMghc81ruZTB9bt0QYDki1vIzF0BBDdGxw6Znm1upD1Lu7gU0UD6R3i4BWBUhmFWf3ip96Yt8E01uFvcyaWE7G1e%2FLimjI8ZD2mzCohwC%2BvAoMLrY9e1Cq4QAb%2FA54YL%2FC3Cf2iJKBr7DmElM%2FdZqoEjAjJ32i9cANQ7XVgJC5lHaW9RFJEji4dG%2BDDLY6AkOipZUuPxJlXjFYur98qqQFl9YrCpZkPhRgUUIgYATNISJWTT1MgjPbQZY10i20z43%2BSIW67ZGEJ0LQp8kCuG%2Fs0lzTjl44wywcEMAbmLbrtZfiwNLBKGJjMtP0JL7fkwtzqNkvdwHUIHe%2Bhw3LBJW2M7wBS1GJL%2BJlcDWoVb0UDUjFz7%2FHISVNkV1aCc1dCG3uTLwIKQiWsOmw7gR%2BTxI53oORIAYzhn0BU6%2Bcu1xk3YGsM06b7%2F1LLCGhROig4yV5Qoa4p3nI1ZLC%2FvIHzGQuLsZsEv3i2MEnmnpnpyJdXiHN1yiCEFQLTLpp3MMDDzb0GOqUBmUmZ%2BV9XghFvCoD1TVD9r4hUHvP%2BGKx%2B6KMgMwe9ehUGo%2BJsy7DZA644EOw4rVZs%2F4XsXRorQbQ1nKqNFgeXlW3lSXG2wFeQv4YOkNp%2FuL2v6NdNaNnwZ01JhK2qcxCK336x4aRqZY62gH28oRIyLjF1Wzy2HAvQoX0JMz4QGyrXmV9GbiNdcVeOzTWxeShGbuRU7sV29D%2FuG41Y%2BpADodAtnFlt&X-Amz-Signature=25adefabb0deacaa6b04b7c4e643c615fd3669c264de4a0fb3bbb78698025c08&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
