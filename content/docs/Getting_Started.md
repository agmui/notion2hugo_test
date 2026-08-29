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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QENLU7QB%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPQucsuuKMtClwZv82uOR7TCOSLTBDSEGrj98bQEAmUAiEAnQLsz6RIahPNJkGmODrRQo1X9cR%2BG2lpb3lgYY1e9FMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFHt1RJZjRxbhSsnzSrcA9dDZ8M2Yp1%2Bel3qD5o8ZcAQdJpWtrE%2Fqwz27rIJeo%2BgFv%2F7TrkPHdIj2c92214GLr3Ff53z9O2LRXuDWaParBb9UzPK1WUzKpv6SuXBRRyPDnV4IpM%2BhFASM7pH%2BDeJx2QqrSbWrjrngnAuHe8x%2BekMCt5IIn3trlX70LsUGbLlhqARWopoA8LxlgHJcGKbUgfDp05wX%2Fyj0oaHXC4siNSTIv6y7cGYI2F6di0I%2Fd9g7ubg9Ou04Y2jHljIUlEeiGQas6w1te0E%2BpjZGJkrYdtP3fXz8qQhfx172tR%2FDn0dSFVYM35rrP76j%2BUC%2BNFek6t2WqVQMOzsCfjNQBjhUTI5SW%2BrewQub%2FywAlzTVf9oKe5zZWeTRB11GwCyV56178cYVt2Hp%2BNZ2zCKlbSPTHGKyiliYAhon%2FPjBYTaPBjMoPrG%2BmP%2BFlTEEA6rCwSCiWDiulWQNbzi%2FFvPz%2BdY%2B6kd9ZKe%2FIqWJ1orBwer%2BD2L1yzNGCm5Xr4jlF9ST%2BahXYv3dM88XGnmJ7stq7wjHvZ1ka%2Bs6jkbrKFxF063mMDEGkU0Ewjn5MtJQVKmwEl8%2Fu2%2FrPfhc2%2FIa2mZ7yMd8Qbuk2j5PLlwMPrXOBZCzi1UbP%2Bq9iVUg5ZmGDUpMNLPydQGOqUBBRpemXHnMoyt4hTEqyh8vvOiPbYFRHvc31XmVX5KtE9Nf439ZMNsuqmMLy1ptmNHqi7CbpthxPWRHr4VhSVfj%2FBTzJgPFiMPVPkXYOk7ewCQji04uKf1CM6WYYTvqI8jl0grhH9U6FEvBULZ%2BiV2f6IcIBnbbJcvZf4hqZJv2mlBeT%2BLVrvaRfcQnZojXAULlW7KAndc1V4p50fVIMM2GiqCNc11&X-Amz-Signature=0f114d7202ccf479b0b3cd5f0c204455dba80f81ebfc387d4194a960f5713d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QENLU7QB%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPQucsuuKMtClwZv82uOR7TCOSLTBDSEGrj98bQEAmUAiEAnQLsz6RIahPNJkGmODrRQo1X9cR%2BG2lpb3lgYY1e9FMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFHt1RJZjRxbhSsnzSrcA9dDZ8M2Yp1%2Bel3qD5o8ZcAQdJpWtrE%2Fqwz27rIJeo%2BgFv%2F7TrkPHdIj2c92214GLr3Ff53z9O2LRXuDWaParBb9UzPK1WUzKpv6SuXBRRyPDnV4IpM%2BhFASM7pH%2BDeJx2QqrSbWrjrngnAuHe8x%2BekMCt5IIn3trlX70LsUGbLlhqARWopoA8LxlgHJcGKbUgfDp05wX%2Fyj0oaHXC4siNSTIv6y7cGYI2F6di0I%2Fd9g7ubg9Ou04Y2jHljIUlEeiGQas6w1te0E%2BpjZGJkrYdtP3fXz8qQhfx172tR%2FDn0dSFVYM35rrP76j%2BUC%2BNFek6t2WqVQMOzsCfjNQBjhUTI5SW%2BrewQub%2FywAlzTVf9oKe5zZWeTRB11GwCyV56178cYVt2Hp%2BNZ2zCKlbSPTHGKyiliYAhon%2FPjBYTaPBjMoPrG%2BmP%2BFlTEEA6rCwSCiWDiulWQNbzi%2FFvPz%2BdY%2B6kd9ZKe%2FIqWJ1orBwer%2BD2L1yzNGCm5Xr4jlF9ST%2BahXYv3dM88XGnmJ7stq7wjHvZ1ka%2Bs6jkbrKFxF063mMDEGkU0Ewjn5MtJQVKmwEl8%2Fu2%2FrPfhc2%2FIa2mZ7yMd8Qbuk2j5PLlwMPrXOBZCzi1UbP%2Bq9iVUg5ZmGDUpMNLPydQGOqUBBRpemXHnMoyt4hTEqyh8vvOiPbYFRHvc31XmVX5KtE9Nf439ZMNsuqmMLy1ptmNHqi7CbpthxPWRHr4VhSVfj%2FBTzJgPFiMPVPkXYOk7ewCQji04uKf1CM6WYYTvqI8jl0grhH9U6FEvBULZ%2BiV2f6IcIBnbbJcvZf4hqZJv2mlBeT%2BLVrvaRfcQnZojXAULlW7KAndc1V4p50fVIMM2GiqCNc11&X-Amz-Signature=09e7a81f24a75eb8325e80096c6f74fbc514396f1d53ba2df0927de49648cedd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QENLU7QB%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPQucsuuKMtClwZv82uOR7TCOSLTBDSEGrj98bQEAmUAiEAnQLsz6RIahPNJkGmODrRQo1X9cR%2BG2lpb3lgYY1e9FMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFHt1RJZjRxbhSsnzSrcA9dDZ8M2Yp1%2Bel3qD5o8ZcAQdJpWtrE%2Fqwz27rIJeo%2BgFv%2F7TrkPHdIj2c92214GLr3Ff53z9O2LRXuDWaParBb9UzPK1WUzKpv6SuXBRRyPDnV4IpM%2BhFASM7pH%2BDeJx2QqrSbWrjrngnAuHe8x%2BekMCt5IIn3trlX70LsUGbLlhqARWopoA8LxlgHJcGKbUgfDp05wX%2Fyj0oaHXC4siNSTIv6y7cGYI2F6di0I%2Fd9g7ubg9Ou04Y2jHljIUlEeiGQas6w1te0E%2BpjZGJkrYdtP3fXz8qQhfx172tR%2FDn0dSFVYM35rrP76j%2BUC%2BNFek6t2WqVQMOzsCfjNQBjhUTI5SW%2BrewQub%2FywAlzTVf9oKe5zZWeTRB11GwCyV56178cYVt2Hp%2BNZ2zCKlbSPTHGKyiliYAhon%2FPjBYTaPBjMoPrG%2BmP%2BFlTEEA6rCwSCiWDiulWQNbzi%2FFvPz%2BdY%2B6kd9ZKe%2FIqWJ1orBwer%2BD2L1yzNGCm5Xr4jlF9ST%2BahXYv3dM88XGnmJ7stq7wjHvZ1ka%2Bs6jkbrKFxF063mMDEGkU0Ewjn5MtJQVKmwEl8%2Fu2%2FrPfhc2%2FIa2mZ7yMd8Qbuk2j5PLlwMPrXOBZCzi1UbP%2Bq9iVUg5ZmGDUpMNLPydQGOqUBBRpemXHnMoyt4hTEqyh8vvOiPbYFRHvc31XmVX5KtE9Nf439ZMNsuqmMLy1ptmNHqi7CbpthxPWRHr4VhSVfj%2FBTzJgPFiMPVPkXYOk7ewCQji04uKf1CM6WYYTvqI8jl0grhH9U6FEvBULZ%2BiV2f6IcIBnbbJcvZf4hqZJv2mlBeT%2BLVrvaRfcQnZojXAULlW7KAndc1V4p50fVIMM2GiqCNc11&X-Amz-Signature=6611d2f8f92d40ecc5246e37a84dfb295ea0a8a6a27f2f76e967249577c4037c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMREEVEX%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeuJ%2BglUp9aDk8zk2TlqnARwLCXU6v9Bq4vUV%2B2mQ3RQIhAJ2ayFgZYU7JW3caNBSG1r6KLzH%2Bs0uUXVD1834n6CyAKv8DCF4QABoMNjM3NDIzMTgzODA1IgxFX%2FeKxBKohGPi0oYq3AM1vAGMkY9cRzSN8RFagA4b%2FxKaCCOqin9COlS%2FtKHbAqOhqBW10yYqASTxEpY40Lie%2FlAjOXcnXsWXarwR2MaHrXC1qvnf3HiP04ISQCda9Z2f04RclKm0HIn8X5qb3VcNn8IdYqbAB7dM4c9KGv7BoDQVu7FPQPIymdC%2F1Dg2dApIZSsuC7jn2E8oFeo%2FeI320gOQamYWtFzUnGOYt0ymKidj17Bw8IbpzdFwuxLJFXv3OVEiy0KMx4iPr3cISOKbg%2B2qWQBptVYtuxUZ%2FJ1olt%2B6dmnTr1kxGvDy0pMO0Bp4GlvGNOU0Z13csQQYglOy6uIfldF59fOwXIaeVWr%2BXeuaSj3yBhObDk8VNKDMAEXCXyIkiux%2FWjjwihJo4J2yJHZWbCKFNGiPLsXUjUC1kYvGrltFHMfzN1q1kZJglZtlyMludlNDpBTpo8%2BXVs%2BGAZ%2B2m0QFadgTLs4ibG6Arb1nzqkYCct0SRPDkK1YEWhGgvbu16e6CHTA8x3Nk4wALgmSihAmLNX6tTxMEjoCnORW8ywN8ha1e5cRm9njRd7ffhGJ44SvPP2IN0xYri5jEUpzVB7YKz6cdvNJQJd90TfW3c715zIdoqQ7s%2FgLzT7NAPhoFCbU0YqxyDDlz8nUBjqkAZO41U6u6absQKD2iOwerxS7RqgMnOcMDCcgjJvcKXK4c9XYMV7Gkfvdew1C1QnueE7s1X5BEWpAwX4PSQ7irGpwb5fFMRMHf2lpRiEXPm3xpVsNvUHJZly8SohitL1LXt3OByqPugZwWh%2FhrgT9qB3og85jsy0PkX%2FCgs2MHivgS5xglVpn%2BKRl%2BB8Etw%2FzgoBCbw7i4LwXj4%2BLlnZokeBYUFh%2B&X-Amz-Signature=fbe57ad10a4fa8f06e1187f12097b7fc250ac69528b3c570cac671848d9412f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVORIG7D%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtDpXJl61WmQ3IDTGyhXTwzuZvloJo6SYOgaJ6GIk2iAIgZWxM18LR7RrPujJwck7DCwcF5SvzudUHF%2BYzv66q23kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOWHGdssxxx%2BLOIRoCrcA8vCmLwGP4y%2F5W4PzDpofRS%2B1TXGgYVfbMf4bDR7XeJS3EQ2GFrbutV%2F1XLNBp22e6eWISnZ%2BaDlzAUEpwJC37%2BcWaN3Ya0W5PK6UqM54H%2FMfK3qBXfIWxcQpaqJxoJmOCz%2FmykDZbzqp%2BV1N4CsYFq9sCkMBVE8zZlw59ktNjZ%2F3CCeDtRhNCqyeesWGSJ8o3jBhuBwGx6x180ya2t8h0E9MSfyRwVHO8Yab7uB7HdZ23mLOFBRXougFZL%2FvR978hM3gDLLUDyHA8y73Q4pzfS4r8x2qkkatjC1Pxh3EcWevR0hvvAKW6PSt9SEezg1Q4RU6hJL%2BZD0JdkUwMEAeEibO%2F5GxtB5r7MdK%2BJzDwGfbPmfzzjDokikKtjS8ZZ2Z6ssZ%2BJgq%2FhjYcMDLi%2BPXOGpqmL%2BYYvfQF8y6f%2BURmSgvgawBEWsTUtNQzfu%2FbciPHKu3dtjAingM6Mm41h6JWxlvRd7AJljEJdl0oTbu%2F0O9KzXdp8wotl9QdCQX%2FQyXVh3n7oeaG0PacgARKtHPY1iXECsGCMnev7ruyxQ2SiitFJ%2FNnezWwgz5%2F6DITDxvRHMyalNcVm3%2FeBgJl3Iarptd7rUubUnomz%2BVs%2F%2FBF4mAlUZwSpN09wf8gv4MKPQydQGOqUBcG7%2FMgf%2BjOm0xqrvIW2zVMsWy2%2FeuRh%2Bjo4JVo8yl8%2BljIh369sYwrIdxgOWPUyhGOsH7LpYU2QDTdC14gM%2BW2uJK5ZAS1dvMO%2F9NamaOlqi1jaFNZNFFB07acQbrJyq5RoDKb%2BwRewSmNsHk6y0CDLadcDf1gg6cw8J1r4hBSfyC7hsHyawzTROthou4W5bH%2FBQ0gV3wkPbRIPRCpmnMv4Zh837&X-Amz-Signature=eaccbcd56147eeb238441ec47ee7f9ebc595983a1c3fd2cf5ef6b4f834e927b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QENLU7QB%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPQucsuuKMtClwZv82uOR7TCOSLTBDSEGrj98bQEAmUAiEAnQLsz6RIahPNJkGmODrRQo1X9cR%2BG2lpb3lgYY1e9FMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFHt1RJZjRxbhSsnzSrcA9dDZ8M2Yp1%2Bel3qD5o8ZcAQdJpWtrE%2Fqwz27rIJeo%2BgFv%2F7TrkPHdIj2c92214GLr3Ff53z9O2LRXuDWaParBb9UzPK1WUzKpv6SuXBRRyPDnV4IpM%2BhFASM7pH%2BDeJx2QqrSbWrjrngnAuHe8x%2BekMCt5IIn3trlX70LsUGbLlhqARWopoA8LxlgHJcGKbUgfDp05wX%2Fyj0oaHXC4siNSTIv6y7cGYI2F6di0I%2Fd9g7ubg9Ou04Y2jHljIUlEeiGQas6w1te0E%2BpjZGJkrYdtP3fXz8qQhfx172tR%2FDn0dSFVYM35rrP76j%2BUC%2BNFek6t2WqVQMOzsCfjNQBjhUTI5SW%2BrewQub%2FywAlzTVf9oKe5zZWeTRB11GwCyV56178cYVt2Hp%2BNZ2zCKlbSPTHGKyiliYAhon%2FPjBYTaPBjMoPrG%2BmP%2BFlTEEA6rCwSCiWDiulWQNbzi%2FFvPz%2BdY%2B6kd9ZKe%2FIqWJ1orBwer%2BD2L1yzNGCm5Xr4jlF9ST%2BahXYv3dM88XGnmJ7stq7wjHvZ1ka%2Bs6jkbrKFxF063mMDEGkU0Ewjn5MtJQVKmwEl8%2Fu2%2FrPfhc2%2FIa2mZ7yMd8Qbuk2j5PLlwMPrXOBZCzi1UbP%2Bq9iVUg5ZmGDUpMNLPydQGOqUBBRpemXHnMoyt4hTEqyh8vvOiPbYFRHvc31XmVX5KtE9Nf439ZMNsuqmMLy1ptmNHqi7CbpthxPWRHr4VhSVfj%2FBTzJgPFiMPVPkXYOk7ewCQji04uKf1CM6WYYTvqI8jl0grhH9U6FEvBULZ%2BiV2f6IcIBnbbJcvZf4hqZJv2mlBeT%2BLVrvaRfcQnZojXAULlW7KAndc1V4p50fVIMM2GiqCNc11&X-Amz-Signature=31c3490b301eb257179120e4708d791e84c3d9480ca0dbd7049590506f9948dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
