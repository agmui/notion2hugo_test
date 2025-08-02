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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EIRC2V7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3d0w8ILaHgczaRrRebdpQWDnV76ttp1VGfLlC6oLKzwIgTXoftKdiiemDz6fbXY7nKka4burbqozxjrYJ28WlFcAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDEV7fiJAt1TYIzdWPSrcA1wCjaeuC31gpBizd%2Fng2QTcNddvtM%2FtE9fTLTyL%2FdOIoFGUumIrNLsgYcAjcG1RgQktOPwQdN4RSVwpy8m8wA8TlbyltKjbhk60UXxX4fuTB5uSmnYPV0TKILJbjsY5n5q9X5nopJssFPHXHFw9wLltVmytKizU6WIPyZ3K6fdK13YYzjRENILW%2FmdiJAdYH70TgvaWqv0fSUOKKJWuhcPfrJbm%2F4Mib8aGzGSXBlNXkDS%2B%2BJTiLjiyS1gXARiK42kzmAJuo%2BZAkSdEm3o739vXPcRmxUmSRzgMWD3xLOpBMLzt0GhkbUWRlo06r0MNHy9ES%2Bm%2B3aq284l8G2%2BrwYjj9J08RoLGBGQ0EuqH1byRZGekFBaqAZ3XIev61f5Wym0M0aj5AZiMBO02RqI8Ji3g64GnWuvN8jLubN8MTqEtSBel0q9YUeX%2Bwap%2FnEQE%2BLt3bwcjJ%2F0ERSVhW%2BKaZoxxw9P3qTCLTI7ozNIe0IhMAOe%2FsjB5rgE3%2F9RQ%2FSsJeZAd4VCH1bY61I%2B3DgsfHyuMgTG368rL0jZn2tjE52%2FcJLNdnZQtQFnWBYNb4yFmpxPIetIXMXtsu3qsTHtmgUSPfA%2FOkt3eNl0haHaVssQORdMwCTHK0Bdos5T%2FMLfwtsQGOqUBx%2FqX1Y7V93j5uBlYqkehuyL2LLhvUMPN3%2FQNfI%2FQ6nendkFuUDdrE1eivekGGVodMPD3UtVH4CAyA%2BuCm07LtKB2OmQZwny5Sou1nVsMvFuapG9S2cPaivMtAgUJNc2vhgarMZYT3t4CaGn4FYZZWnWI56bsbt5kgQEP3YjE6uK9g%2BuRpHU02pIK76P5NWJlg0R0y3vUULLGDRknlMr%2B8QNg0U7X&X-Amz-Signature=b64fc4e86b588e04a52efd566154298e5d86acf8a5f2afceea2bce44d5adbef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVDL4LT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoefUPoGZzGXf4JF36t8tXMTaJmsAE7tmUQib5UigBIAiEAvR%2F9jIK%2FiHZPOo4SLN9ZY2erDaGeZ1PxorjZk3XWFEEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDC2kwRW3c5%2Fqyz4eOyrcAwTKLtxv9INkQN%2B39skeHt%2B3o7qWwvaL9XnlwOrxRcIf5MJPJ3q1sH64JFI4WCZUG929F8hAn2vGWhm%2Bflc%2B4oeYZ68VCkYNC1WGktffNe4TXpLjXDCPrAkQcbxY4kk1LdmBFjx29PRlegfUG8pCTlbp%2FldCjVubuqYBj9AoGh%2Fp3nrq%2F7xKldC1hA6Pw4sbKaINJd%2FCYsNhTqAC7pzQ9AJQr4vIYRAEaBeaFTis2ws7MnMxkpfYhdLcoyEhvSz3LCV6VirPRgH6wmq3Z0GbUAwKkidsMU%2F%2BK3m4F3TBrYzcQ01aau9tPF%2BzCk%2BYHQaOQ4qORJwzTo4xFDJv6KHqT8seA%2Fx%2F8W4uFuKoWJF8tB2vT33UkYbVsV23bOFPP8x4erz%2BN7YfXrNlDaPkUmISnHe8BP5rVZ%2B6VK9AJvDqlFpL1Y5MmG8H4peVK1lHeMc3pmaGQBGaeRbzzrv67Pbmo9WkYTTlNh07AEuvnL2VuvmW192CI2BvQjYqCm5qhjklkHez9KKUbzywEe1yVoSDiXNlCrZDPVFw%2FUe%2BQBwbzmm5oUfbqdtWInfgwDnGPqAddTUcF0iywf3Xq0UE1HvFBUO%2F50wJv%2B%2B5D6JodsMS86I84cKPZkjj35edsiysMOLvtsQGOqUBjkmDyLrbjXVJCK%2FGckwp0SyqMuS%2BGbqV0hci%2FxUA7x2M9z%2BnXmeEOmp0d8McRbSt6qTLq0gF4JK1iHeyGyf6agMLR1UvPGBAxVOMOQtO%2FDUf7hqKRMtgY0KCAn68%2FOZUt99Prjsga9%2FCVkHy5yxSGEXHZiadYK7ffK8iZkf7ur3o%2FjpYrnoqcK3aqVEbrmAjmF98E17gBzWKOgrAzf0vIWgS2DMy&X-Amz-Signature=bd9252f323fffc1fdf58853244b866a2118a532125409cbbe420c366b566bc1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
