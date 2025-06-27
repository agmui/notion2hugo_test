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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HU35ZUJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtM80sZPqHR4v%2B6pmCNimM9t9s91pkZTfiUsA4hEPtIAiBrPHr%2BhJtr4WDV2pfvqT2N8%2FwbgfDQsqj7q7KITysi9yr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMrdOoP1rxoIPgKgcPKtwD%2BjUay2ZSRpNwMbfUAEriqSHTnxZyHW9FK%2BCGK4J0%2B7%2BoRTGHSAIEuMN9Zpt%2FmxTxmhzDy2h0ssPnq84WL0vwpBvkJPFwMZdgEgXoGmupYSXU8vCCzuuQFliiLioqsGeuVt5ETAMJ9nBVe0rOXSBADjgPPwLGTnxjcyC7Jgsp8QoLjHlel9dGco9HUQrdJELrkEwU6axH00wQf%2BEkIgZMkEPQwJ0HiAGd%2BkEPjfSG0XwER7cFgG1D2K2Fa9vYGsXG7DN%2B7xkvQwgy3mmN7q3rjw72ZHUPhBXUoLYCihCh33yp3ogbQXgyC2SuI6BhXHCu%2BQMNRjpKZeCNL3PTEQxWPeJmx8rDEk2FRhOwffphiuw%2BPPEigx0EOZMaaA7XtrN31QC8JBW9NBgXG7CqNO5r44HHbKs%2Bx80GUV7F0BCmwml3pBwuTRVTBp7R%2FzgDGrQcluMMJs3pD0DXJk8YAJ397sZSP6daFrAN0fwf5QUyC0oCQJAbhYb8mkbrcqTL23WMaMajVkxzbyorPP2zHfHpNQefQ1ixXj3BXNlKl2aUjfnJ9dceC7tDiXykVfRCFz8Slp0DyghIfK9kfDIGcJMhmM4KC3%2BMW7XnqsusoPlNyAO28Kc%2BXS3p7zqbLWYwyKT7wgY6pgFfqmd3BFW%2FeuY95Kwe4JyJVVasmbGcfo72S1fV1t9xbbJL9OeD0sQaRxaFe5TTorgyg2xw2XeZ2N2%2FMqLqMQVQhgj8KLRdUj3eUETfxeqO9PbSxkWg2%2B%2FcUu2LBsxDjSTAyCLgZ%2FEDvzgwpnJC5z5mCXo4WbGVItEWXGvXJIvCkP3PpTv7z1f7W%2Bk9IeoaMstYFasQe3crFo3F0DYEAKjacGLJJtr4&X-Amz-Signature=cfca80ec742c225658b49148f62743bb3dbf9f377cbf280f8c5f6c9f21ff959b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HU35ZUJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtM80sZPqHR4v%2B6pmCNimM9t9s91pkZTfiUsA4hEPtIAiBrPHr%2BhJtr4WDV2pfvqT2N8%2FwbgfDQsqj7q7KITysi9yr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMrdOoP1rxoIPgKgcPKtwD%2BjUay2ZSRpNwMbfUAEriqSHTnxZyHW9FK%2BCGK4J0%2B7%2BoRTGHSAIEuMN9Zpt%2FmxTxmhzDy2h0ssPnq84WL0vwpBvkJPFwMZdgEgXoGmupYSXU8vCCzuuQFliiLioqsGeuVt5ETAMJ9nBVe0rOXSBADjgPPwLGTnxjcyC7Jgsp8QoLjHlel9dGco9HUQrdJELrkEwU6axH00wQf%2BEkIgZMkEPQwJ0HiAGd%2BkEPjfSG0XwER7cFgG1D2K2Fa9vYGsXG7DN%2B7xkvQwgy3mmN7q3rjw72ZHUPhBXUoLYCihCh33yp3ogbQXgyC2SuI6BhXHCu%2BQMNRjpKZeCNL3PTEQxWPeJmx8rDEk2FRhOwffphiuw%2BPPEigx0EOZMaaA7XtrN31QC8JBW9NBgXG7CqNO5r44HHbKs%2Bx80GUV7F0BCmwml3pBwuTRVTBp7R%2FzgDGrQcluMMJs3pD0DXJk8YAJ397sZSP6daFrAN0fwf5QUyC0oCQJAbhYb8mkbrcqTL23WMaMajVkxzbyorPP2zHfHpNQefQ1ixXj3BXNlKl2aUjfnJ9dceC7tDiXykVfRCFz8Slp0DyghIfK9kfDIGcJMhmM4KC3%2BMW7XnqsusoPlNyAO28Kc%2BXS3p7zqbLWYwyKT7wgY6pgFfqmd3BFW%2FeuY95Kwe4JyJVVasmbGcfo72S1fV1t9xbbJL9OeD0sQaRxaFe5TTorgyg2xw2XeZ2N2%2FMqLqMQVQhgj8KLRdUj3eUETfxeqO9PbSxkWg2%2B%2FcUu2LBsxDjSTAyCLgZ%2FEDvzgwpnJC5z5mCXo4WbGVItEWXGvXJIvCkP3PpTv7z1f7W%2Bk9IeoaMstYFasQe3crFo3F0DYEAKjacGLJJtr4&X-Amz-Signature=19fd325c45b2e53cfa537cc8bc83749f9e4c7868ce480d06e80193f731034679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HU35ZUJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtM80sZPqHR4v%2B6pmCNimM9t9s91pkZTfiUsA4hEPtIAiBrPHr%2BhJtr4WDV2pfvqT2N8%2FwbgfDQsqj7q7KITysi9yr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMrdOoP1rxoIPgKgcPKtwD%2BjUay2ZSRpNwMbfUAEriqSHTnxZyHW9FK%2BCGK4J0%2B7%2BoRTGHSAIEuMN9Zpt%2FmxTxmhzDy2h0ssPnq84WL0vwpBvkJPFwMZdgEgXoGmupYSXU8vCCzuuQFliiLioqsGeuVt5ETAMJ9nBVe0rOXSBADjgPPwLGTnxjcyC7Jgsp8QoLjHlel9dGco9HUQrdJELrkEwU6axH00wQf%2BEkIgZMkEPQwJ0HiAGd%2BkEPjfSG0XwER7cFgG1D2K2Fa9vYGsXG7DN%2B7xkvQwgy3mmN7q3rjw72ZHUPhBXUoLYCihCh33yp3ogbQXgyC2SuI6BhXHCu%2BQMNRjpKZeCNL3PTEQxWPeJmx8rDEk2FRhOwffphiuw%2BPPEigx0EOZMaaA7XtrN31QC8JBW9NBgXG7CqNO5r44HHbKs%2Bx80GUV7F0BCmwml3pBwuTRVTBp7R%2FzgDGrQcluMMJs3pD0DXJk8YAJ397sZSP6daFrAN0fwf5QUyC0oCQJAbhYb8mkbrcqTL23WMaMajVkxzbyorPP2zHfHpNQefQ1ixXj3BXNlKl2aUjfnJ9dceC7tDiXykVfRCFz8Slp0DyghIfK9kfDIGcJMhmM4KC3%2BMW7XnqsusoPlNyAO28Kc%2BXS3p7zqbLWYwyKT7wgY6pgFfqmd3BFW%2FeuY95Kwe4JyJVVasmbGcfo72S1fV1t9xbbJL9OeD0sQaRxaFe5TTorgyg2xw2XeZ2N2%2FMqLqMQVQhgj8KLRdUj3eUETfxeqO9PbSxkWg2%2B%2FcUu2LBsxDjSTAyCLgZ%2FEDvzgwpnJC5z5mCXo4WbGVItEWXGvXJIvCkP3PpTv7z1f7W%2Bk9IeoaMstYFasQe3crFo3F0DYEAKjacGLJJtr4&X-Amz-Signature=b2906fb25a4a0b9afd7241d8c1e0320074fa6259eab244b757c653a4e319dc86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JLNGNSD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeHz81IrZ261A%2FQpONeaJQAngSETxpCI%2BADO%2FVNlRs8gIhAOLGZ3RP6txROkfmALVFyIdxhj19pJUD0rfZ8GbwCzssKv8DCHoQABoMNjM3NDIzMTgzODA1Igy1Drlm7wv%2F5OCWtbQq3ANA%2BnLJVN5u6CJOrDgrjlI%2Btjgab7OLDn8ETv9AEuR9ga2wqVfhFmNDZPLqJpvjfh9Qmtmx0ZG9O7trsudaTng%2BQKPdmvqD9R0k2O2sFJO2VzY61zrh6rpHq8WUaDgzQDI3sdvInLA0Bm9bKLfKp22t0UbSKFG%2BJnHaC4yfcj17ZCGUzzS%2F9emevqiGKPLhNv2br95lmWCD6IhoGirl8VDZEMlwUp4amMhadTEHciuK3H%2BmlEmeNjTaoeLpsjyYyvWx%2FTivl%2BwQ%2BZxYKwl656NljVIX%2FXueN%2BblJHP2Ne8CoRQp8HeeIDDmP0I5fPi6VhSZV7IRakrZ9UvhyChCRWg3MKEbsMJXfou9BvzwpH%2F1d5iF8WcH6fA952xeKAkkEFyatpcP%2BymJYqj4yXr6ELBg6hVPQhqZxiwxHqOgJsZ1VqAWNn6OJoVk8c8zaG%2FvwRmmc5ujJFsfS9z4as%2FSEpp%2BQdSPsXR6kB0KXfec%2BL18tfb6cEJ%2Fz1%2Bm3Oqd5gz1Cu9pjRnYrlmVVn7zB9E8PjGjUNGcWZuTZ6dvURFf7rIGyO8J5fVQqF90n8QqaTNCOoGt%2Fhfr2Mzv9ws632vcpn0KlJyiB8Nn28AqrySMiYE6s6a3jZDUUlhl10YwwDD9o%2FvCBjqkAXtfwQnKlIXVQvTtfFt2pKXEDCWMYbUI9ygSn7rEqsosirGQHtmsjH5qnh5QkpHKBbYcLKW0zTvEb3P8zvXYeZ2kSFjjyNEKda7h9xO%2BvOudJqfDnwh%2B4GEunhwfgdeVhLOhpzBknUVEmBWCwoFwtJ6X%2FAIwgT2PALy6%2FSaaumQqd9yUHKcVW%2FxqNJwORerH2U96NPPHtp61ExP40Gpv81y2dO2G&X-Amz-Signature=54c193830d5d138b2516882ac5c5d840e94ff0676010cc995dfa074c76962168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CXCXFXB%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8gxV6pgLS4CKJTP50sKZK76srQy%2F5%2FbW8wmZNdmPDKAiAH%2Bw%2FKmt51m%2F1zx%2Bcu7AkyxUIKyRVP%2FPoF7PhNRn6E0Sr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMESZmJvtuAOXb3fx7KtwDgxDERg%2FSnP2rdFgb%2BPmHwWGV6gWT2keBncGWMFTKxE1eLUHURgWRSkZhj4m2ezJZpsxmuVKAcDb5%2BCVMJV02CkodUv3LnIqKApZGXwDXbqqGA7SaEJzt3cr4ZmycBYuo115ybqOBQZraSpjFPOM287%2FXqINBtUa19i9K%2FxHr723ttXhc0ElnY3E1zb%2F0DAycGp47vSSLvzI9wNxOgHQpU5TT4yVkT8jaaFAs5o0PJkQL%2Bj1Q%2FnP75SjYdPwrR6fxVUclx%2Fv7jFMcBsxT6VPfZ33nYSU8%2FV14Vfx5extM59jUs6mwh61CWZafjF4Q13OQx45QWvRn5OS%2FY8qg7QJMUwbXTLzC8BVVHo9idryxKGrMw0Bn89JlRY%2F9jbBSYlaXz%2F7rt2wxAy6ZbUJL7tR8Am35gA3ssA3L6VGQE5QsjOZrI0wgP73jvYazIjD8%2BIHuwnNpGnqMtgS0sesH4ltA6MZfBGBT96GObO8IEKS4%2BOuHEVOsrm9cz1Jh%2Bmrt04tta7RrNieepNttbpW47nCriRZf8J85R9LnyzX%2Fz1eI60Pq%2FY1ciAmU4N94iyTD1J%2ByRcOcImWnkC3kD%2FFnKFE7u1l1hxFvxqYoOUZjGV0zZAiqW7FMPy2VFn5hveIwzqT7wgY6pgEdZuGA0rSNa27LffUhNRH8Ue2bHfiKFcEDUxWw0dFK3dkmT0lF8dd%2BQq6lJtgqFw%2BJyAEn3oobYPKf%2BdmBP4uLE2d01fZLg5OusyuJK%2B4MdCDp1XZuyOKokEJS2E%2BJ60S6hhYg9TnFQEf7lnhzqwRfNS%2B8ZHcPNcOURy8yRtvhAHd7fy4IgSqjzDlp8SHSUZsRo4rda6fQZeaIkrsSnkvSyPpjvh%2BH&X-Amz-Signature=127fe86c891d849d60d18b609b785dc90c524af6b28ad0ef1912c0bdb766defb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HU35ZUJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtM80sZPqHR4v%2B6pmCNimM9t9s91pkZTfiUsA4hEPtIAiBrPHr%2BhJtr4WDV2pfvqT2N8%2FwbgfDQsqj7q7KITysi9yr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMrdOoP1rxoIPgKgcPKtwD%2BjUay2ZSRpNwMbfUAEriqSHTnxZyHW9FK%2BCGK4J0%2B7%2BoRTGHSAIEuMN9Zpt%2FmxTxmhzDy2h0ssPnq84WL0vwpBvkJPFwMZdgEgXoGmupYSXU8vCCzuuQFliiLioqsGeuVt5ETAMJ9nBVe0rOXSBADjgPPwLGTnxjcyC7Jgsp8QoLjHlel9dGco9HUQrdJELrkEwU6axH00wQf%2BEkIgZMkEPQwJ0HiAGd%2BkEPjfSG0XwER7cFgG1D2K2Fa9vYGsXG7DN%2B7xkvQwgy3mmN7q3rjw72ZHUPhBXUoLYCihCh33yp3ogbQXgyC2SuI6BhXHCu%2BQMNRjpKZeCNL3PTEQxWPeJmx8rDEk2FRhOwffphiuw%2BPPEigx0EOZMaaA7XtrN31QC8JBW9NBgXG7CqNO5r44HHbKs%2Bx80GUV7F0BCmwml3pBwuTRVTBp7R%2FzgDGrQcluMMJs3pD0DXJk8YAJ397sZSP6daFrAN0fwf5QUyC0oCQJAbhYb8mkbrcqTL23WMaMajVkxzbyorPP2zHfHpNQefQ1ixXj3BXNlKl2aUjfnJ9dceC7tDiXykVfRCFz8Slp0DyghIfK9kfDIGcJMhmM4KC3%2BMW7XnqsusoPlNyAO28Kc%2BXS3p7zqbLWYwyKT7wgY6pgFfqmd3BFW%2FeuY95Kwe4JyJVVasmbGcfo72S1fV1t9xbbJL9OeD0sQaRxaFe5TTorgyg2xw2XeZ2N2%2FMqLqMQVQhgj8KLRdUj3eUETfxeqO9PbSxkWg2%2B%2FcUu2LBsxDjSTAyCLgZ%2FEDvzgwpnJC5z5mCXo4WbGVItEWXGvXJIvCkP3PpTv7z1f7W%2Bk9IeoaMstYFasQe3crFo3F0DYEAKjacGLJJtr4&X-Amz-Signature=cfd17fde5d6734f53426def1c3c6bed9f4384c97fa2701ca66308567aee3ebd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
