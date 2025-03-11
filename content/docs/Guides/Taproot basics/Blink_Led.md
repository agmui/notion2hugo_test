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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULGJVCK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHbJ3C%2BVyJu1NFKcgr%2BvrhbJhmvs78W2Dopf4fnk6PS6AiBss6TAQ9EHr7A9v4J9qKRlQPU%2FwBKmmU16nx867%2B8iwiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbYd5LX7DMqAMgxP2KtwDGJTTMtkWZg5d97NpC0exwnqlHTc8Ypr4v%2FRoJX%2BQU%2FGJ%2BxY9jk%2FO2w9SjLr0BEVPPLc9IIfPXjlT%2F8ZllluCHEKezlUiv2hHSbCz349ASCnFsZn5Mgkt2fMougI4CK8h9NdbMSj6ecrex0NlSOojWWo4pQeIK%2FDJ1YGK7KzgU%2BRri3LPnbnrETC5ZleoIlDEPp42uSWpD4ffutgHWEiJ0Isyb8z%2FvLoUXNv26O9QJYhz2A2x8cSmLXywMvCeeWF7ma4Z1e5kGi%2FHjWMLvAVgUjoara9knY8WXKL7dVqPDSgZIqanG1Q1OYkKAZ4yKb7pmbp5aCyaTF%2FKvlM%2B9rwAXPA4%2BVaQvqSWKB4PKITkFPZAnre53SAS08G6vUSC9QXqTp9i0O0uCR6azK%2BYYWDHyGI6Do48aDoI7WV0vZTtqTspHzX8cInaKPjtfcIBJza9zAE49k0bkJryj2GnxixCTSOee7sh5AWrLY5KbAmWMSxXbOT%2F2ZbMkvxJZcZ1zXexp0KkUeSDKSHkhdil87ybkhwOQE%2FSxbsUwPhCZnXno0H7dHodQmqwgya%2B9Q7XIzA0mEgkKW4%2BWUVWPmbTsaLN9VI0STuUc%2FaHcqr75UKZkCH7YVNokQc6TCwOVJQw2erAvgY6pgFTAHYy0RPMWCXbxj2RcZ9Luse4E%2BZmDi5GNebNEGf1eWz7w3U%2FwDYVY6aYQRoW3nmXtlrF7Y4XVBnSgxv%2FtXCr9tPHipTtoUNA0wZngrfYsPCbVJJPZePaf827Z3xEuHPlkhCkXLmc9uVccFpD1xznMwuliiH3NFKweXnb3OR3L8Hh%2F%2B71kPrnCk6Beqmsi0GCUTg4RDGOtbQZ6S8BXP0GoG49PGEp&X-Amz-Signature=fc79724656f8b01e7c892ef03378327257b2c1466dc33dd550a0b73757ba5bae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHP723M2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICnFLC5YP26DuD9j2sxdqwMeHSDqubhZePqtfZyT2o9SAiEAgqiATloa3o9ORMQYd9qLWLKg0vy0NGOCeq2BFXMMznEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASvFI5%2B5Z6itAjYQCrcAyM4xhjRnpZKaDkIB1eezeXhyhzm6KZn6mR%2FborNl9OxAlQgWf42AIxCTOrM6YNsKc%2B1KxBqcx3Rw3dg%2FupxcoGOZniz7a9N7NqsBPxy2QhUvIJau%2BoCvUFN5k54w8tNzvsZHlmx4C4Gd28J064V8JqM3hFxMXnzdh7rtD0en9wrJSXvCR5JDDoYm4FqRp7cJY5PASHwh7pe%2B%2F7RraHGmemu3kS7aYGyzfqQnglG7CnbTPENzGOpH3lEGEcrT3NFpcr0q6FuA6EYyYGyZ%2FECc8oEdBy%2BiUIjAuZPlk%2FxHoFsRoIzR7GJgl6OWbtQ63C%2Ftln92P6SZf5kIkRUbuCRsrpZCCx1bnkPgfBifl1EYpfgtrp0jL6ef%2FBNBDj8q06U7EKP2IKyHnU4d%2B1OVLt2cW%2F1kv6fIZ7N6V2zwSQVyueEFWA6y2BZcD8sEbK44Gi0EJ8VAJGcyxCSiPmM1dxuiPUfx%2FRm%2FXTKw9bRdHAsr3BtDf1HonrM7NzwW%2BBDPEDpaG4ZUFtN2OvdIfzSCQt7yUAXxgSPKwKAH9GaoGTApm3e35zkSxNfxrxzGM3%2FTwzxsSIIDE%2FEKmjT66rg%2FyxrzMBI4SCwmSEfTD87sRbWmNPInLJ4iOKsiZrRUlX9MOfrwL4GOqUBkeM8wDOUAdNMs%2BQDtowgYnKCUVGTb1av1YkO9qRBTLA4SQ34s%2Bb7CW19SsQ3KgN1nfaUsW5YswpgNcTO0jtmCTfMWeT6oiM7rmf7U5g6r3dpubOPOZRk%2FzbW2MEPDIXcF%2FbzlvLmqOPaRAlKciITugURiWk47jXtdaitNacIK6Y3Cgt9jE9iqKY2SeDi5Doloy4PkvrlctyGG4hJIcXgR8dLrbOi&X-Amz-Signature=8a5b1e869823fa0e2474bd413c5331d13dc4b2bad52ee045b2e412aac99598dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
