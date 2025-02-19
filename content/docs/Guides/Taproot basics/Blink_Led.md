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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOQRTQW%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK0z%2Ff2aC3LopDRk3qhGa%2F8oP80MoZZl0uS6OtAPxZDQIgIJDT9MPi9elZDN4M8rAjqwA0FdGgP6nt9L8mbdWigRkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4lA2ZBChiNaGLqnCrcA3p40CSpZXijyzBAgSpjURJsXSqIIC6fgLV4wBoTstLG4g%2FPGBuqYa4I75LW4hVuCQG3QQWyeZy1BCz8CnAWf9utSSiDw%2BkSkEBrc2HfFWSv4d%2BhHVJA607E9U1vFuuWR6OzZwe5hLDGpAq3PHRHI8y5zRFcoHnmAh3kPfOFg3KlrhxalIxIY0V93FhrYSq4lAerbYf9BCvlf3VfM3GdXqfobT5%2F8FuqFz%2BhFge4xwhVKOFmwkd%2BqMyKA2eUKseCPgI4G7h6hnQBcuyBtCa5MLVnYxh2Zk1k2F3Yt9tyqEZnY7mVhzIj6QItHg3UxTZp%2FhKKFUOrTQYOL71BwjBgdW07wZO1hJhO4zxrDlyhJB6FOaHRomJ4Zsn%2Bf%2FnUnqaEXTnykpGqfZlemt9Ug7mEM%2BrFmryQIehkXwcIX6K2Ul125Um%2BciJJNnCWst8lRN%2Fs74WDLSpqXWr3Ae%2BanKlFTVnV%2Fw3G2%2FuR4Vf4nivr4MqPFqm0pWSibAf1dgn%2BvwIt%2Bp7gTSTMoJBhCGoYCthHwnxYT7eNHHkaF%2FRr12SCF%2BEHlHGhXngJX3k7uXf4zartoJZK9v0WdPqJAmYsb%2BXE29dG5zY063aPd3iSSOFnANG7S742J1c8kavpDakdMIrT2L0GOqUBRx7II4RvFZBaNPxRwq%2F2nnjiExnACke%2FooJtkXgZL7Z9WC7c9moZByJ%2FndnkGQxtcoZ3ejSG9FuGAb5CMP8KCCDfrf%2BWkGaQrRE8YoNsWUvblna%2FkXcs91ZPyjLtq4UwBlA9vq4S7MKkzjF2KBet98HV30zDWBs7rzQWGI5VY62bmUCYQdvuny%2BlSU%2F7U8sy5ameHnCV8bA0xJjHIykbATYqhJaP&X-Amz-Signature=f520aebc20a961d3001c2366ff8a50f27bd965bc54a380a7beba9bd1f23162ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4JGGEDT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd5Qc%2F9cDXy%2BTmcUuVneYoTC%2BrMpRJK4AbNnAliS0CJgIhAPxtHygIM4AZK2TdmXoGtWSjjZpXLhnwEXPPNJFbXC%2B6KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFpzyxsieeTFQSKzwq3ANwHFHcsXlFYlCFRFeDBZuK1F6FuCeKDB%2FhWnExCfLAnel5ECaGnoKyMfz9qkPClcT%2BeSsf1HSyzI2nDgCEd%2Fy4T0Nd7DvUfhrpZbAyIalhMYB%2FSxPZPWa0oBceodXBoSgh0OdUqnMWqCMSkErSEuA1MvWy%2FhXvKwjqEZQVtDiMcSwabpYS6b5%2BHwaKQtV8ewTn8UkazltLmucpdppnwojD76T9UE7jxchWLl4cZ3YnRkhrtFwa3F%2FEpjwk1jwdEtbDvWIbgTFUs0uNSR1X377Bas4%2B6hYss8pH%2BtDaaeVUynZ3WEYxEfiSPJcEAckGLJboRFe1pwH9Kepvy%2FReZL7xwsn7tHOD2CaG2Gf605RsWKrLTxBBIywvo46Tk4icNhw2TXAmScubYCWj91q3OEgZvVJ7d4XS96cwimQulHyZ%2BR%2FI9memcqdBZ4sHE8xTm%2F5Zkb%2BH3l%2BQ7GWGjDr7nF3nGhjZco9Pkv27NGOnyEqm5FIvlTickZ1UMWUZAIuQVc%2FPAGdIAlJ2e18yxkdyK1upOBtNW%2B%2Bw1Z%2Ba3offQ5%2Bonye2dR11C1Fgqf3q3wmQlVw6u1qPEKAQ3XKaFzVRGQQ0dUxLbxd7f276clMB5ouDWaPeV5HBH8ulmvdvSzDQ09i9BjqkAbM9Rz9pAu2O43XumqPQOWYl9Jwew%2FmAVcRk0gdaNV7%2FkrwafXJ8rRUSLkEPEZbuCMlJkxQYlDxLNtbz4dKCT4RYpeJ5oXMyNaN1WPBuCU%2FEdHwwCxzG0cJXig6V5KtY%2BQM3TwvXpleQrZWRM32BgGGeqIxAJk%2Fs8ybUSA9%2FNyOnx1%2FCIkKz5lLmq%2BgxdR7X18f3JPY%2Blu4MF4WL%2BdRw7I2Ud64y&X-Amz-Signature=58655b4c1d2a0aa74ad2f3dc205e6dca1d2c512019b7f015c7c6c14c0db4a296&X-Amz-SignedHeaders=host&x-id=GetObject)

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
