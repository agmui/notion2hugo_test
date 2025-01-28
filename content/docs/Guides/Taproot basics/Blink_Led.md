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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLDMLYZU%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIH9i8jzMyQbylUBKHJbOpPa53BFhR98mIR1M0hM8MIcqAiBS6LpMxCWRlRoc%2FDutKRr90AMtMciddKvHgmhx0hYvqyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMoD0s3TuhEk4AyjK5KtwDwTp7LwYTJNfRJv%2Bzs6VUut%2BfNmGBUptcDWtGoVOx6AbX8KpUMG9TNQa5V5O8BvIpykl47EJt0bbc3T2BnA6TVX%2BKO94iMIVeSDOjMOPJ3HfvWwR8INl6chN7daZbpljQ7jX9JvGujDkC39LV%2BQ3iNH0pbELO%2F4%2FP6F0oK%2FD9dj%2FMudN4MsFnIScJn0xwndws6xwOfZLRKbEJol852mpf9HUwKuFEWQ72GHxgtNP7irVIAcDZXplBX7jHIa5lqr8NSLdPG86UnvcONdrgck2pWUZPCKa9096bbJRfAfLstCvVAau2jkKk2R1UbwyaQ4EVIPHMqK5hS6WYGUUmF1mbJKBKaMZSCE8UeiERqPXVWfOmNje7kfyrXCT1qfwznrMW0iwnH1XKWnuX1AFZPphMMlpqKSIf%2BOkgeFtwY0kLqVlNwPgvPdPJIUN9l8Q8Wi7%2B6puUkM5xnWMfy3WmgqWOfvjlRqvbiTFxVIRkeZax9HGrm4h895XNc2Y1ll4zNqLOoLoZ6GSJClND0r%2B5CH4g%2FnPa%2FGvwNwgkFnk5ALJtgzly%2FafO3H7z%2Bh565E%2FEdtg7t%2B9ePlVnQ3Ij7nb1ovgLwUIDGFdOvXWzXuPsTYyZf6nmooddBNBWY%2FMVAQQw1LHlvAY6pgGHSQ86gcxv%2BQfGEsKmQ8hE29IvcKGvtqG9KxdNstzrS4Hv67%2B2DfxhhwgIw%2BWyMK%2BvIxoJhigLXcn1ycBhveZSFV837KAVrhZfBHQRfQ4PSLhMkW2Dzqh%2Bs2Qwz%2FL9og8nwv0QQoMiNASu6ktXCpbbZdYRa0vMe%2BIqGnGr%2FsMuSpvY%2FtgBNZN0fBbkRKMXUP%2F5Zqfkeq%2F73Io0ZXwdG6bAmaY2toYS&X-Amz-Signature=beed4502ef0ec188350aa1a4416e36a2e8486d3aef3927484e269a323da2dcbf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542HV36A%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFMtuDkvyh07zO1MNGUdKLxFStdWER%2FbLpWsLkHoO%2B05AiEA59Y7zIphPts%2BSCNCaGgnsUZpKTKUHt3VJWWrxY1TuIQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOQXmsgGJWLWsbpsyrcA4FkQIROWyNbMorONkSjxJmqZ4PVFqo6%2Fmc7e3kbGRXvFxAgkJ0%2BINE9hs%2BsSWxnK5n46SH6jTvGEDfpmYrERPDwBBsLWJEHn70Jb4VOyMHEgz3GeBsgrxwZc721XY%2Bd4rsQMGsYdE%2FttK9hlWUbVJhkYooiMUQ0HFLUm8ZIIXmIQpMzjVRzoW0hU2T3h9kisY%2FQDH4lGQyydY3sa2wBYvEtGQGg9XSVYR7d%2BE4kBg1BRF4dII5JWyZmMknsnQaCKYf0l6Jyo8Wj%2BvxG4sFkfmKPKlJF1sfoUwKCbyBiiUP4Dso4ZaLRKymgKZx4cBhgQJvMskW0xch8FdD7zD%2FGhrL180v2eXWg9kUpgACjbiT4K%2BgeBqBuNKjOcukbITBGAVws9lWM0j8ifJ8tf0Ry6%2Bxmq71cIeEcc6sTV4gTWRgqj2eyEuP6lvAvpSXbifXaFX1yIEqBMkdH3RDh2i0jNunhnBgUkVT%2Bgu07HIYzg9yE33wLwV9zXGoFMPZFV8Op8vSWwaD7YYMNihlbKS1ZJ90V0JDLIby0TtYVPr8kSD5AqzjcvPkCa4yYZnRZeLiRJF%2BxQP2QXfgOePqGk%2BnfjOALK1xQVjvCmH%2BndJxVRfkjkVGQ1Cu5LaDQFm4qMKmz5bwGOqUBlVMtPBiL1jZ%2FtHC5CI9y5fX9PvgON8nLK9w27sOB8%2FPTcty%2Fk7V4WmaFG5isdVxxArqnf3XlU%2Bfk%2F%2Fq5H3QCfIVOKDCUuSrFhgHcjb5ypNgD2o0fSS97%2FCZfHfSvSUeMFubEtP%2F%2Be%2BpsWlrC5Fn%2B7pw67oafVu6C4EY94e5UExHUswpih9WJdOkJDueHW%2BMV1InbEpCabCJgx%2BDI%2F2UngsHxVB7G&X-Amz-Signature=914575be95da7153bcaa5b1472ad73780733aebb339ba4c0bae2ac242154bc0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
