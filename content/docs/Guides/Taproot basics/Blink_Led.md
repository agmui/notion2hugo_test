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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSUS3KKN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ9cd2KrT7DUfG45Bqw4%2Fv4Gmrc%2FaxRfSmU9NJ0YfIMAiEAy03n1OYcxPeZpiYm6hdPFDbfzgw2PjGx1h5AgnrdsbMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCzJ0uLgslo0qM258ircA9hhXU0yyYmRT6WhvlJFWfzXE%2FU3eW%2BAA9PmGwaVHmV6JNI6CFMUBYIiNDx08k4AyeV9q8zG3kAudVYgUvZQx9SpXT%2FVTnfHGiSjYY0SVE%2BWzWBvUYEzaSZ6DC6lvxEe2wabMR52MF7NPLRLIWWkFCiXEJPHsDi9DIozy68RA%2BsNShB6w5wB9kp%2BULe1ElrpXfmvukaxnbfsPRDuL409416haLy%2F%2BQXP662Iz2Wn0O%2B3RyuPCqxD9qUl2t2P3OykL4MdTYUqNi%2FzrB3Xv6rlUEPcOuPiPf9YInu26pojmGsS6H%2FgQUzGsGEJbFjozUlLgdtBEx4GI6N9kxod%2BqEzmmP67FzuHm4ONftRKtvQ5Y2GLXaEOV3r72BEzJ1kSXkcrGuL%2BNhHxIc2HtU7lUc3IuOsAAmXsScxvHRMO%2F4Du22siuOMvlgM1YHEuYuDYyWheq%2B4fw05VAQBV54vov7O0awXVziV%2BzC7QJIuhXfvvgjkPxyvjIVKAoV2On7sDxCytl%2F4AKRtAmZAC2zQtvr3W2DyEpPoJDPuASmW1aP0HtdRkUYTuwPTo8zvghFitShgjc5lWzUAROOkTzNjTyjzPp6g1UHq36HRit6xA4hLVbx3eZtmqERYhaGzCyRPMKy9vMAGOqUB3pGiz8t26ggbarzf48yH81Q2k5k6nFv3K%2BsqYuzUdaZdTDvugMH4QS2L9jmJ2eTRR0eNuBn%2BQQWicl%2FGg%2B%2BxUf%2BgQZrZruTgQmFOuV68NVULrE%2FpYvK6X1R6EuCesHHRfI3b%2FwLRR1HVCjL%2B7mNM3YRMFnXn3gs5LjOllYb43NNA2nvG34dnlalciAejTzqO6IpaM6KwCgygrMjE23s4AqbGBVly&X-Amz-Signature=9e1149022d00bd7f728ecfaafd04b14525f246568c69b9a553b189d24e75173f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USNYMUK%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNatKE1uSjS0mtPlk3ifEs%2F5y7p8NFqZqB93TyG%2FwTxAiBfT4ZsxAK1FkrFxkGGov%2Fk9uqewiFYdJLMHZYBI4xaJyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMW6HwQX6ivtborc0AKtwDj7klHzBrso8pwsycMRri8oKfNQERYUWXeu12%2FYtMOID5lf%2Fk5ClV%2BCgtCT5wW3SgRc3OYEkN4eBoyzylPWjvc0ymBIE7%2F0hKDlIcndXF5yzqkHpICYSSpi%2F1wC53xJBr35f6qWg%2FVIzX3E5xM3aLrSJXAehXHJJTUlz3QFthRsqKzhTUplR486xCs8hB84dhj8mA98sk27EOm35%2F46yIVB2Hk0lIheCg5gRnoyCywIunFYM0nU2djIqhE0J5BV7EBrVGVv4Mk2SFB7zvuX8vAleMCp%2B04W8D2RTogrbUS1yHnnzoShXyt7iqPN1ekf7n18uY6G18f6mCpnaXRKMcJLh3N9sxzD0AeE6kcNa%2Bv4ABFMCqhDGCefrmJgcwmDXsgLT1lDYBn8Qozww72RHS6GxvOU6k%2F0PB%2Fvg%2Blr%2FjqC03o3vUrPmUgliv0%2BSw7gAFGOHwGyikUBlcSRT0bsovqW9fYDJhfNBXP%2Bs8qPIH1nIoOJ63FR%2FIUwOBpiDN1Da%2BRcdGgl6px5fSXb%2B5t%2BaZXp0So3lPmFf%2BJKZXTiVAijHr81ele0t8opNGFx3Z4rduPyb0MdEqXm%2FhTc%2F%2FcY%2FSRQA7qDDTepq11VotsC28YkhytNjAtOYpCcwnSX0w5Ly8wAY6pgHgv85lQqnbKnXx1JNc3adITz6NV1TB%2FDohs10f6faXk22405pJ4u6rE0s%2FsSp4js%2B4HAdirPXCK2k%2BlXKhMoxaEfI6CLeV7VMOIE4vJMkeKL9mvC2IQHCTDXhkP%2BPhmpPjTYNCGSiR5U%2BRqEblL1WFDRU4Ul32IAi%2FJkfNVtcKlQCY9kp6cF5X%2BagH0S%2BomAFYO%2FBAUGO0A18wFtJuFBzR2DUh832u&X-Amz-Signature=5864682475a9bb212be8e1c37b01235cb133e4cf488a4a659ef05a887f8efa19&X-Amz-SignedHeaders=host&x-id=GetObject)

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
