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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2B3VEDR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICS7deKBa9Vlt19ABhjFuMSxcj1AyrxjEuiMZtZT66ikAiEAuWi9kFnmXan20s%2B%2FV1JXG%2Fp6lKtMZtCCk6JpNEDeUBAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMJiL5IIssGEQeYiiCrcA4GI2xYs4V9Sh6QXwtOjMUzFM%2FvR2DoGIwY1UkcUq50QkgEYAvZ17IHYw2D7fAiWzDViIklgEx2Yk7eW571DSMRw6InQhnnYWa%2B1e7SAQMBu2Ui65TyPf2QfhSff5MFN8qpDD5RAnpZtlzIMlgSyYl24jrBPUQqyLXSbEUtKejqcdZ1rsZhiBrgwzhsg9oxGJ7A8MQzLpVo5UXkELQa72YeRXoy2Wvon7n7kOSK52wfmnQPFP4iaLj8V80C2VyCnDsWihlrVZrh%2Fa44iN74ZnUz8WP9toe0k5V6PmECOr%2FCNO8%2B75QPKC0uV6EIYHsKU%2BxRhYe1S6tvmdPLaEH9CAlh3f0OSCktZQxtFKJgsT8SzAlG9vUQtfk4lah0Vno0A%2Fk7WnccxELIrQC7uYSK3QgL7LDPhtnVWPneVEuVvziUNiKb2oUZimANxWRLlgpm6jZex7HQNI2qqPEAH77X0W7ZeXORd6MtJxQH%2Fq04Zx7CRjCGlQqY5g2fpxuWrwRLFs0Ksi8y6IR8ZcYLT7QoGB2l73JgA%2BZaMYeYOHf6rmpGNTCm1gnjQrcAcEDB9nWTWlrYqeCvns69uFL%2F2%2BslkTwEgsGLzzn46sCmrtGGMxhKVXkwHVbMYv8ZQNp1yMKDG8cQGOqUBkOmg%2FK0Y8fidlg%2FeYtUn1cpkH0p4dpQ0dieZh2QkbxkwnWPB8hHmO%2FyW%2FwExIW%2FYuAITqaHAy0K0sFpTm3sFRlVJAK%2BD6dIAd36x4wFpyjVTlMoZaXM%2FKLn8%2FySkI9GB63EaXxuVvxgSUW%2BK0Z8DB6Z4ixmNtQLpAbuteD%2FFlLlCccrmsJXd%2FLixs6VHa%2BTynpZ0a5QqwCby417dOBJZm390J6Fl&X-Amz-Signature=a47ad77a2a30f23448d3c245cde16bfec9f49e87b4c39bc38b7ed6f689a451c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XVFA4D%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0GIzuuKvRy0TIX%2FRLHs%2FbgcZNsCLeqksGEtL3CPPSVgIhAOKuZWVrEygoqEcZQZf%2FY5j8gs77U%2BvNh5pIULNAKc3xKv8DCCsQABoMNjM3NDIzMTgzODA1Igy6D4bAh93fVDOAUzYq3APO1rR6GLTXa%2BEDrNrPMvID6lHXqgor4n3z7QjHLnbXzZ%2FsDeKwGmHE%2BSCYQAth%2B9ICP4RzQSMrOBOHnANmH%2FgLvBIVnPGqf6YFcMlTSt9JoyC%2Fpm%2FuQtc99lW7NpW%2FV2x9o4jsFgK9OoAj9xz8GM9Dwc4E9600sEtfF7HOcNIY%2FwGnRg8Ug5YsWsdjqWG7Mp3nau2g%2FmQMvuSGTyJwt7mqY57%2FEm2UyXYQOsXqtSUeKX6PzwZ7lskcmmYNp2tL1IZcTwiY2OfZq2mcopXPmGKxq8XtmrDqphoJnVkDVizHwPegDNFVZ0EWgpodwsG6XY9s0%2FsVY4OpSNLGBpsV12jJ24EjLX4kHxpxwphlb%2B2S6Upi9lMLVKtXmU7wEVJmqh9u9%2B%2BAxgNOGwlbTguGTGO6g9ZDVcSkF7O2bbJ2KKwOWJxZeKWO8v%2FfhunKzmfUwKQ3H2KQesMeCbpPRhupkFUNXLyHcs26%2FDHNd2hQBhTUMh7ymNAikAXPvJczzFGJpggBTcKHmjY3XSz38gYawvmmGE2GOxbMJGad7P6gcyXmZxnn%2BXAnpsHjhFBvFg1wFuT4%2FCbNqii7OYO7uhlp2vPQ5OgVqeaUwps6t8tJU6MiNS05JTuEIgZA1uV0VzDlxvHEBjqkAfI0VevCFEUT0ml9gnT%2Ft7qcs%2F%2BwYI57HkkJPE7CisV54BnNUB9wUmqkWVo35vzGPNT2Asz3r5o1GpCjvJfS0ENIEpKRq9lmZkBKXnYUwn0orbIEHGaDxx9QrcPtRxodaYTi%2BZmbR%2BYOJOwCBMLZlaTsFxkwKVHeWL7j3Y3W3Y08mZ%2Fba9GUl1wCW6zFnP1%2BFcNw%2B1nv20pgk0JcGnvy1vnr%2B88L&X-Amz-Signature=a98e7436cd3d450df1533d6ad00ac083ebe70364d9855fbbdef84a01289fe725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
