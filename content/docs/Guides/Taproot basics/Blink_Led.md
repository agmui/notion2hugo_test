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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545NIKKS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYysarMjQajkvvqaMx5oGLjbwv2D3bfJPmP503kNFmkAiEAur6YHKBzEUa%2Ftc%2B%2BsERTdiAPdBDNJU4Sd4Dlv1lmJKYqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWUSy%2BZjxz8zBGZ6CrcA7IAFYpz6o5vIFWZU8r03pHZmqIDcDksvXU7E10zlVnKogUkkGYgGm5Lw851U72osMOYPmfJvYt9r5K7ag44uLp4d1UIRq%2FDfQ%2FK6HuZMKIaA8Ytw0rw89JCr0YMN2EtNeHucIV7A8UV9p6I6r2eTRn2szkRrjSjhRUFhMKwMI4YhzeH%2Fj8HLDBDWOJDUaIArbMyPbS53aBlqdcfLD87pLcZH39iexAQohjXEilpNgjiDZ14Kz%2FJ%2FotyBWuejnKhRLlaU%2FKjvmczNMlNteJQAtlG2yyJ9hgHKOxNZPvbcDeDD5EPsUd%2B0a0gKeeCUiDR7Z4Ui8hcLJ9s8oJKFEGdergOK8mQPspzUcIKuKehsQbl1Z%2BeVixF8p%2B%2Fwj9mIO08iYqLuvZl4VDOciMtP1zd37Nj3j4FfKXEvaMh1MifAA0lL5WCRReJiUvybPrHfUGsYD5vfwLZNkCqJ%2F3nlpaT5W80wVHViEhv%2FGNHfNy5BFXrHqtV85KCGaU79AY3KZ7znAOm%2BMztae2WIYIzsHhvHSXPJzvWjx3hX6cfElvTbu5NvD8TqsrTdyQ7wxCCTgmU5uxTMTFkqqNXYgZoN5N%2FuPYQxN%2BHI4bZ15xfqEwxywz2CrBCLhwAxX5YPwZFMIvt5L0GOqUB9IOB%2FvqpDMr8CPOjRG0WK1NPjFk3gj7EGH9FLvvQ6dVsvRKKHeMigLBSNBTmpNn83DK%2BSRTxrQwKm1tk5wJ42hC7qvlH0Zibag%2FPXt6gr1S%2FBEiEaxtrd%2BMGonGw2xrMoaLe38iQrZYnGmlv6BPX8icjH95cCanEZ7geSDfsRM1wbTqPcCbpGGnpG%2FZWUIyQvzXqGPg9eC6%2BQiEO2rcve%2Fp2rXDP&X-Amz-Signature=98fbe262b1d33c930f32f45d3e539a7a747ea7b24adcd0f162a585c08942ad03&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHITJRU%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDflzBOKJXF7trlzy7tJyFOwk8zOuMymVkCbH%2FU%2FP8KEQIhAOFDC%2FyBoN24gGTHOt3gQSbTIophkDKFC6bdGHPrFtT%2FKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZoEvoJJWKfbH%2Fjaoq3AMpMy5PEDSmw51Qvcb%2BkT756OQ2JFkXycPjq0bsw9QNPvOcDHtjB6ihNi9epJt9wEy2KayNl4it9SbAiDfIqPX1e5fjKa%2Bxi5gNNiGEsSIys937eFUNsUUTtiWBtxY8PUTWXajhQSYXROMAFAIn5VKZhbMSZigDBPkR1RHMpU3kYrduQ2UmJvpifEfZUZf5zhOgwS5XE1BY%2F%2FcDW0E4XyxJ9qSnWF6Pr8M38Kj1pKg%2BBzGqyJx8YqPI%2B0eFsdfwZ4yjwqhebEnhy8V6hru5xoRC9OEWZCEjd9PbcXObTRdM%2BSEYRZsjqjPenA8zPk2zyZbPjVkEitD77Ci2naP022SlOA1HsAQtMu5LlR0WtOgLq%2B7AABKORtQq9wqF2XBRj1nnFWK28WYNQUFhxTYy2wYFkKLLB0%2F%2Bm7W8ByG1t9SZe7HBNgguDwmnxLxMqKcZJ5H1BzPYEtyLbz0wnL3C0%2BepUY2Rfs6aQDkyjS2ZNTdVeHVNdS8xgeHVcA%2F48bcEijXe%2B%2F0%2Fb4rl8ZgHnfmWJwlUdASI3xLp%2FCxXJVa3HURwkWfuO9jSx2ZqjztPASDSzKC9lE5dzMDt4kaZd2fLahnzLr7oSWnrGBWyudl0LQaxMpbif7e4hU9qPqDC%2FDCs7OS9BjqkAUSoGWS4DiX5lOuWoYVmFSg0OozMdo4a9bXSFaEaJ2ZjigNnkbjFonupbcNSUwoNWBX%2FUYriea3%2BS2NhpOAtNagHPihBlx6qqLeK2VGIxnGKWd6LmpFFDN9%2BlCJM10c6lj7fCX%2B0I5N4KD90pNDgeA90vhQGObHSd%2BzuAHVXEC7OeWOH0g3js8uzrcQarBN5Y%2BAuRi9us0M5gJV194xS5BfYYfLu&X-Amz-Signature=2b7bd50f4250a28ff09d2ddd5c9849c63146f84e82c3c019eaaba8f1d849189d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
