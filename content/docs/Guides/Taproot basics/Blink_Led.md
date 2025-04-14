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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LLJAGSV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQFfDLcflborV0TIENP2W1KYcStq%2BmLLDzl1tnptBcUgIgdNLwcxi3Ye8hjWKFXPLLFWSc08zyiTHyXiT8yhWn0roq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDNj%2F%2FmpnewfifmfGdSrcA1%2BbcHu6GJPRsUo%2FW%2BULcSPmVwuFN1pdgXLQ5XRHXJ0t0l%2Flq4EUdYA2CruCiFLhNE0evOCwlu2pObVgDJaINjNSEWxF2l8M66cdvVMKJZW6JdL7OsYDRjNzebox7hpnFD076rl2uaITel41d7%2B4Ov8Kahv1KE4EVURupBnrLGbcRif0zi3onEUSqEnTlP5GtvXoPBF1CMW8heS%2B2zPA7uLgZRooNedbgXRc%2FJFMpGESnB7WP3hXZgNv1bA3jnoBZuLgnckKg%2FyEYzh05vZnLWR0wi3F%2BNo3N1zi%2B44%2FX%2FRLkUGPleNlUsuUu2vpxOHK9BeToIMdtOJvtufRSoXR3%2BfSyJo85G9txLdRorHMV%2BF1zOVkBatIwFsAeuWy5Xp3ISxjdleNXf1JoQiVPuWYRLGTrD%2BcHZ5SXx8w4oS5mdUKPSqY7dNEUz2O5HMn8SoanwQqaNbD6HdxUH1GA%2BJGNQX0F6NxTwt8bR4PIY2VJCU%2B3gHcXfJaysK5ToNGVU%2FCHuPjlh8NNdViCDKHyfwkv%2ByD%2FQDYpfhCad6Q29PselwPDsRJLExLhajnuzabrGEA98C%2FqODcu4vnlLrMb%2B8F4p4u2b4YhIP%2F7PQN97w%2FodwYUQEsQ2TwPw%2BcpDH7MMGb9r8GOqUBSrwAnVAU%2F%2Bd5M8xeM3ZDVSno0r%2FYCTt5zNtPp2jcLp1oI4kqNsLz0MeieNOJL%2BUY7W4uUMoPdk%2Fsygw2niRNWKLmFcWpgsJgO4GcNeFcaM3Y8LFvreDHLfiFsw%2Fqtj1iKvR%2BJJZoo%2FYhh7iJO5qYt%2FIpgoISky3CpeHtndyKtReyImXx5TJIgChCND5otYuCTQjDVDEHHDGia9FCMbOvqyGka9xS&X-Amz-Signature=275d35b855dc55eb1442114b52c75c8f9cd32992cdb4bdf7ba082f695723f3cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5F7BP43%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjUqeb7g%2BhkzL5hN%2Be0q9lR8%2FnSmEzhMbBY5Pqw4okXAiAxcbXu5Ec%2BSiKaGBzK%2FRKmsf6wAc1AxKir1eG7SjvuRCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMvmO4xxZV%2B021bB01KtwDkY%2F20s0k%2FAFjPaFTMXK%2FcUCQdUJQMuNe2xxSto3D8FR86EowocJGSvz5fylSxO01pa9J1GGwFTxWWm9XteygU%2FswN30gxJ9OEwcOH75pdyo%2B4rGgsIMjsNrV8xmI1PRD7R5m4OnPNCa7n03D5XHMnDq22hFQMtFQauuCwsK5R7lfDJ2yJJxnLsbrSAI39r9BPJRK16rM%2FnP7imTyBTdqDOZb0TveynBhVUQtWyK5pZ%2FwriDwc9A0z48%2B%2BxRLylA6P%2BY%2B5C2u63sWo5PJmFkATbnuGshRFg3Fm5QxJiOLtWM%2FV89RfT%2F5mJVuD4q5rj2WyIerwS4H58qVsdX32JtMaG3%2BRy%2FCQaSuvSolPsfsPiP6rAhk%2FYondcTZRyKLBupOJM2Fc8Sh6hjMxeY4MfhiGVhJwzcyKKtSaA4vpwug0rAwtnbXJYIeDJgIu4Ci27yBXX4T3nvW%2FHOdnb2BkWqdNXSYflE%2BHoVZZPefiFstda846nsKnOSS3V2MZuIYmv2XgR8bNCLG1NzXv76Ltyo%2Fm%2FtI5ApRKxcpXNhc%2BHGnol%2F6Hbc%2Bx2bQCh7kRabFxd57bHIvC2OiD0tAqSrrYwUmtBJWffxcb7DVvqzPVW34sdgBRTS94aR8gGpi3dUwkZv2vwY6pgEN4%2BoQ8arWUx9NzBTL9fXuPX4HTb3AiodyVX7mo3HzJ1ZMqhHUbGC5InkMUDl3XmrBF3%2BQOTLTn5zoSI8RhUvUyAK%2B0dbSnWQZJKdcISzQ0JUUnUGlyvEF9DzKCF0FLeUmxLIRkHDQfSPVoGo9mja5xr89JEU2hjBQQbPME4YvoPP0XzBD%2BED5bYJ4JHWBPEJynPHJetne9%2BEXikymUJErt5nhZ3%2FX&X-Amz-Signature=b869cf9a52aba13a92941d88db3f1e9be20f8525a9055c42166810ce76f13bb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
