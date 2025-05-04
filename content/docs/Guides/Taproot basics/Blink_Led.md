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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZVCH5WL%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHXG5Xtc39eZt1uQMsxDiPkT6QH%2FTjRH0vd%2BU%2FRdNPprAiANbeqxwzrABzFbLgs%2FbCpzGPtbgK6qIREs3s7%2Bm0LFeSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMpUS%2FkpwYl3roB7ydKtwDWNyUH6R3JZ4nKrDb%2BrA0jdYGs6Rsk8qQYp739q1xiPSGDP9b2ML%2FjeHv1kfy%2F9e7sBfmzbVFSUpjAuRib78p%2F0ms1n308r0ONXVPM3MkORxdmLV8oM%2BSvkIPoek8Q857eboshq7lgwjn6mxm%2BzWTYBkRHYFw7zGJIoXfJxsf7ve9qJGNH8dswpMetzy9mfq%2FsTFmtz%2FKRdGxRfehUvKOPLVwyvwZ4fqieGzKfT19ui2uanaaAR13RMVslnB7BmIrRr38U5ZwC9Z%2FTAbNC2ZuAhjWRp0N7sQCDNjWnwFu0dXrgUIaG1s78v7fn55dOgRunOud0qxCUmHGRXK2WqcYes1T7UIvhfCqMYOerHRuyo2uProYE33n5hyQMBDLg72GFSPN33dbryZgLZKNxwUAIfcd7IigTZMHH%2BbP1WSVE3ILIYE%2Fj849yWXoLWWA1%2Fik2u%2BzntwwIjTvAWnhiaBbxOPF%2FnxXnyJQ3RWfGEd6QyAn4wiYSMJECaDRa4%2BsQxYxJYZBBEGssKIZ4yi1C8owFPsk0kati4rTgCnnj9ws1H6VB6AZuc%2BkBbGnP5urAF1S7kBWVs4mcwS%2BunIwDpPY9A1JzjCI6PdUUOfiatUL3lNREroChDyrn%2FchfDkwqI%2FdwAY6pgEqS3LiZIQdF1A0Qm3RWFiiqXTncztAsG67wXhEpuEfqTWLlOjlHwvYUTzQvqUqlM1OLy489PZmAx7s8LS7cXBUc1io1g%2BjGhdhjQ%2Fqpi7kaiRfXuMdQJ8AI8Yt1UNRVw%2FWvOsAQK%2Bgn0vG7jx8EIm%2BxFXMnhyXlWtLPSSc4zjFXx1wSlBVtZLxL%2FkMKPu0xVZ6XDabOxKaI6unudOO6R06zD69POy1&X-Amz-Signature=a2b73a410ec432e0e1e7d5a90568f782047bfd046b28baf5323b884bca6494b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637VWMI7X%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCICdT%2FS2x2c%2BDSTZ9gtFU3aifnJgwlbdRSGyxQLrgTJ7QAiEAobltTK9Lnvwu9JZ7j%2BiJiuUlo65cPtNPLBUcHFs9gWUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAU6Aq5O0%2FHGsM%2B3tSrcAx14hDfT8ontCSpCW9PAwoGx7PKKJiA0uQQS%2BeI3kV8TKYaOELb6Mb6xAHxFXRdEleiwxv2wSTmfsighbSYAMBh3tkMdCmtXJSvnR%2B1zYTZNWwjKck2itMugoKfYkqA8Mg0%2FtMmI41QcZAijBogJ%2BilexkhLdL0ECuymv%2BTOK4e4qledLx6yOEOW%2BzXg4zOAkL0XEjMMI0zcHehcHZyLlB4M5dnsLOaJnNO83Y53R01q5yCV99udfF5NgxIRYtVr4p4phKhcx6sMTC1Ni0Keg80P0PbyY1FWud9boXt%2BGRVNUIwCS3bsUqHoO4kOYcFwJkz%2BEUF%2F222UNxRlAQto95BOvdSeyMo2tt3%2BBLzF8R84qyE0zxpEGmbFZ2RM9byBWXWTVLh2%2B%2F6AhvwysUgUcMURDVUfmsICYgLIrF1XO%2FD9j4wsVAF1zd9xkS5vbLOesF9aBAdz2xB0wV0cVcBlYKp%2B4RvrPpQbt6BtHMdRv4RvTqO%2BHfnE9%2BQKAWCcFgp67hH%2BZmMYAiaW%2BzfA79YMkn3b%2BgVeir3t3p%2BP0ei32T%2BnPlDGVivOsT2AHbkqP2lhnyL0KeLojkCrpOwbKffTr9AbDtZIp7lNVXjJ%2BgcX4edVxyn0QZvoT61XZYOsMIqm3MAGOqUBQrfmUlgkj8%2BQREFeO9hjSNZAMd9MlNHh%2BzfnS0JBxHQlfNb7xHK%2FOzs6QbzR2fS6zgt%2BLC73B5BlPmoqft4GTjoUZgFmbqu%2BKcyt7EYAudXlwFMBR6dMoHG8fRtEAY0QRiA5Tl9K2EB9nNoPrzELalolScvSohXpic9WAD2T7BJlRZzNOV%2BT74rkfJJwqWUWRGNC2EyyZh%2Fuh81woih%2BPATWH7js&X-Amz-Signature=08de4b66170ea744071e93040c3c2f95cf9fb886f7e33d39768a9a840068e42a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
