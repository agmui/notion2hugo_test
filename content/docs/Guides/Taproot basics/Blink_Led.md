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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XOOSYZ7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgy1%2FZBGbai9AxZIArpmFgHcRCTdDp%2FB3X9gF1rg6%2BNAiBg1bYmE4kdouqzDyqldx5SNsaM7gaYC1jnxs%2FMOd9Z8yqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz2mfcXg9fW95NBEPKtwDL7KMEQuqMZWRUf8c9t2fQ9nIeikak%2FBTcFElZSUm58Mvu0MjrD8qsu5A6D6IlTzxrd4TS3gUTo1IgsrWdtIrsgwlqa%2BtnIA7RYRHPqcKoDuetZeZzCiTSDrnAJONTj%2Fth8zqHb8zO7%2FIMSeJG5lEROoBxpkNy8h%2BTDSOmLkJnBkVhV1oiHS%2Fg0G6I952juDrCYS1Qi4fQyTCSOiYfd17wT9m53LbTBiw2LyUZZ0hN2GQXYqVWrLR%2BAN%2B%2BZA5RUQZd7%2F8djLFr38Du%2FFN8jU50M3ygFBX1Jekf5U5%2B%2B%2FcTyHJgC%2B919uPQO0sw0RAJpcKxSMI4Rb3j0Qnf5oGzbLEFL1xneGwtHFlDeJQCuLSaPFf96X%2BPgfSdJF6g2pQBYFGvhY7ysAVfKIfxsqnIy7UOt%2Fo6HGMX0NbWLz4tYXGRVUDeSl9MJcT2H4KWumm9AMVO9FwaD6fLh1GfBnxFAYmMf%2FOC%2FT%2FPGN2R9Srqod1BLkIIYZlTLgNz1KcxIaCjIb5w0FNKPfoe8mV5H4ulY9x6oSW20u1ZMVWxOavpdWMuMTH0z%2Fexba1z6Ki6b2afGcT4aJwbgq4ke0lVloMi%2FLlw52w60b3C5aIgWUQWL2GIJ8%2FVcQ%2BpYNRwTtFOP8wze7NvgY6pgFGyZ25qhlxpCY2AzaOJ9LGMhOGmp6Y0LtWRzzUXz5%2B%2Bxe8MRXuWWmHthOgcajQqgWaDsnFn1NeAy%2Bbb7tUqPglVohajJnesxW0SLXYeRRNveXX%2BR6WcXxQ%2BdO4TUahhjNKngr%2BtBTvLW7SJsPO0I1IygXVwvvmI9Evl8kKaIxrFJOMWScFnT88L6sshVB5cGBwCYDa%2BOn6hpLUr52gJrjYSlirRKKh&X-Amz-Signature=ed11c68b1099e63911a4446f3f606f16f8a982d9365fd92dfae3b8ac06331f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BW33LC4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyNNKT44pnV6qNCxjyE0MRR4RKoIU%2BpyV%2Ff%2BhOMbjdqQIhAOdZ1QFtIc0fjw7RKepxSNR6J0r1im3csJ657apnYPmpKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1i7O50pvOKVflb9Eq3ANE4u3dEj9A7FNP3PD9iims%2BZ9ZglY2pan9N0hauTA1rNRyELrbnHe2e2J01wLTukHJCB4ch4DYm9fiX7JZC5KW%2BNY1xcaJ0TbNGc%2BoPs4cf%2FM6h%2BCO6WlRw9QPRVoSwRXjZRaQV4E3BE2EXm7VVpYhQmNSWpgg8vbI8kA1YapKufOlgJ8vCGV6zt6QUCXTa7FXTxJmPqFKfzVh1L%2B5BOzzQQ2rKsZt61eZIV4FQO7Pm7OWDY9UUkpKMRwf%2BNBInK7armoKI95fBm027DrBqDBW1s37QvBGI830nuOLTAYt%2Bb0lC2lUqkH7ebtomdU57sLWK7hHogpItflbaQBNBxpNywLqOp3gQQLAexrOBhsr3KOPzGz5CMfnJnmsEKc58bR6yU3p%2FenTMX%2B0cAh%2BZ%2FMgwCyKRy57pB9V1mvRW00GwWvF8Dwjn2K%2FbZZ4ym4KMJ4wCJ0J%2BR1MuKdKP5ZzXxK8z8RnJHKkOTlZWPcJQ7sUIVzKSDuO1nfby0MP%2BKTw5Hnvr5FKjWn%2FzjTnjZ8y0hsTxGMJ8o3x%2FcgtfSgXPR3ent584TBgN7FLX%2FZWQDHMCstg5e%2BUu%2BJONanxhLqRfKmUrbvz4uS0qD9wl5D9VbHk2PbjrcchSCenLRom%2BTCY7s2%2BBjqkASKP8S9qA7V0OrvlryaFChKbLD908N5kwoLrbfg9AOyu5N%2Fv2ZSzHAHv6Fvvoaga7WT%2BayMbCu8Fk6GnUnM3RLCcVb0qWZwUY3U%2BDIgJPVrcAL6%2BhX1zpceecBUwFRuYwBEArfs7op284u18r7Ug9%2FNHvITFEs3qHsODCi39FTWyo0j0YeV4UzerVMiWhTxUn22HIcswoVrqKyQ%2FIClIA42u0wTR&X-Amz-Signature=d9c6d5760d4a611d0d1f399b84653768c1be219c80b31602501e9f8253a04af2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
