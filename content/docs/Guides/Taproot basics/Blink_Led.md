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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZLIC7OT%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWxXPtlRU44BNgdm%2BX4W9B4ayog0kljUrLo4EWMxKEVAIgSfGWALtwg1Y2Of2m0EdhXnEgDB5MpNxoCpDN%2FaS%2FG68q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHuEHSk5klnrSrnHfyrcA%2Fx3FzMW4Mbyl765pqqTjJzj7tqMUicJhYDXLRVwAN41Pn%2BANQTOFUF%2BzeEjWIR0AF1k36kjAzw3gpv4PUs0euGCRcoifDLdNkZ9MNRhUmGldSHlLESOi0UTyY3JuZvDusZPoNHhWTKA37gEak0Vi5U4Y50HlVHpMLyBadn6X4RgvayiOIZzIGBFOCFA7fXbXtvoPy8UulBP4wIgUrVvAKrqNqFr65oZMkb4rWEFi43P6M1u6FMVrXcF4bEnhMylVqiYOMgzhc9JH4uXnSRWQgZiBoCA1mE8khv%2FXI%2B8hFg7DPdIPMIE4H7l2uVpQSptRgE0YrGF%2Ff6sHzmjy6Z0J1UbHTUHoc7iTjg9xpt9P1VV6pUxPGQBA2X6UnIVt9Sy2FjBBKAavpbIeFtRJREkxo8JuX0e9%2BCZwttBte%2FWhQcmsBCHrM%2B3bqFH1EdYk5CDHLulVQgZNfV8%2BMSQIHgRIiSDn8K160X6CYKVGpziEocEWJLcavYQ7JOmPd7DcauO23zsB1ZlaYmDsEOEbVh5b1L064iLsZVD%2B2VgAVxupJmgveyfrZVSHZDEyjXbDVsysf9GOVaooBa780j4qpKkiN0S0l%2Bv5WMkdHPawKbiotQevtu3wz3GFbKsgYmoMJXfq74GOqUBF1QNjzIkQIXky4lW54YTyRFzU1Z3b3mR8zYXSAkHv2So8fYzQntoCs90qhizKS2B4D8X1cizag9J9qUCv42v7YO2dbMXlpBLw2lPBbUuWKo0A5VD5iNbpOtYLlRtcVj5V3EZPSS%2BnTDTbIJ92yyTplAnMMXKRfhP%2BJDHevxc9EBWTSLQc4Fifp7Id4iDI9SfwgDXWi%2FqJasymA6PrqoWp2UbjXAR&X-Amz-Signature=d607c254601e2ed7275f72dfdde440656c09782ad1e1da40197895a4c94b4242&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAXOASXO%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYche%2BXPNByWzk7yYB2rJuZeDwN7SBdwnLWFr0k2%2ByeAIhAPPES5yqkqiZh81ErW9em3UDCMWCOzFRgWe5TFNptorzKv8DCEYQABoMNjM3NDIzMTgzODA1IgxjokFtZa3Xhkib5KMq3AOTIC9BY8yei%2Bri8Elf2t0uAZDJS21yqme1EUNqlOFv6Q91DOvIkcPGTTrV01yTndHIEYsYkGsemsbpBDZf%2BUqMJwYmfZnYoe4ZtQ12dS3fslxOHZkiVM1%2FeiF3mDl92BZv739uodx38ApHJGRyar76wzcdjRrUqQ9XS%2Fbkkw0TJ%2Bodfkj45yX7ykpQPdFjSLBxoaq2OGNrhjL71uh%2FztXaZizrW0x1yYiqK6npLYHsOaFI4WgjOUPtLFQnl0ImEq4z0XD14IxwxH%2FS%2FHIUCuS7fvmMzB5Kfq5WAGM6VCKF1lLRPQYHQcSqXyndwrNMkwK3FLzDahg6PUUFWVG1LeUQIwkuwDBWwjKT9ghHU9RSOY%2FRTmuez9hA4c7RZnVxZwJZJQnlXiYJww%2F09finsPU07IPNmn7RR6pIwEGKnwzfRZpd6j4OFA6UNto9TM64fFx13YmvnO7od8M3gKINmf%2F96klNO62JhcFtqp%2B7u6WgkdfZM1gujPf%2FTdtHndHeYXedqc6wSIo%2F4zJIvOyHlSCnTiriWENjRxqVQkr8HZN5SMJqer%2BEBYptBcNolwCfSx0%2BANCct4p5%2FtT%2FASl3SClAmUbgH7GNQtajECVSX4IM02Q%2BE1TVqAovXLZ%2BkjCl36u%2BBjqkAUGmqC8KtkGqCI4DqRVf165R2F5p5WTCGtCLOxeY6MzT5iUiCmL9dcyx47mTG9w2jevABR0S0OMTkK1XDtgZpBGlz3HT3OxByQNdQfiJN8AEdpVHqEboVZNFglc%2FuB6zB5HTaNwBTDxdBvAjyg%2FTt2eRjrBBS9d7j8NDbsa9CjTXbkbQUG%2FtlHLgoyY4sU4BG7hF5kjndhIj1ElyOPMQ%2Fa86lkyX&X-Amz-Signature=a45fbed1ed48024e43d5fa0a8f0273e38ef21b8bbd599285d900ddd540d46b61&X-Amz-SignedHeaders=host&x-id=GetObject)

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
