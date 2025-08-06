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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QM76OAS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE6OaEVDH3QwuysyL8FShbaueDybVGKThi2mAZnm4wl1AiB7j5MYuTgx9qAypnSGW11ZCWVqh707b4PcfABIHFlsJir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMoabGxiDSdkSgMUm%2BKtwDyjfhv0pAKlCfNdYx%2FnpcKl8Pu%2F07z9bNxhYu%2BnooRh6lZgFfctagT43pfwhlfbHfeiQBfh5L2FYcLtcCrVQxG6ruZVdNgh5tS4zn0kWJVbjCPRf8ATUZC3mHQoRCI69DM51idBxal6hUCMqlcSORPPJgJfGFChFxZEx%2B%2BQaPU%2F0RMJi4Y0mQwm3d0lJSBvRQMEW%2Fnv7dstzf9ekIMwH%2FjmX1E6GuGz%2Bx5LIE9RIs8TZBBPN2u8KSy63UZsRzmqLh9BPmwjIkF72TLM3WWlpjebnsFXoYO8X9yGa4fY7LxMrpXY7rj6qgMRaikJPos%2Bvqywu0cSFUrdntvjlDIaYwIoP2bsx31T43G9RKUikjTADWeF8Wo9rUwQFzBNtnBFbXwuAxCToLkWq1b7wKwYxS5kqmCr1ITFkK1E70Vp1ZzBD%2FDn%2B3iFBVd1R8j7DJYFpdo5vCxCsT3yV%2BqF%2Bv6TTjQE03tOv4Y1jZSwDxuWGpyhnUrgwqb1FtmTLzVEbqnOastebvqv%2BfygbA5hnqVwVlCz6WxVkZXBMHkQOSfO7%2FX6llCpXYZ%2F8UUpxZk7kxSh%2Bv%2By9da37lfO93xHWysG%2BrEp7Q7da3u9IEdlj4KwmsURVJliSiyjJUEOLWZC0wi8bOxAY6pgG7L3DFtbSohN6ojrdzC%2BGNAwz68GOfB5l3YPTWZpU0tBxOk6%2BexlGPJx5y8toUbo6oA42mIwwTz%2FglOeKCDyvRWPCp6ijRbL%2FoLgTj1WV8X6AtD%2Fvzvfp4nPRZ7mEOL1Gn4LZK%2FoQKZRgLxhi3HbE7PcCYoVfKgIqp3hlDutN6Cx6VP%2Fk2SPx4QDB8dauC2S9kqnGbFY3SoXb5Qedm2snYuhm4i0jM&X-Amz-Signature=17efb9b92dd10230beb1135d7715196a8f2b3d409fc7beec348a5b45d02e452f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYDYTWSA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCmSncYU6BoStFJYuAbyGe6C%2BCDbv3Y47qe1gGjExF2dAIhAIBbZVfJ%2BXp%2BDeNNR4T3aDuHyLi3u%2B2rnpVwlW0NDhDAKv8DCHwQABoMNjM3NDIzMTgzODA1IgyzRpz2r%2BIPT38Cgkgq3ANKKvpuHlMNCzoSPOMt0ABfJbEM9bf40Tb61JAcvZBNV%2FPbUKaPHOftFXMV1eRoLDHRtRedVCWbdXUoFiXmY6mz7GKcVv2efCZCpQlDAoPbdCCcIOGfhis8znaC60h0NaoxNiPqKbgnXIbGvH1hruOfS3aexLX57pJdcx3334ysg79ncrdEorlT3WKRbov0qyuJOTeZWw5DCVdy%2F06l5Aigx25t8pgRcsCWmgGQ1mRq9qWMCtavz5GaeUfNrnQKEnp%2F6XRIcHun198RKptR9r%2F8gDrKtJv1z3tLnPbS4w5XbxsPzZcohY8i0ryzke%2F9qmY3widgp2owF5qpDqThD9yw%2FkGkHVhWx2DrYlIF14wxn1IY4F7AvHUB%2BPFtJWe6sxy9DsjgQian4UTRY2GE5374knfgQiRIv%2B5Q99DMmOsWPciZWpRp2PYxJL%2Fxgq5hDEkQic6rv5ilpRlD57perdJppOEnKu84yFAxkmF2kSv04YdMS4E%2BYdzvZE%2Beq4sJl1xn%2FfEe2ijPOKR%2BoY1D2kbYirlnJ4KAPBU0gB16XEaVpwqCgmE%2Bya%2FSKWiJ5N6%2FaN0tSgCpQdj0hS3WnrZrsLa0fG%2F9MNQ1k9vyHGMNDLgx3SgsMayYFXUqgJgaKzCCxs7EBjqkATNDJr30KvgQnfgupfNAlKriHsrSaaVKDgTRj2Bf8WUi4%2F5h6pR6IaoSKDJZzIJFzhnb17Xv0gSjVCOsEUBiyAA0bFZoPEfcESaOaaz8y5%2BHllwd3YFoW5ScN5g9Xuwq8pv3QXqCOkWSf5soUKk5EUO9joUVRrgK15c4%2Bj245Ktz7x1yDDnacRNFaygMZM%2FyD67aZh8z6yNkw%2BZZkViVFwSYycCJ&X-Amz-Signature=f9050db26f0180fa97a704c45517916341cced986f3aebd4016677f9229cd5bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
