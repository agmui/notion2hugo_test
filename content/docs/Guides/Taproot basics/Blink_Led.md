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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P7CLLOH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3Yrafh4dTpPUiqnLCyop7UP%2FPCg92KkFq5BsTEsjNXAiA%2B%2FCgRvL3aTce%2FI3%2FXIBWmZexWBQ9fS6uCOC3D%2BPnW8yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMprW8G%2BS4%2BwGEDMs7KtwD4%2FjD2Zn9Avv9sTHYCOjz3zYTB2CHys%2Fy213cA951JwlH2yo48cfYkLTi63iZwRL5KoMCBxISpA%2BfBNa5RSBwIyML8XX4uW39IHKnuOTlK5F%2FY%2FJV5DNhY%2BbqGiy561Ty3Eb49PjPFuvICGa49ercd9mtEaFIQrOf2EDB5BvYVkq0hxvFFar8bKq13%2BNc1WnkykDl8cTkHqdk5eXrm9As%2BYWxtJFneJOWX4zhWBDUv9EHQ9iz%2BRb5j%2FNchg5Rq4wV1PwZNR6H20tgWFcLv1XNZqIbRWJOyGKCjwdQCZVgZobO%2BQBavH%2BrpfHkoU9xSHm0G2jaDFJXKdDMftqwHMwTuF4z2JRJjXUiwBvVp3r9G36cX9T1dnzpnP%2FuLhKBnBYxoap21rzMHaflQtp8AhK0tkpJSwwF%2FDF9Yj70V2Ic%2FWZ1pj50j0%2BWDb2LdgU%2BdLoaKN46YWHWldg%2F5aorqAdsVJ1d2w6fTNjgdKi%2FHxAFIBOsQ83IPPShN90l7u5w4DUiCj%2BlUiAGNv13IEcI5HxfffUJ8GzVLqopVXKq11Gl8pVszYtLqmwrqjHZC127EOm%2FgIv5MASIOzkBBZk5br50uF7URXiFh69TUeecY1u7EvGWNSyLdWBSgqcgXeMw7NKSwgY6pgELIrJp6w1wD7otGers%2BI6Wf3Ao%2FMPxQ68K2iIEwfX9SAugv6XOVjtsP7Z6%2B5XOG7nqPHSYgoPpoWkRZbY063YH1KJM5dmwsqOvxHrUsy6qUUeyREiPFFgLM57uE15IOLuRIOuN8nmK4m7Hh8Bx8EDxL1r%2B6cAfXJQHeT5G%2FINYRpR1dPnokt%2B54X9McTezQloAdf9IGXbUHsyeNWEg7H3Bhv4jjHAu&X-Amz-Signature=edf3f2a521d6699757bae54152f3ee79ca82b2aa49ecbe8afcfdd49b26de620a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJIAOBUS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJrw73%2FaRM%2FfY8yyVlcFujB%2BK4RGZskm7G%2FFijwlFY6AiEA5rYLlLIZL4SvsqAKxTRZ9PmFH5VeXx7z9Fo4zNV4cacq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOJA9pcKusdk78qHkyrcAzYNzRfl5%2BU0pRJ1RWjheWcJ3A40d8NbuHKrJ93gzV7%2FphnSHod2gPWJvsD2aQzxj%2B9JiPXFGmuODVKFlPxvjhDj1KI7ae8fVvZlSqH8jh5dTdGJ72CxFkZoVvZdIcDE8%2B2zTEPyZnvgEV7EtU25aJlmXUdUyrSx3VL93nvO2nxw90Sus3fC90quC3VdMkx5DOiyEUUT6rLMGKYJeDU2a%2FETVu8w%2BrWmrk0tlKy%2BwGJjKVyBvaPG0Y312QIXKSLfuGabjzjgXltPTKna1GHW4ttEf68Lzy5xB9ztkaOhTx9%2BdG75BwvfPGxPgBnxLeyQIh%2BEy4RfubEY60SbkVbv3ia8MGVe6xSGb0IO1v%2FUwtFJQYgOF7MWmLy%2BXtG8NsbUZ4Ksr19crQ2%2FU7fGI3dKTfZ7fVbI6XSnHjsk1kWoK4%2F9LaZuda8mRn9a3nkiB8Iy1jIs2YaXmWuA8P5XFBgtEPWz8vVflAXUILlH3CgrE%2BclNFomaVgtyBpAk8rlCUvL73AJToVd8GnMpI42a0H8cN65U3sqQGSL0CSagyJu0%2B1kcHex2XuA99T7EXh6U%2Fc12E71D6yDr4UvAa4p3ffhC3D1lqyd0zA0sC2c3xJP51xOQWn%2BmXWMZ%2FIZDUMpMIXTksIGOqUBrWXspFSeeWFDT%2FjKCVOXrZzlIYlcbD5DoFTFg9wp2TFRvgpw8h%2FSP6G3Xd22FLXA%2FrGVVe0EGROl%2BzK2fX%2BdsRBhS77CKh9NiFKCnvRzdKlxdh63hvU6%2B3QJzN8Ko9lDc24CehzpNmKcPeGPs0KJkUcMMxNr68WEEjP%2FyomUPZTWDd48tYLobgCjlTnr5q1V%2BXzI8AuPd4vfeaxmgeEhSisFIm%2Bt&X-Amz-Signature=7600f243accf9cf7a030d6a201eedf95d44a0336f32ab3e13750214ffbc69977&X-Amz-SignedHeaders=host&x-id=GetObject)

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
