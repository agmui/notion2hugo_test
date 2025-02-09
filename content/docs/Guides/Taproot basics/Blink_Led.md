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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q37E5TT6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL20po7E7ZjS2aipP%2BBt5LX1P7fNSyrWEyBGJF7PktBQIhAKuw4DvJ1AwPGxGHNkChbWc2jA2ZIZT0dT%2BMFMrufAs%2FKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igymwk9ARQnf4tDJNBcq3APiwhC0qThi105awYlf1qaHaQxSGgTTqld9f8p3yVIOssd49XyiSZI%2BOUTJMFNTOWBcUU3vCqZBiOb64YH3dU55wcrvkw12VdW%2Bi1pjGeA3S4a2syinlXAroDoUwsV99Kr60d9cFpOwldHSmwBf%2FJuXGDQ0E1TkjlkXlvSGXykGDd5oLE23AMa17XMgF42wR5BEsN3IRtC3Y7um%2BWQxmYHhuRBfFcQOt31tJwpesEQntZSPpS62TkASF%2Bu2zewzepzbdzwu3avhi84PIPbAQtkdzPbU3bitvVA0G4cJ0GHFAuX6l9QNB2UuflAiw9mHEco92VI5UcSpmsvTwgACtGf%2BtJsJC%2FRdPYysAS4OXk3aWzPR7uR%2B33sS%2F8hX%2FSyoswJkIifegVwbeB6pjFKMWGJxF8850MtEbJQDHU493vZpX6qOd5E9iykL%2B7jWbSXgh%2BH5%2BCP%2BM54ERDRlya4h2Ls3S%2Fd9PvYBCZx3tOus9kV1mmhRdYQv4TyLroQjKDwJ2Q022eyRXF%2B%2Bx69gPLBpntx%2BlEs9C2AU2K9nFW9u6sJipfoliMUD%2Fs6aRVm7luZdsDvLCtq1M57BsUNSjOApr0UNpbwSeXq7hqmvM3dJ9uxuRHPlb29th2OUyHZwWzD446G9BjqkAaTUqxt31lVVZ8ygTAulNAI%2F7O4S0AyhaQrixmh0Mpeii%2FFGz1NCdQ8OHyV8h8Z%2BUJ%2FK9swtnJHI2UK3gkwn%2FsmviM2ecLtqFybiSSljT6euZzYwf%2FMFIuRLD%2BHR6Y5C5TO7I4TnRskKfpPJzgF%2F4NjWS5uqTH8i7UEflAU9UOUyMqSY8Ax3dcQ51PTaqG4iDN8yEwRaZp%2FtnJ136LxlVoyysOIp&X-Amz-Signature=4e818d99542ed81df2cc4236f41cf33fc7f3b276dede9f81771e604e7ced3065&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XHRPOL5%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaGlq3jam5AsifpECBTr%2B86bCp8kbDOkPssmoc1aadVAiEA4h2J4jbLq1rbFzTBHQgtIj3DiG87cDMDkNkgxmxhHVwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9gng2cOCUzLA0igCrcA5YQhNtFLCrgjlYU%2BWPKHGCTwlDcJDv83YrL0524jHuuMyxB2yOAZMMnOisAO7EnRq%2FYzgzvnzpJguAnelMoQyj5TznBQN3GPWaQBvYJPLJqjFsQ6%2Be8EBVelFy9%2FVHVPeWYoSGMRmppcScFPFEyzeoAc7geTGz6Zb9a9u16IsLrjb9EjJUKCNPblRysNboBmhyZDrTmwoqH0d5nsLhmHnulZs%2FPIBLx29pTQQ4db2MRXeXjPk4DMDL7kK9HluMgT0g6i8WGr%2BxxAulC8rK%2FEKM%2BmjwnEHN3x%2FDYsEnJOIzb%2FvyAgcTW84dNTlxhR1GmqmZPjisZE%2FuwoxtCj4U1fHFg3NrwxtPKBIbg1MA9okZxTWPitg7nL2%2BGru%2FclnJl%2Br5gLWHTep8ULfkDf%2FKIMDCNyK4y3b4yPakmwUl1g8hGeiAlA5LNh1yhD%2BisCK55ktxb4VpZv1UyNSLhWrUc%2BuOfwXeUiQp4nsE9LLqR27gmqNPcHaU7a5hPM%2B74A2aMVAjLef00LvvrwxyLdaWMrtyGigjo2Zxb5IXO2AmhXUHTvWYUWNM7sNL8a%2FUluxeAl78duj3dC%2BlYzWyeBJIV0mpLSQygjgmfzdy0C0MAL%2BzYReou8Lv71Ha%2FbNY8MOLjob0GOqUB4XY5O04OhTfZ6fNRPywfvYrntv%2ByCGRN1RDQm8khzWcb4CynVIfiTYaKtqdtHgYsgJyb%2FnWQR4fm%2BsgR263OxBcxbWtlm0rde1mZnFbp3IB5PVKHGRP7aTLSxw5zsreMzQgNZLCePjz2B%2FS7Io1ZNqfXZienu%2BhiaL4CLCOWFwp2R2JdyfgBE9dILifgvyBBs6BNHERrPHIuvNOeSbzTn8hghV10&X-Amz-Signature=5a86b3fad4df9ad5d54cc5da94bff9ae5ff188a215cf4681f69e3043f5467771&X-Amz-SignedHeaders=host&x-id=GetObject)

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
