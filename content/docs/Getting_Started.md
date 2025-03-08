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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJYZHVS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAH%2BYeZgjE4H2dahr4JdQsAh8ZSK2LNAH3fs4EBX7Ca9AiAf5VLj9nN0DzXt24GKGNFYcUteA4NaYJHIiPMNDVxhVSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMYhZK%2BkXLnUDuxfoxKtwDu5y2dxVmSr00A6jUuDYBOegwEWKGJON3L8fZKj0H3gsWGyYws0EHvLedQtxQd1W3N9RvAtRHIlRGvVtAHxuYJsAKH071bXmHr52ZiGnHxSAGz9hQiy4VZHH6eqsRZcA2IUJMDlVNaiNyATu2uPdp0zKMkdtBVjVTYyRCxCfW2%2FkbMSC515xz%2FovlNX7qHSe1iBhj2dPU%2FYl2dx%2B3z%2FuyMtpjUTXGF59XEQggPiRrK%2FKLJobEplkvPsh4Ora5ifHlKxmEvtDmKJlK8KwrVqkOygFxj7UJPaKVOmUFKNwxmdvEP5zMniGsVqryh6h%2BTlXjBxQGvb%2FeXl1GTMbMUIFmtPKTxAexEpTDdwcFYplwSXsb4jpP3QtjVBmmyKBknavOtd1WAO%2FUeVEbxKX4Vnxa0FOPPncvc0XLB4eJYDKKes3cgYbjALY2vdJ5RLLRUO7VhOfwxSba2OQfYaJxHdtGg797vokybX2t0rXhuHpqMD19dmHoErtVynk2%2Ft4T06uUTx7ccSNTuTDP0YQNOiTR6g6ns4hFbwhzccdhJdQ9B%2Fz843l35kZloGoU7P%2BwkTXVnpvDEut13%2FsPzglOdZEJid4mEHL%2BKpyfnZjq74O6ZIzGYtqsZTTTdOFdqFIw9LKxvgY6pgGKtsH%2BZYQ7i%2FeYQ0T2By0zt17gWVADP%2BEbbyoHwYVlJbN8Q9%2F4HLtj40YrJfLGoT2XGyWY%2FQVg87Nal7Akpnf%2BMNddbfbDTAd6w%2BBD6RkDNEmTbD0oowpQweGXY9OY6eMT3LJCsiyT2ZGysD5S0MOmGJ7CwwV5il7BMoEptmH1ol28KLAaVRIOeQDasLvpr4NBvVyV3UCom4KvDEb4fc2OnFONpieV&X-Amz-Signature=946810d172a73615557cdcd43a3fe52960cdd4198558497d6a49a460edcf9bda&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJYZHVS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAH%2BYeZgjE4H2dahr4JdQsAh8ZSK2LNAH3fs4EBX7Ca9AiAf5VLj9nN0DzXt24GKGNFYcUteA4NaYJHIiPMNDVxhVSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMYhZK%2BkXLnUDuxfoxKtwDu5y2dxVmSr00A6jUuDYBOegwEWKGJON3L8fZKj0H3gsWGyYws0EHvLedQtxQd1W3N9RvAtRHIlRGvVtAHxuYJsAKH071bXmHr52ZiGnHxSAGz9hQiy4VZHH6eqsRZcA2IUJMDlVNaiNyATu2uPdp0zKMkdtBVjVTYyRCxCfW2%2FkbMSC515xz%2FovlNX7qHSe1iBhj2dPU%2FYl2dx%2B3z%2FuyMtpjUTXGF59XEQggPiRrK%2FKLJobEplkvPsh4Ora5ifHlKxmEvtDmKJlK8KwrVqkOygFxj7UJPaKVOmUFKNwxmdvEP5zMniGsVqryh6h%2BTlXjBxQGvb%2FeXl1GTMbMUIFmtPKTxAexEpTDdwcFYplwSXsb4jpP3QtjVBmmyKBknavOtd1WAO%2FUeVEbxKX4Vnxa0FOPPncvc0XLB4eJYDKKes3cgYbjALY2vdJ5RLLRUO7VhOfwxSba2OQfYaJxHdtGg797vokybX2t0rXhuHpqMD19dmHoErtVynk2%2Ft4T06uUTx7ccSNTuTDP0YQNOiTR6g6ns4hFbwhzccdhJdQ9B%2Fz843l35kZloGoU7P%2BwkTXVnpvDEut13%2FsPzglOdZEJid4mEHL%2BKpyfnZjq74O6ZIzGYtqsZTTTdOFdqFIw9LKxvgY6pgGKtsH%2BZYQ7i%2FeYQ0T2By0zt17gWVADP%2BEbbyoHwYVlJbN8Q9%2F4HLtj40YrJfLGoT2XGyWY%2FQVg87Nal7Akpnf%2BMNddbfbDTAd6w%2BBD6RkDNEmTbD0oowpQweGXY9OY6eMT3LJCsiyT2ZGysD5S0MOmGJ7CwwV5il7BMoEptmH1ol28KLAaVRIOeQDasLvpr4NBvVyV3UCom4KvDEb4fc2OnFONpieV&X-Amz-Signature=0f8071e51135a6536af3549b4ca002eb1c51a998ae59545c94ebba209b9a1f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHWGAMN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDkL2f4KgMVK720xAE95gD5zSrg%2F%2Fh4n%2FaU8H1JIc8AyQIhAM3zVpnZvaqeSw1TwzjRkIFYhcMa%2BjGvsfAzZ0xNDwsQKv8DCGAQABoMNjM3NDIzMTgzODA1IgybN3QmoVkh3JVGchcq3AM1TpUrYG4lE1S9%2B3yjFFRN7vGTPA0EePGCmX2ifVstqbBHzaHxnARX7eJ1ab3hjZaqGXwdl5u1VfQivKhsECn108SN14VkT6W%2F5HzUmQDTM8mhNuOY4%2FUVkX4MLp3%2FgoYgYHJzGe%2FL0Yrj4Cn6ykvVKr9ZozaHZOm4qSeZh1szwZHJmr0J3CftT5wZbL2NDzsBOxnn2%2BV6xm4uytzHvOyTIEgRpyPuY0y4rtMqbZ1rUhrvJ0%2FodwxtAf8jUNJnqvx7afmbIrvRFU9R4FJOWFZxggvc%2FXXBXv9AmlpdS1KYVLkDTk9llI86Fah00QDVxsQwjzuHB0iDsQilovCz14HQgRY44%2B97DWG%2BHuctWFJa5c%2FlJANzqPpYyc3iOr5GsSPF%2FhKufU36jihX43%2F56YRl4tLbliNH4nbT4ot5Hmh7pvi1Oc1ARu1KD9sU2o8bK19iGdpPkIQRLP7r8ImcSyieuxZ1vW3n9LDM%2Bl2swb3FYpK5zJDT7VCQP%2FNisNXVGCmXlrPimaWQ56sIZ2%2F3MSO4ngSs7FWMT5FTVs%2Bu2nD5a3%2FeGtEt4au2wClp8rOZi1IRSkSV0s4pExaqVSiLycr60SPQel11nQgE7ck89EZEK%2FiJLUio5Oy023EcTDDmsrG%2BBjqkAeyIp7LJz7O8D%2FtAPvjIFDVVpaKDKLZFw4k4al%2Fx55j%2ByNKjGMRPANEaJnqfTOQaNzUGeRU%2F5ltQrV4wGYaknrvUo1yLheKg1oPm8b9qJMGPvZmEdggFTUgVIpwl8lB1IupZgLEBqbIF%2BVjANwjmTH5a9Gn73CBLsKGrxl8xHnaiA4tNbVLGULD%2FsJ9Po1N5DQf40CBdD7e3PVK0zlxb%2F0IFwABa&X-Amz-Signature=b17dd1988ed513314f49ae0674d9275201743c60c661cd44479a6299f6892b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCXITWQS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFZ3niAX82YLACgVtTp4BjBEBlYFVyyMipphL7bN06t7AiB06aVtidwFJJnJ5sVwMnYJxFbGPFi4m%2FOTeJEz7ps%2Fbir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM1uWp%2F4FvjWtiPFiNKtwDcubF%2Bwhe1hipNbMveZrUXhNxq%2FfQkAGBZnCqWaQaKtSyao4QyJ5x1Kx%2BZhxNkjF4kwLIywnxL78vfuuPW0DRYV94gHWCfynLhQ7oj%2FkYxywoqCIg%2Bye68jRvHtO5z95Civ%2BR%2BIcKb0JhJko1r0sO3WEXCSFtIDJLvaIBsfY%2BjrfT%2FaUKM%2FMGJGuBkpLT7p6kM%2BdpkCdMNuPvCSfKKfL04aE2n94bmeYnQQ57BnWO6pnf8aChv6ab%2FVQwG1biNGBMpLkZAqPFAUEtfFvcJVVh7Yr5jMvcrY6J7sHErh1raJ0d8zOrMAsbh9TV6LYbMxdZ9USswW031Y0nbaGmdtfujVCSImKSn4lEhTRX8KTYDUoAwVlrppsxeMg8INLEMhVxnQue5IgJhx87EdK7z%2B9xrL4x57IbtybiQp1Ge%2BL8L%2FE6AqfceiS0emKG633QM8RltkBjPAniIktrmSkjuQINyBgpu%2FxIG1oOZUoSawn1lJd7Y47W6a3Xb4fe5O8ez7ByF9sd52YgrAhLCPUonWGPW2hlZQKyMus65%2B2WHdAgkKark4a6mXaOKMtE9jubfROk0%2B1bosc1ZgKkzEwEl%2B798j2KBCmztVNW0Pi7MzgqmN45exc8RUnRzYuIvPQw2rOxvgY6pgERICoInEwHyk1r2Av9mn7NndDx%2BESnJ4UfWrevInVw2R3666LY%2FjXp%2Fv4TeahQ7ywkvM8QqDo5WfjQRaOmsaRaQO0g7J97InSheISPKAvjmBDuEWgH3hJLMGcmhYFCWTc2O7hsu4RpHZPTe07zW2OsO8J3PpXBEWyAzSqFTpzX6ubbkgJJrFkc%2B81izR0Bbgjy%2F2%2FUdKESDHgHJBbCQq3HAKg9VAjh&X-Amz-Signature=ca60ac7914334b75696321b64bd025184000b1c81ec9f3a4aeb1dfc4af5ea4b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJYZHVS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAH%2BYeZgjE4H2dahr4JdQsAh8ZSK2LNAH3fs4EBX7Ca9AiAf5VLj9nN0DzXt24GKGNFYcUteA4NaYJHIiPMNDVxhVSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMYhZK%2BkXLnUDuxfoxKtwDu5y2dxVmSr00A6jUuDYBOegwEWKGJON3L8fZKj0H3gsWGyYws0EHvLedQtxQd1W3N9RvAtRHIlRGvVtAHxuYJsAKH071bXmHr52ZiGnHxSAGz9hQiy4VZHH6eqsRZcA2IUJMDlVNaiNyATu2uPdp0zKMkdtBVjVTYyRCxCfW2%2FkbMSC515xz%2FovlNX7qHSe1iBhj2dPU%2FYl2dx%2B3z%2FuyMtpjUTXGF59XEQggPiRrK%2FKLJobEplkvPsh4Ora5ifHlKxmEvtDmKJlK8KwrVqkOygFxj7UJPaKVOmUFKNwxmdvEP5zMniGsVqryh6h%2BTlXjBxQGvb%2FeXl1GTMbMUIFmtPKTxAexEpTDdwcFYplwSXsb4jpP3QtjVBmmyKBknavOtd1WAO%2FUeVEbxKX4Vnxa0FOPPncvc0XLB4eJYDKKes3cgYbjALY2vdJ5RLLRUO7VhOfwxSba2OQfYaJxHdtGg797vokybX2t0rXhuHpqMD19dmHoErtVynk2%2Ft4T06uUTx7ccSNTuTDP0YQNOiTR6g6ns4hFbwhzccdhJdQ9B%2Fz843l35kZloGoU7P%2BwkTXVnpvDEut13%2FsPzglOdZEJid4mEHL%2BKpyfnZjq74O6ZIzGYtqsZTTTdOFdqFIw9LKxvgY6pgGKtsH%2BZYQ7i%2FeYQ0T2By0zt17gWVADP%2BEbbyoHwYVlJbN8Q9%2F4HLtj40YrJfLGoT2XGyWY%2FQVg87Nal7Akpnf%2BMNddbfbDTAd6w%2BBD6RkDNEmTbD0oowpQweGXY9OY6eMT3LJCsiyT2ZGysD5S0MOmGJ7CwwV5il7BMoEptmH1ol28KLAaVRIOeQDasLvpr4NBvVyV3UCom4KvDEb4fc2OnFONpieV&X-Amz-Signature=0bf897c2d27ab52b6813a89eb1073d0848a08c4497c12dc3e4162620a89f6e87&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
