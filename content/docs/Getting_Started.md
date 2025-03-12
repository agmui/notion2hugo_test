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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXQMFCQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCeC322M%2FD1E3VW3704TzELwC%2FL9m%2BtW%2B2I%2Bkl6%2FKT6XgIgVpSNWScGAzdGVLzgMI8dufa8etMGCaLesNAiSJwqirwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAFo7sHRX6sRNjuECrcA28p9YxtHvUhLowefrK4F7tjrx7xg%2BMxeXN2tz1BaySf%2F17KD3c0hTcFdXu9J%2FdXuespcaF476N3jPFLtGyiawEdbHmqDmArHwkfmdqiL7Gq4XmKWWBxGq%2FkPJLqA2rDuFLWlQLS3TPl8mvCNieNuW7pxBHavI6tz0L6IpfIzcRIPeTimPfP67S5wDwIRUsIl9vaLvyHk%2BHsg1oMeT1QPGkABKvJk4HdztXh4oduUKxjdOo5i1J%2Fg0HCQzdb6tbrCI2yXM%2BZXhi1zbJbJanYG9Yr%2Be8HByF9MOmX%2F311n1iVLejhy8ri7HMBe1IgDacIoUi%2F0Dwcxnj18m8C1QRc2m5XqfisiUyQPGlb3%2B6aosJPiLZ4qaUiaawUrWiwGHYCTW8A1%2FLNXBS%2Fd%2Ba2B%2BPxzzt0Ck9s3MA28t281v1Vuy5OBOmb7YIhy%2FSIM78u2G7ZRYyjwie%2F4S8HY%2FkzkOjRBuy5DRAN2KqrF5djFh7xXdSy4TVCaPCijdMVHR54Xc0PU%2B%2BJD8U5tXOh4I6oUrVmw5v%2BEdKmxUH7QSFiOxrJatycm4PQjKpNi43sYrMxvwELIm3ynn71%2F5c%2BNAZnjUciHh%2FsDdGa3gwHHyZQQ75%2FQTyXjac%2BnCiUve2cbpHCMIKEyL4GOqUBuwqk0SeksLBZvWGp%2BWKSDaDViaKx74m%2BY4JolzCrwLcWrA2xlSuRnt0EL7ynzltdyhycRaI%2F7rPbGjriF9mnJ2VlvmDnbTGflGcZSx4YHMOk69fkaaiLqeRNrkVZrb3in0X3DxlGAQS7oPw8q2eixOKhdtPtfMSerJrV%2FlPYXT%2Fv280GnLMDpMtLrfN0xyR9rVALxBS8w0%2BVka%2FLjRw9iWReeBO8&X-Amz-Signature=bac11a1b476befe646d1da5fe6fcd0bf48abc829d3856645c75a32199e26b4c0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXQMFCQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCeC322M%2FD1E3VW3704TzELwC%2FL9m%2BtW%2B2I%2Bkl6%2FKT6XgIgVpSNWScGAzdGVLzgMI8dufa8etMGCaLesNAiSJwqirwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAFo7sHRX6sRNjuECrcA28p9YxtHvUhLowefrK4F7tjrx7xg%2BMxeXN2tz1BaySf%2F17KD3c0hTcFdXu9J%2FdXuespcaF476N3jPFLtGyiawEdbHmqDmArHwkfmdqiL7Gq4XmKWWBxGq%2FkPJLqA2rDuFLWlQLS3TPl8mvCNieNuW7pxBHavI6tz0L6IpfIzcRIPeTimPfP67S5wDwIRUsIl9vaLvyHk%2BHsg1oMeT1QPGkABKvJk4HdztXh4oduUKxjdOo5i1J%2Fg0HCQzdb6tbrCI2yXM%2BZXhi1zbJbJanYG9Yr%2Be8HByF9MOmX%2F311n1iVLejhy8ri7HMBe1IgDacIoUi%2F0Dwcxnj18m8C1QRc2m5XqfisiUyQPGlb3%2B6aosJPiLZ4qaUiaawUrWiwGHYCTW8A1%2FLNXBS%2Fd%2Ba2B%2BPxzzt0Ck9s3MA28t281v1Vuy5OBOmb7YIhy%2FSIM78u2G7ZRYyjwie%2F4S8HY%2FkzkOjRBuy5DRAN2KqrF5djFh7xXdSy4TVCaPCijdMVHR54Xc0PU%2B%2BJD8U5tXOh4I6oUrVmw5v%2BEdKmxUH7QSFiOxrJatycm4PQjKpNi43sYrMxvwELIm3ynn71%2F5c%2BNAZnjUciHh%2FsDdGa3gwHHyZQQ75%2FQTyXjac%2BnCiUve2cbpHCMIKEyL4GOqUBuwqk0SeksLBZvWGp%2BWKSDaDViaKx74m%2BY4JolzCrwLcWrA2xlSuRnt0EL7ynzltdyhycRaI%2F7rPbGjriF9mnJ2VlvmDnbTGflGcZSx4YHMOk69fkaaiLqeRNrkVZrb3in0X3DxlGAQS7oPw8q2eixOKhdtPtfMSerJrV%2FlPYXT%2Fv280GnLMDpMtLrfN0xyR9rVALxBS8w0%2BVka%2FLjRw9iWReeBO8&X-Amz-Signature=f3722683f9544b5aca2e540a78aad29b1177399690f9db375fb8e757707bdb14&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQLMSXHH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH4a3UCWUKg%2FKA2tQ8uZAFbeGnQ1Lbwrkvvz48%2BbtbVvAiEA%2BwtmXHyAHrNpztqUxx5ZN%2FHpMju54DmD7N4fdfEAfCMqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm87%2F%2FUtwErMDYPwCrcAxCi3GoG3IG9Y2pDvB%2F%2FA3wKuQdVXjH5nMSxc95rhnchih%2F8saz6maBF7Dt0xVazPpU89BFnNsA7A%2Fkn3qNFf%2Be7BMjgD7Ju04inF9G4XwQ%2FZNj%2Bz%2BzuyX8y7S3sdPoh48c3CanimbzKEvlgLeIX%2F3Zu6MdK%2BhuXGe3Na8v8dHDMtG3MzOhQH3UD4cAh6plqRWs0SeH0YYIili0lUSUJ5rRAcjGlL8tIrw9vTVEul3ikNeRcjDBdcxmwVzQdP%2F1r4W0bbjO47CVtfqoZkr35eKDyvon31BS7z79rrXtD39Fr5ZL%2F0rY31hVMPiJZ0lzmrcVJuKLpilc3vvobk1JYgxV4Iwcol6oEGzoA2Ra6HpZPWr43MxkSBkkTd2xWLmKo7t3fYOmGQzXXS6ZUdcb5Dov6rI5rMhpX%2B8IzjwsPR%2BS30e0VW1zJGMxrRj2UBfqici3%2FKYEETVHxjVy2RKynA%2FXgF4hhQTRGMEut47Rxen%2B083ivP4wqFclj4LleEunja2ruFiQYRQxPlngDlkBkUImvxrosLqLNkA9iG4%2FbdJItq21g3z5hag8PCt3cftQF65j4%2B8DQVu6dfFMaplpOVBxOi8soNuMr6UZpggw%2FMD6VFwwrTa6zjlTbS5%2BhMNKDyL4GOqUBC00e3vNTMBaxjQVqzEOfZ8DIDHBvlo5tf0MZzS53roJbuccIRxKqgkk9sXtApJ6tDSyGgq29x9QozZKgFXGCqdTaVs4G7MiTxkvBavKeUs50jMKcEPz%2BMcQenuLpHw9wOEpJCwOiAmPaWh7N%2Be9H0KBRikaCyp1YTRKcUXOZKzXFkX%2Fs0kJEOA6ppb5knipxAlY4ramPnfuDIGY3LOwbiiLPJeBd&X-Amz-Signature=d87fac6a7880139e92507d76be61658b8fd8ecd25679f44c8a72ab13b8e93dee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633LO3YEI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIET8Po%2Ba%2BHByky%2FlxtpArdAXzqc5T8C0%2ByyQs5fWJU6rAiEAtvpuASl5sGBUZsvWtoUG2AEgoJq132dbgOC%2FnfIegkgqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnFbxLGV9y0JiXGcSrcA4aaoqtJfESOSFQZ21exJuADdDiey7VblKd2z%2BOs5iesvfYWv3Hm4SI9tc6GB5wfkCeWeN%2Fm6N92hAae0x0PbBWRpHz44jgJ6BtZccQeGBprhlA9eTO35uQhW0kbcSlchTbSSlQN8iV80PgU5SnEG2V%2B4fEHJdMG1cjwMh0pnufBilBZVv%2BDa0%2Fo2NlT%2FYwZbrTV%2Fu4MCigEwvu0fpZwNDQC6cGS6YpbWo574tRZGPMHXL7kw0l%2BAKUmeF%2F2moWEm4ukDlWm9%2BIEQmWinIe57RVuc7nsjLdtxqLZ9bXDoMqcHWLzuAXcxUn36xcQrptuPxvJbU5LKXkDqDrya04dreqyZhBsVpczuLE6w3oPAiACbNu7zobQ3aj7Q8mpk1qH3DSeYxl0Ob0%2BhitQxf%2B6sxZYZr0e0gTx7n3GIgc3Hp%2FVKIg6KmlPNZ9vK%2BXmhFh7WPOT051z5VOqer38tmCcoYhiYUNCtc5SrT37nVWVV%2Ba%2Bc9sVRI8PR825%2Fj56eAoxR6fTdnqQMpMu9E1Tj0Zl9LWSwTS7P3x6%2B7mMtxieI3FEEdkP23rloJcZZTr%2B8WYcu%2FnWNjTOY%2B44IM9ulctegdwnVe3wm1DAfnOXZi3geMiADIjjDc%2Bs0VTRKjwjMPKDyL4GOqUBwE%2F%2B6fnRdTcSoHazoq3k%2FGqQOOiTKslRPSLu9r98XzYcsT4jFvAn04%2FS0dJ7QoAjJftVIoXowYeJ1SEQl%2FJZRiLVSzQ3nCRZsEYZLcAxalUi0IKuqid4vZug%2F1JxFheC0mQ%2B%2BkiHa4UX9JTIVSD0jHiNNR0xVmZ5S%2FkC0XzkSf433Tvg%2BRu34%2BeTRCiLBdbBgyRUrkQ6KHOeH5G%2F40oKzt2cECOb&X-Amz-Signature=11772146f5b6642648e8d4b245b8c563be2b73d310176a51e7e243abe75d9bef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKXQMFCQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCeC322M%2FD1E3VW3704TzELwC%2FL9m%2BtW%2B2I%2Bkl6%2FKT6XgIgVpSNWScGAzdGVLzgMI8dufa8etMGCaLesNAiSJwqirwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAFo7sHRX6sRNjuECrcA28p9YxtHvUhLowefrK4F7tjrx7xg%2BMxeXN2tz1BaySf%2F17KD3c0hTcFdXu9J%2FdXuespcaF476N3jPFLtGyiawEdbHmqDmArHwkfmdqiL7Gq4XmKWWBxGq%2FkPJLqA2rDuFLWlQLS3TPl8mvCNieNuW7pxBHavI6tz0L6IpfIzcRIPeTimPfP67S5wDwIRUsIl9vaLvyHk%2BHsg1oMeT1QPGkABKvJk4HdztXh4oduUKxjdOo5i1J%2Fg0HCQzdb6tbrCI2yXM%2BZXhi1zbJbJanYG9Yr%2Be8HByF9MOmX%2F311n1iVLejhy8ri7HMBe1IgDacIoUi%2F0Dwcxnj18m8C1QRc2m5XqfisiUyQPGlb3%2B6aosJPiLZ4qaUiaawUrWiwGHYCTW8A1%2FLNXBS%2Fd%2Ba2B%2BPxzzt0Ck9s3MA28t281v1Vuy5OBOmb7YIhy%2FSIM78u2G7ZRYyjwie%2F4S8HY%2FkzkOjRBuy5DRAN2KqrF5djFh7xXdSy4TVCaPCijdMVHR54Xc0PU%2B%2BJD8U5tXOh4I6oUrVmw5v%2BEdKmxUH7QSFiOxrJatycm4PQjKpNi43sYrMxvwELIm3ynn71%2F5c%2BNAZnjUciHh%2FsDdGa3gwHHyZQQ75%2FQTyXjac%2BnCiUve2cbpHCMIKEyL4GOqUBuwqk0SeksLBZvWGp%2BWKSDaDViaKx74m%2BY4JolzCrwLcWrA2xlSuRnt0EL7ynzltdyhycRaI%2F7rPbGjriF9mnJ2VlvmDnbTGflGcZSx4YHMOk69fkaaiLqeRNrkVZrb3in0X3DxlGAQS7oPw8q2eixOKhdtPtfMSerJrV%2FlPYXT%2Fv280GnLMDpMtLrfN0xyR9rVALxBS8w0%2BVka%2FLjRw9iWReeBO8&X-Amz-Signature=c9a0f464840d6451eea257949f7ac8ca5c11611667da3f26dd4cdd5ecfa83561&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
