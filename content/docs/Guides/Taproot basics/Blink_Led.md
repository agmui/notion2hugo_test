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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MQ6VDAH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDT80yU6%2FdytOfObl4Mg3RqyFMV5JHXWNhz%2BI16jAtZ3wIhALyrhuJlbC6q5eUfgbXtWN%2BMMiKUB%2FBcB0oXtY%2BeNQWhKv8DCEIQABoMNjM3NDIzMTgzODA1IgwIL5%2Bi%2FUlNokXRhFAq3AMbCOqrmE4UzgZLo3s9qgvFd5yuk34oAVKSOgys4Ro3HHvbJGeeskFSkwf7WgPhnjN3fISpx3IP8QgWbuKRUTwUqpprdw0RMpU7DIjJsCRogur9t1MAluql5ecEVN3ccYCvbsVfe8iG4lCtnYhzA%2B10jzVgyagmzNeh6abIcARU9sIUL2ijYu2JumsG3CBVpa%2BQATN%2BQrNKIgoJYZNBP6%2B8hypFsVp6eg9692IdXnPgbPTjQ2MpYxFmqjKKHYIQt699SdDP2BVeAAbEHnxceCMiWy1GNLvb%2B%2BEDSeePw%2BlH%2BULzZtVDrJuMaG0vNsHtV5MuXBsxxPdCtGB8IXgMgrFv3fm6jKktHaMZV8lt006MDkHb3xtRBCSs6DP868hgQwsoMfkAqN23qWCnoVNMcDr0OOjgtfdNoqZfxA2%2BoX1%2FYMUYsA1UJPTwEHW0tXMAR6flP3PCFrNheMPQtgN18WstyD3qssP%2FCfB2jafa3oQpDZWj6s4bRkZN2V8R3fqsz8NOxps1mTtoQILCW16uHSBXWhq6dU9zfnRKVdqwF4heKjtGBAh6hAWnaakvS%2BS6ohRr9iwHtwJeNhVY8I5%2FMb9EtqTlFEr0aFCofJ6bUexCq%2FTnqsXJyuwIYkfTPTCK19DBBjqkAZaRQOs28c07wIRijXH4Tzzj1WydywZgOVB6Z7drX7uesPzS834B%2BYYl8%2FGFhxiLvd7cWEpgvmXiaHOj5t3Hca81uwWzHo0%2F6a%2FFTItt66eP02tEhAsBSoanXZmO3DFFXBCSfVWPFnoEuA1tAZGGUAmDVu24U%2FEYDNTD9Z07wPFp5muV8t8Fwm64QkVzzrcC1CFDyQnv0%2FruNDlASXkOo4iZzcnc&X-Amz-Signature=b03908edf92221fc31c102a4db7b0d822efee5e4ebc21450787c90edd86dbaba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZW3KA7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHtOoJ0G6LPUrPZC7TBBCoCnyiuLcMJ0qn3XftnaRxVJAiEA3b85jqrZPI7wFOUoCRzOBJGiTOEz%2Ff9%2FzRLvtPa2PWMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPqOJQONxx8rvZv7cyrcAyJUtplvG%2BHoKOyVcevXAdx7twMi4WXj3CBiXwlWNjFGyTPRhabY5XmJQx20nRGH%2FbosjYx8GXCIV%2Bw61HnRUVs1%2F9fZKivAAYvgsmFOEODRjBB753VZ1O3hoc%2FHQ6%2Fqw8Ap%2BUXMMw0%2BkKEc1DaJkHBnxJqVwkvwRb%2B8pRVDmoZxCO69pxmLvBVdg2%2BdEedpf94s8iyzJA1YAc2izOzat9RqJfj5YYvH%2FYbUXEASdc51oKkpdeWkOJ03hszibjLpKdTWJMD38MWMAo%2BmfRomYLP6JcF4NqQEUOBfDF%2FPJaikSu4jYEdlPPepne1guSPnDNJsvsVMKRC%2Biutne%2BhAd73ztKEAO35Nyl7xEMXk3iBu0%2F%2BdblrzC1bWkyUTGcQoO9HHHAG4Y1uW9lHaK4rhceAGdpFqPWc75oSK1Vrnq6zmW2prn25v6GuImJkEIvocRNs6qMDeaTOPaIF6muBzcvuWzMcpvGN760QXkmOOWaVhXQyYuhKSrAfMkkEkS%2FqDNM%2Bg%2BTUhOBtGqqJpnZ6dCUiKORaKaZ2htLVpnbqArn%2F5N%2BIT960K8XIiBklmHpicl8vlwed3sEVt75rKwiCLE6MDyGp95XVzRLdedO3nO0TwaWnkAudFMV4MngXyMP7h0MEGOqUByrXtDjDYjdmHOKUlM2QkKjgdaA%2F%2BtLqMQj35WtHS7Bc6SxQPAy7z75gVByZ8yijdWaplekMVRAT8v%2Fnh2jQp1rsL4AYOIvO%2BwRrSI9jMYx1Y1fTkz%2BvdP4tI%2Frw1wdhfrdj23pvEZVvVkOH0wVpcFW0E0D%2B0pDHOsTikkVsFHaOY6QESauXfCkNc3b%2B2w3DIeOyTRcAv1aB8RsEHtzCx1mufLSib&X-Amz-Signature=d08cbb64c496f61125b3c923719f5b9c05ac54d4240cef17b4859568cb35c1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
