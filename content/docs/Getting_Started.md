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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMMB37ZZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd20kGUlQgGYvQb4pNfQudsusmUcU%2BzBXVwKWH%2F9x%2BIAIgIl29S7M7IhHOpMR5q3P4Bqls%2BqV7h7jvxKiXEMxOKCMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArY5GdduA5Lz6xH5yrcA2HNCBmgDtwgcCzjEW%2BXJcRrp3qyTcYHXVI%2BOHp3mgD%2BX%2FL4AUuc6mQUzwypJv%2BHZ%2F0GaDEPdka4llm%2Fku9lsIxjvIWeqA8wRB6PBq%2FMeMyUcrAZDwVyyJMaIaVf26OmFX%2Fvlt2X0qsbJFb70efqWLQGdE4P1JHxkITZCU8c1xxlzv1KPi%2BtKKS%2BsX3iRkdwYlhs2zpgXdlANLNw8otbiEX06bIA803z99Zb%2FmpTj4RKhLNfSrn5taj%2B7CEZMkES3Z4vdA1E4ep9kQKHVuG%2FCzMggyJpdXzp3wENQThNjfT8lYNlkwpwzrTQm5jv%2BpSvA9e4HRin3gRh%2FH%2FjE%2BUFwbIBzhIdFqpoov2hBETerUWdgF3ba8rZt17qCitLY464RTQ%2BRfgNcngB2yntXeiFkvWcboe9rCEkgQ01dmPhHyudvibHU0Vv0C7%2Fp40%2BCedkSuX2vFkX4sOEHfXW6Ts1BLh%2Ft8rNR2la88jFjm7Kgle9M57bqUH0BFYNl92Ry4jjC1aA2SF5IjQ3Z41asrK5P5SECE7SUUiOnARCyJrV6FilVGj0d%2Ffji5fQTAx4yAGWIUx2ETmrpR0T6MmUGyHSyGsv603UpuxYoHeRxQWbq75ig399hpfnKQuEEfxCMM%2Bw6LwGOqUBK64gKci9SRs%2BswIVhc%2BIvr9YIzONygBjAS6N25s26NvFS7%2FBQnJtMhWT3NhLVZKyEVPckWYP%2BvSagdoK54%2Bvur8LKPQNJpQkk9d8d8mgBYy0MeOQHt%2BRyUs4QaDshckbTeiyrVg0l0wAhuI9D0iUxao5ldOi1Xo6y327PYfQf1RK6aYo1C0AzO4oK9Y3esnvcWLro79ccgh3hX8n%2BveJS37cCKAJ&X-Amz-Signature=641e2c7e561ed0c41007f6d78be6221ef139c364b968be35740e1b755df0beb9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMMB37ZZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd20kGUlQgGYvQb4pNfQudsusmUcU%2BzBXVwKWH%2F9x%2BIAIgIl29S7M7IhHOpMR5q3P4Bqls%2BqV7h7jvxKiXEMxOKCMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArY5GdduA5Lz6xH5yrcA2HNCBmgDtwgcCzjEW%2BXJcRrp3qyTcYHXVI%2BOHp3mgD%2BX%2FL4AUuc6mQUzwypJv%2BHZ%2F0GaDEPdka4llm%2Fku9lsIxjvIWeqA8wRB6PBq%2FMeMyUcrAZDwVyyJMaIaVf26OmFX%2Fvlt2X0qsbJFb70efqWLQGdE4P1JHxkITZCU8c1xxlzv1KPi%2BtKKS%2BsX3iRkdwYlhs2zpgXdlANLNw8otbiEX06bIA803z99Zb%2FmpTj4RKhLNfSrn5taj%2B7CEZMkES3Z4vdA1E4ep9kQKHVuG%2FCzMggyJpdXzp3wENQThNjfT8lYNlkwpwzrTQm5jv%2BpSvA9e4HRin3gRh%2FH%2FjE%2BUFwbIBzhIdFqpoov2hBETerUWdgF3ba8rZt17qCitLY464RTQ%2BRfgNcngB2yntXeiFkvWcboe9rCEkgQ01dmPhHyudvibHU0Vv0C7%2Fp40%2BCedkSuX2vFkX4sOEHfXW6Ts1BLh%2Ft8rNR2la88jFjm7Kgle9M57bqUH0BFYNl92Ry4jjC1aA2SF5IjQ3Z41asrK5P5SECE7SUUiOnARCyJrV6FilVGj0d%2Ffji5fQTAx4yAGWIUx2ETmrpR0T6MmUGyHSyGsv603UpuxYoHeRxQWbq75ig399hpfnKQuEEfxCMM%2Bw6LwGOqUBK64gKci9SRs%2BswIVhc%2BIvr9YIzONygBjAS6N25s26NvFS7%2FBQnJtMhWT3NhLVZKyEVPckWYP%2BvSagdoK54%2Bvur8LKPQNJpQkk9d8d8mgBYy0MeOQHt%2BRyUs4QaDshckbTeiyrVg0l0wAhuI9D0iUxao5ldOi1Xo6y327PYfQf1RK6aYo1C0AzO4oK9Y3esnvcWLro79ccgh3hX8n%2BveJS37cCKAJ&X-Amz-Signature=f4c1d1e67c3cee4dbbbf252cc384abdf279129aa372393296846993e8a8f44c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQXBFTP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNIRCeS%2FB51QimTLu%2BnV8BL0LzUBsUSmD6Ite6XDiIVAiEA6oXg%2B2PpbkA%2F6VH56bTaPwrtULJjb9ftbad6eejMlnUqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXCrGBXmIi8Xx77VyrcA3vqJvxXLltHRhriCOmsO0LnjVWHLchsBMABX%2FK4x6EiJcucHqez8gJzKeSC4U1WJh2dVUFkiauTeFMr4Q6GdAPQjVm5af8Y2QpBErPVvFrO6NwmGhsqlztd6Kn7DMajFz7HBzINVOY%2FvyoFW4CMjoXlc7cqF6InVXBIUHw9izcaV%2FsciTuVoxAVR4haTMYavij9FWr2JqROD%2B9tjdkG5Mr8CpXRbQgB1Yw1A3kmHDR6ctwWO9n%2BLR8%2BansnA0GWx%2FCV5op1Hvwq29aK%2FN68TVFOdJ0E1SspnPUcuxvzruD6uzt7isU%2B1NcLLUXPCmd9rb%2B3gX7TSWH9GQ%2BeMdFoYj5sDDCJGDg%2F5X4GGBHiDMAnFIjLO58mv3XN749XtFYXAL%2FpIF64XAyKoEBCUzOgyRpF4iFMEgW7qPq7RSwFmNhAggQiVGz%2FeDqH67QVwb8e3P7%2B3K4hyUiLTfOV8lwLDhjJn41EVD5lujCe9DICN21mS91GEE8Xx1MS3B4J4z40IrnZyqt4SdRIffyNDUKtb%2BSaqAq8MNClvh44CJLW1%2BS1ej3CRYJm95kwToa430IjaNy1Us9cwsHVQsNwOkylo6mrNfU5ApB3S25pSAt5mQn%2FmmjubJ9E4DzQW2kNMMGw6LwGOqUBtOVpviJ%2Fg6%2BeD3z62VNsVObT01IUMnjE0oZvbVr6CC07L70Aj8EWYPUoCmIO4sxYEsFj%2FR0gXMJiF3ae1dEO3A7kViuMZHz45AHNZXErGdoQaZNqqMQLZNCe%2FingS%2BKmQHAY7dTATssY%2FaI6fk0Q0JgdXEM0nlhDU1on6K%2F7Bu4Zbs4DvxHs7GPf%2BU%2BThbtUmESuSJ9NvRCvAlCwba3E0vgz0iS8&X-Amz-Signature=acf8eb7f5311a04c15121515a16215042522d7836ce655139386828903edd120&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KINT6PZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuGdZjGc9UgltDBS6W9lekW7hi28Z3u3kNSuTLoULYzAiBIGK0iKusRRG%2BFGn0NmQw8vpMwu3qsWXC6A8JCgmggISqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6oqCGPBVikYWs4oSKtwDCd6anF5cPQDlo7h6wL%2ByWtfQ1YEivDv0ftDYOoWR3gtVpCud4SBcPvZrN6yKk4ljNOEBMDExKmeaIpNHlZGWOJMqNhrTgz%2Fp50VU6dya9q3vUN9pwnBjLKKUxqEJDLiQ3aO%2BlRhZWxUShzby3bqLb3NmrCB28aazoncBBySYbbCIVfjJrOgxtVw%2BKtgjyuVDb6f2G%2FbGCPBt8Nnm6GYYUnpgSwOzVWiBXDc6r2hXcoP4lOn1zTNwDc2n2DdhETWAD%2B6C2uMF2Ge0eF0o56Td1QyligQyQTVdDDzm5XS0%2FGQXO35qkgZ4EV0E9W0dFQJ%2BhGw6o1maD%2BB49P1yH%2BMtuYZU06qWYYUglVtgjdgSigterguw1O4cFTPH2MtwnuS4zAYEkfizmXIM2938n13i3IV3f4M5Bwr%2BZqnqE6%2BboIHacMd3nbllmun2cLhwmZRQd19ZOUJa21uaYOtjpcvfbWrU8TZdd2aFhp6xg2MSx9IdchzVgstyKtqP7XCuKuIPGDHe0ZkEnWLvXDZ4cBZL9pB2gmtA%2FtNduFo%2FAITr0w06dmBPbVvWUXxlc8SesqirxchARYIYC2Ho7ozXhOxihOoJcITxTM5ap8bpJyARfAfNRj0qUcdDq6O0ipow2bDovAY6pgESl%2Frza314WnY3U%2F0dEv2d2EeupyAwKItgKrVO434ROeQDPGqoe8zbMqSK0ybUfPKm1YTxv3isIZvnU1zkFBqmO4G7JS8wtIizN%2BoHwqtwhLKX3AKSe3M9cFl9v%2BNhrouRRqVbJ4WQZ9nHQfrfSXJ9y6s6fLKxhY7zgKb5cvImKIClLCtjQ31h%2BtNZUsX8OxSKzYi9t43ECy1LKBDavsspexahvUqB&X-Amz-Signature=cf11e2f435d3ef5d298a5874b75dc9ecac14116a93539a1afcd3187f48f7dceb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMMB37ZZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd20kGUlQgGYvQb4pNfQudsusmUcU%2BzBXVwKWH%2F9x%2BIAIgIl29S7M7IhHOpMR5q3P4Bqls%2BqV7h7jvxKiXEMxOKCMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArY5GdduA5Lz6xH5yrcA2HNCBmgDtwgcCzjEW%2BXJcRrp3qyTcYHXVI%2BOHp3mgD%2BX%2FL4AUuc6mQUzwypJv%2BHZ%2F0GaDEPdka4llm%2Fku9lsIxjvIWeqA8wRB6PBq%2FMeMyUcrAZDwVyyJMaIaVf26OmFX%2Fvlt2X0qsbJFb70efqWLQGdE4P1JHxkITZCU8c1xxlzv1KPi%2BtKKS%2BsX3iRkdwYlhs2zpgXdlANLNw8otbiEX06bIA803z99Zb%2FmpTj4RKhLNfSrn5taj%2B7CEZMkES3Z4vdA1E4ep9kQKHVuG%2FCzMggyJpdXzp3wENQThNjfT8lYNlkwpwzrTQm5jv%2BpSvA9e4HRin3gRh%2FH%2FjE%2BUFwbIBzhIdFqpoov2hBETerUWdgF3ba8rZt17qCitLY464RTQ%2BRfgNcngB2yntXeiFkvWcboe9rCEkgQ01dmPhHyudvibHU0Vv0C7%2Fp40%2BCedkSuX2vFkX4sOEHfXW6Ts1BLh%2Ft8rNR2la88jFjm7Kgle9M57bqUH0BFYNl92Ry4jjC1aA2SF5IjQ3Z41asrK5P5SECE7SUUiOnARCyJrV6FilVGj0d%2Ffji5fQTAx4yAGWIUx2ETmrpR0T6MmUGyHSyGsv603UpuxYoHeRxQWbq75ig399hpfnKQuEEfxCMM%2Bw6LwGOqUBK64gKci9SRs%2BswIVhc%2BIvr9YIzONygBjAS6N25s26NvFS7%2FBQnJtMhWT3NhLVZKyEVPckWYP%2BvSagdoK54%2Bvur8LKPQNJpQkk9d8d8mgBYy0MeOQHt%2BRyUs4QaDshckbTeiyrVg0l0wAhuI9D0iUxao5ldOi1Xo6y327PYfQf1RK6aYo1C0AzO4oK9Y3esnvcWLro79ccgh3hX8n%2BveJS37cCKAJ&X-Amz-Signature=39fd92808431d107076f97b90aac8bce784fe0f750d567ccaf315d9e1609d93d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
