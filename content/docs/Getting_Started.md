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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UW55WKB%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZxEd2M0meR3ugSFVpTaM2AvNCtN07EC0HUyae5Xwa1AiEAn2lda1VJUlTy%2FzU1VYUzuo%2BG3gH2BJXvs1l6Ox%2Bc%2Fi0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbt9VrQPwEF2dBhRSrcA3wz3idIoWyrJxTmH1RLMiPwdpLFGDOreLGkmyEsfXKCxn1%2FQyrs9zBA8uKe0DVkGysUmYKB%2FB%2Bhx45xrojJKUW6uJ%2Blgk9b%2FlhJrvTrTqaWrm0awnXcK1UU16yS828wm0X4rSG7hcp0YCcvcLrj8taLQiB%2BR8K9iIcy5K63eE48ULtbhqtGJ5Akd38VKFhQ0%2FyIv446ZMpv2N5osA2P41FPSK2TFhlP7bd4%2Fw31EVkOEVP1HGyuF2EfIy4RjMPO2KMiFh91bEAxpDOdvsUser%2FXAHJPBtEoqIaaAF7n2GWsEl43AxDwq0x88CL2N%2FeVdvPLt1E3PhbZuz94vdl7te%2BRCj6cFXnnepNulXtoVBUSenQvWyRfxqHWZxRoNTVCyHq%2FIf461B5AQ9zWMtr1gzbYJ71zdIo07nVL%2Bydg5DnW9qkWOMVuDFpaIxx2DMIdznTlb79wRwgTV2IMVSlItUKeDtCzYyYHYLS1IhfTuiolL6heEPwUoDpUcJar3E58IxVQ2A0LnkQNhMWvH95Zl3wyKyeaAtdTudF55brqWWu3zZo2h2bfAAS7Q%2Fu3uCLhXyD7lG4ldIB3uAsfhK%2BtR2WJBcjeoERMWQHbkyBfh5quL3BSW5gF1%2FL11ly0MO2%2BwMAGOqUBVPQN1yK54MhaLhAG9viZ33Rro9KlM4qL46PHboOZmyiUxgxnf1XNPe%2FjH4tquoRF9KUhO0XBcndrMRiN3LScN1COFOxEexXPpUz6%2FGkRlsBSBTGVA0MuikujDPrI2zAVUirX99TPN1jRY4d5fTAZ%2BQtjHhSnJEC4r16fG5yF7LGYfS4Tac2LQ43Xj1BYNniJ8iO%2Ffatx4Ly5X%2FNrvwvapBFdR3ep&X-Amz-Signature=7b3753c25daba8646c7b221dadbbc2c2a63477afeef80971446ec83234f634f9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UW55WKB%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZxEd2M0meR3ugSFVpTaM2AvNCtN07EC0HUyae5Xwa1AiEAn2lda1VJUlTy%2FzU1VYUzuo%2BG3gH2BJXvs1l6Ox%2Bc%2Fi0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbt9VrQPwEF2dBhRSrcA3wz3idIoWyrJxTmH1RLMiPwdpLFGDOreLGkmyEsfXKCxn1%2FQyrs9zBA8uKe0DVkGysUmYKB%2FB%2Bhx45xrojJKUW6uJ%2Blgk9b%2FlhJrvTrTqaWrm0awnXcK1UU16yS828wm0X4rSG7hcp0YCcvcLrj8taLQiB%2BR8K9iIcy5K63eE48ULtbhqtGJ5Akd38VKFhQ0%2FyIv446ZMpv2N5osA2P41FPSK2TFhlP7bd4%2Fw31EVkOEVP1HGyuF2EfIy4RjMPO2KMiFh91bEAxpDOdvsUser%2FXAHJPBtEoqIaaAF7n2GWsEl43AxDwq0x88CL2N%2FeVdvPLt1E3PhbZuz94vdl7te%2BRCj6cFXnnepNulXtoVBUSenQvWyRfxqHWZxRoNTVCyHq%2FIf461B5AQ9zWMtr1gzbYJ71zdIo07nVL%2Bydg5DnW9qkWOMVuDFpaIxx2DMIdznTlb79wRwgTV2IMVSlItUKeDtCzYyYHYLS1IhfTuiolL6heEPwUoDpUcJar3E58IxVQ2A0LnkQNhMWvH95Zl3wyKyeaAtdTudF55brqWWu3zZo2h2bfAAS7Q%2Fu3uCLhXyD7lG4ldIB3uAsfhK%2BtR2WJBcjeoERMWQHbkyBfh5quL3BSW5gF1%2FL11ly0MO2%2BwMAGOqUBVPQN1yK54MhaLhAG9viZ33Rro9KlM4qL46PHboOZmyiUxgxnf1XNPe%2FjH4tquoRF9KUhO0XBcndrMRiN3LScN1COFOxEexXPpUz6%2FGkRlsBSBTGVA0MuikujDPrI2zAVUirX99TPN1jRY4d5fTAZ%2BQtjHhSnJEC4r16fG5yF7LGYfS4Tac2LQ43Xj1BYNniJ8iO%2Ffatx4Ly5X%2FNrvwvapBFdR3ep&X-Amz-Signature=ee389922fb191fa942f077b2d2020a2e840a29cea3db1fd9d03d7101ff134c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJUJUTD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOTUcpa4HfDFouPHlQYbQapmN7mDM9E%2F1J7oeXf4uj3AiEAvOLBlGPhZXIcQHQbmn7Y8H8iT7dkpj0dX69DlRh7UCQqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErp6w2p%2Bk0i5x0TzircAyzMA2OuBKp3SOX8qOKLdiEWobeVhGNBaoTaMXTvFz8Vz5%2FI82x3RfRraj6%2FGeOkRC%2BL8mAbraiPk9G%2BlslBjNRyx2di92Dyrwf1fquP6J5l1mJ68rh%2FVZ08poIqEnhozcTgImQVRR18%2Bj3yXCLy8yWIFo2sz1q78l5DfQvoagbL5wPGBHfScvV961sCn%2BO0dAei53ITghISHmRZA0ZbORjpCxd48OWBDPZHEs%2Fu6wI2qfMUlmrmhdUXlnL5%2BOOBSizgEKFNsBOeY4ftry5Y4JlO4ZpgHG3%2BegD%2FMkd4Rm%2FlNArf5FVmNawDuaDLCYTWi5hiUKVerltg17FXZQM526jqNzNSCSUB1s%2BIARyQHYbyIn615n2MxVetUmZ0CQHmeiCVpqm2mhcaY3aUvxMGVon8beRy1m8niY19bKXB2fNrhYiDsZ%2FEDKLrywX9r%2FynhtmOGA3IqvxIQwc0kH8qP0r3VwVYQiH3h12zUEcNoeJPMM%2B7dJSoSrnwc6%2BkTiRrOU2QW2nL4eC437yxj6AT%2FXzzKG1zgtj%2FL%2BK3cXdtCgzNZ%2BtFem2o0htZQMJ1T5h9koig0Kh9dhJ1wror17MmudBcvUgwFC6sWnew8%2BYk1t2hOIs4cnBfNPGvIqL%2BMO2%2BwMAGOqUBNgEfS2eQqDm3iOf9YRjhoI9zDw1TBJV0TGaVa%2FlDWy0m8sMwRN4x4if3O71tvcSS%2Bhr%2F6fUDVJh4sApbUKkd7DQLICPf%2BnevhV9MmqTUwwkDscqa4fTS2sziUbXxLVZGkoUbhLyvFpYkICk9Sq1Zpnyu9f17ncR2as5EvHNG%2BI4sJXpYPlCt9IXw7%2BIFWpP8zARF6jufZ57eNZWAwZRe3exFYWUq&X-Amz-Signature=dcaa1490ce064427a83d9e0f55a933fdc2146252a125ca32f3fba64488dba955&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IV7TWS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtaRyd4AYxCaSXn%2FnUif8D8GkPI%2FpLRpDDLltyxf72OAiEA9pOmbwZEqDpjaiGMuKo%2FYY7WRBbU56wJvX7QZMLpZfAqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOw27GLaDujN%2FzmDoSrcA7zGCrWRxmAdjXiXu27BJXiQEHieCEpzDvfOhPWOQzgYjmZlXXLV8IJeRhvuX3sn1pHTzW3ecJpSd%2Bh8Zeo5seuTAFZgCsqLtkt7sUU6ew6jHPieeD5l%2FW4LiQlsM91kHMSrC8BtY0cbHZYANHEcPRoU6Of2PqTu8RCi9bQyOtdCDpj7GnMW%2BZWRBcH1LLa8mKpg8bWU%2F7Ou3Nl1SybQRKJo%2FP7c9Eu5LFraTOMAKZJnoW3BbxXw9eEp0LHuDFstsgQMC56ii%2BygwLgnxgrdJ0jRrFz3Z9uKNUMGDUo4UGBd7lj%2FA1zhrwhe9uu16zyi5wyLig8M2jtv3m1CjWvQyDHSTnNnhg2MNC4MnakWQnTmuZt8tq4HfryPadYT%2BSqG2r2yfularOKL4tcn4T37TLEykiH1m4UlWBISK5mukaaIfk6fpqyOsbg4Npf3MmnN5rbEzbJTHgD5F5kzHS8g9letq6SIMAQgxKOLlgE2DAERV6NPdaKdl7Qihdpf11gOoY3X34V0R1Dtm2ZX4arepyjTxwvEIAT7WhRpJ7yjqh9Pl5JRAHWtQBb8QXER9OwaJTkq1t9xOfRnTIAWWyj7dJTOszajRN3IECFOzZtGVv1ioHfxcjD5pVMHszFfMJa%2FwMAGOqUBJYj%2B4j78OpvXa4axuOzmkVlWdWC7vcD3TJpfzWmBkkZUJuJh21SnHltxom3CdM0r7pWVxt9YQqDLExL5iRDWut0Vb1uOUoS1JQDMk7JBg33SyAzNztLbYGeMNDBrnR0UgFuLiqxjGLUGCeGAoZlyq6lcABPVVIdX5zMRYVvH8TBGhuX9CXC8%2BymiSQQhXbPpeBHJaNI889fvJsQcnwSkxX3n4fNs&X-Amz-Signature=d3c5ed91b8d6b6b0402afc5ce39be39f542f07633b97731db81fbc7fb2e5b7b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UW55WKB%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZxEd2M0meR3ugSFVpTaM2AvNCtN07EC0HUyae5Xwa1AiEAn2lda1VJUlTy%2FzU1VYUzuo%2BG3gH2BJXvs1l6Ox%2Bc%2Fi0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbt9VrQPwEF2dBhRSrcA3wz3idIoWyrJxTmH1RLMiPwdpLFGDOreLGkmyEsfXKCxn1%2FQyrs9zBA8uKe0DVkGysUmYKB%2FB%2Bhx45xrojJKUW6uJ%2Blgk9b%2FlhJrvTrTqaWrm0awnXcK1UU16yS828wm0X4rSG7hcp0YCcvcLrj8taLQiB%2BR8K9iIcy5K63eE48ULtbhqtGJ5Akd38VKFhQ0%2FyIv446ZMpv2N5osA2P41FPSK2TFhlP7bd4%2Fw31EVkOEVP1HGyuF2EfIy4RjMPO2KMiFh91bEAxpDOdvsUser%2FXAHJPBtEoqIaaAF7n2GWsEl43AxDwq0x88CL2N%2FeVdvPLt1E3PhbZuz94vdl7te%2BRCj6cFXnnepNulXtoVBUSenQvWyRfxqHWZxRoNTVCyHq%2FIf461B5AQ9zWMtr1gzbYJ71zdIo07nVL%2Bydg5DnW9qkWOMVuDFpaIxx2DMIdznTlb79wRwgTV2IMVSlItUKeDtCzYyYHYLS1IhfTuiolL6heEPwUoDpUcJar3E58IxVQ2A0LnkQNhMWvH95Zl3wyKyeaAtdTudF55brqWWu3zZo2h2bfAAS7Q%2Fu3uCLhXyD7lG4ldIB3uAsfhK%2BtR2WJBcjeoERMWQHbkyBfh5quL3BSW5gF1%2FL11ly0MO2%2BwMAGOqUBVPQN1yK54MhaLhAG9viZ33Rro9KlM4qL46PHboOZmyiUxgxnf1XNPe%2FjH4tquoRF9KUhO0XBcndrMRiN3LScN1COFOxEexXPpUz6%2FGkRlsBSBTGVA0MuikujDPrI2zAVUirX99TPN1jRY4d5fTAZ%2BQtjHhSnJEC4r16fG5yF7LGYfS4Tac2LQ43Xj1BYNniJ8iO%2Ffatx4Ly5X%2FNrvwvapBFdR3ep&X-Amz-Signature=9fd9458ab1ddf6c2b5809c60dd23bd46cca5115812c92f15ac0e65a22c982584&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
