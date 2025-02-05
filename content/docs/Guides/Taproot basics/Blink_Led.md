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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5U4PCO5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDKI65QnVKcmBlSmXse2jFkfZ7IlDE%2Fjiqq32dSLlro9QIhAN9v%2FEVOkoWdyQ1MKG3ez8LX4iMi0ivZ%2FjFclldOVKu7Kv8DCEMQABoMNjM3NDIzMTgzODA1IgxBm6YaeJzvZ50KGkYq3ANYHOKzPXrNWTTK6M8CIrCAGDXSaIlrIvmxK5zWFOY5lO7dMliU4pcrhSmnndNNLtYEBRFnWCNJMPMXJZQ%2FnXvjGljeL5bnShib0pTeBCxL6u9VhsBBOivVys7c4yOd3Jd6KbfmmAg0%2FiIFEkfgUdQpwAlwaiR62Ntazq3%2B7vlwJAkOtugrF2WSH7FEqWk08mfhRZsVqTy5iZB6OeUJuqWCKCWSPn2ue5tLnb%2Bigb8b9WXCl1K0n6U258crlelzbmHvP9U%2BvtNtsDOludk2Vdc1Z3tEBbE%2BWN%2BpCkVbNFSrxjWbcMaERggpaSX6ZS1DOXtc7lK3v5VUQVyHx7pK71O1w4FrX3LV8OSMtWBgLQVoPtEiXpcuZ8LVfXVIusbBnWNc8zoNWn6a9DzgC3aouNjs4JH7tl43vVkxKHNcZMuacfvuITBK0Wh9nXJhb%2FTy1DVlpFcIDM%2BJ1hqZ47PotKQX4qQxYqYiQA32ubcSvOpRSeawMGmXQ4Z3AOeegVIwE5TF7pIk4OluLaz06A2CA0G9CORMNRtbwlpQ7iMOvTfkaQZ2xu4W9WLETqQXJTsUNVuDRunKPmrS%2FKGS8TwfwBoi43YJ9RsQM1ulMEtJO5fGkwx97SwytcXoFwvUQjDm8Yy9BjqkAewWWtPxxLthtu6%2FGOn1f%2F%2BC4wGkP2%2BVQQUxRgnfX4UyLQW9QturMj5D%2F43D8Da0gAfwmVsMgWxsU1PEiwn7%2FedelTaFYH5zbiDYsoDTvt00D9FLQshYuZarl8AJp94xVAVOKi6P7tPWbcWiufHTU4lmBJXzheS%2BMME38ZYwNIhkknxP9POKioZgZDaL8%2BLQLkLVZviPTFK1vIcAwj5DOZoZP7mC&X-Amz-Signature=8aee79cefa8d0275c11a3726e5b9bb765e3ec0321c5528bb2193a5fd282268bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46BW5OM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIHOsA%2FjY321EIr%2BUbJLc%2BG9zuEEHXLr260mBuH3iH3MrAiBjvloMrSG1zsVLgPZlcJzzmxiedPq0WOwzUA7TEa6NqCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM3EBt3OHh95lCocJVKtwDqvq6XYDqOWBUpuVG%2FZxxNRrvTflsQbwPl8tlqaNOOEts7HDU1xK6SZfOSDp6wa2gHsZnpj0oxrOOlwx8Xa0F8BmFjGNE7Qge2o7ueBFd1Ai8JoZJ7XHzaO%2FCEiOvJZZ7%2BDQaxz2wec%2FjPh9h35lthkAJLutOmyNx9jk29zl55XsrKLFTCclrqBHKs807wwg1dJxpoyDyhova1A1FJ%2F%2FTPTJP6%2FsvWs4%2B%2Fu5Y%2BxDOBilYDdxyjpcJ6qzy1Xsex3kfiTKOXlwXXDY6cXLtFvPIEzCrQfEISrJC%2FpxKoS4evOZ1RuCeFWRHn1R1y5h0JDpy7KQFBJdnxOXcL%2FmIfvX1ysWckIHZHps1qw3HnI9OYwSn%2F%2BFrYRNGGX%2FLFIRYVgper5anDxOP0Rq0SDMIdJ4ql6QQi%2Bc%2BzuYS7Qh9iFBOZ0KmPSXYBeypl8dKfi2xb%2B4Z53r64xRXxDURq7Nrm6DnayXt6AarjREyGOZ1p5I%2FYiePAvkLNSz0Al9CAAfGFrYYEVCClvm7X%2FJ%2BNW%2FZCJvNxdjzUElZl6PtBFcDpCpEm7g0gI5apT8251qyzPU6OdVmcVtxXRhdOFNNoKMp1FHQrnVXHnWQUk1OnPZ%2B4pwBktjpa9iMQTUT%2BoM5fiEwjvKMvQY6pgEdhbWZByoO29RsLL2LP9zM5ltSF8MYWFOCX%2FNtQlH6PeLIFhYFRO61ABcPU05REnPqZD1NpAC62390eYqxlhoLs%2B0aE0pMLkizDd14mceDAvaLKmBps1phXCIP7r3caWJhc0jwh2HuCQ7Nc%2FzLDBLq3%2FXOw3XCT64wwE7KxslZ4yv%2BzRQFgjad5G7%2Bwq6OZ6MbjvKOHm2pZVA0A4qg62zlaoqGQMeM&X-Amz-Signature=25bac299d08bcd6612c775fee2b3c5a5df854e33680ad6049a6aada4f3decf2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
