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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZ2YTC3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHnApZrCejC9yVaBW4M0OP3UhsKxQAZ5Ul6kmYHj0EnAiEA8R8%2FvXXHghhBB7%2F3%2F6NRGMOjBaolrRy1VK7MeU%2F9EO0q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDI2x89EEjpP7Dl0oJSrcA8yv9gc8pgxGO5LNENClIy%2B5orueqcbM20rhJTBXKM%2F5ZLffCJl7nRDFmGlCol63gBnQ7OYC26vArG3Ph0suGhqL1E6kwv5GZqCzumIWTMXGRus9mV0gmupheiWQe8CxwkPfNEWK3h4DF7Lep%2BF26TH%2BPnxleXiRg4WFWMcq5l1O3QEnopl09Lrpv6qdduW6rZ8ZO8E2GAb26xfKR3%2BuQ0u2qJBcx19M3GSNF1bvoHOKpMkHfKCyON7S2KhqbFklH45c%2B1vrTEhJ48hYjhQD1mId6sydFrUpGj1h%2BXq%2Be3njXjWUqupbhxJMIZERuQlrneoVCUvVgMw03Pbl5XHuExBBtnJOtcVwoOj3Ik8tLLaXbD3UaIhf18IgCjuZnbqj%2B2kxtuNy%2BHnKjz3NyR2TkUfg0uDJ4t9OCKVs5bPdS%2Bt4MMZBQ%2FTF%2B6HYjVeZYkB3UbE0pTdBBY%2Fog4sJ8%2BCyy%2FZURAn3jpjm7rZKXOciRDxOUvuvThBXt1jaX%2BLifya3bJYQ0y%2FhC%2Bv1994iXF36kYsP%2Ba%2BqGoOAg2vKCguBJ%2BfgjcUM9uW2iCPXHLt58UirYGG7%2F8iwcp1fKN8czXdk4CIRNMDTdvFR%2Fd1nzMRpxyhCdxg%2B1V3ggu2h7St%2BMNSWz8MGOqUBfcHVRDrwwm5zXc%2BrrdedgeWDtV8Wb5538fM3xy%2BWeMQEo5umGbPbU2ZtsvHuISdtszMGl3FXgyaFh7QMRVmaI5g%2FFkEVCBvfjug63p%2FHynd0tCKQ6afHwGk52OawN2jyyVwuB93Pmb3WJKeTvgkr0tbkIH94dA%2B10GIOL8usWwrvxy0O9W24rUorLiVRpSdIK34YRuVubiOQwZoAvoJ2ePb281qm&X-Amz-Signature=75d01b480da86ba465137e4b6a04ae9aa8e01e7b8bcadbe3f5dbaeccb1a83131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVPYKFS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKjv0fqE2ntvgpeQgoVGVweRSGsyy%2BP8ztUq8iTPvSKAiAI8jSSMtciX0xz8GxyyEcD6t5tSxJu2ojU6u8TUkBQsCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM4sLngBpFc79aWPRPKtwDOMI32bNGkT4ILakfP11oLY6MYkOFjs7WqI4MFFP1skUzgbGasYzeWQiNHROaeFvNdITjpns3K0w8NWp%2B9Zl1KdGVKUoopyl9Ec9nNi%2B1klJAHXeRXWjbQmxId3DQ8a68M428tuTRMIMLCziCsUvpcT5YwCDXTU5zZumqEXMncgACQ%2FLFSRr91IaKuuYwl2MFvU1FNpvh8ai1wLQ4F6X5mOMubokChX2J9cY7g5mLvBLIWusYV5TnfhgAeLCAhAjJNgbQ4OuxLdZjPMV5ehsweLTtz0t72qumBXI84SyWp56vRASph0bgNcsRIqkSR0vLMmZfXiixCKzKp%2F0kcV6Lsqae7Pnc03ncJzg0ZQnb4iRUtmB3Sa1XasxpXWVbCpbUQgeGNjHkzCZvqqdoHxUMJ1XQOtdA0GSPA%2ByE316MHCcofr13%2F9DVvlpGBotruN5e%2FsomQzY2rZAmCVNPYo32yGBoeQatIZAaMh8MmSQUTB%2BZP%2FPrqBdurbBvcfP0tnK81%2FrT9UCeUXKVfTxA4fNLgDoEMFGEJd2FRAbtXaYEyK%2FUwTNyP%2B6jSI%2FWdg2qFEIQPr%2Bvkmh0qpqMJ4g14HfoZcRAzrMZjWaEPWpSSQoNZXPs1UUXkeNnmNfoM7wwjJbPwwY6pgHAEFRGjNLz%2B3dTziC4EVE1zpzqejxbBwsNu0%2Bnu71tHtMo%2FJd7ZTVLJWRxpuEIBPvlVBVUxfWuCuWlrCPj6O8I6sUzzRODvG53NE1qx66wNNaQiziAXD%2BIdnylzoTMwtp%2BZ4bLWgc9QjgOwg%2BkXnxRUXuOKQfKOuxPHsJIzhq8jSqjprbAyJAxsSWQT7Fcvo6fqhwHERTFA%2BAKLIJagIOjhMmCGUR1&X-Amz-Signature=fd3b63dcd2678c32c425af94ae216f4af8209d2e5b3da5c766318b327099b5a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
