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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNVXTFVN%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM%2BQjrzV7q3HQ4Pu58PpHuhAWbT%2Fi7NmF2%2Bn%2FgnVPk1AiEApuy7l8lLWmw9Rb7Bz8koTqI7TXC4o6WZieWCOoFq1Q0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDH613OFfVGHf327cvircA1xZaGVwABV6p3L%2Fwgx%2F9NSQDT0LvtTzCbdwbx3QyrbLGCdwuLvfrboF6SzdpUiQPkkLKeJJq%2B2SBHQAhVOc2DM0WVd5alIo7oJmKghs0gJMO9unBaWug5exSSi37pvwjaT7Or152jWLvEABpNUhx7NacEDDKTCRe4XBqpzTu3yenrfpzX0t2N6Jh6R%2Fe5tPIy%2B%2Fg0FOZo15TFYt10%2By2vhz0EEajFRucAs1%2B56z0jF%2FA00fG4nyGv%2BbrimajQKiy52xejpQM9Qg1HAPBmp0HqDKfShtDgB4gSsozR00kU%2BubAwr%2BJVf7%2BUCg2F8MwQsIQpBl0RmlOfzyV6wWLmg5BhgVEWAqdRRatx5AM0H2W5%2FaH8kY%2FygqR7tun8%2BpEYtAnJE2LvdylORmosPeYEoCWn6wWwujct6qxVz9rSex7A3AWwCNsbQ1FQ9fzIlrg10TNabUcOU896mhiYdDB53BbW1UxXMA%2Bx1%2F8mk3O4nFM6TwTdNpre7ipfv3CarGHyFLAouSZRxH8zdr9jRrAaRQbgl0Fw4lFrJDwQtC54QETeQQP3PL0N0uojiC9%2BzVB3isvh6RFWQbKToHyQjBakw5gPe%2FCxqyBMNDBJQP3HqznzXDiCt6sigu8dSa718MNmj0L8GOqUBLy4vMFg0Qf9qKxrQfUwxHrOS4jjBAvQV1RvJct1v41Ic0X4RjVzz0wjmDekMg5BNmdIgamPm4MZX%2B0Pg8wOc%2F518MEqPiJdAAMGegl0CysRLF8uwNV%2FmUFcoXLnoVgTpJhhsjZ1KgAjeLlHCA3uzXQSS8B8%2BguvIEVwApq3OER%2B%2FKyLP4XTbYYO6tGB%2FCbGgtEe3y4BTOzl0nSs%2FE1l7IuJvYcJQ&X-Amz-Signature=8d86ad4c5eb1b93aa458b3a65b2710d99c5e28e9e7f4b3904ab081a94ab658db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W53CZH6H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVi6B01n8QqljpCqZ6gnggrABUzBJQKg%2FpA%2FR%2FdxhTaAiAWlIPixSI4EZdW%2FdIZmLTzLuGwcqlIrQkBezv3JagjzCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMjK3JwHWaCdhD1ELyKtwD1ys76VNoZNjIK0X48WnzwqJL%2BKnGWZCUyAtt9J4%2F5VOGEoL3Y2p4l89A0juVFCmJKxa6bvvwJwvLVbkncHvogKfVtQHSJXV4pXgD3i%2FEJZSpry5qUdFbewhY23DPKSxYRjYMo62NesprijrC1xEz64QErH2VSbWFhykdlpXPN1IggxVSm552aB%2Fb7A%2B5FPgw7KkI2R59hre27sbVu0gIGS2NSPviuYrhrt0yzskJSkWHZZm5W1LgWKhN%2BQpTyBBxvO3E9ukktKsR4efoIeKS6PKm8yxC%2FrFeYR%2BsRGyi56C%2B%2B6AmhY91Afp7HzellbUYuTDFeAeOIV3KMxVFIx5hyhTIwQoXzxpkOcbT6IVgi%2FvAb9g%2BvzUPoZC55SMMsZaZ5IX%2Bv6VHVbq9AybXPcwyHJr1KFRY2Yj%2BCy7Ama2o9L6kboe0gQi3pqW3HFRY6J9oaK%2BcP1g37r4QuVWCmh%2FfrBn%2BC99e5aLL9jIsJSnR3m7xvbCGIq6jl2ZL6R3RiEkjyuDPvtFrfcjDxGS%2BCrM0ARg7dCreDZ9R6kb%2FbkZJz4ukUewQ%2Bf4girhC5VEywkiqD5z%2F5xq5SGG%2BUZpZ5Up9NPbMKCxhuHQ0A5qo0KifwOZExiFeoYhkefSse8IwgqTQvwY6pgFwnZ9OhwYx2u6gppIlcnpyZSGyXZ3qVgMzwkqyYuhZL%2FcED6z62qWjYdwJM%2B0gGixfJbMoevbJCMDNEZcsoHsXUpmBaaT7tEt1OuOoa8aN%2F4QNiTd19Gny6ZcpMNWgYAonI55EBwKTz5qpizq6a2XQcVxYyf1G%2F0%2BfUA2Waf4Ykk96Y14%2BhA%2BwZrGbzpaKm1I0hdenluJuL9RbI4tagMPlYRDNL7vJ&X-Amz-Signature=a4095d0256ba6142530248376f939dccca256db13b180df66fd8135544e90094&X-Amz-SignedHeaders=host&x-id=GetObject)

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
