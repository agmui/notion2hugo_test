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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBOCCN6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFDVByPyXoAobrdojbXT6I1nhUAssOGWfGdzshLJpHUTAiEAkZuKYWSWjCOk2cWPXPf%2FElyy%2BZ5IM3M41d6jLnrfWR4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCVFmmEhgjRm5EO9vircAw6xXNY6lpcTgQucryUNJ532AOXFMixZoPMgmehIW0V0wcTnASBBKNQ6HiVJT5aOOa%2FD6054986W8Ls4BHICWZD2ILZ946BHZxW9e5KZUU6uKZ9QgeDIR2iSYDgQbUqnQsgew5JsKadj44j%2FvpkEbg%2FbfqB8yiSNA98mSYes%2FgBRHcJHibkpPFxk0Shwg8kitL%2BN%2BpmB%2BFhZIhnn92hpitgduCXGBMK%2BaEDfG%2FYlvTv9lKf4Oln0bfoKJPQYZ4gviDVgD4TvQ3c0vgAgawbca%2F1Cb1ZRt4CEyT7ITRHWCdVOoienrZo0pCIJ8efksbFapsSs1aa0TFC7La3oXM9X1qDW6uFUXxGnt62yak%2BX9A%2Bzp4qwcPZ%2FijEj6chpH9GOEAamfW1XBeF5v28UAbbz6y8y6Qdxe8H64eTKnY%2FA5cMZVjEXFx89vD3KnLdmAUppzpyWZKJB8cMf%2B45zjM9ZFucH9Wd2zLCYNtc4LkM3NDqFfGkNB6NH1LXavFiGXdMT%2Bf4nLlyRYyWCcJeDgDaHReMvy7BkYYrnhk7sO454Nr2yju%2BR4B%2F4YAjgI0sS9aBa2A0T9fLnl9%2F1kvt66B8gifJr68lBBLd1CT5intywmiN4ULyh%2B94dbSVAF9atMOzpu70GOqUBrNAmgn0wH5WPRVhkBoDvZJlFZsRvdyFP84Kh0J76siIkvBFX2kaqcvqJKCzqyRVtB3fXqG9furacxn3CYgDbsIXkLPrn00dVp5kiyf8gK7UjQwg9ESrVfZ2IEXA1BoUT39bBqFINncyFGryKib4mqSHl8KzH7qoso6duqJPI8u4JXpd2AGB8mQbnKjpOBH3v8lEwKkY6vrNZoqMcNFdd03QPfzOz&X-Amz-Signature=d3080192d1121bbbd53f975bc626476ea8ef2f4ce0c774b11e08de164d35e13e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALSO4HS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIF9czgZDeWyJjpT4D516pKxAF9uNTFewBK9C15pIaCX9AiA1slQRTFavs9YMN26nhgF%2BVAiGNenxx9NXaWo1%2Bh8mBir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMi%2BZGSy1wNc09JNEBKtwDWc1iVEnvd08O4OQeLUIcxvSEGe14UI0Onwqqx2W4m%2FxFM4jxkJu16vA7I3GHYlD3KcJhzriws78e0Z9kJv%2FHjqbQewJprn4o%2Bfhr0XtFJSDNps60MbIKLCIsb6INy87z5hyOyYCKP0AQ9d1YZLx8sw9atph7aETIsvpBgffwyxSZjG0cGl3MCvVx3M4yK488QV4ueFt0eX1auVtjP%2Fh3XGJG4SHwP7XNfaJXY3CgfUWkTy9HSpMqig0TkIEhviZUAicQisdJWcKqTosKw2JMF4%2BhjSbB0tqd1ffsQUO%2FarxnbVFAQt2vIXJotc0VaVi3WLzT%2FdpcT1LpRp%2BCxxOlEeY31%2BFpGOwU%2B41%2FhXpbIl4XDmlOqVKlmhh3nuB1kE9g%2F%2BkI3zGQiyLlC%2Fn1P9aVgJyQyV3P%2FyreDCphTNeQd6QG5hLHWaRlTGS%2BRW3lc92sPuOGCvQyFjHvjpIrOkmtMM%2BDhezRiT4Z%2FLugSc96MedwtEtHJ1PS%2Bg6TpGS5DnQ3nQM8M5smAp4Av8SU%2FiBXpMQqrRngXEjyJ9rmwiMidDKkcm9gfdq%2B%2BlD1hqX3motYmGSvMx64n013YM2JL3FU24bAvcO3jnbSO4p9KBUPkbQhWEyUyE%2Bd4FAUb0wwjuq7vQY6pgHuFnT7nOhyn1Xw3Ybq4pAd%2Fu1uW0NSK8QpvR0YLh6bn%2BFjtG%2Bu1T4ps06SAwtssblHAs1nYSj0E5zntPcWW6LiQ4jztx4er10LMmQBaCsSAH9YPMrcKPj8By3VD%2BpDCxPaRIRl88wxLt92jU6DurEN9el7VyH%2B5aUmFGJ9zmypx6Q%2BpzjZx8bsurSU4yAEcRI3Fm1yM3q01iVz%2FzrQSHph%2BCzxxAqo&X-Amz-Signature=6d9a13e12001aa6cbec695512263996349a594cd4069ece8df5463263ad37a11&X-Amz-SignedHeaders=host&x-id=GetObject)

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
