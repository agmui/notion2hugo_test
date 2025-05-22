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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQZMRTJ7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIBJI15sfXSbjDIUUS6GaCqhjDCJjiLl54ymvl0kaw5bbAiEA7SuNBZdDKKSWQ%2Ft3NZIsG%2F1zZA1acsgGxqBKD0nowjgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS1VtPNeJARaJJoXircA7dSaD%2B8blLjQ2E5Am1ppIkRwwpLYJk2u1OjRE4CX1AlH%2FJF38EGsjH9yAOvipouxsdu2xJQnqvsZnCj5PgwJAdtegEwNbJa1QyWOqoAEuGT2b8iaih5WgUW%2BAdaaPrkq0yLprSYyMw8fjI3Kibt%2FClLqsZR%2BjPAbU7vbQhPSssVuArrQr8xrSvq3Z77ATe9WgPavJ3uTJoCGZzhsIhud9Sf%2Bvfb9NW4O89f5swImOrPRkhGLwKFTJgyQek6a3TXjo5W8XrjJ%2BGcYZ3ossyKQmNso5%2BWGZYuuc7125TQnP7V7x0j%2BHj4gLLIY12QYlvLquQ1AXi1EiM0xLUCas%2BJC0S8qvBM7VLV6pAI9VbqyevBV4pj7oIAhPEH9JxosFdDoC0ewezxMWAFvaF%2FyUV0xI3lZyaaAT1kGVG5bLDYg4OJbxFvi%2BfiOIN8q9AC0UAUNTyApVI12RiHeJkQqSuU1Lr9AHP6trXWVr98I2CuKdt1S%2BD9qyult76g1iM0V%2FAIs%2FLCPa1OQSKXUNAWWRQEaoIVU5teFx9tbk7%2F%2FcvgA468%2Bg2lXekrImZn3GptiqR%2FmO6b5ueVWBSDPrB%2BshIfxKdMZBC1spbr%2FoNng4gN1Tqr4NS4HYRnzIazCg%2BdMIeUusEGOqUBiCLsorsdjQbDFKUc0IaQIvOqOVzrQiVd5dJi3fTJk%2FBzmENFUww7O8LzPkFmWeqagLlMJxaXEhopxbHIAQ3y0yK9%2FU7uewdqX2C1tesTscCSrFJktlYwpPDXU3zuxG7W55KGjjGJ%2BJfUew4dkDl5dserrD87C9m8SlY3ukKELg8xFugDugrPGA6a5%2FJNpGqgceX5IJ%2BTKdUzrlkj7ILlXvMiTuNK&X-Amz-Signature=23053199625929eee5ca785c254a7dab5b1ba67f48c2af0bc8c99eb93bf1ac69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJLJ7BXZ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBLKeFjBlxedLRAIrjM5hUrO3nAVBZkBgtQrD7Pdpi4aAiAuURSWMi0nVRjiseFHQ2vOoEU84MSHne7dI2IU7bByUCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlTREj%2BI9VAfBrXd7KtwDYFsKI%2F3PX9mFnfnQKp70cMkmV5fXcGZn0UQ8qVSaqc8FviRZsBy7hvkL0iabH6Xj79kARMoaxZTxyMH9%2FmRWfet6BgNH0eRQiFIyFvXYIYlO7EcfvLhzr%2Fs2VwmDFmqWHCKxlHHXLFaKFYfckxIYTgyVGAYWQEKAcigje52ZFSM095ydTa3%2Blr%2FBiOYzu3GKWlBenBrLOdAY9ZVuMy4stav5CPK7DDWZEhXFh5mnfWy9mPQJPx32MCgOt2FYikoNSW%2FBued4tLjO2aH3LLavW37RxtbT4go7kUVeixSltlxoDlC42q1jz34aHRMigC2wuyehGAHzDwXYxklJfrQMqFY7MXdNNGppC7zmySMBIbV0Vx8zNnZS5mhLySRb90IxQ841mcYohLPENfbc%2BtsEoYTM6kJjTzbWRBEJPPijuYasnrDWSZ%2BwuD4VII75AZGwhw6aN93VZ%2F9E3%2B%2B6trh7c2PI8SXRW8cjxiikQG5CVxGtbGbnif9W5YzPGQpz%2Fqew5XkTI%2FtalFWdgTJeKLLwJqptGPSaGfGPjqhBDOFzn5XmGwk5X4Qa9MIZR0DCITHbuWC1KJOFW2imQGFMSvCxI2qRXPabAsq%2FQQxNzO%2BL2DV2e9tmfeXUlc9aYXIwlZS6wQY6pgEMg2RsO2AnBNN4raqo3yPa5BbxRPxCX%2Fw99%2FWjWzQ9u3DP%2BJT84p7ep3%2BSm53rfUN2Cizsw4aF%2B0TsHAoVFJH3VVnOFsLRdDcPdIRVrKTG7qRP1DzKzD4v18Kqb5eG36fJKjqXhJHMldqx%2BlifnCQrj%2FK5Ead%2BbUGW77uwHUB0CyJNXgk7TZ3vwD64aG5hcrk4I1PXZJ9fSP1UfjLoMeEnpDrwH2NX&X-Amz-Signature=e1680d1a11da48801315ab712324045dd60f47365c177a7e76f3bcb657d5ba3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
