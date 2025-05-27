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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQV2EUYQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsmI7aZPXe%2BYHd%2FgH9VaK0BuztUgMEFnxDJ0MvE5LzbAiADCrRRXATJ%2FbihvPAYXk5cgpNzfrDHh15EJ6N9H9CSzir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMRSCtxImjDd0iZJlpKtwDgOHra8gjg3RR%2FpuXm9BBdhCC9unpa0HhAPCjqMNTe8wxX8L23vv5C5wjFTNrxkUH3thPkv8v0hlAtTGJ2HSyoou6z5%2BF4n8ZVomENPO347CAOKHZzB9AuoHsHmcS895BUYJLUSRAD8y%2FXb55MZmERy5LPFx8Ivn7mqqz%2BX1YJyR9Ef7gUmGOEXvjnMzw3xBn%2BKw1NvC6XPD83S93PfTb%2FlsaXtd897aPwBG8cn3hBMFMNffZs6W0F7vYhLULv5S1aGCR11V6DUzN2FWV4IiHAqCQd9X47J3qoPRiN4uqpOuz8azBxdtIEOAVU6TvdR8RGiq09C0EdAf8I8sABl5pYfudOqazYGZDLht0VY1fP5v22s0AhKqqi85%2Fm19mIf3m1GCR9CC5hddaGV2MK6bCBhzzNqRN81NlG0YpFuqHeQh%2BcxU7yzZhn8V04nzc%2FmtIQlR4dNbqHUAH6L0zXASHXVtp9rz1w8xbBbuzou7OFuVN8lrCIWPB7oZh%2Fky%2FpFhXlHqU1hCZ7tAhRcEheB3mXQ%2FUMH9hfrWFgoT%2FsUWdXb98Pt1E%2B%2FmG6Olw9ZZ3Kmy%2FGwwPlgEKYYwyIGn6X6tl0yCTuEleSeU6uAedIkG2nI6q19BcF2CqYQxueeQwmtPTwQY6pgFPFL73XJOBMPva9IiYbekJ5LcNwy7o3VCsslpn%2Brsw8XCNqkDlkiHqGav7Pkggpmn%2FPdlTGUZJ8aEgaPYWFR%2FqRk02vTqMxkd9tAwfj7r5KdXz2CjDfTfFD1mFW0S0OFT4g8%2B6p50pDnXXBXIk49CLxZGwKhOyaaXlRf17C7ikwheVhRUjZMajr8Hf0U4ldCJ%2FXvYItcQao%2BuyxtzBdBXT%2BhOhFqBb&X-Amz-Signature=6a4fb0c7d62f43e8f9c39d4ce3546f996574a83c34b05dc56fcc5ac366f795ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MOSV5WS%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB86Y5cUfkDNs2Z3%2BhQv9AGBLe6NDuBHrzUipu5F1S2wAiEAnpG8R4COGuTTlghH0Pfp5NBmcErkRHYB4dU6wNxQed4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFLTCP572YJTImHOQyrcA5mEX1H%2FkSi3mdFzwIi%2B3Gez7cfZQONLqurlvD3e1sliujjpn95B439TaPw60mKSVxi%2BMGabiY8W%2BB%2F5XLaHdGHSnb73WpduJgQ1asGnD8fWxLBnEOP7emqskeZYqBpXmXEXGcoz%2BPEdbj31t2wMdjO3IF9oHeyBsMSv%2B%2FWIgWk6%2B%2BkNJ822T8EYJulKw%2F%2FwZBSLCrpXSkemv79qVJBxqPjeS5GDCK0o2rxTTO0hPcp0OiFT5Bf86%2BwSSTvGmW1kyx%2FrksRHLve6n5V3uL0HpS239x3u1h9wunkRlb5xVhvl27gQiqXlvh5S%2FFhVS2UvL%2BfYaEOtZac%2FpJFv8z8d2dces%2Bh77YJw1K%2BWGgWtbROmxxOCdtDntHENbv35i42JQY2VnY3BLCrVK3zHEZra2Ib%2Ba5YFblV%2FZOVrU88DYD0yF203Kuk%2FjtwSgBP64VlHKooT%2F5o%2Bj80TiAj9zOW7T0p0tWishWSmeZLJINw%2BoL8QtOUbmDRUDekyRYAvrAkcXcXLl%2B%2FSW72JgMPiJRjVUcJ6ee1Q0ChFFHTiNXTovt9w3KGaDxlwKCwTaBVzTJONWXMXC6I9vpzZo0n0sao%2BHDXYLL4bRUJ%2B1bxbY4NwMceqGRXrRFtw6nqO5yo5MInS08EGOqUBKlq6y9G7mTfrplsmjmv%2BoINz1aGO7hZBIFNuU%2FbptQ2XBOADoMWHSR%2FyDWeugu5ol7XHuaBa6Faig5XAdJlcQXQ9az%2FXW1LiGHbCnHUe7AVT45ESeRL72k7jOrxwCC3ev3uT%2BIyXppE9SOC6bV%2FcK26dnRAYzrKnFoE78pFi%2FRU0tMkEJTEA9b%2BCghwhz1vsb8MenlTvmW7U30wL2qo0rs1Id5E2&X-Amz-Signature=06b27569bd6a3cb504dd1a6bc4087dbc7c06c35f353f035f2f7581e15a202400&X-Amz-SignedHeaders=host&x-id=GetObject)

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
