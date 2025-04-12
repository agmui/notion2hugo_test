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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSSVLNY2%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIA2mk7Sg2cpklYADu3t8eTTm2spKp%2BDvQAIas0MnOAMVAiAynC9dqjcTynC13g1iiRbs%2BpKlrEAzNzWcEggminpeHiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvVBZSY19iWF4bNrCKtwDdB13y6bbNBxMy4cwgopwKtu8OC4iAreeKA3ZEOmsZlYcJ%2BRVdcy55vZY2fm83smdguZ4WLlKXYgo9ykre5Km9ZovCyUpw2xQQPCEAIFQvxAPEy71oqTu55%2FcQcpzgpGZAJZsOMvZDlX9wcwhXQRDsvJ%2BwoztaVZOZJ%2BGI3Tp3M0VPYO%2FoWgqmSzWy1eJz4NBHaZSkzATMF2z8ap9N8hZhNotyp09%2BtG8VX2IgfWArXCjXsw0KdStCotLgotK8qXk5PVO7Tcu2%2B%2F5weZVEufj0C%2FsDp59kVS92Aayz74FnPNGY3Q3chLfvrIf0ZxX2K1JdmTXg5tHk8hDMluyXp405%2BurL5gtDrnFy9e5%2FSsvXjNCZhsnU8v7cRvbXio1w%2Bf6cINWiVrkIM20z5sMuaEXlIA3FyPhu5LmSrO52LDXGRVhhs%2BSWm3N%2FW38%2BBC0iq9bE1Oo1QLpL7l4NU0SZiXQYjefdyBxSNJjx2oIzlUwGQiULZwVdoU8sK7XRN5cvIF1j1MWhenoroK4EDm6kewYPWRCNGyqFuCFzs%2FEdhSgtx7hAFAlGFvwUvPo7UkmF4TTZ1OrmGxE9HD7%2BVmtxDfKD4vCwEaSA37%2FYaMQIYcQi6X7DoYq7DnBqpXGk9Yw7frpvwY6pgGo2%2FxlRcZiBB9b2Fhv8qGjg6XH%2FSZf8GwJBazCROZ6U3Onsoh9SAKlgGQADJuy7j46lmXAC07vlr7n2LTyVKU9Esvh8ErRIeY7Jd0Wv1abK1X9BEJO1fWLfSfqDPrkmQl5nYTWCN2KTbEeeRp5TLranjxYtpwNc0L6uHGqAqtSIEMNTqJjVpTW8BKE%2BDBaNsCEPtxNqRqGeX8Boue1Ph1Z2fPk8lXP&X-Amz-Signature=ad006c64c42858f979ec0482f2f06fab52bc7e6ce75ec100c2188bc198ae53b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMZZJXPB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDGA0tGOAe4ws6BD%2BL2xyqlnWPcsPKjidKoTYE6HxTCogIgamktfkju0cLJDCN0vGymKX%2B1wBMLboEOZpXQpsQHOiMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLj7JyCdPQM6DhUAcircA5gH%2F7ICPnVNWqBTWglw7LlI8%2FtnrEIG%2B%2FExjocOOyJQgUwRiYcWNUN6KOTt4uhM9VCEe5huTAKbM62At%2FyKvEytmu9aS58twF5MVEjGrTVCkO%2FsCr4kOLSuatvGVsCjm0%2BSHLXNbpNYBtY3mO7UV5swl3tHGpbYQEc0z1CyOJhZ%2BTUwjSjEr748Qt1oF9Q7vqWDqvCyC%2BYl8Gw3GDEITq%2Fef5l6zHmqSlx7BGOAXkrJm4mIrtUALf1WHQFpu%2BNziDXYfA2Y50HlaDxSO1Ikzg2WUB5GCA85xjRaK1FxQ4uTwrU0eFtirN%2FdBPZIFrLCLe7qhGktA5Vj%2FQzjCobfptKMiR%2BAXTo8yCMZcSrjEM%2BiYRDsCbfSJAkAFKmJteFaMAwrB4oRHWim9Eq37fRb%2Fr4FQPo8JYz7Gqw1WCZGB70jUupKpA2No4m2vS5EPP5qovm0eKdBnmjY0MpwZt20afahJxk8SNpY58%2FSzG7a83jIR6EW%2Bclz2eQ0rW4OgcvAu2t%2FPzmXIlhtyxAyNkNuQnduKhVu8HRgkpRvP8JkDO8ylODyaJGZJ3JfZ%2FFwpj3iAexBVwx4wPa%2FGj%2BoOBJJ2TnvKSwOj1SkXMJUMxNHep1ywwuFnyv0m0A5nWJvMPn76b8GOqUBfSfn6QHNcSQEj78jf%2Fj5PPT9j1dLBl7ZYVu6%2Batq603muKbUVJDfmG8VgTiZGHIivGl1ZtTGCHq3p4Un7cYotDaeipozmcGUhkEqX3xjeUkubi0CZrPklpY70IKjRlpleTZ1d%2BockJqjg9AxXdU3Qkroq26P%2Bigku99OTaIJJdYrwbbiye3rkdTUGZ%2Flag%2BMI4WiLx%2BcQgD4XbKFAzh%2FCiHcpFZM&X-Amz-Signature=a9860b95eaaca833fa6d58e70a61b598e8c7d727c5fa574b6beceecc1eaf0aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
