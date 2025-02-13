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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRGE7IMI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXB%2FoO8HAJG4dmgXlC%2Fk%2BIFRldtDKDX2PAHLhQNnXNdAiEA9Qa5%2BQ5mHGdOkDHbYBxj8TmI7pOv0Onru4UvYW53J3Yq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDHAprsUtknzuk4DmVCrcA7FVV9XOtdfXZKq7Q%2Bti1QZEx9Na4qYdHL%2Bd87bNymLz2qM9tpr3%2Fab%2B5XdiKn8LAGuINHOYkQZteXYqx3O2HHMSwKHzwmmw2LZroVLYyZNI4BsNsO79ZIFrp5I5lIM0zx4i8splFok5%2Fe6J5rifsHjbt1F%2BqRkydlHQtKjb2dzv736t04TrvoTAJIhHQJRk2Lgn4bT5C0GvpJ94I1pZJVEWPgnXmtoQnOQQupXL5GKPllq7s%2FJrBWFaoH8nTLcqS3b8eaOT00yrgzUBhh65y%2Bao7c%2FY%2BCwF79FAqDpJWpZy%2B0TXwiz7DSgvU%2BX%2Feq8BSQ7g%2FvLIwhrDoBPSbg%2Bph6J7E3KkjHJYrPTR21cW1fAtfbTlbE1JLnE9bIhbByTGg%2ByGPDf%2B7%2FvH9T%2FsT%2FSJoXNdfkAPDh88wR1Y66TbkVN1qtC1ktOAi6YADxZGR1PBVrkUw8FasI%2BpIEzs8ymJj41BWApOXpsxRVabuQgmeRteHSqOt%2FLHC2wXtF76G8HNn5tgdm77FotJsg9FFiDxLCGVq10KqUz%2F8FS5oOR06IeCQT5JmpzV8I8dH%2FDQCK7dTyVXnEShdH1S%2FCDewokA7a5gBEAN2E%2F2gD52SlMLQ2rF4lor60cG4k674yNFMKLaub0GOqUB9BYGdHKZvYgxP6upX%2FvwwN6zUNwMB8QVg4nsyCZKYS4hsq%2FDax%2BuGJjUN6v4lN8vFHk4KcG3rXYdODaJCXTh0%2Bp90hENhEM0jZgw1fEqU4Qn33JmKrXuzUtK%2B5s7PPyaM3K9yyTdU9loGNGifqbMui5KXmR5Fk6ifMGMbmphb62VfCimXSiMRXnm6T7HUjI6qphggKEvD%2BUkFO8RjOc1Z3qH36Z%2F&X-Amz-Signature=aa38a14b0e46029740700580689f172769082cc7e5ca2e4fc61f6692ade00ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TADJ64F%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZL%2B9vZ%2FgJF6PxyWWd5ndjZIbtwPHh4LPxnnXL7epObAiAXoZL6%2BPLABNbl1QrbKKngxxZi22fa4CzQJwXtkvmr3yr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMPu8MQzvQDnM78nHHKtwDfGFVocm8sIXCHEwDb28a8%2B4cDbPcYDOv7K%2BNSAxmk42lYvAsJkOa11Bn6hlSuXsSgevmfEEh21zEAI9jgWje8hnvxIFOtmfaHCC5DVF4fSxkC3tD%2F84G6qnQv%2FYqL87yIR65kDL1dQF5IGQcyxkP81a9ZsTp%2B%2FmzughAOpZNTrCSonOt3W2oYkzCnCrZ4vUGWCQfMuqTLf5uXBXfnby8cFz2hHdFsv1%2BBV4mnLDe2sXlflwXkNebDscQgnzOOIauk6oNnUeHmX3fX57g8dtvNfc%2BIiNwaLlsWUsPtYk2PwlEB6Bsw8KEdfBK%2BVuAWxh8q%2BFXGNISpOkU2Dl2MO%2FG%2Fl3nO0pnxdIZQUsvAMWRY6KTCmZgvdLHI09wllq0ad44UO0yzulUjS19rQ2776a0xFW1fumu%2Bcmr4gPwnX59Qho43dOttxG0dT0qV9Av1Br5I%2FMmFGg9ARI3e8KKbzGWgzorGVPdlATWLyJ7cPe5P0bvXdw6HdbjFg4yxmO9UvW0kMELqx4Um5Voes0SPngK%2F8fZk9E9QL2wTc1Sbo66T23Eg1BgGT9Q%2FVo5LGwtXaT54VfWxsRlll9jj9t56x80VBUpN9cab%2FW4q2fJ4yqkduFhINlidm0f7N2vDQwwmNq5vQY6pgESAWsRtHUqrCctWzrGePmaBUJzlUCd0Wt8wHqchmZh9tkDSVgn4Tty1P63wzzxbheQc%2FO4yqI7q3yN%2F8wiwMgQzmm26ruqyJfYWaZyE0ESf%2B88t0aM5SeWQA7xrqXisF89%2F75aB%2BXlJSpJBceke7r3e%2FvfIeZwNrj6FdQHDhkCDTe%2F0jguzsqxSVtqxulVTMwjKQ0hUpUIB3FQNNNynTWxJUSWWHoS&X-Amz-Signature=00ad506dfdd5588cf19d765a73bc928716c7ee6fa8c80e9d6e68d80583a43a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
