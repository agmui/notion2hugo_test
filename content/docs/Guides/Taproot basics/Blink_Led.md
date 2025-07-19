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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFAO35V2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxL9Msp%2FA03%2FyfIAAGO4NkhVO2qD0bVLGiDAgO4YsMuQIgIU%2BuJ983ymmzw7NzvPOBlF4QDdi9%2FrFYX3wy9q9tNCAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM63K%2BHTPGH0BMuX9SrcA6BGb%2FZrPCMu6VTQxqipbF44mktkIPn5nK8ndzDGRnsYjwHF5oENlUSdoQ0Un3%2BjxsEMvdMx3k%2FnEl1elGn%2BJCHKNrrVoAc2XCl1e%2BnkS5Rj87EiCvUvuLFLPYxBiUd2fzSRN1LgMBpERuIfCrGVgqzUuYIGamrJ79qpZXDVdYiMBzGM9uDyrSueIw%2FQc%2BFjfrIy9y0naBuQ%2FjCCTL6DhG1yzsynXfGZvkxmw6X6IO%2F454Qs4DGB729YvsYnj398JU4kFahUbakk1hWOloXy7kuxu%2BLN5dITqapVu%2FQa7vY05rpoTR7PWZBloZw%2Bs2JEhrQu%2FP9hStoH7bdaV%2FBrsBUJIP8D3FspHoSzjvHMNqDr2NWnRA2RBaBLSnhRHQn93lGrkzun6hDR3X%2BeTNv0bbOShPKrsi8%2Fg64rdkfhS2OMIro7kHK1qRzgfxHHPDQT1DHOFEAyOZY9LU%2BtbHo9vwbOibxGr39FSPuBU2v1YtqKgwhHdRWFi%2BpJgepYsDvz1q81iazrKitC8Am02oLNqojDi8PaeT7Qs74eHY7WiFwJeRGZrIzRSrXecdKmJHRFlpz43xVQBELK88rB9B088Mn5IXmZDsNpzgzSA18gxIEPpor%2BZtul0MMkOBzFMPXE7MMGOqUBhMVlniaT0FKEbSKzCmeHoJUhJrHPDcDTcs9mabITx6d7UjA700ivZXnuCwVzdYNxYnEGsWOgxfHnxYXCoHwc6DNSsOgyP%2Fjsu06FNZIPuszOIl70RKJ3JUjqCH2dCj4p%2FAJLI75K6V1rbCWhsVRJ0UUjPk2OsKWHp9VwcrztQLMXFAiD0Z5qzTYOPdt6qSOQ%2BS0cFmMs%2BXzKfWgdf%2Bsv80L0pnsT&X-Amz-Signature=bff46dd13fbbda5f99e8203c3d84957863bda0cb5b79ab620396a29c77a0fc04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K2PFBXU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp5%2BMXLuybrrebKNQl7%2BxaYgDn24Mdl%2FWT75aSd8YqIAiB8k%2BQzcmiGF2clHg96iW7bEK5yjRlgZgF0auNck3EViSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdGFQMGOzsdJSzZO%2FKtwD88svlOjSPYjQFzYjnlhIY2Ykm64Z1WeIQn6cbL3aksDVKZaiWEjrboRRv3uLwiqbaOodaMwS5a01%2FEtbXWTLGvDInJPvAvWhCjRAsIeJR3CGYpez8fuRg%2F%2FOmykK4zX%2FV22eSNnhekMg0s2wvYFSee3HQ07YAvYjlBDxCBiSPO9u8rOtvZNlND1v0qD6GpUH3w9t%2F28TqXPuDzgcCt4WWdeSbVC528eAuula3xxvVL3l9ot6vpFHfHD9qMd0GAH%2FFXQWFHey9CTz2z5nMdo%2B%2F2%2FKZnIxVV6Vifw35OV3VzQxlEcyXophPeyz8y3il9BtV6tKkqBsJvQwf1WWKFACJgCL73tDBAjR0XK2XS8t61MIuilmZQghHd9sq9WKnUNSU83WpXvbQn7CmOcs6YTJdcA%2F9m6WkvesK9M1sLT5ylzHPQMoKJjNCMAdhRp7nPP236PK8FqBaiJwfFXHHY4y1bdAFfvhnpZrTLasqc3YLzsxfoX8QbT4SYjKKHbAHjubpDJkDoLghNx6vuEbsbkUPxBZRdH09j1j%2FVwYICpdONTCRMvURdROxx7RGCYRwk4UdZiN4Gqm%2B1OWeG7AkoS7vfJ9za1YJKdkDN6hBjA%2F2TBpGpjokVz1b1lUEmwwhcbswwY6pgEzXzbYAfRfqvsub070vtsgXZfJi1qp044zf9NWJ7rNBYp9uRHw7kfwF4DXRI0Ct7dL9F8C0RJ%2FMDwSalncC29ewbmSpDFqy%2BrAysABYyqqGLnbmWWD3rk6Tm4GtM%2FXrNWHUAmLahls1TrSBbllUg%2Bmhil%2FITkU1PYeajQvhpctfzE5JQABbwaZJDb0A30h4chrW0aGJjpQ1jF3CTln7QpqPqPz0C%2F5&X-Amz-Signature=b2ee697a16adcc607b4bea08958eef87457413b94ddae0acf44efe3efa1674e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
