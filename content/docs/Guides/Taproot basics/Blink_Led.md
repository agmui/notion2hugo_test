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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2A46ULD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BF42RXzfDe2uQ5u1T0cqjSpQFBpuNQeuozosUe9hH0AiAGg3qN1hfph9vQXb4pXaErfCkSwuDFrWcxbxo8MjQCiSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCKIYVCw0LnG7bmgKtwDCjKJXljp6qCbUU4Ks%2Fu82Wfs7%2FTLoxcVrWSWM9DgGZvo%2F%2F1PHDbzfyONxekfenYZ2zpWtEeedLsmu18YvZ6nN6qOj0TXmiN9Aac7vFrVFwLndmg%2B%2BA8EPyXzoBnkBWdDfH4iW4obMDA1XZwEQ0h0%2F4DwovSCHtsz6Ftdd7JRz338KIx3Zzsn0gRfJ0GB3fvWij%2BrtvuWSzVNqtuuOhu%2Fl5Vxi2uC8OFWZKSCDVoq3yX%2BV8VyFjhqJODboCGcHcjUtlES0jFZjKwRHXCdTvQjA2GXYC3OXaZw%2B9HZ7T7WvNMW6f83gvmfueWhzg7EruQBwst3i%2BFINVqwx9KyK8z4mrZ7TWVTzUBFmyqmmBOTummt9%2Bz68IzOpDzQUxKQcQwFXMbNvk52qaTYE%2BJ5k3GhxBfr3xHjN48GWGXdwpaRY%2BXMov54oGF8Qgjs0lx%2FdMJjtmMnfs6czbJOT7NoY18bJoX5JteEv3HBWtaU82GkQsMDpK%2FWls2lZfza45frmQNuhojZLJ7l4EsXQaGxgw%2BSDPLxr0PRzP75xn1zoG73ujZcnfHsjgDqyfRY%2FJ1pjuuX3IGDWarlRniNdYzPRx%2B%2FeIZ5swtFRIzz1uusuURX0ZgJSCSQictvhb1FIw8wkqTVwgY6pgFNZ2VptdE8mng4UdEVP9Mbu%2BdeUnD2nUSua%2F%2B1A%2F3xX%2FcYWlKqTkixO0QudHDjHVytCziairCbNwkJw%2F8HfLrB%2FmlNt7BVaJd0huCt65XPM7ujNO5xGvCDt2eQDxTuCxBO6dzIyBxeUd9%2BwHtFlFs1CLiZBHGE42UR3LHY2XzgFFet0oPgdC9%2FwMMoV7e%2Fqki6GdqdfL5CRpFTSixE6%2F1iEc6WKpnw&X-Amz-Signature=6308e41fb71c29c31d022d1761cfdd56748ebfe47ff19ecea493fcf73873d45c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIMLVB7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnDvBr3vWqpsXm96NdfcScxZsgrDxiYAwMNGQf7jSh6AiEA2%2BR59oYAGI34%2FMYZ8Dtvq%2Fj0WC0jCZ5gjcdsu%2FpzNn4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3Nmo8NPxl9bfdqNCrcA%2FHgfOW2XXoenI4ELz%2FKJ6QErTuev%2F9az2gS6eJbY9XefG53r%2B9cCKyHOAQTeClq6asKBLDjWO3EMcUM1UEVdyDhgIwvZC%2BjnDTcIUVQqBzzcAcFTUyJMr%2BUPJw5Suw2B5BuTHTsLAZ%2FEUaXO4C8xt5qI5kqs8LmGbu6loFPT1wk5%2BeMjxD6%2FII9%2Fmuv2uxJfFVutFMPvW1xE7MZki9wmfdb1pSBSbsqhP5tqUApwLPh%2BJ%2F4BzMdLIX82b3MMVKFeXkCRQbMuG4iSrl9GbF2r5PtZgqR5JbXinEMd6IuU1WBn31g%2BAGYZa4Rmjd%2BpSWOxJzaJAzopr3qno%2FPBV7rzBTFC39ZLiDFqx3ti7Jq2xUV3cTrt5rw27hLd7o8qwLvzVpCVmVbG6m2ZbLZ8CzOP91oDjuFNmCBLbcJWBu%2FGyWFuFztilmV2Dt5ia5nWEf20vvXQM%2BbK1wbzEz1hnCcKd4SS1V3%2FvXzbi%2F8vlidbBBzBRzXk%2Fe1Qq%2Bjg8Z5GRQ6QfsfwUZelokPqVvrEoRS6fuzPYSMHE36%2BMI8PvV28Z4Jvz2Tdvjf%2Bfj%2FQOEL2i3ULQnhwOjE5t6SH2%2Fra8H1ZgIBMEC7Ad3elScLNCfhKYbsok1JpsdhwgpxqC%2FkMIik1cIGOqUBs%2BFlafWypzTYU%2FoqvxF61DBtwNlt0HSXSlKO8d7607b5j6AykGhtawC5tXuSnQfmjgqPTK%2BTqr1Wgj19WfVvcPfb5YmKmxi2NlcNrZhTQohH7BjqVk89WcTxEX4crUhZ7cm%2FkS9AC%2BLB0ObDAHjd0PSEzdYVOFV60MEJ6Kw3gQwT9t%2FrXhAwEWxA4XXBXqZ15l1kj8kYa2jXLHPY2GBLkmdF1vft&X-Amz-Signature=ec2a81791eec9cf8c06c83aeef5d9be74ac63824e36401141b7c4c4378bdfe23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
