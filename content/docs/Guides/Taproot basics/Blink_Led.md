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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPLUAWD%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQC42PnULLT1w5KiqmC47g7%2BiTz0F58k4d1fGYMd1W8Y4QIgcpxAPebJ%2FnG1z831vM7H%2FVl6UEXflLxWNkfCNkT4TH0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDD18i5fX%2FHTcrg95aircA1oNmKR6wxhubIhKJS%2BdBnU1m09i2xNhpv4GhaJftB9hvzRTdFyardQNLLgevBIQsduX179%2BRjB3GeQlFgpZa9Z4lmV1OY345mcVgUmnkhghAEIv1QJxRXieC5%2F2i7rqykInPdgVFH5ufjsc1w92134mYP%2Bcx0DJeVmoYngudMypRi3GNm6SrQojx31qoIp0uJE2FYOSosE8XXyfef8VT2nzTKIAFaDfviwKCTGOiY2dgD61WKW5UwRDjG34FzcAk6RnZOIqUElltA5NrNb4x2v9SyuTDkvsq3V0oGkSkFKHUNQ5tbbfTTI2orVN8kwePXEypa6NaFwNkJWwqVja1QTjgsYab7joM1%2Bo1i99iO%2Bai14wbAskQIbr4%2F%2BTnw83Qz%2B4guIVZLCaOifWzWCFBPV%2B1%2FDt6fOmtPYbJenLFyaIo%2BE4bcJzPPvTIUTWy6CMeWgrGXzNSD09%2FCl7f3%2B1PkCIDUcjBCWujSnMfMBiHtxyCbQ0agDbVX85myE5UR4l02dEtBcWmtXudtpJXhSmTAVLayHC7N%2FtNXalXRHLTZHogiPhOfuoo0DCC%2Bp4o05utWdpQeog5TvYJef9Ev8Txop20O8oR5GCqwmcHIDhx4T9685fufPsoOihc2EdMNWOnMMGOqUBmqpiUpeA0Mhuoyhi61GXUp7JTowInjAGo5M8jr2qtsrWRRx60Zy3oG%2BlYBG%2BCCBzXWmM0phlQ8OMPOgdPre2%2FrNCqeR6ZPYcVlcAUcJQtnyq2NQAXSEosIxz%2BTZ6INo%2BhUzgginqrtb5lVu3VRsqXsDxBT0UesiS0QEyPR7fso%2BY1qDU3OGnHPdCA28FdIlPSMWHSMArdvx6MItNnvMTrsqUxD4b&X-Amz-Signature=76d261414ba130771e1395d451bf53ee68923e22c6addeeec0eeb50656572a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZOFTNEC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCqABbHk5ZZxd2XehUAmb5rQMemjIxCrZ77dYnC%2BggjYwIhAJ37R0Li%2BVGhPMRzipFv94sjI4fTwm24kFMVIid7NeB6Kv8DCCAQABoMNjM3NDIzMTgzODA1Igz8O%2FWToeiOMWE5lAYq3AMA%2FUTXjNuKz2G3Ssp42A3jLS1WBg7W1PbHkORGXsag1X2h5%2BcVNz1QeoSI2Zn%2FnCPIBz0%2FO7urvo1rbtUCmqwjmZRgIUBpmZTDHtomhiRpr6LUXNUNFP4ksshCNq8JFBcVKGKDjEGoo4V6R1bMWgTJV1rM%2Bze3HhRnoD%2BmwZJqczGj%2FgFjrzGQTIu%2BitF1%2FAxk7YPAD34I6b2RXMdx3nwUoU2NGuWyjjm4D8NEb5z2avMTFM77ac1aln5WpaimfhtFm57ddI8DE8WdptNQRLe72faQG9stZQRPgcAQTualoOK0hfx7202KkcDVNfa%2FhLYIkEz7so5C7KpH03nnxUV%2FtQtZbUhC41cUngNJG%2FKEmaUo21awTHxQlYLDdCw0NBABpKi%2BzpOp%2BrjrCCaY1eeF1%2BemHDX19gbvZHxvrUTd8HNT5%2Bq9xko7l8e%2FgEc5HaUMK4Fw5cD3KJtKfOZw%2FyzE9Eh8dq%2BEijIFdUIKsYqp1oLQZtFF7yveIbix3dTVAb3pPUKl4IzMtoRMRb75LWtQw2adDxnA%2BI95nD%2B39UZKdTi%2FQAV3K%2BQ6lRB9WHyboEdjEzy1GgjYii3gtEfTwSoHvQs5nTPkRkGZzKt1%2F7dWIFH2vFgbH%2BvsqDjd8jD4jZzDBjqkAZGsLXcfioYfB4Kh9NAcPxo6a9uhhsnAwVgwbZnBRyOlsVEBeJQ5Pf5568NTKv9TL5VlzdcjnbUOpLRlPYkPoTr%2BcbOJAjNy%2FIJbM38vvOUEFXITIRMIL1Xmyu%2Fiwoo5GBMbSZsWc39n%2F4uFk9KElbgidhSfVuwj0LEJIfA%2B7Ko6VOMilxrhHxo2lsXYVGnLvAm%2BkzMMLB%2Br25%2FJ8gau5y9k2AiO&X-Amz-Signature=30d15d9aac35dcac3110e31ab9992a93d311dc1c152a41c02b9640d3f20d842d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
