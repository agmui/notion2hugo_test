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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADGCA6P%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCTzL0wEHCcY3JZyHHTUqP768u0LVgmn6w%2BZO9COH2WpgIgPqkPmFJBp3Jkgz06XNDaeO9nqv%2FXE8IkXie2kokd%2BK0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJEVlPkjzBM%2B7drkLSrcA5f3Kv26w6Ln%2FxRFRMKjQchupZTFUSACbHvBHv2G6YVexbRc82MMejC9kJM3LPoZjOHKjXZBT07dxl4FWG4RV0Qg8u5Beq2glmziz8xXC1B0zXYYfWcmS1aW3gDhGWFNoslBAEEuvmyoqaQlBgOj%2FQ6XGc%2BH9c1WGJD9FSDDoN9HQkmHuacD%2BVYSRvB1bOa3ROndcSVq5NtVMWTrjIIbTVTLE6eFYyTMmE%2FLc64ukahJoVCSaP%2FRCDQU%2BSrXH43yvFKeNRCgwri1p30VgXSIFcTKOE1gl0QFQzGy2yE4wPfN4D2of1%2F%2FdUsdMSn1wbZghLTqWzfGwtnipHub8rpBoFARp17ZzMoimvMzMBNzDqw%2BiIw6hMwz3tE2Ko%2FwlY0RCB3P8FXBrYfoUPwWfdck9w9Mh76z7H%2BenUbwrWI52ITRsYL2yzckYNqOpVgt%2BuJmf7jxiHzp7Yf2YDAaAWAu55PDk5I4qSAuXz93o0uS4IMr9IyWsP1bUczaklAmlVPKeZtUoiZBUCi63zPT1aCdxuxIoxPiXWRCnd%2Fk6L%2BKc%2B%2BSgndJ6k4b9rIvV%2BMzRHXlMKqI46A77p%2FFElHAksrJe6hsPY845NkCNDDfZ3rbkZB4r234sI7Z%2Fa%2BUaaTPMOnQ28MGOqUBuQLwLuvL%2B2RCbvfX1adzMq9pWGy6DaPkYYCIHSkfc94qA05vmtfVLzSlpEDJAjIXqP2wIksGL8HF4jjHb1z%2BnNXubW6xVBYu8oJpNYW%2FMQpRMLz2bNZSEvCf0DmLouTl%2FfA19g21FaE%2BPfJevjz93gjH04LEJNXc4sV2y21HoSpx5eijguEjfaVcLGNsHiFX0XHbu8bgb8rMsxARhOsAAQOKgNoj&X-Amz-Signature=906918f55a96c3e7d237b4d69c80c75ea84b858d677ead4aecf641611ab90203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFTFNBYN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDfTWMyVrMZPOe%2BhDOcHilwCcfRvGds5hIWy6TfUvenNgIhANKpWMJ0%2B4c%2BHzAxMzePQ%2B5Rqd3GkFsMnL5ptUnr2oP4Kv8DCFEQABoMNjM3NDIzMTgzODA1Igz2Z5J83wDIRnrhr%2Fgq3APecFkOgkvvUMLib7lz1qqmUIV5%2BXvoXBwH8PWw5NjmTs%2BD0cddr71FllhHCLNlq6TQIWY7GJ7GTB0eweGsJq7irmFeBDxKuaDj7LZrP6KXAll1fjyRvSxeCL%2Bc7Fo9zCvNoGZdc7bbNfwejxf2H7jcQeS6qmsnyyVExKrYXGZfkmIoe7gbZaPGK%2BREjgaWDe3bpuRdxkTvXOyPFN9DoLYvug6Fdrzk26fxk%2FTdoXxvvjGO1lpFdbj1tpRau%2FWA7qKfSTOwwojQGRgTLmNJnShDwfASF0Ccduz5KLaqsl%2FHUvZUrGzZamA372nryeQC8VyagkI67uou5QJWR3vBM9WSA%2Fc%2FirnBU%2FeqjYkMrHey6O3fiOH0kqRte6HMa2z6T8Nxf16Jm0NovzXWABbAmweKMfhUxGERP%2FgovcRB1bMbnrEyzgNaYHIOlp80NtpKJYPVPqFm0vFR4oxIcV%2BnmiQmle6sxdfzTHr0pbUleqlfUKurUjoREyjXeTyRgKl0uPFHWbzqViU5vkzADMfHxZ74Y8lBMpwkdc%2FbbFI%2B7OzqB7DVAQehLy8oCgTpk9roUPVzWcaooA8wmGazpUol1A17O0EnzQwy5KXGOaRHmA9eENlr0FQhODQpjjGMajDJ0NvDBjqkATA%2Bp9A%2FHDfe3EEO5X1Q%2BRc0xz5kjFooOPPGzcm6PSa2O%2BBmJvKk%2BGCOLAKWcnCQUsuqyaAwQ8UoPrNrUeEwcqpNzlU75u20e6aqnf6oXRMe799v%2B8FoGvAbOVNC1riwX8P2vUL8vnFe%2FYf%2BRsgY4HeP1YOo8t9op17DLHdUtWj1%2Bwf%2FhFqK9qdTW%2B4vf42l5F0MmQYhqglJcwhDd%2BByzxvmfiyr&X-Amz-Signature=a4fbcc24225f7e9e2fd5d77b14b542a405e3813fe13835101a94fca809d73de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
