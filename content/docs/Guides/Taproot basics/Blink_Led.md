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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCW4KUP3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCID0J9YtNZsidmz7Wn8fzYEHs70cP5Hb2RDss%2FizuNb4fAiAc2Qa5iuP31Bl2rjnyv5smbV%2BVH4xHFr6Iw5221d7ooSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM15o1RCsZnz%2FpjMr9KtwDTw9wvni%2BLGA5lGv0Md8fWNPU1ysxv2f7arOgusDdHGEqqZNZwX4sZwfSMh%2BSIj%2BhvfBa%2FKJ0bpUQ32r7SvxBihjDUO0cOWksjktXbEJdofWlf92D24Tu5f%2FQrwmcPvxTQAetjjXjj0JyoYIhVuwPamdnBoh3NOzWHysJC6AGkHDCzdX9Wf1wfJMALKrrsD1kNZo7ye0hVSbfH%2FBh491PvWMXb1YIqssMQdV0NcNR%2Fk5gBmf1psmOBMYBplDt4YWvTttsuQfUcI7aqa%2BIAkH7t9qyvghDyOt78UEyTjAskftCTTEopCrLwJPShxidY4fC6hbwyK3dJcNybLxdcbWiWIKLhWMb2FToIZR0utqU4Tsrb%2FC%2Bym8ouBuST4d1i9D%2F7ePxT34QzllfCrj3neTA33N20r2gfKbcK7Gt5PGaGT3XU%2BY2fMjmtbrhp5RMh%2F8mVFAor11n9nxwJ3FfXAajIrKRy%2FCkJ%2Fumbcz8dGSueRvrZ8ZG1r9P2ei3sLseQxzwITWakNiJryPOkrownz6SVeI5dmsPj8EkkJVXWWmTq9StBOVVCkUreA%2FvX%2FPfxieHCDK1fvswEZvxFn%2BCwQzwCh4%2F77APf8q8KTgtCqEBHNy3CxTkYwzmw7TEN88wsoCBwgY6pgHhWA94p1nWEDHJ%2BTtjLMaNioYF91%2Bcor83NdLWogPXFG23jA91NDXLRB44%2B4ly0M9nWH2z8R0tg%2FaybTHK8FNmiwP7jRVWGgDVtTZskedj7z9j88tinAktDkuav5rBLqPSowkDPUZb1OE635F5P49IV9zGq%2FNt2omH8HDrZpd7yAfYWQAGxJBpGa1UKqKb69J7hCDGvMwRBJV%2FphsH2kdLx5zQfA1t&X-Amz-Signature=8d62e41385c5aeba8e3b9ddaf478a54108df6ad7276be671a9cf37836228cd8e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667S2JXT4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDXvLFD2k%2B%2Fr%2BAvRfWedjyNsXLGTesGc9HCK034vC6PLgIgMOreQBOclw1Ov6R%2BEK0WLIqHqtBl8LICidlZR%2BY3VL4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHfboCGl6vK14eXVJircAzzUbzG5B2Kb%2BLD65vhE3Sl4rJcw77S%2FBSD4EHC6BzbDnUHFi1xc866p%2FkfI3JPyuOYWmVDoYppUXJc2jynyPQbZ5LSr0%2F%2B1FYmLR5hDYmbqKpe%2FSdolNzzQFjpTaNSFrajBvMB4E53Z5Jnf1wITBaYBFZbD588sqF7P5t%2B%2Fm8aO2ETDv5m0H8EkBihU2ZE2PGv3JNEpTHe567ZHsEe%2BN7MSLgxt1Y8lrFsbHDIGF6vWy%2BCqKbK91m1hdHXxt%2BlOYIHGhnHxWeQNVFREn7alLxtaOwhTAxhgp18BcOmqp9rjiIKm6JjYTiBQhmzAot0s3vbvAADWkj%2B0jYUUc1oKvFefq4JQXloP6FmF2%2BCdVT1%2B0GwYR4fSYRcPA2N4SqPzVMKFpjvXDG5bJzbYqrReECmu4tMt1LrlRnVMxPwkKx0sJ6x2Sw8cNIT3pk75LuMDjCSVUKYIBa7cyg2A71C%2BKsfo3SLBhvkoHB4aqoXTQsRFRUHweKm62Ol8F8xXWa4s2KmGa%2FBgJ7On6hUlwW6IJNFbkuKMRXgvyPsRD23gME700vGBPyJun%2FiCo8HBBakrpccz55aaD9YlWCud7Qug6cOGxeNDcWeSr2%2Fy5A3xGR2otA3oc8mr8xcZZ1e0MKeAgcIGOqUB0DE73CYkINQzXvFsERa7pZGKcVx3d7B2oBkQLOebuRDmH8p1ang7LVBO9%2Bt%2FI0wNMQUQixUnqNHTOdJC2KWl4lnCzBPFd8RarlB760PeTvqw0R3mwupW7gfpoz7ejmc%2FoTQS1p6h7M15C6HfEuDoLKx2iu%2BzrB%2Bkw3Viv2hNpKq7a9V0Tvnee0ThxzLsSWGpxJDwxKzY7VLoD46pQtTSfUDmFGfx&X-Amz-Signature=1a7349620fd86896fb176d462fcd54d5d8e1d2912e428a1f2ad723e4dd852fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
