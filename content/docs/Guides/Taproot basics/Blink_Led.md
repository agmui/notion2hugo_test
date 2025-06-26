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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSKDWOP3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAY49Jn%2BphMJfOBjcHR6Co859GT6M8iDnZtDxaA%2FtA4UAiEA%2Fo1ZK11ukavse47HO0r%2BgdrDiU3Lt9jLU4MarsOp%2Bxkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNA3CF%2BGy9mjElOAxCrcAwzbeUltiNFbteD3QXQO%2FPo%2BH%2BJkENrWJVbMtqXpBX91c9f73QpWIJiXjUs%2BZF2kHcyE43wzNaVawdqkYMwxo6Soe3BTRty10MqeUQwsv9Y8WUs3bBUCuRqcs%2BkwQhpm1Xjyh9aLkZnsGqGzPJaomlBM%2BOJFN77Pu01IgAsaZO2t%2BGqdHPaaAQnkpS5wXtw2mK59d3eJV8F5MxkRsHIyJ5%2FSIhUSIFVrSI244zO1X%2FEPOcJKF7BR0yXdwDQ4SkyOc%2BGdyCpFNgoO2ML4gza6iWPPP97wMZA3jqsppLir8kWzF0WztxFBbpnPOadEpMVzEDsJnvAfMZhsLnmy5sfDHPoawtyiNtmWX8%2FGQQQ6nOAWDmelwq5p2LiLPWNhOEvc7N7wi4O0u3PihupZREizyVQ13Ud74To2SI9SK7p0bPCQ%2FyRyg%2FlqRtDrOMSF6npn8LXQK%2FcQJ%2BTlRUPCASASimaVP%2FomfmCq6lzHRHVwahvDNBBNFV2y7GhoYnXE9wdsz0lhMdQsEBCiSMs72AF7%2BS%2FbZP%2BUF3JUQTmvOve5kvr3Yqk3q%2FG6SW5AfbUmM%2FxT8rPx9W3mpaYPkV5j8ZyA96b0oeD7OZ4hCbQda6rYkI2bvsG0OrJkv4KVJs%2F0MOmd9cIGOqUBXjyuUkDQ4XJQaHU9YJPZVbciFN9DfI9Np1ndrb%2BSNtNJvHnIc7hL2GXhegYIWkgI0qLahboepX9ibedHLc%2BifP9o66pbRjLr2KsaI0mY4%2FW3VNTiIBjLv7bZpU7wTmCIgyd7tdaAbxsBU7bjqSiO1G4t6jhbMpAdqPWCzP8Nc5TDRdskWTSFwVXssTzQlgIh3m6kPQ3spc88DtSd2XYYfCqr8Stf&X-Amz-Signature=c6d9850bbb5c0f8e4998a07c3dbd2c45d06856b7b8b78c83df5dc81040733f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVL5KK2Y%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCq77MPeRj%2BMTcLDNsX3exq9pRyyIdQHPigDzpS8yVm1AIgaUnQrkA7Uc3wQCsdzZu7jCiD3ZF8f82YVBNtZiWq4Mkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDALRPUFys7uUnvrG0SrcA28QAkYwHqZaLzqGPl0NZ6SiDg45nUdG2lJZ4v5UzmotaGAXjX2JgLnK9ZYOxZH6ykqKrZuZsQyYAXuW%2BLXcvVphat4Ah5f8oWX30%2B1Su2vZnF2PJ5LKIfxBpDpgfDv0Q7nqk0yNKE3XgJI27GKrZeIIFsYiuMcUcY92vt3YafIhtfW9a7sQnXLmHsZ%2B97rLxJ%2FingNSijTbgJyZxVs7YLtP49dV0HhkU5%2FBLTKWRL8Y7OcLkoj%2B4weh2TYb2lC0qUeEUo30RS08NDeFjUi1lCH7zotqsLo4B93wCNwCKMGW%2BYJVNs6KePXy7bm%2Bn%2FaEKSN0Ek8VK4UDfSMRkuETTeLhK02hnN8kJtPtgIxRUC6j1mcd0mUGG9o4MuDLtZ47VGZC7YEp0fTCxbkp68SSfBLAvU%2F0tb46ixIZ4m6qhXIWfeO%2FRop09k04YU5uz6IvArYA3QgV0dWnBrIUaHk%2BU9bSMpQs1hwBN9ZokEEa32bXQwfa35cnsyvr3Dh%2FWGRIpRNijCmfH4sw1Eu2EZXQ4DX0fBtGfLkdhR3AvArIqfxk4s3biTTNqmKfWQVsupzn%2B5V939sOW25oB3v%2FXTrfz2366%2BCnW1Eu9Xb01ZuLk7sX1B2KMNRDYroH04ZqMNmc9cIGOqUBj5Ss758t4c9%2BAIPpnd%2BHSUkoqS1qMat3L5o2%2FyiSAvGZdotqNteKMkQio4rownmpgaakYhZfrfxtLfCSJONT2NZ8mdBgXZA%2BSiIlm6imj767YyE1vKA1wgiMQCEYg55ab6icy%2FlGMKXbgzogKfyed5odiu7ta2PFhp93LaGT%2BZSb8He9WATLk3nzUaR%2BavcaMRtiQmyPM5o7cJ5hvpkDunpDrG9%2B&X-Amz-Signature=99f1d8fc5cb525fcde60c615b096eebe8bd70ed9c0c807efdba7e3b7dc03d18a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
