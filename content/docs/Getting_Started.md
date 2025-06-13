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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRAAJM3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFgsZbekEcYrwDeFLlF4%2B9gyy56t4St1Q1Ueh5tszXLmAiEA1%2FC1Hw4DuprHn9JdPSX3lwjzgBza9sKvA%2BxsIsJt3o0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU5mccB6rkcjS%2FqzSrcA58QxOKsyK4pv0Iq7Vah2fUffffR62m3XK39HSEbYTvJV5iw%2FEOu3lKkX8rOwe4NEIatoViVfgKzS6yS4c4n6sFiMFib415ORQcSg8%2FkPqk323h8uXecsCsWUG%2BOoCCQazJW1rKyLFHpRj%2B0LDdcKtb8GaVjV%2B2zh0%2FxUxwgKqoxvySPQ8n1IyT0uzNna1Iqs%2BClMl%2BIq2jrPV09%2FrGm5FhcNpazGsA%2Bi3IKDosnUfHsjmOg4Xy2A1qBgwHV0EFb%2BqgsEOV%2FKMQWLksZq4jSK5ijYhuP4aZOXDeLdR4eLo67OkyQVKiWlf3jqTv8nANfXDpob8e7ksI%2F4hILCDuLQTog4CTO6U9vR50WiPImChKJpOmbDXHIkVYCZtnlx1pgDcaeuSTLKysH7gF2NGrLkGiex4bn18KRL2SQc1aktn0sRVelV2rRskUtgeCZ4kWTfg9iqPid6SZxMVC%2FnUjfyl9LO2t7nGYv%2F1L2vqgjHunQkM%2BFdG4sOzQ0VVLDbdjDIRJzIzoIN9yTGMuWfe0LuqF9ZJgHCgLvQFkIwoMZS4OByHMqYwwUFW9Zkn1IZqDhBJDBjw%2FN%2F%2BlGWD8ixJVLoF0RnYnDRLhMqRldsBQF3blgHNBAzmguZMgdjqHVMMe4rcIGOqUBX%2FdXfhEq%2FDcz8Z%2FKLOa2e6MEjwDkAfSKl6gwF%2FTBMbBpNLI33TOEMfsSYW4JRPyBImMpJBs1Dm66na9VwygZ9YEKcOHhBrUvvRo5qK%2Fhmuiojd7g8jSfrLUWXV52wJKVL6b3ON4sC2ikUsmMwlPo14CxRYvOzT3AduZ5Dgm3Sg%2B%2FMs3MeTPrihOqn2r8nHukzc2YVRZlIbh%2F48kHhgT73E41qHBx&X-Amz-Signature=4e592642f8576032bfce0d4b2159fba8447c5acf6c0b6ceeabdb29f49c06b071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRAAJM3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFgsZbekEcYrwDeFLlF4%2B9gyy56t4St1Q1Ueh5tszXLmAiEA1%2FC1Hw4DuprHn9JdPSX3lwjzgBza9sKvA%2BxsIsJt3o0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU5mccB6rkcjS%2FqzSrcA58QxOKsyK4pv0Iq7Vah2fUffffR62m3XK39HSEbYTvJV5iw%2FEOu3lKkX8rOwe4NEIatoViVfgKzS6yS4c4n6sFiMFib415ORQcSg8%2FkPqk323h8uXecsCsWUG%2BOoCCQazJW1rKyLFHpRj%2B0LDdcKtb8GaVjV%2B2zh0%2FxUxwgKqoxvySPQ8n1IyT0uzNna1Iqs%2BClMl%2BIq2jrPV09%2FrGm5FhcNpazGsA%2Bi3IKDosnUfHsjmOg4Xy2A1qBgwHV0EFb%2BqgsEOV%2FKMQWLksZq4jSK5ijYhuP4aZOXDeLdR4eLo67OkyQVKiWlf3jqTv8nANfXDpob8e7ksI%2F4hILCDuLQTog4CTO6U9vR50WiPImChKJpOmbDXHIkVYCZtnlx1pgDcaeuSTLKysH7gF2NGrLkGiex4bn18KRL2SQc1aktn0sRVelV2rRskUtgeCZ4kWTfg9iqPid6SZxMVC%2FnUjfyl9LO2t7nGYv%2F1L2vqgjHunQkM%2BFdG4sOzQ0VVLDbdjDIRJzIzoIN9yTGMuWfe0LuqF9ZJgHCgLvQFkIwoMZS4OByHMqYwwUFW9Zkn1IZqDhBJDBjw%2FN%2F%2BlGWD8ixJVLoF0RnYnDRLhMqRldsBQF3blgHNBAzmguZMgdjqHVMMe4rcIGOqUBX%2FdXfhEq%2FDcz8Z%2FKLOa2e6MEjwDkAfSKl6gwF%2FTBMbBpNLI33TOEMfsSYW4JRPyBImMpJBs1Dm66na9VwygZ9YEKcOHhBrUvvRo5qK%2Fhmuiojd7g8jSfrLUWXV52wJKVL6b3ON4sC2ikUsmMwlPo14CxRYvOzT3AduZ5Dgm3Sg%2B%2FMs3MeTPrihOqn2r8nHukzc2YVRZlIbh%2F48kHhgT73E41qHBx&X-Amz-Signature=8df6262cf129a76eed34a9ac852a831bdffddd90a64232ba5733c3542464a205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRAAJM3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFgsZbekEcYrwDeFLlF4%2B9gyy56t4St1Q1Ueh5tszXLmAiEA1%2FC1Hw4DuprHn9JdPSX3lwjzgBza9sKvA%2BxsIsJt3o0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU5mccB6rkcjS%2FqzSrcA58QxOKsyK4pv0Iq7Vah2fUffffR62m3XK39HSEbYTvJV5iw%2FEOu3lKkX8rOwe4NEIatoViVfgKzS6yS4c4n6sFiMFib415ORQcSg8%2FkPqk323h8uXecsCsWUG%2BOoCCQazJW1rKyLFHpRj%2B0LDdcKtb8GaVjV%2B2zh0%2FxUxwgKqoxvySPQ8n1IyT0uzNna1Iqs%2BClMl%2BIq2jrPV09%2FrGm5FhcNpazGsA%2Bi3IKDosnUfHsjmOg4Xy2A1qBgwHV0EFb%2BqgsEOV%2FKMQWLksZq4jSK5ijYhuP4aZOXDeLdR4eLo67OkyQVKiWlf3jqTv8nANfXDpob8e7ksI%2F4hILCDuLQTog4CTO6U9vR50WiPImChKJpOmbDXHIkVYCZtnlx1pgDcaeuSTLKysH7gF2NGrLkGiex4bn18KRL2SQc1aktn0sRVelV2rRskUtgeCZ4kWTfg9iqPid6SZxMVC%2FnUjfyl9LO2t7nGYv%2F1L2vqgjHunQkM%2BFdG4sOzQ0VVLDbdjDIRJzIzoIN9yTGMuWfe0LuqF9ZJgHCgLvQFkIwoMZS4OByHMqYwwUFW9Zkn1IZqDhBJDBjw%2FN%2F%2BlGWD8ixJVLoF0RnYnDRLhMqRldsBQF3blgHNBAzmguZMgdjqHVMMe4rcIGOqUBX%2FdXfhEq%2FDcz8Z%2FKLOa2e6MEjwDkAfSKl6gwF%2FTBMbBpNLI33TOEMfsSYW4JRPyBImMpJBs1Dm66na9VwygZ9YEKcOHhBrUvvRo5qK%2Fhmuiojd7g8jSfrLUWXV52wJKVL6b3ON4sC2ikUsmMwlPo14CxRYvOzT3AduZ5Dgm3Sg%2B%2FMs3MeTPrihOqn2r8nHukzc2YVRZlIbh%2F48kHhgT73E41qHBx&X-Amz-Signature=d0da76448ed3c1b4dcef26e5ae489034ba6bb3c4ddfc793ff3b0179ca0fe65bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXSRFSQQ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDFYduNXURbeBYpOsjiKJyZqN81h70bD8YOSr%2F2rjGrkAIgIVppfMhhkMQaw5app9cFGeg09TH54wuJNoNP0Qv2osgqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe3tuh7uEzPImYG%2FircA8p7ggZs0%2BvxOpitlGd4OyITkx0bqKbmFfUZxW4RlkQAAoe6xAhf%2BO%2Frih9iV2pB3km1LjRkprtlVg0K2em8iyTm%2Bdkb3YkRcqbWEKYBkKeT8MNoSOHRFfjzG7KPU%2FFgwzYRDbUJT1k1Cs9whjsXwLhuBykUW7a88Ra2PVxdn9Og78yTTIxaPGt%2Bv7tFBCkRalP2%2FV%2BemJ0RvsGkJPwRrGboUNukU5MOZoCe6EXUP9AXMerfF1bVELNf%2Fue3EiDlh1rnCldg2fbkFI2GUzOjjS3l9LaiBV5dZn0yso%2BofWTye2amSgiAYn1hSjJ3%2BhGlOjAaHHDdS26N9m71bkrALhwEyYTPuvnsWdd9MmFv%2BIeBatu%2BB919OFUMd%2FGdJ4iu%2FJ97R86i9ZHnpkWVD86RlkWs8WCTPcJJNfBBznI2DRYoEy9rh2473cOkUJNHAjVTxONUEsbyXSxwaoYJbKwVJPE1NfJV3%2B2f7pCz5bG3jaa0zGH8SoPafwUwb8t5%2FxsmreZGXa%2BzUZJ0%2B%2FZ5mFeieF1Ssh284T5G96ic8k3U1TBsef85YhFRx9TlM9XiB2buRNpaQVR%2BfhmxG7mPfWg0l%2B5UV%2BLQ6unCkt4zliaLmGIvNv%2Bv1njBnuQgIRdVMPK4rcIGOqUBOfhBbrkSFLO%2FgvMEq5jIBaMJIXaX%2BeDqrm5mPMPoX21uEhRWf3MDnc8FJMdS0XULKwY%2B7ptCQzcnBFVjOz2N7mTHy7%2B0XhaAkvZkAWdVGOkLu4dsFCIWBrQUmLdNJsdhiO2yXis4mr0P1W9QilH1lSPku3I4Ekfj%2Bc2Fw8OcVeNI7QbqGribWHXGIi2hfZVcGXOrMzGWDAtyZ3D5TK%2FKyF7wcwY%2B&X-Amz-Signature=bc9518002837d923ed555fb55c80111439d5919b45af887327b7aa8bd56a5a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGCUDEQQ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDL2d7lkrZf%2B1f7u2dWqFJ7t1mA5C6LF7JScvg4qiy6IAiAOIZaQrzxdAbv2tqwVZ79M6mw1Y82OUZOEcIZcheiPNCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM03fX7iM9ZOBXKAFvKtwDvhWMGf1RvKqF66KW3oYWAG9qh%2B56FMfg2uUtV8O4cbBHLTbFo5SQOGS3RnSG0jmwWxri4qCUneLF6ys6C3tRuG7HSyWTM57Ak%2FNqmgqxln7c5UmA%2FhrargDHjeSOnGQTUIcaRN9Rdm37MYhbL%2BRhuItzul1fP2aoU326amS%2BPWZaAi1oWBSaKC8SudgmYPXBTXz06gUwJLAHSKL%2FhKOabwJzLC7VwVm9Bui%2Bqgo70jU62BcIQ9owRLxuE1e4dAu3xT9DbZNhtHquhlf02SBJ10teCVA4x8Cr4cMIWFaiNUFLA7ETcv3sTJE40ju%2F8%2FL%2FLF2byMUl9GNaynA9xU9YFiwI43OkuJNjnqXs2b59Ef7h4PWevsteVvZX%2BT%2FENFqmSdAeCnN%2Bovoq5RtYpEHo0JQvJkjHQmZKmUEgrM7rh3Ec0eS9gr90pLvmF195qLQzeuhLyRvpEADkEtU9Aa4%2BqhcBYAJlsBUgscVY0W9L7wYpKZqruph%2FOkx1tFgqfg7e%2FbSgAzPUVlQ6h6w%2BG4b4GcPQsnRDeoSjSNaAw8U9vANPQbrvAT2NTPC7dWpoRci2rdsb2KzdAa6lIOnr7LYrzAWshqeYofrqJY1C0y0XjsNbCBZG9oL6Woa1WCkwqrmtwgY6pgHxLwfqFNy2DYyeLYxA1ylT1QjGii16MT8%2F6EjVo%2FlmOta4qTBbwrBwjDqIZRGzgRdteQpuS4HnFx9mr7zw7Sy24Zw9oJ1T5IW7p5ZdfJprxdD4N2rMRBU%2BselFs5I0ERYoE3mYCCgH4inRrE8C31DuztcgmhDJ4vIyHUROZit4XEKD8x6G9WJvxbqTJjzaehHoGw%2Bpt6lXrIpvqfog6nZMVPfrzYqa&X-Amz-Signature=4d300f13d0bc877011468315a11fa0a18242d1b00dbeea05a8a0232bc845516e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CRAAJM3%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIFgsZbekEcYrwDeFLlF4%2B9gyy56t4St1Q1Ueh5tszXLmAiEA1%2FC1Hw4DuprHn9JdPSX3lwjzgBza9sKvA%2BxsIsJt3o0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU5mccB6rkcjS%2FqzSrcA58QxOKsyK4pv0Iq7Vah2fUffffR62m3XK39HSEbYTvJV5iw%2FEOu3lKkX8rOwe4NEIatoViVfgKzS6yS4c4n6sFiMFib415ORQcSg8%2FkPqk323h8uXecsCsWUG%2BOoCCQazJW1rKyLFHpRj%2B0LDdcKtb8GaVjV%2B2zh0%2FxUxwgKqoxvySPQ8n1IyT0uzNna1Iqs%2BClMl%2BIq2jrPV09%2FrGm5FhcNpazGsA%2Bi3IKDosnUfHsjmOg4Xy2A1qBgwHV0EFb%2BqgsEOV%2FKMQWLksZq4jSK5ijYhuP4aZOXDeLdR4eLo67OkyQVKiWlf3jqTv8nANfXDpob8e7ksI%2F4hILCDuLQTog4CTO6U9vR50WiPImChKJpOmbDXHIkVYCZtnlx1pgDcaeuSTLKysH7gF2NGrLkGiex4bn18KRL2SQc1aktn0sRVelV2rRskUtgeCZ4kWTfg9iqPid6SZxMVC%2FnUjfyl9LO2t7nGYv%2F1L2vqgjHunQkM%2BFdG4sOzQ0VVLDbdjDIRJzIzoIN9yTGMuWfe0LuqF9ZJgHCgLvQFkIwoMZS4OByHMqYwwUFW9Zkn1IZqDhBJDBjw%2FN%2F%2BlGWD8ixJVLoF0RnYnDRLhMqRldsBQF3blgHNBAzmguZMgdjqHVMMe4rcIGOqUBX%2FdXfhEq%2FDcz8Z%2FKLOa2e6MEjwDkAfSKl6gwF%2FTBMbBpNLI33TOEMfsSYW4JRPyBImMpJBs1Dm66na9VwygZ9YEKcOHhBrUvvRo5qK%2Fhmuiojd7g8jSfrLUWXV52wJKVL6b3ON4sC2ikUsmMwlPo14CxRYvOzT3AduZ5Dgm3Sg%2B%2FMs3MeTPrihOqn2r8nHukzc2YVRZlIbh%2F48kHhgT73E41qHBx&X-Amz-Signature=2e5d4f41d45de0c0d66f58daf2bd723a00b510acb39c8d0e839deacab75fd3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
