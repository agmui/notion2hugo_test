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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BDOXW65%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCkKFG%2FMcdUgz%2BehwdrNWeoUeeRfS8WYiWbmUJt1FGTpAIgGRFeCBkPFHxjgqgvnSfW6bZfuyT5UfnyoJYExYzvp5IqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdir%2B1IvczxjwWxqSrcA4qelzdWTAAIMv%2FfgY6%2F5iDbE6Pd67Hr%2Bqce1rrvYmCRaT%2BIehVnozWTF3x%2F478dZUkXoMWVKWiN95VxGjzGVq6oNalieUgvw9iPPYYQAkcw4CaE6jxzhBY3lpi8%2FIbDLfyf2Z%2BlCdF9yfe2R%2BCpdsPOEy3%2F%2BptqATFwic9plB0O07cDBDA34kApb595Q75P1Z0YrzHp1yeXDRdyxiv0ZH1uf8n1ME3iaceoTT%2B90WqoidvjbxO5Bx4xmh%2FnIWh%2BkswU8qme8ymV2fByOe%2FUGEjQmxsiLh%2Bw06niGAUb%2BGNAqI3WNyXjs90pA9pKCXooA3Qr%2F09o9ptUQQcK3aVYh4U%2BkmGBaX71x%2FJCCoaFwAJd%2Fpx0umexaYqckj%2FppTWG6fGvyUHdHFggjINxUDYua6bHNEbfFPHJjgUNQWgVAC0sLj02ceRsVi27ob2Vq344Z1JBEBuWq478bvRjUOpoQtAi%2F2t06CL7810wWX%2FsF9RcUveieEwc2RuWruYlFrybv8mpI3UodxIMInhZ06lQ23m2qAN9ZmBTloddOKQfpXJoZ2mqA%2FzLoO16vgRLwD3jhZfh6F2Sf36nkBgWvDuEKcOVw54Xxpn8rp%2F7nRJHmSkk5lOwmkzUvGYCoTLGMJrB3b8GOqUBhlP40%2FmM4rZhKrdN0jF7HSC9IRa%2FGUnW92plIjYKap5GGdkvLhv5Ry5msK1nSjXd9vt7nsdQmlWuFvBt%2FGjl2Fckab%2B4bqjMp%2B2KGfb7ypncFePifK9WjWg3QGBmaEZgHdWxtU6pOrzdhUt1fSXV9crWY%2FkTJX%2BLbd17HPD43RpgJZaU3WHHHxjIzKI49%2FmXgWS60cMEseKw74qNb6kQpa25h4SO&X-Amz-Signature=7895cb30c0b6b20059310f708ed857e1376f1eaaf26437ae6dbc7c665885dcdc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKRXPSH5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFiPE1G75IusuT2riK53wbrgjIePfhUflR3GaQeAkXToAiEA8rRiRfYH%2FwUBEyFi0KIHZuWqHjfG2knFXq2nNzmYnNsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsw0LYYyfekSRcqSyrcA4kHt60hlyyJpjgXH4x5SXGSqmH%2Fh0sA03%2ByDCbzUVJgVUBQYKh0VScLOfAScpDQWl7JZPrtLddj1P3DolQQ1BILqH%2Bmly97mgQacpTvipeNuP5fVA71w9o7K5AqhBVI7W29GLyCzQY6UNp19fTaKWrqjcFtjHAIO6xiRkY5HZrDYWJd31iiAccx6L%2FWeMas%2BUDHfnODGSON7prPoziH379usHqWPgKmHF2wf5fGKZCXfyb158yV7fyMrBhWP%2BP%2B0k498bB91giNymBrBEgjYMFx2Ec3VcsL%2F3%2FdYwsHfBddzTwulTYj8lHjcxwXTVF143Igri4PZdle6wHHop6CRmS9kg4qpDuvjjg7wTBom28kdD2OhM869gIZ96GUQxVOY66CeMq04Duj0p5CbhkUCSkLzihZiPh0%2BTJqBJEu92XKijEx6UDRczm0%2B9WpjR%2B4fj%2F92O%2BgyM4ZaZw38Zo%2BWxMoWfn2JYnHF%2FtLd0nSoKlxIBMYBq9K2HQsWWHlJAgiTu2vYVEMCoYJoO9sCvOoFvVNNVSInekgycuLoapi%2FS%2B7k4QCoFh7TU4cZnR9KqhASQ8PNw0okJ%2FCZIDVJM8binH02RQAblK4E9NnuEyLq8QYUoUvwGNp%2Fz8IXceOMKyo3b8GOqUBdTCflms2j%2FsBFH6jPXPQN54%2BCdVOm%2BaVhKKujPFoFl5yBGdGrOfQNCcPrrY1PD0L20k2RnNL8SqC36S%2BxrcsIxwETm9K%2FABOJx5yY9Fp7bXnbQLwM2j7DeuHg8CsWkP4sol8G%2BrL3Ptab60wU3f5mMrMzLNiuOPrmruyJsXUVdFPp2qODka53grJqegfPz3JajGEeF4drr0VL5QKY%2B5CFtgvZaqs&X-Amz-Signature=5790c9f188b2be18fcc22fca7f551e3e4194f7618091b759883c3ea1e32d6664&X-Amz-SignedHeaders=host&x-id=GetObject)

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
