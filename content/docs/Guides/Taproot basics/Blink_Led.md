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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGSWWO7U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIBdwbzWgYeRX%2FT3GW6k%2BmWyQt3yxZyY1OCJApFRp7jTRAiBNeScvda73SHv3B0PKUEJCX9OHQD6rHQhfDgbuwDIH3Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMi6rdI5p3bqsXNmr1KtwDBUiaKwje98k7kLdQ9SyzNVRC1WC9pETtp6gRr5vDQms%2FSpnseGI0Tn9H3T4i5Zn%2FB7yBOtDxI8xAs2DwXQO5x54Q%2BFlbxQenn7q6xI2gw4aRAF27Y3emLGvP8Y5fP3Y%2F%2BsQxS6VlRYrO0GpX8qCECCTU7LpXN%2BoBfnwqfPGfDCN8JEaloAAg4i7iULtH5Hq7dQbNKNDjwc10aYaSRrTrFCvz5qwzTZQldRMXMb14RrwEjLVecVz6jsGTSXAoh038%2BBzCYbI%2BFXh2JZgNR5byR6S8slSZTaQqp7onFVFMslBvBo8vVQ1UGdw7iPJ09SbpFQJP%2Bvd%2BrUqBDIzq1rPgjbqt25RF5PWosEDJxCgqB52bW1imtRh70aHSBBqefGsN%2BUcYou%2FTLZsmEsA7acwBZt4hsBTb10TWsHrgDljCt9QJ5BbalY%2FXAVYONi3f436ak7hv8DaiQHCMmdQNKXyKAe51KgtXW6ryikvbyi8x%2FZNQmyPCxqadeC0%2FftgObOttRwCrCYdZtd69uqtrWKPi5MvZhNy4MsABiDF2ed9o1PoFT9nJPvYhc8zVXlRP7omTVVAdLZWMDZSkSHKF1ozdA1qPxsvI2j4Mfq6ZPs4RZYAAd%2BNoiGx8tSuwEKIwhKb9vQY6pgGE6IdMVzpyOPJj%2Bf%2FTyJtmAk2514FilZRO7b28r7vqKbrIR8VRl7qjaB5MK9q%2BLYUiYz2YZfd06Wl3rg7So0JmmobVE0kGBpoYzQ0aAXU8Cv6HAD1sxbw26YfrVt5x2yFcI2FobY3dlSAch4LyQqk3cUZjmYKy8sYG2tcrBmt1XwiLwGA7MkxwfXCWPnm%2F7HXFJXEbn18vTzhue7HhzLTyJFcEjPwA&X-Amz-Signature=526ec8017635a318f8d03fa9a346edfe10cf7cbc04f481274d61867d31aef4cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWDOCDF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIA4Y64igb8aqt7Df3RkbFIUA%2FiCdbHB4hOb6C38pwsyHAiA5HH3H4R24gKTfBsWUeRQJqxpE8onCh7hzPjikfHjn%2Bir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMNWfBzBRsVGXMjygfKtwDG%2BgEyGXkkr9Cdi1a6vSKA1Mx6ZMjvkZPrEEV2xMpjUTjJsZtmVffwUrjILruXNgRFnfK%2FE7h2U1YWsjosg1kMwyzLf0G5cid2VD7Jemvz4oKMGnIbUrfFafz081Etv8noL8IGWBPdP9RWb85zkFeY7mdn15luChYfPnNsfriv%2FV73WPHFG9Lw79GF6Wnsg52UgFxgO2s1PWqD9zqhsBVuvIiVcUA5feFuRSfwN%2FYAKtlLrqAPDp04Djw4962UAKSDi%2FCTJzKHoH99%2B9amIBFF97ctXOJDtC9vEhPWVpp%2B1su9N0map5hDIKcmtFHbB9CH3bQ6aCpzfVPMuP8DnxQUWKV4gAsaCRi4KqI%2Fw0rrVtvdPyw6arSl3XxHUzSdZznUq6PcN2TmhzG4vXlntE2X%2FpgnWITbPqaTsECX%2BsHTJDifVb0J8UFYyzqjQyUo7qFU9BjaYW3TzkXy9hMRR3QgV%2BTUMIjakJ0Xigy0V6lxOdNnhFedBzvsAq6sVItIv9JuUuruXQzuGVAlPqDGvU29%2BqcI6KDcS%2FuUKtl8nCct6iQTqM4iUvxUSUEyZb6WbygYtu07xFZnFw43tNHAGt%2Feo%2F5x%2B4yv3tA6jbnIt0AkplSSvQi3XCDagsCWG8w7Kf9vQY6pgHF72PohCj5IReQJxcQr9d0ohlfRfE744fvItk7tensI%2BgD%2B%2BWvTIGfKIYfLIzFPG2kmNmbnqo7qgS0abGIb%2FuMupTopyCwQEX2j%2FCR7mDBybdoR3EE%2BqRDZuOiGgMgXCaRP8drJW4vlPGlHM3nZSM9MvcOMJewWQ9fIb5l9IXcLjdUQ5OscGj3GnN4qj%2BQJDdmj%2FuzQS8SJuIYgQwQ6UqOqGPAK4jt&X-Amz-Signature=73bebb335921010c23fcfdc352e425c9b2f64e4a41a79c59ba289d3f6bfb850c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
