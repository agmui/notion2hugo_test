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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXP2W7NK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC9jmoGcUou%2FX2o4zDBm9Qnafl1ubEYy%2FOf1Nl3zGoUgIgTQ0Z%2BAW1cUdP12xrcOU0nAFXT1XBF8D22lEsHBBpm6gq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLS4YqecjFPPRgB9gCrcAwKtbOd4dgqA1p7GNEix2WanABKb%2BiS%2Fli%2FE0eOOYLsxX0ecTnoovFcIWPKn1pwDYoX5yc2YpLSDQN72JoVW2QKAUqSlDUVQkF0TAhJjVG%2F7FOKeMu7OlCvyrYtMH%2BZc6jVyWzqpFIvAb2bRyWh4Jain1yRIccf7JccT4uoid4q%2Ft4Od21f9IawLqy%2BXYMTOJdH9A1wrtq7ATGCAJzkNOoHyLZa0S30xbu%2BLx9ivgl6sxS9DcbvQGGw5YwTSGYFIFZkhCej48S72WuKk8ziFw39st3P3v8phYJ46UqEwnI1lGVE0fzTYERBZvY5tldPzyYFLcIv0QsCBbcdK9rsC6KYkkTu6tj7nN4ej6d8Rzx4fQpiikIprIk54n6far%2BvLUMneeAEcJhxgyUYw8W68HnwN74F0%2Fn6R47k671vVPz3DfMar0yslAyU%2FUQq83nGmHe7s%2FgH8Ft7wVRT8YpXUq%2BlbTWBC9V2zBtjZ6wfyDoJdepBLHxyJjKtWSzN94ALYky4e63Ogt2z0Jgd0vsWMEWyP1Em%2FXe3%2F7801tY9rsddG8Ttyry3q8mroiNJPVkoUCVb30hyGPC5ak6PYm0EvuB30xUUXVBz10ToDDMpCFmSEU6zKQ35O1AlmB7QxMPbzuMAGOqUBGTenvcjRqCEFzHdzpM%2FiUHxCpfqOgT16oa%2B4g84PRR86eEjlSwXFfhQHqwel%2BcMgNstsh%2FnyXwR8VfvnH4c4WsKm8AGN%2FdIze65ZLPvOJQjGZW7MLegTTeFTA5oNVFJ1v9x5qw7qX%2B8G05CBk%2Bz7GcRuoGUzvPo4XCaWmUweMTvkDtavHowdyBwB%2FsoVH244iaBsLpUh5k7Hh2toKdVWNqtD3EeZ&X-Amz-Signature=305438e71b198d26265e4a73fde7dad0728e56d01ed4b87bed6155416a13331b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KTQZ6VF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfGW2Jd3FvKmZ8j9TeI0gB5Qi1UnYz2NZkla76OJHMhwIgFhnYhKwcA6Cdz7QzcPV3iSmc3rNN6XiDRkO5q2Xa1AMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP6ibuQGMyE%2Bc9WrFyrcA5me%2BeA%2Fgya5E%2BMxv9f1PfkBt0CRk8S4XL1fFRKniQoKxCoj7iAg04UBNStmjNpo%2BZwPnYP9uGlaDvaxjoz%2BbSRM%2BvGP6LCw0acZauZU0XiiEWeKhA8x%2BCYEOoiOS%2FGtVlKmK7MEjsvMZjaVBLWPtJ1Q8L1xKtWSLuZGs7VzTm44CAGFgJGpctkqkTQuZS4j%2BuP3mvC7%2BXkzCSeGTIWK7YNNY%2FnzjMOnW7AvQqFRW9sBpaebSgQzamAxzZRXLYsM8N8T0xapCTunDa0QsEf07vhecfmdSjyKCG0zjyAvI3qmXbiYeES6Gg0Rx4FQys%2BfnHXiYABRbJUzM24cK7YpY8XyFPlnEtWggpgH6NZl4isM765Q48aG9KdbK8%2BqbmII2K4mQLaHnXxREOqqZGt06NA8TTC7vriK%2BpD7vtdhu%2FU5I2ecykiBodYFrvU91vzYDCyfvXyWP0HfTnwfXzUfvrCV661GnNYQDvqSAPWOeaVtRjasR%2FCJHajlui4JdJGKy6t0cpjQzV3nFEYkWsm5RMRny94CoinN5OK%2FVAmrlN7jYt6ney0NSUrxqNEQFgd8ocicqz4BpnpKy%2B0xoJXEVNtCbNoIEZhJ88dfnAmk5vhAcqjL95B9Ju8Emq0oML6mucAGOqUBc4sZbmCOa%2FP7V60WL%2FQwuDTnRrW37s3kPS6MWV32eUJPkCYqrGrHnZidkc2HWGCPOgYXqzbMv8nZUo5H%2F%2BjaFQjOqW8cfCohzifkX2NueGRYNzVaNv9V0ml3QvEF%2FQURnSgsQz3gnK%2B9EWG%2FodXKwCBDANY99igX%2BNvcihZKRoqVUmw6xcMaOs4Gum9cs5p2RMdlPxqWy1FjgGgDBkoNBh4ch4cm&X-Amz-Signature=44bd89f75a92fa5f1ba6f4062483f14d4a03ac00548ee0db8be13dfee031870b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
