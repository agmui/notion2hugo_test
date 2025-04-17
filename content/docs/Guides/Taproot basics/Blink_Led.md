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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KCR74ZK%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOZHz7eGF%2FeZOznkRB4FOv2mY4E7%2FWrfGgA%2BcVhGf7OAiBDwdnB7UaToFPqDkoKW5tUB9l2GRn47H8NdIUA5X2TByr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMn0XmrmEwbEMKs1W9KtwDS4ntm4M%2FA6cnCnbMWqlEivx4PYETd10idjPylcB%2BWwAehJzHiiC%2BMYg0vOt1xLo6BSR0Fjcgna9kqbLSwpFr5%2BjxkYOUmuBGDI%2BQ9ee1vqih680yarFXn%2BT0%2FJuAgCErcH9qcntyxQXicdAFyEMElJSGo6vtZ23XtAtKMSwaFxTtvjg9Nug9KB%2FmNjb2GuVcPLxx7v%2FFzDydnDPAO9UHeAyeBjzWThsN8el1rFsF1QP4Y0VKiqU2yhz7k8FNIgJlXWO4bXCc5oVmmf2AjNkC79qaCzxu8ynnD48n8yzRt5gBT%2B38E%2B0l8pD8PCh7pq415VHUVexj3osyQuUGjycvYnacMiJxa3Brzwvgo3WAoBrRIzQJj4%2BZblk%2BhnXpBlwbg%2F02%2B%2BMadQLyjByetmdkk8Cc9%2F7Wheui%2BDgIpUtDEOxl1S1Kw54Doi%2BDALSS6biAgWemlXgcxQgjpSYam%2BnB0L3CMf4Hr3u8G4SFDfny4zD6tUHu6jciMzRAb5sYCaKXtRv9s69u%2F84rOuCwElHClT5kppL2nL1gko5OVqdKKi9F7EXRcZMRPi91K3F7srblm6uz7KX6Por4xeKwPN%2B0e%2B90C7HZlrUEPxyAF7PAeKdcpPv87%2FnJdm%2FWLkswl5KBwAY6pgF2Kd0Qv71HlcUnChq7XTRA%2BlUxWVZ6fe33Q%2FKBU1yad9lBJoIGFMq%2BSGwVCEIY9RasnEfTFnhCCSG7TZAF2Ri5j92WRWGhlLfn6E8o%2B6HKwgg7Ui0Dw3H37aUEqOVu1%2ForCVbn83xTFJmCfmHV5iReo32oKAz1wa0QyNMdfZioXfiBlbVBgU%2B7QiFvSnhZuewlypLIJrRtDNlOBm2o4b9EAT1yr5nG&X-Amz-Signature=24cee73d5e45e9bebbb4dfa92ffb7225196d4f0c9eb514bd66f2bff65bb26517&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKNK6ZQI%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET32%2BlJt7ae7zIXvr%2F2DrJMvEA8RCkVrEpGS9DZ24HXAiEApT55mlHe2M4tb8Iujj5%2B%2F42LF71qYzNUsf41KOdSD0sq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEf6x38kW%2BfzPsxm0SrcA%2F3%2BmpTfqbiC1mm28MKgxdYtsrIjMJXVm2N%2BvVXjW5aeT9tywUtqmJtvy87c2PugnDbWyc6eeKgotzgKygA4YbguVBfVPir%2FyvuP4u3m2xvesrj3iT6l%2BJrJ6LaTGDjnCVrT2nc1V203Hymp8ubyu2OQJyJedB2MIj28ncjZiFkAbT6gAjhImmftS%2FcxQ3B8ei3kN19PElysmfaO6%2FA4wbEchs5q4dtvT3BzZvE5F0Rhs3GE2D86CmwFmhLsgAS6tCnHP9zQsK8PsqMgcJOUtVaGcKT5nJTvHPIGk9OYOpvGTGEfhi3LO17vAx5c8bRdLQRUXvZ11ioPlK%2BwE8%2FfBnFaW20%2FMy90fTlpkL6Lq2cAHCWCk2Sj3m%2F7MM84HQXQm3zQt6RYlBdNBmhMb34OG92%2BVYKkTo0aN5JduXuiIC9h0N4kR7wLhp4jBW4UgC3p%2BnW5xSZrlt%2FZZdrP0g01NvE%2Bih7vYGdXPmz1jksEAeQXLb4a9HmR2EL99IXqV8eZANszTxoT1vb6AvP%2BZcRZOV7CYJIhvutKjs0Pu0fC4sa9%2FS4QQs86ACQ9qNvBjnXM1OHDqzxOhUQtZToCGTDBR31TlPS7Z9An7cj2AVws8anL0JjrBa1%2BvLfffaMIMK6TgcAGOqUBH9mQ57VHFi10Q5aIg%2BHOjPxThFRZOLzifRSUpm%2ByoJR6HcvVwSWQpSQ1FUyWMlbaFhS4JkRE9yMll8kANnm4Z141FVwT9swc6KCR%2BGVEZzY4wAVO3K%2B%2BhKja%2FYtfPQ6npUwYVrK%2BMGJHuJSwWzLFNg7Dtx%2B8tl8O7QxmrlxG2jo3CLkX26asrqBLyXwRIZDumTmSoUpa%2BlhNZQteisILrFnzqB7G&X-Amz-Signature=bca68ebdff3e04d494b1309d63047cb25dd10652c46be25ee2cf1dddc164bcac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
