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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PPPX52K%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDANGa91ShJVCw9c3VxSAd%2BL%2FU%2FpFyWPCWwKkUH0I3CjAIgYhjjUCXLUhPwyy9Qa9nazdhsTqrSYmqx6jE%2BP4WxtPYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyPGZjKC%2BBhJ03frircAzetbcYiLQ0qiRiiKfltbM%2F5caHIis2pcsCrL1Fu2COakIBaJ9oGhF1SwPGPPQb1uC%2Bmzuc3b%2FN18pBnnZwCZMgmK2frtaPF5mZQzVEnoavMrRFcT%2FO3mnbWDps%2FlvG9zz4wjoJXcjRROO07q5oU0GzWzUACWlF3AsXzIBHlKd6fWWUuPRzygk%2F8JDUa5bf1yOtWpIAF%2BYkAdL4BITl%2B5Q5PqIPPZ596ZGfArhZwa1HbWEIdIVw6%2FwYJEjSV4%2B27zLzKEiXLNQPRCXD3TqYpOt4e4lz%2FoW114d2fDWL36cTQ5nNfVO2Yx5PzmJXV2QYmED6f3%2FjXhS0940faNGdMpQ60h3URRQhpIlfOlZsaQPTJ9kUrUpLoqkC6ghFj9IO6kuG3Vf9YTMH%2B%2FYbu0OQI08GW19%2F8%2FaBn1vAdPJnmkJLN%2F6gRQiShRsd3GmzwQ06FtGvP40e4cBD1A7ya4yH3V3KTgCwM6m5wqrCJxXbTuEq2ZAVMLzC6sW6JZQxYP6VPq99TdCjD6HLjcyytKFdltW08fVDOj5KhY%2FYP70GJWK4AMVI0aHp6C8rz37xI7jA9tklTBk0gFXDLfO0AQe6xmCia%2FzXefLX8tEIavtwmWhpJxpnE1iN2BFRboiy%2BMNPs%2FsAGOqUBzXA9VWACtZJfTiCDHUMsh5Bqj4L0WDAr8%2FVB%2FqD%2F96vgzdUfnYGAX6yDFE3LbcE0ia87zE3%2B5wD65rWiToYT3%2BDgQYabrCxzNBp%2BkeZQ800OagU1KTBe62HYu5Rpo9KhFavR9JncwND406gGSKvPq7b5RbQgHIXiaQclPPOKzntak5JugSsh1mjOMl9Oj8SQs3aWlx71%2Bx%2Bl2Jtwj5EHyYA44tjP&X-Amz-Signature=129ba9ee0e6ace7cde0cf22ad9c388003848f2b3584403d89c0c3eff476e9b26&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PPPX52K%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDANGa91ShJVCw9c3VxSAd%2BL%2FU%2FpFyWPCWwKkUH0I3CjAIgYhjjUCXLUhPwyy9Qa9nazdhsTqrSYmqx6jE%2BP4WxtPYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyPGZjKC%2BBhJ03frircAzetbcYiLQ0qiRiiKfltbM%2F5caHIis2pcsCrL1Fu2COakIBaJ9oGhF1SwPGPPQb1uC%2Bmzuc3b%2FN18pBnnZwCZMgmK2frtaPF5mZQzVEnoavMrRFcT%2FO3mnbWDps%2FlvG9zz4wjoJXcjRROO07q5oU0GzWzUACWlF3AsXzIBHlKd6fWWUuPRzygk%2F8JDUa5bf1yOtWpIAF%2BYkAdL4BITl%2B5Q5PqIPPZ596ZGfArhZwa1HbWEIdIVw6%2FwYJEjSV4%2B27zLzKEiXLNQPRCXD3TqYpOt4e4lz%2FoW114d2fDWL36cTQ5nNfVO2Yx5PzmJXV2QYmED6f3%2FjXhS0940faNGdMpQ60h3URRQhpIlfOlZsaQPTJ9kUrUpLoqkC6ghFj9IO6kuG3Vf9YTMH%2B%2FYbu0OQI08GW19%2F8%2FaBn1vAdPJnmkJLN%2F6gRQiShRsd3GmzwQ06FtGvP40e4cBD1A7ya4yH3V3KTgCwM6m5wqrCJxXbTuEq2ZAVMLzC6sW6JZQxYP6VPq99TdCjD6HLjcyytKFdltW08fVDOj5KhY%2FYP70GJWK4AMVI0aHp6C8rz37xI7jA9tklTBk0gFXDLfO0AQe6xmCia%2FzXefLX8tEIavtwmWhpJxpnE1iN2BFRboiy%2BMNPs%2FsAGOqUBzXA9VWACtZJfTiCDHUMsh5Bqj4L0WDAr8%2FVB%2FqD%2F96vgzdUfnYGAX6yDFE3LbcE0ia87zE3%2B5wD65rWiToYT3%2BDgQYabrCxzNBp%2BkeZQ800OagU1KTBe62HYu5Rpo9KhFavR9JncwND406gGSKvPq7b5RbQgHIXiaQclPPOKzntak5JugSsh1mjOMl9Oj8SQs3aWlx71%2Bx%2Bl2Jtwj5EHyYA44tjP&X-Amz-Signature=e78719a6f2ce7de6330676281e312b1ed5f4cabb1eca443823df81cfe10c6a10&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PPPX52K%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDANGa91ShJVCw9c3VxSAd%2BL%2FU%2FpFyWPCWwKkUH0I3CjAIgYhjjUCXLUhPwyy9Qa9nazdhsTqrSYmqx6jE%2BP4WxtPYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyPGZjKC%2BBhJ03frircAzetbcYiLQ0qiRiiKfltbM%2F5caHIis2pcsCrL1Fu2COakIBaJ9oGhF1SwPGPPQb1uC%2Bmzuc3b%2FN18pBnnZwCZMgmK2frtaPF5mZQzVEnoavMrRFcT%2FO3mnbWDps%2FlvG9zz4wjoJXcjRROO07q5oU0GzWzUACWlF3AsXzIBHlKd6fWWUuPRzygk%2F8JDUa5bf1yOtWpIAF%2BYkAdL4BITl%2B5Q5PqIPPZ596ZGfArhZwa1HbWEIdIVw6%2FwYJEjSV4%2B27zLzKEiXLNQPRCXD3TqYpOt4e4lz%2FoW114d2fDWL36cTQ5nNfVO2Yx5PzmJXV2QYmED6f3%2FjXhS0940faNGdMpQ60h3URRQhpIlfOlZsaQPTJ9kUrUpLoqkC6ghFj9IO6kuG3Vf9YTMH%2B%2FYbu0OQI08GW19%2F8%2FaBn1vAdPJnmkJLN%2F6gRQiShRsd3GmzwQ06FtGvP40e4cBD1A7ya4yH3V3KTgCwM6m5wqrCJxXbTuEq2ZAVMLzC6sW6JZQxYP6VPq99TdCjD6HLjcyytKFdltW08fVDOj5KhY%2FYP70GJWK4AMVI0aHp6C8rz37xI7jA9tklTBk0gFXDLfO0AQe6xmCia%2FzXefLX8tEIavtwmWhpJxpnE1iN2BFRboiy%2BMNPs%2FsAGOqUBzXA9VWACtZJfTiCDHUMsh5Bqj4L0WDAr8%2FVB%2FqD%2F96vgzdUfnYGAX6yDFE3LbcE0ia87zE3%2B5wD65rWiToYT3%2BDgQYabrCxzNBp%2BkeZQ800OagU1KTBe62HYu5Rpo9KhFavR9JncwND406gGSKvPq7b5RbQgHIXiaQclPPOKzntak5JugSsh1mjOMl9Oj8SQs3aWlx71%2Bx%2Bl2Jtwj5EHyYA44tjP&X-Amz-Signature=a7a4d790ce8ed9ce34a721154c7811cf5d55693858aa5f9782bb196b172409b9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V24ENFFP%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBuCNo%2BKGj0UOkCEDGLuHC1MXc6oDxt2WeVnPvSR5ZGlAiA3snMUhOvamAbB4qjVyni0JMzUd2DGRveYCO6x2iEIeyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9F2iykNe9dXF8m9LKtwD4U0q83ulV6gWFZlRXfcp%2Fl%2F9ib40IalVYgDBFWb4peIc%2BidNVCrb64ly%2FK9bmffaYjFLlcIUNMi%2FLw77f%2BM4RvGu9E4m%2FaOFrOwwXhQ9yMf%2FUmLJbTkYfVvfeI7kizZhmVDJFR%2FNGRca%2BqE8asbgJAOBfrFn8Qk1OTLgV0YIE93fTMtY%2FoSWmXiOCqqGPAeU%2FkBwAALEB9Md%2B%2BWpeOJOX89m4pNwH9Yr11jbOmtXP18Geir42ciE%2FblWSYOxghevKzvD%2BDMPCWYRnYi7IumyvIF5v7JiXMN4SFucOyRgd0i4LtQNvpLBDDb7bptKWaRKKm%2BXYACEk4I7OcPzEnX%2FByMpAmYOdlb4h6FVLeRi1P8WgOvDmt5ylF9of9cAMo9rYKTlykhBFeMtBkFnb6W8%2F9c49BUJBjxMEC5LAbsvGz8IsxD%2BnlMoOQCIbBA%2BQuhICynXOMUQseSVdcl0%2BfOrXmmahb54RX3%2FCt4iwl3Lnluph0lv%2FK7VB%2BG%2FMgGryU%2BYGlAGGFb6Kupq5YZCdHd9ODXP6dHwA%2FfXr4DFcczKRF9PfgOkE%2FZk0yw9LLDS4pml8LhCtAf0DJyCaiJfCbGLY%2B%2BimNDkTXwUZ4520HosATbAKJrFf5C02aUpWDgwtuz%2BwAY6pgEt%2Fni4oc8fAUuP8tkQQ2zdK99fHloD7GNs0B0xxiX6HLNuvg2zDab2wpgrpLd4tYwyh1JcSs6Axnx6hTJ0CJdBSij751ANn0qStK%2Fmtf24HTTueUP4kN%2FqTMIiENxcFONuT9L0DD3jR8zbOX4%2Fg%2BufBblhCrbBNskmuk7VWRxvNp3%2FHueRQi%2FmmrNVUmhVd6ldKqOGCOPkvY0eV%2FhCik54bewIXrDW&X-Amz-Signature=4a123a59be3c483f03fc9e43973e56fc8d61bc2cd4e5fc330962ad1bba4037a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IFTBSA3%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCPdyx8%2BQy5XVHSmZ1ttEB9n0bZxnlFnvNofVDmlehZ0QIhAOqodT0Gn%2FgP9yrUMrKSf0RY3uvRPrHL9YFSs02hiFZSKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIV6uhn9H9ilHleFkq3AOzPSOCqo7vn3rTnoe5TC4PmeVRCfUJBdAiHhDnLbOLkIdvcSvrY1jatES%2F6VDzzI89eBhHfhlxnFzw493T9zGFe%2BxZnIptCtcx6lRez%2F%2B1qv%2Bd3CxFwTu3dNDuoRCwK8kiiwSIbTG4%2B%2FZrDA5BiV4JMkcFWhLDvs%2FXSyLLe98Fo5CYVXG8Q1tfsVFCBEnu38bB%2FcbK094uuCumAKkUuzJZIu8gCkv8Tla%2FyGEkpSGo0heXVYRi6WSwdQEhkB2M28xKYguUNSaUsIbpt%2F3Zj%2FcuNnsnfCnpmf18KdbyZYYcRsZdLtaJTRjafO%2Bo3ZQn0pjDB%2Bk1HbRnXZp6idpIOajo%2FU1aDS%2BaPTJ4TmsVFC8RzMhjoTlOTvVQd4x%2B1FHuBwqWJg1QISCyaCITGTGQ6Wy1iSIJOsJHK8rAbTJW4M%2Bi8a8d2Kun0w%2BukIbGG7XAa4xsBFw%2BnG6BnHMc5USWfQxzRoS5HgMaQuB%2BUX7iEX%2BwoMnLh7bc%2F8hH42lMHBxAoXOITwWzeihyHBrVzqBVfapeoQ74mHgN0E5NJNOPRSgZKIIDj8OV%2Bygdv1pqUDpHldXpeG3l3PLdTlafQQnWAZRXgHuR%2FjEKCtQcjuxQXq8kGIaWUZtmLVlGCzx0NDDM7P7ABjqkAX7tr7XVjUQQeQ2Xcr48K46vA8adXm%2BpAYa2rSLEsQiLxBtUmbwzMKJexnuDtOkoZA5mmIA2ZwcBd8bpfFpZgMqhKENlaZ8CYE7pGMfOgtD1XGt%2FS0i86nKL%2BnwGeqBilR8lghaDjCcO8B8IDSihYpWuw8vfIRp8r8HJmFKBYjS6o0im%2BZPWHu5gnBeh9yyPa5nFUflHgkFcuswYcEHnuMStYoCt&X-Amz-Signature=58b06e7834d890637c431fe85fb7d4ac12a6e29ecbaabd8d94304eb7cdfe859b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PPPX52K%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDANGa91ShJVCw9c3VxSAd%2BL%2FU%2FpFyWPCWwKkUH0I3CjAIgYhjjUCXLUhPwyy9Qa9nazdhsTqrSYmqx6jE%2BP4WxtPYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyPGZjKC%2BBhJ03frircAzetbcYiLQ0qiRiiKfltbM%2F5caHIis2pcsCrL1Fu2COakIBaJ9oGhF1SwPGPPQb1uC%2Bmzuc3b%2FN18pBnnZwCZMgmK2frtaPF5mZQzVEnoavMrRFcT%2FO3mnbWDps%2FlvG9zz4wjoJXcjRROO07q5oU0GzWzUACWlF3AsXzIBHlKd6fWWUuPRzygk%2F8JDUa5bf1yOtWpIAF%2BYkAdL4BITl%2B5Q5PqIPPZ596ZGfArhZwa1HbWEIdIVw6%2FwYJEjSV4%2B27zLzKEiXLNQPRCXD3TqYpOt4e4lz%2FoW114d2fDWL36cTQ5nNfVO2Yx5PzmJXV2QYmED6f3%2FjXhS0940faNGdMpQ60h3URRQhpIlfOlZsaQPTJ9kUrUpLoqkC6ghFj9IO6kuG3Vf9YTMH%2B%2FYbu0OQI08GW19%2F8%2FaBn1vAdPJnmkJLN%2F6gRQiShRsd3GmzwQ06FtGvP40e4cBD1A7ya4yH3V3KTgCwM6m5wqrCJxXbTuEq2ZAVMLzC6sW6JZQxYP6VPq99TdCjD6HLjcyytKFdltW08fVDOj5KhY%2FYP70GJWK4AMVI0aHp6C8rz37xI7jA9tklTBk0gFXDLfO0AQe6xmCia%2FzXefLX8tEIavtwmWhpJxpnE1iN2BFRboiy%2BMNPs%2FsAGOqUBzXA9VWACtZJfTiCDHUMsh5Bqj4L0WDAr8%2FVB%2FqD%2F96vgzdUfnYGAX6yDFE3LbcE0ia87zE3%2B5wD65rWiToYT3%2BDgQYabrCxzNBp%2BkeZQ800OagU1KTBe62HYu5Rpo9KhFavR9JncwND406gGSKvPq7b5RbQgHIXiaQclPPOKzntak5JugSsh1mjOMl9Oj8SQs3aWlx71%2Bx%2Bl2Jtwj5EHyYA44tjP&X-Amz-Signature=6907dd262844b84eaabdc2460d3bdf4ff9e36193d81e1e17c4734071d67205ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
