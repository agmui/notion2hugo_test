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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655P2IKKQ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNFHgTHIYdlprKyexK%2F4%2FTdyTsku0d6yOBaU5sHAsjnwIgbaUx0p0vKGchBfPK33xXcy1gMgJaC0%2B%2Fkco2cXN8U6AqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJnrccKCkd4tkHaMyrcA0lm559hGEPvGN94W%2B%2FNjzP%2BMJpot41l1RiAZm7ZTznouruvv42TJXvjOIWZhSdYNUeXQaBhastYc5ZYxEQjUoi3pnfDxAQb3ztdpDAMbjha1PslfSxTfCVJXegHz22P1uSxVladwzt1RRVNj34QlYgirlWTYA4AHSkvzdECaF6b5l5DCOgUuEBGC7euH7jQerLIvlyKdJPK2o%2BlUdbXMvmuhE3eiaQvVE0yIcruXuKeVrxBotU%2FJnG%2BSTHIhMsxEGcBR5u9BvlGPU4F31YW58P%2Fx4xG34XdafujHy2%2BrP9Wq9khxZpZPE1P8%2B3piW2xKSFNCYOIg4n8Ve4hgx6W3HpO6TXPQ2VUyzDb%2BSfnhVefSaWdkHkRFgcanvsEhA0TDtbVW1MzvMywDn8qyUioycPEwHaSNjoY96hsmpt3r%2BDITjgJnERLu%2FR4YOkSWRS%2Fnx%2FIljCUXFE%2BCgqd4%2B9he3bLLHrPDGMod%2FahvyTbM4B2VQmVOsGg173VtgXS49ggpMcXbmmdDWtNow%2FnU1MYmsweJAuUmBuzDoTjsKbYJuvVQH8rH5f7pugorlJbbIqQmBBzAvyi%2BY6oXCzoejkeWAkUmC8agzlW2OA8u5p23lhvn6cTv6RRe%2F7YDh%2FXMKm7hMMGOqUBJgRPNBUErI9QyUu7oGR%2F22ZjuBQVLRrbVa%2BfV2wgoDeyt72eWt6hIE%2BBaH9GSZJv%2BAIQITpH3YpXSc9poc38k8e1foSU3llp5aQ4%2BYS9OrZoN0%2FCKk1eEDSKwDceGymhQqU2ewdipmdUh9H59kZMudagchYXJNhhSfYjPxO4Q5cQDIvYY83A70gLntmGQ5U5%2B%2B%2B33lwwh9Xw9Luhhz6UuliCp70B&X-Amz-Signature=7501441ec322e861b0c10e17553d9dd20e9fbb760c6f37fb7b51b7ac9861b445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HGMD2QH%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUeb595ySrNmLkErsYypT2qUr3zz75SLvWYSxEtOluEgIhAPb4OOBqNT8LNDAGl02BNChai0dBX%2FagGi5oj6DGr2ptKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdnlgQe%2BluJzAOyjYq3AOZrDcQectAIdXXThSyGQ0mCOhDc62zCUBMVGj2kzjZTf5Fbbdw33%2FjByPVyNKWWTAdCAW3zbc9HTNF2f%2Fewy20vbKYhMUQClSKxjUuSC2y0OXYDebDuZXPe7IiWLAqNpCnWnRVWXe4lkI4A204QNFf642O1ga2O5HhUQqqZDatVQxIxiCF97KaNVQflwNbG9ziG8PSUseG8UJAZoO5QsAq%2FS7QmglQhhKKxuhjYxOc3uIODWRCdG2zLmkQZCQNKkzBLqeyJaNYWhfTar6t2ITsFfCSOm9Pw96nNkT%2FvvPC3bvU2XWvybHeIIYpfMqrs2TF%2Bmi16Cr0MrbHqkj0Zoa4XxHXqTmx7kK4Ee0vkKOf1460cbFpRpGqobbMBqFEqs68kZDo7VK%2FHkske1Y8Y0Xr%2FXazbGXYwYWAwxKqcKDA6V7hXvLqj57340PpirbCGjIIsl7UYHeR05KdEVwg4FKt%2FguoQVyKWWY%2FVStEcXXafHvX9IMQm%2FhMhlm7f1BqpqtSG5h9JTXhphDGjCW2FLKQ5LtFrXkMTJNvyWJttQ0mwP2QRPUEsmf3%2F6oF4ZRNPLYZeeGTpkKsbaq2%2BdNGw0Ilm1qdUVv5vi3mfC2z4gLuaVvIHgrES4VD%2B4%2Bo4jC3u4TDBjqkAaFaGzsfC4RaDruOps2kpB9omeIOKbw7A13PhutLNIuYe5kafANvNAMsLN7ysr5irK4V4jEH9uSOZzXgAVb4VO0jr5IOKPBgtaXGR8NL9aLxuQdod16JASdid45s1jOHNAvmluSyc7AbKCGCt8aQVjJ2d7gZIZMyb91%2F9znsKvrNPCzdAgJdaVs7qyXnDFY9mNY8iuJYSeYsvP8esFnw6anqHM1N&X-Amz-Signature=6696f3f050b5c75495950f8c501b7ddb11a18f0857e2333ef9d16fd27f6ee274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
