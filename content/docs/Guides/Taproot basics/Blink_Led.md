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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WJ6RRW2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaSIh5fqbedLBUE0e5hJA0L0FFnLOmIiCRF%2B9KcO76mQIhAK7I0Of6bdxDHBRHLjGlyQxdPBU6izaQy1aQp4XD%2F24aKv8DCHoQABoMNjM3NDIzMTgzODA1Igy0NklReFLEkBJ%2Bv8Aq3AMkRKEM4y9EJ%2Br1RSm10eMK3LiV06yU7Q6Ud6khN4QrVPaXC6l55c5jXdhYSNjTCvh08vl4WKyExWF75xu4cdxUMMRm6QKaTHE2zEO7FWI0jP%2FKznRfN6RpGPKdSou%2BYGsHSJx5DMthyUXs1eeRT%2BCxFcefFJcZRVg%2F7tdVPSEBgcfX8hJTEe%2FCz9yN9Q3%2F2dim9h5qRPThJbmyVLSkue9xu4vOX1H9%2FD6ilD9qYKemfNx3HaSMAfYe7QwbVXjZ%2BkxsputIt1UQTSwBljtfkpssIY0Hojgsg8oNx4bMp6YYY2ibSwxG0%2F1A01X5lDTnnxjo82WmpQ0sy%2BiXDCFlc5RrGladG2YaNgiwiSDjiQoBKiKgjBxFaifZrblsvmfyxK3vsg9dAUh04gyJ33%2BsOm3ttWgpdu4N3od65hSZdCR%2FCAJMQ9QE91Uh5H3EuAN4e%2FjSKVR2mG7tP8KKnF0RZOZDmnq8ZEBx0uI6WeNR%2FzfZJvZAbJLv8C37FSrpvROdPb35NcAwZs96sFbgbEA%2FCKCGWl%2BzGvUxwmdi3xFN%2F9%2BEqcXxfV0YhMfXPMwbEvLgYAWCEYFXt2ski%2FAQOZVvTUSZIoQ40ZxrsqZs6TR09hAFH7sWKAeFFNS8k%2B5ZhTCY%2BNzBBjqkAe8hMDulvkugHmOzCcEB5%2BHnL15UqVIH6oGr7isKn4XKreG%2FBvnU4bjE7Dqi177CBQJNQ8OjfbMKkO%2F5aQV5NBH9vsc74HoFfPXX%2Bc%2BA9iKgqcswxbaNhvAH8vVwruVb4s%2BwurgvD%2FK39IHIojEft4ZmHt4yRddNa6jS1sSx7cr%2BQuyRGC7h1PHr2N%2Fy41UvHCJ37SskAFeyFyjf3%2FFBBYpWhHPh&X-Amz-Signature=9d796136dfc60b2c6a67246512b4c071397a0e7590b06428d739fa00d3583969&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TESVIR5J%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1s46YmI%2FCv92tBdTsKrqa3ewvyww5KXctNehlVo5wwIhAN5qNfXB4gPntUdgXbTtIM%2FCvpQLCC3HDMlIVznaOp7sKv8DCHoQABoMNjM3NDIzMTgzODA1IgyP%2BwlYDwFzT6P89QAq3AO8V0QzATEvW5uraRjXJEm%2Bz2wJRKpVm5dB8AcP9r18sdVtSK%2BtXULFTGX%2FyKhHuIGNT8qhDGG7O2VvwHNI%2BADILt6KomwHsRBtfUkwlqvYV3y0dianeGeqm2zfI3IL8NQdPkgciN5FdpojCpSsR0YFQ87URYYcRk%2BgLaSjKAlGPN1QMiMfx8ixRJT9THN3J2PzBaFtv3RRJ%2Fl2s2IEYWL%2B%2B%2BHJh1KWHUX3OXxYzGOfBqlHqCfDX6VTIID9ncc9WXYJ5zF%2BNoZSxZaxTQoeCrThUUPv1i%2FL6tIxnIfpk%2Fj7SwZdyClFMpqEo9WlAegTMtog%2Bqm41T3jUbB1CzUTp4xzVj%2BnUAoKdOAbli031xLlkDp1IERQM%2Ffoj%2BB7U%2FrgCB60ILEcVxeCcq7vW%2FgRJq63iI3v7bibvXUDomxaB%2BMk4gUS2AcNzj93huhXAbW5n1VhE0JnncaMhndW3DGZj0pG5AGmwv7JfAJUAZGSMx95dFd9XF3Pf6pxbrs46o0BRnNKXH2FG%2F9BRiizCWrw%2FnBRoW98i7cal5nxVmIZrllRRz5FSKCfpRRSTsuI8HsvCxd2gjhIzatdtI7cfEbJbo%2BdF3PMnx6H90QqRJp5NNOXPoheZEIfx4WKdDFCDjCQ%2BNzBBjqkAWio1DUAefuVWYM99TrUychn5bnrMgKoPqoDW2w669mAxrS02JmvG1qsk8Xgb3SlSnUdAtd7sQ8QkTj4vQTA5InStq%2Fta%2FBD5sq%2FDcg1pGJewHh%2FCdjdVQg%2BfIRJHPeynyuKm4kMRzJ76CcBBd%2BzMsqhoN%2BecC5HVmoLJ97E4QiqKnP%2FAFXt89P2%2FSRHvxiR%2F2uwWrLgwCKDoyyxL1drKwgyrIyl&X-Amz-Signature=d07bc8b5d4b3073e702d3d6ecbcb8775e795901f8a3f19879c65925998f28c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
