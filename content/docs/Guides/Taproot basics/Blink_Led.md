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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXLIHVGQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FnKFWTW7IBb%2B2aPH6ImLozGGICwXUg69pfus%2BIuQc0AiBkYtmEZOqFyuj1Q8Yz%2Fkl8S4WO9zJrGOudvjporIlCYir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMZRrj8cLQpnhYNRA6KtwD3mp188HvZjIdxS1pykWPnw7DxFj6%2BCSpfTj7G638dlHKFQubCAzEcnMX8xMoMKDEaS8Y7Drou18Sr3N8NH7l%2BCj5trXf0Sl2A%2F7GtQfxSFcFtqhHxKlwEBMnKLtIvTkkhwwGm2srZJd3buj9UxT53BKZfJ3v7kW1Ge85GX9UhIxY1HLjYA%2FXbhRCZmCMmFii69Y1ritDF6CgE52XMuvXnTVQrglSQhDttcYNfI2dKz3dX%2B%2FtjB772gDAIcgmm7W8tbqREvHw3N%2BhjSmVMZGyRnbswpfrzyy62f4xuBbGiR4vJWXnhm3wToQcAwHWbYheQVq0Up%2FU64rIE9dIfvbLBzFCTnULP%2BzytRLRREqcEvfYHI9vPtopzrXDOwAjVq8rDBqcw6uylct4IGhthFEVhlf%2FH9rl9LkzpIN4tquf%2BTXw3uFbWS8W1Erg5Ch%2BAzIMSuss15mxPsX40Js0JMrY%2BOZvQtNMe4H%2BkIaktriGbXF9tmh14h85qjjZ9f4CsZBaIJsDSo7RoLYogoYDX%2BV%2F6w36LcghAE2xQLAmWZj1uKI1T028RnM3%2BxoGgrUh%2BOav4LVqkA7lu2a%2BWnOsg1Ma9M3tCAFjayyM7GKBKi1WWNVjDefjtMgXO6Jxp1gwnYnHwgY6pgH975ptuJt5Kd79J1ZQT%2F2d%2F7tVt8lUnP8%2FISIbs0yA4UVfUoO6VHMMHcnaN6Z9ez%2B4nPPQymp5FaM56DkG1q4qiTirnvi25fXUrskJ6la9SqnTK7bAsrg4Zi%2B1MGnDWrjEb76fgvXcGnJlF9M46zwSr%2FdpPElqUfFMHsPDQ92qprLpsGO5pa0HVLEjzgeqAVcBS8qT4tx89IzS9mdQVY6EY1a79Bdv&X-Amz-Signature=50d1ad5f323985378208e952c7b74f70290b0718752a3843e4759520f2d7d350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIRQNC5%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt%2BQIfUeIl6V8%2ByWNSatHUWvK3jLSY06i4w%2By1OxIZEAIge2Ivmko4JclcA4xFSb5QCDkLLCON75libUakuZNkVpIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDGnzEyaRL8tkTkd4eyrcAxiIR8qz7cgkPXhFQMM50e4I%2Be9YhK1V4XlcCr%2BbbMAGcvipRuX1CcnHNyDkgOaYlZH9j7Mcph1%2BsxCjoKOOh%2BryJZaZyRCUUPXr1Z2l%2BnQ4ba8eDvQX8SqKlEvCEzUWrQ2n%2F8j8RfcwMsIqz5ayLSxdV9vBTlgniRc8kKjGYXo8FAoHXTUUQ8vswzzNi%2FK2YmqryJb%2F58WYylQ%2BuXHHOqi%2FdHJjoznWD4kyz%2Fix65uvpQBBZhBVuX%2F2OCByjWIKIAweHV8iBSPEkhF3n8YX0uN6lRoavo026cH%2BFOqnnw7rg%2BB00SJfwDlqSGdOGxLvOg%2B3j5RCl4JhBpj0XZ09YPO39kMDCdb%2Ff4G36JfnU4oqBLdzLmDbRz8eRjjGKNcFUQr85KnKdUHmWV%2BOTlIlmO%2FyZOczIpww9xiH7SSxMnSJLRiZcBw8xu6m2wCr2BXgYU7pA98mQdxZ5HFbCEkPWDsc%2Fq%2BAoL5qCMh0U1CRBilrLK7BanZaBY%2BtJDkgA4j5DR2K6E3vqSrmDudBEbNrEUpOLMJ6opkrkZTYW6uAA2lM5jv9tzft2jiGkD66V%2BBraiFMYW%2FK0ZFs2aId%2FRRXTdgpIbx1ObwfA5Ssoa5ix%2Fn%2BoiBCXNB%2F%2FKov44O9MKSJx8IGOqUBP%2BuaQTesee6gxIVT%2B1zk1X%2F1O03NHSf%2FWVTsgdn9SOUjIg021uAgjnmBLGuJ26WXLNhhpX92ZU7PLGlIX2BMSZaS3mmsjwvpbmVKVw5mHHnvpAT3XYjT56nPlZpRLGeF%2F8pSrqi3cMe0Pmod5nqM9DMSMje0ICGwc2hSdFgGW2af%2FmcF741SXpNG13MZYEu9BO98sFIyGMQz6Cn%2F9Ftp%2B5gd%2Fciz&X-Amz-Signature=3fd21828a42a4e36a7bf2c1d7c4cb1f9d8cbe54827a71bf450e53b99a254ee75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
