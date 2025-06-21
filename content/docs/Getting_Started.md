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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOFXRMC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpseDr85UXjC4uyIEmiEVhFQy8bV4a%2BFKZQhhVcbY0XAiEA0vmWJkyVuPpla%2BHb9qwpSfAe8MQ40t4D32s84t6V3lYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdITuPBaKSOivwhNircA1FKiPv3Dum8r9nrQ96TmVdtBsA1i7ajAN7V%2BPBqlvPcriwtiBeSRnMYuZgYEB1pWlTV7u7eRwyTEMtgf%2BjdV40VyXBYkFQzg5X0mQ3KA5%2B43925Z4hgWm6tSSR1OHGYwb7tN2tWwfD6bzUlVzB1zF8RJZPmOzVc7nzMmZeSWM0ffWOsifiEJHd17jx14Wi%2BUD0nf%2Bgaxxmgfuht4gaKNps%2F2P92wto0mMk378yUn8aD6BjYHSW5uYk0X%2BWa0sIXaCYYJ7ofNxGhT8Rn3Nk1e%2BNAJrFKi8Nc1gpj1h3oHk0PjcbuRdMlmmlK%2BGridWaroVUdMgoHgwC%2BF0O%2Fzpoj9RZVz0V6hNRxIBSYTOVCAVWWt5OP7SIzuGHIhFjQbeVb2UzrgAhAiHLk4JPH7QEklpEbZxfHLs1VTZlLjhhP53n9KbjNYw%2FoM72RlSOi%2FtV%2BO7PdEdtOal1kjCwa%2BLif%2B%2BwtSD80BOaTq9xHvJ%2FQE1wao%2BNWtWhHvP05Pfpk8UryQAoFPsL%2BOk95VEWV4dGp8eG%2BguaskVg2y2jX3IcZp%2BH8EeOz3GSfTSfC7z3ZX0XPiAA9j%2Fn2xS7BSF9T3QLAOHMCLrWg7QBgRh4Pe7lAt5Z7PQHn1Mt8Hd9a6DnAMNez3MIGOqUBkeC%2FrfmmhXJ9fNgPWO5vhEFupwfg%2FQP7MYkMTQ%2B9gXG2lDRV2mjl2l7j5EhbPETHEdNFg2Ay9hG6zZI06fh0Mo85AvbxwF6Vw7v1jQLgigbjkbD%2BQ2g%2FVOvjSoXU7IWw2jaQIpua9PL%2Bvook4VqSbYRca9MPOmoJzATEXzgemlsbP0pwCokRQMJfE3BWUN7UQTIgdyi2lJoXRfRtonV7fQ8aCPOj&X-Amz-Signature=5a23ef2916653aaa668b82e24cd1d4f1ce1f9fa0ef6a432e513321001ea19ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOFXRMC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpseDr85UXjC4uyIEmiEVhFQy8bV4a%2BFKZQhhVcbY0XAiEA0vmWJkyVuPpla%2BHb9qwpSfAe8MQ40t4D32s84t6V3lYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdITuPBaKSOivwhNircA1FKiPv3Dum8r9nrQ96TmVdtBsA1i7ajAN7V%2BPBqlvPcriwtiBeSRnMYuZgYEB1pWlTV7u7eRwyTEMtgf%2BjdV40VyXBYkFQzg5X0mQ3KA5%2B43925Z4hgWm6tSSR1OHGYwb7tN2tWwfD6bzUlVzB1zF8RJZPmOzVc7nzMmZeSWM0ffWOsifiEJHd17jx14Wi%2BUD0nf%2Bgaxxmgfuht4gaKNps%2F2P92wto0mMk378yUn8aD6BjYHSW5uYk0X%2BWa0sIXaCYYJ7ofNxGhT8Rn3Nk1e%2BNAJrFKi8Nc1gpj1h3oHk0PjcbuRdMlmmlK%2BGridWaroVUdMgoHgwC%2BF0O%2Fzpoj9RZVz0V6hNRxIBSYTOVCAVWWt5OP7SIzuGHIhFjQbeVb2UzrgAhAiHLk4JPH7QEklpEbZxfHLs1VTZlLjhhP53n9KbjNYw%2FoM72RlSOi%2FtV%2BO7PdEdtOal1kjCwa%2BLif%2B%2BwtSD80BOaTq9xHvJ%2FQE1wao%2BNWtWhHvP05Pfpk8UryQAoFPsL%2BOk95VEWV4dGp8eG%2BguaskVg2y2jX3IcZp%2BH8EeOz3GSfTSfC7z3ZX0XPiAA9j%2Fn2xS7BSF9T3QLAOHMCLrWg7QBgRh4Pe7lAt5Z7PQHn1Mt8Hd9a6DnAMNez3MIGOqUBkeC%2FrfmmhXJ9fNgPWO5vhEFupwfg%2FQP7MYkMTQ%2B9gXG2lDRV2mjl2l7j5EhbPETHEdNFg2Ay9hG6zZI06fh0Mo85AvbxwF6Vw7v1jQLgigbjkbD%2BQ2g%2FVOvjSoXU7IWw2jaQIpua9PL%2Bvook4VqSbYRca9MPOmoJzATEXzgemlsbP0pwCokRQMJfE3BWUN7UQTIgdyi2lJoXRfRtonV7fQ8aCPOj&X-Amz-Signature=b6946f942fb8a5c5f554859c998ba21b740ff0ca1a26eec6d23ed8e3e767df06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOFXRMC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpseDr85UXjC4uyIEmiEVhFQy8bV4a%2BFKZQhhVcbY0XAiEA0vmWJkyVuPpla%2BHb9qwpSfAe8MQ40t4D32s84t6V3lYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdITuPBaKSOivwhNircA1FKiPv3Dum8r9nrQ96TmVdtBsA1i7ajAN7V%2BPBqlvPcriwtiBeSRnMYuZgYEB1pWlTV7u7eRwyTEMtgf%2BjdV40VyXBYkFQzg5X0mQ3KA5%2B43925Z4hgWm6tSSR1OHGYwb7tN2tWwfD6bzUlVzB1zF8RJZPmOzVc7nzMmZeSWM0ffWOsifiEJHd17jx14Wi%2BUD0nf%2Bgaxxmgfuht4gaKNps%2F2P92wto0mMk378yUn8aD6BjYHSW5uYk0X%2BWa0sIXaCYYJ7ofNxGhT8Rn3Nk1e%2BNAJrFKi8Nc1gpj1h3oHk0PjcbuRdMlmmlK%2BGridWaroVUdMgoHgwC%2BF0O%2Fzpoj9RZVz0V6hNRxIBSYTOVCAVWWt5OP7SIzuGHIhFjQbeVb2UzrgAhAiHLk4JPH7QEklpEbZxfHLs1VTZlLjhhP53n9KbjNYw%2FoM72RlSOi%2FtV%2BO7PdEdtOal1kjCwa%2BLif%2B%2BwtSD80BOaTq9xHvJ%2FQE1wao%2BNWtWhHvP05Pfpk8UryQAoFPsL%2BOk95VEWV4dGp8eG%2BguaskVg2y2jX3IcZp%2BH8EeOz3GSfTSfC7z3ZX0XPiAA9j%2Fn2xS7BSF9T3QLAOHMCLrWg7QBgRh4Pe7lAt5Z7PQHn1Mt8Hd9a6DnAMNez3MIGOqUBkeC%2FrfmmhXJ9fNgPWO5vhEFupwfg%2FQP7MYkMTQ%2B9gXG2lDRV2mjl2l7j5EhbPETHEdNFg2Ay9hG6zZI06fh0Mo85AvbxwF6Vw7v1jQLgigbjkbD%2BQ2g%2FVOvjSoXU7IWw2jaQIpua9PL%2Bvook4VqSbYRca9MPOmoJzATEXzgemlsbP0pwCokRQMJfE3BWUN7UQTIgdyi2lJoXRfRtonV7fQ8aCPOj&X-Amz-Signature=444144b56846b12a79e6d8f6af27cd5670d4cfdf97edf076b748b2ab76a0675a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CAMEIXH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMVa3VJ0xwq6bOieCvUVA6tISNHAa5vHrZn1iDaZ%2FkEAiEA%2FQa%2BLBtByv2h4sFW2qiX9LMPPZRby9bPjPR%2Fug6QeL8qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn53qNWlXPQbpXlcSrcA4%2BzgTKucB8ZrzALxUnZJULkMKxVJcZehM4PRFiT5BdiQNajH6uRVwbP4KbWgpaI1zrMF%2BG9dX53IsV90UzFaCcwaG8tjn96OBIFL6sul%2B3aSssU7pOyaATfmbuS%2BhlkQ0wVwNXOpIQ3WM%2Fess1t9pDTsWxMhv1DllL1KDZOH6Fx0DTyTXTFtgArtuc%2FqM776p1tyGAKE2NPQi71LJvGL74Pj8uRwole9KrjdCCtgd03YHNzT9cWm3gm%2FhfMQKQ2NLW6H2NVZx1jDEVYDO2F998aEZYBuBF14t1Fsq7geFK5lkofrxb8Jj%2B69rmFIx5G17Z7rXM3%2B1j0ErjO07XnXMSd08mKvKa6ejiSkjdSimicXk7y7I1Wxket2B%2BSXBoJD8WWtsbuHfJ2KeUQp4Itb77Ow6FFXlaOr6a%2BkLkRhVTrSgF7ER4mjnj0FsSNP9s5VaTMJaU1Ksh85sF3qoUbNfBR22W6Ptp5ixgDOmSwI2%2BpFxy39m5euxUHj25mzveC9uEMxZ135Y2fCSdvPK9iZMwQ2XvNFO4BVQQ62HL8eBdvGlgsYRrWeoiCfo%2BVvVffMbWl3vQ9bzaL%2BjnPIQLJQEWlqK3QsK3AOQme2Z5F71Tfd7iuHI99ckAWQBfOMLuw3MIGOqUBie1nr4OZQ3m3VuQvIBf8iVz1aQ6HBNEPkn00DLTdOQFnmofiD53w9NjMl2ChRp8iYcLykuZMyTgzn79EMUKXSN%2FWDywTlASOvFZS%2BKmoMw1NCgxA3sNuXeocxuGHnO8ZarYylMRqQ3JHA4s8Kjpn0oGE9kl1O6kgRLYkVbYH3X%2FH33oXXviW0qPf0MDaUYhzrU%2Byjvs1VApGnorQg%2BwvKV2vQYoa&X-Amz-Signature=733bd77608b2f482de4b5407ad904260e9f92fdb390232313feeb907179758f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBVY5RY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT76tdGrdHiOPeP7PxZkMcorOwtWN0cQpZZDnBf6ZtmQIgKA3Z1OF9ZbB%2BPtQqEMdmiYhBPYOifk97MpNVh12YiisqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcvbvNNoLFs9N6gzircAxb8vn6RfJQU0rC%2Fi%2B%2FfozO7wKzn3EGKCsJSJjda78D8tRTmKywHIwNT5DhKnTJb6RDaNoa1etvMF3qAD%2FzQE%2FyzbSk%2Fh2mr1QBQo3b241lmlmWSX%2Bmc3Oi5tOaaBr%2F3HivtuxiaZEj6gGUFo3T27OfgHnv%2B7GAiAhOMQH1fEoIRH8TPCxr0wuQt9Pa3LobUdm9q4NkFlloVq5q8yJTmtgvEf%2BOv6xgbqdaFmNemlV02k%2FrgB%2FOqz1DNeoz2QuKxBDzWTLRtZu6onussXdP8%2FJjT10cF92Ua3Kq7PycoZEENNHs93icZ6VZLf8Z91fb1jwrqHhtEtdDEsIT3p7IcgPgR%2FOVRQbBxsYlPBcGS19t21Iel%2B39Y4lvV24RXrLkkkekffy4lcZJl5k9CXpuZXq4reY256YrjwAcEkkhgO9dG9C5gO60cWk1r%2FrYxnQo20CkM3U4mkQzWLQo2%2FNoJRvcNS%2FW%2FEzQF3HC64kaP%2FkZKbhPPO58x1rvW4u0zw9v9ZH6GarYbRnNG2MQN%2F5ggFFKicrjH5cpXyZtbdXCBfkD220%2F7ddhGTEEEufYncPPXt%2BSfKFbNgFSqPj0kM2wriGutiayD7p22xedp%2FwZNPROE70lxd9M0pnn8%2F7NJMJSx3MIGOqUBZ94UWuWVDyHqcX29NavcWo2ydxQVA3Iyxwqr2ghEUFb86pV0q%2FHmP7G%2Buk%2F2NeJu2V%2BIY2zzISAazK3uIVGvJ1dSBtbTf76E%2FB8Sl1z%2BWGNCqafik2OEWSuJCFd9bGmIs8C1%2FxjSCMswu%2FrVEW3IhlSWWYXMgQPbMHjmUafWF2pSSjJsgQmFkAhUl6Rp1kphc7PNFORoGaOwbtcBTubokSMte%2FV8&X-Amz-Signature=5e167a9fc3680306418bf2dc78a11acc6b33a475ca87c431ac84dd08f56cf0dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOFXRMC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpseDr85UXjC4uyIEmiEVhFQy8bV4a%2BFKZQhhVcbY0XAiEA0vmWJkyVuPpla%2BHb9qwpSfAe8MQ40t4D32s84t6V3lYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdITuPBaKSOivwhNircA1FKiPv3Dum8r9nrQ96TmVdtBsA1i7ajAN7V%2BPBqlvPcriwtiBeSRnMYuZgYEB1pWlTV7u7eRwyTEMtgf%2BjdV40VyXBYkFQzg5X0mQ3KA5%2B43925Z4hgWm6tSSR1OHGYwb7tN2tWwfD6bzUlVzB1zF8RJZPmOzVc7nzMmZeSWM0ffWOsifiEJHd17jx14Wi%2BUD0nf%2Bgaxxmgfuht4gaKNps%2F2P92wto0mMk378yUn8aD6BjYHSW5uYk0X%2BWa0sIXaCYYJ7ofNxGhT8Rn3Nk1e%2BNAJrFKi8Nc1gpj1h3oHk0PjcbuRdMlmmlK%2BGridWaroVUdMgoHgwC%2BF0O%2Fzpoj9RZVz0V6hNRxIBSYTOVCAVWWt5OP7SIzuGHIhFjQbeVb2UzrgAhAiHLk4JPH7QEklpEbZxfHLs1VTZlLjhhP53n9KbjNYw%2FoM72RlSOi%2FtV%2BO7PdEdtOal1kjCwa%2BLif%2B%2BwtSD80BOaTq9xHvJ%2FQE1wao%2BNWtWhHvP05Pfpk8UryQAoFPsL%2BOk95VEWV4dGp8eG%2BguaskVg2y2jX3IcZp%2BH8EeOz3GSfTSfC7z3ZX0XPiAA9j%2Fn2xS7BSF9T3QLAOHMCLrWg7QBgRh4Pe7lAt5Z7PQHn1Mt8Hd9a6DnAMNez3MIGOqUBkeC%2FrfmmhXJ9fNgPWO5vhEFupwfg%2FQP7MYkMTQ%2B9gXG2lDRV2mjl2l7j5EhbPETHEdNFg2Ay9hG6zZI06fh0Mo85AvbxwF6Vw7v1jQLgigbjkbD%2BQ2g%2FVOvjSoXU7IWw2jaQIpua9PL%2Bvook4VqSbYRca9MPOmoJzATEXzgemlsbP0pwCokRQMJfE3BWUN7UQTIgdyi2lJoXRfRtonV7fQ8aCPOj&X-Amz-Signature=d36763eb8a97a79e349a465b5b172bc224f5206639713d53fe4a4871ef99f9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
