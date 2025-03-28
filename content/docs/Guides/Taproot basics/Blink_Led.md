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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7UNUAJS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKEFucneGGWD1EzYyAg%2F%2FJGyIGApLig1Li2qRmnIu%2FUAIhAMpmozWtAfQdf%2FjoiqQTGZKXyqZGNVex86MFbP7PUflRKv8DCFkQABoMNjM3NDIzMTgzODA1Igy1YS%2B1ZkxuG1j02CYq3AMD6UQCFp6b1omjas4BL0JZL4O%2BJrGnua1H6Lwuw3%2BAmdWgaqrlgmqXDvm%2FHMQ8hN1bpITkT0CN6kfAGg1QKh0vim9aNBfLeSfFOb2GJRV7IjUj13oMdh87L6UlIhCgFStVYmGOOSBxKzcY29puBK1oPdLiNRBRu%2BT%2BVUzZeZTUqzeTvFbeaDBil2CVP7Gej%2B8hgimY6nNnNXk1cZAzwq4lWZTMUQeKY9Jmvnk2Fo5twvVxBEZk4SpbW6GTLOud7LdRlY7T54tthkT93vRQ3i33QJgNpG7f5kF%2BkATuCo0Uag6RvmTqoJ1QViNeld7kTTG5u6WlX9offiJwmIvh%2FICpo2tqfeaialXNhYdq%2Fung9N0EyLDkSCTtv8gEOaqscvuvfJuFN9Um1emM5JOkGLrrtOLtAsytYNmyPfa%2FX8v%2BKZC%2BQcS32mqboKyrJi%2BZJ%2FeRlUw156PVXxLl2yruscqSBoqrVgYOkGYTh53nkPLB0MO3e4IsLHDIUuTOQpCrZU7jcSd%2FkAYkVw6RjSTqCda1TOTAGaPiPejYT9jcVZ9rXtvOGRQobE%2B46SfPnM8t1GsoagSV%2BqmyHqIn1FUB6MGMOLkEiNOqV3decWc671W%2FBKeMbpNTHcfcUPNa%2FDDlo5m%2FBjqkAYHSOcavHBbAI6%2F6ptHYA8KRnkeYD%2BiyW%2BC5x%2FwH5jQIOhflx7iiEVQxEHrUoqNCwVlNdmcSdTTyDLOjGNGXn5sAN7LtYuE03g7y2AZmAp7YZnTiL5LwYxwbo2SnBUQtbJIgifNeqxkkYTOctqVhrzZJ9wWTsUcgojpu2b%2FU9YLi33RHlmZMSNP%2FwJ0%2FgsCO%2FjBtTk5F51LKYF4%2FnMlEYLiRUFU2&X-Amz-Signature=091b6a8fbd73cfa5a50afb64f3c58add7b6963e6444349b7a5b26e2945716021&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA4O42GE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXUoWRleZDC7fI45pnQAl0pok2PmLIbLnLZcRtrM5UNAiEA7PuYRpWTo3x4GTfEgGfzAyzLwn3WXs9G%2F%2F6wpuHn%2BC8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDN5zoaukl1FHdUFzpyrcA5CzZJURjFIruwmdyT1MugvYXbnhzkMOZCb9Up0vZjanoIYcDtOr6hb1UYN2SqncoU4CdCejQpUoFuaMn06EShJDrusAgaSAU9LUQ%2BKfv8Lk4noq2sdhoHDhgAbIGXIpQqOIbniu55hylYRFRj6DS8QKEClP0uf1xoUeTSnTDM2jRbtCza73b5HvbHCn%2FejXwo03DUU34Rc35leKebCirqRkCb6gMBv96TZ1fnx0BPWyWBBipZRIlBmdwgIcNnHW4uvcoR%2F%2BguRwByrQAFHekwY6fXtoETf%2FP%2BZY%2FiT9WLSJq9t990HM19SdqfH8AZKNCTLbrErUPM2DSJCOniSuoYRw9U%2Brw583NlBLdnUEz9QLauzcxnKDFHUMvHUH2EcUqjkmc%2BOi9hjVdkbArKL3D%2FOE6gwV%2FvPMGjVOy1DDY%2Bi1W2nIJ9yPUt4t6BNnpunZ7G5s0kF1bo%2B8N4KhrrkVez9tKsUSdm9wYyX6eJA%2BBbxqoVASyf9ZKuWE1upG8frbef%2BjH65d5GKwzPbZ3rgG1dizEoGOMfMWBxiGLfZPTMhBUlELlcQbtHWnoxwBq%2FsPS4YYGUX%2BLBFfq7pbTPoVYbvtBHi4jD0%2BAhICAxUpw%2Fjjsk94Ahnv4UYhVXU3MLKjmb8GOqUBjSDNA76nrdhVEqOrg8egD%2FthisSW0Kxc62tKuJcVpncfEIDV823hk0fXsBJfr7gcNY%2B0IBcsggFdZYN9FRHQLQl0WdkcQ%2BA%2F0Lvlc3ambdnSPCpa9GwaQXh9rL7%2BlG3NcvtiDY4EgxpbhG8YBJdiijbolBhYnxDJ3jsofJvBZTxdK8KKrAcaTfbEsMiaCKl%2BTBssRlboxcot95z8kcnbPA1EF1Hj&X-Amz-Signature=7c000dedb868b6eca6f4b6d04329acb3a038ad2e1ca768c9f88cba75e23183c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
