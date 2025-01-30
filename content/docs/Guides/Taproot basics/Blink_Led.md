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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDXEIJI4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuO3grVYAYc3shu9VHh01GyFF8GW9aMl%2BU0%2BPuS%2FcVhAiEArR9%2BdJCGYb5yQNhmxyEXzzHjRHpoeT1PGlGm%2B5PU%2BJoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDT%2FGgIe45nezlI6NCrcA%2BwtZSh5udJRBy5BbLeegyDFKlDHRl23kFr%2FFDMfQ6nZnHOLf%2Bx6mmaPLDcHvtwWKxcN4kr8TfrdBCLqX1sNbXPlBtNFxkKUk%2FHyTEfjra9meyADGvs1E65SrbqNJC5%2Fn4kQcX0dFJnFAhwVU7qVwdZi2H0nUoshXDbkcXI8n4fcYW1BBuU%2BBiRIM3SHu4S0%2BZ8rjAl5oHLOIwXzW7zeShkxsdEoFmADFFoWJAOFVMxuS4tUuv%2Bpp9wb%2FjCJf1savWFaCfo6Wv0XlFmDwFQwh10q%2FQv6iey5EG%2FzB7CnRLAXy%2FDXFkX1PaembsSm67peeLWwRPVMCqdJDaGV3BugLmJgd3IC7CVvXsfH%2B0eAaGxEN36giUF51MgdN1JFgiGmn1AiX2bcd94EY0W9%2FdI%2FUpnBStjQHvmyDea3WvPNOoxWJAFmmAIytzxU9vEwh9Cb9rrE%2BzNTfERgws0%2FATUqgkTGWXl5LhnfN4IgrDeJ2pCukjnor390mDJQhTeMOnO3QlCbYRC3mJKVZ8E5aB9UqY4E6LpI26n%2BcHD%2BZrS3b114CrF0LZjKhywbeUlyavf5PGyG0l3Z2YwxtvtYuQtVGmWPRDHu8vF3ovE2pho0CI%2BCoMxdNynDxSn7gy6LMLaY7rwGOqUB2CJNxbwU2Ko%2BI3w%2FoAfQWy7Z2Ol8EVuLJ2h2Dd8RD8odoWczRFBnND8IqBhT6yFQvMi5ztUIeFzi8Y%2FuY%2B2ekx5baWt1D9eS10neTS4o4jYDcpqStVR7sH4%2BtfUoiKFAZhJdWI3VOZyZ7Z21KYV%2BbBkipdV6cYvEHVROHYwAAcKDcZ%2F4jfgiHLqXOSQ5b9Q2hChvWtz14Advg8yVyBn6np8QfYnd&X-Amz-Signature=5992a2dba6d17e561135b756c42c9b4103847629339c79ba285cd6a3dc90d99b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MENI6L%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEvSpSGzDWsF7%2F1gToD1SFAKpVgUBJ%2B71UxJTKPwERDAiEApb98qNWGSIWC%2B6llPyQIY5bVBXOizewLkLVG5m38ZioqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwTBXIxnBr4ZhRuIyrcA9cNlFQ%2FpQLfa4Ia31Pc9Ps%2FN4ZFcawWFSRNvDoVzPGzB4Rx9%2BRMeXys3w2MOeFVBxP9Uy3tXElsaaaaXPFMGXOFUPmHqkUMJyE4GgOJJWqKD5s4cvkAmxO%2BRggX4Y414PSBIHvqr143WbNYzvpX0NNDyZLZTmqA755YZAa7kosKERnVnRZz%2FI3FQ8mZegPtxXO%2BTZBzspdUQe21cTvu2EjM62ncQYaH%2FtSK%2BBb4mq7zu%2FS4nYnKAR2yKGmJCcFqBju1MG5GRsa3jRInA1jhr%2FaVAwtgmymKc0AV7eomSi3%2Bl6RW4NdkdM0zJ3YdBoE0KCLOdjCXQE4xJ27wRxP1pv07QCql5VA3guhtnsvHizqVUY9cFmSJslWB0XpNhEdfsdwGdi6NEUglldmHyOGfLWHjisnlc3B3cp%2BLatmoCg0WRlPjt8%2BEfVVdRaN5tz5PovDi6SBQsNOFT1DLrHNed%2F2jmymHJYlljQ64f7Hj4A%2FghdNX3kizvxHoxwvGZ8On06cdla6xUOLZ3FuWnJw2jtRR3VZMqahPXRpSWw%2BON23JIi9o7IbmBbgBkyE%2FucEWnWCM9mUiuBmticHL2JMn7yQ3lg5iyu92HmYzruwwEkSOgFSJuP6iDdgGshNjMOyY7rwGOqUB1dhwLwkjfg5phs1HJeaVdYEhNtYD%2FAaEs9fcQsP0u0oyZxSqL8sVyWpoXlNgPucCIWeuKpNeH%2FWxj9jrMhMg49rKlkr2Uqe5xSVooSPXDSW7pNTfTbYOZit6oPr7uFlcQ6QBFqycVN8BKjS1Na2yzCdzAzMY0bqGRlyUsm23dojQLEKMtZTpc%2BR8iokWVZqwEL80fGnuIu%2Fm01AvUFXqXY3yW6lN&X-Amz-Signature=8e9efa7434be2112c83effd13d91fca6ad9198d0427bb620b16a08674ff801db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
