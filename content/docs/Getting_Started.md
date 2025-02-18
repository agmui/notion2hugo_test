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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHKVHREQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQD0zojVG4qs01zsTf5CcUimSCtGUSC9rY8ASzBI2TLQBQIhAIFLMv3oq2HcSaXd2H%2BPAY7rg7BHE21QARYuUJlFeq7NKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaJOgfPFL7wT%2FYL0kq3ANeXZFXzhn97NJ1nJShgLKnkqEOV2vfJDMNOFBNH1UIfG%2F936WLJ946MBgsmFenoSg%2BCMTsTW5gkZNuCK53WXA%2Bsnq2Dq8nmG7Z5M8b%2BMunjXoBdGyhtduFu5o8vNyfYqnEBa2TNU7qfuOZ5pvUQuprj06OY0zieLqdb9Fz4%2FxV9ADd4ruuPI4OmQ05Essr5zDhcKfTBzch%2FCFSXmZpuU2%2B0Chl0fBWk8GS2o3eIuTb5Bt4TrSjRZS8b5cErMgVM7gJn5T2i7%2BFh%2BYZqiA8wGxHQwiu%2BzH2jxulgYc43%2BydVGT2l%2BIkw2RYRK5d2r2DtDXXSiLKR4yHnThSXJyECKbSncoCntFhllI4k%2Ftg1eVfP32k%2B%2Fn2far2IMLIjirbSSLUNZ2I24et4nxlfIUlnb6PCmdhi4wLzzKaAMC4IAP%2FT9f5%2FKZdDP7vmomN7oPWvBag%2BbJ3I24ZodjarrKuIP3Kh7BPYF4YuyQij3qMzJJbpTX8sDqjjCrUipJ4P%2FM1mPa%2BvZvFSvo7tsTG9ESVILWA7PvtpikvpHXIunxQqmNHmdcxSEmqcdpyNTu2mImFjacc39S5fZ5YYcncwel7FBliN49Zy1WKWW%2F3udPmFcuwptxBN%2FTpxjZeIMCHNjCb%2BNG9BjqkAXyxC1bfG0GS0uJ1qp0F2PVCsTjRZ5IALoycoWQVDDpKtpJ7tRolqR0cDMpcVdVK4cCF2CYxwdO%2F8BdXAOEtIz%2F7b%2Bkz7lDgzOCx2%2FXSmMpdEFIxp88xDDh1NVTlps2S%2FE8mTxV0hxMpaq82M%2F5nLYOKEpsTPbHM01aCNgKNLC0XybNQtRKJMCnI7wGPuTAHHO9OOXwVhTDaXOkxpPK8Cw5l7Ywg&X-Amz-Signature=54b40de4833f170f20456c7cef58610adece949729d16b70076d9b45b8c91761&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHKVHREQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQD0zojVG4qs01zsTf5CcUimSCtGUSC9rY8ASzBI2TLQBQIhAIFLMv3oq2HcSaXd2H%2BPAY7rg7BHE21QARYuUJlFeq7NKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaJOgfPFL7wT%2FYL0kq3ANeXZFXzhn97NJ1nJShgLKnkqEOV2vfJDMNOFBNH1UIfG%2F936WLJ946MBgsmFenoSg%2BCMTsTW5gkZNuCK53WXA%2Bsnq2Dq8nmG7Z5M8b%2BMunjXoBdGyhtduFu5o8vNyfYqnEBa2TNU7qfuOZ5pvUQuprj06OY0zieLqdb9Fz4%2FxV9ADd4ruuPI4OmQ05Essr5zDhcKfTBzch%2FCFSXmZpuU2%2B0Chl0fBWk8GS2o3eIuTb5Bt4TrSjRZS8b5cErMgVM7gJn5T2i7%2BFh%2BYZqiA8wGxHQwiu%2BzH2jxulgYc43%2BydVGT2l%2BIkw2RYRK5d2r2DtDXXSiLKR4yHnThSXJyECKbSncoCntFhllI4k%2Ftg1eVfP32k%2B%2Fn2far2IMLIjirbSSLUNZ2I24et4nxlfIUlnb6PCmdhi4wLzzKaAMC4IAP%2FT9f5%2FKZdDP7vmomN7oPWvBag%2BbJ3I24ZodjarrKuIP3Kh7BPYF4YuyQij3qMzJJbpTX8sDqjjCrUipJ4P%2FM1mPa%2BvZvFSvo7tsTG9ESVILWA7PvtpikvpHXIunxQqmNHmdcxSEmqcdpyNTu2mImFjacc39S5fZ5YYcncwel7FBliN49Zy1WKWW%2F3udPmFcuwptxBN%2FTpxjZeIMCHNjCb%2BNG9BjqkAXyxC1bfG0GS0uJ1qp0F2PVCsTjRZ5IALoycoWQVDDpKtpJ7tRolqR0cDMpcVdVK4cCF2CYxwdO%2F8BdXAOEtIz%2F7b%2Bkz7lDgzOCx2%2FXSmMpdEFIxp88xDDh1NVTlps2S%2FE8mTxV0hxMpaq82M%2F5nLYOKEpsTPbHM01aCNgKNLC0XybNQtRKJMCnI7wGPuTAHHO9OOXwVhTDaXOkxpPK8Cw5l7Ywg&X-Amz-Signature=65fe0b141bf26ee603c942accb4ae136c679289f080d97e3c8e3fdb466e4ee88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665FADDAZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEMVPnKuURyq0qt4WxCHPQcN7XXZHLIEnsdFxGOF3Sr3AiAtLeAq326yTtgSr4eCpi7W3cl4Md%2BB5noXu8TTGhqJDSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDirbnSOLDOhvWzB%2FKtwDndWBfnCTWXa0mjjz0PhCa7l1YDlE23WuNaVUpoC7SLnrHf4VKgIfUEE5ebI%2BbI%2F99Bp7LBxCMDiHyDAfoiEpaNGaVo8yKrf6NBefFWCA0j3VkF4qvZogYbHPYSjoQ0BZVYVNYPU5QvA7mTorRQFbhz%2BTxiu2CvjkJ5EM953Lxuq%2Bp77ZnDV9V2L4DDo8G5UCfpg6mQ5Rw6isc%2FiglU8TurGFNc2%2BVSiiL4fgYOUwxHMYyL9jrV4W8btecQo8Bss1EEZWGsXQjF4aYgiXtehGdAa2r6x0Zp%2B9qQivTU%2F566%2BQWHaPqrwRCgx1IdGhEWpsb28dmy4ZessT6y4%2FBxCmgsnh32skZkWEp9xrhpd%2Fi0fKXomTZ1tdEvKZ5pfPYiABuWi9JeFsKi8G7fa8pOcm12emmk6W1eEe7ch715LX4ztwQlw2rms4W4gR2PUACuCRYU0UxKTzyXYgjWQYcCX4jBc4aKIkhJx%2FJzDURwQAt2zwxuinWGh1Ag09%2FLj%2FPeE96rW8D%2FpbMWGCpeDZr%2FwOofvZkQ8wdnpXhdrm8cxWCriLGKoHrt%2F2uioWKCKjI%2FQi4TuKvcbCBTBugh5One3ZR%2Bga33YCsy%2FFOMQG1CODzCbogwnpecDtqVMatNkw3ffRvQY6pgE3HOeDtREh2ULb297glW5jkuKQdqcyms%2BI42v%2BBtmWv%2BC4nWKs9Lv9xPaCzWRIRLTLkeongt9oSBXgG1mK5YRWw3y5MlE2%2BTaZtH6snVPgk4HBk5IYU7Ss5f70ulns%2BNKS1xpfem6k3mNnGEIkkD6ulZDLai%2BkvT25T91CjxlBb0DsWC96Bc7eeCyOe49IuKvLfO61%2FBxbXUoRGh4s86Zbwrk12i74&X-Amz-Signature=52c34cd16a0cf107708820a55fc6eff85fc107263ab4a779ab9b729b6b9b0b87&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGHL5VG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCo8iV4fZKngY9%2B8IEQCYvKy%2BL5g1u3wKbg5a2CMgpXiAIgb0P5uVjlsWG040GIK5%2Blr6FzU2Vclv0NMKu1ZpsI4ikqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKaQXtkJ1XkQ0dwhyrcA%2FNscUWtpwYO9oKOQcblHN5AHZlEuFudForTtb9YLqeFPIEHkTk9jgXw%2BHl4K%2BRU31C3K8zPIHHAw%2FmeIXYQiMncWH8MtdbwH7n5aHNSvKygkxLuDEEORq26oQXpUIf5iPXiSr6IzsLnFl%2FhjU7ox1w%2BSY1eoZ6zcNBNWS%2FsDgQd15ceZIy6aXrvN1pt3N4iCp0PlmKewky4T3fZyoUNY7eSnGfthV%2F%2FSY5lhigS1jO8DWy5Wdwp3sBDFuCa8DiwRsGpYc9LXkPI3vo0r9zFRgkrDz7%2BwrrB%2BUhjCzyGCn%2B1KCBXlWZRO6jwJqGJhxSD0u8EsiSPCfF1PnOSonJkFBgXOxVN6dRz2irlrZ3EDTM2uZeqdQUkxdMxnut6GMFsQtm3I%2F4bXsjBKRPEsKGrJB3oxjbBI1kvm9U5jCzJdWJvX648VMg3Gz8j8EFCGotUuoKUmIg5JnhHvte7L%2BO3jvUA%2Buf%2BfyZOwuUrawocvzzE6eKzqIbIhX0UPta9RjWFquNT74%2BVSmENq1ZgQHyj5s%2Fd%2BCxrb5MGL7xWbVbQqsj326g9D34HR2LV8C1jIGZEOxeLIgxawYnhxPRvY1nqpgJeV%2BW2Z76MKM9kSg0glVm5aXvXLJ9cQQpfFAg6MN730b0GOqUBawX1ba%2B%2BW2JsfuTCkZPN5j4%2B%2FFb3vyjuD0aANAAO8Z1OI6ZgkfckA4tSyHcJUhrHejtW8%2FjJMmykaAUpaSUjgMonaYiapcWxScpchXvBGeOCrruabRwfZgyQrkGPFzj5W2PNMf%2B9WsCSVj3jfEh5j90WjRQYCblRDScrkxrM1pJlw05yd6RmQFBRs7FdNrU9A2vnA2z4a9lnBvP21%2Fo77NsWNfua&X-Amz-Signature=2897d7aa72ddbd32fa9c622beba4cf6215b5144f58d47724d72a3d8d24114a76&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHKVHREQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQD0zojVG4qs01zsTf5CcUimSCtGUSC9rY8ASzBI2TLQBQIhAIFLMv3oq2HcSaXd2H%2BPAY7rg7BHE21QARYuUJlFeq7NKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaJOgfPFL7wT%2FYL0kq3ANeXZFXzhn97NJ1nJShgLKnkqEOV2vfJDMNOFBNH1UIfG%2F936WLJ946MBgsmFenoSg%2BCMTsTW5gkZNuCK53WXA%2Bsnq2Dq8nmG7Z5M8b%2BMunjXoBdGyhtduFu5o8vNyfYqnEBa2TNU7qfuOZ5pvUQuprj06OY0zieLqdb9Fz4%2FxV9ADd4ruuPI4OmQ05Essr5zDhcKfTBzch%2FCFSXmZpuU2%2B0Chl0fBWk8GS2o3eIuTb5Bt4TrSjRZS8b5cErMgVM7gJn5T2i7%2BFh%2BYZqiA8wGxHQwiu%2BzH2jxulgYc43%2BydVGT2l%2BIkw2RYRK5d2r2DtDXXSiLKR4yHnThSXJyECKbSncoCntFhllI4k%2Ftg1eVfP32k%2B%2Fn2far2IMLIjirbSSLUNZ2I24et4nxlfIUlnb6PCmdhi4wLzzKaAMC4IAP%2FT9f5%2FKZdDP7vmomN7oPWvBag%2BbJ3I24ZodjarrKuIP3Kh7BPYF4YuyQij3qMzJJbpTX8sDqjjCrUipJ4P%2FM1mPa%2BvZvFSvo7tsTG9ESVILWA7PvtpikvpHXIunxQqmNHmdcxSEmqcdpyNTu2mImFjacc39S5fZ5YYcncwel7FBliN49Zy1WKWW%2F3udPmFcuwptxBN%2FTpxjZeIMCHNjCb%2BNG9BjqkAXyxC1bfG0GS0uJ1qp0F2PVCsTjRZ5IALoycoWQVDDpKtpJ7tRolqR0cDMpcVdVK4cCF2CYxwdO%2F8BdXAOEtIz%2F7b%2Bkz7lDgzOCx2%2FXSmMpdEFIxp88xDDh1NVTlps2S%2FE8mTxV0hxMpaq82M%2F5nLYOKEpsTPbHM01aCNgKNLC0XybNQtRKJMCnI7wGPuTAHHO9OOXwVhTDaXOkxpPK8Cw5l7Ywg&X-Amz-Signature=c07615810e65f7b7c20f170163473712fef6fc8ba0534f52a61428aa4b0e7eb7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
