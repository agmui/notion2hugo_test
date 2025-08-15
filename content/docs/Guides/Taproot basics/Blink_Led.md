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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663234ZXPB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDzb2LtWpONQ%2Bhc%2BGRf9jyrgPpTpZOc6T56wR0gvaLUfQIhANpJrSecMbkCVNNO9K2RLbJLOgSJBmt6Y7jSUg034HJ8Kv8DCFoQABoMNjM3NDIzMTgzODA1IgzXbpmpIx8mC%2B1m%2BaYq3ANdOlU99QPk4S4SubCyTlZYQi%2FnjrcMfb1WqaqO2SxtIw%2FgA%2Fguu3KPEBEwTeh%2FedET9rJSYBVDbwYQg4oibLgXqWXoYT5L74sDYF3nk80QZLGxTnvVVvVGuyYv24PVUQTPQutmijs2yisMWCphNVs3t7wa05XdSzTZ6C7Oad5buLc4IHfxL9lX4OxVNjSJNl%2B9G2kHn7Mky%2FPckuEqDbqP0gTPsPjv%2FtzJBnHzV0y8Fpo0CR%2F%2BHedjGEXTRgPPU8miWShbmwiR3f4HIOc1pZl7MeJvQkV64imklw6w3ZdO%2BkDInVR3I%2BwP0IIvrV3sBJN7g1xz0a2xMJTeHpT13NkOtKZG92b4c0zjumHscfhMS5zCZFH1k9rhDLAM0%2B2H9IrYM8parrW42Z0yZ%2FIXNXjAPKotZkdCEFTf%2FJGjgKo84se8l6km8F3ZQB%2Fw%2BU93C5yG%2FdWDa3SWXOtKkdhDjyvaq4DOC1gbjhWrgrQDA%2BqSrUUAsvHtrC5sOHptIgZIiVFfxaeLeTZWvoo4HSPMgVvhFmZvdomRaQt8ud6a13lMpSfdGYgTSc6ST7uVAB4vY%2BURr%2FhMXorAF2e9wljFEZ9P9MpP02FU91yG9HHwbYqO2o%2FMQeKRqvFSJmye%2BzCH7vvEBjqkAQEurWGD4dCTngvm7%2F3X%2FMkHUWhBnE790ztK5ssQ0X24GL6iYA9zhDgLl530%2FztQ%2FgiKdqKuibQ6gEssvM12%2Fe98vhDIGhiP0O0M%2FLLcs3wRNmTqHOkYsghOmZYPa%2BfotbCRE4cR5Qtzz2MxEju%2FaVNQZb1Qwf%2FuFGSvGrV9T%2FJUdx8g%2F5tHFB5Ccj5SdtH%2BbLQkSdujZ8rkMII8r65jZhybw%2BFn&X-Amz-Signature=974f4c421a71c02bcef1814caaa699e7d1f49de7c6ced9a3f5c57b6c2054118d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZRRKETQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCID6WLeV6h0ioxawu2aL6gEA0QlZDeEOFwGz2EqcOVz3wAiEA8SH0Z3qglwLrVkgSCFzwbCOkN0XYsSRmAppSx7YjOZIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKwDeVnn1dWkxMYwRyrcA7WBVnADdtIXj%2Flkd9wIcLqbMiPQPCtXMljU1Tcv%2FW6bvIOq%2FY4OPBnn3c%2FptjBkDJPSSZwuOZI0kBXgSRxzGO9N5W%2B9sz1gj8VUacv4%2FvzJM6QQ19SwXC4my4aGAiNxfLo4qhWu2I5yR8OPkgKNuSaCM1wlBxeVNLw7ESEZHEu4Pin4u5bY50kDTlFlkFwF%2FvhvSWHC3Jom4RVKHLHJH5uyGHNRnqwcA9Lx5X5cuoPTgIChgeFun%2FcdJLnzF2FbxNL54ZhFy4o91%2FtWiCaM3PeMiGTfmzn1LbrzQNFx4TxzQ%2BAxKhAjLR7V6zLvlTNPSQElNc2VEcQOUYnT4mE3aZAeOq%2F6ioLMVinL5%2BeNDBzNpRLm8MqE%2Fl2gqEGQDQmAJsQYZSRF7gacoreadefW87kW0%2BieChONWP3bjWiPVlIesyx83FJnrVvXxmvLxctEQMEhPD2yGjjk57B%2B1GFBd121rtSs3RNLIir%2F9fPf2w1wMJqH%2BGSFFtyptTWS%2BJkrdBM3ntQbyy0pDfv8Nw%2BIi2s7yPA1gQWuK%2B%2FKdLb6fPFcQUfC7UmAsgNUjTJQWl6qtYD0q%2BXX4pq%2BMGclmIFy%2B1tv%2B6%2BTxH4XgqynUi%2BJhlTco85qMylj2kkC3%2FFpMIHu%2B8QGOqUBIcPP%2Bhqr%2F%2FbJA%2FcZaE0bJVhgwMg6jAOJ6efEPQ9hVOXMtkAZ1NlSwtmVb07E%2BqYrPEu0YlCMooKU%2FpNaAFdu6x1wtUyr%2Fnf18duta6LQ%2B%2FDvNlvtEQwd3uxYnADeBa69h4e0RvfXT%2F6BY22rckGhq0v5MdgGhWAzY%2FY0LG4D%2BvnFhH5%2FqdtYHBhj%2F1QUg6rGszMXAyumrM0XulMNYG5gH907yqMY&X-Amz-Signature=c52e149d12b072a7982ef633670e8fe9c86fd9976f55b0a554e181e7763094d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
