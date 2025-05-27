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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D5TANVL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP99uXaos8M%2BJdkfRWzr1pK%2F%2BlA0HUNyvs3lcmpIrv4AiEAyPjIA91TO1lutSu6gTV%2BapvuynhdHEGsK32HzGYHMroq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDAPYUx%2Bke6eTVuv9%2ByrcA0QQJt%2B%2BjjabNi8nQhpI8VqKCePF216ctYLOc%2FgKlfEZl4u3O3fgPZ3DAwoy6KU6edsODau3wlbSyQybpz6lHpT9n%2BaR6K%2BrTDbocJizUkX2DkZSnbX6Sd215f8M3CWM098dy2wRKQyOKWlMxRpzjWGa4VMmiCp7Bm5%2Bl02ygaMYhHgxtnsIc6KrQYkS3ggYG5R6Ol7AApDWdu1orT7P5b9JXA3ylFzFJHsj%2FeS6F2xUyCtNpMWgJkqt5lXiGz3GFiR5%2FxP3x2naQkJvepLdMEShVbg2mZPgDxWIoBjzmsKCI8xEy%2Fbq%2FDKUd1obwecDVLshlinBBwR9mi5geqrpHoA8GBvLvRVqn3G333W2VFv7qn3i2eULIVL4P7PxCybLlqs6tqceSaCH4EbEgA%2BARlI6ZBoA5gjY8awiEufBDdYDWss9UXxTSq8OZrL1hCg0oQx8D3eAfGawoLVJ2aPB9WON2w%2BcQf6ccW%2F9HohqHAxsckeFJmqy%2Fmh6VsILXBrq%2FnyFcY4q5CqptfYuxaPLvb5BzSOCjyzpk%2F0z1TPBTzcBKUuf8wCsGp3QQF3UX5FXk7tfvvriW4Zjhcje%2FxqCNRswzEKgOsFtLNNoUmL5p%2BuT6eLnBPgjG2YPSjpJMOmV1MEGOqUBfR7Q2DiCNdLlelG58CfzQFh%2FY9bMZ7jS3x%2BsJgs8eR9zk2F8j8EWa19cMCokp8ly8p3l%2F69O%2BEebE7S4P%2F6gI6WY%2BiQ45Z0BSRMpEVgzvyLF7w7EVrTcKk3JO6Ygu%2FMod6ieGGK4RbC7eelORqiKSf61wO1TpvoVAImqLu2KRRLH5HZFJ7%2Bzn18%2FdKYrGdPHBLMmnFEHusnkzCiBZu%2B%2ByIefA77u&X-Amz-Signature=2161a15fa4c47d6def1947d1d5e9f1884c965e88e35baea464c2f5dc819b0f21&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D5TANVL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP99uXaos8M%2BJdkfRWzr1pK%2F%2BlA0HUNyvs3lcmpIrv4AiEAyPjIA91TO1lutSu6gTV%2BapvuynhdHEGsK32HzGYHMroq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDAPYUx%2Bke6eTVuv9%2ByrcA0QQJt%2B%2BjjabNi8nQhpI8VqKCePF216ctYLOc%2FgKlfEZl4u3O3fgPZ3DAwoy6KU6edsODau3wlbSyQybpz6lHpT9n%2BaR6K%2BrTDbocJizUkX2DkZSnbX6Sd215f8M3CWM098dy2wRKQyOKWlMxRpzjWGa4VMmiCp7Bm5%2Bl02ygaMYhHgxtnsIc6KrQYkS3ggYG5R6Ol7AApDWdu1orT7P5b9JXA3ylFzFJHsj%2FeS6F2xUyCtNpMWgJkqt5lXiGz3GFiR5%2FxP3x2naQkJvepLdMEShVbg2mZPgDxWIoBjzmsKCI8xEy%2Fbq%2FDKUd1obwecDVLshlinBBwR9mi5geqrpHoA8GBvLvRVqn3G333W2VFv7qn3i2eULIVL4P7PxCybLlqs6tqceSaCH4EbEgA%2BARlI6ZBoA5gjY8awiEufBDdYDWss9UXxTSq8OZrL1hCg0oQx8D3eAfGawoLVJ2aPB9WON2w%2BcQf6ccW%2F9HohqHAxsckeFJmqy%2Fmh6VsILXBrq%2FnyFcY4q5CqptfYuxaPLvb5BzSOCjyzpk%2F0z1TPBTzcBKUuf8wCsGp3QQF3UX5FXk7tfvvriW4Zjhcje%2FxqCNRswzEKgOsFtLNNoUmL5p%2BuT6eLnBPgjG2YPSjpJMOmV1MEGOqUBfR7Q2DiCNdLlelG58CfzQFh%2FY9bMZ7jS3x%2BsJgs8eR9zk2F8j8EWa19cMCokp8ly8p3l%2F69O%2BEebE7S4P%2F6gI6WY%2BiQ45Z0BSRMpEVgzvyLF7w7EVrTcKk3JO6Ygu%2FMod6ieGGK4RbC7eelORqiKSf61wO1TpvoVAImqLu2KRRLH5HZFJ7%2Bzn18%2FdKYrGdPHBLMmnFEHusnkzCiBZu%2B%2ByIefA77u&X-Amz-Signature=175702b12e05341fe0d3d916edc5e7c898e8615bb4191dccfb81b35a2f8374eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D5TANVL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP99uXaos8M%2BJdkfRWzr1pK%2F%2BlA0HUNyvs3lcmpIrv4AiEAyPjIA91TO1lutSu6gTV%2BapvuynhdHEGsK32HzGYHMroq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDAPYUx%2Bke6eTVuv9%2ByrcA0QQJt%2B%2BjjabNi8nQhpI8VqKCePF216ctYLOc%2FgKlfEZl4u3O3fgPZ3DAwoy6KU6edsODau3wlbSyQybpz6lHpT9n%2BaR6K%2BrTDbocJizUkX2DkZSnbX6Sd215f8M3CWM098dy2wRKQyOKWlMxRpzjWGa4VMmiCp7Bm5%2Bl02ygaMYhHgxtnsIc6KrQYkS3ggYG5R6Ol7AApDWdu1orT7P5b9JXA3ylFzFJHsj%2FeS6F2xUyCtNpMWgJkqt5lXiGz3GFiR5%2FxP3x2naQkJvepLdMEShVbg2mZPgDxWIoBjzmsKCI8xEy%2Fbq%2FDKUd1obwecDVLshlinBBwR9mi5geqrpHoA8GBvLvRVqn3G333W2VFv7qn3i2eULIVL4P7PxCybLlqs6tqceSaCH4EbEgA%2BARlI6ZBoA5gjY8awiEufBDdYDWss9UXxTSq8OZrL1hCg0oQx8D3eAfGawoLVJ2aPB9WON2w%2BcQf6ccW%2F9HohqHAxsckeFJmqy%2Fmh6VsILXBrq%2FnyFcY4q5CqptfYuxaPLvb5BzSOCjyzpk%2F0z1TPBTzcBKUuf8wCsGp3QQF3UX5FXk7tfvvriW4Zjhcje%2FxqCNRswzEKgOsFtLNNoUmL5p%2BuT6eLnBPgjG2YPSjpJMOmV1MEGOqUBfR7Q2DiCNdLlelG58CfzQFh%2FY9bMZ7jS3x%2BsJgs8eR9zk2F8j8EWa19cMCokp8ly8p3l%2F69O%2BEebE7S4P%2F6gI6WY%2BiQ45Z0BSRMpEVgzvyLF7w7EVrTcKk3JO6Ygu%2FMod6ieGGK4RbC7eelORqiKSf61wO1TpvoVAImqLu2KRRLH5HZFJ7%2Bzn18%2FdKYrGdPHBLMmnFEHusnkzCiBZu%2B%2ByIefA77u&X-Amz-Signature=803460879a67dcef9120bc66a073333bf01050d9f37645e106ce10542841b53c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYUMOBL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYyygTlkQjRtwlet%2FqXC1jp6XPCXUoS3KYKfkxlyBADAIgVQzQf%2B49sEQoy2l9kvUKZ1O4EcUpc%2BfqkO%2FyqJUgEEYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDODN79jrWe2LrvPlMircA77PZ0KLBX7%2Fo1r3YnV9uEu7T6cQe%2FBAP%2FcGa%2FTrYOdRG83papaHVm3yVc8f6ct1I9TwhYvpjbbEBLu%2BqXCj7NpIHyrZ5AhzwICP1nvLTZHVDrFRCcWtgG2QTACTOR7m376M8VlUbM1%2BFIH%2FnIHjLeXol7l7npC%2BzPYG4F8FH5zlZrU%2F8wowc4R2cF%2ByQUrhc0NTchhqEeDCqXZUBH1VaOnsHK7o%2BA%2BX6XJgPgASITBMT6hHAviqc8g4xdiRZVLci%2BCPqec%2B7ndl27WZDyCp8r6Z1VMIcLXqzLDW781d29%2Fw6rzmDAsOgeHzhryV29tq7hCAwJPoAnYuRxQ0w0Zovo93zMRF75J9AF5hSol4jBMDkc46iTeSRQWN2298l1gYx4I8Bcpy1qk%2BynH0ZtEtD8xcEF6gGYV2FAhhggWJbLE9fdcBcbxUuJFPon77Yw6p%2BRxr2r35HEeHcmRc2ghE5NJeR8o%2Baxjp7Nh6Dl34YKuWjr1%2BkxTC9s6Few34cyIZXV%2F7QzrmLp0fg7dr4utQcoPrQpZH79rJv1TvImVle3atMDCg9njag%2BRqka5P0vCJZHdYO582VgJEsYC%2BQ9n%2BqiHwxVq1WHBJ0jn%2F8HOY7%2BHEaWYSPi3VapOPrpcmMOWW1MEGOqUB%2F%2BIuoOoj9pRxtr0N%2BX5WbkY2csRiA0XAUYXsbL4dRwdSYlR182sl4xExAuz%2B22CIruLyEDGwB3dxTOz4fr9NDYK3TkX5bk3OrDWCBa3r%2FxeeieG2cI8wrLLTsc00HAOcOQmL%2FX4lHptjnyZicUbQjQzcQ10T%2BWmI4U2nd5JyrEAbDGFDnKByesMC5%2BNG%2BklRdkhOyci0L%2FN9B2ETl0cBDO8Wvdth&X-Amz-Signature=77c5c81ab9721cc8acd0829ef7298d0b78ac7d3e774432084245ad65f16ab7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4LOUSS%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmvrQGDAkuw8darb9nHmufBr11AN0E%2BRb%2BSCJea9fLOAiABX1tqCJO7vt%2FwxIbQEVzfiOK68kTaTwB5k4gsb3wkhSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM%2FQJgkuGYhMAdHHSgKtwDY37RqiUWyMXlcxA6yJjctsSRLxyoOWmqOyWSxw1RUhXkiyJRQOprSYseLgIUWH0wRnobScSoCLPfmoNSaMG4Lh52NL4Okre2F6TXvoiSL%2FFs%2F5roXx%2FTQjI2pcJe37U0a7puqc0cHzitBoxLY2sUZYGNIcyfSIG%2F0abhWlG5%2BhdfXDmYUcBKiU%2FvJH3Zrl6TkdKViMer9n1A50ayeUjaeIn9WVbFCUaiGN3uiAw2JbGqQlNs9Oqj3nCkT7Q9q7IY3j95jibEcrOO%2B4nqSu31yE7lfHtgHXwS4j4aYoaGHuhq098zJLU%2FfkMOaPO28NJDR%2F%2BKqIxhAWfdE0wCV2%2Fhp5l7lPzS59bSeCtQpWHWV0GRNzud2%2FWH5QEscqJo1MwnVStdIguGzYANH0xrymfP9P6Z%2BWIpmTPbjgM1JuNAQyE1DKZvolAd4DZCq95PNuVIAC3DtYSyviDgPAjztaESbfsRSowMr0C7ICgRKf%2ByFu4FXicsNsQeLrRG7JJfNPubp9ESvvi04GK0Oj6nEqBSt0mW9G%2BMunk2cgaJOhjay375HnLIlhIF4CKcr9TAnVJvEGOf6Z%2Fq4%2BJLfQrM7YaHYdzyrZr9N%2BOameiCbur%2FcI5DKAZZgxFzEm%2F%2FVeMw4JbUwQY6pgGBIa72D3YWbf3BB%2BTcfh3AQW1Hys%2F2PG%2Fv%2B7j0kT0J%2FRCaMaAG9FDSe8l7YhntgIwfrvvOrTCwbStL89Vv0IiFxCGJLaltveZA%2FqaMJB04R111qLQ8cjQBqRNHgg0j2qacUHcb0TpOHLN%2FlG11%2Fzerey6QohPjLom5NKmSdcf5ILeWuBhYv2FKTBt2ShcJqbcAi0xSHkFfrPBwm0c%2FfrsqNaQf8bhR&X-Amz-Signature=6c12f40128b13ad96f761c21cf0fef7f7d43868cf74854ae1b43a0d8ea5dfb08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D5TANVL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP99uXaos8M%2BJdkfRWzr1pK%2F%2BlA0HUNyvs3lcmpIrv4AiEAyPjIA91TO1lutSu6gTV%2BapvuynhdHEGsK32HzGYHMroq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDAPYUx%2Bke6eTVuv9%2ByrcA0QQJt%2B%2BjjabNi8nQhpI8VqKCePF216ctYLOc%2FgKlfEZl4u3O3fgPZ3DAwoy6KU6edsODau3wlbSyQybpz6lHpT9n%2BaR6K%2BrTDbocJizUkX2DkZSnbX6Sd215f8M3CWM098dy2wRKQyOKWlMxRpzjWGa4VMmiCp7Bm5%2Bl02ygaMYhHgxtnsIc6KrQYkS3ggYG5R6Ol7AApDWdu1orT7P5b9JXA3ylFzFJHsj%2FeS6F2xUyCtNpMWgJkqt5lXiGz3GFiR5%2FxP3x2naQkJvepLdMEShVbg2mZPgDxWIoBjzmsKCI8xEy%2Fbq%2FDKUd1obwecDVLshlinBBwR9mi5geqrpHoA8GBvLvRVqn3G333W2VFv7qn3i2eULIVL4P7PxCybLlqs6tqceSaCH4EbEgA%2BARlI6ZBoA5gjY8awiEufBDdYDWss9UXxTSq8OZrL1hCg0oQx8D3eAfGawoLVJ2aPB9WON2w%2BcQf6ccW%2F9HohqHAxsckeFJmqy%2Fmh6VsILXBrq%2FnyFcY4q5CqptfYuxaPLvb5BzSOCjyzpk%2F0z1TPBTzcBKUuf8wCsGp3QQF3UX5FXk7tfvvriW4Zjhcje%2FxqCNRswzEKgOsFtLNNoUmL5p%2BuT6eLnBPgjG2YPSjpJMOmV1MEGOqUBfR7Q2DiCNdLlelG58CfzQFh%2FY9bMZ7jS3x%2BsJgs8eR9zk2F8j8EWa19cMCokp8ly8p3l%2F69O%2BEebE7S4P%2F6gI6WY%2BiQ45Z0BSRMpEVgzvyLF7w7EVrTcKk3JO6Ygu%2FMod6ieGGK4RbC7eelORqiKSf61wO1TpvoVAImqLu2KRRLH5HZFJ7%2Bzn18%2FdKYrGdPHBLMmnFEHusnkzCiBZu%2B%2ByIefA77u&X-Amz-Signature=c827c4b33907c10528fc0a5b5657d62f305af888fee57f55f2bba42cebb2d8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
