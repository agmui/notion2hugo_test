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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG7QXS5O%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIE5z0%2BHnPMGA9qp4xBg9qV67IDt9V3%2FIeCxkVr5%2BU3ZoAiEAluOHTRFR7bgEsdmaFZyLGWBeR7W0kc0UpTwT3KRSMLUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKJvH0YWz3%2Fc26a%2BPCrcA7AcCotETq5XzzaPpiivNijg%2B1wbgMhct%2FmD4FlYxeYtQQrlKbNrWxzcK6p0nOetluWdO7xb9%2FaIThD8A8PgqI8t80i56hGr%2FGfE%2BVbP67Dgfpd2r7YBxXkPI%2BZCdDDRVpXYX8qlk89QfI8LA8JMpBn%2BrnKAuN0tXh0Zk8E28sxVx3gHJ2xbLgs5zgPbj9JTxs%2FVCJcBwYMSvuTtlAaIz27Vq4qhUesEdSWlfDfPFEVs57C1H4eT8rswzEt0rwpFEo3MHciKejRGK3rdp8lnR3lcrJrWSeigR33NBIigfByVCAVhrV61zo%2FCxs2UUvVsuLRaZcsAL4RpyoH0EDjN6GhBxNxfplsYEi74KsJJ%2FJx2AsUnGsB4S65pkhwaAOzezn0LCD8kY7JYSCqmQN2NnjcakeVmhzQMHiXYAygmdNrgvjC5PkRcL64dKIlV2b%2BtHz89UHwgqLFyDZ7mBn%2FaJvjxgz5S6I0%2B83aWbt2DjMwwisBNTHolBLUx0p%2Fy9ROFnvPRIycmobWW6ueh35fssVjXkC3ayo%2B1qFhjnSBBP5iWnM4b5LGGEaQTqmm%2BdK9AseOs%2BkkUPC%2FlIfWrVh%2BfNtjQ77vrCFI%2FKWl1s8nxS18V3dqXekuXhO%2BOgYziMOCMs8IGOqUBJXgCN1Qlx4i%2F82o4EGtRLu4iPeAFP5obv1HOkBQYfeG6%2Bk5t2eEuqXLmjAi4LNIAO15DK%2FIJCDpDJzr%2F2uzveO1yTn8h3nsd5HDpDmZZHfxPdTNY3d4Fi6Y8uylVjrWPjaT8g%2Fl7%2BpITlzt8ZOwQ1yp5qB%2ButXoBts8Xywhk6P0PofJTMFJPHijZwatfo98V6MX4RxwesvgBBs5rjhuoAOLpWJTz&X-Amz-Signature=1cd55bae2ec1bb611cd9085174fc0afc68964da6851c5fdaa381e6e5bc38be44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG7QXS5O%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIE5z0%2BHnPMGA9qp4xBg9qV67IDt9V3%2FIeCxkVr5%2BU3ZoAiEAluOHTRFR7bgEsdmaFZyLGWBeR7W0kc0UpTwT3KRSMLUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKJvH0YWz3%2Fc26a%2BPCrcA7AcCotETq5XzzaPpiivNijg%2B1wbgMhct%2FmD4FlYxeYtQQrlKbNrWxzcK6p0nOetluWdO7xb9%2FaIThD8A8PgqI8t80i56hGr%2FGfE%2BVbP67Dgfpd2r7YBxXkPI%2BZCdDDRVpXYX8qlk89QfI8LA8JMpBn%2BrnKAuN0tXh0Zk8E28sxVx3gHJ2xbLgs5zgPbj9JTxs%2FVCJcBwYMSvuTtlAaIz27Vq4qhUesEdSWlfDfPFEVs57C1H4eT8rswzEt0rwpFEo3MHciKejRGK3rdp8lnR3lcrJrWSeigR33NBIigfByVCAVhrV61zo%2FCxs2UUvVsuLRaZcsAL4RpyoH0EDjN6GhBxNxfplsYEi74KsJJ%2FJx2AsUnGsB4S65pkhwaAOzezn0LCD8kY7JYSCqmQN2NnjcakeVmhzQMHiXYAygmdNrgvjC5PkRcL64dKIlV2b%2BtHz89UHwgqLFyDZ7mBn%2FaJvjxgz5S6I0%2B83aWbt2DjMwwisBNTHolBLUx0p%2Fy9ROFnvPRIycmobWW6ueh35fssVjXkC3ayo%2B1qFhjnSBBP5iWnM4b5LGGEaQTqmm%2BdK9AseOs%2BkkUPC%2FlIfWrVh%2BfNtjQ77vrCFI%2FKWl1s8nxS18V3dqXekuXhO%2BOgYziMOCMs8IGOqUBJXgCN1Qlx4i%2F82o4EGtRLu4iPeAFP5obv1HOkBQYfeG6%2Bk5t2eEuqXLmjAi4LNIAO15DK%2FIJCDpDJzr%2F2uzveO1yTn8h3nsd5HDpDmZZHfxPdTNY3d4Fi6Y8uylVjrWPjaT8g%2Fl7%2BpITlzt8ZOwQ1yp5qB%2ButXoBts8Xywhk6P0PofJTMFJPHijZwatfo98V6MX4RxwesvgBBs5rjhuoAOLpWJTz&X-Amz-Signature=3ea45165171b2dd33697092aad30cb70b22778678f4a42499053def84dd186b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG7QXS5O%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIE5z0%2BHnPMGA9qp4xBg9qV67IDt9V3%2FIeCxkVr5%2BU3ZoAiEAluOHTRFR7bgEsdmaFZyLGWBeR7W0kc0UpTwT3KRSMLUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKJvH0YWz3%2Fc26a%2BPCrcA7AcCotETq5XzzaPpiivNijg%2B1wbgMhct%2FmD4FlYxeYtQQrlKbNrWxzcK6p0nOetluWdO7xb9%2FaIThD8A8PgqI8t80i56hGr%2FGfE%2BVbP67Dgfpd2r7YBxXkPI%2BZCdDDRVpXYX8qlk89QfI8LA8JMpBn%2BrnKAuN0tXh0Zk8E28sxVx3gHJ2xbLgs5zgPbj9JTxs%2FVCJcBwYMSvuTtlAaIz27Vq4qhUesEdSWlfDfPFEVs57C1H4eT8rswzEt0rwpFEo3MHciKejRGK3rdp8lnR3lcrJrWSeigR33NBIigfByVCAVhrV61zo%2FCxs2UUvVsuLRaZcsAL4RpyoH0EDjN6GhBxNxfplsYEi74KsJJ%2FJx2AsUnGsB4S65pkhwaAOzezn0LCD8kY7JYSCqmQN2NnjcakeVmhzQMHiXYAygmdNrgvjC5PkRcL64dKIlV2b%2BtHz89UHwgqLFyDZ7mBn%2FaJvjxgz5S6I0%2B83aWbt2DjMwwisBNTHolBLUx0p%2Fy9ROFnvPRIycmobWW6ueh35fssVjXkC3ayo%2B1qFhjnSBBP5iWnM4b5LGGEaQTqmm%2BdK9AseOs%2BkkUPC%2FlIfWrVh%2BfNtjQ77vrCFI%2FKWl1s8nxS18V3dqXekuXhO%2BOgYziMOCMs8IGOqUBJXgCN1Qlx4i%2F82o4EGtRLu4iPeAFP5obv1HOkBQYfeG6%2Bk5t2eEuqXLmjAi4LNIAO15DK%2FIJCDpDJzr%2F2uzveO1yTn8h3nsd5HDpDmZZHfxPdTNY3d4Fi6Y8uylVjrWPjaT8g%2Fl7%2BpITlzt8ZOwQ1yp5qB%2ButXoBts8Xywhk6P0PofJTMFJPHijZwatfo98V6MX4RxwesvgBBs5rjhuoAOLpWJTz&X-Amz-Signature=8613ceda28ad922e4b11b1917a9f4b7ab843f7289dd6fcaa7f232eb0fc2cbe90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RGOZ2CU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDpa0zKB5tLKq4ap%2BepbPemClf8NpnEpyHsAseL0GHCcQIgfdYvX%2FiX70a8lI8TCiYrNm9Lhj01DDJ48aMOLifNBKAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAn%2FxL2AJ3HslvTO3yrcA%2BZaBk5%2BO%2B0y%2FLmEYUMNBl2j0qi6oC3H1RvD56V%2B1MkguG84J1Fo02h2j5J5%2FIAEvemyUkoGcn7lKaM6SeJnKfVuHh4ixJVJrO9sLyjowPZa1v7Xq%2BpUswOndNSPXeuasK5teDFbs6YK8gcA1Th4uhegbxo6%2FhyM6KDvntUpGgOt%2BsrvmcCEcvWQeFfzJwGFiqKm1SJgqqytLMWf9Ou0Mwyp0PBVB%2BCuXtpoywBqRzddfAxRp7bUBUsG1vz1%2B9p99lBUpS2b5tzBkHc2IOO%2FqBjsIfUl1gC%2B37uufdntoPC123T4kOjbUhMoQR1hUxub4nweBNP7nGsda%2BEPz45Hg2yUn1ZryDGOHbpCvls9DVWAevatlHGohBut4XNH7e1cJFdBfkBtWrWP5Evb892cnJnCV7cvtvScMz2B2qlzhu56pmcvjvYl0GLjOf2jfWmIBhjuRhrSDqZbLpmI80u9wy2txrHiPlgw7mefQz9e0L5%2FmRTNCUJIbTrsEhZRg%2FOudPGuNgqto9%2FQFM%2Bf2H96sXeqhEWFKRPwESW3ZEpMosmtqlXEOp8F32DV%2BUDF5qGAYM2%2B7vqh9Przu0hncjpKcocNyp6Ikf9IVNom3iJbhFnNcwFYg3RROdMQQE5gMNeMs8IGOqUBqRb4YRyzT2pZ6qD3cN0SRCwAPprBxTJfJ2CFTTWcQ6dfgR2nLPZ31ePEBVKypyLWn6S9S31lAdS%2FisE04SsG%2FrL%2FFfwI%2FWKMdW8Jx03CoJxUxoEZpvXNt5G87oDJbsgchKvixWqpmRUoXF8bBLL66bDUN23rSdWAtBrihRBMfA0E6tgO75SYm%2Bf7DPMnPd7vKsJPr5%2BQdhWmPVurLY7erRXlCGd7&X-Amz-Signature=8845ec9a2bc1c82ec134e0aa731ffe625038e0de951ac4109a7062a575f8bd35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WRYBG55%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBx1PfRsoVxf304asc6OYF%2F4Jx0VBzDbEw0iOuFUviLGAiEAqbsxNrug64EGje%2FUhRornzj4w4du%2BpL1BEQTknexumgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHixaEEhH6F2wvLl9CrcA63MyhUbF41Re9z%2FQP%2FZVFc%2FmqAXJ3rHoXwqomLu%2B%2F%2BHnqT8d2cT4pXzAau871PCaFAa3sVRU8wnG%2FTA%2BkynvLvBT2mLVLVkbVVWwWUwO530BDi%2BlN1oybHWzHe1rIhKHBcIjje0LydUanGxdpTvxu73XsDlo6xG3cUPuVtnUG9mRwOeyimHwQt1T3Hhu%2BWYmQ4N0mn9MfAkvDdm9r8XJeqIm6XLJtbeb5oleBkyeSCWzYQVmFqBNgZk6YRCy9h%2BuLj21KTt0nes8pWcIM3tWlHQp6rjxuREMzZnM6zwIz%2ByZQO0C4KT7u1tIj2dFXeClu7BS9otRjluYvBkFBuUe2xXzAzBcMuimCjAb9U%2B84zekFVfGB6%2Fv0NDhOAHzxjRnXGh9r%2FTjLvGnSXQFqSecvQlAfQpcLbS8QvGEG645Jcra%2BRgrFK7WU%2Fviy9ku9QDB3vLqd1%2B4VAjEQ3qQkj2R3sPTpoiuDj6WazjhwPnXAuuFslZjHdhL6SwcF%2BMrtuauXmAozyU%2F3WLC81Ll0do3ADkosgXGSvf58zTETlippqLomXkIKVJAV2rTOlwsHtEO%2B%2B0ohy5Aqq0vSy0cdwRXpdSB3Qp%2B6PCgYiUY%2BzNwY2wJ6ohDrhb7fEavmSvMLuNs8IGOqUB34bEx3%2BGZQucN5g4oOO3D6nPjupvEAeisV2VJs7WytdlaZZq57AQCQmarenZJn%2BgerfHckQjY9g8Mo1CXLUwbty4zrrm22jNwUD%2F4SPY3wrp3iYeXD914QBAbsOawNEX6EfVHvWHILlKmXO4twU1VDM%2FteBSDtIuMm0JCboZdlSIBoXy%2BF8IS0Y184h%2BrnfAeQDZvrC07HjcBmi6%2F0xfXHIqijBB&X-Amz-Signature=3ff64d3ffa79b40c031f10dc1773091c63b85cd689e29e6108ade8ddc82ae7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG7QXS5O%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIE5z0%2BHnPMGA9qp4xBg9qV67IDt9V3%2FIeCxkVr5%2BU3ZoAiEAluOHTRFR7bgEsdmaFZyLGWBeR7W0kc0UpTwT3KRSMLUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKJvH0YWz3%2Fc26a%2BPCrcA7AcCotETq5XzzaPpiivNijg%2B1wbgMhct%2FmD4FlYxeYtQQrlKbNrWxzcK6p0nOetluWdO7xb9%2FaIThD8A8PgqI8t80i56hGr%2FGfE%2BVbP67Dgfpd2r7YBxXkPI%2BZCdDDRVpXYX8qlk89QfI8LA8JMpBn%2BrnKAuN0tXh0Zk8E28sxVx3gHJ2xbLgs5zgPbj9JTxs%2FVCJcBwYMSvuTtlAaIz27Vq4qhUesEdSWlfDfPFEVs57C1H4eT8rswzEt0rwpFEo3MHciKejRGK3rdp8lnR3lcrJrWSeigR33NBIigfByVCAVhrV61zo%2FCxs2UUvVsuLRaZcsAL4RpyoH0EDjN6GhBxNxfplsYEi74KsJJ%2FJx2AsUnGsB4S65pkhwaAOzezn0LCD8kY7JYSCqmQN2NnjcakeVmhzQMHiXYAygmdNrgvjC5PkRcL64dKIlV2b%2BtHz89UHwgqLFyDZ7mBn%2FaJvjxgz5S6I0%2B83aWbt2DjMwwisBNTHolBLUx0p%2Fy9ROFnvPRIycmobWW6ueh35fssVjXkC3ayo%2B1qFhjnSBBP5iWnM4b5LGGEaQTqmm%2BdK9AseOs%2BkkUPC%2FlIfWrVh%2BfNtjQ77vrCFI%2FKWl1s8nxS18V3dqXekuXhO%2BOgYziMOCMs8IGOqUBJXgCN1Qlx4i%2F82o4EGtRLu4iPeAFP5obv1HOkBQYfeG6%2Bk5t2eEuqXLmjAi4LNIAO15DK%2FIJCDpDJzr%2F2uzveO1yTn8h3nsd5HDpDmZZHfxPdTNY3d4Fi6Y8uylVjrWPjaT8g%2Fl7%2BpITlzt8ZOwQ1yp5qB%2ButXoBts8Xywhk6P0PofJTMFJPHijZwatfo98V6MX4RxwesvgBBs5rjhuoAOLpWJTz&X-Amz-Signature=8029449698313b8419bc2329ec5405b5961b07b098edc312e93b6398f4695fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
