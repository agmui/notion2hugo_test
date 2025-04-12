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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKENOJ6Z%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICZBlvjVdsiEcA2pwuHgfYiyavKpRd%2Fdmk0FkD1fiEynAiBKraczKNUwcCbvYczmL3U6fdG3Ee0yfQZY7L%2BcLrhzNCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh1p5Rg%2FSpYzHUEaYKtwDQPfoLIKz%2B6%2FiR9sZwO73x1OJh3HsEv67xDBjbkOpitM1NHt1YYGjmT0mTvm8RHZUteDZyIxBDgSyigMxSIXdojz9FHAXMS7MHnALnufIBzskCm5geRo6ReISDcoSn%2F9wMxnoWqiB8rKA5cYtDUidhts2IrxFwqNEKSmbjw6fg7tPbumM3J9yxPP7RADWrpuOUf%2BpDASd7FhNlMyO2iMBxM7%2F2uT1euXJ8atUzsXCmKlo0JFbeo58YpiVyfn2nwhJTeiUGPBQWvO2U4a%2BMXfN9QZrqmi0bU%2FxEX6HiGaz01RBbC1X8mh99Gcg5ZJa4qNgu5VVRkxlQsXg%2F7PR0K26DhbzqEWLFrBcywUwMJ06wSqz%2FWjUP2%2BKhY6iVAYNRZEovIRUM5IYHlnxBFAt2LeYauvMOdDHhIj5hI%2Bg0F9XRFCXLKjfFktSP9opb6ZuaaZBJMqp5Whdcq1eDrp66p88y7Eo48qruhJF8siHhFeBxo40y5Rah6iZvlq%2BEjGQmHHjV8t42TzgyThb9kMMZrrx6cmQDbjpXuPWZf6xlhEGgnzVPogql2lX%2BzRbScAMNvXPQ1mx46PIG14mvIUaPvBFGTxduaVeJpvhZdV3T2aFcTf%2FdGbHz9iMRSYCftMw5PvpvwY6pgFCiN5X8ApCFPl9X%2FAl1F1rFDTxakUVftdXEHtNzQOYJZGRpZrR9JtaqoBePzdhNICL1kzxaIoCkAo2vxUfSWMEEPvZ4Qazm4zjgKqvvvlyVr%2BW8C85cYnna%2BcaYHS9KbCUFGcoXn2LC7SXCXJ5o0XtXWRIKhotJv1%2BgOIXqq6rAVs1VbIwqqCKNvvvjtXTd%2FTKCAmRbmfGIGFFNwgFzpafDkbv6OqW&X-Amz-Signature=c10ad73907489bcbb606f60b2074c4074e40af75003d43c39ee68cd92c4091d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIHUP5WJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQC%2Bdsj6PczMcE3ulkM%2BsGFQxMTzDNjDXpM%2BtNYDpHOkOAIgTQZuSeWpKTBVvZkGz3TcKzJs%2BkAWqGOmOQF4dDgPECUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICOd4XRH4PhZwjNXircA5aUE5Gi3XALMj1BfL1TTps0xHs%2FszfZzn%2B0grWLS4jIDgMvQadmAysd2pIB8P8o1fbAutbzqzOMBJGk%2F8Xr4fNWEQeP65HEQCwaGZK%2BtdGsmgBcHIzxq9rHP1eK3o3oC4KOxEAacfH09TWHkTJeOZBvh6UZS%2FCz2pi%2FKjunpFOt9S0dMXUySuohKdpMLJdgMthRM40103TV8Gq9%2FR6ygVdh%2BCKJdIg5MxIJATFybMJmiIVpvyLDyssjZ9y4PNGi88%2BryJC1CAIKFTvPtE5dhcQd2p52ex%2BfKZtPjjLHfZSswD5Ri2cESySFzOlvY66%2BrjyPVTta3iuo2r2p8TiXFnApaaP5%2FgN3GPlR289kGMANlY2ZOJ37Vj2ma9pYDqpB2trUKclv1W41jrOIngOu3vIT%2Bisua673eoS4Vf5N8fkeAP5fulpR%2BULwHyGLFbb4NUoG31cOn90CCSCOpFKP6%2FnHABoCmuhwpNYTrdIphfJFOBsoq%2Bstxk%2FgNZ2GYgNWdy1c4QrtW3dXOmymI2lop9njDoB0%2BamG96MeMO8mFvMl9f%2F1gYNOfl%2FxyeluWLNCUVMYLEHvDLJEBppu9RL46gkPdA7tNB7dzwQoFiYIw4xehCtQG%2BF%2F1fta0WWuMOb66b8GOqUBKlczrHBVg9lejZ4DnhwFB1B82wHJPs0bebKi04IJiFjEY6Hsh7Xu9ZWmYYA4t%2Bt2yehcqT5evdLJHyjsQG6xf%2FrFZvjJcHm%2FCHLzF1mP9VV60C2V%2Bx%2FTWhRYl0olrHYBjseMPkIXQrLBMyyYnaytLTuqK2kIby8RQ7XIMleT19j2DkPuHP%2B4WEGNa9V167%2FqqAmes14cwkh6g7IjV0Yy4iuWAo3i&X-Amz-Signature=63e9790701d97171b01e322b145dd53b134a75dce52cced71a9f2f08bd50515f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
