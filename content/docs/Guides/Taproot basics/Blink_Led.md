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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKRQIEFG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTGk5%2BKm8w45%2FtuQ6X9OrUxjWzfBNbGoQnF%2BpjLpZLzQIhANggG%2FESc4UZCmwLO%2Fnct4UQ8duxj1j71jTRLId37BgiKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyv5u1Tp9wsg%2FIANsq3APRIoOWeGPgGe08EBJ2FDIXS17Hx8ebdhxDizZsMei4uq%2FFCvr9hGXc5RqoVu5kxIg6RFbcH6Nmp71gt2iD9HxbnS9oGTaPAGkFnoVNZT4f%2FUPcKzWv9o3vF%2Fjt4r1EwPWyOgG2nRGdK0tUmdkhBdpyR9YqB7Cb1v6zHcT9PP6WQTNi4RMx8F1y1dRpNfs7zO812iVLrcDHFWV1xG6rISe7wBc%2BVXclcrFr%2BVfHhvrcc1djQ47svVCG%2BeV%2FF4JMSfbToEYOjCJpm5%2FhI0LJW23DWITyJHVbN3TFGlT3AAxi4E6k3YQZD%2FfHNCmvhFQE%2Fh4wKp8O9kemjJVsPylXdzkrdIjqg5r%2FxHRrssCfKSNSY3cnJj%2BwYgzfeCkEZz%2Bik7u7O%2BaOJ%2FRowuuAj6TvR%2FMYpvJb9wBJVHJwUP47CJLLLrNKEj%2B3X%2BqxEV%2BPg%2BYUYPDDGSmFM8%2F%2BHS8GtDD%2FSV3i5OfNcekHU3sPLHILGFZ4vM6biGOT40uOTG3sXphZk8PvAF5AIzr95DMvRCgHJNi88jF3ZrWHFiIsMOtQWlDwbzKaYX%2FRqfa%2Bjnqtmk%2BGCBo%2FSPoU1smdgZjLAJSGS11KCLeHFz1ZF4MtfkZTQ25%2FiAL4BiH%2FGMfgT8BGrTDbu4TDBjqkAe8CCDzpnxqdpvmthGep%2F%2FIZuu9wJDgKYP1Yu2Gz960qmbAnD06atYOvwvI1X3QIgvWy%2F4W9VlTxUKzQ58i114mOL%2Byp4IvSSwRPrkg1KbZ9vglUYgDrlgW1Hs5W8n1l5qp30SCgxfApUR9OXJwkuDBr5B%2Fd55o9qIrtQQLOtKWVjjU001SqHK3fBftjb20KI%2Bpi3rltBDTz0dfA6jq5DFHYP%2BMd&X-Amz-Signature=63f448ef8d20d07f7eba1eedc15f06734766fe923b411c3f7afb672b207d1b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377LGIZK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBhF3rjVIuZToHDo8QyyspiUnJU8TIIIQ1oIXJrvWLdAiBrBjT3%2Fw85y0BjOXPesyt2yqpsjnxDj%2B%2BkuPXFNZ76YSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSHPMUayawETne4T%2FKtwDsBWkza3Hsh%2Fhi0o%2FVbGlHxTtkBtBBQCFFi8j%2B0UBlTeWaAwkJ%2BkVEVDa5bTpT1fPC%2Fpzg1ITOPoO4SrLqNc9ENACfFkrMopKEyJx60LOqLbqkQ8sk68amFdHgiBAbMbao2Z%2FCaVxF5W48TkAUql5%2Bi7U%2BHgYR3NnzdGOl9I8CJk5tjuhoDZ039rEYHLlLBsPPCB3um4shfPgkUdpgWGvc7V4959FGq2DZY4myB4%2FoP5GzD1OX2rkGZgxmxb4fbd6SRfmmH5Yo6g9CswUPJ4hdGCJ4aSq3FZjCbhB9pGJtF%2FcD4ARWZkhl8Oglml9z1flC5lZJxX2k2VwyJg7WM9H3jErH2RwLXsw%2BqcvywZZW0x1JBdv%2F5cleofeBx%2BmtdTU0lj9nmYjE31MGFIybRSHaDmy3cC8xdhObYmxBp3oVyhwVr4cPy9vDgfg14V7K%2FNKmqGqeckzKLNC7bUaIOPXIke6RbrbiF34IqQxmfsl7gEg9IObgJc9PbGG4vK3wDKo5MwZ2iowsJAF9McYI96AxtyfMQhuxy1EIpZNDPDwOqbb9q%2BGJMbivtUsY5WOBBrWyG1bVEAThMOxucGa1bNpbu%2BQ9E%2FlESh2vxgHkZyKjgCkjtreWvg%2Bhy77ihAw77qEwwY6pgEXFz3AvevhNuCfZvf%2F20BPCL9ZcLsHir6r2nGnmuOEY8dtPUmybp0Ktj%2F9bAUUWkk0O0anfktVEYLa3UGJtFbtRONPb%2FhRel5z%2BHbf1uA%2FOSGSE2sjfVujTRpdaGEU73cST9KnJnwfAE8AE9LLYOy7xc54Fj6xtJV5Wfl4ppvLkRbtZLxpyhUnL8mgPfaznzlGQTDRrYSZW4i8QJqUmfjf6ALJycWA&X-Amz-Signature=9a401e6b2ba82aff5c646ee13b71b6e80b6d71185e163a818cdc6819adc8961c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
