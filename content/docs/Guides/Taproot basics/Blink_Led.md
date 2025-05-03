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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GAWCDCM%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQC0%2Blg47mRfbFhaNEDfsb6%2FJWNu7oMO7lL4%2BOMYwiLWnwIgU4dyLVeFhySdPokZcSmhBK%2F7fJMYP%2BZ4hQyAWkUqJTIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5AACNFyYpHiLHWLyrcA2xwmHvfMpybn4l5PnORwP0acizSqdxLx7tX3wqtyiG%2FfmyEcrfMZJSstVOHdZOOryq%2FikQkqQnjWwS84%2FZyi2FSm5FfhCqzU93HHCabUJT2bGaLczLTD6Z6Iqt9K1FKRUl7eT8e1A%2Bu55NK0jZ%2FCURVCdI%2FR3gwRcuTCvCT45ei2IBYENS1%2FIDGN4bTya%2FV%2B2ITxGbGJQioRAvl5VvLC2Z0T5h8mThXHXR8dCJdl8jbNqAzobNIG8c7HM7tIeY04CQu8Kdbr8oXBbfiglb1h%2BWkOjgawx6AyrH%2FQNSPM7WJ1hE5JmXWUMmHQQRntVA7l5xj59H3nybg15dCb%2BuR28aM%2FvyCKXUuy3h2HgiOWN9w1mpOPNS2CFbxHdTVOWSvS%2F6kTkzj%2B%2FctEHO9BnED0Ni9IhcsiIZDnkNoM0Fe0VhQGyYDsfcy05I975d1SHI2tGR65IAgcoSr6ZKkhlbEsfHczAGGJNETDzT9XXf%2BHdcamdBceJdtU%2FYLSMxKVeynS%2BFljr99AK4agtba75AK2V%2B1NSGAd2Bbh5nY%2FZKRjO9UUw9gnnRZeuq5pjcIwAt55%2FfBpM23baBQzK7CEBdNG%2FOvzUSIA%2FPsUg8HcDZilXAvNklZrmS%2BdpZT%2B0AGMKOM2MAGOqUBxUBrwRB%2FdtUuw3%2B9I5qBaM6P%2F5vqv%2FugjlAez7jtvHbvCQuaeW0A5LcCjhTY5He%2B0oL6XB7K%2F9fW%2BtUknwUc9R%2BGqpWG1LplyITjKoZEQtic7a%2FbpeZwlizXWPhmCUFAZsnQLQLXHJHf%2FdPv3J0A%2FyBo4way7TgYIELDco5VzUEmbuqP4Q4PtbfTM8AIBPVbmgwcmuQXoPLCVE3pakGYiDsM5MZr&X-Amz-Signature=fa2253bc7576c8b371e79e7f5e98f913fc7ebfe84768205371691c512d582c51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EC327O2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDvnPZ%2FSgWaSrD5%2FgIKkXJD1y1HUJmuXLME6adaTVS4awIgG9lgY8x7QZR5N41A00mTou3Kjh%2BcQB9G4bPdek0aoycqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlJugIFNV082elGlyrcAysdUXjUz%2BvKQf1t66avEBEF5wjGmA%2FdnIoDOlIOmiws%2BClg7rJiRBdrJ0T62D306HmgR8keDhnEIBqoJ0EfuUnp%2FUijUWDXhCe00WbOgHZfY0H19SAT9eLJfD5qnI6S4eW8xeAFYgt%2FwNQLSodRek66nqHxN1rbg2MKJaBfVu7t4pl2dMfR0dIjlruWN1i7mbjEqT91ggULo2435DH7EUL8B1qTY9ddLEb5eGP3UT23%2FI0ThkRMNGZa0Lua0AdsX9ek7DhXBA1oRWRwovW3OEAyGrfGnawNUXA6SqTQU%2BuIa8BnGyVx7rvbdrBlqjNXTSQTWxXNCr9smcXnn6vOKgT26E5rf10UsvqZ76HiXUNqAjOjb1zV2WSmTNeLvanZZ8ON3SrIHOY4ccDT0V1VprpaZYBy4S4JcxP2RzmwNcBAEMK4Yws3dmgflgCPa0YZXiW5ZfiFKRkKUJg%2Bk81CkyoxM8TM323%2FB7fkVmKAAnyErni9chUpNgDkNTmLuEZSjQV5mLkLqL%2B2Gzdr3P4vmSTbdk8g%2BPiFMHSp0%2F0sRKUjFMzjQ1OV%2B8zvXn2L8yJdJ9VmI2PfGA1Na2kZB%2F9jd1Fj4Tp2AzY%2BFP1CLO7j4l1T%2FAeFT9RaPQOs19i%2BMMHe18AGOqUBmm6rqhsfZaWk2fcUNtglgAL1vCTujdbAJGjk9%2FPOTwqCN1kcAtb6ERxB%2ByvjES4RnVcsp2RMHWa4NfyXQ8B6XD75c9LiEdrUt5TuRQTtAHk%2BDe5mdoOdgdRwnKp7OiCquEtINcZncdMS0cOuONEJKG3z2INFB%2FSyWGNzAtKGs7g8KZadpyHorUzj3I%2FcCVQyyqARBR%2FHgHTunMOaGpMyHD%2BfaNTz&X-Amz-Signature=7773dbed4f99488f45d3d45ec9ff2fef8e06b1875cc2e2171785d6c717f38227&X-Amz-SignedHeaders=host&x-id=GetObject)

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
