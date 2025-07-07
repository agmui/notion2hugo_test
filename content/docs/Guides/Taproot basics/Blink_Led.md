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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5ND5VE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD1LyUHStfZ47F8uEWj41yB6midWgqcg2CX0j9nfvmb%2FAIgaxETnkqeKOsNBbWBi%2B7I0AXYsnHvnRpFeB6tDdXUnM0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFfv9cIKvTpZ81YlaCrcA%2FwqIoTeoHfAli27TXoGFgL6sXYxxhMcTpMVd7QQancyaoDVozusfSdsTPsM%2BETaaZd4o%2FhiNEYwFK%2BQkn7TxPaJ0pr97R0bSzU12gE30gvaS73lARP5DC%2Bl1m4EcBeqlmyS4sCNx1%2F4YD3Wt6mo74QKBuBAOtjty85llmh6ILNNS3b6bS0E5mtPvbt1mxNYNs0OPadbd5G49z173PMXZVSulSaSVsO%2F4i2eWEKCjeGbaLNq4XLaeBv6Z%2BmjX5hz8hwJMI0iyTWvCjESEGhzXgafUHKyql2JimjQJhbb3qmkuN1EPfwg7P1lO5UjA1zpaRVZUmJC%2BiZTr0xjZv7BK04WTAOsHkVrmpj0lqikfL48XXAOG7wrskUMmXmb4ba2E9ek%2FTL7l9SAfJAQ4mhVmXcAElxmR3m93iAg4FnGo3nVZcX01QsA27w50i%2Fvpn%2BzMnln1kafOHOO%2FdMXWyK3IUbmfLaNozM5LN4fCugr4BeXiuKDWcyQz0zDNQRDG5IEsd6m17y2kK%2F27vC3Q95FH9N6bkrTLLvT7j5pxc8x8MdY3%2FPYdlRHis6REz%2B0En7%2FofgEOmm9PKh2gZv5HsrAsTal49Nlww1ceD%2BekRhrK9L4Z27t8BLngZ%2FLs0PAMIHqr8MGOqUBZPH5Htl%2BNXwf646aP9BZjMMjh8PEHrrmxmHFykYIOl2mKVmfiYoavXURg3uww2owDCewnJhq6wrU1JRvAiF%2Fj17n98Jjxn%2Bw6z%2F0BmTf5%2Fyq%2F9MkD5g5BEafXh5hZQtr4ze68At3aEC0zWDpN3lOG%2BdgE2YkxMR1Br7J%2FJKhxakzmyJt4OuHNVvnncMhEuj6phUjWvAP91oUTU43tz9n%2BqH6Y%2FoQ&X-Amz-Signature=db8c753c623d8e5735663a6915ac227b95939ea68b75b674a5ab251be1d9f836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCPBYDVX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDSfRsagovv%2Bcj5u4I5%2F2Rx3Y8VDH9gBpLDtOedBXR%2FKAiEArIs37U82Tu%2FXVuAo3UTMtdwvpzea1D6NU3u4nfgm3iUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPf%2Fw9qZtKJDk9tl4CrcA8F0s4fslIA%2B05f1MQjHjs8AtkVUcGcoBzVAOYZTiRbSP3dFADpbVRLbvtBIjD6DWqM3v6bI9T0I3jL557MRTGvH0l8szJkoqS%2ByiieWi7OkVLGS2oSahWuxq7XtdOV283B1FNj2ahb0wyt%2FkQqRp6YbxkPlvecQDE8r1UDA18i3Jf2FckZc9Gb1CatXCCZpBfisf0SMYG1hD%2FSLoLSBDUYzw6l89WgknAgmN%2FsZFRhXii4mSK%2BbD6iKaonFUK%2B4SF2zty6SLTosfiahYCIa%2FKSL2UKjs5HHN4gs953EhwjdmzWJVqwTuCOeShRKOQMqoipvDBVK0ZIHkM8Mqtsk6qCrpjb9tNtXzXSBg4rSlO%2FHuIbQeTbumcvud6BqLL%2BK49BUUuy4dCY5II9vwU%2BJw%2FOvMg5Asg2MtQdUHyLWCRtYiDm07cIphHYkJQ1nON5F9Ct8XptU%2FHdkvbCbsB9TxjwDZReb6WnEzR4%2BgL%2FnMVdbZp4Lj1KSf3d5uEld4kcuB25Yi68DayWgWPiWEOrIzPObF9u8L2EBwvFAZTDOI7v2EfTLubD46wvZRJp5%2Bv4yRP%2Bmf9tB2NC%2FISusWEcr38MJJtiRxJeGssvIhlb07Y2q4AQwEAZuEf2%2BaDzYMPvpr8MGOqUBbwHNgKqsy%2Bpk5m4EempjTEzzzjlNRU7sYjvnZ13z0k5A3ogFlKt7u4Sh35qnUQghM%2FwLRL0si%2FMH2bxKBLAQb%2B20cbeJpurBOvpgOJK0ANGFIT4EMmYJfC3FUyScqJ5tht7qQUQD%2BGwQ%2BFhyYhWgHvQlWU85bIsHjLTe9XU%2FcqID69nSLr7%2FV%2Fhjx56oJ9vdCSs5Qic%2B9WMAgGImUSkQINNCy7lx&X-Amz-Signature=d6fd365f3fc1da79484c68c454f51bae6d6a88071603b7bf37c39992239bbb00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
