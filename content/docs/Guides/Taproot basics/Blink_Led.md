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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V36FZHEA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMFt%2FBY0WM4mv4bXIWVGpBjgQtMTtcH2HwBxP1oG8HwAiARSKd%2FTS8jf%2FMG%2Fh5N47vqSjWIkU4wIwn%2Bw8uLsuYePSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvZy6ZgTgK9vyj5xnKtwD2aNo1qZmZfetRuQTplCG9bYQyPpDAINg5XA3kCTstaK3YF2GEvthEQT1QKSspWvbaslaATD4O5TxlzjiBUIEacAz3Slj4X0pbpgaqpgJ4%2F5JHLjrPs3T2QOEqXxW9zWK105O7LuYWEMrkv%2BKMdp9ZNlqbkH5c1nEZfuWW8MlGfKYedN0lPK7umtFEM2dT4bwZJL9hnDCKwnwnc3UPMT2NUyslWgH%2Bji3xyXdTaovarUtp9K%2Bgr%2FajQVHPKywsjhTb5G0R%2FOB%2FSpTyZQR75zEg2C0%2Frypi9vNKGTqhdBRytK6aXx22rP1ChJxdtteG87wU7pYSzYpadVrWw%2F8%2BeMMK1G8WYYTYnKRG3zobGEm6Exp5QRC%2FUEqp4%2FD0lDbCWJxch%2F6LEKHP7F4cT9%2BnGKvlIVqsJS5RWFgTa5VzEWFxFdYO8%2Bw2wb6mlD1a2VChkHhEIONogHRsvd5NmHq7BvkelKXlxbTGfixTcuWyZV%2F6OM7oyoWmK6q58LMtP6Ygcy5EJ%2BJNM5AhoJpJC1WaW161mn1ozo33oyGb1D2MTG6D0seVLccouXtd%2BsHMaEC%2FchfAakFVvP44150FKCxHSfJFhd6O5HMzBqstGfHeLHKbRv1IsvNPVZuiFyhYxkw69nLvgY6pgHq3qztaG76LQ08Hgs9aHmZx%2BD6aRrqhU7AYApw2KjrRNCjDZirJG%2FnO41rInRCcIk23Q9hHepNIx%2BSQuU8iWNF8XlG%2Bia8Evpi2WuWmE8s%2BD3Nab8oXhFL6X2lyG%2BZNFXbjGiM88A2xkQm9tMsb59rEtyE5g0dmdHlHjM6WmaxDGar0ktrgEm88KQpFbErfMuS5Q550xeh1fBL6rfQSCD4ssfwrRcq&X-Amz-Signature=cbed15a1270acab9126f419f3087383b055d9ff5ebc6936f9a883ec5a88e9857&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WUH3TJQ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGtCRPy5ibsYdPSa%2BjFQY9Nj88fU4xF9rzoeEp2pNycgIhAILC5Ns1CaMcw3GN9EhgvFAtQR05bQ4dx0twnvfq7weiKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo1GuUTmtPCVKHrmwq3APlBULwKzUzb%2FTkaH8wht%2FgA%2FSGDvQCYpwL6rOCUDsc6Re4mEfzqsjZCu8C%2FnWZo46KrZZx%2B7zrzU4bE0DIEhvTjdlskRtoXtgKaFjbPv0kMXXot6blamYTDcbK8lrH7V%2F9v%2F3C8BBW0QyDNdi2PeeNVWBbcyFn43r62do1Uaxf2lNz52CwpSBwD84GYrDZwxrJi1OM23hiNavxPBSzO9L2Jw6c5Fs1WkTAykafNj2psUEgSW06tqw%2BzyKu%2BvCVFMEC21TN4RI0Sw3kdXTIaJfCCUfL3hvryrKeJPwXYu2qdmzdkYlFo562fCFCV0o2FblqZGLokoE2RsvozcXHa9rvhwrN3x1iio9RSQCrD8GXIyXFgveJxsaoqXPcOkXSFO7CtgODionrlvjathOBi0sl61%2BwqnTwqEd%2Ftnqop3Beeo9qBYgBh%2BJr6mlY90U2FhGAbuEuGciHyHA%2Ftw8xhWAL2orX59FsVs4j58oy2fgNjvyOlcQ36A%2FbJfG68ewyaInay6x4SNsE3VRRvm06v3VCkZwmYceOkz0M%2BETz4dQbFBdEO%2F2jiN0ZXsuvj7it2ZtU48DuDH74%2BIvfL9tH5%2BOv2e32OK5oNPTkcJ5BmyHc6%2Fsbd%2FWYmP5NJqub9TCF2su%2BBjqkAZ0PK7o4fMqCa9oQ5%2Bjr19piJlkHzS0DSWQqhaRcExzQ2KHQQAG8GcYCqsJlaLF8c0vytVfmcKOn%2BGOJctzw2kGzN2s4IOG2ZjKdRDqGTpCkpYkCutNcC2ADLlSF89Yjiq3hAGFSA5pMTJEvrSwS%2FG1PYkEppW6S%2B4YG1CNAArFzdP8%2FTGkg3RS7IJgiiQIXV7xcYm9%2BvrhGdwfjYehUfDTZlsmS&X-Amz-Signature=bfe87fcdc9b912e1608ee8a791e104d4fabf80e1fd3ab9cc8d17621acc1f4068&X-Amz-SignedHeaders=host&x-id=GetObject)

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
