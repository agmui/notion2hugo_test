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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V232CYPI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE96Qf6x%2BiRTBpMSCOKcJDwWvD9d0keGeUObwEUEFtT4AiAz3S7DP08NEcJvh1zoXi%2B%2Bhu0RzXbE%2BXjWauFRkeCaHCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMdu6mk6pBgdp58JxsKtwDax6h6mPyjo75M4ley6WvLxNmRJnKqrjppA%2BmT1AOwQhfnDtu%2Byc90ferygwQXldnKC%2FbD%2BqwIZWlzIfhfqktkvGxY%2BjCmLGLE07ojiklfLbvLYzPG0tLeXnvJ8omyH%2B8WWnljOR5FPIuRZfZikFf1oCME7aStb%2F%2BnfGE8WiOfgDkcuVNzywHVa06n8uYF8AY9AHyxmpXcfSiICUblaTAvY9v5pBWc4MQ2XVdCeD1lpr4m%2B6m71%2FwWkkhKZUYaMZRdqm8JVECBnbVNKvur2zAwy3zUE0TESxH7Zp4moC5TsxE7oXlV1gHPVNWpG74mYkBv3CXEsP0ra7VDrkkfByzmoiL6kZKm9MPPdVP6%2BqOnAqFQ7SB4X5teJO7JqMTZwSYfpq9RSGLLQMdh6ce6RvkIhCJax4NduXaw9JjQe6UZdAEQBz%2FYJ4LEa3%2FdMceiOD9UFf5QXkBzWUgwQ6HdBhamasALK%2Fcx%2FFj2HOVptjv2fOeeGTvqUfPpbsjjLU7Ejitm1cR3Uyhzjb5FNUccLRexRWNGdIt90OVsQOIGHx5Sszsdg%2FUg6bASpcpHwtHTSkcajrlephzejNZb80FbmOABPD06JIz7ln7vA4ezXKpG7%2FOSvxu9WwHuHt3iVswtYvnwAY6pgFWSWy9HkJ%2B%2BU6RzvzQVdupr%2BzpP3VsFNRJr3RAWc5D7psrboWlFZ0Xy69L926snIRIGIsX%2Fau1qlyixF2Q9C5RPefgLOzymo3HeusPZoTP%2Bs0MHbps92SQojYH8LYeRlbpXzEWggTNOk4HXMH60LNIlp1SXqoDT91JUA6aaM4hP5AvH4VtH80TR9BsdQlM6yjrCXVTSSkTNVVSiPBHYh7OJbHTpj41&X-Amz-Signature=7bae43f08f9a0b5abb6532d1e4487a93a33fe393744e79a693486d5263ba8588&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V232CYPI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE96Qf6x%2BiRTBpMSCOKcJDwWvD9d0keGeUObwEUEFtT4AiAz3S7DP08NEcJvh1zoXi%2B%2Bhu0RzXbE%2BXjWauFRkeCaHCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMdu6mk6pBgdp58JxsKtwDax6h6mPyjo75M4ley6WvLxNmRJnKqrjppA%2BmT1AOwQhfnDtu%2Byc90ferygwQXldnKC%2FbD%2BqwIZWlzIfhfqktkvGxY%2BjCmLGLE07ojiklfLbvLYzPG0tLeXnvJ8omyH%2B8WWnljOR5FPIuRZfZikFf1oCME7aStb%2F%2BnfGE8WiOfgDkcuVNzywHVa06n8uYF8AY9AHyxmpXcfSiICUblaTAvY9v5pBWc4MQ2XVdCeD1lpr4m%2B6m71%2FwWkkhKZUYaMZRdqm8JVECBnbVNKvur2zAwy3zUE0TESxH7Zp4moC5TsxE7oXlV1gHPVNWpG74mYkBv3CXEsP0ra7VDrkkfByzmoiL6kZKm9MPPdVP6%2BqOnAqFQ7SB4X5teJO7JqMTZwSYfpq9RSGLLQMdh6ce6RvkIhCJax4NduXaw9JjQe6UZdAEQBz%2FYJ4LEa3%2FdMceiOD9UFf5QXkBzWUgwQ6HdBhamasALK%2Fcx%2FFj2HOVptjv2fOeeGTvqUfPpbsjjLU7Ejitm1cR3Uyhzjb5FNUccLRexRWNGdIt90OVsQOIGHx5Sszsdg%2FUg6bASpcpHwtHTSkcajrlephzejNZb80FbmOABPD06JIz7ln7vA4ezXKpG7%2FOSvxu9WwHuHt3iVswtYvnwAY6pgFWSWy9HkJ%2B%2BU6RzvzQVdupr%2BzpP3VsFNRJr3RAWc5D7psrboWlFZ0Xy69L926snIRIGIsX%2Fau1qlyixF2Q9C5RPefgLOzymo3HeusPZoTP%2Bs0MHbps92SQojYH8LYeRlbpXzEWggTNOk4HXMH60LNIlp1SXqoDT91JUA6aaM4hP5AvH4VtH80TR9BsdQlM6yjrCXVTSSkTNVVSiPBHYh7OJbHTpj41&X-Amz-Signature=2fc7ac945b198d424da4e0ad834eebee41d32d45b20f3ce6ac6c4d3c4b67ce39&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V232CYPI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE96Qf6x%2BiRTBpMSCOKcJDwWvD9d0keGeUObwEUEFtT4AiAz3S7DP08NEcJvh1zoXi%2B%2Bhu0RzXbE%2BXjWauFRkeCaHCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMdu6mk6pBgdp58JxsKtwDax6h6mPyjo75M4ley6WvLxNmRJnKqrjppA%2BmT1AOwQhfnDtu%2Byc90ferygwQXldnKC%2FbD%2BqwIZWlzIfhfqktkvGxY%2BjCmLGLE07ojiklfLbvLYzPG0tLeXnvJ8omyH%2B8WWnljOR5FPIuRZfZikFf1oCME7aStb%2F%2BnfGE8WiOfgDkcuVNzywHVa06n8uYF8AY9AHyxmpXcfSiICUblaTAvY9v5pBWc4MQ2XVdCeD1lpr4m%2B6m71%2FwWkkhKZUYaMZRdqm8JVECBnbVNKvur2zAwy3zUE0TESxH7Zp4moC5TsxE7oXlV1gHPVNWpG74mYkBv3CXEsP0ra7VDrkkfByzmoiL6kZKm9MPPdVP6%2BqOnAqFQ7SB4X5teJO7JqMTZwSYfpq9RSGLLQMdh6ce6RvkIhCJax4NduXaw9JjQe6UZdAEQBz%2FYJ4LEa3%2FdMceiOD9UFf5QXkBzWUgwQ6HdBhamasALK%2Fcx%2FFj2HOVptjv2fOeeGTvqUfPpbsjjLU7Ejitm1cR3Uyhzjb5FNUccLRexRWNGdIt90OVsQOIGHx5Sszsdg%2FUg6bASpcpHwtHTSkcajrlephzejNZb80FbmOABPD06JIz7ln7vA4ezXKpG7%2FOSvxu9WwHuHt3iVswtYvnwAY6pgFWSWy9HkJ%2B%2BU6RzvzQVdupr%2BzpP3VsFNRJr3RAWc5D7psrboWlFZ0Xy69L926snIRIGIsX%2Fau1qlyixF2Q9C5RPefgLOzymo3HeusPZoTP%2Bs0MHbps92SQojYH8LYeRlbpXzEWggTNOk4HXMH60LNIlp1SXqoDT91JUA6aaM4hP5AvH4VtH80TR9BsdQlM6yjrCXVTSSkTNVVSiPBHYh7OJbHTpj41&X-Amz-Signature=d0fce65fcdc2d3af1fc9ad3579d757a18399f6d13a8ccae3d0086434b4334ea9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV2NZ4CG%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4vKLOLp6b4E9jWsw8x94PnfVvfXVPRqrNYzuhWdQOMAIgMP5TiCNlwqdNoPWYzUawMzcu1pqMT0Q6wQfvCql5wEMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC%2ByYYjheKAfzIdf6yrcA%2F385%2BzBveSwOYdS9zVy6qtqy0qtidwYrnUOE4z0R1AapuJ0hfctVq%2FXrIGD81U8gE9AFSqkYN0BrjK8yrxhsv51sZA3RdpR7v59cvorGjXZMdA3xYJdx0%2FdhWouYm8oGVTrg6e1MxscoAAsDMn%2BBaQsU5N7Vaspq%2FKIOOr7uAzakhjyKgQljlV%2ByGkL99MqlW5izDuSZiG3rg6gRg46e%2FHGg7dWpUIgWVzplpIDTyCPwu1O9hOGBNVnXQBPGKupt9qel%2BS5IqphJauIPZDf52Upx0LGxCBI5NnmrZ1wSlt3%2Fgyinv4a2Ce6pbb7nyOTrHQX%2BZlr8Xgdm63I3bSXoWx7hZ6UvpeX1CET7OiZ%2BwCOAlPcfUfUwRSZPz4y3qFp%2FIWNK0gUDeRP6zno0n8AOFmoyPV3BbfnrR6R8FYsNzX5A7J%2BmFHbwDb1HvGl6sWT1Oo74Sze1CnwkSIPw5i3cHl5ul6YHNnE%2BHVOIV6n%2FfxigoRs14JR%2B3Df11D%2B%2F7TOlTfrvwDPiPpED2eSIpHGRI07UdD3UULGYPKAns%2Byc66SZ1O1oN6SMLDhoUA99VXUp1KQh0923xBB4D8ncLcdLZn6IJ9j7ZWe47xnWHCWhUaXsj3PQ6ogm5hnYLkXMI2L58AGOqUB0%2FsNz6DzNhp7hsTrtpIyF5jEhG%2Fl0PthTDr1KRmoohF1z%2FW2IMSNBwymm2Ahw8XDpPoAR9wk4VVqS0u7kpioHFIn4zA3BNsTCsYRyLXKTGvQOy86gwXJKBRuRUS3AjT6HdAZBL6pjEeK2jlNvY2mWdkVbudKAUdChU59Z%2BiP2PTHMaIydzlAejiZEU1ATnWt66Ko6G2Rj3OR9Eq8bCrb9iSAbBdO&X-Amz-Signature=7f78508530d5fe21023c2ab7eaaf604b7277ec0e6d85a40a93f3699c1382894a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466335RFMDU%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVhmEYVnlExHJwiXhUYlZekKKQwn2w4ph0LopKZhjaKgIhAMKfvFJeJFaIWO9IVqflOVlarfID%2FHS8OFyft1%2FJG8VOKv8DCEEQABoMNjM3NDIzMTgzODA1IgzJE6zb%2BNbv6oXXeRYq3AO22k2TA5JizeCfOws5MZ7AbjSgGNTxc%2FJUFSRg30IoOSNRYcEnv96u3WEVBggNoaGjwOX%2FRRAhHLufQtnAQrC4wUAG1cQa7Vtxtwwib%2B0qiql2tRGr5S7YxgdGBcAQlTxuyLLon4Cucfx7%2BTD%2BT8pNnV2mEQb67Mlcqym6NWxYoNXfotT4fmhOacR6uKLH2HlLiUPSO47iqp%2B%2FQ3p5Aahv33k3YQ4wD0CU%2BKB34sKRkQVF15fTBwrIFGlW3WtjIZnywqr03BLcRLbVwgF9rHioYVN%2FMSSRq9KWFg7%2FT9qLpl33sbV8ROviaqCbRFpUyqRcmMVf8O0wwXRkPxwAeHt4hcXfOXB6pcIdr0gN22gsXKc57Ya2Q4KTfSbnOJvfJFdcAEDFdSzzZQ97bZY2Hr25m2qM%2BID2LxjjLDGefXIHSDk%2F0uSWbfUP757v6gXmUzQy%2FIXoGFLdMS%2B%2FpK7jcz4vMqX%2Fm5JsQSmUnIBzkrW7EAMlkE0VluwfgIPwD7NOS2galAG5Ks9AMyD9u6WV%2Fzcaax856kiQuXE7L03eb8Ge%2BSPUrJpjxwba1F8C5%2FumGi%2FgMubT5LXSeBug7q8jZjecJeqMTJs8iAldDiXz%2BwV8KEsOz9aPrH3zIX8DGjCOi%2BfABjqkAfFkbfQveEDxpKHgZiLlYEZ7y5oBcOQbDziTolyhdPEHb2Mgy3Nf97URNMVjPNh2QWjKzh3H5d92Ft6ivVPB1VPHS%2Bwez3xvMtcKOi0L2tcqg9gopX7BawSl4xgDueTw7C0E6tgYdvGnIQ998rx9LEOGBIrsUtCZVM3CQCfQHmuiz0MTGXchSchjVxz85ltAE03x7NrWmyrK0tOR4MrUN66h4UmG&X-Amz-Signature=a62cbbc4ac3c5670699bcfbfbb855959c50cfdb6549576b0431a358c2e9bf72d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V232CYPI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE96Qf6x%2BiRTBpMSCOKcJDwWvD9d0keGeUObwEUEFtT4AiAz3S7DP08NEcJvh1zoXi%2B%2Bhu0RzXbE%2BXjWauFRkeCaHCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMdu6mk6pBgdp58JxsKtwDax6h6mPyjo75M4ley6WvLxNmRJnKqrjppA%2BmT1AOwQhfnDtu%2Byc90ferygwQXldnKC%2FbD%2BqwIZWlzIfhfqktkvGxY%2BjCmLGLE07ojiklfLbvLYzPG0tLeXnvJ8omyH%2B8WWnljOR5FPIuRZfZikFf1oCME7aStb%2F%2BnfGE8WiOfgDkcuVNzywHVa06n8uYF8AY9AHyxmpXcfSiICUblaTAvY9v5pBWc4MQ2XVdCeD1lpr4m%2B6m71%2FwWkkhKZUYaMZRdqm8JVECBnbVNKvur2zAwy3zUE0TESxH7Zp4moC5TsxE7oXlV1gHPVNWpG74mYkBv3CXEsP0ra7VDrkkfByzmoiL6kZKm9MPPdVP6%2BqOnAqFQ7SB4X5teJO7JqMTZwSYfpq9RSGLLQMdh6ce6RvkIhCJax4NduXaw9JjQe6UZdAEQBz%2FYJ4LEa3%2FdMceiOD9UFf5QXkBzWUgwQ6HdBhamasALK%2Fcx%2FFj2HOVptjv2fOeeGTvqUfPpbsjjLU7Ejitm1cR3Uyhzjb5FNUccLRexRWNGdIt90OVsQOIGHx5Sszsdg%2FUg6bASpcpHwtHTSkcajrlephzejNZb80FbmOABPD06JIz7ln7vA4ezXKpG7%2FOSvxu9WwHuHt3iVswtYvnwAY6pgFWSWy9HkJ%2B%2BU6RzvzQVdupr%2BzpP3VsFNRJr3RAWc5D7psrboWlFZ0Xy69L926snIRIGIsX%2Fau1qlyixF2Q9C5RPefgLOzymo3HeusPZoTP%2Bs0MHbps92SQojYH8LYeRlbpXzEWggTNOk4HXMH60LNIlp1SXqoDT91JUA6aaM4hP5AvH4VtH80TR9BsdQlM6yjrCXVTSSkTNVVSiPBHYh7OJbHTpj41&X-Amz-Signature=c7950c57d07a745615a59d32dad80577f57755bf9e763b7adfd745790a46a48d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
