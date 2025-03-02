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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU4JUYDY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCCy4NezNCyA18v3tRDElEynSpKwaEr5fum5JUyQDmpOQIhAJ7skTOKRQjArR5s6n8bYZUTK9dnMPz9xBamW8InGrfYKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIkeGvPDESxF2aVNgq3AP3%2F4yqi%2F1dVdrXpa%2Bb5ubgJ18AxX7sajkm9M67NOxQwiBRIa1JYLwuHTU9VV5rXW2he%2BiAjuursUlUrjq8dMEjLjTD2kx6lzhu3v9jSGOEjt1pn70ZVayJ0mdWNIdqIKRLVYqm5s7jpypRtFx%2BVj%2BUw3%2FF4G10jJ0V7WJFiJTflfARtKDaC22%2BqmLyofoF2FBe7Jn%2F15ZqA9QrBy4d2TEOq6FYFW0LxL25c2Qu884tIhE77SQt%2BGhvvjTYsPwi5AhATcEBLPBNEweQaKEXtgqY4V1rRzLhkjkM14s9HvgMU6vxH2SvjMxkK7fbNEkSBzd6bwJVvj09vDR9bijU9pQhEdjv2urRDPZEgfETdqwBO4p%2BnMBSlV%2BpWS8mLGKy4hfB5jysqOqMBsrU%2F2tQmPqP6kSOzgGYqHaStuiNKy9rgEGY%2Bb2U39bJpSIwVPMFgFliEHePkfKZ7Ra6zTy2T4bxAO6VCCvNYdnm%2FfftvAfMgUtyniVEAq1IQi208IiOOc%2B5cHk4T%2FqGbocMnS3BcxkDuuECWDoWxbgmmphjnZDjkyBmB1l5altpsOTC2U%2B1j1A0Mi3UCYHOxyZ47Hs7LMQ7hS2%2F92inaX1b5vVTpf4mO6OJM1GSghuizfuxojDV9o6%2BBjqkARy9WwvJVyhSG%2BmwuAEmEhE171t8EbndguB4%2Bj6Aqz%2Fp9VtwdaWc7GImnqeBcBBvmeGvU5obRdKWhz6izD51iUEP2ri1xRnf2hnm%2FLNda1FapYi4RkLSbpFcCLYhvY34AXwo5R5tIawOVGlAN4AHjtsSdjf9egzDfQdnMG%2BZ1VYfASl9rbzCx5xm1RntCcdDIP%2Bs1WvSXHbSo45%2BXSOEwSIHV2yz&X-Amz-Signature=f8c08999e7705b9bc087f1b3ea09bf2321358ac547e89224e18401fdd20aef8a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU4JUYDY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCCy4NezNCyA18v3tRDElEynSpKwaEr5fum5JUyQDmpOQIhAJ7skTOKRQjArR5s6n8bYZUTK9dnMPz9xBamW8InGrfYKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIkeGvPDESxF2aVNgq3AP3%2F4yqi%2F1dVdrXpa%2Bb5ubgJ18AxX7sajkm9M67NOxQwiBRIa1JYLwuHTU9VV5rXW2he%2BiAjuursUlUrjq8dMEjLjTD2kx6lzhu3v9jSGOEjt1pn70ZVayJ0mdWNIdqIKRLVYqm5s7jpypRtFx%2BVj%2BUw3%2FF4G10jJ0V7WJFiJTflfARtKDaC22%2BqmLyofoF2FBe7Jn%2F15ZqA9QrBy4d2TEOq6FYFW0LxL25c2Qu884tIhE77SQt%2BGhvvjTYsPwi5AhATcEBLPBNEweQaKEXtgqY4V1rRzLhkjkM14s9HvgMU6vxH2SvjMxkK7fbNEkSBzd6bwJVvj09vDR9bijU9pQhEdjv2urRDPZEgfETdqwBO4p%2BnMBSlV%2BpWS8mLGKy4hfB5jysqOqMBsrU%2F2tQmPqP6kSOzgGYqHaStuiNKy9rgEGY%2Bb2U39bJpSIwVPMFgFliEHePkfKZ7Ra6zTy2T4bxAO6VCCvNYdnm%2FfftvAfMgUtyniVEAq1IQi208IiOOc%2B5cHk4T%2FqGbocMnS3BcxkDuuECWDoWxbgmmphjnZDjkyBmB1l5altpsOTC2U%2B1j1A0Mi3UCYHOxyZ47Hs7LMQ7hS2%2F92inaX1b5vVTpf4mO6OJM1GSghuizfuxojDV9o6%2BBjqkARy9WwvJVyhSG%2BmwuAEmEhE171t8EbndguB4%2Bj6Aqz%2Fp9VtwdaWc7GImnqeBcBBvmeGvU5obRdKWhz6izD51iUEP2ri1xRnf2hnm%2FLNda1FapYi4RkLSbpFcCLYhvY34AXwo5R5tIawOVGlAN4AHjtsSdjf9egzDfQdnMG%2BZ1VYfASl9rbzCx5xm1RntCcdDIP%2Bs1WvSXHbSo45%2BXSOEwSIHV2yz&X-Amz-Signature=f7e4929f25fbc0be2ec68858ff8e64d8eb208c486e2990e89fd59a6f25723da5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625SOFTEQ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIC5XWSXLUAtx0Y2Gb6OOLdhTRxm3cs6GIY%2FJcARSJJW%2FAiEAld8ve6QMY5%2BapS6DysMWeTkAFc1HKWNH9WZl5eFHJikqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1MG4HeoCq2DjSqTyrcAwvpN43Lhy2Y6aTU9k2A62qImQkdEZpZqbiCs%2BZI3DG2rnFM%2Fqy3M5ZosPB5FeWJ3N81vARrSCgQiiCU9aWNMuWShqzJkG2DCQfVtpNSd4yhBUK1utTe2bTjA9LxSpb7waqW3i5f1ppaWK%2BnbD%2B%2BCWeaC2o%2BgkV%2BXs3UOaT7%2F%2FfYANFZyjQZtVz8tkjBEOR%2BN9js5e%2FHASwEBcz%2FZ4c9s42H9wwREbNqI8mpPsppXDrpOsWH2EwKA4T3tSyswUrOvMNs%2BfhhYVNV8UytihJezgDo1DM9JNlkmf7ftPkrthhHOlESFlg0oRTIL9mGTbdWdy6igzEremStQEhb2FZlb%2FoEjw%2FpQQBv3n%2FJzgITwCTenLjz6qJ%2BXQAo%2B6JFrOxdzWECUny1%2BwgyEEMRTGYrXtRfkn4l%2BKc3ExEPs%2FX4gkdfzMSUdFYHC%2BHk8ffondj%2BoeY17MBYxZWN3Tklu6gJErhGnDW0EssPjbqs6msCp2IifyyyODwu2E6jbVeRRyebvl551I6LZA%2F4ERyv1JOm6j%2BLe1sZOOneL7K8l0djDAql1bm3jd3ldWGwMMdL24SUw4ezeyjLi9a6ec%2Bfqkz%2B%2FMwoHJcVD9svonlnM0D8%2B2kAo3BaI3oqqD%2B%2FBcTlMKv2jr4GOqUBAxyubr7smvdFYmox30fXfllzoIaPAF%2F%2BUi6g8tEUFPLGB%2FkUioVONM8T0PClFM%2FfFdGYI%2BxL758Q9Znm6qDTN5i4hrvcyHerVhAcjmj2sDUtSVaLgOySKyiIO8R9YPdP862ZL%2FZ%2B0ntf8GXpdLABRGidop5reNkfrWbk6vL9a1v7be8wSwmrn754kwzD5JmdU0kNgVxJRiFXUUBTn73ij7rR1H5I&X-Amz-Signature=f121398730b06e42e2b2110c13fd73362a3bebeef473880cfca7dc269717536b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2QGQ2Y5%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDJJZgXgcu0DyOyGPHzFunbXNHZsFmTcRPDcbno8PVN2QIgPPJfgxd4KeGZFH7O86iZ1eyt%2BwQ2nsJNKJcpQ2%2BAJXAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPB8kbvXXitYHPtuyrcA7H6oE1%2FmdOBBrZreacJs2Z%2BEUX%2FpRjTk86jkpQHJUF%2FUodVhB2ZK2phDdmuref%2Brx6gz7DdbqowGNyb76QEdgGLXX9nvSSwyW5VOpUukdLBsY7kL0GiuqxpPZ8XhjuOCczfOXbptyUReyAD4atBL1ciSNRwjaUFx7%2B27Vbc71I3vNgK3vINCR5CO6DPr54cI5Dy0bbC3YCN0Gcn3jZF3RWrETEr3CHQiHCE0mvNRq%2Bth9lvYtISR8NtJ7BATkBwEJCE1oGgoK8MgEyNOXol42rPdhZUaJYfu1RPc0zH6tjsKFIASphlKg6G1XaxksdoDjDHUfnmm186nCRdPzzFNKQL42VAnloD8JrflQjWXXB4n2ELnGgstyNk%2FP18jHB%2FrGVMiWnhiUMAR%2FD2hKabadMopjEZaS776ShLfHWXL7T6sDdh%2BAt65lPOTLyC7U8Av%2Bj4m27lYFHY8xZsxaK%2BuwnD4hwq3yMkohkcRE5ebUYE%2BE%2FL1q3L0zQiroqcOfz41F27aTGtZlYnFLs59QEOdf4bRsrltn2Fsg97uqV2UtXMjtgCxj6gUVpXp3CUjnlw9nneXJk1V7y%2BTzg3eQCl3D%2FBGVR1f%2FVE%2B5J7oMDXUP4A%2FEmL8K5xNz1yFXLtMPv1jr4GOqUBaINlP4lzqid4LL6Hrn8x7YZS2W%2BqeWVII%2BvaBHz77Ru4G1qIBtH47pkft2P1kBcU2OmEHJJKNXLypMd7ekDlfiTrg8iX6C9M%2BdB1c6sQUcqbQtN5BAQrCK7F2qr%2BIq%2Bw4D61YTnHWpZOkRMg7fnh9PF96QRUayHMI809v1KLRqz3M2DHlaFQuUMHCUdn0C1diES3ripIoJDCRZTgCVzcWobbpHGL&X-Amz-Signature=d5b72780eaa15b429e592ff7df387fe989e4f312e03820e1b911e26e78af1a35&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU4JUYDY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCCy4NezNCyA18v3tRDElEynSpKwaEr5fum5JUyQDmpOQIhAJ7skTOKRQjArR5s6n8bYZUTK9dnMPz9xBamW8InGrfYKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIkeGvPDESxF2aVNgq3AP3%2F4yqi%2F1dVdrXpa%2Bb5ubgJ18AxX7sajkm9M67NOxQwiBRIa1JYLwuHTU9VV5rXW2he%2BiAjuursUlUrjq8dMEjLjTD2kx6lzhu3v9jSGOEjt1pn70ZVayJ0mdWNIdqIKRLVYqm5s7jpypRtFx%2BVj%2BUw3%2FF4G10jJ0V7WJFiJTflfARtKDaC22%2BqmLyofoF2FBe7Jn%2F15ZqA9QrBy4d2TEOq6FYFW0LxL25c2Qu884tIhE77SQt%2BGhvvjTYsPwi5AhATcEBLPBNEweQaKEXtgqY4V1rRzLhkjkM14s9HvgMU6vxH2SvjMxkK7fbNEkSBzd6bwJVvj09vDR9bijU9pQhEdjv2urRDPZEgfETdqwBO4p%2BnMBSlV%2BpWS8mLGKy4hfB5jysqOqMBsrU%2F2tQmPqP6kSOzgGYqHaStuiNKy9rgEGY%2Bb2U39bJpSIwVPMFgFliEHePkfKZ7Ra6zTy2T4bxAO6VCCvNYdnm%2FfftvAfMgUtyniVEAq1IQi208IiOOc%2B5cHk4T%2FqGbocMnS3BcxkDuuECWDoWxbgmmphjnZDjkyBmB1l5altpsOTC2U%2B1j1A0Mi3UCYHOxyZ47Hs7LMQ7hS2%2F92inaX1b5vVTpf4mO6OJM1GSghuizfuxojDV9o6%2BBjqkARy9WwvJVyhSG%2BmwuAEmEhE171t8EbndguB4%2Bj6Aqz%2Fp9VtwdaWc7GImnqeBcBBvmeGvU5obRdKWhz6izD51iUEP2ri1xRnf2hnm%2FLNda1FapYi4RkLSbpFcCLYhvY34AXwo5R5tIawOVGlAN4AHjtsSdjf9egzDfQdnMG%2BZ1VYfASl9rbzCx5xm1RntCcdDIP%2Bs1WvSXHbSo45%2BXSOEwSIHV2yz&X-Amz-Signature=87b980b550677310d31ddbeb874a650653693fd143bce70b40a337c9d1facbf5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
