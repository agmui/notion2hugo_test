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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRM44YPX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbcxuexUsQR2CzZEB3eCng%2ByhaV7Zql5%2Fn6MwhW5yv%2FAiB30g%2B8VQRr%2FrGJVmK%2BpIIwAAJdp5egotWEVBDYbOhIoyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMbqqsRHsN%2BB17iZ8oKtwDcCpiZguxm%2FXwKXX2oQ5cwdYJSKyhDqCRIb7NXdRodJA9iIZMIydpc31tb2xvlMXe0qBwY%2BEPpa6gDIDXbXvhVkPfOuFFmAKdIPyB9MoTs6nCEsIObqz1neETFLT6RwrI8pcCJtET4hbERjSh1i04HT%2BWkfNB%2FtgR%2Bt65PFlvrf8KaN%2FyWKnKt4%2F0zh89Z5adbX8NPy1IpgtBRei0GQNiHkdyYlDRl3EMdMz8Ds3uVI%2FfQbr6AfLOJesC4RkilyAgwdXpKGykC5AVH8mlV63CCFyASFqAV08zHAyP8pWhkMPj2SHwiwkVSzRbcsaOyPiXvrTxDIvCn1%2Flf6JJ7FbOtXaNZaFxaSvHMz6RQwmB56vVXhfg0st3PjZXQSz0srxg1qeNqeupjGForbjG2eEknIc2DapSofcsPsNTeM7rjjo%2Bv%2FL9iRmLhCTQqKe%2BH9N506fF3ayd7Zx3bnlMxrrjjnwzhcG8gxxT%2F11cCESTsSBZaKn%2Bvx7yqqEfS924Vj46wf5WzqdDwVWxg5kBx%2FeoDqrBw4acfezS7KldI8pslnZxLKYXtuJ1tW%2BeP2Kd7NIXkcFyS5%2FsbseJihIBAgzzhiaKD77g%2B0QAkwnV4l7MarSpcBsHESZVw6MS2y4wp6XFvwY6pgGlG1mSScrWZixrJ7yAppsODwyHCFR%2BMXRcD8Tu9YxXxVLyKYwyekUDBLUjNSP5P6g2zetksm7FFCXLcRiwvMshmIHsQX%2B%2FJB8K5l60G0YNCbw2RybD77L3180TnOSruKkkE4rKDm1WchdXrQfvwlVwqoZ%2Bbo4CaLmQLVNNTwFp9iqx1y3U2wBsStc4azbAw%2BirxXfesS5KDm2n2BkNzmkndzWW45Ma&X-Amz-Signature=6f16ad5292310c7a917837f6238cd985f863b6837e8e3bd7ef3798ded7d3962f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRM44YPX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbcxuexUsQR2CzZEB3eCng%2ByhaV7Zql5%2Fn6MwhW5yv%2FAiB30g%2B8VQRr%2FrGJVmK%2BpIIwAAJdp5egotWEVBDYbOhIoyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMbqqsRHsN%2BB17iZ8oKtwDcCpiZguxm%2FXwKXX2oQ5cwdYJSKyhDqCRIb7NXdRodJA9iIZMIydpc31tb2xvlMXe0qBwY%2BEPpa6gDIDXbXvhVkPfOuFFmAKdIPyB9MoTs6nCEsIObqz1neETFLT6RwrI8pcCJtET4hbERjSh1i04HT%2BWkfNB%2FtgR%2Bt65PFlvrf8KaN%2FyWKnKt4%2F0zh89Z5adbX8NPy1IpgtBRei0GQNiHkdyYlDRl3EMdMz8Ds3uVI%2FfQbr6AfLOJesC4RkilyAgwdXpKGykC5AVH8mlV63CCFyASFqAV08zHAyP8pWhkMPj2SHwiwkVSzRbcsaOyPiXvrTxDIvCn1%2Flf6JJ7FbOtXaNZaFxaSvHMz6RQwmB56vVXhfg0st3PjZXQSz0srxg1qeNqeupjGForbjG2eEknIc2DapSofcsPsNTeM7rjjo%2Bv%2FL9iRmLhCTQqKe%2BH9N506fF3ayd7Zx3bnlMxrrjjnwzhcG8gxxT%2F11cCESTsSBZaKn%2Bvx7yqqEfS924Vj46wf5WzqdDwVWxg5kBx%2FeoDqrBw4acfezS7KldI8pslnZxLKYXtuJ1tW%2BeP2Kd7NIXkcFyS5%2FsbseJihIBAgzzhiaKD77g%2B0QAkwnV4l7MarSpcBsHESZVw6MS2y4wp6XFvwY6pgGlG1mSScrWZixrJ7yAppsODwyHCFR%2BMXRcD8Tu9YxXxVLyKYwyekUDBLUjNSP5P6g2zetksm7FFCXLcRiwvMshmIHsQX%2B%2FJB8K5l60G0YNCbw2RybD77L3180TnOSruKkkE4rKDm1WchdXrQfvwlVwqoZ%2Bbo4CaLmQLVNNTwFp9iqx1y3U2wBsStc4azbAw%2BirxXfesS5KDm2n2BkNzmkndzWW45Ma&X-Amz-Signature=033dfeff75039f40fe59922553b812f8ae8cee0aa03db05b08dc81d3e9d87cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDDI6P5K%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5bSju2xtcuH6W2xNIXxYDy9YhlA9LxnoSke%2B%2FU67JKAiEA%2FfCayB1F8v8xARd13l2zMMS9tXzTQJZ%2FxPnKFj0nk%2Fcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGAqzo49bvqjLIj7WCrcAxnRqQm%2FUPAJ3D1lt8l05CUjLdtV3eaLXRFBYZRhL8i3VUtL5SH5J62cqoSaUWKOZvfp3QxorATBjjr2iHh27BAu1qSE5nWR0zUytTnPBNtMQRmwq9%2FXmMCb5%2FbDfDbTH73SgcZ0KUHtm8wN5Mhd69aE8xhF9Fx%2F4Um4UnpmlStQsuxAAs%2FtERNvApOJiwm5Hd7NqVagrPioZunh1Hb%2FHK4R0zi3jZgCYCsA2KIQUhf%2BTPLKc1Yx0CF4%2Bpdl9Qe6gHxO39Nht4ikymIQas98PDPhEorXPCBBF26T7Amn4HTygsNkF1V9LRWiOdGo4FWYU%2BQyplWeE5%2BDB6fD7k6pcqmT7czLEdLSB7WjEpCDlpdmZW4O8ZxjyKVimRzw6bi6pt39MlV68NZtFXf7ObVrwLZ%2B2M3TUvrB1phz4r2sdOMbNVrnDcrK8Wi5Lj%2FgNBdDtVw0odf%2FI2il0mKO0XFAUsP7kSSiDKL7IvovgAzX4M3rM%2BjLMp%2BzqncYlwLa02Wc2X7qi24L371emM2L5c0Gsdfv%2FcOzz6jkj5g8VfSTvjJNfFwlqNifN%2BBjTtwcUv%2B8ZDGvc2EYdJrUM%2BhKmmEuGYntt%2BjHf7%2BqLAen4AzuniyD3xC4tiZDyZ9OFHr9MNyjxb8GOqUB7TkY6xeZtTuiGehlLgRkF5QnhwzaJATR3Q3UqlFsi%2FV1dN4gvkbhWnMnagIlxX46mOtLSA%2Frh0QBUKTvjoMMm8zzpzlMGDOFfvBt7PZMjWe%2F5uqXY10iMwoJ65eQb8zqBiCwabAJ2ng75C46ro6C8TwzOXCYFg9jE8kruIVYRjqjoB98BsRD3XW%2F0qpKoeamN44yrJ9qdaIIYruxjEc%2B1djFJvp1&X-Amz-Signature=0e0294b79108a867820a45e5c9336ab1428675bef8e4a6701a408abbe9c15bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VXWUKPH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFAmirBuykflqF3eey3g%2BPt14fmlSyOvj7L5TOWDhxbAiAahRXag3m1uy8jHeGHKCoTegoHtlZreG1dNVm7MU0rPyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMk9XFtISzJHlMFNI2KtwDxj%2BzWeZoDciTE4UzhpVVAPQW0Gub7gZ%2FYC3o%2FVSBq6mo1pw5fojDDvguFEcuBiIVMSCezi3i1Dat9O6%2FNYrg206%2BHepg%2F6wWqCMAwA3Qk1quPII7TVC6RRUvFsN9bfskDSN8qO7GLCDm%2BLghjRWfNszEfYEkk5F4p4oozNuAYgrz9Pbm90iHmCxIkJMp%2BppAL%2BM57hNiadybudbr80CQxR%2BfOH1BH5LblZyv6bzzaTd8Ge6D3oO%2FjLK9dAo5usaYiR2Y3IpUG0iezqBMvraP0ELhpwMxgS%2FcyXXmqm3EcPKoi4GXkrbdVR1Y6wdHLFnWB%2BYRy2ycZB6xZ2IfaBzip0idhHu8HoHCFcSHAjX6BMUIYRlKY82F06QNraT3V445zuooxjbxwci%2FiQJEFf5XGysEEykhkbEnURiQyCsmJ%2Bftg9Mmb1ub5QE78eus%2BDZc%2BlXdOE8Ty%2FDiNwQTuTk9cfaSAvQ7FFQDN6TMeBd5EVl1jOAjNQZKQ7NH7uDrmh3W0QJgW%2BG1908AA%2BDNWXGWwe1i0ZlqmDWhVt09FRDfLMkLNe4T2QHeHKw12CaVEoXAE2VlWPLzWe1Lq9Nr%2Fz8nWWd9tcch6nTxZQvsgzKef9gqld9hlP0OksY9azcwpqTFvwY6pgGSILBTmzFvv9rgaOcDrwF%2FZNpPBbsBQOPUosk4aEwgJiHOpn4Le0a0dBuXRL0JWH%2B%2BFFRUGR2Q7hsdSc7O6m72NKg6nsJFgk06sDTQIrefYudu7Y72DAho5mZLFm%2FyzGgwZW02amrhpIJNKUq2M2oBK%2BkQP4bzvvribhMgXiZ9yt3GBdtsEsVCVCI2lfDdkrepgOCn99E6hql%2F7RHH6NN237a%2BKDEg&X-Amz-Signature=8f6ae34171b827a859efb9ac4b9348a4dd651a5aa1111ecdf4accab0952b137e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRM44YPX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbcxuexUsQR2CzZEB3eCng%2ByhaV7Zql5%2Fn6MwhW5yv%2FAiB30g%2B8VQRr%2FrGJVmK%2BpIIwAAJdp5egotWEVBDYbOhIoyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMbqqsRHsN%2BB17iZ8oKtwDcCpiZguxm%2FXwKXX2oQ5cwdYJSKyhDqCRIb7NXdRodJA9iIZMIydpc31tb2xvlMXe0qBwY%2BEPpa6gDIDXbXvhVkPfOuFFmAKdIPyB9MoTs6nCEsIObqz1neETFLT6RwrI8pcCJtET4hbERjSh1i04HT%2BWkfNB%2FtgR%2Bt65PFlvrf8KaN%2FyWKnKt4%2F0zh89Z5adbX8NPy1IpgtBRei0GQNiHkdyYlDRl3EMdMz8Ds3uVI%2FfQbr6AfLOJesC4RkilyAgwdXpKGykC5AVH8mlV63CCFyASFqAV08zHAyP8pWhkMPj2SHwiwkVSzRbcsaOyPiXvrTxDIvCn1%2Flf6JJ7FbOtXaNZaFxaSvHMz6RQwmB56vVXhfg0st3PjZXQSz0srxg1qeNqeupjGForbjG2eEknIc2DapSofcsPsNTeM7rjjo%2Bv%2FL9iRmLhCTQqKe%2BH9N506fF3ayd7Zx3bnlMxrrjjnwzhcG8gxxT%2F11cCESTsSBZaKn%2Bvx7yqqEfS924Vj46wf5WzqdDwVWxg5kBx%2FeoDqrBw4acfezS7KldI8pslnZxLKYXtuJ1tW%2BeP2Kd7NIXkcFyS5%2FsbseJihIBAgzzhiaKD77g%2B0QAkwnV4l7MarSpcBsHESZVw6MS2y4wp6XFvwY6pgGlG1mSScrWZixrJ7yAppsODwyHCFR%2BMXRcD8Tu9YxXxVLyKYwyekUDBLUjNSP5P6g2zetksm7FFCXLcRiwvMshmIHsQX%2B%2FJB8K5l60G0YNCbw2RybD77L3180TnOSruKkkE4rKDm1WchdXrQfvwlVwqoZ%2Bbo4CaLmQLVNNTwFp9iqx1y3U2wBsStc4azbAw%2BirxXfesS5KDm2n2BkNzmkndzWW45Ma&X-Amz-Signature=f5010ec6c881632cac88974c8626f7e82db601b31411da341f7574794074f078&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
