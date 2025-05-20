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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663COTMT6F%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLdX5ZTuA9%2BAZ%2FPWwtVwfUIz4Veb47%2FQqzZeODr5wOfAiBlMop1uqOSVVqgthvMdL9QQ%2BIfXZObwKoXQzhzm12GNiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJDFhBdVACPb2sVJ5KtwDBQ6SwQjS9pSNjnAK0RdPbxOlCKWwOX2OScdJeOw9pLGh0rsSRmh55uatmbt9PcEZzhSgKb6Pd27djLwRb82JE6NTAuomUxW4UJx6hizf4bQ1uCg8rptg%2BJr8en3HEhIQK9Fio%2BmNczEu36Y3vQcbHrmfTIcuWVZ8X3qSIHfV4Zxz%2BExrFWsOBeDcCn4GC5WawNsbGqHtLc65co5l3aQb0yN3aLlmd%2F%2BCJZDv2d3yPByWl5VJ60W7CGt5g5c47X9TSpqPMlkXacBpcviXint1XHF%2FlM6jqxGUfQkanXpcsCSdrc3xdVF8v%2F9fkzxq74d3X1bYvBtEI0E2OwSqV%2F5UqvXUhpH1rF7lLWvetOt7MJZfCLO8aGz2l%2BmohQ4uInSYWoM4AbNfPkEY9S1NUnDAQ1xQxm1G9leNeFuctOsV2x3xExH7%2BA6JcVxJQUPHfrCEUN1TwF8Ouav3eHmaxKrkLc6iQv8tBscJV8wfWibzvP%2FOKW4wvpj9kW61xS0h%2FycRE1zkZJaDDdwalHoGhbfaLrrQCJycbfbokYJnAxVhIwFCZB%2BkO3XV1RHazxBhEyqf8p6hQPyXYIXxjVmcMxvOIknDflj6WckyuDTl89rTZr9oeIiWk6YX9%2F%2BdsLIwz8uzwQY6pgF0YZnMDIvpOlKT%2Futr%2BcE1Q8XVRT2JYHiei35DepZ7JHkNB7ceh6FSLMfXPTJ4%2BI6ydG%2FsBbbQDGRcoc7ZljbpGIBhnp1EzX3y867IoPKmGXjqMxu7f4BABMxOFm6OStkZW8BL8gHY%2Bq46QaLuV4Z7Iw5tR1kdoIntF4ndUC2NbLQgv6zINIx1FcozJhgh%2FJCCV1LtYK7X2qqrRpunPcjYNqJ0eCBu&X-Amz-Signature=1f72a58eb3e250c3d83bb35da8520ebd1eb324d94ff281c5abb038d54550d8c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X7QVRDZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEotxvlMfADvZZDAf%2Fft3LIDnXQSAM1z3EwebarXiZH1AiB75tLk4jxZgN%2B4OD8ebRcslOh1dnumQtJGiULvsGm%2FyiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLLeaqbdmcDOErdjFKtwDu%2BESeZIQWmknOGy9juAziu9IQLIDbPngPvO63D7mxdbwQpSPQJ5qtblmX7uqC3BBocoFxUOZultKg1ZwZCNQDI6HB7wan1bvi4o2Z5hcJWy7wdLgsqVK9gsXJCj%2BGUkAFqJQPTL1INv6dYmyRxNBkzQAcqtDaG8LhomHI%2Fdgx0p27ZFcs33eF70rDcKAI1s%2B6SQ5b2VrWgs29s7XI%2FQWFqYMFoivCjAlRIl5GzQUm5cDEUBZjlSQrpY8B3J%2FK%2BQmmcFpskBNVk0smByakAkWrykFvyefUHRdYapanoy2L3kD4oQhM80QFGFyDwCtXQFpMCR0Ws4ejLp4dYqj6B%2B1H5kgfvdsC7Dvs5%2Fcp1cPn7M9M8pA5uzNnBwQWLqViDmqLC0FWCL31xXFi8vBe6VVnn1L3tIF1zROtScTyRkE59ckAw2GRYJo6zr6Sjy4hNu6Fv%2BqNNj%2BIOOEuul%2FU0czIY2nYSW%2BhLiWWFmmYHpnHN%2F6cnW%2BfCqBKCoUbU%2BXDDZncxm4JJ%2Fa1ea2%2B2LzxC5xWht%2Fj9K3P34UexoKzkO4Pp9y2Xvv5t5fsv5Zj%2BW7oAJ%2FtL%2F5XBJvlKSkjXGDnZ%2FNzh25U06%2B4oeC%2BJEnpmCJoAeqd9MXrMWl8q2ec%2BIw2cuzwQY6pgGe6vUvxMrOz%2FEw%2FA32064dyH4xcJYZmPVc%2FI1bYr6ifu%2F79AUCSqm4Vb9gwA3qg2FUYlAoqgWynQjajR3Qw%2FIzk3pa3J8AUVZ36NA1WHFaoKmHgMezOtWz9Q0oMR9aWUHqYUz%2BCLRnvs9HEsUHdWDjgQdL1Dod3%2BtrryFikcWO1G8%2FTsERbDre%2FpOwKDY%2FXbRBXX9CZAXMhFffEr1%2BpHf9D1v8xvVS&X-Amz-Signature=c5bcdfc4b0548e6b30f67d919b296be8cd12967c29a7f470394962fa6cfe2e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
