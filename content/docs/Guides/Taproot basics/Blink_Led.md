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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMVPVPT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCGgEkfQ3cVtGkEUftsK2JA2L%2B%2Fk7S5V3NgJEIU8hgljwIgfpI3uZ%2F%2FFPXf0Vu1WbnsQI%2B2Llz13Rx1RyLkR7UoX2gq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDILfxshwiGZGHco0vyrcA5eXak3QzMPkurijwhvm3XajMb3NH%2Bh28yrAao2vNK5M4Kfb%2Bb6J%2FmQlDK6yNPwgoL%2B5cn1QgGTSpxPyjfjYVme2TMbbVpyGJurlJ%2FY5KeOmMrkZg%2F3Am9uOVUc6bvVUHJ1UAvxgj6Ypyphv%2Bosy97TfaZ4JKkC6VAN%2B9lvWHcCHwzBAHdSkpNJIT3PFvdnswZmRiHaPCXSTeTgiwXuwQTbYCvBAq9PNn5rY8scp%2BbhC4SjEqNiapseFnplVV1hlAlLDnP687Mw8iqxNKrwdFiwA9WeWtxd6m8EFXPMNWBDZtBrZZaNZDWqLBtLTsvnaV5xnyhRfJNGskISLs0uAACN1g1lsLnIoBvSWLIKJTlNZoyru4RX183a63o%2BmRq1sJ6amb06zaHhs3WA0MKoxXPCkwF323gFpjYAl23XWgRVuIZ5M2Pts95ebYU2hup%2FAoEB10kbNp5N61yHltB2MvgtXuN2iyiYCdEyfOUtClBPflbuNnW1ojf6hWCQyFleS9qQcIL5cldMrjVySwDcZt4bAxD0RHyzvUkNtU0lzEyRmJ9I76BGl%2BzEHYwpwJzJT6%2FHKCi9RiAwv5q0%2BhG62sP0LZJZ2d1l0PLVB9MEuOZ14AIIusUu%2Fz4cS1LpjMNyu3MMGOqUBbPJ7CuAdLAW2NOEkbPLgbTaGJqvSLtNyV6jH9YutFM%2FZDkUro9enRSf%2B1sIvIE67UbGOM3sEy0VDSGMfUYn1cxjHSyGKISmpb%2B2BxxhlXkgOWh%2F%2BZGTrL%2FjvKqNFJodSkY2vQVgUsHCSTkR%2FKnpau%2BfQP%2BKHYqeCGy0sE4B13uepYw3LnxYJA4bDTVgkH2KVXrTkTh1oDpWae%2BzrO3dH%2BPamV%2Frx&X-Amz-Signature=3227e6241e9168fd4f9c91daf52ba3a715ad460f7920d3b8d5d65721c6f30ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUI5ZZ7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBAvNkJpo6Sr3gS5pnHMMay8O1DeW6Ma6ccVE0KMTHt7AiEA7d9Om6s3qIcz1C3E3DpPqjRXMBVgCyX04Cqv3ANxeooq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBttZZzraouwJKShhircA%2BWqWLUXIWUGHquV3IDKF%2BvS0ptFa4BRavMC6q3SwIVJSRQ0chowTsfLQeheJQDQsuny9%2BMM2u1pm%2Bzt%2BuTc9VFibytGzFq9IAbMJKX9F2R3E1zBGyyBxaGvnbOarmWSElFJU3AYMxe2YphmLGpYH0ZdeBfMzMwGR5A23kD1JjQ5sdgBrcs8LL1G1VaM%2FZwbae3oM7Cjta%2BhkKvWPKyXmvWJBYvCmBXnb56LOh9%2F9AD%2FUP1EkJH0qvklYCFCAN8bwfldUm9w%2B5dNAs7J2KrrlnOQkZcue0t17pu2zGjJWOS6AOML%2FrNMNYtXmFIRFKW10l3K3QRM5nEPQpQXsjIm668Rb2MKrlLcdhFtYmhG8%2BPzNLKE%2FT3oze2nKBZk6IqMt7XfJbzlMDAtYkdXztPuGA2zRYqjxfmNDqYAh1cY3WupVPmE23ELjaM2Bh9HrxAKLpx7nl3YZgv%2FIFchZBhDAXq1lGtsgWCjaca53zwtx%2FKUDMXhO1I4UuEoWc5s2kJ%2Fi1tSkCL0%2Fx5nDDepVNM4TMYNBXQ1FFQo43qdYjQB8EK%2FpAX49TvSYUdALl3mmRWBnWzda3YW4VmdRUnj4BPTPnm1JZzE4LmdV8HIcrU4fUP3FEytedz6heXmgi%2FjMMGu3MMGOqUBAWXAy6tSmBHHpdj8cgyir7zYYUF08wLtbCwSM7zkrp74q8IEm4kp92%2FcTqfp1RAL5bzpIoWnHXBwmKO8sCZJunnEWO6VtUE5gwjwJ64Hm0ujyf1ee6l51e624GVSvgqbOMYCZEtfiQFDFhdIjfeAfwS9GqluDcwz%2BxY%2Ftm3fyI6qSNJ1FZwYwK5%2B6W27IbzRQu%2F0XzswaN1i0k3QSYUzcT1N1%2BcM&X-Amz-Signature=34f41ddfa5820d5c60cead75335e256ae6d35717ec4e6d3a76369f99bd6bd634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
