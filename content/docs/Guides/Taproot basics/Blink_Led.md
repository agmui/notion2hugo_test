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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSUCTIG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD3QmGF4qJj9G067dRD7FGBjbuhQd%2Fw64PUdqZqFbS96AIgAKZF9Dr8BQSCLbLfdZm3GeNic0Re5Qu4hYWnduOJs88qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmbgQcLDOaQrO%2F0bCrcA84GE1rIFAuZyE%2BJo9obUX%2FLtt4VXgfGpMsaOSa7aOTpdCTulNndsjHWIoQYMOYCXj0TDrcrdaOBAin7sx232TRq2Q8dreRES8A3OCUjYBLsIUKtzTXPjtLNN%2F2TiMvV5WCMpFeMHG7em59FZsEriWbnUn6v9luofAHA7U6Ma9dHgjdkMN6zNeQQFPv6TnKxAvMRslyq4hm2GQxUoR9E6%2BKKdxe%2FOQoQl2arSkkmw%2FmSHFVFC583lHEqs4hZmbwqrmEgwgjhH2mhtJGqzlZ0O9XFqxAqzBsNIcbnZ%2B9wKU%2Fq31ayBu%2BeYWEwvf22EG9eVnJwZX4jTI9Etlyegp8Y%2Fy87o9q4Q3sM4DNfOzMTwLoY9hQSFPiSiaRIKBiRbzTTu8t0wMdfa4KZEVwFLIX1EuqsrKjO6labA95bA17cMIB%2FqBYsSUdtfM1T8fMscsJenFRIqx9X1pkyCL0j3sX6emVa6z5mZ%2BPJen%2FIWTMCD8zjSipkn6Cd9G4CEUcZXgXM7bEHOkXFx0gGa%2Fx8%2FUj2hAuGIcXwGBpoOScGyRopU3mTajtpeqBio8Em66%2BXBqrYD1jhml1z6h39GPOBxPuHVniAQLmXDAD6wcmDtbi1y5D2tNOadX2fL92BLQXhMLGvqL8GOqUBl682ZDyZryR4Z6I1AhA%2FIYNqyfFM1ZIEdoyITVkbs0asReHC6O4LVeggv%2F7l2CGr6T123FtjT3AhhDzhQ4JaQtlUPgIK57A%2FehP1ZgldcYiAGYwruN1hzbhOMyBGfbgn%2BDK2xf0l48GGlt4qdG9oBK9L1VRauWzoOsqAMODmR15Da8faFMPkb%2Bo4Gczh%2BSbPql7Hf4rHh3EIVpIV33eaArCAXhrt&X-Amz-Signature=b048c4c5bb0a55034d5316cbaf3111be4fe18116ac9235f60da48c5606d7d8e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSDWZPW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFFxVtaRngKZIV%2Fgjausa2%2BhE0oTXX0dz%2BYag4Ow9yuEAiEAyVSu0%2B3DJFdDQLXwF0ah4au526NmUM2NrfysR2qn9jEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgwUl2VeCy88bA1jircA9%2Bn4yn028wEldpZCXndNRpAXOG7bt0VSId4uiAElMo2MiF6NhphlgeL1q8Senza43IMLbOPbMgC0pUKBhU%2FE20gUXVinHZmKMZbShKi66RNV%2BjcRpUCkFFvwWWEXHvwkVKzezu%2FjTTUHdWlhLXdX7RPE54nGI%2BOP11ccwu1%2B52vHJHdtV%2BfjnO7U%2F3cYBaZQCE8MFIcmRirS9yjZQAI%2Bkh53aJsuyr5BjOyAvBNvRu3Qwr90Ipf1HL4A0QPwFeEQ6Gz1LL5eLIk1UhtvHp23arIU1QriDOrpvIk1XoM7Roo0%2FOQmYx7GBDk70VorEFCAAHJoxXuCe%2BczHJKVZx%2FRhTQXq9W8ecY3g3EWZOe2gDo6FiCVudTPa6XWB7rBMNm0qgxECsd%2F7M1Sf3AT2FfRupYEu%2FadtTPt7bi7Evye4B0INSNM8g166Bn8T2nUUX5yo0zOkJXRL8Xj0sB0UO2WEOQa8cjHUz3S2bX%2Bqgb4X%2BHx65qW5XPhcwAECV2WqtbuDNSkWz1j8O9r2W1diI3jO0IOWLOa%2BIjazkz7Y4xDIhb%2BylZNLnFUBMADaQpguORx%2BD7HxQzzLEq5ojTacMtQZ%2BPpma1YXtSlXdA7Jk%2B4JgCnxBQVs47Kb7FbFQSMOSuqL8GOqUBnk0Qwnf3LMt3jZX7OxWd6qh5Kd1dcqyF1YZ1MINjPl0trSerOU9A%2F7oVkJNcsSDN3h%2F80TqsFJJtYn4pu7MHAWG0COtjt0Q9L5o%2BnzDZLynsGvtH4tZXa2RYz48t%2Fp3jixpBndz5mwb3bEKKYJnGrNitL4myKE0pQvqibMOlO%2FO%2Fc%2FKc2IG24Tt50QIXsyHmSy0Qw5spg%2ByLilZixlfKYpO5itvX&X-Amz-Signature=3b138f049e0b9e028953a90ab2cfd3ef85da37a1aabf8373474cb4da7fb2f55f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
