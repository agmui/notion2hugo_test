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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S7RLLZN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDsnfoFXtPrAbuR%2FLqfIm43gs2dFiRATlxuQvUmZeBh0gIgY9xDVMIYun3%2BKczbsMe60okl4f4j6nANImwdKoa82TMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDObMY6ybIg9WmpyGtyrcA3t4TfJOlYsIlDJ1UlymW6e09ZsLxIWdKocGqKnrdnye8ShV%2FhMRJ%2FSEB3ouOT887xwWpAKhuef4Qezu55HLhFsKpIvmQdePoVIlYqq5uwP8NWlRsfzwsXCWFBfQ9DhYICpsnNT5Uvyn3xdO1NLyAoZ04dIULqpum0OVc72cUcdfpv2xauYGu4puHmU%2FGXAPhJDC8%2Fk4W8J3YzEJR7dlIfBVR8XGpir0VDrhVKkJ8Z7p3FFnxwZCO9ruamXHt8lKBfJ0fLvR2YVwdMNjMnffKKtIzs18bsDuHM5dyi%2B94cNwVDG%2B28xw6TGsBKxTae9fnJutTK%2FFT3UQdMJDce73Q1YYO8ZEvsSmsfvNNuOzdoZQv4SOSIcnDOdCOTFdWT91P%2Bkhxd%2FaKodJOkRjyZRTZ9MjCSToq4GKcSSOR7lIOWN54S%2BvxJaY88OwFte7bTBFCREDs9%2Fu91dI40WKZUM3n0qfrfG0brbS2EEphhwB1BDm3zIoGhA5JpAFPXKO%2BqmaQd0GlWTIqNAlrjTXR1HHLJaNDFINdsD1Ov1qYRk1D7eUK6vS4T2Q1HFuWVK9eTMecXWrE3wog529o6wRMfiaeOyHPsZuYNXMS72lFRsqaoIJIAmszPooSMgWTQpfMOnlxL0GOqUB2XoMxOPmMpa8x3p3h2YfWyrSSCYdtiMWh%2Be6zEekULIhLMrPGFgjc%2B2hyjIR5%2FCajghdW8d1vdjID0Y4GE77e%2BxnovAGKy35P8GACJb8IeSwENpkytUP91r5mEAeWs2Lq0AeYS5vPG3LIoKBTNLHQA5NJJKLPgeCTNALpPfEuUJA6NNzxLXvCJS1jgA0U6ksLr7BS%2BMMMFjch%2FADBZarOZ4M8U00&X-Amz-Signature=4417de0a5cb6a8eaa02c58448541a04d62a564fde38dd749b87fd76c52a902e7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S7RLLZN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDsnfoFXtPrAbuR%2FLqfIm43gs2dFiRATlxuQvUmZeBh0gIgY9xDVMIYun3%2BKczbsMe60okl4f4j6nANImwdKoa82TMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDObMY6ybIg9WmpyGtyrcA3t4TfJOlYsIlDJ1UlymW6e09ZsLxIWdKocGqKnrdnye8ShV%2FhMRJ%2FSEB3ouOT887xwWpAKhuef4Qezu55HLhFsKpIvmQdePoVIlYqq5uwP8NWlRsfzwsXCWFBfQ9DhYICpsnNT5Uvyn3xdO1NLyAoZ04dIULqpum0OVc72cUcdfpv2xauYGu4puHmU%2FGXAPhJDC8%2Fk4W8J3YzEJR7dlIfBVR8XGpir0VDrhVKkJ8Z7p3FFnxwZCO9ruamXHt8lKBfJ0fLvR2YVwdMNjMnffKKtIzs18bsDuHM5dyi%2B94cNwVDG%2B28xw6TGsBKxTae9fnJutTK%2FFT3UQdMJDce73Q1YYO8ZEvsSmsfvNNuOzdoZQv4SOSIcnDOdCOTFdWT91P%2Bkhxd%2FaKodJOkRjyZRTZ9MjCSToq4GKcSSOR7lIOWN54S%2BvxJaY88OwFte7bTBFCREDs9%2Fu91dI40WKZUM3n0qfrfG0brbS2EEphhwB1BDm3zIoGhA5JpAFPXKO%2BqmaQd0GlWTIqNAlrjTXR1HHLJaNDFINdsD1Ov1qYRk1D7eUK6vS4T2Q1HFuWVK9eTMecXWrE3wog529o6wRMfiaeOyHPsZuYNXMS72lFRsqaoIJIAmszPooSMgWTQpfMOnlxL0GOqUB2XoMxOPmMpa8x3p3h2YfWyrSSCYdtiMWh%2Be6zEekULIhLMrPGFgjc%2B2hyjIR5%2FCajghdW8d1vdjID0Y4GE77e%2BxnovAGKy35P8GACJb8IeSwENpkytUP91r5mEAeWs2Lq0AeYS5vPG3LIoKBTNLHQA5NJJKLPgeCTNALpPfEuUJA6NNzxLXvCJS1jgA0U6ksLr7BS%2BMMMFjch%2FADBZarOZ4M8U00&X-Amz-Signature=97450ad702c2caab76f0a18a89e0e89a781a3562b547ab341824a4d7ed49c6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ5PYMRA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDeOodLIYFRfgEpiDErO77a7AYXjvBMrt%2BssB%2BadPq10AIhAMYNjKzek4DtrrFnWx%2BquV8xmQb5pOXJiarkrjsVLh68Kv8DCFEQABoMNjM3NDIzMTgzODA1IgxKGSFQ8RW4fV3vdEIq3AMAEpbUPG%2BbgepQMb6mtPCiwNRGq6WWEgT%2FeSNrTBZCxWKCXO9mXyECfuJlhLK1iR8JKDMutolihthMLeU%2FzEbe2jIxRIbDVz21ElMViCETM4%2BTfMc5WX5ngGBq64eED4TVM5ypF90J%2BSRB7%2Bm0d%2BdYN3FIRhuW5jv%2BNGbe7Vu6%2FNf6zy1HU0HH%2FqiUYmxKxX%2FEJ1OHhVlrsi2jcjWpsYRdkZKT6jIZinMBCcmj9te4sR7g530Mp6cxb6BwkbmnuzJScy8QEjJtMDoeVjIgIGUfm5BFG1wzy2lDACpDKb6ZRVhSOima0JUnflu3dIjSUTPgvA%2F6PYs297QWI9jomDhpSJTc2R%2FCWJinlD64UZN95NVObKZIg8im84%2FQKERwWhc9IxpvRdNK9Ff4yLzuDU76uIZmg5hVMl%2FLWe3IN7z820RRtE6luZN0UVfRO0jmT8lRRCkwL46VeHiObK6PM8CTe4KxrwUoti283hsu9EGykMno469%2FfVuMQZ4O1Lh9D98Bqhuc%2BkGXAHV%2FUZyqauZ%2BBdQckOuMIii0XNsWwVkw%2BNfz0EawUslLdDibi7HFfw5JOKnPJMQTQNjn7l7oz3IrRlAOyVunxnPETT%2FShgPAl%2FntE%2Fdr%2BDd5TuulnjD6ysS9BjqkAdin0%2F%2Fz1xkKc%2F8Jk7aSKxVFLRKpnXdmC0pMCdpiPJ0N47v8qvz6s%2FYEL%2BdYRfL7%2BHQ%2BqznzezqIAqndaYvqyo%2FwligLomwTc3tMKpR8nuKQDFXv%2BLw8b%2FY6S8kcMJiWeqfxDagsT4Y2cV2Ky%2F9AKgJuRrLWvTTRWQkvbNMND3ewO6yzhfsSK4UBqdz%2BoL0JUKGBhvcc6q4akuU7%2FizWi58JnebG&X-Amz-Signature=b005ced7054a58b492fb115f48ecb5d3ac0eb6f538421b5f2c84fdf457cb8d81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ7MZR5N%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEO0lUTJ5aHMtCl3CUaq%2BmM00gvu0D3HOSgH84lwAdsDAiEAxVQiviv08iCKVaxlSX6w3rYQvkgpdRecGZXdta06WNwq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDC1hXziFQV840D4AtircA7PGZtJaKKsZpdEWzD3FXIZHZxc0VwoANa4mQR3Ne5T3PBd9F6Ek4tl6EF5HdNpYfQzAqHD%2FKxfqgdSenVEHpNHA%2FPKjtrk3an48IR7YnyhYl5r7CX%2FPjZIIKZ7hw8tM8raCEg%2FkIiGBOwVo828MSQW9qBJMdVfW94OwidyRd1AZKOH7sIVCN5E47mKkAuThyEsseskqaCdAuBFpoXd1h%2BdLBw3%2FA0uIWqObMBXNhlRhQhBW10lnjhJE5sJdE7CoRJRl3mV9r0N2BYwewC%2FCS1OwGTIeAPs5i7xm5GrrtyGTEnd543ATUezm7C%2FfXRIySsMMxymdstq65z%2F5rVZYCDRRfs9HbCmtGfUIY0A31V9Ymx%2BtdY0WMEGM5J8btW6n6ZxGqPnyu4jQJQvpk3qiJNxa10Dp%2FpJHTZW4U0L8pJaBHiZJb3wZFI0xI40%2BWhH%2FZVS6551kV%2BJmdKG0c8cPGuGuaxSBDhK8p5VqHxzBRdU1hYYGxfbuWTcS4Mm4k25Y7eUaVKoUh4gfbMzSYh4h5SLF9db0bqLoecDDqGNEWQu6S9dzYGv77KhfiV5Sl0ugzP%2FlGdQwb5C9VE3v1e5bRLWcQ0%2BPvisbSH56UI7t9ALwFOq%2BdL%2BklkLe8J%2FAMOnlxL0GOqUBRVxNmSloRO%2BW86DBSbyjqhl7vkrxNHsE10c4y29TzI6uBI4OEYvPsM%2BIuqiRdgJgRw9eIfUUB4Xf0dA33lgMhRzSrqaeVQ2krT2zlK7uHDOoIf2uRzTfCwcvq0IEOUCUJP1vmm10xXgcaCyLTAd%2FDwxCxmg2Fyw5vZMfdwRrtZc4hQFlgffAyKh4W4W%2FwnxbfLvfu5JnOUE%2BPu1I2WP7vfjKWsyH&X-Amz-Signature=5c21af6b2a14e82336fb56e0bfa41026a436f66fbb53bfecbfc4f992eab29ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S7RLLZN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDsnfoFXtPrAbuR%2FLqfIm43gs2dFiRATlxuQvUmZeBh0gIgY9xDVMIYun3%2BKczbsMe60okl4f4j6nANImwdKoa82TMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDObMY6ybIg9WmpyGtyrcA3t4TfJOlYsIlDJ1UlymW6e09ZsLxIWdKocGqKnrdnye8ShV%2FhMRJ%2FSEB3ouOT887xwWpAKhuef4Qezu55HLhFsKpIvmQdePoVIlYqq5uwP8NWlRsfzwsXCWFBfQ9DhYICpsnNT5Uvyn3xdO1NLyAoZ04dIULqpum0OVc72cUcdfpv2xauYGu4puHmU%2FGXAPhJDC8%2Fk4W8J3YzEJR7dlIfBVR8XGpir0VDrhVKkJ8Z7p3FFnxwZCO9ruamXHt8lKBfJ0fLvR2YVwdMNjMnffKKtIzs18bsDuHM5dyi%2B94cNwVDG%2B28xw6TGsBKxTae9fnJutTK%2FFT3UQdMJDce73Q1YYO8ZEvsSmsfvNNuOzdoZQv4SOSIcnDOdCOTFdWT91P%2Bkhxd%2FaKodJOkRjyZRTZ9MjCSToq4GKcSSOR7lIOWN54S%2BvxJaY88OwFte7bTBFCREDs9%2Fu91dI40WKZUM3n0qfrfG0brbS2EEphhwB1BDm3zIoGhA5JpAFPXKO%2BqmaQd0GlWTIqNAlrjTXR1HHLJaNDFINdsD1Ov1qYRk1D7eUK6vS4T2Q1HFuWVK9eTMecXWrE3wog529o6wRMfiaeOyHPsZuYNXMS72lFRsqaoIJIAmszPooSMgWTQpfMOnlxL0GOqUB2XoMxOPmMpa8x3p3h2YfWyrSSCYdtiMWh%2Be6zEekULIhLMrPGFgjc%2B2hyjIR5%2FCajghdW8d1vdjID0Y4GE77e%2BxnovAGKy35P8GACJb8IeSwENpkytUP91r5mEAeWs2Lq0AeYS5vPG3LIoKBTNLHQA5NJJKLPgeCTNALpPfEuUJA6NNzxLXvCJS1jgA0U6ksLr7BS%2BMMMFjch%2FADBZarOZ4M8U00&X-Amz-Signature=5283ce281e5a496c9e72c9612e93df9cfa0d4910c28dd07f9f897b804f5874a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
