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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUAZF3R2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCD9cINqOyUrgHVHc%2FXm%2BHAQLEaGM33oXxlbgY3GSoxCgIhAJSTOHz2gOf%2Fy8a%2F%2BRLXKx7iUHTVJxonyDOk8lIr5T2aKv8DCB0QABoMNjM3NDIzMTgzODA1IgxEnqHqV02HgOD2qLUq3AO80EjzHEBDmFNzsTWeBg7T%2Bpr%2BHe9yEBDTjbEPZCUt1aPMAajn8yv80iTNYcmw3gKYvHwJcyMZqxAPziNCdTP%2BQOBI5TZ6o2xKs1m1ADecT1B3bnp%2BoQmGxKIZyXAsXHXthVoQauqECV%2FOfJp7x8VeG%2Bycly9BD%2FWaXzstOIlk9tW0EZyULby3gOOYQ%2FKgq18yOi3WoOFNbMR88l8jjEYt%2Bp%2Fjy3EWw4snALjDVwEi6P%2BUq6sfbM5MPDJb%2FcRiWn1aph0yBAAvNIfNORAuPnihlt2D9RIsec41KxRBHiDyRqSeKw934na6qieNeTtY5MLXcYIU58bxwGrmecED2pqA8qBaMAatkr4aOXt8TOej2Td8nrIxetHhAoIOLBhsKdCdTBI9pk%2Bf32yGGDXsqzBYw3oNm3iJBqwQ82zR5UgdQbpnVhbfEhCPwvlB6yU8Bsw9s3bRabQfRUkx7myTa9gGcOIUiWv1edI1DWsWL6oT0za5OTRCFGS9z56iSTdk6YR0Gi1pNBnIIC3P58nEzim0lgGPEX%2F%2Fk2CQVybXRfXWzbuIOUfVwRuB9B%2BU8rEnystJuqCUit2mqKYwRVYzSmMa93QeYAg7kwWTjj%2FmkuGkxAamqq7bmhfNmmNh9TDmj9DDBjqkAUXYUAb8vQvbMGjlOnBhjcd8Zc0Iot0gwdFoTyAP8t7UYG8z3VJb%2BoDiNg83it9yT3tlefyj%2BNw9KxH54uG5L%2F1cy010b2IIXDP7ZYt%2Bapo76wu7HDvG5K9zR60PIFuEu%2FpC8Fp%2FTOZlpetEank3D9LmI7lUH77h54hovwoQQ%2BXRtfwjqfiGjYWN7p9blgKGxdpe9oEcyDrlp4TxkX6rirWvr4eR&X-Amz-Signature=5e9a39f54d8f680aac930de8fc4142438955f676e60aa15d4c6f3173c5dbca31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KKFA7JC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHZhvRlMQG7Gxz0LbXuBkvqRi2WT2s6br8ZSPTdu%2FQ1QAiEAlb%2FHfEw9xGJ05ecNwIbLL2RHPBGc6QrNT2fS9cE4D%2FUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJ11YzFMnFR9lJ2geCrcA76m3S9i1HN5LAVDYpsZGzNcVfgl%2BKl%2BvBUA0JFQi%2BhuSSPPvH5u%2FsL2BfM58WH1YkfucOZpgKGaJf4Atg4Q%2B17dg2tUdPjI7L4xD0JUaxMuahLLsfdOiJ9gCiEtbYQMUEuCFniY3N86ZlnIbp8fXdzsc4Vxdw7X3lxkU%2FRNhiNI3gvm0%2FCAUc8ovqYFdHl%2F6DD2jCofKqJIbH6CVWMPAfPO4GfEkMxUkRznM92V4xZUkXaPOEq6xWB7IwFvGQ2Jl%2FRzcmKOP%2FcXlNLuOGJwZYNn%2Ba6ODSLvvhccs%2B%2FhZm0kD%2FPhsFCF0LJjo4BsadnZvQS0kWdnE7oXLJm%2B%2Boao8lMvn3hGbpFX186SFUEMHT99Yc3jVFWNcq7j3U%2Bp0yFtI4XuJJl94gBGseYX%2F%2B5HXQ9wg0cEYO30h6hnbGYdesgtZa8MMaPzwJaVnExYB7Eh%2FGLS3Xw8fsZRV108b9vr%2FZhkpY7gcu52SklfaqvWKyGKPMkMpN5fA45KjVM70V%2Brd7WAC10WSKxvtEgDRlPpuV7quB8d5ffOqROLo7osnN2yEvD0PLHGhKA0A7FO%2BGMzowxQo7FiXiaIWgv5Hj7TZaQszNl7P8gWT%2BHGHljXViYanFKyyLyIfrXWi1NyMJSQ0MMGOqUBtRcHGthM9GOLIkZYU8zkn1WAp3yDSP%2BfoTNyIPjW%2F5Oen3e0OXbScZp3FhF2sWmIQ8exaSP5YiYyY5MSmcLHJgQBIQ2%2Fsh6iiB8G6faSmwN0Y1kcla83AIyE%2BnoPA0ZsAASuv6ah95e7pSuNR1U%2FEn69659jpU0wSnUuyWOybNGIM0DnjtOPNfdmZa8Ztks6FoFay53%2FYcGTucvIAQm6Kx907wly&X-Amz-Signature=b70bb2c31ab319a04965bfc0fec5961a7d92bbe0426fc6b89d1536503837ce8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
