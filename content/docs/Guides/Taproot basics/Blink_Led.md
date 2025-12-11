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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5G7WDM3%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIFGlnssH4VYyw%2FWGTrrZO3EXeDKLcejMV4tWTnj7QWSnAiBbfvuXlqYwKNxFIpHjG0CjE4%2BR%2Fr%2Fk%2FUPgJ0PX0Bu6%2BCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqMpjMhc8K5uYbJ%2BrKtwDSWrNSzpRnOPuYwattAGG7lN1Fwpq0iALCDw3FtaiA0DMIJiLXIrSdpAbjDVaGwxOtulU59LzDxh4SYHmIeT7qJ000Xp4GAyfb971BuxD4n%2FZmdicaAALWZBjjAwTKBSyUjdMQG4bk52ell%2BBZLDgEfc8aoo%2FKfjyTXmCayzFCPZZ7Du9Y36cjJmIAGxGupQY%2FRcgW1l4NecODuqVUMhHF%2FQI1JXfO5eFLb0eOnFU7r8rtvOZCz9ZZA7FiBmOSthsER%2BYBOJjeZA%2BNUa5F42yXUW5BmvVjybA7c%2BZClvscQnP%2BqSlk4%2Bk671Ss7LszEPXIyLzyqhAYvdbkevRkgS1Qj1YokwXel6K4LONGax0E8pr726OQXWEueR6YVbrlSdj3eNRcq7Ev%2BUUdX5VsmSkUDp8yd7vrzevHMeOQIPfGFoOhCyvWXx%2BLT3addwkPcurWnb1R%2F2euJonE5c1uast5KKMGGg%2B7%2FsJae0td0Gk9%2FebU%2Fye4aPJOM4p9cm7bBHoioVq%2Fi1SwROpdhnmJtPvHDD1Bk9qotEn4XYn1k%2FX1i%2BUwp99NBpC%2Fr6dnO97jmVUF1sWCTh7P2DVgJzBr%2FmO7ibgzri7Y3FyHCuVdvOniu6QvqZwx02Mhy28djkwkbboyQY6pgFJfWqa5avNmD1lco1r3W1cm%2FQLbq4GuOad7duO1vysjDm05j%2F5p%2B9Jr2Ow7TBCtjcSgVcTuGpMmevohxnMkCeQ6bt52pwoQUkbZGTP0prThrTxyeiq2Fe6N023r%2FYErw%2BLS5Kwt2FwONeF3AlecEr5fLA8hjfH3wXZJLCmu8YrHq%2BMtB1L%2BQkUMffqYTdalTVURxdQ4KJN3DmX5rSO3D2BWI1jtqdG&X-Amz-Signature=8d1d79a1fb5f9eb613939d86c8dff269a450693cedcc803369cb20d8fe1da612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWBICECV%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEUwF2wZeMkj%2BazxDqQHL2gKbKV1RfL%2B1v%2BGTFlVQIeaAiEAvz%2FlItmeJljOFFMItz4SeIScXqi6%2BRsnxpFkfafk8qgqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0w77XbFzyBBRWozircA7j0EvxOpNsvPbUIOaJy3xJIq9tttyiAbSq7WeVksoJ9iKuVsqgDIwZP3HIKlobad2tpRgth7qK%2B8Hptgc514ohekxQFQ0WqLk5qaIimwpeTbTE5JcddIO9cCpKorCVu5Q1Qt9hDFS7YWnJr2ar3%2F1rROsBl73kmYNqCSX4KS1oIown1q5zEIrjBLJX%2FFz6eWqOPbH54e2Dwv%2BUQ%2F%2Bpz948qWeCOWjr673xhyVvKz4kW%2Fn5jSuvKu0MRSVkJdJxC1aIBzU3fMAp7ri8BjruecZ1cCV6dJ7ALq6qSTuz%2FR9DjPbh%2FZ1R5HNUvTEZ4WwgmC8FNy3hqhrnrSIstb4Ithqo5%2FsWmc4gwTE82Drpok%2FVyXhV3cqewfTqj2BBmtayr81rTVKgnPxAawz7za5iP7Vqo6S0fQX6LBmZ1Cc5l8miS6sun1OJBvNBtDQorIZ8Os777KlgjcN00AWTMA12eygcNxpa%2FO1pP4d6uuKAypB8e2sNjnNPV5%2FGA2%2BAEQGVN6bXqBLvltP1SklnhQSbYf7n33s5AdHYqJ%2B3E7ph29qJl%2BTSKhot4UjsRjcYnumqsf2Fq6KDAbLMCxgHqH6DA8b5SONnExfmJNqQ2svkbckaMGPJ9%2Br3BoMT82H4OMIC16MkGOqUBMAFqBTxYtAZL1agdfo5QDeu7MOQD6b9o7OE0ZlhkkdS9cMINnzifjAFPMxSOC39GjQx41LMTZatbjNDy3J4p4vaJhcU74R%2FiyMGInvQooKAmm7IQ66ywxIB%2BzkDKiLovw%2BYvm3lgMlMxl%2FyRO9McofNP8OyP2WYhQNVBNYLaff4qiZ8An%2BkjosCl%2F2m%2BWcdzQRJPunViKInA%2BRuadic2po5j%2FTE6&X-Amz-Signature=39c2367f49f0609a098bd9143a1eb06ce5b333516485d8e193057d2dab58a3c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
