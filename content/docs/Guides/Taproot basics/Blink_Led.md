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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VX7F4DH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUESJi7VvFYlfXit8osZrfRUNyD%2B0Mr8VQdKzfE35UkwIgFqyti%2BbFedjl2MVcogMUUtcc1POqEojFwStBY5piiIoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmZntFUrbqUcyIqSyrcA3UXzKF7KYDRlqEKNguaEJI2RbbxLQdvViQkO%2BAMZZG%2Bvc%2F%2BoxSXPZ1P7Vh%2FBQrpMAgm5TgML0lqWPfJIUwhW8L4gZAv7f2Ek1RjyItSyU7aROpMe1YWNY9%2B%2BIx0FdYNBaELk4r19NUPc4U3wqDUJruaRv4LwXm8RLAfLRrAyPVwZkh%2BbChJT8uhSuGSLpanxvG4r%2FtxRyRWp0hLrlJxc6PCv0SSadmF05vH671gm60CZ6%2FR0aWJ9i8keBHim79X8htNO0KG4GuMraihQiA3Oeju5dqBVcJY0%2B8%2BMGQZvvyBR99%2FgLajELyXPynO%2BkFFccvE%2BUZiA5iLIE7accWv6a0oj%2FmTyq3zx2HwtRikWEEIbAklJM54ZfHKeDfdlffRA8SpkDiKCsDBb5214JiePWeba8YZcAswhIu%2BGmddDeywUnjkxWryJ2lgXU%2FIHLQIbSDIakXx%2Foivvm64aYg41ygBguBzodLSjgxsW6yIdmAxR3R0IItOsKx7B33MDTELdMwE7yZZGzxWFpWjZGzn%2Fz0C26m7qr4RLlElHdfesjvqMNciqWYYqC%2Fy%2F2GakvFQgrrNqFayJ1qEV%2BVIaLrsuaifpve8knt8L3arjKICmbfbrm9jHqmzUl566Q7%2BMMPWs8QGOqUBO4%2Bx1EB2BEZ81ZiW4gkRTlTEPT6EokwX2jad58%2FoGXd58liZsIKXNNAffNzouCq7Rx9ycb9jlT8wqnML60pi8cmyjDjkvSjyc%2B%2FxvHVwZvUhiE1D4R5k1UFPk3Ry3olyp%2FTUUvpi%2FUNVhf9xn%2FZARWa3F0Hc%2BfjsxZws3VOSlh0UPRq4pQUIIViAhG4isz5mh0lWXSK%2F1910TCAercrCW9krNhnH&X-Amz-Signature=52e41e61608b13027e68abed77b31b14cebb73a048757d16b58d611df4f17908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWCAQ2V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuIep2YTkxaOsF5K7xb%2BKTGdrBwBpht3zReL5fcWlMoAiEArHAaRd09AqV3W1WLJHM2Xo5yHccF98heZ9ata4GJ7JwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxsj%2FHvMO2x%2B9gXhyrcA9Y8VA5P%2BswZdGV6CZ33sbJbtkhbH8riaWk6RwDYVwkurgo6hzdbg0nnRA%2BAkHDGTGjZJeiqMpzubutkCd1cEp7gKUW86c%2FNorq5y085SbWiWp3IhtUS4Gg8XU3pznNy6FZtgB34XxTIpp7%2BslOsWp4CTwFdhgNm39k056ZK4%2Bjx95tVXon7fGVmTZRo6VodotPuf8CRvDTEGX1c7H4fkOywwXKL5sfDser%2BZGkRqklrB%2B4qYKZNq8DtglTqITu0ECV9d9MyzlkasuZhhr2nCWF4CdBy6aaNBMpG4rJtiMFJv%2B7cUnZoQp9fmWc0Z7BGyfvZseYwdagL7yW3FjVtymYOs3P5%2FMolXOjtFRuUY2gvgKPxfZGrP6iwDE%2B9E1KzCngymTD84GF8UU00S%2BJmEOl%2BVECj3KGJ7rl%2FhMPEabp3WsdnYUOHv78csqA83O4xiJxuzd4cJ47OVN1B2%2F7MQkRRsX%2FhPzxBxpDk7pBjBdc6GoXk5KKRxk%2F6ri3HNMN4rKJg51oSVuJVh9No%2FgjFwKH5CARkhgBHSvv3xBTtpaOKX6KQvy9y95osK69ivx%2BRIgDtqkMZNsSTBy8UKy4hnIEZkhc9jee4XCXBhDcuKtajMkOWb4eEB8HRmw7AMIXVs8QGOqUBcVKsFSS4gnnLBKZHoLVMfP%2BBfN7fiwLcKOsxKnVIT9eiGk%2BkRgTr1jWkTpP577w%2F84E2nexP4N0F3Gtnez9nGNPcAPJUIK7VUxJ%2F57qNDKLPL8P0JnYXQfUd1S5%2FjA4T%2B2sdR1mIPRDpm39D9thOH9ehqw5lb%2BmrhzVtNiN6ZuCUOwbxZjVFGdPG2jeMhb0Qoj0%2FAsXlmj%2FvbFJvArnFPBCq6jDM&X-Amz-Signature=95c286c82f29a8c4f9c08ee486746416869e99114eaacf5f302b614c93dd2795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
