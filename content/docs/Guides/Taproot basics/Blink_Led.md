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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4HAERTA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcOlK%2Fxzh06owEWbU4nCch5IUVnRKwpH%2FKa7s4p0oQjAiBTMU%2B9cO0KJwxI4Is2%2Fr2g8iyyCYdQJC8F68yZpXDmtiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIgl7v6HsnaUnOFbmKtwDmdid8%2B1gZKMfFaMFGyePJzIL%2FBT287t4MFMRDoGtI3FdzbhHaLkTEXarrgIFfazZDSXPbPROszSGSg8gwvN%2FnJMeBFAWJ%2FB0FzDpL3nVDsN5sUJtrhJxd0%2FjFWqQgPLYzCzexGqMQ2bm3el2Nvc4dQZyBdn1xrenuTlDDi5JqaBhvJztfc4GhgVWpgq%2B8a%2F7gwRdwdTHZxMimDU%2BH7CT1ZveBkUehenXUDc%2F14E7isAOuxCRNj0oAEazN%2B7%2FTFAXLeKgoB2TVKiFgU5GzUQfEXQLWBxeb%2Fl2k4zEMEM0vkq2I3sncpxmoOBK4nTrb9OvS8zPQ6hdyRnIlwslB5jcDTkhJlZyVbo8O3tuaEUMumLJbA2EoUubDn9l6GLSqgijEiV%2FlVBaJU0%2B%2Bopr9I5U3F10aN6wErK8Yo2BIGVy%2Ft9h8TGfxjnMXGqq69q1TO52j4aWtOTkUh8tZ3KQTprEvEqJDQ6h2K4m34i2hfRd6Xmo7gpjyRSsOtW2EaenhupXv3n1j8eQS1ncHlm2bkkpWUJAilG3hZKayTkaqjmZvMj8lx9ZD6de8kUrvSJ0Rqjcnx1Wrnj7tXumJlzKU%2BmT%2FKDjPgK9NIeGnpeBoKDM7MyW15Tkpp859%2FTrWT8wv7LfxAY6pgHz%2Bv4NLKEwjieoz3GKQ9Q%2BE7h0%2BxpN7sgvcR8mUqHlU9GDu77zAVMoLVteRpXACKzTljSIEDdlsUtw7S31oHQuUutUxO1Pnf7BlxEGEHtUdmvdWcV70yaCBK2vr5MHuVJyF7I0eW8xU4b6LOjSSuFn3UR%2F8qnDi2QfVBuzMrAAMPqNdCmZWDYXNpnXhFwW8uJ9ZQ%2BGmwPTswMlvE8c%2FPjVhgaOH71U&X-Amz-Signature=b08d05d5f1f2fea1ae95f2b228ab76dcc0211fd199fa6f362e29d1cecfd2ccd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXCLWLTU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCapY54xBk5QE1tHkZJHBoauY9h2Q7e0YAoRmyrAUdpXwIgOsxKZhB%2FohiKHIDMXbsf1Fx9xPO%2FZPh66KZ1UejM1kMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWpgSR5xcZEuE%2BRHircAxBv7Ex8RSvitgk48T%2Bg4SnrbUtF7340y5m%2F%2BCKM4kNQsamnSyhz37QxVH%2FJBBqjzr4N%2BX8ykA9WeDGJ74ko1vUnckgWicEq25OEpPs5JZbbmjYCh3D6r1GWiS68Zx86LFHHF5UlHaF9T4h2%2BHrhgVBdtLXvbce0mREhvjzp9eojadQL6oqC7AjlUYjWjvwqA0n6t6VFb4AceVsnr%2FP%2FcGtNQIJApQmlgsJraST0lz1aBOlRGN5V%2Bi6LrCV7y65tq71GuVpbeSsS4FcacTlME5XLSsmrpmqzdOqTXSJqZ%2Fbxehgt%2BTeDHRnCxarwVyQorFnK6X7bzkHhuIs4sn%2B%2FQj%2FjkFsZnrRPWr9hbwQveYRai%2B8xO03LEmh%2FIEc9yjMUY5DWwYbbNrnwZ%2F3gLZq5srYoOvINDYsty7fJYIgRnnySjO7AYV%2BUfbHeW0Q0ZvLK60zfNcqXp0CUiM%2Bpz40jGhwTe5wBuLnn2Cmy4J8%2BAj9d6IB5XQK92gIZ5rjEFfx03okykMfNSUBhKyoeDd9yK6cPfkQnhUYQEgmda%2BOEDb6Zj9RMubvj4kyt8mySzYbHdxpkRCyU%2BWFB5d3xYD5tpr2mgH72lCysZ%2BT3jvDlBvxILAucL5jVnCUScR9BMKyz38QGOqUBhEOM4ZJaiMI3D1hktaAyQfqdFKQ1owrwIPnYcRWLFwoNoQtkHxdizvcjv7VnZBJ6%2By3YjruGOSxXBa4TIBkHwwyM%2FSQfMCI4T8pLlSN%2BjmFsSEKLBiwvgP%2FcDNNwltMWAwh6uvh77W1Ff1G32%2Fl9ZndOOH5O9ueFWQc3R2tlA2YFzquk%2F%2Fs4jR7KYWnMOajRQoe2kkBGK7SR1rsUorBXaG4kJp0x&X-Amz-Signature=0322c9c02a05775e3e1e214a1c4d985bb837dd988dd23d2881f20b7083af207e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
