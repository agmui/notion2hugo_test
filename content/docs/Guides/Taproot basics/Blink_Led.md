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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YETE5GLX%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIC7MDDHe85plH0%2Bm%2FCDX1ml3gH%2BWUBxEZDIQ9MRhSYgaAiBGgrWRiCz9d0rgSK2VWG6cI5Mj05dRo9HLx%2FqURFEC%2FyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJQBnIWzuZM3jD6naKtwDdLemPyibn0eHfkf9bz%2BcsO2JoU8r2xCPAmCXvXW%2B4kekgtEcxewDeZXxGKKR7D1%2FJnzXTSQ3TgB%2FP%2Bd6uAmO2QmJuHRc8yQkSIHXq6Ez4EyKSjMSPeaPmGBvu1MyO5LIub9PLYbRwD0qEcvJokfOnmVrpeFwTOLIQezYM4A84lNjM8MJ5OKffvHR8lgefp%2FvyqwY6oAJAywixX56mgkasXTqrnrrL5h6aXi4vJwP%2BRo%2Fyw9tcOv0eNZfqBVUFWdvJ%2BR5x7aNKsMyUd5DLbY1NaRzuNaJrMuCdpLgZf5GeAAIL1Zm9j3Qs1RMtSpYkcOxujtdqqN9pT45%2F0n58tajRTSZdeG7D%2FYSk4RwT4Gz47c8gZsE0c8yE1V3QD9mAMsqPJrS18O3yp0auEAVcWI94KdJFS4oM3kY0Cex%2BKQTK3oNMrTJbXJOTlxtWrVW4W7wEKCj4B4rqUeFbDeHQA6v62sgqdvhPn6d5oRxDQ5UcQaAjx0nTfSlPh548l%2FVjZrxkEXknlS1hyf1ms8XP6XzU6QyHffkYCgIoO6U7cN5CAIGDVl5lR3aS%2Bo55oUi0dn1aFpYrBOR5MYVP9CM6AQnJh1FVXbcV1v9jwa4ZBOPj9W7MaB%2FJuhy0rUoy1ow9cinwgY6pgHnfnhWEFM5ArgWS6%2FEx0IhoPVrMkt962Tno%2BC2sZ12emk26VKiTZcfdbUd9CpSgB3V1fwMqnD1w3fhaQ7ZVepI2H6v%2Bi8SHPEgoA15Q6aQTRwrGiaepbN4h3fxvfcOyZhPioaGAd%2BSEiA7tQnPAlvGawSy41wWhnwnRIRg0YiBodshqmvOK4a58L%2B9e5Iv5guhYK%2BRtarPp0of7U1deYBZLRFFbTK2&X-Amz-Signature=aa7206c7bcfeca3753f8246883486479d14077137d9df06a31c1f839cbdb0bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOL43LIY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIDJHjQggWBnXtPz1aUEsw7mCSugi1AwX48wJqKUdbEklAiBJSVYFiXSbUrC7X5PfQiuWqU0m4EEiAkF1MKsupIaFRyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1w5IcIdk4AhhhqeuKtwDky7oSbCgqc4N81Dq6bTb6Yg20BFPf345C223UaOp4SxDO%2FitFbsCGcgUOc8XKviCY9wWYJIj7L33zfSKfe0hJ1WxRHOv5ZZ%2F%2FqC7DzaFrxZxZGvpbnchFWhrFnEpJWqpckMh83ZBVQNPJ0kDm0iVCPzy2B6jOTPsUDKhrCOujao4RaVU5u43vYsq8cNwpmu%2B7UYDPnN%2FRRPg8%2BkG00YpW9JNzmGMoHO97uYDeIMqnyycKNy%2FEHbNryTKrpkLw8TJfOOyMnjFuoS8r5uK2xYMSac%2FWLhr6UxfTamnJhdqaoEgMZYpslZuTDC3WnPXQvZJ%2BSeNn03Hj553e87FHhn1J%2F9MZb70ua2mNAI8w6zYx6k5sJJNgXLWzyed%2BbzWwm6khjz%2B3HMBudrcBmJkc7CVSEvn%2BLCM2SCMaSkP9dHwKElArTXPPZE%2BJ3srbW0CIfjXQWjMsCQO%2FVLgS3X9ppWsLSPZgILcOy%2FOWWSCgGpxysLxuZl%2F%2FsZfkuof7whXCISsWs85Ga6rndpjesHNB3fVK1PC1eHF6tgaaIO4s9mQh6w4FiRABfxz4MayRC%2BW%2Bndycbgtn221DpwXYb6f4P4sf0qUf24n1t2S3HPEmYLXk7pdDypbQUGoYy0%2Bm%2FgwmcmnwgY6pgFeJoWZqk47PBnmGf6mYEMmDLOIHhC4PwjhcwfrJJBRD0BYZuZBrut%2Fb%2BojurwQu81G2GC9TUyeWPXYDIer%2BfX5NZKheikW4Pyz17xqvZtRfSvNpK7gM4U2wB5lMMaj%2B0vs1bBkhHheWS3tYsSZ3%2Fzy6MIFsUgvM6rr38CGU%2F3zG5ScbWIjV55TVN4noTNZVFFtQEfJwh1bKf96WxJXX6sBvDGh49Rn&X-Amz-Signature=64d18ad83a5753ed5786381edcfb0fc77c49fd7f50b083f2013eaaf992c8cd58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
