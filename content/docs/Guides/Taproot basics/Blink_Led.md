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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZ7IMDM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVSnz0pEnF1CqLUdBjVku1npnKGP5qO5DFqQOMUnmFAAIgUqz8GwIr6zeklOLaR6cW%2FuYchbgDo3f8Z%2BGoovKsXJIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMLwcTDz%2BbvJQntSSrcA7Z3SPkwyR6Vz%2BBa9V8W2qe8aEVSaT869Oh7x9yEWCxJnemL3Vi%2BehENbMvih0CzAUDYtQdg37pUmmzrXD6%2FkifyuANDEsFRcq2z0VdiojfKPTSGzSc%2FUUhIWt55AJWyMopbo%2BPFrdejPBQYSKS1a31Hxmk75qn5z87an%2BN4LwsItRynDdEjUyV%2Fq3EANam4kAGqO07JU2BxXSAm5Piz%2Fm5ibpPG30gIjUpvz59aG9GjzaVmURhSLXJAip%2FqAGGM%2F%2F00mdbc3iWTQh6GHECaOmdB0fAZTDld1hcOLL%2FO%2FDuoSeKJ7jh76SyhsjRLUdJqsoW4pH7vd8VU%2BC4Yps1mGKzet811WpLT0fHeSROH%2Bi3bL7VkrAKmw%2Btgjab3JeqruNLIVqkpAzqOY67U3V59oO0Vx0jSz7vy7ufllGl6xW8wDj6qUerPjHRwn2sOciC6tglNpYGIYPMoEyKmwBNXH2p0Anu4h%2FiOjsSh6SLsoJSA0BjrdQteC7M4RVaNW1Z2ytUEdZTx0B9zbopeNGJI5zjcxBmTQ3XNyp%2BfDwZLlh7aHpjHWh8mz4ARKr%2BSd2%2Fyd2sfBQvDySjPboBDyLFlyY4PUwM5PcVxRPPNGOdo78UHmC6jiKFJ2ausKeYhMMPGtMQGOqUBExYCZiht4Gxoac793GAZ4u%2Bx2m18t%2Fx0d6AKjxrAuLd1eNAB4%2FqLTA4orf81ixxqtMoyxWLn1nR%2F8MmbyDLcSUbJFRx5xrTtkizv34R8e4fmDOMTzWv5KU4%2F0tKYbnrGDvD6KNIVYgiQZOwLQk3TDFdnNctTJlHy1%2B1SRXvlOWVAeijNQyUImtsXvb2q%2BLF2RAkazKrSqx1HfXHtIN7YMYjol2kI&X-Amz-Signature=3a6377f38183ab74a6d6ad8cb46bf3e1f487f55d13726b27ae19681043c7d798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPD3PUIL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBhoIRQfdECv9QqpSS6T7KQ6O%2FxsGHKFEQtQ24sNXIkAiAo0Mw2gobUTaz6RMhxdCXKxHY3Y9J0hZba%2BIAe4o6o6yqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7%2Fzzp3d0FhWRjSnKtwDrpbkd7ZQT6X6oCJJGf7yoyHHWERqmjGFueF7SjuzYDr7nhFmaAKwiOFyIPquhUqevuJh6WvXscivqZuIGYRpM8pmWFhwidfyWYV2NHhehCAYxZrae%2F7VwjF3VrPLA7QyBZn9qsyuFqi0Ld6sXxmDJ096kbFD3MkMYifWLh5Aj56mzvmvjCaN%2F3iqxxIl2dtyTKCUWRkrECmcFwG1iup1h03hIlt8pEkwfwzKoTlKrsmJ4td%2B%2FXlgBiHTwI2349DkTb2rjAlN1%2BiJ5yzU7icQsSNyfGtlvqTmEFNXumNvowIhzGS%2BujQqBk0PdMVdC3HcpKv63N8825tViKfPs%2Fprx%2BKxjSiaN47VvZ%2Bv%2FrRVIdyZV9xoUlbY19oL5bk%2BGKgMnRrz80NSyi7aP9c7AIvd0InVOheJeeZNNLFe%2BnWldw2y691ObsPYet%2B8VFu4SHW38S%2F85fykKVWhq8mvI%2BWJZC8OWBuIht5ps9Rh%2Blgx1twH1fj%2FUedxOjCClEZOK%2BudDsiDDsGrkW7daFJF2RXaqLbF9X7cB0PC7lyhmGfFiK7iHErC5lW00YIoHYFLi2XENViyue0P4BwBUgX5lsApxnlBjd3qSU7BZEWc%2FVDTrW1LDrukx%2BXqMTN%2Bv0gwsMa0xAY6pgGxZ1%2FQdc8ZAcxu1s%2Bb%2BzIUP99%2BNJrhm1ldp6kfcTSoZQXNPBJPtIuJ9X%2BoCpZOEK%2FNxrndIvDgkezuujMysu1jCi%2FHaOmQtsabFHHIWX26iyUdQ3vAkedyReDM%2BA8kB6by2PpWkzOo0xl%2BwvY9tkU0OJh1zAUVUoaN7DmGU%2BAd4%2FN7RBaoO6iPuCLXxdLLrci3Mg49mRGVM0YQLOSiGaHbnD7DGEeo&X-Amz-Signature=419e77e76da0a88956cf2037b21bec5f223b89e0a78887de7b19bcd09843de81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
