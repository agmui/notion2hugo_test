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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y455UXM3%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCrvUN8un0cKiydM0K3jUkfjRGVSMLrCMdLIFB%2BrLZArwIgJqCSUL8KRt6xU4NekvKtKKZPIlX5WZ2V20kb0Cr%2Bn%2FMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzywhl%2BcWkx9WzeAircA%2FXM3xHAawccPAJ19vP96UCGZ9Vvxl5JeC1ap5HPGG89jGI1pCMFMrbIt%2FPjCo3wmJ9xBkM2GCGQ1QjnzbyTcGoW%2Bp8yrHTUY3SCMgwC9A4lYcn54S6Dl4ps1InbH3YAJoqcBk61G15sN7rkAjePVzEQwPnPRjNSHJyBKuufBfBYLazKBUg%2BMvoThZBTXjKooWGXX3gJynkDmup65%2FTq2%2F4GflfDlGlO3kXRs2spiphA32j1E9MSFTAMf%2FUJM1UY3JeXUny%2Bg7EAplv1lAc39J8LV2pDP1jLUDxD7lozoEI0tdktTvxIlv4Sig05zdc2Wta2mpL06YIHQb0JrIjgdVuoKHjmXoHkbrNozRFFwfwHxrK9gVbv44mA2mpm%2ByKAT15RJ%2B4BvEX%2BfCPyQXYaRNtWgEYyyMIPRMB46QCdKDRu8%2BwQL9atovLD5iv9M3AnpI1towKw5tmUcgSvQhTbwtG8Won5371YU%2BQdQz5pxS4uOJlK0a0HdykCwyeANDU4zU1VVfCL23m7eXj1q64c3pcTXzyNOXBIhYYP2d5HOcO%2B1uuGFHmz3UmmwZ7pzbFfyLHUNDW2n7rFuWSLACjcFY%2BhUgOaYgPDgD9vBKSvbpwpOFYGOKezMatljIcqML36m8cGOqUBW4G3bkD%2BX4IhIAePN2x7oT%2BvaVjfWcFqFHMWcQ2UnNpLT7cntB%2ByYtVvw3UNTJ84Dxr8TGImVCCivP3XDMZnsZIA4YH1Za38iTh8%2B%2BzSTT6d1gfdCpS93X72pBvPY4ct8JZxSPpu3EwmDsCbbYTBFPLKNCNj8OYPYV0P5ZuUDseFNMre19IOgTA6i4fUEQo2WeeW%2B5mHUKF%2B1hbxD8%2F1bfExstN%2B&X-Amz-Signature=2c4576ebbadd7759193ebf338b6b3375a75714bc6be4648e3a516646a08cd902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y455UXM3%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCrvUN8un0cKiydM0K3jUkfjRGVSMLrCMdLIFB%2BrLZArwIgJqCSUL8KRt6xU4NekvKtKKZPIlX5WZ2V20kb0Cr%2Bn%2FMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzywhl%2BcWkx9WzeAircA%2FXM3xHAawccPAJ19vP96UCGZ9Vvxl5JeC1ap5HPGG89jGI1pCMFMrbIt%2FPjCo3wmJ9xBkM2GCGQ1QjnzbyTcGoW%2Bp8yrHTUY3SCMgwC9A4lYcn54S6Dl4ps1InbH3YAJoqcBk61G15sN7rkAjePVzEQwPnPRjNSHJyBKuufBfBYLazKBUg%2BMvoThZBTXjKooWGXX3gJynkDmup65%2FTq2%2F4GflfDlGlO3kXRs2spiphA32j1E9MSFTAMf%2FUJM1UY3JeXUny%2Bg7EAplv1lAc39J8LV2pDP1jLUDxD7lozoEI0tdktTvxIlv4Sig05zdc2Wta2mpL06YIHQb0JrIjgdVuoKHjmXoHkbrNozRFFwfwHxrK9gVbv44mA2mpm%2ByKAT15RJ%2B4BvEX%2BfCPyQXYaRNtWgEYyyMIPRMB46QCdKDRu8%2BwQL9atovLD5iv9M3AnpI1towKw5tmUcgSvQhTbwtG8Won5371YU%2BQdQz5pxS4uOJlK0a0HdykCwyeANDU4zU1VVfCL23m7eXj1q64c3pcTXzyNOXBIhYYP2d5HOcO%2B1uuGFHmz3UmmwZ7pzbFfyLHUNDW2n7rFuWSLACjcFY%2BhUgOaYgPDgD9vBKSvbpwpOFYGOKezMatljIcqML36m8cGOqUBW4G3bkD%2BX4IhIAePN2x7oT%2BvaVjfWcFqFHMWcQ2UnNpLT7cntB%2ByYtVvw3UNTJ84Dxr8TGImVCCivP3XDMZnsZIA4YH1Za38iTh8%2B%2BzSTT6d1gfdCpS93X72pBvPY4ct8JZxSPpu3EwmDsCbbYTBFPLKNCNj8OYPYV0P5ZuUDseFNMre19IOgTA6i4fUEQo2WeeW%2B5mHUKF%2B1hbxD8%2F1bfExstN%2B&X-Amz-Signature=ef7d553221bee12a5a025484063cf76e81ff1dd6caca7c0531fcf29b8a82ecbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y455UXM3%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCrvUN8un0cKiydM0K3jUkfjRGVSMLrCMdLIFB%2BrLZArwIgJqCSUL8KRt6xU4NekvKtKKZPIlX5WZ2V20kb0Cr%2Bn%2FMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzywhl%2BcWkx9WzeAircA%2FXM3xHAawccPAJ19vP96UCGZ9Vvxl5JeC1ap5HPGG89jGI1pCMFMrbIt%2FPjCo3wmJ9xBkM2GCGQ1QjnzbyTcGoW%2Bp8yrHTUY3SCMgwC9A4lYcn54S6Dl4ps1InbH3YAJoqcBk61G15sN7rkAjePVzEQwPnPRjNSHJyBKuufBfBYLazKBUg%2BMvoThZBTXjKooWGXX3gJynkDmup65%2FTq2%2F4GflfDlGlO3kXRs2spiphA32j1E9MSFTAMf%2FUJM1UY3JeXUny%2Bg7EAplv1lAc39J8LV2pDP1jLUDxD7lozoEI0tdktTvxIlv4Sig05zdc2Wta2mpL06YIHQb0JrIjgdVuoKHjmXoHkbrNozRFFwfwHxrK9gVbv44mA2mpm%2ByKAT15RJ%2B4BvEX%2BfCPyQXYaRNtWgEYyyMIPRMB46QCdKDRu8%2BwQL9atovLD5iv9M3AnpI1towKw5tmUcgSvQhTbwtG8Won5371YU%2BQdQz5pxS4uOJlK0a0HdykCwyeANDU4zU1VVfCL23m7eXj1q64c3pcTXzyNOXBIhYYP2d5HOcO%2B1uuGFHmz3UmmwZ7pzbFfyLHUNDW2n7rFuWSLACjcFY%2BhUgOaYgPDgD9vBKSvbpwpOFYGOKezMatljIcqML36m8cGOqUBW4G3bkD%2BX4IhIAePN2x7oT%2BvaVjfWcFqFHMWcQ2UnNpLT7cntB%2ByYtVvw3UNTJ84Dxr8TGImVCCivP3XDMZnsZIA4YH1Za38iTh8%2B%2BzSTT6d1gfdCpS93X72pBvPY4ct8JZxSPpu3EwmDsCbbYTBFPLKNCNj8OYPYV0P5ZuUDseFNMre19IOgTA6i4fUEQo2WeeW%2B5mHUKF%2B1hbxD8%2F1bfExstN%2B&X-Amz-Signature=2a78ff7010369a5588a8eb05327ea08b22737623c2529d4062a8e9ac2bf7e0d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKHDNVK%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCqZOio5h14v5C3OvustIoTxtJwg2J3SMkCrQacxPk8kwIhAPOKAPLY0jhfIbNjQslm0K0fcAG6Knwu34SZia221stzKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyisl6jaaF%2FdN9KAXYq3ANuzl5grt7NbUHOUtIfz1PPgkkNTzamK3LsihQ3kQ572A52Zx%2F9LidtTQm4tUJVX8BWXQauckkYxK8AD9D56j%2FRt6unjLVg5U97MUfPvbFbWj7ka1u3oTFZfcqlsnL2LC5tDB4V699KTAp0X0SQXF5qgE6v4rTDjCrf4yT%2B%2BjFyNs5%2FNZ9%2BE7c4MafwkXxPUgmcOwfOmf8cGTh%2FhnHaDUI2OeoVK4tS9MkUay6UAuWhE17iDg3E25nyztmTtOY19dfuvcOM5Q27TC7V7PioX0Kn2ZSzQlxoMyCe4AVX%2FtOX1EuONhkqQAdrK8vZj1hmPxYbx6Lft3U6LMRIKHHr3s6%2FRviktglvj9O4Z%2FyH36PbKQWIZuCidfF5v9Q9zytaZCZ0gG4o2e2H36ivpBKkh36PJ9XbfFBAWSuLhxSLNv9DNRy81To93s4YtJhIOOSBREPjE4psql%2Fu7E0N7bEPPTu6AMr0yL5yQq6wn7hoS3THJhP%2BWINOFzYGGVzK9T6My9liRfzkTTszwf6Z5XRwd0JKNnT0VHlgA2N9Jjrwg%2FMCXo%2FLsFiQ1RatP0xWgMli6ybcCHRLw8giJNNrds6RRKowXuUZG3nywnwEuOVDNmz9uVFihVHObXHIgdreuTCF%2BpvHBjqkAbbGJipcpptUH4d2M6VpV1TOPe7DAdjcDmmmrhOKx9K3owLNOFyzz6MbZf1cWkh5KsQ1aeUZrfKZKGUfGICdIHby8Q%2Fyu2la8CXhWvHU5r0F4wgbP6LvkPD3v0ahBasw%2FujMMIW3GuxjNV3CTGE%2BKvoFB0sxiaZvHJs2jDIuVZB3N21KaJ13a%2FQqmDDOiu6%2BepHCiTFUB2eMqh6qxiIGB%2FhhQOi1&X-Amz-Signature=06888cbe0ddbd5793b64ca872ff9a430ae28bb7e095c00eaec1864b8cb3ee32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKZBSDR5%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDvmYISHAUTp3inspbt9T3frYfNNXLCo1rDbBTUwWIbPgIgbLbhls6%2FG2mINvD6rAG3z6CzXEC7mRLzVcU9CpISqzMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzMwJs9%2FQMqhyiKvyrcA5E899NPv9lKR8TRVIB%2BVftNmvNKbvUHIvCXTfjkJXAh5wT4q%2BMwES044aJG3yJ9GwMptBAJ6yvhrXBf6uGAr5Z1AxsSFCyh%2Bj1qBnbto5R5W4UHwcM4LNgBzI7q4tRgxPgxxMk5ky7pc%2Fjd7%2B3DtZtYy1xq8BYQ45UYfx4Ui15F3bWxrzje%2B7%2F9Lh%2BinlrwSTlyj8tBqycTU9H83LmZ%2FCK48ErKABnbsPaA%2FWqXZEd1wB8a01b442ZdEMRsaptFpMD%2FK6SZG%2BZpZUUg47qkd8%2FeRYofibxKCbhYgAc50P3VytpsyqjMcxDQNt3ArJK%2BOCLPLRlMi0CPon1r6yZVocxF1kWIb7kKq2mtf25%2BtNDbnggwG8QWWUOolerH9k4cyT6BBh4GkKGr17KnOnJp7O5w8FOsXbFogAqaZmWKM2Oy2ZQnnudsoWww5a%2FpwMfK6KTSGakQNgLYA5cA2piIX%2BGrUqvqjU3lxpnaNvEldzTt4%2F1SndtR2BrisZjCzNVj5Hu%2B%2B%2BLZP1tCV4hU7Scat%2FcUVB6xHLu2E8CjW4JWh1g6TPAxIai%2FipeM3i8i7tu31ix1KDycl6KB%2FL9%2BqFLAX9fMvOgjteOk7%2BYiLc7XN8LH8QT0xfXI6Naa3AeYMPv5m8cGOqUB3JGSzJTYXbJHXStB99t65GB1SRS6sPD%2BKKzi85%2BPzlvn8%2BOtSt0yMt5ylZTrAds0qVQdkr3uP5Ta0wibMy8CiBS0Gx%2BmZQ%2F0C2c%2Bp0k1%2BpHuWCK2s1gYtGq9YQWZ2guRg%2FJL679Znra1itr6%2B19h0GsFKKC5dsjN6KPd6k5F5ovm3j3z95yzC%2FfKUQtflpmbN8nK6lTekBx7HRc9w9diY%2FgozU9n&X-Amz-Signature=d811104be59543e42a195a5bf683ab3bd2e2ff2f2ef3c490a18c860f1877b87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y455UXM3%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCrvUN8un0cKiydM0K3jUkfjRGVSMLrCMdLIFB%2BrLZArwIgJqCSUL8KRt6xU4NekvKtKKZPIlX5WZ2V20kb0Cr%2Bn%2FMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzywhl%2BcWkx9WzeAircA%2FXM3xHAawccPAJ19vP96UCGZ9Vvxl5JeC1ap5HPGG89jGI1pCMFMrbIt%2FPjCo3wmJ9xBkM2GCGQ1QjnzbyTcGoW%2Bp8yrHTUY3SCMgwC9A4lYcn54S6Dl4ps1InbH3YAJoqcBk61G15sN7rkAjePVzEQwPnPRjNSHJyBKuufBfBYLazKBUg%2BMvoThZBTXjKooWGXX3gJynkDmup65%2FTq2%2F4GflfDlGlO3kXRs2spiphA32j1E9MSFTAMf%2FUJM1UY3JeXUny%2Bg7EAplv1lAc39J8LV2pDP1jLUDxD7lozoEI0tdktTvxIlv4Sig05zdc2Wta2mpL06YIHQb0JrIjgdVuoKHjmXoHkbrNozRFFwfwHxrK9gVbv44mA2mpm%2ByKAT15RJ%2B4BvEX%2BfCPyQXYaRNtWgEYyyMIPRMB46QCdKDRu8%2BwQL9atovLD5iv9M3AnpI1towKw5tmUcgSvQhTbwtG8Won5371YU%2BQdQz5pxS4uOJlK0a0HdykCwyeANDU4zU1VVfCL23m7eXj1q64c3pcTXzyNOXBIhYYP2d5HOcO%2B1uuGFHmz3UmmwZ7pzbFfyLHUNDW2n7rFuWSLACjcFY%2BhUgOaYgPDgD9vBKSvbpwpOFYGOKezMatljIcqML36m8cGOqUBW4G3bkD%2BX4IhIAePN2x7oT%2BvaVjfWcFqFHMWcQ2UnNpLT7cntB%2ByYtVvw3UNTJ84Dxr8TGImVCCivP3XDMZnsZIA4YH1Za38iTh8%2B%2BzSTT6d1gfdCpS93X72pBvPY4ct8JZxSPpu3EwmDsCbbYTBFPLKNCNj8OYPYV0P5ZuUDseFNMre19IOgTA6i4fUEQo2WeeW%2B5mHUKF%2B1hbxD8%2F1bfExstN%2B&X-Amz-Signature=1a5c63884403497ecd9ccdb803cd831f57f7e33aedaed6d08b00d39b2b4ebbaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
