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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S74JTIN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8wCWd%2B6TnWVY79YyPYJH1s969UyfXfltdfr8wwTnoCAiB54Azog3SN%2Fx2w%2F0JMMbsDVFOM3Jus31RZnamLxE0FKiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQtepx8a8%2FV50yq%2BGKtwDrFdqLWtp99tbovbzy3p3Vg7vfAV7z%2Fhyg6TIrNnAyF8D1g8PHxW9BGC%2FkDa9OnSKm%2FVRib0x2R4mMbjwlVsTubw2QPQDDXzDXD2MSCrWiCsHWrRnWABBiKKIlJZ5A7xqmeHZZXlU9wCXPmmJJbonSYHO0LqDBMtNOGCJDOitqXJPyQgLezjPyYn2GRFOzNpayfBw01DnBi3z7DuqXBOcuuEoZ6clX7XXapMFXAjU%2FNHylLNoDTWLZ%2Fz%2BHMjT%2BoW5DJ3wPuBgS%2F7iEoNN8h8MPrDT92EHa%2FH3gJDWMQhD4WB6OUoOSNgwi7IRpdfU7UCO54G2Rhg8zhfAoNGTAj2i7%2BuQ3cXrIn%2BdqMXVxC4vvWULvb8IouZSBKRHEKlLhpJxCJGK0KnZcfmgk77kfl76HRqxcIxDl7cnLKwqSJe4Cm7A6SxuNzTr99Cfs75JanbJQaO1Xhf5tNkkz21EdCY9TIkLFgXJwy%2BQKgv8azSbIMjiD6Q13CNrzDy%2FGwknj91as2fAuMs%2FgcuJ%2FZDipLIwQ81%2Bk26JVy6HvouiuSkZVjkW9q4Xosocdp3HL2KkVXoq3vbVF3CAPdhpz6ayccNG4U496X%2F8uldw2utojTHpePuHVqW72KBQ%2FEM14XQw0rqUwwY6pgFvduO5OxeR5%2Btt86UdNbbE2QzLbGNDfox1%2BHj33NWBE6fTcLoZgJ5ws%2FFu%2FJpqvBjeuaGIss1ThaGBxbxnPsTKoHPPP1R%2F%2BKj4I7rf4fLiN%2BYO6gpMqf1%2BsbYgkJspQs8Fb%2BjmKLAFPJi9o25Jtncm6vsX0bQWqrucEMuYjJGABlXl7Ia1pbRMUXa%2F0%2BXe7Ruts0XRESd1qhMOF8XFtJgaCbGW4gkp&X-Amz-Signature=dc38057d60bcc1aaededd9a1f699ca24591c7f911c998480cb4d59570180cfd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BVQL2Z6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuHc7gu6AiEeCP89oCHbCY1PaTNJK9nR8aDt29s77F6AiEA%2F7E7qnbG7q%2BrFguz82%2BxzXKc0OakjZ64mKofwndpR2gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWeBQuVf538Dwc2SSrcA8Yf4zjOGyb%2BwpZ2fYghNXsncrIi2I%2BLsj0jKnBZNvbtgWz%2B9VEp8O9xCnSqc%2Fmi8Ojs%2F1URd1e6YJGh44B3CwL5MYJMgfvENCUM0szoPZYQI6QuPa8sAXfF4MfxUbDVEXmxhlB4UScnvKraIcvEw9viGofldbvq9kBgCp0QRIcDA2XDU%2FL3CuoLKt3WaHXx7ei%2Bnx944auCXuLBpKwTv3OylsoEDrWVq1ZxLhrEb%2BcVoBcH76CtFAbCgwDYbIfmt7g5ZIqjXhRyTcEYSuFmr0IfRtxBWa%2FPL9zCxtGqUDV17UZOE6S0Or8uaCw0sILSEcGvxNvz7VHWzEMKEOpSI45czPhnpN0ik%2F6BTJI5am4LjwjRw2H07MqDcXgAHkfTbeddvrkRz1W6b14Bxq5uq7n7CBxjHwQDsFq4i0C%2FaVxpS1rosGzHY67iOvp7CxSS6JWdsvajGGb0YuV%2FGj8nzNg5Nyq%2B1Bul52EpuVPx%2BwK%2FpuY8SufIffO8lsmvDCrXSJyOuRASyXzgfN5CLtdC4jUnqCbWkr%2BPliUhIXFHmgoRtI%2FzJyHTA1OKIgiMA1Rj4BmsIZr6aqpP8AHJuPSOALbhSHEfn2F99FySALgjKssawBc1uiUjdCxu0ew0MIi7lMMGOqUBvr%2B4%2F4gG5wx7sYqdI1dg%2BPIEEV2iVnCBvykxqUVAx996rvxiFTtyw4KiTi%2Fr00g3Taec9u0vsqqumi%2BxO%2FbQOphuGeSTbPfzswwwzMKvZHTrSiIWaNvmqZBEH%2FKI28kRvCanHZrNNocz8aId9ur3c4GUelh0MoRIfHehnz%2B2kaYsdLIAz6iH0JegH5CQzxKnH6HxheNIBmTPgc%2BVDJpbPuNQ0taK&X-Amz-Signature=73711105bee749e168609082b0acd346aa1ede90f08de984d3585a5ce30ccfe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
