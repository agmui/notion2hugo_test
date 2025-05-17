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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLKH3EE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7wdaAPCbhWsrepsZYlXQcT%2BmhbCKGxrj0Oeuw6p1evgIhALqfrnnXqKKGMM7vSio7WDOxXluG96AImy2UCJBOK%2FNEKv8DCFgQABoMNjM3NDIzMTgzODA1IgyG4QW5cD2fFHo46XEq3ANzaF3x44B0pFYTI6BCzmUpQ1P7zV%2F%2BImsKWFSedczFogG3nR7HIB2j2v3045f6ofJIGxF%2F%2FSoFjezoJgeZR87BSJwl0gWfDyGshaUd1tur8u4DGlIJ5Tqy5cxhx4v13BbSYZv7xJHN20eLnDCd2YZ3sg6lIZP8CDeRJ5NM4ktgySjI3flKy09JeFFN%2Byqvgvsd48I9ZNmrUy9zzqbWIXY24Okw7FuiAPsHMCgCeNkrx3q7B%2F4tTLK8id0ZdvEhMIglRfzV3eGeu%2Bm8kBxZ45YpkDLfUMIkvWqYsB%2F35rPDzsnEpstuZsxOXeffbuOjD%2BKpfDSjW9mVc071r86R9G0rRBT%2BYslJ2yMK5yVYwERcrgoLWBUO%2BDOSunDypYoCp4xpBuhQ%2FA8dc%2F6axKa6mfFlsMRW%2FVxNf%2BzwEeBiTlaXYAqdJPx8uyNALm5BCDzbroNzEe4zaAlV3y3oM04HTI5D%2BL1m0f52fRlnljk6QnErnJzCDuD0dyinqYK0sBY0ApwONWwA4wRsv5knl03ihxQlIJNp4QzZqIgYNOfTUvEWHQ60UYLjKNaJ%2BenM35Z8MquSzY3cXlzSzZcLLBe%2BkDlmWXGNMSvW%2Fk%2B1XS6B03sEyvg3p9zyOT1xIyz5LzDg4KDBBjqkAWOLjVbiBz13PCZVMZpXzu5WujLMHghhwhjE6t76Gg%2Bc%2Bs9Cuak%2F4wtAM5PgIXGFeWV4aynYihujPfqMa3zNsB5%2BYXoy60IeJ35zR1gpJ%2FrPm7aSBu5XV3Ie3i%2BtlEoGVwgyzS3tRKyMdnUjcTMafBTpFM%2FMKisOwVY2Wj7cGNcx8DrWvv4UaDTJ8DqjH0YVb4ifXEs5jAPWFa1lirqTZkGtoAFc&X-Amz-Signature=05b8f23664c7a0a2c35ccbe1d364ea3824815ccce2a309c8494840770d4dc811&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH65B37S%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSPdVROKvW6u7ZkTkrKXn0qaPmIqY7zrLjnmTthDz4%2FwIgcZM%2FUpdJ9o9QgcAh%2FLV8jhFLvKW2dB2v41RtI75kKdAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNcLbLnPBIypfZlPECrcA5Vg9Nsi4n0Hfdny3fYP1m1%2FO%2BN7YsfQpUsaUswVRv7FH60K0QsoDPaCmlw5zVhqSrYL7Ntu5y92hXx0R%2FBWQpOhbVDzoSiXByKb26%2BZMxgU21kEC088DeuBDZysD%2FRDKmmQqGxn25MbU1%2Fqeob7qpXo9pwWA1OmG51o2OGihf36HGDzkMzLfwBZE7LC3IidRt1sF8HmZ%2Fru55JsAVpz0Y1SzPNRzJAkkx%2ByltRoASR2L%2FGxHMaOcBMflyFD5Svx3G7F18uZykZEgMRqDiYK2bneKgLElpUhB%2BIjTyejR8P39OKvvalg6dZxAwZhvdgqKgrMvTdM%2F5alderdrBeMGzf29llYgHxTg9qdOS%2FTXah0TeI0qNpyP9554DajHLb8afifG%2FqAS5gPEjg7qMwTjkMJmhLqgqT%2FTm0heebkp1HrRJC3W0Eerb2fP8COdsY8w0aPJT6k6%2Bhd9mDPb%2Fg%2By%2FGYfmahfRr4qnxqKPIXwSLUhaaunVyUoICraxfPZjhf4DjFqPjP9%2BMC4xUN0PF6OGmGb3u28UafqWIXybz8U5jtW%2Bkqaxbx04f2%2B0%2BpeBGCFXMZ5O8%2FjELjgfPVJsUGT%2BhJKO%2FeI3%2FKt%2FxFHaqtGLtrnyVzT9jhhmPuNWujMOHgoMEGOqUB%2BGekU634WHsNddw%2FPkxFAo04QWM006Jiq7bB8VQDCI5AdOy1X1uyg%2BuQ%2Bjy65V3O53M6SS1wuAJrII%2B3ivE2nRLqvpVp%2BDctCoeg4OxDi7kb%2F%2FKXAmcHSVj2QUKn92gd0JX4v87Be3hSFhHt4yhpMXo0HG1dH9jQMrCEXIoUZN3q95nYZMQOfE13WemukiRpZQPOzQII6Kttmp29LAm4GOWU3UYv&X-Amz-Signature=7c0d657390beab781ec686fb0a107345fa08b4889236b0536ae6a74212b20088&X-Amz-SignedHeaders=host&x-id=GetObject)

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
