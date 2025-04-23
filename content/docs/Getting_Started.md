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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RC5ESRL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCID8ulSKO7878pAkzGFc1xqB1Xz5hVYRb8o8BvJgqXeKGAiEAzxxORp2UPNpiSj%2BL1nrHZlJue490IQ7C1b42vCQdTw0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbTMrhpfG9GBDCQEircA9hmkG%2BXPlrrykD2KqupxKr1EhcetyBQOwj3iRgg6nk5wNf%2BlOGKGag6MnM61VN0DJ67chw3FE1e6s%2B3Proulx0xb6nN3%2FtoFMJHNmshOlm1YsfaVuNsJTBo%2F7ll%2FamvFmtAyLAhST6y6IXltOvXknvEQ1lPlPmXvu1Gnv6YuGDebMSDKrsTyJgugzgaAYmaOXq2kxGFqdRLxYR2vPsmeO%2F2DDqFmVGO3cojEZP7PvwE3a34aKwoVG%2BaA%2BYAnXR7OcYYbVtNffw2mzT6bQZnElBq%2Bm3w%2Bwgz2kz1sS9t%2BCEeb17N85DFzm7UjtyD9lcDk09%2BaQLVXnCLBpVYIw9pMswk5ybigWFGKKJnosFXjq1ynfwjDL%2FAuSH5HxbeiAzxya0u1mx4vCFveiCUZnepQ3kw1Im7rRRhNzLWQq31BSaX2Jw5snEjsvZ7oR7amIuwXF0Up%2B17ViPIKsFR0CNv79CWBCkA5kBW%2BQdOf4eKtZj%2BxIzuSpqzLULLOaebJzvPP3EBClWZhrBdGCQ5gjIGcN%2BzWN5WhfpbHQDG42X4tKFF9Nb8XU9yNhuBOGiGuGXL0bui4ryF%2BAPd84LZwdAoFGg09kzUUSZaZXoaRvxpt7GOJVGJbM%2BskomnidzEMMPGosAGOqUBWnw%2FYfvRsIxA0ajCpr%2BJRs1dGTNCp4WKQ2FJ8%2BYl%2FyEWuJZS2NY1pRLm6OIbg2gyTkx%2B4dSJWLYsuJZSBH924t7%2Fd%2FruxLw8mXb4Dhzl59HdnoZn0ViLWcVvbINtoyz0dptM8JFUiSd1tpOkUGbEGv2g%2FA8lVL8d9mISvbAPPbHmZaON8sDIaPd3mKfJuj6VLwz5lB3dgFN2AUq0C6Ceqr%2F42reA&X-Amz-Signature=026d9706140d93c2e88b3aa19c56892ae899f0d9ccc23c5bee132740a637a4b7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RC5ESRL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCID8ulSKO7878pAkzGFc1xqB1Xz5hVYRb8o8BvJgqXeKGAiEAzxxORp2UPNpiSj%2BL1nrHZlJue490IQ7C1b42vCQdTw0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbTMrhpfG9GBDCQEircA9hmkG%2BXPlrrykD2KqupxKr1EhcetyBQOwj3iRgg6nk5wNf%2BlOGKGag6MnM61VN0DJ67chw3FE1e6s%2B3Proulx0xb6nN3%2FtoFMJHNmshOlm1YsfaVuNsJTBo%2F7ll%2FamvFmtAyLAhST6y6IXltOvXknvEQ1lPlPmXvu1Gnv6YuGDebMSDKrsTyJgugzgaAYmaOXq2kxGFqdRLxYR2vPsmeO%2F2DDqFmVGO3cojEZP7PvwE3a34aKwoVG%2BaA%2BYAnXR7OcYYbVtNffw2mzT6bQZnElBq%2Bm3w%2Bwgz2kz1sS9t%2BCEeb17N85DFzm7UjtyD9lcDk09%2BaQLVXnCLBpVYIw9pMswk5ybigWFGKKJnosFXjq1ynfwjDL%2FAuSH5HxbeiAzxya0u1mx4vCFveiCUZnepQ3kw1Im7rRRhNzLWQq31BSaX2Jw5snEjsvZ7oR7amIuwXF0Up%2B17ViPIKsFR0CNv79CWBCkA5kBW%2BQdOf4eKtZj%2BxIzuSpqzLULLOaebJzvPP3EBClWZhrBdGCQ5gjIGcN%2BzWN5WhfpbHQDG42X4tKFF9Nb8XU9yNhuBOGiGuGXL0bui4ryF%2BAPd84LZwdAoFGg09kzUUSZaZXoaRvxpt7GOJVGJbM%2BskomnidzEMMPGosAGOqUBWnw%2FYfvRsIxA0ajCpr%2BJRs1dGTNCp4WKQ2FJ8%2BYl%2FyEWuJZS2NY1pRLm6OIbg2gyTkx%2B4dSJWLYsuJZSBH924t7%2Fd%2FruxLw8mXb4Dhzl59HdnoZn0ViLWcVvbINtoyz0dptM8JFUiSd1tpOkUGbEGv2g%2FA8lVL8d9mISvbAPPbHmZaON8sDIaPd3mKfJuj6VLwz5lB3dgFN2AUq0C6Ceqr%2F42reA&X-Amz-Signature=3f5a8f2a9ad4c110559a2625c065b2836729b6b8bcb73cbd27f73cc9099f0b84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663IHY5NG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCz2J2EpEI4ysckLVRnyj%2FBs%2B%2B0ZIFKq0Ds%2Bf8B2hDZ9AIhAJetb63KxiJcFqG6lA67cabIJOEsku%2FP3N2JiFLhLznEKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7LcL7uu0%2BetAXQzMq3APkMqKzRWXZ1vzNEUrXvQ1dSYY8uf5Ld6MOkflkn2sEhXUAGBU7u3thkIoDMssZKhWXKEBkL81UtctOKMRnyl2Yq9%2BXMkol8t1jn%2FwDkUBRDD274JlyGWniGGUXOksRH7tIc%2Fw%2BcaL0mnFZrqExvLZZGD8Vhs67c6YzGY%2Bz3B%2BLtaqQP9V%2FEOEtBAruQUXB6ouRosjipPE8ueRL72IgzOmdV7t0GS%2Bf49Nz7Pe0LDSSXJzxIH2ZxKkFXHy3PSb65ZAD%2FAL0qUpNpxFlPT4vzk9v4i091NTkcQX%2FqeW1YNiLWXtagx0uUmWOUZFpTgmfbS9RjM20yhTm9UcvORswobIHlBX0V9hhD9MQgU7TyoSmhBMUc9p%2BxCkcmMYtGoE0R5m8LYq864PfMxiEr9p1kjTv7X9%2Bxe9rV%2BX5XNJcirDy0B8bY5H7P0M%2BPCC2WJPBnixVl%2BQw81YcKcv3CDc4rkuXjgpjFeAb%2FIEOMmgEKK2iutm%2BXLnC5JPnc8WMDd1dWaYZAftvBEdPQH3wsoIHvmH7WV%2FCPSTS0St3Ly1PGPYz2NAd%2BR0HudM3WrDDrEIifxXrd2zRLfA%2FJJpFdEQu4VWPBc32HJJC8kPyBD94mQ1VFyXoP4YwVdOaWsK6FjC80aLABjqkAZ8xX%2FI4%2BB6xGZTnDudbtL00lJxi%2FRkd79eOj4Fx1y0vs2Hl%2FPNRDBq%2BP1Axeu823L8qbF6kMvrd6lPdBw%2F7nQQcCfc9kOYFOZybmzGmxZiKvrz7gMgUvUIfVCNHkl8pYm%2FKccZhB5rIiw0ggrJIJoucn3iMHMSzAaeYenvvaCJdcKHrQ9FAWtrQ0X0ihBbvB2yCDG1lBcCFSpPID90oMDdKnk5B&X-Amz-Signature=a3deb8b953fe368233aabf20d78f7c9e72d9573e7331e9bde3801d31e228eb51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJVQET6B%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGiRUJxLOn0Qz4fleey6eSsApP%2FBGs%2BX06THpeEtTOItAiEA5DFTePurnd%2Bk0be4IVqsA4n8JKDj7MKPhAHwKxRTKSYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb3X6bm9EMHOAWziyrcA3LVA3FJ0%2B5LGS5Tzh4CW1yWDlLFXX8z7OvmEIx%2BopdFDUOEZUosX3muv%2FyBx3ZEKnbJsmy1yCxx2ji849R%2FBwCi5ksN0ScqUh1xFiNNrm1Qyu8dpLdCO%2Bj%2B%2B3auDKnuSa8pLOVnFf5rsLI1RNsXG4yaONyVCX4PgmrOicsRpStuLcu1RC1Lzau4DDTEaDDPWnbeaupmqkfeAnGbqxoVUGVKeXGow0b820EMijthNS1s4gnc%2FQprgzBFDcYq7TUjMRWW9bvvw%2F0gvs%2Bz3mGTWvBhsWHbZ3D5M8miWYSwWWWeP1nw3JDLPaI8FJrF8Woz3VpDB6fwvkoQKs%2F%2FgzqiRAVTp0LAW1y3BEJXgUdICrao5zOZs8NW5zcAcOuBUcpaQkbtb0RmHU60fPdq7rIX4lzso3lEC1Slx328iY07qnp7vG%2BQmCmr2%2F%2FQnZADuVvAhlZRg5YPFmmn4ko74TI1Xu6Zkw4v6NwD%2FdDpwLwz6AxUBGrAWdrDSqaba5GGPfJ%2BuQ8WKfdU%2Fd5ZjB2LrjghKFnT%2FdkJMwueAy19gz1aGfUmUABHzsRcl%2F2glEm3V2SzmOPlyQRLG0q0HXJd13DBMpOuNoYGkMJXunim8H3IiZ9R7h5HDgV8LPuKpsv1MLjTosAGOqUBFltKd3AxLqPPEfc5BVf8dgV9cVNREPw8Qamw%2B5pebPyRf72fm3v5gNjnQ5BpwhFnwlMBSt%2Bat9GkDLhV6dSJuFbYT30cxCFJTvpmew9qf%2FDXj7%2FxGQMGDHcZaSL2OdRXM6OkuG92xY2Mx9cxHu5v6z9uyrK3AZ4ttAJP%2BsMyCCQ4ptQaNd%2FHkjGLuipfILChUHmroX38w4XPbP8gC3kErr9meEWI&X-Amz-Signature=fc54c9ca759babb33c4c506938c5decfb1fd032cf2fd25fe691806eff7b93b22&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RC5ESRL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCID8ulSKO7878pAkzGFc1xqB1Xz5hVYRb8o8BvJgqXeKGAiEAzxxORp2UPNpiSj%2BL1nrHZlJue490IQ7C1b42vCQdTw0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbTMrhpfG9GBDCQEircA9hmkG%2BXPlrrykD2KqupxKr1EhcetyBQOwj3iRgg6nk5wNf%2BlOGKGag6MnM61VN0DJ67chw3FE1e6s%2B3Proulx0xb6nN3%2FtoFMJHNmshOlm1YsfaVuNsJTBo%2F7ll%2FamvFmtAyLAhST6y6IXltOvXknvEQ1lPlPmXvu1Gnv6YuGDebMSDKrsTyJgugzgaAYmaOXq2kxGFqdRLxYR2vPsmeO%2F2DDqFmVGO3cojEZP7PvwE3a34aKwoVG%2BaA%2BYAnXR7OcYYbVtNffw2mzT6bQZnElBq%2Bm3w%2Bwgz2kz1sS9t%2BCEeb17N85DFzm7UjtyD9lcDk09%2BaQLVXnCLBpVYIw9pMswk5ybigWFGKKJnosFXjq1ynfwjDL%2FAuSH5HxbeiAzxya0u1mx4vCFveiCUZnepQ3kw1Im7rRRhNzLWQq31BSaX2Jw5snEjsvZ7oR7amIuwXF0Up%2B17ViPIKsFR0CNv79CWBCkA5kBW%2BQdOf4eKtZj%2BxIzuSpqzLULLOaebJzvPP3EBClWZhrBdGCQ5gjIGcN%2BzWN5WhfpbHQDG42X4tKFF9Nb8XU9yNhuBOGiGuGXL0bui4ryF%2BAPd84LZwdAoFGg09kzUUSZaZXoaRvxpt7GOJVGJbM%2BskomnidzEMMPGosAGOqUBWnw%2FYfvRsIxA0ajCpr%2BJRs1dGTNCp4WKQ2FJ8%2BYl%2FyEWuJZS2NY1pRLm6OIbg2gyTkx%2B4dSJWLYsuJZSBH924t7%2Fd%2FruxLw8mXb4Dhzl59HdnoZn0ViLWcVvbINtoyz0dptM8JFUiSd1tpOkUGbEGv2g%2FA8lVL8d9mISvbAPPbHmZaON8sDIaPd3mKfJuj6VLwz5lB3dgFN2AUq0C6Ceqr%2F42reA&X-Amz-Signature=c77620d8297fc733c9c4b1f2f76b86b67ff04620f29a0ec2d43a8c1b186eb06f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
