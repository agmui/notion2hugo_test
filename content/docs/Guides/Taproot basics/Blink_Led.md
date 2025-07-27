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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4PBIVII%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEQC%2BXDbzba33YMEKLB993K1UER3X5UGnZSaLHLrkXCEAiBKC3fZsvEXOXlDyaMsBNONl6e2LUDqMXxuJPiYGUULcCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMBgVqUg9SQvRre4N%2FKtwD8%2Bg7OqUej9wPs07hY9Kt7rT5XgagQAOEWPIX0Cx9Sc3DNiQzwdQ4aHUs6TtYtxiivEK3zsCywFs8p9Jw6Ip5NYCi5TxRvjLkg8GCglNH7P1Q6bwUNjuG9wWSZPhfiUEvY3JA7ipBvVogpqC4GFmwMM2QrycxVeuIqiL1MqPvmDYsvY6UY%2BBM1SkG2%2Fej91I18OQ49c9hXqH0idWQ5TVtzlNxVuUtoiXmSCFTaI6UWhFibyqVxoChGtJVxFoqBCafZAeRUOPun6ZFe4uDEVkMtzPfV6zGkycXiVKZDoyiINmispq0aXeALfcLPistZUKaGGjlQRKiUhAnntUqmVQaZFFgCY2pUfMh5XH%2BJmkUMQgQl%2BV30nmOc0qKsAP0rmwHxgSokxHUAw9daE75jfw%2FelBZMxll8hfKrhW%2F6rVcyD2IRQvVHX0NG6g4quC6GcWbkYf23%2FnRW%2B%2F2KS9AwnbxxlihCXyVKGcLH3ObSfWxtsbd19uQeMb6LJsaT0i13MG8NCYSZEYesyhmG0moiccNJXI7kQgSLj97bcep4uJKLjG%2BEmmRCE0ekDX4YOlcr7T4Choz5nc8XSQtrP9r4%2B61kUyNr%2FDjfg5kil78TtFy5x7ZDjfujbKKyhKb3Jow0ruWxAY6pgHRyiyhG02KjyiCvLgxAwuaEMeUFaheseCGx3Ny4CUFHDblpmSgNi1aAQkg3EeOHDrQlJeJqJc5Nabwx%2BtlfSCFZyvBYCDDe6Jn5kHqJ%2BiolEL8qAseOmcUyd4SlHIsvvbjsUtQtkb4uf7sENyq%2BWbqYJQwjdop2NHhD7ztkT9wQDlODjKYKldfV4Ma%2FU1%2FRtz4fxqyPzkeICrH%2Bozv80fDTSCKaoUe&X-Amz-Signature=7efdb1ce79635ce953bfee425afba1a1da2fb313bbb7740b40f8f16f3fa6edcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVO26CGP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIC3ybwh%2FE7LZFTJvBny%2FxKomiWs45jON9C%2Fql%2FTc2%2BWWAiAOs7YiFShCG2ESI%2F8O03fkVFTTxoZDeih3b4e7BORKair%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMCpd9pGT1MsVQRb9tKtwDRc4unDf%2Fifzn%2FS%2FDDoY%2FRiMXDl0qZ%2B8M637lQhp5r0r6hpaq%2BLo1ahnuwCT2CSDbrovPoAYpSpllrd5VjWVEeepiJq4UYkdp%2BpahEl8TIslJ%2FyAc3MmdKr0KFpZVqt8LX9TN3MjhyNH01vHnh5prEPBaQAiPvZymOly86sDloMPBh%2FzBFfZ2pqXaw3hyUIx9DpZ7Uo2fQDetbgWurwuscDz2eilJBcW4EvM0gRiRjCMED%2Bu3P3u99%2FpzMYkLpaRwjBeYNgfYNXuZIglxjE2g7n8CmTu6l%2Fq2YSuGcf1l%2FGIP11TU5oPfO4CzelPKMp6c6ZgPvwZ3ZajnAgUI0yPbEvRzHxayeRMgv3c6Xg4cSIZeIB%2BJL1urLcGq5FcpBfONd8Al8M%2BEu72vm8H%2FzUHUChfo1epZaH7a1D1RYJQNGwkSwke5j8EGGuBY9jl13XBZLagGmw3JFGKh8u%2FtUHAUjd58f1NcZBpnzhFRhRTKG7Zibnmeb0YhRiZpuas%2B13dGWvazajPTf%2BYo3GQmdgjVJqkAL8LhdNa429RH4PoMHJDWFoQS5FXvOHsIG71Kshmiy6KVk2tzS2O%2Fkj4I71mGB8ClOUM5ClJHV1FKqO%2BjvPAZv2xyFMnpq7r8bUswxrqWxAY6pgEyyJwdgHTeAGqVLNXdVQxicLTduhEllnWUGu5WaCrWIgXOhbbm29t8DBbf%2FYKa6Qae11p4lNBBU7AuG1MXmqRgAFAr6%2FmvuVdTFwGFwpephsgy9K%2FDXeI7mGpC%2BBjfN8yu1ZU30z6Xy2HrC7xBqVlvEd%2F%2Bg7mRlvH2G1HKiUPbjiDQLQa%2BMrpdcQRimab3CAn34H2yFboULGnt%2BO7uqYFMgQXYnGyD&X-Amz-Signature=1a2e9eecaa86b2154611d4a97efe39ec327e89043033f16793c8ebc1c5a6b572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
