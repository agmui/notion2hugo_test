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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJIEDXJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCmj8TeLrt4k3OGo2eik9YagyaDXg3am93WxbHuewm3JAIhAN%2BhArqNPK6ozHEgbgyJigLIb5btzx9%2BglchnxeSCFRmKv8DCCwQABoMNjM3NDIzMTgzODA1IgycM0L7bK4l09kA1Wsq3AOoCycS1XIFVTyORb%2F4xGxvA0XxTy6BRkNVyDwrQR6%2FvtTWclNSTdewx0%2BdQLxgLWS1O5f%2FZ0o6uRbxZ4QJ4hEDW4%2FcOisEPrHEGfzv8eFdl%2BQol5JY3y4y%2BJb5FbakWfx0swFHworAu8omxwtcI6dxkzcECiBbsPHiasWgYNtJa1s9ZMqri9buhbRVy3EBAQ9FLYTXv8TYilGNgmVDNRu5isaKj9mlixxRpTzUaLx645uKb%2Bt%2FeLVLUbDAxzgBy4dZmc25QOUDpgkPO0RRoLa5ywkZT9bQGojFcG%2FuGiRpVbdNZ%2FuyxeAYcaHuUzyw6WNI2oQSJWdhb8VXPEs8CjndBzYJ1uxLv%2Bt0x4auQTSWeO7EpgHoDYUxu1B81aMS95MT%2FN7JImnvxYdGq27iuiRtwruPyKfbBHZLoB3DwyWcBYhuZsCB2FxYeu4GvWbPhOFDbpFS2mmXlxcHd4kdiwlo%2FxvTcjs%2Fh%2FtZAg1dZuLtjC16vY4ItU55gGNSoe7eRAG83SE0Z0%2FZzJozj%2BixQS7tCEbrVGZIFUZ%2Bxjmo0f%2FqYySpcgs51ewElo8nccll4VXoPKj%2BkWnG5p4UVZMYWuXdWajEcwVQCFhJz%2FHOw667tX8mJMSCTq1tP6FQvjCu0IDCBjqkAc5XYJPZs%2B%2FAcYP%2F2JJt%2BOVIkHeHEBmPbJXFkj1w5PjvKDZxWRkBPRKaaDjn0pXEDbuhGOX5OKbKlnuKy4YXZdEzy5pyOfr2J0pIt1cEYxXmsUSyXm5pROWvyO%2B7vSO3l0Y%2BNRUQVnVuE8Bp2t%2Fl43xHKmc%2F4pOjOHt%2BAgaAwS4Dtc6%2FfZEJDjxqLkZ%2FUcAxLkJ8cf2PJ9rkcD6hrUbyNdkTEfIc&X-Amz-Signature=bb678e2c828acee3ddaa99753fde38fa12f9bd6e65b12a7623788639df65e487&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622X6RUUB%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQD4JQo6ORGBL0wN4PdAfqVPKQuj5lghY6hIohyYKAs2ngIgbF4e%2FO6fuJoL02MicuqH%2BPDot6qSYhKLo2qXy2jQmI0q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEDPehEpd3J6jNuWSCrcAxLWMpWGZNbvkw0J%2FY73EKV39klOG0VaeBtJThP%2FIKfOKhn4iAeHUpXc3riDXHMgrpHswrgzpVpwB2ekodGC59FYIIxL06jAd4D9GZSvU6JFYGqTiPvfxPCWhD5hv7pklkMaxO1h4qCWDUXA7mTCgxy5UN%2BmussDQMZ64j4EVCoXpezj8VxXChe%2FmwYe8N0DpuPOuT9L6SIDMsXpGbyrDL2JaRdTwS6vRJAig3hJpoEYFjVjL%2Fe%2Fi91bP03%2FdBUxif11Sp4Dw01%2Bf1kYy%2BAqr7JKTYKqeN2a35b2kdVBtkSSFRPRSXDKN8znSwN%2BqrIMrGD542KhavMy54%2BtIu%2Bbnt4yjKTW0p4vlBVwSNvR26EIlHEw8Wdy2bWYi09Z60ZI1MYq7bQPSSdPWXcFvZdopQ5FPY0LEAORPPgHBFysZccJF82ngj9GfMt2XgmSsK0kFXHd%2F5ZlIHLGVEOcoc8tRiM6GwdUoVjINl8BjZuUdvBE810Dy9QykIDcUCBpQpxrISe1MwkNT969Vu6Wzt58v2KwU4fXu3slbpxpC7sSnd72PN8Gr%2BniORXbZsWBtHiLsCXJVQzn44kjY3SQcNhVBPJaY8lctDa52J0N7%2BFbg7MnCHdPWZEh9okqoxXRMJLRgMIGOqUB3%2FZeSrCk7fqMkko7lDk7CvB2iQx%2B%2BJBanzV4Wt4ngZ50%2B1UKH4qa%2BbWngFML3rVwSBVWhH2FIejDqLx1pcAwrxQ5sc2PhRVUKERgNODbyfP2cMKHLhOLPqA40fqiPWv%2BsP1r%2FyKmbV5wWwUAv%2FP%2F5fMxuH4Lqjnzn%2FtmFjQRb%2FOPMpCreTV4WxROofuw%2FLTbBVZcNjDp4NHM0K3CrAtqPbBciBJn&X-Amz-Signature=03b0c1626ef743e11dd675446aa55809fde914551f795ab5c861500694bfc8d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
