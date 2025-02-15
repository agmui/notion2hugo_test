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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVXLQRRA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIG6YFby4V72%2B1WSS8zsEwdtPJEzd3Ah8wrvXVCayYCZLAiEA%2FikcTDq6rrO%2BYz0qbZK0V%2FmzRA7YnJnJmEv8B1ujwtUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBdstoWpgH2N41ArRircA5JD7nZC20jkHXYWxBd4lHZhiLpgDYI1iR01Sj0ffsrcIk%2BwpdQbiwX9%2BY%2FQyoLR8ARy1LZtg7fgrX%2FJ4lZw4AwJk4utTtB5s5T2TaJn%2BzDsWyJ0G%2B6p1xGRO0P1iY4AhkI58l%2BnMTWDWYvOFEKfL9srCIsAj8for2InZZK7k8BYCDr1C46aADjIW3jpdhxb%2F9tsRpUTCfk%2FGRWubBAJaw%2FuOxTY0ms9GSiKPv6M7phS7g7zpE75Uw72E%2FVZXUSGs%2FBRTCRYtUE%2BsTkVSaa7gkuCn769L1zF9aMsKt%2F2GdQSYEnnrCBI5spAEVXkEqlH6IU%2FjhTbNa25nqZcyx%2B2%2B7zyTRY27fpNtCW1jv9ayM5h%2BnWIjyjmtrDPdrUqWqIYrqi8EUvutjyepC83SNAZOuBLpvaL71rzfIjVbTNfcqv9hJLqvxH3YezfZXdAdTkyFCVI2HHUcnS2ZqbIPAUoDh0pwzukJwoYIddJgscw46EEVfrDwxgyGiKTniDNC0JN%2FUz4HRufnnunIhDIcyuHVwagqJaBjsSUtzYATgWEL2hxEk%2FOBsnBbb8n1JNf2FLHqH6VNQHXe5VkIi5NP7m5P%2FX3BTUq74RR2nzJz7rnhkXIO452nim4AIJneLlnMM%2Fswb0GOqUBzBEh2DFWFMVqlrS3mI%2FN3HIX6okgZfQTCHAu28L%2BNz1DfWHIJ%2F5OdtYvUuJFInWuG7uKGmqitSNz0AJkQDy8iWfjep8vPbKQn9teco0K6vbFmRQpQOV0XcqWlnBC9apm7gplm6N5PdxSsPq5SrHnWRUCE6TrhRbo%2Fm0Gq%2FbdRER4ktg05iebZjbEWrmVoCr1pZhyQqt5LJYb32c2Dodte%2Fh6bS%2BY&X-Amz-Signature=b697e9c853e9bcc56cc93a1b0d7c3b206d204fcbe69ad1808e8a5a9271ceca2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5DI3MX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDMpi6KEbtbYJhFB1bBOnqZrBWKsX9ksCSNL3j4F2tTQAiEA1A9bigNYlRdWqhQ%2BsyBw1W5wCCF51z10cq6hrd8%2FEs0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCA3%2BownBVc%2FsB8S3yrcAwBa2RFcF8O7qjdBNIzmP48KwlVisXm%2B4NwmMyuG9OkM4ABMuCFm%2BVL7avctPhoVKudaM7XG2uSGdmRIoVJGvKAyB8wYehiWgWThchaR855ipf6ouScrXyj4unMXHh%2FERQFYRJiJrLgTdRR%2F2Pq5Nbde%2B%2F5%2FDNXiTKR68NxN74i4Bqzx%2FF3ZX9uexT1ggBF%2F8zd%2FykfmgZg9C3bMJtvysGT4LIhrutHGeM%2FbeLVzToKETCWva7Z344LhsjIsZe6r8PyiyMEewyzFTqQ8F0xCvdAsxWjqcLGnD1j0iIUg91REy5zlUCFoun%2Blr%2FiOdSBNW4%2B3MmYZibX4btSsZLG21rA7nAPVYU87DJMFIsGJlRVwdrOXBxNlpLnEcRXKC7lXJWL%2BKIY5r9uhtj4XEqhq6Ih2li40tsue5i36X2tDz56Y%2FbmtDHyp4qbeqfAMVSC4Q0WAMoPDSll405xIgGOnT2Gio5FYAvygZXB0PvmWj7Vcr8ECVjGlMRyxs51elhzv3cPt%2FzuPK%2F3jlIRQ6j9gZDiGh4pRy7PG9hslhAPifUukZidKP8hvBwYwyN40hZnBvBj1PrYAHTjC%2BAxQ6x9UVOzc5lOc2tKHUhQgoJAR%2B4r6rKigPvulWSuapl6UMLDtwb0GOqUBQVLqqMsK2FRNrZq%2Bx3V4plpEKzcqmXCtDEYms2elYTILx709psSPEkKoRPLIfR1%2BIC%2BnavsvzMMWIm9kHBpgRkAhaiLAObcnInsXRd0UJj13Sxa1X8CNuu%2BkEThtvIPl2cyT5mR3OITsw58sLWrB1gK8GxkjBkhDkXb6mAbPXu%2F0acp%2BUCob5V0LU1Bg322DQKyRZDrn%2F4FRgWKsC4H4RGzKXZ1Z&X-Amz-Signature=7d45f9776f755b5721cf790fef19bc95fb9b0de4b83b9fb1aca256f1af950124&X-Amz-SignedHeaders=host&x-id=GetObject)

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
