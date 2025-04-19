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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PNNHTDT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8JppETUtOqabXKSjF614TfE%2FCshyphGVPw9EUYOkzCQIgROC9LxVZvpK99Gkf09mHMvOyp5uqXI72sjSh6PQ0%2FDsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5z6gIiJg1n%2BiiaVSrcAzew9fU4S6glVgHO4Yr08KH2XAj%2FoEHWknCNDHn9LZbdpcEhqgqKLEQ8jZwo8%2BMtB2BDh3sfy0wf1s5WRwmMrXkq9KBBfh0mbsgQ%2FSQm4PF875msEHNPUvWbp4gwU7ySFqzqjT0ovLRWrsBizd0yeC5zUL8h1eb0ky3U0h2fTGs8Bjpdq%2Fi35QTh10sqqnVFBhQ8E2WRTJ4TFKxxZoU68CY6T874PKIfhO7TZ%2BsQXv2gj7kkajW32bFtcBbOCybQzxy3sUTQECd%2FychreXH4v9yugNmfO7YhOnTt2ymkWJfleVfHTORA%2FLMGxBN37vlrfpCjIcSH7PLSEqz4Og4ma8OjdueK04udxdv1kpBOIK4ocr0ePJGHHe%2BnvzbNO6c31offKZ8MJdNXiE3iQgiCJJne7OFqhOrcyBiMISavTHALivWhIvsG8vUIamHSC6KVC%2F7KJjHvP39oPi2hBgdrHKKut2K0EYBfC3WmA6AZ3ZXNeitqRgRbhZv7ZKCEYe42%2BTfyKPtRv56il%2FXB9DBh96kX3SQrlxm%2FnW9Bu1%2B%2Bb%2FB1U7omzbBjKEwEqp4hZMlzU4AZQOsXUbEMGn3ojrWevSpXqcriArM57aRz%2FQMYKeyaEWL4yCZnwGlv23kUMKyhjMAGOqUBYjPVB5uWiGzUb1u1Tm%2Bmy4w1nObeNMZbdqXdBTqwRxtsz1v8m2acMHLzuQt8WAvwIMWYzkzh4WXWij2PORIz2nn2Zo4eJix09qLRmqq%2FuP21R%2FOC8y4QpxTYtw7p%2B8qNuzhSV3kh2FtgIPLXA4hgMKe1Ws3DI6Lx7FXG5TYgpyj0wHSkpXC8Be6iCocciAHe61ruNh4byS3t3O4MnUFhhee6Sz25&X-Amz-Signature=64243623d36c411e7b4171f6a5ea8be04863649a37180b507aa5732f88daf92d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PNNHTDT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8JppETUtOqabXKSjF614TfE%2FCshyphGVPw9EUYOkzCQIgROC9LxVZvpK99Gkf09mHMvOyp5uqXI72sjSh6PQ0%2FDsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5z6gIiJg1n%2BiiaVSrcAzew9fU4S6glVgHO4Yr08KH2XAj%2FoEHWknCNDHn9LZbdpcEhqgqKLEQ8jZwo8%2BMtB2BDh3sfy0wf1s5WRwmMrXkq9KBBfh0mbsgQ%2FSQm4PF875msEHNPUvWbp4gwU7ySFqzqjT0ovLRWrsBizd0yeC5zUL8h1eb0ky3U0h2fTGs8Bjpdq%2Fi35QTh10sqqnVFBhQ8E2WRTJ4TFKxxZoU68CY6T874PKIfhO7TZ%2BsQXv2gj7kkajW32bFtcBbOCybQzxy3sUTQECd%2FychreXH4v9yugNmfO7YhOnTt2ymkWJfleVfHTORA%2FLMGxBN37vlrfpCjIcSH7PLSEqz4Og4ma8OjdueK04udxdv1kpBOIK4ocr0ePJGHHe%2BnvzbNO6c31offKZ8MJdNXiE3iQgiCJJne7OFqhOrcyBiMISavTHALivWhIvsG8vUIamHSC6KVC%2F7KJjHvP39oPi2hBgdrHKKut2K0EYBfC3WmA6AZ3ZXNeitqRgRbhZv7ZKCEYe42%2BTfyKPtRv56il%2FXB9DBh96kX3SQrlxm%2FnW9Bu1%2B%2Bb%2FB1U7omzbBjKEwEqp4hZMlzU4AZQOsXUbEMGn3ojrWevSpXqcriArM57aRz%2FQMYKeyaEWL4yCZnwGlv23kUMKyhjMAGOqUBYjPVB5uWiGzUb1u1Tm%2Bmy4w1nObeNMZbdqXdBTqwRxtsz1v8m2acMHLzuQt8WAvwIMWYzkzh4WXWij2PORIz2nn2Zo4eJix09qLRmqq%2FuP21R%2FOC8y4QpxTYtw7p%2B8qNuzhSV3kh2FtgIPLXA4hgMKe1Ws3DI6Lx7FXG5TYgpyj0wHSkpXC8Be6iCocciAHe61ruNh4byS3t3O4MnUFhhee6Sz25&X-Amz-Signature=2a1fa5950e85c72d1e678121ae8e2725fac9d240e4ac2237785ee128d8551b73&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHPBO755%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7d%2Fnlj82vpirN0Vi6Rsv3xSspKpuHrPIvwLE5b0d4pwIhAOgEzQJhmXAnzfglEqD%2Bt26mGelqf2DICd2hXk7wNl%2FEKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRiBhnzIbWlUfN%2B6kq3AO7b0iP2ToAfKKyjjmD6tvqpLpm6WKMV6ELB834PYaP5Fi9A8n25bDyTz2Z8Ylrns5lrROg1iTdVf1AcWiApa1WKOISZW2Cv%2Byp6ALO3MfeMNhllEt8xyg16fNw8w3CbwVqYIbTLTprPP3r06RfcK7xNOqTvwx5BnHVtpvIO3W0Nht1lVPHVsFb1%2Btdo9THwNvtjWiz8vAR4Czd%2FQlh%2Fa3q5Gr7ihEP960Ej0ZIGozIST7wqdHvzbXEzd%2BG6gTYbvgJIlyxHSW7tSjjeyPtsdlTWrGt2geIQg3A8PL2uFW6yrx1MhZbZ0PJZJKIcKu46pkYB828ryPuEtPLs2SfTndpb9l3VAmoW9Zn2Y9pDH227ryeEpbgY3EWya3IJy72Z6gtFAA91XdezNTqjHEmxTWxylvk2AuHzsrioqKXw74BUOpn46fM9p9QjrAQGZZMIREHjOKNUSv6%2F5aVFsI8n1y2D6Q80K%2B0Rx5Tu5ftsasc%2FJUkM1DNfp67wFSYeDWDR6oP3pl9JPhaLavuDcK%2FZxeETl0axKbNs7VDf02GVpcUWIatQd9a9e2SLYD2DrD9Z7pKPvJifRvzo%2FpdrdUXCY74DJnkzCLjdzQT1JRs7R9sK6glR7njMB83ECM6kjCJoozABjqkAchMiATsKz9GccBjkQZzzKUmSfjIztSeUD%2FDvaZG8aPt6w5AwasSHExDbqIvrYNI3B3cpXyA8sQtrKPkB5UVDNfhvWxan45ranHALOeabBr9RK661E7iyAQq4kqRBd%2FtpMyvhuW4kNTlc40MZD7myAYpLDxxxoqJeWKMze0X0wKlRmT%2Fg566nay4u7DeTFoZwkORsmpvsm%2FD6Dnb7CZY5PwkbO6b&X-Amz-Signature=d4e3495ef050ca8d7ad9bec32ea95cd256e5cdb5b5c6f0d7e578f9a01e329c98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSYQ7PWU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUWaiBr0QWnDGGlC9wfHKkd89HGXaCX%2FemQ7QjXWm9EAiAV3Oxg4thJIJ98dmjsIfAoM27SUoz4t5r20pc%2BDbUrVSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliV3pVCMhdLAgktvKtwDI2pYp4T8BaubAJjQsdCMgGZmckIA%2BD03AGKyM7emfQzTnEZUs0pZCkH1sN3JI0jPtFWhsKbWfWcryZCXlVVhyoFHCk3J2pCubYJmdA61gKSq%2BR6DizYk93aXhOhQhhjYEVpYV77iz4FP9VvkXq20uMkaH9VcsVZGg69dZWFHYcwQTgwPeT6Mu5uSUJojp4l4I4FcnKT166M%2F7tqMKl0ngWRKgMWzpi6rS%2B%2Byx7AXmAH6CEsHh15%2FWwlgh7vKLyVjfkXHBX6tpd9CgcttHn8Shpq7oJEHAKnjTZH7N058mRNfhm8n437HaRNxzY0PAtgvXsNSUciZhySGwqqQ0Mz0757R0TrtD728L74ZuKVyIRCyUOsDmNbFqdBeqVdnZ8zDNyG0mk2Dw%2BQjgZO5iDdGT4S4PwpnKfdQUnXFb8Gp3BwZomtLVggBn5LqP1GTZ0DnYr1o5LyZNxDdVcVOyqO887yOETj0zFjlYLlLG24RoeLt9wLNshyOSz1w1whO9Z6bDEpWvkMIAV5wKipoMIyeCKmAIIZfj52AEcTYvfk3Zq7NL9d9oVwgkhaFaIcSRxb55johbvCrqk9v%2FAUYdA3tLTikDCYlP9MpegYVEaPtdEB4cCU0CRNIcsqsYakwnaGMwAY6pgHYLZuDiDGZvEv42qWLwLsvgBzQfkhKq3AABdViPUfEyeaLfeC7Ukdnp3sjIk1Q%2BVp289ph6DgKRJwqC9D7tJ0UNyy7L2NIf5WyZ2BFKRSDkJsowFHKQXs%2BDhs22C1%2FWPnX4azoiv5r5a%2BNWv8BWPF9mCkNFt42MkPR%2BQv2E%2FQ6FH0r2NeJLBbVJgWlJgs3C9Nd179SJeYGvvHErbxrhdwzyYfXk7Rq&X-Amz-Signature=a0ba2352a2e6eeddb009600f8f07befa9450157f196a0fde9e334ebbeabb9b87&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PNNHTDT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8JppETUtOqabXKSjF614TfE%2FCshyphGVPw9EUYOkzCQIgROC9LxVZvpK99Gkf09mHMvOyp5uqXI72sjSh6PQ0%2FDsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5z6gIiJg1n%2BiiaVSrcAzew9fU4S6glVgHO4Yr08KH2XAj%2FoEHWknCNDHn9LZbdpcEhqgqKLEQ8jZwo8%2BMtB2BDh3sfy0wf1s5WRwmMrXkq9KBBfh0mbsgQ%2FSQm4PF875msEHNPUvWbp4gwU7ySFqzqjT0ovLRWrsBizd0yeC5zUL8h1eb0ky3U0h2fTGs8Bjpdq%2Fi35QTh10sqqnVFBhQ8E2WRTJ4TFKxxZoU68CY6T874PKIfhO7TZ%2BsQXv2gj7kkajW32bFtcBbOCybQzxy3sUTQECd%2FychreXH4v9yugNmfO7YhOnTt2ymkWJfleVfHTORA%2FLMGxBN37vlrfpCjIcSH7PLSEqz4Og4ma8OjdueK04udxdv1kpBOIK4ocr0ePJGHHe%2BnvzbNO6c31offKZ8MJdNXiE3iQgiCJJne7OFqhOrcyBiMISavTHALivWhIvsG8vUIamHSC6KVC%2F7KJjHvP39oPi2hBgdrHKKut2K0EYBfC3WmA6AZ3ZXNeitqRgRbhZv7ZKCEYe42%2BTfyKPtRv56il%2FXB9DBh96kX3SQrlxm%2FnW9Bu1%2B%2Bb%2FB1U7omzbBjKEwEqp4hZMlzU4AZQOsXUbEMGn3ojrWevSpXqcriArM57aRz%2FQMYKeyaEWL4yCZnwGlv23kUMKyhjMAGOqUBYjPVB5uWiGzUb1u1Tm%2Bmy4w1nObeNMZbdqXdBTqwRxtsz1v8m2acMHLzuQt8WAvwIMWYzkzh4WXWij2PORIz2nn2Zo4eJix09qLRmqq%2FuP21R%2FOC8y4QpxTYtw7p%2B8qNuzhSV3kh2FtgIPLXA4hgMKe1Ws3DI6Lx7FXG5TYgpyj0wHSkpXC8Be6iCocciAHe61ruNh4byS3t3O4MnUFhhee6Sz25&X-Amz-Signature=7fc8dcf75daec195282a49c439400956bf2c62210cf23ca7f501b5fbc4d5cc34&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
