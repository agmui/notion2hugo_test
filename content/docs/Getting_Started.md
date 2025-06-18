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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4OPNWX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDz1%2BSBFl8Z1ofgWaV4XZoet9SD%2ByHf7%2BqfBFuB%2F1CsBAiA%2B9VU5sRHGnqA9ZmLdZKeLYZPHjSEI4K9uFuTi8%2B6D9SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNSng%2FDTSciLocwCHKtwDjxHJ5OH4VFFC1AftK9FmK5Pa7iWHhuubeHwmM6CVvYTjS4NwJY3EN9aXFJnfkobk407iMf3%2BUIAkKi1j2YkgPt0TXSJcb1vZGAwX4AZhYLYXo2Tr2MoeBlkEVW2bSm2SYHTmTuBb%2FHfU%2BvXjD7yuSXWaStaZAe0buk3K6x9o7zE3cwsFRGtbxafDolQFC5SdlzJzRzogSrjKEsOg1RU1py7kEo2cg%2BXKo4IDbApayxOwwLDAycAAjTAXB7tSrS7D41PWSX%2FRtbTdyRwpTbD2LArxiJ5WzmXSG%2FM%2Fh%2BQqoYrhaj93JbQnALq4d1we%2By%2Fjbw0EPpg3gWclJ5HBmx9mAC2EAFqB%2FdMPfD1SolWUofw5LRuvxrX02ymeTYiGKAv8qp29kt5%2FN7qUZ7dZX4FmEuPq864TPR0g4645WywpFXSujhICo0LGBkwibmSQ8R%2FzWiZ6tJncrEq6Pny%2B4TCZiXVOAR4vMqZ%2Bh%2BNH4Bhqij%2FtBAh%2F5PAgPAubuzI6%2Fon%2BsH%2FqEjLch1aDEml1ymsKthaCd7hFSMyJYzFiVgcTJ%2B%2FsrXEpku7gu6DtJQ%2BVhClP%2F3xALW2wrE%2BDGztpJt21fWPFbAuXI%2FUje6PtO6vFnIw%2BiRtZpHBRao39s3Ew3vvLwgY6pgH%2FZ3D5q2CLR%2BRlkl2muHxlj6FksGBxEtjKz0yEV%2BO7%2F%2Fa3ECbcjB%2BbgPUMU7YpcNn24nqPj5wdqYKbrttcvfSBg37vzBGwt66CMbxAnUyl%2F2NgIitaF6%2FGNC1etXMp1B%2F2blnk7mJfFjJfjEX52HK%2FXCCBoEzfK041zW5sYqKekiwicc4kX6lzFbaZYWTN2nw4oCK9IRGwXRrQv4qC7r6%2BcXjpcIVk&X-Amz-Signature=c5670d1d0a72e6171e143c234a0cf8596a1c85175f8ddc814d303b6685aec5e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4OPNWX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDz1%2BSBFl8Z1ofgWaV4XZoet9SD%2ByHf7%2BqfBFuB%2F1CsBAiA%2B9VU5sRHGnqA9ZmLdZKeLYZPHjSEI4K9uFuTi8%2B6D9SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNSng%2FDTSciLocwCHKtwDjxHJ5OH4VFFC1AftK9FmK5Pa7iWHhuubeHwmM6CVvYTjS4NwJY3EN9aXFJnfkobk407iMf3%2BUIAkKi1j2YkgPt0TXSJcb1vZGAwX4AZhYLYXo2Tr2MoeBlkEVW2bSm2SYHTmTuBb%2FHfU%2BvXjD7yuSXWaStaZAe0buk3K6x9o7zE3cwsFRGtbxafDolQFC5SdlzJzRzogSrjKEsOg1RU1py7kEo2cg%2BXKo4IDbApayxOwwLDAycAAjTAXB7tSrS7D41PWSX%2FRtbTdyRwpTbD2LArxiJ5WzmXSG%2FM%2Fh%2BQqoYrhaj93JbQnALq4d1we%2By%2Fjbw0EPpg3gWclJ5HBmx9mAC2EAFqB%2FdMPfD1SolWUofw5LRuvxrX02ymeTYiGKAv8qp29kt5%2FN7qUZ7dZX4FmEuPq864TPR0g4645WywpFXSujhICo0LGBkwibmSQ8R%2FzWiZ6tJncrEq6Pny%2B4TCZiXVOAR4vMqZ%2Bh%2BNH4Bhqij%2FtBAh%2F5PAgPAubuzI6%2Fon%2BsH%2FqEjLch1aDEml1ymsKthaCd7hFSMyJYzFiVgcTJ%2B%2FsrXEpku7gu6DtJQ%2BVhClP%2F3xALW2wrE%2BDGztpJt21fWPFbAuXI%2FUje6PtO6vFnIw%2BiRtZpHBRao39s3Ew3vvLwgY6pgH%2FZ3D5q2CLR%2BRlkl2muHxlj6FksGBxEtjKz0yEV%2BO7%2F%2Fa3ECbcjB%2BbgPUMU7YpcNn24nqPj5wdqYKbrttcvfSBg37vzBGwt66CMbxAnUyl%2F2NgIitaF6%2FGNC1etXMp1B%2F2blnk7mJfFjJfjEX52HK%2FXCCBoEzfK041zW5sYqKekiwicc4kX6lzFbaZYWTN2nw4oCK9IRGwXRrQv4qC7r6%2BcXjpcIVk&X-Amz-Signature=a301134e768f0e9238fd04490857091c4974450ec71ae714129cc47fa86684dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4OPNWX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDz1%2BSBFl8Z1ofgWaV4XZoet9SD%2ByHf7%2BqfBFuB%2F1CsBAiA%2B9VU5sRHGnqA9ZmLdZKeLYZPHjSEI4K9uFuTi8%2B6D9SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNSng%2FDTSciLocwCHKtwDjxHJ5OH4VFFC1AftK9FmK5Pa7iWHhuubeHwmM6CVvYTjS4NwJY3EN9aXFJnfkobk407iMf3%2BUIAkKi1j2YkgPt0TXSJcb1vZGAwX4AZhYLYXo2Tr2MoeBlkEVW2bSm2SYHTmTuBb%2FHfU%2BvXjD7yuSXWaStaZAe0buk3K6x9o7zE3cwsFRGtbxafDolQFC5SdlzJzRzogSrjKEsOg1RU1py7kEo2cg%2BXKo4IDbApayxOwwLDAycAAjTAXB7tSrS7D41PWSX%2FRtbTdyRwpTbD2LArxiJ5WzmXSG%2FM%2Fh%2BQqoYrhaj93JbQnALq4d1we%2By%2Fjbw0EPpg3gWclJ5HBmx9mAC2EAFqB%2FdMPfD1SolWUofw5LRuvxrX02ymeTYiGKAv8qp29kt5%2FN7qUZ7dZX4FmEuPq864TPR0g4645WywpFXSujhICo0LGBkwibmSQ8R%2FzWiZ6tJncrEq6Pny%2B4TCZiXVOAR4vMqZ%2Bh%2BNH4Bhqij%2FtBAh%2F5PAgPAubuzI6%2Fon%2BsH%2FqEjLch1aDEml1ymsKthaCd7hFSMyJYzFiVgcTJ%2B%2FsrXEpku7gu6DtJQ%2BVhClP%2F3xALW2wrE%2BDGztpJt21fWPFbAuXI%2FUje6PtO6vFnIw%2BiRtZpHBRao39s3Ew3vvLwgY6pgH%2FZ3D5q2CLR%2BRlkl2muHxlj6FksGBxEtjKz0yEV%2BO7%2F%2Fa3ECbcjB%2BbgPUMU7YpcNn24nqPj5wdqYKbrttcvfSBg37vzBGwt66CMbxAnUyl%2F2NgIitaF6%2FGNC1etXMp1B%2F2blnk7mJfFjJfjEX52HK%2FXCCBoEzfK041zW5sYqKekiwicc4kX6lzFbaZYWTN2nw4oCK9IRGwXRrQv4qC7r6%2BcXjpcIVk&X-Amz-Signature=f690163c95c9ee82095e8752a81290ddc8b368a728921f3849d4a953e3eac67c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYYC44TW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjwV9zI7B7gtioPout2mNRCA45G3gzxhKiup3I4i2%2BMAiEAgdYQjNGIhepH1tR4p6kPmECouA0FWFoeG0dhkOmmHnkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9dLU4KZKZqJ54ziCrcAzEqEhgPAyljgYGF2QJyI%2FAY8TXx%2FJfd2d6Mum%2FzImeAotd5wFOQdwerO5MMYMlxtKqqPlhUhgOlRfgpJjBgqrqDZnX3mscE3dwfJqQG7gw%2By%2BJzHcBVVTL%2FhzaS4meWVs8NUS4kDl2tg9LO%2FCiIjQLEL02fR%2FRO4cEaCvk%2FITiPnkcFv3X%2B8GrxcO6Q8Hi5eKO2Pm6zZ5o%2Bn6HySNWhFFPDaKcX4R68KFg4nB9TXQ9V602xx3O4D2Odb0%2Fw6URnYddWJyhUnyJCcvLo5L6CxuLoCMUA32MNFdxFPXX9KTqwBMD6Pa%2BDchHnlSKHjzcsFUmXcbkvxmKO5ACfdgTJZu0k8fTrV5wn8TV67rAQ4dwOY25hNWgzK%2FKEjU1bkEg%2BCU7F1HPvSoi1DIlQCMVJkTd02DKKblLkj8oipnwKB%2FX8yJKGk46%2BQmKfBoPJINGgPmguVuXEBwPbHTvo9MlZYyPweaVfErS9UQFjV%2F3lo6NVdx7DD5oToyNljn79heIN5WulCS%2BkYWRL2n%2FZD7EKYuXIb0x2ojOdPmiYUQZRoGwbPNoyu7WHzZIRBXCvWNzhap9e2jPMKDwRCHV4MAJQzTf6CRQYNJk%2FOysnJgApltkN70pf1xYQHkNVINFEMNb7y8IGOqUBXObwpUTLw2b6DfIIb8jVvxqzw%2F7rYEzfwQ04kgKmqlE4DLF3rBFXLzMWe8cGZUOtAvFpl%2FU2%2FpNrBWiTpEExw5ig32js%2F5Nt3onI0PUvrvsd8k1eEHeMaXJ0y8%2F7nTutysDBXbBJX5xKcjRRVZ25rDljTMhso2cTupkLfvIJbFLgX9pV8tF6bRZixEsAqF33q8o8P2EFXuX844Xkok3QDxb7eIHI&X-Amz-Signature=5b9b6f3fb7b9c4ad7da37a1fc49fa597b2c7ed3f080e7978d3ba8c66e3c3dbf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFFYYR2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIndbX4elbuO7ngqQsOphhiVo3Ff%2BHIpq%2FoKSYgn0ReAiAZMj5%2BddDQ6O2ePRcqZmhQSwoAH6br0gm80I%2BeiZW3CSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuGTBSm8%2FkN4ta1AEKtwDOlWBJC88TNQdOZCh0pfRyLTwgaoZPnVK1RFmsDzA91q6l%2BqcGLszW7JGubehWaoVNVnHOrt9%2B32YX5RT9KPBWi6ETjGYeKyPP%2BWSxhjD6soldfxfwhWKOSxDpnytcI%2F0uZkMT2mDG3DgIKDqt%2BnamOX3n4i1dhlVphUob7XtRMG1CYN6158xVOACUio4b7Qs2Sx46bSM9rWDL%2FN5J4qZUE4DI9uBd84BadVCEYnv1tTeLFMiQxpiSCqNo90V5GujLWEUJPORP8MHhz8MAd9SK7ggD0Rg09zCT0rNtO%2ByhLD3L3qzlL2H880WtLTkQ8gfq%2BRuPEQ0N5GpNhYOe%2BL54VQlqq002da9xZjccn79dGL0fTlq3FPFUhjzjUQ0T5%2FnlXb59iuPISLKqhKgC%2F6GruGdp%2BwifXymBWLT%2FtlhIw%2B3XvCFXAz7bWSwvdg5Fqp6EQeZ2UivgQEqiMqvJvhMJeX4IvKzar2JFyZnbfcKc3M7kiRayLBAyfw%2BHtZrHLwWKt4%2F7DgE7z5q%2BCC2d3PstHlxiOqZNv51hyEkkISZbZPys2f6E3MIVM6bY4z52qLLosSTHMiT4sFkfIW6WAMbZ7NJoQdcnwtjBoCx89h6zpE1%2F2ZFSRVVXcxufvQw6PvLwgY6pgEk09A30lQf069KFeZGQjsgaxOXB4749RDoTT6oPVI8zi0W8Bqzt%2BQq3b5L8AtxAZn9SW7VM%2Fd9fmuzfgbqNdW0fYfD25RUc5eYw4GuV5uhLh66HG4yEsK8tumCdtNav1SqrNn9xNObwFTD%2FwEkY3ZOOYbr%2BnNG8GhuWrLo%2Bi5v1jZ%2BaxsyFiYjtE0Mx9XkhT49myVuNSYGR4rfS8aUjwFgzeNTrijh&X-Amz-Signature=3d92a4c2d45fe82832ef98c00d388807ce3b54cfd80fe008fc76d01f694fb1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4OPNWX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDz1%2BSBFl8Z1ofgWaV4XZoet9SD%2ByHf7%2BqfBFuB%2F1CsBAiA%2B9VU5sRHGnqA9ZmLdZKeLYZPHjSEI4K9uFuTi8%2B6D9SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNSng%2FDTSciLocwCHKtwDjxHJ5OH4VFFC1AftK9FmK5Pa7iWHhuubeHwmM6CVvYTjS4NwJY3EN9aXFJnfkobk407iMf3%2BUIAkKi1j2YkgPt0TXSJcb1vZGAwX4AZhYLYXo2Tr2MoeBlkEVW2bSm2SYHTmTuBb%2FHfU%2BvXjD7yuSXWaStaZAe0buk3K6x9o7zE3cwsFRGtbxafDolQFC5SdlzJzRzogSrjKEsOg1RU1py7kEo2cg%2BXKo4IDbApayxOwwLDAycAAjTAXB7tSrS7D41PWSX%2FRtbTdyRwpTbD2LArxiJ5WzmXSG%2FM%2Fh%2BQqoYrhaj93JbQnALq4d1we%2By%2Fjbw0EPpg3gWclJ5HBmx9mAC2EAFqB%2FdMPfD1SolWUofw5LRuvxrX02ymeTYiGKAv8qp29kt5%2FN7qUZ7dZX4FmEuPq864TPR0g4645WywpFXSujhICo0LGBkwibmSQ8R%2FzWiZ6tJncrEq6Pny%2B4TCZiXVOAR4vMqZ%2Bh%2BNH4Bhqij%2FtBAh%2F5PAgPAubuzI6%2Fon%2BsH%2FqEjLch1aDEml1ymsKthaCd7hFSMyJYzFiVgcTJ%2B%2FsrXEpku7gu6DtJQ%2BVhClP%2F3xALW2wrE%2BDGztpJt21fWPFbAuXI%2FUje6PtO6vFnIw%2BiRtZpHBRao39s3Ew3vvLwgY6pgH%2FZ3D5q2CLR%2BRlkl2muHxlj6FksGBxEtjKz0yEV%2BO7%2F%2Fa3ECbcjB%2BbgPUMU7YpcNn24nqPj5wdqYKbrttcvfSBg37vzBGwt66CMbxAnUyl%2F2NgIitaF6%2FGNC1etXMp1B%2F2blnk7mJfFjJfjEX52HK%2FXCCBoEzfK041zW5sYqKekiwicc4kX6lzFbaZYWTN2nw4oCK9IRGwXRrQv4qC7r6%2BcXjpcIVk&X-Amz-Signature=5eae7d3506f4b541f2881479ca9c671eb37d1a93f3d59c80b2495d371a455ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
