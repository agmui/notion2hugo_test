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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4BWV7S%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGPD9CqVe0LM6FwJcirvv51A4SZ2RlTqKYPRnBv%2FtlDVAiEA%2F%2FJbD5Ei6sMa17pcLNCbEK9eLqaM5VN%2FlQQS%2BXXOoMIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCwcxPadAMUpWAyDSrcA8LaOsw5NrNcmlI9e8NTjpJkaspZGY9yDJOWlqfS1RFPYjCYaANn%2Bl86ugQfR92oA3ehCOvu6XaPL%2FplP4FYWGML87ruNop5F5%2FHB%2BOKcXQMPEbrWwcJPAlpI8isv07d1S8EZ7a389OGXcWlNITRnNESqR1Kc1DtXixVeJCe3Wro8ipf8AFXYl9mEI1wXB1hJWz5%2FcbbZHQgiGE3R7QHUAWmlqXM49jK4NjR%2FMvUBzZRMGDs%2FE3qBsfBB5qhI9Zh%2FbnG6o3PVmJ%2BIIQu7G%2FLMa24qlFOCBPO2dE3z3zDAwzdznRa92YRo9nIk4HN3igW4o5f5IR4KIB6UpOfTZ8X3MPbc0Ac3roZcASgLf3GvrRVpoccpxklEnRzJjQ%2FprkESOuZziV%2FMV9gwZNX9K4y1qf%2Bz1EB93CQgy0h5azAVMQleWds7aMUxLxHoCm9qHd81qbXx6Kh99NZ3Fd1s04GJsXF1jWUR7UVJcOLUDqWYZCzqnXy5%2Bw3W9XKLwUq%2BfSmBj%2FoJaCZTN%2FwBxfbH0WT4sZAOhT0fYu1dWzdfLvRYfz6J24I29WuDcRwFeETtHlcKzDALYCDxt%2FoPKCSNu%2Bnkwbbkep8HaeP2Lu%2BT8%2Fsy6hO2BkKK9wNFWf3%2B1KJMKO2%2FL4GOqUBe%2FcOwuGBTUv2YdVhvfmXuQt1X9hDjdRD2Dtf%2FM6sNB4YWa7jsiyf9tggwoK56SpSLkZiS%2BVcBL8WSSu2yTXQWiItjz%2BYcB%2BQrWnz9Vv2LjdSuLQwAeXvp6VEQ8KuzIxH%2BoiQH%2FDKt%2B1LPs%2FDInMpCcAuP%2BQczg2cfjtUcKzcLiG6ZnZuQo6N%2BMR0zbk3mGMnu%2BQAkh5EmGUdUSCL4HxqKMJedwqL&X-Amz-Signature=9ad70deccf1cdffe144669d9dddc534dec5434485d28106ae2ffc14b85a74d54&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4BWV7S%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGPD9CqVe0LM6FwJcirvv51A4SZ2RlTqKYPRnBv%2FtlDVAiEA%2F%2FJbD5Ei6sMa17pcLNCbEK9eLqaM5VN%2FlQQS%2BXXOoMIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCwcxPadAMUpWAyDSrcA8LaOsw5NrNcmlI9e8NTjpJkaspZGY9yDJOWlqfS1RFPYjCYaANn%2Bl86ugQfR92oA3ehCOvu6XaPL%2FplP4FYWGML87ruNop5F5%2FHB%2BOKcXQMPEbrWwcJPAlpI8isv07d1S8EZ7a389OGXcWlNITRnNESqR1Kc1DtXixVeJCe3Wro8ipf8AFXYl9mEI1wXB1hJWz5%2FcbbZHQgiGE3R7QHUAWmlqXM49jK4NjR%2FMvUBzZRMGDs%2FE3qBsfBB5qhI9Zh%2FbnG6o3PVmJ%2BIIQu7G%2FLMa24qlFOCBPO2dE3z3zDAwzdznRa92YRo9nIk4HN3igW4o5f5IR4KIB6UpOfTZ8X3MPbc0Ac3roZcASgLf3GvrRVpoccpxklEnRzJjQ%2FprkESOuZziV%2FMV9gwZNX9K4y1qf%2Bz1EB93CQgy0h5azAVMQleWds7aMUxLxHoCm9qHd81qbXx6Kh99NZ3Fd1s04GJsXF1jWUR7UVJcOLUDqWYZCzqnXy5%2Bw3W9XKLwUq%2BfSmBj%2FoJaCZTN%2FwBxfbH0WT4sZAOhT0fYu1dWzdfLvRYfz6J24I29WuDcRwFeETtHlcKzDALYCDxt%2FoPKCSNu%2Bnkwbbkep8HaeP2Lu%2BT8%2Fsy6hO2BkKK9wNFWf3%2B1KJMKO2%2FL4GOqUBe%2FcOwuGBTUv2YdVhvfmXuQt1X9hDjdRD2Dtf%2FM6sNB4YWa7jsiyf9tggwoK56SpSLkZiS%2BVcBL8WSSu2yTXQWiItjz%2BYcB%2BQrWnz9Vv2LjdSuLQwAeXvp6VEQ8KuzIxH%2BoiQH%2FDKt%2B1LPs%2FDInMpCcAuP%2BQczg2cfjtUcKzcLiG6ZnZuQo6N%2BMR0zbk3mGMnu%2BQAkh5EmGUdUSCL4HxqKMJedwqL&X-Amz-Signature=38099d94ffdbbec00de2e73ecdd035edb315277294f919a6211efe54ec8e3ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VG25GSV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD9YU6Tpe8OlzlNs4wJKaC%2BfXk45JKKNwL8BKoy3KHv2QIgO35KRq8glXGvFPn7xS3AT%2Bxr3UJaTElLTIblnggV05IqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5GuJqvwhfmjBeqySrcA%2BnvBn4AA4nSoWTlyu342lSRO6vMtuBQQ%2BrJAnEzz9B3Zfg2dS%2F23lAw%2FUy6eKYTpiRZ1JNfZMrtj7Cbym1GgZ360QQMDcmKsPQ3Re0LW1%2BigFOphMf9B71Sdy7hshui9WOz40P25Nf4I9TtlYG8f2MfFodgDEAbd4VgweqgnDuFTDIUQML3aJvFDODShhO0rZ0dIasW4ciwAhJmHYqpWZDKbTjRTHCSgrEebhqXZ2lPZGeM02nkq9ZKYTlUMbaqg7ajjBTT%2BHUthu06tDluSPySerwP8dwFoMMb4DWCpdNz1%2Bqr4%2B9mKNd50jn3Xwb%2FdmxGHCPRColGcTd%2FI4SBhZDAlQIQ%2FFbCOtxWLUitrFNmpfXzpWUasQLu13Ltn%2FeFGyIjmLIyf4CCAUOQmNeFqxepqbMl%2FwwaFikEnIZtucYKM1FolpLqSmW87Mn1KhfYHhesSPwRfeEmrdo7rSqT0O4DetK1FlN3Z7Z3Bn5RJhv1bNyU9mzZbi%2BvgK5chBCbzYZgk9LeTgON6dVX%2FcP4x7%2F%2Faq5ZWiBl%2Bavh7V0y%2B%2FRXVggFboKbKGh0FkZURRaAopbx7xlEEqEDp4pvFLK0q2Uw4vZbaASyKmthnZrSlU%2BDcz05pj2U1POIg%2FF%2BMKO2%2FL4GOqUBtljcsFCUhMpbdFQH97T%2BvviPfEWYjDxECgrUPoRMV3FByfNlPnhYI55Esm3mgeDx2oj2yoR87ST5bPeXAPL8yj4GyBuGPdJjpLCrpnC1zstvAPfOQxwv3hmcxIbOQV%2Fb%2Fx3DSWr3%2BeyUoYaMixP1dfc0owgX9yeppWxMnsADX5L9TF%2FHf6YnpMtUvFF9xVD69L35Crq%2BJPgaKtXJuQ3PJE7NJFg%2F&X-Amz-Signature=bfb7f80210330a9ad5ac9d93d9b77733aef0deefc46f0cb66b32257ca9ca414c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y52CKORX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCaKT4oVfxT6Jqx5o1ASB5fVfZ%2BxdbEYLEKy1ur7am0IQIgMEOA8PyKd2VDZySpdTRbxuR3c%2B0C9y25vL8goG4uKxcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3%2BsfXNB3IMWO%2F2lSrcA%2FPOE1zR9B6Hxl5PCfg2efyqI0Z%2BWmpcL%2BtUapZ2cpQozokb7LSNsQbpmDfX%2FhRl6eFGWcI6cxlRpQtEVRylnkx3cD%2F0ev3YfdsybBf16oXeA9pGsEzq8JRZczt7h0hsLehB8s9UKsU7p7dEG88croz6s1V4EJZDO792wJ5Lx8LIcd58sK7dSuWP2tod14qzwlFhF4BjhIDTIsmxIVtZBGL7NKRcJNThZBv9Qir3CId9Hfez8aYfX2FEIAffuAIiqn8ILBfduBkHe3I1dy4%2BvlbDMVksWQROTVjcQqnBxZ3j55hMxenOPX7PwUVgZVxVjp74GNbYwqScP2P3nEZvLdUg%2BPXA4BUYyvX5L7g9hUckgvIQsNU89rw47aXPKyIR6CXzMXAFsdMQJXEEasQ8v9ugUc%2BFSwcU4HMSWtbjC3Wz9hcmRfCvk%2FhJmv8EtwUDlXhJaoMtzTKrCXYGBIHDd%2F0HpRWCotnwWv5n4kCtUMdstBSawKZAvSEbumDxTBh2PUqUyymVx0vews%2Fy%2FwMCgtQrSIt1w2XAYbm%2Ff8iB9NfkS8Pe%2BKfe1hfjEwIF37umfpilleyTMNlUHRkwKWf4aT%2FvxEsvS4ug3qVu%2BIG3zGbp30FtWdqHzJn3HJFTMI22%2FL4GOqUBzNdc41k8MGnnC6qIQ3FIBD5pWVjM1GuOJ1XAvBM4o423T8QHaOXLB4%2BPFCiSJXH2vcQxlIHHXUo6Wt8AgZeNjhT%2BLp24WRPxTZRGBPychq7jmXQxz6k5BZnp6zpiERF3OCDj3%2FdnaooYlmnD2EZCJ%2Bnt1xqULPD1BG7EHW7nJtOlcv4Y9hWRwMIoTBKd2h4DVFBLGvXAUPcF0zEaOq7rQI2SHusW&X-Amz-Signature=3ab479b63994195d06f2276f2d235d7a4754244c9b0a092c6a10174dccd9b88a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4BWV7S%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGPD9CqVe0LM6FwJcirvv51A4SZ2RlTqKYPRnBv%2FtlDVAiEA%2F%2FJbD5Ei6sMa17pcLNCbEK9eLqaM5VN%2FlQQS%2BXXOoMIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCwcxPadAMUpWAyDSrcA8LaOsw5NrNcmlI9e8NTjpJkaspZGY9yDJOWlqfS1RFPYjCYaANn%2Bl86ugQfR92oA3ehCOvu6XaPL%2FplP4FYWGML87ruNop5F5%2FHB%2BOKcXQMPEbrWwcJPAlpI8isv07d1S8EZ7a389OGXcWlNITRnNESqR1Kc1DtXixVeJCe3Wro8ipf8AFXYl9mEI1wXB1hJWz5%2FcbbZHQgiGE3R7QHUAWmlqXM49jK4NjR%2FMvUBzZRMGDs%2FE3qBsfBB5qhI9Zh%2FbnG6o3PVmJ%2BIIQu7G%2FLMa24qlFOCBPO2dE3z3zDAwzdznRa92YRo9nIk4HN3igW4o5f5IR4KIB6UpOfTZ8X3MPbc0Ac3roZcASgLf3GvrRVpoccpxklEnRzJjQ%2FprkESOuZziV%2FMV9gwZNX9K4y1qf%2Bz1EB93CQgy0h5azAVMQleWds7aMUxLxHoCm9qHd81qbXx6Kh99NZ3Fd1s04GJsXF1jWUR7UVJcOLUDqWYZCzqnXy5%2Bw3W9XKLwUq%2BfSmBj%2FoJaCZTN%2FwBxfbH0WT4sZAOhT0fYu1dWzdfLvRYfz6J24I29WuDcRwFeETtHlcKzDALYCDxt%2FoPKCSNu%2Bnkwbbkep8HaeP2Lu%2BT8%2Fsy6hO2BkKK9wNFWf3%2B1KJMKO2%2FL4GOqUBe%2FcOwuGBTUv2YdVhvfmXuQt1X9hDjdRD2Dtf%2FM6sNB4YWa7jsiyf9tggwoK56SpSLkZiS%2BVcBL8WSSu2yTXQWiItjz%2BYcB%2BQrWnz9Vv2LjdSuLQwAeXvp6VEQ8KuzIxH%2BoiQH%2FDKt%2B1LPs%2FDInMpCcAuP%2BQczg2cfjtUcKzcLiG6ZnZuQo6N%2BMR0zbk3mGMnu%2BQAkh5EmGUdUSCL4HxqKMJedwqL&X-Amz-Signature=e7041ac3dbf35def0598c47ee2cafc2ae6fa04147e526f19342825d2e2641b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
