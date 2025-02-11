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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676AL2JMR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0tBuKwGCIxqnn7JnMojMj2hc7Q89tDv%2Fv6PrEZVnETAiEA6TDD1Sw8qSK4OZBUCWqF865BhKub6eZeEbCEzoiZdL8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLRtsAR9%2BDFcYxobircA7%2FSXn3MeEO490HP9ERNPbZYt7IsST5AkdMvpBgo8HFewHDv5eJcfvbAS4IlVyCGwa4EwKmX0uIngY5b0dzFDjr7NQGqeHRNEeEV0fZfjKefBdIsTfGsN4SyntuxNaUe%2FA5oNn1FwYJf9WX0EzA%2FCMo7FrVXz9WDxl1x1bMO9i3HBSNRdVir30siv7P4vRAbdp0DIsTLh%2F21VOKkw3shVExVZvLmkvSna%2FIFEOjHyss569WSdh8vQXoVoJWsj218uEpf8gwWp4JZXz86BMPbpgnyMu7wBSEaHGAfhXvwC%2BzhF3HVar9fakXKe%2BnSB7PeJAH34tghAtESDykTtoVn7YXeV5J5yI2jIEl3SZ5PokQPBFtzJolSWLmNEGyD2COuPNCxdE2ZN3%2Flvk4D5n7HaTiIqjnl3AslmQ7aeYCTkJco5cvLlRSRuamEGwwT1sHu%2FXjitz0NSphbh%2F1vgrp%2Fe7e1Tc1cgOsg%2FcdTgsl8nIGiV491gbifPqdA6%2FALvIwoOLmKLxyyoCcOPQso8mU%2Bzk9L0Bui2c5y3PU2nVmvrK%2F%2FhajxgqcHh1Uq83yRU%2Bbw7jvQA2sQ9Z47yXLhmTBkZIQPcCAkG4oYyLhfMugU%2FKEtBPluhyBTxo5Xbr2%2FMNTKq70GOqUB%2FOMFkBfaDnJVEv7hWNQoJ%2F87OQLPCkKu56BY7GOlxsfM8z0Z6YvLmLiMEmNPWgLUYud3caKtjWgQwHSSC6Phn9CmCBGg5HFSV0UmClIRuganqEldT2pNLZztphGiMr%2B5CMvIdK5y6iYroqm%2FV6GzmbhEtgmh1xAsmtptK19pr6aZAjMZbW3g0exlgJlARJABdwND2p7sLjSv%2F%2FhRhSUtxIHCRldh&X-Amz-Signature=6047bb5fe9fdaa0d0b88ce7ca73253ec5dd91916c87012c6bbad1ec3fca21d01&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676AL2JMR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0tBuKwGCIxqnn7JnMojMj2hc7Q89tDv%2Fv6PrEZVnETAiEA6TDD1Sw8qSK4OZBUCWqF865BhKub6eZeEbCEzoiZdL8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLRtsAR9%2BDFcYxobircA7%2FSXn3MeEO490HP9ERNPbZYt7IsST5AkdMvpBgo8HFewHDv5eJcfvbAS4IlVyCGwa4EwKmX0uIngY5b0dzFDjr7NQGqeHRNEeEV0fZfjKefBdIsTfGsN4SyntuxNaUe%2FA5oNn1FwYJf9WX0EzA%2FCMo7FrVXz9WDxl1x1bMO9i3HBSNRdVir30siv7P4vRAbdp0DIsTLh%2F21VOKkw3shVExVZvLmkvSna%2FIFEOjHyss569WSdh8vQXoVoJWsj218uEpf8gwWp4JZXz86BMPbpgnyMu7wBSEaHGAfhXvwC%2BzhF3HVar9fakXKe%2BnSB7PeJAH34tghAtESDykTtoVn7YXeV5J5yI2jIEl3SZ5PokQPBFtzJolSWLmNEGyD2COuPNCxdE2ZN3%2Flvk4D5n7HaTiIqjnl3AslmQ7aeYCTkJco5cvLlRSRuamEGwwT1sHu%2FXjitz0NSphbh%2F1vgrp%2Fe7e1Tc1cgOsg%2FcdTgsl8nIGiV491gbifPqdA6%2FALvIwoOLmKLxyyoCcOPQso8mU%2Bzk9L0Bui2c5y3PU2nVmvrK%2F%2FhajxgqcHh1Uq83yRU%2Bbw7jvQA2sQ9Z47yXLhmTBkZIQPcCAkG4oYyLhfMugU%2FKEtBPluhyBTxo5Xbr2%2FMNTKq70GOqUB%2FOMFkBfaDnJVEv7hWNQoJ%2F87OQLPCkKu56BY7GOlxsfM8z0Z6YvLmLiMEmNPWgLUYud3caKtjWgQwHSSC6Phn9CmCBGg5HFSV0UmClIRuganqEldT2pNLZztphGiMr%2B5CMvIdK5y6iYroqm%2FV6GzmbhEtgmh1xAsmtptK19pr6aZAjMZbW3g0exlgJlARJABdwND2p7sLjSv%2F%2FhRhSUtxIHCRldh&X-Amz-Signature=d167763334cea8c435778401eb047e990f937434b5c3cdae33f2eec232e0976f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HGE7UY4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLc9oZFBOiD7tLygqPVhp7f3Fuiks%2F4spq8tt40hWA0wIgeMvX%2F7jKkwpwvhGONuGTnG7P49IUkGR4Uq7t%2Fa9zCDwqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyDU2RjWa0F1O3rrCrcAyTNm5V2%2Br61EFhnR0qp1jlqgWVXgReMLdY0sjMVYO3LQ75hrA6IzCrgCytpd3BgXb2IrwoI1qluVPDvsZQIWa8kuxYhlUg4cxyxdMnf1NO6%2BHTyfs6a7Fv0gYm27WunS775e0ZNEVGFpaqFoGMijl3BiSbekjPmEv71mHO0w%2BaomZrHY%2F78dUx5PPRIdHUnCLNHAQ%2BOoE2oJoaimi%2BmlDvQPgg5JD2oqIpXbYIXVjc%2FyWgtvM8y0IVkCbAIRKKHWErXcY4qmbMi%2Fa99i5fa3Actnk9W0zmWVvqWs6Rr%2F55X4F3BeCTh81xP7kWeXZmrv7r2Vnv7R3nlHU5Xg0qBhlr%2BdC%2BZMScohQpuV7c2iu%2FuoJ6lvzRmHpn55hvhvyV1X6q3Au7OPNuR8ykvwFmk5uVqE%2Fx6Z3jiMkneyt%2BIMaMgsuMyhXuPPPGNZOpZMLudlGGCC9Pw5UwmPoN2%2BI8S1oM%2B1wJF0Q5IdvZFCAKsX%2BQ%2FGli%2FuZ0TfYq%2Fw%2FU8NdDQSF%2BFhjTJuhXD1oCKD4x6Tu99foZ2ImnV8abTu0PXoUwGbVJcn2v5neUdRM9TZg5EB328AQczy%2F8CXcDBT45cBCiFYQ6pKpSCOyUp1jogmmdH5rd3PRB%2FM1YsZj%2BrMOPJq70GOqUBeBn3E8DqjYAkEeJK4%2FPUdONWO%2BKkLPyzhBrmsbAgcFaNh0l374YHjYuJ3Yo62HaafrkHMhS5NL7V70v6TPyN2Vf%2BFb2DZrmvq7OI%2BgmPpvUdV4kt3snirjLPlruN%2Fa%2BOK%2BXE2LeTjhegctvZEfbcfIOLM12neE8Isl7%2F09QIUbAfDdh9soB%2FBUeOQlV3s3eapCpQCYBR8kEjbraPvYSyfImIjub%2B&X-Amz-Signature=c06fdca2e9c968ac1861d7ebabb674d4a4462ec70e6b383e62630ef1fe2e5902&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GL35FMI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMb%2BdlOWQGk5SWXvdRHWuiMzzo1U2DVSEWqdu3Y89LtQIhAMXVhbaH6EqyIpu%2BuYHNPur3hYONkZhwOnOyIoKmZLLiKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx%2FDbyI5cgJsIUtUYq3AOj%2F7%2ByEl4KxFDQewgcuqnkU0HV2r2C9svrUE5XXtSzYhHdE5EK6xHs40%2FgKNwIAavuzBsVTz4nKxJWzjtDq3jRQyfk6OaclJIR2WsfA32FI6ZM3Zpt0FtCmvMVrv65xODj8guf4v0DPhRqJCc%2B8U0QaqjgP7BEkvy0e3xyhJklAa9cOsVx%2FpiYvZDyVoFNU1mV0T8ul3yrw1FnsruIWiNYsBb8CL12362W2W2XM7HTUFUsiQFc6lrR7TsmjK7g1AFpFYlnHUK5paeP0MC%2FTw1uUig5LibKq7Uze%2FD2ojiz6OkERIp1vjRTV%2Fo48f5C216OoLNycpgmq59ZN6onvzFAkoOm0I3HBRDj8Em0EJRmlTuIYF1pj1aeGrvTnw0NmgK%2BAO%2FPnMP8emCjFEAOop9Lrmg9JG7ik5JC%2FiQydtoGfS69FQn%2BLh1i%2BCBBULPQ6wmJgT7euw9oS1o%2BzvZhjmAKGD7KX8ZYsc8c%2FFnTvOTJatugitC5brQfHV3ZCGiAdEIMfkGrUJNv4lfBAhioeZtKTZSjdMs1ZcN7fMTxdlUFcq%2Ft3kEiHZ5c3mWXyqNrnXaDh%2Bk%2Fji1%2FWe24EhuCPk7rW3tstjOL3qCTBl%2BRuzrVnJOBTwxGVTMgnmYNXTDUyqu9BjqkAYf9ZoVUrPqAuVRs3xpp%2FYtzRVgIZX9b92PRP2bUlM%2BFMmXCzpdZ4CaE4uzdW7Ih3kG16MHzBBQ3nMG9AEC39pdjDAvs7dv6IVqxZXd%2BfqpjdVxjDyCaQwwR9ooYtQ3j%2BbsK5kFn3NY0q0cEbZL6MHbIcwo55L%2Bk%2F1ytYPh6IGxauagWZKlbsPGbMFS6WZ%2F90yIMon8iTc2FTjKDQ2dI6Pjdop7D&X-Amz-Signature=bbdfefc9874138674c8b730d69eb6f089dea57d60dd5cc45404a9f3c17776cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676AL2JMR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0tBuKwGCIxqnn7JnMojMj2hc7Q89tDv%2Fv6PrEZVnETAiEA6TDD1Sw8qSK4OZBUCWqF865BhKub6eZeEbCEzoiZdL8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLRtsAR9%2BDFcYxobircA7%2FSXn3MeEO490HP9ERNPbZYt7IsST5AkdMvpBgo8HFewHDv5eJcfvbAS4IlVyCGwa4EwKmX0uIngY5b0dzFDjr7NQGqeHRNEeEV0fZfjKefBdIsTfGsN4SyntuxNaUe%2FA5oNn1FwYJf9WX0EzA%2FCMo7FrVXz9WDxl1x1bMO9i3HBSNRdVir30siv7P4vRAbdp0DIsTLh%2F21VOKkw3shVExVZvLmkvSna%2FIFEOjHyss569WSdh8vQXoVoJWsj218uEpf8gwWp4JZXz86BMPbpgnyMu7wBSEaHGAfhXvwC%2BzhF3HVar9fakXKe%2BnSB7PeJAH34tghAtESDykTtoVn7YXeV5J5yI2jIEl3SZ5PokQPBFtzJolSWLmNEGyD2COuPNCxdE2ZN3%2Flvk4D5n7HaTiIqjnl3AslmQ7aeYCTkJco5cvLlRSRuamEGwwT1sHu%2FXjitz0NSphbh%2F1vgrp%2Fe7e1Tc1cgOsg%2FcdTgsl8nIGiV491gbifPqdA6%2FALvIwoOLmKLxyyoCcOPQso8mU%2Bzk9L0Bui2c5y3PU2nVmvrK%2F%2FhajxgqcHh1Uq83yRU%2Bbw7jvQA2sQ9Z47yXLhmTBkZIQPcCAkG4oYyLhfMugU%2FKEtBPluhyBTxo5Xbr2%2FMNTKq70GOqUB%2FOMFkBfaDnJVEv7hWNQoJ%2F87OQLPCkKu56BY7GOlxsfM8z0Z6YvLmLiMEmNPWgLUYud3caKtjWgQwHSSC6Phn9CmCBGg5HFSV0UmClIRuganqEldT2pNLZztphGiMr%2B5CMvIdK5y6iYroqm%2FV6GzmbhEtgmh1xAsmtptK19pr6aZAjMZbW3g0exlgJlARJABdwND2p7sLjSv%2F%2FhRhSUtxIHCRldh&X-Amz-Signature=2c599935fa9b3aba3776700efdc714c956dcf2a012017bddbea0f9b7f183c526&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
