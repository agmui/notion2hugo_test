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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2DEJ447%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1cDskYS%2BZ%2BsNkFb8LuVg%2BKioZ7N5mxxeC99R6brmBzgIhAPhjHCwXg2pwZxREPbee2h1uGezSsv1cpi3WnvCSXv0bKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxepWYKu4JrDromLO8q3APrJvICa3mFdifas8%2BBrD2pWctxvo3nM5Dvh%2FfdUeuHafuMQsK0dkIVPoUlRW3IZBgyRSSH8IFZyPpFOPz4EefsUXAv7CzqsntAuy3Z2ZMQ45eNrQv5uvpBIRGTFqYdER1%2BzFtB5gXEd6uGwWfbVAu3%2BPqM%2FMr6ed01dGqPI1nPAgqj5nc%2Frl4U4UnwBi4e93VvCPjT2O6xd3WI1DkytWSaQOf17zH28H%2B1kYw85ddToM1uCgUf7w%2BZpOXNlIH9R1L4hDcDM5Cscf1TEpAIWXeE8hzVfRK1uV%2Bn6JDFTE2qJNkt%2FeHzA%2Fde5jakEXUwml8w9rcpwlmZYFOxxn9hpbWado6GY%2Bkr%2FSBUHdUj5WX9fgzrqJx0R7QuXc%2FgvslzLOypDKxQc2TSP35B%2Boe3yUrQUG%2F%2B6i68D2K4d5lb7cgASalZL7wqcz8B3bVA5Xqx3%2B7RQa9bdOLmUj51%2BfVKuZLrHnHnMst%2B8n05zUrNj3O3sIQ3Y6dc6bWNyaHLxpBqLAJ74mPdA%2Fzs32N11wKpQqoFpILVG8HhC%2B8Wpl6MUXFJiFUYHh2Ge2ygIS4IvLQ82XCkdDcfk1YuCNHcmpM5ECZl7%2FzHxNTGScwzue71E5u9kfatBlm76QTC3FGAiTDHz8fDBjqkAak%2BNAnOjM2gOASvvd6K4j9aM3hdry6YLUg%2FPjrzccKwqmJVu1oU6KQYFBoKQ%2FPYzzB%2FyRbrF53nJqf6c2XJl%2FLup%2B4%2B6Msi1bwiS792yjeZdOhqOsuC5ZIIP9f5%2BXOicupRimrGqVAL6bQUPXKyldqZqozUYh%2B%2FjCnh7dLKLi7VWGBf7RQO0YL%2B0hWK%2FroDcY2C6hUsPH7l6VpWvEUzEa%2Bn3mAu&X-Amz-Signature=ebbfbbadb2da4573fccd8cd8360614fccc42039f65f761960ed9dc715914166d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7PDO6HB%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1UpboAD%2B5xxOHS%2FUASil38co9nzFNMwOn8Zk61FsY7gIhAPtHs%2FKqwNozGNqgZxAnLiHtgTdSP7uw9dgP2w%2FoiUWgKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BrgOaiuLX%2FaGfQrAq3ANqMDPJEIPc%2FhuDIfO7zUVhl4RDSnR4xGIJgMuYxNWIOC4%2Fpdi7znJP38ZRVMeAVKGDKwJZHjs3pYCXP%2FLd4ncKBgch5XtmGW5XDN1PGwBQyvE5I17Kebbyle%2FdmaaGphZSHpTrLvczh4PQ%2FIioJ4fE1nZOJG02ObTAEjTMcoB%2FyoQTB2nloFvl1E3O8JSmIvXFJ58HU%2BagjafaU%2FZ6JV8pr8MpPx97QsQDG1CQ9%2FmT1UmYeZiopoqP14tJCBsaHWniFD57SGtHBcHuxRtl5gUtqMj5Zv%2B87AZa0nDVu2wZuJW3mPhqnnljvF6%2F6XCzPKXEc%2FcjcSfWmS%2B%2FNX%2FATKwbkr8TpfVKgyLkZiGoPXZYyeyOT8eSkuLnTfL%2ByWH%2Fjsnm9dFzttbCTc0vSeED0u6mcqBDqo5K4EEwdQJgCLgILXt9gMK2hm1yVWxcQq8SPK1Pzm8GwJOjt3E6uPO87wXFqjZCvkKC%2B5L9UUrypbOryy2jAMUX9JrchiRUYapouX767WSKRiJR89N4%2B41FL0IZceT6R06lnK%2Bc3cEEjFg%2BPvVW%2Bv2HRFdfeHGUqu9ylnfTO1cVmdpk%2Fzs6wyxOoJ%2BSNZ3W4oscWhgoBN%2F9kIJJ%2BvQBkevKGF7uEAy24TCP0MfDBjqkAUlPd0eVRWHzVaxREvoyuMJpmrcOlhhFd8ww%2F6VoxodidYe77Ypz2SO3eboNHuolfuxGUuFhUWz31d2MFLtpAyZ%2FEJNW%2ByIJ0o%2FrPPVT5x1vS4EPqkpWIqb8pq%2B3vZYowwmAEay2Q1PcG%2Bz4aM1WukJZpLsQ6ScC4mL3Q7mss%2Bz5%2FwhYidboEg%2Bpk0XceUWancVjFKIFxi9npIHo0oe32H4Llr0c&X-Amz-Signature=31ea0ba5b2e6e57d63a0ab425c8c0883e22b89b3bfd401a06735d10962adf64d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
