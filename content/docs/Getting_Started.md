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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSOSLGEH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGJVRsv9D6lcv0Drz67NBpoIC3hh2nqBNWzG0mx%2Fvq9YAiEAhT6uYxdGgcbh83vd8gSYr2Nkyb8DFJBcYUDhsHNizwcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGaeHG3EKaj7fqQIyCrcA6z2ebITsNyFshaqeTL2goTkMKB%2B0NnuIXaZzXTopV8Bqcy%2F4qPHpZif2Pj10S80rEheAZakdJsvhgkoZSgKP%2FioMusf53Gdyk0cT8o5fG586rY9uwXwe0th5bTpoX0rqNxgMLC4no1G8xVj7yEwuRtsTD7zQxQarsMXUbpA7DJ0H4oAeH03YliI6CGOeg39tuEVPXTENfb%2FzSCCYi1Kl%2Bzeb4QtbHVerzDw4gYo7VRJLCf0EGTrlCZ66rgBu0FlDSDPN99AvLU87C8%2B9Cvl4CX4ZNOgBxb0hCAbviO8qDj6dedsGB9UgaPcnoikStHozl%2FuU1jwU4AI8DZgqgkr3puyCBLbiBeclbdfk06DvpfAKFPI9OHCLDsqUIuamSD4vkPY4rxMnuD1avMtnrwwBl%2B3ATXYbkCjiFrb5NR5q1X%2FvNTSjKUkbKeId42Z3g7pAJ73g5rJ%2Fq9eZozhJtyiptZvQ32UA%2BByStQUo8mG9eI8kWYCrghM8Oa2SEqRhK8OXG4xxjqTl7P4pQoRxxOZ5I4PTSqjYWQdemoMgP%2FrVsK%2Fm7N1mj%2BioxoWWtP4EUySP%2BBwjiThbT392eVgTPnJwfUnQ2WgMTHq0OIF%2BCSKAv7Q7n21aj6JwczvaUaFMIPiycQGOqUB7dG1FixVQPL3X5Ko0MEGvtrQc8IAFvT697vHmg%2BgCRtJBgU45Ug7MTkitEbfxwYVtaVe%2FaLmoR7HxbV%2B8aKzkKgFu4OWTKaOaJlO7oNOvcLQuVxjsvAOGCb5d7TOcTiiI24y4tiGltq3yy74pnN5u2X8hju3Inrvpf8LHrJ9p4mI%2Bzv0IphICD%2BCfV0LeKh52P7t77rFJkE0aRoXJ0zykT%2FDVbch&X-Amz-Signature=639ebdbd1b11cf2450048facc4dba93754c9b56703aa52f404c4526be55e4a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSOSLGEH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGJVRsv9D6lcv0Drz67NBpoIC3hh2nqBNWzG0mx%2Fvq9YAiEAhT6uYxdGgcbh83vd8gSYr2Nkyb8DFJBcYUDhsHNizwcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGaeHG3EKaj7fqQIyCrcA6z2ebITsNyFshaqeTL2goTkMKB%2B0NnuIXaZzXTopV8Bqcy%2F4qPHpZif2Pj10S80rEheAZakdJsvhgkoZSgKP%2FioMusf53Gdyk0cT8o5fG586rY9uwXwe0th5bTpoX0rqNxgMLC4no1G8xVj7yEwuRtsTD7zQxQarsMXUbpA7DJ0H4oAeH03YliI6CGOeg39tuEVPXTENfb%2FzSCCYi1Kl%2Bzeb4QtbHVerzDw4gYo7VRJLCf0EGTrlCZ66rgBu0FlDSDPN99AvLU87C8%2B9Cvl4CX4ZNOgBxb0hCAbviO8qDj6dedsGB9UgaPcnoikStHozl%2FuU1jwU4AI8DZgqgkr3puyCBLbiBeclbdfk06DvpfAKFPI9OHCLDsqUIuamSD4vkPY4rxMnuD1avMtnrwwBl%2B3ATXYbkCjiFrb5NR5q1X%2FvNTSjKUkbKeId42Z3g7pAJ73g5rJ%2Fq9eZozhJtyiptZvQ32UA%2BByStQUo8mG9eI8kWYCrghM8Oa2SEqRhK8OXG4xxjqTl7P4pQoRxxOZ5I4PTSqjYWQdemoMgP%2FrVsK%2Fm7N1mj%2BioxoWWtP4EUySP%2BBwjiThbT392eVgTPnJwfUnQ2WgMTHq0OIF%2BCSKAv7Q7n21aj6JwczvaUaFMIPiycQGOqUB7dG1FixVQPL3X5Ko0MEGvtrQc8IAFvT697vHmg%2BgCRtJBgU45Ug7MTkitEbfxwYVtaVe%2FaLmoR7HxbV%2B8aKzkKgFu4OWTKaOaJlO7oNOvcLQuVxjsvAOGCb5d7TOcTiiI24y4tiGltq3yy74pnN5u2X8hju3Inrvpf8LHrJ9p4mI%2Bzv0IphICD%2BCfV0LeKh52P7t77rFJkE0aRoXJ0zykT%2FDVbch&X-Amz-Signature=8d9d21b99feea1f32667310837712f132a3998469913df6e4daa399a5949028f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSOSLGEH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGJVRsv9D6lcv0Drz67NBpoIC3hh2nqBNWzG0mx%2Fvq9YAiEAhT6uYxdGgcbh83vd8gSYr2Nkyb8DFJBcYUDhsHNizwcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGaeHG3EKaj7fqQIyCrcA6z2ebITsNyFshaqeTL2goTkMKB%2B0NnuIXaZzXTopV8Bqcy%2F4qPHpZif2Pj10S80rEheAZakdJsvhgkoZSgKP%2FioMusf53Gdyk0cT8o5fG586rY9uwXwe0th5bTpoX0rqNxgMLC4no1G8xVj7yEwuRtsTD7zQxQarsMXUbpA7DJ0H4oAeH03YliI6CGOeg39tuEVPXTENfb%2FzSCCYi1Kl%2Bzeb4QtbHVerzDw4gYo7VRJLCf0EGTrlCZ66rgBu0FlDSDPN99AvLU87C8%2B9Cvl4CX4ZNOgBxb0hCAbviO8qDj6dedsGB9UgaPcnoikStHozl%2FuU1jwU4AI8DZgqgkr3puyCBLbiBeclbdfk06DvpfAKFPI9OHCLDsqUIuamSD4vkPY4rxMnuD1avMtnrwwBl%2B3ATXYbkCjiFrb5NR5q1X%2FvNTSjKUkbKeId42Z3g7pAJ73g5rJ%2Fq9eZozhJtyiptZvQ32UA%2BByStQUo8mG9eI8kWYCrghM8Oa2SEqRhK8OXG4xxjqTl7P4pQoRxxOZ5I4PTSqjYWQdemoMgP%2FrVsK%2Fm7N1mj%2BioxoWWtP4EUySP%2BBwjiThbT392eVgTPnJwfUnQ2WgMTHq0OIF%2BCSKAv7Q7n21aj6JwczvaUaFMIPiycQGOqUB7dG1FixVQPL3X5Ko0MEGvtrQc8IAFvT697vHmg%2BgCRtJBgU45Ug7MTkitEbfxwYVtaVe%2FaLmoR7HxbV%2B8aKzkKgFu4OWTKaOaJlO7oNOvcLQuVxjsvAOGCb5d7TOcTiiI24y4tiGltq3yy74pnN5u2X8hju3Inrvpf8LHrJ9p4mI%2Bzv0IphICD%2BCfV0LeKh52P7t77rFJkE0aRoXJ0zykT%2FDVbch&X-Amz-Signature=a32e723e16f767b712d26b859f717e93cb53cdc9d4a72f11de8f074a859015ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJ5DSU3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIDyrOKGZ%2FYQL9AD%2Bca5iQoIC7aSU6YtxyEH9GzYv1Z5MAiBYVA1ttv6LCKSqO%2F7IH5HIsleOFYB72loFeYnuu%2FOqyyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMsyK0GSnsYkf4hYeLKtwDXkLgVT%2B%2FAyQPcBXUc4URnGuLiw01iiUDC8A3HIkmQeaP1Jq3OhlTm2LLj0srji6ifRQTJhxJXO9CpS0Kbs%2B9C2eWBDRPRZFwqA5GtzUTTSOXwvH30kOP%2BcWK1cfVfIvJaESRbRGUxFA0wkBjIjn4RWlDaA%2Fr%2Fx6LhTP70B1pgSJdKg54KHQyDTJ%2BGM8LVboWgynu%2FP%2BN0a776A%2BXEJNy4NL4Gwq%2ByJjBfwJS40I1oKvBiKwrA6S0i707hGcWZBLdX7eURrvU7BM9U2JOkT%2FvVPA65nIFLAZCNLCvAVk0lXaa2Q4YsF76LEw5tgFydkjkXt4JZUfkl%2B85QNjIu6agR4EBWSshX%2Flxwwg2DECepgsqOewkiRAR5vBPycHJWz%2FHT%2FOD65bhQeyo7exjSxKX8%2FRKAFYsUrwnA7PzdJ3QqmQp5fuTYO4gRZH%2BVARK4Qsg%2BQPScbFaPui9vGUOJvVT6QTJpLtcPdEuGwDjivxkZkS14SxP2MJw2gOCZcJH708zPfx2BDEg%2BR9vLhd97L4OB1HUBDiDrOK5Y7alxH3xRaL5priQ2jj8i6zA3NzyhyrxZYQKjIpzIemdQwAcbgdM29%2FJDPs3xzKRWhxPVHcP6V0OfYpj2oK1BVVw4HIw%2FuHJxAY6pgENZ5mtv3s9lc9%2B3zPv%2F2pPuE0JQCW3CB7%2BDksO2UTNM58gwbTeA6FnFUvId1pkABIuBtD28hD%2FGImyvpybHSBmQQvQP%2FzmeCROJcErEFgCQWmNkRIQA8Zwh8ip4FUDRQPzUf6NPGfqYR0CeFvlpPC2cdKaKaCCPDerzfifoEUfGBrucwl688uTQG6Yi5gmvjyWIMpDUopqlkruTjTXT8HvP29EB7vJ&X-Amz-Signature=b10baa07346be2d166b5e1dad07ba631116123fed290f3c850e0a0b6acc4cd95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFFMIMSL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCOo2AV2NqQ%2BvyzrzisQCrTRgOWxvsCuv%2BY52u9C4MbIgIgSmEci9kZj6ClYkumalOV0J%2BU9R6a8SnRiz%2FgWdPfEZcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBJgB0rqyR3elySyHyrcA7Wll2DUCrH1v3C9YSYyBxwtUfkfImJXQu%2BEZm%2BFB%2Ba8rO4YbU6EhiZVZK7pf3ZhPdPjSALAcKwjgtnVvyvbFj9nfQ47LqO8Ba%2BR6br3kv2EuGF8S449Zx5ZaiAxXxE8wK6Q%2BgZfrx0z1rnixSz4XEd94Nc7odxQa2SIjtZK5aEa%2BAy0bhmudriyzNxmU1ZfVdsRt1VestwMUyPK1LG2UH7L0iTZYxToRMmaHXaspn5RJiPxA5SqTiOI99rysCU3OJCLKrZi7Lxt%2Bmv97jhopUZBSrm1aKAMAXnDUALBNBLP5xVvb6qicwzGi2YgZfb82d%2Fbanw%2FFDFvg59GoOLnsynN6iZK4cLmn%2FEIB8DTThIWWFop%2BqNEunMRFbbrKlJbCkXVvbuNg%2BOTCeAEMX6pI4WKKvkVDO2QL2csNvXaPG8kEAw%2BhK%2F76P9ZCzM2mCZ4hwPHJirHptfRSHeQnsHTJa3SVXgAGKgUutmcYi0d5WgvS0zUrABcIL33utuezkr3mNQvHlWci4RKiy5ObjZxstKAvqF30p9c4EjA8AzhtjFfsUZ68gB%2Fm0PI1gYtTMvf5U1Dr%2FMZao6jsf1cdqWlZgr3Rvp0bgJ76gezSCvlqbT%2BUasL9XTLba%2FlpybZMKfiycQGOqUBcVJwj7fEOleftlXMMOi7CIu96Wg0bp9kzqbVsPkOBMQKUqngjV0%2BIYC2%2BGHuex3c9IZpeWslo76jwCPcz6DttoD%2FFAOaIbNyglZ84YH%2F899VY576wRnDfUwaKKHqxfn%2FSXUbkA5AxF0ZqiPCR%2FreExIQ1efW8fGHsde2lMVSvSFHGtZbGOvcNJ8zv26WHBC%2Fc8TsntecwRW6aXQGuRKECSeiMBOp&X-Amz-Signature=b45fe1685874b90424729c1606f52ea816bea8ec6604b2efc0847eb5aa38a5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSOSLGEH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGJVRsv9D6lcv0Drz67NBpoIC3hh2nqBNWzG0mx%2Fvq9YAiEAhT6uYxdGgcbh83vd8gSYr2Nkyb8DFJBcYUDhsHNizwcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGaeHG3EKaj7fqQIyCrcA6z2ebITsNyFshaqeTL2goTkMKB%2B0NnuIXaZzXTopV8Bqcy%2F4qPHpZif2Pj10S80rEheAZakdJsvhgkoZSgKP%2FioMusf53Gdyk0cT8o5fG586rY9uwXwe0th5bTpoX0rqNxgMLC4no1G8xVj7yEwuRtsTD7zQxQarsMXUbpA7DJ0H4oAeH03YliI6CGOeg39tuEVPXTENfb%2FzSCCYi1Kl%2Bzeb4QtbHVerzDw4gYo7VRJLCf0EGTrlCZ66rgBu0FlDSDPN99AvLU87C8%2B9Cvl4CX4ZNOgBxb0hCAbviO8qDj6dedsGB9UgaPcnoikStHozl%2FuU1jwU4AI8DZgqgkr3puyCBLbiBeclbdfk06DvpfAKFPI9OHCLDsqUIuamSD4vkPY4rxMnuD1avMtnrwwBl%2B3ATXYbkCjiFrb5NR5q1X%2FvNTSjKUkbKeId42Z3g7pAJ73g5rJ%2Fq9eZozhJtyiptZvQ32UA%2BByStQUo8mG9eI8kWYCrghM8Oa2SEqRhK8OXG4xxjqTl7P4pQoRxxOZ5I4PTSqjYWQdemoMgP%2FrVsK%2Fm7N1mj%2BioxoWWtP4EUySP%2BBwjiThbT392eVgTPnJwfUnQ2WgMTHq0OIF%2BCSKAv7Q7n21aj6JwczvaUaFMIPiycQGOqUB7dG1FixVQPL3X5Ko0MEGvtrQc8IAFvT697vHmg%2BgCRtJBgU45Ug7MTkitEbfxwYVtaVe%2FaLmoR7HxbV%2B8aKzkKgFu4OWTKaOaJlO7oNOvcLQuVxjsvAOGCb5d7TOcTiiI24y4tiGltq3yy74pnN5u2X8hju3Inrvpf8LHrJ9p4mI%2Bzv0IphICD%2BCfV0LeKh52P7t77rFJkE0aRoXJ0zykT%2FDVbch&X-Amz-Signature=242786b799807981ba7bffb68ea9628a8d7d036c3dfd1e480cf34030eb1a35eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
