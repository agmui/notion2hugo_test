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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRUJVNGR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9ERxbYDUxH4M6pzJNqueN1Wbfa2kcGSg7I%2BM0g3CMhAIhAIZlcesSnoM4WmJXbbH3X1h9UCyurTdsC7zN%2FO5uJhv%2FKv8DCCIQABoMNjM3NDIzMTgzODA1IgyLdMzoctJJU6NBqYcq3AOgQe%2BChKbTU51vwQ1NwoEKuiqIf%2ByVbWgia3FtAMDsRurMl7suovfKvEFfwc7vNvV7jDWd5ra99B6awxthcrySTfuZYePYC6PeuDc6Ssc9UJOS2OwutLZOCPo88WPmhI9AG08HC5xn11JQkUsmUkIYoqvCR88E%2BVXAlDwAejPmg%2BIzbHj2IXiuqvkRzL%2Flc07CIqj8iVtc4ptwV2fUfCmfAcUxrL6%2FwpiFOO8hrm8rDc6X8Z3BAdml2XF222kzIw89cVRFAXdddoSP%2BnJzuHW%2BVA4JyoKiW89X0sS7MKam%2FMfIgO6p4RqsZUD867663GG00TwCLKEy1EFIbeQDod40C1qSxC2K7xpeoizVeFZoNjphwjPSLWz56P1ObBMaKmupmj1oRPLkV0WObBGliOFvqkYGw8LXEixMr3laLyaohgRWApHJpwvdQaMI4y7%2Bkuqs9i9SRyC0kkPFb9wH9ReLOh2X%2FRUa4vmBNFjt5pfUymzHSEAe7Kzvf0VFnZVzz3p0H5RRKqEMMXqhUHpXKqCd7SSNfH7hpJzgmpyTqi%2F7Mnw842%2BrOcAK1KRehudxeWDkXFejUYbFIwbaezDHswpQqWpAnryPtoYzNi7EG5LgW%2FDgNFl6Xc0aoRbKPDChqLq9BjqkAVG8SWgB88KvIkELiaA%2FO8TOHAkolIzkgXIOuf2%2BTGm3DjWuSyYshd%2FVLkOhXwEPBg5FWbXDa%2BiCNu7EvIrttylzqRlUsxtkGg6MjH0RDIllKjGn4wNRHhNoR9F7lxM96BJqp5WPt1kQzshCMQy%2B7i2eidYtH7Pg6oyXFhlyvcWRgbLkOEmhfPOw5zyqkta%2Bq8%2B5JW3P%2BiFRHuiw%2BgZ3IXb%2FmYvy&X-Amz-Signature=116f8b56e641f026447bd82bebd0fcbe09b399f88a558d7891271ade64465fdd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PV2AR7R%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI2DUnHeWRxobPiHaGX%2F4keVr2he0FXf25GL0Qn89JtwIhAJq%2FQVoLBOIUNuIeLIQVGzCp9D0bdAw4Bs7LwjwGIoI%2BKv8DCCIQABoMNjM3NDIzMTgzODA1IgyvPP981WXFrJnxdMUq3AOSsPT5C4IgLO2sdnOhtE1sXaVQsDScMEOt%2BbxOPnw4H9NQc3i4FLJqUW%2FsPPQllcfKO0%2FJ%2BXFOGhXjPD1v4KrIxQ0P%2FASXf5K1ZJYBmBGjNFIJfHlojRpPqQJT9CWdEZGtjeGasNpAicezT4fabrQgrewUwod1r2PcoVczCSLe3%2BTxH8FFFUu8VZMtWwZ1fNjM4QIQsJY%2B0Q0Uz3qA%2B%2Fi1TlLTOgYI7Z6KZhBwyVmUzeDWEWuXwory47ry7tWwf8ptpjf1YBeMzAti9v8w%2BvyLse9UqoQUBnlI16jqCx1OPc4rKrk%2BfHp3rj5euI7ehrIc%2BSCwAtQlEBBJr5t%2BXTpUn7K44cF7by65uUM5OJGpqn69U5lY2QkGV7Gd3KK4t76LnayjuT6tsRPbDj5EKKc3E2E82Q2XGE78vF67Ns8vIddQXZxzEVM6UYFYTgUCUIRJxllfBrVOYoZSDSsqw97SbquJTjf%2FKH5l9ZTPojDp%2FsseVeBsYDGeG1bntDoqU9f7LB9Z4ZYLcLUowk4msBFsxE6wKaC8cYZO6rVAMXxv33ZAntcCEzj0y5%2FL6Hbn5TEU0dV401QeQkBilfnRFLihqLaDc%2FASaWdwa3F8Y1gmnJNgAgU0svNywevO4zCCqLq9BjqkAZpDZzFQVUMCYNc6zHtAdMmWDXdn%2BL3GiGROuPgA060ZS7KAHQ%2BByZlFxEUChElBVQwTvd6nlvjEyiYDxBoFKN6zOhH5lcnruUoShboK%2FrddJQcMrsM5dST0ao%2F2bzi4tCWVxMC1SVzGOfS5ZA01XV%2FWPBcXaGeEqJ2ZbM3ikkhCzfUVll5SgnRjCV094zsjFCHuBReHarluXIkcDKd4JLju12ke&X-Amz-Signature=cfb8edf6664dfbe6f2a5e47eb8e68b1ad86ba48106fda148661350997dd44328&X-Amz-SignedHeaders=host&x-id=GetObject)

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
