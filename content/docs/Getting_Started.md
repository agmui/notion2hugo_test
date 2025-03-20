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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WES2LS23%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIB%2F2e7DaM0P9Fnf3oMTEs%2BHyC1bJAgud5Ouu%2BzOaDZ7DAiAE%2F8K7k1eyD6i%2BF%2BaIacHdJxYwyBXUldnrLIISm4sgyCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIgRWn5l7sdlCTUk0KtwDW2QAxJOQI4pgyvJij6ZtuvrgAvKfeRHhSjMEVZgCq%2BbtD2maGHhwamhkS4GfARuohRm2TbEhm8Gw%2FtfKMapJmDCls0AY4EqN5QeEEbHZguoUsq1YLovluC%2ByRRDleIKhHAwMxyqXfPBgWoxHJqbB2u0DIWWgb2smpQNFmYbjMET15OlBBNs3UdNlCIDjdKGNiogWGs2NdkknAe0EW9GIK%2Bh%2BP8JFGbMXQpQb08FqCsY8x%2BijmABMqkeflJGD7WBmf4DiY025Zuy%2FPCPZpdbt8gdC9s4V9nKbAJBd8xwSf6V%2FUUgTVth4CsVQBVHF3N%2FL4mJVM3iFOUScWulplxn3d9ntXm2lQMgNEuMdDWXvRgZFX8XGNQplGTqE%2BEJNloOoToYGHKVWg%2F70gZ0icEisHqPJFeZKjTiSfoAVSxSFB7dP6i0VxVO%2BSI7FqBWx%2FQa85PPs2YC4A1yZuMesYAcWFw77dQ8Dw4cEozxOc1zk1UWU5dM0%2BPdkPpZcdG5YnUYhqnrRLST7auh6OmPCnhD9NFtaWP66o9vuKJcgzHQ%2BgXpLYH8Rk4CPff0b3SOXi%2Fzxnj53n16%2F0FM4AUGUlOhy%2BsBeNPDUKCUu3JPUataY0Z0K%2F%2BWsAKVfdxvRLKswjKjyvgY6pgFm%2BoZweoCDQhnMxeeC92%2FJZiGaPGRVno3UHhTYoWHCX%2FSaL6lTibplUUV3O77wo3e1I4iUubLivY41d3OcR5m6WULP%2FLGg4XGJW6QqiA7N8J%2BE98NCCx9nlE2nkA9gATFYrDXKgtSuUv6zE049DQ%2F3RvUbCk8vFYxZdruvARzz8X0Csyv0UD%2B%2BLMMIRbJh%2FnvFmtGsy4hw%2FI2dkevcZVVnSIEbceuu&X-Amz-Signature=da314c511b8792cf3131b06519b1f80be268817972ba566b0a8465acd2dea952&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WES2LS23%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIB%2F2e7DaM0P9Fnf3oMTEs%2BHyC1bJAgud5Ouu%2BzOaDZ7DAiAE%2F8K7k1eyD6i%2BF%2BaIacHdJxYwyBXUldnrLIISm4sgyCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIgRWn5l7sdlCTUk0KtwDW2QAxJOQI4pgyvJij6ZtuvrgAvKfeRHhSjMEVZgCq%2BbtD2maGHhwamhkS4GfARuohRm2TbEhm8Gw%2FtfKMapJmDCls0AY4EqN5QeEEbHZguoUsq1YLovluC%2ByRRDleIKhHAwMxyqXfPBgWoxHJqbB2u0DIWWgb2smpQNFmYbjMET15OlBBNs3UdNlCIDjdKGNiogWGs2NdkknAe0EW9GIK%2Bh%2BP8JFGbMXQpQb08FqCsY8x%2BijmABMqkeflJGD7WBmf4DiY025Zuy%2FPCPZpdbt8gdC9s4V9nKbAJBd8xwSf6V%2FUUgTVth4CsVQBVHF3N%2FL4mJVM3iFOUScWulplxn3d9ntXm2lQMgNEuMdDWXvRgZFX8XGNQplGTqE%2BEJNloOoToYGHKVWg%2F70gZ0icEisHqPJFeZKjTiSfoAVSxSFB7dP6i0VxVO%2BSI7FqBWx%2FQa85PPs2YC4A1yZuMesYAcWFw77dQ8Dw4cEozxOc1zk1UWU5dM0%2BPdkPpZcdG5YnUYhqnrRLST7auh6OmPCnhD9NFtaWP66o9vuKJcgzHQ%2BgXpLYH8Rk4CPff0b3SOXi%2Fzxnj53n16%2F0FM4AUGUlOhy%2BsBeNPDUKCUu3JPUataY0Z0K%2F%2BWsAKVfdxvRLKswjKjyvgY6pgFm%2BoZweoCDQhnMxeeC92%2FJZiGaPGRVno3UHhTYoWHCX%2FSaL6lTibplUUV3O77wo3e1I4iUubLivY41d3OcR5m6WULP%2FLGg4XGJW6QqiA7N8J%2BE98NCCx9nlE2nkA9gATFYrDXKgtSuUv6zE049DQ%2F3RvUbCk8vFYxZdruvARzz8X0Csyv0UD%2B%2BLMMIRbJh%2FnvFmtGsy4hw%2FI2dkevcZVVnSIEbceuu&X-Amz-Signature=8353d11f7bb2cbc36f40d06cf413c18c9429a1e9787e7ffb099d585fcca0a6e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDUB6GL4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDVgDUPU9RLTAoDbvxkbkJo8D3%2BI6X2Pf%2BVTII8gGGHiQIhAIz0vB8Lb1q5VjD3K7QltSI2HYFPGOsK%2BZ3UTRQ6IoL%2FKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDAyJjsfrB7JPCBjYq3AP7oB%2BqYpTwxlIW3yBv0UydskerTdOUINgU2NjLFN1hSq4WPRbFoFbFHnmR88lykyZgrBGI%2BxGLSWi37Hg51%2FtVWd11DjrOpmiw0DPBXwVuV0L9K2d1vUUEolbJ0iSvxULWreNFH80455A5vbhwgzWur%2BErxH40calPUsiL0rIxxrgWk%2BVfqjEiGUggo99GHGOb1t%2ByctP3NRr%2FpCrjT1PgG7GL3WvRhMkznyRZWz3%2Bk8xdrLNCT0c8F84pAE5Y3ACuoW%2FvrhZIp3%2FGclWHZwzYUs108RWpWBI8ARsQGjCGzuvRMDfJcJZmNcomp9GgckEJZPi5qS6O1EioQpQO2WwW7n3s8UaylIkN0qT%2F3FzHmskQIEZz%2FetpRW3KzJfRgkcKG7%2F%2BVEY%2FuGssWwVbj%2BCYwJqhuJjJgfUCwaIw15lp9Ob4i2LU4CnsVANZ0zOUr3G0YETMMC%2BGXtgh%2F291EnV8ekmjKjb4fS2kJCpZboE07oIDqoCwxJEZYDWZ36WEeabicpwc4gE%2F83bdrk1%2FbM0uU30vh3e9ejjQ5%2F1pel1G3%2FDVqRhqf4JPjdIwtgygnqcBGRRbhEq%2BU9G2voX76q32fTVMzG7P7z29qhM7ap8o4ePB1snwyfVCcucwpzCUp%2FK%2BBjqkAWSocVFTkg47WiEjZxE%2FaJPzFouOfuki3nBkDUi%2BN7EvV71M0It456798%2FwFAcqIvXOKf%2FRkd0MCzztr7Jj1L0YJtIUMhjZ%2FddFrPkbPV8jQ2zBj5YSSSwTRA884LWO857WjLsIpyR2jYca2WTdpAfHC29B%2BN7ojzpm%2BwdYV%2BM4Y72i2%2FrIwNp3r5Qf8HAIWCc3dEvtif5QbdpcVaIPvh27j0voo&X-Amz-Signature=f35e67e5a3769e120331c28619f9b774f96111e35ba53011bc16127325733929&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMA4UOQ3%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFePhsVCH0r8%2BLMX8EK5baHwsUHr1dcoR%2FJpEiNn%2Fy2NAiB4P1GIq%2Fd1ik8p45y1ye7QPO1nhSZXn6oc4Ml0vdXfciqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYzK4AhOKbkwnu%2F4QKtwDga%2FPQ7SiHil47q2RfFBzFmv31ku%2BypYdLSt0o5fih9y%2Bk8bZv48GyQCBT7QdVEwoLvhafSXfOtCQ0Ibdsn2EsrH5O9SlX7mI4aR79nsJVWX0YCga%2FknKn%2BVK01LdYbgtiqD2fBoyKh1U9fLfcslA9hSo0vjRmNFCWFFYebkIXFW578KIrE%2F2XY8IIiOrYXCmZPu4JHFka7I1ZOIokm5aKDd4u2V%2FCq9%2FIauUiJGjJCrPLCGsWmquHcw9aCCQdXaODj7vEMB4MHS0wZ%2FosCIusO%2F%2FWx2lTcPSSvumm7lPg0WjvRP1Gsx3Q8gx3bIAHIBD2KIhxwd7K8BE2ucU6XxyG%2F%2BLfMFQehQh1nXiIbHXE02NjBZCHaUIBhcmInKehAsihZI8hNeBUEfoDjCZYdtA1u7UZTZfN3fFLvbr7Jdp11FDC9wnAFRe0IutcMdpgZf4Lh637KDnW21lGQPMJHVicnQPnlKJXnUKERAQQxSHnWgAhyZ77yhNrmUsPK4n%2FrzENQGTCZzmYhNUyR4GYtZaJvrrDjqvhGTY8%2FMfpWzJHoquiocJVfva4VaNaS088M3zkoDYzOEcjVdcH0XgRQSukTr19lihNu5jGwLsHs1fCrKJjA807szzCt%2Fn%2FOgw4afyvgY6pgFeukyvIuH1K5mvGkOyL5CxIfx0TrPnRGMy%2B4%2FmQYftKp77K505hAX38OtNe2Vne%2FmOOh4kCYpTvG%2BPtFpBZUW%2FswWTgai%2F2nRcyje4z%2BBQHkLmPfxPxwJ1nxTaQuI%2FBQU8pHdL%2FbJQwf3AK6r2MzW2R6jWqWNv4M6Nlosg44V%2FQkeAFF9EUvJs6c8S%2FveqJtsMHwq1HG1KxDVR%2FSm2gEBwdANNQB99&X-Amz-Signature=ae8deaedf08bad6b7c20194e9e6b66d07daacbc40513d77cca9dc1ccf42c8ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WES2LS23%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIB%2F2e7DaM0P9Fnf3oMTEs%2BHyC1bJAgud5Ouu%2BzOaDZ7DAiAE%2F8K7k1eyD6i%2BF%2BaIacHdJxYwyBXUldnrLIISm4sgyCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIgRWn5l7sdlCTUk0KtwDW2QAxJOQI4pgyvJij6ZtuvrgAvKfeRHhSjMEVZgCq%2BbtD2maGHhwamhkS4GfARuohRm2TbEhm8Gw%2FtfKMapJmDCls0AY4EqN5QeEEbHZguoUsq1YLovluC%2ByRRDleIKhHAwMxyqXfPBgWoxHJqbB2u0DIWWgb2smpQNFmYbjMET15OlBBNs3UdNlCIDjdKGNiogWGs2NdkknAe0EW9GIK%2Bh%2BP8JFGbMXQpQb08FqCsY8x%2BijmABMqkeflJGD7WBmf4DiY025Zuy%2FPCPZpdbt8gdC9s4V9nKbAJBd8xwSf6V%2FUUgTVth4CsVQBVHF3N%2FL4mJVM3iFOUScWulplxn3d9ntXm2lQMgNEuMdDWXvRgZFX8XGNQplGTqE%2BEJNloOoToYGHKVWg%2F70gZ0icEisHqPJFeZKjTiSfoAVSxSFB7dP6i0VxVO%2BSI7FqBWx%2FQa85PPs2YC4A1yZuMesYAcWFw77dQ8Dw4cEozxOc1zk1UWU5dM0%2BPdkPpZcdG5YnUYhqnrRLST7auh6OmPCnhD9NFtaWP66o9vuKJcgzHQ%2BgXpLYH8Rk4CPff0b3SOXi%2Fzxnj53n16%2F0FM4AUGUlOhy%2BsBeNPDUKCUu3JPUataY0Z0K%2F%2BWsAKVfdxvRLKswjKjyvgY6pgFm%2BoZweoCDQhnMxeeC92%2FJZiGaPGRVno3UHhTYoWHCX%2FSaL6lTibplUUV3O77wo3e1I4iUubLivY41d3OcR5m6WULP%2FLGg4XGJW6QqiA7N8J%2BE98NCCx9nlE2nkA9gATFYrDXKgtSuUv6zE049DQ%2F3RvUbCk8vFYxZdruvARzz8X0Csyv0UD%2B%2BLMMIRbJh%2FnvFmtGsy4hw%2FI2dkevcZVVnSIEbceuu&X-Amz-Signature=6c38154ab9e5f0f89565229d4651b3b2b94158715b8ada458218d54bae54d26f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
