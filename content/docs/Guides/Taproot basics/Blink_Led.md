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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLM55SZA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC7K43joDW8WkU9NitByYALqsge36h3zok%2Fv%2FDo6TVkUQIhAL%2BE5I9qiutoEVpulQ2FpRAaSfBysRx27thSxapTQxMtKv8DCHAQABoMNjM3NDIzMTgzODA1IgyQoISb85d44zFMxr8q3AMFYTn8bmOYGa3OdeRIyxuYHS9vRiNiKMLSrqAy43NVaMraflBn0wCj%2FmqTZRJinOcnx%2FyYFhBmgGUMBr83XzgGc9aO9Q%2B%2F8XBqkLJnWYFxdm87JEhwhzkL4lsIDq5oFaQn3Kz99q7%2BWVj1JQz6MBYX3oUzJgqVxj5Od1IH%2BPWkKz7%2FHA9SNhejUaSTxJrSCQiD8%2FKt6eJ1mhdjBR8cGwbHW7XReD92JGxF8B8%2BtBLTUdHKfvXcaeCmNaNG6k8Cm88pTLppK2iIJHVVeb24q1I1iictSAkC%2BQRZRF6OSPdmYkBPSetI3J1v%2Bq9WDec93fwVkZJT%2FhEGRjhF09E75UdZuGhl6QJUsd%2F60gKK%2FEnBvIy9XpMoZNk60SHDsf0ebXljdEDsY%2BmVc4aBubpW35zVYEAQ2FzFphNo0YReCfE%2FdznKHkWCkIy1RdviiXEesDJelcLnL9gC2cLptoI50e4k17DW8NPZXHs53ttXo%2Fkkm4oOskecGISc6ZGVt7LrB7GuATHigxPHx2HjlxrBy2%2BgudztzRF9ZidLBV9dX8czoxMUde36OGgfjHeSh%2BIe5m27R7Pw9rKH%2BJT%2BPFwOdG3tEDfCk6nAHwnzjC1xqj9jDfYTfcjLiOp8h%2F%2BPszCoqp6%2FBjqkAZdSUhjmJI0vg9VdAhuZ8OXuHFV7uZK5SbZVXnev%2B9W0XUTkpNfbY2UV5UkESXaWdM40HD9BTdzIbWixRoxthaL4UlHSAGVfY9ZEtx%2Fkda94%2BtmlESIM4HOQbYo5K5DMNNfUgc%2BYGQ6iiPYxoVWFHKgPbmHKibyjfCVj%2FaqwPaj9D5a1qvX%2FniDxopDR4X8%2BjCKnjQFui9Oo4%2B81AECPLR0rPHxn&X-Amz-Signature=b54792c4f8934a385ab70daf87ec124fd528c6124c9b14f174a9447f3fd715b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAH2HGTZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBMikS32tlfijCHHZNMKAphvqXTDKJZ4XbE3vnmMDVMxAiAYVhHIIwYXdvqyAd%2B1GxPxsvZnuTCEOL4NWVurBbkS6ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMB18uHM%2BRImZduIYeKtwDNFVV7cHMqQUT1HsyiZ4Uabjvv92PS9OWEOj125we9acPxcIcFtLdyjVtrejIbMprA0qFLeE8T%2BMm9qAASkjRqaWq8fQrhgHL3R%2Fuvpgu3AjANz43ajf1PnDlkbD%2B3FgkMhFKVPNO3iA7jcEqwyYQtIQNnhIOvJWTKa8AxJCahze8Bh%2B0fHm9peMxALQzZ3JxmXPtc9GAZ5Ize0YYaX5JRwMnCfDQBk5G6FjbdybXMHGXs%2FsmA75%2FmrKvZUxpVUWfoANTlKHwNth74qpkugONKxLRCB7lopErdW%2FVELoxDle3%2BIwjRRFOinexpEnz9WGN7%2FDooKwH5PPv47Q7%2BKeZph11lMerOr4PKUcLsRuaHPM9jTjeS%2FeCmyDI5whIrIiYPNO%2FLkqWcZypB7%2Fm347aubPavH4M3Sp%2BPKlWKHyIwWJn4%2B6duWKo%2F0C16NswFXgnIRuQ5hqxe4yf7uJArwppgVPayrp9hQheBmuzqUDyKrdPVlBPuj37nFfFQL%2FEfBe5AvrvBNiGpYfDW4Dj9D1lSA2fzMSwSRSWw6L1Fc33x1NwWmIIlMXZSvcvXgiGFjP9nabgQhPmrd%2Bmfl9OOhaAdw11%2BYLh80n%2Bg11vTmcj5p6CUsc0tqRI3VKPKMEwtKqevwY6pgFl8Wtg0MNPhLEwbJvErLvLLhglG5iX320p%2B8Hu9Cnu2w0WlLUAnFF9AW1DIIVTRxigbzpJJYr9pXRdAFdla8qtrEo6mGAxHxKcOjSvTFTMybtXkK2%2FOasOfyOVwsMOU%2FC%2FCeROXVQYRrACHADYjQ2eXLU89VsyT9B338zgnFYSwo%2BmvtfkBfqubdAyuKzsA8ZkevOgS6VlWkrQIQ0FvhDk2CB0V1Lo&X-Amz-Signature=a17cf2209799f51c2b2aed734cf99c87cfe92d96c3f6c6e0b3c70714c9c023f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
