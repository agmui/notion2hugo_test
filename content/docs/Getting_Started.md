---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLWK6WW%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCID%2F25SJWOaY%2FKBkbYMzFHt8WbHSbafL10Xwq3M9RF2wIgd48E5uORQy3r6RQ8aplxHGC12oqOu%2F7nXcQ372V4SPMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBi3gvPx5DKu768W%2FyrcA4jo7LcqKwXyAm2PuRguUIcZqEdS6p6VdDbwBVIzj3CFFXo%2BzTDZx1o5JCuGFca3V4VgW%2BYIZAV%2FiXlwXn5hEk7wLkgCuRYcxgF4q2Ox%2FojCSTXRe5Xeu7LUDoQED0%2FxZB9zCzQ2vhwF92RStaXdPJGOBKfS%2BfdZHoT4YXf0%2BPhh01Irr8Uk1W8NDVzP%2FzodQ1N7fbVcz24UR521HQHu0ICNDW52q9Afh8tED9WDialeCK1hHNwFY23Itc9i4jf%2B%2B49WDsfpD4R0o8mo1i76hN1cCTmzoYqRP8TNzCgZANGXofNtsE8c%2FfTPX6CAzmp8O9lJuzjj70OqsbVy1eUFUYPdCkrt4rScc9UJC%2FH9b9qw4L7UQ08esc9fGb348%2Bfsr5zSo%2FjDk%2BwwZqNJ0U6%2FrVGD78KemsCxHyDQdGkc7ie%2FXH8brampb5o5SPrV3n8mJrKCTMtGyTBrtP0EvoPqSMG1%2BS47GpOQIz1%2BlX%2FfI3OvZcr7tsCx%2FiPyUelfFfLoHhaNEvSeMZ847UGxTo85vFxijomJaIqmqCeU%2Fj75eZb6%2Ft29iYTu1qvhXUOF6EF9FJqykxyYzseVdswivJaPHBGRenmFxFLQfIyrxke%2FYCs10GuH%2BYamMl7SaLoGMIbPm8sGOqUByh7J2NCJ2l2qOiT%2Fxg3lc07dWx6PNwm8pH9%2F4v5IOz%2B5pyaIu23NZ4ntU0Q578fxRN4LDpgo%2Fkrlwv8DP8Wdez%2FkN%2F%2BbCOwSAXOwLUpyQbrLuR0bGPsGKTJXyhx60kMtw83e6qZrmTxTLYghy11No9ZrHl75%2FtqSPI08lOG0CnsFRSP0E%2Fp5PEP59XAL9b9sfbHB9I1sdYN0%2FqBAW9WJIXH4VHhL&X-Amz-Signature=5e5a72ddbf50d58ae68dc07cc3418351091804013f53eaa5f593365f29e078ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLWK6WW%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCID%2F25SJWOaY%2FKBkbYMzFHt8WbHSbafL10Xwq3M9RF2wIgd48E5uORQy3r6RQ8aplxHGC12oqOu%2F7nXcQ372V4SPMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBi3gvPx5DKu768W%2FyrcA4jo7LcqKwXyAm2PuRguUIcZqEdS6p6VdDbwBVIzj3CFFXo%2BzTDZx1o5JCuGFca3V4VgW%2BYIZAV%2FiXlwXn5hEk7wLkgCuRYcxgF4q2Ox%2FojCSTXRe5Xeu7LUDoQED0%2FxZB9zCzQ2vhwF92RStaXdPJGOBKfS%2BfdZHoT4YXf0%2BPhh01Irr8Uk1W8NDVzP%2FzodQ1N7fbVcz24UR521HQHu0ICNDW52q9Afh8tED9WDialeCK1hHNwFY23Itc9i4jf%2B%2B49WDsfpD4R0o8mo1i76hN1cCTmzoYqRP8TNzCgZANGXofNtsE8c%2FfTPX6CAzmp8O9lJuzjj70OqsbVy1eUFUYPdCkrt4rScc9UJC%2FH9b9qw4L7UQ08esc9fGb348%2Bfsr5zSo%2FjDk%2BwwZqNJ0U6%2FrVGD78KemsCxHyDQdGkc7ie%2FXH8brampb5o5SPrV3n8mJrKCTMtGyTBrtP0EvoPqSMG1%2BS47GpOQIz1%2BlX%2FfI3OvZcr7tsCx%2FiPyUelfFfLoHhaNEvSeMZ847UGxTo85vFxijomJaIqmqCeU%2Fj75eZb6%2Ft29iYTu1qvhXUOF6EF9FJqykxyYzseVdswivJaPHBGRenmFxFLQfIyrxke%2FYCs10GuH%2BYamMl7SaLoGMIbPm8sGOqUByh7J2NCJ2l2qOiT%2Fxg3lc07dWx6PNwm8pH9%2F4v5IOz%2B5pyaIu23NZ4ntU0Q578fxRN4LDpgo%2Fkrlwv8DP8Wdez%2FkN%2F%2BbCOwSAXOwLUpyQbrLuR0bGPsGKTJXyhx60kMtw83e6qZrmTxTLYghy11No9ZrHl75%2FtqSPI08lOG0CnsFRSP0E%2Fp5PEP59XAL9b9sfbHB9I1sdYN0%2FqBAW9WJIXH4VHhL&X-Amz-Signature=9a4aae32d7b89b51bbba32e88456db168d2f3a9f83818e394e0520d2ce27752c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLWK6WW%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCID%2F25SJWOaY%2FKBkbYMzFHt8WbHSbafL10Xwq3M9RF2wIgd48E5uORQy3r6RQ8aplxHGC12oqOu%2F7nXcQ372V4SPMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBi3gvPx5DKu768W%2FyrcA4jo7LcqKwXyAm2PuRguUIcZqEdS6p6VdDbwBVIzj3CFFXo%2BzTDZx1o5JCuGFca3V4VgW%2BYIZAV%2FiXlwXn5hEk7wLkgCuRYcxgF4q2Ox%2FojCSTXRe5Xeu7LUDoQED0%2FxZB9zCzQ2vhwF92RStaXdPJGOBKfS%2BfdZHoT4YXf0%2BPhh01Irr8Uk1W8NDVzP%2FzodQ1N7fbVcz24UR521HQHu0ICNDW52q9Afh8tED9WDialeCK1hHNwFY23Itc9i4jf%2B%2B49WDsfpD4R0o8mo1i76hN1cCTmzoYqRP8TNzCgZANGXofNtsE8c%2FfTPX6CAzmp8O9lJuzjj70OqsbVy1eUFUYPdCkrt4rScc9UJC%2FH9b9qw4L7UQ08esc9fGb348%2Bfsr5zSo%2FjDk%2BwwZqNJ0U6%2FrVGD78KemsCxHyDQdGkc7ie%2FXH8brampb5o5SPrV3n8mJrKCTMtGyTBrtP0EvoPqSMG1%2BS47GpOQIz1%2BlX%2FfI3OvZcr7tsCx%2FiPyUelfFfLoHhaNEvSeMZ847UGxTo85vFxijomJaIqmqCeU%2Fj75eZb6%2Ft29iYTu1qvhXUOF6EF9FJqykxyYzseVdswivJaPHBGRenmFxFLQfIyrxke%2FYCs10GuH%2BYamMl7SaLoGMIbPm8sGOqUByh7J2NCJ2l2qOiT%2Fxg3lc07dWx6PNwm8pH9%2F4v5IOz%2B5pyaIu23NZ4ntU0Q578fxRN4LDpgo%2Fkrlwv8DP8Wdez%2FkN%2F%2BbCOwSAXOwLUpyQbrLuR0bGPsGKTJXyhx60kMtw83e6qZrmTxTLYghy11No9ZrHl75%2FtqSPI08lOG0CnsFRSP0E%2Fp5PEP59XAL9b9sfbHB9I1sdYN0%2FqBAW9WJIXH4VHhL&X-Amz-Signature=0382886cc7a4e0fcf6faa525dd1883285f9f1cd538403d8c27b1a0575a0aeaa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRCUGBH%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDptBJ8YiyQrhm7dpcd9YIS7eyLPo40OdXr0jUW78lgpwIgJFIHHpmDjX2ED2KvAQZ5nTju9YIibKTS15FoaymtZSUq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNGAoou00RZR9FlYsyrcA4tOuUThsX1zFT%2F6oLCXnRfJjMTSBg0v4s62LqVk1qbyyRQSHAfNBS7W41R6phU1XncqDtMgcWiOVs5W3HXnK%2FapK0GgR5sx2mAn%2Fq9tjDbpEOUcuK4Lf%2BxA%2F%2FlMb7TjkO2zzjS5plUnd2fZPy7lDyjhM122UuNipd%2B5w2ntY8bzN6Pgg7G7%2FYboTVeb2uJe1Cbbne%2FnauR1PiyY%2FrxtRXL7A0LPIi62cFNUnLQZt5FjGPi%2BlChMHlTnBMDZO%2BhtkwjIM%2BMgKTLqk%2BbCLmJjxD%2Bgiby%2B%2FEq7NiopjtWbH4ckDkrwXA4wKKJed5s5GvUIM8tzxMJtrPoyasx2cWgBpDAOAm7IC%2F87FkEaTPOaIHZBfq1VId4%2BZOVYkJbtp0d4KEyYSUI8Rzff7jYrLp7r38l6TBp42PlTcK5phl63F0JQuvsVzWfxhcRIS4fzcpaXCA9hjAdptU7TLNw%2BaleH9RevrmcX8Evuig3r3khCAIYnKYMffXijjglDU%2BNKUL2Y0OGwNxHv0jFj%2BPr6e%2BogV1pK96J1aWST0rBKNNFdqGtb2OqEbp1nZKexZPCBAlQQiF1CuIV1p%2Bg1RKM0pMdd5JpuUaby9UsdEDmeSgcpa%2B5YAzn2xgPqkbnfVofWMMrNm8sGOqUBx6YQJ3dXBk%2FRDUaBWpGXBx%2BX8tkjL6JzDCQaLfvaGpUyq7nn5cWEYh7Ghv%2B5o8rh2rvAyrg7NdXJekjW8aDkpp1vuGzf7lvy3gCvuNN%2Bq9KZGrTx7X7p5jPlQsJrbiQoExFmBWHM0JuycBKkmSC0nPFyiVYLCrTxJWld329jPLkoZ%2BPU9ifhpthendzSjePUlMUVVALjLFEkaG2Ll1PkaaNQlLoM&X-Amz-Signature=1ed1c8c677d3017901e3b94c9f7d45f08c52cbcfe887d82ca4eaf332a0805565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4IBVABD%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFuIsFfrpZLgsf9kZgi8FTMSXoVUqe0eofTFN1%2F8PhATAiBEMMtebh2kTHKzHedy03tG15kdt6UEvkPpLv7hcDSEwyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMbnknKYRYsGId1HBwKtwD5xgPXLxrcGk62zKthhViylmBBD4qmyuIXjiBfRMbGhubHSafxKgpNUWI1jKhwDhbCBnd%2FL8cOLMlfypGqiZg1TwVPs4QFuQ6xrjwXi7S3L3fdNPd0OUY2F81yi%2B%2FR5LAAcgrCq5rNoTfKz708Tn5u7WZJjU3020mBdQ%2BFPpcasCQ1KUIQS%2FTfgS71DFSP%2FeMXlnYoJf0eqAgtUIoZJX5FYHF%2BCLXc5tv1FKsPJscj5LkmXeOgju5sGt2l3UyS7uVVU3q0R8VB1UmM9OJHUS92WYTk9O2Sw9peNtdHIyskMyNF14CuHvmrr4o%2FHMPzv435hjB5WEPNYVspddH5UGx64rbRE6XismuaVjjfjcilbKdKr7KqDyGEVeeHHKbKuX%2FzR34YT3HBNe2KW0Sincpe%2FRZ9OkRjQRqqI%2F5fiLvplhV3fYVfNmyMjg5YJoYntCgKsdWWc7eAySneNBqqejfnMdrFcn50ZYZgMEu%2BpHKvb49K9tv58h3yUSoaYB18x4T6iXfJ88KcKEBIZpVTDNkUGp%2BRsXOQwP9Zc0c%2BQm4uTLAZSUgrykGvZWV0Ea0f4dEIvA48xqZ2PGQbTCk4qQRPVlRJ076UoU9uztuQRwI8dJNojdImvYSbNkdOVMwh86bywY6pgHIDkr1G3pevpyg7%2FtgEG8i%2FPRpDkC4pcmATVm6lB%2F%2BdFldDtNjfDXAnuDrXjrcmMHQne%2Fs08aX4ZIRNGgynGGOpVHkZQLngl98PERaVBpiLjxSRMVztRrsT6iTqJV8lX8Zkgy%2FvmRuG%2BLqU6vi0fOw%2F%2BdA5hEYqdtqdVi%2BLJCfQVhmdinCWBx9EfvYbJiO9%2BWQPkauDVsGhOC4UrX9j8MMRGXRV4f2&X-Amz-Signature=0c51a53df4b7ad5976adc5d2d07c40066ded2a507272d03e3edf98e78bfdf467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLWK6WW%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCID%2F25SJWOaY%2FKBkbYMzFHt8WbHSbafL10Xwq3M9RF2wIgd48E5uORQy3r6RQ8aplxHGC12oqOu%2F7nXcQ372V4SPMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBi3gvPx5DKu768W%2FyrcA4jo7LcqKwXyAm2PuRguUIcZqEdS6p6VdDbwBVIzj3CFFXo%2BzTDZx1o5JCuGFca3V4VgW%2BYIZAV%2FiXlwXn5hEk7wLkgCuRYcxgF4q2Ox%2FojCSTXRe5Xeu7LUDoQED0%2FxZB9zCzQ2vhwF92RStaXdPJGOBKfS%2BfdZHoT4YXf0%2BPhh01Irr8Uk1W8NDVzP%2FzodQ1N7fbVcz24UR521HQHu0ICNDW52q9Afh8tED9WDialeCK1hHNwFY23Itc9i4jf%2B%2B49WDsfpD4R0o8mo1i76hN1cCTmzoYqRP8TNzCgZANGXofNtsE8c%2FfTPX6CAzmp8O9lJuzjj70OqsbVy1eUFUYPdCkrt4rScc9UJC%2FH9b9qw4L7UQ08esc9fGb348%2Bfsr5zSo%2FjDk%2BwwZqNJ0U6%2FrVGD78KemsCxHyDQdGkc7ie%2FXH8brampb5o5SPrV3n8mJrKCTMtGyTBrtP0EvoPqSMG1%2BS47GpOQIz1%2BlX%2FfI3OvZcr7tsCx%2FiPyUelfFfLoHhaNEvSeMZ847UGxTo85vFxijomJaIqmqCeU%2Fj75eZb6%2Ft29iYTu1qvhXUOF6EF9FJqykxyYzseVdswivJaPHBGRenmFxFLQfIyrxke%2FYCs10GuH%2BYamMl7SaLoGMIbPm8sGOqUByh7J2NCJ2l2qOiT%2Fxg3lc07dWx6PNwm8pH9%2F4v5IOz%2B5pyaIu23NZ4ntU0Q578fxRN4LDpgo%2Fkrlwv8DP8Wdez%2FkN%2F%2BbCOwSAXOwLUpyQbrLuR0bGPsGKTJXyhx60kMtw83e6qZrmTxTLYghy11No9ZrHl75%2FtqSPI08lOG0CnsFRSP0E%2Fp5PEP59XAL9b9sfbHB9I1sdYN0%2FqBAW9WJIXH4VHhL&X-Amz-Signature=d7d60dda67d457a6cdc58b79fc90299244421e59a1e24178ebde7588567b0b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
