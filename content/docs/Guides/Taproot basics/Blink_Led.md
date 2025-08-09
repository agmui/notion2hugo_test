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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765VIO6S%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYF3Kl13fsaV6IthaFohkj42pEoJyUF6kWX%2BTFIZCwzAiByepe%2FWhY758VE5Ikmp1L1b87IzID9AhC2ZA4xl714byqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1V9RfbZd9qClUMxoKtwDGXnbspnfsh5t17XgfzzuDp6KBBaM3AUliykybfrw%2FhZPNz%2FS9Epad3h2MAPzzBXqr6QkfkfULSp4ZV241w8BLH%2FQhnQgkJykm5FYTmjemlc%2Fjzm0E4mZzYWHIeHRrmChykAI5I6W4LAh7Jai4dsKii3an4qDyLLcCid5CydFIrisdjB5RUnVz3E0A01kB13dAAfqitd%2FRVhevXdKpQYAXs6p7zB%2BN30NIgOFoXcrmYmc7lOh2n0%2BP1d%2F8sxf50ScSbqphuF%2F1JGKdhFt1JY6RDdOkf3NDJjCLkWkLMHjy%2BVLpBOdo5VU%2BLZAHiODS%2FJ458sIF7lYI8oJrswrdsjLW5Vag62BCRmJCnbDg7RUhuVMYgBKBPw8JgLXIHuXjakFNaxvs6MlGbhk6yC3ho86c%2BMGVYITiNmIEYHWu%2BXssyY8Rf4CTs8uzZQ%2FZeXzucgGWHglZzXJ4%2F%2F7hULsGPbrqkvWKj7sf1l%2FnyUk1kR%2Fxo0ahKvyL9HSo8CgovX2ty9JUWmva8NyqTezsbgF9gyIjcqbO6JHuLdy9ksobEtyHUV9fOS9l4hv8EfeUwSCloBOVt1NZxwD%2FavgLER3hK1IQzIlgYTnjrtdBx8rxUyOY1%2FG1UV3xEp8wvriVfkw8sLexAY6pgF2%2FqzJ3fNlMM2N9LKVSIJElkDIHz3z0I8vFBQ4htlzOoQ4uD2kdN9K%2F2filIzmE%2F4xEg3U1pn38VEgtFHvWtTeRIYSfCjnb3MVzmLZRTxB8maDbfy8VRTvAAz08s49hOrpm3jpGLCKS2kjQMBm7tPORgxyOI17yqKeGjMS%2FzUDyhEb7kr0VoQiMEq8TQUCrzR4HIeHaDpClUqHenidRpuTKIOJerUr&X-Amz-Signature=8a16731ea0008794ff9b1dba8ad3266d8113383aac6d7c1a0e42ecc251f0f3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRPCOUAI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0rIn74jOuKbAAfmRO1u0HT1v8I2hRB6kqjfaqy8UwzAiB2LeVSaNi1yzQOk9a4KI5xa3bUoR91l1UwUadnrTaCSCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMND6MhSeRu5%2B7%2FhiPKtwDBA4P5L6XOvUq50Nfcp%2FkfPYPBnal5ZZSVzD5J6z1ynYNKZvqB5xx%2FjqlAfnUIYz8%2BPKuD6pIygRl29S0vzy6g1orOvcBVqjyD67ifz3MwMLYkwLD3v8GxjaqHmaZfe%2BmmVxCIbJMNKRMvwd%2BQj3FiJDMtxmjleLMEmBVMS3QkRlkzyCxLqHVCeDPj8%2FbS2ScqDMdBMgZk1Izudn3GSscfqf1qgquXC%2BXMwf4aJFDNB1dGDsXVA4lwYu45AJ1pPXBZPnwBMUwLojDK8FaDeMbhwoAdLqWKC5K3Pj5u39nI6xgRkbhNRPi5WslR3oOpnfi%2F3Iordag6Chkaf%2Fv4jI0IAKNBU1QJHoxIh1kFG1vpPY4OOIuux4bY0Zbc4pnrPydJC01hZvOimCrEeT6dYGJoico19BOzdinyGqgMLJvxDS%2FnOP57h7OMFgXWZyA6pYISYvdlQ8NfUX0wuu56Fv0pDZ2BGG%2BuiljQk6z0C5ggF5lv0T2Tt1UR%2B8ux3ABoqTO5wVpUfFEtixJtQayeNMRaVdLaMZzIhiwG5i5Mg%2BBTOCSqp7Sj51M9u1EPdaGZxrWcevrFxM%2FJeITNqCsmxlHztNQH1LL1lBBrdN2IOqohlcMoM9TaD6RGftFT9swhcPexAY6pgERNsXNO9dArsmqJB2TjcHmJeuyIRRBWQmwoCLla5PmR6qsan0bfcs5SXavWPPpao%2BrHAKhdVY6kE6kYIGsWBhF78Mgw66RXdg2a1lEhsjRSykOjF2XjITi0CDUAD9ibZa84kevfobDppzqcyfT%2FEiG0hAY40yJhzzrO5COIu7s9A1oExJdzyHAOIKRr8mwg1PwrOVKCvK4mjzKnHY9qeX6ELB6T7Bf&X-Amz-Signature=0ecb7741ff8235a7738ac3839890fe9f67a447d1b68ebcd48168b8bbd3b762ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
