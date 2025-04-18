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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBVMR77%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7qLW9hV8q8h5mrZkephKmNiRTR1HxejSoRakelRrDjAiEA4eZOomoOvBu7klguOp53B4JnkbzCQig6LsPMEyCety0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOW%2BD3OUe%2BjoSoprNCrcA5E3W030qIejxywePsPYlTwzY2aKE%2FtNqCi4VuDTHqZXeCdQARdXRwjCpZjxqBJ4%2Fc8n0pSEIZScJa3d95czEggXzaemJMANPgB3dEKvPgT%2B73DGgExKwoJGTWrABvyh1Ec8rAOEzbCx4TrpW1T6kioKqmGp9HOVzCGM5F2ytqmx4XfRPDDEESGa3d6hmb0lkGM%2FbmAL%2F9%2BL0k011IBD7GpQnifB3v9CO2JPxXGI%2FVJNoOKf5Hqb6jqyYQnxKYPk9xaIee4HVWnEfwqQ5G66DxO%2Fd1q5uqjNd8N4Xi2bGRnOcTBTFqYdiMOxrNEdXudrGFVCPh0F8eJApc%2B5%2Bo7OrAo%2FfWs%2B70%2F8FhWeT%2FW7g9blPfl1tBv%2BikN5JUSIe0fkc2QAY4tJOWjWTCIi9zUtx4wbBt%2BFKiXuuzbuvoHaxOMBZWzjmezyxP4unY4HbQgChpdpEQqtpBqR%2BXUpfFKyT4GLmou8aS2gEVtOXcpxAdCMgfn4wkvG4OdkiEKwJHXy7DOzpnHtJtoJcADOUv6wG9MhLVyqfACa9ceGRJQ8%2F174KD3L8XBYTPjBeAMG5u1s8cjfAK52zhtCOwPQIgJOP18pByp3Hml7uogdKUDndSICo36cBJuVStZ%2BgEcRMP6siMAGOqUBykUUPpkWyK7GKbjSGGEoeqL2i0P7kn6FLS4jDSBFdl4a1%2FshTLaE86uwEv5wLAiTwcb7LawNFtkLTpFWItJLexJa%2Bw3a8ij64YEEK6TZqTewZM5zm2BcOnKwjnXo30alWWfYu3Fvxu3eFlB980Vh7ZREkRSI7foU3%2F%2F6LVFSJA2jOjsXzULL%2FU2d4yibZMzgeueIQRV7uhPPjmO19VsQ4NSZSMzq&X-Amz-Signature=5a7f5880999d8eff61cd9e1a19c1b61e540332d5c3f294a61fe863ed09ef4bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CK4T25R%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPhVuJ98O62Ku%2FNKf14w7smKd1GKfwzjxzwxJb3HuVaQIgA9AnezVo5Q1%2FUtayOMCQYY9yjmaDn5yAXd75ZPlNZUwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAkxe3r%2FB4AWMQx3circAzKoBFyq4tRy6lLiRkk09XT04BeEazaDhQpVFmTnqZE76SQC6cb1aKxRfNRsImQZua5%2FHY8%2FqsGlgZVeRmD63cIvOPArDutOawMAtPlQOiuaaRIiG5d%2BMQpydfhymzWsnh4YSg40oNpUNJAgZR3qWY%2F28x3XyaUuvE2ipMtC1e3%2Ftq03RR7vanYigS9wHbn9GXAr9BdL%2FU5Qcr7Da%2BvCn8fsTrgsajkmjK%2BqnGWoZe74sFjsn0CPnWTWOLrJQp%2BVxIEqRYyBdIrY895bD5QVcmkUZwbQlHXOg0jDXhv9%2BObPR4izCBnR9mSzM25bGIH4bmcrIFPPWvN6Uv1iVNASNcxh6BQ7fNQFDgXQycGEVhcQK2HbaV%2BIQ07O3ww5JTqxmOYwZJ1%2B8o2XDPW6Rk3kTMIRdVB6vHiwOvB8ZoNbePxKDREtLubxEC2q139qfqOxXpQN7gywB%2FIEMRXPKFYNzuahSnDQQH1P%2Bv6F6auNnREfwOgrt6AfzmY6A%2BM0sIh0pNJwrI8mcf6IWIthb%2Bd7jERxLBVddnDVguuGMn1Uz0z0Qf6%2Bev94T%2BpmIjf3zYtvJmLHIc5%2FnY3xtYk1O78PIi4YYqkB%2FhE3YkMO1XTCSDzArP2gQ%2FTJ6AIgJaQ0MJStiMAGOqUBEptGPjHOY%2FOt%2Buf4wGj7xeGBQfVnkEEk4mgLeJAzhRd7FXSHFdbP2nY4NtkghqfKQd7zc1gqDsj%2ByNJiTP204eigqsnR35E9Rlns7Z6sDP7CJABQNSShKfFU2jeD2FGLcQv3JM7dmILXHYNOFGQ%2B0fs42DXjbqpAsNMuLvtR2TY9VFJ%2BiruqOe9dnfGrawsBMOolOfBHgwZ0y%2FEbYY3mpbkxyFMF&X-Amz-Signature=5026eadcb51b830a5064c8197e4b3a80a2d1105930ca1103afc34dc6850abde4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
