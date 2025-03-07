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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4QKTEV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC8T3sTCIuqEFi8QN4NcoevkOlWYtG%2BUBrRjvKRtdTqQQIgTCl5qPTgL9f%2BmwGplyJnuIzHOOmhRzX9ZkFJnzf1%2FVMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCe8bb7eu4MGTTLHXyrcAw2hkTj91HxLNVvrHw941ObA6eztjMRRdpkvfmy4%2FfjuyFO2XstxaMuV5Man%2Bm9LGp6SJcb2L9HNa5kINAJ8VmMZp5QZRevmqeuy9vxuUXhBA60upElGr5kdX3H%2F4rK7DSOhz1iQcrIcw%2BhFkYh1b%2B%2FFUF%2FKWwSMvjXcIkCpJRifLUIM9%2FQY6x1xMtSgVeqZvQhOVxfy4KhMK1FimhvXrZ8fspHYGaRayoxLDIJflqULk0qhiFS4clwvdndli7qwWdroXMez%2BkPYyRvf7rZQIGujVPCFYCqdlamXh%2FQ2YCNs3FLzRtKvXJ7%2FCMPwsI6sJy9cTPpFyLduaiDfMmCL2XffJXqbJOdVqKWbFklT5iS8gapAKFvTr3Oi70apWlm5%2FC9reTKYHIqvFGf1%2F%2FTgBDg4VPUDLzaDhDJm%2BpA%2Fb9u6qJCf%2Bps4a3MqSEzc%2BXgGxXLdf1CDfBBHiOKZBe0kc%2BIhPGkV8g8gEb%2BgHNnrbCEN6cgdaLhZWAqC4D9xM5rmnZqc4G%2BycdFJh9Zz4334dTjhgeiHmXiA5rA%2F7zV06SLUUXv8O%2F4XFRdsQ1cewRUqmmwll3%2FUjxYasH7RQyPXisNMCCPtpU5SY75PSt28OT6zr1hlcsA7yUSEjanbMLHgrL4GOqUBwsSrodk6Pqpv7u1s0Lxsn4RGVu74Ev7dDWScja1lLKUBgkqk%2BMZ6PGz3u42NB%2Bfx77ukvAaJAnV6gQfQ0d3QutHPvjbt%2BqSV8gNR1IuWqTDBINeXxFhnx4EVrOZsP1qrGZvO7nBS8%2FNIwLmQUdVleEYN0dWfoHvb2mZ6%2BwVjK5UkP1UESDbNHR%2Fa51V3KzgZ862OSKFRXZNJEgCK1H1qJJ96J9rv&X-Amz-Signature=4bef0dc08c3634a961bf82a4bbae1d62e43831de695df23c87af9e6fd6623e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSGJVWI%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCb4pCRVaWMN4WJjKQdrPHBJF5p6mgphLTfUczx5yQvUAIgZg66CImkUXBJ0caGYgYeU3ERebtki1kVRdwHoMe4XQIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPEsQP%2BaRKc1Jk8GxircAx2PjRtH1KXPwMSjdTWd%2BeDQYijNYVSEhG2OwdlOaAdnMsS9EpMQMfSpgxj9kawGIKuQX5bnCj20bTm38%2FTS8e4y5A2rnh%2FuBtXFsLUCre65BdfbEGgS8GJH4h7qFKjPmX9o5W4TdOGr7iLCm1ewNC2wlPHzRYpbyBkGW9%2Bg3BHnsy7yD984zxA%2FoRhn7Fa%2BRZicXG1MKymQ6G53sCZYs%2BAGxX5gr8NQpyD5v145jpiMPWIFXFwtqV%2Fra33hweRBCTOK9q9d3wLl6IvfZmRYQT4tPo9O3FiiJz1ppr0sastFsRLzapmmNS%2F5LDPECR5IVuD39Pr3Hqt4noe8L6pKXibTTUJyyX5M9piqj3N8Gd1E9ojcWBZwfZa8Xl8JCjBZbqLN6K65qH0twXBl1IKqkaqW0LCiRCMAMJXH0Of0IP94XOjMoxNPhONU8DS3vsC3jGslry9Vak1YuaVroxVX%2BhJvQijdqx37%2Bu36WV5q%2FRtjtvtWbtFFdt7wyTIfJsr86NAf2VnAFlAGIuSqVdW6GWqkllG1hLcAf1mNWJ0rMaLD2wgzTmDxKd1ZnFemOZf7knSejZ%2BFqtoxz0ud41W6CB%2BqaVBPBBNcBP%2FSbmxHGyU8NJj85RxLky8%2F4SY8MNjfrL4GOqUBVPKNDUdqzS%2Bh3KFS6eIhXD7FNfG0T2UaXzEZEW%2FoP%2BShIu7iXQn5teamVWzzSMvXXMfHl7IxiSAjqV41o6YKDjSzTSCCkR%2FR2IghpUTtsJijpNB90WvZ8o%2FUxDtl6%2BYJB8gnA25uSq6LGHSsQenpCcv27X2RDnHCaxZRUslPEKFU8Igz2w%2FwZYips1PbCTGP3BXRTVmfGl5IMFuvMOeNJ3bdvXI%2F&X-Amz-Signature=fede4a75014438f2ffb938ca6975614b25fe353722a3760311bf89a014ca644a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
