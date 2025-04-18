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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CR5REOI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQ4boXhXvewlFP%2FNnV0Eth2VdOk4PEtlF4GHo78dD6UAiALekdE6EazITPyKOHtEAjXHzz8mWR21GBSoxNsfwqKsyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMAwohi%2FpEWA%2FSBp0ZKtwDtEzpHJbcorEcd1qQvYK05TJefMh9fYgbOIL8mQLbzkq7LlDEToH%2BEpCH3IXrGYmjbg7R49Okfdu45YGxs08ITzqLGNK%2Bx7U%2B5oLd3DJywPhELtqBP0xugbNIDQnGf8KaYf5Z2Zu8d7ygzCa0e8JU4H2mNr%2BoQ9GBK6kOxeZBpAlYrCDJ5Fm%2FoLtE1uhhLq5tqKrzIZhUBIxD7AuAKWPIDwN2XPjJH7qEK%2Fu9gPZCA6sknNFCp%2FED15g1z%2FFXIvtnM5H1bIJ86cJ8wHCP1wE66pN1T0iSzItHtap2wutFPx6cAVJuHFK3XdlspU6qslo6AmQBzmemgJNTRapdqumP4c%2FzPufZmoBLR499Br1CNY5a1wbujieqiRNfZJdXd9ohad7vGl31aSlhQKXfvg0WXvEOJZVV5VgXjLSC6wzMmXt%2BN0ciWhLFg%2F6S%2B66TZiqt9U7X6I0Ny%2F%2FT6xFUGxzG5Ub3jelJPTgCa3heL%2BFV5p2BJ6N5uZGM3hNI0axkB%2FYfwnpNVYg5qq%2Bf5%2Fr48r3LgwETpnvNwvu5Ct5UD61NN9VMEyTsaHFoxZCkigibN0JtLgSTwKIyO25j1NfSGBU1o8OyhdGbfwKJeuMt8qaIxXSELCPUj1AsmMJ2%2BXcwz%2BSKwAY6pgEmDdqvSezOVXofRqRGx3wLtu9eKFV9QuIp1CcMv%2FBTmQNGGsrN6t3bc0N48lIr08LICyq7sjb4WR1l6D0dLk8H%2FS1x06Ud2nEdU%2Bp4dUJ8LEoWZWpxcdzhr%2BfuTD8DfeIrNde3tPhAy2yZZ2t5rlSU2s2tV7tSr8eV%2FxJMVOeVVZmfH%2Fn7QXg8cl4kGrThQedI2yHkGx5p%2FNM%2FeAqlkqmWz3YdWPcD&X-Amz-Signature=a24d4adff93840e75d84d2efc7ad3cc57e53076d5e2a4a73f66e37db572de7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWTRHOVK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElYHdFhYzO3zBhosS6iGqSt0h%2Bs%2FbvMppwVG0GNY7tkAiA%2BED%2F%2FTcUs8TJafEeaTAgPLGQsYfjYs2Vi6wp3MYH15Cr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM6Tis%2B1E5ppiYDoxUKtwDxuJkR5p%2BfsP9SC3%2BsFobKg5byKJiGoy2nFkxPNDkmuJWqcIrkn4eipktZENYhQVN31WuJw86bMWvE3LO840lg3%2FoyUzohzToPylv0PO7YvvQiPOvbP4KUkbUhxh%2Bn1qVDWri%2BG7kEI7M0DA4DQ1nm4m81rutD%2FIKaXxP3UHPzS2RdZ3D1B22M%2BbA7OCY0IonsVbSkmrIAJmrUIAf0ksn9UK3bq57wWZJVl9ZU7WjXZikJbEc1wa%2FpmlYRMuxZhz0IQxEBK5pj07JIecTUMD533sga4H0PhrU3olCfxzL41jX1c1hgRHt3aKzYXJnTH9msTyO6js2nqUMPQ8L2cedtKyzniLnHZp2aXHRQT0ggkZBld75mGraxwBfwVYuNqm3pkh0CBsZ5VRRILIHVQAko8vyQrfJpm5KQYt2cnycPQzxlB%2FTyIiXGtV4131i12XRMAb2C4lNzFKsDQ%2F%2FDQq0j2DCoocVCJO2XwcVO%2BE%2B2X3%2F5ZXYmH9gZzM%2B3vAcaPJX5ajemqCzAMU%2BFRn6muydy9sEpaFHllJH%2B98QFgEii9YCV%2FWgwA80zXY72AJ94tZDtOkRGmTdfvA2eMlxO7%2FoIoQLRd86Q%2FzHs%2FcyyS1LkY5KTRzV9Bh4rO4dXnYwy%2BSKwAY6pgHuEvB0ZBXC%2BTdhq%2FVOKq8PnMgmEsFJJlZBTOveaL%2Fz1S0mwKIMjC%2FStvN2PE%2Bhg%2F%2FJqAuVsTzwTcV5z%2F9jeEQ3o4CoId4jRZKKWHzi5WXrfy60l1PNJlC5v7zFsynknS%2B1czkbi%2FSa5h9qsFFJbci14%2Bec5MGkkc%2FblRBZTmwrkxBkCqLaYLStbT%2FcAMZPjltg17gt5C6FTeHOKw3WuuH60e7VAq36&X-Amz-Signature=5938832daa008f63c8968b3d8611dadc33f5629ab41b1dd6be5a0ac1bdc3870e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
