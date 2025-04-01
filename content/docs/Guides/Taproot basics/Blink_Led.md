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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGYLP6F%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIC4wBRWpsSSfFK15mbn%2BLlrg7%2B6Sn0aHM5JGE9UaVZDYAiEAs8QIZ5UxAjGY7I60cYTONA9R0ehU9iJgjfputzzFR3kqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJR5%2BTBsLMoFiH2LGSrcAycHmwwLF8dtPXfbiP8ICWjlG4pjXzxwjYWXrR7wQFBdUCuDw0n3SlgKHgfB67rGCciI6%2FISKqyVMvZC1ibvzclIueAp2fhi3sO0ro9ICv%2FL0ohmxFU7B531d%2B7%2Bmr5pflxVX7tRrk4fgVl0ztEAxfLK0d0G%2Bfw2ZxzVbFDtRsLSeHo9DxT%2B50cyU7dxEia6dWTLQgE%2B91G35wo7wVnH%2FU2aw9v2DTbV7ut%2BxvsWchuawiO%2B5EOc5u%2FnoRzs2acfnwKxZBpvsSwIUbXfy671EngKz0AUTfbkCcbjfDcJihM4qqs4Uvu6nxSHRoEH%2F%2BtPpgZqOr4hCrkY6iKvFx3394pUbifpAcNv7Ctcwwi2%2BS8eNWQjKRV%2FaOOdIGStdLlsIj3iOvUrjcjNrsurM0oNELrejrwPeJh1B9lSqIOa%2BkBw6vO1jR6LMjlfcRRgv3dubfBteW33Uju37ORLc1GTPDIKiVvtY5hoNVNKIeZG3jzIvLWDe3Q9Kw9nf4NIHphIOGaYS2C9UNU6rY27mGVuHMQfqTRXATmKnjO9s7YKj5%2BrUzw1gBniTRSkHpbb%2Fw8qVQTvcet88UyzWRELes02uJ%2F1yktyzDk%2Bye1pgPMyJJzMVL2%2F%2BiHS53DiZStVMOvXsL8GOqUBGJIuDOlF8H30BEgSzfYb4UxyB6t98Xqf59zuOy92ccs6TFHgyhL7tfoFeaVqcc1OajVwy9IGr8QL7lGiix9zQfDn4H9ojSNTka1cVUYAARqCgiHYWgPUtcULb9%2BkCKxBc2NQlHtuCNxxlfYgqStyeouVIoYUbeGe5Ut0eTxJklE6U6w7QGWmD%2FrPvQe89tO5kE9rh8F0Z9acel1vsbwAgFPvmY8n&X-Amz-Signature=0821ffe70dfb8d0f02615e9ab60a1d7375e784d8b2995ac0a84341ee85189e21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSVJYK3Q%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHzxeeB%2BlomVphZ7PF%2BcfYCUGKijtk0%2BMfnO9%2BeM%2F26sAiEA8vj5IU0d4RoF4RVJ1JHdWFcqP1W2pCr2RJog5zzXNsIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0u%2FVK9M4FDUGh3HSrcA79DUl7PnCeDO0NcDbE1VyoLnmh9OuRvNCNIKW4wDpJHLre%2BaE8PR6Z3RQYg8wKFZbn0BXgroVcwa%2B%2BGJjUKa%2B0ZqbMHt9sVy0hDFS7G0OgBv5ruFJhI91T7%2FJLa17TiH0Wqs9%2B2rlHctQH9CR6hOH2ZhpYVl7Ksrlnd57wWn3PWEEmADnTgAO5hB3NirhJvlXa45GsVPRb30DeAw6Sk6B9g%2Fx%2BxCbFnoZiDE54qxes8DbXis78JgotGuzUTG0oWEG7vZE9lUya5dFQNOiiPaFJhXjiloXDkpZr6mPz00FlRxVavTosZpi3Y3fS73jl%2F02%2F58d7UbQQX2311LeNxvf2tWnaUuksW6Uza3%2BRth28eTMfAWH4DgmfN92URV%2FJCazi%2FnC522gcs%2FctlAt8nIyYoAJuUa8eX5QOEvEgSPbP7QNrzeM6QmaXlQSokEPKGFA5DMK2l5y%2FABxd050XiorTxXw19Qu2MwJb%2BJTdgXrnM6qy2gn9IfqUQkl9ZkxR4qOtH%2FV3KpIGWRxz3WYw%2FM9m0PwS5hOwHfTdkjPADhFaLDnp2nJbYcTcRnckMMSwt6iP11gFFsTqBMZkAgntwBwg2LCA5IvLaK%2BHT2MlGze%2BHbm214qZPfJ4jpjAOMNrWsL8GOqUBSUo9IJo4CcrraQthInw62G0IdMHO1rISQIHk2OvSoXpYQy4X2FzP0iHGC0iuq%2BEf4a4%2FeFDbsKKU7ofUg9Zz6K%2BnKMmuVT72IPfR5ovGNWgdeLZCfb6APXPKXOGyOBm%2FhJD4tvSCfctKL3ZSVW9U9H4jNMJYA%2Fa2P0QbEWMrh6KA41MlAVO76tidKXDmZTO0KMv7H0nBBYOOBpIO1jWS9TwUVvBk&X-Amz-Signature=c82a011c2912299337c008128b6dffbaf7e4d01daaf45adb1a3884b8c4463b39&X-Amz-SignedHeaders=host&x-id=GetObject)

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
