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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ343X7B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn1VUdosTE1VUW%2B0qos50LDOW7nHSG88xC9yF1LP32YAIhAKsf95w8gddOkEb%2BDVeyKumKBwreQr0k3psopIRbw1nzKv8DCHkQABoMNjM3NDIzMTgzODA1IgxOQpt2%2BI%2Frm%2FwoJKIq3APKSRC%2B5YdvxUVq1FxETz%2FzotO8jhzo54mJn9IacsgRPc7wIpATShy%2BLER7FRL1LI7ooCyI7ObiwkF8xFxH0gglyVGpZsanvNcxuZh2bgnfY%2BY8VHpP64j25UdPPe16xmbkST5FASbrbl0xhpT96u%2Ft0H%2BqqethBaC1vEAkNqssq78eJPUuh6qvrhbQeiy%2FjxAW08bN0ntAsmyAsB9UiTuztGhmJfSayOzJ%2F1atpJtZgskSIzIhPH1nqQX5ajf7MEBc9VWg%2FjyuZLjmRymMu8QszU%2F68T4lpy8w5qeBSzf6rrxU22tqsDY87qcfsHbuofb3Pr5jc6SNhbx20TbfUowVkkORn2l5N67rJoRvHVIvjvzYGgGBzBtg7EjyaZ%2B1VbKzM6aKXG26WNmHuj6Wh7btqMjszhjiuGhMldS4JfK8zytovuLTvKNG%2FVYIuyaVhrtxXdk1cvPzGyTOrkMDJXfRlDMJYwEzndjWe34R0fyOYQtm9zDHjOTHqYhAb0fVba67JWsjiMF0QEGhpHIjVJgmu6SFC6KEq9qOz4TjsSpn%2BarDByIbaUqPD0hLqs40ZHO4PJzc7v5zDAqYg6kJvMENSKIKSbRi5qH%2FZbUOsLIbSNRCpzPiwoa8m9vgjDDd9%2FrCBjqkAUR0uPpkd284W7AzOgsS0FGhrS%2BSGQowCnEmFWTayOK4UThiavUIwXQXenB0zfuXY8mX1CiB36sMl0152oLgMdFrF8qefu3FkfDWzigY2K7ei4h7GfVvnsr8OnsVui2uIWeP4R4wikqLIfhLrCu8Lhx8%2BL1DE8ZKg11z3sRjVChN56D0R9AHp5XMxg8ZkjBgDiSuwdtl1tTrF0H5l3ekdhuioxDw&X-Amz-Signature=6a5e2a5ef001e5b0b608184af710f494cade004da4789292014b87ee09f92410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624MNS5XP%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASyPzh8p%2B9qm9CeTl5CJ9JnpKwL87yOjxCfuwCBI1sBAiEAtthhULu%2BdDMrJvW%2Foz5c9zWBMO7lObg6fuxhBB8anucq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDN8XeYSQP6BrH5WBUyrcA0A8a%2FbcdCPiDTq0t%2BHXXwRrBDIElOHiZ6DP8Rj5%2BFIkQZkpc9F7DQUgRroMoOoobsw4CD5zGNV5B95dkZrSJH2CpQ9wzdsd23NEsAr5YmEmF3kC7m5znMjU7AnDCRTrJznyS5xfAtsyXh2LqWXF6H%2BArKqyG92nbaD5lwbaI0oLEGHhkuEcUkr6z%2BMkCbmwscrO02prTt%2FvMAMNfkM3zHW6cGjWM1f%2F5KmDxEv4AU4VocnvF4pxvGRCy%2F5TUAHpkBZx9VBQzDUquMVVsIk2mv7w%2B8JHZBGsLadFiXWRyG%2BqsEypeQpZFfnGfvVl7HeOShjVUbkVgzHjEn0Igom%2FwXSpagiUAHRqDmnY1CrmJEqw2nuwkes%2FvQP%2FsHXz7aL9OA2Ly40Qje55fgHYNNGT8H%2BRy4ksFuxuLgClo17je8%2FMDYgCwDHbXZWShPcs8%2FisKg%2F5OzSNFuH7KXZRmqMGz%2FWCJ%2Bjspjjp61zpSSnPaBz9UrgkGyz6hA1WxIWWUnW7lwJTmfFLQvDgcK0lgGesuxI2Z%2BwlOfw30jkOIW0kPBidEKP30xoMVJMOpdu4qXpN5AsJKtG7kmCty58eU7HWUQgPWu9HGHs%2FqbnBRed6y8236isvTsM3znYGF8PyMIH3%2BsIGOqUB9tNic4ac15E93aebv6BD%2BhpBUCyJ8sQoFt59U%2FFtNZVNyB%2FKcovnLegwr%2BGvfHxOkv%2BKtNLSsMrlfZL7mBab%2BgftlCfLBNPEceuk9ey%2F3qqpRCvhLzGum3%2BtTordh3OSam2S%2FOofc66QlcTxxWjM35xjUzqNrzDgQRQXx5az3V4dr5QGNETEaKNeo1yYkjHRVYQISM2H9fKCEqrzp%2BDLu0PHsmyy&X-Amz-Signature=fec51e19d3539ad79fa54b07e16d3f90c3efdff265dd1a1f1394ac7e9b0dcab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
