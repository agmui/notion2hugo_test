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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DB6ONKR%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrBPmPP2x96P3X99YY9WLOPzdkTzdH2vlViiLm8tpVAQIgAy7a5qLrPfOq2674rRmZdbpqPDT4OsLxfs6flDCzqJkq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDK5o1vtzavhLSctwuircA8tOulwYwWxXhPqk2WN8RRYtZfDGdeW1w%2FP1V%2BplJVTc66TFA9GSZRUX1FUkvp4OTrkE80qessjrRaMsQmM5tMr%2Bh6v2fSzBGt%2FooDwaHJ0g8lFENdNPYWfbLjVvZUkx0hfX3GW6B8lHEFJXbYd8jPSCpPyBjmhMzXdymo45%2FcMo1jWox0O5MF2pbIKoyw09D%2Fu4fVkQbK94YoqahGam6Ap%2FVN%2BBxkqtUJXgCJ62Axem4nTbLWbPUnERr10hgDf8Y6BusfgqDuDBSScTzd%2BZag5dyOpD%2FMVEET3xh6xeT%2FjMfExXnafoyqPFy2BWjIJjlGk%2Fbp01kYCIOLzhAL5KaGjknJQ9y6kUHIagEDc%2FcLcWOdSnpBMIjG6FbtKAT0u3DS0%2BmWTHIR%2BC6mjo4hGlLY7xJqpqkawEnX4UzQjoOi04TJZGby15JtltKaOlN%2FVuHtABBEcNqr0fp0yOTGBOs2Q90ox6FisQmSYkQVEc7B6LjYmuvev9J%2FlbBHl2ITEaMu0us4jjBhxkLcrcjzOcM3KF8%2FN4lb9xOwMuYBQmuwpTzGVCup08bsIXJqOvNXsfsZpshfmo3czBWm8PnfMTkUCrMuIFH2w%2BwDscEdvUOKW63qJGcHCUyNsf%2FdYkMLKSxr8GOqUBe%2B7I%2F%2FT6GFrSVTyv83UTRM7ZOQMgH5zGQKyV0EPRqc9yReDN3OJn2ut1acnF0CUCKC2uzQuCZ%2FKSfa9ek7tbDFViv0avT%2BNoXQuUejnaScjBQ9JS4PC9UUPJnw97uBhemrsoxfV%2B%2F1b71EP82tpA4a39RHpa9q3BN5B5EWGvNJpGxa3u2Hsum4SxjcoejBZGEp0UmuvDuksnTGn00u5BBrW3w24b&X-Amz-Signature=e86ecd3d1355d8c7a107d58ad1a87fb3c9bdf2be517c3de5f29d6801a79d3c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQI7CNQY%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUOOyp2na%2FN6h%2FMJ555FhlA9xTcY3lqwrUmUpPMDlG5AiB5tmuTj9RRRbOoaw8dYX1WNFtrzJIDbuxvjcbkV2%2FAdCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMzrz34woaH5EuQ6ohKtwDQBzUA%2BJ1SNrDdoDyzMTBI045NRfez%2FpZaUbeSJzO5nryD3QW0W9vNL2TPa4Yqm2wCCnecYAbJY7sL3%2FPgTLW5z6nKTJqlaFslPpisSl%2BZyqdn4TChOFEAaynErEkKPTZM9F%2BGcXzOk8iKGm1xuQMbe9bSPaUvhudiXJA7f825ZNWSPv8QcDLbEzW%2FegDm%2BbPd3SuplwGegF5I4tGm2Lv7Jn3ObsCo%2FEqDHwpxNdZWgHt4SbjAQ9aHX1y3eglzjRFiKDLclixxH5UMsrAlCIw8CU1v9%2FOBfITSx%2BJxhnOwXh75gzZRX%2BTzbs6iSvO5ClgNlMsLDZwY9X9iXm38Cip2qv0UaT%2FR7YprAm2iyz2I1r%2FkPMoNHAPorohQkDmQIOP7R6cqk9hIV79nWW2dbFYqgTFypbAUdr2X1AX5RMzyV6WqzSVZm6lP3rp%2BwqgeALboV15TV9gpvZXZBwKKj2v2FEPgMZ38HI4G9Ay12ujqRQbcuD8%2FTLlBzESmhu0ytunQ1jmYgo5vHk7EDDYlKNlDrfazLy5rOOdGUceFQU%2FHU5yK%2BAq0dXujsdxi%2F50N6J0z1jG5aQCasOFWH5umLlTPhDS40xTAEr4GVeQSRF%2Fa%2FkiQaGqfzDup5pttaYw1ZLGvwY6pgHiIuAYk2GZsJwHnckL44j5x0AyCVj4W6C7ARCG6xXelhBf1DdqhnwTHK%2FgoKuZLGEOwAhZyj5Ul99lCJANsUdd%2BDsbVI9ORdk1sN4nOchoBTNLOb%2F6WLtOAIpwLz2Pbap%2FdAcryHWxDZxBag%2Bnng0SMp5ol9JGl1WZQMuP9ngo4%2FA7y0Xz%2FT8%2BUfHXnZSj1My8hmjAXNUAc9EHeueA8coxzpAWaTrz&X-Amz-Signature=e09587855381a205c10286e7bef6f64b2e013c2741db020c0306ceeb58e93d10&X-Amz-SignedHeaders=host&x-id=GetObject)

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
