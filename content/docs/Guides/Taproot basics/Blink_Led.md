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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V52YYXRF%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeZ0DdW2wVOP5p4cPt32zyvWy5UzphL92t7aB8%2FJQ1hQIhAJJPqFi2RLmcM8xT3ruIY0EnMyp%2FDgQod6xtz6noHlCvKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgJGFD53dpdtd%2FgO4q3AMbDl9qxQT5ZEJ%2BA%2Ba4UuSdsj%2BoqtvP7OOQ52%2B6%2BfCTDskAYyT8aR1lqJYy50Cr0qhupzOHl9CT%2BeOu99jMSt8URmJVijkEg5yV6vzfU3RRgtS%2Fq4bJVxDqt8dgRo1EHEVv9cJOIGVqDKgjd9FzkXorZVVRLyx159BxYV%2BJR2PL1SjFBIdAa1DO9kLSqgv5I%2BSsiRA8cvayB8ZxJYREv0yd5INbMw%2BeT9gUkESaCSkHDnZvqVwqDyNOZTvJWY9MKlvr3ccTtMg10n4Pw01BiA%2Fi73GkYV0QEMQi0sBLYT%2Fr3ENU7PLnleWPG3KWDU2jF2%2FCuGE8MWPwrAVtfaKZKGlNfMl9fuRWZPm4xzrka55An2P20nzSK4CW0soucM8cO5Veh9Q0miO9IL0pv4n65G6tdT3jbEMuNpFc1cWYhC1yMAcDeTTBQ1%2Ba1Nl%2BIuqglNjGvyWKWX5prWERRMqPYjRL0FvC1TUHxrYE8znPCzgCT3iBHk4dgpeuX0Jv71fx0PjBPaedjNCKJLE4NHeAy%2FSy2Pl1tZq%2BPjTf4JYAPSZSt2PHTE3%2Bo3Q1%2BmhXPnOnj4ggCTCzZYwSFuCzfsSIqAFp%2BFkKGPSlA5IzBqTV4edTBMFd4NFFjuxUxqV8oTCUq77DBjqkAQrc3keGtTpIbAqeegTOJoXaAC5JLL7pjfjdARLNfvdwWrFOKUnS4GdzCo0QQD3tU6oM6AoEO%2B5G1EDVCAIc3O0vMwK9BXlBwsbR5n4paWYpH0jeJJc5oVw6oocW%2FJR46dh6tp5VBhk2aSJ9IZTjzg4D1tgjuicAyO80D9EuyVuZmWGnChLwy5JUipZIDqKmlVA9kR6GuarZNMIeL5x9TQn2pcN9&X-Amz-Signature=447a3434d51b8ec486dca7d58890c4b1f7c162c2289d92b7f34e68812cb403aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U366PMYP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMro8awnz%2FJHvsIST2ut8p7j65yRIQzgOCB4WsQ%2BEutwIhAOvoNTvKvjX6Ah0phZEw9tMNERBoalpZoMJgdZ%2FVI91TKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSFt7YL23AJ%2BIACVAq3AP6MS367iUtQZHepmpOcF6E8JdgWMLvJdnbLud9VShA3%2FGeKnibLYf81SxQD%2F6AWxWqTu73TtcnJ30epbBMPCE3RKpz1bBJ0XkkSM3jZd3Ezf0iFvrCwrhTYVzDzVAdUeV4ttk9%2BaqZimG%2BPIepO6wYP3TZHn4CgddYdu%2FuyEAN2oUYukdT7FjKmIU49%2BW4pLgB7BPwahs8Xb3QGqAVkXxMfAR0xAPkwMUdcvLj0X2kCJS9uqJ%2BdHvms3t5xo96PlYmxZJp8f1ZI1yQ8g5byHNy1Uev%2BtRhbdhERvKkXANaN7t3RGgRuoYUDMI97LLEJJzzr1id0E93WJ5f9psQdKLPVI1C%2BhrvfnzgoqfzWgrSPcWFjB7wGrQUAN%2F5C14as0uyDPQ2FYBSxHP0nm4%2BuiMKlZUe7GAEw5rVLndia9TAf993fMLUwpY4T7S0CqTFiRQc3W6Oe4D3hL5MKxd0MQRHU3rTCGPgQQPHuR818coR2liFvTZ7iSvB53nWLnF6cMbHQt3ATZg2BxFF%2Bjv%2B29Eb8%2FL%2FSC25pp1uYdO7RCHDagA2Xuu3KWTkFsUoho6NadGv4cyAZW6w6zMflnn%2FSGoa19i5fcvevsV%2FHms%2BoiCFe3XX%2FqVxYrYAaZGEJDCdq77DBjqkAWSX9G%2BGcWdeRkyRCsqHYMGTNi1aG%2Bl9tF8pMik%2FgCG3HXWGp60oqyiBzc8aaJtmkiah4QLgsuQs1BzXWpG8p7iTuP83V5UbjkadNtyXKYA1as7ofIyCpZkhvYlCXPpp71tPlzrA4jPh6s9h02NVDPxTQiV%2F4kysQP2pZxDBsjPhaPOxH8DngxFyL77EMELSAzitqOduynEtx7N3lCon02jdMZMv&X-Amz-Signature=8ac63c779c26a5bf7745367c9125ce7f1950abe3bfd335a563d0f64c45f4f8af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
