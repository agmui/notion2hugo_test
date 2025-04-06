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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WANW6Y%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5Q%2FBY%2F69cO7cfaseYXdC1vVKEa7JdET5D%2FoEY9U2C0AiEA2KPvo9jB4LTuzBrx0oxsSrVMGhiEnxjq%2FUTHUPnldRsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM7E3NpIZM0ldVv8rircA6rm8kpbRveZRyJG1Tr0lz5gQeZURYV2zi1pusxIutv%2B0JhIq26VCGPOfczFd9LO4AFZMn62w0amPf33uRbEUaFZjBiyPOUXm%2BSOtWjd9d8eUZ6dtrj0ckYWvsuqPVo7jG0RBBY40pt5xWoJ6ZamzXx9J3C%2B3KFluj8%2BVBHKgjv7kHLrmaHO6RARQ4l65F%2FMFOKPCIqCZCsP%2BOyre5damN6wpYPsWWXtrFjueRxje2YqIzbUzS6ajKlVzuSzJYZRxLU6G3%2BhSN6RqSK58iO8d1Dt6B3CkcBQSITSbe6Yh6UDV%2BN%2FGRqv0N7d%2ByQ4RVsWta3QicdhZ2NednjSm41zYKVBUnI%2BIo%2BbORM5q7EuerCOO3yWZbmU%2FmUeqUEdsTG%2BAC1kEYWtdl0AAi1pVRNxq7KXDWpuNDclU%2BsH7w5ND12IpDabd8bp0YwQ0WGwBvA7KIbUJ%2BIMNoKcMLVD8JsKmd6H%2FV1RmfjcnyGVgt9rm6%2FJ5aQoDhdn9jRYxSW7M6eC69%2Btj2Df8lYaEItA3I1A%2Bt67ADAXd5PkBdI7fw5SYY7oz58csrUYRD9C8HX52BovNHwxRasCtnfWIR7P7caH4IB%2FVzVt2Nn72Qnroel8GCWPknfTCAB9URVLAlNRMLnCxr8GOqUB3R0DamuvXCTowViWD5PwGq7tbztDteuT1Vf7f8u%2BnALBebx5EnteJN38Eyg%2FRMDbu%2BLpQUgQCEQ%2F92acQq9PbzJADgXbJaygK6kZwEsNHhVqpGqd9I9YUtGKA4Oaizvi%2FI%2BSlj1s3DQlMPFwmWB05wUsGUFu4%2FYqzcvvv1eJyRcDnhF2w%2FM9g1M%2Fb%2FsXUm2Z43zNKpaBnsa%2FCNp8%2BOhpymsrvlJW&X-Amz-Signature=f6013a895b2de9f21e0accca31eab3df81f4d562917371935ba6088df9a2a843&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMHSIZT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLR0eMj7SYPxNsB0cGJckY6CGJnpUeCs%2FKqLWwXzQceAiEA3fHN%2F6w0Fr3pzXoUiYBn6k6dJIIM3r78RKqrmsUfhOcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCPG7SBAW8gjkLZSpCrcA8JGB7wzJ4xMaHdU%2B4Wza9WRlPyJrSY2N8LebArf0FxS8blG2dR2K%2FBPPOp0o4jUzkjAPIJCv73TVZn9EQy9kHqScJziaFj9wkHeqA7ljENxz%2Bi3rOCasz57x8NByqf8CpH0rA%2BQ6TYmYNnhjp067RmsZSUh7opBbFCOB41keSwyyHFlUG8grk1WKZOhzrfOQnqhMreLCAyN7ZCTMjLP1Eb71qkn04Tob%2F2Z0%2BfF0Q0CVsvC2HR7AH0xFvqrzzxQIK8zemPEM8%2FEr6Qg0cc1pjoB9hpft7%2Bx6YHUtO1YnnIpy2%2BHpeWkhO%2FwRSYzmOeDuI7UwFKjMvOLxL%2F%2FrvrycE%2Bm%2BMf8OCC1LYNXly5bcn5AIRsjz8pOrdYNNp9w4UjuWeDOaX0iRhYRxkXeAeLR7Dh8MdtFaQ0Rqq85VaRkMmdUbnA7QbnHaHgElzPg7V1bNmrScDeMr0iMkNeDTD6UhJeMjd2jiYXde9Is8L%2FxMaYw95nkvvX7RBkmgtTEmF3p0Yv8DG%2BLY2S7qL42E0k4Enn2qMcc76gEV8pVHtkfWkNJtzIHG8ldlcjc9K5jtoa37N71buTqnuC6L6AjhL6G8zKYpaRTdAVSE%2FRqZDh7yNqvgndqly8gLDIp28GwMO%2FCxr8GOqUBp6QwmWuXx42yc93IDUfvkSzz6TDNUeRG73a6lvAtDldgdPPfQUl61cd4LDoJNCLCEuHMlEGUaF2NnapKKKWcR5hoZPoiBi4N2%2FXDmB82%2B5eLLDPL3uykpeQ7ag728szKJyU5s8IUMGaDgE3NGZ6AQ6%2FyqD56PP5toIWwt0zKPmJQ6gpCW9wCtxi3X5KfyD5GEXAaYejlS8NykEZmxvkNwczDAnam&X-Amz-Signature=44eee031569abe8806f6f97d269cc481bde7d5135b5de7f1cb2fd2eadda7ac57&X-Amz-SignedHeaders=host&x-id=GetObject)

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
