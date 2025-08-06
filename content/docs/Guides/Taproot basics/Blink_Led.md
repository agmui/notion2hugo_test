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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRF4W7DB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIAUDwhwAzptoBsNco7aUYqE%2F0gx2A2vD3LGzkyGvYqxoAiEAodfrd55lsblq0ZGR0p8KlrfbDO8tu2Ra0sIZOp7YIpsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIa2XMBislxlA1m35CrcA2lVM389LvvP%2B6JPrj6BKbqlLcz3ek9QUq%2BsH987aukfJHTkR1PR%2FD3DDenb3iFB67zl%2BSbghGnspGOUA6AmuOh4rHuDrtBmxHx%2BFfnLGWE8ke0vKkIZLsjvfJYa84UQbZZXuV%2Fj3kPIsMJjHNbtFOOYoBNLPv6ZjkEyhw7MsQZ1r9ZJPh4wT4aE478EiGAj7a5KL3EveCuQPK0ucg6aaRcTEApyzefDWmUgUYRpyJ%2Fu193tljNqgHk5SoltxnCpCPxqlOyYRNcyq%2B9r1xaB3NlCKFJ2afsgrVoDcUYzj2pIvZnPL0B6djcGE380c3L3UwbXEBQwPC%2FJkicilnPQEd%2Fm6QFkOYeHtOnkugKP1%2B2W19xELqLzyrv6bZamwAhYed6f%2BxCzjTD9fhK30IJvsa8Gz429VPzaRmaiK31CK8xo5QdZbQO1%2BUhXStRsTlUog%2BBtQbXZn2XW0twpqQfXayY%2BcCGtTzdjxnCXKI%2F5LLMtTv%2B0qlLqD2aX8U%2ByJt8WLpZEGtFQzqmfdUGJoBW%2FHoV9FR3oMOcXPHad71Q5zzxvs14e0G4SoBozjOPGXMdUlrd2KvKaEpCnqPpl4k31ekgkcvny8wvkpAT3a%2FX4k01StaYLjKBIhspUK2MFMJazz8QGOqUBR%2B%2BEjpmwfJvbmy2AImGca8mgc3Id2Q%2FP%2Bv1GUJP4868d2J6nWJcJWK4xcezjLtCZzG5EBSrz1lw1zsKpfbk%2BIPJOWIXJttoQgIzwh8jP66zRYw4N5ut6CFd9nkcFBAQW19CYUXm03k6SOjxyh01jwmJhgaJa8esZ3HufW7XgWuGQpzxMpy1DWyQ0jw697XcwWqV2aSJlND%2FTXK0MS8YapYiGDeJA&X-Amz-Signature=da5aebb01c153f61f9adc7f7443b485139e3f7f7e8781979f5ceb95779552cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VLR23HM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBa%2BCgfFOw1rWQo3E1RyDKLLeId%2BhzlZX%2BVXlr76s55eAiBjQd33ThjLle1bhhj7wC7rVeQxcAgCrfwlnzN9qsbAcCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxKK08%2Bk8e1J5gJ2cKtwDCHOTF2LqbG8KNmjAk00pRkF2o18%2BetKYjjNqr8epRmOZArd%2Fzb6KmEVuQcGSO7Xqr2hZE3s1QBwPf2b3i6YE1DjEcKp8ozvb6mIkkQ0WRwzgR7DE13C2cKJniCXy%2B%2F%2BrlAgFzZobUWjwkZFLCLiVaagUPQNLDCRGZcpnXBi%2Fkk1ZP9xPYnuWMP6PkW20LmAt3BTbMxONMS%2BRi2CFrigLrEuQfRKpwf5D5y70AUUWdl9Q4zS1FfA8UxXoXf%2BNuLE8hqqiB%2FE9ean5vteDLSHs%2FGlfTf5Lyuw8QkuzRu0nf6OZQPWNwp47DH%2FIgZMDuDuEDkklYZR%2FaaXnV7T19KbyKbIvD2%2F4PD%2BTYaII7B83TnHyTa7DtuDLfQmW99ooFi71s%2FpyshEd7izTrb87%2FX%2FWqldzDeCbhhDyRJWRiAA9bhIMYTyTFgM%2B0YnumdAVzK%2Ft0Os9nk1z1GBUCXNAp9i%2BukWeX1HkVw5d2igM%2FzMiwreF%2F7Z0%2FySI7Qr1vCZzS86UjE3xlH3%2FU96GFGMEhug3RRihax%2Bjn42ZxiqAeGGF1RKtUm4pDNfrYI1FgKB6LNM0tA67pMdLoYQX%2FMDr1WS%2BI7D1Iw9SE6w78Va7UBoKsPOlfwJ22bsCrAbPTcow6rPPxAY6pgEFdC35qmedJpzidfSmCyUg0q4XaVC7llWyQ32IxOYC1%2Bgp3gkpbj8P3err1vLwptayTcQV4rO80Fp7YPC5%2FNVXutqbnunMLcRr4ic3Zii6DtuYRdnqtNq53%2BCphYHkGo6oT8grt%2F1r%2Fy%2B6M3MZk3EQDaptt1KcVEQH7mCav5aGftainoAq%2BAK9Kjo62nvaNeUgI2INIjRggX9%2Fkb7fu1wwmOrw%2BltW&X-Amz-Signature=e62cf162fbe95cf6d379f4191f8f1a5f87b47a6b18c52b9ddde5c5fdb2414d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
