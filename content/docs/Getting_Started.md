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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSTZG7K%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuWpBerg13LTpu1hgf3DPtKFogAA3Gzjt9BCsDzoApuAiEAqFTLkJXIUIgbmIM5ziWlGlWZyMBJQuf6m5dgJIHPhG8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7w6xhqnUMIt1CDnircA6yKiZzDz8xdS8pF0eyv%2Fn0OphQcFYRIsK9WOI9IQpClo%2F4bWttWLsne%2FOekBSbWcrQIXflT7QE1GLZIpr12eCtnMjbmfCmz%2F1kuAntDiIg%2BHacVO13VZYQijf8s3%2BTgu5NTbsJqfmsIQTcdBiuL0CPHZRzjgBktDHsYtpVEStEcHb13SpGWkgTZ74R5AC7qj5rBxUuZHZ3qoqjJbn8gfS7aYBV6p%2FKyq3AkvtOuYy8tTiCHZcJ%2BjVe1YCz9oA3cUo5498%2F9TCE6EDaWIQMqNvXWX7IfFwNEjjdkJOipy%2FZ3HRZzb0ne3UbdlKld4S7yac%2FXdrocUeCKSeks13KShg3%2Fv5TUA27phn20lbWcgqagEia09RlcbZyZwTfN5N19gR7t6cZBNtDR6GYS9TF%2ByhnyGRxsNw7oSzhkUcsMr86R5pbNwW5RAcNq%2FnUNLSWc14LJXQMJqFk0nvDb%2FoLAc0C6GM0IC8e3wCyPe%2BQx31v5XLwIA2%2FFhICJS7Eq2gWgZn1DIyRLnigIp1ECwAIh4ynwhd0DP440DAOwFV%2B7DlS7%2F61pYZd315fzUEAwR5C9DXwUmzKoh4neiK6zBHWiFl3HtPY1v%2FSC984eWuEHaZBjyjRADvXSjOVPEgsdMJaz1sIGOqUB3lU%2BGYY1sNjGz1jcC3EXhqbOtTmPNyL34XSyMTo%2FsVs97CzePC2xnyBXptlIO12FFcdZodi%2BY2l6sQKRRej7GMARJoU3pp5unfHcqwACqzbYGbNn%2Ff%2BhVeYAO3S3cMr%2BdOA%2BwAVSyVPzUqcF2DRM46ph%2Fw2IG5I5alG7SI4swJfBUvIBSIdO8uXojfev87xn95PNAg1P%2F0IPD2mTjp9TSKYu25Jw&X-Amz-Signature=1e1e072cc9951431c4e99c03a9fbd2597118990ce9a5d8d6a34ec0e9bdcc11b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSTZG7K%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuWpBerg13LTpu1hgf3DPtKFogAA3Gzjt9BCsDzoApuAiEAqFTLkJXIUIgbmIM5ziWlGlWZyMBJQuf6m5dgJIHPhG8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7w6xhqnUMIt1CDnircA6yKiZzDz8xdS8pF0eyv%2Fn0OphQcFYRIsK9WOI9IQpClo%2F4bWttWLsne%2FOekBSbWcrQIXflT7QE1GLZIpr12eCtnMjbmfCmz%2F1kuAntDiIg%2BHacVO13VZYQijf8s3%2BTgu5NTbsJqfmsIQTcdBiuL0CPHZRzjgBktDHsYtpVEStEcHb13SpGWkgTZ74R5AC7qj5rBxUuZHZ3qoqjJbn8gfS7aYBV6p%2FKyq3AkvtOuYy8tTiCHZcJ%2BjVe1YCz9oA3cUo5498%2F9TCE6EDaWIQMqNvXWX7IfFwNEjjdkJOipy%2FZ3HRZzb0ne3UbdlKld4S7yac%2FXdrocUeCKSeks13KShg3%2Fv5TUA27phn20lbWcgqagEia09RlcbZyZwTfN5N19gR7t6cZBNtDR6GYS9TF%2ByhnyGRxsNw7oSzhkUcsMr86R5pbNwW5RAcNq%2FnUNLSWc14LJXQMJqFk0nvDb%2FoLAc0C6GM0IC8e3wCyPe%2BQx31v5XLwIA2%2FFhICJS7Eq2gWgZn1DIyRLnigIp1ECwAIh4ynwhd0DP440DAOwFV%2B7DlS7%2F61pYZd315fzUEAwR5C9DXwUmzKoh4neiK6zBHWiFl3HtPY1v%2FSC984eWuEHaZBjyjRADvXSjOVPEgsdMJaz1sIGOqUB3lU%2BGYY1sNjGz1jcC3EXhqbOtTmPNyL34XSyMTo%2FsVs97CzePC2xnyBXptlIO12FFcdZodi%2BY2l6sQKRRej7GMARJoU3pp5unfHcqwACqzbYGbNn%2Ff%2BhVeYAO3S3cMr%2BdOA%2BwAVSyVPzUqcF2DRM46ph%2Fw2IG5I5alG7SI4swJfBUvIBSIdO8uXojfev87xn95PNAg1P%2F0IPD2mTjp9TSKYu25Jw&X-Amz-Signature=f2379a1801a6c819dee9bcadaf5ef8b4a1284b3db6f0fc0a4a02226bc567deb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSTZG7K%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuWpBerg13LTpu1hgf3DPtKFogAA3Gzjt9BCsDzoApuAiEAqFTLkJXIUIgbmIM5ziWlGlWZyMBJQuf6m5dgJIHPhG8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7w6xhqnUMIt1CDnircA6yKiZzDz8xdS8pF0eyv%2Fn0OphQcFYRIsK9WOI9IQpClo%2F4bWttWLsne%2FOekBSbWcrQIXflT7QE1GLZIpr12eCtnMjbmfCmz%2F1kuAntDiIg%2BHacVO13VZYQijf8s3%2BTgu5NTbsJqfmsIQTcdBiuL0CPHZRzjgBktDHsYtpVEStEcHb13SpGWkgTZ74R5AC7qj5rBxUuZHZ3qoqjJbn8gfS7aYBV6p%2FKyq3AkvtOuYy8tTiCHZcJ%2BjVe1YCz9oA3cUo5498%2F9TCE6EDaWIQMqNvXWX7IfFwNEjjdkJOipy%2FZ3HRZzb0ne3UbdlKld4S7yac%2FXdrocUeCKSeks13KShg3%2Fv5TUA27phn20lbWcgqagEia09RlcbZyZwTfN5N19gR7t6cZBNtDR6GYS9TF%2ByhnyGRxsNw7oSzhkUcsMr86R5pbNwW5RAcNq%2FnUNLSWc14LJXQMJqFk0nvDb%2FoLAc0C6GM0IC8e3wCyPe%2BQx31v5XLwIA2%2FFhICJS7Eq2gWgZn1DIyRLnigIp1ECwAIh4ynwhd0DP440DAOwFV%2B7DlS7%2F61pYZd315fzUEAwR5C9DXwUmzKoh4neiK6zBHWiFl3HtPY1v%2FSC984eWuEHaZBjyjRADvXSjOVPEgsdMJaz1sIGOqUB3lU%2BGYY1sNjGz1jcC3EXhqbOtTmPNyL34XSyMTo%2FsVs97CzePC2xnyBXptlIO12FFcdZodi%2BY2l6sQKRRej7GMARJoU3pp5unfHcqwACqzbYGbNn%2Ff%2BhVeYAO3S3cMr%2BdOA%2BwAVSyVPzUqcF2DRM46ph%2Fw2IG5I5alG7SI4swJfBUvIBSIdO8uXojfev87xn95PNAg1P%2F0IPD2mTjp9TSKYu25Jw&X-Amz-Signature=747f459902b18a97185ba14e377846a09e706813d7cc1992d49f1a13f3a2a13e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K3UFQPX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjD%2FmkYG4pBVm%2Bj6bGs7U3urk3WrNckfWu%2FZLRVjeRwAiBCIaqs%2FIG3TlCKDtme8JRDjEde2KrdhvGX7053LPfoISqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcdF3ZB9Uf75ck3TKKtwDLhIqOdHsrKhnzdd6d%2FXutEgG%2FxdhhcMODygo9e5qBJK653TFcGEvau2AcgPKiQBefatrD5DzlRLcFxlimaL%2FWsIIGLRnh2m6xo4FaxgnFMJ05Vx32ohPKiAh1QEpbBZ%2FQk9nyPhW3M0DHjcyTdGpTYJbBFJ%2BX19NfXXFQ9HXJR8%2Frp9P1A6aph2FpOaqh3q0q0VKm%2BkxSG6XUtuzNMrJMRVIGvk25lw9ZK4%2FiWCoCCqiz5cGU9vHuT2%2FZfvWm%2FeUTklEPba2vgd%2FPDL%2FLlOQkFcMzsYSSSfPk9Lpx%2Fn4zV7ATk6cufrniT7QDm7NCCyWS3LpccPsff7FcDbKofT7Pq7n10gvYIps4frMVQWyDpvZUcRpgsGZlO4NHdMgvwqJFzMRvO1V1gUXWjt8erBVtFGYe1sLb5NGKbgPls0%2FSzB%2F81vI8XZSZSqGZUZcFuGKFoAHUVr9ztGPs1H9nds2kf6U0QZgrpVL8Rd8tzh9m8nC6ksFfoIcuCpLvP4flvEBwzVTmZYEwC8CrWzzyJRaD9SNxzxyxxxLWfUqbU%2F%2FDJdIK3aUd5S2yzYJK7VsSLxmkmi3FMloD6%2BKnfyKn%2BNTOSFx5wH8%2B%2BO9yGAXaPA6yQ1jRZVTL7U6U1sAXu0w0LLWwgY6pgE4E1ihnlFA10kjN5pxsjRBIF%2FzMA0wmuGnRTEW13Yx2MJg3WSgJsoAYn1miJoQlVdeXC7vPozFm7Nzbzwk0ilby5cWEkJyziSb1EQ3nnv96kohCDAIwYSsXeS%2FuSmGToanKmk1jRjzP70aD3CXI7c%2BsOBTqTDgeA4MCtYz8tXP27yMWhJBAkmwfqAst8tkNGw%2Bd9xHod8krztIq4P2FihIjlS3PInQ&X-Amz-Signature=48f6d75ff7c0c6932ee2b2d9de6fc853d41008a13dbbfdf5efe8d2376a33c4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XCP667H%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCei31r3bwnBVTd9%2FYDDDsoXh%2Fxicx3A9iCr14xNNzxCgIgLL8GSxj4jZ9A9EkfNahVZtXbEhh1miS9mumFJXJZgfUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHp1oScCeANKQqwj%2FCrcAwN9ldIFE1rOuOY9LX%2BTtOKc2kma0K8SsE4CnxHM%2FTqeZm%2Fyal%2B3ZZ%2BKc9MOUQCb4ZESoHJmg8mGZtIObCRKer9iYw7Qw6j1Nejcl1o8IQqfc9AU1E3yg7YD7A73ziCgujNGYScYfNW4pJlwSo8XGwv%2B2awhiifNWQ01ErC4ZCH12yK4aqfjeIotJ9Xtsf2OS%2BSMUGne7h%2FalPKYlaFjVZ4cDBO5YLz9%2FI5EFDCwGc6AdGDu9HEu7%2BdK84Uwj60VI1QHYEJGRn40LWfW%2FEigzcg3fxbnTmIuQD%2F9J7Z9Pyixj9uzR6Lxs9wis1mMmchGASABtRcdF9kt53rd1teaOzsY4ViAsX1rOztVtQ6HM3l%2BN7yn33FkOk1Gp8jWgflzyz708lHOwk%2BuHd0Wovv%2B7HS9N0ipjXzoDulhLL1ZYX0AiGv9OLK8dV864MmEPIwnA97zRqylmPod7BKsmvXCNiIQsH8%2Bw%2FV9EXmMIcRPXnpF%2FJlMW0jgM56jFO4ddl5wdNGhoA5Oh%2Fo%2F5KvxwlfLkhQYTEihoXnjn9Ih6535emKxv9ldCnkVwfdAM5tJGNKz1lb9TA5WbbzU4W%2FSAnZURpPMVKM4bk34c9CEJFk8ivbti%2FYAa9u3CWSQmgEvMIyz1sIGOqUBmv1pC8DgMM7z9fgODzsaizWmyBc9WKui%2BwvMaHVcxBlHOJYgOYKfedcVjiqgEqwEbRuqYkoxSrj%2FbEZWw%2BYj60GqqhV7%2BQAo5i57kH6l9O5481k2h8R2fQYzIynSIsdZdRa2HQEti42pARRHVkfgjW6JWIZS1xOpIqs8N3Hb8P5YHbR9E9YrnijV4D26PGUVE8O9VokM%2FKl7o1r9Fd5RJ88wFZqD&X-Amz-Signature=f13c35fb66b669dd19cd0627fa202a5bbd82b1e25aa336735d641f7d4da95337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSTZG7K%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuWpBerg13LTpu1hgf3DPtKFogAA3Gzjt9BCsDzoApuAiEAqFTLkJXIUIgbmIM5ziWlGlWZyMBJQuf6m5dgJIHPhG8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7w6xhqnUMIt1CDnircA6yKiZzDz8xdS8pF0eyv%2Fn0OphQcFYRIsK9WOI9IQpClo%2F4bWttWLsne%2FOekBSbWcrQIXflT7QE1GLZIpr12eCtnMjbmfCmz%2F1kuAntDiIg%2BHacVO13VZYQijf8s3%2BTgu5NTbsJqfmsIQTcdBiuL0CPHZRzjgBktDHsYtpVEStEcHb13SpGWkgTZ74R5AC7qj5rBxUuZHZ3qoqjJbn8gfS7aYBV6p%2FKyq3AkvtOuYy8tTiCHZcJ%2BjVe1YCz9oA3cUo5498%2F9TCE6EDaWIQMqNvXWX7IfFwNEjjdkJOipy%2FZ3HRZzb0ne3UbdlKld4S7yac%2FXdrocUeCKSeks13KShg3%2Fv5TUA27phn20lbWcgqagEia09RlcbZyZwTfN5N19gR7t6cZBNtDR6GYS9TF%2ByhnyGRxsNw7oSzhkUcsMr86R5pbNwW5RAcNq%2FnUNLSWc14LJXQMJqFk0nvDb%2FoLAc0C6GM0IC8e3wCyPe%2BQx31v5XLwIA2%2FFhICJS7Eq2gWgZn1DIyRLnigIp1ECwAIh4ynwhd0DP440DAOwFV%2B7DlS7%2F61pYZd315fzUEAwR5C9DXwUmzKoh4neiK6zBHWiFl3HtPY1v%2FSC984eWuEHaZBjyjRADvXSjOVPEgsdMJaz1sIGOqUB3lU%2BGYY1sNjGz1jcC3EXhqbOtTmPNyL34XSyMTo%2FsVs97CzePC2xnyBXptlIO12FFcdZodi%2BY2l6sQKRRej7GMARJoU3pp5unfHcqwACqzbYGbNn%2Ff%2BhVeYAO3S3cMr%2BdOA%2BwAVSyVPzUqcF2DRM46ph%2Fw2IG5I5alG7SI4swJfBUvIBSIdO8uXojfev87xn95PNAg1P%2F0IPD2mTjp9TSKYu25Jw&X-Amz-Signature=6d41fde1e1dcdd3fa8c8457a8afa39d170d0c46b0a8f522e6ad116eee644631e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
