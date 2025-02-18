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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJ5JB4W%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHJ2egljrJxCX5b1ab89MhIFcFyvXl7eJIBYXYWeGmwvAiEAsU8%2FDOl%2F%2FU31g2fMsK0LWCsQYdpEhfYwE3QayF2y84kqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEu93rtjk4rz%2BcuC%2BircA5LaIc9tN8Nxdj5KAVJPTuLh7Drd5wulhhrGJ%2B4fQKrdpSyAcrEfs1Hm4YZQWlVfNpGBtOINkjj9Mi5iJIdHzBTZXYAbj6zhZEDUhPuNmrgk2WfHaaMcQy2feRxo5FYRCJdTD7XnWCB%2BtczgFupnglIv1Mn14sgZCuDEdO12Ji2OYbbol9HvLJZnW3MZ8OIVPKjTxh8I0YNPGtNg7Bs3cpk%2BjqR5SsPLHpewg393RBUvVxEdcdrzTYqSktMVHD8KkrLxOYqp2HBGwYrHDhtN13Z%2B0IGSAGMYMXzz3vufj%2F%2FMpgreBs7yEa2Z9WkohW7oUhyj26VWilhkEkAJISGPCf4pVY0OD0rbZx%2FjEMAboCY2yd365uxj8EPWrgf9UpE1c2%2BEeFo6qmtY%2FlzFns1w6e%2FGMO3qjYpiJ3vF3NGGhmUbsSHGa%2B9NFxN5FTKYWT%2F2Y2pqRzo5YTfuDMCCJiJsbPleP6weprIza5EQCNmW88D%2FNDS9YOO46DDbDditK9TSAB3aevgdgFm6phzeixrcZNhJ2qEBLW%2F6TlqiXnJORWNc4v26jsAt%2BrGBQ2HTyA%2Bx5flxGnG%2Ft7HvRcGJKM6bfWBjrRyQGdtaBaX4RVWzY2%2BDZlPGJ5YTkrUsfoUQML3wz70GOqUBubs16RiINYwI4Uv%2FFtzjPCPh3mWJDOcJdxrLInsivvYQPTJI2RlTM7b%2FEHuzP0ATpgO5Mp4byq4kz54dGDTKwxTZhNaelOCb87R6t9mqn77UyJ4NxxGNFTluuvnvkDclO0Rhn%2FYw2JcNbryPUFgVy%2BkL4ybH2as3HS%2BOKbSypIb1a6pbz0GXd0ZjwJC74Q2WqGqIdbaKS6a3CgZ4ahvZxHUjq6%2B3&X-Amz-Signature=03e82507078fa121f29bddbbdda5fbb99e7c9937b88d2edff169805d3c3b7091&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJ5JB4W%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHJ2egljrJxCX5b1ab89MhIFcFyvXl7eJIBYXYWeGmwvAiEAsU8%2FDOl%2F%2FU31g2fMsK0LWCsQYdpEhfYwE3QayF2y84kqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEu93rtjk4rz%2BcuC%2BircA5LaIc9tN8Nxdj5KAVJPTuLh7Drd5wulhhrGJ%2B4fQKrdpSyAcrEfs1Hm4YZQWlVfNpGBtOINkjj9Mi5iJIdHzBTZXYAbj6zhZEDUhPuNmrgk2WfHaaMcQy2feRxo5FYRCJdTD7XnWCB%2BtczgFupnglIv1Mn14sgZCuDEdO12Ji2OYbbol9HvLJZnW3MZ8OIVPKjTxh8I0YNPGtNg7Bs3cpk%2BjqR5SsPLHpewg393RBUvVxEdcdrzTYqSktMVHD8KkrLxOYqp2HBGwYrHDhtN13Z%2B0IGSAGMYMXzz3vufj%2F%2FMpgreBs7yEa2Z9WkohW7oUhyj26VWilhkEkAJISGPCf4pVY0OD0rbZx%2FjEMAboCY2yd365uxj8EPWrgf9UpE1c2%2BEeFo6qmtY%2FlzFns1w6e%2FGMO3qjYpiJ3vF3NGGhmUbsSHGa%2B9NFxN5FTKYWT%2F2Y2pqRzo5YTfuDMCCJiJsbPleP6weprIza5EQCNmW88D%2FNDS9YOO46DDbDditK9TSAB3aevgdgFm6phzeixrcZNhJ2qEBLW%2F6TlqiXnJORWNc4v26jsAt%2BrGBQ2HTyA%2Bx5flxGnG%2Ft7HvRcGJKM6bfWBjrRyQGdtaBaX4RVWzY2%2BDZlPGJ5YTkrUsfoUQML3wz70GOqUBubs16RiINYwI4Uv%2FFtzjPCPh3mWJDOcJdxrLInsivvYQPTJI2RlTM7b%2FEHuzP0ATpgO5Mp4byq4kz54dGDTKwxTZhNaelOCb87R6t9mqn77UyJ4NxxGNFTluuvnvkDclO0Rhn%2FYw2JcNbryPUFgVy%2BkL4ybH2as3HS%2BOKbSypIb1a6pbz0GXd0ZjwJC74Q2WqGqIdbaKS6a3CgZ4ahvZxHUjq6%2B3&X-Amz-Signature=17ccc7356fab72adc506652c1865b064bee319e98b5bfb6f4e738ee23ef6d257&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A5SBLFJ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCr5R1A8lQsJk82N3qZpqyuLz3kCDwBxIXTc7pV0xrHzAIgd11PdTJWcL6IeDgCHH%2FzO3W7CVx0rToSaNbZLvvWk%2BAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLO8NZTCE43KJhOooyrcAyXETUsW%2B6OiYG9eHMvpYqq4Yw2bIgIxyGZfwT%2FRI61iUvyo8%2B%2BCUKroqR75Yu8fWnzyxIICsxyU5NvsF4DoIAweGC1LcCRl7CmvO8b7%2F5pHoRzaSEKob7xMBzsTRzg6svmdnxwj3kgjhRQkvB8abbbUHmshF1vQfxA2%2FPNM9ad%2BtFnisG0Opu7mOaaZusYmxYozRO04fE2ALOhkY1ebIZruKP%2BmwiKKOUuWwR5Y7TE6mCbScWdY5xg%2B9lHCTMn%2BfIB9vZS3W54w46Yr4VqFwzXQGY%2BcftWklp%2FiSPYp3dIZ7CdN6OrxzzA3zMtSfQwloknMmsPtXpXmO2%2BQBRji1nKS%2BKNkYhXDA1JmqBF4ECFeyKtA00RmJpBO%2BfVYU7zKtKsC3WDiZplus0%2FA8Hk23EakkeR7k85hTs3pcr8PHAUF6BnsC965ugE70wlFuo3441IzrjFGDxh%2FtWiZoQiaC3OOcyGHhDuqCxqUvY2GzX6v41kSRLde0F5D9nwsheP0jvccONG56pNgRCJx%2FIGr9cd6OdlOxD%2Fe%2FXsGFptmIAPuzLOnOuYqIoQiJzliyhxNz%2FtSfVhd8i4LdmZslHK0byhg26WIwoANP%2BJofPsX3IogP3i1Sl30fkoNywN9MNXwz70GOqUBiUbIrhep2GFZgyIIA59fXFTYoJcRprlA9VAcIryPpqXa0J93dVAavbgglA%2Bfp55Tq1t1OmNry9A0apWDxxAiiVvh1OVkWTZrLFNj0ZxGNwjHBsgDRqrRl5IVojzvEMtoPBEahSt9%2BMXD2TSJH%2B6Axo%2BlYLE%2FHQBTF2PutbPL7z3Li%2F7TBKtgjqC20jdDkpGd%2FoDpBgHJ5k%2FV4hHbgNEo3%2FiTEw82&X-Amz-Signature=bb3c3976b0d237417c1e9f64d15d885085ccb46fb67c84179354b059b253e9ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKGJ5R7A%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGHEP6I99F5rw%2FtqCXgpnkgaT6cndDezwg%2BD9op%2BfUYoAiAZppN9Ai3lXjz10o1qZbj32rJmSBi%2F8L%2FatpTNSy9NGiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9KAdNau2GbqqI3mLKtwDuUer65uOoCODvU5ETZP3St8E0k%2B7t2STe8qBFE%2BQ63cW%2BEYiU%2FlnJEeyQ4%2F8Js95wc9%2Ft%2FbLt7FoLHB6aHKw4EHfabRHU%2FqMV1H6E6QVtT19q22zZCFGKSxhZMmP9yjDYVAOVm0qqKrzP%2B8SP1PK188I%2BTYmUML38It0h94gwzRrYOhcMIH%2Bwhw7gA5LbbBxaaLvB9OikkPoIGjhcv4LNIjIuGfFq0zKrlD7cHNm3FgNkPN%2B9Kntevx%2BEPcFj47LyekGObPzNh%2BMFjZtAslPNfpEh7tyftyKiXBiZ1yaUMmeRqd%2BVTNTISTwbUL7eLcsr%2FX7OokjSeKf%2FyzM6Kp14mMd4fCrdbUq%2FdxWhVqffxuBfIqmKfiCrYES1cVkvurKVDF%2BwPYMU2jth6OsT%2FBLiXlcNDoT96KyCx2B%2FeUeSDRHbFSm6ifYoH5PNkaRXf%2Fm1BSPSt05FoshwbHAhA1ldO%2FKQrJmhptJkItGbMqGNPAidblQvFMb3xBn8iGEohppdQRghvGL%2Fg%2Fry5bzgYBM%2FWLWloc3aC11E%2Bd9WZysmV3CsejA9Ks%2BmrLAYKbr7PnxShBBEJJqUgG%2B4WkLsk%2FT6aNjl6qx78Z3LOTCDut5N0r8hj2pI4J85T2rnPEw4vDPvQY6pgE%2FJGNCgKi9MYsZ2zf03Yvdq3mV5Ew8upU53f%2BLzCKKSDZc1p%2Fdk85pS0sgo9EH8EuV7BvrSquQdklvieJ9e9hgpcTozzOPiapO6aCT3OUPXimgIyV9xnsPFkpQ9R11yv471U4cXmHmocLWfypWFS4yLAFvDjhVvhBt6RTj69jNSDuTj5IVqY8oLBm1NHrh3ISj95osLmbZbHUpVny%2Fc%2Fm%2B2sJxmvjT&X-Amz-Signature=7d72a6a3335e9a89d260d8a1d9b40f7a25f0f7c15aba18afd7065a6acbfaa736&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJ5JB4W%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHJ2egljrJxCX5b1ab89MhIFcFyvXl7eJIBYXYWeGmwvAiEAsU8%2FDOl%2F%2FU31g2fMsK0LWCsQYdpEhfYwE3QayF2y84kqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEu93rtjk4rz%2BcuC%2BircA5LaIc9tN8Nxdj5KAVJPTuLh7Drd5wulhhrGJ%2B4fQKrdpSyAcrEfs1Hm4YZQWlVfNpGBtOINkjj9Mi5iJIdHzBTZXYAbj6zhZEDUhPuNmrgk2WfHaaMcQy2feRxo5FYRCJdTD7XnWCB%2BtczgFupnglIv1Mn14sgZCuDEdO12Ji2OYbbol9HvLJZnW3MZ8OIVPKjTxh8I0YNPGtNg7Bs3cpk%2BjqR5SsPLHpewg393RBUvVxEdcdrzTYqSktMVHD8KkrLxOYqp2HBGwYrHDhtN13Z%2B0IGSAGMYMXzz3vufj%2F%2FMpgreBs7yEa2Z9WkohW7oUhyj26VWilhkEkAJISGPCf4pVY0OD0rbZx%2FjEMAboCY2yd365uxj8EPWrgf9UpE1c2%2BEeFo6qmtY%2FlzFns1w6e%2FGMO3qjYpiJ3vF3NGGhmUbsSHGa%2B9NFxN5FTKYWT%2F2Y2pqRzo5YTfuDMCCJiJsbPleP6weprIza5EQCNmW88D%2FNDS9YOO46DDbDditK9TSAB3aevgdgFm6phzeixrcZNhJ2qEBLW%2F6TlqiXnJORWNc4v26jsAt%2BrGBQ2HTyA%2Bx5flxGnG%2Ft7HvRcGJKM6bfWBjrRyQGdtaBaX4RVWzY2%2BDZlPGJ5YTkrUsfoUQML3wz70GOqUBubs16RiINYwI4Uv%2FFtzjPCPh3mWJDOcJdxrLInsivvYQPTJI2RlTM7b%2FEHuzP0ATpgO5Mp4byq4kz54dGDTKwxTZhNaelOCb87R6t9mqn77UyJ4NxxGNFTluuvnvkDclO0Rhn%2FYw2JcNbryPUFgVy%2BkL4ybH2as3HS%2BOKbSypIb1a6pbz0GXd0ZjwJC74Q2WqGqIdbaKS6a3CgZ4ahvZxHUjq6%2B3&X-Amz-Signature=255adc3e52fe0a03997a7e8ce143b36a57c2472550aeb453c234ecb842a3f773&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
