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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5PVOTR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHTXZTkAvUVWvcHD1WeZwfJq6fVbZF0H6WgflpCbR8qdAiEAvDhr942wEHTC0h5XrP%2FUE0eB%2BWWa%2FFu2Gtv3Mog4FIgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMB8%2FoU4QPyKupg0XyrcA7QxX1eDoaHJNv84%2F0Up3hQ%2FZzYwmbJOZig2DJVHp2YG5cMqTHjT0hLrAAxyuseLEAewsZfQ9cXu8J3gMhCupJSLXYvSUi%2F4m%2B4J7wKj37fBHkdL%2BXZweBwfDAhjElcYHKQyPw%2BJIrg64occymjDaSf4tRc%2B9sCrDX0qZTxnNhgUL9UBU4R%2Fz0ulGTRbPm0xT7K%2Ba2RBKFlenujCljAyiSi%2FcUEP1UGInXZ9K8E%2BYr05I1W5zxl5%2FlKoAXSoWQF%2FHoLywV5oaZYE0hh01Ra%2BRU13S8WqIg7hZlEvQ1PxeKkEExUxoaQdTwvyxD1bNTFQdS7%2FgkXy9buSRZ9Jq%2BLM85ier5EATWT1mr%2BOIRvuMHkcZJhqtUhz6N%2FRHzvr1uguKYmQ1%2Bik%2B2q%2FObfOsnPow7kpudiSfZWaj1sM5SvgAH6I7TOaiXmJGvh7stFk67hB1zUYNF9XtBxGre6gfUr6H2TVQ5NtzX7bp2jHsobkO%2Bs6hzog1mDQdldpA4D%2BHm999JDKTZ1T0O7aXhB5fas7rKRcUDwxomK8h%2Fjg1Iri5L3VqNstxpjI7SCaCkFxml9WB%2FIoVUyKiy7Ke0zKMCwKdqgXj4HEgeGIclkrkiFePhkB8%2FACJrYSDDXHX%2BleMNKzx8AGOqUB3pfPEA3aBTtJOLdITEWqQi68Cr%2F%2FEdxQlbUfQpT4t%2BnusyFpZJYaRmlNu2XeOug5aWB968vvhKjpi5sSU7H9aGxDFn1%2FGDfUFNjWm5ZnvuWgCn3dIZ3LFKXJ%2BYoJx9d1b6KNoDS%2BW6giwjpNQf7P1z%2B%2FZd8mftBzJFPu2vJZo676ygX%2BKbiMSq0M24whfnYmP95RjzkIhQE3sbAbgIZZxVOTUurm&X-Amz-Signature=b0948e770ae35fbaf5be66e1571aff9c486e408dc8a73b7957f690ba60650328&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5PVOTR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHTXZTkAvUVWvcHD1WeZwfJq6fVbZF0H6WgflpCbR8qdAiEAvDhr942wEHTC0h5XrP%2FUE0eB%2BWWa%2FFu2Gtv3Mog4FIgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMB8%2FoU4QPyKupg0XyrcA7QxX1eDoaHJNv84%2F0Up3hQ%2FZzYwmbJOZig2DJVHp2YG5cMqTHjT0hLrAAxyuseLEAewsZfQ9cXu8J3gMhCupJSLXYvSUi%2F4m%2B4J7wKj37fBHkdL%2BXZweBwfDAhjElcYHKQyPw%2BJIrg64occymjDaSf4tRc%2B9sCrDX0qZTxnNhgUL9UBU4R%2Fz0ulGTRbPm0xT7K%2Ba2RBKFlenujCljAyiSi%2FcUEP1UGInXZ9K8E%2BYr05I1W5zxl5%2FlKoAXSoWQF%2FHoLywV5oaZYE0hh01Ra%2BRU13S8WqIg7hZlEvQ1PxeKkEExUxoaQdTwvyxD1bNTFQdS7%2FgkXy9buSRZ9Jq%2BLM85ier5EATWT1mr%2BOIRvuMHkcZJhqtUhz6N%2FRHzvr1uguKYmQ1%2Bik%2B2q%2FObfOsnPow7kpudiSfZWaj1sM5SvgAH6I7TOaiXmJGvh7stFk67hB1zUYNF9XtBxGre6gfUr6H2TVQ5NtzX7bp2jHsobkO%2Bs6hzog1mDQdldpA4D%2BHm999JDKTZ1T0O7aXhB5fas7rKRcUDwxomK8h%2Fjg1Iri5L3VqNstxpjI7SCaCkFxml9WB%2FIoVUyKiy7Ke0zKMCwKdqgXj4HEgeGIclkrkiFePhkB8%2FACJrYSDDXHX%2BleMNKzx8AGOqUB3pfPEA3aBTtJOLdITEWqQi68Cr%2F%2FEdxQlbUfQpT4t%2BnusyFpZJYaRmlNu2XeOug5aWB968vvhKjpi5sSU7H9aGxDFn1%2FGDfUFNjWm5ZnvuWgCn3dIZ3LFKXJ%2BYoJx9d1b6KNoDS%2BW6giwjpNQf7P1z%2B%2FZd8mftBzJFPu2vJZo676ygX%2BKbiMSq0M24whfnYmP95RjzkIhQE3sbAbgIZZxVOTUurm&X-Amz-Signature=4594d46f1714a88df504fad2bdb0727a9b7d3723561e162cb29c8213b49b3190&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5PVOTR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHTXZTkAvUVWvcHD1WeZwfJq6fVbZF0H6WgflpCbR8qdAiEAvDhr942wEHTC0h5XrP%2FUE0eB%2BWWa%2FFu2Gtv3Mog4FIgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMB8%2FoU4QPyKupg0XyrcA7QxX1eDoaHJNv84%2F0Up3hQ%2FZzYwmbJOZig2DJVHp2YG5cMqTHjT0hLrAAxyuseLEAewsZfQ9cXu8J3gMhCupJSLXYvSUi%2F4m%2B4J7wKj37fBHkdL%2BXZweBwfDAhjElcYHKQyPw%2BJIrg64occymjDaSf4tRc%2B9sCrDX0qZTxnNhgUL9UBU4R%2Fz0ulGTRbPm0xT7K%2Ba2RBKFlenujCljAyiSi%2FcUEP1UGInXZ9K8E%2BYr05I1W5zxl5%2FlKoAXSoWQF%2FHoLywV5oaZYE0hh01Ra%2BRU13S8WqIg7hZlEvQ1PxeKkEExUxoaQdTwvyxD1bNTFQdS7%2FgkXy9buSRZ9Jq%2BLM85ier5EATWT1mr%2BOIRvuMHkcZJhqtUhz6N%2FRHzvr1uguKYmQ1%2Bik%2B2q%2FObfOsnPow7kpudiSfZWaj1sM5SvgAH6I7TOaiXmJGvh7stFk67hB1zUYNF9XtBxGre6gfUr6H2TVQ5NtzX7bp2jHsobkO%2Bs6hzog1mDQdldpA4D%2BHm999JDKTZ1T0O7aXhB5fas7rKRcUDwxomK8h%2Fjg1Iri5L3VqNstxpjI7SCaCkFxml9WB%2FIoVUyKiy7Ke0zKMCwKdqgXj4HEgeGIclkrkiFePhkB8%2FACJrYSDDXHX%2BleMNKzx8AGOqUB3pfPEA3aBTtJOLdITEWqQi68Cr%2F%2FEdxQlbUfQpT4t%2BnusyFpZJYaRmlNu2XeOug5aWB968vvhKjpi5sSU7H9aGxDFn1%2FGDfUFNjWm5ZnvuWgCn3dIZ3LFKXJ%2BYoJx9d1b6KNoDS%2BW6giwjpNQf7P1z%2B%2FZd8mftBzJFPu2vJZo676ygX%2BKbiMSq0M24whfnYmP95RjzkIhQE3sbAbgIZZxVOTUurm&X-Amz-Signature=58bc151e3ab1e04cf7aa3fec30b802f0b50e373fa55f34d9d44b3edf1ea53ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3A64GR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDw9RjFoC7YS7EW%2BurNuupSm95DIkrxpoYfJGPEdSMV6AiEA%2BD3XvB%2Fe20QOOvB5R13WBx2c5YcyCRtpzzMLsky4UwoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2F1yObqvdA9EtqFcCrcA6%2FTwf75jPw1e8hsIfOobx08kqtTcw9BJWWPMWQySIdvYiXGpi7gFmAAiBxdckqK1xbugDKCiUE4Y0uCUAiLpM9cIgxsUpyYVlnzy8jio876%2F227QeHCjReAzMSd7khKR8VAZDgpBQPKPEr8qYIQ8olH8gCp3NemDngEhviNa7anM94owUoGnntDF6pmNGnBb1LdBmZMJsbnqqIaBy3kFseMd6GOyD2bJfTI40AWrCG8mnscY%2B12ECPI0TKS6Kvrr4XGdwHpBaEMnBHgrIo3YovxeBeQ%2FUJO8Nk5RfoeF1CncFFpfFLZdN60tFsAL7iuesHOTVD22D9XuDuJMnbr%2Fso9dZ3g5kns3VdbgaDCyFWzY%2FE5sg5B6JtHpAChyjWi4%2B9mOcWMrl0xoSh9zbpbSIsJ4SlPPW6E4ScsAp%2FypHwrG%2FhT8WwZoDHEPdrRwY1EgoMh2lfXb49dyV5sfOTmzZwIAeXAattexxNUVcTQi0gC41q42o0we94acSxhPv3Ec3agWmYtm7oRhabKdVZLZnzNio2v7E0YGTdGEYACkzWvL0gP2cs1P0Up5ih7rilaP1uJ4Udil1moV%2FI8NBBxO%2F5LTohiGaiAHU%2F5eWO%2FmYFcKc8BVVpwvsP3xkPmMMSyx8AGOqUBrwIwFns%2FC82Dthc%2BeAwlT9H38a%2BMTK7EXoZO2tfpI682SkVgXAhP0si3GuN8c3vLxNk%2FIRioIfUGxKn0xWWHczeP4inPs0wEuDjKbWLi%2FYJdt7Ln3U4il%2FfpPgoaabDo168ClPak9AyN1VNK1QYGh5YQb7KkugXr%2BYibpWtCVx4tp9CxoNvDW8KQ3phI%2B6veACmeELEXb9g4wXK7WAhl8xmokbcm&X-Amz-Signature=b54f40ed428e23cfeb80f3f6bba84b80c58cf8fa0b6a2f42125583c2f5952a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HN5UCXS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAwe%2B0%2BFIwl40zke454aM1KbPHwE%2BGsdkupl%2Bzvynh57AiASO1uNeXJps0HE9lmkblAK9HlXUD4bTVZ8%2B6ks8nN2XiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvmpDZTvVYv8nijL1KtwDKWnF26tqEZ3mQKeufStSgiktgX0uKCk8xxpbk7kRx0yCzrqvOKn6zw4JOUymBUwb36HewVe3HCqlZXjwhtwsLP7JaT%2BQdZuUe%2FcAAuCxR3R0lo6v63mlZyFLfvVgoHiY2lE8MWpxk2dvEModNnrZw3HXUZFgjXn14n0TOviw73ntKy7W8qhSwR5KIejBI8px1dMQPg4jGPYjxBkuMRYWNM%2Fck5eprDr2t%2BO3ctaETO%2FjgqxBrtubkIBj1NSj7C8BqhKZheDys97c0nyJvfp8abbGl%2BeSM5WCdI9b6wNvM84UyhCuWUDItQuhJy7KnwnTDdxbIRb9gtq2LN2dMxfK9potorephdWBd%2FTFOaUI1TPYh%2BjDgOeK2sEVnC6RDa00028erhemQEiVZF79w3fLYAFMgJmXvcUjvGUydRDeqFP1z6HRZrQeMPkRT80R%2FzrGS9zV5BdKq%2FUM10DUeDSvJeXxb4h7skmOgWnMVojapIwxIzQFkT98wJcpBFqf%2BVHMzc9lVVHccoIeUPczHjo795v3HBDHv7CsUQjiIj%2BR6u9pLuZK7oZcJk5oAZMlfxUXF%2F4ZK0heFV%2F5io%2F7yWBZtmHLn4jMoPLXxzBnCC4pS5tcBJHwDtNi3MdrdFYwpbPHwAY6pgHS0xkzKXQ3DVRcCc3TpnDOd32rup10v%2B%2B004L%2Brq1gLIH5%2FxfmIWKc3YR3zI8L%2BvYNzjH0ZFGAfNt8ep47pRynLqCTSjwd6%2BWY%2BRc%2BxQPBNDQmp6oyJUmK%2FqUGX2k6YHubxhiDOPycAwBuGE7HV9091e70tO%2BkS3iOkSNHx14MjMXj2pv1k2c%2F4GK819%2BD4m02X%2F6J76g1%2FPDY1saBCGGbxMFdtZhB&X-Amz-Signature=43d377ad13956061c3df7293bbb83a1cbe61e4f82ad597138d4293f54f989cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5PVOTR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHTXZTkAvUVWvcHD1WeZwfJq6fVbZF0H6WgflpCbR8qdAiEAvDhr942wEHTC0h5XrP%2FUE0eB%2BWWa%2FFu2Gtv3Mog4FIgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMB8%2FoU4QPyKupg0XyrcA7QxX1eDoaHJNv84%2F0Up3hQ%2FZzYwmbJOZig2DJVHp2YG5cMqTHjT0hLrAAxyuseLEAewsZfQ9cXu8J3gMhCupJSLXYvSUi%2F4m%2B4J7wKj37fBHkdL%2BXZweBwfDAhjElcYHKQyPw%2BJIrg64occymjDaSf4tRc%2B9sCrDX0qZTxnNhgUL9UBU4R%2Fz0ulGTRbPm0xT7K%2Ba2RBKFlenujCljAyiSi%2FcUEP1UGInXZ9K8E%2BYr05I1W5zxl5%2FlKoAXSoWQF%2FHoLywV5oaZYE0hh01Ra%2BRU13S8WqIg7hZlEvQ1PxeKkEExUxoaQdTwvyxD1bNTFQdS7%2FgkXy9buSRZ9Jq%2BLM85ier5EATWT1mr%2BOIRvuMHkcZJhqtUhz6N%2FRHzvr1uguKYmQ1%2Bik%2B2q%2FObfOsnPow7kpudiSfZWaj1sM5SvgAH6I7TOaiXmJGvh7stFk67hB1zUYNF9XtBxGre6gfUr6H2TVQ5NtzX7bp2jHsobkO%2Bs6hzog1mDQdldpA4D%2BHm999JDKTZ1T0O7aXhB5fas7rKRcUDwxomK8h%2Fjg1Iri5L3VqNstxpjI7SCaCkFxml9WB%2FIoVUyKiy7Ke0zKMCwKdqgXj4HEgeGIclkrkiFePhkB8%2FACJrYSDDXHX%2BleMNKzx8AGOqUB3pfPEA3aBTtJOLdITEWqQi68Cr%2F%2FEdxQlbUfQpT4t%2BnusyFpZJYaRmlNu2XeOug5aWB968vvhKjpi5sSU7H9aGxDFn1%2FGDfUFNjWm5ZnvuWgCn3dIZ3LFKXJ%2BYoJx9d1b6KNoDS%2BW6giwjpNQf7P1z%2B%2FZd8mftBzJFPu2vJZo676ygX%2BKbiMSq0M24whfnYmP95RjzkIhQE3sbAbgIZZxVOTUurm&X-Amz-Signature=b651119a49d88da9a77a7b86861d3f212622e837cad1bc1aed8b32baa05b0cec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
