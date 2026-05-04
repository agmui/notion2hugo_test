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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y56IG5MZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNwPIiomLGdO97xqI55jyuUf4q7qk3RPfoa5QG7P1EeQIgANaN3a5JJi%2FqmbWVJM%2FjAPUc30wiHd1FpOME5OjsurQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOoLy1DB7my%2B7uKrOyrcA8MpB%2FPyy00XNz5TRnY1JoycKWajS55XSQVJtRGJmUKZhrya6ZbeSftDuJwdmISMV38HK0pv3LKug3x486XV6o1q7zbD%2F%2FiyvPNaofYT5lrqUIZiD4yB6FYyM%2FCLrxg6jBzt%2B3PwWaBlPCPBlNzX%2FtgjgY1FuoibO%2FLdSIq5bqC62%2BZUP2pCNuVKmM1G6IEOhf%2FOmIuwcA1zy9UNKQVtfxkGudItqcjhV%2F%2BFfNge%2BLoOosjTbkdsujMcZ3Cq9tRVMSdt0%2BnlA6VVhta0JMV8kbJLWF9Ob%2BRaO%2BLuVm2G0K2FHvK%2FUY162V5zr%2F3fRMmKfvtwkXyVJROXTrVbDoYyAa8awXw2nQvZgwqtTgKN2SWST80ytjn4OmerLmyO6LugLWFdp1tEY5UsKWsA3nbDXx5GNOIURYa9%2BIGap6RD7762ruWYSGsj2OYfj4T2gmWCWvvfLOBzjTVGFvvHbYDn5keu95mvj30U7KQYVCB8lIUkjWigS53%2B5YH195h87E3N1SiLWmvnNOS%2B6DwJOJ836rH2SQ6dXk9Lg29EfIFtwgmhXbmS6WOxwjTLDED54QNJiMkdl7McFqM3Feit5GKQSaScGFLJr1zNJuO7K5pms2S1sgh4IRBo4XjR1mrtMKH2388GOqUBmZ1RrOvRmqQm82y9Nw9Hv0U63S0crObDdK08xs0qhh21utZxbBIJF3etOK9HDLnGXLDG9D1s8hhiPSloDuozRITydX7Q%2BgxVaaektTi%2ByAn2gXxJP4ETHLSsjUcn0RnhG%2FmExM4OjERA4na96Jk%2FB7qQG5ZTJpdCKfIj1z%2FtL4EDLRvdDnBjMWe5qQncPa4E0ql%2FQE7eT8Zv0VzTIuOJRbzF2iLU&X-Amz-Signature=77706800b3a70b3e64e1515ebdc632e2a91d4cf2770414f78823769a7b99df2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y56IG5MZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNwPIiomLGdO97xqI55jyuUf4q7qk3RPfoa5QG7P1EeQIgANaN3a5JJi%2FqmbWVJM%2FjAPUc30wiHd1FpOME5OjsurQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOoLy1DB7my%2B7uKrOyrcA8MpB%2FPyy00XNz5TRnY1JoycKWajS55XSQVJtRGJmUKZhrya6ZbeSftDuJwdmISMV38HK0pv3LKug3x486XV6o1q7zbD%2F%2FiyvPNaofYT5lrqUIZiD4yB6FYyM%2FCLrxg6jBzt%2B3PwWaBlPCPBlNzX%2FtgjgY1FuoibO%2FLdSIq5bqC62%2BZUP2pCNuVKmM1G6IEOhf%2FOmIuwcA1zy9UNKQVtfxkGudItqcjhV%2F%2BFfNge%2BLoOosjTbkdsujMcZ3Cq9tRVMSdt0%2BnlA6VVhta0JMV8kbJLWF9Ob%2BRaO%2BLuVm2G0K2FHvK%2FUY162V5zr%2F3fRMmKfvtwkXyVJROXTrVbDoYyAa8awXw2nQvZgwqtTgKN2SWST80ytjn4OmerLmyO6LugLWFdp1tEY5UsKWsA3nbDXx5GNOIURYa9%2BIGap6RD7762ruWYSGsj2OYfj4T2gmWCWvvfLOBzjTVGFvvHbYDn5keu95mvj30U7KQYVCB8lIUkjWigS53%2B5YH195h87E3N1SiLWmvnNOS%2B6DwJOJ836rH2SQ6dXk9Lg29EfIFtwgmhXbmS6WOxwjTLDED54QNJiMkdl7McFqM3Feit5GKQSaScGFLJr1zNJuO7K5pms2S1sgh4IRBo4XjR1mrtMKH2388GOqUBmZ1RrOvRmqQm82y9Nw9Hv0U63S0crObDdK08xs0qhh21utZxbBIJF3etOK9HDLnGXLDG9D1s8hhiPSloDuozRITydX7Q%2BgxVaaektTi%2ByAn2gXxJP4ETHLSsjUcn0RnhG%2FmExM4OjERA4na96Jk%2FB7qQG5ZTJpdCKfIj1z%2FtL4EDLRvdDnBjMWe5qQncPa4E0ql%2FQE7eT8Zv0VzTIuOJRbzF2iLU&X-Amz-Signature=24c03f8731fdf78d501eade88ac28d5d2e32dadc20e9ae9578e2120f9ca5c0f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y56IG5MZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNwPIiomLGdO97xqI55jyuUf4q7qk3RPfoa5QG7P1EeQIgANaN3a5JJi%2FqmbWVJM%2FjAPUc30wiHd1FpOME5OjsurQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOoLy1DB7my%2B7uKrOyrcA8MpB%2FPyy00XNz5TRnY1JoycKWajS55XSQVJtRGJmUKZhrya6ZbeSftDuJwdmISMV38HK0pv3LKug3x486XV6o1q7zbD%2F%2FiyvPNaofYT5lrqUIZiD4yB6FYyM%2FCLrxg6jBzt%2B3PwWaBlPCPBlNzX%2FtgjgY1FuoibO%2FLdSIq5bqC62%2BZUP2pCNuVKmM1G6IEOhf%2FOmIuwcA1zy9UNKQVtfxkGudItqcjhV%2F%2BFfNge%2BLoOosjTbkdsujMcZ3Cq9tRVMSdt0%2BnlA6VVhta0JMV8kbJLWF9Ob%2BRaO%2BLuVm2G0K2FHvK%2FUY162V5zr%2F3fRMmKfvtwkXyVJROXTrVbDoYyAa8awXw2nQvZgwqtTgKN2SWST80ytjn4OmerLmyO6LugLWFdp1tEY5UsKWsA3nbDXx5GNOIURYa9%2BIGap6RD7762ruWYSGsj2OYfj4T2gmWCWvvfLOBzjTVGFvvHbYDn5keu95mvj30U7KQYVCB8lIUkjWigS53%2B5YH195h87E3N1SiLWmvnNOS%2B6DwJOJ836rH2SQ6dXk9Lg29EfIFtwgmhXbmS6WOxwjTLDED54QNJiMkdl7McFqM3Feit5GKQSaScGFLJr1zNJuO7K5pms2S1sgh4IRBo4XjR1mrtMKH2388GOqUBmZ1RrOvRmqQm82y9Nw9Hv0U63S0crObDdK08xs0qhh21utZxbBIJF3etOK9HDLnGXLDG9D1s8hhiPSloDuozRITydX7Q%2BgxVaaektTi%2ByAn2gXxJP4ETHLSsjUcn0RnhG%2FmExM4OjERA4na96Jk%2FB7qQG5ZTJpdCKfIj1z%2FtL4EDLRvdDnBjMWe5qQncPa4E0ql%2FQE7eT8Zv0VzTIuOJRbzF2iLU&X-Amz-Signature=dc0a8f93b473a1777d5e862fb24bf4613aec956d9175129fd555798e3498d2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZFAG3YC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwEl6Y8SxXwIwv%2FeeLYVs881AXOM9SasAZzikpkvAWsAIgHg4n6ri2LieQh8yshSvGitEOsrO2dN57SVNnApxJU6Yq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDObQMaYTUKInXhi4YircA67Gh1Qx7hUbm31e4caxecUVhSkW09fsV9ePdjwvQnGx4fXlRpV2rGl9vlw3Y7YveFK%2Fq1ovRECM8AErfSVn%2BSEKCmuI97TJ%2BUSpdL1C54%2FL10%2FSjJlIf87WMjrhpjeKhFSsQIVK21P%2FdijJ9k32JF8EBUsEedhROW6yTSDo1m7ldKDxZgTKry7N7QPU3O2CIGZ7b4KXkjCV4Py9pmuh3ThJL%2B%2B6Zjg1c8kMAemJPpQqwH%2B2a5gw3yZyN08IaIJyYPz9wgzGwKkAAUCQran87U%2FX9nIZ9%2FpbLJPNNzRrTibVVaZXhVIGcRj9PWe8%2Fk8fuuEcP0bw%2BsfYOgxXsGc%2BIuBOuD9Qv0d46rgCeNAwaJUIVXqnaJayVY5q8GR61KRoPSCE7zAN98s5FAjl4CE1zjnNWLchCWaVJiSPZAwQOoMuqU7m1H9%2B619qbFN0RxwyWLbAGcsdQgdwm3NSYF75P6BOByFAaprLvXYus9HNCL4Wl6NNuvuuFnQZvx3%2BYnRDpd6li4%2F0JdlB74s6%2FugdfcmtEB8FnsFVuuiZ7SVcFic4O8VC%2FE1qVhSNVvRTGKZly3PpnLTz%2BYZ3AxnbTiJmQh%2BtgQ%2BViETmpn9WfXROJPXx8q8%2F97dpkXIykpcbMJT4388GOqUBIRYz6FELeHoG2QIGzGBCQaMmMh%2BMp8KWx8jPwOeWa1gYojn2D%2Bpksg272iHxf9ocwbgg0wwNyiM0lH26EhnEC%2B6zWeUa5piH8Dwnfqf1SKMu7CGFn2WyI1%2FqINK1aZqEt1j1KvocVJWUVusA%2FQRiT0HbczNtzEfdZfgkdWxnVThUkhVQSN6k%2BjIlAih61%2Fhd0IH7L80dRRoRuBDrBx%2BzBuqHF0Ws&X-Amz-Signature=c15440cf4b89699057076e0ea094531aae62a77bddd4d0bdb3f14c1249c46a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHEDRZAA%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9apHFWSloWodrMasPY2eJ7rUm9SbBYD7PY01oYu3uvAiEAlIgEbLShSu8%2FWTRSNeiPSfI9Pp367Cl9i%2FpA%2FMBbPCwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEUrah4SD8q%2B%2F74ntCrcAzvoOSfCZkMaodmQM3wBOgmQijxPrNyc%2FCPNZQ0mDjfArX8tAc35Q7W7C74lXvKqQSKieaEjm%2FvTi6VfT2bwFjeyq%2FbNVwdwrndZvJUAbsCHSy3JAO03CXV1nwN%2FvVU5rODGvaq8uAey5ihrbYyMslxTnyEC16FEZ7ejN%2FKFCwYHow83vy9bsyCzmTYUO6B3qMqumkfSrjgPzJUFFjiR1lzfxAfAkT95dHpo%2BGrrbz%2FmveJX5PNk6o3dB70fB5xLMz7Ff619ZydxLMV9440lEL1rQgxFP4R7PCwcNSPXHFyCGN1l05dnXFntmWLmMPDvXmZH9GPR71Bl9MKarwnaB1fAAUpEorIbSAaGMRdxKgmuxmb6RpZK34eUVQj%2FE0Ragh3hNbWMN%2FWt0e8Vq%2FSCj%2Bwf9gNCyGw4QNjyPLXu%2FNClrqeq4frS8ejemT6H44nnWzNBAlMStiURhS4UF1QqNRfgNCY99P0gGBsyPc1rPiwaQGSzDlOXBt%2BEs5cgO5SJzNFTaYpemK1mevrbDzMo1f0Qwz7Ngc3nfQtcOCIrIs9TEGz0F0XnZ7G7CBbthQ05p7JEEiqheEkSA%2B%2F0%2Fw%2Fh5nZ76hK5spQs8Wf29D4Axn%2BKqhhd%2BtBPsZhv9RgeMJj4388GOqUBBQqDLGwwjKa%2Bu4NiGGfD2tLpI7xwMUK7YUBdtL4ZpZlwUI6ErcWfxtzsJit%2FqaRTVk9dQcG46wDDmnRtVoIvAiPjb9VxOzhq1bdHbBJauKhhlJ7sf3U5crHQ8J2v87iaon8WlkUZ4u04eKCEWRp3BXmacdnEbL9wmZt64fXK6gtGhqNHJuK7WjYAe3xnEOAH6fUahsw6hpNF%2Fhlm6BCeprqnounA&X-Amz-Signature=c1a5389504842fdc318c885b35094e2d3d1ffb8b93e2e58768b4114fdcbea90b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y56IG5MZ%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNwPIiomLGdO97xqI55jyuUf4q7qk3RPfoa5QG7P1EeQIgANaN3a5JJi%2FqmbWVJM%2FjAPUc30wiHd1FpOME5OjsurQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOoLy1DB7my%2B7uKrOyrcA8MpB%2FPyy00XNz5TRnY1JoycKWajS55XSQVJtRGJmUKZhrya6ZbeSftDuJwdmISMV38HK0pv3LKug3x486XV6o1q7zbD%2F%2FiyvPNaofYT5lrqUIZiD4yB6FYyM%2FCLrxg6jBzt%2B3PwWaBlPCPBlNzX%2FtgjgY1FuoibO%2FLdSIq5bqC62%2BZUP2pCNuVKmM1G6IEOhf%2FOmIuwcA1zy9UNKQVtfxkGudItqcjhV%2F%2BFfNge%2BLoOosjTbkdsujMcZ3Cq9tRVMSdt0%2BnlA6VVhta0JMV8kbJLWF9Ob%2BRaO%2BLuVm2G0K2FHvK%2FUY162V5zr%2F3fRMmKfvtwkXyVJROXTrVbDoYyAa8awXw2nQvZgwqtTgKN2SWST80ytjn4OmerLmyO6LugLWFdp1tEY5UsKWsA3nbDXx5GNOIURYa9%2BIGap6RD7762ruWYSGsj2OYfj4T2gmWCWvvfLOBzjTVGFvvHbYDn5keu95mvj30U7KQYVCB8lIUkjWigS53%2B5YH195h87E3N1SiLWmvnNOS%2B6DwJOJ836rH2SQ6dXk9Lg29EfIFtwgmhXbmS6WOxwjTLDED54QNJiMkdl7McFqM3Feit5GKQSaScGFLJr1zNJuO7K5pms2S1sgh4IRBo4XjR1mrtMKH2388GOqUBmZ1RrOvRmqQm82y9Nw9Hv0U63S0crObDdK08xs0qhh21utZxbBIJF3etOK9HDLnGXLDG9D1s8hhiPSloDuozRITydX7Q%2BgxVaaektTi%2ByAn2gXxJP4ETHLSsjUcn0RnhG%2FmExM4OjERA4na96Jk%2FB7qQG5ZTJpdCKfIj1z%2FtL4EDLRvdDnBjMWe5qQncPa4E0ql%2FQE7eT8Zv0VzTIuOJRbzF2iLU&X-Amz-Signature=a4f0652eefe90e2c4df454a101eb0c5a03d7799e01f17f072d8ea0bc81326340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
