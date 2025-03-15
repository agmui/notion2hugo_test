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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JDF7BO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaaOQw4HrvS4OvbLKxd2il9%2BSlt2%2BzZKXQ%2FsTSTMtA1AIgVFW%2FnMD55GqchWhr3CtAtuR3FkFSsLXlL5CECBA6yvEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHcpbFxTr7ty0NPD7SrcA%2B2GN51ZPUWzlbsJWbAwIH%2BFqszPGNHtRXzk2tJ8qduI5TETWrWO0lefsawgNi6lt2nZvfVmoFqESkCGgu5AjlPSjLO7129P2ij2PzxGVRVZ1dg%2BQIebzHOAQ2MPaehBDcWRK88%2B9t2rtxtS5a1JFEgruCcbln22zLlUuQgn%2F0sD%2FOqGVABDLbR9zFD1UbXz%2B7dsr1SA7C%2BI8%2FqHuiPRTycK1E82%2FUXaCpPgytnA%2F9ksCAkyJIl%2BmZFAN8kMNqv44VgvLgbmkGQhCgsrucb6Md%2F4v7DHaWGFcGiXCOWN3xvQtMpRbaP1BIxGr%2FiM%2FSru0DbLjjtE%2BFTGfSEPkMjavpYO%2F5TnOZscXuKErCcVBvc41%2FRYCK62DqeC9PpPN3v1wncQlc9aYmV3bVGsYzbMBrZ%2BeoCPnI0GUIbJJgjdIQIJVvrMU%2B1rlwPgyYfmY4o7xQARftsB%2BE7xWLHSscfNDd2fUfhAs8ttT9ZEb4NikLxapoB8LKz5DPwRfNmbBbTyyYY%2BhTUck9JCvTt%2F%2F7DWbIfoMD2F5%2FqMq9%2FtZIK%2Bny7b7LIdsRIsra6OwX%2FSneKJxy8iotSvnScpyprr1X5TUo6T7CpbtdQ2sChmJKtEBnS62DouTDeVSiCiwNToMKCO174GOqUBaVoECyqFzuGMNwondvJi203SB8zzLsb2aKkWUKcjVZ2qvvOGhKh04AiSZlO4g4NJppOvkGardboWHB6yTnqOzGiFEd1hD%2FDugxmKHy8exGMdS6jj4CdgEt2XfYZixrc1K69L8NqMiPMQl0ABOTsE7MKFdkjRbORZW9aA0DA5erQGCrb4zqaiCd%2Bwh9qa2nU062Fm9KPCQkj6ynURbZ66WEMo5faM&X-Amz-Signature=c504cd3817cfa941f19576f0e3264f9d84d2eccfb53a0974a27b01ba32060731&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JDF7BO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaaOQw4HrvS4OvbLKxd2il9%2BSlt2%2BzZKXQ%2FsTSTMtA1AIgVFW%2FnMD55GqchWhr3CtAtuR3FkFSsLXlL5CECBA6yvEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHcpbFxTr7ty0NPD7SrcA%2B2GN51ZPUWzlbsJWbAwIH%2BFqszPGNHtRXzk2tJ8qduI5TETWrWO0lefsawgNi6lt2nZvfVmoFqESkCGgu5AjlPSjLO7129P2ij2PzxGVRVZ1dg%2BQIebzHOAQ2MPaehBDcWRK88%2B9t2rtxtS5a1JFEgruCcbln22zLlUuQgn%2F0sD%2FOqGVABDLbR9zFD1UbXz%2B7dsr1SA7C%2BI8%2FqHuiPRTycK1E82%2FUXaCpPgytnA%2F9ksCAkyJIl%2BmZFAN8kMNqv44VgvLgbmkGQhCgsrucb6Md%2F4v7DHaWGFcGiXCOWN3xvQtMpRbaP1BIxGr%2FiM%2FSru0DbLjjtE%2BFTGfSEPkMjavpYO%2F5TnOZscXuKErCcVBvc41%2FRYCK62DqeC9PpPN3v1wncQlc9aYmV3bVGsYzbMBrZ%2BeoCPnI0GUIbJJgjdIQIJVvrMU%2B1rlwPgyYfmY4o7xQARftsB%2BE7xWLHSscfNDd2fUfhAs8ttT9ZEb4NikLxapoB8LKz5DPwRfNmbBbTyyYY%2BhTUck9JCvTt%2F%2F7DWbIfoMD2F5%2FqMq9%2FtZIK%2Bny7b7LIdsRIsra6OwX%2FSneKJxy8iotSvnScpyprr1X5TUo6T7CpbtdQ2sChmJKtEBnS62DouTDeVSiCiwNToMKCO174GOqUBaVoECyqFzuGMNwondvJi203SB8zzLsb2aKkWUKcjVZ2qvvOGhKh04AiSZlO4g4NJppOvkGardboWHB6yTnqOzGiFEd1hD%2FDugxmKHy8exGMdS6jj4CdgEt2XfYZixrc1K69L8NqMiPMQl0ABOTsE7MKFdkjRbORZW9aA0DA5erQGCrb4zqaiCd%2Bwh9qa2nU062Fm9KPCQkj6ynURbZ66WEMo5faM&X-Amz-Signature=4fc8a9950477da9a634814729a6ea24cf0cc454fdece600a431b09d2325d7f5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O4VSX4H%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtIjwO%2FYtxLUz%2BTDGz7s%2BO%2FozDrwBVPwibAgIVRQ47LAIhAOJZRq86lINUQy2z9Sb4NrqG9JKB28KMHLUCMgLxsu65Kv8DCBwQABoMNjM3NDIzMTgzODA1IgzMJdTXI2sZwVg1qF4q3AOF0TVAtoxsuRcr%2FucLzt%2BkmqgqVzOPM7jH4GTE%2Fm89Aaspm2AVewV6WsUaPZLgE5NXX3WDoTSYrUCTO9L0HLquhLwUMR76CuzRFtGwoyjNeAoRSDiBPxv4tMFrW5zmJIhyGu%2F569%2BFJLDMYNdkiduMkCnwDJZDfa03tl9oUN7Vu%2FzS8ptdIahgH0DEv1lORhI%2BooyNrqtpDY0N6X9FVyeeAOV%2B7RXY%2Baufazw3feOhKutBqBo8gKHpnnXuwjGhh0BmypcDyRv88hUO%2BsWtutGuZCFZVg3VknRzh42e2ux3ojK8rsHN0IaVd5fP4Gw33ktfNEF5nwIJPl7NfldWR2Pv014sbvxQfSuGgqNINbUJxnQ8iPpioOLcm0EslI4Ap7DpD2vxrFOaK16ANOzSwnX9Vsu0uxfoK2a5tJqjlPm0jhfcy6OpzkPXvOHOC1EevTsLva992v41nln0JoHfhLKUkrSIo9KBBQGG3dJtZSPP1QWrCqfhsVz%2BxTxDtKaYq2wIKFXpz1uBD3GZj7JfIIHJzBFh5Nylht8LSn8kXjVPSbP8qa%2FcPVLBHCXpCOWnyKi9ON5ZdEbhrNJ4b9Eo2fg8M7Vp%2FzMjFDiZ8rkXoWSvptKBepVPHk32LBvH9DDbjde%2BBjqkAXLTUCvnySTddCbb5IiYnnQ8HmylmF9NUKmBIoawIUAwdqefNZgLlofbw1%2BjNQqmQ63O4vbLpEoZHdE2QtAIGh1KrG52Np6k%2BqIoEiXULe1K4c6uUSuGffIlOEYI3aMYglNMRHsLASRMUU5w1l9zNjgzdayQ%2BbnT1wjurQsx00berXb1nsGZF2L1TPqEs81UOCN0sq7YfhVB3etmxFD9oIh5C4b0&X-Amz-Signature=c302b37bd958a1c5aff18314f651ed98a4594a27ab43bcd01098cdcd523d5d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKIZA3ME%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC22LODH9DuSZa4BV0YueOQ4dx2Kkqu3dsLY7dkVenfQwIhAOiK5BCoxDz7Wu8s%2FbOrUZ7e3QJjAoQr3VrWfA5%2BYlx6Kv8DCBwQABoMNjM3NDIzMTgzODA1IgyPfWyCq6ubTe5ujz8q3AOelb32E1Aq0nmhOLa7%2F4JHVzyWhhS7nzHN6gmvaLmudG5lSnM7cQx9CAH2zU9aNY0Fi%2BJTVnn5VFHI3QKvINmkcLtbMIvX8ZpOvmk5CAc%2BpWP%2FqsuWWzg0CTqXd4LNUga6bLS1jF6KLs%2FbGj4fE%2BmB7KxUuhLFqLbRXKn1mGzigrrE0aN4jxf%2BEloWLqkJYG8IfdOJw%2Bi4gUTGG6Mq23eTXLoSBdGslGfgaloQLiJRHa7L%2BiHEhQKmoYqMyhhUFoVZMrAU3QjshsCVY7AXAlQNdFMsduW1%2BUjoa9MO%2FrOeDSdnjcaqqD1vLmYigZIX8TSKLEA9aXDFlPO%2BuMkoyaaMvk76q7uxRVV7mGrUwIWwHwIkQHbWGZpqHBk6xnwtxj8bRI8ui92T5Zh98Dr2GkbSbvZ8IiZig%2F7ji7wSug9lIyuTpwTMyVNvtbc5gULn66QWg3Vm5jfE7VQqdbCeifRXVUTQfIQFzx%2B%2FQzWGbKFbYSz4qagRFFushgKHPE%2F9Do3stwbR1U8s7jpMkswtFPNN1nzZdFz8JEWI%2F2EOVsjPXOFO0gYWFgdiWNq%2BtiuZuy%2FLrn141LS%2B47TPty%2F%2F%2BklzWloIS%2Bma6SUBZu8hZiZHe1Tg0cIwCHSNqWzKmzCujte%2BBjqkAetEmKhM7iM7x5hzpP1TCDPXQUo%2BmYOCXFXEyW%2Bf9XuGeVHgxdh9DH57cSOriwPfaS%2FXUwvuKEMKkyASWpr544tpVmuZh2Qrjs5xTXtlgRiWauR5quFyFOVNBXA4UCGxbAr%2FKWEjLQ2sAvDhDopKveXnYWWPXdQVu8mljJjwRELZW1PL%2FhEY7FSSGHi8nX0YXeQZmOWtbK58eEOcMDARfn%2FEqWgU&X-Amz-Signature=9deee8f151749e3173e706727ec3b8458a61df4a88b32c0697e188390daa4b19&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JDF7BO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaaOQw4HrvS4OvbLKxd2il9%2BSlt2%2BzZKXQ%2FsTSTMtA1AIgVFW%2FnMD55GqchWhr3CtAtuR3FkFSsLXlL5CECBA6yvEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDHcpbFxTr7ty0NPD7SrcA%2B2GN51ZPUWzlbsJWbAwIH%2BFqszPGNHtRXzk2tJ8qduI5TETWrWO0lefsawgNi6lt2nZvfVmoFqESkCGgu5AjlPSjLO7129P2ij2PzxGVRVZ1dg%2BQIebzHOAQ2MPaehBDcWRK88%2B9t2rtxtS5a1JFEgruCcbln22zLlUuQgn%2F0sD%2FOqGVABDLbR9zFD1UbXz%2B7dsr1SA7C%2BI8%2FqHuiPRTycK1E82%2FUXaCpPgytnA%2F9ksCAkyJIl%2BmZFAN8kMNqv44VgvLgbmkGQhCgsrucb6Md%2F4v7DHaWGFcGiXCOWN3xvQtMpRbaP1BIxGr%2FiM%2FSru0DbLjjtE%2BFTGfSEPkMjavpYO%2F5TnOZscXuKErCcVBvc41%2FRYCK62DqeC9PpPN3v1wncQlc9aYmV3bVGsYzbMBrZ%2BeoCPnI0GUIbJJgjdIQIJVvrMU%2B1rlwPgyYfmY4o7xQARftsB%2BE7xWLHSscfNDd2fUfhAs8ttT9ZEb4NikLxapoB8LKz5DPwRfNmbBbTyyYY%2BhTUck9JCvTt%2F%2F7DWbIfoMD2F5%2FqMq9%2FtZIK%2Bny7b7LIdsRIsra6OwX%2FSneKJxy8iotSvnScpyprr1X5TUo6T7CpbtdQ2sChmJKtEBnS62DouTDeVSiCiwNToMKCO174GOqUBaVoECyqFzuGMNwondvJi203SB8zzLsb2aKkWUKcjVZ2qvvOGhKh04AiSZlO4g4NJppOvkGardboWHB6yTnqOzGiFEd1hD%2FDugxmKHy8exGMdS6jj4CdgEt2XfYZixrc1K69L8NqMiPMQl0ABOTsE7MKFdkjRbORZW9aA0DA5erQGCrb4zqaiCd%2Bwh9qa2nU062Fm9KPCQkj6ynURbZ66WEMo5faM&X-Amz-Signature=d7b2bd6dc37ddfc70444592d83b65c6a11e55f662a588def49b9ce504088c1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
