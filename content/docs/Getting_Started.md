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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXEBGX3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4lGv4wwuxfiPOfvsfk1ZzGw7h0YRrKBFQACt5SeJH0AiEAkNH0B%2FqiDXErug%2BuvllnPdlcLXTApg77UDTRmc9dsOUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA881XinPdE4G%2FTIISrcAywuRuIX7XLNRo4oAhg6QC6e5ntxeLvut9DHd51TYoW3lliZKgHiv0CbiIHiXotwbyDNcfZqG9xN4YDNzowxREvdlrTD4ekaIj9KPVb4gTwFiLPlCHKJzFtpDn1pIDe5SbSvx7w4TeT4DW2fwbGzIwsnN%2FoNSlB1XBNzYupgMJycQu5xkYXHfzhLjQmtK9qHC8eBmVZohnaELJtGzaalXtrNdlwaHOyNEm0xSpTpHm5uXibPRJGswCM0brT0KUX%2BEf4Z0CBWlA75Vvk%2FNsFwVMci2vVhIpi5HKKjChQjREptF4HrykxF%2BVczqsyMUQUWMJPVOtsc35iNFpN3x%2Bz8bTuc1C3mvC45RZKONhVgEdHWVvGhTSDg7Q8icxew9lYNpJK%2B2jT4SBmjWA%2Fl%2FFbmhc3t73DJH3CtaIrScTkbgOGnv2JVOghcO34gRfPjioOeejS406ozHI1oz%2FzPEzwPF3ueIyZp7liKFGRd5QkKdz2SG2JC%2F7L7Q6uQIoi5Fqh6ByPQH4gB4QQPthdD8UGPkwPp3%2FFYK1dJ2eV%2FZY06LNmJ2GUp%2FoSvBonQbSN%2BJOfV1pO6ezDijhXW2A92SfIozZku6wkFOxDNfEiOZFMwqcphpprXCAek7Od5a0ixMMam97wGOqUBPEVZVBYhQlitoMwRyWNoSYIdnxwR7WwA4ayLXZ3b1Iiy3mbKLFydyM%2FJzNV7bNe3iWW9hzvW8506J0U6VkWqxtK9dTR8PP%2BwjQ4XZAlJsmCeD3V3r6%2BxFyRrDBttRUq6KLspO0mBASp0GbxO3i4KHRDrIWcsI7bYWpaYHOVasBEAHXMPl1Yqb3ivXvQ%2FXjt9ltWexKnwp1f4mvHHjkIRB97N%2F%2FBT&X-Amz-Signature=26cd7046f78a85a211f96910646a287639ef91b87a3d0d6d9a9889c5bb90b995&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXEBGX3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4lGv4wwuxfiPOfvsfk1ZzGw7h0YRrKBFQACt5SeJH0AiEAkNH0B%2FqiDXErug%2BuvllnPdlcLXTApg77UDTRmc9dsOUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA881XinPdE4G%2FTIISrcAywuRuIX7XLNRo4oAhg6QC6e5ntxeLvut9DHd51TYoW3lliZKgHiv0CbiIHiXotwbyDNcfZqG9xN4YDNzowxREvdlrTD4ekaIj9KPVb4gTwFiLPlCHKJzFtpDn1pIDe5SbSvx7w4TeT4DW2fwbGzIwsnN%2FoNSlB1XBNzYupgMJycQu5xkYXHfzhLjQmtK9qHC8eBmVZohnaELJtGzaalXtrNdlwaHOyNEm0xSpTpHm5uXibPRJGswCM0brT0KUX%2BEf4Z0CBWlA75Vvk%2FNsFwVMci2vVhIpi5HKKjChQjREptF4HrykxF%2BVczqsyMUQUWMJPVOtsc35iNFpN3x%2Bz8bTuc1C3mvC45RZKONhVgEdHWVvGhTSDg7Q8icxew9lYNpJK%2B2jT4SBmjWA%2Fl%2FFbmhc3t73DJH3CtaIrScTkbgOGnv2JVOghcO34gRfPjioOeejS406ozHI1oz%2FzPEzwPF3ueIyZp7liKFGRd5QkKdz2SG2JC%2F7L7Q6uQIoi5Fqh6ByPQH4gB4QQPthdD8UGPkwPp3%2FFYK1dJ2eV%2FZY06LNmJ2GUp%2FoSvBonQbSN%2BJOfV1pO6ezDijhXW2A92SfIozZku6wkFOxDNfEiOZFMwqcphpprXCAek7Od5a0ixMMam97wGOqUBPEVZVBYhQlitoMwRyWNoSYIdnxwR7WwA4ayLXZ3b1Iiy3mbKLFydyM%2FJzNV7bNe3iWW9hzvW8506J0U6VkWqxtK9dTR8PP%2BwjQ4XZAlJsmCeD3V3r6%2BxFyRrDBttRUq6KLspO0mBASp0GbxO3i4KHRDrIWcsI7bYWpaYHOVasBEAHXMPl1Yqb3ivXvQ%2FXjt9ltWexKnwp1f4mvHHjkIRB97N%2F%2FBT&X-Amz-Signature=dd1f6fc723c468d1ccf100494b214bab740fc2203030a72f3c943d22d5ef0109&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AH435HU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRjkTu6cGFKvDqyOdfegawJ2WheFEkqkm96%2Fs4tY7p0AiEAzXw%2BLSxO35nVjkjKUdVaTGZo1EM0Slh3stswi6ItJuwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHo6wxUTIEy48w%2BuSyrcAyth0LNzNZOpc64KVYUMoqYjnVZ6jbCsHVHVYBbFCuBMhpvwZEvTbTD7rkZzsQtgC%2BzjcM6hBqv78W%2BEHIcP4k1xwMdB8UzRi633TRlIjw0J5NWe8nQ5RLXbW9teYD5dkeRFsutkQ2vxnqIh1TCOrbZSyKYsxH3f8KIGj2cIJiVQd1VUKSUqNgyH5wYVO1Ebe8XUNMy0D2sQpNDC3%2BpzMEmM3dmdOp%2B%2BykHcnABZhHFel2QoMP0TpI1IxQeJac2KmgUuALB6hKGECtz8v4YVVKCT%2BDMq0q8zjsSBgwA0dcOfRawyRxJDULh2%2Bnt5sxLjdHdp9uLh19C2xvd21K8l%2Bqw3bvq33PShFEr9pNxWbpa910Up%2F8mejTC5cW8dvIvWu7j5J1BwaXSoYulPssvZAdeIm5oPBnkwuF15D0EgrD9xk3Ysph2F4Nn4L2Ir4O1WVUlYw0mX9efjmC16mAXKxA2QD9soeNd7eOP69JKZPPzIxOnjaDp5dVxl1hmitzCUi1jTaFjVcg00UmcmB1BgQi1dBtL%2FSxKwe27RIAUguCS9huQYLkbRxpXIcYeAa5EzkBm9BqJGng7pXuniD3iCSfemNcWJq6O%2Big3Ca3dYy%2Biue%2Ffa%2FgogWGXeDvqOMMml97wGOqUBr8woODOvJAHPvhs1MqLSw2V2Q7%2FmO33Ij0hNPlPUV5YxnR335wmAJV4wxARxfrNKXon1xWlMKqggP%2BjH65h7n3%2FuMOZeUJr115d8nHbt7q89ehigZ6etqKAyn6TAM12t0zZNWvMeAwszMVrQrm0DauJFfadZdOQC%2FHEY2159P2seTBXiN9PJTSaz%2Fn08RUPHR5qLvpN0j0nNLLSXcrYDbqzjYZSi&X-Amz-Signature=3989a34dfdd06c82b04f7dd4baf801984b58dcf653ee08531f53ee34beac95e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHX6AWSK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZWqEEDWhgy31IkMrulPsCG3HtCTovQjujfRTIVP%2BlVwIgYRn%2BycJiHcjzFYq5bztGIJK79t%2BDSaPYcK0NVSz5A2gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLLiGCUty9T8LooVCrcA2ofzZAMWt%2FTPK2a6qh4CretNbOpofMm2WJMGC8nflJz7WnX8RzL1GPI%2BfhpWhejbr%2Bjhbm2FE9v%2F0ZjBzKERPTYbbR5QkIf2HV7UFcydrzL2PEhN8RB9ryMu4G9N1lLdi9imug1WUU7BI5YJDJJB0aCZwCwz8wMX7MnPFjvzaQ5G3DK9c1xQ4MIBtNVVFWFmpeN5f9n7t91qDECknFHphIR%2FVxWS9egD5yygwRyt4dT5lAyH%2FH5NRm9BcJR1wFxOxWhKu3Cv1TJVF8Sx%2FxLo3kZTszbjsXSPLEWztQix4egsi4woIZLb0wAYj8igM5EQEH1WHEu9JbhY%2F%2FrgzM61mVkg%2B97i%2BuS%2FuAo4yGyqma%2Fg1c%2FbkJ5HyAVSk89n5Eln%2BlKs1hhynGEjS7WsY8U0koX3hkwN%2BR17H7Sk5gPATjJ2UIr5DUgfaX8pT2RZCjKqADIK9OAcawqI1Ykhkm5HKpX8YWG31dt1mbuFwAydsWfVfvqhTWqULfJVmXI8DHKHIowHSqyQThUpO0RVTsD7r%2BeuboZArAgCh3PkETuMSw175YAvQEmJqadN2OHEzqrbGkltpCyICqbRKptuYnAVb7PvXo%2Bbqfh%2FcVPnJtruJCMLqW%2BVc0ALT9g6GG5ML2l97wGOqUBDBVsX1I8WUczM8P7N%2Fi1p1nE%2BZyLhiCqKvhaY3xg%2F9NpaGJCDkZBZ5hx47lOWK892DluSjK3XwFTd%2BhzEHgjDlm%2BRQqLOV2cAni7cisAtt6NXQUbmXbnnGg06L7DnvrZksflGpl69gsds1sS%2FQS4g65AxYE6gyuqhCSDd3R6Sg%2BW8o5gmX7Es0MRUZbdZ9828C83nT2%2FqFtBA1pv0y70lJUsjEHh&X-Amz-Signature=b6895b6db6471a2b3eea4d55871b109f17910eb4a7f7deb0673005b29f005a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXEBGX3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4lGv4wwuxfiPOfvsfk1ZzGw7h0YRrKBFQACt5SeJH0AiEAkNH0B%2FqiDXErug%2BuvllnPdlcLXTApg77UDTRmc9dsOUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA881XinPdE4G%2FTIISrcAywuRuIX7XLNRo4oAhg6QC6e5ntxeLvut9DHd51TYoW3lliZKgHiv0CbiIHiXotwbyDNcfZqG9xN4YDNzowxREvdlrTD4ekaIj9KPVb4gTwFiLPlCHKJzFtpDn1pIDe5SbSvx7w4TeT4DW2fwbGzIwsnN%2FoNSlB1XBNzYupgMJycQu5xkYXHfzhLjQmtK9qHC8eBmVZohnaELJtGzaalXtrNdlwaHOyNEm0xSpTpHm5uXibPRJGswCM0brT0KUX%2BEf4Z0CBWlA75Vvk%2FNsFwVMci2vVhIpi5HKKjChQjREptF4HrykxF%2BVczqsyMUQUWMJPVOtsc35iNFpN3x%2Bz8bTuc1C3mvC45RZKONhVgEdHWVvGhTSDg7Q8icxew9lYNpJK%2B2jT4SBmjWA%2Fl%2FFbmhc3t73DJH3CtaIrScTkbgOGnv2JVOghcO34gRfPjioOeejS406ozHI1oz%2FzPEzwPF3ueIyZp7liKFGRd5QkKdz2SG2JC%2F7L7Q6uQIoi5Fqh6ByPQH4gB4QQPthdD8UGPkwPp3%2FFYK1dJ2eV%2FZY06LNmJ2GUp%2FoSvBonQbSN%2BJOfV1pO6ezDijhXW2A92SfIozZku6wkFOxDNfEiOZFMwqcphpprXCAek7Od5a0ixMMam97wGOqUBPEVZVBYhQlitoMwRyWNoSYIdnxwR7WwA4ayLXZ3b1Iiy3mbKLFydyM%2FJzNV7bNe3iWW9hzvW8506J0U6VkWqxtK9dTR8PP%2BwjQ4XZAlJsmCeD3V3r6%2BxFyRrDBttRUq6KLspO0mBASp0GbxO3i4KHRDrIWcsI7bYWpaYHOVasBEAHXMPl1Yqb3ivXvQ%2FXjt9ltWexKnwp1f4mvHHjkIRB97N%2F%2FBT&X-Amz-Signature=5b44a3c90673df46f272bc85002834ccf276f8901849d071379a37dba8d1a8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
