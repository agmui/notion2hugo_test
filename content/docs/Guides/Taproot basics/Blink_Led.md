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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKXCFER%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEw8nAjGqZCQNIX9jhV%2FErFjpBfOJeqDJcZsW2jWyzSAiAjaiD6z%2BbXIzyqZoLk7FvVSlMrjwLduZamKCgwMQG%2BhCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMicgu%2FJoRC7BYOaxMKtwD5%2Bl26sZznItgCRjpibIRAK0cn5WGzbTNR77T8MxWPWZFUYwg4hKZMqDkOjAkgIV%2BO954tYLpNzDxE7y17irLoa5Qg0ICSsTBjwLyjbp489NdzsqttUeUt3NdhC2MK6WhA5GKInK7q37ldNoAYnb%2FWsoH%2Bp2xYDHZSh%2B0VjQqv3BIL9MMt9HblRf7IB2AlW3i9UPWjPhOFzqx4gBX9u4mjVYbPbkM7TeFOam0fmfWMSA%2BpPWrc8yEEKTqoAq9TNi36vl9%2F7CDbA5rtlnlYUIM2BKvOfWcIzuMKWzalCfyE3oXOVV0gQu56Ja0WbaTPQRoM0dTPbuXNvoZ2Uw9fJV5TeCn0RAbYrnpEhnFNNsPzRNZVddt86ol9xHRHV9l0j9zSSoHvHDI%2BB83FrvIemLE0edNpQTvxQfqg%2B4%2Bo4XKmnE198q5WPB7O%2FZa5HdYaUi0OLwt2r1anb8SmdSeObNPcQa5vhLyjuo9u33M0JtfuVigNSzx4fFQRnSKX4ypXVBNEZC7lVPNL0nCCgD6hCXXONwsTx0ZsozYn5ZEhN%2BL9dr2boPq7LkM%2BuHRgjo9n5WNtyG%2FBj81ScmGsJ13sn%2BhxTOajQ7XnnjkLlvGYylXs3Lb7tm0m3trE8DMSmQwrOeowQY6pgFx33IoznXkOotc5py2fw5fcwJO%2FJxHvYGyjt9hzjhRxH5do5RRWNIY9ih9GhqrO4NdDX8SPANEnsPYtAnFR3BZnLkoc1%2FMWG53iF9vMkJwrLioNhWQNJYf4VfUbJ2x40MwnGJmv7S7ywx3e0%2F63cl1H0r2hMvrN2BGBNDoXbSSQiOG4iNHB0Yf6fXWpLJvctAfz454nZubCaEU%2FKX9uqR%2FStgCxIE4&X-Amz-Signature=958a7bd599f2724dbb467f01446254bd3393f77d6576afdd4ab03bd4e016d1d8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAC43JC%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm8SOE9Gbj6s%2BBKXvI7jhxEKoqIohlsx0CGnU0cbLQXAiEA7UunsD5MS2aK1hq0BxPy6ZmynqqDfLYQ%2FlMB1QnVCBkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEEJdoL3e0qngxU8uyrcA4s0FtLoYEt73WTHRc5yqPyVjnoyVyjm7KAuzoEYpSA3BgWRdrUVjATzjBJbxPMpwju2wa6WtZxQYwriECDR4d8YLM%2Bkz%2FxZQA9e0qG8sbOSfvWWpOdnB3jnM7dZ1tvMEuWhs7UkyoQ5CTiPAh%2FiiUc7YyJ%2B2waUawqn8H%2Bzct6zmYVgRueww66KhSnvv28Y7SG9VP9szfThCowUwkJAXpLJjK5dXEc43mI2y5b6y5u1NWIudnqj6KX7Wm4FAeUDbgbcI2Oj%2BuluY76pLXc4PFMFDa5KUrJP6V05KQ7479YcUhF6CBCaUOEI5AtudbiAyAMEVvr6apzWU8%2BcBg9l33UEpHZ8ZDbidzswkdd7hQedHkDVrDA2NdC1N6uPBPi8BQCO1MQLIPbMPClLjG5sLb5ktywKTyjYPBXuFqric%2FbtAH%2FEYYCytYGOp6I2EbXJe9Ih6jgvS4oeoRhgOpw9tv%2FDtpI%2ByQCJ%2F1dTa8zn9XVw9sVCB7JsNAYStOhMJvZ6ldDZ0m2mmgimQdPev4cvoWUsmmQY6ePjJofWu6P4DDYM0CoXjFqk6R3CHiZltzlauXqnvF2KXJ4EETrNBzSqUyCrPK%2BkQrYWI2QJeGvbJvDZGpPkVqek2M1Ge68oMIfnqMEGOqUBou21TIm2UJtVeE346seAMHmDoY94baPoPvdLbEnseAHtVlPDe9afpFQeULmOvWjk%2BZvSpKefY8YDHbeGvfIRPZdsp8EoJXsweFgcnNf5iXsJPsRtZezkYfSNm5l6bUigx3kUTi0az9KunKA7pl9ORQRuZmbl%2FAp71y8D%2FBEDcb91NvrwVVKHUGqJHvtgPhmyImlVjtl8GV7akNfsHT6XyqyfXHju&X-Amz-Signature=45a927aaaf52eca0050789fcb981728e206ed4d4d6031b427af46a85dc1c6549&X-Amz-SignedHeaders=host&x-id=GetObject)

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
