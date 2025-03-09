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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXHBPS5U%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQD2pmg69gaehi1E8kK5fPhzyo6nR1q9e0iT0qvFcXs45AIgFDzhmcc8qKmbS7uuxCBfbQu5nmLKKVhEv3Rbpcs%2B1eYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJ6BX0IeDuisKsBZ%2FircA0G%2Fot7A2HEhbtNGC28BQUtonfTFuh6IY4xAUAwSQ3cRKbT1pC4n%2BMmFfhqfWYD%2BiFm%2FpL5GhljdrgFB22MNFlfao%2FyIzI5byKmW7f%2BENVsQ%2BMPXlFsTXdTL%2FciX1%2FUAr0SImWb%2FNykxEaF97ulGsHKZx%2ByXssxefrOTUBLDNLVX8j3PS%2BcnFX3p0UWvqBWkgclwoq3BpaRl3OCWY74SzuLSAsHB24WS%2BOr%2F4PMYwmw%2BGX12r7p1W4vsNYgaEy%2Bki1TnyJ%2FMqGs%2FGMrRBG%2FxhFvqHJO2grSZqRt8R5cGHXhlLiFYd9xnnYgiSSpL5KzF0XCsphKXKHaPFEY0yBGAPBoGkO86HiOqTfpmn9Ld8ljEnTbGeJAvV3leAk%2FSn2NnzGjFUmQpgZWqGN8oKyhvYa98a0bQJlxQRacqqbzLmlzcVQpJBWl1%2BUojLrLa5rFkxq27tfiB1OQuoXnnOQg6%2FjYbaX%2FnUIWCpWTW3EcrIxzfvDUoN6Haznzw7Emrcll2Y66GYXz5zhXwNRtLb8aFDn2jDc0kPmMyjMYAl6aHQUaTP3ypkftV2x3FCfTwaupgs3p8TkbblwD8wHpTT2kaexM6yKveF4TsugMpsgacTOh8WRytfsSrjT54zsNdMLPrtL4GOqUB%2FfdF0OBAJ%2BAxvnvagoPPrrjZYcu0KkvgOmNgv0sfKKgAcXOpPTuKidKhkOnsvE4i4lzCT6LajAzruZh6ywXi1fv0Ft7LqUebiuGESxVv1qUS8FzSf3CpuVnp5Hyu4Jgqiq6MFWb8c5Sh8C9JdZiohR2PB5liOjS%2F53iRTxl3XdGcKK7AUvfLfnJxHhVnwUYrvNzReTHcetQKxtDhuYlCOm9LjIbs&X-Amz-Signature=464acebc06451089d42d04843ece713cca7a84acdd739bda626ddf98ccdb1ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635Q656Q7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFhnKeccdfQFCsqlgFdj6f6ywOkjBKamLNYXdCYDALSOAiA6dEVCEaaY2F0DflO9ok6VhPeDIWr7enhopnVH%2FeaVgyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM%2FDwBAyi1Q3GLloM6KtwD8Xry3S2Gd%2BPLqNQCC83yn77QGLzwu%2BTHGTgMpqrYzGzfWIWUPwwALMogiGwV121u355447XLrfv8Oq9oT9EaSPraN937k0e0vH%2BQw1y%2BlUiIU4Z1Pfhn3181AkAgNM0VRac%2FD2n05xVC67WOb2m1ZnoEJe8KMuVmHiwORhMYTgb4nkjyRzG0adzpXTcJ3p53MRamTHyzKJxEU9mNFNvVmJ%2BFbSGbxKHV7Y%2BUmm9B8IGmetPv95dbpGT4k0QURBxUc9BTDi7mQKsMqKVYMcI20BHSiFdoLH4LtOVCy4%2FTl9pyOJ%2B%2BKM3kgI0%2Fk1mFlZWlZfUpX31JW%2FyuFbNrQmXLbA1mHZhfeDH2Hs0gcHsL3HQSkeHIZGi0HLI8tM1Nktugon28fDgifvzfAR0JTUM%2Fludl1ClBNA%2FeF1AdarJkGv6DJPkM%2FwELOxQ8TAh%2FrbkWm83oEWkn9rQDkWN6kZOLk0XYWFrJTh3pGFIY3Y0MYzwf96MfNZzvcEvG1wtdWqEzbAnfo%2FQpzpCW9wrn%2Fke7ShSUK66flFZsTldLkVE4EmolDNFId%2BDtULZXXavprl4mkH%2Bef%2Ff2XfC%2Fb2DwNjDQxfMh3h76KqKy6eQfUBpb2gY4ep22aN37PMeOLM4wouu0vgY6pgFeR%2FGls%2Blc1vf%2BalfEXlt1cIfctN2AEBTZsNB5L%2FmbtmrLaMXxAmvw%2F09VX9QZqtJjvWS5Nl5Vqx5tOVPlv4sMb0vYNXwCvAqJbUrm4PvT81bJ5NoGjGXXk%2BwEhispEf2UAqAT94t1RzY%2BeN7SoyhQ4dfl%2BkVI301SM3dKBYwixEHfREKdp40KFT7hFRE6ce1zt7LnAprKZWxY3HRmPavtxnqTvRdU&X-Amz-Signature=d0a291dc26c046bacbb95966a1d00eb48b3a8d001f91fc58e6c85c44bee332eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
