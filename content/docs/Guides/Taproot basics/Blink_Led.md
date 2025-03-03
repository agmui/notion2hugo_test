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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WCSYR2D%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcLCsahA9WJyWlYES97%2BM4UNVPpWdz6zPJVT0yXbLMRAIgKIL9d1wGLeuVOOI18o0GzvSEPAJTk85hu%2FQHw38HetMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTOKs8bz%2F%2FBDvM%2FySrcAxmWqzrB0eNrxUmaKyEQOKoGoRzCtQ4X%2B5SAEoBDsGfNvCiJtlxdMHSWqpNsjQDTYf34dsEqpsUwv81MHnaWqQ4mmwFKdYRY%2FayPeyb0LLef6f69Brf4ona9IpGDiVoFoxJ8v68z12%2FfHJIHhmA4cr2i190zNCNwjj60CIAb4dX6UUeMvodzpoD3MclJq3aDEVvzApG2SLCc%2Fa47AAze4QkB9tJ9bD7wF8%2FrDBzgA1LAHMtaDAM6jNvKZzb3kO85ltXcuj%2FuXf9XBuZEKZEiNh0BFaUEUvQaOJmNtN4Rd7acZHNaEiTYZAP4NrJ5fccCghH5%2B4ZZZAH%2BBtKLmZg7arp1PJ%2F7fexvAq95mSl57U1NuNJuKln%2F8aCX7RywlRwnIVcE28bqg0xwtkhQgTRNPVGRaRxuX1D40PoU2yO11xwbACjPKja%2B5%2BPCOL4kpdWv1TAnXfmNHfwFQo5J1NXNyfkmOiZJ4kdR8LHPzXu65jfYOt8II2uHD1xl1my41G8gOd6BxG9HGM69mu13c7RCnkxqjK%2BkR5AM4cfW88aHCb2mzWR3JH9L%2Fm0HIzfXe4RfyzfUl86dykMczJwPpwELMECtc4eGizyJy8dMnV%2FeTMGCW5Vzbdi1JIiiXn%2FkMOK5mL4GOqUBsaxiLpknW6lhlzClGNZZldTxw9%2FOqfw8kh%2Fr5iNQ0rgjiHqg8aLH1PPipdyW5ZXRWxNIMPk7wclullg5qRbw1ejjwiVoezESMcO6LhsWCx%2FlAop1zmeLbYESfc1a4I%2B4EvrE%2BbRwUl4UriZEapsN6oV3w9yL2jPV1QRWbq1LfVaC6LUfYZT1LkvGsZ18osyM%2B3sMLR9CEHe5Sd3vRM4ppRQOLyrI&X-Amz-Signature=84210fc504eea2e226c195d1f44c5c32c659a1d2111fb0f2241075dbff831ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLHQWJFM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFo3dDarYF%2BxLyfSOYqIM%2FUw7k5ilszTDoYIn3ozSypgIgZiztbTttO8xtOgfK7L0pO2DNFgLIGfIejdlMFMWMs%2FQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJg1WGjn6C8dsszIxCrcAxjU6SvfRj%2BvfoG5glyfJt3zNBFXIHpt21BK9hdyB4k%2F9i0tfn0t06154BKYsTREXuf2agdvAsVuZ7bwyr1Th%2FehwItfvmKmTON3I0eUx8vg22x3fVtjWlU87cSEYjYcxFncWMgIoqah9k%2F5fdkuW9drmyIe3aF5KWY83ym3guHWtNbZC6XqFpD08y%2FqmXozqv2C%2BJfuTLpPkkPgRgGApSmCox5LYFGCk6LosV%2BPohdfIOOMtEU69MuIo3H2n8dzAPQSl9KrhIR%2BpdVolNO6HZEnNIGrFBtV5h5c1Wl4U7PieY1i%2F8%2B7E07AviEYQKgPJQ7eR1juU2yD%2FWoIQpRuo6OOKtpk8eJ7pYxEVJrxXNjFUtk7Fuvgz%2FquSa06S%2FcdWJbbSSB17eL4QPRoM%2FeTlqr7%2Fi0wNm0ubKbpymqK%2FJsZ9pxvK%2FPhQuRpsnYMPvdf3cC%2Br7S%2BYh6Ybn7kDoGUTHJd0MAEHkgXHRhtQrfiUYgqkZVGRCbLOzgCG3NHiPWu2LRcgYlx7fLA3uySXk81PjMn%2B%2BCRjjcdT9j9LKq4HdQlYUI3Bjn%2BtcToOQDYb5MJkTxF3qNXURcfimQqwPXVeU%2Fx%2B3KoxiP2sYk1kyCAuSFApC%2BrOdQfdYD5vW%2BPMJO6mL4GOqUBSiQWsLI%2FPAWs2dSbCkj%2BbHbqHrvgrkJy1%2BaY0ZZmcBaecVkd6PKkf2FZR1vUV3V6NxL%2F5hA%2BXdpXnDP8iDXcAIDSNwFAOY5QkpMjHHiOkode49kPikwvL2uvFnOrpOtoolLzWbtiFkjjPZjER%2Fs3c7abZuWdfDPE0Yfgq2za8VxVEb7TX8329VY1Ssh91iVzDcy3qOf3yK8PcgnFtt5lvR0cePgM&X-Amz-Signature=8720c22db2e6cb7b5dfc54c93f483b603cfdf2d49dc88bf01ef4bda60b39b9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
