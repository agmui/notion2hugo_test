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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5GNZC2J%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaoL%2BpTeV1rNAtGiX9DMpmtdlvIeEzqrI4VVFT%2FPWplAiBt0LbfL1qRKSXveO8b3JmQRLPryiV1Xq%2FzgvQGAOkBziqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkf7EVxEqURbffOqmKtwDjo6%2B1ptsHpUv49wa2n7whtp%2Fu0iY%2BnmS0RPfIpUxKZsgGx2vROd7adHsPqEnYnv3OixoYbWPshB5X2w7vmfrjOQL2MXporffZsYvm1PdVEb4CwaIByWTbqKn%2B%2BTJrKvZpRpxK5m3Rdv4WbrJuigYJW5dNt95%2BsbcNgF4PYED7OuOmuiOI5k%2FqNeUCDAHwl%2BmlTYMeiCwUwnb8E5slTkWldhuvoh7kVN4ZASdeHDD1GldE8woohMDIJbK1Cg3aF142tDtkgJGudQPgoGT4GIh7ddxMHko73hqEqitASDXeixgEgDYeVGwWZcDOAMQh%2FGFAnnYTYgHOpfJLi5FUuL9vj4mXufjl0TB7KdaFLBYh07Mx2T8h69WdhesXPwMr4GjYdGvEr0bCtcYFXEb6fGHRGmzGRWTMil%2Fjem4Ouy8jkuixGDv4UHNF%2FIP8tUi%2BLyEO9Fg9ZOuC6eJ%2B4OHWVUd2KltMJKwvDGcXdk%2FVE2slXx8Dam1oOKq1tw2abah%2BZO1VaRyP4rc0VGEZpCrHMiQ0ij9sdhg7VpUbDfWTyHmefCgYBpm36ddL6K4pEVIKv123fU8IwjAEM3UBjNyzdwJTRiazA1fpPfv%2BrjOkCiyUKZCDmzjZ6j8%2BfiTPEswjYHwywY6pgHXR3ICmdHK85y5PMl2LBDV35a4ahR%2Bwa%2F04cAITB5AdnL5jeruxpuXEL7v6ezgR0Fc8nf3i6BoDVMKhFjx0vQyQ801RPu%2BNPBn4LA%2Bit0F0fqAfacHsvAFYA%2FGsbV9cWEKU%2B2otL0%2BHEr3nBIQ9dPANRlLgLuqQBJsvB5d7TEKH0iOWMEU5EKSOG1me4dZGw%2BG44YfKXq0Xjzfm04tZcQCRe7rhb7l&X-Amz-Signature=972f1e01fb6ab043441b458cc63ea2cef8bde3752bea22aa4676fd33e9c34bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQGLCRS%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQcZ4S3Gn4U4s8tmWT%2BVEi6WZ%2BgRSbSk8JGu1%2FRctKVAiEAhq0wVAxFegFn9ze7%2F2Y9M9QGcJmGBuRhRkFz3jt43p8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPdjdbM0xyuWvJFbSrcA7o1PQ5tvEO6e3qGsJ2%2FMf7IXFKwPG%2FEWxSusurnY%2BqdmkbJKs2TZPWmyLMLcV7DS8vVTPxzogm%2BAVaJcedtX1X9VgdmltZXMw9QWYZy3OqELXJD9n2FiueQXj9AwvOv%2FapFryvX7KcNYE7QH%2Fuiay%2B%2BgpDnJETzQJmVrVqjMU05oiOuGLQCAuHkqCRvQGMDYIsiUEItOtMl5ZaLhEkjCYNOmHkyGScI5%2BTuz0o%2BDBHaKGom8%2FBeamxPAVgRdDx%2FoDgHqGBwr%2BJSpBpuZER%2B%2BvU3Qe5ndycW2q8oMy7GYX49awWS9K5vYCTjrAGBJX%2B3N9K%2BI2oPThSjfCH41acZFxgb%2FQoUnUnCaMTCbtfaVNhe6Ny8b8wHq0ZkF0kfvNE5obDNxecyga2BvYOUl%2BdGIbqUICxupgCDvSTFKYT31bWwb91YmzSQg4nqGvfkwT0%2B5ttoOeb0YJ1eUmPm1fN3PWPEL3Zy2Kn3UhhMJ%2Bex8mV6EvPGRmbLD33XeyW9uL27MOnfZS1PfWjqJg3dM68S0AvZsvInPxh3lla%2FVAr2wZRJqomUTm7%2FbtNEdHJzBFakHlnS9IMxR8AhRpNNKd6sWgqj2ngy5VTvixpb959RjizZ00QcCDiNWrX%2BZiqfMJGC8MsGOqUBYTAq8BlWx%2F%2BSuRWQvT%2FpueW7ZVoTLyrguJffa%2BmNqLr1KI9uouHe56S4TLAWU3YvButLkajumAw%2Bu%2BQjeXPE7gZ71WFzdZvYMCtc4Fgnp26Ko%2FA4xAtv%2FWTAUBV3Q5kx8eQVWdhz%2FPTxoljiAsiMlcNvMt175TauUTykBJaMHWoIWO8E19uq0TRppiUmsg31Qmmc9EHQf4wP%2B33ka3wKmqc5oVIt&X-Amz-Signature=c71572084dae2a24c383564068ba88b935269e892e43f67f12a2abbd2fcf32fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
