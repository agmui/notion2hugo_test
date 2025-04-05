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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRVSM77G%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkXzqX2VbOa30YH9mg0rt%2Bj1NlPnCVdbC8jTq551vDbAiEAmjU%2F6G73HcGboVYUR2TWrHB2l%2FVQylvkWMdnnltc6Bkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDE0a8O%2BqvOQmaj3JhSrcAxgR1O356EDZ%2BtT02R7v8jJwC4yyw8VJhTkZL232JfIUEyE8VPN%2F4igfMhgL53y8oFD0V09RasiHYfvR7VROAch%2F8rTkVGSFJIYMAd9jYWGeNooKaXVmnxC4k28BgwunZUoeb9CyF4BQrQq5nfwzrko8Xba4wioaxQl7qykqjpCFFwiFLQpNrJFOpHnz3423GIcnfronYHMFucsHWaq5oxfq4WblIj3kPKM%2BM9DLV95vMhVT0I1FQpw2fvxRSQvVsA0YIKKOai111QQ6RRPp0pX%2BVFpdtetI5sSOoiCI7hxjBcmNGi9j%2FSDGz9LgB7j1GO%2Fq2E%2F15jeAbcTLTAgx2A3EpQm3hgVciTCPrYK00o25K76h%2BRUcm9%2FWF%2BpCqiNnDkuWgTZdAzK2p%2FpZ7IMF%2BfFnyx3rFG1h%2BloE8bFghWkB%2FsOrXYonA4I6fX2Y4ApVuuwuuHrUu%2FYLho6hUz2E7nbRwwHRrON6GYPolGX593kCw1U6aRuMreqnkCiEaTVFGrDgPr2PJoEG2uL%2B1QyxD5U0%2BNWdU9UUH8tTaQIr9DWbRgIGDUhm0qGAxR6MfHj75nxx6vuuvjQNlMRsOzS6AP2UKzAmN4sWJBrQRH52KALriuYNBV2ltJwVj8rTMLDvwb8GOqUBttgW3Hj6sAHf1f3uEeCes7b6vtVN9VA3Y3YW4K9ERHy43I5QrS537c0qcSABF3qvXoKHiaBhXKIY%2BUgs2%2F%2BOuuaGw80x7xpaRM1j9AQIBPK6nOa%2FLDfsMKeGubIZ1cDBVolR%2Fx%2B1M1tUuTFsOi91b5rj2%2B8Y0JwjnbNvJaCvHUfptX%2BMzFvwjNTA%2FPcrvL%2FjL9eSr8heqW1OZ%2FhL9XYEReVfMH2n&X-Amz-Signature=242d727dd0892f71d68c5692df8fb8225571decf7b48468627787604a83e8d7e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHIWCLN7%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBPL7%2BP4OsjhSw6si55zpYQolNBcBl7Kr67ZHHAKe34AiB%2B7O9f1knkRS%2By%2FgGX73KdyqZdPMe%2FJ0ACXoQFsMxq2yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMgKSp95rQMWGB3eIHKtwDVOZj8BChDSIHXeFqQE5RV%2B7mM8V2Bcf9QTPKVb8roW7h15kt51K54Vh6tWZ6tf1UHb2u%2Bdenga8TAfTCX%2BSlhX0%2FNpdkllMr9cYLLJwY%2Ft6zO7tvOzmcTx0G%2FtfpbdlhJwSqz5hnJqDnWcqDlEB7%2BqsCZhs90CHhd%2FwdV4EYAeBKR5wdemkQaN1IjjlI6KXhMXwByw79WJGqeu64P0NJcx8wCmuPzu86DcBNjOZvWhwP3N7PN%2BovDNrOIoHI4pYCgJxjlOxDVWoayUtdxboTixS%2BqHfngiSgrFO8%2FqbiU1IvMFCusUPfcX4%2F%2BXhjXMpCk71D19JKXdEV8tEDDqzdi%2BhdiL1bfI0rxOhgasz63RL5vu3VUf6Sb4EcWLtdd7syDBnGpcRFhe%2FqVvTmQknPYIEyhTDjyaw51bdyOOXCgB8r3O2jYXxqljWmLqsAT%2BrLFhqGs8XLF33jRK%2BIn6wRyLH3cyyhmNnDqsYimtH2SoPGpOaINvw27%2FyKSxQlliDW%2FCOTKV7kR23wwbFa0LUIzfHnJBOBKukYs0yLtc5fwXVwGUWykQsfjlsKy%2Bxffc6YPUIbqSZmrqCr%2BjCeouEazESprKRSNOlteQ4B%2BPEZBB1pR9nJDx%2FI0YBzkB8wh%2FDBvwY6pgEzeh15q3rSZP47qJ1ycjJXlmX%2BPwSuS5xM52awngFbgDm42I4Jrg5HyCI88qK0kFRb%2Fgtp2lysSZ0HFNsgoj0bEK64oFmc2QCEHYwqBqtenYHPTjZ1S6KxojfWzO1otjg40aU2dC1uDXnTVusbkTZymZuwuYrHRFgJD14f9fzcbD%2FTLAEBSy9uXXjW1hsT7DOLWnFcPJoo7F1eYUjfwxUqPPnhP2Ql&X-Amz-Signature=98c199e7f6f65f38a9c79342b076bbbe12ec20842de02a6669f0c3a8248e6f06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
