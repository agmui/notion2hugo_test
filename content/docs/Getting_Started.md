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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NX5HTF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCJ2ukV1rZ7icoFDW634Yyxfnk7a1ng067j2Bf0dXtfsAIgBk1O%2FaSgeY3m5qJtyUNE%2FCSpb4zEYwSXoBAViuWWtb8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNGFSu0lBWMZxsaNtyrcA%2FTCB5hHVSdydscl63psft5Gvxyz81iV3fjeinGo7DklM81%2BNpK%2BgO5dWBfb78TruMABixDwlvo0Dr22xhzzJaSvStLuOvM9gSnWyzX1YSXO8yglrIIn1zd%2FjDXMj7ZBB2T4z%2B5R94%2FaGyTApiCLfYrSy67Ehv9M0kWtNeJ35STCBE%2FjBzUmdHn3A1JSvBTonla3Gj2rVGsnhxco%2BxhdPJb7KVWP2wvyoYKGDSWeytCAIVgwbMzTcJe%2BkLks7aeF5a2T5D3aFKM6Cxp5vTRcZ1WPat%2FT0ScRULmC7Idg1XW2PEQEe5Y1QHSZmIZwFEQ8i4pk3e4wZrIuzLbR4KE12lBMbG18DRfo16E9a40n8jEGK3vxh6AbAUgDrvlDsaTzM2N8ePR3G9HpiCkecCcXK9lGxofiCeHOHR6SLkBgY%2BP4oCJKmdEAgwZTnBgvRS5oQBWaNoJroJxxpZ3Ev55jgj7tRxHm1cFhELQT5CodALM59DmBjE0M5ldhFla7NEqrcnL%2BgUDiU4ZfCNyraNjPTSlF%2BmybwsPpw79JK7mVb9Ew45qYigpU1k8HhTQMkjFRiIvCz3eS1uwBmiYx56Herfy6Dtg6U59pMMZecX%2Bukt9H%2BexWdEIaLqzad6iiMIb9iMIGOqUB66PyENRMtQy8dUHDLLRCEAYxELT%2FztjrUTgGRftRjwiO3j5YQUnMKuH4zRN8frYU%2B0hi%2Fjs9whibW1AHca%2FR3bpnXAUsd%2B%2BBqfYMgUXm4Hv2oy%2BTZBxYMEqGCHWbyhgD5QXvtPytidaCo4B07ME50JRajNhz%2F0ijAv5xwIAUtMOonTN4O9cLRB4k7zWjxl2%2BQUpOO22CP7p9nP5awjy%2F2A6GsIz8&X-Amz-Signature=bcabafee085ade7d0ff0d9ec60194d4ca5137e248d0b55c493aa418064b629ae&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NX5HTF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCJ2ukV1rZ7icoFDW634Yyxfnk7a1ng067j2Bf0dXtfsAIgBk1O%2FaSgeY3m5qJtyUNE%2FCSpb4zEYwSXoBAViuWWtb8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNGFSu0lBWMZxsaNtyrcA%2FTCB5hHVSdydscl63psft5Gvxyz81iV3fjeinGo7DklM81%2BNpK%2BgO5dWBfb78TruMABixDwlvo0Dr22xhzzJaSvStLuOvM9gSnWyzX1YSXO8yglrIIn1zd%2FjDXMj7ZBB2T4z%2B5R94%2FaGyTApiCLfYrSy67Ehv9M0kWtNeJ35STCBE%2FjBzUmdHn3A1JSvBTonla3Gj2rVGsnhxco%2BxhdPJb7KVWP2wvyoYKGDSWeytCAIVgwbMzTcJe%2BkLks7aeF5a2T5D3aFKM6Cxp5vTRcZ1WPat%2FT0ScRULmC7Idg1XW2PEQEe5Y1QHSZmIZwFEQ8i4pk3e4wZrIuzLbR4KE12lBMbG18DRfo16E9a40n8jEGK3vxh6AbAUgDrvlDsaTzM2N8ePR3G9HpiCkecCcXK9lGxofiCeHOHR6SLkBgY%2BP4oCJKmdEAgwZTnBgvRS5oQBWaNoJroJxxpZ3Ev55jgj7tRxHm1cFhELQT5CodALM59DmBjE0M5ldhFla7NEqrcnL%2BgUDiU4ZfCNyraNjPTSlF%2BmybwsPpw79JK7mVb9Ew45qYigpU1k8HhTQMkjFRiIvCz3eS1uwBmiYx56Herfy6Dtg6U59pMMZecX%2Bukt9H%2BexWdEIaLqzad6iiMIb9iMIGOqUB66PyENRMtQy8dUHDLLRCEAYxELT%2FztjrUTgGRftRjwiO3j5YQUnMKuH4zRN8frYU%2B0hi%2Fjs9whibW1AHca%2FR3bpnXAUsd%2B%2BBqfYMgUXm4Hv2oy%2BTZBxYMEqGCHWbyhgD5QXvtPytidaCo4B07ME50JRajNhz%2F0ijAv5xwIAUtMOonTN4O9cLRB4k7zWjxl2%2BQUpOO22CP7p9nP5awjy%2F2A6GsIz8&X-Amz-Signature=6fa797c71876f802d068c853dd212f8057600eb03ae96e16fde04ce653cafdea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NX5HTF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCJ2ukV1rZ7icoFDW634Yyxfnk7a1ng067j2Bf0dXtfsAIgBk1O%2FaSgeY3m5qJtyUNE%2FCSpb4zEYwSXoBAViuWWtb8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNGFSu0lBWMZxsaNtyrcA%2FTCB5hHVSdydscl63psft5Gvxyz81iV3fjeinGo7DklM81%2BNpK%2BgO5dWBfb78TruMABixDwlvo0Dr22xhzzJaSvStLuOvM9gSnWyzX1YSXO8yglrIIn1zd%2FjDXMj7ZBB2T4z%2B5R94%2FaGyTApiCLfYrSy67Ehv9M0kWtNeJ35STCBE%2FjBzUmdHn3A1JSvBTonla3Gj2rVGsnhxco%2BxhdPJb7KVWP2wvyoYKGDSWeytCAIVgwbMzTcJe%2BkLks7aeF5a2T5D3aFKM6Cxp5vTRcZ1WPat%2FT0ScRULmC7Idg1XW2PEQEe5Y1QHSZmIZwFEQ8i4pk3e4wZrIuzLbR4KE12lBMbG18DRfo16E9a40n8jEGK3vxh6AbAUgDrvlDsaTzM2N8ePR3G9HpiCkecCcXK9lGxofiCeHOHR6SLkBgY%2BP4oCJKmdEAgwZTnBgvRS5oQBWaNoJroJxxpZ3Ev55jgj7tRxHm1cFhELQT5CodALM59DmBjE0M5ldhFla7NEqrcnL%2BgUDiU4ZfCNyraNjPTSlF%2BmybwsPpw79JK7mVb9Ew45qYigpU1k8HhTQMkjFRiIvCz3eS1uwBmiYx56Herfy6Dtg6U59pMMZecX%2Bukt9H%2BexWdEIaLqzad6iiMIb9iMIGOqUB66PyENRMtQy8dUHDLLRCEAYxELT%2FztjrUTgGRftRjwiO3j5YQUnMKuH4zRN8frYU%2B0hi%2Fjs9whibW1AHca%2FR3bpnXAUsd%2B%2BBqfYMgUXm4Hv2oy%2BTZBxYMEqGCHWbyhgD5QXvtPytidaCo4B07ME50JRajNhz%2F0ijAv5xwIAUtMOonTN4O9cLRB4k7zWjxl2%2BQUpOO22CP7p9nP5awjy%2F2A6GsIz8&X-Amz-Signature=06c6f13bf51fd8c2b4c7879d988d89eadafe6896ebf3995910dc98ec222a1ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XOSSSQN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCxNrU9XSZ07U%2BD%2FRFNJTDghxVmYKoD%2BYv3N%2B7t9KaqEAIgTZAGZ6lRwrxzY%2B8QMCNwyRiiHMLoVAi%2Fj7hRIE3kAQQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDG7COzY0CkkUpUijDyrcA0usTXZnXrxE4pvVBVCDCBCmq18z5%2Fd9DLhgPxg9JYQ9A3IyOMRMsQdifaBYfaqmO%2BUPfFDLW0icIsW%2FElm646MH%2BByMfA39i%2BvyUZ3%2Fdunt%2FXkc5vTxtU2h0m2Z2VUd5bj9INyUWLxJA2A7bkwcb5eii186peIGONt7VR1Ls79uLtZA6F1oCm2pRkppa3nRIz3j78d0%2BZPRWbaqIlaFEyODdZPLjPHFh5Z%2B%2FHmlztXfi2mG9IaWZkMaWPR3POlMcEnrCbCXZPrzM7dTZBdZg7Fz5Fc%2BMMF7WopqGmMcP07cv4uhqfQCTSCIdk4PL%2FsQNzlny7KrBBBP4%2FCOLBP%2Fzd8kfh%2FvhMzFhxzQ9W6uSFrJJcwtHl5D9Kekn9w6pP5zJfGzvV%2FAeEJpPtNVcg%2BCLGeiEt5dbyLqx0ESiWLgc2cuvH9mQ%2BaxQZISljLWdJ7Sd7nhMu9UdLMBz5sgUjRE9ooL80feEBc1bJiEn82moR8Vie%2F3fS45SIDWWIiKJ9a4j3pj9nm3Vo%2BYIXatpoP7D80xcB0CtzpRO400EfEinqr0qVlQ9UJAUoKPKbvnwzDunG9ZClWvzHBXtae3BcgQG%2BHm5kHFNH6ys9WHxOhDzaTUWyA4DHnX%2BD485P8%2BMPT3iMIGOqUBU%2BYWVE7c58f8ZSPU%2FmMaYHEmZJfvCYxFkTw7QMEnUJxNPtmVz4cyEJ%2FLgLYEfL0exYrQpdAceSPSpzfhI%2BjSKJ7vhmJdMe%2BCrGYFhMvJfOjyZfK9ENFkj3Ag8Jm0QJOiZUiuSy4DeK4Cug3FWqqoTu0OaR2HrdFI7PwSyYqnHEg%2FxClXMoX%2Fc3dzL5F7LtLTEP8kSqFW0P%2BA8jf6r6QYef8QLNBX&X-Amz-Signature=af367b5c1f992101651fbbb3d123c94174515b898c7fc08430cc6dfe9d78b95f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH4SETPK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIFnwERTN1oNF9Tgi8VcRFimnkihQnztKJmNelKWj0fqOAiEA4Ohu7T0qXfJQX5T6YtAqxSaTMApyPf9yCZSwZSiJIj8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDGgn6ZNIz%2BqKj4ZfircAy7w1we%2BnXTomyQxdSYlDVNLHwytUSir%2FrRBXabzQUrmpDbfKKL2pekEFYktjMzEjgz7PjG%2FNq22HgUuAFE6BTZ8fpqbL8yvaLPjwvkMEhOlG6wXv7QMnGzptwjGPFfL5tENzy2otSA0wI3SRf4Lt67vt45Mp0GriDFeTWyVDQ3mTnLVwUuChfB1yv2qXGTKxUZrXpX5qY%2FDUcDcLf0%2B0ioDGJQuC6TUc2SW7PQD8kcckjUuQH00VqLCFBpUbkmLVlVep0RUPAEJYfRsEWTiWrKlnNuKdLd77L08t%2BsG%2BMV%2FvpgC3Cd1WjjkeaS%2FmeEovqgrhYnNYmannjfUBqKzqZWX7YFuEjYrFYFBeYJVhajtC3vL1Z9FY0pcy9LKH3gVfGGNc%2FIQEtsMcHlmFcOizl7vjEa57MNtucU%2F1rVVXgdnOUyHjHrFRexE0jaCOJiu%2BHZDfH9mNquSbLEVZxlZ0pi5eKfHMOWeBBFslsDBgbpFrmaqF5kY4zNUPaMd%2BvwtQNdogl0jvmiw00qKJKMekOGiw7blmNZek2tkYcfRD9s0Ej7%2BPD7DKcs7J0JUPhyM7cCi%2BQfFobQb436AuEbayufbyEw7xWhTRUJkxHxuNH23O83jFjZpXiFN80KyMP%2FwiMIGOqUBJ%2FYeHxg59hteGCwTlCMaOFZKokFMRsMJy0c11ns7DW7NN4dgVi4NiI4dP2N%2BxtJ02z4UmXy4GXi%2BbncGpf3G1cOIs5qJMKqQL%2FQmVNQkU4sMDx%2BEHuQfb4ojIcMjLlVo2luBL8dEfUaCUc6xSlj1BOGd05RvgjmAaMXv0GXUnuyrFdqP1wXZF2OclGlG%2BajhxEzXtQ5%2F1BufFvB0e8FF1awcNxWD&X-Amz-Signature=9bcd794479a0868e09844780bef97166675051e7a0e56b73b124eaa0810dbf4d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NX5HTF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCJ2ukV1rZ7icoFDW634Yyxfnk7a1ng067j2Bf0dXtfsAIgBk1O%2FaSgeY3m5qJtyUNE%2FCSpb4zEYwSXoBAViuWWtb8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNGFSu0lBWMZxsaNtyrcA%2FTCB5hHVSdydscl63psft5Gvxyz81iV3fjeinGo7DklM81%2BNpK%2BgO5dWBfb78TruMABixDwlvo0Dr22xhzzJaSvStLuOvM9gSnWyzX1YSXO8yglrIIn1zd%2FjDXMj7ZBB2T4z%2B5R94%2FaGyTApiCLfYrSy67Ehv9M0kWtNeJ35STCBE%2FjBzUmdHn3A1JSvBTonla3Gj2rVGsnhxco%2BxhdPJb7KVWP2wvyoYKGDSWeytCAIVgwbMzTcJe%2BkLks7aeF5a2T5D3aFKM6Cxp5vTRcZ1WPat%2FT0ScRULmC7Idg1XW2PEQEe5Y1QHSZmIZwFEQ8i4pk3e4wZrIuzLbR4KE12lBMbG18DRfo16E9a40n8jEGK3vxh6AbAUgDrvlDsaTzM2N8ePR3G9HpiCkecCcXK9lGxofiCeHOHR6SLkBgY%2BP4oCJKmdEAgwZTnBgvRS5oQBWaNoJroJxxpZ3Ev55jgj7tRxHm1cFhELQT5CodALM59DmBjE0M5ldhFla7NEqrcnL%2BgUDiU4ZfCNyraNjPTSlF%2BmybwsPpw79JK7mVb9Ew45qYigpU1k8HhTQMkjFRiIvCz3eS1uwBmiYx56Herfy6Dtg6U59pMMZecX%2Bukt9H%2BexWdEIaLqzad6iiMIb9iMIGOqUB66PyENRMtQy8dUHDLLRCEAYxELT%2FztjrUTgGRftRjwiO3j5YQUnMKuH4zRN8frYU%2B0hi%2Fjs9whibW1AHca%2FR3bpnXAUsd%2B%2BBqfYMgUXm4Hv2oy%2BTZBxYMEqGCHWbyhgD5QXvtPytidaCo4B07ME50JRajNhz%2F0ijAv5xwIAUtMOonTN4O9cLRB4k7zWjxl2%2BQUpOO22CP7p9nP5awjy%2F2A6GsIz8&X-Amz-Signature=058c081029be8d8fb69a4e5d3fead6c1799771977032946d444f188dd8232fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
