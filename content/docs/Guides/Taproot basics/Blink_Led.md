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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDRVA2KS%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHPoU3TXfi3IuFUgK%2F1ZotOx6ODKFD2e1eTdGn4UFLJmAiEAqxEWsluecyOfXsH3MwfsAR9v9mHiDLOX5Vl3JJCfAkgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLij9F76DyhwOi%2BrrircA8duzssGGIKf0udJo40IKXIcZr84W9CGnihJTZwES7N%2Fkf16S31v1NSH3zHcnAHWYYZjS8IdDs6r%2F3YOgY4ewK5h%2B%2FTI29FdxrLSCKTeCBEywXPWOPnYmQrgqvruB%2BByCJjPwtgZ71hsyaMCuzBxOcSC%2Bf1raZdQk%2Bvy%2FM4fEyMScnbiGTCRU09DY18I6zA1OeE3GSPcoHQU8oo26kwwzdoXXSpEkl19fq75UFEora6o01X0cPgGTxVbd4eRuBuufus9HQdHQF6TYwy%2FwANHF2wOSDTjnXzr1mRYtMVwSDHvEuMYUGHvNJvBo7aAI%2FimjOifDsIlfzdCLDb5CcnGwXQk5wVTzwCX3G7PLuh1ZzbBVlEhD1Vz5W2jXGA0qTkBs57Y3E6%2FwMpT55nNccCMuQiQEsdNAYNzz%2B1EV%2BZebqYr2HqIkuXYK9r7Qo1ZFuCh2ELzMXA5byoV4zhab0D8Dprl7p%2Fo9%2FRs2HP2FO1WN3tYJ1gvoQ1xDl4g1J5Tya88ZFbkDyZas606bt93ymXwhIYj6Z0hrymjyRj7dkcd8nOrZHUpOua61nbQ9CYjPGUxMjK2Rp3dvZZ%2FIa4bQN4lGuCqcFaOKkL%2FfpmxJ0DLM23sjDENxSQNbiamX695MPvF774GOqUBgZRcL9QxvZDJqBTHUZxVc7m60srE2vfZ7QdckdQ7ThBQ46Jy6b2ZGrS9ZImvodOsD4xy%2B160N6KKaVpyLTUbQCTQOphQSg95F5KXK8SBZbJIjnWF8aQvNCxrtYrB%2Fhkxq1VpUL01B8J9K9ZDZvSlx6lCIX8tFsRXA4IulrKyKDBdgTYDFkDWWKJ0nOqPrrKs4KYWMGXLRCwJyVPmk%2BgNdHoIAxow&X-Amz-Signature=fe9de1e74914c79db8555919ad7c85889b9ed94c8445b12c2416b8ec8d586bc0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZ7XFIO%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDilceQdqWvv7FDw4%2BHpxUFWVtDRryi97Q2gWdVO5B5igIgL9MWCjL6yiBilv%2FzYmqVm%2B0VLTBVl2OU%2BFREBXku0ZkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrx8DUJPz0SKNu3YSrcA%2FH8uva7zvgOJMy7GEQ9nRevwJo%2FyCw0oHyxoZ5%2FF%2B1XH5Ei%2BwARtfAafojII4h9z2GeCBCLslPQwiBrs3dV2JZQ7yV7CPmIh9XmaoE47SbWSRe0FYQ3UwYpBuzvX85SQPd2yWrF0ebtSjg3o78pjfrG35eoEpYaApcW3YfypfE%2FbKnrK9fAaN2ku%2FtY5hw3fY3j1VNzDBtJ9kQJ9e0T%2BMZIN%2F%2BjFI21tE98gf41MmH3VovdwOcf91c5Tu6YoBxRTWGM099ek56HaNJaogjDtpexxBoRx50gO2Ht1ESEVj%2FE6xNmi5RdRRgFkDsNnfPcqvXgzhe5wgIaMQMqwG5sRYRFXEl8ztoTUwusobTItiA2hSdhcJEnKQ6RW31zAWGCxtvyNEbjUNc6rYUZljNx1DZch7UIXjOXVoA4pYytVqtwT1Pd31ZweMXx%2FPn5%2BxA1Q23IHTORqKHCwiinevq%2FGalNXwOBdbAanOM4xCUsXc6hxSOr0KlhHp7%2F2l72eJ19NO%2F11rQS4MrE6kE8dOucpwAUf%2B8uY3HW52rM6e4MjEh9o8qEJFWhiAqk%2Fd1ZGjFsXOhdyjdqMYdTSalVJQjkvGRMEaM6YE%2FYt1a%2FyMIWUqrOLbh7PkC%2FxSY0LA%2BsMIvG774GOqUB0yp5GOlznYxoxhLSTSiLvG83YEuAYRAb%2Bs1M4NUDMNB4mZmCLgb9FBuPquTJBezGMYMBPy3BD1p6rHGByvuwCic21PwEAGkmeddrFBo%2Bn716y2DTCEWAp8fyVYG8YzybmUHcLWLpp589diPYCqjhqUCo%2FBq4Eb7T9%2BtvvPLpltwTpU6bqqQUtvgwt1HKTE9IwSfITBq3VL74xtHohKtOtkj1ojYU&X-Amz-Signature=d8b01e66f83f37a935a883afb04de88355c6291e46ca1e7167dde81f54c4cfae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
