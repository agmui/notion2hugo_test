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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PXGMN5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIF2Iq83GtUgBA9kQPzksYox8b0ZeaQmng%2By%2FbQzdOR1OAiEA1DFCWchskj9c0l8FqpTZqb4XjhyDKOgKH45yXD9SRrsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiMmH5zKbDfPbUDtyrcAwd%2Bvp4L%2FIaKQn6KSpX3UVL24CuCiTpV7g3X6GrGzFCv7a5%2BnyeyzNdncbf4n0w0ovf0DkMjtgTcU0SNLF6pe3aOcEeQJu236Me0Jr6S08Bk6o1TMZ23pN5pbr3IwkfWquII8sPhvno5Dt4WwOlFgiP4h0qEPdQMIlEbY1unItOAwaVu2%2BOaeScWHSTzGKgxG%2FuImHKX%2FDd7p2PCm692%2BX9P%2Fu7%2BQT2s7O6nqwAlww60rvwHigEkPEk2wQfu5Lapa9KKPZSB8OFOoQgUypDNBunVuMvyUEehmi%2F2vreX65aJwUxVitz0OF%2BfTDox2lNC1FQDdpYBw2smP2%2Fnb%2B9Ssnk8tYY860zaRnA%2F78AhBf1q5ZG4JG3ZmmclYMoF09WNg36J4%2FNxEMJiO2gGl6wkasOcnVnjXBghTnZYpIYs6RVZ1Eo55dnaux%2FszEW1iTcXyNuPHvbg7YLMhNV8HhbO9xsb1JetMn3ZZ%2FWOEQAaBZ30ZuotjrP4d4vuCYnmHIy90gugDPT3gpkTfLgvTJHkVI2JGTQiZ9WX2nD5Y891EasIAgTGGzdj1R1PHJzJxjpLmogYOUq0llCD4GiGNxOqvivM92bkWDlzpEX%2FmZ8gOcTJ4HALdYkRbMV8%2BrR0MMibxb4GOqUB0ZZueKzwwdN%2F%2BcTRN%2F6nC7v6h%2FPvNz40bbEc7pJwr9Bommtf05cUFLygko8WAaxVEtbv6MFkDQaMjM0wVuSUJhU2LSDITgTaKLtjpW473qsPjAijPtAhOe76cMStN1RQw94HBi%2FiTXl3xmdqgN%2BdmkPg49wcHGqxPCVxycXxzznty5G4nepjWfrhCHsN%2Fw84%2BlQkVAaM%2BNbGhqFyCZ55KaU5XV12&X-Amz-Signature=c03fdc224de7e3959239e7d4d63168727f0ba65fbfbd728d55912687ef62c122&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOVMNIA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDpATBLv2N2iRd8trwelovw4rh376jKo5HZ3j%2BRCNTZogIhANvaZhyXpPmqmoVYY%2FEj1ce3T1XGhPSKRREsT1xTnDw%2BKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5HEJbgFGLB5K4prYq3APAT9DPPOfyWE9SLUZDYiGEzDWe3ryUOON5zeX0fzHZ%2F%2Fv5xaDdC3oBiPT8rJujY%2BSBbTwt3jyeVZMBUwDCKmZ%2Bc8ZjVxqf3wEXpYTJLbbJzTb8iqqN4vQoP73uBibRMVOvYUNb6z6S0opIjlusZClNFaB3F0Hq%2BAQaVwk49G5MdvQqvgaeVxGqh0mWvyf0ogBtI3wzshXIx1nBk5CM%2BX9SQsbtQJlzHya4B0C2RvOKBEKyPPvkEXblrPMNO8Pqdj400MyKkTb%2BY48%2FH9KfAsMls%2FRicBTZws%2FEBGEvFSqjsjmNvDvDIGUAYJpU12ft5TmUkoZMXYrExWgDxk1EwFo6BWYbFnhhINbIK2fSk4DRqmbNSHZak3Jwh390plngPu54Z5YPaDdwWHpJxLKvrooYD4Vq2AwZ0lXjgkysL1VUt%2FkrDdal6OheCpl%2F4Oka0%2BYmhJo0pauPBsFRcnQHaczcz0joG%2B%2B9o6xQZiWGDuvKFOBJQCuAFBAiGDNyziTL%2F3iU2UnKaWvXfQXemJ8oxPEvzw%2FRQKi5u1rglB4uorW9%2BxE%2FwdhEwIPabc0y%2BeTCSiJ5cF4woqnRUWi0g81jy1TueOvcvwEiXmdd3PxoLXAF331WQJ0JSsSMdrMdZzCmnMW%2BBjqkAZ7x%2Fj6x7pzLZLrLF%2FL1EIxVwVfrJtOveu6W3I90htetjO2ETl6Xbzarabz5jxaO%2BH5ikgUUFN9jLAWQwt7qPXaA%2FgiR%2B0pdU%2BDjeZKd881RA7Mzx7bLSMGgrayYP9bmwpfJR3nnlHdok%2FWl11taP%2FTTedgrUqqXgaPrxISGYgDph67eXdu8ymhYuBDtjdoeC2uSgnjToCyG3mt5z6xOzGVApffz&X-Amz-Signature=ba63a714b900fa1c0ffdca6b0a1fad9ce7fd93ed1c995b997e7408595dfa4578&X-Amz-SignedHeaders=host&x-id=GetObject)

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
