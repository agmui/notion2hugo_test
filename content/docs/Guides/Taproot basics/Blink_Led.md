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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666PQFIOF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwyj5BbR%2BmtVneJb4aBDXLX3BJtXRrH8t37rdFHNNXQgIgR8oJQdmD%2FiViBwnymTqYGbosqpnzIvJkPFjSbyJA80wqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BGkXUJZhDEC8W6gCrcAzm5fsBzkIPyuoxvYWz1ILvlRQk4MSQ91fyKddsHXlHZlODOfxM5o5Kv0uk0HrKmfgIf%2BwyrineFUMz9IeS6hsOXjHmRTZdklw2Ktbv0c4cySMcepJEfB8b7OseKDFKA9LRBfvpzYYnM3ayRSY7Y9TKBUzuKyn3yNuADHyM3gsCqcU1eSwgWETAnHSn%2BmMMj4pOU4oxYn7YvCsckOOtmk86TqpXb5ooQkgFdJ3R9cLdKki%2Bcs5pXrtXWbwiLcxmwHNFa%2Bcg2WOG8NoXzz%2BS%2F9ajfZQB%2BBD%2BJ6D9cdCELSlCNktOryucDTqvDhZK%2FD7wfk1rzrFnUwNpU2BA%2F%2Fez5BhzsP5Rj26Bf3cLh7H94nC1x4UVNj7UXt4b0fAikG8CEezwFKqDZYNKyub2kib1u9mP6XP%2FRrsp2e2OZDSGmNn9VjLXjSB5c%2Bx0W57sDqRzM8uQRJXgiyEDBz6ybtHd2pDN9OGBIZuQ0EZ2I3GCk8Y3NSwgjZYwGVCFw9kHSPcXb3AkUNiJTkqjhWkZgIlsVgVa0Ri4E6qH73mMPFVlSAiZ12%2BFPzZBlFyuLRvVn9XKOzI1toM7L1sXcMHg5%2B45LoAX87TO2d6nxpD918StlmRNgVhYVBwkSgUww2YULMJ%2BHkMMGOqUBmaff%2B00k52ZAPHkdaq5%2FThYAecheyIt4DQKKaaC3wlHpLuPbBfYBBQjE5JptHwwFIdEA14V5DLq5ppGWEcpTHe92p5QUBkSfa2oQ5JtFM5lFzbn8ydbthg5y00TqfzMBzhmzW0V8sVAfMO6HwXxDe37csd1pA4g%2BH%2FvuaXsszMm63Hwpcj1a5Lol6z3u2z2TGl7%2Bw1KFFh2Z59BP9FWyIpeXbIu0&X-Amz-Signature=271a892f622d56703082cb5ccd5110cc5411135475084ed85abd22e1d627da9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RND65SM7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcrAmB8VN6OLKK9kk%2F%2BW4uevc99aVBWGpBhdE74hwKfAiEAldnkIp6v1BNbGbCFOicVdD%2Fat2kGsKWh39%2F9qSBHaIQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2G4sgYnaqrlEs1uSrcA9MtkTOsVuwpzX7%2BtcQz2h2Nn5OA3rHYjoyFjvpBHTS8viYFM%2FWK4T7RtNg8jn6NRkmXyHOwifDWF7DuOxzzJQGZP95PqtscLRz0pUfulshgHHgDECTIak1W9rzMTY4JgfpETK0Dlmgr7pZ2aVPdmAoVYxEv3z4Yc5QNiGJ%2BY%2Fni3ZCqpk9gGs5vIkkTnHNKp25IEJj99FoZNWo5l%2FgzfL7ht6ER6O6v1eNYvvpe7CY4%2FSkjTURiPj%2BB43ma313Ll5ip6tE4N%2BkLKJPFcXBaSU%2ByQ%2FEMYzs2wIq0ud%2B5A0Gi1VNZdS%2FJA1IBreqGR8WuzOo3QFHU%2BJTMOrzbnzL4fKsimMV2Uv2%2B1ucllpbe6eRY3BZfdPpoqTFouepTwmd8K0Z2OefzshloOe3pelhgsr%2F2GDvbRODB3utNSRhwTgTZPGcsyLJ854sXeNKhTiFI87fWCE6QcWVkdD1jvl08wHTPgEtRpjQ6B2O%2FaMZ%2FqEEHGYe709ES2AQfqXQQ%2BdyNj3rUoaro6AqPhltrMV45%2BVTu%2BxcWaxCO4oVubEJ%2BwlKoyw65LvoZjct9YazsO8wMpMXrp6KA2eXdjjPDbRUhTz4X8NAOngLSFi0jEjaB1oOoxtTzIk1F3QF%2B%2BKyOMJGHkMMGOqUBwrKoinGzt4H0q2emlsp2U7NtCTrpxPNyg%2BCuAfdzqE4MR593ki80JNQJh7eBGtBDCjTA6s76RN%2FGmCmPVWfOh8OQuOLASGlHfWXeexyDNpRgnAW6NdWyVsSUiUL1EuDYTuOCU%2B2ksLR%2FoeTDeFU6xjOyFCdgyoUmXkF%2F7IHYPnQ9Pg27TF1hlQBg5GrdYc%2FIHBmFTXCkO9M35ZBnIWWDhMa518lO&X-Amz-Signature=765cd36e76681759bbc6a4757f9864a59b5453f5527063c4283ecbe3c158323c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
