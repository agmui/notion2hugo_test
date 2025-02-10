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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGEUXKJR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOs%2F3KGE%2FUQLGeB2zSmzbjsyqIUCKxQSqcpV3Sg6duSgIhAIwHbePlgL6d5JDXqmPAcO2WB%2BMgYUStwFPSd7vZsCrMKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2%2BuCTeCtNgGAVVcgq3ANTTVtmKEqalDlHR%2FBKBwGwcHde8yWosimBiTQzBTujHaiNZwqyvHnMmG90jI3N7c3W7qr8NFhrbtllcYxnEe1wSVHk3A%2BBWF8kg2PSaqoviUIVTqSrTGE8rQsT7S%2BokA9tZYTx%2Bqk7BYLS%2FIpzbAn5NAlSE46MkGTOIrF%2BQ2HtzMnKSOL28pfZFU2zCzzN%2BeTkGeyYZ611a%2FAv%2FSZDXNEs1YG%2BIfzIZgJA02hcFJmpMD9J9WelOop%2BSCSYCLfuVe3qrOhNJUSLZ%2FQDDDkIyLJ9QTECSZKZvRBWWRAf2JhotO74eUenAj70rJynX%2B1kH%2FxJ6YxzIpfT3Dg319l7k0WtKUeFfLQwOlFqCnJcQmpZ%2FhvueXUovFD1SQr3FVS9OuEDTzVd0ksOBr42DaXtOxhQAbzy12eX%2Fe2YZcHUHNcpI9w9i%2FafHOiGmAKeGfsYVyOzUb%2FKQkz9WXZ0%2FtqZ%2B3pqCs4IXareHugx8GeSinbLpziZvGABdDs%2FdlH5Q4HkhMsZ9tHTD%2FO0Ys53B1udqvb97oFThQnaKQj5mnOCfRfxuqwrhVD0zWH7mUtFE9%2FeXw0s%2BD9eOTld4EwFOIHSHLBVP5ebYJJOvQO3Pn1adGBQ6riCT2Ebjo8fZ%2B042DDOg6i9BjqkAViSNrDvTjgGrahqwpx0DSaO1896i%2BXJPSlXZ8BRyEAr3rIBWkColhB4%2BcOCR3GQPd4iTC4L2kUbsLirXhfr1n8XeHkKu4xii88hYfE%2BSR5fZubqY6DEawwjmlfEw5UdPa0ca57Iu1ORF%2Bt1o5yvVrVYXAIQ4jhhSU3VLtmovoQiJi0QiQFRVvetRwuTMxZ9bt1Pxss2febR0YnfsuT3osMRT5oG&X-Amz-Signature=f4f7957c18c0202c21513654725d0cafa6e6c0ecdc1890194e8b4cc058d0ff6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBLGEAN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdny6RvJq4m9A4ngtRU7IryyLFMg%2BNSd1iEnKFRKRAeAiACVq9JvvwFz9i31NHn02de8bu6iKuGCTXSeNvLiWqjiSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ4SBmVqQLl9lbn9rKtwD0kmCK0K12kSGMf%2FmL%2BLYDZx6QDc%2Fx26WGEqdp7a373eGme1LF94k9FAii6ujoxOau0MBR6fLeP5I7lVQcJnc%2Fsuq70JTg3KT9R9IEG7GKFxsHR5CHuFuDkKb%2FUapNYqMVg%2FcSArokTOZqYLF1yl9pkpSwgYL2QDmT7CXvvZjSz7vHrJpkZJBysqLuhFwg%2BysUbwygTyLfPc70BVpANhanIzX0UvoiAu8ew%2BrDpjch%2Fx7lGwTsUN1%2BcXev0%2BdaML5%2FWPFuBcI9DCMD50HsbS7mQY85FGr7V6XFlP52exkFHXROB3CPsWe3W0%2BWSH3dyQV2c%2Bbz3ZaV4ci3VZH4WTi3xS03g6X603Fgl0%2B19VmY3VDiJNoNsnMIVBgCWsRrQg4qXVeZ6i7rQGMdOAJv4PfYaadKZvU0TnUOFdKEkSMPrBaxJL1Y1%2FloV%2F03mv0QnJEaCuCVCL%2B0a9E3MWp%2BIl2%2B%2B5EvF5yMTlFjFMaP3VotkjqPOrVLAJOxk3AM4bId2IUACTO3wP8ruF9up82eKU0GiJD7FWLS7zm6yEbRvC8jRHlNgW94Rcd2FT8V%2Fxv9C02LEMC6a3M60T8DcAYlzLWnZ23gFF%2FWFGDpqIaniudoHpivrzrMBWN%2BwsN1SEww4SovQY6pgGFwG1Ys3qJddHSJ4nxtYLJiacD8bRjLiIO%2Bu8MlW4NpXWcIg7FPBEEAvPpW7iKCt695IU8n9bEoCWsVjdGXN8LT2Hs4aX3DaVFufiPGE8kJS6HhVZj4%2FFHOT1wftd4EC08A5yBsEzhDiRXTIveu10oqhtVhcXWJlgoyTnuzqYXmzkquT0UPsSSEBy6EH6DWs6a%2BLsOHi9I3er0gOdA%2BdJWtJg5NLDP&X-Amz-Signature=c4d2bc43fd6db984c32e6c9c78cac87d7149a5f2a9c83e0d4cf572e5ee07e369&X-Amz-SignedHeaders=host&x-id=GetObject)

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
