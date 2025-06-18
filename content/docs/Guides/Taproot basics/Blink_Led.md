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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRMXGNEO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZMfHXFUlgdIm1D%2FOeYcHzyrOv5msbLHqbWN1fwD5v5QIgclspp8NJTrNs%2BWi9uQ65As%2FG36u6xCHg6N7bZNSt1LUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCYSZs1Mq04MTTPUircA1mYibNhDyLmpNverlKfaLvrVWbopOVKTMQioC8OAARjZ31Nk3EUaMYWyg6t35u0uxIANfL1vb272pApGfGIfcwqIrmLs%2BqkqPDOXmpsHGqZeqJKfBCVdO6pW5TZNZmbIXCHgjjfiiDGKVNHVBpOHr8v5aKPtErosVp%2F%2Fp1hoDn07G0n2ZOWPvXtlVdBqK3%2FXjmW4EnB3RwYbljRwFBBkhkDQMH0VcOI9CzmfXIFdKLOf9EkoPiMY8RzSFSUtlecF%2FoFCNJ6j5U7ZOODUgs2JG5GV%2FWO6kP1332fE0csoFNUzKxhz7SJ2BsAPfF55j6DCSyDwvVNw7MHWca7WpqjXBS%2FiUsA%2F5GWbFAiZX%2Bw88u61WGdVbam0%2Bz1JHJK%2FX7o1SzB0erejZRR14kFhQL7cWfYO8ZHmjei2gVGZ5zajm7de0L3c9Zq6dB7yT%2BsjgbfZkc4Jt72430lSGWugCq5IbfMePvi1UYgvgJDIW1%2FMxZaA%2FtfIchQK3amquYJEKRBseghl%2Fs0OgmFMLPDMDxChCeaghnqWZczgg%2BIEdpWCj7vi69XS89lgMxHISEasyIgV9GS05BUI2QZl9EVwyAoHJrXkFDQ%2By7aBC%2FtgDoyKeBbUEvytAMIORpECVJaMKX0ysIGOqUB1Fmt%2BVYnYDdyLTDshLKqtdST%2FbA73q8USEhHDAbGRPWO1MoY3R81TK3lxyVnYQ3RXM%2FlYR%2BPeYkYxbkfxpPGoLGv2VTeX%2BupSBpXntu7kABnjkPngxA8MyxBN34P9a1UOkVz5hH2btqrI5NuQLoqT11mvITyJDLjo%2BHyviYb%2F5NcseSMzARVh2H3GmNz8W7hwolDag%2FXPTighE4bp6GkZPMGX4dE&X-Amz-Signature=beb859bd2dfac59426a4b760c62f59c897ea297ca62e98a8a6e90febffdf56ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MP24LZM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyZ1ebHLEIaamnbSZ18QtPb796xmw7Opy4PEn1AVdNvAiEAp27HJZCKzZQxbwqgRbn1SUrDoM8T%2Fk14kW0r4%2FKGk48qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBX4d8zhsgHOQ4470CrcA7JMRP%2BwlnMl3qQtXrvrcU%2BU%2BNw8NOeJ%2FD3peJuXw4E8Q9L41bUBF8srHQFFN20W%2B2q0T5NUoZs6RQwnTaPJj8LiOAdciM7Dl%2B1nOInql4MNYfZlvBr82Sy%2F5Y3WxE6W1YqQjKlBbSmt%2BYo2GiAkwgtOSwhXfKsI%2F7dPEQH0DKeuq%2BV7CGxcBv%2FEr9sVp68DdhIag%2B8K9LTRy%2BXuKEpcSICHKUmzSYplSZCKJStKp8E21evxYxAAm5YOhKoWhx%2B5Pd7GNPfXbywnpK3ZDYUDX54ziximOLjUrOUq2PG%2FcBQKDAskeXwph%2FgVGNtSqIAOJ7P57h45WCahqjcW4EDkFnwzdLiYBP3okdB2nx1BM51THxfxW0QZAyPnDL3knyM0G8sHQYC51W0KzC1U0d3zr7ORvmXDw4ME1bNKQdge%2FcISjyR4sow8qDCOGvVkPMwrCN9%2FBHjU0PNtDhbV1czCG4%2BkxrfJyqqzlogAP04jjIcHRMfcF9aQiSkOE00YC%2BPCHVmLFf4BmENw%2FaaGbawaLOcXHpsEj%2FcJ8u4i2nO2okM34nT%2F%2Bg%2FMlB2RXbbSiAsUThY7WRijVe03itIaUi6THztWAt3pZLeKlcsRq5aQcMJM0Q2AHOZasSjz6i9XMIv0ysIGOqUBqgVIvz0pzKjyPnJX%2Bb%2BzsWr9kbr%2FcX71FjHOEumk%2FomvoToGyPYIrMmPGsULUbxq56fJSSC07jtC6GkT%2FwCOTNrs%2BnDt%2FVXP%2BgmoolzIedQNt%2FRTE4JaEfRQ021ta23qCKOLBh3Ny%2BtyPXOOxrRrSSaIDEk6c70TeiF3LigDwYr4VfeJb9yOYhOcVkWAi1NVw3tjuu0xHDSoTxVqr3L5t2i2TkxH&X-Amz-Signature=0a764ec965cd94f08ff2550326b67c7c473972e0802c1f1fc48e261165403c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
