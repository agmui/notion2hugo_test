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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR2ATLCD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIHr%2Bz9CX0engoN4QCU9FCFa5Hu0VLd11orMoMDNrKRsgAiA3EHiWEmUJ5W0kaRxsWMlN1%2BkLrVbFz6W6s%2B5gFqsLSyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMXPUyVQiWdoXZiJ8MKtwDTd44Lwy1BFsGy2r57EjqKqZKRezvXwTxkGgh4VjQCp58LqfatwH9nJXe6T8XX%2FI6BSekM7QTI20SYx9te96SNfuOpxa8Ikg7bEWhRnmsQb6I34IrCCCJX%2F8R6j6%2B1stAFKE0FNfvNTaLyZcoBsFCcnpyWKWbyWg5rVpwx%2B8CyOMmwL6k%2B9rdWdvjx0mMAmMdi6HAZ2%2BjodmS8rKezI1LMiebgQzMdTmuM2P%2B11hqc8llC5DGVNZc%2FJEUiFflg%2B%2FeL9H%2FMrxU%2BM5jtogufyU3Ig4dWGX3PV6K4%2FF3eL8m65Roe%2F6nJBktwOqEUuGKLlN1kVYQpgDfhSLmvkiTkDQHM6pmZI3ajhaMMpX9BkIz0fTp6zzD4E5BvKiH5gcOTajknfsyw6I5l%2FSs98RreOxJ%2B5yOBicRDfA7ugWVihYjOObapdjMhYnfWqz3KdbjzC5Ra1Y1MQ4AmaHs4%2FZTWhHZ0AihoegCg%2FJ89hpbaMsWaKJCJTeRGLeAW1dHAzaxOyLDi1Fc7rcEFuo5dTg%2BMRN7Fscqqp%2FJ1xXiV%2FSECslBPi9mK%2FfOhq6LU1vSNhUCyekeM%2FJWZdlX3FMOR4B%2B5o41BiwW9PzVFZG4ync1%2FFPqcul96hLFbux6HUMaFbYw7OCvvgY6pgHLmTdcj%2BYANr3WCSwR3Bu%2BS%2BdBZK%2BdfAuocmdpaHlmUsTnc1LufXmtmFTYOCosbk0XkctXPUmtEKUwzguNW5Xn6SYjirKd8Qvonzomdy5UD9j5Bsg5p3yQSa1cEl6XvRiPRdLSeI9dgUA%2FUYDmhyCxzA5R7ueUdHoZIJ6Ynlvn9hQhXEDHCUoLQ9SzWrBRWB2reG%2BAFd5RNqHp3ASluLUfUpQQV2yO&X-Amz-Signature=efa2cb228e60fc1ac0eb8d29721657b38a06201f941506a893814ba4d587bd7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5COVXW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIQCnmY8YdKzuSj7hG%2Ba9T26Qjf7o0ZhjAo%2FRtffhqBj6PwIfC0vejkXXoxKy5ioNhFid%2FzwLRAcMO6IKbvs1Hp5EPCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMD%2ByzAfYTKbHL9B1yKtwDXTJOyQQjMReeCB1TFG4k02KkZgI3yoocDN6yvmdM0Utvn6DSCX7nw2eF%2FJKDzEBzEvERnzKPsD6aT8Zv2NDXpU4nH%2FToXQVBEGGHT%2BSrkb%2FVBIOh6dHG3nqOAnLJZb%2B4pPtpaw1WDh4bR7mjmhM4qYLqX28LXJdawtNXJ%2BG7TPampbaJeEAOUe%2B0OxQkEaFT3hAK2NTSZUEU3Og8B60z7JENYn5z8MEvwcWc4EI65OsFmK3ieWHbpKEWDFI3e%2FKY6dgtMy06dTjn0eqMsqszQgx%2FSbtFFUuKONDO6XX147o%2F0MeGgo5ssR7dJDxG346Rj93IxF1ixs01kjVdOnw7pDqTAnQxV8h2yaPtftUg0x%2FrGQ8SxHGaDmoRD6cgbfmSDs1cbwX76PP%2Fw9TSZuuPCQUbKUNyq%2B5kCdU2csJ0Azj%2Frm%2FWNdLJeD0lCOXezuO6U3kUs0ZfD206TYmAyL5JBidB9IBLjo81UnL06KwkgFGm4%2FAn7rv0nAmz7NvfiaHgl0OUMTwD2xm0lDpmmO7oWY7CGpPBxYDbhMdjyz4%2FNAIlh4y9r1CU7wOukav5H%2FHIMstWiFug9yCuVUOinomVVvuqyGNFLWjPKlP1ALZOpGWXAKt2ceV3MPUKMc0w9fGvvgY6pgHQdHOuj%2B1%2FMKg10gkKMPQBC2hotc9mN%2FSUNblQ%2BA%2F5ujTyOR8Hs3hNPdQwJ%2F16j20%2BHbhGISpI6w%2BwrVG3pCeyRdY82G1MMnEwtHTqnzOFSI8trUEszsm0JQyutpAPq%2B%2BuWtfi3Tg8ZAxN212ohONzXr3BGCYWKeGcQIWhDrd%2FjPrL26bIVKrSv5AVC9elcID59RHIZMucqVsrvmrlHo5qLpZYt%2FKe&X-Amz-Signature=b03dddd0158ea31c61bc7f369534d09be12a3b44f67cecbe96060df9b30a79a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
