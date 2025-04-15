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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMHJGD7O%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdbxbaUZcrkucoJcTyLv272pT6Z3xqdT7j6q9u5FulnAiEAmff0j3YOSRkE7cscEdypsSd%2Bt0VzVnVcDBvSyShdJiYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOwTCi9reO2dMesMJyrcA4OUvnn5jBsEvZhgllS9pd2jy2O%2FxCPnnIw%2FYIpLF0aZh8Kq9WaSCKsD5HB28OgOmSkjUbu2xF5jBTiNon2VfJXWDAsQCjy6i2wabQnZtq9qs8VBUN58CJEK%2BVydCVzGgFPhQ8%2BfVqfQPNqtcmgQV%2FkgTdmfv%2Bmftaqz0aSL3NuLhEzDYdEdyUrl5tVBUfWWo6yZmYk0FVbsl3LI1eORmbqRxvWC0q34TOxeLHu8cuI4jQH%2FAuO33Y%2FwM2PmoXTSFVc2QDjgEGVxoCs0qix%2BYKHDwd%2BeTTcWf0AU2Jru%2BK4yXPdHfzuMzqzogpGJdtKMVSOTsPAeWYFg%2F0JuOj5LbVd2p%2Bx1byHABbBQSWj93CFYVM1wTYyP%2BH6kl4z4jKUlZDoQ44sNQ4U7LnGHlkAhmCQgURXB3yw3VozaBDQ6NzDUvao9zeuu3UV5I3uwi2WdtQR04GHvM%2BhkTGQUS5IDNpzN4RDYolB9AFVqeFPCq05onLVEWDqprEcENn%2B%2BIpD5fGQ%2FYoK2WYzritSM9hKl5nwyvveDB%2B%2Fjv7gfkQazK8KO9LkHsaJ45aOu00ry%2FsdgN2QIqvzlWBCG1EwZpLSUdCs95ZpY%2BHCmsOgBUlU7K7d609XIKoLGGFm2azRGMKXx%2BL8GOqUBl3bkFG%2Bnabki94eU9BnbF5pz3uyQWBbBqLYOOcPwY3aHm6RFezLfZc5xgHCsIWWrruAypfyOYpJPMXu1JH6O%2FdHFtRJg6n62iTtFZvUFeBcSXbj%2FnUxwfPeoy7L%2FU7dD5wfBmqIwbc8a91qnLMIPFmR0PnmkYaKRAvA8f6Y0M56YNEJQIXxVYE0ncUQ6wPIcsa3%2BGfXnCBG7KBg%2BeC8pYPzr7NAr&X-Amz-Signature=af3a6427ce09bd7e4fe5f994ebfee891ade366379652c060d3f6bc7c785e8926&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMHJGD7O%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdbxbaUZcrkucoJcTyLv272pT6Z3xqdT7j6q9u5FulnAiEAmff0j3YOSRkE7cscEdypsSd%2Bt0VzVnVcDBvSyShdJiYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOwTCi9reO2dMesMJyrcA4OUvnn5jBsEvZhgllS9pd2jy2O%2FxCPnnIw%2FYIpLF0aZh8Kq9WaSCKsD5HB28OgOmSkjUbu2xF5jBTiNon2VfJXWDAsQCjy6i2wabQnZtq9qs8VBUN58CJEK%2BVydCVzGgFPhQ8%2BfVqfQPNqtcmgQV%2FkgTdmfv%2Bmftaqz0aSL3NuLhEzDYdEdyUrl5tVBUfWWo6yZmYk0FVbsl3LI1eORmbqRxvWC0q34TOxeLHu8cuI4jQH%2FAuO33Y%2FwM2PmoXTSFVc2QDjgEGVxoCs0qix%2BYKHDwd%2BeTTcWf0AU2Jru%2BK4yXPdHfzuMzqzogpGJdtKMVSOTsPAeWYFg%2F0JuOj5LbVd2p%2Bx1byHABbBQSWj93CFYVM1wTYyP%2BH6kl4z4jKUlZDoQ44sNQ4U7LnGHlkAhmCQgURXB3yw3VozaBDQ6NzDUvao9zeuu3UV5I3uwi2WdtQR04GHvM%2BhkTGQUS5IDNpzN4RDYolB9AFVqeFPCq05onLVEWDqprEcENn%2B%2BIpD5fGQ%2FYoK2WYzritSM9hKl5nwyvveDB%2B%2Fjv7gfkQazK8KO9LkHsaJ45aOu00ry%2FsdgN2QIqvzlWBCG1EwZpLSUdCs95ZpY%2BHCmsOgBUlU7K7d609XIKoLGGFm2azRGMKXx%2BL8GOqUBl3bkFG%2Bnabki94eU9BnbF5pz3uyQWBbBqLYOOcPwY3aHm6RFezLfZc5xgHCsIWWrruAypfyOYpJPMXu1JH6O%2FdHFtRJg6n62iTtFZvUFeBcSXbj%2FnUxwfPeoy7L%2FU7dD5wfBmqIwbc8a91qnLMIPFmR0PnmkYaKRAvA8f6Y0M56YNEJQIXxVYE0ncUQ6wPIcsa3%2BGfXnCBG7KBg%2BeC8pYPzr7NAr&X-Amz-Signature=fd173820e7e4377311b1701dbaaf89602c98d0b330e1d954f153d03356b90274&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OYEKEAH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkzfTg3c61lzFIW41pdvebrEP1ajVw51LbJgLXjhue4AiEAuBoL887uFXKb%2FzV%2Fs4vGDkZusNhekzBxOBOCoLm8byQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDE3%2FjpQG635l4eLwICrcA6t36ZHX00U%2BGSR4bVQAuf70SC8qENncGl0rAwU1XOKkh78PIpUJmoOn0n59%2BCh18A9s5%2BXHe9NTMdYoQyqSmh3Zwaf8GX3JZlHmW%2Fy5EQusA%2FdQlkkESG%2FBAHLr25QKteUx3jgQ7s5QyWV6YhAtk9B5lVW%2FwqDwUF0sLEKNWkHszsDaFAZXarRi%2FpQcdlBvyMJslkvus4fbXbi7nWpqzqvE9e11XeY15ViOh5hO%2FVQke4%2Ffhjz72KoInmFM00HVdPCmJwqM%2BUQ0tbhAmfaKvQ3zL09m8H%2BRA3FuXS3McOULHkVuXSecMKrBj%2FGpOcHl8ROQ5wjGi4wgRd1wUagojsc6T33MbKp%2BjFNnOfOa4MQyi%2FrCjt7lrTiC0lEVVs4s6MuWLOJl3rG7H92r%2F0FVlyUMcPmHuhW6acwns2iRnbxY%2BCGCg18wR7Tf4hgaRs2R5qStid5kNt2F0%2BWBo2YHAoZtiI9eZ2tbWuFjC%2BIi%2F5ghTudxzN8CkohadS%2BTp6Pkf%2BE6cdHk5XCFYYLGzr%2Bg75bcY9Pc9fIzKQG63%2Fk3cIfi3%2FXFKM4RuZyBF67FbASoc6Rv3cFRI0ejOnPGNmsN9L8zdFI42YereZC2ml9coqVn%2FZHfHk6kPLUrOHMdMMrx%2BL8GOqUB3Dno8G6x9H9JhUo5ZasMY%2BjkTBvDA3WceiyOVbFCUmQ31R16ScTSMh62l%2FQ9XxmdLPQWdzn8fh%2FgMQDtHPjGHNOpy%2BBXsAoGHmsKbITM2AYArcq32O%2Fn2hsTHSZ9Bp2q8OR6qkaPv8%2Bl0HNbeSRtxxJUYF2cuSv9j32uIY0gK0ELsLG9EYAXoJgXNY%2FhUOWSyfkRxDAR4Q4ZDyWbuyit9dSBropG&X-Amz-Signature=9badf4633349cbee7361ec55c04227d6c03e7eefb84212a0901b10546db62ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673XSSKAU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGt0gruw682jJZmKo0coyvfFASYu%2BW34e41xwIv71ia3AiEA%2BkvJukYtB2u1hFLiyk8vU5Xx14Q40TGhy15wrxP0Dgoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOLnUEC4w58F1ZH7ZCrcA%2F1dX3mEdsSEbxAVlUuNhw7Wa%2FJVBqRZ9y3CCAxZrepHeyRSKiTjWeRvK2kh%2BmaJpIoYD8NdsZxunCImgwgiqTDQ855ZFCgb6QTvl%2BIDBhDb%2FXrTE8OlYlW4W5BIdiJcTcdw6szzccS9rc%2BXsh6Y8yWZ%2Bc59HbUqS%2F8T0tpKaIY5WnIWf43yG8RTdwSPBpf908tGsI5O3EFduUeCEAPnhNttgxjNk6Gd0xPiD0u5mk3lD69EDUwwndoVbvi5ffpNE2H6nWhYlAhh63z%2FgsYgeKtE6yAm6Z2XhQtdPwwGugjRzBEh5U%2F%2FVgCjVykgwSvmhlaHKbYZZMYhNNGkbYqqDEF7nUYE7bSXgOcMuPm9Wl%2BvIka3jEXjGKX6EgeFL%2BZKyyrq7bFheiSdZME1MxKPH%2FULyWlDNUTa1dW3lIXFt195%2FM3ntbgZwIS%2FHhlqQRroxUCb1IGES%2BCIfhyx4cgmMxsZ3I%2BWoew6YWTsSZFRCcYEIIwudasSXJQnIagp5K6imGqtJ1Qc1uE%2BMLg3XVSDtkBz7jvlp2lJ1pXwzkFT49VF5G6DLeH2XzslnS9iDW8uBPPd%2FqlGDZCcqbpmB8SVHUZbC1PejYc%2B540%2Fxzvg7mcpuhwYLddmhhQ8cg2kMNPx%2BL8GOqUB3Wr8%2FDMfQBDatn7GjoYSubwseBBUN5VRgYo%2BHvVUFyOtK1tU114RGpCWnbwFsYmiE866VjCB%2B3peB9cIxG1t22SU3D4eLy4SatnO1I3LWA%2Bcho1i1kJ5By2y5UZ1RCXZYyvr3xdJri7WmX9QbquNRqbrpj3%2Bs96iUX86tw9%2BHaYdTUpHHz5xDWAKMOkE%2BDAJ6VnlMmkh9%2FEqONjZul2XoG%2FGbC2m&X-Amz-Signature=bb5517b264e80e64e72cbfb74b39fd0571e6acc10c4ea674f85e5e3842a10264&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMHJGD7O%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdbxbaUZcrkucoJcTyLv272pT6Z3xqdT7j6q9u5FulnAiEAmff0j3YOSRkE7cscEdypsSd%2Bt0VzVnVcDBvSyShdJiYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOwTCi9reO2dMesMJyrcA4OUvnn5jBsEvZhgllS9pd2jy2O%2FxCPnnIw%2FYIpLF0aZh8Kq9WaSCKsD5HB28OgOmSkjUbu2xF5jBTiNon2VfJXWDAsQCjy6i2wabQnZtq9qs8VBUN58CJEK%2BVydCVzGgFPhQ8%2BfVqfQPNqtcmgQV%2FkgTdmfv%2Bmftaqz0aSL3NuLhEzDYdEdyUrl5tVBUfWWo6yZmYk0FVbsl3LI1eORmbqRxvWC0q34TOxeLHu8cuI4jQH%2FAuO33Y%2FwM2PmoXTSFVc2QDjgEGVxoCs0qix%2BYKHDwd%2BeTTcWf0AU2Jru%2BK4yXPdHfzuMzqzogpGJdtKMVSOTsPAeWYFg%2F0JuOj5LbVd2p%2Bx1byHABbBQSWj93CFYVM1wTYyP%2BH6kl4z4jKUlZDoQ44sNQ4U7LnGHlkAhmCQgURXB3yw3VozaBDQ6NzDUvao9zeuu3UV5I3uwi2WdtQR04GHvM%2BhkTGQUS5IDNpzN4RDYolB9AFVqeFPCq05onLVEWDqprEcENn%2B%2BIpD5fGQ%2FYoK2WYzritSM9hKl5nwyvveDB%2B%2Fjv7gfkQazK8KO9LkHsaJ45aOu00ry%2FsdgN2QIqvzlWBCG1EwZpLSUdCs95ZpY%2BHCmsOgBUlU7K7d609XIKoLGGFm2azRGMKXx%2BL8GOqUBl3bkFG%2Bnabki94eU9BnbF5pz3uyQWBbBqLYOOcPwY3aHm6RFezLfZc5xgHCsIWWrruAypfyOYpJPMXu1JH6O%2FdHFtRJg6n62iTtFZvUFeBcSXbj%2FnUxwfPeoy7L%2FU7dD5wfBmqIwbc8a91qnLMIPFmR0PnmkYaKRAvA8f6Y0M56YNEJQIXxVYE0ncUQ6wPIcsa3%2BGfXnCBG7KBg%2BeC8pYPzr7NAr&X-Amz-Signature=f0431269a4a5e2c7ba97c6b136091b4c825c7500d6f6e6b2845e19a7258cf007&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
