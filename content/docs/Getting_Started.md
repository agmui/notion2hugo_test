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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNRDOEFZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD%2FaUkc7BYlgUyWkc3x7L6x7Ujo%2F5GUOpBnxhV%2FcLr6QIgYW9gxgNWrwzIZzerypL0gkJEf8HRRrRHaoca%2FXFRoHMq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHNhlhWdEMAJcqJiqCrcA6zabpXr3cU2V969h4JJPLCJ4cjE6eh9uUYuOTOtKweZgLDuPFQRUzhyLQWVVrtpnv5JEPT4g%2FZv9fBc4AJ2ZKZLmB%2FE0GOoT2%2BzQ5kXfC9nCVGuLMMCo6usZGRnOFefQV46MHpfEq94wvsDhbYupjP75mWP94NKeD%2BPJJXKrPPQhrkoPvDsPWGZWVmw%2FSl0kM0osz%2BW3EnqH2SsClD%2B6%2FLxSEd6Qp4dCY16slHCwxMj2chYVCjPJRy46sUxNixhUuOzssVoq8ob2xO8Gh26VbLJdAVQ3Yw5hHUb7eR1A%2BqBQb3Y5uMAL5YCb5sSY4KEdPCiD%2Ff1kMBkpQWONbVIlY9Ptv7qoDM2vfv8S4oGQycDjN9C%2FatQCnbdFnOQCAuvOehhMAmw1FV%2FaTmFIACfIqn3wzeveEf7Np9anphPpi81oHlBOkuX2EvE8Vwoub13Uxy84kqpiZL3i0o7ziy2apnrAuM1Fu3MuVb3YXoPmAUQ7vQlkpQvs72feO%2BUsLrfv8M2zU3RIxmt9YwvXe%2B1fy2HnJlFVsKK%2Fq%2BasAabWDi3dfSdWnShDGin17ZIJk%2BuX5FyJQPZoiAW2p7HV8yQS4uiPKWE7CTA87HAwXAQKmdXwxnVOzj3alga%2BXpeMIaeuL0GOqUBMcwWpCZ%2FVtPFEevaHYpmE9IQwTNIpvBe04Nug0lW4Bd1CkcZna1C6t6QNl6f4f274NSgdZYHzcDPl4YDAuE8jBncUBH4lnBdcsdsIKmFavMoFjXSWnkepBKsoyA7sMgiSuEbkkYZRDRhPVpsQPWwagrpXQt1ErhwUIwGn12OhcoxavHo8kpcUGC4F%2BCBTLbLza2GE7o9m70riNeSlzgiM0hEliCO&X-Amz-Signature=cdba16afd6a6332b6d5a9070133f828055387b3def63cf3df733e50e554a63ca&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNRDOEFZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD%2FaUkc7BYlgUyWkc3x7L6x7Ujo%2F5GUOpBnxhV%2FcLr6QIgYW9gxgNWrwzIZzerypL0gkJEf8HRRrRHaoca%2FXFRoHMq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHNhlhWdEMAJcqJiqCrcA6zabpXr3cU2V969h4JJPLCJ4cjE6eh9uUYuOTOtKweZgLDuPFQRUzhyLQWVVrtpnv5JEPT4g%2FZv9fBc4AJ2ZKZLmB%2FE0GOoT2%2BzQ5kXfC9nCVGuLMMCo6usZGRnOFefQV46MHpfEq94wvsDhbYupjP75mWP94NKeD%2BPJJXKrPPQhrkoPvDsPWGZWVmw%2FSl0kM0osz%2BW3EnqH2SsClD%2B6%2FLxSEd6Qp4dCY16slHCwxMj2chYVCjPJRy46sUxNixhUuOzssVoq8ob2xO8Gh26VbLJdAVQ3Yw5hHUb7eR1A%2BqBQb3Y5uMAL5YCb5sSY4KEdPCiD%2Ff1kMBkpQWONbVIlY9Ptv7qoDM2vfv8S4oGQycDjN9C%2FatQCnbdFnOQCAuvOehhMAmw1FV%2FaTmFIACfIqn3wzeveEf7Np9anphPpi81oHlBOkuX2EvE8Vwoub13Uxy84kqpiZL3i0o7ziy2apnrAuM1Fu3MuVb3YXoPmAUQ7vQlkpQvs72feO%2BUsLrfv8M2zU3RIxmt9YwvXe%2B1fy2HnJlFVsKK%2Fq%2BasAabWDi3dfSdWnShDGin17ZIJk%2BuX5FyJQPZoiAW2p7HV8yQS4uiPKWE7CTA87HAwXAQKmdXwxnVOzj3alga%2BXpeMIaeuL0GOqUBMcwWpCZ%2FVtPFEevaHYpmE9IQwTNIpvBe04Nug0lW4Bd1CkcZna1C6t6QNl6f4f274NSgdZYHzcDPl4YDAuE8jBncUBH4lnBdcsdsIKmFavMoFjXSWnkepBKsoyA7sMgiSuEbkkYZRDRhPVpsQPWwagrpXQt1ErhwUIwGn12OhcoxavHo8kpcUGC4F%2BCBTLbLza2GE7o9m70riNeSlzgiM0hEliCO&X-Amz-Signature=c0f3e0c2b0d4924fd19025467ea38c981753c785613c4a02025f456d7e83d40c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYKV2747%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaIVzJMxLhuCm10xOAZ3Lv8WcsT01fKiOyEi26CKrXlgIhAIMwyJfkCqcHexqhkZlOLvdkzw6cCl%2BHA%2FMdtJTOcdGgKv8DCBgQABoMNjM3NDIzMTgzODA1IgwnYJLIIhxhvLjAMj4q3APhd2ZKUtYnHN5a7mVU3rziaBqweQd7k625PAsQzAkhmQIvFaBRmFqSGCEGIAIgkahcrOw6WxunCahdRcZlv3g7OIrlqAAlZuR6n218UYDXFFVJ%2Fr1m5rWKCN10dqbVzB97p5fevol6I4x1MRwEvcME9isVN5q0TpW1kXJaeWhkmTq9TBbKJYrrDgXiItJSKrYioKaeNTSSmn%2FHne4SvTx%2Fg7qt4eNykuuZrvJhIDv9T3jrIU2srh1WzvQZC3SWCIDLLn3QP2Xgi8ndFCINV5xshc65%2BRNItaIiYqmSPHF75%2FAtRskLFABP08aLTZfwp6Vghh1%2B80gELJ1CP%2FzOsA5bIG%2FRXMvKJpvI8wp7ajczqjfRfkDEDmURoDHBr9INcieKh2eMmuVg8lZAj6D71HAIHmvncrIJ5e0kqJCFcNa3h4MWMAxbSy%2Babw8iUaQoHLajMedszul9ATUFhbzE8e%2FMFii7wmbAef%2BrrwhqATT5PJ8f9DDljnqeMdiJ3DlG4dlMHozp6n%2B5Bnid9b8mwZIKL8runMIxnsk9DFjX%2FPluM8064vyLEjUTnm0AKeIDFZycAtIVmkXB7IFF2L31AGV3cJcdSiC3XA1F86UVWk8KZaD%2BVVQ5pYUpEtVOTTDRnri9BjqkAflEo7CzsQ1Qh55uSzEcNCWuzuEvAGvZDwZLcgoizSvWcbrgFX%2BHCbrdd9eItd%2BW9nL3RFVgiBgj7BlQH9DskHcJYg%2F5ZzT1SPZ56ujn3ELdufKIR1Djcp2yQ338hynpMxoAxM7HfHa%2FFAAHoqHLpKOHzLELt9kQHIOnBEvs0mO%2F9pNdynEbiXvtL%2Bq8v59CsZradZsaE6NlOEY1DBgjeTaQ1sKY&X-Amz-Signature=9964bb430050992a715adc48d521bef02514816ef923de17b2c0140ce10ff1f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UPOBANV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDABTpONPyJPn3b72H2%2Bbp4bTmf0QTWQ0ULy2aHYmYNyQIgX38fURIDb03o1FclAY%2F1JBCpdKKk0IZNbZ7M8xSaVDEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDOpXITIcZUcGaNBAgSrcA5tZ%2FDKzwdZGoiSbFQLnqMhOBm%2BgwhgWKI7nnGS0S%2BG1gyfQVV12qZVTO5Dwqq%2BGTZI8EchqZEgOVE88IJ0S5iFCFtZqjYVPaFiBN%2FYF5TjYoBLUDfgBFjQixNhSjkiYy9QjVHpbOcOSJ%2F8HCHH78ZIA03neq%2FhCKqoERwYLyoenAIjZOFiConhmL%2BpCFNmqF%2FUQDQcOPd2F%2FtS5wYFlm20XGqEyd4lqE5mCiDlojbmXl0fDoYA66LHZ2UoxHf0GW3C7mdUcp%2Bwda6p%2Fv2D%2BEZIc4m39Ph%2BgX%2FsVG6BQtDTy411N3FbNBwFiL%2BuXkaccDniqCer53bn%2BIJZcK0KhxwuMUP94oo5CGn4DntZ6dF2hO3pgWLagH34cNXQcUfVSNX67Aqp2t0Sn7Ff2hyMVHHPeHZeddrleX3rcJIaCPowzn3Hlmb4B3SDN8Z4ZYLejCyOMEi6tOi2dhqihKyxjmXEyrk2iisEFqG%2FY3lA4N3Jn9PFve6OgKk%2FAzllxgH%2Bpvjn5cvCtwEMHC6viO5L35NHajTfy9nC0hz26h%2BFHpPWMNwNe7RLWQMqE6M4vuwec38%2F2CEyGALiynY5tYpnudUShdOqjnuVnBsMtGqVYnWYgSAamvHy2Nn6HaYAyML%2BeuL0GOqUByAemCExkcSP9He40F4MRlRe5TezI5%2BM9a4%2BgIdXIdn1p3%2Bd5dEWyDdfGNt%2BflI9Eto5sepjWKF6JtKvTlFCp2MngzaESMLNnEeQd%2F1Sc1mI6Inm6m%2BvJbYuWxCgAkqddxu%2FvKNjFtLZ7xK8iTeeWhFgHaPlDgNoaUOloa4wrxrCkzb43HZb2Bj7V8AaF9QeaJWAN0p6R7YywIGX9hYsEBu0mHIFo&X-Amz-Signature=1514e202b499fdb38bafb20f9f269a5134cc29c32c9d25e6f8d5b063b3fefefb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNRDOEFZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD%2FaUkc7BYlgUyWkc3x7L6x7Ujo%2F5GUOpBnxhV%2FcLr6QIgYW9gxgNWrwzIZzerypL0gkJEf8HRRrRHaoca%2FXFRoHMq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHNhlhWdEMAJcqJiqCrcA6zabpXr3cU2V969h4JJPLCJ4cjE6eh9uUYuOTOtKweZgLDuPFQRUzhyLQWVVrtpnv5JEPT4g%2FZv9fBc4AJ2ZKZLmB%2FE0GOoT2%2BzQ5kXfC9nCVGuLMMCo6usZGRnOFefQV46MHpfEq94wvsDhbYupjP75mWP94NKeD%2BPJJXKrPPQhrkoPvDsPWGZWVmw%2FSl0kM0osz%2BW3EnqH2SsClD%2B6%2FLxSEd6Qp4dCY16slHCwxMj2chYVCjPJRy46sUxNixhUuOzssVoq8ob2xO8Gh26VbLJdAVQ3Yw5hHUb7eR1A%2BqBQb3Y5uMAL5YCb5sSY4KEdPCiD%2Ff1kMBkpQWONbVIlY9Ptv7qoDM2vfv8S4oGQycDjN9C%2FatQCnbdFnOQCAuvOehhMAmw1FV%2FaTmFIACfIqn3wzeveEf7Np9anphPpi81oHlBOkuX2EvE8Vwoub13Uxy84kqpiZL3i0o7ziy2apnrAuM1Fu3MuVb3YXoPmAUQ7vQlkpQvs72feO%2BUsLrfv8M2zU3RIxmt9YwvXe%2B1fy2HnJlFVsKK%2Fq%2BasAabWDi3dfSdWnShDGin17ZIJk%2BuX5FyJQPZoiAW2p7HV8yQS4uiPKWE7CTA87HAwXAQKmdXwxnVOzj3alga%2BXpeMIaeuL0GOqUBMcwWpCZ%2FVtPFEevaHYpmE9IQwTNIpvBe04Nug0lW4Bd1CkcZna1C6t6QNl6f4f274NSgdZYHzcDPl4YDAuE8jBncUBH4lnBdcsdsIKmFavMoFjXSWnkepBKsoyA7sMgiSuEbkkYZRDRhPVpsQPWwagrpXQt1ErhwUIwGn12OhcoxavHo8kpcUGC4F%2BCBTLbLza2GE7o9m70riNeSlzgiM0hEliCO&X-Amz-Signature=757261e35a80646cbc70404fb611fccfcc1e757683e2b9733050f3319d1d510c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
