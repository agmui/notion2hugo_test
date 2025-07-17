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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4W25QCL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB8FCI8dtYxdwSgH7quoMt5PlUeEbPp%2FyzXeT2ftZ%2BThAiEAqbVb9s93r4FYEoR1W7bBM0A06nuIpQ31xzGh4iZ1XQgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDGq%2FvMUJqV1eJhATdyrcA%2BvU3J7nzsNw3aj34PxZzQY13CA8bS4LnEyZLJfiuKgFFwMq3bKZNLabWKAqxsWhZ4n4jel9ZpKkEQNKq3GzzNLL3y%2FKbWcahxHq%2BCQxBhrlBfbc3l%2BkP90roC2uT0gE4VmRV4h5y78TXyQvGbVsL0AnbITN99xZqH9d%2FnDcpyPU9zl5kzBeh%2FLbyGc5Mi5kgiMWaIdDXtVyPb9J%2BUAjby36DvwdFwNc%2BfaUIte70XBNyPoaF2skNqMI6ZFL4aJ0kedJ7R%2BheHGgyt0MfEnkcmI3xVM9ugqG1%2BSvVxApEM3G4XsuCiFPnAHEVkqOmWiPQAf9qP6qiA1hDvzHJzCVwmhOC9Akm2D17aYhFgaKLIawiwmHd1%2B5JOxmQu14VSpoKQvuPpwui18zVOct25r6oe9nkOmX%2BlZ67kn8Kpvy9SlVVZ00Cgy7JK2RvMiii7Fkc7LSqeb47%2B8Hyn20lt1vBgF%2FY3DgGS7Ehk50sDvsGY0Y03KGMDCxGt6f6TDRCQPOEiJMeYUveDrMBBuaEhcSwXNOOMOSITDURRHEHUm8tCgiPI9U236quRa7qv3VLNeg4yOKVUPGDZY%2BEyH3PY98yRTZG5ZYZGlMgfui9jNTcD3paDrJrIaxJZvCy1o%2BMMHi48MGOqUB8BUxwAH%2B4lC29JaZfTMh%2Bq7Y1%2FPxlN%2BS35ywBKBZg%2FEZ8G7gBWnX14VfWFq9DIMQGjhaOJsdKbbeW4GDqE%2BBxbFVl3%2BVN6jSZcr3b4EUbZznL2rKW0RaS7MfIQUuGuBaTrDeZD56quE%2BURRyk7Hh9D70tLWWFzCmzeusDfRjrv7fHzdE9sXD5ZIDNgxc6E50Xw59Eu13xZTQ2Y1Nlj%2BGxatHkfrg&X-Amz-Signature=3dfd266f3533cf2a1ce3ff91d0de58458f88308f07c22a04d556eb61f89b1fa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV5JYJ4R%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC0llnkH0GnL4BQqYrXxMeAKqtXcshIUiVkJhq%2FI8Z0nwIgXKcCbx2si15m6Ool6HO0r2K0nxZmxJUX8CUcfpLJfnwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDENtJ2F4vF7la9E%2F7ircA6NUfThaFUBufUteJk9dWDTWBbZeUX3QONDa0m1zi8muw%2FopIQVIy8SGhkafVL11k41cvvYKsWqOoc3GN88kUEJQ0l65u5ce5urV8ck5IAD63DEOV1NN8d9eIf4g10cD8yY5MUEkFsH9jA0SHdJ3Jm6prdC92MnTZPY7Q5AWqgW2LMDl2rEWVOica7Lw3hPBXxQt%2BXtzKZCzmnjr2%2Ba6oTXYQ5jbag6T4Dl6B1kZW0nuaYhvnq9gr6kiw1gqj7aFTRXPjiGp4sR8C7H%2Bs1MkoIxgWvnuQUSKeuTx3xfNkiYEhUVoIIp3yzWAt8yQY7KRgtN6GCYCEXFkK%2FeatsWIAcOrKoq5hJ5BHIWMvjZiUBzXsDbsf8iD%2F3Yg83wV%2FhsDkkSzyNng5w4hlXdlL9fx1Pqc0vYcwjYI9mp5izGQlqXFxHirrfw%2BnjlLlDD1p4Ag04h34X%2FVPkBrxdVQjVvoDC3BVyqHqGsUugOeOf%2F%2BK57R5hWzofsPZ1y3AXuDKApYqLyngMr5vUYnRLsPLDwygNlLD2wfnXEbHfMhoTe7CWkA04ojKYL%2B%2FWpz%2BlCgqcMB%2Bs%2BTl%2F0xg5gWa%2BSy%2FlsFu%2FH8oeuEb7qgtP3vY1pNNgHiBeLr9PSCHTYWGQbZMIXj48MGOqUBcjZani6G7mHdqbXWpVb6Q9W4BXMon%2BCs3NHh%2By4g%2Fy12BNN%2FlpQGGu0T2UJB6mlG0BZ8nEkl8pOa1cp8DAyPAqyCK%2FVxbcWRxQ5TziS9bCpLUa%2FM%2FC98af2HpMLlYPIl3p1%2BkAO%2FyLrcNk26MWFM85s8%2BTteMPOzex0WCMsOhrbDO71PvX7ff2dxEzYcVil8b%2FlTjFEY0dS3biCEDf%2FK33uKe%2FJL&X-Amz-Signature=cc8ccb1a9ec6a892a43fe86d8d8323835caaddecd1f1657939912cc2543eddca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
