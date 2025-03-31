---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNN4ZQX6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEWQILgpS7AoO5fSipeyO3zVPyytuXDvbqfPz0V%2FLBXhAiAc55MvLfrfYflcztLzIgI9SWBUQQVFeAuXzElTbOrRYSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq0WCnSEOABCVgaEXKtwDiKf3Cg3iibvpsJ36NIna1ebWPC1xQi1BEyP7LanfsjO2eYs0XHEb%2B1RdVMRrEI%2BJLAZMJ5Fvw1KFaz8NEFCSN61T%2B%2FGH2%2FdrGz06do9qAglZCXHiVHzOHQ5TqrU2DiO8Plee6itceevUbMcZ1iAmDBNlzmDdcEjOl4mPEK4UYaoIAmbVo3oqTfgyrOdvDIIFRuLoe56h8XZrdIYxrG3Nnz4Cd6tqNWyHJgCldt6ilTfbZJREPrTGTddi%2BQLJuZEx3i16agLab4mvAANS4Y0ESYy%2FdedttfxCWSrxXdgSYJg81yVfG1407vn42792AKotCR%2Bx8kKTxfG%2BWpbP%2B6VwXoIGfFFlCFVAmIw5FwSg4Gh%2FdAnc3fDQ8VvQlLZORHHcRBBvbR%2BuD8BpdWU7SxJh%2FrqWF00yoSRsAXRqx2pZevZp48DifRRBA9ahTvoGzBtkp81%2FROaNsVSf5fEuh4%2B6cIUU3YADxpCRdj%2Fmcl0nxU1rPWHP3ZB6EOB0h34%2BQ9yrOfcukyTipbAxZLmKjV0Sz2QWniAFkouzYDgHd7rMQQAA%2Fja5EQrPjVTRic8dlIFcHa5KtATB0iQvpn3kQ6oti2v3QvzkCedASZYx11wxE6xGGedjkQ6RQMVTXuowmOWovwY6pgEfDEkU0ocjJZyaQ1cV7x%2F0P4nSfLfbVZxpsb%2FVNF%2FgDU%2B2aUscOYEMIRLcHEiIZliv1z7nPgHmrzilz60gvUwBJ%2Bl6h3P7G01CCOcATzeQLB%2BcrltFE063VjbnzNKBLmCfktIzMtUckeVSMYY9if7FlkTO5NNUKqoRCih6cKNUdY62eAoKuEJPUypuwfWdYoCasHFivt66cVsWKWwmWZslPk2eX7qb&X-Amz-Signature=e1471e0c52d45afe0c934a9427c5dc9f898205b52553f33090dbf296c6b2a2d4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNN4ZQX6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEWQILgpS7AoO5fSipeyO3zVPyytuXDvbqfPz0V%2FLBXhAiAc55MvLfrfYflcztLzIgI9SWBUQQVFeAuXzElTbOrRYSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq0WCnSEOABCVgaEXKtwDiKf3Cg3iibvpsJ36NIna1ebWPC1xQi1BEyP7LanfsjO2eYs0XHEb%2B1RdVMRrEI%2BJLAZMJ5Fvw1KFaz8NEFCSN61T%2B%2FGH2%2FdrGz06do9qAglZCXHiVHzOHQ5TqrU2DiO8Plee6itceevUbMcZ1iAmDBNlzmDdcEjOl4mPEK4UYaoIAmbVo3oqTfgyrOdvDIIFRuLoe56h8XZrdIYxrG3Nnz4Cd6tqNWyHJgCldt6ilTfbZJREPrTGTddi%2BQLJuZEx3i16agLab4mvAANS4Y0ESYy%2FdedttfxCWSrxXdgSYJg81yVfG1407vn42792AKotCR%2Bx8kKTxfG%2BWpbP%2B6VwXoIGfFFlCFVAmIw5FwSg4Gh%2FdAnc3fDQ8VvQlLZORHHcRBBvbR%2BuD8BpdWU7SxJh%2FrqWF00yoSRsAXRqx2pZevZp48DifRRBA9ahTvoGzBtkp81%2FROaNsVSf5fEuh4%2B6cIUU3YADxpCRdj%2Fmcl0nxU1rPWHP3ZB6EOB0h34%2BQ9yrOfcukyTipbAxZLmKjV0Sz2QWniAFkouzYDgHd7rMQQAA%2Fja5EQrPjVTRic8dlIFcHa5KtATB0iQvpn3kQ6oti2v3QvzkCedASZYx11wxE6xGGedjkQ6RQMVTXuowmOWovwY6pgEfDEkU0ocjJZyaQ1cV7x%2F0P4nSfLfbVZxpsb%2FVNF%2FgDU%2B2aUscOYEMIRLcHEiIZliv1z7nPgHmrzilz60gvUwBJ%2Bl6h3P7G01CCOcATzeQLB%2BcrltFE063VjbnzNKBLmCfktIzMtUckeVSMYY9if7FlkTO5NNUKqoRCih6cKNUdY62eAoKuEJPUypuwfWdYoCasHFivt66cVsWKWwmWZslPk2eX7qb&X-Amz-Signature=4280e8de95319e264189cbd576965f6b9afd234b9f5148b7b081eca018c7b40d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7GTVFE%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCKjO9oFgoN0tvBBPpiFuCp%2BJ6bBrYkDGJ0WuYjdBZgjQIhAIRLVY%2FH5JyTYx7xNLTPsfBUtpLh7tHFhlPrbBLjuFPRKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVHaQ2Iz0J2ERnqpUq3APFAemJ%2FAw7kSCdymlkhXMT2CZy6CsvwMwTxp8Mkjrc%2B9kq3x8XTLhm5DNoLoKytAa9yYanmZmj%2BFnxI3S6vEEwB86lerQMU84FU5osfbvjrFwm1JdLFaSf0OGHIFxK9x%2Fh%2FYvVE8X5GAs8A6Y8J%2FfLUsuLWxhxHpnOWB5MDVzhKipWvF8T7MrUU4BbYUk%2F%2BEnOWPTOzzmpj3gLPAcacxtud97zm4tleQxJmoSoou1p6mGoYzewfCkVWnuFU8Izvr2fwy8K%2BU3Aa4DZ5nNF0wGIBAQYATdJc1T2EB5k6xgsPY9yZgfkjoFBX1DXeKsQ3Xj%2B3lSYB0sMqgEn0GFGY3VKZ%2FIyAsjIcxEbOLZnnT71rVyx6ChHSR5%2BJfzo0ijSgIkTEw0R3IggROsVs%2B9H8b0iviMsd9lUw3niWCunbxPZOHgaWV9OXmaAPOMHfTyXGS456ZOdmWzmjzFCpxwqsaFmgOhavxwprbzb524YJyvfWx7hM%2FLrJxkkJygkS772oNWNVHFoUXE9usKkEtuO5Z1WiywBstWQmKCwai7ZTnoQFHyKmpvXokZ4oVo%2Fy%2Fl%2FascAyFY9QtxVlOK7Nm9R8gBLtEbjafrkzhX7wCSAHcqTwwR94QZMwcw6uorP5zCC5Ki%2FBjqkAYa0JJDE%2FNZ6moSrdV10%2BF9V2o%2BdX6SGM3pS2lCxUJpnM9HeaKJOg%2FIUStONP8W1qmkAlGzF%2BWM9TfKSaxB8jysID9yDydDRltn9Nx3wrqpRftjz1nfyF9FfHKbv4UOj%2FY3PT75GNlII2s%2FfOjN1mymUFLOWpzJA%2FT0QhmYhE9iKddLo%2FEPu92Q%2BKSHCwsOWMOgoIA%2BGI9LhKT2RxGVbZHU3NtSI&X-Amz-Signature=671bfbade86e371d950f30a119ac00d5d1fcd706beb0e30200443d4faa84d364&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USU6FOLV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCzZhTj56U4Y7biML2TYVewvVnRBruml28md6p3mYhblAIhAOxMNotnxJcgCtccmkugv4a%2Bd8bNmRsnQcvtj2mur%2BztKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8%2F7fElUbUeZOHOLMq3AMeUDRVqKq1e4Mn22IyomfhIBJp3y92kTRhkmc6U716iPm9caBjMvEOy3lQZNEZRhqZXd%2B9HRp3lszGXzvF6nm9DsSjDNtuiKVONLtMf%2Fy0Ui52e8gEP1EBKAEOUypGxM4ZMXVKc4tQoZMdhO194ZNInX%2B0nrklxpn4s4A2iQZ%2Bh%2FJhfcrG3q6cyORj1hbGicq6xA7qLsD6g0x65KNDhAoSVkecubaCRNn%2Fgxr4CrAL%2FB8OZYTUJ4XaY8H6yfdUoGL1ft1ZmeVyJdmqxjFRPA%2Fni1uYNJ62FpZ%2FIpkV5aWhsoIeW3jeC5siKmaqr9brPbNmloW5zCXWT6TV%2Fsok4DvQF6BdkevxMCU7v3UnwWxd9C7Oo3SnPgBv2PMqiuqU6AJqN6R9QvzwT79D%2BgU0ztxZUdk6CfyvDcxGn0NaVhH098Mc1flrEtomj%2BKsN0YXvnl7oNN%2BgNH%2FZv62zscrx8Zw8man6xtN1SWqNOfPSc9WmgcS%2Fhn6AscE1KmuidIB2hE0irriOQy9yjBwvHZnYb%2BZBK28Tfxkn2UpqC9i3InCi4FG23HxFxaHBMAbroPeqlDwPiPkqC%2BqvDQBL0PDrHdqSB37%2Fe%2F64gC48OtscrR05HGjSpNV7j1UqiUdvjCd5ai%2FBjqkAclo4gye2o5n397%2F8ipvtCxSwrGx1xj4x%2FoWQOWnFUpz8CwwzUc%2FHOdCTA6nQQtBHSuHQfT2X6IZ3pq%2FB98MVFWh%2FzI3wG6LWU5Q1pMpbK7tTUlxTn4TQI4LtiZdkFxi3sq8X0T0VVh7BJo%2F%2FJS2ImJ8GJthE%2B1clWUaKz6c6P6W0FXcEYO72Sgvwkf7%2FV%2F7VhCBeuSQ1F49Ifr%2BDmurKhML%2F0II&X-Amz-Signature=e46c4cf838ed42cc53f5a844ffdee97bac49f3273ce29c7aab3ffbb94d0f2f92&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNN4ZQX6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIEWQILgpS7AoO5fSipeyO3zVPyytuXDvbqfPz0V%2FLBXhAiAc55MvLfrfYflcztLzIgI9SWBUQQVFeAuXzElTbOrRYSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq0WCnSEOABCVgaEXKtwDiKf3Cg3iibvpsJ36NIna1ebWPC1xQi1BEyP7LanfsjO2eYs0XHEb%2B1RdVMRrEI%2BJLAZMJ5Fvw1KFaz8NEFCSN61T%2B%2FGH2%2FdrGz06do9qAglZCXHiVHzOHQ5TqrU2DiO8Plee6itceevUbMcZ1iAmDBNlzmDdcEjOl4mPEK4UYaoIAmbVo3oqTfgyrOdvDIIFRuLoe56h8XZrdIYxrG3Nnz4Cd6tqNWyHJgCldt6ilTfbZJREPrTGTddi%2BQLJuZEx3i16agLab4mvAANS4Y0ESYy%2FdedttfxCWSrxXdgSYJg81yVfG1407vn42792AKotCR%2Bx8kKTxfG%2BWpbP%2B6VwXoIGfFFlCFVAmIw5FwSg4Gh%2FdAnc3fDQ8VvQlLZORHHcRBBvbR%2BuD8BpdWU7SxJh%2FrqWF00yoSRsAXRqx2pZevZp48DifRRBA9ahTvoGzBtkp81%2FROaNsVSf5fEuh4%2B6cIUU3YADxpCRdj%2Fmcl0nxU1rPWHP3ZB6EOB0h34%2BQ9yrOfcukyTipbAxZLmKjV0Sz2QWniAFkouzYDgHd7rMQQAA%2Fja5EQrPjVTRic8dlIFcHa5KtATB0iQvpn3kQ6oti2v3QvzkCedASZYx11wxE6xGGedjkQ6RQMVTXuowmOWovwY6pgEfDEkU0ocjJZyaQ1cV7x%2F0P4nSfLfbVZxpsb%2FVNF%2FgDU%2B2aUscOYEMIRLcHEiIZliv1z7nPgHmrzilz60gvUwBJ%2Bl6h3P7G01CCOcATzeQLB%2BcrltFE063VjbnzNKBLmCfktIzMtUckeVSMYY9if7FlkTO5NNUKqoRCih6cKNUdY62eAoKuEJPUypuwfWdYoCasHFivt66cVsWKWwmWZslPk2eX7qb&X-Amz-Signature=1a175462479674d9254f8ae546e01d78fff0286b493bdee2eb4c6e9eca31bf1d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
