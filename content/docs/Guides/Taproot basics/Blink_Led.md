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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTEILH4%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGW88Uek1NCPapc0QKLhNuPvh2Qhzn4upmsk2SWYT63UAiB%2FujkgaHyo0qxGpMlpDw8%2BQXj2qvv%2FbvBelMH5lZj9eSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFRlorvSC4GcgCRygKtwDIJqTloc5FTkycCP%2FJtyD75ovRYfo3j0MhKJXzRqfsx29aXSh364ysYdiiUD9jGUvjuki8xtuJkZgBXP3F07tPXije7eHNMDD0KKgE4dohAVChvwJBuFMYbaChf4GmK7GFaRzbPhyK3mosmTEh7k%2FobfEX933BuuU%2BHo42lRdOHWg0QahZ%2Fk5aeg%2FnTGOJpRDYFq0ohW8frh3BCwvvV4lyh%2B%2B8qdJWBphrWAz%2Bx3UPFQ7Ga%2FwmztCHlFlkRWMbWg8vmQyWLGNUjegHh%2FM4AuHxwIO3hfiql4RaXoObGEBANCgj4zC620%2B19bL0bwoCzRLbCsGTTBzLTEKjUQ8Tj5Znlomo%2FGzYl9HeXVTuKKp05H9AQSuAWrEPe8LDMhpyCZX%2FqAMUO4mb5BF5TFVzby%2FGQebTH6AUShsACSH0Y%2Ff9ZdvNKvNnQLaXqNQYAneRAcX%2FNKYiVXig5EmUH0Ip22pHXA%2BVdWNRN4r40vRMnjlFB7r%2F5yO6pctoEGZqS92jsCVSdvLxLug6Pljcn9ge681pVne0cSAPKu%2B%2BCZmuOWKBPHcq88Llkw8w%2FNsRwDpt63IKSalbLt30VD5ykeIX39jhHPn46%2B%2FMkh03fFQY0Y7OvqEXf9Nr%2BQpTMS19N4wtLKWwgY6pgGkltcLOntxEc%2Fr0xY7W%2BJe56RuRP9oY92TWEEpGgX2dNlJjrEOHUwyODLFSBqrBs5K2yV72QiJfNJOZgOdolH%2FEi%2FrD3O9KXQqoE5x7TZvyV%2FHTnUtgZ0B%2FhMvBEZppmPRR%2Bph4vuKM7gXpPQn3gk1yxQYRvZb0LT5vZkstqP4ICLHohzrAu9ansildExGYSNbuRJgQ10XtsQmjRSKV%2BOmQroIIkKw&X-Amz-Signature=47916d8975e834899286bdc7158d483e1b16f2bbaab769b9b2ce27666c4fbd29&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ5GJ3D4%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRQ2DWAYdYRJyS5oeRAn3vbuKkvQvpYsZybsYWfC3zJwIhAJQjCEODnL7e43BUyxbZA8Syvhy%2B%2BMwUCTacBP1Ip87%2BKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx41DHCjhO9o4rtJAkq3AM6q%2F51KNsMICmLYvOYtpOknInDnj%2FTaJholn%2F7GMIyYPyFxlXDXRcjK3oW%2FAVOK6PAxof6dT8YaLUAFY3a6NgnrTJxnhY0Xswb8T22sAXjGcHeVvV6oGoI0n7yduxT0POl8M5y3CQDBlihQ8OX3%2BKiBCQFKb2FD71GuqOgsA%2BaeGFmnHPK%2BACU6lu9gqzhSa74pQQCdeNPpuge7HLRU87kNuUgDta2ue449Hae%2FDx5bZQigTPXr6SxXg77EhH1myxhxC%2B3BoIOXrhFCp5mv2XBSZIRD8IZxtFst9z%2BWzIfcL8KpZmmXzP3quM5kz42HVis5xo4Y9vvOSdEzOr8DJji61DYu6XUjsBXDKg6ofmEI2BHKSsR5R7JHwVLyT7t5nZTwD7v3Abl9oBoieSWt3V9l6bsJOKppUpONn4db3v6P72%2By6TWWRwaxKUtiG1w0YC5mLwe4qU3LyUclWsxruIEBw8P1%2FpywR5iMkptM5MQfdm%2BVcZ4MzwE3xT38jv%2Bxynf2vHvOJyqeOl2x%2Ban83rJ8%2BpGGlrH0fyQdWfifRbs3bmhwL75CeJOw74HTAPnSK8sDzI%2FDea0847li43%2B2zhHFgEZIyWyq2Npn1aynd0RjEeANgpyScVXxCOKyDCKtJbCBjqkAR3MIrL2Utb6RaDanJ4ZJv6MT%2FPpinJ%2BOAyWhbTqJucaDlOwO6HbORcqvkYxjt2weaD1hIUJds8ipOoAi38TBmz2NLXzjtuSywQrj2gqYAjp7Obeadvfc0f5Zpe8gmducRYTEWPsMqIRgE1o8IP5uSzjUXphBGMVvadYec%2Btz0OjBZ0cOAP4sG2lDtjyb0M9cAwaZrzwUpXw9XNjSaJ%2Bi2Itcf%2FP&X-Amz-Signature=6daef452b8426c4516f46ec0af930363f2ed75057fa5f4cfd8f8518c2358fb8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
