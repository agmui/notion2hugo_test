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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJXCM6I%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3GiYLZOPyQY1z0i%2B1Czqr5SrmgXCkUhXQBpohK%2B%2F5%2BwIhAKIwfkCA%2FW98ZKaJzit1SOyySq5TP2H5UIeJUdiYLl2EKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyUp7Rj8uqxHNhkn4q3AOj9pdMx9Cv186p6B9ukIFGhkw0pjHpZ5kXJzRfSs%2BLnwG8eCnZh7MDqjF6BAS%2BE8wZxsh8VUl7cCAwKMS1uVZQh7TBCZTFtV7dVtwqDaCiDS%2BDyMesqqGSP3bsuYdatYAmPKzjzOIWDFbDhbP%2B9jxd%2BZSjYcnCQQnQdo4cbtuzbWSooXstkp3o0jW4UzK6ovd5sbIFLX%2BLp25X8ihdQpvWnawCJ4dBLBBjBOatrcj4A%2BnMaBuMG9Ix6ArQF%2F2J%2BEti0ALzh13Fts%2F%2FdtQv6Yg4l7mbHfDMuK6HJx8XYDCAjeTkN0SIT8gU3TsxaRT62IV4NY9NQac6WlNJDcv1unW7QlhciKLZ0v4roFkI1G5ik3%2FM8ZcCq6usc%2BB5fj7uwj9s65K%2FytDK696Y3KX6kx9GmI5Os1uWpHLRvm9j9SBVEEMdH%2FFlhKn9fZKdi2K3wjnB0Nh7%2Bf3djsXqQJjIdJHpgzsMWGfGuEnpKtW1Lc4h0sue7vFauPYMAYvkybXCxRGczDhGqsmn6EvH1hyOMEjrle9Px8iXC5Vn7QkFQym1LS%2FV3P4pYu%2Bc55hspBAi1t3tlfPjfMWRwhFSbvETbbPlbsvc7Bgaxwpudy5jLNtFTclyPcpKNqDrJP1izDDu9e%2FDBjqkAXn4sbM4IogXz9qzCnKFZXmmyJiNvrV0Ckq0%2FZbBMXP9ujW2eAlcwmbZPOoUbLwiOQmdb%2Byd6QP%2FUHP%2BlFSE1lvii%2FPrp%2BZM%2FerimqoyJ%2FbjsI5BMTTfhcL2a%2FUz2ra0RnusRZzavno5waIjNfIHMji8uiK600WbUoqeefArw1drGJsWsoJ2ez%2FO787uVIA%2BNwajrVcvshbgKCVl%2FRgn5WsVCQ%2Bd&X-Amz-Signature=cb4e8206dacdafe004bca4d4e28e8775be218fac50daacc60c64fef0a0677743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJXCM6I%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3GiYLZOPyQY1z0i%2B1Czqr5SrmgXCkUhXQBpohK%2B%2F5%2BwIhAKIwfkCA%2FW98ZKaJzit1SOyySq5TP2H5UIeJUdiYLl2EKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyUp7Rj8uqxHNhkn4q3AOj9pdMx9Cv186p6B9ukIFGhkw0pjHpZ5kXJzRfSs%2BLnwG8eCnZh7MDqjF6BAS%2BE8wZxsh8VUl7cCAwKMS1uVZQh7TBCZTFtV7dVtwqDaCiDS%2BDyMesqqGSP3bsuYdatYAmPKzjzOIWDFbDhbP%2B9jxd%2BZSjYcnCQQnQdo4cbtuzbWSooXstkp3o0jW4UzK6ovd5sbIFLX%2BLp25X8ihdQpvWnawCJ4dBLBBjBOatrcj4A%2BnMaBuMG9Ix6ArQF%2F2J%2BEti0ALzh13Fts%2F%2FdtQv6Yg4l7mbHfDMuK6HJx8XYDCAjeTkN0SIT8gU3TsxaRT62IV4NY9NQac6WlNJDcv1unW7QlhciKLZ0v4roFkI1G5ik3%2FM8ZcCq6usc%2BB5fj7uwj9s65K%2FytDK696Y3KX6kx9GmI5Os1uWpHLRvm9j9SBVEEMdH%2FFlhKn9fZKdi2K3wjnB0Nh7%2Bf3djsXqQJjIdJHpgzsMWGfGuEnpKtW1Lc4h0sue7vFauPYMAYvkybXCxRGczDhGqsmn6EvH1hyOMEjrle9Px8iXC5Vn7QkFQym1LS%2FV3P4pYu%2Bc55hspBAi1t3tlfPjfMWRwhFSbvETbbPlbsvc7Bgaxwpudy5jLNtFTclyPcpKNqDrJP1izDDu9e%2FDBjqkAXn4sbM4IogXz9qzCnKFZXmmyJiNvrV0Ckq0%2FZbBMXP9ujW2eAlcwmbZPOoUbLwiOQmdb%2Byd6QP%2FUHP%2BlFSE1lvii%2FPrp%2BZM%2FerimqoyJ%2FbjsI5BMTTfhcL2a%2FUz2ra0RnusRZzavno5waIjNfIHMji8uiK600WbUoqeefArw1drGJsWsoJ2ez%2FO787uVIA%2BNwajrVcvshbgKCVl%2FRgn5WsVCQ%2Bd&X-Amz-Signature=f3b41c80afec3e1bc0b270eb4f7237775c5e1cfb1765ee9c24f62ccefbb198aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJXCM6I%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3GiYLZOPyQY1z0i%2B1Czqr5SrmgXCkUhXQBpohK%2B%2F5%2BwIhAKIwfkCA%2FW98ZKaJzit1SOyySq5TP2H5UIeJUdiYLl2EKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyUp7Rj8uqxHNhkn4q3AOj9pdMx9Cv186p6B9ukIFGhkw0pjHpZ5kXJzRfSs%2BLnwG8eCnZh7MDqjF6BAS%2BE8wZxsh8VUl7cCAwKMS1uVZQh7TBCZTFtV7dVtwqDaCiDS%2BDyMesqqGSP3bsuYdatYAmPKzjzOIWDFbDhbP%2B9jxd%2BZSjYcnCQQnQdo4cbtuzbWSooXstkp3o0jW4UzK6ovd5sbIFLX%2BLp25X8ihdQpvWnawCJ4dBLBBjBOatrcj4A%2BnMaBuMG9Ix6ArQF%2F2J%2BEti0ALzh13Fts%2F%2FdtQv6Yg4l7mbHfDMuK6HJx8XYDCAjeTkN0SIT8gU3TsxaRT62IV4NY9NQac6WlNJDcv1unW7QlhciKLZ0v4roFkI1G5ik3%2FM8ZcCq6usc%2BB5fj7uwj9s65K%2FytDK696Y3KX6kx9GmI5Os1uWpHLRvm9j9SBVEEMdH%2FFlhKn9fZKdi2K3wjnB0Nh7%2Bf3djsXqQJjIdJHpgzsMWGfGuEnpKtW1Lc4h0sue7vFauPYMAYvkybXCxRGczDhGqsmn6EvH1hyOMEjrle9Px8iXC5Vn7QkFQym1LS%2FV3P4pYu%2Bc55hspBAi1t3tlfPjfMWRwhFSbvETbbPlbsvc7Bgaxwpudy5jLNtFTclyPcpKNqDrJP1izDDu9e%2FDBjqkAXn4sbM4IogXz9qzCnKFZXmmyJiNvrV0Ckq0%2FZbBMXP9ujW2eAlcwmbZPOoUbLwiOQmdb%2Byd6QP%2FUHP%2BlFSE1lvii%2FPrp%2BZM%2FerimqoyJ%2FbjsI5BMTTfhcL2a%2FUz2ra0RnusRZzavno5waIjNfIHMji8uiK600WbUoqeefArw1drGJsWsoJ2ez%2FO787uVIA%2BNwajrVcvshbgKCVl%2FRgn5WsVCQ%2Bd&X-Amz-Signature=cfa74e28e3091eb32ff2757f68def82bafca926a2721db7c74a179ee5847d157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCBCM46%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5HiCdnlgRE429Vs1No046T4eiWeMcjRlju5C2YOny3AiEApMvA%2BRPPYvmXZp7fV5E5x19YbfCDhjaceB0oV%2FvOvUAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvxTJVJGMRfVsLG2yrcAyi%2B5KIZoa9ApIeVzFf%2BjxooN7mYqzCJPMvvDptdARi1zHcaon4GF2Qx7haN%2BF%2FC5ChnjIxft%2BiY3GdtE%2Fj%2FrSneGIctaWxDw7F640zbS4Z3CbAeT9W93%2FFQQAxtuYEPU7o0vA2m20WESB5HnZ3VGL3QgNJbt7nEABK4WQ8oA%2FCfKPIaz%2BJrNHANtLygguLVhtMMZft%2F%2B4WoCishv4epppywDIvPjAkK0IAkHZlvC7S3a4fSu3rV5fNWdRl8Dc0u%2FS816So%2BX7kjmqxF%2B%2FXQlMwnE54eb9PgdOaYawNyd1zTcQNZ9TNvEP9J%2FlZqU%2BKbeV%2FWxwTaCU8HDKlE3o2Mfgo95G6%2BKADCnllvr2VwIygalmubiDxm8%2FsTOoWplSnigozZi1hdv5LO55dKhRiMhtmw3xPHydBem3ibWM0spQE87cozPDwH%2FcgH10d0kQ1kLtdClqZDOpcksoXZbb8MtN7vcoz9MlmAl%2BblKV04oxaYsWiANPFg0vK5AIqb21KpFs%2BqlIwCxZlD6B4wAAL%2BcI5EMIweg3cX4Wx88ScsRiXmu3%2B7X1%2BB3fpbwN%2FRmp0Tvedgin1Kw2t83aEDmfOvEXUbJntEdWtIvkPN3rrjFmIJZwIThkKVk1p178YBMJ3178MGOqUB2XJHRZFtym4KCzMrVHiDVfFDvD0k2as5dRlrAWY7bcT2RWdHqUGGJLlY64Ue5z4RQyCr0X1gCYM6WKoOYEZCxnkyjc7fzt5VxEzi7%2F6JG2Re%2FTZYLbtVF0%2B%2BP6CjHvZss9Pw0BCEDbraYLjOzOA6bQ69MM5Ms2KSzp7zCOad7wiCL6Wa4i1uEdeP2BxFvW7%2FfqmiW2ZOJIviQqFaetwPQYaCSH7g&X-Amz-Signature=18e8d5957be34d02518fdf235c665bfb96c324edddb8bb8913f26241de51b056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466665ZB62L%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa3b0fz74qJt9c7S3PmCO8m3mZjysIW8a0Ex9QBECWmAiEAlQosH8AqZNs7HY%2FspzT6Wr3w4pcuvyCpz%2FsoJOVTxK8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrhUnSq%2BwjJzxaHXSrcA0jwZzZ4WCL4af2c1H6bHJ980R%2BKIBrcRScMQfC6Uy16NL7ztaSXKHLTWFyUihDfIx8wd0pUCpN7J0P7PIjeaPrmi3twOJvg%2BObIg4EPMi9BPGKAC%2Flh7R9PdZBOv8MzPYj9nOOnrT%2FXnB2Fa2ebgJU%2FWrRDyBPt1kJVLvjJbFBJJadJBd1dkDByJ0BDpGfnSWS%2F8lWKK9rz0ghUSeJEN7er%2BTXMkMjF7UN7FITTpFT7gQ%2B8bK1ziNjsU20iwZqLDk%2FJyEBJxlpQigFTcG%2BlwLRxQrhvYozzvsJnWdHPTCf0XJesBjl%2Fo7WbaTAsKzBPfoD7BNZjiM4pyoTj7DUiicE8nfCU6kEoHU8d%2BkpW8ZWlBuFkrC77Kc3j5OX4zuFhaYNdDJycZ%2FiC8iwJ1Sf%2F%2BS8Fu8ImYNHGhNg4RH1Ziq%2BNcHmnZvLQRGDk4GlH1JBOm8tp4eDIy4tkRyhljAcLdcr84edIp252jZbjgeIwsCJwYZ0YudD6sbVIWl0P6IZFuQjgJFi9HwIeXXRoH3l5QNSuiA5%2FbM2KoKmZJ4M2QaBWv1%2FOHESpBAkX2Rl0BunjFtHHwxmJwowjgwYz47gVagC7t%2FH8saqee6SXEmRxW%2FagxsHO1bHUhpixF7y1ML%2F178MGOqUBbsqN7CdzgP2kROehD5cuEHP2nTgaETuif6kWiZPLC423FFKadAb68Po6KcMuvEr1C82Nlj31se7ncikmMSx2eO30c3JYZphZxGK6ZK5m7v6t%2BFeGqfpvnt9MLLvCZ46QitTZOGiPlco3Bd8DXx%2B0AE%2BOmlVg58q8jBimJW8DQhXtTvLQgSozsPiogGTwbfCasUuwHD1tbWJI%2BSqbmGKHeD3VKJaK&X-Amz-Signature=12176ef294eaf112e5deb94f8309d77f8e0c389011d15ee8a81431a4349123e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TJXCM6I%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3GiYLZOPyQY1z0i%2B1Czqr5SrmgXCkUhXQBpohK%2B%2F5%2BwIhAKIwfkCA%2FW98ZKaJzit1SOyySq5TP2H5UIeJUdiYLl2EKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyUp7Rj8uqxHNhkn4q3AOj9pdMx9Cv186p6B9ukIFGhkw0pjHpZ5kXJzRfSs%2BLnwG8eCnZh7MDqjF6BAS%2BE8wZxsh8VUl7cCAwKMS1uVZQh7TBCZTFtV7dVtwqDaCiDS%2BDyMesqqGSP3bsuYdatYAmPKzjzOIWDFbDhbP%2B9jxd%2BZSjYcnCQQnQdo4cbtuzbWSooXstkp3o0jW4UzK6ovd5sbIFLX%2BLp25X8ihdQpvWnawCJ4dBLBBjBOatrcj4A%2BnMaBuMG9Ix6ArQF%2F2J%2BEti0ALzh13Fts%2F%2FdtQv6Yg4l7mbHfDMuK6HJx8XYDCAjeTkN0SIT8gU3TsxaRT62IV4NY9NQac6WlNJDcv1unW7QlhciKLZ0v4roFkI1G5ik3%2FM8ZcCq6usc%2BB5fj7uwj9s65K%2FytDK696Y3KX6kx9GmI5Os1uWpHLRvm9j9SBVEEMdH%2FFlhKn9fZKdi2K3wjnB0Nh7%2Bf3djsXqQJjIdJHpgzsMWGfGuEnpKtW1Lc4h0sue7vFauPYMAYvkybXCxRGczDhGqsmn6EvH1hyOMEjrle9Px8iXC5Vn7QkFQym1LS%2FV3P4pYu%2Bc55hspBAi1t3tlfPjfMWRwhFSbvETbbPlbsvc7Bgaxwpudy5jLNtFTclyPcpKNqDrJP1izDDu9e%2FDBjqkAXn4sbM4IogXz9qzCnKFZXmmyJiNvrV0Ckq0%2FZbBMXP9ujW2eAlcwmbZPOoUbLwiOQmdb%2Byd6QP%2FUHP%2BlFSE1lvii%2FPrp%2BZM%2FerimqoyJ%2FbjsI5BMTTfhcL2a%2FUz2ra0RnusRZzavno5waIjNfIHMji8uiK600WbUoqeefArw1drGJsWsoJ2ez%2FO787uVIA%2BNwajrVcvshbgKCVl%2FRgn5WsVCQ%2Bd&X-Amz-Signature=665d78933038dcb58311c5477299232a2f06d7c9eac3e6c6f06fd638b36010be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
