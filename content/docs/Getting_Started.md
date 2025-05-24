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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37P5RVW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIBa5m5edmmaHXlNW1CQaICgNx1hbUxfeIrOtOUHEJPO2AiBsqXx%2FL%2BsjOhBMM2ogDXuUfGyvDGvVBOmO4ee26UWP7iqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyRqXYNoq72Ym5%2Bl8KtwDExm0MgQSjna5YuYhAbTMCTMu5nSzEtzlRxVRuhpZpIzUQy9iZKUSQjj8qTKEoxEJhGZfqJVXwTaDLwUh3hqTvFIlovoYY0cwcY%2FHCYY%2FrfdhWKUK8Otu3a7zRhBEJvr4e2T%2B97EYGyCtBo%2FV2m8qs7sf6r3YevM38DHCdjtaCPKPp%2F%2BhB4JQ%2FNa2SQeLDcRzKVk99BGV22wuijXW%2BXxRnaBR4CL7VfVpjepr9SFVvXcwtOJDzquZFWHftEkWstAfJvrumDcu7R7AsmhydYRtzSjVNkPHydZts1GDT7k%2FIFyekF3EN7fq%2F1XzXCZpiaPgSe6gdKND3wpdTah0X%2B4tMGSf5lz9gpuKq7Yr6hUkL67B9YCCNADMhetyaMdsMZzlgD6nH7yAfbcYByoN2t3IXoaoxJo1GTsWQxp3kdn%2Bt42gcgB%2FW9UEg9L%2BAfsCJSCNYXrIaHD283modQHtYpkBisgyOZZJzTl%2BtmtCQTMyzS%2FKAq80tIRB7wFfssRoEExTDz9GGW159KcOOUeTg%2BOTyKBc%2FcuHjB3BWjYcMy07we10oft5l4xRMoLfCs7AuYNMwS1lE3eFiWNTvM0oqL3ojQdRHUxbEutFg8kNsrJFSZt4hGDX7UJAExramJIw253FwQY6pgH2lIPdkUArJ87Yis9IImWFMlr6WLoHoRjR%2F9CuF%2FWslD3D5OukjZvK5DM7rwzpRxfu6zWh0P4Dlfm1Ld651JcQ90FQ4S4trSpICUPheJbUOmNTMl31VqDO3leH1pCSn1BLT7thJ3gaUV6eX689B2oUqj5%2FxxgeF%2F6Qsoko7Nv1xoFoAzYGYMA0NOfsYjrWlvh8xKK61UP%2BPaBB%2F22p6OhoYv9kuV5B&X-Amz-Signature=23c56057fb6873dc5dab55491a46ccc2058d767ecd2241b1eac99bf613b3a021&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37P5RVW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIBa5m5edmmaHXlNW1CQaICgNx1hbUxfeIrOtOUHEJPO2AiBsqXx%2FL%2BsjOhBMM2ogDXuUfGyvDGvVBOmO4ee26UWP7iqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyRqXYNoq72Ym5%2Bl8KtwDExm0MgQSjna5YuYhAbTMCTMu5nSzEtzlRxVRuhpZpIzUQy9iZKUSQjj8qTKEoxEJhGZfqJVXwTaDLwUh3hqTvFIlovoYY0cwcY%2FHCYY%2FrfdhWKUK8Otu3a7zRhBEJvr4e2T%2B97EYGyCtBo%2FV2m8qs7sf6r3YevM38DHCdjtaCPKPp%2F%2BhB4JQ%2FNa2SQeLDcRzKVk99BGV22wuijXW%2BXxRnaBR4CL7VfVpjepr9SFVvXcwtOJDzquZFWHftEkWstAfJvrumDcu7R7AsmhydYRtzSjVNkPHydZts1GDT7k%2FIFyekF3EN7fq%2F1XzXCZpiaPgSe6gdKND3wpdTah0X%2B4tMGSf5lz9gpuKq7Yr6hUkL67B9YCCNADMhetyaMdsMZzlgD6nH7yAfbcYByoN2t3IXoaoxJo1GTsWQxp3kdn%2Bt42gcgB%2FW9UEg9L%2BAfsCJSCNYXrIaHD283modQHtYpkBisgyOZZJzTl%2BtmtCQTMyzS%2FKAq80tIRB7wFfssRoEExTDz9GGW159KcOOUeTg%2BOTyKBc%2FcuHjB3BWjYcMy07we10oft5l4xRMoLfCs7AuYNMwS1lE3eFiWNTvM0oqL3ojQdRHUxbEutFg8kNsrJFSZt4hGDX7UJAExramJIw253FwQY6pgH2lIPdkUArJ87Yis9IImWFMlr6WLoHoRjR%2F9CuF%2FWslD3D5OukjZvK5DM7rwzpRxfu6zWh0P4Dlfm1Ld651JcQ90FQ4S4trSpICUPheJbUOmNTMl31VqDO3leH1pCSn1BLT7thJ3gaUV6eX689B2oUqj5%2FxxgeF%2F6Qsoko7Nv1xoFoAzYGYMA0NOfsYjrWlvh8xKK61UP%2BPaBB%2F22p6OhoYv9kuV5B&X-Amz-Signature=d3c2d06d684d3aae27ca7fbfc4d8bccf689af12f36f0a01da5b1ed0f3e4c1dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37P5RVW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIBa5m5edmmaHXlNW1CQaICgNx1hbUxfeIrOtOUHEJPO2AiBsqXx%2FL%2BsjOhBMM2ogDXuUfGyvDGvVBOmO4ee26UWP7iqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyRqXYNoq72Ym5%2Bl8KtwDExm0MgQSjna5YuYhAbTMCTMu5nSzEtzlRxVRuhpZpIzUQy9iZKUSQjj8qTKEoxEJhGZfqJVXwTaDLwUh3hqTvFIlovoYY0cwcY%2FHCYY%2FrfdhWKUK8Otu3a7zRhBEJvr4e2T%2B97EYGyCtBo%2FV2m8qs7sf6r3YevM38DHCdjtaCPKPp%2F%2BhB4JQ%2FNa2SQeLDcRzKVk99BGV22wuijXW%2BXxRnaBR4CL7VfVpjepr9SFVvXcwtOJDzquZFWHftEkWstAfJvrumDcu7R7AsmhydYRtzSjVNkPHydZts1GDT7k%2FIFyekF3EN7fq%2F1XzXCZpiaPgSe6gdKND3wpdTah0X%2B4tMGSf5lz9gpuKq7Yr6hUkL67B9YCCNADMhetyaMdsMZzlgD6nH7yAfbcYByoN2t3IXoaoxJo1GTsWQxp3kdn%2Bt42gcgB%2FW9UEg9L%2BAfsCJSCNYXrIaHD283modQHtYpkBisgyOZZJzTl%2BtmtCQTMyzS%2FKAq80tIRB7wFfssRoEExTDz9GGW159KcOOUeTg%2BOTyKBc%2FcuHjB3BWjYcMy07we10oft5l4xRMoLfCs7AuYNMwS1lE3eFiWNTvM0oqL3ojQdRHUxbEutFg8kNsrJFSZt4hGDX7UJAExramJIw253FwQY6pgH2lIPdkUArJ87Yis9IImWFMlr6WLoHoRjR%2F9CuF%2FWslD3D5OukjZvK5DM7rwzpRxfu6zWh0P4Dlfm1Ld651JcQ90FQ4S4trSpICUPheJbUOmNTMl31VqDO3leH1pCSn1BLT7thJ3gaUV6eX689B2oUqj5%2FxxgeF%2F6Qsoko7Nv1xoFoAzYGYMA0NOfsYjrWlvh8xKK61UP%2BPaBB%2F22p6OhoYv9kuV5B&X-Amz-Signature=b8ca0c1049f61019e58ca6cf6682f70a1968bcb7b7db5c7a46872f47f7f1b596&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7DVVV7X%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIAOaXmhFTcmjawCMTSoMirXZMyDcbQNnUf2DNIlrK4QUAiBjI46Bd%2FgBEReN1r5nLAMV6717smjev0cU33jyCBSrDSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqp3crTh4V60R03D%2FKtwDB6EfExfzTp%2Blp5CDATLKRP1j475MCmStdxOTuN7%2BFvRxojKu526bYin4iCB%2Bysu1N%2FYTeZcpkMJQ2gExJQZO9wu2YJussf7rFrU4dFaUPREua5okpKRDAH4qz8iR0cb7nnhhFpVcsjLAYqWUhbs97HOqb3UzP7EkHjdwgc2vNyr5mGAXfYxWpQlkves%2F7Cjc9TynBflErvsvZnO9W%2Bv20KZZgzoOZQVJUXsRt6WKX64XwQfXJ%2FmLs4Rr2L6LSPlNjQpNLWwCVys%2BG67FbqTxXl%2Fc7vOs2nfN%2BoFRPVFTDh1Qvcr1BvShaD2SXw%2Fu9xUJUSvdel0cDIm45t7FBWjkQ6%2FvJ6FNUWKvONo8XQCrvSOHB5W0QwaE4TNyMC3UznQ2%2FrHuHTdsKmmtJ9dt5te7gO0HMa1hOr4tWXVNs1nb9PvGxe%2FpP8rzegHZUxRGNq03YAlQgrodbEeP50ZzOrajGrRK4%2FeKBs7fjevYKiAaeTJ%2B%2Fy84Yh%2BEZn7dFKmvWsVcBThu6Svt4jQQ%2FHNOJl%2FzGKGH3ur9nqgLTophkNgSqtd1A302yFBv%2FZRfqZPZtt0wV8EiB4bUD6BYYmlk%2Byte58NrnzR1gyqFqQ2qhOu3ivn6CxPw2TvWn78huI0wsJ3FwQY6pgGrIGNN23946o%2BqIrzNEyAH8pBhckZAt5EYzh02Q%2FPPviNkSCqcLgzjXoA8N%2ByOnMHPFCEYgGZms3rynC6tu2FuGJyXccduRRksj9gkADngLo3MhvPgvsxpjA8gd6Iq1H62W8DY%2FTMdlqOnPdPR81J0QG%2Bz0dHE3b6ppIlx6L02gWGztkkG9qRAOVGItzgUZosRvunf%2B2N3Djug9YExNVrfEbIH%2FkSc&X-Amz-Signature=aabf1b244cca44258abc08cacc4f60ef258a08f4cbd94cd3b25cd2406521236d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRZZ5ZZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQClwF1todDzoA2Jd78kW5uRKPyWJB9MkGeUmKrLbZIetgIhAMjTgRLsmkqQgELWpCZrm96aX96trcpjXU9PAzXQW%2FHMKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHiK9n5BT6X7roTqAq3APL80w%2BEUYmJv7t6%2Bt83u0Q7ZYbEElJuc2dTx4EOHUxsEEGfO4VmAx0wRd3rMD36JD%2BbBLVbrkEHcp0Ks%2Bl1f21D%2BKorhk3g3enCWwbjPM9aRKKPql1iGkWNxRYk6Ly6NW66u8sfs7VMzPbLRSWDztULYtwjA01czdMHAL1K6UWVpRckI%2FPD7KkU8AbclxU1wblWyrmh2A%2Bt%2F6G3JAsguAADd1yhQc67e1KAqQoObVGKJPVW%2FnK6ip%2BgvzXKU4Pu20Pe67uge1eBKdcNFBmhOfsfWfsvm%2BuCCuotccp6SPNMIyB%2BlLPkfhqo97lCvCNQeYuSj6588Vl7jmq%2F7EaoBlZAacb2FZvAfkFUZjRH4altDZRKygpm0EtxwpamFh%2BW1U5KNbLdqrwmyOWMe6tjT%2BNeNumORlDKzuTNzlbzPkWNpRA%2BKz6BHti8%2Fouuq%2BJxFoYfjlpDIRTNDQF7e129QW48PbY%2FZqwgDeBJLTfY0EI25CLCDnw190id8D4u51nmfxHt4LZ8LbfRg4wDDVK1HpOq2hYGlaAYIOTWR0fj8plSf557yUf1UL4C56TLknQ2A75QADt3qySM0nMgI%2BLlWb9RNKrF2K9xLtfqYQlRW8erg5AZBMSMdp%2FGllvCTD5ncXBBjqkAf6IW6GMQts2t%2F13DDu9t1o08O9O%2BUImrrMBX8ZwZxsS%2BLL17HFgG%2BYSRMRAdW%2BtihotVKAvqFf17kEHKNs2oUVHeqGDGFcL2WW%2BJPbjn54Wvoh%2BqgOWY4%2BW0xwTK0Dy%2FZvG5ryOApgFeVfeDKKfKiBYY6cWhKpqQjXDsStC%2BFvyrzgp9tpyyHrgdVt9nTbczLlHiywjxmE%2BFGtpc6PFGcInPSf2&X-Amz-Signature=f2a86d1651f2c8d85e8827ab790483d3f5e6d655bebd4abdf83b0abf693e1cce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37P5RVW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIBa5m5edmmaHXlNW1CQaICgNx1hbUxfeIrOtOUHEJPO2AiBsqXx%2FL%2BsjOhBMM2ogDXuUfGyvDGvVBOmO4ee26UWP7iqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyRqXYNoq72Ym5%2Bl8KtwDExm0MgQSjna5YuYhAbTMCTMu5nSzEtzlRxVRuhpZpIzUQy9iZKUSQjj8qTKEoxEJhGZfqJVXwTaDLwUh3hqTvFIlovoYY0cwcY%2FHCYY%2FrfdhWKUK8Otu3a7zRhBEJvr4e2T%2B97EYGyCtBo%2FV2m8qs7sf6r3YevM38DHCdjtaCPKPp%2F%2BhB4JQ%2FNa2SQeLDcRzKVk99BGV22wuijXW%2BXxRnaBR4CL7VfVpjepr9SFVvXcwtOJDzquZFWHftEkWstAfJvrumDcu7R7AsmhydYRtzSjVNkPHydZts1GDT7k%2FIFyekF3EN7fq%2F1XzXCZpiaPgSe6gdKND3wpdTah0X%2B4tMGSf5lz9gpuKq7Yr6hUkL67B9YCCNADMhetyaMdsMZzlgD6nH7yAfbcYByoN2t3IXoaoxJo1GTsWQxp3kdn%2Bt42gcgB%2FW9UEg9L%2BAfsCJSCNYXrIaHD283modQHtYpkBisgyOZZJzTl%2BtmtCQTMyzS%2FKAq80tIRB7wFfssRoEExTDz9GGW159KcOOUeTg%2BOTyKBc%2FcuHjB3BWjYcMy07we10oft5l4xRMoLfCs7AuYNMwS1lE3eFiWNTvM0oqL3ojQdRHUxbEutFg8kNsrJFSZt4hGDX7UJAExramJIw253FwQY6pgH2lIPdkUArJ87Yis9IImWFMlr6WLoHoRjR%2F9CuF%2FWslD3D5OukjZvK5DM7rwzpRxfu6zWh0P4Dlfm1Ld651JcQ90FQ4S4trSpICUPheJbUOmNTMl31VqDO3leH1pCSn1BLT7thJ3gaUV6eX689B2oUqj5%2FxxgeF%2F6Qsoko7Nv1xoFoAzYGYMA0NOfsYjrWlvh8xKK61UP%2BPaBB%2F22p6OhoYv9kuV5B&X-Amz-Signature=d2d78987688d5d793e7660d61564d291abb99cc46caed7a12d320cee4ae0e1a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
