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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DPSCMJG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxH4LitHr0%2BDmQxIf8GPwieX3%2BjJmJUF5bbRgVRNeg7AiAG%2BFtsH2xZtm7qlL94KJwuTNKbsugyTfa0n9kduCptyiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR5Rg2P4FXN%2B2UDzkKtwDpf1i7IbA6MSIArkLfAr3iRahLiLFQAKNOYdmGgrqOSu%2Fld%2BEp5mYO%2FvWx%2Bbw5F1KkSlLLQDILovciQnOpl4avPQSGJntySVzRMqBVXqY3RbiSe2%2F0RCgAVLaAJ1JRPrASGYMaHjd%2FK9BUiDYNCNUO3%2FMGFlR3GktAToUOi0lzHBhhMBqEDLZod46z0EuXP8frShDcK1PrYJxHk9zextAF51my5EOA9VcfD2dpjbUs8qIDXKp6eUY9MtnDgqgyHZTVTsRygDzdC%2Fzp%2FRiwLT48UdR%2F3pvOHnzyV%2BcejBGZfjF6iT%2B0iYrI9gjR20XyiSDbUTCmxfbX7gVfdRwMqMFxG5b35VDLHKM3r9%2BmnLaEXrGepc5sRugMHwh4DYYOj18QNAkrrXBve4DbBZJ%2F3AKklC9DSnXMMESThko2CAqEoMEe1kNqdRcX21mb6OKonNkZv75Kzk7VGH1pOlyso8aeXkUCAYBVThc0iDHWSqIPYaEgEvME9dLZjo3C%2FSrAWvyZBJLWLItKdWd4BfPuhSa31JId2qql51Oxrcto0XECTGDsisgcIAOhF4HVYgwRjCRZIvQpuyccrWOOjWyMMvR8naCWRK0En7Shzo5PHt%2BTwfJoI49zPtgHMuQPh8wycT5wAY6pgHrQuFeifGYwszuSK9JAsaYQdLuPLC6%2F1GhQ0AcKAvONEpgyf8tonaaGtog1jGU1pv0QCF1sb39QOOFGVq8MEYPEi%2BdALozlSFF8nxGlx4lkP9FokJlunAbSnx7Cs68WEAg09lFZbIOAO8s8P4WuQQkQkWh9XUvDNAefRdUWFulxbIJRHNFgsC12IXo0xtDfon7J71gPv33TGSiVCc74zt6PpwdkMSW&X-Amz-Signature=f4dbeabad7b6c4a52e4d36607dd143416a955f6b17bee9146d509dc9cb408d14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z23STABQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVKIRb4Y%2B0YPao1YpQK1w6lfOGmbaxWTSH5nCgTAJIWAiAAiWYI5E3EA7GmAVjKmuXKeIdrqndVhvtWItzPjmVQ0CqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGGs8hsLdGI4DBO55KtwDNku3lvQGQbzayFSCaiga2alkycLGKUZ0AAyFksRpiazO6xbEWfGpfjiSvUBi%2B8BFlsiIazJ9w1KMfhDjUt4DW4g3S8nHXn4cfS08S5MoJJohZIsAfxB4nXGNfIkn7NUPA3cjB%2B8NnN1t%2FlQjMDqFsUWIk7aTp%2FFgR5sZ7UWOiHi62xiA6tVBrR2NIFXUOczta64oCUpnRUSGP8BH%2B6a0sczEeOBtZyB31qL3dG%2F3jRRAwJnOPpXy5n0fJmgQQfpxniiUxYhFaPqdDeopMEvJjq8XzwuMBuKWFXHz8bxsfVKb4Np0O7mNMg1LXVpQSg5QsVIb59BSRUMcguCfj%2BH6Y3fCfOb%2BW8u9YMtolkyzSLY2VR8Lz0tGbiZdP3mWTs6cehsWIYni6QlEVxPs07972gNgrOZG32KKeHWwGxmrWsD%2F7jRcCwcwTcMU538b843iTkmWjAtgkxSjWATzeUg5XXTGa86WMcY7krODP7Tjiv89tO%2FKMU%2FvMBaQd%2FvU9kcIWsyjMHgq6Xj3GhF0MQN0n9H4rfWUZmIQ%2FY12Y4qFDltmgsH%2FhmEPQvBtJotIPDBqqAJw6%2FYLuX8Yk1S2TKs31XVo1NA%2FPG9vUm0cXnLdk%2FZOPDZ4Tl67liGF2ccw28T5wAY6pgG5TiH%2B0z8%2BwdUeYODp9Yvbef9iEx6m3G2r6rFCaEa4OOr9f89PTIeQvB4Bdx159lZqd2TNdxpLyvfWPqojL%2B%2BS0uWeZvvid9NTa9GYhkuQMKMUnAilrV9wpusTG63hsKjb5oVaTGrCLWsQ5fP15r7A9XZh%2FgbBbLS%2BuOHzvUGMjJilusZ%2F98XkwLeO7fy7tFk2xVU%2Fp%2FwuMB3kR6S88zImrnYP080E&X-Amz-Signature=ecdaa6b49a3cddaaf8e08e719fab4c9b2ffa57f997935eea8e2c34f199b47e31&X-Amz-SignedHeaders=host&x-id=GetObject)

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
