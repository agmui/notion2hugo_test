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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFQM3YKP%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG6jj7LZLbynXnbgH0cfQ%2BU%2FcPurO%2BYYD%2B9qmduY241AIgeDt0ucuw5QPRegIiXIMno3oDWoOxtJAEp2j%2BvfGuuTQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDE3DQW2345TMdfSOBSrcA8XrMGVQ97F7S5MJqNLQGWYTQaNkQ5SqAQJviMfCgoKVCnUPspjV73OOUmH7KBCrQniC1nESyjzGRmGfnvfBzeD8zI5MfSrPzSkeKO4ErFcXIRfNvEPiBtkTyzWnGEpAWMws%2B1gDK7XnM1pcRSYRwoRdwbOMPzmDA0yXhOUJwvISipJs7H7%2F5T2wLCxR5oR3aJpfcq3P8MXoxmupNR1vBsV65lKQdgh8snSZHssfm4HdSquQtotLy1W6LVMjies8QV4VOopkhyx%2FPGzTx3hVjClcL5aL%2B3%2FMJYhF5123Rr3S7B1FwzxeIq4OJod%2BTg1KFKRS7bARyunpvOVtTenqxwlyEuMzYPjLiR9hLhHTq9wCmNR5xNQ0rqp8iqW05u%2B%2FgeXq9XPqbN6HVSMqJKiE1tyS9fIuaf9CpE%2BYJYj2WuEtWpdMwvsS5%2Fk%2F7KtJwgb0zqlVjvBBi%2FLwHtnp6%2Bn%2B410Xl%2Bh5AlOyIC2M396r3ZUupjDbv6BhtyowPWXyBA491BRPn3Q309qj1Gm5fgrcEljQ57JdmuHD7lCfrwfOjoIqX0CIpl2%2BdlZNjKr1QUFCapIwTwPb6XjsaP3FuAdsfEAflqoBruiCfJvm%2BedYrRMaZw7ok%2FpUhYewdHMLMLq9%2FL8GOqUBBXc%2FVyVI64kTJZiExyYyNo2ALPkmREoPX4fwpjvYxmh5flou0DvgFs73XYNOLxczF2gdfEUUrUzRQmeiRz5R%2BwYpWcBh1k6C3Oi9LRuFYK3bSeaNIb4SxhLI6m9bTpv6lEZlvb6H7zgF4b7UizsixOLEobjos%2FmTilBtGRxVg08ufSzMMYjR5rQJ5MwZNelUaAGKPY9Da5HlI8b0jp6bh%2FnpOsko&X-Amz-Signature=fe4083c976d7bc2ba1d714ee6b0d6fe598031ac85c2ded8e4dfba520f4fe3504&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PW2WSNE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkwf3CJLV64G%2BcOnhcpZEAMa2PHPmgPPQ5IMnkhcR3%2BQIhAPotwvDWimGs9yDPOIxPoAC60AC97wugulP%2BFbeA8%2FqpKv8DCDwQABoMNjM3NDIzMTgzODA1IgzUBeSjSFW8uYl9LEkq3AOOVGrKk0LAxkr9bKJIEyGIYY4Z8kPtmM7cRKmiDlSLvgBy7R6%2B%2BAPtWxdODSToovAaO2TqmvWTPlIX5d4N1QINg5M4n2lxvixRWZ9n7aQSqEVWpCC9MKz%2FQgPJBzpgdXEHh69nzg%2Bsf%2B7JZK5HuAlDYDhnMsVJH9OOrZ%2BJ8Ptg8vCjZEcWBDOKqa7WPW34tmWuDrHVv7AACMCEciPYUR2OdgubItMiZVNyMno2sovutpbMWm3klclkhLS26%2BzFjpo0McMKRACZxIL7z4fV0wxGumx8KvNSzpmkjXdrFbtM9zd%2FPTPkasVDld3wZ8JuyFqUuJDW%2Bsoo0lkak41EpNEdIxwjj7KsHSmO8yebc9Y1U0OAvBVDov0l18tZDUv0ySTgovQW3N5iUwIFpX%2BwsduOWkc6CFyTD5S%2FU7lGg4zMRaTTB%2FOqd2SkttIvK9G%2FMk%2FM8iZJPxZP8v%2Fh%2BWfjy6TK5dYtX4WL7kv0cfmk3E1FF5LESIgXw9o9%2BlGWsUekTsKcI7R5yOfui%2FLvQs3P71SaxrRwAIGZebhEHvjSscB3u0mGY9IGlkMus2%2BpvZzU2KAIDkd%2B7EsotcrWyEIae5FhKbvUqPtG%2FVAu40UTbX4RQ1ZZmSEbcTHg2k2h2TDRvPy%2FBjqkATiwaXE0cDY%2FWeTUJJt0%2FxUkjdkGAScHyzo2CyZ%2BCqkihPN%2F4Y2bQBjY7ZznOuM4lJtmEJpj3SpBC0AZhCYOO%2FZ%2B%2BX%2B3QAH3FWtnqaHhqHhc9rmth%2Bhm2OCq2m4OwpQATyXYff%2FvUmKZNDP617ItlOO05MenJcpGybxTtzCgnGyu63zi%2FytTZW6WDgV6p6lX4CyQqoDUb41pmqSxET5%2FBLY7wsQb&X-Amz-Signature=00ad74f78e12ddb3988d9ee397cbbf7ac16711527092044626d5bc29735b46bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
