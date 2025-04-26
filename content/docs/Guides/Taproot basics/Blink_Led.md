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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYSZXMOB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP5%2FWuILhgSbw7umd%2FZibuarhlmkZ1m6tJfEHsO2K%2BXgIhAN2Mhh0mjx%2Bvp1TQ83EP4c4t5NPNcmIXxkd657bNpt2zKv8DCEYQABoMNjM3NDIzMTgzODA1IgxAQJTL0882Cpy39Ekq3APFQPIg1Y3UbYqUUGwWBwYCRSoklHVwjbI4Om9ecYGaGOFn3m4GrKSqXhk6SxF4l7a6Xqkmpp8%2F79y1kEOG6Q9mJr%2BqKSwXRFA%2FIYz5Gb%2BG0V6m%2FKeKZqnMXBgs3C5ASEVCZ82x860PdcMIooKia%2BA83MJWNN5%2Fnh4P38qp9yowYCpsJtr%2F5aeLJHptOFFMoIQZERsV41iDXtZbexd23rS3%2BCpL6ghVMIBqeOQNRwZbCO%2BZhWCD%2BUnsiKjV%2F%2BwqZTNhuvOy8fbf2onIIatfvAtoSz%2BoDnNnOkoSKVB42dfXsXfbhfwMiov5WHBL7xb7X9au5Owx9yz03utjzu%2BBP%2F0ohc%2F5yZJACf%2BfzSjNNFw%2BCLM0W2Qc8pVYuV8yNWE%2FGNTByjJjxosea56tI6AeYkTCCUMJYRmJiOG4m7Sbw0RXK4ZD6JFQ7okDxVmEqHr51EvZ7Q33wq%2FLmk4ab08YQjvLrlCRWOwNQLjzvdH%2F7jtV390bIoPBEF1hduQJqD6FIebzBPHBkptO1GNO%2F6b0LLGqQlVTxMwG3Uy0ZUlbmVSj32NYzffTqxwlKtiRlz0h7%2B3J8Mt%2Fp4QOE6laS7AzhS4hrR0HYJca8OpBkD7LEa07AF5T%2BfwIvY9vYxqQRDDiqLPABjqkAeD8QOL3K%2B9jfhvhKTmnRKqYFPNztx4v3vDqLcBpOMNiQ2JX1bRWjpGx2QXLF9Ewbtvisg0EKeYFXCU7bKCYGioW2ypiZsQjSjoHzTxPyFWB7kKDv5vOpEygRay5NRH4Z4TzRpc9G1fb%2FoDqQRmdHygXpbIMKjOwrnLORCP0BsJv2QivAU%2FkMfxd8JkRfsL1aFLrVEZEMaxCVFc7VvCWr41JjIRJ&X-Amz-Signature=1ed952dc7b6be1bf1aa7bb8ffd719ec6a73160b0d07e5759779f0b6e89eaeddf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643Y2NTFO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnc54Fh7xQcePiY3ABU%2B8p3wq8thYOqD1ii56%2FQ5tZaAIhAO8W8I4syq16ljeYCTA4iggAZa7AXVoLgmiPuWNoAlAzKv8DCEYQABoMNjM3NDIzMTgzODA1IgxpL68AKGN0Q2wG7VUq3AM5ckfN69udp0mn8cjm81CABEo9bZrFxAv7ZqPpECOUWZjG%2B3sDZjc1TLfgyuBT3Sq2F3xO4lu0NP%2FfDUyxlHvi9K4%2B8uRz9TTeko54qI%2BKTJFMJ5oXumG9i%2BGngx93RdyjGU8zZhT6VW4K%2Bzfq67kgQ97om5WAfox3zu2U5h8Y4%2Bn45IRtWZWcY2MHEY5tLFQIdkKocAHMt8f7A95VhH4Qi%2FK6jjoE5GiwKo5L%2B49EUvPW8mCaRtGenDpl%2BTQIEABj2T%2BLy5KA%2BQnRAWezbyowJhX%2FmoYJb9Xm2isLbyHhBFUNQn7p0HAQD7%2FbcjtRR0WnlFTmLfnsHOx6sIN5S2xu3oo7947WhXwAb5PZUZpFHa8t1gNOo3NPID%2FbCGIpB%2Faia2CYLkgpbW24X88v5SCKr5CDvgvdWNZmcKEf%2Bh3NoWrRsH%2Fio3si9PS9UtU8PJ%2F%2FQpoI%2BIvuDavhfAuqwdDxMeSwJLMeQyuyxBjMZv94G%2Fa9%2BfJbliiR1LBHWNSVe7x%2BEiswm2927%2BG1I%2FCAOgE6xgnRAHwPSNzL6ELUZuINvppTBE8wyoAs4wTLalN0ubRYrtXvzEbBgNysT%2FRBwndI7y1MuNOrtG%2FC5AxXvSsEZ4meStimaUoXwJVbPjD2obPABjqkASXACmfANFmFwIAMpJl%2BqWOuZZG9h3%2Fdw6IRDVkzIrTvoBlQZfux0zkFYfbxOHuYg0WxrPnxcls59J4a%2BlHQXK5rrIeYBWKCUh8E0w2%2B7z0S2HZg8LrE6Bztw79lUydeME%2FgP3zEYoUfkSsmvb42WvuANRlNZ3FYhqgf9ykk53EoOYAxYmTKr%2FkCjN2yEkf8LisFvrdgSSBoN5Yy4hmypQHagZSE&X-Amz-Signature=7916662a86001ad590289a00c6c29078aea4813078926943e14207770c54f24e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
