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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653V75KOA%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMQdWCM%2FIKxqbj08rAuUk2r6U3kfekaZL2newZ7RFDzAiEA19ykw1AM9hhRbeV8J8qGCPnou%2F4n8tzJHgb%2FZD8KHv8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI8HFm8vS4csbXRByrcA5Imh5cLxXJOC47TOQPkZ6PwOVajOhg7rLxu%2BJThHcyXm%2BIlwpEMTceAgPzmiRDTHecb0nNGWMgT2JP2SM%2Fh3uzQl09468g7nTTyu%2BSr%2F%2BRWCHy6bXpqRcx4Gq6XN2jvz7rB2i7lcS2dgDs36kywi4Pzg%2F8PPyrxucIkdbLFiYODWZ527PT%2F65EDxKbJYaQT%2B6s79JLAgGG%2Bo8K83QMaB%2FJGiragHVfz9ROub9UFKEat5kUahDb0DvLqkGuoXwscoNKA0m6pzOm92q5HWxywI8ixeovBnCKOnL55m4%2BSmLFVd5FWJTj4Wf6Oh%2Bl6p%2FOvVRN5Jn%2BD7GHbPYDg%2BFVY9idVoZc%2FaAcRWIVBph9h8b24fbCC3sudC3qR4dhGEsUpWU1NuPxjHNqXx4m8vpGfFpKU%2Banm6%2BuNO8i0nx5JELcONVyhctuKqnHkazMx2CGICTZGu0z9dvqPKsr7fUJfQ6uf9gmEMQCZfCf6p0FCkHgiuh%2FlR%2B1ZU%2BpNnrQl%2B8nKbCjRO3uBDDcsIgFjiY0RxDTMWBJkd5tzQsyePOtf76aAz95cqu11%2BgvUGnBFhgQFe5tgGZDnN5jDQqdEPlHpk5sWtmfIejeUY3LtRtv3h9V9K4iaAXsewjPFqWsPMJTsx8IGOqUBRtRa9BjqF07Ck%2F2rBQASGSCGPbj55HHjZKJzcceC4FTEME1T5%2FGb1hXvyepWFE%2BYp%2FD3acldOTbQfJz3GgHLu0mBzgKcyObOwx3eThX%2F3u8Yz7w8UQlw7%2BtjzkGwaUc5WFozG8BejHAnoJq8nue1Bb1EjN%2Bst6q0BUAF3AExSV0nYpDYGZcHRx8NcoKrvYWk5Cyj7TFj29BGcGopwCY%2Fm9%2FJow4b&X-Amz-Signature=0bdc20655e24a09a4a93764c0dac421b2a202d8b05cb420a2bcde4497b7c9987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4MIQET%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFlccdQHq2oqY%2FbHoZYGlb7d8pa5923TQcjnrxXz7u2wIhAIJ2nZTGcJkaAuwQ0%2FQqd4tIEj1JpU2kTlMbM7jX71wLKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyx8BLFApLsVEdemUq3AMDYcEZdZEcSyIEPck6fc%2F3gqeQ9%2Fl0etomwW4ig6ouGMT7WFrZlw4mA1k330eZj%2FzuVlpUO805dIgKf7%2Bc5EKDc2qyZf5htYY4ly%2BAImhJCGd00yyjkJ9Dt4bjwBCm7NNtVQB6jm2wlGFkz08oUkWQ3H%2F8GZbj4S5L0S5%2BjS0hceR4HsPWVH3DH%2FgZhmOmXbOrDfU%2BVyngVRvn%2BOuC4JnBTY28pjohndWVkkEu5ZTFoJtdPgHRoCar9oAj6a0DnPJzFjE8tJJXNEtzN%2FNDi%2FQhozbohc%2BulfC%2FFm1h8F0N7imy1aQS9HAS1vcUK6aDtLpE98JVZBZlmgEZ%2Bl86xOQWjhe1CkTifMDWbAF064CuskhPREijKr6WVExXMbCbAKvdncpznjFY5aV4YvrZc7TEu78fy%2BFJ9g%2Bxv0EHNhmSKNAsASfHodtA57AqM9C9F5u2nLIFv7PjqG8Rd2WHZxDne0OdeRNIDcthzl7qOBBShvrxVBc7cTkWFYdTvUmzBE%2FtL%2FVDiihjDExZ5Nj6Sb99eWlkG9Pg%2FLuUtVykY5jAhTI6uVWngv%2B1KiWFpbWNgXaEwgAc197i6v6hxy5eBlpjWzBypgMqYeuKdnklo0djLHExeSCOgiil5Qpk9TDw68fCBjqkAXKGWh%2FCTxIAFYs0%2FF1NLrWrcSM4AuDZGzv0Eqp%2B18S98tiGrW8PpjmFC6pCApWtEw0pGP9MLEs79gm8graG9ZsjfTBeJKBX1ZkEtmeJwSsl0aBZARFgOgyr2E8ksT%2F%2FYgYpjVSxEdUFk7UKnmiN8mZFp8wN0KomNu3cacQIoT4DtsLKtI9TKEZOVUX6fwO5AGwqA%2BHe2GAy%2B1l%2FGgYtHroAonuV&X-Amz-Signature=c1fb86187b66f9cf43bd20b378a63288e9454dd1835ec071ed1621aedf1b2f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
