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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE2APNKQ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGBubHK6XErWTfxR21WLxnTaERBMwTFKBciH5Unz3%2FoVAiEA9Hfxd864%2BWq%2F4ZJNSdPzkIvJjXXS%2BgK4Xnic8PFK2V4q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLCHSRKDmG56S9tY%2FSrcA5bnwP0sza%2FBf8oR%2FwRqW%2F9%2BnckrhipQCefs9pXMkdf74YfWK5DqNmVZV6fsu0SwEyuWALtkU7FSE7UpG8JEBhtY0DesTbkoXXzsZAFMiArnBRjC8gxrana3IzwgG4wHJ6OmuxSOZ63OIdFhcwOpJAkSSehSkJnxHRf3MIGZdCYPPKYdhEFgAxddyBTyI4BzPGtZHKRANmMzTeLnKTxwy6GB3SjGa69LWqEhkp4xYWNFcGVtCYk5MPJSOHBXdnYictHzFA6oQDOvz193heVyRsjnLRXHcCmF9hUKr%2BO9JD6R2RtZABJw%2F%2BAyx8uEOsoJikssNRCeaHvd7d5jT4UpwdV4Ps9XR4gsUN9fd6CvcxgcItmjygHvP5vdSNlv1bSe67yk95XDUKox8qo8eIlpc5vKFA96fUkuQRmB%2Fsqe1Z7nZlWuyKJWj8V2Uufo742EPWzBrIBfXbCPDyfSAi12zfjTnVROdpJZrgV9BAGLq32d%2F7rJhuf1Jegw6htvVLH6SJNwGVVZe0gttgteEMT7%2Bf6%2BSk4SQ64hSAR30fvw2z2sPTFHFzOA3WLjTtHkWhGMwF1c6YOHk0Mfld6gMSJLtYnUqdfdWra%2B%2FZklVMNWLTPz2ub%2BNXdFMK96qyD4MNSXscIGOqUB4Lw7HqxJi14JLmIo6B0PKxqfR4gONjdJb4yjwzifbIQKXuvzN0JSMEJnPCISQGKtn7fGVsf6QhEo1nNuNva0EmnZ6Ck101jnA1MoPYmELMJ2wDUhHFy4HdJnNzVEUwhqTXXFP4PXWM8r6tyOl%2Bn087CaT1M%2FLvbPzqHsd1a%2B7Si2GGInQQztc4AGGika01IDdOfm2PT09dUGDlXQeJDYplYgU8oU&X-Amz-Signature=d8f718929974d6ad44702e8ac3f17ba3722b629f5249045aa7ca3801d1a4ed63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWZLRPXY%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHubjQ5F%2FKm0rzlnAhKjjXelVKWjtjaYHclrKagIZ8kaAiEAnJ1VBD%2Bygr78LHl1yuV%2Fo0Dj4O5fRlXbZx6sYuftymcq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDFOwYPkVfxrHkZLsICrcA%2F85gWDLxzby2XUMfx0zFWqfF3ciuWNBoMHVJzH0R4C0ZiZ7OfY4Awyq6GnCygWmicSnV2jcnsrtRS8f3JU081mTmaBPE9RB4W4hFLHVCPEpDeff%2B0EnMtbekum%2BUjG4IoQE5HcGevqk5fc%2Bpt%2B7d4SqmXA2ukgkaEqyGsS6uAVGBSBpuSvbPHirk6vaGh6P2iaRtjY7oDh5o8HDXRa%2FrEU8znvMsWWSTBSZtYXtg7aqKafVNkTkl8hESEa24r1D0FMOgYXi2qhaDQIAb2h1ROqFXRMf5pw51oOjSPH%2FbjmptfngDhiFFlILyBOcageGM95asTDO9YrLQgYU7pUCeItRark8Yq9euLExUm30%2F5UwhI1SB8Hxc0OkxJXz3CYYPT%2FCv%2F1za8R8Tk4vbbNakUSlelzrmsQAVJCsD71y3Gc9myQyEQuPGF%2BGME%2FN8DczBBpxb1gDY6R5%2BU3fGDrvZI9TEsb5vTOKhB4dqd4Z4wtsQgC75XmhFWzyDXO7QGWTl%2BWXO37M%2B3gsrk7jr%2BXhrL%2B%2B8I7tQWkHg9V35HYmeOs2Bkl5zrz%2FcAxodhGLwuNJhaLsHqUPkH8QAX8r%2BpmvhOUK5sZb7cN6sUjYYcn8ExwsDHTVX9Fr1HmLMBASMPCXscIGOqUBciUdnwil6AcpnXxmNbVAkhE%2F9T7qNfyea%2F3xF%2FrOGeP3ccj6xFjIPQ%2BW9Fwu7wwQrZYh0T2wz94PVcf2h6rvrRxZqgIgV5VoA6P9r3DbpV35Z2LalulxnWeYr1N%2BXqNwHFjlNGfpleTS8d9l87Rm5hFZmCdyjEpsAzJkowNpBGuicwwK%2FlwmvYZJQe9%2FMQUcUHgNlJ6P%2F3k54glVJqGUK15UEYL4&X-Amz-Signature=01adaabbbff9cb332148b1acca5300c3a654cbbacc2d902afa591f4a3a6b34e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
