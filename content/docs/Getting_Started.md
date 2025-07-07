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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY3LRGGZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBm98qHZR3EcAy37wlEJP4zdN9g8MTzGsvs%2BzX9pAZptAiEAhgGP3%2FW2uwDkQ26oUdKXFrY7glRmGW%2BJr13V0XsdFjIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIqRIDid3rgBLU8CjyrcA6VNbA93mGylw0ZSJjbeaJvtFbAOYt31oByX0o3zY1wDm5VTP%2FER2xCw%2BJ9QJvb53fjfrdnRAudJXorti0CVzds6XShKWkmpQ07vbxu5wHbo30z6i6dgXflqHp%2BdTiv9J%2FTSC%2BrzS8GAKxoapucY%2FIVX7mq1vBokaO1I5KKmDapJA%2Bv4PcjdX9hxdGstXEKH7OwS6buG4ukaV%2FiL7uH5E7jVjZEfiR7diH3hZ%2FP7xpujbkrvaYeXzZlUDp0GVyE5IhWXoj9N30XYvlAQs7HVcFU8Xf73yCqhx5RTAoBXkIJ%2B9l5FGnqSMxpmBvZgTTnmgfcPDfpzm%2BsSV4hnXiDczrx8tqrSm1d1tEfPh49HscXdY6LpYhE%2B57Rp8AcXLsWm0Zco0Gz5H9YeSngG9y3qx5%2BJvyTSLKhTmaEik4yqXyP%2BigeLFbPH%2FE5EGc7oY5VUUrgfGoDDpz7Ivs7C%2BhA6oGar91o5WovgT%2BBuUSlW0cIWxhspDeDldtPP2MSit3qk2dQRZSo%2B4NzUIodPPFIUd%2F5vaODSLQ3a425d3%2FR%2FXyBPlRF66Hp323LXN6iNv%2BVA%2BWS%2B65%2B6ldpHEHL5Oq%2BweLUABBZW0CoLtBgYax2Ya4tNQ3EqzDw7IbMSIDs2MPLpr8MGOqUBuHRODzhRh9nlCwYzealEAgp8PkAnEgwutMlm1pPu4v1eXRbzqbLBhxTZD6o369eiOOZse0RLjA9Fdf45I9CyrIlF%2BXOahvq%2F%2FCltMkNm%2FVvZcMexRJARt1ntE8qx%2FE1PKld%2B9WftKndRrUowiiNPX4Lta6OscMk%2BtzVGIjM7TAxDdrVUTWfwmPfak1FYAieiAfrREoacMs%2BakRS7P0XHY6xlv%2Bt4&X-Amz-Signature=eaa6654dcc8b18d3333dc2b829ec6c76eeb51e0867201d5fdbab2a94ee78ec59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY3LRGGZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBm98qHZR3EcAy37wlEJP4zdN9g8MTzGsvs%2BzX9pAZptAiEAhgGP3%2FW2uwDkQ26oUdKXFrY7glRmGW%2BJr13V0XsdFjIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIqRIDid3rgBLU8CjyrcA6VNbA93mGylw0ZSJjbeaJvtFbAOYt31oByX0o3zY1wDm5VTP%2FER2xCw%2BJ9QJvb53fjfrdnRAudJXorti0CVzds6XShKWkmpQ07vbxu5wHbo30z6i6dgXflqHp%2BdTiv9J%2FTSC%2BrzS8GAKxoapucY%2FIVX7mq1vBokaO1I5KKmDapJA%2Bv4PcjdX9hxdGstXEKH7OwS6buG4ukaV%2FiL7uH5E7jVjZEfiR7diH3hZ%2FP7xpujbkrvaYeXzZlUDp0GVyE5IhWXoj9N30XYvlAQs7HVcFU8Xf73yCqhx5RTAoBXkIJ%2B9l5FGnqSMxpmBvZgTTnmgfcPDfpzm%2BsSV4hnXiDczrx8tqrSm1d1tEfPh49HscXdY6LpYhE%2B57Rp8AcXLsWm0Zco0Gz5H9YeSngG9y3qx5%2BJvyTSLKhTmaEik4yqXyP%2BigeLFbPH%2FE5EGc7oY5VUUrgfGoDDpz7Ivs7C%2BhA6oGar91o5WovgT%2BBuUSlW0cIWxhspDeDldtPP2MSit3qk2dQRZSo%2B4NzUIodPPFIUd%2F5vaODSLQ3a425d3%2FR%2FXyBPlRF66Hp323LXN6iNv%2BVA%2BWS%2B65%2B6ldpHEHL5Oq%2BweLUABBZW0CoLtBgYax2Ya4tNQ3EqzDw7IbMSIDs2MPLpr8MGOqUBuHRODzhRh9nlCwYzealEAgp8PkAnEgwutMlm1pPu4v1eXRbzqbLBhxTZD6o369eiOOZse0RLjA9Fdf45I9CyrIlF%2BXOahvq%2F%2FCltMkNm%2FVvZcMexRJARt1ntE8qx%2FE1PKld%2B9WftKndRrUowiiNPX4Lta6OscMk%2BtzVGIjM7TAxDdrVUTWfwmPfak1FYAieiAfrREoacMs%2BakRS7P0XHY6xlv%2Bt4&X-Amz-Signature=9630e843390747084ce100826173df679aaebaf03c15c92c99cc6a08e624474d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY3LRGGZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBm98qHZR3EcAy37wlEJP4zdN9g8MTzGsvs%2BzX9pAZptAiEAhgGP3%2FW2uwDkQ26oUdKXFrY7glRmGW%2BJr13V0XsdFjIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIqRIDid3rgBLU8CjyrcA6VNbA93mGylw0ZSJjbeaJvtFbAOYt31oByX0o3zY1wDm5VTP%2FER2xCw%2BJ9QJvb53fjfrdnRAudJXorti0CVzds6XShKWkmpQ07vbxu5wHbo30z6i6dgXflqHp%2BdTiv9J%2FTSC%2BrzS8GAKxoapucY%2FIVX7mq1vBokaO1I5KKmDapJA%2Bv4PcjdX9hxdGstXEKH7OwS6buG4ukaV%2FiL7uH5E7jVjZEfiR7diH3hZ%2FP7xpujbkrvaYeXzZlUDp0GVyE5IhWXoj9N30XYvlAQs7HVcFU8Xf73yCqhx5RTAoBXkIJ%2B9l5FGnqSMxpmBvZgTTnmgfcPDfpzm%2BsSV4hnXiDczrx8tqrSm1d1tEfPh49HscXdY6LpYhE%2B57Rp8AcXLsWm0Zco0Gz5H9YeSngG9y3qx5%2BJvyTSLKhTmaEik4yqXyP%2BigeLFbPH%2FE5EGc7oY5VUUrgfGoDDpz7Ivs7C%2BhA6oGar91o5WovgT%2BBuUSlW0cIWxhspDeDldtPP2MSit3qk2dQRZSo%2B4NzUIodPPFIUd%2F5vaODSLQ3a425d3%2FR%2FXyBPlRF66Hp323LXN6iNv%2BVA%2BWS%2B65%2B6ldpHEHL5Oq%2BweLUABBZW0CoLtBgYax2Ya4tNQ3EqzDw7IbMSIDs2MPLpr8MGOqUBuHRODzhRh9nlCwYzealEAgp8PkAnEgwutMlm1pPu4v1eXRbzqbLBhxTZD6o369eiOOZse0RLjA9Fdf45I9CyrIlF%2BXOahvq%2F%2FCltMkNm%2FVvZcMexRJARt1ntE8qx%2FE1PKld%2B9WftKndRrUowiiNPX4Lta6OscMk%2BtzVGIjM7TAxDdrVUTWfwmPfak1FYAieiAfrREoacMs%2BakRS7P0XHY6xlv%2Bt4&X-Amz-Signature=e52793e77abc7985de08e297c057c6a8189eb649166e9fdbfdf55c7b9a7eac7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOI5QGWO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCGehu8HFL2YyYVU7DEPHJXEwvipF76smj0SHA43nlyagIgWZy2ireHsT8wRv4y8LBEjip1DK25GEkXCZjfPW4ShJYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGNvC7Hr68WW55WYVCrcA9HMZUiqwxWlH0vVp0y6NxAYSwB6yEn4JeQLUgquF9n4dybn5G%2F22bKLjwDE9f3pBIHCt6N4%2BAILV6gmvUrgVjBzzMmcPJUEc35NnyPbhwAOxyTlD0b3t5mTa26ARcAdvgWzgSQzJ8YDOccWUqibn1VQlMN3Wp2xqO5AD%2FvMhUiUgy3bc6ZsHd%2BkTC0uo0DQH2eZ2jeEKv8sVgbQnq56N00aizySkdBN%2FMQ6QQ%2B216cZybNA9LNaPxjlS6i6CKD5NRZrlWwDaBKdnvb%2BjKSBDXQrva83%2BVOpRWeoDM4xY%2FqGzgd5aDHyzNyaO%2BmjKNut2%2F%2BC6FA%2Fi3x%2F3JEACh4KXwjyUWCynJ4ClTDmCWif7Qtc9ngTmLD2KpFZ%2FRgq1ZulN7H6lf3a1jkt5aP8lKbbd7KKjDfarqXtwo1aVnCCgT8OQJHQnwRIWJg9Cma90cu1laAzgGF4ZsUY6MtU4ZLkW%2BWDgo0t4rFqIvECJHXiCAm7tLU3TpiQRbxWA%2Fjy3HpyvI%2FJLf323q0eqE9rq7W8Em1noMijNqfcHDeunGrjhJMbqI%2BnyJ%2BatmiyvQzPsrqf0kpbORWb4R64pWkIJQEWc8tHyNzpWsd9oWfQMo%2FJCNAx2qWI5k9XuQYQZ8OiMIbqr8MGOqUBlZitQvDdSwUShCT04dPSFdd%2B0KmHpV5BCtMDQ4A0uzDxuXyn%2BhUHvKY%2B8hbArB5q0BkV1VRaQJ994HVaaVW8BiWesTB4YayxmFwgJRCSozOO7VZH5b2%2Buy4BcvMAsLu3gqWsCR%2FowSuCxyTOTkYH6TFht13yYIkiBnas2Ec89JwL%2BtC7P1g2J2n9SkqXfKIBi5aH0c5Pqdd8qrJew14pkWlJLKsL&X-Amz-Signature=0a4e66139171126ef81dad5f8d2ab1e195c9f6de41a1079a7d4e401c8a6d8f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB63BZAR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIH5%2B9q2BrLpqzMRIgQEu9fiRie53suka%2FUz5ruL%2BPs7iAiEAiwIZ0YOF1gtCBpsimpUhLNA%2F0w%2BYsSttTZTbO1eX4vgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDC7Gx%2F3zQ2Rtpf64fyrcAzYvpKuiVSRAfuVkmvWKdFF%2FvXONNsiAOieywwG%2F7IUNfOWSlj6IJ23YhYq%2Bbu%2BdPUzjHDJYJEx1HmoCt0zHALSkFZKFPhO9eGU1tc%2FMSSxMIhvUWAS8OTl7UG9CVN1yYRHMQ35c07mCyjok0rHQdhzljtfeGVh8fV09PezYNetKGIVV3nbLuk7mfx3IH4TpK9ob%2FJCdeBKm3Zrepa7Ty3Pv7WlkCP5aKQVbBZI9YrUxXvmLpEx9i4FqBL%2BBhQXQOgb5WyzhsT9RtRFNHi63Awas4CQ0QAhGP3MLakKb1WqNps%2FoWq2pq8kf4RCAC8U5koXLABNQFeSpbx3z0lqgh32s7VSmwxRNiJlWoquQwUO9PDzIdidlaotX1hobyA4R7b034Q5MS3r4OixXtD0PstKjMwXez9dngdQvKlredcCn8zgEfPhr%2BxnKdpBVC5%2BDEsF18MJmVCZ4NADAyai8Czv7Baxw4jFOBrDt%2B83GdDSQvP8NTQq7v0S6BnutVpRTiYtvT79YS5GMqvip863uaxoJ%2BpMEBqiNmqN3Mu%2BwPXqMm6jHe3pDj0MmvLMvuBmtmHMyoYEpNYw%2FcxWdyYbaQuMlHlol%2Fd9DBr1B5qAZFoJEKkoIVWeqSs%2B1k%2BVsMLTqr8MGOqUB1hhMjcjRbPQzXAeOsLP4Xf2r%2FChCD4Ox7fNvuLZHeuAwYibHFcLeJX9g%2BNxKftLwgU0pVCYou7H7fVOFitP68626AMNfPkYjgGzZw3Op0WDdZ37IWcEnn2e4iC%2BBXcLLfoFPWFh3Ti%2FrIUMRrHjkSby1QpDpjquUqtXdG2tGzBvAMlvXkChqEvuQ4h60KbtsPLqNSh7KOVFq%2FfDogDNI0NlmYxUz&X-Amz-Signature=8cfd0631f1aa35f2950cc60de29bf858040ab9a2d9f5327b772099b5cb70169e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY3LRGGZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBm98qHZR3EcAy37wlEJP4zdN9g8MTzGsvs%2BzX9pAZptAiEAhgGP3%2FW2uwDkQ26oUdKXFrY7glRmGW%2BJr13V0XsdFjIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIqRIDid3rgBLU8CjyrcA6VNbA93mGylw0ZSJjbeaJvtFbAOYt31oByX0o3zY1wDm5VTP%2FER2xCw%2BJ9QJvb53fjfrdnRAudJXorti0CVzds6XShKWkmpQ07vbxu5wHbo30z6i6dgXflqHp%2BdTiv9J%2FTSC%2BrzS8GAKxoapucY%2FIVX7mq1vBokaO1I5KKmDapJA%2Bv4PcjdX9hxdGstXEKH7OwS6buG4ukaV%2FiL7uH5E7jVjZEfiR7diH3hZ%2FP7xpujbkrvaYeXzZlUDp0GVyE5IhWXoj9N30XYvlAQs7HVcFU8Xf73yCqhx5RTAoBXkIJ%2B9l5FGnqSMxpmBvZgTTnmgfcPDfpzm%2BsSV4hnXiDczrx8tqrSm1d1tEfPh49HscXdY6LpYhE%2B57Rp8AcXLsWm0Zco0Gz5H9YeSngG9y3qx5%2BJvyTSLKhTmaEik4yqXyP%2BigeLFbPH%2FE5EGc7oY5VUUrgfGoDDpz7Ivs7C%2BhA6oGar91o5WovgT%2BBuUSlW0cIWxhspDeDldtPP2MSit3qk2dQRZSo%2B4NzUIodPPFIUd%2F5vaODSLQ3a425d3%2FR%2FXyBPlRF66Hp323LXN6iNv%2BVA%2BWS%2B65%2B6ldpHEHL5Oq%2BweLUABBZW0CoLtBgYax2Ya4tNQ3EqzDw7IbMSIDs2MPLpr8MGOqUBuHRODzhRh9nlCwYzealEAgp8PkAnEgwutMlm1pPu4v1eXRbzqbLBhxTZD6o369eiOOZse0RLjA9Fdf45I9CyrIlF%2BXOahvq%2F%2FCltMkNm%2FVvZcMexRJARt1ntE8qx%2FE1PKld%2B9WftKndRrUowiiNPX4Lta6OscMk%2BtzVGIjM7TAxDdrVUTWfwmPfak1FYAieiAfrREoacMs%2BakRS7P0XHY6xlv%2Bt4&X-Amz-Signature=428b83320b99fef8bb352c9a1f18198f2f074c114fe4b804d20bffc4b20888bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
