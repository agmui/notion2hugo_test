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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466343UPOCV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDU08dPEwmYC3Hu6IvqeExZsDha609Pjx3ap71yRgBXfQIgeGyxLTHoYcIQ7fuXOBjbVLVT1lroJX%2Fna%2BLlfXfRLxIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNR34Qsl5VKJgfx2VCrcA%2FH5BixQHFCGOFg%2FPgoWSLyCQFpaMq0myTMYVy8mVfv0SwbZMNSQuTpbDAlYDM313Elztdaw03ttXjSf3kQHd87OUiy5MicIqmAQlkxJ81yr8kVRVatUd2hJJGTzCnmhOA4Ty5dzxJ5Iy8MpX1%2FqccV%2BChxUmP0PPZz38v7cj9vx%2Bd63%2BBm94Sb2DJk4VyYIumsHVJasIwx6Hb%2FnTrud6nfSviB0q3PWiu5RJ8E0xKCCNhLdnrL4HaiUZqNsTGQ%2B0d%2FzhMTGoHsdzfyqJw6llNymBrmtbF8SJFRRrWrPvNFAj3y8DdbdENGMC4t%2BpEndeXyC64RydEjUCayKKDc0He2tMjYxsh%2FHG6xJ7O8ewSKsKDlEZrwpbT3DL56mE4Aj7IqQ3yMr4VwH6E%2F8qyoJ1yxa%2Bj7zogS3pbzNAD8w%2BveO4Y1sv2z8lHNbZD2f08fCi65L3QxGcKi8JpSD%2B6ugHSQ8zM4VGBhjXTATHyLtRL35pconNvODyKHVmtFNyn5zUAYhDEjJe6INqEuDwSq%2BtfHZTyf2D6ZemXuhv8CEeA%2B1nVFa4id3BFlTCuXJ8i0n0PaynUwDLX%2FzQIMRfSMDQZ7Sp2rWdORwB3VYS3TuUQdbu%2FF9PasZRChvTDDcMPHE28QGOqUBT802WMrmCUwdTy2HdRgOvUE9Camw6E4kvgJcWoWRBMARBRRgsnVzHy333NpVKcJvviLC7ruecxq0iuJBUMD%2Bn0SyHNIUT%2Fh7TeCb%2BdV4H14Ax7eW6KOU0sXtid7eGuTuZzn7%2BMXkbAWszUPAdLYYzV7z%2FEq5Zimrbh9j4S%2BHsbl7FKxKiqG1l%2BfQoGH1uVSU9wty4EreBIm3h5t24HVPLrVMt4wx&X-Amz-Signature=f760288d47271b379bbb56070f5c61260f50a237823d6188efcfb2a7a7f8f90a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7DSS3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCS2nk1AnFDWcuFtrV9breWTWLiSoyUkTzpPa7L66Tb2AIhAO2MIuNFZGjhIzbiLf8gt%2B1iYz6XyfwdInH48oDzvMciKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJtJkrQvZJvYMZUOIq3APTDjAkjDGBsDe2iQyVZ4rQpQjF6Sjgjdp1ESA916yC2xR7%2B2EYO2MhY5zb%2BPxJnPxOu6gf5VkPGQHUKnojReEEiVVM3ThbEYExGTZ3o6aFHqVfNWy55px6X4S65W6ITGpWkbMiZG%2FPQAYVG%2Br2QmsisGQCcUMHaT%2FI6Mqsv6fDAcRzOevXmR1kNmnrSVFMDclBdR20DEGa7H4Gt%2B6b6fF0U1hWSmuR4wnV3MSam8PCjdfSUkw86xNf5XScsf5N4hHN%2BL1xJEPXodNdqQLtSX0iHTfamFtlpwPA4Akmu6%2Fr7XH%2BBxKAcHl24WqF05PHVAyorNd0ZiyuqmVB772acYIvdN4cxK5xTiGJyoYfSc%2BRgoC5ezzOoN5YfQ2g2PQkJ4%2Fd5pGILz%2FMNGMVlgU2OchFNe56aynK3VtRsrV%2BlExgi0mn9pbIRZtNBF8VjIRuTgQj0iotUkOM4BCpwwmvSvCWSkcoWRoyGdx9ku7He9vjKNLy2sIZAJ6k804UrD3aQqGeAUgogwvB7NBqeApxHZt41SwivFGJmYypgBsSIW2L%2B2fk3CZ22uUu6jAsClhkLbXYWfgO0mvzZeoBYkTfg%2BCBFpyDrLCCRLPQtn2tZDmUCUsERfFDxlEwbegCGTD1xNvEBjqkAUCBk%2FzY1MCn8IHk1sbJY64OB9lxcCMaRSqJpsd0DrkMI22l9a3IVexcg%2FmJ0tFrQzpe41R4KxD%2Ff5PqYO0p1sj13ljiqF17f02csmdY1wehOtNlw4zXm1S%2F8xZwmfj%2FU7pIQYlIPTUUUltm12uFHOaTHJea5VHXODezb7HrT1PfrUZJEp8u%2BteeeJnBbemMa6hGu0usXqxDz6Smd5yNBZj04mOO&X-Amz-Signature=0a2878e40afbc8499c011027f85b328bc6f2f9af4597912b1ebbbb2c78903b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
