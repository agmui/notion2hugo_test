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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDA2GSR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6aDQZKGsCCETdKBIPpoinWVhKerw6OQbfGB7HWQ4l5AiEAs6n7V%2B8qC%2BY6fycMjkT2oe6mmu1tfsMBJKnZA88GKAoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINKZRclgmYuWc1kFyrcAxKL6jFhTPBrKOkkQqnp0SaO65oQfuqfIvXSUAc7KYSj4vxSP4GJeZz8%2B5NgH%2B1piH%2FEtdPSeYGYcGhj0Lmc3I%2Bz50LOAztau1r9R1e6jFspCOBo%2FoRUjWAX1oGgGCWQaL9CiLyVyx39YjLAUc6arzQ8M2kP4%2FDw2O%2FQLty0%2Fz5SKsQYGNCQ3UJcCwnkYnlZDRsTGqIQLd1N8c9nWrBPx8Bh9SzQqXzzcTgbqf5XvzWVHDxcwltjJfjDy0i2R%2BGrnqwNYsSvIWcYGfspZO0CfwfdRO5igixg3b5Izw30M%2B5ASStA%2FiOriVs7KCqZSx4iuXPiaWi1iERqDREESniJ2lDX2RM7chjLpfzFw%2Fqrg4080eiSz76lTqdmT%2F%2FThYD%2By3s7ZoxzMxOhsFTRIlC7P0g%2B6DkTMaoKOx%2F01RnpV7jrBS0%2FvcT3lw8tlqY1eS66It6vPrcWjgVjBMprSc%2FGspwM6Y49kgVEjvqY4atcs1826QNY8pA29zq%2Fe5OBrvnE%2FogFmkkZ2dUAMiV2PJ8xmVg2zflUWjPTSkKFlDWCvfdt3yfKv%2BpjlVgUVXHP65CiuQsiD8%2FVaRFZCxFdB2VB248deXCfhX4oum0%2FoTTjbjyBbdPIQQpRq%2BeRxRcnMMTkob0GOqUBY7dCTs3qAJ24oE4mW0aA8bnf5eWMnMlwmJ06pIEy8r1naHHrv657YXP7pOxYvMfGEg6oIFE0iysK0HqVFY95HR6pZ3AF%2Fs88oQQmi5kwhAOnhVT56cSX%2FkMb6spO%2BF4aijROPPRxCOkGMzS30NcJmnNIURbdCj%2FULM66RMImJfUJlCGbsXG%2BHoeJ9xmpdIz7yS94myFBiWoa3Lxkq%2F2DRWnrP4dB&X-Amz-Signature=6306a38a7008bc6c49f20ad23de63ae96a6b891a7dc0a129b1130cb87477b044&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2OCM2VW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm1OyQFOYJnzxQIGpN71OsZPiepR4bdCd0nONZMGQDnwIgLNMeWgMrQerO2F4h%2F7%2Bf2oZe0GRxOPl7nis%2B5Q5oDOgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVmCReqCZfi92Ma1SrcAwNF9JwapTZV%2FsxZZSMwiDBELoxXXzx7gldQNFSe%2BoYoIhOYzrtacSpYObaFXTnUyFGoTW%2F48ore2AS%2BDf4lpmfdMF2CfeF4TRV6c6Z6rh49tfS4i35ELN1sBc3883mB2N1hWv0VVQk8KhBqkRIFFaBEPsUMNvLzU5AMYpVNRCFr%2Frf7%2BqOYurNJklsArd09Sxb0Zg%2F5HrCrdWWyDfWi7lIZFny%2BsKeHHTDVXHcxUrE7qO9w7%2B8SBx6Au1H9daSvVcC6LJkoIW8c%2FIYIPmKYmv58pnrOfGjdRVGdygA7t2%2Bq1gW8N7HCyxIUJVcaEqvxjiW0KFsZiIcp5ZK81DGgpvCRJB6h6E%2B27%2BGKsujPZXwl2WeRGmt3qkkzKCWIJwigDbwcLNvT5tMXYwbL4IzDM%2BmiqBg3lTf9qDTJUxx0BL5EZaMnMgOxHBeyCDNT7ZXcmuESgrux0N5sKrKfW32Azza2%2BoIAEbSepqSsmYDoX4zq9oaROH%2FZNa8fEQBf0kT9vM4JQbkGRpXGFH%2Bdj838i9GLM%2FfIgT1Lfrzaj8Zm5ICll%2BkTwdJsRVcMk81GHrlXqL%2F0SJu2HfH6%2FmQ4EK7dCJxvrjwmTWPXzg0YnIwXSNTgiB2hJ8I6uX5jdzZ0MK7kob0GOqUBo9WZkP%2FWNkG67QJJM94SqxAWVkJtRYv8fMK1X3k93%2Fxs6y9ygX100LKxGXafu9GGDLok8ZRT%2Bv6lSIx%2FTHQ72rUty7SrtTj8mxO%2BlOMo5xGakdIXEbwZiKC4dc5mcaHCYOsipmXrzpyHDpscgcosZC2xXdIxGIV2LfMz4SNcsuB4lW8ozLgpuFFOavdcUSS9l21xb7wnM66GcevlT450ZQdU%2BEt3&X-Amz-Signature=b97a4888edb280ea857adeee929858e99b909f3b9be66efc7138860e64674367&X-Amz-SignedHeaders=host&x-id=GetObject)

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
