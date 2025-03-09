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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653MXDT3Z%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCAwKKZwnSLuTDdBJ2ry9IiFEvW%2BfRnqwUKctUgCDngcwIgAah6H%2FR5R90yP21qRsjnoiDDik8KxsMb2wfG2v6EzL8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJkvViiTE65sJOOGlSrcA4yshIAyx86dN7OXl8or0yJbo6Giw0UGkPtcLNOph9iGCxIQ4l0fJ6xvZCl%2BSt23h3xHwqb7917Y2dRBeh%2Bs4Yg3W5luTCuOJhaV5MbPK6vek586sGhghnrguaY2XQihcc3kEPMzSdxvUhJozNanIbyc0z5%2BMVzhC1gQ8vdoppljgvKZzjcUwrvT8lFs%2Ftj%2B5C1eZ%2BjQH85HrCsIDpjzjhA7UKfcLVq6zjyj3gPAomIakp1VCWDYMt%2FgsUxm8rikikehdJWTFdRZnOFmuuUFw%2FrRxuhwXx8adrhe6XapotWGkTvHyO0oNyiFBYYdmBfsV33W98aPOswRF5QYYx2%2F8fk3Hp%2F%2BRgRW9kE9ZY89s%2Bb6P4Cg2TzHzjhHVdJmh38%2B2O6e1F9GBwF8N%2FM8uvQ1uLSz96NuvhhMLEih5ONFU02JfgxbESwaK6lFJ2uUUVplBT2oIsJOxn1b3mE692LsjRIABqCd0QiRyvMlSXKSckHhxL64sH8Q2pbvABKFfagXAvR7qXmiZvR%2BCuFRQyTKkOwsvUmGFhacGFl4EUtDtndRhShHsfWrs3Mwlp0dGa%2FyPOOGYB3zi%2BXw5JWc6H6MSeFyCcVEj2qS7FMhE48h6aGPl0AUqGvE6ylwPKbuMPCKtL4GOqUBrBgsYFiVidc%2BvKWb%2FDD50rIQ2Bvo8RBHMrsQZ9Ffm%2F6j8aYVWQXUsPVR6scqEoOvvR06ToB8lAAKv0c4VkEZOSXWfnCFTwv7X6AuNfPTPxY0ndJfaknxRHh5BB8AeTplQTHAkL6sdOGoNQv8%2BahvulPKyWVAoPoDTM1z2oZpgqiE69dXWlTxJXDb0%2FbQs6ZJ2Hf7%2FrNBR24tzLu7adtKlVvyH%2Ffd&X-Amz-Signature=091f34137959c7f4f9a42794c3540259c5e759b417ed370c3564679f37204cef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKPKSP2L%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDf0X5VYaQE7f7zRJExh1ULHySgmsQNYLwsuHsBzCCFiwIge%2FqQ3Yhsas%2BTtRwn2J2aXs1DSfxvIin8SNmWjiHiEssq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCqNQDAxqjX%2FCwj11CrcAz%2Fyem1rTR%2Bn4HFqF8Wfn25eUwxb4iZq7rCZBCq5o58xPQV%2FtPT2zniUrrwr%2Foae6wunhHmY4%2Fu3rkOkNOteHigDlKr2zODYH6pFCCcSoriypPtI7oCnBNcw6DsMjAj8NY2MPiGcGRXjbz6PK80Bz1NJG%2Be4btXanRfDjPcY7O7EjqfoKQDCSP6pYZ5WQf5RP45NSq0k2vEqgEWVlQMgtpsSN7eyh%2Fp4JVeQd3etxqsvZ8EV3mwiMM3tyjzXmcdgyDwmEtH0VDNlkX9M0%2BwbL2opo%2FRJwD42dAewAe0akcLajuIbBzzn2h7LaRt8FDWk5iLecaiBoNY1a8DZjWX7hyG8o9kherAEbnpWN97eU%2FIFvxpDW3%2FKty9u0uIp9bTHdUdmp0lpjZ2CcK559rG%2B7i70V%2B4IMsOp28ASy1UJn60rWEhFMOqoMp8rrsO4I05S8VhauAG7QaYiZRFfF2dop%2FQj1VXXRhNPLgzv6cxteCwXpjU3%2FD1YjN%2BksSuJSO89JMPSgQmd84gLlnUkKyKCeM7U5BC7yJ7D3LDmf4zQrnxZYIwUUP0vIUsLrpUk6Vn%2B8ILKsGhWVMcHGTrbZy0vFaVw0w%2BiKnDydzU7N7YVyyZYk7Ynb1NUpP7F1zoBMIuLtL4GOqUBaeT6Hg4luGVNv2hYqZd9qtJieTuJiz5kCJWpkuMZICiPq%2Fv%2FV%2Bm9wv8HsqfuoEl8sQhvjRvLWwwp7XP1OsTV%2ByKxG4MC%2Bp1b%2FUn4W%2BTsmp6DicVLyPA%2FEoRLhY%2B2Lj5HVM1OxmpGXVJ5QFjrBO%2FiEBjdTlx81Oqv8kYw%2Bva1j0KDyL2BBy%2BDN5I%2FAbXp6SCn5kPA3LXcd7eoi4iaPPYdXFHrZ5ly&X-Amz-Signature=b446bdcd2e7a5a454965194e17b75535aa5e2c784d90091bb314afa5a30afc1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
