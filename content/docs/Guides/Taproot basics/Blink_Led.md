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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HKK3CW%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLdSyKS7EBSE2lGkeos9cyzDtz0k%2FOz9TDZNQwQks0mAiEAqTaK2PX7boeUyexSt2VybbdUGmL0mHHozeaK3rutsggqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfDWLhi7bMaZQ2LUyrcA19l2TinKRwUJnQiF%2B%2BWv1V%2Fqr%2BX5CczgvCuh%2BXl2BfyvYwyZX1I5IUHiefo11WxX%2B%2Fz9%2BzufIOQnMXLFlZtqKxA6J5bUS4iUv0xvr6dzz2uA0mqfb4%2BlfZaYSiKIFyhri665lHiQqihinGQ56atJne7V8M05CAt7c9ig0xbhsxmkZYWbnXBRKzP73cZF2dJ8eD%2B1nKGYZyJ4xSH4MWvGU8JfiPOuJgIICByOW7AX6E%2FsPXMvvb%2Foc0lnlYJ7UMYjSgGNJmwdN4O8uF9Uwqa1GtBYIUIa4bROyhqwjUdpItDulbAe%2BUB0S2NxgKsUD%2Bd6dR6s%2BwuROn9i75trEr0RoFeLXEuw8n81X%2BNrrFYr6JnrhTWId87j8%2B%2Biekntle42EG%2BM536tZZBraL4Gmu3Kq8O3321zLXdUYr2llTSHUL1FZ0TElSSWs%2BPvVn83L2wAtVKHkyHZdkjHguHdC9ypmR9nPtj5%2BhdWjnDEKXdnetzColY7Mp98s3xcBrUnbwZvbWvnt0kENSviCE9PsT7fekCiypZZOPOVwA%2BADKi7YlZVAkfZavjEwlItWfEZC7JKUghDXtCbV9JjPDbm9eEfIL31b%2BGbh9HlHgCb4Zyq2tqVUyFqjuZp4mhh1SxMIj7hcMGOqUBXrq%2FVuhUFnE8SqnE47UTTW73OCAtc5CLN84F%2Fdpi2svo2lJCGeUtyqj1ZdJ7S%2FhW7zT3JTXl9dpraL5ubEZz8npPq2DFipeprxTvNXlkRiZpa0eCy7gk%2F%2BdYs8dmcs%2Bjam11NHBY%2B85gzreQcMD1o1klxaQw1YjbMx%2Fl3%2FxPiZvz4s5Z%2FUaO2Ef4RWZmW7lVUDJt725F9q7EH1RuxicBWPmI8r0S&X-Amz-Signature=2000dc5f6e539f34dc987ae9b49f83744027d6305ae59d115fb1c896663ce949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCVZQARR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByHlX5UGvj4XR1CuYFN%2B46Okud2%2B5PA1D612ShLMySXAiEAjizNdRTB1Gi57DkNv9s85%2BpSTEdgTcuand64I9W3AdQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9dUNA%2FW61VbWRu%2FyrcA44vK9wQXROc7Ke%2BkeCHunpgJyrgxZ3ICdLaLIDNcOwUt7SGKzzFTPjLYLZwn1SyXmFwbQq6xDll1QRGX9Xt2pk7omxd%2B2qKC5k12oZaN%2FjV0FOAHRWV0ZE7HIlpDueuq1sLcHJw3cOF1dqitB10MA20piCpKLDM46%2Fa%2FVLmMrzF4zOjGNpIs27MG29sdbnWxH5kx4nOzK8dWQ%2BufgvUBQWhVSAhwGx9%2FpCk%2BKoQZ7oK8Lg1qhld5mWmAL1C8AntJQ4SKLh4oqIoKVvWEesi7rQuBzZl3O3beLC5W03oxNwj5VC5ElOndoJUMSF8c26%2B6fZP78%2BDrHkJloXH63G6wEltf7XclnykZ4iv94oojY6%2B4pyVIvX2zyMxlJqvlMfGq1v2eddHnYoRDXGAlQg59AHnrya6Y6QUCjwdLvbl%2Bt6%2BAlfGONCl8zDJpHxUlEK6BbUZxS7K1jJQ7rKPdlzLLm7sS9oSiHvByGU2HuRoWNwQEyohepJsOvkAUSsk3dPXxeQ3gGaal7kl3L5fqtkMfmnp1dxnG1GLYVRhuhVKHCQmwWqCxFJPCL3vOpm0Kzc%2FfOoA2%2BW1BDV%2FGCN2uEWihCAJJBb6oUdlIDTlRujy4MxZUC3QNPIrQlsujxq4MND7hcMGOqUB9xKe6qbmSWU%2FayuEwizLlc%2BdEw5iNAL5Bp6m%2BbRlSv1NnbBwDZQi27kdsQ6jxhaQWQa0ts6PMyTWYiC%2B0QX1wObB3G%2BgCIGwnOh3p89gdFAZ9VdIy6Z4IyR%2BQ2nb2EI7x%2BO8CenDcD7WgjLAefXwJRqBUjnHA96zPtMbLnncB2at7W%2FGvbtfuP24DsMk4RyO5FIEcQXRjIuxXHbV%2Benn6skuu5uQ&X-Amz-Signature=8670efccf00795f2f7b433c49af9c9f4284aaec213777b4ae72a49452ae118c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
