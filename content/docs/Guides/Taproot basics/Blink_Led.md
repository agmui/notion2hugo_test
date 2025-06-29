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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YASFQBT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdfz%2FnyooKPnSE9fkuPuhC0YstQE2WV1rQWzycI7DueAiB5UxYIfTv7xh%2F%2Bq4CuBULfpkUttGmKGVpSZ1PlHuz5FSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtnV6ootbUSQUwCv0KtwDy08FSaHiC376Jh6YD7oFNQh4q7t62OF2Kg8wC%2F8k%2FK0mJnykRLrBe4I5uv2xd5sVlceVGh1XIGi%2FSev7EptLLmVUbat8i9bc9B3jr2FTWtlvGr4fNcTdRitNG2TKQ30MjqirJ68t8560CNN7lPPVc1kTD9AbhWQdIk94AiJfizJshUW6J5YwWYLLq1hxkO45RoEa%2BrSA55mDNFsFLP50C%2FiMdfB6P%2FbieJTs6UdZyn9KeZidB2O5xpDUE8eruyeHZckkohfuHK6sUulf8w8j7AXJ40nXWlRQqEkJnXYeWIq9ShQYM6rL8azL4AliwyDtgqM79qNFBNadGgfRajmOyhgCzfbT3jNEiuFP3%2FdD2Nlygefp0Ex%2BKE6OgdCuvhm%2BcI9giFeWs%2Bhu1WLfhy4Iae70SJwgheCVGYxz3JtsRmkGMlcgRdJ%2FAY17aKHh%2F4XKzL9biZLtsw9D%2FoojGdJ5yZ16kAxFaxgZgErAICx24e1h275VCF5Ev5X8Zp9V%2F3EeYY4G9pBV8dizYRKEexWLPBlPdWv2SXszRRzQrD6mRxUS4xF31eogozhyHoBM5iRqtb%2Bm3PGAyYHh31BYPclN3xvdoIqMWa%2FALJtlP%2BRiR1WT4r6t2GhJdidfUMYw486CwwY6pgHp2k8J7FZfUww9EoGbgM%2Fb4vv6LHZu17qgpa1s47jpHOFC2w2aDLlHJHM5fPnMzSyVffZwEhxoUNbc3Ui7PqWMPCs4c55Fw1%2B5FswHezqWbEDRRrRP5mwrJHbwspIINJNM2kN1eHKTy%2Fzqx4IkFHXwxWWyTDyQdkAPg5XbSwQ6Rpemp5abY5i%2F0fgq6dg7swLRWUj4ZmkpHUuF6kdFU%2B7cHyjpF4fy&X-Amz-Signature=0e338ba58ec11dc25cbe80b057ffee5f6c67e0dacbeedb72a55bcaf74a19694f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPKZAJX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDacb7oM8XybtDUdp4oQNlsLtccaweU%2Bw7b2sxEJzyv6AiEAss03tCcZjFlJ8Dstd0VgPkUJKd9kOtE83HO4HmbZyo8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgUytNhVAIzS6Y0NyrcA4Hsgs0YRt4L1419PH8tAVg0B4kQ%2FEivFrC8vIXNAAd2SOiE%2FmeD7iTGtVKmFe9vg%2FLircbold1ZcoXKA7TMBozWyfGQnAeDZReFClP2Mg6ecvQLqj5LkqNd%2Fg0UK3YIMj8fdzU09zeGeqpm72poD73MQnZr6m5W4b5HMfSbE8HaBhokZvshiV7USQLXkdZWF2GV%2BKu0e0KAKUcDAUuIwihoKYUraaNsMs4aS1%2F%2FSZcE2u3F3w65nRTOOFHS8Yg21wfXbHfpAxq%2FTQIoUIq7it5%2FHahVnBwbDmighSQ81McJZmBfipa3ai7gYHzdx1p7wLZpLfKbzwvVy4YhbjM1%2Bfz0zETQAxQH9u6ZRd7aI8%2FpalupwTOE6V48Zi7aVqw3TifJI%2BDrKA8maLMTmJNaNue9OdMX270VeVu3QtSbLgO1HD4D6cYFAKAm5PIw56zABk3eBfWoPr7vo1nvfQwn%2FvF5QAlZMVkAe21WVzPfJE8rGN0sz13ti0N2CEQXW%2BXyGeVvcBtBxdO44Pw7iHc6IY%2BiTH%2BZffWzzFcY96VjqVrhid4%2F%2BFbR1YUMUto%2FIe9yDG1erZtw7QKmkXIvwSIkhOprzndrrbFn4o7%2FhWsdVaRjmAWHJO8Z0aQ886zTMKmRgsMGOqUBGpSRT1JOwJAW%2FVFaw73EW7SpDk3Ymx4Xw1DnEa3wsrqSeGXz8qFys5JAJ2pcZta15WkHGTimpjjxxf212pkXHQzYOPUk%2FdeWlGvePQdr3bZVMboRKL30YKrdB2Aet7jGLXqn4VQcpgx60xd5e83ZUIgfFcZqWnslu%2FeaVSZVQdan7kxA4XT8z%2FmJ4Gxjgb73Yfi9gTUSTvWScSlC0nUlPBg2eCAW&X-Amz-Signature=ffd5b6a5e3abbc2dd271bdec867494e6bbcea5fb0eff07bf0322c3db9acc0152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
