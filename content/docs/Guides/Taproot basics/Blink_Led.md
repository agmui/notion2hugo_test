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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HV4BFY3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzhwi%2FUszvI4ef%2FS5DCspXeGjJUeNcemSv9JiowV02%2FAiEAhgrqfnJ7d%2FPqTkYJtzsCWvoVdhIMjR%2FR9gJhVea79i4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDH92wrL8p75W9LifkircAzinIKA9uDHUGV7O2g8ZNoYOj%2BeH1iEfyRdvKI1wFxFB8v2iYPfNZtL6%2BJDXcQa5PZufW2i9BR8%2FiBQaTgO4kk0JmlamYAkGXYjSs2ngnOQU4iyoDaDnYPFdFSFgdiG1OMrm4E%2BKTx1E54%2Fl1uQXwIcvM8CvUIkBUDfycn1bKxogLC1AQNj%2B2we68%2BC7Lqz0TnOe9oM0gxG0jYEF3LVuCHk%2FkjECg96FIzv2mstYlJ0embjPICwgpo%2BYAqIV3qduvhlOKtDkgnc%2FJf0FKUSEFCNLtzCnXYSgGzkxUQeWHrdH%2BWkQkbJtMzuc3DAe8ZN7PLPgQX07l%2BFhGDl9ZqCnjjoxogn%2B2duw9p5A5G%2FZ2JjVv50piL28L5VytK92bBXRxzzq8zSmoW03njdySKEk5El22qQ8XLUZK9skhoxR9jS5GJDRMgy3x26FV%2FCkN0%2FOUcQJKnVsTgPXfajIfaB9N%2FMtK%2BZ3asdTRlTtyd%2BIaIu09G0em6bzqXQm%2BdV%2B3dYWJ6ZQnf2jTO%2BatMOMTY4I1Uh5Rr3b5bOiwmHi6OY2nXLOf547Wvbk6Gv8Snht1PICk5HC%2FZpuhClAhWBGJmw87yBN%2FfFjnYAzimIWzu1OfckyMs1IdHdTQfjPLzK5MMLAjsIGOqUBaEfgGxb11aNolKVAVd5ghdoVDjaKpjsoykd%2BDKIVzd70QewL6uh%2FJzaSAzoDVnS1Z%2FGZ7G6O5zPKYSQxw7oGaM6jz8YBcmxZpu6QqqbMOgMrD%2FlaIQbnxJA3EJKcNYK6p3CyUQ95O9xqgQs7dKKhPNat5oREVjANv3k66mRtn%2Bp2OoexlsvkyxFj9dwGq7vJ9uG0gpt3o%2Fqco6fcNSk8XsadlSdt&X-Amz-Signature=520c55e5bd34b63c68d0660415e6a443ab4f0c1f0c2ee342296ddaf269e728ba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEWW2R4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkwcsXUJ2UkJK1iZKNstT7iEHFzZ0PpZHG2Ez8jNfwXAIgaLOK2aSWmSVMQGY9RqCupTAjkh6zTi%2B6L%2Fw7aCCqbbIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDHJNvopyJCIhNnrnlircA7G7eRj5v7bXUn0vuAv%2BqZUdi7HCVsHdlZsv0tVyL%2FF3y7XWxT%2Bfw41jPKRB6H2s9KVBTi96FRMsTcxi2mjo9j%2BaeNT7BL78eoJKa27LjgqjY0pWQGk0jk4W5i2B0x3eV%2FfSrzsvZ1wEbPnRzukKPHALZ29JSQwb%2B%2ByCQgPKETjw11OUao6B%2BjB6Em8P8uKERsMR99xk1Yk%2BpUMMVZEM19LQ4YDkM275eqrfv6HpK7iXuxNGPYUe3yZnqwamXxoBr6TCQi33LPh%2FIrAXjXoOZlF5b3Ds0kmUr%2Fz1CAqCCqx2IoDjxIDWFlb%2B%2Fc0%2BEz6Eh4NIH8L7K92Olu7%2Bp9ZrQtgOS8lIPMgS284pmT5ITHKj64j%2FRldVQyvNUDqkihjxSd7WVKQJzxycxEYkR2QxViSNZ%2FF8kepEpzgVsxGesdFkWX%2BUgOqEhnsgtZVMLwhkDKE%2F4%2FSj7NPL6F4I%2B6cK0VA%2Fd%2BPV4LVB9UfvQ%2BORPZyA1IjIP9CX6CFvRk%2BJauxHPPZ6F8FFzmNENpeILFinD04b3grk8jbLqiGGIg8p2VR0sLc5v8Etl8Mv82%2F4tQhEOOMFmRLaRbJTxzLOdkkhttIlrYaUyl9z3%2FkXpjzL3im9EWxPXkoOoeRHpJtrMMrAjsIGOqUB4I8MFXaS3OxYyDf%2BWhqSthR3KFZgKQCi8Cm82FO4rbHs6%2BGk0g74K433VQy60XlC3eClDHN2w0YYa4cGf06OOJVdjcHKXcKLmsStX4mBVD70U4iycQ9SDmKnfA%2BiEUvqcQuK3weaws1cdMLnGQDawi7Dxc1jSJ5htoYmG9h%2BuiNjqQWpUnkOC5tCwB1LpyngjcFkvgDIA%2BL5NhCW0ha4JkjM5diZ&X-Amz-Signature=8b33e895b0b99d3b1f5e954089086e39e4d373c979ebad642260a949eb496839&X-Amz-SignedHeaders=host&x-id=GetObject)

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
