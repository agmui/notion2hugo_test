---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKA4OY4O%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDswR8AvAWuT%2BBsLS3X0igpCKJkp4dZRRMSCL%2FoAyb%2B%2BgIgQdebwMQuOilHXpOZSTDhD%2BDUdau4U3AWQXH2bgCe1lUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYxqVbrmctA8UGUCrcA2DfmYYw03t81VogyiLQFMXmUaG%2FQlqxeoYMl8WsFubCHYSqUqh%2F3pZEAU%2BoXMcV7OGhXzcDI0Yzt%2BOgNCsWOEjzO9Z5OCIltf3D9A7MjUmV%2Bm7Exydf%2Bny4Vj%2BGkzuakazr420%2FKyOEh4vwYYHlg4Ih8pPluxN8QA9ux4jLlEBl7k3us%2B%2B33WctCQU3Vrhq9x1mTPlhrspk6euYR9ZYaFalkZK0emqjDcm4nwooUmmq3w4HechSQ6PLXRchlA4SVS9F%2BSMGls9J67Lj2ADnArIAMtZrtMvTJ2DgW%2BpRjhKShJx28eQ%2BDYR3%2BlQwpb85KzYmuU%2B1sIG8edS5wjnHgKGxAyPc%2B2vc943R6LaNVQjfjxjpyKSMrAFSPRpwpMTrG1tndrA6g5%2B3SN2YoPcio2ZWA6BBVHQKhssUUPE3s8wKrb2hbbISTP5YM6MOnF0pMkzP%2BBuJslVcIa2WBgoaOMDSNNTE6KAVQAgeJRFux1eBtSo%2FIaImzP%2Foq8VzWi77jAJLuOz%2Br%2BMEvQ7IgG%2FB%2BeuauNNbnk%2Fm%2BD01ocMvG3y7oWI%2BKFFMONFngB9ZJyRMDeDz48MWqL9u0ftWxNtiX83wMCorkgTBUIfu1pcxTyCDOcpDPONyLILL4J2WMPzo4s0GOqUBERj2nFOZcBZeSd8vS7VKbMXzgZQm4xsOq9ezxsMeN%2BeDfH8e7wp3Mi2T%2BpKCdtWPCqJoGTxRm3GcMrXDpxAu%2BYzbCRP8SbL6v2sEayfM5OaCXebeeabjQZgmc4RSoYJDKLvgavuIXOMToracfe6lmzqkkX0bkVSwrACOql4OGxIz9LRSdho701ilOfxOLZvK2zWgxHQPC3KzFp%2BR6fQLWbjU3r9L&X-Amz-Signature=82c51628d15f30d823006ffdd2ee7fc6dc8b3555c172ee9002e4e723210875b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKA4OY4O%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDswR8AvAWuT%2BBsLS3X0igpCKJkp4dZRRMSCL%2FoAyb%2B%2BgIgQdebwMQuOilHXpOZSTDhD%2BDUdau4U3AWQXH2bgCe1lUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYxqVbrmctA8UGUCrcA2DfmYYw03t81VogyiLQFMXmUaG%2FQlqxeoYMl8WsFubCHYSqUqh%2F3pZEAU%2BoXMcV7OGhXzcDI0Yzt%2BOgNCsWOEjzO9Z5OCIltf3D9A7MjUmV%2Bm7Exydf%2Bny4Vj%2BGkzuakazr420%2FKyOEh4vwYYHlg4Ih8pPluxN8QA9ux4jLlEBl7k3us%2B%2B33WctCQU3Vrhq9x1mTPlhrspk6euYR9ZYaFalkZK0emqjDcm4nwooUmmq3w4HechSQ6PLXRchlA4SVS9F%2BSMGls9J67Lj2ADnArIAMtZrtMvTJ2DgW%2BpRjhKShJx28eQ%2BDYR3%2BlQwpb85KzYmuU%2B1sIG8edS5wjnHgKGxAyPc%2B2vc943R6LaNVQjfjxjpyKSMrAFSPRpwpMTrG1tndrA6g5%2B3SN2YoPcio2ZWA6BBVHQKhssUUPE3s8wKrb2hbbISTP5YM6MOnF0pMkzP%2BBuJslVcIa2WBgoaOMDSNNTE6KAVQAgeJRFux1eBtSo%2FIaImzP%2Foq8VzWi77jAJLuOz%2Br%2BMEvQ7IgG%2FB%2BeuauNNbnk%2Fm%2BD01ocMvG3y7oWI%2BKFFMONFngB9ZJyRMDeDz48MWqL9u0ftWxNtiX83wMCorkgTBUIfu1pcxTyCDOcpDPONyLILL4J2WMPzo4s0GOqUBERj2nFOZcBZeSd8vS7VKbMXzgZQm4xsOq9ezxsMeN%2BeDfH8e7wp3Mi2T%2BpKCdtWPCqJoGTxRm3GcMrXDpxAu%2BYzbCRP8SbL6v2sEayfM5OaCXebeeabjQZgmc4RSoYJDKLvgavuIXOMToracfe6lmzqkkX0bkVSwrACOql4OGxIz9LRSdho701ilOfxOLZvK2zWgxHQPC3KzFp%2BR6fQLWbjU3r9L&X-Amz-Signature=4c48a4ce9731ce8dc2cdbfcbb3c25284e81426257a6af5bf4624e79d43ff2ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKA4OY4O%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDswR8AvAWuT%2BBsLS3X0igpCKJkp4dZRRMSCL%2FoAyb%2B%2BgIgQdebwMQuOilHXpOZSTDhD%2BDUdau4U3AWQXH2bgCe1lUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYxqVbrmctA8UGUCrcA2DfmYYw03t81VogyiLQFMXmUaG%2FQlqxeoYMl8WsFubCHYSqUqh%2F3pZEAU%2BoXMcV7OGhXzcDI0Yzt%2BOgNCsWOEjzO9Z5OCIltf3D9A7MjUmV%2Bm7Exydf%2Bny4Vj%2BGkzuakazr420%2FKyOEh4vwYYHlg4Ih8pPluxN8QA9ux4jLlEBl7k3us%2B%2B33WctCQU3Vrhq9x1mTPlhrspk6euYR9ZYaFalkZK0emqjDcm4nwooUmmq3w4HechSQ6PLXRchlA4SVS9F%2BSMGls9J67Lj2ADnArIAMtZrtMvTJ2DgW%2BpRjhKShJx28eQ%2BDYR3%2BlQwpb85KzYmuU%2B1sIG8edS5wjnHgKGxAyPc%2B2vc943R6LaNVQjfjxjpyKSMrAFSPRpwpMTrG1tndrA6g5%2B3SN2YoPcio2ZWA6BBVHQKhssUUPE3s8wKrb2hbbISTP5YM6MOnF0pMkzP%2BBuJslVcIa2WBgoaOMDSNNTE6KAVQAgeJRFux1eBtSo%2FIaImzP%2Foq8VzWi77jAJLuOz%2Br%2BMEvQ7IgG%2FB%2BeuauNNbnk%2Fm%2BD01ocMvG3y7oWI%2BKFFMONFngB9ZJyRMDeDz48MWqL9u0ftWxNtiX83wMCorkgTBUIfu1pcxTyCDOcpDPONyLILL4J2WMPzo4s0GOqUBERj2nFOZcBZeSd8vS7VKbMXzgZQm4xsOq9ezxsMeN%2BeDfH8e7wp3Mi2T%2BpKCdtWPCqJoGTxRm3GcMrXDpxAu%2BYzbCRP8SbL6v2sEayfM5OaCXebeeabjQZgmc4RSoYJDKLvgavuIXOMToracfe6lmzqkkX0bkVSwrACOql4OGxIz9LRSdho701ilOfxOLZvK2zWgxHQPC3KzFp%2BR6fQLWbjU3r9L&X-Amz-Signature=24798aaaee3b91dab5f6d7ffd99feb7244404101ac031be3555fc98008d5c055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFI6DPV%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCz%2FzN2d64xy7DyAx2AoP5otZqquiHgJRFZoOeJCTCOzgIgHdCL%2FbgYlLcR%2BT5fQY5zxU8wW2J%2FaVPws7nxZGCnHHoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLXBVs10Dj0wxZLSircA%2Fm9tdPPDtRsFPBO688%2BbWoaO%2BNMP0LvgV8AUhzL97ZWKn%2BdEiSB8DHmshDXwji0eFpN%2BkkXjSVNEcOb9hL07Cmr47i102bjKRzVg2%2BjfjfstCwyHpOZxcNZ%2BxW74cfpCEsjLoe1i1FuNFnZ5EZzGn8%2FIrcoHZmAl99dKkFG4CHtuff2P6Wds%2BnT7rI9l4fxa%2FYFfV4F58iTV8XYISlJ1cTW%2BYmsptEgYHlpGY%2BcMWKn8ATnAWs9aMoS8GfpYDzW2f9I5QUd%2FbOllDcEC9tU%2Fefs4quXhGM4e0PVPgO8vEEq%2B6afhlDVq8cho6pHRt3kwT%2FYA6iqrKp%2BkNS8iCsvdEK53rpqI8%2FDHzEULVtGxEm0xLJ9KGj0%2B1Iu9Jz3VroBxeqCCmgfIo0ftIZJdDaXYL5Uhc7aZ7qdXh86bK2%2FPISMw%2BqqfbJyKQjSrX7Td3irlFhCobF6DY6YJf4eIuYBl1W3zKOuINxmjvL7JXpHrCKPdcv5yPc97wLLAnWEZfdDAHADP1QKpCF1MXPhdyrzaV43uek0X0Q3Mt9GRAec24TlYP2Tknz5X6Ic%2BKZDR9Ncp4RYMwae2JKaJ6RUz15QU9uowYfSpZEAn%2BAoPBrsl2btfjju4IfBZdAM%2BAluMMno4s0GOqUBDpbpOuqKMTE65tkjMFIHyK18UiF82rX0rE8XMT7Z1SpuARgRek5xYIOCIId%2BsYC3hDjeVDCdZzffOYXJ69a73lpxeB%2BSDp4tqQNK%2FclqiPlP8j7%2Fw5ZF4xbcRo6JFbdv86KzGLW9kfGPgjjrlOX03KDD6jXPKp0BWuvKg%2BFz4UTN5SONNliOijvYsRdjA1WbKEOrfh8LlZ%2F9iWMcCuGKEanBrkcY&X-Amz-Signature=2ad32918dd2ec5ffa897067217e8ec7f23cc0c61d9fa58dd051a8eacb7329f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTAJR3B%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIARZd8gvZNOrGOcdxmhGt%2BihrL4wnjp%2B213UuLOe5d2NAiEAkT3D3ICJX5t4W5BfqtWRsQGNEdpUdsiYmdTejJW3aQQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhgZKVXVEHzwybM9ircA8eQYKWQBH7xaajhIJegujVRErtDa3AJSSLJlFLCsvCQKy%2FvGVgjKD6%2FhHSwQ0ZtI%2BH3Ovpfoj8L2XI7POr7vmpN8wpm4wcRIt4WmTliA0ZVHK7uVPiYyyDepx41oT3iNF3%2FVIrm9RvK3ZtCpLjID2AB6050Dhsre7l3HHOYq6qOzvBqxtMEmptYhvGbAj%2F%2FRuu48ddICIuIRIMNtlbT4qOCDN0vXUhbrC9kCR9wqH%2F%2FZAwuan4yeD4B2BLCfScj55hVmy4LfO63y%2Bma0rAPKNLck8HNwQ2BW3CQbgicRKQdn0PB9fgVcmo8%2BAMB2%2FBYvXWwf79f3xY3QWhwRRfLSkBEby3YAKn925i2wiWArtCbiM%2F0WHBTk9GlcQxHRM4LWLeC7UvWWYFkBZjREagjkj%2BwSZacgM0yCUEazoXIBUik2NXgIvWZhdpKsA4yfFzpqTjB0kWAsbsBP6i94Rlp4DkOU8Jf4yo4bArjk849Rsppzq5UixzjG5%2Bi1W9RCXxSlxAOn7lTNC7wpCdOMIshxzirnqC2Zuc2zYZBw2RMoKZpzLO7yAJMjPxkDe0Kt6MxoRmcWej6UkLKaIj0EK2N8nbt1Sp72DccQ%2B3ZCdNvI3fI2miSziKzcfqDsDSvMN3o4s0GOqUBSXIaG1NHOoqn3QWLqmHZnuC%2BOs1E%2FPcfzRevFb0wwY0gMM0MQ%2BOUhHYb9pLndiT8hz%2BFJRZe6hW2f0TTNT%2FexB5ZhnitWp53ezTc5Hc2XRgJ%2BS35n5m5W1GeakDJ%2Fp7NmgQBU2xIOm5hiABqv78Ky5P%2BrJBXjxwNaGZfka8%2BEQM%2B0gM5gysjMntXMBFpJOIiUfidX0wySKszbzLO5Dmr8O0t2EJt&X-Amz-Signature=931ad302a0cdaa7fafba5d264ccc60ffa7166e082e47c87e1fc497cacd0d233d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKA4OY4O%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDswR8AvAWuT%2BBsLS3X0igpCKJkp4dZRRMSCL%2FoAyb%2B%2BgIgQdebwMQuOilHXpOZSTDhD%2BDUdau4U3AWQXH2bgCe1lUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYxqVbrmctA8UGUCrcA2DfmYYw03t81VogyiLQFMXmUaG%2FQlqxeoYMl8WsFubCHYSqUqh%2F3pZEAU%2BoXMcV7OGhXzcDI0Yzt%2BOgNCsWOEjzO9Z5OCIltf3D9A7MjUmV%2Bm7Exydf%2Bny4Vj%2BGkzuakazr420%2FKyOEh4vwYYHlg4Ih8pPluxN8QA9ux4jLlEBl7k3us%2B%2B33WctCQU3Vrhq9x1mTPlhrspk6euYR9ZYaFalkZK0emqjDcm4nwooUmmq3w4HechSQ6PLXRchlA4SVS9F%2BSMGls9J67Lj2ADnArIAMtZrtMvTJ2DgW%2BpRjhKShJx28eQ%2BDYR3%2BlQwpb85KzYmuU%2B1sIG8edS5wjnHgKGxAyPc%2B2vc943R6LaNVQjfjxjpyKSMrAFSPRpwpMTrG1tndrA6g5%2B3SN2YoPcio2ZWA6BBVHQKhssUUPE3s8wKrb2hbbISTP5YM6MOnF0pMkzP%2BBuJslVcIa2WBgoaOMDSNNTE6KAVQAgeJRFux1eBtSo%2FIaImzP%2Foq8VzWi77jAJLuOz%2Br%2BMEvQ7IgG%2FB%2BeuauNNbnk%2Fm%2BD01ocMvG3y7oWI%2BKFFMONFngB9ZJyRMDeDz48MWqL9u0ftWxNtiX83wMCorkgTBUIfu1pcxTyCDOcpDPONyLILL4J2WMPzo4s0GOqUBERj2nFOZcBZeSd8vS7VKbMXzgZQm4xsOq9ezxsMeN%2BeDfH8e7wp3Mi2T%2BpKCdtWPCqJoGTxRm3GcMrXDpxAu%2BYzbCRP8SbL6v2sEayfM5OaCXebeeabjQZgmc4RSoYJDKLvgavuIXOMToracfe6lmzqkkX0bkVSwrACOql4OGxIz9LRSdho701ilOfxOLZvK2zWgxHQPC3KzFp%2BR6fQLWbjU3r9L&X-Amz-Signature=0bcbc254b88bef0ac97678a18225956976f91faeaa8df3015c1f64f104239a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
