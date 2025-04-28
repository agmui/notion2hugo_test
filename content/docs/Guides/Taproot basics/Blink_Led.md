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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVDL32Z6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqCB8DfY1%2BfOIumMVO5lFT2xDkSVsosAYslEN61DQ9jAIhAPthWF4sb8vQDLyn%2Btk9bj2Uug4MbK9Tdc9mCftAyuxhKv8DCG4QABoMNjM3NDIzMTgzODA1IgxjmGOGVTBVQ6i3wWkq3AN2Ng79VMj1IbsoHKAzaDxPYE3HlKmhOnKKBbsBvD0PzmfXO1Bq5Ev2MeL3L0QGd%2BOkDOWN4l9IRDzDmioBn5M1WZ26JrRw74l8GDTxZAa7AUGNZBgffurwNA7Nj4BEqlrI2HJm70DZ4jjuYhcjrokzGRn07YhtloQvmUf740x3Fe%2BvQ%2BjdtjmrVs0KdYiLDvC3H4qtPh%2FMmZbrX33RP0yU5XLBWH%2BYBudOwcp6piOMzwQBfnQY2QQYu%2BDBC637kmCX3%2BmKXBTHXwQ9rBnAfqFvv9W4QvJAKXMY3k5bN1rT9DxgGIr1uQig%2BigiQB79EHeczLPrmLd0SptKyEtKuxurtBk8jWotVh8%2BrJNi8Um4kMCimOO8kmEjPXRlnHKupwks9wex8PkcMkWD1ADgohGqFNfYcR%2B6qffam7e5Wg3RddJ%2BCAiPe6T1%2F2UXW1FJRSmkZ3jdad24kOQ2SQQiiVdILfalcQDLBMVTu5f%2FSliWMzg32i0RxU0j8Jk4ap75EAkzAKll7eDg4fh9AnoSCJNQ1KlPpF4S1%2BDbwxEmLx4Sp0RENJMAy7avBMWQDttehSD9xCSFRnkWH7euFZf8Pl%2FK583nwutk%2F0hjBNn22%2FHnXRvseSqEnxOgU8uPfTCglLzABjqkAQ%2B9KcpRIYneLUMN9XIvXeSoRYJVU4rOUrV%2BBy0puslNKd9gIUQb4qkoLFO1pLbgqeHtEdKYG99EeVg3bV4YSXeDUvvNnz31wdo5Wdp8t1PlQ95wNZbzSj8HRwNLYQSokNitsbOMMx3eWVpOKMBPe7p%2FqKBAdcs7HVJ8JmtzJGhRNOJQax28a9am4biSLRJeViU%2FUMSSyD7XTwJrsch5wgdNaIYr&X-Amz-Signature=a58e87e4da6ff692ff33a428c1b5a7bf1c57d75fae25a51272a00a16d6f20553&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTVHBLKZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXNHiNAwZndOoPhVjuK2SIXnyHZczhkN2m9iFkzl8ZxAiA5pz8YhggevZaQV5Rwh18tqOPcNEubXfEw1%2BN2qqgZxyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM7Kt191s8n6Cd0C5%2BKtwDykqpHSCfrA7EojJjhQ0VHcFwsKRv06cQ9cIKF9U5EPBUje8I3Kop5z3sch%2BmVbygZvfeLZcasBqv%2FwGr4A%2FzG2GdtlEgQwYxgCPOt4LJ5iVrL8Ibn3PFCH9eZNGoDfVhH%2FZehU8UV1GMtU5HUnuwjGpIturaOC1FuIxX5PQRsshksuBp%2BPDL4GaaVdUVSguX4Sx7JdPCDPf%2BFmqN9a2GsIa3ZDBmTILUihv6HcVApli5d3DpvM619KJH6zsEMFe7nQZ20tiZJQ8xNp9FwsmOyATs11W16TcE3BDQoCXPcf%2B4Ii%2FmTlUk%2FT40UILLPYFutF4xws5SL%2F9fkKg7FuqKZwW%2FLoGBpJ7fqlNPwDrtKzUmc4QA1oROjuFxcMwxA5qgi5gQo1XTkMrERffIXGQnNJ0BOGQXaTORNrr5HQKOIMl0oIZklNkn3t5zHTlM0PB47TwfuQnfUS%2BsH6mwCay2GRZdv85Lbz%2BQE75BMrxd4vY6Kv0ub8Jqo%2B0p2XikCP4S7SnuTJ%2BIfnLpKppk6qkx3UrBwLnAjWPu9wurjVS3DuGrBlx4LlLr3LrtodyIJG11HMkh%2F%2FlXt2ntUtXF4eerjqYqPqMujHJ0K17cudhKZZ3O8DcMa3jU5urnkqUwmJS8wAY6pgHfMGaa1INWWrIHKEfyUxLo5hVDYYhsMoNo9w5mgbU4%2FLoJS9%2Fo8CIWaBE%2BFcC80BymegP7%2BtZr0R9fG8IbCHlD7AYlul0d%2FyXm7iQG7nVCDQvqBMedPt6zkiRY9MuDNlusXOtgtvtgDh72a3sdcqRTHEDbqBAqYAibtBMWAPe%2FpfjrpjYAI%2BA%2BnJ09cRERPvhMuDRofIb9kAeUqEpNCScfW3S27p93&X-Amz-Signature=9502122a56045276545c750aab79c97921d7c5fa9aacabf0861b1c4ad2c1e92b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
