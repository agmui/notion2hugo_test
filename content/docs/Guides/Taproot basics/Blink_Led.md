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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSRRI77%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDY5jH%2BOoeyYhu7fQMWa1MA5R3nWNu00aYgNxLackHa%2BAiAOGciBtergo4OBn48%2F1v0H0PQntxZyy%2F8VRB0I0uLoCir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMdMmpc7IDTW49agGUKtwD6iP2XAjTMvSI6U8mf1f8DB9Ce1NyPsdYvFw9yRfJqV%2BJZxrKkkkyeXyzOu9ZPCXQtqEjjNYeXphbJUHKVYjsLgk42r48RMIw3Ltzzf5H0kZdgFUQuHP4czJy%2FOLca35cB4MeJpuw3%2BbnLmjED9yZBHO38pb%2Ff6AimLgo5AQ3gLks9ALwHHlKF6QroXo1oAL0z8C7Gd21A%2Fhmu%2BHzjBQN%2BUM%2BURV2bB4n2A9S7z7JuYRITNQaJmwOLduxtMFTmPvjlav%2BFYXN%2BGmS4DuNnuKNH734kO4koWx4I0DOi4l76pDZoB4CRsMSFI8dDKtcKxBoBRK7dkEYnY6b%2FCM%2FmfwzN8%2FmAwhqcri%2FM%2Fq1RxY5fBvNzWM5zB%2BBl0PltH2a9VyLVBHsR63tci%2FTCsmqDd9n13BXr65ymvISsW6EkBlrMh4SPaGJmoV6njnRme61pOM5EQjk8PALdoopPv7HVS1%2BxLJvl6qQAlMaYIafIdlQt9q9IGsTNz2eBjP8CtzmsOw0%2Figxv5yCVH7CMEuParxFw%2BHonIc%2FPayq2cs7xseaQJiyWe7Ib49TMjFaVB2eOSPxwuh8Qi%2B27xzUBSr8lCD8wUG6rKLtQAOzyoCeisOfv6ubnP1nX1xc5KoQEX4wnoSywAY6pgF%2Bz0ZS0s%2FYwZstO%2FVltiBTOsrXd7YPLSrAk4IS%2FSsei2aOl7X%2BPamxVqLkIAI%2BtPNWeKxsRQqnyDcbV5179GkG3kLOuT%2FGVolTEiFt4arRG0TE7kpxh84UsR3oF69Tga%2F20sry0eJzDcYHz6g4tKN0OUkdSr80IarJIeASirFMljJNW8P9ux8zQQ078adQ1b1NzDUlgPc6lguI7mLZaeic0K0VuxE2&X-Amz-Signature=e0e4f743558016b067980e4ae08179dbacaea86daec6723d6263722df909b570&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG3I7RPE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8vIf9o2f0GxJEK5Kha4Ju4OrSRXHHuIL2%2Bqh6hEaQ7AiEA7JZjulnq%2BkZhlInbujxmVR6wysAxUJuXs%2FpVQ%2FfL27Yq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDPuG3dN%2BUudYK9zJLircA8bGqFe3yCu3lFPapVbVzcbJ47CQ6F9B4qNTLeAwuGx6QE4xXFHK7Gk%2FgSvPKpZu0GkLLsno9L07sIXD6X6SXTogIPhYpVwWZhfjLNMlEIpYQNNE4ze8bHbFkZgXswSKuppSl%2FuJ8TLdCbWH2riU65ledfir8xLQ0YCrAE0tOibcBQTsSs27Lu9F2R4GBSEfHjdKgfID%2B6yO2HRAZyTDI1O7r6ZIYaX52PHJkTBpOF1%2FvoYNAlwdoiR3%2Fq7BGzdnOb8OtEw%2FWfq9uYUNW4MmNQN0vVQiapBroeQXfmtOSHsh9i8reFvL9BaWzjWVcnDSU2cXwZjkvJoItAQqgEjHZ%2FXRSWcQ%2BZvMnGJcTKrmg4ZHtTInTgYU2SOQAEcieOtf5vNdW7j%2FJzgo%2B3eyTcVgmPPi6lrcDHkC3SGsWg4Y4hUdDW9u8mjjX844LonWuXjiV62tit7ailBMOwmp1nh22uTtUiWHCwI2%2BQK00CNN5PVl1ncltzxUZRoazSjrty%2FKxE%2BRdxrbCBF8P7q4HhHBKII9gPQQzyrV4lmtfK7aKeYU8rMKXRtNxLBzRvi14qsdVM5b%2FISZR%2F0G0CpM6v3HbxXQsKSJ1%2BBPFN0RXgEQ0OcvqKsY%2FM0G7H9W7TysMLKEssAGOqUBYi7RFryP2zhn8t1IA%2FZBt%2Fe74U%2B1nS2od2dmgGZX3uNBna9%2BH4pFzuv371PAD9VrNxVhSX0XgRKrZEGXlfsV8Y9etSoKfsnnBipPJ4MFdYB0EZa6ASmEHu8Y9fUVU6zgM6xAxSpC0OXr6Po07N1J6vQnpw5WbqKa7s4%2BJWT%2F4CqdRTdcSBINgEAkKkDbxUFOb4AINhmvup6WPQgSm8QEw8EuM2Wf&X-Amz-Signature=77d723f6ccb036f70b47bf4a0e783602351c4a154a6c9b5d6af9dec49bf3110b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
