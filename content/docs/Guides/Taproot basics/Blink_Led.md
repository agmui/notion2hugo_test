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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXXZR6R%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFmJwUtRwpo8lvZu1NszYuQ71d7IqyDdpo9pv3LLIiBGAiEA9HTKzUeDLlF5wg2lvgBUTbA5loLIjs59y41%2Bs%2Burg4wq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEBdzLNT7%2BTlN4R3kCrcAybakH1S6ObWmwShhdygu3pX5jtgBxLwWqA72mhOl0iqoX89Qrw8MkDN0Gn9e1vnKKxGyPoSLIeRkc6Cf%2F7UO0luWqN0D%2FXjbG0Ss6ttu14alih6SISU89x%2FYmiqzZQQsxGQfRp0sGYzf93Y%2B8eMb%2B1NbTR8CVCSUkou5JH2MGZLCI7%2BBN05%2B7Rqa0UkrPKUjBeM12uGEzCMg60VUx3xfbT6MWRGQ1f3eSvdZZ1J3OUg6WSpIpttoXURFusC2VrqTLduR5%2FUajAWYFNWGiUMaDXQGAVzkX4OIP5LnkYr%2F0OlEdC3dUtId%2F6f1xvj1e5VxpWlbPHCZ8CxB34DhltP4N9Rz7ueFiUHh29ZCpuyhx%2FPRLoikCQQsRdCRWUsYbGRZ81Q2ECnoawcppMI0XzhraFAWYd91AEE462l4Ve0oj6qyYSW8IRQHjcQAxai9gRHKPsJiJMgJuFfRhEAOxENPlpR75qkELQQWr4LMLhBFPBq3BOWN0ItqIEqDXinuR3TUk%2B1ciPK8HWEpARMhZZBN0N69E51KkSgyPnv8mDAYta5QnxWR7w1ZNoSSMx18%2Bdd8NRW5ZnaEITaGUMGfvuv3B0CdPHeFcMVaEsm4hayIz00SlLPDQQLPe8KiBfhMKzEn78GOqUBLPtn2Ok%2BVoj53vioxWLneewuiq7pN5DpoophCarVOTv1ZYDI9iEA2Ua%2F6Wb82yZvaLT%2F0pqCHimFaazaTaqYuGiUpmDugjJMgQX8MJYFsBB0ztWbWbtTfqBXhWYui2Ab5O1aatPF58muvM3HCobh88LqyP2oLkbUDiJEnrkladjNps7pEvxF%2B03vtZcgBlF2W511lAYHvPUkB8A7q0Vz%2BwEa8VAf&X-Amz-Signature=10f20d770025ee053a27a96e175f692df7b76e95d278a09c190d20e56a0f4fc2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKLRLM6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDDn5xghGBRb5RJBARdil%2BxM6cdnP7%2FegOXS%2BDAQTRd0AiA0Hm5z%2BcxwRn9VYAr%2FNMIFx9lu7Ycr8HuTvz2KK8yQCCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMr1nqAGb0n6Jyqdb%2FKtwDBCB%2FTUYdFJKnp0NNINP5s%2Frv8ZXx07Pa9xbnbfzEO6Mr7SfXr0TyvuPoPQ3%2FwxRfKzyzEzLoqVAXxZ9YRlbl%2FejWAiEeSF%2FumJEiKBzOGQR8Ipl5fUgw55LAkYN7wOAVpAJgDlGg7bzVdstn7mDhiBpGEQb%2F%2B7qGT9yFOGDI6TglDsgyw8G5mjJGty5CZ5Og5ijOISL0c1rfdIgBBdkp4Eok95W4Fo7sy%2F6beoMWcJkbhWJKmtPNofun3Qmg4vPBgYzAkBSM8FG1KJ1iU1%2BGNCRcRaA%2BgJZ%2BcUA3IL3sDA6ldXj2%2FIexC8MXrCufmN7U05aCJDs8c60zfRAiySPhKTHNqVmsUskVcPx1rIBry4EG6MhTXR%2BNOw0oA8Eahz3mDTzO9LTpF4ZhENCdDniS9EsxMvCGnXF7QXteiuHPQlC1w63Z88vkFQu46aGZms04rwIt8RznuCJ3KfIIAM2q51Hl55PH5xe46r5hCBJeNV%2FO6IwhnjXgcJKewxywrbIGPMi1t889F0jfaL8sGxvfvsj2RJKM6v4kViHwmz0%2BgEG9oTDUYWsI5XFUFtprdPrKdB%2F7yzNK92WWgYE1g4VUStgsU4WLaLrGWoyul6Rav1MdPLhA6Dly23GN6MYwg7WfvwY6pgEY9IoakqQbJQmEa%2BxoeW1Dsz7AXZv6mABUdlyn%2FvoZ2cFNRpzsNjiFSWC4bsbE9%2FBhY0zZqPXDh4bTEpaFo2WvhWqB6EtWMXJcrWGUM0IhqdylL%2B2u9EZrzCAKpR31CBKjUSaVzssR36Hgl1cp2ru6gxFq5VX19MK9CNG9MqYOacBInzEF41sgqaOuseAJ%2B8VYVSqeJ0BI0b7Z%2FaQ2OAXYBo%2BHL3e5&X-Amz-Signature=e9fc92a137eb69af2d1a0d50a248ba624b0fb22265daff1d63a36428d0007f3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
