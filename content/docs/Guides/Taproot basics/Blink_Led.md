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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXAVO5CU%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAeluopDh0Ob78PpvMpv8WUuFaKE80rLob4D%2FOLzs7MdAiEAr%2Flr5426%2B6h0DexE%2F374mjGleC8WyUsg%2B9gXMJ6jIMkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMCW3SG9av3uCa75SrcAxWl7xXJKNlLS64CZuGUSZYUieU73wLLWdNf%2BH0EU0LNuxK9Q%2BQegRCRCbwwyTfFlKPx021bvHNDVWka8oFmgLMw6b6JAhGmk0PGRnRX3UBLjULnPBHxFPZiCkMMDyIWPA4D7xsUrfA8zKs4oiyNgm5jufS%2F2nLMhr7aQwBEgA71qbXmC1mtD%2BpJ2UboCsA%2B2I9Z8OfTEohC1XlOuFAhxGW4puo%2B%2BksyHMJ%2Bq6%2FX5gBAOsTQJBEUWW%2BanIxMEL6lrdXbgRNJqEHJTWfhdzxcXXRrAu4Q7KUZF%2FNpQR2Gh4iw6bJmIHQ18YvfDbe9kDK01HKa3yzLEy0jUiIGfMwQk7cl88VpUaQsx%2BmcKSLkjMCPkdHo3xeMNPwdEzTiUqGGudOTeC6braAu6rUONWr%2BXH7ozZytWeWq%2F3jM3ILPm5YLykOn0rYFbt%2BZVNx46ou3G%2FO4Ra4dOw%2F2Q3ZQQRq2OaC8T%2Bif%2BXdVOFHPrvLA2jeOXlu5Dn132pOsTQ%2FUAe8BktBNknYlqpoLJiTDRbdpKLpTBUdmgF1QL3absTes2fJN1Vxlk118q1Oac4Z9y3t3zJ4dB03I9CrsTeFIparUG8EXxDFXlP50RJZUiYIDP8I%2BymwPJmE07KeuSjtfMIThxr4GOqUBZN7RImmFDJ3HOg4TAgPo%2Fvy540g1yI9N5rXp%2BOZAEuuVXpZsTpvrEZ5VlKTJxcKRmc%2BdwKIpYI0RAtjyEcFiEF%2B7Ss8lJ3bfx3nK3dmvOppOq%2FPT0fDpQFq%2BmRn0s7%2BeDmcbxu2cXHW2bFhvYdT5MOmtm4E5LqiVLQbavrxpNGcVDCLU6GtRqaHiytYruVmzGUF%2FxSODbezHmQPgWuKvl7eR%2Fa8X&X-Amz-Signature=cf9361211aef15adeadb1093142419097de4caaf0d72de205e535ffa2c508069&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WP7E3UU%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCFCcVGi4BWk5cCrMW5V%2BzGv1ub%2B%2FmB0MLCkxX%2F%2Bdd7qAIgfhhUelxMJBudm%2FtNPponJnrg0eulXSJnT9ALLvtXcRMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6%2FsB2H8MxRFRrUWSrcA09YGF%2Ffym8A1ICAronz%2BDQz0PlsOian%2B3o4Ii8Pbx2em394MoZwIKvU1PdyylEYN8TxHEOhfVWbq8ad%2BgTMCG8XMRsKYGJ5hFr0eBYnEDjKdmMvOCSv0%2FHTNIdG59809eJpd4XygNjcYPPkX1h%2FxjGpFstlIZOwqBP60zDMaZFBq7G0owAgYSP2tIuS2fkQYW5dnWa%2ByOfUPsCGUGeYuA1p8md0TFEXx8FuwJOwlgDf0icxbL3StOOOT1FVki4Xt4i0RTWxWJL8IP7ijRUqFKfdGKxedzz79u9QgLgyO1uERGoG0Krp%2Btglnm%2F4zjnucrjlagjSXLs4PIIZriSNSdxberuR5nZ4k9FFolg0DkKjjyGGO7obTnyyzr9aZToggx5DUZ7H8M534s0mjBN9W66SWQUvvqeinEJM0Uer4N2fFKS7UunoTwtFtEU8ntfOrIwb8mhrHB%2FuGFJqef9Zer5JwpTVIsxz%2FdP283RaRl16dLletU9D8lNGFHnbyH6j4kPq7gEW0v6FBfHnxIF23bV63xOcJkphxOGGx%2FmhM4xjDOt1eayYFIlbNxyVSh1TYeEMDY8vJxeL4DFQSZJ4XxQlYrFaAuugKuXiZ4RvtwRXRqqpmCWdcmspgCbAMMPgxr4GOqUBE6eYyqZ80ogBmwwLrc%2BJEb%2BKS7tqiMj7RR%2FFP7qIZLtwkYKHqMbAi9as7JBx0KyOhrMH17QT8oJu5h5Xzg%2FVWaxsC2WGXXlx5P%2FmNTJ0yGbkRg%2BRSs%2BXffah61t5e9PkaVUClVu9hRTa7u5%2FaHbj%2BH5dSfHx5VRcRbQeBUj%2BQS3WHfAZzDa81wRqJ46eJTJqiHG0LwHNoUNr3ngViIRU7tCBVgK7&X-Amz-Signature=d1055235bafe1ec952b08a571d0ed1415cca7a42850c5a24faed6d14d05e8bf6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
