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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDAXLRCW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC4C36I8%2BlvkXViBAahdWXsBGqnZZtjRbHWFtfTIA6J2QIhANGqfn%2Fzj5rjReFl%2FVJLNdut%2BgLWxseXNdvfsWEFXBCcKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU%2F9hiJJZ00CsvHKoq3AMhSZvUySXZXZIsDBtDSjoFa7I%2Bb%2B5MPdPYSNVlONG92vMuDK4WQS1YpZxTHq2fvAsKXqxun7QvkvvYFA4%2FieYc8B6BfHn7q%2FY9JL5%2Fv3qLf1wZ2W02Fv91DNa7TQ5de9lL%2BbMLv4KokE9E4MbKLFaffhSNd8CIKzAzM0pk51a9CXclzqvECXkc%2F9lj939G846WGqpGihqItAIfvWnqVQ5X%2FGwSCuq%2FAc6cLQX%2BKW8srjoU292sP06MzNCu8qfbm7inZ%2BdnSJ5jbpLtM6DvwqhPqe0GWbcfjQGxPIyyWD7z4PgLniSWVJo8ebFvxWd4pPYrLfrYFKw3M6iYpxN7FWHVVVw%2BA9CndJQNQBfmmOFy8Pbdihb8uHNXrBt4U6UMQb%2FxNLNIFogVgGlD2M1Jr2%2FQMVCalH8cVNH9bpsIwBrKE85rfk645H19ppWhBG8pssXqYD5hqgTNTEgI76277TYcK%2BQPM69V8BV4%2FBZz9pBUnoI1Yu5MgygnGCvCPewbZ3L7B2aqCX3R1c0iHhyi1iQMFnBjd7AzVxNlrySWe0ZI018fiyoKZTpPO7jN%2BIoBfzp7eoa13Xy0WuVUe9mGOhL8Dn%2FNzpK5M6Scw9KHd2ARAS6HmDDcyApgxcbLuDCe29fEBjqkAaxMFeBeQzk9P%2BqqyV7XU%2FJ8M9AwFDhWumSiDdlTsL6WNkxAhuDW5ItkgJzTX8Bh7xzoejmEX6nKkfltD6bdS0m1yHcG%2BypZVyHaUPwnInlX6qZiyRo%2BoUb5UrQynwUxTxGpALC2RPOHvtYtfT7nTfMti%2BZ4NWFT%2FyF4eildoucTL8Xn0X5hawvgpL92LBdT8Wtjxfydfe5nCRV18aHO9Shiuttq&X-Amz-Signature=cb222fd96402eff4761e5d68fbd671a8a14a7bc06a1ddfc3ab44dc16afe3d48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4KD45JX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIEGj3ufDUdwCr74JBRbVAt0qQRadweQtAtinR%2FbgBarXAiAEhqsY%2FYlhgYiqaSA1YRlLnt4WmzRwhEpFrbEKes%2Fk1yqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9EvDWT2p%2B5dhls%2F%2BKtwDTrMqzI7p%2FazmQblgUj3D9ql0m2ng%2FTKvkMDHHRl6LL4mQ3WleDMOfBgAtcwF7sen7WVBnDo3zTOQP5lavAua%2FKDCyieh%2BFezWBK3%2BwpABXvcv8m0HVaAR0pt1uBU3gt365SOeWpsG5bNaPXWAfFKknpbQ93XPnUscsvwS5N6Fr%2FJYg%2F4r3wd9ngvgSmlFi2hADh39j58IXn0LDhAjc46AOVSaw4O6l3xC1KUj95ew0iPjPe%2B3huVuUKhYym0B2WsZvgf%2FYYvee2cvNIn%2BjNdt5r2K0dJVM%2BfveRp%2B83HnKBF0XapZqay15ozgapc41l1oGGVsKYEYb2hmjppBtKGB%2BUN%2FEmO1MZNrvfbiEmGkd9zFzm800S5kNQ8WlzHikvea2rWu%2FR7ykSzJ2OZMmfpB7Wsy8QN7HlbHqna9RzvXW9BVksRahlXymbzmS5H%2FsLMO%2FGMdaaWbAamvAmu%2Fb9RxhcC%2FNDX3Qc5EVUIFTeUP2y%2B1VuIDD5abOsHryc5xLneutHARTU3MU3zBomzBS5luVE1ypsm16%2Byer6TDEDESDFrSD73hT4zCH2eeeGmmokkxiUpNHasjxhbfd3DoBY6aLul0b5pb3%2BlptqBBOSOOSuojJfY9IKcHr1d7XMw5trXxAY6pgG7TeEvCPAFvrmRacnXVwTpdlITHHBrC15l6wvFFpOodKLdZ5Z9hU04yEdw26xkvgd6hFBX4vMz1y4PXY%2FkMF60rCdMxvfXLIzuxCWT5q8rFNF20YK3Aqq0vd1aF7YFzLsG3uE40b1DZZM62yl7dOwB5bayBs4fnzNSrjpqMQ5RvNPa9chZ1fpwkA4bWJB498KP%2FSimgTyXnufNpGQ9A7y3x2yZtlO5&X-Amz-Signature=826929256a3593b25505053fe843e52a2ac1a4d8c920f2e531e49514e9ac6efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
