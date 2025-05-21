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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHNROABF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCIEO9IBLU2QTjqcM8NUF9bxw0uH%2FkUzmdK2E%2FukwqwTgIhAKDRULmt4nJYXe%2Bi2HGjCfKx44RBB0%2FwXjc5WpsEeyFTKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ0NTdO0NnE0yfyK4q3AOLE3AGZx8R8urz3ugzJ1TrxgKifi%2FLm2AzwgGpXegcqMjtvFNRI%2Bpl1Owo%2BtG%2FARLhMYjwHGZO%2BrpBHZ1HDVmTFEG4wspXMFgI2zL0hkYc9MRDkz0t9%2FLjAiqOmW84ryYNMNNf58GsSj%2B2qZPi3q%2B7FKGMbC83haJD5DUg3pka7Y%2BVk%2F%2BKKRngnDcrPsS0CgSsFsG0b5go2E7F7XcarhhwVqouQL8rOv%2BaDDKv8LS0%2FyevoTaNLDOM%2Bt29JhcnDpAvKDEdnWL0QdpiRfgh1FyCPHAQ0N77SMzKxs%2F%2F8C%2Fta9y58KIsy9VH2G%2Flx9BUolFL2Cb5pHmcIkn0QAPVADfDZqxzVD%2BmSykt%2BMi%2Bw54a3RiEdindq0T1SI1HsCAzenA6VGlwCoV1hyloANrmOzjxn5GtdW3b1ZVMkzzhUozfYe%2Bxtsf2kBSXscjnC7hmY0QTE3J0YA1f5T3NicHbFu2WjPNc2SReoF5R%2BdTo69rWPfuikuM2lT72tScwNHnNRgTuysn2ibCKcWztIKoVXd3fdyt6tZxWsJlgMsKpZZ%2Bi9JelZuFrgMDpjse4mkjZnLr6oG1Dfy6fBlLkP0QUHUA9PDnmbaedyalNhjvPdbQjGtNmDv0LQ4voSux09zDTwLjBBjqkAV6DP9CYDeJCnHBAy2XlHmJ8RcEJck%2B24Bg1RfVDmBu1i0OpLhvMookTn8v9%2Bd5KnQK6jizLJNpbZhCxri%2B8kqIaAFEPX15%2BVMhe4xoRZWT8xjVsXkZKZ6z%2B%2BWz%2FoKE8FVN496%2FXe51E9uQqtoYUMCBx9X6MXduyP6WCTs%2B53dDwnts3wpPydhzffKWxrJKMln84I4pAhc4D9NEur3Xmrjv6slEi&X-Amz-Signature=e83434e989e85dc4228cb2cb72d1d4070a0d151f0997c2b71f81ae32015bf4ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TTAB4Z%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQD8%2FMrkCcnsPK%2BUBhTwikehYKgJfhIkaovi%2Fc3UGpAtUgIhAIEzYCM5zEx1js22ZMbQvl03C5j80eUzgGDNL95GeFGjKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF1H%2FqOZSd8jtk%2BoUq3AM%2BsCXDvethyKfPXvYRbv2EqXsoFk7%2FvKnAxGNxr2qr%2FrMyFh0yJRDWyRQFn4iYmjDgSNU1HJNcCFjqzTsQCpH1MQ6J38X53DokS8ppXHn5Tt0D4oJOwP8VtEo6NvON4HgY1BD5ITrt27mdsXv2ZQrfRtgDBAuLYaesh20gPEvuWrMY3p60JboN%2FVvaivSceDSabV79DSLkTyQhe0pc3N%2FD9l3BYKurL2tQQgKuLFEK0qzxivE1BNZV6ou9AO%2BfJvIU7WDCP13%2FpZ707kazn4goz7yehohh3dBYd%2FKL21J65rCP2uVdUz2EfEYA%2Fb8%2FKEP2y%2BROebJQusJ%2FS0ytqmpDrdEOnjVuVsWm6Oe1LK4rMrjUNnE72Su4uyw9OBs9xLRLmgAujxDuhCenhJ%2FtcXqI2ZxvijGdCy1BnX0oJ%2BZxDQte5ink2wI%2BfWjqTm2EhAW%2F2eTX1RWcxR6nSXmtkxibDWc5MUWG2uujXMCOZ%2BYQq28iJmPExwfeKt06jh10TIKqmgqowTPa6V9Zq14EVKlHILG6ow6e06Q%2BxkQqTvTV6nEWWpDHorAeO60GseRXXdmAEf4%2Bg8SmVk7iTAv99H1jG0KUqA8CtpNkRtZYj8RnYVyzunvbYRDDmPvCLzDYwLjBBjqkAd0r63C%2BwQDP%2BDsKmw5KN3auVbjzgiINQXKxtfDu87BUz0V7FZQ4LFeKM33aOxqbon0Uzv5%2BW9rID9SA0LQszt3Lm9BrbzxflZ4KCIX3EsXJ03SqPDb1UHvYwVyEACM3JTguBQiz4N6PES%2BxpqBJMqrbg2tgeQdf6w4Qcswmp7Ch5ChBbFPnahgXILV4QQRH1GhcnXZTIy7aOKOqdZLr3oNGYtYw&X-Amz-Signature=20cf9f91eabf0a7d4f920e4150a53e356a71879c519c155c1fc1f9b08101a842&X-Amz-SignedHeaders=host&x-id=GetObject)

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
