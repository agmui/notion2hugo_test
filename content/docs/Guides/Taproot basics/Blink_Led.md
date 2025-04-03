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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTNUYBG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDR2hEDV45opuH%2Bcv6WgyeUWSDYCjcphxF5GqDACRVy8gIgcn0cusDKr2kZ0bqf7RcjE%2Bp6EqQXqE0lRPq%2Bf3VsuisqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvjnuyuQlKaJ10v0SrcAxkWs8rtn0i7Q%2Fhap4fPNQDPFCuS8v%2BGr1Knys3OfKvX03Jqh5xpKlRcsWRZ7YO0gLsY2vLCgLSCaRgxZaEBui8EGbfBNsAGPJMixFqKGaaSzLb7UvRZCARpQmFF2Gw6FDIIyQ5O9qQp3cb%2B%2BiI84A5FJnc9RgyOf7XRFIx1cdcUJfdBnrWnh0i1XRf%2BASYeUe8huMxQ04agKLf6ya47V9US9VqpY8XT46dWVejDJ9A%2BNcZtYcYi685pWzrC4qW9vGhUW6IOcnmFwk1%2FcTukkggrcmtvqZ1WL%2FDFI7Ce7NSzXmJPeM4P8HhghCSqv8lSMIoshq%2BsC3dvpwcVJKG5dnUjxn9wV3aD6eyW8iafHjH1CU%2FJ3f%2FDdfkvUnvTqQPHpoKtJHBwcLyqgitKn6OjJ%2FNJ%2BjLUG1NZSZzPRJ8GH2H7FS5vqM%2FzwH%2BesdLJk%2FM9HqNpxHAAGk%2F7E%2FkOI00tVJGLtBn1ajoJNFLg%2F9ZNk2u7XRLrInMsy%2BaqdC3NA6Eha9X5i81KsHi6PCmqLjhgy9S7Ay2kgI2SDI%2Bu7%2Fs%2BNIlocdNXBFPBNUho9uDsjVTRzpYAtt4%2BRzHGSjACAB7BO5js7WSKDPOL1tbKg3en2PuoraUmPS0uRzRbpqCTMLHIuL8GOqUBtxMjggWa%2BYl7Hpvi7WYO06V6T6OvPEmSn%2FS%2FHXepPdQPCp4yBxcv8MJy6qs2FnQ4pLH2tgeUhqb%2Fb%2FBwGrLAyiERwILCNevBItdmBJCLYrh0lvWNQSFuAbv6Mmm8IXYiLrKHZx287%2FfoeRiWe9QnsqWlnm8qYJh8VkJ8bTa4SbvTsXyLsERqJIRRspZQvB4VJZKhJOqTberYmQ%2FoLCwonkBkt6He&X-Amz-Signature=776b4354cab0f28e152af475483cd039397b9454ad9ecf3577f85580e3338626&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGUYRRVG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIB5Aj8mWhVKYZX0D8Cae%2BP0%2FSojzX4UvXdK89O8f12ssAiAb7VaVNmpTWx7zLJUnWPZsni0KuHx5zEsy1NV6MltUHCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq0Ic6t1zFMrgBNH%2BKtwDzX%2FsxWTLs8e0hdBU0uIfTvvnxbwcpqCi4nSoKZL%2B4Ppxui7tdX0106%2FZrIrTcLsXL1l7grReN39lFVal8mHd1HmnBtx9BPhyjPyLnwXUTPr4xKCjzd0N5rYSG%2FWhGLetwJ6rRlIrfVBo3PeUIfazUu6Zr%2FbM%2B5GmI74OYr66M7zOkk7PVcK5lPID9TxMoypqzN8vNcSb9hFKusdedv1Fmtn6XRFD8jQtmvX%2FIDzsr1jAD8Mxizh1owEFvAXw7MON9QoQv%2Bm%2FsY6X5Pr0f7G9OK2h7rqF4TmmN3hjgFThlOeeVMpVF9pwF5a9VdVkxUgpADQVOEhPEkH7IM5tuH4bkvXSYlytoljOZHbsjVNcdkkZ07flYuBkQ4XZ5DYgBpFAh0T%2FVkfZH6ur7OWGaVVHjvhC486Yd1jnLj5lUtCe%2BTR%2Fgp8uIcivxPyit%2BEbPX8%2FtMUuu6Z6ewseGNq5bNhNZf9%2BXfCt3hlVe99PQEJnQGp%2BhCAOORF93h7VETI3pr7PDZGtnasrI9cfnzEAQmJ3Ng%2FznjP9Tv8JA3chqLnnmLBJGsw9VbxylnfmLwijMDCG46qSzuoI408K9u2yPJeqKslu2iRApA5vbHH%2FRCd69NSximODN0fyNH3ER1Yw4si4vwY6pgE7UUKyOZhvrRnJClqRi4gsDlROWfvs8lFcD1PpcLQRxM%2FOOEpe4TKMEiHUmS0eUrXvpiuZFpQ38DXXEh%2BO1bCE%2Fb4rz%2FAP4gXULMyTxOLnEV1SP7ZRIXdA8krbf%2B8i4dGaBM4ouqAydlL22RdC0oMqr4H2AkX74k2g%2BgnnctI%2ByWhwhwi16A%2B2Q%2BvG5fsVfII8rhiGaEt4v9w7mEnpzZuvM8LWL9JM&X-Amz-Signature=fe0d0f6b5ed958d7d52dc19874c986ccfd4938d6278f01123e058dda40e4bc06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
