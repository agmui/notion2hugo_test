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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDWRMUL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9xu5MiQwnZVdC89%2BrvSWnti0U%2BUbPBkK6DB59y8%2Fu%2BwIhAIzefBXmQIUm0ARoJFhDR3E7zJcVq8kCj0vDzMeq25GXKv8DCBAQABoMNjM3NDIzMTgzODA1Igymd0QqXsYQ3NQTIf0q3APuZgBJ2pxAgRYzQtVzHonZM8JZljXxGaSL4vlcMsHg6O5cEAeOZvGScEfYgE6isFLCMSrhiTiADk18J%2BsA9l2%2BKzt1%2FR3VDmodZrCg9oAQ14Ac2urgBa8J%2FTX9z0GaraRN9gh0cTypRtvTGIXMw6YSUGtp08bh99JiRZ%2Bu2vfzeSyn1oFC%2BcxM3wtsRomZKPdPgHV%2BTxAKInhFNMuZttRu1qWl2sAdP96uqBlrecXxr5csA3wt9hWSmPykA6zqTI8APtwbgTO6h03KPbiG4g2pJ5Gy9V1YGsZjzfujqvepPFMl%2FMqIbpNnSSfxkZ6WlP5mNKc1eErYfWjiDLjFxxo4z03HzAuc%2BLUCUamvJliGOc00EmuNDP5RKakWYisqzDHq6EsEWF%2F0nGki9dUw6oa8ALuZR3g%2FfU19VMj5%2BdiK4qRzDTl0IQl%2FV615NanP7VTWc9qy9IglCMO4%2Fy1PmmSoeN%2FAcvIsmQ%2BtI3zVBo6ztkdZLUBV6oMHXhzDarwN9JXcjY90IGcAA%2Fbr%2BFF%2FrLi0m7EkGm%2FynO6eannKeoXaBtq5oj4P4B41YJL8KV%2BEroo4cNt0diPkyfuA%2FU9pmS7jkCRxyz5fQg5Jr4aSLZ5BtAD9IEOm4qeQYMTgtzCgpM3DBjqkARwLQQ4M3rsCvNZ1UzsJoHO%2Br97pxsklDusny1I5c9HolZBdITJ4pdiuJYLraW2G6mTbC5VR5p2hl6wg%2BusC4K2lglbbmn2%2BlTwwR1l5D%2F%2FI4RxnXvle5Gcx5U9vlSdTLKW17%2B4St%2B3KKunbRcJgB%2Bmh8qdNZ%2BrBVghWGpEHcfkHHmFzqAwhc847qA4KapJhyWpMCyHAm9No7Fnm%2B4t8ryLoYQJ9&X-Amz-Signature=9f40c56afe660c1f9ee3cfa4afb73fae7db7fa1383dae0f625043d182284c11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZLOA6Z%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUt3VMgSokwFfbb%2BWsfife8%2FcU9%2BYYCXek4dWfDrlPdgIhAIGxXdEjK1UqSye5TQzj2L%2BP8jPL9xIvW5h%2BsvqN6Wr2Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzvZY42dwq5cZzLZIIq3AMhFpKv5z3QQxRHaeG0oThDC%2FCli2f5fxfBqbv44%2F%2FAN8hm3A2hmV2s1Hk8kBhkZywGXjKf4ggZu99FXT1C5gNb2Jf8uc8kljhai6aZX2%2FP8diI1SZUSFCTBHkBUiZO3NKfWVPe3K%2FxtpHuIxNLFM2esPmPHvyQI34RYg9yUNrBZ14RG3c2bMonaxI0wCcuZAnIhdEuOQsCEwda8NCWTOTbN%2Fe%2BiWBNzMR1%2BW%2B6BYDnTqGSPR24DsvRIj7HOCbBOsjDdJXPl0sg2g4MA%2FAY%2FmT%2FyxzAXgyDJ1KZyh3F%2BPmLjZ8fTfsy4FVMNIY1TdO5VNZEunov%2BTYbq8m5APZN8DE2rD4bhY4Eg6%2FU0F23Dr150%2BcpM8Sk2fkD1UrSIB6YO2WWgqm85mot6G8kMJlI6diE0n%2Bw7417LWELG%2B3znJmtFmmxJp5cmPHSyKF2EiON%2FK3WyBfhH5r4xLllf3LdY9O9hZ3%2BpGM4PhxSUiKZOGz0x%2FeKs2Rd%2Fjl8l582Zpu%2FStxb2wNrTGnEY394Pd6jEc%2B1XO2cZTUAy1sEJ5WkSlrLM0II%2FVuGYbQOOIjGN2AFTtnE8HeUCsUVGZIF6gYijZAngGzz9HOfCtXubPw7OT33wnRkiIfAOLplCCFzXjDopM3DBjqkAVldNDhKYa%2B95dv%2FFLLmhNJwLnSTEOZWzNkOsoT8zzmwQfGNNn6t3LILdqMhXyOSJaSkt2NtOC9a6U1T8bngz%2BOKhFvePIGwxufuq3BvzYW%2FxzutVJkE%2BZ2G2zYzLxBA5QpK3kVILsY9yFGu1JKieP7SuPPZ4lYHUehzwJpgLHD3EYVklE0A9JrGiJN7gJm8mW1ki4ncaIQ1Av01KTw5Mvh1DH%2B3&X-Amz-Signature=4c28ff8af765101d7e14e3dc9d669b6f391584f33ccac9c1e3d9d9d1e56d517a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
