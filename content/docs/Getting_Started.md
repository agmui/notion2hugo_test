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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MEEBST%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXf8ffx%2Bd%2Bj0htoTUpPAhBk%2FOtpBaGWp9liVoxUTJ92AiBY2qjLRCO3pARI%2FYhlRJdfH0utRvfOlszxAO7g0bYi7CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BXWuNgsYV2gRp7TKKtwDSJiiXgFqy65IgXjQN8lDJ97OUWHVTr9rG%2BUtSE6dDqUdL%2BDTP1uYRwRrZxjySrfhmb23WdSTall68LXHg8QYbtLPjRaJxNoyQcVD6gmVeXXN%2Bohws2OFITeKeLfrC%2BUSJzKL4ONFMQlt1ke2gMjXQUN%2BQWIfdC5bK01Jj3RFllDImQ93Zf1qk89YfGf5IPOJV%2BWbgMg25hlYAfZX7GPVJqu6s4fDqs%2FkbH7%2B6Qk1wAPJTXpYnwgPVHro2Jc5IW%2FloESlnUi7I4skNrg9XwwepMEmO%2Fd93RGKRYRJy1ueZG21HC5POhSHszGUcbh0%2B%2FSClVzu9LTeEPAOyKyFndfjx1SZISq7PdMG%2BTuJydVLNx7iLiRzp7n%2FwnDcRKgYBcZJiKAjKJXf0Ap0lhqEWwsTOAD%2FG6Mwej%2FyeOiJ7pPVfH8HptS9GTaHHV%2BaKzOt5YXZT8iQKH2e3ykxeuMXMQDdFTGGARIzvLCSrDftNqPmhm8L2GUM6hCUe%2FpseJjpW4LihCJD%2B%2FOohYAwXHQt6rBlSGupw4bsH3%2FNjfhyTq8ZIIZrPIRFncmdDte6QN2NNnRxLMcaHmxunJXrhEEjZ8dXauvoS7sO2huEctyPyIIgg2fSDbjt7yxSPGyP6%2F4woL3TwgY6pgH9dkO5To87OBvIFViOpIzxuiKPNNd%2FQH9%2F1Vsuo8PSfgEgmeIveovZLxB9xfQNZVKBjq3v4Z2OSDOUW9HiD7FqMX2HnBZ0xZtUj0HPx5XMhshNifBnrbM7NaaFEAoHm%2BroeIhlwfuB0ZfBlp63%2BdlJ2U3FXGQrwqXwY9Y%2FRGxvFCAL%2F%2FCpvpOGMT%2B71CTqAshGa7HD8YciOgZhDTLvs6shOSUKbKmR&X-Amz-Signature=421e9a3c1061bd68645cbc641bed6e57d2aaa2f1ffa9ce4ffe4c08a104452d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MEEBST%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXf8ffx%2Bd%2Bj0htoTUpPAhBk%2FOtpBaGWp9liVoxUTJ92AiBY2qjLRCO3pARI%2FYhlRJdfH0utRvfOlszxAO7g0bYi7CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BXWuNgsYV2gRp7TKKtwDSJiiXgFqy65IgXjQN8lDJ97OUWHVTr9rG%2BUtSE6dDqUdL%2BDTP1uYRwRrZxjySrfhmb23WdSTall68LXHg8QYbtLPjRaJxNoyQcVD6gmVeXXN%2Bohws2OFITeKeLfrC%2BUSJzKL4ONFMQlt1ke2gMjXQUN%2BQWIfdC5bK01Jj3RFllDImQ93Zf1qk89YfGf5IPOJV%2BWbgMg25hlYAfZX7GPVJqu6s4fDqs%2FkbH7%2B6Qk1wAPJTXpYnwgPVHro2Jc5IW%2FloESlnUi7I4skNrg9XwwepMEmO%2Fd93RGKRYRJy1ueZG21HC5POhSHszGUcbh0%2B%2FSClVzu9LTeEPAOyKyFndfjx1SZISq7PdMG%2BTuJydVLNx7iLiRzp7n%2FwnDcRKgYBcZJiKAjKJXf0Ap0lhqEWwsTOAD%2FG6Mwej%2FyeOiJ7pPVfH8HptS9GTaHHV%2BaKzOt5YXZT8iQKH2e3ykxeuMXMQDdFTGGARIzvLCSrDftNqPmhm8L2GUM6hCUe%2FpseJjpW4LihCJD%2B%2FOohYAwXHQt6rBlSGupw4bsH3%2FNjfhyTq8ZIIZrPIRFncmdDte6QN2NNnRxLMcaHmxunJXrhEEjZ8dXauvoS7sO2huEctyPyIIgg2fSDbjt7yxSPGyP6%2F4woL3TwgY6pgH9dkO5To87OBvIFViOpIzxuiKPNNd%2FQH9%2F1Vsuo8PSfgEgmeIveovZLxB9xfQNZVKBjq3v4Z2OSDOUW9HiD7FqMX2HnBZ0xZtUj0HPx5XMhshNifBnrbM7NaaFEAoHm%2BroeIhlwfuB0ZfBlp63%2BdlJ2U3FXGQrwqXwY9Y%2FRGxvFCAL%2F%2FCpvpOGMT%2B71CTqAshGa7HD8YciOgZhDTLvs6shOSUKbKmR&X-Amz-Signature=4158a18422879214a37f40410e9f588a76ee50985d47ad6d31224aabff45c2d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MEEBST%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXf8ffx%2Bd%2Bj0htoTUpPAhBk%2FOtpBaGWp9liVoxUTJ92AiBY2qjLRCO3pARI%2FYhlRJdfH0utRvfOlszxAO7g0bYi7CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BXWuNgsYV2gRp7TKKtwDSJiiXgFqy65IgXjQN8lDJ97OUWHVTr9rG%2BUtSE6dDqUdL%2BDTP1uYRwRrZxjySrfhmb23WdSTall68LXHg8QYbtLPjRaJxNoyQcVD6gmVeXXN%2Bohws2OFITeKeLfrC%2BUSJzKL4ONFMQlt1ke2gMjXQUN%2BQWIfdC5bK01Jj3RFllDImQ93Zf1qk89YfGf5IPOJV%2BWbgMg25hlYAfZX7GPVJqu6s4fDqs%2FkbH7%2B6Qk1wAPJTXpYnwgPVHro2Jc5IW%2FloESlnUi7I4skNrg9XwwepMEmO%2Fd93RGKRYRJy1ueZG21HC5POhSHszGUcbh0%2B%2FSClVzu9LTeEPAOyKyFndfjx1SZISq7PdMG%2BTuJydVLNx7iLiRzp7n%2FwnDcRKgYBcZJiKAjKJXf0Ap0lhqEWwsTOAD%2FG6Mwej%2FyeOiJ7pPVfH8HptS9GTaHHV%2BaKzOt5YXZT8iQKH2e3ykxeuMXMQDdFTGGARIzvLCSrDftNqPmhm8L2GUM6hCUe%2FpseJjpW4LihCJD%2B%2FOohYAwXHQt6rBlSGupw4bsH3%2FNjfhyTq8ZIIZrPIRFncmdDte6QN2NNnRxLMcaHmxunJXrhEEjZ8dXauvoS7sO2huEctyPyIIgg2fSDbjt7yxSPGyP6%2F4woL3TwgY6pgH9dkO5To87OBvIFViOpIzxuiKPNNd%2FQH9%2F1Vsuo8PSfgEgmeIveovZLxB9xfQNZVKBjq3v4Z2OSDOUW9HiD7FqMX2HnBZ0xZtUj0HPx5XMhshNifBnrbM7NaaFEAoHm%2BroeIhlwfuB0ZfBlp63%2BdlJ2U3FXGQrwqXwY9Y%2FRGxvFCAL%2F%2FCpvpOGMT%2B71CTqAshGa7HD8YciOgZhDTLvs6shOSUKbKmR&X-Amz-Signature=9b849b7b9e3707f632fce6bca4c2867d533e07465807caf156da6c94ceb74158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMXFH3UR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIVi0Y%2BtqVWHH37iIX1vG4uPPPHrCXXCRcd5zKKRAUTAiEAtWdUtui5qj520PYaUO4BorsnDF7AfE8BSgL8dajwpmYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrTmexJrPTRIkDG%2ByrcA7Ani%2FpDp9C78tuuz8S0Al4Uh7jDwSlpjp7gHlDrCIcgtra3%2FhtLtP3LWK8WTmFMagTJv%2F2soXI%2BmuGRlvp4y%2FJeMBSL2mMeMln%2FzO2STKO4ZYPr5TCpEGwGREJmAkIf1z2XtKy9YDjQ72so8jUKpQw67NFxZBpjSBYt5j%2Bv%2FOh6MdBz9P3S%2BRJ5iBL6sQq%2Bg4vutMu%2BS3RPpIs6%2FNm7EVZH%2Fw%2Fob3F3V0WsWArtwlUmXF5wDdSneQMV30FRcAYxpxlaMaB%2BXOMF5w7gNk6RkxHnCMFuP04aizgdMwxAK8A2ZL%2Bu76Eo1HKCIosdP4K0qV3f1ov5LxKHOButXLkPiUx7OH5PdrneGtQ3abcvl8LKZsHPwuFY7ruok9PgSmqAuCyAXuoVNZHKxqUlo5hn9Mil22bNBKiuV1NHvPc8PuqqeG1ia5jZ5kvWQxTrC6ll6Koa4TXadl%2B1%2F0dBJXY%2BaqlWwJWnqAXBSk3%2BktngH5vPFYTypT66CyD4G7DUXRor9y09iiyykmmFwV%2BEOzxSM8PqTZc2EHUTVwa0ojV6sEm1VpsURzriy9seMWQAyqawT4CeeHTVaCvfgHFqXq2V1YpVM5TqPDqd5dnJLSjFI3hJuGNGaP7oQZ7TGaKRMPfK08IGOqUBsymgpK3vC5DH%2FOWQ3g4eD75A8HMnDjMLDDbRdKL4AdKhMuc1hw3XNBRX%2BduNF6F%2BmlayxMGVKkFhHRmb5DR9hZ1EQwPg%2F5jib1UQEZL070wBjKn%2BXcLSzvVTLopPISrkjSFgf6dylreGYSz2qwiLmGQxpL8mXeSpqhfKspnm7ZSMUJv4fhorzgooBslsd3KCSVvJc5a1amhE3Kjdo4vT0Z2dmnOe&X-Amz-Signature=9ed839e211bd968fc736a874787e5d248b52a4ad64aec5df203533229fbe6213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JNHH2FV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzjopO6E61btOOC01J1%2FXxrKOMTgUeeCQftIAyG3k%2BDAiBcFIJvXdnOEexrjK745Zz6ZYmyGoUU8pION2yBJCCHCiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FCZzoxacgFz0BIUAKtwDOINwSx43vUyHpbViCsYqjEJio%2Bg8G3uFwXiWAP%2F0z5ZWHwNih2fX%2FXYHbXRcNAQRSd%2BTwBPa8VpYRwCkxbkI7fS%2FvfYJ8inFNyviSN1odGQ4LJEjEzdi7Sog53p3KaIPCJnqbm%2BqYkazDCRBgjYf9liZBFNdzybJ9rbwBnTfhMARFG3JkzRtrvTT7jBLeP%2B1%2BpUAIT449Vjw0afxeIOLkHXSm6hO5%2B5Sa4jY8QZLpDU%2FthEe7TTfNwppm8EpRmc%2FpurF7Pl2wA0WndxfprNH7FAg%2Bxi4qlr3L%2BemCY6di5mH7sJokuzPE6qkoAOHDq8rWHuJYMXetAL9TIV%2F%2BJ1Mtpkoam%2FMsMMgxPmoShNldx60JcjSuZZSmN08yWNvViBKPdxCJSVaSsuLIFQnPsrH4BVnw9VzEjoIr1hnPMLyyNxwlNPwbljJb0ge%2FHHKVqA6R82aLPBI1e9d5sDJxfEXlaH4mZLd2nYQhF1rPTirSub3%2BOUYXXpncWWxr8K7XxPJhGbztrEDVEcMudC1Q%2F0SYwtEb5SZVhf%2BCTflNaoGbxEcMzl7PqXXX7lkVqQzO0%2BMbcYVFqiHLYF6fyIW78kJHolEMsRZx71s4tr6Vpzg3gPM1U66xQTNFhc7%2Fj4wqr3TwgY6pgF37KyQAfxhKko7Djpf2gHqQc6%2BosJQrtxNuhOEAj82%2BqQJhKJlb42ddUG9vGlztE1XKUYHtSK9cIxBxqgNQTr4PWDR5RsrsUiCGHRTf1BIJKPQPzEYSDpCleMRR5OuEBS8KArRqjFFog2XmGkWWmProuSDq1MLnoztkTpFHA21R8zznFWM1DmT%2FiDoX5ixrmBuwfsaXUA13EMjWwEoFMyLpGPr88Z6&X-Amz-Signature=aca9cba8f241509f4b7108fa977ab984ca8695cef6b42376c2f781b3b9878462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MEEBST%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXf8ffx%2Bd%2Bj0htoTUpPAhBk%2FOtpBaGWp9liVoxUTJ92AiBY2qjLRCO3pARI%2FYhlRJdfH0utRvfOlszxAO7g0bYi7CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BXWuNgsYV2gRp7TKKtwDSJiiXgFqy65IgXjQN8lDJ97OUWHVTr9rG%2BUtSE6dDqUdL%2BDTP1uYRwRrZxjySrfhmb23WdSTall68LXHg8QYbtLPjRaJxNoyQcVD6gmVeXXN%2Bohws2OFITeKeLfrC%2BUSJzKL4ONFMQlt1ke2gMjXQUN%2BQWIfdC5bK01Jj3RFllDImQ93Zf1qk89YfGf5IPOJV%2BWbgMg25hlYAfZX7GPVJqu6s4fDqs%2FkbH7%2B6Qk1wAPJTXpYnwgPVHro2Jc5IW%2FloESlnUi7I4skNrg9XwwepMEmO%2Fd93RGKRYRJy1ueZG21HC5POhSHszGUcbh0%2B%2FSClVzu9LTeEPAOyKyFndfjx1SZISq7PdMG%2BTuJydVLNx7iLiRzp7n%2FwnDcRKgYBcZJiKAjKJXf0Ap0lhqEWwsTOAD%2FG6Mwej%2FyeOiJ7pPVfH8HptS9GTaHHV%2BaKzOt5YXZT8iQKH2e3ykxeuMXMQDdFTGGARIzvLCSrDftNqPmhm8L2GUM6hCUe%2FpseJjpW4LihCJD%2B%2FOohYAwXHQt6rBlSGupw4bsH3%2FNjfhyTq8ZIIZrPIRFncmdDte6QN2NNnRxLMcaHmxunJXrhEEjZ8dXauvoS7sO2huEctyPyIIgg2fSDbjt7yxSPGyP6%2F4woL3TwgY6pgH9dkO5To87OBvIFViOpIzxuiKPNNd%2FQH9%2F1Vsuo8PSfgEgmeIveovZLxB9xfQNZVKBjq3v4Z2OSDOUW9HiD7FqMX2HnBZ0xZtUj0HPx5XMhshNifBnrbM7NaaFEAoHm%2BroeIhlwfuB0ZfBlp63%2BdlJ2U3FXGQrwqXwY9Y%2FRGxvFCAL%2F%2FCpvpOGMT%2B71CTqAshGa7HD8YciOgZhDTLvs6shOSUKbKmR&X-Amz-Signature=0c08f4d2dc4ddd86e753ff9a48f50f5ea516d4258b29609d252a4298f0156009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
