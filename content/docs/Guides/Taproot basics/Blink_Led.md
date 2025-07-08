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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F2EXB4T%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8u%2FgKqwtk0H1TrMAgYh9A1d6J17LlG%2Fb5FhKC836DGAiEApltZuEUOELniP7sLyNZOP9fIg%2F3bCNx2LMmxpkmCeKEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhNG9sCMECMUgJOCyrcAz%2BVt%2FLBHPEwgULR6NC0uHwz9NeT5shfHF1kqXbDxWZtNFxsec4wtg9Ql2pnk%2FiYVNWyP3s1GCj0uVtuT%2FS3%2FOLHiwYeeLDyAVwgAW0OC88cwHXlHrJ2TmALVw%2BX7s6PyolB4lOQmo78H%2B1aXChDR2z1ZGj3ICZSNwrmyIEoDkYoHVFcbZgxigmrya2DsOVwrLOT%2B0We1GnOAjXOycM5mYyx3v8t36MuOXeAUvzkEZ5eg4aHGgNvZiHz6OTy1pM%2Bhn4FtNZwEl8z07HdWQGM9X3zf1MUDpwTWHhAswKpM4odVcE5D7QyYxDVWtQPE97hn1njY9%2FmA%2BYQE1hfgNUa5CwPAwFpPiTqXt8yDN9eu6csYCxfEpN52BsXoHrkk1r25gbDX5ULn4oyv2u80h%2B0VXKwWW8BnCdK7OKHh9hSSPFo3BgjvCeDvDhYsbFL3BllQvMHBaD2W4v9ssvBAOIx5VNo6NZaSC7PmZtsqegZMnJKnVJOtVNVAuo4YDpSvgusgOHwTWuPukLbWopbisiid52Pj938V2SYR9t5MmsuoH%2Bd8QhjvbtUCIlq3gSvHOjG3y5%2FY9QR3EdWbPr%2B%2BFC0%2FJbCa%2BtbsmekWcpY3646zsYpfSHFNiheyZZIu%2BO0MPP%2FtMMGOqUBx2MDkyz3kfFlU3GpZpXFQSz9KgMqSvtBdSmynvjkB0y0VHd0Y1Sg0cw7pdJM4pI2YYxSiBRPYyz%2BSZWaAXJh4k1666oWlTUnAnfVnjQEdeDo2NufPBO8%2BFLuCfhG0dVSZsOkbhkokbYkb0%2FzF8uW%2BSJ977GJF%2FJc2N9pwgopgRx5psh5m0PcxuG9xd%2FwsHKiHr3WS9i695jPW2%2F8ggiuEHbp%2BBzy&X-Amz-Signature=09d23be9e4f772c071bbed8334cacc2e75e1db305a186f4066178c82dec85f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA32BOD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdw3lFSnsq%2F7m8PaY%2Fc36bxWV9s01AKerwUu0c0Zbw6AiBJ5o85c9ZjA3whbFtXx3N%2Bl0ZrQ9Gv%2FwQjonQNmNl%2F6yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvIc7M9KeFkzZORGzKtwD6HTO4XQEAasaONaILRK4Bulq0CnWs0ZMzWE%2BkjW0NyjnNkCP%2BxVWowmR4boY3hHAQ%2BnIwJtIvZsySUyYGgwUrkoU%2BwYMzWhZbX1gTRl4FHuihltIdlEGQ5PODJzXir%2Fp7MqPmoPdvPgbkZ3aN%2F9aIkJo7scHhdAOVsBkhibbL2gNeEy2PL9dKtFxdpqnRYzYot7Ib9132EuXbvOPxlN3zZyYwz66zU%2Fp0E5q8TPQGpPSrF8Hj8D%2FFXJXaXzwdr%2BqcdXBF1tcUCqyIcNMqTdtdMCnJzcon8d%2F%2FXtWyGLcnI87kqbSpkURyTSjKGbBFAVaEWpyBOBDtCIf%2FBN%2BxYQu95lezfvTbrg%2BOSwl2QLLegOMIB4WlHmrwCZ8eHgCbwT7ZB3DIXUWqBR1aKk6CeQ2xrLuMPE24Wh7D29z5RlvE9Fmrkj4Aep%2BRPq9CH1WOE9d8PA5ttmbS%2FrEUx6QmVbGlDYse3DqZLIUD%2FIMOIULf7tjRfuxQK5sxHuM3e25ShWrsDmeZgTKDN73IYi01ic%2Byv947WUGYcIfhuILNn3WWaSv1Ug6%2FUcNpJXwxNtk5hOEV6dvOyq8y0gTNqgml8u%2BQQVBtqNSG4ro9HanFwqwK0SyOUhbTdzqGIEDhMswwYC1wwY6pgGx%2BG%2FMqRQxOinL3y9mcIwitYvGIS2XYLN0bsgWOBw%2BUam0MD2Qx%2BIs8gdXXRvRq1VIgS%2BATq0OuueOYuk7SZDzKzZs44X47AYioGIMuqZY6GAzyWBQL%2BrNjgl6h3XQSOpwbe49mUroTt4xly8lHuG7lAwr%2FX1AR%2BqgulvCBiMLR6ndXwUurC%2FZlRNjfQ0lmXw0QVdohcprFHo3WWJtDkqonQMiKB%2BS&X-Amz-Signature=af6f1bddf6a51b4cc9a55dd4f6a9f71307c0ba73a6b919f46e4425c9c720725f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
