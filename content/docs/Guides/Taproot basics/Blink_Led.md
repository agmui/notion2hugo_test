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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMHSIZT%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLR0eMj7SYPxNsB0cGJckY6CGJnpUeCs%2FKqLWwXzQceAiEA3fHN%2F6w0Fr3pzXoUiYBn6k6dJIIM3r78RKqrmsUfhOcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCPG7SBAW8gjkLZSpCrcA8JGB7wzJ4xMaHdU%2B4Wza9WRlPyJrSY2N8LebArf0FxS8blG2dR2K%2FBPPOp0o4jUzkjAPIJCv73TVZn9EQy9kHqScJziaFj9wkHeqA7ljENxz%2Bi3rOCasz57x8NByqf8CpH0rA%2BQ6TYmYNnhjp067RmsZSUh7opBbFCOB41keSwyyHFlUG8grk1WKZOhzrfOQnqhMreLCAyN7ZCTMjLP1Eb71qkn04Tob%2F2Z0%2BfF0Q0CVsvC2HR7AH0xFvqrzzxQIK8zemPEM8%2FEr6Qg0cc1pjoB9hpft7%2Bx6YHUtO1YnnIpy2%2BHpeWkhO%2FwRSYzmOeDuI7UwFKjMvOLxL%2F%2FrvrycE%2Bm%2BMf8OCC1LYNXly5bcn5AIRsjz8pOrdYNNp9w4UjuWeDOaX0iRhYRxkXeAeLR7Dh8MdtFaQ0Rqq85VaRkMmdUbnA7QbnHaHgElzPg7V1bNmrScDeMr0iMkNeDTD6UhJeMjd2jiYXde9Is8L%2FxMaYw95nkvvX7RBkmgtTEmF3p0Yv8DG%2BLY2S7qL42E0k4Enn2qMcc76gEV8pVHtkfWkNJtzIHG8ldlcjc9K5jtoa37N71buTqnuC6L6AjhL6G8zKYpaRTdAVSE%2FRqZDh7yNqvgndqly8gLDIp28GwMO%2FCxr8GOqUBp6QwmWuXx42yc93IDUfvkSzz6TDNUeRG73a6lvAtDldgdPPfQUl61cd4LDoJNCLCEuHMlEGUaF2NnapKKKWcR5hoZPoiBi4N2%2FXDmB82%2B5eLLDPL3uykpeQ7ag728szKJyU5s8IUMGaDgE3NGZ6AQ6%2FyqD56PP5toIWwt0zKPmJQ6gpCW9wCtxi3X5KfyD5GEXAaYejlS8NykEZmxvkNwczDAnam&X-Amz-Signature=28f30c898de6e16af722eec72b4a4289f91aedf98bd5c0531fe7aa61a1e1fb10&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXCTWGE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1DvFlI0uYqzJc6r3G0fuAdw0g%2BQp8owyvgR2%2F2wE9PgIhAPCD0XGVTrmkaZolCusshW95moFKtfwxFWyRFVqGabyfKv8DCDcQABoMNjM3NDIzMTgzODA1IgzcwwgLhpwDM3h1I8Qq3ANvLsNAsoqdjpFC1yzKJeQgLh0O7kHKIkZh%2FkdUuvJrQKvWIbNhz9pJxtx4VvRzdg5f8lnAmMDgxR7lS1HFgDxhT4TgzeyN%2BbUYmuPYrxNhawDPXDwanODR8ID0YmYLcG1zq0FqT%2B%2BuCAKATrtQahzSo%2Bzy7kPdLXsyTLHFvyz%2BNRUADNj%2BqQACSAa7mVbzbyaB%2BNAYVOS%2FuybCzW8ceshCvzoP44B%2BrKz6xKUwDMUrjHMH5wDe8dxQ32thaVKnt%2Bv15NrhyOHquEP1%2Ftc6zVCPmVAR17VW5RdZJigspTsTKHq2zMz5vna8Dsi%2FoU0gfc5N42FRTkCoFTM9cO0px%2Fzcn9Ugb3hxCHZVC2BZlhHekCwu1wR%2BfVwO3FtJtO4VZv23pVbSOkDwK%2BQVQCv9izh5BzZvaMZ%2F93%2BvsvIVHgT0b%2FOCLx%2B8oJr0MAk%2FMXve%2BQXZQFsza2q8ryFavZnYuU82x0g4T2U7Gt4np5ERHxP%2F51c%2Fc%2FZUyvtGVzCCDggRQfNVBs0Gb9k3T%2Bn1G6V0cuWwUjlfoLXrEMg%2FrjIBk3sABIZycAUGkRzW801qAt%2FkLI9wBX2emEIi%2FgPEH3WylMDwTiT11s43qMkSMsNSSkxq%2BA7XgiKSSNsm70AYVTCxwsa%2FBjqkAdzLY9Na3LtQBT32mWxoDhuNtPG8MATcG2lNvI5FhMLN9JYYR7pcaLfk1JVNjmDL6WADwGObIoD3%2FqU1NMuiAXhG9Kc1aKqpWKxOZrw0fPbvWF4fEvwN%2BpnKCoiyBW%2BaoaxuorFJOvlg7IcJi1zggrqSFXlqNUapo1eytr4JtfFVezK%2FMflXThYDK%2BUGuVTBDDZeLO2iS1HT9XFRzq85vLwsrlye&X-Amz-Signature=7e403f25b3cfc91937f313b8c34894ce520cd21c40d01d5a5c34c2f61560f40f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
