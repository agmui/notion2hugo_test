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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TNWEC5Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIH1QaxaLnhFH92SFakI%2FJjgcTH2Lx2aTTMBupCykxIIqAiEA%2BVfFn9L9LEfOABxT0Q%2FGvegY4MHTg%2BvcJm%2BkVctddvwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLrY5fWnzMcpqyjt6yrcA06OLwySFEad3VYrX%2FLsXYSOlPbT9zZsqXvebjLVDzdtPHorsdm%2BrlnMl4y9Q0gXfBuzrgt4m77TKJdeXubPBbq1%2F7nnsGEmK%2FixK3P8jr5gv6uaSpl%2Fhf6kZxeQs0PNMsCB2KRqMLNYhmApYl1FKEa4%2FdmbDorDAdikI%2B6mbyT0V4DC1qqUve43p84ZBJ5hnsBQltiY70ujwJnnis5W6jGukityvB%2BVYtAUFzEDPfqIgqFUVD6YAtLWR5AeD8HpNm9iaXCfZ0jMC6PzCecwBGBqDkDIYzJeKwr1SD%2Fq25A4NnK8JFhac352SVqwdUco8nSEMCO2tskdUHfbKXGaXe0OCWeLzuV%2FyUny7MLEQxGRNRWqaALTrDYNr4%2Bwla8%2BjGshSbXBqUox4S9Nqr2Sqpe%2BuP8m0PGwjA2ZYM2w3htIjMOwf1t5Kqhh1HrU%2Bbmqi7p49pT%2B2K7SKs9BZiB%2BFyGk7w0p4REKHHUB%2BTB5xf%2Fv9MDXVcf7ZF7UTgj%2BmwFMOyi2A3B8luqOwZhik2u6g38KuK9To931MQ1h0s9mfE0T8ugyK0MyJsssKYUeGNveB4Ks0NVkdaXVRfnS6KdKGUl%2FbmHpBD%2Bxv9nbQGChJ%2FkOHvRjWWAD4lVNoBJ5MJKI08MGOqUBtAL2YhEJqj07mC6ExMWCsRJwC702i4zOB7MsNBFQK78Ux5FotbZnR8VpxKOpHUE4lvFOCg2P%2B3tb1wIvrlXNRpIc6%2FKMc%2F1rl9X9xTDLFnciCiQ8VGVAynmZctXuT%2F60rnpNzdmQBQ1yKJqRF01prp%2BRU4KAdD34YrScPgrZAJ4hC0NNbpZbgEMDl9aDNJxjFnylQp9cc%2BOkt4cTNqHiJHXIbZko&X-Amz-Signature=318013c8ac96fa4bbab73edaae19d93a1ebdc4ffdab5aa6669e3648f1ef2c21e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TNWEC5Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIH1QaxaLnhFH92SFakI%2FJjgcTH2Lx2aTTMBupCykxIIqAiEA%2BVfFn9L9LEfOABxT0Q%2FGvegY4MHTg%2BvcJm%2BkVctddvwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLrY5fWnzMcpqyjt6yrcA06OLwySFEad3VYrX%2FLsXYSOlPbT9zZsqXvebjLVDzdtPHorsdm%2BrlnMl4y9Q0gXfBuzrgt4m77TKJdeXubPBbq1%2F7nnsGEmK%2FixK3P8jr5gv6uaSpl%2Fhf6kZxeQs0PNMsCB2KRqMLNYhmApYl1FKEa4%2FdmbDorDAdikI%2B6mbyT0V4DC1qqUve43p84ZBJ5hnsBQltiY70ujwJnnis5W6jGukityvB%2BVYtAUFzEDPfqIgqFUVD6YAtLWR5AeD8HpNm9iaXCfZ0jMC6PzCecwBGBqDkDIYzJeKwr1SD%2Fq25A4NnK8JFhac352SVqwdUco8nSEMCO2tskdUHfbKXGaXe0OCWeLzuV%2FyUny7MLEQxGRNRWqaALTrDYNr4%2Bwla8%2BjGshSbXBqUox4S9Nqr2Sqpe%2BuP8m0PGwjA2ZYM2w3htIjMOwf1t5Kqhh1HrU%2Bbmqi7p49pT%2B2K7SKs9BZiB%2BFyGk7w0p4REKHHUB%2BTB5xf%2Fv9MDXVcf7ZF7UTgj%2BmwFMOyi2A3B8luqOwZhik2u6g38KuK9To931MQ1h0s9mfE0T8ugyK0MyJsssKYUeGNveB4Ks0NVkdaXVRfnS6KdKGUl%2FbmHpBD%2Bxv9nbQGChJ%2FkOHvRjWWAD4lVNoBJ5MJKI08MGOqUBtAL2YhEJqj07mC6ExMWCsRJwC702i4zOB7MsNBFQK78Ux5FotbZnR8VpxKOpHUE4lvFOCg2P%2B3tb1wIvrlXNRpIc6%2FKMc%2F1rl9X9xTDLFnciCiQ8VGVAynmZctXuT%2F60rnpNzdmQBQ1yKJqRF01prp%2BRU4KAdD34YrScPgrZAJ4hC0NNbpZbgEMDl9aDNJxjFnylQp9cc%2BOkt4cTNqHiJHXIbZko&X-Amz-Signature=ee319c5240dc37b639356b830525cced44d4c3978680e9be7dfa66baab7318e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TNWEC5Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIH1QaxaLnhFH92SFakI%2FJjgcTH2Lx2aTTMBupCykxIIqAiEA%2BVfFn9L9LEfOABxT0Q%2FGvegY4MHTg%2BvcJm%2BkVctddvwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLrY5fWnzMcpqyjt6yrcA06OLwySFEad3VYrX%2FLsXYSOlPbT9zZsqXvebjLVDzdtPHorsdm%2BrlnMl4y9Q0gXfBuzrgt4m77TKJdeXubPBbq1%2F7nnsGEmK%2FixK3P8jr5gv6uaSpl%2Fhf6kZxeQs0PNMsCB2KRqMLNYhmApYl1FKEa4%2FdmbDorDAdikI%2B6mbyT0V4DC1qqUve43p84ZBJ5hnsBQltiY70ujwJnnis5W6jGukityvB%2BVYtAUFzEDPfqIgqFUVD6YAtLWR5AeD8HpNm9iaXCfZ0jMC6PzCecwBGBqDkDIYzJeKwr1SD%2Fq25A4NnK8JFhac352SVqwdUco8nSEMCO2tskdUHfbKXGaXe0OCWeLzuV%2FyUny7MLEQxGRNRWqaALTrDYNr4%2Bwla8%2BjGshSbXBqUox4S9Nqr2Sqpe%2BuP8m0PGwjA2ZYM2w3htIjMOwf1t5Kqhh1HrU%2Bbmqi7p49pT%2B2K7SKs9BZiB%2BFyGk7w0p4REKHHUB%2BTB5xf%2Fv9MDXVcf7ZF7UTgj%2BmwFMOyi2A3B8luqOwZhik2u6g38KuK9To931MQ1h0s9mfE0T8ugyK0MyJsssKYUeGNveB4Ks0NVkdaXVRfnS6KdKGUl%2FbmHpBD%2Bxv9nbQGChJ%2FkOHvRjWWAD4lVNoBJ5MJKI08MGOqUBtAL2YhEJqj07mC6ExMWCsRJwC702i4zOB7MsNBFQK78Ux5FotbZnR8VpxKOpHUE4lvFOCg2P%2B3tb1wIvrlXNRpIc6%2FKMc%2F1rl9X9xTDLFnciCiQ8VGVAynmZctXuT%2F60rnpNzdmQBQ1yKJqRF01prp%2BRU4KAdD34YrScPgrZAJ4hC0NNbpZbgEMDl9aDNJxjFnylQp9cc%2BOkt4cTNqHiJHXIbZko&X-Amz-Signature=ffd41c90afcf02246278d69a309e823eb52b2c8e1c2811b484bfb1f9a4b20087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNUGUWOX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD3%2Brk%2FBVh%2Bs5NinLLaiWOvlvImUXPIJLci%2BBDa3mWvFQIgbj8fWW24KjCMBotJVYYNrEYZ2yUDL%2FpneH18wj7LCbUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDiYXndqvoPNNk9TryrcAzzWHR%2BtvHts8Fz1HNTGhCEWw4VnmyNxnyhVXLmGB6IT1fQk9UudY9qAtFC2bfzylpXYQ3C2k%2Fv9nHqORPJMsyZPZoDG6ro%2BHUMQGP9PR1tWYnWwSQakev7HIQjNbzkcO3IySI%2BslcSxVlRnOacPczrJusFPlHnnlxMqHICe9j9B9Tp7fY78EsAVA%2BFZ1usAiZthm9gPC2cByppwNR9X61dljmqzxVT79LnFyjdUnuxOX553oKT6n6eepB2%2B1gQ1NekTfoyc%2BWvxIZkhJAib8cgQgNYw6%2F2z%2BPlLCNskYHTorfLWBGpoSQ4Goupfcq3Rd1Ekc9nkYazD6zk6Mjxk80AMpLiqdFW6nOJoRHaiWmLftVCFaZT3vf5TEbQuvbQ9YUM46SzYRwxa9FNHltkUtT166APjmUrv49HqTLpB6aFZ3YPhFSb4fz6GVOWXyeWI9RTiJB%2Fk0vkwX0Zrhf4XENzbjytovT7V29lb5F%2B8C9ukFatDCVuloWQ1uuvL3UwsMy5WAaG5%2Fr5ehtMt3E3dBr5tBUaFBQfV9ZSVQF2Joe2xawknZzTgzlHu9uQqlZTBK9s0escFfg0agX3f63XB9%2Bd%2FGg4O0w9ezKXHCekphfbc6IeCSXQj%2B5fROknfMJCI08MGOqUBT8V7FxrjGUZHdD2wEcSR56qT7%2B7AXQHboMOAOJntsFIkq67KsmUo3ZJLd6OgLBVOdalEuY2gd6RvxyO0X3DYGtPIBiIwpmuACbaGER8va%2FSMub7Nq05WWQ5jwC2EFjr7tfXaeejTBpKWTQ63zGVsaVnzGh45avrIA0wxay0ReJHXXiaXv49aAO73Hr1zcumHU74tbmJoKX39%2Ff7UMd1IwBxtyXaY&X-Amz-Signature=7f71bd2afc5294b7877a0827ab47a95272c2003b8b805bd5c226b45fe708bbe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GRMPKZI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAL5sdmX6wkWLIjbd0gxsBgU3do21IFJt5gkCGetV7xXAiBWaYASforl2QpbdmiZeK59LhTkhcsvsYV0jrmwBk41RCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMrkW74%2Beda%2BNGSygaKtwDuIuqmRDdckmRcuXfRmszb9V%2BivCe9YNgNKa8YwxVVy2BFLydO3jQG1xDayWMRyGqgE1CzI68vBqJZyyZKwAVk9L5gbEgU6PpECutuD%2Bm7k0aZEGBNb%2BkA%2Fbk2x32UczG%2F97EL89A23tz%2B%2BBMmkn9UvxVoiHogTXEQKzc52N%2FFtaGhZ2b1XkmABOkPKx%2BKzaHyCzPUg17PAjae%2B7JAsvK9keM0XMLFQ172f80fSSazQ%2B8V5x95blmQhBuqBD1XBxtkeqvr%2FffII3TQa9pgmp46nL8Ox%2F4O%2BPkGIWZqocUYdoKMqOwui%2FLjaNCAAJPINmcKnt0HIw0bM%2BfxgjRefiF5oKXM6U99zApZBSAfAiJ6eG%2FyAMCe6Q50LBW22TUK40MBhUNerPWiJ9c4n1gLtqT72RqmkIuuEo1sIWHBZ6ijpsp%2FXT7UGB37Q4ZvUx3ylcPhAPSaKxLk5g7Dp23J15dZSwgboK7ls4WBcoQviJmzE8jNqUw6ui8YvLipN16i6zhay8p32%2Be72D%2FyltDVP5FqtQVeUK2Uv03jfK7tiFmVq7Aqfdo9vWpZuOMcrtDXBUkYif8LtvFAkXogwMhwQdFWS3EsKpdiHBNCAb7i28xraeYFiFMvN%2FeQ9%2FO7nowx4jTwwY6pgHUsEUfm15OUXdSaFGRnVf63gnXqTg75sJjVR1Khw3pvtOuck3qtKMUhLcmGg9wvSRWTA%2Bnwmj4USsn0rlVZD%2BzlSxwEa1czBcGICCq1im6QB%2FtRRZzlmfs3W8GSlrXiw%2BpFp%2Bsw9szyjeNW7onT2dXVciNM3ZK1iOWG2QXHhrKyHyyUi6xOtRDIC2DhbiHwIZbvIwCh7BECJIS0F2WhQaJJPPzTTbc&X-Amz-Signature=0298d7d1938a34b28f66f2e8b9bb3e79652c587e1a5b8847ae6b43caf8abcf7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TNWEC5Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIH1QaxaLnhFH92SFakI%2FJjgcTH2Lx2aTTMBupCykxIIqAiEA%2BVfFn9L9LEfOABxT0Q%2FGvegY4MHTg%2BvcJm%2BkVctddvwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLrY5fWnzMcpqyjt6yrcA06OLwySFEad3VYrX%2FLsXYSOlPbT9zZsqXvebjLVDzdtPHorsdm%2BrlnMl4y9Q0gXfBuzrgt4m77TKJdeXubPBbq1%2F7nnsGEmK%2FixK3P8jr5gv6uaSpl%2Fhf6kZxeQs0PNMsCB2KRqMLNYhmApYl1FKEa4%2FdmbDorDAdikI%2B6mbyT0V4DC1qqUve43p84ZBJ5hnsBQltiY70ujwJnnis5W6jGukityvB%2BVYtAUFzEDPfqIgqFUVD6YAtLWR5AeD8HpNm9iaXCfZ0jMC6PzCecwBGBqDkDIYzJeKwr1SD%2Fq25A4NnK8JFhac352SVqwdUco8nSEMCO2tskdUHfbKXGaXe0OCWeLzuV%2FyUny7MLEQxGRNRWqaALTrDYNr4%2Bwla8%2BjGshSbXBqUox4S9Nqr2Sqpe%2BuP8m0PGwjA2ZYM2w3htIjMOwf1t5Kqhh1HrU%2Bbmqi7p49pT%2B2K7SKs9BZiB%2BFyGk7w0p4REKHHUB%2BTB5xf%2Fv9MDXVcf7ZF7UTgj%2BmwFMOyi2A3B8luqOwZhik2u6g38KuK9To931MQ1h0s9mfE0T8ugyK0MyJsssKYUeGNveB4Ks0NVkdaXVRfnS6KdKGUl%2FbmHpBD%2Bxv9nbQGChJ%2FkOHvRjWWAD4lVNoBJ5MJKI08MGOqUBtAL2YhEJqj07mC6ExMWCsRJwC702i4zOB7MsNBFQK78Ux5FotbZnR8VpxKOpHUE4lvFOCg2P%2B3tb1wIvrlXNRpIc6%2FKMc%2F1rl9X9xTDLFnciCiQ8VGVAynmZctXuT%2F60rnpNzdmQBQ1yKJqRF01prp%2BRU4KAdD34YrScPgrZAJ4hC0NNbpZbgEMDl9aDNJxjFnylQp9cc%2BOkt4cTNqHiJHXIbZko&X-Amz-Signature=e2819d8fc6b9f9ee152737d05c5128b4488331ccaffaf314127fb3a027c89f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
