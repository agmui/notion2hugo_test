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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OGSTMFY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCELPui%2FVv2dIE24J0t1Y9qIP%2BN7txnA1lHmCn04MsdWgIgbnB0wDUY1Ctj4prZUsTLnuHJbLIr%2FXpBCTeVVIZ8Kygq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKMEx4X0OQGZLCYMDCrcA6qHMWh4yYGYIDSwdciyMqNIJC5pBYXUArVU8Befr3bdicL5O5et5Vrsb2iNmHl66hBM86sjyUGrmpkNMelXoWx%2FDE6oJ8cTlqjzScsWwiTHPlTK98av9t%2BywldMNSNFEm18PSMQDSFRc%2Bsoa7gZW%2Bert5ag%2BltJcbbFWKWH6xbJS0ZQGTgl6TjQjBaIuX56nbynUX6%2BSJmOoDrRJ3d4kIfJ12asmSs8EwmzXQp0r%2B3c9nYwLxnrkDcGKl5Utes4982v86Tlq0Nbel6LiMuPs3qHD7U%2Br%2BpAGtajLz%2FIiTHF84xF%2F%2FR3TPLuq%2BsF9Ryq%2FdJhr3U%2FxI8iMesW9%2F3Cf%2BmDIW3MmChTiVNglnyCyj0545cLiwutO%2FYtXusxgn%2BNM80cWfyCHlXmDLpEEhvUN%2BCmRLEB5NweF5iSB7s0YWBzeREQnUREpAhMlyroWIKekNGug3OtqLSkGYANYkA7AalQ7seJMUHHMazf%2BlEmhCkM4%2BBLa4NSl3Pcf%2BziE7rkegZ%2Fcwhi11fXz4%2F%2BEf749qQrLgwIuqgRzD53r3wAw9E%2B%2FrgNsro2jVQAmT3yFxy0EIfIg4I%2B037DhajDLnA9hs2uQJCAYrL7juKF6IJKBGtVADvmfaLiSClCIB8sMPzfmMEGOqUBCz%2FzWwkrZ8jfG9HZ4vrMxqumZSk6o7SvW%2F82rMamq5%2BhjgumND6OmKAv%2BCcTzv9u7cBnP18o6702ueXi%2FEz%2FxhtxsbxljQcheVn1rBNq6UZfZPd4RfSt5SgHBKdfNDj3gbFuauAdzV9PMX5rAvn3boicc2MqWvNb1837ow5SmdVHmiqjICfzNW8Jv6eRn4S2jJULMhd2uvQpoNNxbvByIUCoYar7&X-Amz-Signature=d2092a77ec2505d6069203170ae0950165820d2be5965ae0a3b83d1506f15a7c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OGSTMFY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCELPui%2FVv2dIE24J0t1Y9qIP%2BN7txnA1lHmCn04MsdWgIgbnB0wDUY1Ctj4prZUsTLnuHJbLIr%2FXpBCTeVVIZ8Kygq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKMEx4X0OQGZLCYMDCrcA6qHMWh4yYGYIDSwdciyMqNIJC5pBYXUArVU8Befr3bdicL5O5et5Vrsb2iNmHl66hBM86sjyUGrmpkNMelXoWx%2FDE6oJ8cTlqjzScsWwiTHPlTK98av9t%2BywldMNSNFEm18PSMQDSFRc%2Bsoa7gZW%2Bert5ag%2BltJcbbFWKWH6xbJS0ZQGTgl6TjQjBaIuX56nbynUX6%2BSJmOoDrRJ3d4kIfJ12asmSs8EwmzXQp0r%2B3c9nYwLxnrkDcGKl5Utes4982v86Tlq0Nbel6LiMuPs3qHD7U%2Br%2BpAGtajLz%2FIiTHF84xF%2F%2FR3TPLuq%2BsF9Ryq%2FdJhr3U%2FxI8iMesW9%2F3Cf%2BmDIW3MmChTiVNglnyCyj0545cLiwutO%2FYtXusxgn%2BNM80cWfyCHlXmDLpEEhvUN%2BCmRLEB5NweF5iSB7s0YWBzeREQnUREpAhMlyroWIKekNGug3OtqLSkGYANYkA7AalQ7seJMUHHMazf%2BlEmhCkM4%2BBLa4NSl3Pcf%2BziE7rkegZ%2Fcwhi11fXz4%2F%2BEf749qQrLgwIuqgRzD53r3wAw9E%2B%2FrgNsro2jVQAmT3yFxy0EIfIg4I%2B037DhajDLnA9hs2uQJCAYrL7juKF6IJKBGtVADvmfaLiSClCIB8sMPzfmMEGOqUBCz%2FzWwkrZ8jfG9HZ4vrMxqumZSk6o7SvW%2F82rMamq5%2BhjgumND6OmKAv%2BCcTzv9u7cBnP18o6702ueXi%2FEz%2FxhtxsbxljQcheVn1rBNq6UZfZPd4RfSt5SgHBKdfNDj3gbFuauAdzV9PMX5rAvn3boicc2MqWvNb1837ow5SmdVHmiqjICfzNW8Jv6eRn4S2jJULMhd2uvQpoNNxbvByIUCoYar7&X-Amz-Signature=570ec3f9c3cca9ffd4fdc37882ff9e88aedbd0f0e4e137cf145e6dc6a9d6d074&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OGSTMFY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCELPui%2FVv2dIE24J0t1Y9qIP%2BN7txnA1lHmCn04MsdWgIgbnB0wDUY1Ctj4prZUsTLnuHJbLIr%2FXpBCTeVVIZ8Kygq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKMEx4X0OQGZLCYMDCrcA6qHMWh4yYGYIDSwdciyMqNIJC5pBYXUArVU8Befr3bdicL5O5et5Vrsb2iNmHl66hBM86sjyUGrmpkNMelXoWx%2FDE6oJ8cTlqjzScsWwiTHPlTK98av9t%2BywldMNSNFEm18PSMQDSFRc%2Bsoa7gZW%2Bert5ag%2BltJcbbFWKWH6xbJS0ZQGTgl6TjQjBaIuX56nbynUX6%2BSJmOoDrRJ3d4kIfJ12asmSs8EwmzXQp0r%2B3c9nYwLxnrkDcGKl5Utes4982v86Tlq0Nbel6LiMuPs3qHD7U%2Br%2BpAGtajLz%2FIiTHF84xF%2F%2FR3TPLuq%2BsF9Ryq%2FdJhr3U%2FxI8iMesW9%2F3Cf%2BmDIW3MmChTiVNglnyCyj0545cLiwutO%2FYtXusxgn%2BNM80cWfyCHlXmDLpEEhvUN%2BCmRLEB5NweF5iSB7s0YWBzeREQnUREpAhMlyroWIKekNGug3OtqLSkGYANYkA7AalQ7seJMUHHMazf%2BlEmhCkM4%2BBLa4NSl3Pcf%2BziE7rkegZ%2Fcwhi11fXz4%2F%2BEf749qQrLgwIuqgRzD53r3wAw9E%2B%2FrgNsro2jVQAmT3yFxy0EIfIg4I%2B037DhajDLnA9hs2uQJCAYrL7juKF6IJKBGtVADvmfaLiSClCIB8sMPzfmMEGOqUBCz%2FzWwkrZ8jfG9HZ4vrMxqumZSk6o7SvW%2F82rMamq5%2BhjgumND6OmKAv%2BCcTzv9u7cBnP18o6702ueXi%2FEz%2FxhtxsbxljQcheVn1rBNq6UZfZPd4RfSt5SgHBKdfNDj3gbFuauAdzV9PMX5rAvn3boicc2MqWvNb1837ow5SmdVHmiqjICfzNW8Jv6eRn4S2jJULMhd2uvQpoNNxbvByIUCoYar7&X-Amz-Signature=f6fd50f84e38dfc8485af3cee555bc5975989dbdde8d097ef45ef5e96f9c1998&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAI4IDOD%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCkikK7R5nxYoypOiuQqauCHn%2FlubT%2Bx3cGaLOsbJTdJgIgbTZbvfKui%2FUyyOuu1QQ46T8PxwtqXj0JfTE3WS%2BLcfYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPbgI36Ql1y1zM%2BTESrcA%2FLvlaTJxFXHyukW7gxaoLhaU0jBDoPFNahKltnI%2FbVGgu3%2FGFhrQhdn6DuK23QR6gisJtsetXk%2BtBBkYAQE2YOXtrNtLwCRP8dWRhYXBFdTJXXbclit%2FIG%2FKIZPr5blEqUtbtIgCDdPqkx%2FLJ%2FT5PvSdQHTDQM04ieGbRgEeC%2FHbt%2BgiDzPCpud9M1Dxk%2FkTWwrlUUjqSYQv5o0b%2BGpMPtjzcLVpHjLzhsbqcY5JQvOgUk6qwwe3MTfUj65Uy%2F%2FWrdRttVq5TT6sbrYYwbQrcltM0%2FEOw%2FBXb%2BJIuaxX%2BHXaYAsIVGdkOBHa9UU4KVFObFyVdw%2FQDrraK%2FnwFDDMnBz%2B00eU38Vc6pP9m1D4cvxOsImggrmc5OjbTzVQou9BfpIYQOv2d9Aqe%2BrWGAbO4etsaYC%2BnWN6V1T0E9NyYh3xSvzE%2BlOAdTu%2FsqqA9m8I%2BhEcF6741NASU6g52mCWgYTljPPGJsbnnwVCwLMowWq5aZcAOurdYT9OSMj%2FGC3IRZhix1ChT0l3%2BcPE3eTJ%2B0ExbvsgVEtWKnMwDxh7fF7DISmC5T04tvX1wMIDyMjrTRubqtfVS%2BScVYqroKZ7FEP3C4LFeqbqC6sbb1eNANtJsHSRX0Oi6qMcgFQMI%2FgmMEGOqUBTJFjWGFxp%2FR7agWJe%2FXVopqwBqdA2tsDwlSqdP1ATCYCq3grieJKjSoQzJvo%2FXdayqLEo7l0YE2k0t3SEyRCqyDqQB9j%2F%2Bq0CYJYrq8LXJxjseH860zJALxaDPctbKddVRezR1M8YvI85P4diKDkb%2FchtkTwP3p%2FHZHwrq%2BWbY%2F43rBuQ7nc0DrBwwvCX3VjhjtfTixacYAQMUsSPQ4RZYQ2hBus&X-Amz-Signature=aa06d66231d40da5e93891146c7706492241ba224f19f43c5793b3dce787539b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAWEC7U%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCz5nGEmIIn5MV2saiduQkLwS27hcglv2sDXv0auaKk%2FgIgfayln41X%2F77Nu3%2FFNsIcaLvZU3e0eERo0L1dRS%2B8cQ0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKSjZ0AYnYDVXToVcyrcA3PGEjh4GCKOwgynDLQbjVrTYa44ErHNhHbJn6Hv%2Fh1RFEWnaYDSRohqRJjj8uhnooDjQ8x37oqsnPhbehjq8vvgJLYb7kS7%2Bo6s37NkaPSyJcjR7mzgNIFNEFWxUli%2F9WpwIinooizC9JzgZKHBjOpwnsVdqMbuFPkNz2LYEGDik0Nt6%2BladcBtCxCSOAKcXMVQINzNJxuU%2Fd3m1wyTcNAP58H6Y9u2NHE%2B%2BNcMyBtbaRbJ2k%2FhMSxY%2F9VXb87NzmHwqPtOCghu%2BG0oRdygzCPmqk7nhIgAUq1qIYksMtEFMlecBGTqJwSeCImXlKyLHrHVwrPHCchWZmdOHBSJl7FSq%2FBUuJpqhInjISNKHkI9rznzyhuEn3U0Kb%2FSKWxQfmtCoHCNY0BY5Y%2FYdzfP7eo7BKE7mMXEbWExYWV71Xu60d22y3FuZOHNd2XFIMmYCVBPpKuy67%2FCG6YdEryl2NQjS0cYOQZPo4Mthj5KGLzWToYdENANIN1vR9xVWkv1f9C%2BI3myNt03he7UlPe8j7Ju%2BIAjKecIKERSdQgU3py3n13a%2F%2Fo700Z7wUHwtF8zLnoQy2i0pP27Nge%2FIlPcHQMpVsUpJ%2BlKUDKwkALYTzm%2Fu0Fxz0gTBrtL33ZdMIXgmMEGOqUBEFXCq9%2FGkG2d5tgm48jOw0J4eaR0UadBAZt4h291zMk6OWwY9%2BT3j1ceXfgWguIKrwMIFvj7yNW347LH%2BfT89LFD%2BB1F41thvFB7T81nTuV%2F5JsmsU4aFVgStksNZG%2FzGbhiv8blwL7Lvk3D4sZ4qqrDaXkOfd6kvJqKsmUBy%2BrmLLnhRQ6CNpFHuq8g%2B06Gpo9UYLGejYVSPWak%2BtOKMagCXMBw&X-Amz-Signature=8ae61aa2efd13eda7475225f8168401f6a19453a9c3ba10ac2902e03f1efbcc3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OGSTMFY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCELPui%2FVv2dIE24J0t1Y9qIP%2BN7txnA1lHmCn04MsdWgIgbnB0wDUY1Ctj4prZUsTLnuHJbLIr%2FXpBCTeVVIZ8Kygq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKMEx4X0OQGZLCYMDCrcA6qHMWh4yYGYIDSwdciyMqNIJC5pBYXUArVU8Befr3bdicL5O5et5Vrsb2iNmHl66hBM86sjyUGrmpkNMelXoWx%2FDE6oJ8cTlqjzScsWwiTHPlTK98av9t%2BywldMNSNFEm18PSMQDSFRc%2Bsoa7gZW%2Bert5ag%2BltJcbbFWKWH6xbJS0ZQGTgl6TjQjBaIuX56nbynUX6%2BSJmOoDrRJ3d4kIfJ12asmSs8EwmzXQp0r%2B3c9nYwLxnrkDcGKl5Utes4982v86Tlq0Nbel6LiMuPs3qHD7U%2Br%2BpAGtajLz%2FIiTHF84xF%2F%2FR3TPLuq%2BsF9Ryq%2FdJhr3U%2FxI8iMesW9%2F3Cf%2BmDIW3MmChTiVNglnyCyj0545cLiwutO%2FYtXusxgn%2BNM80cWfyCHlXmDLpEEhvUN%2BCmRLEB5NweF5iSB7s0YWBzeREQnUREpAhMlyroWIKekNGug3OtqLSkGYANYkA7AalQ7seJMUHHMazf%2BlEmhCkM4%2BBLa4NSl3Pcf%2BziE7rkegZ%2Fcwhi11fXz4%2F%2BEf749qQrLgwIuqgRzD53r3wAw9E%2B%2FrgNsro2jVQAmT3yFxy0EIfIg4I%2B037DhajDLnA9hs2uQJCAYrL7juKF6IJKBGtVADvmfaLiSClCIB8sMPzfmMEGOqUBCz%2FzWwkrZ8jfG9HZ4vrMxqumZSk6o7SvW%2F82rMamq5%2BhjgumND6OmKAv%2BCcTzv9u7cBnP18o6702ueXi%2FEz%2FxhtxsbxljQcheVn1rBNq6UZfZPd4RfSt5SgHBKdfNDj3gbFuauAdzV9PMX5rAvn3boicc2MqWvNb1837ow5SmdVHmiqjICfzNW8Jv6eRn4S2jJULMhd2uvQpoNNxbvByIUCoYar7&X-Amz-Signature=912eba4afc53f4cd1a5f3095ff4c7a6e9ea3cf703b7057e926b11d7436624080&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
