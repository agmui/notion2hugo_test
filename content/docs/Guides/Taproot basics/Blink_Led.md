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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FGQQL53%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy3qi6O506YS3Aek82FdMZMYUn4VcitpouSuYswane9wIgDjoNXScxHyowkhPfqznnYx%2Fi7o2j3%2BqnCEBrlD80%2FHEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCccXr%2BDEU9bH0z%2FYircA5Av%2Fqra5To2NrYsAltvHR28czXzpt2SAXiPfis9kAnJ4JnvQisfYxpedoOSii%2FHH4ZXpT3ABx0n70gteE7NvwleskvPTh4TM2L%2BmuissPioYejsA65Y%2FfZGtogDVKmtjVOILaV9ZL8P1cxa9PMaTK7uHetaceVkNPPiG2pxI7h0cJosPEXKLQuvaOGtE77EQLtlDYMumhOQx%2F5gan97%2F1gizrkm8k2yAtxQApq9D3ISswTCBnGWt%2FDYbHL7y40JpO%2BeGuIvd3EmNCZ0QF%2FjQytYC7E1V%2Fmn1CLuL0c%2FQ%2FJlRvTcTjc%2BY4HAziKiCzLu%2ByqtJSGvpXvO%2FNCjoPcbwZv7I9oaA%2FbfQMEPsB9zYq1VTWMXXlWAErOiNuN5XDeDN5PP4FnaLUbm2Eh4K5ciFRUdK7njW1SQsHdsyjSyZkZb4pkYkV8fqzcDPDSOR3FDUC6yM1zaHtUylUc38EawmD8osBiUwjyxNDgozxDZk%2BdfTDfYLxGSFUbsKjTpVG1GE%2BP36Uv2%2F%2BzqkKlxd0h6PHTxMCwnijuTfsiRlgHKoNySeAREyBj96k0s5REMPtiLvMkXaINxhQYwoRr4q4Y1eoAKwpRP7i%2FH2DeSCCTVZQoBGzLb0i2dwlEFq9u%2BMJHK%2B8IGOqUBxspEwTP14nKte86qMSb%2BIKZiaI6hoEoF3wiBOb3bG4NT88FkV82jBp0umrRKuUHQgu9yFfWh5Ba5yxIiYThwTCv7uxASBKuKYhc8WE5YGiQjbhwkLdhtwtFKcux5X99YTpFTpSkDBioV9IrbcKpZYiB0Qlhdi1bf8DAfgCGQnaYFco5Knq%2BitMiJ50RVhC7A3sJsePRlNUK0O%2B57WoYzvnKhBsc%2B&X-Amz-Signature=a8ab53d96f9c6fdeb1b3ba204cd13d9036c1b54d26725d60156497b6a09dce63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUNOEIR3%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuil1ZHnVs8Uyr8fDD4pqp%2F%2BPPPhCsGMCXcqpCpUhZaAIhALdE%2Fu6C%2BrosTm4UfbycZi0Rsd%2F1jQsBvEbf5viPEYjqKv8DCHwQABoMNjM3NDIzMTgzODA1IgyiphFKwPpDLkzXqB0q3AN%2FXuJK1q2fH9A6yZWFRRYelIeU8flNw3%2F3lM2%2F4R%2BReSTIWSOT9gy%2FsYZqn8gMLe83ZjbjV0gXu4vvnYFTO4L8fsnCQJV02xtsIOY3AC2R4g3lCUApnfWdTmzzULckJqcY0x3UZTqIYzRKLE3mTYhe2EkQQ6RbIq9I3mFD7UdbJrDmQMUbRTWtBexgQ6xS0Tbi2IX2LeGFFvZrZIcy%2Bakud81yzfRArdijjKxwq8lLHxzPray5hIsduLVjFGyn7OUD4KYd8eZE3P1Q4Cj%2Fvg45XUnj01UkAk1kpz8mVidyMMatz7WfXGuhWqB%2F9td9P9hs3HsLtUrwWwXGU8nq%2BS7o2dfmlUsnqAoPNp3f1jyusanhNluY9sdKuG4Yb6Z6M%2FbrGy%2Bk%2FOg0aPD7zgrpGwwiJpTs15m4j%2FMnzWYnu8ZeBYgs1M3mPB9yhwy5qAlq10gsY8a%2B10qPyww0Din%2BJVLBsr8euD0rN%2FRm8jZc9CstxLYJTxEz8H9hOyUiEguOarGwxv1Af%2BL0TEi%2BaR77RUPjvNBDtoqi%2FmFZSLJDnrRd8lGzm4np09HGZAMUe0zCiGDrwKUdenZ9CllOyLFm%2FEQpQo5e0801GyNhFkdh8dJ8BaPy8vSer6TPoiT3IzCcyvvCBjqkASCoiHgOU0IkmTGQJr59a37Nnjdjflkx%2Bivc3abR%2FsJ2KyWT6yNpg0upU4PG6RVu1p1BiWTkVkUwIogSUOrd%2FbApZm7Mt3d%2BqZ9O6sNB7%2F%2FGBENRIOFBEOfqtJgcjQOG9tDjADQbRCFG1ahiIofxBDxQ107ZUU58sXUl9IOxe3AqGD%2BHD4ulgh2tD93SZVnXkeB80ONWM0lT50dJP%2BZgwkSRKCAP&X-Amz-Signature=d2d3894db3ad41c5008c268942134f9ac95c1c0b34c72e4d1164dd03c849fd6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
