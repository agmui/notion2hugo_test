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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPMEAI4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCID1dzy3xzEo48IDg1Cnd%2FtXaa7AGe3kBbuStUOeXfgXzAiEA8HAOvhg8hIVqiOkfR%2FMsNNyQFMvdd%2BNDJ1TWr8R0WMoqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6qrU5NXGtbP1XJ1SrcA7v4TUEFOuyeNUMQL0IuOIG7JlTVkCgO2VOxUZztKoxXwjJUfFIQgEKcdYspz07fsc2ZSZQVgw3eo0i745xCjEui4BHIdSbxNvmelldKiZh7NJNapK01R2RsP2UYNGM6GsUwfCqh83HTyQVepCLR9nj%2BbxdKMTB3SGCzxejwhf7x5oLhMlLgChFXDuYu8HEjzzYBt%2FH2TF0bFqeD1P7jZOAyMj6Vt9lYmzO2iE9T4MacEyOWbjJoy0HulJbpGSEBWybVux4Jli22EZQZSS%2BgTjeLC5AFwG%2FVdp5LYLiEOFyvHvMiVwEY9%2FBMfebYE%2F3KSKQEgKIp40edW3yRDUItTsYSHJdp3UDpCmNYf1Pi22tgEcUbN7WvWWOZm1PkYG2S1a6AJacttpZrGauFm5vjJ6QAYuC18oph33obX2JazTazMUwJVZOE1lJbaYOX%2FA3CYls2QbxJA%2BMR%2Fz2z7To6bc23Fzfa%2FFl64vtl2F8t%2BVLuNygCkn%2FlzLSVsKDyK3XNAStV4UymXlTz790R2ZmyAyGpe9yJLaPqZGC8cIHGjhSHRfPeL5I8BfCt5%2BZm2w1333Jjo%2Fc%2FSsOtVlol1K2zovtYKnHNnTq6pVGU5BTh6S5MpDm3Xco%2BwI6nl25kMKWOwsEGOqUBSUQQIpbkq0BApUlojvEq5uGn9h7KeElNfDH3ldQ4mcTD2cq%2B%2FoLfz8xchpeiy%2BvUnu2dOUBXnqgsjgSseIjtm0sTp8o4b46X3gNhVhjNpRnUbiNKRoLgjosXliPIHtacqrofrkonCmSn2wUayVpc0vN2K0uaRpWy1pbwmFXRSjSDPYFa1dRf6wgWPduUIwd8pEHp0JQmAa8XKt7qtKM8ity%2FVLKt&X-Amz-Signature=f3616aeb62c242706d40ee85b3a23073e2657bffcfc6a3625ab0c59c6b57d331&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CQUOU5T%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIByaFTYzFW%2Btd11oox877InWcl5Y5Vf30H2q075UNCszAiEA%2BCHvU6mZs9stSkhRpzN6U68k01vVmkEFYFZIV1%2FbGJcqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk3xGEYJV5Mg69iHircAyCa1Rx%2FbMidLzU%2BNVtyAUT0MS0d0ppTR6a9kHUYnR%2BIeAlWbMd2SOzZNRm4A9ZCfE1uFNe8MAqEDDSP%2BF7amTFs6yfS1vKxkcg61O6Ua7ey5qduc%2FNsIZsk7pYRQbnk5k9LgVM%2BGOKz%2FyJdPenXlEHmcSinFV5dfWyH1AOlFnD%2BO4rRQPseUjcRZ8AA16B2VEyrLTr5eO6dQxRdUcKkQKymhpGPuAT%2F1FOpC7z%2BhMF9Ydxc2gsCw2Zbq%2FuWckLg%2F1P0XxdxWLTDeOc%2BN05E3RoiuPmq4hppHbmmHMr3O7x5ZsfeGnJKdM953TXvlHVT6Id7Z00OfNgcC9cM6pMOKy0eX6noiScMxGjFCkmhLkHrLuBPzQcRiePSZFKZFQbmPQQpco2p0pe0D2E8fwAXkfOPKQZG3%2B9BwXp1Ubl7u%2FtGt16TlCu5t%2Fn4tFNCYCKxzD0uNj4520Q7D0zm1NlzncjRVseOHVhSa1%2BlG6a0e2nTYW8FS398nSdbmFJhkerh%2FRNR3QlnNOL5sbvPlWrKzz%2FZIUymdxlCetZr%2BX4NYoDyf%2B%2BKGGrHsNzQf1UpvD6TPLraupWS3nGxaY5f2UVo7HzS%2F0MDQozMOKAFtdm6uOe5Mi667IejnjniG9DYMKSOwsEGOqUBsnXHQhCunWvmRlrtT45WHPdoQXdyF81UkrkxftdUGdV%2FqDw9eeeSTrRGqvxFuCu5xI91MyOADLj0TdxJcFKLemEmBXMcv1igTpcuO7CB%2FuEA4UVDpN0oR0nc342uLkrCCsxsKTM06W5%2BdrffkjR5bKXAW93vAgPrHwoIMJ5198ZDUBVubbBF0TXeVBcG3X%2FXEJC4jiR0cY5bisSs%2B2OlMIlqnMLT&X-Amz-Signature=41aef6f4d7d6d1c90be8a398991506ff1fb4662a5d74f4bb5456342957b68118&X-Amz-SignedHeaders=host&x-id=GetObject)

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
