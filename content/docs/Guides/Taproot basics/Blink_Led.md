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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y27LOTIC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIGXXxi4Mfiu4dXs20WsfsYAP0Jslr7kaAvnY877k4D1NAiBsMCKuZyshKLO8Op5rT%2F5oJOkZCDo0kDSa%2FpJegz30uir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMAwBjaDfW9hlUKjb7KtwDrv7rkNHeGIBPfEPhEtEACNWM4OlttaG6T2HxnLpmSI5yA4XQ00Wez7j4l%2BeKzzEkg8rsxMAhGXwWoboQgSnkgLzOwfOFMH3MI8j4%2FqzxldiDK3a5A6XB7fCimYJwMCedoRZZN4mh4kSq6RvMSB7xzpInQgkJXhDv3U6DTPPs7Tbvt%2BHhf76fUs43OQhVe17hmd72mrmVM3mW1qR%2BGAhDVSrCteFn2X%2BwoisT7nhh5YUVPs3ITka9rkJUBrXHlqM88w%2Bj45dypXNf0u6XwTAYXSvTJ3xknAMVJaEA1EVH1tC3rdpgSe9HAz8oW%2B9x8QM4N9TJ6AwxwsjuLUi2mqP8IbqHvLy2CKsIwFKi6pdVSk8Z%2BvcYyKF%2B0S5ppi6zMYdTSYQYiovWRatPvW8WGjc7jhmlGFiBHL5ZgJu8boocw5buntfMtN63XEg9S%2FwqKxNfbQytSnPTFGurB%2FvzgbacJBahfkv1mX2B5wL8MByjjTcSuFDCE4wxtzgu2J9%2B0SExCAMcpL4f1dewUJ%2FPJJSwQ6hUPvHsitVL7DIIHYY%2FSm2lbSBuiG1ZWWw1vdXoR%2FjuaUsGWygsxIdl1PIvTTrk%2Fii8XTxQ%2FJbGPiIDrdnik2PZrT1l2w9UKBPfmBIwz9nZwwY6pgGovMtBIqfO8%2B7MlJHxFUO41N3FDAbjkmY25losE4r1h%2Bb%2FUAtvghF%2FyQQshPaARdokQvMI2FFLAcdUZiKtGgZuqATKMzhQmVTp4%2Fba9V8QgvveOEeKyk3u71Fhh5F0lZAuc4Q9tNU9D9XEsYx17dBdxjN4RXUqR9HKZwSbvM9xIHjWCWCHUq5r5WwX%2B7%2F709QOIkyiYdjns%2BjsJE7CzBFSJqyYM6SA&X-Amz-Signature=fcb7a8b5a298ba49f08b529229934c635bf2c12ff0015bad0f81d3b2de8b9990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWSARO4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDwnbeEr5p8Rk%2Bcz6DJTWqBLfan8msh8TTSOhl%2BfhLN3QIhAKU5PxGJb1phDBOAMk3Jzk19O%2Fz79kwe%2FXBhYi%2F%2B02j3Kv8DCEgQABoMNjM3NDIzMTgzODA1IgxBYqXabir%2FBPUgI%2FEq3AMxH2fnboHOQgalvlDHnLM%2Fx66GwJpGpV3B%2FUUftmTkZ0sTy5K26s8KYLu8Lv%2BnXzzFMLyWhj07vLn1C5SDOVKTnt2Wd4sbgU72IovX%2BTgPoEHXcfuOWYkUqlw1t7%2BYzQcRByN0V7J1lIW50MJlDZbzbpXoQJ1Z313wbPvno62ClKrOPWA2N6iZxthukWOUlQZ0X6MBRy2ydx4fnjuHL2AG9UYNFo0%2BG%2BrdKbUqYBz19p54XrLs2GmiMcO2o9zz8xRGE%2FXK9YP4g1uHGwEk7b0HNl1L28TEs2Wb%2B7zShrj6%2BqGkynnlBWdhGAvemi4nua4Dg%2FO7tJP4il6juML1HVPxNH8skmbleimtdKKzbFwOc0JZlJNLbr2SR%2BnQxZKvjystmOL3ZNylBNJDYe0yDNaz%2BLM4%2FeoyDgQ9Fi0mdQEDPpzKeqGN3Bomre9FizdC%2BEGMtTaqD1bSPoVm3BthCwGRPfriWTFNawAhPszza%2BSafMxX%2BQRlhtefeKufBMbY3JY%2BVY8K6pqNTNBwi5gFBHbLGCKxKnFRAF7vPGyMhWbsBgxTG32STr1gEe0n5p3zhmeQ%2FVHurx%2BJNA0Dlw4urW%2FcnwqCOteetUhGrq%2FAH66OJcMOpfrRfqM3wQf%2FTjDX2dnDBjqkAewYJrrOf5be5ne83yK%2FAXqDKx169nEEcH9DWSZF8GRwwOSyCijFltYNpKu0Ded2IatihLGyEsXNpIT%2F0VB%2B%2FqJul5G2jSmN8oDFWMeakmMFIizh8yd2FOTnpnIEhmAU%2F94qH%2FqiTSF2hqNl3b3un9P5JR%2Byzb4lDTeMDrfsiH%2BbOJkgbw7pJvMuQ%2BYaOyMVzfp%2F2LfBu2mwn1SlcWDmkMQNxyVh&X-Amz-Signature=9be2e7f4cf3c2b258991e114a435cedafbbf6ae898f764f886529d70b59f4d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
