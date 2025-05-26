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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AF4DP6E%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC72Afgm8hTvAgtT%2FmvdzWEmRABOIPpJKEKEemwjal8fgIgNAfI2HESqfy%2Bpy57XlY79wLZZONV7xH%2B5nq7JMLkQSoq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJTvaNFu1Icq1ItIoyrcA0HFdL4peTAPty%2Fkf5kq21vFkxDEu8%2BUnlHMbRXhTcCfkEmaQ7KuvjAKw6UmlRLb%2FuFGEUE%2FSlfAFm0Xrrki5Tobsx%2F47rwvsFuBdSFm12neiTyRm0e6RP3eKZm9RR7y39%2FgoM4fO5MSvBqGUzCqL5W46q37jZGsNtxNWkkWfKr7kzW3gdlRKtXmOv87Nr7rn4B9wQpQ%2Bm19oDcMmQ9LgwpPKlU0QUj0CMXDyuY3ncNKryx3cCNaBVMdJrMNP4FMywiCmMo4M3%2BFdS2obYs9ym3QOBMNReJfieDSvZtpBJqoK5M92cxrkYPNWCJpDMyErpsCFYhCTVZJIURgnb3py%2FcXT%2B3rh6mKbGzhtfV%2BrmtGND%2B%2BoSf7eGRFdnf%2B842LTKcKmUlsFuQj0bD4so3pR7B5wig2vvSg2whKlKzLRXbnzudYmXblzueIkjT%2B7MQ1QmJbHxirpNHTaHXNGjxbf7JC6hpiWnD%2FrjSPGHqy8Xxzu3YzMwx5qF%2F3tyN2ej5skVJPszJWRxM00XCLUfAWFQNhUVbWwrECzXTMputTWw2GzTXbPHTLxuU%2BshbAz2d5BWnkaarM8Jiw0o%2F0SEmkfaxXIVS8xvQ9wDTADNuXDXxP94T6eXZGaOmaYKftMJyr0sEGOqUBq0j5cGa6EhC1dPfXtuQMQZxiU91bLjWfm2c69ja9Gs8ecjjhwTJ60ZI9Q64WENyNty5JpOJ6hQHiCY5N0uJbBTiqolxDxkvM3qudtHuy9Vg4t1WMWuvsB6mbjVXFTc6AXCvWVVizfRHrgWMpXeWFNz7kZmKLx8Im4SLw6%2Fbq2O7E4GzX5zFZ3U%2FgXMWlcZF%2B2kl5wS5rfOV6VrFZ6PoccXSZs6Yg&X-Amz-Signature=6a5f8b0f621eddc94b370d23a7947063096271104844c4c389c2d580ca60c3f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLU2EYR4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN98JjFDvvl2mte3MJNm1X80dAMOS4%2FzzUQbUeMKPMZgIhAMu60b0%2BaYkZsTRUsFWfytBaCAuIpyEPjOvSLWzwL8esKv8DCEoQABoMNjM3NDIzMTgzODA1IgwbuZWRlTqldFZqYEwq3AOfUD%2FX%2Ft1mzLuCf8r5lovJaqPOmfuE%2BAQ3QJIc7eZsazXghDhS1hAPBYlDPMZG3JJ4iVjeC3yGH1vSwjgdxcV1rcZ4CUDN2%2BwAK0LJU4ZIxbNP4SvyVsna989WLvWQgUan8jKT1GdVZ%2BjcLjoqPvPyE58BMByGZDutjNZUdKsqmIGc%2BNedzHGTQs8tSnBToCeDrjMnB%2B6JFfcwkMN3wQ2qsBlCIMG4bSZE2p%2FVo%2F1JpqERzJ9EOeoqvmbFJwPy7CFHJzpQQDoTiqYFjCRk0G1OX4VHIkOTfA5WRkkCE2P78xt%2Fglk1y7HJds3427BbdTNDuhz4%2BBms8GwhMNrQ4FG3FDZUHfLUqWzsedoEkAb9vtpli232U8dWcPRZ4LxFxeJwVpZVYwG3mJbjby70S13fZrSrfdwXrz26v13MEVot07r70jwEjc5OQ27aqyjUwA%2BcN1t0ELSY0WqR%2BZJ6sZ%2FwUiQ4pfBSPx0ivCcGisYci0Zn6u7H6xA1AiH7WsqcfEH6%2Bjxz9Y6n6UQ1RTKK290c50jdcwhprPfGgiaVZMI0rjWwQ0JbwqKsaEkeEtlasMkiogYQK3K9Zutc%2FD3zb4H%2B4dkXxJiSzIvWPxXl%2FggRSTNtjxYe%2BVj21p36vTCuq9LBBjqkAUUnUKAmdbPbGCZ855T8DPdCNhHWwf8F4GhF0Sp5vWqNVxp2GL7U1xwFQKYMZW%2BlYqbxNesJTTxa91HNcyJAcT584AtFoX%2BA%2BTPPWxT2nsvQemADpPU1ldB55tKCt7I0pz4x4O4Q4IZnIAkjAwHu8%2FuqVKUHyIgyZBEA1u7Z2BWxpPJmkuaYuxTN2X6dCCjcNqYfSJvaPJr2XX%2FzFwzAqQmVjvyo&X-Amz-Signature=2f1e0ab4b3ae9b0be6a46e52aeed55bcd0bbeab8fc4d3fddf7383a014155ed99&X-Amz-SignedHeaders=host&x-id=GetObject)

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
