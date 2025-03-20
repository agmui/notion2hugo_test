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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNWYTEP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDWpNyNFcDOVGQzGMeFIP3zRso9oOK%2BYsuKxDIRUHoINAIgRXvE5NN5N9qRR8XlcxIz9VjOPH6pY98CrCncy60UbSIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4k50LX1kL4kINFAircA5zvcVIEdQrgfYWiYAXmPVTsi3UVyXE4rWX2FXMyxE3R3TAxKM%2F3g9jJ7T0eYVt0vWtL4jLXW%2BKleBPZd734nfqC4KRmZaPi%2B9j9j4FyHbJkTSO2Hd6jUcb04nsMczhmFon2iWX7DFKfPzeSqw7drn3yztjfVpqcG390ktJUjf9nEQ%2FPw9jSTzWPkUyOUNP8%2FFL4PQ5cDWmRp9K58qd2hQ8EO9Xz0y9gUpilEOVOlOtEifyBbh8A4brUwH8hqr6%2FFWDqk1AQ4kwLOpqWO9vlxGTyZmyFCtc3sdCqEmNW1mWTrMGdnPJ9daOAi2OQgcgXVHAKblluAE0eckoy3dJQ2S4uPcmvF4RTzI0bzzaE4%2BqkoBtR%2BY4HBmUXYviB%2FiU9yksdGqZgzOzmP92%2F737DsboUNzCCn43nS2Njb5FiZCDcRu1oB56Qc2EYS9PVChNEs5MZAWr3IgLLDmECjGQn0yYMRpqZiJCzz57fgmwnjN1%2F9N4acSww88Pmzrp5Hd2KcL1aq305wZ0KA9w2ALQr9OR2LLIK8GEQFJKLgvpk5IRLyw1hTLxpFzTqZnSQyF%2BSUQAQEjK9FyoU7uVJqarFJub3V2Ky9DEz%2FZ8OEJZ%2Fda4sqP092JU6gJqmEx0%2FMJXZ7r4GOqUBMnKqo8XA4R%2F%2FVPS84s1KmFDn9SPvje7TtLrbPTAU2zpmjAT3d4AYasGMaIn3SWMS4BgFQx2BugYU5FmQuGFKPXWayEain7NCgptz6WSv4gFOvDRxJa5ZsiEbRAo6zo25pk6qtivLE6mk%2FMiytd8Gkqi%2BQJOnua95Tzer7%2FQZ%2Fcv%2B5SKZY4QKc5DAs13KX5bgxJ95VjA6us30fzxFeDxzHjACAPVE&X-Amz-Signature=20aa055565476e9f9a1342131f4afdc32b84a27ef29db7ada113e86f73bef3fe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB2L4KYE%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFfzFTaqijb2jldlgjH58xcn227RdPXYqPVkPmMW7LD8AiBddZRRz7QgrAsURbSrdquOdlOYnlsLc71uMVVSEv4rRiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoBntpxVwuVv74JRPKtwDOC6qyN4JmoksWUH%2BnprHK6j%2FRIcl3gT%2BgDyUR2%2FSr75kmzk1CzOlvA3tLS7v12e8fhATLyuqsujfnAwiOuoZ%2F6QFZsoqVBxVB%2FlmpFdLJVp%2BA8ldV6%2FjtBYx35AqAUceX5Io2YqS071Nb0sP5zTgIU4hcYmnIJHruKNY1WO6QdA%2FowoiR42vEtVYWBdkPzT8bcIUDAWiiJfP%2FRpPo95M3z5owjEfiMF8Zg0nr8r9%2Ba1RRjukKOk0nTu2fhmz9VcbgJ7uF%2BLw%2BgPAXOhgEaCBRrD38hsc9uGTHRzgxo8eK5wXBQcFlgrafn7zo54RKqHxXvI1a83QNkaJSIfIuw7HD4JmjGwRWqosaKfYoYf%2F%2FfsDoh77QllhulVy%2Fpzkg9ArOHee0mC%2FyxXPgzolEZ0mh%2B5trTgwCRFJos%2FvBB3EjBcYLDs2U1nu4wY2OYGj3Nj4zriujuke9WFtgKSx9VAAZ93IJPgvYP80psZPBeC7Wzcy5M3RQnKouZnBEtij%2FYiZMpy%2B%2F30otXBftDqy1K6zLAgIvaMyjfejUg3imKUWfGQEnI6uxs9BK2VUgk%2F8o6fpQ2LWsHM4cDt9Kej%2BxmvZwXaiOfbR7agMTcXYOl0ktVWSXQxPVDGzhYJjOH4wlsfuvgY6pgFmYHExuqhFCbh0DZIRLTEwOQn7BNOVjV8HLS3aFlAsF4BTAUqIB19JCPLYKJS6%2F10Cpo9QFGa5Q%2BUgnuktY3nXs6X9ycPdpRdaDoNZP2Jx6SCNuLjjfllpu9vgmakY3tNG9ssRqLQpbizJpKFrSCCc37HsMDYxJvHGFA3f5nCskFXRFonRqnd1o%2FRw2fgywzsZDBCt33i5gmWxTq3VddZoFC9PZb7y&X-Amz-Signature=fa604fdcee8fea56009ebfb52d4ea45e86f635c805bbcb4f497d9ffb242413a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
