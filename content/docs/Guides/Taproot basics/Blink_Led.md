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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLUKH6R%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDZvvKZConPEJNwNlZuF9HVpOp2lRL5%2BWyKaxP734d9JQIgZ4%2FdsLvh%2FAsD%2BM5tRmnekeMk%2FehNQ0IFXW4TTCx1B9Mq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLVecjNDhdCq2KKokSrcA%2FUqLEdrUzRu8ALoDoynHn%2Bd9iUbnk9z77RiBBgdM0%2BQTL16lBIvEY3qAn1QNgfWcQaaqPsG1FCLI2q%2BsgUZmycfQ7qP5IVWJy4TMc3tRNf%2BmXN9nKTx4EHZhdBzlQIsW1l4A%2Btw7MfwNShNFQMGW2WgBSVcT9KwRo264OUduLjwwf9HZomku1ZUQiLKeBAdKHVNF%2ByboKgSrpjc%2BPBYUaYRZC4t8r6%2BQgJi4j7ODGWodNqq1O4LdUeOkeU7hPlds88Rvegobj9fJ0pVsysJqTnEcR8NWhQ6pdZH0XIUA1mf1w0oo9E8y3Zey2CreE%2F7nYuykXFDVCE6EhNoQndYzwg0vdHBbSbPWQUQ0U7zo71Hxre1u0L9IDO9G%2BctHMcn4biNsnqm3UFh8YMk8j8uxbZVczHv9l2cedzoUXUoYM1m8pr4wP5pP9HWalott2Mg9HHPBPLtFxh5gyka0AM%2F5gAdaoCdXBJrw%2Biet8UqF8BlnC51TLScAosNeWOidZ%2FrrgJIOR4njAq4aRFeB54JstB1iN4VeGthFdAGBIP9NSJmFfDjoG7s3SoC9v%2FddMDyswHR%2Bu9snxLnaaT%2F82mwfAZMuo1zLFcHK6cw6mM%2Fi2xONxVDR7n7utyJMO5fMMfNx8EGOqUB1Fd6llw%2FImmvBVORlVZigl7tgVQPgPTrwejwhBvG8Cgll7m1YHs3o1KJ7TKW%2FpWT4FY%2BpK4LIKqv9ztlSzT3n7oxvQY%2F5K4%2BcB%2B2ac93fKJU2o6y2W%2BI0gUw2SsgIm4yAM%2FOZLH1C6rTQPTU1f%2BtJIScbN8feDKsVVr8miDjQIljTCOUkyLdfsEQLjGuVtbBQhiVRMhrcsujE%2BjgH%2Fk0O8trKxZu&X-Amz-Signature=2e7f8af80e540fc8fd1f6060815551ca38c451c492519d36b2fa12f6d500a09a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5PIR7V4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCeLn0e%2BdOAh%2FL2CJCMNITfLdxqICQoI%2BCrAC4NMAxiJwIgcHhg1cMj9V6VmoDlvtNJDko%2FnE5VpqQutDlEnlIY%2BJcq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDI7Ulwv667vLVGj7KircAxaeHkpmudlF4yuT8XXDXMsgv3hK5Y5TAHpJwZqBu99zMOKrRT%2FUYGPkZDNjJmDw24VSr8u%2FGOZkg4HBM%2BGaIAQGWHXNYWiQQhc4o7Fva3YfdDEzm0Av9wQlgD6EUuT87Nq%2F9CtHTdvuwb4uee%2BlZo9zZ1XKDzbJbE3c4Yv5PzOLHRC1OtHwfMSveAsD%2FVoiLMpFu%2BJGmYcoqlsCP8Mxsf5hzQbO8f2k%2F0rU%2F6fYnVYsKyQ43EZwDlAYMrMIM0Za%2FDPPOHzTUkDjuHY2uEnqxNdUtVRYWUbmnNgGym47woMKPOgEEBFabwMHLS92mhsX7JzuqB%2FQD70UmnfD%2F%2FQM4q5Dqdjj21iBe9TpdzW%2BVrnCadtF4nfWJgOLjq846MuQdgswMcmuiWKoFHLVPbRpOYuHxNAJPRAfcHXgSql5tlRSndxULC%2FrvDF%2FdUOqpvgHfmWUwis1SwyIQkQWQEj7fZwD4L%2Fqzdl5Eqd7ktsd%2FSnPTyssTW%2By4pl8pjqXkHCClwm%2FP%2BxcXUvtUfR5hdWQhFtTenbqx4TB4nP2SiIdFK%2FBPUcUYc9KUni6HngFDYBS5dQnd%2FnjkpDpEfe8V4o%2BZQbt03dXk6HTnm2WUXXNt6lXlR7cIm%2BCZcXiaMvDMO7Mx8EGOqUBEA7vAOcE1NGC6zszOGbsG6A%2FfJF04qBzwMLhY%2Btl9Y%2BVUoyrAiRMm5z5egtjSh1K8SoReJwTRMYlBg7L6n%2BfVGRs%2BDXrHk6o7hDRPw6u1gCwhmVfzy90xQ7W8QvCpEF7F1cYwEHrHy3NmLCDnlrGoDEhC7Xh8%2BXAAcmiATts7M58Z4%2FVzjaOpMtgRkzrWzhJDaHbLsB2arWvfgpNaqiFneG2PzZt&X-Amz-Signature=a7ec6ce52693a0340d3fa9822085efccda32238e2121e6df93a794d6a8a42f25&X-Amz-SignedHeaders=host&x-id=GetObject)

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
