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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWLMZX3U%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAf8sjcWxNAUOkoTOQPXNBBHY8diA9gaTs%2BGAL48YHDjAiEA6kCEXMs7oNlGXkmy3NgPraUZd%2BPwOeXX4ri538sxbUsq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDEMbAbi5Dxb0U%2FBm1ircA%2FRiA5ULtIC4SNZJNPzcZBMuneeZSQ6QKCKBlJju%2BCFSJpNamBEAP1rHXfW%2FnxiD28DxTPKPngWd4V5CFzSztq2K28xGpN%2B5PcIKGjL4r7zSdPnTD3z%2FnDPPr1yEFLqXmrMrACrkklrxbt7taB8ypqUlor5DlovImyi%2FtzmH0zySoe504PZQfhbpcguYVdc71L4sbY0zlHvMOP7Xm0gNEdb31wEnREmKt6ezpB%2BxMtJiHmIf7l1WswxGVigqgGqK3vf9f1PIelEL3SrNHyJmDCLMYnGIuYe1mONmzzVKd7GXqVHQIvQPeU6Avayxf43ojGwIsQHoU7hhfrUZEYjFpJQDiDYaMeuOy3rZuFaTH9wQX0cs7mLX66mbkaAYM1x8mDaMO1XXqsAGlZWaQFjTEeaKDAV4MbRJivb2N72w%2Bqmi%2BMdgmFfRMnlke7cBLaW6yNbsa8%2FECLbHNErw1h7%2FYeQe8jRxt1dtief7iixT5B3bXpd0xyW%2Bit9BMtGSh3DLFzY7F6r%2Fhv519u7hpPUxiBENZvF15dUFzZPbJzwazHd6SFn9sWIEu7kNcqVtKAxjuo%2B495m6d4JiAbwyim5%2F6xgxoO9UtTn2mbM6K95WWHUQwhUF5P0sLKbK5OWmMKuRjcIGOqUBPVYXH5BdFG2W9NPtItWa6oABk0ZSSqb7lYgxDiOBqCwZKHwDxfQ3Ne%2FkoxyysggNeDEL2EahSR7QfCTJgB4lC0EOQqYuClUDJiI%2BYCPyjb1dLwJIgs1S8XwZ4iUJ9HLTv%2B0dH2BxFTmZOPdva5HpaSWw1KCWLth9zxGuDVTGQoJjL4CZLfw92xPHFttxzR7B8zTvDL7rqqdmTeptnPtAOwaf9BRS&X-Amz-Signature=c850cbfbef9b4348c48cb9331dda4723823b720ec0bb8c909672df333b1bf7ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMO3NJX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDh65xGDPD6h3Ra9D9Mkp1v4wPJZdgZGnS%2Flix03ugqIAiBTINQqmg5BgWilM%2F1fSv6fToyPAlyAtjJJ3MDVXcXSLyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMoZQ88r%2BXgHoqQg%2F8KtwDru4X3e%2F9Xbv0qjUYBLQmmXLAWMVpGQFTyVKs8TRQjSIlHaPcZldMgo2%2FiH%2BYdHm30fA2cThE3e%2FyKw0q4ugYf%2Fl%2FwRENXbd1vIlXKgPFLO9Jdn6vzRSDr8mX%2B2GkumTAqMYTzMlx6vPBsmZ3Gu0fGn2Uz8sNxXnkCpy4HY8XJsfGkYiWNsUUKBxpBARVxa2OHfOnGAHptWSXA4uLJ18GRy5xkiCI75v6mjitCdIJYwkiZzRJqq%2FY4vrsGFpL67P3bUvCR9IUANb0jT5SiBIxy5T%2B2wX44zWRtU1jPDOeFGTIzE4%2FsW96k4KKqCnoF%2FiLsRTUi0sFHdgdNkTiEWvakpNnowtR8X%2F2qiE7isJp%2B9idCAjRF%2FQ%2Fcx%2B%2BnYhhYkm5TAgYG8KdS4FBLUe7zwA01I%2Fp%2BDIPvCpAKRkKva9uuD1i4ANINginVdtn9pA33e7irQ%2BkfpT0s5FIGbQ0mCEHFoWOBYpR9EPpyicoGPH%2BNdE2jO0hXl0OXe%2BslbM82orJLDVnvDQZxkeUSWDOxGJ2bUypDvAg9Wj20oJK4bvMluIyyCSx38KIlRvpzDzYelTlS5yWPvOR63melEQyklgIBiHpfUQutzwNSi7ToagEmVgFHKocpV0fENdZNAMwyJGNwgY6pgG0v%2FdoLfN621UmZl1wIiT7l7g5tbho1v53iolXgbsuqv6Inxhn%2FI2ksE8yv3bf5gqvGGAi5dZqKtTlaxbimi9t13YkHTWpOqhuP6%2BGu4NdLhqVZplCFwfACt0iB3K0nPbKm2qCo1qTWQJOKLo8Q93vcnTEPYBIKS9lLv1%2Fu8HIr8sK9wxduoq0%2FL41Hfn9RA5mg9pN9vE2xeN7Gy2hNJzw9tSS2Qlt&X-Amz-Signature=01b936fdc6cb7956dd73cfba1ebd4ba61655ee94733b120f6819f3a40fbd4738&X-Amz-SignedHeaders=host&x-id=GetObject)

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
