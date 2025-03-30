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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZHVIC6U%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIB5Y5P4x%2FJRkpTxcTck%2B3L9VMKzOErZ2LUhIyARktn3LAiEAlbgze9ckkyEFyhexXcL27iiCgg8HSgWU8O2h9cqObcUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9Bq3KeZ7TUzhGYQCrcA0xKCC46VWX%2FhWExt%2FEuexUynmlDf0L2MOolH7m0XgqOYf155iXjpl046rywMNN%2BRTvz9PJdNB1FLkz87nbw3HeU314p8FgKJGMRXXCLAzMIbcdw3x34dRddjoLWzTkoUQGqW%2BpIufpDHrCm9D1FaA28FClnHDaSp0Ap2pzRA89V%2FhamK3GzNqa8kY%2BpaFbHc3D12EDQKQzdw%2BA0VYv3jbPr2rsNxyq%2FilcPoTO5KykedzHwSr%2FTW5rWKzURG6aRPxz1TwyyR5mWIVdWJy223Wi1U9zC7uWalMruntkdd%2FwcBVbu0Xu53PuT7fE5vdn0%2Fu1FnzCvkba3uTivEtBx3WKsTt8%2FHfNYE0cUFdH5Nwy3m2FqI%2F9cNeOsJC6TXjq6A8J8Ln4s4diFepOT27jaSW2LxMNmu5i0hTFU8cIDSO3oXYBfQTEMpfmLWT5Q4zQ2IjsnnbprNunwyUyK7v6I5DegxcgT9QjyeAABVS5uAe%2BLc1VtfZE%2BD%2BH206Qj%2BdgQcFMHjsDj4Gfu1IwYGDfljT%2FcpJAsmt40HYiwfjfCvsZeS4D3SNuvGFKkPbesKAqhA37TJvvfKxtEFNxhEh0uzbZKuqcxB26m3JzrxlD%2BGhIa3SL5RdolxRMsoJuqMPfvo78GOqUBWDBt6cAX83wg4otA%2BieSlPt6FaYHEyc5LLqHNXkQdiedc6%2BrpWUx7F3gVzoTbtum4JQW%2BdRfVqIq0i%2BXbBpTTYqR1rCcpAkuJgcT1xWJqaKBubWCqI2H70Kpl6UnruwAOce1I3IHoXljDtG0kivrl4thfPrgd78TsJsIlJM2SEFA%2FSLd%2BwewwKujVgCrLHFvx19ZdUzqIoYjpusulTLTkJz4FlCC&X-Amz-Signature=12fa9d750d98e0319225c66da1c7eac7ccab30f4e4be5b8d9486d106ddc29dba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UWNQYUT%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIBRzQgMGJNmqoZtFWwsT6a%2BRQ7CWohL4VhD9EOung%2FlFAiEA5agcDrti3AgEmGgDvzgjbLGaXJZofHhMUOscSIFC77EqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMm9uxXmJZbOBJXEZCrcA3N1WQdiCnoI1z6liaFI9%2F3IojrPw83YzOVMKdxmFcwraaQ154fBGdx1SxXXNDr4yzgJ%2BnIxqnGmnBXJRRSZKm2WbUGVvXNSLuSMpZGO050%2Fl5f%2BetChgDJRfkr2Rvb98lMLg0KHRBfAxDN%2FKHHYbPa00b6ZBO7bfkYS8qLhFa85RCsqdSrdumlQKz2rZk0RLpprDjsitByVbKiBzHphQtDA1mdEVbXzfy4U8g43tLmQnQOD%2BXaQZ23oGR5C5wz8AUniSVz4mLUcuVkLh5ApjBsiWLU4z0KV45eTbbXH%2B4BJiDXeqDi4JVTwvScMG28B7E76hapBdXDCw4pw82EFwdB%2FyUweQrq1F1VGo6hCOdJoh82sdxs69gMXErCH1m3mqW6KIzDlgMH3eO%2Fy5yGm%2FV55UPeOY6TmbI67bns2k9hXAwhMLAbA9ko5%2BWGkVBm0yX2TpQOqmWw7DW3cB1vs%2BPPK0gEfIjtzozw1XClIT4LWXSZGiVObv2NAucl%2BKxm00n%2F6Ljs9Fx9VTe%2B8PRcZWTvHqfn%2FHKzEyMIvUeAOQ9JBWmtGqeBA7vU8taeAyVopbjI57jLPmPg%2B1V143MCPIY4V66BGBke1KkEkVHaAcDx8%2FKhL3h35Ht9nc5AJMLnvo78GOqUBJaiX23hkif1l58dX%2Bsu06e2R3mJTsrvkAY3GtX1a1R1KIUhrboWrRoFvCL6RrS2lv8Aipixl3kCceoPjqwrWZZUzQ17o%2BjXdFe0a5rTpuQt0R7pQsojmmjQT0edACs%2FPkp3SZSb7DrqF67eZg0LLttBAecf2KenYsJVmmAOpiwRPs8ZphUKUGRTtGuOnb4ixvTOIJSmZobHNLzxvPrPEY%2FOSuLBJ&X-Amz-Signature=b32b6ca594b58840b5a50ddf6b730947c5eb10c11af71eac49e6950f4ec2571e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
