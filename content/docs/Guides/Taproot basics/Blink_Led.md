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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VTR4S7G%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIA57%2Bx9cY9fv7qM3fEW3l%2F8V9q2cWCtPpTjRGMg5hXpWAiEAiXgQjli5MC1t%2Ffq9X%2FqgXmaLQtD5yza2oV%2Fvkik8BYcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI241pwM4JaNxtR1LircAxO6%2B1DinpmdtpszpMDCb6whxzi6lQ7Uu80cogOExhj37CKsCAEAEjfzLG4S3a04l3o%2BjsFAPBBMk81GmKP1YISusgEca1ODgkMz%2BO1Ps%2BFjtNomumkfWy%2F3eEaFefvsT3cTjs47A%2FN5tH%2FhMXQnyfaaaeRLETUljaTnZMSg%2Bzlb7HHQshpnWESavxedVQETz%2BfkihekYwIyYAd7yOeKv4FTqQsANOsWdbhKJe%2BKysb8Su5XE3OP7TE0c2z5VeyI%2BEnJMfTn6ctMi0QeH9jFNjmFZUsp8%2FMA6uamdU3qx34PUCTti1brbRZ2gu%2FpH52Ubh%2FtzCA6h6gZb1KdzgQpetf1Wlga2Au0aoyGh0iwEMT8WrdqMxg0BfcxBsr98x7jJePwH54OEMTafRlbj7KWhW8wJ1eiRxH%2Br33DY%2BNkZX0JsGQtIOllLESfZ4fz2TRBgwjbPrBjdh1U%2BSMXN4j3NfQXR95GfhQzEM%2Bq28X8FlibFJGGlkXXYuOsO8%2Fzyyxisx9sOVCP9qagPdXEQBb%2Fwq%2BqGF0JKs22kVQWoTMBjKlkbg2BwyKUG%2FQDMaJBpwyYtB5ybOAZ8Jn6RNbrt1RwcdI7vbP13TfrqUrPIX00ji7DwHCWWO0e1nbyGHy0MN%2Bj6MMGOqUB4ONoBdNO9aF7p%2FhXm1mMNXnQx1VXM2b6YPtg0lzKqjOX%2FmljUm57%2FlVVX7v3Y%2BxTNSf7DO%2FKPxJaE8TeQG0ILgxAsRP9Od0CoL5VFZEhgVtTJ8Z2tHVlKTGUabbOUxfZisK2qSndE6rbFDZNdJCquSmleveHSqCcoLTqoEN%2FQRZBDWvIwBJiDYxaWxRq%2Bc6nqx8geDXLmJxmaaf6FqTnEbWSe9Dh&X-Amz-Signature=0c7cbad1ed6d023fb2c7ca6381e622aa34fd6b0dc669aaec027475c764a09619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y52DZ6P2%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAWQDyC7SI3JZuPGMcSs4fhjBowgWFAmICSplhKAEaeAAiAqxClLRtwRNm694NfPIRAg9W0Ntk5ulQwpCEPdP0llmyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BSgBNQNAwwJ03k9gKtwDVZGvba%2BLmL9Q8yVxLXsIC0ptORlVHkpopQce%2Bbn%2F9cODnSXtc3nVglixvetsW5E1HIOXDLN7QhlXrdO5WjwQqs8%2BP3L%2BKz%2Bshtf378KTzFJBCU4pJgAixq0T9cSeZPwKqf26X8KbRGot%2BQ7G%2F2ffYlqE5dT8BmKG80r%2FGrCMhyERlt9fceEmgVB%2Fea5u3%2FPq2jvFiSXsGDUyeDL28784YC06ptz1m3H6BFh13xu6virDQcZH0Rdn52UD1OXa18TRc7AKpGvLvpHFyJ8C6%2Bjr586GS2VMf376zP5C%2BbFuCAFaY0epFTOq%2BGVVI6TLkJNOZNui0UBbvlr%2B4pFDCZngXY7V7GAnxlPHnMW1HDhoxq2h%2Fv5pt15%2FZTe5BwMcBiOogkElS%2FWQ7m4iP%2BSc4Bw%2Bhn7iArCed03CoFPSaB4BpdfDkQVReAVThLMpBzJuu3frUIwdyiEpwjcJ2nFhfJmD5D3afZIWF9Kd4XKEB5BoHKzGjqFIwM2f6XAyKvMfxJPCNJJgrcqqAcS5j%2BizEaeiiaUQyA4OGyRmQkbXDbmyMJ6U2ywUfKupds2fELdIDEH5f55hh1vpavn2YdHiV908EgEIhNK0Rp9%2B%2BHMx8ePr%2FBW5kmIEqDZ4dQdoJbUwj6PowwY6pgEppsx7Fh3NhzZTMsfzxBrO4bnNENDAGfr20u1dNqx4xNAoFhK4Lnhep3Euw91AGdqqwpAASUGiffoFAZIaiMLtIQovBFuryULAz9CyuZ25eqK%2BO3pzFuNObe%2FTOqHxQ9x5I4QJlFi2g7ng9P2oKYsUyT8qG0%2B6xJoXRjByyaJ7Tq4IaJilF%2BMRFLNyv22hm2UYduiiuNA0FZb7LXSQ0caf7d0FTD4O&X-Amz-Signature=5d21e99b2a9ce0c546b6434570b1b9fb90f61453327d42c7de0a6eecc33c3d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
