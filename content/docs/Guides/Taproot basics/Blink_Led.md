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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVBITQ7Z%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmSJ4t99SuRJiN7uKylceMivLK8NllRea8FzOVUnev9AiEA6qlsJCuOJa7oykMaBgYhROjcZkVdFLtk44%2Fkfsq2E0MqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcTnGlwcxrgAk092ircAytWn15DkdHdjpW2Tm8Z1Kq1JdvaJBnZWvkWS9Dilha1eVDf82huIWtd%2F5E8ruyL0L2aH4fP1dbLfkTRcou%2F1CP9JkcGYaaKBxTjCEzMfysp46j5%2FJnDvPV93bPzYqQAMwEDdKkW9CLQmiLTVugM90AwHZ623HxDC%2BRF%2B3XeDhMjFLEQ8T9FCL7wLnfqJORNfNKrh2HfcqC%2FQMgj9tvn4lKFPypf%2FbofDYBzukPqLjG2l3XgJvwKo2yggXmgisDkdJs3u6aLtPLWLWIMI0jY0a3h8T6i1eP5inSuerkDJbN%2FcRF7qE35lkjoMCjuXFXQ4t508qHzcy1YIFxtgFnLDYpReur31gR9jqNR2%2FwHHP2zDRl9OlSfWvE7XxlP4a1WDmIkp3ktf2%2BMAwdKkVe2BdtvkB8n0wYKrmf8U6vWy42FF22O2bzVEC%2BI%2FvvmMF%2BduCSGwXhhLA9Fl8QBjRNWtxErYsyWUyuQFFP1H0snXBukfFFON%2FmweiKRL7lxRgfZBdYQfk8N8jkYUid8qHqccGvmuiEJZgnxD%2FlD7GjJdyvc2Pew%2F5DIlPt3YUtYmS1AO74aVkw%2FzO57uaqIHM91toXNrKkyxlS1tojhGdw1fMbTeVazMnPWCdir30QkMPTVh9IGOqUBxceWiIzLNE5g2dA1%2BhYiE3d0Uz0k82dMbsytnEoMx%2Fo5kdqo%2FlsTpnXJ9qBVozvojhTu7jtd0j%2FZbREXUsjYICLvCPz52DUWDWHcPgXdnn%2BKb65KNN5msuklAoUvqZ7brQzX7wfyBex81vZDmIZXOFy3Ox5rHmxtHxzCQjGlkSQ4JH3W0GPIsSTkQQERaJE0%2BLGuw56USpWNTLWFw6LhapDpdA9h&X-Amz-Signature=e4ab8749402d4111382159bf9d675abb87dc891964ebd58601b564a1679717f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQYTA47%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDm5KOGI%2BSgNDiLE%2FdK8IlQcGY%2FkamJ1Rzbpnpz%2FHw%2FBAiBkk%2BDLe8lM3xOfk41tlZR9eBFyTrdNGbgoVyXkSqFIhSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2F25gKfSLvuwnbhyKtwDoP5q33ZWsJiAFs4TZcu9EYFY9FLiRBI7k9ogO5f0IjUp22IhAZwnPI27I2e90V5o0LQry9VDQv9ylcTjBkXCnOmG%2FeTXNC%2FX8H0WsTdUfweXM7gigG7BEglk5hCW5nyeeGbEgxRu6aCqxMDP0HiHIPC6OAx1mZIwPPM9x5QtbqdziyXN4NrquIIgE6%2FFbzJdkPVroEyL1%2BfUlmmZIekQFmcYiZE9E%2BK8UwLrPKRh1GBJ3hoXaTui8eq%2Bb8MExi3prf8ACuHkuCvCy2aQAL6r9%2FtSf8UiIJsz10kuvgHOu6drb7hm0NGGtM6ZLbNT44aRIhUiLrUr1%2FAimt6DJTeX1iulCsr7vlMRGK%2BymrCx2cYwYDlErsoIf7%2FzTYhDpYbihm4bHYUjsl%2FXYhBPMuuE9sNV21D00B%2BAEE6f3mUZ2yuItedG5kL%2BlGUvm7h0WnRXwUBU42Uwep2PoXx5HOr406i479wtBSx7t%2FuT3o7wAet7gTspJKsgek6JQHi42PNoTXz528mIMMnxwwxkfl%2BEuTeb3HhC6PPQiVf5uWV9vopWVIb4Pd8vmhxLZE2LJGs7FE1SoH90YAPUb27fAFTK%2FFCbOJepJk4WsnQoVJgNS%2FR52tk4C%2FUsRsS%2Fp9owqdWH0gY6pgEw%2BBX1FbzzBlzCCWYFnU02hSud0bJOU8JuJeTqsCja%2Bzl%2FcbZl2vcCCHJB4ncrac8hqbCBhyaDfXYn%2BjAhDaqX7TRSsRAFn9iHcTmgE7bc9DADeXDq9Yc6w2Bw3UlnqTT836hEQ8ZZR8l4p5rcs%2FhRDHFC007oe3%2FuJeX0uU7RiMHwvclgva5H5gxHxZsWL6EyLyp3AwZgvvXp9QwiKrIKIuGnLqyY&X-Amz-Signature=2a047b47f6437c35b29789ca8ecd212718d6c4ee1e0acf3c15eaed2f39de98b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
