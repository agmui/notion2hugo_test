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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZPGWXKA%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfOOTqs8BiITgJMXzbo64l7qJ2kjRxH9NoOZLnG%2FinzAiAivx9bLpvOryFypAKbruj%2FsTxXc%2FtbGbggsLzlWXR5XiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHIO6QCOPTHX2qqMNKtwDpXMUsUKtf1wnV3FbWufrCbKizRsO%2F8hk1kCci5pUb%2FdKLLlF94dIoVJTic8uoK9MoEC0stSud0V32n0lUvvDhtFeDkkiDDHl8jF3j5HFA5nT82QZMdZFGV3%2BvPjzoZB23qYx0TX2q5e5AOdWRRpaj3L4mrD9cvOOhDxocQYp1wS0p%2BJDOWNvtpBwCTTQ%2F%2B9kagWr9%2BEYu0HzkFcRava98KiwI05RXleS178qFSoepulCa6v1mrqAwIk4ZOvgFV%2BXD9lViysscoPkLPt166iDpAqzgsXo%2FEMVnn%2BK1lXDQScb9%2BELjT4ecGbc6VQm7VJCjI4krK29bVJyo4qe1wWNCIe3tXrtBc27sEW9bG4Ujpz7hIGvsdjjmQVKNgUrykMa%2Be%2BcLptlD7aEfg%2BUjM7kxe2V5ZV%2FFNtsgNf6fo%2FQvxvx3%2BQ3bLPK8Dfq%2Fb35ltl8N5stsrhOAueI7K8H5yunZL0lFUOQksANkgISUwiuBxosjoJYmQf017bzmUpLf%2BEuHeXpLymjon4z3%2B2D716CNNPRiX6lKbMMwyVl5C2rBjaNJ%2BNogm0Pci5DS6dJgRxpYxX2hJybpjf2kKlZaIiIpAWaFxnp3XcgXnX1i5AqKGbrEB5i2qsrjwsBDTcwscSQwwY6pgHANePxjLYeb5glDxzenUWlCY2cyeNCjLoVGOJwgksqff8puTfLVuHg2Hntk6PHutaacx3W7pVcQSoE8iLRtb%2FlICUBBJW%2BANuTVmrYp%2BlxsEdFRS8Ll8hmVJac4y8s5XiP2prm%2F80ulB8%2Fc39YUZFjaK0OKVCejmAnCeED3%2BfsAPnU6Xh6%2F8J3d5nsR%2FDT2YHPCcrm%2B%2FQAk%2FD2SDzqdXi2nS9E%2BP7E&X-Amz-Signature=aad4256b3a32153ea7c019c7b19bfd2f9cffd8fefdb09e33c910a764059c4f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7OO3BS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDspeRiQPH6cN2bHOdKpOMuPeyp3CYQQHSJTrCKUo0vwAiBXHrq8WB2yD1ENxSICF5fFK0n9ZLLmICf82VnPZ6ytFSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhPwW1hbQpgPv7CnZKtwD7fHUidvSX9ExKBeqoNnsLGTHEVhyUIvxX0GotGtaBMdzSfXx8WLr6RpJuxFlsHbgqts%2Ft6GuiayOSNMrso9eMzpmPce%2BeuXu%2FPQH9Rp9qBUgb6U9b1Dg4PvZ7MgZUwpWo%2F6onRPtdhrs6bo4etsjdGeLcXocjhLYsmi%2B6X2MAAcf3VRRfvPLkTQAhtn0Apv%2BQf%2FGhUdtHe4CCF8punUHWEt1%2BEY7iZfEVhcHzaXSwgfOV80xEZQdIXIVAeYGz2gffcnq9B9KrcePyCRM6kaq2jBxZzqwia3Nw%2FRmJN%2BqYgk3uZHiEkIjxzd9zokde1uT2QPXDAf8Y7g7bSd5TdJPo0QyoYm2z8TbrMZU8tf4YYaIKnBCclAnhkhN5ppELrkE0hlieAgoafejbpdAN4VTxhU7GWSCEmEYkytJD2T2zSrHlXRwsxwEie0AoK226uELxFMgDGu8iFCR2CDPq0K8ktPePuqvySvYhQ5N41EY0bkym3zFntCS%2FlTx3oz%2BNrBI5v6EsmLl%2Fj0N993pNxkgLDdgFyKRcVYZMv6f7UJ%2FVX9GMYOJNJim4yWsFsc6gvqR2er6U9BQB5bANNFgE5jdYQIRVJuzysFCgwSp391Gzdl9fCJt%2BSUzqIgsn0Iw%2FsOQwwY6pgHnTih13SGojrLzdBG%2FnnJeIKbZUmTGpcd6SPOHSyr5dsbU3un1L6TUyZE9xgRt9q2K91dvpr99kVcWq0QoUFKiwBTla43ZRYxiIHawE02HA5IeB7b%2B9kJ96PEXBDDO9OiwH64tjzfR4MAmzOcifsrAOwDd6CVfxfYjNVR9FooC2K8exWhvoBpKiPNY6A3rHr2WOsWeDnxMxJc31ljHfi31%2FSunEdiG&X-Amz-Signature=4dc7fa97045674562482e3d79926184e10b93dec8ac2d58e973511139226f12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
