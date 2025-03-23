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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOE6AMR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBIqOp80ltS8gA3RD4RCQtbAe%2FhCtp%2FkrH617DdRxTJPAiAK3mmdqY%2FFBBBg556Kj4L2cPo1zBU1gnZYltc55Iqh%2BiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMP%2FDXSUaTZ2iDwKuKtwDbBrcBEm8nhMVqq2TIyExhQksS%2BSiH3VdymeVgyEt0gt3EczUuvZ0ODWbxIwxxW0UcPW8vHPKF1NBwDtywh6zyjmK1TPMEz5jw1KxAAMINXGI0wlqbUhpcm5nLiT8m3bJCSEozsKngFDoVdFxjDvN9RU7lq6nkDwsa4tuUS9T5MZo4VxuwngibqVj2O22kUQCVJMu%2BhcpLg%2FPRrY5rN6cGwkYZXF6Gq%2BItT%2BJ988JV6mhFwFIYngonAvyVGjnzjWRZdUd%2FiRc2lAKOCPXYGLIcDJZhnML7uTsPK7K%2B%2BHFsBbVK%2BURb6RwegLOjQgMbJ7I9OKrddUukbqEVNSxx6PXiHXfHBro5wTNn714xOudc6ZoA2w11wIRVrMDcMy%2F94Ho6uFzpplhEhQXm0twIfzVIUOz6AkZeCPxfmn44T2xTag0158mvjOtFT3H9KB97Ca8MDucTU%2BN1gHLgGYxt4BHUWOB%2F9JqZ1whl3HHNKnRq5bK7qc1nhk6huD5uD2SSorUNfoSx%2BGT%2BACULtp7123vtFUYcLO7OnKldJEnXVz0HtVY5E5QUoZOMNFxClcl5OPBeH6Q%2BoqR0UhjoKFFYwKKZWTVIrNYV6vK87D7pmKtYd6OCI5t1CcVecD%2BXmAwjo2AvwY6pgHbImLNxq6sw8r3VB%2F0GPDGbiNYGS9c1zKL8xKTF29vtjfzCgxDLbcHWgGnjlgwsAAU1YHdT2tTPs6egspLy82G%2F0xe6yeS0fjx6rNeKl8qcErNzoetIODM2omQq0ldMSpE%2Bhy0bUQp4I%2F%2FVO7kTePlU%2F2zC7TfVaHRswPSLn%2BOxwbM1ugol1E6atDCQEb2ZDXE1gObwdeiX%2B%2B9X1q0F5hnGVWQxRqJ&X-Amz-Signature=d35983ffd93d0f9b3331be072a6effc14bf9d1e0eca13ec705a8f2ae46ecfbba&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOE6AMR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBIqOp80ltS8gA3RD4RCQtbAe%2FhCtp%2FkrH617DdRxTJPAiAK3mmdqY%2FFBBBg556Kj4L2cPo1zBU1gnZYltc55Iqh%2BiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMP%2FDXSUaTZ2iDwKuKtwDbBrcBEm8nhMVqq2TIyExhQksS%2BSiH3VdymeVgyEt0gt3EczUuvZ0ODWbxIwxxW0UcPW8vHPKF1NBwDtywh6zyjmK1TPMEz5jw1KxAAMINXGI0wlqbUhpcm5nLiT8m3bJCSEozsKngFDoVdFxjDvN9RU7lq6nkDwsa4tuUS9T5MZo4VxuwngibqVj2O22kUQCVJMu%2BhcpLg%2FPRrY5rN6cGwkYZXF6Gq%2BItT%2BJ988JV6mhFwFIYngonAvyVGjnzjWRZdUd%2FiRc2lAKOCPXYGLIcDJZhnML7uTsPK7K%2B%2BHFsBbVK%2BURb6RwegLOjQgMbJ7I9OKrddUukbqEVNSxx6PXiHXfHBro5wTNn714xOudc6ZoA2w11wIRVrMDcMy%2F94Ho6uFzpplhEhQXm0twIfzVIUOz6AkZeCPxfmn44T2xTag0158mvjOtFT3H9KB97Ca8MDucTU%2BN1gHLgGYxt4BHUWOB%2F9JqZ1whl3HHNKnRq5bK7qc1nhk6huD5uD2SSorUNfoSx%2BGT%2BACULtp7123vtFUYcLO7OnKldJEnXVz0HtVY5E5QUoZOMNFxClcl5OPBeH6Q%2BoqR0UhjoKFFYwKKZWTVIrNYV6vK87D7pmKtYd6OCI5t1CcVecD%2BXmAwjo2AvwY6pgHbImLNxq6sw8r3VB%2F0GPDGbiNYGS9c1zKL8xKTF29vtjfzCgxDLbcHWgGnjlgwsAAU1YHdT2tTPs6egspLy82G%2F0xe6yeS0fjx6rNeKl8qcErNzoetIODM2omQq0ldMSpE%2Bhy0bUQp4I%2F%2FVO7kTePlU%2F2zC7TfVaHRswPSLn%2BOxwbM1ugol1E6atDCQEb2ZDXE1gObwdeiX%2B%2B9X1q0F5hnGVWQxRqJ&X-Amz-Signature=451dc8e36f08465f32cf116ab3d356a8d5d8707ca049a966e9aa9056343fe813&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654G6PO6J%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICr1WebJLmrPLGj73JejkP4sthfYLDetFY3S1DF8ebzFAiBchCC4cGB764htF4RXu7uBXG1kR6yUuCuXYerOdb5BPSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZbgkK14Z76l53z4pKtwD1yommI18HYEUlxOCyeAJNsqIvrt1cMcw4wHo8D2wPd0F8Vs%2FmYkMdCErpjZJAUT1RQ6loNYktHMqsX5KQ4fUpxpi7V59RtC740vErE9qPd20NX0uC55JdU3fUox0NuJCTTRSWlI96JRiymyNxzde70cx7RBFbrGTcYeiMtQFr0Fv5mibd523GDZGASUEbZVoUpUb3iQn6E%2Bq9nEDEEsnZ%2FK6wirbUJnb75GlDnRUSEk3nfd2%2BmSiXd6jeOiY3X5%2BeMaTPjlZNhOjMutzP3NPKfXLnUDiBgxuxSpujUV3BM4jDwml8oBbvmhUfXn6q8ABRKz7dDK9UyWOfnVuMXxxRRNuEcXgdWhOOEh4Ilfzrd78aTKWYkaY0Qgz1112eQmmAfLrhNk%2B%2BSZ3WtsoFqzGFRv%2FkvoAQkCmgjnhpr%2FatyjAGCCaieD3OMQbPdC9%2FMWimHcXK4hfEgzu6C9xnoDBUrTs32UDuz2mjwmzJxECIPdU4qfzZ0czElUSEkM2uTGI86thLijCaLqoCFUG74ySZC%2BOHf75pWW5wJLyUPIQCbYMuOZlI%2B2WS9K7bDOVHAUOPx6pLheiuT%2FtmSXUPF5hUqM%2F%2Flp7sIQgdnyjd7G2d6b7t32Qy4ggYiShCsEwgc3%2FvgY6pgGnEimrzuVjVfPiH6P6233Dv%2BjAGj9nLlxXvIGWrv76nE6y9dHYyGZDG71BGmFgIpA3gDvs7GMy0ou6YFjHHRXHqvlRoF6HbzneKikzmShEjs2BAr06WUzojgIaN%2BLwCZ3s0wGQL1fA1K8YHAg7Xv74ZWeOj7L4Uw8GN9%2B3g%2B0IUPNHCIjG%2FaEGYvwDCEW7Pv0OAokMGatfUn%2FvZvgAQ0hrc3uxdTEA&X-Amz-Signature=368b208d095488a3ab568ea744b1fe95c4bd901c17824024f6f712de9e5c84eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCP5N4XS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGhsJr22LhgNTdBx983DzZBZ1QAxV81SNuu7ivUQntqLAiB%2FvEF1TROHuMi%2BRpeqo%2BfRoP0pQAZIXvwa6TTixQOW2iqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTHBcP6R7TGibzxHZKtwDeY7h8c4zsLmqOdBQlyTjSAtOz3IQNhchbIjXmjOot1YuXUcuVQRvcnXoq3o%2Bx7l6OftF8YiA85ZwYRN7SeGGrlhMMgcBAchMSRMEqzdFLhkk1t1DpWJFRiISpzUBVLLE9y3DxGfKfQmD3B11BJAGDm%2BJcUvg7nL4RWz8RnjE4rHuXXPsGCWR%2FNCVHDG216%2BtuNwZWbZqxi6LphPvrsrgi32PDHNmrxfHgZmzuAvyjxI%2Bo%2BXm%2B5L%2B%2B7mKeYMdtKO5%2F01IVyRQp4e%2F5gLnMqiB%2B2rgI1ovObDD4GiKGbx7KN6%2FjK9LhuT%2FoKsk2nhgufik7EGppql98fnIPhCJ8FQMP6dW1bzHHpTBg1vR%2FW20gdAjPV%2FHerdsw3zMOjQ1CZt6EJI6gRdBY%2B7%2BladhYkh5voZUcIQ2Oq4e2vJ9lqfzAaTKCL4li9t603KBje1gvcmJO3%2BdgKT%2FcMlu2DxEFTGtrOnVsN8fp4IjgisaBYCrXWNs%2B3I%2BqpL6wrO6oWvhlGg0KcnBPdQ%2B9%2BZaoRnnPYEovxZnvYt0gvup6RJ4WYD0Xx0FH08c3J7e8J8r8LUE9I4JwxFvYNEn92LaqELdD05zXmM%2F%2BmDRki7SNL19D%2FJUL6ltnAFb4FQB2xTioLwwhMz%2FvgY6pgE18f7Uwix7hgIlTCH3Vb%2FVvEc%2BK0E0JFIsn0iSr42t8BIQJ3pbQnk4vr8qusDzvhRxUTGCr2lwmbR44exaJTxwil6%2Fi8qeN1tQ4DK%2Fy%2BZK39ZA9Bu%2FKTzFW3NYoZEGHz0LvHahI97o991rpGH2bXZ4xcphQe%2FCJheHLnwAgQTjx1P8LzrMQET84CwDJG71AGNQIhkhHIbQ%2BHRfBJnQkkuVhETaBjum&X-Amz-Signature=cde4502c7a3110829734bfd6e3fa8636c35b784a7be13e7f57fcab3682d69daa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOE6AMR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBIqOp80ltS8gA3RD4RCQtbAe%2FhCtp%2FkrH617DdRxTJPAiAK3mmdqY%2FFBBBg556Kj4L2cPo1zBU1gnZYltc55Iqh%2BiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMP%2FDXSUaTZ2iDwKuKtwDbBrcBEm8nhMVqq2TIyExhQksS%2BSiH3VdymeVgyEt0gt3EczUuvZ0ODWbxIwxxW0UcPW8vHPKF1NBwDtywh6zyjmK1TPMEz5jw1KxAAMINXGI0wlqbUhpcm5nLiT8m3bJCSEozsKngFDoVdFxjDvN9RU7lq6nkDwsa4tuUS9T5MZo4VxuwngibqVj2O22kUQCVJMu%2BhcpLg%2FPRrY5rN6cGwkYZXF6Gq%2BItT%2BJ988JV6mhFwFIYngonAvyVGjnzjWRZdUd%2FiRc2lAKOCPXYGLIcDJZhnML7uTsPK7K%2B%2BHFsBbVK%2BURb6RwegLOjQgMbJ7I9OKrddUukbqEVNSxx6PXiHXfHBro5wTNn714xOudc6ZoA2w11wIRVrMDcMy%2F94Ho6uFzpplhEhQXm0twIfzVIUOz6AkZeCPxfmn44T2xTag0158mvjOtFT3H9KB97Ca8MDucTU%2BN1gHLgGYxt4BHUWOB%2F9JqZ1whl3HHNKnRq5bK7qc1nhk6huD5uD2SSorUNfoSx%2BGT%2BACULtp7123vtFUYcLO7OnKldJEnXVz0HtVY5E5QUoZOMNFxClcl5OPBeH6Q%2BoqR0UhjoKFFYwKKZWTVIrNYV6vK87D7pmKtYd6OCI5t1CcVecD%2BXmAwjo2AvwY6pgHbImLNxq6sw8r3VB%2F0GPDGbiNYGS9c1zKL8xKTF29vtjfzCgxDLbcHWgGnjlgwsAAU1YHdT2tTPs6egspLy82G%2F0xe6yeS0fjx6rNeKl8qcErNzoetIODM2omQq0ldMSpE%2Bhy0bUQp4I%2F%2FVO7kTePlU%2F2zC7TfVaHRswPSLn%2BOxwbM1ugol1E6atDCQEb2ZDXE1gObwdeiX%2B%2B9X1q0F5hnGVWQxRqJ&X-Amz-Signature=26c8fddf6eda1afbd467bdc527dd56fe0bc3cab769569c9dfc9014fb858c366d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
