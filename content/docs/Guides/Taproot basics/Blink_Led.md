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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKW777I%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMrsPUqadryNRcyrj%2FM%2BXnMfD3%2Fq%2FpqJj4%2BWnCg8n%2BXAiAr85oS%2F734tPuW4VzfwNPi6tttV4FnUqWecvl2WDMcsSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ3TvSJXE4o9Zh971KtwDT9jmDK8VM3OpxCSVKsVnBdwJGWkC%2BVCmJwJ1AV9oj5x5oLjP60iBzXdopqSYhw%2FjrAk3o5fq%2B4wATLnIdI4w2Sr0MXa%2BtPHDiIfD4bhht6zEpw%2FQyOhr8GmFtC8bJG1D7557VUPwbsaQ05Xw6xU%2Ffwqj8Q370FMpdS1iFA%2FFurbOk9fZIpoDgLxHW4fPfOsaKCyqtG%2FEmsn%2FgXL73%2B1b2GW3LP7ytf7NClyTIATT9zgErhT7%2B1JoATeBB5vWME7D0HogJ%2FfGEDeDgi78g9Fnlboqtv3NYI%2FL4xxgSJC2db7bjj4kC8RRsNo43vLRfpVkERmnwbHd35zcvkl%2BuY83I4XMp%2BywkbSOofpMPRsT9HyX4HjwJnLROscXqMUFMrSU9c26GoywOi%2FLDuti%2FjX9xsm69y%2FjTDDVVVzYgNqw2IHMQWXUah9KJIhFfp1xghtbXTGXl8EbKZ%2F48nyF6XxkA3DTkmXCgzMH1GcluvlZHi94BAXvuEMVM8Z3UZQJRadHWxFxttGQvz9KhsD0Jz6QZCd2CdrPdrMu%2BdFvkH%2Ft6ujQSy6yLRGd2SdrNkWRBbv4%2FXv2%2BH%2BUCh9kJrohVaKwC6jc4yky70aL9LVQYpp2wYibJv1QiD%2FpezayxQow6duqvQY6pgH47BrGt4mQ73zEKDlcjDghdrXyNVfAZ3WA4EguLnPdrSc6AAZsWUtpoqyQ3LWPE2Evh1yWduWSIFlzH9dGDkIKKpJPjnbruKo6UhgaTP8y%2Biw6DHDtXqqFY7OHbNrZBUkbC6xapYaC4OfijtMl1UfG65NtZT0EuZIJj%2FEWoeOheTx7syHS7UuNwQVFBhjYSs4JtY0MD5i96XIqUWSyevUUyNJfhRO2&X-Amz-Signature=83370994981061f1ade4ea0dbbdab30de984d14e8896d64eb73d9d5112acd4db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J5QXHUU%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiQht1Sl%2Biwsn248JSXrPhEsnaGu3wTmK8q4zq0ABmaAiEA4%2B3%2Bbwt3OiI0zEKyMh1S1dN56BYgwbSbYisEkLCtvjsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApOCeEKB4J3hzvwEyrcAzDlxCWFqK%2BxrUwfldsu4MM1X9rIobvgTH2MwHxqKUGwDyH1z%2B7nmOqUVu2lmzbepTc%2FaREIy0fVdyha9O7CQ3oLHyqsObOCQKR6lG5estvetPzIQC9V6eznu1xOcwjNnJjYKr2JM%2FI2i%2FyCXLEWbS8FAGZ6V5EZ56Wziti6BT0le2twKqyGdFxXBk0w1ZUMJ0%2BVij3vjvvz2VSGWgWs5%2B2dlb1V9H7L3TOp4EErkaeqqvHuxxTnrnI3ag3SjUiKY42ujb3iZW09yCbc2kSp5LfbaU4TzNubCrxr%2BZdJCTh0G7GQD%2FyyE4WBhJK6%2FYQ7u0LFmSCnBlT93R7W9BOwlnGjgGCq%2BdUIKsKWkIlLV1QNtokK60usgyKf%2FuzSPmj9M%2FWvQXEihmUSvYnSvEfadCtte9hIcewqe1k7U66%2FSVEcoPkAQn7ynO4cIfVRalPKhbdAMkpyil%2B9Qc%2FstHhs0Onv4Gjii3Z%2B68FLkG3%2BPOXHox0TAV0cA1QkwtAVfdlaghXA%2Fg6zeNJsMsPM01Wr5EevDbYvqX%2BLgpSNEv3J3HzDsNpmZp6AYTFua3gcljbwKj9CLM1L8ffcTcyPrFpR6oEZ13krSghpXix5UGJc8hhxy44G8%2FR4E%2BFHzaGFMMbcqr0GOqUBXxBLyjE05NqSjpyNlMuL%2BK2vpeR19WYzAsWZoAunmd92twOPI%2BnY4THMWH3%2BW5RoJ%2FgsmEQzzb98TcstmSx0z52rXmC%2Fnd1tLBzsevIgdEI%2BitjWzgl3WGZ9Z%2B8Q8YBnWRf2351fGGUF6NSvBbmiyG5kE2SvzaiK%2FCo6tSODFhzopaQmFd1bAUW7ICkEf%2BtMDo0tQTm0LFOUOudWAlcbMaZjfizs&X-Amz-Signature=8b0d891c23ca0258186c21cc1b9224cd9178bd7dd294367c87a7478fd756d136&X-Amz-SignedHeaders=host&x-id=GetObject)

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
