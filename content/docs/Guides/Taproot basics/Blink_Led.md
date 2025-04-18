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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DDIN53F%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGNZ9DPugGa2NMhvfRXuaIM2rFSkEsIz1wKdvwN1CTlAIgBkerAobi5eicXwtxvWW9BfCwNClAeqKu96iCP8bJuqsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDPBbrVXw6r82azHjeyrcAxpTmmowsETrxf2SD3zbd8popSnrnxfzxmiB6%2Bac8zmDK6ZXDRH7ICgdSmL0qZJPhu9Q5XFviWaR1TYsWqQtjlH6iZjU7laZ4mMC1LMvbWe3gyuDDuOvZe0Q8FS6w2AixXJ30gS8%2BjoZyWc2e7F%2BTQuQowQ6Hy294MJAwB92yabeFcrEdSnAg2w0RbOtyaGO2%2B%2BCRgmiQovzdpSGhH37sZUdixgi6P%2FuRr3pa1ycU3YA2uQdAl%2FsQkP%2BY19MaVh3iyv8zsOj49fm%2BPZ28Q63hhV30BF7giU%2BvozwVTUShQZzmIZ%2FgvpfF3fcdeGLjajdleceGkkVKJP9dlajQF2aAu4TPYPfQUpfBvjAndgfgH%2BTmSKgWQWlfhB4pxhXmz0za7Tkm7yDFUqLMWbbD491zwiAl07GN6DVmV4Dm4Kq%2BZ%2BJoMMOKM5HcIFGJH%2FNYPtPwu9DVyVk22uyXV%2FSL73pPd52RENdTwwFbUJ7tppPRw3fcSxRFH2UE1yhrYWglgetPtJk2lOZB8n0v2vg1fvbQWWoLgzrY%2FRWpjzKlsNsfOVPpvS8mo9J0V%2FNazVOSgsUhoHM9xXwzexX%2BQWH6c9Nvqi%2FC9t9RvbamyNyuTYm46leZDUHmCgDEq3NS5tOMIKbisAGOqUBAA%2FqutQ3YdczLIGoKImux%2BP3c%2FRrEaHZ2vvUAC10ncbyOdxpwlXgf984knLc%2FhJIfYSrgpgLKP8tDEs6db1fUBctP4XcYeHckO7G6awQlzrSFwQThl4FGQjCvqWjiYWdFZlgGG%2FuMat7%2BP4Nvv%2BgGglDnPD%2BEYE4MRgPg5UW8EcDLZz5A1rrk1m%2F%2B%2BcNqJCN5gy7Qg4ML%2FaLhGMxA%2BDk1Cx2N5sC&X-Amz-Signature=4b91ed4ae871df9c4949d52d7f7643b246a0871a09f6d621eae04610d08ef8c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR3FAORM%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3krJ7r2ttxRC3SgK8wF7TJQs5AbD8BeXT7GNR08kZ2AiEA2%2Fm%2FhV3%2BPgneYD%2FD8imQYZP4GIU4EamHftGjFGNnj%2Boq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAt3AU9XvA0O%2Fg%2BzICrcA%2BBOTqgK5kHv6xRYUaPQQpSpq0OQ3TJqyC3DNct9qQ3gCPJydkmdLh4O35WNWDXU1w6YFdikyUBcXbpM83msON6A9mO0Kw4CLaes5DlvQLNweJBapfON1Kc245O5coKz9tCd5bTo%2FDeJHjXDoOF0uJoNgL7Viu3QxpPkp5ofv451LgeijGJeDcyYjUezjwzM0gbAyF9L9%2F16l2IC2ZyncZjf3wAGW8eOaAAqP0BfeEXhs4VK%2Ff35H0sHPOal1J%2BfbC%2Fo4wQo6mmwaowIBHXE20U9DvZ22LVJh6bhSTOp%2BKHkEENc%2BQSsW5LsS2JhlNHpNqaaHgbz4klA7rvwRNpJgI7B%2BySsayT%2FBGH4RsARUNbYLUYk6avfEEbxba8sOkPpAZ2uoOz2uJpaP6hOZWx81NGFh13gSkypz1nYA9jy8p5ZpIDqSrxGb2piscyQPO%2F2k4YXsgStBkO9xAWLhPtKbYHdnR4wAs0CHc%2BxRIPsqPTjfZ0rKKJiX%2Fml3bdMgmE3KVoRbZnFDX5cWtfEJ2OWHUMWA9U5mBweuxwqcyg9UdnMOkhFW8tsTFIJrAVuKFXoKTOGyiINH1h6SDbxvddkdCg3%2Bl7zz0kqEz0VyFlfeFMKRRFY0TI%2BxuBFNunRMPOTisAGOqUBbKnMPfKIvA%2BKWqN%2FHZWISvPOLfoFsle%2BvvvPcwYZ%2Brl6ttcDH5ZzOW4UcZ2Gf%2FJQf5bnKtupOEtlRFLriBeq9CXYhxCYfJPygp%2BGW7YJgPzXGP1yAQ6QWO5KiN06Iwr1MMZm7gLGkbhz9%2BJCYZqvuHzsJiMzf5xsjtY0sZ0cRjWLLkBUIe50A6heVMEuJcpayLweK%2F2YdhICRWLUXGMHGdNkT729&X-Amz-Signature=ce14e266688f22a4defbf961b5a6172d3a246342ca07a011748b5cd8c124a511&X-Amz-SignedHeaders=host&x-id=GetObject)

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
