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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEFYH6D%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJgHaDN8chr%2BLjFam1IqYwES5TvDl8XpjGpCiLxRAmDQIhALYZCEC9VDASCcGY2ZkgAByNzRjhqePJNU08qdJqqUAZKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4SJKzC%2BnyrLl79YAq3AMpkf%2ByWjGZ3aHhhRtyoASME9HNOwpDEk5lCpW5goRmBci%2FUPgyzOM4wKZQt5a33S0oykRNP8dPagM0oWWA35tS1CDtOfXIuXdb%2BG0FZ4vewZs31mEJAyzcjZWYVVPBkdk8XrR1qeKt%2B0CixzNcmLtlTPNXNnJckG9gJ4CbFPuXWq%2FdcDILwKpd3SxyoBpIZwprwF%2BdxB7E9ksCpB7QC69g3UP66aQ2Mtsm0XyhVP%2FWdkYHMHKyFk2deRe5MfRBTpdpAPas2%2BXRrAak4EFxpiXEteSpvNFLsAB%2Blj7S3ueP5x1us7Ttw7kXNMTxFI3GlhZaMnmQnTVXPCBZE%2B1yAc7jQi0wMs8yKDewOPg86dDUm7dPZfbGt2tJOmuRtVkgxSFlQS4jdmMYd2YMbdKTBKLfhwviHeWtJys%2FOWcrsMdWGROVBRk4lLy2qnyaabteBQDM95s5W4PylTHjPBZ4pe6Y%2FQr8kGtrgP%2BjaIDoglY57ai%2FyabQ4zABsEoFyb1T8ybm7v1btOsLgacbLyeDVPHMH6SfdV3isilp5P%2FbEIf1sKX3FNwKfke32pP27Dss9UXRlMpbAgm8suR7htxYyuMXtQ7M9lHCxnOy6EsBRxoWddV9FbAopUtWw2OWXDDF7sHABjqkAYeZo%2BrAaipVWwqlQohFlhOXekLI5ec%2BPE%2FIdYlk6Kod7wvl1%2BNLpIfxko08mz8QCfuGQuK5E%2BJSvXI%2F3Dy5fwUTrzkJK5gv4J8VXy95RC5VEuTH%2BQNfDfz6S9%2BGq%2F74RyqdXlNuFRAfIaVHiiiRi5yHgzcugBJdyjFo8kn6aXIApSF%2Fl8Fhucl%2F8ONdIzqxBpuziPDEKBLU1Bo7DvDWKwv8ab8c&X-Amz-Signature=a8cdd3eac97b39a7c8dfcf6003f9bb23c5e340111193b7654fc0e477aba37eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXF53WJ4%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgrj8jwbuRxvn9zi82pzOjp37dp%2Fv4L2%2Ft6Gi7CqW5fAiEAu679zu%2FR0ankX2PYhziLOPcCIKbEPabFQwFCcwxMzwcqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVwbdvrzj17h%2Bf42CrcAz1VzR5mZZy0D9C2Lp%2F8jv0WIgOrbPD%2Be89riqSexYKiROemEQjxJe5G%2FS%2FBiHMwtd%2BdEeMT6Rxc29%2BabK18Bh0wno4yEVxjEw4S9kYZbfbASlEFo5DLIQyeV5aYdMW4smVg1N%2BblOfXhhT463UDshZ4gu4DH62Azwf7eDXp68tdW6uPcDwRvjxpq9FG5GXL%2Bfvulcae2H%2Fxg0DIu8eMIKPSDuHMr4dvp49OTKH9AIQsqggp5%2FjdpeltJROFXpFFLFeKlCy%2BQ44O8XsN9BvI%2BzJH1rdBGXNWRd4U2HyO0NT%2FYyyiibQjNqvl5iOwt3bbz%2B%2BAngJNvBzqDxU37fQX3APISQoZWi%2B%2FVJ5FdGZd9fyQgqrGVW%2FhgmmISZ8cHkbdUQNupddDWVQiFKKevbBom2l4giPmPQ7mSzFA1BcDI3Fosg7k%2FjTqzYgsVJSsWEC6rGc5k6pqgqPg3svsJMjt61rMcHzLCaAjk2RBNGqQEafcaOxqCiDbKylLGexFKpeTqLpBh%2FixybhMwuzPJMHRsuZHKBAMZ7%2BLHQWpFjiOE%2FmtBnqOPWOGtBYue2bA9DSq1i0ng3f797lnqJufGbEsmYHEHS9iqg7hVx3Hbdxk6mC7DF1vVGr3ceYwDY9cMMzuwcAGOqUBj6XnlhYwrGoPiP3LZStSD7OjPwpVMQbVvmQMPnxeIJX4YfGpJz1H46kmC2iwej5oSNr8uPiAN57VY8REeZsmc2kNh2F9cjjT0x2Q0FDiZaKRsIXF8lCbOL4KtjH60oEv3kj%2Be8Q%2FZjnEwYKM%2BcoF1luLJczuxmJqGGHSiogMsj8UdgQ3%2BO%2BkGTZ1trplaP743ehnv47iOgjieADFCZCe4No3CPT5&X-Amz-Signature=84f669220d372e8028f59b819e69a6791476d9cfea9871f2bfb0b719ace0b841&X-Amz-SignedHeaders=host&x-id=GetObject)

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
