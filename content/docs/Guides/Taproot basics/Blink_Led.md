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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OH2P3A2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCUNSD9ek4ozptpPkL8diTLcM0p3IIFkOKTvamkuyS87wIhAKbYkinp9O0cERMTqorz0jT1yPQHl8KMNGrbVSr%2B2KQsKv8DCGsQABoMNjM3NDIzMTgzODA1IgxRGSp5YRh7hfCFtl0q3AP4ghJfI%2FefzuR1jA6xUjGyGlq6BLmP3jCzSXltgpy1fnUHnpy7x3iMc54U8MYJlydeL2CiFQtVEnk9QpjrGtoA04Fj%2FvQfXRHyTL%2F%2Buglv1x2xiAzSJHIL%2BZa0Lj5jCjld%2Fw2ZWDsI46qbvangusCysTw2C%2FPAiIuKhupZ%2Bq%2BBKMunR6H1AykhLg5h%2FUzBbzjLCpLF65RlX4k9szUvz6nVpDJUa1s96G47kgQtNn%2FDTiuV3WAT7WjiT6Q1hCkM1qh49RM1alhYgxfzlsuoFiNyG8WszjyFn30UCWvPv6tWmyGaRg1ptFD%2F5dMy7sDIrRy8%2BroFedZv1ioaG1dPUNWlZ2QyLY5MfnmZv3xrWhafuIqGI1UyVIFh0skeRWFXkI2SeGMuRCvP9smlceKkVdsjDgWV8anaW%2Bt1qzAff%2Bri7NhX7Ljtqzt9i5C4nDeMHi7afk7Izj4FbePa%2FxcViotBlZV45uqfaiA8Ko%2FxJvKaQMCgAwBa7yVxVAzwAYfo5rQKS7qif8AhtIG15BWxkYu%2FycY8FZwcFeIGRDqOj%2BD7CTXgj%2BB7kk%2F%2FU6Ohsld0Y2a62TvZ2fHYeY%2BCTx6VLj2pU5Zd9tlxWC3s369LfeealjEoIJZwLQrTUIAhLDCVlf%2B9BjqkASEYJQaxf61u8wfI5MttgGvCxZMo81i8FQ7SeDZ7l0e5i5Y9uFcQN%2BMvFbRZuwvnKGggFl8rE70mTcDAN3KjfXo0tLLvSLi6AD%2BNDuoTW3Qm%2Bk1u4QvSfRGFT1QypDrfkFS%2BjFxz9%2F3xnjAVy0b5WCk9wIDFEMaDP93A%2BbmYGT4w3lPkJ6zZ1TAfYrKIeyg%2BipbBoiaVDn3UcTEHR7W2RHrvK%2BRI&X-Amz-Signature=072544002b0c8fe6fcfe6bc45f8ba4ed65acf0765f1bd1d3b2b4e5d3980084f3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSZVJX2M%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD5d6jNr2PEdxXY3wEqSZ3A2Fwws01DVpCxh6MqQ%2F2pXQIgLFZAoJpIggPX5QX5yTKumPBc%2FkEw54b7XHp3TMAdzDoq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDOxQR%2BvUkqamVzBAyyrcA1M7tX2G9%2B3wF1dhwsqNS5OYXdT48oN7AoqJXZt6rvzefUY%2F0UDABeRdya7I6qjYyg7rGkZcrumBHK4LdyPp1NeHVV%2B1k6dcSNLnh7%2Bt44YVJJJLIE0AQH8G%2BI7CAOyF9qgYy%2Bycjaok1XvLqoy5j%2FrUgY9QVSCt8b%2Bfz7wpz67Se6TnS3xQNafTzP4lF4DuzcDUaPjrgGZkM%2BcqsmsF8Y%2B7%2BoPvpuyNCJ1037wfMfS9TqsJVAmqNSOiAffpOVIa0Hj7XkyUJZ0i9hv9XbSqE%2F5DT%2F2LJprGF%2Fam%2BMgQKCpibXLyJMHp%2Fq%2FBdIo%2Fm%2FGf3elNwKkNwFm7YFwJd9DjmdEu0lpMF%2FmD6abUnGPtwPap9CIfanjeubJ7BnvICJrRSX0FR9xuUGO0lVvgQ8DqipjZNhydUBftgPLP5dd%2Bj1vI38kvuTPWJJFPJoIWehNV638FmgigNkoqAXxMSQz737t8m4j%2FJAwgNVVIbEJeTz9%2BJSHXWlmEc8ctSf%2BPB%2FFBvkOi32MxoEMn4kywU7qfBzkDNpYu902v76E%2FwEoVRcp9dIrQyXEz%2BTzUXTQS87XjobmpzGKzzGnKx8HK7s93%2B8hkbQs9nxxBXmaL4PJ%2F0x86DPq7uiSpCels7rJ4MKqU%2F70GOqUB9s1w3TuAvSwJv%2FPOHDVR%2BFXi5C7MC9wX%2Fa%2BerxsV2o91brke4eztQD7SLIsYxq4OZkIpme6f9kpYLV311oLEG9U9t0QttAZUFEornmbzvJIyjZrJAUN%2F0ty%2BB5ZRD178tznBSo274aZCJs1O%2FMKcuGNbp4URYoMlifZ%2FFRVSa9UbLDRA%2BgmGaahYqhmCdqiZemCJQFgaypc0M0tD3iXEng9cCk4m&X-Amz-Signature=d2cf33ae9348ffd0216f3bbf7ebd5ab405bc2faddf4178b03d8202114de10c85&X-Amz-SignedHeaders=host&x-id=GetObject)

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
