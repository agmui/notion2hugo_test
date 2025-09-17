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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZLS223F%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCaQ7KEu1qi09fGSWNxOmG80rKNl9Vj3aFiTWrKNYPZlQIgf4KMHA2R2YHemkC9rYsKp4hs16tsXzOrf6%2BKMJlDjMcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmGdVbhpOBd8k7zKircA2RPtgpsr1x%2BbrTUnUpFSu9kFwHLQ7bbNj0TFel8KWGohMYbKF03MK1D0lMYMxkThYiTMzNyyfnLi3DZs7M7Sj6nZRLvdOf0TXT0HPIcwT%2F1xFf31jnzOz1iplN7ia2oZ3sQM2BD2%2FgU8snUy929I%2BGgerH0jf3tvDUi86DHjEnzmFvxVUJDOHGAhxNGaQ1SlKD5b4ee8WCqodAlPah%2B19jOxR2ehIlJK34kyGw6XalJCbbncGyfxc9LEmBA0XF%2FWPuBMS95bMFNn6KkDnfbTRvaHqkPM1p8VugYf7rK2zXQJEJGrYkJb7mIpA9WmkZ9wV7%2BInf%2BW14A3X4%2BTz5cRxs51B%2BlFB7OPbaOEWKZ875ucQGl7Qk2DIuEKgiRo%2Fl5Hpkqe0RA53i5yfsNck4hrPl8NzSGxxR01%2FcHif%2BownkOKxbohfMX%2BLwOmTbbC5smLug0MPRRTTSXGz%2FeFtENJAyyzD4bF%2BDCbLlsFf64jc7bgUwuEt%2Btc4d72dwbb%2BoK3JrcRTB5E615ovYMYcTWJ4PbRnnl0VDIYsXrprzddNGtm0IWAMZMhlMQrGvacYzPtXCd4gCwYD2FKKjXRmRDSF3BR3Nhuq0NHXIeV7%2FH09otsd3CRB4k2KRa8a4%2FMPXvp8YGOqUBd6RLPKS777gZ3AEDjHy3rp4eCr%2B1ZaqL%2FNsdVBrqjF3dz5%2BqRXES%2B8lTo74saynxe0ow7e2YVCWz5xKwe2qffUuXRltWOyi2K3u9qUkhWxVrTjJrLszX940tTkFT1XQXdnwZAYvpQewD1W1o2Co9nVKGFrEd8MqxZb34qK4I48QgUo7PREZaJTZnAhDeVthpKACFXVmdJ9G0%2FUVz2m%2BuYt4V7Uy6&X-Amz-Signature=6e34e898a5edbd342b1613a6e6786c6d3384dc1b2fbbcaf60b550a46df0cc162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4FQIQTP%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCyi2ug2%2BYZr4cgOsKnoGRwa%2BbAx3YxJoHxb0ZT2YUAEwIhAJpLNzvLMC2zwwLat3V%2BGNK4QquAC8IMXM7x%2BIMHpX6jKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9g4%2FAuLm08uSSW%2Bgq3AOeNWYML3P%2FT40%2F3sqZLxM0rusG%2BH4yjtrVgWblFNUvmhc3GL5lQKXi%2FjQggT2E3tphEul3vI6cJ85GExdo4FHnJyJG1LwRckJWkqUzaId9%2B%2BnAY5XdgvQy6i%2Bpla2%2BQQR6LpCHJw2F6LaZJ6bywUMNlo%2BSGJWqQjkH8q1vxnLUGj0NJlVmwAfWdftu8Ywvf4%2FuRREyhYOOHkiTUB3y8QzTwUdbIv9nW%2Br8%2B4tmRXCAFFGtMbGa68HVIL%2FWqsZAX6cXLCDwmMNSo%2BOx1XIY8cBoWJ%2B8OJuyHGIpDl6%2BNEsDafvcPBsx1TDbebDf3tRjkUb4ZE%2F5L11Kp4buQ%2Fi7%2BayhJvYz0oTCtfRjDGlB8u4errsE0DrNnJ6VAYPjGV1hFhWpL3Bj61JHkIIHM2SqtdPXiYplqUvubExZrKoFlez2J5MW7dDUxuB7VJIvlRBnZLAc7c3%2FsniAuOgOLkD%2FiJtRpVm1nTTzJ2Ix6L9bRSySrYhEzn7tMdm55fGfO8irmuFCvqwXwbKUN9nXVi5n%2FH%2BhYzZ%2BKvpZu9R6Onu8G9K2TAxUWdiw4gODHiPFE1NuZI8QTDXGAb8pnDTKtVoXEhQyHk2ocY0%2Fbu6JvwXzMKuyh8JaZNsJT0RhVa85CTDC8KfGBjqkATFuT12aW4hEC%2FKfNSqirkw85ZDQ9dFd0ljZ94gcd08oXhlbBUjcPr76uC5eAlJ9f%2F7ouFJuStoeHvBUD7f0JFENO61InUZs%2B%2Bzafi62rYNDQcBfhVp3T4O56W0KBM6zJjggDmIZisekttylr%2BwTv2hRSZaqUefffsrD43nBJtahGthqq8p3xUDQTnl%2FkX7FvIOePmn8bGJC1TbEKM4AI606lu0a&X-Amz-Signature=049b4f16b74f2746a43185b40f448b484b18c44a5422950fadd93dcc2b4b1ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
