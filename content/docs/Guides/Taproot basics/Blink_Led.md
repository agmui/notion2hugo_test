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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOMALMY2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDPhQefMOM6hpis5AQCwCMcozEYakwLh5fey434dpdzqwIhAOVrxFAMHHBOYEm085EJ47Xbm%2BVmGq58pFb0FjdrIL1WKv8DCC0QABoMNjM3NDIzMTgzODA1Igz%2FNOdQZHRDv7AlC8Mq3ANB7biUNWF5icAQIEymb4Eo71qqYsGtwvQqvwPIcH8E9f2sD8yUMctZTfEm4XBIaZkGi9QB2rumkzeW%2BIFAhs9XOjKhXq4bOFuxXh8VKw15vHpXpEPLdjG3XSgv3W%2FsUUW7dCWvKdUnJAIB9y4d5lQgi4VRB5X7YK%2Bd%2FRHHWeXGHu5Ew0ZUmKBc1GqM42AjWnFsox%2Faxbn%2F7UvbEIFQjqeyARFFT8JYACmxZQtfZ48M5IlrLKKvbczj43Aue8qlgOVOgtA6vuDogX8Zd3Ys9IRvAC170W3WkPZcPgPK1N9Rsl3D%2Br3cUXIe%2BQ7hjvU8ZIvXD77%2FqZQNsDqMgsLPrIFMh%2Fs8vZZJpXygbDwaPev36bE4y364oDrRfcb%2FBjVWFTnxLT9i6tVoWdgj2EdjRbL9B%2BLqHGWrMn2Ow5Do9c%2FDEG5hYVopVpDDMo5YL3GF6AHAkjeso7DkTIVtnE105atNWA%2Fbc3YZy%2FKolsw6Fhbnw7OkpBfbtrwqSxWkMfF%2FcwQdEcRF93s0Kag5ucISr%2ByS%2BzOhAdnZy%2BJiQVh7AkLKlRi96Aqxh9U783cpkmBbV163VoT34oe2Uel%2FkRv77o6Sx21bjyYPDOsO727c11CShaD2AlR6FC3ST48%2BODCbwbXCBjqkAfK1Wqc3pi36Yfqi8NmWB811uMhvl%2FxPwyjKaMerglBEKOCI5FUUQpkVcAIKaHbZ286D9Jdjy%2FAHdboU9OX2cLgAnwNe0vHrcB%2BtK6ek8%2BZFc3yvcW0nOf7TBLTDSfAW%2BjVSjCNGYIBV%2BxF84OkCHXf2CgcA6wtXg%2BApNtx1smZRfHuRn70bYiGldHkxZ5tGHFCVlgCQ7TJIuQ2MPAjlgNRLmdWn&X-Amz-Signature=2eeb0decb214600ef65cfc375d593a16a8c7c66ef9c6e37c8bf6da2bdeceed24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMX27AWD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIH%2FbjzC4zBvBGGTkCRRSy%2BRq%2FoyelqF%2BlWOSsWg5We31AiEA%2BiSwcrWZKKerx1ABRgix7BddLmKPwYwRCv%2B7Vmpbhn8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC4QwO0wSo3pPB3gcircA8EAGDrX5ob3UBE52NTH3oVjQnTltujB1kH4ScLDZFazmfWQ1zBTAnZHSfCUj%2BeGQLGilBaQ56hFBC40Al0gR0JO7OQwOc3v4a10kDsIhbK1mVOg0wiS93Tjpdt8TgW9kDKg59FB%2BYqWIJf05DR9aRiwmR1ux9EBvSRGfcQHDUOaR5Rb2IvjJEOwqZUGdMMo5s5Ce1d35Debrvm38dVWsmXOmdjNkgmHHWfWZhUwJSPe9L1HYbQVyi%2BBYOSGBzGoT96KjCU7jwOZvOPBk%2BCT2vXQQpWFYyFvl5ymJcN4hLOb%2BLTTi8fdQdC7TITWeTE9J6zsEySiePDn2pAPE0si7OUOm%2F5lt%2FFDg6DWbQXJKte9I49FVompQYq7CvcgeUTy87Bg0Q0b5Qm1GK9PnG7j3l4UL0ihzFJoZNll%2BAUyKzAe%2BJIMX74cVUfoSa2hVFYpeg%2Fmz29u9OAyjAz1EUHuFLzQUYPrYcEgVL8jZlBZSUGub1Oz4%2B3u9zuJrUykMhv6uo1Jzpo6iJA6p1mVodfTN902l6A%2FbwBHAutI%2FalVJwMwvvpBQkqjPtelqK8PMrBgHMnVO708WQYBAf%2Be0RWVCE2deLEmSMICINwVBEnYxQ69ZV8VPhCi3qgS7ExtMOLBtcIGOqUB5TKntZKhK2HIXXIsz5zCql%2Bh8b4jZMBHq56BLK%2BURZNSuiK9DSiZHogKqtYsLVgSBgI1UISSbLotAfQ168YbFuyF%2BXp1OQXBFEQBhDbTvM%2BuKeJSaEoPliJGV50g0yAOXjLAEjrmIZSPC9Hw7eIb80O7AEdJkjciBpWWdzXqj6qWODs%2Bb68e8K2vUnhjnMIapzJfLaFCsPnrWoKovtHmwhJOhOFM&X-Amz-Signature=c698004837a8a6f785b7f1bd87eb405745ba26f9974129bd8eb60c234a091eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
