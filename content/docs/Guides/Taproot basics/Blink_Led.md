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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFGTGLD%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIBPC0U6a%2BQ662ZvugO0wzqDSyRtbbK1MQXyozSkjat2KAiBDNMzCQhDWTbM7fD4DqsEhKTd6kYjZRu7difXneTIdqiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNPqPOtHERrrnlI90KtwDOk5ZUMr%2BdJcbVBmISLxaP4caokAlQ%2BTvp1ZYKUcDDX1nFlNjO%2F5w58Uz9ue%2FvLIP%2B0w9HWIMCNfravjySrGFJ31nCKv9Cw6SgJsvsfthzgC1cqUClEKKCWjvYW2doa1rdRVKHIRnzCYv0NIFm0r8QLdVqDO4mw%2BZrDERkCQ4VppqckvAXMLDHk2Sz6iG%2F5VJZPtMc7RpD%2BbFLji2B2dVrM%2FyPMJ8n5FH2VvQM%2BXu62kgB0mRJewOD6X%2F2c3BK1%2B5vDcn40agmnoDdUJvSeebL8PIiqL19K8EJtFHRU3CKPDB5pZHvlQElVwsEZHxyugCj0QeerWfX2IO4s9mUzaCn%2FV%2FA0shEyju9Gt2vkb1J0YGnxYmyISwjR%2FAB1IdU4Aq0%2FHSCDs%2FpnGJiVdll1L%2BBQQaC1eYe%2FNxZvJdGXqOkI%2FZLQG5x%2Bp3Ku%2B39N%2FBgzWnPBDNAObPETANG11LtcYmyvTNZicnDUmDyZqvdlNg39%2B9MgtRrQJrbuC960tU8U628e7Af%2Fnpk0FqIcGjfAX3Z9tERGa3yT5xWLHta6cPmJ69icIeolyVEVu9Qx5kpwh1%2FXr%2FZJqknbam5HUr6CQjmSoAfklltOf3P7OCpSEo8yPxVRvmQ9UDQ0s9Ti8w9sG%2FwQY6pgFN%2Bcfhh0sQzBQwMmyIc1dGCQRCv6N6FLKGU9%2BEb6Kuxsa5p5W6O1du1Y%2BPvJUDH%2Bk4B7nH%2B%2B9iPXxQXsm8mWFzaSjW9TWqrUX3KyZP4qf1XkYqWby8lo5bMYcvfh8IEl1UPWpW0eEHjSRUxZ4eclTeB2RTWU6QT4pUdW90x6sc4TtGrBRlvSn5GmGQ5%2FE1wfLQ7SWQpfc1RzZ2IAlWPO8FAB4Mv7VA&X-Amz-Signature=20e5debab9d155c16271a7a7897e5ecd4357809a7b97c99c3e8ca9ab4798aa66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFUHKDSM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFiifi%2F2Oz09Xg%2B9sQPEuipaKLsEwZbqnRhFr2TmV9iRAiBfH477NC93kWAyketNR57IW30O%2Bh%2B0rivNy5MpfQudgSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgYtI6G9ZUbLbrylaKtwDxP6r%2FYnfqWWsfw9A8VmF%2B6eUHbq9sead5mup7H3FF1C2Y6%2BxIpUUggHRffQxYCKxskTRZCbQlZy4E4TXcZdhde%2BYzHvu6fUqQ0yrdviV5Jv3O0rzEZNNVCE0ZRtP%2B10g0vIc6EnJebrc1EPxi7KBMNW6W5d%2BDe%2BSSCoDEMvhRBZuoTG9Bp4KVNptkP0ILvHUzSgI%2FD27bi5qRLT1kbbgOOi65QX7TI9xv2UzfkslIgPOeJW%2BZLMG4R23chvApMPPy3xkub1Vw7szouFX%2Bl9ng7%2FCbu3lTqEksGsMHoT5%2FyQIfvmu0DT1cppP6oZ%2BNbSJQd9xGSoD0qpt0rm0PCH6DdWrCyj3bv%2FOoE4WxV%2BRmmajvwHx93Nd5fpF1czgS61nh4yW8GiKotUMPtM%2BtHMVhllHeLlWT%2Fr1kz%2BYP2mCDKAP1wZBCeq%2BMgsWHIxrFU9BzOEKpWW1EQiclol1O9tL%2FbxsYRWHtiLDMXmiIIDmuwOHDlai7CBsq%2BZ5kAOE%2F24lDEmd843Q199J5%2FYRJtpZTf%2BMDbS9x%2FnlG5n3vSp%2FxTiJhO5Yq6gaIC9IfkeucOEMp2Q%2FehclnWKCCmE3mkLpccjMUtndlXzCV5eu2%2FnB1SWOhbB%2B2D4BKNgnapkwgsK%2FwQY6pgFK8q0wTlV7T36v74UqsfSIjwzTfxBV1JrNTev6YPPkQbGVZkHcuNcKoqulXQZ50pZEvzaHqZzdcYN5231qN0t85X1cujL1YCSW1v38Pa18FDcyEm%2FcV9Z%2B%2FHyLK1lG7VE%2Bwca6cyInZv7Zb5wI4LwEqinXRdMrDhEMg888sQCrkaR1%2B5k%2BpK6mk%2BM5eKo0AYnQr7GhgZHGux1HVrTAw7WTiqSVsb0S&X-Amz-Signature=b2c25b7ede397d631db070cd79108c14c3f8bc97c2566ee23bc217a61a8824da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
