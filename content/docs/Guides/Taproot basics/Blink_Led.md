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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRL2FZPZ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkgyIUX2smV2mjaL8MM42mrwSql0pfC2zIOocXNz03SAIhAN3%2FejJhwOjWFBEnorcSTfGcAuSp%2BnQViKj3urF5Z8EvKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO1N%2BAHuNZIeT9Qz0q3APZ8vdiiZO8AcZeKdt6fOgomAHkOaJv%2Bn8DEuY0djNehH96ntwaTejq65y1zBgjuibtVKiAdOQsf%2FOg2tInj9mgqd4jshCBijLfoe9i2BN%2F68xcbrBeaT6cYEsSa8QQgZpL6ivQ6n4sv4yIrFNnHbbgsTNjeiyjGyMur6HnucPB0xvXFvPd7u15P46f1MefsdLG6SZzBofk52rU8G2r%2BLrwoZ91PuiKsWCDriFHxTuZmdoeChiH7YzOIPTv2FPTqJn9LYBW1u0Xt7QIWBHO2Gr%2B4aHdQAXiKbXnLWhlropTR0wuLJCYU6Uu4a8%2FQVFQy%2F%2BOFc5p5LfN%2F3L84mxj%2F7v1YSwoUo8GTgrUWQPcfKqFrC2wHEs8P3ewQ2QFpdTjdaN3Jdu3dJQgpPQSxrY10R4%2FaHnHRD4kZ14S3FXHNStJmPGbG9nZ0TWQ2olKK2YQTLmgc%2BNzV%2FRKwuaE46HyBwdcQT8DGpS0eTosMyJIpS2CusWvHk4y61St059fuW2cYAn6Z7fSMqRnPvxjO95ESqT6fO4phzWqMW4CHL7tQUAjQsVho9KQx06tq69s4iKH1chrT0Aj%2FTG2yyXaCQXznnXpDgWCR9cVeLI5Gd2ZgJExQzQTjpTWV2YzsAt4iTC57LXBBjqkAXpahEb3d%2B6ULt7qX%2BKitbxfFA91S1qYsBc1bIi6y5TxzucSojMzhJ39Jibu0HKZGcHpYNd99UoSD%2BlCbJEzci5DEJ3T1BIthPfMiwJ99irkX2JGyomxrCvO%2FacN2%2BHLkcNfdXGN3yAJZHKOYMH0HFT67PcHDz4kX9a9FAbkL8FgC6lhmtcYfMdRgJTo8X52i%2B%2B%2B6cFjBuYrHt%2BSyKOxWoMxFGAp&X-Amz-Signature=e2f4fc848c6d45b610ab0e2848ad5892de4380eb836b23ffc7b05bd725fa35da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3NE2BXM%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjbsBH5USHvJf2%2B1srpBBmyCmWDCt2cLGNIB2RsBlBsAIhALpd7EJSJtbdf3sRKUk%2BEOa0m1FaXC8UWfmmtvNCinDqKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6KFw72IPskAX8AHUq3AMbyTU7tDtQoFe9apEb86ViL9%2BpOTLU%2FfRi0AkIGaZlBnukHH44qgFORmpUePitjEvXu1QatHGr6W8P%2Bjj3Qdd32%2BEKceFi%2Fks%2FchTKl2jSNBTL2d5ZUMF1ZLr0DLeprdrptiyrY4djvMFC%2FDSHY0oZeX7HeSbz9yeX6wZFAl6BAv0ymRoxUXQNOwcbe8AosjY10K%2B5NaTvLkUElmiQcKb887VoHNY7gT6%2BbRY3iDxhe8Zqh5cl3KiQDrUI2oQfN29cVMQoWvmb4C8mWS55wnvvs0v59RaB4ocWhh7CY463PY4YBR1erHMcXthMKbkXNzhY2TANKrnIhmvn4l1tbeilhlCMq2tYYmJ6o7Y06lTrrbOB0%2F01TWEM9xqWfGuoPI%2F%2B0DgmVft8FWLFjZlILLCGm7yawQcy%2BL0Ozym3MaeF7h7gwNeTE5Zoasaq%2BMgYtFUq9ZpksUedgQQQXhUJyfVg4owInp4bmi3WBnJB0OfH3e17gHPFIL5zJ71izeGrgt%2FH7p3YO6a0yETRSaely6VhqeV%2B5aJLHHbuJaVqkNfkPA4weWY%2FuX9sML3rv7qDVIyUoCdbXNurMvR3O7JWdqLttibmuRYFNU5KfXDMCogcMhbNDvAVQbeg7bCpBzDF7bXBBjqkAeZr2oDHMIUEd6smMM3QDaNNzvdiQgZGlxkw8r3taCgoFPGOAnjYQkOJxSu1pKq6cHM1UyQDcJYk0%2FpRIT8qMGVOX4F0PGwWRDUJtUH6t2qQUrtHh8j5nkMAC3g%2F4vkjmRCkVPqy9Rd5rRjIdNhkDLM2m5pWuGnbstd4LJJjteIv7mQBq7tAGapAIouYkE2OcMaC3XRyZJSRYqeH2T%2FeR7xisqPt&X-Amz-Signature=fb1fb4d1aaeeb10625e609de9aaff0015df6501a83cab9202be87b9f09563123&X-Amz-SignedHeaders=host&x-id=GetObject)

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
