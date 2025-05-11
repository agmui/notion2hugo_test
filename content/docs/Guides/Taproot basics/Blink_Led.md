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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OMQIOTE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDjAUrVO1i%2B5s8Rbl8CjMhDZSwpdMPleDxq%2FWUd7T3iAQIhAJyoRkXMVtofvqoAW%2FnedZl4PW8%2FRWDzKkrMfWTA1XwZKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrviqUAtCAnU5e6w8q3ANEkJNV52Rjo%2FY%2FoXYjQqDSr1nITTVRkNgiZ5DUKETxNDo9uP%2BYT6m%2FDMPrP7rv72tiHcZDaBmmjw4CcYGOoh1obg7qzMtxo8vJCRbDucFL2yod1JrV1%2BWVUR%2FGX2DQ7CMWvHdBiSSimrRxSQKyQ%2BDBbGGivxbj3NoM9DgY62NgNoMY53BxcUkbGtAdCpTR9MoqNv786PE9RmAeRmgEMcwxEjKkUJDhzV1ePUkurcOZiRqMzXFg1TbDqaagkIozNXi3Z99uUVv%2Bo5UbEfZWbQ7pCqxiHmdl08Mjs6JKjX7brwLrOLMSni%2Bs6UrHhBmUF%2BCrX1lwZmrHbN0ZonPHokZZG4YdVe07gXhE8AW4b662U8SSMHvjcG4TTZqn9ohhPAQBH2EpkSSzs1G6QtjZ%2FYWFqYDTX6lzPzyDYKKxJvK5TVvBHVS4MLQmMdm49tDxFMIB9EnJaTeMyfdnPBxEDwDK10BSswWc8sMRa%2FkoxHkuA5gPVqhlsdHcWUp7pSzj83UzZSVKW4BuX7W7%2B0R4S8bIMOUedQZfpbcsFS1vMgkIZDRxqG2ymfolIwkUg9072s3WBsNb6DIdbhoRMT3VD8L4u%2FAS6S2FMgOUWkNpuWnLVDbHeRAzDhN%2FZSTyrDDp1ITBBjqkAQ7tYbNBkT7eOfN076yJ9zzR6BMH8kMDuagdhezPFWKIG6WhIGoXiQltlCY%2FfbbwZnYN7puIYyqj8tfVC%2FL%2FXT%2Fsi1YXOa2u2X60tPTBJdmhO8CyymJtl6LkmEos0TbSPbTW3b%2FdpOBlzkDmDRmM%2FLizBYv9bA5ZkMulCReR7ad802DNU4vFK6MDGUbbN3LU4WjBs3fSfCJDNENzZvLIjHhBpyYg&X-Amz-Signature=3794a6e4a0e955511d6478153c59dccf8c53ff0fa5f8a3bd437a5fb7a1562a5a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMOCW4J%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCcDFJLz%2BSWrfhFNrHtXkFmUG%2F86VEAg9gbV%2BqNTjG1YgIhAIkarB5T9Vnom%2FYz2YA%2F064e7J4doYXjP9He0lWmq59rKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD2DjelFrIATdPY7gq3APiX0A5QZCdn2nOV6jVuaY07b1soy%2FN1DC6X5WvAT3ok9gDEYLxqJtJz2Ncaz0OTMKbhpQUJNQGyYQdw%2BF7nfDU9WzYCLzy7eszzh4%2FgVfJtRq%2BPDCu1x4ZAFXNGYzkc29GnLXm6tZMhAKZBwnEwkhREq0xWO65e2%2F%2Bf%2B8r1%2Fi1s7yOWRR6RllzMmgQ%2BIRaMTRLQUH3ew3LQhlcC%2BJW7bj8yOnQM6W17rdSTpxoGmGNn7rxRSg1kjPb7V7Mn04K52LMEFaB0eg8TVW1YKSb1B1v2PoNs%2FMlz4%2FlN0LMXuU66nxP%2B09TVMnkW2M%2BtnKs88uGJLFcWcgFldyZpXELHStk%2BOA7koxh%2BY%2FsEkLSDTKcj2K39l81hZ%2Baljt2zXHBditmGkh6fa3EBRwcjewf3MkxvmJE9GBfN0VcYw4NJnlq3jKAAzdTQaKgmido4%2FA2%2F8y9PWGyx%2FP0Gm6Hd955kTU4nDT4CuTsmtHWgtFY8twjk1l5iOcqr6ArCYWkNLYn1VwhG5QfuBJDsQhgEqU9d%2BBO8Vxr0CeuVuRJXXtTujDD5cVGfbi8h7aaA9RtA3Si2IToa49QkIgjHgtp303c9Tb8BlTlPzbugcJUgl%2BJ2b%2FYlfjs3iwDGBz3HIHFfDD91ITBBjqkAUfITVMA26UUF0ixekaiOk%2F9oinhiMA9FrXHwQBcbUGbldNOtuxvBUak%2Fg9AEtjFXTP3ShVGnj%2FLe1cJXC%2F6PK2UigaNl%2Bsuj2zefvlcASY2ZubX8pQwerr3nO%2BMCTDhhHBBNLcHny2H%2FfQayN0d814yZQxaiPQPv1%2BVOsJ%2BhYIUEmyO7YxE5aqDgZ7oSMBGyK0MLAs52UQqhpn98nFf2DUMSSjM&X-Amz-Signature=3f03be735395ea18b2dafd2082e3a8a34b5e0a5463b32be78abb856327ad0af9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
