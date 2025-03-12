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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGAPKFNA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDx16tByELI6lWu%2Fjn04%2Bmu5CaneGNKlOdH0FC8y8jvUgIhAMXhGUizr0Vi2YXtSKbHzy69MUQrk3f8nmR13tbWz8xKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze8ao%2F8qVX8iAWFRUq3ANyNoa%2BoJGy8LX7CzZjf%2BVOwWCWBceP28%2BS0Y8VMGm5pHRRo2Ep63rJSrjUS4pSBCMgFd2GW%2FjzZ3H%2FkaWV2kuA%2BwRwF3%2FP2f0jzzf2b61nHxY36oUsT6ZY39dzeMqM44UWV433t%2FBAPihIFvtr6HtZjmPnoW14InKigEpNmxn9VzxAq2BWTVH08cxyGgpygjV02DB1DEzBZG7UgFrkNQ6%2FqUzij4S3OOLyfh2tpd74D%2FEK1ZfbCkKv2upGKPxkjLLqkaiEUDhZWnuoSGT3Q0fb7lDlaHuKIQM33CUEBaERG%2Fb37EDQnYhIwGGDF8kZ%2FOF34P5SA%2FeuNoqaVaS8mehHnPNzxhFKSX1E5S9sRL5ERpXXLZ48qeq2TW6OMMAw4%2BzjULCRgEVgLFBbrIH2R%2BY%2FPdeDFRERJ%2FvV87uYQkN7wN1koLagXiS5EEx770QTN43amh885jK8321THBZ6UZF5CLulx7OPimurtbb58cN40nMgWoBxtz58W1kjQUU6USdqnS5gHfp5mzCdLU%2Fg%2FF0QbqZkvwnIdS7Ld7nvnSmb2wy7hM862GcXkM86neOVqTbINlKz%2FgjqKc%2FxdY0Bmo7Kee1mi3R2b25K%2Bo7EtmozfmIzb6iaSyXsuZ80WzD2ose%2BBjqkAZVeb%2Fx%2Fm9PCyLUAi5E1WF4zqvsvqPHpYpaKiYxim4uqSLn53A4GeK522lie7YYFdoQU5%2BPBhEUdmyCgEtdLwLZKYuIDtQtX2aJ02cLny1cg4iDxBf9%2BhgaPFPTC%2FQTE5tnRDHMa1%2FUExOyLTa0S4wqmCJFH5OL5lSTyukrUOgr0ZkUzcUpHrzbYS98E711VEz9JTN%2Fcoo4EL33nkGVueBnRRX50&X-Amz-Signature=461ba977789dd69592c91e64ac2858c111b8621ad648ee759b6a94e31a4a3547&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGAPKFNA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDx16tByELI6lWu%2Fjn04%2Bmu5CaneGNKlOdH0FC8y8jvUgIhAMXhGUizr0Vi2YXtSKbHzy69MUQrk3f8nmR13tbWz8xKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze8ao%2F8qVX8iAWFRUq3ANyNoa%2BoJGy8LX7CzZjf%2BVOwWCWBceP28%2BS0Y8VMGm5pHRRo2Ep63rJSrjUS4pSBCMgFd2GW%2FjzZ3H%2FkaWV2kuA%2BwRwF3%2FP2f0jzzf2b61nHxY36oUsT6ZY39dzeMqM44UWV433t%2FBAPihIFvtr6HtZjmPnoW14InKigEpNmxn9VzxAq2BWTVH08cxyGgpygjV02DB1DEzBZG7UgFrkNQ6%2FqUzij4S3OOLyfh2tpd74D%2FEK1ZfbCkKv2upGKPxkjLLqkaiEUDhZWnuoSGT3Q0fb7lDlaHuKIQM33CUEBaERG%2Fb37EDQnYhIwGGDF8kZ%2FOF34P5SA%2FeuNoqaVaS8mehHnPNzxhFKSX1E5S9sRL5ERpXXLZ48qeq2TW6OMMAw4%2BzjULCRgEVgLFBbrIH2R%2BY%2FPdeDFRERJ%2FvV87uYQkN7wN1koLagXiS5EEx770QTN43amh885jK8321THBZ6UZF5CLulx7OPimurtbb58cN40nMgWoBxtz58W1kjQUU6USdqnS5gHfp5mzCdLU%2Fg%2FF0QbqZkvwnIdS7Ld7nvnSmb2wy7hM862GcXkM86neOVqTbINlKz%2FgjqKc%2FxdY0Bmo7Kee1mi3R2b25K%2Bo7EtmozfmIzb6iaSyXsuZ80WzD2ose%2BBjqkAZVeb%2Fx%2Fm9PCyLUAi5E1WF4zqvsvqPHpYpaKiYxim4uqSLn53A4GeK522lie7YYFdoQU5%2BPBhEUdmyCgEtdLwLZKYuIDtQtX2aJ02cLny1cg4iDxBf9%2BhgaPFPTC%2FQTE5tnRDHMa1%2FUExOyLTa0S4wqmCJFH5OL5lSTyukrUOgr0ZkUzcUpHrzbYS98E711VEz9JTN%2Fcoo4EL33nkGVueBnRRX50&X-Amz-Signature=9a5ca1f503054067e1dd64237fc1fec2b353212f8a9c168a23f4db72b1934440&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQAKOG2G%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDw44gsprK8pNgDGTiq9kUuBcWgVAWYUqLbR5SQAHC1BAiASt5iFa%2FibiJlcHSNvmaYa5yHMLloH71z1K1PbOijT5yqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMJe9MsMiTrPe1%2FEJKtwDVrkualoAU1sEFWVeWYNhCZ6wdJBj3GClvWMT7jNy8s5h%2F239DBds0Xu5rz1XHnVNiyTGH%2FOEvI0k%2FtCdb7QQ3YOWYzZ23Levlg5y1eCq77cxq69C%2Fa%2Bf6MVG9Teh4p40hPxNiuudnBEZN2Fd%2BL4QvciXmoilMyxuaFsyipmN71BfM303Vnoi8reB%2By%2F2NgRgMwqRSkadxcVhiKgOYqEIRGk1i7hxvTYcYRM%2Fi3zP9XacX8QLWEz4ta4021VamTCzQI0rWz5ggTn0tO1pX51vLZ851SpFIdM%2BFyCAKyUVt3xW2Ynbhv53uuBImpCtraNQOjXE8jJcuShdXgd1ppEX%2Bfe2dK9O5xdz0gQmJ%2B1o9S8yKQD9Bv%2BNOGjL0bHb7hd0Rea8q753XKXYdaxBj26Yfj1czrlSR2BVrlFkUtpnaATnRICu4T%2FsDkrE2S83rFcXJnJdVYYhMB7YoHWmOS5Wdf2KtkVXTqx6IixDWQm5C0fa7V9BmOrge4MGoU99M9iBIjGcpxx6vIUVB20OyjGFzKnd4vCP%2BOeIxk4sBdna4BrCziDBnW5Fxtnbnsr%2FMV1UFWA1COARs4c%2FsQ8fcsvQLfiVEZGbLFXh2Xq1GduWdhIBtwTeRFRs4CqWYhcw6qLHvgY6pgGwOIg58ac8e2LeqYOYDi97oP8h7RJXhhoE2pOYq17OJLy09WsEFn61Vh%2BPW%2BcZnoTuT7FAP9jm8XNCvhhmfIsQPnc4u3urQfMYqu3KeJjpHc225MBdd4w6STd8N5nd%2FBaq2TwzqNaT8Y9c%2FCBR6Rd8XNZ2Qn9sQB7tB2x%2BygQtxHu8hLjVyczjVgYV%2FmdfCWUq6pe7WSN10p8XK0sFI6AT8aJkAmtY&X-Amz-Signature=77e598d50be2ecdc333057cb3453d912de3792b57a815aa97487164c4a2ffdb0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P26MQOE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCyC5Dk%2FkgP0j2cvQnlBiKAi43HcxtjL1%2Fslsgzv%2FaVdAIgcjOKIJ0vq8RnsS%2FtXRdwFl0geXK6gR0aPuVzlzz7cZMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqwYdSE3BRufF%2FmsyrcAxTeCQwUMaHUfwGLP2LzVQSrbXji1e%2BlHY7jjcuDNlSU3xZdkaDyn2%2BwdLoFvfJolp1NoDvXanURT15oXDhLA75eGG9XlSHUQjZTu7F%2FElSzIZBeSP%2FPnqxTsHp%2F3DcOeeHrJjG%2FFi78bCIulyBkV9VJeTJ5qhlNkNOY4orNydZJij4c1xksmD6uEzY1sHkL%2B0n4RYv8PbOwBOe29JrQRIFwCBWf%2Bb%2FDWf6VSxpKoHjxEHIPvvS%2FjbwVOQ7Q5PDl6HOf7t74p4iEKE7z8alXgFRZCL52vLcjgOUgh7YwjR6QlHfQnjSX2NYkGXBQ1kaeJxWRJHlyDz0BgOjSjng7zkGy7P4mHLo2G%2FgOm0u2O%2BFyzPxhTv1EbuUvCQIqFEGFhT6UKmyn%2FNe0DealNr51cq%2BSQocupZSY43twV%2BTR1ohpBlGDYVOVl8EL4yLj6zN7JkrDMe2mcpFSzLeOgt5FQtoIfo6FV9qg2oo0zCxrl6YSvxf0n85Dqru4dWLwNpzYXGLG1fEDJw8O9El5OYsMK9e4O67JDHAlgEjx86HgjPNVJbWs45dsKdq7GDP38MVI2YL44QWxmkOZqWPSpyZcLezYPOzSR%2BvUt4A0QJlofYEkaY30CwrqWvI1d1%2BAMPaix74GOqUBdCNKMdy2%2FcPFp9x6txt%2BZ%2B3YabdT7ihDCpaW8CAxBJ5FqkCOz%2FVC0qypxYZxmiDG28OtqJxHaz%2FAxzFK4Gyv%2FCp5wybhA%2FZZyv6Fq8QyiwwqwqENYVMb5RJvVADUABPxMpIVf9EeMjMGkL1z5JHTkZPD8XwKFYHij07bcv1zxi5AFGoooyBHU3omRA2riZE9k2SCOYDnXdJ%2F5yZNjO2CqxjUay8l&X-Amz-Signature=1a15ed7178cf5460779a9885375629a8f7a00afa96a5b3ce8e474abf32bb6ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGAPKFNA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDx16tByELI6lWu%2Fjn04%2Bmu5CaneGNKlOdH0FC8y8jvUgIhAMXhGUizr0Vi2YXtSKbHzy69MUQrk3f8nmR13tbWz8xKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze8ao%2F8qVX8iAWFRUq3ANyNoa%2BoJGy8LX7CzZjf%2BVOwWCWBceP28%2BS0Y8VMGm5pHRRo2Ep63rJSrjUS4pSBCMgFd2GW%2FjzZ3H%2FkaWV2kuA%2BwRwF3%2FP2f0jzzf2b61nHxY36oUsT6ZY39dzeMqM44UWV433t%2FBAPihIFvtr6HtZjmPnoW14InKigEpNmxn9VzxAq2BWTVH08cxyGgpygjV02DB1DEzBZG7UgFrkNQ6%2FqUzij4S3OOLyfh2tpd74D%2FEK1ZfbCkKv2upGKPxkjLLqkaiEUDhZWnuoSGT3Q0fb7lDlaHuKIQM33CUEBaERG%2Fb37EDQnYhIwGGDF8kZ%2FOF34P5SA%2FeuNoqaVaS8mehHnPNzxhFKSX1E5S9sRL5ERpXXLZ48qeq2TW6OMMAw4%2BzjULCRgEVgLFBbrIH2R%2BY%2FPdeDFRERJ%2FvV87uYQkN7wN1koLagXiS5EEx770QTN43amh885jK8321THBZ6UZF5CLulx7OPimurtbb58cN40nMgWoBxtz58W1kjQUU6USdqnS5gHfp5mzCdLU%2Fg%2FF0QbqZkvwnIdS7Ld7nvnSmb2wy7hM862GcXkM86neOVqTbINlKz%2FgjqKc%2FxdY0Bmo7Kee1mi3R2b25K%2Bo7EtmozfmIzb6iaSyXsuZ80WzD2ose%2BBjqkAZVeb%2Fx%2Fm9PCyLUAi5E1WF4zqvsvqPHpYpaKiYxim4uqSLn53A4GeK522lie7YYFdoQU5%2BPBhEUdmyCgEtdLwLZKYuIDtQtX2aJ02cLny1cg4iDxBf9%2BhgaPFPTC%2FQTE5tnRDHMa1%2FUExOyLTa0S4wqmCJFH5OL5lSTyukrUOgr0ZkUzcUpHrzbYS98E711VEz9JTN%2Fcoo4EL33nkGVueBnRRX50&X-Amz-Signature=a18a0c9a49724051fc7b098be94cf9dfda07b4f37b7b1fe0da5a91da09fc13ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
