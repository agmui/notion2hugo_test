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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFXOJZH%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1lxzGqjInoALy2eAAeabgX2DNmB4HlCbX1WHVuGQ7zAiEArx6fDRc4qMoxs7QfyUuzYONtx27Zf29%2FAAOczOO2HPYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi%2BCleezneO08xq3yrcA%2BOvrW1FEMiJmhvLMQTT94lyO0QSkgp16OC2dtugSmzF%2B50u4N8ecBMFtoBwNd3H5v8kff8hBvf0awphuuscByRrjymUPU9VfqlA%2FJuh0HC8LnzWt9bvVBHLYhr4f4aheQXF6dGM6NkuWyZ2sxqVhYVlDmv%2FH3JfqZxxHlfuduvWgAgKKotICgLljvNuKntRVI1glqMG0z6SZjvxLgiputtQkJD4t2KweBZGtCHtCzBYUqGFD86uq2YTTAuQdVHJf5z5Bcbi4zYjx2XrBoIITCVC2cMW%2BLaUIuHZNMhiVKuk91LQgLIAe04uitVjgsYU%2F2JCN%2Ba1FZ%2FuCt3OUcb0%2F%2B0DzKUdwAixgkf7uTd4S8pPcMhXbYMrHqUM7jkDDhOdYR8sTby2rWNCOfqK%2BtwGlL9eamyTNb%2FFsUqUEfusxqv0HFGeKE07oXRReJWTKDf%2Fk8ZOluu7X5cokNK6my2S8aKDT2yFgkS3wdBBQ4tw8DWuWW3iRIgA4kVCcEO33ahIr72Kl5bLS%2FPJFgVe6xyRWyouk1Lc48z2PGOV5b1y07VQnx%2FzvWy1KSIHpBL%2FGDlJrmZILhmaKKlrLLiPeyMbnxBPKGS%2Fa5JG6%2BdRPB%2BRpOv8S9dXJS%2B4CMjNE9qQML%2BkgcsGOqUBMzG8RECZ9lh4lI6WEWs%2B19V0IDwG2T20CirODm134%2F3p4kavg8tKSFc7%2FVmPIb1aJpdAK5BGU%2BieWOyBekTbGuFP%2BxormKwgzdu5LmMnFBlPH61FsP0EkP32b1EvKl7Bn0bsli1O0SLvkk48CptU9Erkek%2Flp35Sh5TXAZZuxgJ%2B4nKZH%2B2A6ZNnGenzfEcPAIFODUn2yqs0XLkDcdtna5pSAXbX&X-Amz-Signature=c8da20f14df4bf9ba50279e10fa6c18e0ba9f62ba91e35a6682688769ca3e840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFXOJZH%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1lxzGqjInoALy2eAAeabgX2DNmB4HlCbX1WHVuGQ7zAiEArx6fDRc4qMoxs7QfyUuzYONtx27Zf29%2FAAOczOO2HPYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi%2BCleezneO08xq3yrcA%2BOvrW1FEMiJmhvLMQTT94lyO0QSkgp16OC2dtugSmzF%2B50u4N8ecBMFtoBwNd3H5v8kff8hBvf0awphuuscByRrjymUPU9VfqlA%2FJuh0HC8LnzWt9bvVBHLYhr4f4aheQXF6dGM6NkuWyZ2sxqVhYVlDmv%2FH3JfqZxxHlfuduvWgAgKKotICgLljvNuKntRVI1glqMG0z6SZjvxLgiputtQkJD4t2KweBZGtCHtCzBYUqGFD86uq2YTTAuQdVHJf5z5Bcbi4zYjx2XrBoIITCVC2cMW%2BLaUIuHZNMhiVKuk91LQgLIAe04uitVjgsYU%2F2JCN%2Ba1FZ%2FuCt3OUcb0%2F%2B0DzKUdwAixgkf7uTd4S8pPcMhXbYMrHqUM7jkDDhOdYR8sTby2rWNCOfqK%2BtwGlL9eamyTNb%2FFsUqUEfusxqv0HFGeKE07oXRReJWTKDf%2Fk8ZOluu7X5cokNK6my2S8aKDT2yFgkS3wdBBQ4tw8DWuWW3iRIgA4kVCcEO33ahIr72Kl5bLS%2FPJFgVe6xyRWyouk1Lc48z2PGOV5b1y07VQnx%2FzvWy1KSIHpBL%2FGDlJrmZILhmaKKlrLLiPeyMbnxBPKGS%2Fa5JG6%2BdRPB%2BRpOv8S9dXJS%2B4CMjNE9qQML%2BkgcsGOqUBMzG8RECZ9lh4lI6WEWs%2B19V0IDwG2T20CirODm134%2F3p4kavg8tKSFc7%2FVmPIb1aJpdAK5BGU%2BieWOyBekTbGuFP%2BxormKwgzdu5LmMnFBlPH61FsP0EkP32b1EvKl7Bn0bsli1O0SLvkk48CptU9Erkek%2Flp35Sh5TXAZZuxgJ%2B4nKZH%2B2A6ZNnGenzfEcPAIFODUn2yqs0XLkDcdtna5pSAXbX&X-Amz-Signature=9f8ae6b7d898a6ca98989cba67d043df904b67d6d61cc7edb4634a6f161374e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFXOJZH%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1lxzGqjInoALy2eAAeabgX2DNmB4HlCbX1WHVuGQ7zAiEArx6fDRc4qMoxs7QfyUuzYONtx27Zf29%2FAAOczOO2HPYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi%2BCleezneO08xq3yrcA%2BOvrW1FEMiJmhvLMQTT94lyO0QSkgp16OC2dtugSmzF%2B50u4N8ecBMFtoBwNd3H5v8kff8hBvf0awphuuscByRrjymUPU9VfqlA%2FJuh0HC8LnzWt9bvVBHLYhr4f4aheQXF6dGM6NkuWyZ2sxqVhYVlDmv%2FH3JfqZxxHlfuduvWgAgKKotICgLljvNuKntRVI1glqMG0z6SZjvxLgiputtQkJD4t2KweBZGtCHtCzBYUqGFD86uq2YTTAuQdVHJf5z5Bcbi4zYjx2XrBoIITCVC2cMW%2BLaUIuHZNMhiVKuk91LQgLIAe04uitVjgsYU%2F2JCN%2Ba1FZ%2FuCt3OUcb0%2F%2B0DzKUdwAixgkf7uTd4S8pPcMhXbYMrHqUM7jkDDhOdYR8sTby2rWNCOfqK%2BtwGlL9eamyTNb%2FFsUqUEfusxqv0HFGeKE07oXRReJWTKDf%2Fk8ZOluu7X5cokNK6my2S8aKDT2yFgkS3wdBBQ4tw8DWuWW3iRIgA4kVCcEO33ahIr72Kl5bLS%2FPJFgVe6xyRWyouk1Lc48z2PGOV5b1y07VQnx%2FzvWy1KSIHpBL%2FGDlJrmZILhmaKKlrLLiPeyMbnxBPKGS%2Fa5JG6%2BdRPB%2BRpOv8S9dXJS%2B4CMjNE9qQML%2BkgcsGOqUBMzG8RECZ9lh4lI6WEWs%2B19V0IDwG2T20CirODm134%2F3p4kavg8tKSFc7%2FVmPIb1aJpdAK5BGU%2BieWOyBekTbGuFP%2BxormKwgzdu5LmMnFBlPH61FsP0EkP32b1EvKl7Bn0bsli1O0SLvkk48CptU9Erkek%2Flp35Sh5TXAZZuxgJ%2B4nKZH%2B2A6ZNnGenzfEcPAIFODUn2yqs0XLkDcdtna5pSAXbX&X-Amz-Signature=f0da605c949fb24ba2ea862e6afc1778bc56732cb81d0611663841f1dd73ad9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYKUTEWT%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmoja1HNLutE5ttnfoDqwfqzQdgHBoTrtQaOZ3TsTUZAiBNUaBQkUZDguqISqwIAHqxGP56icX%2Bnk2XFRxfgGgN2yqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUK04Gv4hsqD8gbYpKtwDLrPHd51ffhLbWgJmoB0NJfVsJT92Am7oP6ns7pBY%2BGk3%2BhBAPmNzaWGNmo%2BD0Z431TK5WjcFH9tgYd9X3SsbeEHIhgS6iDVXnCkQshVD%2BZzWt4tfFYzijDtZKsQRFiXjLyFyRN0AbtXJM8MDXoK0ENz6kKPmRJAXf0mAdv5bC4QmBDGh1U80mmOecH22cL0CMHL2CxgHmr2s5WiI3uvmUuboywMSf%2Bl4LJ1ce6Azj9PWMdVp5XOSDgnxOJCB7pyCjDHvj%2BO%2FSxsr%2FPS0Sn8wizs83uzNKsN0szKoBa8eA2BozBPuMvoOyC3Mq%2FWgFA89xyaFkU%2FM3NdeHcwxzpBDtItSrSxCSOWi%2FIeoj%2Bp0DUpeS3Rj6UdZMJnD3aBXcdkG2NEOw%2B6WMkH1orgluNnVxaAwhUO7Ev79tIujqQzu%2F%2B8d5eOYc7qVtgNPaTCZyvN%2FYMWHUrSTPcU%2FwPjByXcuga6yyCRo2c2tXMwz6zSfgZSz3XcY%2Bf7h66a301JyKw9qkzSAYGZSRluyDjzAub07%2B6QGCQm142HsFR3I%2BB6SH3MD%2BcG0fWpwIS36bqHxzCqXrOpPBYE7kIwBuHncvmhoi%2BGRJ5nvDwZnmePQzn2hwNZXHuhJWdwT%2FFDAirIw76OBywY6pgFRrRi2fVCdSOEQ2pownVsbNFFcOYdPWVYl23%2Fgo9o0AcqmHWqn5MDpC5X3fFABCUliyPfklMahGIo3SdseE5YvTO0mtGAON4SyI4llokpA8Jz%2FvRda3QHldJeOlwbrwzC%2Fyx0NJqJf1hR2%2B9DisCckFxb00EIByDj%2B0kjMq5lWRSexQQJhCSdb0yNH4Nd%2BCwyzLhm5iWwIJRLDKiWFOUoySEte9dIp&X-Amz-Signature=88bf42bb668e989b2761ea4808dd75174edba1d8f546dcecf2c625fc61f21571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHGUHMZ%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyqvg8HjnLqrHxNOMhdGcEK99hGMYAs%2Bw3dkLXTW6yDAIgfTOGpxHtsMSlGygVZVMyP2FhPCj7wv0ZKVC%2FBLKtBp4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlHt8eSFePpRZYf1yrcA9RBIZTjnvNUhq4k1cEV2z7mHhLifivvCN99JGLgo%2Byua7L31yfqgtpfAe4JPwE3F%2BKWLB2jd3ZOaSt0XO2PJY6dpX9S8ZkKdNhukwJqodpTZsws1jcgsejw6N1lwocpWyzykmPLnM210K1Pyc7SO%2BzXrRzsjQyZD8TsyNKzsg1SrbF8ydIaO8UpOAvm8EfpnRXHus%2F0NyJNwfVHrp0jZq73fQiIJwZlCRh%2FAcBTVDCOgd%2FMa4CE9PjR7ZH7rhx7vTAkcULxYG2QRqeHHmk2eSyhR%2FPYGWRp3b7KCu8M5CKhQV6tKeA3F5JLrNN1zu5L%2BVsgJd9D2ElX5TLbGsugsh8tbGGpmiOuyWb0kMnB57tes1M71U3BnlgiMK6vhV7eLDhS4Vu7Mm5ifn009F%2BV9DfSHjQDHFfV6WxtVFB0W5Xwtn7xezOItLKtSW2iuxlnYyMPZKpaK7t6E3S58WOw3pYnr5yOeMR%2BIHjOzyRDnbr0pkssj3EvBLLONpVUbUpcTEofsj4hnlMELotI0JWau17n1avQgBEWNal%2BMupBuHPsDOu%2Fr8pWuuhpiSY3rHvCcni33hVqjXWRLXoCoD8MqhiQNP7TtYbzh4AWOgmeDT%2BF6Elm47QLyRSJ1vyuMKmkgcsGOqUB3qpSagHFLXyD9WnYOjhfmvkOac5EldpR7YOm1BozYraZHupCk2zzdwgOOnOkNqARvPUb4i7adAHzhZNIxwaixYsyND1wqGwPMVKnx9VRVYnJqKOno%2Fs063NAgyKFuK31oRQ9Rcj2ELf7%2BpRwOrKTLfUA2CGDAQRTdhIbhvFfvMs1%2Fmkd8a8SePRYFn8d%2FmtsAwwxEKHRbG206YIH7IE%2FoflTL2zC&X-Amz-Signature=0eeec8abf9788b90ce2ecec976c6eb84f7fe18c54af2ddb1c11d8306d1014ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFXOJZH%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1lxzGqjInoALy2eAAeabgX2DNmB4HlCbX1WHVuGQ7zAiEArx6fDRc4qMoxs7QfyUuzYONtx27Zf29%2FAAOczOO2HPYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi%2BCleezneO08xq3yrcA%2BOvrW1FEMiJmhvLMQTT94lyO0QSkgp16OC2dtugSmzF%2B50u4N8ecBMFtoBwNd3H5v8kff8hBvf0awphuuscByRrjymUPU9VfqlA%2FJuh0HC8LnzWt9bvVBHLYhr4f4aheQXF6dGM6NkuWyZ2sxqVhYVlDmv%2FH3JfqZxxHlfuduvWgAgKKotICgLljvNuKntRVI1glqMG0z6SZjvxLgiputtQkJD4t2KweBZGtCHtCzBYUqGFD86uq2YTTAuQdVHJf5z5Bcbi4zYjx2XrBoIITCVC2cMW%2BLaUIuHZNMhiVKuk91LQgLIAe04uitVjgsYU%2F2JCN%2Ba1FZ%2FuCt3OUcb0%2F%2B0DzKUdwAixgkf7uTd4S8pPcMhXbYMrHqUM7jkDDhOdYR8sTby2rWNCOfqK%2BtwGlL9eamyTNb%2FFsUqUEfusxqv0HFGeKE07oXRReJWTKDf%2Fk8ZOluu7X5cokNK6my2S8aKDT2yFgkS3wdBBQ4tw8DWuWW3iRIgA4kVCcEO33ahIr72Kl5bLS%2FPJFgVe6xyRWyouk1Lc48z2PGOV5b1y07VQnx%2FzvWy1KSIHpBL%2FGDlJrmZILhmaKKlrLLiPeyMbnxBPKGS%2Fa5JG6%2BdRPB%2BRpOv8S9dXJS%2B4CMjNE9qQML%2BkgcsGOqUBMzG8RECZ9lh4lI6WEWs%2B19V0IDwG2T20CirODm134%2F3p4kavg8tKSFc7%2FVmPIb1aJpdAK5BGU%2BieWOyBekTbGuFP%2BxormKwgzdu5LmMnFBlPH61FsP0EkP32b1EvKl7Bn0bsli1O0SLvkk48CptU9Erkek%2Flp35Sh5TXAZZuxgJ%2B4nKZH%2B2A6ZNnGenzfEcPAIFODUn2yqs0XLkDcdtna5pSAXbX&X-Amz-Signature=a8147353b9b15ce541880d978eb0e5234e6f226f05b2b0555670aa4704fc2633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
