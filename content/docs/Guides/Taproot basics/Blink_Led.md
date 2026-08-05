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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCU5WARO%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIBIqIbN0NYVp3GnvxmQqN2aStf8U4izdvLZPXVCrp%2BhEAiEAn8udvzMhZmNBIwfgXCGJYuClaEKhZvbqenHz3FJoVCoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLbLIiUMMI8vNKmMbSrcA1pu1ZMrq%2F6x2Gq2dVqOtNY%2FB7wal%2FETCVweWdJNgxfU8JBuelczjx8RrV0sT8LiT%2FhKP5TnZzFBhQuowVnRv%2BUvMUHvHda4gQB8MfQufp6EWkrQge48yjH5UUE%2FTpIItpuo4Cx4AvlvxBPH00yx5trtTP4PnOohh%2F9wZ8LsCSGY3f5Dxwk%2F%2B5Kp6BukIWjPne%2F8cuaIN44EOQVUV2Gq98aP1mTKagKNXwBsymrCc8NaBsc%2B42GqD%2FX%2BbTgnJPb2xlyorFfS4xHGwKphxnD1bNlAwUHGRYb5dnxKkaIc1OBtNP097sn2uTILzfmAj0ya%2FfERD%2B2ckBmvXtub26%2FeSUkYYAGlojPRVZaaMcZmqHY%2FbXWbQLUxSCXHdanrjexFTzZDls%2BDmPAi9qgkiXrQYNzwHhGxh8%2F5%2F%2B%2BlNoj%2FYr0GLZcXWNf7N5B2moUjaoBCIua192tNEYZfWgnkAmPCDs%2BTS2f0MwI9lm1b%2B%2FtuFoQIuSAlI9LM%2FL10wmAPdxIHTxbTgAq7SMNZ5c5F1N%2BBN21KG01xVliIN%2FnphHQE3PAsNMojgxtff%2F3MD05R1n0I0hdc1SQ3DjN3%2Be2VhwiQNN7NksdamQ9%2BtQg%2F59tUJMaMdwsfgdUFLBeioZ2qMNeUytMGOqUBBDV8%2BV55nipFxSJO9Rxzz9DRNaNfr1yNNq9mdVk0cadIOXoOcAU0%2BZ1wC7dX06CfzFjAPefs9KUxdkASqCMAMLWjjyRAYeGLgdsBQIal2extoNer%2FHIIardEJqhDZ%2Be3RdMuPyw2UvPyOaD0ax8saESBFqNIDbYYys9lMX4DoHTe9CvA4M%2FKnoewTC4Ewpw10GWTsDHcbQw9DJrvmCFTzQ8hO5IH&X-Amz-Signature=a8dcc6a4e8b5c90b6eedcde20c0ec84f3e1e74c1b6ac8c44f463e6054eeb6337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHMXCAPI%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIBtdp4mQFEFbC8JzXwUTAT7ClVn7hv5KRK9krO3DdMOOAiEAs4D48vd1JkelgP2AhIwhmDwGcL%2FF1wpwcTzTCSHjRBIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDMEdXZ2uvwMW3LNNXyrcA9UHdzNsJwhYi47UeQlfkpdy0MjgYnxhNMGiWK8VI69%2FlnsGLONw2hCJ1xMx2JK0DKvs2U5MCpp%2Bx1Ior4W4x5Y2BYxy3%2BuE2gocoXGFxsVq9cZIBBTs%2FdJ3rA%2FhhHEWDIom6y1qj7ifPxwo7VUBfhBt%2B%2FY3IWsf6BT2kRI4mrJD%2BcBrIyumt9TcynmrD2ecMolAraRv6PT3EckIVCqHi%2BtDQBPrx3EgkT6xNzEa9kxTdfHLeVu4%2BOT6GabJ5shLD%2BWaEAGiV%2BjAlJzLnV85mFsX1QzcBws7IwxlpeRPslo8FF7OUU58ko9Rwy5y2qKYR8qnEuAkG5lHanA6VctPP%2BwOhtO5IahytO9YE8JNoOWAC47oCfqHiaEdlSpHP5cHfG%2B24q6DrcWvU2H8Oa%2FTtGZ4Mv%2Br0gFZAmVSDTk2NYpK95%2Bb6iKR%2F4VAh%2BfNfcJPh%2BHxjRb1WDAR%2FQe6Dp12oGsGfFwRPtRwHaHRh0gIBacYjN7I1EapDSYu3tlo14kLUIOY5shgEzcE2xKN8rnPMvi4vsFs8LEHvjgmMfWuaWrLcd82BdKSwSjg%2BohfHkSjoYcrd7KpAF7gwxWgVZFYw5x1gXJfaaNgoFUfSDP1wNVgPZ4pK8P8xTDDOyz8MM6UytMGOqUBbNApoiZYtXC%2FYCgacG3UNh0Yur2iHwl8%2BAfq4FHUyCd1JT75YpNqZgXGSyCVmyCSEvNZaI6520zk2%2B72gdXEUJzbChaDhxb8TGxnX4wu8Q0hjbxM8B5zi9dutMoS2b1lDCh9a9TY2OxRoO7Xy9%2BBkITLGq930%2Bm%2BCPeLmpaCJrFEe39A%2FLmg2zX1N4B%2BUrG2MXBO8oEQBJDsvo4bIlt3VPVUPskR&X-Amz-Signature=c530757ccd1785f84d7ec2d5937a3d346689b0d7a4573f7393054acc08e4b034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
