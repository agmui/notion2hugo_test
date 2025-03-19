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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDNPF7P%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIBXOkaPxTdk4qun4fY4WjtqMxQ%2FppBCFYX47Cp8s3T17AiAxNuyziI7cBJ1pDOAUpT1Y6CWIWg7IVuK2MUSohx2e7yr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMf3%2FKJpZJL0VBoNmnKtwD03DWTgesdk27MimtI%2FOM7jZzsfIyIBAHk36O6UrTL0UtUh91PhhAUO9kezm2idbFl64c24WAFgFNDePuoObPmdyqkZbRKqGa7LWCAPVHuJgPcJHbbu9IBsOVo0HJUt5N8Odh5DDpoK9inMAVqs7Qq2D8NMg0pdVrq%2FwTkT0QqgTljO7jsurLh6v0%2BVTeVc1r%2FYRUv1%2FVgjmDIjyaithbHrZNSHm4FUNlUIa1ivMBCUCGYU%2B6tnu9wBrzwMoz0gdfEndRFaNhTr3ohGPR3IBrRLdMGDF1dyeFhY3PE9pUEcO%2FJaV4b0XR3ekJ1Np9wyRHVaAqJnWg%2BUTyliSv3A6QcsYY%2Fag%2FvIunaDX5uOKrg%2BsUAxtv6993Ij1GW8pa4Nj4iASI2bskH1KGKLzAdX4pSFra8WKh2R3Zz4ItIMytdr%2BjHw67y6FokEuwohwS8jGRPGYsP%2BdtzqkbF1XMcMl6c8GOo4DdgXsjONZOiEFH3oFsABMSinnnuThz4j%2B38W0IKFrDFkYbaXH3V%2F8S8KMT1%2BijRMh%2FaIIrxZOKZDJ244g8h8y1VbbXggm9fXEsdLoRYkU4xWiq43CTGiOjE2W0PXkqqEvD4%2FOVku0jpQEPWuW%2BKcIr26M6Sx1Ng5Ew%2F%2F7qvgY6pgF%2B7brQvWbLk8V%2B3KvLfhqUFmoSkXTpX7fXbWbui%2F%2Bw7nrrCOIZd2iSRsJPA4atfQOBzRDNS19orjlBW6hpzZeUEXW0Ucd928T%2FhRxdjpnYCzNcK99dueaLzxdu6helx5gljE8jIzNVQcPFz3clSvNc6HROtO8Z6ydYs8GCzJA721KUj8lOT6Wv5c%2FIVTqUpQdpz4RmmkRorTrot4ypaZAVgGrUx%2FMw&X-Amz-Signature=d1f41ef45d55223e20c8ecebdcdb3baa5349c4b57b1b49dbc395fb309002a16c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHLWJ4I%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQD7DDZ4VINd7%2BP%2BjnLsUgW3M7SbbdRxxdZ9gPchwF%2BBlwIhANPKmzQzv2prfIe%2FyVggOiNiDffSOs9K%2FPX6HhsGba%2FvKv8DCHYQABoMNjM3NDIzMTgzODA1IgyPsVf8wsqA7WtE%2FB4q3ANb%2Fn6fSIlxUeWle5ucm8ZXDFRjLtKSiBPAbRCvyCGa7G69cRXnTD8c7zNrIbt%2B1gZaNvroOhb4dU71jN7%2FGQ4cEVxBu%2Fvakhy8qDmLSaO0TN4PuHn%2BpXT1pnIVdCCd5hJhFZg2TH7wL%2FRhAwSDgccKEJ0XWWMxOt29%2FBn%2BPSIF2QQQ%2FKOX4N5Vq6I7FkgjqLyV%2FbV%2B6lcWWe2L7V%2FjXQ4A5bEQ4oAwC5rMN7v5UVDtVLT%2Fp9QKQ%2B4oM8qB4W%2BF9dpSXImCihLtRJCWc%2BNiob7Uy7dezuz%2FPGpHNHSxZEx3sP9M%2Beo9sP80HOMQDmsIRct7P08ZGcme327dyan%2BvGLMbboWzJhD%2FIP1K%2BOF%2BzsMsxbc8%2FraC5rcCm70gjgdtOrGmqdNpk6r6yqkboHusm5ISYB9Vd5gNdBjLKpST4AGws7GSXEHiVdytEccV7rbdC%2B1paeLcpbjDphBC5B0H8ca7EScfobe%2BnoKkFW9Q40etBMpq%2BWoyQENKHmQNRecQvAjZUn3NNnw0EU9pLpFBPvZLMVfsGIgbLkydY1vQp1BuTP%2BfvlFqQScTjTsV39qEloCEiJZfxXcsGR3vs2gQxkV2ib71042UuBAkLblKRVeBtEi05BWyuN%2B023AVjD5%2Fuq%2BBjqkATbXDIQ%2FIyrzwQVtYbgKbVqUTESOu%2FezUS8Xmf1kyW534CdbLZtgDxDvWyjvCYBKU1QRq77OOSoJOSXKn4Xbl4rEHwkmkxJ7CMdEHuhyevMfVgvW%2BSTU%2FRN5zQTrfqh5275HGScwqbVImA%2BVPXVBQsJ6k%2B4bI2aNTPWW0eF%2FkYfx1s85FbDj0p5zhO8HjWv5Z4ECh4bTlnPsjIu7weKIv%2FkMVBFn&X-Amz-Signature=7ad53151d6bfb032e70bf98072da200dfa8c877f3723e2fac71d415b3e1fd5df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
