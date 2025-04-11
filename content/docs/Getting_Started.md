---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZYMQ3F%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBR5oanmkuxaI1X8Gi3fxLwHp4IlV2CzjHFJi80SGsinAiEAhkm1JTtgOVbrvYkbPS3NrpfrPbFqgwtmAsajwFHNYM4qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHIeT93N1vt2qV9mCrcA9hwmhVWsNw07eDa66hJ8am2FlP9gqHSSW33lbvc%2BXLsnJxDl5TMe9BbOig%2B%2BxiHqomreKNAEyuOQ4hdRCUuGeifmVZ%2B%2BCj8rLo0QWS3Tsbcf5y8nOvIY55FTlU1GOIXjkdEZ22Uw9pptASJRJKv%2FNNrj5yygj7c4LIcHFXBDfSPk%2BZ43wSHEIKGhLIIHm36NGwTryd0hwuz1N0CQ4nfKpy6QwE%2B4tWrVyZ2eTPu26D0CccTFiqYrKX%2FTqok7776cQEkcrpNWAzFkXClOCm0g6jD6H%2BfRfkQQqIzG0%2F5cLQ%2BVnXC%2Fu1aIP0kn0FrhDoE4nWcyTsrPf7lPcHldXKMH3fxRvA17%2FQJLpfqnDp54jaYZXFxZsU0KrQVhqNgbGNqr%2F8%2F38Ivew6n%2Ft4kzB90eXcYLSYyl%2B2upvPh55LYBT68cXok5Bj5CqVOSHr%2BK15YtcJSh1mtb95TK9bCtpb4RLv2H8931UPu3MjdBkjpr8lM1zm%2B6aV9XUDfK5ekkVfv6u%2Bg%2BQm8Ujq9j%2BkVLW5dVlTF%2B8hR26gCYpKxt0G03zsc0M0gJCvaCbqFiP9R5zyFL2e7YhvgA1GzckkuR%2FEnndjOeMjdoHUSPjWm0t6rH2ypuwp4A3vbHvlvzSWuMO2S4r8GOqUB4DMFEXFvfR6bZptJFmL5j4rKpddTmHkP1NoIisgvLYvUajH8UxrR88SMXT6Gi5fy6RH%2Fg6h9%2FbMhHhf%2F1o1GFPxUR922nE7o92tbE5Yt7NDpYQpfXquTLt6Sprc%2B1QAISEc1QbwGsGoPUm3W1INpFYkAUcZQcaX3nVFZ6e%2FbWZA1D7VnrGxcKyBrv0jbmcJN68h4A3o%2Bp4JPNEA7KpZWjAimU4Kc&X-Amz-Signature=1c15647055288cc39a60922fbccbd1d1adb2913f6e951060fc8b1bfe3da4c690&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZYMQ3F%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBR5oanmkuxaI1X8Gi3fxLwHp4IlV2CzjHFJi80SGsinAiEAhkm1JTtgOVbrvYkbPS3NrpfrPbFqgwtmAsajwFHNYM4qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHIeT93N1vt2qV9mCrcA9hwmhVWsNw07eDa66hJ8am2FlP9gqHSSW33lbvc%2BXLsnJxDl5TMe9BbOig%2B%2BxiHqomreKNAEyuOQ4hdRCUuGeifmVZ%2B%2BCj8rLo0QWS3Tsbcf5y8nOvIY55FTlU1GOIXjkdEZ22Uw9pptASJRJKv%2FNNrj5yygj7c4LIcHFXBDfSPk%2BZ43wSHEIKGhLIIHm36NGwTryd0hwuz1N0CQ4nfKpy6QwE%2B4tWrVyZ2eTPu26D0CccTFiqYrKX%2FTqok7776cQEkcrpNWAzFkXClOCm0g6jD6H%2BfRfkQQqIzG0%2F5cLQ%2BVnXC%2Fu1aIP0kn0FrhDoE4nWcyTsrPf7lPcHldXKMH3fxRvA17%2FQJLpfqnDp54jaYZXFxZsU0KrQVhqNgbGNqr%2F8%2F38Ivew6n%2Ft4kzB90eXcYLSYyl%2B2upvPh55LYBT68cXok5Bj5CqVOSHr%2BK15YtcJSh1mtb95TK9bCtpb4RLv2H8931UPu3MjdBkjpr8lM1zm%2B6aV9XUDfK5ekkVfv6u%2Bg%2BQm8Ujq9j%2BkVLW5dVlTF%2B8hR26gCYpKxt0G03zsc0M0gJCvaCbqFiP9R5zyFL2e7YhvgA1GzckkuR%2FEnndjOeMjdoHUSPjWm0t6rH2ypuwp4A3vbHvlvzSWuMO2S4r8GOqUB4DMFEXFvfR6bZptJFmL5j4rKpddTmHkP1NoIisgvLYvUajH8UxrR88SMXT6Gi5fy6RH%2Fg6h9%2FbMhHhf%2F1o1GFPxUR922nE7o92tbE5Yt7NDpYQpfXquTLt6Sprc%2B1QAISEc1QbwGsGoPUm3W1INpFYkAUcZQcaX3nVFZ6e%2FbWZA1D7VnrGxcKyBrv0jbmcJN68h4A3o%2Bp4JPNEA7KpZWjAimU4Kc&X-Amz-Signature=112084f822b0ea8a65b34b5de6e1e94036c2ef1eddcaec4cbdccfbec29e13b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIF6XVRC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIA9%2FaGXU8VXGM8QenKOC%2BWCAtGO3R%2FdRRqBMPAx7uhB5AiBa5eLbiidGNwp4wOlK5eac%2Bnc4CRtycEbaSOoq4sLk0SqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMhFAX8F1x2PgZPeTKtwDEdupqIQhNzxA8G0NoBtqIwrs3RRwjs4bEVn1AKEXkGVWf6nPHQhdfNxhh1G0KZW7FIkGOvxaf4cPaT7FXtnfz5iMGHxlDiRfGZ3wZNM2jPMq1g0M3GzpiN1XJQ%2BwrjjtMHGKGEO7SayoR0f01M9An9ULE1fnjpzHqpOB7zYVPMu3nQwQ%2FzJwlJ9EyXO38RwU83KsXda3dy%2FpDoCpSTIpuoGVmyDoT2B5uIFndJ8k9%2FFHhYMFGC%2BrVQNNufsGM0ErEdOaF9iXt0m43YQW6AxRe8mG9KE7pSkMTUvjeiiT6d6vcZr57kyCC1qNJzJJqpBkx1SD%2Fmhgm2QZqXBBlwYnV3HErAQVNz9cNRSpvj7osyycaVW8SDtoNVJvZYB8OPjk%2F9%2FcoT%2BTSLfhwVm2SUNGZWxp7WenHj9RRLnwGJEOIXphyRA0ha7LcmXbIRwaNbV1SMFIyd8BlsQNFedJP4zQ6X58cReWWaw7WumQcD8dlmZhCwzNWNjLjI6qfUjMf%2BhceYFFY%2BFpBvSSuRw9Y%2FgQl1B93ZfkjFqYyBMDLXwF3GFy07McbI5ch59UfUOuMr%2Bk3RbRToowC%2FltDLJCkSqmCe3XC7LgmblyPJ6wDP%2By5BrCU0z6b3dgxa5NlwgwwJLivwY6pgHtLxu61j5n4Mr3FOsFkZUJpv%2FgtwZBxwVt8UmZCre%2Fa3xwmIbMqCX4SZQaNqWuKYEjcsqlTWE2BzXoqCNzOjxu0gp6oPgq0k8w2962cR5eMa4sxMfNyMJO2jaAfihWd2o5iApeanFKzaC%2F1BqOMmFe2j2F5xVN6KpalB0%2FC%2B094Ue8%2B3WioKua1odRwQnkUusLorNyM4D9eMr0%2BYU0F8ImyuHmwZqA&X-Amz-Signature=def64c5f953adf4906dd05349b5fe690f2186d05b7ff0ee27e93818903778562&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKUSEETM%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBDQa2rSERRlnAU9AilJZu8WlcK%2FGhwQZt1xHiMMWO17AiEApnUt8WaZy71dmrxcumYgj0wAqGVzyoDF2VFEvFnP%2FkQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2gEx9vaDRmQkN%2F%2BCrcA7a7lz%2FB%2Fil4jQ93tF%2BaZmcsjmEUHaGzmMKRYBCId0b5HX3ChiZU1r8i40pOWdjAkT3gwxBDzOFLTP14SiD68jptn5xuExo8wq%2FB7IRx1%2FRwhyIEgVLZ%2BRK8tuDfh65zb0yp2dbTQ4YdICuuoTV54JdiXRNJ9l1NeA%2F9r7mLxwlYwrvt3ZDqytwS5BC%2BFt7ORrzXxD7T2xjJ0fN6aEdRJAbUFTUPJHeyTHEtdTUYk3d3PgJnv63yhvvEtlHKSRqFOyG%2BZlbmhnQgnEZEw1WNi1MZbgGyEGiDK4bFC8RdJgI6GcWkUmUm2BvXsHLea7Jcmj7wzOREPOEiV%2BAihLJgDiA3Dl6HkcfWKAlOPNfngnlwTLaaGVWGa%2F0k1AI%2FizjJxjU6dput9Stqi5yCuABMyRRDc2KeO0F3ToOL%2F6KLzOR7r180GAQvQE7JiNcsXu3RQEvFrATCRnZfJFtNy5DlMQKfAt4QflDnET39Guhkt2CSRxXE2B6x6F6Qlwgwt3NnRt04byBgbB3Tl8j8VFjo%2Fr5XWlo1nrJB6hZI11GnWr6OfRyBAJZZ4%2FgysQROnNK1G2wIyj3Y6pt7EpcBdDZ%2FqAv3mOWHixdB%2BNme4p6CCBxUsnJuNtUZTl%2BDiGg%2BMIyU4r8GOqUB3G2KcA74OIpSYhz0PWHkaDcmB%2BF9Ori6XUSxY6XPt%2BxxA4vaYZTxzowKPsZpS2s2EE99J%2Fd7w%2BaH47USDpAuznt9QPPpd2jeSffYt2tTmm21SYVmaESG78H9XzvnJBkzNc1nKCUnmUfqzR%2Bu93EqiM8ifWETpIF4wi3%2FV3w%2FzyBA1E7avi1VxpGce5O9AjxexLsxevN1FT7W%2BnFLTLTv83HSh2uf&X-Amz-Signature=787b55fbf2aea6622ce19d8028e0bfc5803fc418b8b70077186f1136b2f12cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZYMQ3F%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBR5oanmkuxaI1X8Gi3fxLwHp4IlV2CzjHFJi80SGsinAiEAhkm1JTtgOVbrvYkbPS3NrpfrPbFqgwtmAsajwFHNYM4qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHIeT93N1vt2qV9mCrcA9hwmhVWsNw07eDa66hJ8am2FlP9gqHSSW33lbvc%2BXLsnJxDl5TMe9BbOig%2B%2BxiHqomreKNAEyuOQ4hdRCUuGeifmVZ%2B%2BCj8rLo0QWS3Tsbcf5y8nOvIY55FTlU1GOIXjkdEZ22Uw9pptASJRJKv%2FNNrj5yygj7c4LIcHFXBDfSPk%2BZ43wSHEIKGhLIIHm36NGwTryd0hwuz1N0CQ4nfKpy6QwE%2B4tWrVyZ2eTPu26D0CccTFiqYrKX%2FTqok7776cQEkcrpNWAzFkXClOCm0g6jD6H%2BfRfkQQqIzG0%2F5cLQ%2BVnXC%2Fu1aIP0kn0FrhDoE4nWcyTsrPf7lPcHldXKMH3fxRvA17%2FQJLpfqnDp54jaYZXFxZsU0KrQVhqNgbGNqr%2F8%2F38Ivew6n%2Ft4kzB90eXcYLSYyl%2B2upvPh55LYBT68cXok5Bj5CqVOSHr%2BK15YtcJSh1mtb95TK9bCtpb4RLv2H8931UPu3MjdBkjpr8lM1zm%2B6aV9XUDfK5ekkVfv6u%2Bg%2BQm8Ujq9j%2BkVLW5dVlTF%2B8hR26gCYpKxt0G03zsc0M0gJCvaCbqFiP9R5zyFL2e7YhvgA1GzckkuR%2FEnndjOeMjdoHUSPjWm0t6rH2ypuwp4A3vbHvlvzSWuMO2S4r8GOqUB4DMFEXFvfR6bZptJFmL5j4rKpddTmHkP1NoIisgvLYvUajH8UxrR88SMXT6Gi5fy6RH%2Fg6h9%2FbMhHhf%2F1o1GFPxUR922nE7o92tbE5Yt7NDpYQpfXquTLt6Sprc%2B1QAISEc1QbwGsGoPUm3W1INpFYkAUcZQcaX3nVFZ6e%2FbWZA1D7VnrGxcKyBrv0jbmcJN68h4A3o%2Bp4JPNEA7KpZWjAimU4Kc&X-Amz-Signature=849dec8617d2cd7f0ed63ff1413ab3211d0bdbb002a56a1d369a18ab65c853eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
