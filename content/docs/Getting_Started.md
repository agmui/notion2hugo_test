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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3S5QVOU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDfyzstIu84Bjtb%2Bdi2wQaMamdm44cqdeb9HjVgUUMp2QIgZzndO9jr9fvGEFrwZEO628UGBdquXTr1k0PIOOB6cN0q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMPc8E9gut0VyM1c9ircAwelqmVFX9PLEbR%2BJQPNOJ0DlMcGB95%2FXxSgDxV98Nmyxy0QqaB8ovrS0VFkzCQVOi0kWd%2BohWyTyPOuG%2BxkdZ%2BUUomYkHlAwRojf9wxr9pRQFNwsmGkeLuzbl2w2sFnk9tcz%2FaNbHQky1Ih%2BZvBdcchsJWDOBfpxFbPtlS1TT69JANbE%2BH6MiLcjDW0kn1O78M52PWs3ytXOmhB%2BLQIG5MLyn4LTKY%2Fz17QimA2RuCl61HI2QjubjZrwefppgECU5zUxnWSVF067NwmbUjueuZILefwb5mQZHrGNJG6CK%2FSvc3%2F5MGzi7Ccw0Bc6pe0yKsTZhXbatIAcPGHzhIxjUzpt8SjBQtoF1SEmxPXSOE2ORnMs%2B5fMYC1p9BDsy%2Fg6BmPCevU3jH8hbuBsSO4fLJJiV%2FljrJ2EQK2YH8aMSG58i9%2FLiRyK054pqUFHQfg988iQnVDPrA7prQ5NCHl%2BxoXoqGCR5B8zRCpJ7ChFs4iQK459iXL77lfVTFFaS66tx%2F5m7GZMK3tPBw3zuXvd3bRl9PHM5%2FmRqOHs04tRR27ehilayI%2FODKeMBlMeHqfRBJi%2FZRj38nLSMZ0chDi9WuSsyAv8%2F9NR0jFnfNFCIPM%2BD71zlQXBUO2RNF5MJaJ%2F8EGOqUBUUhYOji0tHz7bC5o6WE31zvSRsOkiLPUGvdVUjiDgtQQw4laUShzCITuXpFHHFNzV8mr04uJ2TZG%2FfLcCcFud4DV1cmyqfnPUBkDSsIRRJNONerMGAsDh930G1vipwzLI1L54%2Fwkd1G9DzrxW4pTWHQNdq9jIj7BKqkeL8kB2VJCJKQExVuKctBctAv%2Bc4FM6y5Zj%2BKdl8oV9tTHK0Nh4OceXwNi&X-Amz-Signature=c098086a5b13be68b204683ba3b3c527ad841bb2e1af2f17fe45db7c71e180ce&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3S5QVOU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDfyzstIu84Bjtb%2Bdi2wQaMamdm44cqdeb9HjVgUUMp2QIgZzndO9jr9fvGEFrwZEO628UGBdquXTr1k0PIOOB6cN0q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMPc8E9gut0VyM1c9ircAwelqmVFX9PLEbR%2BJQPNOJ0DlMcGB95%2FXxSgDxV98Nmyxy0QqaB8ovrS0VFkzCQVOi0kWd%2BohWyTyPOuG%2BxkdZ%2BUUomYkHlAwRojf9wxr9pRQFNwsmGkeLuzbl2w2sFnk9tcz%2FaNbHQky1Ih%2BZvBdcchsJWDOBfpxFbPtlS1TT69JANbE%2BH6MiLcjDW0kn1O78M52PWs3ytXOmhB%2BLQIG5MLyn4LTKY%2Fz17QimA2RuCl61HI2QjubjZrwefppgECU5zUxnWSVF067NwmbUjueuZILefwb5mQZHrGNJG6CK%2FSvc3%2F5MGzi7Ccw0Bc6pe0yKsTZhXbatIAcPGHzhIxjUzpt8SjBQtoF1SEmxPXSOE2ORnMs%2B5fMYC1p9BDsy%2Fg6BmPCevU3jH8hbuBsSO4fLJJiV%2FljrJ2EQK2YH8aMSG58i9%2FLiRyK054pqUFHQfg988iQnVDPrA7prQ5NCHl%2BxoXoqGCR5B8zRCpJ7ChFs4iQK459iXL77lfVTFFaS66tx%2F5m7GZMK3tPBw3zuXvd3bRl9PHM5%2FmRqOHs04tRR27ehilayI%2FODKeMBlMeHqfRBJi%2FZRj38nLSMZ0chDi9WuSsyAv8%2F9NR0jFnfNFCIPM%2BD71zlQXBUO2RNF5MJaJ%2F8EGOqUBUUhYOji0tHz7bC5o6WE31zvSRsOkiLPUGvdVUjiDgtQQw4laUShzCITuXpFHHFNzV8mr04uJ2TZG%2FfLcCcFud4DV1cmyqfnPUBkDSsIRRJNONerMGAsDh930G1vipwzLI1L54%2Fwkd1G9DzrxW4pTWHQNdq9jIj7BKqkeL8kB2VJCJKQExVuKctBctAv%2Bc4FM6y5Zj%2BKdl8oV9tTHK0Nh4OceXwNi&X-Amz-Signature=5367d5465197e06e3e3a03e18babeb1fe0d0522259a553f6a2a53ac17c413d03&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3S5QVOU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDfyzstIu84Bjtb%2Bdi2wQaMamdm44cqdeb9HjVgUUMp2QIgZzndO9jr9fvGEFrwZEO628UGBdquXTr1k0PIOOB6cN0q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMPc8E9gut0VyM1c9ircAwelqmVFX9PLEbR%2BJQPNOJ0DlMcGB95%2FXxSgDxV98Nmyxy0QqaB8ovrS0VFkzCQVOi0kWd%2BohWyTyPOuG%2BxkdZ%2BUUomYkHlAwRojf9wxr9pRQFNwsmGkeLuzbl2w2sFnk9tcz%2FaNbHQky1Ih%2BZvBdcchsJWDOBfpxFbPtlS1TT69JANbE%2BH6MiLcjDW0kn1O78M52PWs3ytXOmhB%2BLQIG5MLyn4LTKY%2Fz17QimA2RuCl61HI2QjubjZrwefppgECU5zUxnWSVF067NwmbUjueuZILefwb5mQZHrGNJG6CK%2FSvc3%2F5MGzi7Ccw0Bc6pe0yKsTZhXbatIAcPGHzhIxjUzpt8SjBQtoF1SEmxPXSOE2ORnMs%2B5fMYC1p9BDsy%2Fg6BmPCevU3jH8hbuBsSO4fLJJiV%2FljrJ2EQK2YH8aMSG58i9%2FLiRyK054pqUFHQfg988iQnVDPrA7prQ5NCHl%2BxoXoqGCR5B8zRCpJ7ChFs4iQK459iXL77lfVTFFaS66tx%2F5m7GZMK3tPBw3zuXvd3bRl9PHM5%2FmRqOHs04tRR27ehilayI%2FODKeMBlMeHqfRBJi%2FZRj38nLSMZ0chDi9WuSsyAv8%2F9NR0jFnfNFCIPM%2BD71zlQXBUO2RNF5MJaJ%2F8EGOqUBUUhYOji0tHz7bC5o6WE31zvSRsOkiLPUGvdVUjiDgtQQw4laUShzCITuXpFHHFNzV8mr04uJ2TZG%2FfLcCcFud4DV1cmyqfnPUBkDSsIRRJNONerMGAsDh930G1vipwzLI1L54%2Fwkd1G9DzrxW4pTWHQNdq9jIj7BKqkeL8kB2VJCJKQExVuKctBctAv%2Bc4FM6y5Zj%2BKdl8oV9tTHK0Nh4OceXwNi&X-Amz-Signature=60ff09ab76ed43ea1b838460014a083fb7e3cdb8e4227f5c52c2f857cae9d1fa&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4MKEWY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCh%2F2kOhUlhweh7JyAVtuustLb1%2BqChN03tSF7pTEM3IAIhALQel0JDyTzka02TSrK1mtx00tdehVjRa9CAUDMV4j2FKv8DCCUQABoMNjM3NDIzMTgzODA1IgyPYf0PKWdqsW8FLasq3AMKrq%2BGDclELIiCk4j4mWb9C6f7%2F7Dr%2F8gu8NHx%2BJwLPztfEJAVBGEszkGRhA5%2BD5Njf4qLoXw4%2B1eOb%2BG9XTRDNI75cdOD91I7mQYfyzV5rTl1c7pp4G6BFJ4LmyFA86brRsoylSS3egvA%2BUibIH%2FVrPpbKR%2FqfGt7S20wMqPESSfXrlusMgVJkOZqe%2F1mkBmfeJy3eRfw8mxW2eaXbwbyK1WQZ5DKu2tfLwYKcHjXKRKKuKCYHAgO8JwMGZiP4eEeJYJObXUC%2FOTg8%2FODqDnZ3kuZq8wmeMAE3V98f%2BERT6AwJxjIbAjML1wQ18IXsOKEm9CQL37ymiI5rtZpOtHoGBOgCYhxmXO%2BGUVMUEly%2FI4msQREWHeytxtFcF6W7jd8JeNv0AzzCXrnEQFLsC5JbYlqWtSjOgHkUHlNNKUkpSRveC213jwQMjCxJU0%2BviI4bdbUBHKN9CmuinOTnGhhBDBR9XveyZJHAPB2Ij70O75sIP1WVNACStSkZhw5uHatxfzLkFYp2PkQKQw7o37K7KgOtT%2B2YmSriU9TvAA5TpaNe0ciq4Eh1mwziuEzjtn6jmeIjPkDmd62%2BYdlxNOZjmMbRKTwR8Kj0%2BhdEezjdlH6JODpD29k4dcFQjCuiP%2FBBjqkAY2q8RMp40ElAuT9HkpY3OUqPa%2FTe5GT8CdlJ1h2CNRq5zdfV%2B%2B%2BN1MZ2XYF1drZkMWmAEaemyxxu9Me5vhZJEjo%2BfIEWQOfw5iAoaosUhz6Pi%2FuW1%2B9h1KXdnAm3TCjPF7c0F6WugP8eUpv5ARof3ASZdx8%2BohniiCVulCQA6XnQLM0aZokXsSLu2MGtWqAx3ZGCNp%2BLJ2%2BoBEP6H2M2q9Tn4Tj&X-Amz-Signature=7523e43d1a6d0b1d51d0ee3600e96f6eef45df2389b85f740ece002c4d74e7d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CS5HQ6L%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDwtIorshw8iZbrMRI8dc3uCFv%2Blcdw9qexkkLcDHzR1wIgN2tyxlG2y6H1fHHZrP3m7uVUwU6vc96G9JPfecWrgwgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDptjofOqjT9H8ITuCrcAxfDdyDKg2SHnKifHpTVWSDgnn%2BPWuYY1FrAmIL1CcIgmfGvriim%2Bl1fHlgsLw5PBHklF3t9t4ZovTRzodhowtx1ujFPQ%2FIgJwBXj3XoovTq%2BTYDf9dZ6T7y6T9yXM%2F%2Fyc0SJAZipO6gv3zAL4HalhKw41DKlbfHjPj28I4kOj7Jjho8Z24Wlspa0e6oQpH%2B0t37bZ6NXv2r%2BvBwaHeA7QY%2FiV1KBnbeQIMBLmh%2BiAUsXmrJwFPpllEhNuly2mwU%2BdqktgcxEfyo1NDXuFhzSMyaAlzqySYmZg%2BAYYDIXVEH8Gy8dfmIOUfTiRDsEEUQY7v%2FKbsb4EqFZvslNAEmz7G%2BkSjnZ2OfWVeObTkndH8MX6BHmx3ltLGmgMiC5gX20z%2BQx1UQAmwQ4ujmQoVAVooXOToGczvP0Ye2Pn1izdCui0yXua8F9IZMt8PEYLgDta4JghPaoTxtamGO24K4rHbHnXdmSRGuyK3g5c4ZVn97CUd7kHbGyqBqXlAq0UaPA4aFVm5OjFJWuFoLuDIRGoSu9iQsj%2FkRHq1mH3g3p7%2FsGpxDsspDiZ%2FnPl%2FX%2FSXWhMIzt21J4%2BpTlciFg%2Bg8bAGBXM5X%2Fzi%2FMqyK39PZUaQoNPzXGVKdmUAdLH5KMNuI%2F8EGOqUB7h01tbbpKGwUdMNKsqN0j7QfGvnqunRB4AB7gfY2oZzmdw%2FZ9tbU48UYHRRiaYSWjhqG9%2BTnPL8FCsxHjib45vp59EkKU5pjnyDdKb%2BeLfj62JwQP9RVJazdaK2rM6jdM72dB9j6LpgdlqYXFOD22bNJRMbuHnSRyB%2FPuch7L27SNnzQVwPYMW6eRpG6UnyyoVebEePVhg%2FYc9WZlh%2F1pmnwZNlm&X-Amz-Signature=6ca8d69d5f747e6313548f0379547216b5058d9a02db72ea7c37c23eceec2dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3S5QVOU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDfyzstIu84Bjtb%2Bdi2wQaMamdm44cqdeb9HjVgUUMp2QIgZzndO9jr9fvGEFrwZEO628UGBdquXTr1k0PIOOB6cN0q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMPc8E9gut0VyM1c9ircAwelqmVFX9PLEbR%2BJQPNOJ0DlMcGB95%2FXxSgDxV98Nmyxy0QqaB8ovrS0VFkzCQVOi0kWd%2BohWyTyPOuG%2BxkdZ%2BUUomYkHlAwRojf9wxr9pRQFNwsmGkeLuzbl2w2sFnk9tcz%2FaNbHQky1Ih%2BZvBdcchsJWDOBfpxFbPtlS1TT69JANbE%2BH6MiLcjDW0kn1O78M52PWs3ytXOmhB%2BLQIG5MLyn4LTKY%2Fz17QimA2RuCl61HI2QjubjZrwefppgECU5zUxnWSVF067NwmbUjueuZILefwb5mQZHrGNJG6CK%2FSvc3%2F5MGzi7Ccw0Bc6pe0yKsTZhXbatIAcPGHzhIxjUzpt8SjBQtoF1SEmxPXSOE2ORnMs%2B5fMYC1p9BDsy%2Fg6BmPCevU3jH8hbuBsSO4fLJJiV%2FljrJ2EQK2YH8aMSG58i9%2FLiRyK054pqUFHQfg988iQnVDPrA7prQ5NCHl%2BxoXoqGCR5B8zRCpJ7ChFs4iQK459iXL77lfVTFFaS66tx%2F5m7GZMK3tPBw3zuXvd3bRl9PHM5%2FmRqOHs04tRR27ehilayI%2FODKeMBlMeHqfRBJi%2FZRj38nLSMZ0chDi9WuSsyAv8%2F9NR0jFnfNFCIPM%2BD71zlQXBUO2RNF5MJaJ%2F8EGOqUBUUhYOji0tHz7bC5o6WE31zvSRsOkiLPUGvdVUjiDgtQQw4laUShzCITuXpFHHFNzV8mr04uJ2TZG%2FfLcCcFud4DV1cmyqfnPUBkDSsIRRJNONerMGAsDh930G1vipwzLI1L54%2Fwkd1G9DzrxW4pTWHQNdq9jIj7BKqkeL8kB2VJCJKQExVuKctBctAv%2Bc4FM6y5Zj%2BKdl8oV9tTHK0Nh4OceXwNi&X-Amz-Signature=41322779c1545ae961dfc94f92ac26df63d81d7a708fb8d2dba2d561ae96c04d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
