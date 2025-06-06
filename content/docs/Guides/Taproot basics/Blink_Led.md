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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5P467KM%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTfGylU8MFbj3UO4jDxeBgTwISYLbRX5qpzI2yorBIggIhAPNLRFyE0rnq5NG%2BaRtxO8nh%2BgOkr0nBIxzouhH9ZELiKv8DCGUQABoMNjM3NDIzMTgzODA1IgxHvONS7DGGRbqnJRgq3AO4EXdoEzmE%2B6kLLW6XAMzbxmZQUIsaZQ9fKkgMd3WdQfaUejqxtr6Tvgy%2FhL%2FfuhsYaBGDzoUyvV0qr%2FnXkeRRwZ3MCYroBTYG57eDuPZuMx%2BaaucoELMiH1xUy1VvCaVtWULH8D8rT7WRbpmxUee9XokdqR3Hq2bd8tXu9twySxKYL2gS3JaT%2FN%2B5FurpHsMHx9%2FCIL9WqCK9iDKdFYe%2FI%2FNROBwgP2VL%2Bz3qPn9%2FeGCZSpvN9vQLupohO6GsQQagtYMaiOZ0ohMgjAv6lWgQ9MhjoDUsqyaSl4yyZzdR%2BhC%2BEQ6SUi5BhyDO%2BRzhuz8Vq5Ovjc3nVgsDGjXCyEUiL%2FgHGTrb4bd961MmO1ef%2FXR0zejIWxl65G%2FIkmxdwy0R4ix34WWVHotQ13XQu1Hgpj6g8NxY79stUq4MRZmS1gaus1Yjx14cMHVL958fsfS54LOeiSYA2t71zvzscmq%2B8W%2B%2F%2BpO5Mv5sCDOOuRl8GEZhyuxdLNzHy7bwoAM%2FgPYDrW9DaK5P%2Fz3ray2SubYma4uyW1aIeKjewrb6FsjRvCd2WsHyLPUWrO5pJoY7RndR%2F9W6mumYtMeWEz5ATxS19Wr%2B%2Bgei9fJ6fRCQ%2BmFKs7Jsrp13zEMEQnCLyzC9kY3CBjqkAc6jqJ5EPcaPzOXPXY7sq0EFCrtu7t1Hy81nG0lOKRZScjobEzNTxNAG2SDfAZKOCEM6LOI2olvfYGm4MCFy8GExntLmxJ9KJDtVliwiyCnreR5IyYM80ndR2ClFC8a6fC2s%2B0RO%2FgcTC%2BJdpVYTU7ZudVxsduehnjinK3sf4XVUXtOLMoBtiHUM4RPD6Z2N8cnBCd4ayoydGj0Z3yZuKBmzaUnA&X-Amz-Signature=3e83854193f1cf56e14833c0791fc86899cec466c86490f7810897a05875f8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A2WRSVS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXuD08anXtZBu5x4z3au0UOQwEAq2Afvsd6vLAwm7%2B1AiAtur0G3mFPE5i%2BTKtePGnrgAAWD8GfJ6RTsjUcL9MCVCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMSUVxej%2FRw87eQMcTKtwDZEUicreyjZbqvE4RfSx59B0faSFgCZrsHOKUG9DHTPdDs%2BkU9kYCXbhhazYlhJrbhqdo4FZQ2LWGb9DY9g%2B5YmyiojM6M6x%2F%2B8xqPYntePLofNnjSU2DiZcdurBwRPNn%2FjBd3r4VwyY9bupembB%2Fc%2FI13xG0pZx0wMNCyN5GBaZ4lpFIEDvnV%2BadM%2F%2BYjAsFK06seCgLsZpqPVVbD7OX6Fuzj7E5ppJ1CV2g%2B3yGpJIARI%2BF2TwdfHJE7lVwIx8eNf3iHDDSsqQZ3iut5dTebsi%2F2x8ihdu0xTBg70wtYkBG%2Fri3u3L8UIQAjPBaV9Gk%2B6jJqEh8VYNYg2fwVDO1Wt0jh0eF5PR2PktzOJRevNQbOUnVkW1L0aYF2UcEkSNH8DHYFyoA9cL1B82Uk%2Fa2U5qBdRc09V08fg7eweGiIeeMVBvPlapvUGyBV0uhdKLA9Kc2HIzATmdlqmcndD77swi4GpnOHbvx11oQXAgBAO4fX7xHOmWpOzyoybrfXYuYS5uO09zbbSHacrLA4LH%2FKjmvu84JjRUE%2Btep9Wgm0%2F3U1QtsFDqwAQlqSePrnXKiX9XL%2BdjnzCW%2BFq66y%2FR19exLyc4TjGQKYGyTqToDoxBbUuagxvMzG2LsGVAw3JGNwgY6pgHs0pOXNnDoSkUXlo%2BRa1AbdrDpFiAy%2FMRjWJbE1flWFk23mgJb93BQjVlcdT%2F04f%2Fl%2F6eUgUpsAalegnFu4HgsTEOOoKA%2FJUu4aw59codmnKXY6LhnmtUaq1CKW%2BZapxNZN26c7OrnFBwRFTuOeEmovOA6CZ8hq3Vvp4t4kO3%2BzKwMV%2F2nAbCauPWpBcKxHES4QAY2ubnCtfqUpyZeKQUmS6am4zTm&X-Amz-Signature=e85797f3160c162f91934b0434e9992e7054b65d3a5e16b863067959447a43a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
