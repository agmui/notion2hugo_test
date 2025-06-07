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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZI5JIFT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQJtDRT8tkXOqAo4D7Jtpdu%2BkCLB%2FrEGNPGgZQOgslDAiEAo%2BtFp%2FzmVZi7m2NeDKOu9wkDrzMr7Ej0Kj1ffMkcl3gq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI%2FuVYQjnM2ljKRJZircA4jE%2BmPrj%2BbUCrZQ5mCH%2BnKcJBUOni6T4HVXv3GRBWYVGlq6NsSSZysG7Xz1Siz8bfSHLzHw89ptMz9246LfDhb2PQtlxnxK0IVmwYwlGo5bCSGd7aYjzu9694oPsz8jomVMhbDEkogM%2BUpM5mg9E0DmWg9hPkILGUBC1KpWFIWez5sUWskfQrUkJHC6wpp0OtTxTj6CbBRO%2FKWAZoRnPqLe8zmoxntehwYugn%2F9lybDOhhr4B2ML%2FJs4EbNepiQfqtlcq9NJmSC11s2S3TPbSmoPeUGzbnKn0OtHKsD0%2BLnUhNfz%2FEIPND9vCCdzDYbpJ2SOeixCVS2ANv0zoQ3QZMBrZrrdLpf5Hd78DgGCtFNKzusg1B3C8PsY1P67JsMGM3NmlCTiyMFknWMod1wF39herK05jolZtqoumV44rmH7yFhkYOY%2FBRdYCvfv3IgQfb3n%2FP6CEGAWVFvIF6ZwKG49VnrS9BX8uA17b1o%2FbjXKG8smRCQgNEgYETiXElG%2B4%2BWqIqYqxd%2BJgGMgQ9odqFWo75nHX2LSVP8H%2F5a4YQV5UHa9yDOJOvrTSDrSNwArzJ1ech9HZlSXYc5iL%2FfqBVBp2HHJCM%2BFgT0RkJVxNnaGFZVeulfn83DtNTgMIPTksIGOqUBKKihZeV024AkB5YnMO8WFnpgMLLhAaray7oo5K%2BLdj9A13l7wfONF2wjAPX23PEnf2HDOOitWmQxiIenrkYPJCvwLaqIbQmpjxFgwFeLQ3AhYU8q3YXV%2F7FanJ2mwBs8pJPbCDa2tkkU4K0D2Y5z%2FvEfS1MI8R0E%2BIgOkkPkWm%2FzDldqo908jixq6NgOJMjhBYEuTLcNAUzGHxEIrgWS19a04dbe&X-Amz-Signature=5ac37617935bf85eccfa6cb77f68639642546d407bcdc1d2ef478035af31a00d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNR4VZ6%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1R2CoQZSHnTlYE%2Fi5twth3dWw7lVsQAbjy1vnpmkaTgIhAJfPG892uh055LHzEycJc9skox1a7CkkBkGrh7BgnKXMKv8DCH4QABoMNjM3NDIzMTgzODA1IgzAzur5Tx0kZpD2xnMq3AMVwy6BS3ISgCcayMcRFtnkh2B3aCJXRIyBI36VRcuYhfX7oEwhPOYx%2FXyVwZEQvfsOvuOpQXqMrAB8K0RBqE2Au%2Bj9%2BpwjcmZkl5Ee04iS%2F8XkoPYcvM4LPZBV3JFh%2BwskCh%2B0KbqjmvQ2JHFQje3cOnObh0t3MJHlLbxNYp35VggCZtxJyxNm54J3yIcs4aasns2Dq1%2BoKLNHIVKu5wdZd7haXPCw7alrXQa68i7vwgTqet7R%2FYk1PACzMtbtkzzR1zBu6GlVrFII7rQ4SkoFQX2Gnpq1Oo5x9A%2BjbsR2bYfNYlJ71biMnmDPLlzCJHb4%2BIa8LtXWSImZAsq9vvZKt3slUiGY2tBtpvdoWu%2BlJ5pJkUTpuPHlFfmqu7IF%2FPeq6VyrPT3T9OpTGpd0J%2F6lcM32MKOjoMocyBYaxSJRhfvUNbqLD9zZJSEqnd3FTt%2BggGL4aCML0m35BP%2FMnS%2Fq7f1bP7UkKBGSBaIAkJsyl6YF1aPkN%2FUD9D2zuryZvOPE%2BGX2z7koP6dklObC4QQubOhxutpbH%2FoAhHlH8RXSparIH3m69ELjkeCx89f4O8Y77cKkHYKDYD3oaACu%2Frb4Xnv2vfL%2Ff2UtshK4MJwbIza2mVRG5VqU1RRT6DDw0pLCBjqkAb9WSysbAPB7Y609lhtAvJYnLnW299IaZuA%2Beoc2Akg%2FILfvlcLKU%2FXhw4Oh3eItrpK842sSE7cXT%2B9gn0A119RIjQxPmqUlB3Yi6Ye15m%2BR4W33pG6o577CGrKekkhezswLVuMf%2FEkvXPIZU1X2GEYnQZ8i%2B3%2F%2FmrQEf7yJNYY3jKgU1FL2AKXYKORAFTn5mEM0X%2FjydhCEVrSFBxhgbwXvBejb&X-Amz-Signature=82b36f1b53f1199b00c272559788f5b702e501b4799f4b6978c00c4a9c5433df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
