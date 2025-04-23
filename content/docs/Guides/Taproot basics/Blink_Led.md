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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVYFEIHL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGEokF9y2kJKk5hrS0U6NyqrHNRH00OcTTMk1RBLYdXVAiAPY0zHsWOJt03t%2FOSLM7zg3wABuPmM%2FiyBS8UbY0pipCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0b8vvfh0OCdTon%2FHKtwDglrtJY9WM0TKvLpRcmMzfuq%2B55mUrWjkN3dqo15cOxC966CkBDTZ5iUrkQc0JfYkKk%2FAm%2Be3glRFeS7ERvidPg2KxJTu%2FhL4kZFuvbe2hgJm3bICEYBQ8QmIfdvec%2B%2FcRYX%2BtpjtfZO7eHqA1nFym41stM10NBhabmtRmq1uHwklZnZqAcdXOpg4G5zyJhNFQU2IYO%2Fj2J22qQ3k3QVQD9a87cSJmyATBXfanenCwRM4xAHnZu3FyckYSbT3drAfjHI%2FR9jq2MtyMjPeKZVwcsFnxiibYylEcDUWqTvM1MtE75wTDfUy6HpUJzS1c8rA0gHTo%2FO9%2BGHvEf%2FBy2a8WwTkXsU01EdQrkg8tdV2UtZxQ%2F9P1rRgmeJhSPsoTYbPfANnRGesHTcVqi%2BZ7NNzCDMbYpYyGR2nRuVyPZTfDW1ev8XDJVTaA45wTOGKZBnbN4v5DohafjPXWfEjRaJrrHuxX%2FcQoBicwSzqK3tgYJ1bDElTlbPZb7wWCnQD4BgqF12fZYMSLfGXMFTKCBiZwkyhSdUn0Z01rzTaQUNC3TfSE4umcXD%2B9WlQd7T94OslVajHzxDtUNnGkEBB2gQTmIxsM3eQ1Tt%2B2a%2FFX3WBDJCvKIbhuerLm8ll7a4wiZClwAY6pgF30ytc8uGIFRrNbFaL%2BPOVx9DqdxHXilrjkuAcH%2FQNAga3PgDcqNZ9GbSCqIvUWg1Zamr5NFot%2BTg3%2B8Lv8N2Qyig%2FTYKkbCqXPMEylbbnFfdztCNbqFosxvEDSsP9ojYmw1pWJ29qYurJZIVYSp2s5mlFwYUVWzbCpEFV4G2YkNz1YM2M67XhGl3vuLNPetguANrEZBzOdwVWhiRlewDi6n0Z3p3o&X-Amz-Signature=7e949b6064302b6902e6726a3ee51241c2d85fdd0ccc9e2a4b8cd7fb3a846b20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNNXKJ4J%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIEG80ZP72EIH5KB1S2aY6K4dK9vruUZJLDCpnpR2FrrFAiBfZnA%2BT57Yw2BmmvY9GdN0dnDut46RS5UIYCHDhK45xSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD8yjZsDARUVDV65DKtwD4aytzlxR3SHmdXhRL6E6XexOcAzs0olZi7SWGcbMAH%2BMwmGMZ1HN4f6PXVhvc0cHPBFS4vpqGwukISRlMxM2FRtHXyJUtvknXWQfFSIox2uEJ%2FibkOMoCURZIHhLTMh6GharZrMfCvtEV%2FPi4p97Ew9E72KBPQpLlARP1LyM7RfLqeGb0YpgCLudBu6Og8Xe2Vpk1iibj0SpD1TNnCZ0rKdnFARc1W0Wpw0GMysPzO6Poe9sMfX1XOjDJZbqgCfnOiFJCj07chzT6J0SfEdkJEDTAAGSfFngq98ZuziOtHi%2FFTEA%2BMJMboAoOZhSf3sVHYGU9yUdUCOLIBDXJrGVE1XYKbJMm76BE%2FOhY26PVpVJmNIq4C4rwZ2EpvxSnFF5hZt8Bu1BTh40erl%2BiYXuHo4He2%2BBySzcoWibvEcCI%2FCEN%2F3V1OhgJF31kt3jQfPaxOHEQfE0WCA7bZm9sQ5XIN8hPbNKNH%2FCbUZ1B6xydqw4m3fstCcSb7JsZD8tsWanpAUhJSoDMesjClFf8K32vI10bTRlXrtK6dlYNlyGDnbrXhoac5IJS673kAQJvgWp1PYEJ9y9cY1Fg1sIk8H%2FrWcJYOIhbyqRK7ndD7mMkDh4TfWkQshxFsPT3Uswzo2lwAY6pgEI%2F%2FjAxu8ZHKnjucZN2KXKkijdyOiWOH1KLEAOvK3iOifjbx%2F8jRmT1eqJRvdpLRE%2Bely1LAnvzUq6dDBLG71aCSnRv9wyBbBgpEFIXDxGcj24FdFd9J5oT6ET72mciHOn529patJz0iIWroTn2y5f%2FXp42jqLChpcF3t%2BmcVRd0rZ1ZRLuCbRApfFqmxmWohTipMLZQkiHvVniDazAgUeKoPxCUlV&X-Amz-Signature=be430518d98315bc73ce2140e995b3f35b4b5bf6934824a53cba98737071aa65&X-Amz-SignedHeaders=host&x-id=GetObject)

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
