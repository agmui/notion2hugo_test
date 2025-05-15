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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZBKEN3X%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFLpVivtprRyMFnCGO%2Bp7elpHeVft7kzrt915UEao5dIAiEAp%2BbleY%2B4lCtyR5QN2Pdo%2FiWIOA4qhg5K4PnSxkuiJwcq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHg74GZmhOK3BUV%2BpSrcA2QKgACAJhL7AnlLv6CMLKdXJqGBUoxMESuFyzmsBpkjloFnQiwprI6VcJnA7BWK27DCn5cFqhYdfteGTFpHTR9pEWk5f5HA9HJtw9ZyBeBVhuhpWm2U0N0Uy6%2FsitXabzLA1Aj4BEdQnqV78Q9cKvRS5VRvcs%2FnUxbPIAOasGNuOe0E1WL4QEftrwsYbqDUvWCVURAkoYZmMVw7o30%2FYcQ9Imxg4PRhS3mNf3xyebSbqeKk4wIVjOUD7HrW7LWVz6Wke%2BVHielV4r7qMUDrsr%2BGtd62LBI6egYcO2prx4GfwiVgVnqUNA0ScLtyr7umuuExntboQ52FUlG8oWchC9Sh62A821ixBtzSGlJsPYtgvMNcw%2BOAfCBMOrnCY%2F97aTxW3kPq8FIISZit%2BCUUoReOVTghDQ79%2B%2FbDzkovkhd6TTFS9DMNd67xbBgGWGUn2%2FwKFDFj3xfhF1u9vr9stuZL5qVih7Wq8xskSdV9zwfM1Rfw%2BYlxqe2jLZjjN7LaWwlVPjagDW48OT%2B4RKyaZmzLi6KLZe8LC2vufm95rraSOEoP87VFGNtPmqBCo6g2aJqF947i6hTN0Yv8Wva4LAmorxSVSZTRaIO%2FcBZAtWvrHIYriP%2F87ghHaw%2BhMODfmMEGOqUBmoResK%2FRfyDNGiDyw6TkXFOehqgU0VZFocADWLohKnXkOvd%2FDbkTDiUU9dE%2BUAQOtcUNqrllg%2FdDE2Pnibrcyu2XEYTZC9a2NZzuL3vjeDqMiB7j7BY663oxcqHIjPDaVlHED8DbA3sAWgIdOldtHnkum5IC62IQOQMKWfH%2F4%2BqDGisOK737%2B0lhu8XvUt%2BBRXmiJ%2B2jSeBvVXP1bAeJl7IDeI1P&X-Amz-Signature=250b225a3728830eefad56c077e597b6f2d16bf8086af1c4d7a028397361c9d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW4B3WOJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHpwhIiHN%2FB1Mqvh8Qr%2FYfbgHMFdABHQiP%2B5SbtSAcFYAiEAje%2FL%2FMEkAJ2xpjvaaeTDXgC4Mem2YOMFQ%2BiIgoi2d%2Fkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAdMQiFp92ZBRW%2BtdyrcA6eLZ%2F09HSvp14Dbc%2BWIyS67lflab4vipIsBxG0IpCpeofiMvfVwEg%2BELI%2F%2Fe2gDaixWN3bVjxLf5ySS%2FGLQwcqXUH6061nXkJksyxiJRQD%2Be3PZDgEM1w6uBKQsHIsu3%2BBw2yatHe70xvuUhjscI9NtRmgGrry%2FSswFcYShRt2oMufkGIuyuquMk99uWJEHQ2ZiObx1ALmiVAC2tvKPjclaFD3jzCe%2FT07bjUcn6l2acxQHFoSe%2FupKS%2BTNaj%2F3f1sxc5lIgi69fUbWz8%2FkUgnT9Xcsq2oeuyqGHCN6E680nTILKNr%2FDVfkeLGC8UEZcpY6kqxRAU8HC5FBy9EWsQ2oEPRq20OzrOReRd0VwZ21kv8GzhtXTr%2FyYFtpy2VfrxpqJxFZY43VRfJr9j1Wm40XDVq3cRWHs87BPMeg%2FCqvJkv2YDoDE%2F3cdeWzZe8xg4F%2FU2Q%2B9AN2ATPU6KEAnMbWGyoRIw6fIl9yfTYMetN%2BfvZiXWknespKN41Dic2f5q5Uv%2Fs6YCvif2pyS1zoc7qJFndFEs%2FdvJeXfRvw9rLwo2LIoMtQqQcL1XVAxiVBdNsq7xRwhvu893n9ZS7NEsZIoWzR51noLlYBM4mLfSZCpA%2BhDHRRI679sSySMITgmMEGOqUB6cUn5TD28SlqNrC7LY5a1zvVdMc%2BtPu7qwCGCpLcyN3gpAYiPeoBiGSgmPeiMUCL8Y31JlifxcRUDmnssQUDJJ1J9tPOK3IbiDAxdY49hshQfKyCEmQRkmUVl5pMj4qijvsTG60GHQqCm63RbaELlegUDzMv9XYTI47dSV9VWBdEu8d0K992jNXoKgyeXOaZ2EBDZESuWOI3ob7xRwDXTqsoPwxP&X-Amz-Signature=675c6108d1cdccecb0337921f0fa2003ed42fc4f2e4a1e4dd18ff87664a5473f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
