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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TEYPMYZ%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIG8bs1v01w3mh9uSlxMCkC3Ox5JpguflndgOHX3tYXZ8AiEA6LUBgMU9iFocbqqg%2BVUgfu0yfAofuW%2BTtigHopuLcr8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLncpoQDkaI9aHxMAircA6qoPHDg%2FKFU6s%2B1FYk%2FHOCsTWfPpsuk4XwyHLz%2BlTQoUOVYhNfm%2FtakRl60wh%2Fah1OWSQ%2Bz3WonROoB60dXf4y5W%2BRF3oR6z5Hsxx7jKmCd9c16MrdvzVJ63oARvY2WO8FD06KD63Rik3IhRp9MyIFw2OFEwv5f5nm0vLECyF3OhKShe1RM%2FbRh308Js10RNg%2BN%2B3UnpvsLK2IctI8cZPV4dN6I8CJEQwVdLtoVGnhA9X8hTPL05kdrj%2F2kY5jl22KwOhUozSait5UpFi2Op1eDZYODZm75wKz1m06r3GZIG1IRsq3VLxhLHsVll%2F4Mu5n7kv1f4CLwioKB3paRPu8Dy9S2GX2AEDskiY4rIzv9yvkrkp%2FYYJUBdgHIMQLLLSHypRgf%2BsVyNrvRGXwS%2FHfFtuljv6Ouc%2FTvi490f%2BaERINGhvuG4TptTcPlY%2FVL6hFjmTC4dHyMGs8UMOe6AzKE0EC1xsEwmBnk7biD19YQBcpYyn%2FgfaAgQrvHhysarIfkALX%2BEZREDjD6mmSXhQPMcYODeLnFNTyL0vBUHWqZAsw1yY52upraNQLp8UniFjBBm8mVNp03NK9VQN9Icw2LGhlxoAHIRiFTLhYVR0AmuZ3TMHbm%2BtpWaqXEMIb85LwGOqUBxEMcVTJVkE5g9GXuJ4VrARlOd0ZlqKBJgr6KnIUK5L0i5%2F23xRmCpFhM3bB%2FJw5%2FY2Kzi9Y8geqSI0%2FJB7sVTydt2A28AfaAjQRusWtHJcYA6t4PAtJmVZ1wQSBxiHkEGO7M%2BLRYCVNZFJD40Emzd8RgjW1KVwy%2FbQyUrR%2BgH8xPoSgvEZulk9qV8cNm9004zn6bJ7pYHOFHAfhjAC08zVX2WwUM&X-Amz-Signature=c76ae30e98053b8c9901bc10cb1d26c508b3477f8f28c90f96472bb166dfa05d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCKKD52%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGrB%2B1Ps6W1MM9M8UlZ0K6SuwSv0NLIbGjAuuUfZpXOdAiA%2BencAjHi2s8MsBIHEq2SdtrHGS9K3nl74zSHpbcx5BSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMq%2B3vlCO2kwtMhXL%2FKtwDyJt%2FsZaYToNGvyPMuNOjVTHpxICKvQOyzh%2BC1WL1JpfIlGbeLEdOZy9C6pTjSxGEwqhEj5OxsQf6b6OES23r8k3A94xJBXqp4gEx%2FmxLcvQykqUvLByUcExstJKpzLDeifObThcoMk4oq7aMI2IXs2EnidIGCAJBiD1Mx8ncZosLsXftpqX2JGaluit4S2%2FF%2Bp1AQvzY0U2l6XX%2FK%2B3CXU8gIPuSqWgKnRbqF93hSr9H6lDZMj3U77YM3I02uZ3Uhq2j%2FA0YEVBoLsMYrPyYUmDtgEeFMvUooLQgJZGt5LZzr4wi%2FbHyAMw5hCwG%2Be3%2Fi0qxLvqIrRGCKzQqlVuCGXsEs%2BI6GWAOUqSW9XSkYtMGRmpc7LMQ961e8ZufHV7q%2B5nfBiqMipIIt92YF2k0yFpCOFXgTN7slhlBjoM%2FU1MBpCBgke9wi6AhF3t%2BJmFFIG6pAzo6rmnsRJHIQPyjsfPjLKgh5i3HtR%2BQgLdETVSw0OZQRZpTnbdYFMz4TIHWan2l%2BLvoAt%2FXOTHbpxlTzvkDNH4U8v%2F5gBu2htRMgm0PxoHjIc9hzEYibshKGEj4U2l%2F5TNp8YaiHxkBai8Cr4wA4dsT%2F3M1sS2yLjKvCBOCGyK9vZJbCsSFW3AwwvzkvAY6pgGzpzzoxlfHWylMK845pdLDxGIWM7V3LAQclkG%2BCDfOA7xfMghWtnIJ9JfV6wtLqgLwp6fgauMuk%2FzXWIM82ia2Mx3m3o%2F7VUJyB9B88lSMxEKY1NttkZU8TB9RHy0TYnxJrhVAaHczR8hX9QMh4rwl0yoHyDbXQdkCELwnPFcpsbMpNeQa7OJmdyndRWg2Qkth%2Fppr%2FgDyUAnh0podptrwZpDbitCS&X-Amz-Signature=c89a0f439fb2844bb71838f28a1471323d3823aa20c1730b0ebef6750cc420f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
