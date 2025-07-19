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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LNYL4JC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJkusECpmTpTYd3nEkL0c2pgwI%2FP1VRvD57HCE6GrpIAiByfaXEeW%2F%2F9VH77MCyJRGiuAVwnWsMKZQaP5EPofvfPiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMLa6H1BZHHoP%2B5aDKtwDrlQ5nPjovJHfMQvIDdKhOzvJc2m5FRxfAUCWuvY7O4jCtjTwCtjURTGHMZgtmvpVOJkNC%2BIMaBP3BXkO9ij7vd0AnIWTh9vG5aWsbCoS4%2BH7SVQzeLjtOLONsrG45c%2BTCeYc%2FuLhwXKs%2FAnkvy3uPvegCPuFTNHsuG4rwG6ykd%2BODW85wzTMtKpCTXugiLkbisylq%2BSlwP5Whk%2BjsGANqLqbT53YbGzYOFjPqArMO868DffNZVibFjFK4ycqp74BNSRo4tMeoQ1b1AVzFLs74hlHsbIT1YhdbYTPTxUj01kq7oEBiurek0YzMbwkvMkub0FBlrlrQcC74ioiJJiHMbJ0QhwO4ohfQpdg3vy7ZwNniUxEl3kg4eNrhVbJhLMnTv1G3QgDUx668gWqhm50Q%2BXvvzFAc7qxIVT8tcDmqImU%2Fw%2BdkrqeBklLYF8j9firGa4xu3bn7VP1FR%2B4sGxXABqRWY4TZ2nxVUxvZbb52FStPOyLuXedgijHdy2o05PdWe75FNWHUIP4w96WACnRjwIB8K8GBKkCK7RG4qa%2FvBh%2FAj7R9pqi%2F0jHPNddkdn8Xq8K9CI7fdOk1oEvaKCB%2B7p5PjQi1mVrOsJ2%2FDByQNIWmUm9uPIMKbZtis0w5a%2FrwwY6pgGAvdZ7nbbyj0mD989Yku089EuCDzxzbgCrUHj7myCT24taz6UcDBNSsOyM1JbF9AOxUewM4slCo%2FTFAGzLQ7%2F7zKcrGxRtzBK3duKjdqlWbdN09kwy8KVJCA4BOqWqxijBtrDkiUKXIB9QCF%2BMsGI3vlKqQIUUMLyGcCQEIP%2BMu5EZhUJ8pRGVJVl6pQ4IkF0TuTNd50sy5zOZuSLwS33sMTiCluas&X-Amz-Signature=4c87c157686e637480f4501da95bad66362a5e53d46ffdfee492f26dfb073d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFB52DD2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM0LEHGwLyJYxBomx1CZyLlaby5HTSToRR%2FYQ9H2r6FAIhAJGQgZfhVF2LFYjDDZJqkl2zS3%2FGc85fZH1a98nyRiPqKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4xyTuVHRxZ37FcLUq3AOFDGge9y6kBwkfUkbKNtbB7asplpxdmPDPg4KDa15xsJelqlNOg1DJT3vYuvIyDNPJgbvq75fU6G%2BrqHYn9KYzzwD%2F1q0ym%2FeUFJu66wzqobEnmTszot1TGibI2JDC0PNLM%2F4XY2%2BHYa8T6OndkYoVS%2BTiE2kGyr1JzvAndKNY6hcj6UovqopE9G8xs0YFpVGS8c3zsofrUFbf4iT5iIOytrSNN5J6Kh5HOg5dLPQ%2BHb6ncHCYNvqarj1OjlHNXDHnM5gE3TwJy%2BiLJJJmnJfjobGtZa0XFwVDnxxHQ3ByuDQcp2IWQuguK6EnYt8hqxuU2Rky%2FqgY%2B%2BctpdonsyyjAsfCFysJP8aQFLYKlCDo%2FTNm351v7Mw4XgwseeGGoa9VMxi639VvffhkldSdpnCVeO7IOg%2F0CqgX9Tni8rRi9Q7HsLzTbfkjR9blDFhyQwVV%2BXxcok3sIjube0ImbbyliD4ADGYieoXfKJ9CjYr0GwD0yfxiGESpEOF2caistV12mwdX6VxJcIKiLK%2BpnbDVlLqyvgs52%2FVZBoII4cTvE0ozARYeTPBiv%2Bm91eiPdu9y%2F%2BaJLMepobBWkICEZMmGXu3chDtY5vesGDSBKvYBtufKvChKBPGVC3cyUTC%2Fr%2BvDBjqkAcxeWWHodkYG6DtJDc0NYcjhDd%2BUl%2B021I3VuGgJNnGNRr%2BFI3kkDfrY%2FO6g%2F9%2BcZC3PdgmJPcm7y6%2FpOvypD7V%2F0tstORrrdKRiWCYSFpM7sM60BYHGRL7wkvwqsacw9C9ppb6qxWfdwmx3rLNp3rcU0KJrOXiN%2B%2FiBXxWae6%2BDj8JpJII%2BbzpOxCSu5XdRZ7PCBFdWOx1XL7U2KQswiPY7gXM%2B&X-Amz-Signature=0648abf4b649e03f24e0bebcba94227c4580070a8c8138ea1003eedbe715aa2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
