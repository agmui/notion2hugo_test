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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAKYN5YS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEx%2FtZbsmKS2HNso9Espq05EzGjoq8bQ%2Bu8ab%2BQv0LWYAiBMb6o8LS3xcDntGam67hpNOWfKG9%2F5IN3s8DcyLbclFyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe35xZHeUuJO%2BL5NBKtwDVRyGQSvwRv8hbAYXC65QH9YSk7g37SszbWb7k3s%2FZQq7oI%2FJgMdZ8fIipcHHbKwZVlhlZ06xU81%2FbjSn%2Bhm8ReosIQ3CQPm2CB4gWDOljnT6l%2Fbms7IjlWe8rVr4atyi3trygWaEanMz4enlSO064k9943KHuiwgoBnEzdgpX%2BGE%2F%2BndmHnpe88dmMgmjJLXj0NzUOcAtaUaUtovUmABy3CCT2WebgG3TD2O7dRymaHVWNd8z0JUpNRy7MyTEaoT9OJhdDkcZ5wSLz6gdAHaoX%2BfLKrEs7LNgpiHPYwkpmU7DJmmW42TUkaNGzyMq0CazSEtwOKlBhXboJNDpLBCjmGWPOrkD3Q1e%2BZarRasSBnAKsKgw6OdF%2ByyZYS11Z4DThUgca1OWER28Ox%2F5jM56rcCy7bp3wKFHuFmxRah1hCnYiWHOa%2Fl5QIymufd05pdmQMwnAOQu59dDudlZDLYiRqcqSAM5cEpX3PeIZnQnbI5Z8Xq5BQXQ1sk49jF7011GDPO%2F0Z93enWrCA4AFiyp9nq8jT18M9aXMsTyEP%2FvuROwKmcSSVJ%2F3OKduVb8FO0sc2ieuEnGXDIMjfnrhb2xJWlERgqGLEOmBdU28JvJuWBhSCPYdTkeW10Q%2Fww%2BrfuwwY6pgGbbx906kG21GFaX4w6y1uTEDSDVIsRfRA0vPgQ5Oi1KDBaDF1fn2x5vJTv%2Bfk4nQXa%2FByMQq6z4nANGELebLMKFfqaFcrK%2FA1KBCj1Z%2FTbBX%2F%2B8dTcnGbLPeTQyHzLSo1CE3KZ1IhQLWAk1QIH4jBP4ifXBkYrGT5%2BGn039PJrNXz%2FALlKKVWFDApbr%2B7RYWEm8agtLTNXi%2Bwr%2FPKoK1EDvUtNzbqW&X-Amz-Signature=be264dd6a18ba7fbbd4adef14ec405bbc0b1cbaf131bc627c7e359c7697b01ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMSME2F6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdv0uNTEC2Cs%2FP96pM9oV00PPNPUHp4deb50V6JGdgCQIhAL%2BadgVJ8W6bVjiGlAil6Z9JSYbd8x95PimUUejGigL2KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJwJyps2iyQImENvIq3ANCnHK%2BP9sKrKgMv2oOUkW7z4MreS%2FlxebR1mpNlwXzWxfwIh1GsocDBpkc%2BZBSVB1GiPyvWgLNG372zMYnrYArmW1zbY2o3JvS8W198fSKZSFFmubO%2FYgWILSCx8UaTKp2mz11YzL9fB7iHFvbdqlmltrBYBuhLkpnfXCBKHxVoGSzBzDtIWXWp0p%2FZG0D%2BxMeLvQhBX0GOjVRaxsGUc%2BG3oJCjJA2Xe0Zf4jEFMd4xGosPizJQATMzRGeZL1Oe%2BXPL3XwklXP%2BPbpYlpC4OD6zNIL6M9iYiG77TerexbRWy3FnyT9UmUlrpvFMclSVEN44u7Sr2Zs0ICbg6iWYSst3uMSHXEBzzxFV%2BXhylpysMGtJwXTbYn0WbXaVC0RafKxR8YReYnQuZyvjDYabfNPTBTUs95VHQ1c4VJMT79FuDeuDlgV5XiP00Pnsz%2FvbxvOFDZYYC8HWDE5Ww16Gqkj5MjsG7h6ylfw3d7m5mO8N8hwjJrQILVmKRzyUPWXPKPZL1tv%2BTcMLnAlBN5nXYNKBP8%2BV73QiLSITWVE2tCqdfHN%2BJj3NcDcEq6BzZmWKHXEsLNjdoe7pUW%2FIRZYq1z6bmHBNrzmTMPhX5s75Bn3yWofzHofdlrbmft9PDDRt%2B7DBjqkAarDvgcwwAZ2BKoiFQHhb8pj8KZDZygTJ8bE4XgjLxXSxIX2aH1Q%2Bmy%2BZkbYe1r4kZFnvNwiknDzTYYTpG2jdu8TraDA8j7p3kluzUoKtCRyZlfJsJOKM3lQf8uLOUmTecQEHlcY761wV6rmCW2GfBRmhamauyTHO2Zqr2RARA0tMbHI7mXCN7gQ2X7ksXWiKRQZNq4cWGEy%2FApVRUaNDPeoO44N&X-Amz-Signature=22b1acf4b026f63e4d5d8e0c7c3169296a15434e0ec427fa7ab4f0ed02673edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
