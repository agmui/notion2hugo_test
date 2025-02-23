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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654S3MNRZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfg9AbzalakWd8FzoBsrLDYZoOD5ZR%2BAPDQwhFRtdqtQIgFC%2FD7lPfDM%2FHJqC%2Fg7x7q0yf9rzx%2FTwtOewMAoY4jUMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNYkMd9F9McnekWrzircA3SBWeATLU8wpnzvDtEN%2FP1997ULalkLU9qscv1jG60m%2FLeDdReHCCxCMld5wJnQUDCBoTUzqXLwcd194xdwD%2F09XGDURW%2Bi%2Ff0FfLnSJBLTsUXVM3gcwRd4XA9umm51SQGdv9GOS2MW%2FryupWl0AaINCPMGS2mh33SBrSekaaBNu4h32ERDOqJlSne0sWptSfPexwSIuNLS1cV4EAV%2BA5tAnlO1ym%2FEwBtpoDIxTPLwPitSrEIn2O45JdswEthoRtwiavXD%2FsbJRB5RB1rwx76zjh%2Bf34cf%2F%2BUUS4nmbb6btGTylT5N2qujIThSiNvOfQLFoGYVjAbCX2IkBgb21BfZO%2BZBbk5zyn00yhYH0lAVhm0PgE6j1yjvpd4zoRcEqxg43mhwTTHK14GJ7v3wIfcZsP%2FvTbEU252rjlIaMNSibVPWozc0QZnuBfehS%2BWmjcI%2BCuR6k6%2B69K9pVBTdSy6JYmCw36NJ4AtIKkghrPzCkB8zil7E44%2FLFRfq1%2BqZYfqGIyQG9PS2CNoPRMjfx8keX0%2BxBnN7F8xlLx%2F95WrCNQH4AZxAUGRHWGgjhxos151zARO59qwFtBNJWsC3Q2R5W39AIAXjcSpzfBd15e1MzKxDgRJ2mSSZWpC7MIWW7L0GOqUBqi4pJ7dcaxuIHVIINzInPiicF3FgvmdrW5bCLxWbY9hQV%2FHJtgRzLnoyilCQHtKdi3FQwuokSxVFl2KpBNSrLlhjcothGV73oB97YOWoxcP9QuvRZvXX8INyLY9c9hIdy%2BjXiqHlBLniQlM6DKZalTrYc8ejtSdglber6mR%2BUJ2C7ALUT3GXsLpL6CzgkT17TI0snN69%2F0iNlpW59UCovv0H5iah&X-Amz-Signature=276d4fb7ed00689072bbb1be5f8bf2dc4440d11a89bd1284f7b7d796f5e84c35&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL2KVFNW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDztKU3VAY5bIm60nly6bNzpnoqqdvK4wZIWOzv5gj0AIhAOnsMAigtF2VM1BzZe7TBILFnCAzoOCOjuASBrieRkpTKv8DCBMQABoMNjM3NDIzMTgzODA1Igy2gPvj0Yf87qGg3d0q3AODS4zc%2FV%2BgOIhOR5g1ELAwnYL6fUQ6ya%2FjfpI62r7OuKv5CDNL%2BaMz08fxNtGOQqcJQ8cSHIGn5DuiF681gsfQLznYCqIpfMGxhwCqnYyTU3zBZTzRciP917sTDiq0e7xbkfaMaPazTtOB%2FacsHy0YrVpDWqrJ0PXWhYJHQXmxFANHKRNSntCYfQ2YdYBgR0xyqEOclr6jvn5CF8enV5RRyqZYxQdqupnl3h6EgwJNcOuwhMUbRzGLT%2F9t34nMtxuktdsJjNA1rPibPVoc5NHnm7cWo8fZRb5a7Kam4JPDkVmwJ14fovD1cVZWOGupc2g368U40TJxT%2BnBi5V42Yy9sUUBSqxigtObwDAqQvyaY%2FuHMhh0rpAVjVBM6RPkk2ZQQ%2BbGgcAgGA5qRRCEF12xgFyrXOnmIEwlMvCIwJqfNSdjrgZ%2B1CRhcd5A0ogvBe560EcnfHhFa%2Fxzk9stqzMxwn2TGCS9hYVQ6ApPbs7j8NX39DOJYkkQbz8NN3EPQxBPQrduR5rlYphF7nAwxyC5rSE57GwxGAcbXgbo8z9j5XaAUhTtf8Zh%2FytfutO%2BYscarX86Vea0ln%2BBLuTG0Z0pKxrMing5IRnpCJ81sPoqWT6nb9E14nRn2R45JDCP7Ou9BjqkAbn7rKDqBu0FQtMH0JNIS6AMpxerDvVi0xnT1FCdlsfg9OKLwGLw8nlmQZgAWCgOqSVbQFrFEOYJmjQDdyc5GPy4Yimt2xlbtqsF1AwvhuPkdfFU7e02GJpE4ltEq%2FaK16SQhdub8Q2JXGPaLpz64W1OVdE%2F9XUe35%2BW%2Bqj0DbJQC2y2gz1vBvv%2FilrC6tqRgmxoibXqIBdp4RUQ2voiYYIpGDLr&X-Amz-Signature=e1e7bbf02dd01c55ef85c9807c8aaadaaf79de72c0cff77ed0043f1a1b1108a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
