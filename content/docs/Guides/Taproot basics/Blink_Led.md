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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKVDEOSH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICb%2FRyPM6qpfR7HIwI2YHyG9PCk%2FZ4i%2FALjbpEJoWZ3fAiEArjXnmrVLYeToqilBw%2Bs3ak8DNtxDej4uo5d7q1E9M6kqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6dqYIs6CMlNgQBoCrcAy1Jp6Jw%2B2VCcqoojaVAr37EApZJyeDAAtEqbMSdKQbz9oLReXtYL%2BTG0UCc3vg1MZpWyCM36uOqGr49BhEKJqR0rMrhwBJswPg1AxdiMcsvnwEXdSTmWBmcML7XU9iShCrdmjpuDCjKFA%2BbmPu5mYDl%2FtVzJhfpk0dbIW%2BE04YdKYxa6NIDIJ5S4ENGiw1rZ1CXrKOzw8m41LItt%2BVHMYAx5TqrGBjlnsocaRss73I9rzgP%2BZ%2FfF67qxEbZOWYAQ86o0YqKuY5Ef5Ei2tu9VbuI1aqk1QUKWtcPFuTeBEiKFxCHbvmwjMs%2FmONa0JihFE7oFmXdoyPNAkqgUn2utR6VDduBK87Jar69mA71r7x%2B74koiFIjmUmxs5A94hRhu8PscEA7Ez1DXTZ4OM46H5eurylqoyoD1xbyzQlIxl5TBjyxAgLSQiTRVpvWqMW2JV9gweZMer%2Bpn8CyQnSDFNMXc9P%2B79Gtt1pxMJuhsS1FFE0ckcA%2F2kKVmn%2FHhsLGa1hTVErBLZPQT24zMcW4hqx9rP9JdJap5Y4Jwj7gqQpUf%2B0sIGroHLjn5kvgY6eULD%2FF07luzgUWu%2FoVOgsEaEmZ5g4M1eWPHPEfSu5s3fi%2BQng1YMdzH2wafWgUMNDL6MEGOqUB5Jq0H1oUfKeQJ6EvD%2BbwNOOY0MDTCITemqhMe19tC%2BDYYRoeB1BUlEYuvSi7lKm3BEJEU2zJQy8xJxOPkixLoFR62iq9Qb8IDJjrXpECXITQmw86nUxqxrJ3j%2By5PNggjYStj98MigRWbJaZuAxSo3EImidPMgEy1PQPBaVRkvqg1IapNHaqCS2TgMeuu6fqO%2Bo8lRmSafWBlWUMqzYzbH%2B7V8%2BI&X-Amz-Signature=f21c93b734f523a7d93846966d4eacc038b333d11710b0ed31768102c4d45f13&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDTGUTY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgpNH1AhFc2UhpjPq%2FTZtuylCA7c7AkKOpDKOI7FxvqAiEA7ROR9NdsPNcOI75luyQq8fAyeqwRpbi9Y1RMTAiDBBAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTrDjGXVUzvRBqtbircA00x0VqjabLZMU1U3SsKsCrn3fOWHRpydXZmhrMKpppJCzs0%2BO%2FFJMJ%2BNtlZNrqmKSmD5Dv3B4ZQUc%2ByeclH%2BUufBFJsMp1sjTTWnmdf3okBGA1xhHE%2Fvtl08D5hNlBZHo0e%2FkV8WEqjYsdpF9V1JsDwzrV%2BfRU%2FixILmLNmasgguSzVPnxax4XqRn5zSJBF8elXcx9E910gzCK7YhEIvp3Zvdi7z1OZNv2azyXj5OBXRkHeqxG3YLKYTKHpjXIdyzQnxBSbEYiyKLn1T7F1HhRa3ePcidWdrtNbC0w%2F1aEFTtdGbfy%2FugaDffiUDvE0CTzC07f6zgftIpqBWh1t6yk%2FHsq5G90FpttMhnO1MVJh2ab2QDrOuCpHe1QNF%2B4kTC37ISqg1ED8Pvz4i%2BUHoNQGYuCsnUQJDPwi8OS7bMui106gern6NQZyzisuD19B6ooxBdDeo%2FTo1U%2BKpjq%2BhPhtd0qjRkuIdfrRg91ZpYrnq66CROhpUtjoDRNoK2Qw7J%2FUCDp0Peuc8bV2fy9KxLEQzFNygwZ1aDbm4h5Wf79Ua0bf3G8clldHXKb2LhE8hoj5YbA4RPNgqmobjuYxpl0PMiUU4V0WwF%2FqlciElPmWilHuPHK%2FAbK7KjmbMMDL6MEGOqUBgmTpj5TRDvle4jhhNLwryPYW%2FrpKjmz1iGQDRW%2FxVGBAcXcZBhKnuKPpxdrkgyiCutHdfqrGeYeEl2CYMEPOZvN6a9chjVeBZzYvytAjDL3ov4Dogz3XL2E119colrZlDNeFkputBXSXd0wgDNJKs9YvL1uayrS%2Fi%2FFYFyfh5KdADzMrGGmxtCvv1ZKt2AQFJjC2Pnci2hKgBzgehEexImW%2B3HGi&X-Amz-Signature=168adb6952aae1df8ea465b2e57acd2ac38af08036255595b48c2e0151542f99&X-Amz-SignedHeaders=host&x-id=GetObject)

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
