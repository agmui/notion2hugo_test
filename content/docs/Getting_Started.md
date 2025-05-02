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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDAUBGN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQChNEDuxef0PHc8qGOUX04UyuAVNfLpNgXLI0xQPsSISwIhALfPqrXmqjznC%2F6IEmBsOnS6U1%2BmUQ6vbwsUCSxQjC81KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxag%2FKnC3ACSdmnf8cq3AM%2B9WidHXfDl7wh%2B7tLRADzCjMk3dNfAiu2o8bGX3Xs1wu6CW42lLFBqdNAsSOnd4Z4R92Y8nFMb6FPZ%2F%2BmE50fSre7psR9p6MePs0mt23iZEh%2BiUcVNx%2FFZgu%2FvqV2IJxh0b%2BJh%2FggdxZhNdhlek0ZjryhSFMFVHDblEUmk28ScRfIkSRXIaSsOBIIbN69DrToyivUtQ%2F4KG2e8ZAtfGq%2BS%2BUEGW1y577vLkWsyj8cpsZv8SW1oDpVQVKIuMGzq2ROVU9FcEiUzyiqTDeUU1KKdoqRAF2xGn2ZtlBU%2FN82vQjqOdl8silFfxefZd8gOp84AtNNlpGSEd2BYPe8l66nwEliv1TSx%2BftlrI%2FQMYpBJ%2B2ZGpS6jN8lRJkWtt0T1Chg4p3EvryztqMga%2Fsw1S7LYc1tphmVlgOMqpUoSFUpZmPbkcru%2BsJOedBBVmOMFTllWO2PszduhiuaIhxRXQ7e7mAupqHGzWJB5bHpB4eNQbirz0WVDlqZPOCCIZx4kulG%2FPYFAcQdkrKnVQATXARbUXhP13%2FL1o9a9GAHHtKjckLcDdZ%2BWh0t%2B7KwO7HmX46R%2FJ6bGGKaj1dhxqcKoTk7BpbHS%2FBRi6fTCAU%2FvI6DEon8lt5rHbqkK7BkDDv5NPABjqkAU%2FlaxpA0rzGSNVaTKz0maHNW5%2FYztXVYDN6vKQK%2BGT6XMO88gthvqXUjQzGhDIODLWlk46vHGkg6GbCXtO6C%2BWw27XIe1sS7kom3mE1Jj%2FSWaz3j4s3RK7e6ec6C8PuxEA%2FwqGiaecdRWQZjEk%2BDBj5U%2Fj3XhOtKxsCIj%2Bme11nng%2Bza7a%2BSe887WyJuIdXO%2B3O2Qh5izLPBNzeaw7cmMQrEi%2Fe&X-Amz-Signature=017eeda627d00efcd7c6a6659b5629414e69eed1029873c94fe45369a7e50db2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDAUBGN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQChNEDuxef0PHc8qGOUX04UyuAVNfLpNgXLI0xQPsSISwIhALfPqrXmqjznC%2F6IEmBsOnS6U1%2BmUQ6vbwsUCSxQjC81KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxag%2FKnC3ACSdmnf8cq3AM%2B9WidHXfDl7wh%2B7tLRADzCjMk3dNfAiu2o8bGX3Xs1wu6CW42lLFBqdNAsSOnd4Z4R92Y8nFMb6FPZ%2F%2BmE50fSre7psR9p6MePs0mt23iZEh%2BiUcVNx%2FFZgu%2FvqV2IJxh0b%2BJh%2FggdxZhNdhlek0ZjryhSFMFVHDblEUmk28ScRfIkSRXIaSsOBIIbN69DrToyivUtQ%2F4KG2e8ZAtfGq%2BS%2BUEGW1y577vLkWsyj8cpsZv8SW1oDpVQVKIuMGzq2ROVU9FcEiUzyiqTDeUU1KKdoqRAF2xGn2ZtlBU%2FN82vQjqOdl8silFfxefZd8gOp84AtNNlpGSEd2BYPe8l66nwEliv1TSx%2BftlrI%2FQMYpBJ%2B2ZGpS6jN8lRJkWtt0T1Chg4p3EvryztqMga%2Fsw1S7LYc1tphmVlgOMqpUoSFUpZmPbkcru%2BsJOedBBVmOMFTllWO2PszduhiuaIhxRXQ7e7mAupqHGzWJB5bHpB4eNQbirz0WVDlqZPOCCIZx4kulG%2FPYFAcQdkrKnVQATXARbUXhP13%2FL1o9a9GAHHtKjckLcDdZ%2BWh0t%2B7KwO7HmX46R%2FJ6bGGKaj1dhxqcKoTk7BpbHS%2FBRi6fTCAU%2FvI6DEon8lt5rHbqkK7BkDDv5NPABjqkAU%2FlaxpA0rzGSNVaTKz0maHNW5%2FYztXVYDN6vKQK%2BGT6XMO88gthvqXUjQzGhDIODLWlk46vHGkg6GbCXtO6C%2BWw27XIe1sS7kom3mE1Jj%2FSWaz3j4s3RK7e6ec6C8PuxEA%2FwqGiaecdRWQZjEk%2BDBj5U%2Fj3XhOtKxsCIj%2Bme11nng%2Bza7a%2BSe887WyJuIdXO%2B3O2Qh5izLPBNzeaw7cmMQrEi%2Fe&X-Amz-Signature=4b128f22e43d913883464b667bbc0dd459679dbfd4a7fb6ae7d4d9577f39ae97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDAUBGN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQChNEDuxef0PHc8qGOUX04UyuAVNfLpNgXLI0xQPsSISwIhALfPqrXmqjznC%2F6IEmBsOnS6U1%2BmUQ6vbwsUCSxQjC81KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxag%2FKnC3ACSdmnf8cq3AM%2B9WidHXfDl7wh%2B7tLRADzCjMk3dNfAiu2o8bGX3Xs1wu6CW42lLFBqdNAsSOnd4Z4R92Y8nFMb6FPZ%2F%2BmE50fSre7psR9p6MePs0mt23iZEh%2BiUcVNx%2FFZgu%2FvqV2IJxh0b%2BJh%2FggdxZhNdhlek0ZjryhSFMFVHDblEUmk28ScRfIkSRXIaSsOBIIbN69DrToyivUtQ%2F4KG2e8ZAtfGq%2BS%2BUEGW1y577vLkWsyj8cpsZv8SW1oDpVQVKIuMGzq2ROVU9FcEiUzyiqTDeUU1KKdoqRAF2xGn2ZtlBU%2FN82vQjqOdl8silFfxefZd8gOp84AtNNlpGSEd2BYPe8l66nwEliv1TSx%2BftlrI%2FQMYpBJ%2B2ZGpS6jN8lRJkWtt0T1Chg4p3EvryztqMga%2Fsw1S7LYc1tphmVlgOMqpUoSFUpZmPbkcru%2BsJOedBBVmOMFTllWO2PszduhiuaIhxRXQ7e7mAupqHGzWJB5bHpB4eNQbirz0WVDlqZPOCCIZx4kulG%2FPYFAcQdkrKnVQATXARbUXhP13%2FL1o9a9GAHHtKjckLcDdZ%2BWh0t%2B7KwO7HmX46R%2FJ6bGGKaj1dhxqcKoTk7BpbHS%2FBRi6fTCAU%2FvI6DEon8lt5rHbqkK7BkDDv5NPABjqkAU%2FlaxpA0rzGSNVaTKz0maHNW5%2FYztXVYDN6vKQK%2BGT6XMO88gthvqXUjQzGhDIODLWlk46vHGkg6GbCXtO6C%2BWw27XIe1sS7kom3mE1Jj%2FSWaz3j4s3RK7e6ec6C8PuxEA%2FwqGiaecdRWQZjEk%2BDBj5U%2Fj3XhOtKxsCIj%2Bme11nng%2Bza7a%2BSe887WyJuIdXO%2B3O2Qh5izLPBNzeaw7cmMQrEi%2Fe&X-Amz-Signature=e6abf994299c60fb14b28a4ae167966d72b9cfa8bfb5ae1b079d1be19a6b3680&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVQBFIEJ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFg%2FGq0e1Iqnfz5JmYU0f4Cx%2BrpCpTgosoIhkUhHuKLbAiB38mfsZOqrW8PBVcPNseLxv3XxRaO%2B5Ylo29RwVOU0ySqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOqkybwdzzipxLWsKtwDwKh2A3lBflmTAgzMOWLIxyBZkfr6Bnd19SictgQEPca1ycKW9yrnARpQzsosSCbQLjIjwFiOq5J0QnOF1Mk%2BnG85IFloFBoDtSVfSrNz4Vd%2F51imDT1vmc0X6KuGHrfYQKEQMhPH64IBDcjtDoyEG2XoWVxgdm9y%2BCou0sRzELTf4EwZ2LbcmWUX82y8lUsSQ%2BnA7MIXkfYbvqVBR4quy%2FtAEMMVOBDe8BksNhemmI1mRMvvMgwvtmf69mmlwtK1mtnVng%2B1D1ENf3ebcdLxFYNlQzmfYtulOAz%2FezDaDXpYz1WHhrqmEKOuQf%2FCRV4uai75o45Mj6P39PhOrSilf2lbWOk8Ad3DBQmUKje2pPXZygZCKV6lp45pUrZGps6w%2BZt2nF0BH5N2Q5EYGhkQ7OsV11UV3MXe6u5VBXKOBW7Ci0tPYDdCDtxAswI6T1o90BlzUVJSAJjSJQNih7aJVHOiRp8FesiA2Dti0eG6c8QMnaryy8kbxAhGnmOTmUN14ACenZvH%2BAofFfLJK8Vs8J%2FGTcFuT3IOqptTmu9VWlqptnt62J6bk6LniZOPXSFdEsO7pKQU1kTQq9833ZO1rBSCkfrPmC3dgVFjnBRvnObL4MhyJuTBvIV8fWAwiOXTwAY6pgFIk2ZiQoqoLCq6rry8%2FdEa91PZl3TnxpuEhzwUyYdqUHIcENromDH2z1KH2QjQk4mVONi%2BSIf6cvf%2Bm0Qx8cRtBXtFaK6OoccY2dobu9p%2BUjT2HtCo2HCSmT865druS5Kk0%2BU%2Bmygcw%2BmH4Bnunr6QaOjjRN5GxWiyIT8OPn27BseLfkUV6kpH%2F7%2FJ%2Ba14OJAlV9lT0LSEFkuh2W2rMx7bH%2FTfFDbU&X-Amz-Signature=cae538c8022815e6ff61022d0ed5590a57e12f1784d3c04f8019d88f14ec37ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGO2SAY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIHdvjvXaEYcgXuyiibD7RFP7ZK6xFLn2m5v2KW3nL7whAiEAr3YfARYhz%2B6ZXjOC15W3TOHkYXfITS2Wvx8fSj5FzlIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfglrOzhGgBBhCXYCrcA8sYyfS62bTXj8dmlS9FJBD5uM13TFAZZJWX%2FlFzdqTJhmyadV3ij0oHBqI%2FYed1RWjbId8pwv34z5ZKYQ6V%2FpZMIMWjepqXj9a6dbwLPY8xSLMGioZ9ZHudRDFol4ERMe%2BzgYKnQ7XToB5u75c7cD6nnwf1WVfYbs7n1M4RavQ%2BMTlXj%2FrCOyM9u9RsAKtMPf3Ul2EWhB%2BskrlDLbCXa0EtYdW4cs0mT%2Fc%2FpQGhDKfDMdWDDPA%2BuukquGbuvPtYghZXTTpVR7O194XeUmzWuVaAFM0f8zNCpTjpxmU9gO6O5dxPwRjZ9%2Fjcx5msCiY4YDuf3kOcMM0OYJNYLg%2Bwc%2BKB7IySknfqrs9Bl1T5Oq%2B%2B0CP%2Bv1YhRfc2QA0XeEQDlNoeZLj6GmE8qzddD4DIMVBgoCsfRD9N7QKUksNNUFsPVT54hy2CRzvPWBjCKvDyzslT9Ewy%2BJcGRi3pDF9agsNtePVrWz%2FNybFftNCn4YBi3a6V593s03wzTQXqTNhCgdFVn9taqwPSm3ML0MxABTqGHjblmvNRdEbV3pWnOf6%2FVNiQ7KMCCP1zpHqAOWu180x0PuWzPrT1A2xyar40WzxDttLOZgg1apAtL8b5lSLFCyH8e9ClRmoJSnZeMI7l08AGOqUBrIua1jmiX7SfBSXKoLJllrChaYDEIbKzO8MSgRqbfuMTyEvG9dEXhhzlAObHNQVHXclgXBIScugE8aaMWNhmDSHU2eLuoDRu2Lx5%2F0sbk2XCAmLGuMsDFepszatVtGThM34J972RNPraDWdCnbgqGGejQ%2FrmUUuPesUPZ5pDP1qJfB4XtWhT1Yykx9qXpKBzEd7PnTUc5m0m9PAE10cNH9TbbJKr&X-Amz-Signature=781d9fe1509dda9b32c5b547d6261e34af242a8c0f5f021a351e3a297280cbae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDAUBGN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQChNEDuxef0PHc8qGOUX04UyuAVNfLpNgXLI0xQPsSISwIhALfPqrXmqjznC%2F6IEmBsOnS6U1%2BmUQ6vbwsUCSxQjC81KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxag%2FKnC3ACSdmnf8cq3AM%2B9WidHXfDl7wh%2B7tLRADzCjMk3dNfAiu2o8bGX3Xs1wu6CW42lLFBqdNAsSOnd4Z4R92Y8nFMb6FPZ%2F%2BmE50fSre7psR9p6MePs0mt23iZEh%2BiUcVNx%2FFZgu%2FvqV2IJxh0b%2BJh%2FggdxZhNdhlek0ZjryhSFMFVHDblEUmk28ScRfIkSRXIaSsOBIIbN69DrToyivUtQ%2F4KG2e8ZAtfGq%2BS%2BUEGW1y577vLkWsyj8cpsZv8SW1oDpVQVKIuMGzq2ROVU9FcEiUzyiqTDeUU1KKdoqRAF2xGn2ZtlBU%2FN82vQjqOdl8silFfxefZd8gOp84AtNNlpGSEd2BYPe8l66nwEliv1TSx%2BftlrI%2FQMYpBJ%2B2ZGpS6jN8lRJkWtt0T1Chg4p3EvryztqMga%2Fsw1S7LYc1tphmVlgOMqpUoSFUpZmPbkcru%2BsJOedBBVmOMFTllWO2PszduhiuaIhxRXQ7e7mAupqHGzWJB5bHpB4eNQbirz0WVDlqZPOCCIZx4kulG%2FPYFAcQdkrKnVQATXARbUXhP13%2FL1o9a9GAHHtKjckLcDdZ%2BWh0t%2B7KwO7HmX46R%2FJ6bGGKaj1dhxqcKoTk7BpbHS%2FBRi6fTCAU%2FvI6DEon8lt5rHbqkK7BkDDv5NPABjqkAU%2FlaxpA0rzGSNVaTKz0maHNW5%2FYztXVYDN6vKQK%2BGT6XMO88gthvqXUjQzGhDIODLWlk46vHGkg6GbCXtO6C%2BWw27XIe1sS7kom3mE1Jj%2FSWaz3j4s3RK7e6ec6C8PuxEA%2FwqGiaecdRWQZjEk%2BDBj5U%2Fj3XhOtKxsCIj%2Bme11nng%2Bza7a%2BSe887WyJuIdXO%2B3O2Qh5izLPBNzeaw7cmMQrEi%2Fe&X-Amz-Signature=426fe675272a04a2e9e8f5b85a6083ae9d897d97a51d6e0858f4622b896dccb7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
