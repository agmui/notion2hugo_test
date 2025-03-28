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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5MMZGXA%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyJ8GI3GMnKAIMK7uCPR4SYX984wn8EXqgYgptlpph6QIgNzt4euY7%2FHaFGCFjRtK9BK8J%2B9ETLX51VDXRnRCWezoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNnex4vGHTt%2FdQNjGyrcA8xMyPpUfTyjf4feqsfD1i3rpbPVz1cKb%2FmHCv9VNe671xEQhk0T6dctTwFJMMFy2esWjGPIjUJE6gypju82B0zRmhDnrv70q83j6ccIMnOnN6ut%2FJsQd0R97V0MPcCPkfk%2BnlfMWH7P4hjSPjl6I1rYD4%2FmqKDXTavvWwz%2FrGsX2%2Fv0pxuiVIydwcr7UDn2TgQQwwWB0doI2SsS1Wlq5BhHyxOoRuX2zta02YnyIr5bfESa2yyaDC5hPidBzA6yf%2FfeoiEdMaqtYvVQ0QwgpifsQvLFhrqthILDKxX3AZpWwHd2b6TuHo40roBRLjcFYfntSFPs4GBRVb8YAT46jT9pdmX2WJzwJShd4j5Ikq%2Bryv2a1zQjVTE9x46guZ8O%2BkrfKuPB8cKgP8SUiPOM2e5h156D83HCOGhiCucw3qCzTd4NMoT%2B9b%2FbMCnkWpQAbvYl73sqn4qxaLaLspnKUfuC2gStV0RntmyCleRz82cx6l3WUrusIc3vyHX%2FWpEpdDRr%2BXdAaRB3pOytg51wcnyNt8bWtX9DYwix%2BHpxx%2BBoUKM3NHdFKl46YgmVdxdJc07ej2jS32f9YYAORWwNMPbsusXnGELXeS8hiw3bYfgw%2FxyHEwrLJ62NVHxlMP6%2Fmb8GOqUByZKO1dSGT1QOqZPYeOiwPTUpumb18BlsgiCRbbAsDWm86yDLTlCNzXG6%2Fw6UAZ%2F0H%2FXbfp17YuSlHW0E3o3imQjnm2fmKLa3VTyhI8noWhBYPXxr3LaP1L8YWGAu0SVkvEj2P8CGst%2FnDojcRvBDl09%2BumfTT4vgeJVumd3JBhme7HIAT%2Fn%2BEEqU41ZZzBkRzGVT%2B5iA2vOE2Xh4zun%2BWrmN%2BUec&X-Amz-Signature=c2ee3aa2782dfaac5c789e9ae1ac780c6462ed27fa4c47465493037c7c7445a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3MVVIYE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvVAMWt1CTj1CjFGNJFXVkPMy9Cj2I1cnCBSdSJQD7YAiB3q%2FZaer3KA%2F%2FFv%2Fu0eSQdq9eEc6S0Ebn0%2BG8tV2XTFSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMp3uuTr9hbPQC8QcgKtwDprl4Cny%2BdPYDvvwvwOPCGw3p%2FDnoRZyQbs%2FCzvR1%2FcwChFQx8YUXmuIJM%2BKPJtQO3plrbjSedfAFIHi3Oxsu4WD3ju3OAby7BFULrNpklRZprenFHDsSJIeSSJHKl17RXAComkAaYpV33hDgIQVeGPsPKEyByIonjT17ds99Z%2B%2FvalbFWLWxk2ebPF7dzH3OPUEotLGgJg%2Bk9JkUOWHh09UPZTlYFokropCpw3CmLsUYFiSAToIIq4AWep8XGtFMLsEfxh4iff7RFkdss5UjcYfaZDRGk9pHz6G5%2FAsM7nQC1ejyYyejJnZ%2F2pZxsxtMXl%2FZCaxf7euDf0NQmLNHvzrhrBJT9Gq3kHzYTNCxFS2mbnDZQ8rFyMZtYStSmfZZRvZYRN81GI7fdgTIA%2FI0pCSjYLYV%2BtR2TQztxP%2BnGBVg5Gx4%2BW1K0AjCog3OATe%2Bgk%2B7qoBAysRg0EoabtvopyYBOkWxiizymotyoqHN2%2Bb0tMwp94Lb0mz1jxQD5MuXA8ULF4V%2BWeCW2O%2BKe0GYw41BpG8%2Bqq2%2BPNBG5YCHMGS9hlU507MkZX8YNB14UDs2tg7LY5Vqvy7AXDSztvk2PNmRjseWtjGdyAmp7ozG5%2Fhgf1atJSBhQofGE0owzb%2BZvwY6pgFLlGte%2BXRfO9iZMNq3UsaprdghOGhbGmUjU%2BTlw9m%2BwRtDhDsEurjpiY7mB8C495Z6DZNAAFXeeJAxEB7l7XmUIBfFXMQLbRxfCDXA0lYqIgemb0FJKV%2FbHBXf0P4w9fDxkmFaTMAsH3lauzLS6oFmiiPWBizoWPzXGwxmWhjaS5fqxEssstK%2FOjMc3vu%2B8CGvoZxUM7uCpQIltFGgWbYaQGCSnwFw&X-Amz-Signature=fd55c437b3d5ea0737526b61624f12d7fb1d51bfd877b80d91c14e4c1ae87cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
