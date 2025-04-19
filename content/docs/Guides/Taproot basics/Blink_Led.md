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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOQDQDO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY6d1%2BFizGvaOM26RQca%2FGPwWIGTEFFsw6Y%2BdoE0k%2BJgIhAMzoLzT%2FW19gXq%2BCS504fpWpPM%2BDV2hbyNozRYBa7XP1KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiwYMVA7BXw7omgfQq3ANTxoY2ebLKuf1y0VpCjfTpp%2FMc4QIt%2FNWce7w7JvX6XY6Q8h0wIeCPrizqTL5OQnjW8OJ6%2BKMAPe8o4kGnealV9zdH0XOBDl4FYsWG3Ue1qvhuJluHwpA8AgToUecCciuew0ig1M%2BOk6Jakk9dM40jgxHkEwa9AOMyvqM1n%2FTLv4Zo3d440%2BdUZ%2BIuB03N5pD75J%2FhczxKVrqRCPhODSqQ74ByklXXZEuK3lU%2BDBaKzFyvJaCItNfLsY%2FIxtrxAVin5Y3dHDCBuVQfS69w3S6250VOL%2BETpAxC4mcMyHxaAnHNdMvoxKBrMmUluoGJc9razxQxqZEsTcwZ18sDwCiLKUlzyy1%2FWesUV7xAL933c6wIKpV8X4rgsCZ6RCSFcN%2FFhzbl4dfVqJlcY5NnGMmOETxE4oFjL9gYH9VyXm5qoZmi08veoD4McP5nZKcNPDMMitg508pQoaqpD0zgXm04TXVBnUblWh4Qu7uPtqam5ERHPezYVJ2o%2F094KtZQ37U%2Bi4VbqrMwOMbbSSxuN34ny%2BnJkvgi%2F5UmdyRI3jogLNJbErJRHhwGeOOyQ7AGcnLwdH5fbeK3DkjixPOvgPWYpsirjq6YHPs6DS43OSPy4zKurXzUo2BVzq%2FR2jCdoYzABjqkAUNxVc%2FsCe2e6elXvM7PzU5LGcdNbpT31mhG%2Bry0rXHp35RDmxNIxzKAVzGAc8JzGdTfcHeBHK2OEWLnyhqsDsVDB06Ia%2FkEcd8VSPr3fBoGsTL04vxgfJQunFqJg5oDUB1YjAP2%2BaozVnpe1e4wkXf9%2B83cMH3vpFoONIAEWKFw9EMF0zx9fDBO1RMJE%2FFF3QfSKbvGSmFNdBfv1JTiGbuVpSKS&X-Amz-Signature=dbf943eb4a9ab3fa5e02ef4e15152196569592eec623b4d3de1b4894cee781b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A2H2JRI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7avocvbtb3pj2JOhYy2kaNAVQ7rblPz%2Fu3rbMHd2G3AiEAuVwcWWNe%2BeI9%2BY%2BNFpVkTEMDvM8nBSoSYv8%2F6xFRF%2F4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIF1MEyb8wfWOP1myrcAxVEs10hSCiqoTj6vlgY8%2FJ6iMyvnJXTlo%2BvIiw7BdraQGCsbSk9VbqJ0bp7%2BKn1ajOKfQs0ySXoz%2FomdFv80VeYs2lOhSjALHOCvSBWfh9DkyqhnwAI7hFmvM93uv13fIxpvN%2FvF29cpmV7Ta9n9ElgTRB0m%2BCqA5LfXEzL28duW6LyaxnlDEPTlc1FMY9kVMiIhHeGpG6pHcGscl9kqJKOoIZ8nW%2B2WASzcOm9D45uo6bW5%2BG2JuFrS9YgUp9P6y%2BxiIIXJ4r3kHcR9I0F2ge%2FhMKcQ5tsi9I29iu0fe5M0Ayu7AWlMXdsp9zDDhzBkiBO88zVE107WxWeaxEOEEey81P5bjRbrBODJMSTR6J9GqFiOf1s7Z76rFY%2BzJaF6BpoZE1DneoQPLmmlq4rlRor5urMe%2B%2BWSAg7UJlNxi2jtvSyce61kdDIKLtqjX2ktjiw1mZoMaw3rlnA7UhfzO0rFhT3L%2BekmhIWZXFoh8O%2FWsMWkoxZu%2BPbamqoXfKGjCFhHnIIgaSLKHaP3fWUOU1L1yNI1esCUGEykardXz8Fjn6Y3LVgLxEAmrs%2BkkIQNzxSR2k4cDuX4SK5uU5%2BwC8dLWqkKPcaYH4BMTjAPpZr%2FWlwRefkKjfB6tLsMNKhjMAGOqUBOYf27FsABB4HgoNMdtenz7HjYMkyDWwizKYQJ%2B3gzn1y36p4V1Tco9HdEbytwpZM1VRiLFzExxISWya9jndhD3o76%2FBrxyxwNnjyxKVPuYUDWmiyJ4YZkuNIUQK0SfDUbnpiPl%2FsKiDgdMhDiDwndkEvulV%2F8mJDtgefNFtMN3qqqm59RtjI71CllBofN0L6mf6h994VsSgzXL66yRsQWZ4GEM5i&X-Amz-Signature=6f076e565e341198e26a9f53cb44cce36ea9dd18a89cfb607e40080781116a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
