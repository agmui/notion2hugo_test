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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSERNUC7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGKqixxWzyNJbwySqSPNU6nQ8av0OQsGIkzIbcp7vhbrAiBnSXPTQZ%2FxciQw3rRge3q73JZ4%2FumXQVgNsvbeIgTiHir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMK1MqnXG1PwH3TCdKKtwDrqXLHVGd%2Fw%2BOvijypuIoCWCkbkTFYsPAAdS9ftuohmHlEM%2F5yVSY%2BYEl3d12tA7TcQ%2FCAHcv%2FL7VhgglRnQ3PN4ReU6xDOFZcuro1Bb8EMew2oBA6fdMCXU69O0%2FGRCW7aMy5doHlwUn7zLfR0jlNzsfaDWRXAqS5S2YuRsnLlmgXpjiKS%2FYNYTOaYkiARtI4B%2FARdkRegN%2F6EVTEjYsdskEcIbIvXQIIOUVc94PZK833Ylkp2Twkc3n%2BE0%2F8iLVQCKWM5oMEll1UGFqbyU0bieaV9n3LwHsbXz0vhAiYxY%2BeCrer2sf1%2Fi3ygY%2Fzys3RZk4u0QpZRssB81ypkmkCOHpx%2FjnhPssjVF8Iu9O2zK1hIXucud%2BAxc9KAoQps9D7TIN6IcXsjv4LsL7Lr7F1GFE2cLkPe%2BUHC2nkeMl%2BHrt1%2FZyR3Hp4akeDMDC8zJxNDj2bLtozwRjcMwGo%2Fi413KVWnXpDQOY4c8PDp%2BwECfXX3yuYJxXW3iYSHJp9x%2BXPwk3Ury2JSWMORPcuX%2FDi1OHjFFSF85ZjQWu5r0ZxmYRCuxgZmTWghm8EbAfHqZjK2BA5JnpicbuLG7Y%2BovAMgy0wph3CsGwfRmuUiKDvV3gUbUswUt2hEYfa5ww7eCdwwY6pgE06nBACzgbDIbCgY2OGE%2FpszHpn4zKd1OnipRt0gLcVTkW6apy7NNobfA%2FxEF%2BzD4eeUVIPsE%2BJC1YWuV0LofWTP0uJ3j3C7yKS6FHR3jmYBaMpFeiyG5eCrr1zsbwXP%2B9YwYMW6WvQSBxTizKSmSu5oUmT4sBAuci8Q4UZX%2BN0FR7%2F%2Bft9FfmjSEyN3cFkjkYtfokdeQUWdf%2FRW4rx6Pq3UnEU2kX&X-Amz-Signature=81d280b78221d20dcd87f54b0e0d424ad0ced30ba469ea5d38ad3fa353212ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSERNUC7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGKqixxWzyNJbwySqSPNU6nQ8av0OQsGIkzIbcp7vhbrAiBnSXPTQZ%2FxciQw3rRge3q73JZ4%2FumXQVgNsvbeIgTiHir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMK1MqnXG1PwH3TCdKKtwDrqXLHVGd%2Fw%2BOvijypuIoCWCkbkTFYsPAAdS9ftuohmHlEM%2F5yVSY%2BYEl3d12tA7TcQ%2FCAHcv%2FL7VhgglRnQ3PN4ReU6xDOFZcuro1Bb8EMew2oBA6fdMCXU69O0%2FGRCW7aMy5doHlwUn7zLfR0jlNzsfaDWRXAqS5S2YuRsnLlmgXpjiKS%2FYNYTOaYkiARtI4B%2FARdkRegN%2F6EVTEjYsdskEcIbIvXQIIOUVc94PZK833Ylkp2Twkc3n%2BE0%2F8iLVQCKWM5oMEll1UGFqbyU0bieaV9n3LwHsbXz0vhAiYxY%2BeCrer2sf1%2Fi3ygY%2Fzys3RZk4u0QpZRssB81ypkmkCOHpx%2FjnhPssjVF8Iu9O2zK1hIXucud%2BAxc9KAoQps9D7TIN6IcXsjv4LsL7Lr7F1GFE2cLkPe%2BUHC2nkeMl%2BHrt1%2FZyR3Hp4akeDMDC8zJxNDj2bLtozwRjcMwGo%2Fi413KVWnXpDQOY4c8PDp%2BwECfXX3yuYJxXW3iYSHJp9x%2BXPwk3Ury2JSWMORPcuX%2FDi1OHjFFSF85ZjQWu5r0ZxmYRCuxgZmTWghm8EbAfHqZjK2BA5JnpicbuLG7Y%2BovAMgy0wph3CsGwfRmuUiKDvV3gUbUswUt2hEYfa5ww7eCdwwY6pgE06nBACzgbDIbCgY2OGE%2FpszHpn4zKd1OnipRt0gLcVTkW6apy7NNobfA%2FxEF%2BzD4eeUVIPsE%2BJC1YWuV0LofWTP0uJ3j3C7yKS6FHR3jmYBaMpFeiyG5eCrr1zsbwXP%2B9YwYMW6WvQSBxTizKSmSu5oUmT4sBAuci8Q4UZX%2BN0FR7%2F%2Bft9FfmjSEyN3cFkjkYtfokdeQUWdf%2FRW4rx6Pq3UnEU2kX&X-Amz-Signature=c9be62ec519b94c24cbbdbf7612d8a660080e00cc7122ebe4685be176253ac94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSERNUC7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGKqixxWzyNJbwySqSPNU6nQ8av0OQsGIkzIbcp7vhbrAiBnSXPTQZ%2FxciQw3rRge3q73JZ4%2FumXQVgNsvbeIgTiHir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMK1MqnXG1PwH3TCdKKtwDrqXLHVGd%2Fw%2BOvijypuIoCWCkbkTFYsPAAdS9ftuohmHlEM%2F5yVSY%2BYEl3d12tA7TcQ%2FCAHcv%2FL7VhgglRnQ3PN4ReU6xDOFZcuro1Bb8EMew2oBA6fdMCXU69O0%2FGRCW7aMy5doHlwUn7zLfR0jlNzsfaDWRXAqS5S2YuRsnLlmgXpjiKS%2FYNYTOaYkiARtI4B%2FARdkRegN%2F6EVTEjYsdskEcIbIvXQIIOUVc94PZK833Ylkp2Twkc3n%2BE0%2F8iLVQCKWM5oMEll1UGFqbyU0bieaV9n3LwHsbXz0vhAiYxY%2BeCrer2sf1%2Fi3ygY%2Fzys3RZk4u0QpZRssB81ypkmkCOHpx%2FjnhPssjVF8Iu9O2zK1hIXucud%2BAxc9KAoQps9D7TIN6IcXsjv4LsL7Lr7F1GFE2cLkPe%2BUHC2nkeMl%2BHrt1%2FZyR3Hp4akeDMDC8zJxNDj2bLtozwRjcMwGo%2Fi413KVWnXpDQOY4c8PDp%2BwECfXX3yuYJxXW3iYSHJp9x%2BXPwk3Ury2JSWMORPcuX%2FDi1OHjFFSF85ZjQWu5r0ZxmYRCuxgZmTWghm8EbAfHqZjK2BA5JnpicbuLG7Y%2BovAMgy0wph3CsGwfRmuUiKDvV3gUbUswUt2hEYfa5ww7eCdwwY6pgE06nBACzgbDIbCgY2OGE%2FpszHpn4zKd1OnipRt0gLcVTkW6apy7NNobfA%2FxEF%2BzD4eeUVIPsE%2BJC1YWuV0LofWTP0uJ3j3C7yKS6FHR3jmYBaMpFeiyG5eCrr1zsbwXP%2B9YwYMW6WvQSBxTizKSmSu5oUmT4sBAuci8Q4UZX%2BN0FR7%2F%2Bft9FfmjSEyN3cFkjkYtfokdeQUWdf%2FRW4rx6Pq3UnEU2kX&X-Amz-Signature=0fc9cb9f61dd1d2e76734a263196c03373942d7bbd72b24f5e0751f23d9bc04d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDY2U56C%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDyCJKBOGgr7%2BAL%2FJZbHyueHqyjpittI4ALtFbfyxgBiAiEAzYuOZboypHokq%2FvulN47ek5O%2BLVmotkule2i6tXP4jMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDONs7faCb7%2FXRjK1tCrcAxezndZSYkSi3uloH6rUGE1WLKS%2B7V9CFfM7LVcwCqa%2BDCqP3FBhFAGReGOee7uFGPc0fY3CRtmlLsCI%2Fyk2s9QfXnndjLLGye6Zb50Wmqeo3wqCKCaroApAGplwhnDCh%2Bmv7APpjrUCpVkHl3Uh%2B0Yk7GDzsKR0tHSHgsddK2fklFFwb%2F9BgSeF92pO0nWUQNs5fC%2Bwgz06VRhjIggK338JyHeoFwPxXNvO9V6uIMwLL4LyX3gHHMDmr%2B%2BhoOYOIn9IIqSi6GEB5XgYdzD2Qm%2BKkOB9ZatJNI343qxw4H2kdy5p2LuYIcXKo2PPgnZV0UifyrGLXQ4Py2BhAsMRzuL7oGdyWseK9HZLifD4AVU5rVr8b%2Bd5NKQ%2BwgmVSxAFxkVNhD%2FzUrXgL0C%2F0Efp0zLdLC5pL9TCzheRT9bO%2FvbS2LxgtM%2FnAxa8ETTX%2FF0roSWc37DLqCSnBE%2BGy4qb%2F73edjMnRn71LZmtq8GtggX2hmFNmfovZMO1%2FhJ5R%2FW%2FLx%2FZT%2FclgUVMFlhE3eQycSKWP76IFIdWT%2BFAOEV7krgWO%2FWQcu1Yi2Izyzwu3nsmZXMo59MdRdeBagVh4%2Fpwo%2B2OKsO6cRXNNnbCBm8h9V4saghQEw3WTzKpS2%2FoMPrgncMGOqUBclLMy1utHZPlZAi04gMVc%2BTtMMwE2Kr5qoTammeuwNeUeuvXRS9D7NRz5eLmVWVBAbsQ3cyZyk8IBs9QWCje0rXTM9ZdiHGE94HQKcRli2goZzut1LticG9BmbcUfBbYpr4eT9I65B0Iu0kYD7f0DvPK2ydv16GJ0%2FCCJmnmSzpRm3NMZecYdi%2FmhVINIE5PyEI4FiF7I5s9b7MYU3hGZ4OhBP1d&X-Amz-Signature=e9e8a308f3fb4e94fd7852787e59ced47bbb425ffd526831854faa27eab0d780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNG7F2E2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCGYihcZa%2Fh58WRIezi4dLv7a49rFn%2BjrpISYa7jdEfhwIhAMdL0J1FjSBT2B2wyCtLiaC%2FIL9e4EE5R02XBzc23Ug1Kv8DCCcQABoMNjM3NDIzMTgzODA1IgzokJPRGsHHQqkN%2Fbkq3AOk7I72vobs2WZlmcJ0jhS645qYKu%2B1R%2BfltXtHBd46cvdymqNz9nP24CW90Ip6Mocc5abD%2BCN4ZyBAYfEYP59Jb6POjeI%2BOrzu%2Fwf6rek5WaW82H8M%2F7O9r1a391p1i%2Befh0t24IO%2FDWRInV9PNyDz4GhICHaWxrXk%2Fpc0Wo87C5xwDWduIrJFcPpUvuGreRTLNoucPEevy6kfguKiHzAGQZfFlXLF%2BQRaxlwpshpkV1Jmg16di4%2FWsfwIoIWCi6%2FMTtxF2OVGlTxGlBWxF1%2BCvNexztvEIEeST7tdLwgfyOb8nUrSbeVFgUMXok2B70xwM0Ru%2B36uVmHaRsWn4%2BapRBAAq35zQnGR2kTxwa2n8TAezHcEsjBN%2FdqTgFOvPszj4v%2B%2FXnVX76NrMMQPQDTxxBc1gqbejDeOe8WMZLpA4xTYHVZGHgLjsDc9y0rDi2Dlzc1iTMDsqlp2pChHibNjbq8bnqTPObqg3xMy4XHRwC6B4PSCVykMv9zTfDaREq7ZeP1E6gybWfXYDm8HpWHRaZEXoGxSyUNYKS89sJAzCvzwjgu7eOdxc9SWYtLosVpBPVq6i%2BG%2FUW6qdoK6qZjWtI9JAIYeLK%2BL%2FQmpic8JkhQdLcK80GVG1RO0sjD%2B4Z3DBjqkAajyGMuSoJiF3bT3qcA%2FjMm59OtL0cdpeGlSeoRph6tne6qISCLnBuAL2ULxGk8%2FE0%2BkVYDqJAbLPDISRbHA84BJjC14MQ9tovHn%2F1DlBXTqkvDTTIfDbs36Y9O%2BjrDJhiF%2BacGZRHL0ROjHlPG28FQXv%2Bk8aT6OQIGBuWWXjdCV6CyL2y3CVpeFWFVuIe1OSMVudbYiQ2DFH3NHfHPGOHaUmFmM&X-Amz-Signature=736f5922d5eed7e367d74bf206faa33f49b356a528b80470b9057fc42b0cb13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSERNUC7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGKqixxWzyNJbwySqSPNU6nQ8av0OQsGIkzIbcp7vhbrAiBnSXPTQZ%2FxciQw3rRge3q73JZ4%2FumXQVgNsvbeIgTiHir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMK1MqnXG1PwH3TCdKKtwDrqXLHVGd%2Fw%2BOvijypuIoCWCkbkTFYsPAAdS9ftuohmHlEM%2F5yVSY%2BYEl3d12tA7TcQ%2FCAHcv%2FL7VhgglRnQ3PN4ReU6xDOFZcuro1Bb8EMew2oBA6fdMCXU69O0%2FGRCW7aMy5doHlwUn7zLfR0jlNzsfaDWRXAqS5S2YuRsnLlmgXpjiKS%2FYNYTOaYkiARtI4B%2FARdkRegN%2F6EVTEjYsdskEcIbIvXQIIOUVc94PZK833Ylkp2Twkc3n%2BE0%2F8iLVQCKWM5oMEll1UGFqbyU0bieaV9n3LwHsbXz0vhAiYxY%2BeCrer2sf1%2Fi3ygY%2Fzys3RZk4u0QpZRssB81ypkmkCOHpx%2FjnhPssjVF8Iu9O2zK1hIXucud%2BAxc9KAoQps9D7TIN6IcXsjv4LsL7Lr7F1GFE2cLkPe%2BUHC2nkeMl%2BHrt1%2FZyR3Hp4akeDMDC8zJxNDj2bLtozwRjcMwGo%2Fi413KVWnXpDQOY4c8PDp%2BwECfXX3yuYJxXW3iYSHJp9x%2BXPwk3Ury2JSWMORPcuX%2FDi1OHjFFSF85ZjQWu5r0ZxmYRCuxgZmTWghm8EbAfHqZjK2BA5JnpicbuLG7Y%2BovAMgy0wph3CsGwfRmuUiKDvV3gUbUswUt2hEYfa5ww7eCdwwY6pgE06nBACzgbDIbCgY2OGE%2FpszHpn4zKd1OnipRt0gLcVTkW6apy7NNobfA%2FxEF%2BzD4eeUVIPsE%2BJC1YWuV0LofWTP0uJ3j3C7yKS6FHR3jmYBaMpFeiyG5eCrr1zsbwXP%2B9YwYMW6WvQSBxTizKSmSu5oUmT4sBAuci8Q4UZX%2BN0FR7%2F%2Bft9FfmjSEyN3cFkjkYtfokdeQUWdf%2FRW4rx6Pq3UnEU2kX&X-Amz-Signature=e5f9734a57102e4d5bee67195221569e483cd7ec004c6e5d210f8821971e28d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
