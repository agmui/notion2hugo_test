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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXGGGFG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3m4hJphfY%2BQr7Iu4PqFgG4PxZCaUB19RkquZ2hjCySAiA2YAy1fG5nh8SGDs1Lt5L6rlY58hNYBv3vmrBCuVO58yqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqYb2dMLjgzzuae9zKtwD95FBCEB3ly%2BPgzGJRmh0s9G5KoVMo5mxwgh5olrbPotF0%2Bsfjws%2BPmJVArPsP%2FkJB3C0aMMHDFW42GUKatd%2F33iJofHXmY0BMq0vdD97kJ2LyTbYeAiN4KsV16UczFyQUnsFH%2Btl1jnYw8oy5KTxCbl2RASgGXtu%2FqpspaUTC7BVa7a4EpYGeEkaqzy19ApO%2FUfbKm%2BBHM%2BVAwpxe0WrswgSe%2ByvvhoA7GIDrb%2B43dkR58cNqZxB2%2BGFCoeH5Xn%2FQQjUVXaN9SkOHgsLfb2kNPR0g3otWfJc25RBmXUSDDiJ6nXXViSn%2FJJrezTn0Oqf9n0JIl8ScFivw3UZVO8GDYInp7r5ZNPSTOAouVIOy3tzA%2FZxovF%2B%2FRY%2BgGWu%2FQdHBlgdvt%2Bfu6UIV7BDpetJ9vicylFeUdOJqvj4a8QcYkdXIyh4FZLzQrlFTMHfX%2B8JRsCCjsIwOHNGPlg%2B8TaixbGi2z8pECZK8XY%2BmX%2B%2FUx8jxhqUaDpf7nD8%2F0WfdDuI1svnF%2Bo%2F041VjI6y0l%2BTBEfOKpP55tQtg%2B%2FSJpCVy6hTMWe6V3uuA6o6BCesllHkBZojvrj3RYkJ3r4VicHf8gPMJH4cORb4zWJNrzuRe0V23XbyLirQQa4Q57IwuaWqxAY6pgFH%2BWKUXd5056y76q6cnuIIwqGxfduBRR1r9ke8nHgMRTnqO%2FvFxjvJbpJ2eZSzyqF%2Ffltm7I7OmEcXhr4bsjr3DG941KlNHp52FeAS4VJTvwDbJ2QXenbKXKsyEx48oF7k088EYlI2mO4P4Wa7HM66b83ciCbT%2FmHiKkP6peDiUjGkgej7OH%2FghHOccIVmZwCKNiMk9xeDRnrymLe6LtB51AOWXNtS&X-Amz-Signature=593f74b53564acded6a0b6a8ffc11cf41920ed2d33d372f7054d950afdd43650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXOYGCU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2R4YnAZ28Ag5QDaO145GUbWrRqjeF%2Bsxlj69cpFy%2BTAiEA5f0OOefqgrrC3HfQ5jcofHm0edJ08%2BYcXsQD%2B4iJhJsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSRDV30HGvnxneWdCrcA2Dpd8o8IwiaJTDHeIoF87F%2F1Ts5O30K0AUvK8bsfQ165t8BDufymIPsv%2FYMEe9ilUVAwWkZWWJV1aWUUryvkpRZl9l8SoDVSEEA1kPXTgKAArFtzF7sWhzPFr4nxXfO3zhYMcoLUJMb48sguMaa%2BLcLArtoaoEMSGvsBdt68UEiKue5yUXKa0LWw4LvvyXsoXP9OhWGa46i3iWbhBNmsTnIa2BwZBAnC%2B60kYiB0HvP6dq%2BVUbGgCx5yOgtn2%2BfldnFlPWYYc9X6W%2BXkbchEk%2FDwpq5LYkK%2FTCNvGPOxv5X2hS0NwUxmMf34eHHEEDbfWepTTgxdqStKbaBMZYgFJw92xuZIBBlwti7na%2B3Gm2AGamWxKVxq1A4iRV6MWpsazWF4gDGzFJ9Hoz6sMSaQGPKPKcDVo8r8UyOJE1KFVVBW7aH2zQ%2FV2S1%2Bc6FpVPOkx%2F%2FnRcFxpkAMsIoPE9ihw7oHx0wcbg%2BmvUh7Tei3A8GVUz042P5n6GjmqRi3QaKitp8n8o6N6nv7VRn4VzNLVnhhMuJJiYK0bAFC%2F4E02pj1heNx4BIBr1vTvGKknPo1DohgjfflOj91uRTyOU4yXm7PPuF7w28ICC%2BY8UfmY0tPfRfGfW9x%2BbFEC63MKmgqsQGOqUB5S4%2BPrSxtlmjqSUZ5WRZi%2BGg3hv2zgahPiqY6b6XgneKsC4yNlZw4BYIMWSqbu8P%2BRGiSkan2T6NdfVVGXy44NblWl7f%2FDhWQgDbuzEq10OjXScolCRWJzBE2fldUDcWN7PO2%2Bph5x3nRqGPtto1%2B%2FQGmQxKribAZ3ox5dPtMCTsZbvhjcC%2FnwMR2YHaFf1pw817NPkG8rjZM92CWwJM8CUVpPOk&X-Amz-Signature=340db3d8667dae1d8f7b14f00a868c568e8f2dc182d535bec1f1c04bd9cc6bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
