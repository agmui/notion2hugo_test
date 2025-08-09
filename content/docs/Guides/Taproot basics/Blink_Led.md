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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUZHJMW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2nXW5aCCi2q6NVZIFWiCcWxOQPcTy0YS3xfTqqlZSBAiBrtSxe5HbR2P3lJ4cGULoXriHB1gbTvu4Ip4MNB%2Fu1syqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy1qQ20atJ5jC3Q4QKtwDXiKDgicSldP2NUej7oBfnpDfKGgrE2u6v4BVwfQYZpZ8KlbLaw8oKrONfxY3AWf9sBkX7Pvcqb%2F9qiDii%2Fbuov4x2yqgLGRyaEw%2FFXTBgidkw3%2BcqoIDIpTLMXQdTlPi6JpXHi03QVudc3rNCTOASnEHLil2hKWtINCZmSeMSLm6SXHJmAuJYgMQjnP0pATUpnQ5z0fM3BZBFhBv%2BOsQ%2FSv%2FU6mHdI%2F%2BB%2FnBJRrjzifhEiUFbeWoXn86TivUBOvBGDjNotgmolQ20uo1WHuXUIx4ItYHQQyb0%2BdCV2%2Bn3nXrLOVHMCLEJrIadp85hWMWDyQGVqfSB%2FX9O18MFeNr9%2Bxy7caQOpp7eu%2FmOPCdl88vHUiML1AWYxHg46PZqNJ0qeb0UjNH3gWcBQbZ5%2FzayWJCDT0Ves5VzQUJaKEFpZJA1NUurKrbux38eRadZZvBRbolswwnSkm2i6egomRyN3x418K0xOAmLHPK5fPGR5gnNKAFr3p71f2svsrKR9kLJ1HdMzRHjGcbHV%2FhWw5CvtYqa0zSQ3YBnYEJfN%2FMM%2FZs4DJJ3Ry7W2fDCapFiRpaSg1TXUnH789qra7dGeANdugvupwm0g89RcS0fAlgG0AwnqZwE68R3MHLr6Uw9%2BLcxAY6pgFqfxI45a8rsVAV1WYiSzfAXQo6S%2BnUccbimL0E0JdXjXVJ6ZhB3fjG%2Bpuw%2FFV0HP7XxPpXr8jvD9Z9uu7yc%2Bs79XHglg8M4jrxE9A3OvnCc27ET%2B6S%2FFeldIGl6JAKuFseGcRvI7sjrJEV2%2FRLEpG3GZRDfz42yp2%2Fb4jvsOltttm8FLi00GQolOh8DINY6fIwVn3%2FStKATUewkbb3S7aWMYm0p2i2&X-Amz-Signature=3af63f6fc1e99b411285603d6cddeb57a0808967d7516054ddc9cc1bac440152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QOVRMP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0jK3rt8uGjR37jRT94YjlYv1%2FP%2FTa1ybMRbJoBk84dAiEAjgx31G5ujU9fYMgneBfFiMPhQMiWTPo7DUZSOREDpY0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXbmlBHt5%2BvTEOiGyrcA8iXdQ6KSfh%2ByOX80ejg7T1%2BSGA3n4hGoPNltcOypRgWtNfczgGGF8sLzOwq22o9ZqMQof3FQgePdy0YJdtmai4IPwhZEtZEO7fC7dlOdoia6EP2tado%2BM8hqtLHJhEL9E0HFao6Z8om0uQ0a3SQB%2BcON9nsJLEeeBj2C2%2B7P0eOt%2BIAbJxNUVVy2CHhThjjcZCT%2FIoMCaO9kbCkKKD9%2BbU8cOhMmCiwo1nkcvDmEsyaYRNUaHKR5bs1ZSQqF1cdT7tnUKN%2B0eIzyKWTWVGDcf%2Br9b1QnOSlhnPoZYQDvjdKqBWol5xOjtaVb8v9%2BR4g6x23vslmBdya8Yyn252Aj4OG3mp0OQw2aOMPUWarTUAJFulS1Z%2FtHh%2FFGftJqdEa%2Bkxy%2BT7RMUqzLLOeCFSOXTGBvrXz46d2RSygxiuqADj3iARG4p7%2FYNAYLHehxfC%2FLcLT%2BYM9AAvoTZCIb8tIEWxKhfQLYZYkMI0q3DJICgkeaOjcVyLL3PRjvypk1H1NDqM4PoqtOcRivP2h0NfoMnz3dJBlilzsKYhKxa7GyiAIk2H1aG7An2Uu3rkBNNXo94z8VMAvPsWhL9fUNMAUUwBzizD9zObwIgNy154uEaYC%2FGHwqzitFIdoZFKMMJjn3MQGOqUBZ%2F9tMNzZf4xaN2XYeUmo7%2FHtUJboqPVkR0hy97t%2FoULPEm%2For%2FodItTJLtAgFQa9%2B4mv3aUzVDrOJ4SkgXdQTLNBo25KLwsQBOFM8OngGw2XMEAJdkLfZUUNAWngkC6YpwtqnpcSdp%2FoIDBINvhosnkUsq4VW%2FpgOOAsyXz6KD9NrmmeVOntB1CxvnIJIWKJx%2FH1YEwm4Bu0G4DqVImXLDy0Yd3B&X-Amz-Signature=0d3942955ead76a67e7f7d8fea3e426cc168cd125d54a1d00a152bfec763d76a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
