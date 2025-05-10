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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWTW4PU%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIG7sN4bGoZUNbLz9t36HfCWP77kiyuGrEEEEmfdc6rW7AiAlznzicWPaMVqGUjQWV%2FZPpmLGmxB7TtH8PC%2FK6NXPOiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn%2Be5ln3CdWresMbjKtwDww74EzkjiR1xYcNczqaEUQV6Rq9iAD1wdzxZVnyFPgALU%2F5zN0fakP1EpnnMc8fQ3n3xUYs9jSTv98qDIns0RkS2J5OmjTtOExHS9xXGFvxQwAr73VMhfrj09lbzbZVZcZxF%2Fk6%2FJdqnpuYWJ%2Fe7%2FNsW3grbgOn3QSMEk0iYrjnH%2F4YurT3Q%2BuUeWdNGeLTb8x5qsiHwlDxQBOPbCLytQsyt9b8sZLqRRZwNJnYqfJkdFEzmsLhbjARHHcY5ff2pP7kTsC3VR4mk1bce2FRjIU2ZpNwmkrI%2FQHgX2qmcxVWMX2kmySqqTS8R8XSyheSjOXZCyRGaVlBBYw%2BP2mD%2ByeWV2FInE7Qisv3yyleP49%2FczbCLN06VC3krjMShAslZV8kls307SwtfpHnE92LHmj23snObZKzo7%2FNPwa8WU%2FaDUWWKgXfW8Ox%2Ft22SR1TiG1L8qIw5SJp7TuRvSEJuwrsbu3fK1WIxKOFtaC3xjx2O2SszUfaXdmfFiLosHpKfjC79goP7ekvSoKmBQrgeW%2FLypZwsw%2F7KrTmYToq%2F2Z5Is8w2Ktr%2BO2gYTViKyl2Ofn2mazThP9cm5ZBtUr4bRlnhU1Bmmf6V6ZmiGbYjYy31EZ9NZ8jiSYi420cwxIr%2FwAY6pgGkYqXFnInv6nvmoUfUN5dNXdgI3QW1PhwxXQpNwsrhTU%2FuxIZ83ShT07BkIDJFdda8oYVr7qKSuF7%2F7RZ86oJDca8iQ6BcHFkXCJrA953Awp9zfoVApynPgb9Y%2FseWgaiEYIdoNfESq82NzDGsFZVnIUWXFPzB1nV%2BmqNGmil7sHOz5pSewoux3jjE03JUM9AdrrOuuT23t6lJKM6y3v%2B9H8dTBefL&X-Amz-Signature=a43a68df09224869e574893898b640f284118233f31259ff2c8cd505ca9cbed9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQ2D4JM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBMUuKkEixfn4ScS14eZ%2B13cCkzkOpPNSRND2hLezl0WAiEA8mTzMBhjzSgzCwjiZo0c2oc2nNiJFLn19bIGKp2anqsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7aIVpcqs7Wl%2BxFYyrcA90CNba4v5G6YQ2RE79SI%2BKpX5Sx1fd3GlqJSkRTSbAUtRGi8LqcQks90mnkCaLTpp9qGYibIVm4V9JKfa%2B46%2FLiCFcxn1764Znfag7WWzxZGfOIOC8Y0YQAEkOVoSho%2FT508mpCkb0vaU%2Fo8QLLc84%2F4cNC5a5UjbI7t7qFnge1qThkZsmPh4mYl6tv%2F8zYM9dhC61AJ9HTUExDZHWC2F8mAyQOQzzxAYrlGIGU7e2fNnaSLvmhYeBdneU3rCsAtF0QyP5kR1E3XDiSyYwLPP1V%2F%2BIMwgRiKXmKY54IjRD6DJxX%2Fb2W7Iip88yv%2Bf6OwMVgDQ%2FnKH3NGLW5k7E8b2KtJnDYzsF6s6%2FHpsOZtD%2FvC7Il8la3eypVdfcKMHLJe%2Fda0C%2Fu0I9CJFgBNXqljypqQ4K2Ecpa0BWgN90zCSyrrLM8yzwgmeT5DMC2hYTEdFVRkyfHZQIrGpRvYH613o6%2Bw0QQhD7YN7x4HdV2010j1oo85DxlwIL360FRLGhAe%2BUihdE764gv2M5dSRwGqfxjyrPCmvcb5azkSFR0HAu3df9f2v%2BwFHrAq%2FPVmbt306xKdyUvNHGkVAEA34OJXVyKqq3tVqPeAbVXxQFDD94wNfDMPlmL3l6mmGf1MJyK%2F8AGOqUBPGQyyl%2FCb9zdbVGxE8WFj%2BDWAaHvKPZuRcuHmMbSgX35py%2FRsWZpIAZFAAPcE%2FX%2FkIAG%2BILpbPKm7PHuVui7DVpfrSoS0Lhhp6rVvP23riRpH2VvxYsT8zx3BaBn89ic1bDIqfhHs%2B0QKGxNVbbSUVPZHD%2BCJ7rF6hiO5g%2BsvNmwT7%2FkJlIO6SFKNHdez1TzQjc3RHOnBX%2Bklv0vPBsiGS7vRTDv&X-Amz-Signature=2bcdda946638e6be91f2c78f7ee2afc2275a175a47123fc099ec6e619466c794&X-Amz-SignedHeaders=host&x-id=GetObject)

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
