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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJL4TJ3U%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxjcswrHbU9DGa9DzMw4%2FkgHHx6deXcy9V4vDfI2CVNQIhAKQz%2FASJK71xzweYzR9SPUCpiVmBJNbrLSN8kUB%2B8rLIKv8DCHYQABoMNjM3NDIzMTgzODA1IgyfKy3L7Cb7FNUopekq3APeyt9XsfKuXdrecU6cytGY5gJsPUyTHc0wBfkKJAwCx%2BQ5j5ESZ5QhRrYKAOeqXZGkcANiyouu3BgTMCdxoHcjowRj12uaQm2XniHQAPanxsoBYD0Hzg6u%2BUSgj0cq3knqwo5Q0bDnidVKIYfZLx6f7KyAAq9Tdxv%2FMZw4OtlwXVCqwQLls%2BL%2FbWjtti%2FUktAEJAGDKBiFI80cguV4KZMWDBEkZzI2OK88ZpVEe96M5HoBO90lbM9yQksTy1MqiDMycJ9BnBqHuH8Tp5DffjIPtfw71utwHDSC7exb8gIXsgS4LaqYTs4%2FDEyIjjdDCDH0C5gjDP2618eAs%2B7tcEQ%2FzzLs%2B%2FD3uCYZYN4pZZa2Bh%2FrcjQHxFhrJeJdOFxXz3Hi4iUnCOcsTMySRse%2BJFX7LVI114XATfFLlF8Pgin3AWUhpS0Od7LmtSaMJymECbVXikcFhrcqseMB6s8IGGxyrRJSJHCmBpJQUvX2FQ%2Fl3D7%2F7B8LdJREyJq1wltReAU7nKiJQMw6aGFZH0T76CMA5nu%2BP4iqny1XDHnAhlpUiWFNfEbsJqk7Bg%2FI0I5lfuGA08L3KAVN8wEF7iKtACGMJGH8%2FbyPOxWAMdkyYioNxTdHsq%2FQ5KIMduh18TC2vtS%2FBjqkATB6nwXCUSnQdU2ur8I%2BmOYn8Zu%2B3d7d%2BAPvZqrQMzCco%2Bs7evCF2sAH%2FMW%2BTMHK11SPWQWGCju42HbLfbY5OOV2XERT0RQGtQUnJsHNWBX6Qp6vToYjrSgH9VoKdQE6y5QdPiHh4oqGapdru38Znm%2BCElW5y5C2%2Fm5gyJFbz%2BlViyQP6%2FlE1%2F755ZF%2FAEOOtewmAKUh%2FjukyDn4CMQZ9Brlm90q&X-Amz-Signature=9e637aa705cb4ae3bc5b6c9c60e62be9bd63fea4d9c625c362a2d5c77cce64ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BW3KWMD%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJG8KMX%2Bpg889KH30al0xOP%2BPSXsJ0dbdm3unHeQwAyAiBzo1gd0q7wu9uq5qxsbEyn4Ve%2B9ECIzk8Lf9VTjFUiKCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMv7FmszKhMZC671D%2FKtwDveuVl3UK60YwMr4vG5xDetstNn7BFIN0qQIEEoG3cA8Cj%2BeA2j9NG1FjKy83%2FJ9WauYsswvW6M78pL6E06spV2n49W%2B6LHm4AiSks96yWSA0ez9DE7VSWntEnpg2aWAZGitQhWWHBffHIS5FP1vQg54wYUcWytIH7iKI9vJGg%2FfHqaB%2B%2BfdpY0tEr9j0f6oF1UoB1lDFwDmm6I%2BbkSgfuwewDtsDlsdquohHj9d02k0MWsu9tSA9DmiAMCWxIf9c9CeRnFVVg6pMC4pTYXARvlfJLSMv1foScReqhSeZYrFe5S%2FIGLZp2EZt%2Fn74D9E4PgqpFGTLcvjCGUzslrz12l%2BbzgC7dPlEpKctGJG%2BVZQDBaqLbAivPOq1q0TYo5NOCPmaLr1Y1suWft1IwXi9ryE9L1I2lj7ejTbglcgL4gY11WUmOvz6xtLQBBGB0XZ4Cv1L%2BQN7XZ8S6DX6M40ZhdiDrmQuw76LA9UoX%2BRXo40LjHpDzCSUsvnxNibki6rDYrWViEvc0Eyxsa3DEaLNvPMD6G0bClTN2%2Fs15FOaUGaDXdOzucSh74%2B%2F8vcroaUlIZa7nPTMR5gQditkc%2FejSfQyhRDvc9sfUPPMGv5FQaZWFm0%2Bzny%2FWNgb9c0wy73UvwY6pgF6xPErbcbTvA2WSGZbfGn8bsHnZZifMwaJxDM8hoBQpFz8Wmuq%2FairbgiiqIWviQ6pw2Z3%2BuuuFU%2FIcRHrkT8s0OwUtq0bek2bFCu3oF1ElC2dvirtQhYJE5LRId36SWrmJffu9pjWNTRZwwgaB4zPhoWSg53FNdhw33NyKvcbRSBe3AfvyTnzjrypvtOp3RxWYYw02fUNH1QtsPPxXNcQiqESPvwZ&X-Amz-Signature=09b00aafc19c93e4cccf93df5e14171c103a4c2f90938c029946bbd201bc6cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
