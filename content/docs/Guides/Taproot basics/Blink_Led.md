---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD5A6S32%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6kXFBG8fDEQgp88SXWqBsbqUBtJY8qXkJYkcRfLZ%2FmAiArs8nE2uPzR3xQVlHpJ0SsfUPo5d%2FVODTQjzMZ8QljMCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2Bk6DzgQlnoEYv%2FFKtwDZVGCPoJXR55tv22O3ucNAHlb0hjq3qd1XKEgI3Nzi51fyhUQg8F4uqlQVVowe%2BSu3fG8k1G2AGiGSrAqnSpFemO8%2FknYS06x6eYEKmZi4oCnfH1q7dMsVIP38UqSWL6WNnC15BpgI9XHpsGTYLeuEPNBwH4LIM90RF0eVEil0PBU1Id2x0tLp0BkLbkC7rs71KuQxkvYgf%2FbERNl%2FnaCtPS4V%2BNF0ONgg2qGsXHXdUBNea9IR6Eh4LXz281mUKlOvI7CCRw1W8%2FXCjLfTbY4vjI1Rfa3kepQKfdyor3UNgA3qcWbSVt36D4%2BQSdMTRFeBqgq9UzeVkKFuCpfHKsdKBPf1jW8ZpyFoxF0kQbx118H2kWYpcmLE2aongFYLOO8U9fslerv%2BqUOcl5uZP6O0iXNHuzR0QinUYcTIuXuioD6y2X%2BwSBz8lZL%2B%2BbS%2FkubsvoVtQLlmr2AitBWVouWzIB0F2hyenjgJGuKyPxHotiFB8FYfdrqo4qMyjU0JIsCIuvYEmegQisvPMqUd0NULzK0%2FfXz17fzQ2CTAN1YyxmO2sEIFJwV%2F4%2FBHxbMSzq0Ktfl2qkHpZVDCFfLKeljDEVtrmkW5QgnsqJ2PgBA1QSb4XDxiv8A5KK%2Fyrcw5sqrxAY6pgHsMqmMLLwSVOpXn%2FiXWvhs9o%2F3%2BnOS%2B16TrQMkB2oV93Nlc9TeyWlb56G59fHFY08iPc7zgIfGzKF7d0Vk3ZPLLZlprLFMdM9P009bdzqu87dZFKjLrfmqdmXDPdkxHjSD2VBL5qNi0v6nqo1%2F%2B6bRUINa2n8bdgDilg9bDCCwoxSkMlXsJJwlAWbKVV2rBslQhmva27QpBhqLAcfFAOxMZADUCeRw&X-Amz-Signature=27b212904fee63bd794ea63093b2e5eef8051106daf54b0fb042917fd2857816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6H3QXHP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECfUu2xxr5mxMWg5UVMjZfaSerDrH%2Bx9C%2B8kYS9My%2FVAiEA9WubCVIYvA8UHpHDenFLtnL6xPTU6IcGxx7yV1gs2RIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlO5ZVuZcYzKU9WFircA61rZh91pJ24bYTx9xY%2BKeGot%2Fq0cLAlU8S7GpGihyV5lQ%2BUSz7A5YvwIKiJM1383jm4xsIjLZjZyQnzHBBg3Z3Tx0HIHNgw6OMb4%2Boqb28MSnWMGNwhHK%2BPDueFUgBX%2BpvrrFVLJ3wyxRK3UsNJDJAVyY7qd7ENSfx%2FIpf2m18IKNqY5eFePGfQkYY7umNCjlgWBHDzWKn4zrHo1WlD%2BoqlZ7APkxKv0PUJtw61a%2BoPIZYXsBr%2F26NeHC%2BgdbCGm9WH6vZ6CpQlDEadkm8yroHB4pWf50GSkGNn9qQnFCEDCUlHrbAcmbk7LFQmlCxCYD5S9Dw%2BwG2o6P5nTvjK7659pmzHacPtG8p%2FJ8vrt7rhYMAs23HaxTuHH7G5IFznp7nUNa5rhb41wZRBHoe91PguUl5ub05zqCcaYnEy3G0yr1Igeww2eaMIKqIC4GfOolnjV0o8MQp%2BbjzAoObFSiYkS43xA2SQsM5%2FmQHWjhby0%2BTC%2FuCFNxEXiugxKCeFg2lsmclZVPijfh5tesowVcj%2Be%2BNpV7cXhcl5qNMb2pu5t2e41Wb1Dvy7WYgb7kOpx4noJ%2FmpF9EtQxnr34xoLBwVfFMsnRuNYacolCHtjZ%2BB%2B4PgSJax1NlaMSfpMIHKq8QGOqUB6mkWqk5o7DTcftktQLBmc0uwirc%2BJgAgCmQyx6bsKnk3WOOQSJf%2F30ELJFyxZrxM7%2BXFCN8HuZe4M9plwTsUl%2FnEb3dNzzIDRNpi2JmwE7pfX6h6mdyjAazN8QX0rVUQ9%2BaZIia0IPdUL65NGMk%2FmpYQQBsxBPOjzFKl6%2BBbeUkB%2Frmhs5fD9HiOfOugG215ChjgJxBwVCDePlwpuIvDoxOeS%2FY%2F&X-Amz-Signature=980c189c1e8ae614e9795864da9d515850d771eca14dafcef773063ab1c50372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
