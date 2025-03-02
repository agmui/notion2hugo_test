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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XKREBX%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJvpogWWOkk2w2Eq8ZDT2M9tr0g1tFkG7w9%2BVhosDuVAiAPoLA5s95uqMX5zrYDs09EjBVX4%2BtVs1tdba2i0mR%2FKCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQAPu43R%2BBVSsLlI7KtwDyVOrCk54pGjj0Yttdv%2B9srx8CivqW9kpEgWRslkBVG2Q0W5PGzBwWjddFCR%2FVlVWhDeRWjdcjP04vppCo%2BOZugA9cvAY0xgobGr4OCdjalj5REmD6smmye2CCv2kCnvogo45fX5222drh63rVQUYP7CDb2eseSFJQO7rIg%2Ftrt2%2FLJNQwhG8syxLkApMnV%2FKF5%2BEOKq3%2Fa2DvYg5x680eoLzsmAWiU9tqMtbSYOAynINj%2BtU5IGyU5m9uX0CbkBzZhRwUteahT9zP9SvjDS7nQ2GBOGZoNJLQIZSEsC5DX5C7EsxW1mMyqx%2FWQHKrID%2Bd8by%2FxHuWiS1acZMVlHszUnYQ5jipET74bbGQaRMwZ1k6yLE5kOI5PGPPqN8J1UlbLXseLd8FkHy0rm4Tx%2FmfoIyiFivwmXnMFSYfvA9%2FrNRm5aBh7WCs9GbL0ixlVb8KsHVurpWdR4147r%2F7QoLeAOioZD68jeOaWzHMsxI9TR02N66d3AZW6vHJzaEUwuRpsIcZzOh6wImnFXdiACL9XpPBTtMC8rLY9SSTUvztifwpqDhYu6Hv7gNDnuWJ6WrKGArPkP2CfpSZuItRJN5UfayAz9A%2FCV%2FbGsVu9zcx0x7uULc5i92nzUInH0w8feQvgY6pgFVqjwj94WEox4vOjscsBYEwwcb39xC8Zpq3YraaFh3%2BRaeNvEF7hWbktUX9Fu0P9KWNFVJbtQsW2dhNYA4t%2BzX8aqdcc3xOqnskxtU5I4%2BUt6oK9WFbAgY3%2BIwUuUh4lnqyxPnrAAAhOnnvDmdzUM8fcAphIPzOurGkLe6lsQnJweXNLy2mBq%2Fi1AkPNOLQGK8G42HApX8mzq0tHm6%2Bv0zwRdzUUgC&X-Amz-Signature=f0c324bc1461f5b00f564145e4448a1a85826c59c171b4044fe896300440c96e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDB6FRP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlCy7AVjh8inWhpcpkIexS%2Bv2iIIZKQV%2FqSXwpFmO2pAiEAuEwimiXhYgMev0iSaxb7Q%2FSSuix%2BMVraKVeQT4CTl9YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyWJOZjN1EVHjeewCrcAxJ2sxO4Hj5LDyeMdKg7gSyTdWStkxUa5R9edhO5ZNALu3YNrWq2g4wxBZuGKz9%2FHb%2FufJiQHYxE9kzaENNpdfh4kAtqF13JNQpPIlzUWArhD8WbygJ0jgqEU4lVvxV50g4jiRTjNtkM%2BSmTtY5u7l%2BULIuiy2Dz1oCaoWzpIU%2Frs5zIDjKwkWliqgoNGWgcY7nV5fQMnGMUqGjOO8%2BdP%2FgcDm%2BDCknTqtM3LOJhMeLDJWZjrH0UjqeKpRIjt97OG14YmoRcPpzOku6MMiM%2BD%2FoaVwzwkTqBvD6BXXbnEVNaEaf6fQdOqqYFv1%2BwhtwcOYTb6vGITR5ny46v5mndZetZ1zFlu5kAR6v%2BmAxGMdRaMiFy0F6tiC7zPvLbTXX8eDOCjW5muCjBXfazCYu3yNaaheuq2ttIFWeDs4XDLCD8ymM8DlousQhQmhA49Z%2Fmgs%2B%2BxwPK0Ljt03LPyeMyFVH%2FJwxpQEY3fpCZhnd5hRCfPChFXfWPD7ZJlVTZ%2BrssUMySGePNIOeRSRy4fMz8znQpxwo%2BP0pOOK6WWWvLaAPeJPlP0AdE7l9WpLt9kzqWK72TSuCYriMbFQrOszxpO1EIeoZt7jCYURYjp7QsP3yrHBNrN5%2BJOdP0CCIpMPH3kL4GOqUBByKxlTLvFYQ5jlmeiqZfFq3pvcM49ITDpc8IFE14ABgeVjaaoqSwVRLXtTfjNTJshljI%2Bh8ruYD2nRyfsqig3ohN0dUmuU7ZLkwFXitIDm%2B77%2FvmUAOpTb1yOW%2FO6FR9HGH35GRrc1HiqGx%2FOreP8BhwcvwHpPXMSbha7n4kr0c9ROpXVumQpTbgJQsJC60WxYeVnj372LgDensO2dePn2VnoRDF&X-Amz-Signature=e7d5eaf1e96bf92b2353b28ded75604d47cd65b95aefbfabadb2117e13e45553&X-Amz-SignedHeaders=host&x-id=GetObject)

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
