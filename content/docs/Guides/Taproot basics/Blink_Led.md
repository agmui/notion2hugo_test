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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644LW36T5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAX83LiNoDeD5yOMrR4aMvZH9FEjIi9eVyeZmI02Qr66AiAG3kAsrkj0dXNIqlwBUcBSbvVdzpHiGpdSWcGHO2PojCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMxRaJAv8CWNwkF9WeKtwDZgqtmAV%2BPvgko%2FavHMHLDcKrou23exYqu%2BOsQ8%2BGaOvpCrm7MLSQ%2Bfc%2B19LGedYQuJvR0OEQK5Y1DcjQh%2F2VnNF%2BvKVtssqZEKZ6lt%2BdtluGw7M1lZlF2knjlFxgxaDV%2BCnul5oOufwN1kFx1Wg5zcqfLXR%2BQdqi%2Fw2MUYkbdj%2Bvy3WZLX%2B65AxQgEYcydhYJTcpLUUlUWy9P6w6kzWdl3C9XoOPUITzjwgkORLESaDubm6get8tCVmYBQ6Wt3u8Il2%2FORLJTBux66D8DFKje5CYiW7ZJWR6FbQh13s3FmN2YaWFJ1ePOS1FuWcoYeIKaY0Cw4IcSNlZtpFogKhwxgegJClacw4jyuNvXk%2FVrceX7wHzefMaXhx8U%2FInMAvhH%2BKppQ8qRmkgYVOcpOH0pjagPNlUlhwBdhgccxw67ubj9CI40LU%2FAIvmeimH0qbQRUQVCuOkxkDLMMyjUKF7y4428OqfHQednn4gSCv3C2tTcjVLZvhWtJt7sdi0U6ADhZO%2B%2BlTkYX21FA4UXB6n%2Bxm8R7JVFsVDVbZfi5InjIKwkDl0hR%2BwzxLGFza%2F99S5C7em0aZbApem8t13Wz8kQQoMX6F1e5dkwpNd72azqABGm1PFtiATHtZGS2sw9f6UxAY6pgFlVr6NzUKAacnu8PqHoS1DQrW5RWVNGhL%2FJMOnikTqOmREh1YfyE2XnzCR5xIkWChhmGcZIpOy9UTy%2Fwmvpy%2B7Te5mp7fsdowlAfjJiE8XcRBv8tAhA4IEnFt2WIr2le5PHnsyNDVAnJLStq%2FkGDUbmNFFG4eSaunL9hKuzKqa%2F6HtKh7UsEzLXHztzIJV8U7n4MOve6nAP8nPpUL7urnqhr7gXBPe&X-Amz-Signature=78dd54836e9726f2211f83c23cc82a6941358ddffa67967ca1afff77122f74b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663APT5JKU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCzkIhn9ElS2vMSz9puNCvBPqDdCpXq8e04e%2FWD5jnjZQIhAM4PLip9l8VMkLti0s0en65NPmtABpYuCzhJmmZvr843Kv8DCGYQABoMNjM3NDIzMTgzODA1IgwFQPW5efRgv0rgUqQq3AMwyHvUHC8a9PdsA6P1rEuFCDukwpWC4ONdG%2FdG1MkA6RYVfa92iEWpKbS%2B3V%2BeQ8O5cI7pwxZ7Kz3hu5xyMm2YEcaX4goyNcRWrxDakVnd78Ubsl8WndhXVp%2FtcYQVpWd7l6THOqlzgQ%2BCvRsWisuUCfrohJpSzjd1WghovWC30GUQ7HVKM8lNwYcx54cRElrpzywZWEzZJge1B2VSRrT8qqOJqoHOCGWvMIaF0fAHKgbuDj7VtRCUBNbQQeoEYwM3Jlt71jU3U%2FSyYxsFP6oVEvkyu28lVsGzukmlJej4oXm%2BcXo1hBPiD0tEtvfymsfvcRh4PT6OILCmGADcE8y1OMa5s8%2B9WKU2tPuT69ZQErSsCmZnqX02klREf3Ie%2FQLTRfp6lKkEdVHLpdRC1l7nWEMY77nm4rHBTk6C9IgHmIHjBGo3lAJmysu74FPwmFt%2FF7Gb6iq%2B2badHmfmd4CyCnO1UqGyNZCX0iMVKOExpKn8109W2hGRtz8Mk3M3Hb3mJbb62qG6tsiQjsIP8t9DnvMsU7ssCGCL%2F9yU2U9ISAV0QiLbDQkp0U8kzNgFIjV2olPHXtCWSgBWIFcX846xQP35pPDbFAOEkAod%2F45BzMvTGUCnCQRoFbvd1DCI%2F5TEBjqkASUqGS%2FViDihcQ4y0CsiPizxIE9CSjdxQPGiD50qKMa0pQZJDGyKFWfoX0AWlh6Q7rzDglaXEAw8wY%2FHOL7%2B1LccajPmHL5QIoVDNI%2FInHYBNEseo%2B%2FB58R63zOhwc0sfv8TOlAevUu3XWYvj7WFkcS29lHBcAfS5lU5eFmbtbEDmp%2BKPagg9h8UK1DgfbMU1nplUFP%2Fzt041HBDanhGKsg1zKu5&X-Amz-Signature=7aa08cc13249cb137185840e9418bb1035a98c7860e49382a8f9ffdd4226b58e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
