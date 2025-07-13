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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNLJ332K%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKv5oHteYc8FoEDLhAu4fhwp7qTu3LbKiRw%2FGs5DOepAiAjCzEWJYDd8h1sy1yaCI0s70VTQon7CtcsheQFDhknKir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM1U8pe0zbdKpEctZpKtwDfsyW65sVaZtfo86rLorQuyXR%2FU6L9P63zXpcRejBhmzxvBctawgRgh9jB2pLWV%2B7yfnPGYwiU0sfUshH4kuyY7J0ocTQqLwpCaH12VG3HsfMC%2F0tpVx4sX5Nd%2FjUTLdK1WVIeAw%2BCbn%2B4Dix5mOHcY87hiSAvxFisNRCHlpuXxhm20IDigEm5GPdspjq%2BkOViF%2Bydm1UMROStPQcn6NSdfc%2BDX9eGh5dla%2B8TwpJwriFD7EBThQHRjQFOHoXPXLf8%2Bxkcbdx6JOSfakYxeVFUtMa7e8cLrWsY9zJav2WqRG%2FkfHM960AnKxPEFjNzgD0gY29lJ8cFd9AZ9A2En%2BJXbjIM1MCrtNZMADc3xoF5LnRK32Th4Flm7Ky6y5Pkt77pcL8fcspX%2F23cpRxINJleC3AmssoFOJHtCwJk3REkItPDLOlD85USXgybFmyi69vzaB3kwD42bLZBmbjb6Ih3PQdcaP%2FtE6Eu9uPPq6p6h2GBN5uggoozuU4LxYAZGZTC5s1LNBKdPZg5EFjCG%2Bu41DQczvYlrRosJJ7QKDvlvhLHsN1u8hrSwrx9rfl2BFmbC8whRB2z6YNHY7tM6bHYeCseLZ1F0eDHCxKQck9lKGUV%2FFLKhlEdU2cm90w5qPNwwY6pgEhdw%2F57VXRQhlUf35XG6PpSnq%2BbWRedZOXQCrBkAoa4cjr2sCyMvgB%2FiMMmIVeDsFWW9ig5hZ%2BE%2BLGxAT30d84P7veB%2BrAR1FqcADvWoeIVWZX5Yj%2F3AUciE%2FqSC267xDlPfHRLQdQAI3L4VVblIw%2F%2FRFg6IVIwrT1den%2B5PO%2FWktSug78ayACtvFeyCx6WJb4d6rMBa0ZgRO3D%2BrodFzNMi5ZdD64&X-Amz-Signature=39e97fd62d3f3d984f688dde4cfb781cbe75fde8800e1bd7ee58f4bbe44321f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EVXGIDG%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZrUhYTL5emZGMqAFElVPhCf%2BDp7nqVaLA%2BGrfm6gf1AiEAvLoU4TjHdyEdAJEXumDggHwxdRg3kczKArGJyE32HCsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNk8EuviqbLK5%2FovVyrcAxndLYZn4uNQgxNo3FzK83vUnsImz%2BeWtxQGmy298RhB9bH%2BLy1ourogmAi3eJ%2BbVj7TOuZFHTH7ywbnfXaeQP7OGAhHv%2FOd3i1fSj%2FLk4DDb1kDchb3ZXTli7KpL04AFdpeGBt7USfjqDpsVRYKItbpXZKQH8QTWGeTc5z%2FvlAbgSMhh%2Bu4WlyXftTtGuIR91kmV7ZyqCkBBdeqM9Xzgj9RWWjwgNDHqFMeAI8PGuYJsto9GmDY5SkePXLPCkBpUVvl4YqvVIy03RRU81R%2BLa5bXE3IdWMeuAUzuR%2BDFliaRWYDG6gAHr2cYHp5sPFAQUTPrOUXsUWdDoD5MVS4uUEchVUAVlHAOjk0u%2FftumkAha39hS%2Bu8dC2a5Um9I7gZdl2i1TTjQLaBqaf%2BULM5gp0RnWw3sVAVL%2Fe8Vtes9JZ2GmxA20HUfhSGk9pHohSMMOofzFOjXaEjrFx%2BT%2FzECr21a%2BUH%2F9cDEe%2Bsp2lFf%2F7T7k0rwPcxzwtbb9j2rkqbFVrK%2BiK%2BdadTtN%2BIQ3NbG6N9Sy3Ihp8kntLamnHcVDsfnjx5hRcoO5BjZf2qo2Kh9%2Bi%2FeFUc6mgA3Y8O0yT0ld%2BKibXaJNs2XJXJWvLFkgGdLe3eSRRpYWO0b66ML%2BkzcMGOqUBrsAJjQOg0N2SvDkGi%2FATKdUZxymagNmVa3jlX5rFdiA6vtzfSL20f1EU2sgV25ZMhrR%2BL4x7wOZerPK514dGkYPcbvjVkEbwaqaQlCpB%2FFy8aW%2FYUtlif7BLjmEjGSyfQhHVvOLqf6kGlI1zBdmmj1Y8I4ozktv7SnGBlLZqPrUEvQ8YLl1xha5%2BeIHs%2F36UshzQAHkPrzkebGEFBSUNsajVvV7Y&X-Amz-Signature=90719726a0697e3d94cb85a56474c05ea98e8e1cdfbd8a8deae70112ce3da219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
