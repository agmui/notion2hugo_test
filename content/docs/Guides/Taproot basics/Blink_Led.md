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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJBK2EK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC61JKpTfPPoYeY%2Ft8AMvMtkcZYLEqXJ0tQ3h2f03aD7AIgewXId%2FrA%2FKH8pW9wpowTjP9f8rpZoEmT%2Fv71N9GQTPwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMJcgNCKOp7Lw3n4ircA7HP6Yjj4yyNq6XOSBti5zXB%2BiwY086x2QB6tDumrrisFUTiDISB9i43aq2F5%2BxVnJ9hascOh8kNjurrZeI0sPFSfxo5BW2oJIB4V6K6%2FXn4mhSVvTfp3I%2FhXfPjHNIV5ZnuxswYjHFv24kJ0Y057CcRNI8QM36hDeZp0E3VraIA%2Fd3HXcMgEtOzImvFqalntrnLwEJ98YSElFx9fu8zpubSRz%2BKLh5xiFX0p7HwrQ5mYt%2BhkofWGjM3PbNSeyPMAP9onamCxjnTimO806dtbb8H6hqfhUOmOL%2BQ8cl7PparF3TTwSuKWFAp1KIMenrdKIb4C5RcMl%2Fo4Tas%2FLEkfHrwql7lclVV%2FBWBA0FvmETMO%2FOGchyycOWooh5j334jjJCLBfX2BjqkVYvGP%2FJP1wdzijT%2FvOOmlPdK84Y1zdTbdZEF8qwqBCbIOsG2umWzQKxx7HVnRLFhqYN9hXZgbBdiXuXg%2FnwIbmIQP%2FaatQFeGBcP2CFpYc%2Ff%2FFI18YdLpuvkkcAAaxQEviy%2Bp4Ea%2FIWdMGgQGak5Mtu%2BcpHsDO%2BdNGwOmT%2FoKfVt%2BRa4fk6hS%2FrFaPOhu2JqnW12K4fMf7mukkkMHGCXaH2AnrO%2FPuZp7H3MrJuVZUwpOyMrMOvPk8IGOqUBKNrP6F%2BmYJBam0yWiKqGKBwneLuLlLc1fTVJo2cw1dM0iQumo88Q5Lxmix%2Bh4NOEXm4aIeCm7u9SY%2Bvl6n%2BTpEce0hdzvO3wQ35h0s9tyF8CsbT%2Fyp9TJ5SQHYgwiXrcdFDfjeThsNjZ%2FVlVjWyVudxkwlsoCxfefaRVvSJZagoh0RLZZIMkQlsPShgU9Iz7XLm1elhRAIlxazDeeEmOKMFRBmUq&X-Amz-Signature=8fe0da9aff68dce381cbcd86d02a6cd3894796954301b84c363a0ae6761b6a65&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5ERMNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq3471pEsQsWPQDD6Cmd9%2F8p1pIcuv0m8LG1GQfSvjoQIhAIJ0oyGxQ8JImsKHTv66qvrPj0CpqpEozxB2MhWKKePwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5gU7p1iZRtJdQYwwq3AM88SPXOspSgdMYRlhZOgQ3yicFw7ENvOEqBj7%2FfwQ2ajfcUg%2FaV4ETeuwXJFyXvV%2FzV0YEP99XRBAVAXmVxEjCkzsk7uaLYkC7JxLCxN%2B5s8R8tqj8RW7M1bvdsn0uaaEsS5WEW1rWvJg7oi0TdHgp3kyJ8tKCpMpkhxcTasr%2FXyh4vUSGvSQiLP2E1ecuOi8%2FVC0CbC%2FotNfU%2BL%2B1Wzu1JCcLb%2Fbm63ohmMXnjvH15yzKajppK93dFigXULdPDdoA%2BjBqgxbeQEOMLzLimjzx8aFZTtD%2FGUh6d7p9o7mAloeMfRNjPkQ06x6m3b3zy8MorXl3%2BiPEkn3FwPtccGQFT47usMODF9MGsET6Q4f%2FtsuaEdTgr3Tx321vHYyzd1DkEL0qJNBljawl%2FzX6NV71ZS9UOAMSeLE7pR4TUDw8My9x5TpDHSuEjFyomBsgr7QKURajfCx7h2uyDoX95A4ZCyQBG8noOhAFgzdkmAL7a1StJ5M0xirbi1e9QPbH88bB%2BYE5NSYhJT39eztHB2j2BUz398ZFTSav87OlHL5mEiOi5YlVynIO0%2B2wjoX%2BWNq9sGDpnp%2F%2B5mDbpyM%2F3dYSWprYkqEHYV1IsHLgDkXhxoPrO2CVQbZpM%2B%2FoczC%2FnJPCBjqkAWzQgHf9yE7bbCeRYgyEpeGmaDC1c4NK7jhmoTQORq%2Bh3Uj3kL4hkb0LAQ8m19j5GwswHggNoqCQntQi2%2BsV6Pv7rc1InfKRReNIF6XpEPjr0TGyRlH8h3w39IKvCFdsfpUOUBT06RpgZejWvSBrPfgSR84oK1TMkTPgf9w1tYy2cjMSIxq5CpWN0ue1ZkrEiY9DHBDlJ8eNo9f6lw1Qu3Lw6v1J&X-Amz-Signature=7beec5fbfb4401a15a184c46a6772dd9a30ed9c0ce7c499a4279ff4280fa3b34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
