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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN2CGL7G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3%2BOc1N2U4OzRic3qaCrN%2Fds7iZEY6zRitmppORbSK1AiBL8s2JyhKnb3DeipKjNMBzWZijBfnNIcyPdijnTdoPXSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM4iSrSChR9oD5cyllKtwDUbUCt8Mt4m%2FC8obTliAmkOwPN2fun1jMI1LxqOB45JbY73s2S7lVkOi%2BMRENqh1HDiu1BilO2TpzQHbqdJqT7Bh10ZGUYrEC1QvcufOLFKV%2BdDvIC%2BZ3L5TKNYYEsgyV5QMcO6VkJnOv%2Fqv6nd%2BqNwxffzqX1u2iz7bbIXHttOlQHkIBpUcW2bqZsGcekDK1TpKACt9dvzkTyzRVTd7p5DjV7orI32xcWeTeFMYVhVrzXf6Bw7VHd5go4LBDiEJwppCaMEwYfyvAxtSTI3VzRTXNUTmPEjAxSUTWdTHKjc6owe1lOQgcKrGW9R2EOQGE3IvJiI9RXUNFW8k597vOYuKdFpnyO4tF5iqvW%2F9UAYsZ91EtGO%2FHvBp1xW%2FgPuZjA%2BF%2BsGLUaLUvQkj9PH%2BvRKMGaR0P1gBOYuCZ6kjxQvNMpg30KYaE5xoVZ8%2FsgR%2Bo28L9Yw%2BydGcvOv2ttHJxJe6FiT7UEX%2B9KOhNQJMVUXajdg5i1WAiwt9OMDoOLbQtd0OHPuggRVDAQGE7Jf%2BUUGLahnACZ04mYFxM%2BeTXEXu%2BEWZOelt19jj%2B8GT%2BCQcvK3aFZ3XQ0ZZSfWTNAQY7D3SJH%2F2KIFS%2FxSuHx902D%2BxDaCojD8qbIpblC3ww2Yu4xAY6pgHLGrJuhDZ2igwFGYShhpfsW5n%2BMtDf9PDbUbwuEn2PqYrSslwaq%2FdiuomCbGxqkCP1zx%2FpBDgBdPmPYHAP1AAjGdUZDbbWX9r35DVTX%2FI6D0yq7%2FSgF5HSJw2oAot4KzWi0f05qpbipSMNcHIKFnY1digwJZBhe%2BL83hfGUKJgAsKViuYSzKaOOOLfTeKkrM2xWnVFt7Rkwvr97%2BgG3W%2Bcc1EtLg%2FW&X-Amz-Signature=fe2d35f579e5b8a10a36de1674fc1582efa6c3830e23c7cb99fdd5baf36c0500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN2CGL7G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3%2BOc1N2U4OzRic3qaCrN%2Fds7iZEY6zRitmppORbSK1AiBL8s2JyhKnb3DeipKjNMBzWZijBfnNIcyPdijnTdoPXSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM4iSrSChR9oD5cyllKtwDUbUCt8Mt4m%2FC8obTliAmkOwPN2fun1jMI1LxqOB45JbY73s2S7lVkOi%2BMRENqh1HDiu1BilO2TpzQHbqdJqT7Bh10ZGUYrEC1QvcufOLFKV%2BdDvIC%2BZ3L5TKNYYEsgyV5QMcO6VkJnOv%2Fqv6nd%2BqNwxffzqX1u2iz7bbIXHttOlQHkIBpUcW2bqZsGcekDK1TpKACt9dvzkTyzRVTd7p5DjV7orI32xcWeTeFMYVhVrzXf6Bw7VHd5go4LBDiEJwppCaMEwYfyvAxtSTI3VzRTXNUTmPEjAxSUTWdTHKjc6owe1lOQgcKrGW9R2EOQGE3IvJiI9RXUNFW8k597vOYuKdFpnyO4tF5iqvW%2F9UAYsZ91EtGO%2FHvBp1xW%2FgPuZjA%2BF%2BsGLUaLUvQkj9PH%2BvRKMGaR0P1gBOYuCZ6kjxQvNMpg30KYaE5xoVZ8%2FsgR%2Bo28L9Yw%2BydGcvOv2ttHJxJe6FiT7UEX%2B9KOhNQJMVUXajdg5i1WAiwt9OMDoOLbQtd0OHPuggRVDAQGE7Jf%2BUUGLahnACZ04mYFxM%2BeTXEXu%2BEWZOelt19jj%2B8GT%2BCQcvK3aFZ3XQ0ZZSfWTNAQY7D3SJH%2F2KIFS%2FxSuHx902D%2BxDaCojD8qbIpblC3ww2Yu4xAY6pgHLGrJuhDZ2igwFGYShhpfsW5n%2BMtDf9PDbUbwuEn2PqYrSslwaq%2FdiuomCbGxqkCP1zx%2FpBDgBdPmPYHAP1AAjGdUZDbbWX9r35DVTX%2FI6D0yq7%2FSgF5HSJw2oAot4KzWi0f05qpbipSMNcHIKFnY1digwJZBhe%2BL83hfGUKJgAsKViuYSzKaOOOLfTeKkrM2xWnVFt7Rkwvr97%2BgG3W%2Bcc1EtLg%2FW&X-Amz-Signature=a942ba4b1f0e44e9da88a2226f7e9759f8def0141552017c37160452b0ed4708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN2CGL7G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3%2BOc1N2U4OzRic3qaCrN%2Fds7iZEY6zRitmppORbSK1AiBL8s2JyhKnb3DeipKjNMBzWZijBfnNIcyPdijnTdoPXSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM4iSrSChR9oD5cyllKtwDUbUCt8Mt4m%2FC8obTliAmkOwPN2fun1jMI1LxqOB45JbY73s2S7lVkOi%2BMRENqh1HDiu1BilO2TpzQHbqdJqT7Bh10ZGUYrEC1QvcufOLFKV%2BdDvIC%2BZ3L5TKNYYEsgyV5QMcO6VkJnOv%2Fqv6nd%2BqNwxffzqX1u2iz7bbIXHttOlQHkIBpUcW2bqZsGcekDK1TpKACt9dvzkTyzRVTd7p5DjV7orI32xcWeTeFMYVhVrzXf6Bw7VHd5go4LBDiEJwppCaMEwYfyvAxtSTI3VzRTXNUTmPEjAxSUTWdTHKjc6owe1lOQgcKrGW9R2EOQGE3IvJiI9RXUNFW8k597vOYuKdFpnyO4tF5iqvW%2F9UAYsZ91EtGO%2FHvBp1xW%2FgPuZjA%2BF%2BsGLUaLUvQkj9PH%2BvRKMGaR0P1gBOYuCZ6kjxQvNMpg30KYaE5xoVZ8%2FsgR%2Bo28L9Yw%2BydGcvOv2ttHJxJe6FiT7UEX%2B9KOhNQJMVUXajdg5i1WAiwt9OMDoOLbQtd0OHPuggRVDAQGE7Jf%2BUUGLahnACZ04mYFxM%2BeTXEXu%2BEWZOelt19jj%2B8GT%2BCQcvK3aFZ3XQ0ZZSfWTNAQY7D3SJH%2F2KIFS%2FxSuHx902D%2BxDaCojD8qbIpblC3ww2Yu4xAY6pgHLGrJuhDZ2igwFGYShhpfsW5n%2BMtDf9PDbUbwuEn2PqYrSslwaq%2FdiuomCbGxqkCP1zx%2FpBDgBdPmPYHAP1AAjGdUZDbbWX9r35DVTX%2FI6D0yq7%2FSgF5HSJw2oAot4KzWi0f05qpbipSMNcHIKFnY1digwJZBhe%2BL83hfGUKJgAsKViuYSzKaOOOLfTeKkrM2xWnVFt7Rkwvr97%2BgG3W%2Bcc1EtLg%2FW&X-Amz-Signature=e2a5813339f8e27de93838c0b049a3dca270d91cccadf24fc031d8b704fa1c3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS65O3LX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj03iyYgM4GxB%2Fh1AQy3PTFY43xaBSsdq4RTbE6k9l8wIhAMuEegD%2FzsACHMIcBl5REM25HSvkeDrOy%2FNVuumx7eYJKv8DCBYQABoMNjM3NDIzMTgzODA1Igyxe86vrp6U0n8JziEq3AO3V9c2zWt%2FnCMpsWhA9VitgTHLeJN6NVhni%2FbGsN%2BqFGyY51Er%2BdCUIHcvhP4%2B8l8jibI6eN7S3Ngc9ZyMqXBUrVtCHinQoNu6aNtsw3NptFukA91QgiZuOUBnVzQUOs3OCORLh0%2F%2FNRYySmdvpWwhZYvq%2BX1kZDKPMsGhVAJd03DI%2FykIY4oRj7%2BSfZ9Y%2BpnOokQq09isF7p7rGhTbQ0qevOGBMtzR4BknQFKrC5zZsYEB5puodd%2FZ%2FEtj%2ByB8wg8YiOOG3DlaRaWnlQ0%2BkkVrXX5HHykeQfxE2jG20LnfFdfuhpe4Xu1un3yFoI1kO9RIjkSBnuLUP2fXettZbjsDIQAanwksqLeCcNYQI1d5JefdYfanEGQghGlP47TsDd3UhGeh8MbbXGYN%2BcgteS%2F3nmQ1FvbKhebUu%2FVkZ5bokyccFCGrJdTcF1P82PQpI5KOUQ1sG0HukPyWrvIlgdj%2F2hz%2BlJOig4V5ZhqwBVXWgWicf4XmL6kZUjNRomZFnH9z2yCDMJo1scgWUGfi3%2F0s%2F6nLWm%2FPwohRT8y4xQCvnXGRs85eQdmhFGP%2BrXYILnYw2DxGTsEB9l7OmNTXwSnbN1QBFk4aEryzTfLbgm1m5gOrE7a%2BcjGVJooSjCOlLjEBjqkAX77cD7f4paEedaXXvfuTT0n0yn74FBxZhjm%2F8JOi8v6KHWCEWeaTfO0Kps7361RNNOTohAe0TioE3fQg1HlWmcH1bxhfBab52yy0Q07KN2kVoHQOyPCbSPxZmhnZdLLKhURo1w6cr1xJfoJRvLvnW%2BdkLZCKVOWDMlPizbZBJVagJo9CJyBoWoZVHYKv1qf%2FqiqJQRmHc7imnoSt%2Bc4UP%2BZHS%2FC&X-Amz-Signature=9e2ba9a9b3d33f04537f77bf5e131e11f6746f209ea39ec273bd0031e5b2685c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PIA2GP7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE18Un3zifl%2F%2FOYsJiBSQI1QD6qXqXGzpeamEDTj1qRtAiEA8KeaPFBQjmOFpbLBHEv%2Bcu6bmW5rJTJkXR%2BFrh3zS34q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDCq5036tPpNu40EuAircAyhHOAcwfRGp7XrZd4%2B9A1Xj5ak1q8ZfDFSjMphRUaGNvyXW3sctbeUfhMwfHRg55LrNin34%2B3hOmT%2FUFEtYc%2FSOjaw7HqNYhhd0Un0vHf%2BbqxkAl9NSzeHgtghVMHQLggKWShSRLv78cEDUFrNnsdGoz9%2Fs62IpcS3Ubm3Z6AEUcD9mhQMzh83zX9AnwtJw%2BfMYrP3j0j8GwQs2tYweiz8B6QMEm5m9rt7q2AgFJwPn4O3MzxBL1E%2FIjrYz%2FIRL4gaayEDrdb707hcQQCfj94DvVJV9uv1ZfqoBfVene4ZkDaGHw09gTiGbtwAiQ6tpWU3V0xVrz%2FSdWFzla1Izv5JyZffrzqLWdPRqary1OnwjeGr6wNUy%2FtXsbcBbIRDuFF2UL9n%2FjBPoMVg4OR8dSrbz903QTJUYE9%2FEmgMpHxO%2FckIh%2B1mZdhvkJ5kuKMPpbKEB9OcBCyujWyEaBsf3Z7mLEkQcmljzE%2BYbhAtduUzhyI3tglo3F%2B7aRfMiTYqZ9VBXdGfLc3rWFv15ZjKPTYQMV9Kqo1d%2BvYLbxVtK4kfQj0XVfMMGoLZR1ErJPc7kkBuTQS3ve6NMPjEt4XPHJNO6SKbaPQh3o60WRre4K5DNv%2BzssXyvjlluVVE3MJHMt8QGOqUBnWV%2BAPVCVkinRuGLVkzOYppfNPS5HL%2BIHY3ice6wyjpplty9JOeuaeWB5hvTBrsjWCsTYnXr7ROVRRGlaxwgkrZRX0qeW36kEjDIXgMi9TmoWSczY4v%2FlVabCc3xHGFfe%2BF9DdWXvMTh1B1MYSEYAxMigstxDL51z9vJfF1DkRX%2F1dkEkP7pbW0%2BDPQdIDdHIp0xTUSFDZtNydSniPqFom%2FnbrDv&X-Amz-Signature=b5358587d2cb6afb927fdeb7df71db19947088972586a4a820eabdb935be547e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN2CGL7G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3%2BOc1N2U4OzRic3qaCrN%2Fds7iZEY6zRitmppORbSK1AiBL8s2JyhKnb3DeipKjNMBzWZijBfnNIcyPdijnTdoPXSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM4iSrSChR9oD5cyllKtwDUbUCt8Mt4m%2FC8obTliAmkOwPN2fun1jMI1LxqOB45JbY73s2S7lVkOi%2BMRENqh1HDiu1BilO2TpzQHbqdJqT7Bh10ZGUYrEC1QvcufOLFKV%2BdDvIC%2BZ3L5TKNYYEsgyV5QMcO6VkJnOv%2Fqv6nd%2BqNwxffzqX1u2iz7bbIXHttOlQHkIBpUcW2bqZsGcekDK1TpKACt9dvzkTyzRVTd7p5DjV7orI32xcWeTeFMYVhVrzXf6Bw7VHd5go4LBDiEJwppCaMEwYfyvAxtSTI3VzRTXNUTmPEjAxSUTWdTHKjc6owe1lOQgcKrGW9R2EOQGE3IvJiI9RXUNFW8k597vOYuKdFpnyO4tF5iqvW%2F9UAYsZ91EtGO%2FHvBp1xW%2FgPuZjA%2BF%2BsGLUaLUvQkj9PH%2BvRKMGaR0P1gBOYuCZ6kjxQvNMpg30KYaE5xoVZ8%2FsgR%2Bo28L9Yw%2BydGcvOv2ttHJxJe6FiT7UEX%2B9KOhNQJMVUXajdg5i1WAiwt9OMDoOLbQtd0OHPuggRVDAQGE7Jf%2BUUGLahnACZ04mYFxM%2BeTXEXu%2BEWZOelt19jj%2B8GT%2BCQcvK3aFZ3XQ0ZZSfWTNAQY7D3SJH%2F2KIFS%2FxSuHx902D%2BxDaCojD8qbIpblC3ww2Yu4xAY6pgHLGrJuhDZ2igwFGYShhpfsW5n%2BMtDf9PDbUbwuEn2PqYrSslwaq%2FdiuomCbGxqkCP1zx%2FpBDgBdPmPYHAP1AAjGdUZDbbWX9r35DVTX%2FI6D0yq7%2FSgF5HSJw2oAot4KzWi0f05qpbipSMNcHIKFnY1digwJZBhe%2BL83hfGUKJgAsKViuYSzKaOOOLfTeKkrM2xWnVFt7Rkwvr97%2BgG3W%2Bcc1EtLg%2FW&X-Amz-Signature=b674033929d029d58f91547c62d7a75bc9b087f62ff8e88f832c003d3cd26ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
