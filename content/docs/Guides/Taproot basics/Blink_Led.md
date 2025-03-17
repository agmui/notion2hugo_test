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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SYR5NVX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbNI2Ln2R2W8KyRto9zOpSxLo%2FLOC9tS3DcUS5qSvxgAIhAMM66GFO42GthD4KEq7Su0LzMx7DN4I6HyypLIF8TUNkKv8DCEwQABoMNjM3NDIzMTgzODA1Igz8lsqqm1%2BLA7IEnAMq3AP1QdNfSsAFLMiQwki9U2nUqFPI8NgIHOGZmLDtkKliEcaOTKmVlYNtgc6PZYGikZQLhFXWua2snUliiynEDJTkO0wqvSoPg%2B9xy6qdC69%2FXELvr7KZaRRfCm18WEjPoAvOo7KGcyqGbt2s9BvhjcN9ZToFxPJ9mQFLuxFfPingqPQNgQ2222Y4JPDxWqw6R5LwSVkGnEg6RFb3KeaSBuQaoyvkWX2861lxvk2ZdlxSuDodNI6x2IrLSEruncn9kPX7vEUFG4ouXPO%2Fzhqa5XhXc5pdNu%2By40nL%2BKSjuoZeJRiH1br%2F%2Fh6PMRrEjkMrTypbGcCE0EbkOEYUEZg4DGH302qafonJoRGDEErIsN5jhzJI1cOi7sPT7f%2BrgtDAUpNSVP6M610Z%2FGKizcr0q2ZsqNqtZ%2FTAmzBRgZhfZ%2FW1NvR9Xh91COKdumXXZTl2T0VO%2B2lsWLw73%2FbSXV4ZuK7KSAuYmWNZv8gGW%2BSe092ibpL8RhrkKXxsznDLQdVM%2B7gSbu2BdIzGk%2Bp%2BsbRA4NMv27dF8Bo3UxRU31vTQl%2BziX2cyowpB9pOSZSR1nA%2Fwlj%2BdlJhCvOfvMdCtxuH4%2BBEQUwidUyjrhsiRIuJj%2BGCDMsj2J0uKj5TWg0wpzCd5eG%2BBjqkATgmQOxTa59bkX9kwzh7WWDF4twLUV1wSoVjOn8EThrotU6%2BAq9v29TuXHIsFIkBsSYYk7EK7F%2Bl0owIYkXf8vG1mztjc1rdzGbWBu2JcjuVmWZPJl1ghcgLTIAJczrc2bqzv%2FrmBmZbrjH43ixSI38qZVT9vrL8N2SSRHtGGzu8kQjIMlUVhvukUODE%2FnHx02wa4MuRBpYuV9HR%2BvEu4iYCSILh&X-Amz-Signature=18c74048ed1d4fea7c5adedf6852dbfd5c269d27e89b5f378432d86798a21ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJINDNMJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVzIp8sYX3NYjAJFurhp%2BVpXrwZovRpKQw%2BZOlsavMlAIgGDmEVahyLv9cPJpd%2BgBvRQl4JgS3M2XKc8sqfLCEivgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNoKFhKFqSmhbrgIdircA3GxYDcmh2G1YwVwfQOZxeIrFGY0KuenP72FUza1kWDNk%2BCwuBsogIubLcpQjISAHRflHRaR7B1or08IIC%2BEsgXxn9Z9QP1osn01sqY3ig6dWxtmt4rrGFxHa5DZG7e2OJOYImJzjYyMxHE39VONydbmbLrE5aRVF4Ge8rU10qycYJZQdxXzaG4daJbP32iI2Td5eu6zu%2B%2FfrBm10ySWYXTgYp1oMWg7tGnXuR4wJtuc5BeTNFsH6v%2FWoS8A2ted7v2VwVpO77XLh9%2FUBIcV99UGUSMEixrkZWxRWeQ1EhK0q1A2MXEv4Nw7sJy22OknlT9zqjm6DE38p0mL6vQ11hCncW%2Fd3TQ4lkmMAr4wJwWndE4dwP6rLOpi6TSWGuxr7XaCDdb8SkUA%2B%2B%2F04iAXZYnexK0KEDdMJYNPerEgCyrUj3BOsRebRd0TxL8ypviv81cGIwrb3O4CHptUM%2F0PyG0B7K6E1bCPhxwvlEiQ2aCvLBlaiPtWVcvMCYBY3c0yj4Fisyx5cxRUR8CrObl4IliaVjVeCG2QDeIrSY0mJ5UlNX2vEOuO2H2Rst5KAKLMyNgbEBodvyFnGxHvyNrXduPdTQBLEe3xy1fmf7olDiymqdpm2mQAbogGbTiAMPDk4b4GOqUBiizykiJ1nrO3zcyO8FgA5eq4JZrm9h7Ne%2FBrWoFG5GQ0H8dnFMh3gFumdkcrpmLJaGgWJzGF2I5zD%2Fq77WljQaYrdNbeDjgOffBb5qCXp%2FfovgVhJXqI05%2BkH5FU%2F0Tfp7kyStb1CIPmvPgoiKR93GQCQlJu4FC1BxJY4dqnzYHW3YBDHmtqefwZYBN7HjmbUY70Xq2PurEcYpc51yROjbUNGDun&X-Amz-Signature=448114585268de5c310a4fe7ef0001719b4ec04a48fe20d1ee8835fac23e86ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
