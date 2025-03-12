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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667AE3APS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDlYlabxBpm9czvtNaymKA9R3jLLEzT0CmRrLqLWUVnwwIgGAjtHDxxYCvKpzvUA2dfiKs8Nb9Zh82%2F9UHIjQWhsZsqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTibZl2nAov0fkXqyrcA3HHBr3ZXs9XS1ByF5hCreqo%2B0XL2EUc9jlGfmAHYl%2BzA2XcsvC8O02cZJd4Ec9yLNIUrl4AXE9kisaCHtyPP4QXovEtXITomCrst7oppmC8TnLkSMjAQ7vpTVO317widp%2FCqTcqiiIj0Ffx3Qv1Ek0WNYC8Pf6ecPS0bBuS%2BmzKDYc090%2FUo5b%2F3wb6jJbHReFK%2BrLtaD4wxyYjIPvcbREZGIFQkfrCjRy4qNjweSjwjiuO50SVas65MsxxKsWvF1IAooUNFfcjD2hCZcp7VTLKDyoN%2BYfu%2FYECGpQliHwC%2BYgqg3IXycz71Fmzs8E5JkaJ7TWBN0JwZO7YLPPfghD%2F%2BrMH1F7EAfpL3d2BfHjOImg8l1z895qYGWjhgbLw8l33VVYbMJb6%2FhJrRxEZmK4Q7GZenRl3aC2HuuwT997%2FvZWr7%2FqFWIHrXnILAB%2BdNc6eZBm4QFNoECU%2FEGCtKrzUvEuQ9xggiz56JxF1ZufDnYaTsSgda7bZA7KSXjV2YPvSOCWRQoLuPBQGJZA76VECikNdxFngVFzSIHat%2B1DE%2B6GELCSV%2FNJhdKqfEsEL3cEobUCzo2Qju%2FMGxvJ5YKVx9zCaWqOqUXUtHpLqXSY08DBP2frDd%2Bv4CMdqMIWbxL4GOqUBGfjLp4%2F%2BH0KqCRwdCEgnOtpepOoayLEbLB1dDPCFwPsM1A4IDZCi2cxPxGAvN9sI%2FXG28kUPAmmj8RKcgt29oUWtMuVr93mT8IYZXG3hfzBGba3WISpwO%2B7oLm%2BA1UMkKGdHmEMNT4eVL2tmpFLUmMcKw4SiBlrDcaOEO5NHcrF5uUbqNmmLx%2Fk%2FIu2ymH7FfTHyIh6YRpSEpBRVKCbQnszD5aCA&X-Amz-Signature=2985ab9032d62701d017703f530c17027f4865e1f0ec09187bef16d1e311d74c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2EFDUGO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCx0SAwEwJnStGhUOYNr%2Fpq0DDviWRowHK5ir8IoCp2NwIgY9RmZC0RJji7Fi1g27bUumGe5adKBKEPdvydZPyIcxwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfOgoG3n7UPQwJRGCrcA2mDrTCXsplORg6VVv6w2yzDfZPgzdUDXR%2FkaKVRffv%2BBAi8zRNzq5KXb%2Be5msa7aeWcUSIDAjbFBZ36OQC5AUj0V%2Fn%2F57U8kpgzkVFTTzgK1mtRaF589nsDAg01PwxPQ1mQK7XX1KpNI8FBy58Yvli%2FGeeHy24dbdRBTlsWR1EvHjUMeUmivazT2kZPWbJoi1gMWgC5ZcsTe3EOkPxpX3e5bRRyn5c9486wful3%2BwT0kFAho10qgzhbcomvgUyznBx4Xz3UU5p60XiFWN7pxauTL%2F%2FlZtB%2FCe%2BtkwaaEs%2BJHTVJb0eFT%2BiKptMCdpSiASFY27AK8shlVY%2FfAv7uQWST%2FynxLvUa7fylmPXUoa688%2FyO4XcnR1wGeqx3vVshVt4XkMBd9mg4suSKi6Bt37xtxpqTaSDSo7n11NNAHdcowY4F%2F2RAu3uNcYYC%2BSl5jLnfs3SBzDDcFb01d9X3uO%2FlRrJdaPJs1SU0hG5HnKyk5qJj9zE89YnYM3XiN0kB1%2BjtmABhYELYLYwU72t0sKTnxpfJNd5QHXZQJMh8n4C0CZkom6oKf7mr8fLNOsoKhAz6buz6BVFqZIT7KG0OrpPSweu2EKRyxeLBZjU0j2MCsidQ90VFCXoVffqXMMKbxL4GOqUB9Bi%2BJ4KxHqpH2oRCp4J%2Ba3PXJXPiCirkCn%2FEDbedIrgA%2BDSrAfdGGjZQ2X9vEbpSlJdyG8tw48ZHCho%2BnyPrAFWrUcrtxDeJk%2B4231lcUZJys29Av5ZLdfd3mP3DKF1ZHm08XFOHezqmM74lCWbKNQWuSQLKHIXlHnbC%2BfLquqkgfFN%2B0Y%2Bc7bLu%2BUrExF%2FfFaAuMIv2u0kkAyEb18MGpZui4Y6g&X-Amz-Signature=5883ab8108c33cf7a1b5a27f70092402d1a0753dd01e532b67b8328a7f81db46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
