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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNLEKBZT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDBT2USD50cp2HC20GsigwoW%2FnhMqLcmrQfoEWD6pWBsgIhAIV00KzItvQNd3KLOrDXeIThWo9TQLQF1KPqzolGsb7lKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIv8NKBLMgazy46bYq3AMwZhkBYJ7xs1KCXUwH%2Fnso5Ds1jmsPEKIb1Td5OkjBk1IjBjNqdbC7QZcK8bEE2BESBN256w0HNr15e8NAs3o6di9pPwB3s94xNkkXKREW9z95QWIVc8iuZ2brTa%2FPhLMsJ4hErqrTMSaPOKtC9jvjtpG0OF1lekB9GEmCrtE4QEigctt2%2F5DX%2B9eVX4l%2FnsYJnVH2tfmpczje7MqjvMFo%2FK52Mbs4GAe9rANJ782jleoccKuB03ER3s4QJbPS0ZpAm3lkihb%2Ft6FKc4tNJcEqZqmEcpMLbSXhj4Pl1%2BgdAH8nGeRicRCQ4c%2F8csMJ9pXNHMX7h9Tuq3IflDw9N8P6LOkphm21UdeXx4SdnhcawCA678oWlPyHtyFVMJb6%2F%2FafPPNHnhWYPHawMvKblPAfKHe3ByuO8kTFX9i2pjBmqvPTfmHti%2BL86BPKJaf87zGMuuvCNDAZWDjnJRi00wdHmEWqEO2EnPRX27pAHYZOpolVRr%2BPWxMZz85gjR0h8CK50WnI5XOL%2FfL0Zws3Nd1s9zJEOFawYEVZpFuOcxlGH1ZCf1JYnbS2QL31MKj6qyxRBIDfK9r2cPMeZvungNzcogH5H2z9uq7LqydibhidEGjctTtIWOzje%2FUeTDDe8ajCBjqkAXxB8YW38sXhU6B0ISb2LxnlZMeC2aXAGmcW%2Bgzbvlb3RpKb2JhofelTdl7340XS61IcpMkQElUMmb0YeryBXEGNZhdaGl4mjBOrYzwL%2BPEburAbSZLMd3%2BvBacoXswlajP08cxn8iwcbPKyzy2BfOReal0VdP7X3McXZ%2BuSCT%2FDuRiHXOjG1W%2BhZCv%2FkGWyVOEhZiw%2BB0Qs%2Bd%2BeISpAaAOsqDeF&X-Amz-Signature=df19a3572859e428eec088d855d2e97f4370b514c5ad44af786b9c17bab4d6fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PNCCINP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFteFgvm9X%2F3ltBDUozFuzIm50%2FJqCRgpGIx1FFV6AmxAiAv%2B34yRdeXu6AnAA%2BR7%2FaKaBFQzlHJzVe%2BJQea3610tiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR4j3WUObFKt8OMurKtwDWfYdwF%2FgIlNIqnk3VD%2BV%2B2W%2B62rTGnSXwsIECChjR%2BVRGXmVlxx%2BR7rcBKOr9NEOge9qwJhYSp%2ByK9jdMdrAbWWjbT0pSg5tBEmS5Y%2ByNdzCzBpX%2BMV7NpvTWxipKYKGT%2F%2F9Uz6nnB4F2%2BuWMsVE%2B%2B4nXzdGGIUZSFUyvAad3r50OEImzsVIibLUnWadbOZmx6s1jKqkEdch8CQqsB0p1LOStIao%2Brdq0wsXV7%2FlgjLkusQMn8%2F8qqf5UoF%2Fmjii%2FpFFhv1SLFwzXbpKKvQjQAZ6ur1JQFMSyoo5GY2Z817EmFIiFZvzCo00DQ%2B7flWtDFvWZZtduILn%2Fw0OueHl0IKiK35duH8mwf2a0htWu%2FXAuzDKQ%2Fy4AtPt1eHA1ARBke2OgDX7SKl6BAH4xnDMeWB2%2B%2FXskcXoMbtGFxBK9a%2BYkeIqcC8lLx%2Ffnv7jNMn6nnJAZm0jS3W2nffnBAGiyM8%2FBnefpyOPYr76wdbhaGx%2BZNed1CDK09PYt36HRWBtu2KGzN4le7%2FBTgU97y7Uq%2BoiFP6udtv9Rk%2Ffy4j7WOqUZjKSFiCj6BqAAFT%2BTLpHgq%2Ft2hre272W3lKsoXQFeiWmoBUlBoPmnpJqGjh0Iyt7%2FjKDXNz9mgUlUXcwt%2FGowgY6pgGxrI9bOnkuJXPspf%2Bb1oLejZTFQhMXlcxate%2FGOFrtiKxDS00KosO5Fn7%2Bh43FLi0krK7QhtfNpURBErM8LWq9GxVxRx2bbaHlXyXTNa721kksm0ExegtPG%2BJs7BrhvyVhGCDOVysjR0OEEYPEenqS%2FZPONBEfxyRHnYWtLpszLqJBXrntvJj9%2BILpHo6tHb4lVKyr6MCoD85QDVHrsO1BvOivpo0L&X-Amz-Signature=daf7c14a4f0ce78ef9d247f41e71c8626d13b2adbd23a8d5d48ee0911d364b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
