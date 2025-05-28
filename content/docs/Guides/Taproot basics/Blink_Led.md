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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDQA2KXS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvm6vwax8epSy92cUsA%2BsTr4Lq3n7IUdgXrFvnckruEAiAtXARvyKErH0l7BELgZYqLlfsWj5ZF8kAW2VeCyhiPHSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM2CLXhEdMZETyHDdfKtwDJBv7tW%2BnJWv%2BTkzXe%2BL1hs%2BjI%2F64DUkKDSRwoHPcxeJ0j3nElMO7WQAar98HpXg%2BaghPtavLdRyi1J9SvwxcwSe6NL7Xt4ru619f2sJjDiOoUx4OfJ7PSTL%2FGyzTz7%2BNj2fyrfbLf0i2RTOizSrOzAv29zkSys%2BJ5H9W6f5tleK2JoFkJABzhiBPFddVjmEKF4ncfPGcC1hH6BevWi%2B9m6sUwrEsPBHctCN7v%2FpI9TebzmUMnsUG61Rag53fnShn2%2FZ90DkVs1M9Zr0qN%2Foatpt0fqgeCN9qs2XoP2FgeYvVcKbqkilCPxQaVHwlw39eljcXZP7K2GliYCqlsjDUYMlAdaW64PATacMQHGdsZHdrFz1AdjAgbniaI0t8Xq7tnDsB9wPCyfrN4iXZUVZP7P5h9PgRaRf5FCfRUPMdf%2Frgs3LWNrDZiFjeCF7dyOIVp2ZLL6D9gVzZucVQq%2BQKz%2F1ntAm7EvWusTShT1f1iJ3Qs4tSEC2qNYjAEgI9Bbp7q%2BqYjgtgydrc6tDk4UCHVN58oGR5mJJDRYJSrq%2FofYVbXyzLUin9FFgFA1R7TAakqSgJv7hO2tu5tdiAR7r9hrFgF5GgypZFEYYOzrC27eW%2B2WTs9%2BEYa44VlCEw4pfawQY6pgHQWLMgeAgsAWLH40oMoIIL%2BFDwGdi25noHz6E9gtyMmlSgGQDAcU6eNhP%2BJOzNfiHUzIAlyZRVBZQEC0Yvzn76CATToKJ9XHq1M2ZO4GMIabxnpTHO04eQyabrWNsZ1jfcL1DubsA4HtH2L8nGBKEDdioRpmTJSUqBbXxwtmgxWZ71rO7vjor0K9f4L9%2BdHKewHgiLsTL0ojeOvuPMNstIPp270OcS&X-Amz-Signature=2841104a8e42bcb523a1bc83d0bd6fda7030deb6311338bb258c163687e3c9e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IXHEWMW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdEi8B6e4umsIlo%2FR8wtg4u%2ByDvj1%2B5zXrmu1df1mWMAIgGD0sNTdNvZkGoczFj4co9t70bRft%2BVAjmz%2FOuI6ooU0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHGc96dzH6MxtnBp7CrcA2mjlnxu9y5fNJxXAary51NzvSv9jvAa8G20UsOZvaIMW8IT%2B%2FG%2FIjbNhZH2XV7ulMGVDadq8pkGIKn6PMx9bcUQy68vfHFgjB8tlb3fa0W%2BKZYIXp6XC3Q859l4xZkKsON3Mvf8FIk%2BCCR92ecRBSlYiVIgaKHILcOLHLWbM4ebe5SFyMVqGrS3JI8oV%2BVfiTjrYw%2Fcv9NWPkQwCevSy6HwUXVrjDNYF8yXXRtIue5ae5pZrAvxlOXJDmoAMDTVbCQNTEv6MkrmMS5AN3SQ8jm7zNRBF6MOWkcEPYK6679XsA9NgivXLLGDsQmK6EFlDGDEzgnVgTgZM3fgpOOTVzs7WE%2BxYYyNGUM59sJNWkhWYEGcemr4YbDhD%2B%2Bm8RT5sNmv4RQhafgEPykrCGpPv8%2B0pDgdAd9IFvYVmPSgprlGAbr9ebLJBgcrKnstoFoCigvCuJax%2Bn7PznZROhxBCjyTOsHuKEF%2B6gnfcpTpkdZOdhifYgJdA4C3zMMNTnMVrieFW57bWXMgJVHUfREO7u3KS8yTtkSBfjKKN%2BZcKKoMaWhtMUaTl%2BvWCd%2BJFZh%2B5CIhibNgkiDCkmrTM8gnMRYbWSk820DxEFrGp1%2Fqt%2FY7ong6chmqruZt1np2MNOX2sEGOqUBwH8AkvnethhrTAmyBF%2FWoZCivrsJ0BhhrjWurPyVNtDBvIE9SPkLEzibwPPvll6l7wc4h3vJMGBLKtGz%2FcIK8g3kEb01ASC6XQkx0fwVh%2Fn6XaKBLR1ha%2FcNcK0hxAMdCQgrPwFTn6uS8coa2b9r1ZxdnyjN2LOKD%2B7e1Wl1py2n7N7%2FQk33VMoUkWGpPZ%2F1rHcT00Di64bo9AzELu9%2FtW43iE1%2B&X-Amz-Signature=21096d3e9c008b46e7974553f2113c02126a2fffad6c8cfb2b9eea2d68e065da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
