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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVDNGTZU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFuI8uvX6QVnsi0TfpWxDsQUv4VPVRq26S4ooyF79K4AAiADc3T15%2BFKe666iZYW9TCzsYm6JucPWVZoL9IpTM%2FU7Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzRpTZ7VDfXO1Nc1AKtwDPWb3wYKKYrrLBTAKYi1vxMa8ivtXt2i3bwT10xpMdTt%2BZL9M4Cb8XMRBdN9PQgqh42IUZj%2Fi1JYp2QuAhFhvY%2BH%2BD1RMUTrAKpCDZbjvOoD78RJFxXJm637T3SjsBsMZWZjEw6qL%2FwkVFgo8Aueplh857emxgUEw%2FMtIqAi1LK0J0c0Cj9I7ii2ijh9G4uxBHja48rZwsOALEL9xILSQZcJwSKelzmIk6uw1L%2F6GEsCS%2FNY6diZnpDBdwLv3v%2F8MmyFduUi9qaD4Q2hDLxs%2F4XDduKcP4IgKvdbKSOhcAarvnYcr%2BwSZ0ohmio%2FBoiPQUND2jg2dGbVYN%2Bk23bR%2FQp6sNmOV4eYqtglPdS8wvJPMIUoUF2K8N1CdGFDPTccoLZuePzP8q%2Byh9TC7fJf920P841YL8U0pcX198GqbrpBPvmHsuiQwqN9Ti7clya1e39dD1qjffkuo8lFu3qto01LdEOR5qnVJ%2FZp%2BkHB8xX22%2Be1nqXkdFMK8imZnRlfblPi5PV0VJCxCQHwRk3QUmcaPLYY1VRYCGaFVRCtyyIY%2FXH%2B1MlSD2kvvNEa06sthJamBG8otzRwUqHEjkIFji1zTLZWlHHG0mcmTpfwRPN1jjnvbhUhoDtn23DAw0PmqwwY6pgGNCvfBtvGl0G16oBPG%2Ft8teX8vdY%2FgxpXTqtJm0qAsejmgolOwMW8fZ4hG9ayQ5wES%2FenQ%2BpIkNlXndVaDFWRGiKGbbEpZl1MvlXFBJy1wNZHZbxnBWvER0r6sklm7k3%2BFh4Cu0kyvTJVeWYNePHIaCeFeri%2BLKt8rPwGrCeLgwG7cf6Pa1JmYFaJGnSrqo17GrApVYRSG16IygBv4V9csT90NkNhD&X-Amz-Signature=7e6de188563e31fc01769c8ac7e4d9da61bb4adc09251666bbb5cacaa581e573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7AJTDNZ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDKk0b0ghCM6L493%2B8KtY7H2DoTYvSc%2FAdG7BTCARCN2AIgB9L7fkTh01DYk3nCRxopbXWAysXtcH%2B5Gbum6jpS5kEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKMO73XJluw3N%2FM0TCrcAyZdvtguAm5vMeK634rlUb1EEP9POykplKGbycoZs0YtULxVX1NaRE7gp1MiFGs7hmK9vKuty99TtSIxjVLKm8tr8dITLz88ZMj6oHiLi6MXcTaXLPO43yu7gtwQuX89ZSU7bS9jGJzGZpP3FkdiUOxwQwyvmIS1U985FABBc%2BU66UWgVt5fNHfYlrs%2F4QqSSRdeo4Pqm5vCITBZYfFwDTED2OZ9jeC2v6%2BPg2d5LdkiQZkixaV5FDBNm09T9UDuDrVfETNzQrW7rVQaFW5b2Rg3qRt9k%2F89JDrV21FOQilkIcTVyvCk%2BZ4lUnE%2BF66nv%2FitL694reePrmm%2FTL7%2FxAThkcFX04bKP1LJSjuQfhMxlIwnqQCZsds8DryWw4AQD8qjq%2BTCNN9j9ETBUa4e43NUMtlaTvoNPCzFuvCJCRxhyY%2FrhxD1IyjjOPw54%2Balbax7q26caazGX9TtqoHDFoFmIKiwZWYAVJnBCTTYU%2Bm4je8nA1CQ0zz%2FpF0EtZ00JdL0ZmgjgHJ%2B8Pjk4e92gIgNpJt0tXzlWUxPZxly9%2FMtzsO%2FIrZHGI70TIt7RTQhpRNNPAx7vaSTtJHHTJzmfjP%2FU4HbTsh0AjTLS9gS8UWKni5zjJvSBQtUnhTRMNf2qsMGOqUBf42xWcVgHKKEe3gReQfN7GM142CQK9IcVnkM0BigsDdqQRLHXpQE4dG6056j2dHogRxjaW0L12DCqJdkV8g2dzstbTkuNBCudtXglYvKCdUnK9MzNsZ%2BlhCoFPsQx9iaSOjcCIYaaT2IIqB52b06hBt6NYLGAH2v2VnZImO2zQntcIcIICmHCEdpVP%2BHf0bJx1BuxMhIwPtOAE%2Bl9IFJ4POIe4DO&X-Amz-Signature=f8698f09792f53132adc66c0955dec455dbdffefa6a84e1b20ad88920e8200d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
