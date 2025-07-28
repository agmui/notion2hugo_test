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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKYRESA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIH6HbHxWdTo%2BlTHaIUad2PPD6%2BzwLuBlToMRB%2Fv%2BkSDxAiBii3SQ54MElmwh8%2BUqZegzJo1peJ8AX%2FJ%2BIGhlUqY2AiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaGvJGtkENuoLUAQAKtwDSHu0IyEZswed4X8qpIlJzQyIYqEvvmfgi7wRerxADlctGPUMwxzST0Il9vmHrmoTEOvHsXaWjO%2FxlwVPn8cdklGMGYnw%2B42PBAeWsu3AYU6iF%2BFvTMhshuGn%2BNa%2F1EZvfH%2FaLuIAJpS%2FMzIos1pvtVVYTlGb1wC7maNx5jVHD6%2FtkFZrxrTW%2F%2BnaepGemwTjNsqt%2Fiv3tRTXtArK63PQ%2FvMc4GehxU625LXQhzo4VokCv3j8bmWK%2FZ4Y1BCxYIIl8pWg0A1sVmY8egeklc03YvlCnNzElsUT%2FSAbMLDMbFlMaV7bt5Ms3wJvFAbmlpH%2F3W1GNiIiE2oycBVtZKDmwfeELY0eGjIWo79dh%2FsF5hVQBMLnC2N3QDEgLlnjfT5pEvXGWwswWtQX7ulMTJ8qq6dBh%2Fp%2Bo6NuP3QFmrQEWNd3yezOX7v4fcG07xkii7uFfmGumqt3f6okbReRnIrjHjhBEUDT%2F7E9tQeWzaxmJsT6bp4lBL1e8uMNC%2FLyLYNRcIWXmNoSbPB%2F%2BFwyYukErBvXPzlLQB6IkRZiHU%2BuZzd3XGzrTcFt2XKVa6qE6cuH7xfrf%2F8xUf7dU%2FYIjevahKOJ3SBvY9CIv93AFOz%2FQz%2FbzmkdqDSkJ6E0rqcwycacxAY6pgF1WRkmX0ct5Fs%2Fu%2FoKViTnl56uzCvnPWEDf6G5MBU96RNcVgJusugn8LnT61o23gRQ8WJZjB%2Bdk1MuRTHg92CSojaAhavICMHuXfeA7IUfru37da5dEOxVOKGF45WX18GgQumzXo7W04DfkLrQRVwTyjwZEvMF13lllRueP1X4uEnZ0viFqTe%2BOxIukzv7DWQDJx26dcElO6cPdgHZynANaLsbuuAj&X-Amz-Signature=801c7483578d25bae949dae6594387ea7733233c233f35b310002843cadd1fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKHEUROR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDoZmS%2F5fo9mwJow4k%2FrZV9oa98zuccUD0Z%2BhqNS3dcVgIgakM81IguH2mn9gH6X1SU%2F1nk7OV69lpTwZdWlDDTorQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVWIAbGpB3cC9RSsCrcA5466aPiU5%2BeaTrJE2UfRvKf32EDZKUZsX4vEg2bVJc6cjGxFbkFBAit1Bm8m31OVA8kUdzLtQuL73FV0UmqkD8TBXmr%2FETcgxYwi%2BgrOxFNkHAo4rVQTphyiYBR%2B3Qu%2Bt0MN1%2BkkGKPOgnzQ0W1%2FW%2B%2B73Pwh1oLzW8DDN94CbDpGMVlbvhaoRBMfjap5XuiDW56%2FYdAseYptZvGVMSa%2Fm%2BNoZvjDmUZ2CptLLss1ds6Z1CrZlPmDOEUYIsfq7fWBEphlHQOI9TUlI46px0KXZYZSAJzGjyGkL49DGY1ndPFcwThi6IFAACCc8LRfA7MUvy%2BMQDQextk1fiCklch3zPvc%2BnKFdyBH00tDbFEEUteCzts3lYIvhN96BInteqi44pCbUAHZIcaCsmFprzkr%2FhAKkkHvNVWwuS%2Fx2JrA7CNXKWQs0jLdh8HQsVpmiG%2BUtyIiiK9Tw7itWmnZ3jW%2B%2BUBKTKbS71CbHw3%2FBhJk54igiGNTCas2AJ7RwjRTNAxqWTPkbOmwNU%2BXK4AdGocHKY%2F074UVsycUxmAMs%2BpPwSe8PQk1kKnOpicNbJZfbVtKRDPEzYpIoUBc5S%2BtD23nJDttLcD4xvSVjBCEcpBVeU2WJ4W3ieBplBsVgJTMLvGnMQGOqUB4VbA4giDSoLNKiMKMeC%2BOJCX4J%2BSpfehxppQcOFjH8CWTrqn3PQtTk3nfRoj%2BeLCz59A9TqJ4IHS29gFj2izBQPHQ60itru7IaEtJ5F1x6q6aN2hVlZr3w1nAM2BA4c9Gh1KJNWQDrWwOkvTvMjcJtB8BGZ%2FuSU7kLYp0mrZaWL0ZLwIU4wbavDzMludE9gOMj%2ByGocTeXm6Sx5Y1kV4ZVzVbeDY&X-Amz-Signature=228f60bf6a7d14cb34b43f22cde32288f5e2557a3d4286e77b0514a1fe801ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
