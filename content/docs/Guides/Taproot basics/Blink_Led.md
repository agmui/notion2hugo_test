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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFS2RN4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfqoPNOkK4PrL2bHEfHEFECMQE7hEtFImKNJ%2B0lEH%2FhAIgMRXuyHQaEjU0w7R3exuSHcH1hXIx7VGEGp23a1RmAeUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOa3VleewMLjlFRZyrcA6XSaIf4fcVczvc0%2F7Za148hiNW%2FMCg840%2F5JyZZ6ZF%2B92fyOaWnG8himlKsA6WrUQop97r53A9D3NJw15K11vMSdeMUjPwjfqbON3nw%2FQV4LjiunMg6sVtyLiK6TA5MofQ5m5n3MPBE3mYTKGxfJ7DRa%2BkqE0PdarpAwvHjUi58Y%2BoSZARn2Ws7qwTQsyPAllgq3%2F1tX4rt3GkfKeUJsTgiPsjW5D19eUONmDASA2B8d0wfK%2BCI7FvtSEUU7OGDx19o6EWPAcMDKgKlkbf02TPVY6fH17C17vusVhsZTMx0QaDVpYLPA2mDYD2ofS4kKPgpP57ib%2FlJiJaRu%2B%2B86B4mUKC4B06R%2Fm6ss%2FCMJnqm2zgAIrCDTZA1cgBCULgbIia7MO9ybXhLIg0FkWhrj3TjJHPk5Hxic3QCIufXK3TTEsKhtN7RdXK38uDWZVQ18clkqaFxlAPDA1rPa5HhRxQZ7nQocR1Jy3ltmmpM6szv5gX6itKjb%2Bqa5jx5S0ZL0IlGmNXtB7bqO9kOpzJ0QxcIncYMggZUZd7PlXD6vmgCXE3prkwg%2BUBbj2iBNi1LlWVTk8fz%2ByfT9cYaV5mbSXRWeEGSd4VJXPJ0vGPmzIxcKBhb3kWkcYmpkELBMNPXn70GOqUBAXLF2rLIitcRNSZuO2dQGm6zzOvKPZLzKrwXk8wk%2F5Mx9DdT%2BafPDWrbdS%2F7Tbv2M6N%2FjV2eGwUW5mPc1BM%2FiFPZaZ71vUZaF%2FWwFAGRPqM%2FmB4I73NUp8kqCZQQWgOszDZ2PND81K9Xs2Tis96Crj5sIakplaa5E0Cx3PPiYv0nTgIgHPNq%2FbptFehMLMhRX9mhaKKvEEyYV6nqD%2FuPm353tjy1&X-Amz-Signature=76da529e11e724e00a21463692fb2c655d4bbe54888f938830df8ea9bb68ed43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TVZLVD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0P6Tt9%2BbNF03lts2dYNUO4As6X8Urq%2B%2Fv1XFqKnIH9AiEApjAN%2BP4KWBaUxsWbMn3aIki6O%2BXnMEhnX4pAD8lyHJEqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbCYiKZLigDISpE4CrcAw2rYoVhXGuoL1droT6USbgQrmVfpsDJeXM2O4UEDWoxOQ%2BQY0pkNLELXV8sAnK0Isb8zfCeexowtblc8yGCzYY%2BDJdg1Of4TtKzMOZ0iGXEs%2BOUlJ2%2F8dxSD32ST1k%2B05mxFLh8MdQcrmTO8qR2oTKAzDNcBPY34jS39V%2BLwU04Q2HgE0Sy2mKXvBeD4thnBwEh31E4LdVkjbRK4Kttf2TV90aSao3uK5pHPetJL69T2G4MSBcZb%2FF74QFIQqiZdNfoNYhz9Gs58stNYDzqlnbgy8lmOPG69ZrAbE0uk0TQZDnMwBp0ZpIT9hc4khv5eEJsX9h1B1M%2FlyV1XyJADG%2Fo9LdlNgjV3OmlQZxrokMovv1WcVwk3fUnrMNd6NCFZRMnc92s%2ByIh8zrfhCDoqFr70PNwrXggT%2FIjsN1Akk33%2BOrfwhYiLs4OtDxyQFqUE%2FOwks8Xo%2BoH4vgMVffk4gDgP0SI9dBHnZKavkYma%2B1Ovfj00zpKC00UbP%2F52ggduQAR3SIqf27RuhxNErSiH5%2FB1FF2PimcO4Enhm2YxglHr6xYrUWqlMoVSE%2BWCIWCaguw5UZt2J148TOqn48CVNvHJq%2FWWuCGZtIdHD9Ts7jaagBiSW%2F6Zaz8KWLFMPzXn70GOqUB4vgYCxPN1bFtPRqYQaBQmc7Ls7uSsiTSKa5SpIP%2B74SlulPBWR4MZYuaZTUBpTv4GPYMLz44q2XPAznDqi9eTBWLiQEJGdkee5sIUVXxKfkLEczJYjdg9POA97Zrz1hnYeu7%2BwpRlZr9j0BAkIdjfKuzb%2FIJUaKgrx1aHyjpfcKZqbyX1q9%2FmLWiA0%2FoUpjgtmJlgIBhB3ltvibj4%2B74nXjrUeXj&X-Amz-Signature=9ce2fd62c4b8b3e5a21b5ae81cb42f728757c44120540b7d3bc24a9ee3226d72&X-Amz-SignedHeaders=host&x-id=GetObject)

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
