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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35XWVSA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIH7DOp13Inu12vzQxzg9sJX8VqeGafuLSXJnrlcYCpz1AiEA%2BdTw5Ykr4EiOLcAkfw39icOX7gF%2F75mjS0ucOQ2MO7Qq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDEtUTsTSUqY7xdRZ0yrcA2eEqMSN%2BqYY5ppciYh%2FITreF4CCGsEMX9mtPQ3%2BqLM%2F0IO%2B2LgPu2wNuPIg90areAV6FokyKgrZaICReHYJoaUId6p9%2BKHewoBbTv%2BV%2F%2BR4cb3wMJXPvz7qLO3DVAYGtNr8DQ4jajnivE0jF5VFHB4t0hBbhHh8uQ7ATx4n8CNkMI7DVW6HRN0cog0wIQYIt4wgEEZ7ZfUKDqN1OO1SyfFIpIC7LyNxPidrKWy56WH40JXZz%2B9gtjvhF6DF4Tms%2FslnJ7TAaxkLVuUtQSNt81Ib%2FqC9z6bjuu9LfPt9UNTXvWSUpsKbyAENJc5jIYYlimFljlNEK8MiD4JsKlMmS5%2F2%2FLgErHK0P%2BjLl%2FH64KnekhFIV15tS6EwzBFSOYYUpJBTzZapoR3meME3Ce9qE5g6bTjifuDsKjUMKgjvgIQoVLSSer3UNaIdc1CeapZ6sipsXV6TyFUNy536Zo3cZrqekkO5xeiS%2FqjWDV8QXXV9lpffN6eo19XVv38mAmZWufdI3Hvx9IBZ9ESar43W3P95h%2BryXZpOXr1Qw6WI0qoeje4VOgw1fa0xSOfjQidBJ4iAzm%2B%2FD%2BitiiD%2B7N0Uiam7xjkjy4svCdAzauDItDM%2BeF4qT5RksnKhnU%2BmMKr05MIGOqUBjUT%2Fr5s5cXnl9y%2FSB2BD0e3KrQn7%2BR2CAiweZpkh1f9u9P8n4DIiOy1%2FiV32AkBj3D04OghQKxOJBtUH09AJAXytJmSLVOfs%2Fyb4vRfSrv7a%2Frs1bh0LXMlTFMBIt1UYU8%2BD62nbIx5CD1mF8qQiOa4Ht0cBTa34T4u8PXSwmqn8pUMdwUFhznTLt3xx%2FGOVhb%2BkIg7duM14c2Gk%2BaqVVGZaC4TA&X-Amz-Signature=541eb007284bffd25edfaebf0394b29ed0fbbd0b623eb315dbf7783842a380b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5O75TLR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDdIi01UfNKtm8w2QnOYJ8DIjEi%2B9b42Hw5JjVaKhJzXwIhALKAfqR%2Blzq2z3qG6ppCf5qi6jieqa4kF%2BBK4sndxmjuKv8DCBkQABoMNjM3NDIzMTgzODA1Igy9OfFsrDPeuleLR2Eq3ANpy9W1w9U9ovjqnVr5z98gT7V6DBD3B5pbbNHATnN15dajInFh1DzBzARR6tjLteCD%2BxpHYwSkmTeKrRUUAjSnXo8H%2BleoJnXEbdF5Z4K1qyTRcad7ximxXaH%2FSiHwmfmih3AIh%2FWe6KYiH4oPEzVzsUXXlWuxxNdICs7Cq5iF5NPoXjZZRKOphocF2h2uMHmr4pU8JGeHoevXRldLPDuTpZEnpm3UjkKVEsyHcGRs2%2BLToZz87oFKF0l4T%2BRkUB4U1bpJJk5gb5o8jguVTUuLilf4TIhQPk3gD6mcfe6NbbHh5YaZb%2BTxzNO5xNDIprTv%2BBvZ3SAG5ce%2Fyet%2FuwnBa7klE9F5sEyz7eklFbfivRb8FfqcwwNEfCT2VqcX7%2BquoXEqKJrPeQ5pvFldaGGrVobiB%2FmRnYh1aagH6hsrCIc8Jud3IC0DUsa9XisUpzkEVg5mMD4CRnQnzHddQoLujx%2BjxftFrh26SNSqwybZIoOgzuaVNIlc41JMJei%2FQ2U7E0ldNsHImMA1yDRQHMiWT2YVLBBp10V5jWiXyoiM%2FeRg%2BkWFo0OekbfajQS9jfT5Vlyz8J2rtxxCRTrkVJmDRgt5o0BuGVTxrvIwDqAtuw5nQp5YgEPpBbjbsTDc%2BOXCBjqkAfPQuBFS1NiiM22plYjwhTk0lX2J2CNr4uPYP6SwrX7lq3%2BwLkHxgmtXAKoKbCPLZcdXW%2FiuTsweqY%2FZ5ut7Rd1lG%2BzKbH%2BC4sq9UeqLRDZGYH9Rfp4MzkLp7x%2FU6c4SezWkhqrDWCyvX%2FUQ31a%2F2dasIYc%2FeS50ikFANMNWcodprSouI%2B7NjHygW9ZWpKSHA4lQf4db%2BqW3HepexDXFDJwfmP8S&X-Amz-Signature=0c8db57bfaaaabf5e7c11fd6afbb5ffd9a5c162575c22874aa0f5feebad95f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
