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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNTLSPNT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDCx90B9KfNHKPnlH5bZ32WMgbt7xZGkoUS0N966b%2BzuQIhAL9whs%2F4HSmHgNTWjXv4Xb5Cz32Lwloq4VHvNXnusFbcKv8DCBUQABoMNjM3NDIzMTgzODA1Igy63PQXhWP8XqHZAmIq3APSfesIpj6Y6HQawT08H7WDjKZ%2Fp9u5Q%2F6%2FHTL%2FCFzWPQ0gChxiX3vYyXuDKt8mhKAedCWseR%2Bivb6FwJeb90rT3k5ivtS2vR89h7FHPhB4%2F6QPPRLSZh67hAjSEdaXocZFHZVWD9p1vK%2F4ZkzQnJg5sauzEUraPqp5cC%2FY0JCVaI1SSD2RRL8GCYfHE5hhAHoODduIq477t5enOrukrmJtqjY52Tk2midYg48OtZA%2BgEL5nqAVc30jQ410K0jNKVZ3wXsCIy8QMWwAWKiqhA8hMPTQcBZUKwN2fPc23fUUvSpz1zRgLLygrrvNHhC6oTFrxbQ4KoWHlVHV%2FvQA34oHwJxMUPmC89FoiTNUqwXLYf4pDY%2Fz3d402%2BnxMrGmRMSuNdVLaBErJLn3UUYAljaZlDiKUdpwHHJ9ir5%2B5wZCbdol63VH6Vs2Q88kFa0Eai1Sch%2BXfSn1GRwuTPvTE%2F2aM%2BI7IGn0bD5kKYU67eseL%2BMWs%2B2mvZQ9%2FIIWC79HAWaZevGDVUPNghEpbyP8YtuMc5ouR2dvPU%2FMDieRNXoKammE5DwrH8Rgm300XuL9LLsbA3ksNw%2FBIFZKmSTOzAvHJ7clR3SNl9DJLcqwzFAG%2FwJxJEJAyIuAQ%2Fq9kjCQqrDCBjqkAbbvrWSZ6Nt1IX6Xddih83Fo6QIZcG6Xedxs%2FW5KIWwKBZQSPNZsl8Zw5fmrj%2FgjuafR0DQ6DzqkiUUkhPEnnvtAOHnvW%2F8Ql8APrd20BPK3UIMoxEnSpVCNDWUeKNozj3uGXy5mtLhEGjIzvuugAg8NWkBI15yEMg1eeVErZkCHqjqNzC4FBYAsiPCEJnY964TKW14aOUNf7Q9NLA6UXMnhHZnl&X-Amz-Signature=594607ab189f6052f4d1d3e5cbee07b6d1ef3a0e77637eee4e3ecc31f9e190ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNTLSPNT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDCx90B9KfNHKPnlH5bZ32WMgbt7xZGkoUS0N966b%2BzuQIhAL9whs%2F4HSmHgNTWjXv4Xb5Cz32Lwloq4VHvNXnusFbcKv8DCBUQABoMNjM3NDIzMTgzODA1Igy63PQXhWP8XqHZAmIq3APSfesIpj6Y6HQawT08H7WDjKZ%2Fp9u5Q%2F6%2FHTL%2FCFzWPQ0gChxiX3vYyXuDKt8mhKAedCWseR%2Bivb6FwJeb90rT3k5ivtS2vR89h7FHPhB4%2F6QPPRLSZh67hAjSEdaXocZFHZVWD9p1vK%2F4ZkzQnJg5sauzEUraPqp5cC%2FY0JCVaI1SSD2RRL8GCYfHE5hhAHoODduIq477t5enOrukrmJtqjY52Tk2midYg48OtZA%2BgEL5nqAVc30jQ410K0jNKVZ3wXsCIy8QMWwAWKiqhA8hMPTQcBZUKwN2fPc23fUUvSpz1zRgLLygrrvNHhC6oTFrxbQ4KoWHlVHV%2FvQA34oHwJxMUPmC89FoiTNUqwXLYf4pDY%2Fz3d402%2BnxMrGmRMSuNdVLaBErJLn3UUYAljaZlDiKUdpwHHJ9ir5%2B5wZCbdol63VH6Vs2Q88kFa0Eai1Sch%2BXfSn1GRwuTPvTE%2F2aM%2BI7IGn0bD5kKYU67eseL%2BMWs%2B2mvZQ9%2FIIWC79HAWaZevGDVUPNghEpbyP8YtuMc5ouR2dvPU%2FMDieRNXoKammE5DwrH8Rgm300XuL9LLsbA3ksNw%2FBIFZKmSTOzAvHJ7clR3SNl9DJLcqwzFAG%2FwJxJEJAyIuAQ%2Fq9kjCQqrDCBjqkAbbvrWSZ6Nt1IX6Xddih83Fo6QIZcG6Xedxs%2FW5KIWwKBZQSPNZsl8Zw5fmrj%2FgjuafR0DQ6DzqkiUUkhPEnnvtAOHnvW%2F8Ql8APrd20BPK3UIMoxEnSpVCNDWUeKNozj3uGXy5mtLhEGjIzvuugAg8NWkBI15yEMg1eeVErZkCHqjqNzC4FBYAsiPCEJnY964TKW14aOUNf7Q9NLA6UXMnhHZnl&X-Amz-Signature=e9543880fb73b55a464c9ee4c3d6afd2f2995bd0cf3ba8630864a9be7b0eb26f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNTLSPNT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDCx90B9KfNHKPnlH5bZ32WMgbt7xZGkoUS0N966b%2BzuQIhAL9whs%2F4HSmHgNTWjXv4Xb5Cz32Lwloq4VHvNXnusFbcKv8DCBUQABoMNjM3NDIzMTgzODA1Igy63PQXhWP8XqHZAmIq3APSfesIpj6Y6HQawT08H7WDjKZ%2Fp9u5Q%2F6%2FHTL%2FCFzWPQ0gChxiX3vYyXuDKt8mhKAedCWseR%2Bivb6FwJeb90rT3k5ivtS2vR89h7FHPhB4%2F6QPPRLSZh67hAjSEdaXocZFHZVWD9p1vK%2F4ZkzQnJg5sauzEUraPqp5cC%2FY0JCVaI1SSD2RRL8GCYfHE5hhAHoODduIq477t5enOrukrmJtqjY52Tk2midYg48OtZA%2BgEL5nqAVc30jQ410K0jNKVZ3wXsCIy8QMWwAWKiqhA8hMPTQcBZUKwN2fPc23fUUvSpz1zRgLLygrrvNHhC6oTFrxbQ4KoWHlVHV%2FvQA34oHwJxMUPmC89FoiTNUqwXLYf4pDY%2Fz3d402%2BnxMrGmRMSuNdVLaBErJLn3UUYAljaZlDiKUdpwHHJ9ir5%2B5wZCbdol63VH6Vs2Q88kFa0Eai1Sch%2BXfSn1GRwuTPvTE%2F2aM%2BI7IGn0bD5kKYU67eseL%2BMWs%2B2mvZQ9%2FIIWC79HAWaZevGDVUPNghEpbyP8YtuMc5ouR2dvPU%2FMDieRNXoKammE5DwrH8Rgm300XuL9LLsbA3ksNw%2FBIFZKmSTOzAvHJ7clR3SNl9DJLcqwzFAG%2FwJxJEJAyIuAQ%2Fq9kjCQqrDCBjqkAbbvrWSZ6Nt1IX6Xddih83Fo6QIZcG6Xedxs%2FW5KIWwKBZQSPNZsl8Zw5fmrj%2FgjuafR0DQ6DzqkiUUkhPEnnvtAOHnvW%2F8Ql8APrd20BPK3UIMoxEnSpVCNDWUeKNozj3uGXy5mtLhEGjIzvuugAg8NWkBI15yEMg1eeVErZkCHqjqNzC4FBYAsiPCEJnY964TKW14aOUNf7Q9NLA6UXMnhHZnl&X-Amz-Signature=a711c7f5bcfb4e3f016306d07e166433a763d84d98569481d921840f6913e864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IU3VUY3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCT2N4TDtWyySPbZM4dwT0Sz8BS5EpbCCem60osAXGF0QIgXdRVaefKgzkyEFNTlOdFvM3bxNnUn1VAFuKted9wppIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDPSKKvqhFICVuCgZdSrcA1eMj16%2BuZmNhqbazIwrTqYqE6nZdUZYyJhYqIOiUbOIaP81kfDguK90L39EwsCPAetVlheah8CUg0BlTwX0AAniuC7K4tO%2ByLbF7SKE0ZfmvxnQWmJV796BtxL6yTQd%2Bgc4E6GnxFY9m%2BLLFbAV0uZnoPRISkAOZveohbaIunbxu8EmcjpFHGq6W1n%2BcQWWIzlw4VSU8cfxf0eymmAydnI7KawsDqJ4LFbOIMWhWWBQaV7PCcgu6%2BlF8zxU9bLpqy0otaXzOHAXUj3jw77H6hewzqJ1T%2FvpbYFznO4pamIAYQOfzMOUi5f%2Fsvbc6ve%2BS03Tacf8v6Y8uvV5Yjijf16TOM45r8%2BVIO4CHAJU9EYuT6qBKA3%2FED6GoCEImgf1HnmqByLJCx5h%2BrCB6PzW%2Fx1Z3XGv%2BNSInDbeDRYZKffTc9z5mR3hUBizSymS33t5ZtkMAQ88IlO5QcdeHVcOE2NgtckTRVfBQGmCuwzd%2FWQf%2FtuEqU1ax30wjFWa8fSoNfElZ1vSCfKNERqraVJcNYZXP1MY%2FPnfnch6zt5RkvmtZ920gRiFuaRZfzAP%2F%2B8UcFsCvOVzozCw8aGYB8lcUG%2BNpJPfUpX01QwLtM2WVVuxt1ldlpurZaYkYFrfMJypsMIGOqUBoobWlBTNi6NXu%2F0PypGkJ8kgAG9sXwh0AmetOoxlVh%2FLZE8FRRJ3CQkIHRYExrjs9xjOVnE%2F0CcK50GOG1k6PN8trhMcphUSt4usSEbRueoJOxKUCj%2FG1qxek5ZNFQM0TOuk5jPOokHJfb8nI8PLM%2FYaeL7VItQW6CejnszNgVQmGobrGlamPFRvZrvuWDHW0zlGOxxw%2FdxcJa%2FlJWT%2F315PG5PB&X-Amz-Signature=1fc83ecf31422b4c53534909e0eca1ef88b955e796dfbaca268ffdc89d8e461c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTBKKTT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBWzSyJ1sTYPlA5UMR7OsZg7FtOZtN3HNuHJcNjdtNYsAiEA3O4egQpmL37J3TDGSesD%2F4grDh2Ya8STQKZxFMDwWb8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDAPhc25kaBAllO3%2BWSrcA%2FZY%2B9Zn51%2F%2Bo95HhkOlY6%2BLYTz9Q3TZe%2FNOnYThzJxsv%2Bkz7Uc5BF3FDJkNjJBz8bttnt2j1DP5o0fktrMO3LfDPPBp7vK9JpEMAKNVM3DRppQfKV42U3vxMx2tSPQLxGsH0htX%2FMUnNDryEXDbWTB%2BNmW3CZhNKiIRbrVWtXg8yAbiz4Ovn0vc%2F%2Fz0N7rjI4z6oTZEPQHoiYA5zrSLmMuB%2F%2BacIfdziNWBzXsz3mAzg7to5Nz0Ulmo8xxJGyzQPVfsrliymjfXL9E%2FbSwlhiCajxZiobBeKFOqgAN4a7bnWwSEgTnoMeN1f1af6bMxJiVwkkBO6n3i2myX%2BzmxE2oEMyERYpeQ9ivsUp%2BVVXI3NhuVauUXvHoZnZCtKE1ppB9nCvIMwnmNLZTXAJ0UejXs6hKmPkx6zwZGPNw8fAFEn8EDn%2FikMkbsEwWlObqRKffRDhMMqkc1EILwrtWZROuuR%2B7ZSqUHvYybwKsxaNQaAkP56Bvy3hIzR4%2FVteAEuBKTPgWulbqSPHJwtyqf1fAROE9paAHD0OKfilzRbhsWK7ReP22PZuts0bpc%2BX4oyQwm4v7HzjDbh6Thfa%2FQnOMIhvsFO1N2pS2P9I2QHPEwh2Yh6jNZDXG6EczDMICqsMIGOqUBlLTQp6QYZI%2BNsO3tZMFkYopjwpS8veYY97HzlqbRYG3BE0%2BkUmriuOe4beCtvO0QADqJtj7mGQY0sOH%2BUqYH6Z14dUoXXKwQYds%2FNzdXz9V7HhjigjRWZ8HpvIv8ZrmwLNoCimeU960k%2BCUBvfbsPTeJPSWzbS5PqHbJwJLMKhpmidkGiA7De0mGyx%2FM8L4uGOxyCIhqHMXVwfl02UKlQnzTCtcX&X-Amz-Signature=1d7b450c185ab427fecbc08ae058d28fbdf2049fa1b3cceb46dae0b0a5eb3b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNTLSPNT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDCx90B9KfNHKPnlH5bZ32WMgbt7xZGkoUS0N966b%2BzuQIhAL9whs%2F4HSmHgNTWjXv4Xb5Cz32Lwloq4VHvNXnusFbcKv8DCBUQABoMNjM3NDIzMTgzODA1Igy63PQXhWP8XqHZAmIq3APSfesIpj6Y6HQawT08H7WDjKZ%2Fp9u5Q%2F6%2FHTL%2FCFzWPQ0gChxiX3vYyXuDKt8mhKAedCWseR%2Bivb6FwJeb90rT3k5ivtS2vR89h7FHPhB4%2F6QPPRLSZh67hAjSEdaXocZFHZVWD9p1vK%2F4ZkzQnJg5sauzEUraPqp5cC%2FY0JCVaI1SSD2RRL8GCYfHE5hhAHoODduIq477t5enOrukrmJtqjY52Tk2midYg48OtZA%2BgEL5nqAVc30jQ410K0jNKVZ3wXsCIy8QMWwAWKiqhA8hMPTQcBZUKwN2fPc23fUUvSpz1zRgLLygrrvNHhC6oTFrxbQ4KoWHlVHV%2FvQA34oHwJxMUPmC89FoiTNUqwXLYf4pDY%2Fz3d402%2BnxMrGmRMSuNdVLaBErJLn3UUYAljaZlDiKUdpwHHJ9ir5%2B5wZCbdol63VH6Vs2Q88kFa0Eai1Sch%2BXfSn1GRwuTPvTE%2F2aM%2BI7IGn0bD5kKYU67eseL%2BMWs%2B2mvZQ9%2FIIWC79HAWaZevGDVUPNghEpbyP8YtuMc5ouR2dvPU%2FMDieRNXoKammE5DwrH8Rgm300XuL9LLsbA3ksNw%2FBIFZKmSTOzAvHJ7clR3SNl9DJLcqwzFAG%2FwJxJEJAyIuAQ%2Fq9kjCQqrDCBjqkAbbvrWSZ6Nt1IX6Xddih83Fo6QIZcG6Xedxs%2FW5KIWwKBZQSPNZsl8Zw5fmrj%2FgjuafR0DQ6DzqkiUUkhPEnnvtAOHnvW%2F8Ql8APrd20BPK3UIMoxEnSpVCNDWUeKNozj3uGXy5mtLhEGjIzvuugAg8NWkBI15yEMg1eeVErZkCHqjqNzC4FBYAsiPCEJnY964TKW14aOUNf7Q9NLA6UXMnhHZnl&X-Amz-Signature=15c65a1130fdd8703067e3d09ea2dce8e7af67bf6ecf16c98db06b77172775fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
