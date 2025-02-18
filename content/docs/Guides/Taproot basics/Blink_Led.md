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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4SVIZD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC8zT1g77VJqiK26%2B%2FZ4HxL%2FhbmSjWzZL5upZks6wzKhgIhAJvXvusgMpRL8bKNvcn6asTdZeCDEaey2lJJoSvd%2FIg6KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCjTLxrMPsxUdUyfAq3AN5TdmsYT7FXDdw82t1Hwr2woDJiu6BkMEl8x%2Fex%2BYCX%2Fz%2FnyS4aN%2Fc5Rrmy%2BSSJgHfUXynN16zQ%2FHKh9M703l4Fl4qKL1hMmu77oXxNLvLjFCSDO731ARc1Wnz5iiQ9Rn3GtLVg74vaJHJ038Xwe1tXwP2DY%2FcK5c8QXg6PgKtPw0Bwwbu2Ckhnm%2FJMFHsDwG1JMpRuNdmhEV%2FJhdWi6HIL30Bdkx5G%2F78wm5VAqIXev2uGI8I9jlgbIuddRZZPVtZrfNXLIOIfE1DU5PI8kDKn3vJiDGv7AJAbe0J5E%2FtScnRmo79gZEGSa4AeGQoCb%2Br6TySy5L6UG87nKWNbVv0blU1NmwSOJY59hML1nH7x1lY2qQ1xYqqD3HTf0MtqVTry%2FeFEEacfnUlA3tLu5YiPLucXAbuKQIe8Bm6qazVoHZ%2Fm8y5Q25f8TcbsRlg3X%2B2szMDyTmezESdifO6D3qdDtesAAjzhQPDIxcMCZ6hOM6EMeLHRYn0cFuNmlFEuVnli3E%2B0WHRL8ggm4hGGMv1ikEnzJtFQqQSLXjndu1HHUQ4ahE%2BNwWUIxll%2BZx7JAyPgjCNZ1ex47at4Rv1L2L5cXrm1eN1xUwl44eh8iYt4SkYsLZfdjkp5MBdIjDbsdK9BjqkAfP2xkIYmKm51QP46ZWahYXlvvqhsT%2BzvJ%2FNuTs%2FSHfl7gXfU%2FFWHT8BxI3u7Kv5%2FOICu33nI8w%2FTMcrsmHhjRDeaP%2BZFy%2BGK2X1HzH3XTh7h2WlqxgQ3wrk%2FkBEx8oywhzGy6RIhI5zLPd8qDd1ULysFR5Zgrn6Kjsudij22Cmx%2B%2B30TzYJoCzh%2F5%2B5N9kP0JrMkOkONzQpdM4q4fv5Doidpx59&X-Amz-Signature=34c90547b9c198371073f090dbf13638184f76990d74886dbe5549b5c06ab0d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQT5F74%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIGRMCXzRPDWuHtzbwpeMXz5VEoTSVBraNcjWtIneHSntAiB5d8EwUKstKKLYk%2B%2BhMblUOTh9aWME2e%2FP9bNhmpaqXSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMay2zR9QiHh8j1sFXKtwDGOcaqDKR43amNBxGMVdmPmxHSkXhY8BlXz1AObqkyhVPXHwlSXo8M0w7ToSw5q2%2FsdwCX1DUInZvYYHODdN7BsLasKHfM2mKWnRmbtf6G0RdMwm9GiiXW9NLcPOhajgHDoqKg4PFjZQ2H8OmMODtmKQR204P2nDLf3ZC0Xtxy%2BT6A%2Bobn3OqnAyq6%2BZgYddoCy4osBomkuzjwLnBK2PIUw0%2Fir7sT1GqmhYx%2F51jkiHwvsLgnANKXE3za4fpc2DFwikzTXc0QI69ZQusbdjbWnu8kE5b9qH6u%2BdxzQXhbMaa%2BEgrm7tHQu35Tfk51SdKvV3X7BJxT%2BaZYrq8FwU5prFF4hDOpeaZbpDqLLdc%2FZhds5HKlgYmaiXfp6ySVXz141nc7L4wxPMFesavvAt5Qmu2KJjyYfBIpaWavIod8cbTZKLp5BGCtpeI%2Bew4FoR4wEVBgSjdJDOeH7eXGWWhML%2BwgeIvLC63bSaTaq3i1nLKwObgJoTklGmfXB15fFHO6KNLjfXhsyjwyGyb373eR%2FX657kd3SwdCy7N%2FtAgSs%2BrtBbq0CSu1V6aQ2%2FtWFR%2BDFdoktE4oehiDRj8ZLqskmCfZFksDR7v%2BiCq42%2BSoCgJUf5%2FNjCygn%2B9QmUw6bLSvQY6pgHiTAzaTYb7f29yb9iY3EzE1wLIdSlQrwZKaZFB57INCivmeF7f1M7iw5EeiEcZc%2FUbtmBn60VChU60CxzlazHToylHTUR%2FjLLGGMEk8jvDJ6AKkSUyo0RrgvtYEXn09kDuFe0vB4%2BIZMWbruWCHbWMSYjoVbIIFkWr9ERoYqzf1jfZU2LkEkkYNuuwTdW%2F4xTDi77PZydILOj%2BTav3dbk13Ja9GakV&X-Amz-Signature=026320bbf126a7cbd32e74f23cd39fbc9d81a6dd650d40797c8192e7405b0230&X-Amz-SignedHeaders=host&x-id=GetObject)

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
